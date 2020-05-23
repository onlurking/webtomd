#!/usr/bin/env node

const Readability = require("readability");
const JSDOM = require("jsdom").JSDOM;
const requestPromise = require("request-promise-native");
var TurndownService = require('turndown')
writeFile = require('fs').writeFile;

var turndownService = new TurndownService({
  bulletListMarker: '-',
  codeBlockStyle: "fenced",
  emDelimiter: "*",
})

const [,, ...args] = process.argv;
const url = args[0];

async function getContent() {
    const body = await requestPromise(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:77.0) Gecko/20100101 Firefox/77.0'
      }
    });

    const doc = new JSDOM(body, {
        url: url,
    });

    const reader = new Readability(doc.window.document);
    const article = reader.parse();

    return article
}

async function main() {
  const article = await (await getContent())
  const markdown = await turndownService.turndown(article.content.toString() )
  const contents = `# ${article.title}\n\n${markdown}`

  writeFile(`${article.title}.md`, contents, function (err) {
    if (err) return console.log(err);
      console.log(`${article.title} > ${article.title}.md`);
    });
}

if(args.length > 0) {
  main()
}
