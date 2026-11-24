/* Dutch texts of the Markdown editor: the bar, the work area (code,
   preview, insert, pictures, outline), its dialogs and messages, and the
   problems the preview finds in the code. What all editors share is in
   common.js; how the dictionaries are used is described in
   i18n.js. Names of documents, pictures and anchors stay as they are: the
   patterns copy them into the Dutch text. */

import { formatTime, formatSize, formatThousands, getPlural } from './format.js';

/* "1,234" -> "1.234" (Dutch thousands separator) */

/* "1.5 KB" -> "1,5 KB", "1,234 bytes" -> "1.234 bytes" (Dutch separators) */

/* When a document was last changed (files.js): "just now", "5 min ago", "Oct 25, 2026" … */

/* Reasons a ZIP could not be opened (app.js openZip) */
const ZIP = { 'it is not a ZIP file': 'het is geen ZIP-bestand', 'there is no .md file in it': 'er zit geen .md-bestand in' };

export default {
    text: {
        'Side panel': 'Zijpaneel',
        'Show or hide the side panel': 'Het zijpaneel tonen of verbergen',
        'Examples': 'Voorbeelden',
        'Template': 'Sjabloon',
        'View of the preview': 'Weergave van het voorbeeld',
        'The document filled with the examples': 'Het document ingevuld met de voorbeelden',
        'The template with its placeholders as written': 'Het sjabloon met de plaatshouders zoals ze zijn geschreven',
        'The examples could not be filled in - the preview shows the template': 'De voorbeelden konden niet worden ingevuld - het voorbeeld toont het sjabloon',
        'Placeholders': 'Plaatshouders',
        'The placeholders of the template - a click on one puts its tag at the cursor': 'De plaatshouders van het sjabloon - klik op een plaatshouder om de tag bij de cursor in te voegen',
        'Shown': 'Getoond',
        'Hidden': 'Verborgen',
        'example view': 'voorbeeldweergave',
        'template view': 'sjabloonweergave',
        // Editing in place: Enter and Shift+Enter
        "Editing on the page - Enter: new paragraph, Shift+Enter: new line, Ctrl+Enter or a click elsewhere keeps it, Escape cancels": "Bewerken op de pagina - Enter: nieuwe alinea, Shift+Enter: nieuwe regel, Ctrl+Enter of een klik elders slaat op, Escape annuleert",
        "A new paragraph inside bold, italic or a link is made in the code - Shift+Enter makes a new line": "Een nieuwe alinea binnen vet, cursief of een link maak je in de code - Shift+Enter maakt een nieuwe regel",
        /* ---------- Top bar ---------- */
        'Markdown Editor - home': 'Markdown-editor - startpagina',
        'Markdown Editor': 'Markdown-editor',
        'File': 'Bestand',
        'My documents (Ctrl+O)': 'Mijn documenten (Ctrl+O)',
        'My documents': 'Mijn documenten',
        'New document, or start this one over': 'Nieuw document, of dit opnieuw beginnen',
        'New': 'Nieuw',
        'New blank document': 'Nieuw leeg document',
        'An empty page - your other documents stay as they are': 'Een lege pagina - je andere documenten blijven zoals ze zijn',
        'README': 'README',
        'Project name, features, installation and usage': 'Projectnaam, kenmerken, installatie en gebruik',
        'Article': 'Artikel',
        'Title, summary, sections and a quote': 'Titel, samenvatting, secties en een citaat',
        'Meeting notes': 'Vergadernotities',
        'Agenda, decisions and a table of tasks': 'Agenda, besluiten en een tabel met taken',
        'Checklist': 'Checklist',
        'Tasks to tick off, in groups': 'Taken om af te vinken, in groepen',
        'The welcome example': 'Het welkomstvoorbeeld',
        'Shows what the editor can do': 'Laat zien wat de editor kan',
        'Start this document over': 'Dit document opnieuw beginnen',
        'Empties the text, keeps the pictures - "Undo" brings it back': 'Maakt de tekst leeg, behoudt de afbeeldingen - "Ongedaan maken" haalt hem terug',
        'Open a .md file (or a picture) from your computer (you can also drag it into the window)':
            'Een .md-bestand (of een afbeelding) van je computer openen (je kunt het ook in het venster slepen)',
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
        'Save the document as a .md file (Ctrl+S)': 'Het document opslaan als .md-bestand (Ctrl+S)',
        'Download .md': '.md downloaden',
        'HTML, PDF, plain text and more (Ctrl+E)': 'HTML, PDF, platte tekst en meer (Ctrl+E)',
        'Export…': 'Exporteren…',

        /* ---------- Views and work area ---------- */
        'View': 'Weergave',
        'Edit': 'Bewerken',
        'Preview': 'Voorbeeld',
        'Insert': 'Invoegen',
        'Markdown code': 'Markdown-code',
        'Copy the Markdown to the clipboard': 'De Markdown naar het klembord kopiëren',
        'Copy code': 'Code kopiëren',
        'Copy': 'Kopiëren',
        'Drag to change the width of the code area': 'Sleep om de breedte van het codevak te wijzigen',
        'Drag to change the width': 'Sleep om de breedte te wijzigen',
        'Formatting': 'Opmaak',
        'Bold (Ctrl+B)': 'Vet (Ctrl+B)',
        'Bold': 'Vet',
        'Italic (Ctrl+I)': 'Cursief (Ctrl+I)',
        'Italic': 'Cursief',
        'Strikethrough': 'Doorhalen',
        'Code in the text': 'Code in de tekst',
        'Link (Ctrl+K)': 'Link (Ctrl+K)',
        'Heading': 'Kop',
        'Bulleted list': 'Lijst met opsommingstekens',
        'Numbered list': 'Genummerde lijst',
        'Task list': 'Takenlijst',
        'Table': 'Tabel',
        'Picture': 'Afbeelding',
        'Insert picture': 'Afbeelding invoegen',
        'Quote': 'Citaat',
        'Code block': 'Codeblok',
        'Math in the text (Ctrl+M)': 'Formule in de tekst (Ctrl+M)',
        'Math': 'Formule',
        'Text size': 'Tekstgrootte',
        'Smaller text in the preview': 'Kleinere tekst in het voorbeeld',
        'Smaller text': 'Kleinere tekst',
        'Normal text size': 'Normale tekstgrootte',
        'Larger text in the preview': 'Grotere tekst in het voorbeeld',
        'Larger text': 'Grotere tekst',
        'Preview of the document: click text to edit it, Ctrl+click follows a link': 'Voorbeeld van het document: klik op tekst om hem te bewerken, Ctrl+klik volgt een link',
        'Updating…': 'Bijwerken…',
        'Insert, pictures and outline': 'Invoegen, afbeeldingen en overzicht',
        'Ready-made pieces: structure, text, math, symbols': 'Kant-en-klare stukken: structuur, tekst, formules, symbolen',
        'The pictures of this document': 'De afbeeldingen van dit document',
        'Pictures': 'Afbeeldingen',
        'The headings of the document': 'De koppen van het document',
        'Outline': 'Overzicht',
        'The headings of the document. Click one to go there in the code and in the preview.':
            'De koppen van het document. Klik op een kop om ernaartoe te gaan in de code en het voorbeeld.',
        'No headings yet - start a line with # and a space.': 'Nog geen koppen - begin een regel met # en een spatie.',
        'Open it here': 'Hier openen',
        'Drop the .md file or picture here': 'Zet het .md-bestand of de afbeelding hier neer',

        'The document is empty - write Markdown on the left, or choose a template under "New".': 'Het document is leeg - schrijf links Markdown, of kies een sjabloon onder "Nieuw".',

        /* Problems above the code */
        'Hide': 'Verbergen',
        'Show': 'Tonen',

        /* ---------- Insert tab ---------- */
        'Structure': 'Structuur',
        'Heading 1': 'Kop 1',
        'Heading 2': 'Kop 2',
        'Heading 3': 'Kop 3',
        '# Heading': '# Kop',
        '## Heading': '## Kop',
        '### Heading': '### Kop',
        'Horizontal rule': 'Horizontale lijn',
        'Apply page breaks': 'Pagina-einden toepassen',
        'New page': 'Nieuwe pagina',
        'Document': 'Document',
        '• Bulleted list': '• Opsomming',
        '1. Numbered list': '1. Nummering',
        '☐ Task list': '☐ Takenlijst',
        'Fold-out section': 'Uitklapbare sectie',
        'Line break': 'Regeleinde',
        'Text': 'Tekst',
        '**bold** (Ctrl+B)': '**vet** (Ctrl+B)',
        '*italic* (Ctrl+I)': '*cursief* (Ctrl+I)',
        '~~struck through~~': '~~doorgehaald~~',
        'Link to a heading': 'Link naar een kop',
        '[text](#heading)': '[tekst](#kop)',
        '[text](https://…) (Ctrl+K)': '[tekst](https://…) (Ctrl+K)',
        '![description](name.png)': '![beschrijving](naam.png)',
        'Footnote': 'Voetnoot',
        '[^1] at the cursor, the note at the end': '[^1] bij de cursor, de noot aan het einde',
        'Key': 'Toets',
        'A key as on the keyboard: <kbd>Ctrl</kbd>': 'Een toets zoals op het toetsenbord: <kbd>Ctrl</kbd>',
        '`code` between backticks': '`code` tussen backticks',
        '$x$ in the text': '$x$ in de tekst',
        'Displayed': 'Apart',
        '$$ … $$ on its own lines': '$$ … $$ op eigen regels',
        'Fraction': 'Breuk',
        'Root': 'Wortel',
        'x² Power': 'x² Macht',
        'x₁ Index': 'x₁ Index',
        '∑ Sum': '∑ Som',
        '∫ Integral': '∫ Integraal',
        'lim Limit': 'lim Limiet',
        '2×2 matrix': '2×2-matrix',
        'Cases': 'Gevallen',
        'Greek letters': 'Griekse letters',
        'Symbols': 'Symbolen',
        'Pictures have their own tab:': 'Afbeeldingen hebben een eigen tabblad:',

        /* ---------- Pictures tab ---------- */
        'Add pictures…': 'Afbeeldingen toevoegen…',
        'No pictures yet': 'Nog geen afbeeldingen',
        'Missing in this document': 'Ontbreekt in dit document',
        'Add file…': 'Bestand toevoegen…',
        'Show where it is used': 'Tonen waar het wordt gebruikt',
        '![…](name) at the cursor': '![…](naam) bij de cursor',
        'Rename - the code is changed along': 'Naam wijzigen - de code wordt mee aangepast',
        'Rename': 'Naam wijzigen',
        'Choose another file, keep the name': 'Een ander bestand kiezen, de naam behouden',
        'Replace': 'Vervangen',
        'Download the picture': 'De afbeelding downloaden',
        'Download': 'Downloaden',
        'Remove the picture from this document': 'De afbeelding uit dit document verwijderen',
        'Remove': 'Verwijderen',
        'New name': 'Nieuwe naam',
        'Pictures belong to “': 'Afbeeldingen horen bij "',
        '” and stay in your browser. Drop or paste them anywhere in the editor, or add them here;': '" en blijven in je browser. Zet ze ergens in de editor neer of plak ze, of voeg ze hier toe;',
        'uses them.': 'gebruikt ze.',

        /* ---------- Export ---------- */
        'Close': 'Sluiten',
        'File name': 'Bestandsnaam',
        'HTML page (one file)': 'HTML-pagina (één bestand)',
        'PDF (print or save as PDF)': 'PDF (afdrukken of opslaan als PDF)',
        'Plain text': 'Platte tekst',
        'Markdown (.md)': 'Markdown (.md)',
        'Markdown with pictures (ZIP)': 'Markdown met afbeeldingen (ZIP)',
        'Result': 'Resultaat',
        'Download everything at once: .md, pictures, HTML and text': 'Alles in één keer downloaden: .md, afbeeldingen, HTML en tekst',
        'All formats (ZIP)': 'Alle formaten (ZIP)',
        'Print / Save as PDF': 'Afdrukken / Opslaan als PDF',
        '(The HTML page - with its pictures and styles inside - is created when you download or copy it.)':
            '(De HTML-pagina - met haar afbeeldingen en stijlen erin - wordt gemaakt wanneer je die downloadt of kopieert.)',

        /* ---------- My documents ---------- */
        'Search by name': 'Zoeken op naam',
        'Search your documents': 'Je documenten doorzoeken',
        'Open a .md file from your computer as a new document': 'Een .md-bestand van je computer openen als nieuw document',
        'New document': 'Nieuw document',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Klik op een document om het te openen. Ze worden alleen in deze browser bewaard - er wordt niets geüpload. Als je de sitegegevens van de browser wist, verdwijnen ze, dus download de documenten die je wilt bewaren.',
        'Download every document as a .md file (with its pictures) in one ZIP': 'Elk document als .md-bestand (met zijn afbeeldingen) in één ZIP downloaden',
        'Download all (ZIP)': 'Alles downloaden (ZIP)',
        'Duplicate': 'Dupliceren',
        'Download as .md': 'Downloaden als .md',
        'Delete': 'Verwijderen',
        'This document is open': 'Dit document is geopend',
        'Click to open this document': 'Klik om dit document te openen',
        'No documents yet.': 'Nog geen documenten.',

        /* ---------- AI Assistant ---------- */
        'Any AI can write with you - ChatGPT, Claude, Gemini, Copilot.': 'Elke AI kan met je meeschrijven - ChatGPT, Claude, Gemini, Copilot.',
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
        /* the step with the link, also when the editor sets it anew (text by text) */
        'The AI answers with a link: click it, or paste the whole answer below.': 'De AI antwoordt met een link: klik erop, of plak het hele antwoord hieronder.',
        'takes it back.': 'draait het terug.',
        'The AI answers with a link:': 'De AI antwoordt met een link:',
        'paste its whole answer below': 'plak het hele antwoord hieronder',
        '(a clicked link opens a separate editor).': '(een aangeklikte link opent een aparte editor).',
        '(no key yet)': '(nog geen sleutel)',
        '(key valid while the editor is open)': '(sleutel geldig zolang de editor open is)',
        'The link could not be read': 'De link kon niet worden gelezen',
        'The document in this link is incomplete or damaged. If the AI\'s link was split over several lines (as in a terminal), copy the whole answer and paste it into the editor with Ctrl+V - the editor joins the lines.':
            'Het document in deze link is onvolledig of beschadigd. Als de link van de AI over meerdere regels is verdeeld (zoals in een terminal), kopieer dan het hele antwoord en plak het met Ctrl+V in de editor - de editor voegt de regels samen.',
        'Loading…': 'Laden…',
        'Taken over by your editor': 'Overgenomen door je editor',
        'The document is now in the Markdown Editor tab you already had open. Switch to that tab, or open it here.':
            'Het document staat nu in het tabblad van de Markdown-editor dat je al open had. Ga naar dat tabblad of open het hier.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)': 'Kopiëren is hier niet toegestaan - het is hieronder geselecteerd: druk op Ctrl+C (⌘C)',
        'Paste it into your AI and say what it should write.': 'Plak het in je AI en zeg wat die moet schrijven.',
        'Prompt copied - paste it into your AI and say what it should write': 'Prompt gekopieerd - plak hem in je AI en zeg wat die moet schrijven',
        'This link is incomplete or damaged - please ask the AI to send it again': 'Deze link is onvolledig of beschadigd - vraag de AI om hem opnieuw te sturen',

        /* ---------- Save to your server ---------- */
        'Save to your server': 'Opslaan op je server',
        'Webhook address': 'Webhookadres',
        'https://example.com/api/markdown': 'https://example.com/api/markdown',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(optioneel, verzonden als "Authorization: Bearer …"; bewaard tot dit tabblad wordt gesloten)',
        'Send automatically a few seconds after each change (otherwise only when you click': 'Automatisch verzenden, een paar seconden na elke wijziging (anders alleen als je op',
        'or press Ctrl+S)': 'of op Ctrl+S drukt)',
        'Only for “': 'Alleen voor "',
        '” (other documents use the general address)': '" (andere documenten gebruiken het algemene adres)',
        'What your server receives': 'Wat je server ontvangt',
        'A POST request with JSON (your server must allow CORS from https://md.giit.ch):': 'Een POST-verzoek met JSON (je server moet CORS van https://md.giit.ch toestaan):',
        'Embed the editor in your website': 'De editor in je website insluiten',
        'Send now': 'Nu verzenden',
        'Save setting': 'Instelling opslaan',

        /* ---------- Help ---------- */
        'How it works': 'Hoe het werkt',
        'Keyboard shortcuts': 'Sneltoetsen',
        'Bold / italic around the selected text': 'Vet / cursief rond de geselecteerde tekst',
        'Link': 'Link',
        'Show the cursor\'s place in the preview': 'De plek van de cursor in het voorbeeld tonen',
        'Indent / outdent': 'Inspringen / uitspringen',
        'Undo / redo': 'Ongedaan maken / opnieuw',
        'Save (download .md, or to your server) / export': 'Opslaan (.md downloaden, of op je server) / exporteren',
        'Print / save as PDF': 'Afdrukken / opslaan als PDF',
        'Problems (a missing picture, a link to a heading that is not there, a code block that is never closed, a table row with too many cells) are listed above the code - click one to go there.':
            'Problemen (een ontbrekende afbeelding, een link naar een kop die er niet is, een codeblok dat nooit wordt gesloten, een tabelrij met te veel cellen) staan boven de code - klik op een probleem om ernaartoe te gaan.',

        /* ---------- Messages ---------- */
        'The browser storage is full - download and delete documents under "My documents"': 'De opslag van de browser is vol - download en verwijder documenten onder "Mijn documenten"',
        'The browser storage is full - delete or download documents under "My documents" first': 'De opslag van de browser is vol - verwijder of download eerst documenten onder "Mijn documenten"',
        'The browser storage is full - delete or download some documents first': 'De opslag van de browser is vol - verwijder of download eerst enkele documenten',
        'The browser storage is full': 'De opslag van de browser is vol',
        'Nothing to undo': 'Niets om ongedaan te maken',
        'Nothing to redo': 'Niets om opnieuw te doen',
        'This text changed in the code - wait for the preview, then try again': 'Deze tekst is in de code gewijzigd - wacht op het voorbeeld en probeer het dan opnieuw',
        'This box changed in the code - wait for the preview, then try again': 'Dit vak is in de code gewijzigd - wacht op het voorbeeld en probeer het dan opnieuw',
        'This picture changed in the code - wait for the preview, then try again': 'Deze afbeelding is in de code gewijzigd - wacht op het voorbeeld en probeer het dan opnieuw',
        'The code changed meanwhile - the edit was not used': 'De code is intussen gewijzigd - de bewerking is niet gebruikt',
        'This anchor is not in the document': 'Dit anker staat niet in het document',
        'The picture is removed from this document. Places that use it show its name in a frame. "Undo" does not bring it back.':
            'De afbeelding wordt uit dit document verwijderd. Plekken die haar gebruiken, tonen haar naam in een kader. "Ongedaan maken" haalt die niet terug.',
        'Pictures can be PNG, JPG, GIF, WebP, SVG or PDF': 'Afbeeldingen kunnen PNG, JPG, GIF, WebP, SVG of PDF zijn',
        'The picture is larger than 12 MB': 'De afbeelding is groter dan 12 MB',
        'The picture could not be read': 'De afbeelding kon niet worden gelezen',
        'This document is empty already': 'Dit document is al leeg',
        'Everything is removed; the pictures of the document stay. "Undo" brings the text back as long as the page is open.':
            'Alles wordt verwijderd; de afbeeldingen van het document blijven. "Ongedaan maken" haalt de tekst terug zolang de pagina open is.',
        'Start over': 'Opnieuw beginnen',
        'The file is larger than 8 MB': 'Het bestand is groter dan 8 MB',
        'Downloaded': 'Gedownload',
        'Copied to the clipboard': 'Naar het klembord gekopieerd',
        'This browser does not allow copying this': 'Deze browser staat niet toe dit te kopiëren',
        'Code copied': 'Code gekopieerd',
        '.md with its pictures downloaded (ZIP)': '.md met afbeeldingen gedownload (ZIP)',
        '.md downloaded': '.md gedownload',
        'ZIP downloaded: .md, pictures, HTML and text': 'ZIP gedownload: .md, afbeeldingen, HTML en tekst',
        'Add': 'Toevoegen',
        'The document and its pictures are removed from this browser for good. Download it first if you want to keep a copy.':
            'Het document en zijn afbeeldingen worden definitief uit deze browser verwijderd. Download het eerst als je een kopie wilt bewaren.',

        /* ---------- Problems the preview finds (markdown.js) ---------- */
        '$$ is never closed - add a line with $$ after the formula': '$$ wordt nooit gesloten - voeg na de formule een regel met $$ toe',

        /* ---------- Single words ---------- */
        'Export': 'Exporteren',
        'Format': 'Formaat',
    },

    html: {

        '<b>Export</b> also has <b>Open in another editor</b>: it converts the document and opens it as a new document there. Anything the other format cannot hold is listed first.':

            '<b>Exporteren</b> biedt ook <b>Openen in een andere editor</b>: het document wordt omgezet en daar als nieuw document geopend. Wat het andere formaat niet kan bevatten, wordt eerst getoond.',

        '<b>Insert</b> &gt; <b>New page</b> sets a page break for printing and PDF; the preview shows it as a dashed line. Headings stay with their text and tables and pictures are not cut. In Export, <b>Apply page breaks</b> turns them off for a PDF.':

            '<b>Invoegen</b> &gt; <b>Nieuwe pagina</b> zet een pagina-einde voor afdrukken en PDF; het voorbeeld toont het als streeplijn. Koppen blijven bij hun tekst, tabellen en afbeeldingen worden niet afgesneden. Bij <b>Exporteren</b> zet <b>Pagina-einden toepassen</b> ze uit voor een PDF.',
        /* Export */
        'The print dialog opens with the document only. Choose <b>Save as PDF</b> (or "Microsoft Print to PDF") as the printer. In Chrome and Edge, untick "Headers and footers" if the browser offers it. The text in the PDF stays sharp and can be selected.':
            'Het afdrukvenster opent met alleen het document. Kies <b>Opslaan als PDF</b> (of "Microsoft Print to PDF") als printer. Zet in Chrome en Edge het vinkje bij "Kop- en voetteksten" uit als de browser dat aanbiedt. De tekst in de PDF blijft scherp en kan worden geselecteerd.',

        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Klik op <b>Prompt kopiëren</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'De AI antwoordt met een link: klik erop, of plak het hele antwoord hieronder. <b>Ongedaan maken</b> draait het terug.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'De AI antwoordt met een link: <b>plak het hele antwoord hieronder</b> (een aangeklikte link opent een aparte editor). <b>Ongedaan maken</b> draait het terug.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'De editor kan elke opgeslagen versie naar je eigen server sturen (een <b>webhook</b>), zodat je werk bewaard wordt waar jij dat wilt. Er wordt niets verzonden tot je hier een adres invoert.',
        'Also possible: <code>?src=&lt;URL of a .md file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>mdeditor:ai</code>, <code>mdeditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Ook mogelijk: <code>?src=&lt;URL van een .md-bestand&gt;</code> opent een bestand, <code>&amp;webhook=&lt;URL&gt;</code> slaat dit document daar op. De editor kan ook in een eigen venster openen (<code>?embed=window</code>), en je pagina kan hem een eigen AI-prompt en een sessiesleutel geven, zodat de AI het resultaat naar je server stuurt (<code>mdeditor:ai</code>, <code>mdeditor:key-request</code>) - zie "De editor op je eigen website gebruiken" onder de editor. Details staan in <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> Markdown on the left - or start with <b>New</b> and one of the templates. The preview in the middle shows the document as you type.':
            '<b>Schrijf</b> links Markdown - of begin met <b>Nieuw</b> en een van de sjablonen. Het voorbeeld in het midden toont het document terwijl je typt.',
        '<b>Click text in the preview</b> to edit it right there: the cursor is where you clicked, and the code\'s cursor goes to the same place. <b>Enter</b> starts a new paragraph; <b>Shift+Enter</b> inserts a line break. <b>Ctrl+Enter</b> (<b>Cmd+Enter</b> on macOS) or a click elsewhere applies the edit; <b>Escape</b> cancels. Each edit is one step for Undo. Characters such as <code>*</code> or <code>_</code> are escaped so they stay text. A click on math, a picture or code jumps to its place in the code instead. <b>Ctrl</b> + click follows a link. A check box of a task list ticks the task in the code.':
            '<b>Klik op tekst in het voorbeeld</b> om hem daar meteen te bewerken: de cursor staat waar je klikte, en de cursor van de code gaat naar dezelfde plek. <b>Enter</b> begint een nieuwe alinea; <b>Shift+Enter</b> voegt een regeleinde in. <b>Ctrl+Enter</b> (<b>Cmd+Enter</b> op macOS) of een klik ergens anders past de bewerking toe; <b>Escape</b> annuleert. Elke bewerking is één stap voor Ongedaan maken. Tekens zoals <code>*</code> of <code>_</code> worden ge-escapet zodat ze tekst blijven. Een klik op een formule, een afbeelding of code springt in plaats daarvan naar de plek in de code. <b>Ctrl</b> + klik volgt een link. Een selectievakje van een takenlijst vinkt de taak af in de code.',
        '<b>Insert</b> on the right has ready-made pieces (headings, lists, tables, math, symbols); <b>Pictures</b> holds the pictures of the document; <b>Outline</b> lists the headings.':
            '<b>Invoegen</b> rechts heeft kant-en-klare stukken (koppen, lijsten, tabellen, formules, symbolen); <b>Afbeeldingen</b> bevat de afbeeldingen van het document; <b>Overzicht</b> toont de koppen.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser.':
            '<b>Mijn documenten</b> (de mapknop linksboven) toont elk document dat in deze browser wordt bewaard.',
        '<b>Export</b> makes an HTML page, a PDF (via the print dialog) or plain text. <b>Download .md</b> saves the code (with its pictures as ZIP).':
            '<b>Exporteren</b> maakt een HTML-pagina, een PDF (via het afdrukvenster) of platte tekst. <b>.md downloaden</b> slaat de code op (met de afbeeldingen als ZIP).',
        'The preview understands CommonMark with GitHub\'s tables, task lists, strikethrough, autolinks and footnotes, and math in <code>$…$</code> and <code>$$…$$</code>. HTML in the Markdown is shown without scripts, styles, frames and forms.':
            'Het voorbeeld begrijpt CommonMark met de tabellen, takenlijsten, doorhalingen, autolinks en voetnoten van GitHub, en formules in <code>$…$</code> en <code>$$…$$</code>. HTML in de Markdown wordt getoond zonder scripts, stijlen, frames en formulieren.',
        'Math: <code>$…$</code> around the selection': 'Formule: <code>$…$</code> rond de selectie',
        'Lines in or out of a comment (<code>&lt;!-- --&gt;</code>)': 'Regels in of uit commentaar zetten (<code>&lt;!-- --&gt;</code>)',
        '<kbd>Enter</kbd> in a list starts the next item (<code>-</code>, <code>1.</code>, <code>- [ ]</code>, <code>&gt;</code>); on an empty item it ends the list. <code>* _ ` ~ $ [ (</code> close by themselves around a selection.':
            '<kbd>Enter</kbd> in een lijst begint het volgende item (<code>-</code>, <code>1.</code>, <code>- [ ]</code>, <code>&gt;</code>); op een leeg item beëindigt het de lijst. <code>* _ ` ~ $ [ (</code> sluiten vanzelf rond een selectie.',
    },

    patterns: [
        /* ---------- Status lines ---------- */
        ['^(\\d+) lines · ([\\d.]+ K?B) · (\\d+) (?:word|words)$', (m, l, kb, w) => `${l} ${getPlural(l, 'regel', 'regels')} · ${formatSize(kb)} · ${w} ${getPlural(w, 'woord', 'woorden')}`],
        ['^\\.md and (\\d+) (?:picture|pictures)$', (m, k) => `.md en ${k} ${getPlural(k, 'afbeelding', 'afbeeldingen')}`],
        ['^([\\d,]+) bytes$', (m, b) => `${formatThousands(b)} bytes`],
        ['^\\d{1,3}(?:,\\d{3})+$', m => formatThousands(m)],

        /* Problems above the code */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'fout', 'fouten')}`],
        ['^· (\\d+) (?:note|notes)$', (m, k) => `· ${k} ${getPlural(k, 'opmerking', 'opmerkingen')}`],
        ['^(\\d+) (?:note|notes)$', (m, k) => `${k} ${getPlural(k, 'opmerking', 'opmerkingen')}`],
        ['^Line (\\d+)$', 'Regel $1'],
        ['^The preview failed: (.*)$', 'Het voorbeeld is mislukt: $1'],
        ['^The preview stopped at an unexpected problem: (.*)$', 'Het voorbeeld is gestopt bij een onverwacht probleem: $1'],
        ['^Picture "(.+)" not found - drag the picture into the editor \\(or add it in the Pictures tab\\)$', 'Afbeelding "$1" niet gevonden - sleep de afbeelding in de editor (of voeg die toe in het tabblad Afbeeldingen)'],
        ['^The link to "(.+)" has no heading or anchor of that name$', 'Voor de link naar "$1" is er geen kop of anker met die naam'],
        ['^This code block \\((.+)\\) is never closed - add a line with (.+) after the code$', 'Dit codeblok ($1) wordt nooit gesloten - voeg na de code een regel met $2 toe'],
        ['^This table row has (\\d+) (?:cell|cells), the header has (\\d+)$', (m, k, h) => `Deze tabelrij heeft ${k} ${getPlural(k, 'cel', 'cellen')}, de koprij heeft er ${h}`],
        ['^Math: (.*)$', 'Formule: $1'],

        /* ---------- Pictures tab ---------- */
        ['^(\\d+) (?:picture|pictures) · (.+)$', (m, k, s) => `${k} ${getPlural(k, 'afbeelding', 'afbeeldingen')} · ${formatSize(s)}`],
        ['^Choose the file for (.+)$', 'Het bestand voor $1 kiezen'],
        ['^Insert !\\[…\\]\\((.+)\\) at the cursor$', '![…]($1) bij de cursor invoegen'],
        ['^used (\\d+)×$', '$1× gebruikt'],
        ['^(.* · )?not used yet$', (m, a) => `${a || ''}nog niet gebruikt`],

        /* ---------- Top bar and My documents ---------- */
        ['^"(.+)" is open\\. My documents: open, rename, duplicate or delete your documents \\(Ctrl\\+O\\)$', '"$1" is geopend. Mijn documenten: je documenten openen, hernoemen, dupliceren of verwijderen (Ctrl+O)'],
        ['^Start "(.+)" over\\?$', '"$1" opnieuw beginnen?'],
        ['^Start "(.+)" over$', '"$1" opnieuw beginnen'],
        ['^(\\d+) (?:document|documents) · (.+) in this browser$', (m, k, s) => `${k} ${getPlural(k, 'document', 'documenten')} · ${formatSize(s)} in deze browser`],
        ['^No document named "(.*)"\\.$', 'Geen document met de naam "$1".'],
        ['^Open now · (.+)$', (m, s) => `Nu geopend · ${formatSize(s)}`],
        ['^(just now|yesterday|\\d+ min ago|\\d+ h ago|[A-Z][a-z]{2} \\d{1,2}, \\d{4}) · (.+)$', (m, w, s) => `${formatTime(w)} · ${formatSize(s)}`],
        ['^(.+) \\(open now\\)$', '$1 (nu geopend)'],
        ['^ZIP with (\\d+) (?:document|documents) downloaded$', (m, k) => `ZIP met ${k} ${getPlural(k, 'document', 'documenten')} gedownload`],

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

        /* ---------- Messages with names ---------- */
        ['^"(.+)" is now "(.+)"$', '"$1" heet nu "$2"'],
        ['^Remove "(.+)"\\?$', '"$1" verwijderen?'],
        ['^"(.+)" now shows the new picture$', '"$1" toont nu de nieuwe afbeelding'],
        ['^Picture "(.+)" added to "(.+)"$', 'Afbeelding "$1" toegevoegd aan "$2"'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '"$1" is nu leeg - "Ongedaan maken" haalt het terug'],
        ['^"(.+)" opened$', '"$1" geopend'],
        ['^New document "(.+)" - your other documents are under "My documents"$', 'Nieuw document "$1" - je andere documenten staan onder "Mijn documenten"'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$', 'Nieuw document "$1" van de AI - je andere documenten zijn ongewijzigd'],
        ['^"(.+)" is not a Markdown file$', '"$1" is geen Markdown-bestand'],
        ['^Opened "(.+)" - it is now in "My documents"$', '"$1" geopend - het staat nu in "Mijn documenten"'],
        ['^Opened "(.+)" with (\\d+) (?:picture|pictures)$', (m, f, k) => `"${f}" geopend met ${k} ${getPlural(k, 'afbeelding', 'afbeeldingen')}`],
        ['^"(.+)" could not be opened: (.*)$', (m, f, why) => `"${f}" kon niet worden geopend: ${ZIP[why] || why}`],
        ['^Document received - the preview found (\\d+) (?:problem|problems), see above the code$', (m, k) => `Document ontvangen - het voorbeeld heeft ${k} ${getPlural(k, 'probleem', 'problemen')} gevonden, zie boven de code`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '"$1" gewijzigd door de AI - "Ongedaan maken" draait het terug'],
        ['^"(.+)" duplicated$', '"$1" gedupliceerd'],
        ['^Delete "(.+)"\\?$', '"$1" verwijderen?'],
        ['^"(.+)" deleted$', '"$1" verwijderd'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', '$1 openen'],
    ],
};
