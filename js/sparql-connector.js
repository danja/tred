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

function submitQuery (sparql, resultsHandler) {
  //  console.log(sparql)
  var url =
    SparqlServer.queryEndpoint +
    '?query=' +
    encodeURIComponent(sparql) +
    '&output=json'

  doQuery(url, resultsHandler)
}
