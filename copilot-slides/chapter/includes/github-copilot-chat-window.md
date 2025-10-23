---
layout: two-column
title: Copilot Chat Window
level: 2
---

<h2 class="h-auto!">Copilot Chat Window</h2>

::left::

<img src="/copilot-chat-1.png" style="height: 400px">

::right::

<style>
.tight-list ol,
.tight-list li {
  line-height: 1.3 !important;
  margin: 0.15em 0 !important;
  font-size: 1em;
}
</style>
<div class="tight-list">

1. Toggle **Chat** ( <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>I</kbd>) / More...
1. **Restore** Checkpoint
1. **New** Chat (<kbd>Ctrl</kbd>+<kbd>L</kbd>)
1. Show Chats **history**...
1. **Customization** files ...
1. Full screen chat mode
1. **Edit** previous prompt
1. Give feedback for the result
1. Add **Context**... (<kbd>Ctrl</kbd>+<kbd>#</kbd>)
1. Additional file context (remove by <kbd>X</kbd> click)
1. Current file context  (disable toggle)
1. Set **Mode** (<kbd>Ctrl</kbd>+<kbd>.</kbd>)
1. Pick **Model** (<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>.</kbd>)
1. **Tooling** (MCP, Extensions, Toolsets, etc.)
1. Use Voice Chat
1. **Delegate** to Coding Agent
1. **Send** and Dispatch (Enter)
</div>

<!--
⚠️ Explain the Chat window before the demo
- don't show the effect of all the menu item in 5., just mention them. These will be covered in the deep dive.
  you may only mention to use "Generate Instructions"
- The mode selection now also offers "Configure Modes". That will also be covered in the deep dive.
- The model picker now supports "Manage Models" which enables you to choose the models shown in the picker.

-->

---
layout: two-column
level: 2
---

<h2 class="h-auto!">Copilot Chat Window</h2>

::left::

<img src="/copilot-chat-2.png" alt="Copilot Chat tools menu" style="max-height: 260px; border-radius: 8px;"> 

<br />
<img src="/copilot-chat-3.png" alt="Participants, models and tool selection" style="max-height: 260px; border-radius: 8px;">

::right::

Select Tools... (`Ctrl+Shift+#`)

## Note

- Select tools for installed MCP Servers or Extensions.  
- This option is only available in the **Agent** mode.
- Currently a **limit** of may **128** tools is forced.

<br />
<br />
<br />

## Model Selection:

- Bring your own language model key
- select which Copilot models should be shown int he selection list


<!--
💡 Paste links in chat:

[Bring your own language model key](https://code.visualstudio.com/docs/copilot/language-models#_bring-your-own-language-model-key)
-->