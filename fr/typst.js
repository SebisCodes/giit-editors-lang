/* French texts of the Typst editor: the bar, the work area (code, pages,
   document settings, insert, pictures and files, outline), its dialogs and
   messages. What all editors share is in common.js; how the
   dictionaries are used is described in i18n.js. The compiler's own
   messages stay as Typst writes them (English); names of documents, files,
   labels and functions stay as they are: the patterns copy them into the
   French text. */

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
const ZIP = { 'it is not a ZIP file': 'ce n’est pas un fichier ZIP', 'there is no .typ file in it': 'il ne contient aucun fichier .typ' };

export default {
    text: {
        "This document has no pages yet - fix the problems above the code first": "Ce document n’a pas encore de pages - corrigez d’abord les problèmes au-dessus du code",
        // Editing in place: Enter and Shift+Enter
        "Editing on the page - Enter: new paragraph, Shift+Enter: new line, Ctrl+Enter or a click elsewhere keeps it, Escape cancels": "Modification sur la page - Entrée : nouveau paragraphe, Maj+Entrée : nouvelle ligne, Ctrl+Entrée ou un clic ailleurs valide, Échap annule",
        "A new paragraph inside bold or emphasis is made in the code - Shift+Enter makes a new line": "Un nouveau paragraphe dans du gras ou de l’emphase se fait dans le code - Maj+Entrée crée une nouvelle ligne",
        /* ---------- Top bar ---------- */
        'Typst Editor - home': 'Éditeur Typst - accueil',
        'Typst Editor': 'Éditeur Typst',
        'File': 'Fichier',
        'My documents (Ctrl+O)': 'Mes documents (Ctrl+O)',
        'My documents': 'Mes documents',
        'New document, or start this one over': 'Nouveau document, ou recommencer celui-ci',
        'New': 'Nouveau',
        'New blank document': 'Nouveau document vide',
        'An empty A4 page - your other documents stay as they are': 'Une page A4 vide - vos autres documents restent tels quels',
        'Article': 'Article',
        'Title, abstract and four sections': 'Titre, résumé et quatre sections',
        'Letter': 'Lettre',
        'Addresses, date, subject and signature': 'Adresses, date, objet et signature',
        'Exercise sheet': 'Feuille d’exercices',
        'Exercises with math, solutions and code': 'Exercices avec formules, solutions et code',
        'Social media post': 'Publication pour réseaux sociaux',
        'A square picture with colors and big type': 'Une image carrée avec des couleurs et de grands caractères',
        'The welcome example': 'L’exemple de bienvenue',
        'Shows what the editor can do': 'Montre ce que l’éditeur sait faire',
        'Start this document over': 'Recommencer ce document',
        'Keeps the #set rules at the top, empties the text - "Undo" brings it back': 'Conserve les règles #set en haut, vide le texte - « Annuler » le rétablit',
        'Open a .typ file (or a picture or data file) from your computer (you can also drag it into the window)':
            'Ouvrir un fichier .typ (ou une image ou un fichier de données) depuis votre ordinateur (vous pouvez aussi le glisser dans la fenêtre)',
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
        'Save the document as a .typ file (Ctrl+S)': 'Enregistrer le document en fichier .typ (Ctrl+S)',
        'Download .typ': 'Télécharger le .typ',
        'PDF, pictures of the pages and more (Ctrl+E)': 'PDF, images des pages et plus (Ctrl+E)',
        'Export…': 'Exporter…',

        /* ---------- Views and work area ---------- */
        'View': 'Affichage',
        'Edit': 'Modifier',
        'Side panel': 'Panneau latéral',
        'Show or hide the side panel': 'Afficher ou masquer le panneau latéral',
        'Examples': 'Exemples',
        'Template': 'Modèle',
        'View of the preview': 'Affichage de l’aperçu',
        'The template with its placeholders as written': 'Le modèle avec ses espaces réservés tels qu’ils sont écrits',
        'Placeholders': 'Espaces réservés',
        'The placeholders of the template - a click on one puts its tag at the cursor': 'Les espaces réservés du modèle - cliquez sur l’un d’eux pour insérer sa balise au curseur',
        'Shown': 'Affiché',
        'Hidden': 'Masqué',
        'example view': 'vue avec exemples',
        'template view': 'vue du modèle',
        "This picture moves in the template view - the examples repeat or leave out pictures here": "Cette image se déplace dans la vue du modèle - les exemples répètent ou omettent des images ici",
        "This picture is removed in the template view - the examples repeat or leave out pictures here": "Cette image se retire dans la vue du modèle - les exemples répètent ou omettent des images ici",
        'The pages filled with the examples': "Les pages remplies avec les exemples",
        'The examples could not be filled in - the pages show the template': "Les exemples n’ont pas pu être insérés - les pages montrent le modèle",
        'Preview': 'Aperçu',
        'Document': 'Document',
        'Typst code': 'Code Typst',
        'Copy the Typst code to the clipboard': 'Copier le code Typst dans le presse-papiers',
        'Copy code': 'Copier le code',
        'Copy': 'Copier',
        'Drag to change the width of the code area': 'Faire glisser pour modifier la largeur de la zone de code',
        'Drag to change the width': 'Faire glisser pour modifier la largeur',
        'Formatting': 'Mise en forme',
        'Bold: *text* (Ctrl+B)': 'Gras : *texte* (Ctrl+B)',
        'Bold': 'Gras',
        'Italic: _text_ (Ctrl+I)': 'Italique : _texte_ (Ctrl+I)',
        'Italic': 'Italique',
        'Underline (Ctrl+U)': 'Souligné (Ctrl+U)',
        'Underline': 'Souligné',
        'Code in the text: `text`': 'Code dans le texte : `texte`',
        'Code in the text': 'Code dans le texte',
        'Heading': 'Titre',
        'Bulleted list': 'Liste à puces',
        'Numbered list': 'Liste numérotée',
        'Table': 'Tableau',
        'Picture': 'Image',
        'Math in the text (Ctrl+M)': 'Formule dans le texte (Ctrl+M)',
        'Math': 'Maths',
        'Previous page (Page Up)': 'Page précédente (Page préc.)',
        'Previous page': 'Page précédente',
        'Next page (Page Down)': 'Page suivante (Page suiv.)',
        'Next page': 'Page suivante',
        'Preview of the pages: click text to edit it or to jump to its place in the code': 'Aperçu des pages : cliquez sur un texte pour le modifier ou pour aller à sa place dans le code',
        'Zoom out (Ctrl + -)': 'Zoom arrière (Ctrl + -)',
        'Zoom out': 'Zoom arrière',
        'Show at actual size': 'Afficher en taille réelle',
        'Zoom in (Ctrl + +)': 'Zoom avant (Ctrl + +)',
        'Zoom in': 'Zoom avant',
        'Fit the page width into the window': 'Ajuster la largeur de la page à la fenêtre',
        'Fit width': 'Pleine largeur',
        'Show the whole page': 'Afficher la page entière',
        'Whole page': 'Page entière',
        'Compiling…': 'Compilation…',
        'Paper, font, margins and numbering of the document': 'Papier, police, marges et numérotation du document',
        'Ready-made pieces: structure, text, math, symbols': 'Éléments prêts à l’emploi : structure, texte, maths, symboles',
        'Insert': 'Insérer',
        'The pictures and files of this document': 'Les images et fichiers de ce document',
        'Pictures': 'Images',
        'The headings of the document': 'Les titres du document',
        'Outline': 'Plan',
        'The headings of the document. Click one to go there in the code and on the pages.':
            'Les titres du document. Cliquez sur l’un d’eux pour y aller dans le code et sur les pages.',
        'No headings yet - add one with = Heading.': 'Pas encore de titres - ajoutez-en un avec = Titre.',
        'Open it here': 'L’ouvrir ici',
        'Drop the .typ file, picture or data file here': 'Déposez ici le fichier .typ, l’image ou le fichier de données',
        'Text on the page': 'Texte sur la page',

        /* Problems above the code */
        'Hide': 'Masquer',
        'Show': 'Afficher',
        'Hint:': 'Conseil :',

        /* ---------- Insert tab ---------- */
        'Structure': 'Structure',
        'Subheading': 'Sous-titre',
        'Third level': 'Troisième niveau',
        'Contents': 'Table des matières',
        '• Bulleted list': '• Liste à puces',
        '1. Numbered list': '1. Liste numérotée',
        'Term list': 'Liste de termes',
        'Figure': 'Figure',
        'Two columns': 'Deux colonnes',
        'Quote': 'Citation',
        'Centered': 'Centré',
        'Program code': 'Code source',
        'Title': 'Titre',
        'New page': 'Nouvelle page',
        'Vertical space': 'Espace vertical',
        'Bibliography': 'Bibliographie',
        'A bibliography from a .bib file of the document (add it in the Pictures tab)': 'Une bibliographie à partir d’un fichier .bib du document (ajoutez-le dans l’onglet Images)',
        'Footnote': 'Note',
        'Reference': 'Renvoi',
        'Colored text': 'Texte en couleur',
        'Highlighted': 'Surligné',
        'Colored box': 'Encadré coloré',
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
        '∫ Integral': '∫ Intégrale',
        'lim Limit': 'lim Limite',
        'Matrix': 'Matrice',
        'Cases': 'Cas',
        'Greek letters': 'Lettres grecques',
        'Symbols': 'Symboles',
        'Pictures and files have their own tab:': 'Les images et fichiers ont leur propre onglet :',

        /* ---------- Pictures tab ---------- */
        'Add pictures or files…': 'Ajouter des images ou des fichiers…',
        'No pictures or files yet': 'Pas encore d’images ni de fichiers',
        'Pictures and files belong to “': 'Les images et fichiers appartiennent à « ',
        '” and stay in your browser.': ' » et restent dans votre navigateur.',
        'Missing in this document': 'Manquantes dans ce document',
        'Add file…': 'Ajouter un fichier…',
        'Insert it at the cursor': 'L’insérer au curseur',
        'Show where it is used': 'Afficher où il est utilisé',
        'A figure with caption and label at the cursor': 'Une figure avec légende et étiquette au curseur',
        'As figure': 'En figure',
        'Rename - the code is changed along': 'Renommer - le code est modifié en conséquence',
        'Rename': 'Renommer',
        'Choose another file, keep the name': 'Choisir un autre fichier, garder le nom',
        'Replace': 'Remplacer',
        'Download the file': 'Télécharger le fichier',
        'Download': 'Télécharger',
        'Remove the file from this document': 'Retirer le fichier de ce document',
        'Remove': 'Retirer',
        'New name': 'Nouveau nom',
        'Font': 'Police',

        /* ---------- Document tab ---------- */
        'Paper': 'Papier',
        'Square 120 × 120 mm (1:1)': 'Carré 120 × 120 mm (1:1)',
        'Portrait 4:5 (120 × 150 mm)': 'Portrait 4:5 (120 × 150 mm)',
        'Story 9:16 (90 × 160 mm)': 'Story 9:16 (90 × 160 mm)',
        'Slide 16:9 (160 × 90 mm)': 'Diapositive 16:9 (160 × 90 mm)',
        'Other size': 'Autre format',
        'Margins': 'Marges',
        'Typst default (about 2.5 cm)': 'Par défaut dans Typst (environ 2,5 cm)',
        'Normal (2.5 cm)': 'Normales (2,5 cm)',
        'Narrow (2 cm)': 'Étroites (2 cm)',
        'Very narrow (1.5 cm)': 'Très étroites (1,5 cm)',
        'Wide (3.5 cm)': 'Larges (3,5 cm)',
        'None': 'Aucune',
        'Other': 'Autre',
        'Orientation': 'Orientation',
        'Portrait': 'Portrait',
        'Landscape': 'Paysage',
        'Libertinus Serif (Typst default)': 'Libertinus Serif (par défaut dans Typst)',
        'New Computer Modern (like LaTeX)': 'New Computer Modern (comme LaTeX)',
        'DejaVu Sans Mono (typewriter)': 'DejaVu Sans Mono (machine à écrire)',
        'Font size': 'Taille de police',
        '11 pt (default)': '11 pt (par défaut)',
        'Language': 'Langue',
        'English (default)': 'Anglais (par défaut)',
        'German': 'Allemand',
        'German (Switzerland)': 'Allemand (Suisse)',
        'French': 'Français',
        'Italian': 'Italien',
        'Spanish': 'Espagnol',
        'Line spacing': 'Interligne',
        'Normal': 'Normal',
        'More': 'Plus',
        '1½ lines': '1,5 ligne',
        'Double': 'Double',
        'Columns': 'Colonnes',
        'One': 'Une',
        'Two': 'Deux',
        'Three': 'Trois',
        'Justified text (both edges straight)': 'Texte justifié (les deux bords droits)',
        'Numbered headings (1., 1.1 …)': 'Titres numérotés (1., 1.1 …)',
        'Page numbers': 'Numéros de page',
        '(of the PDF; #title() shows it)': '(du PDF ; #title() l’affiche)',
        'Author': 'Auteur',
        'Show the title (#title())': 'Afficher le titre (#title())',
        'pages · about': 'pages · environ',
        'page · about': 'page · environ',

        /* ---------- Export ---------- */
        'Close': 'Fermer',
        'File name': 'Nom du fichier',
        'PDF (from the Typst compiler)': 'PDF (du compilateur Typst)',
        'Pictures of the pages': 'Images des pages',
        'SVG (vector)': 'SVG (vectoriel)',
        'Source': 'Source',
        'Typst source (.typ)': 'Source Typst (.typ)',
        'Typst with pictures and files (ZIP)': 'Typst avec images et fichiers (ZIP)',
        'Pages': 'Pages',
        'The page shown now': 'La page affichée',
        'All pages (one picture each, as ZIP)': 'Toutes les pages (une image chacune, en ZIP)',
        'Sharpness': 'Netteté',
        '96 dpi (screen)': '96 dpi (écran)',
        '300 dpi (print)': '300 dpi (impression)',
        'Result': 'Résultat',
        'The PDF comes straight from the Typst compiler: the same pages as in the preview, with real text that can be selected and searched, links and the document\'s title.':
            'Le PDF vient directement du compilateur Typst : les mêmes pages que dans l’aperçu, avec du texte sélectionnable dans lequel effectuer des recherches, les liens et le titre du document.',
        'Download everything at once: .typ, pictures and files, PDF and every page as PNG and SVG': 'Tout télécharger d’un coup : .typ, images et fichiers, PDF et chaque page en PNG et SVG',
        'All formats (ZIP)': 'Tous les formats (ZIP)',

        /* ---------- My documents ---------- */
        'Search by name': 'Rechercher par nom',
        'Search your documents': 'Rechercher dans vos documents',
        'Open a .typ file from your computer as a new document': 'Ouvrir un fichier .typ de votre ordinateur comme nouveau document',
        'New document': 'Nouveau document',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Cliquez sur un document pour l’ouvrir. Ils sont conservés uniquement dans ce navigateur - rien n’est envoyé. Effacer les données de site du navigateur les supprime : téléchargez ceux que vous voulez garder.',
        'Download every document as a .typ file (with its pictures and files) in one ZIP': 'Télécharger tous les documents en fichiers .typ (avec leurs images et fichiers) dans un seul ZIP',
        'Download all (ZIP)': 'Tout télécharger (ZIP)',
        'Duplicate': 'Dupliquer',
        'Download as .typ': 'Télécharger en .typ',
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
        'The document is now in the Typst Editor tab you already had open. Switch to that tab, or open it here.':
            'Le document se trouve maintenant dans l’onglet de l’éditeur Typst que vous aviez déjà ouvert. Passez à cet onglet ou ouvrez-le ici.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)': 'La copie n’est pas autorisée ici - le texte est sélectionné ci-dessous : appuyez sur Ctrl+C (⌘C)',
        'Paste it into your AI and say what it should write.': 'Collez-le dans votre IA et dites-lui ce qu’elle doit écrire.',
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
        'A POST request with JSON (your server must allow CORS from https://typst.giit.ch):': 'Une requête POST avec du JSON (votre serveur doit autoriser CORS depuis https://typst.giit.ch) :',
        'https://example.com/api/typst': 'https://example.com/api/typst',
        'Embed the editor in your website': 'Intégrer l’éditeur dans votre site web',
        'Send now': 'Envoyer maintenant',
        'Save setting': 'Enregistrer le réglage',

        /* ---------- Help ---------- */
        'How it works': 'Fonctionnement',
        'The compiler\'s errors and warnings are listed above the code with line, column and hint - click one to go there.':
            'Les erreurs et avertissements du compilateur sont listés au-dessus du code avec ligne, colonne et conseil - cliquez sur l’un d’eux pour y aller.',
        'Keyboard shortcuts': 'Raccourcis clavier',
        'Bold / italic / underline the selected text': 'Mettre le texte sélectionné en gras / italique / souligné',
        'Show the cursor\'s place on the pages': 'Montrer la position du curseur sur les pages',
        'Indent / outdent': 'Augmenter / diminuer le retrait',
        'Undo / redo': 'Annuler / rétablir',
        'Save (download .typ, or to your server) / export': 'Enregistrer (télécharger le .typ, ou sur votre serveur) / exporter',
        'Print the pages': 'Imprimer les pages',
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
        'The file is removed from this document. The code that uses it then reports a missing file. "Undo" does not bring it back.':
            'Le fichier est retiré de ce document. Le code qui l’utilise signale alors un fichier manquant. « Annuler » ne le rétablit pas.',
        'Pictures can be PNG, JPG, GIF, WebP, SVG or PDF; files CSV, JSON, YAML, TOML, XML, TXT, BIB, Typst or fonts':
            'Les images peuvent être en PNG, JPG, GIF, WebP, SVG ou PDF ; les fichiers en CSV, JSON, YAML, TOML, XML, TXT, BIB, Typst ou polices',
        'The file is larger than 12 MB': 'Le fichier dépasse 12 Mo',
        'The picture could not be read': 'L’image n’a pas pu être lue',
        'Change width and height in the #set page(…) line': 'Modifiez width et height dans la ligne #set page(…)',
        'Title added': 'Titre ajouté',
        'This document is empty already': 'Ce document est déjà vide',
        'The text is removed; the settings at the top (#set, #show, #import, #let) stay. "Undo" brings it back as long as the page is open.':
            'Le texte est supprimé ; les réglages en haut (#set, #show, #import, #let) restent. « Annuler » le rétablit tant que la page est ouverte.',
        'Everything is removed. "Undo" brings it back as long as the page is open.': 'Tout est supprimé. « Annuler » le rétablit tant que la page est ouverte.',
        'Start over': 'Recommencer',
        'The file is larger than 8 MB': 'Le fichier dépasse 8 Mo',
        'Downloaded': 'Téléchargé',
        'Copied to the clipboard': 'Copié dans le presse-papiers',
        'This browser does not allow copying this': 'Ce navigateur ne permet pas de copier ceci',
        'Code copied': 'Code copié',
        '.typ with its files downloaded (ZIP)': '.typ téléchargé avec ses fichiers (ZIP)',
        '.typ downloaded': '.typ téléchargé',
        'Add': 'Ajouter',
        'The document and its pictures are removed from this browser for good. Download it first if you want to keep a copy.':
            'Le document et ses images sont définitivement supprimés de ce navigateur. Téléchargez-le d’abord si vous voulez en garder une copie.',
        'The page could not be drawn': 'La page n’a pas pu être dessinée',

        /* texts that stay the same in German (so they are not in the German pack), but not in French */
        'online': 'en ligne',
        'Token': 'Jeton',
        'Link': 'Lien',
        'Text': 'Texte',
        'Label': 'Étiquette',
    },

    html: {

        '<b>Export</b> also has <b>Open in another editor</b>: it converts the document and opens it as a new document there. Anything the other format cannot hold is listed first.':

            '<b>Exporter</b> propose aussi <b>Ouvrir dans un autre éditeur</b> : le document est converti et ouvert là-bas comme nouveau document. Ce que l’autre format ne peut pas contenir est listé d’abord.',
        /* Pictures tab */
        'Drop or paste pictures anywhere in the editor, or add them here: <code>image("name")</code> shows a picture, <code>csv</code>, <code>json</code>, <code>read</code> or <code>bibliography</code> read data files, fonts (.otf, .ttf) work with <code>#set text(font: …)</code>.':
            'Déposez ou collez des images n’importe où dans l’éditeur, ou ajoutez-les ici : <code>image("name")</code> affiche une image, <code>csv</code>, <code>json</code>, <code>read</code> ou <code>bibliography</code> lisent des fichiers de données, les polices (.otf, .ttf) fonctionnent avec <code>#set text(font: …)</code>.',

        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Cliquez sur <b>Copier le prompt</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'L’IA répond par un lien : cliquez dessus, ou collez toute la réponse ci-dessous. <b>Annuler</b> l’annule.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'L’IA répond par un lien : <b>collez toute sa réponse ci-dessous</b> (un lien cliqué ouvre un éditeur séparé). <b>Annuler</b> l’annule.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'L’éditeur peut envoyer chaque version enregistrée à votre propre serveur (un <b>webhook</b>), pour que votre travail soit conservé là où vous le souhaitez. Rien n’est envoyé tant que vous n’avez pas saisi d’adresse ici.',
        'Also possible: <code>?src=&lt;URL of a .typ file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>typsteditor:ai</code>, <code>typsteditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Également possible : <code>?src=&lt;URL of a .typ file&gt;</code> ouvre un fichier, <code>&amp;webhook=&lt;URL&gt;</code> y enregistre ce document. L’éditeur peut aussi s’ouvrir dans sa propre fenêtre (<code>?embed=window</code>), et votre page peut lui transmettre son propre prompt d’IA et une clé de session pour que l’IA envoie son résultat à votre serveur (<code>typsteditor:ai</code>, <code>typsteditor:key-request</code>) - voir « Utiliser l’éditeur sur votre propre site web » sous l’éditeur. Les détails se trouvent dans <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> Typst on the left - or start with <b>New</b> and one of the templates. The real Typst compiler runs in your browser and shows the pages as you type.':
            '<b>Écrivez</b> du Typst à gauche - ou commencez par <b>Nouveau</b> et l’un des modèles. Le vrai compilateur Typst tourne dans votre navigateur et montre les pages au fil de la saisie.',
        '<b>Click text on the page</b> to edit it right there: a field opens with the cursor where you clicked, and the code\'s cursor goes to the same place. Enter starts a new paragraph; Shift+Enter inserts a line break. Ctrl+Enter (Cmd+Enter on macOS) or a click elsewhere applies the edit; Escape cancels. A click on math, a picture or text made by code jumps to its place in the code instead. The place where the code cursor is gets a frame on the page.':
            '<b>Cliquez sur un texte de la page</b> pour le modifier sur place : un champ s’ouvre avec le curseur là où vous avez cliqué, et le curseur du code va au même endroit. Entrée commence un nouveau paragraphe ; Maj+Entrée insère un saut de ligne. Ctrl+Entrée (Cmd+Entrée sur macOS) ou un clic ailleurs valide la modification ; Échap l’annule. Un clic sur une formule, une image ou un texte produit par du code mène plutôt à sa place dans le code. L’endroit où se trouve le curseur du code est encadré sur la page.',
        '<b>Document</b> on the right sets paper, font, margins and numbering (it edits the <code>#set</code> rules); <b>Insert</b> has ready-made pieces (lists, tables, math, symbols); <b>Pictures</b> holds the pictures and data files of the document; <b>Outline</b> lists the headings.':
            '<b>Document</b> à droite règle le papier, la police, les marges et la numérotation (il modifie les règles <code>#set</code>) ; <b>Insérer</b> propose des éléments prêts à l’emploi (listes, tableaux, formules, symboles) ; <b>Images</b> contient les images et fichiers de données du document ; <b>Plan</b> liste les titres.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser.':
            '<b>Mes documents</b> (le bouton dossier en haut à gauche) liste tous les documents conservés dans ce navigateur.',
        '<b>Export</b> makes a PDF (from the Typst compiler, with real text) and pictures of the pages (PNG, JPG, WebP, SVG). <b>Download .typ</b> saves the code.':
            '<b>Exporter</b> crée un PDF (du compilateur Typst, avec du vrai texte) et des images des pages (PNG, JPG, WebP, SVG). <b>Télécharger le .typ</b> enregistre le code.',
        'Packages from Typst Universe (<code>#import "@preview/…"</code>) are not downloaded - nothing is loaded from other servers. Fonts: Libertinus Serif, New Computer Modern, DejaVu Sans Mono and the fonts you add to a document.':
            'Les paquets de Typst Universe (<code>#import "@preview/…"</code>) ne sont pas téléchargés - rien n’est chargé depuis d’autres serveurs. Polices : Libertinus Serif, New Computer Modern, DejaVu Sans Mono et les polices que vous ajoutez à un document.',
        'Math: <code>$…$</code> around the selection': 'Formule : <code>$…$</code> autour de la sélection',
        'Comment lines in or out (<code>//</code>)': 'Commenter / décommenter des lignes (<code>//</code>)',
        'Enter in a list continues it (<code>-</code>, <code>+</code>, <code>1.</code>); Enter on an empty item ends it. Brackets, <code>$</code>, <code>*</code> and <code>_</code> go around a selection.':
            'Entrée dans une liste la continue (<code>-</code>, <code>+</code>, <code>1.</code>) ; Entrée sur un élément vide la termine. Les parenthèses, <code>$</code>, <code>*</code> et <code>_</code> se placent autour d’une sélection.',
    },

    patterns: [
        /* ---------- Status lines ---------- */
        ['^(\\d+) lines · ([\\d.]+ K?B)(?: · (\\d+) (?:page|pages))?$', (m, l, kb, p) => `${l} ${getPlural(l, 'ligne', 'lignes')} · ${formatSize(kb)}${p ? ` · ${p} ${getPlural(p, 'page', 'pages')}` : ''}`],
        ['^(\\d+) (?:page|pages)$', (m, k) => `${k} ${getPlural(k, 'page', 'pages')}`],
        ['^(\\d+) × (\\d+) pixels per page · (\\d+) (?:page|pages)$', (m, w, h, k) => `${w} × ${h} pixels par page · ${k} ${getPlural(k, 'page', 'pages')}`],
        ['^(\\d+) (?:page|pages) as SVG \\(sharp at any size\\)$', (m, k) => `${k} ${getPlural(k, 'page', 'pages')} en SVG (net à toute taille)`],
        ['^\\.typ and (\\d+) (?:file|files)$', (m, k) => `.typ et ${k} ${getPlural(k, 'fichier', 'fichiers')}`],
        ['^([\\d,]+) bytes$', (m, b) => `${formatThousands(b)} octets`],
        ['^words · (\\d+) × (\\d+) mm(?: · compiled in (\\d+) ms)?$', (m, w, h, ms) => `mots · ${w} × ${h} mm${ms ? ` · compilé en ${ms} ms` : ''}`],
        ['^\\d{1,3}(?:,\\d{3})+$', m => formatThousands(m)],

        /* Problems above the code */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'erreur', 'erreurs')}`],
        ['^· (\\d+) (?:warning|warnings)$', (m, k) => `· ${k} ${getPlural(k, 'avertissement', 'avertissements')}`],
        ['^(\\d+) (?:warning|warnings)$', (m, k) => `${k} ${getPlural(k, 'avertissement', 'avertissements')}`],
        ['^Line (\\d+), column (\\d+)$', 'Ligne $1, colonne $2'],

        /* ---------- Pictures tab ---------- */
        ['^(\\d+) (?:file|files) · (.+)$', (m, k, s) => `${k} ${getPlural(k, 'fichier', 'fichiers')} · ${formatSize(s)}`],
        ['^Choose the file for (.+)$', 'Choisir le fichier pour $1'],
        ['^used (\\d+)×$', 'utilisé $1×'],
        ['^(.* · )?not used yet$', (m, a) => `${a || ''}pas encore utilisé`],
        ['^(.* · )?a font of the document$', (m, a) => `${a || ''}une police du document`],

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
        ['^"(.+)" now has the new file$', '« $1 » a maintenant le nouveau fichier'],
        ['^"(.+)" added to "(.+)"$', '« $1 » ajouté à « $2 »'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '« $1 » est maintenant vide - « Annuler » le rétablit'],
        ['^"(.+)" opened$', '« $1 » ouvert'],
        ['^New document "(.+)" - your other documents are under "My documents"$', 'Nouveau document « $1 » - vos autres documents se trouvent sous « Mes documents »'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$', 'Nouveau document « $1 » de l’IA - vos autres documents sont inchangés'],
        ['^Opened "(.+)" - it is now in "My documents"$', '« $1 » ouvert - il se trouve maintenant dans « Mes documents »'],
        ['^Opened "(.+)" with (\\d+) (?:file|files)$', (m, f, k) => `« ${f} » ouvert avec ${k} ${getPlural(k, 'fichier', 'fichiers')}`],
        ['^"(.+)" could not be opened: (.*)$', (m, f, why) => `« ${f} » n’a pas pu être ouvert : ${ZIP[why] || why}`],
        ['^ZIP downloaded: \\.typ, files, PDF and (\\d+) (?:page|pages) as PNG and SVG$', (m, k) => `ZIP téléchargé : .typ, fichiers, PDF et ${k} ${getPlural(k, 'page', 'pages')} en PNG et SVG`],
        ['^Document received - the compiler found (\\d+) (?:problem|problems), see above the code$', (m, k) => `Document reçu - le compilateur a trouvé ${k} ${getPlural(k, 'problème', 'problèmes')}, voir au-dessus du code`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '« $1 » modifié par l’IA - « Annuler » l’annule'],
        ['^"(.+)" duplicated$', '« $1 » dupliqué'],
        ['^Delete "(.+)"\\?$', 'Supprimer « $1 » ?'],
        ['^"(.+)" deleted$', '« $1 » supprimé'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Ouvrir $1'],
        /* ---------- Template placeholders (?template=) ---------- */
        ['^Write the placeholder in code as a string: "(.+)"$', 'Écrivez le marqueur dans le code comme une chaîne : "$1"'],
    ],
};
