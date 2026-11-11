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
author: "Harald Binkle"
showCopyright: false
description: "Vierstündiger Workshop: Eine moderne, responsive Web-App mit React 19, TypeScript und Material UI 6 schrittweise bauen."
publicDeckPath: ekon30-react19-mui6-workshop
###### slides start ######
layout: cover
coverImage: /msWebUiReact-cover.png
hideInToc: true
---

# Workshop: Moderne Web-Applikationen
## mit React 19 und Material UI 6 in TypeScript

**Sessionvorschlag · EKON 30 · Düsseldorf, November 2026 · 4 Std. · Harald Binkle**

<!--
Wir bauen heute gemeinsam einen kleinen EKON-Sessionplaner: von typisierten Daten und wiederverwendbaren Komponenten bis zu Formularen, responsivem Layout und optimistischem UI-Feedback.
-->

---
title: Speaker
layout: intro
src: /special-slides/speaker.md

---

---
layout: cover
coverImage: /msWebUiReact-strategic-answer.jpg
hideInToc: true
---

# Vom UI-Baukasten zur Web-App
## Schritt für Schritt, mit nachvollziehbarem State

<v-clicks>

- Inhalte strukturieren
- Interaktionen bauen
- Feedback und Fehlerzustände gestalten

</v-clicks>

<!--
Die Herausforderung ist nicht JSX auswendig zu lernen. Es geht darum, Datenfluss, Komponenten und Browserverhalten zusammenzubringen.
-->

---
title: Sessionprofil
layout: image-right
background: /msWebUiReact-decision-tree.jpg
hideInToc: true
---

# Ein Workshop mit sichtbarem Ergebnis

<v-clicks>

- **Zielgruppe:** Entwickler:innen mit JavaScript- oder TypeScript-Grundlagen
- **Ergebnis:** responsive Sessionplaner mit Filter, Formular und Pending-State
- **Stack:** React 19, TypeScript, Material UI 6
- **Vorkenntnisse:** HTML/CSS hilfreich; React-Vorerfahrung nicht erforderlich

</v-clicks>

<!--
Der Praxisfokus folgt dem vorhandenen React-Deck im Repository, geht aber von der Architekturübersicht in ein echtes gemeinsames Build-Erlebnis.
-->

---
title: Agenda
layout: image-right
background: /react-steps.png
hideInToc: true
---

# Vier Stunden · vom Modell zum Erlebnis

| Zeit | Baustein |
|---|---|
| 00:00–00:15 | Einstieg, Setup, Ziel-App |
| 00:15–01:05 | React-Modell und TypeScript-Daten |
| 01:05–01:15 | Pause |
| 01:15–02:25 | Material UI, Layout, State und Listen |
| 02:25–02:35 | Pause |
| 02:35–03:15 | React 19 Actions und optimistisches Feedback |
| 03:15–04:00 | Qualität, Capstone und Review |

<!--
Die Blöcke ergeben 240 Minuten inklusive Pausen. Für den Workshop wird ein Starter-Repository vorbereitet und vorab getestet, damit Setup-Probleme die geführten Übungen nicht verdrängen.
-->

---
layout: chapter-dark
background: /msWebUiReact-crossroads.jpg
---

# 01 · React in einem Satz

<!--
React rendert UI aus Daten und Zustand. Ereignisse führen zu neuen Daten; React berechnet das UI neu.
-->

---
title: Die Session-App
layout: image-right
background: /msWebUiReact-demo1.jpg
---

# Ein Ziel für alle Übungen

<v-clicks>

- Session-Liste mit Track und Zeit
- Filter nach Track und Suchbegriff
- Session zur Merkliste hinzufügen
- Formular mit Pending-, Erfolgs- und Fehlerfeedback

</v-clicks>

<!--
Vorhandenen Starter zeigen: lauffähige App, ein paar Beispieldaten, keine versteckten fertigen Übungen.
-->

---
title: Komponenten bilden die UI
layout: image-left
background: /msWebUiReact-transfers.jpg
---

# Zerlegen nach Verantwortung

<v-clicks>

- `AppShell`: Navigation und Seitenrahmen
- `SessionList`: Daten anzeigen
- `SessionCard`: eine Session darstellen
- `SessionForm`: Eingaben und Aktion

