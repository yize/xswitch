import {
  generateProxyRules,
  generateCorsRules,
} from '../src/declarative-net-request';

describe('generateProxyRules', () => {
  test('plain string rule is escaped to a literal regexFilter', () => {
    const rules = generateProxyRules({
      proxy: [['g.alicdn.com', 'g.alicdn.com?t=2']],
    });
    expect(rules.length).toBe(1);
    expect(rules[0].condition.regexFilter).toBe('g\\.alicdn\\.com');
    // 替换目标是字面量模板，点号不转义
    expect(rules[0].action.redirect!.regexSubstitution).toBe(
      'g.alicdn.com?t=2'
    );
    expect(rules[0].action.type).toBe('redirect');
  });

  test('regex rule passes through and $N becomes \\N', () => {
    const rules = generateProxyRules({
      proxy: [['(.*)/path1/path2/(.*)', 'http://127.0.0.1:3000/$2']],
    });
    expect(rules[0].condition.regexFilter).toBe('(.*)/path1/path2/(.*)');
    expect(rules[0].action.redirect!.regexSubstitution).toBe(
      'http://127.0.0.1:3000/\\2'
    );
  });

  test('?? combo-loader token is escaped in regex rules', () => {
    const rules = generateProxyRules({
      proxy: [['(.*)g.alicdn.com/??(.*)', '$1alinw.alicdn.com/??$2']],
    });
    expect(rules[0].condition.regexFilter).toBe(
      '(.*)g.alicdn.com/\\?\\?(.*)'
    );
    // 目标里的 ?? 保持字面量
    expect(rules[0].action.redirect!.regexSubstitution).toBe(
      '\\1alinw.alicdn.com/??\\2'
    );
  });

  test('rule without a string target is ignored', () => {
    const rules = generateProxyRules({
      // @ts-expect-error - 故意构造非法规则
      proxy: [['g.alicdn.com'], ['g.alicdn.com', {}], ['good.com', 'local.com']],
    });
    expect(rules.length).toBe(1);
    expect(rules[0].condition.regexFilter).toBe('good\\.com');
  });

  test('an invalid regex rule is skipped, valid rules still apply', () => {
    const rules = generateProxyRules({
      proxy: [
        ['(', 'x'],
        ['good.com', 'local.com'],
      ],
    });
    expect(rules.length).toBe(1);
    expect(rules[0].condition.regexFilter).toBe('good\\.com');
  });

  test('empty proxy produces no rules', () => {
    expect(generateProxyRules({}).length).toBe(0);
    expect(generateProxyRules({ proxy: [] }).length).toBe(0);
  });
});

describe('generateCorsRules', () => {
  test('generates a modifyHeaders rule per domain', () => {
    const rules = generateCorsRules({ cors: ['a.com', 'b.com'] });
    expect(rules.length).toBe(2);
    expect(rules[0].action.type).toBe('modifyHeaders');
    expect(rules[0].condition.urlFilter).toBe('||a.com');
    expect(rules[0].id).toBeGreaterThanOrEqual(1000);
  });

  test('empty cors produces no rules', () => {
    expect(generateCorsRules({}).length).toBe(0);
    expect(generateCorsRules({ cors: [] }).length).toBe(0);
  });
});
