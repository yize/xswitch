
// 老的规则，因为单 key 可能会超过显示，所以先更改下
const storageItems = {
  // 所有 active 的 key
  active_keys: ['0', '1545571347032'],
  // 正在编辑的 key，默认 focus 的规则
  config_editing_key: '1545571347032',
  // json config
  config_0: {
    proxy: [],
    cors: [],
  },
  config_1545571347032: {
    proxy: [],
    cors: [],
  },
  config_1545571347033: {
    proxy: [],
    cors: [],
  },
  // tab 左侧数据
  tab_list: [{
    id: '0',
    name: 'Current',
  }, {
    id: '1545571347032',
    name: '测试',
  }, {
    id: '1545571347033',
    name: '测试',
  }],
  // 用于展示的 jsonc
  config_for_shown_0: 'id 为 0 的展示规则',
  config_for_shown_1545571347032: 'id 为 1545571347032 的展示规则',
  config_for_shown_1545571347033: 'id 为 1545571347033 的展示规则',
  // 允许清空缓存
  clearCacheEnabled: true,
  // 允许 cors
  corsEnabled: true,
  // 插件的全局开关
  disabled: false,
};

const oldStorageItems = {
  active_keys: ['0', '1545571347032'],
  config_editing_key: '1545571347032',
  config: {
    0: {
      proxy: [],
      cors: [],
    },
    1545571347032: {
      proxy: [],
      cors: [],
    },
    1545571347033: {
      proxy: [],
      cors: [],
    },
  },
  config_for_shown: {
    0: 'id 为 0 的展示规则',
    1545571347032: 'id 为 1545571347032 的展示规则',
    1545571347033: 'id 为 1545571347033 的展示规则',
  },
  tab_list: [{
    id: '0',
    name: 'Current',
  }, {
    id: '1545571347032',
    name: '测试',
  }, {
    id: '1545571347033',
    name: '测试',
  }],
  clearCacheEnabled: true,
  corsEnabled: true,
  disabled: false,
};

// @ts-ignore
const migrate = (oldItems: any) => {
  const newItems = {};
  const {
    // @ts-ignore
    config_for_shown,
    // @ts-ignore
    disabled,
    // @ts-ignore
    corsEnabled,
    // @ts-ignore
    clearCacheEnabled,
    // @ts-ignore
    tab_list,
    // @ts-ignore
    config,
    // @ts-ignore
    config_editing_key,
    // @ts-ignore
    active_keys,
  } = oldItems;

  // 没有变化
  // @ts-ignore
  newItems.disabled = disabled;
  // @ts-ignore
  newItems.corsEnabled = corsEnabled;
  // @ts-ignore
  newItems.clearCacheEnabled = clearCacheEnabled;
  // @ts-ignore
  newItems.config_editing_key = config_editing_key;
  // @ts-ignore
  newItems.active_keys = active_keys;
  // @ts-ignore
  newItems.tab_list = tab_list;
  // 这里比较全
  tab_list.forEach((item: any) => {
    const { id } = item;
    // @ts-ignore
    newItems[`config_${id}`] = config[id];
    // @ts-ignore
    newItems[`config_for_shown_${id}`] = config_for_shown[id];
  });
  return newItems;
};

describe('migrate', () => {
  test('should migrate correctly', () => {
    expect(migrate(oldStorageItems)).toEqual(storageItems);
  });
});
