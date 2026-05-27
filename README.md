# Medica - Portal Kliniki 🏥

Wizualizacja portalu dla kliniki Medica. System jest całkowicie statyczną stroną internetową (HTML/CSS/JS), którą można uruchomić na GitHub Pages. Wszelkie dane są zhardcodowane w celach demonstracyjnych.

## Struktura portalu
* **Logowanie:** Dostęp dla pacjentów i lekarzy do ich paneli.
* **Panel Pacjenta:** Dostęp do własnej karty, historii chorób, leków, wyników badań, wizyt, dokumentów i notatek.
* **Panel Lekarza:** Podgląd swoich wizyt, możliwość wyszukiwania pacjentów i wejścia w ich kartę (wymagana data urodzenia), podgląd wyników badań zlecanych przez lekarza i jego dokumenty.

## Dane testowe (Sekrety)

### Lekarze
| Rola | Login | Hasło | Imię i Nazwisko |
| :--- | :--- | :--- | :--- |
| Lekarz | d.nowak | haslo123 | Dr. Anna Nowak |
| Lekarz | j.kowalski | haslo123 | Dr. Jan Kowalski |
| Lekarz | p.wisniewski | haslo123 | Dr. Piotr Wiśniewski |

### Pacjenci (i Daty Urodzenia wymagane dla lekarzy)
| Rola | Login | Hasło | Imię i Nazwisko | Data Urodzenia |
| :--- | :--- | :--- | :--- | :--- |
| Pacjent | a.mickiewicz | adam123 | Adam Mickiewicz | 1980-05-15 |
| Pacjent | j.slowacki | juliusz123 | Juliusz Słowacki | 1991-09-04 |
| Pacjent | b.prus | boleslaw123 | Bolesław Prus | 1975-08-20 |
| Pacjent | h.sienkiewicz | henryk123 | Henryk Sienkiewicz | 1960-05-05 |
| Pacjent | w.reymont | wladek123 | Władysław Reymont | 1985-07-07 |
| Pacjent | e.orzeszkowa | eliza123 | Eliza Orzeszkowa | 1990-06-06 |
| Pacjent | m.konopnicka | maria123 | Maria Konopnicka | 1995-10-10 |

## Instalacja / Uruchomienie
Projekt jest statyczny, aby go uruchomić wystarczy otworzyć plik `index.html` w dowolnej przeglądarce, lub opublikować za pomocą GitHub Pages. Wystarczy wejść w ustawienia repozytorium GitHub i włączyć "Pages" wskazując na branch `main` folder `root`.
