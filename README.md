# Flight Scan MCP Agent ✈️

A specialized **Travel Intelligence Agent** built using the Model Context Protocol (MCP). This agent automates the end-to-end process of finding, analyzing, and valuing international flight data by combining deep web scraping with custom computational tools.

## 🤖 Overview

The **Flight Scan MCP Agent** is an autonomous workflow designed to handle complex travel queries. It uses multi-step reasoning to search for flight options, convert pricing to local currencies (CAD/USD), and apply a proprietary analysis logic to determine the true "Value Score" of a flight.

## 🌟 Key Features

- **Autonomous Agentic Workflow:** Configured via `.cursorrules` to operate as a specialized entity following strict environment constraints.
- **Deep Data Extraction:** Integrated with `Firecrawl MCP` for high-fidelity scraping of dynamic flight information.
- **Local Tooling (MCP):** Implements a custom `CurrencyLocal MCP` server for real-time CAD/USD conversions, ensuring accurate regional financial calculations.
- **Value Scoring Engine:** Uses `analyst.js` to weight price against duration, layovers, and comfort to identify the optimal travel "sweet spot."
- **Windows-Optimized:** Handles local pathing (`.\data`, `.\outputs`) for secure, local-first data storage and reporting.

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Model Context Protocol (MCP)
- **Scraping:** Firecrawl
- **Development:** Cursor (Agentic Mode) & Git

## 📁 Project Structure

```text
├── src/
│   ├── mcp-currency/     # Custom MCP Server for real-time exchange rates
│   ├── analyst.js        # Core logic for "Value Score" calculations
│   └── server.js         # Main agent entry point and tool orchestration
├── .cursorrules          # Agent persona and operational constraints
├── mcp.json              # Tool registration and configuration
└── package.json          # Project dependencies

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- A [Firecrawl](https://www.firecrawl.dev/) API Key
- An MCP-compliant host (e.g., Cursor, Claude Desktop)

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/JiviteshG/flight-scan-mcp-agent.git](https://github.com/JiviteshG/flight-scan-mcp-agent.git)
   cd flight-scan-mcp-agent
   ```
### Installation & Dependencies

To set up the project environment and install the necessary libraries for both the main agent and the local MCP server, run:

```bash
npm install
```
Here are the individual sections in Markdown format:

Install Dependencies
Markdown
### Installation & Dependencies

To set up the project environment and install the necessary libraries for both the main agent and the local MCP server, run:

```bash
npm install
Note: This will install the core dependencies required for the Flight Intelligence Agent and the analytic scoring engine.


---

### Environment Setup
```markdown
### Environment Setup

The agent requires access to the Firecrawl API for web scraping. 

1. Create a `.env` file in the root directory:
   ```bash
   touch .env
  ```

Add your API key to the file:

Code snippet
FIRECRAWL_API_KEY=your_firecrawl_api_key_here

---

### Usage
```markdown
### Usage

To use the **SkyScan MCP Agent**, you must register it with an MCP-compliant host (like Cursor or Claude Desktop).

1. **Register Tools:** Point your host configuration to the `mcp.json` file in this repository.
2. **Start the Agent:** Once registered, you can interact with the agent using natural language.

**Example Prompt:**
> "I need to find flights from YFC to London for the second week of July. Use the currency tool to show prices in CAD and rank them using the Value Score."

The agent will then:
1. Scrape flight data via **Firecrawl**.
2. Convert all pricing to **CAD**.
3. Run the **Value Score** logic to provide a ranked recommendation dossier.
