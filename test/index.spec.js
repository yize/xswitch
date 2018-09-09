require('../src/forward.js');

beforeEach(() => {
  window.lastRequestId = null;
  window.proxyConfig = {};
  window.urls = new Array(200);
});

describe('no rules', () => {
  test('no forwarding when no rules', () => {
    expect(
      window.redirectToMatchingRule({ url: 'g.alicdn.com', requestId: 1 })
    ).toEqual({});
    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com??a.js,b.js,c.js',
        requestId: 2
      })
    ).toEqual({});
    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com??a.js,b.js,c.js',
        requestId: 2
      })
    ).toEqual({});
  });
});

describe('rule[1] is not string', () => {
  test('no forwarding when no rule[1]', () => {
    window.proxyConfig.proxy = [['g.alicdn.com']];
    expect(
      window.redirectToMatchingRule({ url: 'g.alicdn.com', requestId: 1 })
    ).toEqual({});
    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com??a.js,b.js,c.js',
        requestId: 2
      })
    ).toEqual({});
  });

  test('no forwarding when rule[1] is not string', () => {
    window.proxyConfig.proxy = [['g.alicdn.com', ['a', 'b']]];
    expect(
      window.redirectToMatchingRule({ url: 'g.alicdn.com', requestId: 1 })
    ).toEqual({});
    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com??a.js,b.js,c.js',
        requestId: 2
      })
    ).toEqual({});
  });

  test('no forwarding when rule[1] is not string', () => {
    window.proxyConfig.proxy = [['g.alicdn.com', {}]];
    expect(
      window.redirectToMatchingRule({ url: 'g.alicdn.com', requestId: 1 })
    ).toEqual({});
    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com??a.js,b.js,c.js',
        requestId: 2
      })
    ).toEqual({});
  });
});

describe('chrome-extension://', () => {
  test('should not forward', () => {
    window.proxyConfig.proxy = [['(.*).js', '$1..js']];
    expect(
      window.redirectToMatchingRule({
        url: 'chrome-extension://xxxxx/a.js',
        requestId: 1
      })
    ).toEqual({});
  });
  test('should not forward', () => {
    window.proxyConfig.proxy = [['xxxxx', 'xxxx']];
    expect(
      window.redirectToMatchingRule({
        url: 'chrome-extension://xxxxx/a.js',
        requestId: 2
      })
    ).toEqual({});
  });
});

describe('same request id should not forwarding', () => {
  test('no forwarding', () => {
    expect(
      window.redirectToMatchingRule({ url: 'g.alicdn.com', requestId: 1 })
    ).toEqual({});
    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com??a.js,b.js,c.js',
        requestId: 1
      })
    ).toEqual({});
  });
});

describe('string urls', () => {
  test('should forwarding normal url without query', () => {
    window.proxyConfig.proxy = [['g.alicdn.com', 'g.alicdn.com?t=2']];
    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com',
        requestId: 1
      }).redirectUrl
    ).toEqual('https://g.alicdn.com?t=2');

    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com#aaaa',
        requestId: 2
      })
    ).toEqual({
      redirectUrl: 'https://g.alicdn.com?t=2#aaaa'
    });
    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com/??a.js,b.js,c.js',
        requestId: 3
      }).redirectUrl
    ).toEqual('https://g.alicdn.com?t=2/??a.js,b.js,c.js');
  });

  test('should forwarding normal url with query', () => {
    window.proxyConfig.proxy = [
      ['https://g.alicdn.com?t=1', 'https://g.alicdn.com?t=2']
    ];
    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com?t=1&k=2',
        requestId: 1
      }).redirectUrl
    ).toEqual('https://g.alicdn.com?t=2&k=2');

    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com#aaaa',
        requestId: 2
      }).redirectUrl
    ).toBeFalsy();

    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com?t=1#aaaa',
        requestId: 3
      }).redirectUrl
    ).toEqual('https://g.alicdn.com?t=2#aaaa');
  });
  test('should forwarding url with ?? ', () => {
    window.proxyConfig.proxy = [
      ['https://a.com/??a.js,b.js', 'https://b.com/??a.js,b.js']
    ];
    expect(
      window.redirectToMatchingRule({
        url: 'https://a.com/??a.js,b.js',
        requestId: 1
      }).redirectUrl
    ).toEqual('https://b.com/??a.js,b.js');

    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com/#aaaa',
        requestId: 2
      }).redirectUrl
    ).toBeFalsy();

    expect(
      window.redirectToMatchingRule({
        url: 'https://a.com/??a.js,b.js?t=1#aaa',
        requestId: 3
      }).redirectUrl
    ).toEqual('https://b.com/??a.js,b.js?t=1#aaa');
  });
});

