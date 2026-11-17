---
theme: "@xebia/slidev-theme-xebia"
transition: "fade"
addons:
    - slidev-component-progress
    - "@xebia/slidev-addon-components-common"
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
###### ALL slides start ######
layout: image-right
background: /logo.svg
backgroundSize: 90%
hideInToc: true
routeAlias: index

---

# Presentation Overview
<span class="presentation-overview-marker"></span>
<!-- <a href="/webappLocalization/" target="_blank">WebApp-Localization - DWX (Juli 2025)</a> -->


<a href="/ekon30-spec-driven-development/" target="_blank">Spec-Driven Development: Mit AI-Agent-Squads vom PRD zum autonomen Code [EKON30 Nov 26]</a>

<a href="/ekon30-ai-context-setup/" target="_blank">AI Context Setup – Instructions, Prompts, Skills, Tools, Custom Agents, was ist für was? [EKON30 Nov 26]</a>

<a href="/ekon30-github-copilot-a-bis-z/" target="_blank">Workshop: GitHub Copilot von A bis Z [EKON30 Nov 26]</a>

<a href="/ekon30-react19-mui6-workshop/" target="_blank">Workshop: Moderne Web-Applikationen mit React und Material-UI in TypeScript [EKON30 Nov 26]</a>


<br/>



<a href="/bmad-anforderungen-tests/" target="_blank">KI-gestützte Anforderungs- und Testfallentwicklung mit der BMad-Methode [ADC Mar 26]</a>

<a href="/aiops-Mainteance-mit-KI/" target="_blank">AIOps: Maintenance von Softwaresystemen durch KI [INFINITE AI CONF Jul 26]</a>


<br/>

<details>
<summary>Sessions 2025</summary>
<br/>
<a href="/devcontainer/" target="_blank">Devcontainer - [DWX Juli 25; MD DevDays Mai 25]</a>
<br/>
<a href="/webappLocalization/" target="_blank">WebApp-Localization - [DWX Juli 25]</a>
<br/>
<a href="/githubCopilotDelphi/" target="_blank">GitHub Copilot with Delphi - [EKON Oct 25]</a>
<br/>
<a href="/msWebUiReact/" target="_blank">Microsoft's Web UI Technology: Is It React? [DDC Nov 25]</a>
</details>

<style>
:global(.slidev-layout:has(.presentation-overview-marker)) {
  height: 100%;
  overflow-y: auto;
}
</style>
