function renderTriple (parentElement, subject, predicate, object) {}

function instancesHandler (json) {
  var bindings = json.results.bindings
  var instanceList = $('<ul id="instance-list">')
  for (var i = 0; i < bindings.length; i++) {
    let url = bindings[i].instance.value
    let instanceNode = $(instanceNodeHT(url))
    instanceList.append(instanceNode)
    instanceNode.click(function () {
      let clicked = $(this).text()
      $('#current-resource').val(clicked)
    })
  }
  $('#instance-list').replaceWith(instanceList)
}

function updateHandler (response) {
  alert(response)
}

function property_objectHandler (json) {
  const currentResource = $('#current-resource').val()
  var bindings = json.results.bindings
  console.log(JSON.stringify(bindings))
  console.log('property_objectHandler')
  for (let i = 0; i < bindings.length; i++) {
    // console.log(JSON.stringify(binding))

    const property = bindings[i].property.value
    const object = bindings[i].object.value
    const type = bindings[i].object.type
    console.log(type)
    const s = prefixify(currentResource)
    const p = prefixify(property)
    const o = prefixify(object)
    let triple = ''
    if (type == 'uri') {
      triple = property_object_uriHT(s, p, o)
    } else {
      triple = property_object_literalHT(s, p, o)
    }
    console.log(triple)
    $('#property-object-list').append(triple)
  }
}

function classesHandler (json) {
  var bindings = json.results.bindings
  console.log(JSON.stringify(bindings))

  var classes = []
  for (let i = 0; i < bindings.length; i++) {
    let label = bindings[i].label.value
    let url = bindings[i].class.value
    classes[label] = url
  }

  // var list = makeList(links)
  // $('#links').replaceWith(list)
  populateClassesMenu(classes)
}

function populateClassesMenu (classes) {
  var $dropdown = $('#classesDropdown')
  for (var key in classes) {
    var option = $('<option />')
    option.attr('value', classes[key])
    $dropdown.append(option.text(key))
  }
}

function appendTriple (txt) {
  console.log('new ' + txt)
  var box = $('#new-triples')
  box.val(box.val() + txt)
}

function generate () {
  const currentResource = $('#current-resource').val()
  const klass = $('#classesDropdown').val()

  if ($('#add-class-checkbox').prop('checked')) {
    var triple = '<' + currentResource + '> a <' + klass + '> . \n'
    appendTriple(triple)
  }
}

$(document).ready(function () {
  $('#instances-block').hide()

  submitQuery(classesQT(), classesHandler) // get classes for dropdown

  $('#current-resource').on('input', function () {
    // console.log('INPUT')
    $('#instances-block').hide()
    $('#new-triples').val('')
  })

  $('#load-button').click(function () {
    const currentResource = $('#current-resource').val()
    // console.log(currentResource)
    submitQuery(property_objectQT(currentResource), property_objectHandler) // get ? ?p ?o
  })

  $('#submit-button').click(function () {
    submitUpdate(postTriplesQT($('#new-triples').val()), updateHandler)
  })

  $('#generate-button').click(function () {
    generate()
  })

  $('#clear-button').click(function () {
    $('#new-triples').val('')
  })

  $('#classesDropdown').change(function () {
    const klass = $('#classesDropdown').val()
    $('#instances-block').show()
    submitQuery(instancesQT(klass), instancesHandler) // get instances for list
  })
  //
})
