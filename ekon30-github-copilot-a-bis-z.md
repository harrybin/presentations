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
description: "Vierstündiger Hands-on-Workshop mit GitHub Copilot: von Code Completion und Chat bis zu Agenten, Skills und Tools."
publicDeckPath: ekon30-github-copilot-a-bis-z
###### slides start ######
layout: cover
coverImage: /gh-copilot-logo.png
hideInToc: true
---

# Workshop: GitHub Copilot von A bis Z
## Vom ersten Vorschlag zum eigenen Agent-Workflow

**Sessionvorschlag · EKON 30 · Düsseldorf, November 2026 · 4 Std. · Harald Binkle & Thomas Tomow**

<!--
Start: heute baut jede Person ein kleines Feature und passt Copilot an ein konkretes Projekt an. Wir wechseln regelmäßig zwischen kurzer Erklärung, geführter Übung und gemeinsamem Checkpoint.
-->

---
title: Speaker
layout: intro
src: /special-slides/ekon30-speakers.md

---

---
layout: cover
coverImage: /pilot-large.jpg
hideInToc: true
---

# Copilot schreibt schneller.
## Ihr entscheidet, was richtig ist.

<v-clicks>

- Vorschläge sind Hypothesen, keine Belege.
- Kontext macht den Unterschied.
- Tests und Review bleiben Teil der Arbeit.

</v-clicks>

<!--
Teaser: Wir versprechen nicht „Code per Knopfdruck“, sondern üben einen sicheren, wiederholbaren Entwicklungsfluss.
-->

---
title: Sessionprofil
layout: image-right
background: /copilot-chat-1.png
hideInToc: true
---

# Am Ende habt ihr ein gebautes Feature

<v-clicks>

- **Zielgruppe:** Einsteiger:innen bis Fortgeschrittene, Delphi optional
- **Voraussetzung:** VS Code, Git, GitHub-Konto und Copilot-Zugang
- **Ergebnis:** Feature mit Tests plus projektspezifische Copilot-Anpassung
- **Arbeitsmodus:** kurze Inputs, angeleitete Übungen, gemeinsamer Capstone

</v-clicks>

<!--
Vorabhinweis: VS Code und Copilot-Extensions, GitHub-Anmeldung und ein Beispielprojekt installieren. Free-Zugang kann je nach aktuellen Limits für Übungen reichen. Für Delphi-Übungen zusätzlich RAD Studio oder Lazarus und die DelphiLSP-Erweiterung.
-->

---
title: Agenda
layout: image-right
background: /compass-right.png
hideInToc: true
---

# Vier Stunden · gemeinsam bauen

| Zeit | Baustein |
|---|---|
| 00:00–00:15 | Setup, Ziele, sicherer Arbeitsmodus |
| 00:15–01:20 | Completions und Chat · Übungen 1–2 |
| 01:20–01:30 | Pause |
| 01:30–02:10 | Agent Mode · Übung 3 |
| 02:10–02:45 | Instructions & Prompt Files · Übung 4 |
| 02:45–02:55 | Pause |
| 02:55–03:40 | Skills, Custom Agents, Tools/MCP |
| 03:40–04:00 | Capstone, Review und Transfer |

<!--
240 Minuten inklusive zwei 10-Minuten-Pausen. Bei verzögertem Setup optionale Delphi-Demo in die Nachbereitung verschieben, nicht die Übungen kürzen.
-->

---
layout: chapter-dark
background: /copilot-change-completions-model-1.png
---

# 01 · Ein guter Startpunkt

<!--
Wir beginnen mit der kleinsten Delegation: Copilot schlägt vor, der Mensch entscheidet.
-->

---
title: Arbeitsmodell: Vorschlag, Prüfung, Entscheidung
layout: image-right
background: /gh-copilot-logo.png
---

# Copilot ergänzt — nicht eure Verantwortung

<v-clicks>

- kleinen, klaren Kontext bereitstellen
- Vorschläge lesen und fachlich prüfen
- Änderungen testen und als Diff reviewen
- sensible Daten und untrusted code nicht unbesehen teilen/ausführen

</v-clicks>

<!--
Leitplanke für den Tag: keine Secrets in Prompts, keine unbekannten Skripte blind ausführen, keine Änderungen ohne Review mergen.
-->

---
title: Übung 1 · Completion im eigenen Rhythmus
layout: image-left
background: /copilot-change-completions-model-2.png
---

# 30 Minuten · kleine Funktion, echter Test

<v-clicks>

- vorhandene Funktion im Beispielprojekt ergänzen
- Copilot-Vorschlag annehmen, verändern oder verwerfen
- Grenzfall selbst ergänzen und mit Test absichern
- **Ergebnis:** Funktion + Test + kurzer Review-Kommentar

</v-clicks>

