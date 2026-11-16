# Vorbereiteter Plan · kein live erzeugtes Agent-Ergebnis

1. **Vertrag prüfen:** `SessionData.pas`, `spec.md` und aufgerufene Checks lesen.
2. **Implementieren:** Nur `SessionCatalog.pas` ändern; exakten Stringvergleich verwenden,
   Zählung beim ersten Auftreten anlegen und vorhandenen Zähler erhöhen.
3. **Prüfen:** `node demo.mjs test baseline` nach der Änderung starten.
   Alle Checks müssen laufen; Testdatei und Datenvertrag dürfen nicht geändert werden.
   Diff mit Spec vergleichen, keine Freigabe allein wegen eines grünen Tests.

Task 2 hängt von Task 1 ab, Task 3 von Task 2. Die vorbereitete Lösung in
`.run/solution` dient ausschließlich als Offline-Fallback und Referenz.
