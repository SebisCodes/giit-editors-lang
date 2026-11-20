/* French texts of the QR editor: the bar, the work area (code, QR code,
   content, design, check), its dialogs and messages, and the problems the
   editor finds in the content and the design. What all editors share is in
   common.js; how the dictionaries are used is described in i18n.js. Names of
   documents, design keys and values stay as they are: the patterns copy them
   into the French text. Some messages are put together in app.js from
   fragments that are translated one by one; the patterns at the end give
   those their French quotes. */

import { formatTime, getPlural } from './format.js';

/* French: 0 and 1 take the singular */

/* "123 bytes" / "1.5 KB" -> French unit and decimal comma */
/**
 * Translates the unit of a size text ("123 bytes").
 * @param {string} s - the English size text.
 * @returns {string} the text in the language.
 */
const formatSize = s => s.replace(/ bytes$/, ' octets').replace(/ B$/, ' o').replace(/ KB$/, ' Ko').replace(/ MB$/, ' Mo').replace(/(\d)\.(\d)/, '$1,$2');
/* "0.43" -> "0,43" */
/**
 * Writes the decimal separator of the language into a number.
 * @param {string} s - the number with a decimal point.
 * @returns {string} the text in the language.
 */
const formatDecimal = s => s.replace('.', ',');

/* When a document was last changed (files.js): "just now", "5 min ago", "Oct 25, 2026" … */

/* The content types (payload.js TYPE_NAMES) */
const TYPES = {
    Link: 'Lien', Text: 'Texte', WiFi: 'Wi-Fi', Contact: 'Contact', Email: 'E-mail', SMS: 'SMS', Phone: 'Téléphone',
    Location: 'Lieu', Event: 'Événement', Crypto: 'Crypto', 'SEPA payment': 'Paiement SEPA', 'Swiss QR bill': 'QR-facture',
};
const TYPE_RE = Object.keys(TYPES).join('|');
/* What a design value may be (qrdoc.js hints); lists of values stay as they are */
const HINTS = {
    'auto or 1 to 40': 'auto ou 1 à 40',
    'auto or 0 to 7': 'auto ou 0 à 7',
    '0 to 20 modules': '0 à 20 modules',
    '0 to 360 degrees': '0 à 360 degrés',
    '5 to 30 percent': '5 à 30 pour cent',
    'a color like #1d2b53': 'une couleur comme #1d2b53',
    'a color like #ffffff, or transparent': 'une couleur comme #ffffff, ou transparent',
};
/**
 * Translates the text the pattern found (hint in the English pattern).
 * @param {string} h - the English text the pattern found.
 * @returns {string} the text in the language.
 */
const translateHint = h => HINTS[h] || h.replace(/^(none, .+) or a picture as (data:.+)$/, '$1 ou une image en $2');
/* Names in French quotes; the clipboard and the camera without */
const UNQUOTED = ['le presse-papiers', 'la caméra'];
/**
 * Puts a name into the quotation marks of the language, unless it is a word left unquoted.
 * @param {string} s - the name.
 * @returns {string} the text in the language.
 */
const formatQuoted = s => (UNQUOTED.includes(s) ? s : `« ${s} »`);

