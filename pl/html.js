/* Polish texts of the HTML editor: the bar, the work area (code, preview,
   document settings, insert, files, outline), its dialogs and messages,
   and the problems the editor finds in the code. What all editors share is
   in common.js; how the dictionaries are used is described in
   i18n.js. Names of documents, files, elements and attributes stay as they
   are: the patterns copy them into the Polish text. */

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
const ZIP = { 'it is not a ZIP file': 'to nie jest plik ZIP', 'there is no .html file in it': 'nie ma w nim pliku .html' };

export default {
    text: {
        // Editing in place: Enter and Shift+Enter
        "Editing in the preview - Enter: new paragraph, Shift+Enter: new line, Ctrl+Enter or a click elsewhere keeps it, Escape cancels": "Edycja w podglądzie - Enter: nowy akapit, Shift+Enter: nowy wiersz, Ctrl+Enter lub kliknięcie obok zatwierdza, Escape anuluje",
        /* ---------- Top bar ---------- */
        'HTML Editor - home': 'Edytor HTML - strona główna',
        'HTML Editor': 'Edytor HTML',
        'File': 'Plik',
        'My documents (Ctrl+O)': 'Moje dokumenty (Ctrl+O)',
        'My documents': 'Moje dokumenty',
        'New document, or start this one over': 'Nowy dokument albo rozpoczęcie tego od nowa',
        'New': 'Nowy',
        'New blank page': 'Nowa pusta strona',
        'An empty HTML page - your other documents stay as they are':
            'Pusta strona HTML - pozostałe dokumenty zostają bez zmian',
        'Landing page': 'Strona docelowa',
        'A big header, three features and a footer': 'Duży nagłówek, trzy zalety i stopka',
        'Article': 'Artykuł',
        'Title, sections, a quote and a list': 'Tytuł, sekcje, cytat i lista',
        'Contact form': 'Formularz kontaktowy',
        'Name, email and message with labels': 'Imię, e-mail i wiadomość z etykietami',
        'Email newsletter': 'Newsletter e-mail',
        'An email layout with a table': 'Układ e-maila z tabelą',
        'The welcome example': 'Przykład powitalny',
        'Shows what the editor can do': 'Pokazuje, co potrafi edytor',
        'Start this document over': 'Zacznij ten dokument od nowa',
        'Keeps the head, empties the body - "Undo" brings it back': 'Zachowuje sekcję head, opróżnia body - „Cofnij” je przywraca',
        'Open an .html file (or a picture, stylesheet or ZIP) from your computer (you can also drag it into the window)':
            'Otwórz plik .html (lub obraz, arkusz stylów albo ZIP) z komputera (można go też przeciągnąć do okna)',
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
        'Save the page as an .html file - with its files as ZIP (Ctrl+S)':
            'Zapisz stronę jako plik .html - z plikami jako ZIP (Ctrl+S)',
        'Download .html': 'Pobierz .html',
        'HTML, one file with everything inside, ZIP, PDF and text (Ctrl+E)':
            'HTML, jeden plik ze wszystkim w środku, ZIP, PDF i tekst (Ctrl+E)',
        'Export…': 'Eksportuj…',

        /* ---------- Views and work area ---------- */
        'View': 'Widok',
        'Edit': 'Edycja',
        'Side panel': 'Panel boczny',
        'Preview': 'Podgląd',
        'Document': 'Dokument',
        'HTML code': 'Kod HTML',
        'Copy the HTML code to the clipboard': 'Skopiuj kod HTML do schowka',
        'Copy code': 'Kopiuj kod',
        'Copy': 'Kopiuj',
        'Indent every line by the depth of its elements': 'Ustaw wcięcia wierszy zgodnie z zagnieżdżeniem elementów',
        'Tidy up': 'Uporządkuj',
        'Drag to change the width of the code area': 'Przeciągnij, aby zmienić szerokość obszaru kodu',
        'Drag to change the width': 'Przeciągnij, aby zmienić szerokość',
        'Formatting': 'Formatowanie',
        'Bold (Ctrl+B)': 'Pogrubienie (Ctrl+B)',
        'Bold': 'Pogrubienie',
        'Italic (Ctrl+I)': 'Kursywa (Ctrl+I)',
        'Italic': 'Kursywa',
        'Underline (Ctrl+U)': 'Podkreślenie (Ctrl+U)',
        'Underline': 'Podkreślenie',
        'Heading': 'Nagłówek',
        'Bulleted list': 'Lista punktowana',
        'Numbered list': 'Lista numerowana',
        'Table': 'Tabela',
        'Picture': 'Obraz',
        'Width of the preview': 'Szerokość podglądu',
        'As wide as the preview': 'Tak szeroko jak podgląd',
        'Full width': 'Pełna szerokość',
        'Tablet (768 pixels wide)': 'Tablet (szerokość 768 pikseli)',
        'Tablet width': 'Szerokość tabletu',
        'Phone (390 pixels wide)': 'Telefon (szerokość 390 pikseli)',
        'Phone width': 'Szerokość telefonu',
        'Preview of the page: click text to edit it, or anything else to jump to its place in the code':
            'Podgląd strony: kliknij tekst, aby go edytować, lub cokolwiek innego, aby przejść do jego miejsca w kodzie',
        'Preview of the page': 'Podgląd strony',
        'Updating…': 'Aktualizacja…',
        'Title, language, description and the stylesheets of the page': 'Tytuł, język, opis i arkusze stylów strony',
        'Ready-made pieces: structure, text, lists, media, forms, head':
            'Gotowe elementy: struktura, tekst, listy, multimedia, formularze, sekcja head',
        'Insert': 'Wstaw',
        'The pictures and other files of this document': 'Obrazy i inne pliki tego dokumentu',
        'Files': 'Pliki',
        'The headings of the page': 'Nagłówki strony',
        'Outline': 'Konspekt',
        'The headings of the page. Click one to go there in the code and in the preview.':
            'Nagłówki strony. Kliknij jeden, aby przejść do niego w kodzie i w podglądzie.',
        'No headings yet - add one with <h1> … <h6>.': 'Brak nagłówków - dodaj nagłówek za pomocą <h1> … <h6>.',
        'Open it here': 'Otwórz tutaj',
        'Drop the .html file, picture or stylesheet here': 'Upuść tu plik .html, obraz lub arkusz stylów',

        /* Problems above the code */
        'Hide': 'Ukryj',
        'Show': 'Pokaż',

        /* ---------- Insert tab ---------- */
        'Structure': 'Struktura',
        'Heading 1': 'Nagłówek 1',
        'Heading 2': 'Nagłówek 2',
        'Heading 3': 'Nagłówek 3',
        'Heading 4': 'Nagłówek 4',
        'Paragraph': 'Akapit',
        'Section': 'Rozdział',
        'Header': 'Nagłówek strony',
        'Navigation bar': 'Pasek nawigacji',
        'Main content': 'Główna treść',
        'Footer': 'Stopka',
        'Box': 'Pole',
        'Fold-out (details)': 'Rozwijany blok (details)',
        'Dividing line': 'Linia oddzielająca',
        'Apply page breaks': 'Zastosuj podziały stron',
        'New page': 'Nowa strona',
        'Line break': 'Podział wiersza',
        'Comment': 'Komentarz',
        'Lists and tables': 'Listy i tabele',
        '• Bulleted list': '• Wypunktowanie',
        '1. Numbered list': '1. Numerowanie',
        'Description list': 'Lista opisowa',
        'Highlighted': 'Wyróżnione',
        'Small print': 'Drobny druk',
        'Code in the text': 'Kod w tekście',
        'x² Superscript': 'x² Indeks górny',
        'x₁ Subscript': 'x₁ Indeks dolny',
        'Quote': 'Cytat',
        'Program code': 'Kod programu',
        'Inline part (span)': 'Fragment w wierszu (span)',
        'Media': 'Multimedia',
        'Figure with caption': 'Rysunek z podpisem',
        'Video player': 'Odtwarzacz wideo',
        'Audio player': 'Odtwarzacz audio',
        'The files of the page have their own tab:': 'Pliki strony mają własną kartę:',
        'Forms': 'Formularze',
        'Form': 'Formularz',
        'Text field': 'Pole tekstowe',
        'Email field': 'Pole e-mail',
        'Text area': 'Obszar tekstowy',
        'Choice list': 'Lista wyboru',
        'Tick box': 'Pole wyboru',
        'Radio buttons': 'Przyciski opcji',
        'Button': 'Przycisk',
        'Head': 'Sekcja head',
        'Character set': 'Kodowanie znaków',
        'The character set: <meta charset="utf-8">': 'Kodowanie znaków: <meta charset="utf-8">',
        'Fits phone screens: <meta name="viewport">': 'Dopasowanie do ekranów telefonów: <meta name="viewport">',
        'Description': 'Opis',
        'For search engines: <meta name="description">': 'Dla wyszukiwarek: <meta name="description">',
        'Shared links': 'Udostępniane linki',
        'Title, description and picture for shared links (Open Graph)':
            'Tytuł, opis i obraz dla udostępnianych linków (Open Graph)',
        'Stylesheet file': 'Plik arkusza stylów',
        'A stylesheet file: <link rel="stylesheet">': 'Plik arkusza stylów: <link rel="stylesheet">',
        'Style block': 'Blok stylów',
        'CSS in the page: <style> … </style>': 'CSS na stronie: <style> … </style>',
        'Tab icon': 'Ikona karty',
        'The icon in the browser tab: <link rel="icon">': 'Ikona w karcie przeglądarki: <link rel="icon">',
        'Special characters': 'Znaki specjalne',
        'Insert &nbsp; (no-break space)': 'Wstaw &nbsp; (spacja niełamliwa)',
        'Insert &shy; (soft hyphen)': 'Wstaw &shy; (miękki dywiz)',

        /* ---------- Files tab ---------- */
        'Add files…': 'Dodaj pliki…',
        'No files yet': 'Brak plików',
        'Missing in this document': 'Brak w tym dokumencie',
        'Add file…': 'Dodaj plik…',
        'Show where it is used': 'Pokaż, gdzie jest używany',
        'A picture (img) at the cursor': 'Obraz (img) w miejscu kursora',
        'A link to the stylesheet in the head': 'Link do arkusza stylów w sekcji head',
        'A reference to the file at the cursor': 'Odwołanie do pliku w miejscu kursora',
        'A figure with caption at the cursor': 'Rysunek z podpisem w miejscu kursora',
        'As figure': 'Jako rysunek',
        'Rename - the code is changed along': 'Zmień nazwę - kod zmieni się razem z nią',
        'Rename': 'Zmień nazwę',
        'Choose another file, keep the name': 'Wybierz inny plik, zachowaj nazwę',
        'Replace': 'Zastąp',
        'Download the file': 'Pobierz plik',
        'Download': 'Pobierz',
        'Remove the file from this document': 'Usuń plik z tego dokumentu',
        'Remove': 'Usuń',
        'New name': 'Nowa nazwa',

        /* ---------- Document tab ---------- */
        'Title': 'Tytuł',
        '(in the browser tab and in search results)': '(w karcie przeglądarki i w wynikach wyszukiwania)',
        'Language': 'Język',
        '(for search engines)': '(dla wyszukiwarek)',
        'Author': 'Autor',
        'Characters as UTF-8 (meta charset)': 'Znaki jako UTF-8 (meta charset)',
        'Fits phone screens (meta viewport)': 'Dopasowanie do ekranów telefonów (meta viewport)',
        'Linked stylesheets': 'Podłączone arkusze stylów',
        'No stylesheet is linked.': 'Nie podłączono żadnego arkusza stylów.',
        'Add a .css file in the Files tab to link it here.': 'Dodaj plik .css w karcie Pliki, aby go tu podłączyć.',
        'Stylesheet of this document': 'Arkusz stylów tego dokumentu',
        'Link it': 'Podłącz',
        'from the web': 'z internetu',
        'a file of this document': 'plik tego dokumentu',
        'missing': 'brak',
        'Show it in the code': 'Pokaż w kodzie',
        'Not set': 'Nie ustawiono',
        'English (en)': 'Angielski (en)',
        'English, US (en-US)': 'Angielski, USA (en-US)',
        'English, UK (en-GB)': 'Angielski, Wielka Brytania (en-GB)',
        'German (de)': 'Niemiecki (de)',
        'German, Switzerland (de-CH)': 'Niemiecki, Szwajcaria (de-CH)',
        'German, Germany (de-DE)': 'Niemiecki, Niemcy (de-DE)',
        'French (fr)': 'Francuski (fr)',
        'Italian (it)': 'Włoski (it)',
        'Spanish (es)': 'Hiszpański (es)',
        'Portuguese (pt)': 'Portugalski (pt)',
        'Dutch (nl)': 'Niderlandzki (nl)',
        'elements · about': 'elem. · około',
        'element · about': 'elem. · około',
        'words ·': 'słów ·',
        'headings ·': 'nagł. ·',
        'heading ·': 'nagł. ·',
        'files': 'plików',
        'file': 'plik',
        'Make it a complete page': 'Zrób z tego pełną stronę',

        /* ---------- Export ---------- */
        'Close': 'Zamknij',
        'File name': 'Nazwa pliku',
        'Page': 'Strona',
        'HTML page (.html)': 'Strona HTML (.html)',
        'One HTML file with its files inside': 'Jeden plik HTML z plikami w środku',
        'HTML with its files (ZIP)': 'HTML z plikami (ZIP)',
        'PDF (print or save as PDF)': 'PDF (drukuj lub zapisz jako PDF)',
        'Plain text': 'Zwykły tekst',
        'Result': 'Wynik',
        'Download everything at once: .html, its files, the HTML with the files inside and the text':
            'Pobierz wszystko naraz: .html, jego pliki, HTML z plikami w środku i tekst',
        'All formats (ZIP)': 'Wszystkie formaty (ZIP)',
        'Print / Save as PDF': 'Drukuj / zapisz jako PDF',
        '(The page with its files inside is created when you download or copy it.)':
            '(Strona z plikami w środku powstaje przy pobieraniu lub kopiowaniu.)',

        /* ---------- My documents ---------- */
        'Search by name': 'Szukaj po nazwie',
        'Search your documents': 'Przeszukaj dokumenty',
        'Open an .html file from your computer as a new document': 'Otwórz plik .html z komputera jako nowy dokument',
        'New document': 'Nowy dokument',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Kliknij dokument, aby go otworzyć. Są przechowywane tylko w tej przeglądarce - nic nie jest wysyłane. Wyczyszczenie danych witryny w przeglądarce je usuwa, więc pobierz te, które chcesz zachować.',
        'Download every document as an .html file (with its files) in one ZIP':
            'Pobierz każdy dokument jako plik .html (z plikami) w jednym ZIP',
        'Download all (ZIP)': 'Pobierz wszystkie (ZIP)',
        'Duplicate': 'Duplikuj',
        'Download as .html': 'Pobierz jako .html',
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
        'The document is now in the HTML Editor tab you already had open. Switch to that tab, or open it here.':
            'Dokument jest teraz w karcie Edytora HTML, którą masz już otwartą. Przejdź do tamtej karty albo otwórz go tutaj.',
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
        'https://example.com/api/html': 'https://example.com/api/html',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(opcjonalny, wysyłany jako „Authorization: Bearer …”; przechowywany do zamknięcia tej karty)',
        'Send automatically a few seconds after each change (otherwise only when you click':
            'Wysyłaj automatycznie kilka sekund po każdej zmianie (w przeciwnym razie tylko po kliknięciu',
        'or press Ctrl+S)': 'lub Ctrl+S)',
        'Only for “': 'Tylko dla „',
        '” (other documents use the general address)': '” (inne dokumenty używają adresu ogólnego)',
        'What your server receives': 'Co otrzymuje twój serwer',
        'A POST request with JSON (your server must allow CORS from https://html.giit.ch):':
            'Żądanie POST z JSON (serwer musi zezwalać na CORS z https://html.giit.ch):',
        'Embed the editor in your website': 'Osadź edytor na swojej stronie',
        'Send now': 'Wyślij teraz',
        'Save setting': 'Zapisz ustawienie',

        /* ---------- Help ---------- */
        'How it works': 'Jak to działa',
        'Keyboard shortcuts': 'Skróty klawiszowe',
        'Bold / italic / underline the selected text': 'Pogrub / pochyl / podkreśl zaznaczony tekst',
        'Show the cursor\'s place in the preview': 'Pokaż miejsce kursora w podglądzie',
        'Indent / outdent': 'Zwiększ / zmniejsz wcięcie',
        'Undo / redo': 'Cofnij / ponów',
        'Save (download .html, or to your server) / export': 'Zapisz (pobierz .html lub zapisz na serwerze) / eksportuj',
        'Print / save as PDF': 'Drukuj / zapisz jako PDF',

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
        'The code changed meanwhile - the edit was not used': 'Kod zmienił się w międzyczasie - edycja nie została użyta',
        'The code changed meanwhile - the picture was not moved': 'Kod zmienił się w międzyczasie - obraz nie został przeniesiony',
        'The file is removed from this document. Places that use it show nothing. "Undo" does not bring it back.':
            'Plik zostanie usunięty z tego dokumentu. Miejsca, które go używają, nic nie pokażą. „Cofnij” go nie przywróci.',
        'A document can keep pictures, stylesheets, scripts, fonts, PDFs, audio and video':
            'Dokument może zawierać obrazy, arkusze stylów, skrypty, czcionki, pliki PDF, audio i wideo',
        'The file is larger than 12 MB': 'Plik jest większy niż 12 MB',
        'The file could not be read': 'Nie udało się odczytać pliku',
        'The code is now a complete page': 'Kod jest teraz pełną stroną',
        'The code is tidy already': 'Kod jest już uporządkowany',
        'Code tidied up': 'Kod uporządkowany',
        'This document is empty already': 'Ten dokument jest już pusty',
        'Everything between <body> and </body> is removed; the head (title, styles, meta tags) stays. "Undo" brings it back as long as the page is open.':
            'Wszystko między <body> a </body> zostanie usunięte; sekcja head (tytuł, style, znaczniki meta) pozostaje. „Cofnij” przywraca to, dopóki strona jest otwarta.',
        'Everything is removed. "Undo" brings it back as long as the page is open.':
            'Wszystko zostanie usunięte. „Cofnij” przywraca to, dopóki strona jest otwarta.',
        'Start over': 'Zacznij od nowa',
        'The file is larger than 8 MB': 'Plik jest większy niż 8 MB',
        'HTML pasted from the clipboard - "Undo" brings the old code back':
            'Wklejono HTML ze schowka - „Cofnij” przywraca poprzedni kod',
        'This browser does not allow printing here': 'Ta przeglądarka nie pozwala tu drukować',
        'Downloaded': 'Pobrano',
        'ZIP downloaded: .html, its files, the page as one file and the text':
            'Pobrano ZIP: .html, jego pliki, stronę jako jeden plik i tekst',
        'Copied to the clipboard': 'Skopiowano do schowka',
        'This browser does not allow copying this': 'Ta przeglądarka nie pozwala tego skopiować',
        'Code copied': 'Kod skopiowany',
        '.html with its files downloaded (ZIP)': 'Pobrano .html z plikami (ZIP)',
        '.html downloaded': 'Pobrano .html',
        'Add': 'Dodaj',
        'The document and its files are removed from this browser for good. Download it first if you want to keep a copy.':
            'Dokument i jego pliki zostaną trwale usunięte z tej przeglądarki. Jeśli chcesz zachować kopię, najpierw go pobierz.',

        /* ---------- Problems the editor finds (html.js) ---------- */
        'The comment <!-- is never closed - add -->': 'Komentarz <!-- nie jest nigdzie zamknięty - dodaj -->',
        '<img> without alt - describe the picture (alt="…"), or alt="" if it only decorates':
            '<img> bez alt - opisz obraz (alt="…") albo daj alt="", jeśli tylko zdobi',
        'No <!DOCTYPE html> at the top - browsers show the page in an older mode (quirks mode)':
            'Brak <!DOCTYPE html> na początku - przeglądarki pokazują stronę w starszym trybie (quirks mode)',

        /* ---------- The same in English and German, not in Polish ---------- */
        'Code': 'Kod',
        'Export': 'Eksport',
        'Name': 'Nazwa',
        'Text': 'Tekst',
        'Label': 'Etykieta',
        /* ---------- Template placeholders: views and box ---------- */
        'Show or hide the side panel': 'Pokaż lub ukryj panel boczny',
        'Examples': 'Przykłady',
        'Template': 'Szablon',
        'View of the preview': 'Widok podglądu',
        'The template with its placeholders as written': 'Szablon z symbolami zastępczymi w oryginalnej postaci',
        'The examples could not be filled in - the preview shows the template': 'Nie udało się wstawić przykładów - podgląd pokazuje szablon',
        'Placeholders': 'Symbole zastępcze',
        'The placeholders of the template - a click on one puts its tag at the cursor': 'Symbole zastępcze szablonu - kliknięcie wstawia znacznik w miejscu kursora',
        'Shown': 'Pokazany',
        'Hidden': 'Ukryty',
        'example view': 'widok przykładów',
        'template view': 'widok szablonu',
        'The page filled with the examples': 'Strona wypełniona przykładami',
    },
    html: {
        '<b>Export</b> also has <b>Open in another editor</b>: it converts the document and opens it as a new document there. Anything the other format cannot hold is listed first.':
            '<b>Eksport</b> oferuje też <b>Otwórz w innym edytorze</b>: dokument zostaje przekonwertowany i otwarty tam jako nowy. To, czego drugi format nie może pomieścić, jest najpierw wymienione.',
        '<b>Insert</b> &gt; <b>New page</b> sets a page break for printing and PDF; the preview shows it as a dashed line. Headings stay with their text and tables and pictures are not cut. In Export, <b>Apply page breaks</b> turns them off for a PDF.':
            '<b>Wstaw</b> &gt; <b>Nowa strona</b> ustawia podział strony do druku i PDF; podgląd pokazuje go jako linię przerywaną. Nagłówki zostają przy tekście, tabele i obrazy nie są cięte. W <b>Eksporcie</b> opcja <b>Zastosuj podziały stron</b> wyłącza je dla PDF.',
        /* Export */
        'The print dialog opens with the page as it is in the preview (without scripts). Choose <b>Save as PDF</b> (or "Microsoft Print to PDF") as the printer. In Chrome and Edge, untick "Headers and footers" and tick "Background graphics" if the page has colors. The text in the PDF can be selected.':
            'Okno drukowania otworzy się ze stroną taką jak w podglądzie (bez skryptów). Jako drukarkę wybierz <b>Zapisz jako PDF</b> (lub „Microsoft Print to PDF”). W Chrome i Edge odznacz „Nagłówki i stopki” i zaznacz „Grafika tła”, jeśli strona ma kolory. Tekst w PDF można zaznaczać.',

        /* Document tab without a head */
        'This code has no <code>&lt;html&gt;</code> with a <code>&lt;head&gt;</code>, so it is shown as a part of a page. Title, language and description belong in the head.':
            'Ten kod nie ma <code>&lt;html&gt;</code> z <code>&lt;head&gt;</code>, więc jest pokazywany jako fragment strony. Tytuł, język i opis należą do sekcji head.',

        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Kliknij <b>Kopiuj prompt</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'AI odpowiada linkiem: kliknij go albo wklej całą odpowiedź poniżej. <b>Cofnij</b> to cofa.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'AI odpowiada linkiem: <b>wklej całą jej odpowiedź poniżej</b> (kliknięty link otwiera osobny edytor). <b>Cofnij</b> to cofa.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'Edytor może wysyłać każdą zapisaną wersję na twój własny serwer (<b>webhook</b>), dzięki czemu praca jest przechowywana tam, gdzie chcesz. Nic nie jest wysyłane, dopóki nie wpiszesz tu adresu.',
        'Also possible: <code>?src=&lt;URL of an .html file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>htmleditor:ai</code>, <code>htmleditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Możliwe jest też: <code>?src=&lt;URL pliku .html&gt;</code> otwiera plik, <code>&amp;webhook=&lt;URL&gt;</code> zapisuje tam ten dokument. Edytor może też otworzyć się we własnym oknie (<code>?embed=window</code>), a twoja strona może przekazać mu własny prompt dla AI i klucz sesji, aby AI wysłała wynik na twój serwer (<code>htmleditor:ai</code>, <code>htmleditor:key-request</code>) - zobacz „Edytor na własnej stronie” pod edytorem. Szczegóły są w <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> HTML on the left - or start with <b>New</b> and one of the templates. The preview shows the page as you type.':
            '<b>Pisz</b> HTML po lewej - albo zacznij od <b>Nowy</b> i jednego z szablonów. Podgląd pokazuje stronę na bieżąco.',
        '<b>Click text in the preview</b> to edit it right there. Enter starts a new paragraph; Shift+Enter inserts a line break. Ctrl+Enter (Cmd+Enter on macOS) or a click elsewhere applies the edit; Escape cancels. Each edit is one step for Undo. A click on a picture or any other element jumps to its place in the code. The element at the code cursor gets a frame in the preview.':
            '<b>Kliknij tekst w podglądzie</b>, aby edytować go na miejscu. Enter rozpoczyna nowy akapit; Shift+Enter wstawia podział wiersza. Ctrl+Enter (Cmd+Enter w macOS) lub kliknięcie gdzie indziej zatwierdza edycję; Escape ją anuluje. Każdą edycję można cofnąć jednym krokiem. Kliknięcie obrazu lub innego elementu przenosi do jego miejsca w kodzie. Element w miejscu kursora w kodzie jest obramowany w podglądzie.',
        '<b>Document</b> on the right sets title, language and description of the page; <b>Insert</b> has ready-made pieces (headings, lists, tables, media, form fields, meta tags); <b>Files</b> holds the pictures, stylesheets and fonts of the page; <b>Outline</b> lists the headings.':
            '<b>Dokument</b> po prawej ustawia tytuł, język i opis strony; <b>Wstaw</b> ma gotowe elementy (nagłówki, listy, tabele, multimedia, pola formularzy, znaczniki meta); <b>Pliki</b> zawiera obrazy, arkusze stylów i czcionki strony; <b>Konspekt</b> wymienia nagłówki.',
        'Problems in the code (an unclosed <code>&lt;div&gt;</code>, a picture without <code>alt</code>, a missing file) are listed above the code - click one to go there.':
            'Problemy w kodzie (niezamknięty <code>&lt;div&gt;</code>, obraz bez <code>alt</code>, brakujący plik) są wymienione nad kodem - kliknij jeden, aby tam przejść.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser.':
            '<b>Moje dokumenty</b> (przycisk folderu w lewym górnym rogu) wymienia wszystkie dokumenty przechowywane w tej przeglądarce.',
        '<b>Export</b> makes an HTML file, one HTML file with the files inside, a ZIP, a PDF (via the print dialog) or plain text. <b>Download .html</b> saves the code.':
            '<b>Eksportuj</b> tworzy plik HTML, jeden plik HTML z plikami w środku, ZIP, PDF (przez okno drukowania) lub zwykły tekst. <b>Pobierz .html</b> zapisuje kod.',
        'The preview shows HTML and CSS as the browser does, but scripts and <code>on…</code> attributes never run and links do not navigate - so any page is safe to open.':
            'Podgląd pokazuje HTML i CSS tak jak przeglądarka, ale skrypty i atrybuty <code>on…</code> nigdy się nie wykonują, a linki nie prowadzą dalej - dzięki temu każdą stronę można bezpiecznie otworzyć.',
        'Comment lines in or out (<code>&lt;!-- --&gt;</code>)':
            'Zakomentuj lub odkomentuj wiersze (<code>&lt;!-- --&gt;</code>)',
        'Typing <code>&gt;</code> at the end of a start tag adds its end tag, and <kbd>Enter</kbd> between the two indents the new line. Typing <code>&lt;/</code> closes the element that is open.':
            'Wpisanie <code>&gt;</code> na końcu znacznika otwierającego dodaje znacznik zamykający, a <kbd>Enter</kbd> między nimi wcina nowy wiersz. Wpisanie <code>&lt;/</code> zamyka otwarty element.',

    },
    patterns: [
        /* ---------- Status lines ---------- */
        ['^(\\d+) lines · ([\\d.]+ K?B)$', (m, l, kb) => `${l} ${getPlural(l, 'wiersz', 'wiersze', 'wierszy')} · ${formatSize(kb)}`],
        ['^\\.html and (\\d+) (?:file|files)$', (m, k) => `.html i ${k} ${getPlural(k, 'plik', 'pliki', 'plików')}`],
        ['^([\\d,]+) bytes$', (m, b) => formatSize(m)],
        ['^\\d{1,3}(?:,\\d{3})+$', m => formatThousands(m)],

        /* Problems above the code */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'błąd', 'błędy', 'błędów')}`],
        ['^· (\\d+) (?:note|notes)$', (m, k) => `· ${k} ${getPlural(k, 'uwaga', 'uwagi', 'uwag')}`],
        ['^(\\d+) (?:note|notes)$', (m, k) => `${k} ${getPlural(k, 'uwaga', 'uwagi', 'uwag')}`],
        ['^Line (\\d+)$', 'Wiersz $1'],
        ['^The preview failed: (.*)$', 'Podgląd się nie powiódł: $1'],
        ['^The tag <(\\S+) is never closed with >$', 'Znacznik <$1 nie jest nigdzie zamknięty przez >'],
        ['^<(\\S+)> is obsolete - use CSS or a current element instead$',
            '<$1> jest przestarzały - użyj zamiast niego CSS lub aktualnego elementu'],
        ['^Unknown element <(\\S+)>$', 'Nieznany element <$1>'],
        ['^The attribute (\\S+) is given twice in <(\\S+)> - the browser uses the first one$',
            'Atrybut $1 występuje dwukrotnie w <$2> - przeglądarka używa pierwszego'],
        ['^The id "(.*)" is used twice$', 'Id „$1” jest użyte dwukrotnie'],
        ['^<(\\S+)\\/> - in HTML only void elements \\(like <br>\\) close themselves; add <\\/(\\S+)>$',
            '<$1/> - w HTML same zamykają się tylko elementy puste (jak <br>); dodaj </$2>'],
        ['^<(\\S+)> is never closed - add <\\/(\\S+)>$', '<$1> nie jest nigdzie zamknięty - dodaj </$2>'],
        ['^<\\/(\\S+)> - <(\\S+)> has no end tag$', '</$1> - <$2> nie ma znacznika zamykającego'],
        ['^<\\/(\\S+)> without an opening <(\\S+)>$', '</$1> bez otwierającego <$2>'],
        ['^<(\\S+)> is not closed before <\\/(\\S+)> - add <\\/(\\S+)> first$',
            '<$1> nie jest zamknięty przed </$2> - najpierw dodaj </$3>'],
        ['^The file "(.+)" is missing - add it in the Files tab \\(or drop it into the editor\\)$',
            'Brak pliku „$1” - dodaj go w karcie Pliki (lub upuść go w edytorze)'],

        /* ---------- Insert tab ---------- */
        ['^Insert (&[#\\w]+;)$', 'Wstaw $1'],

        /* ---------- Files tab ---------- */
        ['^(\\d+) (?:file|files) · (.+)$', (m, k, s) => `${k} ${getPlural(k, 'plik', 'pliki', 'plików')} · ${formatSize(s)}`],
        ['^Files belong to “(.*)” and stay in your browser\\. Drop or paste pictures, stylesheets or fonts anywhere in the editor, or add them here; the code uses them by their name, e\\.g\\.$',
            'Pliki należą do „$1” i zostają w twojej przeglądarce. Upuść lub wklej obrazy, arkusze stylów lub czcionki w dowolnym miejscu edytora albo dodaj je tutaj; kod używa ich po nazwie, np.'],
        ['^Choose the file for (.+)$', 'Wybierz plik dla $1'],
        ['^Insert (.+) at the cursor$', 'Wstaw $1 w miejscu kursora'],
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
        ['^"(.+)" now has the new content$', '„$1” ma teraz nową zawartość'],
        ['^File "(.+)" added to "(.+)"$', 'Plik „$1” dodany do „$2”'],
        ['^"(.+)" is linked already$', '„$1” jest już podłączony'],
        ['^"(.+)" is linked$', '„$1” jest podłączony'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '„$1” jest teraz pusty - „Cofnij” go przywraca'],
        ['^"(.+)" opened$', 'Otwarto „$1”'],
        ['^New document "(.+)" - your other documents are under "My documents"$',
            'Nowy dokument „$1” - pozostałe dokumenty są w „Moich dokumentach”'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$',
            'Nowy dokument „$1” od AI - pozostałe dokumenty są bez zmian'],
        ['^Opened "(.+)" - it is now in "My documents"$', 'Otwarto „$1” - jest teraz w „Moich dokumentach”'],
        ['^Opened "(.+)" with (\\d+) (?:file|files)$',
            (m, f, k) => `Otwarto „${f}” z ${k} ${getPlural(k, 'plikiem', 'plikami', 'plikami')}`],
        ['^"(.+)" could not be opened: (.*)$', (m, f, why) => `Nie udało się otworzyć „${f}”: ${ZIP[why] || why}`],
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
