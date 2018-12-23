import { Enabled } from '../src/enums';
import forward from '../src/forward';

beforeEach(() => {
  forward.config = {};
});

describe('no rules', () => {
  test('no forward when no rules', () => {
    expect(
      forward.redirectToMatchingRule({ url: 'g.alicdn.com', requestId: 1 })
    ).toEqual({});
    expect(
      forward.redirectToMatchingRule({
        url: 'https://g.alicdn.com??a.js,b.js,c.js',
        requestId: 2,
      })
    ).toEqual({});
    expect(
      forward.redirectToMatchingRule({
        url: 'https://g.alicdn.com??a.js,b.js,c.js',
        requestId: 2,
      })
    ).toEqual({});
  });
});

describe('rule[1] is not string', () => {
  test('no forward when no rule[1]', () => {
    forward.config.proxy = [['g.alicdn.com']];
    expect(
      forward.redirectToMatchingRule({ url: 'g.alicdn.com', requestId: 1 })
    ).toEqual({});
    expect(
      forward.redirectToMatchingRule({
        url: 'https://g.alicdn.com??a.js,b.js,c.js',
        requestId: 2,
      })
    ).toEqual({});
  });

  test('no forward when rule[1] is not string', () => {
    forward.config.proxy = [['g.alicdn.com', ['a', 'b']]];
    expect(
      forward.redirectToMatchingRule({ url: 'g.alicdn.com', requestId: 1 })
    ).toEqual({});
    expect(
      forward.redirectToMatchingRule({
        url: 'https://g.alicdn.com??a.js,b.js,c.js',
        requestId: 2,
      })
    ).toEqual({});
  });

  test('no forward when rule[1] is not string', () => {
    forward.config.proxy = [['g.alicdn.com', {}]];
    expect(
      forward.redirectToMatchingRule({ url: 'g.alicdn.com', requestId: 1 })
    ).toEqual({});
    expect(
      forward.redirectToMatchingRule({
        url: 'https://g.alicdn.com??a.js,b.js,c.js',
        requestId: 2,
      })
    ).toEqual({});
  });
});

describe('chrome-extension://', () => {
  test('should not forward', () => {
    forward.config.proxy = [['(.*).js', '$1..js']];
    expect(
      forward.redirectToMatchingRule({
        url: 'chrome-extension://xxxxx/a.js',
        requestId: 1,
      })
    ).toEqual({});
  });
  test('should not forward', () => {
    forward.config.proxy = [['xxxxx', 'xxxx']];
    expect(
      forward.redirectToMatchingRule({
        url: 'chrome-extension://xxxxx/a.js',
        requestId: 2,
      })
    ).toEqual({});
  });
});

describe('same request id should not forward', () => {
  test('no forward', () => {
    expect(
      forward.redirectToMatchingRule({ url: 'g.alicdn.com', requestId: 1 })
    ).toEqual({});
    expect(
      forward.redirectToMatchingRule({
        url: 'https://g.alicdn.com??a.js,b.js,c.js',
        requestId: 1,
      })
    ).toEqual({});
  });
});

describe('string urls', () => {
  test('should forward normal url without query', () => {
    forward.config.proxy = [['g.alicdn.com', 'g.alicdn.com?t=2']];
    expect(
      forward.redirectToMatchingRule({
        url: 'https://g.alicdn.com',
        requestId: 1,
      }).redirectUrl
    ).toEqual('https://g.alicdn.com?t=2');

    expect(
      forward.redirectToMatchingRule({
        url: 'https://g.alicdn.com#aaaa',
        requestId: 2,
      })
    ).toEqual({
      redirectUrl: 'https://g.alicdn.com?t=2#aaaa',
    });
    expect(
      forward.redirectToMatchingRule({
        url: 'https://g.alicdn.com/??a.js,b.js,c.js',
        requestId: 3,
      }).redirectUrl
    ).toEqual('https://g.alicdn.com?t=2/??a.js,b.js,c.js');
  });

  test('should forward normal url with query', () => {
    forward.config.proxy = [
      ['https://g.alicdn.com?t=1', 'https://g.alicdn.com?t=2'],
    ];
    expect(
      forward.redirectToMatchingRule({
        url: 'https://g.alicdn.com?t=1&k=2',
        requestId: 1,
      }).redirectUrl
    ).toEqual('https://g.alicdn.com?t=2&k=2');

    expect(
      forward.redirectToMatchingRule({
        url: 'https://g.alicdn.com#aaaa',
        requestId: 2,
      }).redirectUrl
    ).toBeFalsy();

    expect(
      forward.redirectToMatchingRule({
        url: 'https://g.alicdn.com?t=1#aaaa',
        requestId: 3,
      }).redirectUrl
    ).toEqual('https://g.alicdn.com?t=2#aaaa');
  });
  test('should forward url with ?? ', () => {
    forward.config.proxy = [
      ['https://a.com/??a.js,b.js', 'https://b.com/??a.js,b.js'],
    ];
    expect(
      forward.redirectToMatchingRule({
        url: 'https://a.com/??a.js,b.js',
        requestId: 1,
      }).redirectUrl
    ).toEqual('https://b.com/??a.js,b.js');

    expect(
      forward.redirectToMatchingRule({
        url: 'https://g.alicdn.com/#aaaa',
        requestId: 2,
      }).redirectUrl
    ).toBeFalsy();

    expect(
      forward.redirectToMatchingRule({
        url: 'https://a.com/??a.js,b.js?t=1#aaa',
        requestId: 3,
      }).redirectUrl
    ).toEqual('https://b.com/??a.js,b.js?t=1#aaa');
  });
});

