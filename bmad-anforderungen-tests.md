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
layout: two-column
title: Danke&Feedback
hideInToc: true
isDark: true
showCopyright: false
---

::left::

🙏 Danke!

<QRCode class="ml-40px"
  type="svg"
  :data="`https://presentations.harrybin.de/${$slidev.configs.routeAlias}/`"
  :dotsOptions="{ color: 'white', type: 'extra-rounded', roundSize: false}"
  :width="250"
  :height="250"
  image="logo.svg"
/>

<a :href="`https://presentations.harrybin.de/${$slidev.configs.routeAlias}/`"
   :text="`https://presentations.harrybin.de/${$slidev.configs.routeAlias}/`"></a>

::right::

💬 **Feedback:**

<QRCode
  type="svg"
  data="https://forms.office.com/e/EhPvVpppjK"
 :dotsOptions="{ color: 'white', type: 'extra-rounded', roundSize: false}"
  :width="250"
  :height="250"
  image="logo.svg"
/>

<a :href="`https://forms.office.com/e/EhPvVpppjK`"
   :text="`Feedback zum Vortrag, ADC`"></a>


<!--
Danke für eure Aufmerksamkeit!
QR-Code führt zur Online-Version der Slides.

Weitere Ressourcen:
- docs.bmad-method.org
- github.com/bmad-code-org/BMAD-METHOD
- discord.gg/gk8jAdXWmj
-->

---
layout: image-right
background: /bmad-dev-ideas-to-tests.png
level: 2
hideInToc: true
---

# Konferenz-Referenzen

<br/>

## ADC 2026 — Age of AI-tron

- 📅 5. Mai 2026, 17:30–18:30 Uhr
- 📍 Jahnstadion Regensburg · Raum 1 (AI & ML)
- 🔗 [adc.ms/26](https://adc.ms/26)

<br/>

**Speaker:** Harald Binkle — Xebia, Microsoft MVP

<br/>

💬 **Feedback:**

<QRCode
  type="svg"
  data="https://forms.office.com/e/EhPvVpppjK"
  :dotsOptions="{ type: 'extra-rounded', roundSize: false }"
  :width="160"
  :height="160"
  image="logo.svg"
/>

<a href="https://forms.office.com/e/EhPvVpppjK">forms.office.com/e/EhPvVpppjK</a>

<!--
ADC 2026 — Advanced Developer Conference, Regensburg.
Motto: "Developers - Age of AI-tron"
4.–6. Mai 2026, Jahnstadion Regensburg.
Unser Talk: 5. Mai, 17:30–18:30, Raum 1 / Businessclub I Süd (AI & ML).
Feedback-Link: https://forms.office.com/e/EhPvVpppjK
-->

---
level: 2
hideInToc: true
---

# Ressourcen & Links

<br/>

| Ressource | Link |
|-----------|------|
| 🌐 BMad Dokumentation | [docs.bmad-method.org](https://docs.bmad-method.org) |
| 📦 NPM Package | [npmjs.com/package/bmad-method](https://www.npmjs.com/package/bmad-method) |
| 💻 GitHub Repository | [github.com/bmad-code-org/BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD) |
| 🧪 TEA Dokumentation | [bmad-code-org.github.io/bmad-method-test-architecture-enterprise](https://bmad-code-org.github.io/bmad-method-test-architecture-enterprise/) |
| 💬 Discord Community | [discord.gg/gk8jAdXWmj](https://discord.gg/gk8jAdXWmj) |
| 🎥 YouTube Tutorials | [youtube.com/@BMadCode](https://youtube.com/@BMadCode) |
| 📝 Speaker Blog | [harrybin.de](https://harrybin.de) |

<!--
Alle Ressourcen für die Zuhörer zum Nachschlagen.
QR-Code auf den Slides verlinkt auf die Online-Version dieser Präsentation.
-->
