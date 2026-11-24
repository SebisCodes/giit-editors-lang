/* Polish texts of the QR editor: the bar, the work area (code, QR code,
   content, design, check), its dialogs and messages, and the problems the
   editor finds in the QR document. What all editors share is in common.js;
   how the dictionaries are used is described in i18n.js. Names of documents,
   design keys and values, colors and content formats stay as they are: the
   patterns copy them into the Polish text. */

import { formatTime, getPlural } from './format.js';

/* Polish plural: getPlural(5, 'strona', 'strony', 'stron') -> 'stron' (1 / 2-4, 22-24 … but not 12-14 / the rest) */

/* "0.25" -> "0,25" (decimal comma) */
/**
 * Writes the decimal separator of the language into a number.
 * @param {string} s - the number with a decimal point.
 * @returns {string} the text in the language.
 */
const formatDecimal = s => String(s).replace('.', ',');
/* "412 B" / "1.5 KB" / "523 bytes" -> Polish number and unit */
/**
 * Translates the unit of a size text ("123 bytes").
 * @param {string} s - the English size text.
 * @returns {string} the text in the language.
 */
const formatSize = s => {
    const m = /^(\d+) bytes$/.exec(s);
    return m ? `${m[1]} ${getPlural(m[1], 'bajt', 'bajty', 'bajtów')}` : s.replace(/^([\d.]+) (B|KB|MB)$/, (x, v, u) => `${formatDecimal(v)} ${u}`);
};

/* When a document was last changed (files.js): "just now", "5 min ago", "Oct 25, 2026" … */

/* The content types (payload.js TYPE_NAMES) where a message names them in English. */
const TYPES = {
    Link: 'Link', Text: 'Tekst', WiFi: 'Wi-Fi', Contact: 'Kontakt', Email: 'E-mail', SMS: 'SMS', Phone: 'Telefon', Location: 'Lokalizacja',
    Event: 'Wydarzenie', Crypto: 'Kryptowaluta', 'SEPA payment': 'Płatność SEPA', 'Swiss QR bill': 'Szwajcarski rachunek QR',
};
/* What a design value may be (qrdoc.js KEYS hint); lists of values stay as they are. */
/**
 * Translates the text the pattern found (hint in the English pattern).
 * @param {string} h - the English text the pattern found.
 * @returns {string} the text in the language.
 */
function translateHint(h) {
    const H = {
        'auto or 1 to 40': 'auto lub od 1 do 40', 'auto or 0 to 7': 'auto lub od 0 do 7', '0 to 20 modules': 'od 0 do 20 modułów',
        'a color like #1d2b53': 'kolor, np. #1d2b53', '0 to 360 degrees': 'od 0 do 360 stopni', 'a color like #ffffff, or transparent': 'kolor, np. #ffffff, lub transparent',
        '5 to 30 percent': 'od 5 do 30 procent',
    };
    if (H[h]) return H[h];
    const m = /^none, (.+) or a picture as (data:\S+)$/.exec(h);
    return m ? `none, ${m[1]} lub obraz jako ${m[2]}` : h;
}

