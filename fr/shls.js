/* French texts of the SHLS editor: the bar, the work area (code, records,
   record, insert, convert, outline), its dialogs and messages, and the
   problems found in the code. What all editors share is in
   common.js; how the dictionaries are used is described in
   i18n.js. Names of documents, sections, keys and values stay as they are:
   the patterns copy them into the French text. */

import { formatTime, getPlural } from './format.js';

/* French: 0 and 1 take the singular */

/* "1,234" -> "1 234" (French thousands separator: narrow no-break space) */
/**
 * Writes the thousands separator of the language into a number ("1,234").
 * @param {string} s - the number with English separators.
 * @returns {string} the text in the language.
 */
const formatThousands = s => s.replace(/,/g, ' ');
/* "123 bytes" / "1.5 KB" -> French unit and decimal comma */
/**
 * Translates the unit of a size text ("123 bytes").
 * @param {string} s - the English size text.
 * @returns {string} the text in the language.
 */
const formatSize = s => s.replace(/ bytes$/, ' octets').replace(/ B$/, ' o').replace(/ KB$/, ' Ko').replace(/ MB$/, ' Mo').replace(/(\d)\.(\d)/, '$1,$2');

/* When a document was last changed (files.js): "just now", "5 min ago", "Mon D, YYYY" … */

/**
 * Translates the text the pattern found (recs in the English pattern).
 * @param {string} k - the English text the pattern found.
 * @returns {string} the text in the language.
 */
const translateRecords = k => getPlural(k, 'enregistrement', 'enregistrements');
/**
 * Translates the text the pattern found (keys in the English pattern).
 * @param {string} k - the English text the pattern found.
 * @returns {string} the text in the language.
 */
const translateKeys = k => getPlural(k, 'clé', 'clés');

