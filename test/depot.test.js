// import Depot from '../js/utils'

import { Depot } from '../js/utils.js'

const vocabURL = 'http://purl.org/stuff/test'
const vocabName = 'Test'

var testVocab = new Depot(vocabURL)

testVocab.set('name', vocabName)

console.log(testVocab.get('name'))
