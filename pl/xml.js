/* Polish texts of the XML editor: the bar, the work area (code, tree,
   node, insert, convert), its dialogs and messages, and the problems found
   in the code. What all editors share is in common.js; how the
   dictionaries are used is described in i18n.js. Names of documents,
   elements and attributes stay as they are: the patterns copy them into the
   Polish text. */

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

export default {
    text: {
        'Show or hide the side panel': 'Pokaż lub ukryj panel boczny',
        'Examples': 'Przykłady',
        'Template': 'Szablon',
        'The template with its placeholders as written': 'Szablon z symbolami zastępczymi w oryginalnej postaci',
        'Placeholders': 'Symbole zastępcze',
        'The placeholders of the template - a click on one puts its tag at the cursor': 'Symbole zastępcze szablonu - kliknięcie wstawia znacznik w miejscu kursora',
        'Shown': 'Pokazany',
        'Hidden': 'Ukryty',
        'View of the tree': 'Widok drzewa',
        'The tree of the document filled with the examples': 'Drzewo dokumentu wypełnionego przykładami',
        'The examples could not be filled in - the tree shows the template': 'Nie udało się wstawić przykładów - drzewo pokazuje szablon',
        'This part shows an example - edit it in the code or in the template view': 'Ta część pokazuje przykład - edytuj ją w kodzie lub w widoku szablonu',
        /* ---------- Top bar ---------- */
        'XML Editor - home': 'Edytor XML - strona główna',
        'XML Editor': 'Edytor XML',
        'File': 'Plik',
        'My documents (Ctrl+O)': 'Moje dokumenty (Ctrl+O)',
        'My documents': 'Moje dokumenty',
        'New document, or start this one over': 'Nowy dokument albo rozpoczęcie tego od nowa',
        'New': 'Nowy',
        'New blank document': 'Nowy pusty dokument',
        'An XML declaration and an empty root element': 'Deklaracja XML i pusty element główny',
        'Product catalog': 'Katalog produktów',
        'Products with attributes, prices and stock': 'Produkty z atrybutami, cenami i stanem magazynu',
        'RSS feed': 'Kanał RSS',
        'A channel with one item, RSS 2.0': 'Kanał z jedną pozycją, RSS 2.0',
        'Sitemap': 'Mapa witryny',
        'sitemap.xml for search engines, with a default namespace':
            'sitemap.xml dla wyszukiwarek, z domyślną przestrzenią nazw',
        'Configuration': 'Konfiguracja',
        'Settings and a database connection': 'Ustawienia i połączenie z bazą danych',
        'The welcome example': 'Przykład powitalny',
        'Shows what the editor can do': 'Pokazuje, co potrafi edytor',
        'Start this document over': 'Zacznij ten dokument od nowa',
        'Keeps the declaration and the root element, empties the rest - "Undo" brings it back':
            'Zachowuje deklarację i element główny, opróżnia resztę - „Cofnij” ją przywraca',
        'Open an XML file from your computer (you can also drag it into the window)':
            'Otwórz plik XML z komputera (można go też przeciągnąć do okna)',
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
        'Save the document as an .xml file (Ctrl+S)': 'Zapisz dokument jako plik .xml (Ctrl+S)',
        'Download .xml': 'Pobierz .xml',
        'XML, minified XML, JSON, YAML and plain text (Ctrl+E)':
            'XML, zminifikowany XML, JSON, YAML i zwykły tekst (Ctrl+E)',
        'Export…': 'Eksportuj…',

        /* ---------- Views and work area ---------- */
        'View': 'Widok',
        'Edit': 'Edycja',
        'Side panel': 'Panel boczny',
        'Tree': 'Drzewo',
        'Node': 'Węzeł',
        'XML code': 'Kod XML',
        'Copy the XML code to the clipboard': 'Skopiuj kod XML do schowka',
        'Copy code': 'Kopiuj kod',
        'Copy': 'Kopiuj',
        'Indent every element on its own line (mixed content stays as it is)':
            'Każdy element w osobnym wierszu z wcięciem (zawartość mieszana zostaje bez zmian)',
        'Format': 'Formatuj',
        'File format': 'Format pliku',
        'Drag to change the width of the code area': 'Przeciągnij, aby zmienić szerokość obszaru kodu',
        'Drag to change the width': 'Przeciągnij, aby zmienić szerokość',
        'Element tree': 'Drzewo elementów',
        'Element tree: click a node to go to its place in the code, click a value to edit it':
            'Drzewo elementów: kliknij węzeł, aby przejść do jego miejsca w kodzie, kliknij wartość, aby ją edytować',
        'Search names, values and text': 'Szukaj…',
        'Search in the tree': 'Szukaj w drzewie',
        'XPath query, e.g. //book[price > 30]': 'XPath, np. //book[price > 30]',
        'XPath query': 'Zapytanie XPath',
        'Previous match (Shift+Enter)': 'Poprzednie trafienie (Shift+Enter)',
        'Previous match': 'Poprzednie trafienie',
        'Next match (Enter)': 'Następne trafienie (Enter)',
        'Next match': 'Następne trafienie',
        'Fold everything below the root': 'Zwiń wszystko poniżej elementu głównego',
        'Fold all': 'Zwiń wszystko',
        'Unfold every element': 'Rozwiń każdy element',
        'Unfold all': 'Rozwiń wszystko',
        'Path of the selected node': 'Ścieżka zaznaczonego węzła',
        'Click a node to see its path': 'Kliknij węzeł, aby zobaczyć jego ścieżkę',
        'Put this path into the XPath field': 'Wstaw tę ścieżkę do pola XPath',
        'As query': 'Jako zapytanie',
        'Copy the XPath of the selected node': 'Skopiuj XPath zaznaczonego węzła',
        'Copy path': 'Kopiuj ścieżkę',
        'Path copied': 'Skopiowano ścieżkę',
        'Updating…': 'Aktualizacja…',
        'Fold': 'Zwiń',
        'Unfold': 'Rozwiń',
        'empty': 'pusty',
        'Add a child element': 'Dodaj element podrzędny',
        'Add an attribute': 'Dodaj atrybut',
        'Move up': 'W górę',
        'Move down': 'W dół',
        'Remove the element': 'Usuń element',
        'Remove': 'Usuń',
        'The document is empty - type some XML on the left, or choose a template under "New".':
            'Dokument jest pusty - wpisz XML po lewej albo wybierz szablon w menu „Nowy”.',
        'Fix the errors first': 'Najpierw popraw błędy',
        'No match': 'Brak trafień',
        'Not a valid XPath expression': 'Niepoprawne wyrażenie XPath',
        'Nothing found': 'Nic nie znaleziono',
        'Open it here': 'Otwórz tutaj',
        'Drop the XML file here': 'Upuść tu plik XML',

        /* Problems above the code */
        'Hide': 'Ukryj',
        'Show': 'Pokaż',

        /* ---------- Side panel ---------- */
        'The selected node: path, namespace, attributes and actions':
            'Zaznaczony węzeł: ścieżka, przestrzeń nazw, atrybuty i akcje',
        'Ready-made pieces: elements, comments, CDATA, characters': 'Gotowe elementy: elementy, komentarze, CDATA, znaki',
        'Insert': 'Wstaw',
        'Format, minify, JSON and YAML': 'Formatowanie, minifikacja, JSON i YAML',
        'Convert': 'Konwersja',
        'Click a node in the tree (or put the cursor in the code) to see it here.':
            'Kliknij węzeł w drzewie (lub ustaw kursor w kodzie), aby go tu zobaczyć.',
        'depth': 'głębokość',
        'element': 'element',
        'elements': 'elem.',
        'attribute': 'atrybut',
        'attributes': 'atr.',
        'Start and end tag': 'Para znaczników',
        'Root element': 'Element główny',
        'Default namespace': 'Domyślna przestrzeń nazw',
        'Namespaces': 'Przestrzenie nazw',
        'Attribute': 'Atrybut',
        'Element': 'Element',
        'Text': 'Tekst',
        'Comment': 'Komentarz',
        'CDATA section': 'Sekcja CDATA',
        'Processing instruction': 'Instrukcja przetwarzania',
        'Path': 'Ścieżka',
        'Line': 'Wiersz',
        'Namespace': 'Przestrzeń nazw',
        'none': 'brak',
        'Content': 'Zawartość',
        'Attributes': 'Atrybuty',
        'Remove the attribute': 'Usuń atrybut',
        'No attributes.': 'Brak atrybutów.',
        'Add attribute': 'Dodaj atrybut',
        'Add child element': 'Dodaj element podrzędny',
        'Length': 'Długość',
        'Structure': 'Struktura',
        'An element at the cursor, around the selected text': 'Element w miejscu kursora, wokół zaznaczonego tekstu',
        'Empty element': 'Pusty element',
        'A self-closing element': 'Element samozamykający',
        'An attribute (put the cursor inside a start tag)': 'Atrybut (ustaw kursor wewnątrz znacznika otwierającego)',
        'Text that is not parsed as markup': 'Tekst, który nie jest analizowany jako znaczniki',
        'XML declaration': 'Deklaracja XML',
        'The first line: version and encoding': 'Pierwszy wiersz: wersja i kodowanie',
        'A namespace declaration (inside a start tag)': 'Deklaracja przestrzeni nazw (wewnątrz znacznika otwierającego)',
        'Schema instance': 'Instancja schematu',
        'xmlns:xsi for xsi:schemaLocation (inside a start tag)':
            'xmlns:xsi dla xsi:schemaLocation (wewnątrz znacznika otwierającego)',
        'Characters': 'Znaki',
        'As entity references, so they stay readable in any encoding.':
            'Jako odwołania do encji, aby pozostały czytelne w każdym kodowaniu.',
        'Code': 'Kod',
        'Indent with': 'Wcięcie',
        '2 spaces': '2 spacje',
        '4 spaces': '4 spacje',
        'Tabs': 'Tabulatory',
        'Indent every element on its own line (one undo step)':
            'Każdy element w osobnym wierszu z wcięciem (jeden krok cofania)',
        'Remove comments and the white space between elements (one undo step)':
            'Usuń komentarze i odstępy między elementami (jeden krok cofania)',
        'Minify': 'Minifikuj',
        'Other formats': 'Inne formaty',
        'As JSON': 'Jako JSON',
        'As YAML': 'Jako YAML',
        'The document is not well-formed - fix the errors above the code first.':
            'Dokument nie jest poprawny składniowo - najpierw popraw błędy nad kodem.',
        'Attributes become': 'Atrybuty stają się',
        ', text next to elements': ', tekst obok elementów',
        ', repeated elements a list. Comments are left out.': ', powtarzające się elementy listą. Komentarze są pomijane.',
        'Result': 'Wynik',
        'Download': 'Pobierz',

        /* ---------- Export ---------- */
        'Close': 'Zamknij',
        'File name': 'Nazwa pliku',
        'XML as it is (.xml)': 'XML bez zmian (.xml)',
        'Minified XML (.xml)': 'Zminifikowany XML (.xml)',
        'Converted to JSON (.json)': 'Przekonwertowany do JSON (.json)',
        'Converted to YAML (.yaml)': 'Przekonwertowany do YAML (.yaml)',
        'Plain text (.txt)': 'Zwykły tekst (.txt)',
        'Download everything at once: XML, minified XML, JSON, YAML and text':
            'Pobierz wszystko naraz: XML, zminifikowany XML, JSON, YAML i tekst',
        'All formats (ZIP)': 'Wszystkie formaty (ZIP)',
        'The document is not well-formed - fix the errors first':
            'Dokument nie jest poprawny składniowo - najpierw popraw błędy',

        /* ---------- My documents ---------- */
        'Search by name': 'Szukaj po nazwie',
        'Search your documents': 'Przeszukaj dokumenty',
        'Open an XML file from your computer as a new document': 'Otwórz plik XML z komputera jako nowy dokument',
        'New document': 'Nowy dokument',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Kliknij dokument, aby go otworzyć. Są przechowywane tylko w tej przeglądarce - nic nie jest wysyłane. Wyczyszczenie danych witryny w przeglądarce je usuwa, więc pobierz te, które chcesz zachować.',
        'Download every document as an .xml file in one ZIP': 'Pobierz każdy dokument jako plik .xml w jednym ZIP',
        'Download all (ZIP)': 'Pobierz wszystkie (ZIP)',
        'Rename': 'Zmień nazwę',
        'Duplicate': 'Duplikuj',
        'Download as .xml': 'Pobierz jako .xml',
        'Delete': 'Usuń',
        'New name': 'Nowa nazwa',
        'This document is open': 'Ten dokument jest otwarty',
        'Click to open this document': 'Kliknij, aby otworzyć ten dokument',
        'No documents yet.': 'Brak dokumentów.',
        'The document is removed from this browser for good. Download it first if you want to keep a copy.':
            'Dokument zostanie trwale usunięty z tej przeglądarki. Jeśli chcesz zachować kopię, najpierw go pobierz.',

        /* ---------- AI Assistant ---------- */
        'Any AI can write with you - ChatGPT, Claude, Gemini, Copilot.':
            'Każda AI może pisać razem z tobą - ChatGPT, Claude, Gemini, Copilot.',
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
        'The document is now in the XML Editor tab you already had open. Switch to that tab, or open it here.':
            'Dokument jest teraz w karcie Edytora XML, którą masz już otwartą. Przejdź do tamtej karty albo otwórz go tutaj.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)':
            'Kopiowanie jest tu niedozwolone - tekst jest zaznaczony poniżej: naciśnij Ctrl+C (⌘C)',
        'Paste it into your AI and say what it should write.': 'Wklej go do swojej AI i opisz, co ma napisać.',
        'Prompt copied - paste it into your AI and say what it should write':
            'Prompt skopiowany - wklej go do swojej AI i opisz, co ma napisać',
        'This link is incomplete or damaged - please ask the AI to send it again':
            'Ten link jest niekompletny lub uszkodzony - poproś AI, aby wysłała go ponownie',

        /* ---------- Save to your server ---------- */
        'Save to your server': 'Zapis na twoim serwerze',
        'Webhook address': 'Adres webhooka',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(opcjonalny, wysyłany jako „Authorization: Bearer …”; przechowywany do zamknięcia tej karty)',
        'Send automatically a few seconds after each change (otherwise only when you click':
            'Wysyłaj automatycznie kilka sekund po każdej zmianie (w przeciwnym razie tylko po kliknięciu',
        'or press Ctrl+S)': 'lub Ctrl+S)',
        'Only for “': 'Tylko dla „',
        '” (other documents use the general address)': '” (inne dokumenty używają adresu ogólnego)',
        'What your server receives': 'Co otrzymuje twój serwer',
        'A POST request with JSON (your server must allow CORS from https://xml.giit.ch):':
            'Żądanie POST z JSON (serwer musi zezwalać na CORS z https://xml.giit.ch):',
        'Embed the editor in your website': 'Osadź edytor na swojej stronie',
        'Send now': 'Wyślij teraz',
        'Save setting': 'Zapisz ustawienie',

        /* ---------- Help ---------- */
        'How it works': 'Jak to działa',
        'Keyboard shortcuts': 'Skróty klawiszowe',
        'after a start tag': 'po znaczniku otwierającym',
        'Adds the matching end tag': 'Dodaje pasujący znacznik zamykający',
        'Show the cursor\'s node in the tree': 'Pokaż węzeł kursora w drzewie',
        'Indent / outdent': 'Zwiększ / zmniejsz wcięcie',
        'Undo / redo': 'Cofnij / ponów',
        'Save (download .xml, or to your server) / export': 'Zapisz (pobierz .xml lub zapisz na serwerze) / eksportuj',
        'Search in the tree (outside the code)': 'Szukaj w drzewie (poza kodem)',
        'The editor never loads a DTD, a schema or an external entity, and it does not expand entities declared in a DTD: their references stay as written.':
            'Edytor nigdy nie ładuje DTD, schematu ani encji zewnętrznej i nie rozwija encji zadeklarowanych w DTD: odwołania do nich zostają tak, jak są zapisane.',

        'Problems (the first well-formedness error, undeclared namespace prefixes, ids used twice) are listed above the code with line and column - click one to go there.':
            'Problemy (pierwszy błąd poprawności składni, niezadeklarowane prefiksy przestrzeni nazw, podwójnie użyte id) są wymienione nad kodem z wierszem i kolumną - kliknij jeden, aby tam przejść.',
        'https://example.com/api/xml': 'https://example.com/api/xml',

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
        'This changed in the code - wait for the tree, then try again':
            'To zmieniło się w kodzie - poczekaj na drzewo i spróbuj ponownie',
        'Editing in the tree - Enter keeps it, Escape cancels': 'Edycja w drzewie - Enter zatwierdza, Escape anuluje',
        'The code changed meanwhile - the edit was not used': 'Kod zmienił się w międzyczasie - edycja nie została użyta',
        'The root element cannot be removed here - edit the code instead':
            'Elementu głównego nie można tu usunąć - zmień zamiast tego kod',
        'Removed - "Undo" brings it back': 'Usunięto - „Cofnij” przywraca',
        'It is the first element already': 'To jest już pierwszy element',
        'It is the last element already': 'To jest już ostatni element',
        'The document has an XML declaration already': 'Dokument ma już deklarację XML',
        'The code is formatted already': 'Kod jest już sformatowany',
        'Code formatted - "Undo" brings the old layout back': 'Kod sformatowany - „Cofnij” przywraca poprzedni układ',
        'The code is minified already': 'Kod jest już zminifikowany',
        'Code minified - "Undo" brings it back': 'Kod zminifikowany - „Cofnij” go przywraca',
        'This document is empty already': 'Ten dokument jest już pusty',
        'Everything inside the root element is removed; the declaration and the root element stay. "Undo" brings it back as long as the page is open.':
            'Wszystko wewnątrz elementu głównego zostanie usunięte; deklaracja i element główny zostają. „Cofnij” przywraca to, dopóki strona jest otwarta.',
        'Everything is removed. "Undo" brings it back as long as the page is open.':
            'Wszystko zostanie usunięte. „Cofnij” przywraca to, dopóki strona jest otwarta.',
        'Start over': 'Zacznij od nowa',
        'The file is larger than 8 MB': 'Plik jest większy niż 8 MB',
        'XML pasted from the clipboard - "Undo" brings the old text back':
            'Wklejono XML ze schowka - „Cofnij” przywraca poprzedni tekst',
        'Downloaded': 'Pobrano',
        'Copied to the clipboard': 'Skopiowano do schowka',
        'This browser does not allow copying this': 'Ta przeglądarka nie pozwala tego skopiować',
        'Code copied': 'Kod skopiowany',
        '.xml downloaded': 'Pobrano .xml',
        'Add': 'Dodaj',
        'Replace': 'Zastąp',

        /* ---------- Problems (xml.js) ---------- */
        'The document is empty - an XML document needs one root element':
            'Dokument jest pusty - dokument XML wymaga jednego elementu głównego',
        'The DTD is not loaded: the editor never reads external DTDs or entities, entity references stay as written':
            'DTD nie jest ładowane: edytor nigdy nie czyta zewnętrznych DTD ani encji, odwołania do encji zostają tak, jak są zapisane',
        'Entities of the DTD are not expanded: references to them stay as written':
            'Encje z DTD nie są rozwijane: odwołania do nich zostają tak, jak są zapisane',

        /* ---------- The same in English and German, not in Polish ---------- */
        'Export': 'Eksport',
        'Name': 'Nazwa',
        'Label': 'Etykieta',
    },
    html: {
        '<b>Export</b> also has <b>Open in another editor</b>: it converts the document and opens it as a new document there. Anything the other format cannot hold is listed first.':
            '<b>Eksport</b> oferuje też <b>Otwórz w innym edytorze</b>: dokument zostaje przekonwertowany i otwarty tam jako nowy. To, czego drugi format nie może pomieścić, jest najpierw wymienione.',
        /* Convert */
        'Attributes become <code>@name</code>, text next to elements <code>#text</code>, repeated elements a list. Comments are left out.':
            'Atrybuty stają się <code>@name</code>, tekst obok elementów <code>#text</code>, powtarzające się elementy listą. Komentarze są pomijane.',

        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Kliknij <b>Kopiuj prompt</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'AI odpowiada linkiem: kliknij go albo wklej całą odpowiedź poniżej. <b>Cofnij</b> to cofa.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'AI odpowiada linkiem: <b>wklej całą jej odpowiedź poniżej</b> (kliknięty link otwiera osobny edytor). <b>Cofnij</b> to cofa.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'Edytor może wysyłać każdą zapisaną wersję na twój własny serwer (<b>webhook</b>), dzięki czemu praca jest przechowywana tam, gdzie chcesz. Nic nie jest wysyłane, dopóki nie wpiszesz tu adresu.',
        'Also possible: <code>?src=&lt;URL of an XML file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>xmleditor:ai</code>, <code>xmleditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Możliwe jest też: <code>?src=&lt;URL pliku XML&gt;</code> otwiera plik, <code>&amp;webhook=&lt;URL&gt;</code> zapisuje tam ten dokument. Edytor może też otworzyć się we własnym oknie (<code>?embed=window</code>), a twoja strona może przekazać mu własny prompt dla AI i klucz sesji, aby AI wysłała wynik na twój serwer (<code>xmleditor:ai</code>, <code>xmleditor:key-request</code>) - zobacz „Edytor na własnej stronie” pod edytorem. Szczegóły są w <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> XML on the left - or start with <b>New</b> and one of the templates. The tree in the middle shows the elements, attributes, text, comments and CDATA as you type.':
            '<b>Pisz</b> XML po lewej - albo zacznij od <b>Nowy</b> i jednego z szablonów. Drzewo pośrodku pokazuje elementy, atrybuty, tekst, komentarze i CDATA na bieżąco.',
        '<b>Click a node in the tree</b> to go to its place in the code; the cursor in the code shows its node in the tree. Fold elements with the arrow.':
            '<b>Kliknij węzeł w drzewie</b>, aby przejść do jego miejsca w kodzie; kursor w kodzie pokazuje swój węzeł w drzewie. Elementy zwija się strzałką.',
        '<b>Click a name, an attribute value or a text in the tree</b> to edit it right there. <b>Enter</b> or a click elsewhere writes the change into the code (special characters escaped, one step for Undo), <b>Escape</b> cancels. The buttons of a row add a child element or an attribute, move the element up or down, or remove it.':
            '<b>Kliknij nazwę, wartość atrybutu lub tekst w drzewie</b>, aby edytować je na miejscu. <b>Enter</b> lub kliknięcie gdzie indziej zapisuje zmianę w kodzie (ze znakami specjalnymi w postaci encji, cofnięcie jednym krokiem), <b>Escape</b> anuluje. Przyciski wiersza dodają element podrzędny lub atrybut, przesuwają element w górę lub w dół albo go usuwają.',
        '<b>Search</b> marks nodes whose name, value or text contains the words; the <b>XPath</b> field marks the nodes an XPath 1.0 expression selects (<code>_:</code> is the default namespace of the root).':
            '<b>Szukaj</b> zaznacza węzły, których nazwa, wartość lub tekst zawiera dane słowa; pole <b>XPath</b> zaznacza węzły wybrane przez wyrażenie XPath 1.0 (<code>_:</code> to domyślna przestrzeń nazw elementu głównego).',
        '<b>Node</b> on the right shows the selected node; <b>Insert</b> has ready-made pieces; <b>Convert</b> formats, minifies and turns the document into JSON or YAML.':
            '<b>Węzeł</b> po prawej pokazuje zaznaczony węzeł; <b>Wstaw</b> ma gotowe elementy; <b>Konwersja</b> formatuje, minifikuje i konwertuje dokument do JSON lub YAML.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser. <b>Export</b> saves XML, minified XML, JSON, YAML or plain text.':
            '<b>Moje dokumenty</b> (przycisk folderu w lewym górnym rogu) wymienia wszystkie dokumenty przechowywane w tej przeglądarce. <b>Eksportuj</b> zapisuje XML, zminifikowany XML, JSON, YAML lub zwykły tekst.',
        'Comment lines in or out (<code>&lt;!-- --&gt;</code>)':
            'Zakomentuj lub odkomentuj wiersze (<code>&lt;!-- --&gt;</code>)',

    },
    patterns: [
        /* ---------- Status lines ---------- */
        ['^The elements are nested more than (\\d+) levels deep - the editor reads at most (\\d+)$', 'Elementy są zagnieżdżone na więcej niż $1 poziomów - edytor odczytuje najwyżej $2'],
        ['^(\\d+) lines · ([\\d.]+ K?B)(?: · (\\d+) (?:element|elements))?$',
            (m, l, kb, e) => `${l} ${getPlural(l, 'wiersz', 'wiersze', 'wierszy')} · ${formatSize(kb)}${e ? ` · ${e} ${getPlural(e, 'element', 'elementy', 'elementów')}` : ''}`],
        ['^([\\d,]+) bytes$', (m, b) => formatSize(m)],
        ['^\\d{1,3}(?:,\\d{3})+$', m => formatThousands(m)],
        ['^(\\d+) (?:child|children)$',
            (m, k) => `${k} ${getPlural(k, 'element podrzędny', 'elementy podrzędne', 'elementów podrzędnych')}`],
        ['^(\\d+) (?:match|matches)$', (m, k) => `${k} ${getPlural(k, 'trafienie', 'trafienia', 'trafień')}`],
        ['^(\\d+) found$', 'Znaleziono: $1'],
        ['^(\\d+) (?:element|elements) · (\\d+) (?:attribute|attributes) ·$',
            (m, e, a) => `${e} ${getPlural(e, 'element', 'elementy', 'elementów')} · ${a} ${getPlural(a, 'atrybut', 'atrybuty', 'atrybutów')} ·`],
        ['^(?:element|elements) ·$', 'elem. ·'],
        ['^(?:attribute|attributes) ·$', 'atr. ·'],
        ['^(\\d+) (?:child element|child elements)$',
            (m, k) => `${k} ${getPlural(k, 'element podrzędny', 'elementy podrzędne', 'elementów podrzędnych')}`],
        ['^(\\d+) (?:character|characters)$', (m, k) => `${k} ${getPlural(k, 'znak', 'znaki', 'znaków')}`],
        ['^ZIP downloaded with (\\d+) files$', (m, k) => `Pobrano ZIP z ${k} ${getPlural(k, 'plikiem', 'plikami', 'plikami')}`],

        /* Problems above the code */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'błąd', 'błędy', 'błędów')}`],
        ['^· (\\d+) (?:note|notes)$', (m, k) => `· ${k} ${getPlural(k, 'uwaga', 'uwagi', 'uwag')}`],
        ['^(\\d+) (?:note|notes)$', (m, k) => `${k} ${getPlural(k, 'uwaga', 'uwagi', 'uwag')}`],
        ['^Line (\\d+):(\\d+)$', 'Wiersz $1:$2'],
        ['^Not well-formed: (.*)$', 'Niepoprawny składniowo: $1'],
        ['^The namespace prefix "(.+)" is not declared - add (.+)$',
            'Prefiks przestrzeni nazw „$1” nie jest zadeklarowany - dodaj $2'],
        ['^The id "(.*)" is used twice$', 'Id „$1” jest użyte dwukrotnie'],

        /* ---------- Tree ---------- */
        ['^"(.*)" is not a valid XML name - names start with a letter or _ and have no spaces$',
            '„$1” nie jest poprawną nazwą XML - nazwy zaczynają się od litery lub _ i nie zawierają spacji'],
        ['^The element already has an attribute "(.+)"$', 'Element ma już atrybut „$1”'],
        ['^Attribute "(.+)" removed - "Undo" brings it back$', 'Usunięto atrybut „$1” - „Cofnij” go przywraca'],
        ['^<(.+)> removed - "Undo" brings it back$', 'Usunięto <$1> - „Cofnij” go przywraca'],

        /* ---------- Top bar and My documents ---------- */
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
        ['^"(.+)" is empty now - "Undo" brings it back$', '„$1” jest teraz pusty - „Cofnij” go przywraca'],
        ['^"(.+)" opened$', 'Otwarto „$1”'],
        ['^New document "(.+)" - your other documents are under "My documents"$',
            'Nowy dokument „$1” - pozostałe dokumenty są w „Moich dokumentach”'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$',
            'Nowy dokument „$1” od AI - pozostałe dokumenty są bez zmian'],
        ['^"(.+)" is not an XML file$', '„$1” nie jest plikiem XML'],
        ['^Opened "(.+)" - it is now in "My documents"$', 'Otwarto „$1” - jest teraz w „Moich dokumentach”'],
        ['^Document received - the editor found (\\d+) (?:problem|problems), see above the code$',
            (m, k) => `Dokument otrzymany - edytor znalazł ${k} ${getPlural(k, 'problem', 'problemy', 'problemów')}, sprawdź nad kodem`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '„$1” zmieniony przez AI - „Cofnij” to cofa'],
        ['^"(.+)" duplicated$', 'Zduplikowano „$1”'],
        ['^Delete "(.+)"\\?$', 'Usunąć „$1”?'],
        ['^"(.+)" deleted$', 'Usunięto „$1”'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Otwórz $1'],
    ],
};