export default {
    text: {
        /* ---------- Template placeholders (?template=): views of the records, box, side panel ---------- */
        'Show or hide the side panel': 'Afficher ou masquer le panneau latéral',
        'Examples': 'Exemples',
        'Template': 'Modèle',
        'The template with its placeholders as written': 'Le modèle avec ses espaces réservés tels qu’ils sont écrits',
        'Placeholders': 'Espaces réservés',
        'The placeholders of the template - a click on one puts its tag at the cursor': 'Les espaces réservés du modèle - cliquez sur l’un d’eux pour insérer sa balise au curseur',
        'Shown': 'Affiché',
        'Hidden': 'Masqué',
        'This part shows an example - change it in the template view or in the code': 'Cette partie affiche un exemple - modifiez-la dans la vue du modèle ou dans le code',
        'View of the records': 'Vue des enregistrements',
        'The records filled with the examples': 'Les enregistrements remplis avec les exemples',
        'The examples could not be filled in - the records show the template': 'Les exemples n\'ont pas pu être insérés - les enregistrements affichent le modèle',
        "Read back from SHLS, the data is not the same (for example records whose keys are in another order than in the first record) - check the result.": "Relues depuis SHLS, les données ne sont pas identiques (par exemple des enregistrements dont les clés sont dans un autre ordre que dans le premier) - vérifiez le résultat.",
        /* ---------- Top bar ---------- */
        'SHLS Editor - home': 'Éditeur SHLS - accueil',
        'SHLS Editor': 'Éditeur SHLS',
        'File': 'Fichier',
        'My documents (Ctrl+O)': 'Mes documents (Ctrl+O)',
        'My documents': 'Mes documents',
        'New document, or start this one over': 'Nouveau document, ou recommencer celui-ci',
        'New': 'Nouveau',
        'New blank document': 'Nouveau document vide',
        'An empty document - your other documents stay as they are': 'Un document vide - vos autres documents restent tels quels',
        'Empty section': 'Section vide',
        'One section with two keys and one record to fill in': 'Une section avec deux clés et un enregistrement à remplir',
        'Products and companies': 'Produits et entreprises',
        'The first README example: records right after each key block': 'Le premier exemple du README : les enregistrements juste après chaque bloc de clés',
        'Key blocks first': 'Blocs de clés d’abord',
        'The second README example: the records follow under the section name again': 'Le deuxième exemple du README : les enregistrements suivent sous le nom de section répété',
        'Companies, departments and employees, nested three levels': 'Entreprises, services et employés, imbriqués sur trois niveaux',
        'The same data with the key blocks first and fewer blank lines': 'Les mêmes données avec les blocs de clés d’abord et moins de lignes vides',
        'Start this document over': 'Recommencer ce document',
        'Empties the document - "Undo" brings it back': 'Vide le document - « Annuler » le rétablit',
        'Open an SHLS file from your computer (JSON, YAML, CSV and JSON Lines files are converted; you can also drag a file into the window)':
            'Ouvrir un fichier SHLS depuis votre ordinateur (les fichiers JSON, YAML, CSV et JSON Lines sont convertis ; vous pouvez aussi glisser un fichier dans la fenêtre)',
        'Open file…': 'Ouvrir un fichier…',
        'Undo the last change (Ctrl+Z)': 'Annuler la dernière modification (Ctrl+Z)',
        'Undo': 'Annuler',
        'Redo the change you just undid (Ctrl+Y)': 'Rétablir la modification que vous venez d’annuler (Ctrl+Y)',
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
        'Save the document as a .shls file (Ctrl+S)': 'Enregistrer le document comme fichier .shls (Ctrl+S)',
        'Download .shls': 'Télécharger le .shls',
        'JSON, YAML, CSV and more (Ctrl+E)': 'JSON, YAML, CSV et plus (Ctrl+E)',
        'Export…': 'Exporter…',

        /* ---------- Views and work area ---------- */
        'View': 'Affichage',
        'Edit': 'Modifier',
        'Selection': 'Sélection',
        'Records': 'Enregistrements',
        'Record': 'Enregistrement',
        'SHLS code': 'Code SHLS',
        'Copy the code to the clipboard': 'Copier le code dans le presse-papiers',
        'Copy code': 'Copier le code',
        'Copy': 'Copier',
        'Lay the document out as the reference SHLSEncoder does: all key blocks first, then the records': 'Disposer le document comme le fait le SHLSEncoder de référence : tous les blocs de clés d’abord, puis les enregistrements',
        'Tidy up': 'Mettre en ordre',
        'Drag to change the width of the code area': 'Faire glisser pour changer la largeur de la zone de code',
        'Drag to change the width': 'Faire glisser pour changer la largeur',
        'Unfold everything': 'Tout déplier',
        'Fold the key blocks and records': 'Replier les blocs de clés et les enregistrements',
        'Add: a record after the selected record (or at the end of the section), a key after the selected key': 'Ajouter : un enregistrement après celui sélectionné (ou à la fin de la section), une clé après la clé sélectionnée',
        'Add': 'Ajouter',
        'Duplicate the selected record or key': 'Dupliquer l’enregistrement ou la clé sélectionnés',
        'Duplicate': 'Dupliquer',
        'Move the selected record or key up (Alt+Up)': 'Monter l’enregistrement ou la clé sélectionnés (Alt+Haut)',
        'Move up': 'Monter',
        'Move the selected record or key down (Alt+Down)': 'Descendre l’enregistrement ou la clé sélectionnés (Alt+Bas)',
        'Move down': 'Descendre',
        'Remove the selected record, key or section (Delete)': 'Retirer l’enregistrement, la clé ou la section sélectionnés (Suppr)',
        'Remove': 'Retirer',
        'Search keys and values': 'Rechercher clés et valeurs',
        'Previous match (Shift+Enter)': 'Résultat précédent (Shift+Enter)',
        'Previous match': 'Résultat précédent',
        'Next match (Enter)': 'Résultat suivant (Enter)',
        'Next match': 'Résultat suivant',
        'Copy the path of the selection': 'Copier le chemin de la sélection',
        'Copy path': 'Copier le chemin',
        'Nothing selected': 'Rien de sélectionné',
        'Side panel': 'Panneau latéral',
        'The selected record, value or key': 'L’enregistrement, la valeur ou la clé sélectionnés',
        'New records, keys and sections, and pieces of code': 'Nouveaux enregistrements, clés et sections, et morceaux de code',
        'Insert': 'Insérer',
        'Tokens, and the document in other formats': 'Jetons, et le document dans d’autres formats',
        'Convert': 'Convertir',
        'The sections of the document': 'Les sections du document',
        'Outline': 'Plan',
        'Open it here': 'L’ouvrir ici',
        'Drop the file here': 'Déposez le fichier ici',
        'Hide': 'Masquer',
        'Show': 'Afficher',

        /* ---------- Records view ---------- */
        'Keys': 'Clés',
        'the template of each record': 'le modèle de chaque enregistrement',
        'Click to rename the section': 'Cliquer pour renommer la section',
        'Click to rename the key - only the key block changes': 'Cliquer pour renommer la clé - seul le bloc de clés change',
        'Click to change the value': 'Cliquer pour changer la valeur',
        'Value': 'Valeur',
        'Key': 'Clé',
        'Section name': 'Nom de section',
        'The code cannot be read - see the problem above the code.': 'Le code ne peut pas être lu - voyez le problème au-dessus du code.',
        'No sections yet - write a section name, its keys (indented) and, after one blank line, the records. Or choose a template under "New".':
            'Pas encore de section - écrivez un nom de section, ses clés (en retrait) et, après une ligne vide, les enregistrements. Ou choisissez un modèle sous « Nouveau ».',

        /* ---------- Record tab ---------- */
        'Click a section, a key or a record in the middle.': 'Cliquez au milieu sur une section, une clé ou un enregistrement.',
        'The document has no sections yet.': 'Le document n’a pas encore de section.',
        'The document has no sections yet': 'Le document n’a pas encore de section',
        'Path': 'Chemin',
        'Section': 'Section',
        'Add a record': '+ Enregistrement',
        'Add a key': '+ Clé',
        'Remove the section': 'Retirer la section',
        'Add a key after it': 'Ajouter après',
        'Add a record after it': 'Ajouter après',
        'Renaming a key changes only the key block. Adding, moving or removing a key changes every record of the section.':
            'Renommer une clé ne change que le bloc de clés. Ajouter, déplacer ou retirer une clé change chaque enregistrement de la section.',
        'Apply': 'Appliquer',

        /* ---------- Insert tab ---------- */
        'Add to the selection': 'Ajouter à la sélection',
        'A record after the selected record (or at the end of the section), a key after the selected key - every record gets a value "-" for it. One step for Undo.':
            'Un enregistrement après celui sélectionné (ou à la fin de la section), une clé après la clé sélectionnée - chaque enregistrement reçoit pour elle la valeur « - ». Une étape d’annulation.',
        'A new record with "-" for each value': 'Un nouvel enregistrement avec « - » pour chaque valeur',
        'A new key in the key block; every record gets "-"': 'Une nouvelle clé dans le bloc de clés ; chaque enregistrement reçoit « - »',
        'A copy of the selected record or key': 'Une copie de l’enregistrement ou de la clé sélectionnés',
        'A new section at the end, with two keys and one record': 'Une nouvelle section à la fin, avec deux clés et un enregistrement',
        'At the cursor in the code': 'Au curseur dans le code',
        'A section name, its key block, a blank line and one record': 'Un nom de section, son bloc de clés, une ligne vide et un enregistrement',
        'The placeholder for the line of a nested list': 'L’marqueur pour la ligne d’une liste imbriquée',
        '- (no value)': '- (aucune valeur)',
        'SHLS has no empty values: a dash stands for none': 'SHLS n’a pas de valeurs vides : un tiret tient lieu d’absence de valeur',
        'Today\'s date': 'La date du jour',
        'The date as YYYY-MM-DD': 'La date au format AAAA-MM-JJ',

        /* ---------- Convert tab ---------- */
        'JSON on one line': 'JSON sur une ligne',
        'This document': 'Ce document',
        'Writes the document anew as the reference SHLSEncoder does: all key blocks first, then the records of each section':
            'Réécrit le document comme le fait le SHLSEncoder de référence : tous les blocs de clés d’abord, puis les enregistrements de chaque section',
        'Write as SHLSEncoder does': 'Écrire comme SHLSEncoder',
        'Convert to': 'Convertir en',
        'JSON (as SHLSDecoder reads it)': 'JSON (tel que SHLSDecoder le lit)',
        'CSV (one section)': 'CSV (une section)',
        'JSON Lines (one section)': 'JSON Lines (une section)',
        'The records as plain text': 'Les enregistrements en texte brut',
        'Result': 'Résultat',
        'Download': 'Télécharger',
        'Opens the result as a new document in the JSON Editor (in a new tab)': 'Ouvre le résultat comme nouveau document dans l’éditeur JSON (dans un nouvel onglet)',
        'Open in the JSON Editor': 'Ouvrir dans l’éditeur JSON',
        'Exactly the data the reference SHLSDecoder reads: every value is a string.': 'Exactement les données que lit le SHLSDecoder de référence : chaque valeur est une chaîne.',
        'The code cannot be read as SHLS - fix the problem above the code first': 'Le code ne peut pas être lu comme SHLS - corrigez d’abord le problème au-dessus du code',
        'Write it anyway?': 'L’écrire quand même ?',
        'Read back, the encoder\'s text gives different data than this document (SHLSEncoder cannot write every structure). "Undo" brings the document back.':
            'Relu, le texte de l’encodeur donne d’autres données que ce document (SHLSEncoder ne sait pas écrire toutes les structures). « Annuler » rétablit le document.',
        'Write it': 'L’écrire',
        'The document is written as SHLSEncoder does already': 'Le document est déjà écrit comme le fait SHLSEncoder',
        'Written as SHLSEncoder does': 'Écrit comme SHLSEncoder',

        /* ---------- Outline tab ---------- */
        'The sections of the document. Click one to go there.': 'Les sections du document. Cliquez sur l’une d’elles pour y aller.',

        /* ---------- Export ---------- */
        'Close': 'Fermer',
        'File name': 'Nom du fichier',
        'SHLS file as it is (.shls)': 'Fichier SHLS tel quel (.shls)',
        'JSON, as SHLSDecoder reads it (.json)': 'JSON, tel que SHLSDecoder le lit (.json)',
        'YAML file (.yaml)': 'Fichier YAML (.yaml)',
        'CSV table of the selected section (.csv)': 'Tableau CSV de la section sélectionnée (.csv)',
        'The records as plain text (.txt)': 'Les enregistrements en texte brut (.txt)',
        'Download every format at once': 'Télécharger tous les formats en une fois',
        'All formats (ZIP)': 'Tous les formats (ZIP)',

        /* ---------- My documents ---------- */
        'Search by name': 'Rechercher par nom',
        'Search your documents': 'Rechercher dans vos documents',
        'Open a file from your computer as a new document': 'Ouvrir un fichier de votre ordinateur comme nouveau document',
        'New document': 'Nouveau document',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Cliquez sur un document pour l’ouvrir. Les documents sont stockés uniquement dans ce navigateur - rien n’est envoyé. Effacer les données de site du navigateur les supprime : téléchargez donc ceux que vous voulez garder.',
        'Download every document as a .shls file in one ZIP': 'Télécharger chaque document en fichier .shls dans un seul ZIP',
        'Download all (ZIP)': 'Tout télécharger (ZIP)',
        'Rename': 'Renommer',
        'Download as .shls': 'Télécharger en .shls',
        'Delete': 'Supprimer',
        'New name': 'Nouveau nom',
        'This document is open': 'Ce document est ouvert',
        'Click to open this document': 'Cliquer pour ouvrir ce document',
        'No documents yet.': 'Pas encore de documents.',

        /* ---------- AI Assistant ---------- */
        'Any AI can work with you - ChatGPT, Claude, Gemini, Copilot. The prompt explains SHLS, so the AI writes valid SHLS.':
            'N’importe quelle IA peut travailler avec vous - ChatGPT, Claude, Gemini, Copilot. Le prompt explique SHLS, pour que l’IA écrive du SHLS valide.',
        'Connected AI': 'IA connectée',
        'Connected to': 'Connecté à',
        'the AI sends its result there, and it opens here.': 'l’IA y envoie son résultat, et il s’ouvre ici.',
        'What': 'Ce que',
        'tells the AI': 'indique à l’IA',
        'The AI should': 'L’IA doit',
        'Change “': 'Modifier « ',
        '”': ' »',
        'Make a new document': 'Créer un nouveau document',
        'The AI\'s answer (or press Ctrl+V anywhere):': 'La réponse de l’IA (ou appuyez sur Ctrl+V n’importe où) :',
        'The document travels in the link after the “#”, which no server sees. What you paste into your AI is handled by its provider.':
            'Le document voyage dans le lien après le « # », qu’aucun serveur ne voit. Ce que vous collez dans votre IA est traité par son fournisseur.',
        'The prompt - copy it with Ctrl+C': 'Le prompt - copiez-le avec Ctrl+C',
        'Copy prompt': 'Copier le prompt',
        'Paste it into your AI and say what it should change.': 'Collez-le dans votre IA et dites-lui ce qu’elle doit changer.',
        '(no key yet)': '(pas encore de clé)',
        '(key valid while the editor is open)': '(clé valable tant que l’éditeur est ouvert)',
        'The link could not be read': 'Le lien n’a pas pu être lu',
        'The document in this link is incomplete or damaged. If the AI\'s link was split over several lines (as in a terminal), copy the whole answer and paste it into the editor with Ctrl+V - the editor joins the lines.':
            'Le document de ce lien est incomplet ou endommagé. Si le lien de l’IA était réparti sur plusieurs lignes (comme dans un terminal), copiez toute la réponse et collez-la dans l’éditeur avec Ctrl+V - l’éditeur rassemble les lignes.',
        'Loading…': 'Chargement…',
        'Taken over by your editor': 'Reçu par votre éditeur',
        'The document is now in the SHLS Editor tab you already had open. Switch to that tab, or open it here.':
            'Le document se trouve maintenant dans l’onglet de l’éditeur SHLS que vous aviez déjà ouvert. Passez à cet onglet ou ouvrez-le ici.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)': 'La copie n’est pas autorisée ici - le texte est sélectionné ci-dessous : appuyez sur Ctrl+C (⌘C)',
        'Prompt copied - paste it into your AI and say what it should write': 'Prompt copié - collez-le dans votre IA et dites-lui ce qu’elle doit écrire',
        'This link is incomplete or damaged - please ask the AI to send it again': 'Ce lien est incomplet ou endommagé - demandez à l’IA de le renvoyer',

        /* ---------- Save to your server ---------- */
        'Save to your server': 'Enregistrer sur votre serveur',
        'Webhook address': 'Adresse du webhook',
        'https://example.com/api/shls': 'https://example.com/api/shls',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(facultatif, envoyé comme « Authorization: Bearer … » ; conservé jusqu’à la fermeture de cet onglet)',
        'Send automatically a few seconds after each change (otherwise only when you click': 'Envoyer automatiquement quelques secondes après chaque modification (sinon seulement quand vous cliquez sur',
        'or press Ctrl+S)': 'ou appuyez sur Ctrl+S)',
        'Only for “': 'Seulement pour « ',
        '” (other documents use the general address)': ' » (les autres documents utilisent l’adresse générale)',
        'What your server receives': 'Ce que reçoit votre serveur',
        'A POST request with JSON (your server must allow CORS from https://shls.giit.ch); content is the document as a string:':
            'Une requête POST avec du JSON (votre serveur doit autoriser CORS depuis https://shls.giit.ch) ; content est le document sous forme de chaîne :',
        'Embed the editor in your website': 'Intégrer l’éditeur dans votre site web',
        'Send now': 'Envoyer maintenant',
        'Save setting': 'Enregistrer le réglage',

        /* ---------- Help ---------- */
        'How it works': 'Fonctionnement',
        'Keyboard shortcuts': 'Raccourcis clavier',
        'In the records: go up and down, fold and unfold': 'Dans les enregistrements : monter et descendre, replier et déplier',
        'In the records: change the value, key or section name': 'Dans les enregistrements : changer la valeur, la clé ou le nom de section',
        'In the records: remove the record or key': 'Dans les enregistrements : retirer l’enregistrement ou la clé',
        'In the records: move the record or key up / down': 'Dans les enregistrements : monter / descendre l’enregistrement ou la clé',
        'Indent / outdent in the code by one level': 'Augmenter / diminuer le retrait d’un niveau dans le code',
        'Undo / redo': 'Annuler / rétablir',
        'Save (download, or to your server) / export': 'Enregistrer (télécharger, ou sur votre serveur) / exporter',
        'Alt': 'Alt',
        'Escape': 'Échap',
        'A click in the middle puts the code\'s cursor on that line; the cursor in the code marks its record, key or value. Problems (a record with a value too few, indentation that is not a whole level, a missing blank line) are listed above the code with their line - click one to go there.':
            'Un clic au milieu place le curseur du code sur cette ligne ; le curseur dans le code marque son enregistrement, sa clé ou sa valeur. Les problèmes (un enregistrement avec une valeur de moins, un retrait qui n’est pas un niveau entier, une ligne vide manquante) sont listés au-dessus du code avec leur ligne - cliquez sur l’un d’eux pour y aller.',
        'Enter keeps the indentation of the line; after a section name it starts the key block.': 'Enter garde le retrait de la ligne ; après un nom de section, il commence le bloc de clés.',

        /* ---------- Messages ---------- */
        'The browser storage is full - download and delete documents under "My documents"': 'Le stockage du navigateur est plein - téléchargez et supprimez des documents sous « Mes documents »',
        'The browser storage is full - delete or download documents under "My documents" first': 'Le stockage du navigateur est plein - supprimez ou téléchargez d’abord des documents sous « Mes documents »',
        'The browser storage is full - delete or download some documents first': 'Le stockage du navigateur est plein - supprimez ou téléchargez d’abord quelques documents',
        'The browser storage is full': 'Le stockage du navigateur est plein',
        'Nothing to undo': 'Rien à annuler',
        'Nothing to redo': 'Rien à rétablir',
        'Nothing changed': 'Rien n’a changé',
        'Choose a section, key or record first': 'Choisissez d’abord une section, une clé ou un enregistrement',
        'Choose a key or a record to move or duplicate it': 'Choisissez une clé ou un enregistrement à déplacer ou à dupliquer',
        'This nested list has no records to add after': 'Cette liste imbriquée n’a aucun enregistrement après lequel en ajouter un',
        'SHLS values have one line - the line breaks became spaces': 'Les valeurs SHLS tiennent sur une ligne - les sauts de ligne sont devenus des espaces',
        'Spaces around the value were removed - SHLS values cannot start with spaces': 'Les espaces autour de la valeur ont été retirés - les valeurs SHLS ne peuvent pas commencer par des espaces',
        'SHLS has no empty values (a blank line is skipped) - write a placeholder such as - or PH': 'SHLS n’a pas de valeurs vides (une ligne vide est sautée) - écrivez un marqueur comme - ou PH',
        'A key needs a name': 'Une clé a besoin d’un nom',
        'A section needs a name': 'Une section a besoin d’un nom',
        'A key block needs at least one key - add another key first': 'Un bloc de clés a besoin d’au moins une clé - ajoutez d’abord une autre clé',
        'This key is not there any more': 'Cette clé n’existe plus',
        'This line is not there any more': 'Cette ligne n’existe plus',
        'This record is not there any more': 'Cet enregistrement n’existe plus',
        'This is the first record': 'C’est le premier enregistrement',
        'This is the last record': 'C’est le dernier enregistrement',
        'This is the first key': 'C’est la première clé',
        'This is the last key': 'C’est la dernière clé',
        'This document is empty already': 'Ce document est déjà vide',
        'All data is removed. "Undo" brings it back as long as the page is open.': 'Toutes les données sont retirées. « Annuler » les rétablit tant que la page est ouverte.',
        'Start over': 'Recommencer',
        'The file is larger than 8 MB': 'Le fichier dépasse 8 Mo',
        'The CSV file is empty': 'Le fichier CSV est vide',
        'The YAML package is not loaded yet': 'Le module YAML n’est pas encore chargé',
        'Downloaded': 'Téléchargé',
        'Copied to the clipboard': 'Copié dans le presse-papiers',
        'Code copied': 'Code copié',
        '.shls downloaded': '.shls téléchargé',
        'Replace': 'Remplacer',
        'The document is removed from this browser for good. Download it first if you want to keep a copy.':
            'Le document est retiré définitivement de ce navigateur. Téléchargez-le d’abord si vous voulez en garder une copie.',
        'unknown format': 'format inconnu',

        /* What SHLS cannot keep (opening JSON, YAML, CSV) */
        'An object inside a record becomes a list with this one object.': 'Un objet dans un enregistrement devient une liste avec ce seul objet.',
        'Plain values where SHLS expects records (in a list or as a section) become records with the one key "Value".': 'Les valeurs simples là où SHLS attend des enregistrements (dans une liste ou comme section) deviennent des enregistrements avec l’unique clé « Value ».',
        'Empty values become blank lines, which SHLS readers skip - the values after them move up. Write a placeholder such as -.': 'Les valeurs vides deviennent des lignes vides, que les lecteurs SHLS sautent - les valeurs suivantes remontent. Écrivez un marqueur comme -.',
        'Values with several lines are not supported by SHLS - they break the records apart.': 'SHLS ne prend pas en charge les valeurs sur plusieurs lignes - elles cassent les enregistrements.',
        'Values that start or end with spaces lose them (and leading spaces change the indentation).': 'Les valeurs qui commencent ou finissent par des espaces les perdent (et les espaces en tête changent le retrait).',

        /* ---------- Problems in the code ---------- */
        'A tab in the indentation - SHLS counts spaces only, so this line is read as a section name': 'Une tabulation dans le retrait - SHLS ne compte que les espaces, cette ligne est donc lue comme un nom de section',
        'SHLS readers ignore this line - its indentation does not fit the key block': 'Les lecteurs SHLS ignorent cette ligne - son retrait ne correspond pas au bloc de clés',
        /* ---------- Template placeholders (?template=) ---------- */
        'A line of section tags belongs between complete records': 'Une ligne de balises de section du modèle doit se trouver entre des enregistrements complets',
        'A template stays as written - the encoder works on filled data': 'Un modèle reste tel quel - l’encodeur utilise des données renseignées',
        'Sections of the template stay whole - make this change in the code': 'Les sections du modèle restent intactes - effectuez cette modification dans le code',
    },

    html: {

        '<b>Export</b> also has <b>Open in another editor</b>: it converts the document and opens it as a new document there. Anything the other format cannot hold is listed first.':

            '<b>Exporter</b> propose aussi <b>Ouvrir dans un autre éditeur</b> : le document est converti et ouvert là-bas comme nouveau document. Ce que l’autre format ne peut pas contenir est listé d’abord.',
        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Cliquez sur <b>Copier le prompt</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'L’IA répond par un lien : cliquez dessus, ou collez toute la réponse ci-dessous. <b>Annuler</b> revient en arrière.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'L’IA répond par un lien : <b>collez toute sa réponse ci-dessous</b> (un lien cliqué ouvre un éditeur séparé). <b>Annuler</b> revient en arrière.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'L’éditeur peut envoyer chaque version enregistrée à votre propre serveur (un <b>webhook</b>), pour que votre travail soit gardé où vous le voulez. Rien n’est envoyé tant que vous n’entrez pas d’adresse ici.',
        'Also possible: <code>?src=&lt;URL of a .shls file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>shlseditor:ai</code>, <code>shlseditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Aussi possible : <code>?src=&lt;URL d’un fichier .shls&gt;</code> ouvre un fichier, <code>&amp;webhook=&lt;URL&gt;</code> y enregistre ce document. L’éditeur peut aussi s’ouvrir dans sa propre fenêtre (<code>?embed=window</code>), et votre page peut lui donner son propre prompt d’IA et une clé de session pour que l’IA envoie son résultat à votre serveur (<code>shlseditor:ai</code>, <code>shlseditor:key-request</code>) - voir « Utiliser l’éditeur sur votre propre site web » sous l’éditeur. Les détails sont dans <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> SHLS on the left - or start with <b>New</b> and one of the templates. A section is its name, then its keys (indented by one space, the keys of a nested list one level deeper), exactly one blank line, then the records: one value per line in the order of the keys.':
            '<b>Écrivez</b> du SHLS à gauche - ou commencez par <b>Nouveau</b> et l’un des modèles. Une section, c’est son nom, puis ses clés (en retrait d’un espace, les clés d’une liste imbriquée un niveau plus loin), exactement une ligne vide, puis les enregistrements : une valeur par ligne dans l’ordre des clés.',
        'The middle shows each section with its <b>key block</b> and its <b>records</b>, the keys as labels; nested lists fold. It reads the code exactly as the reference SHLSDecoder does.':
            'Le milieu montre chaque section avec son <b>bloc de clés</b> et ses <b>enregistrements</b>, les clés comme étiquettes ; les listes imbriquées se replient. Il lit le code exactement comme le SHLSDecoder de référence.',
        '<b>Click a value, a key or a section name</b> to change it right there. <b>Enter</b> or a click elsewhere writes the change into the code (one step for Undo), <b>Escape</b> cancels. The buttons above add, duplicate, move and remove records and keys - a key added or removed is added to or removed from every record.':
            '<b>Cliquez sur une valeur, une clé ou un nom de section</b> pour le modifier sur place. <b>Enter</b> ou un clic ailleurs écrit la modification dans le code (une étape d’annulation), <b>Échap</b> annule. Les boutons au-dessus ajoutent, dupliquent, déplacent et retirent enregistrements et clés - une clé ajoutée ou retirée l’est dans chaque enregistrement.',
        '<b>Record</b> on the right shows the selected record as a form; <b>Insert</b> adds records, keys and sections; <b>Convert</b> counts the tokens against JSON and converts to JSON, YAML, CSV and JSON Lines; <b>Outline</b> lists the sections.':
            '<b>Enregistrement</b> à droite montre l’enregistrement sélectionné sous forme de formulaire ; <b>Insérer</b> ajoute enregistrements, clés et sections ; <b>Convertir</b> compte les jetons par rapport à JSON et convertit en JSON, YAML, CSV et JSON Lines ; <b>Plan</b> liste les sections.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser. <b>Export</b> saves it as SHLS, JSON, YAML, CSV or text.':
            '<b>Mes documents</b> (le bouton dossier en haut à gauche) liste chaque document gardé dans ce navigateur. <b>Exporter</b> l’enregistre en SHLS, JSON, YAML, CSV ou texte.',
    },

    patterns: [
        /* ---------- Status lines and counts ---------- */
        ['^(\\d+) (?:line|lines) · ([\\d.]+ K?B) · (\\d+) (?:section|sections)$', (m, l, kb, s) => `${l} ${getPlural(l, 'ligne', 'lignes')} · ${formatSize(kb)} · ${s} ${getPlural(s, 'section', 'sections')}`],
        ['^([\\d,]+) bytes$', (m, b) => `${formatThousands(b)} octets`],
        ['^(\\d+) (?:record|records) · (\\d+) (?:key|keys)$', (m, r, k) => `${r} ${translateRecords(r)} · ${k} ${translateKeys(k)}`],
        ['^(\\d+) (?:record|records) · (\\d+) (?:key|keys) · line (\\d+)$', (m, r, k, l) => `${r} ${translateRecords(r)} · ${k} ${translateKeys(k)} · ligne ${l}`],
        ['^(\\d+) (?:record|records) · line (\\d+)$', (m, r, l) => `${r} ${translateRecords(r)} · ligne ${l}`],
        ['^(\\d+) (?:record|records)$', (m, r) => `${r} ${translateRecords(r)}`],
        ['^(\\d+) (?:problem|problems)$', (m, k) => `${k} ${getPlural(k, 'problème', 'problèmes')}`],
        ['^nested list · (\\d+) (?:key|keys)$', (m, k) => `liste imbriquée · ${k} ${translateKeys(k)}`],
        ['^(nested list · )?level (\\d+) · line (\\d+)$', (m, nl, l, z) => `${nl ? 'liste imbriquée · ' : ''}niveau ${l} · ligne ${z}`],
        ['^record (\\d+) of (\\d+) · lines (\\d+)-(\\d+)$', 'enregistrement $1 sur $2 · lignes $3-$4'],
        ['^SHLS needs about (\\d+) % fewer tokens than the same data as JSON - approximate tokens of common AI models\\.$', 'SHLS demande environ $1 % de jetons en moins que les mêmes données en JSON - jetons approximatifs des modèles d’IA courants.'],
        ['^The same data as JSON needs about as many tokens - approximate tokens of common AI models\\.$', 'Les mêmes données en JSON demandent à peu près autant de jetons - jetons approximatifs des modèles d’IA courants.'],
        ['^The records of "(.+)": its keys are the columns, a nested list is one cell with JSON\\.$', 'Les enregistrements de « $1 » : ses clés sont les colonnes, une liste imbriquée est une cellule avec du JSON.'],
        ['^One record of "(.+)" per line\\.$', 'Un enregistrement de « $1 » par ligne.'],
        ['^"(.+)" has no records$', '« $1 » n’a pas d’enregistrement'],

        /* ---------- Problems above the code ---------- */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'erreur', 'erreurs')}`],
        ['^(\\d+) (?:note|notes)$', (m, k) => `${k} ${getPlural(k, 'remarque', 'remarques')}`],
        ['^· (\\d+) (?:note|notes)$', (m, k) => `· ${k} ${getPlural(k, 'remarque', 'remarques')}`],
        ['^Line (\\d+)$', 'Ligne $1'],
        ['^Indented by (\\d+) (?:space|spaces) - not a whole level \\((\\d+) (?:space|spaces) per level\\)$', (m, a, b) => `En retrait de ${a} ${getPlural(a, 'espace', 'espaces')} - pas un niveau entier (${b} ${getPlural(b, 'espace', 'espaces')} par niveau)`],
        ['^Indented (\\d+) levels deeper than the line above - one level at a time$', 'En retrait de $1 niveaux de plus que la ligne au-dessus - un niveau à la fois'],
        ['^"(.+)" has no key block yet - these lines are read as its keys \\(the key block follows the section name directly\\)$', '« $1 » n’a pas encore de bloc de clés - ces lignes sont lues comme ses clés (le bloc de clés suit directement le nom de section)'],
        ['^The key "(.+)" is twice in the key block - only one of them keeps its values\\. Is the blank line between the key block and the records missing\\?$', 'La clé « $1 » figure deux fois dans le bloc de clés - une seule garde ses valeurs. La ligne vide entre le bloc de clés et les enregistrements manque-t-elle ?'],
        ['^"(.+)" looks like a value but stands in the key block - records follow the key block after exactly one blank line$', '« $1 » ressemble à une valeur mais se trouve dans le bloc de clés - les enregistrements suivent le bloc de clés après exactement une ligne vide'],
        ['^(\\d+) blank lines after the key block of "(.+)" - exactly one belongs there$', '$1 lignes vides après le bloc de clés de « $2 » - il en faut exactement une'],
        ['^This record of "(.+)" has (\\d+) of (\\d+) values - its last keys are missing in the data$', 'Cet enregistrement de « $1 » a $2 des $3 valeurs - ses dernières clés manquent dans les données'],
        ['^No blank line before this record of "(.+)" while the others have one - the record above may have more values than the key block \\((\\d+)\\)$', 'Pas de ligne vide avant cet enregistrement de « $1 », alors que les autres en ont une - l’enregistrement au-dessus a peut-être plus de valeurs que le bloc de clés ($2)'],
        ['^A blank line inside a record of "(.+)" - the record may have fewer values than the key block \\((\\d+)\\)$', 'Une ligne vide dans un enregistrement de « $1 » - l’enregistrement a peut-être moins de valeurs que le bloc de clés ($2)'],

        /* ---------- Messages with names ---------- */
        ['^"(.+)" has no key block - write its keys first$', '« $1 » n’a pas de bloc de clés - écrivez d’abord ses clés'],
        ['^"(.+)" has no key block$', '« $1 » n’a pas de bloc de clés'],
        ['^There is already a section "(.+)"$', 'Il existe déjà une section « $1 »'],
        ['^There is no section "(.+)"$', 'Il n’y a pas de section « $1 »'],
        ['^Remove the section "(.+)"\\?$', 'Retirer la section « $1 » ?'],
        ['^Its key block and its (\\d+) (?:record is|records are) removed\\. "Undo" brings them back\\.$', (m, k) => `Son bloc de clés et ${getPlural(k, 'son enregistrement sont retirés', `ses ${k} enregistrements sont retirés`)}. « Annuler » les rétablit.`],
        ['^Remove the key "(.+)"\\?$', 'Retirer la clé « $1 » ?'],
        ['^Its value is removed from every record of "(.+)" \\((\\d+)\\)\\. "Undo" brings it back\\.$', 'Sa valeur est retirée de chaque enregistrement de « $1 » ($2). « Annuler » la rétablit.'],
        ['^Path copied: (.*)$', 'Chemin copié : $1'],
        ['^Line (\\d+): (.*)$', 'Ligne $1 : $2'],
        ['^"(.+)" converted from ([\\w ]+)$', '« $1 » converti depuis $2'],
        ['^SHLS cannot keep all of this data: (.*)$', 'SHLS ne peut pas garder toutes ces données : $1'],
        ['^"(.+)" is open\\. My documents: open, rename, duplicate or delete your documents \\(Ctrl\\+O\\)$', '« $1 » est ouvert. Mes documents : ouvrir, renommer, dupliquer ou supprimer vos documents (Ctrl+O)'],
        ['^Start "(.+)" over\\?$', 'Recommencer « $1 » ?'],
        ['^Start "(.+)" over$', 'Recommencer « $1 »'],
        ['^(\\d+) (?:document|documents) · (.+) in this browser$', (m, k, s) => `${k} ${getPlural(k, 'document', 'documents')} · ${formatSize(s)} dans ce navigateur`],
        ['^No document named "(.*)"\\.$', 'Aucun document nommé « $1 ».'],
        ['^Open now · (.+)$', (m, s) => `Ouvert maintenant · ${formatSize(s)}`],
        ['^(just now|yesterday|\\d+ min ago|\\d+ h ago|[A-Z][a-z]{2} \\d{1,2}, \\d{4}) · (.+)$', (m, w, s) => `${formatTime(w)} · ${formatSize(s)}`],
        ['^(.+) \\(open now\\)$', '$1 (ouvert maintenant)'],
        ['^ZIP with (\\d+) (?:document|documents) downloaded$', (m, k) => `ZIP de ${k} ${getPlural(k, 'document', 'documents')} téléchargé`],
        ['^ZIP downloaded with (\\d+) files$', 'ZIP téléchargé avec $1 fichiers'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '« $1 » est maintenant vide - « Annuler » le rétablit'],
        ['^"(.+)" opened$', '« $1 » ouvert'],
        ['^New document "(.+)" - your other documents are under "My documents"$', 'Nouveau document « $1 » - vos autres documents sont sous « Mes documents »'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$', 'Nouveau document « $1 » de l’IA - vos autres documents restent inchangés'],
        ['^"(.+)" is not a file the editor can open$', '« $1 » n’est pas un fichier que l’éditeur peut ouvrir'],
        ['^Opened "(.+)" - converted from ([\\w ]+)$', '« $1 » ouvert - converti depuis $2'],
        ['^Opened "(.+)" - it is now in "My documents"$', '« $1 » ouvert - il se trouve maintenant dans « Mes documents »'],
        ['^"(.+)" could not be opened: (.*)$', 'Impossible d’ouvrir « $1 » : $2'],
        ['^The addition is not valid SHLS - it is open as a new document "(.+)"$', 'L’ajout n’est pas du SHLS valide - il est ouvert comme nouveau document « $1 »'],
        ['^(.+) - the addition is open as a new document "(.+)"$', '$1 - l’ajout est ouvert comme nouveau document « $2 »'],
        ['^Document received - (\\d+) (?:problem|problems) found, see above the code$', (m, k) => `Document reçu - ${k} ${getPlural(k, 'problème trouvé', 'problèmes trouvés')}, voir au-dessus du code`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '« $1 » modifié par l’IA - « Annuler » revient en arrière'],
        ['^"(.+)" duplicated$', '« $1 » dupliqué'],
        ['^Delete "(.+)"\\?$', 'Supprimer « $1 » ?'],
        ['^"(.+)" deleted$', '« $1 » supprimé'],

        /* ---------- AI Assistant ---------- */
        ['^Part (\\d+) of (\\d+) received$', 'Partie $1 sur $2 reçue'],
        ['^Open the other (?:link|links) from the AI too \\(still missing: part (.+)\\)\\.$',
            'Ouvrez aussi les autres liens de l’IA (il manque encore : partie $1).'],
        ['^Part (\\d+) of (\\d+) received - paste the other (?:link|links) too \\(missing: (.+)\\)$', 'Partie $1 sur $2 reçue - collez aussi les autres liens (il manque : $3)'],
        ['^The AI sends the document to (.+) with a key that only works for this session\\. What you paste into your AI is handled by its provider\\.$',
            'L’IA envoie le document à $1 avec une clé qui ne vaut que pour cette session. Ce que vous collez dans votre IA est traité par son fournisseur.'],
        ['^The AI sends its result to (.+) by itself, and it opens here\\. If it answers with a link, paste its answer below\\.$',
            'L’IA envoie elle-même son résultat à $1, et il s’ouvre ici. Si elle répond par un lien, collez sa réponse ci-dessous.'],
        ['^No key from (.+) - the prompt asks the AI for a link instead$', 'Pas de clé de $1 - le prompt demande plutôt un lien à l’IA'],
        ['^Prompt copied - the AI sends its result to (.+)$', 'Prompt copié - l’IA envoie son résultat à $1'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Ouvrir $1'],
    ],
};
