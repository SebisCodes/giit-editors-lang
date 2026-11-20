/* Dutch texts of the SVG editor: the bar, the canvas and its tools, the
   properties and layers, the dialogs (export, my drawings, AI, server, help),
   the color picker and the messages. What all editors share is in
   common.js; how the dictionaries are used is described in i18n.js.
   Names of drawings and elements are kept as they are and shown in "…". */

/* Names of the element types (LABELS in app.js). */
const LABEL = {
    'Drawing': 'Tekening', 'Rectangle': 'Rechthoek', 'Circle': 'Cirkel', 'Ellipse': 'Ellips', 'Line': 'Lijn',
    'Polyline': 'Polylijn', 'Polygon': 'Veelhoek', 'Path': 'Pad', 'Text': 'Tekst', 'Group': 'Groep', 'Image': 'Afbeelding',
    'Reused element': 'Hergebruikt element', 'Nested SVG': 'Genest SVG', 'Link': 'Link',
    'Embedded content': 'Ingesloten inhoud', 'Definitions': 'Definities', 'Linear gradient': 'Lineair verloop',
    'Radial gradient': 'Radiaal verloop', 'Gradient stop': 'Verlooppunt', 'Clip path': 'Uitknippad',
    'Mask': 'Masker', 'Pattern': 'Patroon', 'Symbol': 'Symbool', 'Style sheet': 'Stylesheet', 'Title': 'Titel',
    'Description': 'Beschrijving', 'Filter': 'Filter', 'Marker': 'Markering', 'Switch': 'Switch', 'Metadata': 'Metagegevens',
    'Script': 'Script',
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
    'Click a shape to select it. Drag an empty spot to move the view.': 'Klik op een vorm om hem te selecteren. Sleep op een lege plek om de weergave te verschuiven.',
    'Drag the shape to move it, or a small square to resize it. Delete key removes it.': 'Sleep de vorm om hem te verplaatsen, of een klein vierkantje om de grootte te wijzigen. De Delete-toets verwijdert hem.',
    'Drag to move the view. Use the mouse wheel to zoom.': 'Sleep om de weergave te verschuiven. Zoom met het muiswiel.',
    'Drag to draw a rectangle. Hold Shift for a square.': 'Sleep om een rechthoek te tekenen. Houd Shift ingedrukt voor een vierkant.',
    'Drag to draw an ellipse. Hold Shift for a circle.': 'Sleep om een ellips te tekenen. Houd Shift ingedrukt voor een cirkel.',
    'Drag to draw a line. Hold Shift for straight angles.': 'Sleep om een lijn te tekenen. Houd Shift ingedrukt voor rechte hoeken.',
    'Hold the mouse button down and draw.': 'Houd de muisknop ingedrukt en teken.',
    'Click where the text should start.': 'Klik waar de tekst moet beginnen.',
    'Tap a shape to select it. Swipe to scroll.': 'Tik op een vorm om hem te selecteren. Veeg om te scrollen.',
    'Drag it to move, drag a square to resize.': 'Sleep om te verplaatsen, sleep een vierkantje voor de grootte.',
    'Drag to move the view, pinch to zoom.': 'Sleep om de weergave te verschuiven, knijp om te zoomen.',
    'Drag to draw a rectangle.': 'Sleep om een rechthoek te tekenen.',
    'Drag to draw an ellipse.': 'Sleep om een ellips te tekenen.',
    'Drag to draw a line.': 'Sleep om een lijn te tekenen.',
    'Draw with your finger.': 'Teken met je vinger.',
    'Tap where the text should start.': 'Tik waar de tekst moet beginnen.',
};

/* The editor's own messages about the code (parse() in export.js); the browser's messages stay as they are. */
const CODE_ERROR = {
    'The outermost element must be <svg>.': 'Het buitenste element moet <svg> zijn.',
    'The <svg> element is missing xmlns="http://www.w3.org/2000/svg".': 'Het <svg>-element mist xmlns="http://www.w3.org/2000/svg".',
};

/**
 * Translates a size in bytes ("1,234 bytes").
 * @param {string} s - the English size text.
 * @returns {string} the text in the language.
 */
const formatBytes = s => s.replace(/^([\d,]+) bytes$/, (m, n) => `${n.replace(/,/g, '.')} bytes`);
const MONTH = { Jan: 'jan.', Feb: 'feb.', Mar: 'mrt.', Apr: 'apr.', May: 'mei', Jun: 'jun.', Jul: 'jul.', Aug: 'aug.', Sep: 'sep.', Oct: 'okt.', Nov: 'nov.', Dec: 'dec.' };
/**
 * Translates the text the pattern found (drawings in the English pattern).
 * @param {string} n - the English text the pattern found.
 * @returns {string} the text in the language.
 */
const translateDrawings = n => (n === '1' ? 'tekening' : 'tekeningen');