describe('reg urls', () => {
  test('should forward reg url without query', () => {
    forward.config.proxy = [['g.(\\w+).com', 'g.alicdn.com?t=2']];

    expect(
      forward.redirectToMatchingRule({
        url: 'https://g1.alicdn.com',
        requestId: 1,
      }).redirectUrl
    ).toBeFalsy();

    expect(
      forward.redirectToMatchingRule({
        url: 'https://g.alicdn.com',
        requestId: 2,
      }).redirectUrl
    ).toEqual('https://g.alicdn.com?t=2');

    expect(
      forward.redirectToMatchingRule({
        url: 'https://g.alicdn.com#aaaa',
        requestId: 3,
      }).redirectUrl
    ).toEqual('https://g.alicdn.com?t=2#aaaa');
    expect(
      forward.redirectToMatchingRule({
        url: 'https://g.alicdn.com/??a.js,b.js,c.js',
        requestId: 4,
      }).redirectUrl
    ).toEqual('https://g.alicdn.com?t=2/??a.js,b.js,c.js');
  });

  test('should forward reg url with query', () => {
    forward.config.proxy = [
      ['(.*)g.(.*).com\\?t=1', 'https://g.alicdn.com?t=2'],
    ];
    expect(
      forward.redirectToMatchingRule({
        url: 'https://g.alicdn.com?t=1&k=2',
        requestId: 1,
      }).redirectUrl
    ).toEqual('https://g.alicdn.com?t=2&k=2');

    expect(
      forward.redirectToMatchingRule({
        url: 'https://g.alicdn.com#aaaa',
        requestId: 2,
      }).redirectUrl
    ).toBeFalsy();

    expect(
      forward.redirectToMatchingRule({
        url: 'https://g.alicdn.com?t=1#aaaa',
        requestId: 3,
      }).redirectUrl
    ).toEqual('https://g.alicdn.com?t=2#aaaa');
  });

  test('should forward reg url with ??', () => {
    forward.config.proxy = [
      ['(.*)g.alicdn.com/\\?\\?(.*)', '$1alinw.alicdn.com/??$2'],
    ];
    expect(
      forward.redirectToMatchingRule({
        url: 'https://g.alicdn.com/??a.js,b.js?t=1',
        requestId: 1,
      }).redirectUrl
    ).toEqual('https://alinw.alicdn.com/??a.js,b.js?t=1');

    expect(
      forward.redirectToMatchingRule({
        url: 'https://g.alicdn.com/#aaaa',
        requestId: 2,
      }).redirectUrl
    ).toBeFalsy();

    expect(
      forward.redirectToMatchingRule({
        url: 'https://g.alicdn.com/??a.js,b.js?t=1#aaa',
        requestId: 3,
      }).redirectUrl
    ).toEqual('https://alinw.alicdn.com/??a.js,b.js?t=1#aaa');
  });
});

describe('multiple rules', () => {
  test('should support multiple rules', () => {
    forward.config.proxy = [
      [
        '//g.alicdn.com/platform/daily-test/(.*).js$',
        '//g.alicdn.com/platform/daily-test/$1.json',
      ],
      ['g.alicdn.com', 'alinw.alicdn.com'],
    ];
    expect(
      forward.redirectToMatchingRule({
        url: 'https://g.alicdn.com/platform/daily-test/isDaily.js',
        requestId: 1,
      }).redirectUrl
    ).toEqual('https://alinw.alicdn.com/platform/daily-test/isDaily.json');
  });
});

