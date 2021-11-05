# Trev Dev

**2021-11-05**

So...coming back at this after 7 years. My requirements have changed a little, but the main point remains the same - be able to quickly edit & view RDF in the browser.

Motivation right now is to quickly create/view/edit project description data. This will be persisted in a SPARQL store (I'm using [Fuseki](https://jena.apache.org/documentation/fuseki2/).

_What can I reuse from old Trev?_

Hmm. The libs I was using still look right :

- [rdf-ext](https://github.com/rdf-ext/rdf-ext) - JS RDF libs (built with [rdf-ext-dist-builder](https://github.com/rdf-ext-archive/rdf-ext-dist-builder))
- [mustache](https://github.com/janl/mustache.js) - 'logic-less' templating
- [jquery](https://jquery.com/) - simplify DOM operations, Ajax etc.

Get latest distros...

For rdf-ext, I'd already got node.js installed, had to add [lodash](https://www.npmjs.com/package/lodash) to run the dist builder.

While here, I think I'll add -

- [marked](https://github.com/markedjs/marked) - markdown processor

I'd got a boilerplate CSS downloaded from somewhere, might as well use that as a placeholder for now.

re. vocabs - I did a _Project_ vocab years ago, copied over [here](https://github.com/danja/trev/blob/master/data/project-owl.n3). Also got the material I used for [FooWiki]() which mostly uses standard vocabs, [example here](https://github.com/danja/trev/blob/master/data/foowiki-example.ttl).

I've got bits from [sparql-diamonds](https://github.com/danja/sparql-diamonds), sparql-connector.js, utils.js & config.js that should cover Ajax to the SPARQL store. That code includes a lot of cruft, so probably a good opportunity to tidy up.

For convenience a SPARQL editor/client will be a good idea, but for now at least the one used in Fuseki will suffice. Maybe use the lib to make something a bit more customised.
