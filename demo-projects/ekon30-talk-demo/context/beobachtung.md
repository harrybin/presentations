# Vorbereiteter Fallback · keine aufgezeichnete Copilot-Antwort

Die Baseline verwendet `SameText`: Dadurch behandelt sie `KI` und `ki` als gleich.
Das widerspricht der Spec. `node demo.mjs test baseline` zeigt den konkreten Fehler.
Die Referenzlösung vergleicht die Strings exakt. `node demo.mjs test solution`
führt die gleichen vorhandenen Checks aus.

Instructions formulieren dauerhafte Regeln, das Prompt File startet eine konkrete
Prüfung, der Skill beschreibt wiederverwendbares Ablaufwissen und die Agent-Vorlage
eine Perspektive. Das lokale Compiler-Tool liefert tatsächliche Testausgabe.

Welche Dateien Copilot tatsächlich einbezieht und wie die Antwort ausfällt, muss
im verwendeten Client beobachtet werden. Gleiche Antworten sind ein gültiges Ergebnis.
