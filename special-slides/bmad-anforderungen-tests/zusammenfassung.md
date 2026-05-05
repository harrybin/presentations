---
layout: chapter
chapterNumber: 6
background: /bmad-collaboration-requirements.png
showCopyright: false
isDark: true
---

# Die Lücke schließen: Von Business-Logik zur validierten Testsuite

::intro::

<br/>
<br/>

BMad als Brücke zwischen Anforderung, Architektur und qualitätsgesichertem Code

<!--
- Abschlusskapitel: Zusammenspiel aller Bausteine

-->

---
hideInToc: true
showCopyright: false
---

## Der komplette BMad-Workflow

```mermaid {scale: 0.45}
flowchart TD
    subgraph CONTEXT["Vor Test Design"]
    direction LR
    IDEA["💡 Idee / Problem"] --> BRIEF["📄 Product Brief\nbmad-product-brief"]
    BRIEF --> PRD["📋 PRD.md\nbmad-create-prd\n(PM Agent)"]
    PRD --> ARCH["🏗️ Architecture.md\nbmad-create-architecture (Architect Agent)"]
    ARCH --> CTX["⚙️ project-context.md\nbmad-generate-project-context"]
    end

    TD["🎯 Test Design <br/> bmad-tea → test-design (TEA Agent)"]

    subgraph EXECUTION["Nach Test Design"]
    direction LR
    ATDD["⚡ Failing Acceptance<br/>Tests<br/>bmad-atdd"]
    STORIES["📝 Epics & Stories<br/>bmad-create-epics-and-stories"]
    DEV["👩‍💻 Implementation<br/>bmad-dev-story<br/>(Dev Agent)"]
    TA["🤖 Test Automation<br/>bmad-automate"]
    TR["📊 Requirements Tracing<br/>bmad-trace"]
    GATE["🚦 Release Gate<br/>Go / No-Go"]
    ATDD --> DEV
    STORIES --> DEV
    DEV --> TA
    TA --> TR
    TR --> GATE
    end

    CONTEXT --> TD
    TD --> EXECUTION

    style IDEA fill:#9b2d9b,stroke:#631a63,color:#ffffff
    style PRD fill:#f2e6f7,stroke:#9a5ca8,color:#1d0a2d
    style TD fill:#7e2a80,stroke:#4f1250,color:#ffffff
    style GATE fill:#4a0d4b,stroke:#2e082f,color:#ffffff
```

<!--
- Gesamtflow: Idee bis Release Gate
- Nachvollziehbare Schritte, auditierbare Artefakte
- Geeignet für Solo bis Enterprise

-->

---
layout: image-right
background: /bmad-human-ai-copilot.png
hideInToc: true
showCopyright: false
---

# Qualitätssteigerung in der Praxis

<br/>

<v-clicks>

- 🔍 **Frühe Fehlererkennung** — Logikfehler in der Anforderungsphase
- 📋 **Vollständige Abdeckung** — kein Requirements ohne Test-Case
- 🚦 **Klare Release-Kriterien** — Go/No-Go auf Basis von Evidenz
- 📈 **Messbare Qualität** — Coverage, Risk-Level, Traceability
- 🔄 **Living Documentation** — Docs und Tests bleiben synchron

</v-clicks>

<v-click>

> 🎯 **Ziel**: Software, die tut was sie soll — nachweisbar und wiederholbar

</v-click>

<!--
- Qualitätsgewinne kompakt
- Community-Werte:
- 60-70% weniger spätere Requirement-Änderungen
- 50% schnellere PRD-Erstellung
- Nahezu 100% Requirement-zu-Test-Traceability

-->

---
layout: two-column
hideInToc: true
showCopyright: false
---

# Wann lohnt sich BMad?

::left::

## ✅ Ideal für

<v-clicks>

- Projekte mit **komplexen Business-Anforderungen**
- **Enterprise**-Umgebungen mit Compliance-Anforderungen
- Teams die **remote** oder **cross-functional** arbeiten
- Projekte wo **Auditierbarkeit** wichtig ist
- Wenn **KI-Coding-Tools** bereits im Einsatz sind

</v-clicks>

::right::

<v-click>

## ⚠️ Weniger geeignet

</v-click>

<v-clicks>

- Sehr kleine Projekte (< 1 Woche Scope)
- Schnelle Prototypen ohne langfristige Wartung
- Teams ohne KI-Tool-Integration
- Wenn kein Struktur-Investment möglich ist

</v-clicks>

<!--
- Ehrliche Einordnung: kein Silver Bullet
- Für kleine, kurzlebige Projekte oft zu viel Overhead
- Für produktive, wartbare Systeme klarer Mehrwert
- Einstieg: Quick Flow
- Skalierung: schrittweise zur vollen BMad Method

-->


---
layout: image-left
background: /bmad-ai-lightbulb.png
hideInToc: true
showCopyright: false
---

# Zusammenfassung

<v-clicks>

- 🎯 **Das Problem**: Vage Anforderungen kosten 100× mehr wenn spät entdeckt
- 🏗️ **BMad**: KI-gestütztes Framework mit spezialisierten Agenten
- 📋 **PRD**: Strukturierte Anforderungen durch PM-Agent-Dialog
- ⚙️ **Context Engineering**: Persistenter Kontext über alle Phasen
- 🧪 **TEA**: Tests direkt aus Spezifikationen, Risk-based, auditierbar
- 🚦 **Release Gate**: Evidenzbasierte Go/No-Go-Entscheidungen

</v-clicks>

<v-click>

> **"Die beste Zeit um Anforderungen zu präzisieren war gestern. Die zweitbeste Zeit ist jetzt."**

</v-click>

<!--
- Abschluss: alle Kernpunkte auf einem Slide
- Zitat als Merkanker (Baum-Pflanzen-Twist)
- Letzter Call-to-Action: bmad-method heute testen

-->
