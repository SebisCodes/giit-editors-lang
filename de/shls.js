/* German texts of the SHLS editor: the bar, the work area (code, records,
   record, insert, convert, outline), its dialogs and messages, and the
   problems found in the code. What all editors share is in
   common.js; how the dictionaries are used is described in
   i18n.js. Names of documents, sections, keys and values stay as they are:
   the patterns copy them into the German text. */

import { formatTime, formatSize, formatThousands, getPlural } from './format.js';

/* "1,234" -> "1’234" (Swiss thousands separator) */

/* When a document was last changed (files.js): "just now", "5 min ago", "Mon D, YYYY" … */

/**
 * Translates the text the pattern found (recs in the English pattern).
 * @param {string} k - the English text the pattern found.
 * @returns {string} the text in the language.
 */
const translateRecords = k => getPlural(k, 'Datensatz', 'Datensätze');

export default {
    text: {
        "Read back from SHLS, the data is not the same (for example records whose keys are in another order than in the first record) - check the result.": "Aus SHLS zurückgelesen sind die Daten nicht dieselben (zum Beispiel Datensätze, deren Schlüssel in anderer Reihenfolge stehen als im ersten Datensatz) - prüfe das Ergebnis.",
        /* ---------- Top bar ---------- */
        'SHLS Editor - home': 'SHLS-Editor - Startseite',
        'SHLS Editor': 'SHLS-Editor',
        'File': 'Datei',
        'My documents (Ctrl+O)': 'Meine Dokumente (Ctrl+O)',
        'My documents': 'Meine Dokumente',
        'New document, or start this one over': 'Neues Dokument oder dieses neu beginnen',
        'New': 'Neu',
        'New blank document': 'Neues leeres Dokument',
        'An empty document - your other documents stay as they are': 'Ein leeres Dokument - deine anderen Dokumente bleiben, wie sie sind',
        'Empty section': 'Leerer Abschnitt',
        'One section with two keys and one record to fill in': 'Ein Abschnitt mit zwei Schlüsseln und einem Datensatz zum Ausfüllen',
        'Products and companies': 'Produkte und Firmen',
        'The first README example: records right after each key block': 'Das erste README-Beispiel: die Datensätze direkt nach jedem Schlüsselblock',
        'Key blocks first': 'Zuerst die Schlüsselblöcke',
        'The second README example: the records follow under the section name again': 'Das zweite README-Beispiel: die Datensätze folgen unter dem wiederholten Abschnittsnamen',
        'Companies, departments and employees, nested three levels': 'Firmen, Abteilungen und Mitarbeitende, drei Ebenen tief verschachtelt',
        'The same data with the key blocks first and fewer blank lines': 'Dieselben Daten mit den Schlüsselblöcken zuerst und weniger Leerzeilen',
        'Start this document over': 'Dieses Dokument neu beginnen',
        'Empties the document - "Undo" brings it back': 'Leert das Dokument - «Rückgängig» holt es zurück',
        'Open an SHLS file from your computer (JSON, YAML, CSV and JSON Lines files are converted; you can also drag a file into the window)':
            'Eine SHLS-Datei von deinem Computer öffnen (JSON-, YAML-, CSV- und JSON-Lines-Dateien werden umgewandelt; du kannst eine Datei auch ins Fenster ziehen)',
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
        'Save the document as a .shls file (Ctrl+S)': 'Das Dokument als .shls-Datei speichern (Ctrl+S)',
        'Download .shls': '.shls herunterladen',
        'JSON, YAML, CSV and more (Ctrl+E)': 'JSON, YAML, CSV und mehr (Ctrl+E)',
        'Export…': 'Exportieren …',

        /* ---------- Views and work area ---------- */
        'View': 'Ansicht',
        'Edit': 'Bearbeiten',
        'Selection': 'Auswahl',
        'Records': 'Datensätze',
        'Record': 'Datensatz',
        'SHLS code': 'SHLS-Code',
        'Copy the code to the clipboard': 'Den Code in die Zwischenablage kopieren',
        'Copy code': 'Code kopieren',
        'Copy': 'Kopieren',
        'Lay the document out as the reference SHLSEncoder does: all key blocks first, then the records': 'Das Dokument so anordnen wie der Referenz-SHLSEncoder: zuerst alle Schlüsselblöcke, dann die Datensätze',
        'Tidy up': 'Aufräumen',
        'Drag to change the width of the code area': 'Ziehen, um die Breite des Codebereichs zu ändern',
        'Drag to change the width': 'Ziehen, um die Breite zu ändern',
        'Unfold everything': 'Alles aufklappen',
        'Fold the key blocks and records': 'Die Schlüsselblöcke und Datensätze zuklappen',
        'Add: a record after the selected record (or at the end of the section), a key after the selected key': 'Hinzufügen: einen Datensatz nach dem gewählten (oder am Ende des Abschnitts), einen Schlüssel nach dem gewählten Schlüssel',
        'Add': 'Hinzufügen',
        'Duplicate the selected record or key': 'Den gewählten Datensatz oder Schlüssel duplizieren',
        'Duplicate': 'Duplizieren',
        'Move the selected record or key up (Alt+Up)': 'Den gewählten Datensatz oder Schlüssel nach oben schieben (Alt+Up)',
        'Move up': 'Nach oben',
        'Move the selected record or key down (Alt+Down)': 'Den gewählten Datensatz oder Schlüssel nach unten schieben (Alt+Down)',
        'Move down': 'Nach unten',
        'Remove the selected record, key or section (Delete)': 'Den gewählten Datensatz, Schlüssel oder Abschnitt entfernen (Delete)',
        'Remove': 'Entfernen',
        'Search keys and values': 'Schlüssel und Werte suchen',
        'Previous match (Shift+Enter)': 'Vorheriger Treffer (Shift+Enter)',
        'Previous match': 'Vorheriger Treffer',
        'Next match (Enter)': 'Nächster Treffer (Enter)',
        'Next match': 'Nächster Treffer',
        'Copy the path of the selection': 'Den Pfad der Auswahl kopieren',
        'Copy path': 'Pfad kopieren',
        'Nothing selected': 'Nichts gewählt',
        'Side panel': 'Seitenleiste',
        'The selected record, value or key': 'Der gewählte Datensatz, Wert oder Schlüssel',
        'New records, keys and sections, and pieces of code': 'Neue Datensätze, Schlüssel und Abschnitte sowie Codebausteine',
        'Insert': 'Einfügen',
        'Tokens, and the document in other formats': 'Tokens und das Dokument in anderen Formaten',
        'Convert': 'Umwandeln',
        'The sections of the document': 'Die Abschnitte des Dokuments',
        'Outline': 'Gliederung',
        'Open it here': 'Hier öffnen',
        'Drop the file here': 'Datei hier ablegen',
        'Hide': 'Ausblenden',
        'Show': 'Anzeigen',

        /* ---------- Records view ---------- */
        'Keys': 'Schlüssel',
        'the template of each record': 'die Vorlage jedes Datensatzes',
        'Click to rename the section': 'Klicken, um den Abschnitt umzubenennen',
        'Click to rename the key - only the key block changes': 'Klicken, um den Schlüssel umzubenennen - nur der Schlüsselblock ändert sich',
        'Click to change the value': 'Klicken, um den Wert zu ändern',
        'Value': 'Wert',
        'Key': 'Schlüssel',
        'Section name': 'Abschnittsname',
        'The code cannot be read - see the problem above the code.': 'Der Code lässt sich nicht lesen - siehe das Problem über dem Code.',
        'No sections yet - write a section name, its keys (indented) and, after one blank line, the records. Or choose a template under "New".':
            'Noch keine Abschnitte - schreibe einen Abschnittsnamen, seine Schlüssel (eingerückt) und nach einer Leerzeile die Datensätze. Oder wähle unter «Neu» eine Vorlage.',

        /* ---------- Record tab ---------- */
        'Click a section, a key or a record in the middle.': 'Klicke in der Mitte auf einen Abschnitt, einen Schlüssel oder einen Datensatz.',
        'The document has no sections yet.': 'Das Dokument hat noch keine Abschnitte.',
        'The document has no sections yet': 'Das Dokument hat noch keine Abschnitte',
        'Path': 'Pfad',
        'Section': 'Abschnitt',
        'Add a record': 'Einen Datensatz hinzufügen',
        'Add a key': 'Einen Schlüssel hinzufügen',
        'Remove the section': 'Den Abschnitt entfernen',
        'Add a key after it': 'Danach einen Schlüssel hinzufügen',
        'Add a record after it': 'Danach einen Datensatz hinzufügen',
        'Renaming a key changes only the key block. Adding, moving or removing a key changes every record of the section.':
            'Das Umbenennen eines Schlüssels ändert nur den Schlüsselblock. Ein Schlüssel, der hinzukommt, verschoben oder entfernt wird, ändert jeden Datensatz des Abschnitts.',
        'Apply': 'Übernehmen',

        /* ---------- Insert tab ---------- */
        'Add to the selection': 'Zur Auswahl hinzufügen',
        'A record after the selected record (or at the end of the section), a key after the selected key - every record gets a value "-" for it. One step for Undo.':
            'Ein Datensatz nach dem gewählten (oder am Ende des Abschnitts), ein Schlüssel nach dem gewählten - jeder Datensatz erhält dafür den Wert «-». Ein Schritt für Rückgängig.',
        'A new record with "-" for each value': 'Ein neuer Datensatz mit «-» für jeden Wert',
        'A new key in the key block; every record gets "-"': 'Ein neuer Schlüssel im Schlüsselblock; jeder Datensatz erhält «-»',
        'A copy of the selected record or key': 'Eine Kopie des gewählten Datensatzes oder Schlüssels',
        'A new section at the end, with two keys and one record': 'Ein neuer Abschnitt am Ende, mit zwei Schlüsseln und einem Datensatz',
        'At the cursor in the code': 'Beim Cursor im Code',
        'A section name, its key block, a blank line and one record': 'Ein Abschnittsname, sein Schlüsselblock, eine Leerzeile und ein Datensatz',
        'The placeholder for the line of a nested list': 'Der Platzhalter für die Zeile einer verschachtelten Liste',
        '- (no value)': '- (kein Wert)',
        'SHLS has no empty values: a dash stands for none': 'SHLS kennt keine leeren Werte: ein Strich steht für keinen',
        'Today\'s date': 'Das heutige Datum',
        'The date as YYYY-MM-DD': 'Das Datum als JJJJ-MM-TT',

        /* ---------- Convert tab ---------- */
        'JSON on one line': 'JSON auf einer Zeile',
        'This document': 'Dieses Dokument',
        'Writes the document anew as the reference SHLSEncoder does: all key blocks first, then the records of each section':
            'Schreibt das Dokument neu, wie es der Referenz-SHLSEncoder tut: zuerst alle Schlüsselblöcke, dann die Datensätze jedes Abschnitts',
        'Write as SHLSEncoder does': 'Wie SHLSEncoder schreiben',
        'Convert to': 'Umwandeln in',
        'JSON (as SHLSDecoder reads it)': 'JSON (wie SHLSDecoder es liest)',
        'CSV (one section)': 'CSV (ein Abschnitt)',
        'JSON Lines (one section)': 'JSON-Lines (ein Abschnitt)',
        'The records as plain text': 'Die Datensätze als reiner Text',
        'Result': 'Ergebnis',
        'Download': 'Herunterladen',
        'Opens the result as a new document in the JSON Editor (in a new tab)': 'Öffnet das Ergebnis als neues Dokument im JSON-Editor (in einem neuen Tab)',
        'Open in the JSON Editor': 'Im JSON-Editor öffnen',
        'Exactly the data the reference SHLSDecoder reads: every value is a string.': 'Genau die Daten, die der Referenz-SHLSDecoder liest: jeder Wert ist ein Text.',
        'The code cannot be read as SHLS - fix the problem above the code first': 'Der Code lässt sich nicht als SHLS lesen - behebe zuerst das Problem über dem Code',
        'Write it anyway?': 'Trotzdem schreiben?',
        'Read back, the encoder\'s text gives different data than this document (SHLSEncoder cannot write every structure). "Undo" brings the document back.':
            'Beim erneuten Einlesen ergibt der Text des Encoders andere Daten als dieses Dokument (SHLSEncoder kann nicht jede Struktur schreiben). «Rückgängig» holt das Dokument zurück.',
        'Write it': 'Schreiben',
        'The document is written as SHLSEncoder does already': 'Das Dokument ist schon so geschrieben, wie es SHLSEncoder tut',
        'Written as SHLSEncoder does': 'Wie SHLSEncoder geschrieben',

        /* ---------- Outline tab ---------- */
        'The sections of the document. Click one to go there.': 'Die Abschnitte des Dokuments. Klicke auf einen, um dorthin zu gehen.',

        /* ---------- Export ---------- */
        'Close': 'Schliessen',
        'File name': 'Dateiname',
        'SHLS file as it is (.shls)': 'SHLS-Datei, wie sie ist (.shls)',
        'JSON, as SHLSDecoder reads it (.json)': 'JSON, wie SHLSDecoder es liest (.json)',
        'YAML file (.yaml)': 'YAML-Datei (.yaml)',
        'CSV table of the selected section (.csv)': 'CSV-Tabelle des gewählten Abschnitts (.csv)',
        'The records as plain text (.txt)': 'Die Datensätze als reiner Text (.txt)',
        'Download every format at once': 'Alle Formate auf einmal herunterladen',
        'All formats (ZIP)': 'Alle Formate (ZIP)',

        /* ---------- My documents ---------- */
        'Search by name': 'Nach Namen suchen',
        'Search your documents': 'Deine Dokumente durchsuchen',
        'Open a file from your computer as a new document': 'Eine Datei von deinem Computer als neues Dokument öffnen',
        'New document': 'Neues Dokument',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Klicke auf ein Dokument, um es zu öffnen. Die Dokumente sind nur in diesem Browser gespeichert - nichts wird hochgeladen. Wenn du die Website-Daten des Browsers löschst, sind sie weg - lade also herunter, was du behalten willst.',
        'Download every document as a .shls file in one ZIP': 'Jedes Dokument als .shls-Datei in einem ZIP herunterladen',
        'Download all (ZIP)': 'Alle herunterladen (ZIP)',
        'Rename': 'Umbenennen',
        'Download as .shls': 'Als .shls herunterladen',
        'Delete': 'Löschen',
        'New name': 'Neuer Name',
        'This document is open': 'Dieses Dokument ist offen',
        'Click to open this document': 'Klicken, um dieses Dokument zu öffnen',
        'No documents yet.': 'Noch keine Dokumente.',

        /* ---------- AI Assistant ---------- */
        'Any AI can work with you - ChatGPT, Claude, Gemini, Copilot. The prompt explains SHLS, so the AI writes valid SHLS.':
            'Jede KI kann mit dir arbeiten - ChatGPT, Claude, Gemini, Copilot. Der Prompt erklärt SHLS, damit die KI gültiges SHLS schreibt.',
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
        'Paste it into your AI and say what it should change.': 'Füge ihn in deine KI ein und sag, was sie ändern soll.',
        '(no key yet)': '(noch kein Schlüssel)',
        '(key valid while the editor is open)': '(der Schlüssel gilt, solange der Editor offen ist)',
        'The link could not be read': 'Der Link liess sich nicht lesen',
        'The document in this link is incomplete or damaged. If the AI\'s link was split over several lines (as in a terminal), copy the whole answer and paste it into the editor with Ctrl+V - the editor joins the lines.':
            'Das Dokument in diesem Link ist unvollständig oder beschädigt. Wenn der Link der KI über mehrere Zeilen verteilt war (wie in einem Terminal), kopiere die ganze Antwort und füge sie mit Ctrl+V in den Editor ein - der Editor fügt die Zeilen zusammen.',
        'Loading…': 'Wird geladen …',
        'Taken over by your editor': 'Von deinem Editor übernommen',
        'The document is now in the SHLS Editor tab you already had open. Switch to that tab, or open it here.':
            'Das Dokument ist jetzt im Tab mit dem SHLS-Editor, den du schon offen hattest. Wechsle zu diesem Tab oder öffne es hier.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)': 'Kopieren ist hier nicht erlaubt - der Text ist unten markiert: drücke Ctrl+C (⌘C)',
        'Prompt copied - paste it into your AI and say what it should write': 'Prompt kopiert - füge ihn in deine KI ein und sag, was sie schreiben soll',
        'This link is incomplete or damaged - please ask the AI to send it again': 'Dieser Link ist unvollständig oder beschädigt - bitte die KI, ihn nochmals zu senden',

        /* ---------- Save to your server ---------- */
        'Save to your server': 'Auf deinem Server speichern',
        'Webhook address': 'Webhook-Adresse',
        'https://example.com/api/shls': 'https://beispiel.ch/api/shls',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(optional, wird als «Authorization: Bearer …» gesendet; bleibt nur, bis dieser Tab geschlossen wird)',
        'Send automatically a few seconds after each change (otherwise only when you click': 'Automatisch ein paar Sekunden nach jeder Änderung senden (sonst nur, wenn du auf',
        'or press Ctrl+S)': 'klickst oder Ctrl+S drückst)',
        'Only for “': 'Nur für «',
        '” (other documents use the general address)': '» (andere Dokumente nutzen die allgemeine Adresse)',
        'What your server receives': 'Was dein Server erhält',
        'A POST request with JSON (your server must allow CORS from https://shls.giit.ch); content is the document as a string:':
            'Eine POST-Anfrage mit JSON (dein Server muss CORS von https://shls.giit.ch erlauben); content ist das Dokument als Text:',
        'Embed the editor in your website': 'Den Editor in deine Website einbetten',
        'Send now': 'Jetzt senden',
        'Save setting': 'Einstellung speichern',

        /* ---------- Help ---------- */
        'How it works': 'So funktioniert es',
        'Keyboard shortcuts': 'Tastenkürzel',
        'In the records: go up and down, fold and unfold': 'In den Datensätzen: nach oben und unten gehen, zu- und aufklappen',
        'In the records: change the value, key or section name': 'In den Datensätzen: den Wert, Schlüssel oder Abschnittsnamen ändern',
        'In the records: remove the record or key': 'In den Datensätzen: den Datensatz oder Schlüssel entfernen',
        'In the records: move the record or key up / down': 'In den Datensätzen: den Datensatz oder Schlüssel nach oben / unten schieben',
        'Indent / outdent in the code by one level': 'Im Code um eine Ebene ein- / ausrücken',
        'Undo / redo': 'Rückgängig / wiederholen',
        'Save (download, or to your server) / export': 'Speichern (herunterladen oder auf deinem Server) / exportieren',
        'Alt': 'Alt',
        'Escape': "Esc-Taste",
        'A click in the middle puts the code\'s cursor on that line; the cursor in the code marks its record, key or value. Problems (a record with a value too few, indentation that is not a whole level, a missing blank line) are listed above the code with their line - click one to go there.':
            'Ein Klick in der Mitte setzt den Cursor im Code auf diese Zeile; der Cursor im Code markiert seinen Datensatz, Schlüssel oder Wert. Probleme (ein Datensatz mit einem Wert zu wenig, eine Einrückung, die keine ganze Ebene ist, eine fehlende Leerzeile) stehen mit ihrer Zeile über dem Code - klicke auf eines, um dorthin zu gehen.',
        'Enter keeps the indentation of the line; after a section name it starts the key block.': 'Enter behält die Einrückung der Zeile; nach einem Abschnittsnamen beginnt es den Schlüsselblock.',

        /* ---------- Messages ---------- */
        'The browser storage is full - download and delete documents under "My documents"': 'Der Browserspeicher ist voll - lade Dokumente unter «Meine Dokumente» herunter und lösche sie',
        'The browser storage is full - delete or download documents under "My documents" first': 'Der Browserspeicher ist voll - lösche oder lade zuerst Dokumente unter «Meine Dokumente» herunter',
        'The browser storage is full - delete or download some documents first': 'Der Browserspeicher ist voll - lösche oder lade zuerst ein paar Dokumente herunter',
        'The browser storage is full': 'Der Browserspeicher ist voll',
        'Nothing to undo': 'Nichts rückgängig zu machen',
        'Nothing to redo': 'Nichts zu wiederholen',
        'Nothing changed': 'Nichts geändert',
        'Choose a section, key or record first': 'Wähle zuerst einen Abschnitt, Schlüssel oder Datensatz',
        'Choose a key or a record to move or duplicate it': 'Wähle einen Schlüssel oder Datensatz, um ihn zu verschieben oder zu duplizieren',
        'This nested list has no records to add after': 'Diese verschachtelte Liste hat keinen Datensatz, nach dem etwas hinzukommen kann',
        'SHLS values have one line - the line breaks became spaces': 'SHLS-Werte haben eine Zeile - die Zeilenumbrüche wurden zu Leerzeichen',
        'Spaces around the value were removed - SHLS values cannot start with spaces': 'Die Leerzeichen um den Wert wurden entfernt - SHLS-Werte können nicht mit Leerzeichen beginnen',
        'SHLS has no empty values (a blank line is skipped) - write a placeholder such as - or PH': 'SHLS kennt keine leeren Werte (eine Leerzeile wird übersprungen) - schreibe einen Platzhalter wie - oder PH',
        'A key needs a name': 'Ein Schlüssel braucht einen Namen',
        'A section needs a name': 'Ein Abschnitt braucht einen Namen',
        'A key block needs at least one key - add another key first': 'Ein Schlüsselblock braucht mindestens einen Schlüssel - füge zuerst einen weiteren hinzu',
        'This key is not there any more': 'Diesen Schlüssel gibt es nicht mehr',
        'This line is not there any more': 'Diese Zeile gibt es nicht mehr',
        'This record is not there any more': 'Diesen Datensatz gibt es nicht mehr',
        'This is the first record': 'Das ist der erste Datensatz',
        'This is the last record': 'Das ist der letzte Datensatz',
        'This is the first key': 'Das ist der erste Schlüssel',
        'This is the last key': 'Das ist der letzte Schlüssel',
        'This document is empty already': 'Dieses Dokument ist schon leer',
        'All data is removed. "Undo" brings it back as long as the page is open.': 'Alle Daten werden entfernt. «Rückgängig» holt sie zurück, solange die Seite offen ist.',
        'Start over': 'Neu beginnen',
        'The file is larger than 8 MB': 'Die Datei ist grösser als 8 MB',
        'The CSV file is empty': 'Die CSV-Datei ist leer',
        'The YAML package is not loaded yet': 'Das YAML-Paket ist noch nicht geladen',
        'Downloaded': 'Heruntergeladen',
        'Copied to the clipboard': 'In die Zwischenablage kopiert',
        'Code copied': 'Code kopiert',
        '.shls downloaded': '.shls heruntergeladen',
        'Replace': 'Ersetzen',
        'The document is removed from this browser for good. Download it first if you want to keep a copy.':
            'Das Dokument wird endgültig aus diesem Browser entfernt. Lade es zuerst herunter, wenn du eine Kopie behalten willst.',
        'unknown format': 'unbekanntes Format',

        /* What SHLS cannot keep (opening JSON, YAML, CSV) */
        'An object inside a record becomes a list with this one object.': 'Ein Objekt in einem Datensatz wird zu einer Liste mit diesem einen Objekt.',
        'Plain values where SHLS expects records (in a list or as a section) become records with the one key "Value".': 'Einfache Werte, wo SHLS Datensätze erwartet (in einer Liste oder als Abschnitt), werden zu Datensätzen mit dem einen Schlüssel «Value».',
        'Empty values become blank lines, which SHLS readers skip - the values after them move up. Write a placeholder such as -.': 'Leere Werte werden zu Leerzeilen, die SHLS-Leser überspringen - die folgenden Werte rücken nach. Schreibe einen Platzhalter wie -.',
        'Values with several lines are not supported by SHLS - they break the records apart.': 'Werte mit mehreren Zeilen unterstützt SHLS nicht - sie teilen die Datensätze auf.',
        'Values that start or end with spaces lose them (and leading spaces change the indentation).': 'Werte, die mit Leerzeichen beginnen oder enden, verlieren sie (und Leerzeichen am Anfang ändern die Einrückung).',

        /* ---------- Problems in the code ---------- */
        'A tab in the indentation - SHLS counts spaces only, so this line is read as a section name': 'Ein Tabulator in der Einrückung - SHLS zählt nur Leerzeichen, darum wird diese Zeile als Abschnittsname gelesen',
        'SHLS readers ignore this line - its indentation does not fit the key block': 'SHLS-Leser beachten diese Zeile nicht - ihre Einrückung passt nicht zum Schlüsselblock',
    },

    html: {

        '<b>Export</b> also has <b>Open in another editor</b>: it converts the document and opens it as a new document there. Anything the other format cannot hold is listed first.':

            '<b>Exportieren</b> bietet auch <b>In einem anderen Editor öffnen</b>: Das Dokument wird umgewandelt und dort als neues Dokument geöffnet. Was das andere Format nicht aufnehmen kann, wird vorher aufgelistet.',
        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Klicke auf <b>Prompt kopieren</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'Die KI antwortet mit einem Link: Klicke darauf, oder füge die ganze Antwort unten ein. <b>Rückgängig</b> nimmt es zurück.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'Die KI antwortet mit einem Link: <b>Füge ihre ganze Antwort unten ein</b> (ein angeklickter Link öffnet einen eigenen Editor). <b>Rückgängig</b> nimmt es zurück.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'Der Editor kann jede gespeicherte Fassung an deinen eigenen Server senden (einen <b>Webhook</b>), damit deine Arbeit dort liegt, wo du sie haben willst. Gesendet wird erst, wenn du hier eine Adresse eingibst.',
        'Also possible: <code>?src=&lt;URL of a .shls file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>shlseditor:ai</code>, <code>shlseditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Auch möglich: <code>?src=&lt;URL einer .shls-Datei&gt;</code> öffnet eine Datei, <code>&amp;webhook=&lt;URL&gt;</code> speichert dieses Dokument dort. Der Editor kann sich auch in einem eigenen Fenster öffnen (<code>?embed=window</code>), und deine Seite kann ihm ihren eigenen KI-Prompt und einen Sitzungsschlüssel geben, damit die KI ihr Ergebnis an deinen Server schickt (<code>shlseditor:ai</code>, <code>shlseditor:key-request</code>) - siehe «Den Editor auf deiner eigenen Website nutzen» unter dem Editor. Die Einzelheiten stehen in <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> SHLS on the left - or start with <b>New</b> and one of the templates. A section is its name, then its keys (indented by one space, the keys of a nested list one level deeper), exactly one blank line, then the records: one value per line in the order of the keys.':
            '<b>Schreibe</b> SHLS links - oder beginne mit <b>Neu</b> und einer der Vorlagen. Ein Abschnitt ist sein Name, dann seine Schlüssel (um ein Leerzeichen eingerückt, die Schlüssel einer verschachtelten Liste eine Ebene tiefer), genau eine Leerzeile, dann die Datensätze: ein Wert pro Zeile in der Reihenfolge der Schlüssel.',
        'The middle shows each section with its <b>key block</b> and its <b>records</b>, the keys as labels; nested lists fold. It reads the code exactly as the reference SHLSDecoder does.':
            'Die Mitte zeigt jeden Abschnitt mit seinem <b>Schlüsselblock</b> und seinen <b>Datensätzen</b>, die Schlüssel als Beschriftung; verschachtelte Listen lassen sich zuklappen. Sie liest den Code genau so wie der Referenz-SHLSDecoder.',
        '<b>Click a value, a key or a section name</b> to change it right there. <b>Enter</b> or a click elsewhere writes the change into the code (one step for Undo), <b>Escape</b> cancels. The buttons above add, duplicate, move and remove records and keys - a key added or removed is added to or removed from every record.':
            '<b>Klicke auf einen Wert, einen Schlüssel oder einen Abschnittsnamen</b>, um ihn direkt dort zu ändern. <b>Enter</b> oder ein Klick anderswo schreibt die Änderung in den Code (ein Schritt für Rückgängig), <b>Esc</b> bricht ab. Die Schaltflächen darüber fügen Datensätze und Schlüssel hinzu, duplizieren, verschieben und entfernen sie - ein Schlüssel, der hinzukommt oder wegfällt, kommt in jedem Datensatz hinzu oder fällt dort weg.',
        '<b>Record</b> on the right shows the selected record as a form; <b>Insert</b> adds records, keys and sections; <b>Convert</b> counts the tokens against JSON and converts to JSON, YAML, CSV and JSON Lines; <b>Outline</b> lists the sections.':
            '<b>Datensatz</b> rechts zeigt den gewählten Datensatz als Formular; <b>Einfügen</b> fügt Datensätze, Schlüssel und Abschnitte hinzu; <b>Umwandeln</b> zählt die Tokens im Vergleich zu JSON und wandelt in JSON, YAML, CSV und JSON-Lines um; <b>Gliederung</b> listet die Abschnitte auf.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser. <b>Export</b> saves it as SHLS, JSON, YAML, CSV or text.':
            '<b>Meine Dokumente</b> (die Ordnerschaltfläche oben links) listet jedes Dokument auf, das in diesem Browser liegt. <b>Exportieren</b> speichert es als SHLS, JSON, YAML, CSV oder Text.',
    },

    patterns: [
        /* ---------- Status lines and counts ---------- */
        ['^(\\d+) (?:line|lines) · ([\\d.]+ K?B) · (\\d+) (?:section|sections)$', (m, l, kb, s) => `${l} ${getPlural(l, 'Zeile', 'Zeilen')} · ${kb} · ${s} ${getPlural(s, 'Abschnitt', 'Abschnitte')}`],
        ['^([\\d,]+) bytes$', (m, b) => `${formatThousands(b)} Bytes`],
        ['^(\\d+) (?:record|records) · (\\d+) (?:key|keys)$', (m, r, k) => `${r} ${translateRecords(r)} · ${k} Schlüssel`],
        ['^(\\d+) (?:record|records) · (\\d+) (?:key|keys) · line (\\d+)$', (m, r, k, l) => `${r} ${translateRecords(r)} · ${k} Schlüssel · Zeile ${l}`],
        ['^(\\d+) (?:record|records) · line (\\d+)$', (m, r, l) => `${r} ${translateRecords(r)} · Zeile ${l}`],
        ['^(\\d+) (?:record|records)$', (m, r) => `${r} ${translateRecords(r)}`],
        ['^(\\d+) (?:problem|problems)$', (m, k) => `${k} ${getPlural(k, 'Problem', 'Probleme')}`],
        ['^nested list · (\\d+) (?:key|keys)$', 'verschachtelte Liste · $1 Schlüssel'],
        ['^(nested list · )?level (\\d+) · line (\\d+)$', (m, nl, l, z) => `${nl ? 'verschachtelte Liste · ' : ''}Ebene ${l} · Zeile ${z}`],
        ['^record (\\d+) of (\\d+) · lines (\\d+)-(\\d+)$', 'Datensatz $1 von $2 · Zeilen $3-$4'],
        ['^SHLS needs about (\\d+) % fewer tokens than the same data as JSON - approximate tokens of common AI models\\.$', 'SHLS braucht etwa $1 % weniger Tokens als dieselben Daten als JSON - ungefähre Tokens gängiger KI-Modelle.'],
        ['^The same data as JSON needs about as many tokens - approximate tokens of common AI models\\.$', 'Dieselben Daten als JSON brauchen etwa gleich viele Tokens - ungefähre Tokens gängiger KI-Modelle.'],
        ['^The records of "(.+)": its keys are the columns, a nested list is one cell with JSON\\.$', 'Die Datensätze von «$1»: seine Schlüssel sind die Spalten, eine verschachtelte Liste ist eine Zelle mit JSON.'],
        ['^One record of "(.+)" per line\\.$', 'Ein Datensatz von «$1» pro Zeile.'],
        ['^"(.+)" has no records$', '«$1» hat keine Datensätze'],

        /* ---------- Problems above the code ---------- */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} Fehler`],
        ['^(\\d+) (?:note|notes)$', (m, k) => `${k} ${getPlural(k, 'Hinweis', 'Hinweise')}`],
        ['^· (\\d+) (?:note|notes)$', (m, k) => `· ${k} ${getPlural(k, 'Hinweis', 'Hinweise')}`],
        ['^Line (\\d+)$', 'Zeile $1'],
        ['^Indented by (\\d+) (?:space|spaces) - not a whole level \\((\\d+) (?:space|spaces) per level\\)$', 'Um $1 Leerzeichen eingerückt - keine ganze Ebene ($2 Leerzeichen pro Ebene)'],
        ['^Indented (\\d+) levels deeper than the line above - one level at a time$', 'Um $1 Ebenen tiefer eingerückt als die Zeile darüber - eine Ebene nach der anderen'],
        ['^"(.+)" has no key block yet - these lines are read as its keys \\(the key block follows the section name directly\\)$', '«$1» hat noch keinen Schlüsselblock - diese Zeilen werden als seine Schlüssel gelesen (der Schlüsselblock folgt direkt auf den Abschnittsnamen)'],
        ['^The key "(.+)" is twice in the key block - only one of them keeps its values\\. Is the blank line between the key block and the records missing\\?$', 'Der Schlüssel «$1» steht zweimal im Schlüsselblock - nur einer behält seine Werte. Fehlt die Leerzeile zwischen dem Schlüsselblock und den Datensätzen?'],
        ['^"(.+)" looks like a value but stands in the key block - records follow the key block after exactly one blank line$', '«$1» sieht wie ein Wert aus, steht aber im Schlüsselblock - Datensätze folgen nach genau einer Leerzeile auf den Schlüsselblock'],
        ['^(\\d+) blank lines after the key block of "(.+)" - exactly one belongs there$', '$1 Leerzeilen nach dem Schlüsselblock von «$2» - dorthin gehört genau eine'],
        ['^This record of "(.+)" has (\\d+) of (\\d+) values - its last keys are missing in the data$', 'Dieser Datensatz von «$1» hat $2 von $3 Werten - seine letzten Schlüssel fehlen in den Daten'],
        ['^No blank line before this record of "(.+)" while the others have one - the record above may have more values than the key block \\((\\d+)\\)$', 'Keine Leerzeile vor diesem Datensatz von «$1», die anderen haben eine - der Datensatz darüber hat vielleicht mehr Werte als der Schlüsselblock ($2)'],
        ['^A blank line inside a record of "(.+)" - the record may have fewer values than the key block \\((\\d+)\\)$', 'Eine Leerzeile in einem Datensatz von «$1» - der Datensatz hat vielleicht weniger Werte als der Schlüsselblock ($2)'],

        /* ---------- Messages with names ---------- */
        ['^"(.+)" has no key block - write its keys first$', '«$1» hat keinen Schlüsselblock - schreibe zuerst seine Schlüssel'],
        ['^"(.+)" has no key block$', '«$1» hat keinen Schlüsselblock'],
        ['^There is already a section "(.+)"$', 'Es gibt schon einen Abschnitt «$1»'],
        ['^There is no section "(.+)"$', 'Es gibt keinen Abschnitt «$1»'],
        ['^Remove the section "(.+)"\\?$', 'Den Abschnitt «$1» entfernen?'],
        ['^Its key block and its (\\d+) (?:record is|records are) removed\\. "Undo" brings them back\\.$', (m, k) => `Sein Schlüsselblock und ${getPlural(k, 'sein Datensatz werden', `seine ${k} Datensätze werden`)} entfernt. «Rückgängig» holt sie zurück.`],
        ['^Remove the key "(.+)"\\?$', 'Den Schlüssel «$1» entfernen?'],
        ['^Its value is removed from every record of "(.+)" \\((\\d+)\\)\\. "Undo" brings it back\\.$', 'Sein Wert wird aus jedem Datensatz von «$1» entfernt ($2). «Rückgängig» holt ihn zurück.'],
        ['^Path copied: (.*)$', 'Pfad kopiert: $1'],
        ['^Line (\\d+): (.*)$', 'Zeile $1: $2'],
        ['^"(.+)" converted from ([\\w ]+)$', '«$1» aus $2 umgewandelt'],
        ['^SHLS cannot keep all of this data: (.*)$', 'SHLS kann nicht alle diese Daten speichern: $1'],
        ['^"(.+)" is open\\. My documents: open, rename, duplicate or delete your documents \\(Ctrl\\+O\\)$', '«$1» ist offen. Meine Dokumente: deine Dokumente öffnen, umbenennen, duplizieren oder löschen (Ctrl+O)'],
        ['^Start "(.+)" over\\?$', '«$1» neu beginnen?'],
        ['^Start "(.+)" over$', '«$1» neu beginnen'],
        ['^(\\d+) (?:document|documents) · (.+) in this browser$', (m, k, s) => `${k} ${getPlural(k, 'Dokument', 'Dokumente')} · ${formatSize(s)} in diesem Browser`],
        ['^No document named "(.*)"\\.$', 'Kein Dokument namens «$1».'],
        ['^Open now · (.+)$', (m, s) => `Jetzt offen · ${formatSize(s)}`],
        ['^(just now|yesterday|\\d+ min ago|\\d+ h ago|[A-Z][a-z]{2} \\d{1,2}, \\d{4}) · (.+)$', (m, w, s) => `${formatTime(w)} · ${formatSize(s)}`],
        ['^(.+) \\(open now\\)$', '$1 (jetzt offen)'],
        ['^ZIP with (\\d+) (?:document|documents) downloaded$', (m, k) => `ZIP mit ${k} ${getPlural(k, 'Dokument', 'Dokumenten')} heruntergeladen`],
        ['^ZIP downloaded with (\\d+) files$', 'ZIP mit $1 Dateien heruntergeladen'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '«$1» ist jetzt leer - «Rückgängig» holt es zurück'],
        ['^"(.+)" opened$', '«$1» geöffnet'],
        ['^New document "(.+)" - your other documents are under "My documents"$', 'Neues Dokument «$1» - deine anderen Dokumente sind unter «Meine Dokumente»'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$', 'Neues Dokument «$1» von der KI - deine anderen Dokumente bleiben unverändert'],
        ['^"(.+)" is not a file the editor can open$', '«$1» ist keine Datei, die der Editor öffnen kann'],
        ['^Opened "(.+)" - converted from ([\\w ]+)$', '«$1» geöffnet - aus $2 umgewandelt'],
        ['^Opened "(.+)" - it is now in "My documents"$', '«$1» geöffnet - die Datei ist jetzt unter «Meine Dokumente»'],
        ['^"(.+)" could not be opened: (.*)$', '«$1» liess sich nicht öffnen: $2'],
        ['^The addition is not valid SHLS - it is open as a new document "(.+)"$', 'Die Ergänzung ist kein gültiges SHLS - sie ist als neues Dokument «$1» offen'],
        ['^(.+) - the addition is open as a new document "(.+)"$', '$1 - die Ergänzung ist als neues Dokument «$2» offen'],
        ['^Document received - (\\d+) (?:problem|problems) found, see above the code$', (m, k) => `Dokument erhalten - ${k} ${getPlural(k, 'Problem', 'Probleme')} gefunden, siehe über dem Code`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '«$1» von der KI geändert - «Rückgängig» nimmt es zurück'],
        ['^"(.+)" duplicated$', '«$1» dupliziert'],
        ['^Delete "(.+)"\\?$', '«$1» löschen?'],
        ['^"(.+)" deleted$', '«$1» gelöscht'],

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
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', '$1 öffnen'],
    ],
};
