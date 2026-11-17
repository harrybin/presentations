# Offline Build-Plan-Referenz · keine BMAD-generierte Plan-Datei

1. **Vertrag prüfen:** `SessionData.pas`, die Ticket-Spec und `CatalogTests.lpr` lesen.
2. **Implementieren:** Nur `SessionCatalog.pas` ändern; exakten Stringvergleich verwenden,
   Zählung beim ersten Auftreten anlegen und vorhandenen Zähler erhöhen.
3. **Prüfen:** `node demo.mjs test baseline` nach der Änderung starten.
   Alle Checks müssen laufen; Testdatei und Datenvertrag dürfen nicht geändert werden.
   Diff mit dem Ticket vergleichen; ein grüner Test allein ist keine Freigabe.

Die drei Punkte zeigen eine vorbereitete Reihenfolge und sind keine live erzeugte
BMAD-Plan-Datei. `.run/solution` ist ausschließlich Offline-Fallback und Referenz.
