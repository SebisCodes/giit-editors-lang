/* Italian texts of the SHLS editor: the bar, the work area (code, records,
   record, insert, convert, outline), its dialogs and messages, and the
   problems found in the code. What all editors share is in
   common.js; how the dictionaries are used is described in
   i18n.js. Names of documents, sections, keys and values stay as they are:
   the patterns copy them into the Italian text. */

import { formatTime, formatThousands, getPlural } from './format.js';

/* "1,234" -> "1.234" (Italian thousands separator) */

/**
 * Translates the unit of a size text ("123 bytes").
 * @param {string} s - the English size text.
 * @returns {string} the text in the language.
 */
const formatSize = s => s.replace(/ bytes$/, ' byte');

/* When a document was last changed (files.js): "just now", "5 min ago", "Mon D, YYYY" … */

/**
 * Translates the text the pattern found (keys in the English pattern).
 * @param {string} k - the English text the pattern found.
 * @returns {string} the text in the language.
 */
const translateKeys = k => getPlural(k, 'chiave', 'chiavi');

export default {
    text: {
        "Read back from SHLS, the data is not the same (for example records whose keys are in another order than in the first record) - check the result.": "Rilette da SHLS, i dati non sono uguali (ad esempio record con le chiavi in un ordine diverso dal primo record) - controlla il risultato.",
        /* ---------- Top bar ---------- */
        'SHLS Editor - home': 'Editor SHLS - pagina iniziale',
        'SHLS Editor': 'Editor SHLS',
        'File': 'File',
        'My documents (Ctrl+O)': 'I miei documenti (Ctrl+O)',
        'My documents': 'I miei documenti',
        'New document, or start this one over': 'Nuovo documento o ricomincia da capo questo',
        'New': 'Nuovo',
        'New blank document': 'Nuovo documento vuoto',
        'An empty document - your other documents stay as they are': 'Un documento vuoto - gli altri tuoi documenti restano come sono',
        'Empty section': 'Sezione vuota',
        'One section with two keys and one record to fill in': 'Una sezione con due chiavi e un record da compilare',
        'Products and companies': 'Prodotti e aziende',
        'The first README example: records right after each key block': 'Il primo esempio del README: i record subito dopo ogni blocco di chiavi',
        'Key blocks first': 'Prima i blocchi di chiavi',
        'The second README example: the records follow under the section name again': 'Il secondo esempio del README: i record seguono sotto il nome della sezione ripetuto',
        'Companies, departments and employees, nested three levels': 'Aziende, reparti e dipendenti, annidati su tre livelli',
        'The same data with the key blocks first and fewer blank lines': 'Gli stessi dati con prima i blocchi di chiavi e meno righe vuote',
        'Start this document over': 'Ricomincia questo documento',
        'Empties the document - "Undo" brings it back': 'Svuota il documento - «Annulla» lo ripristina',
        'Open an SHLS file from your computer (JSON, YAML, CSV and JSON Lines files are converted; you can also drag a file into the window)':
            'Apri un file SHLS dal tuo computer (i file JSON, YAML, CSV e JSON Lines vengono convertiti; puoi anche trascinare un file nella finestra)',
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
        'Save the document as a .shls file (Ctrl+S)': 'Salva il documento come file .shls (Ctrl+S)',
        'Download .shls': 'Scarica .shls',
        'JSON, YAML, CSV and more (Ctrl+E)': 'JSON, YAML, CSV e altro (Ctrl+E)',
        'Export…': 'Esporta…',

        /* ---------- Views and work area ---------- */
        'View': 'Vista',
        'Edit': 'Modifica',
        'Selection': 'Selezione',
        'Records': 'Record',
        'Record': 'Record',
        'SHLS code': 'Codice SHLS',
        'Copy the code to the clipboard': 'Copia il codice negli appunti',
        'Copy code': 'Copia codice',
        'Copy': 'Copia',
        'Lay the document out as the reference SHLSEncoder does: all key blocks first, then the records': 'Disponi il documento come fa lo SHLSEncoder di riferimento: prima tutti i blocchi di chiavi, poi i record',
        'Tidy up': 'Riordina',
        'Drag to change the width of the code area': 'Trascina per cambiare la larghezza dell\'area del codice',
        'Drag to change the width': 'Trascina per cambiare la larghezza',
        'Unfold everything': 'Espandi tutto',
        'Fold the key blocks and records': 'Comprimi i blocchi di chiavi e i record',
        'Add: a record after the selected record (or at the end of the section), a key after the selected key': 'Aggiungi: un record dopo quello selezionato (o alla fine della sezione), una chiave dopo la chiave selezionata',
        'Add': 'Aggiungi',
        'Duplicate the selected record or key': 'Duplica il record o la chiave selezionati',
        'Duplicate': 'Duplica',
        'Move the selected record or key up (Alt+Up)': 'Sposta su il record o la chiave selezionati (Alt+Su)',
        'Move up': 'Sposta su',
        'Move the selected record or key down (Alt+Down)': 'Sposta giù il record o la chiave selezionati (Alt+Giù)',
        'Move down': 'Sposta giù',
        'Remove the selected record, key or section (Delete)': 'Rimuovi il record, la chiave o la sezione selezionati (Canc)',
        'Remove': 'Rimuovi',
        'Search keys and values': 'Cerca chiavi e valori',
        'Previous match (Shift+Enter)': 'Risultato precedente (Shift+Enter)',
        'Previous match': 'Risultato precedente',
        'Next match (Enter)': 'Risultato successivo (Enter)',
        'Next match': 'Risultato successivo',
        'Copy the path of the selection': 'Copia il percorso della selezione',
        'Copy path': 'Copia percorso',
        'Nothing selected': 'Nessuna selezione',
        'Side panel': 'Pannello laterale',
        'The selected record, value or key': 'Il record, il valore o la chiave selezionati',
        'New records, keys and sections, and pieces of code': 'Nuovi record, chiavi e sezioni, e frammenti di codice',
        'Insert': 'Inserisci',
        'Tokens, and the document in other formats': 'Token e il documento in altri formati',
        'Convert': 'Converti',
        'The sections of the document': 'Le sezioni del documento',
        'Outline': 'Struttura',
        'Open it here': 'Aprilo qui',
        'Drop the file here': 'Rilascia qui il file',
        'Hide': 'Nascondi',
        'Show': 'Mostra',

        /* ---------- Records view ---------- */
        'Keys': 'Chiavi',
        'the template of each record': 'il modello di ogni record',
        'Click to rename the section': 'Fai clic per rinominare la sezione',
        'Click to rename the key - only the key block changes': 'Fai clic per rinominare la chiave - cambia solo il blocco di chiavi',
        'Click to change the value': 'Fai clic per cambiare il valore',
        'Value': 'Valore',
        'Key': 'Chiave',
        'Section name': 'Nome della sezione',
        'The code cannot be read - see the problem above the code.': 'Il codice non si può leggere - vedi il problema sopra il codice.',
        'No sections yet - write a section name, its keys (indented) and, after one blank line, the records. Or choose a template under "New".':
            'Ancora nessuna sezione - scrivi un nome di sezione, le sue chiavi (rientrate) e, dopo una riga vuota, i record. Oppure scegli un modello in «Nuovo».',

        /* ---------- Record tab ---------- */
        'Click a section, a key or a record in the middle.': 'Fai clic al centro su una sezione, una chiave o un record.',
        'The document has no sections yet.': 'Il documento non ha ancora sezioni.',
        'The document has no sections yet': 'Il documento non ha ancora sezioni',
        'Path': 'Percorso',
        'Section': 'Sezione',
        'Add a record': 'Nuovo record',
        'Add a key': 'Nuova chiave',
        'Remove the section': 'Rimuovi la sezione',
        'Add a key after it': 'Aggiungi dopo',
        'Add a record after it': 'Aggiungi dopo',
        'Renaming a key changes only the key block. Adding, moving or removing a key changes every record of the section.':
            'Rinominare una chiave cambia solo il blocco di chiavi. Aggiungere, spostare o rimuovere una chiave cambia ogni record della sezione.',
        'Apply': 'Applica',

        /* ---------- Insert tab ---------- */
        'Add to the selection': 'Aggiungi alla selezione',
        'A record after the selected record (or at the end of the section), a key after the selected key - every record gets a value "-" for it. One step for Undo.':
            'Un record dopo quello selezionato (o alla fine della sezione), una chiave dopo la chiave selezionata - ogni record riceve per essa il valore «-». Annullabile in un solo passaggio.',
        'A new record with "-" for each value': 'Un nuovo record con «-» per ogni valore',
        'A new key in the key block; every record gets "-"': 'Una nuova chiave nel blocco di chiavi; ogni record riceve «-»',
        'A copy of the selected record or key': 'Una copia del record o della chiave selezionati',
        'A new section at the end, with two keys and one record': 'Una nuova sezione alla fine, con due chiavi e un record',
        'At the cursor in the code': 'Al cursore nel codice',
        'A section name, its key block, a blank line and one record': 'Un nome di sezione, il suo blocco di chiavi, una riga vuota e un record',
        'The placeholder for the line of a nested list': 'Il segnaposto per la riga di una lista annidata',
        '- (no value)': '- (nessun valore)',
        'SHLS has no empty values: a dash stands for none': 'SHLS non ha valori vuoti: un trattino indica l’assenza di valore',
        'Today\'s date': 'La data di oggi',
        'The date as YYYY-MM-DD': 'La data come AAAA-MM-GG',

        /* ---------- Convert tab ---------- */
        'JSON on one line': 'JSON su una riga',
        'This document': 'Questo documento',
        'Writes the document anew as the reference SHLSEncoder does: all key blocks first, then the records of each section':
            'Riscrive il documento come fa lo SHLSEncoder di riferimento: prima tutti i blocchi di chiavi, poi i record di ogni sezione',
        'Write as SHLSEncoder does': 'Scrivi come SHLSEncoder',
        'Convert to': 'Converti in',
        'JSON (as SHLSDecoder reads it)': 'JSON (come lo legge SHLSDecoder)',
        'CSV (one section)': 'CSV (una sezione)',
        'JSON Lines (one section)': 'JSON Lines (una sezione)',
        'The records as plain text': 'I record come testo semplice',
        'Result': 'Risultato',
        'Download': 'Scarica',
        'Opens the result as a new document in the JSON Editor (in a new tab)': 'Apre il risultato come nuovo documento nell\'Editor JSON (in una nuova scheda)',
        'Open in the JSON Editor': 'Apri nell\'Editor JSON',
        'Exactly the data the reference SHLSDecoder reads: every value is a string.': 'Esattamente i dati che legge lo SHLSDecoder di riferimento: ogni valore è una stringa.',
        'The code cannot be read as SHLS - fix the problem above the code first': 'Il codice non si può leggere come SHLS - correggi prima il problema sopra il codice',
        'Write it anyway?': 'Scriverlo comunque?',
        'Read back, the encoder\'s text gives different data than this document (SHLSEncoder cannot write every structure). "Undo" brings the document back.':
            'Riletto, il testo dell\'encoder dà dati diversi da questo documento (SHLSEncoder non può rappresentare tutte le strutture). «Annulla» ripristina il documento.',
        'Write it': 'Scrivilo',
        'The document is written as SHLSEncoder does already': 'Il documento è già scritto come fa SHLSEncoder',
        'Written as SHLSEncoder does': 'Scritto come SHLSEncoder',

        /* ---------- Outline tab ---------- */
        'The sections of the document. Click one to go there.': 'Le sezioni del documento. Fai clic su una per andarci.',

        /* ---------- Export ---------- */
        'Close': 'Chiudi',
        'File name': 'Nome del file',
        'SHLS file as it is (.shls)': 'File SHLS così com\'è (.shls)',
        'JSON, as SHLSDecoder reads it (.json)': 'JSON, come lo legge SHLSDecoder (.json)',
        'YAML file (.yaml)': 'File YAML (.yaml)',
        'CSV table of the selected section (.csv)': 'Tabella CSV della sezione selezionata (.csv)',
        'The records as plain text (.txt)': 'I record come testo semplice (.txt)',
        'Download every format at once': 'Scarica tutti i formati in una volta',
        'All formats (ZIP)': 'Tutti i formati (ZIP)',

        /* ---------- My documents ---------- */
        'Search by name': 'Cerca per nome',
        'Search your documents': 'Cerca nei tuoi documenti',
        'Open a file from your computer as a new document': 'Apri un file dal tuo computer come nuovo documento',
        'New document': 'Nuovo documento',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Fai clic su un documento per aprirlo. I documenti sono salvati solo in questo browser - non viene caricato nulla. Cancellare i dati del sito nel browser li rimuove, quindi scarica quelli che vuoi tenere.',
        'Download every document as a .shls file in one ZIP': 'Scarica ogni documento come file .shls in un unico ZIP',
        'Download all (ZIP)': 'Scarica tutto (ZIP)',
        'Rename': 'Rinomina',
        'Download as .shls': 'Scarica come .shls',
        'Delete': 'Elimina',
        'New name': 'Nuovo nome',
        'This document is open': 'Questo documento è aperto',
        'Click to open this document': 'Fai clic per aprire questo documento',
        'No documents yet.': 'Ancora nessun documento.',

        /* ---------- AI Assistant ---------- */
        'Any AI can work with you - ChatGPT, Claude, Gemini, Copilot. The prompt explains SHLS, so the AI writes valid SHLS.':
            'Qualsiasi IA può lavorare con te - ChatGPT, Claude, Gemini, Copilot. Il prompt spiega SHLS, così l\'IA scrive SHLS valido.',
        'Connected AI': 'IA connessa',
        'Connected to': 'Connesso a',
        'the AI sends its result there, and it opens here.': 'l\'IA invia lì il suo risultato, e si apre qui.',
        'What': 'Cosa',
        'tells the AI': 'dice all\'IA',
        'The AI should': 'L\'IA deve',
        'Change “': 'Modificare «',
        '”': '»',
        'Make a new document': 'Creare un nuovo documento',
        'The AI\'s answer (or press Ctrl+V anywhere):': 'La risposta dell\'IA (o premi Ctrl+V ovunque):',
        'The document travels in the link after the “#”, which no server sees. What you paste into your AI is handled by its provider.':
            'Il documento viaggia nel link dopo il «#», che nessun server vede. Ciò che incolli nella tua IA è gestito dal suo fornitore.',
        'The prompt - copy it with Ctrl+C': 'Il prompt - copialo con Ctrl+C',
        'Copy prompt': 'Copia il prompt',
        'Paste it into your AI and say what it should change.': 'Incollalo nella tua IA e di\' cosa deve cambiare.',
        '(no key yet)': '(ancora nessuna chiave)',
        '(key valid while the editor is open)': '(chiave valida finché l\'editor è aperto)',
        'The link could not be read': 'Impossibile leggere il link',
        'The document in this link is incomplete or damaged. If the AI\'s link was split over several lines (as in a terminal), copy the whole answer and paste it into the editor with Ctrl+V - the editor joins the lines.':
            'Il documento in questo link è incompleto o danneggiato. Se il link dell\'IA era diviso su più righe (come in un terminale), copia tutta la risposta e incollala nell\'editor con Ctrl+V - l\'editor unisce le righe.',
        'Loading…': 'Caricamento…',
        'Taken over by your editor': 'Ricevuto dal tuo editor',
        'The document is now in the SHLS Editor tab you already had open. Switch to that tab, or open it here.':
            'Il documento ora è nella scheda dell\'Editor SHLS che avevi già aperto. Passa a quella scheda o aprilo qui.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)': 'Qui la copia non è consentita - il testo è selezionato sotto: premi Ctrl+C (⌘C)',
        'Prompt copied - paste it into your AI and say what it should write': 'Prompt copiato - incollalo nella tua IA e di\' cosa deve scrivere',
        'This link is incomplete or damaged - please ask the AI to send it again': 'Questo link è incompleto o danneggiato - chiedi all\'IA di inviarlo di nuovo',

        /* ---------- Save to your server ---------- */
        'Save to your server': 'Salva sul tuo server',
        'Webhook address': 'Indirizzo del webhook',
        'https://example.com/api/shls': 'https://esempio.it/api/shls',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(facoltativo, inviato come «Authorization: Bearer …»; conservato finché questa scheda resta aperta)',
        'Send automatically a few seconds after each change (otherwise only when you click': 'Invia automaticamente pochi secondi dopo ogni modifica (altrimenti solo quando fai clic su',
        'or press Ctrl+S)': 'o premi Ctrl+S)',
        'Only for “': 'Solo per «',
        '” (other documents use the general address)': '» (gli altri documenti usano l\'indirizzo generale)',
        'What your server receives': 'Cosa riceve il tuo server',
        'A POST request with JSON (your server must allow CORS from https://shls.giit.ch); content is the document as a string:':
            'Una richiesta POST con JSON (il tuo server deve consentire CORS da https://shls.giit.ch); content è il documento come stringa:',
        'Embed the editor in your website': 'Integra l\'editor nel tuo sito web',
        'Send now': 'Invia ora',
        'Save setting': 'Salva impostazione',

        /* ---------- Help ---------- */
        'How it works': 'Come funziona',
        'Keyboard shortcuts': 'Scorciatoie da tastiera',
        'In the records: go up and down, fold and unfold': 'Nei record: spostati su e giù, comprimi ed espandi',
        'In the records: change the value, key or section name': 'Nei record: modifica il valore, la chiave o il nome della sezione',
        'In the records: remove the record or key': 'Nei record: rimuovi il record o la chiave',
        'In the records: move the record or key up / down': 'Nei record: sposta su / giù il record o la chiave',
        'Indent / outdent in the code by one level': 'Aumenta / riduci il rientro di un livello nel codice',
        'Undo / redo': 'Annulla / ripeti',
        'Save (download, or to your server) / export': 'Salva (su file o sul tuo server) / esporta',
        'Alt': 'Alt',
        'Escape': 'Esc',
        'A click in the middle puts the code\'s cursor on that line; the cursor in the code marks its record, key or value. Problems (a record with a value too few, indentation that is not a whole level, a missing blank line) are listed above the code with their line - click one to go there.':
            'Un clic al centro mette il cursore del codice su quella riga; il cursore nel codice segna il suo record, la sua chiave o il suo valore. I problemi (un record con un valore in meno, un rientro che non è un livello intero, una riga vuota mancante) sono elencati sopra il codice con la loro riga - fai clic su uno per andarci.',
        'Enter keeps the indentation of the line; after a section name it starts the key block.': 'Enter mantiene il rientro della riga; dopo un nome di sezione inizia il blocco di chiavi.',

        /* ---------- Messages ---------- */
        'The browser storage is full - download and delete documents under "My documents"': 'La memoria del browser è piena - scarica ed elimina documenti in «I miei documenti»',
        'The browser storage is full - delete or download documents under "My documents" first': 'La memoria del browser è piena - prima elimina o scarica documenti in «I miei documenti»',
        'The browser storage is full - delete or download some documents first': 'La memoria del browser è piena - prima elimina o scarica alcuni documenti',
        'The browser storage is full': 'La memoria del browser è piena',
        'Nothing to undo': 'Niente da annullare',
        'Nothing to redo': 'Niente da ripetere',
        'Nothing changed': 'Nessuna modifica',
        'Choose a section, key or record first': 'Scegli prima una sezione, una chiave o un record',
        'Choose a key or a record to move or duplicate it': 'Scegli una chiave o un record per spostarlo o duplicarlo',
        'This nested list has no records to add after': 'Questa lista annidata non ha record dopo cui aggiungere',
        'SHLS values have one line - the line breaks became spaces': 'I valori SHLS stanno su una riga - gli a capo sono diventati spazi',
        'Spaces around the value were removed - SHLS values cannot start with spaces': 'Gli spazi attorno al valore sono stati rimossi - i valori SHLS non possono iniziare con spazi',
        'SHLS has no empty values (a blank line is skipped) - write a placeholder such as - or PH': 'SHLS non ha valori vuoti (una riga vuota viene saltata) - scrivi un segnaposto come - o PH',
        'A key needs a name': 'Una chiave ha bisogno di un nome',
        'A section needs a name': 'Una sezione ha bisogno di un nome',
        'A key block needs at least one key - add another key first': 'Un blocco di chiavi ha bisogno di almeno una chiave - aggiungi prima un\'altra chiave',
        'This key is not there any more': 'Questa chiave non c\'è più',
        'This line is not there any more': 'Questa riga non c\'è più',
        'This record is not there any more': 'Questo record non c\'è più',
        'This is the first record': 'Questo è il primo record',
        'This is the last record': 'Questo è l\'ultimo record',
        'This is the first key': 'Questa è la prima chiave',
        'This is the last key': 'Questa è l\'ultima chiave',
        'This document is empty already': 'Questo documento è già vuoto',
        'All data is removed. "Undo" brings it back as long as the page is open.': 'Tutti i dati vengono rimossi. «Annulla» li ripristina finché la pagina è aperta.',
        'Start over': 'Ricomincia',
        'The file is larger than 8 MB': 'Il file supera gli 8 MB',
        'The CSV file is empty': 'Il file CSV è vuoto',
        'The YAML package is not loaded yet': 'Il pacchetto YAML non è ancora caricato',
        'Downloaded': 'Scaricato',
        'Copied to the clipboard': 'Copiato negli appunti',
        'Code copied': 'Codice copiato',
        '.shls downloaded': '.shls scaricato',
        'Replace': 'Sostituisci',
        'The document is removed from this browser for good. Download it first if you want to keep a copy.':
            'Il documento viene rimosso definitivamente da questo browser. Scaricalo prima se vuoi tenerne una copia.',
        'unknown format': 'formato sconosciuto',

        /* What SHLS cannot keep (opening JSON, YAML, CSV) */
        'An object inside a record becomes a list with this one object.': 'Un oggetto dentro un record diventa una lista con questo solo oggetto.',
        'Plain values where SHLS expects records (in a list or as a section) become records with the one key "Value".': 'I valori semplici dove SHLS si aspetta dei record (in una lista o come sezione) diventano record con l’unica chiave «Value».',
        'Empty values become blank lines, which SHLS readers skip - the values after them move up. Write a placeholder such as -.': 'I valori vuoti diventano righe vuote, che i lettori SHLS saltano - i valori successivi risalgono. Scrivi un segnaposto come -.',
        'Values with several lines are not supported by SHLS - they break the records apart.': 'SHLS non supporta valori su più righe - spezzano i record.',
        'Values that start or end with spaces lose them (and leading spaces change the indentation).': 'I valori che iniziano o finiscono con spazi li perdono (e gli spazi iniziali cambiano il rientro).',

        /* ---------- Problems in the code ---------- */
        'A tab in the indentation - SHLS counts spaces only, so this line is read as a section name': 'Una tabulazione nel rientro - SHLS conta solo gli spazi, quindi questa riga viene letta come nome di sezione',
        'SHLS readers ignore this line - its indentation does not fit the key block': 'I lettori SHLS ignorano questa riga - il suo rientro non corrisponde al blocco di chiavi',
    },

    html: {

        '<b>Export</b> also has <b>Open in another editor</b>: it converts the document and opens it as a new document there. Anything the other format cannot hold is listed first.':

            '<b>Esporta</b> offre anche <b>Apri in un altro editor</b>: il documento viene convertito e aperto lì come nuovo documento. Ciò che l’altro formato non può contenere viene elencato prima.',
        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Fai clic su <b>Copia il prompt</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'L\'IA risponde con un link: fai clic, o incolla tutta la risposta qui sotto. <b>Annulla</b> annulla la modifica.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'L\'IA risponde con un link: <b>incolla tutta la sua risposta qui sotto</b> (un link cliccato apre un editor separato). <b>Annulla</b> annulla la modifica.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'L\'editor può inviare ogni versione salvata al tuo server (un <b>webhook</b>), così il tuo lavoro resta dove vuoi. Non viene inviato nulla finché non inserisci qui un indirizzo.',
        'Also possible: <code>?src=&lt;URL of a .shls file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>shlseditor:ai</code>, <code>shlseditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Inoltre: <code>?src=&lt;URL di un file .shls&gt;</code> apre un file, <code>&amp;webhook=&lt;URL&gt;</code> salva lì questo documento. L\'editor può anche aprirsi in una finestra propria (<code>?embed=window</code>), e la tua pagina può dargli il proprio prompt per l\'IA e una chiave di sessione, così l\'IA invia il suo risultato al tuo server (<code>shlseditor:ai</code>, <code>shlseditor:key-request</code>) - vedi «Usare l\'editor sul tuo sito web» sotto l\'editor. I dettagli sono in <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> SHLS on the left - or start with <b>New</b> and one of the templates. A section is its name, then its keys (indented by one space, the keys of a nested list one level deeper), exactly one blank line, then the records: one value per line in the order of the keys.':
            '<b>Scrivi</b> SHLS a sinistra - o inizia con <b>Nuovo</b> e uno dei modelli. Una sezione è il suo nome, poi le sue chiavi (rientrate di uno spazio, le chiavi di una lista annidata un livello più in profondità), esattamente una riga vuota, poi i record: un valore per riga nell\'ordine delle chiavi.',
        'The middle shows each section with its <b>key block</b> and its <b>records</b>, the keys as labels; nested lists fold. It reads the code exactly as the reference SHLSDecoder does.':
            'Il centro mostra ogni sezione con il suo <b>blocco di chiavi</b> e i suoi <b>record</b>, con le chiavi come etichette; le liste annidate si comprimono. Legge il codice esattamente come lo SHLSDecoder di riferimento.',
        '<b>Click a value, a key or a section name</b> to change it right there. <b>Enter</b> or a click elsewhere writes the change into the code (one step for Undo), <b>Escape</b> cancels. The buttons above add, duplicate, move and remove records and keys - a key added or removed is added to or removed from every record.':
            '<b>Fai clic su un valore, una chiave o un nome di sezione</b> per cambiarlo lì. <b>Enter</b> o un clic altrove scrive la modifica nel codice (annullabile in un solo passaggio), <b>Esc</b> annulla. I pulsanti sopra aggiungono, duplicano, spostano e rimuovono record e chiavi - una chiave aggiunta o rimossa viene aggiunta o rimossa in ogni record.',
        '<b>Record</b> on the right shows the selected record as a form; <b>Insert</b> adds records, keys and sections; <b>Convert</b> counts the tokens against JSON and converts to JSON, YAML, CSV and JSON Lines; <b>Outline</b> lists the sections.':
            '<b>Record</b> a destra mostra il record selezionato come modulo; <b>Inserisci</b> aggiunge record, chiavi e sezioni; <b>Converti</b> conta i token rispetto a JSON e converte in JSON, YAML, CSV e JSON Lines; <b>Struttura</b> elenca le sezioni.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser. <b>Export</b> saves it as SHLS, JSON, YAML, CSV or text.':
            '<b>I miei documenti</b> (il pulsante cartella in alto a sinistra) elenca ogni documento salvato in questo browser. <b>Esporta</b> lo salva come SHLS, JSON, YAML, CSV o testo.',
    },

    patterns: [
        /* ---------- Status lines and counts ---------- */
        ['^(\\d+) (?:line|lines) · ([\\d.]+ K?B) · (\\d+) (?:section|sections)$', (m, l, kb, s) => `${l} ${getPlural(l, 'riga', 'righe')} · ${kb} · ${s} ${getPlural(s, 'sezione', 'sezioni')}`],
        ['^([\\d,]+) bytes$', (m, b) => `${formatThousands(b)} byte`],
        ['^(\\d+) (?:record|records) · (\\d+) (?:key|keys)$', (m, r, k) => `${r} record · ${k} ${translateKeys(k)}`],
        ['^(\\d+) (?:record|records) · (\\d+) (?:key|keys) · line (\\d+)$', (m, r, k, l) => `${r} record · ${k} ${translateKeys(k)} · riga ${l}`],
        ['^(\\d+) (?:record|records) · line (\\d+)$', '$1 record · riga $2'],
        ['^(\\d+) (?:record|records)$', '$1 record'],
        ['^(\\d+) (?:problem|problems)$', (m, k) => `${k} ${getPlural(k, 'problema', 'problemi')}`],
        ['^nested list · (\\d+) (?:key|keys)$', (m, k) => `lista annidata · ${k} ${translateKeys(k)}`],
        ['^(nested list · )?level (\\d+) · line (\\d+)$', (m, nl, l, z) => `${nl ? 'lista annidata · ' : ''}livello ${l} · riga ${z}`],
        ['^record (\\d+) of (\\d+) · lines (\\d+)-(\\d+)$', 'record $1 di $2 · righe $3-$4'],
        ['^SHLS needs about (\\d+) % fewer tokens than the same data as JSON - approximate tokens of common AI models\\.$', 'SHLS richiede circa il $1 % di token in meno degli stessi dati in JSON - token approssimativi dei modelli di IA più diffusi.'],
        ['^The same data as JSON needs about as many tokens - approximate tokens of common AI models\\.$', 'Gli stessi dati in JSON richiedono circa altrettanti token - token approssimativi dei modelli di IA più diffusi.'],
        ['^The records of "(.+)": its keys are the columns, a nested list is one cell with JSON\\.$', 'I record di «$1»: le sue chiavi sono le colonne, una lista annidata è una cella con JSON.'],
        ['^One record of "(.+)" per line\\.$', 'Un record di «$1» per riga.'],
        ['^"(.+)" has no records$', '«$1» non ha record'],

        /* ---------- Problems above the code ---------- */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'errore', 'errori')}`],
        ['^(\\d+) (?:note|notes)$', (m, k) => `${k} ${getPlural(k, 'nota', 'note')}`],
        ['^· (\\d+) (?:note|notes)$', (m, k) => `· ${k} ${getPlural(k, 'nota', 'note')}`],
        ['^Line (\\d+)$', 'Riga $1'],
        ['^Indented by (\\d+) (?:space|spaces) - not a whole level \\((\\d+) (?:space|spaces) per level\\)$', (m, a, b) => `Rientro di ${a} ${getPlural(a, 'spazio', 'spazi')} - non un livello intero (${b} ${getPlural(b, 'spazio', 'spazi')} per livello)`],
        ['^Indented (\\d+) levels deeper than the line above - one level at a time$', 'Rientro di $1 livelli più profondo della riga sopra - un livello alla volta'],
        ['^"(.+)" has no key block yet - these lines are read as its keys \\(the key block follows the section name directly\\)$', '«$1» non ha ancora un blocco di chiavi - queste righe vengono lette come sue chiavi (il blocco di chiavi segue direttamente il nome della sezione)'],
        ['^The key "(.+)" is twice in the key block - only one of them keeps its values\\. Is the blank line between the key block and the records missing\\?$', 'La chiave «$1» compare due volte nel blocco di chiavi - solo una conserva i suoi valori. Manca la riga vuota tra il blocco di chiavi e i record?'],
        ['^"(.+)" looks like a value but stands in the key block - records follow the key block after exactly one blank line$', '«$1» sembra un valore ma si trova nel blocco di chiavi - i record seguono il blocco di chiavi dopo esattamente una riga vuota'],
        ['^(\\d+) blank lines after the key block of "(.+)" - exactly one belongs there$', '$1 righe vuote dopo il blocco di chiavi di «$2» - ne va esattamente una'],
        ['^This record of "(.+)" has (\\d+) of (\\d+) values - its last keys are missing in the data$', 'Questo record di «$1» ha $2 dei $3 valori - le sue ultime chiavi mancano nei dati'],
        ['^No blank line before this record of "(.+)" while the others have one - the record above may have more values than the key block \\((\\d+)\\)$', 'Nessuna riga vuota prima di questo record di «$1», mentre gli altri ce l\'hanno - il record sopra forse ha più valori del blocco di chiavi ($2)'],
        ['^A blank line inside a record of "(.+)" - the record may have fewer values than the key block \\((\\d+)\\)$', 'Una riga vuota dentro un record di «$1» - il record forse ha meno valori del blocco di chiavi ($2)'],

        /* ---------- Messages with names ---------- */
        ['^"(.+)" has no key block - write its keys first$', '«$1» non ha un blocco di chiavi - scrivi prima le sue chiavi'],
        ['^"(.+)" has no key block$', '«$1» non ha un blocco di chiavi'],
        ['^There is already a section "(.+)"$', 'Esiste già una sezione «$1»'],
        ['^There is no section "(.+)"$', 'Non esiste una sezione «$1»'],
        ['^Remove the section "(.+)"\\?$', 'Rimuovere la sezione «$1»?'],
        ['^Its key block and its (\\d+) (?:record is|records are) removed\\. "Undo" brings them back\\.$', (m, k) => `Il suo blocco di chiavi e ${getPlural(k, 'il suo record vengono rimossi', `i suoi ${k} record vengono rimossi`)}. «Annulla» li ripristina.`],
        ['^Remove the key "(.+)"\\?$', 'Rimuovere la chiave «$1»?'],
        ['^Its value is removed from every record of "(.+)" \\((\\d+)\\)\\. "Undo" brings it back\\.$', 'Il suo valore viene rimosso da ogni record di «$1» ($2). «Annulla» lo ripristina.'],
        ['^Path copied: (.*)$', 'Percorso copiato: $1'],
        ['^Line (\\d+): (.*)$', 'Riga $1: $2'],
        ['^"(.+)" converted from ([\\w ]+)$', '«$1» convertito da $2'],
        ['^SHLS cannot keep all of this data: (.*)$', 'SHLS non può conservare tutti questi dati: $1'],
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
        ['^"(.+)" is not a file the editor can open$', '«$1» non è un file che l\'editor può aprire'],
        ['^Opened "(.+)" - converted from ([\\w ]+)$', '«$1» aperto - convertito da $2'],
        ['^Opened "(.+)" - it is now in "My documents"$', '«$1» aperto - ora si trova in «I miei documenti»'],
        ['^"(.+)" could not be opened: (.*)$', 'Impossibile aprire «$1»: $2'],
        ['^The addition is not valid SHLS - it is open as a new document "(.+)"$', 'L\'aggiunta non è SHLS valido - è aperta come nuovo documento «$1»'],
        ['^(.+) - the addition is open as a new document "(.+)"$', '$1 - l\'aggiunta è aperta come nuovo documento «$2»'],
        ['^Document received - (\\d+) (?:problem|problems) found, see above the code$', (m, k) => `Documento ricevuto - ${k} ${getPlural(k, 'problema trovato', 'problemi trovati')}, vedi sopra il codice`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '«$1» modificato dall\'IA - «Annulla» annulla la modifica'],
        ['^"(.+)" duplicated$', '«$1» duplicato'],
        ['^Delete "(.+)"\\?$', 'Eliminare «$1»?'],
        ['^"(.+)" deleted$', '«$1» eliminato'],

        /* ---------- AI Assistant ---------- */
        ['^Part (\\d+) of (\\d+) received$', 'Parte $1 di $2 ricevuta'],
        ['^Open the other (?:link|links) from the AI too \\(still missing: part (.+)\\)\\.$',
            'Apri anche gli altri link dell\'IA (manca ancora: parte $1).'],
        ['^Part (\\d+) of (\\d+) received - paste the other (?:link|links) too \\(missing: (.+)\\)$', 'Parte $1 di $2 ricevuta - incolla anche gli altri link (manca: $3)'],
        ['^The AI sends the document to (.+) with a key that only works for this session\\. What you paste into your AI is handled by its provider\\.$',
            'L\'IA invia il documento a $1 con una chiave valida solo per questa sessione. Ciò che incolli nella tua IA è gestito dal suo fornitore.'],
        ['^The AI sends its result to (.+) by itself, and it opens here\\. If it answers with a link, paste its answer below\\.$',
            'L\'IA invia da sé il suo risultato a $1, e si apre qui. Se risponde con un link, incolla la sua risposta qui sotto.'],
        ['^No key from (.+) - the prompt asks the AI for a link instead$', 'Nessuna chiave da $1 - il prompt chiede invece un link all\'IA'],
        ['^Prompt copied - the AI sends its result to (.+)$', 'Prompt copiato - l\'IA invia il suo risultato a $1'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Apri $1'],
    ],
};
