/* Dutch texts of the HTML editor: the bar, the work area (code, preview,
   document settings, insert, files, outline), its dialogs and messages,
   and the problems the editor finds in the code. What all editors share is
   in common.js; how the dictionaries are used is described in
   i18n.js. Names of documents, files, elements and attributes stay as they
   are: the patterns copy them into the Dutch text. */

import { formatTime, formatSize, formatThousands, getPlural } from './format.js';

/* "1,234" -> "1.234" (Dutch thousands separator) */

/* "1.5 KB" -> "1,5 KB", "1,234 bytes" -> "1.234 bytes" (Dutch separators) */

/* When a document was last changed (files.js): "just now", "5 min ago", "Oct 25, 2026" … */

/* Reasons a ZIP could not be opened (app.js openZip) */
const ZIP = { 'it is not a ZIP file': 'het is geen ZIP-bestand', 'there is no .html file in it': 'er zit geen .html-bestand in' };

export default {
    text: {
        // Editing in place: Enter and Shift+Enter
        "Editing in the preview - Enter: new paragraph, Shift+Enter: new line, Ctrl+Enter or a click elsewhere keeps it, Escape cancels": "Bewerken in het voorbeeld - Enter: nieuwe alinea, Shift+Enter: nieuwe regel, Ctrl+Enter of een klik elders slaat op, Escape annuleert",
        /* ---------- Top bar ---------- */
        'HTML Editor - home': 'HTML-editor - startpagina',
        'HTML Editor': 'HTML-editor',
        'File': 'Bestand',
        'My documents (Ctrl+O)': 'Mijn documenten (Ctrl+O)',
        'My documents': 'Mijn documenten',
        'New document, or start this one over': 'Nieuw document, of dit opnieuw beginnen',
        'New': 'Nieuw',
        'New blank page': 'Nieuwe lege pagina',
        'An empty HTML page - your other documents stay as they are': 'Een lege HTML-pagina - je andere documenten blijven zoals ze zijn',
        'Landing page': 'Landingspagina',
        'A big header, three features and a footer': 'Een grote kop, drie kenmerken en een voettekst',
        'Article': 'Artikel',
        'Title, sections, a quote and a list': 'Titel, secties, een citaat en een lijst',
        'Contact form': 'Contactformulier',
        'Name, email and message with labels': 'Naam, e-mail en bericht met labels',
        'Email newsletter': 'E-mailnieuwsbrief',
        'An email layout with a table': 'Een e-mailopmaak met een tabel',
        'The welcome example': 'Het welkomstvoorbeeld',
        'Shows what the editor can do': 'Laat zien wat de editor kan',
        'Start this document over': 'Dit document opnieuw beginnen',
        'Keeps the head, empties the body - "Undo" brings it back': 'Behoudt de head, maakt de body leeg - "Ongedaan maken" haalt hem terug',
        'Open an .html file (or a picture, stylesheet or ZIP) from your computer (you can also drag it into the window)':
            'Een .html-bestand (of een afbeelding, stylesheet of ZIP) van je computer openen (je kunt het ook in het venster slepen)',
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
        'Save the page as an .html file - with its files as ZIP (Ctrl+S)': 'De pagina opslaan als .html-bestand - met haar bestanden als ZIP (Ctrl+S)',
        'Download .html': '.html downloaden',
        'HTML, one file with everything inside, ZIP, PDF and text (Ctrl+E)': 'HTML, één bestand met alles erin, ZIP, PDF en tekst (Ctrl+E)',
        'Export…': 'Exporteren…',

        /* ---------- Views and work area ---------- */
        'View': 'Weergave',
        'Edit': 'Bewerken',
        'Side panel': 'Zijpaneel',
        'Preview': 'Voorbeeld',
        'Document': 'Document',
        'HTML code': 'HTML-code',
        'Copy the HTML code to the clipboard': 'De HTML-code naar het klembord kopiëren',
        'Copy code': 'Code kopiëren',
        'Copy': 'Kopiëren',
        'Indent every line by the depth of its elements': 'Elke regel inspringen volgens de diepte van zijn elementen',
        'Tidy up': 'Opschonen',
        'Drag to change the width of the code area': 'Sleep om de breedte van het codevak te wijzigen',
        'Drag to change the width': 'Sleep om de breedte te wijzigen',
        'Formatting': 'Opmaak',
        'Bold (Ctrl+B)': 'Vet (Ctrl+B)',
        'Bold': 'Vet',
        'Italic (Ctrl+I)': 'Cursief (Ctrl+I)',
        'Italic': 'Cursief',
        'Underline (Ctrl+U)': 'Onderstrepen (Ctrl+U)',
        'Underline': 'Onderstrepen',
        'Heading': 'Kop',
        'Bulleted list': 'Lijst met opsommingstekens',
        'Numbered list': 'Genummerde lijst',
        'Table': 'Tabel',
        'Picture': 'Afbeelding',
        'Width of the preview': 'Breedte van het voorbeeld',
        'As wide as the preview': 'Zo breed als het voorbeeld',
        'Full width': 'Volle breedte',
        'Tablet (768 pixels wide)': 'Tablet (768 pixels breed)',
        'Tablet width': 'Tabletbreedte',
        'Phone (390 pixels wide)': 'Telefoon (390 pixels breed)',
        'Phone width': 'Telefoonbreedte',
        'Preview of the page: click text to edit it, or anything else to jump to its place in the code':
            'Voorbeeld van de pagina: klik op tekst om hem te bewerken, of op iets anders om naar de plek in de code te gaan',
        'Preview of the page': 'Voorbeeld van de pagina',
        'Updating…': 'Bijwerken…',
        'Title, language, description and the stylesheets of the page': 'Titel, taal, beschrijving en de stylesheets van de pagina',
        'Ready-made pieces: structure, text, lists, media, forms, head': 'Kant-en-klare stukken: structuur, tekst, lijsten, media, formulieren, head',
        'Insert': 'Invoegen',
        'The pictures and other files of this document': 'De afbeeldingen en andere bestanden van dit document',
        'Files': 'Bestanden',
        'The headings of the page': 'De koppen van de pagina',
        'Outline': 'Overzicht',
        'The headings of the page. Click one to go there in the code and in the preview.':
            'De koppen van de pagina. Klik op een kop om ernaartoe te gaan in de code en het voorbeeld.',
        'No headings yet - add one with <h1> … <h6>.': 'Nog geen koppen - voeg er een toe met <h1> … <h6>.',
        'Open it here': 'Hier openen',
        'Drop the .html file, picture or stylesheet here': 'Zet het .html-bestand, de afbeelding of de stylesheet hier neer',

        /* Problems above the code */
        'Hide': 'Verbergen',
        'Show': 'Tonen',

        /* ---------- Insert tab ---------- */
        'Structure': 'Structuur',
        'Heading 1': 'Kop 1',
        'Heading 2': 'Kop 2',
        'Heading 3': 'Kop 3',
        'Heading 4': 'Kop 4',
        'Paragraph': 'Alinea',
        'Section': 'Sectie',
        'Header': 'Koptekst',
        'Navigation bar': 'Navigatiebalk',
        'Main content': 'Hoofdinhoud',
        'Footer': 'Voettekst',
        'Box': 'Kader',
        'Fold-out (details)': 'Uitklapper (details)',
        'Dividing line': 'Scheidingslijn',
        'Apply page breaks': 'Pagina-einden toepassen',
        'New page': 'Nieuwe pagina',
        'Line break': 'Regeleinde',
        'Comment': 'Commentaar',
        'Lists and tables': 'Lijsten en tabellen',
        '• Bulleted list': '• Opsomming',
        '1. Numbered list': '1. Nummering',
        'Description list': 'Beschrijvingslijst',
        'Highlighted': 'Gemarkeerd',
        'Small print': 'Kleine lettertjes',
        'Code in the text': 'Code in de tekst',
        'x² Superscript': 'x² Superscript',
        'x₁ Subscript': 'x₁ Subscript',
        'Quote': 'Citaat',
        'Program code': 'Programmacode',
        'Inline part (span)': 'Inline-element (span)',
        'Media': 'Media',
        'Figure with caption': 'Figuur met bijschrift',
        'Video player': 'Videospeler',
        'Audio player': 'Audiospeler',
        'The files of the page have their own tab:': 'De bestanden van de pagina hebben een eigen tabblad:',
        'Forms': 'Formulieren',
        'Form': 'Formulier',
        'Text field': 'Tekstveld',
        'Email field': 'E-mailveld',
        'Text area': 'Tekstvak',
        'Choice list': 'Keuzelijst',
        'Tick box': 'Selectievakje',
        'Radio buttons': 'Keuzerondjes',
        'Button': 'Knop',
        'Head': 'Head',
        'Character set': 'Tekenset',
        'The character set: <meta charset="utf-8">': 'De tekenset: <meta charset="utf-8">',
        'Fits phone screens: <meta name="viewport">': 'Past op telefoonschermen: <meta name="viewport">',
        'Description': 'Beschrijving',
        'For search engines: <meta name="description">': 'Voor zoekmachines: <meta name="description">',
        'Shared links': 'Gedeelde links',
        'Title, description and picture for shared links (Open Graph)': 'Titel, beschrijving en afbeelding voor gedeelde links (Open Graph)',
        'Stylesheet file': 'Stylesheetbestand',
        'A stylesheet file: <link rel="stylesheet">': 'Een stylesheetbestand: <link rel="stylesheet">',
        'Style block': 'Stijlblok',
        'CSS in the page: <style> … </style>': 'CSS in de pagina: <style> … </style>',
        'Tab icon': 'Tabbladpictogram',
        'The icon in the browser tab: <link rel="icon">': 'Het pictogram in het browsertabblad: <link rel="icon">',
        'Special characters': 'Speciale tekens',
        'Insert &nbsp; (no-break space)': '&nbsp; invoegen (vaste spatie)',
        'Insert &shy; (soft hyphen)': '&shy; invoegen (zacht afbreekstreepje)',

        /* ---------- Files tab ---------- */
        'Add files…': 'Bestanden toevoegen…',
        'No files yet': 'Nog geen bestanden',
        'Missing in this document': 'Ontbreekt in dit document',
        'Add file…': 'Bestand toevoegen…',
        'Show where it is used': 'Tonen waar het wordt gebruikt',
        'A picture (img) at the cursor': 'Een afbeelding (img) bij de cursor',
        'A link to the stylesheet in the head': 'Een link naar de stylesheet in de head',
        'A reference to the file at the cursor': 'Een verwijzing naar het bestand bij de cursor',
        'A figure with caption at the cursor': 'Een figuur met bijschrift bij de cursor',
        'As figure': 'Als figuur',
        'Rename - the code is changed along': 'Naam wijzigen - de code wordt mee aangepast',
        'Rename': 'Naam wijzigen',
        'Choose another file, keep the name': 'Een ander bestand kiezen, de naam behouden',
        'Replace': 'Vervangen',
        'Download the file': 'Het bestand downloaden',
        'Download': 'Downloaden',
        'Remove the file from this document': 'Het bestand uit dit document verwijderen',
        'Remove': 'Verwijderen',
        'New name': 'Nieuwe naam',

        /* ---------- Document tab ---------- */
        'Title': 'Titel',
        '(in the browser tab and in search results)': '(in het browsertabblad en in zoekresultaten)',
        'Language': 'Taal',
        '(for search engines)': '(voor zoekmachines)',
        'Author': 'Auteur',
        'Characters as UTF-8 (meta charset)': 'Tekens als UTF-8 (meta charset)',
        'Fits phone screens (meta viewport)': 'Past op telefoonschermen (meta viewport)',
        'Linked stylesheets': 'Gekoppelde stylesheets',
        'No stylesheet is linked.': 'Er is geen stylesheet gekoppeld.',
        'Add a .css file in the Files tab to link it here.': 'Voeg een .css-bestand toe in het tabblad Bestanden om het hier te koppelen.',
        'Stylesheet of this document': 'Stylesheet van dit document',
        'Link it': 'Koppelen',
        'from the web': 'van het web',
        'a file of this document': 'een bestand van dit document',
        'missing': 'ontbreekt',
        'Show it in the code': 'In de code tonen',
        'Not set': 'Niet ingesteld',
        'English (en)': 'Engels (en)',
        'English, US (en-US)': 'Engels, VS (en-US)',
        'English, UK (en-GB)': 'Engels, VK (en-GB)',
        'German (de)': 'Duits (de)',
        'German, Switzerland (de-CH)': 'Duits, Zwitserland (de-CH)',
        'German, Germany (de-DE)': 'Duits, Duitsland (de-DE)',
        'French (fr)': 'Frans (fr)',
        'Italian (it)': 'Italiaans (it)',
        'Spanish (es)': 'Spaans (es)',
        'Portuguese (pt)': 'Portugees (pt)',
        'Dutch (nl)': 'Nederlands (nl)',
        'elements · about': 'elementen · ongeveer',
        'element · about': 'element · ongeveer',
        'words ·': 'woorden ·',
        'headings ·': 'koppen ·',
        'heading ·': 'kop ·',
        'files': 'bestanden',
        'file': 'bestand',
        'Make it a complete page': 'Er een volledige pagina van maken',

        /* ---------- Export ---------- */
        'Close': 'Sluiten',
        'File name': 'Bestandsnaam',
        'Page': 'Pagina',
        'HTML page (.html)': 'HTML-pagina (.html)',
        'One HTML file with its files inside': 'Eén HTML-bestand met zijn bestanden erin',
        'HTML with its files (ZIP)': 'HTML met zijn bestanden (ZIP)',
        'PDF (print or save as PDF)': 'PDF (afdrukken of opslaan als PDF)',
        'Plain text': 'Platte tekst',
        'Result': 'Resultaat',
        'Download everything at once: .html, its files, the HTML with the files inside and the text':
            'Alles in één keer downloaden: .html, zijn bestanden, de HTML met de bestanden erin en de tekst',
        'All formats (ZIP)': 'Alle formaten (ZIP)',
        'Print / Save as PDF': 'Afdrukken / Opslaan als PDF',
        '(The page with its files inside is created when you download or copy it.)':
            '(De pagina met haar bestanden erin wordt gemaakt wanneer je haar downloadt of kopieert.)',

        /* ---------- My documents ---------- */
        'Search by name': 'Zoeken op naam',
        'Search your documents': 'Je documenten doorzoeken',
        'Open an .html file from your computer as a new document': 'Een .html-bestand van je computer openen als nieuw document',
        'New document': 'Nieuw document',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Klik op een document om het te openen. Ze worden alleen in deze browser bewaard - er wordt niets geüpload. Als je de sitegegevens van de browser wist, verdwijnen ze, dus download de documenten die je wilt bewaren.',
        'Download every document as an .html file (with its files) in one ZIP': 'Elk document als .html-bestand (met zijn bestanden) in één ZIP downloaden',
        'Download all (ZIP)': 'Alles downloaden (ZIP)',
        'Duplicate': 'Dupliceren',
        'Download as .html': 'Downloaden als .html',
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
        'The document is now in the HTML Editor tab you already had open. Switch to that tab, or open it here.':
            'Het document staat nu in het tabblad van de HTML-editor dat je al open had. Ga naar dat tabblad of open het hier.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)': 'Kopiëren is hier niet toegestaan - het is hieronder geselecteerd: druk op Ctrl+C (⌘C)',
        'Paste it into your AI and say what it should write.': 'Plak het in je AI en zeg wat die moet schrijven.',
        'Prompt copied - paste it into your AI and say what it should write': 'Prompt gekopieerd - plak hem in je AI en zeg wat die moet schrijven',
        'This link is incomplete or damaged - please ask the AI to send it again': 'Deze link is onvolledig of beschadigd - vraag de AI om hem opnieuw te sturen',

        /* ---------- Save to your server ---------- */
        'Save to your server': 'Opslaan op je server',
        'Webhook address': 'Webhookadres',
        'https://example.com/api/html': 'https://example.com/api/html',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(optioneel, verzonden als "Authorization: Bearer …"; bewaard tot dit tabblad wordt gesloten)',
        'Send automatically a few seconds after each change (otherwise only when you click': 'Automatisch verzenden, een paar seconden na elke wijziging (anders alleen als je op',
        'or press Ctrl+S)': 'of op Ctrl+S drukt)',
        'Only for “': 'Alleen voor "',
        '” (other documents use the general address)': '" (andere documenten gebruiken het algemene adres)',
        'What your server receives': 'Wat je server ontvangt',
        'A POST request with JSON (your server must allow CORS from https://html.giit.ch):': 'Een POST-verzoek met JSON (je server moet CORS van https://html.giit.ch toestaan):',
        'Embed the editor in your website': 'De editor in je website insluiten',
        'Send now': 'Nu verzenden',
        'Save setting': 'Instelling opslaan',

        /* ---------- Help ---------- */
        'How it works': 'Hoe het werkt',
        'Keyboard shortcuts': 'Sneltoetsen',
        'Bold / italic / underline the selected text': 'De geselecteerde tekst vet / cursief / onderstreept maken',
        'Show the cursor\'s place in the preview': 'De plek van de cursor in het voorbeeld tonen',
        'Indent / outdent': 'Inspringen / uitspringen',
        'Undo / redo': 'Ongedaan maken / opnieuw',
        'Save (download .html, or to your server) / export': 'Opslaan (.html downloaden, of op je server) / exporteren',
        'Print / save as PDF': 'Afdrukken / opslaan als PDF',

        /* ---------- Messages ---------- */
        'The browser storage is full - download and delete documents under "My documents"': 'De opslag van de browser is vol - download en verwijder documenten onder "Mijn documenten"',
        'The browser storage is full - delete or download documents under "My documents" first': 'De opslag van de browser is vol - verwijder of download eerst documenten onder "Mijn documenten"',
        'The browser storage is full - delete or download some documents first': 'De opslag van de browser is vol - verwijder of download eerst enkele documenten',
        'The browser storage is full': 'De opslag van de browser is vol',
        'Nothing to undo': 'Niets om ongedaan te maken',
        'Nothing to redo': 'Niets om opnieuw te doen',
        'The code changed meanwhile - the edit was not used': 'De code is intussen gewijzigd - de bewerking is niet gebruikt',
        'The code changed meanwhile - the picture was not moved': 'De code is intussen gewijzigd - de afbeelding is niet verplaatst',
        'The file is removed from this document. Places that use it show nothing. "Undo" does not bring it back.':
            'Het bestand wordt uit dit document verwijderd. Plekken die het gebruiken, tonen niets. "Ongedaan maken" haalt het niet terug.',
        'A document can keep pictures, stylesheets, scripts, fonts, PDFs, audio and video': 'Een document kan afbeeldingen, stylesheets, scripts, lettertypen, PDF\'s, audio en video bevatten',
        'The file is larger than 12 MB': 'Het bestand is groter dan 12 MB',
        'The file could not be read': 'Het bestand kon niet worden gelezen',
        'The code is now a complete page': 'De code is nu een volledige pagina',
        'The code is tidy already': 'De code is al netjes',
        'Code tidied up': 'Code opgeschoond',
        'This document is empty already': 'Dit document is al leeg',
        'Everything between <body> and </body> is removed; the head (title, styles, meta tags) stays. "Undo" brings it back as long as the page is open.':
            'Alles tussen <body> en </body> wordt verwijderd; de head (titel, stijlen, metatags) blijft. "Ongedaan maken" haalt het terug zolang de pagina open is.',
        'Everything is removed. "Undo" brings it back as long as the page is open.': 'Alles wordt verwijderd. "Ongedaan maken" haalt het terug zolang de pagina open is.',
        'Start over': 'Opnieuw beginnen',
        'The file is larger than 8 MB': 'Het bestand is groter dan 8 MB',
        'HTML pasted from the clipboard - "Undo" brings the old code back': 'HTML geplakt vanaf het klembord - "Ongedaan maken" haalt de oude code terug',
        'This browser does not allow printing here': 'Deze browser staat hier geen afdrukken toe',
        'Downloaded': 'Gedownload',
        'ZIP downloaded: .html, its files, the page as one file and the text': 'ZIP gedownload: .html, zijn bestanden, de pagina als één bestand en de tekst',
        'Copied to the clipboard': 'Naar het klembord gekopieerd',
        'This browser does not allow copying this': 'Deze browser staat niet toe dit te kopiëren',
        'Code copied': 'Code gekopieerd',
        '.html with its files downloaded (ZIP)': '.html met zijn bestanden gedownload (ZIP)',
        '.html downloaded': '.html gedownload',
        'Add': 'Toevoegen',
        'The document and its files are removed from this browser for good. Download it first if you want to keep a copy.':
            'Het document en zijn bestanden worden definitief uit deze browser verwijderd. Download het eerst als je een kopie wilt bewaren.',

        /* ---------- Problems the editor finds (html.js) ---------- */
        'The comment <!-- is never closed - add -->': 'Het commentaar <!-- wordt nooit gesloten - voeg --> toe',
        '<img> without alt - describe the picture (alt="…"), or alt="" if it only decorates': '<img> zonder alt - beschrijf de afbeelding (alt="…"), of alt="" als ze alleen decoratief is',
        'No <!DOCTYPE html> at the top - browsers show the page in an older mode (quirks mode)': 'Geen <!DOCTYPE html> bovenaan - browsers tonen de pagina in een oudere modus (quirks mode)',

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
        'The print dialog opens with the page as it is in the preview (without scripts). Choose <b>Save as PDF</b> (or "Microsoft Print to PDF") as the printer. In Chrome and Edge, untick "Headers and footers" and tick "Background graphics" if the page has colors. The text in the PDF can be selected.':
            'Het afdrukvenster opent met de pagina zoals in het voorbeeld (zonder scripts). Kies <b>Opslaan als PDF</b> (of "Microsoft Print to PDF") als printer. Zet in Chrome en Edge het vinkje bij "Kop- en voetteksten" uit en bij "Achtergrondafbeeldingen" aan als de pagina kleuren heeft. De tekst in de PDF kan worden geselecteerd.',

        /* Document tab without a head */
        'This code has no <code>&lt;html&gt;</code> with a <code>&lt;head&gt;</code>, so it is shown as a part of a page. Title, language and description belong in the head.':
            'Deze code heeft geen <code>&lt;html&gt;</code> met een <code>&lt;head&gt;</code>, dus wordt hij getoond als deel van een pagina. Titel, taal en beschrijving horen in de head.',

        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Klik op <b>Prompt kopiëren</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'De AI antwoordt met een link: klik erop, of plak het hele antwoord hieronder. <b>Ongedaan maken</b> draait het terug.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'De AI antwoordt met een link: <b>plak het hele antwoord hieronder</b> (een aangeklikte link opent een aparte editor). <b>Ongedaan maken</b> draait het terug.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'De editor kan elke opgeslagen versie naar je eigen server sturen (een <b>webhook</b>), zodat je werk bewaard wordt waar jij dat wilt. Er wordt niets verzonden tot je hier een adres invoert.',
        'Also possible: <code>?src=&lt;URL of an .html file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>htmleditor:ai</code>, <code>htmleditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Ook mogelijk: <code>?src=&lt;URL van een .html-bestand&gt;</code> opent een bestand, <code>&amp;webhook=&lt;URL&gt;</code> slaat dit document daar op. De editor kan ook in een eigen venster openen (<code>?embed=window</code>), en je pagina kan hem een eigen AI-prompt en een sessiesleutel geven, zodat de AI het resultaat naar je server stuurt (<code>htmleditor:ai</code>, <code>htmleditor:key-request</code>) - zie "De editor op je eigen website gebruiken" onder de editor. Details staan in <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> HTML on the left - or start with <b>New</b> and one of the templates. The preview shows the page as you type.':
            '<b>Schrijf</b> links HTML - of begin met <b>Nieuw</b> en een van de sjablonen. Het voorbeeld toont de pagina terwijl je typt.',
        '<b>Click text in the preview</b> to edit it right there. Enter starts a new paragraph; Shift+Enter inserts a line break. Ctrl+Enter (Cmd+Enter on macOS) or a click elsewhere applies the edit; Escape cancels. Each edit is one step for Undo. A click on a picture or any other element jumps to its place in the code. The element at the code cursor gets a frame in the preview.':
            '<b>Klik op tekst in het voorbeeld</b> om hem daar meteen te bewerken. Enter begint een nieuwe alinea; Shift+Enter voegt een regeleinde in. Ctrl+Enter (Cmd+Enter op macOS) of een klik ergens anders past de bewerking toe; Escape annuleert. Elke bewerking kun je in één stap ongedaan maken. Een klik op een afbeelding of een ander element springt naar de plek in de code. Het element bij de cursor van de code krijgt een kader in het voorbeeld.',
        '<b>Document</b> on the right sets title, language and description of the page; <b>Insert</b> has ready-made pieces (headings, lists, tables, media, form fields, meta tags); <b>Files</b> holds the pictures, stylesheets and fonts of the page; <b>Outline</b> lists the headings.':
            '<b>Document</b> rechts stelt titel, taal en beschrijving van de pagina in; <b>Invoegen</b> heeft kant-en-klare stukken (koppen, lijsten, tabellen, media, formuliervelden, metatags); <b>Bestanden</b> bevat de afbeeldingen, stylesheets en lettertypen van de pagina; <b>Overzicht</b> toont de koppen.',
        'Problems in the code (an unclosed <code>&lt;div&gt;</code>, a picture without <code>alt</code>, a missing file) are listed above the code - click one to go there.':
            'Problemen in de code (een niet gesloten <code>&lt;div&gt;</code>, een afbeelding zonder <code>alt</code>, een ontbrekend bestand) staan boven de code - klik op een probleem om ernaartoe te gaan.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser.':
            '<b>Mijn documenten</b> (de mapknop linksboven) toont elk document dat in deze browser wordt bewaard.',
        '<b>Export</b> makes an HTML file, one HTML file with the files inside, a ZIP, a PDF (via the print dialog) or plain text. <b>Download .html</b> saves the code.':
            '<b>Exporteren</b> maakt een HTML-bestand, één HTML-bestand met de bestanden erin, een ZIP, een PDF (via het afdrukvenster) of platte tekst. <b>.html downloaden</b> slaat de code op.',
        'The preview shows HTML and CSS as the browser does, but scripts and <code>on…</code> attributes never run and links do not navigate - so any page is safe to open.':
            'Het voorbeeld toont HTML en CSS zoals de browser dat doet, maar scripts en <code>on…</code>-attributen worden nooit uitgevoerd en links navigeren niet - zo kun je elke pagina veilig openen.',
        'Comment lines in or out (<code>&lt;!-- --&gt;</code>)': 'Regels in of uit commentaar zetten (<code>&lt;!-- --&gt;</code>)',
        'Typing <code>&gt;</code> at the end of a start tag adds its end tag, and <kbd>Enter</kbd> between the two indents the new line. Typing <code>&lt;/</code> closes the element that is open.':
            'Als je <code>&gt;</code> typt aan het einde van een begintag, wordt de eindtag toegevoegd, en <kbd>Enter</kbd> tussen de twee laat de nieuwe regel inspringen. Als je <code>&lt;/</code> typt, wordt het open element gesloten.',
    },

    patterns: [
        /* ---------- Status lines ---------- */
        ['^(\\d+) lines · ([\\d.]+ K?B)$', (m, l, kb) => `${l} ${getPlural(l, 'regel', 'regels')} · ${formatSize(kb)}`],
        ['^\\.html and (\\d+) (?:file|files)$', (m, k) => `.html en ${k} ${getPlural(k, 'bestand', 'bestanden')}`],
        ['^([\\d,]+) bytes$', (m, b) => `${formatThousands(b)} bytes`],
        ['^\\d{1,3}(?:,\\d{3})+$', m => formatThousands(m)],

        /* Problems above the code */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'fout', 'fouten')}`],
        ['^· (\\d+) (?:note|notes)$', (m, k) => `· ${k} ${getPlural(k, 'opmerking', 'opmerkingen')}`],
        ['^(\\d+) (?:note|notes)$', (m, k) => `${k} ${getPlural(k, 'opmerking', 'opmerkingen')}`],
        ['^Line (\\d+)$', 'Regel $1'],
        ['^The preview failed: (.*)$', 'Het voorbeeld is mislukt: $1'],
        ['^The tag <(\\S+) is never closed with >$', 'De tag <$1 wordt nooit gesloten met >'],
        ['^<(\\S+)> is obsolete - use CSS or a current element instead$', '<$1> is verouderd - gebruik in plaats daarvan CSS of een actueel element'],
        ['^Unknown element <(\\S+)>$', 'Onbekend element <$1>'],
        ['^The attribute (\\S+) is given twice in <(\\S+)> - the browser uses the first one$', 'Het attribuut $1 staat twee keer in <$2> - de browser gebruikt het eerste'],
        ['^The id "(.*)" is used twice$', 'De id "$1" wordt twee keer gebruikt'],
        ['^<(\\S+)\\/> - in HTML only void elements \\(like <br>\\) close themselves; add <\\/(\\S+)>$', '<$1/> - in HTML sluiten alleen lege elementen (zoals <br>) zichzelf; voeg </$2> toe'],
        ['^<(\\S+)> is never closed - add <\\/(\\S+)>$', '<$1> wordt nooit gesloten - voeg </$2> toe'],
        ['^<\\/(\\S+)> - <(\\S+)> has no end tag$', '</$1> - <$2> heeft geen eindtag'],
        ['^<\\/(\\S+)> without an opening <(\\S+)>$', '</$1> zonder openende <$2>'],
        ['^<(\\S+)> is not closed before <\\/(\\S+)> - add <\\/(\\S+)> first$', '<$1> wordt niet gesloten vóór </$2> - voeg eerst </$3> toe'],
        ['^The file "(.+)" is missing - add it in the Files tab \\(or drop it into the editor\\)$', 'Het bestand "$1" ontbreekt - voeg het toe in het tabblad Bestanden (of zet het in de editor neer)'],

        /* ---------- Insert tab ---------- */
        ['^Insert (&[#\\w]+;)$', '$1 invoegen'],

        /* ---------- Files tab ---------- */
        ['^(\\d+) (?:file|files) · (.+)$', (m, k, s) => `${k} ${getPlural(k, 'bestand', 'bestanden')} · ${formatSize(s)}`],
        ['^Files belong to “(.*)” and stay in your browser\\. Drop or paste pictures, stylesheets or fonts anywhere in the editor, or add them here; the code uses them by their name, e\\.g\\.$',
            'Bestanden horen bij "$1" en blijven in je browser. Zet afbeeldingen, stylesheets of lettertypen ergens in de editor neer of plak ze, of voeg ze hier toe; de code gebruikt ze met hun naam, bijv.'],
        ['^Choose the file for (.+)$', 'Het bestand voor $1 kiezen'],
        ['^Insert (.+) at the cursor$', '$1 bij de cursor invoegen'],
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
        ['^"(.+)" now has the new content$', '"$1" heeft nu de nieuwe inhoud'],
        ['^File "(.+)" added to "(.+)"$', 'Bestand "$1" toegevoegd aan "$2"'],
        ['^"(.+)" is linked already$', '"$1" is al gekoppeld'],
        ['^"(.+)" is linked$', '"$1" is gekoppeld'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '"$1" is nu leeg - "Ongedaan maken" haalt het terug'],
        ['^"(.+)" opened$', '"$1" geopend'],
        ['^New document "(.+)" - your other documents are under "My documents"$', 'Nieuw document "$1" - je andere documenten staan onder "Mijn documenten"'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$', 'Nieuw document "$1" van de AI - je andere documenten zijn ongewijzigd'],
        ['^Opened "(.+)" - it is now in "My documents"$', '"$1" geopend - het staat nu in "Mijn documenten"'],
        ['^Opened "(.+)" with (\\d+) (?:file|files)$', (m, f, k) => `"${f}" geopend met ${k} ${getPlural(k, 'bestand', 'bestanden')}`],
        ['^"(.+)" could not be opened: (.*)$', (m, f, why) => `"${f}" kon niet worden geopend: ${ZIP[why] || why}`],
        ['^Document received - the editor found (\\d+) (?:problem|problems), see above the code$', (m, k) => `Document ontvangen - de editor heeft ${k} ${getPlural(k, 'probleem', 'problemen')} gevonden, zie boven de code`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '"$1" gewijzigd door de AI - "Ongedaan maken" draait het terug'],
        ['^"(.+)" duplicated$', '"$1" gedupliceerd'],
        ['^Delete "(.+)"\\?$', '"$1" verwijderen?'],
        ['^"(.+)" deleted$', '"$1" verwijderd'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', '$1 openen'],
    ],
};