export default {
    text: {
        /* ---------- Top bar ---------- */
        'QR Editor - home': 'Éditeur QR - accueil',
        'QR Editor': 'Éditeur QR',
        'online': 'en ligne',
        'File': 'Fichier',
        'My documents (Ctrl+O)': 'Mes documents (Ctrl+O)',
        'My documents': 'Mes documents',
        'New QR code': 'Nouveau QR code',
        'New': 'Nouveau',
        'A web address - opens the page': 'Une adresse web - ouvre la page',
        'Join the network without typing the password': 'Rejoindre le réseau sans taper le mot de passe',
        'vCard or MeCard - saves name, phone and email': 'vCard ou MeCard - enregistre nom, téléphone et e-mail',
        'Adds a date to the calendar': 'Ajoute un rendez-vous au calendrier',
        'Address, subject and text': 'Adresse, objet et texte',
        'Number and message': 'Numéro et message',
        'Calls a number': 'Appelle un numéro',
        'Opens a place in the map app': 'Ouvre un lieu dans l’application de cartographie',
        'EPC GiroCode for banking apps in the euro area': 'EPC GiroCode pour les applications bancaires de la zone euro',
        'The QR code of a Swiss payment slip': 'Le QR code d’un bulletin de versement suisse',
        'Crypto payment': 'Paiement crypto',
        'Bitcoin, Ethereum and others': 'Bitcoin, Ethereum et autres',
        'Any text': 'N’importe quel texte',
        'The welcome example': 'L’exemple de bienvenue',
        'A designed WiFi code with logo and caption': 'Un code Wi-Fi décoré, avec logo et légende',
        'Guest WiFi': 'Wi-Fi invités',
        'Open a .qr file, or read a QR code from a picture (you can also drag it into the window or paste it)':
            'Ouvrir un fichier .qr ou lire un QR code dans une image (vous pouvez aussi la glisser dans la fenêtre ou la coller)',
        'Open file…': 'Ouvrir un fichier…',
        'Read a QR code with the camera': 'Lire un QR code avec la caméra',
        'Read code': 'Lire le code',
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
        'Save the QR code as an SVG picture (Ctrl+S)': 'Enregistrer le QR code en image SVG (Ctrl+S)',
        'Download SVG': 'Télécharger le SVG',
        'SVG, PNG, PDF, EPS, many codes from a table (Ctrl+E)': 'SVG, PNG, PDF, EPS, plusieurs codes depuis un tableau (Ctrl+E)',
        'Export…': 'Exporter…',

        /* ---------- Views and work area ---------- */
        'View': 'Affichage',
        'QR code': 'QR code',
        'Edit': 'Modifier',
        'QR document': 'Document QR',
        'Copy the QR document to the clipboard': 'Copier le document QR dans le presse-papiers',
        'Copy code': 'Copier le code',
        'Copy': 'Copier',
        'QR document: design lines, a line ---, then the content': 'Document QR : lignes de design, une ligne ---, puis le contenu',
        'Drag to change the width of the code area': 'Faire glisser pour modifier la largeur de la zone de code',
        'Drag to change the width': 'Faire glisser pour modifier la largeur',
        'Show the details of the scan check': 'Afficher les détails du test de lecture',
        'Checking…': 'Vérification…',
        'No code': 'Aucun code',
        'Scans': 'Lisible',
        'Scans in good conditions': 'Lisible si les conditions sont bonnes',
        'Does not scan': 'Illisible',
        'Type the content below the line --- in the code, or choose a type under Edit.':
            'Tapez le contenu sous la ligne --- dans le code, ou choisissez un type sous Modifier.',
        'What the code holds: link, WiFi, contact, payment …': 'Ce que contient le code : lien, Wi-Fi, contact, paiement…',
        'Content': 'Contenu',
        'Colors, shapes, logo, caption and frame': 'Couleurs, formes, logo, légende et cadre',
        'Scan check, contrast, print size': 'Test de lecture, contraste, taille d’impression',
        'Check': 'Vérifier',
        'Open it here': 'L’ouvrir ici',
        'Drop a .qr file or a picture with a QR code here': 'Déposez ici un fichier .qr ou une image avec un QR code',
        'Hide': 'Masquer',
        'Show': 'Afficher',
        'Caption': 'Légende',
        'line': 'ligne',
        'lines': 'lignes',
        'error': 'erreur',
        'errors': 'erreurs',
        'note': 'remarque',
        'notes': 'remarques',
        'version': 'version',
        'error correction': 'correction d’erreur',

        /* ---------- Content tab ---------- */
        'Kind of content': 'Type de contenu',
        'Link': 'Lien',
        'Text': 'Texte',
        'WiFi': 'Wi-Fi',
        'Contact': 'Contact',
        'Email': 'E-mail',
        'Phone': 'Téléphone',
        'Location': 'Lieu',
        'Event': 'Événement',
        'Crypto': 'Crypto',
        'SEPA payment': 'Paiement SEPA',
        'Swiss QR bill': 'QR-facture',
        'The code opens this address. A link shortener or redirect service makes the code depend on that service - the editor warns about it.':
            'Le code ouvre cette adresse. Un raccourcisseur de liens ou un service de redirection rend le code dépendant de ce service - l’éditeur vous en avertit.',
        'Any text; phones show it as it is.': 'N’importe quel texte ; les téléphones l’affichent tel quel.',
        'Phones join the network when the code is scanned (Android, iPhone with iOS 11 and later).': 'Les téléphones rejoignent le réseau quand le code est scanné (Android, iPhone à partir d’iOS 11).',
        'vCard is read by all phones; MeCard makes a smaller code with fewer fields.': 'vCard est lu par tous les téléphones ; MeCard donne un code plus petit avec moins de champs.',
        'Opens a new email with address, subject and text.': 'Ouvre un nouvel e-mail avec adresse, objet et texte.',
        'Opens a text message to this number.': 'Ouvre un SMS vers ce numéro.',
        'Offers to call this number - with the country code it works everywhere.': 'Propose d’appeler ce numéro - avec l’indicatif du pays, cela fonctionne partout.',
        'Opens the place in the map app.': 'Ouvre le lieu dans l’application de cartographie.',
        'Adds the event to the calendar (times are local times).': 'Ajoute l’événement au calendrier (les heures sont des heures locales).',
        'A payment request for wallet apps.': 'Une demande de paiement pour les applications de portefeuille.',
        'For banking apps in the euro area (SEPA credit transfer, EPC GiroCode). Error correction M as the standard requires.':
            'Pour les applications bancaires de la zone euro (virement SEPA, EPC GiroCode). Correction d’erreur M, comme l’exige la norme.',
        'The QR code of a Swiss QR bill (Implementation Guidelines 2.3 / 2.4). Drawn with the Swiss cross and error correction M; print it 46 × 46 mm.':
            'Le QR code d’une QR-facture suisse (Implementation Guidelines 2.3 / 2.4). Dessiné avec la croix suisse et la correction d’erreur M ; imprimez-le en 46 × 46 mm.',
        'Make a QR reference from a number': 'Créer une référence QR depuis un numéro',
        'Make an RF reference from a number': 'Créer une référence RF depuis un numéro',
        /* the fields of the forms */
        'Address (URL)': 'Adresse (URL)',
        'Network name (SSID)': 'Nom du réseau (SSID)',
        'Security': 'Sécurité',
        'WEP (old)': 'WEP (ancien)',
        'None (open network)': 'Aucune (réseau ouvert)',
        'Password': 'Mot de passe',
        'Hidden network': 'Réseau masqué',
        'vCard 3.0 (all phones)': 'vCard 3.0 (tous les téléphones)',
        'MeCard (smaller code)': 'MeCard (code plus petit)',
        'First name': 'Prénom',
        'Last name': 'Nom',
        'Company': 'Entreprise',
        'Job title': 'Fonction',
        'Mobile': 'Portable',
        'Phone (work)': 'Téléphone (travail)',
        'Website': 'Site web',
        'Street and number': 'Rue et numéro',
        'Postal code': 'Code postal',
        'City': 'Ville',
        'Region': 'Région',
        'Country': 'Pays',
        'Note': 'Remarque',
        'To': 'À',
        'Subject': 'Objet',
        'Message': 'Message',
        'Phone number': 'Numéro de téléphone',
        'Latitude': 'Latitude',
        'Longitude': 'Longitude',
        'Name of the place (optional)': 'Nom du lieu (facultatif)',
        'Title': 'Titre',
        'All day': 'Toute la journée',
        'Start': 'Début',
        'End': 'Fin',
        'Place': 'Lieu',
        'Description': 'Description',
        'Currency': 'Devise',
        'Address': 'Adresse',
        'Amount (optional)': 'Montant (facultatif)',
        'Recipient (optional)': 'Bénéficiaire (facultatif)',
        'Message (optional)': 'Message (facultatif)',
        'Recipient': 'Bénéficiaire',
        'BIC (optional)': 'BIC (facultatif)',
        'Amount in EUR (optional)': 'Montant en EUR (facultatif)',
        'Creditor reference RF… (or a message below)': 'Référence créancier RF… (ou une communication ci-dessous)',
        'Message to the recipient': 'Communication au bénéficiaire',
        'Purpose code (optional, e.g. CHAR)': 'Code de motif (facultatif, p. ex. CHAR)',
        'Note for the payer (optional)': 'Remarque pour le payeur (facultatif)',
        'IBAN or QR-IBAN of the creditor (CH or LI)': 'IBAN ou QR-IBAN du créancier (CH ou LI)',
        'Creditor name': 'Nom du créancier',
        'Street': 'Rue',
        'Number': 'Numéro',
        'Town': 'Localité',
        'Country (2 letters)': 'Pays (2 lettres)',
        'Amount (empty: the payer fills it in)': 'Montant (vide : le payeur le remplit)',
        'Reference': 'Référence',
        'No reference': 'Sans référence',
        'QR reference (with a QR-IBAN)': 'Référence QR (avec un QR-IBAN)',
        'Creditor reference (RF…)': 'Référence créancier (RF…)',
        'Reference number': 'Numéro de référence',
        'Additional information (message)': 'Informations supplémentaires (communication)',
        'Billing information (optional, //S1/…)': 'Informations de facturation (facultatif, //S1/…)',
        'Payable by: name (optional)': 'Payable par : nom (facultatif)',

        /* ---------- Design tab ---------- */
        'A Swiss QR bill is always drawn as the standard requires: black squares on white, the Swiss cross, error correction M. These settings apply to the other codes.':
            'Une QR-facture est toujours dessinée comme l’exige la norme : carrés noirs sur blanc, croix suisse, correction d’erreur M. Ces réglages s’appliquent aux autres codes.',
        'Colors': 'Couleurs',
        'Dark color': 'Couleur foncée',
        'Background': 'Fond',
        'Transparent background': 'Fond transparent',
        'Gradient': 'Dégradé',
        'None': 'Aucun',
        'Linear': 'Linéaire',
        'Radial': 'Radial',
        'Second color': 'Seconde couleur',
        'Angle': 'Angle',
        'Modules': 'Modules',
        'Eyes': 'Yeux',
        'Frame': 'Cadre',
        'Center': 'Centre',
        'Module shape': 'Forme des modules',
        'Eye frame': 'Cadre des yeux',
        'Eye center': 'Centre des yeux',
        'Square': 'Carré',
        'Rounded': 'Arrondi',
        'Dots': 'Points',
        'Soft squares': 'Carrés adoucis',
        'Diamonds': 'Losanges',
        'Vertical bars': 'Barres verticales',
        'Horizontal bars': 'Barres horizontales',
        'Circle': 'Cercle',
        'Leaf': 'Feuille',
        'No logo': 'Sans logo',
        'Mail': 'E-mail',
        'Map pin': 'Repère',
        'Calendar': 'Agenda',
        'Person': 'Personne',
        'Payment card': 'Carte bancaire',
        'Star': 'Étoile',
        'Heart': 'Cœur',
        'Own color for the eyes': 'Couleur propre pour les yeux',
        'Eye color': 'Couleur des yeux',
        'Your own picture (PNG, JPEG, SVG, WebP) - it becomes part of the document': 'Votre propre image (PNG, JPEG, SVG, WebP) - elle fait partie du document',
        'Picture…': 'Image…',
        'Logo size': 'Taille du logo',
        'Remove the modules behind the logo': 'Retirer les modules derrière le logo',
        'Caption and frame': 'Légende et cadre',
        'Position': 'Position',
        'Below the code': 'Sous le code',
        'Above the code': 'Au-dessus du code',
        /* the frame "Line"; "Line 3" above the code is made from the same word */
        'Line': 'Ligne',
        'Filled': 'Plein',
        'Frame and caption color': 'Couleur du cadre et de la légende',
        'Error correction and size': 'Correction d’erreur et taille',
        'Error correction': 'Correction d’erreur',
        'Quiet zone (modules)': 'Zone de silence (modules)',
        'Smallest version': 'Version minimale',
        'Automatic': 'Automatique',
        'Mask': 'Masque',
        'Use a higher error correction when it fits in the same size': 'Utiliser une correction d’erreur plus forte si elle tient dans la même taille',
        'Removes all design lines - "Undo" brings them back': 'Supprime toutes les lignes de design - « Annuler » les rétablit',
        'Reset the design': 'Réinitialiser le design',

        /* ---------- Check tab ---------- */
        'Scan check': 'Test de lecture',
        'Scans reliably and reads back exactly the content': 'Se lit de façon fiable et redonne exactement le contenu',
        'Scans, but only in good conditions': 'Se lit, mais seulement dans de bonnes conditions',
        'Reads back something else than the content': 'Redonne autre chose que le contenu',
        'Normal size': 'Taille normale',
        'Small (3 pixels per module)': 'Petit (3 pixels par module)',
        'Blurred, with less contrast': 'Flou, avec moins de contraste',
        'The editor reads its own drawing with a QR decoder (jsQR) in your browser. Test the printed code with a phone as well.':
            'L’éditeur lit son propre dessin avec un décodeur QR (jsQR) dans votre navigateur. Testez aussi le code imprimé avec un téléphone.',
        'The code': 'Le code',
        'Data': 'Données',
        'Logo covers': 'Le logo couvre',
        'Contrast': 'Contraste',
        'Print size': 'Taille d’impression',
        'Scanning distance (cm)': 'Distance de lecture (cm)',
        'Printed width (mm)': 'Largeur imprimée (mm)',
        'Problems': 'Problèmes',
        'No problems.': 'Aucun problème.',

        /* ---------- Export ---------- */
        'Export': 'Exporter',
        'Close': 'Fermer',
        'File name': 'Nom du fichier',
        'Vector (print, any size)': 'Vectoriel (impression, toute taille)',
        'SVG picture': 'Image SVG',
        'EPS (for print shops)': 'EPS (pour les imprimeurs)',
        'Picture': 'Image',
        'The content as text': 'Le contenu en texte',
        'QR document (.qr)': 'Document QR (.qr)',
        'Many codes': 'Plusieurs codes',
        'Many codes from a table': 'Plusieurs codes depuis un tableau',
        'Width in pixels': 'Largeur en pixels',
        'Resolution (dpi)': 'Résolution (dpi)',
        'Width in mm': 'Largeur en mm',
        'Each code as': 'Chaque code en',
        'SVG files in a ZIP': 'Fichiers SVG dans un ZIP',
        'PNG files in a ZIP': 'Fichiers PNG dans un ZIP',
        'One PDF, one code per page': 'Un PDF, un code par page',
        'File names from': 'Noms de fichier depuis',
        'Table (CSV or TSV, first row = column names)': 'Tableau (CSV ou TSV, première ligne = noms des colonnes)',
        'Open a table…': 'Ouvrir un tableau…',
        'Result': 'Résultat',
        'SVG, PNG, PDF, EPS and the .qr document in one ZIP': 'SVG, PNG, PDF, EPS et le document .qr dans un seul ZIP',
        'All formats (ZIP)': 'Tous les formats (ZIP)',
        'Download': 'Télécharger',
        'There is no code yet - see the problems above the code.': 'Il n’y a pas encore de code - voir les problèmes au-dessus du code.',
        '(The picture is made when you download it.)': '(L’image est créée au téléchargement.)',
        'pixels': 'pixels',
        'at': 'à',
        'One module': 'Un module',
        'below 0.4 mm many phones fail': 'sous 0,4 mm, beaucoup de téléphones échouent',
        '(A vector PDF, one page as large as the code - made when you download it.)': '(Un PDF vectoriel, une page de la taille du code - créé au téléchargement.)',
        '(A vector EPS for print shops - made when you download it.)': '(Un EPS vectoriel pour les imprimeurs - créé au téléchargement.)',
        'Downloaded': 'Téléchargé',
        'ZIP downloaded: SVG, PDF, EPS, PNG, the .qr document and the content': 'ZIP téléchargé : SVG, PDF, EPS, PNG, le document .qr et le contenu',
        'Picture copied - paste it into a document or a chat': 'Image copiée - collez-la dans un document ou une discussion',
        'This browser does not let the page copy pictures - download it instead': 'Ce navigateur ne permet pas à la page de copier des images - téléchargez-la plutôt',
        'Copied to the clipboard': 'Copié dans le presse-papiers',
        'Row number': 'Numéro de ligne',
        'Column': 'Colonne',
        'Write placeholders like {{url}} into the content (or the caption) - each row of the table fills them.':
            'Écrivez des espaces réservés comme {{url}} dans le contenu (ou la légende) - chaque ligne du tableau les remplit.',
        'Placeholders in the document': 'Espaces réservés dans le document',
        'Not in the table': 'Absents du tableau',
        'row': 'ligne',
        'rows': 'lignes',
        'At most': 'Au maximum',
        'rows at once': 'lignes à la fois',
        'The table is larger than 10 MB': 'Le tableau dépasse 10 Mo',
        'Paste a table with a header row and at least one row': 'Collez un tableau avec une ligne d’en-tête et au moins une ligne',
        'No row made a code - see the content': 'Aucune ligne n’a donné de code - voir le contenu',
        'Left out (content too long)': 'Omises (contenu trop long)',
        'code': 'code',
        'codes': 'codes',
        'made': 'créés',
        'left out': 'omis',

        /* ---------- Read a QR code ---------- */
        'Read a QR code': 'Lire un QR code',
        'Starting the camera…': 'Démarrage de la caméra…',
        'The camera image is read in your browser only - nothing is recorded or sent.': 'L’image de la caméra est lue uniquement dans votre navigateur - rien n’est enregistré ni envoyé.',
        'Choose a picture…': 'Choisir une image…',
        'This browser gives no camera to the page - choose a picture instead.': 'Ce navigateur ne donne pas accès à la caméra - choisissez plutôt une image.',
        'Hold the QR code in front of the camera.': 'Tenez le QR code devant la caméra.',
        'The camera is not allowed - allow it in the browser (inside another website the page must allow it too), or choose a picture.':
            'La caméra n’est pas autorisée - autorisez-la dans le navigateur (dans un autre site web, la page doit l’autoriser aussi) ou choisissez une image.',
        'No camera found - choose a picture instead.': 'Aucune caméra trouvée - choisissez plutôt une image.',

        /* ---------- My documents ---------- */
        'Search by name': 'Rechercher par nom',
        'Search your documents': 'Rechercher dans vos documents',
        'Open a .qr file or a picture with a QR code as a new document': 'Ouvrir un fichier .qr ou une image avec un QR code comme nouveau document',
        'New document': 'Nouveau document',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Cliquez sur un document pour l’ouvrir. Ils sont conservés uniquement dans ce navigateur - rien n’est envoyé. Effacer les données de site du navigateur les supprime : téléchargez ceux que vous voulez garder.',
        'Download every document as a .qr file in one ZIP': 'Télécharger tous les documents en fichiers .qr dans un seul ZIP',
        'Download all (ZIP)': 'Tout télécharger (ZIP)',
        'Rename': 'Renommer',
        'Duplicate': 'Dupliquer',
        'Download as .qr': 'Télécharger en .qr',
        'Delete': 'Supprimer',
        'New name': 'Nouveau nom',
        'This document is open': 'Ce document est ouvert',
        'Click to open this document': 'Cliquez pour ouvrir ce document',
        'No documents yet.': 'Pas encore de documents.',
        'The document is removed from this browser for good. Download it first if you want to keep a copy.':
            'Le document est définitivement supprimé de ce navigateur. Téléchargez-le d’abord si vous voulez en garder une copie.',

        /* ---------- AI Assistant ---------- */
        'Any AI can work with you - ChatGPT, Claude, Gemini, Copilot.': 'N’importe quelle IA peut travailler avec vous - ChatGPT, Claude, Gemini, Copilot.',
        'Connected AI': 'IA connectée',
        'Paste it into your AI and say what the code should hold or how it should look.': 'Collez-le dans votre IA et dites-lui ce que le code doit contenir ou à quoi il doit ressembler.',
        'Connected to': 'Connecté à',
        'the AI sends its result there, and it opens here.': 'l’IA y envoie son résultat, et il s’ouvre ici.',
        'What': 'Ce que',
        'tells the AI': 'indique à l’IA',
        'The AI should': 'L’IA doit',
        'Change “': 'Modifier « ',
        '”': ' »',
        'Make a new document': 'Créer un nouveau document',
        'The AI\'s answer (or press Ctrl+V anywhere):': 'La réponse de l’IA (ou Ctrl+V n’importe où) :',
        'The QR document travels in the link after the “#”, which no server sees. What you paste into your AI is handled by its provider.':
            'Le document QR voyage dans le lien après le « # », qu’aucun serveur ne voit. Ce que vous collez dans votre IA est traité par son fournisseur.',
        'The prompt - copy it with Ctrl+C': 'Le prompt - copiez-le avec Ctrl+C',
        'Copy prompt': 'Copier le prompt',
        '(no key yet)': '(pas encore de clé)',
        '(key valid while the editor is open)': '(clé valable tant que l’éditeur est ouvert)',
        'The link could not be read': 'Le lien n’a pas pu être lu',
        'The document in this link is incomplete or damaged. If the AI\'s link was split over several lines (as in a terminal), copy the whole answer and paste it into the editor with Ctrl+V - the editor joins the lines.':
            'Le document de ce lien est incomplet ou endommagé. Si le lien de l’IA a été coupé sur plusieurs lignes (comme dans un terminal), copiez toute la réponse et collez-la dans l’éditeur avec Ctrl+V - l’éditeur réunit les lignes.',
        'Loading…': 'Chargement…',
        'Taken over by your editor': 'Reçu par votre éditeur',
        'The document is now in the QR Editor tab you already had open. Switch to that tab, or open it here.':
            'Le document se trouve maintenant dans l’onglet de l’éditeur QR que vous aviez déjà ouvert. Passez à cet onglet ou ouvrez-le ici.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)': 'La copie n’est pas autorisée ici - le texte est sélectionné ci-dessous : appuyez sur Ctrl+C (⌘C)',
        'Prompt copied - paste it into your AI and say what it should write': 'Prompt copié - collez-le dans votre IA et dites-lui ce qu’elle doit écrire',
        'This link is incomplete or damaged - please ask the AI to send it again': 'Ce lien est incomplet ou endommagé - demandez à l’IA de le renvoyer',

        /* ---------- Save to your server ---------- */
        'Save to your server': 'Enregistrer sur votre serveur',
        'Webhook address': 'Adresse du webhook',
        'https://example.com/api/qr': 'https://example.com/api/qr',
        'Token': 'Jeton',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(facultatif, envoyé comme « Authorization: Bearer … » ; conservé jusqu’à la fermeture de cet onglet)',
        'Send automatically a few seconds after each change (otherwise only when you click': 'Envoyer automatiquement quelques secondes après chaque modification (sinon seulement quand vous cliquez sur',
        'or press Ctrl+S)': 'ou appuyez sur Ctrl+S)',
        'Only for “': 'Seulement pour « ',
        '” (other documents use the general address)': ' » (les autres documents utilisent l’adresse générale)',
        'What your server receives': 'Ce que reçoit votre serveur',
        'A POST request with JSON (your server must allow CORS from https://qr.giit.ch):': 'Une requête POST avec du JSON (votre serveur doit autoriser CORS depuis https://qr.giit.ch) :',
        'Embed the editor in your website': 'Intégrer l’éditeur dans votre site web',
        'Send now': 'Envoyer maintenant',
        'Save setting': 'Enregistrer le réglage',

        /* ---------- Help ---------- */
        'How it works': 'Fonctionnement',
        'Keyboard shortcuts': 'Raccourcis clavier',
        'Undo / redo': 'Annuler / rétablir',
        'Save (download SVG, or to your server)': 'Enregistrer (télécharger le SVG, ou sur votre serveur)',
        'Paste a picture with a QR code to read it': 'Coller une image avec un QR code pour le lire',
        'Wrap long lines in the code': 'Renvoyer les longues lignes à la ligne dans le code',

        /* ---------- Messages ---------- */
        'The browser storage is full - download and delete documents under "My documents"': 'Le stockage du navigateur est plein - téléchargez et supprimez des documents sous « Mes documents »',
        'The browser storage is full - delete or download documents under "My documents" first': 'Le stockage du navigateur est plein - supprimez ou téléchargez d’abord des documents sous « Mes documents »',
        'The browser storage is full - delete or download some documents first': 'Le stockage du navigateur est plein - supprimez ou téléchargez d’abord quelques documents',
        'The browser storage is full': 'Le stockage du navigateur est plein',
        'Nothing to undo': 'Rien à annuler',
        'Nothing to redo': 'Rien à rétablir',
        'The file is larger than 20 MB': 'Le fichier dépasse 20 Mo',
        'The picture is larger than 5 MB': 'L’image dépasse 5 Mo',
        'The SVG is larger than 200 KB': 'Le SVG dépasse 200 Ko',
        'Logo added - it is part of the document': 'Logo ajouté - il fait partie du document',
        'QR document copied': 'Document QR copié',
        'There is no code to download yet': 'Il n’y a pas encore de code à télécharger',
        'SVG downloaded': 'SVG téléchargé',
        'Design reset - "Undo" brings it back': 'Design réinitialisé - « Annuler » le rétablit',
        'Type a number into the reference field first': 'Tapez d’abord un numéro dans le champ de référence',
        'Reference with check digits written': 'Référence avec chiffres de contrôle écrite',
        'No QR code found in the picture': 'Aucun QR code trouvé dans l’image',
        /* fragments of messages put together in app.js (the patterns at the end set the quotes) */
        'is open. My documents: open, rename, duplicate or delete your documents (Ctrl+O)': 'est ouvert. Mes documents : ouvrir, renommer, dupliquer ou supprimer vos documents (Ctrl+O)',
        'your other documents are under "My documents"': 'vos autres documents se trouvent sous « Mes documents »',
        'opened': 'ouvert',
        'is neither a .qr file nor a picture': 'n’est ni un fichier .qr ni une image',
        'opened - it is now in "My documents"': 'ouvert - il se trouve maintenant dans « Mes documents »',
        'No QR code found in': 'Aucun QR code trouvé dans',
        'read': 'lu',
        'QR code read': 'QR code lu',
        'from': 'depuis',
        'it is a new document': 'c’est un nouveau document',
        'the clipboard': 'le presse-papiers',
        'the camera': 'la caméra',
        'from the AI - your other documents are unchanged': 'de l’IA - vos autres documents sont inchangés',
        'QR code received - the editor found': 'QR code reçu - l’éditeur a trouvé',
        'problem': 'problème',
        'problems': 'problèmes',
        'changed by the AI - "Undo" takes it back': 'modifié par l’IA - « Annuler » l’annule',

        /* ---------- Problems ---------- */
        'The content is too long for a QR code at this error correction - shorten it or choose L':
            'Le contenu est trop long pour un QR code avec cette correction d’erreur - raccourcissez-le ou choisissez L',
        'A SEPA payment code uses error correction M, as the standard requires': 'Un code de paiement SEPA utilise la correction d’erreur M, comme l’exige la norme',
        'The drawn code reads back something else than the content - check the content for characters the code cannot hold':
            'Le code dessiné redonne autre chose que le contenu - cherchez dans le contenu des caractères que le code ne peut pas contenir',
        'The drawn code does not scan - raise the contrast, make the logo smaller or choose more error correction':
            'Le code dessiné est illisible - augmentez le contraste, réduisez le logo ou choisissez plus de correction d’erreur',
        'The code scans, but not when it is small - simpler shapes, more contrast or more error correction help':
            'Le code se lit, mais pas quand il est petit - des formes plus simples, plus de contraste ou plus de correction d’erreur aident',
        'The code scans, but not when it is blurred or the light is poor - simpler shapes, more contrast or more error correction help':
            'Le code se lit, mais pas quand il est flou ou que la lumière est faible - des formes plus simples, plus de contraste ou plus de correction d’erreur aident',
        'Light code on a dark background: many scanners read it, but some older ones do not - dark on light is safest':
            'Code clair sur fond foncé : beaucoup de lecteurs le lisent, mais pas certains anciens - foncé sur clair est le plus sûr',
        'Transparent background: print the code only on a plain, light surface': 'Fond transparent : imprimez le code seulement sur une surface unie et claire',
        'Round eyes are read by phone cameras, but some scanner apps and devices only find square ones - for codes many people scan, square or rounded eyes are safer':
            'Les yeux ronds sont lus par les caméras des téléphones, mais certaines applications et certains lecteurs ne trouvent que les yeux carrés - pour des codes scannés par beaucoup de gens, des yeux carrés ou arrondis sont plus sûrs',
        'The code has no content yet': 'Le code n’a pas encore de contenu',
        'The address contains spaces - encode them as %20': 'L’adresse contient des espaces - encodez-les en %20',
        'The address has no https:// - some scanners show it as text instead of opening it': 'L’adresse n’a pas de https:// - certains lecteurs l’affichent comme texte au lieu de l’ouvrir',
        'The address uses http:// - the browser may warn that the page is not secure; use https:// if the site has it':
            'L’adresse utilise http:// - le navigateur peut avertir que la page n’est pas sécurisée ; utilisez https:// si le site le propose',
        'This is not a valid address': 'Ce n’est pas une adresse valide',
        'The network name (SSID) is missing': 'Le nom du réseau (SSID) manque',
        'The password is missing (or choose "None" for an open network)': 'Le mot de passe manque (ou choisissez « Aucune » pour un réseau ouvert)',
        'A WEP key has 5, 13, 16 or 29 characters (or 10, 26, 32, 58 hex digits)': 'Une clé WEP a 5, 13, 16 ou 29 caractères (ou 10, 26, 32, 58 chiffres hexadécimaux)',
        'WEP is not secure - use WPA2 or WPA3 if your router has it': 'WEP n’est pas sûr - utilisez WPA2 ou WPA3 si votre routeur le propose',
        'T:SAE is not in the WiFi standard and some scanners do not read it - T:WPA works for WPA2 and WPA3':
            'T:SAE ne fait pas partie de la norme Wi-Fi et certains lecteurs ne le lisent pas - T:WPA fonctionne pour WPA2 et WPA3',
        'A WPA password has 8 to 63 characters': 'Un mot de passe WPA a 8 à 63 caractères',
        'The contact has no name and no company': 'Le contact n’a ni nom ni entreprise',
        'The email address looks wrong': 'L’adresse e-mail semble incorrecte',
        'No address - the email app opens with an empty "To"': 'Pas d’adresse - l’application de messagerie s’ouvre avec un champ « À » vide',
        'The phone number is missing': 'Le numéro de téléphone manque',
        'The phone number contains other characters than digits and +': 'Le numéro de téléphone contient d’autres caractères que des chiffres et +',
        'Without the country code (+41 …) the number only works within the country': 'Sans l’indicatif du pays (+41 …), le numéro ne fonctionne que dans le pays',
        'Latitude and longitude are needed as numbers, for example 47.6779 and 8.6152': 'Il faut la latitude et la longitude en nombres, par exemple 47.6779 et 8.6152',
        'The latitude lies between -90 and 90, the longitude between -180 and 180': 'La latitude est comprise entre -90 et 90, la longitude entre -180 et 180',
        'The event has no BEGIN:VEVENT': 'L’événement n’a pas de BEGIN:VEVENT',
        'The event has no END:VEVENT': 'L’événement n’a pas de END:VEVENT',
        'The event has no title': 'L’événement n’a pas de titre',
        'The event has no start': 'L’événement n’a pas de début',
        'The event ends before it starts': 'L’événement finit avant de commencer',
        'The address is missing': 'L’adresse manque',
        'The amount must be a number with a point, for example 0.005': 'Le montant doit être un nombre avec un point, par exemple 0.005',
        'An Ethereum address has 0x and 40 hex digits': 'Une adresse Ethereum a 0x et 40 chiffres hexadécimaux',
        'This does not look like a Bitcoin address': 'Cela ne ressemble pas à une adresse Bitcoin',
        'The IBAN is missing': 'L’IBAN manque',
        'The IBAN has the wrong form (two letters, two digits, then letters and digits)': 'L’IBAN n’a pas la bonne forme (deux lettres, deux chiffres, puis des lettres et des chiffres)',
        'The check digits of the IBAN do not match - a typing error?': 'Les chiffres de contrôle de l’IBAN ne correspondent pas - une faute de frappe ?',
        'A QR reference has 27 digits': 'Une référence QR a 27 chiffres',
        'The check digit of the QR reference does not match': 'Le chiffre de contrôle de la référence QR ne correspond pas',
        'A creditor reference starts with RF and two check digits, 5 to 25 characters': 'Une référence créancier commence par RF et deux chiffres de contrôle, 5 à 25 caractères',
        'The check digits of the creditor reference do not match': 'Les chiffres de contrôle de la référence créancier ne correspondent pas',
        'The second line is the version, 001 or 002': 'La deuxième ligne est la version, 001 ou 002',
        'The third line should be 1 (UTF-8)': 'La troisième ligne devrait être 1 (UTF-8)',
        'The fourth line must be SCT': 'La quatrième ligne doit être SCT',
        'Version 001 needs a BIC': 'La version 001 exige un BIC',
        'The BIC has 8 or 11 letters and digits': 'Le BIC a 8 ou 11 lettres et chiffres',
        'The recipient is missing': 'Le bénéficiaire manque',
        'The recipient has more than 70 characters': 'Le bénéficiaire a plus de 70 caractères',
        'The amount is between 0.01 and 999999999.99 EUR, with a point and at most two decimals':
            'Le montant est compris entre 0.01 et 999999999.99 EUR, avec un point et au plus deux décimales',
        'The purpose code has 4 letters (for example CHAR, GDDS)': 'Le code de motif a 4 lettres (par exemple CHAR, GDDS)',
        'Either a reference or a message, not both': 'Soit une référence, soit une communication, pas les deux',
        'The message has more than 140 characters': 'La communication a plus de 140 caractères',
        'The second line is the version 0200': 'La deuxième ligne est la version 0200',
        'The third line is the coding type 1': 'La troisième ligne est le type de codage 1',
        'The Swiss QR bill takes only IBANs of Switzerland and Liechtenstein (CH, LI)': 'La QR-facture n’accepte que les IBAN de Suisse et du Liechtenstein (CH, LI)',
        'The creditor address must be structured (S): street, number, postal code and town in their own lines':
            'L’adresse du créancier doit être structurée (S) : rue, numéro, code postal et localité, chacun sur sa ligne',
        'The creditor name is missing': 'Le nom du créancier manque',
        'Postal code and town of the creditor are needed': 'Il faut le code postal et la localité du créancier',
        'The country of the creditor is two letters, for example CH': 'Le pays du créancier tient en deux lettres, par exemple CH',
        'The ultimate creditor (lines 12 to 18) must stay empty': 'Le créancier final (lignes 12 à 18) doit rester vide',
        'The amount is between 0.01 and 999999999.99, with a point and two decimals': 'Le montant est compris entre 0.01 et 999999999.99, avec un point et deux décimales',
        'The currency is CHF or EUR': 'La devise est CHF ou EUR',
        'Postal code and town of the payer are needed': 'Il faut le code postal et la localité du payeur',
        'The payer\'s address must be structured (S)': 'L’adresse du payeur doit être structurée (S)',
        'The reference type is QRR, SCOR or NON': 'Le type de référence est QRR, SCOR ou NON',
        'A QR-IBAN needs a QR reference (QRR)': 'Un QR-IBAN exige une référence QR (QRR)',
        'A QR reference needs a QR-IBAN (an IBAN with 30000 to 31999 after the check digits)': 'Une référence QR exige un QR-IBAN (un IBAN avec 30000 à 31999 après les chiffres de contrôle)',
        'From 14 November 2026 a bill in EUR takes only an IBAN with a creditor reference (SCOR) or none - QR-IBAN and QR reference only in CHF':
            'Dès le 14 novembre 2026, une facture en EUR n’accepte qu’un IBAN avec une référence créancier (SCOR) ou sans référence - QR-IBAN et référence QR seulement en CHF',
        'Without a reference type the reference line must be empty': 'Sans type de référence, la ligne de référence doit être vide',
        'Message and billing information together have at most 140 characters': 'La communication et les informations de facturation ont ensemble au plus 140 caractères',
        'Line 31 must be EPD (end of the payment data)': 'La ligne 31 doit être EPD (fin des données de paiement)',
        'The Swiss QR bill allows only Latin characters (no emoji, no other scripts)': 'La QR-facture n’accepte que des caractères latins (pas d’emoji, pas d’autres écritures)',
    },

    html: {
        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Cliquez sur <b>Copier le prompt</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'L’IA répond par un lien : cliquez dessus, ou collez toute la réponse ci-dessous. <b>Annuler</b> l’annule.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'L’IA répond par un lien : <b>collez toute sa réponse ci-dessous</b> (un lien cliqué ouvre un éditeur séparé). <b>Annuler</b> l’annule.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'L’éditeur peut envoyer chaque version enregistrée à votre propre serveur (un <b>webhook</b>), pour que votre travail soit conservé là où vous le souhaitez. Rien n’est envoyé tant que vous n’avez pas saisi d’adresse ici.',
        'Also possible: <code>?src=&lt;URL of a .qr file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>qreditor:ai</code>, <code>qreditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Également possible : <code>?src=&lt;URL of a .qr file&gt;</code> ouvre un fichier, <code>&amp;webhook=&lt;URL&gt;</code> y enregistre ce document. L’éditeur peut aussi s’ouvrir dans sa propre fenêtre (<code>?embed=window</code>), et votre page peut lui transmettre son propre prompt d’IA et une clé de session pour que l’IA envoie son résultat à votre serveur (<code>qreditor:ai</code>, <code>qreditor:key-request</code>) - voir « Utiliser l’éditeur sur votre propre site web » sous l’éditeur. Les détails se trouvent dans <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Choose what the code holds</b> under <b>New</b> or in the <b>Content</b> tab: a link, WiFi, a contact, an event, a payment … The form writes the content in the form phones read.':
            '<b>Choisissez ce que contient le code</b> sous <b>Nouveau</b> ou dans l’onglet <b>Contenu</b> : un lien, un Wi-Fi, un contact, un événement, un paiement… Le formulaire écrit le contenu sous la forme que lisent les téléphones.',
        '<b>Design it</b> in the <b>Design</b> tab: colors and gradient, the shape of the modules and of the three eyes, a logo, a caption and a frame.':
            '<b>Décorez-le</b> dans l’onglet <b>Design</b> : couleurs et dégradé, forme des modules et des trois yeux, un logo, une légende et un cadre.',
        'The <b>code</b> on the left is the whole QR document: design lines <code>key: value</code>, a line <code>---</code>, then the content exactly as it goes into the code. You can type there too; every change is one step for Undo.':
            'Le <b>code</b> à gauche est le document QR complet : des lignes de design <code>key: value</code>, une ligne <code>---</code>, puis le contenu exactement tel qu’il entre dans le code. Vous pouvez aussi y taper ; chaque modification forme une seule étape pour Annuler.',
        '<b>Check</b>: after every change the editor reads the code back - normal, small and blurred. The badge above the code says whether it scans; the <b>Check</b> tab shows contrast, quiet zone, the logo against the error correction and the print size.':
            '<b>Vérifier</b> : après chaque modification, l’éditeur relit le code - normal, petit et flou. L’indicateur au-dessus du code dit s’il est lisible ; l’onglet <b>Vérifier</b> montre le contraste, la zone de silence, la taille du logo par rapport à la correction d’erreur et la taille d’impression.',
        'Click the <b>caption</b> under the code to change it right there.':
            'Cliquez sur la <b>légende</b> sous le code pour la modifier directement.',
        '<b>Export</b> makes SVG, PDF and EPS (vectors for print), PNG, JPEG or WebP up to 8192 pixels wide, and <b>many codes at once</b> from a table: write <code>{{column}}</code> in the content, paste the table, download a ZIP or one PDF.':
            '<b>Exporter</b> crée du SVG, du PDF et de l’EPS (vectoriels pour l’impression), du PNG, du JPEG ou du WebP jusqu’à 8192 pixels de large, et <b>plusieurs codes à la fois</b> depuis un tableau : écrivez <code>{{column}}</code> dans le contenu, collez le tableau, téléchargez un ZIP ou un seul PDF.',
        '<b>Read a code</b>: open, drop or paste a picture, or click <b>Read code</b> for the camera. The content becomes a new document.':
            '<b>Lire un code</b> : ouvrez, déposez ou collez une image, ou cliquez sur <b>Lire le code</b> pour la caméra. Le contenu devient un nouveau document.',
    },

    patterns: [
        /* ---------- Problems with values ---------- */
        ['^Unknown key "(.+)" - it is kept, but has no effect$', 'Clé inconnue « $1 » - elle est conservée, mais n’a aucun effet'],
        ['^"(.+)" is set twice - the last line counts$', '« $1 » est défini deux fois - la dernière ligne compte'],
        ['^"([A-Za-z][A-Za-z0-9-]*): (.*)" is not valid \\((.*)\\) - the default is used$', (m, k, v, h) => `« ${k}: ${v} » n’est pas valide (${translateHint(h)}) - la valeur par défaut est utilisée`],
        ['^Contrast ([\\d.]+):1 between (\\S+) and the background is too low - scanners need at least 3:1, better 4\\.5:1 or more$',
            (m, r, c) => `Le contraste de ${formatDecimal(r)}:1 entre ${c} et le fond est trop faible - les lecteurs ont besoin d’au moins 3:1, mieux 4,5:1 ou plus`],
        ['^Contrast ([\\d.]+):1 between (\\S+) and the background is low - 4\\.5:1 or more scans reliably, also in poor light$',
            (m, r, c) => `Le contraste de ${formatDecimal(r)}:1 entre ${c} et le fond est faible - à partir de 4,5:1, le code se lit de façon fiable, même avec peu de lumière`],
        ['^A quiet zone of (\\d+) (?:module|modules) is too small - the standard asks for 4, with less than 2 many scanners fail$',
            (m, k) => `Une zone de silence de ${k} ${getPlural(k, 'module', 'modules')} est trop petite - la norme en demande 4, avec moins de 2 beaucoup de lecteurs échouent`],
        ['^The quiet zone has (\\d+) modules - the standard asks for 4 \\(a light frame of 4 modules around the code\\)$',
            'La zone de silence a $1 modules - la norme en demande 4 (une bordure claire de 4 modules autour du code)'],
        ['^The logo hides about (\\d+) % of the code, error correction (\\w) repairs at most (\\d+) % - make the logo smaller or choose error correction H$',
            'Le logo cache environ $1 % du code, la correction d’erreur $2 répare au plus $3 % - réduisez le logo ou choisissez la correction d’erreur H'],
        ['^The logo hides about (\\d+) % of the code, error correction (\\w) repairs at most (\\d+) % - little room is left for dirt and damage; H is safer$',
            'Le logo cache environ $1 % du code, la correction d’erreur $2 répare au plus $3 % - il reste peu de marge pour la saleté et les dégâts ; H est plus sûr'],
        ['^A logo takes away part of the code: error correction Q or H keeps it readable \\(now (\\w)\\)$',
            'Un logo masque une partie du code : la correction d’erreur Q ou H le garde lisible (actuellement $1)'],
        ['^The Swiss QR bill is drawn as its standard requires - (.+) (?:is|are) not used$',
            (m, keys) => `La QR-facture est dessinée comme l’exige sa norme - ${keys} ${keys.includes(',') ? 'ne sont pas utilisés' : 'n’est pas utilisé'}`],
        ['^An IBAN of (\\w\\w) has (\\d+) characters, this one (\\d+)$', 'Un IBAN de $1 a $2 caractères, celui-ci $3'],
        ['^(.+) is a link shortener or redirect service: the code works only as long as that service keeps the link - for printed codes put the real address in the code$',
            '$1 est un raccourcisseur de liens ou un service de redirection : le code ne fonctionne que tant que ce service garde le lien - pour les codes imprimés, mettez la vraie adresse dans le code'],
        ['^The SEPA code has (\\d+) bytes, at most 331 are allowed$', 'Le code SEPA a $1 octets, au plus 331 sont autorisés'],
        ['^Line (\\d+) has more than (\\d+) characters$', 'La ligne $1 a plus de $2 caractères'],
        ['^The Swiss QR bill has (\\d+) characters, at most 997 are allowed$', 'La QR-facture a $1 caractères, au plus 997 sont autorisés'],

        /* ---------- Content tab: the size line ---------- */
        ['^(\\d+) bytes? · version (\\d+) \\((\\d+) × (\\d+) modules\\)$', (m, b, v, w, h) => `${b} ${getPlural(b, 'octet', 'octets')} · version ${v} (${w} × ${h} modules)`],
        ['^(\\d+) bytes?$', (m, b) => `${b} ${getPlural(b, 'octet', 'octets')}`],

        /* ---------- Check tab ---------- */
        ['^- repairs about (\\d+) %$', '- répare environ $1 %'],
        ['^(\\d+) of (\\d+) bytes \\((\\d+) %\\)$', '$1 sur $2 octets ($3 %)'],
        ['^(\\d+) % of the modules$', '$1 % des modules'],
        ['^From ([\\d.]+) cm the code should be at least ([\\d.]+) cm wide\\.$', (m, a, b) => `À ${formatDecimal(a)} cm de distance, le code devrait mesurer au moins ${formatDecimal(b)} cm de large.`],
        ['^At ([\\d.]+) mm one module is ([\\d.]+) mm ✓$', (m, a, b) => `À ${formatDecimal(a)} mm, un module mesure ${formatDecimal(b)} mm ✓`],
        ['^At ([\\d.]+) mm one module is ([\\d.]+) mm - below 0\\.4 mm many phones fail; print it larger !$',
            (m, a, b) => `À ${formatDecimal(a)} mm, un module mesure ${formatDecimal(b)} mm - sous 0,4 mm, beaucoup de téléphones échouent ; imprimez-le plus grand !`],

        /* ---------- Texts written before the dictionaries arrived ---------- */
        ['^(\\d+) (?:line|lines) · (.+)$', (m, k, s) => `${k} ${getPlural(k, 'ligne', 'lignes')} · ${formatSize(s)}`],
        ['^"(.+)" is open\\. My documents: open, rename, duplicate or delete your documents \\(Ctrl\\+O\\)$', '« $1 » est ouvert. Mes documents : ouvrir, renommer, dupliquer ou supprimer vos documents (Ctrl+O)'],

        /* ---------- Messages ---------- */
        [`^(${TYPE_RE}) - "Undo" brings the previous content back$`, (m, ty) => `${TYPES[ty]} - « Annuler » rétablit le contenu précédent`],

        /* ---------- My documents ---------- */
        ['^(\\d+) (?:document|documents) · (.+) in this browser$', (m, k, s) => `${k} ${getPlural(k, 'document', 'documents')} · ${formatSize(s)} dans ce navigateur`],
        ['^No document named "(.*)"\\.$', 'Aucun document nommé « $1 ».'],
        ['^Open now · (.+)$', (m, s) => `Ouvert maintenant · ${formatSize(s)}`],
        ['^(just now|yesterday|\\d+ min ago|\\d+ h ago|[A-Z][a-z]{2} \\d{1,2}, \\d{4}) · (.+)$', (m, w, s) => `${formatTime(w)} · ${formatSize(s)}`],
        ['^(.+) \\(open now\\)$', '$1 (ouvert maintenant)'],
        ['^ZIP with (\\d+) (?:document|documents) downloaded$', (m, k) => `ZIP de ${k} ${getPlural(k, 'document', 'documents')} téléchargé`],
        ['^"(.+)" duplicated$', '« $1 » dupliqué'],
        ['^Delete "(.+)"\\?$', 'Supprimer « $1 » ?'],
        ['^"(.+)" deleted$', '« $1 » supprimé'],

        /* ---------- AI Assistant ---------- */
        ['^Part (\\d+) of (\\d+) received$', 'Partie $1 sur $2 reçue'],
        ['^Open the other (?:link|links) from the AI too \\(still missing: part (.+)\\)\\.$', 'Ouvrez aussi les autres liens de l’IA (il manque encore : partie $1).'],
        ['^Part (\\d+) of (\\d+) received - paste the other (?:link|links) too \\(missing: (.+)\\)$', 'Partie $1 sur $2 reçue - collez aussi les autres liens (il manque : $3)'],
        ['^The AI sends the document to (.+) with a key that only works for this session\\. What you paste into your AI is handled by its provider\\.$',
            'L’IA envoie le document à $1 avec une clé valable uniquement pour cette session. Ce que vous collez dans votre IA est traité par son fournisseur.'],
        ['^The AI sends its result to (.+) by itself, and it opens here\\. If it answers with a link, paste its answer below\\.$',
            'L’IA envoie elle-même son résultat à $1, et il s’ouvre ici. Si elle répond par un lien, collez sa réponse ci-dessous.'],
        ['^No key from (.+) - the prompt asks the AI for a link instead$', 'Pas de clé de $1 - le prompt demande plutôt un lien à l’IA'],
        ['^Prompt copied - the AI sends its result to (.+)$', 'Prompt copié - l’IA envoie son résultat à $1'],

        /* ---------- Messages put together from translated fragments: French quotes, agreement ---------- */
        ['^"(.+)" est ouvert\\. (Mes documents : .+)$', '« $1 » est ouvert. $2'],
        ['^Nouveau document "(.+)" - (vos autres documents se trouvent sous « Mes documents »)$', 'Nouveau document « $1 » - $2'],
        ['^Nouveau document "(.+)" (de l’IA - vos autres documents sont inchangés)$', 'Nouveau document « $1 » $2'],
        ['^"(.+)" (ouvert|ouvert - il se trouve maintenant dans « Mes documents »|n’est ni un fichier \\.qr ni une image|modifié par l’IA - « Annuler » l’annule)$', '« $1 » $2'],
        ['^Aucun QR code trouvé dans "(.+)"$', (m, l) => `Aucun QR code trouvé dans ${formatQuoted(l)}`],
        ['^QR code lu \\((.+?)\\) depuis "(.+)" - c’est un nouveau document$', (m, ty, l) => `QR code lu (${ty}) depuis ${formatQuoted(l)} - c’est un nouveau document`],
        ['^1 code créés(.*)$', '1 code créé$1'],
        ['^(Espaces réservés dans le document|Absents du tableau|Omises \\(contenu trop long\\)): (.*)$', '$1 : $2'],
        ['^(\\d+) (ligne|lignes) · ([\\d.]+ K?B)$', (m, k, w, s) => `${k} ${w} · ${formatSize(s)}`],
        ['^(\\d+) × (\\d+) pixels = ([\\d.]+) mm à (\\d+) dpi$', (m, w, h, mm, d) => `${w} × ${h} pixels = ${formatDecimal(mm)} mm à ${d} dpi`],
        ['^Un module ([\\d.]+) mm(.*)$', (m, a, rest) => `Un module ${formatDecimal(a)} mm${rest}`],

        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Ouvrir $1'],
    ],
};
