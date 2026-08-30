#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";

const API_BASE = process.env.LMCP_API_URL || "https://lmcprotocol.com";
const API_KEY = process.env.LMCP_API_KEY || "";

const server = new Server({ name: "lmcprotocol", version: "1.0.4" }, { capabilities: { tools: {} } });

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "lmcp_search",
      description: "Search local business entities with sub-second edge telemetry and flaw detection (missing Meta Pixels, GA4, stalled reviews).",
      inputSchema: {
        type: "object",
        properties: {
          query: { type: "string", description: "Target category (e.g. Solar Installers, Plumbers, Dentists)." },
          location: { type: "string", description: "City or region (e.g. Austin, TX or Manchester, UK)." },
          limit: { type: "number", description: "Number of entities (default: 5)." }
        },
        required: ["query", "location"]
      }
    }
  ]
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;
  if (name === "lmcp_search") {
    try {
      const res = await fetch(`${API_BASE}/v1/search`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": API_KEY ? `Bearer ${API_KEY}` : "" },
        body: JSON.stringify(args)
      });
      const data = await res.json();
      return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
    } catch (err) {
      return { content: [{ type: "text", text: `Error: ${err.message}` }], isError: true };
    }
  }
  return { content: [{ type: "text", text: "Unknown tool" }], isError: true };
});

const transport = new StdioServerTransport();
server.connect(transport);