export default {
    text: {
        /* ---------- Side panel: a drawer on the desktop ---------- */
        'Side panel': 'Panel boczny',
        'Show or hide the side panel': 'Pokaż lub ukryj panel boczny',
        'Module shape': 'Kształt modułów',
        'Eye frame': 'Ramka oka',
        'Eye center': 'Środek oka',
        /* ---------- Top bar ---------- */
        'QR Editor - home': 'Edytor QR - strona główna',
        'QR Editor': 'Edytor QR',
        'File': 'Plik',
        'My documents (Ctrl+O)': 'Moje dokumenty (Ctrl+O)',
        'My documents': 'Moje dokumenty',
        'New QR code': 'Nowy kod QR',
        'New': 'Nowy',
        'A web address - opens the page': 'Adres internetowy - otwiera stronę',
        'Join the network without typing the password': 'Połączenie z siecią bez wpisywania hasła',
        'vCard or MeCard - saves name, phone and email': 'vCard lub MeCard - zapisuje nazwisko, telefon i e-mail',
        'Adds a date to the calendar': 'Dodaje termin do kalendarza',
        'Address, subject and text': 'Adres, temat i treść',
        'Number and message': 'Numer i wiadomość',
        'Calls a number': 'Dzwoni pod numer',
        'Opens a place in the map app': 'Otwiera miejsce w aplikacji map',
        'EPC GiroCode for banking apps in the euro area': 'EPC GiroCode dla aplikacji bankowych w strefie euro',
        'The QR code of a Swiss payment slip': 'Kod QR szwajcarskiego blankietu płatniczego',
        'Crypto payment': 'Płatność kryptowalutą',
        'Bitcoin, Ethereum and others': 'Bitcoin, Ethereum i inne',
        'Any text': 'Dowolny tekst',
        'The welcome example': 'Przykład powitalny',
        'A designed WiFi code with logo and caption': 'Zaprojektowany kod Wi-Fi z logo i podpisem',
        'Open a .qr file, or read a QR code from a picture (you can also drag it into the window or paste it)':
            'Otwórz plik .qr albo odczytaj kod QR z obrazu (możesz go też przeciągnąć do okna lub wkleić)',
        'Open file…': 'Otwórz plik…',
        'Read a QR code with the camera': 'Odczytaj kod QR aparatem',
        'Read code': 'Czytaj kod',
        'Undo the last change (Ctrl+Z)': 'Cofnij ostatnią zmianę (Ctrl+Z)',
        'Undo': 'Cofnij',
        'Redo the change you just undid (Ctrl+Y)': 'Ponów cofniętą zmianę (Ctrl+Y)',
        'Redo': 'Ponów',
        'Output': 'Wynik',
        'Color theme': 'Motyw kolorów',
        'Light theme': 'Jasny motyw',
        'Dark theme': 'Ciemny motyw',
        'Same as your system setting': 'Tak jak w ustawieniach systemu',
        'Automatic theme (system setting)': 'Motyw automatyczny (ustawienie systemu)',
        'Let any AI write in this editor': 'Pozwól dowolnej AI pisać w tym edytorze',
        'AI Assistant': 'Asystent AI',
        'Save to your own server and embed the editor in your website':
            'Zapisuj na własnym serwerze i osadź edytor na swojej stronie',
        'Save to server': 'Zapis na serwerze',
        'How it works and keyboard shortcuts (?)': 'Jak to działa i skróty klawiszowe (?)',
        'Help': 'Pomoc',
        'Save the QR code as an SVG picture (Ctrl+S)': 'Zapisz kod QR jako obraz SVG (Ctrl+S)',
        'Download SVG': 'Pobierz SVG',
        'SVG, PNG, PDF, EPS, many codes from a table (Ctrl+E)': 'SVG, PNG, PDF, EPS, wiele kodów z tabeli (Ctrl+E)',
        'Export…': 'Eksportuj…',

        /* ---------- Views and work area ---------- */
        'View': 'Widok',
        'Code': 'Kod',
        'QR code': 'Kod QR',
        'Edit': 'Edycja',
        'QR document': 'Dokument QR',
        'Copy the QR document to the clipboard': 'Skopiuj dokument QR do schowka',
        'Copy code': 'Kopiuj kod',
        'Copy': 'Kopiuj',
        'QR document: design lines, a line ---, then the content': 'Dokument QR: ustawienia wyglądu, wiersz ---, potem treść',
        'Drag to change the width of the code area': 'Przeciągnij, aby zmienić szerokość obszaru kodu',
        'Drag to change the width': 'Przeciągnij, aby zmienić szerokość',
        'Show the details of the scan check': 'Pokaż szczegóły testu skanowania',
        'Checking…': 'Sprawdzanie…',
        'Type the content below the line --- in the code, or choose a type under Edit.':
            'Wpisz treść pod wierszem --- w kodzie albo wybierz rodzaj w Edycji.',
        'What the code holds: link, WiFi, contact, payment …': 'Co zawiera kod: link, Wi-Fi, kontakt, płatność …',
        'Content': 'Treść',
        'Colors, shapes, logo, caption and frame': 'Kolory, kształty, logo, podpis i ramka',
        'Design': 'Wygląd',
        'Scan check, contrast, print size': 'Test skanowania, kontrast, rozmiar wydruku',
        'Check': 'Test',
        'Open it here': 'Otwórz tutaj',
        'Drop a .qr file or a picture with a QR code here': 'Upuść tu plik .qr lub obraz z kodem QR',
        'Hide': 'Ukryj',
        'Show': 'Pokaż',
        'No code': 'Brak kodu',
        'Scans': 'Skanuje się',
        'Scans in good conditions': 'Skanuje się w dobrych warunkach',
        'Does not scan': 'Nie skanuje się',
        'version': 'wersja',
        'error correction': 'korekcja błędów',

        /* ---------- Export ---------- */
        'Export': 'Eksport',
        'Close': 'Zamknij',
        'File name': 'Nazwa pliku',
        'Format': 'Format',
        'Vector (print, any size)': 'Wektor (druk, dowolny rozmiar)',
        'SVG picture': 'Obraz SVG',
        'EPS (for print shops)': 'EPS (dla drukarni)',
        'Picture': 'Obraz',
        'The content as text': 'Treść jako tekst',
        'QR document (.qr)': 'Dokument QR (.qr)',
        'Many codes': 'Wiele kodów',
        'Many codes from a table': 'Wiele kodów z tabeli',
        'Width in pixels': 'Szerokość w pikselach',
        'Resolution (dpi)': 'Rozdzielczość (dpi)',
        'Width in mm': 'Szerokość w mm',
        'Each code as': 'Każdy kod jako',
        'SVG files in a ZIP': 'Pliki SVG w ZIP',
        'PNG files in a ZIP': 'Pliki PNG w ZIP',
        'One PDF, one code per page': 'Jeden PDF, jeden kod na stronę',
        'File names from': 'Nazwy plików z',
        'Table (CSV or TSV, first row = column names)': 'Tabela (CSV lub TSV, pierwszy wiersz = nazwy kolumn)',
        'Open a table…': 'Otwórz tabelę…',
        'Result': 'Wynik',
        'SVG, PNG, PDF, EPS and the .qr document in one ZIP': 'SVG, PNG, PDF, EPS i dokument .qr w jednym ZIP',
        'All formats (ZIP)': 'Wszystkie formaty (ZIP)',
        'Download': 'Pobierz',
        'There is no code yet - see the problems above the code.': 'Nie ma jeszcze kodu - zobacz problemy nad kodem.',
        '(The picture is made when you download it.)': '(Obraz powstaje przy pobieraniu.)',
        '(A vector PDF, one page as large as the code - made when you download it.)':
            '(Wektorowy PDF, jedna strona wielkości kodu - powstaje przy pobieraniu.)',
        '(A vector EPS for print shops - made when you download it.)': '(Wektorowy EPS dla drukarni - powstaje przy pobieraniu.)',
        'Downloaded': 'Pobrano',
        'ZIP downloaded: SVG, PDF, EPS, PNG, the .qr document and the content': 'Pobrano ZIP: SVG, PDF, EPS, PNG, dokument .qr i treść',
        'Picture copied - paste it into a document or a chat': 'Obraz skopiowany - wklej go do dokumentu lub czatu',
        'This browser does not let the page copy pictures - download it instead': 'Ta przeglądarka nie pozwala stronie kopiować obrazów - pobierz go zamiast tego',
        'Copied to the clipboard': 'Skopiowano do schowka',
        'Row number': 'Numer wiersza',
        'Column': 'Kolumna',
        'Write placeholders like {{url}} into the content (or the caption) - each row of the table fills them.':
            'Wpisz symbole zastępcze, np. {{url}}, w treść (lub podpis) - każdy wiersz tabeli je wypełnia.',
        'Placeholders in the document': 'Symbole zastępcze w dokumencie',
        'Not in the table': 'Brak w tabeli',
        'The table is larger than 10 MB': 'Tabela jest większa niż 10 MB',
        'Paste a table with a header row and at least one row': 'Wklej tabelę z wierszem nagłówka i co najmniej jednym wierszem',
        'No row made a code - see the content': 'Żaden wiersz nie dał kodu - sprawdź treść',

        /* ---------- Scan ---------- */
        'Read a QR code': 'Odczytaj kod QR',
        'Starting the camera…': 'Uruchamianie aparatu…',
        'The camera image is read in your browser only - nothing is recorded or sent.':
            'Obraz z aparatu jest odczytywany tylko w twojej przeglądarce - nic nie jest nagrywane ani wysyłane.',
        'Choose a picture…': 'Wybierz obraz…',
        'This browser gives no camera to the page - choose a picture instead.': 'Ta przeglądarka nie udostępnia stronie aparatu - wybierz obraz.',
        'Hold the QR code in front of the camera.': 'Trzymaj kod QR przed aparatem.',
        'The camera is not allowed - allow it in the browser (inside another website the page must allow it too), or choose a picture.':
            'Aparat jest zablokowany - zezwól na dostęp w przeglądarce (wewnątrz innej strony musi na to zezwolić także ta strona) albo wybierz obraz.',
        'No camera found - choose a picture instead.': 'Nie znaleziono aparatu - wybierz obraz.',

        /* ---------- My documents ---------- */
        'Search by name': 'Szukaj po nazwie',
        'Search your documents': 'Przeszukaj dokumenty',
        'Open a .qr file or a picture with a QR code as a new document': 'Otwórz plik .qr lub obraz z kodem QR jako nowy dokument',
        'New document': 'Nowy dokument',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Kliknij dokument, aby go otworzyć. Są przechowywane tylko w tej przeglądarce - nic nie jest wysyłane. Wyczyszczenie danych witryny w przeglądarce je usuwa, więc pobierz te, które chcesz zachować.',
        'Download every document as a .qr file in one ZIP': 'Pobierz każdy dokument jako plik .qr w jednym ZIP',
        'Download all (ZIP)': 'Pobierz wszystkie (ZIP)',
        'Rename': 'Zmień nazwę',
        'Duplicate': 'Duplikuj',
        'Download as .qr': 'Pobierz jako .qr',
        'Delete': 'Usuń',
        'New name': 'Nowa nazwa',
        'This document is open': 'Ten dokument jest otwarty',
        'Click to open this document': 'Kliknij, aby otworzyć ten dokument',
        'No documents yet.': 'Brak dokumentów.',
        'The document is removed from this browser for good. Download it first if you want to keep a copy.':
            'Dokument zostanie trwale usunięty z tej przeglądarki. Jeśli chcesz zachować kopię, najpierw go pobierz.',

        /* ---------- AI Assistant ---------- */
        'Any AI can work with you - ChatGPT, Claude, Gemini, Copilot.': 'Każda AI może pracować razem z tobą - ChatGPT, Claude, Gemini, Copilot.',
        'Connected AI': 'Połączona AI',
        'Paste it into your AI and say what the code should hold or how it should look.':
            'Wklej go do swojej AI i napisz, co ma zawierać kod lub jak ma wyglądać.',
        'Connected to': 'Połączono z',
        'the AI sends its result there, and it opens here.': 'AI wysyła tam swój wynik, który otwiera się tutaj.',
        'What': 'Co',
        'tells the AI': 'przekazuje AI',
        'The AI should': 'AI ma',
        'Change “': 'Zmienić „',
        '”': '”',
        'Make a new document': 'Utworzyć nowy dokument',
        'The AI\'s answer (or press Ctrl+V anywhere):': 'Odpowiedź AI (lub naciśnij Ctrl+V w dowolnym miejscu):',
        'The QR document travels in the link after the “#”, which no server sees. What you paste into your AI is handled by its provider.':
            'Dokument QR podróżuje w linku po znaku „#”, którego nie widzi żaden serwer. Treści wklejane do AI są przetwarzane przez jej dostawcę.',
        'The prompt - copy it with Ctrl+C': 'Prompt - skopiuj go przez Ctrl+C',
        'Copy prompt': 'Kopiuj prompt',
        '(no key yet)': '(jeszcze bez klucza)',
        '(key valid while the editor is open)': '(klucz ważny, dopóki edytor jest otwarty)',
        'The link could not be read': 'Nie udało się odczytać linku',
        'The document in this link is incomplete or damaged. If the AI\'s link was split over several lines (as in a terminal), copy the whole answer and paste it into the editor with Ctrl+V - the editor joins the lines.':
            'Dokument w tym linku jest niekompletny lub uszkodzony. Jeśli link od AI został podzielony na kilka wierszy (jak w terminalu), skopiuj całą odpowiedź i wklej ją do edytora przez Ctrl+V - edytor połączy wiersze.',
        'Loading…': 'Wczytywanie…',
        'Taken over by your editor': 'Przekazano do edytora',
        'The document is now in the QR Editor tab you already had open. Switch to that tab, or open it here.':
            'Dokument jest teraz w karcie Edytora QR, którą masz już otwartą. Przejdź do tamtej karty albo otwórz go tutaj.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)':
            'Kopiowanie jest tu niedozwolone - tekst jest zaznaczony poniżej: naciśnij Ctrl+C (⌘C)',
        'Prompt copied - paste it into your AI and say what it should write': 'Prompt skopiowany - wklej go do swojej AI i opisz, co ma napisać',
        'This link is incomplete or damaged - please ask the AI to send it again': 'Ten link jest niekompletny lub uszkodzony - poproś AI, aby wysłała go ponownie',

        /* ---------- Save to your server ---------- */
        'Save to your server': 'Zapis na twoim serwerze',
        'Webhook address': 'Adres webhooka',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)':
            '(opcjonalny, wysyłany jako „Authorization: Bearer …”; przechowywany do zamknięcia tej karty)',
        'Send automatically a few seconds after each change (otherwise only when you click':
            'Wysyłaj automatycznie kilka sekund po każdej zmianie (w przeciwnym razie tylko po kliknięciu',
        'or press Ctrl+S)': 'lub Ctrl+S)',
        'Only for “': 'Tylko dla „',
        '” (other documents use the general address)': '” (inne dokumenty używają adresu ogólnego)',
        'What your server receives': 'Co otrzymuje twój serwer',
        'A POST request with JSON (your server must allow CORS from https://qr.giit.ch):':
            'Żądanie POST z JSON (serwer musi zezwalać na CORS z https://qr.giit.ch):',
        'Embed the editor in your website': 'Osadź edytor na swojej stronie',
        'Send now': 'Wyślij teraz',
        'Save setting': 'Zapisz ustawienie',

        /* ---------- Help ---------- */
        'How it works': 'Jak to działa',
        'Keyboard shortcuts': 'Skróty klawiszowe',
        'Undo / redo': 'Cofnij / ponów',
        'Save (download SVG, or to your server)': 'Zapisz (pobierz SVG lub zapisz na serwerze)',
        'Paste a picture with a QR code to read it': 'Wklej obraz z kodem QR, aby go odczytać',
        'Wrap long lines in the code': 'Zawijaj długie wiersze w kodzie',

        /* ---------- Messages ---------- */
        'The browser storage is full - download and delete documents under "My documents"':
            'Pamięć przeglądarki jest pełna - pobierz i usuń dokumenty w „Moich dokumentach”',
        'The browser storage is full - delete or download documents under "My documents" first':
            'Pamięć przeglądarki jest pełna - najpierw usuń lub pobierz dokumenty w „Moich dokumentach”',
        'The browser storage is full - delete or download some documents first':
            'Pamięć przeglądarki jest pełna - najpierw usuń lub pobierz kilka dokumentów',
        'The browser storage is full': 'Pamięć przeglądarki jest pełna',
        'Nothing to undo': 'Nie ma czego cofnąć',
        'Nothing to redo': 'Nie ma czego ponowić',
        /* fragments: New document "<name>" - …, "<name>" is open. … */
        'your other documents are under "My documents"': 'pozostałe dokumenty są w „Moich dokumentach”',
        'from the AI - your other documents are unchanged': 'od AI - pozostałe dokumenty są bez zmian',
        'is open. My documents: open, rename, duplicate or delete your documents (Ctrl+O)':
            'jest otwarty. Moje dokumenty: otwieraj, zmieniaj nazwy, duplikuj lub usuwaj swoje dokumenty (Ctrl+O)',
        'is neither a .qr file nor a picture': 'nie jest ani plikiem .qr, ani obrazem',
        'opened - it is now in "My documents"': 'otwarty - jest teraz w „Moich dokumentach”',
        'changed by the AI - "Undo" takes it back': 'zmieniony przez AI - „Cofnij” to cofa',
        'The file is larger than 20 MB': 'Plik jest większy niż 20 MB',
        'No QR code found in the picture': 'Nie znaleziono kodu QR na obrazie',
        'Logo added - it is part of the document': 'Dodano logo - jest częścią dokumentu',
        'The picture is larger than 5 MB': 'Obraz jest większy niż 5 MB',
        'The SVG is larger than 200 KB': 'SVG jest większy niż 200 KB',
        'QR document copied': 'Dokument QR skopiowany',
        'There is no code to download yet': 'Nie ma jeszcze kodu do pobrania',
        'SVG downloaded': 'Pobrano SVG',
        'Design reset - "Undo" brings it back': 'Wygląd zresetowany - „Cofnij” go przywraca',
        'Type a number into the reference field first': 'Najpierw wpisz liczbę w pole numeru referencyjnego',
        'Reference with check digits written': 'Zapisano numer referencyjny z cyframi kontrolnymi',
        /* the name of a document read from a picture: "<kind> read" */
        'read': '(odczytany)',
        /* names of the templates under New */
        'Guest WiFi': 'Wi-Fi dla gości',
        'Bitcoin': 'Bitcoin',

        /* ---------- Content ---------- */
        'Kind of content': 'Rodzaj treści',
        'Link': 'Link',
        'Text': 'Tekst',
        'WiFi': 'Wi-Fi',
        'Contact': 'Kontakt',
        'Email': 'E-mail',
        'SMS': 'SMS',
        'Phone': 'Telefon',
        'Location': 'Lokalizacja',
        'Event': 'Wydarzenie',
        'Crypto': 'Kryptowaluta',
        'SEPA payment': 'Płatność SEPA',
        'Swiss QR bill': 'Szwajcarski rachunek QR',
        'Make a QR reference from a number': 'Numer referencyjny QR z liczby',
        'Make an RF reference from a number': 'Numer referencyjny RF z liczby',
        'The code opens this address. A link shortener or redirect service makes the code depend on that service - the editor warns about it.':
            'Kod otwiera ten adres. Skracacz linków lub usługa przekierowań uzależnia kod od tej usługi - edytor przed tym ostrzega.',
        'Any text; phones show it as it is.': 'Dowolny tekst; telefony pokazują go bez zmian.',
        'Phones join the network when the code is scanned (Android, iPhone with iOS 11 and later).':
            'Telefony łączą się z siecią po zeskanowaniu kodu (Android, iPhone z iOS 11 i nowszym).',
        'vCard is read by all phones; MeCard makes a smaller code with fewer fields.':
            'vCard czytają wszystkie telefony; MeCard daje mniejszy kod z mniejszą liczbą pól.',
        'Opens a new email with address, subject and text.': 'Otwiera nowy e-mail z adresem, tematem i treścią.',
        'Opens a text message to this number.': 'Otwiera wiadomość SMS do tego numeru.',
        'Offers to call this number - with the country code it works everywhere.':
            'Proponuje połączenie z tym numerem - z numerem kierunkowym kraju działa wszędzie.',
        'Opens the place in the map app.': 'Otwiera miejsce w aplikacji map.',
        'Adds the event to the calendar (times are local times).': 'Dodaje wydarzenie do kalendarza (godziny są czasem lokalnym).',
        'A payment request for wallet apps.': 'Żądanie płatności dla aplikacji portfeli.',
        'For banking apps in the euro area (SEPA credit transfer, EPC GiroCode). Error correction M as the standard requires.':
            'Dla aplikacji bankowych w strefie euro (polecenie przelewu SEPA, EPC GiroCode). Korekcja błędów M, jak wymaga standard.',
        'The QR code of a Swiss QR bill (Implementation Guidelines 2.3 / 2.4). Drawn with the Swiss cross and error correction M; print it 46 × 46 mm.':
            'Kod QR szwajcarskiego rachunku QR (Implementation Guidelines 2.3 / 2.4). Rysowany ze szwajcarskim krzyżem i korekcją błędów M; drukuj go w rozmiarze 46 × 46 mm.',
        'Address (URL)': 'Adres (URL)',
        'Network name (SSID)': 'Nazwa sieci (SSID)',
        'Security': 'Zabezpieczenia',
        'WEP (old)': 'WEP (stare)',
        'None (open network)': 'Brak (sieć otwarta)',
        'Password': 'Hasło',
        'Hidden network': 'Sieć ukryta',
        'vCard 3.0 (all phones)': 'vCard 3.0 (wszystkie telefony)',
        'MeCard (smaller code)': 'MeCard (mniejszy kod)',
        'First name': 'Imię',
        'Last name': 'Nazwisko',
        'Company': 'Firma',
        'Job title': 'Stanowisko',
        'Mobile': 'Komórka',
        'Phone (work)': 'Telefon (praca)',
        'Website': 'Strona WWW',
        'Street and number': 'Ulica i numer',
        'Postal code': 'Kod pocztowy',
        'City': 'Miasto',
        'Region': 'Region',
        'Country': 'Kraj',
        'Note': 'Notatka',
        'To': 'Do',
        'Subject': 'Temat',
        'Message': 'Wiadomość',
        'Phone number': 'Numer telefonu',
        'Latitude': 'Szerokość geogr.',
        'Longitude': 'Długość geogr.',
        'Name of the place (optional)': 'Nazwa miejsca (opcjonalnie)',
        'Title': 'Tytuł',
        'All day': 'Cały dzień',
        'Start': 'Początek',
        'End': 'Koniec',
        'Place': 'Miejsce',
        'Description': 'Opis',
        'Currency': 'Waluta',
        'Address': 'Adres',
        'Amount (optional)': 'Kwota (opcjonalnie)',
        'Recipient (optional)': 'Odbiorca (opcjonalnie)',
        'Message (optional)': 'Wiadomość (opcjonalnie)',
        'Recipient': 'Odbiorca',
        'BIC (optional)': 'BIC (opcjonalnie)',
        'Amount in EUR (optional)': 'Kwota w EUR (opcjonalnie)',
        'Creditor reference RF… (or a message below)': 'Numer referencyjny wierzyciela RF… (lub wiadomość poniżej)',
        'Message to the recipient': 'Wiadomość dla odbiorcy',
        'Purpose code (optional, e.g. CHAR)': 'Kod celu (opcjonalnie, np. CHAR)',
        'Note for the payer (optional)': 'Uwaga dla płatnika (opcjonalnie)',
        'IBAN or QR-IBAN of the creditor (CH or LI)': 'IBAN lub QR-IBAN wierzyciela (CH lub LI)',
        'Creditor name': 'Nazwa wierzyciela',
        'Street': 'Ulica',
        'Number': 'Numer',
        'Town': 'Miejscowość',
        'Country (2 letters)': 'Kraj (2 litery)',
        'Amount (empty: the payer fills it in)': 'Kwota (puste: wpisuje ją płatnik)',
        'Reference': 'Numer referencyjny',
        'No reference': 'Bez numeru referencyjnego',
        'QR reference (with a QR-IBAN)': 'Numer referencyjny QR (z QR-IBAN)',
        'Creditor reference (RF…)': 'Numer referencyjny wierzyciela (RF…)',
        'Reference number': 'Numer referencyjny',
        'Additional information (message)': 'Informacje dodatkowe (wiadomość)',
        'Billing information (optional, //S1/…)': 'Informacje rozliczeniowe (opcjonalnie, //S1/…)',
        'Payable by: name (optional)': 'Płatnik: nazwa (opcjonalnie)',

        /* ---------- Design ---------- */
        'A Swiss QR bill is always drawn as the standard requires: black squares on white, the Swiss cross, error correction M. These settings apply to the other codes.':
            'Szwajcarski rachunek QR jest zawsze rysowany tak, jak wymaga standard: czarne kwadraty na białym tle, szwajcarski krzyż, korekcja błędów M. Te ustawienia dotyczą pozostałych kodów.',
        'Colors': 'Kolory',
        'Dark color': 'Kolor ciemny',
        'Background': 'Tło',
        'Transparent background': 'Przezroczyste tło',
        'Gradient': 'Gradient',
        'None': 'Brak',
        'Linear': 'Liniowy',
        'Radial': 'Radialny',
        'Second color': 'Drugi kolor',
        'Angle': 'Kąt',
        'Modules': 'Moduły',
        'Eyes': 'Oczy',
        'Frame': 'Ramka',
        'Center': 'Środek',
        'Own color for the eyes': 'Własny kolor oczu',
        'Eye color': 'Kolor oczu',
        'Logo': 'Logo',
        'No logo': 'Bez logo',
        'Your own picture (PNG, JPEG, SVG, WebP) - it becomes part of the document':
            'Własny obraz (PNG, JPEG, SVG, WebP) - staje się częścią dokumentu',
        'Picture…': 'Obraz…',
        'Logo size': 'Rozmiar logo',
        'Remove the modules behind the logo': 'Usuń moduły pod logo',
        'Caption and frame': 'Podpis i ramka',
        'Caption': 'Podpis',
        'Position': 'Położenie',
        'Below the code': 'Pod kodem',
        'Above the code': 'Nad kodem',
        'Line': 'Linia',
        'Filled': 'Wypełniona',
        'Frame and caption color': 'Kolor ramki i podpisu',
        'Error correction and size': 'Korekcja błędów i rozmiar',
        'Error correction': 'Korekcja błędów',
        'Quiet zone (modules)': 'Strefa ciszy (moduły)',
        'Smallest version': 'Najmniejsza wersja',
        'Automatic': 'Automatycznie',
        'Mask': 'Maska',
        'Use a higher error correction when it fits in the same size': 'Użyj wyższej korekcji błędów, jeśli zmieści się w tym samym rozmiarze',
        'Removes all design lines - "Undo" brings them back': 'Usuwa wszystkie ustawienia wyglądu - „Cofnij” je przywraca',
        'Reset the design': 'Zresetuj wygląd',
        /* the pickers (small: one or two short words) */
        'Square': 'Kwadrat',
        'Rounded': 'Obłe',
        'Dots': 'Kropki',
        'Soft squares': 'Miękkie kwadraty',
        'Diamonds': 'Romby',
        'Vertical bars': 'Paski pionowe',
        'Horizontal bars': 'Paski poziome',
        'Circle': 'Koło',
        'Leaf': 'Liść',
        'Web': 'WWW',
        'Mail': 'Poczta',
        'Chat': 'Czat',
        'Map pin': 'Pinezka',
        'Calendar': 'Kalendarz',
        'Person': 'Osoba',
        'Payment card': 'Karta płatnicza',
        'Star': 'Gwiazda',
        'Heart': 'Serce',

        /* ---------- Check ---------- */
        'Scan check': 'Test skanowania',
        'Scans reliably and reads back exactly the content': 'Skanuje się niezawodnie i zwraca dokładnie treść',
        'Scans, but only in good conditions': 'Skanuje się, ale tylko w dobrych warunkach',
        'Reads back something else than the content': 'Zwraca coś innego niż treść',
        'Normal size': 'Normalny rozmiar',
        'Small (3 pixels per module)': 'Mały (3 piksele na moduł)',
        'Blurred, with less contrast': 'Rozmyty, z mniejszym kontrastem',
        'The editor reads its own drawing with a QR decoder (jsQR) in your browser. Test the printed code with a phone as well.':
            'Edytor odczytuje własny rysunek dekoderem QR (jsQR) w twojej przeglądarce. Sprawdź też wydrukowany kod telefonem.',
        'The code': 'Kod',
        'Version': 'Wersja',
        'Data': 'Dane',
        'Logo covers': 'Logo zakrywa',
        'Contrast': 'Kontrast',
        'Print size': 'Rozmiar wydruku',
        'Scanning distance (cm)': 'Odległość skanowania (cm)',
        'Printed width (mm)': 'Szerokość wydruku (mm)',
        'Problems': 'Problemy',
        'No problems.': 'Brak problemów.',

        /* ---------- Problems ---------- */
        'A SEPA payment code uses error correction M, as the standard requires': 'Kod płatności SEPA używa korekcji błędów M, jak wymaga standard',
        'The drawn code reads back something else than the content - check the content for characters the code cannot hold':
            'Narysowany kod zwraca coś innego niż treść - sprawdź, czy treść nie zawiera znaków, których kod nie może pomieścić',
        'The drawn code does not scan - raise the contrast, make the logo smaller or choose more error correction':
            'Narysowany kod się nie skanuje - zwiększ kontrast, zmniejsz logo lub wybierz wyższą korekcję błędów',
        'The code scans, but not when it is small - simpler shapes, more contrast or more error correction help':
            'Kod się skanuje, ale nie w małym rozmiarze - pomogą prostsze kształty, większy kontrast lub wyższa korekcja błędów',
        'The code scans, but not when it is blurred or the light is poor - simpler shapes, more contrast or more error correction help':
            'Kod się skanuje, ale nie po rozmyciu ani przy słabym świetle - pomogą prostsze kształty, większy kontrast lub wyższa korekcja błędów',
        'Light code on a dark background: many scanners read it, but some older ones do not - dark on light is safest':
            'Jasny kod na ciemnym tle: wiele skanerów go odczyta, ale niektóre starsze nie - najbezpieczniej ciemny na jasnym',
        'Transparent background: print the code only on a plain, light surface': 'Przezroczyste tło: drukuj kod tylko na gładkiej, jasnej powierzchni',
        'Round eyes are read by phone cameras, but some scanner apps and devices only find square ones - for codes many people scan, square or rounded eyes are safer':
            'Okrągłe oczy odczytują aparaty telefonów, ale niektóre aplikacje i urządzenia skanujące znajdują tylko kwadratowe - przy kodach skanowanych przez wiele osób bezpieczniejsze są oczy kwadratowe lub zaokrąglone',
        'The content is too long for a QR code at this error correction - shorten it or choose L':
            'Treść jest za długa na kod QR przy tej korekcji błędów - skróć ją lub wybierz L',
        'The IBAN is missing': 'Brak IBAN',
        'The IBAN has the wrong form (two letters, two digits, then letters and digits)': 'IBAN ma złą postać (dwie litery, dwie cyfry, potem litery i cyfry)',
        'The check digits of the IBAN do not match - a typing error?': 'Cyfry kontrolne IBAN się nie zgadzają - literówka?',
        'A QR reference has 27 digits': 'Numer referencyjny QR ma 27 cyfr',
        'The check digit of the QR reference does not match': 'Cyfra kontrolna numeru referencyjnego QR się nie zgadza',
        'A creditor reference starts with RF and two check digits, 5 to 25 characters':
            'Numer referencyjny wierzyciela zaczyna się od RF i dwóch cyfr kontrolnych, od 5 do 25 znaków',
        'The check digits of the creditor reference do not match': 'Cyfry kontrolne numeru referencyjnego wierzyciela się nie zgadzają',
        'The code has no content yet': 'Kod nie ma jeszcze treści',
        'The address contains spaces - encode them as %20': 'Adres zawiera spacje - zakoduj je jako %20',
        'The address has no https:// - some scanners show it as text instead of opening it':
            'Adres nie ma https:// - niektóre skanery pokazują go jako tekst zamiast go otworzyć',
        'The address uses http:// - the browser may warn that the page is not secure; use https:// if the site has it':
            'Adres używa http:// - przeglądarka może ostrzec, że strona nie jest bezpieczna; użyj https://, jeśli witryna to obsługuje',
        'This is not a valid address': 'To nie jest prawidłowy adres',
        'The network name (SSID) is missing': 'Brak nazwy sieci (SSID)',
        'The password is missing (or choose "None" for an open network)': 'Brak hasła (lub wybierz „Brak” dla sieci otwartej)',
        'A WEP key has 5, 13, 16 or 29 characters (or 10, 26, 32, 58 hex digits)': 'Klucz WEP ma 5, 13, 16 lub 29 znaków (albo 10, 26, 32, 58 cyfr szesnastkowych)',
        'WEP is not secure - use WPA2 or WPA3 if your router has it': 'WEP nie jest bezpieczny - użyj WPA2 lub WPA3, jeśli router je obsługuje',
        'T:SAE is not in the WiFi standard and some scanners do not read it - T:WPA works for WPA2 and WPA3':
            'T:SAE nie należy do standardu Wi-Fi i niektóre skanery go nie odczytują - T:WPA działa dla WPA2 i WPA3',
        'A WPA password has 8 to 63 characters': 'Hasło WPA ma od 8 do 63 znaków',
        'The contact has no name and no company': 'Kontakt nie ma nazwiska ani firmy',
        'The email address looks wrong': 'Adres e-mail wygląda na błędny',
        'No address - the email app opens with an empty "To"': 'Brak adresu - aplikacja pocztowa otworzy się z pustym polem „Do”',
        'The phone number is missing': 'Brak numeru telefonu',
        'The phone number contains other characters than digits and +': 'Numer telefonu zawiera znaki inne niż cyfry i +',
        'Without the country code (+41 …) the number only works within the country': 'Bez numeru kierunkowego kraju (+48 …) numer działa tylko w kraju',
        'Latitude and longitude are needed as numbers, for example 47.6779 and 8.6152': 'Szerokość i długość geograficzna muszą być liczbami, na przykład 47.6779 i 8.6152',
        'The latitude lies between -90 and 90, the longitude between -180 and 180': 'Szerokość geograficzna leży między -90 a 90, długość między -180 a 180',
        'The event has no BEGIN:VEVENT': 'Wydarzenie nie ma BEGIN:VEVENT',
        'The event has no END:VEVENT': 'Wydarzenie nie ma END:VEVENT',
        'The event has no title': 'Wydarzenie nie ma tytułu',
        'The event has no start': 'Wydarzenie nie ma początku',
        'The event ends before it starts': 'Wydarzenie kończy się, zanim się zacznie',
        'The address is missing': 'Brak adresu',
        'The amount must be a number with a point, for example 0.005': 'Kwota musi być liczbą z kropką, na przykład 0.005',
        'An Ethereum address has 0x and 40 hex digits': 'Adres Ethereum ma 0x i 40 cyfr szesnastkowych',
        'This does not look like a Bitcoin address': 'To nie wygląda na adres Bitcoin',
        'The second line is the version, 001 or 002': 'Drugi wiersz to wersja, 001 lub 002',
        'The third line should be 1 (UTF-8)': 'Trzeci wiersz powinien mieć wartość 1 (UTF-8)',
        'The fourth line must be SCT': 'Czwarty wiersz musi mieć wartość SCT',
        'Version 001 needs a BIC': 'Wersja 001 wymaga BIC',
        'The BIC has 8 or 11 letters and digits': 'BIC ma 8 lub 11 liter i cyfr',
        'The recipient is missing': 'Brak odbiorcy',
        'The recipient has more than 70 characters': 'Odbiorca ma ponad 70 znaków',
        'The amount is between 0.01 and 999999999.99 EUR, with a point and at most two decimals':
            'Kwota wynosi od 0.01 do 999999999.99 EUR, z kropką i najwyżej dwoma miejscami po przecinku',
        'The purpose code has 4 letters (for example CHAR, GDDS)': 'Kod celu ma 4 litery (na przykład CHAR, GDDS)',
        'Either a reference or a message, not both': 'Albo numer referencyjny, albo wiadomość, nie obie opcje jednocześnie',
        'The message has more than 140 characters': 'Wiadomość ma ponad 140 znaków',
        'The second line is the version 0200': 'Drugi wiersz to wersja 0200',
        'The third line is the coding type 1': 'Trzeci wiersz to typ kodowania 1',
        'The Swiss QR bill takes only IBANs of Switzerland and Liechtenstein (CH, LI)':
            'Szwajcarski rachunek QR przyjmuje tylko numery IBAN Szwajcarii i Liechtensteinu (CH, LI)',
        'The creditor address must be structured (S): street, number, postal code and town in their own lines':
            'Adres wierzyciela musi być strukturalny (S): ulica, numer, kod pocztowy i miejscowość w osobnych wierszach',
        'The creditor name is missing': 'Brak nazwy wierzyciela',
        'Postal code and town of the creditor are needed': 'Potrzebne są kod pocztowy i miejscowość wierzyciela',
        'The country of the creditor is two letters, for example CH': 'Kraj wierzyciela to dwie litery, na przykład CH',
        'The ultimate creditor (lines 12 to 18) must stay empty': 'Pola ostatecznego wierzyciela (wiersze 12–18) muszą pozostać puste',
        'The amount is between 0.01 and 999999999.99, with a point and two decimals': 'Kwota wynosi od 0.01 do 999999999.99, z kropką i dwoma miejscami po przecinku',
        'The currency is CHF or EUR': 'Waluta to CHF lub EUR',
        'Postal code and town of the payer are needed': 'Potrzebne są kod pocztowy i miejscowość płatnika',
        'The payer\'s address must be structured (S)': 'Adres płatnika musi być strukturalny (S)',
        'The reference type is QRR, SCOR or NON': 'Typ numeru referencyjnego to QRR, SCOR lub NON',
        'A QR-IBAN needs a QR reference (QRR)': 'QR-IBAN wymaga numeru referencyjnego QR (QRR)',
        'A QR reference needs a QR-IBAN (an IBAN with 30000 to 31999 after the check digits)':
            'Numer referencyjny QR wymaga QR-IBAN (IBAN z 30000 do 31999 po cyfrach kontrolnych)',
        'From 14 November 2026 a bill in EUR takes only an IBAN with a creditor reference (SCOR) or none - QR-IBAN and QR reference only in CHF':
            'Od 14 listopada 2026 rachunek w EUR przyjmuje tylko IBAN z numerem referencyjnym wierzyciela (SCOR) lub bez numeru referencyjnego - QR-IBAN i numer referencyjny QR tylko w CHF',
        'Without a reference type the reference line must be empty': 'Bez typu numeru referencyjnego wiersz numeru referencyjnego musi być pusty',
        'Message and billing information together have at most 140 characters': 'Wiadomość i informacje rozliczeniowe mają łącznie najwyżej 140 znaków',
        'Line 31 must be EPD (end of the payment data)': 'Wiersz 31 musi mieć wartość EPD (koniec danych płatności)',
        'The Swiss QR bill allows only Latin characters (no emoji, no other scripts)':
            'Szwajcarski rachunek QR dopuszcza tylko znaki łacińskie (bez emoji i innych pism)',
    },
    html: {
        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Kliknij <b>Kopiuj prompt</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'AI odpowiada linkiem: kliknij go albo wklej całą odpowiedź poniżej. <b>Cofnij</b> to cofa.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'AI odpowiada linkiem: <b>wklej całą jej odpowiedź poniżej</b> (kliknięty link otwiera osobny edytor). <b>Cofnij</b> to cofa.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'Edytor może wysyłać każdą zapisaną wersję na twój własny serwer (<b>webhook</b>), dzięki czemu praca jest przechowywana tam, gdzie chcesz. Nic nie jest wysyłane, dopóki nie wpiszesz tu adresu.',
        'Also possible: <code>?src=&lt;URL of a .qr file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>qreditor:ai</code>, <code>qreditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Możliwe jest też: <code>?src=&lt;URL pliku .qr&gt;</code> otwiera plik, <code>&amp;webhook=&lt;URL&gt;</code> zapisuje tam ten dokument. Edytor może też otworzyć się we własnym oknie (<code>?embed=window</code>), a twoja strona może przekazać mu własny prompt dla AI i klucz sesji, aby AI wysłała wynik na twój serwer (<code>qreditor:ai</code>, <code>qreditor:key-request</code>) - zobacz „Edytor na własnej stronie” pod edytorem. Szczegóły są w <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Choose what the code holds</b> under <b>New</b> or in the <b>Content</b> tab: a link, WiFi, a contact, an event, a payment … The form writes the content in the form phones read.':
            '<b>Wybierz, co zawiera kod</b>, w menu <b>Nowy</b> lub na karcie <b>Treść</b>: link, Wi-Fi, kontakt, wydarzenie, płatność … Formularz zapisuje treść w postaci, którą czytają telefony.',
        '<b>Design it</b> in the <b>Design</b> tab: colors and gradient, the shape of the modules and of the three eyes, a logo, a caption and a frame.':
            '<b>Zaprojektuj go</b> na karcie <b>Wygląd</b>: kolory i gradient, kształt modułów i trzech oczu, logo, podpis i ramka.',
        'The <b>code</b> on the left is the whole QR document: design lines <code>key: value</code>, a line <code>---</code>, then the content exactly as it goes into the code. You can type there too; every change is one step for Undo.':
            '<b>Kod</b> po lewej to cały dokument QR: ustawienia wyglądu <code>key: value</code>, wiersz <code>---</code>, potem treść dokładnie tak, jak trafia do kodu. Tam też możesz pisać; każdą zmianę można cofnąć jednym krokiem.',
        '<b>Check</b>: after every change the editor reads the code back - normal, small and blurred. The badge above the code says whether it scans; the <b>Check</b> tab shows contrast, quiet zone, the logo against the error correction and the print size.':
            '<b>Test</b>: po każdej zmianie edytor odczytuje kod - w normalnym rozmiarze, małym i rozmytym. Plakietka nad kodem mówi, czy się skanuje; karta <b>Test</b> pokazuje kontrast, strefę ciszy, logo względem korekcji błędów i rozmiar wydruku.',
        'Click the <b>caption</b> under the code to change it right there.':
            'Kliknij <b>podpis</b> pod kodem, aby zmienić go od razu w tym miejscu.',
        '<b>Export</b> makes SVG, PDF and EPS (vectors for print), PNG, JPEG or WebP up to 8192 pixels wide, and <b>many codes at once</b> from a table: write <code>{{column}}</code> in the content, paste the table, download a ZIP or one PDF.':
            '<b>Eksport</b> tworzy SVG, PDF i EPS (wektory do druku), PNG, JPEG lub WebP o szerokości do 8192 pikseli oraz <b>wiele kodów naraz</b> z tabeli: wpisz <code>{{column}}</code> w treść, wklej tabelę, pobierz ZIP lub jeden PDF.',
        '<b>Read a code</b>: open, drop or paste a picture, or click <b>Read code</b> for the camera. The content becomes a new document.':
            '<b>Odczytaj kod</b>: otwórz, upuść lub wklej obraz albo kliknij <b>Czytaj kod</b>, aby użyć aparatu. Treść staje się nowym dokumentem.',

    },
    patterns: [
        ['^(\\d+) bytes? · version (\\d+) \\((\\d+) × (\\d+) modules\\)$', (m, n, v, a, b) => ((n, v, a, b) => `${n} ${+n === 1 ? 'bajt' : [2, 3, 4].includes(+n % 10) && ![12, 13, 14].includes(+n % 100) ? 'bajty' : 'bajtów'} · wersja ${v} (${a} × ${b} modułów)`)(n, v, a, b)],
        ['^(\\d+) bytes?$', (m, n) => (n => `${n} ${+n === 1 ? 'bajt' : [2, 3, 4].includes(+n % 10) && ![12, 13, 14].includes(+n % 100) ? 'bajty' : 'bajtów'}`)(n)],
        /* ---------- Code, problems above the code ---------- */
        ['^(\\d+) (?:line|lines) · (.+)$', (m, l, s) => `${l} ${getPlural(l, 'wiersz', 'wiersze', 'wierszy')} · ${formatSize(s)}`],
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'błąd', 'błędy', 'błędów')}`],
        ['^(· )?(\\d+) (?:note|notes)$', (m, p, k) => `${p || ''}${k} ${getPlural(k, 'uwaga', 'uwagi', 'uwag')}`],
        ['^Line (\\d+)$', 'Wiersz $1'],

        /* ---------- Check ---------- */
        ['^- repairs about (\\d+) %$', '- naprawia ok. $1 %'],
        ['^(\\d+) of (\\d+) bytes \\((\\d+) %\\)$', (m, a, b, p) => `${a} z ${b} ${getPlural(b, 'bajtu', 'bajtów', 'bajtów')} (${p} %)`],
        ['^(\\d+) % of the modules$', '$1 % modułów'],
        ['^From ([\\d.]+) cm the code should be at least ([\\d.]+) cm wide\\.$',
            (m, d, w) => `Z odległości ${formatDecimal(d)} cm kod powinien mieć co najmniej ${formatDecimal(w)} cm szerokości.`],
        ['^At ([\\d.]+) mm one module is ([\\d.]+) mm ✓$', (m, a, b) => `Przy ${formatDecimal(a)} mm jeden moduł ma ${formatDecimal(b)} mm ✓`],
        ['^At ([\\d.]+) mm one module is ([\\d.]+) mm - below 0\\.4 mm many phones fail; print it larger !$',
            (m, a, b) => `Przy ${formatDecimal(a)} mm jeden moduł ma ${formatDecimal(b)} mm - poniżej 0,4 mm wiele telefonów zawodzi; wydrukuj go większy !`],

        /* ---------- Export ---------- */
        ['^(\\d+) × (\\d+) pixels = ([\\d.]+) mm at (\\d+) dpi$', (m, w, h, mm, d) => `${w} × ${h} piks. = ${formatDecimal(mm)} mm przy ${d} dpi`],
        ['^(\\d+) × (\\d+) pixels$', '$1 × $2 piks.'],
        ['^One module ([\\d.]+) mm$', (m, v) => `Jeden moduł ${formatDecimal(v)} mm`],
        ['^One module ([\\d.]+) mm - below 0\\.4 mm many phones fail$', (m, v) => `Jeden moduł ${formatDecimal(v)} mm - poniżej 0,4 mm wiele telefonów zawodzi`],
        ['^([\\d.]+) × ([\\d.]+) mm$', (m, a, b) => `${formatDecimal(a)} × ${formatDecimal(b)} mm`],
        ['^(\\d+) (?:row|rows) · (.+)$', (m, k, r) => `${k} ${getPlural(k, 'wiersz', 'wiersze', 'wierszy')} · ${r}`],
        ['^At most (\\d+) rows at once$', 'Limit wierszy naraz: $1'],
        ['^Left out \\(content too long\\): lines (.+)$', 'Pominięto (za długa treść): wiersze $1'],
        ['^(\\d+) (?:code|codes) made$', (m, k) => `Utworzono ${k} ${getPlural(k, 'kod', 'kody', 'kodów')}`],
        ['^(\\d+) (?:code|codes) made - (\\d+) left out$', (m, k, s) => `Utworzono ${k} ${getPlural(k, 'kod', 'kody', 'kodów')} - pominięto ${s}`],

        /* ---------- Problems with values ---------- */
        ['^The Swiss QR bill is drawn as its standard requires - (.+) (is|are) not used$',
            (m, k, v) => `Szwajcarski rachunek QR jest rysowany tak, jak wymaga jego standard - ${k} ${v === 'is' ? 'nie jest używany' : 'nie są używane'}`],
        ['^Contrast ([\\d.]+):1 between (#[0-9a-fA-F]+) and the background is too low - scanners need at least 3:1, better 4\\.5:1 or more$',
            (m, r, c) => `Kontrast ${formatDecimal(r)}:1 między ${c} a tłem jest za niski - skanery potrzebują co najmniej 3:1, lepiej 4,5:1 lub więcej`],
        ['^Contrast ([\\d.]+):1 between (#[0-9a-fA-F]+) and the background is low - 4\\.5:1 or more scans reliably, also in poor light$',
            (m, r, c) => `Kontrast ${formatDecimal(r)}:1 między ${c} a tłem jest niski - 4,5:1 lub więcej skanuje się niezawodnie, także przy słabym świetle`],
        ['^A quiet zone of (\\d+) (?:module|modules) is too small - the standard asks for 4, with less than 2 many scanners fail$',
            (m, k) => `Strefa ciszy o szerokości ${k} ${getPlural(k, 'modułu', 'modułów', 'modułów')} jest za mała - standard wymaga 4, przy mniej niż 2 wiele skanerów zawodzi`],
        ['^The quiet zone has (\\d+) modules - the standard asks for 4 \\(a light frame of 4 modules around the code\\)$',
            (m, k) => `Strefa ciszy ma ${k} ${getPlural(k, 'moduł', 'moduły', 'modułów')} - standard wymaga 4 (jasna ramka o szerokości 4 modułów wokół kodu)`],
        ['^The logo hides about (\\d+) % of the code, error correction ([LMQH]) repairs at most (\\d+) % - make the logo smaller or choose error correction H$',
            'Logo zakrywa ok. $1 % kodu, korekcja błędów $2 naprawia najwyżej $3 % - zmniejsz logo lub wybierz korekcję błędów H'],
        ['^The logo hides about (\\d+) % of the code, error correction ([LMQH]) repairs at most (\\d+) % - little room is left for dirt and damage; H is safer$',
            'Logo zakrywa ok. $1 % kodu, korekcja błędów $2 naprawia najwyżej $3 % - zostaje mało zapasu na brud i uszkodzenia; H jest bezpieczniejsze'],
        ['^A logo takes away part of the code: error correction Q or H keeps it readable \\(now ([LMQH])\\)$',
            'Logo zabiera część kodu: korekcja błędów Q lub H utrzymuje jego czytelność (teraz $1)'],
        ['^Unknown key "(.+)" - it is kept, but has no effect$', 'Nieznany klucz „$1” - zostaje zachowany, ale nic nie zmienia'],
        ['^"(.+)" is set twice - the last line counts$', '„$1” jest ustawiony dwa razy - liczy się ostatni wiersz'],
        ['^"(.+)" is not valid \\(([^()]+)\\) - the default is used$', (m, v, h) => `„${v}” jest nieprawidłowe (${translateHint(h)}) - używana jest wartość domyślna`],
        ['^An IBAN of ([A-Z]{2}) has (\\d+) characters, this one (\\d+)$', (m, c, a, b) => `IBAN z ${c} ma ${a} ${getPlural(a, 'znak', 'znaki', 'znaków')}, ten ma ${b}`],
        ['^(.+) is a link shortener or redirect service: the code works only as long as that service keeps the link - for printed codes put the real address in the code$',
            '$1 to skracacz linków lub usługa przekierowań: kod działa tylko tak długo, jak ta usługa utrzymuje link - w drukowanych kodach umieść prawdziwy adres'],
        ['^The SEPA code has (\\d+) bytes, at most 331 are allowed$', (m, k) => `Kod SEPA ma ${k} ${getPlural(k, 'bajt', 'bajty', 'bajtów')}, dozwolone jest najwyżej 331`],
        ['^Line (\\d+) has more than (\\d+) characters$', 'Wiersz $1 przekracza limit $2 znaków'],
        ['^The Swiss QR bill has (\\d+) characters, at most 997 are allowed$', (m, k) => `Szwajcarski rachunek QR ma ${k} ${getPlural(k, 'znak', 'znaki', 'znaków')}, dozwolone jest najwyżej 997`],

        /* ---------- Messages ---------- */
        ['^(Link|Text|WiFi|Contact|Email|SMS|Phone|Location|Event|Crypto|SEPA payment|Swiss QR bill) - "Undo" brings the previous content back$',
            (m, k) => `${TYPES[k]} - „Cofnij” przywraca poprzednią treść`],
        ['^No QR code found in "the clipboard"$', 'Nie znaleziono kodu QR w schowku'],
        ['^No QR code found in "(.+)"$', 'Nie znaleziono kodu QR w „$1”'],
        ['^QR code read \\((.+)\\) from "the camera" - it is a new document$', 'Odczytano kod QR ($1) z aparatu - to nowy dokument'],
        ['^QR code read \\((.+)\\) from "the clipboard" - it is a new document$', 'Odczytano kod QR ($1) ze schowka - to nowy dokument'],
        ['^QR code read \\((.+)\\) from "(.+)" - it is a new document$', 'Odczytano kod QR ($1) z „$2” - to nowy dokument'],
        ['^QR code read \\((.+)\\) - it is a new document$', 'Odczytano kod QR ($1) - to nowy dokument'],
        ['^QR code received - the editor found (\\d+) (?:problem|problems)$',
            (m, k) => `Kod QR otrzymany - edytor znalazł ${k} ${getPlural(k, 'problem', 'problemy', 'problemów')}`],
        /* the same messages when they arrive in English as a whole */
        ['^"(.+)" is open\\. My documents: open, rename, duplicate or delete your documents \\(Ctrl\\+O\\)$',
            '„$1” jest otwarty. Moje dokumenty: otwieraj, zmieniaj nazwy, duplikuj lub usuwaj swoje dokumenty (Ctrl+O)'],
        ['^New document "(.+)" - your other documents are under "My documents"$', 'Nowy dokument „$1” - pozostałe dokumenty są w „Moich dokumentach”'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$', 'Nowy dokument „$1” od AI - pozostałe dokumenty są bez zmian'],
        ['^"(.+)" is neither a \\.qr file nor a picture$', '„$1” nie jest ani plikiem .qr, ani obrazem'],
        ['^"(.+)" opened - it is now in "My documents"$', 'Otwarto „$1” - jest teraz w „Moich dokumentach”'],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '„$1” zmieniony przez AI - „Cofnij” to cofa'],
        ['^"(.+)" opened$', 'Otwarto „$1”'],

        /* ---------- My documents ---------- */
        ['^(\\d+) (?:document|documents) · (.+) in this browser$',
            (m, k, s) => `${k} ${getPlural(k, 'dokument', 'dokumenty', 'dokumentów')} · ${formatSize(s)} w tej przeglądarce`],
        ['^No document named "(.*)"\\.$', 'Brak dokumentu o nazwie „$1”.'],
        ['^Open now · (.+)$', (m, s) => `Otwarty teraz · ${formatSize(s)}`],
        ['^(just now|yesterday|\\d+ min ago|\\d+ h ago|[A-Z][a-z]{2} \\d{1,2}, \\d{4}) · (.+)$', (m, w, s) => `${formatTime(w)} · ${formatSize(s)}`],
        ['^(.+) \\(open now\\)$', '$1 (otwarty teraz)'],
        ['^ZIP with (\\d+) (?:document|documents) downloaded$', (m, k) => `Pobrano ZIP z ${k} ${getPlural(k, 'dokumentem', 'dokumentami', 'dokumentami')}`],
        ['^"(.+)" duplicated$', 'Zduplikowano „$1”'],
        ['^Delete "(.+)"\\?$', 'Usunąć „$1”?'],
        ['^"(.+)" deleted$', 'Usunięto „$1”'],

        /* ---------- AI Assistant ---------- */
        ['^Part (\\d+) of (\\d+) received$', 'Otrzymano część $1 z $2'],
        ['^Open the other (?:link|links) from the AI too \\(still missing: part (.+)\\)\\.$', 'Otwórz też pozostałe linki od AI (wciąż brakuje części: $1).'],
        ['^Part (\\d+) of (\\d+) received - paste the other (?:link|links) too \\(missing: (.+)\\)$', 'Otrzymano część $1 z $2 - wklej też pozostałe linki (brakuje: $3)'],
        ['^The AI sends the document to (.+) with a key that only works for this session\\. What you paste into your AI is handled by its provider\\.$',
            'AI wysyła dokument do $1 z kluczem, który działa tylko w tej sesji. Treści wklejane do AI są przetwarzane przez jej dostawcę.'],
        ['^The AI sends its result to (.+) by itself, and it opens here\\. If it answers with a link, paste its answer below\\.$',
            'AI sama wysyła swój wynik do $1, a wynik otwiera się tutaj. Jeśli odpowie linkiem, wklej jej odpowiedź poniżej.'],
        ['^No key from (.+) - the prompt asks the AI for a link instead$', 'Brak klucza od $1 - prompt prosi AI zamiast tego o link'],
        ['^Prompt copied - the AI sends its result to (.+)$', 'Prompt skopiowany - AI wyśle swój wynik do $1'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Otwórz $1'],
    ],
};
