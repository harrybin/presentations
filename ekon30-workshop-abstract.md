# Workshop Abstract: GitHub Copilot von A bis Z

**Konferenz:** EKON 30  
**Titel:** [GitHub Copilot von A bis Z](https://entwickler-konferenz.de/ki-praxis-und-tools-fuer-delphi/workshop-github-copilot-von-a-bis-z)  
**Dauer:** 3,5 Stunden

---

## Kurzbeschreibung

GitHub Copilot hat sich in kurzer Zeit zu einem der mächtigsten Werkzeuge für Softwareentwickler entwickelt – und es wird immer leistungsfähiger. In diesem praxisorientierten Halbtagsworkshop tauchen wir gemeinsam von den Grundlagen bis zu den Poweruser-Features tief in GitHub Copilot ein. Dabei nutzen wir VS Code als primäre Umgebung und zeigen, wie Copilot auch Delphi-Entwickler in ihrem Alltag unterstützen kann.

Wir beleuchten, warum GitHub Copilot unter den KI-Assistenten besonders für Entwicklerinnen und Entwickler geeignet ist: mehrere LLMs, speziell auf Programmieraufgaben trainierte Modelle, breite IDE-Unterstützung sowie Governance- und Sicherheitsfeatures für den Unternehmenseinsatz.

---

## Hands-on-Teil

Der Workshop ist bewusst übungsintensiv gestaltet. Nach jeder Themeneinheit folgt eine Praxisphase, in der die Teilnehmenden das Gelernte direkt ausprobieren:

- **Übungen zu Code Completions:** Erleben, wie Copilot im eigenen Schreibrhythmus Vorschläge macht und mit „Next Edit Suggestions" sogar den nächsten Schritt antizipiert.
- **Chat-Übungen:** Nutzung von z.B. `@terminal` und Slash-Commands für typische Entwicklungsaufgaben.
- **Plan & Agent Mode Live-Coding:** Einen komplexeren Task per natürlicher Sprache an Copilot delegieren und beobachten, wie er eigenständig plant, Dateien bearbeitet und iteriert.
- **Instruction Files erstellen:** Eine eigene `.instructions.md`-Datei anlegen, die Copilot an Coding-Standards und Projektkonventionen anpasst.
- **Skill Files erstellen:** Copilot mit eigenen Skills erweitern, z.B. für wiederkehrende Aufgaben oder projektspezifische Workflows.
- **MCP-Server Demo & Experiment:** Einen MCP-Server einbinden und Copilot damit um externe Datenquellen, Tools oder den Chat "erweitern".
- **Delphi-spezifische Übung:** VSCode mit der DelphiLSP-Extension einrichten und Copilot für Delphi-Code einsetzen.

---

## Inhaltsübersicht

- Warum GitHub Copilot? Stärken gegenüber anderen KI-Assistenten
- GitHub Copilot Übersicht: Editionen, IDE-Unterstützung, Lizenzmodell
- **Code Completions** – Inline-Vorschläge & Next Edit Suggestions
- **Copilot Chat** – Ask / Plan / Agent Mode
  - Chat Participants (`@workspace`, `@terminal`, `@vscode`)
  - Slash Commands & Chat Variables
- **Agent Mode** – autonome, mehrstufige Aufgabenbearbeitung
- **Instruction Files** – Copilot mit Projekt-Konventionen anpassen (Coding Standards, Bibliotheken, Namensgebung)
- **Skill Files** – Copilot mit eigenen Skills erweitern (z. B. für wiederkehrende Aufgaben)
- **Model Context Protocol (MCP)** – Copilot durch externe Tools und Datenquellen erweitern
- **GitHub Copilot mit Delphi** – VSCode + DelphiLSP-Extension, praktische Einrichtung
- Copilot auf der GitHub-Plattform (Pull Request Reviews, Commit Messages u. a.)
- Tipps & Tricks für den Entwickleralltag

---

## Voraussetzungen

### Vorkenntnisse

- Grundlegende Programmierkenntnisse (beliebige Sprache)
- Erste Erfahrungen mit einer IDE (VS Code-Kenntnisse von Vorteil, aber nicht zwingend)

### Notwendige Vorinstallationen *(bitte vor dem Workshop vorbereiten)*

- [Visual Studio Code](https://code.visualstudio.com/) (aktuellste Version)
- GitHub-Konto mit aktiver GitHub Copilot-Lizenz (Free, Pro oder Business) – eine kostenlose Free-Lizenz reicht aus
- VS Code Extension: **GitHub Copilot** + **GitHub Copilot Chat**
- *Optional für Delphi-Entwickler:* RAD Studio (oder Lazarus) installiert & VS Code Extension `EmbarcaderoTechnologies.delphilsp` 
- Git installiert

---

## Zielgruppe

**Beginner bis Intermediate** – Der Workshop setzt keine Vorkenntnisse mit GitHub Copilot voraus und erklärt alle Konzepte von Grund auf. Fortgeschrittene profitieren von den Poweruser-Themen (Agent Mode, MCP, Instruction Files). Delphi-Entwicklerinnen und -Entwickler erhalten speziell auf ihre Toolchain zugeschnittene Hinweise, alle anderen Teilnehmenden arbeiten mit VS Code und einer Sprache ihrer Wahl.

---

## Lernziele

Am Ende des Workshops wird jede Teilnehmerin und jeder Teilnehmer:

- verstehen, **wie GitHub Copilot intern funktioniert** und was gute Prompts ausmacht,
- **Code Completions und Chat** souverän im Entwickleralltag einsetzen können,
- den **Agent Mode** für komplexere, mehrstufige Aufgaben nutzen können,
- **Instruction Files** erstellen, um Copilot an eigene Projekte und Standards anzupassen,
- **Skill Files** erstellen, um Copilot mit eigenen Fähigkeiten zu erweitern,
- wissen, wie man Copilots Fähigkeiten mit **MCP-Servern** gezielt erweitert,
- und – sofern relevant – Copilot erfolgreich **mit Delphi in VS Code** einsetzen können.
