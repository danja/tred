# trev : triple editing and visualization

Quick & dirty RDF view/edit in the browser*, talking to a SPARQL store

I'm starting *wihout* having an RDF model in the browser to minimse dependencies. Later, if it seems a good idea, I'll integrate with [RDFJS](https://rdf.js.org/).

For development I'm working against a [Fuseki](https://jena.apache.org/documentation/fuseki2/) SPARQL store.

Part of the motivation is to help in the development of [SparqlPress](https://github.com/danja/sparqlpress2). That is backed by a ARC2 (PHP) store which has limitations in it's SPARQL capabilities, so in places it may be necessary to work around those in the browser JS. 
 
 _I had a quick stab at this in 2015 and then forgot about it. Now I want an RDF editor for [HKMS](https://hyperdata.it/blog/hyperdata-knowledge-management-system/) so reusing this repo_

## Status

**2021-12-08** lots of progress made, but still far from usable

_for detailed status see [devlog](https://github.com/danja/trev/blob/master/docs/devlog.md)_

**2021-11-05** : Revisiting, starting pretty much from scratch.

I'll put the work-in-progress live at https://hyperdata.it/trev
