const fetch = require('@rdfjs/fetch')

const res = await fetch('https://zazuko.github.io/tbbt-ld/dist/tbbt.nq')
const dataset = await res.dataset()

for (const quad of dataset) {
  console.log(
    `${quad.subject.value} ${quad.predicate.value} ${quad.object.value}`
  )
}