</v-clicks>

<!--
Analogie zu vertrauten UI-Frameworks: Komponenten kapseln Darstellung und Verhalten, aber nicht jede Komponente braucht eigenen State.
-->

---
title: TypeScript modelliert Produktdaten
layout: default
---

# Erst Datenform, dann Oberfläche

```ts
type Session = {
  id: string
  title: string
  speaker: string
  track: string
  startsAt: string
}
```

<v-click>

**Übung 1 · 30 Minuten:** Typ ergänzen, Beispieldaten erfassen, `SessionCard` bauen.

</v-click>

<!--
Checkpoint: `SessionCard` erhält ein Session-Objekt per Props und rendert es ohne any. Bei Bedarf startsAt als ISO-String belassen; Datumsformatierung später ergänzen.
-->

---
title: Material UI als konsistenter Baukasten
layout: image-right
background: /msWebUiReact-fluent-ui.jpg
---

# Design-Tokens statt CSS-Wildwuchs

<v-clicks>

- Theme für Farbe, Typografie und Abstände
- Layout mit Grid/Stack und responsiven Breakpoints
- Komponenten passend zur Aufgabe wählen
- Accessibility-Verhalten der Komponenten bewusst erhalten

</v-clicks>

<!--
Material UI 6 unterstützt React 19; beim Setup Paketversionen und Peer Dependencies bewusst festlegen. Bestehendes React-Deck im Repository zeigt UI-Framework-Auswahl und State-Management-Kontext.
Quelle: https://mui.com/material-ui/migration/upgrade-to-v6/
-->

---
title: Übung 2 · App-Shell und responsives Layout
layout: image-left
background: /msWebUiReact-tooling.jpg
---

# 35 Minuten · aus Bausteinen wird eine App

<v-clicks>

- App-Bar, Hauptbereich und Session-Liste aufbauen
- Theme und zwei Breakpoints anwenden
- mobile Darstellung im Browser prüfen
- **Ergebnis:** lesbare App-Shell auf schmalem und breitem Viewport

</v-clicks>

<!--
Geführt: erst Layoutstruktur, dann Theme. Nicht in CSS-Feinheiten verlieren. Checkpoint am Ende: Überschrift, Filterbereich und Liste bleiben auf Mobile gut bedienbar.
-->

---
title: State gehört zur Interaktion
layout: image-right
background: /msWebUiReact-state-management.jpg
---

# State dort halten, wo er gebraucht wird

<v-clicks>

- lokale Eingabe: Suchfeld
- abgeleiteter State: gefilterte Sessions
- gemeinsamer State: Merkliste
- State-Library erst bei echtem Bedarf

</v-clicks>

<!--
Verweis auf das vorhandene React-State-Management-Material: mit lokalem State starten und gemeinsame Datenflüsse erst dann abstrahieren, wenn die App es verlangt.
-->

---
title: Übung 3 · Filter und Merkliste
layout: image-left
background: /msWebUiReact-demo1.jpg
---

# 35 Minuten · Ereignisse sichtbar machen

<v-clicks>

- Such- und Trackfilter kombinieren
- abgeleitete Liste aus Props und State berechnen
- Session merken/entfernen und UI aktualisieren
- **Ergebnis:** interaktive Liste ohne doppelte Datenhaltung

</v-clicks>

<!--
Checkpoint: Filter können nacheinander geändert werden; die Quelle der Sessiondaten bleibt eindeutig. Bei Zeit: leeren Zustand gestalten.
-->

---
layout: chapter-dark
background: /msWebUiReact-css-challenge.png
---

# 02 · Formulare und React 19

<!--
Jetzt wird die UI asynchron: Nutzereingaben müssen Validierung, Pending- und Fehlerzustände zeigen.
-->

---
title: Formulare sind Zustandsmaschinen
layout: image-right
background: /msWebUiReact-summary.jpg
---

# Was Nutzer:innen während einer Aktion sehen

<v-clicks>

- Eingabe und Validierung
- Absenden und Pending-Zustand
- Erfolg oder konkreter Fehler
- bei Optimismus: Rücknahme bei Fehlschlag

</v-clicks>

<!--
Nicht nur den Happy Path zeigen. UI-Feedback ist Teil des fachlichen Verhaltens.
-->

