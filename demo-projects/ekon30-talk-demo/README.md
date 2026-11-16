# EKON 30 · Demo: Sessions je Track zählen

Ein gemeinsamer, bewusst kleiner roter Faden für zwei eigenständige 60-Minuten-Vorträge:
Ein Konferenzkatalog soll Sessions pro Track zählen. `KI` und `ki` sind dabei unterschiedliche Tracks.
Alle Daten sind synthetisch. Die Anwendung ist Delphi-kompatibles Object Pascal im FPC-Delphi-Modus.

Dieses Verzeichnis ist ein **Vortragsdemo**, nicht das separate Workshop-Repository.

## Einmalige Vorbereitung

- Node.js 24+ und Free Pascal mit `fpc` im PATH; VS Code mit angemeldetem GitHub Copilot.
- `node demo.mjs prepare` erstellt `.run/baseline` und `.run/solution` aus den versionierten Fixtures.
  Sind die Ordner bereits vorhanden, werden sie nicht überschrieben. Änderungen zuerst sichern;
  nur `node demo.mjs prepare --reset` löscht `.run` samt Änderungen ausdrücklich und stellt es neu her.
- `node demo.mjs test baseline` muss fehlschlagen: Der absichtlich eingebaute Fehler fasst `KI` und `ki` zusammen.
- `node demo.mjs test solution` muss erfolgreich sein. `node demo.mjs diff` zeigt beide Implementierungen.
- `.run/baseline` als **eigenen VS-Code-Ordner** öffnen. Nicht den Präsentations-Root als Copilot-Arbeitsbereich nutzen.
- Ein zweites Terminal mit dem Demo-Verzeichnis als Arbeitsordner öffnen; `node demo.mjs`-Befehle dort ausführen.
- Folien und diesen Ablauf offline bereithalten. Copilot-Anmeldung und Antworten vorab überprüfen.

Die `solution` ist eine **vorbereitete Referenzimplementierung**, kein behauptetes Copilot-Ergebnis.
Alle Demo-Läufe sind unabhängig voneinander und beginnen mit `prepare` (bei Bedarf mit `--reset`).
Versionierte Vorlagen nie in einem Live-Agent-Lauf überschreiben lassen.

## Vortrag 1 · Spec-Driven Development

**Gesamtzeit 60 Minuten:** 0:00–42:00 Vortrag, 42:00–53:00 Demos,
53:00–60:00 Abschluss und Fragen. Die folgenden Zeiten gelten ab **Vortragsminute 42**.
Die 11 Demo-Minuten enthalten Prompt-Wartezeit, Wechsel, Erläuterung, Test und gegebenenfalls
Fallback; keine Schritte werden zusätzlich eingeplant. Bei Zeitdruck spätestens zum
Stationsende wechseln und den Live-Pfad abkürzen.

| Demozeit / Vortragszeit | Live-Aktion | Abbruch / Fallback |
|---|---|---|
| 0:00–3:00 / 42:00–45:00 (3 Min.) | `prd.md` öffnen; Prompt S1 in Copilot Chat senden. Eine Frage auswählen, dann getroffene Entscheidung und `spec.md` zeigen. | Nach spätestens 45 Sekunden ohne brauchbare Antwort: abbrechen, vorbereitete Fragen in `spec.md` zeigen. |
| 3:00–6:00 / 45:00–48:00 (3 Min.) | `spec.md` und `plan.md` zeigen; Prompt S2 um einen Plan bitten. Taskgrenzen und Testfälle abgleichen. | Nach 45 Sekunden: vorbereiteten `plan.md` verwenden; keine zusätzliche Live-Generation. |
| 6:00–11:00 / 48:00–53:00 (5 Min.) | Baseline-Test und Fehler zeigen; Prompt S3 im Agent Mode starten, **nur in `.run/baseline`**. Anschließend `node demo.mjs test baseline` und Diff der Datei prüfen. | Nach 60 Sekunden oder bei falschem Scope stoppen; `node demo.mjs test solution` und `node demo.mjs diff` zeigen. Keine Korrekturschleife live. |

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
| 0:00–3:30 / 42:00–45:30 (3½ Min.) | Den knappen Prompt C1 mit `spec.md` und `SessionCatalog.pas` als explizitem Kontext absenden. Die Regel in `context/copilot-instructions.md` zeigen und denselben Auftrag mit dieser Datei **explizit** wiederholen. Beobachtung vergleichen. | Jede Antwort maximal 45 Sekunden abwarten. Bei Verzögerung `context/beobachtung.md` als vorbereitete Vergleichsfolie lesen. Keine automatische Anwendung oder Verbesserung behaupten. |
| 3:30–7:00 / 45:30–49:00 (3½ Min.) | `context/test-review.prompt.md` (Auftrag) und `context/catalog-review/SKILL.md` (Ablaufwissen) öffnen. Copilot optional um eine knappe Zuordnung bitten; Tool-Unterstützung erklären. | Antwort höchstens 45 Sekunden abwarten, dann nur die vorbereiteten Dateien vergleichen. Die Vorlagen bleiben außerhalb der aktiven `.github`-Pfade. |
| 7:00–11:00 / 49:00–53:00 (4 Min.) | `context/pascal-reviewer.agent.md` zeigen; Copilot im Ask-Modus Prompt C3 geben, Tests unverändert lassen. `node demo.mjs test baseline` zeigt den vorhandenen Fehler. | Nach 45 Sekunden Agent-Antwort überspringen, vorbereiteten Befund in `context/beobachtung.md` und Testausgabe zeigen. Kein MCP-Server und keine externe Schreibaktion nötig. |

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
