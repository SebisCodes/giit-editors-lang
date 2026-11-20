/* Polish texts of the JSON editor: the bar, the work area (code, tree,
   value, insert, convert, schema), its dialogs and messages, and the
   problems found in the code. What all editors share is in
   common.js; how the dictionaries are used is described in
   i18n.js. Names of documents, keys and values stay as they are: the
   patterns copy them into the Polish text. */

import { formatTime, formatThousands, getPlural } from './format.js';

/* Polish plural: getPlural(5, 'strona', 'strony', 'stron') -> 'stron' (1 / 2-4, 22-24 … but not 12-14 / the rest) */

/* "1,234" -> "1 234" (Polish thousands separator: a no-break space) */

/* "1.5 KB" -> "1,5 KB" */
/**
 * Translates a size with its unit ("1.5 KB").
 * @param {string} s - the English size text.
 * @returns {string} the text in the language.
 */
const formatSizeUnit = s => s.replace(/^([\d.]+) (B|KB|MB|GB)$/, (x, v, u) => `${v.replace('.', ',')} ${u}`);
/* "1,234 bytes" / "1.5 KB" -> Polish number and unit */
/**
 * Translates the unit of a size text ("123 bytes").
 * @param {string} s - the English size text.
 * @returns {string} the text in the language.
 */
const formatSize = s => {
    const m = /^([\d,]+) bytes$/.exec(s);
    return m ? `${formatThousands(m[1])} ${getPlural(m[1], 'bajt', 'bajty', 'bajtów')}` : formatSizeUnit(s);
};

/* When a document was last changed (files.js): "just now", "5 min ago", "Oct 25, 2026" … */

/* Words inside messages */
const TYPE = { string: 'tekst', number: 'liczba', boolean: 'wartość logiczna', null: 'null', object: 'obiekt', array: 'tablica', integer: 'liczba całkowita' };
/**
 * Translates the text the pattern found (FOUND in the English pattern).
 * @param {string} s - the English text the pattern found.
 * @returns {string} the text in the language.
 */
const translateFound = s => (s === 'the end of the text' ? 'koniec tekstu' : s === 'the end of the line' ? 'koniec wiersza' : s);

