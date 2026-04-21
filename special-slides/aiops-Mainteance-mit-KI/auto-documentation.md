---
layout: chapter
background: /bulb.jpeg
---

# Auto-Dokumentation im Vorbeigehen

::intro::

Jeder PR hinterlässt eine Spur

<!--
"Altsysteme dokumentieren im Vorbeigehen" — klingt unrealistisch? Ist es nicht. Aber es bedeutet nicht "einmal drüberfliegen und fertig". Es bedeutet: Jeder PR, jeder Bugfix, jedes Review hinterlässt ab jetzt eine Dokumentations-Spur.

🎨 Image prompt: A glowing lightbulb with documentation pages flowing out of it like a trail of knowledge, representing auto-documentation. Digital art, warm creative atmosphere similar to /bulb.jpeg.
-->

---
layout: image-right
background: /code-right.png
hideInToc: true
---

# PR Summaries & Living Docs

<v-clicks>

- **PR-Summaries**: Ein Klick → strukturierte Zusammenfassung
  - Was hat sich geändert?
  - Warum?
  - Welche Files betroffen?
- **Copilot Code Review**: Multi-Line Comments erklären Code-Intent
- **`@workspace`**: Ganze Codebase befragen
  - _"Wie funktioniert der Checkout-Flow?"_
- **60–71%** sagen: KI macht es einfacher, Codebases zu verstehen

</v-clicks>

<!--
Was heute konkret geht:

PR-Summaries: Ein Klick auf das Copilot-Icon generiert eine strukturierte Zusammenfassung. Marginaler Mehraufwand: null. Das ist die Definition von "im Vorbeigehen".

Copilot Code Review: Die automatischen Multi-Line-Comments erklären Code-Intent und dienen als lebende Dokumentation — bei jeder PR, automatisch.

@workspace in Copilot Chat: Du kannst eine ganze Codebase befragen und bekommst zusammenhängende Erklärungen.

Quellen:
- https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-for-pull-requests/creating-a-pull-request-summary-with-github-copilot
- https://github.blog/news-insights/research/survey-ai-wave-grows/

🎨 Image prompt: Code flowing from a PR into organized documentation pages, with AI icons connecting them. Digital art, clean technical style.
-->

---
hideInToc: true
---

# Peli's Agent Factory: 7 Dokumentations-Agenten

| Workflow | Aufgabe | Merge Rate |
|---|---|---|
| **Daily Doc Updater** | Doku täglich auf Korrektheit prüfen | **96%** (57/59) |
| **Glossary Maintainer** | Glossar synchron mit Codebase halten | **100%** (10/10) |
| **Doc Unbloat** | Aufgeblähte Doku vereinfachen | **85%** (88/103) |
| **Noob Tester** | Doku aus Anfänger-Perspektive testen | **43%** (9/21) |
| **Slide Deck Maintainer** | Präsentationen aktuell halten | **40%** (2/5) |
| **Multi-device Tester** | Playwright-Tests auf Mobile/Tablet/Desktop | **100%** (2/2) |
| **Blog Auditor** | Blogposts auf veraltete Code-Beispiele prüfen | 5/6 passed |

<v-click>

> _"We're using three different terms for the same concept"_ — Glossary Maintainer fand **Terminologie-Drift**

</v-click>

<!--
Das beste dokumentierte Beispiel kommt von GitHub selbst: Peli's Agent Factory — ein System aus 7 autonomen Agenten, die Dokumentation kontinuierlich pflegen.

Die Merge Rates sind beeindruckend: Der Daily Doc Updater hat 96%, der Glossary Maintainer sogar 100%. Die niedrigere Rate beim Noob Tester (43%) reflektiert den explorativen Charakter.

Alle Workflows laufen als autonome GitHub Actions — kein manueller Trigger nötig. Können per `gh aw add-wizard` in jedes Repo installiert werden.

Quelle: https://github.github.com/gh-aw/blog/2026-01-13-meet-the-workflows-documentation/

🎨 Image prompt: Not needed — this slide uses a data table.
-->

---
layout: image-right
background: /bulb.jpeg
hideInToc: true
---

# Die ehrlichen Grenzen

<v-clicks>

- **Tribal Knowledge**: KI erklärt _was_ Code tut, nicht _warum_ die Business-Entscheidung so fiel
- **Halluzinationsrisiko**: KI beschreibt manchmal selbstbewusst falsches Verhalten
- **Sprach-Qualität**: Python, C#, TS → gut. COBOL, Delphi → schwieriger
- **Punkt-in-Zeit**: Ohne CI/CD-Integration veraltet KI-Doku genauso

</v-clicks>

<v-click>

### Bottom Line:

> Nach 6 Monaten hast du eine überraschend gute Dokumentation — nicht weil jemand sich hingesetzt hat, sondern weil du Doku in den **normalen Entwicklungsflow** eingebaut hast.

</v-click>

<!--
Die ehrlichen Grenzen — wichtig für die Glaubwürdigkeit:

1. Tribal Knowledge: Die KI kann erklären WAS Code tut, aber nicht WARUM jemand vor 5 Jahren die Business-Entscheidung getroffen hat. Das bleibt ein Mensch-Problem.
2. Halluzinationen: Die KI beschreibt manchmal selbstbewusst Verhalten, das nicht stimmt. Human Review ist nicht optional.
3. Sprachqualität: Für mainstream Sprachen gut, für Nischen deutlich schwieriger.
4. Veraltung: Ohne Integration in CI/CD veraltet KI-generierte Doku genauso schnell.

Aber: "Im Vorbeigehen" heißt NICHT "einmal drüber fliegen". Es heißt: Jeder PR, jeder Bugfix, jedes Review hinterlässt eine Spur. Nach 6 Monaten = überraschend gute Doku.

🎨 Image prompt: A dimming lightbulb with some sparks, representing honest limitations alongside innovation. Digital art, warm but slightly darker tone.
-->

---
layout: cover
coverImage: /bulb.jpeg
hideInToc: true
---

<div class="flex flex-col h-full text-center justify-center">
  <h1>Demo: Auto-Dokumentation<br/>beim Bugfix</h1>
</div>

<v-click>
  <span/>
</v-click>

<!--
**DEMO 4: Auto-Dokumentation im Entwicklungsflow (ca. 5 Minuten)**

1. Öffne ein PR im GitHub Repository (ContainerShips API)
2. Zeige Copilot PR-Summary: Klick auf Copilot-Icon → generierte Zusammenfassung
3. Zeige die automatischen Copilot Code Review Comments mit Intent-Erklärungen
4. Im VS Code: Öffne Copilot Chat → @workspace "Wie funktioniert der ShipList-Endpunkt?"
5. Zeige die zusammenhängende Erklärung der gesamten Codebase
6. Abschluss-Prompt: "Aktualisiere die README für den Ships-Endpunkt basierend auf den aktuellen Änderungen."

**Key Message:** Ein einziger Prompt am Ende eines Bugfixes ersetzt 15 Minuten manuelle Dokumentation. DAS ist "im Vorbeigehen".

**Fallback:** Zeige vorbereitete Screenshots eines PR mit Copilot-generierter Summary und Review-Comments.

🎨 Image prompt: A developer writing a bug fix with AI automatically creating documentation trails behind the code changes, like a trail of light. Digital art, creative atmosphere.
-->
