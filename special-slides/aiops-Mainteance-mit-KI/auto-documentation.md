---
layout: chapter
chapterNumber: 5
background: /bulb.jpeg
---

# Auto-Dokumentation als Nebenprodukt

::intro::

Doku entsteht aus der Entwicklung, nicht als Extra-Task

<!--
Doku wird selten priorisiert.
Niemand steht morgens auf und denkt: "Geil, heute schreibe ich 30 Seiten Architektur-Doku!"
Solange das Team da ist, fragt man jemanden.
Sobald Leute gehen, wird fehlende Doku teuer.

Idee: Doku nicht als separaten Task behandeln, sondern als Nebenprodukt der Entwicklung.
-->


---
layout: image-right
background: /code-right.png
hideInToc: true
---

# Was heute schon geht: PR-Summaries & Living Docs

<br>

<v-clicks>

- **PR-Summaries**: Ein Klick → strukturierte Zusammenfassung
  - Was hat sich geändert, warum, welche Dateien?
- **Copilot Code Review**: Multi-Line-Kommentare erklären den Code-Intent
- **`@workspace`**: Fragen gegen die ganze Codebase
  - _"Wie funktioniert der Checkout-Flow?"_
- Laut GitHub-Surveys hilft KI vielen Devs, fremde Codebases schneller zu verstehen

</v-clicks>

<!--
Status quo ohne eigenes Tooling:

- PR-Summary: Klick auf das Copilot-Icon im PR → strukturierte Zusammenfassung der Änderungen.
- Copilot Code Review: Review-Kommentare, die nicht nur Styling anmerken, sondern erklären, was ein Block tut.
- @workspace in Copilot Chat: Kontext über die gesamte Codebase, z.B. "Wie funktioniert der Shipping-Flow?".

Offizielle Copilot-Doku (z.B. Cloud/Coding Agent):
- About GitHub Copilot cloud agent: https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/agents/cloud-agent/about-cloud-agent [web:82]
- Using Copilot agents & session logs: https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/track-copilot-sessions
- Blog: "GitHub Copilot: Meet the new coding agent": https://github.blog/news-insights/product-news/github-copilot-meet-the-new-coding-agent/
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

# Dokumentation aus Code

<br>

<v-clicks>

- **GitHub Actions + Copilot**: Doku-Generierung als CI/CD-Step
  - GitHub Copilot CLI
  - On-demand oder per Schedule (z.B. wöchentlich)
- **Copilot Coding Agent**: Issue zuweisen → Agent schreibt Doku-PR
- **GitHub Agentic Workflow**
  - Markdown beschreibt den Workflow
- Ergebnis: Pull Request mit generierten Docs
  - Team reviewt, korrigiert, ergänzt Domain-Wissen

</v-clicks>

<!--
GitHub Copilot bietet mehrere Ansätze für automatisierte Doku-Generierung:

[click] - GitHub Actions: GitHub Copilot CLI Docs generieren und als PR einstellen.
  On-demand (manuell getriggert) oder regelmäßig per Cron.

[click] - Copilot Coding Agent (github.com): Issue erstellen "Generate architecture docs for service X"
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

- Vorher: "Wir sollten mal Doku schreiben ..."
- Jetzt: Ein Lauf über einen Repo-Ordner:
  - mehrere Projekte auf einmal
  - Automatisch Markdown-Files als Kickstart bzw. lebende Doku
- Devs schreiben nicht mehr alles selbst, sondern:
  - prüfen
  - korrigieren
  - schließen Lücken

- Kontext-abhängig: Je besser der Kontext (Prompt, Doku in GitHub/Confluence/Jira) desto besser der Output
  - KI sieht nur Code & Docs, hat aber natürlich kein implizites Team-Wissen
</v-clicks>

<!--
- Ziel: Repos automatisch mit Dokumentation versorgen, die "Gut Genug" ist.
- Danach übernehmen die Teams: PR-Review auf die MD-Files, Anpassungen, Domain-Wissen ergänzen.

Human-in-the-loop ist nicht optional. Die KI kennt Code und Artefakte,
aber nicht alle Business-Entscheidungen, impliziten Randbedingungen oder Prozesse.
-->

---
layout: cover
background: /bulb.jpeg
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