describe('reg urls', () => {
  test('should forwarding reg url without query', () => {
    window.proxyConfig.proxy = [['g.(\\w+).com', 'g.alicdn.com?t=2']];

    expect(
      window.redirectToMatchingRule({
        url: 'https://g1.alicdn.com',
        requestId: 1
      }).redirectUrl
    ).toBeFalsy();

    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com',
        requestId: 2
      }).redirectUrl
    ).toEqual('https://g.alicdn.com?t=2');

    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com#aaaa',
        requestId: 3
      }).redirectUrl
    ).toEqual('https://g.alicdn.com?t=2#aaaa');
    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com/??a.js,b.js,c.js',
        requestId: 4
      }).redirectUrl
    ).toEqual('https://g.alicdn.com?t=2/??a.js,b.js,c.js');
  });

  test('should forwarding reg url with query', () => {
    window.proxyConfig.proxy = [
      ['(.*)g.(.*).com\\?t=1', 'https://g.alicdn.com?t=2']
    ];
    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com?t=1&k=2',
        requestId: 1
      }).redirectUrl
    ).toEqual('https://g.alicdn.com?t=2&k=2');

    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com#aaaa',
        requestId: 2
      }).redirectUrl
    ).toBeFalsy();

    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com?t=1#aaaa',
        requestId: 3
      }).redirectUrl
    ).toEqual('https://g.alicdn.com?t=2#aaaa');
  });

  test('should forwarding reg url with ??', () => {
    window.proxyConfig.proxy = [
      ['(.*)g.alicdn.com/\\?\\?(.*)', '$1alinw.alicdn.com/??$2']
    ];
    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com/??a.js,b.js?t=1',
        requestId: 1
      }).redirectUrl
    ).toEqual('https://alinw.alicdn.com/??a.js,b.js?t=1');

    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com/#aaaa',
        requestId: 2
      }).redirectUrl
    ).toBeFalsy();

    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com/??a.js,b.js?t=1#aaa',
        requestId: 3
      }).redirectUrl
    ).toEqual('https://alinw.alicdn.com/??a.js,b.js?t=1#aaa');
  });
});

describe('multiple rules', () => {
  test('should support multiple rules', () => {
    window.proxyConfig.proxy = [
      [
        '//g.alicdn.com/platform/daily-test/(.*).js$',
        '//g.alicdn.com/platform/daily-test/$1.json'
      ],
      ['g.alicdn.com', 'alinw.alicdn.com']
    ];
    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com/platform/daily-test/isDaily.js',
        requestId: 1
      }).redirectUrl
    ).toEqual('https://alinw.alicdn.com/platform/daily-test/isDaily.json');
  });
});

