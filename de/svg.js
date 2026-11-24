/* German texts of the SVG editor: the bar, the canvas and its tools, the
   properties and layers, the dialogs (export, my drawings, AI, server, help),
   the color picker and the messages. What all editors share is in
   common.js; how the dictionaries are used is described in i18n.js.
   Names of drawings and elements are kept as they are and shown in «…». */

/* Names of the element types (LABELS in app.js). */
const LABEL = {
    'Drawing': 'Zeichnung', 'Rectangle': 'Rechteck', 'Circle': 'Kreis', 'Ellipse': 'Ellipse', 'Line': 'Linie',
    'Polyline': 'Polylinie', 'Polygon': 'Polygon', 'Path': 'Pfad', 'Text': 'Text', 'Group': 'Gruppe', 'Image': 'Bild',
    'Reused element': 'Wiederverwendetes Element', 'Nested SVG': 'Verschachteltes SVG', 'Link': 'Link',
    'Embedded content': 'Eingebetteter Inhalt', 'Definitions': 'Definitionen', 'Linear gradient': 'Linearer Verlauf',
    'Radial gradient': 'Radialer Verlauf', 'Gradient stop': 'Verlaufspunkt', 'Clip path': 'Beschneidungspfad',
    'Mask': 'Maske', 'Pattern': 'Muster', 'Symbol': 'Symbol', 'Style sheet': 'Stylesheet', 'Title': 'Titel',
    'Description': 'Beschreibung', 'Filter': 'Filter', 'Marker': 'Marker', 'Switch': 'Switch', 'Metadata': 'Metadaten',
    'Script': 'Skript',
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
    'Click a shape to select it. Drag an empty spot to move the view.': 'Klicke eine Form an, um sie auszuwählen. Zieh an einer leeren Stelle, um die Ansicht zu verschieben.',
    'Drag the shape to move it, or a small square to resize it. Delete key removes it.': 'Zieh die Form, um sie zu verschieben, oder ein kleines Quadrat, um ihre Grösse zu ändern. Die Delete-Taste entfernt sie.',
    'Drag to move the view. Use the mouse wheel to zoom.': 'Ziehen verschiebt die Ansicht. Mit dem Mausrad zoomst du.',
    'Drag to draw a rectangle. Hold Shift for a square.': 'Ziehen zeichnet ein Rechteck. Mit Shift wird es ein Quadrat.',
    'Drag to draw an ellipse. Hold Shift for a circle.': 'Ziehen zeichnet eine Ellipse. Mit Shift wird es ein Kreis.',
    'Drag to draw a line. Hold Shift for straight angles.': 'Ziehen zeichnet eine Linie. Mit Shift rastet der Winkel ein.',
    'Hold the mouse button down and draw.': 'Halte die Maustaste gedrückt und zeichne.',
    'Click where the text should start.': 'Klicke dort, wo der Text beginnen soll.',
    'Tap a shape to select it. Swipe to scroll.': 'Tippe eine Form an, um sie auszuwählen. Wischen scrollt.',
    'Drag it to move, drag a square to resize.': 'Zieh sie zum Verschieben, zieh ein Quadrat für die Grösse.',
    'Drag to move the view, pinch to zoom.': 'Ziehen verschiebt die Ansicht, mit zwei Fingern zoomst du.',
    'Drag to draw a rectangle.': 'Ziehen zeichnet ein Rechteck.',
    'Drag to draw an ellipse.': 'Ziehen zeichnet eine Ellipse.',
    'Drag to draw a line.': 'Ziehen zeichnet eine Linie.',
    'Draw with your finger.': 'Zeichne mit dem Finger.',
    'Tap where the text should start.': 'Tippe dort, wo der Text beginnen soll.',
};

/* The editor's own messages about the code (parse() in export.js); the browser's messages stay as they are. */
const CODE_ERROR = {
    'The outermost element must be <svg>.': 'Das äusserste Element muss <svg> sein.',
    'The <svg> element is missing xmlns="http://www.w3.org/2000/svg".': 'Dem <svg>-Element fehlt xmlns="http://www.w3.org/2000/svg".',
};

/**
 * Translates a size in bytes ("1,234 bytes").
 * @param {string} s - the English size text.
 * @returns {string} the text in the language.
 */
const formatBytes = s => s.replace(/^([\d,]+) bytes$/, (m, n) => `${n.replace(/,/g, '’')} Bytes`);
const MONTH = { Jan: 'Jan.', Feb: 'Feb.', Mar: 'März', Apr: 'Apr.', May: 'Mai', Jun: 'Juni', Jul: 'Juli', Aug: 'Aug.', Sep: 'Sept.', Oct: 'Okt.', Nov: 'Nov.', Dec: 'Dez.' };
/**
 * Translates the text the pattern found (drawings in the English pattern).
 * @param {string} n - the English text the pattern found.
 * @returns {string} the text in the language.
 */
const translateDrawings = n => (n === '1' ? 'Zeichnung' : 'Zeichnungen');

