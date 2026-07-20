import { spawnSync } from "node:child_process";
import path from "node:path";
import { describe, expect, it } from "vitest";

describe("XSwitch MCP installer", () => {
  it("requires an explicit extension ID instead of using a stale default", () => {
    const result = spawnSync(
      process.execPath,
      [path.resolve("mcp/install-host.js"), "install"],
      { encoding: "utf8" }
    );

    expect(result.status).toBe(1);
    expect(result.stderr).toContain("--extension-id is required for install");
  });
});
