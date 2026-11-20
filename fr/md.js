/* French texts of the Markdown editor: the bar, the work area (code,
   preview, insert, pictures, outline), its dialogs and messages, and the
   problems the preview finds in the code. What all editors share is in
   common.js; how the dictionaries are used is described in
   i18n.js. Names of documents, pictures and anchors stay as they are: the
   patterns copy them into the French text. */

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

/* Reasons a ZIP could not be opened (app.js openZip) */
const ZIP = { 'it is not a ZIP file': 'ce n’est pas un fichier ZIP', 'there is no .md file in it': 'il ne contient aucun fichier .md' };

export default {
    text: {
        // Editing in place: Enter and Shift+Enter
        "Editing on the page - Enter: new paragraph, Shift+Enter: new line, Ctrl+Enter or a click elsewhere keeps it, Escape cancels": "Modification sur la page - Entrée : nouveau paragraphe, Maj+Entrée : nouvelle ligne, Ctrl+Entrée ou un clic ailleurs valide, Échap annule",
        "A new paragraph inside bold, italic or a link is made in the code - Shift+Enter makes a new line": "Un nouveau paragraphe dans du gras, de l’italique ou un lien se fait dans le code - Maj+Entrée crée une nouvelle ligne",
        /* ---------- Top bar ---------- */
        'Markdown Editor - home': 'Éditeur Markdown - accueil',
        'Markdown Editor': 'Éditeur Markdown',
        'File': 'Fichier',
        'My documents (Ctrl+O)': 'Mes documents (Ctrl+O)',
        'My documents': 'Mes documents',
        'New document, or start this one over': 'Nouveau document, ou recommencer celui-ci',
        'New': 'Nouveau',
        'New blank document': 'Nouveau document vide',
        'An empty page - your other documents stay as they are': 'Une page vide - vos autres documents restent tels quels',
        'README': 'README',
        'Project name, features, installation and usage': 'Nom du projet, fonctionnalités, installation et utilisation',
        'Article': 'Article',
        'Title, summary, sections and a quote': 'Titre, résumé, sections et une citation',
        'Meeting notes': 'Compte rendu de réunion',
        'Agenda, decisions and a table of tasks': 'Ordre du jour, décisions et un tableau des tâches',
        'Checklist': 'Liste de contrôle',
        'Tasks to tick off, in groups': 'Tâches à cocher, par groupes',
        'The welcome example': 'L’exemple de bienvenue',
        'Shows what the editor can do': 'Montre ce que l’éditeur sait faire',
        'Start this document over': 'Recommencer ce document',
        'Empties the text, keeps the pictures - "Undo" brings it back': 'Vide le texte, garde les images - « Annuler » le rétablit',
        'Open a .md file (or a picture) from your computer (you can also drag it into the window)':
            'Ouvrir un fichier .md (ou une image) depuis votre ordinateur (vous pouvez aussi le glisser dans la fenêtre)',
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
        'Save the document as a .md file (Ctrl+S)': 'Enregistrer le document en fichier .md (Ctrl+S)',
        'Download .md': 'Télécharger le .md',
        'HTML, PDF, plain text and more (Ctrl+E)': 'HTML, PDF, texte brut et plus (Ctrl+E)',
        'Export…': 'Exporter…',

        /* ---------- Views and work area ---------- */
        'View': 'Affichage',
        'Edit': 'Modifier',
        'Preview': 'Aperçu',
        'Insert': 'Insérer',
        'Markdown code': 'Code Markdown',
        'Copy the Markdown to the clipboard': 'Copier le Markdown dans le presse-papiers',
        'Copy code': 'Copier le code',
        'Copy': 'Copier',
        'Drag to change the width of the code area': 'Faire glisser pour modifier la largeur de la zone de code',
        'Drag to change the width': 'Faire glisser pour modifier la largeur',
        'Formatting': 'Mise en forme',
        'Bold (Ctrl+B)': 'Gras (Ctrl+B)',
        'Bold': 'Gras',
        'Italic (Ctrl+I)': 'Italique (Ctrl+I)',
        'Italic': 'Italique',
        'Strikethrough': 'Barré',
        'Code in the text': 'Code dans le texte',
        'Link (Ctrl+K)': 'Lien (Ctrl+K)',
        'Heading': 'Titre',
        'Bulleted list': 'Liste à puces',
        'Numbered list': 'Liste numérotée',
        'Task list': 'Liste de tâches',
        'Table': 'Tableau',
        'Picture': 'Image',
        'Insert picture': 'Insérer une image',
        'Quote': 'Citation',
        'Code block': 'Bloc de code',
        'Math in the text (Ctrl+M)': 'Formule dans le texte (Ctrl+M)',
        'Math': 'Maths',
        'Text size': 'Taille du texte',
        'Smaller text in the preview': 'Texte plus petit dans l’aperçu',
        'Smaller text': 'Texte plus petit',
        'Normal text size': 'Taille de texte normale',
        'Larger text in the preview': 'Texte plus grand dans l’aperçu',
        'Larger text': 'Texte plus grand',
        'Preview of the document: click text to edit it, Ctrl+click follows a link': 'Aperçu du document : cliquez sur un texte pour le modifier, Ctrl+clic suit un lien',
        'Updating…': 'Mise à jour…',
        'Insert, pictures and outline': 'Insérer, images et plan',
        'Ready-made pieces: structure, text, math, symbols': 'Éléments prêts à l’emploi : structure, texte, maths, symboles',
        'The pictures of this document': 'Les images de ce document',
        'Pictures': 'Images',
        'The headings of the document': 'Les titres du document',
        'Outline': 'Plan',
        'The headings of the document. Click one to go there in the code and in the preview.':
            'Les titres du document. Cliquez sur l’un d’eux pour y aller dans le code et dans l’aperçu.',
        'No headings yet - start a line with # and a space.': 'Pas encore de titres - commencez une ligne par # et un espace.',
        'Open it here': 'L’ouvrir ici',
        'Drop the .md file or picture here': 'Déposez ici le fichier .md ou l’image',

        'The document is empty - write Markdown on the left, or choose a template under "New".': 'Le document est vide - écrivez du Markdown à gauche, ou choisissez un modèle sous « Nouveau ».',

        /* Problems above the code */
        'Hide': 'Masquer',
        'Show': 'Afficher',

        /* ---------- Insert tab ---------- */
        'Structure': 'Structure',
        'Heading 1': 'Titre 1',
        'Heading 2': 'Titre 2',
        'Heading 3': 'Titre 3',
        '# Heading': '# Titre',
        '## Heading': '## Titre',
        '### Heading': '### Titre',
        'Horizontal rule': 'Ligne horizontale',
        'Apply page breaks': 'Appliquer les sauts de page',
        'New page': 'Nouvelle page',
        'Document': 'Document',
        '• Bulleted list': '• Liste à puces',
        '1. Numbered list': '1. Liste numérotée',
        '☐ Task list': '☐ Liste de tâches',
        'Fold-out section': 'Section dépliable',
        'Line break': 'Saut de ligne',
        'Text': 'Texte',
        '**bold** (Ctrl+B)': '**gras** (Ctrl+B)',
        '*italic* (Ctrl+I)': '*italique* (Ctrl+I)',
        '~~struck through~~': '~~barré~~',
        'Link to a heading': 'Lien vers un titre',
        '[text](#heading)': '[texte](#titre)',
        '[text](https://…) (Ctrl+K)': '[texte](https://…) (Ctrl+K)',
        '![description](name.png)': '![description](nom.png)',
        'Footnote': 'Note',
        '[^1] at the cursor, the note at the end': '[^1] au curseur, la note à la fin',
        'Key': 'Touche',
        'A key as on the keyboard: <kbd>Ctrl</kbd>': 'Une touche comme sur le clavier : <kbd>Ctrl</kbd>',
        '`code` between backticks': '`code` entre accents graves',
        '$x$ in the text': '$x$ dans le texte',
        'Displayed': 'Centrée',
        '$$ … $$ on its own lines': '$$ … $$ sur des lignes à part',
        'Fraction': 'Fraction',
        'Root': 'Racine',
        'x² Power': 'x² Puissance',
        'x₁ Index': 'x₁ Indice',
        '∑ Sum': '∑ Somme',
        '∫ Integral': '∫ Intégrale',
        'lim Limit': 'lim Limite',
        '2×2 matrix': 'Matrice 2×2',
        'Cases': 'Cas',
        'Greek letters': 'Lettres grecques',
        'Symbols': 'Symboles',
        'Pictures have their own tab:': 'Les images ont leur propre onglet :',

        /* ---------- Pictures tab ---------- */
        'Add pictures…': 'Ajouter des images…',
        'No pictures yet': 'Pas encore d’images',
        'Missing in this document': 'Manquantes dans ce document',
        'Add file…': 'Ajouter un fichier…',
        'Show where it is used': 'Afficher où elle est utilisée',
        '![…](name) at the cursor': '![…](nom) au curseur',
        'Rename - the code is changed along': 'Renommer - le code est modifié en conséquence',
        'Rename': 'Renommer',
        'Choose another file, keep the name': 'Choisir un autre fichier, garder le nom',
        'Replace': 'Remplacer',
        'Download the picture': 'Télécharger l’image',
        'Download': 'Télécharger',
        'Remove the picture from this document': 'Retirer l’image de ce document',
        'Remove': 'Retirer',
        'New name': 'Nouveau nom',
        'Pictures belong to “': 'Les images appartiennent à « ',
        '” and stay in your browser. Drop or paste them anywhere in the editor, or add them here;': ' » et restent dans votre navigateur. Déposez-les ou collez-les n’importe où dans l’éditeur, ou ajoutez-les ici ;',
        'uses them.': 'les utilise.',

        /* ---------- Export ---------- */
        'Close': 'Fermer',
        'File name': 'Nom du fichier',
        'HTML page (one file)': 'Page HTML (un seul fichier)',
        'PDF (print or save as PDF)': 'PDF (imprimer ou enregistrer en PDF)',
        'Plain text': 'Texte brut',
        'Markdown (.md)': 'Markdown (.md)',
        'Markdown with pictures (ZIP)': 'Markdown avec images (ZIP)',
        'Result': 'Résultat',
        'Download everything at once: .md, pictures, HTML and text': 'Tout télécharger d’un coup : .md, images, HTML et texte',
        'All formats (ZIP)': 'Tous les formats (ZIP)',
        'Print / Save as PDF': 'Imprimer / Enregistrer en PDF',
        '(The HTML page - with its pictures and styles inside - is created when you download or copy it.)':
            '(La page HTML - avec ses images et ses styles inclus - est créée au moment du téléchargement ou de la copie.)',

        /* ---------- My documents ---------- */
        'Search by name': 'Rechercher par nom',
        'Search your documents': 'Rechercher dans vos documents',
        'Open a .md file from your computer as a new document': 'Ouvrir un fichier .md de votre ordinateur comme nouveau document',
        'New document': 'Nouveau document',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Cliquez sur un document pour l’ouvrir. Ils sont conservés uniquement dans ce navigateur - rien n’est envoyé. Effacer les données de site du navigateur les supprime : téléchargez ceux que vous voulez garder.',
        'Download every document as a .md file (with its pictures) in one ZIP': 'Télécharger tous les documents en fichiers .md (avec leurs images) dans un seul ZIP',
        'Download all (ZIP)': 'Tout télécharger (ZIP)',
        'Duplicate': 'Dupliquer',
        'Download as .md': 'Télécharger en .md',
        'Delete': 'Supprimer',
        'This document is open': 'Ce document est ouvert',
        'Click to open this document': 'Cliquez pour ouvrir ce document',
        'No documents yet.': 'Pas encore de documents.',

        /* ---------- AI Assistant ---------- */
        'Any AI can write with you - ChatGPT, Claude, Gemini, Copilot.': 'N’importe quelle IA peut écrire avec vous - ChatGPT, Claude, Gemini, Copilot.',
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
        'The document travels in the link after the “#”, which no server sees. What you paste into your AI is handled by its provider.':
            'Le document voyage dans le lien après le « # », qu’aucun serveur ne voit. Ce que vous collez dans votre IA est traité par son fournisseur.',
        'The prompt - copy it with Ctrl+C': 'Le prompt - copiez-le avec Ctrl+C',
        'Copy prompt': 'Copier le prompt',
        /* the step with the link, also when the editor sets it anew (text by text) */
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
        'The document is now in the Markdown Editor tab you already had open. Switch to that tab, or open it here.':
            'Le document se trouve maintenant dans l’onglet de l’éditeur Markdown que vous aviez déjà ouvert. Passez à cet onglet ou ouvrez-le ici.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)': 'La copie n’est pas autorisée ici - le texte est sélectionné ci-dessous : appuyez sur Ctrl+C (⌘C)',
        'Paste it into your AI and say what it should write.': 'Collez-le dans votre IA et dites-lui ce qu’elle doit écrire.',
        'Prompt copied - paste it into your AI and say what it should write': 'Prompt copié - collez-le dans votre IA et dites-lui ce qu’elle doit écrire',
        'This link is incomplete or damaged - please ask the AI to send it again': 'Ce lien est incomplet ou endommagé - demandez à l’IA de le renvoyer',

        /* ---------- Save to your server ---------- */
        'Save to your server': 'Enregistrer sur votre serveur',
        'Webhook address': 'Adresse du webhook',
        'https://example.com/api/markdown': 'https://example.com/api/markdown',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(facultatif, envoyé comme « Authorization: Bearer … » ; conservé jusqu’à la fermeture de cet onglet)',
        'Send automatically a few seconds after each change (otherwise only when you click': 'Envoyer automatiquement quelques secondes après chaque modification (sinon seulement quand vous cliquez sur',
        'or press Ctrl+S)': 'ou appuyez sur Ctrl+S)',
        'Only for “': 'Seulement pour « ',
        '” (other documents use the general address)': ' » (les autres documents utilisent l’adresse générale)',
        'What your server receives': 'Ce que reçoit votre serveur',
        'A POST request with JSON (your server must allow CORS from https://md.giit.ch):': 'Une requête POST avec du JSON (votre serveur doit autoriser CORS depuis https://md.giit.ch) :',
        'Embed the editor in your website': 'Intégrer l’éditeur dans votre site web',
        'Send now': 'Envoyer maintenant',
        'Save setting': 'Enregistrer le réglage',

        /* ---------- Help ---------- */
        'How it works': 'Fonctionnement',
        'Keyboard shortcuts': 'Raccourcis clavier',
        'Bold / italic around the selected text': 'Gras / italique autour du texte sélectionné',
        'Link': 'Lien',
        'Show the cursor\'s place in the preview': 'Montrer la position du curseur dans l’aperçu',
        'Indent / outdent': 'Augmenter / diminuer le retrait',
        'Undo / redo': 'Annuler / rétablir',
        'Save (download .md, or to your server) / export': 'Enregistrer (télécharger le .md, ou sur votre serveur) / exporter',
        'Print / save as PDF': 'Imprimer / enregistrer en PDF',
        'Problems (a missing picture, a link to a heading that is not there, a code block that is never closed, a table row with too many cells) are listed above the code - click one to go there.':
            'Les problèmes (une image manquante, un lien vers un titre inexistant, un bloc de code jamais fermé, une ligne de tableau avec trop de cellules) sont listés au-dessus du code - cliquez sur l’un d’eux pour y aller.',

        /* ---------- Messages ---------- */
        'The browser storage is full - download and delete documents under "My documents"': 'Le stockage du navigateur est plein - téléchargez et supprimez des documents sous « Mes documents »',
        'The browser storage is full - delete or download documents under "My documents" first': 'Le stockage du navigateur est plein - supprimez ou téléchargez d’abord des documents sous « Mes documents »',
        'The browser storage is full - delete or download some documents first': 'Le stockage du navigateur est plein - supprimez ou téléchargez d’abord quelques documents',
        'The browser storage is full': 'Le stockage du navigateur est plein',
        'Nothing to undo': 'Rien à annuler',
        'Nothing to redo': 'Rien à rétablir',
        'This text changed in the code - wait for the preview, then try again': 'Ce texte a changé dans le code - attendez l’aperçu, puis réessayez',
        'This box changed in the code - wait for the preview, then try again': 'Cette zone a changé dans le code - attendez l’aperçu, puis réessayez',
        'This picture changed in the code - wait for the preview, then try again': 'Cette image a changé dans le code - attendez l’aperçu, puis réessayez',
        'The code changed meanwhile - the edit was not used': 'Le code a changé entre-temps - la modification n’a pas été appliquée',
        'This anchor is not in the document': 'Cette ancre n’existe pas dans le document',
        'The picture is removed from this document. Places that use it show its name in a frame. "Undo" does not bring it back.':
            'L’image est retirée de ce document. Les endroits qui l’utilisent affichent son nom dans un cadre. « Annuler » ne la rétablit pas.',
        'Pictures can be PNG, JPG, GIF, WebP, SVG or PDF': 'Les images peuvent être en PNG, JPG, GIF, WebP, SVG ou PDF',
        'The picture is larger than 12 MB': 'L’image dépasse 12 Mo',
        'The picture could not be read': 'L’image n’a pas pu être lue',
        'This document is empty already': 'Ce document est déjà vide',
        'Everything is removed; the pictures of the document stay. "Undo" brings the text back as long as the page is open.':
            'Tout est supprimé ; les images du document restent. « Annuler » rétablit le texte tant que la page est ouverte.',
        'Start over': 'Recommencer',
        'The file is larger than 8 MB': 'Le fichier dépasse 8 Mo',
        'Downloaded': 'Téléchargé',
        'Copied to the clipboard': 'Copié dans le presse-papiers',
        'This browser does not allow copying this': 'Ce navigateur ne permet pas de copier ceci',
        'Code copied': 'Code copié',
        '.md with its pictures downloaded (ZIP)': '.md téléchargé avec ses images (ZIP)',
        '.md downloaded': '.md téléchargé',
        'ZIP downloaded: .md, pictures, HTML and text': 'ZIP téléchargé : .md, images, HTML et texte',
        'Add': 'Ajouter',
        'The document and its pictures are removed from this browser for good. Download it first if you want to keep a copy.':
            'Le document et ses images sont définitivement supprimés de ce navigateur. Téléchargez-le d’abord si vous voulez en garder une copie.',

        /* ---------- Problems the preview finds (markdown.js) ---------- */
        '$$ is never closed - add a line with $$ after the formula': '$$ n’est jamais fermé - ajoutez une ligne avec $$ après la formule',

        /* texts that stay the same in German (so they are not in the German pack), but not in French */
        'online': 'en ligne',
        'Token': 'Jeton',
    },

    html: {

        '<b>Export</b> also has <b>Open in another editor</b>: it converts the document and opens it as a new document there. Anything the other format cannot hold is listed first.':

            '<b>Exporter</b> propose aussi <b>Ouvrir dans un autre éditeur</b> : le document est converti et ouvert là-bas comme nouveau document. Ce que l’autre format ne peut pas contenir est listé d’abord.',

        '<b>Insert</b> &gt; <b>New page</b> sets a page break for printing and PDF; the preview shows it as a dashed line. Headings stay with their text and tables and pictures are not cut. In Export, <b>Apply page breaks</b> turns them off for a PDF.':

            '<b>Insérer</b> &gt; <b>Nouvelle page</b> place un saut de page pour l’impression et le PDF ; l’aperçu l’affiche en pointillés. Les titres restent avec leur texte, tableaux et images ne sont pas coupés. Dans <b>Exporter</b>, <b>Appliquer les sauts de page</b> les désactive pour un PDF.',
        /* Export */
        'The print dialog opens with the document only. Choose <b>Save as PDF</b> (or "Microsoft Print to PDF") as the printer. In Chrome and Edge, untick "Headers and footers" if the browser offers it. The text in the PDF stays sharp and can be selected.':
            'La boîte de dialogue d’impression s’ouvre avec le document seul. Choisissez <b>Enregistrer au format PDF</b> (ou « Microsoft Print to PDF ») comme imprimante. Dans Chrome et Edge, décochez « En-têtes et pieds de page » si le navigateur le propose. Le texte du PDF reste net et peut être sélectionné.',

        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Cliquez sur <b>Copier le prompt</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'L’IA répond par un lien : cliquez dessus, ou collez toute la réponse ci-dessous. <b>Annuler</b> l’annule.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'L’IA répond par un lien : <b>collez toute sa réponse ci-dessous</b> (un lien cliqué ouvre un éditeur séparé). <b>Annuler</b> l’annule.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'L’éditeur peut envoyer chaque version enregistrée à votre propre serveur (un <b>webhook</b>), pour que votre travail soit conservé là où vous le souhaitez. Rien n’est envoyé tant que vous n’avez pas saisi d’adresse ici.',
        'Also possible: <code>?src=&lt;URL of a .md file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>mdeditor:ai</code>, <code>mdeditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Également possible : <code>?src=&lt;URL of a .md file&gt;</code> ouvre un fichier, <code>&amp;webhook=&lt;URL&gt;</code> y enregistre ce document. L’éditeur peut aussi s’ouvrir dans sa propre fenêtre (<code>?embed=window</code>), et votre page peut lui transmettre son propre prompt d’IA et une clé de session pour que l’IA envoie son résultat à votre serveur (<code>mdeditor:ai</code>, <code>mdeditor:key-request</code>) - voir « Utiliser l’éditeur sur votre propre site web » sous l’éditeur. Les détails se trouvent dans <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> Markdown on the left - or start with <b>New</b> and one of the templates. The preview in the middle shows the document as you type.':
            '<b>Écrivez</b> du Markdown à gauche - ou commencez par <b>Nouveau</b> et l’un des modèles. L’aperçu au milieu montre le document au fil de la saisie.',
        '<b>Click text in the preview</b> to edit it right there: the cursor is where you clicked, and the code\'s cursor goes to the same place. <b>Enter</b> starts a new paragraph; <b>Shift+Enter</b> inserts a line break. <b>Ctrl+Enter</b> (<b>Cmd+Enter</b> on macOS) or a click elsewhere applies the edit; <b>Escape</b> cancels. Each edit is one step for Undo. Characters such as <code>*</code> or <code>_</code> are escaped so they stay text. A click on math, a picture or code jumps to its place in the code instead. <b>Ctrl</b> + click follows a link. A check box of a task list ticks the task in the code.':
            '<b>Cliquez sur un texte dans l’aperçu</b> pour le modifier sur place : le curseur se trouve là où vous avez cliqué, et le curseur du code va au même endroit. <b>Entrée</b> commence un nouveau paragraphe ; <b>Maj+Entrée</b> insère un saut de ligne. <b>Ctrl+Entrée</b> (<b>Cmd+Entrée</b> sur macOS) ou un clic ailleurs applique la modification ; <b>Échap</b> l’annule. Chaque modification s’annule en une seule étape. Les caractères comme <code>*</code> ou <code>_</code> sont échappés pour rester du texte. Un clic sur une formule, une image ou du code mène plutôt à sa place dans le code. <b>Ctrl</b> + clic suit un lien. Une case d’une liste de tâches coche la tâche dans le code.',
        '<b>Insert</b> on the right has ready-made pieces (headings, lists, tables, math, symbols); <b>Pictures</b> holds the pictures of the document; <b>Outline</b> lists the headings.':
            '<b>Insérer</b> à droite propose des éléments prêts à l’emploi (titres, listes, tableaux, formules, symboles) ; <b>Images</b> contient les images du document ; <b>Plan</b> liste les titres.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser.':
            '<b>Mes documents</b> (le bouton dossier en haut à gauche) liste tous les documents conservés dans ce navigateur.',
        '<b>Export</b> makes an HTML page, a PDF (via the print dialog) or plain text. <b>Download .md</b> saves the code (with its pictures as ZIP).':
            '<b>Exporter</b> crée une page HTML, un PDF (via la boîte de dialogue d’impression) ou du texte brut. <b>Télécharger le .md</b> enregistre le code (avec ses images en ZIP).',
        'The preview understands CommonMark with GitHub\'s tables, task lists, strikethrough, autolinks and footnotes, and math in <code>$…$</code> and <code>$$…$$</code>. HTML in the Markdown is shown without scripts, styles, frames and forms.':
            'L’aperçu comprend CommonMark avec les tableaux, listes de tâches, texte barré, liens automatiques et notes de bas de page de GitHub, ainsi que les formules en <code>$…$</code> et <code>$$…$$</code>. Le HTML contenu dans le Markdown est affiché sans scripts, styles, cadres ni formulaires.',
        'Math: <code>$…$</code> around the selection': 'Formule : <code>$…$</code> autour de la sélection',
        'Lines in or out of a comment (<code>&lt;!-- --&gt;</code>)': 'Commenter / décommenter des lignes (<code>&lt;!-- --&gt;</code>)',
        '<kbd>Enter</kbd> in a list starts the next item (<code>-</code>, <code>1.</code>, <code>- [ ]</code>, <code>&gt;</code>); on an empty item it ends the list. <code>* _ ` ~ $ [ (</code> close by themselves around a selection.':
            '<kbd>Entrée</kbd> dans une liste commence l’élément suivant (<code>-</code>, <code>1.</code>, <code>- [ ]</code>, <code>&gt;</code>) ; sur un élément vide, elle termine la liste. <code>* _ ` ~ $ [ (</code> se ferment d’eux-mêmes autour d’une sélection.',
    },

    patterns: [
        /* ---------- Status lines ---------- */
        ['^(\\d+) lines · ([\\d.]+ K?B) · (\\d+) (?:word|words)$', (m, l, kb, w) => `${l} ${getPlural(l, 'ligne', 'lignes')} · ${formatSize(kb)} · ${w} ${getPlural(w, 'mot', 'mots')}`],
        ['^\\.md and (\\d+) (?:picture|pictures)$', (m, k) => `.md et ${k} ${getPlural(k, 'image', 'images')}`],
        ['^([\\d,]+) bytes$', (m, b) => `${formatThousands(b)} octets`],
        ['^\\d{1,3}(?:,\\d{3})+$', m => formatThousands(m)],

        /* Problems above the code */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'erreur', 'erreurs')}`],
        ['^· (\\d+) (?:note|notes)$', (m, k) => `· ${k} ${getPlural(k, 'remarque', 'remarques')}`],
        ['^(\\d+) (?:note|notes)$', (m, k) => `${k} ${getPlural(k, 'remarque', 'remarques')}`],
        ['^Line (\\d+)$', 'Ligne $1'],
        ['^The preview failed: (.*)$', 'L’aperçu a échoué : $1'],
        ['^The preview stopped at an unexpected problem: (.*)$', 'L’aperçu s’est arrêté sur un problème inattendu : $1'],
        ['^Picture "(.+)" not found - drag the picture into the editor \\(or add it in the Pictures tab\\)$', 'Image « $1 » introuvable - glissez l’image dans l’éditeur (ou ajoutez-la dans l’onglet Images)'],
        ['^The link to "(.+)" has no heading or anchor of that name$', 'Le lien vers « $1 » ne correspond à aucun titre ni aucune ancre de ce nom'],
        ['^This code block \\((.+)\\) is never closed - add a line with (.+) after the code$', 'Ce bloc de code ($1) n’est jamais fermé - ajoutez une ligne avec $2 après le code'],
        ['^This table row has (\\d+) (?:cell|cells), the header has (\\d+)$', (m, k, h) => `Cette ligne du tableau a ${k} ${getPlural(k, 'cellule', 'cellules')}, l’en-tête en a ${h}`],
        ['^Math: (.*)$', 'Formule : $1'],

        /* ---------- Pictures tab ---------- */
        ['^(\\d+) (?:picture|pictures) · (.+)$', (m, k, s) => `${k} ${getPlural(k, 'image', 'images')} · ${formatSize(s)}`],
        ['^Choose the file for (.+)$', 'Choisir le fichier pour $1'],
        ['^Insert !\\[…\\]\\((.+)\\) at the cursor$', 'Insérer ![…]($1) au curseur'],
        ['^used (\\d+)×$', 'utilisée $1×'],
        ['^(.* · )?not used yet$', (m, a) => `${a || ''}pas encore utilisée`],

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
        ['^"(.+)" is now "(.+)"$', '« $1 » s’appelle maintenant « $2 »'],
        ['^Remove "(.+)"\\?$', 'Retirer « $1 » ?'],
        ['^"(.+)" now shows the new picture$', '« $1 » affiche maintenant la nouvelle image'],
        ['^Picture "(.+)" added to "(.+)"$', 'Image « $1 » ajoutée à « $2 »'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '« $1 » est maintenant vide - « Annuler » le rétablit'],
        ['^"(.+)" opened$', '« $1 » ouvert'],
        ['^New document "(.+)" - your other documents are under "My documents"$', 'Nouveau document « $1 » - vos autres documents se trouvent sous « Mes documents »'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$', 'Nouveau document « $1 » de l’IA - vos autres documents sont inchangés'],
        ['^"(.+)" is not a Markdown file$', '« $1 » n’est pas un fichier Markdown'],
        ['^Opened "(.+)" - it is now in "My documents"$', '« $1 » ouvert - il se trouve maintenant dans « Mes documents »'],
        ['^Opened "(.+)" with (\\d+) (?:picture|pictures)$', (m, f, k) => `« ${f} » ouvert avec ${k} ${getPlural(k, 'image', 'images')}`],
        ['^"(.+)" could not be opened: (.*)$', (m, f, why) => `« ${f} » n’a pas pu être ouvert : ${ZIP[why] || why}`],
        ['^Document received - the preview found (\\d+) (?:problem|problems), see above the code$', (m, k) => `Document reçu - l’aperçu a trouvé ${k} ${getPlural(k, 'problème', 'problèmes')}, voir au-dessus du code`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '« $1 » modifié par l’IA - « Annuler » l’annule'],
        ['^"(.+)" duplicated$', '« $1 » dupliqué'],
        ['^Delete "(.+)"\\?$', 'Supprimer « $1 » ?'],
        ['^"(.+)" deleted$', '« $1 » supprimé'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Ouvrir $1'],
    ],
};
