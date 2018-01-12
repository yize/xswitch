require('../src/forward.js');

// const root = require('window-or-global');

beforeAll(() => {
  // Clears the database and adds some testing data.
  // Jest will wait for this promise to resolve before running tests.
  window.lastRequestId = null;
  window.proxyConfig = {};
  window.urls = new Array(200);
});

describe('no rules', () => {
  test('no forwarding when no rules', () => {
    expect(window.redirectToMatchingRule({ url: 'g.alicdn.com', requestId: 1 })).toEqual({});
    expect(
      window.redirectToMatchingRule({ url: 'g.alicdn.com??a.js,b.js,c.js', requestId: 2 }),
    ).toEqual({});
    expect(
      window.redirectToMatchingRule({ url: 'g.alicdn.com??a.js,b.js,c.js', requestId: 2 }),
    ).toEqual({});
  });
});

describe('same request id should not forwarding', () => {
  test('no forwarding', () => {
    expect(window.redirectToMatchingRule({ url: 'g.alicdn.com', requestId: 1 })).toEqual({});
    expect(
      window.redirectToMatchingRule({ url: 'g.alicdn.com??a.js,b.js,c.js', requestId: 1 }),
    ).toEqual({});
  });
});

describe('string urls', () => {
  test('should forwarding normal url without query', () => {
    window.proxyConfig.proxy = [['g.alicdn.com', 'g.alicdn.com?t=2']];
    expect(
      window.redirectToMatchingRule({ url: 'g.alicdn.com', requestId: 1 }).redirectUrl,
    ).toEqual('g.alicdn.com?t=2');

    expect(window.redirectToMatchingRule({ url: 'g.alicdn.com#aaaa', requestId: 2 })).toEqual({
      redirectUrl: 'g.alicdn.com?t=2#aaaa',
    });
    expect(
      window.redirectToMatchingRule({ url: 'g.alicdn.com/??a.js,b.js,c.js', requestId: 3 })
        .redirectUrl,
    ).toEqual('g.alicdn.com?t=2/??a.js,b.js,c.js');
  });

  test('should forwarding normal url with query', () => {
    window.proxyConfig.proxy = [['g.alicdn.com?t=1', 'g.alicdn.com?t=2']];
    expect(
      window.redirectToMatchingRule({ url: 'g.alicdn.com?t=1&k=2', requestId: 1 }).redirectUrl,
    ).toEqual('g.alicdn.com?t=2&k=2');

    expect(
      window.redirectToMatchingRule({ url: 'g.alicdn.com#aaaa', requestId: 2 }).redirectUrl,
    ).toBeFalsy();

    expect(
      window.redirectToMatchingRule({ url: 'g.alicdn.com?t=1#aaaa', requestId: 3 }).redirectUrl,
    ).toEqual('g.alicdn.com?t=2#aaaa');
  });
});

describe('reg urls', () => {
  test('should forwarding reg url without query', () => {
    window.proxyConfig.proxy = [['g.(\\w+).com', 'g.alicdn.com?t=2']];

    expect(
      window.redirectToMatchingRule({ url: 'g1.alicdn.com', requestId: 1 }).redirectUrl,
    ).toBeFalsy();

    expect(
      window.redirectToMatchingRule({ url: 'g.alicdn.com', requestId: 2 }).redirectUrl,
    ).toEqual('g.alicdn.com?t=2');

    expect(
      window.redirectToMatchingRule({ url: 'g.alicdn.com#aaaa', requestId: 3 }).redirectUrl,
    ).toEqual('g.alicdn.com?t=2#aaaa');
    expect(
      window.redirectToMatchingRule({ url: 'g.alicdn.com/??a.js,b.js,c.js', requestId: 4 })
        .redirectUrl,
    ).toEqual('g.alicdn.com?t=2/??a.js,b.js,c.js');
  });

  test('should forwarding reg url with query', () => {
    window.proxyConfig.proxy = [['g.(.*).com\\?t=1', 'g.alicdn.com?t=2']];
    expect(
      window.redirectToMatchingRule({ url: 'g.alicdn.com?t=1&k=2', requestId: 1 }).redirectUrl,
    ).toEqual('g.alicdn.com?t=2&k=2');

    expect(
      window.redirectToMatchingRule({ url: 'g.alicdn.com#aaaa', requestId: 2 }).redirectUrl,
    ).toBeFalsy();

    expect(
      window.redirectToMatchingRule({ url: 'g.alicdn.com?t=1#aaaa', requestId: 3 }).redirectUrl,
    ).toEqual('g.alicdn.com?t=2#aaaa');
  });

  test('should forwarding reg url with ??', () => {
    window.proxyConfig.proxy = [['g.alicdn.com/\\?\\?(.*)', 'alinw.alicdn.com/??$1']];
    expect(
      window.redirectToMatchingRule({ url: 'g.alicdn.com/??a.js,b.js?t=1', requestId: 1 })
        .redirectUrl,
    ).toEqual('alinw.alicdn.com/??a.js,b.js?t=1');

    expect(
      window.redirectToMatchingRule({ url: 'g.alicdn.com/#aaaa', requestId: 2 }).redirectUrl,
    ).toBeFalsy();

    expect(
      window.redirectToMatchingRule({ url: 'g.alicdn.com/??a.js,b.js?t=1#aaa', requestId: 3 })
        .redirectUrl,
    ).toEqual('alinw.alicdn.com/??a.js,b.js?t=1#aaa');
  });
});
