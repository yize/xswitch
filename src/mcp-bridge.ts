import { Enabled } from "./enums";
import { applyEdits, modify, parse } from "jsonc-parser";
import {
  exportRules,
  getChecked,
  getOptions,
  importRules,
  setChecked,
  setOptions,
  type RuleExport,
} from "./chrome-storage";
import { JSONC2JSON, JSON_Parse } from "./utils";
import { DEFAULT_DATA, MCP_BACKUPS_STORAGE_KEY } from "./constants";

const NATIVE_HOST_NAME = "com.xswitch.mcp";
const RECONNECT_DELAY_MS = 5_000;
const MAX_MCP_BACKUPS = 10;
const JSONC_FORMATTING_OPTIONS = {
  insertSpaces: true,
  tabSize: 2,
  eol: "\n",
};

interface NativeRequest {
  type: "request";
  id: string;
  method: string;
  params?: unknown;
}

interface RuleConfig {
  proxy: Array<[string, string]>;
  cors: string[];
}

interface McpBackup {
  id: string;
  created_at: string;
  operation: string;
  status: "pending" | "committed" | "recovered";
  state: {
    rules: RuleExport;
    extension_enabled: boolean;
    clear_cache_enabled: boolean;
    cors_enabled: boolean;
  };
}

let nativePort: chrome.runtime.Port | null = null;
let reconnectTimer: ReturnType<typeof setTimeout> | undefined;
let bridgeWanted = false;
let mutationQueue: Promise<void> = Promise.resolve();
let recoveryPromise: Promise<void> | null = null;

function getBackups(): Promise<McpBackup[]> {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(
      { [MCP_BACKUPS_STORAGE_KEY]: [] },
      (result: Record<string, unknown>) => {
        if (chrome.runtime.lastError) {
          reject(new Error(chrome.runtime.lastError.message));
          return;
        }
        const value = result[MCP_BACKUPS_STORAGE_KEY];
        resolve(Array.isArray(value) ? (value as McpBackup[]) : []);
      }
    );
  });
}

function setBackups(backups: McpBackup[]): Promise<void> {
  return new Promise((resolve, reject) => {
    chrome.storage.local.set(
      { [MCP_BACKUPS_STORAGE_KEY]: backups.slice(0, MAX_MCP_BACKUPS) },
      () => {
        if (chrome.runtime.lastError) {
          reject(new Error(chrome.runtime.lastError.message));
          return;
        }
        resolve();
      }
    );
  });
}

async function captureBackup(operation: string): Promise<McpBackup> {
  const [rules, enabled, options] = await Promise.all([
    exportRules(),
    getChecked(),
    getOptions(),
  ]);
  const backup: McpBackup = {
    id: crypto.randomUUID(),
    created_at: new Date().toISOString(),
    operation,
    status: "pending",
    state: {
      rules,
      extension_enabled: enabled !== Enabled.NO,
      clear_cache_enabled: options.clearCacheEnabled !== Enabled.NO,
      cors_enabled: options.corsEnabled !== Enabled.NO,
    },
  };
  const backups = await getBackups();
  await setBackups([backup, ...backups]);
  return backup;
}

async function updateBackupStatus(
  id: string,
  status: McpBackup["status"]
): Promise<void> {
  const backups = await getBackups();
  await setBackups(
    backups.map((backup) => (backup.id === id ? { ...backup, status } : backup))
  );
}

async function removeBackup(id: string): Promise<void> {
  await setBackups((await getBackups()).filter((backup) => backup.id !== id));
}

async function restoreBackupState(backup: McpBackup): Promise<void> {
  const options = await getOptions();
  await importRules(backup.state.rules, "overwrite");
  await setChecked(backup.state.extension_enabled);
  await setOptions({
    clearCacheEnabled: backup.state.clear_cache_enabled,
    corsEnabled: backup.state.cors_enabled,
    mcpEnabled: options.mcpEnabled !== Enabled.NO,
  });
}

async function validateStoredRules(): Promise<void> {
  const snapshot = await exportRules();
  const ids = snapshot.items.map((item) => item.id);
  if (!ids.includes("0")) throw new Error("写入后默认规则分组丢失");
  if (new Set(ids).size !== ids.length) {
    throw new Error("写入后规则分组 ID 重复");
  }
  for (const id of ids) {
    if (typeof snapshot.rules[id] !== "string") {
      throw new Error(`写入后规则分组缺少配置: ${id}`);
    }
  }
}

async function recoverPendingBackup(): Promise<void> {
  const pending = (await getBackups()).find(
    (backup) => backup.status === "pending"
  );
  if (!pending) return;
  await restoreBackupState(pending);
  await updateBackupStatus(pending.id, "recovered");
}

