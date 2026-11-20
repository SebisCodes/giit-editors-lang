/* French texts of the SVG editor: the bar, the canvas and its tools, the
   properties and layers, the dialogs (export, my drawings, AI, server, help),
   the color picker and the messages. What all editors share is in
   common.js; how the dictionaries are used is described in i18n.js.
   Names of drawings and elements are kept as they are and shown in «…». */

/* Names of the element types (LABELS in app.js). */
const LABEL = {
    'Drawing': 'Dessin', 'Rectangle': 'Rectangle', 'Circle': 'Cercle', 'Ellipse': 'Ellipse', 'Line': 'Ligne',
    'Polyline': 'Ligne brisée', 'Polygon': 'Polygone', 'Path': 'Tracé', 'Text': 'Texte', 'Group': 'Groupe', 'Image': 'Image',
    'Reused element': 'Élément réutilisé', 'Nested SVG': 'SVG imbriqué', 'Link': 'Lien',
    'Embedded content': 'Contenu intégré', 'Definitions': 'Définitions', 'Linear gradient': 'Dégradé linéaire',
    'Radial gradient': 'Dégradé radial', 'Gradient stop': 'Point de dégradé', 'Clip path': 'Tracé de détourage',
    'Mask': 'Masque', 'Pattern': 'Motif', 'Symbol': 'Symbole', 'Style sheet': 'Feuille de style', 'Title': 'Titre',
    'Description': 'Description', 'Filter': 'Filtre', 'Marker': 'Marqueur', 'Switch': 'Alternative (switch)', 'Metadata': 'Métadonnées',
    'Script': 'Script',
};
/**
 * Translates the text the pattern found (lab in the English pattern).
 * @param {string} n - the English text the pattern found.
 * @returns {string} the text in the language.
 */
const translateLabel = n => LABEL[n] || n;
/* An element type in English, or a tag name the editor has no name for. */
const TYPE = `((?:${Object.keys(LABEL).join('|')}|[a-z][\\w:.-]*))`;
const TYPE_ANY = TYPE.slice(1, -1);       // the same without capturing it

/* The line at the bottom left of the canvas (HINTS and TOUCH_HINTS in app.js). */
const HINT = {
    'Click a shape to select it. Drag an empty spot to move the view.': 'Cliquez sur une forme pour la sélectionner. Faites glisser un endroit vide pour déplacer la vue.',
    'Drag the shape to move it, or a small square to resize it. Delete key removes it.': 'Faites glisser la forme pour la déplacer, ou un petit carré pour la redimensionner. La touche Suppr la supprime.',
    'Drag to move the view. Use the mouse wheel to zoom.': 'Faites glisser pour déplacer la vue. Utilisez la molette de la souris pour zoomer.',
    'Drag to draw a rectangle. Hold Shift for a square.': 'Faites glisser pour dessiner un rectangle. Maintenez Shift pour un carré.',
    'Drag to draw an ellipse. Hold Shift for a circle.': 'Faites glisser pour dessiner une ellipse. Maintenez Shift pour un cercle.',
    'Drag to draw a line. Hold Shift for straight angles.': 'Faites glisser pour dessiner une ligne. Maintenez Shift pour des angles droits.',
    'Hold the mouse button down and draw.': 'Maintenez le bouton de la souris enfoncé et dessinez.',
    'Click where the text should start.': 'Cliquez là où le texte doit commencer.',
    'Tap a shape to select it. Swipe to scroll.': 'Touchez une forme pour la sélectionner. Balayez pour faire défiler.',
    'Drag it to move, drag a square to resize.': 'Faites-la glisser pour la déplacer, faites glisser un carré pour la redimensionner.',
    'Drag to move the view, pinch to zoom.': 'Faites glisser pour déplacer la vue, pincez pour zoomer.',
    'Drag to draw a rectangle.': 'Faites glisser pour dessiner un rectangle.',
    'Drag to draw an ellipse.': 'Faites glisser pour dessiner une ellipse.',
    'Drag to draw a line.': 'Faites glisser pour dessiner une ligne.',
    'Draw with your finger.': 'Dessinez avec le doigt.',
    'Tap where the text should start.': 'Touchez là où le texte doit commencer.',
};

/* The editor's own messages about the code (parse() in export.js); the browser's messages stay as they are. */
const CODE_ERROR = {
    'The outermost element must be <svg>.': 'L’élément le plus extérieur doit être <svg>.',
    'The <svg> element is missing xmlns="http://www.w3.org/2000/svg".': 'Il manque xmlns="http://www.w3.org/2000/svg" à l’élément <svg>.',
};

/* "1,234 bytes" -> "1 234 octets" (narrow no-break space); "546 B" / "1.5 KB" -> "546 o" / "1,5 Ko" */
/**
 * Translates a size ("1,234 bytes", "546 B", "1.5 KB").
 * @param {string} s - the English size text.
 * @returns {string} the text in the language.
 */
const formatBytes = s => s.replace(/^([\d,]+) bytes$/, (m, n) => `${n.replace(/,/g, ' ')} octets`)
    .replace(/^([\d.]+) (K|M)?B$/, (m, n, u) => `${n.replace('.', ',')} ${u || ''}o`);
