---
layout: cover-dark
background: /secret-agent-large.png
---

# GitHub Copilot Agent Mode

---
layout: image-right
background: /secret-agent-large.png
backgroundPosition: right
level: 2
---

# GitHub Copilot Agent Mode

<v-clicks>

- Define a high-level task and start an agentic code editing session to accomplish that task
- Copilot autonomously plans the work needed and determines the relevant files and context
- Makes edits to the codebase and invokes tools to accomplish the request
- Monitors the outcome of edits and tools and iterates to resolve any issues that arise

</v-clicks>

<!--
⚠️ New feature, VSCode 1.99, April 4th 2025  

💡 Paste links in chat:

[Use agent mode in VS Code](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode)
-->

---
layout: image-right
background: /secret-agent-large.png
backgroundPosition: right
title: GitHub Copilot Agent Mode Settings
level: 2
---

<h1 class="h-auto!">GitHub Copilot Agent Mode</h1>

## Enable in `settings.json`

- `chat.agent.enabled`

  Enable or disable agent mode (default: `false`, requires **VS Code 1.99** or later)

- `chat.agent.maxRequests`

  Maximum number of requests that Copilot Edits can make in agent mode (default: 5 for Copilot Free users, 15 for other users)

- `chat.editing.autoAcceptDelay`

  A delay after which the suggested edits are automatically accepted

- `github.copilot.chat.agent.runTasks`

  Run workspace tasks when using agent mode in Copilot Edits (default: `true`)

- `chat.mcp.discovery.enabled`

  Discovery of MCP servers configured in other tools (default: `true`)

---
layout: image-right
background: /secret-agent-large.png
backgroundPosition: right
title: GitHub Copilot Agent Mode Demo
level: 2
---

<div class="flex flex-col h-full text-center justify-center">
  <h1>GitHub Copilot<br />Agent Mode Demo</h1>
</div>

<!-- The empty clicks are only for the presenter mode to switch between the demos -->
<v-click>
  <span/>
</v-click>

<!--
For the **Agent mode** demo we will use the **Chain-of-Thought Prompting** example.

- ⚠️ Revert all changes made by the previous demo
- Change the Chat mode to **Agent**

[click]
ℹ️ Explain to audience:

- As we have seen in the **Edit mode** demo, context is crucial for Copilot to generate files
- Close all files
- ℹ️ We add some context information in the prompt as we want automate things with the **Agent mode**
- Adjust the prompt at the beginning:  
  _The project source is the WrightBrothersApi/WrightBrothersApi folder._  
  _Parse an aerobatic sequence signature into a C# model._  
  _Add the logic to a new class in the Models folder._  
  _Add new enpoint for calculating the aerobatic sequence to the FlightsController._

💡 Show how the **Agent mode** automaticaly finds the correct _folders/files_ based on the prompts context
-->
