---
layout: chapter
background: /aiops-monitoring-large.png
---

# Was ist AIOps?

::intro::

Künstliche Intelligenz trifft IT-Operations

<!--
Einführung in AIOps. Gartner hat den Begriff 2017 geprägt. Heute ist es ein Schlüsselkonzept für die Wartung moderner Softwaresysteme.

🎨 Image prompt: A satellite orbiting Earth with glowing data streams connecting ground stations, representing monitoring and observability at scale. Digital art, dark background with blue and purple accents similar to /devcontainer.jpeg.
-->

---
layout: image-right
background: /idea-new.png
hideInToc: true
---

# AIOps: Definition & Scope

<v-clicks>

- **AIOps** = Artificial Intelligence for IT Operations
- Geprägt von **Gartner (2017)**
- Kombination: **Big Data** + **Machine Learning**
- Angewendet auf:
  - 📊 Monitoring & Observability
  - 🚨 Incident Management
  - 🔍 Root Cause Analysis
  - 📈 Capacity Planning
  - ⚡ Auto-Remediation

</v-clicks>

<!--
AIOps wurde 2017 von Gartner definiert als die Anwendung von ML und Big Data auf IT-Operations. Es geht über einfache Alerting-Regeln hinaus — die KI erkennt Muster, korreliert Events und schlägt Lösungen vor.

Wichtig: AIOps ist nicht ein einzelnes Tool, sondern ein Paradigma. Es umfasst den gesamten Lifecycle von der Erkennung bis zur automatischen Behebung.

🎨 Image prompt: A lightbulb made of circuit boards and neural networks, glowing with warm blue light, representing AI-powered innovation. Digital art style similar to /idea-new.png.
-->

---
hideInToc: true
---

# AIOps-Pipeline

```mermaid {scale: 0.65}
graph LR
    A1[📋 Logs] --> A[🔄 Aggregation]
    A2[📊 Metriken] --> A
    A3[🔗 Traces] --> A
    A4[🔔 Events] --> A

    A --> C[🧠 ML-Analyse]

    C --> C1[Anomalie-<br/>Erkennung]
    C --> C2[Pattern<br/>Matching]
    C --> C3[Event-<br/>Korrelation]

    C1 --> D[🎯 Root Cause<br/>Identifikation]
    C2 --> D
    C3 --> D

    D --> F[⚡ Automation]

    F --> F1[Auto-<br/>Remediation]
    F --> F2[Ticket-<br/>Erstellung]
    F --> F3[Runbook<br/>Execution]

    style C fill:#6366f1,color:#fff
    style D fill:#f59e0b,color:#fff
    style F fill:#10b981,color:#fff
```

<!--
Die AIOps-Pipeline visualisiert: Daten aus verschiedenen Quellen (Logs, Metriken, Traces, Events) werden aggregiert, durch ML analysiert, Root Causes identifiziert und automatische Maßnahmen eingeleitet.

Drei Kernfähigkeiten der ML-Analyse: Anomalie-Erkennung (ist das normal?), Pattern Matching (haben wir das schon mal gesehen?) und Event-Korrelation (hängen diese Alerts zusammen?).

🎨 Image prompt: Not needed — this slide uses a mermaid diagram.
-->

---
layout: two-column
hideInToc: true
---

# AIOps vs. Traditional Ops

::left::

## Traditional Ops ❌

<v-clicks>

- **Regelbasierte** Alerts
- **Manuelle** Korrelation
- **Reaktiv**: Erst nach dem Ausfall
- Alert Fatigue: **Tausende** Alerts/Tag
- MTTR: **Stunden bis Tage**

</v-clicks>

::right::

<v-click>

## AIOps ✅

</v-click>

<v-clicks>

- **ML-basierte** Anomalie-Erkennung
- **Automatische** Event-Korrelation
- **Proaktiv**: Vor dem Ausfall
- Intelligentes Alerting: **Priorisiert**
- MTTR: **Minuten**

</v-clicks>

<!--
Der zentrale Unterschied: Traditional Ops ist regelbasiert und reaktiv — der Mensch stellt Schwellwerte ein und reagiert auf Alerts. AIOps nutzt ML um proaktiv Muster zu erkennen und Probleme zu lösen, bevor sie eskalieren.

Alert Fatigue ist ein reales Problem: Teams ignorieren 30-50% ihrer Alerts weil sie Rauschen sind. AIOps priorisiert und korreliert, sodass nur actionable Alerts durchkommen.

🎨 Image prompt: Split screen — left: chaotic ops dashboard with red alerts and overwhelmed operator; right: calm AIOps dashboard with green metrics and AI assistant. Digital art, dark theme.
-->
