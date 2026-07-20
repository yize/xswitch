import { beforeEach, describe, expect, it, vi } from "vitest";
import { parse } from "jsonc-parser";

interface RuleSnapshot {
  type: "xswitch-rules";
  version: number;
  exportedAt: string;
  items: Array<{ id: string; name: string; active: boolean }>;
  rules: Record<string, string>;
}

function clone<T>(value: T): T {
  return structuredClone(value);
}

async function createBridge() {
  let rules: RuleSnapshot = {
    type: "xswitch-rules",
    version: 1,
    exportedAt: "2026-07-20T00:00:00.000Z",
    items: [{ id: "0", name: "Current", active: true }],
    rules: { "0": '{"proxy":[],"cors":[]}' },
  };
  const originalRules = clone(rules);
  let extensionEnabled = true;
  let options = {
    clearCacheEnabled: "enabled",
    corsEnabled: "enabled",
    mcpEnabled: "enabled",
  };
  let backups: unknown[] = [];
  let corruptNextImport = false;

  const exportRules = vi.fn(async () => clone(rules));
  const importRules = vi.fn(async (snapshot: RuleSnapshot) => {
    rules = clone(snapshot);
    if (corruptNextImport) {
      corruptNextImport = false;
      rules.items = rules.items.filter((item) => item.id !== "0");
      delete rules.rules["0"];
    }
  });
  const getChecked = vi.fn(async () =>
    extensionEnabled ? "enabled" : "disabled"
  );
  const setChecked = vi.fn(async (enabled: boolean) => {
    extensionEnabled = enabled;
    return {};
  });
  const getOptions = vi.fn(async () => ({ ...options }));
  const setOptions = vi.fn(async (next: Record<string, boolean>) => {
    options = {
      clearCacheEnabled: next.clearCacheEnabled ? "enabled" : "disabled",
      corsEnabled: next.corsEnabled ? "enabled" : "disabled",
      mcpEnabled: next.mcpEnabled ? "enabled" : "disabled",
    };
    return options;
  });

  vi.doMock("../src/chrome-storage", () => ({
    exportRules,
    importRules,
    getChecked,
    setChecked,
    getOptions,
    setOptions,
  }));

  let messageListener: ((message: unknown) => void) | undefined;
  const postedMessages: Array<Record<string, unknown>> = [];
  const port = {
    onMessage: {
      addListener(listener: (message: unknown) => void) {
        messageListener = listener;
      },
    },
    onDisconnect: { addListener: vi.fn() },
    postMessage(message: Record<string, unknown>) {
      postedMessages.push(message);
    },
    disconnect: vi.fn(),
  };

  vi.stubGlobal("chrome", {
    permissions: {
      contains: (_permissions: unknown, callback: (granted: boolean) => void) =>
        callback(true),
    },
    runtime: {
      lastError: undefined,
      connectNative: () => port,
      getManifest: () => ({ version: "test" }),
    },
    storage: {
      local: {
        get(defaults: Record<string, unknown>, callback: (value: unknown) => void) {
          callback({
            mcpBackups:
              backups.length > 0 ? clone(backups) : clone(defaults.mcpBackups),
          });
        },
        set(value: { mcpBackups: unknown[] }, callback: () => void) {
          backups = clone(value.mcpBackups);
          callback();
        },
      },
    },
  });

  const { setMcpBridgeEnabled } = await import("../src/mcp-bridge");
  setMcpBridgeEnabled(true);
  await vi.waitFor(() => expect(messageListener).toBeTypeOf("function"));

  async function send(method: string, params: Record<string, unknown> = {}) {
    const id = crypto.randomUUID();
    messageListener?.({ type: "request", id, method, params });
    await vi.waitFor(() =>
      expect(postedMessages.some((message) => message.id === id)).toBe(true)
    );
    return postedMessages.find((message) => message.id === id);
  }

  return {
    send,
    originalRules,
    getRules: () => clone(rules),
    getBackups: () => clone(backups) as Array<Record<string, unknown>>,
    corruptNextWrite: () => {
      corruptNextImport = true;
    },
  };
}

