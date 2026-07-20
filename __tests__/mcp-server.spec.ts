import fs from "node:fs";
import net from "node:net";
import os from "node:os";
import path from "node:path";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { afterEach, describe, expect, it } from "vitest";
import {
  encodeJsonLine,
  JsonLineDecoder,
} from "../mcp/protocol.js";

const cleanup: Array<() => Promise<void> | void> = [];

afterEach(async () => {
  while (cleanup.length) await cleanup.pop()?.();
});

async function waitForSocket(socketPath: string) {
  const deadline = Date.now() + 3_000;
  while (!fs.existsSync(socketPath)) {
    if (Date.now() > deadline) throw new Error("MCP socket was not created");
    await new Promise((resolve) => setTimeout(resolve, 20));
  }
}

describe("XSwitch MCP server", () => {
  it(
    "advertises tools and relays a tool call to the extension bridge",
    async () => {
      const tempDirectory = fs.mkdtempSync(
        path.join(os.tmpdir(), "xswitch-mcp-test-")
      );
      const socketPath = path.join(tempDirectory, "bridge.sock");
      cleanup.push(() => fs.rmSync(tempDirectory, { recursive: true, force: true }));

      const client = new Client({ name: "xswitch-test", version: "1.0.0" });
      const transport = new StdioClientTransport({
        command: process.execPath,
        args: [
          process.env.XSWITCH_MCP_SERVER_PATH || path.resolve("mcp/server.js"),
        ],
        env: {
          ...Object.fromEntries(
            Object.entries(process.env).filter((entry): entry is [string, string] =>
              Boolean(entry[1])
            )
          ),
          XSWITCH_MCP_SOCKET: socketPath,
        },
      });
      await client.connect(transport);
      cleanup.push(() => client.close());

      await waitForSocket(socketPath);
      const extension = net.createConnection(socketPath);
      cleanup.push(() => extension.destroy());
      const decoder = new JsonLineDecoder();
      extension.on("data", (chunk) => {
        for (const message of decoder.push(chunk)) {
          if (message.type === "request" && message.method === "get_state") {
            extension.write(
              encodeJsonLine({
                type: "response",
                id: message.id,
                result: { extension_enabled: true, groups: [] },
              })
            );
          } else if (
            message.type === "request" &&
            message.method === "list_backups"
          ) {
            extension.write(
              encodeJsonLine({
                type: "response",
                id: message.id,
                result: { backups: [] },
              })
            );
          } else if (
            message.type === "request" &&
            message.method === "restore_backup"
          ) {
            extension.write(
              encodeJsonLine({
                type: "response",
                id: message.id,
                result: { restored_backup_id: "test-backup" },
              })
            );
          }
        }
      });
      extension.write(
        encodeJsonLine({ type: "hello", extension_version: "test" })
      );
      await new Promise((resolve) => setTimeout(resolve, 20));

      const tools = await client.listTools();
      expect(tools.tools.map((tool) => tool.name)).toEqual(
        expect.arrayContaining([
          "get_xswitch_state",
          "upsert_xswitch_rule_group",
          "delete_xswitch_rule_group",
          "set_xswitch_enabled",
          "set_xswitch_options",
          "list_xswitch_backups",
          "restore_xswitch_backup",
        ])
      );

      const deleteTool = tools.tools.find(
        (tool) => tool.name === "delete_xswitch_rule_group"
      );
      expect(deleteTool?.annotations).toMatchObject({
        readOnlyHint: false,
        destructiveHint: true,
        openWorldHint: false,
      });

      const response = await client.callTool({
        name: "get_xswitch_state",
        arguments: {},
      });
      expect(response.isError).not.toBe(true);
      expect(JSON.stringify(response.content)).toContain("extension_enabled");

      const backups = await client.callTool({
        name: "list_xswitch_backups",
        arguments: {},
      });
      expect(backups.isError).not.toBe(true);
      expect(JSON.stringify(backups.content)).toContain("backups");

      const restored = await client.callTool({
        name: "restore_xswitch_backup",
        arguments: {},
      });
      expect(restored.isError).not.toBe(true);
      expect(JSON.stringify(restored.content)).toContain("test-backup");
    },
    10_000
  );
});
