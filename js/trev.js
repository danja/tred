const nsPrefixes = {
  'http://www.w3.org/1999/02/22-rdf-syntax-ns#': 'rdf',
  'http://www.w3.org/2000/01/rdf-schema#': 'rdfs',
  'http://xmlns.com/foaf/0.1/': 'foaf',
  'http://www.w3.org/2002/07/owl#': 'owl',
  'http://purl.org/dc/elements/1.1/': 'dc',
  'http://schema.org/': 'schema',
  'http://purl.org/stuff/': 'x',
  'http://purl.org/stuff/project#': 'prj'
}

class ViewNode {
  constructor (value, type) {
    this.value = value
    this.view = value
    this.type = type // uri, prefixed, literal, bnode
  }

  makeView () {
    if (this.type == 'uri') {
      for (const [ns, prefix] of Object.entries(nsPrefixes)) {
        if (this.value.startsWith(ns)) {
          this.view = `${prefix}:${this.value.substring(ns.length)}`
          //    this.view = prefix + ':' + this.value.substring(ns.length)
          this.type = 'prefixed' // redundant
          if (this.view == 'rdf:type') {
            this.view = 'a'
          }
          break
        }
      }
      if (this.type != 'prefixed') {
        // ugly
        this.view = `<${this.value}>`
      }
    }
    if (this.type == 'literal') {
      this.view = `"${this.value}"`
      // this.view = '"' + this.value + '"'
    }
    return this.view
  }
}

function test () {
  // renderTripleView($('#triple-view'), 'ssss', 'pppp', 'oooo')
}

function renderTripleView (
  parentElement,
  subjectView,
  predicateView,
  objectView
) {
  var triple = $(
    tripleHT(
      subjectView.makeView(),
      predicateView.makeView(),
      objectView.makeView()
    )
  )
  triple.appendTo(parentElement)
}

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
  var bindings = json.results.bindings

  for (let i = 0; i < bindings.length; i++) {
    var subjectViewNode = new ViewNode($('#current-resource').val(), 'uri')
    var propertyViewNode = new ViewNode(
      bindings[i].property.value,
      bindings[i].property.type
    )

    var objectViewNode = new ViewNode(
      bindings[i].object.value,
      bindings[i].object.type
    )

    renderTripleView(
      $('#property-object-list'),
      subjectViewNode,
      propertyViewNode,
      objectViewNode
    )
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
  test()
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
