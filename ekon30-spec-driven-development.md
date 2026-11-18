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
description: "Mit GitHub Copilot und der BMad Method vom PRD zu überprüfbarem, agentisch erstelltem Code."
publicDeckPath: ekon30-spec-driven-development
htmlAttrs:
  class: ekon30-deck
  lang: de
###### slides start ######
layout: cover
coverImage: bmad-agent-fleet.png
isDark: true
hideInToc: true
---

# Spec-Driven Development

## BMad: Vom PRD zu überprüfbarem Code

**EKON 30 · Düsseldorf, November 2026 · Harald Binkle & Thomas Tomow**

<!--
Einstieg: Ein Agent kann in Minuten viele Dateien ändern. Die entscheidende Frage ist nicht, wie schnell er Code schreibt, sondern ob das Team vorher klar genug beschrieben hat, was richtig bedeutet.
-->

---
title: Speaker
layout: intro
src: /special-slides/ekon30-speakers.md

---

---
layout: cover
coverImage: bmad-project-failure-aircraft.png
isDark: true
hideInToc: true
---

# Der Agent hat geliefert.

## Aber hat er das Richtige gebaut?

<v-clicks>

- Der PRD sagt: „Benutzer können Termine verwalten.“
- Der Agent liefert Code.
- Niemand weiß, ob Zeitzonen, Konflikte und Berechtigungen gemeint waren.

</v-clicks>

<!--
Teaser mit kurzen Pausen. Die Lücke zwischen Absicht und prüfbarem Verhalten ist der eigentliche Engpass. Danach wechseln wir für den roten Faden zum konkreten Session-Katalog: Sessions pro Track zählen.
-->

---
title: Sessionprofil
layout: image-right
background: bmad-context-satellite.png
hideInToc: true
---

# Vom Wunsch zur überprüfbaren Lieferung

<v-clicks>

- **Format:** Impulsvortrag mit einem durchgehenden Live-Demo-Faden
- **Zielgruppe:** Entwickler:innen, Tech Leads und Architekt:innen
- **Vorkenntnisse:** Grundverständnis von Anforderungen und KI-Coding-Assistenten
- **Ergebnis:** ein nachvollziehbarer Weg von der Produktidee zu getesteten Änderungen

</v-clicks>

<!--
In einem Satz: Wir zeigen keinen Autopiloten ohne Kontrolle, sondern einen überprüfbaren Entwicklungsprozess, in dem GitHub Copilot die Arbeit beschleunigt.
-->

---
title: Agenda
layout: image-right
background: compass-right.png
hideInToc: true
---

# Vom PRD zur prüfbaren Lieferung

<v-clicks>

- Warum Prompt-zu-Code allein nicht skaliert
- PRD, Ticket-Spec und Qualitätskriterien
- BMad Method: Klarheit, Planung und Rollenteilung
- Ein Demo-Faden mit Demo Time: Clarify → Plan → Build & verify
- Learn & adjust: Qualität, Grenzen und Fragen

</v-clicks>

<!--
Die Phasen desselben Demo-Fadens enthalten Prompt-Warten, Wechsel, Erläuterungen, Tests und Fallback. Vorbereitung und Bedienung: demo-projects/ekon30-talk-demo/README.md; in VS Code die Erweiterung **Demo Time** öffnen und den Akt `EKON 30 · Spec-Driven Development` (`.run/baseline/.demo/sdd-talk.json`) auswählen. Bei Zeitdruck Live-Pfad abkürzen und spätestens zum Ende der aktuellen Phase weitergehen.
-->

---
layout: chapter
background: bmad-dev-ideas-to-tests.png
isDark: true
---

# 01 · Erst Klarheit, dann Code

<!--
Übergang: Mehr Agenten und bessere Modelle lösen keine unklaren Anforderungen.
-->

---
title: Der Engpass ist nicht das Tippen
layout: image-right
background: bmad-kosten-anforderungsfehler.png
---

# Mehr Output ist nicht automatisch mehr Fortschritt

<v-clicks>

- Vage Ziele erzeugen plausible, aber unterschiedliche Interpretationen.
- Fehlender Kontext wird mit Annahmen aufgefüllt.
- Ohne Akzeptanzkriterien bleibt „fertig“ subjektiv.
- Fehler früh in der Spezifikation zu finden ist günstiger als nach vielen Änderungen.

</v-clicks>

<!--
Das Publikum fragen: Wo wird bei euch „fertig“ heute festgelegt — im Ticket, im PR oder erst im Review?
-->

