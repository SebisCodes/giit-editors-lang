/* Italian texts of the Typst editor: the bar, the work area (code, pages,
   document settings, insert, pictures and files, outline), its dialogs and
   messages. What all editors share is in common.js; how the
   dictionaries are used is described in i18n.js. The compiler's own
   messages stay as Typst writes them (English); names of documents, files,
   labels and functions stay as they are: the patterns copy them into the
   Italian text. */

import { formatTime, formatThousands, getPlural } from './format.js';

/* "1,234" -> "1.234" (Italian thousands separator) */

/* "123 bytes" / "1.5 KB" -> Italian unit */
/**
 * Translates the unit of a size text ("123 bytes").
 * @param {string} s - the English size text.
 * @returns {string} the text in the language.
 */
const formatSize = s => s.replace(/ bytes$/, ' byte');

/* When a document was last changed (files.js): "just now", "5 min ago", "Oct 25, 2026" … */

/* Reasons a ZIP could not be opened (app.js openZip) */
const ZIP = { 'it is not a ZIP file': 'non è un file ZIP', 'there is no .typ file in it': 'non contiene alcun file .typ' };

const dict = {
    text: {
        "This document has no pages yet - fix the problems above the code first": "Questo documento non ha ancora pagine - correggi prima i problemi sopra il codice",
        // Editing in place: Enter and Shift+Enter
        "Editing on the page - Enter: new paragraph, Shift+Enter: new line, Ctrl+Enter or a click elsewhere keeps it, Escape cancels": "Modifica sulla pagina - Invio: nuovo paragrafo, Maiusc+Invio: nuova riga, Ctrl+Invio o un clic altrove conferma, Esc annulla",
        "A new paragraph inside bold or emphasis is made in the code - Shift+Enter makes a new line": "Un nuovo paragrafo dentro grassetto o enfasi si fa nel codice - Maiusc+Invio crea una nuova riga",
        /* Words that are the same in German and English, so not in the German pack */
        'Code': 'Codice',
        'Export': 'Esporta',
        'Format': 'Formato',

        /* ---------- Top bar ---------- */
        'Typst Editor - home': 'Editor Typst - pagina iniziale',
        'Typst Editor': 'Editor Typst',
        'File': 'File',
        'My documents (Ctrl+O)': 'I miei documenti (Ctrl+O)',
        'My documents': 'I miei documenti',
        'New document, or start this one over': 'Nuovo documento o ricomincia da capo questo',
        'New': 'Nuovo',
        'New blank document': 'Nuovo documento vuoto',
        'An empty A4 page - your other documents stay as they are': 'Una pagina A4 vuota - gli altri tuoi documenti restano come sono',
        'Article': 'Articolo',
        'Title, abstract and four sections': 'Titolo, riassunto e quattro sezioni',
        'Letter': 'Lettera',
        'Addresses, date, subject and signature': 'Indirizzi, data, oggetto e firma',
        'Exercise sheet': 'Foglio di esercizi',
        'Exercises with math, solutions and code': 'Esercizi con formule, soluzioni e codice',
        'Social media post': 'Post per i social',
        'A square picture with colors and big type': 'Un\'immagine quadrata con colori e testo grande',
        'The welcome example': 'L\'esempio di benvenuto',
        'Shows what the editor can do': 'Mostra cosa sa fare l\'editor',
        'Start this document over': 'Ricomincia questo documento',
        'Keeps the #set rules at the top, empties the text - "Undo" brings it back': 'Mantiene le regole #set in cima, svuota il testo - «Annulla» lo ripristina',
        'Open a .typ file (or a picture or data file) from your computer (you can also drag it into the window)':
            'Apri un file .typ (o un\'immagine o un file di dati) dal tuo computer (puoi anche trascinarlo nella finestra)',
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
        'Let any AI write in this editor': 'Lascia che qualsiasi IA scriva in questo editor',
        'AI Assistant': 'Assistente IA',
        'Save to your own server and embed the editor in your website': 'Salva sul tuo server e integra l\'editor nel tuo sito web',
        'Save to server': 'Salva sul server',
        'How it works and keyboard shortcuts (?)': 'Come funziona e scorciatoie da tastiera (?)',
        'Help': 'Aiuto',
        'Save the document as a .typ file (Ctrl+S)': 'Salva il documento come file .typ (Ctrl+S)',
        'Download .typ': 'Scarica .typ',
        'PDF, pictures of the pages and more (Ctrl+E)': 'PDF, immagini delle pagine e altro (Ctrl+E)',
        'Export…': 'Esporta…',

        /* ---------- Views and work area ---------- */
        'View': 'Vista',
        'Edit': 'Modifica',
        'Side panel': 'Pannello laterale',
        'Preview': 'Anteprima',
        'Document': 'Documento',
        'Typst code': 'Codice Typst',
        'Copy the Typst code to the clipboard': 'Copia il codice Typst negli appunti',
        'Copy code': 'Copia codice',
        'Copy': 'Copia',
        'Drag to change the width of the code area': 'Trascina per cambiare la larghezza dell\'area del codice',
        'Drag to change the width': 'Trascina per cambiare la larghezza',
        'Formatting': 'Formattazione',
        'Bold: *text* (Ctrl+B)': 'Grassetto: *testo* (Ctrl+B)',
        'Bold': 'Grassetto',
        'Italic: _text_ (Ctrl+I)': 'Corsivo: _testo_ (Ctrl+I)',
        'Italic': 'Corsivo',
        'Underline (Ctrl+U)': 'Sottolineato (Ctrl+U)',
        'Underline': 'Sottolineato',
        'Code in the text: `text`': 'Codice nel testo: `testo`',
        'Code in the text': 'Codice nel testo',
        'Heading': 'Titolo',
        'Bulleted list': 'Elenco puntato',
        'Numbered list': 'Elenco numerato',
        'Table': 'Tabella',
        'Picture': 'Immagine',
        'Math in the text (Ctrl+M)': 'Formula nel testo (Ctrl+M)',
        'Math': 'Matematica',
        'Previous page (Page Up)': 'Pagina precedente (Pag su)',
        'Previous page': 'Pagina precedente',
        'Next page (Page Down)': 'Pagina successiva (Pag giù)',
        'Next page': 'Pagina successiva',
        'Preview of the pages: click text to edit it or to jump to its place in the code': 'Anteprima delle pagine: fai clic su un testo per modificarlo o per saltare al suo punto nel codice',
        'Zoom out (Ctrl + -)': 'Riduci (Ctrl + -)',
        'Zoom out': 'Riduci',
        'Show at actual size': 'Mostra a grandezza reale',
        'Zoom in (Ctrl + +)': 'Ingrandisci (Ctrl + +)',
        'Zoom in': 'Ingrandisci',
        'Fit the page width into the window': 'Adatta la larghezza della pagina alla finestra',
        'Fit width': 'Adatta larghezza',
        'Show the whole page': 'Mostra la pagina intera',
        'Whole page': 'Pagina intera',
        'Compiling…': 'Compilazione…',
        'Paper, font, margins and numbering of the document': 'Carta, carattere, margini e numerazione del documento',
        'Ready-made pieces: structure, text, math, symbols': 'Elementi pronti: struttura, testo, formule, simboli',
        'Insert': 'Inserisci',
        'The pictures and files of this document': 'Le immagini e i file di questo documento',
        'Pictures': 'Immagini',
        'The headings of the document': 'I titoli del documento',
        'Outline': 'Struttura',
        'The headings of the document. Click one to go there in the code and on the pages.':
            'I titoli del documento. Fai clic su uno per andarci nel codice e sulle pagine.',
        'No headings yet - add one with = Heading.': 'Ancora nessun titolo - aggiungine uno con = Titolo.',
        'Open it here': 'Aprilo qui',
        'Drop the .typ file, picture or data file here': 'Rilascia qui il file .typ, l\'immagine o il file di dati',
        'Text on the page': 'Testo sulla pagina',

        /* Problems above the code */
        'Hide': 'Nascondi',
        'Show': 'Mostra',
        'Hint:': 'Suggerimento:',

        /* ---------- Insert tab ---------- */
        'Structure': 'Struttura',
        'Subheading': 'Sottotitolo',
        'Third level': 'Terzo livello',
        'Contents': 'Indice',
        '• Bulleted list': '• Elenco puntato',
        '1. Numbered list': '1. Elenco numerato',
        'Term list': 'Elenco di termini',
        'Figure': 'Figura',
        'Two columns': 'Due colonne',
        'Quote': 'Citazione',
        'Centered': 'Centrato',
        'Program code': 'Codice sorgente',
        'Title': 'Titolo',
        'New page': 'Nuova pagina',
        'Vertical space': 'Spazio verticale',
        'Bibliography': 'Bibliografia',
        'A bibliography from a .bib file of the document (add it in the Pictures tab)': 'Una bibliografia da un file .bib del documento (aggiungilo nella scheda Immagini)',
        'Footnote': 'Nota a piè di pagina',
        'Reference': 'Riferimento',
        'Colored text': 'Testo colorato',
        'Highlighted': 'Evidenziato',
        'Colored box': 'Riquadro colorato',
        'Push right': 'A destra',
        '$x$ in the text': '$x$ nel testo',
        'Displayed': 'In evidenza',
        'Numbered equation': 'Equazione numerata',
        'Aligned lines': 'Righe allineate',
        'Fraction': 'Frazione',
        'Root': 'Radice',
        'x² Power': 'x² Potenza',
        'x₁ Index': 'x₁ Pedice',
        '∑ Sum': '∑ Somma',
        '∫ Integral': '∫ Integrale',
        'lim Limit': 'lim Limite',
        'Matrix': 'Matrice',
        'Cases': 'Casi',
        'Greek letters': 'Lettere greche',
        'Symbols': 'Simboli',
        'Pictures and files have their own tab:': 'Immagini e file hanno una scheda tutta loro:',

        /* ---------- Pictures tab ---------- */
        'Add pictures or files…': 'Aggiungi immagini o file…',
        'No pictures or files yet': 'Ancora nessuna immagine o file',
        'Pictures and files belong to “': 'Le immagini e i file appartengono a «',
        '” and stay in your browser.': '» e restano nel tuo browser.',
        'Missing in this document': 'Mancano in questo documento',
        'Add file…': 'Aggiungi file…',
        'Insert it at the cursor': 'Inserisci al cursore',
        'Show where it is used': 'Mostra dove viene usato',
        'A figure with caption and label at the cursor': 'Una figura con didascalia ed etichetta al cursore',
        'As figure': 'Come figura',
        'Rename - the code is changed along': 'Rinomina - il codice viene adattato',
        'Rename': 'Rinomina',
        'Choose another file, keep the name': 'Scegli un altro file, mantieni il nome',
        'Replace': 'Sostituisci',
        'Download the file': 'Scarica il file',
        'Download': 'Scarica',
        'Remove the file from this document': 'Rimuovi il file da questo documento',
        'Remove': 'Rimuovi',
        'New name': 'Nuovo nome',
        'Font': 'Carattere',

        /* ---------- Document tab ---------- */
        'Paper': 'Carta',
        'Square 120 × 120 mm (1:1)': 'Quadrato 120 × 120 mm (1:1)',
        'Portrait 4:5 (120 × 150 mm)': 'Verticale 4:5 (120 × 150 mm)',
        'Story 9:16 (90 × 160 mm)': 'Storia 9:16 (90 × 160 mm)',
        'Slide 16:9 (160 × 90 mm)': 'Diapositiva 16:9 (160 × 90 mm)',
        'Other size': 'Altra dimensione',
        'Margins': 'Margini',
        'Typst default (about 2.5 cm)': 'Predefinito di Typst (circa 2,5 cm)',
        'Normal (2.5 cm)': 'Normali (2,5 cm)',
        'Narrow (2 cm)': 'Stretti (2 cm)',
        'Very narrow (1.5 cm)': 'Molto stretti (1,5 cm)',
        'Wide (3.5 cm)': 'Larghi (3,5 cm)',
        'None': 'Nessuno',
        'Other': 'Altro',
        'Orientation': 'Orientamento',
        'Portrait': 'Verticale',
        'Landscape': 'Orizzontale',
        'Libertinus Serif (Typst default)': 'Libertinus Serif (predefinito di Typst)',
        'New Computer Modern (like LaTeX)': 'New Computer Modern (come LaTeX)',
        'DejaVu Sans Mono (typewriter)': 'DejaVu Sans Mono (macchina da scrivere)',
        'Font size': 'Dimensione del carattere',
        '11 pt (default)': '11 pt (predefinito)',
        'Language': 'Lingua',
        'English (default)': 'Inglese (predefinito)',
        'German': 'Tedesco',
        'German (Switzerland)': 'Tedesco (Svizzera)',
        'French': 'Francese',
        'Italian': 'Italiano',
        'Spanish': 'Spagnolo',
        'Line spacing': 'Interlinea',
        'Normal': 'Normale',
        'More': 'Maggiore',
        '1½ lines': '1½ righe',
        'Double': 'Doppia',
        'Columns': 'Colonne',
        'One': 'Una',
        'Two': 'Due',
        'Three': 'Tre',
        'Justified text (both edges straight)': 'Testo giustificato (entrambi i margini dritti)',
        'Numbered headings (1., 1.1 …)': 'Titoli numerati (1., 1.1 …)',
        'Page numbers': 'Numeri di pagina',
        '(of the PDF; #title() shows it)': '(del PDF; #title() lo mostra)',
        'Author': 'Autore',
        'Show the title (#title())': 'Mostra il titolo (#title())',
        'pages · about': 'pagine · circa',
        'page · about': 'pagina · circa',

        /* ---------- Export ---------- */
        'Close': 'Chiudi',
        'File name': 'Nome del file',
        'PDF (from the Typst compiler)': 'PDF (dal compilatore Typst)',
        'Pictures of the pages': 'Immagini delle pagine',
        'SVG (vector)': 'SVG (vettoriale)',
        'Source': 'Sorgente',
        'Typst source (.typ)': 'Sorgente Typst (.typ)',
        'Typst with pictures and files (ZIP)': 'Typst con immagini e file (ZIP)',
        'Pages': 'Pagine',
        'The page shown now': 'La pagina mostrata ora',
        'All pages (one picture each, as ZIP)': 'Tutte le pagine (un\'immagine ciascuna, in ZIP)',
        'Sharpness': 'Nitidezza',
        '96 dpi (screen)': '96 dpi (schermo)',
        '300 dpi (print)': '300 dpi (stampa)',
        'Result': 'Risultato',
        'The PDF comes straight from the Typst compiler: the same pages as in the preview, with real text that can be selected and searched, links and the document\'s title.':
            'Il PDF arriva direttamente dal compilatore Typst: le stesse pagine dell\'anteprima, con testo reale che si può selezionare e cercare, link e il titolo del documento.',
        'Download everything at once: .typ, pictures and files, PDF and every page as PNG and SVG': 'Scarica tutto in una volta: .typ, immagini e file, PDF e ogni pagina in PNG e SVG',
        'All formats (ZIP)': 'Tutti i formati (ZIP)',

        /* ---------- My documents ---------- */
        'Search by name': 'Cerca per nome',
        'Search your documents': 'Cerca nei tuoi documenti',
        'Open a .typ file from your computer as a new document': 'Apri un file .typ dal tuo computer come nuovo documento',
        'New document': 'Nuovo documento',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Fai clic su un documento per aprirlo. I documenti sono salvati solo in questo browser - non viene caricato nulla. Cancellando i dati del sito nel browser spariscono, quindi scarica quelli che vuoi conservare.',
        'Download every document as a .typ file (with its pictures and files) in one ZIP': 'Scarica ogni documento come file .typ (con le sue immagini e i suoi file) in un unico ZIP',
        'Download all (ZIP)': 'Scarica tutto (ZIP)',
        'Duplicate': 'Duplica',
        'Download as .typ': 'Scarica come .typ',
        'Delete': 'Elimina',
        'This document is open': 'Questo documento è aperto',
        'Click to open this document': 'Fai clic per aprire questo documento',
        'No documents yet.': 'Ancora nessun documento.',

        /* ---------- AI Assistant ---------- */
        'Any AI can write with you - ChatGPT, Claude, Gemini, Copilot.': 'Qualsiasi IA può scrivere con te - ChatGPT, Claude, Gemini, Copilot.',
        'Connected AI': 'IA connessa',
        'Connected to': 'Connesso a',
        'the AI sends its result there, and it opens here.': 'l\'IA invia lì il suo risultato, che si apre qui.',
        'What': 'Cosa',
        'tells the AI': 'dice all\'IA',
        'The AI should': 'L\'IA deve',
        'Change “': 'Modificare «',
        '”': '»',
        'Make a new document': 'Creare un nuovo documento',
        'The AI\'s answer (or press Ctrl+V anywhere):': 'La risposta dell\'IA (oppure premi Ctrl+V ovunque):',
        'The document travels in the link after the “#”, which no server sees. What you paste into your AI is handled by its provider.':
            'Il documento viaggia nel link dopo il «#», che nessun server vede. Ciò che incolli nella tua IA viene elaborato dal suo fornitore.',
        'The prompt - copy it with Ctrl+C': 'Il prompt - copialo con Ctrl+C',
        'Copy prompt': 'Copia il prompt',
        /* the step with the link, also when the editor sets it anew (text by text) */
        'The AI answers with a link: click it, or paste the whole answer below.': 'L\'IA risponde con un link: fai clic su di esso, oppure incolla qui sotto l\'intera risposta.',
        'takes it back.': 'annulla la modifica.',
        'The AI answers with a link:': 'L\'IA risponde con un link:',
        'paste its whole answer below': 'incolla qui sotto l\'intera risposta',
        '(a clicked link opens a separate editor).': '(un link cliccato apre un editor separato).',
        '(no key yet)': '(ancora nessuna chiave)',
        '(key valid while the editor is open)': '(chiave valida finché l\'editor è aperto)',
        'The link could not be read': 'Impossibile leggere il link',
        'The document in this link is incomplete or damaged. If the AI\'s link was split over several lines (as in a terminal), copy the whole answer and paste it into the editor with Ctrl+V - the editor joins the lines.':
            'Il documento in questo link è incompleto o danneggiato. Se il link dell\'IA era diviso su più righe (come in un terminale), copia l\'intera risposta e incollala nell\'editor con Ctrl+V - l\'editor unisce le righe.',
        'Loading…': 'Caricamento…',
        'Taken over by your editor': 'Ricevuto dal tuo editor',
        'The document is now in the Typst Editor tab you already had open. Switch to that tab, or open it here.':
            'Il documento ora si trova nella scheda dell\'Editor Typst che avevi già aperto. Passa a quella scheda o aprilo qui.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)': 'Qui non è consentito copiare - il testo è selezionato qui sotto: premi Ctrl+C (⌘C)',
        'Paste it into your AI and say what it should write.': 'Incollalo nella tua IA e dille cosa deve scrivere.',
        'Prompt copied - paste it into your AI and say what it should write': 'Prompt copiato - incollalo nella tua IA e dille cosa deve fare',
        'This link is incomplete or damaged - please ask the AI to send it again': 'Questo link è incompleto o danneggiato - chiedi all\'IA di inviarlo di nuovo',

        /* ---------- Save to your server ---------- */
        'Save to your server': 'Salva sul tuo server',
        'Webhook address': 'Indirizzo del webhook',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(facoltativo, inviato come «Authorization: Bearer …»; conservato finché questa scheda resta aperta)',
        'Send automatically a few seconds after each change (otherwise only when you click': 'Invia automaticamente pochi secondi dopo ogni modifica (altrimenti solo quando fai clic su',
        'or press Ctrl+S)': 'o premi Ctrl+S)',
        'Only for “': 'Solo per «',
        '” (other documents use the general address)': '» (gli altri documenti usano l\'indirizzo generale)',
        'What your server receives': 'Cosa riceve il tuo server',
        'A POST request with JSON (your server must allow CORS from https://typst.giit.ch):': 'Una richiesta POST con JSON (il tuo server deve consentire CORS da https://typst.giit.ch):',
        'https://example.com/api/typst': 'https://esempio.it/api/typst',
        'Embed the editor in your website': 'Integra l\'editor nel tuo sito web',
        'Send now': 'Invia ora',
        'Save setting': 'Salva impostazione',

        /* ---------- Help ---------- */
        'How it works': 'Come funziona',
        'The compiler\'s errors and warnings are listed above the code with line, column and hint - click one to go there.':
            'Gli errori e gli avvisi del compilatore sono elencati sopra il codice con riga, colonna e suggerimento - fai clic su uno per andarci.',
        'Keyboard shortcuts': 'Scorciatoie da tastiera',
        'Bold / italic / underline the selected text': 'Testo selezionato in grassetto / corsivo / sottolineato',
        'Show the cursor\'s place on the pages': 'Mostra la posizione del cursore sulle pagine',
        'Indent / outdent': 'Aumenta / riduci rientro',
        'Undo / redo': 'Annulla / ripeti',
        'Save (download .typ, or to your server) / export': 'Salva (file .typ o sul tuo server) / esporta',
        'Print the pages': 'Stampa le pagine',
        '+ mouse wheel,': '+ rotellina del mouse,',
        'Zoom the preview': 'Zoom dell\'anteprima',
        'Page Up': 'Pag su',
        'Page Down': 'Pag giù',
        'Previous / next page (in the preview)': 'Pagina precedente / successiva (nell\'anteprima)',

        /* ---------- Messages ---------- */
        'The browser storage is full - download and delete documents under "My documents"': 'La memoria del browser è piena - scarica ed elimina documenti in «I miei documenti»',
        'The browser storage is full - delete or download documents under "My documents" first': 'La memoria del browser è piena - prima elimina o scarica documenti in «I miei documenti»',
        'The browser storage is full - delete or download some documents first': 'La memoria del browser è piena - prima elimina o scarica alcuni documenti',
        'The browser storage is full': 'La memoria del browser è piena',
        'Nothing to undo': 'Niente da annullare',
        'Nothing to redo': 'Niente da ripetere',
        'This text changed in the code - wait for the preview, then try again': 'Questo testo è cambiato nel codice - attendi l\'anteprima e poi riprova',
        'The code changed meanwhile - the edit was not used': 'Nel frattempo il codice è cambiato - la modifica non è stata applicata',
        'The file is removed from this document. The code that uses it then reports a missing file. "Undo" does not bring it back.':
            'Il file viene rimosso da questo documento. Il codice che lo usa segnalerà allora un file mancante. «Annulla» non lo ripristina.',
        'Pictures can be PNG, JPG, GIF, WebP, SVG or PDF; files CSV, JSON, YAML, TOML, XML, TXT, BIB, Typst or fonts':
            'Le immagini possono essere PNG, JPG, GIF, WebP, SVG o PDF; i file CSV, JSON, YAML, TOML, XML, TXT, BIB, Typst o caratteri',
        'The file is larger than 12 MB': 'Il file supera i 12 MB',
        'The picture could not be read': 'Impossibile leggere l\'immagine',
        'Change width and height in the #set page(…) line': 'Modifica width e height nella riga #set page(…)',
        'Title added': 'Titolo aggiunto',
        'This document is empty already': 'Questo documento è già vuoto',
        'The text is removed; the settings at the top (#set, #show, #import, #let) stay. "Undo" brings it back as long as the page is open.':
            'Il testo viene rimosso; le impostazioni in cima (#set, #show, #import, #let) restano. «Annulla» lo ripristina finché la pagina è aperta.',
        'Everything is removed. "Undo" brings it back as long as the page is open.': 'Viene rimosso tutto. «Annulla» lo ripristina finché la pagina è aperta.',
        'Start over': 'Ricomincia',
        'The file is larger than 8 MB': 'Il file supera gli 8 MB',
        'Downloaded': 'Scaricato',
        'Copied to the clipboard': 'Copiato negli appunti',
        'This browser does not allow copying this': 'Questo browser non consente di copiarlo',
        'Code copied': 'Codice copiato',
        '.typ with its files downloaded (ZIP)': '.typ con i suoi file scaricato (ZIP)',
        '.typ downloaded': '.typ scaricato',
        'Add': 'Aggiungi',
        'The document and its pictures are removed from this browser for good. Download it first if you want to keep a copy.':
            'Il documento e le sue immagini vengono rimossi definitivamente da questo browser. Scaricalo prima se vuoi conservarne una copia.',
        'The page could not be drawn': 'Impossibile disegnare la pagina',
    },

    html: {

        '<b>Export</b> also has <b>Open in another editor</b>: it converts the document and opens it as a new document there. Anything the other format cannot hold is listed first.':

            '<b>Esporta</b> offre anche <b>Apri in un altro editor</b>: il documento viene convertito e aperto lì come nuovo documento. Ciò che l’altro formato non può contenere viene elencato prima.',
        /* Pictures tab */
        'Drop or paste pictures anywhere in the editor, or add them here: <code>image("name")</code> shows a picture, <code>csv</code>, <code>json</code>, <code>read</code> or <code>bibliography</code> read data files, fonts (.otf, .ttf) work with <code>#set text(font: …)</code>.':
            'Trascina o incolla immagini ovunque nell\'editor, oppure aggiungile qui: <code>image("name")</code> mostra un\'immagine, <code>csv</code>, <code>json</code>, <code>read</code> o <code>bibliography</code> leggono file di dati, i caratteri (.otf, .ttf) funzionano con <code>#set text(font: …)</code>.',

        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Fai clic su <b>Copia il prompt</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'L\'IA risponde con un link: fai clic su di esso, oppure incolla qui sotto l\'intera risposta. <b>Annulla</b> annulla la modifica.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'L\'IA risponde con un link: <b>incolla qui sotto l\'intera risposta</b> (un link cliccato apre un editor separato). <b>Annulla</b> annulla la modifica.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'L\'editor può inviare ogni versione salvata al tuo server (un <b>webhook</b>), così il tuo lavoro resta dove vuoi tu. Non viene inviato nulla finché non inserisci qui un indirizzo.',
        'Also possible: <code>?src=&lt;URL of a .typ file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>typsteditor:ai</code>, <code>typsteditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'È anche possibile: <code>?src=&lt;URL di un file .typ&gt;</code> apre un file, <code>&amp;webhook=&lt;URL&gt;</code> salva lì questo documento. L\'editor può anche aprirsi in una finestra propria (<code>?embed=window</code>), e la tua pagina può passargli un proprio prompt per l\'IA e una chiave di sessione, così l\'IA invia il risultato al tuo server (<code>typsteditor:ai</code>, <code>typsteditor:key-request</code>) - vedi «Usare l\'editor sul tuo sito web» sotto l\'editor. I dettagli sono in <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> Typst on the left - or start with <b>New</b> and one of the templates. The real Typst compiler runs in your browser and shows the pages as you type.':
            '<b>Scrivi</b> Typst a sinistra - oppure inizia con <b>Nuovo</b> e uno dei modelli. Il vero compilatore Typst funziona nel tuo browser e mostra le pagine mentre scrivi.',
        '<b>Click text on the page</b> to edit it right there: a field opens with the cursor where you clicked, and the code\'s cursor goes to the same place. Enter starts a new paragraph; Shift+Enter inserts a line break. Ctrl+Enter (Cmd+Enter on macOS) or a click elsewhere applies the edit; Escape cancels. A click on math, a picture or text made by code jumps to its place in the code instead. The place where the code cursor is gets a frame on the page.':
            '<b>Fai clic su un testo sulla pagina</b> per modificarlo direttamente lì: si apre un campo con il cursore dove hai cliccato, e il cursore del codice va nello stesso punto. Invio inizia un nuovo paragrafo; Maiusc+Invio inserisce un’interruzione di riga. Ctrl+Invio (Cmd+Invio su macOS) o un clic altrove applica la modifica; Esc la annulla. Un clic su una formula, un\'immagine o un testo generato dal codice salta invece al suo punto nel codice. Il punto in cui si trova il cursore del codice viene evidenziato con una cornice sulla pagina.',
        '<b>Document</b> on the right sets paper, font, margins and numbering (it edits the <code>#set</code> rules); <b>Insert</b> has ready-made pieces (lists, tables, math, symbols); <b>Pictures</b> holds the pictures and data files of the document; <b>Outline</b> lists the headings.':
            '<b>Documento</b> a destra imposta carta, carattere, margini e numerazione (modifica le regole <code>#set</code>); <b>Inserisci</b> ha elementi pronti (elenchi, tabelle, formule, simboli); <b>Immagini</b> contiene le immagini e i file di dati del documento; <b>Struttura</b> elenca i titoli.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser.':
            '<b>I miei documenti</b> (il pulsante a forma di cartella in alto a sinistra) elenca ogni documento conservato in questo browser.',
        '<b>Export</b> makes a PDF (from the Typst compiler, with real text) and pictures of the pages (PNG, JPG, WebP, SVG). <b>Download .typ</b> saves the code.':
            '<b>Esporta</b> crea un PDF (dal compilatore Typst, con testo reale) e immagini delle pagine (PNG, JPG, WebP, SVG). <b>Scarica .typ</b> salva il codice.',
        'Packages from Typst Universe (<code>#import "@preview/…"</code>) are not downloaded - nothing is loaded from other servers. Fonts: Libertinus Serif, New Computer Modern, DejaVu Sans Mono and the fonts you add to a document.':
            'I pacchetti di Typst Universe (<code>#import "@preview/…"</code>) non vengono scaricati - non viene caricato nulla da altri server. Caratteri: Libertinus Serif, New Computer Modern, DejaVu Sans Mono e i caratteri che aggiungi a un documento.',
        'Math: <code>$…$</code> around the selection': 'Formula: <code>$…$</code> attorno alla selezione',
        'Comment lines in or out (<code>//</code>)': 'Commenta o decommenta righe (<code>//</code>)',
        'Enter in a list continues it (<code>-</code>, <code>+</code>, <code>1.</code>); Enter on an empty item ends it. Brackets, <code>$</code>, <code>*</code> and <code>_</code> go around a selection.':
            'Invio in un elenco lo continua (<code>-</code>, <code>+</code>, <code>1.</code>); Invio su una voce vuota lo termina. Parentesi, <code>$</code>, <code>*</code> e <code>_</code> si mettono attorno a una selezione.',
    },

    patterns: [
        /* ---------- Status lines ---------- */
        ['^(\\d+) lines · ([\\d.]+ K?B)(?: · (\\d+) (?:page|pages))?$', (m, l, kb, p) => `${l} ${getPlural(l, 'riga', 'righe')} · ${kb}${p ? ` · ${p} ${getPlural(p, 'pagina', 'pagine')}` : ''}`],
        ['^(\\d+) (?:page|pages)$', (m, k) => `${k} ${getPlural(k, 'pagina', 'pagine')}`],
        ['^(\\d+) × (\\d+) pixels per page · (\\d+) (?:page|pages)$', (m, w, h, k) => `${w} × ${h} pixel per pagina · ${k} ${getPlural(k, 'pagina', 'pagine')}`],
        ['^(\\d+) (?:page|pages) as SVG \\(sharp at any size\\)$', (m, k) => `${k} ${getPlural(k, 'pagina', 'pagine')} in SVG (nitidezza a qualsiasi dimensione)`],
        ['^\\.typ and (\\d+) (?:file|files)$', (m, k) => `.typ e ${k} file`],
        ['^([\\d,]+) bytes$', (m, b) => `${formatThousands(b)} byte`],
        ['^words · (\\d+) × (\\d+) mm(?: · compiled in (\\d+) ms)?$', (m, w, h, ms) => `parole · ${w} × ${h} mm${ms ? ` · compilato in ${ms} ms` : ''}`],
        ['^\\d{1,3}(?:,\\d{3})+$', m => formatThousands(m)],

        /* Problems above the code */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'errore', 'errori')}`],
        ['^· (\\d+) (?:warning|warnings)$', (m, k) => `· ${k} ${getPlural(k, 'avviso', 'avvisi')}`],
        ['^(\\d+) (?:warning|warnings)$', (m, k) => `${k} ${getPlural(k, 'avviso', 'avvisi')}`],
        ['^Line (\\d+), column (\\d+)$', 'Riga $1, colonna $2'],

        /* ---------- Pictures tab ---------- */
        ['^(\\d+) (?:file|files) · (.+)$', (m, k, s) => `${k} file · ${s}`],
        ['^Choose the file for (.+)$', 'Scegli il file per $1'],
        ['^used (\\d+)×$', 'usato $1×'],
        ['^(.* · )?not used yet$', (m, a) => `${a || ''}non ancora usato`],
        ['^(.* · )?a font of the document$', (m, a) => `${a || ''}un carattere del documento`],

        /* ---------- Top bar and My documents ---------- */
        ['^"(.+)" is open\\. My documents: open, rename, duplicate or delete your documents \\(Ctrl\\+O\\)$', '«$1» è aperto. I miei documenti: apri, rinomina, duplica o elimina i tuoi documenti (Ctrl+O)'],
        ['^Start "(.+)" over\\?$', 'Ricominciare «$1»?'],
        ['^Start "(.+)" over$', 'Ricomincia «$1»'],
        ['^(\\d+) (?:document|documents) · (.+) in this browser$', (m, k, s) => `${k} ${getPlural(k, 'documento', 'documenti')} · ${formatSize(s)} in questo browser`],
        ['^No document named "(.*)"\\.$', 'Nessun documento di nome «$1».'],
        ['^Open now · (.+)$', (m, s) => `Aperto ora · ${formatSize(s)}`],
        ['^(just now|yesterday|\\d+ min ago|\\d+ h ago|[A-Z][a-z]{2} \\d{1,2}, \\d{4}) · (.+)$', (m, w, s) => `${formatTime(w)} · ${formatSize(s)}`],
        ['^(.+) \\(open now\\)$', '$1 (aperto ora)'],
        ['^ZIP with (\\d+) (?:document|documents) downloaded$', (m, k) => `ZIP con ${k} ${getPlural(k, 'documento', 'documenti')} scaricato`],

        /* ---------- AI Assistant ---------- */
        ['^Part (\\d+) of (\\d+) received$', 'Parte $1 di $2 ricevuta'],
        ['^Open the other (?:link|links) from the AI too \\(still missing: part (.+)\\)\\.$',
            'Apri anche gli altri link dell\'IA (manca ancora: parte $1).'],
        ['^Part (\\d+) of (\\d+) received - paste the other (?:link|links) too \\(missing: (.+)\\)$', 'Parte $1 di $2 ricevuta - incolla anche gli altri link (manca: $3)'],
        ['^The AI sends the document to (.+) with a key that only works for this session\\. What you paste into your AI is handled by its provider\\.$',
            'L\'IA invia il documento a $1 con una chiave valida solo per questa sessione. Ciò che incolli nella tua IA viene elaborato dal suo fornitore.'],
        ['^The AI sends its result to (.+) by itself, and it opens here\\. If it answers with a link, paste its answer below\\.$',
            'L\'IA invia da sola il risultato a $1, che si apre qui. Se risponde con un link, incolla qui sotto la sua risposta.'],
        ['^No key from (.+) - the prompt asks the AI for a link instead$', 'Nessuna chiave da $1 - il prompt chiede invece un link all\'IA'],
        ['^Prompt copied - the AI sends its result to (.+)$', 'Prompt copiato - l\'IA invia il risultato a $1'],

        /* ---------- Messages with names ---------- */
        ['^"(.+)" is now "(.+)"$', '«$1» ora si chiama «$2»'],
        ['^Remove "(.+)"\\?$', 'Rimuovere «$1»?'],
        ['^"(.+)" now has the new file$', '«$1» ora ha il nuovo file'],
        ['^"(.+)" added to "(.+)"$', '«$1» aggiunto a «$2»'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '«$1» ora è vuoto - «Annulla» lo ripristina'],
        ['^"(.+)" opened$', '«$1» aperto'],
        ['^New document "(.+)" - your other documents are under "My documents"$', 'Nuovo documento «$1» - gli altri tuoi documenti sono in «I miei documenti»'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$', 'Nuovo documento «$1» dall\'IA - gli altri tuoi documenti restano invariati'],
        ['^Opened "(.+)" - it is now in "My documents"$', '«$1» aperto - ora si trova in «I miei documenti»'],
        ['^Opened "(.+)" with (\\d+) (?:file|files)$', (m, f, k) => `«${f}» aperto con ${k} file`],
        ['^"(.+)" could not be opened: (.*)$', 'Impossibile aprire «$1»: $2'],
        ['^ZIP downloaded: \\.typ, files, PDF and (\\d+) (?:page|pages) as PNG and SVG$', (m, k) => `ZIP scaricato: .typ, file, PDF e ${k} ${getPlural(k, 'pagina', 'pagine')} in PNG e SVG`],
        ['^Document received - the compiler found (\\d+) (?:problem|problems), see above the code$', (m, k) => `Documento ricevuto - il compilatore ha trovato ${k} ${getPlural(k, 'problema', 'problemi')}, vedi sopra il codice`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '«$1» modificato dall\'IA - «Annulla» annulla la modifica'],
        ['^"(.+)" duplicated$', '«$1» duplicato'],
        ['^Delete "(.+)"\\?$', 'Eliminare «$1»?'],
        ['^"(.+)" deleted$', '«$1» eliminato'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Apri $1'],
    ],
};

export default dict;
