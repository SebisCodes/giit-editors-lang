/* Italian texts of the CSV editor: the bar, the work area (code, table,
   format, column, insert), its dialogs and messages, and the problems the
   editor finds in the CSV. What all editors share is in common.js;
   how the dictionaries are used is described in i18n.js. Names of
   documents, columns and cell values stay as they are: the patterns copy
   them into the Italian text. */

import { formatTime, formatThousands, getPlural } from './format.js';

/* "1,234" -> "1.234" (Italian thousands separator) */

/**
 * Translates the unit of a size text ("123 bytes").
 * @param {string} s - the English size text.
 * @returns {string} the text in the language.
 */
const formatSize = s => s.replace(/ bytes$/, ' byte');

/* When a document was last changed (files.js): "just now", "5 min ago", "Oct 25, 2026" … */

const SEPS = { comma: 'virgola', semicolon: 'punto e virgola', tab: 'tabulazione', pipe: 'barra verticale' };

const dict = {
    text: {
        /* Words that are the same in German and English, so not in the German pack */
        'Code': 'Codice',
        'Export': 'Esporta',

        /* The tab and the field "Format" (the same word in German, so not in the German pack) */
        'Format': 'Formato',

        /* ---------- Top bar ---------- */
        'CSV Editor - home': 'Editor CSV - pagina iniziale',
        'CSV Editor': 'Editor CSV',
        'File': 'File',
        'My documents (Ctrl+O)': 'I miei documenti (Ctrl+O)',
        'My documents': 'I miei documenti',
        'New document, or start this one over': 'Nuovo documento o ricomincia da capo questo',
        'New': 'Nuovo',
        'New empty table': 'Nuova tabella vuota',
        'Three columns - your other documents stay as they are': 'Tre colonne - gli altri tuoi documenti restano come sono',
        'Contacts': 'Contatti',
        'Names, email addresses and phone numbers': 'Nomi, indirizzi e-mail e numeri di telefono',
        'Product list': 'Elenco prodotti',
        'Article numbers, prices and stock': 'Codici articolo, prezzi e giacenze',
        'Budget': 'Bilancio',
        'Separated by semicolons, with decimal commas': 'Separato da punto e virgola, con virgola decimale',
        'Time sheet': 'Foglio ore',
        'Separated by tabs (TSV)': 'Separato da tabulazioni (TSV)',
        'The welcome example': 'L\'esempio di benvenuto',
        'Quotes, commas and line breaks in fields': 'Virgolette, virgole e a capo nei campi',
        'Start this document over': 'Ricomincia questo documento',
        'Keeps the header row, removes the data - "Undo" brings it back': 'Mantiene la riga di intestazione, rimuove i dati - «Annulla» li ripristina',
        'Open a CSV or TSV file from your computer (you can also drag it into the window)': 'Apri un file CSV o TSV dal tuo computer (puoi anche trascinarlo nella finestra)',
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
        'Save the document as a .csv file (Ctrl+S)': 'Salva il documento come file .csv (Ctrl+S)',
        'Download .csv': 'Scarica .csv',
        'Excel (XLSX), JSON, Markdown, HTML, TSV and more (Ctrl+E)': 'Excel (XLSX), JSON, Markdown, HTML, TSV e altro (Ctrl+E)',
        'Export…': 'Esporta…',

        /* ---------- Views and work area ---------- */
        'View': 'Vista',
        'Edit': 'Modifica',
        'Side panel': 'Pannello laterale',
        'Table': 'Tabella',
        'CSV code': 'Codice CSV',
        'Copy the CSV text to the clipboard': 'Copia il testo CSV negli appunti',
        'Copy code': 'Copia codice',
        'Copy': 'Copia',
        'Drag to change the width of the code area': 'Trascina per cambiare la larghezza dell\'area del codice',
        'Drag to change the width': 'Trascina per cambiare la larghezza',
        'Filter rows': 'Filtra righe',
        'Show only rows that contain this text (Ctrl+F)': 'Mostra solo le righe che contengono questo testo (Ctrl+F)',
        'Filter in': 'Filtra in',
        'Filter in all columns or in one': 'Filtra in tutte le colonne o in una',
        'All columns': 'Tutte le colonne',
        'Put the rows of the CSV into this order (one step for Undo)': 'Metti le righe del CSV in quest\'ordine (annullabile in un solo passaggio)',
        'Sort the data': 'Ordina i dati',
        'Show the rows in the order of the file': 'Mostra le righe nell\'ordine del file',
        'Turn off sorting': 'Disattiva l\'ordinamento',
        'Add a row below the selected one': 'Aggiungi una riga sotto quella selezionata',
        'Add a row': 'Aggiungi una riga',
        'Add a column at the end': 'Aggiungi una colonna alla fine',
        'Add a column': 'Aggiungi una colonna',
        'Table: arrow keys move, Enter edits, Ctrl+C / Ctrl+V copy and paste': 'Tabella: i tasti freccia spostano, Invio modifica, Ctrl+C / Ctrl+V copiano e incollano',
        'No data rows yet - type into the row marked ＋ or paste cells from a spreadsheet.': 'Ancora nessuna riga di dati - scrivi nella riga contrassegnata con ＋ o incolla celle da un foglio di calcolo.',
        'How the text is read: separator, quotes, header row, encoding, line endings': 'Come viene letto il testo: separatore, virgolette, riga di intestazione, codifica, fine riga',
        'Column': 'Colonna',
        'What the selected column holds': 'Cosa contiene la colonna selezionata',
        'Insert': 'Inserisci',
        'Rows, columns and cleaning up': 'Righe, colonne e pulizia',
        'Open it here': 'Aprilo qui',
        'Drop the CSV file here': 'Rilascia qui il file CSV',
        'Hide': 'Nascondi',
        'Show': 'Mostra',

        /* the table (grid.js translates these itself: the table is marked data-no-i18n) */
        'Select everything (Ctrl+A)': 'Seleziona tutto (Ctrl+A)',
        '(empty)': '(vuoto)',
        'Sort the view by this column': 'Ordina la vista per questa colonna',
        'Type here to add a row': 'Scrivi qui per aggiungere una riga',
        'Select the row': 'Seleziona la riga',
        'Cell': 'Cella',

        /* ---------- Format ---------- */
        'Reading the text': 'Lettura del testo',
        'Separator': 'Separatore',
        'Detect it': 'Rileva',
        'Comma ( , )': 'Virgola ( , )',
        'Semicolon ( ; )': 'Punto e virgola ( ; )',
        'Tab': 'Tabulazione',
        'Pipe ( | )': 'Barra verticale ( | )',
        'Quote character': 'Carattere di citazione',
        'Double quote ( " )': 'Doppie ( " )',
        "Single quote ( ' )": 'Singole ( \' )',
        'The first row holds the column names': 'La prima riga contiene i nomi delle colonne',
        'row': 'riga',
        'rows': 'righe',
        'column': 'colonna',
        'columns': 'colonne',
        'Line endings': 'Fine riga',
        'Windows (CRLF)': 'Come in Windows (CRLF)',
        'Unix, macOS (LF)': 'Come in Unix, macOS (LF)',
        'old Mac (CR)': 'Come nei vecchi Mac (CR)',
        'Opened as': 'Aperto come',
        'UTF-8 with BOM': 'UTF-8 con BOM',
        'Opening files': 'Apertura dei file',
        'Encoding of files you open': 'Codifica dei file che apri',
        'Detect it (UTF-8, otherwise Windows-1252)': 'Rileva (UTF-8, altrimenti Windows-1252)',
        'Always UTF-8': 'Sempre UTF-8',
        'Always Windows-1252 (Western European)': 'Sempre Windows-1252 (Europa occidentale)',
        'Read again as UTF-8': 'Rileggi come UTF-8',
        'Read again as Windows-1252': 'Rileggi come Windows-1252',
        'Download with a byte order mark (BOM), so that Excel reads UTF-8 correctly': 'Scarica con un byte order mark (BOM), così Excel legge correttamente l\'UTF-8',
        'Convert': 'Converti',
        'New separator': 'Nuovo separatore',
        'Quote every field': 'Ogni campo tra virgolette',
        'Quotes only where needed': 'Virgolette solo dove servono',

        /* ---------- Column ---------- */
        'Click a cell or a column head in the table to see what the column holds.': 'Fai clic su una cella o un\'intestazione di colonna nella tabella per vedere cosa contiene la colonna.',
        'Kind': 'Tipo',
        'Numbers': 'Numeri',
        'Dates': 'Date',
        'Empty': 'Vuote',
        'Filled': 'Compilate',
        'Different values': 'Valori diversi',
        'Smallest': 'Minimo',
        'Largest': 'Massimo',
        'Sum': 'Somma',
        'Average': 'Media',
        'Earliest': 'Prima data',
        'Latest': 'Ultima data',
        'Most frequent values': 'Valori più frequenti',
        'Sort the data by this column': 'Ordina i dati per questa colonna',
        'Ascending (A → Z)': 'Crescente (A → Z)',
        'Descending (Z → A)': 'Decrescente (Z → A)',
        'This changes the order of the rows in the CSV. Sorting with the arrows in the column heads only changes the view.': 'Questo cambia l\'ordine delle righe nel CSV. Ordinare con le frecce nelle intestazioni di colonna cambia solo la vista.',

        /* ---------- Insert ---------- */
        'Rows': 'Righe',
        'Row above': 'Riga sopra',
        'Row below': 'Riga sotto',
        'Duplicate': 'Duplica',
        'Delete': 'Elimina',
        'Delete the selected rows': 'Elimina le righe selezionate',
        'Move up': 'Sposta su',
        'Move down': 'Sposta giù',
        'Columns': 'Colonne',
        'Column left': 'Colonna a sinistra',
        'Column right': 'Colonna a destra',
        'Delete the selected columns': 'Elimina le colonne selezionate',
        'Move left': 'Sposta a sinistra',
        'Move right': 'Sposta a destra',
        'Clean up': 'Pulizia',
        'Remove spaces at the start and end of cells': 'Rimuovi gli spazi all\'inizio e alla fine delle celle',
        'Remove empty rows': 'Rimuovi le righe vuote',
        'Remove repeated rows': 'Rimuovi le righe ripetute',
        'Give every row all fields': 'Dai a ogni riga tutti i campi',
        'Rows with fewer fields than the header get empty fields': 'Le righe con meno campi dell\'intestazione ricevono campi vuoti',
        'Every change is written into the CSV and is one step for Undo.': 'Ogni modifica viene scritta nel CSV ed è annullabile in un solo passaggio.',

        /* ---------- Export ---------- */
        'Close': 'Chiudi',
        'File name': 'Nome del file',
        'Excel workbook (.xlsx)': 'Cartella di lavoro Excel (.xlsx)',
        'CSV with a separator of your choice': 'CSV con un separatore a tua scelta',
        'Tab-separated (.tsv)': 'Separato da tabulazioni (.tsv)',
        'JSON (objects with headers, arrays without)': 'JSON (oggetti con intestazioni, array senza)',
        'Markdown table': 'Tabella Markdown',
        'HTML table (one page)': 'Tabella HTML (una pagina)',
        'Encoding': 'Codifica',
        'Unicode (UTF-8)': 'Unicode (UTF-8)',
        'UTF-8 with BOM (for Excel)': 'UTF-8 con BOM (per Excel)',
        'Windows-1252 (Western European)': 'Windows-1252 (Europa occidentale)',
        'Protect CSV/TSV exports against formulas; plain signed numbers remain unchanged.':
            'Proteggi le esportazioni CSV/TSV dalle formule; i semplici numeri con segno restano invariati.',
        'Only the rows shown now (filter and sort of the table)': 'Solo le righe mostrate ora (filtro e ordinamento della tabella)',
        'Result': 'Risultato',
        'Download every format at once': 'Scarica tutti i formati in una volta',
        'All formats (ZIP)': 'Tutti i formati (ZIP)',
        'Download': 'Scarica',
        '(The workbook is made when you download it: one sheet, the header row in bold, numbers as numbers, everything else as text - never as a formula.)':
            '(La cartella di lavoro viene creata quando la scarichi: un foglio, la riga di intestazione in grassetto, i numeri come numeri, tutto il resto come testo - mai come formula.)',

        /* ---------- My documents ---------- */
        'Search by name': 'Cerca per nome',
        'Search your documents': 'Cerca nei tuoi documenti',
        'Open a CSV file from your computer as a new document': 'Apri un file CSV dal tuo computer come nuovo documento',
        'New document': 'Nuovo documento',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Fai clic su un documento per aprirlo. I documenti sono salvati solo in questo browser - non viene caricato nulla. Cancellando i dati del sito nel browser spariscono, quindi scarica quelli che vuoi conservare.',
        'Download every document as a .csv file in one ZIP': 'Scarica ogni documento come file .csv in un unico ZIP',
        'Download all (ZIP)': 'Scarica tutto (ZIP)',
        'Rename': 'Rinomina',
        'Download as .csv': 'Scarica come .csv',
        'New name': 'Nuovo nome',
        'This document is open': 'Questo documento è aperto',
        'Click to open this document': 'Fai clic per aprire questo documento',
        'No documents yet.': 'Ancora nessun documento.',
        'The document is removed from this browser for good. Download it first if you want to keep a copy.':
            'Il documento viene rimosso definitivamente da questo browser. Scaricalo prima se vuoi conservarne una copia.',

        /* ---------- AI Assistant ---------- */
        'Any AI can work with you - ChatGPT, Claude, Gemini, Copilot.': 'Qualsiasi IA può lavorare con te - ChatGPT, Claude, Gemini, Copilot.',
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
        'The table travels in the link after the “#”, which no server sees. What you paste into your AI is handled by its provider.':
            'La tabella viaggia nel link dopo il «#», che nessun server vede. Ciò che incolli nella tua IA viene elaborato dal suo fornitore.',
        'The prompt - copy it with Ctrl+C': 'Il prompt - copialo con Ctrl+C',
        'Copy prompt': 'Copia il prompt',
        'Paste it into your AI and say what it should do with the table.': 'Incollalo nella tua IA e dille cosa deve fare con la tabella.',
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
        'The table is now in the CSV Editor tab you already had open. Switch to that tab, or open it here.': 'La tabella ora si trova nella scheda dell\'Editor CSV che avevi già aperto. Passa a quella scheda o aprila qui.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)': 'Qui non è consentito copiare - il testo è selezionato qui sotto: premi Ctrl+C (⌘C)',
        'Prompt copied - paste it into your AI and say what it should write': 'Prompt copiato - incollalo nella tua IA e dille cosa deve scrivere',
        'This link is incomplete or damaged - please ask the AI to send it again': 'Questo link è incompleto o danneggiato - chiedi all\'IA di inviarlo di nuovo',

        /* ---------- Save to your server ---------- */
        'Save to your server': 'Salva sul tuo server',
        'Webhook address': 'Indirizzo del webhook',
        'https://example.com/api/csv': 'https://esempio.it/api/csv',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(facoltativo, inviato come «Authorization: Bearer …»; conservato finché questa scheda resta aperta)',
        'Send automatically a few seconds after each change (otherwise only when you click': 'Invia automaticamente pochi secondi dopo ogni modifica (altrimenti solo quando fai clic su',
        'or press Ctrl+S)': 'o premi Ctrl+S)',
        'Only for “': 'Solo per «',
        '” (other documents use the general address)': '» (gli altri documenti usano l\'indirizzo generale)',
        'What your server receives': 'Cosa riceve il tuo server',
        'A POST request with JSON (your server must allow CORS from https://csv.giit.ch):': 'Una richiesta POST con JSON (il tuo server deve consentire CORS da https://csv.giit.ch):',
        'Embed the editor in your website': 'Integra l\'editor nel tuo sito web',
        'Send now': 'Invia ora',
        'Save setting': 'Salva impostazione',

        /* ---------- Help ---------- */
        'How it works': 'Come funziona',
        'A click in the table puts the code\'s cursor on that field; the cursor in the code selects its cell.':
            'Un clic nella tabella porta il cursore del codice su quel campo; il cursore nel codice seleziona la sua cella.',
        'Problems (rows with another number of fields, unclosed quotes, empty or repeated header names) are listed above the code - click one to go there.':
            'I problemi (righe con un numero diverso di campi, virgolette non chiuse, nomi di intestazione vuoti o ripetuti) sono elencati sopra il codice - fai clic su uno per andarci.',
        'Keyboard shortcuts in the table': 'Scorciatoie da tastiera nella tabella',
        'Move, select a range': 'Spostati, seleziona un intervallo',
        'Edit the cell (typing replaces its value)': 'Modifica la cella (scrivere sostituisce il suo valore)',
        'A line break inside the cell': 'Un a capo dentro la cella',
        'Next / previous cell': 'Cella successiva / precedente',
        'Empty the selected cells': 'Svuota le celle selezionate',
        'Copy / cut / paste (tab-separated, as spreadsheets use it)': 'Copia / taglia / incolla (separato da tabulazioni, come nei fogli di calcolo)',
        'Select the whole table': 'Seleziona l\'intera tabella',
        'Filter the rows': 'Filtra le righe',
        'Undo / redo': 'Annulla / ripeti',
        'Save (download .csv, or to your server) / export': 'Salva (file .csv o sul tuo server) / esporta',
        'in the code': 'nel codice',
        'Go to the cursor\'s cell in the table': 'Vai alla cella del cursore nella tabella',
        '+ arrows': '+ frecce',
        '/ typing': '/ digitazione',

        /* ---------- Messages ---------- */
        'The browser storage is full - download and delete documents under "My documents"': 'La memoria del browser è piena - scarica ed elimina documenti in «I miei documenti»',
        'The browser storage is full - delete or download documents under "My documents" first': 'La memoria del browser è piena - prima elimina o scarica documenti in «I miei documenti»',
        'The browser storage is full - delete or download some documents first': 'La memoria del browser è piena - prima elimina o scarica alcuni documenti',
        'The browser storage is full': 'La memoria del browser è piena',
        'Nothing to undo': 'Niente da annullare',
        'Nothing to redo': 'Niente da ripetere',
        'This document is empty already': 'Questo documento è già vuoto',
        'Start over': 'Ricomincia',
        'Every row except the header row is removed. "Undo" brings them back as long as the page is open.': 'Vengono rimosse tutte le righe tranne quella di intestazione. «Annulla» le ripristina finché la pagina è aperta.',
        'Everything is removed. "Undo" brings it back as long as the page is open.': 'Viene rimosso tutto. «Annulla» lo ripristina finché la pagina è aperta.',
        'The file is larger than 60 MB': 'Il file supera i 60 MB',
        'Downloaded': 'Scaricato',
        'Copied to the clipboard': 'Copiato negli appunti',
        'CSV copied': 'CSV copiato',
        '.csv downloaded': '.csv scaricato',
        '.tsv downloaded': '.tsv scaricato',
        'Add': 'Aggiungi',
        'Replace': 'Sostituisci',
        'Cell copied': 'Cella copiata',
        'Pasted into 1 cell': 'Incollato in 1 cella',
        'Row added': 'Riga aggiunta',
        'Row duplicated': 'Riga duplicata',
        'Row deleted - "Undo" brings it back': 'Riga eliminata - «Annulla» la ripristina',
        'Select a row first': 'Prima seleziona una riga',
        'Turn off sorting and the filter to move rows': 'Disattiva ordinamento e filtro per spostare le righe',
        'Column added': 'Colonna aggiunta',
        'Column deleted - "Undo" brings it back': 'Colonna eliminata - «Annulla» la ripristina',
        'No cell has spaces at its start or end': 'Nessuna cella ha spazi all\'inizio o alla fine',
        'There are no empty rows': 'Non ci sono righe vuote',
        'There are no repeated rows': 'Non ci sono righe ripetute',
        'Every row has enough fields': 'Ogni riga ha abbastanza campi',
        'Every field is in quotes now': 'Ora ogni campo è tra virgolette',
        'The text already uses this separator': 'Il testo usa già questo separatore',
        'ZIP downloaded: CSV, TSV, JSON, Markdown, HTML and XLSX': 'ZIP scaricato: CSV, TSV, JSON, Markdown, HTML e XLSX',

        /* ---------- Problems ---------- */
        'This quote is never closed - the rest of the file is one field': 'Questa virgoletta non viene mai chiusa - il resto del file è un unico campo',
        'Text after the closing quote of a field': 'Testo dopo la virgoletta di chiusura di un campo',
        'A quote inside a field that does not start with a quote': 'Una virgoletta dentro un campo che non inizia con una virgoletta',
        'Empty line': 'Riga vuota',
    },

    html: {

        '<b>Export</b> also has <b>Open in another editor</b>: it converts the document and opens it as a new document there. Anything the other format cannot hold is listed first.':

            '<b>Esporta</b> offre anche <b>Apri in un altro editor</b>: il documento viene convertito e aperto lì come nuovo documento. Ciò che l’altro formato non può contenere viene elencato prima.',
        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Fai clic su <b>Copia il prompt</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'L\'IA risponde con un link: fai clic su di esso, oppure incolla qui sotto l\'intera risposta. <b>Annulla</b> annulla la modifica.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'L\'IA risponde con un link: <b>incolla qui sotto l\'intera risposta</b> (un link cliccato apre un editor separato). <b>Annulla</b> annulla la modifica.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'L\'editor può inviare ogni versione salvata al tuo server (un <b>webhook</b>), così il tuo lavoro resta dove vuoi tu. Non viene inviato nulla finché non inserisci qui un indirizzo.',
        'Also possible: <code>?src=&lt;URL of a .csv file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>csveditor:ai</code>, <code>csveditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'È anche possibile: <code>?src=&lt;URL di un file .csv&gt;</code> apre un file, <code>&amp;webhook=&lt;URL&gt;</code> salva lì questo documento. L\'editor può anche aprirsi in una finestra propria (<code>?embed=window</code>), e la tua pagina può passargli un proprio prompt per l\'IA e una chiave di sessione, così l\'IA invia il risultato al tuo server (<code>csveditor:ai</code>, <code>csveditor:key-request</code>) - vedi «Usare l\'editor sul tuo sito web» sotto l\'editor. I dettagli sono in <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Open</b> a CSV file, drop it into the window, or start with <b>New</b>. The raw text is on the left, the table in the middle.':
            '<b>Apri</b> un file CSV, trascinalo nella finestra, oppure inizia con <b>Nuovo</b>. Il testo grezzo è a sinistra, la tabella al centro.',
        '<b>Edit cells</b> in the table like in a spreadsheet: type, or press <b>Enter</b> or <b>F2</b>, or double-click a cell. <b>Enter</b> or <b>Tab</b> keeps the value, <b>Escape</b> cancels. The change goes into the CSV text right at that field - quotes only where needed, the line endings stay - and is one step for Undo.':
            '<b>Modifica le celle</b> nella tabella come in un foglio di calcolo: scrivi, oppure premi <b>Invio</b> o <b>F2</b>, o fai doppio clic su una cella. <b>Invio</b> o <b>Tab</b> conferma il valore, <b>Esc</b> annulla. La modifica va nel testo CSV proprio in quel campo - virgolette solo dove servono, i fine riga restano - ed è annullabile in un solo passaggio.',
        '<b>Copy and paste</b> ranges between the table and Excel, LibreOffice or Google Sheets with Ctrl+C and Ctrl+V. Type into the row marked ＋ to add a row.':
            '<b>Copia e incolla</b> intervalli tra la tabella ed Excel, LibreOffice o Google Sheets con Ctrl+C e Ctrl+V. Scrivi nella riga contrassegnata con ＋ per aggiungere una riga.',
        '<b>Sort</b> with the arrows in the column heads and <b>filter</b> above the table: that only changes the view. <b>Sort the data</b> puts the rows of the file into that order.':
            '<b>Ordina</b> con le frecce nelle intestazioni di colonna e <b>filtra</b> sopra la tabella: cambia solo la vista. <b>Ordina i dati</b> mette le righe del file in quell\'ordine.',
        '<b>Format</b> on the right sets how the text is read (separator, quote, header row) and converts it; <b>Column</b> shows what a column holds; <b>Insert</b> adds, deletes and moves rows and columns and cleans up.':
            '<b>Formato</b> a destra imposta come viene letto il testo (separatore, virgolette, riga di intestazione) e lo converte; <b>Colonna</b> mostra cosa contiene una colonna; <b>Inserisci</b> aggiunge, elimina e sposta righe e colonne e fa pulizia.',
        '<b>Export</b> makes an Excel workbook, JSON, Markdown, HTML, TSV or CSV with another separator. <b>Download .csv</b> saves the text as it is.':
            '<b>Esporta</b> crea una cartella di lavoro Excel, JSON, Markdown, HTML, TSV o CSV con un altro separatore. <b>Scarica .csv</b> salva il testo così com\'è.',
        '<kbd>Delete</kbd>': '<kbd>Canc</kbd>',
    },

    patterns: [
        /* ---------- Code and table ---------- */
        ['^([\\d,]+) (?:line|lines) · (.+) · ([\\d,]+) × (\\d+)$', (m, l, s, r, c) => `${formatThousands(l)} ${getPlural(l, 'riga', 'righe')} · ${formatSize(s)} · ${formatThousands(r)} × ${c}`],
        ['^([\\d,]+) (?:row|rows), (\\d+) (?:column|columns)$', (m, r, c) => `${formatThousands(r)} ${getPlural(r, 'riga', 'righe')}, ${c} ${getPlural(c, 'colonna', 'colonne')}`],
        ['^([\\d,]+) of ([\\d,]+) rows$', (m, a, b) => `${formatThousands(a)} di ${formatThousands(b)} righe`],
        ['^([\\d,]+) (?:row|rows)$', (m, k) => `${formatThousands(k)} ${getPlural(k, 'riga', 'righe')}`],
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'errore', 'errori')}`],
        ['^([\\d,]+) (?:note|notes)$', (m, k) => `${formatThousands(k)} ${getPlural(k, 'nota', 'note')}`],
        ['^Line (\\d+)$', 'Riga $1'],
        ['^(\\d+) (?:field|fields) - the header has (\\d+)$', (m, k, h) => `${k} ${getPlural(k, 'campo', 'campi')} - l'intestazione ne ha ${h}`],
        ['^(\\d+) (?:field|fields) - most rows have (\\d+)$', (m, k, h) => `${k} ${getPlural(k, 'campo', 'campi')} - la maggior parte delle righe ne ha ${h}`],
        ['^Column (\\S+) has no name$', 'La colonna $1 non ha un nome'],
        ['^The name "(.+)" is used twice \\(columns (\\S+) and (\\S+)\\)$', 'Il nome «$1» è usato due volte (colonne $2 e $3)'],
        ['^(\\d+) cells copied$', '$1 celle copiate'],
        ['^Pasted into (\\d+) cells$', 'Incollato in $1 celle'],
        ['^Sorted by$', 'Ordinato per'],
        ['^\\(view only\\)$', '(solo la vista)'],

        /* ---------- Messages ---------- */
        ['^(\\d+) rows duplicated$', '$1 righe duplicate'],
        ['^(\\d+) rows deleted - "Undo" brings them back$', '$1 righe eliminate - «Annulla» le ripristina'],
        ['^(\\d+) columns deleted - "Undo" brings them back$', '$1 colonne eliminate - «Annulla» le ripristina'],
        ['^The data is sorted by "(.*)" - "Undo" takes it back$', 'I dati sono ordinati per «$1» - «Annulla» annulla la modifica'],
        ['^Spaces removed in (\\d+) (?:cell|cells)$', (m, k) => `Spazi rimossi in ${k} ${getPlural(k, 'cella', 'celle')}`],
        ['^(\\d+) empty (?:row|rows) removed$', (m, k) => `${k} ${getPlural(k, 'riga vuota rimossa', 'righe vuote rimosse')}`],
        ['^(\\d+) repeated (?:row|rows) removed$', (m, k) => `${k} ${getPlural(k, 'riga ripetuta rimossa', 'righe ripetute rimosse')}`],
        ['^(\\d+) (?:row|rows) filled up to (\\d+) fields$', (m, k, w) => `${k} ${getPlural(k, 'riga completata', 'righe completate')} fino a ${w} campi`],
        ['^Separator converted to (\\w+)$', (m, s) => `Separatore convertito in ${SEPS[s] || s}`],
        ['^Line endings: Windows \\(CRLF\\)$', 'Fine riga: Windows (CRLF)'],
        ['^Line endings: Unix, macOS \\(LF\\)$', 'Fine riga: Unix, macOS (LF)'],

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
        ['^"(.+)" is empty now - "Undo" brings it back$', '«$1» ora è vuoto - «Annulla» lo ripristina'],
        ['^"(.+)" opened$', '«$1» aperto'],
        ['^New document "(.+)" - your other documents are under "My documents"$', 'Nuovo documento «$1» - gli altri tuoi documenti sono in «I miei documenti»'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$', 'Nuovo documento «$1» dall\'IA - gli altri tuoi documenti restano invariati'],
        ['^"(.+)" is not a CSV file$', '«$1» non è un file CSV'],
        ['^Opened "(.+)" as Windows-1252 - it is now in "My documents"$', '«$1» aperto come Windows-1252 - ora si trova in «I miei documenti»'],
        ['^Opened "(.+)" - it is now in "My documents"$', '«$1» aperto - ora si trova in «I miei documenti»'],
        ['^Table received - the editor found (\\d+) (?:problem|problems), see above the code$', (m, k) => `Tabella ricevuta - l'editor ha trovato ${k} ${getPlural(k, 'problema', 'problemi')}, vedi sopra il codice`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '«$1» modificato dall\'IA - «Annulla» annulla la modifica'],
        ['^"(.+)" duplicated$', '«$1» duplicato'],
        ['^Delete "(.+)"\\?$', 'Eliminare «$1»?'],
        ['^"(.+)" deleted$', '«$1» eliminato'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Apri $1'],
    ],
};

export default dict;
