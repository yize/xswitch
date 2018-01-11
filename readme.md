## XSwitch

XSwitch: switch url for Chrome Users

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

We use proxy[][0] to create new Reg

```js
{
    redirectUrl: details.url.replace(reg, rule[1]);
}
```
