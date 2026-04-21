# AIOps Research Content

## Sources & Key Data Points

### AIOps Definition
- Term coined by Gartner in 2017
- = AI for IT Operations
- Combines Big Data + Machine Learning applied to IT operations
- Key capabilities: Monitoring, Incident Management, RCA, Capacity Planning, Automation

### Root Cause Analysis
- Azure Copilot: Ask natural language questions → automatic diagnostic tool selection
- Application Insights Transaction Diagnostics: End-to-end Gantt chart across service boundaries
- Smart Detection: ML-based anomaly detection for failures, performance degradation, memory leaks
- Source: https://learn.microsoft.com/en-us/azure/copilot/troubleshoot-app-service
- Source: https://learn.microsoft.com/en-us/azure/azure-monitor/app/transaction-search-and-diagnostics
- Source: https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/proactive-diagnostics

### Technical Debt & Code Quality
- GitHub RCT (n=202): 53% more likely to pass all unit tests, +2.5% maintainability, +3.6% readability
- Accenture Enterprise: 84% more successful builds
- 60M+ Copilot Code Reviews, 12,000+ orgs, 1 in 5 reviews on GitHub
- WEX: ~30% more code shipped
- DORA warning: 25% more AI adoption → 7.2% less delivery stability (batch size trap)
- Sonatype: LLMs hallucinate dependency versions
- Source: https://github.blog/news-insights/research/does-github-copilot-improve-code-quality-heres-what-the-data-says/
- Source: https://github.blog/news-insights/research/research-quantifying-github-copilots-impact-in-the-enterprise-with-accenture/
- Source: https://github.blog/ai-and-ml/github-copilot/60-million-copilot-code-reviews-and-counting/
- Source: https://dora.dev/ai/gen-ai-report/

### Legacy Modernization
- Java 17→21 example: Spring WebFlow, all 1,177 tests passed
- OpenRewrite for code transformations
- Agent mode: scan → plan → transform → test → fix loop
- Source: https://github.blog/ai-and-ml/github-copilot/a-step-by-step-guide-to-modernizing-java-projects-with-github-copilot-agent-mode/

### Auto-Documentation
- PR Summaries: one-click structured summaries
- Copilot Code Review: multi-line comments as living documentation
- @workspace: query entire codebase
- 60-71% of developers say AI makes it easier to understand codebases
- Peli's Agent Factory: 7 autonomous documentation workflows
  - Daily Doc Updater: 96% merge rate (57/59 PRs)
  - Glossary Maintainer: 100% merge rate (10/10 PRs)
  - Documentation Unbloat: 85% (88/103 PRs)
- Source: https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-for-pull-requests/creating-a-pull-request-summary-with-github-copilot
- Source: https://github.github.com/gh-aw/blog/2026-01-13-meet-the-workflows-documentation/

### Governance
- Code Scanning Autofix: 2/3 of vulnerabilities auto-fixed, 90%+ alert type coverage, 7x faster remediation
- Copilot Coding Agent: secure by design (branch-only push, no self-approve, actions need human approval)
- Home Assistant: copilot-instructions.md with precise review rules
- DORA: 451% more AI adoption with clear acceptable-use policy
- DORA: 125% more team adoption with transparent job displacement communication
- DORA: 131% more adoption with dedicated learning time
- Source: https://github.blog/news-insights/product-news/found-means-fixed-introducing-code-scanning-autofix-powered-by-github-copilot-and-codeql/
- Source: https://dora.dev/ai/

### Key Statistics
- 97%+ of developers use AI tools at work (GitHub Survey 2024)
- 60M+ Copilot Code Reviews (March 2026)
- 451% more AI adoption with clear policy (DORA 2025)
- 125% more team adoption with transparent communication (DORA 2025)
- 131% more adoption with dedicated learning time (DORA 2025)
- 39% of developers trust AI "a little" or "not at all" (DORA)
