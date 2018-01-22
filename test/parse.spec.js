require('../src/lib/strip-json-comments');

const reg = /(,+)([^a-z0-9"])/gi;

const replace = (data) => {
  try {
    return JSON.parse(
      window
        .stripJsonComments(data)
        .replace(/\s+/g, '')
        .replace(reg, ($0, $1, $2) => $2),
    );
  } catch (e) {
    console.log(
      window
        .stripJsonComments(data)
        .replace(/\s+/g, '')
        .replace(reg, ($0, $1, $2) => $2),
    );
    return 'parsed error';
  }
};

describe('parse', () => {
  test('parse pure JSON', () => {
    const jsonString = `{
  "proxy": [
    [
      "a.com",
      "b.com"
    ]
  ]
}`;

    expect(replace(jsonString)).not.toEqual('parsed error');
  });

  test('parse pure JSON with comma', () => {
    const jsonString = `{
  "proxy": [
    [
      "a.com",
      "b.com",
    ],,,,,
  ],
}`;

    expect(replace(jsonString)).toEqual({ proxy: [['a.com', 'b.com']] });
  });
  test('parse urls with ?? ,', () => {
    const jsonString = `{
  "proxy": [
    [
      "a.com??a.js,b.js",
      "b.com??a.js,b.js",
    ],
  ]
}`;

    expect(replace(jsonString)).toEqual({ proxy: [['a.com??a.js,b.js', 'b.com??a.js,b.js']] });
  });

  test('parse reg rules', () => {
    const jsonString = `{
  "proxy": [
    [
      "(.*)a.com??a.js,b.js",
      "$1b.com??a.js,b.js",
    ],
  ]
}`;

    expect(replace(jsonString)).toEqual({
      proxy: [['(.*)a.com??a.js,b.js', '$1b.com??a.js,b.js']],
    });
  });
});
