/* Polish texts of the Typst editor: the bar, the work area (code, pages,
   document settings, insert, pictures and files, outline), its dialogs and
   messages. What all editors share is in common.js; how the
   dictionaries are used is described in i18n.js. The compiler's own
   messages stay as Typst writes them (English); names of documents, files,
   labels and functions stay as they are: the patterns copy them into the
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

/* Reasons a ZIP could not be opened (app.js openZip) */
const ZIP = { 'it is not a ZIP file': 'to nie jest plik ZIP', 'there is no .typ file in it': 'nie ma w nim pliku .typ' };

export default {
    text: {
        "This document has no pages yet - fix the problems above the code first": "Ten dokument nie ma jeszcze stron - najpierw popraw problemy nad kodem",
        // Editing in place: Enter and Shift+Enter
        "Editing on the page - Enter: new paragraph, Shift+Enter: new line, Ctrl+Enter or a click elsewhere keeps it, Escape cancels": "Edycja na stronie - Enter: nowy akapit, Shift+Enter: nowy wiersz, Ctrl+Enter lub kliknięcie obok zatwierdza, Escape anuluje",
        "A new paragraph inside bold or emphasis is made in the code - Shift+Enter makes a new line": "Nowy akapit wewnątrz pogrubienia lub wyróżnienia tworzy się w kodzie - Shift+Enter tworzy nowy wiersz",
        /* ---------- Top bar ---------- */
        'Typst Editor - home': 'Edytor Typst - strona główna',
        'Typst Editor': 'Edytor Typst',
        'File': 'Plik',
        'My documents (Ctrl+O)': 'Moje dokumenty (Ctrl+O)',
        'My documents': 'Moje dokumenty',
        'New document, or start this one over': 'Nowy dokument albo rozpoczęcie tego od nowa',
        'New': 'Nowy',
        'New blank document': 'Nowy pusty dokument',
        'An empty A4 page - your other documents stay as they are':
            'Pusta strona A4 - pozostałe dokumenty zostają bez zmian',
        'Article': 'Artykuł',
        'Title, abstract and four sections': 'Tytuł, streszczenie i cztery rozdziały',
        'Letter': 'List',
        'Addresses, date, subject and signature': 'Adresy, data, temat i podpis',
        'Exercise sheet': 'Arkusz ćwiczeń',
        'Exercises with math, solutions and code': 'Ćwiczenia ze wzorami, rozwiązaniami i kodem',
        'Social media post': 'Post w mediach społecznościowych',
        'A square picture with colors and big type': 'Kwadratowy obraz z kolorami i dużą czcionką',
        'The welcome example': 'Przykład powitalny',
        'Shows what the editor can do': 'Pokazuje, co potrafi edytor',
        'Start this document over': 'Zacznij ten dokument od nowa',
        'Keeps the #set rules at the top, empties the text - "Undo" brings it back':
            'Zachowuje reguły #set na górze, opróżnia tekst - „Cofnij” go przywraca',
        'Open a .typ file (or a picture or data file) from your computer (you can also drag it into the window)':
            'Otwórz plik .typ (lub obraz albo plik danych) z komputera (można go też przeciągnąć do okna)',
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
        'Save the document as a .typ file (Ctrl+S)': 'Zapisz dokument jako plik .typ (Ctrl+S)',
        'Download .typ': 'Pobierz .typ',
        'PDF, pictures of the pages and more (Ctrl+E)': 'PDF, obrazy stron i więcej (Ctrl+E)',
        'Export…': 'Eksportuj…',

        /* ---------- Views and work area ---------- */
        'View': 'Widok',
        'Edit': 'Edycja',
        'Side panel': 'Panel boczny',
        'Show or hide the side panel': 'Pokaż lub ukryj panel boczny',
        'Examples': 'Przykłady',
        'Template': 'Szablon',
        'View of the preview': 'Widok podglądu',
        'The template with its placeholders as written': 'Szablon z symbolami zastępczymi w oryginalnej postaci',
        'Placeholders': 'Symbole zastępcze',
        'The placeholders of the template - a click on one puts its tag at the cursor': 'Symbole zastępcze szablonu - kliknięcie wstawia znacznik w miejscu kursora',
        'Shown': 'Pokazany',
        'Hidden': 'Ukryty',
        'example view': 'widok przykładów',
        'template view': 'widok szablonu',
        'The pages filled with the examples': "Strony wypełnione przykładami",
        'The examples could not be filled in - the pages show the template': "Nie udało się wstawić przykładów - strony pokazują szablon",
        'Preview': 'Podgląd',
        'Document': 'Dokument',
        'Typst code': 'Kod Typst',
        'Copy the Typst code to the clipboard': 'Skopiuj kod Typst do schowka',
        'Copy code': 'Kopiuj kod',
        'Copy': 'Kopiuj',
        'Drag to change the width of the code area': 'Przeciągnij, aby zmienić szerokość obszaru kodu',
        'Drag to change the width': 'Przeciągnij, aby zmienić szerokość',
        'Formatting': 'Formatowanie',
        'Bold: *text* (Ctrl+B)': 'Pogrubienie: *tekst* (Ctrl+B)',
        'Bold': 'Pogrubienie',
        'Italic: _text_ (Ctrl+I)': 'Kursywa: _tekst_ (Ctrl+I)',
        'Italic': 'Kursywa',
        'Underline (Ctrl+U)': 'Podkreślenie (Ctrl+U)',
        'Underline': 'Podkreślenie',
        'Code in the text: `text`': 'Kod w tekście: `tekst`',
        'Code in the text': 'Kod w tekście',
        'Heading': 'Nagłówek',
        'Bulleted list': 'Lista punktowana',
        'Numbered list': 'Lista numerowana',
        'Table': 'Tabela',
        'Picture': 'Obraz',
        'Math in the text (Ctrl+M)': 'Wzór w tekście (Ctrl+M)',
        'Math': 'Wzór',
        'Previous page (Page Up)': 'Poprzednia strona (Page Up)',
        'Previous page': 'Poprzednia strona',
        'Next page (Page Down)': 'Następna strona (Page Down)',
        'Next page': 'Następna strona',
        'Preview of the pages: click text to edit it or to jump to its place in the code':
            'Podgląd stron: kliknij tekst, aby go edytować lub przejść do jego miejsca w kodzie',
        'Zoom out (Ctrl + -)': 'Pomniejsz (Ctrl + -)',
        'Zoom out': 'Pomniejsz',
        'Show at actual size': 'Pokaż w rzeczywistym rozmiarze',
        'Zoom in (Ctrl + +)': 'Powiększ (Ctrl + +)',
        'Zoom in': 'Powiększ',
        'Fit the page width into the window': 'Dopasuj szerokość strony do okna',
        'Fit width': 'Do szerokości',
        'Show the whole page': 'Pokaż całą stronę',
        'Whole page': 'Cała strona',
        'Compiling…': 'Kompilowanie…',
        'Paper, font, margins and numbering of the document': 'Papier, czcionka, marginesy i numeracja dokumentu',
        'Ready-made pieces: structure, text, math, symbols': 'Gotowe elementy: struktura, tekst, wzory, symbole',
        'Insert': 'Wstaw',
        'The pictures and files of this document': 'Obrazy i pliki tego dokumentu',
        'Pictures': 'Obrazy',
        'The headings of the document': 'Nagłówki dokumentu',
        'Outline': 'Konspekt',
        'The headings of the document. Click one to go there in the code and on the pages.':
            'Nagłówki dokumentu. Kliknij jeden, aby przejść do niego w kodzie i na stronach.',
        'No headings yet - add one with = Heading.': 'Brak nagłówków - dodaj nagłówek za pomocą = Nagłówek.',
        'Open it here': 'Otwórz tutaj',
        'Drop the .typ file, picture or data file here': 'Upuść tu plik .typ, obraz lub plik danych',
        'Text on the page': 'Tekst na stronie',

        /* Problems above the code */
        'Hide': 'Ukryj',
        'Show': 'Pokaż',
        'Hint:': 'Wskazówka:',

        /* ---------- Insert tab ---------- */
        'Structure': 'Struktura',
        'Subheading': 'Podnagłówek',
        'Third level': 'Trzeci poziom',
        'Contents': 'Spis treści',
        '• Bulleted list': '• Wypunktowanie',
        '1. Numbered list': '1. Numerowanie',
        'Term list': 'Lista terminów',
        'Figure': 'Rysunek',
        'Two columns': 'Dwie kolumny',
        'Quote': 'Cytat',
        'Centered': 'Wyśrodkowane',
        'Program code': 'Kod programu',
        'Title': 'Tytuł',
        'New page': 'Nowa strona',
        'Vertical space': 'Odstęp pionowy',
        'Bibliography': 'Bibliografia',
        'A bibliography from a .bib file of the document (add it in the Pictures tab)':
            'Bibliografia z pliku .bib dokumentu (dodaj go w karcie Obrazy)',
        'Footnote': 'Przypis',
        'Reference': 'Odsyłacz',
        'Colored text': 'Kolorowy tekst',
        'Highlighted': 'Wyróżnione',
        'Colored box': 'Kolorowa ramka',
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
        '∫ Integral': '∫ Całka',
        'lim Limit': 'lim Granica',
        'Matrix': 'Macierz',
        'Cases': 'Przypadki',
        'Greek letters': 'Litery greckie',
        'Symbols': 'Symbole',
        'Pictures and files have their own tab:': 'Obrazy i pliki mają własną kartę:',

        /* ---------- Pictures tab ---------- */
        'Add pictures or files…': 'Dodaj obrazy lub pliki…',
        'No pictures or files yet': 'Brak obrazów i plików',
        'Pictures and files belong to “': 'Obrazy i pliki należą do „',
        '” and stay in your browser.': '” i zostają w twojej przeglądarce.',
        'Missing in this document': 'Brak w tym dokumencie',
        'Add file…': 'Dodaj plik…',
        'Insert it at the cursor': 'Wstaw w miejscu kursora',
        'Show where it is used': 'Pokaż, gdzie jest używany',
        'A figure with caption and label at the cursor': 'Rysunek z podpisem i etykietą w miejscu kursora',
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
        'Font': 'Czcionka',

        /* ---------- Document tab ---------- */
        'Paper': 'Papier',
        'Square 120 × 120 mm (1:1)': 'Kwadrat 120 × 120 mm (1:1)',
        'Portrait 4:5 (120 × 150 mm)': 'Pionowy 4:5 (120 × 150 mm)',
        'Story 9:16 (90 × 160 mm)': 'Relacja 9:16 (90 × 160 mm)',
        'Slide 16:9 (160 × 90 mm)': 'Slajd 16:9 (160 × 90 mm)',
        'Other size': 'Inny rozmiar',
        'Margins': 'Marginesy',
        'Typst default (about 2.5 cm)': 'Domyślne (ok. 2,5 cm)',
        'Normal (2.5 cm)': 'Normalne (2,5 cm)',
        'Narrow (2 cm)': 'Wąskie (2 cm)',
        'Very narrow (1.5 cm)': 'Bardzo wąskie (1,5 cm)',
        'Wide (3.5 cm)': 'Szerokie (3,5 cm)',
        'None': 'Brak',
        'Other': 'Inne',
        'Orientation': 'Orientacja',
        'Portrait': 'Pionowa',
        'Landscape': 'Pozioma',
        'Libertinus Serif (Typst default)': 'Libertinus Serif (domyślna Typst)',
        'New Computer Modern (like LaTeX)': 'New Computer Modern (jak w LaTeX-u)',
        'DejaVu Sans Mono (typewriter)': 'DejaVu Sans Mono (maszynowa)',
        'Font size': 'Rozmiar czcionki',
        '11 pt (default)': '11 pt (domyślnie)',
        'Language': 'Język',
        'English (default)': 'Angielski (domyślnie)',
        'German': 'Niemiecki',
        'German (Switzerland)': 'Niemiecki (Szwajcaria)',
        'French': 'Francuski',
        'Italian': 'Włoski',
        'Spanish': 'Hiszpański',
        'Line spacing': 'Interlinia',
        'Normal': 'Normalny',
        'More': 'Więcej',
        '1½ lines': '1½ wiersza',
        'Double': 'Podwójna',
        'Columns': 'Kolumny',
        'One': 'Jedna',
        'Two': 'Dwie',
        'Three': 'Trzy',
        'Justified text (both edges straight)': 'Tekst wyjustowany (obie krawędzie równe)',
        'Numbered headings (1., 1.1 …)': 'Numerowane nagłówki (1., 1.1 …)',
        'Page numbers': 'Numery stron',
        '(of the PDF; #title() shows it)': '(PDF-a; #title() go pokazuje)',
        'Author': 'Autor',
        'Show the title (#title())': 'Pokaż tytuł (#title())',
        'pages · about': 'str. · około',
        'page · about': 'str. · około',

        /* ---------- Export ---------- */
        'Close': 'Zamknij',
        'File name': 'Nazwa pliku',
        'PDF (from the Typst compiler)': 'PDF (z kompilatora Typst)',
        'Pictures of the pages': 'Obrazy stron',
        'SVG (vector)': 'SVG (wektorowy)',
        'Source': 'Źródło',
        'Typst source (.typ)': 'Źródło Typst (.typ)',
        'Typst with pictures and files (ZIP)': 'Typst z obrazami i plikami (ZIP)',
        'Pages': 'Strony',
        'The page shown now': 'Strona widoczna teraz',
        'All pages (one picture each, as ZIP)': 'Wszystkie strony (każda jako obraz, w ZIP)',
        'Sharpness': 'Ostrość',
        '96 dpi (screen)': '96 dpi (ekran)',
        '300 dpi (print)': '300 dpi (druk)',
        'Result': 'Wynik',
        'The PDF comes straight from the Typst compiler: the same pages as in the preview, with real text that can be selected and searched, links and the document\'s title.':
            'PDF pochodzi wprost z kompilatora Typst: te same strony co w podglądzie, z prawdziwym tekstem, który można zaznaczać i przeszukiwać, linkami i tytułem dokumentu.',
        'Download everything at once: .typ, pictures and files, PDF and every page as PNG and SVG':
            'Pobierz wszystko naraz: .typ, obrazy i pliki, PDF i każdą stronę jako PNG i SVG',
        'All formats (ZIP)': 'Wszystkie formaty (ZIP)',

        /* ---------- My documents ---------- */
        'Search by name': 'Szukaj po nazwie',
        'Search your documents': 'Przeszukaj dokumenty',
        'Open a .typ file from your computer as a new document': 'Otwórz plik .typ z komputera jako nowy dokument',
        'New document': 'Nowy dokument',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Kliknij dokument, aby go otworzyć. Są przechowywane tylko w tej przeglądarce - nic nie jest wysyłane. Wyczyszczenie danych witryny w przeglądarce je usuwa, więc pobierz te, które chcesz zachować.',
        'Download every document as a .typ file (with its pictures and files) in one ZIP':
            'Pobierz każdy dokument jako plik .typ (z obrazami i plikami) w jednym ZIP',
        'Download all (ZIP)': 'Pobierz wszystkie (ZIP)',
        'Duplicate': 'Duplikuj',
        'Download as .typ': 'Pobierz jako .typ',
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
        'The document is now in the Typst Editor tab you already had open. Switch to that tab, or open it here.':
            'Dokument jest teraz w karcie Edytora Typst, którą masz już otwartą. Przejdź do tamtej karty albo otwórz go tutaj.',
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
        'A POST request with JSON (your server must allow CORS from https://typst.giit.ch):':
            'Żądanie POST z JSON (serwer musi zezwalać na CORS z https://typst.giit.ch):',
        'https://example.com/api/typst': 'https://example.com/api/typst',
        'Embed the editor in your website': 'Osadź edytor na swojej stronie',
        'Send now': 'Wyślij teraz',
        'Save setting': 'Zapisz ustawienie',

        /* ---------- Help ---------- */
        'How it works': 'Jak to działa',
        'The compiler\'s errors and warnings are listed above the code with line, column and hint - click one to go there.':
            'Błędy i ostrzeżenia kompilatora są wymienione nad kodem z wierszem, kolumną i wskazówką - kliknij jeden, aby tam przejść.',
        'Keyboard shortcuts': 'Skróty klawiszowe',
        'Bold / italic / underline the selected text': 'Pogrub / pochyl / podkreśl zaznaczony tekst',
        'Show the cursor\'s place on the pages': 'Pokaż miejsce kursora na stronach',
        'Indent / outdent': 'Zwiększ / zmniejsz wcięcie',
        'Undo / redo': 'Cofnij / ponów',
        'Save (download .typ, or to your server) / export': 'Zapisz (pobierz .typ lub zapisz na serwerze) / eksportuj',
        'Print the pages': 'Drukuj strony',
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
        'The file is removed from this document. The code that uses it then reports a missing file. "Undo" does not bring it back.':
            'Plik zostanie usunięty z tego dokumentu. Kod, który go używa, zgłosi wtedy brakujący plik. „Cofnij” go nie przywróci.',
        'Pictures can be PNG, JPG, GIF, WebP, SVG or PDF; files CSV, JSON, YAML, TOML, XML, TXT, BIB, Typst or fonts':
            'Obrazy mogą być w formacie PNG, JPG, GIF, WebP, SVG lub PDF; pliki CSV, JSON, YAML, TOML, XML, TXT, BIB, Typst lub czcionki',
        'The file is larger than 12 MB': 'Plik jest większy niż 12 MB',
        'The picture could not be read': 'Nie udało się odczytać obrazu',
        'Change width and height in the #set page(…) line': 'Zmień width i height w wierszu #set page(…)',
        'Title added': 'Dodano tytuł',
        'This document is empty already': 'Ten dokument jest już pusty',
        'The text is removed; the settings at the top (#set, #show, #import, #let) stay. "Undo" brings it back as long as the page is open.':
            'Tekst zostanie usunięty; ustawienia na górze (#set, #show, #import, #let) pozostają. „Cofnij” przywraca go, dopóki strona jest otwarta.',
        'Everything is removed. "Undo" brings it back as long as the page is open.':
            'Wszystko zostanie usunięte. „Cofnij” przywraca to, dopóki strona jest otwarta.',
        'Start over': 'Zacznij od nowa',
        'The file is larger than 8 MB': 'Plik jest większy niż 8 MB',
        'Downloaded': 'Pobrano',
        'Copied to the clipboard': 'Skopiowano do schowka',
        'This browser does not allow copying this': 'Ta przeglądarka nie pozwala tego skopiować',
        'Code copied': 'Kod skopiowany',
        '.typ with its files downloaded (ZIP)': 'Pobrano .typ z plikami (ZIP)',
        '.typ downloaded': 'Pobrano .typ',
        'Add': 'Dodaj',
        'The document and its pictures are removed from this browser for good. Download it first if you want to keep a copy.':
            'Dokument i jego obrazy zostaną trwale usunięte z tej przeglądarki. Jeśli chcesz zachować kopię, najpierw go pobierz.',
        'The page could not be drawn': 'Nie udało się narysować strony',

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
        /* Pictures tab */
        'Drop or paste pictures anywhere in the editor, or add them here: <code>image("name")</code> shows a picture, <code>csv</code>, <code>json</code>, <code>read</code> or <code>bibliography</code> read data files, fonts (.otf, .ttf) work with <code>#set text(font: …)</code>.':
            'Upuść lub wklej obrazy w dowolnym miejscu edytora albo dodaj je tutaj: <code>image("name")</code> pokazuje obraz, <code>csv</code>, <code>json</code>, <code>read</code> lub <code>bibliography</code> czytają pliki danych, czcionki (.otf, .ttf) działają z <code>#set text(font: …)</code>.',

        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Kliknij <b>Kopiuj prompt</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'AI odpowiada linkiem: kliknij go albo wklej całą odpowiedź poniżej. <b>Cofnij</b> to cofa.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'AI odpowiada linkiem: <b>wklej całą jej odpowiedź poniżej</b> (kliknięty link otwiera osobny edytor). <b>Cofnij</b> to cofa.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'Edytor może wysyłać każdą zapisaną wersję na twój własny serwer (<b>webhook</b>), dzięki czemu praca jest przechowywana tam, gdzie chcesz. Nic nie jest wysyłane, dopóki nie wpiszesz tu adresu.',
        'Also possible: <code>?src=&lt;URL of a .typ file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>typsteditor:ai</code>, <code>typsteditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Możliwe jest też: <code>?src=&lt;URL pliku .typ&gt;</code> otwiera plik, <code>&amp;webhook=&lt;URL&gt;</code> zapisuje tam ten dokument. Edytor może też otworzyć się we własnym oknie (<code>?embed=window</code>), a twoja strona może przekazać mu własny prompt dla AI i klucz sesji, aby AI wysłała wynik na twój serwer (<code>typsteditor:ai</code>, <code>typsteditor:key-request</code>) - zobacz „Edytor na własnej stronie” pod edytorem. Szczegóły są w <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> Typst on the left - or start with <b>New</b> and one of the templates. The real Typst compiler runs in your browser and shows the pages as you type.':
            '<b>Pisz</b> Typst po lewej - albo zacznij od <b>Nowy</b> i jednego z szablonów. Prawdziwy kompilator Typst działa w przeglądarce i pokazuje strony na bieżąco.',
        '<b>Click text on the page</b> to edit it right there: a field opens with the cursor where you clicked, and the code\'s cursor goes to the same place. Enter starts a new paragraph; Shift+Enter inserts a line break. Ctrl+Enter (Cmd+Enter on macOS) or a click elsewhere applies the edit; Escape cancels. A click on math, a picture or text made by code jumps to its place in the code instead. The place where the code cursor is gets a frame on the page.':
            '<b>Kliknij tekst na stronie</b>, aby edytować go na miejscu: otwiera się pole z kursorem tam, gdzie kliknięto, a kursor kodu przechodzi w to samo miejsce. Enter rozpoczyna nowy akapit; Shift+Enter wstawia podział wiersza. Ctrl+Enter (Cmd+Enter w macOS) lub kliknięcie gdzie indziej zatwierdza zmianę; Escape ją anuluje. Kliknięcie wzoru, obrazu lub tekstu utworzonego przez kod przenosi zamiast tego do jego miejsca w kodzie. Miejsce kursora w kodzie jest obramowane na stronie.',
        '<b>Document</b> on the right sets paper, font, margins and numbering (it edits the <code>#set</code> rules); <b>Insert</b> has ready-made pieces (lists, tables, math, symbols); <b>Pictures</b> holds the pictures and data files of the document; <b>Outline</b> lists the headings.':
            '<b>Dokument</b> po prawej ustawia papier, czcionkę, marginesy i numerację (zmienia reguły <code>#set</code>); <b>Wstaw</b> ma gotowe elementy (listy, tabele, wzory, symbole); <b>Obrazy</b> zawiera obrazy i pliki danych dokumentu; <b>Konspekt</b> wymienia nagłówki.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser.':
            '<b>Moje dokumenty</b> (przycisk folderu w lewym górnym rogu) wymienia wszystkie dokumenty przechowywane w tej przeglądarce.',
        '<b>Export</b> makes a PDF (from the Typst compiler, with real text) and pictures of the pages (PNG, JPG, WebP, SVG). <b>Download .typ</b> saves the code.':
            '<b>Eksportuj</b> tworzy PDF (z kompilatora Typst, z prawdziwym tekstem) i obrazy stron (PNG, JPG, WebP, SVG). <b>Pobierz .typ</b> zapisuje kod.',
        'Packages from Typst Universe (<code>#import "@preview/…"</code>) are not downloaded - nothing is loaded from other servers. Fonts: Libertinus Serif, New Computer Modern, DejaVu Sans Mono and the fonts you add to a document.':
            'Pakiety z Typst Universe (<code>#import "@preview/…"</code>) nie są pobierane - nic nie jest ładowane z innych serwerów. Czcionki: Libertinus Serif, New Computer Modern, DejaVu Sans Mono oraz czcionki dodane do dokumentu.',
        'Math: <code>$…$</code> around the selection': 'Wzór: <code>$…$</code> wokół zaznaczenia',
        'Comment lines in or out (<code>//</code>)': 'Zakomentuj lub odkomentuj wiersze (<code>//</code>)',
        'Enter in a list continues it (<code>-</code>, <code>+</code>, <code>1.</code>); Enter on an empty item ends it. Brackets, <code>$</code>, <code>*</code> and <code>_</code> go around a selection.':
            'Enter na liście ją kontynuuje (<code>-</code>, <code>+</code>, <code>1.</code>); Enter na pustym punkcie ją kończy. Nawiasy, <code>$</code>, <code>*</code> i <code>_</code> obejmują zaznaczenie.',

    },
    patterns: [
        /* ---------- Status lines ---------- */
        ['^(\\d+) lines · ([\\d.]+ K?B)(?: · (\\d+) (?:page|pages))?$',
            (m, l, kb, p) => `${l} ${getPlural(l, 'wiersz', 'wiersze', 'wierszy')} · ${formatSize(kb)}${p ? ` · ${p} ${getPlural(p, 'strona', 'strony', 'stron')}` : ''}`],
        ['^(\\d+) (?:page|pages)$', (m, k) => `${k} ${getPlural(k, 'strona', 'strony', 'stron')}`],
        ['^(\\d+) × (\\d+) pixels per page · (\\d+) (?:page|pages)$',
            (m, w, h, k) => `${w} × ${h} pikseli na stronę · ${k} ${getPlural(k, 'strona', 'strony', 'stron')}`],
        ['^(\\d+) (?:page|pages) as SVG \\(sharp at any size\\)$',
            (m, k) => `${k} ${getPlural(k, 'strona', 'strony', 'stron')} jako SVG (ostrość w każdym rozmiarze)`],
        ['^\\.typ and (\\d+) (?:file|files)$', (m, k) => `.typ i ${k} ${getPlural(k, 'plik', 'pliki', 'plików')}`],
        ['^([\\d,]+) bytes$', (m, b) => formatSize(m)],
        ['^words · (\\d+) × (\\d+) mm(?: · compiled in (\\d+) ms)?$',
            (m, w, h, ms) => `słów · ${w} × ${h} mm${ms ? ` · skompilowano w ${ms} ms` : ''}`],
        ['^\\d{1,3}(?:,\\d{3})+$', m => formatThousands(m)],

        /* Problems above the code */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'błąd', 'błędy', 'błędów')}`],
        ['^· (\\d+) (?:warning|warnings)$', (m, k) => `· ${k} ${getPlural(k, 'ostrzeżenie', 'ostrzeżenia', 'ostrzeżeń')}`],
        ['^(\\d+) (?:warning|warnings)$', (m, k) => `${k} ${getPlural(k, 'ostrzeżenie', 'ostrzeżenia', 'ostrzeżeń')}`],
        ['^Line (\\d+), column (\\d+)$', 'Wiersz $1, kolumna $2'],

        /* ---------- Pictures tab ---------- */
        ['^(\\d+) (?:file|files) · (.+)$', (m, k, s) => `${k} ${getPlural(k, 'plik', 'pliki', 'plików')} · ${formatSize(s)}`],
        ['^Choose the file for (.+)$', 'Wybierz plik dla $1'],
        ['^used (\\d+)×$', 'użyty $1×'],
        ['^(.* · )?not used yet$', (m, a) => `${a || ''}jeszcze nieużywany`],
        ['^(.* · )?a font of the document$', (m, a) => `${a || ''}czcionka dokumentu`],

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
        ['^"(.+)" now has the new file$', '„$1” ma teraz nowy plik'],
        ['^"(.+)" added to "(.+)"$', '„$1” dodany do „$2”'],
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
        ['^ZIP downloaded: \\.typ, files, PDF and (\\d+) (?:page|pages) as PNG and SVG$',
            (m, k) => `Pobrano ZIP: .typ, pliki, PDF i ${k} ${getPlural(k, 'strona', 'strony', 'stron')} jako PNG i SVG`],
        ['^Document received - the compiler found (\\d+) (?:problem|problems), see above the code$',
            (m, k) => `Dokument otrzymany - kompilator znalazł ${k} ${getPlural(k, 'problem', 'problemy', 'problemów')}, sprawdź nad kodem`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '„$1” zmieniony przez AI - „Cofnij” to cofa'],
        ['^"(.+)" duplicated$', 'Zduplikowano „$1”'],
        ['^Delete "(.+)"\\?$', 'Usunąć „$1”?'],
        ['^"(.+)" deleted$', 'Usunięto „$1”'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Otwórz $1'],
        /* ---------- Template placeholders (?template=) ---------- */
        ['^Write the placeholder in code as a string: "(.+)"$', 'Zapisz symbol zastępczy w kodzie jako ciąg znaków: "$1"'],
    ],
};
