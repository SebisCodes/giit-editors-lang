/* French texts that all giit editors share: the links to giit.ch in the bar,
   saving on a server and inside a page (sync.js), the AI status (aistatus.js),
   the confirmation box (dialogs.js), the errors of template placeholders (template-tags.js). The editor's own texts are in ui.js; how
   they are used is described in i18n.js. The same file serves every giit
   editor. */

/**
 * Writes a time of day in the 24-hour form of the language.
 * @param {string} h - the hour.
 * @param {string} m - the minutes.
 * @param {string} ap - "AM", "PM" or empty.
 * @returns {string} the text in the language.
 */
const formatHour = (h, m, ap) => `${String((+h % 12) + (ap === 'PM' ? 12 : 0) + (ap ? 0 : +h - (+h % 12))).padStart(2, '0')}:${m}`;
/**
 * Translates the text the pattern found (le in the English pattern).
 * @param {string} w - the English text the pattern found.
 * @returns {string} the text in the language.
 */
const translateThing = w => (w === 'drawing' ? 'le dessin' : 'le document');

export default {
    text: {
        "All giit editors": "Tous les éditeurs giit",
        "by giit.ch": "par giit.ch",
        "Open in another editor": "Ouvrir dans un autre éditeur",
        "Not everything can be converted": "Tout ne peut pas être converti",
        "Open anyway": "Ouvrir quand même",
        "Pictures and other files of the document stay here: add them again in the other editor": "Les images et autres fichiers du document restent ici : ajoutez-les à nouveau dans l’autre éditeur",
        "The document is too long for a link - export it and open the file in the other editor": "Le document est trop long pour un lien - exportez-le et ouvrez le fichier dans l’autre éditeur",
        "Scripts and styles": "Scripts et styles",
        "Form fields": "Champs de formulaire",
        "Footnotes, labels and references": "Notes de bas de page, étiquettes et renvois",
        "LaTeX commands and environments without an equivalent": "Commandes et environnements LaTeX sans équivalent",
        "Document class, packages and page settings": "Classe de document, paquets et réglages de page",
        "The table of contents": "La table des matières",
        "Typst functions without an equivalent": "Fonctions Typst sans équivalent",
        "Formulas are copied as written: check them": "Les formules sont copiées telles quelles : vérifiez-les",
        "Formulas become plain code": "Les formules deviennent du code brut",
        "Links with an unsafe address": "Liens avec une adresse non sûre",
        "Comments": "Commentaires",
        "Empty values (null): TOML has no null": "Valeurs vides (null) : TOML n’a pas de null",
        "The data is not a table: it goes under the key \"value\"": "Les données ne sont pas une table : elles vont sous la clé « value »",
        "Keys that are not valid XML names are changed": "Les clés qui ne sont pas des noms XML valides sont modifiées",
        "Only the first list goes into the table": "Seule la première liste va dans le tableau",
        "Nested values go into one cell as JSON": "Les valeurs imbriquées vont dans une cellule en JSON",
        "The picture could not be stored in this browser (storage full or blocked) - it is kept only until the page is closed: download the document to keep it": "L’image n’a pas pu être enregistrée dans ce navigateur (stockage plein ou bloqué) - elle n’est conservée que jusqu’à la fermeture de la page : téléchargez le document pour la garder",
        "Column names that occur twice (numbered)": "Noms de colonnes en double (numérotés)",
        "Fields beyond the header (named Column N)": "Champs au-delà de l’en-tête (nommés Column N)",
        "The AI's result could not be opened - your browser's storage may be full": "Le résultat de l’IA n’a pas pu être ouvert - le stockage de votre navigateur est peut-être plein",
        "The AI's result could not be opened": "Le résultat de l’IA n’a pas pu être ouvert",
        "Types of values: SHLS holds every value as text": "Types de valeurs : SHLS conserve chaque valeur en texte",
        "This data has no list of records, so it does not make a table": "Ces données n’ont pas de liste d’enregistrements et ne forment donc pas un tableau",
        "The XML cannot be read - fix the problem above the code first": "Le XML est illisible - corrigez d’abord le problème au-dessus du code",
        "It could not be converted": "La conversion a échoué",
        "Content from a third party, not checked by giit.ch": "Contenu de tiers, non vérifié par giit.ch",
        // Wrapping long lines in the code view (wrap.js)
        "Wrap": "À la ligne",
        "Wrap long lines in the view - each line of the code stays one line (Alt+Z)": "Renvoyer les longues lignes à la ligne dans l’affichage - chaque ligne du code reste une ligne (Alt+Z)",
        'Cancel': 'Annuler',
        'Allow': 'Autoriser',
        'No': 'Non',
        'Yes': 'Oui',
        'Save': 'Enregistrer',
        'Saved': 'Enregistré',
        'Sending…': 'Envoi…',
        'Not connected': 'Non connecté',
        'Save on this server?': 'Enregistrer sur ce serveur ?',
        'The address for the AI must be https:// on the site of the page around the editor - it is not used':
            'L’adresse pour l’IA doit être en https:// sur le site de la page qui entoure l’éditeur - elle n’est pas utilisée',
        'The key from the page is not valid (16 to 512 letters, digits or ._~+/=-)':
            'La clé fournie par la page n’est pas valide (16 à 512 lettres, chiffres ou ._~+/=-)',
        'This document stays in your browser - only the document from the page is saved there':
            'Ce document reste dans votre navigateur - seul le document de la page y est enregistré',
        'This drawing stays in your browser - only the drawing from the page is saved there':
            'Ce dessin reste dans votre navigateur - seul le dessin de la page y est enregistré',
        'The page that opened the editor is closed - download the document so nothing is lost':
            'La page qui a ouvert l’éditeur est fermée - téléchargez le document pour ne rien perdre',
        'The page that opened the editor is closed - download the drawing so nothing is lost':
            'La page qui a ouvert l’éditeur est fermée - téléchargez le dessin pour ne rien perdre',
        'The webhook from the page is not an https:// address - it is not used':
            'Le webhook de la page n’est pas une adresse https:// - il n’est pas utilisé',
        'Please enter an https:// address (or http://localhost for testing)':
            'Saisissez une adresse https:// (ou http://localhost pour tester)',
        'Saved versions now go to your server': 'Les versions enregistrées sont maintenant envoyées à votre serveur',
        'Webhook switched off': 'Webhook désactivé',
        'The webhook in the link is not an https:// address - it is not used':
            'Le webhook du lien n’est pas une adresse https:// - il n’est pas utilisé',
        'The webhook in the link only works together with ?src= - it is not used':
            'Le webhook du lien ne fonctionne qu’avec ?src= - il n’est pas utilisé',
        'A token in a link is not used - enter it under "Save to server"':
            'Un jeton dans un lien n’est pas utilisé - saisissez-le sous « Enregistrer sur un serveur »',
        'Save - hand the document to the page around the editor (Ctrl+S)':
            'Enregistrer - transmettre le document à la page qui entoure l’éditeur (Ctrl+S)',
        'Save - hand the drawing to the page around the editor (Ctrl+S)':
            'Enregistrer - transmettre le dessin à la page qui entoure l’éditeur (Ctrl+S)',
        'AI through a website: not connected': 'IA via un site web : non connectée',
        'Browser agent (WebMCP): not offered by this browser': 'Agent de navigateur (WebMCP) : non proposé par ce navigateur',
        'Browser agent (WebMCP): available, not used yet': 'Agent de navigateur (WebMCP) : disponible, pas encore utilisé',
        'AI links: cannot reach the editor inside this website - paste the AI\'s answer here':
            'Liens d’IA : ils n’atteignent pas l’éditeur dans ce site web - collez ici la réponse de l’IA',
        'AI links: open the editor in a new tab': 'Liens d’IA : ouvrent l’éditeur dans un nouvel onglet',
        'AI links: go to another editor tab (the one used last)': 'Liens d’IA : vont dans un autre onglet de l’éditeur (le dernier utilisé)',
        'AI links: arrive in this tab': 'Liens d’IA : arrivent dans cet onglet',
        'AI in this session: nothing received yet - copy the prompt for your AI': 'IA dans cette session : rien reçu pour l’instant - copiez le prompt pour votre IA',
    },
    patterns: [
        ['^Saved on (.+) at (\\d{1,2}):(\\d{2})\\s?(AM|PM)?$', (x, host, h, m, ap) => `Enregistré sur ${host} à ${formatHour(h, m, ap)}`],
        ['^Saved on (.+)$', 'Enregistré sur $1'],
        ['^Not saved on (.+?): no connection, or the server does not allow it \\(CORS\\)$', 'Non enregistré sur $1 : pas de connexion, ou le serveur ne l’autorise pas (CORS)'],
        ['^Not saved on (.+?): The server answered (\\d+)(.*)$', 'Non enregistré sur $1 : le serveur a répondu $2$3'],
        ['^Not saved on (.+?): the (document|drawing) with its pictures is (\\d+) MB - at most 40 MB go in one request$', 'Non enregistré sur $1 : avec les images, cela fait $3 Mo - une requête accepte au plus 40 Mo'],
        ['^"(.+)" was changed in another tab - your version here is kept as "(.+)"$', '« $1 » a été modifié dans un autre onglet - votre version d’ici est conservée sous « $2 »'],
        ['^Not saved on (.+?): the server did not answer within (\\d+) seconds$', 'Non enregistré sur $1 : le serveur n’a pas répondu en $2 secondes'],
        ['^Not saved on (.+?): (.*)$', 'Non enregistré sur $1 : $2'],
        ['^Saves to (.+) \\(set by the page\\)$', 'Enregistre sur $1 (défini par la page)'],
        ['^Save - send the (document|drawing) to (.+) \\(Ctrl\\+S\\)$', (m, w, h) => `Enregistrer - envoyer ${translateThing(w)} à ${h} (Ctrl+S)`],
        ['^The AI\'s new (document|drawing) is open as "(.+)" - it stays in your browser and is not saved to (.+)$',
            (m, w, n, l) => `${w === 'drawing' ? 'Le nouveau dessin' : 'Le nouveau document'} de l’IA est ouvert sous le nom « ${n} » - il reste dans votre navigateur et n’est pas enregistré sur ${l}`],
        ['^The AI\'s result from (.+) is open - Undo takes it back$', 'Le résultat de l’IA venant de $1 est ouvert - Annuler rétablit l’état précédent'],
        ['^The file could not be opened: no connection, or the server does not allow it \\(CORS\\)$', 'Le fichier n’a pas pu être ouvert : pas de connexion, ou le serveur ne l’autorise pas (CORS)'],
        ['^The file could not be opened: only https:// addresses can be opened$', 'Le fichier n’a pas pu être ouvert : seules les adresses https:// peuvent être ouvertes'],
        ['^The file could not be opened: the server answered (\\d+)$', 'Le fichier n’a pas pu être ouvert : le serveur a répondu $1'],
        ['^The file could not be opened: the page loaded another document meanwhile$', 'Le fichier n’a pas pu être ouvert : la page a chargé un autre document entre-temps'],
        ['^The file could not be opened: (.*)$', 'Le fichier n’a pas pu être ouvert : $1'],
        ['^This link asks the editor to send the saved versions of "(.+)" to (.+) while this page is open\\. Only allow it if you trust that site\\.$',
            'Ce lien demande à l’éditeur d’envoyer les versions enregistrées de « $1 » à $2 tant que cette page est ouverte. N’autorisez cela que si vous faites confiance à ce site.'],
        ['^AI in this session: a document from an AI link, just now$', 'IA dans cette session : un document via un lien d’IA, à l’instant'],
        ['^AI in this session: a document from an AI link, (\\d+) min ago$', 'IA dans cette session : un document via un lien d’IA, il y a $1 min'],
        ['^AI in this session: a result through the page, just now$', 'IA dans cette session : un résultat via la page, à l’instant'],
        ['^AI in this session: a result through the page, (\\d+) min ago$', 'IA dans cette session : un résultat via la page, il y a $1 min'],
        ['^AI in this session: a browser agent \\(WebMCP\\), just now$', 'IA dans cette session : un agent de navigateur (WebMCP), à l’instant'],
        ['^AI in this session: a browser agent \\(WebMCP\\), (\\d+) min ago$', 'IA dans cette session : un agent de navigateur (WebMCP), il y a $1 min'],
        ['^AI through (.+): connected, waiting for the key$', 'IA via $1 : connectée, en attente de la clé'],
        ['^AI through (.+): connected$', 'IA via $1 : connectée'],
        ['^AI through (.+): the website gives the answering instructions$', 'IA via $1 : le site web indique à l’IA comment répondre'],
        ['^Browser agent \\(WebMCP\\): active, last used just now$', 'Agent de navigateur (WebMCP) : actif, utilisé à l’instant'],
        ['^Browser agent \\(WebMCP\\): active, last used (\\d+) min ago$', 'Agent de navigateur (WebMCP) : actif, utilisé il y a $1 min'],
        ['^Browser agent \\(WebMCP\\): available, last used just now$', 'Agent de navigateur (WebMCP) : disponible, utilisé à l’instant'],
        ['^Browser agent \\(WebMCP\\): available, last used (\\d+) min ago$', 'Agent de navigateur (WebMCP) : disponible, utilisé il y a $1 min'],

        /* ---------- The page's own answering instructions (AI Assistant) ---------- */
        ['^(.+) gives the AI its instructions for answering\\. What you paste into your AI is handled by its provider\\.$', '$1 indique à l’IA comment répondre. Ce que vous collez dans votre IA est traité par son fournisseur.'],
        ['^The AI answers as (.+) describes in the prompt\\. If it answers with a link, paste its answer below\\.$', 'L’IA répond comme $1 le décrit dans le prompt. Si elle répond par un lien, collez sa réponse ci-dessous.'],

        /* ---------- Template placeholders (template-tags.js, ?template=) ---------- */
        ['^The section (\\S+) stays open - add (\\S+)$', 'La section $1 reste ouverte - ajoutez $2'],
        ['^(\\S+) is a stray end tag - remove it or add (\\S+) before it$', '$1 est une balise de fin surnuméraire - supprimez-la ou ajoutez $2 avant'],
        ['^(\\S+) closes (\\S+) before the inner section (\\S+) is closed - add (\\S+) first$', '$1 ferme $2 avant que la section intérieure $3 soit fermée - ajoutez d’abord $4'],
        ['^Unknown placeholder (\\S+) - use (.+)$', 'Espace réservé inconnu $1 - utilisez $2'],
    ],
};
