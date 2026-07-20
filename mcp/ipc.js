import os from "node:os";
import path from "node:path";

export const SOCKET_DIRECTORY = path.join(os.homedir(), ".xswitch");

export function getSocketPath() {
  if (process.env.XSWITCH_MCP_SOCKET) return process.env.XSWITCH_MCP_SOCKET;
  if (process.platform === "win32") {
    const user = os.userInfo().username.replace(/[^a-zA-Z0-9_-]/g, "_");
    return `\\\\.\\pipe\\xswitch-mcp-${user}`;
  }
  return path.join(SOCKET_DIRECTORY, "mcp.sock");
}
