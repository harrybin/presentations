---
layout: cover-dark
background: /satelite-large.jpg
---

# Model Context Protocol (MCP) Server

---
layout: image-right
background: /satelite-large.jpg
backgroundPosition: right
level: 2
---

# Model Context Protocol (MCP) Server

<v-click>

- An open protocol for seamless integration between LLM applications and external data sources and tools

</v-click>

<v-click>

- Enhances GitHub Copilot's **Agent mode**

</v-click>

<v-click>

- MCP capabilities (VSCode)
  - Input/Output (stdio) 
  - Server-Sent Events (SSE)
  - 3 primitives are supported
    - **Prompts:** Pre-defined templates or instructions that guide language model interactions
    - **Resources:** Structured data or content that provides additional context to the model
    - **Tools:** Executable functions that allow models to perform actions or retrieve information

</v-click>

<!--
[click]
An open protocol developed by Antrophic

[click:2]
💡 Paste links in chat:

- [Introducing the Model Context Protocol](https://www.anthropic.com/news/model-context-protocol)
- [Model Context Protocol (GitHub)](https://github.com/modelcontextprotocol)

If you want create your own MCP server there is already a bunch of SDKs.
-->

---
level: 2
---

# Add MCP Server

- **Workspace scope** `.vscode/mcp.json`
- **User scope** `settings.json`

```json
{
  "mcp": {
    "servers": {
      ...
    }
  }
}
```

<br />

## Note

The `mcp` key is not needed in the `.vscode/mcp.json` file.

<!--
💡 Paste links in chat:

- [Use MCP servers in VS Code (Preview)](https://code.visualstudio.com/docs/copilot/chat/mcp-servers)
-->

---
level: 2
---

# Add MCP Server

- Select the **MCP: Add Server** command from the Command Palette (`Ctrl+Shift+P`)
- Choose a source from the Quick Pick
  - `Command` - stdio
  - `HTTP` - server-sent-events
  - `NPM Package` - Install from an NPM package name
  - `Pip Package` - Install from a Pip package name
  - `Docker` - Install from a Docker image

<v-click>

<br />

## Finding MCP servers

- [https://mcp.so](https://mcp.so)
- [https://github.com/modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)
- [https://github.com/punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers)

</v-click>

<!--
An MPC server can be added from these sources.

[click]
Sources to find MCP servers.

💡 Paste links in chat:

- [mcp.so](https://mcp.so)
- [MCP servers (Repo)](https://github.com/modelcontextprotocol/servers)
- [Awesome MCP Servers (Repo)](https://github.com/punkpeye/awesome-mcp-servers)
-->

---
level: 2
---

# Demo: Add GitHub MCP Server

```json
{
  "mcp": {
    "servers": {
      "github": {
        "command": "docker",
        "args": [
          "run",
          "-i",
          "--rm",
          "-e",
          "GITHUB_PERSONAL_ACCESS_TOKEN",
          "ghcr.io/github/github-mcp-server"
        ],
        "env": {
          "GITHUB_PERSONAL_ACCESS_TOKEN": "<github_token>"
        }
      }
    }
  }
}
```

<!--
- Show how to install MCP server in VS Code
  - Add the [github-mcp-server](https://github.com/github/github-mcp-server)
  - ⚠️ Don't show your PAT or create a temporary one!

💡 Show how to use the tools the MCP server provides
-->

