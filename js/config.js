/*
 *    System Constants
 */

const SparqlServer = {
  queryEndpoint: 'http://localhost:3030/test/sparql',
  updateEndpoint: 'http://localhost:3030/test/update'
  //   queryEndpoint: 'https://query.wikidata.org/sparql',
  //  host: 'http://localhost:3030',
  //  queryPath: '/test/sparql',
  //  updatePath: '/test/update'
}

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

/* used in the RDF, not dereferenced here */

// var bookmarkBaseURI = 'http://hyperdata.it/bookmarks/'
