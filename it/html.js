/* Italian texts of the HTML editor: the bar, the work area (code, preview,
   document settings, insert, files, outline), its dialogs and messages,
   and the problems the editor finds in the code. What all editors share is
   in common.js; how the dictionaries are used is described in
   i18n.js. Names of documents, files, elements and attributes stay as they
   are: the patterns copy them into the Italian text. */

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
const ZIP = { 'it is not a ZIP file': 'non è un file ZIP', 'there is no .html file in it': 'non contiene alcun file .html' };

const dict = {
    text: {
        // Editing in place: Enter and Shift+Enter
        "Editing in the preview - Enter: new paragraph, Shift+Enter: new line, Ctrl+Enter or a click elsewhere keeps it, Escape cancels": "Modifica nell'anteprima - Invio: nuovo paragrafo, Maiusc+Invio: nuova riga, Ctrl+Invio o un clic altrove conferma, Esc annulla",
        /* Words that are the same in German and English, so not in the German pack */
        'Code': 'Codice',
        'Export': 'Esporta',
        'Format': 'Formato',

        /* ---------- Top bar ---------- */
        'HTML Editor - home': 'Editor HTML - pagina iniziale',
        'HTML Editor': 'Editor HTML',
        'File': 'File',
        'My documents (Ctrl+O)': 'I miei documenti (Ctrl+O)',
        'My documents': 'I miei documenti',
        'New document, or start this one over': 'Nuovo documento o ricomincia da capo questo',
        'New': 'Nuovo',
        'New blank page': 'Nuova pagina vuota',
        'An empty HTML page - your other documents stay as they are': 'Una pagina HTML vuota - gli altri tuoi documenti restano come sono',
        'Landing page': 'Landing page',
        'A big header, three features and a footer': 'Una grande intestazione, tre punti di forza e un piè di pagina',
        'Article': 'Articolo',
        'Title, sections, a quote and a list': 'Titolo, sezioni, una citazione e un elenco',
        'Contact form': 'Modulo di contatto',
        'Name, email and message with labels': 'Nome, e-mail e messaggio con etichette',
        'Email newsletter': 'Newsletter via e-mail',
        'An email layout with a table': 'Un layout per e-mail con una tabella',
        'The welcome example': 'L\'esempio di benvenuto',
        'Shows what the editor can do': 'Mostra cosa sa fare l\'editor',
        'Start this document over': 'Ricomincia questo documento',
        'Keeps the head, empties the body - "Undo" brings it back': 'Mantiene l\'intestazione (head), svuota il corpo (body) - «Annulla» lo ripristina',
        'Open an .html file (or a picture, stylesheet or ZIP) from your computer (you can also drag it into the window)':
            'Apri un file .html (o un\'immagine, un foglio di stile o uno ZIP) dal tuo computer (puoi anche trascinarlo nella finestra)',
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
        'Save the page as an .html file - with its files as ZIP (Ctrl+S)': 'Salva la pagina come file .html - con i suoi file in ZIP (Ctrl+S)',
        'Download .html': 'Scarica .html',
        'HTML, one file with everything inside, ZIP, PDF and text (Ctrl+E)': 'HTML, un file con tutto dentro, ZIP, PDF e testo (Ctrl+E)',
        'Export…': 'Esporta…',

        /* ---------- Views and work area ---------- */
        'View': 'Vista',
        'Edit': 'Modifica',
        'Side panel': 'Pannello laterale',
        'Preview': 'Anteprima',
        'Document': 'Documento',
        'HTML code': 'Codice HTML',
        'Copy the HTML code to the clipboard': 'Copia il codice HTML negli appunti',
        'Copy code': 'Copia codice',
        'Copy': 'Copia',
        'Indent every line by the depth of its elements': 'Indenta ogni riga secondo la profondità dei suoi elementi',
        'Tidy up': 'Riordina',
        'Drag to change the width of the code area': 'Trascina per cambiare la larghezza dell\'area del codice',
        'Drag to change the width': 'Trascina per cambiare la larghezza',
        'Formatting': 'Formattazione',
        'Bold (Ctrl+B)': 'Grassetto (Ctrl+B)',
        'Bold': 'Grassetto',
        'Italic (Ctrl+I)': 'Corsivo (Ctrl+I)',
        'Italic': 'Corsivo',
        'Underline (Ctrl+U)': 'Sottolineato (Ctrl+U)',
        'Underline': 'Sottolineato',
        'Heading': 'Titolo',
        'Bulleted list': 'Elenco puntato',
        'Numbered list': 'Elenco numerato',
        'Table': 'Tabella',
        'Picture': 'Immagine',
        'Width of the preview': 'Larghezza dell\'anteprima',
        'As wide as the preview': 'Larga quanto l\'anteprima',
        'Full width': 'Larghezza intera',
        'Tablet (768 pixels wide)': 'Tablet (768 pixel di larghezza)',
        'Tablet width': 'Larghezza tablet',
        'Phone (390 pixels wide)': 'Telefono (390 pixel di larghezza)',
        'Phone width': 'Larghezza telefono',
        'Preview of the page: click text to edit it, or anything else to jump to its place in the code':
            'Anteprima della pagina: fai clic su un testo per modificarlo, o su qualcos\'altro per saltare al suo punto nel codice',
        'Preview of the page': 'Anteprima della pagina',
        'Updating…': 'Aggiornamento…',
        'Title, language, description and the stylesheets of the page': 'Titolo, lingua, descrizione e fogli di stile della pagina',
        'Ready-made pieces: structure, text, lists, media, forms, head': 'Elementi pronti: struttura, testo, elenchi, media, moduli, head',
        'Insert': 'Inserisci',
        'The pictures and other files of this document': 'Le immagini e gli altri file di questo documento',
        'Files': 'File',
        'The headings of the page': 'I titoli della pagina',
        'Outline': 'Struttura',
        'The headings of the page. Click one to go there in the code and in the preview.':
            'I titoli della pagina. Fai clic su uno per andarci nel codice e nell\'anteprima.',
        'No headings yet - add one with <h1> … <h6>.': 'Ancora nessun titolo - aggiungine uno con <h1> … <h6>.',
        'Open it here': 'Aprilo qui',
        'Drop the .html file, picture or stylesheet here': 'Rilascia qui il file .html, l\'immagine o il foglio di stile',

        /* Problems above the code */
        'Hide': 'Nascondi',
        'Show': 'Mostra',

        /* ---------- Insert tab ---------- */
        'Structure': 'Struttura',
        'Heading 1': 'Titolo 1',
        'Heading 2': 'Titolo 2',
        'Heading 3': 'Titolo 3',
        'Heading 4': 'Titolo 4',
        'Paragraph': 'Paragrafo',
        'Section': 'Sezione',
        'Header': 'Intestazione',
        'Navigation bar': 'Barra di navigazione',
        'Main content': 'Contenuto principale',
        'Footer': 'Piè di pagina',
        'Box': 'Riquadro',
        'Fold-out (details)': 'Espandibile (details)',
        'Dividing line': 'Linea divisoria',
        'Apply page breaks': 'Applica le interruzioni di pagina',
        'New page': 'Nuova pagina',
        'Line break': 'Interruzione di riga',
        'Comment': 'Commento',
        'Lists and tables': 'Elenchi e tabelle',
        '• Bulleted list': '• Elenco puntato',
        '1. Numbered list': '1. Elenco numerato',
        'Description list': 'Elenco descrittivo',
        'Highlighted': 'Evidenziato',
        'Small print': 'Testo piccolo',
        'Code in the text': 'Codice nel testo',
        'x² Superscript': 'x² Apice',
        'x₁ Subscript': 'x₁ Pedice',
        'Quote': 'Citazione',
        'Program code': 'Codice sorgente',
        'Inline part (span)': 'Parte nel testo (span)',
        'Media': 'Media',
        'Figure with caption': 'Figura con didascalia',
        'Video player': 'Lettore video',
        'Audio player': 'Lettore audio',
        'The files of the page have their own tab:': 'I file della pagina hanno una scheda tutta loro:',
        'Forms': 'Moduli',
        'Form': 'Modulo',
        'Text field': 'Campo di testo',
        'Email field': 'Campo e-mail',
        'Text area': 'Area di testo',
        'Choice list': 'Elenco a discesa',
        'Tick box': 'Casella di spunta',
        'Radio buttons': 'Pulsanti di opzione',
        'Button': 'Pulsante',
        'Head': 'Intestazione (head)',
        'Character set': 'Set di caratteri',
        'The character set: <meta charset="utf-8">': 'Il set di caratteri: <meta charset="utf-8">',
        'Fits phone screens: <meta name="viewport">': 'Adatta agli schermi dei telefoni: <meta name="viewport">',
        'Description': 'Descrizione',
        'For search engines: <meta name="description">': 'Per i motori di ricerca: <meta name="description">',
        'Shared links': 'Link condivisi',
        'Title, description and picture for shared links (Open Graph)': 'Titolo, descrizione e immagine per i link condivisi (Open Graph)',
        'Stylesheet file': 'File di stile',
        'A stylesheet file: <link rel="stylesheet">': 'Un file di stile: <link rel="stylesheet">',
        'Style block': 'Blocco di stile',
        'CSS in the page: <style> … </style>': 'CSS nella pagina: <style> … </style>',
        'Tab icon': 'Icona della scheda',
        'The icon in the browser tab: <link rel="icon">': 'L\'icona nella scheda del browser: <link rel="icon">',
        'Special characters': 'Caratteri speciali',
        'Insert &nbsp; (no-break space)': 'Inserisci &nbsp; (spazio non separabile)',
        'Insert &shy; (soft hyphen)': 'Inserisci &shy; (trattino facoltativo)',

        /* ---------- Files tab ---------- */
        'Add files…': 'Aggiungi file…',
        'No files yet': 'Ancora nessun file',
        'Missing in this document': 'Mancano in questo documento',
        'Add file…': 'Aggiungi file…',
        'Show where it is used': 'Mostra dove viene usato',
        'A picture (img) at the cursor': 'Un\'immagine (img) al cursore',
        'A link to the stylesheet in the head': 'Un link al foglio di stile nell\'intestazione (head)',
        'A reference to the file at the cursor': 'Un riferimento al file al cursore',
        'A figure with caption at the cursor': 'Una figura con didascalia al cursore',
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

        /* ---------- Document tab ---------- */
        'Title': 'Titolo',
        '(in the browser tab and in search results)': '(nella scheda del browser e nei risultati di ricerca)',
        'Language': 'Lingua',
        '(for search engines)': '(per i motori di ricerca)',
        'Author': 'Autore',
        'Characters as UTF-8 (meta charset)': 'Caratteri in UTF-8 (meta charset)',
        'Fits phone screens (meta viewport)': 'Adatta agli schermi dei telefoni (meta viewport)',
        'Linked stylesheets': 'Fogli di stile collegati',
        'No stylesheet is linked.': 'Nessun foglio di stile collegato.',
        'Add a .css file in the Files tab to link it here.': 'Aggiungi un file .css nella scheda «File» per collegarlo qui.',
        'Stylesheet of this document': 'Foglio di stile di questo documento',
        'Link it': 'Collega',
        'from the web': 'dal web',
        'a file of this document': 'un file di questo documento',
        'missing': 'mancante',
        'Show it in the code': 'Mostra nel codice',
        'Not set': 'Non impostata',
        'English (en)': 'Inglese (en)',
        'English, US (en-US)': 'Inglese, USA (en-US)',
        'English, UK (en-GB)': 'Inglese, Regno Unito (en-GB)',
        'German (de)': 'Tedesco (de)',
        'German, Switzerland (de-CH)': 'Tedesco, Svizzera (de-CH)',
        'German, Germany (de-DE)': 'Tedesco, Germania (de-DE)',
        'French (fr)': 'Francese (fr)',
        'Italian (it)': 'Italiano (it)',
        'Spanish (es)': 'Spagnolo (es)',
        'Portuguese (pt)': 'Portoghese (pt)',
        'Dutch (nl)': 'Olandese (nl)',
        'elements · about': 'elementi · circa',
        'element · about': 'elemento · circa',
        'words ·': 'parole ·',
        'headings ·': 'titoli ·',
        'heading ·': 'titolo ·',
        'files': 'file',
        'file': 'file',
        'Make it a complete page': 'Rendila una pagina completa',

        /* ---------- Export ---------- */
        'Close': 'Chiudi',
        'File name': 'Nome del file',
        'Page': 'Pagina',
        'HTML page (.html)': 'Pagina HTML (.html)',
        'One HTML file with its files inside': 'Un file HTML con i suoi file incorporati',
        'HTML with its files (ZIP)': 'HTML con i suoi file (ZIP)',
        'PDF (print or save as PDF)': 'PDF (stampa o salva come PDF)',
        'Plain text': 'Testo semplice',
        'Result': 'Risultato',
        'Download everything at once: .html, its files, the HTML with the files inside and the text':
            'Scarica tutto in una volta: .html, i suoi file, l\'HTML con i file incorporati e il testo',
        'All formats (ZIP)': 'Tutti i formati (ZIP)',
        'Print / Save as PDF': 'Stampa / Salva come PDF',
        '(The page with its files inside is created when you download or copy it.)':
            '(La pagina con i suoi file incorporati viene creata quando la scarichi o la copi.)',

        /* ---------- My documents ---------- */
        'Search by name': 'Cerca per nome',
        'Search your documents': 'Cerca nei tuoi documenti',
        'Open an .html file from your computer as a new document': 'Apri un file .html dal tuo computer come nuovo documento',
        'New document': 'Nuovo documento',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Fai clic su un documento per aprirlo. I documenti sono salvati solo in questo browser - non viene caricato nulla. Cancellando i dati del sito nel browser spariscono, quindi scarica quelli che vuoi conservare.',
        'Download every document as an .html file (with its files) in one ZIP': 'Scarica ogni documento come file .html (con i suoi file) in un unico ZIP',
        'Download all (ZIP)': 'Scarica tutto (ZIP)',
        'Duplicate': 'Duplica',
        'Download as .html': 'Scarica come .html',
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
        'The document is now in the HTML Editor tab you already had open. Switch to that tab, or open it here.':
            'Il documento ora si trova nella scheda dell\'Editor HTML che avevi già aperto. Passa a quella scheda o aprilo qui.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)': 'Qui non è consentito copiare - il testo è selezionato qui sotto: premi Ctrl+C (⌘C)',
        'Paste it into your AI and say what it should write.': 'Incollalo nella tua IA e dille cosa deve scrivere.',
        'Prompt copied - paste it into your AI and say what it should write': 'Prompt copiato - incollalo nella tua IA e dille cosa deve scrivere',
        'This link is incomplete or damaged - please ask the AI to send it again': 'Questo link è incompleto o danneggiato - chiedi all\'IA di inviarlo di nuovo',

        /* ---------- Save to your server ---------- */
        'Save to your server': 'Salva sul tuo server',
        'Webhook address': 'Indirizzo del webhook',
        'https://example.com/api/html': 'https://esempio.it/api/html',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(facoltativo, inviato come «Authorization: Bearer …»; conservato finché questa scheda resta aperta)',
        'Send automatically a few seconds after each change (otherwise only when you click': 'Invia automaticamente pochi secondi dopo ogni modifica (altrimenti solo quando fai clic su',
        'or press Ctrl+S)': 'o premi Ctrl+S)',
        'Only for “': 'Solo per «',
        '” (other documents use the general address)': '» (gli altri documenti usano l\'indirizzo generale)',
        'What your server receives': 'Cosa riceve il tuo server',
        'A POST request with JSON (your server must allow CORS from https://html.giit.ch):': 'Una richiesta POST con JSON (il tuo server deve consentire CORS da https://html.giit.ch):',
        'Embed the editor in your website': 'Integra l\'editor nel tuo sito web',
        'Send now': 'Invia ora',
        'Save setting': 'Salva impostazione',

        /* ---------- Help ---------- */
        'How it works': 'Come funziona',
        'Keyboard shortcuts': 'Scorciatoie da tastiera',
        'Bold / italic / underline the selected text': 'Testo selezionato in grassetto / corsivo / sottolineato',
        'Show the cursor\'s place in the preview': 'Mostra la posizione del cursore nell\'anteprima',
        'Indent / outdent': 'Aumenta / riduci rientro',
        'Undo / redo': 'Annulla / ripeti',
        'Save (download .html, or to your server) / export': 'Salva (file .html o sul tuo server) / esporta',
        'Print / save as PDF': 'Stampa / salva come PDF',

        /* ---------- Messages ---------- */
        'The browser storage is full - download and delete documents under "My documents"': 'La memoria del browser è piena - scarica ed elimina documenti in «I miei documenti»',
        'The browser storage is full - delete or download documents under "My documents" first': 'La memoria del browser è piena - prima elimina o scarica documenti in «I miei documenti»',
        'The browser storage is full - delete or download some documents first': 'La memoria del browser è piena - prima elimina o scarica alcuni documenti',
        'The browser storage is full': 'La memoria del browser è piena',
        'Nothing to undo': 'Niente da annullare',
        'Nothing to redo': 'Niente da ripetere',
        'The code changed meanwhile - the edit was not used': 'Nel frattempo il codice è cambiato - la modifica non è stata applicata',
        'The code changed meanwhile - the picture was not moved': 'Nel frattempo il codice è cambiato - l\'immagine non è stata spostata',
        'The file is removed from this document. Places that use it show nothing. "Undo" does not bring it back.':
            'Il file viene rimosso da questo documento. I punti che lo usano non mostrano più nulla. «Annulla» non lo ripristina.',
        'A document can keep pictures, stylesheets, scripts, fonts, PDFs, audio and video': 'Un documento può contenere immagini, fogli di stile, script, caratteri, PDF, audio e video',
        'The file is larger than 12 MB': 'Il file supera i 12 MB',
        'The file could not be read': 'Impossibile leggere il file',
        'The code is now a complete page': 'Il codice è ora una pagina completa',
        'The code is tidy already': 'Il codice è già in ordine',
        'Code tidied up': 'Codice riordinato',
        'This document is empty already': 'Questo documento è già vuoto',
        'Everything between <body> and </body> is removed; the head (title, styles, meta tags) stays. "Undo" brings it back as long as the page is open.':
            'Viene rimosso tutto tra <body> e </body>; l\'intestazione (titolo, stili, meta tag) resta. «Annulla» lo ripristina finché la pagina è aperta.',
        'Everything is removed. "Undo" brings it back as long as the page is open.': 'Viene rimosso tutto. «Annulla» lo ripristina finché la pagina è aperta.',
        'Start over': 'Ricomincia',
        'The file is larger than 8 MB': 'Il file supera gli 8 MB',
        'HTML pasted from the clipboard - "Undo" brings the old code back': 'HTML incollato dagli appunti - «Annulla» ripristina il codice precedente',
        'This browser does not allow printing here': 'Questo browser non consente di stampare qui',
        'Downloaded': 'Scaricato',
        'ZIP downloaded: .html, its files, the page as one file and the text': 'ZIP scaricato: .html, i suoi file, la pagina in un unico file e il testo',
        'Copied to the clipboard': 'Copiato negli appunti',
        'This browser does not allow copying this': 'Questo browser non consente di copiarlo',
        'Code copied': 'Codice copiato',
        '.html with its files downloaded (ZIP)': '.html con i suoi file scaricato (ZIP)',
        '.html downloaded': '.html scaricato',
        'Add': 'Aggiungi',
        'The document and its files are removed from this browser for good. Download it first if you want to keep a copy.':
            'Il documento e i suoi file vengono rimossi definitivamente da questo browser. Scaricalo prima se vuoi conservarne una copia.',

        /* ---------- Problems the editor finds (html.js) ---------- */
        'The comment <!-- is never closed - add -->': 'Il commento <!-- non viene mai chiuso - aggiungi -->',
        '<img> without alt - describe the picture (alt="…"), or alt="" if it only decorates': '<img> senza alt - descrivi l\'immagine (alt="…"), oppure alt="" se è solo decorativa',
        'No <!DOCTYPE html> at the top - browsers show the page in an older mode (quirks mode)': 'Manca <!DOCTYPE html> in cima - i browser mostrano la pagina in una modalità più vecchia (quirks mode)',
    },

    html: {

        '<b>Export</b> also has <b>Open in another editor</b>: it converts the document and opens it as a new document there. Anything the other format cannot hold is listed first.':

            '<b>Esporta</b> offre anche <b>Apri in un altro editor</b>: il documento viene convertito e aperto lì come nuovo documento. Ciò che l’altro formato non può contenere viene elencato prima.',

        '<b>Insert</b> &gt; <b>New page</b> sets a page break for printing and PDF; the preview shows it as a dashed line. Headings stay with their text and tables and pictures are not cut. In Export, <b>Apply page breaks</b> turns them off for a PDF.':

            '<b>Inserisci</b> &gt; <b>Nuova pagina</b> imposta un’interruzione di pagina per stampa e PDF; l’anteprima la mostra come linea tratteggiata. I titoli restano con il testo, tabelle e immagini non vengono tagliate. In <b>Esporta</b>, <b>Applica le interruzioni di pagina</b> le disattiva per un PDF.',
        /* Export */
        'The print dialog opens with the page as it is in the preview (without scripts). Choose <b>Save as PDF</b> (or "Microsoft Print to PDF") as the printer. In Chrome and Edge, untick "Headers and footers" and tick "Background graphics" if the page has colors. The text in the PDF can be selected.':
            'La finestra di stampa si apre con la pagina così com\'è nell\'anteprima (senza script). Scegli <b>Salva come PDF</b> (o «Microsoft Print to PDF») come stampante. In Chrome ed Edge togli la spunta da «Intestazioni e piè di pagina» e metti la spunta su «Grafica di sfondo» se la pagina ha colori. Il testo nel PDF si può selezionare.',

        /* Document tab without a head */
        'This code has no <code>&lt;html&gt;</code> with a <code>&lt;head&gt;</code>, so it is shown as a part of a page. Title, language and description belong in the head.':
            'Questo codice non ha un <code>&lt;html&gt;</code> con un <code>&lt;head&gt;</code>, quindi appare come parte di una pagina. Titolo, lingua e descrizione vanno nell\'intestazione (head).',

        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Fai clic su <b>Copia il prompt</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'L\'IA risponde con un link: fai clic su di esso, oppure incolla qui sotto l\'intera risposta. <b>Annulla</b> annulla la modifica.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'L\'IA risponde con un link: <b>incolla qui sotto l\'intera risposta</b> (un link cliccato apre un editor separato). <b>Annulla</b> annulla la modifica.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'L\'editor può inviare ogni versione salvata al tuo server (un <b>webhook</b>), così il tuo lavoro resta dove vuoi tu. Non viene inviato nulla finché non inserisci qui un indirizzo.',
        'Also possible: <code>?src=&lt;URL of an .html file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>htmleditor:ai</code>, <code>htmleditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'È anche possibile: <code>?src=&lt;URL di un file .html&gt;</code> apre un file, <code>&amp;webhook=&lt;URL&gt;</code> salva lì questo documento. L\'editor può anche aprirsi in una finestra propria (<code>?embed=window</code>), e la tua pagina può passargli un proprio prompt per l\'IA e una chiave di sessione, così l\'IA invia il risultato al tuo server (<code>htmleditor:ai</code>, <code>htmleditor:key-request</code>) - vedi «Usare l\'editor sul tuo sito web» sotto l\'editor. I dettagli sono in <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> HTML on the left - or start with <b>New</b> and one of the templates. The preview shows the page as you type.':
            '<b>Scrivi</b> HTML a sinistra - oppure inizia con <b>Nuovo</b> e uno dei modelli. L\'anteprima mostra la pagina mentre scrivi.',
        '<b>Click text in the preview</b> to edit it right there. Enter starts a new paragraph; Shift+Enter inserts a line break. Ctrl+Enter (Cmd+Enter on macOS) or a click elsewhere applies the edit; Escape cancels. Each edit is one step for Undo. A click on a picture or any other element jumps to its place in the code. The element at the code cursor gets a frame in the preview.':
            '<b>Fai clic su un testo nell’anteprima</b> per modificarlo direttamente lì. Invio inizia un nuovo paragrafo; Maiusc+Invio inserisce un’interruzione di riga. Ctrl+Invio (Cmd+Invio su macOS) o un clic altrove applica la modifica; Esc la annulla. Ogni modifica si può annullare in un solo passaggio. Un clic su un’immagine o su qualsiasi altro elemento salta al suo punto nel codice. L’elemento al cursore del codice viene evidenziato con una cornice nell’anteprima.',
        '<b>Document</b> on the right sets title, language and description of the page; <b>Insert</b> has ready-made pieces (headings, lists, tables, media, form fields, meta tags); <b>Files</b> holds the pictures, stylesheets and fonts of the page; <b>Outline</b> lists the headings.':
            '<b>Documento</b> a destra imposta titolo, lingua e descrizione della pagina; <b>Inserisci</b> ha elementi pronti (titoli, elenchi, tabelle, media, campi di modulo, meta tag); <b>File</b> contiene le immagini, i fogli di stile e i caratteri della pagina; <b>Struttura</b> elenca i titoli.',
        'Problems in the code (an unclosed <code>&lt;div&gt;</code>, a picture without <code>alt</code>, a missing file) are listed above the code - click one to go there.':
            'I problemi nel codice (un <code>&lt;div&gt;</code> non chiuso, un\'immagine senza <code>alt</code>, un file mancante) sono elencati sopra il codice - fai clic su uno per andarci.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser.':
            '<b>I miei documenti</b> (il pulsante a forma di cartella in alto a sinistra) elenca ogni documento conservato in questo browser.',
        '<b>Export</b> makes an HTML file, one HTML file with the files inside, a ZIP, a PDF (via the print dialog) or plain text. <b>Download .html</b> saves the code.':
            '<b>Esporta</b> crea un file HTML, un file HTML con i file incorporati, uno ZIP, un PDF (tramite la finestra di stampa) o testo semplice. <b>Scarica .html</b> salva il codice.',
        'The preview shows HTML and CSS as the browser does, but scripts and <code>on…</code> attributes never run and links do not navigate - so any page is safe to open.':
            'L\'anteprima mostra HTML e CSS come fa il browser, ma script e attributi <code>on…</code> non vengono mai eseguiti e i link non portano altrove - così qualsiasi pagina si apre in sicurezza.',
        'Comment lines in or out (<code>&lt;!-- --&gt;</code>)': 'Commenta o decommenta righe (<code>&lt;!-- --&gt;</code>)',
        'Typing <code>&gt;</code> at the end of a start tag adds its end tag, and <kbd>Enter</kbd> between the two indents the new line. Typing <code>&lt;/</code> closes the element that is open.':
            'Se scrivi <code>&gt;</code> alla fine di un tag di apertura, viene aggiunto il tag di chiusura, e <kbd>Enter</kbd> tra i due indenta la nuova riga. Scrivere <code>&lt;/</code> chiude l\'elemento aperto.',
    },

    patterns: [
        /* ---------- Status lines ---------- */
        ['^(\\d+) lines · ([\\d.]+ K?B)$', (m, l, kb) => `${l} ${getPlural(l, 'riga', 'righe')} · ${kb}`],
        ['^\\.html and (\\d+) (?:file|files)$', (m, k) => `.html e ${k} file`],
        ['^([\\d,]+) bytes$', (m, b) => `${formatThousands(b)} byte`],
        ['^\\d{1,3}(?:,\\d{3})+$', m => formatThousands(m)],

        /* Problems above the code */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'errore', 'errori')}`],
        ['^· (\\d+) (?:note|notes)$', (m, k) => `· ${k} ${getPlural(k, 'nota', 'note')}`],
        ['^(\\d+) (?:note|notes)$', (m, k) => `${k} ${getPlural(k, 'nota', 'note')}`],
        ['^Line (\\d+)$', 'Riga $1'],
        ['^The preview failed: (.*)$', 'L\'anteprima non è riuscita: $1'],
        ['^The tag <(\\S+) is never closed with >$', 'Il tag <$1 non viene mai chiuso con >'],
        ['^<(\\S+)> is obsolete - use CSS or a current element instead$', '<$1> è obsoleto - usa invece CSS o un elemento attuale'],
        ['^Unknown element <(\\S+)>$', 'Elemento sconosciuto <$1>'],
        ['^The attribute (\\S+) is given twice in <(\\S+)> - the browser uses the first one$', 'L\'attributo $1 compare due volte in <$2> - il browser usa il primo'],
        ['^The id "(.*)" is used twice$', 'L\'id «$1» è usato due volte'],
        ['^<(\\S+)\\/> - in HTML only void elements \\(like <br>\\) close themselves; add <\\/(\\S+)>$', '<$1/> - in HTML solo gli elementi vuoti (come <br>) si chiudono da soli; aggiungi </$2>'],
        ['^<(\\S+)> is never closed - add <\\/(\\S+)>$', '<$1> non viene mai chiuso - aggiungi </$2>'],
        ['^<\\/(\\S+)> - <(\\S+)> has no end tag$', '</$1> - <$2> non ha un tag di chiusura'],
        ['^<\\/(\\S+)> without an opening <(\\S+)>$', '</$1> senza un <$2> di apertura'],
        ['^<(\\S+)> is not closed before <\\/(\\S+)> - add <\\/(\\S+)> first$', '<$1> non viene chiuso prima di </$2> - aggiungi prima </$3>'],
        ['^The file "(.+)" is missing - add it in the Files tab \\(or drop it into the editor\\)$', 'Il file «$1» manca - aggiungilo nella scheda «File» (o trascinalo nell\'editor)'],

        /* ---------- Insert tab ---------- */
        ['^Insert (&[#\\w]+;)$', 'Inserisci $1'],

        /* ---------- Files tab ---------- */
        ['^(\\d+) (?:file|files) · (.+)$', (m, k, s) => `${k} file · ${s}`],
        ['^Files belong to “(.*)” and stay in your browser\\. Drop or paste pictures, stylesheets or fonts anywhere in the editor, or add them here; the code uses them by their name, e\\.g\\.$',
            'I file appartengono a «$1» e restano nel tuo browser. Trascina o incolla immagini, fogli di stile o caratteri ovunque nell\'editor, oppure aggiungili qui; il codice li usa con il loro nome, ad es.'],
        ['^Choose the file for (.+)$', 'Scegli il file per $1'],
        ['^Insert (.+) at the cursor$', 'Inserisci $1 al cursore'],
        ['^used (\\d+)×$', 'usato $1×'],
        ['^(.* · )?not used yet$', (m, a) => `${a || ''}non ancora usato`],

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
        ['^"(.+)" now has the new content$', '«$1» ora ha il nuovo contenuto'],
        ['^File "(.+)" added to "(.+)"$', 'File «$1» aggiunto a «$2»'],
        ['^"(.+)" is linked already$', '«$1» è già collegato'],
        ['^"(.+)" is linked$', '«$1» è collegato'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '«$1» ora è vuoto - «Annulla» lo ripristina'],
        ['^"(.+)" opened$', '«$1» aperto'],
        ['^New document "(.+)" - your other documents are under "My documents"$', 'Nuovo documento «$1» - gli altri tuoi documenti sono in «I miei documenti»'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$', 'Nuovo documento «$1» dall\'IA - gli altri tuoi documenti restano invariati'],
        ['^Opened "(.+)" - it is now in "My documents"$', '«$1» aperto - ora si trova in «I miei documenti»'],
        ['^Opened "(.+)" with (\\d+) (?:file|files)$', (m, f, k) => `«${f}» aperto con ${k} file`],
        ['^"(.+)" could not be opened: (.*)$', (m, f, why) => `Impossibile aprire «${f}»: ${ZIP[why] || why}`],
        ['^Document received - the editor found (\\d+) (?:problem|problems), see above the code$', (m, k) => `Documento ricevuto - l'editor ha trovato ${k} ${getPlural(k, 'problema', 'problemi')}, vedi sopra il codice`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '«$1» modificato dall\'IA - «Annulla» annulla la modifica'],
        ['^"(.+)" duplicated$', '«$1» duplicato'],
        ['^Delete "(.+)"\\?$', 'Eliminare «$1»?'],
        ['^"(.+)" deleted$', '«$1» eliminato'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Apri $1'],
    ],
};

export default dict;
