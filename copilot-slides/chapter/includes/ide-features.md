---
level: 2
---

<style scoped>
.copilot-ide-table-wrapper {
  max-height: 60vh;
  overflow-y: auto;
  overflow-x: hidden;
}
.copilot-ide-table {
  border-collapse: collapse;
  font-size: 0.95em;
  width: 100%;
  table-layout: fixed;
}
.copilot-ide-table th, .copilot-ide-table td {
  border: 1px solid #d1d5db;
  padding: 0.75em 0.2em;
  text-align: center;
  min-width: 60px;
  height: 3.5em;
}
.copilot-ide-table th {
  position: sticky;
  top: 0;
  z-index: 2;
  height: 3.5em;
  vertical-align: middle;
  color: #6b1e5d;
}
.copilot-ide-table th:first-child, .copilot-ide-table td:first-child {
  text-align: left;
}
.copilot-ide-table th img {
  display: block;
  margin: 0 auto;
}


</style>

<h1 class="h-auto! -mt-8">GitHub Copilot IDE Features</h1>

<div class="copilot-ide-table-wrapper">
<table class="copilot-ide-table">
  <colgroup>
    <col style="width: 220px;" />
    <col style="width: 1fr;" />
    <col style="width: 1fr;" />
    <col style="width: 1fr;" />
    <col style="width: 1fr;" />
    <col style="width: 1fr;" />
  </colgroup>
  <thead>
    <tr>
      <th>Copilot Feature</th>
      <th>VS Code<br/><img src="/logo-vsc.png" style="height:2em" alt="VS Code"/></th>
      <th>Visual Studio<br/><img src="/logo-vs.png" style="height:2em" alt="Visual Studio"/></th>
      <th>JetBrains<br/><img src="/logo-jb.png" style="height:2em" alt="JetBrains"/></th>
      <th>Eclipse<br/><img src="/logo-eclipse.png" style="height:2em" alt="Eclipse"/></th>
      <th>Xcode<br/><img src="/logo-xcode.png" style="height:2em" alt="Xcode"/></th>
    </tr>
  </thead>
  <tbody>
    <tr >
      <td><b>Code Completion</b></td>
      <td><!-- VS Code --> <a href="https://code.visualstudio.com/docs/copilot/getting-started" target="_blank">✅</a></td>
      <td><!-- Visual Studio --> <a href="https://learn.microsoft.com/en-us/visualstudio/ide/visual-studio-github-copilot-extension?view=vs-2022" target="_blank">✅</a></td>
      <td><!-- JetBrains --> <a href="https://plugins.jetbrains.com/plugin/17718-github-copilot" target="_blank">✅</a></td>
      <td><!-- Eclipse --> <a href="https://marketplace.eclipse.org/content/github-copilot" target="_blank">✅</a></td>
      <td><!-- Xcode --> <a href="https://github.com/github/CopilotForXcode" target="_blank">✅</a></td>
    </tr>
    <tr >
      <td><b>Copilot Chat</b></td>
      <td><!-- VS Code --> <a href="https://code.visualstudio.com/docs/copilot/getting-started-chat" target="_blank">✅</a></td>
      <td><!-- Visual Studio --> <a href="https://learn.microsoft.com/en-us/visualstudio/ide/visual-studio-github-copilot-chat?view=vs-2022" target="_blank">✅</a></td>
      <td><!-- JetBrains --> <a href="https://plugins.jetbrains.com/plugin/17718-github-copilot" target="_blank">✅</a></td>
      <td><!-- Eclipse --> <a href="https://marketplace.eclipse.org/content/github-copilot" target="_blank">✅</a></td>
      <td><!-- Xcode --> <a href="https://github.com/github/CopilotForXcode" target="_blank">✅</a></td>
    </tr>
    <tr >
      <td><b>Copilot Edit</b></td>
      <td><!-- VS Code --> <a href="https://code.visualstudio.com/docs/copilot/chat/copilot-edits" target="_blank">✅</a></td>
      <td><!-- Visual Studio --> <a href="https://learn.microsoft.com/en-us/visualstudio/ide/copilot-edits?view=vs-2022" target="_blank">☑️</a></td>
      <td><!-- JetBrains --> <a href="https://plugins.jetbrains.com/plugin/17718-github-copilot" target="_blank">✅</a></td>
      <td><!-- Eclipse --> <a href="https://marketplace.eclipse.org/content/github-copilot" target="_blank">✅</a></td>
      <td><!-- Xcode --> </td>
    </tr>
    <tr >
      <td><b>Inline Chat</b></td>
      <td><!-- VS Code --> <a href="https://code.visualstudio.com/docs/copilot/getting-started-chat#_inline-chat" target="_blank">✅</a></td>
      <td><!-- Visual Studio --> <a href="https://learn.microsoft.com/en-us/visualstudio/ide/copilot-chat-context?view=vs-2022#inline-chat" target="_blank">✅</a></td>
      <td><!-- JetBrains --> <a href="https://github.blog/changelog/2024-09-11-inline-chat-is-now-available-in-github-copilot-in-jetbrains/" target="_blank">✅</a></td>
      <td><!-- Eclipse --> <a href="https://marketplace.eclipse.org/content/github-copilot" target="_blank">✅</a></td>
      <td><!-- Xcode --> </td>
    </tr>
    <tr >
      <td><b>Copilot Agent Mode</b></td>
      <td><!-- VS Code --> <a href="https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode" target="_blank">✅</a></td>
      <td><!-- Visual Studio --> <a href="https://learn.microsoft.com/en-us/visualstudio/ide/copilot-agent-mode?view=vs-2022" target="_blank">✅</a></td>
      <td><!-- JetBrains --> <a href="https://github.blog/changelog/2025-05-19-agent-mode-and-mcp-support-for-copilot-in-jetbrains-eclipse-and-xcode-now-in-public-preview/" target="_blank">🔬</a></td>
      <td><!-- Eclipse --> <a href="https://marketplace.eclipse.org/content/github-copilot" target="_blank">✅</a></td>
      <td><!-- Xcode --> <a href="https://github.com/github/CopilotForXcode" target="_blank">✅</a></td>
    </tr>
     <tr >
      <td><b>Custom Agent Chat Modes</b></td>
      <td><!-- VS Code --> <a href="https://code.visualstudio.com/docs/copilot/getting-started-chat#_chat-modes" target="_blank">✅</a></td>
      <td><!-- Visual Studio --> </td>
      <td><!-- JetBrains --> </td>
      <td><!-- Eclipse --> </td>
      <td><!-- Xcode --> </td>
    </tr>
  </tbody>
