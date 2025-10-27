---
layout: cover-dark
background: /pilot-large.jpg
backgroundPosition: right
---

# GitHub Copilot Chat

---
src: includes/github-copilot-chat-window.md
---

---
layout: image-right
background: /spaceships-right.jpg
backgroundSize: 101%
level: 2
---

# Copilot Chat Participants

- `@workspace`  

  Ask about your workspace

- `@terminal`  

  Ask how to do something in the terminal

- `@vscode`  

  Ask questions about VS Code

<br />

## Note

`@participants` may differ based on IDE or extensions.

<!--
There are three command or options types Copilot Chat can be used with:

- Chat participants
- Slash commands
- Chat variables

**Chat participants** are like domain experts who have a specialty that they can help you with.

ℹ️ **Sidenote**  
The naming _Chat participants_ can vary by the documentation or tool:
- participants
- skills
- agents
- extensions
-->

---
layout: image-right
background: /spaceships-right.jpg
backgroundSize: 101%
title: Copilot Slash Commands
level: 2
---

<h1 class="h-auto!">Copilot Slash Commands</h1>

- `/explain`  

  Explain how the code in your active editor works

- `/fix`  

  Propose a fix for the problems in the selected code

- `/new`  

  Scaffold code for a new file or project in a workspace

- `/newNotebook`  

  Create a new Jupyter Notebook

- `/tests`  

  Generate unit tests for the selected code

<br />

## Note

`/commands` may differ based on IDE or extensions.

Every `@participant` has its **own subset** of `/commands`.

<!--
**Slash commands** are used to avoid writing complex prompts for common scenarios.
-->

---
layout: image-right
background: /spaceships-right.jpg
backgroundSize: 101%
title: Copilot Chat Variables
level: 2
---

<h1 class="h-auto!">Copilot Chat Variables</h1>

- `#codebase`  

  Provide context from the workspace codebase

- `#file`  

  Provide context from a file in the workspace

- `#folder`  

  Provide context from a folder in the workspace

- `#fetch`  

  Provide context from a website

- `#terminalSelection`  

  Provide context from the terminal selection

<br />

## Note

`#variables` may differ based on IDE or extensions.

<!--
**Chat variables** are used to include specific context in your prompt.

💡 Paste links in chat:

[GitHub Copilot Chat cheat sheet](https://docs.github.com/en/copilot/using-github-copilot/copilot-chat/github-copilot-chat-cheat-sheet)
-->
