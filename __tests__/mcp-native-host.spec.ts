import { spawn, type ChildProcessWithoutNullStreams } from "node:child_process";
import fs from "node:fs";
import net from "node:net";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  encodeNativeMessage,
  JsonLineDecoder,
} from "../mcp/protocol.js";

const cleanup: Array<() => Promise<void> | void> = [];

afterEach(async () => {
  while (cleanup.length) await cleanup.pop()?.();
});

function waitForExit(child: ChildProcessWithoutNullStreams): Promise<void> {
  if (child.exitCode !== null) return Promise.resolve();
  return new Promise((resolve) => child.once("exit", () => resolve()));
}

async function listenForHello(socketPath: string) {
  let acceptedSocket: net.Socket | undefined;
  let resolveMessage: (message: unknown) => void;
  const message = new Promise<unknown>((resolve) => {
    resolveMessage = resolve;
  });
  const server = net.createServer((socket) => {
    acceptedSocket = socket;
    const decoder = new JsonLineDecoder();
    socket.on("data", (chunk) => {
      for (const value of decoder.push(chunk)) {
        if (value?.type === "hello") resolveMessage(value);
      }
    });
  });
  await new Promise<void>((resolve, reject) => {
    server.once("error", reject);
    server.listen(socketPath, () => resolve());
  });
  return {
    message,
    close: async () => {
      acceptedSocket?.destroy();
      await new Promise<void>((resolve) => server.close(() => resolve()));
    },
  };
}

describe("XSwitch native host reconnect", () => {
  it(
    "replays the extension hello after the MCP server restarts",
    async () => {
      const tempDirectory = fs.mkdtempSync(
        path.join(os.tmpdir(), "xswitch-native-host-test-")
      );
      const socketPath = path.join(tempDirectory, "bridge.sock");
      cleanup.push(() =>
        fs.rmSync(tempDirectory, { recursive: true, force: true })
      );

      const child = spawn(process.execPath, [path.resolve("mcp/native-host.js")], {
        env: { ...process.env, XSWITCH_MCP_SOCKET: socketPath },
        stdio: ["pipe", "pipe", "pipe"],
      });
      cleanup.push(async () => {
        child.stdin.end();
        const timeout = setTimeout(() => child.kill("SIGKILL"), 2_000);
        await waitForExit(child);
        clearTimeout(timeout);
      });

      child.stdin.write(
        encodeNativeMessage({ type: "hello", extension_version: "test" })
      );

      const firstServer = await listenForHello(socketPath);
      await expect(firstServer.message).resolves.toMatchObject({
        type: "hello",
        extension_version: "test",
      });
      await firstServer.close();

      const secondServer = await listenForHello(socketPath);
      await expect(secondServer.message).resolves.toMatchObject({
        type: "hello",
        extension_version: "test",
      });
      await secondServer.close();
    },
    10_000
  );
});
