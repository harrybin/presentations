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
author: "Harald Binkle & Thomas Tomow"
showCopyright: false
description: "Mit GitHub Copilot Instructions, Prompts, Skills, Tools und Custom Agents passend zur Aufgabe einsetzen."
publicDeckPath: ekon30-ai-context-setup
htmlAttrs:
  class: ekon30-deck
  lang: de
###### slides start ######
layout: cover
coverImage: bmad-context-satellite.png
isDark: true
hideInToc: true
---

# AI Context Setup

## Instructions, Prompts, Skills, Tools & Custom Agents

### Was ist wofür?

**EKON 30 · Düsseldorf, November 2026 · GitHub Copilot · Harald Binkle & Thomas Tomow**

<!--
Leitfrage: Wie geben wir einem Agenten genug Kontext für ein gutes Resultat, ohne bei jeder Aufgabe das ganze Projekt mitzuschicken?
-->

---
title: Speaker
layout: intro
src: /special-slides/ekon30-speakers.md

---

---
layout: cover
coverImage: bmad-ai-lightbulb.png
isDark: true
hideInToc: true
---

# Mehr Kontext ist nicht immer besser.

## Der richtige Kontext zur richtigen Aufgabe schon.

<v-clicks>

- zu wenig: Agent rät
- zu viel: Relevantes geht unter
- passend dosiert: bessere Ergebnisse, weniger Streuverlust

</v-clicks>

<!--
Die These ist nicht „Tokens um jeden Preis sparen“, sondern irrelevanten Kontext vermeiden. Qualität und Sicherheit zählen ebenso.
-->

---
title: Sessionprofil
layout: image-right
background: bmad-context-hierarchy.png
hideInToc: true
---

# Den passenden Context-Baustein auswählen

<v-clicks>

- **Zielgruppe:** Entwickler:innen und Teams mit GitHub Copilot
- **Vorkenntnisse:** erste Erfahrung mit Copilot Chat oder Agent Mode
- **Ergebnis:** ein Raster zur Wahl des passenden Context-Bausteins
- **Live-Faden:** Regel → wiederholbarer Auftrag → spezialisierte Rolle

</v-clicks>

<!--
Wir gehen nicht alle Dateien oder Features einer IDE durch. Fokus ist: welches Problem löst welches Artefakt?
-->

---
title: Agenda
layout: image-right
background: compass-right.png
hideInToc: true
---

# Fünf Bausteine, klare Entscheidung

<v-clicks>

- Kontext als knappes Budget
- Instructions, Prompts und Skills
- Tools/MCP, Agent Harness und Custom Agents
- Live-Faden mit Demo Time: Regel → Task → Spezialist
- Entscheidungsraster und Fragen

</v-clicks>

<!--
Die Demo-Stationen enthalten Prompt-Warten, Wechsel, Erläuterungen, Tests, Kontext-Trade-off und Fallback. Vorbereitung und Bedienung: demo-projects/ekon30-talk-demo/README.md; in VS Code die Erweiterung **Demo Time** öffnen und den Akt `EKON 30 · AI Context Setup` (`.run/baseline/.demo/context-setup-talk.json`) auswählen. Bei Zeitdruck Live-Pfad abkürzen und spätestens zum Stationsende weitergehen.
-->

---
layout: chapter
background: bmad-dev-ideas-to-tests.png
isDark: true
---

# 01 · Der Kontext-Engpass

<!--
Ein Agent arbeitet nicht mit unserem unausgesprochenen Wissen. Was nicht im Kontext steht oder erreichbar ist, bleibt Annahme.
-->

---
title: Context Engineering heißt Auswahl
layout: image-right
background: bmad-context-satellite.png
---

# Kontext steuert Qualität und Aufwand

<v-clicks>

- fachliche Absicht und Nutzer
- passende Projektdateien und Konventionen
- relevante Werkzeuge und Datenquellen
- nur so viel Kontext, wie die Aufgabe benötigt

</v-clicks>

<!--
Vorwissen aus dem vorhandenen BMad-Deck aufgreifen: progressiver Kontext und Projektwissen. Ein einzelner großer Prompt ersetzt keine gepflegte Kontextarchitektur.
-->

---
title: Die fünf Fragen vor der Konfiguration
layout: default
---

# Welches Problem soll der Baustein lösen?

<v-clicks>

