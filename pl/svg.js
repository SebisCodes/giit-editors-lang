/* Polish texts of the SVG editor: the bar, the canvas and its tools, the
   properties and layers, the dialogs (export, my drawings, AI, server, help),
   the color picker and the messages. What all editors share is in
   common.js; how the dictionaries are used is described in i18n.js.
   Names of drawings and elements are kept as they are and shown in „…”. */

import { getPlural } from './format.js';

/* Names of the element types (LABELS in app.js). */
const LABEL = {
    'Drawing': 'Rysunek', 'Rectangle': 'Prostokąt', 'Circle': 'Koło', 'Ellipse': 'Elipsa', 'Line': 'Linia',
    'Polyline': 'Łamana', 'Polygon': 'Wielokąt', 'Path': 'Ścieżka', 'Text': 'Tekst', 'Group': 'Grupa', 'Image': 'Obraz',
    'Reused element': 'Użyty ponownie element', 'Nested SVG': 'Zagnieżdżony SVG', 'Link': 'Link',
    'Embedded content': 'Osadzona zawartość', 'Definitions': 'Definicje', 'Linear gradient': 'Gradient liniowy',
    'Radial gradient': 'Gradient radialny', 'Gradient stop': 'Punkt gradientu', 'Clip path': 'Ścieżka przycinania',
    'Mask': 'Maska', 'Pattern': 'Wzór', 'Symbol': 'Symbol', 'Style sheet': 'Arkusz stylów', 'Title': 'Tytuł',
    'Description': 'Opis', 'Filter': 'Filtr', 'Marker': 'Znacznik', 'Switch': 'Przełącznik', 'Metadata': 'Metadane',
    'Script': 'Skrypt',
};
/**
 * Translates the text the pattern found (lab in the English pattern).
 * @param {string} n - the English text the pattern found.
 * @returns {string} the text in the language.
 */
const translateLabel = n => LABEL[n] || n;
/* An element type in English, or a tag name the editor has no name for. */
const TYPE = `((?:${Object.keys(LABEL).join('|')}|[a-z][\\w:.-]*))`;
const TYPE_ANY = TYPE.slice(1, -1);       // the same without capturing it

/* The line at the bottom left of the canvas (HINTS and TOUCH_HINTS in app.js). */
const HINT = {
    'Click a shape to select it. Drag an empty spot to move the view.': 'Kliknij kształt, aby go zaznaczyć. Przeciągnij puste miejsce, aby przesunąć widok.',
    'Drag the shape to move it, or a small square to resize it. Delete key removes it.': 'Przeciągnij kształt, aby go przesunąć, lub mały kwadrat, aby zmienić jego rozmiar. Klawisz Delete go usuwa.',
    'Drag to move the view. Use the mouse wheel to zoom.': 'Przeciągnij, aby przesunąć widok. Kółkiem myszy powiększasz.',
    'Drag to draw a rectangle. Hold Shift for a square.': 'Przeciągnij, aby narysować prostokąt. Z Shift powstaje kwadrat.',
    'Drag to draw an ellipse. Hold Shift for a circle.': 'Przeciągnij, aby narysować elipsę. Z Shift powstaje koło.',
    'Drag to draw a line. Hold Shift for straight angles.': 'Przeciągnij, aby narysować linię. Z Shift pod prostymi kątami.',
    'Hold the mouse button down and draw.': 'Przytrzymaj przycisk myszy i rysuj.',
    'Click where the text should start.': 'Kliknij tam, gdzie ma się zaczynać tekst.',
    'Tap a shape to select it. Swipe to scroll.': 'Dotknij kształtu, aby go zaznaczyć. Przesuń palcem, aby przewijać.',
    'Drag it to move, drag a square to resize.': 'Przeciągnij, aby przesunąć, przeciągnij kwadrat, aby zmienić rozmiar.',
    'Drag to move the view, pinch to zoom.': 'Przeciągnij, aby przesunąć widok, zsuwaj lub rozsuwaj palce, aby zmienić skalę.',
    'Drag to draw a rectangle.': 'Przeciągnij, aby narysować prostokąt.',
    'Drag to draw an ellipse.': 'Przeciągnij, aby narysować elipsę.',
    'Drag to draw a line.': 'Przeciągnij, aby narysować linię.',
    'Draw with your finger.': 'Rysuj palcem.',
    'Tap where the text should start.': 'Dotknij tam, gdzie ma się zaczynać tekst.',
};

/* The editor's own messages about the code (parse() in export.js); the browser's messages stay as they are. */
const CODE_ERROR = {
    'The outermost element must be <svg>.': 'Najbardziej zewnętrznym elementem musi być <svg>.',
    'The <svg> element is missing xmlns="http://www.w3.org/2000/svg".': 'Elementowi <svg> brakuje xmlns="http://www.w3.org/2000/svg".',
};

/* Polish plural: getPlural(5, 'rysunek', 'rysunki', 'rysunków') -> 'rysunków' (1 / 2-4, 22-24 … but not 12-14 / the rest) */

/* "1,234 bytes" -> "1 234 bajty" (no-break space as thousands separator) */
/**
 * Translates a size in bytes ("1,234 bytes").
 * @param {string} s - the English size text.
 * @returns {string} the text in the language.
 */
const formatBytes = s => s.replace(/^([\d,]+) bytes$/, (m, b) => `${b.replace(/,/g, ' ')} ${getPlural(b, 'bajt', 'bajty', 'bajtów')}`);
const MONTH = { Jan: 'sty', Feb: 'lut', Mar: 'mar', Apr: 'kwi', May: 'maj', Jun: 'cze', Jul: 'lip', Aug: 'sie', Sep: 'wrz', Oct: 'paź', Nov: 'lis', Dec: 'gru' };
/**
 * Translates the text the pattern found (drawings in the English pattern).
 * @param {string} k - the English text the pattern found.
 * @returns {string} the text in the language.
 */
