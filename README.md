# ⚡ LMCProtocol (`lmcprotocol.com`)

> **Sub-Second Local Business Telemetry & Marketing Flaw Diagnostics in ~210 Tokens**  
> Reference Implementation of **LMCP-1.0** and the **Open Business Diagnostic Standard (`OBDS-2026`)**.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![MCP](https://img.shields.io/badge/MCP-1.0_Compliant-emerald.svg)](https://modelcontextprotocol.io)
[![Part of Quite Good Project](https://img.shields.io/badge/Maintained_by-Quite_Good_Project-09090b.svg)](https://quitegoodproject.com)

---

## ⚡ Diagnostic Flaw Engine (`OBDS-2026`)
* `FLAW_PIXEL_MISSING` (Code 101) — Missing Meta Pixel
* `FLAW_GA4_MISSING` (Code 102) — Absent Google Analytics
* `FLAW_REVIEW_STALLED` (Code 201) — Review velocity decay
* `FLAW_GBP_UNCLAIMED` (Code 401) — Unclaimed Google Business Profile

---

## 🚀 Quickstart

### Claude Desktop & Cursor (`claude_desktop_config.json`)

> 🎁 **Free Sandbox Bonus**: Pass `--email you@company.com` in `args` to instantly double your free sandbox quota from 50 to **100 searches**! Zero credit card required.

```json
{
  "mcpServers": {
    "lmcprotocol": {
      "command": "npx",
      "args": ["-y", "@quitegoodproject/lmcprotocol", "--email", "you@company.com"]
    }
  }
}
```

Or run via CLI:
```bash
npx -y @quitegoodproject/lmcprotocol --email you@company.com
```

---

## 🏛️ developer suite & Governance
Part of **[The Quite Good Project](https://quitegoodproject.com)** developer suite.
