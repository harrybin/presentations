---
layout: chapter
background: /technical-debt-large.png
---

# Technical Debt mit KI bekämpfen

::intro::

Was sagen die Daten wirklich?

<!--
Technical Debt ist oft politisch induziert: "seid schneller, billiger". Hilft KI wirklich dagegen? Die Antwort ist differenziert — und genau das macht sie glaubwürdig.

🎨 Image prompt: Two colleagues reviewing code together with AI assistance, a holographic display showing code quality metrics. Digital art, warm collaborative atmosphere similar to /brothers-1-large.jpg.
-->

---
layout: image-right
background: /datenlage-pro-right.png
hideInToc: true
---

# Die Datenlage: Pro ✅

<v-clicks>

- **GitHub RCT** (n=202):
  - **53%** wahrscheinlicher alle Unit Tests bestanden
  - +2,5% Maintainability
  - +3,6% Readability
- **Accenture Enterprise**:
  - **84%** mehr erfolgreiche Builds
- **Copilot Code Review** (60M+ Reviews):
  - **12.000+** Organisationen
  - **1 von 5** Reviews auf GitHub
  - WEX: **~30%** mehr Code shipped

</v-clicks>

<!--
Die Pro-Seite hat starke, belastbare Studien. Die GitHub RCT-Studie (randomisiert-kontrolliert, n=202) zeigt signifikante Verbesserungen bei Funktionalität, Maintainability und Readability.

Accenture bestätigt im Enterprise-Kontext: 84% mehr erfolgreiche Builds — also weniger kaputte Deployments.

Und bei WEX (Finanzdienstleister) sehen wir mit Copilot Code Review als Default ~30% mehr Code shipped, weil Reviews schneller und zuverlässiger sind.

Quellen:
- https://github.blog/news-insights/research/does-github-copilot-improve-code-quality-heres-what-the-data-says/
- https://github.blog/news-insights/research/research-quantifying-github-copilots-impact-in-the-enterprise-with-accenture/
- https://github.blog/ai-and-ml/github-copilot/60-million-copilot-code-reviews-and-counting/

🎨 Image prompt: Futuristic spaceships in formation representing efficient teamwork, digital art similar to /spaceships-right.jpg.
-->

---
layout: image-right
background: /governance-large.png
hideInToc: true
---

# Die Datenlage: Contra ⚠️

<v-clicks>

- **DORA Gen AI Report**:
  - 25% mehr KI-Adoption →
  - **7,2% weniger Delivery Stability**
  - Ursache: **Batch Size Trap**
- **Sonatype 2026**:
  - LLMs halluzinieren **Dependency-Versionen**
  - _"AI should not guess."_ — Brian Fox, CTO
- **Das politische Problem**:
  - 33% werden nach **Code-Quantität** gemessen
  - Glauben aber: **Qualität** sollte zählen

</v-clicks>

<!--
Jetzt die Contra-Seite — und die ist wichtig für die Glaubwürdigkeit.

DORA zeigt: 25% mehr KI-Adoption korreliert mit 7,2% weniger Delivery Stability. Warum? Die "Batch Size Trap" — KI erzeugt schneller mehr Code, der in größeren Batches reviewed werden muss. Schnellere Erzeugung ohne disziplinierte kleine Batches untergräbt die Qualität.

Sonatype warnt: LLMs halluzinieren bei Dependency-Empfehlungen — sie schlagen Versionen vor, die nicht existieren.

Zum politischen Punkt: Entwickler werden nach Quantität gemessen, wünschen sich aber Qualitäts-Metriken. KI kann hier den Hebel sein — aber nur mit Guardrails.

Quellen:
- https://dora.dev/ai/gen-ai-report/
- https://www.sonatype.com/state-of-the-software-supply-chain/introduction

🎨 Image prompt: A locked airplane with security warnings, representing the risks and constraints of AI adoption. Digital art similar to /plane-lock-left.jpg.
-->

---
hideInToc: true
---

# Die Qualitäts-Geschwindigkeits-Balance

```mermaid {scale: 0.65}
graph TB
    subgraph OHNE["❌ Ohne Guardrails"]
        A1[🚀 KI generiert<br/>schneller Code] --> B1[📦 Größere Batches]
        B1 --> C1[🐌 Langsamere Reviews]
        C1 --> D1[📉 Weniger Stabilität]
        D1 --> E1[💸 Mehr Technical Debt]
    end

    subgraph MIT["✅ Mit Guardrails"]
        A2[🚀 KI generiert<br/>schneller Code] --> B2[✂️ Kleine Batches<br/>erzwingen]
        B2 --> C2[🤖 Automatisiertes<br/>Code Review]
        C2 --> D2[✅ Tests + SCA/SBOM]
        D2 --> E2[📈 Schneller UND<br/>sauberer]
    end

    style OHNE fill:#450a0a,color:#fca5a5
    style MIT fill:#052e16,color:#86efac
    style E1 fill:#dc2626,color:#fff
    style E2 fill:#16a34a,color:#fff
```

