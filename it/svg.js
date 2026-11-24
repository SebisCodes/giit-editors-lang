/* Italian texts of the SVG editor: the bar, the canvas and its tools, the
   properties and layers, the dialogs (export, my drawings, AI, server, help),
   the color picker and the messages. What all editors share is in
   common.js; how the dictionaries are used is described in i18n.js.
   Names of drawings and elements are kept as they are and shown in «…». */

/* Names of the element types (LABELS in app.js). */
const LABEL = {
    'Drawing': 'Disegno', 'Rectangle': 'Rettangolo', 'Circle': 'Cerchio', 'Ellipse': 'Ellisse', 'Line': 'Linea',
    'Polyline': 'Polilinea', 'Polygon': 'Poligono', 'Path': 'Tracciato', 'Text': 'Testo', 'Group': 'Gruppo', 'Image': 'Immagine',
    'Reused element': 'Elemento riutilizzato', 'Nested SVG': 'SVG annidato', 'Link': 'Link',
    'Embedded content': 'Contenuto incorporato', 'Definitions': 'Definizioni', 'Linear gradient': 'Gradiente lineare',
    'Radial gradient': 'Gradiente radiale', 'Gradient stop': 'Punto del gradiente', 'Clip path': 'Tracciato di ritaglio',
    'Mask': 'Maschera', 'Pattern': 'Motivo', 'Symbol': 'Simbolo', 'Style sheet': 'Foglio di stile', 'Title': 'Titolo',
    'Description': 'Descrizione', 'Filter': 'Filtro', 'Marker': 'Marcatore', 'Switch': 'Scelta condizionale', 'Metadata': 'Metadati',
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
    'Click a shape to select it. Drag an empty spot to move the view.': 'Fai clic su una forma per selezionarla. Trascina un punto vuoto per spostare la vista.',
    'Drag the shape to move it, or a small square to resize it. Delete key removes it.': 'Trascina la forma per spostarla, o un quadratino per ridimensionarla. Il tasto Canc la rimuove.',
    'Drag to move the view. Use the mouse wheel to zoom.': 'Trascina per spostare la vista. Usa la rotellina del mouse per lo zoom.',
    'Drag to draw a rectangle. Hold Shift for a square.': 'Trascina per disegnare un rettangolo. Tieni premuto Shift per un quadrato.',
    'Drag to draw an ellipse. Hold Shift for a circle.': 'Trascina per disegnare un\'ellisse. Tieni premuto Shift per un cerchio.',
    'Drag to draw a line. Hold Shift for straight angles.': 'Trascina per disegnare una linea. Tieni premuto Shift per angoli retti.',
    'Hold the mouse button down and draw.': 'Tieni premuto il pulsante del mouse e disegna.',
    'Click where the text should start.': 'Fai clic dove deve iniziare il testo.',
    'Tap a shape to select it. Swipe to scroll.': 'Tocca una forma per selezionarla. Scorri per spostarti.',
    'Drag it to move, drag a square to resize.': 'Trascinala per spostarla, trascina un quadratino per ridimensionarla.',
    'Drag to move the view, pinch to zoom.': 'Trascina per spostare la vista, pizzica per lo zoom.',
    'Drag to draw a rectangle.': 'Trascina per disegnare un rettangolo.',
    'Drag to draw an ellipse.': 'Trascina per disegnare un\'ellisse.',
    'Drag to draw a line.': 'Trascina per disegnare una linea.',
    'Draw with your finger.': 'Disegna con il dito.',
    'Tap where the text should start.': 'Tocca dove deve iniziare il testo.',
};

/* The editor's own messages about the code (parse() in export.js); the browser's messages stay as they are. */
const CODE_ERROR = {
    'The outermost element must be <svg>.': 'L\'elemento più esterno deve essere <svg>.',
    'The <svg> element is missing xmlns="http://www.w3.org/2000/svg".': 'All\'elemento <svg> manca xmlns="http://www.w3.org/2000/svg".',
};

/**
 * Translates a size in bytes ("1,234 bytes").
 * @param {string} s - the English size text.
 * @returns {string} the text in the language.
 */
const formatBytes = s => s.replace(/^([\d,]+) bytes$/, (m, n) => `${n.replace(/,/g, '.')} byte`);
const MONTH = { Jan: 'gen', Feb: 'feb', Mar: 'mar', Apr: 'apr', May: 'mag', Jun: 'giu', Jul: 'lug', Aug: 'ago', Sep: 'set', Oct: 'ott', Nov: 'nov', Dec: 'dic' };
/**
 * Translates the text the pattern found (drawings in the English pattern).
 * @param {string} n - the English text the pattern found.
 * @returns {string} the text in the language.
 */
const translateDrawings = n => (n === '1' ? 'disegno' : 'disegni');

