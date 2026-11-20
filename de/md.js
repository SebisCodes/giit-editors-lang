/* German texts of the Markdown editor: the bar, the work area (code,
   preview, insert, pictures, outline), its dialogs and messages, and the
   problems the preview finds in the code. What all editors share is in
   common.js; how the dictionaries are used is described in
   i18n.js. Names of documents, pictures and anchors stay as they are: the
   patterns copy them into the German text. */

import { formatTime, formatSize, formatThousands, getPlural } from './format.js';

/* "1,234" -> "1’234" (Swiss thousands separator) */

/* "123 bytes" / "1.5 KB" -> German unit */

/* When a document was last changed (files.js): "just now", "5 min ago", "Oct 25, 2026" … */

/* Reasons a ZIP could not be opened (app.js openZip) */
const ZIP = { 'it is not a ZIP file': 'es ist keine ZIP-Datei', 'there is no .md file in it': 'es ist keine .md-Datei darin' };

export default {
    text: {
        // Editing in place: Enter and Shift+Enter
        "Editing on the page - Enter: new paragraph, Shift+Enter: new line, Ctrl+Enter or a click elsewhere keeps it, Escape cancels": "Bearbeiten auf der Seite - Enter: neuer Absatz, Shift+Enter: neue Zeile, Ctrl+Enter oder ein Klick daneben übernimmt, Escape bricht ab",
        "A new paragraph inside bold, italic or a link is made in the code - Shift+Enter makes a new line": "Ein neuer Absatz in fettem, kursivem Text oder einem Link wird im Code eingefügt - Shift+Enter fügt eine neue Zeile ein",
        /* ---------- Top bar ---------- */
        'Markdown Editor - home': 'Markdown-Editor - Startseite',
        'Markdown Editor': 'Markdown-Editor',
        'File': 'Datei',
        'My documents (Ctrl+O)': 'Meine Dokumente (Ctrl+O)',
        'My documents': 'Meine Dokumente',
        'New document, or start this one over': 'Neues Dokument oder dieses neu beginnen',
        'New': 'Neu',
        'New blank document': 'Neues leeres Dokument',
        'An empty page - your other documents stay as they are': 'Eine leere Seite - deine anderen Dokumente bleiben, wie sie sind',
        'README': 'README',
        'Project name, features, installation and usage': 'Projektname, Funktionen, Installation und Verwendung',
        'Article': 'Artikel',
        'Title, summary, sections and a quote': 'Titel, Zusammenfassung, Abschnitte und ein Zitat',
        'Meeting notes': 'Sitzungsnotizen',
        'Agenda, decisions and a table of tasks': 'Traktanden, Beschlüsse und eine Tabelle der Aufgaben',
        'Checklist': 'Checkliste',
        'Tasks to tick off, in groups': 'Aufgaben zum Abhaken, in Gruppen',
        'The welcome example': 'Das Willkommensbeispiel',
        'Shows what the editor can do': 'Zeigt, was der Editor kann',
        'Start this document over': 'Dieses Dokument neu beginnen',
        'Empties the text, keeps the pictures - "Undo" brings it back': 'Leert den Text, behält die Bilder - «Rückgängig» holt ihn zurück',
        'Open a .md file (or a picture) from your computer (you can also drag it into the window)':
            'Eine .md-Datei (oder ein Bild) von deinem Computer öffnen (du kannst sie auch ins Fenster ziehen)',
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
        'Save the document as a .md file (Ctrl+S)': 'Das Dokument als .md-Datei speichern (Ctrl+S)',
        'Download .md': '.md herunterladen',
        'HTML, PDF, plain text and more (Ctrl+E)': 'HTML, PDF, reiner Text und mehr (Ctrl+E)',
        'Export…': 'Exportieren …',

        /* ---------- Views and work area ---------- */
        'View': 'Ansicht',
        'Edit': 'Bearbeiten',
        'Preview': 'Vorschau',
        'Insert': 'Einfügen',
        'Markdown code': 'Markdown-Code',
        'Copy the Markdown to the clipboard': 'Das Markdown in die Zwischenablage kopieren',
        'Copy code': 'Code kopieren',
        'Copy': 'Kopieren',
        'Drag to change the width of the code area': 'Ziehen, um die Breite des Codebereichs zu ändern',
        'Drag to change the width': 'Ziehen, um die Breite zu ändern',
        'Formatting': 'Formatierung',
        'Bold (Ctrl+B)': 'Fett (Ctrl+B)',
        'Bold': 'Fett',
        'Italic (Ctrl+I)': 'Kursiv (Ctrl+I)',
        'Italic': 'Kursiv',
        'Strikethrough': 'Durchgestrichen',
        'Code in the text': 'Code im Text',
        'Link (Ctrl+K)': 'Link einfügen (Ctrl+K)',
        'Heading': 'Überschrift',
        'Bulleted list': 'Aufzählung',
        'Numbered list': 'Nummerierte Liste',
        'Task list': 'Aufgabenliste',
        'Table': 'Tabelle',
        'Picture': 'Bild',
        'Insert picture': 'Bild einfügen',
        'Quote': 'Zitat',
        'Code block': 'Codeblock',
        'Math in the text (Ctrl+M)': 'Formel im Text (Ctrl+M)',
        'Math': 'Mathematik',
        'Text size': 'Textgrösse',
        'Smaller text in the preview': 'Kleinere Schrift in der Vorschau',
        'Smaller text': 'Kleinere Schrift',
        'Normal text size': 'Normale Textgrösse',
        'Larger text in the preview': 'Grössere Schrift in der Vorschau',
        'Larger text': 'Grössere Schrift',
        'Preview of the document: click text to edit it, Ctrl+click follows a link': 'Vorschau des Dokuments: klicke auf Text, um ihn zu bearbeiten; Ctrl+Klick folgt einem Link',
        'Updating…': 'Wird aktualisiert …',
        'Insert, pictures and outline': 'Einfügen, Bilder und Gliederung',
        'Ready-made pieces: structure, text, math, symbols': 'Fertige Bausteine: Struktur, Text, Formeln, Symbole',
        'The pictures of this document': 'Die Bilder dieses Dokuments',
        'Pictures': 'Bilder',
        'The headings of the document': 'Die Überschriften des Dokuments',
        'Outline': 'Gliederung',
        'The headings of the document. Click one to go there in the code and in the preview.':
            'Die Überschriften des Dokuments. Klicke auf eine, um im Code und in der Vorschau dorthin zu gehen.',
        'No headings yet - start a line with # and a space.': 'Noch keine Überschriften - beginne eine Zeile mit # und einem Leerschlag.',
        'Open it here': 'Hier öffnen',
        'Drop the .md file or picture here': 'Die .md-Datei oder das Bild hier ablegen',

        'The document is empty - write Markdown on the left, or choose a template under "New".': 'Das Dokument ist leer - schreibe links Markdown, oder wähle unter «Neu» eine Vorlage.',

        /* Problems above the code */
        'Hide': 'Ausblenden',
        'Show': 'Anzeigen',

        /* ---------- Insert tab ---------- */
        'Structure': 'Struktur',
        'Heading 1': 'Überschrift 1',
        'Heading 2': 'Überschrift 2',
        'Heading 3': 'Überschrift 3',
        '# Heading': '# Überschrift',
        '## Heading': '## Überschrift',
        '### Heading': '### Überschrift',
        'Horizontal rule': 'Trennlinie',
        'Apply page breaks': 'Seitenumbrüche anwenden',
        'New page': 'Neue Seite',
        'Document': 'Dokument',
        '• Bulleted list': '• Aufzählung',
        '1. Numbered list': '1. Nummerierung',
        '☐ Task list': '☐ Aufgabenliste',
        'Fold-out section': 'Aufklappbarer Abschnitt',
        'Line break': 'Zeilenumbruch',
        'Text': 'Text',
        '**bold** (Ctrl+B)': '**fett** (Ctrl+B)',
        '*italic* (Ctrl+I)': '*kursiv* (Ctrl+I)',
        '~~struck through~~': '~~durchgestrichen~~',
        'Link to a heading': 'Link zu einer Überschrift',
        '[text](#heading)': '[Text](#überschrift)',
        '[text](https://…) (Ctrl+K)': '[Text](https://…) (Ctrl+K)',
        '![description](name.png)': '![Beschreibung](name.png)',
        'Footnote': 'Fussnote',
        '[^1] at the cursor, the note at the end': '[^1] beim Cursor, die Anmerkung am Schluss',
        'Key': 'Taste',
        'A key as on the keyboard: <kbd>Ctrl</kbd>': 'Eine Taste wie auf der Tastatur: <kbd>Ctrl</kbd>',
        '`code` between backticks': '`Code` zwischen Backticks',
        '$x$ in the text': '$x$ im Text',
        'Displayed': 'Abgesetzt',
        '$$ … $$ on its own lines': '$$ … $$ auf eigenen Zeilen',
        'Fraction': 'Bruch',
        'Root': 'Wurzel',
        'x² Power': 'x² Potenz',
        'x₁ Index': 'x₁ Tiefgestellt',
        '∑ Sum': '∑ Summe',
        '∫ Integral': '∫ Integral',
        'lim Limit': 'lim Grenzwert',
        '2×2 matrix': '2×2-Matrix',
        'Cases': 'Fall\u00adunter\u00adscheidung',
        'Greek letters': 'Griechische Buchstaben',
        'Symbols': 'Symbole',
        'Pictures have their own tab:': 'Bilder haben einen eigenen Tab:',

        /* ---------- Pictures tab ---------- */
        'Add pictures…': 'Bilder hinzufügen …',
        'No pictures yet': 'Noch keine Bilder',
        'Missing in this document': 'Fehlen in diesem Dokument',
        'Add file…': 'Datei hinzufügen …',
        'Show where it is used': 'Zeigen, wo es verwendet wird',
        '![…](name) at the cursor': '![…](Name) beim Cursor',
        'Rename - the code is changed along': 'Umbenennen - der Code wird mit angepasst',
        'Rename': 'Umbenennen',
        'Choose another file, keep the name': 'Eine andere Datei wählen, den Namen behalten',
        'Replace': 'Ersetzen',
        'Download the picture': 'Das Bild herunterladen',
        'Download': 'Herunterladen',
        'Remove the picture from this document': 'Das Bild aus diesem Dokument entfernen',
        'Remove': 'Entfernen',
        'New name': 'Neuer Name',
        'Pictures belong to “': 'Die Bilder gehören zu «',
        '” and stay in your browser. Drop or paste them anywhere in the editor, or add them here;': '» und bleiben in deinem Browser. Zieh sie an eine beliebige Stelle im Editor, füge sie dort ein oder füge sie hier hinzu;',
        'uses them.': 'verwendet sie.',

        /* ---------- Export ---------- */
        'Close': 'Schliessen',
        'File name': 'Dateiname',
        'HTML page (one file)': 'HTML-Seite (eine Datei)',
        'PDF (print or save as PDF)': 'PDF (drucken oder als PDF speichern)',
        'Plain text': 'Reiner Text',
        'Markdown (.md)': 'Markdown-Datei (.md)',
        'Markdown with pictures (ZIP)': 'Markdown mit Bildern (ZIP)',
        'Result': 'Ergebnis',
        'Download everything at once: .md, pictures, HTML and text': 'Alles auf einmal herunterladen: .md, Bilder, HTML und Text',
        'All formats (ZIP)': 'Alle Formate (ZIP)',
        'Print / Save as PDF': 'Drucken / als PDF speichern',
        '(The HTML page - with its pictures and styles inside - is created when you download or copy it.)':
            '(Die HTML-Seite - mit ihren Bildern und Stilen darin - entsteht, wenn du sie herunterlädst oder kopierst.)',

        /* ---------- My documents ---------- */
        'Search by name': 'Nach Namen suchen',
        'Search your documents': 'Deine Dokumente durchsuchen',
        'Open a .md file from your computer as a new document': 'Eine .md-Datei von deinem Computer als neues Dokument öffnen',
        'New document': 'Neues Dokument',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Klicke auf ein Dokument, um es zu öffnen. Die Dokumente sind nur in diesem Browser gespeichert - nichts wird hochgeladen. Wenn du die Website-Daten des Browsers löschst, sind sie weg: Lade also die herunter, die du behalten willst.',
        'Download every document as a .md file (with its pictures) in one ZIP': 'Jedes Dokument als .md-Datei (mit seinen Bildern) in einem ZIP herunterladen',
        'Download all (ZIP)': 'Alle herunterladen (ZIP)',
        'Duplicate': 'Duplizieren',
        'Download as .md': 'Als .md herunterladen',
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
        'The document is now in the Markdown Editor tab you already had open. Switch to that tab, or open it here.':
            'Das Dokument ist jetzt im Tab mit dem Markdown-Editor, den du schon offen hattest. Wechsle zu diesem Tab oder öffne es hier.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)': 'Kopieren ist hier nicht erlaubt - der Text ist unten markiert: drücke Ctrl+C (⌘C)',
        'Paste it into your AI and say what it should write.': 'Füge ihn in deine KI ein und sag, was sie schreiben soll.',
        'Prompt copied - paste it into your AI and say what it should write': 'Prompt kopiert - füge ihn in deine KI ein und sag, was sie schreiben soll',
        'This link is incomplete or damaged - please ask the AI to send it again': 'Dieser Link ist unvollständig oder beschädigt - bitte die KI, ihn nochmals zu senden',

        /* ---------- Save to your server ---------- */
        'Save to your server': 'Auf deinem Server speichern',
        'Webhook address': 'Webhook-Adresse',
        'https://example.com/api/markdown': 'https://beispiel.ch/api/markdown',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(optional, wird als «Authorization: Bearer …» gesendet; bleibt nur, bis dieser Tab geschlossen wird)',
        'Send automatically a few seconds after each change (otherwise only when you click': 'Automatisch ein paar Sekunden nach jeder Änderung senden (sonst nur, wenn du auf',
        'or press Ctrl+S)': 'klickst oder Ctrl+S drückst)',
        'Only for “': 'Nur für «',
        '” (other documents use the general address)': '» (andere Dokumente nutzen die allgemeine Adresse)',
        'What your server receives': 'Was dein Server erhält',
        'A POST request with JSON (your server must allow CORS from https://md.giit.ch):': 'Eine POST-Anfrage mit JSON (dein Server muss CORS von https://md.giit.ch erlauben):',
        'Embed the editor in your website': 'Den Editor in deine Website einbetten',
        'Send now': 'Jetzt senden',
        'Save setting': 'Einstellung speichern',

        /* ---------- Help ---------- */
        'How it works': 'So funktioniert es',
        'Keyboard shortcuts': 'Tastenkürzel',
        'Bold / italic around the selected text': 'Fett / kursiv um den markierten Text',
        'Link': 'Link',
        'Show the cursor\'s place in the preview': 'Die Stelle des Cursors in der Vorschau zeigen',
        'Indent / outdent': 'Einrücken / ausrücken',
        'Undo / redo': 'Rückgängig / wiederholen',
        'Save (download .md, or to your server) / export': 'Speichern (.md herunterladen oder auf deinem Server) / exportieren',
        'Print / save as PDF': 'Drucken / als PDF speichern',
        'Problems (a missing picture, a link to a heading that is not there, a code block that is never closed, a table row with too many cells) are listed above the code - click one to go there.':
            'Probleme (ein fehlendes Bild, ein Link zu einer Überschrift, die es nicht gibt, ein Codeblock, der nie geschlossen wird, eine Tabellenzeile mit zu vielen Zellen) stehen über dem Code - klicke auf eines, um dorthin zu gehen.',

        /* ---------- Messages ---------- */
        'The browser storage is full - download and delete documents under "My documents"': 'Der Browserspeicher ist voll - lade Dokumente unter «Meine Dokumente» herunter und lösche sie',
        'The browser storage is full - delete or download documents under "My documents" first': 'Der Browserspeicher ist voll - lösche oder lade zuerst Dokumente unter «Meine Dokumente» herunter',
        'The browser storage is full - delete or download some documents first': 'Der Browserspeicher ist voll - lösche oder lade zuerst ein paar Dokumente herunter',
        'The browser storage is full': 'Der Browserspeicher ist voll',
        'Nothing to undo': 'Nichts rückgängig zu machen',
        'Nothing to redo': 'Nichts zu wiederholen',
        'This text changed in the code - wait for the preview, then try again': 'Dieser Text hat sich im Code geändert - warte auf die Vorschau und versuche es dann nochmals',
        'This box changed in the code - wait for the preview, then try again': 'Dieses Kästchen hat sich im Code geändert - warte auf die Vorschau und versuche es dann nochmals',
        'This picture changed in the code - wait for the preview, then try again': 'Dieses Bild hat sich im Code geändert - warte auf die Vorschau und versuche es dann nochmals',
        'The code changed meanwhile - the edit was not used': 'Der Code hat sich inzwischen geändert - die Änderung wurde nicht übernommen',
        'This anchor is not in the document': 'Dieser Anker ist nicht im Dokument',
        'The picture is removed from this document. Places that use it show its name in a frame. "Undo" does not bring it back.':
            'Das Bild wird aus diesem Dokument entfernt. Stellen, die es verwenden, zeigen seinen Namen in einem Rahmen. «Rückgängig» holt es nicht zurück.',
        'Pictures can be PNG, JPG, GIF, WebP, SVG or PDF': 'Bilder können PNG, JPG, GIF, WebP, SVG oder PDF sein',
        'The picture is larger than 12 MB': 'Das Bild ist grösser als 12 MB',
        'The picture could not be read': 'Das Bild liess sich nicht lesen',
        'This document is empty already': 'Dieses Dokument ist schon leer',
        'Everything is removed; the pictures of the document stay. "Undo" brings the text back as long as the page is open.':
            'Alles wird entfernt; die Bilder des Dokuments bleiben. «Rückgängig» holt den Text zurück, solange die Seite offen ist.',
        'Start over': 'Neu beginnen',
        'The file is larger than 8 MB': 'Die Datei ist grösser als 8 MB',
        'Downloaded': 'Heruntergeladen',
        'Copied to the clipboard': 'In die Zwischenablage kopiert',
        'This browser does not allow copying this': 'Dieser Browser erlaubt hier kein Kopieren',
        'Code copied': 'Code kopiert',
        '.md with its pictures downloaded (ZIP)': '.md mit den Bildern heruntergeladen (ZIP)',
        '.md downloaded': '.md heruntergeladen',
        'ZIP downloaded: .md, pictures, HTML and text': 'ZIP heruntergeladen: .md, Bilder, HTML und Text',
        'Add': 'Hinzufügen',
        'The document and its pictures are removed from this browser for good. Download it first if you want to keep a copy.':
            'Das Dokument und seine Bilder werden endgültig aus diesem Browser entfernt. Lade es zuerst herunter, wenn du eine Kopie behalten willst.',

        /* ---------- Problems the preview finds (markdown.js) ---------- */
        '$$ is never closed - add a line with $$ after the formula': '$$ wird nie geschlossen - füge nach der Formel eine Zeile mit $$ hinzu',
    },

    html: {

        '<b>Export</b> also has <b>Open in another editor</b>: it converts the document and opens it as a new document there. Anything the other format cannot hold is listed first.':

            '<b>Exportieren</b> bietet auch <b>In einem anderen Editor öffnen</b>: Das Dokument wird umgewandelt und dort als neues Dokument geöffnet. Was das andere Format nicht aufnehmen kann, wird vorher aufgelistet.',

        '<b>Insert</b> &gt; <b>New page</b> sets a page break for printing and PDF; the preview shows it as a dashed line. Headings stay with their text and tables and pictures are not cut. In Export, <b>Apply page breaks</b> turns them off for a PDF.':

            '<b>Einfügen</b> &gt; <b>Neue Seite</b> setzt einen Seitenumbruch für Druck und PDF; die Vorschau zeigt ihn als gestrichelte Linie. Überschriften bleiben bei ihrem Text, Tabellen und Bilder werden nicht zerschnitten. In <b>Exportieren</b> schaltet <b>Seitenumbrüche anwenden</b> sie für ein PDF aus.',
        /* Export */
        'The print dialog opens with the document only. Choose <b>Save as PDF</b> (or "Microsoft Print to PDF") as the printer. In Chrome and Edge, untick "Headers and footers" if the browser offers it. The text in the PDF stays sharp and can be selected.':
            'Der Druckdialog öffnet sich nur mit dem Dokument. Wähle <b>Als PDF speichern</b> (oder «Microsoft Print to PDF») als Drucker. In Chrome und Edge entferne das Häkchen bei «Kopf- und Fusszeilen», falls der Browser es anbietet. Der Text im PDF bleibt scharf und lässt sich markieren.',

        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Klicke auf <b>Prompt kopieren</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'Die KI antwortet mit einem Link: Klicke darauf, oder füge die ganze Antwort unten ein. <b>Rückgängig</b> nimmt es zurück.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'Die KI antwortet mit einem Link: <b>Füge ihre ganze Antwort unten ein</b> (ein angeklickter Link öffnet einen eigenen Editor). <b>Rückgängig</b> nimmt es zurück.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'Der Editor kann jede gespeicherte Fassung an deinen eigenen Server senden (einen <b>Webhook</b>), damit deine Arbeit dort liegt, wo du sie haben willst. Gesendet wird erst, wenn du hier eine Adresse eingibst.',
        'Also possible: <code>?src=&lt;URL of a .md file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>mdeditor:ai</code>, <code>mdeditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Auch möglich: <code>?src=&lt;URL einer .md-Datei&gt;</code> öffnet eine Datei, <code>&amp;webhook=&lt;URL&gt;</code> speichert dieses Dokument dort. Der Editor kann sich auch in einem eigenen Fenster öffnen (<code>?embed=window</code>), und deine Seite kann ihm einen eigenen KI-Prompt und einen Sitzungsschlüssel übergeben, damit die KI ihr Ergebnis an deinen Server schickt (<code>mdeditor:ai</code>, <code>mdeditor:key-request</code>). Beispiele findest du unter <a href="/de/embed/">«Den Editor in deine Website einbinden»</a>. Die Einzelheiten stehen in <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> Markdown on the left - or start with <b>New</b> and one of the templates. The preview in the middle shows the document as you type.':
            '<b>Schreibe</b> Markdown links - oder beginne mit <b>Neu</b> und einer der Vorlagen. Die Vorschau in der Mitte zeigt das Dokument, während du tippst.',
        '<b>Click text in the preview</b> to edit it right there: the cursor is where you clicked, and the code\'s cursor goes to the same place. <b>Enter</b> starts a new paragraph; <b>Shift+Enter</b> inserts a line break. <b>Ctrl+Enter</b> (<b>Cmd+Enter</b> on macOS) or a click elsewhere applies the edit; <b>Escape</b> cancels. Each edit is one step for Undo. Characters such as <code>*</code> or <code>_</code> are escaped so they stay text. A click on math, a picture or code jumps to its place in the code instead. <b>Ctrl</b> + click follows a link. A check box of a task list ticks the task in the code.':
            '<b>Klicke auf Text in der Vorschau</b>, um ihn direkt dort zu bearbeiten: Der Cursor steht, wo du geklickt hast, und der Cursor im Code geht an dieselbe Stelle. <b>Enter</b> beginnt einen neuen Absatz; <b>Shift+Enter</b> fügt einen Zeilenumbruch ein. <b>Ctrl+Enter</b> (<b>Cmd+Enter</b> auf macOS) oder ein Klick anderswo übernimmt die Änderung; <b>Esc</b> bricht ab. Jede Bearbeitung lässt sich mit einem Schritt rückgängig machen. Zeichen wie <code>*</code> oder <code>_</code> werden maskiert, damit sie Text bleiben. Ein Klick auf eine Formel, ein Bild oder Code springt stattdessen zu seiner Stelle im Code. <b>Ctrl</b> + Klick folgt einem Link. Ein Kästchen einer Aufgabenliste hakt die Aufgabe im Code ab.',
        '<b>Insert</b> on the right has ready-made pieces (headings, lists, tables, math, symbols); <b>Pictures</b> holds the pictures of the document; <b>Outline</b> lists the headings.':
            '<b>Einfügen</b> rechts hat fertige Bausteine (Überschriften, Listen, Tabellen, Formeln, Symbole); <b>Bilder</b> enthält die Bilder des Dokuments; <b>Gliederung</b> listet die Überschriften auf.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser.':
            '<b>Meine Dokumente</b> (die Ordnerschaltfläche oben links) listet jedes Dokument auf, das in diesem Browser liegt.',
        '<b>Export</b> makes an HTML page, a PDF (via the print dialog) or plain text. <b>Download .md</b> saves the code (with its pictures as ZIP).':
            '<b>Exportieren</b> macht eine HTML-Seite, ein PDF (über den Druckdialog) oder reinen Text. <b>.md herunterladen</b> speichert den Code (mit seinen Bildern als ZIP).',
        'The preview understands CommonMark with GitHub\'s tables, task lists, strikethrough, autolinks and footnotes, and math in <code>$…$</code> and <code>$$…$$</code>. HTML in the Markdown is shown without scripts, styles, frames and forms.':
            'Die Vorschau versteht CommonMark mit den Tabellen, Aufgabenlisten, Durchstreichungen, automatischen Links und Fussnoten von GitHub sowie Formeln in <code>$…$</code> und <code>$$…$$</code>. HTML im Markdown erscheint ohne Skripte, Stile, Frames und Formulare.',
        'Math: <code>$…$</code> around the selection': 'Formel: <code>$…$</code> um die Auswahl',
        'Lines in or out of a comment (<code>&lt;!-- --&gt;</code>)': 'Zeilen aus- oder einkommentieren (<code>&lt;!-- --&gt;</code>)',
        '<kbd>Enter</kbd> in a list starts the next item (<code>-</code>, <code>1.</code>, <code>- [ ]</code>, <code>&gt;</code>); on an empty item it ends the list. <code>* _ ` ~ $ [ (</code> close by themselves around a selection.':
            '<kbd>Enter</kbd> in einer Liste beginnt den nächsten Punkt (<code>-</code>, <code>1.</code>, <code>- [ ]</code>, <code>&gt;</code>); auf einem leeren Punkt beendet es die Liste. <code>* _ ` ~ $ [ (</code> schliessen sich um eine Auswahl von selbst.',
    },

    patterns: [
        /* ---------- Status lines ---------- */
        ['^(\\d+) lines · ([\\d.]+ K?B) · (\\d+) (?:word|words)$', (m, l, kb, w) => `${l} ${getPlural(l, 'Zeile', 'Zeilen')} · ${kb} · ${w} ${getPlural(w, 'Wort', 'Wörter')}`],
        ['^\\.md and (\\d+) (?:picture|pictures)$', (m, k) => `.md und ${k} ${getPlural(k, 'Bild', 'Bilder')}`],
        ['^([\\d,]+) bytes$', (m, b) => `${formatThousands(b)} Bytes`],
        ['^\\d{1,3}(?:,\\d{3})+$', m => formatThousands(m)],

        /* Problems above the code */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'Fehler', 'Fehler')}`],
        ['^· (\\d+) (?:note|notes)$', (m, k) => `· ${k} ${getPlural(k, 'Hinweis', 'Hinweise')}`],
        ['^(\\d+) (?:note|notes)$', (m, k) => `${k} ${getPlural(k, 'Hinweis', 'Hinweise')}`],
        ['^Line (\\d+)$', 'Zeile $1'],
        ['^The preview failed: (.*)$', 'Die Vorschau ist fehlgeschlagen: $1'],
        ['^The preview stopped at an unexpected problem: (.*)$', 'Die Vorschau hat bei einem unerwarteten Problem angehalten: $1'],
        ['^Picture "(.+)" not found - drag the picture into the editor \\(or add it in the Pictures tab\\)$', 'Bild «$1» nicht gefunden - zieh das Bild in den Editor (oder füge es im Tab «Bilder» hinzu)'],
        ['^The link to "(.+)" has no heading or anchor of that name$', 'Für den Link zu «$1» gibt es keine Überschrift und keinen Anker mit diesem Namen'],
        ['^This code block \\((.+)\\) is never closed - add a line with (.+) after the code$', 'Dieser Codeblock ($1) wird nie geschlossen - füge nach dem Code eine Zeile mit $2 hinzu'],
        ['^This table row has (\\d+) (?:cell|cells), the header has (\\d+)$', (m, k, h) => `Diese Tabellenzeile hat ${k} ${getPlural(k, 'Zelle', 'Zellen')}, die Kopfzeile hat ${h}`],
        ['^Math: (.*)$', 'Formel: $1'],

        /* ---------- Pictures tab ---------- */
        ['^(\\d+) (?:picture|pictures) · (.+)$', (m, k, s) => `${k} ${getPlural(k, 'Bild', 'Bilder')} · ${s}`],
        ['^Choose the file for (.+)$', 'Die Datei für $1 wählen'],
        ['^Insert !\\[…\\]\\((.+)\\) at the cursor$', '![…]($1) beim Cursor einfügen'],
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
        ['^"(.+)" now shows the new picture$', '«$1» zeigt jetzt das neue Bild'],
        ['^Picture "(.+)" added to "(.+)"$', 'Bild «$1» zu «$2» hinzugefügt'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '«$1» ist jetzt leer - «Rückgängig» holt es zurück'],
        ['^"(.+)" opened$', '«$1» geöffnet'],
        ['^New document "(.+)" - your other documents are under "My documents"$', 'Neues Dokument «$1» - deine anderen Dokumente sind unter «Meine Dokumente»'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$', 'Neues Dokument «$1» von der KI - deine anderen Dokumente bleiben unverändert'],
        ['^"(.+)" is not a Markdown file$', '«$1» ist keine Markdown-Datei'],
        ['^Opened "(.+)" - it is now in "My documents"$', '«$1» geöffnet - die Datei ist jetzt unter «Meine Dokumente»'],
        ['^Opened "(.+)" with (\\d+) (?:picture|pictures)$', (m, f, k) => `«${f}» mit ${k} ${getPlural(k, 'Bild', 'Bildern')} geöffnet`],
        ['^"(.+)" could not be opened: (.*)$', (m, f, why) => `«${f}» liess sich nicht öffnen: ${ZIP[why] || why}`],
        ['^Document received - the preview found (\\d+) (?:problem|problems), see above the code$', (m, k) => `Dokument erhalten - die Vorschau hat ${k} ${getPlural(k, 'Problem', 'Probleme')} gefunden, siehe über dem Code`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '«$1» von der KI geändert - «Rückgängig» nimmt es zurück'],
        ['^"(.+)" duplicated$', '«$1» dupliziert'],
        ['^Delete "(.+)"\\?$', '«$1» löschen?'],
        ['^"(.+)" deleted$', '«$1» gelöscht'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', '$1 öffnen'],
    ],
};
