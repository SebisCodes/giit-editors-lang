/* Italian texts of the XML editor: the bar, the work area (code, tree,
   node, insert, convert), its dialogs and messages, and the problems found
   in the code. What all editors share is in common.js; how the
   dictionaries are used is described in i18n.js. Names of documents,
   elements and attributes stay as they are: the patterns copy them into the
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

const dict = {
    text: {
        /* Words that are the same in German and English, so not in the German pack */
        'Export': 'Esporta',

        /* ---------- Top bar ---------- */
        'XML Editor - home': 'Editor XML - pagina iniziale',
        'XML Editor': 'Editor XML',
        'File': 'File',
        'My documents (Ctrl+O)': 'I miei documenti (Ctrl+O)',
        'My documents': 'I miei documenti',
        'New document, or start this one over': 'Nuovo documento o ricomincia da capo questo',
        'New': 'Nuovo',
        'New blank document': 'Nuovo documento vuoto',
        'An XML declaration and an empty root element': 'Una dichiarazione XML e un elemento radice vuoto',
        'Product catalog': 'Catalogo prodotti',
        'Products with attributes, prices and stock': 'Prodotti con attributi, prezzi e giacenze',
        'RSS feed': 'Feed RSS',
        'A channel with one item, RSS 2.0': 'Un canale con un elemento, RSS 2.0',
        'Sitemap': 'Sitemap',
        'sitemap.xml for search engines, with a default namespace': 'sitemap.xml per i motori di ricerca, con un namespace predefinito',
        'Configuration': 'Configurazione',
        'Settings and a database connection': 'Impostazioni e una connessione al database',
        'The welcome example': 'L\'esempio di benvenuto',
        'Shows what the editor can do': 'Mostra cosa sa fare l\'editor',
        'Start this document over': 'Ricomincia questo documento',
        'Keeps the declaration and the root element, empties the rest - "Undo" brings it back': 'Mantiene la dichiarazione e l\'elemento radice, svuota il resto - «Annulla» lo ripristina',
        'Open an XML file from your computer (you can also drag it into the window)': 'Apri un file XML dal tuo computer (puoi anche trascinarlo nella finestra)',
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
        'Save the document as an .xml file (Ctrl+S)': 'Salva il documento come file .xml (Ctrl+S)',
        'Download .xml': 'Scarica .xml',
        'XML, minified XML, JSON, YAML and plain text (Ctrl+E)': 'XML, XML minimizzato, JSON, YAML e testo semplice (Ctrl+E)',
        'Export…': 'Esporta…',

        /* ---------- Views and work area ---------- */
        'View': 'Vista',
        'Edit': 'Modifica',
        'Side panel': 'Pannello laterale',
        'Tree': 'Albero',
        'Node': 'Nodo',
        'XML code': 'Codice XML',
        'Copy the XML code to the clipboard': 'Copia il codice XML negli appunti',
        'Copy code': 'Copia codice',
        'Copy': 'Copia',
        'Indent every element on its own line (mixed content stays as it is)': 'Indenta ogni elemento su una riga propria (il contenuto misto resta com\'è)',
        'Format': 'Formatta',
        'File format': 'Formato file',
        'Drag to change the width of the code area': 'Trascina per cambiare la larghezza dell\'area del codice',
        'Drag to change the width': 'Trascina per cambiare la larghezza',
        'Element tree': 'Albero degli elementi',
        'Element tree: click a node to go to its place in the code, click a value to edit it': 'Albero degli elementi: fai clic su un nodo per andare al suo punto nel codice, su un valore per modificarlo',
        'Search names, values and text': 'Cerca nomi, valori e testo',
        'Search in the tree': 'Cerca nell\'albero',
        'XPath query, e.g. //book[price > 30]': 'Query XPath, ad es. //book[price > 30]',
        'XPath query': 'Query XPath',
        'Previous match (Shift+Enter)': 'Risultato precedente (Shift+Enter)',
        'Previous match': 'Risultato precedente',
        'Next match (Enter)': 'Risultato successivo (Enter)',
        'Next match': 'Risultato successivo',
        'Fold everything below the root': 'Comprimi tutto sotto la radice',
        'Fold all': 'Comprimi tutto',
        'Unfold every element': 'Espandi ogni elemento',
        'Unfold all': 'Espandi tutto',
        'Path of the selected node': 'Percorso del nodo selezionato',
        'Click a node to see its path': 'Fai clic su un nodo per vederne il percorso',
        'Put this path into the XPath field': 'Metti questo percorso nel campo XPath',
        'As query': 'Come query',
        'Copy the XPath of the selected node': 'Copia l\'XPath del nodo selezionato',
        'Copy path': 'Copia percorso',
        'Path copied': 'Percorso copiato',
        'Updating…': 'Aggiornamento…',
        'Fold': 'Comprimi',
        'Unfold': 'Espandi',
        'empty': 'vuoto',
        'Add a child element': 'Aggiungi un elemento figlio',
        'Add an attribute': 'Aggiungi un attributo',
        'Move up': 'Sposta su',
        'Move down': 'Sposta giù',
        'Remove the element': 'Rimuovi l\'elemento',
        'Remove': 'Rimuovi',
        'The document is empty - type some XML on the left, or choose a template under "New".': 'Il documento è vuoto - scrivi un po\' di XML a sinistra, oppure scegli un modello in «Nuovo».',
        'Fix the errors first': 'Prima correggi gli errori',
        'No match': 'Nessun risultato',
        'Not a valid XPath expression': 'Espressione XPath non valida',
        'Nothing found': 'Non trovato nulla',
        'Open it here': 'Aprilo qui',
        'Drop the XML file here': 'Rilascia qui il file XML',

        /* Problems above the code */
        'Hide': 'Nascondi',
        'Show': 'Mostra',

        /* ---------- Side panel ---------- */
        'The selected node: path, namespace, attributes and actions': 'Il nodo selezionato: percorso, namespace, attributi e azioni',
        'Ready-made pieces: elements, comments, CDATA, characters': 'Elementi pronti: elementi, commenti, CDATA, caratteri',
        'Insert': 'Inserisci',
        'Format, minify, JSON and YAML': 'Formatta, minimizza, JSON e YAML',
        'Convert': 'Converti',
        'Click a node in the tree (or put the cursor in the code) to see it here.': 'Fai clic su un nodo nell\'albero (o metti il cursore nel codice) per vederlo qui.',
        'depth': 'profondità',
        'element': 'elemento',
        'elements': 'elementi',
        'attribute': 'attributo',
        'attributes': 'attributi',
        'Start and end tag': 'Tag di apertura e chiusura',
        'Root element': 'Elemento radice',
        'Default namespace': 'Namespace predefinito',
        'Namespaces': 'Namespace',
        'Attribute': 'Attributo',
        'Element': 'Elemento',
        'Text': 'Testo',
        'Comment': 'Commento',
        'CDATA section': 'Sezione CDATA',
        'Processing instruction': 'Istruzione di elaborazione',
        'Path': 'Percorso',
        'Line': 'Riga',
        'Namespace': 'Namespace',
        'none': 'nessuno',
        'Content': 'Contenuto',
        'Attributes': 'Attributi',
        'Remove the attribute': 'Rimuovi l\'attributo',
        'No attributes.': 'Nessun attributo.',
        'Add attribute': 'Aggiungi attributo',
        'Add child element': 'Aggiungi elemento figlio',
        'Length': 'Lunghezza',
        'Structure': 'Struttura',
        'An element at the cursor, around the selected text': 'Un elemento al cursore, attorno al testo selezionato',
        'Empty element': 'Elemento vuoto',
        'A self-closing element': 'Un elemento autochiudente',
        'An attribute (put the cursor inside a start tag)': 'Un attributo (metti il cursore dentro un tag di apertura)',
        'Text that is not parsed as markup': 'Testo che non viene interpretato come markup',
        'XML declaration': 'Dichiarazione XML',
        'The first line: version and encoding': 'La prima riga: versione e codifica',
        'A namespace declaration (inside a start tag)': 'Una dichiarazione di namespace (dentro un tag di apertura)',
        'Schema instance': 'Istanza di schema',
        'xmlns:xsi for xsi:schemaLocation (inside a start tag)': 'xmlns:xsi per xsi:schemaLocation (dentro un tag di apertura)',
        'Characters': 'Caratteri',
        'As entity references, so they stay readable in any encoding.': 'Come riferimenti a entità, così restano leggibili in qualsiasi codifica.',
        'Code': 'Codice',
        'Indent with': 'Rientro con',
        '2 spaces': '2 spazi',
        '4 spaces': '4 spazi',
        'Tabs': 'Tabulazioni',
        'Indent every element on its own line (one undo step)': 'Indenta ogni elemento su una riga propria (annullabile in un solo passaggio)',
        'Remove comments and the white space between elements (one undo step)': 'Rimuovi i commenti e gli spazi tra gli elementi (annullabile in un solo passaggio)',
        'Minify': 'Minimizza',
        'Other formats': 'Altri formati',
        'As JSON': 'Come JSON',
        'As YAML': 'Come YAML',
        'The document is not well-formed - fix the errors above the code first.': 'Il documento non è ben formato - prima correggi gli errori sopra il codice.',
        'Attributes become': 'Gli attributi diventano',
        ', text next to elements': ', il testo accanto agli elementi',
        ', repeated elements a list. Comments are left out.': ', gli elementi ripetuti un elenco. I commenti vengono omessi.',
        'Result': 'Risultato',
        'Download': 'Scarica',

        /* ---------- Export ---------- */
        'Close': 'Chiudi',
        'File name': 'Nome del file',
        'XML as it is (.xml)': 'XML così com\'è (.xml)',
        'Minified XML (.xml)': 'XML minimizzato (.xml)',
        'Converted to JSON (.json)': 'Convertito in JSON (.json)',
        'Converted to YAML (.yaml)': 'Convertito in YAML (.yaml)',
        'Plain text (.txt)': 'Testo semplice (.txt)',
        'Download everything at once: XML, minified XML, JSON, YAML and text': 'Scarica tutto in una volta: XML, XML minimizzato, JSON, YAML e testo',
        'All formats (ZIP)': 'Tutti i formati (ZIP)',
        'The document is not well-formed - fix the errors first': 'Il documento non è ben formato - prima correggi gli errori',

        /* ---------- My documents ---------- */
        'Search by name': 'Cerca per nome',
        'Search your documents': 'Cerca nei tuoi documenti',
        'Open an XML file from your computer as a new document': 'Apri un file XML dal tuo computer come nuovo documento',
        'New document': 'Nuovo documento',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Fai clic su un documento per aprirlo. I documenti sono salvati solo in questo browser - non viene caricato nulla. Cancellando i dati del sito nel browser spariscono, quindi scarica quelli che vuoi conservare.',
        'Download every document as an .xml file in one ZIP': 'Scarica ogni documento come file .xml in un unico ZIP',
        'Download all (ZIP)': 'Scarica tutto (ZIP)',
        'Rename': 'Rinomina',
        'Duplicate': 'Duplica',
        'Download as .xml': 'Scarica come .xml',
        'Delete': 'Elimina',
        'New name': 'Nuovo nome',
        'This document is open': 'Questo documento è aperto',
        'Click to open this document': 'Fai clic per aprire questo documento',
        'No documents yet.': 'Ancora nessun documento.',
        'The document is removed from this browser for good. Download it first if you want to keep a copy.':
            'Il documento viene rimosso definitivamente da questo browser. Scaricalo prima se vuoi conservarne una copia.',

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
        'The document is now in the XML Editor tab you already had open. Switch to that tab, or open it here.':
            'Il documento ora si trova nella scheda dell\'Editor XML che avevi già aperto. Passa a quella scheda o aprilo qui.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)': 'Qui non è consentito copiare - il testo è selezionato qui sotto: premi Ctrl+C (⌘C)',
        'Paste it into your AI and say what it should write.': 'Incollalo nella tua IA e dille cosa deve scrivere.',
        'Prompt copied - paste it into your AI and say what it should write': 'Prompt copiato - incollalo nella tua IA e dille cosa deve scrivere',
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
        'A POST request with JSON (your server must allow CORS from https://xml.giit.ch):': 'Una richiesta POST con JSON (il tuo server deve consentire CORS da https://xml.giit.ch):',
        'Embed the editor in your website': 'Integra l\'editor nel tuo sito web',
        'Send now': 'Invia ora',
        'Save setting': 'Salva impostazione',

        /* ---------- Help ---------- */
        'How it works': 'Come funziona',
        'Keyboard shortcuts': 'Scorciatoie da tastiera',
        'after a start tag': 'dopo un tag di apertura',
        'Adds the matching end tag': 'Aggiunge il tag di chiusura corrispondente',
        'Show the cursor\'s node in the tree': 'Mostra nell\'albero il nodo al cursore',
        'Indent / outdent': 'Aumenta / riduci rientro',
        'Undo / redo': 'Annulla / ripeti',
        'Save (download .xml, or to your server) / export': 'Salva (file .xml o sul tuo server) / esporta',
        'Search in the tree (outside the code)': 'Cerca nell\'albero (fuori dal codice)',
        'The editor never loads a DTD, a schema or an external entity, and it does not expand entities declared in a DTD: their references stay as written.':
            'L\'editor non carica mai una DTD, uno schema o un\'entità esterna, e non espande le entità dichiarate in una DTD: i loro riferimenti restano come scritti.',

        'Problems (the first well-formedness error, undeclared namespace prefixes, ids used twice) are listed above the code with line and column - click one to go there.':
            'I problemi (il primo errore di struttura XML, prefissi di namespace non dichiarati, id usati due volte) sono elencati sopra il codice con riga e colonna - fai clic su uno per andarci.',
        'https://example.com/api/xml': 'https://esempio.it/api/xml',

        /* ---------- Messages ---------- */
        'The browser storage is full - download and delete documents under "My documents"': 'La memoria del browser è piena - scarica ed elimina documenti in «I miei documenti»',
        'The browser storage is full - delete or download documents under "My documents" first': 'La memoria del browser è piena - prima elimina o scarica documenti in «I miei documenti»',
        'The browser storage is full - delete or download some documents first': 'La memoria del browser è piena - prima elimina o scarica alcuni documenti',
        'The browser storage is full': 'La memoria del browser è piena',
        'Nothing to undo': 'Niente da annullare',
        'Nothing to redo': 'Niente da ripetere',
        'This changed in the code - wait for the tree, then try again': 'Questo è cambiato nel codice - attendi l\'albero e poi riprova',
        'Editing in the tree - Enter keeps it, Escape cancels': 'Modifica nell\'albero - Invio conferma, Esc annulla',
        'The code changed meanwhile - the edit was not used': 'Nel frattempo il codice è cambiato - la modifica non è stata applicata',
        'The root element cannot be removed here - edit the code instead': 'L\'elemento radice non si può rimuovere qui - modifica invece il codice',
        'Removed - "Undo" brings it back': 'Rimosso - «Annulla» lo ripristina',
        'It is the first element already': 'È già il primo elemento',
        'It is the last element already': 'È già l\'ultimo elemento',
        'The document has an XML declaration already': 'Il documento ha già una dichiarazione XML',
        'The code is formatted already': 'Il codice è già formattato',
        'Code formatted - "Undo" brings the old layout back': 'Codice formattato - «Annulla» ripristina la disposizione precedente',
        'The code is minified already': 'Il codice è già minimizzato',
        'Code minified - "Undo" brings it back': 'Codice minimizzato - «Annulla» lo ripristina',
        'This document is empty already': 'Questo documento è già vuoto',
        'Everything inside the root element is removed; the declaration and the root element stay. "Undo" brings it back as long as the page is open.':
            'Viene rimosso tutto ciò che è dentro l\'elemento radice; la dichiarazione e l\'elemento radice restano. «Annulla» lo ripristina finché la pagina è aperta.',
        'Everything is removed. "Undo" brings it back as long as the page is open.': 'Viene rimosso tutto. «Annulla» lo ripristina finché la pagina è aperta.',
        'Start over': 'Ricomincia',
        'The file is larger than 8 MB': 'Il file supera gli 8 MB',
        'XML pasted from the clipboard - "Undo" brings the old text back': 'XML incollato dagli appunti - «Annulla» ripristina il testo precedente',
        'Downloaded': 'Scaricato',
        'Copied to the clipboard': 'Copiato negli appunti',
        'This browser does not allow copying this': 'Questo browser non consente di copiarlo',
        'Code copied': 'Codice copiato',
        '.xml downloaded': '.xml scaricato',
        'Add': 'Aggiungi',
        'Replace': 'Sostituisci',

        /* ---------- Problems (xml.js) ---------- */
        'The document is empty - an XML document needs one root element': 'Il documento è vuoto - un documento XML richiede un elemento radice',
        'The DTD is not loaded: the editor never reads external DTDs or entities, entity references stay as written':
            'La DTD non viene caricata: l\'editor non legge mai DTD o entità esterne, i riferimenti a entità restano come scritti',
        'Entities of the DTD are not expanded: references to them stay as written': 'Le entità della DTD non vengono espanse: i riferimenti a esse restano come scritti',
    },

    html: {

        '<b>Export</b> also has <b>Open in another editor</b>: it converts the document and opens it as a new document there. Anything the other format cannot hold is listed first.':

            '<b>Esporta</b> offre anche <b>Apri in un altro editor</b>: il documento viene convertito e aperto lì come nuovo documento. Ciò che l’altro formato non può contenere viene elencato prima.',
        /* Convert */
        'Attributes become <code>@name</code>, text next to elements <code>#text</code>, repeated elements a list. Comments are left out.':
            'Gli attributi diventano <code>@name</code>, il testo accanto agli elementi <code>#text</code>, gli elementi ripetuti un elenco. I commenti vengono omessi.',

        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Fai clic su <b>Copia il prompt</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'L\'IA risponde con un link: fai clic su di esso, oppure incolla qui sotto l\'intera risposta. <b>Annulla</b> annulla la modifica.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'L\'IA risponde con un link: <b>incolla qui sotto l\'intera risposta</b> (un link cliccato apre un editor separato). <b>Annulla</b> annulla la modifica.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'L\'editor può inviare ogni versione salvata al tuo server (un <b>webhook</b>), così il tuo lavoro resta dove vuoi tu. Non viene inviato nulla finché non inserisci qui un indirizzo.',
        'Also possible: <code>?src=&lt;URL of an XML file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>xmleditor:ai</code>, <code>xmleditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'È anche possibile: <code>?src=&lt;URL di un file XML&gt;</code> apre un file, <code>&amp;webhook=&lt;URL&gt;</code> salva lì questo documento. L\'editor può anche aprirsi in una finestra propria (<code>?embed=window</code>), e la tua pagina può passargli un proprio prompt per l\'IA e una chiave di sessione, così l\'IA invia il risultato al tuo server (<code>xmleditor:ai</code>, <code>xmleditor:key-request</code>) - vedi «Usare l\'editor sul tuo sito web» sotto l\'editor. I dettagli sono in <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> XML on the left - or start with <b>New</b> and one of the templates. The tree in the middle shows the elements, attributes, text, comments and CDATA as you type.':
            '<b>Scrivi</b> XML a sinistra - oppure inizia con <b>Nuovo</b> e uno dei modelli. L\'albero al centro mostra elementi, attributi, testo, commenti e CDATA mentre scrivi.',
        '<b>Click a node in the tree</b> to go to its place in the code; the cursor in the code shows its node in the tree. Fold elements with the arrow.':
            '<b>Fai clic su un nodo nell\'albero</b> per andare al suo punto nel codice; il cursore nel codice mostra il suo nodo nell\'albero. Comprimi gli elementi con la freccia.',
        '<b>Click a name, an attribute value or a text in the tree</b> to edit it right there. <b>Enter</b> or a click elsewhere writes the change into the code (special characters escaped, one step for Undo), <b>Escape</b> cancels. The buttons of a row add a child element or an attribute, move the element up or down, or remove it.':
            '<b>Fai clic su un nome, un valore di attributo o un testo nell\'albero</b> per modificarlo direttamente lì. <b>Invio</b> o un clic altrove scrive la modifica nel codice (caratteri speciali con escape, annullabile in un solo passaggio), <b>Esc</b> annulla. I pulsanti di una riga aggiungono un elemento figlio o un attributo, spostano l\'elemento su o giù, o lo rimuovono.',
        '<b>Search</b> marks nodes whose name, value or text contains the words; the <b>XPath</b> field marks the nodes an XPath 1.0 expression selects (<code>_:</code> is the default namespace of the root).':
            '<b>Cerca</b> evidenzia i nodi il cui nome, valore o testo contiene le parole; il campo <b>XPath</b> evidenzia i nodi selezionati da un\'espressione XPath 1.0 (<code>_:</code> è il namespace predefinito della radice).',
        '<b>Node</b> on the right shows the selected node; <b>Insert</b> has ready-made pieces; <b>Convert</b> formats, minifies and turns the document into JSON or YAML.':
            '<b>Nodo</b> a destra mostra il nodo selezionato; <b>Inserisci</b> ha elementi pronti; <b>Converti</b> formatta, minimizza e trasforma il documento in JSON o YAML.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser. <b>Export</b> saves XML, minified XML, JSON, YAML or plain text.':
            '<b>I miei documenti</b> (il pulsante a forma di cartella in alto a sinistra) elenca ogni documento conservato in questo browser. <b>Esporta</b> salva XML, XML minimizzato, JSON, YAML o testo semplice.',
        'Comment lines in or out (<code>&lt;!-- --&gt;</code>)': 'Commenta o decommenta righe (<code>&lt;!-- --&gt;</code>)',
    },

    patterns: [
        /* ---------- Status lines ---------- */
        ['^The elements are nested more than (\\d+) levels deep - the editor reads at most (\\d+)$', 'Gli elementi sono annidati per più di $1 livelli - l’editor ne legge al massimo $2'],
        ['^(\\d+) lines · ([\\d.]+ K?B)(?: · (\\d+) (?:element|elements))?$', (m, l, kb, e) => `${l} ${getPlural(l, 'riga', 'righe')} · ${kb}${e ? ` · ${e} ${getPlural(e, 'elemento', 'elementi')}` : ''}`],
        ['^([\\d,]+) bytes$', (m, b) => `${formatThousands(b)} byte`],
        ['^\\d{1,3}(?:,\\d{3})+$', m => formatThousands(m)],
        ['^(\\d+) (?:child|children)$', (m, k) => `${k} ${getPlural(k, 'figlio', 'figli')}`],
        ['^(\\d+) (?:match|matches)$', (m, k) => `${k} ${getPlural(k, 'risultato', 'risultati')}`],
        ['^(\\d+) found$', (m, k) => `${k} ${getPlural(k, 'trovato', 'trovati')}`],
        ['^(\\d+) (?:element|elements) · (\\d+) (?:attribute|attributes) ·$', (m, e, a) => `${e} ${getPlural(e, 'elemento', 'elementi')} · ${a} ${getPlural(a, 'attributo', 'attributi')} ·`],
        ['^(?:element|elements) ·$', 'elementi ·'],
        ['^(?:attribute|attributes) ·$', 'attributi ·'],
        ['^(\\d+) (?:child element|child elements)$', (m, k) => `${k} ${getPlural(k, 'elemento figlio', 'elementi figli')}`],
        ['^(\\d+) (?:character|characters)$', (m, k) => `${k} ${getPlural(k, 'carattere', 'caratteri')}`],
        ['^ZIP downloaded with (\\d+) files$', 'ZIP scaricato con $1 file'],

        /* Problems above the code */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'errore', 'errori')}`],
        ['^· (\\d+) (?:note|notes)$', (m, k) => `· ${k} ${getPlural(k, 'nota', 'note')}`],
        ['^(\\d+) (?:note|notes)$', (m, k) => `${k} ${getPlural(k, 'nota', 'note')}`],
        ['^Line (\\d+):(\\d+)$', 'Riga $1:$2'],
        ['^Not well-formed: (.*)$', 'Non ben formato: $1'],
        ['^The namespace prefix "(.+)" is not declared - add (.+)$', 'Il prefisso di namespace «$1» non è dichiarato - aggiungi $2'],
        ['^The id "(.*)" is used twice$', 'L\'id «$1» è usato due volte'],

        /* ---------- Tree ---------- */
        ['^"(.*)" is not a valid XML name - names start with a letter or _ and have no spaces$', '«$1» non è un nome XML valido - i nomi iniziano con una lettera o _ e non hanno spazi'],
        ['^The element already has an attribute "(.+)"$', 'L\'elemento ha già un attributo «$1»'],
        ['^Attribute "(.+)" removed - "Undo" brings it back$', 'Attributo «$1» rimosso - «Annulla» lo ripristina'],
        ['^<(.+)> removed - "Undo" brings it back$', '<$1> rimosso - «Annulla» lo ripristina'],

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
        ['^"(.+)" is not an XML file$', '«$1» non è un file XML'],
        ['^Opened "(.+)" - it is now in "My documents"$', '«$1» aperto - ora si trova in «I miei documenti»'],
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