- gilt die Regel **immer** oder nur für einzelne Pfade?
- ist es ein **wiederholbarer Auftrag** mit wechselnden Inputs?
- braucht es **Wissen/Abläufe**, die nur manchmal relevant sind?
- fehlt eine **externe Aktion oder Datenquelle**?
- braucht die Aufgabe eine **eigene Rolle oder Tool-Grenze**?

</v-clicks>

<!--
Das ist das Entscheidungsmodell für den Rest des Vortrags.
-->

---
title: Instructions · Regeln, die automatisch gelten
layout: image-left
background: settings-instruction-files-1.png
---

# Dauerhafte Erwartungen an die Arbeit

<v-clicks>

- Coding-Standards, Architektur- und Testregeln
- repo-weit oder gezielt für Dateipfade
- kurz, eindeutig und im Review überprüfbar
- keine task-spezifische Checkliste in jede Datei kopieren

</v-clicks>

<!--
Beispiele: `.github/copilot-instructions.md`, `.github/instructions/*.instructions.md` und unterstützte weitere Instruktionsdateien. Welche Formate greifen, hängt von Copilot-Produkt und IDE ab.
Quelle: https://docs.github.com/en/copilot/reference/customization-cheat-sheet
-->

---
title: Live-Demo · Eine Regel im Kontext
layout: image-right
background: settings-instruction-files-1.png
---

# Gleicher Auftrag — eine Regel mehr

<v-clicks>

- erst Fachkontext und Pascal-Datei bereitstellen
- denselben Auftrag mit expliziter Instruction wiederholen
- Antworten vergleichen, ohne Wirkung zu versprechen

</v-clicks>

<!--
Demo Time führt C1 an dieser Stelle des Vortrags aus. Die Vorlage wird explizit mitgegeben und nicht als automatisch geladene Instruction ausgegeben. Details und Fallback: demo-projects/ekon30-talk-demo/README.md.
-->

---
title: Kontext wirkt nur, wenn er verfügbar ist
layout: default
---

# Automatisch geladen oder bewusst beigefügt?

<div class="grid grid-cols-2 gap-10 mt-6">

<div>

## Projektregel

- unterstützte Datei und Pfad
- passender Ordner- oder Dateiscope
- Verhalten im verwendeten Client prüfen

</div>

<div>

## Expliziter Kontext

- Datei oder Snippet bewusst anfügen
- gleiche Inputs für einen fairen Vergleich
- keine versteckte Dauerregel behaupten

</div>

</div>

<!--
Die Vortragsdemo nutzt explizite Dateireferenzen, damit klar bleibt, was im Chat-Kontext war. Automatische Instruction-Auflösung ist produkt- und clientabhängig.
-->

---
title: Prompt Files · ein Auftrag auf Abruf
layout: image-right
background: settings-instruction-files-2.png
---

# Wiederholbarer Task, bewusst gestartet

<v-clicks>

- definierter Ablauf mit variablen Eingaben
- für einzelne Aufgaben oder bewusst wiederholte Workflows
- z. B. „Erzeuge Tests für diese Änderung“
- nicht für Regeln, die stets gelten sollen

</v-clicks>

<!--
Prompt Files unter `.github/prompts/*.prompt.md` sind eine manuell aufgerufene Vorlage. Beispiel aus der Repo-Praxis: strukturierte Prompts zur Erstellung einer Slidev-Präsentation.
-->

---
title: Skills · Wissen bei Bedarf laden
layout: image-left
background: bmad-context-hierarchy.png
---

# Ein gebündelter Workflow statt Dauer-Kontext

<v-clicks>

- Instruktionen, Ressourcen und ggf. Skripte gemeinsam bereitstellen
- Copilot kann passende Skills je nach Aufgabe heranziehen
- geeignet für spezialisierte, mehrstufige Abläufe
- gut beschreiben, wann der Skill passt — und wann nicht

</v-clicks>

<!--
Beispiel: Der Slidev-Skill im Repository enthält Konventionen, Referenzen und klare Grenzen. Er wird relevant, wenn Präsentationsarbeit ansteht — nicht bei jeder Codefrage.
-->

---
title: Live-Demo · Prompt oder Skill?
layout: image-left
background: bmad-context-hierarchy.png
---

# Ein Auftrag ist nicht dasselbe wie Ablaufwissen

<v-clicks>

- Prompt File: konkreter, bewusst gestarteter Review-Auftrag
- Skill: wiederverwendbare Schritte und nötige Referenzen
- beide Vorlagen auf denselben Katalog beziehen

</v-clicks>

