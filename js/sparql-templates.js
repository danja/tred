var commonPrefixes = `
PREFIX rdf:     <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
PREFIX rdfs:    <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl:     <http://www.w3.org/2002/07/owl#>
PREFIX dc:      <http://purl.org/dc/elements/1.1/> 
PREFIX schema: <http://schema.org/>
PREFIX prj:     <http://purl.org/stuff/project#>`

var classesQT = function () {
  return (
    commonPrefixes +
    `
             SELECT DISTINCT ?class ?label WHERE {
  
             ?class a rdfs:Class ;
             rdfs:label ?label
          }`
  )
}

var wikidatanameQT = function (name) {
  return (
    commonPrefixes +
    `
           SELECT DISTINCT ?link WHERE {

           ?link schema:name "${name}"@en .
        }`
  )
}