<!--
Dieses Diagramm zeigt den entscheidenden Unterschied:

OHNE Guardrails: KI generiert schneller → größere Batches → langsamere Reviews → weniger Stabilität → mehr Technical Debt. Das ist die DORA-Warnung.

MIT Guardrails: KI generiert schneller → kleine Batches erzwingen → automatisiertes Code Review → Tests + SCA/SBOM → schneller UND sauberer.

Die Botschaft: KI löst das Technical-Debt-Problem nicht automatisch. Aber mit den richtigen Guardrails wird sie zum Hebel FÜR Qualität statt dagegen.
-->

---
hideInToc: true
---

# KI-Automatisierung bezüglich Technical Debt

| Einsatzstelle | Tool | Beispiel | Grad |
|---|---|---|---|
| **Security Vulns fixen** | Copilot Autofix (CodeQL) | SQL Injection → Parameterized Query, **2/3 auto-gefixt**, **7x schneller** | 🟢 |
| **Dependency-Upgrades** | Agent Mode + OpenRewrite | Java 17→21, **1.177 Tests grün** nach Auto-Upgrade | 🟢 |
| **Deprecated APIs** | Agent Mode + Test-Loop | `DateTime.Now` → `DateTimeOffset.UtcNow`, iteriert bis Tests grün | 🟢 |
| **Neuen Debt verhindern** | Copilot Code Review | Fehlende Hook-Deps, Endlosschleifen, **60M+ Reviews** | 🟡 |
| **Tech-Debt-Issues** | Coding Agent | Issue zuweisen → VM → Draft-PR mit Tests | 🟡 |
| **Legacy-Code verstehen** | `@workspace` Chat | _"Welche Klassen haben >500 Zeilen?"_ | 🔴 |

<v-click>

> 🟢 KI arbeitet autonom, Mensch merged. 🟡 KI getriggert, Mensch entscheidet. 🔴 Mensch promptet, KI beschleunigt.

</v-click>

<!--
Die zentrale Erkenntnis: Je regelbasierter die Debt-Art (Security-Fix, API-Replacement, Dependency-Upgrade), desto höher der Automatisierungsgrad. Je architektureller (God-Classes aufbrechen, Microservice-Schnitt), desto mehr bleibt beim Menschen.

Was vor 2 Jahren rein manuell war (Dependency-Upgrades mit 1.000+ Dateien), ist heute vollautomatisiert mit Test-Validierung.

Quellen:
- https://github.blog/news-insights/product-news/found-means-fixed-introducing-code-scanning-autofix-powered-by-github-copilot-and-codeql/
- https://github.blog/ai-and-ml/github-copilot/a-step-by-step-guide-to-modernizing-java-projects-with-github-copilot-agent-mode/
- https://github.blog/ai-and-ml/github-copilot/60-million-copilot-code-reviews-and-counting/
-->

---
layout: cover
coverImage: /technical-debt-large.png
hideInToc: true
---

<div class="flex flex-col h-full text-center justify-center">
  <h1>Demo: Copilot Code Review<br/>in Aktion</h1>
</div>

<v-click>
  <span/>
</v-click>

<!--
**DEMO 2: Copilot Code Review (ca. 7 Minuten)**

1. Öffne ein GitHub Repository mit Copilot Code Review aktiviert
2. Erstelle einen PR mit absichtlich problematischem Code:
   - Fehlende Dependency im React useCallback Hook
   - Potentielle Endlosschleife in Retry-Logik
   - Unvalidierter User-Input
3. Zeige wie Copilot Code Review automatisch triggered wird
4. Zeige die Multi-Line Comments mit Code-Fix-Vorschlägen
5. Demonstriere Batch-Autofix: mehrere Issues auf einmal fixen
6. Zeige die Stille bei gutem Code (29% der Reviews: kein Kommentar = kein Problem)

**Key Message:** "Copilot Code Review handles PR reviews, allowing teams to focus on complex tasks." — Suvarna Rane, Software Dev Manager, General Motors

**Fallback:** Screenshots der GitHub UI mit echten Copilot Code Review Comments zeigen.

🎨 Image prompt: Two developers collaborating with AI code review suggestions floating between them as holographic cards. Digital art, collaborative warm lighting.
-->