<!--
Demo Time öffnet `test-review.prompt.md` und `catalog-review/SKILL.md` und vergleicht ihren Zweck. Die Dateien liegen außerhalb aktiver .github-Pfade; Funktion und automatische Erkennung hängen vom Copilot-Client ab.
-->

---
title: Der Auslöser bestimmt den Baustein
layout: default
---

# Dauerregel, Startsignal oder passender Skill

<div class="ekon30-flow ekon30-flow--four">
  <div v-click class="ekon30-flow__step">
    <strong>Immer beachten</strong>
    <p>Instruction im passenden Geltungsbereich</p>
  </div>
  <div v-click class="ekon30-flow__step">
    <strong>Jetzt ausführen</strong>
    <p>Manuell gestartetes Prompt File</p>
  </div>
  <div v-click class="ekon30-flow__step">
    <strong>Bei Bedarf laden</strong>
    <p>Skill mit passender Beschreibung</p>
  </div>
  <div v-click class="ekon30-flow__step">
    <strong>Grenze setzen</strong>
    <p>Agent-Rolle und Toolrechte prüfen</p>
  </div>
</div>

<!--
Das Raster beschreibt Zwecke, keine Garantie für identische Discovery in jeder IDE oder Copilot-Oberfläche. Vorführungen zeigen die tatsächlich unterstützte Erfahrung.
-->

---
layout: chapter
background: bmad-agents-specialized-experts.png
isDark: true
---

# 02 · Fähigkeiten und Rollen

<!--
Skills sagen, wie eine Aufgabe ausgeführt wird; Custom Agents definieren eine Rolle samt Regeln und möglichen Werkzeugen.
-->

---
title: Tools und MCP · handeln oder nachschlagen
layout: image-right
background: bmad-governance-control-center.png
---

# Ein Modell kann nicht alles aus eigener Antwort

<v-clicks>

- Tools führen definierte Aktionen aus
- MCP verbindet Agenten mit externen Systemen und Daten
- nur notwendige Tools und Rechte freigeben
- Herkunft, Eingaben und Nebenwirkungen vor Nutzung prüfen

</v-clicks>

<!--
MCP ist keine Qualitätsgarantie und keine allgemeine Berechtigung. Least privilege, Quellen- und Toolprüfung bleiben wichtig. Quelle: https://docs.github.com/en/copilot/reference/customization-cheat-sheet
-->

---
title: Agent Harness · Sitzung und Tool-Loop
layout: default
---

# Ein Agent ist mehr als ein Prompt

<div class="ekon30-flow ekon30-flow--four">
  <div v-click class="ekon30-flow__step">
    <strong>Prompt</strong>
    <p>Auftrag und relevanter Kontext</p>
  </div>
  <div v-click class="ekon30-flow__step">
    <strong>Modell</strong>
    <p>Antwortet oder fordert einen Tool-Aufruf an</p>
  </div>
  <div v-click class="ekon30-flow__step">
    <strong>Harness</strong>
    <p>Hält die Sitzung, prüft Freigaben und steuert den Aufruf</p>
  </div>
  <div v-click class="ekon30-flow__step">
    <strong>Umgebung</strong>
    <p>Führt das Tool aus; das Ergebnis geht zurück an den nächsten Modell-Schritt</p>
  </div>
</div>

<p class="text-lg mt-8"><strong>Abgrenzung:</strong> Ein Prompt beschreibt den Auftrag. Er startet für sich allein weder den Tool-Loop noch gewährt er Datei- oder Systemzugriff.</p>

<!--
OpenAI dokumentiert Harness und Umgebung als getrennte Teile: Der Harness betreibt Modell-/Tool-Loop und Sitzung; die Umgebung führt Befehle aus und hält Dateien. Das ist eine Architektur-Erklärung, keine Behauptung über GitHub Copilots interne Implementierung.
Quelle: https://developers.openai.com/api/docs/guides/agents-api/architecture
-->

---
title: Custom Agents · eigene Perspektive und Grenzen
layout: image-left
background: bmad-agents-specialized-experts.png
---

# Spezialist:in mit passendem Werkzeugkasten

<v-clicks>

- Rolle, Ziel und konkrete Arbeitsregeln
- eigener Kontext und ggf. erlaubte Tools
- geeignet für klar unterscheidbare Arbeitsphasen
- Agent ist keine Garantie für Parallelität oder Autonomie

</v-clicks>

<!--
Beispiel: Reviewer-Agent, der prüft und berichtet, aber keine Dateien ändert. Copilot-Funktionen unterscheiden sich nach IDE und Oberfläche. Verfügbarkeit vor dem Einsatz anhand der aktuellen Matrix prüfen.
-->

