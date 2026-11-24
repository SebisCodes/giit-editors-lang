/* German texts of the HTML editor: the bar, the work area (code, preview,
   document settings, insert, files, outline), its dialogs and messages,
   and the problems the editor finds in the code. What all editors share is
   in common.js; how the dictionaries are used is described in
   i18n.js. Names of documents, files, elements and attributes stay as they
   are: the patterns copy them into the German text. */

import { formatTime, formatSize, formatThousands, getPlural } from './format.js';

/* "1,234" -> "1’234" (Swiss thousands separator) */

/* "123 bytes" / "1.5 KB" -> German unit */

/* When a document was last changed (files.js): "just now", "5 min ago", "Oct 25, 2026" … */

/* Reasons a ZIP could not be opened (app.js openZip) */
const ZIP = { 'it is not a ZIP file': 'es ist keine ZIP-Datei', 'there is no .html file in it': 'es ist keine .html-Datei darin' };

export default {
    text: {
        // Editing in place: Enter and Shift+Enter
        "Editing in the preview - Enter: new paragraph, Shift+Enter: new line, Ctrl+Enter or a click elsewhere keeps it, Escape cancels": "Bearbeiten in der Vorschau - Enter: neuer Absatz, Shift+Enter: neue Zeile, Ctrl+Enter oder ein Klick daneben übernimmt, Escape bricht ab",
        /* ---------- Top bar ---------- */
        'HTML Editor - home': 'HTML-Editor - Startseite',
        'HTML Editor': 'HTML-Editor',
        'File': 'Datei',
        'My documents (Ctrl+O)': 'Meine Dokumente (Ctrl+O)',
        'My documents': 'Meine Dokumente',
        'New document, or start this one over': 'Neues Dokument oder dieses neu beginnen',
        'New': 'Neu',
        'New blank page': 'Neue leere Seite',
        'An empty HTML page - your other documents stay as they are': 'Eine leere HTML-Seite - deine anderen Dokumente bleiben, wie sie sind',
        'Landing page': 'Landingpage',
        'A big header, three features and a footer': 'Ein grosser Kopfbereich, drei Vorteile und ein Fussbereich',
        'Article': 'Artikel',
        'Title, sections, a quote and a list': 'Titel, Abschnitte, ein Zitat und eine Liste',
        'Contact form': 'Kontaktformular',
        'Name, email and message with labels': 'Name, E-Mail und Nachricht mit Beschriftungen',
        'Email newsletter': 'E-Mail-Newsletter',
        'An email layout with a table': 'Ein E-Mail-Layout mit einer Tabelle',
        'The welcome example': 'Das Willkommensbeispiel',
        'Shows what the editor can do': 'Zeigt, was der Editor kann',
        'Start this document over': 'Dieses Dokument neu beginnen',
        'Keeps the head, empties the body - "Undo" brings it back': 'Behält den Kopf (head), leert den Inhalt (body) - «Rückgängig» holt ihn zurück',
        'Open an .html file (or a picture, stylesheet or ZIP) from your computer (you can also drag it into the window)':
            'Eine .html-Datei (oder ein Bild, ein Stylesheet oder ein ZIP) von deinem Computer öffnen (du kannst sie auch ins Fenster ziehen)',
        'Open file…': 'Datei öffnen …',
        'Undo the last change (Ctrl+Z)': 'Die letzte Änderung rückgängig machen (Ctrl+Z)',
        'Undo': 'Rückgängig',
        'Redo the change you just undid (Ctrl+Y)': 'Die eben rückgängig gemachte Änderung wiederholen (Ctrl+Y)',
        'Redo': 'Wiederholen',
        'Output': 'Ausgabe',
        'Color theme': 'Farbschema',
        'Light theme': 'Helles Farbschema',
        'Dark theme': 'Dunkles Farbschema',
        'Same as your system setting': 'Wie in deinen Systemeinstellungen',
        'Automatic theme (system setting)': 'Automatisches Farbschema (Systemeinstellung)',
        'Let any AI write in this editor': 'Eine beliebige KI in diesem Editor schreiben lassen',
        'AI Assistant': 'KI-Assistent',
        'Save to your own server and embed the editor in your website': 'Auf deinem eigenen Server speichern und den Editor in deine Website einbetten',
        'Save to server': 'Auf Server speichern',
        'How it works and keyboard shortcuts (?)': 'Bedienung und Tastenkürzel (?)',
        'Help': 'Hilfe',
        'Save the page as an .html file - with its files as ZIP (Ctrl+S)': 'Die Seite als .html-Datei speichern - mit ihren Dateien als ZIP (Ctrl+S)',
        'Download .html': '.html herunterladen',
        'HTML, one file with everything inside, ZIP, PDF and text (Ctrl+E)': 'HTML, eine Datei mit allem darin, ZIP, PDF und Text (Ctrl+E)',
        'Export…': 'Exportieren …',

        /* ---------- Views and work area ---------- */
        'View': 'Ansicht',
        'Edit': 'Bearbeiten',
        'Side panel': 'Seitenleiste',
        'Show or hide the side panel': 'Seitenleiste ein- oder ausblenden',
        'Examples': 'Beispiele',
        'Template': 'Vorlage',
        'View of the preview': 'Ansicht der Vorschau',
        'The template with its placeholders as written': 'Die Vorlage mit ihren Platzhaltern, wie sie geschrieben sind',
        'The examples could not be filled in - the preview shows the template': 'Die Beispiele konnten nicht eingesetzt werden - die Vorschau zeigt die Vorlage',
        'Placeholders': 'Platzhalter',
        'The placeholders of the template - a click on one puts its tag at the cursor': 'Die Platzhalter der Vorlage - ein Klick setzt das zugehörige Tag beim Cursor ein',
        'Shown': 'Angezeigt',
        'Hidden': 'Ausgeblendet',
        'example view': 'Beispielansicht',
        'template view': 'Vorlagenansicht',
        'The page filled with the examples': 'Die mit den Beispielen ausgefüllte Seite',
        'Preview': 'Vorschau',
        'Document': 'Dokument',
        'HTML code': 'HTML-Code',
        'Copy the HTML code to the clipboard': 'Den HTML-Code in die Zwischenablage kopieren',
        'Copy code': 'Code kopieren',
        'Copy': 'Kopieren',
        'Indent every line by the depth of its elements': 'Jede Zeile nach der Tiefe ihrer Elemente einrücken',
        'Tidy up': 'Aufräumen',
        'Drag to change the width of the code area': 'Ziehen, um die Breite des Codebereichs zu ändern',
        'Drag to change the width': 'Ziehen, um die Breite zu ändern',
        'Formatting': 'Formatierung',
        'Bold (Ctrl+B)': 'Fett (Ctrl+B)',
        'Bold': 'Fett',
        'Italic (Ctrl+I)': 'Kursiv (Ctrl+I)',
        'Italic': 'Kursiv',
        'Underline (Ctrl+U)': 'Unterstrichen (Ctrl+U)',
        'Underline': 'Unterstrichen',
        'Heading': 'Überschrift',
        'Bulleted list': 'Aufzählung',
        'Numbered list': 'Nummerierte Liste',
        'Table': 'Tabelle',
        'Picture': 'Bild',
        'Width of the preview': 'Breite der Vorschau',
        'As wide as the preview': 'So breit wie die Vorschau',
        'Full width': 'Volle Breite',
        'Tablet (768 pixels wide)': 'Tablet (768 Pixel breit)',
        'Tablet width': 'Tablet-Breite',
        'Phone (390 pixels wide)': 'Handy (390 Pixel breit)',
        'Phone width': 'Handy-Breite',
        'Preview of the page: click text to edit it, or anything else to jump to its place in the code':
            'Vorschau der Seite: Klicke auf Text, um ihn zu bearbeiten, oder auf etwas anderes, um zu seiner Stelle im Code zu springen',
        'Preview of the page': 'Vorschau der Seite',
        'Updating…': 'Wird aktualisiert …',
        'Title, language, description and the stylesheets of the page': 'Titel, Sprache, Beschreibung und die Stylesheets der Seite',
        'Ready-made pieces: structure, text, lists, media, forms, head': 'Fertige Bausteine: Struktur, Text, Listen, Medien, Formulare, Kopf',
        'Insert': 'Einfügen',
        'The pictures and other files of this document': 'Die Bilder und anderen Dateien dieses Dokuments',
        'Files': 'Dateien',
        'The headings of the page': 'Die Überschriften der Seite',
        'Outline': 'Gliederung',
        'The headings of the page. Click one to go there in the code and in the preview.':
            'Die Überschriften der Seite. Klicke auf eine, um im Code und in der Vorschau dorthin zu gehen.',
        'No headings yet - add one with <h1> … <h6>.': 'Noch keine Überschriften - füge eine mit <h1> … <h6> hinzu.',
        'Open it here': 'Hier öffnen',
        'Drop the .html file, picture or stylesheet here': 'Die .html-Datei, das Bild oder das Stylesheet hier ablegen',

        /* Problems above the code */
        'Hide': 'Ausblenden',
        'Show': 'Anzeigen',

        /* ---------- Insert tab ---------- */
        'Structure': 'Struktur',
        'Heading 1': 'Überschrift 1',
        'Heading 2': 'Überschrift 2',
        'Heading 3': 'Überschrift 3',
        'Heading 4': 'Überschrift 4',
        'Paragraph': 'Absatz',
        'Section': 'Abschnitt',
        'Header': 'Kopfbereich',
        'Navigation bar': 'Navigationsleiste',
        'Main content': 'Hauptinhalt',
        'Footer': 'Fussbereich',
        'Box': 'Kasten',
        'Fold-out (details)': 'Aufklappbar (details)',
        'Dividing line': 'Trennlinie',
        'Apply page breaks': 'Seitenumbrüche anwenden',
        'New page': 'Neue Seite',
        'Line break': 'Zeilenumbruch',
        'Comment': 'Kommentar',
        'Lists and tables': 'Listen und Tabellen',
        '• Bulleted list': '• Aufzählung',
        '1. Numbered list': '1. Nummerierung',
        'Description list': 'Beschreibungsliste',
        'Highlighted': 'Hervorgehoben',
        'Small print': 'Kleingedrucktes',
        'Code in the text': 'Code im Text',
        'x² Superscript': 'x² Hochgestellt',
        'x₁ Subscript': 'x₁ Tiefgestellt',
        'Quote': 'Zitat',
        'Program code': 'Programmcode',
        'Inline part (span)': 'Teil im Text (span)',
        'Media': 'Medien',
        'Figure with caption': 'Abbildung mit Beschriftung',
        'Video player': 'Videoplayer',
        'Audio player': 'Audioplayer',
        'The files of the page have their own tab:': 'Die Dateien der Seite haben einen eigenen Tab:',
        'Forms': 'Formulare',
        'Form': 'Formular',
        'Text field': 'Textfeld',
        'Email field': 'E-Mail-Feld',
        'Text area': 'Textbereich',
        'Choice list': 'Auswahlliste',
        'Tick box': 'Kontrollkästchen',
        'Radio buttons': 'Optionsfelder',
        'Button': 'Schaltfläche',
        'Head': 'Kopf (head)',
        'Character set': 'Zeichensatz',
        'The character set: <meta charset="utf-8">': 'Der Zeichensatz: <meta charset="utf-8">',
        'Fits phone screens: <meta name="viewport">': 'Passt auf Handy-Bildschirme: <meta name="viewport">',
        'Description': 'Beschreibung',
        'For search engines: <meta name="description">': 'Für Suchmaschinen: <meta name="description">',
        'Shared links': 'Geteilte Links',
        'Title, description and picture for shared links (Open Graph)': 'Titel, Beschreibung und Bild für geteilte Links (Open Graph)',
        'Stylesheet file': 'Stylesheet-Datei',
        'A stylesheet file: <link rel="stylesheet">': 'Eine Stylesheet-Datei: <link rel="stylesheet">',
        'Style block': 'Style-Block',
        'CSS in the page: <style> … </style>': 'CSS in der Seite: <style> … </style>',
        'Tab icon': 'Tab-Symbol',
        'The icon in the browser tab: <link rel="icon">': 'Das Symbol im Browser-Tab: <link rel="icon">',
        'Special characters': 'Sonderzeichen',
        'Insert &nbsp; (no-break space)': '&nbsp; einfügen (geschütztes Leerzeichen)',
        'Insert &shy; (soft hyphen)': '&shy; einfügen (weiches Trennzeichen)',

        /* ---------- Files tab ---------- */
        'Add files…': 'Dateien hinzufügen …',
        'No files yet': 'Noch keine Dateien',
        'Missing in this document': 'Fehlen in diesem Dokument',
        'Add file…': 'Datei hinzufügen …',
        'Show where it is used': 'Zeigen, wo sie verwendet wird',
        'A picture (img) at the cursor': 'Ein Bild (img) beim Cursor',
        'A link to the stylesheet in the head': 'Ein Link auf das Stylesheet im Kopf (head)',
        'A reference to the file at the cursor': 'Ein Verweis auf die Datei beim Cursor',
        'A figure with caption at the cursor': 'Eine Abbildung mit Beschriftung beim Cursor',
        'As figure': 'Als Abbildung',
        'Rename - the code is changed along': 'Umbenennen - der Code wird mit angepasst',
        'Rename': 'Umbenennen',
        'Choose another file, keep the name': 'Eine andere Datei wählen, den Namen behalten',
        'Replace': 'Ersetzen',
        'Download the file': 'Die Datei herunterladen',
        'Download': 'Herunterladen',
        'Remove the file from this document': 'Die Datei aus diesem Dokument entfernen',
        'Remove': 'Entfernen',
        'New name': 'Neuer Name',

        /* ---------- Document tab ---------- */
        'Title': 'Titel',
        '(in the browser tab and in search results)': '(im Browser-Tab und in Suchergebnissen)',
        'Language': 'Sprache',
        '(for search engines)': '(für Suchmaschinen)',
        'Author': 'Autor',
        'Characters as UTF-8 (meta charset)': 'Zeichen als UTF-8 (meta charset)',
        'Fits phone screens (meta viewport)': 'Passt auf Handy-Bildschirme (meta viewport)',
        'Linked stylesheets': 'Verknüpfte Stylesheets',
        'No stylesheet is linked.': 'Kein Stylesheet ist verknüpft.',
        'Add a .css file in the Files tab to link it here.': 'Füge im Tab «Dateien» eine .css-Datei hinzu, um sie hier zu verknüpfen.',
        'Stylesheet of this document': 'Stylesheet dieses Dokuments',
        'Link it': 'Verknüpfen',
        'from the web': 'aus dem Web',
        'a file of this document': 'eine Datei dieses Dokuments',
        'missing': 'fehlt',
        'Show it in the code': 'Im Code zeigen',
        'Not set': 'Nicht angegeben',
        'English (en)': 'Englisch (en)',
        'English, US (en-US)': 'Englisch, USA (en-US)',
        'English, UK (en-GB)': 'Englisch, Grossbritannien (en-GB)',
        'German (de)': 'Deutsch (de)',
        'German, Switzerland (de-CH)': 'Deutsch, Schweiz (de-CH)',
        'German, Germany (de-DE)': 'Deutsch, Deutschland (de-DE)',
        'French (fr)': 'Französisch (fr)',
        'Italian (it)': 'Italienisch (it)',
        'Spanish (es)': 'Spanisch (es)',
        'Portuguese (pt)': 'Portugiesisch (pt)',
        'Dutch (nl)': 'Niederländisch (nl)',
        'elements · about': 'Elemente · etwa',
        'element · about': 'Element · etwa',
        'words ·': 'Wörter ·',
        'headings ·': 'Überschriften ·',
        'heading ·': 'Überschrift ·',
        'files': 'Dateien',
        'file': 'Datei',
        'Make it a complete page': 'Eine vollständige Seite daraus machen',

        /* ---------- Export ---------- */
        'Close': 'Schliessen',
        'File name': 'Dateiname',
        'Page': 'Seite',
        'HTML page (.html)': 'HTML-Seite (.html)',
        'One HTML file with its files inside': 'Eine HTML-Datei mit ihren Dateien darin',
        'HTML with its files (ZIP)': 'HTML mit seinen Dateien (ZIP)',
        'PDF (print or save as PDF)': 'PDF (drucken oder als PDF speichern)',
        'Plain text': 'Reiner Text',
        'Result': 'Ergebnis',
        'Download everything at once: .html, its files, the HTML with the files inside and the text':
            'Alles auf einmal herunterladen: .html, ihre Dateien, das HTML mit den Dateien darin und den Text',
        'All formats (ZIP)': 'Alle Formate (ZIP)',
        'Print / Save as PDF': 'Drucken / als PDF speichern',
        '(The page with its files inside is created when you download or copy it.)':
            '(Die Seite mit ihren Dateien darin entsteht, wenn du sie herunterlädst oder kopierst.)',

        /* ---------- My documents ---------- */
        'Search by name': 'Nach Namen suchen',
        'Search your documents': 'Deine Dokumente durchsuchen',
        'Open an .html file from your computer as a new document': 'Eine .html-Datei von deinem Computer als neues Dokument öffnen',
        'New document': 'Neues Dokument',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Klicke auf ein Dokument, um es zu öffnen. Die Dokumente sind nur in diesem Browser gespeichert - nichts wird hochgeladen. Wenn du die Website-Daten des Browsers löschst, sind sie weg: Lade also die herunter, die du behalten willst.',
        'Download every document as an .html file (with its files) in one ZIP': 'Jedes Dokument als .html-Datei (mit seinen Dateien) in einem ZIP herunterladen',
        'Download all (ZIP)': 'Alle herunterladen (ZIP)',
        'Duplicate': 'Duplizieren',
        'Download as .html': 'Als .html herunterladen',
        'Delete': 'Löschen',
        'This document is open': 'Dieses Dokument ist offen',
        'Click to open this document': 'Klicken, um dieses Dokument zu öffnen',
        'No documents yet.': 'Noch keine Dokumente.',

        /* ---------- AI Assistant ---------- */
        'Any AI can write with you - ChatGPT, Claude, Gemini, Copilot.': 'Jede KI kann mit dir schreiben - ChatGPT, Claude, Gemini, Copilot.',
        'Connected AI': 'Verbundene KI',
        'Connected to': 'Verbunden mit',
        'the AI sends its result there, and it opens here.': 'die KI schickt ihr Ergebnis dorthin, und es öffnet sich hier.',
        'What': 'Was',
        'tells the AI': 'der KI sagt',
        'The AI should': 'Die KI soll',
        'Change “': '«',
        '”': '» ändern',
        'Make a new document': 'Ein neues Dokument erstellen',
        'The AI\'s answer (or press Ctrl+V anywhere):': 'Die Antwort der KI (oder drücke irgendwo Ctrl+V):',
        'The document travels in the link after the “#”, which no server sees. What you paste into your AI is handled by its provider.':
            'Das Dokument reist im Link nach dem «#», den kein Server sieht. Was du in deine KI einfügst, verarbeitet ihr Anbieter.',
        'The prompt - copy it with Ctrl+C': 'Der Prompt - kopiere ihn mit Ctrl+C',
        'Copy prompt': 'Prompt kopieren',
        /* the step with the link, also when the editor sets it anew (text by text) */
        'The AI answers with a link: click it, or paste the whole answer below.': 'Die KI antwortet mit einem Link: Klicke darauf, oder füge die ganze Antwort unten ein.',
        'takes it back.': 'nimmt es zurück.',
        'The AI answers with a link:': 'Die KI antwortet mit einem Link:',
        'paste its whole answer below': 'füge ihre ganze Antwort unten ein',
        '(a clicked link opens a separate editor).': '(ein angeklickter Link öffnet einen eigenen Editor).',
        '(no key yet)': '(noch kein Schlüssel)',
        '(key valid while the editor is open)': '(der Schlüssel gilt, solange der Editor offen ist)',
        'The link could not be read': 'Der Link liess sich nicht lesen',
        'The document in this link is incomplete or damaged. If the AI\'s link was split over several lines (as in a terminal), copy the whole answer and paste it into the editor with Ctrl+V - the editor joins the lines.':
            'Das Dokument in diesem Link ist unvollständig oder beschädigt. Wenn der Link der KI über mehrere Zeilen verteilt war (wie in einem Terminal), kopiere die ganze Antwort und füge sie mit Ctrl+V in den Editor ein - der Editor fügt die Zeilen zusammen.',
        'Loading…': 'Wird geladen …',
        'Taken over by your editor': 'Von deinem Editor übernommen',
        'The document is now in the HTML Editor tab you already had open. Switch to that tab, or open it here.':
            'Das Dokument ist jetzt im Tab mit dem HTML-Editor, den du schon offen hattest. Wechsle zu diesem Tab oder öffne es hier.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)': 'Kopieren ist hier nicht erlaubt - der Text ist unten markiert: drücke Ctrl+C (⌘C)',
        'Paste it into your AI and say what it should write.': 'Füge ihn in deine KI ein und sag, was sie schreiben soll.',
        'Prompt copied - paste it into your AI and say what it should write': 'Prompt kopiert - füge ihn in deine KI ein und sag, was sie schreiben soll',
        'This link is incomplete or damaged - please ask the AI to send it again': 'Dieser Link ist unvollständig oder beschädigt - bitte die KI, ihn nochmals zu senden',

        /* ---------- Save to your server ---------- */
        'Save to your server': 'Auf deinem Server speichern',
        'Webhook address': 'Webhook-Adresse',
        'https://example.com/api/html': 'https://beispiel.ch/api/html',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(optional, wird als «Authorization: Bearer …» gesendet; bleibt nur, bis dieser Tab geschlossen wird)',
        'Send automatically a few seconds after each change (otherwise only when you click': 'Automatisch ein paar Sekunden nach jeder Änderung senden (sonst nur, wenn du auf',
        'or press Ctrl+S)': 'klickst oder Ctrl+S drückst)',
        'Only for “': 'Nur für «',
        '” (other documents use the general address)': '» (andere Dokumente nutzen die allgemeine Adresse)',
        'What your server receives': 'Was dein Server erhält',
        'A POST request with JSON (your server must allow CORS from https://html.giit.ch):': 'Eine POST-Anfrage mit JSON (dein Server muss CORS von https://html.giit.ch erlauben):',
        'Embed the editor in your website': 'Den Editor in deine Website einbetten',
        'Send now': 'Jetzt senden',
        'Save setting': 'Einstellung speichern',

        /* ---------- Help ---------- */
        'How it works': 'So funktioniert es',
        'Keyboard shortcuts': 'Tastenkürzel',
        'Bold / italic / underline the selected text': 'Den markierten Text fett / kursiv / unterstrichen',
        'Show the cursor\'s place in the preview': 'Die Stelle des Cursors in der Vorschau zeigen',
        'Indent / outdent': 'Einrücken / ausrücken',
        'Undo / redo': 'Rückgängig / wiederholen',
        'Save (download .html, or to your server) / export': 'Speichern (.html herunterladen oder auf deinem Server) / exportieren',
        'Print / save as PDF': 'Drucken / als PDF speichern',

        /* ---------- Messages ---------- */
        'The browser storage is full - download and delete documents under "My documents"': 'Der Browserspeicher ist voll - lade Dokumente unter «Meine Dokumente» herunter und lösche sie',
        'The browser storage is full - delete or download documents under "My documents" first': 'Der Browserspeicher ist voll - lösche oder lade zuerst Dokumente unter «Meine Dokumente» herunter',
        'The browser storage is full - delete or download some documents first': 'Der Browserspeicher ist voll - lösche oder lade zuerst ein paar Dokumente herunter',
        'The browser storage is full': 'Der Browserspeicher ist voll',
        'Nothing to undo': 'Nichts rückgängig zu machen',
        'Nothing to redo': 'Nichts zu wiederholen',
        'The code changed meanwhile - the edit was not used': 'Der Code hat sich inzwischen geändert - die Änderung wurde nicht übernommen',
        'The code changed meanwhile - the picture was not moved': 'Der Code hat sich inzwischen geändert - das Bild wurde nicht verschoben',
        "The code changed meanwhile - the picture was not removed": "Der Code hat sich inzwischen geändert - das Bild wurde nicht entfernt",
        'The file is removed from this document. Places that use it show nothing. "Undo" does not bring it back.':
            'Die Datei wird aus diesem Dokument entfernt. Stellen, die sie verwenden, zeigen nichts mehr. «Rückgängig» holt sie nicht zurück.',
        'A document can keep pictures, stylesheets, scripts, fonts, PDFs, audio and video': 'Ein Dokument kann Bilder, Stylesheets, Skripte, Schriften, PDFs, Audio und Video speichern',
        'The file is larger than 12 MB': 'Die Datei ist grösser als 12 MB',
        'The file could not be read': 'Die Datei liess sich nicht lesen',
        'The code is now a complete page': 'Der Code ist jetzt eine vollständige Seite',
        'The code is tidy already': 'Der Code ist schon aufgeräumt',
        'Code tidied up': 'Code aufgeräumt',
        'This document is empty already': 'Dieses Dokument ist schon leer',
        'Everything between <body> and </body> is removed; the head (title, styles, meta tags) stays. "Undo" brings it back as long as the page is open.':
            'Alles zwischen <body> und </body> wird entfernt; der Kopf (Titel, Styles, Meta-Tags) bleibt. «Rückgängig» holt es zurück, solange die Seite offen ist.',
        'Everything is removed. "Undo" brings it back as long as the page is open.': 'Alles wird entfernt. «Rückgängig» holt es zurück, solange die Seite offen ist.',
        'Start over': 'Neu beginnen',
        'The file is larger than 8 MB': 'Die Datei ist grösser als 8 MB',
        'HTML pasted from the clipboard - "Undo" brings the old code back': 'HTML aus der Zwischenablage eingefügt - «Rückgängig» holt den alten Code zurück',
        'This browser does not allow printing here': 'Dieser Browser erlaubt hier kein Drucken',
        'Downloaded': 'Heruntergeladen',
        'ZIP downloaded: .html, its files, the page as one file and the text': 'ZIP heruntergeladen: .html, ihre Dateien, die Seite als eine Datei und der Text',
        'Copied to the clipboard': 'In die Zwischenablage kopiert',
        'This browser does not allow copying this': 'Dieser Browser erlaubt hier kein Kopieren',
        'Code copied': 'Code kopiert',
        '.html with its files downloaded (ZIP)': '.html mit ihren Dateien heruntergeladen (ZIP)',
        '.html downloaded': '.html heruntergeladen',
        'Add': 'Hinzufügen',
        'The document and its files are removed from this browser for good. Download it first if you want to keep a copy.':
            'Das Dokument und seine Dateien werden endgültig aus diesem Browser entfernt. Lade es zuerst herunter, wenn du eine Kopie behalten willst.',

        /* ---------- Problems the editor finds (html.js) ---------- */
        'The comment <!-- is never closed - add -->': 'Der Kommentar <!-- wird nie geschlossen - füge --> hinzu',
        '<img> without alt - describe the picture (alt="…"), or alt="" if it only decorates': '<img> ohne alt - beschreibe das Bild (alt="…"), oder alt="", wenn es nur schmückt',
        'No <!DOCTYPE html> at the top - browsers show the page in an older mode (quirks mode)': 'Kein <!DOCTYPE html> zuoberst - Browser zeigen die Seite in einem älteren Modus (Quirks-Modus)',
    },

    html: {

        '<b>Export</b> also has <b>Open in another editor</b>: it converts the document and opens it as a new document there. Anything the other format cannot hold is listed first.':

            '<b>Exportieren</b> bietet auch <b>In einem anderen Editor öffnen</b>: Das Dokument wird umgewandelt und dort als neues Dokument geöffnet. Was das andere Format nicht aufnehmen kann, wird vorher aufgelistet.',

        '<b>Insert</b> &gt; <b>New page</b> sets a page break for printing and PDF; the preview shows it as a dashed line. Headings stay with their text and tables and pictures are not cut. In Export, <b>Apply page breaks</b> turns them off for a PDF.':

            '<b>Einfügen</b> &gt; <b>Neue Seite</b> setzt einen Seitenumbruch für Druck und PDF; die Vorschau zeigt ihn als gestrichelte Linie. Überschriften bleiben bei ihrem Text, Tabellen und Bilder werden nicht zerschnitten. In <b>Exportieren</b> schaltet <b>Seitenumbrüche anwenden</b> sie für ein PDF aus.',
        /* Export */
        'The print dialog opens with the page as it is in the preview (without scripts). Choose <b>Save as PDF</b> (or "Microsoft Print to PDF") as the printer. In Chrome and Edge, untick "Headers and footers" and tick "Background graphics" if the page has colors. The text in the PDF can be selected.':
            'Der Druckdialog öffnet sich mit der Seite, wie sie in der Vorschau ist (ohne Skripte). Wähle <b>Als PDF speichern</b> (oder «Microsoft Print to PDF») als Drucker. In Chrome und Edge entferne das Häkchen bei «Kopf- und Fusszeilen» und setze eines bei «Hintergrundgrafiken», wenn die Seite Farben hat. Der Text im PDF lässt sich markieren.',

        /* Document tab without a head */
        'This code has no <code>&lt;html&gt;</code> with a <code>&lt;head&gt;</code>, so it is shown as a part of a page. Title, language and description belong in the head.':
            'Dieser Code hat kein <code>&lt;html&gt;</code> mit einem <code>&lt;head&gt;</code>, darum erscheint er als Teil einer Seite. Titel, Sprache und Beschreibung gehören in den Kopf (head).',

        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Klicke auf <b>Prompt kopieren</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'Die KI antwortet mit einem Link: Klicke darauf, oder füge die ganze Antwort unten ein. <b>Rückgängig</b> nimmt es zurück.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'Die KI antwortet mit einem Link: <b>Füge ihre ganze Antwort unten ein</b> (ein angeklickter Link öffnet einen eigenen Editor). <b>Rückgängig</b> nimmt es zurück.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'Der Editor kann jede gespeicherte Fassung an deinen eigenen Server senden (einen <b>Webhook</b>), damit deine Arbeit dort liegt, wo du sie haben willst. Gesendet wird erst, wenn du hier eine Adresse eingibst.',
        'Also possible: <code>?src=&lt;URL of an .html file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>htmleditor:ai</code>, <code>htmleditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Auch möglich: <code>?src=&lt;URL einer .html-Datei&gt;</code> öffnet eine Datei, <code>&amp;webhook=&lt;URL&gt;</code> speichert dieses Dokument dort. Der Editor kann sich auch in einem eigenen Fenster öffnen (<code>?embed=window</code>), und deine Seite kann ihm einen eigenen KI-Prompt und einen Sitzungsschlüssel übergeben, damit die KI ihr Ergebnis an deinen Server schickt (<code>htmleditor:ai</code>, <code>htmleditor:key-request</code>) - siehe <a href="/de/embed/">Den Editor in deine Website einbinden</a>. Die Einzelheiten stehen in <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> HTML on the left - or start with <b>New</b> and one of the templates. The preview shows the page as you type.':
            '<b>Schreibe</b> HTML links - oder beginne mit <b>Neu</b> und einer der Vorlagen. Die Vorschau zeigt die Seite, während du tippst.',
        '<b>Click text in the preview</b> to edit it right there. Enter starts a new paragraph; Shift+Enter inserts a line break. Ctrl+Enter (Cmd+Enter on macOS) or a click elsewhere applies the edit; Escape cancels. Each edit is one step for Undo. A click on a picture or any other element jumps to its place in the code. The element at the code cursor gets a frame in the preview.':
            '<b>Klicke auf Text in der Vorschau</b>, um ihn direkt dort zu bearbeiten. Enter beginnt einen neuen Absatz; Shift+Enter fügt einen Zeilenumbruch ein. Ctrl+Enter (Cmd+Enter unter macOS) oder ein Klick anderswo übernimmt die Bearbeitung; Escape bricht ab. Jede Änderung lässt sich mit Rückgängig einzeln zurücknehmen. Ein Klick auf ein Bild oder ein anderes Element springt zu seiner Stelle im Code. Das Element beim Code-Cursor bekommt in der Vorschau einen Rahmen.',
        '<b>Document</b> on the right sets title, language and description of the page; <b>Insert</b> has ready-made pieces (headings, lists, tables, media, form fields, meta tags); <b>Files</b> holds the pictures, stylesheets and fonts of the page; <b>Outline</b> lists the headings.':
            '<b>Dokument</b> rechts legt Titel, Sprache und Beschreibung der Seite fest; <b>Einfügen</b> hat fertige Bausteine (Überschriften, Listen, Tabellen, Medien, Formularfelder, Meta-Tags); <b>Dateien</b> enthält die Bilder, Stylesheets und Schriften der Seite; <b>Gliederung</b> listet die Überschriften auf.',
        'Problems in the code (an unclosed <code>&lt;div&gt;</code>, a picture without <code>alt</code>, a missing file) are listed above the code - click one to go there.':
            'Probleme im Code (ein nicht geschlossenes <code>&lt;div&gt;</code>, ein Bild ohne <code>alt</code>, eine fehlende Datei) stehen über dem Code - klicke auf eines, um dorthin zu gehen.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser.':
            '<b>Meine Dokumente</b> (die Ordnerschaltfläche oben links) listet jedes Dokument auf, das in diesem Browser liegt.',
        '<b>Export</b> makes an HTML file, one HTML file with the files inside, a ZIP, a PDF (via the print dialog) or plain text. <b>Download .html</b> saves the code.':
            '<b>Exportieren</b> macht eine HTML-Datei, eine HTML-Datei mit den Dateien darin, ein ZIP, ein PDF (über den Druckdialog) oder reinen Text. <b>.html herunterladen</b> speichert den Code.',
        'The preview shows HTML and CSS as the browser does, but scripts and <code>on…</code> attributes never run and links do not navigate - so any page is safe to open.':
            'Die Vorschau zeigt HTML und CSS wie der Browser, aber Skripte und <code>on…</code>-Attribute laufen nie und Links führen nirgendwohin - so lässt sich jede Seite gefahrlos öffnen.',
        'Comment lines in or out (<code>&lt;!-- --&gt;</code>)': 'Zeilen aus- oder einkommentieren (<code>&lt;!-- --&gt;</code>)',
        'Typing <code>&gt;</code> at the end of a start tag adds its end tag, and <kbd>Enter</kbd> between the two indents the new line. Typing <code>&lt;/</code> closes the element that is open.':
            'Wenn du am Ende eines Start-Tags <code>&gt;</code> tippst, kommt das End-Tag dazu, und <kbd>Enter</kbd> zwischen den beiden rückt die neue Zeile ein. <code>&lt;/</code> schliesst das Element, das offen ist.',
    },

    patterns: [
        /* ---------- Status lines ---------- */
        ['^(\\d+) lines · ([\\d.]+ K?B)$', (m, l, kb) => `${l} ${getPlural(l, 'Zeile', 'Zeilen')} · ${kb}`],
        ['^\\.html and (\\d+) (?:file|files)$', (m, k) => `.html und ${k} ${getPlural(k, 'Datei', 'Dateien')}`],
        ['^([\\d,]+) bytes$', (m, b) => `${formatThousands(b)} Bytes`],
        ['^\\d{1,3}(?:,\\d{3})+$', m => formatThousands(m)],

        /* Problems above the code */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} Fehler`],
        ['^· (\\d+) (?:note|notes)$', (m, k) => `· ${k} ${getPlural(k, 'Hinweis', 'Hinweise')}`],
        ['^(\\d+) (?:note|notes)$', (m, k) => `${k} ${getPlural(k, 'Hinweis', 'Hinweise')}`],
        ['^Line (\\d+)$', 'Zeile $1'],
        ['^The preview failed: (.*)$', 'Die Vorschau ist fehlgeschlagen: $1'],
        ['^The tag <(\\S+) is never closed with >$', 'Das Tag <$1 wird nie mit > geschlossen'],
        ['^<(\\S+)> is obsolete - use CSS or a current element instead$', '<$1> ist veraltet - nimm stattdessen CSS oder ein aktuelles Element'],
        ['^Unknown element <(\\S+)>$', 'Unbekanntes Element <$1>'],
        ['^The attribute (\\S+) is given twice in <(\\S+)> - the browser uses the first one$', 'Das Attribut $1 steht zweimal in <$2> - der Browser nimmt das erste'],
        ['^The id "(.*)" is used twice$', 'Die id «$1» kommt zweimal vor'],
        ['^<(\\S+)\\/> - in HTML only void elements \\(like <br>\\) close themselves; add <\\/(\\S+)>$', '<$1/> - in HTML schliessen sich nur leere Elemente (wie <br>) selbst; füge </$2> hinzu'],
        ['^<(\\S+)> is never closed - add <\\/(\\S+)>$', '<$1> wird nie geschlossen - füge </$2> hinzu'],
        ['^<\\/(\\S+)> - <(\\S+)> has no end tag$', '</$1> - <$2> hat kein End-Tag'],
        ['^<\\/(\\S+)> without an opening <(\\S+)>$', '</$1> ohne öffnendes <$2>'],
        ['^<(\\S+)> is not closed before <\\/(\\S+)> - add <\\/(\\S+)> first$', '<$1> wird vor </$2> nicht geschlossen - füge zuerst </$3> hinzu'],
        ['^The file "(.+)" is missing - add it in the Files tab \\(or drop it into the editor\\)$', 'Die Datei «$1» fehlt - füge sie im Tab «Dateien» hinzu (oder zieh sie in den Editor)'],

        /* ---------- Insert tab ---------- */
        ['^Insert (&[#\\w]+;)$', '$1 einfügen'],

        /* ---------- Files tab ---------- */
        ['^(\\d+) (?:file|files) · (.+)$', (m, k, s) => `${k} ${getPlural(k, 'Datei', 'Dateien')} · ${s}`],
        ['^Files belong to “(.*)” and stay in your browser\\. Drop or paste pictures, stylesheets or fonts anywhere in the editor, or add them here; the code uses them by their name, e\\.g\\.$',
            'Die Dateien gehören zu «$1» und bleiben in deinem Browser. Zieh Bilder, Stylesheets oder Schriften an eine beliebige Stelle im Editor, füge sie dort ein oder füge sie hier hinzu; der Code verwendet sie mit ihrem Namen, z. B.'],
        ['^Choose the file for (.+)$', 'Die Datei für $1 wählen'],
        ['^Insert (.+) at the cursor$', '$1 beim Cursor einfügen'],
        ['^used (\\d+)×$', '$1× verwendet'],
        ['^(.* · )?not used yet$', (m, a) => `${a || ''}noch nicht verwendet`],

        /* ---------- Top bar and My documents ---------- */
        ['^"(.+)" is open\\. My documents: open, rename, duplicate or delete your documents \\(Ctrl\\+O\\)$', '«$1» ist offen. Meine Dokumente: deine Dokumente öffnen, umbenennen, duplizieren oder löschen (Ctrl+O)'],
        ['^Start "(.+)" over\\?$', '«$1» neu beginnen?'],
        ['^Start "(.+)" over$', '«$1» neu beginnen'],
        ['^(\\d+) (?:document|documents) · (.+) in this browser$', (m, k, s) => `${k} ${getPlural(k, 'Dokument', 'Dokumente')} · ${formatSize(s)} in diesem Browser`],
        ['^No document named "(.*)"\\.$', 'Kein Dokument namens «$1».'],
        ['^Open now · (.+)$', (m, s) => `Jetzt offen · ${formatSize(s)}`],
        ['^(just now|yesterday|\\d+ min ago|\\d+ h ago|[A-Z][a-z]{2} \\d{1,2}, \\d{4}) · (.+)$', (m, w, s) => `${formatTime(w)} · ${formatSize(s)}`],
        ['^(.+) \\(open now\\)$', '$1 (jetzt offen)'],
        ['^ZIP with (\\d+) (?:document|documents) downloaded$', (m, k) => `ZIP mit ${k} ${getPlural(k, 'Dokument', 'Dokumenten')} heruntergeladen`],

        /* ---------- AI Assistant ---------- */
        ['^Part (\\d+) of (\\d+) received$', 'Teil $1 von $2 erhalten'],
        ['^Open the other (?:link|links) from the AI too \\(still missing: part (.+)\\)\\.$',
            'Öffne auch die anderen Links der KI (es fehlt noch: Teil $1).'],
        ['^Part (\\d+) of (\\d+) received - paste the other (?:link|links) too \\(missing: (.+)\\)$', 'Teil $1 von $2 erhalten - füge auch die anderen Links ein (es fehlt: $3)'],
        ['^The AI sends the document to (.+) with a key that only works for this session\\. What you paste into your AI is handled by its provider\\.$',
            'Die KI schickt das Dokument mit einem Schlüssel, der nur für diese Sitzung gilt, an $1. Was du in deine KI einfügst, verarbeitet ihr Anbieter.'],
        ['^The AI sends its result to (.+) by itself, and it opens here\\. If it answers with a link, paste its answer below\\.$',
            'Die KI schickt ihr Ergebnis selbst an $1, und es öffnet sich hier. Wenn sie mit einem Link antwortet, füge ihre Antwort unten ein.'],
        ['^No key from (.+) - the prompt asks the AI for a link instead$', 'Kein Schlüssel von $1 - der Prompt bittet die KI stattdessen um einen Link'],
        ['^Prompt copied - the AI sends its result to (.+)$', 'Prompt kopiert - die KI schickt ihr Ergebnis an $1'],

        /* ---------- Messages with names ---------- */
        ['^"(.+)" is now "(.+)"$', '«$1» heisst jetzt «$2»'],
        ['^Remove "(.+)"\\?$', '«$1» entfernen?'],
        ['^"(.+)" now has the new content$', '«$1» hat jetzt den neuen Inhalt'],
        ['^File "(.+)" added to "(.+)"$', 'Datei «$1» zu «$2» hinzugefügt'],
        ['^"(.+)" is linked already$', '«$1» ist schon verknüpft'],
        ['^"(.+)" is linked$', '«$1» ist verknüpft'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '«$1» ist jetzt leer - «Rückgängig» holt es zurück'],
        ['^"(.+)" opened$', '«$1» geöffnet'],
        ['^New document "(.+)" - your other documents are under "My documents"$', 'Neues Dokument «$1» - deine anderen Dokumente sind unter «Meine Dokumente»'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$', 'Neues Dokument «$1» von der KI - deine anderen Dokumente bleiben unverändert'],
        ['^Opened "(.+)" - it is now in "My documents"$', '«$1» geöffnet - die Datei ist jetzt unter «Meine Dokumente»'],
        ['^Opened "(.+)" with (\\d+) (?:file|files)$', (m, f, k) => `«${f}» mit ${k} ${getPlural(k, 'Datei', 'Dateien')} geöffnet`],
        ['^"(.+)" could not be opened: (.*)$', (m, f, why) => `«${f}» liess sich nicht öffnen: ${ZIP[why] || why}`],
        ['^Document received - the editor found (\\d+) (?:problem|problems), see above the code$', (m, k) => `Dokument erhalten - der Editor hat ${k} ${getPlural(k, 'Problem', 'Probleme')} gefunden, siehe über dem Code`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '«$1» von der KI geändert - «Rückgängig» nimmt es zurück'],
        ['^"(.+)" duplicated$', '«$1» dupliziert'],
        ['^Delete "(.+)"\\?$', '«$1» löschen?'],
        ['^"(.+)" deleted$', '«$1» gelöscht'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', '$1 öffnen'],
    ],
};
