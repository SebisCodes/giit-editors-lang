/* French texts of the JSON editor: the bar, the work area (code, tree,
   value, insert, convert, schema), its dialogs and messages, and the
   problems found in the code. What all editors share is in
   common.js; how the dictionaries are used is described in
   i18n.js. Names of documents, keys and values stay as they are: the
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

/* Words inside messages */
const TYPE = { string: 'chaîne', number: 'nombre', boolean: 'booléen', null: 'null', object: 'objet', array: 'tableau', integer: 'entier' };
/**
 * Translates the text the pattern found (FOUND in the English pattern).
 * @param {string} s - the English text the pattern found.
 * @returns {string} the text in the language.
 */
const translateFound = s => (s === 'the end of the text' ? 'la fin du texte' : s === 'the end of the line' ? 'la fin de la ligne' : s);

export default {
    text: {
        /* ---------- Template placeholders (?template=): views of the tree, box, side panel ---------- */
        'Show or hide the side panel': 'Afficher ou masquer le panneau latéral',
        'Examples': 'Exemples',
        'Template': 'Modèle',
        'The template with its placeholders as written': 'Le modèle avec ses espaces réservés tels qu’ils sont écrits',
        'Placeholders': 'Espaces réservés',
        'The placeholders of the template - a click on one puts its tag at the cursor': 'Les espaces réservés du modèle - cliquez sur l’un d’eux pour insérer sa balise au curseur',
        'Shown': 'Affiché',
        'Hidden': 'Masqué',
        'View of the tree': 'Vue de l\'arbre',
        'The data filled with the examples': 'Les données remplies avec les exemples',
        'The examples could not be filled in - the tree shows the template': 'Les exemples n\'ont pas pu être insérés - l\'arbre affiche le modèle',
        'This part shows an example - change it in the template view or in the code': 'Cette partie affiche un exemple - modifiez-la dans la vue du modèle ou dans le code',
        "Protect the CSV export against spreadsheet formulas; plain signed numbers remain unchanged.": "Protéger l’export CSV contre les formules de tableur ; les nombres signés simples restent inchangés.",
        /* ---------- Top bar ---------- */
        'JSON Editor - home': 'Éditeur JSON - accueil',
        'JSON Editor': 'Éditeur JSON',
        'File': 'Fichier',
        'My documents (Ctrl+O)': 'Mes documents (Ctrl+O)',
        'My documents': 'Mes documents',
        'New document, or start this one over': 'Nouveau document, ou recommencer celui-ci',
        'New': 'Nouveau',
        'New blank document': 'Nouveau document vide',
        'An empty object - your other documents stay as they are': 'Un objet vide - vos autres documents restent tels quels',
        'Settings': 'Paramètres',
        'A configuration with nested objects': 'Une configuration avec des objets imbriqués',
        'Node package': 'Paquet Node',
        'A package.json with scripts and dependencies': 'Un package.json avec scripts et dépendances',
        'Table': 'Tableau',
        'An array of objects - converts to CSV': 'Un tableau d’objets - se convertit en CSV',
        'A schema to check other documents with': 'Un schéma pour vérifier d’autres documents',
        'Map points (GeoJSON)': 'Points sur une carte (GeoJSON)',
        'A feature collection with one point': 'Une collection d’entités avec un point',
        'The welcome example': 'L’exemple de bienvenue',
        'Shows what the editor can do': 'Montre ce que l’éditeur sait faire',
        'Start this document over': 'Recommencer ce document',
        'Empties the data - "Undo" brings it back': 'Vide les données - « Annuler » les rétablit',
        'Open a JSON file from your computer (YAML, CSV and XML files are converted; you can also drag a file into the window)':
            'Ouvrir un fichier JSON depuis votre ordinateur (les fichiers YAML, CSV et XML sont convertis ; vous pouvez aussi glisser un fichier dans la fenêtre)',
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
        'Save the document as a .json file (Ctrl+S)': 'Enregistrer le document en fichier .json (Ctrl+S)',
        'Download .json': 'Télécharger le .json',
        'Minified JSON, YAML, CSV and more (Ctrl+E)': 'JSON minifié, YAML, CSV et plus (Ctrl+E)',
        'Export…': 'Exporter…',

        /* ---------- Views and work area ---------- */
        'View': 'Affichage',
        'Edit': 'Modifier',
        'Tree': 'Arbre',
        'Value': 'Valeur',
        'JSON code': 'Code JSON',
        'Copy the code to the clipboard': 'Copier le code dans le presse-papiers',
        'Copy code': 'Copier le code',
        'Copy': 'Copier',
        'Write the data as plain JSON with neat indentation (Ctrl+Shift+F)': 'Écrire les données en JSON standard avec une indentation propre (Ctrl+Shift+F)',
        'Format': 'Formater',
        'Write the data on one line, without spaces': 'Écrire les données sur une seule ligne, sans espaces',
        'Minify': 'Minifier',
        'Drag to change the width of the code area': 'Faire glisser pour modifier la largeur de la zone de code',
        'Drag to change the width': 'Faire glisser pour modifier la largeur',
        'Unfold everything': 'Tout déplier',
        'Fold everything': 'Tout replier',
        'Add an entry: into the selected object or array, otherwise after the selected entry': 'Ajouter une entrée : dans l’objet ou le tableau sélectionné, sinon après l’entrée sélectionnée',
        'Add an entry': 'Ajouter une entrée',
        'Duplicate the selected entry': 'Dupliquer l’entrée sélectionnée',
        'Duplicate': 'Dupliquer',
        'Move the selected entry up (Alt+Up)': 'Monter l’entrée sélectionnée (Alt+Haut)',
        'Move up': 'Monter',
        'Move the selected entry down (Alt+Down)': 'Descendre l’entrée sélectionnée (Alt+Bas)',
        'Move down': 'Descendre',
        'Remove the selected entry (Delete)': 'Supprimer l’entrée sélectionnée (Suppr)',
        'Remove': 'Retirer',
        'The type of the selected value - choosing another one changes it': 'Le type de la valeur sélectionnée - en choisir un autre la modifie',
        'Type': 'Type',
        'string': 'chaîne',
        'number': 'nombre',
        'boolean': 'booléen',
        'null': 'vide (null)',
        'object': 'objet',
        'array': 'tableau',
        'alias': 'alias',
        'Search keys and values': 'Rechercher clés et valeurs',
        'Previous match (Shift+Enter)': 'Résultat précédent (Shift+Entrée)',
        'Previous match': 'Résultat précédent',
        'Next match (Enter)': 'Résultat suivant (Entrée)',
        'Next match': 'Résultat suivant',
        'The data as a tree: click a key or a value to change it': 'Les données sous forme d’arbre : cliquez sur une clé ou une valeur pour la modifier',
        'Copy the path of the selected value': 'Copier le chemin de la valeur sélectionnée',
        'Copy path': 'Copier le chemin',
        'Side panel': 'Panneau latéral',
        'The selected key and value': 'La clé et la valeur sélectionnées',
        'New entries and pieces of code': 'Nouvelles entrées et morceaux de code',
        'Insert': 'Insérer',
        'Format the document, or convert it to another format': 'Formater le document, ou le convertir dans un autre format',
        'Convert': 'Convertir',
        'Check the document against a JSON Schema': 'Vérifier le document avec un JSON Schema',
        'Schema': 'Schéma',
        'Open it here': 'L’ouvrir ici',
        'Drop the file here': 'Déposez le fichier ici',

        /* Inside the tree */
        'Key': 'Clé',
        'Anchor': 'Ancre',
        'Alias': 'Alias',
        'empty': 'vide',
        'No data yet': 'Pas encore de données',
        'Empty document': 'Document vide',

        /* Problems above the code */
        'Hide': 'Masquer',
        'Show': 'Afficher',

        /* ---------- Value tab ---------- */
        'Click a key or a value in the tree.': 'Cliquez sur une clé ou une valeur dans l’arbre.',
        'The document has no data yet.': 'Le document n’a pas encore de données.',
        'Path': 'Chemin',
        'Apply': 'Appliquer',
        'Add after it': 'Ajouter après',
        'Anchor:': 'Ancre :',
        'Alias of the anchor:': 'Alias de l’ancre :',

        /* ---------- Insert tab ---------- */
        'Add to the selected value': 'Ajouter à la valeur sélectionnée',
        'Into the selected object or array, otherwise after the selected entry. One step for Undo.': 'Dans l’objet ou le tableau sélectionné, sinon après l’entrée sélectionnée. Une seule étape pour Annuler.',
        'Text': 'Texte',
        'A new string': 'Une nouvelle chaîne',
        'Number': 'Nombre',
        'A new number': 'Un nouveau nombre',
        'True / false': 'Vrai / faux',
        'A new boolean': 'Un nouveau booléen',
        'Empty (null)': 'Vide (null)',
        'A new null': 'Un nouveau null',
        'Object { }': 'Objet { }',
        'A new empty object': 'Un nouvel objet vide',
        'Array [ ]': 'Tableau [ ]',
        'A new empty array': 'Un nouveau tableau vide',
        'At the cursor in the code': 'Au curseur dans le code',
        'Object': 'Objet',
        'An object with one key': 'Un objet avec une clé',
        'Array': 'Tableau',
        'An empty array': 'Un tableau vide',
        'Key and value': 'Clé et valeur',
        'One entry of an object': 'Une entrée d’un objet',
        'Table (rows)': 'Tableau (lignes)',
        'Text in quotes': 'Texte entre guillemets',
        'A string': 'Une chaîne',
        'Today\'s date': 'Date du jour',
        'The date as YYYY-MM-DD': 'La date au format AAAA-MM-JJ',
        'Date and time': 'Date et heure',
        'The date and time (ISO 8601, UTC)': 'La date et l’heure (ISO 8601, UTC)',
        'An empty value': 'Une valeur vide',
        'true': 'vrai (true)',
        'false': 'faux (false)',
        'The boolean true': 'Le booléen true',
        'The boolean false': 'Le booléen false',

        /* ---------- Convert tab ---------- */
        'This document': 'Ce document',
        'Indentation': 'Indentation',
        '2 spaces': '2 espaces',
        '4 spaces': '4 espaces',
        'Tabs': 'Tabulations',
        'Plain JSON with neat indentation': 'JSON standard avec une indentation propre',
        'All on one line, without spaces': 'Tout sur une ligne, sans espaces',
        'The keys of every object in alphabetical order': 'Les clés de chaque objet par ordre alphabétique',
        'Sort keys': 'Trier les clés',
        'Convert to': 'Convertir en',
        'YAML text': 'Texte YAML',
        'CSV (an array of objects)': 'CSV (un tableau d’objets)',
        'XML text': 'Texte XML',
        'The tree as plain text': 'L’arbre en texte brut',
        'Result': 'Résultat',
        'Download': 'Télécharger',
        'Each object is a row, its keys are the columns. Texts that look like numbers are in quotes.': 'Chaque objet est une ligne, ses clés sont les colonnes. Les textes qui ressemblent à des nombres sont entre guillemets.',
        'The data is inside <root>; the items of an array are <item> elements.': 'Les données sont dans <root> ; les éléments d’un tableau sont des éléments <item>.',
        'Opens the result as a new document in the YAML Editor (in a new tab)': 'Ouvre le résultat comme nouveau document dans l’éditeur YAML (dans un nouvel onglet)',
        'Open in the YAML Editor': 'Ouvrir dans l’éditeur YAML',

        /* ---------- Schema tab ---------- */
        'Check this document against a JSON Schema that is one of your documents (open or paste it as a new document first). The editor never downloads a schema.':
            'Vérifier ce document avec un JSON Schema qui fait partie de vos documents (ouvrez-le ou collez-le d’abord comme nouveau document). L’éditeur ne télécharge jamais de schéma.',
        'No schema': 'Aucun schéma',
        'The chosen schema document is not there any more.': 'Le document de schéma choisi n’existe plus.',
        'Checked again once the syntax error is fixed.': 'Revérifié dès que l’erreur de syntaxe est corrigée.',
        'The data fits the schema.': 'Les données sont conformes au schéma.',
        'place does not fit the schema - see above the code.': 'emplacement n’est pas conforme au schéma - voir au-dessus du code.',
        'places do not fit the schema - see above the code.': 'emplacements ne sont pas conformes au schéma - voir au-dessus du code.',
        'The document names the schema': 'Le document indique le schéma',
        '- it is not loaded from there.': '- il n’est pas chargé depuis cette adresse.',
        'Open the schema': 'Ouvrir le schéma',
        'A new document with a schema that this data fits': 'Un nouveau document avec un schéma auquel ces données sont conformes',
        'Make a schema from this data': 'Créer un schéma à partir de ces données',

        /* ---------- Export ---------- */
        'Close': 'Fermer',
        'File name': 'Nom du fichier',
        'JSON file as it is (.json)': 'Fichier JSON tel quel (.json)',
        'Minified JSON file (.json)': 'Fichier JSON minifié (.json)',
        'YAML file (.yaml)': 'Fichier YAML (.yaml)',
        'CSV table (.csv)': 'Tableau CSV (.csv)',
        'The tree as plain text (.txt)': 'L’arbre en texte brut (.txt)',
        'Download every format at once': 'Télécharger tous les formats d’un coup',
        'All formats (ZIP)': 'Tous les formats (ZIP)',

        /* ---------- My documents ---------- */
        'Search by name': 'Rechercher par nom',
        'Search your documents': 'Rechercher dans vos documents',
        'Open a file from your computer as a new document': 'Ouvrir un fichier de votre ordinateur comme nouveau document',
        'New document': 'Nouveau document',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Cliquez sur un document pour l’ouvrir. Ils sont conservés uniquement dans ce navigateur - rien n’est envoyé. Effacer les données de site du navigateur les supprime : téléchargez ceux que vous voulez garder.',
        'Download every document as a .json file in one ZIP': 'Télécharger tous les documents en fichiers .json dans un seul ZIP',
        'Download all (ZIP)': 'Tout télécharger (ZIP)',
        'Rename': 'Renommer',
        'Download as .json': 'Télécharger en .json',
        'Delete': 'Supprimer',
        'New name': 'Nouveau nom',
        'This document is open': 'Ce document est ouvert',
        'Click to open this document': 'Cliquez pour ouvrir ce document',
        'No documents yet.': 'Pas encore de documents.',

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
        'The document travels in the link after the “#”, which no server sees. What you paste into your AI is handled by its provider.':
            'Le document voyage dans le lien après le « # », qu’aucun serveur ne voit. Ce que vous collez dans votre IA est traité par son fournisseur.',
        'The prompt - copy it with Ctrl+C': 'Le prompt - copiez-le avec Ctrl+C',
        'Copy prompt': 'Copier le prompt',
        'Paste it into your AI and say what it should change.': 'Collez-le dans votre IA et dites-lui ce qu’elle doit modifier.',
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
        'The document is now in the JSON Editor tab you already had open. Switch to that tab, or open it here.':
            'Le document se trouve maintenant dans l’onglet de l’éditeur JSON que vous aviez déjà ouvert. Passez à cet onglet ou ouvrez-le ici.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)': 'La copie n’est pas autorisée ici - le texte est sélectionné ci-dessous : appuyez sur Ctrl+C (⌘C)',
        'Prompt copied - paste it into your AI and say what it should write': 'Prompt copié - collez-le dans votre IA et dites-lui ce qu’elle doit écrire',
        'This link is incomplete or damaged - please ask the AI to send it again': 'Ce lien est incomplet ou endommagé - demandez à l’IA de le renvoyer',

        /* ---------- Save to your server ---------- */
        'Save to your server': 'Enregistrer sur votre serveur',
        'Webhook address': 'Adresse du webhook',
        'https://example.com/api/json': 'https://example.com/api/json',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(facultatif, envoyé comme « Authorization: Bearer … » ; conservé jusqu’à la fermeture de cet onglet)',
        'Send automatically a few seconds after each change (otherwise only when you click': 'Envoyer automatiquement quelques secondes après chaque modification (sinon seulement quand vous cliquez sur',
        'or press Ctrl+S)': 'ou appuyez sur Ctrl+S)',
        'Only for “': 'Seulement pour « ',
        '” (other documents use the general address)': ' » (les autres documents utilisent l’adresse générale)',
        'What your server receives': 'Ce que reçoit votre serveur',
        'A POST request with JSON (your server must allow CORS from https://json.giit.ch); content is the document as a string:':
            'Une requête POST avec du JSON (votre serveur doit autoriser CORS depuis https://json.giit.ch) ; content est le document sous forme de chaîne :',
        'Embed the editor in your website': 'Intégrer l’éditeur dans votre site web',
        'Send now': 'Envoyer maintenant',
        'Save setting': 'Enregistrer le réglage',

        /* ---------- Help ---------- */
        'How it works': 'Fonctionnement',
        'Keyboard shortcuts': 'Raccourcis clavier',
        'In the tree: go up and down, fold and unfold': 'Dans l’arbre : monter et descendre, replier et déplier',
        'Delete': 'Supprimer',
        'In the tree: remove the entry': 'Dans l’arbre : supprimer l’entrée',
        'In the tree: move the entry up / down': 'Dans l’arbre : monter / descendre l’entrée',
        'Search keys and values in the tree': 'Rechercher des clés et des valeurs dans l’arbre',
        'Format the document': 'Formater le document',
        'Indent / outdent in the code': 'Augmenter / diminuer le retrait dans le code',
        'Undo / redo': 'Annuler / rétablir',
        'Save (download, or to your server) / export': 'Enregistrer (télécharger, ou sur votre serveur) / exporter',
        'Alt': 'Alt',
        'Problems (a missing comma, a duplicate key, what does not fit the schema) are listed above the code with line and column - click one to go there.':
            'Les problèmes (une virgule manquante, une clé en double, ce qui n’est pas conforme au schéma) sont listés au-dessus du code avec ligne et colonne - cliquez sur l’un d’eux pour y aller.',
        'In the tree: change the value (F2: the key)': 'Dans l’arbre : modifier la valeur (F2 : la clé)',

        /* ---------- JSON Lines ---------- */
        'JSON Lines': 'JSON Lines',
        'JSON Lines needs an array - each entry becomes one line': 'JSON Lines nécessite un tableau - chaque entrée devient une ligne',
        'An event log: one JSON object per line': 'Un journal d’événements : un objet JSON par ligne',
        'Open a JSON or JSON Lines file from your computer (YAML, CSV and XML files are converted; you can also drag a file into the window)':
            'Ouvrir un fichier JSON ou JSON Lines depuis votre ordinateur (les fichiers YAML, CSV et XML sont convertis ; vous pouvez aussi glisser un fichier dans la fenêtre)',
        'JSON Lines file (.jsonl)': 'Fichier JSON Lines (.jsonl)',
        'JSON array': 'Tableau JSON',
        'Opens the result as a new document in this editor': 'Ouvre le résultat comme nouveau document dans cet éditeur',
        'Download .jsonl': 'Télécharger le .jsonl',
        'Save the document as a .jsonl file (Ctrl+S)': 'Enregistrer le document en fichier .jsonl (Ctrl+S)',
        '.jsonl downloaded': '.jsonl téléchargé',
        'Extra text after the value - a line of JSON Lines holds one value': 'Texte en trop après la valeur - une ligne de JSON Lines contient une seule valeur',
        'This is the only line - "Start this document over" in the New menu empties it': 'C’est la seule ligne - « Recommencer ce document » dans le menu Nouveau la vide',
        'This line is the first already': 'Cette ligne est déjà la première',
        'This line is the last already': 'Cette ligne est déjà la dernière',

        /* ---------- Messages ---------- */
        'The browser storage is full - download and delete documents under "My documents"': 'Le stockage du navigateur est plein - téléchargez et supprimez des documents sous « Mes documents »',
        'The browser storage is full - delete or download documents under "My documents" first': 'Le stockage du navigateur est plein - supprimez ou téléchargez d’abord des documents sous « Mes documents »',
        'The browser storage is full - delete or download some documents first': 'Le stockage du navigateur est plein - supprimez ou téléchargez d’abord quelques documents',
        'The browser storage is full': 'Le stockage du navigateur est plein',
        'Nothing to undo': 'Rien à annuler',
        'Nothing to redo': 'Rien à rétablir',
        'The code has a syntax error - fix it first (see above the code), then edit in the tree': 'Le code contient une erreur de syntaxe - corrigez-la d’abord (voir au-dessus du code), puis modifiez dans l’arbre',
        'The code has a syntax error - fix it first (see above the code)': 'Le code contient une erreur de syntaxe - corrigez-la d’abord (voir au-dessus du code)',
        'The document has a syntax error - fix it first': 'Le document contient une erreur de syntaxe - corrigez-la d’abord',
        'The document has no data yet': 'Le document n’a pas encore de données',
        'The document has no data to add to': 'Le document ne contient pas de données à compléter',
        'Only an object can be added to the root object': 'Seul un objet peut être ajouté à l’objet racine',
        'The root is neither an object nor an array': 'La racine n’est ni un objet ni un tableau',
        'Choose a value in the tree first': 'Choisissez d’abord une valeur dans l’arbre',
        'The root is a single value - change its type to object or array first': 'La racine est une valeur simple - changez d’abord son type en objet ou tableau',
        'The root cannot be removed - "Start this document over" in the New menu empties it': 'La racine ne peut pas être supprimée - « Recommencer ce document » dans le menu Nouveau la vide',
        'The root has no place to move to': 'La racine ne peut être déplacée nulle part',
        'This entry is the first already': 'Cette entrée est déjà la première',
        'This entry is the last already': 'Cette entrée est déjà la dernière',
        'Entries of an array have no key': 'Les entrées d’un tableau n’ont pas de clé',
        'A boolean is true or false - choose another type above the tree to change the type': 'Un booléen vaut true ou false - choisissez un autre type au-dessus de l’arbre pour changer le type',
        'null has no value - choose another type above the tree to change the type': 'null n’a pas de valeur - choisissez un autre type au-dessus de l’arbre pour changer le type',
        'This value is changed in the code': 'Cette valeur se modifie dans le code',
        'Keys sorted': 'Clés triées',
        'Minified': 'Minifié',
        'Formatted': 'Formaté',
        'The keys are sorted already': 'Les clés sont déjà triées',
        'The document is minified already': 'Le document est déjà minifié',
        'The document is formatted already': 'Le document est déjà formaté',
        'Remove the comments?': 'Supprimer les commentaires ?',
        'Write plain JSON': 'Écrire du JSON standard',
        'This document is empty already': 'Ce document est déjà vide',
        'All data is removed. "Undo" brings it back as long as the page is open.': 'Toutes les données sont supprimées. « Annuler » les rétablit tant que la page est ouverte.',
        'Start over': 'Recommencer',
        'The file is larger than 8 MB': 'Le fichier dépasse 8 Mo',
        'Downloaded': 'Téléchargé',
        'Copied to the clipboard': 'Copié dans le presse-papiers',
        'Code copied': 'Code copié',
        '.json downloaded': '.json téléchargé',
        'Add': 'Ajouter',
        'Replace': 'Remplacer',
        'Open as a new document': 'Ouvrir comme nouveau document',
        'The document is removed from this browser for good. Download it first if you want to keep a copy.':
            'Le document est définitivement supprimé de ce navigateur. Téléchargez-le d’abord si vous voulez en garder une copie.',
        'The YAML package is not loaded yet': 'Le module YAML n’est pas encore chargé',
        'CSV needs an array of objects (a list of rows) - this data is not an array': 'Le CSV nécessite un tableau d’objets (une liste de lignes) - ces données ne sont pas un tableau',
        'CSV needs an array of objects - some entries of this array are not objects': 'Le CSV nécessite un tableau d’objets - certaines entrées de ce tableau ne sont pas des objets',
        'A quote in the CSV is never closed': 'Un guillemet du CSV n’est jamais fermé',

        /* ---------- Problems in the code ---------- */
        'Comments are not part of plain JSON (JSON with comments) - "Format" writes plain JSON without them':
            'Les commentaires ne font pas partie du JSON standard (JSON avec commentaires) - « Formater » écrit du JSON standard sans eux',
        'A comma after the last entry is not allowed in plain JSON - "Format" removes it': 'Une virgule après la dernière entrée n’est pas permise en JSON standard - « Formater » la supprime',
        'Single quotes are JSON5, not plain JSON - "Format" writes double quotes': 'Les apostrophes simples sont du JSON5, pas du JSON standard - « Formater » écrit des guillemets doubles',
        'Keys without quotes are JSON5, not plain JSON - "Format" adds the quotes': 'Les clés sans guillemets sont du JSON5, pas du JSON standard - « Formater » ajoute les guillemets',
        'This number is written as in JSON5 (hexadecimal, Infinity, NaN, a + sign or a point at the start or end) - plain JSON does not allow it':
            'Ce nombre est écrit comme en JSON5 (hexadécimal, Infinity, NaN, un signe + ou un point au début ou à la fin) - le JSON standard ne le permet pas',
        'This escape (\\\', \\v, \\0 or \\x) is JSON5, not plain JSON': 'Cet échappement (\\\', \\v, \\0 ou \\x) est du JSON5, pas du JSON standard',
        'A string continued on the next line with \\ is JSON5, not plain JSON': 'Une chaîne poursuivie à la ligne suivante avec \\ est du JSON5, pas du JSON standard',
        'This comment /* is never closed with */': 'Ce commentaire /* n’est jamais fermé par */',
        '\\u needs four hexadecimal digits, e.g. \\u00e9': '\\u nécessite quatre chiffres hexadécimaux, p. ex. \\u00e9',
        'A line break inside a string must be written as \\n': 'Un saut de ligne dans une chaîne doit s’écrire \\n',
        'A tab inside a string must be written as \\t': 'Une tabulation dans une chaîne doit s’écrire \\t',
        'A control character inside a string must be written as \\u0000 … \\u001f': 'Un caractère de contrôle dans une chaîne doit s’écrire \\u0000 … \\u001f',
        'A value is missing': 'Il manque une valeur',
        'A number cannot start with 0 - write it without the leading 0': 'Un nombre ne peut pas commencer par 0 - écrivez-le sans le 0 initial',
        'One comma too many - an entry is missing here': 'Une virgule de trop - il manque une entrée ici',
        'One comma too many - a value is missing here': 'Une virgule de trop - il manque une valeur ici',
        'A comma is missing between the entries': 'Il manque une virgule entre les entrées',
        'The document is empty': 'Le document est vide',
        'Extra text after the end of the data - a JSON document has one value at the top (usually an object or an array)':
            'Texte en trop après la fin des données - un document JSON a une seule valeur au sommet (généralement un objet ou un tableau)',
        'The data is nested too deeply': 'Les données sont imbriquées trop profondément',

        /* texts that stay the same in German (so they are not in the German pack), but not in French */
        'online': 'en ligne',
        'Token': 'Jeton',
        /* ---------- Template placeholders (?template=) ---------- */
        'A template stays as written - Format and conversions work on filled data': 'Un modèle reste tel quel - Formater et les conversions utilisent des données renseignées',
        'This part holds a placeholder - change it in the code': 'Cette partie contient un marqueur - modifiez-la dans le code',
        'placeholder': 'marqueur',
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
        'Also possible: <code>?src=&lt;URL of a .json file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>jsoneditor:ai</code>, <code>jsoneditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Également possible : <code>?src=&lt;URL d’un fichier .json&gt;</code> ouvre un fichier, <code>&amp;webhook=&lt;URL&gt;</code> y enregistre ce document. L’éditeur peut aussi s’ouvrir dans sa propre fenêtre (<code>?embed=window</code>), et votre page peut lui transmettre son propre prompt d’IA et une clé de session pour que l’IA envoie son résultat à votre serveur (<code>jsoneditor:ai</code>, <code>jsoneditor:key-request</code>) - voir « Utiliser l’éditeur sur votre propre site web » sous l’éditeur. Les détails se trouvent dans <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> JSON on the left - or start with <b>New</b> and one of the templates. The tree in the middle shows the data as you type: objects and arrays fold, every value shows its type, <code>{3}</code> and <code>[5]</code> count the entries.':
            '<b>Écrivez</b> du JSON à gauche - ou commencez par <b>Nouveau</b> et l’un des modèles. L’arbre au milieu montre les données au fil de la saisie : les objets et les tableaux se replient, chaque valeur indique son type, <code>{3}</code> et <code>[5]</code> comptent les entrées.',
        '<b>Click a key or a value in the tree</b> to change it right there. <b>Enter</b> or a click elsewhere writes the change into the code at exactly that place (one step for Undo), <b>Escape</b> cancels. The buttons above the tree add, duplicate, move and remove entries and change the type of a value.':
            '<b>Cliquez sur une clé ou une valeur dans l’arbre</b> pour la modifier sur place. <b>Entrée</b> ou un clic ailleurs écrit la modification dans le code exactement à cet endroit (une seule étape pour Annuler), <b>Échap</b> l’annule. Les boutons au-dessus de l’arbre ajoutent, dupliquent, déplacent et suppriment des entrées et changent le type d’une valeur.',
        'A click in the tree puts the code\'s cursor on that value; the cursor in the code marks its value in the tree. The path of the selected value (<code>$.items[3].name</code>) is below the tree.':
            'Un clic dans l’arbre place le curseur du code sur cette valeur ; le curseur dans le code marque sa valeur dans l’arbre. Le chemin de la valeur sélectionnée (<code>$.items[3].name</code>) se trouve sous l’arbre.',
        '<b>Value</b> on the right shows the selected key and value; <b>Insert</b> adds entries and pieces of code; <b>Convert</b> formats the document or converts it to YAML, CSV or XML; <b>Schema</b> checks it against a JSON Schema from your documents.':
            '<b>Valeur</b> à droite montre la clé et la valeur sélectionnées ; <b>Insérer</b> ajoute des entrées et des morceaux de code ; <b>Convertir</b> formate le document ou le convertit en YAML, CSV ou XML ; <b>Schéma</b> le vérifie avec un JSON Schema de vos documents.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser. <b>Export</b> saves it as JSON, minified JSON, YAML, CSV or text.':
            '<b>Mes documents</b> (le bouton dossier en haut à gauche) liste tous les documents conservés dans ce navigateur. <b>Exporter</b> l’enregistre en JSON, JSON minifié, YAML, CSV ou texte.',
        'Quotes and brackets close by themselves around a selection; Enter after <code>{</code> or <code>[</code> indents the next line.':
            'Les guillemets et les parenthèses se ferment d’eux-mêmes autour d’une sélection ; Entrée après <code>{</code> ou <code>[</code> indente la ligne suivante.',
    },

    patterns: [
        /* ---------- Status lines ---------- */
        ['^(\\d+) (?:line|lines) · ([\\d.]+ K?B)( · JSON Lines)?( · JSON5| · JSON with comments)?$', (m, l, kb, jl, d) => `${l} ${getPlural(l, 'ligne', 'lignes')} · ${formatSize(kb)}${jl ? ' · JSON Lines' : ''}${d === ' · JSON with comments' ? ' · JSON avec commentaires' : d || ''}`],
        ['^([\\d,]+) bytes$', (m, b) => `${formatThousands(b)} octets`],
        ['^\\d{1,3}(?:,\\d{3})+$', m => formatThousands(m)],
        ['^Show (\\d+) more of (\\d+)$', 'Afficher $1 de plus sur $2'],
        ['^Document (\\d+)$', 'Document $1'],

        ['^Line (\\d+)$', 'Ligne $1'],
        ['^Line (\\d+) is not valid JSON$', 'La ligne $1 n’est pas du JSON valide'],
        ['^Line (\\d+) has a syntax error - fix it first \\(see above the code\\)$', 'La ligne $1 contient une erreur de syntaxe - corrigez-la d’abord (voir au-dessus du code)'],
        ['^Not every line has the same keys - line (\\d+) differs from line (\\d+)$', 'Les lignes n’ont pas toutes les mêmes clés - la ligne $1 diffère de la ligne $2'],
        ['^New document "(.+)"$', 'Nouveau document « $1 »'],
        /* Problems above the code */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'erreur', 'erreurs')}`],
        ['^· (\\d+) (?:schema problem|schema problems)$', (m, k) => `· ${k} ${getPlural(k, 'problème de schéma', 'problèmes de schéma')}`],
        ['^(\\d+) (?:schema problem|schema problems)$', (m, k) => `${k} ${getPlural(k, 'problème de schéma', 'problèmes de schéma')}`],
        ['^(\\d+) (?:schema problem|schema problems) · (\\d+) (?:note|notes)$', (m, k, j) => `${k} ${getPlural(k, 'problème de schéma', 'problèmes de schéma')} · ${j} ${getPlural(j, 'remarque', 'remarques')}`],
        ['^· (\\d+) (?:note|notes)$', (m, k) => `· ${k} ${getPlural(k, 'remarque', 'remarques')}`],
        ['^· (\\d+) (?:schema problem|schema problems) · (\\d+) (?:note|notes)$', (m, k, j) => `· ${k} ${getPlural(k, 'problème de schéma', 'problèmes de schéma')} · ${j} ${getPlural(j, 'remarque', 'remarques')}`],
        ['^(\\d+) (?:note|notes)$', (m, k) => `${k} ${getPlural(k, 'remarque', 'remarques')}`],
        ['^Line (\\d+), column (\\d+)$', 'Ligne $1, colonne $2'],
        ['^The key "(.*)" is twice in this object - most programs keep only the last one$', 'La clé « $1 » figure deux fois dans cet objet - la plupart des programmes ne gardent que la dernière'],
        ['^This string is never closed - a (.) is missing$', 'Cette chaîne n’est jamais fermée - il manque un $1'],
        ['^Unknown escape (\\\\.?) in a string - write \\\\\\\\ for a backslash$', 'Échappement inconnu $1 dans une chaîne - écrivez \\\\ pour une barre oblique inverse'],
        ['^The text ends here - a value and a (.) are missing$', 'Le texte se termine ici - il manque une valeur et un $1'],
        ['^Unexpected "(.*)" - a string needs quotes; other values are numbers, true, false or null$', '« $1 » inattendu - une chaîne doit être entre guillemets ; les autres valeurs sont des nombres, true, false ou null'],
        ['^A value is expected here - found (.*)$', (m, f) => `Une valeur est attendue ici - trouvé : ${translateFound(f)}`],
        ['^This (.) is never closed - a (.) is missing$', 'Ce $1 n’est jamais fermé - il manque un $2'],
        ['^A key in double quotes is expected here - found (.*)$', (m, f) => `Une clé entre guillemets doubles est attendue ici - trouvé : ${translateFound(f)}`],
        ['^A ":" is missing after the key "(.*)"$', 'Il manque un « : » après la clé « $1 »'],
        ['^"," or "(.)" is expected here - found (.*)$', (m, c, f) => `« , » ou « ${c} » est attendu ici - trouvé : ${translateFound(f)}`],
        ['^The schema "(.+)" has a syntax error in line (\\d+) - it is not used$', 'Le schéma « $1 » contient une erreur de syntaxe à la ligne $2 - il n’est pas utilisé'],

        /* Schema problems */
        ['^Schema: the type must be (.+) \\(it is (\\w+)\\)$', (m, w, is) => `Schéma : le type doit être ${w.split(' or ').map(x => TYPE[x] || x).join(' ou ')} (c’est ${TYPE[is] || is})`],
        ['^Schema: "(.*)" is missing \\(required\\)$', 'Schéma : « $1 » manque (required)'],
        ['^Schema: "(.*)" is not allowed here \\(additionalProperties\\)$', 'Schéma : « $1 » n’est pas permis ici (additionalProperties)'],
        ['^Schema: must be one of (.*) \\(enum\\)$', 'Schéma : doit être l’une des valeurs $1 (enum)'],
        ['^Schema: must be (.*) \\(const\\)$', 'Schéma : doit être $1 (const)'],
        ['^Schema: at least (\\d+) characters \\(minLength\\)$', 'Schéma : nombre minimal de caractères : $1 (minLength)'],
        ['^Schema: at most (\\d+) characters \\(maxLength\\)$', 'Schéma : nombre maximal de caractères : $1 (maxLength)'],
        ['^The number (.+) cannot be written exactly - write it as a string \\("…"\\) first$', 'Le nombre $1 ne peut pas être écrit exactement - écrivez-le d’abord comme chaîne ("…")'],
        ['^The data is nested more than (\\d+) levels deep - the editor reads at most (\\d+)$', 'Les données sont imbriquées sur plus de $1 niveaux - l’éditeur en lit au plus $2'],
        ['^Schema: must match the pattern (.*) \\(pattern\\)$', 'Schéma : doit correspondre au motif $1 (pattern)'],
        ['^Schema: the pattern (.*) is not checked on this long text - it repeats a repeated group, which can take very long \\(pattern\\)$', 'Schéma : le motif $1 n’est pas vérifié sur ce long texte - il répète un groupe répété, ce qui peut prendre très longtemps (pattern)'],
        ['^Schema: not a valid (.*) \\(format\\)$', 'Schéma : format $1 non valide (format)'],
        ['^Schema: must be at least (.*) \\(minimum\\)$', 'Schéma : doit valoir au moins $1 (minimum)'],
        ['^Schema: must be at most (.*) \\(maximum\\)$', 'Schéma : doit valoir au plus $1 (maximum)'],
        ['^Schema: must be greater than (.*) \\(exclusiveMinimum\\)$', 'Schéma : doit être supérieur à $1 (exclusiveMinimum)'],
        ['^Schema: must be less than (.*) \\(exclusiveMaximum\\)$', 'Schéma : doit être inférieur à $1 (exclusiveMaximum)'],
        ['^Schema: must be a multiple of (.*) \\(multipleOf\\)$', 'Schéma : doit être un multiple de $1 (multipleOf)'],
        ['^Schema: at least (\\d+) keys \\(minProperties\\)$', 'Schéma : nombre minimal de clés : $1 (minProperties)'],
        ['^Schema: at most (\\d+) keys \\(maxProperties\\)$', 'Schéma : nombre maximal de clés : $1 (maxProperties)'],
        ['^Schema: at least (\\d+) entries \\(minItems\\)$', 'Schéma : nombre minimal de entrées : $1 (minItems)'],
        ['^Schema: at most (\\d+) entries \\(maxItems\\)$', 'Schéma : nombre maximal de entrées : $1 (maxItems)'],
        ['^Schema: the entries must be different \\(uniqueItems\\)$', 'Schéma : les entrées doivent être différentes (uniqueItems)'],
        ['^Schema: entry (\\d+) is not allowed here \\(items\\)$', 'Schéma : l’entrée $1 n’est pas permise ici (items)'],
        ['^Schema: no entry matches "contains" \\(contains\\)$', 'Schéma : aucune entrée ne correspond à « contains » (contains)'],
        ['^Schema: more than (\\d+) entries match "contains" \\(maxContains\\)$', 'Schéma : plus de $1 entrées correspondent à « contains » (maxContains)'],
        ['^Schema: matches none of the allowed forms \\((anyOf|oneOf)\\)$', 'Schéma : ne correspond à aucune des formes permises ($1)'],
        ['^Schema: matches (\\d+) of the forms, but only one is allowed \\(oneOf\\)$', 'Schéma : correspond à $1 des formes, mais une seule est permise (oneOf)'],
        ['^Schema: must not match the "not" schema \\(not\\)$', 'Schéma : ne doit pas correspondre au schéma « not » (not)'],
        ['^Schema: "(.*)" needs "(.*)" as well \\(dependentRequired\\)$', 'Schéma : « $1 » nécessite aussi « $2 » (dependentRequired)'],
        ['^Schema: the key "(.*)" does not fit the schema of the key names \\(propertyNames\\)$', 'Schéma : la clé « $1 » n’est pas conforme au schéma des noms de clés (propertyNames)'],
        ['^Schema: no value is allowed here$', 'Schéma : aucune valeur n’est permise ici'],
        ['^Schema: the schema refers to another file \\((.*)\\) - only references inside the schema are followed$', 'Schéma : le schéma renvoie à un autre fichier ($1) - seules les références internes au schéma sont suivies'],

        /* ---------- Value tab and schema tab ---------- */
        ['^(?:(\\d+) (key|keys|entry|entries) · )?line (\\d+), column (\\d+) · (.+)$', (m, k, w, l, c, sz) => `${k ? `${k} ${w.startsWith('key') ? getPlural(k, 'clé', 'clés') : getPlural(k, 'entrée', 'entrées')} · ` : ''}ligne ${l}, colonne ${c} · ${formatSize(sz)}`],
        ['^The schema has a syntax error in line (\\d+) - open it and fix it first\\.$', 'Le schéma contient une erreur de syntaxe à la ligne $1 - ouvrez-le et corrigez-la d’abord.'],

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
        ['^"(.+)" is not a number - choose another type above the tree to change the type$', '« $1 » n’est pas un nombre - choisissez un autre type au-dessus de l’arbre pour changer le type'],
        ['^There is already a key "(.*)" here$', 'Il y a déjà une clé « $1 » ici'],
        ['^Path copied: (.*)$', 'Chemin copié : $1'],
        ['^Plain JSON has no comments: the (\\d+) (?:comment is|comments are) removed\\. "Undo" brings (?:it|them) back\\.$', (m, k) => `Le JSON standard n’a pas de commentaires : ${getPlural(k, 'le commentaire est supprimé', `les ${k} commentaires sont supprimés`)}. « Annuler » ${getPlural(k, 'le', 'les')} rétablit.`],
        ['^"(.+)" is open\\. My documents: open, rename, duplicate or delete your documents \\(Ctrl\\+O\\)$', '« $1 » est ouvert. Mes documents : ouvrir, renommer, dupliquer ou supprimer vos documents (Ctrl+O)'],
        ['^Start "(.+)" over\\?$', 'Recommencer « $1 » ?'],
        ['^Start "(.+)" over$', 'Recommencer « $1 »'],
        ['^(\\d+) (?:document|documents) · (.+) in this browser$', (m, k, s) => `${k} ${getPlural(k, 'document', 'documents')} · ${formatSize(s)} dans ce navigateur`],
        ['^No document named "(.*)"\\.$', 'Aucun document nommé « $1 ».'],
        ['^Open now · (.+)$', (m, s) => `Ouvert maintenant · ${formatSize(s)}`],
        ['^(just now|yesterday|\\d+ min ago|\\d+ h ago|[A-Z][a-z]{2} \\d{1,2}, \\d{4}) · (.+)$', (m, w, s) => `${formatTime(w)} · ${formatSize(s)}`],
        ['^(.+) \\(open now\\)$', '$1 (ouvert maintenant)'],
        ['^ZIP with (\\d+) (?:document|documents) downloaded$', (m, k) => `ZIP de ${k} ${getPlural(k, 'document', 'documents')} téléchargé`],
        ['^ZIP downloaded with (\\d+) files$', 'ZIP de $1 fichiers téléchargé'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '« $1 » est maintenant vide - « Annuler » le rétablit'],
        ['^"(.+)" opened$', '« $1 » ouvert'],
        ['^New document "(.+)" - your other documents are under "My documents"$', 'Nouveau document « $1 » - vos autres documents se trouvent sous « Mes documents »'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$', 'Nouveau document « $1 » de l’IA - vos autres documents sont inchangés'],
        ['^New document "(.+)" - "(.+)" is checked against it$', 'Nouveau document « $1 » - « $2 » est vérifié avec lui'],
        ['^"(.+)" is not a file the editor can open$', '« $1 » n’est pas un fichier que l’éditeur peut ouvrir'],
        ['^Opened "(.+)" - converted from (JSON Lines|\\w+)$', (m, f, w) => `« ${f} » ouvert - converti depuis ${w}`],
        ['^Opened "(.+)" - it is now in "My documents"$', '« $1 » ouvert - il se trouve maintenant dans « Mes documents »'],
        ['^"(.+)" could not be opened: (.*)$', '« $1 » n’a pas pu être ouvert : $2'],
        ['^(JSON|YAML) pasted from the clipboard - "Undo" brings the old data back$', '$1 collé depuis le presse-papiers - « Annuler » rétablit les anciennes données'],
        ['^The addition is not valid (JSON|YAML) - it is open as a new document "(.+)"$', 'L’ajout n’est pas du $1 valide - il est ouvert comme nouveau document « $2 »'],
        ['^(.+) - the addition is open as a new document "(.+)"$', '$1 - l’ajout est ouvert comme nouveau document « $2 »'],
        ['^Document received - (\\d+) (?:problem|problems) found, see above the code$', (m, k) => `Document reçu - ${k} ${getPlural(k, 'problème trouvé', 'problèmes trouvés')}, voir au-dessus du code`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '« $1 » modifié par l’IA - « Annuler » l’annule'],
        ['^"(.+)" duplicated$', '« $1 » dupliqué'],
        ['^Delete "(.+)"\\?$', 'Supprimer « $1 » ?'],
        ['^"(.+)" deleted$', '« $1 » supprimé'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Ouvrir $1'],
        /* ---------- Template placeholders (?template=) ---------- */
        ['^A placeholder key goes in quotes: "(.+)"$', 'Un marqueur utilisé comme clé doit être entre guillemets : "$1"'],
    ],
};
