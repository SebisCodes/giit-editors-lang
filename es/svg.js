/* Spanish texts of the SVG editor: the bar, the canvas and its tools, the
   properties and layers, the dialogs (export, my drawings, AI, server, help),
   the color picker and the messages. What all editors share is in
   common.js; how the dictionaries are used is described in i18n.js.
   Names of drawings and elements are kept as they are and shown in «…». */

/* Names of the element types (LABELS in app.js). */
const LABEL = {
    'Drawing': 'Dibujo', 'Rectangle': 'Rectángulo', 'Circle': 'Círculo', 'Ellipse': 'Elipse', 'Line': 'Línea',
    'Polyline': 'Polilínea', 'Polygon': 'Polígono', 'Path': 'Trazado', 'Text': 'Texto', 'Group': 'Grupo', 'Image': 'Imagen',
    'Reused element': 'Elemento reutilizado', 'Nested SVG': 'SVG anidado', 'Link': 'Enlace',
    'Embedded content': 'Contenido incrustado', 'Definitions': 'Definiciones', 'Linear gradient': 'Degradado lineal',
    'Radial gradient': 'Degradado radial', 'Gradient stop': 'Punto de degradado', 'Clip path': 'Trazado de recorte',
    'Mask': 'Máscara', 'Pattern': 'Patrón', 'Symbol': 'Símbolo', 'Style sheet': 'Hoja de estilo', 'Title': 'Título',
    'Description': 'Descripción', 'Filter': 'Filtro', 'Marker': 'Marcador', 'Switch': 'Selector condicional', 'Metadata': 'Metadatos',
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
    'Click a shape to select it. Drag an empty spot to move the view.': 'Haz clic en una forma para seleccionarla. Arrastra un lugar vacío para mover la vista.',
    'Drag the shape to move it, or a small square to resize it. Delete key removes it.': 'Arrastra la forma para moverla, o un cuadradito para cambiar su tamaño. La tecla Delete la elimina.',
    'Drag to move the view. Use the mouse wheel to zoom.': 'Arrastra para mover la vista. Usa la rueda del ratón para hacer zoom.',
    'Drag to draw a rectangle. Hold Shift for a square.': 'Arrastra para dibujar un rectángulo. Mantén Shift para un cuadrado.',
    'Drag to draw an ellipse. Hold Shift for a circle.': 'Arrastra para dibujar una elipse. Mantén Shift para un círculo.',
    'Drag to draw a line. Hold Shift for straight angles.': 'Arrastra para dibujar una línea. Mantén Shift para ángulos rectos.',
    'Hold the mouse button down and draw.': 'Mantén pulsado el botón del ratón y dibuja.',
    'Click where the text should start.': 'Haz clic donde debe empezar el texto.',
    'Tap a shape to select it. Swipe to scroll.': 'Toca una forma para seleccionarla. Desliza para desplazarte.',
    'Drag it to move, drag a square to resize.': 'Arrástrala para moverla, arrastra un cuadrado para cambiar el tamaño.',
    'Drag to move the view, pinch to zoom.': 'Arrastra para mover la vista, pellizca para hacer zoom.',
    'Drag to draw a rectangle.': 'Arrastra para dibujar un rectángulo.',
    'Drag to draw an ellipse.': 'Arrastra para dibujar una elipse.',
    'Drag to draw a line.': 'Arrastra para dibujar una línea.',
    'Draw with your finger.': 'Dibuja con el dedo.',
    'Tap where the text should start.': 'Toca donde debe empezar el texto.',
};

/* The editor's own messages about the code (parse() in export.js); the browser's messages stay as they are. */
const CODE_ERROR = {
    'The outermost element must be <svg>.': 'El elemento más externo debe ser <svg>.',
    'The <svg> element is missing xmlns="http://www.w3.org/2000/svg".': 'Al elemento <svg> le falta xmlns="http://www.w3.org/2000/svg".',
};

/**
 * Translates a size in bytes ("1,234 bytes").
 * @param {string} s - the English size text.
 * @returns {string} the text in the language.
 */
const formatBytes = s => s.replace(/^([\d,]+) bytes$/, (m, n) => `${n.replace(/,/g, '.')} bytes`);
const MONTH = { Jan: 'ene.', Feb: 'feb.', Mar: 'mar.', Apr: 'abr.', May: 'may.', Jun: 'jun.', Jul: 'jul.', Aug: 'ago.', Sep: 'sept.', Oct: 'oct.', Nov: 'nov.', Dec: 'dic.' };
/**
 * Translates the text the pattern found (drawings in the English pattern).
 * @param {string} n - the English text the pattern found.
 * @returns {string} the text in the language.
 */
const translateDrawings = n => (n === '1' ? 'dibujo' : 'dibujos');

