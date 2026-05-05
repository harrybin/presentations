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
- Einstieg: BMad als Weg von Idee zu validierter Testsuite
- Dauer: 60 Minuten, 3 Live-Demos, Q&A
- Audience Hook: Wer kennt Projekt-Schieflage durch unklare Anforderungen?
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
- Teaser: provokante Statistik, emotionaler Einstieg
- Sprechtempo: Pausen nach jeder Aussage
- Letzte Zeile: leise, überzeugt
- Quelle: Standish Group CHAOS Report
- BMad-Name auflösen: Build More Architect Dreams
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
- Agenda-Überblick, kurz und klar
- Reihenfolge: Problem -> BMad-Intro -> Kernthemen
- Kernthemen: Anforderungspräzisierung, Context Engineering, TEA
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
- Q&A-Block: ca. 10 Minuten
- Vorbereitung: typische Publikumsfragen
- Copilot-Support: vollständig
- Kosten: kostenlos, Open Source (MIT)
- Solo-Use-Case: geeignet, Einstieg via Quick Flow
- Lernkurve: TEA Lite 30 Min, Full BMad 1-2 Wochen
- Eigene Agenten: möglich via BMad Builder
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
- Ressourcen zum Nachschlagen
- QR-Code: direkte Online-Version der Präsentation
-->
