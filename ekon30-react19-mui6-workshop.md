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
description: "Vierstündiger Workshop für den Einstieg aus der Desktopentwicklung: moderne Browser-Apps mit TypeScript, React und Material UI verstehen und bauen."
publicDeckPath: ekon30-react19-mui6-workshop
###### slides start ######
layout: cover
coverImage: /msWebUiReact-cover.png
hideInToc: true
---

# Workshop: Moderne Web-Applikationen
## mit React und Material-UI in TypeScript

**Sessionvorschlag · EKON 30 · Düsseldorf, November 2026 · 4 Std. · Harald Binkle**

<!--
Wir bauen heute gemeinsam eine Browser-App und ordnen die Web-Technologien ein: von Node.js, TypeScript und React über Material UI und REST-Daten bis zu Debugging, Wartbarkeit und Performance. Beispiele knüpfen an bekannte Muster aus der Desktopentwicklung an.
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

# Von der Desktop-App zur Browser-App
## Vertraute Konzepte, neue Laufzeit und Architektur

<v-clicks>

- Browser-App und Website unterscheiden
- TypeScript, React und Material UI einordnen
- eine testbare und wartbare App aufbauen

</v-clicks>

<!--
Die Herausforderung ist nicht nur JSX: Wir betrachten Browser-Laufzeit, Bundling, Komponenten, Datenfluss und die Unterschiede zu Desktop-UI.
-->

---
title: Sessionprofil
layout: image-right
background: /msWebUiReact-decision-tree.jpg
hideInToc: true
---

# Für den Wechsel aus der Desktopentwicklung

<v-clicks>

- **Zielgruppe:** Entwickler:innen, besonders mit Desktop-UI-Erfahrung
- **Ergebnis:** strukturierte Browser-App mit typisierten Daten und Material UI
- **Stack:** TypeScript, React, Material UI, Node.js und Vite
- **Vorkenntnisse:** Programmierkenntnisse; HTML/CSS- oder React-Vorkenntnisse sind nicht nötig

</v-clicks>

<!--
Parallelen zu Desktopentwicklung erleichtern den Einstieg: UI-Komponenten, Properties, Events und State bleiben vertraut. Neu sind unter anderem Browser-Laufzeit, deklaratives Rendering und der Build-Prozess.
-->

---
title: Agenda
layout: image-right
background: /react-steps.png
hideInToc: true
---

# Vier Stunden · vom Werkzeug zur Web-App

| Zeit | Baustein |
|---|---|
| 00:00–00:20 | Web-App vs. Website, VS Code und Node.js |
| 00:20–00:55 | TypeScript: Types, Interfaces und Generics |
| 00:55–01:35 | Funktionales React: Komponenten, Props und Lifecycle |
| 01:35–01:45 | Pause |
| 01:45–02:25 | Material UI: Komponenten, Layout und Styling |
| 02:25–03:00 | Hooks, State und React Context |
| 03:00–03:10 | Pause |
| 03:10–03:40 | REST-Daten, Fetch API und optional AutoRest |
| 03:40–04:00 | Debugging, Performance, Tests und Ausblick |

<!--
Die Blöcke ergeben 240 Minuten inklusive Pausen. Vite ist der vorbereitete Bundler; webpack wird als Alternative eingeordnet. AutoRest, Tests mit Playwright und App-Konfiguration sind optionale Vertiefungen abhängig von Tempo und Vorkenntnissen. Das Starter-Repository wird vorab getestet.
-->

---
layout: chapter-dark
background: /msWebUiReact-crossroads.jpg
---

# 01 · Was steckt in einer Browser-App?

<!--
Webseite und Web-App unterscheiden sich in Interaktion, Zustand und Datenfluss. Die App läuft im Browser, wird aber typischerweise mit Node-basierten Werkzeugen entwickelt und gebündelt.
-->

---
title: Die Session-App
layout: image-right
background: /msWebUiReact-demo1.jpg
---

# Ein roter Faden für die Übungen

<v-clicks>

- kleine browserbasierte Fachanwendung
- Datenmodell und UI-Komponenten schrittweise ergänzen
- Inhalte aus einer REST-Schnittstelle laden
- Build, Debugging und Erweiterbarkeit nachvollziehen

</v-clicks>

<!--
Ein kleines Konferenz- oder Katalogbeispiel dient als durchgehende App. Vorhandenen Starter zeigen: lauffähig, mit wenigen Daten und ohne versteckte fertige Übungen.
-->

---
title: Node.js und der Frontend-Werkzeugkasten
layout: image-right
background: /msWebUiReact-tooling.jpg
---

