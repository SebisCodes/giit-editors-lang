/* French texts of the CSV editor: the bar, the work area (code, table,
   format, column, insert), its dialogs and messages, and the problems the
   editor finds in the CSV. What all editors share is in common.js;
   how the dictionaries are used is described in i18n.js. Names of
   documents, columns and cell values stay as they are: the patterns copy
   them into the French text. */

import { formatTime, getPlural } from './format.js';

/* French: 0 and 1 take the singular */

/* "1,234" -> "1 234" (French thousands separator: narrow no-break space) */
/**
 * Writes the thousands separator of the language into a number ("1,234").
 * @param {string} s - the number with English separators.
 * @returns {string} the text in the language.
 */
const formatThousands = s => s.replace(/,/g, ' ');
/* "123 bytes" / "1.5 KB" -> French unit and decimal comma */
/**
 * Translates the unit of a size text ("123 bytes").
 * @param {string} s - the English size text.
 * @returns {string} the text in the language.
 */
const formatSize = s => s.replace(/ bytes$/, ' octets').replace(/ B$/, ' o').replace(/ KB$/, ' Ko').replace(/ MB$/, ' Mo').replace(/(\d)\.(\d)/, '$1,$2');

/* When a document was last changed (files.js): "just now", "5 min ago", "Oct 25, 2026" … */

/* Names of the separators */
const SEPS = { comma: 'virgule', semicolon: 'point-virgule', tab: 'tabulation', pipe: 'barre verticale' };

