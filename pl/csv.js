/* Polish texts of the CSV editor: the bar, the work area (code, table,
   format, column, insert), its dialogs and messages, and the problems the
   editor finds in the CSV. What all editors share is in common.js;
   how the dictionaries are used is described in i18n.js. Names of
   documents, columns and cell values stay as they are: the patterns copy
   them into the Polish text. */

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

const SEPS = { comma: 'przecinek', semicolon: 'średnik', tab: 'tabulator', pipe: 'kreskę pionową' };

export default {
    text: {
        /* ---------- Template placeholders (?template=): views of the table, box, side panel ---------- */
        'Show or hide the side panel': 'Pokaż lub ukryj panel boczny',
        'Examples': 'Przykłady',
        'Template': 'Szablon',
        'The template with its placeholders as written': 'Szablon z symbolami zastępczymi w oryginalnej postaci',
        'Placeholders': 'Symbole zastępcze',
        'The placeholders of the template - a click on one puts its tag at the cursor': 'Symbole zastępcze szablonu - kliknięcie wstawia znacznik w miejscu kursora',
        'Shown': 'Pokazany',
        'Hidden': 'Ukryty',
        'This part shows an example - change it in the template view or in the code': 'Ta część pokazuje przykład - zmień ją w widoku szablonu lub w kodzie',
        'View of the table': 'Widok tabeli',
        'The table filled with the examples': 'Tabela wypełniona przykładami',
        'The examples could not be filled in - the table shows the template': 'Nie udało się wstawić przykładów - tabela pokazuje szablon',
        /* ---------- Top bar ---------- */
        'CSV Editor - home': 'Edytor CSV - strona główna',
        'CSV Editor': 'Edytor CSV',
        'File': 'Plik',
        'My documents (Ctrl+O)': 'Moje dokumenty (Ctrl+O)',
        'My documents': 'Moje dokumenty',
        'New document, or start this one over': 'Nowy dokument albo rozpoczęcie tego od nowa',
        'New': 'Nowy',
        'New empty table': 'Nowa pusta tabela',
        'Three columns - your other documents stay as they are': 'Trzy kolumny - pozostałe dokumenty zostają bez zmian',
        'Contacts': 'Kontakty',
        'Names, email addresses and phone numbers': 'Nazwiska, adresy e-mail i numery telefonów',
        'Product list': 'Lista produktów',
        'Article numbers, prices and stock': 'Numery artykułów, ceny i stan magazynu',
        'Budget': 'Budżet',
        'Separated by semicolons, with decimal commas': 'Rozdzielane średnikami, z przecinkiem dziesiętnym',
        'Time sheet': 'Karta czasu pracy',
        'Separated by tabs (TSV)': 'Rozdzielane tabulatorami (TSV)',
        'The welcome example': 'Przykład powitalny',
        'Quotes, commas and line breaks in fields': 'Cudzysłowy, przecinki i podziały wierszy w polach',
        'Start this document over': 'Zacznij ten dokument od nowa',
        'Keeps the header row, removes the data - "Undo" brings it back':
            'Zachowuje wiersz nagłówka, usuwa dane - „Cofnij” je przywraca',
        'Open a CSV or TSV file from your computer (you can also drag it into the window)':
            'Otwórz plik CSV lub TSV z komputera (można go też przeciągnąć do okna)',
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
        'Save the document as a .csv file (Ctrl+S)': 'Zapisz dokument jako plik .csv (Ctrl+S)',
        'Download .csv': 'Pobierz .csv',
        'Excel (XLSX), JSON, Markdown, HTML, TSV and more (Ctrl+E)':
            'Excel (XLSX), JSON, Markdown, HTML, TSV i więcej (Ctrl+E)',
        'Export…': 'Eksportuj…',

        /* ---------- Views and work area ---------- */
        'View': 'Widok',
        'Edit': 'Edycja',
        'Side panel': 'Panel boczny',
        'Table': 'Tabela',
        'CSV code': 'Kod CSV',
        'Copy the CSV text to the clipboard': 'Skopiuj tekst CSV do schowka',
        'Copy code': 'Kopiuj kod',
        'Copy': 'Kopiuj',
        'Drag to change the width of the code area': 'Przeciągnij, aby zmienić szerokość obszaru kodu',
        'Drag to change the width': 'Przeciągnij, aby zmienić szerokość',
        'Filter rows': 'Filtruj wiersze',
        'Show only rows that contain this text (Ctrl+F)': 'Pokaż tylko wiersze zawierające ten tekst (Ctrl+F)',
        'Filter in': 'Filtruj w',
        'Filter in all columns or in one': 'Filtruj we wszystkich kolumnach lub w jednej',
        'All columns': 'Wszystkie',
        'Put the rows of the CSV into this order (one step for Undo)':
            'Ułóż wiersze CSV w tej kolejności (cofnięcie jednym krokiem)',
        'Sort the data': 'Sortuj dane',
        'Show the rows in the order of the file': 'Pokaż wiersze w kolejności z pliku',
        'Turn off sorting': 'Wyłącz sortowanie',
        'Add a row below the selected one': 'Dodaj wiersz pod zaznaczonym',
        'Add a row': 'Dodaj wiersz',
        'Add a column at the end': 'Dodaj kolumnę na końcu',
        'Add a column': 'Dodaj kolumnę',
        'Table: arrow keys move, Enter edits, Ctrl+C / Ctrl+V copy and paste':
            'Tabela: strzałki przesuwają, Enter edytuje, Ctrl+C / Ctrl+V kopiują i wklejają',
        'No data rows yet - type into the row marked ＋ or paste cells from a spreadsheet.':
            'Brak wierszy danych - pisz w wierszu oznaczonym ＋ albo wklej komórki z arkusza kalkulacyjnego.',
        'How the text is read: separator, quotes, header row, encoding, line endings':
            'Jak czytany jest tekst: separator, cudzysłowy, wiersz nagłówka, kodowanie, końce wierszy',
        'Column': 'Kolumna',
        'What the selected column holds': 'Co zawiera zaznaczona kolumna',
        'Insert': 'Wstaw',
        'Rows, columns and cleaning up': 'Wiersze, kolumny i porządkowanie',
        'Open it here': 'Otwórz tutaj',
        'Drop the CSV file here': 'Upuść tu plik CSV',
        'Hide': 'Ukryj',
        'Show': 'Pokaż',

        /* the table (grid.js translates these itself: the table is marked data-no-i18n) */
        'Select everything (Ctrl+A)': 'Zaznacz wszystko (Ctrl+A)',
        '(empty)': '(pusta)',
        'Sort the view by this column': 'Sortuj widok według tej kolumny',
        'Type here to add a row': 'Pisz tutaj, aby dodać wiersz',
        'Select the row': 'Zaznacz wiersz',
        'Cell': 'Komórka',

        /* ---------- Format ---------- */
        'Reading the text': 'Czytanie tekstu',
        'Separator': 'Separator',
        'Detect it': 'Wykryj',
        'Comma ( , )': 'Przecinek ( , )',
        'Semicolon ( ; )': 'Średnik ( ; )',
        'Tab': 'Tabulator',
        'Pipe ( | )': 'Kreska pionowa ( | )',
        'Quote character': 'Znak cudzysłowu',
        'Double quote ( " )': 'Cudzysłów podwójny ( " )',
        'Single quote ( \' )': 'Cudzysłów pojedynczy ( \' )',
        'The first row holds the column names': 'Pierwszy wiersz zawiera nazwy kolumn',
        'row': 'wiersz',
        'rows': 'wiersze',
        'column': 'kolumna',
        'columns': 'kolumny',
        'Line endings': 'Końce wierszy',
        'Windows (CRLF)': 'Windows (CRLF)',
        'Unix, macOS (LF)': 'Unix, macOS (LF)',
        'old Mac (CR)': 'stary Mac (CR)',
        'Opened as': 'Otwarto jako',
        'UTF-8 with BOM': 'UTF-8 z BOM',
        'Opening files': 'Otwieranie plików',
        'Encoding of files you open': 'Kodowanie otwieranych plików',
        'Detect it (UTF-8, otherwise Windows-1252)': 'Wykryj (UTF-8 lub Windows-1252)',
        'Always UTF-8': 'Zawsze UTF-8',
        'Always Windows-1252 (Western European)': 'Zawsze Windows-1252 (zachodnioeuropejskie)',
        'Read again as UTF-8': 'Wczytaj ponownie jako UTF-8',
        'Read again as Windows-1252': 'Wczytaj ponownie jako Windows-1252',
        'Download with a byte order mark (BOM), so that Excel reads UTF-8 correctly':
            'Pobieraj ze znacznikiem kolejności bajtów (BOM), aby Excel poprawnie czytał UTF-8',
        'Convert': 'Konwertuj',
        'New separator': 'Nowy separator',
        'Quote every field': 'Każde pole w cudzysłowie',
        'Quotes only where needed': 'Cudzysłowy tylko tam, gdzie potrzeba',

        /* ---------- Column ---------- */
        'Click a cell or a column head in the table to see what the column holds.':
            'Kliknij komórkę lub nagłówek kolumny w tabeli, aby zobaczyć, co zawiera kolumna.',
        'Kind': 'Rodzaj',
        'Numbers': 'Liczby',
        'Dates': 'Daty',
        'Empty': 'Puste',
        'Filled': 'Wypełnione',
        'Different values': 'Różne wartości',
        'Smallest': 'Najmniejsza',
        'Largest': 'Największa',
        'Sum': 'Suma',
        'Average': 'Średnia',
        'Earliest': 'Najwcześniejsza',
        'Latest': 'Najpóźniejsza',
        'Most frequent values': 'Najczęstsze wartości',
        'Sort the data by this column': 'Sortuj dane według tej kolumny',
        'Ascending (A → Z)': 'Rosnąco (A → Z)',
        'Descending (Z → A)': 'Malejąco (Z → A)',
        'This changes the order of the rows in the CSV. Sorting with the arrows in the column heads only changes the view.':
            'To zmienia kolejność wierszy w CSV. Sortowanie strzałkami w nagłówkach kolumn zmienia tylko widok.',

        /* ---------- Insert ---------- */
        'Rows': 'Wiersze',
        'Row above': 'Wiersz powyżej',
        'Row below': 'Wiersz poniżej',
        'Duplicate': 'Duplikuj',
        'Delete': 'Usuń',
        'Delete the selected rows': 'Usuń zaznaczone wiersze',
        'Move up': 'W górę',
        'Move down': 'W dół',
        'Columns': 'Kolumny',
        'Column left': 'Kolumna z lewej',
        'Column right': 'Kolumna z prawej',
        'Delete the selected columns': 'Usuń zaznaczone kolumny',
        'Move left': 'Przesuń w lewo',
        'Move right': 'Przesuń w prawo',
        'Clean up': 'Porządkowanie',
        'Remove spaces at the start and end of cells': 'Usuń spacje na początku i końcu komórek',
        'Remove empty rows': 'Usuń puste wiersze',
        'Remove repeated rows': 'Usuń powtórzone wiersze',
        'Give every row all fields': 'Uzupełnij pola w każdym wierszu',
        'Rows with fewer fields than the header get empty fields':
            'Wiersze z mniejszą liczbą pól niż nagłówek dostają puste pola',
        'Every change is written into the CSV and is one step for Undo.':
            'Każda zmiana jest zapisywana w CSV i można ją cofnąć jednym krokiem.',

        /* ---------- Export ---------- */
        'Close': 'Zamknij',
        'File name': 'Nazwa pliku',
        'Excel workbook (.xlsx)': 'Skoroszyt Excel (.xlsx)',
        'CSV with a separator of your choice': 'CSV z wybranym separatorem',
        'Tab-separated (.tsv)': 'Rozdzielane tabulatorami (.tsv)',
        'JSON (objects with headers, arrays without)': 'JSON (obiekty z nagłówkami, tablice bez nagłówków)',
        'Markdown table': 'Tabela Markdown',
        'HTML table (one page)': 'Tabela HTML (jedna strona)',
        'Encoding': 'Kodowanie',
        'Unicode (UTF-8)': 'Unicode (UTF-8)',
        'UTF-8 with BOM (for Excel)': 'UTF-8 z BOM (dla Excela)',
        'Windows-1252 (Western European)': 'Windows-1252 (zachodnioeuropejskie)',
        'Protect CSV/TSV exports against formulas; plain signed numbers remain unchanged.':
            'Chroń eksport CSV/TSV przed formułami; zwykłe liczby ze znakiem pozostają bez zmian.',
        'Only the rows shown now (filter and sort of the table)': 'Tylko wiersze widoczne teraz (filtr i sortowanie tabeli)',
        'Result': 'Wynik',
        'Download every format at once': 'Pobierz wszystkie formaty naraz',
        'All formats (ZIP)': 'Wszystkie formaty (ZIP)',
        'Download': 'Pobierz',
        '(The workbook is made when you download it: one sheet, the header row in bold, numbers as numbers, everything else as text - never as a formula.)':
            '(Skoroszyt powstaje przy pobieraniu: jeden arkusz, wiersz nagłówka pogrubiony, liczby jako liczby, wszystko inne jako tekst - nigdy jako formuła.)',

        /* ---------- My documents ---------- */
        'Search by name': 'Szukaj po nazwie',
        'Search your documents': 'Przeszukaj dokumenty',
        'Open a CSV file from your computer as a new document': 'Otwórz plik CSV z komputera jako nowy dokument',
        'New document': 'Nowy dokument',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Kliknij dokument, aby go otworzyć. Są przechowywane tylko w tej przeglądarce - nic nie jest wysyłane. Wyczyszczenie danych witryny w przeglądarce je usuwa, więc pobierz te, które chcesz zachować.',
        'Download every document as a .csv file in one ZIP': 'Pobierz każdy dokument jako plik .csv w jednym ZIP',
        'Download all (ZIP)': 'Pobierz wszystkie (ZIP)',
        'Rename': 'Zmień nazwę',
        'Download as .csv': 'Pobierz jako .csv',
        'New name': 'Nowa nazwa',
        'This document is open': 'Ten dokument jest otwarty',
        'Click to open this document': 'Kliknij, aby otworzyć ten dokument',
        'No documents yet.': 'Brak dokumentów.',
        'The document is removed from this browser for good. Download it first if you want to keep a copy.':
            'Dokument zostanie trwale usunięty z tej przeglądarki. Jeśli chcesz zachować kopię, najpierw go pobierz.',

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
        'The table travels in the link after the “#”, which no server sees. What you paste into your AI is handled by its provider.':
            'Tabela podróżuje w linku po znaku „#”, którego nie widzi żaden serwer. Treści wklejane do AI są przetwarzane przez jej dostawcę.',
        'The prompt - copy it with Ctrl+C': 'Prompt - skopiuj go przez Ctrl+C',
        'Copy prompt': 'Kopiuj prompt',
        'Paste it into your AI and say what it should do with the table.':
            'Wklej go do swojej AI i napisz, co ma zrobić z tabelą.',
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
        'The table is now in the CSV Editor tab you already had open. Switch to that tab, or open it here.':
            'Tabela jest teraz w karcie Edytora CSV, którą masz już otwartą. Przejdź do tamtej karty albo otwórz go tutaj.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)':
            'Kopiowanie jest tu niedozwolone - tekst jest zaznaczony poniżej: naciśnij Ctrl+C (⌘C)',
        'Prompt copied - paste it into your AI and say what it should write':
            'Prompt skopiowany - wklej go do swojej AI i opisz, co ma napisać',
        'This link is incomplete or damaged - please ask the AI to send it again':
            'Ten link jest niekompletny lub uszkodzony - poproś AI, aby wysłała go ponownie',

        /* ---------- Save to your server ---------- */
        'Save to your server': 'Zapis na twoim serwerze',
        'Webhook address': 'Adres webhooka',
        'https://example.com/api/csv': 'https://example.com/api/csv',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(opcjonalny, wysyłany jako „Authorization: Bearer …”; przechowywany do zamknięcia tej karty)',
        'Send automatically a few seconds after each change (otherwise only when you click':
            'Wysyłaj automatycznie kilka sekund po każdej zmianie (w przeciwnym razie tylko po kliknięciu',
        'or press Ctrl+S)': 'lub Ctrl+S)',
        'Only for “': 'Tylko dla „',
        '” (other documents use the general address)': '” (inne dokumenty używają adresu ogólnego)',
        'What your server receives': 'Co otrzymuje twój serwer',
        'A POST request with JSON (your server must allow CORS from https://csv.giit.ch):':
            'Żądanie POST z JSON (serwer musi zezwalać na CORS z https://csv.giit.ch):',
        'Embed the editor in your website': 'Osadź edytor na swojej stronie',
        'Send now': 'Wyślij teraz',
        'Save setting': 'Zapisz ustawienie',

        /* ---------- Help ---------- */
        'How it works': 'Jak to działa',
        'A click in the table puts the code\'s cursor on that field; the cursor in the code selects its cell.':
            'Kliknięcie w tabeli ustawia kursor kodu na tym polu; kursor w kodzie zaznacza swoją komórkę.',
        'Problems (rows with another number of fields, unclosed quotes, empty or repeated header names) are listed above the code - click one to go there.':
            'Problemy (wiersze z inną liczbą pól, niezamknięte cudzysłowy, puste lub powtórzone nazwy w nagłówku) są wymienione nad kodem - kliknij jeden, aby tam przejść.',
        'Keyboard shortcuts in the table': 'Skróty klawiszowe w tabeli',
        'Move, select a range': 'Przesuwanie, zaznaczanie zakresu',
        'Edit the cell (typing replaces its value)': 'Edytuj komórkę (pisanie zastępuje jej wartość)',
        'A line break inside the cell': 'Podział wiersza wewnątrz komórki',
        'Next / previous cell': 'Następna / poprzednia komórka',
        'Empty the selected cells': 'Opróżnij zaznaczone komórki',
        'Copy / cut / paste (tab-separated, as spreadsheets use it)':
            'Kopiuj / wytnij / wklej (rozdzielane tabulatorami, jak w arkuszach kalkulacyjnych)',
        'Select the whole table': 'Zaznacz całą tabelę',
        'Filter the rows': 'Filtruj wiersze',
        'Undo / redo': 'Cofnij / ponów',
        'Save (download .csv, or to your server) / export': 'Zapisz (pobierz .csv lub zapisz na serwerze) / eksportuj',
        'in the code': 'w kodzie',
        'Go to the cursor\'s cell in the table': 'Przejdź do komórki kursora w tabeli',
        '+ arrows': '+ strzałki',
        '/ typing': '/ pisanie',

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
        'This document is empty already': 'Ten dokument jest już pusty',
        'Start over': 'Zacznij od nowa',
        'Every row except the header row is removed. "Undo" brings them back as long as the page is open.':
            'Wszystkie wiersze oprócz wiersza nagłówka zostaną usunięte. „Cofnij” przywraca je, dopóki strona jest otwarta.',
        'Everything is removed. "Undo" brings it back as long as the page is open.':
            'Wszystko zostanie usunięte. „Cofnij” przywraca to, dopóki strona jest otwarta.',
        'The file is larger than 60 MB': 'Plik jest większy niż 60 MB',
        'Downloaded': 'Pobrano',
        'Copied to the clipboard': 'Skopiowano do schowka',
        'CSV copied': 'CSV skopiowany',
        '.csv downloaded': 'Pobrano .csv',
        '.tsv downloaded': 'Pobrano .tsv',
        'Add': 'Dodaj',
        'Replace': 'Zastąp',
        'Cell copied': 'Komórka skopiowana',
        'Pasted into 1 cell': 'Wklejono do 1 komórki',
        'Row added': 'Dodano wiersz',
        'Row duplicated': 'Zduplikowano wiersz',
        'Row deleted - "Undo" brings it back': 'Usunięto wiersz - „Cofnij” go przywraca',
        'Select a row first': 'Najpierw zaznacz wiersz',
        'Turn off sorting and the filter to move rows': 'Wyłącz sortowanie i filtr, aby przesuwać wiersze',
        'Column added': 'Dodano kolumnę',
        'Column deleted - "Undo" brings it back': 'Usunięto kolumnę - „Cofnij” ją przywraca',
        'No cell has spaces at its start or end': 'Żadna komórka nie ma spacji na początku ani na końcu',
        'There are no empty rows': 'Nie ma pustych wierszy',
        'There are no repeated rows': 'Nie ma powtórzonych wierszy',
        'Every row has enough fields': 'Każdy wiersz ma wystarczającą liczbę pól',
        'Every field is in quotes now': 'Każde pole jest teraz w cudzysłowie',
        'The text already uses this separator': 'Tekst już używa tego separatora',
        'ZIP downloaded: CSV, TSV, JSON, Markdown, HTML and XLSX': 'Pobrano ZIP: CSV, TSV, JSON, Markdown, HTML i XLSX',

        /* ---------- Problems ---------- */
        'This quote is never closed - the rest of the file is one field':
            'Ten cudzysłów nie jest nigdzie zamknięty - reszta pliku to jedno pole',
        'Text after the closing quote of a field': 'Tekst po cudzysłowie zamykającym pole',
        'A quote inside a field that does not start with a quote':
            'Cudzysłów wewnątrz pola, które nie zaczyna się cudzysłowem',
        'Empty line': 'Pusty wiersz',

        /* ---------- The same in English and German, not in Polish ---------- */
        'Code': 'Kod',
        'Export': 'Eksport',
        'Name': 'Nazwa',
        'Text': 'Tekst',
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
        'Also possible: <code>?src=&lt;URL of a .csv file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>csveditor:ai</code>, <code>csveditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Możliwe jest też: <code>?src=&lt;URL pliku .csv&gt;</code> otwiera plik, <code>&amp;webhook=&lt;URL&gt;</code> zapisuje tam ten dokument. Edytor może też otworzyć się we własnym oknie (<code>?embed=window</code>), a twoja strona może przekazać mu własny prompt dla AI i klucz sesji, aby AI wysłała wynik na twój serwer (<code>csveditor:ai</code>, <code>csveditor:key-request</code>) - zobacz „Edytor na własnej stronie” pod edytorem. Szczegóły są w <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Open</b> a CSV file, drop it into the window, or start with <b>New</b>. The raw text is on the left, the table in the middle.':
            '<b>Otwórz</b> plik CSV, upuść go w oknie albo zacznij od <b>Nowy</b>. Surowy tekst jest po lewej, tabela pośrodku.',
        '<b>Edit cells</b> in the table like in a spreadsheet: type, or press <b>Enter</b> or <b>F2</b>, or double-click a cell. <b>Enter</b> or <b>Tab</b> keeps the value, <b>Escape</b> cancels. The change goes into the CSV text right at that field - quotes only where needed, the line endings stay - and is one step for Undo.':
            '<b>Edytuj komórki</b> w tabeli jak w arkuszu kalkulacyjnym: pisz albo naciśnij <b>Enter</b> lub <b>F2</b>, albo kliknij komórkę dwukrotnie. <b>Enter</b> lub <b>Tab</b> zachowuje wartość, <b>Escape</b> anuluje. Zmiana trafia do tekstu CSV dokładnie w tym polu - cudzysłowy tylko tam, gdzie potrzeba, końce wierszy zostają - i można ją cofnąć jednym krokiem.',
        '<b>Copy and paste</b> ranges between the table and Excel, LibreOffice or Google Sheets with Ctrl+C and Ctrl+V. Type into the row marked ＋ to add a row.':
            '<b>Kopiuj i wklejaj</b> zakresy między tabelą a Excelem, LibreOffice lub Arkuszami Google przez Ctrl+C i Ctrl+V. Pisz w wierszu oznaczonym ＋, aby dodać wiersz.',
        '<b>Sort</b> with the arrows in the column heads and <b>filter</b> above the table: that only changes the view. <b>Sort the data</b> puts the rows of the file into that order.':
            '<b>Sortuj</b> strzałkami w nagłówkach kolumn i <b>filtruj</b> nad tabelą: to zmienia tylko widok. <b>Sortuj dane</b> układa wiersze pliku w tej kolejności.',
        '<b>Format</b> on the right sets how the text is read (separator, quote, header row) and converts it; <b>Column</b> shows what a column holds; <b>Insert</b> adds, deletes and moves rows and columns and cleans up.':
            '<b>Format</b> po prawej ustawia, jak czytany jest tekst (separator, cudzysłów, wiersz nagłówka), i go konwertuje; <b>Kolumna</b> pokazuje, co zawiera kolumna; <b>Wstaw</b> dodaje, usuwa i przesuwa wiersze i kolumny oraz porządkuje dane.',
        '<b>Export</b> makes an Excel workbook, JSON, Markdown, HTML, TSV or CSV with another separator. <b>Download .csv</b> saves the text as it is.':
            '<b>Eksportuj</b> tworzy skoroszyt Excel, JSON, Markdown, HTML, TSV lub CSV z innym separatorem. <b>Pobierz .csv</b> zapisuje tekst bez zmian.',
        '<kbd>Delete</kbd>': '<kbd>Delete</kbd>',

    },
    patterns: [
        /* ---------- Code and table ---------- */
        ['^([\\d,]+) (?:line|lines) · (.+) · ([\\d,]+) × (\\d+)$',
            (m, l, s, r, c) => `${formatThousands(l)} ${getPlural(l, 'wiersz', 'wiersze', 'wierszy')} · ${formatSize(s)} · ${formatThousands(r)} × ${c}`],
        ['^([\\d,]+) (?:row|rows), (\\d+) (?:column|columns)$',
            (m, r, c) => `${formatThousands(r)} ${getPlural(r, 'wiersz', 'wiersze', 'wierszy')}, ${c} ${getPlural(c, 'kolumna', 'kolumny', 'kolumn')}`],
        ['^([\\d,]+) of ([\\d,]+) rows$', (m, a, b) => `${formatThousands(a)} z ${formatThousands(b)} wierszy`],
        ['^([\\d,]+) (?:row|rows)$', (m, k) => `${formatThousands(k)} ${getPlural(k, 'wiersz', 'wiersze', 'wierszy')}`],
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'błąd', 'błędy', 'błędów')}`],
        ['^([\\d,]+) (?:note|notes)$', (m, k) => `${formatThousands(k)} ${getPlural(k, 'uwaga', 'uwagi', 'uwag')}`],
        ['^Line (\\d+)$', 'Wiersz $1'],
        ['^(\\d+) (?:field|fields) - the header has (\\d+)$',
            (m, k, h) => `${k} ${getPlural(k, 'pole', 'pola', 'pól')} - nagłówek ma ${h}`],
        ['^(\\d+) (?:field|fields) - most rows have (\\d+)$',
            (m, k, h) => `${k} ${getPlural(k, 'pole', 'pola', 'pól')} - większość wierszy ma ${h}`],
        ['^Column (\\S+) has no name$', 'Kolumna $1 nie ma nazwy'],
        ['^The name "(.+)" is used twice \\(columns (\\S+) and (\\S+)\\)$',
            'Nazwa „$1” jest użyta dwukrotnie (kolumny $2 i $3)'],
        ['^(\\d+) cells copied$', (m, k) => `Skopiowano ${k} ${getPlural(k, 'komórkę', 'komórki', 'komórek')}`],
        ['^Pasted into (\\d+) cells$', (m, k) => `Wklejono do ${k} ${getPlural(k, 'komórki', 'komórek', 'komórek')}`],
        ['^Sorted by$', 'Posortowano według'],
        ['^\\(view only\\)$', '(tylko widok)'],

        /* ---------- Messages ---------- */
        ['^(\\d+) rows duplicated$', (m, k) => `Zduplikowano ${k} ${getPlural(k, 'wiersz', 'wiersze', 'wierszy')}`],
        ['^(\\d+) rows deleted - "Undo" brings them back$',
            (m, k) => `Usunięto ${k} ${getPlural(k, 'wiersz', 'wiersze', 'wierszy')} - „Cofnij” je przywraca`],
        ['^(\\d+) columns deleted - "Undo" brings them back$',
            (m, k) => `Usunięto ${k} ${getPlural(k, 'kolumnę', 'kolumny', 'kolumn')} - „Cofnij” je przywraca`],
        ['^The data is sorted by "(.*)" - "Undo" takes it back$', 'Dane są posortowane według „$1” - „Cofnij” to cofa'],
        ['^Spaces removed in (\\d+) (?:cell|cells)$',
            (m, k) => `Usunięto spacje w ${k} ${getPlural(k, 'komórce', 'komórkach', 'komórkach')}`],
        ['^(\\d+) empty (?:row|rows) removed$',
            (m, k) => `Usunięto ${k} ${getPlural(k, 'pusty wiersz', 'puste wiersze', 'pustych wierszy')}`],
        ['^(\\d+) repeated (?:row|rows) removed$',
            (m, k) => `Usunięto ${k} ${getPlural(k, 'powtórzony wiersz', 'powtórzone wiersze', 'powtórzonych wierszy')}`],
        ['^(\\d+) (?:row|rows) filled up to (\\d+) fields$',
            (m, k, w) => `Uzupełniono ${k} ${getPlural(k, 'wiersz', 'wiersze', 'wierszy')} do ${w} pól`],
        ['^Separator converted to (\\w+)$', (m, s) => `Separator zmieniono na ${SEPS[s] || s}`],
        ['^Line endings: Windows \\(CRLF\\)$', 'Końce wierszy: Windows (CRLF)'],
        ['^Line endings: Unix, macOS \\(LF\\)$', 'Końce wierszy: Unix, macOS (LF)'],

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
        ['^"(.+)" is not a CSV file$', '„$1” nie jest plikiem CSV'],
        ['^Opened "(.+)" as Windows-1252 - it is now in "My documents"$',
            'Otwarto „$1” jako Windows-1252 - jest teraz w „Moich dokumentach”'],
        ['^Opened "(.+)" - it is now in "My documents"$', 'Otwarto „$1” - jest teraz w „Moich dokumentach”'],
        ['^Table received - the editor found (\\d+) (?:problem|problems), see above the code$',
            (m, k) => `Tabela otrzymana - edytor znalazł ${k} ${getPlural(k, 'problem', 'problemy', 'problemów')}, sprawdź nad kodem`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '„$1” zmieniony przez AI - „Cofnij” to cofa'],
        ['^"(.+)" duplicated$', 'Zduplikowano „$1”'],
        ['^Delete "(.+)"\\?$', 'Usunąć „$1”?'],
        ['^"(.+)" deleted$', 'Usunięto „$1”'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Otwórz $1'],
    ],
};
