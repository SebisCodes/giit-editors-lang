/* French texts of the LaTeX editor: the bar, the work area (code, preview,
   document settings, insert, pictures, outline), its dialogs and messages,
   and the problems the preview finds in the code. What all editors share is
   in common.js; how the dictionaries are used is described in
   i18n.js. Names of documents, pictures, labels and commands stay as they
   are: the patterns copy them into the French text. */

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
const ZIP = { 'it is not a ZIP file': 'ce n’est pas un fichier ZIP', 'there is no .tex file in it': 'il ne contient aucun fichier .tex' };

export default {
    text: {
        // Editing in place: Enter and Shift+Enter
        "Editing on the page - Enter: new paragraph, Shift+Enter: new line, Ctrl+Enter or a click elsewhere keeps it, Escape cancels": "Modification sur la page - Entrée : nouveau paragraphe, Maj+Entrée : nouvelle ligne, Ctrl+Entrée ou un clic ailleurs valide, Échap annule",
        "A new paragraph inside bold, italic or another command is made in the code - Shift+Enter makes a new line": "Un nouveau paragraphe dans du gras, de l’italique ou une autre commande se fait dans le code - Maj+Entrée crée une nouvelle ligne",
        "A new line in a heading or table cell is made in the code": "Une nouvelle ligne dans un titre ou une cellule de tableau se fait dans le code",
        /* ---------- Top bar ---------- */
        'LaTeX Editor - home': 'Éditeur LaTeX - accueil',
        'LaTeX Editor': 'Éditeur LaTeX',
        'File': 'Fichier',
        'My documents (Ctrl+O)': 'Mes documents (Ctrl+O)',
        'My documents': 'Mes documents',
        'New document, or start this one over': 'Nouveau document, ou recommencer celui-ci',
        'New': 'Nouveau',
        'New blank document': 'Nouveau document vide',
        'An empty article - your other documents stay as they are': 'Un article vide - vos autres documents restent tels quels',
        'Article': 'Article',
        'Title, abstract and three sections': 'Titre, résumé et trois sections',
        'Letter': 'Lettre',
        'Addresses, date, subject and signature': 'Adresses, date, objet et signature',
        'Exercise sheet': 'Feuille d’exercices',
        'Solutions with math and code': 'Solutions avec formules et code',
        'Social media post': 'Publication pour réseaux sociaux',
        'A square picture with colors and big type': 'Une image carrée avec des couleurs et de grands caractères',
        'The welcome example': 'L’exemple de bienvenue',
        'Shows what the editor can do': 'Montre ce que l’éditeur sait faire',
        'Start this document over': 'Recommencer ce document',
        'Keeps the preamble, empties the text - "Undo" brings it back': 'Conserve le préambule, vide le texte - « Annuler » le rétablit',
        'Open a .tex file (or a picture) from your computer (you can also drag it into the window)':
            'Ouvrir un fichier .tex (ou une image) depuis votre ordinateur (vous pouvez aussi le glisser dans la fenêtre)',
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
        'Save the document as a .tex file (Ctrl+S)': 'Enregistrer le document en fichier .tex (Ctrl+S)',
        'Download .tex': 'Télécharger le .tex',
        'PDF, pictures of the pages, HTML and more (Ctrl+E)': 'PDF, images des pages, HTML et plus (Ctrl+E)',
        'Export…': 'Exporter…',

        /* ---------- Views and work area ---------- */
        'View': 'Affichage',
        'Edit': 'Modifier',
        'Side panel': 'Panneau latéral',
        'Preview': 'Aperçu',
        'Document': 'Document',
        'LaTeX code': 'Code LaTeX',
        'Copy the LaTeX code to the clipboard': 'Copier le code LaTeX dans le presse-papiers',
        'Copy code': 'Copier le code',
        'Copy': 'Copier',
        'Indent the content of every environment neatly': 'Indenter proprement le contenu de chaque environnement',
        'Tidy up': 'Mettre en ordre',
        'Drag to change the width of the code area': 'Faire glisser pour modifier la largeur de la zone de code',
        'Drag to change the width': 'Faire glisser pour modifier la largeur',
        'Formatting': 'Mise en forme',
        'Bold (Ctrl+B)': 'Gras (Ctrl+B)',
        'Bold': 'Gras',
        'Italic (Ctrl+I)': 'Italique (Ctrl+I)',
        'Italic': 'Italique',
        'Underline (Ctrl+U)': 'Souligné (Ctrl+U)',
        'Underline': 'Souligné',
        'Fixed-width text': 'Texte à chasse fixe',
        'Section heading': 'Titre de section',
        'Section': 'Section',
        'Bulleted list': 'Liste à puces',
        'Numbered list': 'Liste numérotée',
        'Table': 'Tableau',
        'Picture': 'Image',
        'Math in the text': 'Formule dans le texte',
        'Math': 'Maths',
        'Previous page (Page Up)': 'Page précédente (Page préc.)',
        'Previous page': 'Page précédente',
        'Next page (Page Down)': 'Page suivante (Page suiv.)',
        'Next page': 'Page suivante',
        'Preview of the pages: click text to jump to its place in the code': 'Aperçu des pages : cliquez sur un texte pour aller à sa place dans le code',
        'Zoom out (Ctrl + -)': 'Zoom arrière (Ctrl + -)',
        'Zoom out': 'Zoom arrière',
        'Show at actual size': 'Afficher en taille réelle',
        'Zoom in (Ctrl + +)': 'Zoom avant (Ctrl + +)',
        'Zoom in': 'Zoom avant',
        'Fit the page width into the window': 'Ajuster la largeur de la page à la fenêtre',
        'Fit width': 'Pleine largeur',
        'Show the whole page': 'Afficher la page entière',
        'Whole page': 'Page entière',
        'Updating…': 'Mise à jour…',
        'Paper, fonts, margins and title of the document': 'Papier, polices, marges et titre du document',
        'Ready-made pieces: structure, text, math, symbols': 'Éléments prêts à l’emploi : structure, texte, maths, symboles',
        'Insert': 'Insérer',
        'The pictures of this document': 'Les images de ce document',
        'Pictures': 'Images',
        'The sections of the document': 'Les sections du document',
        'Outline': 'Plan',
        'The sections of the document. Click one to go there in the code and in the preview.':
            'Les sections du document. Cliquez sur l’une d’elles pour y aller dans le code et dans l’aperçu.',
        'No sections yet - add one with \\section{…}.': 'Pas encore de sections - ajoutez-en une avec \\section{…}.',
        'Open it here': 'L’ouvrir ici',
        'Drop the .tex file or picture here': 'Déposez ici le fichier .tex ou l’image',

        /* Problems above the code */
        'Hide': 'Masquer',
        'Show': 'Afficher',

        /* ---------- Insert tab ---------- */
        'Structure': 'Structure',
        'Subsection': 'Sous-section',
        'Subsubsection': 'Sous-sous-section',
        'Paragraph heading': 'Intertitre',
        '• Bulleted list': '• Liste à puces',
        '1. Numbered list': '1. Liste numérotée',
        'Description list': 'Liste descriptive',
        'Figure': 'Figure',
        'Two columns': 'Deux colonnes',
        'Quote': 'Citation',
        'Centered': 'Centré',
        'Program code': 'Code source',
        'Verbatim': 'Verbatim',
        'Abstract': 'Résumé',
        'Contents': 'Table des matières',
        'Title': 'Titre',
        'New page': 'Nouvelle page',
        'Vertical space': 'Espace vertical',
        'Bibliography': 'Bibliographie',
        'Footnote': 'Note',
        'Reference': 'Renvoi',
        'Colored text': 'Texte en couleur',
        'Colored box': 'Encadré coloré',
        'Citation': 'Citer',
        'Push right': 'Pousser à droite',
        '$x$ in the text': '$x$ dans le texte',
        'Displayed': 'Centrée',
        'Numbered equation': 'Éq. numérotée',
        'Aligned lines': 'Lignes alignées',
        'Fraction': 'Fraction',
        'Root': 'Racine',
        'x² Power': 'x² Puissance',
        'x₁ Index': 'x₁ Indice',
        '∑ Sum': '∑ Somme',
        'lim Limit': 'lim Limite',
        'Cases': 'Cas',
        'Theorem': 'Théorème',
        'Proof': 'Démonstration',
        'Greek letters': 'Lettres grecques',
        'Symbols': 'Symboles',
        'Pictures have their own tab:': 'Les images ont leur propre onglet :',

        /* ---------- Pictures tab ---------- */
        'Add pictures…': 'Ajouter des images…',
        'No pictures yet': 'Pas encore d’images',
        'Missing in this document': 'Manquantes dans ce document',
        'Add file…': 'Ajouter un fichier…',
        'Show where it is used': 'Afficher où elle est utilisée',
        '\\includegraphics at the cursor': '\\includegraphics au curseur',
        'A figure with caption and label at the cursor': 'Une figure avec légende et étiquette au curseur',
        'As figure': 'En figure',
        'Rename - the code is changed along': 'Renommer - le code est modifié en conséquence',
        'Rename': 'Renommer',
        'Choose another file, keep the name': 'Choisir un autre fichier, garder le nom',
        'Replace': 'Remplacer',
        'Download the picture': 'Télécharger l’image',
        'Download': 'Télécharger',
        'Remove the picture from this document': 'Retirer l’image de ce document',
        'Remove': 'Retirer',
        'New name': 'Nouveau nom',
        'uses them.': 'les utilise.',

        /* ---------- Document tab ---------- */
        'Kind': 'Type',
        'Report (chapters)': 'Rapport (chapitres)',
        'Book': 'Livre',
        'Letter class': 'Classe lettre',
        'Font size': 'Taille de police',
        'Paper': 'Papier',
        'Square 120 × 120 mm (1:1)': 'Carré 120 × 120 mm (1:1)',
        'Portrait 4:5 (120 × 150 mm)': 'Portrait 4:5 (120 × 150 mm)',
        'Slide 16:9 (160 × 90 mm)': 'Diapositive 16:9 (160 × 90 mm)',
        'Other size': 'Autre format',
        'Margins': 'Marges',
        'As the class sets it': 'Selon la classe',
        'Narrow (2 cm)': 'Étroites (2 cm)',
        'Very narrow (1.5 cm)': 'Très étroites (1,5 cm)',
        'Wide (3.5 cm)': 'Larges (3,5 cm)',
        'None': 'Aucune',
        'Other': 'Autre',
        'Orientation': 'Orientation',
        'Portrait': 'Portrait',
        'Landscape': 'Paysage',
        'Font': 'Police',
        'Latin Modern (the LaTeX font)': 'Latin Modern (la police de LaTeX)',
        'Line spacing': 'Interligne',
        'Single': 'Simple',
        '1½ lines': '1,5 ligne',
        'Double': 'Double',
        'Language': 'Langue',
        'English (no babel)': 'Anglais (sans babel)',
        'German (babel ngerman)': 'Allemand (babel ngerman)',
        'Other (babel)': 'Autre (babel)',
        'Space between paragraphs instead of indenting': 'Espace entre les paragraphes au lieu d’un retrait',
        'Page numbers': 'Numéros de page',
        'Author': 'Auteur',
        '(several: separate with \\and)': '(plusieurs : séparer par \\and)',
        'Date': 'Date',
        '(\\today = the current date)': '(\\today = la date du jour)',
        'Show the title (\\maketitle)': 'Afficher le titre (\\maketitle)',
        'Make it a complete document': 'En faire un document complet',
        'pages · about': 'pages · environ',
        'page · about': 'page · environ',

        /* ---------- Export ---------- */
        'Close': 'Fermer',
        'File name': 'Nom du fichier',
        'PDF (print or save as PDF)': 'PDF (imprimer ou enregistrer en PDF)',
        'HTML page (one file)': 'Page HTML (un seul fichier)',
        'Plain text': 'Texte brut',
        'Pictures of the pages': 'Images des pages',
        'LaTeX source (.tex)': 'Source LaTeX (.tex)',
        'LaTeX with pictures (ZIP)': 'LaTeX avec images (ZIP)',
        'Pages': 'Pages',
        'The page shown now': 'La page affichée',
        'All pages (one picture each, as ZIP)': 'Toutes les pages (une image chacune, en ZIP)',
        'Sharpness': 'Netteté',
        '96 dpi (screen)': '96 dpi (écran)',
        '300 dpi (print)': '300 dpi (impression)',
        'Result': 'Résultat',
        'Download everything at once: .tex, pictures, HTML, text and every page as PNG': 'Tout télécharger d’un coup : .tex, images, HTML, texte et chaque page en PNG',
        'All formats (ZIP)': 'Tous les formats (ZIP)',
        'Print / Save as PDF': 'Imprimer / Enregistrer en PDF',
        '(The HTML page - with fonts and pictures inside - is created when you download or copy it.)':
            '(La page HTML - avec les polices et les images incluses - est créée au moment du téléchargement ou de la copie.)',

        /* ---------- My documents ---------- */
        'Search by name': 'Rechercher par nom',
        'Search your documents': 'Rechercher dans vos documents',
        'Open a .tex file from your computer as a new document': 'Ouvrir un fichier .tex de votre ordinateur comme nouveau document',
        'New document': 'Nouveau document',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Cliquez sur un document pour l’ouvrir. Ils sont conservés uniquement dans ce navigateur - rien n’est envoyé. Effacer les données de site du navigateur les supprime : téléchargez ceux que vous voulez garder.',
        'Download every document as a .tex file (with its pictures) in one ZIP': 'Télécharger tous les documents en fichiers .tex (avec leurs images) dans un seul ZIP',
        'Download all (ZIP)': 'Tout télécharger (ZIP)',
        'Duplicate': 'Dupliquer',
        'Download as .tex': 'Télécharger en .tex',
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
        'The document is now in the LaTeX Editor tab you already had open. Switch to that tab, or open it here.':
            'Le document se trouve maintenant dans l’onglet de l’éditeur LaTeX que vous aviez déjà ouvert. Passez à cet onglet ou ouvrez-le ici.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)': 'La copie n’est pas autorisée ici - le texte est sélectionné ci-dessous : appuyez sur Ctrl+C (⌘C)',
        'Paste it into your AI and say what it should write.': 'Collez-le dans votre IA et dites-lui ce qu’elle doit écrire.',
        'The preview is the editor\'s own typesetting and understands the commands most documents use. The preview does not display TikZ drawings or fontspec fonts. Your source remains unchanged; compile it with an engine supported by its packages. fontspec requires XeLaTeX or LuaLaTeX.':
            'L’aperçu utilise le moteur de composition de l’éditeur et comprend les commandes utilisées par la plupart des documents. L’aperçu n’affiche ni les dessins TikZ ni les polices fontspec. Votre code source reste inchangé ; compilez-le avec un moteur compatible avec ses paquets. fontspec nécessite XeLaTeX ou LuaLaTeX.',
        'Prompt copied - paste it into your AI and say what it should write': 'Prompt copié - collez-le dans votre IA et dites-lui ce qu’elle doit écrire',
        'This link is incomplete or damaged - please ask the AI to send it again': 'Ce lien est incomplet ou endommagé - demandez à l’IA de le renvoyer',

        /* ---------- Save to your server ---------- */
        'Save to your server': 'Enregistrer sur votre serveur',
        'Webhook address': 'Adresse du webhook',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(facultatif, envoyé comme « Authorization: Bearer … » ; conservé jusqu’à la fermeture de cet onglet)',
        'Send automatically a few seconds after each change (otherwise only when you click': 'Envoyer automatiquement quelques secondes après chaque modification (sinon seulement quand vous cliquez sur',
        'or press Ctrl+S)': 'ou appuyez sur Ctrl+S)',
        'Only for “': 'Seulement pour « ',
        '” (other documents use the general address)': ' » (les autres documents utilisent l’adresse générale)',
        'What your server receives': 'Ce que reçoit votre serveur',
        'A POST request with JSON (your server must allow CORS from https://latex.giit.ch):': 'Une requête POST avec du JSON (votre serveur doit autoriser CORS depuis https://latex.giit.ch) :',
        'Embed the editor in your website': 'Intégrer l’éditeur dans votre site web',
        'Send now': 'Envoyer maintenant',
        'Save setting': 'Enregistrer le réglage',

        /* ---------- Help ---------- */
        'How it works': 'Fonctionnement',
        'Keyboard shortcuts': 'Raccourcis clavier',
        'Bold / italic / underline the selected text': 'Mettre le texte sélectionné en gras / italique / souligné',
        'Show the cursor\'s place in the preview': 'Montrer la position du curseur dans l’aperçu',
        'Indent / outdent': 'Augmenter / diminuer le retrait',
        'Undo / redo': 'Annuler / rétablir',
        'Save (download .tex, or to your server) / export': 'Enregistrer (télécharger le .tex, ou sur votre serveur) / exporter',
        'Print / save as PDF': 'Imprimer / enregistrer en PDF',
        '+ mouse wheel,': '+ molette de la souris,',
        'Zoom the preview': 'Zoomer l’aperçu',
        'Page Up': 'Page préc.',
        'Page Down': 'Page suiv.',
        'Previous / next page (in the preview)': 'Page précédente / suivante (dans l’aperçu)',

        /* ---------- Messages ---------- */
        'The browser storage is full - download and delete documents under "My documents"': 'Le stockage du navigateur est plein - téléchargez et supprimez des documents sous « Mes documents »',
        'The browser storage is full - delete or download documents under "My documents" first': 'Le stockage du navigateur est plein - supprimez ou téléchargez d’abord des documents sous « Mes documents »',
        'The browser storage is full - delete or download some documents first': 'Le stockage du navigateur est plein - supprimez ou téléchargez d’abord quelques documents',
        'The browser storage is full': 'Le stockage du navigateur est plein',
        'Nothing to undo': 'Rien à annuler',
        'Nothing to redo': 'Rien à rétablir',
        'This text changed in the code - wait for the preview, then try again': 'Ce texte a changé dans le code - attendez l’aperçu, puis réessayez',
        'The code changed meanwhile - the edit was not used': 'Le code a changé entre-temps - la modification n’a pas été appliquée',
        'The code changed - wait for the preview, then try again': 'Le code a changé - attendez l’aperçu, puis réessayez',
        'The picture is removed from this document. Places that use it show an empty frame. "Undo" does not bring it back.':
            'L’image est retirée de ce document. Les endroits qui l’utilisent affichent un cadre vide. « Annuler » ne la rétablit pas.',
        'Pictures can be PNG, JPG, GIF, WebP, SVG or PDF': 'Les images peuvent être en PNG, JPG, GIF, WebP, SVG ou PDF',
        'The picture is larger than 12 MB': 'L’image dépasse 12 Mo',
        'The picture could not be read': 'L’image n’a pas pu être lue',
        'Change paperwidth and paperheight in the \\usepackage[…]{geometry} line': 'Modifiez paperwidth et paperheight dans la ligne \\usepackage[…]{geometry}',
        'Title added': 'Titre ajouté',
        'The text is now a complete document': 'Le texte est maintenant un document complet',
        'The code is tidy already': 'Le code est déjà en ordre',
        'Code tidied up': 'Code mis en ordre',
        'This document is empty already': 'Ce document est déjà vide',
        'The text between \\begin{document} and \\end{document} is removed; the preamble (paper, packages, title) stays. "Undo" brings it back as long as the page is open.':
            'Le texte entre \\begin{document} et \\end{document} est supprimé ; le préambule (papier, paquets, titre) reste. « Annuler » le rétablit tant que la page est ouverte.',
        'Everything is removed. "Undo" brings it back as long as the page is open.': 'Tout est supprimé. « Annuler » le rétablit tant que la page est ouverte.',
        'Start over': 'Recommencer',
        'The file is larger than 8 MB': 'Le fichier dépasse 8 Mo',
        'LaTeX pasted from the clipboard - "Undo" brings the old text back': 'LaTeX collé depuis le presse-papiers - « Annuler » rétablit l’ancien texte',
        'Downloaded': 'Téléchargé',
        'Copied to the clipboard': 'Copié dans le presse-papiers',
        'This browser does not allow copying this': 'Ce navigateur ne permet pas de copier ceci',
        'Code copied': 'Code copié',
        '.tex with its pictures downloaded (ZIP)': '.tex téléchargé avec ses images (ZIP)',
        '.tex downloaded': '.tex téléchargé',
        'Add': 'Ajouter',
        'The document and its pictures are removed from this browser for good. Download it first if you want to keep a copy.':
            'Le document et ses images sont définitivement supprimés de ce navigateur. Téléchargez-le d’abord si vous voulez en garder une copie.',
        'This page could not be turned into a picture': 'Cette page n’a pas pu être transformée en image',
        'The browser could not create this picture': 'Le navigateur n’a pas pu créer cette image',

        /* ---------- Problems the preview finds (latex.js) ---------- */
        'Extra } - there is no { that it closes': '} en trop - aucune { ne lui correspond',
        'Misplaced & - it only separates the columns of a table (tabular) or an align': '& mal placé - il sépare seulement les colonnes d’un tableau (tabular) ou d’un align',
        'A lone # - write \\# for the character #': '# isolé - écrivez \\# pour le caractère #',
        '$$ is never closed - add the closing $$': '$$ n’est jamais fermé - ajoutez le $$ de fermeture',
        '$ is never closed - every $ that starts math needs a $ that ends it': '$ n’est jamais fermé - chaque $ qui ouvre une formule a besoin d’un $ qui la ferme',
        '\\( is never closed with \\)': '\\( n’est jamais fermé par \\)',
        '\\[ is never closed with \\]': '\\[ n’est jamais fermé par \\]',
        '\\maketitle without \\title{…} in the preamble': '\\maketitle sans \\title{…} dans le préambule',
        '\\item outside a list - put it in \\begin{itemize} … \\end{itemize}': '\\item hors d’une liste - placez-le dans \\begin{itemize} … \\end{itemize}',
        'BibTeX files cannot be read here - write the entries in \\begin{thebibliography}{9} … \\end{thebibliography}':
            'Les fichiers BibTeX ne peuvent pas être lus ici - écrivez les entrées dans \\begin{thebibliography}{9} … \\end{thebibliography}',
        'biblatex cannot run here - write the entries in \\begin{thebibliography}{9} … \\end{thebibliography}':
            'biblatex ne peut pas fonctionner ici - écrivez les entrées dans \\begin{thebibliography}{9} … \\end{thebibliography}',
        '\\verb needs a closing character on the same line, e.g. \\verb|text|': '\\verb a besoin d’un caractère de fermeture sur la même ligne, p. ex. \\verb|texte|',
        '\\def is only understood in the form \\def\\name{…}': '\\def n’est compris que sous la forme \\def\\nom{…}',
        '\\usepackage only works in the preamble (before \\begin{document})': '\\usepackage ne fonctionne que dans le préambule (avant \\begin{document})',
        '\\documentclass belongs at the very top, before \\begin{document}': '\\documentclass doit être tout en haut, avant \\begin{document}',
        'Beamer slides are shown as normal pages in the preview': 'Les diapositives Beamer sont affichées comme des pages normales dans l’aperçu',
        'Text after \\end{document} is ignored': 'Le texte après \\end{document} est ignoré',
        '\\begin{document} is never closed - add \\end{document} at the end': '\\begin{document} n’est jamais fermé - ajoutez \\end{document} à la fin',
        'There is no \\begin{document} - add \\begin{document} … \\end{document}': 'Il n’y a pas de \\begin{document} - ajoutez \\begin{document} … \\end{document}',

        /* texts that stay the same in German (so they are not in the German pack), but not in French */
        'online': 'en ligne',
        'Token': 'Jeton',
        'Link': 'Lien',
        'Text': 'Texte',
        'Label': 'Étiquette',
        'Matrix': 'Matrice',
        '∫ Integral': '∫ Intégrale',
        'Normal (2.5 cm)': 'Normales (2,5 cm)',
    },

    html: {

        '<b>Export</b> also has <b>Open in another editor</b>: it converts the document and opens it as a new document there. Anything the other format cannot hold is listed first.':

            '<b>Exporter</b> propose aussi <b>Ouvrir dans un autre éditeur</b> : le document est converti et ouvert là-bas comme nouveau document. Ce que l’autre format ne peut pas contenir est listé d’abord.',
        /* Export */
        'The print dialog opens with exactly the pages of the preview. Choose <b>Save as PDF</b> (or "Microsoft Print to PDF") as the printer. In Chrome and Edge, untick "Headers and footers" if the browser offers it. The text in the PDF stays sharp and can be selected.':
            'La boîte de dialogue d’impression s’ouvre avec exactement les pages de l’aperçu. Choisissez <b>Enregistrer au format PDF</b> (ou « Microsoft Print to PDF ») comme imprimante. Dans Chrome et Edge, décochez « En-têtes et pieds de page » si le navigateur le propose. Le texte du PDF reste net et peut être sélectionné.',

        /* Document tab without a preamble */
        'This text has no preamble (no <code>\\documentclass</code> and <code>\\begin{document}</code>), so it is shown as a plain A4 article.':
            'Ce texte n’a pas de préambule (pas de <code>\\documentclass</code> ni de <code>\\begin{document}</code>), il est donc affiché comme un simple article A4.',

        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Cliquez sur <b>Copier le prompt</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'L’IA répond par un lien : cliquez dessus, ou collez toute la réponse ci-dessous. <b>Annuler</b> l’annule.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'L’IA répond par un lien : <b>collez toute sa réponse ci-dessous</b> (un lien cliqué ouvre un éditeur séparé). <b>Annuler</b> l’annule.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'L’éditeur peut envoyer chaque version enregistrée à votre propre serveur (un <b>webhook</b>), pour que votre travail soit conservé là où vous le souhaitez. Rien n’est envoyé tant que vous n’avez pas saisi d’adresse ici.',
        'Also possible: <code>?src=&lt;URL of a .tex file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>latexeditor:ai</code>, <code>latexeditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Également possible : <code>?src=&lt;URL of a .tex file&gt;</code> ouvre un fichier, <code>&amp;webhook=&lt;URL&gt;</code> y enregistre ce document. L’éditeur peut aussi s’ouvrir dans sa propre fenêtre (<code>?embed=window</code>), et votre page peut lui transmettre son propre prompt d’IA et une clé de session pour que l’IA envoie son résultat à votre serveur (<code>latexeditor:ai</code>, <code>latexeditor:key-request</code>) - voir « Utiliser l’éditeur sur votre propre site web » sous l’éditeur. Les détails se trouvent dans <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> LaTeX on the left - or start with <b>New</b> and one of the templates. The preview on the right shows the typeset pages as you type.':
            '<b>Écrivez</b> du LaTeX à gauche - ou commencez par <b>Nouveau</b> et l’un des modèles. L’aperçu à droite montre les pages composées au fil de la saisie.',
        '<b>Click text in the preview</b> to edit it right there: the cursor is where you clicked, and the code\'s cursor goes to the same place. <b>Enter</b> starts a new paragraph; <b>Shift+Enter</b> inserts a line break. <b>Ctrl+Enter</b> (<b>Cmd+Enter</b> on macOS) or a click elsewhere applies the edit; <b>Escape</b> cancels. A click on math, a picture or text made by a command jumps to its place in the code instead. The place where the code cursor is gets a frame in the preview.':
            '<b>Cliquez sur un texte dans l’aperçu</b> pour le modifier sur place : le curseur se trouve là où vous avez cliqué, et le curseur du code va au même endroit. <b>Entrée</b> commence un nouveau paragraphe ; <b>Maj+Entrée</b> insère un saut de ligne. <b>Ctrl+Entrée</b> (<b>Cmd+Entrée</b> sur macOS) ou un clic ailleurs valide la modification ; <b>Échap</b> l’annule. Un clic sur une formule, une image ou un texte produit par une commande mène plutôt à sa place dans le code. L’endroit où se trouve le curseur du code est encadré dans l’aperçu.',
        '<b>Document</b> on the right sets paper, font, margins and title; <b>Insert</b> has ready-made pieces (lists, tables, math, symbols); <b>Pictures</b> holds the pictures of the document; <b>Outline</b> lists the sections.':
            '<b>Document</b> à droite règle le papier, la police, les marges et le titre ; <b>Insérer</b> propose des éléments prêts à l’emploi (listes, tableaux, formules, symboles) ; <b>Images</b> contient les images du document ; <b>Plan</b> liste les sections.',
        'Problems in the code (a missing <code>}</code>, an unknown command) are listed above the code - click one to go there.':
            'Les problèmes dans le code (une <code>}</code> manquante, une commande inconnue) sont listés au-dessus du code - cliquez sur l’un d’eux pour y aller.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser.':
            '<b>Mes documents</b> (le bouton dossier en haut à gauche) liste tous les documents conservés dans ce navigateur.',
        '<b>Export</b> makes a PDF (via the print dialog), pictures of the pages, an HTML page or plain text. <b>Download .tex</b> saves the code.':
            '<b>Exporter</b> crée un PDF (via la boîte de dialogue d’impression), des images des pages, une page HTML ou du texte brut. <b>Télécharger le .tex</b> enregistre le code.',
        'Math: <code>$…$</code> around the selection': 'Formule : <code>$…$</code> autour de la sélection',
        'Comment lines in or out (<code>%</code>)': 'Commenter / décommenter des lignes (<code>%</code>)',
        'Typing <code>\\begin{name}</code> and pressing <kbd>Enter</kbd> adds the matching <code>\\end{name}</code>. Brackets <code>{ [ (</code> and <code>$</code> close by themselves around a selection.':
            'Taper <code>\\begin{nom}</code> puis <kbd>Entrée</kbd> ajoute le <code>\\end{nom}</code> correspondant. Les parenthèses <code>{ [ (</code> et <code>$</code> se ferment d’elles-mêmes autour d’une sélection.',
    },

    patterns: [
        /* ---------- Status lines ---------- */
        ['^(\\d+) lines · ([\\d.]+ K?B)(?: · (\\d+) (?:page|pages))?$', (m, l, kb, p) => `${l} ${getPlural(l, 'ligne', 'lignes')} · ${formatSize(kb)}${p ? ` · ${p} ${getPlural(p, 'page', 'pages')}` : ''}`],
        ['^(\\d+) (?:page|pages)$', (m, k) => `${k} ${getPlural(k, 'page', 'pages')}`],
        ['^(\\d+) × (\\d+) pixels per page · (\\d+) (?:page|pages)$', (m, w, h, k) => `${w} × ${h} pixels par page · ${k} ${getPlural(k, 'page', 'pages')}`],
        ['^\\.tex and (\\d+) (?:picture|pictures)$', (m, k) => `.tex et ${k} ${getPlural(k, 'image', 'images')}`],
        ['^([\\d,]+) bytes$', (m, b) => `${formatThousands(b)} octets`],
        ['^words · (\\d+) × (\\d+) mm( · German)?$', (m, w, h, g) => `mots · ${w} × ${h} mm${g ? ' · allemand' : ''}`],
        ['^\\d{1,3}(?:,\\d{3})+$', m => formatThousands(m)],

        /* Problems above the code */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'erreur', 'erreurs')}`],
        ['^· (\\d+) (?:note|notes)$', (m, k) => `· ${k} ${getPlural(k, 'remarque', 'remarques')}`],
        ['^(\\d+) (?:note|notes)$', (m, k) => `${k} ${getPlural(k, 'remarque', 'remarques')}`],
        ['^Line (\\d+)$', 'Ligne $1'],
        ['^The preview failed: (.*)$', 'L’aperçu a échoué : $1'],
        ['^Unknown color "(.+)" - define it with \\\\definecolor\\{(.+)\\}\\{HTML\\}\\{RRGGBB\\}$', 'Couleur inconnue « $1 » - définissez-la avec \\definecolor{$2}{HTML}{RRGGBB}'],
        ['^Image "(.+)" not found - drag the picture into the editor \\(or add it in the Pictures tab\\)$', 'Image « $1 » introuvable - glissez l’image dans l’éditeur (ou ajoutez-la dans l’onglet Images)'],
        ['^(.) only works in math - write (\\$x.2\\$), or (\\\\\\S+) for the character$', '$1 ne fonctionne que dans une formule - écrivez $2, ou $3 pour le caractère'],
        ['^(\\\\\\S+) needs an argument in \\{ \\}$', '$1 a besoin d’un argument entre { }'],
        ['^The \\{ after (\\\\\\S+) is never closed - a \\} is missing$', 'La { après $1 n’est jamais fermée - il manque une }'],
        ['^Math: (.*)$', 'Formule : $1'],
        ['^The label "(.+)" is used twice$', 'L’étiquette « $1 » est utilisée deux fois'],
        ['^Reference to "(.+)" which has no \\\\label\\{(.+)\\}$', 'Renvoi à « $1 », qui n’a pas de \\label{$2}'],
        ['^Unknown command (\\\\\\S+) - the preview ignores it$', 'Commande inconnue $1 - l’aperçu l’ignore'],
        ['^Unknown command (\\\\\\S+)$', 'Commande inconnue $1'],
        ['^(\\\\[)\\]]) without the opening (\\\\[(\\[])$', '$1 sans le $2 d’ouverture'],
        ['^(\\\\\\S+) calls itself without end - the preview stops expanding it$', '$1 s’appelle sans fin - l’aperçu cesse de le développer'],
        ['^The environment (\\S+) begins itself without end - the preview stops expanding it$', 'L’environnement $1 se commence lui-même sans fin - l’aperçu cesse de le développer'],
        ['^(\\\\begin\\{.+\\}) is never closed - add (\\\\end\\{.+\\})$', '$1 n’est jamais fermé - ajoutez $2'],
        ['^Unknown environment (.+) - its content is shown as normal text$', 'Environnement inconnu $1 - son contenu est affiché comme du texte normal'],
        ['^The (\\S+) has text but no \\\\item$', 'L’environnement $1 contient du texte mais aucun \\item'],
        ['^This table row has (\\d+) columns, but the table was set up for (\\d+) - add a column to (\\{.*\\}) or remove an &$', 'Cette ligne du tableau a $1 colonnes, mais le tableau est prévu pour $2 - ajoutez une colonne dans $3 ou supprimez un &'],
        ['^Unknown column type "(.+)" in the table setup$', 'Type de colonne inconnu « $1 » dans la définition du tableau'],
        ['^(\\\\end\\{.+\\}) without a matching (\\\\begin\\{.+\\})$', '$1 sans $2 correspondant'],
        ['^\\\\definecolor: "(.+)" is not a valid (\\S+) color$', '\\definecolor : « $1 » n’est pas une couleur $2 valide'],
        ['^(\\\\cite\\{.*\\}): there is no (\\\\bibitem\\{.*\\})$', '$1 : il n’y a pas de $2'],
        ['^(\\\\\\S+\\{.*\\}): other files cannot be read here - paste their text into this document$', '$1 : les autres fichiers ne peuvent pas être lus ici - collez leur texte dans ce document'],
        ['^(.+) drawings cannot be shown in the preview - they appear when the file is compiled with LaTeX$', 'Les dessins $1 ne peuvent pas être affichés dans l’aperçu - ils apparaissent quand le fichier est compilé avec LaTeX'],
        ['^(\\\\\\S+) needs a name, e\\.g\\. (.+)$', '$1 a besoin d’un nom, p. ex. $2'],
        ['^(\\\\\\S+) is defined twice - use \\\\renewcommand to change it$', '$1 est défini deux fois - utilisez \\renewcommand pour le modifier'],
        ['^Text before \\\\begin\\{document\\}: "(.*)" - text belongs between \\\\begin\\{document\\} and \\\\end\\{document\\}$', 'Texte avant \\begin{document} : « $1 » - le texte doit se trouver entre \\begin{document} et \\end{document}'],
        ['^The document class "(.+)" is shown like "article" in the preview$', 'La classe de document « $1 » est affichée comme « article » dans l’aperçu'],
        ['^(\\S+) needs XeLaTeX or LuaLaTeX - the preview uses its own fonts$', '$1 nécessite XeLaTeX ou LuaLaTeX - l’aperçu utilise ses propres polices'],
        ['^(\\S+) drawings are not shown in the preview$', 'Les dessins $1 ne sont pas affichés dans l’aperçu'],
        ['^The package "(.+)" is not known to the preview - its commands may be missing$', 'L’aperçu ne connaît pas le paquet « $1 » - ses commandes peuvent manquer'],
        ['^(\\\\\\S+) in the preamble is not understood by the preview$', 'L’aperçu ne comprend pas $1 dans le préambule'],

        /* ---------- Pictures tab ---------- */
        ['^(\\d+) (?:picture|pictures) · (.+)$', (m, k, s) => `${k} ${getPlural(k, 'image', 'images')} · ${formatSize(s)}`],
        ['^Pictures belong to “(.*)” and stay in your browser\\. Drop or paste them anywhere in the editor, or add them here;$',
            'Les images appartiennent à « $1 » et restent dans votre navigateur. Déposez-les ou collez-les n’importe où dans l’éditeur, ou ajoutez-les ici ;'],
        ['^Choose the file for (.+)$', 'Choisir le fichier pour $1'],
        ['^Insert \\\\includegraphics\\{(.+)\\} at the cursor$', 'Insérer \\includegraphics{$1} au curseur'],
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
        ['^"(.+)" is not a \\.tex file$', '« $1 » n’est pas un fichier .tex'],
        ['^Opened "(.+)" - it is now in "My documents"$', '« $1 » ouvert - il se trouve maintenant dans « Mes documents »'],
        ['^Opened "(.+)" with (\\d+) (?:picture|pictures)$', (m, f, k) => `« ${f} » ouvert avec ${k} ${getPlural(k, 'image', 'images')}`],
        ['^"(.+)" could not be opened: (.*)$', (m, f, why) => `« ${f} » n’a pas pu être ouvert : ${ZIP[why] || why}`],
        ['^ZIP downloaded: \\.tex, pictures, HTML, text and (\\d+) (?:page|pages) as PNG$', (m, k) => `ZIP téléchargé : .tex, images, HTML, texte et ${k} ${getPlural(k, 'page', 'pages')} en PNG`],
        ['^Document received - the preview found (\\d+) (?:problem|problems), see above the code$', (m, k) => `Document reçu - l’aperçu a trouvé ${k} ${getPlural(k, 'problème', 'problèmes')}, voir au-dessus du code`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '« $1 » modifié par l’IA - « Annuler » l’annule'],
        ['^"(.+)" duplicated$', '« $1 » dupliqué'],
        ['^Delete "(.+)"\\?$', 'Supprimer « $1 » ?'],
        ['^"(.+)" deleted$', '« $1 » supprimé'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Ouvrir $1'],
    ],
};
