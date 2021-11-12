# Trev Dev

**2021-11-09**

Sooo, the other day I immediately got errors with using browserify on rdf-ext.

What I really wanted was Plain Old Javascript in the browser, so pinged bergi again. He said that basically the browser angle was pretty much out of scope for rdf-ext and that if that's what I really wanted, webpack 4 is by far the best bet 'until everything is ESM'.

But I've been musing on this. bergi's general approach is generally to do things _properly_, no matter how much work is involved. I'm a lot sloppier, and for this little project, quick & dirty is fine. So I reckon I'll put together what I need just using JS objects in the browser, but build it in a way that I can easily switch to rdf-ext later. (It isn't essential here, but I am certain to want RDF-in-browser before long for other projects, so I will try WebPack...).

**2021-11-07**

Last night I had a go at my TODO list for this project, didn't get past step one. Whatever little I knew of rdf-ext I've forgotten. So I pinged [bergi](https://www.bergnet.org/people/bergi/card). As ever, very helpful and we had a good chat. He'd got great pointers for me : [Get Started with RDF in Javascript](https://zazuko.com/get-started/developers/), also when I mentioned templating he told me JS now has it buit in : [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).

"browserify is old school, but still works for most use cases. webpack is the more heavy tool, that handles all possible use cases. There are more lightweight options, but they have more specific requirements to the packages (incl. dependencies)."

Trying examples from _Get Started_ ^^ with browserify.

**2021-11-06**

Hmm, I was wondering about page layout so looked what I used for the sparql-diamonds stuff.

the bookmarking mini-app included : template engine **hogan**

time format utils **moment.js**

Hmm, ok.

But I have reasonable CSS for 2-column, form layout, praps reusable...

I have a starter TODO list on a sheet of A4.

First items :

- load vocab(s)
- drop-down list of classes

Ok, so I've got a vocab at :

https://raw.githubusercontent.com/danja/trev/master/data/project-owl.n3

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
