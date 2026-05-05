---
layout: chapter
chapterNumber: 2
background: /bmad-agent-fleet.png
showCopyright: false
isDark: true
---

# Die BMad-Methode

::intro::

KI-gesteuertes agiles Entwickeln vom ersten Gedanken bis zum Deployment

<!--
Einführung in BMad. Frage ans Publikum: "Wer kennt BMad bereits?"

-->

---
layout: image-right
background: /bmad-ai-lightbulb.png
hideInToc: true
showCopyright: false
---

# Was ist BMad?

<v-clicks>

- **B**uild **M**ore **A**rchitect **D**reams
- 100% **Open Source** (MIT Lizenz)
- KI-gesteuertes Framework für **gesamten SW-Entwicklungs-Lifecycle**
- Spezialisierte **KI-Agenten** als Experten-Kollaborateure
- Grounded in **agilen Methoden**
- Unterstützt: Claude Code, Cursor, GitHub Copilot, Codex CLI

</v-clicks>

<!--
BMad ist kein einzelnes Tool — es ist ein Framework, das KI-Agenten strukturiert einsetzt.
Wichtig: BMad ersetzt keine agilen Methoden, sondern setzt sie mit KI-Unterstützung um.

Website: https://docs.bmad-method.org
GitHub: https://github.com/bmad-code-org/BMAD-METHOD

-->

---
layout: image-right
background: /bmad-agent-fleet.png
hideInToc: true
showCopyright: false
---

# Erste Schritte mit BMad

<br/>

<v-clicks>

1. **Installieren**: `npx bmad-method install`
2. **Tutorial starten**: `bmad-help` für intelligente Führung
3. **Klein anfangen**: Quick Flow für das nächste kleine Feature
4. **TEA hinzufügen**: `npx bmad-method install` → TEA Modul
5. **Community**: Discord, GitHub, YouTube

</v-clicks>

<v-click>

```
🌐 docs.bmad-method.org
📦 npmjs.com/package/bmad-method  
```

</v-click>

<!--
Call-to-Action: Was können die Zuhörer heute noch tun?

BMad ist komplett kostenlos und Open Source.
Die Community ist aktiv und hilfreich.
Der Start mit npx bmad-method install dauert 5 Minuten.

-->

---
hideInToc: true
showCopyright: false
---

## BMad: 4 Phasen, 1 Framework

### Klissischer Prozess, kein (A)TDD

<br/>

```mermaid {scale: 0.7}
flowchart LR
    P1["🔍 Phase 1\nAnalyse\n(Optional)"] --> P2["📋 Phase 2\nPlanung\n(Required)"]
    P2 --> P3["🏗️ Phase 3\nSolutioning"]
    P3 --> P4["⚙️ Phase 4\nImplementierung"]

    P1 -.- A1["Brainstorming\nResearch\nProduct Brief\nPRFAQ"]
    P2 -.- A2["PRD.md\nUX-Spec"]
    P3 -.- A3["Architecture.md\nEpics & Stories"]
    P4 -.- A4["Code + Tests\nCode Review\nRetrospective"]

    style P1 fill:#831b84,stroke:#4f1250,color:#ffffff
    style P2 fill:#9b2d9b,stroke:#631a63,color:#ffffff
    style P3 fill:#b24cb2,stroke:#7b2f7b,color:#ffffff
    style P4 fill:#6f1a70,stroke:#3d0f3d,color:#ffffff
    style A1 fill:#f2e6f7,stroke:#9a5ca8,color:#1d0a2d
    style A2 fill:#f2e6f7,stroke:#9a5ca8,color:#1d0a2d
    style A3 fill:#f2e6f7,stroke:#9a5ca8,color:#1d0a2d
    style A4 fill:#5a145b,stroke:#2e082f,color:#ffffff
```

<!--
Das zentrale Framework: 4 Phasen, die aufeinander aufbauen.
Jede Phase produziert Dokumente, die der nächsten Phase als Kontext dienen.
Dies ist der Kern des Context Engineerings in BMad.

Phase 1 ist optional, Phase 2 ist obligatorisch.
Für kleine Projekte gibt es den "Quick Flow" der die Phasen 1-3 überspringt.

-->

---
layout: image-right
background: /bmad-agents-specialized-experts.png
hideInToc: true
showCopyright: false
---

# BMad Agenten: Spezialisierte KI-Experten

<br/>
<br/>
<br/>


<v-clicks>

- 🎯 **PM Agent** — Product Requirements, PRD-Erstellung
- 🏛️ **Architect Agent** — technische Entscheidungen, ADRs
- 👩‍💻 **Developer Agent** — Story-Implementierung, Code Review
- 🎨 **UX Agent** — User Experience Design
- 🔬 **Analyst Agent** — Research, Brainstorming
- 🧪 **TEA Agent** — Test Strategy & Automation *(Modul)*
- 🆘 **BMad-Help** — intelligenter Guide für "was als nächstes?"

</v-clicks>

<!--
BMad kommt mit über 12 spezialisierten Agenten. Jeder Agent hat sein eigenes Expertenwissen.
Das Besondere: Die Agenten kommunizieren über strukturierte Dokumente miteinander.

Party Mode: Mehrere Agenten können zusammen in einer Session arbeiten und diskutieren.

-->

---
layout: image-left
background: /bmad-human-ai-copilot.png
hideInToc: true
showCopyright: false
---

# BMad vs. "einfach KI fragen"

| Aspekt | KI direkt fragen | BMad-Methode |
|--------|-----------------|--------------|
| **Kontext** | verloren nach Session | persistent in Docs |
| **Qualität** | inkonsistent | strukturiert |
| **Trace** | keine Nachvollziehbarkeit | vollständig auditierbar |
| **Team** | einzelne Nutzung | kollaborativ |
| **Skalierung** | kleines Scope | enterprise-fähig |

<!--
Der entscheidende Unterschied: BMad schafft persistenten, strukturierten Kontext.
KI direkt fragen ist wie mit einem goldfish mit Gedächtnis zu arbeiten — jede Session startet von Null.
BMad baut Kontext auf, der von Agent zu Agent weitergegeben wird.

-->

---
layout: image-right
background: /bmad-governance-control-center.png
hideInToc: true
showCopyright: false
---

# BMad-Module: Das Ökosystem

<br/>

<v-clicks>

- 🧱 **BMad Method (BMM)** — Core Framework, 34+ Workflows
- 🔧 **BMad Builder (BMB)** — eigene Agenten & Workflows erstellen
- 🧪 **Test Architect (TEA)** — Risk-based Testing & Automation *(heute unser Fokus!)*
- 🎮 **Game Dev Studio** — Unity, Unreal, Godot Workflows
- 💡 **Creative Intelligence Suite** — Innovation & Design Thinking

</v-clicks>

<!--
BMad ist modular aufgebaut. Man installiert nur was man braucht.
Für uns heute besonders relevant: TEA — der Test Architect.

Installation: npx bmad-method install → Modul auswählen

-->
