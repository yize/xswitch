<p align="center">
  <a href="https://chrome.google.com/webstore/detail/idkjhjggpffolpidfkikidcokdkdaogg">
    <img width="440" src="https://img.alicdn.com/tfs/TB1yll4lyqAXuNjy1XdXXaYcVXa-880-560.png">
  </a>
</p>

[中文版](./readme.md)

## XSwitch

[![Chrome version][badge-cws]][link-cws] [![Chrome version][badge-cws-count]][link-cws] [![Build Status][badge-travis]][link-travis] [![Coverage Status][badge-coverage]][link-coverage] [![license][badge-license]][link-xswitch]

A [Chrome Extension][link-cws] for redirecting/forwarding request urls.

<a href="https://chrome.google.com/webstore/detail/idkjhjggpffolpidfkikidcokdkdaogg">
  <img src="https://img.alicdn.com/tfs/TB1SNbynC_I8KJjy0FoXXaFnVXa-1672-1018.png">
</a>

## Features

- [x] Redirect `request.url`
- [x] Global switch control
- [x] Disable browser cache
- [x] JSON comments
- [x] Rule suggestions
- [x] CORS
- [x] CORS & browser cache control
- [x] Rules Grouping

## Usage

更多说明：[https://yuque.com/jiushen/blog/xswitch-readme](https://yuque.com/jiushen/blog/xswitch-readme)

Rules will be executed in order before all requests are initiated.

```js
{
  // proxyRules
  "proxy": [
    [
      "//alinw.alicdn.com/platform/daily-test/isDaily.js",
      "//alinw.alicdn.com/platform/daily-test/isDaily.json"
    ],
    // string replace, global mode
    [
      "alinw",
      "g"
    ]
    // replace all x.min to x
    [
      ".min",
      ""
    ],
    // use reg
    [
      "(.*)/platform/daily-test/(.*).js$",
      "http://127.0.0.1:3000/daily-test/$1.js"
    ],
    // replace to inline JavaScript
    [
      "https://alinw.alicdn.com/platform/daily-test/isDaily.js",
      "data:text/javascript,window.__isDaily = true;"
    ]
  ],
  // urls that want CORS
  "cors": [
    "cors.a.com",
    "(.*).b.com"
  ]
}
```

## License

[MIT](https://opensource.org/licenses/MIT) © [yize.shc](https://nsole.co)

[link-xswitch]: https://github.com/yize/xswitch
[link-cws]: https://chrome.google.com/webstore/detail/xswitch/idkjhjggpffolpidfkikidcokdkdaogg
[link-me]: https://github.com/Microsoft/monaco-editor
[link-travis]: https://travis-ci.org/yize/xswitch
[link-coverage]: https://coveralls.io/github/yize/xswitch?branch=master
[badge-travis]: https://travis-ci.org/yize/xswitch.svg?branch=master
[badge-coverage]: https://coveralls.io/repos/github/yize/xswitch/badge.svg?branch=master
[badge-license]: https://img.shields.io/github/license/yize/xswitch.svg
[badge-cws]: https://img.shields.io/chrome-web-store/v/idkjhjggpffolpidfkikidcokdkdaogg.svg?label=chrome
[badge-cws-count]: https://img.shields.io/chrome-web-store/users/idkjhjggpffolpidfkikidcokdkdaogg.svg
