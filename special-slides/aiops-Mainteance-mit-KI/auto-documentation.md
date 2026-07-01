---
layout: chapter
chapterNumber: 5
background: /bulb.jpeg

---

# Dokumentations-Kickstarter

::intro::



<!--
⚠️ Speakerwechsel ⚠️
Fragen wer gerne Doku schreibt
-->


---
layout: image-right
background: /bulb.jpeg
hideInToc: true

---

# Das Problem
<br>

<v-clicks>

- Doku schreiben hat keine Priorität
- In Stressphasen fällt sie als Erstes weg
- Die Kosten kommen später:
  - Schlüsselperson geht
  - Legacy-System muss migriert werden
- Dann fehlt das Wissen, das vorher "jemand im Kopf hatte"

</v-clicks>

<!--
- Bei engen Terminen fallen zuerst Tests und Doku weg.
- Solange die Original-Teams da sind, fragt man jemanden.
- Nach 3-5 Jahren ist das Team durchrotiert, die Migration steht an, fehlende Doku wird zum Business-Risiko.

Überleitung: KI ist im Stack ohnehin vorhanden - also Doku aus Code plus bestehender Doku generieren.
-->



---
layout: image-right
background: /code-right.png
hideInToc: true

---

# Ohne Tooling

<br>

<v-clicks>

- **Code-Kommentare**
- **`@codebase`**: Fragen gegen die ganze Codebase
  - _"Wie funktioniert der Checkout-Flow?"_
- **PR-Summaries**: Ein Klick → strukturierte Zusammenfassung
  - Was hat sich geändert, warum, welche Dateien?

</v-clicks>

<!--
Status quo ohne eigenes Tooling:

- Ziemlich gut Code zu kommentieren
- @codebase in Copilot Chat: Kontext über die gesamte Codebase, z.B. "Wie funktioniert der Checkout-Flow?".
- PR-Summary: Klick auf das Copilot-Icon im PR → strukturierte Zusammenfassung der Änderungen.

Offizielle Copilot-Doku (z.B. Cloud/Cloud Agent):
- About GitHub Copilot cloud agent: https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/agents/cloud-agent/about-cloud-agent
- Using Copilot agents & session logs: https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/track-copilot-sessions
- Blog: "GitHub Copilot: Meet the new Cloud Agent": https://github.blog/news-insights/product-news/github-copilot-meet-the-new-coding-agent/
-->



---
layout: image-right
background: /code-right.png
hideInToc: true

---

# Dokumentation Automatisieren

<br>

<v-clicks>

- **GitHub Actions + Copilot**: Doku-Generierung als CI/CD-Step
  - GitHub Copilot CLI
  - On-demand oder per Schedule (z.B. wöchentlich)
- **Copilot Cloud Agent**: Issue zuweisen → Agent schreibt Doku-PR
- **GitHub Agentic Workflow**
  - Markdown beschreibt den Workflow
- Ergebnis: Pull Request mit generierten Docs
  - Team reviewt, korrigiert, ergänzt Domain-Wissen

</v-clicks>

<!--
GitHub Copilot bietet mehrere Ansätze für automatisierte Doku-Generierung:

[click] - GitHub Actions: GitHub Copilot CLI Docs generieren und als PR einstellen.
  On-demand (manuell getriggert) oder regelmäßig per Cron.

[click] - Copilot Cloud Agent (github.com): Issue erstellen "Generate architecture docs for service X"
  → Agent analysiert Repo autonom, öffnet PR mit Markdown-Doku.

[click] - Agentic Workflows erlauben mehrstufige Logik: Repo-Scan, Kontext-Aufbau, Doku-Output.

[click] - Human-in-the-loop bleibt: PR-Review durch das Team ist kein Optional-Step.
-->


---
layout: image-right
background: /bulb.jpeg
hideInToc: true

---

# Unterstützung durch KI

<br>

<v-clicks>

- "Wir sollten mal Doku schreiben ..."
- Ziel: "Wir haben Doku, die erstmal gut genug ist."
- Devs schreiben nicht mehr alles selbst, sondern:
  - prüfen / korrigieren
  - ergänzen
  - schließen Lücken
- Kontext-abhängig: Je besser der Kontext (Prompt, Doku in GitHub/Confluence/Jira) desto besser der Output
  - KI sieht nur Code & Docs, hat aber natürlich kein implizites Team-Wissen
</v-clicks>

<!--
[click]
- Ziel: Repos automatisch mit Dokumentation versorgen, die "Gut Genug" ist.
- Danach übernehmen die Teams: PR-Review auf die MD-Files, Anpassungen, Domain-Wissen ergänzen.

Human-in-the-loop ist nicht optional. Die KI kennt Code und Artefakte,
aber nicht alle Business-Entscheidungen, impliziten Randbedingungen oder Prozesse.
-->

---
layout: cover
background: /auto-documentation-demo-cover.png
hideInToc: true
title: Demo - Auto-Dokumentation

---

<div class="flex flex-col h-full text-center justify-center">
  <h1>Demo: Auto-Dokumentation</h1>
</div>

<v-click>
  <span/>
</v-click>

<!--
**DEMO: Doku-Agent – Batch-Lauf auf einem echten Repo (ca. 5-7 Minuten)**

Unser Tool: .NET 10 Console-App mit GitHub Copilot SDK + Spectre.Console als UI.
- Läuft aktuell manuell: Root-Folder angeben (z.B. "src"), findet Projekte in Subfoldern.
- Pro Projekt:
  - Technologie-Erkennung (.NET, Node, …) via Marker-Files + optionaler AI-Klassifikation.
  - Kontext: Projektdateien, File-Tree, relevante Source-Files.
  - Doku-Quellen: READMEs im Repo, Confluence-Seiten, Jira-Inhalte.
  - Generiert via Copilot SDK: Project overview, Technical requirements, Developer onboarding,
    Architecture, Project recommendations, Data model, Security overview, Testing strategy.
- Zielbild: als GitHub Action – on demand oder wöchentlich über 100+ Repos.

Demo-Ablauf:
1. Console-App im Terminal starten.
2. Root-Folder eines realistischen Repos angeben (Mono-Repo mit mehreren Services).
3. Zeigen, wie Projekte und Technologien erkannt werden.
4. Einen generierten Projekt-Ordner öffnen:
   - 01-ProjectOverview.md
   - 04-Architecture.md
   - 03-DevelopersOnboarding.md
5. Zeigen, was schon stimmt und wo Domain-Wissen fehlt.
6. Optional: dieselben Files als PR (als kämen sie aus einer GitHub Action).

**Kernaussage:** Statt 100+ Repos von Hand zu dokumentieren, schreibt der Agent die erste Version.
Das Team bringt sie auf Produktionsniveau.
-->