---
title: BMad macht das Ticket zur Spezifikation
layout: image-left
background: bmad-context-hierarchy.png
---

# Das Ticket ist die belastbare Spec

<v-clicks>

- **PRD oder Brief:** Quelle, wenn mehrere Beteiligte sich abstimmen müssen
- **Sofia (Product Owner):** überführt Quellen in Tickets mit stabilen Requirement-IDs
- **Ticket = Spec:** Requirements, Constraints, Done when und Boundaries
- **Build-Plan:** Vorgehen für eine Story; Umfang passt sich dem Risiko an

</v-clicks>

<!--
Ein PRD ist optional: BMad ergänzt nur die Planung, die Größe und Risiko der Arbeit rechtfertigen. Für eine Story reicht oft das Ticket; der Build-Plan hält Vorgehen und Status fest.
-->

---
title: Eine gute Spezifikation macht Lücken sichtbar
layout: default
---

# Beispiel: Sessions pro Track

<v-click>

**Zu vage:** „Zähle Sessions je Track.“

</v-click>

<v-clicks>

- Sind `KI` und `ki` derselbe Track?
- Welche Reihenfolge haben die Ergebnisse?
- Was passiert bei leerem Track oder leerer Liste?
- Darf die Eingabe verändert werden?

</v-clicks>

<!--
Dieselbe Story zieht sich durch den gesamten Demo-Faden: Sessions je Track zählen. Die Spec entscheidet über exakten Vergleich, Reihenfolge des ersten Auftretens, leeren Track als eigenen Schlüssel und unveränderte Eingaben. Gute Spec-Arbeit macht Annahmen explizit und lädt das Team zur Entscheidung ein.
-->

---
title: Der Entwicklungsfluss
layout: default
---

# Vier Schritte, ein gemeinsamer Ticket-Faden

<div class="ekon30-flow ekon30-flow--four">
  <div v-click class="ekon30-flow__step">
    <strong>Clarify</strong>
    <p>Absicht, Grenzen und offene Fragen</p>
  </div>
  <div v-click class="ekon30-flow__step">
    <strong>Plan · Sofia</strong>
    <p>Ticket-Spec und passende Arbeitseinheiten</p>
  </div>
  <div v-click class="ekon30-flow__step">
    <strong>Build &amp; verify</strong>
    <p>Eine Story bauen, prüfen und reviewen</p>
  </div>
  <div v-click class="ekon30-flow__step">
    <strong>Learn &amp; adjust</strong>
    <p>Am Epic-Ende Bilanz ziehen, Plan anpassen</p>
  </div>
</div>

<!--
Die vier Stufen sind keine starre Pipeline: Kleine Änderungen starten direkt bei Build & verify; PRD, UX und Architektur kommen nur bei Bedarf hinzu. Learn & adjust schließt ein Epic ab, nicht jede einzelne Story.
-->

---
title: Was „Agent-Squad“ hier bedeutet
layout: image-left
background: bmad-agents-specialized-experts.png
---

# Rollen trennen, Ergebnisse verbinden

<v-clicks>

- **Mary (Analyst):** klärt eine vage Idee; **John (PM):** schreibt bei Bedarf ein PRD
- **Sofia (PO):** pflegt Anforderungen und schneidet Tickets
- **Sally (UX) / Winston (Architekt):** ergänzen Spezialwissen, wenn es gebraucht wird
- **Amelia (`bmad-build`):** plant, implementiert und reviewt eine Story
- **Mensch:** entscheidet offene Fragen, prüft das Ergebnis und markiert es „done“

</v-clicks>

<!--
Die Rollen sind die BMad-Arbeitsteilung, keine Behauptung paralleler Ausführung. In der Demo arbeiten Sofia und Amelia nacheinander; die Person steuert Entscheidungen und Abnahme.
-->

---
title: Demo-Faden · Von der Idee zum Ticket
layout: image-right
background: bmad-context-hierarchy.png
---

# Ein roter Faden · Die Story wird zur Spec

<v-clicks>

- **Start · 3 Min.** · Sofia (`bmad-agent-po`) liest `prd.md`
- Eine Story für genau einen Build-Scope schneiden
- Groß-/Kleinschreibung und Randfälle explizit festhalten
- Fallback: vorbereitete Ticket-Spec in `spec.md`

</v-clicks>

<!--
Konkreter Ablauf: erster Schritt im durchgehenden Demo-Faden, siehe `demo-projects/ekon30-talk-demo/README.md`. BMad vorab ausschließlich in `.run/baseline` installieren. Nach 45 Sekunden ohne brauchbares Ticket die vorbereitete `spec.md` zeigen; sie ist ein Offline-Fallback und kein von Sofia erzeugtes Artefakt.
-->

