function submitQuery (sparql, resultsHandler) {
  //  console.log(sparql)
  var url =
    SparqlServer.queryEndpoint +
    '?query=' +
    encodeURIComponent(sparql) +
    '&output=json'

  doQuery(url, resultsHandler)
}

function doQuery (pageURL, callback) {
  $.ajax({
    url: pageURL,
    // accept: {
    // xml: 'application/xml;charset=UTF-8',
    // sparql: 'sparql-results+xml;charset=UTF-8'
    // },
    headers: {
      // belt and braces
      Accept: 'application/sparql-results+json, application/json;charset=UTF-8'
    }
  })
    .done(function (json) {
      // var json = sparqlXMLtoJSON(xml);

      if (!json) {
        json = '{}'
      }
      callback(json)
    })
    .fail(function () {
      alert('error in doQuery')
    })
}

function submitUpdate (sparql, resultsHandler) {
  console.log(sparql)
  $.ajax({
    type: 'POST',
    url: SparqlServer.updateEndpoint,
    headers: {
      Accept: 'text/plain,*/*;q=0.9'
    },
    data: {
      update: sparql
    }
  })
    .done(function (response) {
      resultsHandler(response)
    })

    .fail(function (e) {
      alert('error doInsert' + JSON.stringify(e))
    })
}
