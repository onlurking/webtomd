# WebToMD

WebToMD is a CLI program written in Javascript to save articles as markdown files.

Under the hood the WebToMD uses Mozilla's [Readability.js](https://github.com/mozilla/readability) for extracting the main content, which is used in Firefox Reader Mode.

Also [JSDom](https://github.com/jsdom/jsdom) for parsing dynamic content which requires Javascript (for example: Angular.js, Vue.js and React sites) and the [turndown](https://github.com/domchristie/turndown) library to write the DOM content to markdown.

This program output is design to be compatible with the **markdown-clipper** extension for [Chrome](https://chrome.google.com/webstore/detail/markdown-clipper/cjedbglnccaioiolemnfhjncicchinao?hl=en) and [Firefox](https://addons.mozilla.org/en-US/firefox/addon/markdown-clipper/).

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install:

```bash
npm i -g webtomd
```

## Usage

```shell
webtomd [link]
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