function ensureBackupRecovery(): Promise<void> {
  if (!recoveryPromise) {
    recoveryPromise = recoverPendingBackup().catch((error) => {
      recoveryPromise = null;
      throw error;
    });
  }
  return recoveryPromise;
}

function hasNativeMessagingPermission(): Promise<boolean> {
  return new Promise((resolve) => {
    chrome.permissions.contains(
      { permissions: ["nativeMessaging"] },
      (granted) => resolve(granted)
    );
  });
}

function parseRuleConfig(jsonc: string): RuleConfig {
  let parsed: unknown;
  JSON_Parse(JSONC2JSON(jsonc || "{}"), (error, value) => {
    if (!error) parsed = value;
  });

  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new Error("规则 JSONC 无法解析，请先修正规则内容");
  }

  const value = parsed as Record<string, unknown>;
  const proxy = value.proxy ?? [];
  const cors = value.cors ?? [];
  assertProxy(proxy);
  assertCors(cors);
  return { proxy, cors };
}

function updateJsoncArray(
  jsonc: string,
  property: "proxy" | "cors",
  value: Array<[string, string]> | string[]
): string {
  const parsed = parse(jsonc, [], { allowTrailingComma: true }) as
    | Record<string, unknown>
    | undefined;
  const current = parsed?.[property];
  if (!Array.isArray(current)) {
    const edits = modify(jsonc, [property], value, {
      formattingOptions: JSONC_FORMATTING_OPTIONS,
    });
    const updated = applyEdits(jsonc, edits);
    return updated.endsWith("\n") ? updated : `${updated}\n`;
  }

  let updated = jsonc;
  const sharedLength = Math.min(current.length, value.length);
  for (let index = 0; index < sharedLength; index += 1) {
    updated = applyEdits(
      updated,
      modify(updated, [property, index], value[index], {
        formattingOptions: JSONC_FORMATTING_OPTIONS,
      })
    );
  }
  for (let index = current.length - 1; index >= value.length; index -= 1) {
    updated = applyEdits(
      updated,
      modify(updated, [property, index], undefined, {
        formattingOptions: JSONC_FORMATTING_OPTIONS,
      })
    );
  }
  for (let index = sharedLength; index < value.length; index += 1) {
    updated = applyEdits(
      updated,
      modify(updated, [property, index], value[index], {
        formattingOptions: JSONC_FORMATTING_OPTIONS,
        isArrayInsertion: true,
      })
    );
  }
  return updated.endsWith("\n") ? updated : `${updated}\n`;
}

function assertObject(value: unknown): asserts value is Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error("params 必须是对象");
  }
}

function assertProxy(value: unknown): asserts value is Array<[string, string]> {
  if (
    !Array.isArray(value) ||
    !value.every(
      (item) =>
        Array.isArray(item) &&
        item.length === 2 &&
        item.every((part) => typeof part === "string")
    )
  ) {
    throw new Error("proxy 必须是由 [匹配字符串, 替换字符串] 组成的数组");
  }
}

function assertCors(value: unknown): asserts value is string[] {
  if (!Array.isArray(value) || !value.every((item) => typeof item === "string")) {
    throw new Error("cors 必须是字符串数组");
  }
}

function nextGroupId(snapshot: RuleExport): string {
  let candidate = Date.now();
  const ids = new Set(snapshot.items.map((item) => item.id));
  while (ids.has(String(candidate))) candidate += 1;
  return String(candidate);
}

async function getState() {
  const [snapshot, enabled, options] = await Promise.all([
    exportRules(),
    getChecked(),
    getOptions(),
  ]);

  return {
    extension_enabled: enabled !== Enabled.NO,
    options: {
      clear_cache_enabled: options.clearCacheEnabled !== Enabled.NO,
      cors_enabled: options.corsEnabled !== Enabled.NO,
      mcp_enabled: options.mcpEnabled !== Enabled.NO,
    },
    groups: snapshot.items.map((item) => {
      const rawJsonc = snapshot.rules[item.id] || "{}";
      try {
        return { ...item, config: parseRuleConfig(rawJsonc) };
      } catch (error) {
        return {
          ...item,
          raw_jsonc: rawJsonc,
          parse_error: error instanceof Error ? error.message : String(error),
        };
      }
    }),
  };
}