<!--
Geführte Übung: 5 Min Demo, 15 Min eigenes Arbeiten, 10 Min Checkpoint. Sprache frei wählbar. Bei Delphi bestehende Unit und Tests nehmen; sonst TS-Beispiel verwenden. Frage: Welche Annahme hat Copilot nicht erkennen können?
-->

---
title: Übung 2 · Chat mit Arbeitskontext
layout: image-right
background: /copilot-chat-2.png
---

# 35 Minuten · erst verstehen, dann ändern

<v-clicks>

- ein Modul erklären lassen — mit konkreten Dateireferenzen
- Refactoring oder Tests als separaten Auftrag formulieren
- Scope, Nicht-Ziele und erwarteten Output nennen
- **Ergebnis:** nachvollziehbarer Plan und eine geprüfte Verbesserung

</v-clicks>

<!--
Geführt: erst Ask/Explain ohne Edit, dann den kleinsten sinnvollen Änderungsauftrag. Teilnehmende vergleichen Antwort und tatsächlichen Code. Slash-Commands und Chat-Kontext variieren je nach Copilot-Oberfläche.
-->

---
layout: chapter-dark
background: /secret-agent-large.png
---

# 02 · Vom Chat zur agentischen Aufgabe

<!--
Übergang: Agent Mode darf mehr tun. Darum muss der Auftrag enger und die Verifikation stärker sein.
-->

---
title: Agent-Auftrag in fünf Teilen
layout: default
---

# Gute Delegation ist konkret

<v-clicks>

- **Ziel:** welches Verhalten soll entstehen?
- **Kontext:** welche Dateien und Regeln zählen?
- **Grenzen:** was soll ausdrücklich nicht geändert werden?
- **Nachweis:** welche Tests oder Checks müssen laufen?
- **Rückmeldung:** Änderungen, Annahmen und offene Fragen nennen

</v-clicks>

<!--
Ein gutes Prompt-Beispiel live formulieren. Nicht die Länge zählt, sondern klare Erfolgskriterien und ein sicherer Umfang.
-->

---
title: Übung 3 · Feature mit Agent Mode
layout: image-right
background: /copilot-chat-3.png
---

# 40 Minuten · planen, umsetzen, reviewen

<v-clicks>

- kleines Feature aus einem vorbereiteten Backlog wählen
- Agent zuerst Plan und offene Fragen liefern lassen
- Task nach Freigabe umsetzen und Tests ausführen lassen
- **Ergebnis:** Feature-Branch mit Test, geprüftem Diff und Notizen

</v-clicks>

<!--
Zeitbox: 8 Min gemeinsames Plan-Beispiel, 22 Min Umsetzung, 10 Min Diff-/Testreview. In der Demo bewusst einen Randfall einbauen. Falls der Agent zu breit arbeitet: stoppen, Scope verkleinern, Plan aktualisieren.
-->

---
title: Instructions oder Prompt File?
layout: image-left
background: /settings-instruction-files-1.png
---

# Dauerhafte Regeln vs. wiederholbarer Auftrag

<v-clicks>

- **Instructions:** gelten automatisch im definierten Projekt-/Dateikontext
- **Prompt File:** wird bewusst für eine konkrete wiederholbare Aufgabe aufgerufen
- **Faustregel:** Teamstandard automatisch; Arbeitsablauf gezielt starten

</v-clicks>

<!--
Beispiele: TypeScript Strictness oder Delphi-Konventionen in Instructions; „Erzeuge Tests für diese Änderung“ als Prompt File. Copilot-Featureunterstützung hängt von IDE und Oberfläche ab.
Quelle: https://docs.github.com/en/copilot/reference/customization-cheat-sheet
-->

---
title: Übung 4 · Projektkontext anpassen
layout: image-right
background: /settings-instruction-files-2.png
---

# 35 Minuten · Regeln sichtbar machen

<v-clicks>

- drei überprüfbare Projektregeln aus dem Repository ableiten
- passende `.github/copilot-instructions.md` oder gezielte Instruction-Datei schreiben
- ein Prompt File für einen wiederkehrenden Task erstellen
- **Ergebnis:** Vorher/Nachher-Beispiel, das die Regelwirkung zeigt

</v-clicks>

<!--
Geführt: Regeln als konkrete Vorgaben schreiben, nicht als Wunschliste. Mit demselben Auftrag vorher/nachher vergleichen. Keine sensiblen oder personenbezogenen Repo-Inhalte verwenden.
-->

---
layout: chapter-dark
background: /bmad-agents-specialized-experts.png
---

# 03 · Fähigkeiten passend zuschneiden

<!--
Die Begriffe sauber unterscheiden: Skills laden Wissen/Schritte nach Bedarf, Custom Agents geben einer Rolle eigene Anweisungen und Tool-Grenzen, MCP verbindet externe Tools und Daten.
-->

---
title: Skills, Agents und Tools sind verschieden
layout: image-right
background: /bmad-agent-fleet.png
---

# Drei Bausteine — drei Aufgaben