const MONTH = { Jan: 'janv.', Feb: 'févr.', Mar: 'mars', Apr: 'avr.', May: 'mai', Jun: 'juin', Jul: 'juil.', Aug: 'août', Sep: 'sept.', Oct: 'oct.', Nov: 'nov.', Dec: 'déc.' };
/* French: 0 and 1 take the singular */
/**
 * Translates the text the pattern found (drawings in the English pattern).
 * @param {string} n - the English text the pattern found.
 * @returns {string} the text in the language.
 */
const translateDrawings = n => (+n < 2 ? 'dessin' : 'dessins');

export default {
    text: {
        ...LABEL,
        ...HINT,
        ...CODE_ERROR,

        // Top bar
        'SVG Editor': 'Éditeur SVG',
        'SVG Editor - home': 'Éditeur SVG - accueil',
        'File': 'Fichier',
        'My drawings': 'Mes dessins',
        'My drawings (Ctrl+O)': 'Mes dessins (Ctrl+O)',
        'New drawing, or start this one over': 'Nouveau dessin, ou recommencer celui-ci',
        'New': 'Nouveau',
        'New blank drawing': 'Nouveau dessin vide',
        'Your other drawings stay as they are': 'Vos autres dessins restent tels quels',
        'New from the example': 'Nouveau à partir de l’exemple',
        'A copy of the editor logo to try things out': 'Une copie du logo de l’éditeur pour faire des essais',
        'Start this drawing over': 'Recommencer ce dessin',
        'Empties it but keeps its size - "Undo" brings it back': 'Le vide mais garde sa taille - « Annuler » le rétablit',
        'Open an SVG file from your computer as a new drawing (you can also drag a file into the window)':
            'Ouvrir un fichier SVG de votre ordinateur comme nouveau dessin (vous pouvez aussi glisser un fichier dans la fenêtre)',
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
        'Let any AI draw in this editor': 'Laisser n’importe quelle IA dessiner dans cet éditeur',
        'AI Assistant': 'Assistant IA',
        'Save to your own server and embed the editor in your website':
            'Enregistrer sur votre propre serveur et intégrer l’éditeur dans votre site web',
        'Save to server': 'Enregistrer sur un serveur',
        'How it works and keyboard shortcuts (?)': 'Fonctionnement et raccourcis clavier (?)',
        'Help': 'Aide',
        'Save the drawing as an .svg file (Ctrl+S)': 'Enregistrer le dessin en fichier .svg (Ctrl+S)',
        'Download SVG': 'Télécharger le SVG',
        'Save as PNG, JPG, WebP, data URI, React and more (Ctrl+E)': 'Enregistrer en PNG, JPG, WebP, URI de données, React et plus (Ctrl+E)',
        'Export…': 'Exporter…',

        // View tabs and the code
        'View': 'Affichage',
        'Edit': 'Modifier',
        'Side panel': 'Panneau latéral',
        'Canvas': 'Canevas',
        'Properties': 'Propriétés',
        'SVG code': 'Code SVG',
        'Copy the SVG code to the clipboard': 'Copier le code SVG dans le presse-papiers',
        'Copy code': 'Copier le code',
        'Copy': 'Copier',
        'Indent and arrange the code neatly': 'Indenter et disposer proprement le code',
        'Tidy up': 'Mettre en ordre',
        'Remove comments and spaces to make the file smaller': 'Supprimer les commentaires et les espaces pour alléger le fichier',
        'Shrink': 'Réduire',
        'Drag to change the width of the code area': 'Faire glisser pour modifier la largeur de la zone de code',
        'Drag to change the width': 'Faire glisser pour modifier la largeur',
        'Error in the code.': 'Erreur dans le code.',
        'The preview shows the last working version.': 'L’aperçu montre la dernière version fonctionnelle.',
        'The preview shows the last working version': 'L’aperçu montre la dernière version fonctionnelle',
        'Add xmlns': 'Ajouter xmlns',

        // Tools, grid, view
        'Tools': 'Outils',
        'Select and move shapes (V)': 'Sélectionner et déplacer des formes (V)',
        'Select': 'Sélectionner',
        'Move the view (H, or hold the space bar)': 'Déplacer la vue (H, ou maintenir la barre d’espace)',
        'Move the view': 'Déplacer la vue',
        'Draw a rectangle (R)': 'Dessiner un rectangle (R)',
        'Draw an ellipse or circle (E)': 'Dessiner une ellipse ou un cercle (E)',
        'Draw a line (L)': 'Dessiner une ligne (L)',
        'Draw freehand (P)': 'Dessiner à main levée (P)',
        'Freehand': 'Main levée',
        'Add text (T)': 'Ajouter du texte (T)',
        'Show the grid and snap shapes to it (#)': 'Afficher la grille et y aimanter les formes (#)',
        'Grid': 'Grille',
        'Distance between grid lines, in the drawing\'s units': 'Distance entre les lignes de la grille, dans les unités du dessin',
        'Spacing': 'Espacement',
        'Shapes jump onto the grid lines when moved or drawn (G)': 'Les formes sautent sur les lignes de la grille quand on les déplace ou les dessine (G)',
        'Snap': 'Aimanter',
        'Canvas: click shapes, drag them, resize them with the handles': 'Canevas : cliquez sur les formes, faites-les glisser, redimensionnez-les avec les poignées',
        'Background of the preview': 'Fond de l’aperçu',
        'Background behind the drawing (only for viewing, not saved in the file)': 'Fond derrière le dessin (seulement pour l’affichage, pas enregistré dans le fichier)',
        'Checkered background': 'Fond en damier',
        'White background': 'Fond blanc',
        'Dark background': 'Fond sombre',
        'No background': 'Sans fond',
        'Zoom out (-)': 'Zoom arrière (-)',
        'Zoom out': 'Zoom arrière',
        'Show at actual size (1)': 'Afficher en taille réelle (1)',
        'Zoom in (+)': 'Zoom avant (+)',
        'Zoom in': 'Zoom avant',
        'Fit the drawing into the window (0)': 'Ajuster le dessin à la fenêtre (0)',
        'Fit to window': 'Ajuster à la fenêtre',
        'Fix the error in the code to edit the shapes again.': 'Corrigez l’erreur dans le code pour modifier à nouveau les formes.',

        // Properties
        'Colors, size and position of the selected shape': 'Couleurs, taille et position de la forme sélectionnée',
        'All elements of the drawing as a list': 'Tous les éléments du dessin sous forme de liste',
        'Layers': 'Calques',
        'The code contains an error. Once it is fixed, the shapes can be edited here again.':
            'Le code contient une erreur. Une fois l’erreur corrigée, les formes pourront à nouveau être modifiées ici.',
        'No valid SVG loaded.': 'Aucun SVG valide chargé.',
        'Position in the document': 'Position dans le document',
        'Document': 'Document',
        'Width': 'Largeur',
        'Height': 'Hauteur',
        'x y width height': 'x y largeur hauteur',
        'Click a shape on the canvas or in the Layers list to edit it. Alt+click selects the surrounding group.':
            'Cliquez sur une forme du canevas ou de la liste des calques pour la modifier. Alt+clic sélectionne le groupe qui l’entoure.',
        'Colors for new shapes': 'Couleurs des nouvelles formes',
        'Fill': 'Remplissage',
        'Outline': 'Contour',
        'Outline width': 'Épaisseur du contour',
        'None': 'Aucune',
        'Fill color of new shapes': 'Couleur de remplissage des nouvelles formes',
        'Outline color of new shapes': 'Couleur de contour des nouvelles formes',
        'Outline width of new shapes': 'Épaisseur du contour des nouvelles formes',
        'Fill color · new shapes': 'Remplissage · nouvelles formes',
        'Outline color · new shapes': 'Contour · nouvelles formes',
        'Pick the fill color': 'Choisir la couleur de remplissage',
        'Pick the outline color': 'Choisir la couleur de contour',
        'Fill color': 'Couleur de remplissage',
        'Outline color': 'Couleur de contour',
        'Fill color as text': 'Couleur de remplissage en texte',
        'Outline color as text': 'Couleur de contour en texte',
        'Color as text, e.g. #ff0000, red or none': 'Couleur en texte, p. ex. #ff0000, red ou none',
        'No fill': 'Sans remplissage',
        'No outline': 'Sans contour',
        'Uses a gradient or pattern - picking a color replaces it.': 'Utilise un dégradé ou un motif - choisir une couleur le remplace.',
        'Opacity': 'Opacité',
        'Overall opacity': 'Opacité globale',
        'Line style': 'Style de ligne',
        'solid': 'continu',
        'dashed': 'tirets',
        'dotted': 'pointillé',
        'dash-dot': 'tiret-point',
        'Line ends': 'Extrémités',
        'default': 'par défaut',
        'flat': 'plates',
        'round': 'arrondies',
        'square': 'carrées',
        'Corners': 'Angles',
        'sharp': 'vifs',
        'beveled': 'biseautés',
        'This text contains further elements (e.g. tspan) - please edit it in the code.':
            'Ce texte contient d’autres éléments (p. ex. tspan) - modifiez-le dans le code.',
        'Size': 'Taille',
        'Weight': 'Graisse',
        'light': 'maigre',
        'normal': 'normal',
        'semi-bold': 'demi-gras',
        'bold': 'gras',
        'black': 'ultra-gras',
        'Font': 'Police',
        'Alignment': 'Alignement',
        'left': 'gauche',
        'center': 'centre',
        'right': 'droite',
        'Position and size': 'Position et taille',
        'Left edge': 'Bord gauche',
        'Top edge': 'Bord supérieur',
        'W': 'L',
        'Rotate 15° to the left': 'Rotation de 15° vers la gauche',
        'Rotate 15° to the right': 'Rotation de 15° vers la droite',
        '⟲ Rotate left': '⟲ Tourner à gauche',
        '⟳ Rotate right': '⟳ Tourner à droite',
        'Mirror left to right': 'Miroir de gauche à droite',
        'Mirror top to bottom': 'Miroir de haut en bas',
        '⇆ Flip horizontal': '⇆ Retourner horizontalement',
        '⇅ Flip vertical': '⇅ Retourner verticalement',
        'Arrange': 'Disposer',
        'Shapes further down in the code are drawn on top.': 'Les formes placées plus bas dans le code sont dessinées par-dessus.',
        'One step forward (Ctrl+↑)': 'Avancer d’un cran (Ctrl+↑)',
        'One step backward (Ctrl+↓)': 'Reculer d’un cran (Ctrl+↓)',
        'Bring to front (Ctrl+Shift+↑)': 'Mettre au premier plan (Ctrl+Shift+↑)',
        'Send to back (Ctrl+Shift+↓)': 'Mettre à l’arrière-plan (Ctrl+Shift+↓)',
        '↑ Forward': '↑ Avancer',
        '↓ Backward': '↓ Reculer',
        '⤒ To front': '⤒ Premier plan',
        '⤓ To back': '⤓ Arrière-plan',
        'Make a copy (Ctrl+D)': 'Faire une copie (Ctrl+D)',
        'Remove this shape (Delete key)': 'Supprimer cette forme (touche Suppr)',
        '⧉ Duplicate': '⧉ Dupliquer',
        '✕ Delete': '✕ Supprimer',
        'All attributes (advanced)': 'Tous les attributs (avancé)',
        'Remove attribute': 'Supprimer l’attribut',
        'Value': 'Valeur',
        'New attribute: name': 'Nouvel attribut : nom',
        'New attribute: value': 'Nouvel attribut : valeur',
        'Add attribute': 'Ajouter l’attribut',
        'Invalid attribute name': 'Nom d’attribut invalide',
        'The attribute could not be set': 'L’attribut n’a pas pu être défini',

        // Layers
        'Every element of the drawing. Shapes higher in the list are drawn on top. Click to select, drag to reorder (drop onto a group to put it inside), double-click to rename. The eye hides a shape.':
            'Chaque élément du dessin. Les formes placées plus haut dans la liste sont dessinées par-dessus. Cliquez pour sélectionner, faites glisser pour réordonner (déposez sur un groupe pour l’y placer), double-cliquez pour renommer. L’œil masque une forme.',
        'Show': 'Afficher',
        'Hide': 'Masquer',
        'One step forward': 'Avancer d’un cran',
        'One step backward': 'Reculer d’un cran',
        'Duplicate': 'Dupliquer',
        'Delete': 'Supprimer',
        'Name (id)': 'Nom (id)',
        'Name of the element (id)': 'Nom de l’élément (id)',
        'A group cannot be moved into itself': 'Un groupe ne peut pas être déplacé dans lui-même',
        'This element cannot hold other shapes': 'Cet élément ne peut pas contenir d’autres formes',
        'Use letters, digits, - and _ only, starting with a letter': 'Uniquement des lettres, des chiffres, - et _, en commençant par une lettre',

        // Messages
        'The browser storage is full': 'Le stockage du navigateur est plein',
        'The browser storage is full - download and delete drawings under "My drawings"':
            'Le stockage du navigateur est plein - téléchargez et supprimez des dessins sous « Mes dessins »',
        'The browser storage is full - delete or download drawings under "My drawings" first':
            'Le stockage du navigateur est plein - supprimez ou téléchargez d’abord des dessins sous « Mes dessins »',
        'The browser storage is full - delete or download some drawings first':
            'Le stockage du navigateur est plein - supprimez ou téléchargez d’abord quelques dessins',
        'Nothing to undo': 'Rien à annuler',
        'Nothing to redo': 'Rien à rétablir',
        'Please fix the error in the code first': 'Corrigez d’abord l’erreur dans le code',
        'Deleted - Undo brings it back': 'Supprimé - Annuler le rétablit',
        'Already at the front': 'Déjà au premier plan',
        'Already at the back': 'Déjà à l’arrière-plan',
        'Grid on - shapes snap to the grid': 'Grille activée - les formes s’aimantent à la grille',
        'Grid off': 'Grille désactivée',
        'Snap to grid: on': 'Aimanter à la grille : activé',
        'Snap to grid: off - shapes move freely': 'Aimanter à la grille : désactivé - les formes bougent librement',
        'Code tidied up': 'Code mis en ordre',
        'This drawing is empty already': 'Ce dessin est déjà vide',
        'Everything in this drawing is removed; its size stays. "Undo" brings it back as long as the page is open.':
            'Tout le contenu de ce dessin est supprimé ; sa taille reste. « Annuler » le rétablit tant que la page est ouverte.',
        'Start over': 'Recommencer',
        'Please choose an SVG file': 'Choisissez un fichier SVG',
        'The file is larger than 8 MB': 'Le fichier dépasse 8 Mo',
        'SVG pasted from the clipboard': 'SVG collé depuis le presse-papiers',
        'Downloaded': 'Téléchargé',
        'Copied to the clipboard': 'Copié dans le presse-papiers',
        'This browser does not allow copying images': 'Ce navigateur ne permet pas de copier des images',
        'Code copied': 'Code copié',
        'SVG downloaded': 'SVG téléchargé',
        'The image came out empty.': 'L’image est vide.',
        'The drawing could not be rendered as an image.': 'Le dessin n’a pas pu être rendu en image.',
        'Add': 'Ajouter',
        'Replace': 'Remplacer',
        'The drawing has no closing </svg> - the new shapes could not be added':
            'Le dessin n’a pas de </svg> de fermeture - les nouvelles formes n’ont pas pu être ajoutées',
        'Drawing received - it has an error, see the code': 'Dessin reçu - il contient une erreur, voir le code',
        'Drop the SVG file here': 'Déposez ici le fichier SVG',

        // A link from the AI opened in a tab of its own (ai.js)
        'Open it here': 'L’ouvrir ici',
        'The link could not be read': 'Le lien n’a pas pu être lu',
        'The drawing in this link is incomplete or damaged. If the AI\'s link was split over several lines (as in a terminal), copy the whole answer and paste it into the editor with Ctrl+V - the editor joins the lines.':
            'Le dessin de ce lien est incomplet ou endommagé. Si le lien de l’IA a été coupé sur plusieurs lignes (comme dans un terminal), copiez toute la réponse et collez-la dans l’éditeur avec Ctrl+V - l’éditeur réunit les lignes.',
        'Loading…': 'Chargement…',
        'Taken over by your editor': 'Reçu par votre éditeur',
        'The drawing is now in the SVG Editor tab you already had open. Switch to that tab, or open it here.':
            'Le dessin se trouve maintenant dans l’onglet de l’éditeur SVG que vous aviez déjà ouvert. Passez à cet onglet ou ouvrez-le ici.',

        // Dialogs: shared
        'Close': 'Fermer',

        // Export
        'Export': 'Exporter',
        'File name': 'Nom du fichier',
        'Vector (sharp at any size)': 'Vectoriel (net à toute taille)',
        'SVG as in the editor': 'SVG tel que dans l’éditeur',
        'SVG tidied up': 'SVG mis en ordre',
        'SVG shrunk (smallest file)': 'SVG réduit (fichier le plus petit)',
        'Picture': 'Image',
        'PNG (transparent background)': 'PNG (fond transparent)',
        'Code for websites': 'Code pour sites web',
        'Data URI': 'URI de données',
        'Base64 data URI': 'URI de données Base64',
        'CSS background-image': 'CSS background-image',
        'HTML <img> tag': 'Balise HTML <img>',
        'React component (JSX)': 'Composant React (JSX)',
        '1× (actual size)': '1× (taille réelle)',
        'custom': 'personnalisé',
        'Width (px)': 'Largeur (px)',
        'Height (px)': 'Hauteur (px)',
        'Background': 'Fond',
        'Background color': 'Couleur de fond',
        'Background color · exported image': 'Couleur de fond · image exportée',
        'Width and height stay in proportion. JPG has no transparency, so it always gets a background.':
            'La largeur et la hauteur restent proportionnelles. Le JPG ne gère pas la transparence : il a toujours un fond.',
        'Result': 'Résultat',
        'Download every format at once: SVG (3 variants), PNG, JPG, WebP, React, data URI, Base64, CSS and HTML':
            'Télécharger tous les formats d’un coup : SVG (3 variantes), PNG, JPG, WebP, React, URI de données, Base64, CSS et HTML',
        'All formats (ZIP)': 'Tous les formats (ZIP)',
        'Download': 'Télécharger',

        // My drawings
        'Search by name': 'Rechercher par nom',
        'Search your drawings': 'Rechercher dans vos dessins',
        'Open an SVG file from your computer as a new drawing': 'Ouvrir un fichier SVG de votre ordinateur comme nouveau dessin',
        'New drawing': 'Nouveau dessin',
        'Click a drawing to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Cliquez sur un dessin pour l’ouvrir. Ils sont conservés uniquement dans ce navigateur - rien n’est envoyé. Effacer les données de site du navigateur les supprime : téléchargez ceux que vous voulez garder.',
        'Download every drawing as an .svg file in one ZIP': 'Télécharger tous les dessins en fichiers .svg dans un seul ZIP',
        'Download all (ZIP)': 'Tout télécharger (ZIP)',
        'No drawings yet.': 'Pas encore de dessins.',
        'Rename': 'Renommer',
        'Download as .svg': 'Télécharger en .svg',
        'This drawing is open': 'Ce dessin est ouvert',
        'Click to open this drawing': 'Cliquez pour ouvrir ce dessin',
        'New name': 'Nouveau nom',
        'The drawing is removed from this browser for good. Download it first if you want to keep a copy.':
            'Le dessin est définitivement supprimé de ce navigateur. Téléchargez-le d’abord si vous voulez en garder une copie.',

        // AI assistant
        'Any AI can draw with you - ChatGPT, Claude, Gemini, Copilot.': 'N’importe quelle IA peut dessiner avec vous - ChatGPT, Claude, Gemini, Copilot.',
        'Connected AI': 'IA connectée',
        'Paste it into your AI and say what it should draw.': 'Collez-le dans votre IA et dites-lui ce qu’elle doit dessiner.',
        // The step after "Copy prompt" inside another website (ai.js rewrites it): its parts
        'The AI answers with a link:': 'L’IA répond par un lien :',
        'paste its whole answer below': 'collez toute sa réponse ci-dessous',
        '(a clicked link opens a separate editor).': '(un lien cliqué ouvre un éditeur séparé).',
        'takes it back.': 'l’annule.',
        'The AI answers with a link: click it, or paste the whole answer below.': 'L’IA répond par un lien : cliquez dessus, ou collez toute la réponse ci-dessous.',
        'Connected to': 'Connecté à',
        'the AI sends its result there, and it opens here.': 'l’IA y envoie son résultat, et il s’ouvre ici.',
        '(no key yet)': '(pas encore de clé)',
        '(key valid while the editor is open)': '(clé valable tant que l’éditeur est ouvert)',
        'What': 'Ce que',
        'tells the AI': 'indique à l’IA',
        'The AI should': 'L’IA doit',
        'Change “': 'Modifier « ',          // Change “name” -> «name» ändern
        '”': ' »',
        'Make a new drawing': 'Créer un nouveau dessin',
        'The AI\'s answer (or press Ctrl+V anywhere):': 'La réponse de l’IA (ou Ctrl+V n’importe où) :',
        'The drawing travels in the link after the “#”, which no server sees. What you paste into your AI is handled by its provider.':
            'Le dessin voyage dans le lien après le « # », qu’aucun serveur ne voit. Ce que vous collez dans votre IA est traité par son fournisseur.',
        'The prompt - copy it with Ctrl+C': 'Le prompt - copiez-le avec Ctrl+C',
        'Copy prompt': 'Copier le prompt',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)': 'La copie n’est pas autorisée ici - le texte est sélectionné ci-dessous : appuyez sur Ctrl+C (⌘C)',
        'Prompt copied - paste it into your AI and say what it should draw': 'Prompt copié - collez-le dans votre IA et dites-lui ce qu’elle doit dessiner',
        'This link is incomplete or damaged - please ask the AI to send it again': 'Ce lien est incomplet ou endommagé - demandez à l’IA de le renvoyer',

        // Save to your server
        'Save to your server': 'Enregistrer sur votre serveur',
        'Webhook address': 'Adresse du webhook',
        'Send automatically a few seconds after each change (otherwise only when you click':
            'Envoyer automatiquement quelques secondes après chaque modification (sinon seulement quand vous cliquez sur',
        'or press Ctrl+S)': 'ou appuyez sur Ctrl+S)',
        'Only for “': 'Seulement pour « ',
        '” (other drawings use the general address)': ' » (les autres dessins utilisent l’adresse générale)',
        'What your server receives': 'Ce que reçoit votre serveur',
        'A POST request with JSON (your server must allow CORS from https://svg.giit.ch):':
            'Une requête POST avec du JSON (votre serveur doit autoriser CORS depuis https://svg.giit.ch) :',
        'Embed the editor in your website': 'Intégrer l’éditeur dans votre site web',
        'Send now': 'Envoyer maintenant',
        'Save setting': 'Enregistrer le réglage',

        // Help
        'How it works': 'Fonctionnement',
        'Keyboard shortcuts': 'Raccourcis clavier',
        'Select and move': 'Sélectionner et déplacer',
        'Rectangle, ellipse, line, freehand, text': 'Rectangle, ellipse, ligne, main levée, texte',
        'Zoom': 'Zoom',
        'Drag with the mouse wheel pressed': 'Faire glisser avec la molette enfoncée',
        'Double-click the mouse wheel': 'Double-cliquer avec la molette',
        'Fit to window / actual size': 'Ajuster à la fenêtre / taille réelle',
        'Grid on/off / snap on/off': 'Grille activée/désactivée / aimantation activée/désactivée',
        'Arrow keys': 'Touches fléchées',
        'Only horizontal/vertical, keep proportions': 'Seulement horizontal/vertical, garder les proportions',
        'Select the surrounding group': 'Sélectionner le groupe qui l’entoure',
        'Remove the selection': 'Supprimer la sélection',
        'Undo / redo': 'Annuler / rétablir',
        'Download SVG (or save to your server) / export': 'Télécharger le SVG (ou enregistrer sur votre serveur) / exporter',
        'Deselect': 'Désélectionner',

        // Color picker (colorpicker.js)
        'Color': 'Couleur',
        'Saturation and brightness (arrow keys)': 'Saturation et luminosité (touches fléchées)',
        'Hue': 'Teinte',
        'Before - click to go back': 'Avant - cliquez pour revenir',
        'New color': 'Nouvelle couleur',
        'Color as hex code, e.g. #ff0000': 'Couleur en code hexadécimal, p. ex. #ff0000',
        'Done': 'Terminé',
        'Colors in this drawing': 'Couleurs de ce dessin',
        'Basic colors': 'Couleurs de base',

        /* texts that stay the same in German (so they are not in the German pack), but not in French */
        'online': 'en ligne',
        'Token': 'Jeton',
        'Name': 'Nom',
    },

    html: {
        // AI assistant
        'Click <b>Copy prompt</b>.': 'Cliquez sur <b>Copier le prompt</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'L’IA répond par un lien : cliquez dessus, ou collez toute la réponse ci-dessous. <b>Annuler</b> l’annule.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'L’IA répond par un lien : <b>collez toute sa réponse ci-dessous</b> (un lien cliqué ouvre un éditeur séparé). <b>Annuler</b> l’annule.',

        // Save to your server
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your drawings are kept where you want them. Nothing is sent until you enter an address here.':
            'L’éditeur peut envoyer chaque version enregistrée à votre propre serveur (un <b>webhook</b>), pour que vos dessins soient conservés là où vous le souhaitez. Rien n’est envoyé tant que vous n’avez pas saisi d’adresse ici.',
        'Token <small>(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)</small>': 'Jeton <small>(facultatif, envoyé comme « Authorization: Bearer … » ; conservé jusqu’à la fermeture de cet onglet)</small>',
        'Also possible: <code>?src=&lt;URL of an .svg file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this drawing there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>svgeditor:ai</code>, <code>svgeditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Également possible : <code>?src=&lt;URL of an .svg file&gt;</code> ouvre un fichier, <code>&amp;webhook=&lt;URL&gt;</code> y enregistre ce dessin. L’éditeur peut aussi s’ouvrir dans sa propre fenêtre (<code>?embed=window</code>), et votre page peut lui transmettre son propre prompt d’IA et une clé de session pour que l’IA envoie son résultat à votre serveur (<code>svgeditor:ai</code>, <code>svgeditor:key-request</code>) - voir « Utiliser l’éditeur sur votre propre site web » sous l’éditeur. Les détails se trouvent dans <a href="/llms.txt">llms.txt</a>.',

        // Help
        '<b>Open</b> an SVG file, drag it into the window or paste SVG code - or start with <b>New</b>.':
            '<b>Ouvrez</b> un fichier SVG, glissez-le dans la fenêtre ou collez du code SVG - ou commencez par <b>Nouveau</b>.',
        '<b>My drawings</b> (the folder button at the top left) lists every drawing kept in this browser: open, rename, duplicate, download or delete them.':
            '<b>Mes dessins</b> (le bouton dossier en haut à gauche) liste tous les dessins conservés dans ce navigateur : les ouvrir, renommer, dupliquer, télécharger ou supprimer.',
        '<b>Click a shape</b> on the canvas. Drag it to move it, drag the small squares to resize it. Colors, size and position are under <b>Properties</b> on the right.':
            '<b>Cliquez sur une forme</b> du canevas. Faites-la glisser pour la déplacer, faites glisser les petits carrés pour la redimensionner. Couleurs, taille et position se trouvent sous <b>Propriétés</b> à droite.',
        '<b>Draw</b> new shapes with the tools above the canvas.': '<b>Dessinez</b> de nouvelles formes avec les outils au-dessus du canevas.',
        'The <b>code</b> on the left always shows the current drawing and can be edited directly.':
            'Le <b>code</b> à gauche montre toujours le dessin actuel et peut être modifié directement.',
        '<b>Download SVG</b> saves the file, <b>Export</b> offers pictures (PNG, JPG) and code for websites.':
            '<b>Télécharger le SVG</b> enregistre le fichier, <b>Exporter</b> propose des images (PNG, JPG) et du code pour sites web.',
        'Made a mistake? <b>Undo</b> takes back every step. Your drawings are kept in this browser, even after closing the page.':
            'Une erreur ? <b>Annuler</b> revient sur chaque étape. Vos dessins sont conservés dans ce navigateur, même après la fermeture de la page.',
        '<kbd>H</kbd> / hold <kbd>Space</kbd>': '<kbd>H</kbd> / maintenir <kbd>Espace</kbd>',
        'Mouse wheel, <kbd>+</kbd> <kbd>-</kbd>': 'Molette de la souris, <kbd>+</kbd> <kbd>-</kbd>',
        'Move the selection by 1, with <kbd>Shift</kbd> by 10': 'Déplacer la sélection de 1, avec <kbd>Shift</kbd> de 10',
        '<kbd>Shift</kbd> while dragging': '<kbd>Shift</kbd> pendant le glissement',
        '<kbd>Alt</kbd> + click': '<kbd>Alt</kbd> + clic',
        '<kbd>Delete</kbd>': '<kbd>Suppr</kbd>',
        'Forward / backward (with <kbd>Shift</kbd>: to front / to back)': 'Avancer / reculer (avec <kbd>Shift</kbd> : premier plan / arrière-plan)',
        'In the code: <kbd>Tab</kbd> indents, <kbd>Shift</kbd>+<kbd>Tab</kbd> outdents, clicking into a tag selects that shape on the canvas.':
            'Dans le code : <kbd>Tab</kbd> indente, <kbd>Shift</kbd>+<kbd>Tab</kbd> désindente, un clic dans une balise sélectionne cette forme sur le canevas.',
    },

    patterns: [
        // Canvas hint with the grid
        ['^(.*?) ?Snapping to a ([\\d.]+) grid\\.$', (m, h, n) => `${h ? (HINT[h] || h) + ' ' : ''}Aimanté à la grille (${n}).`],
        ['^(.*?) ?Snap: ([\\d.]+)\\.$', (m, h, n) => `${h ? (HINT[h] || h) + ' ' : ''}Aimantation : ${n}.`],

        // Code
        ['^(\\d+) lines · (.+)$', (m, n, s) => `${n} ${+n < 2 ? 'ligne' : 'lignes'} · ${formatBytes(s)}`],
        ['^Line (\\d+), column (\\d+): (.*)$', (m, l, c, t) => `Ligne ${l}, colonne ${c} : ${CODE_ERROR[t] || t}`],
        ['^Line (\\d+): (.*)$', (m, l, t) => `Ligne ${l} : ${CODE_ERROR[t] || t}`],
        ['^File shrunk: (\\d+) → (\\d+) bytes$', 'Fichier réduit : $1 → $2 octets'],

        // Properties
        [`^(Fill|Outline) color · (whole drawing|${TYPE_ANY})( #.+)?$`, (m, w, t, id) =>
            `${w === 'Fill' ? 'Remplissage' : 'Contour'} · ${t === 'whole drawing' ? 'tout le dessin' : translateLabel(t)}${id || ''}`],
        ['^(.+) \\(inherited\\)$', '$1 (hérité)'],
        ['^Remove ([A-Za-z_:][\\w:.-]*)$', 'Supprimer $1'],

        // Layers
        ['^<([^>]+)> - click to select, double-click to rename, drag to reorder$', '<$1> - clic pour sélectionner, double-clic pour renommer, glisser pour réordonner'],
        ['^<([^>]+)> - click to select$', '<$1> - clic pour sélectionner'],
        [`^Show ${TYPE}$`, (m, t) => `Afficher : ${translateLabel(t)}`],
        [`^Hide ${TYPE}$`, (m, t) => `Masquer : ${translateLabel(t)}`],
        [`^Move ${TYPE} forward$`, (m, t) => `Avancer : ${translateLabel(t)}`],
        [`^Move ${TYPE} backward$`, (m, t) => `Reculer : ${translateLabel(t)}`],
        [`^Duplicate ${TYPE}$`, (m, t) => `Dupliquer : ${translateLabel(t)}`],
        [`^Delete ${TYPE}$`, (m, t) => `Supprimer : ${translateLabel(t)}`],
        ['^The name “(.+)” is already used$', 'Le nom « $1 » est déjà utilisé'],

        // The open drawing
        ['^"(.+)" is open\\. My drawings: open, rename, duplicate or delete your drawings \\(Ctrl\\+O\\)$',
            '« $1 » est ouvert. Mes dessins : ouvrir, renommer, dupliquer ou supprimer vos dessins (Ctrl+O)'],
        ['^Start "(.+)" over\\?$', 'Recommencer « $1 » ?'],
        ['^Start "(.+)" over$', 'Recommencer « $1 »'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '« $1 » est maintenant vide - « Annuler » le rétablit'],
        ['^Opened "(.+)" - it is now in "My drawings"$', '« $1 » ouvert - il se trouve maintenant dans « Mes dessins »'],
        ['^New drawing "(.+)" from the AI - your other drawings are unchanged$', 'Nouveau dessin « $1 » de l’IA - vos autres dessins sont inchangés'],
        ['^New drawing "(.+)" - your other drawings are under "My drawings"$', 'Nouveau dessin « $1 » - vos autres dessins se trouvent sous « Mes dessins »'],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '« $1 » modifié par l’IA - « Annuler » l’annule'],
        ['^"(.+)" opened$', '« $1 » ouvert'],

        // Export
        ['^(\\d+) × (\\d+) pixels$', '$1 × $2 pixels'],
        ['^([\\d,]+) bytes$', m => formatBytes(m)],
        ['^ZIP with 11 files downloaded \\(pictures (\\d+) × (\\d+) px\\)$', 'ZIP de 11 fichiers téléchargé (images $1 × $2 px)'],

        // My drawings
        ['^(\\d+) (?:drawing|drawings) · (.+) in this browser$', (m, n, s) => `${n} ${translateDrawings(n)} · ${formatBytes(s)} dans ce navigateur`],
        ['^Open now · (.+)$', (m, s) => `Ouvert maintenant · ${formatBytes(s)}`],
        ['^just now · (.+)$', (m, s) => `à l’instant · ${formatBytes(s)}`],
        ['^(\\d+) min ago · (.+)$', (m, n, s) => `il y a ${n} min · ${formatBytes(s)}`],
        ['^(\\d+) h ago · (.+)$', (m, n, s) => `il y a ${n} h · ${formatBytes(s)}`],
        ['^yesterday · (.+)$', (m, s) => `hier · ${formatBytes(s)}`],
        ['^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\\d{1,2}), (\\d{4}) · (.+)$', (m, mo, d, y, s) => `${d} ${MONTH[mo]} ${y} · ${formatBytes(s)}`],
        ['^(.+) \\(open now\\)$', '$1 (ouvert maintenant)'],
        ['^Open (.+)$', 'Ouvrir $1'],
        ['^No drawing named "(.*)"\\.$', 'Aucun dessin nommé « $1 ».'],
        ['^Delete "(.+)"\\?$', 'Supprimer « $1 » ?'],
        ['^"(.+)" duplicated$', '« $1 » dupliqué'],
        ['^"(.+)" deleted$', '« $1 » supprimé'],
        ['^ZIP with (\\d+) (?:drawing|drawings) downloaded$', (m, n) => `ZIP de ${n} ${translateDrawings(n)} téléchargé`],

        // AI
        ['^Part (\\d+) of (\\d+) received$', 'Partie $1 sur $2 reçue'],
        ['^Open the other (link|links) from the AI too \\(still missing: part (.+)\\)\\.$',
            (m, l, p) => `Ouvrez aussi ${l === 'link' ? 'l’autre lien' : 'les autres liens'} de l’IA (il manque encore : partie ${p}).`],
        ['^Part (\\d+) of (\\d+) received - paste the other (link|links) too \\(missing: (.+)\\)$',
            (m, a, b, l, p) => `Partie ${a} sur ${b} reçue - collez aussi ${l === 'link' ? 'l’autre lien' : 'les autres liens'} (il manque : ${p})`],
        ['^The AI sends the drawing to (.+) with a key that only works for this session\\. What you paste into your AI is handled by its provider\\.$',
            'L’IA envoie le dessin à $1 avec une clé valable uniquement pour cette session. Ce que vous collez dans votre IA est traité par son fournisseur.'],
        ['^The AI sends its result to (.+) by itself, and it opens here\\. If it answers with a link, paste its answer below\\.$',
            'L’IA envoie elle-même son résultat à $1, et il s’ouvre ici. Si elle répond par un lien, collez sa réponse ci-dessous.'],
        ['^No key from (.+) - the prompt asks the AI for a link instead$', 'Pas de clé de $1 - le prompt demande plutôt un lien à l’IA'],
        ['^Prompt copied - the AI sends its result to (.+)$', 'Prompt copié - l’IA envoie son résultat à $1'],
    ],
};
