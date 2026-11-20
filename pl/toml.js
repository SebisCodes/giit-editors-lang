/* Polish texts of the TOML editor: the bar, the work area (code, tree,
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
        'TOML Editor - home': 'Edytor TOML - strona główna',
        'TOML Editor': 'Edytor TOML',
        'JSON Editor': 'Edytor JSON',
        'File': 'Plik',
        'My documents (Ctrl+O)': 'Moje dokumenty (Ctrl+O)',
        'My documents': 'Moje dokumenty',
        'New document, or start this one over': 'Nowy dokument albo rozpoczęcie tego od nowa',
        'New': 'Nowy',
        'New blank document': 'Nowy pusty dokument',
        'An empty document - your other documents stay as they are':
            'Pusty dokument - pozostałe dokumenty zostają bez zmian',
        'Two services with ports and a volume': 'Dwie usługi z portami i wolumenem',
        'GitHub workflow': 'Workflow GitHub',
        'Run the tests on every push': 'Uruchamia testy przy każdym pushu',
        'Kubernetes': 'Kubernetes',
        'A deployment and a service: two documents': 'Deployment i service: dwa dokumenty',
        'OpenAPI': 'OpenAPI',
        'The start of an API description': 'Początek opisu API',
        'Table': 'Tabela',
        'A list of mappings - converts to CSV': 'Lista mapowań - można przekonwertować do CSV',
        'Docker Compose': 'Docker Compose',
        'The welcome example': 'Przykład powitalny',
        'Shows what the editor can do': 'Pokazuje, co potrafi edytor',
        'Start this document over': 'Zacznij ten dokument od nowa',
        'Empties the data - "Undo" brings it back': 'Opróżnia dane - „Cofnij” je przywraca',
        'Open a YAML file from your computer (JSON, CSV and XML files are converted; you can also drag a file into the window)':
            'Otwórz plik YAML z komputera (pliki JSON, CSV i XML zostaną przekonwertowane; plik można też przeciągnąć do okna)',
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
        'Save the document as a .toml file (Ctrl+S)': 'Zapisz dokument jako plik .toml (Ctrl+S)',
        'Download .toml': 'Pobierz .toml',
        'JSON, CSV and more (Ctrl+E)': 'JSON, CSV i więcej (Ctrl+E)',
        'Export…': 'Eksportuj…',

        /* ---------- Views and work area ---------- */
        'View': 'Widok',
        'Edit': 'Edycja',
        'Tree': 'Drzewo',
        'Value': 'Wartość',
        'TOML code': 'Kod TOML',
        'Copy the code to the clipboard': 'Skopiuj kod do schowka',
        'Copy code': 'Kopiuj kod',
        'Copy': 'Kopiuj',
        'The same indentation everywhere; comments stay (Ctrl+Shift+F)':
            'Wszędzie takie same wcięcia; komentarze zostają (Ctrl+Shift+F)',
        'The same indentation everywhere; comments stay': 'Wszędzie takie same wcięcia; komentarze zostają',
        'Format': 'Formatuj',
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
        'Check the data against a JSON Schema': 'Sprawdź dane względem schematu JSON Schema',
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
        'Key and value': 'Klucz i wartość',
        'One entry of a mapping': 'Jeden wpis mapowania',
        'Nested mapping': 'Zagnieżdżone mapowanie',
        'A key with keys below it': 'Klucz z kluczami pod nim',
        'List item': 'Element listy',
        'One item of a sequence': 'Jeden element sekwencji',
        'List': 'Lista',
        'A key with a list below it': 'Klucz z listą pod nim',
        'Text block (|)': 'Blok tekstu (|)',
        'Several lines, kept as they are': 'Kilka wierszy, zachowanych bez zmian',
        'Folded text (>)': 'Zawinięty tekst (>)',
        'Several lines, joined into one': 'Kilka wierszy, połączonych w jeden',
        'Anchor and alias': 'Kotwica i alias',
        'Values defined once (&) and used again (*, <<)': 'Wartości zdefiniowane raz (&) i użyte ponownie (*, <<)',
        'Next document (‑‑‑)': 'Następny dokument (‑‑‑)',
        'A further document in the same file': 'Kolejny dokument w tym samym pliku',
        'Comment (#)': 'Komentarz (#)',
        'A comment': 'Komentarz',
        'Today\'s date': 'Dzisiejsza data',
        'The date as YYYY-MM-DD': 'Data jako RRRR-MM-DD',
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

        'Convert to': 'Konwertuj do',
        'JSON text': 'Tekst JSON',
        'The file has several documents - they become one JSON array.':
            'Plik ma kilka dokumentów - staną się jedną tablicą JSON.',
        'CSV (an array of objects)': 'CSV (tablica obiektów)',
        'XML text': 'Tekst XML',
        'The tree as plain text': 'Drzewo jako zwykły tekst',
        'Result': 'Wynik',
        'Download': 'Pobierz',
        'Each object is a row, its keys are the columns. Texts that look like numbers are in quotes.':
            'Każdy obiekt to wiersz, jego klucze to kolumny. Teksty wyglądające jak liczby są w cudzysłowie.',
        'The data is inside <root>; the items of an array are <item> elements.':
            'Dane są wewnątrz <root>; elementy tablicy to elementy <item>.',
        'Opens the result as a new document in the JSON Editor (in a new tab)':
            'Otwiera wynik jako nowy dokument w Edytorze JSON (w nowej karcie)',
        'Open in the JSON Editor': 'Otwórz w Edytorze JSON',

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
        'TOML file as it is (.toml)': 'Plik TOML bez zmian (.toml)',
        'JSON file (.json)': 'Plik JSON (.json)',
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
        'Download every document as a .toml file in one ZIP': 'Pobierz każdy dokument jako plik .toml w jednym ZIP',
        'Download all (ZIP)': 'Pobierz wszystkie (ZIP)',
        'Rename': 'Zmień nazwę',
        'Download as .toml': 'Pobierz jako .toml',
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
        'The document is now in the TOML Editor tab you already had open. Switch to that tab, or open it here.':
            'Dokument jest teraz w karcie Edytora TOML, którą masz już otwartą. Przejdź do tamtej karty albo otwórz go tutaj.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)':
            'Kopiowanie jest tu niedozwolone - tekst jest zaznaczony poniżej: naciśnij Ctrl+C (⌘C)',
        'Prompt copied - paste it into your AI and say what it should write':
            'Prompt skopiowany - wklej go do swojej AI i opisz, co ma napisać',
        'This link is incomplete or damaged - please ask the AI to send it again':
            'Ten link jest niekompletny lub uszkodzony - poproś AI, aby wysłała go ponownie',

        /* ---------- Save to your server ---------- */
        'Save to your server': 'Zapis na twoim serwerze',
        'Webhook address': 'Adres webhooka',
        'https://example.com/api/toml': 'https://example.com/api/toml',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(opcjonalny, wysyłany jako „Authorization: Bearer …”; przechowywany do zamknięcia tej karty)',
        'Send automatically a few seconds after each change (otherwise only when you click':
            'Wysyłaj automatycznie kilka sekund po każdej zmianie (w przeciwnym razie tylko po kliknięciu',
        'or press Ctrl+S)': 'lub Ctrl+S)',
        'Only for “': 'Tylko dla „',
        '” (other documents use the general address)': '” (inne dokumenty używają adresu ogólnego)',
        'What your server receives': 'Co otrzymuje twój serwer',
        'A POST request with JSON (your server must allow CORS from https://toml.giit.ch); content is the document as a string:':
            'Żądanie POST z JSON (serwer musi zezwalać na CORS z https://toml.giit.ch); content to dokument jako tekst:',
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
        'Indent / outdent in the code (with spaces)': 'Zwiększ / zmniejsz wcięcie w kodzie (spacjami)',
        'Undo / redo': 'Cofnij / ponów',
        'Save (download, or to your server) / export': 'Zapisz (pobierz lub zapisz na serwerze) / eksportuj',
        'Alt': 'Alt',
        'Problems (wrong indentation, a tab, a duplicate key, an alias without its anchor, what does not fit the schema) are listed above the code with line and column - click one to go there.':
            'Problemy (złe wcięcie, tabulator, powtórzony klucz, alias bez kotwicy, niezgodność ze schematem) są wymienione nad kodem z wierszem i kolumną - kliknij jeden, aby tam przejść.',
        'In the tree: change the value (F2: the key)': 'W drzewie: zmień wartość (F2: klucz)',

        /* ---------- JSON Lines ---------- */
        'JSON Lines': 'JSON Lines',
        'JSON Lines needs an array - each entry becomes one line':
            'JSON Lines wymaga tablicy - każdy wpis staje się jednym wierszem',
        'Open a YAML file from your computer (JSON, JSON Lines, CSV and XML files are converted; you can also drag a file into the window)':
            'Otwórz plik YAML z komputera (pliki JSON, JSON Lines, CSV i XML zostaną przekonwertowane; plik można też przeciągnąć do okna)',

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
        'This document is empty already': 'Ten dokument jest już pusty',
        'All data is removed. "Undo" brings it back as long as the page is open.':
            'Wszystkie dane zostaną usunięte. „Cofnij” przywraca je, dopóki strona jest otwarta.',
        'Start over': 'Zacznij od nowa',
        'The file is larger than 8 MB': 'Plik jest większy niż 8 MB',
        'Downloaded': 'Pobrano',
        'Copied to the clipboard': 'Skopiowano do schowka',
        'Code copied': 'Kod skopiowany',
        '.toml downloaded': 'Pobrano .toml',
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
        'A tab is used for indentation - YAML only allows spaces there':
            'Do wcięcia użyto tabulatora - YAML dopuszcza tam tylko spacje',
        'The indentation does not fit here - entries of one level start in the same column':
            'Wcięcie tu nie pasuje - wpisy jednego poziomu zaczynają się w tej samej kolumnie',
        'A mapping cannot start on the same line as its key - put it on the next line, indented':
            'Mapowanie nie może zaczynać się w tym samym wierszu co jego klucz - przenieś je do następnego wiersza, z wcięciem',
        'A key must be on one line - did a ":" or a quote go missing?':
            'Klucz musi być w jednym wierszu - czy zginął „:” albo cudzysłów?',
        'A closing character is missing (a quote, ] or })': 'Brakuje znaku zamykającego (cudzysłowu, ] lub })',
        'A value can only have one anchor': 'Wartość może mieć tylko jedną kotwicę',
        'A value can only have one tag': 'Wartość może mieć tylko jeden tag',
        'Several documents need --- between them': 'Kilka dokumentów wymaga --- między nimi',
        'A plain value cannot start with this character - put the value in quotes':
            'Zwykła wartość nie może zaczynać się od tego znaku - ujmij wartość w cudzysłów',
        'The value does not fit its tag': 'Wartość nie pasuje do swojego tagu',
        'This alias is not valid': 'Ten alias jest nieprawidłowy',
        'Unexpected text here - check the indentation, a missing ":" or "-", or quotes':
            'Nieoczekiwany tekst - sprawdź wcięcie, brakujący „:” lub „-” albo cudzysłowy',
        'An alias cannot have an anchor or a tag': 'Alias nie może mieć kotwicy ani tagu',
        'The document is empty': 'Dokument jest pusty',
        'The data is nested too deeply': 'Dane są zagnieżdżone zbyt głęboko',

        /* ---------- The same in English and German, not in Polish ---------- */
        'Code': 'Kod',
        'Export': 'Eksport',
        'Name': 'Nazwa',
        'Label': 'Etykieta',
        'Opens the result as a new document in this editor': 'Otwiera wynik jako nowy dokument w tym edytorze',
        /* ---------- TOML ---------- */
        "A Python package with its dependencies": "Pakiet Pythona z zależnościami",
        "A Rust package with its dependencies": "Pakiet Rusta z zależnościami",
        "Hugo site": "Strona Hugo",
        "The settings and the menu of a website": "Ustawienia i menu strony internetowej",
        "Build, redirects and headers": "Budowanie, przekierowania i nagłówki",
        "An array of tables - converts to CSV": "Tablica tabel - konwertuje się do CSV",
        "Open a TOML file from your computer (JSON, JSON Lines, YAML, CSV and XML files are converted; you can also drag a file into the window)": "Otwórz plik TOML z komputera (pliki JSON, JSON Lines, YAML, CSV i XML są konwertowane; plik można też przeciągnąć do okna)",
        "JSON, YAML, CSV and more (Ctrl+E)": "JSON, YAML, CSV i więcej (Ctrl+E)",
        "One layout everywhere; comments stay (Ctrl+Shift+F)": "Wszędzie ten sam układ; komentarze zostają (Ctrl+Shift+F)",
        "Add an entry: into the selected table or array, otherwise after the selected entry": "Dodaj wpis: do zaznaczonej tabeli lub tablicy, w przeciwnym razie po zaznaczonym wpisie",
        "date / time": "data / czas",
        "table": "tabela",
        "YAML file (.yaml)": "Plik YAML (.yaml)",
        "Indent / outdent in the code": "Zwiększ / zmniejsz wcięcie w kodzie",
        "key = value": "klucz = wartość",
        "Table [name]": "Tabela [nazwa]",
        "A table with one key": "Tabela z jednym kluczem",
        "Array of tables [[name]]": "Tablica tabel [[nazwa]]",
        "Two tables of the same array": "Dwie tabele tej samej tablicy",
        "Inline table { }": "Tabela w jednym wierszu { }",
        "A small table on one line": "Mała tabela w jednym wierszu",
        "Array": "Tablica",
        "A key with an array": "Klucz z tablicą",
        "Dotted key": "Klucz z kropkami",
        "A key inside a table, written as table.key": "Klucz w tabeli, zapisany jako tabela.klucz",
        "Text over several lines": "Tekst w kilku wierszach",
        "A string in three quotes, kept with its line breaks": "Tekst w potrójnym cudzysłowie, z podziałami wierszy",
        "Literal text (' ')": "Tekst dosłowny (' ')",
        "A string without escapes, e.g. a Windows path": "Tekst bez sekwencji ucieczki, np. ścieżka Windows",
        "Date and time": "Data i czas",
        "The date and time (UTC)": "Data i czas (UTC)",
        "Date": "Data",
        "Table [ ]": "Tabela [ ]",
        "A new empty table": "Nowa pusta tabela",
        "An array of tables, written as [[…]] sections.": "Tablica tabel, zapisana jako sekcje [[…]].",
        "An inline table, written as { … } on one line.": "Tabela zapisana jako { … } w jednym wierszu.",
        "One layout everywhere: key = value, no indentation, an empty line before each table; comments stay": "Wszędzie ten sam układ: klucz = wartość, bez wcięć, pusty wiersz przed każdą tabelą; komentarze zostają",
        "Indentation of JSON and YAML": "Wcięcie JSON i YAML",
        "YAML text": "Tekst YAML",
        "The table is one line.": "Tabela to jeden wiersz.",
        "Dates and times become text.": "Daty i czasy stają się tekstem.",
        "Problems (a key or a table defined twice, a value without quotes, a number or date that is not valid, what does not fit the schema) are listed above the code with line and column - click one to go there.": "Problemy (klucz lub tabela zdefiniowane dwa razy, wartość bez cudzysłowu, nieprawidłowa liczba lub data, niezgodność ze schematem) są wymienione nad kodem z wierszem i kolumną - kliknij jeden, aby tam przejść.",
        "TOML has no empty value (null) - choose text, a number, true / false, a date, a table or an array": "TOML nie ma pustej wartości (null) - wybierz tekst, liczbę, true / false, datę, tabelę lub tablicę",
        "This entry is written in several places of the code - move it there": "Ten wpis jest zapisany w kilku miejscach kodu - przenieś go tam",
        "In TOML the keys with a value stand above the tables - this entry cannot move past a table": "W TOML klucze z wartością stoją nad tabelami - tego wpisu nie można przesunąć za tabelę",
        "Every entry of an array of tables [[…]] is a table - change it to an array [ ] in the code first": "Każdy wpis tablicy tabel [[…]] jest tabelą - najpierw zmień ją w kodzie na tablicę [ ]",
        "This key is written as a dotted key inside { } - change it in the code": "Ten klucz jest zapisany jako klucz z kropkami w { } - zmień go w kodzie",
        "This key is written as a dotted key inside { } - copy it in the code": "Ten klucz jest zapisany jako klucz z kropkami w { } - skopiuj go w kodzie",
        "This key is written as a dotted key inside { } - remove it in the code": "Ten klucz jest zapisany jako klucz z kropkami w { } - usuń go w kodzie",
        "A dotted key inside { } - move it in the code": "Klucz z kropkami w { } - przenieś go w kodzie",
        "This table is written inside { } - add the key there in the code": "Ta tabela jest zapisana w { } - dodaj tam klucz w kodzie",
        "A TOML document is a table - its root cannot be another type": "Dokument TOML jest tabelą - jego korzeń nie może mieć innego typu",
        "Only a table (an object) can be added to a TOML document": "Do dokumentu TOML można dodać tylko tabelę (obiekt)",
        "The code has a syntax error - fix it first": "Kod ma błąd składni - najpierw go popraw",
        "A comma after the last entry of an inline table is not allowed": "Przecinek po ostatnim wpisie tabeli w jednym wierszu jest niedozwolony",
        "A control character in a string must be written as an escape": "Znak sterujący w tekście trzeba zapisać jako sekwencję ucieczki",
        "A control character in a string must be written as an escape, e.g. \\n or \\u0001": "Znak sterujący w tekście trzeba zapisać jako sekwencję ucieczki, np. \\n lub \\u0001",
        "A control character is not allowed in a comment": "Znak sterujący jest niedozwolony w komentarzu",
        "A control character is not allowed in a literal string": "Znak sterujący jest niedozwolony w tekście dosłownym",
        "A \"]]\" is missing after the name of the array of tables": "Po nazwie tablicy tabel brakuje „]]”",
        "A \"]\" is missing after the table name": "Po nazwie tabeli brakuje „]”",
        "A key cannot be a multi-line string": "Klucz nie może być tekstem wielowierszowym",
        "A key is missing here": "Tu brakuje klucza",
        "A line break needs \\n (a carriage return alone is not allowed)": "Podział wiersza zapisuje się jako \\n (sam powrót karetki jest niedozwolony)",
        "An _ in a number must stand between two digits": "Znak _ w liczbie musi stać między dwiema cyframi",
        "An inline table { } must stay on one line in TOML 1.0 - use a [table] for more lines": "Tabela { } musi w TOML 1.0 pozostać w jednym wierszu - dla wielu wierszy użyj [tabeli]",
        "A number cannot start with 0 - write it without the leading 0": "Liczba nie może zaczynać się od 0 - zapisz ją bez wiodącego 0",
        "A point or an exponent needs digits after it": "Po kropce lub wykładniku muszą wystąpić cyfry",
        "A table header has no value - write [name] alone on its line": "Nagłówek tabeli nie ma wartości - zapisz [nazwa] w osobnym wierszu",
        "A value is missing after =": "Po = brakuje wartości",
        "One comma too many - a value is missing here": "O jeden przecinek za dużo - tu brakuje wartości",
        "This integer is too large for TOML (more than 64 bits)": "Ta liczba całkowita jest za duża dla TOML (więcej niż 64 bity)",
        "This [ is never closed - a ] is missing": "Ten [ nigdy nie jest zamknięty - brakuje ]",
        "This { is never closed on its line - a } is missing": "Ten { nigdy nie jest zamknięty w swoim wierszu - brakuje }",
        "This number is not written correctly": "Ta liczba jest zapisana niepoprawnie",
        "This number is not written correctly - e.g. 0xFF, 0o17, 0b101 (an _ only between digits)": "Ta liczba jest zapisana niepoprawnie - np. 0xFF, 0o17, 0b101 (_ tylko między cyframi)",
        "This string is never closed - a \" is missing at the end of the line": "Ten tekst nigdy nie jest zamknięty - na końcu wiersza brakuje \"",
        "This string is never closed - a ' is missing at the end of the line": "Ten tekst nigdy nie jest zamknięty - na końcu wiersza brakuje '",
        "This date does not exist": "Ta data nie istnieje",
        "This time offset does not exist": "To przesunięcie czasowe jest nieprawidłowe",
        "A time is expected after the T (HH:MM:SS)": "Po T oczekiwany jest czas (HH:MM:SS)",
        "A time needs seconds in TOML 1.0 (HH:MM:SS)": "Czas w TOML 1.0 wymaga sekund (HH:MM:SS)",
        "This time does not exist": "Ten czas nie istnieje",
        "This integer is larger than a browser can hold exactly - in a conversion its last digits change": "Ta liczba całkowita jest większa, niż przeglądarka potrafi dokładnie przechować - przy konwersji zmieniają się jej ostatnie cyfry",
        "Extra text after the value - one key = value or [table] per line": "Dodatkowy tekst po wartości - jeden klucz = wartość lub [tabela] na wiersz",
        "Extra text after the table header - one key = value or [table] per line": "Dodatkowy tekst po nagłówku tabeli - jeden klucz = wartość lub [tabela] na wiersz",
        "TOML has no null: empty values (null) are left out": "TOML nie ma null: puste wartości (null) są pomijane",
        "A TOML document is a table: the data is written under the key \"value\"": "Dokument TOML jest tabelą: dane są zapisane pod kluczem „value”",
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
        'Also possible: <code>?src=&lt;URL of a .toml file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>tomleditor:ai</code>, <code>tomleditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Możliwe jest też: <code>?src=&lt;URL pliku .toml&gt;</code> otwiera plik, <code>&amp;webhook=&lt;URL&gt;</code> zapisuje tam ten dokument. Edytor może też otworzyć się we własnym oknie (<code>?embed=window</code>), a twoja strona może przekazać mu własny prompt dla AI i klucz sesji, aby AI wysłała wynik na twój serwer (<code>tomleditor:ai</code>, <code>tomleditor:key-request</code>) - zobacz „Edytor na własnej stronie” pod edytorem. Szczegóły są w <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> YAML on the left - or start with <b>New</b> and one of the templates. The tree in the middle shows the data as you type: mappings and lists fold, every value shows its type, <code>{3}</code> and <code>[5]</code> count the entries, every document after <code>---</code> has its own tree.':
            '<b>Pisz</b> YAML po lewej - albo zacznij od <b>Nowy</b> i jednego z szablonów. Drzewo pośrodku pokazuje dane na bieżąco: mapowania i listy się zwijają, każda wartość pokazuje swój typ, <code>{3}</code> i <code>[5]</code> liczą wpisy, a każdy dokument po <code>---</code> ma własne drzewo.',
        '<b>Click a key or a value in the tree</b> to change it right there. <b>Enter</b> or a click elsewhere writes the change into the code at exactly that place - comments and formatting stay (one step for Undo), <b>Escape</b> cancels. The buttons above the tree add, duplicate, move and remove entries and change the type of a value.':
            '<b>Kliknij klucz lub wartość w drzewie</b>, aby zmienić je na miejscu. <b>Enter</b> lub kliknięcie gdzie indziej zapisuje zmianę w kodzie dokładnie w tym miejscu - komentarze i formatowanie zostają (cofnięcie jednym krokiem), <b>Escape</b> anuluje. Przyciski nad drzewem dodają, duplikują, przesuwają i usuwają wpisy oraz zmieniają typ wartości.',
        'A click in the tree puts the code\'s cursor on that value; the cursor in the code marks its value in the tree. The path of the selected value (<code>$.items[3].name</code>) is below the tree. Anchors (<code>&amp;name</code>) and aliases (<code>*name</code>) are marked.':
            'Kliknięcie w drzewie ustawia kursor kodu na tej wartości; kursor w kodzie zaznacza swoją wartość w drzewie. Ścieżka zaznaczonej wartości (<code>$.items[3].name</code>) jest pod drzewem. Kotwice (<code>&amp;name</code>) i aliasy (<code>*name</code>) są oznaczone.',
        '<b>Value</b> on the right shows the selected key and value; <b>Insert</b> adds entries and pieces of code; <b>Convert</b> formats the document or converts it to JSON, CSV or XML; <b>Schema</b> checks it against a JSON Schema from your documents.':
            '<b>Wartość</b> po prawej pokazuje zaznaczony klucz i wartość; <b>Wstaw</b> dodaje wpisy i fragmenty kodu; <b>Konwersja</b> formatuje dokument lub konwertuje go do JSON, CSV albo XML; <b>Schemat</b> sprawdza go względem schematu JSON Schema z twoich dokumentów.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser. <b>Export</b> saves it as YAML, JSON, CSV or text.':
            '<b>Moje dokumenty</b> (przycisk folderu w lewym górnym rogu) wymienia wszystkie dokumenty przechowywane w tej przeglądarce. <b>Eksportuj</b> zapisuje dokument jako YAML, JSON, CSV lub tekst.',
        'Comment lines in or out (<code>#</code>)': 'Zakomentuj lub odkomentuj wiersze (<code>#</code>)',
        'Enter after <code>key:</code> indents the next line, Enter in a list starts the next item with <code>- </code>. Quotes and brackets close by themselves around a selection.':
            'Enter po <code>key:</code> wcina następny wiersz, Enter na liście zaczyna następny element od <code>- </code>. Cudzysłowy i nawiasy zamykają się same wokół zaznaczenia.',

        /* TOML */
        "<b>Write</b> TOML on the left - or start with <b>New</b> and one of the templates. The tree in the middle shows the data as you type: tables and arrays fold, every value shows its type, <code>{3}</code> and <code>[5]</code> count the entries, and a table written in several places is one entry.":
            "<b>Pisz</b> TOML po lewej - albo zacznij od <b>Nowy</b> i jednego z szablonów. Drzewo pośrodku pokazuje dane w trakcie pisania: tabele i tablice się zwijają, każda wartość pokazuje swój typ, <code>{3}</code> i <code>[5]</code> liczą wpisy, a tabela zapisana w kilku miejscach jest jednym wpisem.",
        "A click in the tree puts the code's cursor on that value; the cursor in the code marks its value in the tree. The path of the selected value (<code>$.items[3].name</code>) is below the tree. Dates and times are marked with their kind.":
            "Kliknięcie w drzewie ustawia kursor kodu na tej wartości; kursor w kodzie zaznacza swoją wartość w drzewie. Ścieżka zaznaczonej wartości (<code>$.items[3].name</code>) jest pod drzewem. Daty i czasy są oznaczone swoim rodzajem.",
        "<b>Value</b> on the right shows the selected key and value; <b>Insert</b> adds entries and pieces of code; <b>Convert</b> formats the document or converts it to JSON, YAML, CSV or XML; <b>Schema</b> checks it against a JSON Schema from your documents.":
            "<b>Wartość</b> po prawej pokazuje zaznaczony klucz i wartość; <b>Wstaw</b> dodaje wpisy i fragmenty kodu; <b>Konwersja</b> formatuje dokument lub konwertuje go do JSON, YAML, CSV albo XML; <b>Schemat</b> sprawdza go względem schematu JSON Schema z twoich dokumentów.",
        "<b>My documents</b> (the folder button at the top left) lists every document kept in this browser. <b>Export</b> saves it as TOML, JSON, YAML, CSV or text.":
            "<b>Moje dokumenty</b> (przycisk folderu w lewym górnym rogu) wymienia wszystkie dokumenty przechowywane w tej przeglądarce. <b>Eksportuj</b> zapisuje dokument jako TOML, JSON, YAML, CSV lub tekst.",
        "Enter keeps the indentation of the line, and after <code>[</code> or <code>{</code> it indents one step. Quotes and brackets close by themselves around a selection.":
            "Enter zachowuje wcięcie wiersza, a po <code>[</code> lub <code>{</code> wcina o jeden poziom. Cudzysłowy i nawiasy zamykają się same wokół zaznaczenia.",
    },
    patterns: [
        /* ---------- Status lines ---------- */
        ['^(\\d+) (?:line|lines) · ([\\d.]+ K?B)$',
            (m, l, kb) => `${l} ${getPlural(l, 'wiersz', 'wiersze', 'wierszy')} · ${formatSize(kb)}`],
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
        ['^The key "(.*)" is twice in this mapping - most programs keep only the last one$',
            'Klucz „$1” występuje w tym mapowaniu dwukrotnie - większość programów zachowuje tylko ostatni'],
        ['^The alias \\*(.+) has no anchor &(.+) before it$', 'Alias *$1 nie ma przed sobą kotwicy &$2'],
        ['^The YAML parser stopped: (.*)$', 'Parser YAML zatrzymał się: $1'],
        ['^YAML: (.*)$', 'YAML: $1'],
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
        ['^(JSON|YAML|TOML) pasted from the clipboard - "Undo" brings the old data back$',
            'Wklejono $1 ze schowka - „Cofnij” przywraca poprzednie dane'],
        ['^The addition is not valid (JSON|YAML|TOML) - it is open as a new document "(.+)"$',
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
        /* TOML */
        ["^One line per entry of \"(.+)\"\\.$", (m, a) => `Jeden wiersz na wpis z „${a}”.`],
        ["^\"(.*)\" is not a date or time \\(e\\.g\\. 2026-11-15, 2026-11-15T08:30:00Z, 08:30:00\\) - choose another type above the tree to change the type$", (m, a) => `„${a}” to nie data ani czas (np. 2026-11-15, 2026-11-15T08:30:00Z, 08:30:00) - wybierz inny typ nad drzewem, aby zmienić typ`],
        ["^Opened \"(.+)\" - converted from (JSON Lines|\\w+), under the key \"value\", without the empty values \\(null\\)$", (m, a, b) => `Otwarto „${a}” - przekonwertowano z ${b}, pod kluczem „value”, bez pustych wartości (null)`],
        ["^Opened \"(.+)\" - converted from (JSON Lines|\\w+), under the key \"value\"$", (m, a, b) => `Otwarto „${a}” - przekonwertowano z ${b}, pod kluczem „value”`],
        ["^Opened \"(.+)\" - converted from (JSON Lines|\\w+), without the empty values \\(null\\)$", (m, a, b) => `Otwarto „${a}” - przekonwertowano z ${b}, bez pustych wartości (null)`],
        ["^\\\\([uU]) needs (\\d) hexadecimal digits$", (m, a, b) => `\\${a} wymaga ${b} cyfr szesnastkowych`],
        ["^(\\\\[uU][0-9a-fA-F]+) is not a Unicode character$", (m, a) => `${a} nie jest znakiem Unicode`],
        ["^\"(.+)\" already has a value - it cannot be a table too$", (m, a) => `„${a}” ma już wartość - nie może być też tabelą`],
        ["^\"(.+)\" is already a table - it cannot get a value too$", (m, a) => `„${a}” jest już tabelą - nie może mieć też wartości`],
        ["^\"(.+)\" is already defined as a table - it cannot be an array of tables too$", (m, a) => `„${a}” jest już zdefiniowane jako tabela - nie może być też tablicą tabel`],
        ["^\"(.+)\" is already defined as a value - it cannot be an array of tables too$", (m, a) => `„${a}” jest już zdefiniowane jako wartość - nie może być też tablicą tabel`],
        ["^\"(.+)\" is an array of tables - write \\[\\[(.+)\\]\\] for one more table$", (m, a, b) => `„${a}” to tablica tabel - napisz [[${b}]], aby dodać kolejną tabelę`],
        ["^\"(.+)\" is an array \\[ \\] written with = - it cannot get \\[\\[ \\]\\] tables too$", (m, a) => `„${a}” to tablica [ ] zapisana z = - nie może dostać też tabel [[ ]]`],
        ["^\"(.+)\" is an inline table \\{ \\} - it cannot get more keys afterwards$", (m, a) => `„${a}” to tabela w jednym wierszu { } - nie może potem dostać kolejnych kluczy`],
        ["^A \"=\" and a value are missing after the key \"(.*)\"$", (m, a) => `Po kluczu „${a}” brakuje „=” i wartości`],
        ["^A comma is missing between the values of the array - found (.+)$", (m, a) => `Między wartościami tablicy brakuje przecinka - znaleziono: ${translateFound(a)}`],
        ["^A \"=\" is missing after the key \"(.*)\"$", (m, a) => `Po kluczu „${a}” brakuje „=”`],
        ["^A key has only letters, digits, - and _ - put \"(.*)\" in quotes$", (m, a) => `Klucz ma tylko litery, cyfry, - i _ - ujmij „${a}” w cudzysłów`],
        ["^A value is expected here - found (.+)$", (m, a) => `Tu oczekiwana jest wartość - znaleziono: ${translateFound(a)}`],
        ["^Unknown escape \\\\(.*) in a string - write \\\\\\\\ for a backslash$", (m, a) => `Nieznana sekwencja ucieczki \\${a} w tekście - napisz \\\\ dla ukośnika odwrotnego`],
        ["^\",\" or \"\\}\" is expected here - found (.+)$", (m, a) => `Tu oczekiwane jest „,” lub „}” - znaleziono: ${translateFound(a)}`],
        ["^The key \"(.*)\" is defined twice$", (m, a) => `Klucz „${a}” jest zdefiniowany dwa razy`],
        ["^The table \"(.+)\" is already defined by dotted keys - it cannot get a \\[header\\] too$", (m, a) => `Tabela „${a}” jest już zdefiniowana kluczami z kropkami - nie może dostać też [nagłówka]`],
        ["^The table \\[(.+)\\] is defined twice$", (m, a) => `Tabela [${a}] jest zdefiniowana dwa razy`],
        ["^The table \"(.+)\" is already defined with a \\[header\\] - write the key in its section$", (m, a) => `Tabela „${a}” jest już zdefiniowana [nagłówkiem] - zapisz klucz w jej sekcji`],
        ["^This string is never closed - (\\'\\'\\'|\"\"\") is missing$", (m, a) => `Ten tekst nigdy nie jest zamknięty - brakuje ${a}`],
        ["^\"(.+)\" is no value - text needs quotes \\(\"…\"\\); other values are numbers, true, false, dates, \\[ \\] or \\{ \\}$", (m, a) => `„${a}” nie jest wartością - tekst wymaga cudzysłowu ("…"); inne wartości to liczby, true, false, daty, [ ] lub { }`],
    ],
};
