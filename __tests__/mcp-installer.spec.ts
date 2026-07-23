import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeAll, describe, expect, it } from "vitest";

const INSTALLER = path.resolve("mcp/install-host.js");
const EXTENSION_ID = "idkjhjggpffolpidfkikidcokdkdaogg";
const sandboxes: string[] = [];

function createSandbox(): string {
  const sandbox = fs.mkdtempSync(path.join(os.tmpdir(), "xswitch-mcp-test-"));
  sandboxes.push(sandbox);
  return sandbox;
}

function runInstaller(
  args: string[],
  environment: Record<string, string>
) {
  return spawnSync(process.execPath, [INSTALLER, ...args], {
    encoding: "utf8",
    env: {
      ...process.env,
      XSWITCH_MCP_MANIFEST_PATH: "",
      XSWITCH_MCP_USER_DATA_DIR: "",
      ...environment,
    },
  });
}

describe("XSwitch MCP installer", () => {
  beforeAll(() => {
    const result = spawnSync(
      process.platform === "win32" ? "npm.cmd" : "npm",
      ["--prefix", "mcp", "run", "build"],
      { encoding: "utf8" }
    );
    expect(result.status, result.stderr).toBe(0);
  });

  afterEach(() => {
    for (const sandbox of sandboxes.splice(0)) {
      fs.rmSync(sandbox, { recursive: true, force: true });
    }
  });

  it("requires an explicit extension ID instead of using a stale default", () => {
    const result = spawnSync(process.execPath, [INSTALLER, "install"], {
      encoding: "utf8",
    });

    expect(result.status).toBe(1);
    expect(result.stderr).toContain("--extension-id is required for install");
  });

  it("installs and uninstalls inside a custom user data directory", () => {
    const sandbox = createSandbox();
    const installDirectory = path.join(sandbox, "runtime install");
    const userDataDirectory = path.join(sandbox, "Chrome Debug");
    const manifestPath = path.join(
      userDataDirectory,
      "NativeMessagingHosts",
      "com.xswitch.mcp.json"
    );

    const install = runInstaller(
      [
        "install",
        "--extension-id",
        EXTENSION_ID,
        "--user-data-dir",
        userDataDirectory,
      ],
      { XSWITCH_MCP_INSTALL_DIR: installDirectory }
    );

    expect(install.status, install.stderr).toBe(0);
    expect(install.stdout).toContain(manifestPath);
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
    expect(manifest.path).toBe(path.join(installDirectory, "native-host"));
    expect(manifest.allowed_origins).toEqual([
      `chrome-extension://${EXTENSION_ID}/`,
    ]);

    const uninstall = runInstaller(
      ["uninstall", "--user-data-dir", userDataDirectory],
      { XSWITCH_MCP_INSTALL_DIR: installDirectory }
    );

    expect(uninstall.status, uninstall.stderr).toBe(0);
    expect(fs.existsSync(manifestPath)).toBe(false);
  });

  it("supports the --user-data-dir=<path> form", () => {
    const sandbox = createSandbox();
    const installDirectory = path.join(sandbox, "install");
    const userDataDirectory = path.join(sandbox, "Chrome Debug");
    const manifestPath = path.join(
      userDataDirectory,
      "NativeMessagingHosts",
      "com.xswitch.mcp.json"
    );

    const result = runInstaller(
      [
        "install",
        "--extension-id",
        EXTENSION_ID,
        `--user-data-dir=${userDataDirectory}`,
      ],
      { XSWITCH_MCP_INSTALL_DIR: installDirectory }
    );

    expect(result.status, result.stderr).toBe(0);
    expect(fs.existsSync(manifestPath)).toBe(true);
  });

  it("supports XSWITCH_MCP_USER_DATA_DIR for automation", () => {
    const sandbox = createSandbox();
    const installDirectory = path.join(sandbox, "install");
    const userDataDirectory = path.join(sandbox, "Automated Chrome");
    const manifestPath = path.join(
      userDataDirectory,
      "NativeMessagingHosts",
      "com.xswitch.mcp.json"
    );

    const result = runInstaller(["install", "--extension-id", EXTENSION_ID], {
      XSWITCH_MCP_INSTALL_DIR: installDirectory,
      XSWITCH_MCP_USER_DATA_DIR: userDataDirectory,
    });

    expect(result.status, result.stderr).toBe(0);
    expect(fs.existsSync(manifestPath)).toBe(true);
  });

  it("gives the exact manifest path override highest precedence", () => {
    const sandbox = createSandbox();
    const installDirectory = path.join(sandbox, "install");
    const userDataDirectory = path.join(sandbox, "Chrome Debug");
    const manifestPath = path.join(sandbox, "exact", "host.json");
    const userDataManifestPath = path.join(
      userDataDirectory,
      "NativeMessagingHosts",
      "com.xswitch.mcp.json"
    );

    const result = runInstaller(
      [
        "install",
        "--extension-id",
        EXTENSION_ID,
        "--user-data-dir",
        userDataDirectory,
      ],
      {
        XSWITCH_MCP_INSTALL_DIR: installDirectory,
        XSWITCH_MCP_MANIFEST_PATH: manifestPath,
      }
    );

    expect(result.status, result.stderr).toBe(0);
    expect(fs.existsSync(manifestPath)).toBe(true);
    expect(fs.existsSync(userDataManifestPath)).toBe(false);
  });

  it("rejects an empty --user-data-dir value", () => {
    const sandbox = createSandbox();
    const result = runInstaller(
      ["install", "--extension-id", EXTENSION_ID, "--user-data-dir="],
      { XSWITCH_MCP_INSTALL_DIR: path.join(sandbox, "install") }
    );

    expect(result.status).toBe(1);
    expect(result.stderr).toContain(
      "--user-data-dir requires a non-empty path"
    );
  });
});