# Entwickeln mit Node.js, bauen für den Browser

<v-clicks>

- Node.js führt Entwicklungs- und Build-Werkzeuge aus
- npm verwaltet Projektabhängigkeiten und Skripte
- Vite startet Dev-Server und bündelt die App
- Extensions ergänzen TypeScript, React und Browser-Debugging

</v-clicks>

<!--
Node.js ist hier zunächst die Werkzeug-Laufzeit, nicht automatisch der Server für die ausgelieferte Browser-App. Vite wird praktisch eingesetzt; webpack wird als verbreitete Alternative eingeordnet.
-->

---
title: Übung 1 · Projekt starten und Umgebung verstehen
layout: image-left
background: /msWebUiReact-tooling.jpg
---

# 20 Minuten · Vite und Debugging

<v-clicks>

- Starter installieren und Vite-Dev-Server starten
- Projektstruktur und npm-Skripte finden
- Browser-DevTools und VS-Code-Debugging öffnen
- **Ergebnis:** App lokal gestartet und Debugger einsatzbereit

</v-clicks>

<!--
Geführte Einrichtung: VS Code, Extensions, Node/npm-Skripte, Browser-Konsole und Breakpoints. Setup vorab vereinfachen, damit Teilnehmende nicht lange installieren müssen.
-->

---
title: TypeScript modelliert Datenverträge
layout: default
---

# TypeScript: JavaScript mit statischen Typen

```ts
interface Session {
  id: string
  title: string
  speaker: string
  track: string
}

type ApiResult<T> = {
  data: T
  receivedAt: Date
}
```

<v-click>

**Übung 2 · 35 Minuten:** `Session`-Interface, generischen API-Typ und typisierte Beispieldaten anlegen.

</v-click>

<!--
Anhand des Beispieltyps Types, Interfaces und Generics erklären. Desktop-Parallele: Verträge für Daten zwischen UI und Services werden explizit. Danach ein Objekt typisieren und einen absichtlich fehlerhaften Wert vom TypeScript-Compiler finden lassen.
-->

---
title: React entwickelt UI deklarativ
layout: image-right
background: /msWebUiReact-transfers.jpg
---

# Komponenten, Props und Rendering

<v-clicks>

- Komponenten beschreiben UI als Funktion ihrer Daten
- Props übertragen Daten und Callbacks
- Events lösen State-Änderungen aus
- React rendert die betroffenen Teile erneut

</v-clicks>

<!--
Desktop-Parallele: Komponenten und Ereignisse sind vertraut; anders ist, dass das UI deklarativ aus aktuellem State abgeleitet wird, statt imperative Controls direkt zu verändern.
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
title: Hooks statt Lifecycle-Methoden
layout: image-left
background: /msWebUiReact-state-management.jpg
---

# Lifecycle-Konzepte funktional abbilden

<v-clicks>

- `useState` für lokalen State
- `useEffect` für Synchronisation mit externen Systemen
- Props und State steuern erneutes Rendern
- Effects gezielt einsetzen, nicht als Ersatz für Datenfluss

</v-clicks>

<!--
Lifecycle Methods als historisches Klassenkomponenten-Modell erwähnen, aber den Workshop konsequent mit funktionalen Komponenten und Hooks gestalten. Mount/Update/Unmount nicht mechanisch auf mehrere Effects übertragen.
-->

---
title: Übung 3 · Komponente und Hook
layout: image-left
background: /msWebUiReact-demo1.jpg
---

# 20 Minuten · React-Grundlagen anwenden

<v-clicks>

- `SessionCard` aus typisierten Props erstellen
- lokale Auswahl mit `useState` abbilden
- State-Änderung und erneutes Rendering beobachten
- **Ergebnis:** interaktive Komponente ohne imperative DOM-Manipulation

</v-clicks>

<!--
Geführt: eine Komponente bauen, Event-Handler ergänzen und mit React DevTools/Browser-Tools untersuchen.
-->

---
layout: chapter-dark
background: /msWebUiReact-crossroads.jpg
---

# 02 · Material UI und State

<!--
Material UI bietet einen produktiven UI-Baukasten. Danach organisieren wir Komponenten-State und geteilte Daten mit Hooks und Context.
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
- CSS gezielt dort ergänzen, wo es wirklich nötig ist

</v-clicks>

<!--
Material UI bietet vorgefertigte Komponenten, Layout-Primitives und Theme-Optionen. Ziel ist eine brauchbare Oberfläche, ohne jedes Detail mit handgeschriebenem CSS zu lösen. Für dieses EKON-Angebot Material UI 6 verwenden.
-->