---
title: Ticket-Spec · Der Vertrag bleibt sichtbar
layout: image-left
background: bmad-context-hierarchy.png
---

# Entscheidungen werden prüfbare Anforderungen

<div class="grid grid-cols-2 gap-10 mt-6">

<div>

**Fachlicher Vertrag**

<v-clicks>

- `KI` und `ki` sind verschiedene Tracks
- Ergebnisse folgen dem ersten Auftreten
- Leere Namen zählen; leere Eingabe ergibt nichts

</v-clicks>

</div>

<div>

**Arbeitsgrenzen**

<v-clicks>

- Eingabe und Einträge bleiben unverändert
- nur `SessionCatalog.pas` ändern
- vorhandene Tests liefern den Nachweis

</v-clicks>

</div>

</div>

<!--
Das sind die konkreten Anforderungen und Grenzen der vorbereiteten Ticket-Spec. Im Live-Pfad prüfen wir Sofias tatsächliches Ticket; bei Timeout klar als Offline-Fallback kennzeichnen.
-->

---
title: Demo-Faden · Ticket wird zum Build-Plan
layout: image-left
background: bmad-navigation-compass-ai.png
---

# Derselbe Ticket-Faden · Den Build planen

<v-clicks>

- **Weiter · 3 Min.** · frischer Build-Chat mit `bmad-build`
- Dasselbe Ticket und der Pascal-Code bleiben der Kontext
- Vorgehen und offene Fragen prüfen, vor Codeänderungen pausieren

</v-clicks>

<!--
Der Chat wechselt wegen der sauberen Build-Sitzung, nicht die Story: BMad baut auf Sofias Ticket auf. Wenn die Antwort nach 45 Sekunden ausbleibt oder die geplante Änderung außerhalb des Scopes liegt, den Offline-Plan in `plan.md` zeigen; er ist keine BMAD-generierte Build-Plan-Datei.
-->

---
title: Der Build-Plan ist ein Entscheidungspunkt
layout: default
---

# Vor dem ersten Edit ist der Scope sichtbar

<div class="ekon30-flow ekon30-flow--four">
  <div v-click class="ekon30-flow__step">
    <strong>Ticket lesen</strong>
    <p>Requirements und Grenzen übernehmen</p>
  </div>
  <div v-click class="ekon30-flow__step">
    <strong>Änderung planen</strong>
    <p>Nur die betroffenen Dateien und Schritte</p>
  </div>
  <div v-click class="ekon30-flow__step">
    <strong>Nachweis festlegen</strong>
    <p>Vorhandene Checks ausführen</p>
  </div>
  <div v-click class="ekon30-flow__step">
    <strong>Freigabe abwarten</strong>
    <p>Der Mensch entscheidet vor dem Build</p>
  </div>
</div>

<!--
Der Plan verbindet Ticket und Umsetzung. Die Pause vor Codeänderungen ist die sichtbare menschliche Kontrollstelle, auch wenn BMad für eine kleine Story einen verkürzten Light-Path wählt.
-->

---
title: Demo-Faden · Build und Verifikation
layout: image-right
background: bmad-governance-control-center.png
---

# Derselbe Ticket-Faden · Bauen, prüfen, abnehmen

<v-clicks>

- **Abschluss · 5 Min.** · den freigegebenen Plan im selben `bmad-build`-Chat umsetzen
- Nur `SessionCatalog.pas` ändern, Tests ausführen und reviewen
- Ergebnis und Status `built` prüfen; „done“ bleibt Menschensache
- bei Timeout: vorbereitete Referenzlösung und Test zeigen

</v-clicks>

<!--
Vorab im Demo-Verzeichnis `node demo.mjs prepare` und `node demo.mjs test baseline` ausführen: Der absichtliche Fehler muss scheitern. Im Vortrag in der Erweiterung **Demo Time** den Akt `EKON 30 · Spec-Driven Development` (`.run/baseline/.demo/sdd-talk.json`) nur im isolierten Workspace starten. Nach 60 Sekunden oder Scope-Verstoß Agent abbrechen; die Fallback-Szene zeigt `node demo.mjs test solution` und `node demo.mjs diff`. BMad Build kann lokal committen; im Demo-Workspace darf nichts gepusht werden. `solution` ist eine vorbereitete Referenz, kein live erzeugtes Agent-Ergebnis.
-->

---
title: Built ist noch nicht Done
layout: image-left
background: bmad-human-ai-copilot.png
---