<v-clicks>

- **Skill:** gebündelte Anleitung, Ressourcen und ggf. Skripte für einen Workflow
- **Custom Agent:** spezialisierte Rolle mit eigenen Regeln und Fähigkeiten
- **MCP/Tool:** konkrete Aktion oder Datenquelle außerhalb des Modells

</v-clicks>

<!--
Ein Skill ist nicht einfach ein anderer Name für Agent. Toolzugriffe können Folgen haben; nur nötige Rechte freigeben und die Toolbeschreibung prüfen.
Quelle: https://docs.github.com/en/copilot/reference/customization-cheat-sheet
-->

---
title: Übung · Team-Workflow als Skill
layout: image-left
background: /bmad-context-hierarchy.png
---

# Aus einer Wiederholung wird ein Skill

<v-clicks>

- wiederkehrenden Ablauf in kleine Schritte zerlegen
- erforderliche Inputs und Prüfergebnis festlegen
- Referenzmaterial nur dort ablegen, wo es gebraucht wird
- **Ergebnis:** Skill-Skelett mit Trigger, Ablauf und Checkliste

</v-clicks>

<!--
Gruppenübung, 15 Minuten innerhalb des Bausteins: erst Papierentwurf, danach Verzeichnisstruktur betrachten. Nicht alle Teilnehmenden müssen heute echte Tools installieren.
-->

---
title: MCP: externe Fähigkeiten bewusst anbinden
layout: image-right
background: /bmad-governance-control-center.png
---

# Erst Nutzen, dann Berechtigung

<v-clicks>

- welche Information/Aktion fehlt Copilot?
- welche minimalen Tools und Rechte reichen?
- sind Datenzugriff, Schreibzugriff und Herkunft nachvollziehbar?
- was braucht menschliche Bestätigung?

</v-clicks>

<!--
Demo nur mit einem vorbereiteten, möglichst lesenden Beispielserver. Verbindung, Tool-Input und Rückgabe prüfen. Keine echten Kundendaten, Zugangsdaten oder unkontrollierten Schreibaktionen.
-->

---
title: Delphi ist ein möglicher Übungsweg
layout: image-left
background: /delphi-code.png
---

# Dasselbe Prinzip, andere Toolchain

<v-clicks>

- VS Code plus DelphiLSP-Erweiterung
- bestehende Delphi-Unit als Kontext
- Konventionen und Tests in Instructions festhalten
- wenn Delphi lokal fehlt: dieselbe Übung in TypeScript durchführen

</v-clicks>

<!--
Optionale Delphi-Demo: nur bei vorbereiteter Installation. Copilot-Unterstützung hängt an Editor, Erweiterungen und Projektkontext; keine Garantie für IDE-spezifische Features.
-->

---
title: Capstone · Feature von Anfang bis Review
layout: image-right
background: /bmad-human-ai-copilot.png
---

# 20 Minuten · euer Copilot-Workflow

<v-clicks>

- Feature + Erfolgskriterien auswählen
- Instructions/Prompt passend einsetzen
- Agent in sicherem Scope arbeiten lassen
- Tests, Diff und offene Punkte als Team prüfen
- **Ergebnis:** überprüfbarer PR-Entwurf und persönlicher nächster Schritt

</v-clicks>

<!--
10 Min bauen, 5 Min Review in Zweiergruppen, 5 Min teilen. Ohne PR-Rechte lokal committen oder Diff zeigen.
-->

---
title: Takeaways
layout: statement
---

# Kontext. Begrenzter Auftrag. Sichtbarer Nachweis.

<v-clicks>

- mit kleinen Aufgaben starten
- Projektregeln einmal sauber festhalten
- Skills, Agents und Tools nur bei passendem Bedarf ergänzen
- jede Änderung selbst verstehen und prüfen

</v-clicks>

<!--
Transferfrage: Welche Aufgabe in eurem Team wäre eine gute erste Copilot-Übung mit niedrigem Risiko?
-->

---
title: Quellen
layout: default
hideInToc: true
---

# Quellen & Vorbereitung

<v-clicks>

- [EKON 30 · GitHub Copilot von A bis Z](https://entwickler-konferenz.de/ki-praxis-und-tools-fuer-delphi/workshop-github-copilot-von-a-bis-z)
- [GitHub Copilot customization cheat sheet](https://docs.github.com/en/copilot/reference/customization-cheat-sheet)
- [Bestehende Copilot-Decks und Workshop-Abstract im Repository](https://github.com/harrybin/presentations)
- Vorab installieren: VS Code, Git, Copilot-Extensions und Beispielprojekt

</v-clicks>

<!--
Die Featurematrix in der GitHub-Dokumentation ändert sich; konkrete UI-Schritte vor dem Workshop mit den verwendeten IDE-Versionen abgleichen.
-->

---
src: /special-slides/questions.md
---

---
src: /special-slides/thank-you.md
---
