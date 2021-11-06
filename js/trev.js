// const fetch = require('@rdfjs/fetch')

const label = 'http://www.w3.org/2000/01/rdf-schema#label'

fetch('https://raw.githubusercontent.com/danja/trev/master/data/project-owl.n3')
  .then(res => console.log(res))

  /*
  .then(res => res.dataset())
  .then(dataset => {
    for (const quad of dataset) {
      if (quad.predicate.value === label) {
        console.log(`${quad.subject.value}: ${quad.object.value}`)
      }
    }
  })
  */
  .catch(err => console.error(err))
