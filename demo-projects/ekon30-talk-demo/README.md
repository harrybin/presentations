# EKON 30 · Demo: Sessions je Track zählen

Ein gemeinsamer, bewusst kleiner roter Faden für zwei eigenständige Vorträge:
Ein Konferenzkatalog soll Sessions pro Track zählen. `KI` und `ki` sind dabei unterschiedliche Tracks.
Alle Daten sind synthetisch. Die Anwendung ist Delphi-kompatibles Object Pascal im FPC-Delphi-Modus.

Dieses Verzeichnis ist ein **Vortragsdemo**, nicht das separate Workshop-Repository.
Die Datei `context/copilot-instructions.md` ist absichtlich ein Demo-Fixture für explizit mitgegebenen Prompt-Kontext, keine Repository-Anweisung.

## Vorbereitung und Bedienung

- Node.js 24+, Free Pascal mit `fpc` im PATH, VS Code mit angemeldetem GitHub Copilot und die Erweiterung **Demo Time**.
- `node demo.mjs prepare` erstellt `.run/baseline` und `.run/solution` aus den versionierten Fixtures und kopiert die beiden Akte aus `demotime/` nach `.run/baseline/.demo/`.
  Sind die Ordner bereits vorhanden, werden sie nicht überschrieben. Änderungen zuerst sichern;
  nur `node demo.mjs prepare --reset` löscht `.run` samt Änderungen ausdrücklich und stellt es neu her.
- Für eine komplette Neuinitialisierung `.run/baseline` in VS Code schließen und im Demo-Verzeichnis `node demo.mjs prepare --reset` ausführen. Dieser Befehl löscht beide generierten Workspaces und alle dortigen Änderungen.
- Anschließend ausschließlich `.run/baseline` als **eigenen VS-Code-Ordner** öffnen. Im Demo-Time-View den Akt `EKON 30 · Spec-Driven Development` oder `EKON 30 · AI Context Setup` starten.
- `prepare` initialisiert `.run/baseline` als eigenes lokales Git-Repository und setzt `git.openRepositoryInParentFolders` auf `never`. So öffnet VS Code nicht zusätzlich das Präsentations-Repository als Git-Root; die Demo bleibt auf den isolierten Arbeitsordner begrenzt.
- Die erste Szene jedes Akts setzt nur `.run/baseline/SessionCatalog.pas` auf die Baseline zurück; andere Dateien bleiben unangetastet. So ist eine Wiederholung ohne Neuaufbau des Workspaces möglich.
- Läuft eine Live-Antwort rechtzeitig ein, die unmittelbar folgende Fallback-Szene überspringen. Nach 45 Sekunden (Fragen, Plan und Context-Stationen) bzw. 60 Sekunden (SDD-Agent-Station) wechselt Demo Time automatisch in den vorbereiteten Fallback. Fallback-Szenen sind jeweils der nächste Schritt und können nach der Erläuterung manuell verlassen werden.
- `node demo.mjs test baseline` muss fehlschlagen: Der absichtlich eingebaute Fehler fasst `KI` und `ki` zusammen.
- `node demo.mjs test solution` muss erfolgreich sein. `node demo.mjs diff` zeigt beide Implementierungen.
- Die versionierten Akte unter `demotime/` sind Vorlagen; nur die nach `.run/baseline/.demo/` kopierten Akte sind für diesen Workspace bestimmt.
- Die Demo-Time-Terminalaktionen erwarten ein Terminal im Workspace `.run/baseline`. Nicht den Präsentations-Root als Copilot-Arbeitsbereich nutzen.
- Folien und diesen Ablauf offline bereithalten. Copilot-Anmeldung und Antworten vorab überprüfen.

Für den SDD-Akt wird BMad Method ausschließlich im isolierten `.run/baseline` installiert.
Voraussetzungen sind Node.js, npm, Git, `uv` und ein VS-Code-Copilot-Client mit Skill-Unterstützung.
Prüfe die Installationswarnungen und Berechtigungen; installiere die Skills nicht im Präsentations-Root.
Nach `prepare` im `.run/baseline`-Ordner ausführen:

```powershell
npx skills add bmad-code-org/BMAD-METHOD --skill bmad --skill bmod-core-tools --skill bmod-method --skill bmad-agent-po --skill bmad-build
```

In VS Code im selben Ordner die `bmad`-Skill-Einrichtung und Version prüfen:

```text
Run bmad setup
Run bmad status
```

`bmad-build` erwartet einen frischen Chat und einen sauberen Git-Arbeitsbaum. Nach der Einrichtung
den vorbereiteten isolierten Workspace lokal initial committen:

```powershell
git add -A
git -c user.name="Demo Presenter" -c user.email="demo@example.invalid" commit -m "chore: prepare isolated demo"
```

Im zweiten Schritt sichert `node demo.mjs prepare-bmad-ticket` das Ticket aus Sofias Ausgabe; falls es fehlt,
legt der Befehl die vorbereitete Fallback-Spec an. Er committet ausschließlich diese eine Ticketdatei.
Keiner dieser lokalen Commits wird gepusht. Für eine vollständige Wiederholung `.run` mit
`prepare --reset` neu erstellen und die BMAD-Einrichtung im neuen `.run/baseline` erneut durchführen.

