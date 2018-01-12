![logo history](https://img.alicdn.com/tfs/TB1JIIzmvDH8KJjy1XcXXcpdXXa-1918-832.png)

<p align="center">
  <a href="https://chrome.google.com/webstore/detail/idkjhjggpffolpidfkikidcokdkdaogg">
    <img width="500" src="https://img.alicdn.com/tfs/TB1kuGPmvDH8KJjy1XcXXcpdXXa-1280-800.png">
  </a>
</p>

## XSwitch

A proxy tool based on Chrome.extensions

## why XSwitch

* Can redirect request url base on `chrome.webRequest.onBeforeRequest`.
* [Monaco Editor](https://github.com/Microsoft/monaco-editor) Based, support words and method suggestions.
* Support comments in JSON.

## Usage

> You can enter `rule` and hit `Enter Key` to trigger insert `rule` snippet action
> Notice JSON validation

```js
{
  // proxyRules
  "proxy": [
    [
      "g.alicdn.com/platform/daily-test/isDaily.js", // from
      "alinw.alicdn.com/platform/daily-test/isDaily.js" //to
    ],
    rule
  ]
}
```

* Visit [https://g.alicdn.com/platform/daily-test/isDaily.js](https://g.alicdn.com/platform/daily-test/isDaily.js)
* Final you got [https://<b>alinw</b>.alicdn.com/platform/daily-test/isDaily.js](https://alinw.alicdn.com/platform/daily-test/isDaily.js)

## ProxyRules

### Rules

```js
{
  // proxyRules
  "proxy": [
    [
      "//g.alicdn.com/platform/daily-test/isDaily.js",
      "//alinw.alicdn.com/platform/daily-test/isDaily.js"
    ]
    // RegExp
    // [
    //   "//g.alicdn.com/platform/daily-test/(.*).js",
    //   "//localhost:3000/daily-test/$1.js"
    // ]
    // [
    //   "source",
    //   "target"
    // ]
    // you can add rules here
  ]
}
```

### Core

```js
const reg = new RegExp(rule[0]);
// ...
return {
    redirectUrl: details.url.replace(reg, rule[1]);
}
```

### PR Welcome