---
title: Material UI für Komponenten, Layout und Styling
layout: image-right
background: /msWebUiReact-summary.jpg
---

# Komponenten, Layout und Styling

<v-clicks>

- MUI-Komponenten für wiederkehrende UI-Muster
- Stack/Grid und responsive Breakpoints
- Theme für konsistente Farben und Typografie
- CSS-Fallstricke beim Wechsel vom Desktop ins Web

</v-clicks>

<!--
Desktop-Analogie: Component Library und Theme entsprechen einem UI-Baukasten mit zentralen Stilvorgaben. Unterschiede im CSS-Layoutmodell und responsiven Verhalten sichtbar machen.
-->

---
title: Übung 4 · Responsive MUI-Oberfläche
layout: image-left
background: /msWebUiReact-tooling.jpg
---

# 40 Minuten · konsistent statt CSS-intensiv

<v-clicks>

- App-Bar, Filterbereich und Ergebnisliste mit MUI bauen
- Theme und responsive Layout-Komponenten anwenden
- mobile und breite Ansicht vergleichen
- **Ergebnis:** nutzbare Oberfläche mit wenig eigenem CSS

</v-clicks>

<!--
Geführt: Komponenten zuerst, dann Layout und Breakpoints. CSS-Fallstricke zeigen, die beim Wechsel von Desktop-Layouts zu responsiven Browser-Layouts häufig auftreten.
-->

---
title: State teilen mit React Context
layout: image-right
background: /msWebUiReact-state-management.jpg
---

# Context für gemeinsam benötigte Daten

<v-clicks>

- lokaler State bleibt nah an der Komponente
- Context vermeidet unnötiges Weiterreichen durch viele Ebenen
- Hooks kapseln wiederverwendbares Verhalten
- State-Libraries erst bei konkretem Bedarf

</v-clicks>

<!--
Verweis auf das bestehende React-State-Management-Material im Repository. Context ist kein universeller Ersatz für Server-State- oder State-Management-Lösungen.
-->

---
title: Übung 5 · Hooks und Context
layout: image-left
background: /msWebUiReact-demo1.jpg
---

# 35 Minuten · Zustand sauber organisieren

<v-clicks>

- Such- und Trackfilter mit Hooks ergänzen
- gemeinsam benötigte Auswahl über Context teilen
- unnötige und doppelte State-Werte vermeiden
- **Ergebnis:** Filter und Merkliste mit klarer State-Verantwortung

</v-clicks>

<!--
Checkpoint: Teilnehmende erklären, welcher State lokal, abgeleitet oder gemeinsam genutzt wird. Bei Zeit einen Effect für eine externe Synchronisation demonstrieren.
-->

---
layout: chapter-dark
background: /msWebUiReact-mobile-push.jpg
---

# 03 · Daten, Debugging und Qualität

<!--
Mit Datenzugriff wird die Browser-App zu einer realistischen Client-Anwendung. Lade-, Erfolgs- und Fehlerzustände sind Bestandteil der UI.
-->

---
title: Daten abrufen mit Fetch
layout: image-right
background: /msWebUiReact-demo1.jpg
---

# REST-Daten in den Komponentenfluss holen

<v-clicks>

- Browser `fetch`-API für HTTP-Aufrufe
- JSON-Antworten in TypeScript-Typen überführen
- Laden, Fehler und leere Ergebnisse sichtbar machen
- HTTP-Fehler explizit behandeln

</v-clicks>

<!--
`fetch` weist bei HTTP 4xx/5xx nicht automatisch ein Promise zurück: Response.ok prüfen. TypeScript-Typen validieren Laufzeitdaten nicht von selbst; API-Antworten als externe Eingabe behandeln.
-->

---
title: Übung 6 · REST-Daten und UI-Zustände
layout: image-left
background: /msWebUiReact-mobile-push.jpg
---

# 30 Minuten · von HTTP zu gerenderten Daten

<v-clicks>

- Sessions über die Browser-Fetch-API laden
- Loading-, Fehler- und Erfolgszustand darstellen
- typisierte Daten an die Komponenten weiterreichen
- **Ergebnis:** App zeigt echte oder lokal simulierte REST-Daten

</v-clicks>

<!--
Geführt: vorbereiteten API-Endpunkt oder Mock verwenden, damit Netz-/CORS-Probleme nicht die Übung blockieren. Im Debugger Request, Status und Response prüfen.
-->

---
title: REST-Clients und AutoRest
layout: image-right
background: /msWebUiReact-tooling.jpg
---

# Von Hand geschrieben bis generiert

<v-clicks>