export default {
    text: {
        "Protect the CSV export against spreadsheet formulas; plain signed numbers remain unchanged.": "Chroń eksport CSV przed formułami arkusza; zwykłe liczby ze znakiem pozostają bez zmian.",
        /* ---------- Top bar ---------- */
        'JSON Editor - home': 'Edytor JSON - strona główna',
        'JSON Editor': 'Edytor JSON',
        'File': 'Plik',
        'My documents (Ctrl+O)': 'Moje dokumenty (Ctrl+O)',
        'My documents': 'Moje dokumenty',
        'New document, or start this one over': 'Nowy dokument albo rozpoczęcie tego od nowa',
        'New': 'Nowy',
        'New blank document': 'Nowy pusty dokument',
        'An empty object - your other documents stay as they are': 'Pusty obiekt - pozostałe dokumenty zostają bez zmian',
        'Settings': 'Ustawienia',
        'A configuration with nested objects': 'Konfiguracja z zagnieżdżonymi obiektami',
        'Node package': 'Pakiet Node',
        'A package.json with scripts and dependencies': 'Plik package.json ze skryptami i zależnościami',
        'Table': 'Tabela',
        'An array of objects - converts to CSV': 'Tablica obiektów - można przekonwertować do CSV',
        'A schema to check other documents with': 'Schemat do sprawdzania innych dokumentów',
        'Map points (GeoJSON)': 'Punkty na mapie (GeoJSON)',
        'A feature collection with one point': 'Kolekcja obiektów z jednym punktem',
        'The welcome example': 'Przykład powitalny',
        'Shows what the editor can do': 'Pokazuje, co potrafi edytor',
        'Start this document over': 'Zacznij ten dokument od nowa',
        'Empties the data - "Undo" brings it back': 'Opróżnia dane - „Cofnij” je przywraca',
        'Open a JSON file from your computer (YAML, CSV and XML files are converted; you can also drag a file into the window)':
            'Otwórz plik JSON z komputera (pliki YAML, CSV i XML zostaną przekonwertowane; plik można też przeciągnąć do okna)',
        'Open file…': 'Otwórz plik…',
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
        'Save the document as a .json file (Ctrl+S)': 'Zapisz dokument jako plik .json (Ctrl+S)',
        'Download .json': 'Pobierz .json',
        'Minified JSON, YAML, CSV and more (Ctrl+E)': 'Zminifikowany JSON, YAML, CSV i więcej (Ctrl+E)',
        'Export…': 'Eksportuj…',

        /* ---------- Views and work area ---------- */
        'View': 'Widok',
        'Edit': 'Edycja',
        'Tree': 'Drzewo',
        'Value': 'Wartość',
        'JSON code': 'Kod JSON',
        'Copy the code to the clipboard': 'Skopiuj kod do schowka',
        'Copy code': 'Kopiuj kod',
        'Copy': 'Kopiuj',
        'Write the data as plain JSON with neat indentation (Ctrl+Shift+F)':
            'Zapisz dane jako zwykły JSON z porządnymi wcięciami (Ctrl+Shift+F)',
        'Format': 'Formatuj',
        'Write the data on one line, without spaces': 'Zapisz dane w jednym wierszu, bez spacji',
        'Minify': 'Minifikuj',
        'Drag to change the width of the code area': 'Przeciągnij, aby zmienić szerokość obszaru kodu',
        'Drag to change the width': 'Przeciągnij, aby zmienić szerokość',
        'Unfold everything': 'Rozwiń wszystko',
        'Fold everything': 'Zwiń wszystko',
        'Add an entry: into the selected object or array, otherwise after the selected entry':
            'Dodaj wpis: do zaznaczonego obiektu lub tablicy, w przeciwnym razie po zaznaczonym wpisie',
        'Add an entry': 'Dodaj wpis',
        'Duplicate the selected entry': 'Duplikuj zaznaczony wpis',
        'Duplicate': 'Duplikuj',
        'Move the selected entry up (Alt+Up)': 'Przesuń zaznaczony wpis w górę (Alt+Up)',
        'Move up': 'W górę',
        'Move the selected entry down (Alt+Down)': 'Przesuń zaznaczony wpis w dół (Alt+Down)',
        'Move down': 'W dół',
        'Remove the selected entry (Delete)': 'Usuń zaznaczony wpis (Delete)',
        'Remove': 'Usuń',
        'The type of the selected value - choosing another one changes it':
            'Typ zaznaczonej wartości - wybranie innego go zmienia',
        'Type': 'Typ',
        'string': 'tekst',
        'number': 'liczba',
        'boolean': 'logiczna',
        'null': 'pusta (null)',
        'object': 'obiekt',
        'array': 'tablica',
        'alias': 'alias',
        'Search keys and values': 'Szukaj…',
        'Previous match (Shift+Enter)': 'Poprzednie trafienie (Shift+Enter)',
        'Previous match': 'Poprzednie trafienie',
        'Next match (Enter)': 'Następne trafienie (Enter)',
        'Next match': 'Następne trafienie',
        'The data as a tree: click a key or a value to change it':
            'Dane jako drzewo: kliknij klucz lub wartość, aby je zmienić',
        'Copy the path of the selected value': 'Skopiuj ścieżkę zaznaczonej wartości',
        'Copy path': 'Kopiuj ścieżkę',
        'Side panel': 'Panel boczny',
        'The selected key and value': 'Zaznaczony klucz i wartość',
        'New entries and pieces of code': 'Nowe wpisy i fragmenty kodu',
        'Insert': 'Wstaw',
        'Format the document, or convert it to another format': 'Sformatuj dokument lub przekonwertuj go do innego formatu',
        'Convert': 'Konwersja',
        'Check the document against a JSON Schema': 'Sprawdź dokument względem schematu JSON Schema',
        'Schema': 'Schemat',
        'Open it here': 'Otwórz tutaj',
        'Drop the file here': 'Upuść tu plik',

        /* Inside the tree */
        'Key': 'Klucz',
        'Anchor': 'Kotwica',
        'Alias': 'Alias',
        'empty': 'pusty',
        'No data yet': 'Brak danych',
        'Empty document': 'Pusty dokument',

        /* Problems above the code */
        'Hide': 'Ukryj',
        'Show': 'Pokaż',

        /* ---------- Value tab ---------- */
        'Click a key or a value in the tree.': 'Kliknij klucz lub wartość w drzewie.',
        'The document has no data yet.': 'Dokument nie ma jeszcze danych.',
        'Path': 'Ścieżka',
        'Apply': 'Zastosuj',
        'Add after it': 'Dodaj za nim',
        'Anchor:': 'Kotwica:',
        'Alias of the anchor:': 'Alias kotwicy:',

        /* ---------- Insert tab ---------- */
        'Add to the selected value': 'Dodaj do zaznaczonej wartości',
        'Into the selected object or array, otherwise after the selected entry. One step for Undo.':
            'Do zaznaczonego obiektu lub tablicy, w przeciwnym razie po zaznaczonym wpisie. Możesz cofnąć tę zmianę jednym krokiem.',
        'Text': 'Tekst',
        'A new string': 'Nowy tekst',
        'Number': 'Liczba',
        'A new number': 'Nowa liczba',
        'True / false': 'Prawda / fałsz',
        'A new boolean': 'Nowa wartość logiczna',
        'Empty (null)': 'Pusta (null)',
        'A new null': 'Nowy null',
        'Object { }': 'Obiekt { }',
        'A new empty object': 'Nowy pusty obiekt',
        'Array [ ]': 'Tablica [ ]',
        'A new empty array': 'Nowa pusta tablica',
        'At the cursor in the code': 'W miejscu kursora w kodzie',
        'Object': 'Obiekt',
        'An object with one key': 'Obiekt z jednym kluczem',
        'Array': 'Tablica',
        'An empty array': 'Pusta tablica',
        'Key and value': 'Klucz i wartość',
        'One entry of an object': 'Jeden wpis obiektu',
        'Table (rows)': 'Tabela (wiersze)',
        'Text in quotes': 'Tekst w cudzysłowie',
        'A string': 'Wartość tekstowa',
        'Today\'s date': 'Dzisiejsza data',
        'The date as YYYY-MM-DD': 'Data jako RRRR-MM-DD',
        'Date and time': 'Data i godzina',
        'The date and time (ISO 8601, UTC)': 'Data i godzina (ISO 8601, UTC)',
        'An empty value': 'Pusta wartość',
        'true': 'prawda (true)',
        'false': 'fałsz (false)',
        'The boolean true': 'Wartość logiczna true',
        'The boolean false': 'Wartość logiczna false',

        /* ---------- Convert tab ---------- */
        'This document': 'Ten dokument',
        'Indentation': 'Wcięcie',
        '2 spaces': '2 spacje',
        '4 spaces': '4 spacje',
        'Tabs': 'Tabulatory',
        'Plain JSON with neat indentation': 'Zwykły JSON z porządnymi wcięciami',
        'All on one line, without spaces': 'Wszystko w jednym wierszu, bez spacji',
        'The keys of every object in alphabetical order': 'Klucze każdego obiektu w kolejności alfabetycznej',
        'Sort keys': 'Sortuj klucze',
        'Convert to': 'Konwertuj do',
        'YAML text': 'Tekst YAML',
        'CSV (an array of objects)': 'CSV (tablica obiektów)',
        'XML text': 'Tekst XML',
        'The tree as plain text': 'Drzewo jako zwykły tekst',
        'Result': 'Wynik',
        'Download': 'Pobierz',
        'Each object is a row, its keys are the columns. Texts that look like numbers are in quotes.':
            'Każdy obiekt to wiersz, jego klucze to kolumny. Teksty wyglądające jak liczby są w cudzysłowie.',
        'The data is inside <root>; the items of an array are <item> elements.':
            'Dane są wewnątrz <root>; elementy tablicy to elementy <item>.',
        'Opens the result as a new document in the YAML Editor (in a new tab)':
            'Otwiera wynik jako nowy dokument w Edytorze YAML (w nowej karcie)',
        'Open in the YAML Editor': 'Otwórz w Edytorze YAML',

        /* ---------- Schema tab ---------- */
        'Check this document against a JSON Schema that is one of your documents (open or paste it as a new document first). The editor never downloads a schema.':
            'Sprawdź ten dokument względem schematu JSON Schema, który jest jednym z twoich dokumentów (najpierw otwórz go lub wklej jako nowy dokument). Edytor nigdy nie pobiera schematu.',
        'No schema': 'Bez schematu',
        'The chosen schema document is not there any more.': 'Wybranego dokumentu ze schematem już nie ma.',
        'Checked again once the syntax error is fixed.': 'Zostanie sprawdzony ponownie po poprawieniu błędu składni.',
        'The data fits the schema.': 'Dane są zgodne ze schematem.',
        'place does not fit the schema - see above the code.': 'niezgodność ze schematem - sprawdź nad kodem.',
        'places do not fit the schema - see above the code.': 'niezgodności ze schematem - sprawdź nad kodem.',
        'The document names the schema': 'Dokument wskazuje schemat',
        '- it is not loaded from there.': '- nie jest on stamtąd ładowany.',
        'Open the schema': 'Otwórz schemat',
        'A new document with a schema that this data fits': 'Nowy dokument ze schematem zgodnym z tymi danymi',
        'Make a schema from this data': 'Utwórz schemat z tych danych',

        /* ---------- Export ---------- */
        'Close': 'Zamknij',
        'File name': 'Nazwa pliku',
        'JSON file as it is (.json)': 'Plik JSON bez zmian (.json)',
        'Minified JSON file (.json)': 'Zminifikowany plik JSON (.json)',
        'YAML file (.yaml)': 'Plik YAML (.yaml)',
        'CSV table (.csv)': 'Tabela CSV (.csv)',
        'The tree as plain text (.txt)': 'Drzewo jako zwykły tekst (.txt)',
        'Download every format at once': 'Pobierz wszystkie formaty naraz',
        'All formats (ZIP)': 'Wszystkie formaty (ZIP)',

        /* ---------- My documents ---------- */
        'Search by name': 'Szukaj po nazwie',
        'Search your documents': 'Przeszukaj dokumenty',
        'Open a file from your computer as a new document': 'Otwórz plik z komputera jako nowy dokument',
        'New document': 'Nowy dokument',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Kliknij dokument, aby go otworzyć. Są przechowywane tylko w tej przeglądarce - nic nie jest wysyłane. Wyczyszczenie danych witryny w przeglądarce je usuwa, więc pobierz te, które chcesz zachować.',
        'Download every document as a .json file in one ZIP': 'Pobierz każdy dokument jako plik .json w jednym ZIP',
        'Download all (ZIP)': 'Pobierz wszystkie (ZIP)',
        'Rename': 'Zmień nazwę',
        'Download as .json': 'Pobierz jako .json',
        'Delete': 'Usuń',
        'New name': 'Nowa nazwa',
        'This document is open': 'Ten dokument jest otwarty',
        'Click to open this document': 'Kliknij, aby otworzyć ten dokument',
        'No documents yet.': 'Brak dokumentów.',

        /* ---------- AI Assistant ---------- */
        'Any AI can work with you - ChatGPT, Claude, Gemini, Copilot.':
            'Każda AI może pracować razem z tobą - ChatGPT, Claude, Gemini, Copilot.',
        'Connected AI': 'Połączona AI',
        'Connected to': 'Połączono z',
        'the AI sends its result there, and it opens here.': 'AI wysyła tam swój wynik, który otwiera się tutaj.',
        'What': 'Co',
        'tells the AI': 'przekazuje AI',
        'The AI should': 'AI ma',
        'Change “': 'Zmienić „',
        '”': '”',
        'Make a new document': 'Utworzyć nowy dokument',
        'The AI\'s answer (or press Ctrl+V anywhere):': 'Odpowiedź AI (lub naciśnij Ctrl+V w dowolnym miejscu):',
        'The document travels in the link after the “#”, which no server sees. What you paste into your AI is handled by its provider.':
            'Dokument podróżuje w linku po znaku „#”, którego nie widzi żaden serwer. Treści wklejane do AI są przetwarzane przez jej dostawcę.',
        'The prompt - copy it with Ctrl+C': 'Prompt - skopiuj go przez Ctrl+C',
        'Copy prompt': 'Kopiuj prompt',
        'Paste it into your AI and say what it should change.': 'Wklej go do swojej AI i napisz, co ma zmienić.',
        'The AI answers with a link: click it, or paste the whole answer below.':
            'AI odpowiada linkiem: kliknij go albo wklej całą odpowiedź poniżej.',
        'takes it back.': 'cofa to.',
        'The AI answers with a link:': 'AI odpowiada linkiem:',
        'paste its whole answer below': 'wklej całą jej odpowiedź poniżej',
        '(a clicked link opens a separate editor).': '(kliknięty link otwiera osobny edytor).',
        '(no key yet)': '(jeszcze bez klucza)',
        '(key valid while the editor is open)': '(klucz ważny, dopóki edytor jest otwarty)',
        'The link could not be read': 'Nie udało się odczytać linku',
        'The document in this link is incomplete or damaged. If the AI\'s link was split over several lines (as in a terminal), copy the whole answer and paste it into the editor with Ctrl+V - the editor joins the lines.':
            'Dokument w tym linku jest niekompletny lub uszkodzony. Jeśli link od AI został podzielony na kilka wierszy (jak w terminalu), skopiuj całą odpowiedź i wklej ją do edytora przez Ctrl+V - edytor połączy wiersze.',
        'Loading…': 'Wczytywanie…',
        'Taken over by your editor': 'Przekazano do edytora',
        'The document is now in the JSON Editor tab you already had open. Switch to that tab, or open it here.':
            'Dokument jest teraz w karcie Edytora JSON, którą masz już otwartą. Przejdź do tamtej karty albo otwórz go tutaj.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)':
            'Kopiowanie jest tu niedozwolone - tekst jest zaznaczony poniżej: naciśnij Ctrl+C (⌘C)',
        'Prompt copied - paste it into your AI and say what it should write':
            'Prompt skopiowany - wklej go do swojej AI i opisz, co ma napisać',
        'This link is incomplete or damaged - please ask the AI to send it again':
            'Ten link jest niekompletny lub uszkodzony - poproś AI, aby wysłała go ponownie',

        /* ---------- Save to your server ---------- */
        'Save to your server': 'Zapis na twoim serwerze',
        'Webhook address': 'Adres webhooka',
        'https://example.com/api/json': 'https://example.com/api/json',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(opcjonalny, wysyłany jako „Authorization: Bearer …”; przechowywany do zamknięcia tej karty)',
        'Send automatically a few seconds after each change (otherwise only when you click':
            'Wysyłaj automatycznie kilka sekund po każdej zmianie (w przeciwnym razie tylko po kliknięciu',
        'or press Ctrl+S)': 'lub Ctrl+S)',
        'Only for “': 'Tylko dla „',
        '” (other documents use the general address)': '” (inne dokumenty używają adresu ogólnego)',
        'What your server receives': 'Co otrzymuje twój serwer',
        'A POST request with JSON (your server must allow CORS from https://json.giit.ch); content is the document as a string:':
            'Żądanie POST z JSON (serwer musi zezwalać na CORS z https://json.giit.ch); content to dokument jako tekst:',
        'Embed the editor in your website': 'Osadź edytor na swojej stronie',
        'Send now': 'Wyślij teraz',
        'Save setting': 'Zapisz ustawienie',

        /* ---------- Help ---------- */
        'How it works': 'Jak to działa',
        'Keyboard shortcuts': 'Skróty klawiszowe',
        'In the tree: go up and down, fold and unfold': 'W drzewie: w górę i w dół, zwijanie i rozwijanie',
        'In the tree: remove the entry': 'W drzewie: usuń wpis',
        'In the tree: move the entry up / down': 'W drzewie: przesuń wpis w górę / w dół',
        'Search keys and values in the tree': 'Szukaj kluczy i wartości w drzewie',
        'Format the document': 'Sformatuj dokument',
        'Indent / outdent in the code': 'Zwiększ / zmniejsz wcięcie w kodzie',
        'Undo / redo': 'Cofnij / ponów',
        'Save (download, or to your server) / export': 'Zapisz (pobierz lub zapisz na serwerze) / eksportuj',
        'Alt': 'Alt',
        'Problems (a missing comma, a duplicate key, what does not fit the schema) are listed above the code with line and column - click one to go there.':
            'Problemy (brakujący przecinek, powtórzony klucz, niezgodność ze schematem) są wymienione nad kodem z wierszem i kolumną - kliknij jeden, aby tam przejść.',
        'In the tree: change the value (F2: the key)': 'W drzewie: zmień wartość (F2: klucz)',

        /* ---------- JSON Lines ---------- */
        'JSON Lines': 'JSON Lines',
        'JSON Lines needs an array - each entry becomes one line':
            'JSON Lines wymaga tablicy - każdy wpis staje się jednym wierszem',
        'An event log: one JSON object per line': 'Dziennik zdarzeń: jeden obiekt JSON na wiersz',
        'Open a JSON or JSON Lines file from your computer (YAML, CSV and XML files are converted; you can also drag a file into the window)':
            'Otwórz plik JSON lub JSON Lines z komputera (pliki YAML, CSV i XML zostaną przekonwertowane; plik można też przeciągnąć do okna)',
        'JSON Lines file (.jsonl)': 'Plik JSON Lines (.jsonl)',
        'JSON array': 'Tablica JSON',
        'Opens the result as a new document in this editor': 'Otwiera wynik jako nowy dokument w tym edytorze',
        'Download .jsonl': 'Pobierz .jsonl',
        'Save the document as a .jsonl file (Ctrl+S)': 'Zapisz dokument jako plik .jsonl (Ctrl+S)',
        '.jsonl downloaded': 'Pobrano .jsonl',
        'Extra text after the value - a line of JSON Lines holds one value':
            'Dodatkowy tekst po wartości - wiersz JSON Lines zawiera jedną wartość',
        'This is the only line - "Start this document over" in the New menu empties it':
            'To jedyny wiersz - „Zacznij ten dokument od nowa” w menu Nowy go opróżnia',
        'This line is the first already': 'Ten wiersz jest już pierwszy',
        'This line is the last already': 'Ten wiersz jest już ostatni',

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
        'The code has a syntax error - fix it first (see above the code), then edit in the tree':
            'Kod ma błąd składni - najpierw go popraw (sprawdź nad kodem), potem edytuj w drzewie',
        'The code has a syntax error - fix it first (see above the code)':
            'Kod ma błąd składni - najpierw go popraw (sprawdź nad kodem)',
        'The document has a syntax error - fix it first': 'Dokument ma błąd składni - najpierw go popraw',
        'The document has no data yet': 'Dokument nie ma jeszcze danych',
        'The document has no data to add to': 'Dokument nie ma danych, do których można coś dodać',
        'Only an object can be added to the root object': 'Do obiektu głównego można dodać tylko obiekt',
        'The root is neither an object nor an array': 'Korzeń nie jest ani obiektem, ani tablicą',
        'Choose a value in the tree first': 'Najpierw wybierz wartość w drzewie',
        'The root is a single value - change its type to object or array first':
            'Korzeń to pojedyncza wartość - najpierw zmień jego typ na obiekt lub tablicę',
        'The root cannot be removed - "Start this document over" in the New menu empties it':
            'Korzenia nie można usunąć - „Zacznij ten dokument od nowa” w menu Nowy go opróżnia',
        'The root has no place to move to': 'Korzeń nie ma dokąd się przesunąć',
        'This entry is the first already': 'Ten wpis jest już pierwszy',
        'This entry is the last already': 'Ten wpis jest już ostatni',
        'Entries of an array have no key': 'Wpisy tablicy nie mają klucza',
        'A boolean is true or false - choose another type above the tree to change the type':
            'Wartość logiczna to true lub false - wybierz inny typ nad drzewem, aby zmienić typ',
        'null has no value - choose another type above the tree to change the type':
            'null nie ma wartości - wybierz inny typ nad drzewem, aby zmienić typ',
        'This value is changed in the code': 'Ta wartość jest zmieniona w kodzie',
        'Keys sorted': 'Klucze posortowane',
        'Minified': 'Zminifikowano',
        'Formatted': 'Sformatowano',
        'The keys are sorted already': 'Klucze są już posortowane',
        'The document is minified already': 'Dokument jest już zminifikowany',
        'The document is formatted already': 'Dokument jest już sformatowany',
        'Remove the comments?': 'Usunąć komentarze?',
        'Write plain JSON': 'Zapisz zwykły JSON',
        'This document is empty already': 'Ten dokument jest już pusty',
        'All data is removed. "Undo" brings it back as long as the page is open.':
            'Wszystkie dane zostaną usunięte. „Cofnij” przywraca je, dopóki strona jest otwarta.',
        'Start over': 'Zacznij od nowa',
        'The file is larger than 8 MB': 'Plik jest większy niż 8 MB',
        'Downloaded': 'Pobrano',
        'Copied to the clipboard': 'Skopiowano do schowka',
        'Code copied': 'Kod skopiowany',
        '.json downloaded': 'Pobrano .json',
        'Add': 'Dodaj',
        'Replace': 'Zastąp',
        'Open as a new document': 'Otwórz jako nowy dokument',
        'The document is removed from this browser for good. Download it first if you want to keep a copy.':
            'Dokument zostanie trwale usunięty z tej przeglądarki. Jeśli chcesz zachować kopię, najpierw go pobierz.',
        'The YAML package is not loaded yet': 'Pakiet YAML nie jest jeszcze załadowany',
        'CSV needs an array of objects (a list of rows) - this data is not an array':
            'CSV wymaga tablicy obiektów (listy wierszy) - te dane nie są tablicą',
        'CSV needs an array of objects - some entries of this array are not objects':
            'CSV wymaga tablicy obiektów - niektóre wpisy tej tablicy nie są obiektami',
        'A quote in the CSV is never closed': 'Cudzysłów w CSV nie jest nigdzie zamknięty',

        /* ---------- Problems in the code ---------- */
        'Comments are not part of plain JSON (JSON with comments) - "Format" writes plain JSON without them':
            'Komentarze nie należą do zwykłego JSON (JSON z komentarzami) - „Formatuj” zapisuje zwykły JSON bez nich',
        'A comma after the last entry is not allowed in plain JSON - "Format" removes it':
            'Przecinek po ostatnim wpisie jest niedozwolony w zwykłym JSON - „Formatuj” go usuwa',
        'Single quotes are JSON5, not plain JSON - "Format" writes double quotes':
            'Pojedyncze cudzysłowy to JSON5, nie zwykły JSON - „Formatuj” zapisuje podwójne cudzysłowy',
        'Keys without quotes are JSON5, not plain JSON - "Format" adds the quotes':
            'Klucze bez cudzysłowów to JSON5, nie zwykły JSON - „Formatuj” dodaje cudzysłowy',
        'This number is written as in JSON5 (hexadecimal, Infinity, NaN, a + sign or a point at the start or end) - plain JSON does not allow it':
            'Ta liczba jest zapisana jak w JSON5 (szesnastkowo, Infinity, NaN, znak + albo kropka na początku lub końcu) - zwykły JSON na to nie pozwala',
        'This escape (\\\', \\v, \\0 or \\x) is JSON5, not plain JSON':
            'Ta sekwencja (\\\', \\v, \\0 lub \\x) to JSON5, nie zwykły JSON',
        'A string continued on the next line with \\ is JSON5, not plain JSON':
            'Tekst kontynuowany w następnym wierszu przez \\ to JSON5, nie zwykły JSON',
        'This comment /* is never closed with */': 'Ten komentarz /* nie jest nigdzie zamknięty przez */',
        '\\u needs four hexadecimal digits, e.g. \\u00e9': '\\u wymaga czterech cyfr szesnastkowych, np. \\u00e9',
        'A line break inside a string must be written as \\n': 'Podział wiersza wewnątrz tekstu trzeba zapisać jako \\n',
        'A tab inside a string must be written as \\t': 'Tabulator wewnątrz tekstu trzeba zapisać jako \\t',
        'A control character inside a string must be written as \\u0000 … \\u001f':
            'Znak sterujący wewnątrz tekstu trzeba zapisać jako \\u0000 … \\u001f',
        'A value is missing': 'Brakuje wartości',
        'A number cannot start with 0 - write it without the leading 0':
            'Liczba nie może zaczynać się od 0 - zapisz ją bez początkowego 0',
        'One comma too many - an entry is missing here': 'O jeden przecinek za dużo - brakuje tu wpisu',
        'One comma too many - a value is missing here': 'O jeden przecinek za dużo - brakuje tu wartości',
        'A comma is missing between the entries': 'Brakuje przecinka między wpisami',
        'The document is empty': 'Dokument jest pusty',
        'Extra text after the end of the data - a JSON document has one value at the top (usually an object or an array)':
            'Dodatkowy tekst po końcu danych - dokument JSON ma na najwyższym poziomie jedną wartość (zwykle obiekt lub tablicę)',
        'The data is nested too deeply': 'Dane są zagnieżdżone zbyt głęboko',

        /* ---------- The same in English and German, not in Polish ---------- */
        'Code': 'Kod',
        'Export': 'Eksport',
        'Name': 'Nazwa',
        'Label': 'Etykieta',
    },
    html: {
        '<b>Export</b> also has <b>Open in another editor</b>: it converts the document and opens it as a new document there. Anything the other format cannot hold is listed first.':
            '<b>Eksport</b> oferuje też <b>Otwórz w innym edytorze</b>: dokument zostaje przekonwertowany i otwarty tam jako nowy. To, czego drugi format nie może pomieścić, jest najpierw wymienione.',
        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Kliknij <b>Kopiuj prompt</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'AI odpowiada linkiem: kliknij go albo wklej całą odpowiedź poniżej. <b>Cofnij</b> to cofa.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'AI odpowiada linkiem: <b>wklej całą jej odpowiedź poniżej</b> (kliknięty link otwiera osobny edytor). <b>Cofnij</b> to cofa.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'Edytor może wysyłać każdą zapisaną wersję na twój własny serwer (<b>webhook</b>), dzięki czemu praca jest przechowywana tam, gdzie chcesz. Nic nie jest wysyłane, dopóki nie wpiszesz tu adresu.',
        'Also possible: <code>?src=&lt;URL of a .json file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>jsoneditor:ai</code>, <code>jsoneditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Możliwe jest też: <code>?src=&lt;URL pliku .json&gt;</code> otwiera plik, <code>&amp;webhook=&lt;URL&gt;</code> zapisuje tam ten dokument. Edytor może też otworzyć się we własnym oknie (<code>?embed=window</code>), a twoja strona może przekazać mu własny prompt dla AI i klucz sesji, aby AI wysłała wynik na twój serwer (<code>jsoneditor:ai</code>, <code>jsoneditor:key-request</code>) - zobacz „Edytor na własnej stronie” pod edytorem. Szczegóły są w <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> JSON on the left - or start with <b>New</b> and one of the templates. The tree in the middle shows the data as you type: objects and arrays fold, every value shows its type, <code>{3}</code> and <code>[5]</code> count the entries.':
            '<b>Pisz</b> JSON po lewej - albo zacznij od <b>Nowy</b> i jednego z szablonów. Drzewo pośrodku pokazuje dane na bieżąco: obiekty i tablice się zwijają, każda wartość pokazuje swój typ, <code>{3}</code> i <code>[5]</code> liczą wpisy.',
        '<b>Click a key or a value in the tree</b> to change it right there. <b>Enter</b> or a click elsewhere writes the change into the code at exactly that place (one step for Undo), <b>Escape</b> cancels. The buttons above the tree add, duplicate, move and remove entries and change the type of a value.':
            '<b>Kliknij klucz lub wartość w drzewie</b>, aby zmienić je na miejscu. <b>Enter</b> lub kliknięcie gdzie indziej zapisuje zmianę w kodzie dokładnie w tym miejscu (cofnięcie jednym krokiem), <b>Escape</b> anuluje. Przyciski nad drzewem dodają, duplikują, przesuwają i usuwają wpisy oraz zmieniają typ wartości.',
        'A click in the tree puts the code\'s cursor on that value; the cursor in the code marks its value in the tree. The path of the selected value (<code>$.items[3].name</code>) is below the tree.':
            'Kliknięcie w drzewie ustawia kursor kodu na tej wartości; kursor w kodzie zaznacza swoją wartość w drzewie. Ścieżka zaznaczonej wartości (<code>$.items[3].name</code>) jest pod drzewem.',
        '<b>Value</b> on the right shows the selected key and value; <b>Insert</b> adds entries and pieces of code; <b>Convert</b> formats the document or converts it to YAML, CSV or XML; <b>Schema</b> checks it against a JSON Schema from your documents.':
            '<b>Wartość</b> po prawej pokazuje zaznaczony klucz i wartość; <b>Wstaw</b> dodaje wpisy i fragmenty kodu; <b>Konwersja</b> formatuje dokument lub konwertuje go do YAML, CSV albo XML; <b>Schemat</b> sprawdza go względem schematu JSON Schema z twoich dokumentów.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser. <b>Export</b> saves it as JSON, minified JSON, YAML, CSV or text.':
            '<b>Moje dokumenty</b> (przycisk folderu w lewym górnym rogu) wymienia wszystkie dokumenty przechowywane w tej przeglądarce. <b>Eksportuj</b> zapisuje dokument jako JSON, zminifikowany JSON, YAML, CSV lub tekst.',
        'Quotes and brackets close by themselves around a selection; Enter after <code>{</code> or <code>[</code> indents the next line.':
            'Cudzysłowy i nawiasy zamykają się same wokół zaznaczenia; Enter po <code>{</code> lub <code>[</code> wcina następny wiersz.',

    },
    patterns: [
        /* ---------- Status lines ---------- */
        ['^(\\d+) (?:line|lines) · ([\\d.]+ K?B)( · JSON Lines)?( · JSON5| · JSON with comments)?$',
            (m, l, kb, jl, d) => `${l} ${getPlural(l, 'wiersz', 'wiersze', 'wierszy')} · ${formatSize(kb)}${jl ? ' · JSON Lines' : ''}${d === ' · JSON with comments' ? ' · JSON z komentarzami' : d || ''}`],
        ['^([\\d,]+) bytes$', (m, b) => formatSize(m)],
        ['^\\d{1,3}(?:,\\d{3})+$', m => formatThousands(m)],
        ['^Show (\\d+) more of (\\d+)$', 'Pokaż kolejne $1 z $2'],
        ['^Document (\\d+)$', 'Dokument $1'],

        ['^Line (\\d+)$', 'Wiersz $1'],
        ['^Line (\\d+) is not valid JSON$', 'Wiersz $1 nie jest poprawnym JSON'],
        ['^Line (\\d+) has a syntax error - fix it first \\(see above the code\\)$',
            'Wiersz $1 ma błąd składni - najpierw go popraw (sprawdź nad kodem)'],
        ['^Not every line has the same keys - line (\\d+) differs from line (\\d+)$',
            'Nie każdy wiersz ma te same klucze - wiersz $1 różni się od wiersza $2'],
        ['^New document "(.+)"$', 'Nowy dokument „$1”'],
        /* Problems above the code */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'błąd', 'błędy', 'błędów')}`],
        ['^· (\\d+) (?:schema problem|schema problems)$',
            (m, k) => `· ${k} ${getPlural(k, 'problem ze schematem', 'problemy ze schematem', 'problemów ze schematem')}`],
        ['^(\\d+) (?:schema problem|schema problems)$',
            (m, k) => `${k} ${getPlural(k, 'problem ze schematem', 'problemy ze schematem', 'problemów ze schematem')}`],
        ['^(\\d+) (?:schema problem|schema problems) · (\\d+) (?:note|notes)$',
            (m, k, j) => `${k} ${getPlural(k, 'problem ze schematem', 'problemy ze schematem', 'problemów ze schematem')} · ${j} ${getPlural(j, 'uwaga', 'uwagi', 'uwag')}`],
        ['^· (\\d+) (?:note|notes)$', (m, k) => `· ${k} ${getPlural(k, 'uwaga', 'uwagi', 'uwag')}`],
        ['^· (\\d+) (?:schema problem|schema problems) · (\\d+) (?:note|notes)$',
            (m, k, j) => `· ${k} ${getPlural(k, 'problem ze schematem', 'problemy ze schematem', 'problemów ze schematem')} · ${j} ${getPlural(j, 'uwaga', 'uwagi', 'uwag')}`],
        ['^(\\d+) (?:note|notes)$', (m, k) => `${k} ${getPlural(k, 'uwaga', 'uwagi', 'uwag')}`],
        ['^Line (\\d+), column (\\d+)$', 'Wiersz $1, kolumna $2'],
        ['^The key "(.*)" is twice in this object - most programs keep only the last one$',
            'Klucz „$1” występuje w tym obiekcie dwukrotnie - większość programów zachowuje tylko ostatni'],
        ['^This string is never closed - a (.) is missing$', 'Ten tekst nie jest nigdzie zamknięty - brakuje $1'],
        ['^Unknown escape (\\\\.?) in a string - write \\\\\\\\ for a backslash$',
            'Nieznana sekwencja $1 w tekście - napisz \\\\ dla ukośnika odwrotnego'],
        ['^The text ends here - a value and a (.) are missing$', 'Tekst kończy się tutaj - brakuje wartości i $1'],
        ['^Unexpected "(.*)" - a string needs quotes; other values are numbers, true, false or null$',
            'Nieoczekiwane „$1” - tekst wymaga cudzysłowów; inne wartości to liczby, true, false lub null'],
        ['^A value is expected here - found (.*)$', (m, f) => `Oczekiwano tu wartości - znaleziono: ${translateFound(f)}`],
        ['^This (.) is never closed - a (.) is missing$', 'Ten $1 nie jest nigdzie zamknięty - brakuje $2'],
        ['^A key in double quotes is expected here - found (.*)$',
            (m, f) => `Oczekiwano tu klucza w podwójnych cudzysłowach - znaleziono: ${translateFound(f)}`],
        ['^A ":" is missing after the key "(.*)"$', 'Brakuje „:” po kluczu „$1”'],
        ['^"," or "(.)" is expected here - found (.*)$',
            (m, c, f) => `Oczekiwano tu „,” lub „${c}” - znaleziono: ${translateFound(f)}`],
        ['^The schema "(.+)" has a syntax error in line (\\d+) - it is not used$',
            'Schemat „$1” ma błąd składni w wierszu $2 - nie jest używany'],

        /* Schema problems */
        ['^Schema: the type must be (.+) \\(it is (\\w+)\\)$',
            (m, w, is) => `Schemat: wymagany typ: ${w.split(' or ').map(x => TYPE[x] || x).join(' lub ')} (jest: ${TYPE[is] || is})`],
        ['^Schema: "(.*)" is missing \\(required\\)$', 'Schemat: brakuje „$1” (required)'],
        ['^Schema: "(.*)" is not allowed here \\(additionalProperties\\)$',
            'Schemat: „$1” jest tu niedozwolony (additionalProperties)'],
        ['^Schema: must be one of (.*) \\(enum\\)$', 'Schemat: musi być jednym z $1 (enum)'],
        ['^Schema: must be (.*) \\(const\\)$', 'Schemat: musi wynosić $1 (const)'],
        ['^Schema: at least (\\d+) characters \\(minLength\\)$', 'Schemat: minimalna liczba znaków: $1 (minLength)'],
        ['^Schema: at most (\\d+) characters \\(maxLength\\)$', 'Schemat: maksymalna liczba znaków: $1 (maxLength)'],
        ['^The number (.+) cannot be written exactly - write it as a string \\("…"\\) first$', 'Liczby $1 nie da się zapisać dokładnie - najpierw zapisz ją jako ciąg ("…")'],
        ['^The data is nested more than (\\d+) levels deep - the editor reads at most (\\d+)$', 'Dane są zagnieżdżone na więcej niż $1 poziomów - edytor odczytuje najwyżej $2'],
        ['^Schema: must match the pattern (.*) \\(pattern\\)$', 'Schemat: musi pasować do wzorca $1 (pattern)'],
        ['^Schema: the pattern (.*) is not checked on this long text - it repeats a repeated group, which can take very long \\(pattern\\)$', 'Schemat: wzorzec $1 nie jest sprawdzany w tym długim tekście - powtarza powtarzaną grupę, co może trwać bardzo długo (pattern)'],
        ['^Schema: not a valid (.*) \\(format\\)$', 'Schemat: niepoprawny format $1 (format)'],
        ['^Schema: must be at least (.*) \\(minimum\\)$', 'Schemat: musi wynosić co najmniej $1 (minimum)'],
        ['^Schema: must be at most (.*) \\(maximum\\)$', 'Schemat: musi wynosić najwyżej $1 (maximum)'],
        ['^Schema: must be greater than (.*) \\(exclusiveMinimum\\)$',
            'Schemat: musi być większe niż $1 (exclusiveMinimum)'],
        ['^Schema: must be less than (.*) \\(exclusiveMaximum\\)$', 'Schemat: musi być mniejsze niż $1 (exclusiveMaximum)'],
        ['^Schema: must be a multiple of (.*) \\(multipleOf\\)$', 'Schemat: musi być wielokrotnością $1 (multipleOf)'],
        ['^Schema: at least (\\d+) keys \\(minProperties\\)$', 'Schemat: minimalna liczba kluczy: $1 (minProperties)'],
        ['^Schema: at most (\\d+) keys \\(maxProperties\\)$', 'Schemat: maksymalna liczba kluczy: $1 (maxProperties)'],
        ['^Schema: at least (\\d+) entries \\(minItems\\)$', 'Schemat: minimalna liczba wpisów: $1 (minItems)'],
        ['^Schema: at most (\\d+) entries \\(maxItems\\)$', 'Schemat: maksymalna liczba wpisów: $1 (maxItems)'],
        ['^Schema: the entries must be different \\(uniqueItems\\)$', 'Schemat: wpisy muszą być różne (uniqueItems)'],
        ['^Schema: entry (\\d+) is not allowed here \\(items\\)$', 'Schemat: wpis $1 jest tu niedozwolony (items)'],
        ['^Schema: no entry matches "contains" \\(contains\\)$', 'Schemat: żaden wpis nie pasuje do „contains” (contains)'],
        ['^Schema: more than (\\d+) entries match "contains" \\(maxContains\\)$',
            'Schemat: liczba wpisów pasujących do „contains” przekracza $1 (maxContains)'],
        ['^Schema: matches none of the allowed forms \\((anyOf|oneOf)\\)$',
            'Schemat: nie pasuje do żadnej z dozwolonych postaci ($1)'],
        ['^Schema: matches (\\d+) of the forms, but only one is allowed \\(oneOf\\)$',
            'Schemat: pasuje do $1 postaci, a dozwolona jest tylko jedna (oneOf)'],
        ['^Schema: must not match the "not" schema \\(not\\)$', 'Schemat: nie może pasować do schematu „not” (not)'],
        ['^Schema: "(.*)" needs "(.*)" as well \\(dependentRequired\\)$',
            'Schemat: „$1” wymaga też „$2” (dependentRequired)'],
        ['^Schema: the key "(.*)" does not fit the schema of the key names \\(propertyNames\\)$',
            'Schemat: klucz „$1” nie pasuje do schematu nazw kluczy (propertyNames)'],
        ['^Schema: no value is allowed here$', 'Schemat: żadna wartość nie jest tu dozwolona'],
        ['^Schema: the schema refers to another file \\((.*)\\) - only references inside the schema are followed$',
            'Schemat: schemat odwołuje się do innego pliku ($1) - uwzględniane są tylko odwołania wewnątrz schematu'],

        /* ---------- Value tab and schema tab ---------- */
        ['^(?:(\\d+) (key|keys|entry|entries) · )?line (\\d+), column (\\d+) · (.+)$',
            (m, k, w, l, c, sz) => `${k ? `${k} ${w.startsWith('key') ? getPlural(k, 'klucz', 'klucze', 'kluczy') : getPlural(k, 'wpis', 'wpisy', 'wpisów')} · ` : ''}wiersz ${l}, kolumna ${c} · ${formatSize(sz)}`],
        ['^The schema has a syntax error in line (\\d+) - open it and fix it first\\.$',
            'Schemat ma błąd składni w wierszu $1 - najpierw go otwórz i popraw.'],

        /* ---------- AI Assistant ---------- */
        ['^Part (\\d+) of (\\d+) received$', 'Otrzymano część $1 z $2'],
        ['^Open the other (?:link|links) from the AI too \\(still missing: part (.+)\\)\\.$',
            'Otwórz też pozostałe linki od AI (wciąż brakuje części: $1).'],
        ['^Part (\\d+) of (\\d+) received - paste the other (?:link|links) too \\(missing: (.+)\\)$',
            'Otrzymano część $1 z $2 - wklej też pozostałe linki (brakuje: $3)'],
        ['^The AI sends the document to (.+) with a key that only works for this session\\. What you paste into your AI is handled by its provider\\.$',
            'AI wysyła dokument do $1 z kluczem, który działa tylko w tej sesji. Treści wklejane do AI są przetwarzane przez jej dostawcę.'],
        ['^The AI sends its result to (.+) by itself, and it opens here\\. If it answers with a link, paste its answer below\\.$',
            'AI sama wysyła swój wynik do $1, a wynik otwiera się tutaj. Jeśli odpowie linkiem, wklej jej odpowiedź poniżej.'],
        ['^No key from (.+) - the prompt asks the AI for a link instead$',
            'Brak klucza od $1 - prompt prosi AI zamiast tego o link'],
        ['^Prompt copied - the AI sends its result to (.+)$', 'Prompt skopiowany - AI wyśle swój wynik do $1'],

        /* ---------- Messages with names ---------- */
        ['^"(.+)" is not a number - choose another type above the tree to change the type$',
            '„$1” nie jest liczbą - wybierz inny typ nad drzewem, aby zmienić typ'],
        ['^There is already a key "(.*)" here$', 'Klucz „$1” już tu istnieje'],
        ['^Path copied: (.*)$', 'Skopiowano ścieżkę: $1'],
        ['^Plain JSON has no comments: the (\\d+) (?:comment is|comments are) removed\\. "Undo" brings (?:it|them) back\\.$',
            (m, k) => `Zwykły JSON nie ma komentarzy: ${getPlural(k, 'komentarz zostanie usunięty', `${k} komentarze zostaną usunięte`, `${k} komentarzy zostanie usuniętych`)}. „Cofnij” ${getPlural(k, 'go', 'je', 'je')} przywraca.`],
        ['^"(.+)" is open\\. My documents: open, rename, duplicate or delete your documents \\(Ctrl\\+O\\)$',
            '„$1” jest otwarty. Moje dokumenty: otwieraj, zmieniaj nazwy, duplikuj lub usuwaj swoje dokumenty (Ctrl+O)'],
        ['^Start "(.+)" over\\?$', 'Zacząć „$1” od nowa?'],
        ['^Start "(.+)" over$', 'Zacznij „$1” od nowa'],
        ['^(\\d+) (?:document|documents) · (.+) in this browser$',
            (m, k, s) => `${k} ${getPlural(k, 'dokument', 'dokumenty', 'dokumentów')} · ${formatSize(s)} w tej przeglądarce`],
        ['^No document named "(.*)"\\.$', 'Brak dokumentu o nazwie „$1”.'],
        ['^Open now · (.+)$', (m, s) => `Otwarty teraz · ${formatSize(s)}`],
        ['^(just now|yesterday|\\d+ min ago|\\d+ h ago|[A-Z][a-z]{2} \\d{1,2}, \\d{4}) · (.+)$',
            (m, w, s) => `${formatTime(w)} · ${formatSize(s)}`],
        ['^(.+) \\(open now\\)$', '$1 (otwarty teraz)'],
        ['^ZIP with (\\d+) (?:document|documents) downloaded$',
            (m, k) => `Pobrano ZIP z ${k} ${getPlural(k, 'dokumentem', 'dokumentami', 'dokumentami')}`],
        ['^ZIP downloaded with (\\d+) files$', (m, k) => `Pobrano ZIP z ${k} ${getPlural(k, 'plikiem', 'plikami', 'plikami')}`],
        ['^"(.+)" is empty now - "Undo" brings it back$', '„$1” jest teraz pusty - „Cofnij” go przywraca'],
        ['^"(.+)" opened$', 'Otwarto „$1”'],
        ['^New document "(.+)" - your other documents are under "My documents"$',
            'Nowy dokument „$1” - pozostałe dokumenty są w „Moich dokumentach”'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$',
            'Nowy dokument „$1” od AI - pozostałe dokumenty są bez zmian'],
        ['^New document "(.+)" - "(.+)" is checked against it$', 'Nowy dokument „$1” - „$2” jest sprawdzany względem niego'],
        ['^"(.+)" is not a file the editor can open$', '„$1” nie jest plikiem, który edytor potrafi otworzyć'],
        ['^Opened "(.+)" - converted from (JSON Lines|\\w+)$', (m, f, w) => `Otwarto „${f}” - przekonwertowano z ${w}`],
        ['^Opened "(.+)" - it is now in "My documents"$', 'Otwarto „$1” - jest teraz w „Moich dokumentach”'],
        ['^"(.+)" could not be opened: (.*)$', 'Nie udało się otworzyć „$1”: $2'],
        ['^(JSON|YAML) pasted from the clipboard - "Undo" brings the old data back$',
            'Wklejono $1 ze schowka - „Cofnij” przywraca poprzednie dane'],
        ['^The addition is not valid (JSON|YAML) - it is open as a new document "(.+)"$',
            'Dodatek nie jest poprawnym $1 - jest otwarty jako nowy dokument „$2”'],
        ['^(.+) - the addition is open as a new document "(.+)"$', '$1 - dodatek jest otwarty jako nowy dokument „$2”'],
        ['^Document received - (\\d+) (?:problem|problems) found, see above the code$',
            (m, k) => `Dokument otrzymany - znaleziono ${k} ${getPlural(k, 'problem', 'problemy', 'problemów')}, sprawdź nad kodem`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '„$1” zmieniony przez AI - „Cofnij” to cofa'],
        ['^"(.+)" duplicated$', 'Zduplikowano „$1”'],
        ['^Delete "(.+)"\\?$', 'Usunąć „$1”?'],
        ['^"(.+)" deleted$', 'Usunięto „$1”'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Otwórz $1'],
    ],
};
