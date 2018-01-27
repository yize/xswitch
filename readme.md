<p align="center">
  <a href="https://chrome.google.com/webstore/detail/idkjhjggpffolpidfkikidcokdkdaogg">
    <img width="440" src="https://img.alicdn.com/tfs/TB1yll4lyqAXuNjy1XdXXaYcVXa-880-560.png">
  </a>
</p>

## XSwitch

[![Chrome version][badge-cws]][link-cws] [![Chrome version][badge-cws-count]][link-cws] [![Build Status][badge-travis]][link-travis] [![Coverage Status][badge-coverage]][link-coverage] [![license][badge-license]][link-xswitch]

A [Chrome Extension][link-cws] for forwarding request urls.

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

[link-xswitch]: https://github.com/yize/xswitch
[link-cws]: https://chrome.google.com/webstore/detail/idkjhjggpffolpidfkikidcokdkdaogg
[link-me]: https://github.com/Microsoft/monaco-editor
[link-travis]: https://travis-ci.org/yize/xswitch
[link-coverage]: https://coveralls.io/github/yize/xswitch?branch=master
[badge-travis]: https://travis-ci.org/yize/xswitch.svg?branch=master
[badge-coverage]: https://coveralls.io/repos/github/yize/xswitch/badge.svg?branch=master
[badge-license]: https://img.shields.io/github/license/yize/xswitch.svg
[badge-cws]: https://img.shields.io/chrome-web-store/v/idkjhjggpffolpidfkikidcokdkdaogg.svg?label=chrome
[badge-cws-count]: https://img.shields.io/chrome-web-store/users/idkjhjggpffolpidfkikidcokdkdaogg.svg
