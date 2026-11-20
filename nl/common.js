/* Dutch texts that all giit editors share: the links to giit.ch in the bar,
   saving on a server and inside a page (sync.js), the AI status (aistatus.js),
   the confirmation box (dialogs.js). The editor's own texts are in the Dutch
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
const translateWithArticle = w => (w === 'drawing' ? 'de tekening' : 'het document');

export default {
    text: {
        "All giit editors": "Alle giit-editors",
        "by giit.ch": "door giit.ch",
        "Open in another editor": "Openen in een andere editor",
        "Not everything can be converted": "Niet alles kan worden omgezet",
        "Open anyway": "Toch openen",
        "Pictures and other files of the document stay here: add them again in the other editor": "Afbeeldingen en andere bestanden van het document blijven hier: voeg ze opnieuw toe in de andere editor",
        "The document is too long for a link - export it and open the file in the other editor": "Het document is te lang voor een link - exporteer het en open het bestand in de andere editor",
        "Scripts and styles": "Scripts en stijlen",
        "Form fields": "Formuliervelden",
        "Footnotes, labels and references": "Voetnoten, labels en verwijzingen",
        "LaTeX commands and environments without an equivalent": "LaTeX-commando's en -omgevingen zonder equivalent",
        "Document class, packages and page settings": "Documentklasse, pakketten en pagina-instellingen",
        "The table of contents": "De inhoudsopgave",
        "Typst functions without an equivalent": "Typst-functies zonder equivalent",
        "Formulas are copied as written: check them": "Formules worden letterlijk overgenomen: controleer ze",
        "Formulas become plain code": "Formules worden gewone code",
        "Links with an unsafe address": "Links met een onveilig adres",
        "Comments": "Commentaar",
        "Empty values (null): TOML has no null": "Lege waarden (null): TOML heeft geen null",
        "The data is not a table: it goes under the key \"value\"": "De gegevens zijn geen tabel: ze komen onder de sleutel \"value\"",
        "Keys that are not valid XML names are changed": "Sleutels die geen geldige XML-namen zijn, worden gewijzigd",
        "Only the first list goes into the table": "Alleen de eerste lijst gaat in de tabel",
        "Nested values go into one cell as JSON": "Geneste waarden komen als JSON in één cel",
        "The picture could not be stored in this browser (storage full or blocked) - it is kept only until the page is closed: download the document to keep it": "De afbeelding kon niet in deze browser worden opgeslagen (opslag vol of geblokkeerd) - ze blijft alleen tot de pagina wordt gesloten: download het document om haar te bewaren",
        "Column names that occur twice (numbered)": "Kolomnamen die twee keer voorkomen (genummerd)",
        "Fields beyond the header (named Column N)": "Velden voorbij de kop (Column N genoemd)",
        "The AI's result could not be opened - your browser's storage may be full": "Het resultaat van de AI kon niet worden geopend - de opslag van je browser is misschien vol",
        "The AI's result could not be opened": "Het resultaat van de AI kon niet worden geopend",
        "Types of values: SHLS holds every value as text": "Waardetypen: SHLS bewaart elke waarde als tekst",
        "This data has no list of records, so it does not make a table": "Deze gegevens bevatten geen lijst met records en vormen dus geen tabel",
        "The XML cannot be read - fix the problem above the code first": "De XML is niet leesbaar - los eerst het probleem boven de code op",
        "It could not be converted": "Het kon niet worden omgezet",
        "Content from a third party, not checked by giit.ch": "Inhoud van derden, niet gecontroleerd door giit.ch",
        // Wrapping long lines in the code view (wrap.js)
        "Wrap": "Afbreken",
        "Wrap long lines in the view - each line of the code stays one line (Alt+Z)": "Lange regels in de weergave afbreken - elke regel van de code blijft één regel (Alt+Z)",
        'Cancel': 'Annuleren',
        'Allow': 'Toestaan',
        'No': 'Nee',
        'Yes': 'Ja',
        'Save': 'Opslaan',
        'Saved': 'Opgeslagen',
        'Sending…': 'Verzenden…',
        'Not connected': 'Niet verbonden',
        'Save on this server?': 'Opslaan op deze server?',
        'The address for the AI must be https:// on the site of the page around the editor - it is not used':
            'Het adres voor de AI moet een https://-adres zijn op de website van de pagina rond de editor - het wordt niet gebruikt',
        'The key from the page is not valid (16 to 512 letters, digits or ._~+/=-)':
            'De sleutel van de pagina is ongeldig (16 tot 512 letters, cijfers of ._~+/=-)',
        'This document stays in your browser - only the document from the page is saved there':
            'Dit document blijft in je browser - daar wordt alleen het document van de pagina opgeslagen',
        'This drawing stays in your browser - only the drawing from the page is saved there':
            'Deze tekening blijft in je browser - daar wordt alleen de tekening van de pagina opgeslagen',
        'The page that opened the editor is closed - download the document so nothing is lost':
            'De pagina die de editor heeft geopend, is gesloten - download het document zodat er niets verloren gaat',
        'The page that opened the editor is closed - download the drawing so nothing is lost':
            'De pagina die de editor heeft geopend, is gesloten - download de tekening zodat er niets verloren gaat',
        'The webhook from the page is not an https:// address - it is not used':
            'De webhook van de pagina is geen https://-adres - hij wordt niet gebruikt',
        'Please enter an https:// address (or http://localhost for testing)':
            'Voer een https://-adres in (of http://localhost om te testen)',
        'Saved versions now go to your server': 'Opgeslagen versies gaan nu naar je server',
        'Webhook switched off': 'Webhook uitgeschakeld',
        'The webhook in the link is not an https:// address - it is not used':
            'De webhook in de link is geen https://-adres - hij wordt niet gebruikt',
        'The webhook in the link only works together with ?src= - it is not used':
            'De webhook in de link werkt alleen samen met ?src= - hij wordt niet gebruikt',
        'A token in a link is not used - enter it under "Save to server"':
            'Een token in een link wordt niet gebruikt - vul het in bij "Opslaan op server"',
        'Save - hand the document to the page around the editor (Ctrl+S)':
            'Opslaan - het document doorgeven aan de pagina rond de editor (Ctrl+S)',
        'Save - hand the drawing to the page around the editor (Ctrl+S)':
            'Opslaan - de tekening doorgeven aan de pagina rond de editor (Ctrl+S)',
        'AI through a website: not connected': 'AI via een website: niet verbonden',
        'Browser agent (WebMCP): not offered by this browser': 'Browseragent (WebMCP): niet aangeboden door deze browser',
        'Browser agent (WebMCP): available, not used yet': 'Browseragent (WebMCP): beschikbaar, nog niet gebruikt',
        'AI links: cannot reach the editor inside this website - paste the AI\'s answer here':
            'AI-links: bereiken de editor in deze website niet - plak het antwoord van de AI hier',
        'AI links: open the editor in a new tab': 'AI-links: openen de editor in een nieuw tabblad',
        'AI links: go to another editor tab (the one used last)': 'AI-links: gaan naar een ander editortabblad (het laatst gebruikte)',
        'AI links: arrive in this tab': 'AI-links: komen aan in dit tabblad',
        'AI in this session: nothing received yet - copy the prompt for your AI': 'AI in deze sessie: nog niets ontvangen - kopieer de prompt voor je AI',
    },
    patterns: [
        ['^Saved on (.+) at (\\d{1,2}):(\\d{2})\\s?(AM|PM)?$', (x, host, h, m, ap) => `Opgeslagen op ${host} om ${formatHour(h, m, ap)}`],
        ['^Saved on (.+)$', 'Opgeslagen op $1'],
        ['^Not saved on (.+?): no connection, or the server does not allow it \\(CORS\\)$', 'Niet opgeslagen op $1: geen verbinding, of de server staat het niet toe (CORS)'],
        ['^Not saved on (.+?): The server answered (\\d+)(.*)$', 'Niet opgeslagen op $1: de server antwoordde $2$3'],
        ['^Not saved on (.+?): the (document|drawing) with its pictures is (\\d+) MB - at most 40 MB go in one request$', 'Niet opgeslagen op $1: met de afbeeldingen is het $3 MB - in één verzoek past hoogstens 40 MB'],
        ['^"(.+)" was changed in another tab - your version here is kept as "(.+)"$', '"$1" is in een ander tabblad gewijzigd - je versie hier blijft bewaard als "$2"'],
        ['^Not saved on (.+?): the server did not answer within (\\d+) seconds$', 'Niet opgeslagen op $1: de server antwoordde niet binnen $2 seconden'],
        ['^Not saved on (.+?): (.*)$', 'Niet opgeslagen op $1: $2'],
        ['^Saves to (.+) \\(set by the page\\)$', 'Slaat op op $1 (ingesteld door de pagina)'],
        ['^Save - send the (document|drawing) to (.+) \\(Ctrl\\+S\\)$', (m, w, h) => `Opslaan - ${translateWithArticle(w)} naar ${h} sturen (Ctrl+S)`],
        ['^The AI\'s new (document|drawing) is open as "(.+)" - it stays in your browser and is not saved to (.+)$',
            (m, w, n, l) => `${w === 'drawing' ? 'De nieuwe tekening' : 'Het nieuwe document'} van de AI is geopend als "${n}" - ${w === 'drawing' ? 'ze' : 'het'} blijft in je browser en wordt niet opgeslagen bij ${l}`],
        ['^The AI\'s result from (.+) is open - Undo takes it back$', 'Het resultaat van de AI van $1 is geopend - Ongedaan maken draait het terug'],
        ['^The file could not be opened: no connection, or the server does not allow it \\(CORS\\)$', 'Het bestand kon niet worden geopend: geen verbinding, of de server staat het niet toe (CORS)'],
        ['^The file could not be opened: only https:// addresses can be opened$', 'Het bestand kon niet worden geopend: alleen https://-adressen kunnen worden geopend'],
        ['^The file could not be opened: the server answered (\\d+)$', 'Het bestand kon niet worden geopend: de server antwoordde $1'],
        ['^The file could not be opened: the page loaded another document meanwhile$', 'Het bestand kon niet worden geopend: de pagina heeft intussen een ander document geladen'],
        ['^The file could not be opened: (.*)$', 'Het bestand kon niet worden geopend: $1'],
        ['^This link asks the editor to send the saved versions of "(.+)" to (.+) while this page is open\\. Only allow it if you trust that site\\.$',
            'Deze link vraagt de editor om de opgeslagen versies van "$1" naar $2 te sturen zolang deze pagina open is. Sta het alleen toe als je die website vertrouwt.'],
        ['^AI in this session: a document from an AI link, just now$', 'AI in deze sessie: een document via een AI-link, zojuist'],
        ['^AI in this session: a document from an AI link, (\\d+) min ago$', 'AI in deze sessie: een document via een AI-link, $1 min. geleden'],
        ['^AI in this session: a result through the page, just now$', 'AI in deze sessie: een resultaat via de pagina, zojuist'],
        ['^AI in this session: a result through the page, (\\d+) min ago$', 'AI in deze sessie: een resultaat via de pagina, $1 min. geleden'],
        ['^AI in this session: a browser agent \\(WebMCP\\), just now$', 'AI in deze sessie: een browseragent (WebMCP), zojuist'],
        ['^AI in this session: a browser agent \\(WebMCP\\), (\\d+) min ago$', 'AI in deze sessie: een browseragent (WebMCP), $1 min. geleden'],
        ['^AI through (.+): connected, waiting for the key$', 'AI via $1: verbonden, wacht op de sleutel'],
        ['^AI through (.+): connected$', 'AI via $1: verbonden'],
        ['^Browser agent \\(WebMCP\\): active, last used just now$', 'Browseragent (WebMCP): actief, zojuist voor het laatst gebruikt'],
        ['^Browser agent \\(WebMCP\\): active, last used (\\d+) min ago$', 'Browseragent (WebMCP): actief, $1 min. geleden voor het laatst gebruikt'],
        ['^Browser agent \\(WebMCP\\): available, last used just now$', 'Browseragent (WebMCP): beschikbaar, zojuist voor het laatst gebruikt'],
        ['^Browser agent \\(WebMCP\\): available, last used (\\d+) min ago$', 'Browseragent (WebMCP): beschikbaar, $1 min. geleden voor het laatst gebruikt'],
    ],
};