---
title: Übung 4 · Action mit Feedback
layout: default
---

# 40 Minuten · Session vorschlagen

<v-clicks>

- Formular mit typisierten Eingaben erstellen
- `useActionState` für Ergebnis und Pending-Zustand einsetzen
- Fehler verständlich anzeigen und Erfolg rückmelden
- **Ergebnis:** Formular, das auch während der Aktion Orientierung gibt

</v-clicks>

<!--
useActionState ist ein React-Hook für Action-Ergebnisse und Pending-State. Kleine Demo, danach geführt implementieren. API-Details mit der aktuellen React-Dokumentation abgleichen.
Quelle: https://react.dev/reference/react/useActionState
-->

---
title: Übung 5 · Optimistisches UI
layout: image-left
background: /msWebUiReact-mobile-push.jpg
---

# 30 Minuten · sofort reagieren, ehrlich bleiben

<v-clicks>

- gemerkte Session sofort im UI markieren
- `useOptimistic` für vorläufige UI-Aktualisierung nutzen
- Fehler simulieren und Rollback-Verhalten beobachten
- **Ergebnis:** responsives Feedback ohne Erfolg vorzutäuschen

</v-clicks>

<!--
useOptimistic ist für temporäre optimistische UI während einer Action gedacht. Deutlich machen, dass das Backend-Ergebnis weiterhin maßgeblich ist.
Quelle: https://react.dev/reference/react/useOptimistic
-->

---
title: Qualität ist Teil der Oberfläche
layout: image-right
background: /msWebUiReact-css-challenge.png
---

# Prüfen, was Menschen erleben

<v-clicks>

- Tastaturbedienung und sichtbarer Fokus
- verständliche Labels und Fehlermeldungen
- leere, ladende und fehlerhafte Zustände
- schmale Viewports und Vergrößerung

</v-clicks>

<!--
Im Capstone nicht nur den Code zeigen lassen. Eine Person testet die App ausschließlich mit Tastatur oder Mobile-Viewport.
-->

---
title: Capstone · euer Sessionplaner
layout: image-right
background: /msWebUiReact-strategic-answer.jpg
---

# 15 Minuten · zeigen, prüfen, weiterdenken

<v-clicks>

- eine eigene Session hinzufügen
- Filter, Liste und Merkliste demonstrieren
- Pending-/Fehlerzustand zeigen
- nächste Verbesserung priorisieren

</v-clicks>

<!--
Abschlussrunde in Dreiergruppen. Ziel ist eine funktionierende Basis, keine vollständige Produktionsarchitektur.
-->

---
title: Takeaways
layout: statement
---

# Datenfluss zuerst. UI in kleinen Schritten.

<v-clicks>

- Typen machen Annahmen sichtbar
- Komponenten halten Verantwortungen überschaubar
- MUI beschleunigt konsistente UI, ersetzt aber kein UX-Urteil
- React 19 Actions helfen beim Umgang mit asynchronem Feedback

</v-clicks>

<!--
Überleitung zum bestehenden Microsoft-UI-Deck: Die Technologien lassen sich in Modernisierungsentscheidungen einordnen, nicht nur in einer Demo-App.
-->

---
title: Quellen
layout: default
hideInToc: true
---

# Quellen & Vorbereitung

<v-clicks>

- [EKON 30 · React 19 und Material UI 6](https://entwickler-konferenz.de/frameworks-and-tools/workshop-moderne-web-applikationen-mit-react-19-und-material-ui-6-in-typescript)
- [React: useActionState](https://react.dev/reference/react/useActionState) · [useOptimistic](https://react.dev/reference/react/useOptimistic)
- [Material UI: Upgrade auf v6](https://mui.com/material-ui/migration/upgrade-to-v6/)
- [Material UI: TypeScript](https://mui.com/material-ui/guides/typescript/)
- Vorab: Node.js/npm und Git; Starterprojekt wird bereitgestellt

</v-clicks>

<!--
Im Vorfeld aktuellen Browser, Node-Version, React/MUI-Kompatibilität und Starterprojekt gegen die vorhandenen Paketversionen testen.
-->

---
src: /special-slides/questions.md
---

---
src: /special-slides/thank-you.md
---
