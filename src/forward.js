window.lastRequestId = null;
window.proxyConfig = {};
window.urls = new Array(200); // for cache
window.isString = string => ({}.toString.call(string) === '[object String]');
window.originRequest = new Map();

//Breaking the CORS Limitation
window.onHeadersReceivedCallback = (details, corsEnabled = true) => {

  if (window.proxyDisabled == 'disabled' || !corsEnabled) {
    return {};
  }

  let originUrl = details.url;
  let resHeaders = [];
  let CORSOrigin = '';

  if (details.responseHeaders && details.responseHeaders.filter) {
    resHeaders = details.responseHeaders.filter(responseHeader => {
      // Already has access-control-allow-origin headers
      if ('access-control-allow-origin'.indexOf(responseHeader.name.toLowerCase()) > -1) {
        CORSOrigin = responseHeader.value;
      }
      if (
        [
          'access-control-allow-origin',
          'access-control-allow-credentials',
          'access-control-allow-methods',
          'access-control-allow-headers'
        ].indexOf(responseHeader.name.toLowerCase()) < 0
      ) {
        return true;
      }
      return false;
    });
  }

  let CORSHeader = (window.originRequest.get(details.requestId)
    ? window.originRequest.get(details.requestId)
    : details.initiator) || '*';

  // suck point
  if (CORSOrigin === '*' && window.originRequest.get(details.requestId) === 'null') {
    CORSHeader = '*';
  }

  // console.group(details.url);
  // console.table({
  //   'ACAO':  CORSOrigin,
  //   'Origin': window.originRequest.get(details.requestId),
  //   'Final': CORSHeader,
  // })
  // console.groupEnd(details.url);

  // try {
  //   const rules = window.proxyConfig["Access-Control-Allow-Origin"];
  //   for (let i = 0; i < rules.length; i++) {
  //     const rule = rules[i];
  //     if (rule && rule[0] && window.isString(rule[1])) {
  //       let reg = rule[0];
  //       let matched = false;

  //       // support [ ] ( ) \ * ^ $
  //       if (/\\|\[|]|\(|\)|\*|\$|\^/i.test(reg)) {
  //         // support ??
  //         reg = new RegExp(reg.replace('??', '\\?\\?'), 'i');
  //         matched = reg.test(originUrl);
  //         if (matched){
  //           CORSHeader = reg[1];
  //         }
  //       } else {
  //         matched = originUrl.indexOf(reg) > -1;
  //         if (matched) {
  //           CORSHeader = reg[1];
  //         }
  //       }
  //     }
  //   }
  // } catch (e) {
  //   console.error('rule match error', e);
  // }

  resHeaders.push({
    name: 'Access-Control-Allow-Origin',
    value: CORSHeader
  });
  resHeaders.push({ name: 'Access-Control-Allow-Credentials', value: 'true' });
  resHeaders.push({
    name: 'Access-Control-Allow-Methods',
    value: '*'
  });
  resHeaders.push({
    name: 'Access-Control-Allow-Headers',
    value:
      'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
  });

  return {
    responseHeaders: resHeaders
  };
};

window.redirectToMatchingRule = details => {
  const rules = window.proxyConfig.proxy;
  let redirectUrl = details.url;

  // in case of chrome-extension downtime
  if (!rules || !rules.length || /^chrome-extension:\/\//i.test(redirectUrl)) {
    return {};
  }

  if (
    /http(s?):\/\/.*\.(js|css|json|jsonp)/.test(redirectUrl) &&
    window.urls.indexOf(redirectUrl) < 0
  ) {
    window.urls.shift();
    window.urls.push(redirectUrl);
  }

  try {
    for (let i = 0; i < rules.length; i++) {
      const rule = rules[i];
      if (rule && rule[0] && window.isString(rule[1])) {
        let reg = rule[0];
        let matched = false;

        // support [ ] ( ) \ * ^ $
        if (/\\|\[|]|\(|\)|\*|\$|\^/i.test(reg)) {
          // support ??
          reg = new RegExp(reg.replace('??', '\\?\\?'), 'i');
          matched = reg.test(redirectUrl);
          if (matched && details.requestId !== lastRequestId) {
            redirectUrl = redirectUrl.replace(reg, rule[1]);
          }
        } else {
          matched = redirectUrl.indexOf(reg) > -1;
          if (matched && details.requestId !== lastRequestId) {
            redirectUrl = redirectUrl.split(rule[0]).join(rule[1]);
          }
        }
      }
    }
  } catch (e) {
    console.error('rule match error', e);
  }

  window.lastRequestId = details.requestId;
  return redirectUrl === details.url ? {} : { redirectUrl };
};

window.onBeforeSendHeadersCallback = function (details) {
  for (var i = 0; i < details.requestHeaders.length; ++i) {
    if (details.requestHeaders[i].name === 'Origin') {
      window.originRequest.set(
        details.requestId,
        details.requestHeaders[i].value
      );
      break;
    }
  }

  return { requestHeaders: details.requestHeaders };
};

window.onBeforeRequestCallback = details => redirectToMatchingRule(details);