export default {
    text: {
        ...LABEL,
        ...HINT,
        ...CODE_ERROR,

        // Top bar
        'SVG Editor': 'SVG-editor',
        'SVG Editor - home': 'SVG-editor - startpagina',
        'File': 'Bestand',
        'My drawings': 'Mijn tekeningen',
        'My drawings (Ctrl+O)': 'Mijn tekeningen (Ctrl+O)',
        'New drawing, or start this one over': 'Nieuwe tekening, of deze opnieuw beginnen',
        'New': 'Nieuw',
        'New blank drawing': 'Nieuwe lege tekening',
        'Your other drawings stay as they are': 'Je andere tekeningen blijven zoals ze zijn',
        'New from the example': 'Nieuw vanuit het voorbeeld',
        'A copy of the editor logo to try things out': 'Een kopie van het editorlogo om dingen uit te proberen',
        'Start this drawing over': 'Deze tekening opnieuw beginnen',
        'Empties it but keeps its size - "Undo" brings it back': 'Maakt haar leeg maar behoudt de grootte - "Ongedaan maken" haalt haar terug',
        'Open an SVG file from your computer as a new drawing (you can also drag a file into the window)':
            'Een SVG-bestand van je computer openen als nieuwe tekening (je kunt een bestand ook in het venster slepen)',
        'Open file…': 'Bestand openen…',
        'Undo the last change (Ctrl+Z)': 'De laatste wijziging ongedaan maken (Ctrl+Z)',
        'Undo': 'Ongedaan maken',
        'Redo the change you just undid (Ctrl+Y)': 'De zojuist ongedaan gemaakte wijziging opnieuw doen (Ctrl+Y)',
        'Redo': 'Opnieuw',
        'Output': 'Uitvoer',
        'Color theme': 'Kleurthema',
        'Light theme': 'Licht thema',
        'Dark theme': 'Donker thema',
        'Same as your system setting': 'Zoals je systeeminstelling',
        'Automatic theme (system setting)': 'Automatisch thema (systeeminstelling)',
        'Let any AI draw in this editor': 'Laat elke AI in deze editor tekenen',
        'AI Assistant': 'AI-assistent',
        'Save to your own server and embed the editor in your website':
            'Opslaan op je eigen server en de editor in je website insluiten',
        'Save to server': 'Opslaan op server',
        'How it works and keyboard shortcuts (?)': 'Hoe het werkt en sneltoetsen (?)',
        'Help': 'Help',
        'Save the drawing as an .svg file (Ctrl+S)': 'De tekening opslaan als .svg-bestand (Ctrl+S)',
        'Download SVG': 'SVG downloaden',
        'Save as PNG, JPG, WebP, data URI, React and more (Ctrl+E)': 'Opslaan als PNG, JPG, WebP, data-URI, React en meer (Ctrl+E)',
        'Export…': 'Exporteren…',

        // View tabs and the code
        'View': 'Weergave',
        'Edit': 'Bewerken',
        'Side panel': 'Zijpaneel',
        'Canvas': 'Canvas',
        'Properties': 'Eigenschappen',
        'SVG code': 'SVG-code',
        'Copy the SVG code to the clipboard': 'De SVG-code naar het klembord kopiëren',
        'Copy code': 'Code kopiëren',
        'Copy': 'Kopiëren',
        'Indent and arrange the code neatly': 'De code netjes inspringen en ordenen',
        'Tidy up': 'Opschonen',
        'Remove comments and spaces to make the file smaller': 'Commentaar en spaties verwijderen om het bestand kleiner te maken',
        'Shrink': 'Verkleinen',
        'Drag to change the width of the code area': 'Sleep om de breedte van het codevak te wijzigen',
        'Drag to change the width': 'Sleep om de breedte te wijzigen',
        'Error in the code.': 'Fout in de code.',
        'The preview shows the last working version.': 'Het voorbeeld toont de laatste werkende versie.',
        'The preview shows the last working version': 'Het voorbeeld toont de laatste werkende versie',
        'Add xmlns': 'xmlns toevoegen',

        // Tools, grid, view
        'Tools': 'Gereedschap',
        'Select and move shapes (V)': 'Vormen selecteren en verplaatsen (V)',
        'Select': 'Selecteren',
        'Move the view (H, or hold the space bar)': 'De weergave verschuiven (H, of houd de spatiebalk ingedrukt)',
        'Move the view': 'De weergave verschuiven',
        'Draw a rectangle (R)': 'Een rechthoek tekenen (R)',
        'Draw an ellipse or circle (E)': 'Een ellips of cirkel tekenen (E)',
        'Draw a line (L)': 'Een lijn tekenen (L)',
        'Draw freehand (P)': 'Uit de vrije hand tekenen (P)',
        'Freehand': 'Uit de vrije hand',
        'Add text (T)': 'Tekst toevoegen (T)',
        'Show the grid and snap shapes to it (#)': 'Het raster tonen en vormen eraan uitlijnen (#)',
        'Grid': 'Raster',
        'Distance between grid lines, in the drawing\'s units': 'Afstand tussen de rasterlijnen, in de eenheden van de tekening',
        'Spacing': 'Afstand',
        'Shapes jump onto the grid lines when moved or drawn (G)': 'Vormen springen op de rasterlijnen bij verplaatsen of tekenen (G)',
        'Snap': 'Uitlijnen',
        'Canvas: click shapes, drag them, resize them with the handles': 'Canvas: klik op vormen, sleep ze, wijzig hun grootte met de grepen',
        'Background of the preview': 'Achtergrond van het voorbeeld',
        'Background behind the drawing (only for viewing, not saved in the file)': 'Achtergrond achter de tekening (alleen om te bekijken, niet opgeslagen in het bestand)',
        'Checkered background': 'Geblokte achtergrond',
        'White background': 'Witte achtergrond',
        'Dark background': 'Donkere achtergrond',
        'No background': 'Geen achtergrond',
        'Zoom out (-)': 'Uitzoomen (-)',
        'Zoom out': 'Uitzoomen',
        'Show at actual size (1)': 'Op ware grootte tonen (1)',
        'Zoom in (+)': 'Inzoomen (+)',
        'Zoom in': 'Inzoomen',
        'Fit the drawing into the window (0)': 'De tekening in het venster passen (0)',
        'Fit to window': 'Aan venster aanpassen',
        'Fix the error in the code to edit the shapes again.': 'Herstel de fout in de code om de vormen weer te bewerken.',

        // Properties
        'Colors, size and position of the selected shape': 'Kleuren, grootte en positie van de geselecteerde vorm',
        'All elements of the drawing as a list': 'Alle elementen van de tekening als lijst',
        'Layers': 'Lagen',
        'The code contains an error. Once it is fixed, the shapes can be edited here again.':
            'De code bevat een fout. Zodra die hersteld is, kun je de vormen hier weer bewerken.',
        'No valid SVG loaded.': 'Geen geldige SVG geladen.',
        'Position in the document': 'Positie in het document',
        'Document': 'Document',
        'Width': 'Breedte',
        'Height': 'Hoogte',
        'x y width height': 'x y breedte hoogte',
        'Click a shape on the canvas or in the Layers list to edit it. Alt+click selects the surrounding group.':
            'Klik op een vorm op het canvas of in de lijst Lagen om hem te bewerken. Alt+klik selecteert de omringende groep.',
        'Colors for new shapes': 'Kleuren voor nieuwe vormen',
        'Fill': 'Vulling',
        'Outline': 'Lijn',
        'Outline width': 'Lijndikte',
        'None': 'Geen',
        'Fill color of new shapes': 'Vulkleur van nieuwe vormen',
        'Outline color of new shapes': 'Lijnkleur van nieuwe vormen',
        'Outline width of new shapes': 'Lijndikte van nieuwe vormen',
        'Fill color · new shapes': 'Vulkleur · nieuwe vormen',
        'Outline color · new shapes': 'Lijnkleur · nieuwe vormen',
        'Pick the fill color': 'De vulkleur kiezen',
        'Pick the outline color': 'De lijnkleur kiezen',
        'Fill color': 'Vulkleur',
        'Outline color': 'Lijnkleur',
        'Fill color as text': 'Vulkleur als tekst',
        'Outline color as text': 'Lijnkleur als tekst',
        'Color as text, e.g. #ff0000, red or none': 'Kleur als tekst, bijv. #ff0000, red of none',
        'No fill': 'Geen vulling',
        'No outline': 'Geen lijn',
        'Uses a gradient or pattern - picking a color replaces it.': 'Gebruikt een verloop of patroon - een kleur kiezen vervangt het.',
        'Opacity': 'Dekking',
        'Overall opacity': 'Totale dekking',
        'Line style': 'Lijnstijl',
        'solid': 'doorgetrokken',
        'dashed': 'gestreept',
        'dotted': 'gestippeld',
        'dash-dot': 'streep-punt',
        'Line ends': 'Lijneinden',
        'default': 'standaard',
        'flat': 'plat',
        'round': 'rond',
        'square': 'vierkant',
        'Corners': 'Hoeken',
        'sharp': 'scherp',
        'beveled': 'afgeschuind',
        'This text contains further elements (e.g. tspan) - please edit it in the code.':
            'Deze tekst bevat nog andere elementen (bijv. tspan) - bewerk hem in de code.',
        'Size': 'Grootte',
        'Weight': 'Dikte',
        'light': 'licht',
        'normal': 'normaal',
        'semi-bold': 'halfvet',
        'bold': 'vet',
        'black': 'zwart',
        'Font': 'Lettertype',
        'Alignment': 'Uitlijning',
        'left': 'links',
        'center': 'midden',
        'right': 'rechts',
        'Position and size': 'Positie en grootte',
        'Left edge': 'Linkerrand',
        'Top edge': 'Bovenrand',
        'W': 'B',
        'Rotate 15° to the left': '15° naar links draaien',
        'Rotate 15° to the right': '15° naar rechts draaien',
        '⟲ Rotate left': '⟲ Links draaien',
        '⟳ Rotate right': '⟳ Rechts draaien',
        'Mirror left to right': 'Van links naar rechts spiegelen',
        'Mirror top to bottom': 'Van boven naar onder spiegelen',
        '⇆ Flip horizontal': '⇆ Horizontaal spiegelen',
        '⇅ Flip vertical': '⇅ Verticaal spiegelen',
        'Arrange': 'Schikken',
        'Shapes further down in the code are drawn on top.': 'Vormen die lager in de code staan, worden erbovenop getekend.',
        'One step forward (Ctrl+↑)': 'Eén stap naar voren (Ctrl+↑)',
        'One step backward (Ctrl+↓)': 'Eén stap naar achteren (Ctrl+↓)',
        'Bring to front (Ctrl+Shift+↑)': 'Naar voorgrond (Ctrl+Shift+↑)',
        'Send to back (Ctrl+Shift+↓)': 'Naar achtergrond (Ctrl+Shift+↓)',
        '↑ Forward': '↑ Naar voren',
        '↓ Backward': '↓ Naar achteren',
        '⤒ To front': '⤒ Voorgrond',
        '⤓ To back': '⤓ Achtergrond',
        'Make a copy (Ctrl+D)': 'Een kopie maken (Ctrl+D)',
        'Remove this shape (Delete key)': 'Deze vorm verwijderen (Delete-toets)',
        '⧉ Duplicate': '⧉ Dupliceren',
        '✕ Delete': '✕ Verwijderen',
        'All attributes (advanced)': 'Alle attributen (geavanceerd)',
        'Remove attribute': 'Attribuut verwijderen',
        'Value': 'Waarde',
        'New attribute: name': 'Nieuw attribuut: naam',
        'New attribute: value': 'Nieuw attribuut: waarde',
        'Add attribute': 'Attribuut toevoegen',
        'Invalid attribute name': 'Ongeldige attribuutnaam',
        'The attribute could not be set': 'Het attribuut kon niet worden ingesteld',

        // Layers
        'Every element of the drawing. Shapes higher in the list are drawn on top. Click to select, drag to reorder (drop onto a group to put it inside), double-click to rename. The eye hides a shape.':
            'Elk element van de tekening. Vormen hoger in de lijst worden erbovenop getekend. Klik om te selecteren, sleep om de volgorde te wijzigen (zet het op een groep neer om het erin te plaatsen), dubbelklik om de naam te wijzigen. Het oog verbergt een vorm.',
        'Show': 'Tonen',
        'Hide': 'Verbergen',
        'One step forward': 'Eén stap naar voren',
        'One step backward': 'Eén stap naar achteren',
        'Duplicate': 'Dupliceren',
        'Delete': 'Verwijderen',
        'Name (id)': 'Naam (id)',
        'Name of the element (id)': 'Naam van het element (id)',
        'A group cannot be moved into itself': 'Een groep kan niet in zichzelf worden verplaatst',
        'This element cannot hold other shapes': 'Dit element kan geen andere vormen bevatten',
        'Use letters, digits, - and _ only, starting with a letter': 'Gebruik alleen letters, cijfers, - en _, te beginnen met een letter',

        // Messages
        'The browser storage is full': 'De opslag van de browser is vol',
        'The browser storage is full - download and delete drawings under "My drawings"':
            'De opslag van de browser is vol - download en verwijder tekeningen onder "Mijn tekeningen"',
        'The browser storage is full - delete or download drawings under "My drawings" first':
            'De opslag van de browser is vol - verwijder of download eerst tekeningen onder "Mijn tekeningen"',
        'The browser storage is full - delete or download some drawings first':
            'De opslag van de browser is vol - verwijder of download eerst enkele tekeningen',
        'Nothing to undo': 'Niets om ongedaan te maken',
        'Nothing to redo': 'Niets om opnieuw te doen',
        'Please fix the error in the code first': 'Herstel eerst de fout in de code',
        'Deleted - Undo brings it back': 'Verwijderd - Ongedaan maken haalt het terug',
        'Already at the front': 'Staat al vooraan',
        'Already at the back': 'Staat al achteraan',
        'Grid on - shapes snap to the grid': 'Raster aan - vormen springen op het raster',
        'Grid off': 'Raster uit',
        'Snap to grid: on': 'Uitlijnen op raster: aan',
        'Snap to grid: off - shapes move freely': 'Uitlijnen op raster: uit - vormen bewegen vrij',
        'Code tidied up': 'Code opgeschoond',
        'This drawing is empty already': 'Deze tekening is al leeg',
        'Everything in this drawing is removed; its size stays. "Undo" brings it back as long as the page is open.':
            'Alles in deze tekening wordt verwijderd; de grootte blijft. "Ongedaan maken" haalt het terug zolang de pagina open is.',
        'Start over': 'Opnieuw beginnen',
        'Please choose an SVG file': 'Kies een SVG-bestand',
        'The file is larger than 8 MB': 'Het bestand is groter dan 8 MB',
        'SVG pasted from the clipboard': 'SVG geplakt vanaf het klembord',
        'Downloaded': 'Gedownload',
        'Copied to the clipboard': 'Naar het klembord gekopieerd',
        'This browser does not allow copying images': 'Deze browser staat niet toe afbeeldingen te kopiëren',
        'Code copied': 'Code gekopieerd',
        'SVG downloaded': 'SVG gedownload',
        'The image came out empty.': 'De afbeelding is leeg.',
        'The drawing could not be rendered as an image.': 'De tekening kon niet als afbeelding worden weergegeven.',
        'Add': 'Toevoegen',
        'Replace': 'Vervangen',
        'The drawing has no closing </svg> - the new shapes could not be added':
            'De tekening heeft geen sluitende </svg> - de nieuwe vormen konden niet worden toegevoegd',
        'Drawing received - it has an error, see the code': 'Tekening ontvangen - ze bevat een fout, zie de code',
        'Drop the SVG file here': 'Zet het SVG-bestand hier neer',

        // A link from the AI opened in a tab of its own (ai.js)
        'Open it here': 'Hier openen',
        'The link could not be read': 'De link kon niet worden gelezen',
        'The drawing in this link is incomplete or damaged. If the AI\'s link was split over several lines (as in a terminal), copy the whole answer and paste it into the editor with Ctrl+V - the editor joins the lines.':
            'De tekening in deze link is onvolledig of beschadigd. Als de link van de AI over meerdere regels is verdeeld (zoals in een terminal), kopieer dan het hele antwoord en plak het met Ctrl+V in de editor - de editor voegt de regels samen.',
        'Loading…': 'Laden…',
        'Taken over by your editor': 'Overgenomen door je editor',
        'The drawing is now in the SVG Editor tab you already had open. Switch to that tab, or open it here.':
            'De tekening staat nu in het tabblad van de SVG-editor dat je al open had. Ga naar dat tabblad of open het hier.',

        // Dialogs: shared
        'Close': 'Sluiten',

        // Export
        'Export': 'Exporteren',
        'File name': 'Bestandsnaam',
        'Vector (sharp at any size)': 'Vector (scherp op elk formaat)',
        'SVG as in the editor': 'SVG zoals in de editor',
        'SVG tidied up': 'SVG opgeschoond',
        'SVG shrunk (smallest file)': 'SVG verkleind (kleinste bestand)',
        'Picture': 'Afbeelding',
        'PNG (transparent background)': 'PNG (transparante achtergrond)',
        'Code for websites': 'Code voor websites',
        'Data URI': 'Data-URI',
        'Base64 data URI': 'Base64-data-URI',
        'CSS background-image': 'CSS-background-image',
        'HTML <img> tag': 'HTML-<img>-tag',
        'React component (JSX)': 'React-component (JSX)',
        '1× (actual size)': '1× (ware grootte)',
        'custom': 'aangepast',
        'Width (px)': 'Breedte (px)',
        'Height (px)': 'Hoogte (px)',
        'Background': 'Achtergrond',
        'Background color': 'Achtergrondkleur',
        'Background color · exported image': 'Achtergrondkleur · geëxporteerde afbeelding',
        'Width and height stay in proportion. JPG has no transparency, so it always gets a background.':
            'Breedte en hoogte blijven in verhouding. JPG kent geen transparantie en krijgt dus altijd een achtergrond.',
        'Result': 'Resultaat',
        'Download every format at once: SVG (3 variants), PNG, JPG, WebP, React, data URI, Base64, CSS and HTML':
            'Elk formaat in één keer downloaden: SVG (3 varianten), PNG, JPG, WebP, React, data-URI, Base64, CSS en HTML',
        'All formats (ZIP)': 'Alle formaten (ZIP)',
        'Download': 'Downloaden',

        // My drawings
        'Search by name': 'Zoeken op naam',
        'Search your drawings': 'Je tekeningen doorzoeken',
        'Open an SVG file from your computer as a new drawing': 'Een SVG-bestand van je computer openen als nieuwe tekening',
        'New drawing': 'Nieuwe tekening',
        'Click a drawing to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Klik op een tekening om haar te openen. Ze worden alleen in deze browser bewaard - er wordt niets geüpload. Als je de sitegegevens van de browser wist, verdwijnen ze, dus download de tekeningen die je wilt bewaren.',
        'Download every drawing as an .svg file in one ZIP': 'Elke tekening als .svg-bestand in één ZIP downloaden',
        'Download all (ZIP)': 'Alles downloaden (ZIP)',
        'No drawings yet.': 'Nog geen tekeningen.',
        'Rename': 'Naam wijzigen',
        'Download as .svg': 'Downloaden als .svg',
        'This drawing is open': 'Deze tekening is geopend',
        'Click to open this drawing': 'Klik om deze tekening te openen',
        'New name': 'Nieuwe naam',
        'The drawing is removed from this browser for good. Download it first if you want to keep a copy.':
            'De tekening wordt definitief uit deze browser verwijderd. Download haar eerst als je een kopie wilt bewaren.',

        // AI assistant
        'Any AI can draw with you - ChatGPT, Claude, Gemini, Copilot.': 'Elke AI kan met je meetekenen - ChatGPT, Claude, Gemini, Copilot.',
        'Connected AI': 'Verbonden AI',
        'Paste it into your AI and say what it should draw.': 'Plak het in je AI en zeg wat die moet tekenen.',
        // The step after "Copy prompt" inside another website (ai.js rewrites it): its parts
        'The AI answers with a link:': 'De AI antwoordt met een link:',
        'paste its whole answer below': 'plak het hele antwoord hieronder',
        '(a clicked link opens a separate editor).': '(een aangeklikte link opent een aparte editor).',
        'takes it back.': 'draait het terug.',
        'The AI answers with a link: click it, or paste the whole answer below.': 'De AI antwoordt met een link: klik erop, of plak het hele antwoord hieronder.',
        'Connected to': 'Verbonden met',
        'the AI sends its result there, and it opens here.': 'de AI stuurt het resultaat daarheen, en het wordt hier geopend.',
        '(no key yet)': '(nog geen sleutel)',
        '(key valid while the editor is open)': '(sleutel geldig zolang de editor open is)',
        'What': 'Wat',
        'tells the AI': 'aan de AI vertelt',
        'The AI should': 'De AI moet',
        'Change “': '"',          // Change “name” -> „name” wijzigen
        '”': '" wijzigen',
        'Make a new drawing': 'Een nieuwe tekening maken',
        'The AI\'s answer (or press Ctrl+V anywhere):': 'Het antwoord van de AI (of druk ergens op Ctrl+V):',
        'The drawing travels in the link after the “#”, which no server sees. What you paste into your AI is handled by its provider.':
            'De tekening reist in de link na de "#", die geen server ziet. Wat je in je AI plakt, wordt door de aanbieder ervan verwerkt.',
        'The prompt - copy it with Ctrl+C': 'De prompt - kopieer hem met Ctrl+C',
        'Copy prompt': 'Prompt kopiëren',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)': 'Kopiëren is hier niet toegestaan - het is hieronder geselecteerd: druk op Ctrl+C (⌘C)',
        'Prompt copied - paste it into your AI and say what it should draw': 'Prompt gekopieerd - plak hem in je AI en zeg wat die moet tekenen',
        'This link is incomplete or damaged - please ask the AI to send it again': 'Deze link is onvolledig of beschadigd - vraag de AI om hem opnieuw te sturen',

        // Save to your server
        'Save to your server': 'Opslaan op je server',
        'Webhook address': 'Webhookadres',
        'Send automatically a few seconds after each change (otherwise only when you click':
            'Automatisch verzenden, een paar seconden na elke wijziging (anders alleen als je op',
        'or press Ctrl+S)': 'of op Ctrl+S drukt)',
        'Only for “': 'Alleen voor "',
        '” (other drawings use the general address)': '" (andere tekeningen gebruiken het algemene adres)',
        'What your server receives': 'Wat je server ontvangt',
        'A POST request with JSON (your server must allow CORS from https://svg.giit.ch):':
            'Een POST-verzoek met JSON (je server moet CORS van https://svg.giit.ch toestaan):',
        'Embed the editor in your website': 'De editor in je website insluiten',
        'Send now': 'Nu verzenden',
        'Save setting': 'Instelling opslaan',

        // Help
        'How it works': 'Hoe het werkt',
        'Keyboard shortcuts': 'Sneltoetsen',
        'Select and move': 'Selecteren en verplaatsen',
        'Rectangle, ellipse, line, freehand, text': 'Rechthoek, ellips, lijn, uit de vrije hand, tekst',
        'Zoom': 'Zoomen',
        'Drag with the mouse wheel pressed': 'Slepen met ingedrukt muiswiel',
        'Double-click the mouse wheel': 'Dubbelklikken met het muiswiel',
        'Fit to window / actual size': 'Aan venster aanpassen / ware grootte',
        'Grid on/off / snap on/off': 'Raster aan/uit / uitlijnen aan/uit',
        'Arrow keys': 'Pijltoetsen',
        'Only horizontal/vertical, keep proportions': 'Alleen horizontaal/verticaal, verhoudingen behouden',
        'Select the surrounding group': 'De omringende groep selecteren',
        'Remove the selection': 'De selectie verwijderen',
        'Undo / redo': 'Ongedaan maken / opnieuw',
        'Download SVG (or save to your server) / export': 'SVG downloaden (of op je server opslaan) / exporteren',
        'Deselect': 'Selectie opheffen',

        // Color picker (colorpicker.js)
        'Color': 'Kleur',
        'Saturation and brightness (arrow keys)': 'Verzadiging en helderheid (pijltoetsen)',
        'Hue': 'Tint',
        'Before - click to go back': 'Ervoor - klik om terug te gaan',
        'New color': 'Nieuwe kleur',
        'Color as hex code, e.g. #ff0000': 'Kleur als hexcode, bijv. #ff0000',
        'Done': 'Klaar',
        'Colors in this drawing': 'Kleuren in deze tekening',
        'Basic colors': 'Basiskleuren',

        /* ---------- Single words ---------- */
        'Format': 'Formaat',
        'Name': 'Naam',
    },

    html: {
        // AI assistant
        'Click <b>Copy prompt</b>.': 'Klik op <b>Prompt kopiëren</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'De AI antwoordt met een link: klik erop, of plak het hele antwoord hieronder. <b>Ongedaan maken</b> draait het terug.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'De AI antwoordt met een link: <b>plak het hele antwoord hieronder</b> (een aangeklikte link opent een aparte editor). <b>Ongedaan maken</b> draait het terug.',

        // Save to your server
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your drawings are kept where you want them. Nothing is sent until you enter an address here.':
            'De editor kan elke opgeslagen versie naar je eigen server sturen (een <b>webhook</b>), zodat je tekeningen bewaard worden waar jij dat wilt. Er wordt niets verzonden tot je hier een adres invoert.',
        'Token <small>(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)</small>': 'Token <small>(optioneel, verzonden als "Authorization: Bearer …"; bewaard tot dit tabblad wordt gesloten)</small>',
        'Also possible: <code>?src=&lt;URL of an .svg file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this drawing there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>svgeditor:ai</code>, <code>svgeditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Ook mogelijk: <code>?src=&lt;URL van een .svg-bestand&gt;</code> opent een bestand, <code>&amp;webhook=&lt;URL&gt;</code> slaat deze tekening daar op. De editor kan ook in een eigen venster openen (<code>?embed=window</code>), en je pagina kan hem een eigen AI-prompt en een sessiesleutel geven, zodat de AI het resultaat naar je server stuurt (<code>svgeditor:ai</code>, <code>svgeditor:key-request</code>) - zie "De editor op je eigen website gebruiken" onder de editor. Details staan in <a href="/llms.txt">llms.txt</a>.',

        // Help
        '<b>Open</b> an SVG file, drag it into the window or paste SVG code - or start with <b>New</b>.':
            '<b>Open</b> een SVG-bestand, sleep het in het venster of plak SVG-code - of begin met <b>Nieuw</b>.',
        '<b>My drawings</b> (the folder button at the top left) lists every drawing kept in this browser: open, rename, duplicate, download or delete them.':
            '<b>Mijn tekeningen</b> (de mapknop linksboven) toont elke tekening die in deze browser wordt bewaard: openen, hernoemen, dupliceren, downloaden of verwijderen.',
        '<b>Click a shape</b> on the canvas. Drag it to move it, drag the small squares to resize it. Colors, size and position are under <b>Properties</b> on the right.':
            '<b>Klik op een vorm</b> op het canvas. Sleep hem om hem te verplaatsen, sleep de kleine vierkantjes om de grootte te wijzigen. Kleuren, grootte en positie staan rechts onder <b>Eigenschappen</b>.',
        '<b>Draw</b> new shapes with the tools above the canvas.': '<b>Teken</b> nieuwe vormen met het gereedschap boven het canvas.',
        'The <b>code</b> on the left always shows the current drawing and can be edited directly.':
            'De <b>code</b> links toont altijd de huidige tekening en kan direct worden bewerkt.',
        '<b>Download SVG</b> saves the file, <b>Export</b> offers pictures (PNG, JPG) and code for websites.':
            '<b>SVG downloaden</b> slaat het bestand op, <b>Exporteren</b> biedt afbeeldingen (PNG, JPG) en code voor websites.',
        'Made a mistake? <b>Undo</b> takes back every step. Your drawings are kept in this browser, even after closing the page.':
            'Een fout gemaakt? <b>Ongedaan maken</b> draait elke stap terug. Je tekeningen worden in deze browser bewaard, ook nadat je de pagina sluit.',
        '<kbd>H</kbd> / hold <kbd>Space</kbd>': '<kbd>H</kbd> / <kbd>Space</kbd> ingedrukt houden',
        'Mouse wheel, <kbd>+</kbd> <kbd>-</kbd>': 'Muiswiel, <kbd>+</kbd> <kbd>-</kbd>',
        'Move the selection by 1, with <kbd>Shift</kbd> by 10': 'De selectie 1 verplaatsen, met <kbd>Shift</kbd> 10',
        '<kbd>Shift</kbd> while dragging': '<kbd>Shift</kbd> tijdens het slepen',
        '<kbd>Alt</kbd> + click': '<kbd>Alt</kbd> + klik',
        '<kbd>Delete</kbd>': '<kbd>Delete</kbd>',
        'Forward / backward (with <kbd>Shift</kbd>: to front / to back)': 'Naar voren / naar achteren (met <kbd>Shift</kbd>: naar voorgrond / naar achtergrond)',
        'In the code: <kbd>Tab</kbd> indents, <kbd>Shift</kbd>+<kbd>Tab</kbd> outdents, clicking into a tag selects that shape on the canvas.':
            'In de code: <kbd>Tab</kbd> springt in, <kbd>Shift</kbd>+<kbd>Tab</kbd> springt uit, klikken in een tag selecteert die vorm op het canvas.',
    },

    patterns: [
        // Canvas hint with the grid
        ['^(.*?) ?Snapping to a ([\\d.]+) grid\\.$', (m, h, n) => `${h ? (HINT[h] || h) + ' ' : ''}Springt op een raster van ${n}.`],
        ['^(.*?) ?Snap: ([\\d.]+)\\.$', (m, h, n) => `${h ? (HINT[h] || h) + ' ' : ''}Uitlijnen: ${n}.`],

        // Code
        ['^(\\d+) lines · (.+)$', (m, n, s) => `${n} ${n === '1' ? 'regel' : 'regels'} · ${s}`],
        ['^Line (\\d+), column (\\d+): (.*)$', (m, l, c, t) => `Regel ${l}, kolom ${c}: ${CODE_ERROR[t] || t}`],
        ['^Line (\\d+): (.*)$', (m, l, t) => `Regel ${l}: ${CODE_ERROR[t] || t}`],
        ['^File shrunk: (\\d+) → (\\d+) bytes$', 'Bestand verkleind: $1 → $2 bytes'],

        // Properties
        [`^(Fill|Outline) color · (whole drawing|${TYPE_ANY})( #.+)?$`, (m, w, t, id) =>
            `${w === 'Fill' ? 'Vulkleur' : 'Lijnkleur'} · ${t === 'whole drawing' ? 'hele tekening' : translateLabel(t)}${id || ''}`],
        ['^(.+) \\(inherited\\)$', '$1 (overgeërfd)'],
        ['^Remove ([A-Za-z_:][\\w:.-]*)$', '$1 verwijderen'],

        // Layers
        ['^<([^>]+)> - click to select, double-click to rename, drag to reorder$', '<$1> - klik om te selecteren, dubbelklik om te hernoemen, sleep om te ordenen'],
        ['^<([^>]+)> - click to select$', '<$1> - klik om te selecteren'],
        [`^Show ${TYPE}$`, (m, t) => `${translateLabel(t)} tonen`],
        [`^Hide ${TYPE}$`, (m, t) => `${translateLabel(t)} verbergen`],
        [`^Move ${TYPE} forward$`, (m, t) => `${translateLabel(t)} naar voren`],
        [`^Move ${TYPE} backward$`, (m, t) => `${translateLabel(t)} naar achteren`],
        [`^Duplicate ${TYPE}$`, (m, t) => `${translateLabel(t)} dupliceren`],
        [`^Delete ${TYPE}$`, (m, t) => `${translateLabel(t)} verwijderen`],
        ['^The name “(.+)” is already used$', 'De naam "$1" is al in gebruik'],

        // The open drawing
        ['^"(.+)" is open\\. My drawings: open, rename, duplicate or delete your drawings \\(Ctrl\\+O\\)$',
            '"$1" is geopend. Mijn tekeningen: je tekeningen openen, hernoemen, dupliceren of verwijderen (Ctrl+O)'],
        ['^Start "(.+)" over\\?$', '"$1" opnieuw beginnen?'],
        ['^Start "(.+)" over$', '"$1" opnieuw beginnen'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '"$1" is nu leeg - "Ongedaan maken" haalt het terug'],
        ['^Opened "(.+)" - it is now in "My drawings"$', '"$1" geopend - ze staat nu in "Mijn tekeningen"'],
        ['^New drawing "(.+)" from the AI - your other drawings are unchanged$', 'Nieuwe tekening "$1" van de AI - je andere tekeningen zijn ongewijzigd'],
        ['^New drawing "(.+)" - your other drawings are under "My drawings"$', 'Nieuwe tekening "$1" - je andere tekeningen staan onder "Mijn tekeningen"'],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '"$1" gewijzigd door de AI - "Ongedaan maken" draait het terug'],
        ['^"(.+)" opened$', '"$1" geopend'],

        // Export
        ['^(\\d+) × (\\d+) pixels$', '$1 × $2 pixels'],
        ['^([\\d,]+) bytes$', m => formatBytes(m)],
        ['^ZIP with 11 files downloaded \\(pictures (\\d+) × (\\d+) px\\)$', 'ZIP met 11 bestanden gedownload (afbeeldingen $1 × $2 px)'],

        // My drawings
        ['^(\\d+) (?:drawing|drawings) · (.+) in this browser$', (m, n, s) => `${n} ${translateDrawings(n)} · ${formatBytes(s)} in deze browser`],
        ['^Open now · (.+)$', (m, s) => `Nu geopend · ${formatBytes(s)}`],
        ['^just now · (.+)$', (m, s) => `zojuist · ${formatBytes(s)}`],
        ['^(\\d+) min ago · (.+)$', (m, n, s) => `${n} min. geleden · ${formatBytes(s)}`],
        ['^(\\d+) h ago · (.+)$', (m, n, s) => `${n} uur geleden · ${formatBytes(s)}`],
        ['^yesterday · (.+)$', (m, s) => `gisteren · ${formatBytes(s)}`],
        ['^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\\d{1,2}), (\\d{4}) · (.+)$', (m, mo, d, y, s) => `${d} ${MONTH[mo]} ${y} · ${formatBytes(s)}`],
        ['^(.+) \\(open now\\)$', '$1 (nu geopend)'],
        ['^Open (.+)$', '$1 openen'],
        ['^No drawing named "(.*)"\\.$', 'Geen tekening met de naam "$1".'],
        ['^Delete "(.+)"\\?$', '"$1" verwijderen?'],
        ['^"(.+)" duplicated$', '"$1" gedupliceerd'],
        ['^"(.+)" deleted$', '"$1" verwijderd'],
        ['^ZIP with (\\d+) (?:drawing|drawings) downloaded$', (m, n) => `ZIP met ${n} ${translateDrawings(n)} gedownload`],

        // AI
        ['^Part (\\d+) of (\\d+) received$', 'Deel $1 van $2 ontvangen'],
        ['^Open the other (link|links) from the AI too \\(still missing: part (.+)\\)\\.$',
            (m, l, p) => `Open ook ${l === 'link' ? 'de andere link' : 'de andere links'} van de AI (ontbreekt nog: deel ${p}).`],
        ['^Part (\\d+) of (\\d+) received - paste the other (link|links) too \\(missing: (.+)\\)$',
            (m, a, b, l, p) => `Deel ${a} van ${b} ontvangen - plak ook ${l === 'link' ? 'de andere link' : 'de andere links'} (ontbreekt: ${p})`],
        ['^The AI sends the drawing to (.+) with a key that only works for this session\\. What you paste into your AI is handled by its provider\\.$',
            'De AI stuurt de tekening naar $1 met een sleutel die alleen voor deze sessie werkt. Wat je in je AI plakt, wordt door de aanbieder ervan verwerkt.'],
        ['^The AI sends its result to (.+) by itself, and it opens here\\. If it answers with a link, paste its answer below\\.$',
            'De AI stuurt het resultaat zelf naar $1, en het wordt hier geopend. Als de AI met een link antwoordt, plak het antwoord dan hieronder.'],
        ['^No key from (.+) - the prompt asks the AI for a link instead$', 'Geen sleutel van $1 - de prompt vraagt de AI in plaats daarvan om een link'],
        ['^Prompt copied - the AI sends its result to (.+)$', 'Prompt gekopieerd - de AI stuurt het resultaat naar $1'],
    ],
};
