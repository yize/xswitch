#!/usr/bin/env node

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HOST_NAME = "com.xswitch.mcp";
const STORE_EXTENSION_ID = "idkjhjggpffolpidfkikidcokdkdaogg";
const SCRIPT_DIRECTORY = path.dirname(fileURLToPath(import.meta.url));
const INSTALL_DIRECTORY = process.env.XSWITCH_MCP_INSTALL_DIR || path.join(os.homedir(), ".xswitch");
const RUNTIME_DIRECTORY = path.join(INSTALL_DIRECTORY, "runtime");
const NATIVE_HOST_SCRIPT = path.join(RUNTIME_DIRECTORY, "native-host.js");
const MCP_SERVER_SCRIPT = path.join(RUNTIME_DIRECTORY, "server.js");

function parseArgs(argv) {
  const options = {
    browser: "chrome",
    extensionId: STORE_EXTENSION_ID,
    uninstall: false,
  };
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "install") continue;
    if (arg === "uninstall") options.uninstall = true;
    else if (arg === "--browser") options.browser = argv[++index];
    else if (arg === "--extension-id") options.extensionId = argv[++index];
    else if (arg === "--uninstall") options.uninstall = true;
    else if (arg === "--help" || arg === "-h") {
      console.log(`Usage: xswitch-mcp install [options]

Options:
  --browser chrome|chromium|edge  Browser to register (default: chrome)
  --extension-id <id>            Installed extension ID (default: Web Store ID)
  --uninstall                    Remove the native host registration

Examples:
  npx --yes xswitch-mcp install --extension-id <extension-id>
  npx --yes xswitch-mcp uninstall`);
      process.exit(0);
    } else throw new Error(`Unknown argument: ${arg}`);
  }
  if (!['chrome', 'chromium', 'edge'].includes(options.browser)) {
    throw new Error(`Unsupported browser: ${options.browser}`);
  }
  if (!/^[a-p]{32}$/.test(options.extensionId)) {
    throw new Error("extension-id must be a 32-character Chrome extension ID");
  }
  return options;
}

function manifestLocation(browser) {
  if (process.env.XSWITCH_MCP_MANIFEST_PATH) {
    return process.env.XSWITCH_MCP_MANIFEST_PATH;
  }
  if (process.platform === "darwin") {
    const folders = {
      chrome: "Google/Chrome",
      chromium: "Chromium",
      edge: "Microsoft Edge",
    };
    return path.join(
      os.homedir(),
      "Library/Application Support",
      folders[browser],
      "NativeMessagingHosts",
      `${HOST_NAME}.json`
    );
  }
  if (process.platform === "linux") {
    const folders = {
      chrome: "google-chrome",
      chromium: "chromium",
      edge: "microsoft-edge",
    };
    return path.join(
      os.homedir(),
      ".config",
      folders[browser],
      "NativeMessagingHosts",
      `${HOST_NAME}.json`
    );
  }
  throw new Error(
    `The native-host installer currently supports macOS and Linux, not ${process.platform}`
  );
}

function shellQuote(value) {
  return `'${value.replaceAll("'", `'"'"'`)}'`;
}

function createLauncher() {
  fs.mkdirSync(INSTALL_DIRECTORY, { recursive: true, mode: 0o700 });
  fs.chmodSync(INSTALL_DIRECTORY, 0o700);
  const launcher = path.join(INSTALL_DIRECTORY, "native-host");
  fs.writeFileSync(
    launcher,
    `#!/bin/sh\nexec ${shellQuote(process.execPath)} ${shellQuote(NATIVE_HOST_SCRIPT)}\n`,
    { encoding: "utf8", mode: 0o700 }
  );
  fs.chmodSync(launcher, 0o700);
  return launcher;
}

function installRuntime() {
  const bundledDirectory = path.join(SCRIPT_DIRECTORY, "dist");
  const runtimeFiles = ["native-host.js", "server.js"];
  for (const file of runtimeFiles) {
    if (!fs.existsSync(path.join(bundledDirectory, file))) {
      throw new Error(
        `Missing bundled runtime: ${file}. Run "npm --prefix mcp run build" before installing.`
      );
    }
  }

  fs.mkdirSync(RUNTIME_DIRECTORY, { recursive: true, mode: 0o700 });
  fs.chmodSync(RUNTIME_DIRECTORY, 0o700);
  for (const file of runtimeFiles) {
    const target = path.join(RUNTIME_DIRECTORY, file);
    fs.copyFileSync(path.join(bundledDirectory, file), target);
    fs.chmodSync(target, 0o600);
  }
}

const options = parseArgs(process.argv.slice(2));
const manifestPath = manifestLocation(options.browser);

if (options.uninstall) {
  if (fs.existsSync(manifestPath)) fs.unlinkSync(manifestPath);
  console.log(`Removed XSwitch native host for ${options.browser}.`);
  process.exit(0);
}

installRuntime();
const launcher = createLauncher();
const manifest = {
  name: HOST_NAME,
  description: "Secure local bridge between XSwitch and its MCP server",
  path: launcher,
  type: "stdio",
  allowed_origins: [`chrome-extension://${options.extensionId}/`],
};
fs.mkdirSync(path.dirname(manifestPath), { recursive: true });
fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");

console.log(`Installed XSwitch native host for ${options.browser}:`);
console.log(`  ${manifestPath}`);
console.log("\nMCP client configuration:");
console.log(
  JSON.stringify(
    {
      mcpServers: {
        xswitch: {
          command: process.execPath,
          args: [MCP_SERVER_SCRIPT],
        },
      },
    },
    null,
    2
  )
);
console.log("\nThe native bridge is ready. Add the configuration above to the current AI client, then verify the XSwitch MCP tools.");
