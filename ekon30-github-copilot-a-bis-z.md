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
description: "Vierstündiger Delphi-Workshop mit GitHub Copilot, Lazarus/Free Pascal und interaktiver Übungsführung."
publicDeckPath: ekon30-github-copilot-a-bis-z
htmlAttrs:
  class: ekon30-deck
###### slides start ######
layout: cover
coverImage: gh-copilot-logo.png
isDark: true
hideInToc: true
---

# Workshop: GitHub Copilot von A bis Z

## Delphi · Lazarus · geführte Übungen

**EKON 30 · Düsseldorf, November 2026 · 4 Std. · Harald Binkle & Thomas Tomow**

<!--
Start: heute baut jede Person ein kleines Delphi-kompatibles Pascal-Feature mit Lazarus/Free Pascal und passt Copilot an ein konkretes Projekt an. Der Browser-Guide begleitet die Übungen in VS Code; kein RAD Studio erforderlich.
-->

---
title: Speaker
layout: intro
src: /special-slides/ekon30-speakers.md

---

---
title: Vorbereitung
layout: default
hideInToc: true
---

# Vorbereitung: Delphi-Werkbank

<div class="grid grid-cols-2 gap-10 items-center mt-6">

<div>

**Bitte mitbringen**

<v-clicks>

- Lazarus + Free Pascal im `PATH`
- VS Code, Git, Node.js 24+ und Copilot
- Repo klonen, Tests und Guide starten

</v-clicks>

```bash
git clone https://github.com/harrybin/ekon30-github-copilot-workshop.git
cd ekon30-github-copilot-workshop
npm test
npm run guide
```

