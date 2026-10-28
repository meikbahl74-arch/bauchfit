BAUCHFIT – SUPABASE-ANBINDUNG
============================

Enthaltene Erweiterungen
- Supabase E-Mail-Registrierung und Anmeldung
- Passwort-Zurücksetzen per E-Mail
- Synchronisierung des BauchFit-Profils und Trainingsverlaufs in die Cloud
- Benutzerbezogene Speicherung mit Row Level Security (RLS)
- Geschätzter Kalorienverbrauch bei abgeschlossenen Trainings, basierend auf Körpergewicht, aktiver Übungszeit und einer groben MET-Schätzung

EINRICHTUNG
1. Öffne das Supabase-Projekt, das in index.html konfiguriert ist.
2. Öffne SQL Editor > New query.
3. Öffne supabase_setup.sql, kopiere den gesamten Inhalt in den SQL Editor und klicke auf Run.
4. Öffne Authentication > URL Configuration. Setze Site URL auf die veröffentlichte BauchFit-Adresse. Ergänze diese Adresse bei Redirect URLs.
5. Unter Authentication > Providers > Email prüfen, dass E-Mail-Anmeldung aktiviert ist. Wenn E-Mail-Bestätigung aktiv ist, muss der Nutzer nach der Registrierung den Bestätigungslink anklicken.
6. Veröffentliche den gesamten Inhalt dieses Ordners auf HTTPS (z. B. GitHub Pages). Nicht nur index.html hochladen; Bilder, manifest, Service Worker und SQL-Hinweise müssen mitgeführt werden.
7. Öffne die veröffentlichte Website, klicke oben auf „Konto / Anmeldung“, registriere einen Testnutzer und bestätige ggf. die E-Mail.
8. Melde dich an, speichere ein Profil und schließe ein kurzes Training ab. Prüfe im Supabase Table Editor > bauchfit_user_data, dass nur eine Zeile für diesen Testnutzer mit dem eigenen state vorhanden ist.
9. Teste mit einem zweiten Testnutzer, dass dieser keine Daten des ersten Nutzers lesen kann. Die RLS-Regeln dürfen nicht deaktiviert werden.

WICHTIGE HINWEISE
- Der Publishable Key ist ein öffentlicher Browser-Schlüssel und darf im Frontend stehen. Niemals einen sb_secret_- oder service_role-Schlüssel in diese App einfügen.
- Diese Version synchronisiert den kompletten App-Zustand als JSONB-Datensatz pro Nutzer. Änderungen werden lokal sofort und mit kurzer Verzögerung in die Cloud geschrieben, sobald ein Nutzer angemeldet ist.
- Vor dem ersten Login bleiben vorhandene lokale Daten auf dem jeweiligen Gerät. Bei einem neuen Cloud-Konto ohne Datensatz wird der aktuell lokale Zustand als Startzustand hochgeladen.
- Kalorien sind Schätzwerte, keine Messung. Die Schätzung verwendet aktive Hauptübungszeit, Körpergewicht und pauschale Intensitätswerte. Sie kann je nach Tempo, Technik und individuellen Faktoren deutlich abweichen.
- Die Supabase-Verbindung wurde nicht live mit deinem Projekt getestet. Registrierung, E-Mail-Versand, RLS und Cloud-Speicherung müssen nach der Einrichtung praktisch geprüft werden.
