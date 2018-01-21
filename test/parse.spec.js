require('../src/lib/strip-json-comments');

const reg = /(,+)([^"[])/g;

const replace = (data) => {
  try {
    JSON.parse(
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

    expect(replace(jsonString)).not.toEqual('parsed error');
  });
});
