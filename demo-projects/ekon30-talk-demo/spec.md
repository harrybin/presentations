# Spec · Sessions je Track

## Vorbereitete Klärungsfragen

1. Sind `KI` und `ki` derselbe Track? **Entscheidung:** Nein, exakt vergleichen.
2. Welche Reihenfolge haben Ergebnisse? **Entscheidung:** Reihenfolge des ersten Auftretens.
3. Wie behandeln wir leeren Track und leere Eingabe? **Entscheidung:** Leerer Track ist ein eigener Schlüssel; leere Eingabe liefert ein leeres Array.

## Akzeptanzkriterien

- Eingabe `KI, Delphi, KI, ki, ''` ergibt `KI:2, Delphi:1, ki:1, '':1`.
- Leere Eingabe ergibt ein leeres Array.
- Eingabe und deren Felder bleiben unverändert.
- Resultat darf nicht dieselbe Speicherstruktur wie die Eingabe verändern.
- Keine neuen Abhängigkeiten, keine GUI und keine Änderungen an den Tests.

## Grenzen

Der Vergleich ist exakt und case-sensitiv; keine zusätzliche Unicode-Normalisierung.
Das Beispiel enthält nur Track-Namen. Eine echte Anwendung braucht weitere fachliche Entscheidungen.