describe('CORS without access-control-allow-origin', () => {
  test('should support cors', () => {
    forward.config.proxy = [
      ['http://dev-a.b.com/(.*).json', 'http://dev-c.d.com/$1.json'],
    ];
    forward.config.cors = ['dev-c.d.com'];

    const testheaderDetails = {
      frameId: 0,
      initiator: 'http://dev-a.b.com',
      method: 'GET',
      parentFrameId: -1,
      requestId: '265010',
      responseHeaders: [
        {
          name: 'Date',
          value: 'Wed, 11 Jul 2018 12:38:45 GMT',
        },
        {
          name: 'Content-Type',
          value: 'application/json;charset=UTF-8',
        },
        {
          name: 'Transfer-Encoding',
          value: 'chunked',
        },
        {
          name: 'Connection',
          value: 'keep-alive',
        },
        {
          name: 'Vary',
          value: 'Accept-Encoding',
        },
        {
          name: 'X-Application-Context',
          value: 'a-b-c:7001',
        },
        {
          name: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          name: 'X-XSS-Protection',
          value: '1; mode=block',
        },
        {
          name: 'Cache-Control',
          value: 'no-cache, no-store, max-age=0, must-revalidate',
        },
        {
          name: 'Pragma',
          value: 'no-cache',
        },
        {
          name: 'Expires',
          value: '0',
        },
        {
          name: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          name: 'Strict-Transport-Security',
          value: 'max-age=31536000 ; includeSubDomains',
        },
        {
          name: 'Content-Encoding',
          value: 'gzip',
        },
        {
          name: 'Server',
          value: 'Tengine/Aserver',
        },
        {
          name: 'EagleEye-TraceId',
          value: '0a67793015313127251908120e23db',
        },
        {
          name: 'Timing-Allow-Origin',
          value: '*',
        },
      ],
      statusCode: 200,
      statusLine: 'HTTP/1.1 200',
      tabId: 2988,
      timeStamp: 1531312725294.728,
      type: 'xmlhttprequest',
      url: 'http://dev-c.d.com/overview/type.json?',
    };
    const expectHeaderDetails = [
      { name: 'Date', value: 'Wed, 11 Jul 2018 12:38:45 GMT' },
      { name: 'Content-Type', value: 'application/json;charset=UTF-8' },
      { name: 'Transfer-Encoding', value: 'chunked' },
      { name: 'Connection', value: 'keep-alive' },
      { name: 'Vary', value: 'Accept-Encoding' },
      { name: 'X-Application-Context', value: 'a-b-c:7001' },
      { name: 'X-Content-Type-Options', value: 'nosniff' },
      { name: 'X-XSS-Protection', value: '1; mode=block' },
      {
        name: 'Cache-Control',
        value: 'no-cache, no-store, max-age=0, must-revalidate',
      },
      { name: 'Pragma', value: 'no-cache' },
      { name: 'Expires', value: '0' },
      { name: 'X-Frame-Options', value: 'DENY' },
      {
        name: 'Strict-Transport-Security',
        value: 'max-age=31536000 ; includeSubDomains',
      },
      { name: 'Content-Encoding', value: 'gzip' },
      { name: 'Server', value: 'Tengine/Aserver' },
      { name: 'EagleEye-TraceId', value: '0a67793015313127251908120e23db' },
      { name: 'Timing-Allow-Origin', value: '*' },
      { name: 'access-control-allow-origin', value: 'http://dev-a.b.com' },
      { name: 'access-control-allow-credentials', value: 'true' },
      { name: 'access-control-allow-methods', value: '*' },
      {
        name: 'access-control-allow-headers',
        value:
          'Content-Type, access-control-allow-headers, Authorization, X-Requested-With, X-Referer',
      },
    ];
    expect(
      forward.onHeadersReceivedCallback(testheaderDetails).responseHeaders
    ).toEqual(expectHeaderDetails);
  });
});

