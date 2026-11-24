/* Polish texts of the SHLS editor: the bar, the work area (code, records,
   record, insert, convert, outline), its dialogs and messages, and the
   problems found in the code. What all editors share is in
   common.js; how the dictionaries are used is described in
   i18n.js. Names of documents, sections, keys and values stay as they are:
   the patterns copy them into the Polish text. */

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

/**
 * Translates the text the pattern found (recs in the English pattern).
 * @param {string} k - the English text the pattern found.
 * @returns {string} the text in the language.
 */
const translateRecords = k => getPlural(k, 'rekord', 'rekordy', 'rekordów');

export default {
    text: {
        /* ---------- Template placeholders (?template=): views of the records, box, side panel ---------- */
        'Show or hide the side panel': 'Pokaż lub ukryj panel boczny',
        'Examples': 'Przykłady',
        'Template': 'Szablon',
        'The template with its placeholders as written': 'Szablon z symbolami zastępczymi w oryginalnej postaci',
        'Placeholders': 'Symbole zastępcze',
        'The placeholders of the template - a click on one puts its tag at the cursor': 'Symbole zastępcze szablonu - kliknięcie wstawia znacznik w miejscu kursora',
        'Shown': 'Pokazany',
        'Hidden': 'Ukryty',
        'This part shows an example - change it in the template view or in the code': 'Ta część pokazuje przykład - zmień ją w widoku szablonu lub w kodzie',
        'View of the records': 'Widok rekordów',
        'The records filled with the examples': 'Rekordy wypełnione przykładami',
        'The examples could not be filled in - the records show the template': 'Nie udało się wstawić przykładów - rekordy pokazują szablon',
        "Read back from SHLS, the data is not the same (for example records whose keys are in another order than in the first record) - check the result.": "Po odczytaniu z SHLS dane nie są takie same (na przykład rekordy z kluczami w innej kolejności niż w pierwszym rekordzie) - sprawdź wynik.",
        /* ---------- Top bar ---------- */
        'SHLS Editor - home': 'Edytor SHLS - strona główna',
        'SHLS Editor': 'Edytor SHLS',
        'File': 'Plik',
        'My documents (Ctrl+O)': 'Moje dokumenty (Ctrl+O)',
        'My documents': 'Moje dokumenty',
        'New document, or start this one over': 'Nowy dokument albo rozpoczęcie tego od nowa',
        'New': 'Nowy',
        'New blank document': 'Nowy pusty dokument',
        'An empty document - your other documents stay as they are':
            'Pusty dokument - pozostałe dokumenty zostają bez zmian',
        'Empty section': 'Pusta sekcja',
        'One section with two keys and one record to fill in':
            'Jedna sekcja z dwoma kluczami i jednym rekordem do wypełnienia',
        'Products and companies': 'Produkty i firmy',
        'The first README example: records right after each key block':
            'Pierwszy przykład z README: rekordy zaraz po każdym bloku kluczy',
        'Key blocks first': 'Najpierw bloki kluczy',
        'The second README example: the records follow under the section name again':
            'Drugi przykład z README: rekordy następują ponownie pod nazwą sekcji',
        'Companies, departments and employees, nested three levels':
            'Firmy, działy i pracownicy, zagnieżdżeni na trzech poziomach',
        'The same data with the key blocks first and fewer blank lines':
            'Te same dane z blokami kluczy na początku i mniejszą liczbą pustych wierszy',
        'Start this document over': 'Zacznij ten dokument od nowa',
        'Empties the document - "Undo" brings it back': 'Opróżnia dokument - „Cofnij” go przywraca',
        'Open an SHLS file from your computer (JSON, YAML, CSV and JSON Lines files are converted; you can also drag a file into the window)':
            'Otwórz plik SHLS z komputera (pliki JSON, YAML, CSV i JSON Lines zostaną przekonwertowane; plik można też przeciągnąć do okna)',
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
        'Save the document as a .shls file (Ctrl+S)': 'Zapisz dokument jako plik .shls (Ctrl+S)',
        'Download .shls': 'Pobierz .shls',
        'JSON, YAML, CSV and more (Ctrl+E)': 'JSON, YAML, CSV i więcej (Ctrl+E)',
        'Export…': 'Eksportuj…',

        /* ---------- Views and work area ---------- */
        'View': 'Widok',
        'Edit': 'Edycja',
        'Selection': 'Zaznaczenie',
        'Records': 'Rekordy',
        'Record': 'Rekord',
        'SHLS code': 'Kod SHLS',
        'Copy the code to the clipboard': 'Skopiuj kod do schowka',
        'Copy code': 'Kopiuj kod',
        'Copy': 'Kopiuj',
        'Lay the document out as the reference SHLSEncoder does: all key blocks first, then the records':
            'Uporządkuj dokument tak jak referencyjny SHLSEncoder: najpierw wszystkie bloki kluczy, potem rekordy',
        'Tidy up': 'Uporządkuj',
        'Drag to change the width of the code area': 'Przeciągnij, aby zmienić szerokość obszaru kodu',
        'Drag to change the width': 'Przeciągnij, aby zmienić szerokość',
        'Unfold everything': 'Rozwiń wszystko',
        'Fold the key blocks and records': 'Zwiń bloki kluczy i rekordy',
        'Add: a record after the selected record (or at the end of the section), a key after the selected key':
            'Dodaj: rekord po zaznaczonym rekordzie (lub na końcu sekcji), klucz po zaznaczonym kluczu',
        'Add': 'Dodaj',
        'Duplicate the selected record or key': 'Duplikuj zaznaczony rekord lub klucz',
        'Duplicate': 'Duplikuj',
        'Move the selected record or key up (Alt+Up)': 'Przesuń zaznaczony rekord lub klucz w górę (Alt+Up)',
        'Move up': 'W górę',
        'Move the selected record or key down (Alt+Down)': 'Przesuń zaznaczony rekord lub klucz w dół (Alt+Down)',
        'Move down': 'W dół',
        'Remove the selected record, key or section (Delete)': 'Usuń zaznaczony rekord, klucz lub sekcję (Delete)',
        'Remove': 'Usuń',
        'Search keys and values': 'Szukaj…',
        'Previous match (Shift+Enter)': 'Poprzednie trafienie (Shift+Enter)',
        'Previous match': 'Poprzednie trafienie',
        'Next match (Enter)': 'Następne trafienie (Enter)',
        'Next match': 'Następne trafienie',
        'Copy the path of the selection': 'Skopiuj ścieżkę zaznaczenia',
        'Copy path': 'Kopiuj ścieżkę',
        'Nothing selected': 'Nic nie zaznaczono',
        'Side panel': 'Panel boczny',
        'The selected record, value or key': 'Zaznaczony rekord, wartość lub klucz',
        'New records, keys and sections, and pieces of code': 'Nowe rekordy, klucze i sekcje oraz fragmenty kodu',
        'Insert': 'Wstaw',
        'Tokens, and the document in other formats': 'Tokeny i dokument w innych formatach',
        'Convert': 'Konwersja',
        'The sections of the document': 'Rozdziały dokumentu',
        'Outline': 'Konspekt',
        'Open it here': 'Otwórz tutaj',
        'Drop the file here': 'Upuść tu plik',
        'Hide': 'Ukryj',
        'Show': 'Pokaż',

        /* ---------- Records view ---------- */
        'Keys': 'Klucze',
        'the template of each record': 'szablon każdego rekordu',
        'Click to rename the section': 'Kliknij, aby zmienić nazwę sekcji',
        'Click to rename the key - only the key block changes':
            'Kliknij, aby zmienić nazwę klucza - zmienia się tylko blok kluczy',
        'Click to change the value': 'Kliknij, aby zmienić wartość',
        'Value': 'Wartość',
        'Key': 'Klucz',
        'Section name': 'Nazwa sekcji',
        'The code cannot be read - see the problem above the code.': 'Nie można odczytać kodu - zobacz problem nad kodem.',
        'No sections yet - write a section name, its keys (indented) and, after one blank line, the records. Or choose a template under "New".':
            'Brak sekcji - napisz nazwę sekcji, jej klucze (z wcięciem) i po jednym pustym wierszu rekordy. Albo wybierz szablon w menu „Nowy”.',

        /* ---------- Record tab ---------- */
        'Click a section, a key or a record in the middle.': 'Kliknij sekcję, klucz lub rekord pośrodku.',
        'The document has no sections yet.': 'Dokument nie ma jeszcze sekcji.',
        'The document has no sections yet': 'Dokument nie ma jeszcze sekcji',
        'Path': 'Ścieżka',
        'Section': 'Sekcja',
        'Add a record': 'Dodaj rekord',
        'Add a key': 'Dodaj klucz',
        'Remove the section': 'Usuń sekcję',
        'Add a key after it': 'Dodaj klucz za nim',
        'Add a record after it': 'Dodaj rekord za nim',
        'Renaming a key changes only the key block. Adding, moving or removing a key changes every record of the section.':
            'Zmiana nazwy klucza zmienia tylko blok kluczy. Dodanie, przesunięcie lub usunięcie klucza zmienia każdy rekord sekcji.',
        'Apply': 'Zastosuj',

        /* ---------- Insert tab ---------- */
        'Add to the selection': 'Dodaj do zaznaczenia',
        'A record after the selected record (or at the end of the section), a key after the selected key - every record gets a value "-" for it. One step for Undo.':
            'Rekord po zaznaczonym rekordzie (lub na końcu sekcji), klucz po zaznaczonym kluczu - każdy rekord dostaje dla niego wartość „-”. Możesz cofnąć tę zmianę jednym krokiem.',
        'A new record with "-" for each value': 'Nowy rekord z „-” jako każdą wartością',
        'A new key in the key block; every record gets "-"': 'Nowy klucz w bloku kluczy; każdy rekord dostaje „-”',
        'A copy of the selected record or key': 'Kopia zaznaczonego rekordu lub klucza',
        'A new section at the end, with two keys and one record': 'Nowa sekcja na końcu, z dwoma kluczami i jednym rekordem',
        'At the cursor in the code': 'W miejscu kursora w kodzie',
        'A section name, its key block, a blank line and one record':
            'Nazwa sekcji, jej blok kluczy, pusty wiersz i jeden rekord',
        'The placeholder for the line of a nested list': 'Symbol zastępczy dla wiersza zagnieżdżonej listy',
        '- (no value)': '- (brak wartości)',
        'SHLS has no empty values: a dash stands for none': 'SHLS nie ma pustych wartości: kreska oznacza brak',
        'Today\'s date': 'Dzisiejsza data',
        'The date as YYYY-MM-DD': 'Data jako RRRR-MM-DD',

        /* ---------- Convert tab ---------- */
        'JSON on one line': 'JSON w jednym wierszu',
        'This document': 'Ten dokument',
        'Writes the document anew as the reference SHLSEncoder does: all key blocks first, then the records of each section':
            'Zapisuje dokument od nowa tak jak referencyjny SHLSEncoder: najpierw wszystkie bloki kluczy, potem rekordy każdej sekcji',
        'Write as SHLSEncoder does': 'Zapisz jak SHLSEncoder',
        'Convert to': 'Konwertuj do',
        'JSON (as SHLSDecoder reads it)': 'JSON (tak jak czyta go SHLSDecoder)',
        'CSV (one section)': 'CSV (jedna sekcja)',
        'JSON Lines (one section)': 'JSON Lines (jedna sekcja)',
        'The records as plain text': 'Rekordy jako zwykły tekst',
        'Result': 'Wynik',
        'Download': 'Pobierz',
        'Opens the result as a new document in the JSON Editor (in a new tab)':
            'Otwiera wynik jako nowy dokument w Edytorze JSON (w nowej karcie)',
        'Open in the JSON Editor': 'Otwórz w Edytorze JSON',
        'Exactly the data the reference SHLSDecoder reads: every value is a string.':
            'Dokładnie te dane, które czyta referencyjny SHLSDecoder: każda wartość jest tekstem.',
        'The code cannot be read as SHLS - fix the problem above the code first':
            'Kodu nie można odczytać jako SHLS - najpierw popraw problem nad kodem',
        'Write it anyway?': 'Zapisać mimo to?',
        'Read back, the encoder\'s text gives different data than this document (SHLSEncoder cannot write every structure). "Undo" brings the document back.':
            'Po ponownym odczytaniu tekst enkodera daje inne dane niż ten dokument (SHLSEncoder nie potrafi zapisać każdej struktury). „Cofnij” przywraca dokument.',
        'Write it': 'Zapisz',
        'The document is written as SHLSEncoder does already': 'Dokument ma już układ stosowany przez SHLSEncoder',
        'Written as SHLSEncoder does': 'Zapisano tak jak SHLSEncoder',

        /* ---------- Outline tab ---------- */
        'The sections of the document. Click one to go there.': 'Sekcje dokumentu. Kliknij jedną, aby tam przejść.',

        /* ---------- Export ---------- */
        'Close': 'Zamknij',
        'File name': 'Nazwa pliku',
        'SHLS file as it is (.shls)': 'Plik SHLS bez zmian (.shls)',
        'JSON, as SHLSDecoder reads it (.json)': 'JSON, tak jak czyta go SHLSDecoder (.json)',
        'YAML file (.yaml)': 'Plik YAML (.yaml)',
        'CSV table of the selected section (.csv)': 'Tabela CSV zaznaczonej sekcji (.csv)',
        'The records as plain text (.txt)': 'Rekordy jako zwykły tekst (.txt)',
        'Download every format at once': 'Pobierz wszystkie formaty naraz',
        'All formats (ZIP)': 'Wszystkie formaty (ZIP)',

        /* ---------- My documents ---------- */
        'Search by name': 'Szukaj po nazwie',
        'Search your documents': 'Przeszukaj dokumenty',
        'Open a file from your computer as a new document': 'Otwórz plik z komputera jako nowy dokument',
        'New document': 'Nowy dokument',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Kliknij dokument, aby go otworzyć. Są przechowywane tylko w tej przeglądarce - nic nie jest wysyłane. Wyczyszczenie danych witryny w przeglądarce je usuwa, więc pobierz te, które chcesz zachować.',
        'Download every document as a .shls file in one ZIP': 'Pobierz każdy dokument jako plik .shls w jednym ZIP',
        'Download all (ZIP)': 'Pobierz wszystkie (ZIP)',
        'Rename': 'Zmień nazwę',
        'Download as .shls': 'Pobierz jako .shls',
        'Delete': 'Usuń',
        'New name': 'Nowa nazwa',
        'This document is open': 'Ten dokument jest otwarty',
        'Click to open this document': 'Kliknij, aby otworzyć ten dokument',
        'No documents yet.': 'Brak dokumentów.',

        /* ---------- AI Assistant ---------- */
        'Any AI can work with you - ChatGPT, Claude, Gemini, Copilot. The prompt explains SHLS, so the AI writes valid SHLS.':
            'Każda AI może pracować razem z tobą - ChatGPT, Claude, Gemini, Copilot. Prompt wyjaśnia SHLS, więc AI pisze poprawny SHLS.',
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
        '(no key yet)': '(jeszcze bez klucza)',
        '(key valid while the editor is open)': '(klucz ważny, dopóki edytor jest otwarty)',
        'The link could not be read': 'Nie udało się odczytać linku',
        'The document in this link is incomplete or damaged. If the AI\'s link was split over several lines (as in a terminal), copy the whole answer and paste it into the editor with Ctrl+V - the editor joins the lines.':
            'Dokument w tym linku jest niekompletny lub uszkodzony. Jeśli link od AI został podzielony na kilka wierszy (jak w terminalu), skopiuj całą odpowiedź i wklej ją do edytora przez Ctrl+V - edytor połączy wiersze.',
        'Loading…': 'Wczytywanie…',
        'Taken over by your editor': 'Przekazano do edytora',
        'The document is now in the SHLS Editor tab you already had open. Switch to that tab, or open it here.':
            'Dokument jest teraz w karcie Edytora SHLS, którą masz już otwartą. Przejdź do tamtej karty albo otwórz go tutaj.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)':
            'Kopiowanie jest tu niedozwolone - tekst jest zaznaczony poniżej: naciśnij Ctrl+C (⌘C)',
        'Prompt copied - paste it into your AI and say what it should write':
            'Prompt skopiowany - wklej go do swojej AI i opisz, co ma napisać',
        'This link is incomplete or damaged - please ask the AI to send it again':
            'Ten link jest niekompletny lub uszkodzony - poproś AI, aby wysłała go ponownie',

        /* ---------- Save to your server ---------- */
        'Save to your server': 'Zapis na twoim serwerze',
        'Webhook address': 'Adres webhooka',
        'https://example.com/api/shls': 'https://example.com/api/shls',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(opcjonalny, wysyłany jako „Authorization: Bearer …”; przechowywany do zamknięcia tej karty)',
        'Send automatically a few seconds after each change (otherwise only when you click':
            'Wysyłaj automatycznie kilka sekund po każdej zmianie (w przeciwnym razie tylko po kliknięciu',
        'or press Ctrl+S)': 'lub Ctrl+S)',
        'Only for “': 'Tylko dla „',
        '” (other documents use the general address)': '” (inne dokumenty używają adresu ogólnego)',
        'What your server receives': 'Co otrzymuje twój serwer',
        'A POST request with JSON (your server must allow CORS from https://shls.giit.ch); content is the document as a string:':
            'Żądanie POST z JSON (serwer musi zezwalać na CORS z https://shls.giit.ch); content to dokument jako tekst:',
        'Embed the editor in your website': 'Osadź edytor na swojej stronie',
        'Send now': 'Wyślij teraz',
        'Save setting': 'Zapisz ustawienie',

        /* ---------- Help ---------- */
        'How it works': 'Jak to działa',
        'Keyboard shortcuts': 'Skróty klawiszowe',
        'In the records: go up and down, fold and unfold': 'W rekordach: w górę i w dół, zwijanie i rozwijanie',
        'In the records: change the value, key or section name': 'W rekordach: zmień wartość, klucz lub nazwę sekcji',
        'In the records: remove the record or key': 'W rekordach: usuń rekord lub klucz',
        'In the records: move the record or key up / down': 'W rekordach: przesuń rekord lub klucz w górę / w dół',
        'Indent / outdent in the code by one level': 'Zwiększ / zmniejsz wcięcie w kodzie o jeden poziom',
        'Undo / redo': 'Cofnij / ponów',
        'Save (download, or to your server) / export': 'Zapisz (pobierz lub zapisz na serwerze) / eksportuj',
        'Alt': 'Alt',
        'Escape': 'Escape',
        'A click in the middle puts the code\'s cursor on that line; the cursor in the code marks its record, key or value. Problems (a record with a value too few, indentation that is not a whole level, a missing blank line) are listed above the code with their line - click one to go there.':
            'Kliknięcie pośrodku ustawia kursor kodu w tym wierszu; kursor w kodzie zaznacza swój rekord, klucz lub wartość. Problemy (rekord z brakującą wartością, wcięcie, które nie jest pełnym poziomem, brakujący pusty wiersz) są wymienione nad kodem z numerem wiersza - kliknij jeden, aby tam przejść.',
        'Enter keeps the indentation of the line; after a section name it starts the key block.':
            'Enter zachowuje wcięcie wiersza; po nazwie sekcji zaczyna blok kluczy.',

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
        'Nothing changed': 'Nic się nie zmieniło',
        'Choose a section, key or record first': 'Najpierw wybierz sekcję, klucz lub rekord',
        'Choose a key or a record to move or duplicate it': 'Wybierz klucz lub rekord, aby go przesunąć lub zduplikować',
        'This nested list has no records to add after': 'Ta zagnieżdżona lista nie ma rekordów, po których można dodać kolejny',
        'SHLS values have one line - the line breaks became spaces':
            'Wartości SHLS mają jeden wiersz - podziały wierszy zamieniono na spacje',
        'Spaces around the value were removed - SHLS values cannot start with spaces':
            'Usunięto spacje wokół wartości - wartości SHLS nie mogą zaczynać się od spacji',
        'SHLS has no empty values (a blank line is skipped) - write a placeholder such as - or PH':
            'SHLS nie ma pustych wartości (pusty wiersz jest pomijany) - wpisz symbol zastępczy, np. - lub PH',
        'A key needs a name': 'Klucz wymaga nazwy',
        'A section needs a name': 'Sekcja wymaga nazwy',
        'A key block needs at least one key - add another key first':
            'Blok kluczy wymaga co najmniej jednego klucza - najpierw dodaj inny klucz',
        'This key is not there any more': 'Tego klucza już nie ma',
        'This line is not there any more': 'Tego wiersza już nie ma',
        'This record is not there any more': 'Tego rekordu już nie ma',
        'This is the first record': 'To pierwszy rekord',
        'This is the last record': 'To ostatni rekord',
        'This is the first key': 'To pierwszy klucz',
        'This is the last key': 'To ostatni klucz',
        'This document is empty already': 'Ten dokument jest już pusty',
        'All data is removed. "Undo" brings it back as long as the page is open.':
            'Wszystkie dane zostaną usunięte. „Cofnij” przywraca je, dopóki strona jest otwarta.',
        'Start over': 'Zacznij od nowa',
        'The file is larger than 8 MB': 'Plik jest większy niż 8 MB',
        'The CSV file is empty': 'Plik CSV jest pusty',
        'The YAML package is not loaded yet': 'Pakiet YAML nie jest jeszcze załadowany',
        'Downloaded': 'Pobrano',
        'Copied to the clipboard': 'Skopiowano do schowka',
        'Code copied': 'Kod skopiowany',
        '.shls downloaded': 'Pobrano .shls',
        'Replace': 'Zastąp',
        'The document is removed from this browser for good. Download it first if you want to keep a copy.':
            'Dokument zostanie trwale usunięty z tej przeglądarki. Jeśli chcesz zachować kopię, najpierw go pobierz.',
        'unknown format': 'nieznany format',

        /* What SHLS cannot keep (opening JSON, YAML, CSV) */
        'An object inside a record becomes a list with this one object.': 'Obiekt wewnątrz rekordu staje się listą z tym jednym obiektem.',
        'Plain values where SHLS expects records (in a list or as a section) become records with the one key "Value".': 'Proste wartości tam, gdzie SHLS oczekuje rekordów (w liście lub jako sekcja), stają się rekordami z jednym kluczem „Value”.',
        'Empty values become blank lines, which SHLS readers skip - the values after them move up. Write a placeholder such as -.':
            'Puste wartości stają się pustymi wierszami, które czytniki SHLS pomijają - kolejne wartości przesuwają się w górę. Wpisz symbol zastępczy, np. -.',
        'Values with several lines are not supported by SHLS - they break the records apart.':
            'Wartości z kilkoma wierszami nie są obsługiwane przez SHLS - rozbijają rekordy.',
        'Values that start or end with spaces lose them (and leading spaces change the indentation).':
            'Wartości zaczynające się lub kończące spacjami je tracą (a spacje na początku zmieniają wcięcie).',

        /* ---------- Problems in the code ---------- */
        'A tab in the indentation - SHLS counts spaces only, so this line is read as a section name':
            'Tabulator we wcięciu - SHLS liczy tylko spacje, więc ten wiersz jest czytany jako nazwa sekcji',
        'SHLS readers ignore this line - its indentation does not fit the key block':
            'Czytniki SHLS ignorują ten wiersz - jego wcięcie nie pasuje do bloku kluczy',

        /* ---------- The same in English and German, not in Polish ---------- */
        'Code': 'Kod',
        'Export': 'Eksport',
        'Name': 'Nazwa',
        'Text': 'Tekst',
        'Label': 'Etykieta',
        /* ---------- Template placeholders (?template=) ---------- */
        'A line of section tags belongs between complete records': 'Wiersz ze znacznikami sekcji szablonu powinien znajdować się między pełnymi rekordami',
        'A template stays as written - the encoder works on filled data': 'Szablon pozostaje bez zmian - enkoder działa na uzupełnionych danych',
        'Sections of the template stay whole - make this change in the code': 'Sekcje szablonu pozostają w całości - wprowadź tę zmianę w kodzie',
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
        'Also possible: <code>?src=&lt;URL of a .shls file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>shlseditor:ai</code>, <code>shlseditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Możliwe jest też: <code>?src=&lt;URL pliku .shls&gt;</code> otwiera plik, <code>&amp;webhook=&lt;URL&gt;</code> zapisuje tam ten dokument. Edytor może też otworzyć się we własnym oknie (<code>?embed=window</code>), a twoja strona może przekazać mu własny prompt dla AI i klucz sesji, aby AI wysłała wynik na twój serwer (<code>shlseditor:ai</code>, <code>shlseditor:key-request</code>) - zobacz „Edytor na własnej stronie” pod edytorem. Szczegóły są w <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> SHLS on the left - or start with <b>New</b> and one of the templates. A section is its name, then its keys (indented by one space, the keys of a nested list one level deeper), exactly one blank line, then the records: one value per line in the order of the keys.':
            '<b>Pisz</b> SHLS po lewej - albo zacznij od <b>Nowy</b> i jednego z szablonów. Sekcja to jej nazwa, potem jej klucze (z wcięciem o jedną spację, klucze zagnieżdżonej listy o poziom głębiej), dokładnie jeden pusty wiersz, a potem rekordy: jedna wartość w wierszu w kolejności kluczy.',
        'The middle shows each section with its <b>key block</b> and its <b>records</b>, the keys as labels; nested lists fold. It reads the code exactly as the reference SHLSDecoder does.':
            'Środek pokazuje każdą sekcję z jej <b>blokiem kluczy</b> i <b>rekordami</b>, z kluczami jako etykietami; zagnieżdżone listy się zwijają. Kod jest czytany dokładnie tak jak przez referencyjny SHLSDecoder.',
        '<b>Click a value, a key or a section name</b> to change it right there. <b>Enter</b> or a click elsewhere writes the change into the code (one step for Undo), <b>Escape</b> cancels. The buttons above add, duplicate, move and remove records and keys - a key added or removed is added to or removed from every record.':
            '<b>Kliknij wartość, klucz lub nazwę sekcji</b>, aby zmienić je na miejscu. <b>Enter</b> lub kliknięcie gdzie indziej zapisuje zmianę w kodzie (cofnięcie jednym krokiem), <b>Escape</b> anuluje. Przyciski powyżej dodają, duplikują, przesuwają i usuwają rekordy i klucze - dodany lub usunięty klucz jest dodawany do każdego rekordu lub z niego usuwany.',
        '<b>Record</b> on the right shows the selected record as a form; <b>Insert</b> adds records, keys and sections; <b>Convert</b> counts the tokens against JSON and converts to JSON, YAML, CSV and JSON Lines; <b>Outline</b> lists the sections.':
            '<b>Rekord</b> po prawej pokazuje zaznaczony rekord jako formularz; <b>Wstaw</b> dodaje rekordy, klucze i sekcje; <b>Konwersja</b> liczy tokeny w porównaniu z JSON i konwertuje do JSON, YAML, CSV i JSON Lines; <b>Konspekt</b> wymienia sekcje.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser. <b>Export</b> saves it as SHLS, JSON, YAML, CSV or text.':
            '<b>Moje dokumenty</b> (przycisk folderu w lewym górnym rogu) wymienia wszystkie dokumenty przechowywane w tej przeglądarce. <b>Eksportuj</b> zapisuje dokument jako SHLS, JSON, YAML, CSV lub tekst.',

    },
    patterns: [
        /* ---------- Status lines and counts ---------- */
        ['^(\\d+) (?:line|lines) · ([\\d.]+ K?B) · (\\d+) (?:section|sections)$',
            (m, l, kb, s) => `${l} ${getPlural(l, 'wiersz', 'wiersze', 'wierszy')} · ${formatSize(kb)} · ${s} ${getPlural(s, 'sekcja', 'sekcje', 'sekcji')}`],
        ['^([\\d,]+) bytes$', (m, b) => formatSize(m)],
        ['^(\\d+) (?:record|records) · (\\d+) (?:key|keys)$',
            (m, r, k) => `${r} ${translateRecords(r)} · ${k} ${getPlural(k, 'klucz', 'klucze', 'kluczy')}`],
        ['^(\\d+) (?:record|records) · (\\d+) (?:key|keys) · line (\\d+)$',
            (m, r, k, l) => `${r} ${translateRecords(r)} · ${k} ${getPlural(k, 'klucz', 'klucze', 'kluczy')} · wiersz ${l}`],
        ['^(\\d+) (?:record|records) · line (\\d+)$', (m, r, l) => `${r} ${translateRecords(r)} · wiersz ${l}`],
        ['^(\\d+) (?:record|records)$', (m, r) => `${r} ${translateRecords(r)}`],
        ['^(\\d+) (?:problem|problems)$', (m, k) => `${k} ${getPlural(k, 'problem', 'problemy', 'problemów')}`],
        ['^nested list · (\\d+) (?:key|keys)$', (m, k) => `zagnieżdżona lista · ${k} ${getPlural(k, 'klucz', 'klucze', 'kluczy')}`],
        ['^(nested list · )?level (\\d+) · line (\\d+)$',
            (m, nl, l, z) => `${nl ? 'zagnieżdżona lista · ' : ''}poziom ${l} · wiersz ${z}`],
        ['^record (\\d+) of (\\d+) · lines (\\d+)-(\\d+)$', 'rekord $1 z $2 · wiersze $3-$4'],
        ['^SHLS needs about (\\d+) % fewer tokens than the same data as JSON - approximate tokens of common AI models\\.$',
            'SHLS potrzebuje około $1 % mniej tokenów niż te same dane w JSON - przybliżona liczba tokenów dla popularnych modeli AI.'],
        ['^The same data as JSON needs about as many tokens - approximate tokens of common AI models\\.$',
            'Te same dane w JSON potrzebują mniej więcej tyle samo tokenów - przybliżona liczba tokenów dla popularnych modeli AI.'],
        ['^The records of "(.+)": its keys are the columns, a nested list is one cell with JSON\\.$',
            'Rekordy „$1”: jej klucze to kolumny, zagnieżdżona lista to jedna komórka z JSON.'],
        ['^One record of "(.+)" per line\\.$', 'Jeden rekord „$1” w wierszu.'],
        ['^"(.+)" has no records$', '„$1” nie ma rekordów'],

        /* ---------- Problems above the code ---------- */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'błąd', 'błędy', 'błędów')}`],
        ['^(\\d+) (?:note|notes)$', (m, k) => `${k} ${getPlural(k, 'uwaga', 'uwagi', 'uwag')}`],
        ['^· (\\d+) (?:note|notes)$', (m, k) => `· ${k} ${getPlural(k, 'uwaga', 'uwagi', 'uwag')}`],
        ['^Line (\\d+)$', 'Wiersz $1'],
        ['^Indented by (\\d+) (?:space|spaces) - not a whole level \\((\\d+) (?:space|spaces) per level\\)$',
            (m, k, p) => `Wcięcie o ${k} ${getPlural(k, 'spację', 'spacje', 'spacji')} - to nie pełny poziom (${p} ${getPlural(p, 'spacja', 'spacje', 'spacji')} na poziom)`],
        ['^Indented (\\d+) levels deeper than the line above - one level at a time$',
            (m, k) => `Wcięcie o ${k} ${getPlural(k, 'poziom', 'poziomy', 'poziomów')} głębiej niż w wierszu powyżej - tylko jeden poziom naraz`],
        ['^"(.+)" has no key block yet - these lines are read as its keys \\(the key block follows the section name directly\\)$',
            '„$1” nie ma jeszcze bloku kluczy - te wiersze są czytane jako jej klucze (blok kluczy następuje bezpośrednio po nazwie sekcji)'],
        ['^The key "(.+)" is twice in the key block - only one of them keeps its values\\. Is the blank line between the key block and the records missing\\?$',
            'Klucz „$1” występuje w bloku kluczy dwukrotnie - tylko jeden z nich zachowuje swoje wartości. Czy brakuje pustego wiersza między blokiem kluczy a rekordami?'],
        ['^"(.+)" looks like a value but stands in the key block - records follow the key block after exactly one blank line$',
            '„$1” wygląda jak wartość, ale stoi w bloku kluczy - rekordy następują po bloku kluczy po dokładnie jednym pustym wierszu'],
        ['^(\\d+) blank lines after the key block of "(.+)" - exactly one belongs there$',
            (m, k, s) => `${k} ${getPlural(k, 'pusty wiersz', 'puste wiersze', 'pustych wierszy')} po bloku kluczy „${s}” - powinien tam być dokładnie jeden`],
        ['^This record of "(.+)" has (\\d+) of (\\d+) values - its last keys are missing in the data$', 'Ten rekord „$1” ma $2 z $3 wartości - w danych brakuje jego ostatnich kluczy'],
        ['^No blank line before this record of "(.+)" while the others have one - the record above may have more values than the key block \\((\\d+)\\)$',
            'Brak pustego wiersza przed tym rekordem „$1”, choć pozostałe go mają - rekord powyżej ma być może więcej wartości niż blok kluczy ($2)'],
        ['^A blank line inside a record of "(.+)" - the record may have fewer values than the key block \\((\\d+)\\)$',
            'Pusty wiersz wewnątrz rekordu „$1” - rekord ma być może mniej wartości niż blok kluczy ($2)'],

        /* ---------- Messages with names ---------- */
        ['^"(.+)" has no key block - write its keys first$', '„$1” nie ma bloku kluczy - najpierw napisz jej klucze'],
        ['^"(.+)" has no key block$', '„$1” nie ma bloku kluczy'],
        ['^There is already a section "(.+)"$', 'Sekcja „$1” już istnieje'],
        ['^There is no section "(.+)"$', 'Nie ma sekcji „$1”'],
        ['^Remove the section "(.+)"\\?$', 'Usunąć sekcję „$1”?'],
        ['^Its key block and its (\\d+) (?:record is|records are) removed\\. "Undo" brings them back\\.$',
            (m, k) => `Jej blok kluczy i ${getPlural(k, 'jej rekord zostaną usunięte', `${k} rekordy zostaną usunięte`, `${k} rekordów zostanie usuniętych`)}. „Cofnij” je przywraca.`],
        ['^Remove the key "(.+)"\\?$', 'Usunąć klucz „$1”?'],
        ['^Its value is removed from every record of "(.+)" \\((\\d+)\\)\\. "Undo" brings it back\\.$',
            'Jego wartość zostanie usunięta z każdego rekordu „$1” ($2). „Cofnij” ją przywraca.'],
        ['^Path copied: (.*)$', 'Skopiowano ścieżkę: $1'],
        ['^Line (\\d+): (.*)$', 'Wiersz $1: $2'],
        ['^"(.+)" converted from ([\\w ]+)$', '„$1” przekonwertowano z $2'],
        ['^SHLS cannot keep all of this data: (.*)$', 'SHLS nie może zachować wszystkich tych danych: $1'],
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
        ['^"(.+)" is not a file the editor can open$', '„$1” nie jest plikiem, który edytor potrafi otworzyć'],
        ['^Opened "(.+)" - converted from ([\\w ]+)$', 'Otwarto „$1” - przekonwertowano z $2'],
        ['^Opened "(.+)" - it is now in "My documents"$', 'Otwarto „$1” - jest teraz w „Moich dokumentach”'],
        ['^"(.+)" could not be opened: (.*)$', 'Nie udało się otworzyć „$1”: $2'],
        ['^The addition is not valid SHLS - it is open as a new document "(.+)"$',
            'Dodatek nie jest poprawnym SHLS - jest otwarty jako nowy dokument „$1”'],
        ['^(.+) - the addition is open as a new document "(.+)"$', '$1 - dodatek jest otwarty jako nowy dokument „$2”'],
        ['^Document received - (\\d+) (?:problem|problems) found, see above the code$',
            (m, k) => `Dokument otrzymany - znaleziono ${k} ${getPlural(k, 'problem', 'problemy', 'problemów')}, sprawdź nad kodem`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '„$1” zmieniony przez AI - „Cofnij” to cofa'],
        ['^"(.+)" duplicated$', 'Zduplikowano „$1”'],
        ['^Delete "(.+)"\\?$', 'Usunąć „$1”?'],
        ['^"(.+)" deleted$', 'Usunięto „$1”'],

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
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Otwórz $1'],
    ],
};
