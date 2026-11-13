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
description: "60-Minuten-Vortrag mit GitHub Copilot: Instructions, Prompts, Skills, Tools und Custom Agents passend zur Aufgabe einsetzen."
publicDeckPath: ekon30-ai-context-setup
###### slides start ######
layout: cover-dark
coverImage: /bmad-context-satellite.png
hideInToc: true
---

# AI Context Setup
## Instructions, Prompts, Skills, Tools & Custom Agents
### Was ist wofür?

**Sessionvorschlag · EKON 30 · Düsseldorf, November 2026 · 60 Min. · GitHub Copilot · Harald Binkle & Thomas Tomow**

<!--
Leitfrage: Wie geben wir einem Agenten genug Kontext für ein gutes Resultat, ohne bei jeder Aufgabe das ganze Projekt mitzuschicken?
-->

---
title: Speaker
layout: intro
src: /special-slides/ekon30-speakers.md

---

---
layout: cover-dark
coverImage: /bmad-ai-lightbulb.png
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
background: /bmad-context-hierarchy.png
hideInToc: true
---

# In 60 Minuten zu einem Auswahlmodell

<v-clicks>

- **Zielgruppe:** Entwickler:innen und Teams mit GitHub Copilot
- **Vorkenntnisse:** erste Erfahrung mit Copilot Chat oder Agent Mode
- **Ergebnis:** ein Raster zur Wahl des passenden Context-Bausteins
- **Drei Demos:** Regeln, wiederholbarer Task, spezialisierter Agent

</v-clicks>

<!--
Wir gehen nicht alle Dateien oder Features einer IDE durch. Fokus ist: welches Problem löst welches Artefakt?
-->

---
title: Agenda
layout: image-right
background: /compass-right.png
hideInToc: true
---

# 60 Minuten · fünf Bausteine, klare Entscheidung

<v-clicks>

- 00–12′ Kontext als knappes Budget
- 12–30′ Instructions, Prompts und Skills
- 30–42′ Tools/MCP und Custom Agents
- 42–53′ Drei Demos plus Kontext-Trade-off
- 53–60′ Entscheidungsraster und Fragen

</v-clicks>

<!--
Zeiten inklusive Diskussion und Fragen. Bei Zeitdruck Demo 3 als vorbereiteten Diff zeigen.
-->

---
layout: chapter-dark
background: /bmad-dev-ideas-to-tests.png
---

# 01 · Der Kontext-Engpass

<!--
Ein Agent arbeitet nicht mit unserem unausgesprochenen Wissen. Was nicht im Kontext steht oder erreichbar ist, bleibt Annahme.
-->

---
title: Context Engineering heißt Auswahl
layout: image-right
background: /bmad-context-satellite.png
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
background: /settings-instruction-files-1.png
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
title: Prompt Files · ein Auftrag auf Abruf
layout: image-right
background: /settings-instruction-files-2.png
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
background: /bmad-context-hierarchy.png
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
layout: chapter-dark
background: /bmad-agents-specialized-experts.png
---

# 02 · Fähigkeiten und Rollen

<!--
Skills sagen, wie eine Aufgabe ausgeführt wird; Custom Agents definieren eine Rolle samt Regeln und möglichen Werkzeugen.
-->

---
title: Tools und MCP · handeln oder nachschlagen
layout: image-right
background: /bmad-governance-control-center.png
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
title: Custom Agents · eigene Perspektive und Grenzen
layout: image-left
background: /bmad-agents-specialized-experts.png
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
title: Auswahlraster
layout: default
---

# Das passende Werkzeug mit vier Verben wählen

| Wenn du … | Nimm … | Beispiel |
|---|---|---|
| Regeln **festlegen** willst | Instructions | Projektkonventionen |
| einen Task **starten** willst | Prompt File | Testcheckliste |
| Ablaufwissen **laden** willst | Skill | Release-Workflow |
| Daten **abrufen/ändern** willst | Tool / MCP | Issue- oder API-Zugriff |
| eine Rolle **abgrenzen** willst | Custom Agent | read-only Reviewer |

<!--
Die Kategorien schließen sich nicht aus. Kombinieren nur, wenn der konkrete Workflow es verlangt; sonst entsteht Konfigurationsballast.
-->

---
title: Demo 1 · eine Regel, ein Test
layout: image-right
background: /settings-instruction-files-1.png
---

# Demo 1 · Instructions verändern den Grundton

<v-clicks>

- dieselbe Aufgabe vor und nach einer Projektregel
- relevante Regel sichtbar machen
- Code- und Test-Diff vergleichen

</v-clicks>

<!--
Demo ca. 3 Minuten: eine vorhandene Konvention aus einem Beispielprojekt nutzen. Nicht „KI wird besser“ behaupten, sondern prüfen, ob der relevante Unterschied tatsächlich im Ergebnis und Review sichtbar ist.
-->

---
title: Demo 2 · Prompt oder Skill?
layout: image-left
background: /bmad-context-hierarchy.png
---

# Demo 2 · einmaliger Auftrag vs. Prozesswissen

<v-clicks>

- einmalige konkrete Checkliste: Prompt File
- wiederkehrender mehrstufiger Prozess: Skill
- unnötige Instruktionen aus dem globalen Kontext entfernen

</v-clicks>

<!--
Demo ca. 3 Minuten: einen vorhandenen Repo-Prompt mit dem Slidev-Skill vergleichen. Beide sind aus realer Repo-Arbeit abgeleitet.
-->

---
title: Demo 3 · Agent und Tool-Grenze
layout: image-right
background: /bmad-governance-control-center.png
---

# Demo 3 · Spezialist statt Alleskönner

<v-clicks>

- Aufgabe an einen read-only Reviewer geben
- sichtbare Inputs und erlaubte Fähigkeiten benennen
- Ergebnis gegen dieselbe Checkliste prüfen

</v-clicks>

<!--
Demo ca. 3 Minuten: Agent-Konfiguration oder vorbereitetes Beispiel zeigen. Keine externe Schreibaktion ausführen. Unterschied zwischen Agent-Rolle und MCP-Tool explizit machen.
-->

---
title: Tokens sparen — Qualität erhalten
layout: image-left
background: /bmad-context-hierarchy.png
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
