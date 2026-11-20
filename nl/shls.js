/* Dutch texts of the SHLS editor: the bar, the work area (code, records,
   record, insert, convert, outline), its dialogs and messages, and the
   problems found in the code. What all editors share is in
   common.js; how the dictionaries are used is described in
   i18n.js. Names of documents, sections, keys and values stay as they are:
   the patterns copy them into the Dutch text. */

import { formatTime, formatSize, formatThousands, getPlural } from './format.js';

/* "1,234" -> "1.234" (Dutch thousands separator) */

/* "1.5 KB" -> "1,5 KB", "1,234 bytes" -> "1.234 bytes" (Dutch separators) */

/* When a document was last changed (files.js): "just now", "5 min ago", "Oct 25, 2026" … */

/**
 * Translates the text the pattern found (recs in the English pattern).
 * @param {string} k - the English text the pattern found.
 * @returns {string} the text in the language.
 */
const translateRecords = k => getPlural(k, 'record', 'records');

export default {
    text: {
        "Read back from SHLS, the data is not the same (for example records whose keys are in another order than in the first record) - check the result.": "Teruggelezen uit SHLS zijn de gegevens niet hetzelfde (bijvoorbeeld records waarvan de sleutels in een andere volgorde staan dan in het eerste record) - controleer het resultaat.",
        /* ---------- Top bar ---------- */
        'SHLS Editor - home': 'SHLS-editor - startpagina',
        'SHLS Editor': 'SHLS-editor',
        'File': 'Bestand',
        'My documents (Ctrl+O)': 'Mijn documenten (Ctrl+O)',
        'My documents': 'Mijn documenten',
        'New document, or start this one over': 'Nieuw document, of dit opnieuw beginnen',
        'New': 'Nieuw',
        'New blank document': 'Nieuw leeg document',
        'An empty document - your other documents stay as they are': 'Een leeg document - je andere documenten blijven zoals ze zijn',
        'Empty section': 'Lege sectie',
        'One section with two keys and one record to fill in': 'Eén sectie met twee sleutels en één record om in te vullen',
        'Products and companies': 'Producten en bedrijven',
        'The first README example: records right after each key block': 'Het eerste README-voorbeeld: records direct na elk sleutelblok',
        'Key blocks first': 'Sleutelblokken eerst',
        'The second README example: the records follow under the section name again': 'Het tweede README-voorbeeld: de records volgen opnieuw onder de sectienaam',
        'Companies, departments and employees, nested three levels': 'Bedrijven, afdelingen en medewerkers, drie niveaus genest',
        'The same data with the key blocks first and fewer blank lines': 'Dezelfde gegevens met de sleutelblokken eerst en minder lege regels',
        'Start this document over': 'Dit document opnieuw beginnen',
        'Empties the document - "Undo" brings it back': 'Maakt het document leeg - "Ongedaan maken" haalt het terug',
        'Open an SHLS file from your computer (JSON, YAML, CSV and JSON Lines files are converted; you can also drag a file into the window)':
            'Een SHLS-bestand van je computer openen (JSON-, YAML-, CSV- en JSON Lines-bestanden worden omgezet; je kunt een bestand ook in het venster slepen)',
        'Open file…': 'Bestand openen…',
        'Undo the last change (Ctrl+Z)': 'De laatste wijziging ongedaan maken (Ctrl+Z)',
        'Undo': 'Ongedaan maken',
        'Redo the change you just undid (Ctrl+Y)': 'De zojuist ongedaan gemaakte wijziging opnieuw doen (Ctrl+Y)',
        'Redo': 'Opnieuw',
        'Output': 'Uitvoer',
        'Color theme': 'Kleurthema',
        'Light theme': 'Licht thema',
        'Dark theme': 'Donker thema',
        'Same as your system setting': 'Zoals je systeeminstelling',
        'Automatic theme (system setting)': 'Automatisch thema (systeeminstelling)',
        'Let any AI write in this editor': 'Laat elke AI in deze editor schrijven',
        'AI Assistant': 'AI-assistent',
        'Save to your own server and embed the editor in your website': 'Opslaan op je eigen server en de editor in je website insluiten',
        'Save to server': 'Opslaan op server',
        'How it works and keyboard shortcuts (?)': 'Hoe het werkt en sneltoetsen (?)',
        'Help': 'Help',
        'Save the document as a .shls file (Ctrl+S)': 'Het document opslaan als .shls-bestand (Ctrl+S)',
        'Download .shls': '.shls downloaden',
        'JSON, YAML, CSV and more (Ctrl+E)': 'JSON, YAML, CSV en meer (Ctrl+E)',
        'Export…': 'Exporteren…',

        /* ---------- Views and work area ---------- */
        'View': 'Weergave',
        'Edit': 'Bewerken',
        'Selection': 'Selectie',
        'Records': 'Records',
        'Record': 'Record',
        'SHLS code': 'SHLS-code',
        'Copy the code to the clipboard': 'De code naar het klembord kopiëren',
        'Copy code': 'Code kopiëren',
        'Copy': 'Kopiëren',
        'Lay the document out as the reference SHLSEncoder does: all key blocks first, then the records': 'Het document indelen zoals de referentie-SHLSEncoder het doet: eerst alle sleutelblokken, dan de records',
        'Tidy up': 'Opschonen',
        'Drag to change the width of the code area': 'Sleep om de breedte van het codevak te wijzigen',
        'Drag to change the width': 'Sleep om de breedte te wijzigen',
        'Unfold everything': 'Alles uitvouwen',
        'Fold the key blocks and records': 'De sleutelblokken en records samenvouwen',
        'Add: a record after the selected record (or at the end of the section), a key after the selected key': 'Toevoegen: een record na het geselecteerde record (of aan het einde van de sectie), een sleutel na de geselecteerde sleutel',
        'Add': 'Toevoegen',
        'Duplicate the selected record or key': 'Het geselecteerde record of de geselecteerde sleutel dupliceren',
        'Duplicate': 'Dupliceren',
        'Move the selected record or key up (Alt+Up)': 'Het geselecteerde record of de sleutel omhoog verplaatsen (Alt+Up)',
        'Move up': 'Omhoog',
        'Move the selected record or key down (Alt+Down)': 'Het geselecteerde record of de sleutel omlaag verplaatsen (Alt+Down)',
        'Move down': 'Omlaag',
        'Remove the selected record, key or section (Delete)': 'Het geselecteerde record, de sleutel of de sectie verwijderen (Delete)',
        'Remove': 'Verwijderen',
        'Search keys and values': 'Sleutels en waarden zoeken',
        'Previous match (Shift+Enter)': 'Vorige treffer (Shift+Enter)',
        'Previous match': 'Vorige treffer',
        'Next match (Enter)': 'Volgende treffer (Enter)',
        'Next match': 'Volgende treffer',
        'Copy the path of the selection': 'Het pad van de selectie kopiëren',
        'Copy path': 'Pad kopiëren',
        'Nothing selected': 'Niets geselecteerd',
        'Side panel': 'Zijpaneel',
        'The selected record, value or key': 'Het geselecteerde record, de waarde of de sleutel',
        'New records, keys and sections, and pieces of code': 'Nieuwe records, sleutels en secties, en stukken code',
        'Insert': 'Invoegen',
        'Tokens, and the document in other formats': 'Tokens, en het document in andere formaten',
        'Convert': 'Omzetten',
        'The sections of the document': 'De secties van het document',
        'Outline': 'Overzicht',
        'Open it here': 'Hier openen',
        'Drop the file here': 'Zet het bestand hier neer',
        'Hide': 'Verbergen',
        'Show': 'Tonen',

        /* ---------- Records view ---------- */
        'Keys': 'Sleutels',
        'the template of each record': 'het sjabloon van elk record',
        'Click to rename the section': 'Klik om de naam van de sectie te wijzigen',
        'Click to rename the key - only the key block changes': 'Klik om de naam van de sleutel te wijzigen - alleen het sleutelblok verandert',
        'Click to change the value': 'Klik om de waarde te wijzigen',
        'Value': 'Waarde',
        'Key': 'Sleutel',
        'Section name': 'Sectienaam',
        'The code cannot be read - see the problem above the code.': 'De code kan niet worden gelezen - zie het probleem boven de code.',
        'No sections yet - write a section name, its keys (indented) and, after one blank line, the records. Or choose a template under "New".':
            'Nog geen secties - schrijf een sectienaam, de sleutels (ingesprongen) en, na één lege regel, de records. Of kies een sjabloon onder "Nieuw".',

        /* ---------- Record tab ---------- */
        'Click a section, a key or a record in the middle.': 'Klik in het midden op een sectie, een sleutel of een record.',
        'The document has no sections yet.': 'Het document heeft nog geen secties.',
        'The document has no sections yet': 'Het document heeft nog geen secties',
        'Path': 'Pad',
        'Section': 'Sectie',
        'Add a record': 'Record toevoegen',
        'Add a key': 'Sleutel toevoegen',
        'Remove the section': 'Sectie verwijderen',
        'Add a key after it': 'Sleutel erna toevoegen',
        'Add a record after it': 'Record erna toevoegen',
        'Renaming a key changes only the key block. Adding, moving or removing a key changes every record of the section.':
            'Een sleutel hernoemen wijzigt alleen het sleutelblok. Een sleutel toevoegen, verplaatsen of verwijderen wijzigt elk record van de sectie.',
        'Apply': 'Toepassen',

        /* ---------- Insert tab ---------- */
        'Add to the selection': 'Aan de selectie toevoegen',
        'A record after the selected record (or at the end of the section), a key after the selected key - every record gets a value "-" for it. One step for Undo.':
            'Een record na het geselecteerde record (of aan het einde van de sectie), een sleutel na de geselecteerde sleutel - elk record krijgt er een waarde "-" voor. Eén stap voor Ongedaan maken.',
        'A new record with "-" for each value': 'Een nieuw record met "-" voor elke waarde',
        'A new key in the key block; every record gets "-"': 'Een nieuwe sleutel in het sleutelblok; elk record krijgt "-"',
        'A copy of the selected record or key': 'Een kopie van het geselecteerde record of de geselecteerde sleutel',
        'A new section at the end, with two keys and one record': 'Een nieuwe sectie aan het einde, met twee sleutels en één record',
        'At the cursor in the code': 'Bij de cursor in de code',
        'A section name, its key block, a blank line and one record': 'Een sectienaam, het sleutelblok, een lege regel en één record',
        'The placeholder for the line of a nested list': 'De plaatshouder voor de regel van een geneste lijst',
        '- (no value)': '- (geen waarde)',
        'SHLS has no empty values: a dash stands for none': 'SHLS kent geen lege waarden: een streepje staat voor geen waarde',
        'Today\'s date': 'Datum van vandaag',
        'The date as YYYY-MM-DD': 'De datum als JJJJ-MM-DD',

        /* ---------- Convert tab ---------- */
        'JSON on one line': 'JSON op één regel',
        'This document': 'Dit document',
        'Writes the document anew as the reference SHLSEncoder does: all key blocks first, then the records of each section':
            'Schrijft het document opnieuw zoals de referentie-SHLSEncoder het doet: eerst alle sleutelblokken, dan de records van elke sectie',
        'Write as SHLSEncoder does': 'Schrijven zoals SHLSEncoder',
        'Convert to': 'Omzetten naar',
        'JSON (as SHLSDecoder reads it)': 'JSON (zoals SHLSDecoder het leest)',
        'CSV (one section)': 'CSV (één sectie)',
        'JSON Lines (one section)': 'JSON Lines (één sectie)',
        'The records as plain text': 'De records als platte tekst',
        'Result': 'Resultaat',
        'Download': 'Downloaden',
        'Opens the result as a new document in the JSON Editor (in a new tab)': 'Opent het resultaat als nieuw document in de JSON-editor (in een nieuw tabblad)',
        'Open in the JSON Editor': 'Openen in de JSON-editor',
        'Exactly the data the reference SHLSDecoder reads: every value is a string.': 'Precies de gegevens die de referentie-SHLSDecoder leest: elke waarde is een tekst.',
        'The code cannot be read as SHLS - fix the problem above the code first': 'De code kan niet als SHLS worden gelezen - herstel eerst het probleem boven de code',
        'Write it anyway?': 'Toch schrijven?',
        'Read back, the encoder\'s text gives different data than this document (SHLSEncoder cannot write every structure). "Undo" brings the document back.':
            'Teruggelezen geeft de tekst van de encoder andere gegevens dan dit document (SHLSEncoder kan niet elke structuur schrijven). "Ongedaan maken" haalt het document terug.',
        'Write it': 'Schrijven',
        'The document is written as SHLSEncoder does already': 'Het document is al geschreven zoals SHLSEncoder het doet',
        'Written as SHLSEncoder does': 'Geschreven zoals SHLSEncoder het doet',

        /* ---------- Outline tab ---------- */
        'The sections of the document. Click one to go there.': 'De secties van het document. Klik op een sectie om ernaartoe te gaan.',

        /* ---------- Export ---------- */
        'Close': 'Sluiten',
        'File name': 'Bestandsnaam',
        'SHLS file as it is (.shls)': 'SHLS-bestand zoals het is (.shls)',
        'JSON, as SHLSDecoder reads it (.json)': 'JSON, zoals SHLSDecoder het leest (.json)',
        'YAML file (.yaml)': 'YAML-bestand (.yaml)',
        'CSV table of the selected section (.csv)': 'CSV-tabel van de geselecteerde sectie (.csv)',
        'The records as plain text (.txt)': 'De records als platte tekst (.txt)',
        'Download every format at once': 'Elk formaat in één keer downloaden',
        'All formats (ZIP)': 'Alle formaten (ZIP)',

        /* ---------- My documents ---------- */
        'Search by name': 'Zoeken op naam',
        'Search your documents': 'Je documenten doorzoeken',
        'Open a file from your computer as a new document': 'Een bestand van je computer openen als nieuw document',
        'New document': 'Nieuw document',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Klik op een document om het te openen. Ze worden alleen in deze browser bewaard - er wordt niets geüpload. Als je de sitegegevens van de browser wist, verdwijnen ze, dus download de documenten die je wilt bewaren.',
        'Download every document as a .shls file in one ZIP': 'Elk document als .shls-bestand in één ZIP downloaden',
        'Download all (ZIP)': 'Alles downloaden (ZIP)',
        'Rename': 'Naam wijzigen',
        'Download as .shls': 'Downloaden als .shls',
        'Delete': 'Verwijderen',
        'New name': 'Nieuwe naam',
        'This document is open': 'Dit document is geopend',
        'Click to open this document': 'Klik om dit document te openen',
        'No documents yet.': 'Nog geen documenten.',

        /* ---------- AI Assistant ---------- */
        'Any AI can work with you - ChatGPT, Claude, Gemini, Copilot. The prompt explains SHLS, so the AI writes valid SHLS.':
            'Elke AI kan met je samenwerken - ChatGPT, Claude, Gemini, Copilot. De prompt legt SHLS uit, zodat de AI geldige SHLS schrijft.',
        'Connected AI': 'Verbonden AI',
        'Connected to': 'Verbonden met',
        'the AI sends its result there, and it opens here.': 'de AI stuurt het resultaat daarheen, en het wordt hier geopend.',
        'What': 'Wat',
        'tells the AI': 'aan de AI vertelt',
        'The AI should': 'De AI moet',
        'Change “': '"',
        '”': '" wijzigen',
        'Make a new document': 'Een nieuw document maken',
        'The AI\'s answer (or press Ctrl+V anywhere):': 'Het antwoord van de AI (of druk ergens op Ctrl+V):',
        'The document travels in the link after the “#”, which no server sees. What you paste into your AI is handled by its provider.':
            'Het document reist in de link na de "#", die geen server ziet. Wat je in je AI plakt, wordt door de aanbieder ervan verwerkt.',
        'The prompt - copy it with Ctrl+C': 'De prompt - kopieer hem met Ctrl+C',
        'Copy prompt': 'Prompt kopiëren',
        'Paste it into your AI and say what it should change.': 'Plak het in je AI en zeg wat die moet wijzigen.',
        '(no key yet)': '(nog geen sleutel)',
        '(key valid while the editor is open)': '(sleutel geldig zolang de editor open is)',
        'The link could not be read': 'De link kon niet worden gelezen',
        'The document in this link is incomplete or damaged. If the AI\'s link was split over several lines (as in a terminal), copy the whole answer and paste it into the editor with Ctrl+V - the editor joins the lines.':
            'Het document in deze link is onvolledig of beschadigd. Als de link van de AI over meerdere regels is verdeeld (zoals in een terminal), kopieer dan het hele antwoord en plak het met Ctrl+V in de editor - de editor voegt de regels samen.',
        'Loading…': 'Laden…',
        'Taken over by your editor': 'Overgenomen door je editor',
        'The document is now in the SHLS Editor tab you already had open. Switch to that tab, or open it here.':
            'Het document staat nu in het tabblad van de SHLS-editor dat je al open had. Ga naar dat tabblad of open het hier.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)': 'Kopiëren is hier niet toegestaan - het is hieronder geselecteerd: druk op Ctrl+C (⌘C)',
        'Prompt copied - paste it into your AI and say what it should write': 'Prompt gekopieerd - plak hem in je AI en zeg wat die moet schrijven',
        'This link is incomplete or damaged - please ask the AI to send it again': 'Deze link is onvolledig of beschadigd - vraag de AI om hem opnieuw te sturen',

        /* ---------- Save to your server ---------- */
        'Save to your server': 'Opslaan op je server',
        'Webhook address': 'Webhookadres',
        'https://example.com/api/shls': 'https://example.com/api/shls',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(optioneel, verzonden als "Authorization: Bearer …"; bewaard tot dit tabblad wordt gesloten)',
        'Send automatically a few seconds after each change (otherwise only when you click': 'Automatisch verzenden, een paar seconden na elke wijziging (anders alleen als je op',
        'or press Ctrl+S)': 'of op Ctrl+S drukt)',
        'Only for “': 'Alleen voor "',
        '” (other documents use the general address)': '" (andere documenten gebruiken het algemene adres)',
        'What your server receives': 'Wat je server ontvangt',
        'A POST request with JSON (your server must allow CORS from https://shls.giit.ch); content is the document as a string:':
            'Een POST-verzoek met JSON (je server moet CORS van https://shls.giit.ch toestaan); content is het document als tekst:',
        'Embed the editor in your website': 'De editor in je website insluiten',
        'Send now': 'Nu verzenden',
        'Save setting': 'Instelling opslaan',

        /* ---------- Help ---------- */
        'How it works': 'Hoe het werkt',
        'Keyboard shortcuts': 'Sneltoetsen',
        'In the records: go up and down, fold and unfold': 'In de records: omhoog en omlaag gaan, samenvouwen en uitvouwen',
        'In the records: change the value, key or section name': 'In de records: de waarde, sleutel of sectienaam wijzigen',
        'In the records: remove the record or key': 'In de records: het record of de sleutel verwijderen',
        'In the records: move the record or key up / down': 'In de records: het record of de sleutel omhoog / omlaag verplaatsen',
        'Indent / outdent in the code by one level': 'Inspringen / uitspringen in de code met één niveau',
        'Undo / redo': 'Ongedaan maken / opnieuw',
        'Save (download, or to your server) / export': 'Opslaan (downloaden, of op je server) / exporteren',
        'Alt': 'Alt',
        'Escape': 'Escape',
        'A click in the middle puts the code\'s cursor on that line; the cursor in the code marks its record, key or value. Problems (a record with a value too few, indentation that is not a whole level, a missing blank line) are listed above the code with their line - click one to go there.':
            'Een klik in het midden zet de cursor van de code op die regel; de cursor in de code markeert zijn record, sleutel of waarde. Problemen (een record met een waarde te weinig, inspringing die geen heel niveau is, een ontbrekende lege regel) staan boven de code met hun regel - klik op een probleem om ernaartoe te gaan.',
        'Enter keeps the indentation of the line; after a section name it starts the key block.': 'Enter behoudt de inspringing van de regel; na een sectienaam begint het sleutelblok.',

        /* ---------- Messages ---------- */
        'The browser storage is full - download and delete documents under "My documents"': 'De opslag van de browser is vol - download en verwijder documenten onder "Mijn documenten"',
        'The browser storage is full - delete or download documents under "My documents" first': 'De opslag van de browser is vol - verwijder of download eerst documenten onder "Mijn documenten"',
        'The browser storage is full - delete or download some documents first': 'De opslag van de browser is vol - verwijder of download eerst enkele documenten',
        'The browser storage is full': 'De opslag van de browser is vol',
        'Nothing to undo': 'Niets om ongedaan te maken',
        'Nothing to redo': 'Niets om opnieuw te doen',
        'Nothing changed': 'Niets gewijzigd',
        'Choose a section, key or record first': 'Kies eerst een sectie, sleutel of record',
        'Choose a key or a record to move or duplicate it': 'Kies een sleutel of record om het te verplaatsen of te dupliceren',
        'This nested list has no records to add after': 'Deze geneste lijst heeft geen records om er een na toe te voegen',
        'SHLS values have one line - the line breaks became spaces': 'SHLS-waarden hebben één regel - de regeleinden zijn spaties geworden',
        'Spaces around the value were removed - SHLS values cannot start with spaces': 'Spaties rond de waarde zijn verwijderd - SHLS-waarden kunnen niet met spaties beginnen',
        'SHLS has no empty values (a blank line is skipped) - write a placeholder such as - or PH': 'SHLS kent geen lege waarden (een lege regel wordt overgeslagen) - schrijf een plaatshouder zoals - of PH',
        'A key needs a name': 'Een sleutel heeft een naam nodig',
        'A section needs a name': 'Een sectie heeft een naam nodig',
        'A key block needs at least one key - add another key first': 'Een sleutelblok heeft minstens één sleutel nodig - voeg eerst een andere sleutel toe',
        'This key is not there any more': 'Deze sleutel is er niet meer',
        'This line is not there any more': 'Deze regel is er niet meer',
        'This record is not there any more': 'Dit record is er niet meer',
        'This is the first record': 'Dit is het eerste record',
        'This is the last record': 'Dit is het laatste record',
        'This is the first key': 'Dit is de eerste sleutel',
        'This is the last key': 'Dit is de laatste sleutel',
        'This document is empty already': 'Dit document is al leeg',
        'All data is removed. "Undo" brings it back as long as the page is open.': 'Alle gegevens worden verwijderd. "Ongedaan maken" haalt ze terug zolang de pagina open is.',
        'Start over': 'Opnieuw beginnen',
        'The file is larger than 8 MB': 'Het bestand is groter dan 8 MB',
        'The CSV file is empty': 'Het CSV-bestand is leeg',
        'The YAML package is not loaded yet': 'Het YAML-pakket is nog niet geladen',
        'Downloaded': 'Gedownload',
        'Copied to the clipboard': 'Naar het klembord gekopieerd',
        'Code copied': 'Code gekopieerd',
        '.shls downloaded': '.shls gedownload',
        'Replace': 'Vervangen',
        'The document is removed from this browser for good. Download it first if you want to keep a copy.':
            'Het document wordt definitief uit deze browser verwijderd. Download het eerst als je een kopie wilt bewaren.',
        'unknown format': 'onbekend formaat',

        /* What SHLS cannot keep (opening JSON, YAML, CSV) */
        'An object inside a record becomes a list with this one object.': 'Een object binnen een record wordt een lijst met alleen dit object.',
        'Plain values where SHLS expects records (in a list or as a section) become records with the one key "Value".': 'Eenvoudige waarden waar SHLS records verwacht (in een lijst of als sectie) worden records met de ene sleutel "Value".',
        'Empty values become blank lines, which SHLS readers skip - the values after them move up. Write a placeholder such as -.': 'Lege waarden worden lege regels, die SHLS-lezers overslaan - de waarden erna schuiven op. Schrijf een plaatshouder zoals -.',
        'Values with several lines are not supported by SHLS - they break the records apart.': 'Waarden met meerdere regels worden door SHLS niet ondersteund - ze breken de records uit elkaar.',
        'Values that start or end with spaces lose them (and leading spaces change the indentation).': 'Waarden die met spaties beginnen of eindigen, verliezen die (en spaties vooraan wijzigen de inspringing).',

        /* ---------- Problems in the code ---------- */
        'A tab in the indentation - SHLS counts spaces only, so this line is read as a section name': 'Een tab in de inspringing - SHLS telt alleen spaties, dus deze regel wordt als sectienaam gelezen',
        'SHLS readers ignore this line - its indentation does not fit the key block': 'SHLS-lezers negeren deze regel - de inspringing past niet bij het sleutelblok',

        /* ---------- Single words ---------- */
        'Export': 'Exporteren',
        'Format': 'Formaat',
    },

    html: {

        '<b>Export</b> also has <b>Open in another editor</b>: it converts the document and opens it as a new document there. Anything the other format cannot hold is listed first.':

            '<b>Exporteren</b> biedt ook <b>Openen in een andere editor</b>: het document wordt omgezet en daar als nieuw document geopend. Wat het andere formaat niet kan bevatten, wordt eerst getoond.',
        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Klik op <b>Prompt kopiëren</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'De AI antwoordt met een link: klik erop, of plak het hele antwoord hieronder. <b>Ongedaan maken</b> draait het terug.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'De AI antwoordt met een link: <b>plak het hele antwoord hieronder</b> (een aangeklikte link opent een aparte editor). <b>Ongedaan maken</b> draait het terug.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'De editor kan elke opgeslagen versie naar je eigen server sturen (een <b>webhook</b>), zodat je werk bewaard wordt waar jij dat wilt. Er wordt niets verzonden tot je hier een adres invoert.',
        'Also possible: <code>?src=&lt;URL of a .shls file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>shlseditor:ai</code>, <code>shlseditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Ook mogelijk: <code>?src=&lt;URL van een .shls-bestand&gt;</code> opent een bestand, <code>&amp;webhook=&lt;URL&gt;</code> slaat dit document daar op. De editor kan ook in een eigen venster openen (<code>?embed=window</code>), en je pagina kan hem een eigen AI-prompt en een sessiesleutel geven, zodat de AI het resultaat naar je server stuurt (<code>shlseditor:ai</code>, <code>shlseditor:key-request</code>) - zie "De editor op je eigen website gebruiken" onder de editor. Details staan in <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> SHLS on the left - or start with <b>New</b> and one of the templates. A section is its name, then its keys (indented by one space, the keys of a nested list one level deeper), exactly one blank line, then the records: one value per line in the order of the keys.':
            '<b>Schrijf</b> links SHLS - of begin met <b>Nieuw</b> en een van de sjablonen. Een sectie is haar naam, dan haar sleutels (één spatie ingesprongen, de sleutels van een geneste lijst een niveau dieper), precies één lege regel, dan de records: één waarde per regel in de volgorde van de sleutels.',
        'The middle shows each section with its <b>key block</b> and its <b>records</b>, the keys as labels; nested lists fold. It reads the code exactly as the reference SHLSDecoder does.':
            'Het midden toont elke sectie met haar <b>sleutelblok</b> en haar <b>records</b>, de sleutels als labels; geneste lijsten kun je samenvouwen. Het leest de code precies zoals de referentie-SHLSDecoder dat doet.',
        '<b>Click a value, a key or a section name</b> to change it right there. <b>Enter</b> or a click elsewhere writes the change into the code (one step for Undo), <b>Escape</b> cancels. The buttons above add, duplicate, move and remove records and keys - a key added or removed is added to or removed from every record.':
            '<b>Klik op een waarde, een sleutel of een sectienaam</b> om die daar meteen te wijzigen. <b>Enter</b> of een klik ergens anders schrijft de wijziging in de code (één stap voor Ongedaan maken), <b>Escape</b> annuleert. De knoppen bovenaan voegen records en sleutels toe, dupliceren, verplaatsen en verwijderen ze - een sleutel die wordt toegevoegd of verwijderd, wordt aan elk record toegevoegd of eruit verwijderd.',
        '<b>Record</b> on the right shows the selected record as a form; <b>Insert</b> adds records, keys and sections; <b>Convert</b> counts the tokens against JSON and converts to JSON, YAML, CSV and JSON Lines; <b>Outline</b> lists the sections.':
            '<b>Record</b> rechts toont het geselecteerde record als formulier; <b>Invoegen</b> voegt records, sleutels en secties toe; <b>Omzetten</b> vergelijkt het aantal tokens met JSON en zet om naar JSON, YAML, CSV en JSON Lines; <b>Overzicht</b> toont de secties.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser. <b>Export</b> saves it as SHLS, JSON, YAML, CSV or text.':
            '<b>Mijn documenten</b> (de mapknop linksboven) toont elk document dat in deze browser wordt bewaard. <b>Exporteren</b> slaat het op als SHLS, JSON, YAML, CSV of tekst.',
    },

    patterns: [
        /* ---------- Status lines and counts ---------- */
        ['^(\\d+) (?:line|lines) · ([\\d.]+ K?B) · (\\d+) (?:section|sections)$', (m, l, kb, s) => `${l} ${getPlural(l, 'regel', 'regels')} · ${formatSize(kb)} · ${s} ${getPlural(s, 'sectie', 'secties')}`],
        ['^([\\d,]+) bytes$', (m, b) => `${formatThousands(b)} bytes`],
        ['^(\\d+) (?:record|records) · (\\d+) (?:key|keys)$', (m, r, k) => `${r} ${translateRecords(r)} · ${k} ${getPlural(k, 'sleutel', 'sleutels')}`],
        ['^(\\d+) (?:record|records) · (\\d+) (?:key|keys) · line (\\d+)$', (m, r, k, l) => `${r} ${translateRecords(r)} · ${k} ${getPlural(k, 'sleutel', 'sleutels')} · regel ${l}`],
        ['^(\\d+) (?:record|records) · line (\\d+)$', (m, r, l) => `${r} ${translateRecords(r)} · regel ${l}`],
        ['^(\\d+) (?:record|records)$', (m, r) => `${r} ${translateRecords(r)}`],
        ['^(\\d+) (?:problem|problems)$', (m, k) => `${k} ${getPlural(k, 'probleem', 'problemen')}`],
        ['^nested list · (\\d+) (?:key|keys)$', (m, k) => `geneste lijst · ${k} ${getPlural(k, 'sleutel', 'sleutels')}`],
        ['^(nested list · )?level (\\d+) · line (\\d+)$', (m, nl, l, z) => `${nl ? 'geneste lijst · ' : ''}niveau ${l} · regel ${z}`],
        ['^record (\\d+) of (\\d+) · lines (\\d+)-(\\d+)$', 'record $1 van $2 · regels $3-$4'],
        ['^SHLS needs about (\\d+) % fewer tokens than the same data as JSON - approximate tokens of common AI models\\.$', 'SHLS heeft ongeveer $1 % minder tokens nodig dan dezelfde gegevens als JSON - geschatte tokens van gangbare AI-modellen.'],
        ['^The same data as JSON needs about as many tokens - approximate tokens of common AI models\\.$', 'Dezelfde gegevens als JSON hebben ongeveer evenveel tokens nodig - geschatte tokens van gangbare AI-modellen.'],
        ['^The records of "(.+)": its keys are the columns, a nested list is one cell with JSON\\.$', 'De records van "$1": de sleutels zijn de kolommen, een geneste lijst is één cel met JSON.'],
        ['^One record of "(.+)" per line\\.$', 'Eén record van "$1" per regel.'],
        ['^"(.+)" has no records$', '"$1" heeft geen records'],

        /* ---------- Problems above the code ---------- */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'fout', 'fouten')}`],
        ['^(\\d+) (?:note|notes)$', (m, k) => `${k} ${getPlural(k, 'opmerking', 'opmerkingen')}`],
        ['^· (\\d+) (?:note|notes)$', (m, k) => `· ${k} ${getPlural(k, 'opmerking', 'opmerkingen')}`],
        ['^Line (\\d+)$', 'Regel $1'],
        ['^Indented by (\\d+) (?:space|spaces) - not a whole level \\((\\d+) (?:space|spaces) per level\\)$', (m, k, l) => `${k} ${getPlural(k, 'spatie', 'spaties')} ingesprongen - geen heel niveau (${l} ${getPlural(l, 'spatie', 'spaties')} per niveau)`],
        ['^Indented (\\d+) levels deeper than the line above - one level at a time$', '$1 niveaus dieper ingesprongen dan de regel erboven - één niveau tegelijk'],
        ['^"(.+)" has no key block yet - these lines are read as its keys \\(the key block follows the section name directly\\)$', '"$1" heeft nog geen sleutelblok - deze regels worden als de sleutels gelezen (het sleutelblok volgt direct op de sectienaam)'],
        ['^The key "(.+)" is twice in the key block - only one of them keeps its values\\. Is the blank line between the key block and the records missing\\?$', 'De sleutel "$1" staat twee keer in het sleutelblok - maar één ervan behoudt zijn waarden. Ontbreekt de lege regel tussen het sleutelblok en de records?'],
        ['^"(.+)" looks like a value but stands in the key block - records follow the key block after exactly one blank line$', '"$1" lijkt een waarde maar staat in het sleutelblok - records volgen na precies één lege regel op het sleutelblok'],
        ['^(\\d+) blank lines after the key block of "(.+)" - exactly one belongs there$', '$1 lege regels na het sleutelblok van "$2" - daar hoort er precies één'],
        ['^This record of "(.+)" has (\\d+) of (\\d+) values - its last keys are missing in the data$', 'Dit record van "$1" heeft $2 van $3 waarden - de laatste sleutels ontbreken in de gegevens'],
        ['^No blank line before this record of "(.+)" while the others have one - the record above may have more values than the key block \\((\\d+)\\)$', 'Geen lege regel vóór dit record van "$1", terwijl de andere er een hebben - het record erboven heeft misschien meer waarden dan het sleutelblok ($2)'],
        ['^A blank line inside a record of "(.+)" - the record may have fewer values than the key block \\((\\d+)\\)$', 'Een lege regel binnen een record van "$1" - het record heeft misschien minder waarden dan het sleutelblok ($2)'],

        /* ---------- Messages with names ---------- */
        ['^"(.+)" has no key block - write its keys first$', '"$1" heeft geen sleutelblok - schrijf eerst de sleutels'],
        ['^"(.+)" has no key block$', '"$1" heeft geen sleutelblok'],
        ['^There is already a section "(.+)"$', 'Er is al een sectie "$1"'],
        ['^There is no section "(.+)"$', 'Er is geen sectie "$1"'],
        ['^Remove the section "(.+)"\\?$', 'De sectie "$1" verwijderen?'],
        ['^Its key block and its (\\d+) (?:record is|records are) removed\\. "Undo" brings them back\\.$', (m, k) => `Het sleutelblok en ${getPlural(k, 'het record worden', `de ${k} records worden`)} verwijderd. "Ongedaan maken" haalt ze terug.`],
        ['^Remove the key "(.+)"\\?$', 'De sleutel "$1" verwijderen?'],
        ['^Its value is removed from every record of "(.+)" \\((\\d+)\\)\\. "Undo" brings it back\\.$', 'De waarde wordt uit elk record van "$1" verwijderd ($2). "Ongedaan maken" haalt die terug.'],
        ['^Path copied: (.*)$', 'Pad gekopieerd: $1'],
        ['^Line (\\d+): (.*)$', 'Regel $1: $2'],
        ['^"(.+)" converted from ([\\w ]+)$', '"$1" omgezet vanuit $2'],
        ['^SHLS cannot keep all of this data: (.*)$', 'SHLS kan niet al deze gegevens bewaren: $1'],
        ['^"(.+)" is open\\. My documents: open, rename, duplicate or delete your documents \\(Ctrl\\+O\\)$', '"$1" is geopend. Mijn documenten: je documenten openen, hernoemen, dupliceren of verwijderen (Ctrl+O)'],
        ['^Start "(.+)" over\\?$', '"$1" opnieuw beginnen?'],
        ['^Start "(.+)" over$', '"$1" opnieuw beginnen'],
        ['^(\\d+) (?:document|documents) · (.+) in this browser$', (m, k, s) => `${k} ${getPlural(k, 'document', 'documenten')} · ${formatSize(s)} in deze browser`],
        ['^No document named "(.*)"\\.$', 'Geen document met de naam "$1".'],
        ['^Open now · (.+)$', (m, s) => `Nu geopend · ${formatSize(s)}`],
        ['^(just now|yesterday|\\d+ min ago|\\d+ h ago|[A-Z][a-z]{2} \\d{1,2}, \\d{4}) · (.+)$', (m, w, s) => `${formatTime(w)} · ${formatSize(s)}`],
        ['^(.+) \\(open now\\)$', '$1 (nu geopend)'],
        ['^ZIP with (\\d+) (?:document|documents) downloaded$', (m, k) => `ZIP met ${k} ${getPlural(k, 'document', 'documenten')} gedownload`],
        ['^ZIP downloaded with (\\d+) files$', 'ZIP met $1 bestanden gedownload'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '"$1" is nu leeg - "Ongedaan maken" haalt het terug'],
        ['^"(.+)" opened$', '"$1" geopend'],
        ['^New document "(.+)" - your other documents are under "My documents"$', 'Nieuw document "$1" - je andere documenten staan onder "Mijn documenten"'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$', 'Nieuw document "$1" van de AI - je andere documenten zijn ongewijzigd'],
        ['^"(.+)" is not a file the editor can open$', '"$1" is geen bestand dat de editor kan openen'],
        ['^Opened "(.+)" - converted from ([\\w ]+)$', '"$1" geopend - omgezet vanuit $2'],
        ['^Opened "(.+)" - it is now in "My documents"$', '"$1" geopend - het staat nu in "Mijn documenten"'],
        ['^"(.+)" could not be opened: (.*)$', '"$1" kon niet worden geopend: $2'],
        ['^The addition is not valid SHLS - it is open as a new document "(.+)"$', 'De toevoeging is geen geldige SHLS - ze is geopend als nieuw document "$1"'],
        ['^(.+) - the addition is open as a new document "(.+)"$', '$1 - de toevoeging is geopend als nieuw document "$2"'],
        ['^Document received - (\\d+) (?:problem|problems) found, see above the code$', (m, k) => `Document ontvangen - ${k} ${getPlural(k, 'probleem', 'problemen')} gevonden, zie boven de code`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '"$1" gewijzigd door de AI - "Ongedaan maken" draait het terug'],
        ['^"(.+)" duplicated$', '"$1" gedupliceerd'],
        ['^Delete "(.+)"\\?$', '"$1" verwijderen?'],
        ['^"(.+)" deleted$', '"$1" verwijderd'],

        /* ---------- AI Assistant ---------- */
        ['^Part (\\d+) of (\\d+) received$', 'Deel $1 van $2 ontvangen'],
        ['^Open the other (?:link|links) from the AI too \\(still missing: part (.+)\\)\\.$',
            'Open ook de andere links van de AI (ontbreekt nog: deel $1).'],
        ['^Part (\\d+) of (\\d+) received - paste the other (?:link|links) too \\(missing: (.+)\\)$', 'Deel $1 van $2 ontvangen - plak ook de andere links (ontbreekt: $3)'],
        ['^The AI sends the document to (.+) with a key that only works for this session\\. What you paste into your AI is handled by its provider\\.$',
            'De AI stuurt het document naar $1 met een sleutel die alleen voor deze sessie werkt. Wat je in je AI plakt, wordt door de aanbieder ervan verwerkt.'],
        ['^The AI sends its result to (.+) by itself, and it opens here\\. If it answers with a link, paste its answer below\\.$',
            'De AI stuurt het resultaat zelf naar $1, en het wordt hier geopend. Als de AI met een link antwoordt, plak het antwoord dan hieronder.'],
        ['^No key from (.+) - the prompt asks the AI for a link instead$', 'Geen sleutel van $1 - de prompt vraagt de AI in plaats daarvan om een link'],
        ['^Prompt copied - the AI sends its result to (.+)$', 'Prompt gekopieerd - de AI stuurt het resultaat naar $1'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', '$1 openen'],
    ],
};