describe('CORS withCredentials', () => {
  test('should support cors', () => {
    forward.config.proxy = [
      ['http://127.0.0.1/(.*).json', 'http://a.b.com/$1.json'],
    ];
    forward.config.cors = ['http://a.b.com'];
    const testheaderDetails = {
      frameId: 0,
      initiator: 'http://127.0.0.1',
      method: 'GET',
      parentFrameId: -1,
      requestId: '271953',
      responseHeaders: [
        {
          name: 'Date',
          value: 'Thu, 12 Jul 2018 02:32:09 GMT',
        },
        {
          name: 'Content-Type',
          value: 'application/json;charset=UTF-8',
        },
        {
          name: 'Transfer-Encoding',
          value: 'chunked',
        },
        {
          name: 'Connection',
          value: 'keep-alive',
        },
        {
          name: 'Vary',
          value: 'Accept-Encoding',
        },
        {
          name: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          name: 'X-XSS-Protection',
          value: '1; mode=block',
        },
        {
          name: 'Cache-Control',
          value: 'no-cache, no-store, max-age=0, must-revalidate',
        },
        {
          name: 'Pragma',
          value: 'no-cache',
        },
        {
          name: 'Expires',
          value: '0',
        },
        {
          name: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          name: 'Strict-Transport-Security',
          value: 'max-age=31536000 ; includeSubDomains',
        },
        {
          name: 'access-control-allow-credentials',
          value: 'true',
        },
        {
          name: 'access-control-allow-origin',
          value: 'http://127.0.0.1',
        },
        {
          name: 'Vary',
          value: 'Origin',
        },
        {
          name: 'Access-Control-Expose-Headers',
          value: 'Set-Cookie',
        },
        {
          name: 'X-Application-Context',
          value: 'ottscgadmin:7001',
        },
        {
          name: 'EagleEye-TraceId-daily',
          value: '1e37823915313627291994023e',
        },
        {
          name: 'Content-Encoding',
          value: 'gzip',
        },
        {
          name: 'Server',
          value: 'Tengine/Aserver',
        },
        {
          name: 'EagleEye-TraceId',
          value: '0bef992c15313627291782432e3237',
        },
        {
          name: 'Timing-Allow-Origin',
          value: '*',
        },
      ],
      statusCode: 200,
      statusLine: 'HTTP/1.1 200',
      tabId: 3055,
      timeStamp: 1531362729284.772,
      type: 'xmlhttprequest',
      url: 'http://a.b.com/scg/option.json?',
    };
    const expectHeaderDetails = [
      { name: 'Date', value: 'Thu, 12 Jul 2018 02:32:09 GMT' },
      { name: 'Content-Type', value: 'application/json;charset=UTF-8' },
      { name: 'Transfer-Encoding', value: 'chunked' },
      { name: 'Connection', value: 'keep-alive' },
      { name: 'Vary', value: 'Accept-Encoding' },
      { name: 'X-Content-Type-Options', value: 'nosniff' },
      { name: 'X-XSS-Protection', value: '1; mode=block' },
      {
        name: 'Cache-Control',
        value: 'no-cache, no-store, max-age=0, must-revalidate',
      },
      { name: 'Pragma', value: 'no-cache' },
      { name: 'Expires', value: '0' },
      { name: 'X-Frame-Options', value: 'DENY' },
      {
        name: 'Strict-Transport-Security',
        value: 'max-age=31536000 ; includeSubDomains',
      },
      { name: 'Vary', value: 'Origin' },
      { name: 'Access-Control-Expose-Headers', value: 'Set-Cookie' },
      { name: 'X-Application-Context', value: 'ottscgadmin:7001' },
      { name: 'EagleEye-TraceId-daily', value: '1e37823915313627291994023e' },
      { name: 'Content-Encoding', value: 'gzip' },
      { name: 'Server', value: 'Tengine/Aserver' },
      { name: 'EagleEye-TraceId', value: '0bef992c15313627291782432e3237' },
      { name: 'Timing-Allow-Origin', value: '*' },
      { name: 'access-control-allow-origin', value: 'http://127.0.0.1' },
      { name: 'access-control-allow-credentials', value: 'true' },
      { name: 'access-control-allow-methods', value: '*' },
      {
        name: 'access-control-allow-headers',
        value:
          'Content-Type, access-control-allow-headers, Authorization, X-Requested-With, X-Referer',
      },
    ];
    expect(
      forward.onHeadersReceivedCallback(testheaderDetails).responseHeaders
    ).toEqual(expectHeaderDetails);
  });
});

describe('CORS withCredentials and no forwardConfig', () => {
  test('should return {}', () => {
    forward.config.proxy = [];
    expect(forward.onHeadersReceivedCallback({}).responseHeaders).toEqual(
      undefined
    );
  });
});

describe('CORS withCredentials and forwardConfig is disabled', () => {
  test('should return {}', () => {
    forward.disabled = Enabled.NO;
    expect(forward.onHeadersReceivedCallback({}).responseHeaders).toEqual(
      undefined
    );
  });
});
