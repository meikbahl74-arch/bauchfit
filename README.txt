BAUCHFIT 1.0 – START UND INSTALLATION
====================================

INHALT
- index.html             App-Oberfläche und Trainingslogik
- manifest.webmanifest   PWA-Metadaten
- sw.js                  Offline-Cache (Service Worker)
- icon.svg               App-Symbol

LOKAL TESTEN
Öffne index.html in einem modernen Browser. Die Trainingsfunktionen und lokale Speicherung funktionieren überwiegend auch lokal. Installation als PWA und Offline-Cache benötigen eine Bereitstellung über HTTPS oder localhost.

PWA INSTALLIEREN
1. Lade den gesamten Ordner auf einen HTTPS-Webserver (z. B. GitHub Pages) hoch.
2. Öffne die veröffentlichte URL im Browser und lade die Seite einmal vollständig.
3. Desktop: Installieren-Symbol im Browser oder Menü „App installieren“ verwenden.
4. iPhone: Seite in Safari öffnen → Teilen → „Zum Home-Bildschirm“.

FUNKTIONEN
- 30-Tage-Challenge mit Level-Auswahl und eigenem Fortschritt
- Individueller Trainingsgenerator (5–60 Minuten, Pause 0–90 Sekunden)
- Aufwärmen und Cool-down innerhalb der Gesamtdauer
- Live-Training mit Pause, Fortsetzen, Überspringen und Abbruch
- Lokale Speicherung und JSON-Export/-Import
- Dunkles Design mit Neongrün
- Offline-Cache nach erstem Laden über HTTPS

WICHTIGE HINWEISE
- Es wird kein Konto und kein Cloud-Dienst verwendet.
- Lokale Daten bleiben im jeweiligen Browser/auf dem Gerät. Exportiere regelmäßig eine Sicherungsdatei, um Datenverlust vorzubeugen.
- Dies ist eine erste vollständige App-Version; PWA-Installation, Offline-Verhalten und Timer sollten auf den tatsächlich verwendeten Geräten praktisch getestet werden.
- Training ist kein medizinischer Rat. Beende Übungen bei Schmerzen, Schwindel oder ungewöhnlicher Atemnot.
