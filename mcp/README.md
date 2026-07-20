# xswitch-mcp

Install the local bridge that lets MCP clients safely read and update XSwitch rules.

```bash
npx --yes xswitch-mcp install --extension-id <your-extension-id>
```

The installer copies a self-contained runtime to `~/.xswitch/runtime` and registers
the Native Messaging host for Chrome. A source checkout is not required.

Every write creates a local snapshot in the XSwitch extension first. Failed writes
are rolled back automatically, and MCP clients can list or restore the 10 most
recent snapshots with `list_xswitch_backups` and `restore_xswitch_backup`.

To remove the Chrome registration:

```bash
npx --yes xswitch-mcp uninstall
```
