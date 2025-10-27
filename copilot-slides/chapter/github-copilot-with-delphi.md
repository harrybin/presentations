---
layout: cover-dark
background: /pilot-large.jpg
backgroundPosition: right
---

# GitHub Copilot with Delphi

Getting VSCode to Work with Embarcadero RAD Studio

---
layout: image-right
background: /code-right.png
backgroundPosition: right
title: Why VSCode + Delphi?
level: 2
---

<ImageTitle title="VSCode + Delphi" image-url="/logo-vsc.png" />

## Modern Development Experience

<v-clicks>

- **GitHub Copilot Support**: AI-powered code assistance for Delphi
- **Modern Editor**: Lightweight, fast, and highly customizable
- **Cross-Platform**: Work on Windows, Linux, or macOS
- **Git Integration**: Built-in source control management
- **Extensions Ecosystem**: Thousands of productivity tools

</v-clicks>

<!--
While RAD Studio is the primary IDE for Delphi development, VSCode offers modern features that developers have come to expect, including AI assistance through GitHub Copilot.
-->

---
layout: two-cols
level: 2
---

<h1 class="h-auto! pb-5">Path to Success</h1>

## DelphiLSP Extension

<v-click>

- Official Embarcadero extension
- Extension ID: `EmbarcaderoTechnologies.delphilsp`
- Full language server support
- Requires Delphi 11.0 or higher
- Works with existing RAD Studio projects

</v-click>

<div class="mt-10"> </div>

<v-click>

## DCC32

- create a VSCode task to build with DCC32

(unfortunately debugging with DCC32 is not supported because the debug files are not compatible with common debuggers [memory layout issues])

</v-click>

::right::

<div class="pt-18">

<v-click>

## Nice to have Extensions:

- **Numbered Bookmarks**: `alefragnani.numbered-bookmarks`  
  Mark lines and jump to them, in Delphi style

- **Delphi Keymap**: `alefragnani.delphi-keybindings`  
  Popular Delphi keybindings for Visual Studio Code

- **Delphi Themes**: `alefragnani.delphi-themes`  
  Delphi Themes for Visual Studio Code

</v-click>

</div>

<img src="/logo-vsc.png" style="width: 50%;" />


---
layout: two-cols
level: 2
---

<h1 class="h-auto! mt-5">Generate LSP Config</h1>

## Within RAD Studio

Navigate in RAD Studio:

```
Tools > Options > User Interface > 
Editor > Language > Code Insight
```

**Turn on**: `Generate LSP Config`

**Important**: Close and reopen your project

This generates `.delphilsp.json` files for each project


<br/>

<v-click>

## In VSCode

- **Select it** (once --> workspace settings)
   - Command Palette: `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS)
   - Type: `DelphiLSP: Select project settings`
   - Set the project context

</v-click>

::right::

<div class="pt-25 pl-25">

<v-click>

> **💡 What is .delphilsp.json?** 
>
> Configuration file containing: 
> 
> - Project paths and structure
> - Compiler settings
> - Unit search paths
> - Platform configurations
> - Conditional defines
>
>📖 **Full details**: [Code Insight Reference](https://docwiki.embarcadero.com/RADStudio/Athens/en/Code_Insight_Reference)

</v-click>

</div>

<!--
The .delphilsp.json file is crucial - it tells the language server how to understand your project structure, dependencies, and compiler settings. Without this file, the language server won't work properly.

Opening the folder that contains your Delphi project with .delphilsp.json files is key. The extension will automatically detect and configure the language server.
-->


---
layout: image-right
background: /delphi-code.png
level: 2
---

# Start Coding

## Full Language Server Support

You can now work with your Delphi code in VS Code with:

<v-clicks>

- **IntelliSense**: Smart code completion
- **Syntax Checking**: Real-time errors
- **Code Navigation**: Go to definition
- **Find References**: Track symbol usage
- **Hover Information**: Quick docs
- **Signature Help**: Parameter hints

</v-clicks>


<!--
With the DelphiLSP server running, you get a complete modern development experience. GitHub Copilot can now understand your Delphi code context and provide intelligent suggestions.
-->


---
layout: two-cols
title: Best of Both Worlds
level: 2
---

# Best of Both Worlds

<v-click>

## Workflow Strategy

**RAD Studio** for:
- Visual form designer
- Component palette
- Database tools
- Deployment

</v-click>

<br/>

<v-click>

**VSCode** for:
- Code editing with Copilot
- Git operations
- Markdown documentation
- Terminal workflows

</v-click>

::right::

<v-click>

<div class="pt-25">

## Sync Your Work (VSCode)

- Use Git for version control
- `.delphilsp.json` in repository
- Consistent project structure
- Share configurations

<br/>

### 🔄 Typical Workflow

- Design UI in RAD Studio
- Write logic in VSCode with Copilot
- Debug in RAD Studio
- Commit with VSCode Git tools

</div>

</v-click>


<!--
You don't have to choose one or the other. Use each tool for what it does best to maximize productivity.
-->

