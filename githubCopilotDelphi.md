---
theme: "@xebia/slidev-theme-xebia"
transition: "fade"
addons:
  - slidev-component-progress
  - "@xebia/slidev-addon-components-common"
  - slidev-addon-qrcode
# disabled pdf downloading in SPA build, can also be a custom url
download: false
browserExporter: true
# disable slide recording, can be boolean, 'dev' or 'build'
record: false
# disable editor for slides editing, can be boolean, 'dev' or 'build'
editor: true
# take snapshot for each slide in the overview
overviewSnapshots: false
# background glow animation
glowEnabled: true
###### slides start ######
# the routeAlias must be named like the entry md file
layout: cover
background: /pilot-large.jpg
description: "GitHub Copilot especially for Delphi Developers"
hideInToc: true
routeAlias: githubCopilotDelphi
---

<img src="/ekon29.png" width="40%" class="mt--20 mb-20" />

# GitHub Copilot especially for Delphi Developers

---
title: Speaker
layout: intro
src: special-slides/speaker.md
---

---
title: Is Delphi ready for AI-assisted Development?
---

<h1 class="h-auto">Is Delphi ready for AI-assisted Development?</h1>

<img src="/apple-2e.jpg" class="h-80 object-contain mx-auto" />


<!-- 

- more than 35 years ago... Turbo Pascal 7
- no IDE (no syntax highlighting, no code completion, no refactoring tools, no debugging tools  etc.)
- then Borland Delphi 1 in 1995, first IDE for Windows with visual form designer
- now 2024, AI-assisted development with GitHub Copilot? no, not supported yet for Delphi

-->

---
src: /copilot-slides/agenda.md
---

---
layout: image-right
background: /gh-copilot-logo.png
backgroundSize: 70%
---

# Why Copilot as an AI Assitent?

<v-clicks>

- supports **severals LLMs**
- **models fine-tuned** for programming tasks **with GitHub Open Source code**
- integrates into **several IDEs**
- billing via **premium requests** instead of tokens (budjetting easier)
- **gourvernance** and security features for enterprises

</v-clicks>

---
src: /copilot-slides/chapter/github-copilot-overview.md
---

---
src: /copilot-slides/chapter/github-copilot-with-delphi.md
---

---
src: /copilot-slides/chapter/github-copilot-completions.md
---

---
src: /copilot-slides/chapter/github-copilot-chat.md
---

---
src: /copilot-slides/chapter/github-copilot-agent-mode.md
---

---
src: /copilot-slides/chapter/instruction-files.md
---

---
src: /copilot-slides/chapter/mcp-server.md
---

---
src: /copilot-slides/chapter/wrap-up.md
---

---
src: /special-slides/questions.md
---

---
src: /special-slides/thank-you.md
---

---
layout: end
level: 2
hideInToc: true
---

![](/ekon29.png)  Oct 2025

<br/>

# End of presentation