export default {
    text: {
        'Code': 'Código',
        'Escape': "Esc",
        ...LABEL,
        ...HINT,
        ...CODE_ERROR,

        // Top bar
        'SVG Editor': 'Editor de SVG',
        'SVG Editor - home': 'Editor de SVG - inicio',
        'File': 'Archivo',
        'My drawings': 'Mis dibujos',
        'My drawings (Ctrl+O)': 'Mis dibujos (Ctrl+O)',
        'New drawing, or start this one over': 'Dibujo nuevo, o empezar este de nuevo',
        'New': 'Nuevo',
        'New blank drawing': 'Dibujo nuevo en blanco',
        'Your other drawings stay as they are': 'Tus otros dibujos se quedan como están',
        'New from the example': 'Nuevo a partir del ejemplo',
        'A copy of the editor logo to try things out': 'Una copia del logo del editor para probar cosas',
        'Start this drawing over': 'Empezar este dibujo de nuevo',
        'Empties it but keeps its size - "Undo" brings it back': 'Lo vacía pero conserva su tamaño: «Deshacer» lo recupera',
        'Open an SVG file from your computer as a new drawing (you can also drag a file into the window)':
            'Abre un archivo SVG de tu equipo como dibujo nuevo (también puedes arrastrar un archivo a la ventana)',
        'Open file…': 'Abrir archivo…',
        'Undo the last change (Ctrl+Z)': 'Deshacer el último cambio (Ctrl+Z)',
        'Undo': 'Deshacer',
        'Redo the change you just undid (Ctrl+Y)': 'Rehacer el cambio que acabas de deshacer (Ctrl+Y)',
        'Redo': 'Rehacer',
        'Output': 'Salida',
        'Color theme': 'Tema de color',
        'Light theme': 'Tema claro',
        'Dark theme': 'Tema oscuro',
        'Same as your system setting': 'Igual que la configuración de tu sistema',
        'Automatic theme (system setting)': 'Tema automático (configuración del sistema)',
        'Let any AI draw in this editor': 'Deja que cualquier IA dibuje en este editor',
        'AI Assistant': 'Asistente de IA',
        'Save to your own server and embed the editor in your website':
            'Guarda en tu propio servidor e integra el editor en tu sitio web',
        'Save to server': 'Guardar en servidor',
        'How it works and keyboard shortcuts (?)': 'Cómo funciona y atajos de teclado (?)',
        'Help': 'Ayuda',
        'Save the drawing as an .svg file (Ctrl+S)': 'Guarda el dibujo como archivo .svg (Ctrl+S)',
        'Download SVG': 'Descargar SVG',
        'Save as PNG, JPG, WebP, data URI, React and more (Ctrl+E)': 'Guarda como PNG, JPG, WebP, URI de datos, React y más (Ctrl+E)',
        'Export…': 'Exportar…',

        // View tabs and the code
        'View': 'Vista',
        'Edit': 'Editar',
        'Side panel': 'Panel lateral',
        'Canvas': 'Lienzo',
        'Properties': 'Propiedades',
        'SVG code': 'Código SVG',
        'Copy the SVG code to the clipboard': 'Copia el código SVG al portapapeles',
        'Copy code': 'Copiar código',
        'Copy': 'Copiar',
        'Indent and arrange the code neatly': 'Sangra y ordena el código',
        'Tidy up': 'Ordenar',
        'Remove comments and spaces to make the file smaller': 'Quita comentarios y espacios para que el archivo sea más pequeño',
        'Shrink': 'Reducir',
        'Drag to change the width of the code area': 'Arrastra para cambiar el ancho del área de código',
        'Drag to change the width': 'Arrastra para cambiar el ancho',
        'Error in the code.': 'Error en el código.',
        'The preview shows the last working version.': 'La vista previa muestra la última versión que funcionaba.',
        'The preview shows the last working version': 'La vista previa muestra la última versión que funcionaba',
        'Add xmlns': 'Añadir xmlns',

        // Tools, grid, view
        'Tools': 'Herramientas',
        'Select and move shapes (V)': 'Seleccionar y mover formas (V)',
        'Select': 'Seleccionar',
        'Move the view (H, or hold the space bar)': 'Mover la vista (H, o mantén la barra espaciadora)',
        'Move the view': 'Mover la vista',
        'Draw a rectangle (R)': 'Dibujar un rectángulo (R)',
        'Draw an ellipse or circle (E)': 'Dibujar una elipse o un círculo (E)',
        'Draw a line (L)': 'Dibujar una línea (L)',
        'Draw freehand (P)': 'Dibujar a mano alzada (P)',
        'Freehand': 'Mano alzada',
        'Add text (T)': 'Añadir texto (T)',
        'Show the grid and snap shapes to it (#)': 'Mostrar la cuadrícula y ajustar las formas a ella (#)',
        'Grid': 'Cuadrícula',
        'Distance between grid lines, in the drawing\'s units': 'Distancia entre las líneas de la cuadrícula, en las unidades del dibujo',
        'Spacing': 'Espaciado',
        'Shapes jump onto the grid lines when moved or drawn (G)': 'Las formas saltan a las líneas de la cuadrícula al moverlas o dibujarlas (G)',
        'Snap': 'Ajustar',
        'Canvas: click shapes, drag them, resize them with the handles': 'Lienzo: haz clic en las formas, arrástralas, cambia su tamaño con los tiradores',
        'Background of the preview': 'Fondo de la vista previa',
        'Background behind the drawing (only for viewing, not saved in the file)': 'Fondo detrás del dibujo (solo para verlo, no se guarda en el archivo)',
        'Checkered background': 'Fondo a cuadros',
        'White background': 'Fondo blanco',
        'Dark background': 'Fondo oscuro',
        'No background': 'Sin fondo',
        'Zoom out (-)': 'Alejar (-)',
        'Zoom out': 'Alejar',
        'Show at actual size (1)': 'Mostrar a tamaño real (1)',
        'Zoom in (+)': 'Acercar (+)',
        'Zoom in': 'Acercar',
        'Fit the drawing into the window (0)': 'Ajustar el dibujo a la ventana (0)',
        'Fit to window': 'Ajustar a la ventana',
        'Fix the error in the code to edit the shapes again.': 'Corrige el error en el código para volver a editar las formas.',

        // Properties
        'Colors, size and position of the selected shape': 'Colores, tamaño y posición de la forma seleccionada',
        'All elements of the drawing as a list': 'Todos los elementos del dibujo como lista',
        'Layers': 'Capas',
        'The code contains an error. Once it is fixed, the shapes can be edited here again.':
            'El código contiene un error. Cuando esté corregido, las formas se podrán volver a editar aquí.',
        'No valid SVG loaded.': 'No hay ningún SVG válido cargado.',
        'Position in the document': 'Posición en el documento',
        'Document': 'Documento',
        'Width': 'Ancho',
        'Height': 'Alto',
        'x y width height': 'x y ancho alto',
        'Click a shape on the canvas or in the Layers list to edit it. Alt+click selects the surrounding group.':
            'Haz clic en una forma del lienzo o de la lista Capas para editarla. Alt+clic selecciona el grupo que la contiene.',
        'Colors for new shapes': 'Colores para formas nuevas',
        'Fill': 'Relleno',
        'Outline': 'Contorno',
        'Outline width': 'Grosor del contorno',
        'None': 'Ninguno',
        'Fill color of new shapes': 'Color de relleno de las formas nuevas',
        'Outline color of new shapes': 'Color de contorno de las formas nuevas',
        'Outline width of new shapes': 'Grosor del contorno de las formas nuevas',
        'Fill color · new shapes': 'Color de relleno · formas nuevas',
        'Outline color · new shapes': 'Color de contorno · formas nuevas',
        'Pick the fill color': 'Elegir el color de relleno',
        'Pick the outline color': 'Elegir el color de contorno',
        'Fill color': 'Color de relleno',
        'Outline color': 'Color de contorno',
        'Fill color as text': 'Color de relleno como texto',
        'Outline color as text': 'Color de contorno como texto',
        'Color as text, e.g. #ff0000, red or none': 'Color como texto, p. ej. #ff0000, red o none',
        'No fill': 'Sin relleno',
        'No outline': 'Sin contorno',
        'Uses a gradient or pattern - picking a color replaces it.': 'Usa un degradado o un patrón: elegir un color lo reemplaza.',
        'Opacity': 'Opacidad',
        'Overall opacity': 'Opacidad general',
        'Line style': 'Estilo de línea',
        'solid': 'continua',
        'dashed': 'discontinua',
        'dotted': 'punteada',
        'dash-dot': 'raya-punto',
        'Line ends': 'Extremos de línea',
        'default': 'predeterminado',
        'flat': 'planos',
        'round': 'redondeados',
        'square': 'cuadrados',
        'Corners': 'Esquinas',
        'sharp': 'en punta',
        'beveled': 'biseladas',
        'This text contains further elements (e.g. tspan) - please edit it in the code.':
            'Este texto contiene otros elementos (p. ej. tspan): edítalo en el código.',
        'Size': 'Tamaño',
        'Weight': 'Grosor',
        'light': 'fina',
        'normal': 'normal',
        'semi-bold': 'seminegrita',
        'bold': 'negrita',
        'black': 'extranegrita',
        'Font': 'Fuente',
        'Alignment': 'Alineación',
        'left': 'izquierda',
        'center': 'centro',
        'right': 'derecha',
        'Position and size': 'Posición y tamaño',
        'Left edge': 'Borde izquierdo',
        'Top edge': 'Borde superior',
        'W': 'An',
        'Rotate 15° to the left': 'Girar 15° a la izquierda',
        'Rotate 15° to the right': 'Girar 15° a la derecha',
        '⟲ Rotate left': '⟲ Girar a la izquierda',
        '⟳ Rotate right': '⟳ Girar a la derecha',
        'Mirror left to right': 'Reflejar de izquierda a derecha',
        'Mirror top to bottom': 'Reflejar de arriba abajo',
        '⇆ Flip horizontal': '⇆ Voltear horizontal',
        '⇅ Flip vertical': '⇅ Voltear vertical',
        'Arrange': 'Organizar',
        'Shapes further down in the code are drawn on top.': 'Las formas que están más abajo en el código se dibujan encima.',
        'One step forward (Ctrl+↑)': 'Un paso adelante (Ctrl+↑)',
        'One step backward (Ctrl+↓)': 'Un paso atrás (Ctrl+↓)',
        'Bring to front (Ctrl+Shift+↑)': 'Traer al frente (Ctrl+Shift+↑)',
        'Send to back (Ctrl+Shift+↓)': 'Enviar al fondo (Ctrl+Shift+↓)',
        '↑ Forward': '↑ Adelante',
        '↓ Backward': '↓ Atrás',
        '⤒ To front': '⤒ Al frente',
        '⤓ To back': '⤓ Al fondo',
        'Make a copy (Ctrl+D)': 'Hacer una copia (Ctrl+D)',
        'Remove this shape (Delete key)': 'Eliminar esta forma (tecla Delete)',
        '⧉ Duplicate': '⧉ Duplicar',
        '✕ Delete': '✕ Eliminar',
        'All attributes (advanced)': 'Todos los atributos (avanzado)',
        'Remove attribute': 'Quitar atributo',
        'Value': 'Valor',
        'New attribute: name': 'Atributo nuevo: nombre',
        'New attribute: value': 'Atributo nuevo: valor',
        'Add attribute': 'Añadir atributo',
        'Invalid attribute name': 'Nombre de atributo no válido',
        'The attribute could not be set': 'No se pudo establecer el atributo',

        // Layers
        'Every element of the drawing. Shapes higher in the list are drawn on top. Click to select, drag to reorder (drop onto a group to put it inside), double-click to rename. The eye hides a shape.':
            'Todos los elementos del dibujo. Las formas más arriba en la lista se dibujan encima. Haz clic para seleccionar, arrastra para reordenar (suelta sobre un grupo para meterla dentro), doble clic para renombrar. El ojo oculta una forma.',
        'Show': 'Mostrar',
        'Hide': 'Ocultar',
        'One step forward': 'Un paso adelante',
        'One step backward': 'Un paso atrás',
        'Duplicate': 'Duplicar',
        'Delete': 'Eliminar',
        'Name (id)': 'Nombre (id)',
        'Name of the element (id)': 'Nombre del elemento (id)',
        'A group cannot be moved into itself': 'Un grupo no se puede mover dentro de sí mismo',
        'This element cannot hold other shapes': 'Este elemento no puede contener otras formas',
        'Use letters, digits, - and _ only, starting with a letter': 'Usa solo letras, cifras, - y _, empezando por una letra',

        // Messages
        'The browser storage is full': 'El almacenamiento del navegador está lleno',
        'The browser storage is full - download and delete drawings under "My drawings"':
            'El almacenamiento del navegador está lleno: descarga y elimina dibujos en «Mis dibujos»',
        'The browser storage is full - delete or download drawings under "My drawings" first':
            'El almacenamiento del navegador está lleno: primero elimina o descarga dibujos en «Mis dibujos»',
        'The browser storage is full - delete or download some drawings first':
            'El almacenamiento del navegador está lleno: primero elimina o descarga algunos dibujos',
        'Nothing to undo': 'Nada que deshacer',
        'Nothing to redo': 'Nada que rehacer',
        'Please fix the error in the code first': 'Primero corrige el error en el código',
        'Deleted - Undo brings it back': 'Eliminado: Deshacer lo recupera',
        'Already at the front': 'Ya está al frente',
        'Already at the back': 'Ya está al fondo',
        'Grid on - shapes snap to the grid': 'Cuadrícula activada: las formas se ajustan a la cuadrícula',
        'Grid off': 'Cuadrícula desactivada',
        'Snap to grid: on': 'Ajustar a la cuadrícula: activado',
        'Snap to grid: off - shapes move freely': 'Ajustar a la cuadrícula: desactivado, las formas se mueven libremente',
        'Code tidied up': 'Código ordenado',
        'This drawing is empty already': 'Este dibujo ya está vacío',
        'Everything in this drawing is removed; its size stays. "Undo" brings it back as long as the page is open.':
            'Se elimina todo el contenido de este dibujo; se conserva su tamaño. «Deshacer» lo recupera mientras la página esté abierta.',
        'Start over': 'Empezar de nuevo',
        'Please choose an SVG file': 'Elige un archivo SVG',
        'The file is larger than 8 MB': 'El archivo ocupa más de 8 MB',
        'SVG pasted from the clipboard': 'SVG pegado desde el portapapeles',
        'Downloaded': 'Descargado',
        'Copied to the clipboard': 'Copiado al portapapeles',
        'This browser does not allow copying images': 'Este navegador no permite copiar imágenes',
        'Code copied': 'Código copiado',
        'SVG downloaded': 'SVG descargado',
        'The image came out empty.': 'La imagen salió vacía.',
        'The drawing could not be rendered as an image.': 'No se pudo convertir el dibujo en imagen.',
        'Add': 'Añadir',
        'Replace': 'Reemplazar',
        'The drawing has no closing </svg> - the new shapes could not be added':
            'El dibujo no tiene el </svg> de cierre: no se pudieron añadir las formas nuevas',
        'Drawing received - it has an error, see the code': 'Dibujo recibido: tiene un error, mira el código',
        'Drop the SVG file here': 'Suelta aquí el archivo SVG',

        // A link from the AI opened in a tab of its own (ai.js)
        'Open it here': 'Abrir aquí',
        'The link could not be read': 'No se pudo leer el enlace',
        'The drawing in this link is incomplete or damaged. If the AI\'s link was split over several lines (as in a terminal), copy the whole answer and paste it into the editor with Ctrl+V - the editor joins the lines.':
            'El dibujo de este enlace está incompleto o dañado. Si el enlace de la IA se partió en varias líneas (como en una terminal), copia la respuesta completa y pégala en el editor con Ctrl+V: el editor une las líneas.',
        'Loading…': 'Cargando…',
        'Taken over by your editor': 'Recibido por tu editor',
        'The drawing is now in the SVG Editor tab you already had open. Switch to that tab, or open it here.':
            'El dibujo está ahora en la pestaña del Editor de SVG que ya tenías abierta. Cambia a esa pestaña o ábrelo aquí.',

        // Dialogs: shared
        'Close': 'Cerrar',

        // Export
        'Export': 'Exportar',
        'File name': 'Nombre del archivo',
        'Vector (sharp at any size)': 'Vectorial (nítido a cualquier tamaño)',
        'SVG as in the editor': 'SVG tal como está en el editor',
        'SVG tidied up': 'SVG ordenado',
        'SVG shrunk (smallest file)': 'SVG reducido (archivo más pequeño)',
        'Picture': 'Imagen',
        'PNG (transparent background)': 'PNG (fondo transparente)',
        'Code for websites': 'Código para sitios web',
        'Data URI': 'URI de datos',
        'Base64 data URI': 'URI de datos en Base64',
        'CSS background-image': 'background-image de CSS',
        'HTML <img> tag': 'Etiqueta <img> de HTML',
        'React component (JSX)': 'Componente de React (JSX)',
        '1× (actual size)': '1× (tamaño real)',
        'custom': 'personalizado',
        'Width (px)': 'Ancho (px)',
        'Height (px)': 'Alto (px)',
        'Background': 'Fondo',
        'Background color': 'Color de fondo',
        'Background color · exported image': 'Color de fondo · imagen exportada',
        'Width and height stay in proportion. JPG has no transparency, so it always gets a background.':
            'El ancho y el alto se mantienen proporcionales. JPG no admite transparencia, así que siempre lleva fondo.',
        'Result': 'Resultado',
        'Download every format at once: SVG (3 variants), PNG, JPG, WebP, React, data URI, Base64, CSS and HTML':
            'Descarga todos los formatos a la vez: SVG (3 variantes), PNG, JPG, WebP, React, URI de datos, Base64, CSS y HTML',
        'All formats (ZIP)': 'Todos los formatos (ZIP)',
        'Download': 'Descargar',

        // My drawings
        'Search by name': 'Buscar por nombre',
        'Search your drawings': 'Busca en tus dibujos',
        'Open an SVG file from your computer as a new drawing': 'Abre un archivo SVG de tu equipo como dibujo nuevo',
        'New drawing': 'Dibujo nuevo',
        'Click a drawing to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Haz clic en un dibujo para abrirlo. Solo se guardan en este navegador: no se sube nada. Si borras los datos del sitio en el navegador, desaparecen; descarga los que quieras conservar.',
        'Download every drawing as an .svg file in one ZIP': 'Descarga todos los dibujos como archivos .svg en un ZIP',
        'Download all (ZIP)': 'Descargar todo (ZIP)',
        'No drawings yet.': 'Aún no hay dibujos.',
        'Rename': 'Renombrar',
        'Download as .svg': 'Descargar como .svg',
        'This drawing is open': 'Este dibujo está abierto',
        'Click to open this drawing': 'Haz clic para abrir este dibujo',
        'New name': 'Nombre nuevo',
        'The drawing is removed from this browser for good. Download it first if you want to keep a copy.':
            'El dibujo se elimina de este navegador para siempre. Descárgalo antes si quieres conservar una copia.',

        // AI assistant
        'Any AI can draw with you - ChatGPT, Claude, Gemini, Copilot.': 'Cualquier IA puede dibujar contigo: ChatGPT, Claude, Gemini, Copilot.',
        'Connected AI': 'IA conectada',
        'Paste it into your AI and say what it should draw.': 'Pégalo en tu IA y dile qué debe dibujar.',
        // The step after "Copy prompt" inside another website (ai.js rewrites it): its parts
        'The AI answers with a link:': 'La IA responde con un enlace:',
        'paste its whole answer below': 'pega abajo su respuesta completa',
        '(a clicked link opens a separate editor).': '(un enlace pulsado abre un editor aparte).',
        'takes it back.': 'lo revierte.',
        'The AI answers with a link: click it, or paste the whole answer below.': 'La IA responde con un enlace: haz clic en él o pega abajo la respuesta completa.',
        'Connected to': 'Conectado a',
        'the AI sends its result there, and it opens here.': 'la IA envía allí su resultado, y se abre aquí.',
        '(no key yet)': '(aún sin clave)',
        '(key valid while the editor is open)': '(clave válida mientras el editor esté abierto)',
        'What': 'Qué',
        'tells the AI': 'le dice a la IA',
        'The AI should': 'La IA debe',
        'Change “': 'Cambiar «',          // Change “name” -> Cambiar «name»
        '”': '»',
        'Make a new drawing': 'Crear un dibujo nuevo',
        'The AI\'s answer (or press Ctrl+V anywhere):': 'La respuesta de la IA (o pulsa Ctrl+V en cualquier parte):',
        'The drawing travels in the link after the “#”, which no server sees. What you paste into your AI is handled by its provider.':
            'El dibujo viaja en el enlace después de «#», que ningún servidor ve. Lo que pegues en tu IA lo procesa su proveedor.',
        'The prompt - copy it with Ctrl+C': 'El prompt: cópialo con Ctrl+C',
        'Copy prompt': 'Copiar prompt',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)': 'Aquí no se permite copiar; está seleccionado abajo: pulsa Ctrl+C (⌘C)',
        'Prompt copied - paste it into your AI and say what it should draw': 'Prompt copiado: pégalo en tu IA y dile qué debe dibujar',
        'This link is incomplete or damaged - please ask the AI to send it again': 'Este enlace está incompleto o dañado: pide a la IA que lo envíe de nuevo',

        // Save to your server
        'Save to your server': 'Guardar en tu servidor',
        'Webhook address': 'Dirección del webhook',
        'Send automatically a few seconds after each change (otherwise only when you click':
            'Enviar automáticamente unos segundos después de cada cambio (si no, solo cuando hagas clic en',
        'or press Ctrl+S)': 'o pulses Ctrl+S)',
        'Only for “': 'Solo para «',
        '” (other drawings use the general address)': '» (los demás dibujos usan la dirección general)',
        'What your server receives': 'Qué recibe tu servidor',
        'A POST request with JSON (your server must allow CORS from https://svg.giit.ch):':
            'Una petición POST con JSON (tu servidor debe permitir CORS desde https://svg.giit.ch):',
        'Embed the editor in your website': 'Integra el editor en tu sitio web',
        'Send now': 'Enviar ahora',
        'Save setting': 'Guardar ajuste',

        // Help
        'How it works': 'Cómo funciona',
        'Keyboard shortcuts': 'Atajos de teclado',
        'Select and move': 'Seleccionar y mover',
        'Rectangle, ellipse, line, freehand, text': 'Rectángulo, elipse, línea, mano alzada, texto',
        'Zoom': 'Zoom',
        'Drag with the mouse wheel pressed': 'Arrastra con la rueda del ratón pulsada',
        'Double-click the mouse wheel': 'Doble clic con la rueda del ratón',
        'Fit to window / actual size': 'Ajustar a la ventana / tamaño real',
        'Grid on/off / snap on/off': 'Cuadrícula sí/no / ajuste sí/no',
        'Arrow keys': 'Teclas de flecha',
        'Only horizontal/vertical, keep proportions': 'Solo horizontal/vertical, mantener proporciones',
        'Select the surrounding group': 'Seleccionar el grupo que la contiene',
        'Remove the selection': 'Eliminar la selección',
        'Undo / redo': 'Deshacer / rehacer',
        'Download SVG (or save to your server) / export': 'Descargar SVG (o guardar en tu servidor) / exportar',
        'Deselect': 'Deseleccionar',

        // Color picker (colorpicker.js)
        'Color': 'Color',
        'Saturation and brightness (arrow keys)': 'Saturación y brillo (teclas de flecha)',
        'Hue': 'Tono',
        'Before - click to go back': 'Antes: haz clic para volver',
        'New color': 'Color nuevo',
        'Color as hex code, e.g. #ff0000': 'Color como código hexadecimal, p. ej. #ff0000',
        'Done': 'Listo',
        'Colors in this drawing': 'Colores de este dibujo',
        'Basic colors': 'Colores básicos',
    },

    html: {
        // AI assistant
        'Click <b>Copy prompt</b>.': 'Haz clic en <b>Copiar prompt</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'La IA responde con un enlace: haz clic en él o pega abajo la respuesta completa. <b>Deshacer</b> lo revierte.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'La IA responde con un enlace: <b>pega abajo su respuesta completa</b> (un enlace pulsado abre un editor aparte). <b>Deshacer</b> lo revierte.',

        // Save to your server
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your drawings are kept where you want them. Nothing is sent until you enter an address here.':
            'El editor puede enviar cada versión guardada a tu propio servidor (un <b>webhook</b>), para que tus dibujos se guarden donde tú quieras. No se envía nada hasta que introduzcas aquí una dirección.',
        'Token <small>(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)</small>': 'Token <small>(opcional, se envía como «Authorization: Bearer …»; se guarda hasta cerrar esta pestaña)</small>',
        'Also possible: <code>?src=&lt;URL of an .svg file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this drawing there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>svgeditor:ai</code>, <code>svgeditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'También es posible: <code>?src=&lt;URL de un archivo .svg&gt;</code> abre un archivo, <code>&amp;webhook=&lt;URL&gt;</code> guarda allí este dibujo. El editor también puede abrirse en una ventana propia (<code>?embed=window</code>), y tu página puede pasarle su propio prompt de IA y una clave de sesión para que la IA envíe su resultado a tu servidor (<code>svgeditor:ai</code>, <code>svgeditor:key-request</code>): mira «Usa el editor en tu propio sitio web» debajo del editor. Los detalles están en <a href="/llms.txt">llms.txt</a>.',

        // Help
        '<b>Open</b> an SVG file, drag it into the window or paste SVG code - or start with <b>New</b>.':
            '<b>Abre</b> un archivo SVG, arrástralo a la ventana o pega código SVG, o empieza con <b>Nuevo</b>.',
        '<b>My drawings</b> (the folder button at the top left) lists every drawing kept in this browser: open, rename, duplicate, download or delete them.':
            '<b>Mis dibujos</b> (el botón de carpeta arriba a la izquierda) lista todos los dibujos guardados en este navegador: ábrelos, renómbralos, duplícalos, descárgalos o elimínalos.',
        '<b>Click a shape</b> on the canvas. Drag it to move it, drag the small squares to resize it. Colors, size and position are under <b>Properties</b> on the right.':
            '<b>Haz clic en una forma</b> del lienzo. Arrástrala para moverla, arrastra los cuadraditos para cambiar su tamaño. Los colores, el tamaño y la posición están en <b>Propiedades</b>, a la derecha.',
        '<b>Draw</b> new shapes with the tools above the canvas.': '<b>Dibuja</b> formas nuevas con las herramientas que hay encima del lienzo.',
        'The <b>code</b> on the left always shows the current drawing and can be edited directly.':
            'El <b>código</b> de la izquierda siempre muestra el dibujo actual y se puede editar directamente.',
        '<b>Download SVG</b> saves the file, <b>Export</b> offers pictures (PNG, JPG) and code for websites.':
            '<b>Descargar SVG</b> guarda el archivo, <b>Exportar</b> ofrece imágenes (PNG, JPG) y código para sitios web.',
        'Made a mistake? <b>Undo</b> takes back every step. Your drawings are kept in this browser, even after closing the page.':
            '¿Te has equivocado? <b>Deshacer</b> revierte cada paso. Tus dibujos se guardan en este navegador, incluso después de cerrar la página.',
        '<kbd>H</kbd> / hold <kbd>Space</kbd>': '<kbd>H</kbd> / mantén <kbd>Espacio</kbd>',
        'Mouse wheel, <kbd>+</kbd> <kbd>-</kbd>': 'Rueda del ratón, <kbd>+</kbd> <kbd>-</kbd>',
        'Move the selection by 1, with <kbd>Shift</kbd> by 10': 'Mover la selección de 1 en 1, con <kbd>Shift</kbd> de 10 en 10',
        '<kbd>Shift</kbd> while dragging': '<kbd>Shift</kbd> al arrastrar',
        '<kbd>Alt</kbd> + click': '<kbd>Alt</kbd> + clic',
        '<kbd>Delete</kbd>': '<kbd>Supr</kbd>',
        'Forward / backward (with <kbd>Shift</kbd>: to front / to back)': 'Adelante / atrás (con <kbd>Shift</kbd>: al frente / al fondo)',
        'In the code: <kbd>Tab</kbd> indents, <kbd>Shift</kbd>+<kbd>Tab</kbd> outdents, clicking into a tag selects that shape on the canvas.':
            'En el código: <kbd>Tab</kbd> sangra, <kbd>Shift</kbd>+<kbd>Tab</kbd> quita la sangría, un clic dentro de una etiqueta selecciona esa forma en el lienzo.',
    },

    patterns: [
        // Canvas hint with the grid
        ['^(.*?) ?Snapping to a ([\\d.]+) grid\\.$', (m, h, n) => `${h ? (HINT[h] || h) + ' ' : ''}Se ajusta a una cuadrícula de ${n}.`],
        ['^(.*?) ?Snap: ([\\d.]+)\\.$', (m, h, n) => `${h ? (HINT[h] || h) + ' ' : ''}Ajuste: ${n}.`],

        // Code
        ['^(\\d+) lines · (.+)$', (m, n, s) => `${n} ${n === '1' ? 'línea' : 'líneas'} · ${s}`],
        ['^Line (\\d+), column (\\d+): (.*)$', (m, l, c, t) => `Línea ${l}, columna ${c}: ${CODE_ERROR[t] || t}`],
        ['^Line (\\d+): (.*)$', (m, l, t) => `Línea ${l}: ${CODE_ERROR[t] || t}`],
        ['^File shrunk: (\\d+) → (\\d+) bytes$', 'Archivo reducido: $1 → $2 bytes'],

        // Properties
        [`^(Fill|Outline) color · (whole drawing|${TYPE_ANY})( #.+)?$`, (m, w, t, id) =>
            `${w === 'Fill' ? 'Color de relleno' : 'Color de contorno'} · ${t === 'whole drawing' ? 'todo el dibujo' : translateLabel(t)}${id || ''}`],
        ['^(.+) \\(inherited\\)$', '$1 (heredado)'],
        ['^Remove ([A-Za-z_:][\\w:.-]*)$', 'Quitar $1'],

        // Layers
        ['^<([^>]+)> - click to select, double-click to rename, drag to reorder$', '<$1>: clic para seleccionar, doble clic para renombrar, arrastrar para reordenar'],
        ['^<([^>]+)> - click to select$', '<$1>: clic para seleccionar'],
        [`^Show ${TYPE}$`, (m, t) => `Mostrar ${translateLabel(t)}`],
        [`^Hide ${TYPE}$`, (m, t) => `Ocultar ${translateLabel(t)}`],
        [`^Move ${TYPE} forward$`, (m, t) => `${translateLabel(t)} hacia delante`],
        [`^Move ${TYPE} backward$`, (m, t) => `${translateLabel(t)} hacia atrás`],
        [`^Duplicate ${TYPE}$`, (m, t) => `Duplicar ${translateLabel(t)}`],
        [`^Delete ${TYPE}$`, (m, t) => `Eliminar ${translateLabel(t)}`],
        ['^The name “(.+)” is already used$', 'El nombre «$1» ya está en uso'],

        // The open drawing
        ['^"(.+)" is open\\. My drawings: open, rename, duplicate or delete your drawings \\(Ctrl\\+O\\)$',
            '«$1» está abierto. Mis dibujos: abre, renombra, duplica o elimina tus dibujos (Ctrl+O)'],
        ['^Start "(.+)" over\\?$', '¿Empezar «$1» de nuevo?'],
        ['^Start "(.+)" over$', 'Empezar «$1» de nuevo'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '«$1» está vacío ahora: «Deshacer» lo recupera'],
        ['^Opened "(.+)" - it is now in "My drawings"$', '«$1» abierto: ahora está en «Mis dibujos»'],
        ['^New drawing "(.+)" from the AI - your other drawings are unchanged$', 'Nuevo dibujo «$1» de la IA: tus otros dibujos no cambian'],
        ['^New drawing "(.+)" - your other drawings are under "My drawings"$', 'Nuevo dibujo «$1»: tus otros dibujos están en «Mis dibujos»'],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '«$1» modificado por la IA: «Deshacer» lo revierte'],
        ['^"(.+)" opened$', '«$1» abierto'],

        // Export
        ['^(\\d+) × (\\d+) pixels$', '$1 × $2 píxeles'],
        ['^([\\d,]+) bytes$', m => formatBytes(m)],
        ['^ZIP with 11 files downloaded \\(pictures (\\d+) × (\\d+) px\\)$', 'ZIP con 11 archivos descargado (imágenes de $1 × $2 px)'],

        // My drawings
        ['^(\\d+) (?:drawing|drawings) · (.+) in this browser$', (m, n, s) => `${n} ${translateDrawings(n)} · ${formatBytes(s)} en este navegador`],
        ['^Open now · (.+)$', (m, s) => `Abierto ahora · ${formatBytes(s)}`],
        ['^just now · (.+)$', (m, s) => `ahora mismo · ${formatBytes(s)}`],
        ['^(\\d+) min ago · (.+)$', (m, n, s) => `hace ${n} min · ${formatBytes(s)}`],
        ['^(\\d+) h ago · (.+)$', (m, n, s) => `hace ${n} h · ${formatBytes(s)}`],
        ['^yesterday · (.+)$', (m, s) => `ayer · ${formatBytes(s)}`],
        ['^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\\d{1,2}), (\\d{4}) · (.+)$', (m, mo, d, y, s) => `${d} ${MONTH[mo]} ${y} · ${formatBytes(s)}`],
        ['^(.+) \\(open now\\)$', '$1 (abierto ahora)'],
        ['^Open (.+)$', 'Abrir $1'],
        ['^No drawing named "(.*)"\\.$', 'Ningún dibujo se llama «$1».'],
        ['^Delete "(.+)"\\?$', '¿Eliminar «$1»?'],
        ['^"(.+)" duplicated$', '«$1» duplicado'],
        ['^"(.+)" deleted$', '«$1» eliminado'],
        ['^ZIP with (\\d+) (?:drawing|drawings) downloaded$', (m, n) => `ZIP con ${n} ${translateDrawings(n)} descargado`],

        // AI
        ['^Part (\\d+) of (\\d+) received$', 'Parte $1 de $2 recibida'],
        ['^Open the other (link|links) from the AI too \\(still missing: part (.+)\\)\\.$',
            (m, l, p) => `Abre también ${l === 'link' ? 'el otro enlace' : 'los otros enlaces'} de la IA (aún falta: parte ${p}).`],
        ['^Part (\\d+) of (\\d+) received - paste the other (link|links) too \\(missing: (.+)\\)$',
            (m, a, b, l, p) => `Parte ${a} de ${b} recibida: pega también ${l === 'link' ? 'el otro enlace' : 'los otros enlaces'} (falta: ${p})`],
        ['^The AI sends the drawing to (.+) with a key that only works for this session\\. What you paste into your AI is handled by its provider\\.$',
            'La IA envía el dibujo a $1 con una clave que solo vale para esta sesión. Lo que pegues en tu IA lo procesa su proveedor.'],
        ['^The AI sends its result to (.+) by itself, and it opens here\\. If it answers with a link, paste its answer below\\.$',
            'La IA envía ella misma su resultado a $1, y se abre aquí. Si responde con un enlace, pega su respuesta abajo.'],
        ['^No key from (.+) - the prompt asks the AI for a link instead$', 'No hay clave de $1: el prompt pide a la IA un enlace en su lugar'],
        ['^Prompt copied - the AI sends its result to (.+)$', 'Prompt copiado: la IA envía su resultado a $1'],
    ],
};
