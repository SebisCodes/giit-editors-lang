/* German texts that all giit editors share: the links to giit.ch in the bar,
   saving on a server and inside a page (sync.js), the AI status (aistatus.js),
   the confirmation box (dialogs.js). The editor's own texts are in the German
   pack; how they are used is described in i18n.js. The same file serves every
   giit editor. */

/**
 * Writes a time of day in the 24-hour form of the language.
 * @param {string} h - the hour.
 * @param {string} m - the minutes.
 * @param {string} ap - "AM", "PM" or empty.
 * @returns {string} the text in the language.
 */
const formatHour = (h, m, ap) => `${String((+h % 12) + (ap === 'PM' ? 12 : 0) + (ap ? 0 : +h - (+h % 12))).padStart(2, '0')}:${m}`;
/**
 * Translates the text the pattern found (withArticle in the English pattern).
 * @param {string} w - the English text the pattern found.
 * @returns {string} the text in the language.
 */
const translateWithArticle = w => (w === 'drawing' ? 'die Zeichnung' : 'das Dokument');

export default {
    text: {
        "All giit editors": "Alle giit-Editoren",
        "by giit.ch": "von giit.ch",
        "Open in another editor": "In einem anderen Editor öffnen",
        "Not everything can be converted": "Nicht alles lässt sich umwandeln",
        "Open anyway": "Trotzdem öffnen",
        "Pictures and other files of the document stay here: add them again in the other editor": "Bilder und andere Dateien des Dokuments bleiben hier: im anderen Editor neu hinzufügen",
        "The document is too long for a link - export it and open the file in the other editor": "Das Dokument ist zu lang für einen Link - exportiere es und öffne die Datei im anderen Editor",
        "Scripts and styles": "Skripte und Stile",
        "Form fields": "Formularfelder",
        "Footnotes, labels and references": "Fussnoten, Labels und Verweise",
        "LaTeX commands and environments without an equivalent": "LaTeX-Befehle und -Umgebungen ohne Entsprechung",
        "Document class, packages and page settings": "Dokumentklasse, Pakete und Seiteneinstellungen",
        "The table of contents": "Das Inhaltsverzeichnis",
        "Typst functions without an equivalent": "Typst-Funktionen ohne Entsprechung",
        "Formulas are copied as written: check them": "Formeln werden wörtlich übernommen: bitte prüfen",
        "Formulas become plain code": "Formeln werden zu einfachem Code",
        "Links with an unsafe address": "Links mit unsicherer Adresse",
        "Comments": "Kommentare",
        "Empty values (null): TOML has no null": "Leere Werte (null): TOML kennt kein null",
        "The data is not a table: it goes under the key \"value\"": "Die Daten sind keine Tabelle: Sie kommen unter den Schlüssel «value»",
        "Keys that are not valid XML names are changed": "Schlüssel, die keine gültigen XML-Namen sind, werden geändert",
        "Only the first list goes into the table": "Nur die erste Liste kommt in die Tabelle",
        "Nested values go into one cell as JSON": "Verschachtelte Werte kommen als JSON in eine Zelle",
        "The picture could not be stored in this browser (storage full or blocked) - it is kept only until the page is closed: download the document to keep it": "Das Bild liess sich in diesem Browser nicht speichern (Speicher voll oder gesperrt) - es bleibt nur, bis die Seite geschlossen wird: lade das Dokument herunter, um es zu behalten",
        "Column names that occur twice (numbered)": "Spaltennamen, die zweimal vorkommen (nummeriert)",
        "Fields beyond the header (named Column N)": "Felder über die Kopfzeile hinaus (als Column N benannt)",
        "The AI's result could not be opened - your browser's storage may be full": "Das Ergebnis der KI liess sich nicht öffnen - der Speicher deines Browsers ist vielleicht voll",
        "The AI's result could not be opened": "Das Ergebnis der KI liess sich nicht öffnen",
        "Types of values: SHLS holds every value as text": "Datentypen: SHLS speichert jeden Wert als Text",
        "This data has no list of records, so it does not make a table": "Diese Daten enthalten keine Liste von Datensätzen und ergeben deshalb keine Tabelle",
        "The XML cannot be read - fix the problem above the code first": "Das XML lässt sich nicht lesen - behebe zuerst das Problem über dem Code",
        "It could not be converted": "Es liess sich nicht umwandeln",
        "Content from a third party, not checked by giit.ch": "Inhalt von Dritten, von giit.ch nicht geprüft",
        // Wrapping long lines in the code view (wrap.js)
        "Wrap": "Umbrechen",
        "Wrap long lines in the view - each line of the code stays one line (Alt+Z)": "Lange Zeilen in der Ansicht umbrechen - jede Zeile des Codes bleibt eine Zeile (Alt+Z)",
        'Cancel': 'Abbrechen',
        'Allow': 'Erlauben',
        'No': 'Nein',
        'Yes': 'Ja',
        'Save': 'Speichern',
        'Saved': 'Gespeichert',
        'Sending…': 'Wird gesendet …',
        'Not connected': 'Nicht verbunden',
        'Save on this server?': 'Auf diesem Server speichern?',
        'The address for the AI must be https:// on the site of the page around the editor - it is not used':
            'Die KI-Adresse muss mit https:// beginnen und zur Website gehören, die den Editor einbettet - sie wird nicht verwendet',
        'The key from the page is not valid (16 to 512 letters, digits or ._~+/=-)':
            'Der Schlüssel der Seite ist ungültig (16 bis 512 Buchstaben, Ziffern oder ._~+/=-)',
        'This document stays in your browser - only the document from the page is saved there':
            'Dieses Dokument bleibt in deinem Browser - dort gespeichert wird nur das Dokument der Seite',
        'This drawing stays in your browser - only the drawing from the page is saved there':
            'Diese Zeichnung bleibt in deinem Browser - dort gespeichert wird nur die Zeichnung der Seite',
        'The page that opened the editor is closed - download the document so nothing is lost':
            'Die Seite, die den Editor geöffnet hat, ist geschlossen - lade das Dokument herunter, damit nichts verloren geht',
        'The page that opened the editor is closed - download the drawing so nothing is lost':
            'Die Seite, die den Editor geöffnet hat, ist geschlossen - lade die Zeichnung herunter, damit nichts verloren geht',
        'The webhook from the page is not an https:// address - it is not used':
            'Der Webhook der Seite ist keine https://-Adresse - er wird nicht verwendet',
        'Please enter an https:// address (or http://localhost for testing)':
            'Bitte eine https://-Adresse eingeben (oder http://localhost zum Testen)',
        'Saved versions now go to your server': 'Gespeicherte Fassungen gehen jetzt an deinen Server',
        'Webhook switched off': 'Webhook ausgeschaltet',
        'The webhook in the link is not an https:// address - it is not used':
            'Der Webhook im Link ist keine https://-Adresse - er wird nicht verwendet',
        'The webhook in the link only works together with ?src= - it is not used':
            'Der Webhook im Link funktioniert nur zusammen mit ?src= - er wird nicht verwendet',
        'A token in a link is not used - enter it under "Save to server"':
            'Ein Token im Link wird nicht verwendet - trage ihn unter «Auf Server speichern» ein',
        'Save - hand the document to the page around the editor (Ctrl+S)':
            'Speichern - das Dokument an die einbettende Seite übergeben (Ctrl+S)',
        'Save - hand the drawing to the page around the editor (Ctrl+S)':
            'Speichern - die Zeichnung an die einbettende Seite übergeben (Ctrl+S)',
        'AI through a website: not connected': 'KI über eine Website: nicht verbunden',
        'Browser agent (WebMCP): not offered by this browser': 'Browser-Agent (WebMCP): von diesem Browser nicht angeboten',
        'Browser agent (WebMCP): available, not used yet': 'Browser-Agent (WebMCP): verfügbar, noch nicht benutzt',
        'AI links: cannot reach the editor inside this website - paste the AI\'s answer here':
            'KI-Links: erreichen den Editor in dieser Website nicht - die Antwort der KI hier einfügen',
        'AI links: open the editor in a new tab': 'KI-Links: öffnen den Editor in einem neuen Tab',
        'AI links: go to another editor tab (the one used last)': 'KI-Links: gehen in einen anderen Editor-Tab (den zuletzt benutzten)',
        'AI links: arrive in this tab': 'KI-Links: kommen in diesem Tab an',
        'AI in this session: nothing received yet - copy the prompt for your AI': 'KI in dieser Sitzung: noch nichts erhalten - kopiere den Prompt für deine KI',
    },
    patterns: [
        ['^Saved on (.+) at (\\d{1,2}):(\\d{2})\\s?(AM|PM)?$', (x, host, h, m, ap) => `Gespeichert auf ${host} um ${formatHour(h, m, ap)}`],
        ['^Saved on (.+)$', 'Gespeichert auf $1'],
        ['^Not saved on (.+?): no connection, or the server does not allow it \\(CORS\\)$', 'Nicht gespeichert auf $1: keine Verbindung oder der Server erlaubt es nicht (CORS)'],
        ['^Not saved on (.+?): The server answered (\\d+)(.*)$', 'Nicht gespeichert auf $1: Der Server antwortete $2$3'],
        ['^Not saved on (.+?): the (document|drawing) with its pictures is (\\d+) MB - at most 40 MB go in one request$', 'Nicht gespeichert auf $1: mit den Bildern sind es $3 MB - eine Anfrage kann höchstens 40 MB enthalten'],
        ['^"(.+)" was changed in another tab - your version here is kept as "(.+)"$', '«$1» wurde in einem anderen Tab geändert - deine Fassung hier bleibt als «$2» erhalten'],
        ['^Not saved on (.+?): the server did not answer within (\\d+) seconds$', 'Nicht gespeichert auf $1: der Server hat nicht innert $2 Sekunden geantwortet'],
        ['^Not saved on (.+?): (.*)$', 'Nicht gespeichert auf $1: $2'],
        ['^Saves to (.+) \\(set by the page\\)$', 'Speichert auf $1 (von der Seite festgelegt)'],
        ['^Save - send the (document|drawing) to (.+) \\(Ctrl\\+S\\)$', (m, w, h) => `Speichern - ${translateWithArticle(w)} an ${h} senden (Ctrl+S)`],
        ['^The AI\'s new (document|drawing) is open as "(.+)" - it stays in your browser and is not saved to (.+)$',
            (m, w, n, l) => `${w === 'drawing' ? 'Die neue Zeichnung' : 'Das neue Dokument'} der KI ist als «${n}» geöffnet - ${w === 'drawing' ? 'sie' : 'es'} bleibt in deinem Browser und wird nicht bei ${l} gespeichert`],
        ['^The AI\'s result from (.+) is open - Undo takes it back$', 'Das Ergebnis der KI von $1 ist geöffnet - «Rückgängig» nimmt es zurück'],
        ['^The file could not be opened: no connection, or the server does not allow it \\(CORS\\)$', 'Die Datei liess sich nicht öffnen: keine Verbindung oder der Server erlaubt es nicht (CORS)'],
        ['^The file could not be opened: only https:// addresses can be opened$', 'Die Datei liess sich nicht öffnen: nur https://-Adressen lassen sich öffnen'],
        ['^The file could not be opened: the server answered (\\d+)$', 'Die Datei liess sich nicht öffnen: der Server antwortete $1'],
        ['^The file could not be opened: the page loaded another document meanwhile$', 'Die Datei liess sich nicht öffnen: die Seite hat inzwischen ein anderes Dokument geladen'],
        ['^The file could not be opened: (.*)$', 'Die Datei liess sich nicht öffnen: $1'],
        ['^This link asks the editor to send the saved versions of "(.+)" to (.+) while this page is open\\. Only allow it if you trust that site\\.$',
            'Dieser Link bittet den Editor, die gespeicherten Fassungen von «$1» an $2 zu senden, solange diese Seite offen ist. Nur erlauben, wenn du dieser Website vertraust.'],
        ['^AI in this session: a document from an AI link, just now$', 'KI in dieser Sitzung: ein Dokument über einen KI-Link, gerade eben'],
        ['^AI in this session: a document from an AI link, (\\d+) min ago$', 'KI in dieser Sitzung: ein Dokument über einen KI-Link, vor $1 Min.'],
        ['^AI in this session: a result through the page, just now$', 'KI in dieser Sitzung: ein Ergebnis über die Seite, gerade eben'],
        ['^AI in this session: a result through the page, (\\d+) min ago$', 'KI in dieser Sitzung: ein Ergebnis über die Seite, vor $1 Min.'],
        ['^AI in this session: a browser agent \\(WebMCP\\), just now$', 'KI in dieser Sitzung: ein Browser-Agent (WebMCP), gerade eben'],
        ['^AI in this session: a browser agent \\(WebMCP\\), (\\d+) min ago$', 'KI in dieser Sitzung: ein Browser-Agent (WebMCP), vor $1 Min.'],
        ['^AI through (.+): connected, waiting for the key$', 'KI über $1: verbunden, wartet auf den Schlüssel'],
        ['^AI through (.+): connected$', 'KI über $1: verbunden'],
        ['^Browser agent \\(WebMCP\\): active, last used just now$', 'Browser-Agent (WebMCP): aktiv, zuletzt gerade eben benutzt'],
        ['^Browser agent \\(WebMCP\\): active, last used (\\d+) min ago$', 'Browser-Agent (WebMCP): aktiv, zuletzt vor $1 Min. benutzt'],
        ['^Browser agent \\(WebMCP\\): available, last used just now$', 'Browser-Agent (WebMCP): verfügbar, zuletzt gerade eben benutzt'],
        ['^Browser agent \\(WebMCP\\): available, last used (\\d+) min ago$', 'Browser-Agent (WebMCP): verfügbar, zuletzt vor $1 Min. benutzt'],
    ],
};
