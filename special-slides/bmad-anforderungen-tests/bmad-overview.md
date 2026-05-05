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
- Intro: BMad kurz einordnen
- Publikumsfrage: Wer kennt BMad bereits?

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
- Kein Einzeltool, sondern Framework
- Strukturierter Einsatz spezialisierter KI-Agenten
- Ergänzung agiler Methoden, kein Ersatz
- Website: https://docs.bmad-method.org
- GitHub: https://github.com/bmad-code-org/BMAD-METHOD

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
- Call-to-Action: Start noch heute
- Kostenlos, Open Source
- Aktive Community
- Einstieg in ca. 5 Minuten: npx bmad-method install

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
- Kernmodell: 4 aufbauende Phasen
- Output je Phase als Input für nächste Phase
- Context Engineering als roter Faden
- Phase 1 optional, Phase 2 verpflichtend
- Quick Flow für kleine Vorhaben (Phase 1-3 überspringen)

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
- Über 12 spezialisierte Agenten
- Klar abgegrenzte Rollen und Expertise
- Zusammenarbeit über strukturierte Dokumente
- Party Mode: mehrere Agenten in einer Session

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
- Hauptunterschied: persistenter, strukturierter Kontext
- Direkte KI-Nutzung: Session-gebunden, Kontextverlust
- BMad: Kontextübergabe von Agent zu Agent

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
- Modulares Ökosystem
- Nur benötigte Module installieren
- Heutiger Fokus: TEA (Test Architect)
- Installation: npx bmad-method install -> Modul wählen

-->
