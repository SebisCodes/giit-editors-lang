/* Polish texts of the Markdown editor: the bar, the work area (code,
   preview, insert, pictures, outline), its dialogs and messages, and the
   problems the preview finds in the code. What all editors share is in
   common.js; how the dictionaries are used is described in
   i18n.js. Names of documents, pictures and anchors stay as they are: the
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

/* Reasons a ZIP could not be opened (app.js openZip) */
const ZIP = { 'it is not a ZIP file': 'to nie jest plik ZIP', 'there is no .md file in it': 'nie ma w nim pliku .md' };

export default {
    text: {
        // Editing in place: Enter and Shift+Enter
        "Editing on the page - Enter: new paragraph, Shift+Enter: new line, Ctrl+Enter or a click elsewhere keeps it, Escape cancels": "Edycja na stronie - Enter: nowy akapit, Shift+Enter: nowy wiersz, Ctrl+Enter lub kliknięcie obok zatwierdza, Escape anuluje",
        "A new paragraph inside bold, italic or a link is made in the code - Shift+Enter makes a new line": "Nowy akapit wewnątrz pogrubienia, kursywy lub linku tworzy się w kodzie - Shift+Enter tworzy nowy wiersz",
        /* ---------- Top bar ---------- */
        'Markdown Editor - home': 'Edytor Markdown - strona główna',
        'Markdown Editor': 'Edytor Markdown',
        'File': 'Plik',
        'My documents (Ctrl+O)': 'Moje dokumenty (Ctrl+O)',
        'My documents': 'Moje dokumenty',
        'New document, or start this one over': 'Nowy dokument albo rozpoczęcie tego od nowa',
        'New': 'Nowy',
        'New blank document': 'Nowy pusty dokument',
        'An empty page - your other documents stay as they are': 'Pusta strona - pozostałe dokumenty zostają bez zmian',
        'README': 'README',
        'Project name, features, installation and usage': 'Nazwa projektu, funkcje, instalacja i użycie',
        'Article': 'Artykuł',
        'Title, summary, sections and a quote': 'Tytuł, podsumowanie, sekcje i cytat',
        'Meeting notes': 'Notatki ze spotkania',
        'Agenda, decisions and a table of tasks': 'Porządek obrad, decyzje i tabela zadań',
        'Checklist': 'Lista kontrolna',
        'Tasks to tick off, in groups': 'Zadania do odhaczenia, w grupach',
        'The welcome example': 'Przykład powitalny',
        'Shows what the editor can do': 'Pokazuje, co potrafi edytor',
        'Start this document over': 'Zacznij ten dokument od nowa',
        'Empties the text, keeps the pictures - "Undo" brings it back':
            'Opróżnia tekst, zachowuje obrazy - „Cofnij” go przywraca',
        'Open a .md file (or a picture) from your computer (you can also drag it into the window)':
            'Otwórz plik .md (lub obraz) z komputera (można go też przeciągnąć do okna)',
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
        'Save the document as a .md file (Ctrl+S)': 'Zapisz dokument jako plik .md (Ctrl+S)',
        'Download .md': 'Pobierz .md',
        'HTML, PDF, plain text and more (Ctrl+E)': 'HTML, PDF, zwykły tekst i więcej (Ctrl+E)',
        'Export…': 'Eksportuj…',

        /* ---------- Views and work area ---------- */
        'View': 'Widok',
        'Edit': 'Edycja',
        'Preview': 'Podgląd',
        'Insert': 'Wstaw',
        'Markdown code': 'Kod Markdown',
        'Copy the Markdown to the clipboard': 'Skopiuj Markdown do schowka',
        'Copy code': 'Kopiuj kod',
        'Copy': 'Kopiuj',
        'Drag to change the width of the code area': 'Przeciągnij, aby zmienić szerokość obszaru kodu',
        'Drag to change the width': 'Przeciągnij, aby zmienić szerokość',
        'Formatting': 'Formatowanie',
        'Bold (Ctrl+B)': 'Pogrubienie (Ctrl+B)',
        'Bold': 'Pogrubienie',
        'Italic (Ctrl+I)': 'Kursywa (Ctrl+I)',
        'Italic': 'Kursywa',
        'Strikethrough': 'Przekreślenie',
        'Code in the text': 'Kod w tekście',
        'Link (Ctrl+K)': 'Link (Ctrl+K)',
        'Heading': 'Nagłówek',
        'Bulleted list': 'Lista punktowana',
        'Numbered list': 'Lista numerowana',
        'Task list': 'Lista zadań',
        'Table': 'Tabela',
        'Picture': 'Obraz',
        'Insert picture': 'Wstaw obraz',
        'Quote': 'Cytat',
        'Code block': 'Blok kodu',
        'Math in the text (Ctrl+M)': 'Wzór w tekście (Ctrl+M)',
        'Math': 'Wzór',
        'Text size': 'Rozmiar tekstu',
        'Smaller text in the preview': 'Mniejszy tekst w podglądzie',
        'Smaller text': 'Mniejszy tekst',
        'Normal text size': 'Normalny rozmiar tekstu',
        'Larger text in the preview': 'Większy tekst w podglądzie',
        'Larger text': 'Większy tekst',
        'Preview of the document: click text to edit it, Ctrl+click follows a link':
            'Podgląd dokumentu: kliknij tekst, aby go edytować, Ctrl+kliknięcie otwiera link',
        'Updating…': 'Aktualizacja…',
        'Insert, pictures and outline': 'Wstaw, obrazy i konspekt',
        'Ready-made pieces: structure, text, math, symbols': 'Gotowe elementy: struktura, tekst, wzory, symbole',
        'The pictures of this document': 'Obrazy tego dokumentu',
        'Pictures': 'Obrazy',
        'The headings of the document': 'Nagłówki dokumentu',
        'Outline': 'Konspekt',
        'The headings of the document. Click one to go there in the code and in the preview.':
            'Nagłówki dokumentu. Kliknij jeden, aby przejść do niego w kodzie i w podglądzie.',
        'No headings yet - start a line with # and a space.': 'Brak nagłówków - zacznij wiersz od # i spacji.',
        'Open it here': 'Otwórz tutaj',
        'Drop the .md file or picture here': 'Upuść tu plik .md lub obraz',

        'The document is empty - write Markdown on the left, or choose a template under "New".':
            'Dokument jest pusty - pisz Markdown po lewej albo wybierz szablon w menu „Nowy”.',

        /* Problems above the code */
        'Hide': 'Ukryj',
        'Show': 'Pokaż',

        /* ---------- Insert tab ---------- */
        'Structure': 'Struktura',
        'Heading 1': 'Nagłówek 1',
        'Heading 2': 'Nagłówek 2',
        'Heading 3': 'Nagłówek 3',
        '# Heading': '# Nagłówek',
        '## Heading': '## Nagłówek',
        '### Heading': '### Nagłówek',
        'Horizontal rule': 'Linia pozioma',
        'Apply page breaks': 'Zastosuj podziały stron',
        'New page': 'Nowa strona',
        'Document': 'Dokument',
        '• Bulleted list': '• Wypunktowanie',
        '1. Numbered list': '1. Numerowanie',
        '☐ Task list': '☐ Lista zadań',
        'Fold-out section': 'Sekcja rozwijana',
        'Line break': 'Podział wiersza',
        'Text': 'Tekst',
        '**bold** (Ctrl+B)': '**pogrubienie** (Ctrl+B)',
        '*italic* (Ctrl+I)': '*kursywa* (Ctrl+I)',
        '~~struck through~~': '~~przekreślenie~~',
        'Link to a heading': 'Link do nagłówka',
        '[text](#heading)': '[tekst](#naglowek)',
        '[text](https://…) (Ctrl+K)': '[tekst](https://…) (Ctrl+K)',
        '![description](name.png)': '![opis](name.png)',
        'Footnote': 'Przypis',
        '[^1] at the cursor, the note at the end': '[^1] w miejscu kursora, przypis na końcu',
        'Key': 'Klawisz',
        'A key as on the keyboard: <kbd>Ctrl</kbd>': 'Klawisz jak na klawiaturze: <kbd>Ctrl</kbd>',
        '`code` between backticks': '`kod` między grawisami',
        '$x$ in the text': '$x$ w tekście',
        'Displayed': 'Wyeksponowany',
        '$$ … $$ on its own lines': '$$ … $$ w osobnych wierszach',
        'Fraction': 'Ułamek',
        'Root': 'Pierwiastek',
        'x² Power': 'x² Potęga',
        'x₁ Index': 'x₁ Indeks',
        '∑ Sum': '∑ Suma',
        '∫ Integral': '∫ Całka',
        'lim Limit': 'lim Granica',
        '2×2 matrix': 'Macierz 2×2',
        'Cases': 'Przypadki',
        'Greek letters': 'Litery greckie',
        'Symbols': 'Symbole',
        'Pictures have their own tab:': 'Obrazy mają własną kartę:',

        /* ---------- Pictures tab ---------- */
        'Add pictures…': 'Dodaj obrazy…',
        'No pictures yet': 'Brak obrazów',
        'Missing in this document': 'Brak w tym dokumencie',
        'Add file…': 'Dodaj plik…',
        'Show where it is used': 'Pokaż, gdzie jest używany',
        '![…](name) at the cursor': '![…](name) w miejscu kursora',
        'Rename - the code is changed along': 'Zmień nazwę - kod zmieni się razem z nią',
        'Rename': 'Zmień nazwę',
        'Choose another file, keep the name': 'Wybierz inny plik, zachowaj nazwę',
        'Replace': 'Zastąp',
        'Download the picture': 'Pobierz obraz',
        'Download': 'Pobierz',
        'Remove the picture from this document': 'Usuń obraz z tego dokumentu',
        'Remove': 'Usuń',
        'New name': 'Nowa nazwa',
        'Pictures belong to “': 'Obrazy należą do „',
        '” and stay in your browser. Drop or paste them anywhere in the editor, or add them here;':
            '” i zostają w twojej przeglądarce. Upuść je lub wklej w dowolnym miejscu edytora albo dodaj je tutaj;',
        'uses them.': 'ich używa.',

        /* ---------- Export ---------- */
        'Close': 'Zamknij',
        'File name': 'Nazwa pliku',
        'HTML page (one file)': 'Strona HTML (jeden plik)',
        'PDF (print or save as PDF)': 'PDF (drukuj lub zapisz jako PDF)',
        'Plain text': 'Zwykły tekst',
        'Markdown (.md)': 'Markdown (.md)',
        'Markdown with pictures (ZIP)': 'Markdown z obrazami (ZIP)',
        'Result': 'Wynik',
        'Download everything at once: .md, pictures, HTML and text': 'Pobierz wszystko naraz: .md, obrazy, HTML i tekst',
        'All formats (ZIP)': 'Wszystkie formaty (ZIP)',
        'Print / Save as PDF': 'Drukuj / zapisz jako PDF',
        '(The HTML page - with its pictures and styles inside - is created when you download or copy it.)':
            '(Strona HTML - z obrazami i stylami w środku - powstaje przy pobieraniu lub kopiowaniu.)',

        /* ---------- My documents ---------- */
        'Search by name': 'Szukaj po nazwie',
        'Search your documents': 'Przeszukaj dokumenty',
        'Open a .md file from your computer as a new document': 'Otwórz plik .md z komputera jako nowy dokument',
        'New document': 'Nowy dokument',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Kliknij dokument, aby go otworzyć. Są przechowywane tylko w tej przeglądarce - nic nie jest wysyłane. Wyczyszczenie danych witryny w przeglądarce je usuwa, więc pobierz te, które chcesz zachować.',
        'Download every document as a .md file (with its pictures) in one ZIP':
            'Pobierz każdy dokument jako plik .md (z obrazami) w jednym ZIP',
        'Download all (ZIP)': 'Pobierz wszystkie (ZIP)',
        'Duplicate': 'Duplikuj',
        'Download as .md': 'Pobierz jako .md',
        'Delete': 'Usuń',
        'This document is open': 'Ten dokument jest otwarty',
        'Click to open this document': 'Kliknij, aby otworzyć ten dokument',
        'No documents yet.': 'Brak dokumentów.',

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
        /* the step with the link, also when the editor sets it anew (text by text) */
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
        'The document is now in the Markdown Editor tab you already had open. Switch to that tab, or open it here.':
            'Dokument jest teraz w karcie Edytora Markdown, którą masz już otwartą. Przejdź do tamtej karty albo otwórz go tutaj.',
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
        'https://example.com/api/markdown': 'https://example.com/api/markdown',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(opcjonalny, wysyłany jako „Authorization: Bearer …”; przechowywany do zamknięcia tej karty)',
        'Send automatically a few seconds after each change (otherwise only when you click':
            'Wysyłaj automatycznie kilka sekund po każdej zmianie (w przeciwnym razie tylko po kliknięciu',
        'or press Ctrl+S)': 'lub Ctrl+S)',
        'Only for “': 'Tylko dla „',
        '” (other documents use the general address)': '” (inne dokumenty używają adresu ogólnego)',
        'What your server receives': 'Co otrzymuje twój serwer',
        'A POST request with JSON (your server must allow CORS from https://md.giit.ch):':
            'Żądanie POST z JSON (serwer musi zezwalać na CORS z https://md.giit.ch):',
        'Embed the editor in your website': 'Osadź edytor na swojej stronie',
        'Send now': 'Wyślij teraz',
        'Save setting': 'Zapisz ustawienie',

        /* ---------- Help ---------- */
        'How it works': 'Jak to działa',
        'Keyboard shortcuts': 'Skróty klawiszowe',
        'Bold / italic around the selected text': 'Pogrubienie / kursywa wokół zaznaczonego tekstu',
        'Link': 'Link',
        'Show the cursor\'s place in the preview': 'Pokaż miejsce kursora w podglądzie',
        'Indent / outdent': 'Zwiększ / zmniejsz wcięcie',
        'Undo / redo': 'Cofnij / ponów',
        'Save (download .md, or to your server) / export': 'Zapisz (pobierz .md lub zapisz na serwerze) / eksportuj',
        'Print / save as PDF': 'Drukuj / zapisz jako PDF',
        'Problems (a missing picture, a link to a heading that is not there, a code block that is never closed, a table row with too many cells) are listed above the code - click one to go there.':
            'Problemy (brakujący obraz, link do nieistniejącego nagłówka, niezamknięty blok kodu, wiersz tabeli ze zbyt wieloma komórkami) są wymienione nad kodem - kliknij jeden, aby tam przejść.',

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
        'This text changed in the code - wait for the preview, then try again':
            'Ten tekst zmienił się w kodzie - poczekaj na podgląd i spróbuj ponownie',
        'This box changed in the code - wait for the preview, then try again':
            'To pole zmieniło się w kodzie - poczekaj na podgląd i spróbuj ponownie',
        'This picture changed in the code - wait for the preview, then try again': 'Ten obraz zmienił się w kodzie - poczekaj na podgląd i spróbuj ponownie',
        'The code changed meanwhile - the edit was not used': 'Kod zmienił się w międzyczasie - edycja nie została użyta',
        'This anchor is not in the document': 'Tej kotwicy nie ma w dokumencie',
        'The picture is removed from this document. Places that use it show its name in a frame. "Undo" does not bring it back.':
            'Obraz zostanie usunięty z tego dokumentu. Miejsca, które go używają, pokażą jego nazwę w ramce. „Cofnij” go nie przywróci.',
        'Pictures can be PNG, JPG, GIF, WebP, SVG or PDF': 'Obrazy mogą być w formacie PNG, JPG, GIF, WebP, SVG lub PDF',
        'The picture is larger than 12 MB': 'Obraz jest większy niż 12 MB',
        'The picture could not be read': 'Nie udało się odczytać obrazu',
        'This document is empty already': 'Ten dokument jest już pusty',
        'Everything is removed; the pictures of the document stay. "Undo" brings the text back as long as the page is open.':
            'Wszystko zostanie usunięte; obrazy dokumentu zostają. „Cofnij” przywraca tekst, dopóki strona jest otwarta.',
        'Start over': 'Zacznij od nowa',
        'The file is larger than 8 MB': 'Plik jest większy niż 8 MB',
        'Downloaded': 'Pobrano',
        'Copied to the clipboard': 'Skopiowano do schowka',
        'This browser does not allow copying this': 'Ta przeglądarka nie pozwala tego skopiować',
        'Code copied': 'Kod skopiowany',
        '.md with its pictures downloaded (ZIP)': 'Pobrano .md z obrazami (ZIP)',
        '.md downloaded': 'Pobrano .md',
        'ZIP downloaded: .md, pictures, HTML and text': 'Pobrano ZIP: .md, obrazy, HTML i tekst',
        'Add': 'Dodaj',
        'The document and its pictures are removed from this browser for good. Download it first if you want to keep a copy.':
            'Dokument i jego obrazy zostaną trwale usunięte z tej przeglądarki. Jeśli chcesz zachować kopię, najpierw go pobierz.',

        /* ---------- Problems the preview finds (markdown.js) ---------- */
        '$$ is never closed - add a line with $$ after the formula':
            '$$ nie jest nigdzie zamknięty - dodaj wiersz z $$ po wzorze',

        /* ---------- The same in English and German, not in Polish ---------- */
        'Code': 'Kod',
        'Export': 'Eksport',
        'Name': 'Nazwa',
        'Label': 'Etykieta',
    },
    html: {
        '<b>Export</b> also has <b>Open in another editor</b>: it converts the document and opens it as a new document there. Anything the other format cannot hold is listed first.':
            '<b>Eksport</b> oferuje też <b>Otwórz w innym edytorze</b>: dokument zostaje przekonwertowany i otwarty tam jako nowy. To, czego drugi format nie może pomieścić, jest najpierw wymienione.',
        '<b>Insert</b> &gt; <b>New page</b> sets a page break for printing and PDF; the preview shows it as a dashed line. Headings stay with their text and tables and pictures are not cut. In Export, <b>Apply page breaks</b> turns them off for a PDF.':
            '<b>Wstaw</b> &gt; <b>Nowa strona</b> ustawia podział strony do druku i PDF; podgląd pokazuje go jako linię przerywaną. Nagłówki zostają przy tekście, tabele i obrazy nie są cięte. W <b>Eksporcie</b> opcja <b>Zastosuj podziały stron</b> wyłącza je dla PDF.',
        /* Export */
        'The print dialog opens with the document only. Choose <b>Save as PDF</b> (or "Microsoft Print to PDF") as the printer. In Chrome and Edge, untick "Headers and footers" if the browser offers it. The text in the PDF stays sharp and can be selected.':
            'Okno drukowania otworzy się tylko z dokumentem. Jako drukarkę wybierz <b>Zapisz jako PDF</b> (lub „Microsoft Print to PDF”). W Chrome i Edge odznacz „Nagłówki i stopki”, jeśli przeglądarka to proponuje. Tekst w PDF pozostaje ostry i można go zaznaczać.',

        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Kliknij <b>Kopiuj prompt</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'AI odpowiada linkiem: kliknij go albo wklej całą odpowiedź poniżej. <b>Cofnij</b> to cofa.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'AI odpowiada linkiem: <b>wklej całą jej odpowiedź poniżej</b> (kliknięty link otwiera osobny edytor). <b>Cofnij</b> to cofa.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'Edytor może wysyłać każdą zapisaną wersję na twój własny serwer (<b>webhook</b>), dzięki czemu praca jest przechowywana tam, gdzie chcesz. Nic nie jest wysyłane, dopóki nie wpiszesz tu adresu.',
        'Also possible: <code>?src=&lt;URL of a .md file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>mdeditor:ai</code>, <code>mdeditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Możliwe jest też: <code>?src=&lt;URL pliku .md&gt;</code> otwiera plik, <code>&amp;webhook=&lt;URL&gt;</code> zapisuje tam ten dokument. Edytor może też otworzyć się we własnym oknie (<code>?embed=window</code>), a twoja strona może przekazać mu własny prompt dla AI i klucz sesji, aby AI wysłała wynik na twój serwer (<code>mdeditor:ai</code>, <code>mdeditor:key-request</code>) - zobacz „Edytor na własnej stronie” pod edytorem. Szczegóły są w <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> Markdown on the left - or start with <b>New</b> and one of the templates. The preview in the middle shows the document as you type.':
            '<b>Pisz</b> Markdown po lewej - albo zacznij od <b>Nowy</b> i jednego z szablonów. Podgląd pośrodku pokazuje dokument na bieżąco.',
        '<b>Click text in the preview</b> to edit it right there: the cursor is where you clicked, and the code\'s cursor goes to the same place. <b>Enter</b> starts a new paragraph; <b>Shift+Enter</b> inserts a line break. <b>Ctrl+Enter</b> (<b>Cmd+Enter</b> on macOS) or a click elsewhere applies the edit; <b>Escape</b> cancels. Each edit is one step for Undo. Characters such as <code>*</code> or <code>_</code> are escaped so they stay text. A click on math, a picture or code jumps to its place in the code instead. <b>Ctrl</b> + click follows a link. A check box of a task list ticks the task in the code.':
            '<b>Kliknij tekst w podglądzie</b>, aby edytować go na miejscu: kursor jest tam, gdzie kliknięto, a kursor kodu przechodzi w to samo miejsce. <b>Enter</b> rozpoczyna nowy akapit; <b>Shift+Enter</b> wstawia podział wiersza. <b>Ctrl+Enter</b> (<b>Cmd+Enter</b> w macOS) lub kliknięcie gdzie indziej zatwierdza edycję; <b>Escape</b> ją anuluje. Każdą edycję można cofnąć jednym krokiem. Znaki takie jak <code>*</code> czy <code>_</code> są poprzedzane ukośnikiem odwrotnym, aby pozostały tekstem. Kliknięcie wzoru, obrazu lub kodu przenosi zamiast tego do jego miejsca w kodzie. <b>Ctrl</b> + kliknięcie otwiera link. Pole wyboru na liście zadań odhacza zadanie w kodzie.',
        '<b>Insert</b> on the right has ready-made pieces (headings, lists, tables, math, symbols); <b>Pictures</b> holds the pictures of the document; <b>Outline</b> lists the headings.':
            '<b>Wstaw</b> po prawej ma gotowe elementy (nagłówki, listy, tabele, wzory, symbole); <b>Obrazy</b> zawiera obrazy dokumentu; <b>Konspekt</b> wymienia nagłówki.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser.':
            '<b>Moje dokumenty</b> (przycisk folderu w lewym górnym rogu) wymienia wszystkie dokumenty przechowywane w tej przeglądarce.',
        '<b>Export</b> makes an HTML page, a PDF (via the print dialog) or plain text. <b>Download .md</b> saves the code (with its pictures as ZIP).':
            '<b>Eksportuj</b> tworzy stronę HTML, PDF (przez okno drukowania) lub zwykły tekst. <b>Pobierz .md</b> zapisuje kod (z obrazami jako ZIP).',
        'The preview understands CommonMark with GitHub\'s tables, task lists, strikethrough, autolinks and footnotes, and math in <code>$…$</code> and <code>$$…$$</code>. HTML in the Markdown is shown without scripts, styles, frames and forms.':
            'Podgląd rozumie CommonMark z tabelami GitHub, listami zadań, przekreśleniem, autolinkami i przypisami oraz wzory w <code>$…$</code> i <code>$$…$$</code>. HTML w Markdownie jest pokazywany bez skryptów, stylów, ramek i formularzy.',
        'Math: <code>$…$</code> around the selection': 'Wzór: <code>$…$</code> wokół zaznaczenia',
        'Lines in or out of a comment (<code>&lt;!-- --&gt;</code>)':
            'Zakomentuj lub odkomentuj wiersze (<code>&lt;!-- --&gt;</code>)',
        '<kbd>Enter</kbd> in a list starts the next item (<code>-</code>, <code>1.</code>, <code>- [ ]</code>, <code>&gt;</code>); on an empty item it ends the list. <code>* _ ` ~ $ [ (</code> close by themselves around a selection.':
            '<kbd>Enter</kbd> na liście zaczyna następny punkt (<code>-</code>, <code>1.</code>, <code>- [ ]</code>, <code>&gt;</code>); na pustym punkcie kończy listę. <code>* _ ` ~ $ [ (</code> zamykają się same wokół zaznaczenia.',

    },
    patterns: [
        /* ---------- Status lines ---------- */
        ['^(\\d+) lines · ([\\d.]+ K?B) · (\\d+) (?:word|words)$',
            (m, l, kb, w) => `${l} ${getPlural(l, 'wiersz', 'wiersze', 'wierszy')} · ${formatSize(kb)} · ${w} ${getPlural(w, 'słowo', 'słowa', 'słów')}`],
        ['^\\.md and (\\d+) (?:picture|pictures)$', (m, k) => `.md i ${k} ${getPlural(k, 'obraz', 'obrazy', 'obrazów')}`],
        ['^([\\d,]+) bytes$', (m, b) => formatSize(m)],
        ['^\\d{1,3}(?:,\\d{3})+$', m => formatThousands(m)],

        /* Problems above the code */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'błąd', 'błędy', 'błędów')}`],
        ['^· (\\d+) (?:note|notes)$', (m, k) => `· ${k} ${getPlural(k, 'uwaga', 'uwagi', 'uwag')}`],
        ['^(\\d+) (?:note|notes)$', (m, k) => `${k} ${getPlural(k, 'uwaga', 'uwagi', 'uwag')}`],
        ['^Line (\\d+)$', 'Wiersz $1'],
        ['^The preview failed: (.*)$', 'Podgląd się nie powiódł: $1'],
        ['^The preview stopped at an unexpected problem: (.*)$', 'Podgląd zatrzymał się na nieoczekiwanym problemie: $1'],
        ['^Picture "(.+)" not found - drag the picture into the editor \\(or add it in the Pictures tab\\)$',
            'Nie znaleziono obrazu „$1” - przeciągnij obraz do edytora (lub dodaj go w karcie Obrazy)'],
        ['^The link to "(.+)" has no heading or anchor of that name$',
            'Link do „$1”: nie ma nagłówka ani kotwicy o tej nazwie'],
        ['^This code block \\((.+)\\) is never closed - add a line with (.+) after the code$',
            'Ten blok kodu ($1) nie jest nigdzie zamknięty - dodaj po kodzie wiersz z $2'],
        ['^This table row has (\\d+) (?:cell|cells), the header has (\\d+)$',
            (m, k, h) => `Ten wiersz tabeli ma ${k} ${getPlural(k, 'komórkę', 'komórki', 'komórek')}, a wiersz nagłówka ma ${h}`],
        ['^Math: (.*)$', 'Wzór: $1'],

        /* ---------- Pictures tab ---------- */
        ['^(\\d+) (?:picture|pictures) · (.+)$', (m, k, s) => `${k} ${getPlural(k, 'obraz', 'obrazy', 'obrazów')} · ${formatSize(s)}`],
        ['^Choose the file for (.+)$', 'Wybierz plik dla $1'],
        ['^Insert !\\[…\\]\\((.+)\\) at the cursor$', 'Wstaw ![…]($1) w miejscu kursora'],
        ['^used (\\d+)×$', 'użyty $1×'],
        ['^(.* · )?not used yet$', (m, a) => `${a || ''}jeszcze nieużywany`],

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
        ['^"(.+)" is now "(.+)"$', '„$1” nazywa się teraz „$2”'],
        ['^Remove "(.+)"\\?$', 'Usunąć „$1”?'],
        ['^"(.+)" now shows the new picture$', '„$1” pokazuje teraz nowy obraz'],
        ['^Picture "(.+)" added to "(.+)"$', 'Obraz „$1” dodany do „$2”'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '„$1” jest teraz pusty - „Cofnij” go przywraca'],
        ['^"(.+)" opened$', 'Otwarto „$1”'],
        ['^New document "(.+)" - your other documents are under "My documents"$',
            'Nowy dokument „$1” - pozostałe dokumenty są w „Moich dokumentach”'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$',
            'Nowy dokument „$1” od AI - pozostałe dokumenty są bez zmian'],
        ['^"(.+)" is not a Markdown file$', '„$1” nie jest plikiem Markdown'],
        ['^Opened "(.+)" - it is now in "My documents"$', 'Otwarto „$1” - jest teraz w „Moich dokumentach”'],
        ['^Opened "(.+)" with (\\d+) (?:picture|pictures)$',
            (m, f, k) => `Otwarto „${f}” z ${k} ${getPlural(k, 'obrazem', 'obrazami', 'obrazami')}`],
        ['^"(.+)" could not be opened: (.*)$', (m, f, why) => `Nie udało się otworzyć „${f}”: ${ZIP[why] || why}`],
        ['^Document received - the preview found (\\d+) (?:problem|problems), see above the code$',
            (m, k) => `Dokument otrzymany - podgląd znalazł ${k} ${getPlural(k, 'problem', 'problemy', 'problemów')}, zobacz nad kodem`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '„$1” zmieniony przez AI - „Cofnij” to cofa'],
        ['^"(.+)" duplicated$', 'Zduplikowano „$1”'],
        ['^Delete "(.+)"\\?$', 'Usunąć „$1”?'],
        ['^"(.+)" deleted$', 'Usunięto „$1”'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Otwórz $1'],
    ],
};
