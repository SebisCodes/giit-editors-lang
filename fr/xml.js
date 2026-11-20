/* French texts of the XML editor: the bar, the work area (code, tree,
   node, insert, convert), its dialogs and messages, and the problems found
   in the code. What all editors share is in common.js; how the
   dictionaries are used is described in i18n.js. Names of documents,
   elements and attributes stay as they are: the patterns copy them into the
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

export default {
    text: {
        /* ---------- Top bar ---------- */
        'XML Editor - home': 'Éditeur XML - accueil',
        'XML Editor': 'Éditeur XML',
        'File': 'Fichier',
        'My documents (Ctrl+O)': 'Mes documents (Ctrl+O)',
        'My documents': 'Mes documents',
        'New document, or start this one over': 'Nouveau document, ou recommencer celui-ci',
        'New': 'Nouveau',
        'New blank document': 'Nouveau document vide',
        'An XML declaration and an empty root element': 'Une déclaration XML et un élément racine vide',
        'Product catalog': 'Catalogue de produits',
        'Products with attributes, prices and stock': 'Des produits avec attributs, prix et stock',
        'RSS feed': 'Flux RSS',
        'A channel with one item, RSS 2.0': 'Un canal avec un élément, RSS 2.0',
        'Sitemap': 'Sitemap (plan du site)',
        'sitemap.xml for search engines, with a default namespace': 'sitemap.xml pour les moteurs de recherche, avec un espace de noms par défaut',
        'Configuration': 'Configuration',
        'Settings and a database connection': 'Des paramètres et une connexion à une base de données',
        'The welcome example': 'L’exemple de bienvenue',
        'Shows what the editor can do': 'Montre ce que l’éditeur sait faire',
        'Start this document over': 'Recommencer ce document',
        'Keeps the declaration and the root element, empties the rest - "Undo" brings it back': 'Conserve la déclaration et l’élément racine, vide le reste - « Annuler » le rétablit',
        'Open an XML file from your computer (you can also drag it into the window)': 'Ouvrir un fichier XML depuis votre ordinateur (vous pouvez aussi le glisser dans la fenêtre)',
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
        'Save the document as an .xml file (Ctrl+S)': 'Enregistrer le document en fichier .xml (Ctrl+S)',
        'Download .xml': 'Télécharger le .xml',
        'XML, minified XML, JSON, YAML and plain text (Ctrl+E)': 'XML, XML minifié, JSON, YAML et texte brut (Ctrl+E)',
        'Export…': 'Exporter…',

        /* ---------- Views and work area ---------- */
        'View': 'Affichage',
        'Edit': 'Modifier',
        'Side panel': 'Panneau latéral',
        'Tree': 'Arbre',
        'Node': 'Nœud',
        'XML code': 'Code XML',
        'Copy the XML code to the clipboard': 'Copier le code XML dans le presse-papiers',
        'Copy code': 'Copier le code',
        'Copy': 'Copier',
        'Indent every element on its own line (mixed content stays as it is)': 'Indenter chaque élément sur sa propre ligne (le contenu mixte reste tel quel)',
        'Format': 'Formater',
        'File format': 'Format de fichier',
        'Drag to change the width of the code area': 'Faire glisser pour modifier la largeur de la zone de code',
        'Drag to change the width': 'Faire glisser pour modifier la largeur',
        'Element tree': 'Arbre des éléments',
        'Element tree: click a node to go to its place in the code, click a value to edit it': 'Arbre des éléments : cliquez sur un nœud pour aller à sa place dans le code, sur une valeur pour la modifier',
        'Search names, values and text': 'Noms, valeurs et texte…',
        'Search in the tree': 'Rechercher dans l’arbre',
        'XPath query, e.g. //book[price > 30]': 'Requête XPath, p. ex. //book[price > 30]',
        'XPath query': 'Requête XPath',
        'Previous match (Shift+Enter)': 'Résultat précédent (Shift+Entrée)',
        'Previous match': 'Résultat précédent',
        'Next match (Enter)': 'Résultat suivant (Entrée)',
        'Next match': 'Résultat suivant',
        'Fold everything below the root': 'Replier tout sous la racine',
        'Fold all': 'Tout replier',
        'Unfold every element': 'Déplier chaque élément',
        'Unfold all': 'Tout déplier',
        'Path of the selected node': 'Chemin du nœud sélectionné',
        'Click a node to see its path': 'Cliquez sur un nœud pour voir son chemin',
        'Put this path into the XPath field': 'Mettre ce chemin dans le champ XPath',
        'As query': 'Comme requête',
        'Copy the XPath of the selected node': 'Copier le XPath du nœud sélectionné',
        'Copy path': 'Copier le chemin',
        'Path copied': 'Chemin copié',
        'Updating…': 'Mise à jour…',
        'Fold': 'Replier',
        'Unfold': 'Déplier',
        'empty': 'vide',
        'Add a child element': 'Ajouter un élément enfant',
        'Add an attribute': 'Ajouter un attribut',
        'Move up': 'Monter',
        'Move down': 'Descendre',
        'Remove the element': 'Supprimer l’élément',
        'Remove': 'Retirer',
        'The document is empty - type some XML on the left, or choose a template under "New".': 'Le document est vide - tapez du XML à gauche, ou choisissez un modèle sous « Nouveau ».',
        'Fix the errors first': 'Corrigez d’abord les erreurs',
        'No match': 'Aucune correspondance',
        'Not a valid XPath expression': 'Expression XPath non valide',
        'Nothing found': 'Rien trouvé',
        'Open it here': 'L’ouvrir ici',
        'Drop the XML file here': 'Déposez ici le fichier XML',

        /* Problems above the code */
        'Hide': 'Masquer',
        'Show': 'Afficher',

        /* ---------- Side panel ---------- */
        'The selected node: path, namespace, attributes and actions': 'Le nœud sélectionné : chemin, espace de noms, attributs et actions',
        'Ready-made pieces: elements, comments, CDATA, characters': 'Éléments prêts à l’emploi : éléments, commentaires, CDATA, caractères',
        'Insert': 'Insérer',
        'Format, minify, JSON and YAML': 'Formater, minifier, JSON et YAML',
        'Convert': 'Convertir',
        'Click a node in the tree (or put the cursor in the code) to see it here.': 'Cliquez sur un nœud dans l’arbre (ou placez le curseur dans le code) pour le voir ici.',
        'depth': 'profondeur',
        'element': 'élément',
        'elements': 'éléments',
        'attribute': 'attribut',
        'attributes': 'attributs',
        'Start and end tag': 'Balise d’ouverture et de fermeture',
        'Root element': 'Élément racine',
        'Default namespace': 'Espace de noms par défaut',
        'Namespaces': 'Espaces de noms',
        'Attribute': 'Attribut',
        'Element': 'Élément',
        'Text': 'Texte',
        'Comment': 'Commentaire',
        'CDATA section': 'Section CDATA',
        'Processing instruction': 'Instruction de traitement',
        'Path': 'Chemin',
        'Line': 'Ligne',
        'Namespace': 'Espace de noms',
        'none': 'aucun',
        'Content': 'Contenu',
        'Attributes': 'Attributs',
        'Remove the attribute': 'Supprimer l’attribut',
        'No attributes.': 'Aucun attribut.',
        'Add attribute': 'Ajouter l’attribut',
        'Add child element': 'Ajouter un élément enfant',
        'Length': 'Longueur',
        'Structure': 'Structure',
        'An element at the cursor, around the selected text': 'Un élément au curseur, autour du texte sélectionné',
        'Empty element': 'Élément vide',
        'A self-closing element': 'Un élément à fermeture automatique',
        'An attribute (put the cursor inside a start tag)': 'Un attribut (placez le curseur dans une balise d’ouverture)',
        'Text that is not parsed as markup': 'Du texte qui n’est pas analysé comme balisage',
        'XML declaration': 'Déclaration XML',
        'The first line: version and encoding': 'La première ligne : version et encodage',
        'A namespace declaration (inside a start tag)': 'Une déclaration d’espace de noms (dans une balise d’ouverture)',
        'Schema instance': 'Instance de schéma',
        'xmlns:xsi for xsi:schemaLocation (inside a start tag)': 'xmlns:xsi pour xsi:schemaLocation (dans une balise d’ouverture)',
        'Characters': 'Caractères',
        'As entity references, so they stay readable in any encoding.': 'En références d’entités, pour qu’ils restent lisibles dans tout encodage.',
        'Code': 'Code',
        'Indent with': 'Indenter avec',
        '2 spaces': '2 espaces',
        '4 spaces': '4 espaces',
        'Tabs': 'Tabulations',
        'Indent every element on its own line (one undo step)': 'Indenter chaque élément sur sa propre ligne (une seule étape d’annulation)',
        'Remove comments and the white space between elements (one undo step)': 'Supprimer les commentaires et les espaces entre les éléments (une seule étape d’annulation)',
        'Minify': 'Minifier',
        'Other formats': 'Autres formats',
        'As JSON': 'En JSON',
        'As YAML': 'En YAML',
        'The document is not well-formed - fix the errors above the code first.': 'Le document n’est pas bien formé - corrigez d’abord les erreurs au-dessus du code.',
        'Attributes become': 'Les attributs deviennent',
        ', text next to elements': ', le texte à côté d’éléments',
        ', repeated elements a list. Comments are left out.': ', les éléments répétés une liste. Les commentaires sont omis.',
        'Result': 'Résultat',
        'Download': 'Télécharger',

        /* ---------- Export ---------- */
        'Close': 'Fermer',
        'File name': 'Nom du fichier',
        'XML as it is (.xml)': 'XML tel quel (.xml)',
        'Minified XML (.xml)': 'XML minifié (.xml)',
        'Converted to JSON (.json)': 'Converti en JSON (.json)',
        'Converted to YAML (.yaml)': 'Converti en YAML (.yaml)',
        'Plain text (.txt)': 'Texte brut (.txt)',
        'Download everything at once: XML, minified XML, JSON, YAML and text': 'Tout télécharger d’un coup : XML, XML minifié, JSON, YAML et texte',
        'All formats (ZIP)': 'Tous les formats (ZIP)',
        'The document is not well-formed - fix the errors first': 'Le document n’est pas bien formé - corrigez d’abord les erreurs',

        /* ---------- My documents ---------- */
        'Search by name': 'Rechercher par nom',
        'Search your documents': 'Rechercher dans vos documents',
        'Open an XML file from your computer as a new document': 'Ouvrir un fichier XML de votre ordinateur comme nouveau document',
        'New document': 'Nouveau document',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Cliquez sur un document pour l’ouvrir. Ils sont conservés uniquement dans ce navigateur - rien n’est envoyé. Effacer les données de site du navigateur les supprime : téléchargez ceux que vous voulez garder.',
        'Download every document as an .xml file in one ZIP': 'Télécharger tous les documents en fichiers .xml dans un seul ZIP',
        'Download all (ZIP)': 'Tout télécharger (ZIP)',
        'Rename': 'Renommer',
        'Duplicate': 'Dupliquer',
        'Download as .xml': 'Télécharger en .xml',
        'Delete': 'Supprimer',
        'New name': 'Nouveau nom',
        'This document is open': 'Ce document est ouvert',
        'Click to open this document': 'Cliquez pour ouvrir ce document',
        'No documents yet.': 'Pas encore de documents.',
        'The document is removed from this browser for good. Download it first if you want to keep a copy.':
            'Le document est définitivement supprimé de ce navigateur. Téléchargez-le d’abord si vous voulez en garder une copie.',

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
        'The document is now in the XML Editor tab you already had open. Switch to that tab, or open it here.':
            'Le document se trouve maintenant dans l’onglet de l’éditeur XML que vous aviez déjà ouvert. Passez à cet onglet ou ouvrez-le ici.',
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
        'A POST request with JSON (your server must allow CORS from https://xml.giit.ch):': 'Une requête POST avec du JSON (votre serveur doit autoriser CORS depuis https://xml.giit.ch) :',
        'Embed the editor in your website': 'Intégrer l’éditeur dans votre site web',
        'Send now': 'Envoyer maintenant',
        'Save setting': 'Enregistrer le réglage',

        /* ---------- Help ---------- */
        'How it works': 'Fonctionnement',
        'Keyboard shortcuts': 'Raccourcis clavier',
        'after a start tag': 'après une balise d’ouverture',
        'Adds the matching end tag': 'Ajoute la balise de fermeture correspondante',
        'Show the cursor\'s node in the tree': 'Montrer le nœud du curseur dans l’arbre',
        'Indent / outdent': 'Augmenter / diminuer le retrait',
        'Undo / redo': 'Annuler / rétablir',
        'Save (download .xml, or to your server) / export': 'Enregistrer (télécharger le .xml, ou sur votre serveur) / exporter',
        'Search in the tree (outside the code)': 'Rechercher dans l’arbre (hors du code)',
        'The editor never loads a DTD, a schema or an external entity, and it does not expand entities declared in a DTD: their references stay as written.':
            'L’éditeur ne charge jamais de DTD, de schéma ni d’entité externe, et il ne développe pas les entités déclarées dans une DTD : leurs références restent telles qu’écrites.',

        'Problems (the first well-formedness error, undeclared namespace prefixes, ids used twice) are listed above the code with line and column - click one to go there.':
            'Les problèmes (la première erreur de bonne formation, des préfixes d’espace de noms non déclarés, des id utilisés deux fois) sont listés au-dessus du code avec ligne et colonne - cliquez sur l’un d’eux pour y aller.',
        'https://example.com/api/xml': 'https://example.com/api/xml',

        /* ---------- Messages ---------- */
        'The browser storage is full - download and delete documents under "My documents"': 'Le stockage du navigateur est plein - téléchargez et supprimez des documents sous « Mes documents »',
        'The browser storage is full - delete or download documents under "My documents" first': 'Le stockage du navigateur est plein - supprimez ou téléchargez d’abord des documents sous « Mes documents »',
        'The browser storage is full - delete or download some documents first': 'Le stockage du navigateur est plein - supprimez ou téléchargez d’abord quelques documents',
        'The browser storage is full': 'Le stockage du navigateur est plein',
        'Nothing to undo': 'Rien à annuler',
        'Nothing to redo': 'Rien à rétablir',
        'This changed in the code - wait for the tree, then try again': 'Ceci a changé dans le code - attendez l’arbre, puis réessayez',
        'Editing in the tree - Enter keeps it, Escape cancels': 'Modification dans l’arbre - Entrée la valide, Échap l’annule',
        'The code changed meanwhile - the edit was not used': 'Le code a changé entre-temps - la modification n’a pas été appliquée',
        'The root element cannot be removed here - edit the code instead': 'L’élément racine ne peut pas être supprimé ici - modifiez plutôt le code',
        'Removed - "Undo" brings it back': 'Supprimé - « Annuler » le rétablit',
        'It is the first element already': 'C’est déjà le premier élément',
        'It is the last element already': 'C’est déjà le dernier élément',
        'The document has an XML declaration already': 'Le document a déjà une déclaration XML',
        'The code is formatted already': 'Le code est déjà formaté',
        'Code formatted - "Undo" brings the old layout back': 'Code formaté - « Annuler » rétablit l’ancienne mise en forme',
        'The code is minified already': 'Le code est déjà minifié',
        'Code minified - "Undo" brings it back': 'Code minifié - « Annuler » le rétablit',
        'This document is empty already': 'Ce document est déjà vide',
        'Everything inside the root element is removed; the declaration and the root element stay. "Undo" brings it back as long as the page is open.':
            'Tout le contenu de l’élément racine est supprimé ; la déclaration et l’élément racine restent. « Annuler » le rétablit tant que la page est ouverte.',
        'Everything is removed. "Undo" brings it back as long as the page is open.': 'Tout est supprimé. « Annuler » le rétablit tant que la page est ouverte.',
        'Start over': 'Recommencer',
        'The file is larger than 8 MB': 'Le fichier dépasse 8 Mo',
        'XML pasted from the clipboard - "Undo" brings the old text back': 'XML collé depuis le presse-papiers - « Annuler » rétablit l’ancien texte',
        'Downloaded': 'Téléchargé',
        'Copied to the clipboard': 'Copié dans le presse-papiers',
        'This browser does not allow copying this': 'Ce navigateur ne permet pas de copier ceci',
        'Code copied': 'Code copié',
        '.xml downloaded': '.xml téléchargé',
        'Add': 'Ajouter',
        'Replace': 'Remplacer',

        /* ---------- Problems (xml.js) ---------- */
        'The document is empty - an XML document needs one root element': 'Le document est vide - un document XML a besoin d’un élément racine',
        'The DTD is not loaded: the editor never reads external DTDs or entities, entity references stay as written':
            'La DTD n’est pas chargée : l’éditeur ne lit jamais de DTD ni d’entités externes, les références d’entités restent telles qu’écrites',
        'Entities of the DTD are not expanded: references to them stay as written': 'Les entités de la DTD ne sont pas développées : leurs références restent telles qu’écrites',

        /* texts that stay the same in German (so they are not in the German pack), but not in French */
        'online': 'en ligne',
        'Token': 'Jeton',
    },

    html: {

        '<b>Export</b> also has <b>Open in another editor</b>: it converts the document and opens it as a new document there. Anything the other format cannot hold is listed first.':

            '<b>Exporter</b> propose aussi <b>Ouvrir dans un autre éditeur</b> : le document est converti et ouvert là-bas comme nouveau document. Ce que l’autre format ne peut pas contenir est listé d’abord.',
        /* Convert */
        'Attributes become <code>@name</code>, text next to elements <code>#text</code>, repeated elements a list. Comments are left out.':
            'Les attributs deviennent <code>@name</code>, le texte à côté d’éléments <code>#text</code>, les éléments répétés une liste. Les commentaires sont omis.',

        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Cliquez sur <b>Copier le prompt</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'L’IA répond par un lien : cliquez dessus, ou collez toute la réponse ci-dessous. <b>Annuler</b> l’annule.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'L’IA répond par un lien : <b>collez toute sa réponse ci-dessous</b> (un lien cliqué ouvre un éditeur séparé). <b>Annuler</b> l’annule.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'L’éditeur peut envoyer chaque version enregistrée à votre propre serveur (un <b>webhook</b>), pour que votre travail soit conservé là où vous le souhaitez. Rien n’est envoyé tant que vous n’avez pas saisi d’adresse ici.',
        'Also possible: <code>?src=&lt;URL of an XML file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>xmleditor:ai</code>, <code>xmleditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Également possible : <code>?src=&lt;URL of an XML file&gt;</code> ouvre un fichier, <code>&amp;webhook=&lt;URL&gt;</code> y enregistre ce document. L’éditeur peut aussi s’ouvrir dans sa propre fenêtre (<code>?embed=window</code>), et votre page peut lui transmettre son propre prompt d’IA et une clé de session pour que l’IA envoie son résultat à votre serveur (<code>xmleditor:ai</code>, <code>xmleditor:key-request</code>) - voir « Utiliser l’éditeur sur votre propre site web » sous l’éditeur. Les détails se trouvent dans <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> XML on the left - or start with <b>New</b> and one of the templates. The tree in the middle shows the elements, attributes, text, comments and CDATA as you type.':
            '<b>Écrivez</b> du XML à gauche - ou commencez par <b>Nouveau</b> et l’un des modèles. L’arbre au milieu montre les éléments, attributs, textes, commentaires et CDATA au fil de la saisie.',
        '<b>Click a node in the tree</b> to go to its place in the code; the cursor in the code shows its node in the tree. Fold elements with the arrow.':
            '<b>Cliquez sur un nœud dans l’arbre</b> pour aller à sa place dans le code ; le curseur dans le code montre son nœud dans l’arbre. Repliez les éléments avec la flèche.',
        '<b>Click a name, an attribute value or a text in the tree</b> to edit it right there. <b>Enter</b> or a click elsewhere writes the change into the code (special characters escaped, one step for Undo), <b>Escape</b> cancels. The buttons of a row add a child element or an attribute, move the element up or down, or remove it.':
            '<b>Cliquez sur un nom, une valeur d’attribut ou un texte dans l’arbre</b> pour le modifier sur place. <b>Entrée</b> ou un clic ailleurs écrit la modification dans le code (caractères spéciaux échappés, une seule étape pour Annuler), <b>Échap</b> l’annule. Les boutons d’une ligne ajoutent un élément enfant ou un attribut, montent ou descendent l’élément, ou le suppriment.',
        '<b>Search</b> marks nodes whose name, value or text contains the words; the <b>XPath</b> field marks the nodes an XPath 1.0 expression selects (<code>_:</code> is the default namespace of the root).':
            '<b>Rechercher</b> marque les nœuds dont le nom, la valeur ou le texte contient les mots ; le champ <b>XPath</b> marque les nœuds sélectionnés par une expression XPath 1.0 (<code>_:</code> est l’espace de noms par défaut de la racine).',
        '<b>Node</b> on the right shows the selected node; <b>Insert</b> has ready-made pieces; <b>Convert</b> formats, minifies and turns the document into JSON or YAML.':
            '<b>Nœud</b> à droite montre le nœud sélectionné ; <b>Insérer</b> propose des éléments prêts à l’emploi ; <b>Convertir</b> formate, minifie et transforme le document en JSON ou YAML.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser. <b>Export</b> saves XML, minified XML, JSON, YAML or plain text.':
            '<b>Mes documents</b> (le bouton dossier en haut à gauche) liste tous les documents conservés dans ce navigateur. <b>Exporter</b> enregistre en XML, XML minifié, JSON, YAML ou texte brut.',
        'Comment lines in or out (<code>&lt;!-- --&gt;</code>)': 'Commenter / décommenter des lignes (<code>&lt;!-- --&gt;</code>)',
    },

    patterns: [
        /* ---------- Status lines ---------- */
        ['^The elements are nested more than (\\d+) levels deep - the editor reads at most (\\d+)$', 'Les éléments sont imbriqués sur plus de $1 niveaux - l’éditeur en lit au plus $2'],
        ['^(\\d+) lines · ([\\d.]+ K?B)(?: · (\\d+) (?:element|elements))?$', (m, l, kb, e) => `${l} ${getPlural(l, 'ligne', 'lignes')} · ${formatSize(kb)}${e ? ` · ${e} ${getPlural(e, 'élément', 'éléments')}` : ''}`],
        ['^([\\d,]+) bytes$', (m, b) => `${formatThousands(b)} octets`],
        ['^\\d{1,3}(?:,\\d{3})+$', m => formatThousands(m)],
        ['^(\\d+) (?:child|children)$', (m, k) => `${k} ${getPlural(k, 'enfant', 'enfants')}`],
        ['^(\\d+) (?:match|matches)$', (m, k) => `${k} ${getPlural(k, 'résultat', 'résultats')}`],
        ['^(\\d+) found$', (m, k) => `${k} ${getPlural(k, 'trouvé', 'trouvés')}`],
        ['^(\\d+) (?:element|elements) · (\\d+) (?:attribute|attributes) ·$', (m, e, a) => `${e} ${getPlural(e, 'élément', 'éléments')} · ${a} ${getPlural(a, 'attribut', 'attributs')} ·`],
        ['^(?:element|elements) ·$', 'éléments ·'],
        ['^(?:attribute|attributes) ·$', 'attributs ·'],
        ['^(\\d+) (?:child element|child elements)$', (m, k) => `${k} ${getPlural(k, 'élément enfant', 'éléments enfants')}`],
        ['^(\\d+) (?:character|characters)$', (m, k) => `${k} ${getPlural(k, 'caractère', 'caractères')}`],
        ['^ZIP downloaded with (\\d+) files$', 'ZIP de $1 fichiers téléchargé'],

        /* Problems above the code */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'erreur', 'erreurs')}`],
        ['^· (\\d+) (?:note|notes)$', (m, k) => `· ${k} ${getPlural(k, 'remarque', 'remarques')}`],
        ['^(\\d+) (?:note|notes)$', (m, k) => `${k} ${getPlural(k, 'remarque', 'remarques')}`],
        ['^Line (\\d+):(\\d+)$', 'Ligne $1:$2'],
        ['^Not well-formed: (.*)$', 'Pas bien formé : $1'],
        ['^The namespace prefix "(.+)" is not declared - add (.+)$', 'Le préfixe d’espace de noms « $1 » n’est pas déclaré - ajoutez $2'],
        ['^The id "(.*)" is used twice$', 'L’id « $1 » est utilisé deux fois'],

        /* ---------- Tree ---------- */
        ['^"(.*)" is not a valid XML name - names start with a letter or _ and have no spaces$', '« $1 » n’est pas un nom XML valide - les noms commencent par une lettre ou _ et ne contiennent pas d’espaces'],
        ['^The element already has an attribute "(.+)"$', 'L’élément a déjà un attribut « $1 »'],
        ['^Attribute "(.+)" removed - "Undo" brings it back$', 'Attribut « $1 » supprimé - « Annuler » le rétablit'],
        ['^<(.+)> removed - "Undo" brings it back$', '<$1> supprimé - « Annuler » le rétablit'],

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
        ['^"(.+)" is not an XML file$', '« $1 » n’est pas un fichier XML'],
        ['^Opened "(.+)" - it is now in "My documents"$', '« $1 » ouvert - il se trouve maintenant dans « Mes documents »'],
        ['^Document received - the editor found (\\d+) (?:problem|problems), see above the code$', (m, k) => `Document reçu - l’éditeur a trouvé ${k} ${getPlural(k, 'problème', 'problèmes')}, voir au-dessus du code`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '« $1 » modifié par l’IA - « Annuler » l’annule'],
        ['^"(.+)" duplicated$', '« $1 » dupliqué'],
        ['^Delete "(.+)"\\?$', 'Supprimer « $1 » ?'],
        ['^"(.+)" deleted$', '« $1 » supprimé'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Ouvrir $1'],
    ],
};
