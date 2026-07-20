#!/usr/bin/env node

import fs from "node:fs";
import net from "node:net";
import { randomUUID } from "node:crypto";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { getSocketPath, SOCKET_DIRECTORY } from "./ipc.js";
import { encodeJsonLine, JsonLineDecoder } from "./protocol.js";

const REQUEST_TIMEOUT_MS = 10_000;
const CONNECTION_TIMEOUT_MS = 5_000;
const socketPath = getSocketPath();

class ExtensionBridge {
  server = null;
  socket = null;
  extensionVersion = null;
  pending = new Map();
  connectionWaiters = new Set();

  async listen() {
    if (process.platform !== "win32") {
      fs.mkdirSync(SOCKET_DIRECTORY, { recursive: true, mode: 0o700 });
      fs.chmodSync(SOCKET_DIRECTORY, 0o700);
      await this.#removeStaleSocket();
    }

    this.server = net.createServer((socket) => this.#accept(socket));
    await new Promise((resolve, reject) => {
      this.server.once("error", reject);
      this.server.listen(socketPath, () => {
        this.server.off("error", reject);
        resolve();
      });
    });
    if (process.platform !== "win32") fs.chmodSync(socketPath, 0o600);
  }

  async #removeStaleSocket() {
    if (!fs.existsSync(socketPath)) return;
    const active = await new Promise((resolve) => {
      const probe = net.createConnection(socketPath);
      const timer = setTimeout(() => {
        probe.destroy();
        resolve(false);
      }, 300);
      probe.once("connect", () => {
        clearTimeout(timer);
        probe.destroy();
        resolve(true);
      });
      probe.once("error", () => {
        clearTimeout(timer);
        resolve(false);
      });
    });
    if (active) throw new Error("Another XSwitch MCP server is already running");
    fs.unlinkSync(socketPath);
  }

  #accept(socket) {
    if (this.socket && !this.socket.destroyed) this.socket.destroy();
    this.socket = socket;
    const decoder = new JsonLineDecoder();
    socket.on("data", (chunk) => {
      try {
        for (const message of decoder.push(chunk)) this.#handleMessage(message);
      } catch (error) {
        process.stderr.write(`[xswitch-mcp] Invalid bridge message: ${error}\n`);
        socket.destroy();
      }
    });
    socket.on("close", () => {
      if (this.socket === socket) {
        this.socket = null;
        this.extensionVersion = null;
        this.#rejectPending(new Error("XSwitch extension disconnected"));
      }
    });
  }

  #handleMessage(message) {
    if (message?.type === "hello") {
      this.extensionVersion = message.extension_version || "unknown";
      this.#resolveConnectionWaiters();
      return;
    }
    if (message?.type !== "response" || typeof message.id !== "string") return;
    const request = this.pending.get(message.id);
    if (!request) return;
    this.pending.delete(message.id);
    clearTimeout(request.timer);
    if (message.error) request.reject(new Error(message.error));
    else request.resolve(message.result);
  }

  #rejectPending(error) {
    for (const request of this.pending.values()) {
      clearTimeout(request.timer);
      request.reject(error);
    }
    this.pending.clear();
  }

  #resolveConnectionWaiters() {
    if (!this.socket || this.socket.destroyed) return;
    for (const waiter of this.connectionWaiters) {
      clearTimeout(waiter.timer);
      waiter.resolve(this.socket);
    }
    this.connectionWaiters.clear();
  }

  #rejectConnectionWaiters(error) {
    for (const waiter of this.connectionWaiters) {
      clearTimeout(waiter.timer);
      waiter.reject(error);
    }
    this.connectionWaiters.clear();
  }

  #waitForConnection() {
    if (this.socket && !this.socket.destroyed && this.extensionVersion) {
      return Promise.resolve(this.socket);
    }
    return new Promise((resolve, reject) => {
      const waiter = { resolve, reject, timer: null };
      waiter.timer = setTimeout(() => {
        this.connectionWaiters.delete(waiter);
        reject(
          new Error(
            "XSwitch extension did not connect within 5 seconds. Confirm the native host extension ID, then open XSwitch settings once."
          )
        );
      }, CONNECTION_TIMEOUT_MS);
      this.connectionWaiters.add(waiter);
    });
  }

  async call(method, params = {}) {
    const socket = await this.#waitForConnection();
    if (socket.destroyed) throw new Error("XSwitch extension disconnected");
    const id = randomUUID();
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        this.pending.delete(id);
        reject(new Error(`XSwitch extension timed out while handling ${method}`));
      }, REQUEST_TIMEOUT_MS);
      this.pending.set(id, { resolve, reject, timer });
      socket.write(encodeJsonLine({ type: "request", id, method, params }));
    });
  }

  async close() {
    this.#rejectPending(new Error("XSwitch MCP server stopped"));
    this.#rejectConnectionWaiters(new Error("XSwitch MCP server stopped"));
    this.socket?.destroy();
    if (this.server) {
      await new Promise((resolve) => this.server.close(resolve));
    }
    if (process.platform !== "win32" && fs.existsSync(socketPath)) {
      fs.unlinkSync(socketPath);
    }
  }
}