---
title: Live-Demo · Die Reviewer-Rolle im Ask-Modus
layout: image-right
background: bmad-governance-control-center.png
---

# Befund statt Änderung

<v-clicks>

- Rolle und Grenzen explizit zeigen
- denselben Katalog read-only untersuchen lassen
- Baseline-Test macht den Fehler konkret

</v-clicks>

<!--
Demo Time führt C3 an dieser Stelle des Vortrags aus. `pascal-reviewer.agent.md` ist eine Rollen-Vorlage, keine technisch garantierte Sperre. Nur Ask-Modus, keine Copilot-Dateiänderungen; bei Timeout vorbereiteten Befund und fehlgeschlagenen Test zeigen.
-->

---
title: Auswahlraster
layout: default
---

# Das passende Werkzeug nach Aufgabe wählen

<div class="ekon30-choice-map">
  <div class="ekon30-choice-map__root">Welche Unterstützung fehlt?</div>
  <div class="ekon30-choice-map__branches">
    <div v-click class="ekon30-choice-map__branch">
      <strong>Regeln festlegen</strong>
      <p><em>Instructions</em>Projektkonventionen</p>
    </div>
    <div v-click class="ekon30-choice-map__branch">
      <strong>Task starten</strong>
      <p><em>Prompt File</em>Testcheckliste</p>
    </div>
    <div v-click class="ekon30-choice-map__branch">
      <strong>Ablaufwissen laden</strong>
      <p><em>Skill</em>Release-Workflow</p>
    </div>
    <div v-click class="ekon30-choice-map__branch">
      <strong>Daten abrufen/ändern</strong>
      <p><em>Tool / MCP</em>Issue- oder API-Zugriff</p>
    </div>
    <div v-click class="ekon30-choice-map__branch">
      <strong>Rolle abgrenzen</strong>
      <p><em>Custom Agent</em>read-only Reviewer</p>
    </div>
  </div>
</div>

<!--
Die Kategorien schließen sich nicht aus. Kombinieren nur, wenn der konkrete Workflow es verlangt; sonst entsteht Konfigurationsballast.
-->

---
title: Tokens sparen — Qualität erhalten
layout: image-left
background: bmad-context-hierarchy.png
---

# Kontextbudget statt Kontextdiät

<v-clicks>

- irrelevante Dateien und doppelte Regeln weglassen
- Wissen bei Bedarf statt dauerhaft laden
- Aufgabe und Ergebnisformat schärfen
- Wirkung messen: Rückfragen, Korrekturschleifen, Review-Zeit

</v-clicks>

<!--
Keine erfundenen Prozentwerte versprechen. Tokenverbrauch ist nur ein Messwert; hilfreiche Qualität, Korrekturbedarf und Sicherheitsrisiko zählen ebenfalls.
-->

---
title: Takeaways
layout: statement
---

# Der beste Kontext ist auf die Aufgabe zugeschnitten.

<v-clicks>

- Regeln automatisch, Tasks auf Abruf
- Workflows als Skills, externe Fähigkeiten als Tools
- Rollen mit Custom Agents trennen
- klein anfangen, Wirkung beobachten, unnötige Komplexität entfernen

</v-clicks>

<!--
Abschlussfrage: Welches eine Artefakt in eurem Repository würde einem Agenten ab morgen am meisten helfen?
-->

---
title: Quellen
layout: default
hideInToc: true
---

# Quellen & Einordnung

<v-clicks>

- [EKON 30 · KI Praxis und Tools für Delphi](https://entwickler-konferenz.de/ki-praxis-und-tools-fuer-delphi/)
- [GitHub Copilot customization cheat sheet](https://docs.github.com/en/copilot/reference/customization-cheat-sheet)
- [Copilot: Skills](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills)
- [OpenAI Agents API: Architecture](https://developers.openai.com/api/docs/guides/agents-api/architecture)
- Demo & Ablauf: `demo-projects/ekon30-talk-demo/README.md`
- Beispiele: `.github/copilot-instructions.md`, `.github/prompts/` und `.github/skills/` in diesem Repository

</v-clicks>

<!--
GitHub aktualisiert Featurematrix und Unterstützung laufend. Vor einem Workshop oder einer produktiven Einführung Oberfläche, Lizenz und IDE-Version prüfen.
-->

---
src: /special-slides/questions.md
---

---
src: /special-slides/thank-you.md
---
