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
###### slides start ######
layout: cover
background: /aiops-cover-bg.png
description: "AIOps: Wie KI die Maintenance von Softwaresystemen revolutioniert — Root Cause Analysis, Technical Debt, Legacy-Modernisierung und Auto-Dokumentation"
hideInToc: true
routeAlias: aiops-Mainteance-mit-KI
---

# AIOps: Maintenance von Softwaresystemen durch KI

<!--
Willkommen zum Talk "AIOps: Maintenance von Softwaresystemen durch KI" auf der INFINITE AI CONFERENCE 2026.
Dauer: 60 Minuten inkl. Demos und Q&A.

🎨 Image prompt: A futuristic control room with holographic displays showing code metrics, server health dashboards, and AI neural network visualizations. Style: digital art, warm lighting with blue and purple accents, similar to /devcontainer.jpeg style.
-->

---
title: Speaker
layout: intro
src: special-slides/speaker.md
---

---
layout: cover
background: /server-outage-large.png
hideInToc: true
---

# Es ist 3 Uhr nachts. Ihre Checkout-API ist down.

<v-clicks>

## 47.000 Kunden warten.

## Ihr Team sucht seit 2 Stunden die Ursache.

## Was wäre, wenn eine KI das in 30 Sekunden löst?

</v-clicks>

<!--
Teaser-Slide: Emotionaler Einstieg. Pause nach jedem Punkt.
Das ist kein Sci-Fi — das ist der Alltag von AIOps. In den nächsten 60 Minuten zeigen wir euch, wie KI nicht nur Code schreibt, sondern Systeme diagnostiziert, Technical Debt bekämpft und Legacy-Systeme modernisiert.

🎨 Image prompt: A dramatic scene of a burning airplane (metaphor for system failure) at night with emergency lights, digital art style similar to /plane-burning-left.jpg.
-->

---
layout: toc
hideInToc: true
---

# Agenda

<!--
Überblick über die Themen. Wir starten mit einer Einführung in AIOps, gehen dann tief in Root Cause Analysis, Technical Debt, Legacy-Modernisierung, Auto-Dokumentation und Governance.
-->

---
src: /special-slides/aiops-Mainteance-mit-KI/what-is-aiops.md
---

---
src: /special-slides/aiops-Mainteance-mit-KI/rca-deep-dive.md
---

---
src: /special-slides/aiops-Mainteance-mit-KI/technical-debt.md
---

---
src: /special-slides/aiops-Mainteance-mit-KI/legacy-modernization.md
---

---
src: /special-slides/aiops-Mainteance-mit-KI/auto-documentation.md
---

---
src: /special-slides/aiops-Mainteance-mit-KI/governance.md
---

---
src: /special-slides/aiops-Mainteance-mit-KI/summary.md
---

---
layout: cover
background: /finger-large.jpg
title: Questions?
hideInToc: true
---

<h1 class="h-auto!">Questions?</h1>

<!--
Q&A Session — ca. 10 Minuten.
Bereite Backup-Antworten vor zu:
- "Ersetzt KI den Ops-Engineer?" → Nein, sie macht ihn schneller und präziser.
- "Was kostet AIOps?" → GitHub Copilot Business ab $19/user/month, Azure Monitor nach Verbrauch.
- "Funktioniert das auch mit On-Prem?" → Eingeschränkt, Cloud-native ist der Sweet Spot.
-->

---
layout: thank-you
hideInToc: true
---

# Danke!

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

<!--
Danke für eure Aufmerksamkeit! QR-Code führt zur Online-Version der Slides.
-->

---
layout: image-right
background: /aiops-cover.svg
level: 2
hideInToc: true
---

# Konferenz-Referenzen

<br/>

## INFINITE AI CONFERENCE 2026

- 📅 1. Juli 2026, 16:30–18:00
- 📍 Mannheim
- 🔗 [developer-world.de](https://developer-world.de)

<br/>

**Speakers:**

- Harald Binkle — Xebia, Microsoft MVP
- Jonathan David — Xebia

<!--
Konferenz-Referenzfolie mit Links und Kontakt-Infos.
-->

---
level: 2
hideInToc: true
---

# End of presentation