export default {
    text: {
        /* ---------- Template placeholders (?template=): views of the table, box, side panel ---------- */
        'Show or hide the side panel': 'Afficher ou masquer le panneau latéral',
        'Examples': 'Exemples',
        'Template': 'Modèle',
        'The template with its placeholders as written': 'Le modèle avec ses espaces réservés tels qu’ils sont écrits',
        'Placeholders': 'Espaces réservés',
        'The placeholders of the template - a click on one puts its tag at the cursor': 'Les espaces réservés du modèle - cliquez sur l’un d’eux pour insérer sa balise au curseur',
        'Shown': 'Affiché',
        'Hidden': 'Masqué',
        'This part shows an example - change it in the template view or in the code': 'Cette partie affiche un exemple - modifiez-la dans la vue du modèle ou dans le code',
        'View of the table': 'Vue du tableau',
        'The table filled with the examples': 'Le tableau rempli avec les exemples',
        'The examples could not be filled in - the table shows the template': 'Les exemples n\'ont pas pu être insérés - le tableau affiche le modèle',
        /* ---------- Top bar ---------- */
        'CSV Editor - home': 'Éditeur CSV - accueil',
        'CSV Editor': 'Éditeur CSV',
        'File': 'Fichier',
        'My documents (Ctrl+O)': 'Mes documents (Ctrl+O)',
        'My documents': 'Mes documents',
        'New document, or start this one over': 'Nouveau document, ou recommencer celui-ci',
        'New': 'Nouveau',
        'New empty table': 'Nouveau tableau vide',
        'Three columns - your other documents stay as they are': 'Trois colonnes - vos autres documents restent tels quels',
        'Contacts': 'Contacts',
        'Names, email addresses and phone numbers': 'Noms, adresses e-mail et numéros de téléphone',
        'Product list': 'Liste de produits',
        'Article numbers, prices and stock': 'Références, prix et stock',
        'Budget': 'Budget',
        'Separated by semicolons, with decimal commas': 'Séparé par des points-virgules, avec virgules décimales',
        'Time sheet': 'Relevé d’heures',
        'Separated by tabs (TSV)': 'Séparé par des tabulations (TSV)',
        'The welcome example': 'L’exemple de bienvenue',
        'Quotes, commas and line breaks in fields': 'Guillemets, virgules et sauts de ligne dans les champs',
        'Start this document over': 'Recommencer ce document',
        'Keeps the header row, removes the data - "Undo" brings it back': 'Conserve la ligne d’en-tête, supprime les données - « Annuler » les rétablit',
        'Open a CSV or TSV file from your computer (you can also drag it into the window)': 'Ouvrir un fichier CSV ou TSV depuis votre ordinateur (vous pouvez aussi le glisser dans la fenêtre)',
        'Open file…': 'Ouvrir un fichier…',
        'Undo the last change (Ctrl+Z)': 'Annuler la dernière modification (Ctrl+Z)',
        'Undo': 'Annuler',
        'Redo the change you just undid (Ctrl+Y)': 'Rétablir la modification annulée (Ctrl+Y)',
        'Redo': 'Rétablir',
        'Output': 'Sortie',
        'Color theme': 'Thème de couleurs',
        'Light theme': 'Thème clair',
        'Dark theme': 'Thème sombre',
        'Same as your system setting': 'Comme le réglage de votre système',
        'Automatic theme (system setting)': 'Thème automatique (réglage du système)',
        'Let any AI write in this editor': 'Laisser n’importe quelle IA écrire dans cet éditeur',
        'AI Assistant': 'Assistant IA',
        'Save to your own server and embed the editor in your website': 'Enregistrer sur votre propre serveur et intégrer l’éditeur dans votre site web',
        'Save to server': 'Enregistrer sur un serveur',
        'How it works and keyboard shortcuts (?)': 'Fonctionnement et raccourcis clavier (?)',
        'Help': 'Aide',
        'Save the document as a .csv file (Ctrl+S)': 'Enregistrer le document en fichier .csv (Ctrl+S)',
        'Download .csv': 'Télécharger le .csv',
        'Excel (XLSX), JSON, Markdown, HTML, TSV and more (Ctrl+E)': 'Excel (XLSX), JSON, Markdown, HTML, TSV et plus (Ctrl+E)',
        'Export…': 'Exporter…',

        /* ---------- Views and work area ---------- */
        'View': 'Affichage',
        'Edit': 'Modifier',
        'Side panel': 'Panneau latéral',
        'Table': 'Tableau',
        'CSV code': 'Code CSV',
        'Copy the CSV text to the clipboard': 'Copier le texte CSV dans le presse-papiers',
        'Copy code': 'Copier le code',
        'Copy': 'Copier',
        'Drag to change the width of the code area': 'Faire glisser pour modifier la largeur de la zone de code',
        'Drag to change the width': 'Faire glisser pour modifier la largeur',
        'Filter rows': 'Filtrer les lignes',
        'Show only rows that contain this text (Ctrl+F)': 'Afficher seulement les lignes contenant ce texte (Ctrl+F)',
        'Filter in': 'Filtrer dans',
        'Filter in all columns or in one': 'Filtrer dans toutes les colonnes ou dans une seule',
        'All columns': 'Toutes',
        'Put the rows of the CSV into this order (one step for Undo)': 'Mettre les lignes du CSV dans cet ordre (une seule étape pour Annuler)',
        'Sort the data': 'Trier les données',
        'Show the rows in the order of the file': 'Afficher les lignes dans l’ordre du fichier',
        'Turn off sorting': 'Désactiver le tri',
        'Add a row below the selected one': 'Ajouter une ligne sous la ligne sélectionnée',
        'Add a row': 'Ajouter une ligne',
        'Add a column at the end': 'Ajouter une colonne à la fin',
        'Add a column': 'Ajouter une colonne',
        'Table: arrow keys move, Enter edits, Ctrl+C / Ctrl+V copy and paste': 'Tableau : les flèches déplacent, Entrée modifie, Ctrl+C / Ctrl+V copient et collent',
        'No data rows yet - type into the row marked ＋ or paste cells from a spreadsheet.': 'Pas encore de lignes de données - tapez dans la ligne marquée ＋ ou collez des cellules d’un tableur.',
        'How the text is read: separator, quotes, header row, encoding, line endings': 'Comment le texte est lu : séparateur, guillemets, ligne d’en-tête, encodage, fins de ligne',
        'Column': 'Colonne',
        'What the selected column holds': 'Ce que contient la colonne sélectionnée',
        'Insert': 'Insérer',
        'Rows, columns and cleaning up': 'Lignes, colonnes et nettoyage',
        'Open it here': 'L’ouvrir ici',
        'Drop the CSV file here': 'Déposez ici le fichier CSV',
        'Hide': 'Masquer',
        'Show': 'Afficher',

        /* the table (grid.js translates these itself: the table is marked data-no-i18n) */
        'Select everything (Ctrl+A)': 'Tout sélectionner (Ctrl+A)',
        '(empty)': '(vide)',
        'Sort the view by this column': 'Trier l’affichage selon cette colonne',
        'Type here to add a row': 'Tapez ici pour ajouter une ligne',
        'Select the row': 'Sélectionner la ligne',
        'Cell': 'Cellule',

        /* ---------- Format ---------- */
        'Reading the text': 'Lecture du texte',
        'Separator': 'Séparateur',
        'Detect it': 'Le détecter',
        'Comma ( , )': 'Virgule ( , )',
        'Semicolon ( ; )': 'Point-virgule ( ; )',
        'Tab': 'Tabulation',
        'Pipe ( | )': 'Barre verticale ( | )',
        'Quote character': 'Délimiteur de texte',
        'Double quote ( " )': 'Guillemet double ( " )',
        "Single quote ( ' )": 'Apostrophe ( \' )',
        'The first row holds the column names': 'La première ligne contient les noms des colonnes',
        'row': 'ligne',
        'rows': 'lignes',
        'column': 'colonne',
        'columns': 'colonnes',
        'Line endings': 'Fins de ligne',
        'Windows (CRLF)': 'Windows (CRLF)',
        'Unix, macOS (LF)': 'Unix, macOS (LF)',
        'old Mac (CR)': 'ancien Mac (CR)',
        'Opened as': 'Ouvert en',
        'UTF-8 with BOM': 'UTF-8 avec BOM',
        'Opening files': 'Ouverture des fichiers',
        'Encoding of files you open': 'Encodage des fichiers que vous ouvrez',
        'Detect it (UTF-8, otherwise Windows-1252)': 'Le détecter (UTF-8, sinon Windows-1252)',
        'Always UTF-8': 'Toujours UTF-8',
        'Always Windows-1252 (Western European)': 'Toujours Windows-1252 (Europe occidentale)',
        'Read again as UTF-8': 'Relire en UTF-8',
        'Read again as Windows-1252': 'Relire en Windows-1252',
        'Download with a byte order mark (BOM), so that Excel reads UTF-8 correctly': 'Télécharger avec une marque d’ordre des octets (BOM), pour qu’Excel lise correctement l’UTF-8',
        'Convert': 'Convertir',
        'New separator': 'Nouveau séparateur',
        'Quote every field': 'Guillemets partout',
        'Quotes only where needed': 'Guillemets si besoin',

        /* ---------- Column ---------- */
        'Click a cell or a column head in the table to see what the column holds.': 'Cliquez sur une cellule ou un en-tête de colonne du tableau pour voir ce que contient la colonne.',
        'Kind': 'Type',
        'Numbers': 'Nombres',
        'Dates': 'Dates',
        'Empty': 'Vides',
        'Filled': 'Remplies',
        'Different values': 'Valeurs différentes',
        'Smallest': 'Minimum',
        'Largest': 'Maximum',
        'Sum': 'Somme',
        'Average': 'Moyenne',
        'Earliest': 'La plus ancienne',
        'Latest': 'La plus récente',
        'Most frequent values': 'Valeurs les plus fréquentes',
        'Sort the data by this column': 'Trier les données selon cette colonne',
        'Ascending (A → Z)': 'Croissant (A → Z)',
        'Descending (Z → A)': 'Décroissant (Z → A)',
        'This changes the order of the rows in the CSV. Sorting with the arrows in the column heads only changes the view.': 'Ceci modifie l’ordre des lignes dans le CSV. Trier avec les flèches des en-têtes de colonne ne modifie que l’affichage.',

        /* ---------- Insert ---------- */
        'Rows': 'Lignes',
        'Row above': 'Ligne au-dessus',
        'Row below': 'Ligne en dessous',
        'Duplicate': 'Dupliquer',
        'Delete': 'Supprimer',
        'Delete the selected rows': 'Supprimer les lignes sélectionnées',
        'Move up': 'Monter',
        'Move down': 'Descendre',
        'Columns': 'Colonnes',
        'Column left': 'Colonne à gauche',
        'Column right': 'Colonne à droite',
        'Delete the selected columns': 'Supprimer les colonnes sélectionnées',
        'Move left': 'Vers la gauche',
        'Move right': 'Vers la droite',
        'Clean up': 'Nettoyer',
        'Remove spaces at the start and end of cells': 'Supprimer les espaces au début et à la fin des cellules',
        'Remove empty rows': 'Supprimer les lignes vides',
        'Remove repeated rows': 'Supprimer les lignes répétées',
        'Give every row all fields': 'Compléter les champs de chaque ligne',
        'Rows with fewer fields than the header get empty fields': 'Les lignes ayant moins de champs que l’en-tête reçoivent des champs vides',
        'Every change is written into the CSV and is one step for Undo.': 'Chaque modification est écrite dans le CSV et forme une seule étape pour Annuler.',

        /* ---------- Export ---------- */
        'Close': 'Fermer',
        'File name': 'Nom du fichier',
        'Excel workbook (.xlsx)': 'Classeur Excel (.xlsx)',
        'CSV with a separator of your choice': 'CSV avec le séparateur de votre choix',
        'Tab-separated (.tsv)': 'Séparé par tabulations (.tsv)',
        'JSON (objects with headers, arrays without)': 'JSON (objets avec en-têtes, tableaux sans en-têtes)',
        'Markdown table': 'Tableau Markdown',
        'HTML table (one page)': 'Tableau HTML (une page)',
        'Encoding': 'Encodage',
        'Unicode (UTF-8)': 'Unicode (UTF-8)',
        'UTF-8 with BOM (for Excel)': 'UTF-8 avec BOM (pour Excel)',
        'Windows-1252 (Western European)': 'Windows-1252 (Europe occidentale)',
        'Protect CSV/TSV exports against formulas; plain signed numbers remain unchanged.':
            'Protéger les exports CSV/TSV contre les formules ; les simples nombres signés restent inchangés.',
        'Only the rows shown now (filter and sort of the table)': 'Seulement les lignes affichées (filtre et tri du tableau)',
        'Result': 'Résultat',
        'Download every format at once': 'Télécharger tous les formats d’un coup',
        'All formats (ZIP)': 'Tous les formats (ZIP)',
        'Download': 'Télécharger',
        '(The workbook is made when you download it: one sheet, the header row in bold, numbers as numbers, everything else as text - never as a formula.)':
            '(Le classeur est créé au téléchargement : une feuille, la ligne d’en-tête en gras, les nombres comme nombres, tout le reste comme texte - jamais comme formule.)',

        /* ---------- My documents ---------- */
        'Search by name': 'Rechercher par nom',
        'Search your documents': 'Rechercher dans vos documents',
        'Open a CSV file from your computer as a new document': 'Ouvrir un fichier CSV de votre ordinateur comme nouveau document',
        'New document': 'Nouveau document',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Cliquez sur un document pour l’ouvrir. Ils sont conservés uniquement dans ce navigateur - rien n’est envoyé. Effacer les données de site du navigateur les supprime : téléchargez ceux que vous voulez garder.',
        'Download every document as a .csv file in one ZIP': 'Télécharger tous les documents en fichiers .csv dans un seul ZIP',
        'Download all (ZIP)': 'Tout télécharger (ZIP)',
        'Rename': 'Renommer',
        'Download as .csv': 'Télécharger en .csv',
        'New name': 'Nouveau nom',
        'This document is open': 'Ce document est ouvert',
        'Click to open this document': 'Cliquez pour ouvrir ce document',
        'No documents yet.': 'Pas encore de documents.',
        'The document is removed from this browser for good. Download it first if you want to keep a copy.':
            'Le document est définitivement supprimé de ce navigateur. Téléchargez-le d’abord si vous voulez en garder une copie.',

        /* ---------- AI Assistant ---------- */
        'Any AI can work with you - ChatGPT, Claude, Gemini, Copilot.': 'N’importe quelle IA peut travailler avec vous - ChatGPT, Claude, Gemini, Copilot.',
        'Connected AI': 'IA connectée',
        'Connected to': 'Connecté à',
        'the AI sends its result there, and it opens here.': 'l’IA y envoie son résultat, et il s’ouvre ici.',
        'What': 'Ce que',
        'tells the AI': 'indique à l’IA',
        'The AI should': 'L’IA doit',
        'Change “': 'Modifier « ',
        '”': ' »',
        'Make a new document': 'Créer un nouveau document',
        'The AI\'s answer (or press Ctrl+V anywhere):': 'La réponse de l’IA (ou Ctrl+V n’importe où) :',
        'The table travels in the link after the “#”, which no server sees. What you paste into your AI is handled by its provider.':
            'Le tableau voyage dans le lien après le « # », qu’aucun serveur ne voit. Ce que vous collez dans votre IA est traité par son fournisseur.',
        'The prompt - copy it with Ctrl+C': 'Le prompt - copiez-le avec Ctrl+C',
        'Copy prompt': 'Copier le prompt',
        'Paste it into your AI and say what it should do with the table.': 'Collez-le dans votre IA et dites-lui ce qu’elle doit faire du tableau.',
        'The AI answers with a link: click it, or paste the whole answer below.': 'L’IA répond par un lien : cliquez dessus, ou collez toute la réponse ci-dessous.',
        'takes it back.': 'l’annule.',
        'The AI answers with a link:': 'L’IA répond par un lien :',
        'paste its whole answer below': 'collez toute sa réponse ci-dessous',
        '(a clicked link opens a separate editor).': '(un lien cliqué ouvre un éditeur séparé).',
        '(no key yet)': '(pas encore de clé)',
        '(key valid while the editor is open)': '(clé valable tant que l’éditeur est ouvert)',
        'The link could not be read': 'Le lien n’a pas pu être lu',
        'The document in this link is incomplete or damaged. If the AI\'s link was split over several lines (as in a terminal), copy the whole answer and paste it into the editor with Ctrl+V - the editor joins the lines.':
            'Le document de ce lien est incomplet ou endommagé. Si le lien de l’IA a été coupé sur plusieurs lignes (comme dans un terminal), copiez toute la réponse et collez-la dans l’éditeur avec Ctrl+V - l’éditeur réunit les lignes.',
        'Loading…': 'Chargement…',
        'Taken over by your editor': 'Reçu par votre éditeur',
        'The table is now in the CSV Editor tab you already had open. Switch to that tab, or open it here.': 'Le tableau se trouve maintenant dans l’onglet de l’éditeur CSV que vous aviez déjà ouvert. Passez à cet onglet ou ouvrez-le ici.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)': 'La copie n’est pas autorisée ici - le texte est sélectionné ci-dessous : appuyez sur Ctrl+C (⌘C)',
        'Prompt copied - paste it into your AI and say what it should write': 'Prompt copié - collez-le dans votre IA et dites-lui ce qu’elle doit écrire',
        'This link is incomplete or damaged - please ask the AI to send it again': 'Ce lien est incomplet ou endommagé - demandez à l’IA de le renvoyer',

        /* ---------- Save to your server ---------- */
        'Save to your server': 'Enregistrer sur votre serveur',
        'Webhook address': 'Adresse du webhook',
        'https://example.com/api/csv': 'https://example.com/api/csv',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(facultatif, envoyé comme « Authorization: Bearer … » ; conservé jusqu’à la fermeture de cet onglet)',
        'Send automatically a few seconds after each change (otherwise only when you click': 'Envoyer automatiquement quelques secondes après chaque modification (sinon seulement quand vous cliquez sur',
        'or press Ctrl+S)': 'ou appuyez sur Ctrl+S)',
        'Only for “': 'Seulement pour « ',
        '” (other documents use the general address)': ' » (les autres documents utilisent l’adresse générale)',
        'What your server receives': 'Ce que reçoit votre serveur',
        'A POST request with JSON (your server must allow CORS from https://csv.giit.ch):': 'Une requête POST avec du JSON (votre serveur doit autoriser CORS depuis https://csv.giit.ch) :',
        'Embed the editor in your website': 'Intégrer l’éditeur dans votre site web',
        'Send now': 'Envoyer maintenant',
        'Save setting': 'Enregistrer le réglage',

        /* ---------- Help ---------- */
        'How it works': 'Fonctionnement',
        'A click in the table puts the code\'s cursor on that field; the cursor in the code selects its cell.':
            'Un clic dans le tableau place le curseur du code sur ce champ ; le curseur dans le code sélectionne sa cellule.',
        'Problems (rows with another number of fields, unclosed quotes, empty or repeated header names) are listed above the code - click one to go there.':
            'Les problèmes (lignes avec un autre nombre de champs, guillemets non fermés, noms d’en-tête vides ou répétés) sont listés au-dessus du code - cliquez sur l’un d’eux pour y aller.',
        'Keyboard shortcuts in the table': 'Raccourcis clavier dans le tableau',
        'Move, select a range': 'Se déplacer, sélectionner une plage',
        'Edit the cell (typing replaces its value)': 'Modifier la cellule (la saisie remplace sa valeur)',
        'A line break inside the cell': 'Un saut de ligne dans la cellule',
        'Next / previous cell': 'Cellule suivante / précédente',
        'Empty the selected cells': 'Vider les cellules sélectionnées',
        'Copy / cut / paste (tab-separated, as spreadsheets use it)': 'Copier / couper / coller (séparé par tabulations, comme dans les tableurs)',
        'Select the whole table': 'Sélectionner tout le tableau',
        'Filter the rows': 'Filtrer les lignes',
        'Undo / redo': 'Annuler / rétablir',
        'Save (download .csv, or to your server) / export': 'Enregistrer (télécharger le .csv, ou sur votre serveur) / exporter',
        'in the code': 'dans le code',
        'Go to the cursor\'s cell in the table': 'Aller à la cellule du curseur dans le tableau',
        '+ arrows': '+ flèches',
        '/ typing': '/ saisie',

        /* ---------- Messages ---------- */
        'The browser storage is full - download and delete documents under "My documents"': 'Le stockage du navigateur est plein - téléchargez et supprimez des documents sous « Mes documents »',
        'The browser storage is full - delete or download documents under "My documents" first': 'Le stockage du navigateur est plein - supprimez ou téléchargez d’abord des documents sous « Mes documents »',
        'The browser storage is full - delete or download some documents first': 'Le stockage du navigateur est plein - supprimez ou téléchargez d’abord quelques documents',
        'The browser storage is full': 'Le stockage du navigateur est plein',
        'Nothing to undo': 'Rien à annuler',
        'Nothing to redo': 'Rien à rétablir',
        'This document is empty already': 'Ce document est déjà vide',
        'Start over': 'Recommencer',
        'Every row except the header row is removed. "Undo" brings them back as long as the page is open.': 'Toutes les lignes sauf la ligne d’en-tête sont supprimées. « Annuler » les rétablit tant que la page est ouverte.',
        'Everything is removed. "Undo" brings it back as long as the page is open.': 'Tout est supprimé. « Annuler » le rétablit tant que la page est ouverte.',
        'The file is larger than 60 MB': 'Le fichier dépasse 60 Mo',
        'Downloaded': 'Téléchargé',
        'Copied to the clipboard': 'Copié dans le presse-papiers',
        'CSV copied': 'CSV copié',
        '.csv downloaded': '.csv téléchargé',
        '.tsv downloaded': '.tsv téléchargé',
        'Add': 'Ajouter',
        'Replace': 'Remplacer',
        'Cell copied': 'Cellule copiée',
        'Pasted into 1 cell': 'Collé dans 1 cellule',
        'Row added': 'Ligne ajoutée',
        'Row duplicated': 'Ligne dupliquée',
        'Row deleted - "Undo" brings it back': 'Ligne supprimée - « Annuler » la rétablit',
        'Select a row first': 'Sélectionnez d’abord une ligne',
        'Turn off sorting and the filter to move rows': 'Désactivez le tri et le filtre pour déplacer des lignes',
        'Column added': 'Colonne ajoutée',
        'Column deleted - "Undo" brings it back': 'Colonne supprimée - « Annuler » la rétablit',
        'No cell has spaces at its start or end': 'Aucune cellule n’a d’espaces au début ou à la fin',
        'There are no empty rows': 'Il n’y a pas de lignes vides',
        'There are no repeated rows': 'Il n’y a pas de lignes répétées',
        'Every row has enough fields': 'Chaque ligne a assez de champs',
        'Every field is in quotes now': 'Chaque champ est maintenant entre guillemets',
        'The text already uses this separator': 'Le texte utilise déjà ce séparateur',
        'ZIP downloaded: CSV, TSV, JSON, Markdown, HTML and XLSX': 'ZIP téléchargé : CSV, TSV, JSON, Markdown, HTML et XLSX',

        /* ---------- Problems ---------- */
        'This quote is never closed - the rest of the file is one field': 'Ce guillemet n’est jamais fermé - le reste du fichier forme un seul champ',
        'Text after the closing quote of a field': 'Du texte après le guillemet de fermeture d’un champ',
        'A quote inside a field that does not start with a quote': 'Un guillemet dans un champ qui ne commence pas par un guillemet',
        'Empty line': 'Ligne vide',

        /* texts that stay the same in German (so they are not in the German pack), but not in French */
        'online': 'en ligne',
        'Token': 'Jeton',
        'Text': 'Texte',
        'Name': 'Nom',
    },

    html: {

        '<b>Export</b> also has <b>Open in another editor</b>: it converts the document and opens it as a new document there. Anything the other format cannot hold is listed first.':

            '<b>Exporter</b> propose aussi <b>Ouvrir dans un autre éditeur</b> : le document est converti et ouvert là-bas comme nouveau document. Ce que l’autre format ne peut pas contenir est listé d’abord.',
        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Cliquez sur <b>Copier le prompt</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'L’IA répond par un lien : cliquez dessus, ou collez toute la réponse ci-dessous. <b>Annuler</b> l’annule.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'L’IA répond par un lien : <b>collez toute sa réponse ci-dessous</b> (un lien cliqué ouvre un éditeur séparé). <b>Annuler</b> l’annule.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'L’éditeur peut envoyer chaque version enregistrée à votre propre serveur (un <b>webhook</b>), pour que votre travail soit conservé là où vous le souhaitez. Rien n’est envoyé tant que vous n’avez pas saisi d’adresse ici.',
        'Also possible: <code>?src=&lt;URL of a .csv file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>csveditor:ai</code>, <code>csveditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Également possible : <code>?src=&lt;URL of a .csv file&gt;</code> ouvre un fichier, <code>&amp;webhook=&lt;URL&gt;</code> y enregistre ce document. L’éditeur peut aussi s’ouvrir dans sa propre fenêtre (<code>?embed=window</code>), et votre page peut lui transmettre son propre prompt d’IA et une clé de session pour que l’IA envoie son résultat à votre serveur (<code>csveditor:ai</code>, <code>csveditor:key-request</code>) - voir « Utiliser l’éditeur sur votre propre site web » sous l’éditeur. Les détails se trouvent dans <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Open</b> a CSV file, drop it into the window, or start with <b>New</b>. The raw text is on the left, the table in the middle.':
            '<b>Ouvrez</b> un fichier CSV, déposez-le dans la fenêtre, ou commencez par <b>Nouveau</b>. Le texte brut est à gauche, le tableau au milieu.',
        '<b>Edit cells</b> in the table like in a spreadsheet: type, or press <b>Enter</b> or <b>F2</b>, or double-click a cell. <b>Enter</b> or <b>Tab</b> keeps the value, <b>Escape</b> cancels. The change goes into the CSV text right at that field - quotes only where needed, the line endings stay - and is one step for Undo.':
            '<b>Modifiez les cellules</b> du tableau comme dans un tableur : tapez, ou appuyez sur <b>Entrée</b> ou <b>F2</b>, ou double-cliquez sur une cellule. <b>Entrée</b> ou <b>Tab</b> valide la valeur, <b>Échap</b> l’annule. La modification va dans le texte CSV exactement à ce champ - guillemets seulement si nécessaire, les fins de ligne restent - et forme une seule étape pour Annuler.',
        '<b>Copy and paste</b> ranges between the table and Excel, LibreOffice or Google Sheets with Ctrl+C and Ctrl+V. Type into the row marked ＋ to add a row.':
            '<b>Copiez et collez</b> des plages entre le tableau et Excel, LibreOffice ou Google Sheets avec Ctrl+C et Ctrl+V. Tapez dans la ligne marquée ＋ pour ajouter une ligne.',
        '<b>Sort</b> with the arrows in the column heads and <b>filter</b> above the table: that only changes the view. <b>Sort the data</b> puts the rows of the file into that order.':
            '<b>Triez</b> avec les flèches des en-têtes de colonne et <b>filtrez</b> au-dessus du tableau : cela ne change que l’affichage. <b>Trier les données</b> met les lignes du fichier dans cet ordre.',
        '<b>Format</b> on the right sets how the text is read (separator, quote, header row) and converts it; <b>Column</b> shows what a column holds; <b>Insert</b> adds, deletes and moves rows and columns and cleans up.':
            '<b>Format</b> à droite règle la lecture du texte (séparateur, guillemet, ligne d’en-tête) et le convertit ; <b>Colonne</b> montre ce que contient une colonne ; <b>Insérer</b> ajoute, supprime et déplace des lignes et des colonnes et nettoie les données.',
        '<b>Export</b> makes an Excel workbook, JSON, Markdown, HTML, TSV or CSV with another separator. <b>Download .csv</b> saves the text as it is.':
            '<b>Exporter</b> crée un classeur Excel, du JSON, du Markdown, du HTML, du TSV ou du CSV avec un autre séparateur. <b>Télécharger le .csv</b> enregistre le texte tel quel.',
        '<kbd>Delete</kbd>': '<kbd>Suppr</kbd>',
    },

    patterns: [
        /* ---------- Code and table ---------- */
        ['^([\\d,]+) (?:line|lines) · (.+) · ([\\d,]+) × (\\d+)$', (m, l, s, r, c) => `${formatThousands(l)} ${getPlural(l.replace(/,/g, ''), 'ligne', 'lignes')} · ${formatSize(s)} · ${formatThousands(r)} × ${c}`],
        ['^([\\d,]+) (?:row|rows), (\\d+) (?:column|columns)$', (m, r, c) => `${formatThousands(r)} ${getPlural(r.replace(/,/g, ''), 'ligne', 'lignes')}, ${c} ${getPlural(c, 'colonne', 'colonnes')}`],
        ['^([\\d,]+) of ([\\d,]+) rows$', (m, a, b) => `${formatThousands(a)} sur ${formatThousands(b)} lignes`],
        ['^([\\d,]+) (?:row|rows)$', (m, k) => `${formatThousands(k)} ${getPlural(k.replace(/,/g, ''), 'ligne', 'lignes')}`],
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'erreur', 'erreurs')}`],
        ['^([\\d,]+) (?:note|notes)$', (m, k) => `${formatThousands(k)} ${getPlural(k.replace(/,/g, ''), 'remarque', 'remarques')}`],
        ['^Line (\\d+)$', 'Ligne $1'],
        ['^(\\d+) (?:field|fields) - the header has (\\d+)$', (m, k, h) => `${k} ${getPlural(k, 'champ', 'champs')} - l’en-tête en a ${h}`],
        ['^(\\d+) (?:field|fields) - most rows have (\\d+)$', (m, k, h) => `${k} ${getPlural(k, 'champ', 'champs')} - la plupart des lignes en ont ${h}`],
        ['^Column (\\S+) has no name$', 'La colonne $1 n’a pas de nom'],
        ['^The name "(.+)" is used twice \\(columns (\\S+) and (\\S+)\\)$', 'Le nom « $1 » est utilisé deux fois (colonnes $2 et $3)'],
        ['^(\\d+) cells copied$', '$1 cellules copiées'],
        ['^Pasted into (\\d+) cells$', 'Collé dans $1 cellules'],
        ['^Sorted by$', 'Trié par'],
        ['^\\(view only\\)$', '(affichage seulement)'],

        /* ---------- Messages ---------- */
        ['^(\\d+) rows duplicated$', '$1 lignes dupliquées'],
        ['^(\\d+) rows deleted - "Undo" brings them back$', '$1 lignes supprimées - « Annuler » les rétablit'],
        ['^(\\d+) columns deleted - "Undo" brings them back$', '$1 colonnes supprimées - « Annuler » les rétablit'],
        ['^The data is sorted by "(.*)" - "Undo" takes it back$', 'Les données sont triées par « $1 » - « Annuler » l’annule'],
        ['^Spaces removed in (\\d+) (?:cell|cells)$', (m, k) => `Espaces supprimés dans ${k} ${getPlural(k, 'cellule', 'cellules')}`],
        ['^(\\d+) empty (?:row|rows) removed$', (m, k) => `${k} ${getPlural(k, 'ligne vide supprimée', 'lignes vides supprimées')}`],
        ['^(\\d+) repeated (?:row|rows) removed$', (m, k) => `${k} ${getPlural(k, 'ligne répétée supprimée', 'lignes répétées supprimées')}`],
        ['^(\\d+) (?:row|rows) filled up to (\\d+) fields$', (m, k, w) => `${k} ${getPlural(k, 'ligne complétée', 'lignes complétées')} à ${w} champs`],
        ['^Separator converted to (\\w+)$', (m, s) => `Séparateur changé en ${SEPS[s] || s}`],
        ['^Line endings: Windows \\(CRLF\\)$', 'Fins de ligne : Windows (CRLF)'],
        ['^Line endings: Unix, macOS \\(LF\\)$', 'Fins de ligne : Unix, macOS (LF)'],

        /* ---------- Top bar and My documents ---------- */
        ['^"(.+)" is open\\. My documents: open, rename, duplicate or delete your documents \\(Ctrl\\+O\\)$', '« $1 » est ouvert. Mes documents : ouvrir, renommer, dupliquer ou supprimer vos documents (Ctrl+O)'],
        ['^Start "(.+)" over\\?$', 'Recommencer « $1 » ?'],
        ['^Start "(.+)" over$', 'Recommencer « $1 »'],
        ['^(\\d+) (?:document|documents) · (.+) in this browser$', (m, k, s) => `${k} ${getPlural(k, 'document', 'documents')} · ${formatSize(s)} dans ce navigateur`],
        ['^No document named "(.*)"\\.$', 'Aucun document nommé « $1 ».'],
        ['^Open now · (.+)$', (m, s) => `Ouvert maintenant · ${formatSize(s)}`],
        ['^(just now|yesterday|\\d+ min ago|\\d+ h ago|[A-Z][a-z]{2} \\d{1,2}, \\d{4}) · (.+)$', (m, w, s) => `${formatTime(w)} · ${formatSize(s)}`],
        ['^(.+) \\(open now\\)$', '$1 (ouvert maintenant)'],
        ['^ZIP with (\\d+) (?:document|documents) downloaded$', (m, k) => `ZIP de ${k} ${getPlural(k, 'document', 'documents')} téléchargé`],

        /* ---------- AI Assistant ---------- */
        ['^Part (\\d+) of (\\d+) received$', 'Partie $1 sur $2 reçue'],
        ['^Open the other (?:link|links) from the AI too \\(still missing: part (.+)\\)\\.$',
            'Ouvrez aussi les autres liens de l’IA (il manque encore : partie $1).'],
        ['^Part (\\d+) of (\\d+) received - paste the other (?:link|links) too \\(missing: (.+)\\)$', 'Partie $1 sur $2 reçue - collez aussi les autres liens (il manque : $3)'],
        ['^The AI sends the document to (.+) with a key that only works for this session\\. What you paste into your AI is handled by its provider\\.$',
            'L’IA envoie le document à $1 avec une clé valable uniquement pour cette session. Ce que vous collez dans votre IA est traité par son fournisseur.'],
        ['^The AI sends its result to (.+) by itself, and it opens here\\. If it answers with a link, paste its answer below\\.$',
            'L’IA envoie elle-même son résultat à $1, et il s’ouvre ici. Si elle répond par un lien, collez sa réponse ci-dessous.'],
        ['^No key from (.+) - the prompt asks the AI for a link instead$', 'Pas de clé de $1 - le prompt demande plutôt un lien à l’IA'],
        ['^Prompt copied - the AI sends its result to (.+)$', 'Prompt copié - l’IA envoie son résultat à $1'],

        /* ---------- Messages with names ---------- */
        ['^"(.+)" is empty now - "Undo" brings it back$', '« $1 » est maintenant vide - « Annuler » le rétablit'],
        ['^"(.+)" opened$', '« $1 » ouvert'],
        ['^New document "(.+)" - your other documents are under "My documents"$', 'Nouveau document « $1 » - vos autres documents se trouvent sous « Mes documents »'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$', 'Nouveau document « $1 » de l’IA - vos autres documents sont inchangés'],
        ['^"(.+)" is not a CSV file$', '« $1 » n’est pas un fichier CSV'],
        ['^Opened "(.+)" as Windows-1252 - it is now in "My documents"$', '« $1 » ouvert en Windows-1252 - il se trouve maintenant dans « Mes documents »'],
        ['^Opened "(.+)" - it is now in "My documents"$', '« $1 » ouvert - il se trouve maintenant dans « Mes documents »'],
        ['^Table received - the editor found (\\d+) (?:problem|problems), see above the code$', (m, k) => `Tableau reçu - l’éditeur a trouvé ${k} ${getPlural(k, 'problème', 'problèmes')}, voir au-dessus du code`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '« $1 » modifié par l’IA - « Annuler » l’annule'],
        ['^"(.+)" duplicated$', '« $1 » dupliqué'],
        ['^Delete "(.+)"\\?$', 'Supprimer « $1 » ?'],
        ['^"(.+)" deleted$', '« $1 » supprimé'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Ouvrir $1'],
    ],
};
