require('../src/forward.js');

beforeEach(() => {
  window.lastRequestId = null;
  window.proxyConfig = {};
  window.urls = new Array(200);
});

describe('no rules', () => {
  test('no forwarding when no rules', () => {
    expect(window.redirectToMatchingRule({ url: 'g.alicdn.com', requestId: 1 })).toEqual({});
    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com??a.js,b.js,c.js',
        requestId: 2,
      }),
    ).toEqual({});
    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com??a.js,b.js,c.js',
        requestId: 2,
      }),
    ).toEqual({});
  });
});

describe('rule[1] is not string', () => {
  test('no forwarding when no rule[1]', () => {
    window.proxyConfig.proxy = [['g.alicdn.com']];
    expect(window.redirectToMatchingRule({ url: 'g.alicdn.com', requestId: 1 })).toEqual({});
    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com??a.js,b.js,c.js',
        requestId: 2,
      }),
    ).toEqual({});
  });

  test('no forwarding when rule[1] is not string', () => {
    window.proxyConfig.proxy = [['g.alicdn.com', ['a', 'b']]];
    expect(window.redirectToMatchingRule({ url: 'g.alicdn.com', requestId: 1 })).toEqual({});
    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com??a.js,b.js,c.js',
        requestId: 2,
      }),
    ).toEqual({});
  });

  test('no forwarding when rule[1] is not string', () => {
    window.proxyConfig.proxy = [['g.alicdn.com', {}]];
    expect(window.redirectToMatchingRule({ url: 'g.alicdn.com', requestId: 1 })).toEqual({});
    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com??a.js,b.js,c.js',
        requestId: 2,
      }),
    ).toEqual({});
  });
});

describe('chrome-extension://', () => {
  test('should not forward', () => {
    window.proxyConfig.proxy = [['(.*).js', '$1..js']];
    expect(
      window.redirectToMatchingRule({
        url: 'chrome-extension://xxxxx/a.js',
        requestId: 1,
      }),
    ).toEqual({});
  });
  test('should not forward', () => {
    window.proxyConfig.proxy = [['xxxxx', 'xxxx']];
    expect(
      window.redirectToMatchingRule({
        url: 'chrome-extension://xxxxx/a.js',
        requestId: 2,
      }),
    ).toEqual({});
  });
});

describe('same request id should not forwarding', () => {
  test('no forwarding', () => {
    expect(window.redirectToMatchingRule({ url: 'g.alicdn.com', requestId: 1 })).toEqual({});
    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com??a.js,b.js,c.js',
        requestId: 1,
      }),
    ).toEqual({});
  });
});

describe('string urls', () => {
  test('should forwarding normal url without query', () => {
    window.proxyConfig.proxy = [['g.alicdn.com', 'g.alicdn.com?t=2']];
    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com',
        requestId: 1,
      }).redirectUrl,
    ).toEqual('https://g.alicdn.com?t=2');

    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com#aaaa',
        requestId: 2,
      }),
    ).toEqual({
      redirectUrl: 'https://g.alicdn.com?t=2#aaaa',
    });
    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com/??a.js,b.js,c.js',
        requestId: 3,
      }).redirectUrl,
    ).toEqual('https://g.alicdn.com?t=2/??a.js,b.js,c.js');
  });

  test('should forwarding normal url with query', () => {
    window.proxyConfig.proxy = [['https://g.alicdn.com?t=1', 'https://g.alicdn.com?t=2']];
    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com?t=1&k=2',
        requestId: 1,
      }).redirectUrl,
    ).toEqual('https://g.alicdn.com?t=2&k=2');

    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com#aaaa',
        requestId: 2,
      }).redirectUrl,
    ).toBeFalsy();

    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com?t=1#aaaa',
        requestId: 3,
      }).redirectUrl,
    ).toEqual('https://g.alicdn.com?t=2#aaaa');
  });
  test('should forwarding url with ?? ', () => {
    window.proxyConfig.proxy = [['https://a.com/??a.js,b.js', 'https://b.com/??a.js,b.js']];
    expect(
      window.redirectToMatchingRule({
        url: 'https://a.com/??a.js,b.js',
        requestId: 1,
      }).redirectUrl,
    ).toEqual('https://b.com/??a.js,b.js');

    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com/#aaaa',
        requestId: 2,
      }).redirectUrl,
    ).toBeFalsy();

    expect(
      window.redirectToMatchingRule({
        url: 'https://a.com/??a.js,b.js?t=1#aaa',
        requestId: 3,
      }).redirectUrl,
    ).toEqual('https://b.com/??a.js,b.js?t=1#aaa');
  });
});

describe('reg urls', () => {
  test('should forwarding reg url without query', () => {
    window.proxyConfig.proxy = [['g.(\\w+).com', 'g.alicdn.com?t=2']];

    expect(
      window.redirectToMatchingRule({
        url: 'https://g1.alicdn.com',
        requestId: 1,
      }).redirectUrl,
    ).toBeFalsy();

    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com',
        requestId: 2,
      }).redirectUrl,
    ).toEqual('https://g.alicdn.com?t=2');

    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com#aaaa',
        requestId: 3,
      }).redirectUrl,
    ).toEqual('https://g.alicdn.com?t=2#aaaa');
    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com/??a.js,b.js,c.js',
        requestId: 4,
      }).redirectUrl,
    ).toEqual('https://g.alicdn.com?t=2/??a.js,b.js,c.js');
  });

  test('should forwarding reg url with query', () => {
    window.proxyConfig.proxy = [['(.*)g.(.*).com\\?t=1', 'https://g.alicdn.com?t=2']];
    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com?t=1&k=2',
        requestId: 1,
      }).redirectUrl,
    ).toEqual('https://g.alicdn.com?t=2&k=2');

    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com#aaaa',
        requestId: 2,
      }).redirectUrl,
    ).toBeFalsy();

    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com?t=1#aaaa',
        requestId: 3,
      }).redirectUrl,
    ).toEqual('https://g.alicdn.com?t=2#aaaa');
  });

  test('should forwarding reg url with ??', () => {
    window.proxyConfig.proxy = [['(.*)g.alicdn.com/\\?\\?(.*)', '$1alinw.alicdn.com/??$2']];
    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com/??a.js,b.js?t=1',
        requestId: 1,
      }).redirectUrl,
    ).toEqual('https://alinw.alicdn.com/??a.js,b.js?t=1');

    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com/#aaaa',
        requestId: 2,
      }).redirectUrl,
    ).toBeFalsy();

    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com/??a.js,b.js?t=1#aaa',
        requestId: 3,
      }).redirectUrl,
    ).toEqual('https://alinw.alicdn.com/??a.js,b.js?t=1#aaa');
  });
});

describe('multiple rules', () => {
  test('should support multiple rules', () => {
    window.proxyConfig.proxy = [
      ['//g.alicdn.com/platform/daily-test/(.*).js$', '//g.alicdn.com/platform/daily-test/$1.json'],
      ['g.alicdn.com', 'alinw.alicdn.com'],
    ];
    expect(
      window.redirectToMatchingRule({
        url: 'https://g.alicdn.com/platform/daily-test/isDaily.js',
        requestId: 1,
      }).redirectUrl,
    ).toEqual('https://alinw.alicdn.com/platform/daily-test/isDaily.json');
  });
});
