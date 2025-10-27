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
level: 2
---

# Copilot Chat Modes

| **Mode**        | **Functionality** | **Application** |
|-----------------|---|---|
| **Ask**         | Provides a chat-based Q&A assistant for understanding code, concepts, and receiving code snippets. | Useful for querying how to perform specific tasks. |
| **Edit**        | Allows direct modification of code by appling changes across files. | Facilitates refactoring code, and implementing changes across multiple files. |
| **Agent**       | Acts as an autonomous AI assistant capable of performing multi-step tasks, including writing, testing, and debugging code. | Enables the creation of comprehensive code, by iteratively developing and testing code until the desired outcome is achieved. |

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

---
layout: image-right
background: /code-right.png
backgroundPosition: right
title: GitHub Copilot Chat Demo
level: 2
---

<div class="flex flex-col h-full text-center justify-center">
  <h1>GitHub Copilot<br />Chat Demo</h1>
</div>

<!-- The empty clicks are only for the presenter mode to switch between the demos -->
<v-click>
  <span/>
</v-click>

<v-click>
  <span/>
</v-click>

<v-click>
  <span/>
</v-click>

<v-click>
  <span/>
</v-click>

<v-click>
  <span/>
</v-click>

<v-click>
  <span/>
</v-click>

<v-click>
  <span/>
</v-click>

<v-click>
  <span/>
</v-click>

<!--
Use the [Copilot bootcamp repo ](https://github.com/xebia/Copilot-Bootcamp-ForEndUsers) for these demos

💡 Use the `FlightsController.cs` class for the demo

[click]
**Explain the project**  
_@workspace /explain what the project is about_

[click]
**How to start the project?**  
_@terminal how can i start the WrightBrothersApi project_

- Hover over the output
- Explain buttons
- Click the **Insert into Terminal** button

[click]
**Show `/fix`**

[click]
**Show `/tests`**

[click]
**Add missing endpoints**  
_add missing endpoints_

[click]
**Adding missing log statements**  
_add missing logger calls_  
_add missing logger calls only one at the top of a method like in the Post method_

[click]
**Refactor by extracting logic**  
_extract the switch statement in the UpdateFlightStatus method into a new method_

[click]
**Fix method names**  
_fix method names to match the style of other methods_
-->
