<p align="center">
  <a href="https://chrome.google.com/webstore/detail/idkjhjggpffolpidfkikidcokdkdaogg">
    <img width="500" src="https://img.alicdn.com/tfs/TB1KBVSmDnI8KJjy0FfXXcdoVXa-1604-950.png">
  </a>
</p>

## XSwitch

A proxy tool based on Chrome.extensions

## why XSwitch

* Can redirect request url use `chrome.webRequest.onBeforeRequest`.
* Based on [Monaco Editor](https://github.com/Microsoft/monaco-editor), support words suggestions.
* Support comments.

## Usage

```js
{
  // proxyRules
  "proxy": [
    [
      "some_url_to_redirect", // from
      "some_url_to_redirect_to" //to
    ]
    // you can add rules here
  ]
}
```

## ProxyRules

### rules

```js
{
  // proxyRules
  "proxy": [
    [
      "//g.alicdn.com/platform/daily-test/isDaily.js",
      "//alinw.alicdn.com/platform/daily-test/isDaily.js"
    ]
    // you can also use RegExp
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

### Core:

```js
const reg = new RegExp(rule[0]);
// ...
return {
    redirectUrl: details.url.replace(reg, rule[1]);
}
```