async function upsertRuleGroup(params: unknown) {
  assertObject(params);
  const snapshot = await exportRules();
  const requestedId = params.group_id;
  if (requestedId !== undefined && typeof requestedId !== "string") {
    throw new Error("group_id 必须是字符串");
  }

  const existing = requestedId
    ? snapshot.items.find((item) => item.id === requestedId)
    : undefined;
  if (requestedId && !existing) {
    throw new Error(`规则分组不存在: ${requestedId}`);
  }

  const id = existing?.id || nextGroupId(snapshot);
  if (!existing && typeof params.name !== "string") {
    throw new Error("创建规则分组时必须提供 name");
  }
  if (params.name !== undefined && typeof params.name !== "string") {
    throw new Error("name 必须是字符串");
  }
  if (params.active !== undefined && typeof params.active !== "boolean") {
    throw new Error("active 必须是布尔值");
  }
  if (params.proxy !== undefined) assertProxy(params.proxy);
  if (params.cors !== undefined) assertCors(params.cors);

  let config: RuleConfig | undefined;
  const changesRules = params.proxy !== undefined || params.cors !== undefined;
  if (!existing || changesRules) {
    const currentConfig =
      existing && (params.proxy === undefined || params.cors === undefined)
        ? parseRuleConfig(snapshot.rules[id] || "{}")
        : { proxy: [], cors: [] };
    config = {
      proxy: params.proxy ?? currentConfig.proxy,
      cors: params.cors ?? currentConfig.cors,
    };
    let jsonc = existing ? snapshot.rules[id] || "{}\n" : DEFAULT_DATA;
    if (!existing || params.proxy !== undefined) {
      jsonc = updateJsoncArray(jsonc, "proxy", config.proxy);
    }
    if (params.cors !== undefined && (existing || config.cors.length > 0)) {
      jsonc = updateJsoncArray(jsonc, "cors", config.cors);
    }
    snapshot.rules[id] = jsonc;
  } else {
    try {
      config = parseRuleConfig(snapshot.rules[id] || "{}");
    } catch {
      // 修改分组名称或启用状态时允许保留原有的非法 JSONC，避免误覆盖。
    }
  }
  const item = {
    id,
    name: (params.name as string | undefined) ?? existing?.name ?? "AI Rules",
    active: (params.active as boolean | undefined) ?? existing?.active ?? false,
  };

  if (existing) {
    snapshot.items = snapshot.items.map((candidate) =>
      candidate.id === id ? item : candidate
    );
  } else {
    snapshot.items.push(item);
  }
  await importRules(snapshot, "overwrite");
  return { group: config ? { ...item, config } : item };
}

async function deleteRuleGroup(params: unknown) {
  assertObject(params);
  if (typeof params.group_id !== "string") {
    throw new Error("group_id 必须是字符串");
  }
  if (params.group_id === "0") {
    throw new Error('默认分组 "0" 不能删除');
  }

  const snapshot = await exportRules();
  const index = snapshot.items.findIndex((item) => item.id === params.group_id);
  if (index < 0) throw new Error(`规则分组不存在: ${params.group_id}`);
  const [removed] = snapshot.items.splice(index, 1);
  delete snapshot.rules[params.group_id];
  await importRules(snapshot, "overwrite");
  return { deleted: removed };
}

async function setExtensionEnabled(params: unknown) {
  assertObject(params);
  if (typeof params.enabled !== "boolean") {
    throw new Error("enabled 必须是布尔值");
  }
  await setChecked(params.enabled);
  return { extension_enabled: params.enabled };
}

async function updateOptions(params: unknown) {
  assertObject(params);
  if (
    params.clear_cache_enabled !== undefined &&
    typeof params.clear_cache_enabled !== "boolean"
  ) {
    throw new Error("clear_cache_enabled 必须是布尔值");
  }
  if (
    params.cors_enabled !== undefined &&
    typeof params.cors_enabled !== "boolean"
  ) {
    throw new Error("cors_enabled 必须是布尔值");
  }
  const current = await getOptions();
  const next = {
    clearCacheEnabled:
      (params.clear_cache_enabled as boolean | undefined) ??
      current.clearCacheEnabled !== Enabled.NO,
    corsEnabled:
      (params.cors_enabled as boolean | undefined) ??
      current.corsEnabled !== Enabled.NO,
    mcpEnabled: current.mcpEnabled !== Enabled.NO,
  };
  await setOptions(next);
  return {
    clear_cache_enabled: next.clearCacheEnabled,
    cors_enabled: next.corsEnabled,
  };
}

async function listBackups() {
  return {
    backups: (await getBackups()).map((backup) => ({
      id: backup.id,
      created_at: backup.created_at,
      operation: backup.operation,
      status: backup.status,
      group_count: backup.state.rules.items.length,
    })),
  };
}