describe('CORS without Access-Control-Allow-Origin', () => {
  test('should support cors', () => {
    window.proxyConfig.proxy = [
      [
        'http://dev-smart.youku.com/(.*).json',
        'http://pre-youku-smart.youku.com/$1.json'
      ]
    ];
    var testheaderDetails = {
      frameId: 0,
      initiator: 'http://dev-smart.youku.com',
      method: 'GET',
      parentFrameId: -1,
      requestId: '265010',
      responseHeaders: [
        {
          name: 'Date',
          value: 'Wed, 11 Jul 2018 12:38:45 GMT'
        },
        {
          name: 'Content-Type',
          value: 'application/json;charset=UTF-8'
        },
        {
          name: 'Transfer-Encoding',
          value: 'chunked'
        },
        {
          name: 'Connection',
          value: 'keep-alive'
        },
        {
          name: 'Vary',
          value: 'Accept-Encoding'
        },
        {
          name: 'X-Application-Context',
          value: 'youku-smart-admin:7001'
        },
        {
          name: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          name: 'X-XSS-Protection',
          value: '1; mode=block'
        },
        {
          name: 'Cache-Control',
          value: 'no-cache, no-store, max-age=0, must-revalidate'
        },
        {
          name: 'Pragma',
          value: 'no-cache'
        },
        {
          name: 'Expires',
          value: '0'
        },
        {
          name: 'X-Frame-Options',
          value: 'DENY'
        },
        {
          name: 'Strict-Transport-Security',
          value: 'max-age=31536000 ; includeSubDomains'
        },
        {
          name: 'Content-Encoding',
          value: 'gzip'
        },
        {
          name: 'Server',
          value: 'Tengine/Aserver'
        },
        {
          name: 'EagleEye-TraceId',
          value: '0a67793015313127251908120e23db'
        },
        {
          name: 'Timing-Allow-Origin',
          value: '*'
        }
      ],
      statusCode: 200,
      statusLine: 'HTTP/1.1 200',
      tabId: 2988,
      timeStamp: 1531312725294.728,
      type: 'xmlhttprequest',
      url: 'http://pre-youku-smart.youku.com/overview/type.json?'
    };
    var expectHeaderDetails = [
      {
        name: 'Date',
        value: 'Wed, 11 Jul 2018 12:38:45 GMT'
      },
      {
        name: 'Content-Type',
        value: 'application/json;charset=UTF-8'
      },
      {
        name: 'Transfer-Encoding',
        value: 'chunked'
      },
      {
        name: 'Connection',
        value: 'keep-alive'
      },
      {
        name: 'Vary',
        value: 'Accept-Encoding'
      },
      {
        name: 'X-Application-Context',
        value: 'youku-smart-admin:7001'
      },
      {
        name: 'X-Content-Type-Options',
        value: 'nosniff'
      },
      {
        name: 'X-XSS-Protection',
        value: '1; mode=block'
      },
      {
        name: 'Cache-Control',
        value: 'no-cache, no-store, max-age=0, must-revalidate'
      },
      {
        name: 'Pragma',
        value: 'no-cache'
      },
      {
        name: 'Expires',
        value: '0'
      },
      {
        name: 'X-Frame-Options',
        value: 'DENY'
      },
      {
        name: 'Strict-Transport-Security',
        value: 'max-age=31536000 ; includeSubDomains'
      },
      {
        name: 'Content-Encoding',
        value: 'gzip'
      },
      {
        name: 'Server',
        value: 'Tengine/Aserver'
      },
      {
        name: 'EagleEye-TraceId',
        value: '0a67793015313127251908120e23db'
      },
      {
        name: 'Timing-Allow-Origin',
        value: '*'
      },
      {
        name: 'Access-Control-Allow-Origin',
        value: 'http://dev-smart.youku.com'
      },
      {
        name: 'Access-Control-Allow-Credentials',
        value: 'true'
      },
      {
        name: 'Access-Control-Allow-Methods',
        value: '*'
      },
      {
        name: 'Access-Control-Allow-Headers',
        value: 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, X-Referer, X-ZA-Product, Content-Encoding, X-ZA-Batch-Size, X-ZA-Log-Version'
      }
    ];
    expect(
      window.onHeadersReceivedCallback(testheaderDetails).responseHeaders
    ).toEqual(expectHeaderDetails);
  });
});

