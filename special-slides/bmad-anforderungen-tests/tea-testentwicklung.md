---
layout: chapter
chapterNumber: 5
background: /bmad-tea-diagnostics.png

isDark: true
---

# Test Architect (TEA): Automatisierte Testfallentwicklung

::intro::

<br/>
<br/>

Vom PRD zur validierten Test-Suite — risikobasiert, automatisiert, auditierbar

<!--
- Kapitel 5: Herzstück des Talks (TEA)
- Leitfrage: Test-Suite direkt aus Spezifikationen?

-->

---
layout: image-right
background: /bmad-governance-control-center.png
hideInToc: true

---

# Was ist der Test Architect (TEA)?

<br/>

<v-clicks>

- **TEA** = Test Engineering Architect — BMad-Modul für Testing
- 9 spezialisierte **Workflows** für den kompletten Test-Lifecycle
- **Risk-based Testing** — P0-P3 Priorisierung (Wahrscheinlichkeit × Impact)
- **Release Gates** — evidenzbasierte Go/No-Go-Entscheidungen
- Integration mit dem **PRD** und **Architecture.md**
- Traceability: Jeder Test ist auf eine Anforderung zurückführbar

</v-clicks>

<!--
- TEA als eigenständiges BMad-Modul
- Basis: Core-Framework + Kontext aus PRD/Architecture
- Zweck: Testableitungen aus Spezifikation
- Installation: npx bmad-method install -> Test Architect (TEA)

-->

---
hideInToc: true

---

# TEA Workflow-Übersicht

<br/>
<br/>

```mermaid {scale: 0.52}
flowchart LR
    PRD["📄 PRD.md"]
    ARCH["🏗️ Architecture.md"]

    PRD --> TD
    ARCH --> TD

    TD["🎯 Test Design\n(TD)\nRisk-based\nTest Planning"]
    TD --> AT["⚡ ATDD\n(AT)\nFailing Acceptance Tests\nTDD"]
    TD --> TA["🤖 Test Automation\n(TA)\nCoverage Expansion"]
    
    TA --> RV["🔍 Test Review\n(RV)\nQuality Audit\n& Scoring"]
    AT --> RV

    RV --> TR["📊 Requirements Tracing\n(TR)\nCoverage Mapping\n+ Gate Decision"]
    TD --> NR["⚙️ NFR Assessment\n(NR)\nPerformance, Security,\nScalability"]
    NR --> TR

    TR --> GATE["🚦 Release Gate\nGo / No-Go"]

    style TD fill:#8a268c,stroke:#5f1f62,color:#ffffff
    style AT fill:#a13ea2,stroke:#6f2b70,color:#ffffff
    style TA fill:#6f1a70,stroke:#3d0f3d,color:#ffffff
    style RV fill:#9b2d9b,stroke:#631a63,color:#ffffff
    style TR fill:#5a145b,stroke:#2e082f,color:#ffffff
    style GATE fill:#4a0d4b,stroke:#2e082f,color:#ffffff
```

<!--
- TEA-Flow: PRD -> Test Design -> ATDD -> Automation -> Gate
- Jeder Schritt mit auditierbaren Artefakten
- Requirements Tracing: Test zu Anforderung zuordenbar
- Release Gate: evidenzbasiert
- Gate-Fragen: P0 grün? Coverage-Ziel erreicht?

-->

---
layout: image-left
background: /bmad-risk-lock.png
hideInToc: true

---

# Risk-based Testing: P0-P3 Priorisierung

<br/>
<br/>

| Priorität | Kriterien | Beispiel |
|-----------|-----------|---------|
| **P0 🔴** | System-kritisch, Datenverlust | Auth, Payment |
| **P1 🟠** | Hoher Business-Impact | Checkout, Reports |
| **P2 🟡** | Medium Impact | E-Mail Notifications |
| **P3 🟢** | Niedrig, Nice-to-have | UI Farben, Tooltips |

<v-click>

> 💡 Formel: **Priorität = Wahrscheinlichkeit × Impact**

</v-click>

<!--
- Risk-based Testing: bekanntes Prinzip, systematisch mit TEA
- Analysebasis: PRD + Architecture
- Automatische Priorisierung durch TEA-Agent
- Gate-Regel: P0 immer 100% grün
- Zielwerte: P1 >= 95% Abdeckung
- P2/P3 abhängig von Ressourcen

-->

---
layout: image-right
background: /bmad-agent-fleet.png
hideInToc: true

---

# ATDD: Tests vor dem Code

<br/>

<v-clicks>

- **ATDD** = Acceptance Test-Driven Development
- TEA generiert **failing Acceptance Tests** aus PRD-Anforderungen
- Tests dokumentieren die **erwartete Verhaltensweise**
- Erst wenn Tests **grün** sind → Anforderung erfüllt
- Verhindert: "Works on my machine" Syndrome

