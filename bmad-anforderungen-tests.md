---
theme: "@xebia/slidev-theme-xebia-2026"
transition: "fade"
addons:
  - slidev-component-progress
  - "@xebia/slidev-addon-components-common"
  - slidev-addon-qrcode
download: false
browserExporter: true
record: false
editor: true
overviewSnapshots: false
glowEnabled: true
mermaid:
  theme: base
  themeVariables:
    darkMode: false
    fontFamily: Inter, "Segoe UI", sans-serif
    fontSize: 18px
    lineColor: "#2b3d52"
    textColor: "#0f172a"
    primaryColor: "#e8f1fa"
    primaryBorderColor: "#2f6ea3"
    primaryTextColor: "#0f172a"
    secondaryColor: "#eef7f2"
    secondaryBorderColor: "#2d7a5f"
    secondaryTextColor: "#0f172a"
    tertiaryColor: "#f4f8fc"
    tertiaryBorderColor: "#5b7a99"
    noteBkgColor: "#fff8d6"
    noteBorderColor: "#b08900"
    noteTextColor: "#3b2f00"
    clusterBkg: "#f5f9fd"
    clusterBorder: "#b7cadf"
    mainBkg: "#e8f1fa"
    nodeBorder: "#2f6ea3"
    edgeLabelBackground: "#ffffff"
    nodeTextColor: "#0f172a"
  themeCSS: |
    svg {
      overflow: visible;
    }

    /* Rounded corners + subtle depth effect on entities. */
    .node rect,
    .node polygon,
    .node path,
    .node circle {
      rx: 10px;
      ry: 10px;
      stroke-width: 1.8px;
      filter: drop-shadow(0 3px 5px rgba(15, 23, 42, 0.16));
      transition: transform 260ms ease, filter 260ms ease, stroke-width 260ms ease;
    }

    .node:hover rect,
    .node:hover polygon,
    .node:hover path,
    .node:hover circle {
      transform: translateY(-1px);
      filter: drop-shadow(0 6px 10px rgba(15, 23, 42, 0.24));
      stroke-width: 2.2px;
    }

    /* Slight tonal differences inspired by Slidev theme colors. */
    .node.default rect,
    .node.default polygon,
    .node.default path {
      fill: color-mix(in srgb, var(--slidev-theme-primary) 16%, white);
      stroke: color-mix(in srgb, var(--slidev-theme-primary) 72%, #0f172a);
    }

    .node[class*="secondary"] rect,
    .node[class*="secondary"] polygon,
    .node[class*="secondary"] path {
      fill: color-mix(in srgb, var(--slidev-theme-secondary) 20%, white);
      stroke: color-mix(in srgb, var(--slidev-theme-secondary) 72%, #0f172a);
    }

    /* Animated arrows for more dynamic flow perception. */
    .edgePath .path,
    .flowchart-link,
    .edge-thickness-normal,
    .edge-thickness-thick {
      stroke-dasharray: 8 7;
      animation: mermaid-edge-flow 1.7s linear infinite;
      stroke-width: 2px;
    }

    .arrowheadPath,
    marker path {
      animation: mermaid-arrow-pulse 1.7s ease-in-out infinite;
      transform-origin: center;
    }

    .edgeLabel {
      animation: mermaid-soft-fade 2.2s ease-in-out infinite alternate;
    }

    .node {
      animation: mermaid-node-breathe 3.6s ease-in-out infinite;
      transform-origin: center;
    }

    @keyframes mermaid-edge-flow {
      to {
        stroke-dashoffset: -30;
      }
    }

    @keyframes mermaid-arrow-pulse {
      0%,
      100% {
        opacity: 0.86;
      }
      50% {
        opacity: 1;
      }
    }

    @keyframes mermaid-node-breathe {
      0%,
      100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-0.8px);
      }
    }

    @keyframes mermaid-soft-fade {
      from {
        opacity: 0.92;
      }
      to {
        opacity: 1;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .edgePath .path,
      .flowchart-link,
      .edge-thickness-normal,
      .edge-thickness-thick,
      .arrowheadPath,
      marker path,
      .edgeLabel,
      .node {
        animation: none !important;
        transition: none !important;
      }
    }
aspectRatio: 18/9
###### slides start ######
layout: cover
coverImage: /bmad-dev-ideas-to-tests.png
description: "KI-gestützte Anforderungs- und Testfallentwicklung mit der BMad-Methode — Von der vagen Idee zur validierten Testsuite"
hideInToc: true
routeAlias: bmad-anforderungen-tests
showCopyright: false
author: ADC 2026
isDark: true
---

# KI-gestützte Anforderungs- und Testfallentwicklung

## Von der vagen Idee zur validierten Testsuite mit BMad

<!--
Willkommen! Dieser Talk zeigt wie die BMad-Methode (Build More Architect Dreams) den Weg von vagen Anforderungen zu einer validierten Testsuite revolutioniert.

Dauer: 60 Minuten inkl. 3 Live-Demos und Q&A.

Audience-Hook: "Wer hat schon mal ein Projekt erlebt, das wegen unklarer Anforderungen in Schieflage geraten ist?" — Fast alle Hände sollten sich heben.

🎨 Image prompt: A developer surrounded by floating words and concepts that gradually transform into structured code and test reports. Digital art style, developer-themed background, similar to /bmad-dev-ideas-to-tests.png but with AI overlay elements.
-->

---
title: Speaker
layout: intro
src: special-slides/speaker.md
---

---
layout: cover
coverImage: /bmad-project-failure-aircraft.png
hideInToc: true
---

# 47% aller Softwareprojekte scheitern an unklaren Anforderungen.

<v-clicks>

## Was wäre, wenn KI das Problem lösen könnte?

## Nicht als Zauberstab — sondern als methodischer Kollaborateur?

## Willkommen in der Welt der BMad-Methode.

</v-clicks>

<!--
Teaser-Slide: Emotionaler Einstieg mit einer provokanten Statistik.
Pause nach jeder Aussage. Die letzte Zeile leise und mit Überzeugung sagen.

Quelle: Standish Group CHAOS Report.

BMad = Build More Architect Dreams — gleich mehr dazu.

🎨 Image prompt: A dramatic scene of a burning airplane in a night sky, symbolizing failed software projects. Dark, cinematic digital art with emergency lights and stormy atmosphere, similar to /bmad-project-failure-aircraft.png style but even more dramatic.
-->

---
layout: image-right
title: Agenda
background: /bmad-navigation-compass-ai.png
hideInToc: true
showCopyright: false
---

<h1 class="h-auto!"> Agenda </h1>

<div class="ml-16">

<Toc minDepth="1" maxDepth="1"/>

</div>

<!--
Überblick über den Talk. Kurz durch die Punkte gehen.
Wir starten mit dem Problem, dann BMad-Intro, dann die drei Kernthemen:
Anforderungspräzisierung, Context Engineering und TEA.
-->

---
src: /special-slides/bmad-anforderungen-tests/das-problem.md
---

---
src: /special-slides/bmad-anforderungen-tests/bmad-overview.md
---

---
src: /special-slides/bmad-anforderungen-tests/anforderungen-praezisieren.md
---

---
src: /special-slides/bmad-anforderungen-tests/context-engineering.md
---

---
src: /special-slides/bmad-anforderungen-tests/tea-testentwicklung.md
---

---
src: /special-slides/bmad-anforderungen-tests/zusammenfassung.md
---

---
layout: cover
coverImage: /bmad-questions-audience.png
title: Fragen?
hideInToc: true
isDark: true
---

<!-- issue in theme. See: https://github.com/xebia/presentation-templates/issues/12 -->
<h1 class="h-auto!">Fragen?</h1>

<!--
Q&A Session — ca. 10 Minuten.

Mögliche Fragen vorbereiten:
- "Funktioniert BMad mit GitHub Copilot?" → Ja, vollständig unterstützt
- "Was kostet BMad?" → 100% kostenlos, Open Source (MIT)
- "Ist BMad für Solo-Entwickler geeignet?" → Ja! Quick Flow ist der Einstieg
- "Wie lange dauert die Einarbeitung?" → TEA Lite in 30 Min, Full BMad in 1-2 Wochen mit Academy
- "Kann ich eigene Agenten bauen?" → Ja, mit BMad Builder

🎨 Image prompt: A speaker pointing toward the audience with glowing question marks floating around, inviting engagement. Warm, welcoming digital art similar to /bmad-questions-audience.png atmosphere.
-->

---
title: Feedback
layout: two-column
hideInToc: true
showCopyright: false
---

::left::

# 💬 **Feedback:**


<QRCode
  type="svg"
  data="https://forms.office.com/e/EhPvVpppjK"
 :dotsOptions="{ color: 'black', type: 'extra-rounded', roundSize: false}"
  :width="250"
  :height="250"
  image="logo.svg"
/>


<a :href="`https://forms.office.com/e/EhPvVpppjK`"
   :text="`Feedback zum Vortrag, ADC`"></a>


::right::

<br/>
<br/>
<img src="https://adc.ms/26/assets/img/ADC22-website.png" alt="ADC Logo" class="w-280px h-auto rounded-lg shadow-lg"/>

---
layout: image-right
background: /thank_you.jpeg
title: Danke
hideInToc: true
isDark: true
showCopyright: false
---


# 🙏 Danke!

<br/>

<QRCode class="ml-40px"
  type="svg"
  :data="`https://presentations.harrybin.de/${$slidev.configs.routeAlias}/`"
  :dotsOptions="{ color: 'white', type: 'extra-rounded', roundSize: false}"
  :width="250"
  :height="250"
  image="logo.svg"
/>

<br/>

<a :href="`https://presentations.harrybin.de/${$slidev.configs.routeAlias}/`"
   :text="`https://presentations.harrybin.de/${$slidev.configs.routeAlias}/`"></a>



---
level: 2
hideInToc: true
showCopyright: false
---

# Ressourcen & Links


| Ressource | Link |
|-----------|------|
| 🌐 BMad Dokumentation | [docs.bmad-method.org](https://docs.bmad-method.org) |
| 📦 NPM Package | [npmjs.com/package/bmad-method](https://www.npmjs.com/package/bmad-method) |
| 💻 GitHub Repository | [github.com/bmad-code-org/BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD) |
| 🧪 TEA Dokumentation | [bmad-code-org.github.io/bmad-method-test-architecture-enterprise](https://bmad-code-org.github.io/bmad-method-test-architecture-enterprise/) |
| 📝 Speaker Blog | [harrybin.de](https://harrybin.de) |

<!--
Alle Ressourcen für die Zuhörer zum Nachschlagen.
QR-Code auf den Slides verlinkt auf die Online-Version dieser Präsentation.
-->
