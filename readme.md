<p align="center">
  <a href="https://chrome.google.com/webstore/detail/idkjhjggpffolpidfkikidcokdkdaogg">
    <img width="500" src="https://img.alicdn.com/tfs/TB1JIIzmvDH8KJjy1XcXXcpdXXa-1918-832.png">
  </a>
</p>

## XSwitch

[![Build Status](https://travis-ci.org/yize/xswitch.svg?branch=master)](https://travis-ci.org/yize/xswitch) [![Coverage Status](https://coveralls.io/repos/github/yize/xswitch/badge.svg?branch=master)](https://coveralls.io/github/yize/xswitch?branch=master)

A [Chrome Extension][web-store] for forwarding request urls.

<a href="https://chrome.google.com/webstore/detail/idkjhjggpffolpidfkikidcokdkdaogg">
  <img src="https://img.alicdn.com/tfs/TB1qqEAmvDH8KJjy1XcXXcpdXXa-1674-968.png">
</a>

## Features

* [x] can redirect `request.url` base on `chrome.webRequest.onBeforeRequest`.
* [x] [Monaco Editor][monaco-editor] based, support proxy rules suggestions.
* [x] support comments in JSON.

## Usage

> You can type `rule` + `Enter Key` to trigger insert `rule` snippet action

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
      // "http://localhost:3000/daily-test/$1.js"
    ]
  ]
}
```

* visit [https://alinw.alicdn.com/platform/daily-test/isDaily.js](https://alinw.alicdn.com/platform/daily-test/isDaily.js)
* finally, you got [https://<b>g.alicdn.com</b>/platform/daily-test/isDaily.<b>json</b>](https://g.alicdn.com/platform/daily-test/isDaily.json)

## License

XSwitch is released under the MIT license.

Copyright (c) 2018 yize <mailto:yize.shc@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[web-store]: https://chrome.google.com/webstore/detail/idkjhjggpffolpidfkikidcokdkdaogg
[screenshot]: https://img.alicdn.com/tfs/TB1qqEAmvDH8KJjy1XcXXcpdXXa-1674-968.png
[monaco-editor]: https://github.com/Microsoft/monaco-editor