</v-clicks>

<v-click>

```gherkin
Feature: User Authentication
  Scenario: Successful SSO Login
    Given a user with valid enterprise credentials
    When they click "Login with SSO"
    Then they are authenticated within 2 seconds
    And their role is set based on RBAC mapping
```

</v-click>

<!--
- ATDD als Brücke zwischen Anforderung und Test
- Gherkin-Szenarien aus PRD-Akzeptanzkriterien
- Umsetzung bis Tests grün
- Tests als lebende Spezifikation
- Immer aktuell, immer ausführbar

-->

---
layout: image-right
background: /bmad-human-ai-copilot.png
hideInToc: true

isDark: true
---

# 🎬 Demo 3: TEA Test Design Workflow

<br/>
<br/>

<v-click>

```bash
# TEA Agent laden
bmad-tea

# Test Design aus PRD starten  
test-design

# ATDD: Failing Acceptance Tests generieren
bmad-atdd

# Requirements Tracing: Abdeckung prüfen
bmad-testarch-trace
```

</v-click>

<!--
- Demo 3: TEA in Aktion
- Basis: PRD aus Demo 1 (Auth-System)
- Aktivierung: bmad-tea
- Schritt 1: test-design (Anforderungsanalyse)
- Schritt 2: Risk Matrix erzeugen (P0/P1/P2)
- Schritt 3: bmad-atdd (failing Acceptance Tests)
- Schritt 4: Gherkin-Szenarien zeigen
- Schritt 5: bmad-trace für Tracing
- Highlight: Test -> FR/NFR-Verknüpfung
- Highlight: Coverage-Map mit Lücken
- Highlight: Release Gate bei fehlender P0-Abdeckung
- Fallback: vorbereitete Test-Files

-->

---
layout: two-column
hideInToc: true

---


::left::

```mermaid {scale: 0.45}
graph LR
    subgraph S1["Functional Requirements"]
        direction TB
        FR1["FR-001\nSSO Login"] --> TC1["TC-001\nSSO Happy Path\n🟢 P0"]
        FR1 --> TC2["TC-002\nSSO Timeout\n🟢 P0"]
        FR1 --> TC3["TC-003\nSSO Token Refresh\n🟠 P1"]
        FR2["FR-002\nRBAC"] --> TC4["TC-004\nAdmin Role\n🟢 P0"]
        FR2 --> TC5["TC-005\nRole Escalation\n🟢 P0"]
    end
    subgraph S2["Non-Functional Requirements"]
        direction TB
        NFR1["NFR-001\n99.9% Uptime"] --> TC6["TC-006\nLoad Test\n🟠 P1"]
        NFR1 --> TC7["TC-007\nFailover Test\n🟠 P1"]
        NFR2["NFR-002\nGDPR"] --> TC8["TC-008\nData Deletion\n🔴 P0 MISSING"]
    end

    style TC8 fill:#4a0d4b,stroke:#2e082f,color:#ffffff
    style FR1 fill:#8a268c,stroke:#5f1f62,color:#ffffff
    style FR2 fill:#8a268c,stroke:#5f1f62,color:#ffffff
    style NFR1 fill:#a13ea2,stroke:#6f2b70,color:#ffffff
    style NFR2 fill:#a13ea2,stroke:#6f2b70,color:#ffffff
```

::right::

## Requirements Tracing: Lückenlos

<v-click>

> ⚠️ **TC-008 fehlt** → Release Gate: NO-GO bis GDPR-Test implementiert

</v-click>

<!--
- Requirements Tracing in Aktion
- Jede Anforderung mit Tests verknüpft
- Lücken sofort sichtbar
- Keine "genug Tests"-Diskussion ohne Evidenz
- Transparentes Gate: P0 grün und vollständig abgedeckt

-->

---
layout: image-right
background: /bmad-governance-control-center.png
hideInToc: true

---

# NFR Assessment: Nicht-funktionale Anforderungen

<br/>
<br/>

<v-clicks>

- TEA testet auch **NFRs** systematisch
- **Performance**: Load Tests, Latenz-Messungen
- **Security**: OWASP-basierte Sicherheitstests
- **Scalability**: Lasttest-Szenarien
- **Reliability**: Chaos Engineering Tests
- **GDPR/Compliance**: Datenschutz-Validierung

</v-clicks>

<v-click>

```bash
# NFR Assessment starten:
bmad-testarch-nfr
```

</v-click>

<!--
- NFRs häufig unterpriorisiert
- TEA integriert NFR-Tests von Beginn an
- Beispiel Auth-System:
- Performance: Login < 500ms bei 10.000 gleichzeitigen Usern
- Security: SQLi, XSS, CSRF automatisch prüfen
- GDPR: Datenlöschung vollständig verifiziert

-->
