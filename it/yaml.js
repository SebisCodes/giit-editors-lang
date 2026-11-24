/* Italian texts of the YAML editor: the bar, the work area (code, tree,
   value, insert, convert, schema), its dialogs and messages, and the
   problems found in the code. What all editors share is in
   common.js; how the dictionaries are used is described in
   i18n.js. Names of documents, keys and values stay as they are: the
   patterns copy them into the Italian text. */

import { formatTime, formatThousands, getPlural } from './format.js';

/* "1,234" -> "1.234" (Italian thousands separator) */

/**
 * Translates the unit of a size text ("123 bytes").
 * @param {string} s - the English size text.
 * @returns {string} the text in the language.
 */
const formatSize = s => s.replace(/ bytes$/, ' byte');

/* When a document was last changed (files.js): "just now", "5 min ago", "Mon D, YYYY" … */

/* Words inside messages */
const TYPE = { string: 'stringa', number: 'numero', boolean: 'booleano', null: 'null', object: 'oggetto', array: 'array', integer: 'intero' };
/**
 * Translates the text the pattern found (FOUND in the English pattern).
 * @param {string} s - the English text the pattern found.
 * @returns {string} the text in the language.
 */
const translateFound = s => (s === 'the end of the text' ? 'la fine del testo' : s === 'the end of the line' ? 'la fine della riga' : s);

