BAUCHFIT 2.3 – BEREINIGTER ÜBUNGSKATALOG

Enthalten: neue App-Grundlage, Katalog mit Such- und Kategorienfilter, Detailansicht, Favoriten, JSON-Daten, lokale Originalbilder und CSV-Prüfliste.

Die alten 18 Übungen der früheren App wurden nicht übernommen. Die einzelnen Bilder stammen aus den separat von dir eingereichten Bilddateien. Ähnliche Varianten sind mit einem Hinweis versehen und wurden nicht stillschweigend gelöscht.

Noch nicht enthalten: Live-Timer, fertige 30-Tage-Challenges, Anmeldung/Supabase.

Bitte den gesamten Ordner auf HTTPS (z. B. GitHub Pages) veröffentlichen. Für Offlinebetrieb muss die App zunächst einmal online geladen werden.


VERSION 2.3.1 – BILDER-CACHE KORRIGIERT
- Service Worker nimmt jetzt alle Übungsbilder in den Offline-Cache auf.
- Cache-Version wurde erhöht, damit alte Cache-Inhalte ersetzt werden.
- Bei nicht ladbaren Bildern erscheint ein verständlicher Hinweis.
- Wichtig: Auf GitHub Pages den INHALT des Ordners BauchFit_2_0 hochladen, einschließlich des Ordners exercises. Nicht nur index.html hochladen.
- Für den ersten Test über die veröffentlichte HTTPS-Adresse öffnen; direktes Öffnen per Doppelklick (file://) kann das Laden von exercises.json verhindern.
