import { beforeEach, describe, expect, it } from "vitest";

// 内存版 chrome.storage 桩：模拟 get(默认值语义) 与 set。
function makeArea() {
  const data: Record<string, any> = {};
  return {
    _data: data,
    clear() {
      Object.keys(data).forEach((k) => delete data[k]);
    },
    get(keyOrObj: any, cb: (r: any) => void) {
      const result: any = {};
      if (typeof keyOrObj === "string") {
        result[keyOrObj] = data[keyOrObj];
      } else if (Array.isArray(keyOrObj)) {
        keyOrObj.forEach((k) => (result[k] = data[k]));
      } else {
        Object.keys(keyOrObj).forEach((k) => {
          result[k] = k in data ? data[k] : keyOrObj[k];
        });
      }
      cb(result);
    },
    set(obj: any, cb?: () => void) {
      Object.assign(data, obj);
      if (cb) cb();
    },
  };
}

const localArea = makeArea();
const syncArea = makeArea();

// 必须在导入 chrome-storage 前挂好 chrome 全局：该模块导入时有副作用
// (checkAndSyncHistorialSyncStorageDataToLocal 会读写 storage)。
(globalThis as any).chrome = {
  storage: { local: localArea, sync: syncArea },
  runtime: {},
};

const {
  exportRules,
  importRules,
  isValidRuleExport,
} = await import("../src/chrome-storage");

describe("isValidRuleExport", () => {
  it("accepts a well-formed export", () => {
    expect(
      isValidRuleExport({
        type: "xswitch-rules",
        version: 1,
        exportedAt: "x",
        items: [{ id: "0", name: "Current", active: true }],
        rules: { "0": "{}" },
      })
    ).toBe(true);
  });

  it("rejects wrong type / missing fields", () => {
    expect(isValidRuleExport(null)).toBe(false);
    expect(isValidRuleExport({ type: "other", items: [], rules: {} })).toBe(
      false
    );
    expect(
      isValidRuleExport({ type: "xswitch-rules", items: "no", rules: {} })
    ).toBe(false);
    expect(
      isValidRuleExport({ type: "xswitch-rules", items: [], rules: null })
    ).toBe(false);
  });
});

describe("export / import round trip", () => {
  beforeEach(() => {
    localArea.clear();
    syncArea.clear();
  });

  function seed(items: any[], jsonc: Record<string, string>) {
    localArea._data.tab_list = items;
    localArea._data.config_for_shown = jsonc;
  }

  it("exports current groups with their jsonc", async () => {
    seed(
      [
        { id: "0", name: "Current", active: true },
        { id: "9", name: "Team", active: false },
      ],
      { "0": '{"proxy":[]}', "9": '{"proxy":[["a","b"]]}' }
    );
    const payload = await exportRules();
    expect(payload.type).toBe("xswitch-rules");
    expect(payload.items).toHaveLength(2);
    expect(payload.rules["9"]).toContain("a");
  });

  it("overwrite replaces all groups and regenerates parsed json", async () => {
    seed([{ id: "0", name: "Old", active: true }], { "0": '{"proxy":[]}' });
    await importRules(
      {
        type: "xswitch-rules",
        version: 1,
        exportedAt: "x",
        items: [{ id: "0", name: "Shared", active: true }],
        rules: { "0": '{"proxy":[["from","to"]]}' },
      },
      "overwrite"
    );
    expect(localArea._data.tab_list).toHaveLength(1);
    expect(localArea._data.tab_list[0].name).toBe("Shared");
    expect(localArea._data.config["0"]).toEqual({
      proxy: [["from", "to"]],
    });
  });

  it("merge appends imported groups as new inactive ids, keeping existing", async () => {
    seed([{ id: "0", name: "Current", active: true }], { "0": '{"proxy":[]}' });
    await importRules(
      {
        type: "xswitch-rules",
        version: 1,
        exportedAt: "x",
        items: [{ id: "0", name: "Imported", active: true }],
        rules: { "0": '{"proxy":[["x","y"]]}' },
      },
      "merge"
    );
    const items = localArea._data.tab_list;
    expect(items).toHaveLength(2);
    // 原有分组保留
    expect(items[0].id).toBe("0");
    // 导入分组用了新 id、默认不激活
    expect(items[1].id).not.toBe("0");
    expect(items[1].name).toBe("Imported");
    expect(items[1].active).toBe(false);
  });
});
