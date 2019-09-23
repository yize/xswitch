import { REG, EMPTY_STRING } from '../src/constants';
import { stripJsonComments } from '../src/strip-json-comments';
const esprima = require('esprima');
const escodegen = require('escodegen');

const replace = (jsonc: string): string => {
  try {
    return JSON.parse(
      stripJsonComments(jsonc)
        .replace(REG.WHITESPACE, EMPTY_STRING)
        .replace(REG.TRIM_JSON, ($0, $1, $2) => $2)
    );
  } catch (e) {
    console.log(
      stripJsonComments(jsonc)
        .replace(REG.WHITESPACE, EMPTY_STRING)
        .replace(REG.TRIM_JSON, ($0, $1, $2) => $2)
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

    expect(replace(jsonString)).toEqual({
      proxy: [['a.com??a.js,b.js', 'b.com??a.js,b.js']]
    });
  });

  test('parse urls with ?? with comments,', () => {
    const jsonString = `{
  "proxy": [
    [
      "a.com??a.js,b.js",
      // 
      "b.com??a.js,b.js",
    ],
  ]
}`;

    expect(replace(jsonString)).toEqual({
      proxy: [['a.com??a.js,b.js', 'b.com??a.js,b.js']]
    });
  });

  test('parse urls with ?? with comments,', () => {
    const jsonString = `{
  "proxy": [
    // jQuery
    [
      // jQuery
      "a.com??a.js,b.js",
      // 
      "b.com??a.js,b.js",
      // jQuery
    ],
    // jQuery
    [
      "jQuery",
      // jQuery
      ,"jQuery.min.js"
      // jQuery
    ]
  ]
}`;

    expect(replace(jsonString)).toEqual({
      proxy: [
        ['a.com??a.js,b.js', 'b.com??a.js,b.js'],
        ['jQuery', 'jQuery.min.js']
      ]
    });
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
      proxy: [['(.*)a.com??a.js,b.js', '$1b.com??a.js,b.js']]
    });
  });


  test(`comments should remian while changing diffrent modes`, () => {
    const oldAstConfig = `
      {
        "proxy": [
          [
            "abc",  // asdbc
            "def",
          ]
        ],
      }
    `;

    const newProxyConfig = `
    {
      "proxy: [
        [
          "hijasdfsdf",
          "klmh",
        ]
      ],
    }
  `;
  
  
  });
});