</table>
</div>

<!--
[GitHub Copilot for Vim and Neovim](https://github.com/github/copilot.vim) only supports code completion.

The edit feature was once implemented for Visual Studio 2022, it is still documented, but the UI to trigger it is no longer available. It is not clear if this feature will be reintroduced in the future.
-->

---
level: 2
---


<style scoped>
.copilot-ide-table-wrapper {
  max-height: 60vh;
  overflow-y: auto;
  overflow-x: hidden;
}
.copilot-ide-table {
  border-collapse: collapse;
  font-size: 0.95em;
  width: 100%;
  table-layout: fixed;
}
.copilot-ide-table th, .copilot-ide-table td {
  border: 1px solid #d1d5db;
  padding: 0.75em 0.2em;
  text-align: center;
  min-width: 60px;
  height: 3.5em;
}
.copilot-ide-table th {
  position: sticky;
  top: 0;
  z-index: 2;
  height: 3.5em;
  vertical-align: middle;
  color: #6b1e5d;
}
.copilot-ide-table th:first-child, .copilot-ide-table td:first-child {
  text-align: left;
}
.copilot-ide-table th img {
  display: block;
  margin: 0 auto;
}


</style>


<div class="copilot-ide-table-wrapper">
<table class="copilot-ide-table">
  <colgroup>
    <col style="width: 220px;" />
    <col style="width: 1fr;" />
    <col style="width: 1fr;" />
    <col style="width: 1fr;" />
    <col style="width: 1fr;" />
    <col style="width: 1fr;" />
  </colgroup>
  <thead>
    <tr>
      <th>Copilot Feature</th>
      <th>VS Code<br/><img src="/logo-vsc.png" style="height:2em" alt="VS Code"/></th>
      <th>Visual Studio<br/><img src="/logo-vs.png" style="height:2em" alt="Visual Studio"/></th>
      <th>JetBrains<br/><img src="/logo-jb.png" style="height:2em" alt="JetBrains"/></th>
      <th>Eclipse<br/><img src="/logo-eclipse.png" style="height:2em" alt="Eclipse"/></th>
      <th>Xcode<br/><img src="/logo-xcode.png" style="height:2em" alt="Xcode"/></th>
    </tr>
  </thead>
  <tbody>   
    <tr >
      <td><b>Custom Instructions (global)</b></td>
      <td><!-- VS Code --> <a href="https://code.visualstudio.com/docs/copilot/copilot-customization" target="_blank">✅</a></td>
      <td><!-- Visual Studio --> <a href="https://learn.microsoft.com/en-us/visualstudio/ide/copilot-chat-context?view=vs-2022#enable-custom-instructions" target="_blank">✅</a></td>
      <td><!-- JetBrains --> <a href="https://docs.github.com/en/copilot/how-tos/custom-instructions/adding-repository-custom-instructions-for-github-copilot" target="_blank">✅</a></td>
      <td><!-- Eclipse --> </td>
      <td><!-- Xcode --> <a href="https://github.com/github/CopilotForXcode" target="_blank">✅</a></td>
    </tr>
    <tr >
      <td><b>Custom Instructions (multiple/selective)</b></td>
      <td><!-- VS Code --> <a href="https://code.visualstudio.com/docs/copilot/copilot-customization" target="_blank">✅</a></td>
      <td><!-- Visual Studio --> <a href="https://learn.microsoft.com/en-us/visualstudio/ide/copilot-chat-context?view=vs-2022#enable-custom-instructions" target="_blank">✅</a></td>
      <td><!-- JetBrains --> </td>
      <td><!-- Eclipse --> </td>
      <td><!-- Xcode --> </td>
    </tr>
    <tr >
      <td><b>Debugger integration</b></td>
      <td><!-- VS Code --><a href="https://code.visualstudio.com/docs/copilot/guides/debug-with-copilot">✅</a></td>
      <td><!-- Visual Studio --> <a href="https://learn.microsoft.com/en-us/visualstudio/debugger/debug-with-copilot?view=vs-2022" target="_blank">✅</a></td>
      <td><!-- JetBrains --> </td>
      <td><!-- Eclipse --> </td>
      <td><!-- Xcode --> </td>
    </tr>
     <tr >
      <td><b>Explain and debug test failures</b></td>
      <td><!-- VS Code --><a href="https://code.visualstudio.com/docs/copilot/guides/test-with-copilot" target="_blank">✅</a></td>
      <td><!-- Visual Studio --> <a href="https://devblogs.microsoft.com/visualstudio/transform-your-debugging-experience-with-github-copilot/" target="_blank">✅</a></td>
      <td><!-- JetBrains --> </td>
      <td><!-- Eclipse --> </td>
      <td><!-- Xcode --> </td>
    </tr>
    <tr >
      <td><b>Slash Commands</b></td>
      <td><!-- VS Code --> <a href="https://learn.microsoft.com/en-us/visualstudio/ide/copilot-chat-context?view=vs-2022#slash-commands" target="_blank">✅</a></td>
      <td><!-- Visual Studio --> <a href="https://code.visualstudio.com/docs/copilot/getting-started-chat#_slash-commands" target="_blank">✅</a></td>
      <td><!-- JetBrains --> <a href="https://github.blog/changelog/2024-09-11-inline-chat-is-now-available-in-github-copilot-in-jetbrains/" target="_blank">✅</a></td>
      <td><!-- Eclipse --> <a href="https://marketplace.eclipse.org/content/github-copilot" target="_blank">✅</a></td>
      <td><!-- Xcode --> </td>
    </tr>
    <tr >
      <td><b>MCP Server Support</b></td>
      <td><!-- VS Code --> <a href="https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode#mcp-server-support" target="_blank">✅</a></td>
      <td><!-- Visual Studio --> <a href="https://learn.microsoft.com/en-us/visualstudio/ide/mcp-servers?view=vs-2022" target="_blank">✅</a></td>
      <td><!-- JetBrains --> <a href="https://github.blog/changelog/2025-05-19-agent-mode-and-mcp-support-for-copilot-in-jetbrains-eclipse-and-xcode-now-in-public-preview/" target="_blank">🔬</a></td>
      <td><!-- Eclipse --> <a href="https://marketplace.eclipse.org/content/github-copilot" target="_blank">✅</a></td>
      <td><!-- Xcode --> <a href="https://github.com/github/CopilotForXcode" target="_blank">✅</a></td>
    </tr>       
  </tbody>
</table>
</div>

---
level: 2
---


<style scoped>
.copilot-ide-table-wrapper {
  max-height: 60vh;
  overflow-y: auto;
  overflow-x: hidden;
}
.copilot-ide-table {
  border-collapse: collapse;
  font-size: 0.95em;
  width: 100%;
  table-layout: fixed;
}
.copilot-ide-table th, .copilot-ide-table td {
  border: 1px solid #d1d5db;
  padding: 0.75em 0.2em;
  text-align: center;
  min-width: 60px;
  height: 3.5em;
}
.copilot-ide-table th {
  position: sticky;
  top: 0;
  z-index: 2;
  height: 3.5em;
  vertical-align: middle;
  color: #6b1e5d;
}
.copilot-ide-table th:first-child, .copilot-ide-table td:first-child {
  text-align: left;
}
.copilot-ide-table th img {
  display: block;
  margin: 0 auto;
}
</style>

<div class="copilot-ide-table-wrapper">
<table class="copilot-ide-table">
  <colgroup>
    <col style="width: 220px;" />
    <col style="width: 1fr;" />
    <col style="width: 1fr;" />
    <col style="width: 1fr;" />
    <col style="width: 1fr;" />
    <col style="width: 1fr;" />
  </colgroup>
  <thead>
    <tr>
      <th>Copilot Feature</th>
      <th>VS Code<br/><img src="/logo-vsc.png" style="height:2em" alt="VS Code"/></th>
      <th>Visual Studio<br/><img src="/logo-vs.png" style="height:2em" alt="Visual Studio"/></th>
      <th>JetBrains<br/><img src="/logo-jb.png" style="height:2em" alt="JetBrains"/></th>
      <th>Eclipse<br/><img src="/logo-eclipse.png" style="height:2em" alt="Eclipse"/></th>
      <th>Xcode<br/><img src="/logo-xcode.png" style="height:2em" alt="Xcode"/></th>
    </tr>
  </thead>
  <tbody>       
    <tr >
      <td><b>Next Edit Suggestions</b></td>
      <td><!-- VS Code --> <a href="https://code.visualstudio.com/docs/copilot/chat/copilot-edits#_edit-mode" target="_blank">✅</a></td>
      <td><!-- Visual Studio --> <a href="https://learn.microsoft.com/en-us/visualstudio/ide/copilot-next-edit-suggestions?view=vs-2022" target="_blank">✅</a></td>
      <td><!-- JetBrains --> </td>
      <td><!-- Eclipse --> </td>
      <td><!-- Xcode --> </td>
    </tr>
    <tr >
      <td><b>Git commit messages</b></td>
      <td><!-- VS Code --> <a href="https://code.visualstudio.com/docs/editor/github" target="_blank">✅</a></td>
      <td><!-- Visual Studio --> <a href="https://learn.microsoft.com/en-us/visualstudio/version-control/git-make-commit?view=vs-2022#generate-commit-messages-with-github-copilot-chat" target="_blank">✅</a> </td>
      <td><!-- JetBrains --> <a href="https://github.blog/changelog/2025-02-19-boost-your-productivity-with-github-copilot-in-jetbrains-ides-introducing-project-context-ai-generated-commit-messages-and-other-updates/" target="_blank">✅</a></td>
      <td><!-- Eclipse --> </td>
      <td><!-- Xcode --> </td>
    </tr>
    <tr >
      <td><b>Code Review</b></td>
      <td><!-- VS Code --> <a href="https://github.blog/changelog/2024-10-29-github-copilot-code-review-in-visual-studio-code-public-preview/" target="_blank">✅</a></td>
      <td><!-- Visual Studio --> <a href="https://learn.microsoft.com/en-us/visualstudio/version-control/git-make-commit?view=vs-2022#review-local-changes-with-copilot-chat" target="_blank">✅</a></td>
      <td><!-- JetBrains --> </td>
      <td><!-- Eclipse --> </td>
      <td><!-- Xcode --> </td>
    </tr>
    <tr >
      <td><b>Prompt Files</b></td>
      <td><!-- VS Code --> <a href="https://code.visualstudio.com/docs/copilot/copilot-customization#_prompt-files" target="_blank">✅</a></td>
      <td><!-- Visual Studio --> <a href="https://learn.microsoft.com/en-us/visualstudio/ide/copilot-chat-context?view=vs-2022#use-prompt-files" target="_blank">✅</a></td>
      <td><!-- JetBrains --> <a href="https://docs.github.com/en/copilot/how-tos/custom-instructions/adding-repository-custom-instructions-for-github-copilot" target="_blank">✅</a></td>
      <td><!-- Eclipse --> </td>
      <td><!-- Xcode --> </td>
    </tr>
    <tr >
      <td><b>Agent Tool Sets</b></td>
      <td><!-- VS Code --> <a href="https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode#agent-tools" target="_blank">✅</a></td>
      <td><!-- Visual Studio --> <a href="https://learn.microsoft.com/en-us/visualstudio/ide/copilot-agent-mode?view=vs-2022#agent-mode-tools" target="_blank">✅</a></td>
      <td><!-- JetBrains --> </td>
      <td><!-- Eclipse --> </td>
      <td><!-- Xcode --> </td>
    </tr>
    <tr >
      <td><b>Extensions</b></td>
      <td><!-- VS Code --> <a href="https://code.visualstudio.com/docs/copilot/extensions" target="_blank">✅</a></td>
      <td><!-- Visual Studio --> <a href="https://learn.microsoft.com/en-us/visualstudio/ide/visual-studio-github-copilot-extension?view=vs-2022#extensions" target="_blank">✅</a></td>
      <td><!-- JetBrains --> </td>
      <td><!-- Eclipse --> </td>
      <td><!-- Xcode --> </td>
    </tr>
    <tr >
      <td><b>Pull Request Summaries</b></td>
      <td><!-- VS Code --> <a href="https://github.blog/changelog/2024-10-29-github-copilot-code-review-in-visual-studio-code-public-preview/" target="_blank">✅</a></td>
      <td><!-- Visual Studio --> <a href="https://learn.microsoft.com/en-us/visualstudio/version-control/git-create-pull-request?view=vs-2022" target="_blank">✅</a> </td>
      <td><!-- JetBrains --> </td>
      <td><!-- Eclipse --> </td>
      <td><!-- Xcode --> </td>
    </tr>
    <tr >
      <td><b>Jupyter Notebooks</b></td>
      <td><!-- VS Code --> <a href="https://code.visualstudio.com/docs/datascience/jupyter-notebooks#_github-copilot-in-notebooks" target="_blank">✅</a></td>
      <td><!-- Visual Studio --> </td>
      <td><!-- JetBrains --> </td>
      <td><!-- Eclipse --> </td>
      <td><!-- Xcode --> </td>
    </tr>
  </tbody>
</table>
</div>
