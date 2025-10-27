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

- `chat.agent.maxRequests`

  Maximum number of requests that Copilot Edits can make in agent mode (default: 5 for Copilot Free users, 15 for other users)

- `chat.editing.autoAcceptDelay`

  A delay after which the suggested edits are automatically accepted


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

**Explain the project**  
_@workspace /explain what the project is about_

**How to start the project?**  
_@terminal how can i start the WrightBrothersApi project_

- Hover over the output
- Explain buttons
- Click the **Insert into Terminal** button

**Show `/fix`**

**Show `/tests`**

**Add missing endpoints**  
_add missing endpoints_

**Adding missing log statements**  
_add missing logger calls_  
_add missing logger calls only one at the top of a method like in the Post method_

**Refactor by extracting logic**  
_extract the switch statement in the UpdateFlightStatus method into a new method_

**Fix method names**  
_fix method names to match the style of other methods_

💡 Show how the **Agent mode** automaticaly finds the correct _folders/files_ based on the prompts context
-->
