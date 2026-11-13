# EKON 30 Workshop: GitHub Copilot von A bis Z

Dieses Repository ist das Arbeitsprojekt für den vierstündigen Hands-on-Workshop. Wir erweitern einen kleinen Session-Katalog Schritt für Schritt und prüfen Änderungen mit den eingebauten Node.js-Tests.

## Voraussetzungen

- Node.js 24 oder neuer
- Git
- VS Code mit den Erweiterungen **GitHub Copilot** und **GitHub Copilot Chat**
- GitHub-Konto mit Zugriff auf GitHub Copilot

## Start

```bash
git clone https://github.com/harrybin/ekon30-github-copilot-workshop.git
cd ekon30-github-copilot-workshop
npm test
```

Es werden keine npm-Pakete benötigt. Die Tests verwenden `node:test`.

## Workshop-Pfad

1. `exercises/01-completions.md` - Inline-Vorschläge und Next Edit
2. `exercises/02-chat.md` - Code verstehen, Fragen stellen, kleine Änderungen planen
3. `exercises/03-agent-mode.md` - Feature mit Plan, Tests und begrenztem Scope umsetzen
4. `exercises/04-instructions-prompts.md` - Projektregeln und wiederverwendbare Prompts
5. `exercises/05-skills-agents.md` - wiederholbaren Ablauf als Skill bzw. Agent-Rolle strukturieren
6. `exercises/06-tools-mcp.md` - optionale, sichere Tool-/MCP-Vertiefung
7. `exercises/07-capstone.md` - den eigenen Copilot-Workflow zusammenführen

Die Übungen sind unabhängig genug, um sie auch einzeln durchzuführen. Vor jeder Änderung Tests ausführen und den Diff selbst prüfen.

## Repository-Struktur

```text
src/                 Anwendungscode als Übungsgrundlage
tests/               ausführbare Verhaltenschecks
exercises/            geführte Aufgaben und Checkpoints
backlog/              Feature-Briefings für Agent Mode
.github/              Platz für Instructions, Prompts und Skills
```

## Sicher arbeiten

- Keine Zugangsdaten, personenbezogenen oder vertraulichen Projektinhalte in Prompts einfügen.
- Unbekannte Befehle und Tool-Berechtigungen vor Ausführung prüfen.
- Copilot-Ausgaben vor dem Übernehmen verstehen, testen und reviewen.