const bridge = new ExtensionBridge();
const mcp = new McpServer({ name: "xswitch", version: "1.1.0" });

function result(value) {
  return {
    content: [{ type: "text", text: JSON.stringify(value, null, 2) }],
  };
}

function tool(handler) {
  return async (input) => {
    try {
      return result(await handler(input));
    } catch (error) {
      return {
        isError: true,
        content: [
          {
            type: "text",
            text: error instanceof Error ? error.message : String(error),
          },
        ],
      };
    }
  };
}

mcp.registerTool(
  "get_xswitch_state",
  {
    title: "Get XSwitch state",
    description:
      "Read XSwitch's enabled state, global options, rule groups, proxy rules, and CORS patterns. Call this before changing existing rules.",
    annotations: {
      readOnlyHint: true,
      idempotentHint: true,
      openWorldHint: false,
    },
  },
  tool(() => bridge.call("get_state"))
);

mcp.registerTool(
  "list_xswitch_backups",
  {
    title: "List XSwitch backups",
    description:
      "List the local snapshots created automatically before recent MCP changes. Backup contents stay in the extension and are not returned.",
    annotations: {
      readOnlyHint: true,
      idempotentHint: true,
      openWorldHint: false,
    },
  },
  tool(() => bridge.call("list_backups"))
);

mcp.registerTool(
  "upsert_xswitch_rule_group",
  {
    title: "Create or update an XSwitch rule group",
    description:
      "Create a rule group when group_id is omitted, or partially update an existing group. Omitted fields are preserved. Proxy entries are [match, replacement] pairs. A local rollback snapshot is created before writing.",
    inputSchema: {
      group_id: z.string().optional().describe("Existing group ID; omit to create"),
      name: z.string().min(1).optional().describe("Required when creating"),
      active: z.boolean().optional(),
      proxy: z.array(z.tuple([z.string(), z.string()])).optional(),
      cors: z.array(z.string()).optional(),
    },
    annotations: {
      readOnlyHint: false,
      destructiveHint: true,
      idempotentHint: false,
      openWorldHint: false,
    },
  },
  tool((input) => bridge.call("upsert_rule_group", input))
);

mcp.registerTool(
  "delete_xswitch_rule_group",
  {
    title: "Delete an XSwitch rule group",
    description:
      'Delete a non-default rule group after creating a local rollback snapshot. The default group "0" is protected.',
    inputSchema: { group_id: z.string() },
    annotations: {
      readOnlyHint: false,
      destructiveHint: true,
      idempotentHint: false,
      openWorldHint: false,
    },
  },
  tool((input) => bridge.call("delete_rule_group", input))
);

mcp.registerTool(
  "set_xswitch_enabled",
  {
    title: "Enable or disable XSwitch",
    description:
      "Turn all XSwitch request rewriting on or off. The previous state is backed up locally.",
    inputSchema: { enabled: z.boolean() },
    annotations: {
      readOnlyHint: false,
      destructiveHint: false,
      idempotentHint: true,
      openWorldHint: false,
    },
  },
  tool((input) => bridge.call("set_extension_enabled", input))
);

mcp.registerTool(
  "set_xswitch_options",
  {
    title: "Update XSwitch global options",
    description:
      "Partially update cache clearing or CORS response rewriting. Omitted options are preserved.",
    inputSchema: {
      clear_cache_enabled: z.boolean().optional(),
      cors_enabled: z.boolean().optional(),
    },
    annotations: {
      readOnlyHint: false,
      destructiveHint: false,
      idempotentHint: true,
      openWorldHint: false,
    },
  },
  tool((input) => bridge.call("set_options", input))
);

mcp.registerTool(
  "restore_xswitch_backup",
  {
    title: "Restore an XSwitch backup",
    description:
      "Restore a specific local snapshot by backup_id, or omit backup_id to undo the most recent successful MCP change. The current state is backed up first, so the restore itself can also be undone.",
    inputSchema: {
      backup_id: z.string().optional(),
    },
    annotations: {
      readOnlyHint: false,
      destructiveHint: false,
      idempotentHint: false,
      openWorldHint: false,
    },
  },
  tool((input) => bridge.call("restore_backup", input))
);

let stopping = false;
async function shutdown() {
  if (stopping) return;
  stopping = true;
  await mcp.close();
  await bridge.close();
}

process.on("SIGINT", () => void shutdown().finally(() => process.exit(0)));
process.on("SIGTERM", () => void shutdown().finally(() => process.exit(0)));
process.stdin.on("end", () => void shutdown().finally(() => process.exit(0)));

try {
  await bridge.listen();
  await mcp.connect(new StdioServerTransport());
} catch (error) {
  process.stderr.write(
    `[xswitch-mcp] ${error instanceof Error ? error.message : String(error)}\n`
  );
  await bridge.close().catch(() => undefined);
  process.exit(1);
}
