# xswitch-mcp

Install the local bridge that lets MCP clients safely read and update XSwitch rules.

```bash
npx --yes xswitch-mcp install --extension-id <your-extension-id>
```

The installer copies a self-contained runtime to `~/.xswitch/runtime` and registers
the Native Messaging host for Chrome. A source checkout is not required.

If Chrome is launched with a custom `--user-data-dir`, pass the same directory to
the installer. Chrome looks for per-user Native Messaging manifests inside that
data directory rather than its default application support directory.

```bash
npx --yes xswitch-mcp install \
  --extension-id <your-extension-id> \
  --user-data-dir "/path/to/chrome-user-data"
```

The manifest is written to
`<user-data-dir>/NativeMessagingHosts/com.xswitch.mcp.json`. Pass the user data
root itself, not a profile directory such as `Default` or `Profile 1`.

For automation, `XSWITCH_MCP_USER_DATA_DIR` provides the same setting.
`XSWITCH_MCP_MANIFEST_PATH` remains available as an exact manifest path override
and takes precedence over both the CLI option and the user data directory
environment variable.

Every write creates a local snapshot in the XSwitch extension first. Failed writes
are rolled back automatically, and MCP clients can list or restore the 10 most
recent snapshots with `list_xswitch_backups` and `restore_xswitch_backup`.

To remove the Chrome registration:

```bash
npx --yes xswitch-mcp uninstall
```

Use the same `--user-data-dir` option when removing a registration from a custom
browser data directory.
