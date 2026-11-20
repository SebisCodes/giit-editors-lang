/* Italian texts that all giit editors share: the links to giit.ch in the bar,
   saving on a server and inside a page (sync.js), the AI status (aistatus.js),
   the confirmation box (dialogs.js). The editor's own texts are in ui.js; how
   they are used is described in i18n.js. The same file serves every giit
   editor. */

/**
 * Writes a time of day in the 24-hour form of the language.
 * @param {string} h - the hour.
 * @param {string} m - the minutes.
 * @param {string} ap - "AM", "PM" or empty.
 * @returns {string} the text in the language.
 */
const formatHour = (h, m, ap) => `${String((+h % 12) + (ap === 'PM' ? 12 : 0) + (ap ? 0 : +h - (+h % 12))).padStart(2, '0')}:${m}`;
/**
 * Translates the text the pattern found (il in the English pattern).
 * @param {string} w - the English text the pattern found.
 * @returns {string} the text in the language.
 */
const translateThing = w => (w === 'drawing' ? 'il disegno' : 'il documento');

export default {
    text: {
        "All giit editors": "Tutti gli editor giit",
        "by giit.ch": "di giit.ch",
        "Open in another editor": "Apri in un altro editor",
        "Not everything can be converted": "Non tutto può essere convertito",
        "Open anyway": "Apri comunque",
        "Pictures and other files of the document stay here: add them again in the other editor": "Le immagini e gli altri file del documento restano qui: aggiungili di nuovo nell’altro editor",
        "The document is too long for a link - export it and open the file in the other editor": "Il documento è troppo lungo per un link - esportalo e apri il file nell’altro editor",
        "Scripts and styles": "Script e stili",
        "Form fields": "Campi dei moduli",
        "Footnotes, labels and references": "Note a piè di pagina, etichette e riferimenti",
        "LaTeX commands and environments without an equivalent": "Comandi e ambienti LaTeX senza equivalente",
        "Document class, packages and page settings": "Classe del documento, pacchetti e impostazioni di pagina",
        "The table of contents": "L’indice",
        "Typst functions without an equivalent": "Funzioni Typst senza equivalente",
        "Formulas are copied as written: check them": "Le formule sono copiate così come sono: controllale",
        "Formulas become plain code": "Le formule diventano semplice codice",
        "Links with an unsafe address": "Link con un indirizzo non sicuro",
        "Comments": "Commenti",
        "Empty values (null): TOML has no null": "Valori vuoti (null): TOML non ha null",
        "The data is not a table: it goes under the key \"value\"": "I dati non sono una tabella: vanno sotto la chiave «value»",
        "Keys that are not valid XML names are changed": "Le chiavi che non sono nomi XML validi vengono modificate",
        "Only the first list goes into the table": "Solo il primo elenco va nella tabella",
        "Nested values go into one cell as JSON": "I valori annidati vanno in una cella come JSON",
        "The picture could not be stored in this browser (storage full or blocked) - it is kept only until the page is closed: download the document to keep it": "Impossibile salvare l’immagine in questo browser (spazio pieno o bloccato) - resta solo finché la pagina è aperta: scarica il documento per conservarla",
        "Column names that occur twice (numbered)": "Nomi di colonna ripetuti (numerati)",
        "Fields beyond the header (named Column N)": "Campi oltre l’intestazione (chiamati Column N)",
        "The AI's result could not be opened - your browser's storage may be full": "Impossibile aprire il risultato dell’IA - lo spazio del browser potrebbe essere pieno",
        "The AI's result could not be opened": "Impossibile aprire il risultato dell’IA",
        "Types of values: SHLS holds every value as text": "Tipi di valori: SHLS conserva ogni valore come testo",
        "This data has no list of records, so it does not make a table": "Questi dati non hanno un elenco di record, quindi non formano una tabella",
        "The XML cannot be read - fix the problem above the code first": "L’XML non è leggibile - correggi prima il problema sopra il codice",
        "It could not be converted": "Non è stato possibile convertirlo",
        "Content from a third party, not checked by giit.ch": "Contenuto di terzi, non verificato da giit.ch",
        // Wrapping long lines in the code view (wrap.js)
        "Wrap": "A capo",
        "Wrap long lines in the view - each line of the code stays one line (Alt+Z)": "Manda a capo le righe lunghe nella vista - ogni riga del codice resta una riga (Alt+Z)",
        'Cancel': 'Annulla',
        'Allow': 'Consenti',
        'No': 'No',
        'Yes': 'Sì',
        'Save': 'Salva',
        'Saved': 'Salvato',
        'Sending…': 'Invio in corso…',
        'Not connected': 'Non connesso',
        'Save on this server?': 'Salvare su questo server?',
        'The address for the AI must be https:// on the site of the page around the editor - it is not used':
            'L\'indirizzo per l\'IA deve essere https:// sul sito della pagina che contiene l\'editor - non viene usato',
        'The key from the page is not valid (16 to 512 letters, digits or ._~+/=-)':
            'La chiave della pagina non è valida (da 16 a 512 lettere, cifre o ._~+/=-)',
        'This document stays in your browser - only the document from the page is saved there':
            'Questo documento resta nel tuo browser - lì viene salvato solo il documento della pagina',
        'This drawing stays in your browser - only the drawing from the page is saved there':
            'Questo disegno resta nel tuo browser - lì viene salvato solo il disegno della pagina',
        'The page that opened the editor is closed - download the document so nothing is lost':
            'La pagina che ha aperto l\'editor è chiusa - scarica il documento per non perdere nulla',
        'The page that opened the editor is closed - download the drawing so nothing is lost':
            'La pagina che ha aperto l\'editor è chiusa - scarica il disegno per non perdere nulla',
        'The webhook from the page is not an https:// address - it is not used':
            'Il webhook della pagina non è un indirizzo https:// - non viene usato',
        'Please enter an https:// address (or http://localhost for testing)':
            'Inserisci un indirizzo https:// (o http://localhost per i test)',
        'Saved versions now go to your server': 'Le versioni salvate ora vanno al tuo server',
        'Webhook switched off': 'Webhook disattivato',
        'The webhook in the link is not an https:// address - it is not used':
            'Il webhook nel link non è un indirizzo https:// - non viene usato',
        'The webhook in the link only works together with ?src= - it is not used':
            'Il webhook nel link funziona solo insieme a ?src= - non viene usato',
        'A token in a link is not used - enter it under "Save to server"':
            'Un token in un link non viene usato - inseriscilo in «Salva sul server»',
        'Save - hand the document to the page around the editor (Ctrl+S)':
            'Salva - passa il documento alla pagina che contiene l\'editor (Ctrl+S)',
        'Save - hand the drawing to the page around the editor (Ctrl+S)':
            'Salva - passa il disegno alla pagina che contiene l\'editor (Ctrl+S)',
        'AI through a website: not connected': 'IA tramite un sito web: non connessa',
        'Browser agent (WebMCP): not offered by this browser': 'Agente del browser (WebMCP): non offerto da questo browser',
        'Browser agent (WebMCP): available, not used yet': 'Agente del browser (WebMCP): disponibile, non ancora usato',
        'AI links: cannot reach the editor inside this website - paste the AI\'s answer here':
            'Link IA: non raggiungono l\'editor dentro questo sito - incolla qui la risposta dell\'IA',
        'AI links: open the editor in a new tab': 'Link IA: aprono l\'editor in una nuova scheda',
        'AI links: go to another editor tab (the one used last)': 'Link IA: vanno in un\'altra scheda dell\'editor (l\'ultima usata)',
        'AI links: arrive in this tab': 'Link IA: arrivano in questa scheda',
        'AI in this session: nothing received yet - copy the prompt for your AI': 'IA in questa sessione: ancora nulla ricevuto - copia il prompt per la tua IA',
    },
    patterns: [
        ['^Saved on (.+) at (\\d{1,2}):(\\d{2})\\s?(AM|PM)?$', (x, host, h, m, ap) => `Salvato su ${host} alle ${formatHour(h, m, ap)}`],
        ['^Saved on (.+)$', 'Salvato su $1'],
        ['^Not saved on (.+?): no connection, or the server does not allow it \\(CORS\\)$', 'Non salvato su $1: nessuna connessione, oppure il server non lo consente (CORS)'],
        ['^Not saved on (.+?): The server answered (\\d+)(.*)$', 'Non salvato su $1: il server ha risposto $2$3'],
        ['^Not saved on (.+?): the (document|drawing) with its pictures is (\\d+) MB - at most 40 MB go in one request$', 'Non salvato su $1: con le immagini sono $3 MB - una richiesta ne contiene al massimo 40'],
        ['^"(.+)" was changed in another tab - your version here is kept as "(.+)"$', '"$1" è stato modificato in un’altra scheda - la tua versione qui viene conservata come "$2"'],
        ['^Not saved on (.+?): the server did not answer within (\\d+) seconds$', 'Non salvato su $1: il server non ha risposto entro $2 secondi'],
        ['^Not saved on (.+?): (.*)$', 'Non salvato su $1: $2'],
        ['^Saves to (.+) \\(set by the page\\)$', 'Salva su $1 (impostato dalla pagina)'],
        ['^Save - send the (document|drawing) to (.+) \\(Ctrl\\+S\\)$', (m, w, h) => `Salva - invia ${translateThing(w)} a ${h} (Ctrl+S)`],
        ['^The AI\'s new (document|drawing) is open as "(.+)" - it stays in your browser and is not saved to (.+)$',
            (m, w, n, l) => `${w === 'drawing' ? 'Il nuovo disegno' : 'Il nuovo documento'} dell'IA è aperto come «${n}» - resta nel tuo browser e non viene salvato su ${l}`],
        ['^The AI\'s result from (.+) is open - Undo takes it back$', 'Il risultato dell\'IA da $1 è aperto - Annulla annulla la modifica'],
        ['^The file could not be opened: no connection, or the server does not allow it \\(CORS\\)$', 'Impossibile aprire il file: nessuna connessione, oppure il server non lo consente (CORS)'],
        ['^The file could not be opened: only https:// addresses can be opened$', 'Impossibile aprire il file: si possono aprire solo indirizzi https://'],
        ['^The file could not be opened: the server answered (\\d+)$', 'Impossibile aprire il file: il server ha risposto $1'],
        ['^The file could not be opened: the page loaded another document meanwhile$', 'Impossibile aprire il file: nel frattempo la pagina ha caricato un altro documento'],
        ['^The file could not be opened: (.*)$', 'Impossibile aprire il file: $1'],
        ['^This link asks the editor to send the saved versions of "(.+)" to (.+) while this page is open\\. Only allow it if you trust that site\\.$',
            'Questo link chiede all\'editor di inviare le versioni salvate di «$1» a $2 finché questa pagina è aperta. Consentilo solo se ti fidi di quel sito.'],
        ['^AI in this session: a document from an AI link, just now$', 'IA in questa sessione: un documento da un link IA, proprio ora'],
        ['^AI in this session: a document from an AI link, (\\d+) min ago$', 'IA in questa sessione: un documento da un link IA, $1 min fa'],
        ['^AI in this session: a result through the page, just now$', 'IA in questa sessione: un risultato tramite la pagina, proprio ora'],
        ['^AI in this session: a result through the page, (\\d+) min ago$', 'IA in questa sessione: un risultato tramite la pagina, $1 min fa'],
        ['^AI in this session: a browser agent \\(WebMCP\\), just now$', 'IA in questa sessione: un agente del browser (WebMCP), proprio ora'],
        ['^AI in this session: a browser agent \\(WebMCP\\), (\\d+) min ago$', 'IA in questa sessione: un agente del browser (WebMCP), $1 min fa'],
        ['^AI through (.+): connected, waiting for the key$', 'IA tramite $1: connessa, in attesa della chiave'],
        ['^AI through (.+): connected$', 'IA tramite $1: connessa'],
        ['^Browser agent \\(WebMCP\\): active, last used just now$', 'Agente del browser (WebMCP): attivo, usato l\'ultima volta proprio ora'],
        ['^Browser agent \\(WebMCP\\): active, last used (\\d+) min ago$', 'Agente del browser (WebMCP): attivo, usato l\'ultima volta $1 min fa'],
        ['^Browser agent \\(WebMCP\\): available, last used just now$', 'Agente del browser (WebMCP): disponibile, usato l\'ultima volta proprio ora'],
        ['^Browser agent \\(WebMCP\\): available, last used (\\d+) min ago$', 'Agente del browser (WebMCP): disponibile, usato l\'ultima volta $1 min fa'],
    ],
};
