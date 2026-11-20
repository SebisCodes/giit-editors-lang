/* Italian texts of the Markdown editor: the bar, the work area (code,
   preview, insert, pictures, outline), its dialogs and messages, and the
   problems the preview finds in the code. What all editors share is in
   common.js; how the dictionaries are used is described in
   i18n.js. Names of documents, pictures and anchors stay as they are: the
   patterns copy them into the Italian text. */

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
const ZIP = { 'it is not a ZIP file': 'non è un file ZIP', 'there is no .md file in it': 'non contiene alcun file .md' };

const dict = {
    text: {
        // Editing in place: Enter and Shift+Enter
        "Editing on the page - Enter: new paragraph, Shift+Enter: new line, Ctrl+Enter or a click elsewhere keeps it, Escape cancels": "Modifica sulla pagina - Invio: nuovo paragrafo, Maiusc+Invio: nuova riga, Ctrl+Invio o un clic altrove conferma, Esc annulla",
        "A new paragraph inside bold, italic or a link is made in the code - Shift+Enter makes a new line": "Un nuovo paragrafo dentro grassetto, corsivo o un link si fa nel codice - Maiusc+Invio crea una nuova riga",
        /* Words that are the same in German and English, so not in the German pack */
        'Code': 'Codice',
        'Export': 'Esporta',
        'Format': 'Formato',

        /* ---------- Top bar ---------- */
        'Markdown Editor - home': 'Editor Markdown - pagina iniziale',
        'Markdown Editor': 'Editor Markdown',
        'File': 'File',
        'My documents (Ctrl+O)': 'I miei documenti (Ctrl+O)',
        'My documents': 'I miei documenti',
        'New document, or start this one over': 'Nuovo documento o ricomincia da capo questo',
        'New': 'Nuovo',
        'New blank document': 'Nuovo documento vuoto',
        'An empty page - your other documents stay as they are': 'Una pagina vuota - gli altri tuoi documenti restano come sono',
        'README': 'README',
        'Project name, features, installation and usage': 'Nome del progetto, funzioni, installazione e uso',
        'Article': 'Articolo',
        'Title, summary, sections and a quote': 'Titolo, riassunto, sezioni e una citazione',
        'Meeting notes': 'Verbale di riunione',
        'Agenda, decisions and a table of tasks': 'Ordine del giorno, decisioni e una tabella dei compiti',
        'Checklist': 'Checklist',
        'Tasks to tick off, in groups': 'Compiti da spuntare, in gruppi',
        'The welcome example': 'L\'esempio di benvenuto',
        'Shows what the editor can do': 'Mostra cosa sa fare l\'editor',
        'Start this document over': 'Ricomincia questo documento',
        'Empties the text, keeps the pictures - "Undo" brings it back': 'Svuota il testo, mantiene le immagini - «Annulla» lo ripristina',
        'Open a .md file (or a picture) from your computer (you can also drag it into the window)':
            'Apri un file .md (o un\'immagine) dal tuo computer (puoi anche trascinarlo nella finestra)',
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
        'Save the document as a .md file (Ctrl+S)': 'Salva il documento come file .md (Ctrl+S)',
        'Download .md': 'Scarica .md',
        'HTML, PDF, plain text and more (Ctrl+E)': 'HTML, PDF, testo semplice e altro (Ctrl+E)',
        'Export…': 'Esporta…',

        /* ---------- Views and work area ---------- */
        'View': 'Vista',
        'Edit': 'Modifica',
        'Preview': 'Anteprima',
        'Insert': 'Inserisci',
        'Markdown code': 'Codice Markdown',
        'Copy the Markdown to the clipboard': 'Copia il Markdown negli appunti',
        'Copy code': 'Copia codice',
        'Copy': 'Copia',
        'Drag to change the width of the code area': 'Trascina per cambiare la larghezza dell\'area del codice',
        'Drag to change the width': 'Trascina per cambiare la larghezza',
        'Formatting': 'Formattazione',
        'Bold (Ctrl+B)': 'Grassetto (Ctrl+B)',
        'Bold': 'Grassetto',
        'Italic (Ctrl+I)': 'Corsivo (Ctrl+I)',
        'Italic': 'Corsivo',
        'Strikethrough': 'Barrato',
        'Code in the text': 'Codice nel testo',
        'Link (Ctrl+K)': 'Inserisci link (Ctrl+K)',
        'Heading': 'Titolo',
        'Bulleted list': 'Elenco puntato',
        'Numbered list': 'Elenco numerato',
        'Task list': 'Elenco di compiti',
        'Table': 'Tabella',
        'Picture': 'Immagine',
        'Insert picture': 'Inserisci immagine',
        'Quote': 'Citazione',
        'Code block': 'Blocco di codice',
        'Math in the text (Ctrl+M)': 'Formula nel testo (Ctrl+M)',
        'Math': 'Matematica',
        'Text size': 'Dimensione del testo',
        'Smaller text in the preview': 'Testo più piccolo nell\'anteprima',
        'Smaller text': 'Testo più piccolo',
        'Normal text size': 'Dimensione normale del testo',
        'Larger text in the preview': 'Testo più grande nell\'anteprima',
        'Larger text': 'Testo più grande',
        'Preview of the document: click text to edit it, Ctrl+click follows a link': 'Anteprima del documento: fai clic su un testo per modificarlo; Ctrl+clic segue un link',
        'Updating…': 'Aggiornamento…',
        'Insert, pictures and outline': 'Inserisci, immagini e struttura',
        'Ready-made pieces: structure, text, math, symbols': 'Elementi pronti: struttura, testo, formule, simboli',
        'The pictures of this document': 'Le immagini di questo documento',
        'Pictures': 'Immagini',
        'The headings of the document': 'I titoli del documento',
        'Outline': 'Struttura',
        'The headings of the document. Click one to go there in the code and in the preview.':
            'I titoli del documento. Fai clic su uno per andarci nel codice e nell\'anteprima.',
        'No headings yet - start a line with # and a space.': 'Ancora nessun titolo - inizia una riga con # e uno spazio.',
        'Open it here': 'Aprilo qui',
        'Drop the .md file or picture here': 'Rilascia qui il file .md o l\'immagine',

        'The document is empty - write Markdown on the left, or choose a template under "New".': 'Il documento è vuoto - scrivi Markdown a sinistra, oppure scegli un modello in «Nuovo».',

        /* Problems above the code */
        'Hide': 'Nascondi',
        'Show': 'Mostra',

        /* ---------- Insert tab ---------- */
        'Structure': 'Struttura',
        'Heading 1': 'Titolo 1',
        'Heading 2': 'Titolo 2',
        'Heading 3': 'Titolo 3',
        '# Heading': '# Titolo',
        '## Heading': '## Titolo',
        '### Heading': '### Titolo',
        'Horizontal rule': 'Linea orizzontale',
        'Apply page breaks': 'Applica le interruzioni di pagina',
        'New page': 'Nuova pagina',
        'Document': 'Documento',
        '• Bulleted list': '• Elenco puntato',
        '1. Numbered list': '1. Numerato',
        '☐ Task list': '☐ Compiti',
        'Fold-out section': 'Espandibile',
        'Line break': 'A capo',
        'Text': 'Testo',
        '**bold** (Ctrl+B)': '**grassetto** (Ctrl+B)',
        '*italic* (Ctrl+I)': '*corsivo* (Ctrl+I)',
        '~~struck through~~': '~~barrato~~',
        'Link to a heading': 'Link a un titolo',
        '[text](#heading)': '[testo](#titolo)',
        '[text](https://…) (Ctrl+K)': '[testo](https://…) (Ctrl+K)',
        '![description](name.png)': '![descrizione](nome.png)',
        'Footnote': 'Nota a piè di pagina',
        '[^1] at the cursor, the note at the end': '[^1] al cursore, la nota alla fine',
        'Key': 'Tasto',
        'A key as on the keyboard: <kbd>Ctrl</kbd>': 'Un tasto come sulla tastiera: <kbd>Ctrl</kbd>',
        '`code` between backticks': '`codice` tra apici inversi',
        '$x$ in the text': '$x$ nel testo',
        'Displayed': 'In evidenza',
        '$$ … $$ on its own lines': '$$ … $$ su righe proprie',
        'Fraction': 'Frazione',
        'Root': 'Radice',
        'x² Power': 'x² Potenza',
        'x₁ Index': 'x₁ Pedice',
        '∑ Sum': '∑ Somma',
        '∫ Integral': '∫ Integrale',
        'lim Limit': 'lim Limite',
        '2×2 matrix': 'Matrice 2×2',
        'Cases': 'Casi',
        'Greek letters': 'Lettere greche',
        'Symbols': 'Simboli',
        'Pictures have their own tab:': 'Le immagini hanno una scheda tutta loro:',

        /* ---------- Pictures tab ---------- */
        'Add pictures…': 'Aggiungi immagini…',
        'No pictures yet': 'Ancora nessuna immagine',
        'Missing in this document': 'Mancano in questo documento',
        'Add file…': 'Aggiungi file…',
        'Show where it is used': 'Mostra dove viene usato',
        '![…](name) at the cursor': '![…](nome) al cursore',
        'Rename - the code is changed along': 'Rinomina - il codice viene adattato',
        'Rename': 'Rinomina',
        'Choose another file, keep the name': 'Scegli un altro file, mantieni il nome',
        'Replace': 'Sostituisci',
        'Download the picture': 'Scarica l\'immagine',
        'Download': 'Scarica',
        'Remove the picture from this document': 'Rimuovi l\'immagine da questo documento',
        'Remove': 'Rimuovi',
        'New name': 'Nuovo nome',
        'Pictures belong to “': 'Le immagini appartengono a «',
        '” and stay in your browser. Drop or paste them anywhere in the editor, or add them here;': '» e restano nel tuo browser. Trascinale o incollale ovunque nell\'editor, oppure aggiungile qui;',
        'uses them.': 'le usa.',

        /* ---------- Export ---------- */
        'Close': 'Chiudi',
        'File name': 'Nome del file',
        'HTML page (one file)': 'Pagina HTML (un file)',
        'PDF (print or save as PDF)': 'PDF (stampa o salva come PDF)',
        'Plain text': 'Testo semplice',
        'Markdown (.md)': 'File Markdown (.md)',
        'Markdown with pictures (ZIP)': 'Markdown con immagini (ZIP)',
        'Result': 'Risultato',
        'Download everything at once: .md, pictures, HTML and text': 'Scarica tutto in una volta: .md, immagini, HTML e testo',
        'All formats (ZIP)': 'Tutti i formati (ZIP)',
        'Print / Save as PDF': 'Stampa / Salva come PDF',
        '(The HTML page - with its pictures and styles inside - is created when you download or copy it.)':
            '(La pagina HTML - con immagini e stili incorporati - viene creata quando la scarichi o la copi.)',

        /* ---------- My documents ---------- */
        'Search by name': 'Cerca per nome',
        'Search your documents': 'Cerca nei tuoi documenti',
        'Open a .md file from your computer as a new document': 'Apri un file .md dal tuo computer come nuovo documento',
        'New document': 'Nuovo documento',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Fai clic su un documento per aprirlo. I documenti sono salvati solo in questo browser - non viene caricato nulla. Cancellando i dati del sito nel browser spariscono, quindi scarica quelli che vuoi conservare.',
        'Download every document as a .md file (with its pictures) in one ZIP': 'Scarica ogni documento come file .md (con le sue immagini) in un unico ZIP',
        'Download all (ZIP)': 'Scarica tutto (ZIP)',
        'Duplicate': 'Duplica',
        'Download as .md': 'Scarica come .md',
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
        'The document is now in the Markdown Editor tab you already had open. Switch to that tab, or open it here.':
            'Il documento ora si trova nella scheda dell\'Editor Markdown che avevi già aperto. Passa a quella scheda o aprilo qui.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)': 'Qui non è consentito copiare - il testo è selezionato qui sotto: premi Ctrl+C (⌘C)',
        'Paste it into your AI and say what it should write.': 'Incollalo nella tua IA e dille cosa deve scrivere.',
        'Prompt copied - paste it into your AI and say what it should write': 'Prompt copiato - incollalo nella tua IA e dille cosa deve scrivere',
        'This link is incomplete or damaged - please ask the AI to send it again': 'Questo link è incompleto o danneggiato - chiedi all\'IA di inviarlo di nuovo',

        /* ---------- Save to your server ---------- */
        'Save to your server': 'Salva sul tuo server',
        'Webhook address': 'Indirizzo del webhook',
        'https://example.com/api/markdown': 'https://esempio.it/api/markdown',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(facoltativo, inviato come «Authorization: Bearer …»; conservato finché questa scheda resta aperta)',
        'Send automatically a few seconds after each change (otherwise only when you click': 'Invia automaticamente pochi secondi dopo ogni modifica (altrimenti solo quando fai clic su',
        'or press Ctrl+S)': 'o premi Ctrl+S)',
        'Only for “': 'Solo per «',
        '” (other documents use the general address)': '» (gli altri documenti usano l\'indirizzo generale)',
        'What your server receives': 'Cosa riceve il tuo server',
        'A POST request with JSON (your server must allow CORS from https://md.giit.ch):': 'Una richiesta POST con JSON (il tuo server deve consentire CORS da https://md.giit.ch):',
        'Embed the editor in your website': 'Integra l\'editor nel tuo sito web',
        'Send now': 'Invia ora',
        'Save setting': 'Salva impostazione',

        /* ---------- Help ---------- */
        'How it works': 'Come funziona',
        'Keyboard shortcuts': 'Scorciatoie da tastiera',
        'Bold / italic around the selected text': 'Grassetto / corsivo attorno al testo selezionato',
        'Link': 'Link',
        'Show the cursor\'s place in the preview': 'Mostra la posizione del cursore nell\'anteprima',
        'Indent / outdent': 'Aumenta / riduci rientro',
        'Undo / redo': 'Annulla / ripeti',
        'Save (download .md, or to your server) / export': 'Salva (file .md o sul tuo server) / esporta',
        'Print / save as PDF': 'Stampa / salva come PDF',
        'Problems (a missing picture, a link to a heading that is not there, a code block that is never closed, a table row with too many cells) are listed above the code - click one to go there.':
            'I problemi (un\'immagine mancante, un link a un titolo che non esiste, un blocco di codice mai chiuso, una riga di tabella con troppe celle) sono elencati sopra il codice - fai clic su uno per andarci.',

        /* ---------- Messages ---------- */
        'The browser storage is full - download and delete documents under "My documents"': 'La memoria del browser è piena - scarica ed elimina documenti in «I miei documenti»',
        'The browser storage is full - delete or download documents under "My documents" first': 'La memoria del browser è piena - prima elimina o scarica documenti in «I miei documenti»',
        'The browser storage is full - delete or download some documents first': 'La memoria del browser è piena - prima elimina o scarica alcuni documenti',
        'The browser storage is full': 'La memoria del browser è piena',
        'Nothing to undo': 'Niente da annullare',
        'Nothing to redo': 'Niente da ripetere',
        'This text changed in the code - wait for the preview, then try again': 'Questo testo è cambiato nel codice - attendi l\'anteprima e poi riprova',
        'This box changed in the code - wait for the preview, then try again': 'Questa casella è cambiata nel codice - attendi l\'anteprima e poi riprova',
        'This picture changed in the code - wait for the preview, then try again': 'Questa immagine è cambiata nel codice - attendi l\'anteprima e poi riprova',
        'The code changed meanwhile - the edit was not used': 'Nel frattempo il codice è cambiato - la modifica non è stata applicata',
        'This anchor is not in the document': 'Quest’ancora non è nel documento',
        'The picture is removed from this document. Places that use it show its name in a frame. "Undo" does not bring it back.':
            'L\'immagine viene rimossa da questo documento. I punti che la usano mostrano il suo nome in una cornice. «Annulla» non la ripristina.',
        'Pictures can be PNG, JPG, GIF, WebP, SVG or PDF': 'Le immagini possono essere PNG, JPG, GIF, WebP, SVG o PDF',
        'The picture is larger than 12 MB': 'L\'immagine supera i 12 MB',
        'The picture could not be read': 'Impossibile leggere l\'immagine',
        'This document is empty already': 'Questo documento è già vuoto',
        'Everything is removed; the pictures of the document stay. "Undo" brings the text back as long as the page is open.':
            'Viene rimosso tutto; le immagini del documento restano. «Annulla» ripristina il testo finché la pagina è aperta.',
        'Start over': 'Ricomincia',
        'The file is larger than 8 MB': 'Il file supera gli 8 MB',
        'Downloaded': 'Scaricato',
        'Copied to the clipboard': 'Copiato negli appunti',
        'This browser does not allow copying this': 'Questo browser non consente di copiarlo',
        'Code copied': 'Codice copiato',
        '.md with its pictures downloaded (ZIP)': '.md con le immagini scaricato (ZIP)',
        '.md downloaded': '.md scaricato',
        'ZIP downloaded: .md, pictures, HTML and text': 'ZIP scaricato: .md, immagini, HTML e testo',
        'Add': 'Aggiungi',
        'The document and its pictures are removed from this browser for good. Download it first if you want to keep a copy.':
            'Il documento e le sue immagini vengono rimossi definitivamente da questo browser. Scaricalo prima se vuoi conservarne una copia.',

        /* ---------- Problems the preview finds (markdown.js) ---------- */
        '$$ is never closed - add a line with $$ after the formula': '$$ non viene mai chiuso - aggiungi una riga con $$ dopo la formula',
    },

    html: {

        '<b>Export</b> also has <b>Open in another editor</b>: it converts the document and opens it as a new document there. Anything the other format cannot hold is listed first.':

            '<b>Esporta</b> offre anche <b>Apri in un altro editor</b>: il documento viene convertito e aperto lì come nuovo documento. Ciò che l’altro formato non può contenere viene elencato prima.',

        '<b>Insert</b> &gt; <b>New page</b> sets a page break for printing and PDF; the preview shows it as a dashed line. Headings stay with their text and tables and pictures are not cut. In Export, <b>Apply page breaks</b> turns them off for a PDF.':

            '<b>Inserisci</b> &gt; <b>Nuova pagina</b> imposta un’interruzione di pagina per stampa e PDF; l’anteprima la mostra come linea tratteggiata. I titoli restano con il testo, tabelle e immagini non vengono tagliate. In <b>Esporta</b>, <b>Applica le interruzioni di pagina</b> le disattiva per un PDF.',
        /* Export */
        'The print dialog opens with the document only. Choose <b>Save as PDF</b> (or "Microsoft Print to PDF") as the printer. In Chrome and Edge, untick "Headers and footers" if the browser offers it. The text in the PDF stays sharp and can be selected.':
            'La finestra di stampa si apre solo con il documento. Scegli <b>Salva come PDF</b> (o «Microsoft Print to PDF») come stampante. In Chrome ed Edge togli la spunta da «Intestazioni e piè di pagina», se il browser la offre. Il testo nel PDF resta nitido e si può selezionare.',

        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Fai clic su <b>Copia il prompt</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'L\'IA risponde con un link: fai clic su di esso, oppure incolla qui sotto l\'intera risposta. <b>Annulla</b> annulla la modifica.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'L\'IA risponde con un link: <b>incolla qui sotto l\'intera risposta</b> (un link cliccato apre un editor separato). <b>Annulla</b> annulla la modifica.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'L\'editor può inviare ogni versione salvata al tuo server (un <b>webhook</b>), così il tuo lavoro resta dove vuoi tu. Non viene inviato nulla finché non inserisci qui un indirizzo.',
        'Also possible: <code>?src=&lt;URL of a .md file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>mdeditor:ai</code>, <code>mdeditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'È anche possibile: <code>?src=&lt;URL di un file .md&gt;</code> apre un file, <code>&amp;webhook=&lt;URL&gt;</code> salva lì questo documento. L\'editor può anche aprirsi in una finestra propria (<code>?embed=window</code>), e la tua pagina può passargli un proprio prompt per l\'IA e una chiave di sessione, così l\'IA invia il risultato al tuo server (<code>mdeditor:ai</code>, <code>mdeditor:key-request</code>) - vedi «Usare l\'editor sul tuo sito web» sotto l\'editor. I dettagli sono in <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> Markdown on the left - or start with <b>New</b> and one of the templates. The preview in the middle shows the document as you type.':
            '<b>Scrivi</b> Markdown a sinistra - oppure inizia con <b>Nuovo</b> e uno dei modelli. L\'anteprima al centro mostra il documento mentre scrivi.',
        '<b>Click text in the preview</b> to edit it right there: the cursor is where you clicked, and the code\'s cursor goes to the same place. <b>Enter</b> starts a new paragraph; <b>Shift+Enter</b> inserts a line break. <b>Ctrl+Enter</b> (<b>Cmd+Enter</b> on macOS) or a click elsewhere applies the edit; <b>Escape</b> cancels. Each edit is one step for Undo. Characters such as <code>*</code> or <code>_</code> are escaped so they stay text. A click on math, a picture or code jumps to its place in the code instead. <b>Ctrl</b> + click follows a link. A check box of a task list ticks the task in the code.':
            '<b>Fai clic su un testo nell\'anteprima</b> per modificarlo direttamente lì: il cursore si trova dove hai cliccato, e il cursore del codice va nello stesso punto. <b>Invio</b> inizia un nuovo paragrafo; <b>Maiusc+Invio</b> inserisce un’interruzione di riga. <b>Ctrl+Invio</b> (<b>Cmd+Invio</b> su macOS) o un clic altrove applica la modifica; <b>Esc</b> la annulla. Ogni modifica si annulla in un solo passaggio. Caratteri come <code>*</code> o <code>_</code> vengono preceduti da un escape, così restano testo. Un clic su una formula, un\'immagine o del codice salta invece al suo punto nel codice. <b>Ctrl</b> + clic segue un link. Una casella di un elenco di compiti spunta il compito nel codice.',
        '<b>Insert</b> on the right has ready-made pieces (headings, lists, tables, math, symbols); <b>Pictures</b> holds the pictures of the document; <b>Outline</b> lists the headings.':
            '<b>Inserisci</b> a destra ha elementi pronti (titoli, elenchi, tabelle, formule, simboli); <b>Immagini</b> contiene le immagini del documento; <b>Struttura</b> elenca i titoli.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser.':
            '<b>I miei documenti</b> (il pulsante a forma di cartella in alto a sinistra) elenca ogni documento conservato in questo browser.',
        '<b>Export</b> makes an HTML page, a PDF (via the print dialog) or plain text. <b>Download .md</b> saves the code (with its pictures as ZIP).':
            '<b>Esporta</b> crea una pagina HTML, un PDF (tramite la finestra di stampa) o testo semplice. <b>Scarica .md</b> salva il codice (con le sue immagini in ZIP).',
        'The preview understands CommonMark with GitHub\'s tables, task lists, strikethrough, autolinks and footnotes, and math in <code>$…$</code> and <code>$$…$$</code>. HTML in the Markdown is shown without scripts, styles, frames and forms.':
            'L\'anteprima capisce CommonMark con tabelle, elenchi di compiti, barrato, link automatici e note a piè di pagina di GitHub, e formule in <code>$…$</code> e <code>$$…$$</code>. L\'HTML nel Markdown appare senza script, stili, frame e moduli.',
        'Math: <code>$…$</code> around the selection': 'Formula: <code>$…$</code> attorno alla selezione',
        'Lines in or out of a comment (<code>&lt;!-- --&gt;</code>)': 'Commenta o decommenta righe (<code>&lt;!-- --&gt;</code>)',
        '<kbd>Enter</kbd> in a list starts the next item (<code>-</code>, <code>1.</code>, <code>- [ ]</code>, <code>&gt;</code>); on an empty item it ends the list. <code>* _ ` ~ $ [ (</code> close by themselves around a selection.':
            '<kbd>Enter</kbd> in un elenco inizia la voce successiva (<code>-</code>, <code>1.</code>, <code>- [ ]</code>, <code>&gt;</code>); su una voce vuota termina l\'elenco. <code>* _ ` ~ $ [ (</code> si chiudono da soli attorno a una selezione.',
    },

    patterns: [
        /* ---------- Status lines ---------- */
        ['^(\\d+) lines · ([\\d.]+ K?B) · (\\d+) (?:word|words)$', (m, l, kb, w) => `${l} ${getPlural(l, 'riga', 'righe')} · ${kb} · ${w} ${getPlural(w, 'parola', 'parole')}`],
        ['^\\.md and (\\d+) (?:picture|pictures)$', (m, k) => `.md e ${k} ${getPlural(k, 'immagine', 'immagini')}`],
        ['^([\\d,]+) bytes$', (m, b) => `${formatThousands(b)} byte`],
        ['^\\d{1,3}(?:,\\d{3})+$', m => formatThousands(m)],

        /* Problems above the code */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'errore', 'errori')}`],
        ['^· (\\d+) (?:note|notes)$', (m, k) => `· ${k} ${getPlural(k, 'nota', 'note')}`],
        ['^(\\d+) (?:note|notes)$', (m, k) => `${k} ${getPlural(k, 'nota', 'note')}`],
        ['^Line (\\d+)$', 'Riga $1'],
        ['^The preview failed: (.*)$', 'L\'anteprima non è riuscita: $1'],
        ['^The preview stopped at an unexpected problem: (.*)$', 'L\'anteprima si è fermata per un problema imprevisto: $1'],
        ['^Picture "(.+)" not found - drag the picture into the editor \\(or add it in the Pictures tab\\)$', 'Immagine «$1» non trovata - trascina l\'immagine nell\'editor (o aggiungila nella scheda «Immagini»)'],
        ['^The link to "(.+)" has no heading or anchor of that name$', 'Per il link a «$1» non esiste un titolo o un\'ancora con quel nome'],
        ['^This code block \\((.+)\\) is never closed - add a line with (.+) after the code$', 'Questo blocco di codice ($1) non viene mai chiuso - aggiungi una riga con $2 dopo il codice'],
        ['^This table row has (\\d+) (?:cell|cells), the header has (\\d+)$', (m, k, h) => `Questa riga della tabella ha ${k} ${getPlural(k, 'cella', 'celle')}, l'intestazione ne ha ${h}`],
        ['^Math: (.*)$', 'Formula: $1'],

        /* ---------- Pictures tab ---------- */
        ['^(\\d+) (?:picture|pictures) · (.+)$', (m, k, s) => `${k} ${getPlural(k, 'immagine', 'immagini')} · ${s}`],
        ['^Choose the file for (.+)$', 'Scegli il file per $1'],
        ['^Insert !\\[…\\]\\((.+)\\) at the cursor$', 'Inserisci ![…]($1) al cursore'],
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
        ['^"(.+)" now shows the new picture$', '«$1» ora mostra la nuova immagine'],
        ['^Picture "(.+)" added to "(.+)"$', 'Immagine «$1» aggiunta a «$2»'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '«$1» ora è vuoto - «Annulla» lo ripristina'],
        ['^"(.+)" opened$', '«$1» aperto'],
        ['^New document "(.+)" - your other documents are under "My documents"$', 'Nuovo documento «$1» - gli altri tuoi documenti sono in «I miei documenti»'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$', 'Nuovo documento «$1» dall\'IA - gli altri tuoi documenti restano invariati'],
        ['^"(.+)" is not a Markdown file$', '«$1» non è un file Markdown'],
        ['^Opened "(.+)" - it is now in "My documents"$', '«$1» aperto - ora si trova in «I miei documenti»'],
        ['^Opened "(.+)" with (\\d+) (?:picture|pictures)$', (m, f, k) => `«${f}» aperto con ${k} ${getPlural(k, 'immagine', 'immagini')}`],
        ['^"(.+)" could not be opened: (.*)$', (m, f, why) => `Impossibile aprire «${f}»: ${ZIP[why] || why}`],
        ['^Document received - the preview found (\\d+) (?:problem|problems), see above the code$', (m, k) => `Documento ricevuto - l'anteprima ha trovato ${k} ${getPlural(k, 'problema', 'problemi')}, vedi sopra il codice`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '«$1» modificato dall\'IA - «Annulla» annulla la modifica'],
        ['^"(.+)" duplicated$', '«$1» duplicato'],
        ['^Delete "(.+)"\\?$', 'Eliminare «$1»?'],
        ['^"(.+)" deleted$', '«$1» eliminato'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Apri $1'],
    ],
};

export default dict;