# Der Agent liefert — das Team nimmt ab

<div class="grid grid-cols-2 gap-10 mt-7">

<div>

## Built

- freigegebener Scope umgesetzt
- vorhandene Checks gelaufen
- tatsächlicher Diff nachvollziehbar

</div>

<div>

## Done

- Ergebnis gegen Ticket geprüft
- Grenzen und Annahmen bestätigt
- verantwortliche Person gibt frei

</div>

</div>

<!--
Die Demo endet mit einem gebauten, geprüften Ergebnis im lokalen Workspace. BMADs Status built ist keine Produktionsfreigabe; die menschliche Abnahme bleibt Teil des roten Fadens.
-->

---
title: Derselbe Ticket-Scope · Der Test macht den Unterschied sichtbar
layout: default
---

# Die fachliche Regel wird zum überprüfbaren Ergebnis

<div class="ekon30-flow ekon30-flow--four">
  <div v-click class="ekon30-flow__step">
    <strong>Ticket</strong>
    <p>`KI` und `ki` sind getrennte Tracks</p>
  </div>
  <div v-click class="ekon30-flow__step">
    <strong>Baseline</strong>
    <p>Der gezielte Groß-/Kleinschreibungs-Check schlägt fehl</p>
  </div>
  <div v-click class="ekon30-flow__step">
    <strong>Referenzlösung</strong>
    <p>7 vorbereitete Checks bestanden</p>
  </div>
  <div v-click class="ekon30-flow__step">
    <strong>Abnahme</strong>
    <p>Diff auf `SessionCatalog.pas` prüfen; erst dann „done“</p>
  </div>
</div>

<!--
Die gezeigten Testergebnisse stammen aus der vorbereiteten Referenz mit isoliertem FPC 3.2.2, nicht aus einer live von BMAD erzeugten Änderung. Im Live-Pfad tatsächlichen Agent-Diff und Testlauf prüfen; die Referenz ist der zeitgebundene Fallback.
-->

---
title: Qualitätsgates halten Autonomie überprüfbar
layout: image-right
background: bmad-governance-control-center.png
---

# Autonom arbeiten, nicht autonom freigeben

<v-clicks>

- Ticket-Check: Requirements, Quellen, Constraints und Grenzen stimmig?
- Build-Check: Umfang und Vorgehen passen zu einer Story?
- Ergebnis-Check: Tests, Review und Diff geprüft?
- Abnahme: verantwortliche Person markiert die Story „done“

</v-clicks>

<!--
Betonen: „autonomer Code“ heißt hier agentisch erzeugte Änderungen innerhalb expliziter Grenzen. Kein Versprechen unbeaufsichtigter Produktionsfreigabe.
-->

---
title: Takeaways
layout: statement
---

# Gute Spezifikationen sind ausführbarer Teamkontext.

<v-clicks>

- BMad wählt die kleinste passende Route
- Das Ticket hält Anforderungen und Grenzen stabil
- `bmad-build` baut und prüft eine Story pro Sitzung
- Qualität und Verantwortung beim Team lassen

</v-clicks>

<!--
Die zentrale Mitnahme: Nicht „mehr Prompt“, sondern weniger Mehrdeutigkeit an den Übergaben.
-->

---
title: Quellen
layout: default
hideInToc: true
---

# Quellen & Einordnung

<v-clicks>

- [EKON 30 · KI Praxis und Tools für Delphi](https://entwickler-konferenz.de/ki-praxis-und-tools-fuer-delphi/)
- [BMad Method: vier Stufen und Rollen](https://docs.bmad-method.org/start/how-bmad-works/)
- [BMad Method: Initiative und Tickets planen](https://docs.bmad-method.org/plan/write-and-slice-the-initiative/)
- [BMad Method: Build and verify](https://docs.bmad-method.org/build/build-and-verify/)
- [BMad Method: Ticket Tree](https://docs.bmad-method.org/reference/ticket-tree/)
- [Copilot: Customization Cheat Sheet](https://docs.github.com/en/copilot/reference/customization-cheat-sheet)
- Demo & Ablauf: `demo-projects/ekon30-talk-demo/README.md`
- Bestehende Repository-Inhalte: BMad, Context Engineering und GitHub Copilot

</v-clicks>

<!--
Die EKON-Seite positioniert den Track praxisnah: vom Copilot-Alltag bis zu Agent-Teams, die Spezifikationen in produktiven Code überführen.
-->

---
src: /special-slides/questions.md
---

---
src: /special-slides/thank-you.md
---
