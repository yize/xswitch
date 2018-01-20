<p align="center">
  <a href="https://chrome.google.com/webstore/detail/idkjhjggpffolpidfkikidcokdkdaogg">
    <img width="440" src="https://img.alicdn.com/tfs/TB1yll4lyqAXuNjy1XdXXaYcVXa-880-560.png">
  </a>
</p>

## XSwitch

[![Build Status][build-status-badge]][build-status] [![Coverage Status][coverage-status-badge]][coverage-status]

A [Chrome Extension][web-store] for forwarding request urls.

<a href="https://chrome.google.com/webstore/detail/idkjhjggpffolpidfkikidcokdkdaogg">
  <img src="https://img.alicdn.com/tfs/TB1SNbynC_I8KJjy0FoXXaFnVXa-1672-1018.png">
</a>

## Features

* [x] redirect `request.url`
* [x] global switch control
* [x] disable browser cache
* [x] JSON comments
* [x] rule suggestions

## Usage

```js
{
  // proxyRules
  "proxy": [
    [
      "//alinw.alicdn.com/platform/daily-test/isDaily.js",
      "//alinw.alicdn.com/platform/daily-test/isDaily.json"
    ],
    [
      "alinw.alicdn.com",
      "g.alicdn.com"
    ],
    [
      // "(.*)/platform/daily-test/(.*).js$",
      // "http://127.0.0.1:3000/daily-test/$1.js"
    ]
  ]
}
```

* visit [https://alinw.alicdn.com/platform/daily-test/isDaily.js](https://alinw.alicdn.com/platform/daily-test/isDaily.js)
* finally, you got [https://<b>g.alicdn.com</b>/platform/daily-test/isDaily.<b>json</b>](https://g.alicdn.com/platform/daily-test/isDaily.json)

## License

[MIT](https://opensource.org/licenses/MIT) © [yize.shc](https://ithans.com)

[web-store]: https://chrome.google.com/webstore/detail/idkjhjggpffolpidfkikidcokdkdaogg
[monaco-editor]: https://github.com/Microsoft/monaco-editor
[build-status]: https://travis-ci.org/yize/xswitch
[build-status-badge]: https://travis-ci.org/yize/xswitch.svg?branch=master
[coverage-status]: https://coveralls.io/github/yize/xswitch?branch=master
[coverage-status-badge]: https://coveralls.io/repos/github/yize/xswitch/badge.svg?branch=master