Die `solution` ist eine **vorbereitete Referenzimplementierung**, kein behauptetes Copilot-Ergebnis.
Die Demo-Time-Akte führen die Stationen und Zeitlimits; Die vorbereitete `solution` ist nur Fallback
und Referenz. Versionierte Vorlagen nie in einem Live-Agent-Lauf überschreiben lassen. Für einen
vollständigen Neuaufbau gilt weiterhin ausdrücklich `prepare --reset`; der erste Akt-Schritt setzt
nicht den gesamten Workspace, sondern nur die Baseline-Implementierung zurück.

## Aktdateien

- `demotime/sdd-talk.json` → `.run/baseline/.demo/sdd-talk.json`
- `demotime/context-setup-talk.json` → `.run/baseline/.demo/context-setup-talk.json`

Beide Dateien verwenden Demo-Time-Schema v3 (`scenes`/`moves`). Copilot-Aktionen senden die
vorbereiteten Prompts; `#file:`-Referenzen markieren den vorgesehenen Kontext. Vor dem Vortrag
prüfen, dass Demo Time die Akte lädt, Copilot angemeldet ist und die Referenzen im verwendeten
Copilot-Client als Kontext aufgelöst werden. Wenn nicht, die betreffenden Dateien manuell anfügen.
Aktuelle Referenz: [Demo Time v3 Schema](https://demotime.show/demo-time.schema.json),
[Copilot-Aktionen](https://demotime.show/actions/copilot/), [Datei-Aktionen](https://demotime.show/actions/file/),
[Text-Aktionen](https://demotime.show/actions/text/) und [Terminal-Aktionen](https://demotime.show/actions/terminal/).

## Vortrag 1 · Spec-Driven Development

Der SDD-Akt ist ein zusammenhängender Demo-Faden: dieselbe Story und dasselbe Ticket führen von der Klärung
über den Build-Plan bis zur geprüften Änderung. Nur für die saubere Build-Sitzung wechselt der Chat;
Ticket und fachlicher Scope bleiben erhalten. Die Zeitboxen gelten relativ zum Start des Akts und enthalten Prompt-Wartezeit,
Wechsel, Erläuterung, Test und gegebenenfalls
Fallback; keine Schritte werden zusätzlich eingeplant. Bei Zeitdruck spätestens zum
Ende der jeweiligen Phase wechseln und den Live-Pfad abkürzen.

| Demozeit | Live-Aktion | Abbruch / Fallback |
|---|---|---|
| 0:00–3:00 (3 Min.) | SDD-Akt: Sofia (`bmad-agent-po`) soll aus `prd.md` ein Standalone-Ticket für eine Story schreiben. Eine Frage beantworten, dann Ticket-Spec prüfen. | Nach spätestens 45 Sekunden ohne brauchbares Ticket: vorbereitete Ticket-Spec in `spec.md` zeigen. |
| 3:00–6:00 (3 Min.) | Im frischen Chat `bmad-build` mit dem Ticket starten; Vorgehen und Scope prüfen. | Nach 45 Sekunden: den vorbereiteten Offline-Plan in `plan.md` zeigen; keine zusätzliche Live-Generation. |
| 6:00–11:00 (5 Min.) | Build im selben Chat fortsetzen, nur `SessionCatalog.pas` ändern lassen und Ergebnis prüfen. | Nach 60 Sekunden oder bei falschem Scope: Agent abbrechen und vorbereitete Lösung, Test und Diff zeigen. Keine Korrekturschleife live. |

Vor dem Live-Agent-Lauf `node demo.mjs test baseline` ausführen und den absichtlichen Fehler kurz erklären.
Die Tests sind kein vollständiger Beweis für alle möglichen Eingaben; eine Freigabe bleibt beim Menschen.
Die Dateien `spec.md` und `plan.md` sind Offline-Fallbacks; nicht behaupten, dass sie live von BMAD erzeugt wurden.
Nach dem Agent-Lauf die echte Ausgabe und `git diff --no-index .run/solution/SessionCatalog.pas .run/baseline/SessionCatalog.pas` prüfen.
Dieser `git diff --no-index` gibt bei Unterschieden Exit-Code 1 zurück; das ist kein Testlauf.

### Schritt 1 · Sofia schreibt das Ticket

```text
/bmad-agent-po Schreibe aus #file:prd.md ein Standalone-Ticket für genau
eine Story und eine Build-Sitzung unter
_bmad-output/backlog/ticket-sessions-je-track.md. Stelle Rückfragen zu
offenen fachlichen Entscheidungen, statt Annahmen als Fakten einzutragen.
Nicht implementieren.
```

Wenn die Antwort brauchbar ist, Ticket-Spec und Entscheidung prüfen. Vor dem Build das erzeugte
Ticket lokal committen, damit der neue Chat mit sauberem Arbeitsbaum beginnt.

### Schritt 2 · Dasselbe Ticket wird geplant

```text
/bmad-build Baue das Standalone-Ticket „Sessions je Track zählen“ aus
_bmad-output/backlog. Untersuche das Repository, zeige offene Fragen und
deinen Build-Plan und pausiere vor Quellcodeänderungen für meine Freigabe.
Wenn ich den Offline-Fallback verwende, nimm #file:spec.md als Ticket-Spec.
```

### Schritt 3 · Den freigegebenen Plan umsetzen und prüfen

```text
Der Build-Plan für dasselbe Ticket ist freigegeben. Setze die Story nur in
SessionCatalog.pas um; ändere keine Tests oder anderen Dateien.
Bewahre Reihenfolge und Eingaben, führe die vorhandenen Pascal-Checks
aus und reviewe den Diff. Nichts pushen; das Ergebnis bleibt bis zu
meiner Prüfung im Status „built“.
```

`prepare-bmad-ticket` prüft, dass vor dem Build keine fremden Änderungen im Arbeitsbaum liegen.
`bmad-build` kann bei einem kleinen, risikoarmen Vorhaben einen Light-Path ohne ausführlichen Plan
wählen. Die Demo hält trotzdem vor Änderungen für die sichtbare menschliche Entscheidung an.
BMAD markiert den Build als `built`; erst die Person prüft das Ergebnis und markiert die Story `done`.
Offizielle Referenzen: [Installation](https://docs.bmad-method.org/start/install-bmad/),
[How BMad Works](https://docs.bmad-method.org/start/how-bmad-works/),
[Build and Verify](https://docs.bmad-method.org/build/build-and-verify/).

## Vortrag 2 · AI Context Setup

Die Demo-Zeitboxen gelten relativ zum Start des Akts. Die Stationen enthalten Prompt-Wartezeit,
Wechsel, Erläuterung, Test und gegebenenfalls
Fallback; keine Schritte werden zusätzlich eingeplant. Bei Zeitdruck spätestens zum
Stationsende wechseln und den Live-Pfad abkürzen.

Derselbe Katalog, aber eine andere Frage: Welcher Kontext gehört wohin?
Bei Bedarf `node demo.mjs prepare --reset` vor Beginn erneut ausführen.
Die Beispiele unter `context/` sind nur Vorlagen; sie werden nicht automatisch durch Copilot geladen.

| Demozeit | Live-Aktion | Abbruch / Fallback |
|---|---|---|
| 0:00–3:30 (3½ Min.) | Context-Akt: Prompt C1 erst mit `spec.md` und `SessionCatalog.pas`, dann identisch mit zusätzlicher `context/copilot-instructions.md` senden. Beobachtung vergleichen. | Je Antwort maximal 45 Sekunden. Danach `context/beobachtung.md` als vorbereitete Vergleichsfolie lesen. Keine automatische Anwendung oder Verbesserung behaupten. |
| 3:30–7:00 (3½ Min.) | `context/test-review.prompt.md` (Auftrag) und `context/catalog-review/SKILL.md` (Ablaufwissen) öffnen. Copilot um eine knappe Zuordnung bitten; Tool-Unterstützung erklären. | Antwort höchstens 45 Sekunden abwarten, dann die vorbereiteten Dateien vergleichen. Die Vorlagen bleiben außerhalb der aktiven `.github`-Pfade. |
| 7:00–11:00 (4 Min.) | `context/pascal-reviewer.agent.md` zeigen; Prompt C3 im Ask-Modus geben und den vorhandenen Baseline-Fehler testen. | Nach 45 Sekunden abbrechen; vorbereiteten Befund in `context/beobachtung.md` und Testausgabe zeigen. Kein MCP-Server und keine externe Schreibaktion nötig. |

### C1 · Derselbe Auftrag

```text
Prüfe die Track-Zählung anhand der bereitgestellten Dateien.
Nenne einen fachlich relevanten Randfall und einen überprüfbaren Test.
Ändere keine Dateien und starte keine Befehle.
```

Zuerst nur `spec.md` und `SessionCatalog.pas` hinzufügen; im zweiten Durchlauf zusätzlich
`context/copilot-instructions.md`. Falls das UI keine Dateireferenzen unterstützt, Inhalte explizit einfügen.
Antworten können gleich oder unterschiedlich ausfallen: **keinen Effekt und keine Tokenersparnis garantieren**.

### C3 · Prüfen statt unbemerkt ändern

```text
Lies spec.md, SessionCatalog.pas und CatalogTests.lpr.
Melde höchstens zwei konkrete Abweichungen mit Dateireferenz und
Begründung. Ändere keine Dateien und starte keine Befehle.
```

Die Agent-Datei veranschaulicht eine Reviewer-Rolle; ob Toolgrenzen technisch durchgesetzt werden,
hängt von der verwendeten Copilot-Oberfläche und deren Toolnamen ab. Im Zweifel Ask-Modus
und Berechtigungen prüfen; keinen echten Read-only-Schutz behaupten.
Für Tools/MCP reicht der reale lokale Compileraufruf: `node demo.mjs test baseline`.
Ein MCP-Server wäre nur für zusätzliche externe Fähigkeiten nötig und wird hier nicht gestartet.