const dict = {
    text: {
        /* ---------- Template placeholders (?template=): views of the tree, box, side panel ---------- */
        'Show or hide the side panel': 'Mostra o nascondi il pannello laterale',
        'Examples': 'Esempi',
        'Template': 'Modello',
        'The template with its placeholders as written': 'Il modello con i suoi segnaposto così come sono scritti',
        'Placeholders': 'Segnaposto',
        'The placeholders of the template - a click on one puts its tag at the cursor': 'I segnaposto del modello - fai clic su uno per inserire il suo tag al cursore',
        'Shown': 'Mostrato',
        'Hidden': 'Nascosto',
        'View of the tree': 'Vista dell\'albero',
        'The data filled with the examples': 'I dati compilati con gli esempi',
        'The examples could not be filled in - the tree shows the template': 'Non è stato possibile inserire gli esempi - l\'albero mostra il modello',
        'This part shows an example - change it in the template view or in the code': 'Questa parte mostra un esempio - modificala nella vista del modello o nel codice',
        "Protect the CSV export against spreadsheet formulas; plain signed numbers remain unchanged.": "Proteggi l’esportazione CSV dalle formule dei fogli di calcolo; i numeri semplici con segno restano invariati.",
        /* Words that are the same in German and English, so not in the German pack */
        'Code': 'Codice',
        'Export': 'Esporta',

        /* ---------- Top bar ---------- */
        'YAML Editor - home': 'Editor YAML - pagina iniziale',
        'YAML Editor': 'Editor YAML',
        'JSON Editor': 'Editor JSON',
        'File': 'File',
        'My documents (Ctrl+O)': 'I miei documenti (Ctrl+O)',
        'My documents': 'I miei documenti',
        'New document, or start this one over': 'Nuovo documento o ricomincia da capo questo',
        'New': 'Nuovo',
        'New blank document': 'Nuovo documento vuoto',
        'An empty document - your other documents stay as they are': 'Un documento vuoto - gli altri tuoi documenti restano come sono',
        'Two services with ports and a volume': 'Due servizi con porte e un volume',
        'GitHub workflow': 'Workflow GitHub',
        'Run the tests on every push': 'Esegui i test a ogni push',
        'Kubernetes': 'Kubernetes',
        'A deployment and a service: two documents': 'Un deployment e un service: due documenti',
        'OpenAPI': 'OpenAPI',
        'The start of an API description': 'L\'inizio di una descrizione di API',
        'Table': 'Tabella',
        'A list of mappings - converts to CSV': 'Un elenco di mappe - si converte in CSV',
        'Docker Compose': 'Docker Compose',
        'The welcome example': 'L\'esempio di benvenuto',
        'Shows what the editor can do': 'Mostra cosa sa fare l\'editor',
        'Start this document over': 'Ricomincia questo documento',
        'Empties the data - "Undo" brings it back': 'Svuota i dati - «Annulla» li ripristina',
        'Open a YAML file from your computer (JSON, CSV and XML files are converted; you can also drag a file into the window)':
            'Apri un file YAML dal tuo computer (i file JSON, CSV e XML vengono convertiti; puoi anche trascinare un file nella finestra)',
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
        'Save the document as a .yaml file (Ctrl+S)': 'Salva il documento come file .yaml (Ctrl+S)',
        'Download .yaml': 'Scarica .yaml',
        'JSON, CSV and more (Ctrl+E)': 'JSON, CSV e altro (Ctrl+E)',
        'Export…': 'Esporta…',

        /* ---------- Views and work area ---------- */
        'View': 'Vista',
        'Edit': 'Modifica',
        'Tree': 'Albero',
        'Value': 'Valore',
        'YAML code': 'Codice YAML',
        'Copy the code to the clipboard': 'Copia il codice negli appunti',
        'Copy code': 'Copia codice',
        'Copy': 'Copia',
        'The same indentation everywhere; comments stay (Ctrl+Shift+F)': 'Lo stesso rientro ovunque; i commenti restano (Ctrl+Shift+F)',
        'The same indentation everywhere; comments stay': 'Lo stesso rientro ovunque; i commenti restano',
        'Format': 'Formatta',
        'Drag to change the width of the code area': 'Trascina per cambiare la larghezza dell\'area del codice',
        'Drag to change the width': 'Trascina per cambiare la larghezza',
        'Unfold everything': 'Espandi tutto',
        'Fold everything': 'Comprimi tutto',
        'Add an entry: into the selected object or array, otherwise after the selected entry': 'Aggiungi una voce: nell\'oggetto o array selezionato, altrimenti dopo la voce selezionata',
        'Add an entry': 'Aggiungi',
        'Duplicate the selected entry': 'Duplica la voce selezionata',
        'Duplicate': 'Duplica',
        'Move the selected entry up (Alt+Up)': 'Sposta in su la voce selezionata (Alt+Su)',
        'Move up': 'Sposta su',
        'Move the selected entry down (Alt+Down)': 'Sposta in giù la voce selezionata (Alt+Giù)',
        'Move down': 'Sposta giù',
        'Remove the selected entry (Delete)': 'Rimuovi la voce selezionata (Canc)',
        'Remove': 'Rimuovi',
        'The type of the selected value - choosing another one changes it': 'Il tipo del valore selezionato - sceglierne un altro lo cambia',
        'Type': 'Tipo',
        'string': 'stringa',
        'number': 'numero',
        'boolean': 'booleano',
        'null': 'vuoto (null)',
        'object': 'oggetto',
        'array': 'array',
        'alias': 'alias',
        'Search keys and values': 'Cerca chiavi e valori',
        'Previous match (Shift+Enter)': 'Risultato precedente (Shift+Enter)',
        'Previous match': 'Risultato precedente',
        'Next match (Enter)': 'Risultato successivo (Enter)',
        'Next match': 'Risultato successivo',
        'The data as a tree: click a key or a value to change it': 'I dati come albero: fai clic su una chiave o un valore per modificarlo',
        'Copy the path of the selected value': 'Copia il percorso del valore selezionato',
        'Copy path': 'Copia percorso',
        'Side panel': 'Pannello laterale',
        'The selected key and value': 'La chiave e il valore selezionati',
        'New entries and pieces of code': 'Nuove voci e frammenti di codice',
        'Insert': 'Inserisci',
        'Format the document, or convert it to another format': 'Formatta il documento, o convertilo in un altro formato',
        'Convert': 'Converti',
        'Check the data against a JSON Schema': 'Verifica i dati con un JSON Schema',
        'Schema': 'Schema',
        'Open it here': 'Aprilo qui',
        'Drop the file here': 'Rilascia qui il file',

        /* Inside the tree */
        'Key': 'Chiave',
        'Anchor': 'Ancora',
        'Alias': 'Alias',
        'empty': 'vuoto',
        'No data yet': 'Ancora nessun dato',
        'Empty document': 'Documento vuoto',

        /* Problems above the code */
        'Hide': 'Nascondi',
        'Show': 'Mostra',

        /* ---------- Value tab ---------- */
        'Click a key or a value in the tree.': 'Fai clic su una chiave o un valore nell\'albero.',
        'The document has no data yet.': 'Il documento non ha ancora dati.',
        'Path': 'Percorso',
        'Apply': 'Applica',
        'Add after it': 'Aggiungi dopo',
        'Anchor:': 'Ancora:',
        'Alias of the anchor:': 'Alias dell\'ancora:',

        /* ---------- Insert tab ---------- */
        'Add to the selected value': 'Aggiungi al valore selezionato',
        'Into the selected object or array, otherwise after the selected entry. One step for Undo.': 'Nell\'oggetto o array selezionato, altrimenti dopo la voce selezionata. Annullabile in un solo passaggio.',
        'Text': 'Testo',
        'A new string': 'Una nuova stringa',
        'Number': 'Numero',
        'A new number': 'Un nuovo numero',
        'True / false': 'Vero / falso',
        'A new boolean': 'Un nuovo booleano',
        'Empty (null)': 'Vuoto (null)',
        'A new null': 'Un nuovo null',
        'Object { }': 'Oggetto { }',
        'A new empty object': 'Un nuovo oggetto vuoto',
        'Array [ ]': 'Array [ ]',
        'A new empty array': 'Un nuovo array vuoto',
        'At the cursor in the code': 'Al cursore nel codice',
        'Key and value': 'Chiave e valore',
        'One entry of a mapping': 'Una voce di una mappa',
        'Nested mapping': 'Mappa annidata',
        'A key with keys below it': 'Una chiave con altre chiavi sotto',
        'List item': 'Voce di elenco',
        'One item of a sequence': 'Una voce di una sequenza',
        'List': 'Elenco',
        'A key with a list below it': 'Una chiave con un elenco sotto',
        'Text block (|)': 'Blocco di testo (|)',
        'Several lines, kept as they are': 'Più righe, mantenute così come sono',
        'Folded text (>)': 'Testo a righe unite (>)',
        'Several lines, joined into one': 'Più righe, unite in una',
        'Anchor and alias': 'Ancora e alias',
        'Values defined once (&) and used again (*, <<)': 'Valori definiti una volta (&) e riutilizzati (*, <<)',
        'Next document (‑‑‑)': 'Documento successivo (‑‑‑)',
        'A further document in the same file': 'Un altro documento nello stesso file',
        'Comment (#)': 'Commento (#)',
        'A comment': 'Un commento',
        'Today\'s date': 'La data di oggi',
        'The date as YYYY-MM-DD': 'La data come AAAA-MM-GG',
        'An empty value': 'Un valore vuoto',
        'true': 'vero (true)',
        'false': 'falso (false)',
        'The boolean true': 'Il booleano true',
        'The boolean false': 'Il booleano false',

        /* ---------- Convert tab ---------- */
        'This document': 'Questo documento',
        'Indentation': 'Rientro',
        '2 spaces': '2 spazi',
        '4 spaces': '4 spazi',
        'Tabs': 'Tabulazioni',

        'Convert to': 'Converti in',
        'JSON text': 'Testo JSON',
        'The file has several documents - they become one JSON array.': 'Il file ha più documenti - diventano un unico array JSON.',
        'CSV (an array of objects)': 'CSV (un array di oggetti)',
        'XML text': 'Testo XML',
        'The tree as plain text': 'L\'albero come testo semplice',
        'Result': 'Risultato',
        'Download': 'Scarica',
        'Each object is a row, its keys are the columns. Texts that look like numbers are in quotes.': 'Ogni oggetto è una riga, le sue chiavi sono le colonne. I testi che sembrano numeri sono tra virgolette.',
        'The data is inside <root>; the items of an array are <item> elements.': 'I dati sono dentro <root>; le voci di un array sono elementi <item>.',
        'Opens the result as a new document in the JSON Editor (in a new tab)': 'Apre il risultato come nuovo documento nell\'Editor JSON (in una nuova scheda)',
        'Open in the JSON Editor': 'Apri nell\'Editor JSON',

        /* ---------- Schema tab ---------- */
        'Check this document against a JSON Schema that is one of your documents (open or paste it as a new document first). The editor never downloads a schema.':
            'Verifica questo documento con un JSON Schema che sia uno dei tuoi documenti (prima aprilo o incollalo come nuovo documento). L\'editor non scarica mai uno schema.',
        'No schema': 'Nessuno schema',
        'The chosen schema document is not there any more.': 'Il documento dello schema scelto non esiste più.',
        'Checked again once the syntax error is fixed.': 'Viene verificato di nuovo quando l\'errore di sintassi è corretto.',
        'The data fits the schema.': 'I dati sono conformi allo schema.',
        'place does not fit the schema - see above the code.': 'punto non è conforme allo schema - vedi sopra il codice.',
        'places do not fit the schema - see above the code.': 'punti non sono conformi allo schema - vedi sopra il codice.',
        'The document names the schema': 'Il documento indica lo schema',
        '- it is not loaded from there.': '- non viene caricato da lì.',
        'Open the schema': 'Apri lo schema',
        'A new document with a schema that this data fits': 'Un nuovo documento con uno schema a cui questi dati sono conformi',
        'Make a schema from this data': 'Crea uno schema da questi dati',

        /* ---------- Export ---------- */
        'Close': 'Chiudi',
        'File name': 'Nome del file',
        'YAML file as it is (.yaml)': 'File YAML così com\'è (.yaml)',
        'JSON file (.json)': 'File JSON (.json)',
        'CSV table (.csv)': 'Tabella CSV (.csv)',
        'The tree as plain text (.txt)': 'L\'albero come testo semplice (.txt)',
        'Download every format at once': 'Scarica tutti i formati in una volta',
        'All formats (ZIP)': 'Tutti i formati (ZIP)',

        /* ---------- My documents ---------- */
        'Search by name': 'Cerca per nome',
        'Search your documents': 'Cerca nei tuoi documenti',
        'Open a file from your computer as a new document': 'Apri un file dal tuo computer come nuovo documento',
        'New document': 'Nuovo documento',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Fai clic su un documento per aprirlo. I documenti sono salvati solo in questo browser - non viene caricato nulla. Cancellando i dati del sito nel browser spariscono, quindi scarica quelli che vuoi conservare.',
        'Download every document as a .yaml file in one ZIP': 'Scarica ogni documento come file .yaml in un unico ZIP',
        'Download all (ZIP)': 'Scarica tutto (ZIP)',
        'Rename': 'Rinomina',
        'Download as .yaml': 'Scarica come .yaml',
        'Delete': 'Elimina',
        'New name': 'Nuovo nome',
        'This document is open': 'Questo documento è aperto',
        'Click to open this document': 'Fai clic per aprire questo documento',
        'No documents yet.': 'Ancora nessun documento.',

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
        'The document travels in the link after the “#”, which no server sees. What you paste into your AI is handled by its provider.':
            'Il documento viaggia nel link dopo il «#», che nessun server vede. Ciò che incolli nella tua IA viene elaborato dal suo fornitore.',
        'The prompt - copy it with Ctrl+C': 'Il prompt - copialo con Ctrl+C',
        'Copy prompt': 'Copia il prompt',
        'Paste it into your AI and say what it should change.': 'Incollalo nella tua IA e dille cosa deve cambiare.',
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
        'The document is now in the YAML Editor tab you already had open. Switch to that tab, or open it here.':
            'Il documento ora si trova nella scheda dell\'Editor YAML che avevi già aperto. Passa a quella scheda o aprilo qui.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)': 'Qui non è consentito copiare - il testo è selezionato qui sotto: premi Ctrl+C (⌘C)',
        'Prompt copied - paste it into your AI and say what it should write': 'Prompt copiato - incollalo nella tua IA e dille cosa deve scrivere',
        'This link is incomplete or damaged - please ask the AI to send it again': 'Questo link è incompleto o danneggiato - chiedi all\'IA di inviarlo di nuovo',

        /* ---------- Save to your server ---------- */
        'Save to your server': 'Salva sul tuo server',
        'Webhook address': 'Indirizzo del webhook',
        'https://example.com/api/yaml': 'https://esempio.it/api/yaml',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(facoltativo, inviato come «Authorization: Bearer …»; conservato finché questa scheda resta aperta)',
        'Send automatically a few seconds after each change (otherwise only when you click': 'Invia automaticamente pochi secondi dopo ogni modifica (altrimenti solo quando fai clic su',
        'or press Ctrl+S)': 'o premi Ctrl+S)',
        'Only for “': 'Solo per «',
        '” (other documents use the general address)': '» (gli altri documenti usano l\'indirizzo generale)',
        'What your server receives': 'Cosa riceve il tuo server',
        'A POST request with JSON (your server must allow CORS from https://yaml.giit.ch); content is the document as a string:':
            'Una richiesta POST con JSON (il tuo server deve consentire CORS da https://yaml.giit.ch); content è il documento come stringa:',
        'Embed the editor in your website': 'Integra l\'editor nel tuo sito web',
        'Send now': 'Invia ora',
        'Save setting': 'Salva impostazione',

        /* ---------- Help ---------- */
        'How it works': 'Come funziona',
        'Keyboard shortcuts': 'Scorciatoie da tastiera',
        'In the tree: go up and down, fold and unfold': 'Nell\'albero: sali e scendi, comprimi ed espandi',
        'Delete': 'Elimina',
        'In the tree: remove the entry': 'Nell\'albero: rimuovi la voce',
        'In the tree: move the entry up / down': 'Nell\'albero: sposta la voce su / giù',
        'Search keys and values in the tree': 'Cerca chiavi e valori nell\'albero',
        'Format the document': 'Formatta il documento',
        'Indent / outdent in the code (with spaces)': 'Aumenta / riduci rientro nel codice (con spazi)',
        'Undo / redo': 'Annulla / ripeti',
        'Save (download, or to your server) / export': 'Salva (su file o sul tuo server) / esporta',
        'Alt': 'Alt',
        'Problems (wrong indentation, a tab, a duplicate key, an alias without its anchor, what does not fit the schema) are listed above the code with line and column - click one to go there.':
            'I problemi (rientro sbagliato, una tabulazione, una chiave duplicata, un alias senza la sua ancora, ciò che non è conforme allo schema) sono elencati sopra il codice con riga e colonna - fai clic su uno per andarci.',
        'In the tree: change the value (F2: the key)': 'Nell\'albero: modifica il valore (F2: la chiave)',

        /* ---------- JSON Lines ---------- */
        'JSON Lines': 'JSON Lines',
        'JSON Lines needs an array - each entry becomes one line': 'JSON Lines richiede un array - ogni voce diventa una riga',
        'Open a YAML file from your computer (JSON, JSON Lines, CSV and XML files are converted; you can also drag a file into the window)':
            'Apri un file YAML dal tuo computer (i file JSON, JSON Lines, CSV e XML vengono convertiti; puoi anche trascinare un file nella finestra)',

        /* ---------- Messages ---------- */
        'The browser storage is full - download and delete documents under "My documents"': 'La memoria del browser è piena - scarica ed elimina documenti in «I miei documenti»',
        'The browser storage is full - delete or download documents under "My documents" first': 'La memoria del browser è piena - prima elimina o scarica documenti in «I miei documenti»',
        'The browser storage is full - delete or download some documents first': 'La memoria del browser è piena - prima elimina o scarica alcuni documenti',
        'The browser storage is full': 'La memoria del browser è piena',
        'Nothing to undo': 'Niente da annullare',
        'Nothing to redo': 'Niente da ripetere',
        'The code has a syntax error - fix it first (see above the code), then edit in the tree': 'Il codice ha un errore di sintassi - prima correggilo (vedi sopra il codice), poi modifica nell\'albero',
        'The code has a syntax error - fix it first (see above the code)': 'Il codice ha un errore di sintassi - prima correggilo (vedi sopra il codice)',
        'The document has a syntax error - fix it first': 'Il documento ha un errore di sintassi - prima correggilo',
        'The document has no data yet': 'Il documento non ha ancora dati',
        'The document has no data to add to': 'Il documento non ha dati a cui aggiungere qualcosa',
        'Only an object can be added to the root object': 'All\'oggetto radice si può aggiungere solo un oggetto',
        'The root is neither an object nor an array': 'La radice non è né un oggetto né un array',
        'Choose a value in the tree first': 'Prima scegli un valore nell\'albero',
        'The root is a single value - change its type to object or array first': 'La radice è un singolo valore - prima cambia il suo tipo in oggetto o array',
        'The root cannot be removed - "Start this document over" in the New menu empties it': 'La radice non si può rimuovere - «Ricomincia questo documento» nel menu Nuovo la svuota',
        'The root has no place to move to': 'La radice non si può spostare da nessuna parte',
        'This entry is the first already': 'Questa voce è già la prima',
        'This entry is the last already': 'Questa voce è già l\'ultima',
        'Entries of an array have no key': 'Le voci di un array non hanno chiave',
        'A boolean is true or false - choose another type above the tree to change the type': 'Un booleano è true o false - scegli un altro tipo sopra l\'albero per cambiare il tipo',
        'null has no value - choose another type above the tree to change the type': 'null non ha valore - scegli un altro tipo sopra l\'albero per cambiare il tipo',
        'This value is changed in the code': 'Questo valore viene modificato nel codice',
        'Keys sorted': 'Chiavi ordinate',
        'Minified': 'Minimizzato',
        'Formatted': 'Formattato',
        'The keys are sorted already': 'Le chiavi sono già ordinate',
        'The document is minified already': 'Il documento è già minimizzato',
        'The document is formatted already': 'Il documento è già formattato',
        'This document is empty already': 'Questo documento è già vuoto',
        'All data is removed. "Undo" brings it back as long as the page is open.': 'Vengono rimossi tutti i dati. «Annulla» li ripristina finché la pagina è aperta.',
        'Start over': 'Ricomincia',
        'The file is larger than 8 MB': 'Il file supera gli 8 MB',
        'Downloaded': 'Scaricato',
        'Copied to the clipboard': 'Copiato negli appunti',
        'Code copied': 'Codice copiato',
        '.yaml downloaded': '.yaml scaricato',
        'Add': 'Aggiungi',
        'Replace': 'Sostituisci',
        'Open as a new document': 'Apri come nuovo documento',
        'The document is removed from this browser for good. Download it first if you want to keep a copy.':
            'Il documento viene rimosso definitivamente da questo browser. Scaricalo prima se vuoi conservarne una copia.',
        'The YAML package is not loaded yet': 'Il pacchetto YAML non è ancora caricato',
        'CSV needs an array of objects (a list of rows) - this data is not an array': 'CSV richiede un array di oggetti (un elenco di righe) - questi dati non sono un array',
        'CSV needs an array of objects - some entries of this array are not objects': 'CSV richiede un array di oggetti - alcune voci di questo array non sono oggetti',
        'A quote in the CSV is never closed': 'Una virgoletta nel CSV non viene mai chiusa',

        /* ---------- Problems in the code ---------- */
        'A tab is used for indentation - YAML only allows spaces there': 'Per il rientro è usata una tabulazione - YAML lì consente solo spazi',
        'The indentation does not fit here - entries of one level start in the same column': 'Il rientro qui non è corretto - le voci di uno stesso livello iniziano nella stessa colonna',
        'A mapping cannot start on the same line as its key - put it on the next line, indented': 'Una mappa non può iniziare sulla stessa riga della sua chiave - mettila sulla riga successiva, con rientro',
        'A key must be on one line - did a ":" or a quote go missing?': 'Una chiave deve stare su una riga - manca forse un «:» o una virgoletta?',
        'A closing character is missing (a quote, ] or })': 'Manca un carattere di chiusura (una virgoletta, ] o })',
        'A value can only have one anchor': 'Un valore può avere una sola ancora',
        'A value can only have one tag': 'Un valore può avere un solo tag',
        'Several documents need --- between them': 'Più documenti richiedono --- tra di loro',
        'A plain value cannot start with this character - put the value in quotes': 'Un valore senza virgolette non può iniziare con questo carattere - metti il valore tra virgolette',
        'The value does not fit its tag': 'Il valore non corrisponde al suo tag',
        'This alias is not valid': 'Questo alias non è valido',
        'Unexpected text here - check the indentation, a missing ":" or "-", or quotes': 'Testo inatteso qui - controlla il rientro, un «:» o «-» mancante, o le virgolette',
        'An alias cannot have an anchor or a tag': 'Un alias non può avere un\'ancora o un tag',
        'The document is empty': 'Il documento è vuoto',
        'The data is nested too deeply': 'I dati sono annidati troppo in profondità',
        /* ---------- Template placeholders (?template=) ---------- */
        'A template stays as written - Format and conversions work on filled data': 'Un modello rimane com’è - Formatta e le conversioni lavorano sui dati compilati',
        'This part holds a placeholder - change it in the code': 'Questa parte contiene un segnaposto - modificala nel codice',
        'placeholder': 'segnaposto',
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
        'Also possible: <code>?src=&lt;URL of a .yaml file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>yamleditor:ai</code>, <code>yamleditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'È anche possibile: <code>?src=&lt;URL di un file .yaml&gt;</code> apre un file, <code>&amp;webhook=&lt;URL&gt;</code> salva lì questo documento. L\'editor può anche aprirsi in una finestra propria (<code>?embed=window</code>), e la tua pagina può passargli un proprio prompt per l\'IA e una chiave di sessione, così l\'IA invia il risultato al tuo server (<code>yamleditor:ai</code>, <code>yamleditor:key-request</code>) - vedi «Usare l\'editor sul tuo sito web» sotto l\'editor. I dettagli sono in <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> YAML on the left - or start with <b>New</b> and one of the templates. The tree in the middle shows the data as you type: mappings and lists fold, every value shows its type, <code>{3}</code> and <code>[5]</code> count the entries, every document after <code>---</code> has its own tree.':
            '<b>Scrivi</b> YAML a sinistra - oppure inizia con <b>Nuovo</b> e uno dei modelli. L\'albero al centro mostra i dati mentre scrivi: mappe ed elenchi si comprimono, ogni valore mostra il suo tipo, <code>{3}</code> e <code>[5]</code> contano le voci, ogni documento dopo <code>---</code> ha il suo albero.',
        '<b>Click a key or a value in the tree</b> to change it right there. <b>Enter</b> or a click elsewhere writes the change into the code at exactly that place - comments and formatting stay (one step for Undo), <b>Escape</b> cancels. The buttons above the tree add, duplicate, move and remove entries and change the type of a value.':
            '<b>Fai clic su una chiave o un valore nell\'albero</b> per modificarlo direttamente lì. <b>Invio</b> o un clic altrove scrive la modifica nel codice esattamente in quel punto - commenti e formattazione restano (annullabile in un solo passaggio), <b>Esc</b> annulla. I pulsanti sopra l\'albero aggiungono, duplicano, spostano e rimuovono voci e cambiano il tipo di un valore.',
        'A click in the tree puts the code\'s cursor on that value; the cursor in the code marks its value in the tree. The path of the selected value (<code>$.items[3].name</code>) is below the tree. Anchors (<code>&amp;name</code>) and aliases (<code>*name</code>) are marked.':
            'Un clic nell\'albero porta il cursore del codice su quel valore; il cursore nel codice evidenzia il suo valore nell\'albero. Il percorso del valore selezionato (<code>$.items[3].name</code>) è sotto l\'albero. Ancore (<code>&amp;name</code>) e alias (<code>*name</code>) sono contrassegnati.',
        '<b>Value</b> on the right shows the selected key and value; <b>Insert</b> adds entries and pieces of code; <b>Convert</b> formats the document or converts it to JSON, CSV or XML; <b>Schema</b> checks it against a JSON Schema from your documents.':
            '<b>Valore</b> a destra mostra la chiave e il valore selezionati; <b>Inserisci</b> aggiunge voci e frammenti di codice; <b>Converti</b> formatta il documento o lo converte in JSON, CSV o XML; <b>Schema</b> lo verifica con un JSON Schema dei tuoi documenti.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser. <b>Export</b> saves it as YAML, JSON, CSV or text.':
            '<b>I miei documenti</b> (il pulsante a forma di cartella in alto a sinistra) elenca ogni documento conservato in questo browser. <b>Esporta</b> lo salva come YAML, JSON, CSV o testo.',
        'Comment lines in or out (<code>#</code>)': 'Commenta o decommenta righe (<code>#</code>)',
        'Enter after <code>key:</code> indents the next line, Enter in a list starts the next item with <code>- </code>. Quotes and brackets close by themselves around a selection.':
            'Invio dopo <code>key:</code> indenta la riga successiva, Invio in un elenco inizia la voce successiva con <code>- </code>. Virgolette e parentesi si chiudono da sole attorno a una selezione.',
    },

    patterns: [
        /* ---------- Status lines ---------- */
        ['^(\\d+) (?:line|lines) · ([\\d.]+ K?B)$', (m, l, kb) => `${l} ${getPlural(l, 'riga', 'righe')} · ${kb}`],
        ['^([\\d,]+) bytes$', (m, b) => `${formatThousands(b)} byte`],
        ['^\\d{1,3}(?:,\\d{3})+$', m => formatThousands(m)],
        ['^Show (\\d+) more of (\\d+)$', 'Mostra altri $1 di $2'],
        ['^Document (\\d+)$', 'Documento $1'],

        ['^Line (\\d+)$', 'Riga $1'],
        ['^Line (\\d+) is not valid JSON$', 'La riga $1 non è JSON valido'],
        ['^Line (\\d+) has a syntax error - fix it first \\(see above the code\\)$', 'La riga $1 ha un errore di sintassi - prima correggilo (vedi sopra il codice)'],
        ['^Not every line has the same keys - line (\\d+) differs from line (\\d+)$', 'Non tutte le righe hanno le stesse chiavi - la riga $1 è diversa dalla riga $2'],
        ['^New document "(.+)"$', 'Nuovo documento «$1»'],
        /* Problems above the code */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'errore', 'errori')}`],
        ['^· (\\d+) (?:schema problem|schema problems)$', (m, k) => `· ${k} ${getPlural(k, 'problema di schema', 'problemi di schema')}`],
        ['^(\\d+) (?:schema problem|schema problems)$', (m, k) => `${k} ${getPlural(k, 'problema di schema', 'problemi di schema')}`],
        ['^(\\d+) (?:schema problem|schema problems) · (\\d+) (?:note|notes)$', (m, k, j) => `${k} ${getPlural(k, 'problema di schema', 'problemi di schema')} · ${j} ${getPlural(j, 'nota', 'note')}`],
        ['^· (\\d+) (?:note|notes)$', (m, k) => `· ${k} ${getPlural(k, 'nota', 'note')}`],
        ['^· (\\d+) (?:schema problem|schema problems) · (\\d+) (?:note|notes)$', (m, k, j) => `· ${k} ${getPlural(k, 'problema di schema', 'problemi di schema')} · ${j} ${getPlural(j, 'nota', 'note')}`],
        ['^(\\d+) (?:note|notes)$', (m, k) => `${k} ${getPlural(k, 'nota', 'note')}`],
        ['^Line (\\d+), column (\\d+)$', 'Riga $1, colonna $2'],
        ['^The key "(.*)" is twice in this mapping - most programs keep only the last one$', 'La chiave «$1» compare due volte in questa mappa - la maggior parte dei programmi tiene solo l\'ultima'],
        ['^The alias \\*(.+) has no anchor &(.+) before it$', 'L\'alias *$1 non ha un\'ancora &$2 prima di sé'],
        ['^The YAML parser stopped: (.*)$', 'Il parser YAML si è fermato: $1'],
        ['^YAML: (.*)$', 'YAML: $1'],
        ['^The schema "(.+)" has a syntax error in line (\\d+) - it is not used$', 'Lo schema «$1» ha un errore di sintassi alla riga $2 - non viene usato'],

        /* Schema problems */
        ['^Schema: the type must be (.+) \\(it is (\\w+)\\)$', (m, w, is) => `Schema: il tipo deve essere ${w.split(' or ').map(x => TYPE[x] || x).join(' o ')} (è ${TYPE[is] || is})`],
        ['^Schema: "(.*)" is missing \\(required\\)$', 'Schema: manca «$1» (required)'],
        ['^Schema: "(.*)" is not allowed here \\(additionalProperties\\)$', 'Schema: «$1» non è consentito qui (additionalProperties)'],
        ['^Schema: must be one of (.*) \\(enum\\)$', 'Schema: deve essere uno tra $1 (enum)'],
        ['^Schema: must be (.*) \\(const\\)$', 'Schema: deve essere $1 (const)'],
        ['^Schema: at least (\\d+) characters \\(minLength\\)$', 'Schema: numero minimo di caratteri: $1 (minLength)'],
        ['^Schema: at most (\\d+) characters \\(maxLength\\)$', 'Schema: numero massimo di caratteri: $1 (maxLength)'],
        ['^The data is nested more than (\\d+) levels deep - the editor reads at most (\\d+)$', 'I dati sono annidati per più di $1 livelli - l’editor ne legge al massimo $2'],
        ['^Schema: must match the pattern (.*) \\(pattern\\)$', 'Schema: deve corrispondere all’espressione regolare $1 (pattern)'],
        ['^Schema: the pattern (.*) is not checked on this long text - it repeats a repeated group, which can take very long \\(pattern\\)$', 'Schema: il pattern $1 non viene verificato su questo testo lungo - ripete un gruppo ripetuto, il che può richiedere moltissimo tempo (pattern)'],
        ['^Schema: not a valid (.*) \\(format\\)$', 'Schema: formato $1 non valido (format)'],
        ['^Schema: must be at least (.*) \\(minimum\\)$', 'Schema: deve essere almeno $1 (minimum)'],
        ['^Schema: must be at most (.*) \\(maximum\\)$', 'Schema: deve essere al massimo $1 (maximum)'],
        ['^Schema: must be greater than (.*) \\(exclusiveMinimum\\)$', 'Schema: deve essere maggiore di $1 (exclusiveMinimum)'],
        ['^Schema: must be less than (.*) \\(exclusiveMaximum\\)$', 'Schema: deve essere minore di $1 (exclusiveMaximum)'],
        ['^Schema: must be a multiple of (.*) \\(multipleOf\\)$', 'Schema: deve essere un multiplo di $1 (multipleOf)'],
        ['^Schema: at least (\\d+) keys \\(minProperties\\)$', 'Schema: numero minimo di chiavi: $1 (minProperties)'],
        ['^Schema: at most (\\d+) keys \\(maxProperties\\)$', 'Schema: numero massimo di chiavi: $1 (maxProperties)'],
        ['^Schema: at least (\\d+) entries \\(minItems\\)$', 'Schema: numero minimo di voci: $1 (minItems)'],
        ['^Schema: at most (\\d+) entries \\(maxItems\\)$', 'Schema: numero massimo di voci: $1 (maxItems)'],
        ['^Schema: the entries must be different \\(uniqueItems\\)$', 'Schema: le voci devono essere diverse (uniqueItems)'],
        ['^Schema: entry (\\d+) is not allowed here \\(items\\)$', 'Schema: la voce $1 non è consentita qui (items)'],
        ['^Schema: no entry matches "contains" \\(contains\\)$', 'Schema: nessuna voce corrisponde a «contains» (contains)'],
        ['^Schema: more than (\\d+) entries match "contains" \\(maxContains\\)$', 'Schema: voci corrispondenti a «contains»: più di $1 (maxContains)'],
        ['^Schema: matches none of the allowed forms \\((anyOf|oneOf)\\)$', 'Schema: non corrisponde a nessuna delle forme consentite ($1)'],
        ['^Schema: matches (\\d+) of the forms, but only one is allowed \\(oneOf\\)$', 'Schema: corrisponde a $1 delle forme, ma ne è consentita una sola (oneOf)'],
        ['^Schema: must not match the "not" schema \\(not\\)$', 'Schema: non deve corrispondere allo schema «not» (not)'],
        ['^Schema: "(.*)" needs "(.*)" as well \\(dependentRequired\\)$', 'Schema: «$1» richiede anche «$2» (dependentRequired)'],
        ['^Schema: the key "(.*)" does not fit the schema of the key names \\(propertyNames\\)$', 'Schema: la chiave «$1» non è conforme allo schema dei nomi delle chiavi (propertyNames)'],
        ['^Schema: no value is allowed here$', 'Schema: qui non è consentito alcun valore'],
        ['^Schema: the schema refers to another file \\((.*)\\) - only references inside the schema are followed$', 'Schema: lo schema rimanda a un altro file ($1) - vengono seguiti solo i riferimenti interni allo schema'],

        /* ---------- Value tab and schema tab ---------- */
        ['^(?:(\\d+) (key|keys|entry|entries) · )?line (\\d+), column (\\d+) · (.+)$', (m, k, w, l, c, sz) => `${k ? `${k} ${w.startsWith('key') ? getPlural(k, 'chiave', 'chiavi') : getPlural(k, 'voce', 'voci')} · ` : ''}riga ${l}, colonna ${c} · ${sz}`],
        ['^The schema has a syntax error in line (\\d+) - open it and fix it first\\.$', 'Lo schema ha un errore di sintassi alla riga $1 - aprilo e correggilo prima.'],

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
        ['^"(.+)" is not a number - choose another type above the tree to change the type$', '«$1» non è un numero - scegli un altro tipo sopra l\'albero per cambiare il tipo'],
        ['^There is already a key "(.*)" here$', 'Qui c\'è già una chiave «$1»'],
        ['^Path copied: (.*)$', 'Percorso copiato: $1'],
        ['^"(.+)" is open\\. My documents: open, rename, duplicate or delete your documents \\(Ctrl\\+O\\)$', '«$1» è aperto. I miei documenti: apri, rinomina, duplica o elimina i tuoi documenti (Ctrl+O)'],
        ['^Start "(.+)" over\\?$', 'Ricominciare «$1»?'],
        ['^Start "(.+)" over$', 'Ricomincia «$1»'],
        ['^(\\d+) (?:document|documents) · (.+) in this browser$', (m, k, s) => `${k} ${getPlural(k, 'documento', 'documenti')} · ${formatSize(s)} in questo browser`],
        ['^No document named "(.*)"\\.$', 'Nessun documento di nome «$1».'],
        ['^Open now · (.+)$', (m, s) => `Aperto ora · ${formatSize(s)}`],
        ['^(just now|yesterday|\\d+ min ago|\\d+ h ago|[A-Z][a-z]{2} \\d{1,2}, \\d{4}) · (.+)$', (m, w, s) => `${formatTime(w)} · ${formatSize(s)}`],
        ['^(.+) \\(open now\\)$', '$1 (aperto ora)'],
        ['^ZIP with (\\d+) (?:document|documents) downloaded$', (m, k) => `ZIP con ${k} ${getPlural(k, 'documento', 'documenti')} scaricato`],
        ['^ZIP downloaded with (\\d+) files$', 'ZIP scaricato con $1 file'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '«$1» ora è vuoto - «Annulla» lo ripristina'],
        ['^"(.+)" opened$', '«$1» aperto'],
        ['^New document "(.+)" - your other documents are under "My documents"$', 'Nuovo documento «$1» - gli altri tuoi documenti sono in «I miei documenti»'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$', 'Nuovo documento «$1» dall\'IA - gli altri tuoi documenti restano invariati'],
        ['^New document "(.+)" - "(.+)" is checked against it$', 'Nuovo documento «$1» - «$2» viene verificato con esso'],
        ['^"(.+)" is not a file the editor can open$', '«$1» non è un file che l\'editor può aprire'],
        ['^Opened "(.+)" - converted from (JSON Lines|\\w+)$', '«$1» aperto - convertito da $2'],
        ['^Opened "(.+)" - it is now in "My documents"$', '«$1» aperto - ora si trova in «I miei documenti»'],
        ['^"(.+)" could not be opened: (.*)$', 'Impossibile aprire «$1»: $2'],
        ['^(JSON|YAML) pasted from the clipboard - "Undo" brings the old data back$', '$1 incollato dagli appunti - «Annulla» ripristina i dati precedenti'],
        ['^The addition is not valid (JSON|YAML) - it is open as a new document "(.+)"$', 'L\'aggiunta non è $1 valido - è aperta come nuovo documento «$2»'],
        ['^(.+) - the addition is open as a new document "(.+)"$', '$1 - l\'aggiunta è aperta come nuovo documento «$2»'],
        ['^Document received - (\\d+) (?:problem|problems) found, see above the code$', (m, k) => `Documento ricevuto - ${getPlural(k, 'trovato', 'trovati')} ${k} ${getPlural(k, 'problema', 'problemi')}, vedi sopra il codice`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '«$1» modificato dall\'IA - «Annulla» annulla la modifica'],
        ['^"(.+)" duplicated$', '«$1» duplicato'],
        ['^Delete "(.+)"\\?$', 'Eliminare «$1»?'],
        ['^"(.+)" deleted$', '«$1» eliminato'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Apri $1'],
        /* ---------- Template placeholders (?template=) ---------- */
        ['^A placeholder key goes in quotes: "(.+)"$', 'Un segnaposto usato come chiave va tra virgolette: "$1"'],
    ],
};

export default dict;