**Repo:** [github.com/harrybin/ekon30-github-copilot-workshop](https://github.com/harrybin/ekon30-github-copilot-workshop)

</div>

<div class="text-center">

<QRCode
  type="svg"
  :data="'https://github.com/harrybin/ekon30-github-copilot-workshop'"
  :dotsOptions="{ color: '#164e8a', type: 'extra-rounded', roundSize: false }"
  :backgroundOptions="{ color: '#ffffff' }"
  :width="220"
  :height="220"
/>

<p>Repo → README → Setup → Guide</p>

</div>

</div>

<!--
Vorbereitung: README im Übungsrepo lesen, Repository klonen und als eigenen VS-Code-Ordner öffnen. fpc -iV und lazbuild --version prüfen. npm test baut mit lazbuild und startet die Pascal-Checks. Node.js dient nur dem Guide und den Build-Aufrufen, nicht den Codeübungen.
-->

---
title: Geführter Workshop
layout: default
hideInToc: true
---

# Dein Guide neben dem Pascal-Code

<div class="grid grid-cols-2 gap-10 mt-6">
<div>

**Verstehen → Umsetzen → Prüfen**

<v-clicks>

- acht Übungen mit klaren Zeitboxen
- Copilot-Prompts bewusst kopieren
- Hinweise bei Bedarf aufklappen
- eigene Nachweise und Notizen exportieren

</v-clicks>

</div>
<div>

**Start in VS Code**

```bash
npm run guide
```

`Simple Browser: Show` öffnen und die **vollständige URL aus dem Terminal** einfügen.

Fortschritt bleibt lokal. Haken sind **Selbstauskunft**, keine automatischen Tests.

</div>
</div>

<!--
Vorbild: https://github.com/octodemo/copilot-governance-at-scale
Unser Guide ist eine eigenständige lokale Browser-Oberfläche, keine registrierte native Copilot-Canvas-Erweiterung. In VS Code neben dem Code im Simple Browser oder in einem normalen Browser öffnen. In der Copilot App bei lokalem Checkout den Browser-Arbeitsbereich verwenden, sofern verfügbar, sonst den Systembrowser. Keine automatische Terminalausführung oder Agent-Actions. Prüfschritte werden nur mit eigenem Nachweis als selbst bestätigt gezählt.
-->

---
layout: cover
coverImage: pilot-large.jpg
isDark: true
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
background: copilot-chat-1.png
hideInToc: true
---

# Am Ende habt ihr ein gebautes Feature

<v-clicks>

- **Zielgruppe:** Delphi-Entwickler:innen mit und ohne Copilot-Erfahrung
- **Toolchain:** VS Code + Lazarus/Free Pascal, kein RAD Studio nötig
- **Ergebnis:** Feature mit Tests plus projektspezifische Copilot-Anpassung
- **Arbeitsmodus:** kurze Inputs, angeleitete Übungen, gemeinsamer Capstone

</v-clicks>

<!--
Vorabhinweis: Lazarus inklusive Free Pascal und PATH vorbereiten. Sprachunterstützung in VS Code ist hilfreich, aber keine kostenpflichtige Delphi-Erweiterung ist Voraussetzung. Inline-Completions werden in VS Code geübt; Chat und Agent-Aufgaben können auch in der Copilot App erfolgen.
-->

---
title: Agenda
layout: default
hideInToc: true
---

# Vier Stunden · gemeinsam bauen

| Zeit        | Baustein                              |
| ----------- | ------------------------------------- |
| 00:00–00:15 | Lazarus, Guide, sicherer Arbeitsmodus |
| 00:15–01:20 | Completions und Chat · Übungen 1–2    |
| 01:20–01:30 | Pause                                 |
| 01:30–02:10 | Agent Mode · Übung 3                  |
| 02:10–02:45 | Instructions & Prompt Files · Übung 4 |
| 02:45–02:55 | Pause                                 |
| 02:55–03:20 | Skills & Custom Agents · Übung 5      |
| 03:20–03:40 | Tools & MCP · Übung 6                 |
| 03:40–04:00 | Capstone, Review und Transfer         |

<!--
240 Minuten inklusive zwei 10-Minuten-Pausen. Vorab-Setup ist erforderlich, damit wir die Übungszeiten nicht mit Installationen verbrauchen. Alle Codeaufgaben verwenden Delphi-kompatibles Object Pascal, gebaut mit Lazarus.
-->

---
layout: chapter
background: copilot-change-completions-model-1.png
isDark: true
---

# 01 · Ein guter Startpunkt

<!--
Wir beginnen mit der kleinsten Delegation: Copilot schlägt vor, der Mensch entscheidet.
-->

---
title: Arbeitsmodell: Vorschlag, Prüfung, Entscheidung
layout: image-right
background: gh-copilot-logo.png
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
title: Foundry-Modelle in VS Code Chat
layout: default
---

# Foundry-Modelle in VS Code Chat

<div class="grid grid-cols-3 gap-4 mt-5">

<div class="rounded-xl border border-purple-300/60 bg-white/70 p-4">
<div class="text-sm font-bold tracking-wide text-purple-700">01 · AUSWÄHLEN</div>
<h2 class="mt-2">Model Catalog</h2>
<p>Modell, Region, Deployment-Typ und Nutzungsbedingungen prüfen.</p>
</div>

<div class="rounded-xl border border-purple-300/60 bg-white/70 p-4">
<div class="text-sm font-bold tracking-wide text-purple-700">02 · BEREITSTELLEN</div>
<h2 class="mt-2">Deployment</h2>
<p>Modell deployen. Der Deployment-Name routet Requests über den Foundry-Endpunkt.</p>
</div>

<div class="rounded-xl border border-purple-300/60 bg-white/70 p-4">
<div class="text-sm font-bold tracking-wide text-purple-700">03 · VERBINDEN</div>
<h2 class="mt-2">VS Code Chat</h2>
<p><code>Chat: Manage Language Models</code> → <code>Add Models</code> → <strong>Azure</strong>; Endpoint und Deployment-Name konfigurieren.</p>
</div>

</div>

<div v-click class="mt-4 rounded-lg bg-purple-50/80 px-4 py-3 text-sm">
<strong>Agent Mode:</strong> BYOK aktivieren und ein Modell mit Tool Calling wählen. Code-Completions bleiben Copilot; Azure-Aufrufe werden separat abgerechnet. Für Foundry-Modelle ist alternativ das Foundry Toolkit als Provider-Extension verfügbar.
</div>

<!--
Kurzer Exkurs (2–3 Min.) innerhalb der bestehenden Zeit für Chat/Completions; Agenda und Gesamtzeit bleiben unverändert. Keine echten Schlüssel zeigen. In Copilot-Harness-Sessions muss `chat.agentHost.byokModels.enabled` aktiv sein; Agent-Modelle benötigen Tool Calling.
Quellen: https://code.visualstudio.com/docs/agent-customization/language-models, https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/endpoints, https://github.blog/changelog/2026-04-22-bring-your-own-language-model-key-in-vs-code-now-available/.
-->

---
title: Übung 1 · Completion im eigenen Rhythmus
layout: image-left
background: copilot-change-completions-model-2.png
---

# Kleine Funktion, echter Test

<v-clicks>

- `FormatSessionCaption` in einer Pascal-Unit ergänzen
- Copilot-Vorschlag annehmen, verändern oder verwerfen
- Grenzfall selbst ergänzen und mit Test absichern
- **Ergebnis:** Funktion + Test + kurzer Review-Kommentar

</v-clicks>

**Guide 1 · 30 Min.** → [Übung: Completions](https://github.com/harrybin/ekon30-github-copilot-workshop/blob/main/exercises/01-completions.md)

<!--
Geführte Übung: 5 Min Demo, 15 Min eigenes Arbeiten, 10 Min Checkpoint. In src/SessionCatalog.pas eine neue Funktion ergänzen und in tests/CatalogTests.lpr prüfen. npm test baut mit lazbuild und startet die Tests. Sprache ist Object Pascal im Delphi-Modus. Im Guide die Prüfkriterien und eigene Beobachtung festhalten.
-->

---
title: Übung 2 · Chat mit Arbeitskontext
layout: image-right
background: copilot-chat-2.png
---

# Erst verstehen, dann ändern

<v-clicks>

- `FilterSessions` und dynamische Arrays erklären lassen
- Refactoring oder Tests als separaten Auftrag formulieren
- Scope, Nicht-Ziele und erwarteten Output nennen
- **Ergebnis:** nachvollziehbarer Plan und eine geprüfte Verbesserung

</v-clicks>

**Guide 2 · 35 Min.** → [Übung: Chat](https://github.com/harrybin/ekon30-github-copilot-workshop/blob/main/exercises/02-chat.md)

<!--
Geführt: erst Ask/Explain ohne Edit, dann genau einen Randfall testen. Teilnehmende vergleichen Antwort und tatsächlichen Pascal-Code, insbesondere const und Array-Aliasing. Keine unbelegten Unicode-Garantien. Beobachtung im Guide dokumentieren, danach erste Pause.
-->

---
layout: chapter
background: secret-agent-large.png
isDark: true
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

<div class="ekon30-flow ekon30-flow--five">
  <div v-click class="ekon30-flow__step">
    <strong>Ziel</strong>
    <p>Welches Verhalten soll entstehen?</p>
  </div>
  <div v-click class="ekon30-flow__step">
    <strong>Kontext</strong>
    <p>Welche Dateien und Regeln zählen?</p>
  </div>
  <div v-click class="ekon30-flow__step">
    <strong>Grenzen</strong>
    <p>Was soll ausdrücklich unverändert bleiben?</p>
  </div>
  <div v-click class="ekon30-flow__step">
    <strong>Nachweis</strong>
    <p>Welche Tests oder Checks müssen laufen?</p>
  </div>
  <div v-click class="ekon30-flow__step">
    <strong>Rückmeldung</strong>
    <p>Änderungen, Annahmen und offene Fragen nennen</p>
  </div>
</div>

<!--
Ein gutes Prompt-Beispiel live formulieren. Nicht die Länge zählt, sondern klare Erfolgskriterien und ein sicherer Umfang.
-->

---
title: Übung 3 · Feature mit Agent Mode
layout: image-right
background: copilot-chat-3.png
---

# Planen, umsetzen, reviewen

<v-clicks>

- `CountSessionsByTrack` aus dem Backlog umsetzen
- Agent zuerst Plan und offene Fragen liefern lassen
- Task nach Freigabe umsetzen und Tests ausführen lassen
- **Ergebnis:** Feature-Branch mit Test, geprüftem Diff und Notizen

</v-clicks>

**Guide 3 · 40 Min.** → [Übung: Agent Mode](https://github.com/harrybin/ekon30-github-copilot-workshop/blob/main/exercises/03-agent-mode.md)

<!--
Zeitbox: 8 Min gemeinsames Plan-Beispiel, 22 Min Umsetzung, 10 Min Diff-/Testreview. In der Demo bewusst einen Randfall einbauen. Falls der Agent zu breit arbeitet: stoppen, Scope verkleinern, Plan aktualisieren.
-->

---
title: Instructions oder Prompt File?
layout: image-left
background: settings-instruction-files-1.png
---

# Dauerhafte Regeln vs. wiederholbarer Auftrag

<v-clicks>

- **Instructions:** gelten automatisch im definierten Projekt-/Dateikontext
- **Prompt File:** wird bewusst für eine konkrete wiederholbare Aufgabe aufgerufen
- **Faustregel:** Teamstandard automatisch; Arbeitsablauf gezielt starten

</v-clicks>

<!--
Beispiele: Delphi/FPC-Kompatibilität, unveränderte Eingabearrays und npm test in Instructions; „Prüfe Tests für diese Änderung“ als Prompt File. Copilot-Featureunterstützung hängt von IDE und Oberfläche ab.
Quelle: https://docs.github.com/en/copilot/reference/customization-cheat-sheet
-->

---
title: Übung 4 · Projektkontext anpassen
layout: image-right
background: settings-instruction-files-2.png
---

# Regeln sichtbar machen

<v-clicks>

- drei überprüfbare Projektregeln aus dem Repository ableiten
- passende `.github/copilot-instructions.md` oder gezielte Instruction-Datei schreiben
- ein Prompt File für einen wiederkehrenden Task erstellen
- **Ergebnis:** Vorher/Nachher-Beispiel, das die Regelwirkung zeigt

</v-clicks>

**Guide 4 · 35 Min.** → [Übung: Instructions & Prompts](https://github.com/harrybin/ekon30-github-copilot-workshop/blob/main/exercises/04-instructions-prompts.md)

<!--
Geführt: Regeln als konkrete Vorgaben schreiben, nicht als Wunschliste. Mit demselben Auftrag vorher/nachher vergleichen. Keine sensiblen oder personenbezogenen Repo-Inhalte verwenden.
-->

---
layout: chapter
background: bmad-agents-specialized-experts.png
isDark: true
---

# 03 · Fähigkeiten passend zuschneiden

<!--
Die Begriffe sauber unterscheiden: Skills laden Wissen/Schritte nach Bedarf, Custom Agents geben einer Rolle eigene Anweisungen und Tool-Grenzen, MCP verbindet externe Tools und Daten.
-->

---
title: Skills, Agents und Tools sind verschieden
layout: image-right
background: bmad-agent-fleet.png
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
background: bmad-context-hierarchy.png
---

# Aus einer Wiederholung wird ein Skill

<v-clicks>

- wiederkehrenden Ablauf in kleine Schritte zerlegen
- erforderliche Inputs und Prüfergebnis festlegen
- Referenzmaterial nur dort ablegen, wo es gebraucht wird
- **Ergebnis:** Skill-Skelett mit Trigger, Ablauf und Checkliste

</v-clicks>

**Guide 5 · 25 Min.** → [Übung: Skills & Agents](https://github.com/harrybin/ekon30-github-copilot-workshop/blob/main/exercises/05-skills-agents.md)

<!--
25 Minuten inklusive Input: Workflow als .github/skills/catalog-test-review/SKILL.md mit Trigger und Prüfschritten anlegen. Reviewer-Agent optional. Tatsächlichen Skill-Aufruf beobachten oder manuellen Kontextweg ausdrücklich dokumentieren. Keine Toolinstallation erforderlich.
-->

---
title: MCP: externe Fähigkeiten bewusst anbinden
layout: image-right
background: bmad-governance-control-center.png
---

# Erst Nutzen, dann Berechtigung

<v-clicks>

- welche Information/Aktion fehlt Copilot?
- welche minimalen Tools und Rechte reichen?
- sind Datenzugriff, Schreibzugriff und Herkunft nachvollziehbar?
- was braucht menschliche Bestätigung?

</v-clicks>

**Guide 6 · 20 Min.** → [Übung: Tools & MCP](https://github.com/harrybin/ekon30-github-copilot-workshop/blob/main/exercises/06-tools-mcp.md)

<!--
Die lokale Tool-/Rechteanalyse ist Teil des Workshops. Terminal plus lazbuild benötigt keinen MCP-Server. Eine Live-MCP-Demo ist optional und nur mit vorbereitetem lesendem Beispielserver erlaubt. Ohne Server Trockenübung dokumentieren, keinen Live-Nachweis behaupten.
-->

---
title: Unsere Pascal-Toolchain
layout: default
---

# Delphi-Code. Lazarus-Build. Sichtbarer Nachweis.

```pascal
function FindSessionIndex(const Sessions: TSessions;
  const Id: string): Integer;
```

<v-clicks>

- `src/SessionCatalog.pas` · Delphi-kompatibles Object Pascal
- `CatalogDemo.lpi` · Konsolenprojekt ohne VCL/FMX
- `npm test` · Lazarus baut **und startet** die Pascal-Tests
- `npm run build` · Anwendung mit `lazbuild` bauen

</v-clicks>

<!--
FPC wird im Delphi-Modus verwendet. Keine JavaScript-Ersatzübungen, keine RAD-Studio-Lizenz erforderlich. Node.js ist nur der plattformübergreifende Starter für Guide und Toolchain. Die beiden .lpi-Dateien lassen sich alternativ direkt in Lazarus öffnen; danach Tests tatsächlich starten. Vollständige RAD-Studio-Kompatibilität wird nicht behauptet.
-->

---
title: Capstone · Feature von Anfang bis Review
layout: image-right
background: bmad-human-ai-copilot.png
---

# Euer Copilot-Workflow

<v-clicks>

- `FilterSessionsByTrack` mit Erfolgskriterien umsetzen
- Instructions/Prompt passend einsetzen
- Agent in sicherem Scope arbeiten lassen
- Tests, Diff und offene Punkte als Team prüfen
- **Ergebnis:** geprüfter Diff und exportierte Workshop-Notizen

</v-clicks>

**Guide 7 · 20 Min.** → [Übung: Capstone](https://github.com/harrybin/ekon30-github-copilot-workshop/blob/main/exercises/07-capstone.md)

<!--
10 Min bauen, 5 Min Review in Zweiergruppen, 5 Min teilen und Notizen exportieren. npm test und npm run build ausführen. Ohne PR-Rechte genügt lokaler Diff. Der Export enthält persönliche Angaben zu Prüfschritten und offenen Punkten, kein automatisches Qualitätszertifikat.
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
- [Vorbild der Übungsführung: Copilot Governance at Scale](https://github.com/octodemo/copilot-governance-at-scale)
- [VS Code BYOK, Azure-Provider und Foundry-Modellendpunkte](https://code.visualstudio.com/docs/agent-customization/language-models) · [Microsoft Foundry Endpoints](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/endpoints) · [GitHub: BYOK in VS Code](https://github.blog/changelog/2026-04-22-bring-your-own-language-model-key-in-vs-code-now-available/)
- Vorab installieren: Lazarus/FPC, VS Code, Git, Node.js und Copilot

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