const dict = {
    text: {
        'Show or hide the side panel': 'Mostra o nascondi il pannello laterale',
        'Examples': 'Esempi',
        'Template': 'Modello',
        'The template with its placeholders as written': 'Il modello con i suoi segnaposto così come sono scritti',
        'Placeholders': 'Segnaposto',
        'The placeholders of the template - a click on one puts its tag at the cursor': 'I segnaposto del modello - fai clic su uno per inserire il suo tag al cursore',
        'Shown': 'Mostrato',
        'Hidden': 'Nascosto',
        'View of the drawing': 'Vista del disegno',
        'The drawing filled with the examples': 'Il disegno compilato con gli esempi',
        'The examples could not be filled in - the canvas shows the template': 'Impossibile inserire gli esempi - la tela mostra il modello',
        'This text shows an example - edit it in the code or in the template view': 'Questo testo mostra un esempio - modificalo nel codice o nella vista del modello',
        /* Words that are the same in German and English, so not in the German pack */
        'Code': 'Codice',
        'Format': 'Formato',
        'Name': 'Nome',

        ...LABEL,
        ...HINT,
        ...CODE_ERROR,

        // Top bar
        'SVG Editor': 'Editor SVG',
        'SVG Editor - home': 'Editor SVG - pagina iniziale',
        'File': 'File',
        'My drawings': 'I miei disegni',
        'My drawings (Ctrl+O)': 'I miei disegni (Ctrl+O)',
        'New drawing, or start this one over': 'Nuovo disegno o ricomincia da capo questo',
        'New': 'Nuovo',
        'New blank drawing': 'Nuovo disegno vuoto',
        'Your other drawings stay as they are': 'Gli altri tuoi disegni restano come sono',
        'New from the example': 'Nuovo dall\'esempio',
        'A copy of the editor logo to try things out': 'Una copia del logo dell\'editor per fare prove',
        'Start this drawing over': 'Ricomincia questo disegno',
        'Empties it but keeps its size - "Undo" brings it back': 'Lo svuota ma ne mantiene le dimensioni - «Annulla» lo ripristina',
        'Open an SVG file from your computer as a new drawing (you can also drag a file into the window)':
            'Apri un file SVG dal tuo computer come nuovo disegno (puoi anche trascinare un file nella finestra)',
        'Open file…': 'Apri file…',
        'Undo the last change (Ctrl+Z)': 'Annulla l\'ultima modifica (Ctrl+Z)',
        'Undo': 'Annulla',
        'Redo the change you just undid (Ctrl+Y)': 'Ripeti la modifica appena annullata (Ctrl+Y)',
        'Redo': 'Ripeti',
        'Output': 'Output',
        'Color theme': 'Tema dei colori',
        'Light theme': 'Tema chiaro',
        'Dark theme': 'Tema scuro',
        'Same as your system setting': 'Come nelle impostazioni del sistema',
        'Automatic theme (system setting)': 'Tema automatico (impostazione di sistema)',
        'Let any AI draw in this editor': 'Lascia che qualsiasi IA disegni in questo editor',
        'AI Assistant': 'Assistente IA',
        'Save to your own server and embed the editor in your website':
            'Salva sul tuo server e integra l\'editor nel tuo sito web',
        'Save to server': 'Salva sul server',
        'How it works and keyboard shortcuts (?)': 'Come funziona e scorciatoie da tastiera (?)',
        'Help': 'Aiuto',
        'Save the drawing as an .svg file (Ctrl+S)': 'Salva il disegno come file .svg (Ctrl+S)',
        'Download SVG': 'Scarica SVG',
        'Save as PNG, JPG, WebP, data URI, React and more (Ctrl+E)': 'Salva come PNG, JPG, WebP, data URI, React e altro (Ctrl+E)',
        'Export…': 'Esporta…',

        // View tabs and the code
        'View': 'Vista',
        'Edit': 'Modifica',
        'Side panel': 'Pannello laterale',
        'Canvas': 'Tela',
        'Properties': 'Proprietà',
        'SVG code': 'Codice SVG',
        'Copy the SVG code to the clipboard': 'Copia il codice SVG negli appunti',
        'Copy code': 'Copia codice',
        'Copy': 'Copia',
        'Indent and arrange the code neatly': 'Indenta e ordina il codice',
        'Tidy up': 'Riordina',
        'Remove comments and spaces to make the file smaller': 'Rimuovi commenti e spazi per rendere il file più piccolo',
        'Shrink': 'Comprimi',
        'Drag to change the width of the code area': 'Trascina per cambiare la larghezza dell\'area del codice',
        'Drag to change the width': 'Trascina per cambiare la larghezza',
        'Error in the code.': 'Errore nel codice.',
        'The preview shows the last working version.': 'L\'anteprima mostra l\'ultima versione funzionante.',
        'The preview shows the last working version': 'L\'anteprima mostra l\'ultima versione funzionante',
        'Add xmlns': 'Aggiungi xmlns',

        // Tools, grid, view
        'Tools': 'Strumenti',
        'Select and move shapes (V)': 'Seleziona e sposta le forme (V)',
        'Select': 'Seleziona',
        'Move the view (H, or hold the space bar)': 'Sposta la vista (H, o tieni premuta la barra spaziatrice)',
        'Move the view': 'Sposta la vista',
        'Draw a rectangle (R)': 'Disegna un rettangolo (R)',
        'Draw an ellipse or circle (E)': 'Disegna un\'ellisse o un cerchio (E)',
        'Draw a line (L)': 'Disegna una linea (L)',
        'Draw freehand (P)': 'Disegna a mano libera (P)',
        'Freehand': 'Mano libera',
        'Add text (T)': 'Aggiungi testo (T)',
        'Show the grid and snap shapes to it (#)': 'Mostra la griglia e aggancia le forme (#)',
        'Grid': 'Griglia',
        'Distance between grid lines, in the drawing\'s units': 'Distanza tra le linee della griglia, nelle unità del disegno',
        'Spacing': 'Passo',
        'Shapes jump onto the grid lines when moved or drawn (G)': 'Le forme si agganciano alle linee della griglia quando le sposti o le disegni (G)',
        'Snap': 'Aggancia',
        'Canvas: click shapes, drag them, resize them with the handles': 'Tela: fai clic sulle forme, trascinale, ridimensionale con le maniglie',
        'Background of the preview': 'Sfondo dell\'anteprima',
        'Background behind the drawing (only for viewing, not saved in the file)': 'Sfondo dietro il disegno (solo per la visualizzazione, non salvato nel file)',
        'Checkered background': 'Sfondo a scacchi',
        'White background': 'Sfondo bianco',
        'Dark background': 'Sfondo scuro',
        'No background': 'Nessuno sfondo',
        'Zoom out (-)': 'Riduci (-)',
        'Zoom out': 'Riduci',
        'Show at actual size (1)': 'Mostra a grandezza reale (1)',
        'Zoom in (+)': 'Ingrandisci (+)',
        'Zoom in': 'Ingrandisci',
        'Fit the drawing into the window (0)': 'Adatta il disegno alla finestra (0)',
        'Fit to window': 'Adatta alla finestra',
        'Fix the error in the code to edit the shapes again.': 'Correggi l\'errore nel codice per poter modificare di nuovo le forme.',

        // Properties
        'Colors, size and position of the selected shape': 'Colori, dimensioni e posizione della forma selezionata',
        'All elements of the drawing as a list': 'Tutti gli elementi del disegno come elenco',
        'Layers': 'Livelli',
        'The code contains an error. Once it is fixed, the shapes can be edited here again.':
            'Il codice contiene un errore. Una volta corretto, qui potrai modificare di nuovo le forme.',
        'No valid SVG loaded.': 'Nessun SVG valido caricato.',
        'Position in the document': 'Posizione nel documento',
        'Document': 'Documento',
        'Width': 'Larghezza',
        'Height': 'Altezza',
        'x y width height': 'x y larghezza altezza',
        'Click a shape on the canvas or in the Layers list to edit it. Alt+click selects the surrounding group.':
            'Fai clic su una forma nella tela o nell\'elenco dei livelli per modificarla. Alt+clic seleziona il gruppo che la contiene.',
        'Colors for new shapes': 'Colori per le nuove forme',
        'Fill': 'Riempimento',
        'Outline': 'Contorno',
        'Outline width': 'Spessore del contorno',
        'None': 'Nessuno',
        'Fill color of new shapes': 'Colore di riempimento delle nuove forme',
        'Outline color of new shapes': 'Colore del contorno delle nuove forme',
        'Outline width of new shapes': 'Spessore del contorno delle nuove forme',
        'Fill color · new shapes': 'Colore di riempimento · nuove forme',
        'Outline color · new shapes': 'Colore del contorno · nuove forme',
        'Pick the fill color': 'Scegli il colore di riempimento',
        'Pick the outline color': 'Scegli il colore del contorno',
        'Fill color': 'Colore di riempimento',
        'Outline color': 'Colore del contorno',
        'Fill color as text': 'Colore di riempimento come testo',
        'Outline color as text': 'Colore del contorno come testo',
        'Color as text, e.g. #ff0000, red or none': 'Colore come testo, ad es. #ff0000, red o none',
        'No fill': 'Nessun riempimento',
        'No outline': 'Nessun contorno',
        'Uses a gradient or pattern - picking a color replaces it.': 'Usa un gradiente o un motivo - scegliere un colore lo sostituisce.',
        'Opacity': 'Opacità',
        'Overall opacity': 'Opacità complessiva',
        'Line style': 'Stile della linea',
        'solid': 'continua',
        'dashed': 'tratteggiata',
        'dotted': 'punteggiata',
        'dash-dot': 'tratto-punto',
        'Line ends': 'Estremità',
        'default': 'predefinito',
        'flat': 'piatte',
        'round': 'arrotondate',
        'square': 'quadrate',
        'Corners': 'Angoli',
        'sharp': 'vivi',
        'beveled': 'smussati',
        'This text contains further elements (e.g. tspan) - please edit it in the code.':
            'Questo testo contiene altri elementi (ad es. tspan) - modificalo nel codice.',
        'Size': 'Dimensione',
        'Weight': 'Spessore',
        'light': 'sottile',
        'normal': 'normale',
        'semi-bold': 'semigrassetto',
        'bold': 'grassetto',
        'black': 'nero',
        'Font': 'Carattere',
        'Alignment': 'Allineamento',
        'left': 'sinistra',
        'center': 'centro',
        'right': 'destra',
        'Position and size': 'Posizione e dimensioni',
        'Left edge': 'Bordo sinistro',
        'Top edge': 'Bordo superiore',
        'W': 'L',
        'Rotate 15° to the left': 'Ruota di 15° a sinistra',
        'Rotate 15° to the right': 'Ruota di 15° a destra',
        '⟲ Rotate left': '⟲ Ruota a sinistra',
        '⟳ Rotate right': '⟳ Ruota a destra',
        'Mirror left to right': 'Rifletti in orizzontale: scambia sinistra e destra',
        'Mirror top to bottom': 'Rifletti in verticale: scambia alto e basso',
        '⇆ Flip horizontal': '⇆ Rifletti orizz.',
        '⇅ Flip vertical': '⇅ Rifletti vert.',
        'Arrange': 'Disponi',
        'Shapes further down in the code are drawn on top.': 'Le forme più in basso nel codice vengono disegnate sopra.',
        'One step forward (Ctrl+↑)': 'Un livello avanti (Ctrl+↑)',
        'One step backward (Ctrl+↓)': 'Un livello indietro (Ctrl+↓)',
        'Bring to front (Ctrl+Shift+↑)': 'Porta in primo piano (Ctrl+Shift+↑)',
        'Send to back (Ctrl+Shift+↓)': 'Porta in fondo (Ctrl+Shift+↓)',
        '↑ Forward': '↑ Avanti',
        '↓ Backward': '↓ Indietro',
        '⤒ To front': '⤒ In primo piano',
        '⤓ To back': '⤓ In fondo',
        'Make a copy (Ctrl+D)': 'Crea una copia (Ctrl+D)',
        'Remove this shape (Delete key)': 'Rimuovi questa forma (tasto Canc)',
        '⧉ Duplicate': '⧉ Duplica',
        '✕ Delete': '✕ Elimina',
        'All attributes (advanced)': 'Tutti gli attributi (avanzato)',
        'Remove attribute': 'Rimuovi attributo',
        'Value': 'Valore',
        'New attribute: name': 'Nuovo attributo: nome',
        'New attribute: value': 'Nuovo attributo: valore',
        'Add attribute': 'Aggiungi attributo',
        'Invalid attribute name': 'Nome di attributo non valido',
        'The attribute could not be set': 'Impossibile impostare l\'attributo',

        // Layers
        'Every element of the drawing. Shapes higher in the list are drawn on top. Click to select, drag to reorder (drop onto a group to put it inside), double-click to rename. The eye hides a shape.':
            'Ogni elemento del disegno. Le forme più in alto nell\'elenco vengono disegnate sopra. Clic per selezionare, trascina per riordinare (rilascia su un gruppo per inserirvi la forma), doppio clic per rinominare. L\'occhio nasconde una forma.',
        'Show': 'Mostra',
        'Hide': 'Nascondi',
        'One step forward': 'Un livello avanti',
        'One step backward': 'Un livello indietro',
        'Duplicate': 'Duplica',
        'Delete': 'Elimina',
        'Name (id)': 'Nome (id)',
        'Name of the element (id)': 'Nome dell\'elemento (id)',
        'A group cannot be moved into itself': 'Un gruppo non può essere spostato dentro sé stesso',
        'This element cannot hold other shapes': 'Questo elemento non può contenere altre forme',
        'Use letters, digits, - and _ only, starting with a letter': 'Usa solo lettere, cifre, - e _, iniziando con una lettera',

        // Messages
        'The browser storage is full': 'La memoria del browser è piena',
        'The browser storage is full - download and delete drawings under "My drawings"':
            'La memoria del browser è piena - scarica ed elimina disegni in «I miei disegni»',
        'The browser storage is full - delete or download drawings under "My drawings" first':
            'La memoria del browser è piena - prima elimina o scarica disegni in «I miei disegni»',
        'The browser storage is full - delete or download some drawings first':
            'La memoria del browser è piena - prima elimina o scarica alcuni disegni',
        'Nothing to undo': 'Niente da annullare',
        'Nothing to redo': 'Niente da ripetere',
        'Please fix the error in the code first': 'Prima correggi l\'errore nel codice',
        'Deleted - Undo brings it back': 'Eliminato - Annulla lo ripristina',
        'Already at the front': 'Già in primo piano',
        'Already at the back': 'Già in fondo',
        'Grid on - shapes snap to the grid': 'Griglia attiva - le forme si agganciano alla griglia',
        'Grid off': 'Griglia disattivata',
        'Snap to grid: on': 'Aggancio alla griglia: attivo',
        'Snap to grid: off - shapes move freely': 'Aggancio alla griglia: disattivato - le forme si muovono liberamente',
        'Code tidied up': 'Codice riordinato',
        'This drawing is empty already': 'Questo disegno è già vuoto',
        'Everything in this drawing is removed; its size stays. "Undo" brings it back as long as the page is open.':
            'Viene rimosso tutto da questo disegno; le dimensioni restano. «Annulla» lo ripristina finché la pagina è aperta.',
        'Start over': 'Ricomincia',
        'Please choose an SVG file': 'Scegli un file SVG',
        'The file is larger than 8 MB': 'Il file supera gli 8 MB',
        'SVG pasted from the clipboard': 'SVG incollato dagli appunti',
        'Downloaded': 'Scaricato',
        'Copied to the clipboard': 'Copiato negli appunti',
        'This browser does not allow copying images': 'Questo browser non consente di copiare immagini',
        'Code copied': 'Codice copiato',
        'SVG downloaded': 'SVG scaricato',
        'The image came out empty.': 'L\'immagine è risultata vuota.',
        'The drawing could not be rendered as an image.': 'Impossibile rappresentare il disegno come immagine.',
        'Add': 'Aggiungi',
        'Replace': 'Sostituisci',
        'The drawing has no closing </svg> - the new shapes could not be added':
            'Al disegno manca la chiusura </svg> - impossibile aggiungere le nuove forme',
        'Drawing received - it has an error, see the code': 'Disegno ricevuto - contiene un errore, vedi il codice',
        'Drop the SVG file here': 'Rilascia qui il file SVG',

        // A link from the AI opened in a tab of its own (ai.js)
        'Open it here': 'Aprilo qui',
        'The link could not be read': 'Impossibile leggere il link',
        'The drawing in this link is incomplete or damaged. If the AI\'s link was split over several lines (as in a terminal), copy the whole answer and paste it into the editor with Ctrl+V - the editor joins the lines.':
            'Il disegno in questo link è incompleto o danneggiato. Se il link dell\'IA era diviso su più righe (come in un terminale), copia l\'intera risposta e incollala nell\'editor con Ctrl+V - l\'editor unisce le righe.',
        'Loading…': 'Caricamento…',
        'Taken over by your editor': 'Ricevuto dal tuo editor',
        'The drawing is now in the SVG Editor tab you already had open. Switch to that tab, or open it here.':
            'Il disegno ora si trova nella scheda dell\'Editor SVG che avevi già aperto. Passa a quella scheda o aprilo qui.',

        // Dialogs: shared
        'Close': 'Chiudi',

        // Export
        'Export': 'Esporta',
        'File name': 'Nome del file',
        'Vector (sharp at any size)': 'Vettoriale (nitido a qualsiasi dimensione)',
        'SVG as in the editor': 'SVG come nell\'editor',
        'SVG tidied up': 'SVG riordinato',
        'SVG shrunk (smallest file)': 'SVG compresso (file più piccolo)',
        'Picture': 'Immagine',
        'PNG (transparent background)': 'PNG (sfondo trasparente)',
        'Code for websites': 'Codice per siti web',
        'Data URI': 'Data URI',
        'Base64 data URI': 'Data URI Base64',
        'CSS background-image': 'Immagine di sfondo CSS (background-image)',
        'HTML <img> tag': 'Tag HTML <img>',
        'React component (JSX)': 'Componente React (JSX)',
        '1× (actual size)': '1× (grandezza reale)',
        'custom': 'personalizzata',
        'Width (px)': 'Larghezza (px)',
        'Height (px)': 'Altezza (px)',
        'Background': 'Sfondo',
        'Background color': 'Colore di sfondo',
        'Background color · exported image': 'Colore di sfondo · immagine esportata',
        'Width and height stay in proportion. JPG has no transparency, so it always gets a background.':
            'Larghezza e altezza restano proporzionate. Il JPG non ha trasparenza, quindi ha sempre uno sfondo.',
        'Result': 'Risultato',
        'Download every format at once: SVG (3 variants), PNG, JPG, WebP, React, data URI, Base64, CSS and HTML':
            'Scarica tutti i formati in una volta: SVG (3 varianti), PNG, JPG, WebP, React, data URI, Base64, CSS e HTML',
        'All formats (ZIP)': 'Tutti i formati (ZIP)',
        'Download': 'Scarica',

        // My drawings
        'Search by name': 'Cerca per nome',
        'Search your drawings': 'Cerca nei tuoi disegni',
        'Open an SVG file from your computer as a new drawing': 'Apri un file SVG dal tuo computer come nuovo disegno',
        'New drawing': 'Nuovo disegno',
        'Click a drawing to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Fai clic su un disegno per aprirlo. I disegni sono salvati solo in questo browser - non viene caricato nulla. Cancellando i dati del sito nel browser spariscono, quindi scarica quelli che vuoi conservare.',
        'Download every drawing as an .svg file in one ZIP': 'Scarica ogni disegno come file .svg in un unico ZIP',
        'Download all (ZIP)': 'Scarica tutto (ZIP)',
        'No drawings yet.': 'Ancora nessun disegno.',
        'Rename': 'Rinomina',
        'Download as .svg': 'Scarica come .svg',
        'This drawing is open': 'Questo disegno è aperto',
        'Click to open this drawing': 'Fai clic per aprire questo disegno',
        'New name': 'Nuovo nome',
        'The drawing is removed from this browser for good. Download it first if you want to keep a copy.':
            'Il disegno viene rimosso definitivamente da questo browser. Scaricalo prima se vuoi conservarne una copia.',

        // AI assistant
        'Any AI can draw with you - ChatGPT, Claude, Gemini, Copilot.': 'Qualsiasi IA può disegnare con te - ChatGPT, Claude, Gemini, Copilot.',
        'Connected AI': 'IA connessa',
        'Paste it into your AI and say what it should draw.': 'Incollalo nella tua IA e dille cosa deve disegnare.',
        // The step after "Copy prompt" inside another website (ai.js rewrites it): its parts
        'The AI answers with a link:': 'L\'IA risponde con un link:',
        'paste its whole answer below': 'incolla qui sotto l\'intera risposta',
        '(a clicked link opens a separate editor).': '(un link cliccato apre un editor separato).',
        'takes it back.': 'annulla la modifica.',
        'The AI answers with a link: click it, or paste the whole answer below.': 'L\'IA risponde con un link: fai clic su di esso, oppure incolla qui sotto l\'intera risposta.',
        'Connected to': 'Connesso a',
        'the AI sends its result there, and it opens here.': 'l\'IA invia lì il suo risultato, che si apre qui.',
        '(no key yet)': '(ancora nessuna chiave)',
        '(key valid while the editor is open)': '(chiave valida finché l\'editor è aperto)',
        'What': 'Cosa',
        'tells the AI': 'dice all\'IA',
        'The AI should': 'L\'IA deve',
        'Change “': 'Modificare «',          // Change “name” -> Modificare «name»
        '”': '»',
        'Make a new drawing': 'Creare un nuovo disegno',
        'The AI\'s answer (or press Ctrl+V anywhere):': 'La risposta dell\'IA (oppure premi Ctrl+V ovunque):',
        'The drawing travels in the link after the “#”, which no server sees. What you paste into your AI is handled by its provider.':
            'Il disegno viaggia nel link dopo il «#», che nessun server vede. Ciò che incolli nella tua IA viene elaborato dal suo fornitore.',
        'The prompt - copy it with Ctrl+C': 'Il prompt - copialo con Ctrl+C',
        'Copy prompt': 'Copia il prompt',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)': 'Qui non è consentito copiare - il prompt è selezionato qui sotto: premi Ctrl+C (⌘C)',
        'Prompt copied - paste it into your AI and say what it should draw': 'Prompt copiato - incollalo nella tua IA e dille cosa deve disegnare',
        'This link is incomplete or damaged - please ask the AI to send it again': 'Questo link è incompleto o danneggiato - chiedi all\'IA di inviarlo di nuovo',

        // Save to your server
        'Save to your server': 'Salva sul tuo server',
        'Webhook address': 'Indirizzo del webhook',
        'Send automatically a few seconds after each change (otherwise only when you click':
            'Invia automaticamente pochi secondi dopo ogni modifica (altrimenti solo quando fai clic su',
        'or press Ctrl+S)': 'o premi Ctrl+S)',
        'Only for “': 'Solo per «',
        '” (other drawings use the general address)': '» (gli altri disegni usano l\'indirizzo generale)',
        'What your server receives': 'Cosa riceve il tuo server',
        'A POST request with JSON (your server must allow CORS from https://svg.giit.ch):':
            'Una richiesta POST con JSON (il tuo server deve consentire CORS da https://svg.giit.ch):',
        'Embed the editor in your website': 'Integra l\'editor nel tuo sito web',
        'Send now': 'Invia ora',
        'Save setting': 'Salva impostazione',

        // Help
        'How it works': 'Come funziona',
        'Keyboard shortcuts': 'Scorciatoie da tastiera',
        'Select and move': 'Seleziona e sposta',
        'Rectangle, ellipse, line, freehand, text': 'Rettangolo, ellisse, linea, mano libera, testo',
        'Zoom': 'Zoom',
        'Drag with the mouse wheel pressed': 'Trascina con la rotellina del mouse premuta',
        'Double-click the mouse wheel': 'Doppio clic con la rotellina del mouse',
        'Fit to window / actual size': 'Adatta alla finestra / grandezza reale',
        'Grid on/off / snap on/off': 'Griglia sì/no / aggancio sì/no',
        'Arrow keys': 'Tasti freccia',
        'Only horizontal/vertical, keep proportions': 'Solo in orizzontale/verticale, mantieni le proporzioni',
        'Select the surrounding group': 'Seleziona il gruppo che la contiene',
        'Remove the selection': 'Rimuovi la selezione',
        'Undo / redo': 'Annulla / ripeti',
        'Download SVG (or save to your server) / export': 'Scarica SVG (o salva sul tuo server) / esporta',
        'Deselect': 'Deseleziona',

        // Color picker (colorpicker.js)
        'Color': 'Colore',
        'Saturation and brightness (arrow keys)': 'Saturazione e luminosità (tasti freccia)',
        'Hue': 'Tonalità',
        'Before - click to go back': 'Prima - fai clic per tornare indietro',
        'New color': 'Nuovo colore',
        'Color as hex code, e.g. #ff0000': 'Colore come codice esadecimale, ad es. #ff0000',
        'Done': 'Fatto',
        'Colors in this drawing': 'Colori in questo disegno',
        'Basic colors': 'Colori di base',
        /* ---------- Template placeholders (?template=) ---------- */
        'The drawing holds placeholders - its code stays as written': 'Il disegno contiene segnaposto - il suo codice rimane com’è',
        'The style holds placeholders - edit it in the code': 'Lo stile contiene segnaposto - modificalo nel codice',
    },

    html: {
        // AI assistant
        'Click <b>Copy prompt</b>.': 'Fai clic su <b>Copia il prompt</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'L\'IA risponde con un link: fai clic su di esso, oppure incolla qui sotto l\'intera risposta. <b>Annulla</b> annulla la modifica.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'L\'IA risponde con un link: <b>incolla qui sotto l\'intera risposta</b> (un link cliccato apre un editor separato). <b>Annulla</b> annulla la modifica.',

        // Save to your server
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your drawings are kept where you want them. Nothing is sent until you enter an address here.':
            'L\'editor può inviare ogni versione salvata al tuo server (un <b>webhook</b>), così i tuoi disegni restano dove vuoi tu. Non viene inviato nulla finché non inserisci qui un indirizzo.',
        'Token <small>(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)</small>': 'Token <small>(facoltativo, inviato come «Authorization: Bearer …»; conservato finché questa scheda resta aperta)</small>',
        'Also possible: <code>?src=&lt;URL of an .svg file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this drawing there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>svgeditor:ai</code>, <code>svgeditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'È anche possibile: <code>?src=&lt;URL di un file .svg&gt;</code> apre un file, <code>&amp;webhook=&lt;URL&gt;</code> salva lì questo disegno. L\'editor può anche aprirsi in una finestra propria (<code>?embed=window</code>), e la tua pagina può passargli un proprio prompt per l\'IA e una chiave di sessione, così l\'IA invia il risultato al tuo server (<code>svgeditor:ai</code>, <code>svgeditor:key-request</code>) - vedi «Usare l\'editor sul tuo sito web» sotto l\'editor. I dettagli sono in <a href="/llms.txt">llms.txt</a>.',

        // Help
        '<b>Open</b> an SVG file, drag it into the window or paste SVG code - or start with <b>New</b>.':
            '<b>Apri</b> un file SVG, trascinalo nella finestra o incolla codice SVG - oppure inizia con <b>Nuovo</b>.',
        '<b>My drawings</b> (the folder button at the top left) lists every drawing kept in this browser: open, rename, duplicate, download or delete them.':
            '<b>I miei disegni</b> (il pulsante a forma di cartella in alto a sinistra) elenca ogni disegno conservato in questo browser: aprili, rinominali, duplicali, scaricali o eliminali.',
        '<b>Click a shape</b> on the canvas. Drag it to move it, drag the small squares to resize it. Colors, size and position are under <b>Properties</b> on the right.':
            '<b>Fai clic su una forma</b> nella tela. Trascinala per spostarla, trascina i quadratini per ridimensionarla. Colori, dimensioni e posizione sono in <b>Proprietà</b> a destra.',
        '<b>Draw</b> new shapes with the tools above the canvas.': '<b>Disegna</b> nuove forme con gli strumenti sopra la tela.',
        'The <b>code</b> on the left always shows the current drawing and can be edited directly.':
            'Il <b>codice</b> a sinistra mostra sempre il disegno attuale e si può modificare direttamente.',
        '<b>Download SVG</b> saves the file, <b>Export</b> offers pictures (PNG, JPG) and code for websites.':
            '<b>Scarica SVG</b> salva il file, <b>Esporta</b> offre immagini (PNG, JPG) e codice per siti web.',
        'Made a mistake? <b>Undo</b> takes back every step. Your drawings are kept in this browser, even after closing the page.':
            'Hai sbagliato? <b>Annulla</b> annulla ogni passaggio. I tuoi disegni restano in questo browser, anche dopo aver chiuso la pagina.',
        '<kbd>H</kbd> / hold <kbd>Space</kbd>': '<kbd>H</kbd> / tieni premuto <kbd>Spazio</kbd>',
        'Mouse wheel, <kbd>+</kbd> <kbd>-</kbd>': 'Rotellina del mouse, <kbd>+</kbd> <kbd>-</kbd>',
        'Move the selection by 1, with <kbd>Shift</kbd> by 10': 'Sposta la selezione di 1, con <kbd>Shift</kbd> di 10',
        '<kbd>Shift</kbd> while dragging': '<kbd>Shift</kbd> mentre trascini',
        '<kbd>Alt</kbd> + click': '<kbd>Alt</kbd> + clic',
        '<kbd>Delete</kbd>': '<kbd>Canc</kbd>',
        'Forward / backward (with <kbd>Shift</kbd>: to front / to back)': 'Avanti / indietro (con <kbd>Shift</kbd>: in primo piano / in fondo)',
        'In the code: <kbd>Tab</kbd> indents, <kbd>Shift</kbd>+<kbd>Tab</kbd> outdents, clicking into a tag selects that shape on the canvas.':
            'Nel codice: <kbd>Tab</kbd> aumenta il rientro, <kbd>Shift</kbd>+<kbd>Tab</kbd> lo riduce, un clic in un tag seleziona quella forma nella tela.',
    },

    patterns: [
        // Canvas hint with the grid
        ['^(.*?) ?Snapping to a ([\\d.]+) grid\\.$', (m, h, n) => `${h ? (HINT[h] || h) + ' ' : ''}Aggancio a una griglia di ${n}.`],
        ['^(.*?) ?Snap: ([\\d.]+)\\.$', (m, h, n) => `${h ? (HINT[h] || h) + ' ' : ''}Aggancio: ${n}.`],

        // Code
        ['^(\\d+) lines · (.+)$', (m, n, s) => `${n} ${n === '1' ? 'riga' : 'righe'} · ${s}`],
        ['^Line (\\d+), column (\\d+):$', (m, l, c) => `Riga ${l}, colonna ${c}:`],
        ['^Line (\\d+):$', (m, l) => `Riga ${l}:`],
        ['^Line (\\d+), column (\\d+): (.*)$', (m, l, c, t) => `Riga ${l}, colonna ${c}: ${CODE_ERROR[t] || t}`],
        ['^Line (\\d+): (.*)$', (m, l, t) => `Riga ${l}: ${CODE_ERROR[t] || t}`],
        ['^File shrunk: (\\d+) → (\\d+) bytes$', 'File compresso: $1 → $2 byte'],

        // Properties
        [`^(Fill|Outline) color · (whole drawing|${TYPE_ANY})( #.+)?$`, (m, w, t, id) =>
            `${w === 'Fill' ? 'Colore di riempimento' : 'Colore del contorno'} · ${t === 'whole drawing' ? 'intero disegno' : translateLabel(t)}${id || ''}`],
        ['^(.+) \\(inherited\\)$', '$1 (ereditato)'],
        ['^Remove ([A-Za-z_:][\\w:.-]*)$', 'Rimuovi $1'],

        // Layers
        ['^<([^>]+)> - click to select, double-click to rename, drag to reorder$', '<$1> - clic per selezionare, doppio clic per rinominare, trascina per riordinare'],
        ['^<([^>]+)> - click to select$', '<$1> - clic per selezionare'],
        [`^Show ${TYPE}$`, (m, t) => `Mostra ${translateLabel(t)}`],
        [`^Hide ${TYPE}$`, (m, t) => `Nascondi ${translateLabel(t)}`],
        [`^Move ${TYPE} forward$`, (m, t) => `${translateLabel(t)}: un livello avanti`],
        [`^Move ${TYPE} backward$`, (m, t) => `${translateLabel(t)}: un livello indietro`],
        [`^Duplicate ${TYPE}$`, (m, t) => `Duplica ${translateLabel(t)}`],
        [`^Delete ${TYPE}$`, (m, t) => `Elimina ${translateLabel(t)}`],
        ['^The name “(.+)” is already used$', 'Il nome «$1» è già in uso'],

        // The open drawing
        ['^"(.+)" is open\\. My drawings: open, rename, duplicate or delete your drawings \\(Ctrl\\+O\\)$',
            '«$1» è aperto. I miei disegni: apri, rinomina, duplica o elimina i tuoi disegni (Ctrl+O)'],
        ['^Start "(.+)" over\\?$', 'Ricominciare «$1»?'],
        ['^Start "(.+)" over$', 'Ricomincia «$1»'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '«$1» ora è vuoto - «Annulla» lo ripristina'],
        ['^Opened "(.+)" - it is now in "My drawings"$', '«$1» aperto - ora si trova in «I miei disegni»'],
        ['^New drawing "(.+)" from the AI - your other drawings are unchanged$', 'Nuovo disegno «$1» dall\'IA - gli altri tuoi disegni restano invariati'],
        ['^New drawing "(.+)" - your other drawings are under "My drawings"$', 'Nuovo disegno «$1» - gli altri tuoi disegni sono in «I miei disegni»'],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '«$1» modificato dall\'IA - «Annulla» annulla la modifica'],
        ['^"(.+)" opened$', '«$1» aperto'],

        // Export
        ['^(\\d+) × (\\d+) pixels$', '$1 × $2 pixel'],
        ['^([\\d,]+) bytes$', m => formatBytes(m)],
        ['^ZIP with 11 files downloaded \\(pictures (\\d+) × (\\d+) px\\)$', 'ZIP con 11 file scaricato (immagini $1 × $2 px)'],

        // My drawings
        ['^(\\d+) (?:drawing|drawings) · (.+) in this browser$', (m, n, s) => `${n} ${translateDrawings(n)} · ${formatBytes(s)} in questo browser`],
        ['^Open now · (.+)$', (m, s) => `Aperto ora · ${formatBytes(s)}`],
        ['^just now · (.+)$', (m, s) => `proprio ora · ${formatBytes(s)}`],
        ['^(\\d+) min ago · (.+)$', (m, n, s) => `${n} min fa · ${formatBytes(s)}`],
        ['^(\\d+) h ago · (.+)$', (m, n, s) => `${n} h fa · ${formatBytes(s)}`],
        ['^yesterday · (.+)$', (m, s) => `ieri · ${formatBytes(s)}`],
        ['^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\\d{1,2}), (\\d{4}) · (.+)$', (m, mo, d, y, s) => `${d} ${MONTH[mo]} ${y} · ${formatBytes(s)}`],
        ['^(.+) \\(open now\\)$', '$1 (aperto ora)'],
        ['^Open (.+)$', 'Apri $1'],
        ['^No drawing named "(.*)"\\.$', 'Nessun disegno di nome «$1».'],
        ['^Delete "(.+)"\\?$', 'Eliminare «$1»?'],
        ['^"(.+)" duplicated$', '«$1» duplicato'],
        ['^"(.+)" deleted$', '«$1» eliminato'],
        ['^ZIP with (\\d+) (?:drawing|drawings) downloaded$', (m, n) => `ZIP con ${n} ${translateDrawings(n)} scaricato`],

        // AI
        ['^Part (\\d+) of (\\d+) received$', 'Parte $1 di $2 ricevuta'],
        ['^Open the other (link|links) from the AI too \\(still missing: part (.+)\\)\\.$',
            (m, l, p) => `Apri anche ${l === 'link' ? 'l\'altro link' : 'gli altri link'} dell'IA (manca ancora: parte ${p}).`],
        ['^Part (\\d+) of (\\d+) received - paste the other (link|links) too \\(missing: (.+)\\)$',
            (m, a, b, l, p) => `Parte ${a} di ${b} ricevuta - incolla anche ${l === 'link' ? 'l\'altro link' : 'gli altri link'} (manca: ${p})`],
        ['^The AI sends the drawing to (.+) with a key that only works for this session\\. What you paste into your AI is handled by its provider\\.$',
            'L\'IA invia il disegno a $1 con una chiave valida solo per questa sessione. Ciò che incolli nella tua IA viene elaborato dal suo fornitore.'],
        ['^The AI sends its result to (.+) by itself, and it opens here\\. If it answers with a link, paste its answer below\\.$',
            'L\'IA invia da sola il risultato a $1, che si apre qui. Se risponde con un link, incolla qui sotto la sua risposta.'],
        ['^No key from (.+) - the prompt asks the AI for a link instead$', 'Nessuna chiave da $1 - il prompt chiede invece un link all\'IA'],
        ['^Prompt copied - the AI sends its result to (.+)$', 'Prompt copiato - l\'IA invia il risultato a $1'],
    ],
};

export default dict;
