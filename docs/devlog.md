# Trev Dev

**2021-12-08**

Good progress all round.

Shifted the CSS to grid-based.

Started a list of [use-cases](use-cases.md) to help organise functionality, it really isn't obvious right now.

I think I'll try to stick to it being a single-page thing, keep it reasonably simple. But am using up space rapidly.

**2021-12-05**

https://chrome.google.com/webstore/detail/visbug

https://cssgr.id/

---

https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm

https://nodejs.org/api/esm.html

https://github.com/puppeteer/puppeteer

https://jestjs.io/docs/ecmascript-modules

https://github.com/tom-sherman/blog/blob/master/posts/02-running-jest-tests-in-a-browser.md

https://medium.com/welldone-software/an-overview-of-javascript-testing-7ce7298b9870

https://betterprogramming.pub/an-introduction-to-jest-javascript-testing-framework-b6677f0d30d

**2021-11-20**

Got a bit further. The approach I've been following is along the lines of simple additive construction. You specify/choose a resource as the current focus. Right now I've got it to show a dropdown of the rdfs:Classes in the store. You can choose one of these, check Add Class Membership, click Generate and it assembles the corresponding data into an edit box, click Submit to insert it into the store.

[16:38, 20/11/2021] Danny Ayers: I reckon I need to look at what actual data I'll have for a typical project
[16:39, 20/11/2021] Danny Ayers: I've got so many started but unfinished...
[16:39, 20/11/2021] Danny Ayers: I just remembered an electronics project I want to make : an accurate signal generator
[16:41, 20/11/2021] Danny Ayers: for the kind of electronics I do (especially music-related stuff), a signal generator is essential
[16:42, 20/11/2021] Danny Ayers: I have something I can use from the computer (part of an oscilloscope unit) but it's a bit inconvenient in practice
[16:43, 20/11/2021] Danny Ayers: also got one I made ages ago - very good good for quick tests, but really not accurate

**2021-11-16**

updated node to 16.13.0 using https://phoenixnap.com/kb/update-node-js-version

jest.config.js - nah, putting things into package.json

Spent ages trying to get Jest running with ESM, it just wouldn't be happy.

```
 /home/danny/HKMS/trev/test/depot.test.js:3
    import { Depot } from '../utils.js'
    ^^^^^^

    SyntaxError: Cannot use import statement outside a module
```

Gave up for now, install have added :

```
  <script type="module" src="test/depot.test.js"></script>
```

to the end of index.html

**2021-11-15**

(I've updated this machine to Ubuntu 21.10, getting rather a lot of random segfaults...)

To avoid having to get vocabs every session I've started a class called Depot as a wrapper around localstorage.

While I'm trying to figure this out, could do with tests. Jest seems to be a popular choice, can run from node CLI.

npm install --save-dev --global jest

https://itsfoss.com/upgrade-linux-kernel-ubuntu/

https://kernel.ubuntu.com/~kernel-ppa/mainline/v5.14/

**2021-11-13**

Yesterday I had a play with ES6 Template Literals. Managed to rewrite the wikidata-name example at sparql-diamonds to use them. It's probably possible to do it in a more elegant fashion, but for now at least this kind of thing works ok :

````
      var wikidatanameQT = function (name) {
        return `
           PREFIX schema: <http://schema.org/>

           SELECT DISTINCT ?link WHERE {

           ?link schema:name "${name}"@en .
        }`
      }
...

 var wikidataNameSparql = wikidatanameQT(name)
      ```



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
````
