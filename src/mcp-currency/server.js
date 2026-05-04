// Import necessary SDKs for MCP and HTTP requests
const { Server } = require("@modelcontextprotocol/sdk/server/index.js");
const { StdioServerTransport } = require("@modelcontextprotocol/sdk/server/stdio.js");
const { CallToolRequestSchema, ListToolsRequestSchema } = require("@modelcontextprotocol/sdk/types.js");
const axios = require("axios");
require("dotenv").config();

// Initialize the MCP Server
const server = new Server({
    name: "local-currency-converter",
    version: "1.0.0",
}, {
    capabilities: { tools: {} },
});

// 1. Define the Tool (What the AI sees)
server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: [{
        name: "convert_currency",
        description: "Converts an amount from one currency to another (e.g., USD to CAD) using live rates.",
        inputSchema: {
            type: "object",
            properties: {
                amount: { type: "number" },
                from: { type: "string", description: "3-letter code, e.g., USD" },
                to: { type: "string", description: "3-letter code, e.g., CAD" }
            },
            required: ["amount", "from", "to"]
        }
    }]
}));

// 2. Implementation (How the tool actually works)
server.setRequestHandler(CallToolRequestSchema, async (request) => {
    if (request.params.name === "convert_currency") {
        const { amount, from, to } = request.params.arguments;
        
        // Fetch live rates from a free API
        // Note: You can get a free key at exchangerate-api.com
        const API_KEY = process.env.EXCHANGE_RATE_KEY;
        const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${from}/${to}/${amount}`;
        
        const response = await axios.get(url);
        const result = response.data.conversion_result;

        return {
            content: [{ type: "text", text: `${amount} ${from} is approximately ${result.toFixed(2)} ${to}` }]
        };
    }
});

// 3. Connect via Standard Input/Output (Local transport)
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
}

main().catch(console.error);