async function restoreBackup(params: unknown) {
  if (params === undefined) params = {};
  assertObject(params);
  if (params.backup_id !== undefined && typeof params.backup_id !== "string") {
    throw new Error("backup_id 必须是字符串");
  }
  const backups = await getBackups();
  const backup = params.backup_id
    ? backups.find((candidate) => candidate.id === params.backup_id)
    : backups.find((candidate) => candidate.status === "committed");
  if (!backup) {
    throw new Error(
      params.backup_id ? `备份不存在: ${params.backup_id}` : "没有可恢复的历史备份"
    );
  }
  await restoreBackupState(backup);
  return {
    restored_backup_id: backup.id,
    restored_operation: backup.operation,
    restored_at: backup.created_at,
  };
}

async function handleRequest(request: NativeRequest): Promise<unknown> {
  await ensureBackupRecovery();
  switch (request.method) {
    case "get_state":
      return getState();
    case "list_backups":
      return listBackups();
    case "upsert_rule_group":
      return serializeMutation("upsert_rule_group", () =>
        upsertRuleGroup(request.params)
      );
    case "delete_rule_group":
      return serializeMutation("delete_rule_group", () =>
        deleteRuleGroup(request.params)
      );
    case "set_extension_enabled":
      return serializeMutation("set_extension_enabled", () =>
        setExtensionEnabled(request.params)
      );
    case "set_options":
      return serializeMutation("set_options", () => updateOptions(request.params));
    case "restore_backup":
      return serializeMutation("restore_backup", () =>
        restoreBackup(request.params)
      );
    default:
      throw new Error(`不支持的 MCP 方法: ${request.method}`);
  }
}

async function runProtectedMutation(
  operationName: string,
  operation: () => Promise<unknown>
): Promise<unknown> {
  const backup = await captureBackup(operationName);
  try {
    const value = await operation();
    await validateStoredRules();
    await updateBackupStatus(backup.id, "committed");
    if (value && typeof value === "object" && !Array.isArray(value)) {
      return {
        ...(value as Record<string, unknown>),
        backup_id: backup.id,
        rollback_available: true,
      };
    }
    return { value, backup_id: backup.id, rollback_available: true };
  } catch (error) {
    const originalMessage = error instanceof Error ? error.message : String(error);
    try {
      await restoreBackupState(backup);
      await removeBackup(backup.id);
    } catch (rollbackError) {
      recoveryPromise = null;
      const rollbackMessage =
        rollbackError instanceof Error ? rollbackError.message : String(rollbackError);
      throw new Error(
        `操作失败且自动回滚失败。保留的备份 ID: ${backup.id}。原始错误: ${originalMessage}；回滚错误: ${rollbackMessage}`
      );
    }
    throw new Error(`操作失败，已自动回滚。原始错误: ${originalMessage}`);
  }
}

function serializeMutation(
  operationName: string,
  operation: () => Promise<unknown>
): Promise<unknown> {
  const run = () => runProtectedMutation(operationName, operation);
  const result = mutationQueue.then(run, run);
  mutationQueue = result.then(
    () => undefined,
    () => undefined
  );
  return result;
}

function scheduleReconnect() {
  if (!bridgeWanted || reconnectTimer) return;
  reconnectTimer = setTimeout(() => {
    reconnectTimer = undefined;
    void connectNativeHost();
  }, RECONNECT_DELAY_MS);
}

async function connectNativeHost() {
  if (!bridgeWanted || nativePort) return;
  if (!(await hasNativeMessagingPermission())) return;

  try {
    const port = chrome.runtime.connectNative(NATIVE_HOST_NAME);
    nativePort = port;
    port.onMessage.addListener((message: NativeRequest) => {
      if (!message || message.type !== "request" || typeof message.id !== "string") {
        return;
      }
      void handleRequest(message)
        .then((result) => {
          port.postMessage({ type: "response", id: message.id, result });
        })
        .catch((error) => {
          port.postMessage({
            type: "response",
            id: message.id,
            error: error instanceof Error ? error.message : String(error),
          });
        });
    });
    port.onDisconnect.addListener(() => {
      void chrome.runtime.lastError;
      if (nativePort === port) nativePort = null;
      scheduleReconnect();
    });
    port.postMessage({
      type: "hello",
      extension_version: chrome.runtime.getManifest().version,
    });
  } catch {
    nativePort = null;
    scheduleReconnect();
  }
}

export function setMcpBridgeEnabled(enabled: boolean): void {
  bridgeWanted = enabled;
  if (!enabled) {
    if (reconnectTimer) clearTimeout(reconnectTimer);
    reconnectTimer = undefined;
    nativePort?.disconnect();
    nativePort = null;
    return;
  }
  void connectNativeHost();
}
