![logo history](https://img.alicdn.com/tfs/TB1JIIzmvDH8KJjy1XcXXcpdXXa-1918-832.png)

<p align="center">
  <a href="https://chrome.google.com/webstore/detail/idkjhjggpffolpidfkikidcokdkdaogg">
    <img width="500" src="https://img.alicdn.com/tfs/TB1qqEAmvDH8KJjy1XcXXcpdXXa-1674-968.png">
  </a>
</p>

## XSwitch

A [Chrome Extension](https://chrome.google.com/webstore/detail/idkjhjggpffolpidfkikidcokdkdaogg) for forwarding request urls.

## Why XSwitch

* can redirect `request.url` base on `chrome.webRequest.onBeforeRequest`.
* [Monaco Editor](https://github.com/Microsoft/monaco-editor) based, support proxy rules suggestions.
* support comments in JSON.

## Usage

> You can type `rule` + `Enter Key` to trigger insert `rule` snippet action

```js
{
  // proxyRules
  "proxy": [
    [
      "g.alicdn.com/platform/daily-test/isDaily.js", // from
      "alinw.alicdn.com/platform/daily-test/isDaily.js" //to
    ]
  ]
}
```

* visit [https://g.alicdn.com/platform/daily-test/isDaily.js](https://g.alicdn.com/platform/daily-test/isDaily.js)
* finally, you got [https://<b>alinw</b>.alicdn.com/platform/daily-test/isDaily.js](https://alinw.alicdn.com/platform/daily-test/isDaily.js)

## ProxyRules

### Rules

```js
{
  // proxyRules
  "proxy": [
    [
      "g.alicdn.com/platform/daily-test/isDaily.js",
      "alinw.alicdn.com/platform/daily-test/isDaily.js"
    ],
    [
       "//g.alicdn.com/platform/(.*)/(.*).js",
       "//localhost:3000/$1/$2.js"
    ],
    [
       "app.min.js",
       "app.js"
    ]
  ]
}
```

### Core

`src/background.js` :

```js
const reg = new RegExp(rule[0]);
// ...
return {
    redirectUrl: details.url.replace(reg, rule[1]);
}
```

### PRs Welcome
