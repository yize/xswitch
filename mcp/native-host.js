#!/usr/bin/env node

import net from "node:net";
import { getSocketPath } from "./ipc.js";
import {
  encodeJsonLine,
  encodeNativeMessage,
  JsonLineDecoder,
  NativeMessageDecoder,
} from "./protocol.js";

const RETRY_DELAY_MS = 1_000;
const socketPath = getSocketPath();
const nativeDecoder = new NativeMessageDecoder();
let socket = null;
let reconnectTimer = null;
let queuedMessages = [];
let helloMessage = null;
let stopped = false;

function log(message) {
  process.stderr.write(`[xswitch-native-host] ${message}\n`);
}

function scheduleReconnect() {
  if (stopped || reconnectTimer) return;
  reconnectTimer = setTimeout(() => {
    reconnectTimer = null;
    connect();
  }, RETRY_DELAY_MS);
}

function connect() {
  if (stopped || socket) return;
  const candidate = net.createConnection(socketPath);
  candidate.setEncoding("utf8");
  const lineDecoder = new JsonLineDecoder();

  candidate.on("connect", () => {
    socket = candidate;
    if (helloMessage) candidate.write(encodeJsonLine(helloMessage));
    for (const message of queuedMessages) candidate.write(encodeJsonLine(message));
    queuedMessages = [];
  });
  candidate.on("data", (chunk) => {
    try {
      for (const message of lineDecoder.push(chunk)) {
        process.stdout.write(encodeNativeMessage(message));
      }
    } catch (error) {
      log(error instanceof Error ? error.message : String(error));
      candidate.destroy();
    }
  });
  candidate.on("error", () => {
    // MCP server may not be running yet. Retrying is expected.
  });
  candidate.on("close", () => {
    if (socket === candidate) socket = null;
    scheduleReconnect();
  });
}

process.stdin.on("data", (chunk) => {
  try {
    for (const message of nativeDecoder.push(chunk)) {
      if (message?.type === "hello") helloMessage = message;
      if (socket && !socket.destroyed) socket.write(encodeJsonLine(message));
      else if (message?.type !== "hello") queuedMessages.push(message);
    }
  } catch (error) {
    log(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
    process.stdin.destroy();
  }
});

process.stdin.on("end", () => {
  stopped = true;
  if (reconnectTimer) clearTimeout(reconnectTimer);
  socket?.end();
});

connect();