beforeEach(() => {
  vi.resetModules();
  vi.clearAllMocks();
  vi.unstubAllGlobals();
});

describe("MCP bridge rollback safety", () => {
  it("stores a committed snapshot before a successful write", async () => {
    const bridge = await createBridge();
    const response = await bridge.send("upsert_rule_group", {
      name: "AI Test",
      active: false,
      proxy: [["https://example.invalid/a.js", "http://127.0.0.1:3000/a.js"]],
      cors: [],
    });

    expect(response?.error).toBeUndefined();
    expect(response?.result).toMatchObject({ rollback_available: true });
    const savedRules = bridge.getRules();
    expect(savedRules.items).toHaveLength(2);
    const createdId = savedRules.items.find((item) => item.id !== "0")?.id;
    const createdJsonc = createdId ? savedRules.rules[createdId] : "";
    expect(createdJsonc).toContain(
      "// Use IntelliSense to learn about possible links."
    );
    expect(createdJsonc).toContain("// `Command/Ctrl + click` to visit:");
    expect(createdJsonc).toContain("// urls that want CORS");
    expect(parse(createdJsonc, [], { allowTrailingComma: true })).toMatchObject({
      proxy: [
        ["https://example.invalid/a.js", "http://127.0.0.1:3000/a.js"],
      ],
    });
    expect(bridge.getBackups()).toHaveLength(1);
    expect(bridge.getBackups()[0]).toMatchObject({
      operation: "upsert_rule_group",
      status: "committed",
      state: { rules: bridge.originalRules },
    });
  });

  it("preserves JSONC comments when updating an existing rule group", async () => {
    const bridge = await createBridge();
    await bridge.send("upsert_rule_group", {
      name: "Commented",
      active: false,
      proxy: [["https://example.invalid/old.js", "http://127.0.0.1/old.js"]],
      cors: [],
    });
    const created = bridge.getRules().items.find((item) => item.id !== "0");
    if (!created) throw new Error("Expected a created rule group");

    await bridge.send("upsert_rule_group", {
      group_id: created.id,
      proxy: [["https://example.invalid/new.js", "http://127.0.0.1/new.js"]],
    });

    const updatedJsonc = bridge.getRules().rules[created.id];
    expect(updatedJsonc).toContain(
      "// Use IntelliSense to learn about possible links."
    );
    expect(updatedJsonc).toContain("// `Command/Ctrl + click` to visit:");
    expect(updatedJsonc).toContain("// urls that want CORS");
    expect(parse(updatedJsonc, [], { allowTrailingComma: true })).toMatchObject({
      proxy: [
        ["https://example.invalid/new.js", "http://127.0.0.1/new.js"],
      ],
    });
  });

  it("automatically restores the snapshot when post-write validation fails", async () => {
    const bridge = await createBridge();
    bridge.corruptNextWrite();
    const response = await bridge.send("upsert_rule_group", {
      name: "Broken Test",
      active: false,
      proxy: [],
      cors: [],
    });

    expect(response?.error).toContain("已自动回滚");
    expect(bridge.getRules()).toEqual(bridge.originalRules);
    expect(bridge.getBackups()).toEqual([]);
  });

  it("backs up the current state before restoring an earlier snapshot", async () => {
    const bridge = await createBridge();
    await bridge.send("upsert_rule_group", {
      name: "Undo Me",
      active: false,
      proxy: [],
      cors: [],
    });
    const changedRules = bridge.getRules();
    const originalBackupId = bridge.getBackups()[0].id;

    const response = await bridge.send("restore_backup");

    expect(response?.result).toMatchObject({
      restored_backup_id: originalBackupId,
      rollback_available: true,
    });
    expect(bridge.getRules()).toEqual(bridge.originalRules);
    expect(bridge.getBackups()).toHaveLength(2);
    expect(bridge.getBackups()[0]).toMatchObject({
      operation: "restore_backup",
      status: "committed",
      state: { rules: changedRules },
    });
  });
});