describe('CORS withCredentials', () => {
  test('should support cors', () => {
    window.proxyConfig.proxy = [
      ['http://localhost:8000/(.*).json', 'http://ottscg.alibaba.net/$1.json']
    ];
    var testheaderDetails = {
      frameId: 0,
      initiator: 'http://localhost:8000',
      method: 'GET',
      parentFrameId: -1,
      requestId: '271953',
      responseHeaders: [
        {
          name: 'Date',
          value: 'Thu, 12 Jul 2018 02:32:09 GMT'
        },
        {
          name: 'Content-Type',
          value: 'application/json;charset=UTF-8'
        },
        {
          name: 'Transfer-Encoding',
          value: 'chunked'
        },
        {
          name: 'Connection',
          value: 'keep-alive'
        },
        {
          name: 'Vary',
          value: 'Accept-Encoding'
        },
        {
          name: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          name: 'X-XSS-Protection',
          value: '1; mode=block'
        },
        {
          name: 'Cache-Control',
          value: 'no-cache, no-store, max-age=0, must-revalidate'
        },
        {
          name: 'Pragma',
          value: 'no-cache'
        },
        {
          name: 'Expires',
          value: '0'
        },
        {
          name: 'X-Frame-Options',
          value: 'DENY'
        },
        {
          name: 'Strict-Transport-Security',
          value: 'max-age=31536000 ; includeSubDomains'
        },
        {
          name: 'Access-Control-Allow-Credentials',
          value: 'true'
        },
        {
          name: 'Access-Control-Allow-Origin',
          value: 'http://localhost:8000'
        },
        {
          name: 'Vary',
          value: 'Origin'
        },
        {
          name: 'Access-Control-Expose-Headers',
          value: 'Set-Cookie'
        },
        {
          name: 'X-Application-Context',
          value: 'ottscgadmin:7001'
        },
        {
          name: 'EagleEye-TraceId-daily',
          value: '1e37823915313627291994023e'
        },
        {
          name: 'Content-Encoding',
          value: 'gzip'
        },
        {
          name: 'Server',
          value: 'Tengine/Aserver'
        },
        {
          name: 'EagleEye-TraceId',
          value: '0bef992c15313627291782432e3237'
        },
        {
          name: 'Timing-Allow-Origin',
          value: '*'
        }
      ],
      statusCode: 200,
      statusLine: 'HTTP/1.1 200',
      tabId: 3055,
      timeStamp: 1531362729284.772,
      type: 'xmlhttprequest',
      url: 'http://ottscg.alibaba.net/scg/option.json?'
    };
    var expectHeaderDetails = [
      {
        name: 'Date',
        value: 'Thu, 12 Jul 2018 02:32:09 GMT'
      },
      {
        name: 'Content-Type',
        value: 'application/json;charset=UTF-8'
      },
      {
        name: 'Transfer-Encoding',
        value: 'chunked'
      },
      {
        name: 'Connection',
        value: 'keep-alive'
      },
      {
        name: 'Vary',
        value: 'Accept-Encoding'
      },
      {
        name: 'X-Content-Type-Options',
        value: 'nosniff'
      },
      {
        name: 'X-XSS-Protection',
        value: '1; mode=block'
      },
      {
        name: 'Cache-Control',
        value: 'no-cache, no-store, max-age=0, must-revalidate'
      },
      {
        name: 'Pragma',
        value: 'no-cache'
      },
      {
        name: 'Expires',
        value: '0'
      },
      {
        name: 'X-Frame-Options',
        value: 'DENY'
      },
      {
        name: 'Strict-Transport-Security',
        value: 'max-age=31536000 ; includeSubDomains'
      },
      {
        name: 'Vary',
        value: 'Origin'
      },
      {
        name: 'Access-Control-Expose-Headers',
        value: 'Set-Cookie'
      },
      {
        name: 'X-Application-Context',
        value: 'ottscgadmin:7001'
      },
      {
        name: 'EagleEye-TraceId-daily',
        value: '1e37823915313627291994023e'
      },
      {
        name: 'Content-Encoding',
        value: 'gzip'
      },
      {
        name: 'Server',
        value: 'Tengine/Aserver'
      },
      {
        name: 'EagleEye-TraceId',
        value: '0bef992c15313627291782432e3237'
      },
      {
        name: 'Timing-Allow-Origin',
        value: '*'
      },
      {
        name: 'Access-Control-Allow-Origin',
        value: 'http://localhost:8000'
      },
      {
        name: 'Access-Control-Allow-Credentials',
        value: 'true'
      },
      {
        name: 'Access-Control-Allow-Methods',
        value: '*'
      },
      {
        name: 'Access-Control-Allow-Headers',
        value: 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, X-Referer, X-ZA-Product, Content-Encoding, X-ZA-Batch-Size, X-ZA-Log-Version'
      }
    ];
    expect(
      window.onHeadersReceivedCallback(testheaderDetails).responseHeaders
    ).toEqual(expectHeaderDetails);
  });
});

describe('CORS withCredentials and no proxyConfig', () => {
  test('should return {}', () => {
    window.proxyConfig.proxy = [];
    expect(window.onHeadersReceivedCallback({}).responseHeaders).toEqual([
      {
        name: 'Access-Control-Allow-Origin',
        value: '*'
      },
      {
        name: 'Access-Control-Allow-Credentials',
        value: 'true'
      },
      {
        name: 'Access-Control-Allow-Methods',
        value: '*'
      },
      {
        name: 'Access-Control-Allow-Headers',
        value: 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, X-Referer, X-ZA-Product, Content-Encoding, X-ZA-Batch-Size, X-ZA-Log-Version'
      }
    ]);
  });
});

describe('CORS withCredentials and proxyConfig is disabled', () => {
  test('should return {}', () => {
    window.proxyDisabled = 'disabled';
    expect(window.onHeadersReceivedCallback({}).responseHeaders).toEqual();
  });
});
