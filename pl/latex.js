/* Polish texts of the LaTeX editor: the bar, the work area (code, preview,
   document settings, insert, pictures, outline), its dialogs and messages,
   and the problems the preview finds in the code. What all editors share is
   in common.js; how the dictionaries are used is described in
   i18n.js. Names of documents, pictures, labels and commands stay as they
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
const ZIP = { 'it is not a ZIP file': 'to nie jest plik ZIP', 'there is no .tex file in it': 'nie ma w nim pliku .tex' };

export default {
    text: {
        // Editing in place: Enter and Shift+Enter
        "Editing on the page - Enter: new paragraph, Shift+Enter: new line, Ctrl+Enter or a click elsewhere keeps it, Escape cancels": "Edycja na stronie - Enter: nowy akapit, Shift+Enter: nowy wiersz, Ctrl+Enter lub kliknięcie obok zatwierdza, Escape anuluje",
        "A new paragraph inside bold, italic or another command is made in the code - Shift+Enter makes a new line": "Nowy akapit wewnątrz pogrubienia, kursywy lub innego polecenia tworzy się w kodzie - Shift+Enter tworzy nowy wiersz",
        "A new line in a heading or table cell is made in the code": "Nowy wiersz w nagłówku lub komórce tabeli tworzy się w kodzie",
        /* ---------- Top bar ---------- */
        'LaTeX Editor - home': 'Edytor LaTeX - strona główna',
        'LaTeX Editor': 'Edytor LaTeX',
        'File': 'Plik',
        'My documents (Ctrl+O)': 'Moje dokumenty (Ctrl+O)',
        'My documents': 'Moje dokumenty',
        'New document, or start this one over': 'Nowy dokument albo rozpoczęcie tego od nowa',
        'New': 'Nowy',
        'New blank document': 'Nowy pusty dokument',
        'An empty article - your other documents stay as they are': 'Pusty artykuł - pozostałe dokumenty zostają bez zmian',
        'Article': 'Artykuł',
        'Title, abstract and three sections': 'Tytuł, streszczenie i trzy rozdziały',
        'Letter': 'List',
        'Addresses, date, subject and signature': 'Adresy, data, temat i podpis',
        'Exercise sheet': 'Arkusz ćwiczeń',
        'Solutions with math and code': 'Rozwiązania ze wzorami i kodem',
        'Social media post': 'Post w mediach społecznościowych',
        'A square picture with colors and big type': 'Kwadratowy obraz z kolorami i dużą czcionką',
        'The welcome example': 'Przykład powitalny',
        'Shows what the editor can do': 'Pokazuje, co potrafi edytor',
        'Start this document over': 'Zacznij ten dokument od nowa',
        'Keeps the preamble, empties the text - "Undo" brings it back':
            'Zachowuje preambułę, opróżnia tekst - „Cofnij” go przywraca',
        'Open a .tex file (or a picture) from your computer (you can also drag it into the window)':
            'Otwórz plik .tex (lub obraz) z komputera (można go też przeciągnąć do okna)',
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
        'Save the document as a .tex file (Ctrl+S)': 'Zapisz dokument jako plik .tex (Ctrl+S)',
        'Download .tex': 'Pobierz .tex',
        'PDF, pictures of the pages, HTML and more (Ctrl+E)': 'PDF, obrazy stron, HTML i więcej (Ctrl+E)',
        'Export…': 'Eksportuj…',

        /* ---------- Views and work area ---------- */
        'View': 'Widok',
        'Edit': 'Edycja',
        'Side panel': 'Panel boczny',
        'Preview': 'Podgląd',
        'Document': 'Dokument',
        'LaTeX code': 'Kod LaTeX',
        'Copy the LaTeX code to the clipboard': 'Skopiuj kod LaTeX do schowka',
        'Copy code': 'Kopiuj kod',
        'Copy': 'Kopiuj',
        'Indent the content of every environment neatly': 'Uporządkuj wcięcia w każdym środowisku',
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
        'Fixed-width text': 'Tekst o stałej szerokości',
        'Section heading': 'Nagłówek rozdziału',
        'Section': 'Rozdział',
        'Bulleted list': 'Lista punktowana',
        'Numbered list': 'Lista numerowana',
        'Table': 'Tabela',
        'Picture': 'Obraz',
        'Math in the text': 'Wzór w tekście',
        'Math': 'Wzór',
        'Previous page (Page Up)': 'Poprzednia strona (Page Up)',
        'Previous page': 'Poprzednia strona',
        'Next page (Page Down)': 'Następna strona (Page Down)',
        'Next page': 'Następna strona',
        'Preview of the pages: click text to jump to its place in the code':
            'Podgląd stron: kliknij tekst, aby przejść do jego miejsca w kodzie',
        'Zoom out (Ctrl + -)': 'Pomniejsz (Ctrl + -)',
        'Zoom out': 'Pomniejsz',
        'Show at actual size': 'Pokaż w rzeczywistym rozmiarze',
        'Zoom in (Ctrl + +)': 'Powiększ (Ctrl + +)',
        'Zoom in': 'Powiększ',
        'Fit the page width into the window': 'Dopasuj szerokość strony do okna',
        'Fit width': 'Do szerokości',
        'Show the whole page': 'Pokaż całą stronę',
        'Whole page': 'Cała strona',
        'Updating…': 'Aktualizacja…',
        'Paper, fonts, margins and title of the document': 'Papier, czcionki, marginesy i tytuł dokumentu',
        'Ready-made pieces: structure, text, math, symbols': 'Gotowe elementy: struktura, tekst, wzory, symbole',
        'Insert': 'Wstaw',
        'The pictures of this document': 'Obrazy tego dokumentu',
        'Pictures': 'Obrazy',
        'The sections of the document': 'Rozdziały dokumentu',
        'Outline': 'Konspekt',
        'The sections of the document. Click one to go there in the code and in the preview.':
            'Rozdziały dokumentu. Kliknij jeden, aby przejść do niego w kodzie i w podglądzie.',
        'No sections yet - add one with \\section{…}.': 'Brak rozdziałów - dodaj rozdział za pomocą \\section{…}.',
        'Open it here': 'Otwórz tutaj',
        'Drop the .tex file or picture here': 'Upuść tu plik .tex lub obraz',

        /* Problems above the code */
        'Hide': 'Ukryj',
        'Show': 'Pokaż',

        /* ---------- Insert tab ---------- */
        'Structure': 'Struktura',
        'Subsection': 'Podrozdział',
        'Subsubsection': 'Podpodrozdział',
        'Paragraph heading': 'Nagłówek akapitu',
        '• Bulleted list': '• Wypunktowanie',
        '1. Numbered list': '1. Numerowanie',
        'Description list': 'Lista opisowa',
        'Figure': 'Rysunek',
        'Two columns': 'Dwie kolumny',
        'Quote': 'Cytat',
        'Centered': 'Wyśrodkowane',
        'Program code': 'Kod programu',
        'Verbatim': 'Dosłownie',
        'Abstract': 'Streszczenie',
        'Contents': 'Spis treści',
        'Title': 'Tytuł',
        'New page': 'Nowa strona',
        'Vertical space': 'Odstęp pionowy',
        'Bibliography': 'Bibliografia',
        'Footnote': 'Przypis',
        'Reference': 'Odwołanie',
        'Colored text': 'Kolorowy tekst',
        'Colored box': 'Kolorowa ramka',
        'Citation': 'Cytowanie',
        'Push right': 'Do prawej',
        '$x$ in the text': '$x$ w tekście',
        'Displayed': 'Wyeksponowany',
        'Numbered equation': 'Równanie numerowane',
        'Aligned lines': 'Wyrównane wiersze',
        'Fraction': 'Ułamek',
        'Root': 'Pierwiastek',
        'x² Power': 'x² Potęga',
        'x₁ Index': 'x₁ Indeks',
        '∑ Sum': '∑ Suma',
        'lim Limit': 'lim Granica',
        'Cases': 'Przypadki',
        'Theorem': 'Twierdzenie',
        'Proof': 'Dowód',
        'Greek letters': 'Litery greckie',
        'Symbols': 'Symbole',
        'Pictures have their own tab:': 'Obrazy mają własną kartę:',

        /* ---------- Pictures tab ---------- */
        'Add pictures…': 'Dodaj obrazy…',
        'No pictures yet': 'Brak obrazów',
        'Missing in this document': 'Brak w tym dokumencie',
        'Add file…': 'Dodaj plik…',
        'Show where it is used': 'Pokaż, gdzie jest używany',
        '\\includegraphics at the cursor': '\\includegraphics w miejscu kursora',
        'A figure with caption and label at the cursor': 'Rysunek z podpisem i etykietą w miejscu kursora',
        'As figure': 'Jako rysunek',
        'Rename - the code is changed along': 'Zmień nazwę - kod zmieni się razem z nią',
        'Rename': 'Zmień nazwę',
        'Choose another file, keep the name': 'Wybierz inny plik, zachowaj nazwę',
        'Replace': 'Zastąp',
        'Download the picture': 'Pobierz obraz',
        'Download': 'Pobierz',
        'Remove the picture from this document': 'Usuń obraz z tego dokumentu',
        'Remove': 'Usuń',
        'New name': 'Nowa nazwa',
        'uses them.': 'ich używa.',

        /* ---------- Document tab ---------- */
        'Kind': 'Rodzaj',
        'Report (chapters)': 'Raport (rozdziały)',
        'Book': 'Książka',
        'Letter class': 'Klasa listu',
        'Font size': 'Rozmiar czcionki',
        'Paper': 'Papier',
        'Square 120 × 120 mm (1:1)': 'Kwadrat 120 × 120 mm (1:1)',
        'Portrait 4:5 (120 × 150 mm)': 'Pionowy 4:5 (120 × 150 mm)',
        'Slide 16:9 (160 × 90 mm)': 'Slajd 16:9 (160 × 90 mm)',
        'Other size': 'Inny rozmiar',
        'Margins': 'Marginesy',
        'As the class sets it': 'Jak ustala klasa',
        'Narrow (2 cm)': 'Wąskie (2 cm)',
        'Very narrow (1.5 cm)': 'Bardzo wąskie (1,5 cm)',
        'Wide (3.5 cm)': 'Szerokie (3,5 cm)',
        'None': 'Brak',
        'Other': 'Inne',
        'Orientation': 'Orientacja',
        'Portrait': 'Pionowa',
        'Landscape': 'Pozioma',
        'Font': 'Czcionka',
        'Latin Modern (the LaTeX font)': 'Latin Modern (czcionka LaTeX-a)',
        'Line spacing': 'Interlinia',
        'Single': 'Pojedyncza',
        '1½ lines': '1½ wiersza',
        'Double': 'Podwójna',
        'Language': 'Język',
        'English (no babel)': 'Angielski (bez babel)',
        'German (babel ngerman)': 'Niemiecki (babel ngerman)',
        'Other (babel)': 'Inny (babel)',
        'Space between paragraphs instead of indenting': 'Odstęp między akapitami zamiast wcięcia',
        'Page numbers': 'Numery stron',
        'Author': 'Autor',
        '(several: separate with \\and)': '(kilku: rozdziel przez \\and)',
        'Date': 'Data',
        '(\\today = the current date)': '(\\today = bieżąca data)',
        'Show the title (\\maketitle)': 'Pokaż tytuł (\\maketitle)',
        'Make it a complete document': 'Zrób z tego pełny dokument',
        'pages · about': 'str. · około',
        'page · about': 'str. · około',

        /* ---------- Export ---------- */
        'Close': 'Zamknij',
        'File name': 'Nazwa pliku',
        'PDF (print or save as PDF)': 'PDF (drukuj lub zapisz jako PDF)',
        'HTML page (one file)': 'Strona HTML (jeden plik)',
        'Plain text': 'Zwykły tekst',
        'Pictures of the pages': 'Obrazy stron',
        'LaTeX source (.tex)': 'Źródło LaTeX (.tex)',
        'LaTeX with pictures (ZIP)': 'LaTeX z obrazami (ZIP)',
        'Pages': 'Strony',
        'The page shown now': 'Strona widoczna teraz',
        'All pages (one picture each, as ZIP)': 'Wszystkie strony (każda jako obraz, w ZIP)',
        'Sharpness': 'Ostrość',
        '96 dpi (screen)': '96 dpi (ekran)',
        '300 dpi (print)': '300 dpi (druk)',
        'Result': 'Wynik',
        'Download everything at once: .tex, pictures, HTML, text and every page as PNG':
            'Pobierz wszystko naraz: .tex, obrazy, HTML, tekst i każdą stronę jako PNG',
        'All formats (ZIP)': 'Wszystkie formaty (ZIP)',
        'Print / Save as PDF': 'Drukuj / zapisz jako PDF',
        '(The HTML page - with fonts and pictures inside - is created when you download or copy it.)':
            '(Strona HTML - z czcionkami i obrazami w środku - powstaje przy pobieraniu lub kopiowaniu.)',

        /* ---------- My documents ---------- */
        'Search by name': 'Szukaj po nazwie',
        'Search your documents': 'Przeszukaj dokumenty',
        'Open a .tex file from your computer as a new document': 'Otwórz plik .tex z komputera jako nowy dokument',
        'New document': 'Nowy dokument',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Kliknij dokument, aby go otworzyć. Są przechowywane tylko w tej przeglądarce - nic nie jest wysyłane. Wyczyszczenie danych witryny w przeglądarce je usuwa, więc pobierz te, które chcesz zachować.',
        'Download every document as a .tex file (with its pictures) in one ZIP':
            'Pobierz każdy dokument jako plik .tex (z obrazami) w jednym ZIP',
        'Download all (ZIP)': 'Pobierz wszystkie (ZIP)',
        'Duplicate': 'Duplikuj',
        'Download as .tex': 'Pobierz jako .tex',
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
        'The document is now in the LaTeX Editor tab you already had open. Switch to that tab, or open it here.':
            'Dokument jest teraz w karcie Edytora LaTeX, którą masz już otwartą. Przejdź do tamtej karty albo otwórz go tutaj.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)':
            'Kopiowanie jest tu niedozwolone - tekst jest zaznaczony poniżej: naciśnij Ctrl+C (⌘C)',
        'Paste it into your AI and say what it should write.': 'Wklej go do swojej AI i opisz, co ma napisać.',
        'The preview is the editor\'s own typesetting and understands the commands most documents use. The preview does not display TikZ drawings or fontspec fonts. Your source remains unchanged; compile it with an engine supported by its packages. fontspec requires XeLaTeX or LuaLaTeX.':
            'Edytor sam składa podgląd i rozpoznaje polecenia używane w większości dokumentów. Podgląd nie wyświetla rysunków TikZ ani czcionek fontspec. Kod źródłowy pozostaje niezmieniony; skompiluj go silnikiem zgodnym z używanymi pakietami. fontspec wymaga XeLaTeX lub LuaLaTeX.',
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
        'A POST request with JSON (your server must allow CORS from https://latex.giit.ch):':
            'Żądanie POST z JSON (serwer musi zezwalać na CORS z https://latex.giit.ch):',
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
        'Save (download .tex, or to your server) / export': 'Zapisz (pobierz .tex lub zapisz na serwerze) / eksportuj',
        'Print / save as PDF': 'Drukuj / zapisz jako PDF',
        '+ mouse wheel,': '+ kółko myszy,',
        'Zoom the preview': 'Powiększanie podglądu',
        'Page Up': 'Page Up',
        'Page Down': 'Page Down',
        'Previous / next page (in the preview)': 'Poprzednia / następna strona (w podglądzie)',

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
        'The code changed meanwhile - the edit was not used': 'Kod zmienił się w międzyczasie - edycja nie została użyta',
        'The code changed - wait for the preview, then try again': 'Kod się zmienił - poczekaj na podgląd i spróbuj ponownie',
        'The picture is removed from this document. Places that use it show an empty frame. "Undo" does not bring it back.':
            'Obraz zostanie usunięty z tego dokumentu. Miejsca, które go używają, pokażą pustą ramkę. „Cofnij” go nie przywróci.',
        'Pictures can be PNG, JPG, GIF, WebP, SVG or PDF': 'Obrazy mogą być w formacie PNG, JPG, GIF, WebP, SVG lub PDF',
        'The picture is larger than 12 MB': 'Obraz jest większy niż 12 MB',
        'The picture could not be read': 'Nie udało się odczytać obrazu',
        'Change paperwidth and paperheight in the \\usepackage[…]{geometry} line':
            'Zmień paperwidth i paperheight w wierszu \\usepackage[…]{geometry}',
        'Title added': 'Dodano tytuł',
        'The text is now a complete document': 'Tekst jest teraz pełnym dokumentem',
        'The code is tidy already': 'Kod jest już uporządkowany',
        'Code tidied up': 'Kod uporządkowany',
        'This document is empty already': 'Ten dokument jest już pusty',
        'The text between \\begin{document} and \\end{document} is removed; the preamble (paper, packages, title) stays. "Undo" brings it back as long as the page is open.':
            'Tekst między \\begin{document} a \\end{document} zostanie usunięty; preambuła (papier, pakiety, tytuł) pozostaje. „Cofnij” przywraca go, dopóki strona jest otwarta.',
        'Everything is removed. "Undo" brings it back as long as the page is open.':
            'Wszystko zostanie usunięte. „Cofnij” przywraca to, dopóki strona jest otwarta.',
        'Start over': 'Zacznij od nowa',
        'The file is larger than 8 MB': 'Plik jest większy niż 8 MB',
        'LaTeX pasted from the clipboard - "Undo" brings the old text back':
            'Wklejono LaTeX ze schowka - „Cofnij” przywraca poprzedni tekst',
        'Downloaded': 'Pobrano',
        'Copied to the clipboard': 'Skopiowano do schowka',
        'This browser does not allow copying this': 'Ta przeglądarka nie pozwala tego skopiować',
        'Code copied': 'Kod skopiowany',
        '.tex with its pictures downloaded (ZIP)': 'Pobrano .tex z obrazami (ZIP)',
        '.tex downloaded': 'Pobrano .tex',
        'Add': 'Dodaj',
        'The document and its pictures are removed from this browser for good. Download it first if you want to keep a copy.':
            'Dokument i jego obrazy zostaną trwale usunięte z tej przeglądarki. Jeśli chcesz zachować kopię, najpierw go pobierz.',
        'This page could not be turned into a picture': 'Nie udało się zamienić tej strony w obraz',
        'The browser could not create this picture': 'Przeglądarka nie mogła utworzyć tego obrazu',

        /* ---------- Problems the preview finds (latex.js) ---------- */
        'Extra } - there is no { that it closes': 'Nadmiarowy } - nie ma {, który by zamykał',
        'Misplaced & - it only separates the columns of a table (tabular) or an align':
            'Źle umieszczony & - rozdziela tylko kolumny tabeli (tabular) lub align',
        'A lone # - write \\# for the character #': 'Samotny # - napisz \\#, aby uzyskać znak #',
        '$$ is never closed - add the closing $$': '$$ nie jest nigdzie zamknięty - dodaj zamykające $$',
        '$ is never closed - every $ that starts math needs a $ that ends it':
            '$ nie jest nigdzie zamknięty - każdy $ otwierający wzór potrzebuje $, który go zamyka',
        '\\( is never closed with \\)': '\\( nie jest nigdzie zamknięty przez \\)',
        '\\[ is never closed with \\]': '\\[ nie jest nigdzie zamknięty przez \\]',
        '\\maketitle without \\title{…} in the preamble': '\\maketitle bez \\title{…} w preambule',
        '\\item outside a list - put it in \\begin{itemize} … \\end{itemize}':
            '\\item poza listą - umieść go w \\begin{itemize} … \\end{itemize}',
        'BibTeX files cannot be read here - write the entries in \\begin{thebibliography}{9} … \\end{thebibliography}':
            'Plików BibTeX nie można tu odczytać - wpisz pozycje w \\begin{thebibliography}{9} … \\end{thebibliography}',
        'biblatex cannot run here - write the entries in \\begin{thebibliography}{9} … \\end{thebibliography}':
            'biblatex nie działa tutaj - wpisz pozycje w \\begin{thebibliography}{9} … \\end{thebibliography}',
        '\\verb needs a closing character on the same line, e.g. \\verb|text|':
            '\\verb potrzebuje znaku zamykającego w tym samym wierszu, np. \\verb|tekst|',
        '\\def is only understood in the form \\def\\name{…}': '\\def jest rozumiane tylko w postaci \\def\\nazwa{…}',
        '\\usepackage only works in the preamble (before \\begin{document})':
            '\\usepackage działa tylko w preambule (przed \\begin{document})',
        '\\documentclass belongs at the very top, before \\begin{document}':
            '\\documentclass należy na sam początek, przed \\begin{document}',
        'Beamer slides are shown as normal pages in the preview':
            'Slajdy Beamer są w podglądzie pokazywane jako zwykłe strony',
        'Text after \\end{document} is ignored': 'Tekst po \\end{document} jest pomijany',
        '\\begin{document} is never closed - add \\end{document} at the end':
            '\\begin{document} nie jest nigdzie zamknięty - dodaj \\end{document} na końcu',
        'There is no \\begin{document} - add \\begin{document} … \\end{document}':
            'Brak \\begin{document} - dodaj \\begin{document} … \\end{document}',

        /* ---------- The same in English and German, not in Polish ---------- */
        'Code': 'Kod',
        'Export': 'Eksport',
        'Name': 'Nazwa',
        'Text': 'Tekst',
        'Label': 'Etykieta',
        'Matrix': 'Macierz',
        '∫ Integral': '∫ Całka',
        'Normal (2.5 cm)': 'Normalne (2,5 cm)',
    },
    html: {
        '<b>Export</b> also has <b>Open in another editor</b>: it converts the document and opens it as a new document there. Anything the other format cannot hold is listed first.':
            '<b>Eksport</b> oferuje też <b>Otwórz w innym edytorze</b>: dokument zostaje przekonwertowany i otwarty tam jako nowy. To, czego drugi format nie może pomieścić, jest najpierw wymienione.',
        /* Export */
        'The print dialog opens with exactly the pages of the preview. Choose <b>Save as PDF</b> (or "Microsoft Print to PDF") as the printer. In Chrome and Edge, untick "Headers and footers" if the browser offers it. The text in the PDF stays sharp and can be selected.':
            'Okno drukowania otworzy się dokładnie ze stronami z podglądu. Jako drukarkę wybierz <b>Zapisz jako PDF</b> (lub „Microsoft Print to PDF”). W Chrome i Edge odznacz „Nagłówki i stopki”, jeśli przeglądarka to proponuje. Tekst w PDF pozostaje ostry i można go zaznaczać.',

        /* Document tab without a preamble */
        'This text has no preamble (no <code>\\documentclass</code> and <code>\\begin{document}</code>), so it is shown as a plain A4 article.':
            'Ten tekst nie ma preambuły (brak <code>\\documentclass</code> i <code>\\begin{document}</code>), więc jest pokazywany jako zwykły artykuł A4.',

        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Kliknij <b>Kopiuj prompt</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'AI odpowiada linkiem: kliknij go albo wklej całą odpowiedź poniżej. <b>Cofnij</b> to cofa.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'AI odpowiada linkiem: <b>wklej całą jej odpowiedź poniżej</b> (kliknięty link otwiera osobny edytor). <b>Cofnij</b> to cofa.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'Edytor może wysyłać każdą zapisaną wersję na twój własny serwer (<b>webhook</b>), dzięki czemu praca jest przechowywana tam, gdzie chcesz. Nic nie jest wysyłane, dopóki nie wpiszesz tu adresu.',
        'Also possible: <code>?src=&lt;URL of a .tex file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>latexeditor:ai</code>, <code>latexeditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Możliwe jest też: <code>?src=&lt;URL pliku .tex&gt;</code> otwiera plik, <code>&amp;webhook=&lt;URL&gt;</code> zapisuje tam ten dokument. Edytor może też otworzyć się we własnym oknie (<code>?embed=window</code>), a twoja strona może przekazać mu własny prompt dla AI i klucz sesji, aby AI wysłała wynik na twój serwer (<code>latexeditor:ai</code>, <code>latexeditor:key-request</code>) - zobacz „Edytor na własnej stronie” pod edytorem. Szczegóły są w <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> LaTeX on the left - or start with <b>New</b> and one of the templates. The preview on the right shows the typeset pages as you type.':
            '<b>Pisz</b> LaTeX po lewej - albo zacznij od <b>Nowy</b> i jednego z szablonów. Podgląd po prawej pokazuje złożone strony na bieżąco.',
        '<b>Click text in the preview</b> to edit it right there: the cursor is where you clicked, and the code\'s cursor goes to the same place. <b>Enter</b> starts a new paragraph; <b>Shift+Enter</b> inserts a line break. <b>Ctrl+Enter</b> (<b>Cmd+Enter</b> on macOS) or a click elsewhere applies the edit; <b>Escape</b> cancels. A click on math, a picture or text made by a command jumps to its place in the code instead. The place where the code cursor is gets a frame in the preview.':
            '<b>Kliknij tekst w podglądzie</b>, aby edytować go na miejscu: kursor jest tam, gdzie kliknięto, a kursor kodu przechodzi w to samo miejsce. <b>Enter</b> rozpoczyna nowy akapit; <b>Shift+Enter</b> wstawia podział wiersza. <b>Ctrl+Enter</b> (<b>Cmd+Enter</b> w macOS) lub kliknięcie gdzie indziej zatwierdza zmianę; <b>Escape</b> anuluje. Kliknięcie wzoru, obrazu lub tekstu utworzonego przez polecenie przenosi zamiast tego do jego miejsca w kodzie. Miejsce kursora w kodzie jest obramowane w podglądzie.',
        '<b>Document</b> on the right sets paper, font, margins and title; <b>Insert</b> has ready-made pieces (lists, tables, math, symbols); <b>Pictures</b> holds the pictures of the document; <b>Outline</b> lists the sections.':
            '<b>Dokument</b> po prawej ustawia papier, czcionkę, marginesy i tytuł; <b>Wstaw</b> ma gotowe elementy (listy, tabele, wzory, symbole); <b>Obrazy</b> zawiera obrazy dokumentu; <b>Konspekt</b> wymienia rozdziały.',
        'Problems in the code (a missing <code>}</code>, an unknown command) are listed above the code - click one to go there.':
            'Problemy w kodzie (brakujący <code>}</code>, nieznane polecenie) są wymienione nad kodem - kliknij jeden, aby tam przejść.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser.':
            '<b>Moje dokumenty</b> (przycisk folderu w lewym górnym rogu) wymienia wszystkie dokumenty przechowywane w tej przeglądarce.',
        '<b>Export</b> makes a PDF (via the print dialog), pictures of the pages, an HTML page or plain text. <b>Download .tex</b> saves the code.':
            '<b>Eksportuj</b> tworzy PDF (przez okno drukowania), obrazy stron, stronę HTML lub zwykły tekst. <b>Pobierz .tex</b> zapisuje kod.',
        'Math: <code>$…$</code> around the selection': 'Wzór: <code>$…$</code> wokół zaznaczenia',
        'Comment lines in or out (<code>%</code>)': 'Zakomentuj lub odkomentuj wiersze (<code>%</code>)',
        'Typing <code>\\begin{name}</code> and pressing <kbd>Enter</kbd> adds the matching <code>\\end{name}</code>. Brackets <code>{ [ (</code> and <code>$</code> close by themselves around a selection.':
            'Wpisanie <code>\\begin{name}</code> i naciśnięcie <kbd>Enter</kbd> dodaje pasujące <code>\\end{name}</code>. Nawiasy <code>{ [ (</code> i <code>$</code> zamykają się same wokół zaznaczenia.',

    },
    patterns: [
        /* ---------- Status lines ---------- */
        ['^(\\d+) lines · ([\\d.]+ K?B)(?: · (\\d+) (?:page|pages))?$',
            (m, l, kb, p) => `${l} ${getPlural(l, 'wiersz', 'wiersze', 'wierszy')} · ${formatSize(kb)}${p ? ` · ${p} ${getPlural(p, 'strona', 'strony', 'stron')}` : ''}`],
        ['^(\\d+) (?:page|pages)$', (m, k) => `${k} ${getPlural(k, 'strona', 'strony', 'stron')}`],
        ['^(\\d+) × (\\d+) pixels per page · (\\d+) (?:page|pages)$',
            (m, w, h, k) => `${w} × ${h} pikseli na stronę · ${k} ${getPlural(k, 'strona', 'strony', 'stron')}`],
        ['^\\.tex and (\\d+) (?:picture|pictures)$', (m, k) => `.tex i ${k} ${getPlural(k, 'obraz', 'obrazy', 'obrazów')}`],
        ['^([\\d,]+) bytes$', (m, b) => formatSize(m)],
        ['^words · (\\d+) × (\\d+) mm( · German)?$', (m, w, h, g) => `słów · ${w} × ${h} mm${g ? ' · niemiecki' : ''}`],
        ['^\\d{1,3}(?:,\\d{3})+$', m => formatThousands(m)],

        /* Problems above the code */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'błąd', 'błędy', 'błędów')}`],
        ['^· (\\d+) (?:note|notes)$', (m, k) => `· ${k} ${getPlural(k, 'uwaga', 'uwagi', 'uwag')}`],
        ['^(\\d+) (?:note|notes)$', (m, k) => `${k} ${getPlural(k, 'uwaga', 'uwagi', 'uwag')}`],
        ['^Line (\\d+)$', 'Wiersz $1'],
        ['^The preview failed: (.*)$', 'Nie udało się wyświetlić podglądu: $1'],
        ['^Unknown color "(.+)" - define it with \\\\definecolor\\{(.+)\\}\\{HTML\\}\\{RRGGBB\\}$',
            'Nieznany kolor „$1” - zdefiniuj go przez \\definecolor{$2}{HTML}{RRGGBB}'],
        ['^Image "(.+)" not found - drag the picture into the editor \\(or add it in the Pictures tab\\)$',
            'Nie znaleziono obrazu „$1” - przeciągnij obraz do edytora (lub dodaj go w karcie Obrazy)'],
        ['^(.) only works in math - write (\\$x.2\\$), or (\\\\\\S+) for the character$',
            '$1 działa tylko we wzorach - napisz $2 albo $3, aby uzyskać sam znak'],
        ['^(\\\\\\S+) needs an argument in \\{ \\}$', '$1 potrzebuje argumentu w { }'],
        ['^The \\{ after (\\\\\\S+) is never closed - a \\} is missing$', '{ po $1 nie jest nigdzie zamknięty - brakuje }'],
        ['^Math: (.*)$', 'Wzór: $1'],
        ['^The label "(.+)" is used twice$', 'Etykieta „$1” jest użyta dwukrotnie'],
        ['^Reference to "(.+)" which has no \\\\label\\{(.+)\\}$', 'Odwołanie do „$1”, dla którego nie ma \\label{$2}'],
        ['^Unknown command (\\\\\\S+) - the preview ignores it$', 'Nieznane polecenie $1 - podgląd je pomija'],
        ['^Unknown command (\\\\\\S+)$', 'Nieznane polecenie $1'],
        ['^(\\\\[)\\]]) without the opening (\\\\[(\\[])$', '$1 bez otwierającego $2'],
        ['^(\\\\\\S+) calls itself without end - the preview stops expanding it$',
        ['^The environment (\\S+) begins itself without end - the preview stops expanding it$', 'Środowisko $1 rozpoczyna samo siebie bez końca - podgląd przestaje je rozwijać'],
            '$1 wywołuje samo siebie bez końca - podgląd przestaje je rozwijać'],
        ['^(\\\\begin\\{.+\\}) is never closed - add (\\\\end\\{.+\\})$', '$1 nie jest nigdzie zamknięte - dodaj $2'],
        ['^Unknown environment (.+) - its content is shown as normal text$',
            'Nieznane środowisko $1 - jego zawartość jest pokazywana jako zwykły tekst'],
        ['^The (\\S+) has text but no \\\\item$', '$1 zawiera tekst, ale nie ma \\item'],
        ['^This table row has (\\d+) columns, but the table was set up for (\\d+) - add a column to (\\{.*\\}) or remove an &$',
            (m, a, b, c) => `Ten wiersz tabeli ma ${a} ${getPlural(a, 'kolumnę', 'kolumny', 'kolumn')}, a tabela jest ustawiona na ${b} - dodaj kolumnę w ${c} lub usuń jeden &`],
        ['^Unknown column type "(.+)" in the table setup$', 'Nieznany typ kolumny „$1” w ustawieniach tabeli'],
        ['^(\\\\end\\{.+\\}) without a matching (\\\\begin\\{.+\\})$', '$1 bez pasującego $2'],
        ['^\\\\definecolor: "(.+)" is not a valid (\\S+) color$', '\\definecolor: „$1” nie jest poprawnym kolorem $2'],
        ['^(\\\\cite\\{.*\\}): there is no (\\\\bibitem\\{.*\\})$', '$1: nie ma $2'],
        ['^(\\\\\\S+\\{.*\\}): other files cannot be read here - paste their text into this document$',
            '$1: innych plików nie można tu odczytać - wklej ich tekst do tego dokumentu'],
        ['^(.+) drawings cannot be shown in the preview - they appear when the file is compiled with LaTeX$',
            'Rysunków $1 nie można pokazać w podglądzie - pojawią się, gdy plik zostanie skompilowany LaTeX-em'],
        ['^(\\\\\\S+) needs a name, e\\.g\\. (.+)$', '$1 potrzebuje nazwy, np. $2'],
        ['^(\\\\\\S+) is defined twice - use \\\\renewcommand to change it$',
            '$1 jest zdefiniowane dwukrotnie - użyj \\renewcommand, aby je zmienić'],
        ['^Text before \\\\begin\\{document\\}: "(.*)" - text belongs between \\\\begin\\{document\\} and \\\\end\\{document\\}$',
            'Tekst przed \\begin{document}: „$1” - tekst należy umieścić między \\begin{document} a \\end{document}'],
        ['^The document class "(.+)" is shown like "article" in the preview$',
            'Klasa dokumentu „$1” jest w podglądzie pokazywana jak „article”'],
        ['^(\\S+) needs XeLaTeX or LuaLaTeX - the preview uses its own fonts$',
            '$1 wymaga XeLaTeX lub LuaLaTeX - podgląd używa własnych czcionek'],
        ['^(\\S+) drawings are not shown in the preview$', 'Rysunki $1 nie są pokazywane w podglądzie'],
        ['^The package "(.+)" is not known to the preview - its commands may be missing$',
            'Podgląd nie zna pakietu „$1” - może brakować jego poleceń'],
        ['^(\\\\\\S+) in the preamble is not understood by the preview$', 'Podgląd nie rozumie $1 w preambule'],

        /* ---------- Pictures tab ---------- */
        ['^(\\d+) (?:picture|pictures) · (.+)$', (m, k, s) => `${k} ${getPlural(k, 'obraz', 'obrazy', 'obrazów')} · ${formatSize(s)}`],
        ['^Pictures belong to “(.*)” and stay in your browser\\. Drop or paste them anywhere in the editor, or add them here;$',
            'Obrazy należą do „$1” i zostają w twojej przeglądarce. Upuść je lub wklej w dowolnym miejscu edytora albo dodaj je tutaj;'],
        ['^Choose the file for (.+)$', 'Wybierz plik dla $1'],
        ['^Insert \\\\includegraphics\\{(.+)\\} at the cursor$', 'Wstaw \\includegraphics{$1} w miejscu kursora'],
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
        ['^"(.+)" is not a \\.tex file$', '„$1” nie jest plikiem .tex'],
        ['^Opened "(.+)" - it is now in "My documents"$', 'Otwarto „$1” - jest teraz w „Moich dokumentach”'],
        ['^Opened "(.+)" with (\\d+) (?:picture|pictures)$',
            (m, f, k) => `Otwarto „${f}” z ${k} ${getPlural(k, 'obrazem', 'obrazami', 'obrazami')}`],
        ['^"(.+)" could not be opened: (.*)$', (m, f, why) => `Nie udało się otworzyć „${f}”: ${ZIP[why] || why}`],
        ['^ZIP downloaded: \\.tex, pictures, HTML, text and (\\d+) (?:page|pages) as PNG$',
            (m, k) => `Pobrano ZIP: .tex, obrazy, HTML, tekst i ${k} ${getPlural(k, 'strona', 'strony', 'stron')} jako PNG`],
        ['^Document received - the preview found (\\d+) (?:problem|problems), see above the code$',
            (m, k) => `Dokument otrzymany - podgląd znalazł ${k} ${getPlural(k, 'problem', 'problemy', 'problemów')}, sprawdź nad kodem`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '„$1” zmieniony przez AI - „Cofnij” to cofa'],
        ['^"(.+)" duplicated$', 'Zduplikowano „$1”'],
        ['^Delete "(.+)"\\?$', 'Usunąć „$1”?'],
        ['^"(.+)" deleted$', 'Usunięto „$1”'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Otwórz $1'],
    ],
};