const translateDrawings = k => getPlural(k, 'rysunek', 'rysunki', 'rysunków');
/* "1.5 KB" -> "1,5 KB" */
/**
 * Translates a size with its unit ("1.5 KB").
 * @param {string} s - the English size text.
 * @returns {string} the text in the language.
 */
const formatSizeUnit = s => s.replace(/^([\d.]+) (B|KB|MB|GB)$/, (x, v, u) => `${v.replace('.', ',')} ${u}`);

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
        'View of the drawing': 'Widok rysunku',
        'The drawing filled with the examples': 'Rysunek wypełniony przykładami',
        'The examples could not be filled in - the canvas shows the template': 'Nie udało się wstawić przykładów - płótno pokazuje szablon',
        'This text shows an example - edit it in the code or in the template view': 'Ten tekst pokazuje przykład - edytuj go w kodzie lub w widoku szablonu',
        ...LABEL,
        ...HINT,
        ...CODE_ERROR,

        // Top bar
        'SVG Editor': 'Edytor SVG',
        'SVG Editor - home': 'Edytor SVG - strona główna',
        'File': 'Plik',
        'My drawings': 'Moje rysunki',
        'My drawings (Ctrl+O)': 'Moje rysunki (Ctrl+O)',
        'New drawing, or start this one over': 'Nowy rysunek albo rozpoczęcie tego od nowa',
        'New': 'Nowy',
        'New blank drawing': 'Nowy pusty rysunek',
        'Your other drawings stay as they are': 'Pozostałe rysunki zostają bez zmian',
        'New from the example': 'Nowy z przykładu',
        'A copy of the editor logo to try things out': 'Kopia logo edytora do wypróbowania',
        'Start this drawing over': 'Zacznij ten rysunek od nowa',
        'Empties it but keeps its size - "Undo" brings it back':
            'Opróżnia go, ale zachowuje rozmiar - „Cofnij” go przywraca',
        'Open an SVG file from your computer as a new drawing (you can also drag a file into the window)':
            'Otwórz plik SVG z komputera jako nowy rysunek (plik można też przeciągnąć do okna)',
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
        'Let any AI draw in this editor': 'Pozwól dowolnej AI rysować w tym edytorze',
        'AI Assistant': 'Asystent AI',
        'Save to your own server and embed the editor in your website':
            'Zapisuj na własnym serwerze i osadź edytor na swojej stronie',
        'Save to server': 'Zapis na serwerze',
        'How it works and keyboard shortcuts (?)': 'Jak to działa i skróty klawiszowe (?)',
        'Help': 'Pomoc',
        'Save the drawing as an .svg file (Ctrl+S)': 'Zapisz rysunek jako plik .svg (Ctrl+S)',
        'Download SVG': 'Pobierz SVG',
        'Save as PNG, JPG, WebP, data URI, React and more (Ctrl+E)':
            'Zapisz jako PNG, JPG, WebP, data URI, React i więcej (Ctrl+E)',
        'Export…': 'Eksportuj…',

        // View tabs and the code
        'View': 'Widok',
        'Edit': 'Edycja',
        'Side panel': 'Panel boczny',
        'Canvas': 'Płótno',
        'Properties': 'Właściwości',
        'SVG code': 'Kod SVG',
        'Copy the SVG code to the clipboard': 'Skopiuj kod SVG do schowka',
        'Copy code': 'Kopiuj kod',
        'Copy': 'Kopiuj',
        'Indent and arrange the code neatly': 'Uporządkuj kod i wcięcia',
        'Tidy up': 'Uporządkuj',
        'Remove comments and spaces to make the file smaller': 'Usuń komentarze i spacje, aby zmniejszyć plik',
        'Shrink': 'Zmniejsz',
        'Drag to change the width of the code area': 'Przeciągnij, aby zmienić szerokość obszaru kodu',
        'Drag to change the width': 'Przeciągnij, aby zmienić szerokość',
        'Error in the code.': 'Błąd w kodzie.',
        'The preview shows the last working version.': 'Podgląd pokazuje ostatnią działającą wersję.',
        'The preview shows the last working version': 'Podgląd pokazuje ostatnią działającą wersję',
        'Add xmlns': 'Dodaj xmlns',

        // Tools, grid, view
        'Tools': 'Narzędzia',
        'Select and move shapes (V)': 'Zaznaczaj i przesuwaj kształty (V)',
        'Select': 'Zaznacz',
        'Move the view (H, or hold the space bar)': 'Przesuń widok (H lub przytrzymaj spację)',
        'Move the view': 'Przesuń widok',
        'Draw a rectangle (R)': 'Narysuj prostokąt (R)',
        'Draw an ellipse or circle (E)': 'Narysuj elipsę lub koło (E)',
        'Draw a line (L)': 'Narysuj linię (L)',
        'Draw freehand (P)': 'Rysuj odręcznie (P)',
        'Freehand': 'Odręcznie',
        'Add text (T)': 'Dodaj tekst (T)',
        'Show the grid and snap shapes to it (#)': 'Pokaż siatkę i przyciągaj do niej kształty (#)',
        'Grid': 'Siatka',
        'Distance between grid lines, in the drawing\'s units': 'Odstęp między liniami siatki, w jednostkach rysunku',
        'Spacing': 'Odstęp',
        'Shapes jump onto the grid lines when moved or drawn (G)':
            'Kształty przeskakują na linie siatki przy przesuwaniu lub rysowaniu (G)',
        'Snap': 'Przyciąganie',
        'Canvas: click shapes, drag them, resize them with the handles':
            'Płótno: klikaj kształty, przeciągaj je, zmieniaj ich rozmiar uchwytami',
        'Background of the preview': 'Tło podglądu',
        'Background behind the drawing (only for viewing, not saved in the file)':
            'Tło za rysunkiem (tylko do oglądania, niezapisywane w pliku)',
        'Checkered background': 'Tło w kratkę',
        'White background': 'Białe tło',
        'Dark background': 'Ciemne tło',
        'No background': 'Bez tła',
        'Zoom out (-)': 'Pomniejsz (-)',
        'Zoom out': 'Pomniejsz',
        'Show at actual size (1)': 'Pokaż w rzeczywistym rozmiarze (1)',
        'Zoom in (+)': 'Powiększ (+)',
        'Zoom in': 'Powiększ',
        'Fit the drawing into the window (0)': 'Dopasuj rysunek do okna (0)',
        'Fit to window': 'Dopasuj do okna',
        'Fix the error in the code to edit the shapes again.': 'Popraw błąd w kodzie, aby znów edytować kształty.',

        // Properties
        'Colors, size and position of the selected shape': 'Kolory, rozmiar i położenie zaznaczonego kształtu',
        'All elements of the drawing as a list': 'Wszystkie elementy rysunku jako lista',
        'Layers': 'Warstwy',
        'The code contains an error. Once it is fixed, the shapes can be edited here again.':
            'Kod zawiera błąd. Po jego poprawieniu kształty znów będzie można tu edytować.',
        'No valid SVG loaded.': 'Nie załadowano poprawnego SVG.',
        'Position in the document': 'Położenie w dokumencie',
        'Document': 'Dokument',
        'Width': 'Szerokość',
        'Height': 'Wysokość',
        'x y width height': 'x y szerokość wysokość',
        'Click a shape on the canvas or in the Layers list to edit it. Alt+click selects the surrounding group.':
            'Kliknij kształt na płótnie lub na liście Warstwy, aby go edytować. Alt+kliknięcie zaznacza otaczającą grupę.',
        'Colors for new shapes': 'Kolory nowych kształtów',
        'Fill': 'Wypełnienie',
        'Outline': 'Kontur',
        'Outline width': 'Grubość konturu',
        'None': 'Brak',
        'Fill color of new shapes': 'Kolor wypełnienia nowych kształtów',
        'Outline color of new shapes': 'Kolor konturu nowych kształtów',
        'Outline width of new shapes': 'Grubość konturu nowych kształtów',
        'Fill color · new shapes': 'Kolor wypełnienia · nowe kształty',
        'Outline color · new shapes': 'Kolor konturu · nowe kształty',
        'Pick the fill color': 'Wybierz kolor wypełnienia',
        'Pick the outline color': 'Wybierz kolor konturu',
        'Fill color': 'Kolor wypełnienia',
        'Outline color': 'Kolor konturu',
        'Fill color as text': 'Kolor wypełnienia jako tekst',
        'Outline color as text': 'Kolor konturu jako tekst',
        'Color as text, e.g. #ff0000, red or none': 'Kolor jako tekst, np. #ff0000, red lub none',
        'No fill': 'Bez wypełnienia',
        'No outline': 'Bez konturu',
        'Uses a gradient or pattern - picking a color replaces it.':
            'Używa gradientu lub wzoru - wybranie koloru go zastąpi.',
        'Opacity': 'Krycie',
        'Overall opacity': 'Krycie całości',
        'Line style': 'Styl linii',
        'solid': 'ciągła',
        'dashed': 'kreskowana',
        'dotted': 'kropkowana',
        'dash-dot': 'kreska-kropka',
        'Line ends': 'Końce linii',
        'default': 'domyślne',
        'flat': 'płaskie',
        'round': 'zaokrąglone',
        'square': 'kwadratowe',
        'Corners': 'Narożniki',
        'sharp': 'ostre',
        'beveled': 'ścięte',
        'This text contains further elements (e.g. tspan) - please edit it in the code.':
            'Ten tekst zawiera dodatkowe elementy (np. tspan) - edytuj go w kodzie.',
        'Size': 'Rozmiar',
        'Weight': 'Grubość',
        'light': 'cienka',
        'normal': 'normalna',
        'semi-bold': 'półgruba',
        'bold': 'gruba',
        'black': 'bardzo gruba',
        'Font': 'Czcionka',
        'Alignment': 'Wyrównanie',
        'left': 'do lewej',
        'center': 'do środka',
        'right': 'do prawej',
        'Position and size': 'Położenie i rozmiar',
        'Left edge': 'Lewa krawędź',
        'Top edge': 'Górna krawędź',
        'W': 'S',
        'Rotate 15° to the left': 'Obróć o 15° w lewo',
        'Rotate 15° to the right': 'Obróć o 15° w prawo',
        '⟲ Rotate left': '⟲ Obróć w lewo',
        '⟳ Rotate right': '⟳ Obróć w prawo',
        'Mirror left to right': 'Odbij z lewej na prawą',
        'Mirror top to bottom': 'Odbij z góry na dół',
        '⇆ Flip horizontal': '⇆ Odbij poziomo',
        '⇅ Flip vertical': '⇅ Odbij pionowo',
        'Arrange': 'Kolejność',
        'Shapes further down in the code are drawn on top.': 'Kształty niżej w kodzie są rysowane na wierzchu.',
        'One step forward (Ctrl+↑)': 'O krok do przodu (Ctrl+↑)',
        'One step backward (Ctrl+↓)': 'O krok do tyłu (Ctrl+↓)',
        'Bring to front (Ctrl+Shift+↑)': 'Na sam przód (Ctrl+Shift+↑)',
        'Send to back (Ctrl+Shift+↓)': 'Na sam tył (Ctrl+Shift+↓)',
        '↑ Forward': '↑ Do przodu',
        '↓ Backward': '↓ Do tyłu',
        '⤒ To front': '⤒ Na przód',
        '⤓ To back': '⤓ Na tył',
        'Make a copy (Ctrl+D)': 'Utwórz kopię (Ctrl+D)',
        'Remove this shape (Delete key)': 'Usuń ten kształt (klawisz Delete)',
        '⧉ Duplicate': '⧉ Duplikuj',
        '✕ Delete': '✕ Usuń',
        'All attributes (advanced)': 'Wszystkie atrybuty (zaawansowane)',
        'Remove attribute': 'Usuń atrybut',
        'Value': 'Wartość',
        'New attribute: name': 'Nowy atrybut: nazwa',
        'New attribute: value': 'Nowy atrybut: wartość',
        'Add attribute': 'Dodaj atrybut',
        'Invalid attribute name': 'Nieprawidłowa nazwa atrybutu',
        'The attribute could not be set': 'Nie udało się ustawić atrybutu',

        // Layers
        'Every element of the drawing. Shapes higher in the list are drawn on top. Click to select, drag to reorder (drop onto a group to put it inside), double-click to rename. The eye hides a shape.':
            'Każdy element rysunku. Kształty wyżej na liście są rysowane na wierzchu. Kliknij, aby zaznaczyć, przeciągnij, aby zmienić kolejność (upuść na grupę, aby umieścić w niej kształt), kliknij dwukrotnie, aby zmienić nazwę. Oko ukrywa kształt.',
        'Show': 'Pokaż',
        'Hide': 'Ukryj',
        'One step forward': 'O krok do przodu',
        'One step backward': 'O krok do tyłu',
        'Duplicate': 'Duplikuj',
        'Delete': 'Usuń',
        'Name (id)': 'Nazwa (id)',
        'Name of the element (id)': 'Nazwa elementu (id)',
        'A group cannot be moved into itself': 'Grupy nie można przenieść do niej samej',
        'This element cannot hold other shapes': 'Ten element nie może zawierać innych kształtów',
        'Use letters, digits, - and _ only, starting with a letter': 'Używaj tylko liter, cyfr, - i _, zaczynając od litery',

        // Messages
        'The browser storage is full': 'Pamięć przeglądarki jest pełna',
        'The browser storage is full - download and delete drawings under "My drawings"':
            'Pamięć przeglądarki jest pełna - pobierz i usuń rysunki w „Moich rysunkach”',
        'The browser storage is full - delete or download drawings under "My drawings" first':
            'Pamięć przeglądarki jest pełna - najpierw usuń lub pobierz rysunki w „Moich rysunkach”',
        'The browser storage is full - delete or download some drawings first':
            'Pamięć przeglądarki jest pełna - najpierw usuń lub pobierz kilka rysunków',
        'Nothing to undo': 'Nie ma czego cofnąć',
        'Nothing to redo': 'Nie ma czego ponowić',
        'Please fix the error in the code first': 'Najpierw popraw błąd w kodzie',
        'Deleted - Undo brings it back': 'Usunięto - Cofnij przywraca',
        'Already at the front': 'Już jest na samym przodzie',
        'Already at the back': 'Już jest na samym tyle',
        'Grid on - shapes snap to the grid': 'Siatka włączona - kształty przyciągają się do siatki',
        'Grid off': 'Siatka wyłączona',
        'Snap to grid: on': 'Przyciąganie do siatki: włączone',
        'Snap to grid: off - shapes move freely': 'Przyciąganie do siatki: wyłączone - kształty poruszają się swobodnie',
        'Code tidied up': 'Kod uporządkowany',
        'This drawing is empty already': 'Ten rysunek jest już pusty',
        'Everything in this drawing is removed; its size stays. "Undo" brings it back as long as the page is open.':
            'Wszystko w tym rysunku zostanie usunięte; jego rozmiar pozostaje. „Cofnij” przywraca to, dopóki strona jest otwarta.',
        'Start over': 'Zacznij od nowa',
        'Please choose an SVG file': 'Wybierz plik SVG',
        'The file is larger than 8 MB': 'Plik jest większy niż 8 MB',
        'SVG pasted from the clipboard': 'Wklejono SVG ze schowka',
        'Downloaded': 'Pobrano',
        'Copied to the clipboard': 'Skopiowano do schowka',
        'This browser does not allow copying images': 'Ta przeglądarka nie pozwala kopiować obrazów',
        'Code copied': 'Kod skopiowany',
        'SVG downloaded': 'Pobrano SVG',
        'The image came out empty.': 'Obraz wyszedł pusty.',
        'The drawing could not be rendered as an image.': 'Nie udało się zamienić rysunku w obraz.',
        'Add': 'Dodaj',
        'Replace': 'Zastąp',
        'The drawing has no closing </svg> - the new shapes could not be added':
            'Rysunek nie ma zamykającego </svg> - nie udało się dodać nowych kształtów',
        'Drawing received - it has an error, see the code': 'Rysunek otrzymany - zawiera błąd, zobacz kod',
        'Drop the SVG file here': 'Upuść tu plik SVG',

        // A link from the AI opened in a tab of its own (ai.js)
        'Open it here': 'Otwórz tutaj',
        'The link could not be read': 'Nie udało się odczytać linku',
        'The drawing in this link is incomplete or damaged. If the AI\'s link was split over several lines (as in a terminal), copy the whole answer and paste it into the editor with Ctrl+V - the editor joins the lines.':
            'Rysunek w tym linku jest niekompletny lub uszkodzony. Jeśli link od AI został podzielony na kilka wierszy (jak w terminalu), skopiuj całą odpowiedź i wklej ją do edytora przez Ctrl+V - edytor połączy wiersze.',
        'Loading…': 'Wczytywanie…',
        'Taken over by your editor': 'Przekazano do edytora',
        'The drawing is now in the SVG Editor tab you already had open. Switch to that tab, or open it here.':
            'Rysunek jest teraz w karcie Edytora SVG, którą masz już otwartą. Przejdź do tamtej karty albo otwórz go tutaj.',

        // Dialogs: shared
        'Close': 'Zamknij',

        // Export
        'Export': 'Eksport',
        'File name': 'Nazwa pliku',
        'Vector (sharp at any size)': 'Wektor (ostry w każdym rozmiarze)',
        'SVG as in the editor': 'SVG jak w edytorze',
        'SVG tidied up': 'SVG uporządkowany',
        'SVG shrunk (smallest file)': 'SVG zmniejszony (najmniejszy plik)',
        'Picture': 'Obraz',
        'PNG (transparent background)': 'PNG (przezroczyste tło)',
        'Code for websites': 'Kod dla stron internetowych',
        'Data URI': 'Data URI',
        'Base64 data URI': 'Data URI w Base64',
        'CSS background-image': 'CSS background-image',
        'HTML <img> tag': 'Znacznik HTML <img>',
        'React component (JSX)': 'Komponent React (JSX)',
        '1× (actual size)': '1× (rzeczywisty rozmiar)',
        'custom': 'własny',
        'Width (px)': 'Szerokość (px)',
        'Height (px)': 'Wysokość (px)',
        'Background': 'Tło',
        'Background color': 'Kolor tła',
        'Background color · exported image': 'Kolor tła · eksportowany obraz',
        'Width and height stay in proportion. JPG has no transparency, so it always gets a background.':
            'Szerokość i wysokość zachowują proporcje. JPG nie ma przezroczystości, więc zawsze dostaje tło.',
        'Result': 'Wynik',
        'Download every format at once: SVG (3 variants), PNG, JPG, WebP, React, data URI, Base64, CSS and HTML':
            'Pobierz wszystkie formaty naraz: SVG (3 warianty), PNG, JPG, WebP, React, data URI, Base64, CSS i HTML',
        'All formats (ZIP)': 'Wszystkie formaty (ZIP)',
        'Download': 'Pobierz',

        // My drawings
        'Search by name': 'Szukaj po nazwie',
        'Search your drawings': 'Przeszukaj rysunki',
        'Open an SVG file from your computer as a new drawing': 'Otwórz plik SVG z komputera jako nowy rysunek',
        'New drawing': 'Nowy rysunek',
        'Click a drawing to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Kliknij rysunek, aby go otworzyć. Są przechowywane tylko w tej przeglądarce - nic nie jest wysyłane. Wyczyszczenie danych witryny w przeglądarce je usuwa, więc pobierz te, które chcesz zachować.',
        'Download every drawing as an .svg file in one ZIP': 'Pobierz każdy rysunek jako plik .svg w jednym ZIP',
        'Download all (ZIP)': 'Pobierz wszystkie (ZIP)',
        'No drawings yet.': 'Brak rysunków.',
        'Rename': 'Zmień nazwę',
        'Download as .svg': 'Pobierz jako .svg',
        'This drawing is open': 'Ten rysunek jest otwarty',
        'Click to open this drawing': 'Kliknij, aby otworzyć ten rysunek',
        'New name': 'Nowa nazwa',
        'The drawing is removed from this browser for good. Download it first if you want to keep a copy.':
            'Rysunek zostanie trwale usunięty z tej przeglądarki. Jeśli chcesz zachować kopię, najpierw go pobierz.',

        // AI assistant
        'Any AI can draw with you - ChatGPT, Claude, Gemini, Copilot.':
            'Każda AI może rysować razem z tobą - ChatGPT, Claude, Gemini, Copilot.',
        'Connected AI': 'Połączona AI',
        'Paste it into your AI and say what it should draw.': 'Wklej go do swojej AI i napisz, co ma narysować.',
        // The step after "Copy prompt" inside another website (ai.js rewrites it): its parts
        'The AI answers with a link:': 'AI odpowiada linkiem:',
        'paste its whole answer below': 'wklej całą jej odpowiedź poniżej',
        '(a clicked link opens a separate editor).': '(kliknięty link otwiera osobny edytor).',
        'takes it back.': 'cofa to.',
        'The AI answers with a link: click it, or paste the whole answer below.':
            'AI odpowiada linkiem: kliknij go albo wklej całą odpowiedź poniżej.',
        'Connected to': 'Połączono z',
        'the AI sends its result there, and it opens here.': 'AI wysyła tam swój wynik, który otwiera się tutaj.',
        '(no key yet)': '(jeszcze bez klucza)',
        '(key valid while the editor is open)': '(klucz ważny, dopóki edytor jest otwarty)',
        'What': 'Co',
        'tells the AI': 'przekazuje AI',
        'The AI should': 'AI ma',
        'Change “': 'Zmienić „',
        '”': '”',
        'Make a new drawing': 'Utworzyć nowy rysunek',
        'The AI\'s answer (or press Ctrl+V anywhere):': 'Odpowiedź AI (lub naciśnij Ctrl+V w dowolnym miejscu):',
        'The drawing travels in the link after the “#”, which no server sees. What you paste into your AI is handled by its provider.':
            'Rysunek podróżuje w linku po znaku „#”, którego nie widzi żaden serwer. Treści wklejane do AI są przetwarzane przez jej dostawcę.',
        'The prompt - copy it with Ctrl+C': 'Prompt - skopiuj go przez Ctrl+C',
        'Copy prompt': 'Kopiuj prompt',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)':
            'Kopiowanie jest tu niedozwolone - tekst jest zaznaczony poniżej: naciśnij Ctrl+C (⌘C)',
        'Prompt copied - paste it into your AI and say what it should draw':
            'Prompt skopiowany - wklej go do swojej AI i napisz, co ma narysować',
        'This link is incomplete or damaged - please ask the AI to send it again':
            'Ten link jest niekompletny lub uszkodzony - poproś AI, aby wysłała go ponownie',

        // Save to your server
        'Save to your server': 'Zapis na twoim serwerze',
        'Webhook address': 'Adres webhooka',
        'Send automatically a few seconds after each change (otherwise only when you click':
            'Wysyłaj automatycznie kilka sekund po każdej zmianie (w przeciwnym razie tylko po kliknięciu',
        'or press Ctrl+S)': 'lub Ctrl+S)',
        'Only for “': 'Tylko dla „',
        '” (other drawings use the general address)': '” (inne rysunki używają adresu ogólnego)',
        'What your server receives': 'Co otrzymuje twój serwer',
        'A POST request with JSON (your server must allow CORS from https://svg.giit.ch):':
            'Żądanie POST z JSON (serwer musi zezwalać na CORS z https://svg.giit.ch):',
        'Embed the editor in your website': 'Osadź edytor na swojej stronie',
        'Send now': 'Wyślij teraz',
        'Save setting': 'Zapisz ustawienie',

        // Help
        'How it works': 'Jak to działa',
        'Keyboard shortcuts': 'Skróty klawiszowe',
        'Select and move': 'Zaznaczanie i przesuwanie',
        'Rectangle, ellipse, line, freehand, text': 'Prostokąt, elipsa, linia, odręcznie, tekst',
        'Zoom': 'Powiększenie',
        'Drag with the mouse wheel pressed': 'Przeciągnij z wciśniętym kółkiem myszy',
        'Double-click the mouse wheel': 'Kliknij dwukrotnie kółkiem myszy',
        'Fit to window / actual size': 'Dopasuj do okna / rzeczywisty rozmiar',
        'Grid on/off / snap on/off': 'Siatka wł./wył. / przyciąganie wł./wył.',
        'Arrow keys': 'Strzałki',
        'Only horizontal/vertical, keep proportions': 'Tylko poziomo/pionowo, zachowaj proporcje',
        'Select the surrounding group': 'Zaznacz otaczającą grupę',
        'Remove the selection': 'Usuń zaznaczenie',
        'Undo / redo': 'Cofnij / ponów',
        'Download SVG (or save to your server) / export': 'Pobierz SVG (lub zapisz na serwerze) / eksportuj',
        'Deselect': 'Odznacz',

        // Color picker (colorpicker.js)
        'Color': 'Kolor',
        'Saturation and brightness (arrow keys)': 'Nasycenie i jasność (strzałki)',
        'Hue': 'Odcień',
        'Before - click to go back': 'Przedtem - kliknij, aby wrócić',
        'New color': 'Nowy kolor',
        'Color as hex code, e.g. #ff0000': 'Kolor jako kod szesnastkowy, np. #ff0000',
        'Done': 'Gotowe',
        'Colors in this drawing': 'Kolory w tym rysunku',
        'Basic colors': 'Kolory podstawowe',

        /* ---------- The same in English and German, not in Polish ---------- */
        'Code': 'Kod',
        'Name': 'Nazwa',
        'Label': 'Etykieta',
        /* ---------- Template placeholders (?template=) ---------- */
        'The drawing holds placeholders - its code stays as written': 'Rysunek zawiera symbole zastępcze - jego kod pozostaje bez zmian',
        'The style holds placeholders - edit it in the code': 'Styl zawiera symbole zastępcze - edytuj go w kodzie',
    },
    html: {
        // AI assistant
        'Click <b>Copy prompt</b>.': 'Kliknij <b>Kopiuj prompt</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'AI odpowiada linkiem: kliknij go albo wklej całą odpowiedź poniżej. <b>Cofnij</b> to cofa.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'AI odpowiada linkiem: <b>wklej całą jej odpowiedź poniżej</b> (kliknięty link otwiera osobny edytor). <b>Cofnij</b> to cofa.',

        // Save to your server
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your drawings are kept where you want them. Nothing is sent until you enter an address here.':
            'Edytor może wysyłać każdą zapisaną wersję na twój własny serwer (<b>webhook</b>), dzięki czemu rysunki są przechowywane tam, gdzie chcesz. Nic nie jest wysyłane, dopóki nie wpiszesz tu adresu.',
        'Token <small>(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)</small>':
            'Token <small>(opcjonalny, wysyłany jako „Authorization: Bearer …”; przechowywany do zamknięcia tej karty)</small>',
        'Also possible: <code>?src=&lt;URL of an .svg file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this drawing there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>svgeditor:ai</code>, <code>svgeditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Możliwe jest też: <code>?src=&lt;URL pliku .svg&gt;</code> otwiera plik, <code>&amp;webhook=&lt;URL&gt;</code> zapisuje tam ten rysunek. Edytor może też otworzyć się we własnym oknie (<code>?embed=window</code>), a twoja strona może przekazać mu własny prompt dla AI i klucz sesji, aby AI wysłała wynik na twój serwer (<code>svgeditor:ai</code>, <code>svgeditor:key-request</code>) - zobacz „Edytor na własnej stronie” pod edytorem. Szczegóły są w <a href="/llms.txt">llms.txt</a>.',

        // Help
        '<b>Open</b> an SVG file, drag it into the window or paste SVG code - or start with <b>New</b>.':
            '<b>Otwórz</b> plik SVG, przeciągnij go do okna lub wklej kod SVG - albo zacznij od <b>Nowy</b>.',
        '<b>My drawings</b> (the folder button at the top left) lists every drawing kept in this browser: open, rename, duplicate, download or delete them.':
            '<b>Moje rysunki</b> (przycisk folderu w lewym górnym rogu) wymienia wszystkie rysunki przechowywane w tej przeglądarce: otwieraj je, zmieniaj ich nazwy, duplikuj, pobieraj lub usuwaj.',
        '<b>Click a shape</b> on the canvas. Drag it to move it, drag the small squares to resize it. Colors, size and position are under <b>Properties</b> on the right.':
            '<b>Kliknij kształt</b> na płótnie. Przeciągnij go, aby go przesunąć, przeciągnij małe kwadraty, aby zmienić jego rozmiar. Kolory, rozmiar i położenie są w <b>Właściwościach</b> po prawej.',
        '<b>Draw</b> new shapes with the tools above the canvas.': '<b>Rysuj</b> nowe kształty narzędziami nad płótnem.',
        'The <b>code</b> on the left always shows the current drawing and can be edited directly.':
            '<b>Kod</b> po lewej zawsze pokazuje bieżący rysunek i można go edytować bezpośrednio.',
        '<b>Download SVG</b> saves the file, <b>Export</b> offers pictures (PNG, JPG) and code for websites.':
            '<b>Pobierz SVG</b> zapisuje plik, <b>Eksportuj</b> oferuje obrazy (PNG, JPG) i kod dla stron internetowych.',
        'Made a mistake? <b>Undo</b> takes back every step. Your drawings are kept in this browser, even after closing the page.':
            'Pomyłka? <b>Cofnij</b> wycofuje każdy krok. Rysunki są przechowywane w tej przeglądarce, także po zamknięciu strony.',
        '<kbd>H</kbd> / hold <kbd>Space</kbd>': '<kbd>H</kbd> / przytrzymaj <kbd>Space</kbd>',
        'Mouse wheel, <kbd>+</kbd> <kbd>-</kbd>': 'Kółko myszy, <kbd>+</kbd> <kbd>-</kbd>',
        'Move the selection by 1, with <kbd>Shift</kbd> by 10': 'Przesuń zaznaczenie o 1, z <kbd>Shift</kbd> o 10',
        '<kbd>Shift</kbd> while dragging': '<kbd>Shift</kbd> podczas przeciągania',
        '<kbd>Alt</kbd> + click': '<kbd>Alt</kbd> + kliknięcie',
        '<kbd>Delete</kbd>': '<kbd>Delete</kbd>',
        'Forward / backward (with <kbd>Shift</kbd>: to front / to back)':
            'Do przodu / do tyłu (z <kbd>Shift</kbd>: na sam przód / na sam tył)',
        'In the code: <kbd>Tab</kbd> indents, <kbd>Shift</kbd>+<kbd>Tab</kbd> outdents, clicking into a tag selects that shape on the canvas.':
            'W kodzie: <kbd>Tab</kbd> zwiększa wcięcie, <kbd>Shift</kbd>+<kbd>Tab</kbd> je zmniejsza, kliknięcie w znacznik zaznacza ten kształt na płótnie.',
    },
    patterns: [
        // Canvas hint with the grid
        ['^(.*?) ?Snapping to a ([\\d.]+) grid\\.$',
            (m, h, k) => `${h ? (HINT[h] || h) + ' ' : ''}Przyciąga do siatki (${k}).`],
        ['^(.*?) ?Snap: ([\\d.]+)\\.$', (m, h, k) => `${h ? (HINT[h] || h) + ' ' : ''}Przyciąganie: ${k}.`],

        // Code
        ['^(\\d+) lines · (.+)$', (m, k, s) => `${k} ${getPlural(k, 'wiersz', 'wiersze', 'wierszy')} · ${formatBytes(s)}`],
        ['^Line (\\d+), column (\\d+):$', (m, l, c) => `Wiersz ${l}, kolumna ${c}:`],
        ['^Line (\\d+):$', (m, l) => `Wiersz ${l}:`],
        ['^Line (\\d+), column (\\d+): (.*)$', (m, l, c, t) => `Wiersz ${l}, kolumna ${c}: ${CODE_ERROR[t] || t}`],
        ['^Line (\\d+): (.*)$', (m, l, t) => `Wiersz ${l}: ${CODE_ERROR[t] || t}`],
        ['^File shrunk: (\\d+) → (\\d+) bytes$',
            (m, a, b) => `Plik zmniejszony: ${a} → ${b} ${getPlural(b, 'bajt', 'bajty', 'bajtów')}`],
        [`^(Fill|Outline) color · (whole drawing|${TYPE_ANY})( #.+)?$`,
            (m, w, t, id) =>
            `${w === 'Fill' ? 'Kolor wypełnienia' : 'Kolor konturu'} · ${t === 'whole drawing' ? 'cały rysunek' : translateLabel(t)}${id || ''}`],

        // Properties
        ['^(.+) \\(inherited\\)$', '$1 (dziedziczone)'],
        ['^Remove ([A-Za-z_:][\\w:.-]*)$', 'Usuń $1'],

        // Layers
        ['^<([^>]+)> - click to select, double-click to rename, drag to reorder$',
            '<$1> - kliknij, aby zaznaczyć, kliknij dwukrotnie, aby zmienić nazwę, przeciągnij, aby zmienić kolejność'],
        ['^<([^>]+)> - click to select$', '<$1> - kliknij, aby zaznaczyć'],
        [`^Show ${TYPE}$`, (m, t) => `Pokaż: ${translateLabel(t)}`],
        [`^Hide ${TYPE}$`, (m, t) => `Ukryj: ${translateLabel(t)}`],
        [`^Move ${TYPE} forward$`, (m, t) => `${translateLabel(t)}: o krok do przodu`],
        [`^Move ${TYPE} backward$`, (m, t) => `${translateLabel(t)}: o krok do tyłu`],
        [`^Duplicate ${TYPE}$`, (m, t) => `Duplikuj: ${translateLabel(t)}`],
        [`^Delete ${TYPE}$`, (m, t) => `Usuń: ${translateLabel(t)}`],
        ['^The name “(.+)” is already used$', 'Nazwa „$1” jest już zajęta'],

        // The open drawing
        ['^"(.+)" is open\\. My drawings: open, rename, duplicate or delete your drawings \\(Ctrl\\+O\\)$',
            '„$1” jest otwarty. Moje rysunki: otwieraj, zmieniaj nazwy, duplikuj lub usuwaj swoje rysunki (Ctrl+O)'],
        ['^Start "(.+)" over\\?$', 'Zacząć „$1” od nowa?'],
        ['^Start "(.+)" over$', 'Zacznij „$1” od nowa'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '„$1” jest teraz pusty - „Cofnij” go przywraca'],
        ['^Opened "(.+)" - it is now in "My drawings"$', 'Otwarto „$1” - jest teraz w „Moich rysunkach”'],
        ['^New drawing "(.+)" from the AI - your other drawings are unchanged$',
            'Nowy rysunek „$1” od AI - pozostałe rysunki są bez zmian'],
        ['^New drawing "(.+)" - your other drawings are under "My drawings"$',
            'Nowy rysunek „$1” - pozostałe rysunki są w „Moich rysunkach”'],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '„$1” zmieniony przez AI - „Cofnij” to cofa'],
        ['^"(.+)" opened$', 'Otwarto „$1”'],

        // Export
        ['^(\\d+) × (\\d+) pixels$', '$1 × $2 pikseli'],
        ['^([\\d,]+) bytes$', m => formatBytes(m)],
        ['^ZIP with 11 files downloaded \\(pictures (\\d+) × (\\d+) px\\)$', 'Pobrano ZIP z 11 plikami (obrazy $1 × $2 px)'],

        // My drawings
        ['^(\\d+) (?:drawing|drawings) · (.+) in this browser$',
            (m, k, s) => `${k} ${translateDrawings(k)} · ${formatBytes(s)} w tej przeglądarce`],
        ['^Open now · (.+)$', (m, s) => `Otwarty teraz · ${formatBytes(s)}`],
        ['^just now · (.+)$', (m, s) => `przed chwilą · ${formatBytes(s)}`],
        ['^(\\d+) min ago · (.+)$', (m, k, s) => `${k} min temu · ${formatBytes(s)}`],
        ['^(\\d+) h ago · (.+)$', (m, k, s) => `${k} godz. temu · ${formatBytes(s)}`],
        ['^yesterday · (.+)$', (m, s) => `wczoraj · ${formatBytes(s)}`],
        ['^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\\d{1,2}), (\\d{4}) · (.+)$',
            (m, mo, d, y, s) => `${d} ${MONTH[mo]} ${y} · ${formatBytes(s)}`],
        ['^(.+) \\(open now\\)$', '$1 (otwarty teraz)'],
        ['^Open (.+)$', 'Otwórz $1'],
        ['^No drawing named "(.*)"\\.$', 'Brak rysunku o nazwie „$1”.'],
        ['^Delete "(.+)"\\?$', 'Usunąć „$1”?'],
        ['^"(.+)" duplicated$', 'Zduplikowano „$1”'],
        ['^"(.+)" deleted$', 'Usunięto „$1”'],
        ['^ZIP with (\\d+) (?:drawing|drawings) downloaded$',
            (m, k) => `Pobrano ZIP z ${k} ${getPlural(k, 'rysunkiem', 'rysunkami', 'rysunkami')}`],

        // AI
        ['^Part (\\d+) of (\\d+) received$', 'Otrzymano część $1 z $2'],
        ['^Open the other (link|links) from the AI too \\(still missing: part (.+)\\)\\.$',
            (m, l, p) => `Otwórz też ${l === 'link' ? 'drugi link' : 'pozostałe linki'} od AI (wciąż brakuje części: ${p}).`],
        ['^Part (\\d+) of (\\d+) received - paste the other (link|links) too \\(missing: (.+)\\)$',
            (m, a, b, l, p) => `Otrzymano część ${a} z ${b} - wklej też ${l === 'link' ? 'drugi link' : 'pozostałe linki'} (brakuje: ${p})`],
        ['^The AI sends the drawing to (.+) with a key that only works for this session\\. What you paste into your AI is handled by its provider\\.$',
            'AI wysyła rysunek do $1 z kluczem, który działa tylko w tej sesji. Treści wklejane do AI są przetwarzane przez jej dostawcę.'],
        ['^The AI sends its result to (.+) by itself, and it opens here\\. If it answers with a link, paste its answer below\\.$',
            'AI sama wysyła swój wynik do $1, a wynik otwiera się tutaj. Jeśli odpowie linkiem, wklej jej odpowiedź poniżej.'],
        ['^No key from (.+) - the prompt asks the AI for a link instead$',
            'Brak klucza od $1 - prompt prosi AI zamiast tego o link'],
        ['^Prompt copied - the AI sends its result to (.+)$', 'Prompt skopiowany - AI wyśle swój wynik do $1'],
    ],
};