export default {
    text: {
        'Show or hide the side panel': 'Seitenleiste ein- oder ausblenden',
        'Examples': 'Beispiele',
        'Template': 'Vorlage',
        'The template with its placeholders as written': 'Die Vorlage mit ihren Platzhaltern, wie sie geschrieben sind',
        'Placeholders': 'Platzhalter',
        'The placeholders of the template - a click on one puts its tag at the cursor': 'Die Platzhalter der Vorlage - ein Klick setzt das zugehörige Tag beim Cursor ein',
        'Shown': 'Angezeigt',
        'Hidden': 'Ausgeblendet',
        'View of the drawing': 'Ansicht der Zeichnung',
        'The drawing filled with the examples': 'Die mit den Beispielen ausgefüllte Zeichnung',
        'The examples could not be filled in - the canvas shows the template': 'Die Beispiele konnten nicht eingesetzt werden - die Zeichenfläche zeigt die Vorlage',
        'This text shows an example - edit it in the code or in the template view': 'Dieser Text zeigt ein Beispiel - bearbeite ihn im Code oder in der Vorlagenansicht',
        ...LABEL,
        ...HINT,
        ...CODE_ERROR,

        // Top bar
        'SVG Editor': 'SVG-Editor',
        'SVG Editor - home': 'SVG-Editor - Startseite',
        'File': 'Datei',
        'My drawings': 'Meine Zeichnungen',
        'My drawings (Ctrl+O)': 'Meine Zeichnungen (Ctrl+O)',
        'New drawing, or start this one over': 'Neue Zeichnung oder diese neu beginnen',
        'New': 'Neu',
        'New blank drawing': 'Neue leere Zeichnung',
        'Your other drawings stay as they are': 'Deine anderen Zeichnungen bleiben, wie sie sind',
        'New from the example': 'Neu aus dem Beispiel',
        'A copy of the editor logo to try things out': 'Eine Kopie des Editor-Logos zum Ausprobieren',
        'Start this drawing over': 'Diese Zeichnung neu beginnen',
        'Empties it but keeps its size - "Undo" brings it back': 'Leert sie, behält aber ihre Grösse - «Rückgängig» holt sie zurück',
        'Open an SVG file from your computer as a new drawing (you can also drag a file into the window)':
            'Eine SVG-Datei von deinem Computer als neue Zeichnung öffnen (du kannst eine Datei auch ins Fenster ziehen)',
        'Open file…': 'Datei öffnen …',
        'Undo the last change (Ctrl+Z)': 'Die letzte Änderung rückgängig machen (Ctrl+Z)',
        'Undo': 'Rückgängig',
        'Redo the change you just undid (Ctrl+Y)': 'Die eben rückgängig gemachte Änderung wiederherstellen (Ctrl+Y)',
        'Redo': 'Wiederholen',
        'Output': 'Ausgabe',
        'Color theme': 'Farbschema',
        'Light theme': 'Helles Farbschema',
        'Dark theme': 'Dunkles Farbschema',
        'Same as your system setting': 'Wie in deinen Systemeinstellungen',
        'Automatic theme (system setting)': 'Automatisches Farbschema (Systemeinstellung)',
        'Let any AI draw in this editor': 'Lass eine beliebige KI in diesem Editor zeichnen',
        'AI Assistant': 'KI-Assistent',
        'Save to your own server and embed the editor in your website':
            'Auf deinem eigenen Server speichern und den Editor in deine Website einbetten',
        'Save to server': 'Auf Server speichern',
        'How it works and keyboard shortcuts (?)': 'Bedienung und Tastenkürzel (?)',
        'Help': 'Hilfe',
        'Save the drawing as an .svg file (Ctrl+S)': 'Die Zeichnung als .svg-Datei speichern (Ctrl+S)',
        'Download SVG': 'SVG herunterladen',
        'Save as PNG, JPG, WebP, data URI, React and more (Ctrl+E)': 'Als PNG, JPG, WebP, Daten-URI, React und mehr speichern (Ctrl+E)',
        'Export…': 'Exportieren …',

        // View tabs and the code
        'View': 'Ansicht',
        'Edit': 'Bearbeiten',
        'Side panel': 'Seitenleiste',
        'Canvas': 'Zeichenfläche',
        'Properties': 'Eigenschaften',
        'SVG code': 'SVG-Code',
        'Copy the SVG code to the clipboard': 'Den SVG-Code in die Zwischenablage kopieren',
        'Copy code': 'Code kopieren',
        'Copy': 'Kopieren',
        'Indent and arrange the code neatly': 'Den Code sauber einrücken und ordnen',
        'Tidy up': 'Aufräumen',
        'Remove comments and spaces to make the file smaller': 'Kommentare und Leerzeichen entfernen, damit die Datei kleiner wird',
        'Shrink': 'Verkleinern',
        'Drag to change the width of the code area': 'Ziehen, um die Breite des Codebereichs zu ändern',
        'Drag to change the width': 'Ziehen, um die Breite zu ändern',
        'Error in the code.': 'Fehler im Code.',
        'The preview shows the last working version.': 'Die Vorschau zeigt die letzte funktionierende Fassung.',
        'The preview shows the last working version': 'Die Vorschau zeigt die letzte funktionierende Fassung',
        'Add xmlns': 'xmlns ergänzen',

        // Tools, grid, view
        'Tools': 'Werkzeuge',
        'Select and move shapes (V)': 'Formen auswählen und verschieben (V)',
        'Select': 'Auswählen',
        'Move the view (H, or hold the space bar)': 'Ansicht verschieben (H, oder Leertaste gedrückt halten)',
        'Move the view': 'Ansicht verschieben',
        'Draw a rectangle (R)': 'Rechteck zeichnen (R)',
        'Draw an ellipse or circle (E)': 'Ellipse oder Kreis zeichnen (E)',
        'Draw a line (L)': 'Linie zeichnen (L)',
        'Draw freehand (P)': 'Freihand zeichnen (P)',
        'Freehand': 'Freihand',
        'Add text (T)': 'Text hinzufügen (T)',
        'Show the grid and snap shapes to it (#)': 'Raster zeigen und Formen daran einrasten lassen (#)',
        'Grid': 'Raster',
        'Distance between grid lines, in the drawing\'s units': 'Abstand der Rasterlinien, in den Einheiten der Zeichnung',
        'Spacing': 'Abstand',
        'Shapes jump onto the grid lines when moved or drawn (G)': 'Formen springen beim Verschieben und Zeichnen auf die Rasterlinien (G)',
        'Snap': 'Einrasten',
        'Canvas: click shapes, drag them, resize them with the handles': 'Zeichenfläche: Formen anklicken, ziehen und mit den Anfassern in der Grösse ändern',
        'Background of the preview': 'Hintergrund der Vorschau',
        'Background behind the drawing (only for viewing, not saved in the file)': 'Hintergrund hinter der Zeichnung (nur zum Anschauen, wird nicht in der Datei gespeichert)',
        'Checkered background': 'Karierter Hintergrund',
        'White background': 'Weisser Hintergrund',
        'Dark background': 'Dunkler Hintergrund',
        'No background': 'Kein Hintergrund',
        'Zoom out (-)': 'Herauszoomen (-)',
        'Zoom out': 'Herauszoomen',
        'Show at actual size (1)': 'In Originalgrösse zeigen (1)',
        'Zoom in (+)': 'Hineinzoomen (+)',
        'Zoom in': 'Hineinzoomen',
        'Fit the drawing into the window (0)': 'Die Zeichnung ins Fenster einpassen (0)',
        'Fit to window': 'Ins Fenster einpassen',
        'Fix the error in the code to edit the shapes again.': 'Behebe den Fehler im Code, um die Formen wieder zu bearbeiten.',

        // Properties
        'Colors, size and position of the selected shape': 'Farben, Grösse und Position der ausgewählten Form',
        'All elements of the drawing as a list': 'Alle Elemente der Zeichnung als Liste',
        'Layers': 'Ebenen',
        'The code contains an error. Once it is fixed, the shapes can be edited here again.':
            'Der Code enthält einen Fehler. Sobald er behoben ist, lassen sich die Formen hier wieder bearbeiten.',
        'No valid SVG loaded.': 'Kein gültiges SVG geladen.',
        'Position in the document': 'Position im Dokument',
        'Document': 'Dokument',
        'Width': 'Breite',
        'Height': 'Höhe',
        'x y width height': 'x y Breite Höhe',
        'Click a shape on the canvas or in the Layers list to edit it. Alt+click selects the surrounding group.':
            'Klicke eine Form auf der Zeichenfläche oder in der Ebenenliste an, um sie zu bearbeiten. Alt+Klick wählt die umgebende Gruppe.',
        'Colors for new shapes': 'Farben für neue Formen',
        'Fill': 'Füllung',
        'Outline': 'Kontur',
        'Outline width': 'Konturbreite',
        'None': 'Keine',
        'Fill color of new shapes': 'Füllfarbe neuer Formen',
        'Outline color of new shapes': 'Konturfarbe neuer Formen',
        'Outline width of new shapes': 'Konturbreite neuer Formen',
        'Fill color · new shapes': 'Füllfarbe · neue Formen',
        'Outline color · new shapes': 'Konturfarbe · neue Formen',
        'Pick the fill color': 'Füllfarbe wählen',
        'Pick the outline color': 'Konturfarbe wählen',
        'Fill color': 'Füllfarbe',
        'Outline color': 'Konturfarbe',
        'Fill color as text': 'Füllfarbe als Text',
        'Outline color as text': 'Konturfarbe als Text',
        'Color as text, e.g. #ff0000, red or none': 'Farbe als Text, z. B. #ff0000, red oder none',
        'No fill': 'Keine Füllung',
        'No outline': 'Keine Kontur',
        'Uses a gradient or pattern - picking a color replaces it.': 'Verwendet einen Verlauf oder ein Muster - eine gewählte Farbe ersetzt es.',
        'Opacity': 'Deckkraft',
        'Overall opacity': 'Deckkraft gesamt',
        'Line style': 'Linienart',
        'solid': 'durchgezogen',
        'dashed': 'gestrichelt',
        'dotted': 'gepunktet',
        'dash-dot': 'Strich-Punkt',
        'Line ends': 'Linienenden',
        'default': 'Standard',
        'flat': 'flach',
        'round': 'rund',
        'square': 'eckig',
        'Corners': 'Ecken',
        'sharp': 'spitz',
        'beveled': 'abgeschrägt',
        'This text contains further elements (e.g. tspan) - please edit it in the code.':
            'Dieser Text enthält weitere Elemente (z. B. tspan) - bitte bearbeite ihn im Code.',
        'Size': 'Grösse',
        'Weight': 'Schriftstärke',
        'light': 'dünn',
        'normal': 'normal',
        'semi-bold': 'halbfett',
        'bold': 'fett',
        'black': 'extrafett',
        'Font': 'Schrift',
        'Alignment': 'Ausrichtung',
        'left': 'links',
        'center': 'zentriert',
        'right': 'rechts',
        'Position and size': 'Position und Grösse',
        'Left edge': 'Linker Rand',
        'Top edge': 'Oberer Rand',
        'W': 'B',
        'Rotate 15° to the left': '15° nach links drehen',
        'Rotate 15° to the right': '15° nach rechts drehen',
        '⟲ Rotate left': '⟲ Links drehen',
        '⟳ Rotate right': '⟳ Rechts drehen',
        'Mirror left to right': 'Waagrecht spiegeln: links und rechts vertauschen',
        'Mirror top to bottom': 'Senkrecht spiegeln: oben und unten vertauschen',
        '⇆ Flip horizontal': '⇆ Spiegeln',
        '⇅ Flip vertical': '⇅ Spiegeln',
        'Arrange': 'Anordnen',
        'Shapes further down in the code are drawn on top.': 'Formen weiter unten im Code liegen vorne.',
        'One step forward (Ctrl+↑)': 'Einen Schritt nach vorne (Ctrl+↑)',
        'One step backward (Ctrl+↓)': 'Einen Schritt nach hinten (Ctrl+↓)',
        'Bring to front (Ctrl+Shift+↑)': 'Ganz nach vorne (Ctrl+Shift+↑)',
        'Send to back (Ctrl+Shift+↓)': 'Ganz nach hinten (Ctrl+Shift+↓)',
        '↑ Forward': '↑ Nach vorne',
        '↓ Backward': '↓ Nach hinten',
        '⤒ To front': '⤒ Ganz vorne',
        '⤓ To back': '⤓ Ganz hinten',
        'Make a copy (Ctrl+D)': 'Eine Kopie machen (Ctrl+D)',
        'Remove this shape (Delete key)': 'Diese Form entfernen (Delete-Taste)',
        '⧉ Duplicate': '⧉ Duplizieren',
        '✕ Delete': '✕ Löschen',
        'All attributes (advanced)': 'Alle Attribute (für Fortgeschrittene)',
        'Remove attribute': 'Attribut entfernen',
        'Value': 'Wert',
        'New attribute: name': 'Neues Attribut: Name',
        'New attribute: value': 'Neues Attribut: Wert',
        'Add attribute': 'Attribut hinzufügen',
        'Invalid attribute name': 'Ungültiger Attributname',
        'The attribute could not be set': 'Das Attribut liess sich nicht setzen',

        // Layers
        'Every element of the drawing. Shapes higher in the list are drawn on top. Click to select, drag to reorder (drop onto a group to put it inside), double-click to rename. The eye hides a shape.':
            'Jedes Element der Zeichnung. Formen weiter oben in der Liste liegen vorne. Klicken wählt aus, Ziehen ordnet um (auf eine Gruppe ziehen legt es hinein), Doppelklick benennt um. Das Auge blendet eine Form aus.',
        'Show': 'Einblenden',
        'Hide': 'Ausblenden',
        'One step forward': 'Einen Schritt nach vorne',
        'One step backward': 'Einen Schritt nach hinten',
        'Duplicate': 'Duplizieren',
        'Delete': 'Löschen',
        'Name (id)': 'Name (ID)',
        'Name of the element (id)': 'Name des Elements (ID)',
        'A group cannot be moved into itself': 'Eine Gruppe lässt sich nicht in sich selbst verschieben',
        'This element cannot hold other shapes': 'Dieses Element kann keine anderen Formen enthalten',
        'Use letters, digits, - and _ only, starting with a letter': 'Nur Buchstaben, Ziffern, - und _ verwenden, am Anfang ein Buchstabe',

        // Messages
        'The browser storage is full': 'Der Browserspeicher ist voll',
        'The browser storage is full - download and delete drawings under "My drawings"':
            'Der Browserspeicher ist voll - lade Zeichnungen unter «Meine Zeichnungen» herunter und lösche sie',
        'The browser storage is full - delete or download drawings under "My drawings" first':
            'Der Browserspeicher ist voll - lösche zuerst Zeichnungen unter «Meine Zeichnungen» oder lade sie herunter',
        'The browser storage is full - delete or download some drawings first':
            'Der Browserspeicher ist voll - lösche zuerst ein paar Zeichnungen oder lade sie herunter',
        'Nothing to undo': 'Nichts rückgängig zu machen',
        'Nothing to redo': 'Nichts zu wiederholen',
        'Please fix the error in the code first': 'Bitte behebe zuerst den Fehler im Code',
        'Deleted - Undo brings it back': 'Gelöscht - Rückgängig holt es zurück',
        'Already at the front': 'Schon ganz vorne',
        'Already at the back': 'Schon ganz hinten',
        'Grid on - shapes snap to the grid': 'Raster ein - Formen rasten am Raster ein',
        'Grid off': 'Raster aus',
        'Snap to grid: on': 'Am Raster einrasten: ein',
        'Snap to grid: off - shapes move freely': 'Am Raster einrasten: aus - Formen bewegen sich frei',
        'Code tidied up': 'Code aufgeräumt',
        'This drawing is empty already': 'Diese Zeichnung ist schon leer',
        'Everything in this drawing is removed; its size stays. "Undo" brings it back as long as the page is open.':
            'Alles in dieser Zeichnung wird entfernt; ihre Grösse bleibt. «Rückgängig» holt es zurück, solange die Seite offen ist.',
        'Start over': 'Neu beginnen',
        'Please choose an SVG file': 'Bitte wähle eine SVG-Datei',
        'The file is larger than 8 MB': 'Die Datei ist grösser als 8 MB',
        'SVG pasted from the clipboard': 'SVG aus der Zwischenablage eingefügt',
        'Downloaded': 'Heruntergeladen',
        'Copied to the clipboard': 'In die Zwischenablage kopiert',
        'This browser does not allow copying images': 'Dieser Browser erlaubt kein Kopieren von Bildern',
        'Code copied': 'Code kopiert',
        'SVG downloaded': 'SVG heruntergeladen',
        'The image came out empty.': 'Das erzeugte Bild ist leer.',
        'The drawing could not be rendered as an image.': 'Die Zeichnung liess sich nicht als Bild darstellen.',
        'Add': 'Hinzufügen',
        'Replace': 'Ersetzen',
        'The drawing has no closing </svg> - the new shapes could not be added':
            'Der Zeichnung fehlt das schliessende </svg> - die neuen Formen liessen sich nicht hinzufügen',
        'Drawing received - it has an error, see the code': 'Zeichnung erhalten - sie enthält einen Fehler, siehe Code',
        'Drop the SVG file here': 'SVG-Datei hier ablegen',

        // A link from the AI opened in a tab of its own (ai.js)
        'Open it here': 'Hier öffnen',
        'The link could not be read': 'Der Link liess sich nicht lesen',
        'The drawing in this link is incomplete or damaged. If the AI\'s link was split over several lines (as in a terminal), copy the whole answer and paste it into the editor with Ctrl+V - the editor joins the lines.':
            'Die Zeichnung in diesem Link ist unvollständig oder beschädigt. Wenn der Link der KI über mehrere Zeilen verteilt war (wie in einem Terminal), kopiere die ganze Antwort und füge sie mit Ctrl+V in den Editor ein - der Editor fügt die Zeilen zusammen.',
        'Loading…': 'Wird geladen …',
        'Taken over by your editor': 'Von deinem Editor übernommen',
        'The drawing is now in the SVG Editor tab you already had open. Switch to that tab, or open it here.':
            'Die Zeichnung ist jetzt im SVG-Editor-Tab, den du schon offen hattest. Wechsle zu diesem Tab oder öffne es hier.',

        // Dialogs: shared
        'Close': 'Schliessen',

        // Export
        'Export': 'Exportieren',
        'File name': 'Dateiname',
        'Vector (sharp at any size)': 'Vektor (scharf in jeder Grösse)',
        'SVG as in the editor': 'SVG wie im Editor',
        'SVG tidied up': 'SVG aufgeräumt',
        'SVG shrunk (smallest file)': 'SVG verkleinert (kleinste Datei)',
        'Picture': 'Bild',
        'PNG (transparent background)': 'PNG (transparenter Hintergrund)',
        'Code for websites': 'Code für Websites',
        'Data URI': 'Daten-URI',
        'Base64 data URI': 'Base64-Daten-URI',
        'CSS background-image': 'CSS-Hintergrundbild (background-image)',
        'HTML <img> tag': 'HTML-Tag <img>',
        'React component (JSX)': 'React-Komponente (JSX)',
        '1× (actual size)': '1× (Originalgrösse)',
        'custom': 'eigene',
        'Width (px)': 'Breite (px)',
        'Height (px)': 'Höhe (px)',
        'Background': 'Hintergrund',
        'Background color': 'Hintergrundfarbe',
        'Background color · exported image': 'Hintergrundfarbe · exportiertes Bild',
        'Width and height stay in proportion. JPG has no transparency, so it always gets a background.':
            'Breite und Höhe bleiben im Verhältnis. JPG kennt keine Transparenz und bekommt darum immer einen Hintergrund.',
        'Result': 'Ergebnis',
        'Download every format at once: SVG (3 variants), PNG, JPG, WebP, React, data URI, Base64, CSS and HTML':
            'Alle Formate auf einmal herunterladen: SVG (3 Varianten), PNG, JPG, WebP, React, Daten-URI, Base64, CSS und HTML',
        'All formats (ZIP)': 'Alle Formate (ZIP)',
        'Download': 'Herunterladen',

        // My drawings
        'Search by name': 'Nach Namen suchen',
        'Search your drawings': 'Deine Zeichnungen durchsuchen',
        'Open an SVG file from your computer as a new drawing': 'Eine SVG-Datei von deinem Computer als neue Zeichnung öffnen',
        'New drawing': 'Neue Zeichnung',
        'Click a drawing to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Klicke auf eine Zeichnung, um sie zu öffnen. Sie sind nur in diesem Browser gespeichert - nichts wird hochgeladen. Löschst du die Website-Daten des Browsers, sind sie weg; lade also die herunter, die du behalten willst.',
        'Download every drawing as an .svg file in one ZIP': 'Alle Zeichnungen als .svg-Dateien in einem ZIP herunterladen',
        'Download all (ZIP)': 'Alle herunterladen (ZIP)',
        'No drawings yet.': 'Noch keine Zeichnungen.',
        'Rename': 'Umbenennen',
        'Download as .svg': 'Als .svg herunterladen',
        'This drawing is open': 'Diese Zeichnung ist offen',
        'Click to open this drawing': 'Klicken, um diese Zeichnung zu öffnen',
        'New name': 'Neuer Name',
        'The drawing is removed from this browser for good. Download it first if you want to keep a copy.':
            'Die Zeichnung wird endgültig aus diesem Browser entfernt. Lade sie zuerst herunter, wenn du eine Kopie behalten willst.',

        // AI assistant
        'Any AI can draw with you - ChatGPT, Claude, Gemini, Copilot.': 'Jede KI kann mit dir zeichnen - ChatGPT, Claude, Gemini, Copilot.',
        'Connected AI': 'Verbundene KI',
        'Paste it into your AI and say what it should draw.': 'Füge ihn in deine KI ein und sag, was sie zeichnen soll.',
        // The step after "Copy prompt" inside another website (ai.js rewrites it): its parts
        'The AI answers with a link:': 'Die KI antwortet mit einem Link:',
        'paste its whole answer below': 'füge ihre ganze Antwort unten ein',
        '(a clicked link opens a separate editor).': '(ein angeklickter Link öffnet einen separaten Editor).',
        'takes it back.': 'nimmt es zurück.',
        'The AI answers with a link: click it, or paste the whole answer below.': 'Die KI antwortet mit einem Link: klicke ihn an, oder füge die ganze Antwort unten ein.',
        'Connected to': 'Verbunden mit',
        'the AI sends its result there, and it opens here.': 'die KI sendet ihr Ergebnis dorthin, und es öffnet sich hier.',
        '(no key yet)': '(noch kein Schlüssel)',
        '(key valid while the editor is open)': '(Schlüssel gültig, solange der Editor offen ist)',
        'What': 'Was',
        'tells the AI': 'der KI sagt',
        'The AI should': 'Die KI soll',
        'Change “': '«',          // Change “name” -> «name» ändern
        '”': '» ändern',
        'Make a new drawing': 'Eine neue Zeichnung erstellen',
        'The AI\'s answer (or press Ctrl+V anywhere):': 'Die Antwort der KI (oder drücke irgendwo Ctrl+V):',
        'The drawing travels in the link after the “#”, which no server sees. What you paste into your AI is handled by its provider.':
            'Die Zeichnung reist im Link nach dem «#» mit, und den sieht kein Server. Was du in deine KI einfügst, verarbeitet ihr Anbieter.',
        'The prompt - copy it with Ctrl+C': 'Der Prompt - kopiere ihn mit Ctrl+C',
        'Copy prompt': 'Prompt kopieren',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)': 'Kopieren ist hier nicht erlaubt - der Prompt ist unten markiert: drücke Ctrl+C (⌘C)',
        'Prompt copied - paste it into your AI and say what it should draw': 'Prompt kopiert - füge ihn in deine KI ein und sag, was sie zeichnen soll',
        'This link is incomplete or damaged - please ask the AI to send it again': 'Dieser Link ist unvollständig oder beschädigt - bitte die KI, ihn nochmals zu senden',

        // Save to your server
        'Save to your server': 'Auf deinem Server speichern',
        'Webhook address': 'Webhook-Adresse',
        'Send automatically a few seconds after each change (otherwise only when you click':
            'Automatisch ein paar Sekunden nach jeder Änderung senden (sonst nur, wenn du auf',
        'or press Ctrl+S)': 'klickst oder Ctrl+S drückst)',
        'Only for “': 'Nur für «',
        '” (other drawings use the general address)': '» (andere Zeichnungen nutzen die allgemeine Adresse)',
        'What your server receives': 'Was dein Server erhält',
        'A POST request with JSON (your server must allow CORS from https://svg.giit.ch):':
            'Eine POST-Anfrage mit JSON (dein Server muss CORS von https://svg.giit.ch erlauben):',
        'Embed the editor in your website': 'Den Editor in deine Website einbetten',
        'Send now': 'Jetzt senden',
        'Save setting': 'Einstellung speichern',

        // Help
        'How it works': 'So funktioniert es',
        'Keyboard shortcuts': 'Tastenkürzel',
        'Select and move': 'Auswählen und verschieben',
        'Rectangle, ellipse, line, freehand, text': 'Rechteck, Ellipse, Linie, Freihand, Text',
        'Zoom': 'Zoomen',
        'Drag with the mouse wheel pressed': 'Mit gedrücktem Mausrad ziehen',
        'Double-click the mouse wheel': 'Doppelklick mit dem Mausrad',
        'Fit to window / actual size': 'Ins Fenster einpassen / Originalgrösse',
        'Grid on/off / snap on/off': 'Raster ein/aus / Einrasten ein/aus',
        'Arrow keys': 'Pfeiltasten',
        'Only horizontal/vertical, keep proportions': 'Nur waagrecht/senkrecht, Seitenverhältnis behalten',
        'Select the surrounding group': 'Die umgebende Gruppe auswählen',
        'Remove the selection': 'Die Auswahl entfernen',
        'Undo / redo': 'Rückgängig / wiederholen',
        'Download SVG (or save to your server) / export': 'SVG herunterladen (oder auf deinem Server speichern) / exportieren',
        'Deselect': 'Auswahl aufheben',

        // Color picker (colorpicker.js)
        'Color': 'Farbe',
        'Saturation and brightness (arrow keys)': 'Sättigung und Helligkeit (Pfeiltasten)',
        'Hue': 'Farbton',
        'Before - click to go back': 'Vorher - klicken, um dahin zurückzugehen',
        'New color': 'Neue Farbe',
        'Color as hex code, e.g. #ff0000': 'Farbe als Hex-Code, z. B. #ff0000',
        'Done': 'Fertig',
        'Colors in this drawing': 'Farben in dieser Zeichnung',
        'Basic colors': 'Grundfarben',
        /* ---------- Template placeholders (?template=) ---------- */
        'The drawing holds placeholders - its code stays as written': 'Die Zeichnung enthält Platzhalter - ihr Code bleibt, wie er ist',
        'The style holds placeholders - edit it in the code': 'Der Stil enthält Platzhalter - bearbeite ihn im Code',
    },

    html: {
        // AI assistant
        'Click <b>Copy prompt</b>.': 'Klicke auf <b>Prompt kopieren</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'Die KI antwortet mit einem Link: klicke ihn an, oder füge die ganze Antwort unten ein. <b>Rückgängig</b> nimmt es zurück.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'Die KI antwortet mit einem Link: <b>füge ihre ganze Antwort unten ein</b> (ein angeklickter Link öffnet einen separaten Editor). <b>Rückgängig</b> nimmt es zurück.',

        // Save to your server
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your drawings are kept where you want them. Nothing is sent until you enter an address here.':
            'Der Editor kann jede gespeicherte Fassung an deinen eigenen Server senden (einen <b>Webhook</b>), damit deine Zeichnungen dort liegen, wo du sie haben willst. Gesendet wird erst, wenn du hier eine Adresse eingibst.',
        'Token <small>(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)</small>': 'Token <small>(optional, wird als «Authorization: Bearer …» gesendet; bleibt nur, bis dieser Tab geschlossen wird)</small>',
        'Also possible: <code>?src=&lt;URL of an .svg file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this drawing there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>svgeditor:ai</code>, <code>svgeditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Ebenfalls möglich: <code>?src=&lt;URL einer .svg-Datei&gt;</code> öffnet eine Datei, <code>&amp;webhook=&lt;URL&gt;</code> speichert diese Zeichnung dort. Der Editor kann sich auch in einem eigenen Fenster öffnen (<code>?embed=window</code>), und deine Seite kann ihm einen eigenen KI-Prompt und einen Sitzungsschlüssel übergeben, damit die KI ihr Ergebnis an deinen Server sendet (<code>svgeditor:ai</code>, <code>svgeditor:key-request</code>) - siehe «Den Editor auf deiner eigenen Website nutzen» unter dem Editor. Details stehen in <a href="/llms.txt">llms.txt</a>.',

        // Help
        '<b>Open</b> an SVG file, drag it into the window or paste SVG code - or start with <b>New</b>.':
            '<b>Öffne</b> eine SVG-Datei, zieh sie ins Fenster oder füge SVG-Code ein - oder beginne mit <b>Neu</b>.',
        '<b>My drawings</b> (the folder button at the top left) lists every drawing kept in this browser: open, rename, duplicate, download or delete them.':
            '<b>Meine Zeichnungen</b> (die Ordnerschaltfläche oben links) zeigt alle Zeichnungen in diesem Browser: öffnen, umbenennen, duplizieren, herunterladen oder löschen.',
        '<b>Click a shape</b> on the canvas. Drag it to move it, drag the small squares to resize it. Colors, size and position are under <b>Properties</b> on the right.':
            '<b>Klicke eine Form</b> auf der Zeichenfläche an. Zieh sie, um sie zu verschieben, und die kleinen Quadrate, um ihre Grösse zu ändern. Farben, Grösse und Position findest du rechts unter <b>Eigenschaften</b>.',
        '<b>Draw</b> new shapes with the tools above the canvas.': '<b>Zeichne</b> neue Formen mit den Werkzeugen über der Zeichenfläche.',
        'The <b>code</b> on the left always shows the current drawing and can be edited directly.':
            'Der <b>Code</b> links zeigt immer die aktuelle Zeichnung und lässt sich direkt bearbeiten.',
        '<b>Download SVG</b> saves the file, <b>Export</b> offers pictures (PNG, JPG) and code for websites.':
            '<b>SVG herunterladen</b> speichert die Datei, <b>Exportieren</b> bietet Bilder (PNG, JPG) und Code für Websites.',
        'Made a mistake? <b>Undo</b> takes back every step. Your drawings are kept in this browser, even after closing the page.':
            'Etwas falsch gemacht? <b>Rückgängig</b> nimmt jeden Schritt zurück. Deine Zeichnungen bleiben in diesem Browser, auch wenn du die Seite schliesst.',
        '<kbd>H</kbd> / hold <kbd>Space</kbd>': '<kbd>H</kbd> / <kbd>Leertaste</kbd> halten',
        'Mouse wheel, <kbd>+</kbd> <kbd>-</kbd>': 'Mausrad, <kbd>+</kbd> <kbd>-</kbd>',
        'Move the selection by 1, with <kbd>Shift</kbd> by 10': 'Die Auswahl um 1 verschieben, mit <kbd>Shift</kbd> um 10',
        '<kbd>Shift</kbd> while dragging': '<kbd>Shift</kbd> beim Ziehen',
        '<kbd>Alt</kbd> + click': '<kbd>Alt</kbd> + Klick',
        '<kbd>Delete</kbd>': '<kbd>Entf</kbd>',
        'Forward / backward (with <kbd>Shift</kbd>: to front / to back)': 'Nach vorne / nach hinten (mit <kbd>Shift</kbd>: ganz nach vorne / ganz nach hinten)',
        'In the code: <kbd>Tab</kbd> indents, <kbd>Shift</kbd>+<kbd>Tab</kbd> outdents, clicking into a tag selects that shape on the canvas.':
            'Im Code: <kbd>Tab</kbd> rückt ein, <kbd>Shift</kbd>+<kbd>Tab</kbd> rückt aus, ein Klick in ein Tag wählt diese Form auf der Zeichenfläche aus.',
    },

    patterns: [
        // Canvas hint with the grid
        ['^(.*?) ?Snapping to a ([\\d.]+) grid\\.$', (m, h, n) => `${h ? (HINT[h] || h) + ' ' : ''}Rastet am Raster (${n}) ein.`],
        ['^(.*?) ?Snap: ([\\d.]+)\\.$', (m, h, n) => `${h ? (HINT[h] || h) + ' ' : ''}Einrasten: ${n}.`],

        // Code
        ['^(\\d+) lines · (.+)$', (m, n, s) => `${n} ${n === '1' ? 'Zeile' : 'Zeilen'} · ${s}`],
        ['^Line (\\d+), column (\\d+):$', (m, l, c) => `Zeile ${l}, Spalte ${c}:`],
        ['^Line (\\d+):$', (m, l) => `Zeile ${l}:`],
        ['^Line (\\d+), column (\\d+): (.*)$', (m, l, c, t) => `Zeile ${l}, Spalte ${c}: ${CODE_ERROR[t] || t}`],
        ['^Line (\\d+): (.*)$', (m, l, t) => `Zeile ${l}: ${CODE_ERROR[t] || t}`],
        ['^File shrunk: (\\d+) → (\\d+) bytes$', 'Datei verkleinert: $1 → $2 Bytes'],

        // Properties
        [`^(Fill|Outline) color · (whole drawing|${TYPE_ANY})( #.+)?$`, (m, w, t, id) =>
            `${w === 'Fill' ? 'Füllfarbe' : 'Konturfarbe'} · ${t === 'whole drawing' ? 'ganze Zeichnung' : translateLabel(t)}${id || ''}`],
        ['^(.+) \\(inherited\\)$', '$1 (geerbt)'],
        ['^Remove ([A-Za-z_:][\\w:.-]*)$', '$1 entfernen'],

        // Layers
        ['^<([^>]+)> - click to select, double-click to rename, drag to reorder$', '<$1> - klicken wählt aus, Doppelklick benennt um, Ziehen ordnet um'],
        ['^<([^>]+)> - click to select$', '<$1> - klicken wählt aus'],
        [`^Show ${TYPE}$`, (m, t) => `${translateLabel(t)} einblenden`],
        [`^Hide ${TYPE}$`, (m, t) => `${translateLabel(t)} ausblenden`],
        [`^Move ${TYPE} forward$`, (m, t) => `${translateLabel(t)} nach vorne`],
        [`^Move ${TYPE} backward$`, (m, t) => `${translateLabel(t)} nach hinten`],
        [`^Duplicate ${TYPE}$`, (m, t) => `${translateLabel(t)} duplizieren`],
        [`^Delete ${TYPE}$`, (m, t) => `${translateLabel(t)} löschen`],
        ['^The name “(.+)” is already used$', 'Der Name «$1» ist schon vergeben'],

        // The open drawing
        ['^"(.+)" is open\\. My drawings: open, rename, duplicate or delete your drawings \\(Ctrl\\+O\\)$',
            '«$1» ist offen. Meine Zeichnungen: öffnen, umbenennen, duplizieren oder löschen (Ctrl+O)'],
        ['^Start "(.+)" over\\?$', '«$1» neu beginnen?'],
        ['^Start "(.+)" over$', '«$1» neu beginnen'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '«$1» ist jetzt leer - «Rückgängig» holt es zurück'],
        ['^Opened "(.+)" - it is now in "My drawings"$', '«$1» geöffnet - sie ist jetzt in «Meine Zeichnungen»'],
        ['^New drawing "(.+)" from the AI - your other drawings are unchanged$', 'Neue Zeichnung «$1» von der KI - deine anderen Zeichnungen bleiben unverändert'],
        ['^New drawing "(.+)" - your other drawings are under "My drawings"$', 'Neue Zeichnung «$1» - deine anderen Zeichnungen sind unter «Meine Zeichnungen»'],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '«$1» von der KI geändert - «Rückgängig» nimmt es zurück'],
        ['^"(.+)" opened$', '«$1» geöffnet'],

        // Export
        ['^(\\d+) × (\\d+) pixels$', '$1 × $2 Pixel'],
        ['^([\\d,]+) bytes$', m => formatBytes(m)],
        ['^ZIP with 11 files downloaded \\(pictures (\\d+) × (\\d+) px\\)$', 'ZIP mit 11 Dateien heruntergeladen (Bilder $1 × $2 px)'],

        // My drawings
        ['^(\\d+) (?:drawing|drawings) · (.+) in this browser$', (m, n, s) => `${n} ${translateDrawings(n)} · ${formatBytes(s)} in diesem Browser`],
        ['^Open now · (.+)$', (m, s) => `Jetzt offen · ${formatBytes(s)}`],
        ['^just now · (.+)$', (m, s) => `gerade eben · ${formatBytes(s)}`],
        ['^(\\d+) min ago · (.+)$', (m, n, s) => `vor ${n} Min. · ${formatBytes(s)}`],
        ['^(\\d+) h ago · (.+)$', (m, n, s) => `vor ${n} Std. · ${formatBytes(s)}`],
        ['^yesterday · (.+)$', (m, s) => `gestern · ${formatBytes(s)}`],
        ['^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\\d{1,2}), (\\d{4}) · (.+)$', (m, mo, d, y, s) => `${d}. ${MONTH[mo]} ${y} · ${formatBytes(s)}`],
        ['^(.+) \\(open now\\)$', '$1 (jetzt offen)'],
        ['^Open (.+)$', '$1 öffnen'],
        ['^No drawing named "(.*)"\\.$', 'Keine Zeichnung namens «$1».'],
        ['^Delete "(.+)"\\?$', '«$1» löschen?'],
        ['^"(.+)" duplicated$', '«$1» dupliziert'],
        ['^"(.+)" deleted$', '«$1» gelöscht'],
        ['^ZIP with (\\d+) (?:drawing|drawings) downloaded$', (m, n) => `ZIP mit ${n} ${translateDrawings(n)} heruntergeladen`],

        // AI
        ['^Part (\\d+) of (\\d+) received$', 'Teil $1 von $2 erhalten'],
        ['^Open the other (link|links) from the AI too \\(still missing: part (.+)\\)\\.$',
            (m, l, p) => `Öffne auch ${l === 'link' ? 'den anderen Link' : 'die anderen Links'} der KI (es fehlt noch: Teil ${p}).`],
        ['^Part (\\d+) of (\\d+) received - paste the other (link|links) too \\(missing: (.+)\\)$',
            (m, a, b, l, p) => `Teil ${a} von ${b} erhalten - füge auch ${l === 'link' ? 'den anderen Link' : 'die anderen Links'} ein (es fehlt: ${p})`],
        ['^The AI sends the drawing to (.+) with a key that only works for this session\\. What you paste into your AI is handled by its provider\\.$',
            'Die KI sendet die Zeichnung mit einem Schlüssel, der nur für diese Sitzung gilt, an $1. Was du in deine KI einfügst, verarbeitet ihr Anbieter.'],
        ['^The AI sends its result to (.+) by itself, and it opens here\\. If it answers with a link, paste its answer below\\.$',
            'Die KI sendet ihr Ergebnis von selbst an $1, und es öffnet sich hier. Antwortet sie mit einem Link, füge ihre Antwort unten ein.'],
        ['^No key from (.+) - the prompt asks the AI for a link instead$', 'Kein Schlüssel von $1 - der Prompt bittet die KI stattdessen um einen Link'],
        ['^Prompt copied - the AI sends its result to (.+)$', 'Prompt kopiert - die KI sendet ihr Ergebnis an $1'],
    ],
};
