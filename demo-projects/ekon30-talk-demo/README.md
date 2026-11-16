# EKON 30 · Demo: Sessions je Track zählen

Ein gemeinsamer, bewusst kleiner roter Faden für zwei eigenständige 60-Minuten-Vorträge:
Ein Konferenzkatalog soll Sessions pro Track zählen. `KI` und `ki` sind dabei unterschiedliche Tracks.
Alle Daten sind synthetisch. Die Anwendung ist Delphi-kompatibles Object Pascal im FPC-Delphi-Modus.

Dieses Verzeichnis ist ein **Vortragsdemo**, nicht das separate Workshop-Repository.

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

Die `solution` ist eine **vorbereitete Referenzimplementierung**, kein behauptetes Copilot-Ergebnis.
Die Demo-Time-Akte führen die Stationen und Zeitlimits; die vorbereitete `solution` ist nur Fallback
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

**Gesamtzeit 60 Minuten:** 0:00–42:00 Vortrag, 42:00–53:00 Demos,
53:00–60:00 Abschluss und Fragen. Die folgenden Zeiten gelten ab **Vortragsminute 42**.
Die 11 Demo-Minuten enthalten Prompt-Wartezeit, Wechsel, Erläuterung, Test und gegebenenfalls
Fallback; keine Schritte werden zusätzlich eingeplant. Bei Zeitdruck spätestens zum
Stationsende wechseln und den Live-Pfad abkürzen.

| Demozeit / Vortragszeit | Live-Aktion | Abbruch / Fallback |
|---|---|---|
| 0:00–3:00 / 42:00–45:00 (3 Min.) | SDD-Akt: Prompt S1 senden. Eine Frage auswählen, dann getroffene Entscheidung und `spec.md` zeigen. | Nach spätestens 45 Sekunden ohne brauchbare Antwort: vorbereitete Fragen in `spec.md` zeigen. |
| 3:00–6:00 / 45:00–48:00 (3 Min.) | Prompt S2 um einen Plan bitten. Taskgrenzen und Testfälle abgleichen. | Nach 45 Sekunden: vorbereiteten `plan.md` verwenden; keine zusätzliche Live-Generation. |
| 6:00–11:00 / 48:00–53:00 (5 Min.) | Baseline-Test und Fehler zeigen; Prompt S3 im Agent Mode starten, **nur in `.run/baseline`**. Bei fertiger Antwort die Verifikationsszene ausführen. | Nach 60 Sekunden oder bei falschem Scope: Agent abbrechen und vorbereitete Lösung, Test und Diff zeigen. Keine Korrekturschleife live. |

Vor dem Live-Agent-Lauf `node demo.mjs test baseline` ausführen und den absichtlichen Fehler kurz erklären.
Die Tests sind kein vollständiger Beweis für alle möglichen Eingaben; eine Freigabe bleibt beim Menschen.
Die Plan- und Implementierungsartefakte sind vorbereitet; nicht behaupten, dass sie live vom Agenten erzeugt wurden.
Nach dem Agent-Lauf die echte Ausgabe und `git diff --no-index .run/solution/SessionCatalog.pas .run/baseline/SessionCatalog.pas` prüfen.
Dieser `git diff --no-index` gibt bei Unterschieden Exit-Code 1 zurück; das ist kein Testlauf.

### S1 · Fragen statt Raten

```text
Lies prd.md. Stelle höchstens drei konkrete Fragen zu fachlichen
Entscheidungen und Randfällen. Ändere keine Dateien. Triff keine
Annahmen als Fakten und schreibe noch keine Implementierung.
```

### S2 · Ein begrenzter Plan

```text
Lies spec.md, SessionCatalog.pas und CatalogTests.lpr.
Schlage höchstens drei Tasks mit Abhängigkeiten und prüfbaren
Ergebnissen vor. Ändere keine Dateien und starte keine Befehle.
```

### S3 · Eine Änderung, echte Tests

```text
Setze spec.md nur in SessionCatalog.pas um. Ändere keine Tests
oder anderen Dateien. Bewahre Reihenfolge und Eingaben.
Nutze Delphi-kompatibles Object Pascal. Führe selbst nichts aus;
nenne Änderungen und offene Punkte. Warte auf meine Prüfung.
```

## Vortrag 2 · AI Context Setup

**Gesamtzeit 60 Minuten:** 0:00–42:00 Vortrag, 42:00–53:00 Demos,
53:00–60:00 Abschluss und Fragen. Die folgenden Zeiten gelten ab **Vortragsminute 42**.
Die 11 Demo-Minuten enthalten Prompt-Wartezeit, Wechsel, Erläuterung, Test und gegebenenfalls
Fallback; keine Schritte werden zusätzlich eingeplant. Bei Zeitdruck spätestens zum
Stationsende wechseln und den Live-Pfad abkürzen.

Derselbe Katalog, aber eine andere Frage: Welcher Kontext gehört wohin?
Bei Bedarf `node demo.mjs prepare --reset` vor Beginn erneut ausführen.
Die Beispiele unter `context/` sind nur Vorlagen; sie werden nicht automatisch durch Copilot geladen.

| Demozeit / Vortragszeit | Live-Aktion | Abbruch / Fallback |
|---|---|---|
| 0:00–3:30 / 42:00–45:30 (3½ Min.) | Context-Akt: Prompt C1 erst mit `spec.md` und `SessionCatalog.pas`, dann identisch mit zusätzlicher `context/copilot-instructions.md` senden. Beobachtung vergleichen. | Je Antwort maximal 45 Sekunden. Danach `context/beobachtung.md` als vorbereitete Vergleichsfolie lesen. Keine automatische Anwendung oder Verbesserung behaupten. |
| 3:30–7:00 / 45:30–49:00 (3½ Min.) | `context/test-review.prompt.md` (Auftrag) und `context/catalog-review/SKILL.md` (Ablaufwissen) öffnen. Copilot um eine knappe Zuordnung bitten; Tool-Unterstützung erklären. | Antwort höchstens 45 Sekunden abwarten, dann die vorbereiteten Dateien vergleichen. Die Vorlagen bleiben außerhalb der aktiven `.github`-Pfade. |
| 7:00–11:00 / 49:00–53:00 (4 Min.) | `context/pascal-reviewer.agent.md` zeigen; Prompt C3 im Ask-Modus geben und den vorhandenen Baseline-Fehler testen. | Nach 45 Sekunden abbrechen; vorbereiteten Befund in `context/beobachtung.md` und Testausgabe zeigen. Kein MCP-Server und keine externe Schreibaktion nötig. |

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