- `fetch` eignet sich für den Einstieg und kleine Clients
- AutoRest kann aus API-Beschreibungen Clients erzeugen
- generierter Code spart Routine, ersetzt aber kein API-Verständnis
- API-Vertrag, Fehlerfälle und Versionierung bleiben wichtig

</v-clicks>

<!--
AutoRest ist ein optionaler Überblick oder eine vorbereitete Demo: OpenAPI-Beschreibung zeigen und generierte Typen/Clientmethoden nachvollziehen. Nur vertiefen, wenn Zeit und Setup passen.
-->

---
title: Fallstricke und Performance
layout: image-left
background: /msWebUiReact-css-challenge.png
---

# Erst messen, dann optimieren

<v-clicks>

- unnötige Renders und zu große Komponenten erkennen
- `memo`/Memoization nicht reflexartig einsetzen
- Listen mit stabilen Keys rendern
- Netzwerk, Bundle-Größe und UI getrennt untersuchen

</v-clicks>

<!--
Do's and Don'ts mit React DevTools und Browser Performance Panel besprechen. Vor Optimierung einen konkreten Engpass reproduzieren und messen.
-->

---
title: Testbarkeit und App-Konfiguration
layout: default
---

# Wartbarkeit ist eine Architekturentscheidung

<v-clicks>

- Komponenten und Datenzugriff trennen
- API-Basis-URL konfigurierbar halten, keine Secrets ins Frontend
- Unit-/Component-Tests als nächste Ausbaustufe
- Playwright für browserbasierte Integrationstests optional vorstellen

</v-clicks>

<!--
Optionale Vertiefung: kleine Komponentenprüfung oder vorbereiteter Playwright-Test. Konfigurationswerte im gebündelten Frontend sind öffentlich, daher keine vertraulichen Schlüssel dort ablegen.
-->

---
title: Abschlussübung · prüfen und verbessern
layout: image-right
background: /msWebUiReact-strategic-answer.jpg
---

# 20 Minuten · eure Web-App auf dem Prüfstand

<v-clicks>

- App im Debugger untersuchen und einen Fehler beheben
- einen messbaren Performance- oder UX-Fallstrick finden
- optionale Testidee für eine Komponente formulieren
- **Ergebnis:** lauffähige App und konkrete nächste Verbesserung

</v-clicks>

<!--
Der Abschluss verbindet Browser- und React-Debugging mit Testbarkeit und Wartbarkeit. Bei schneller Gruppe Playwright-Test demonstrieren; sonst in die optionale Vertiefung verweisen.
-->

---
title: Takeaways
layout: statement
---

# Vertraute UI-Ideen. Neue Browser-Realität.

<v-clicks>

- TypeScript stärkt Datenverträge und Refactoring
- React modelliert UI funktional aus Props und State
- Hooks und Context strukturieren Verhalten und gemeinsamen State
- Material UI beschleunigt konsistente Oberflächen, ganz ohne CSS geht es nicht
- Debugging, Tests und Messungen sichern Wartbarkeit und Performance

</v-clicks>

<!--
Die zentrale Mitnahme: Web-Apps sind nicht einfach Desktop-UIs im Browser. Wer Laufzeit, Datenfluss und Werkzeugkette versteht, kann vorhandene Entwicklungserfahrung gezielt übertragen.
-->

---
title: Quellen
layout: default
hideInToc: true
---

# Quellen & Vorbereitung

<v-clicks>

- [EKON 30 · React und Material UI in TypeScript](https://entwickler-konferenz.de/frameworks-and-tools/workshop-moderne-web-applikationen-mit-react-19-und-material-ui-6-in-typescript)
- [React: Hooks](https://react.dev/reference/react) · [Context](https://react.dev/learn/passing-data-deeply-with-context)
- [Material UI: Upgrade auf v6](https://mui.com/material-ui/migration/upgrade-to-v6/)
- [Material UI: TypeScript](https://mui.com/material-ui/guides/typescript/)
- Vorab: Node.js/npm und Git; VS Code und Browser. AutoRest, Playwright-Tests und Konfigurationsvarianten sind optionale Vertiefungen.

</v-clicks>

<!--
Im Vorfeld aktuellen Browser, Node-Version, React/MUI-Kompatibilität und Starterprojekt gegen die verwendeten Paketversionen testen. Material UI 6 bleibt gemäß EKON-Ausschreibung im Workshop; der Fokus liegt auf grundlegenden UI-Mustern und nicht auf neueren React-19-spezifischen Formular-APIs.
-->

---
src: /special-slides/questions.md
---

---
src: /special-slides/thank-you.md
---
