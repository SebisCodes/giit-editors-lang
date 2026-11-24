/* Spanish texts of the Markdown editor: the bar, the work area (code,
   preview, insert, pictures, outline), its dialogs and messages, and the
   problems the preview finds in the code. What all editors share is in
   common.js; how the dictionaries are used is described in
   i18n.js. Names of documents, pictures and anchors stay as they are: the
   patterns copy them into the Spanish text. */

import { formatTime, formatSize, formatThousands, getPlural } from './format.js';

/* "1,234" -> "1.234" (Spanish thousands separator) */

/* When a document was last changed (files.js): "just now", "5 min ago", "Oct 25, 2026" … */

/* Reasons a ZIP could not be opened (app.js openZip) */
const ZIP = { 'it is not a ZIP file': 'no es un archivo ZIP', 'there is no .md file in it': 'no contiene ningún archivo .md' };

export default {
    text: {
        'Side panel': 'Panel lateral',
        'Show or hide the side panel': 'Mostrar u ocultar el panel lateral',
        'Examples': 'Ejemplos',
        'Template': 'Plantilla',
        'View of the preview': 'Modo de vista previa',
        'The document filled with the examples': 'El documento rellenado con los ejemplos',
        'The template with its placeholders as written': 'La plantilla con sus marcadores tal como están escritos',
        'The examples could not be filled in - the preview shows the template': 'No se han podido insertar los ejemplos - la vista previa muestra la plantilla',
        'Placeholders': 'Marcadores',
        'The placeholders of the template - a click on one puts its tag at the cursor': 'Los marcadores de la plantilla - haz clic en uno para insertar su etiqueta en el cursor',
        'Shown': 'Mostrado',
        'Hidden': 'Oculto',
        'example view': 'vista con ejemplos',
        'template view': 'vista de plantilla',
        // Editing in place: Enter and Shift+Enter
        "Editing on the page - Enter: new paragraph, Shift+Enter: new line, Ctrl+Enter or a click elsewhere keeps it, Escape cancels": "Edición en la página: Enter crea un párrafo, Shift+Enter una línea; Ctrl+Enter o un clic en otro lugar aplica el cambio; Escape cancela",
        "A new paragraph inside bold, italic or a link is made in the code - Shift+Enter makes a new line": "Los párrafos dentro de texto en negrita, cursiva o un enlace se crean en el código; Shift+Enter crea una línea nueva",
        'Code': 'Código',
        'Escape': "Esc",
        /* ---------- Top bar ---------- */
        'Markdown Editor - home': 'Editor de Markdown - inicio',
        'Markdown Editor': 'Editor de Markdown',
        'File': 'Archivo',
        'My documents (Ctrl+O)': 'Mis documentos (Ctrl+O)',
        'My documents': 'Mis documentos',
        'New document, or start this one over': 'Documento nuevo, o empezar este de nuevo',
        'New': 'Nuevo',
        'New blank document': 'Documento nuevo en blanco',
        'An empty page - your other documents stay as they are': 'Una página vacía: tus otros documentos se quedan como están',
        'README': 'README',
        'Project name, features, installation and usage': 'Nombre del proyecto, características, instalación y uso',
        'Article': 'Artículo',
        'Title, summary, sections and a quote': 'Título, resumen, secciones y una cita',
        'Meeting notes': 'Acta de reunión',
        'Agenda, decisions and a table of tasks': 'Orden del día, decisiones y una tabla de tareas',
        'Checklist': 'Lista de comprobación',
        'Tasks to tick off, in groups': 'Tareas para marcar, en grupos',
        'The welcome example': 'El ejemplo de bienvenida',
        'Shows what the editor can do': 'Muestra lo que puede hacer el editor',
        'Start this document over': 'Empezar este documento de nuevo',
        'Empties the text, keeps the pictures - "Undo" brings it back': 'Vacía el texto, conserva las imágenes: «Deshacer» lo recupera',
        'Open a .md file (or a picture) from your computer (you can also drag it into the window)':
            'Abre un archivo .md (o una imagen) de tu equipo (también puedes arrastrarlo a la ventana)',
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
        'Let any AI write in this editor': 'Deja que cualquier IA escriba en este editor',
        'AI Assistant': 'Asistente de IA',
        'Save to your own server and embed the editor in your website': 'Guarda en tu propio servidor e integra el editor en tu sitio web',
        'Save to server': 'Guardar en servidor',
        'How it works and keyboard shortcuts (?)': 'Cómo funciona y atajos de teclado (?)',
        'Help': 'Ayuda',
        'Save the document as a .md file (Ctrl+S)': 'Guarda el documento como archivo .md (Ctrl+S)',
        'Download .md': 'Descargar .md',
        'HTML, PDF, plain text and more (Ctrl+E)': 'HTML, PDF, texto sin formato y más (Ctrl+E)',
        'Export…': 'Exportar…',

        /* ---------- Views and work area ---------- */
        'View': 'Vista',
        'Edit': 'Editar',
        'Preview': 'Vista previa',
        'Insert': 'Insertar',
        'Markdown code': 'Código Markdown',
        'Copy the Markdown to the clipboard': 'Copia el Markdown al portapapeles',
        'Copy code': 'Copiar código',
        'Copy': 'Copiar',
        'Drag to change the width of the code area': 'Arrastra para cambiar el ancho del área de código',
        'Drag to change the width': 'Arrastra para cambiar el ancho',
        'Formatting': 'Formato',
        'Bold (Ctrl+B)': 'Negrita (Ctrl+B)',
        'Bold': 'Negrita',
        'Italic (Ctrl+I)': 'Cursiva (Ctrl+I)',
        'Italic': 'Cursiva',
        'Strikethrough': 'Tachado',
        'Code in the text': 'Código en el texto',
        'Link (Ctrl+K)': 'Enlace (Ctrl+K)',
        'Heading': 'Encabezado',
        'Bulleted list': 'Lista con viñetas',
        'Numbered list': 'Lista numerada',
        'Task list': 'Lista de tareas',
        'Table': 'Tabla',
        'Picture': 'Imagen',
        'Insert picture': 'Insertar imagen',
        'Quote': 'Cita',
        'Code block': 'Bloque de código',
        'Math in the text (Ctrl+M)': 'Fórmula en el texto (Ctrl+M)',
        'Math': 'Fórmula',
        'Text size': 'Tamaño del texto',
        'Smaller text in the preview': 'Texto más pequeño en la vista previa',
        'Smaller text': 'Texto más pequeño',
        'Normal text size': 'Tamaño de texto normal',
        'Larger text in the preview': 'Texto más grande en la vista previa',
        'Larger text': 'Texto más grande',
        'Preview of the document: click text to edit it, Ctrl+click follows a link': 'Vista previa del documento: haz clic en un texto para editarlo, Ctrl+clic sigue un enlace',
        'Updating…': 'Actualizando…',
        'Insert, pictures and outline': 'Insertar, imágenes y esquema',
        'Ready-made pieces: structure, text, math, symbols': 'Piezas listas: estructura, texto, fórmulas, símbolos',
        'The pictures of this document': 'Las imágenes de este documento',
        'Pictures': 'Imágenes',
        'The headings of the document': 'Los encabezados del documento',
        'Outline': 'Esquema',
        'The headings of the document. Click one to go there in the code and in the preview.':
            'Los encabezados del documento. Haz clic en uno para ir allí en el código y en la vista previa.',
        'No headings yet - start a line with # and a space.': 'Aún no hay encabezados: empieza una línea con # y un espacio.',
        'Open it here': 'Abrir aquí',
        'Drop the .md file or picture here': 'Suelta aquí el archivo .md o la imagen',

        'The document is empty - write Markdown on the left, or choose a template under "New".': 'El documento está vacío: escribe Markdown a la izquierda, o elige una plantilla en «Nuevo».',

        /* Problems above the code */
        'Hide': 'Ocultar',
        'Show': 'Mostrar',

        /* ---------- Insert tab ---------- */
        'Structure': 'Estructura',
        'Heading 1': 'Encabezado 1',
        'Heading 2': 'Encabezado 2',
        'Heading 3': 'Encabezado 3',
        '# Heading': '# Encabezado',
        '## Heading': '## Encabezado',
        '### Heading': '### Encabezado',
        'Horizontal rule': 'Línea horizontal',
        'Apply page breaks': 'Aplicar saltos de página',
        'New page': 'Página nueva',
        'Document': 'Documento',
        '• Bulleted list': '• Lista con viñetas',
        '1. Numbered list': '1. Lista numerada',
        '☐ Task list': '☐ Lista de tareas',
        'Fold-out section': 'Desplegable',
        'Line break': 'Salto de línea',
        'Text': 'Texto',
        '**bold** (Ctrl+B)': '**negrita** (Ctrl+B)',
        '*italic* (Ctrl+I)': '*cursiva* (Ctrl+I)',
        '~~struck through~~': '~~tachado~~',
        'Link to a heading': 'Enlace a encabezado',
        '[text](#heading)': '[texto](#encabezado)',
        '[text](https://…) (Ctrl+K)': '[texto](https://…) (Ctrl+K)',
        '![description](name.png)': '![descripción](nombre.png)',
        'Footnote': 'Nota al pie',
        '[^1] at the cursor, the note at the end': '[^1] en el cursor, la nota al final',
        'Key': 'Tecla',
        'A key as on the keyboard: <kbd>Ctrl</kbd>': 'Una tecla como en el teclado: <kbd>Ctrl</kbd>',
        '`code` between backticks': '`código` entre comillas invertidas',
        '$x$ in the text': '$x$ en el texto',
        'Displayed': 'Destacada',
        '$$ … $$ on its own lines': '$$ … $$ en líneas propias',
        'Fraction': 'Fracción',
        'Root': 'Raíz',
        'x² Power': 'x² Potencia',
        'x₁ Index': 'x₁ Subíndice',
        '∑ Sum': '∑ Suma',
        '∫ Integral': '∫ Integral',
        'lim Limit': 'lim Límite',
        '2×2 matrix': 'Matriz 2×2',
        'Cases': 'Casos',
        'Greek letters': 'Letras griegas',
        'Symbols': 'Símbolos',
        'Pictures have their own tab:': 'Las imágenes tienen su propia pestaña:',

        /* ---------- Pictures tab ---------- */
        'Add pictures…': 'Añadir imágenes…',
        'No pictures yet': 'Aún no hay imágenes',
        'Missing in this document': 'Faltan en este documento',
        'Add file…': 'Añadir archivo…',
        'Show where it is used': 'Mostrar dónde se usa',
        '![…](name) at the cursor': '![…](nombre) en el cursor',
        'Rename - the code is changed along': 'Renombrar: el código cambia también',
        'Rename': 'Renombrar',
        'Choose another file, keep the name': 'Elegir otro archivo, mantener el nombre',
        'Replace': 'Reemplazar',
        'Download the picture': 'Descargar la imagen',
        'Download': 'Descargar',
        'Remove the picture from this document': 'Quitar la imagen de este documento',
        'Remove': 'Quitar',
        'New name': 'Nombre nuevo',
        'Pictures belong to “': 'Las imágenes pertenecen a «',
        '” and stay in your browser. Drop or paste them anywhere in the editor, or add them here;': '» y se quedan en tu navegador. Suéltalas o pégalas en cualquier parte del editor, o añádelas aquí;',
        'uses them.': 'las usa.',

        /* ---------- Export ---------- */
        'Close': 'Cerrar',
        'File name': 'Nombre del archivo',
        'HTML page (one file)': 'Página HTML (un archivo)',
        'PDF (print or save as PDF)': 'PDF (imprimir o guardar como PDF)',
        'Plain text': 'Texto sin formato',
        'Markdown (.md)': 'Markdown (.md)',
        'Markdown with pictures (ZIP)': 'Markdown con imágenes (ZIP)',
        'Result': 'Resultado',
        'Download everything at once: .md, pictures, HTML and text': 'Descarga todo a la vez: .md, imágenes, HTML y texto',
        'All formats (ZIP)': 'Todos los formatos (ZIP)',
        'Print / Save as PDF': 'Imprimir / Guardar como PDF',
        '(The HTML page - with its pictures and styles inside - is created when you download or copy it.)':
            '(La página HTML, con sus imágenes y estilos incluidos, se crea al descargarla o copiarla.)',

        /* ---------- My documents ---------- */
        'Search by name': 'Buscar por nombre',
        'Search your documents': 'Busca en tus documentos',
        'Open a .md file from your computer as a new document': 'Abre un archivo .md de tu equipo como documento nuevo',
        'New document': 'Documento nuevo',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Haz clic en un documento para abrirlo. Solo se guardan en este navegador: no se sube nada. Si borras los datos del sitio en el navegador, desaparecen; descarga los que quieras conservar.',
        'Download every document as a .md file (with its pictures) in one ZIP': 'Descarga todos los documentos como archivos .md (con sus imágenes) en un ZIP',
        'Download all (ZIP)': 'Descargar todo (ZIP)',
        'Duplicate': 'Duplicar',
        'Download as .md': 'Descargar como .md',
        'Delete': 'Eliminar',
        'This document is open': 'Este documento está abierto',
        'Click to open this document': 'Haz clic para abrir este documento',
        'No documents yet.': 'Aún no hay documentos.',

        /* ---------- AI Assistant ---------- */
        'Any AI can write with you - ChatGPT, Claude, Gemini, Copilot.': 'Cualquier IA puede escribir contigo: ChatGPT, Claude, Gemini, Copilot.',
        'Connected AI': 'IA conectada',
        'Connected to': 'Conectado a',
        'the AI sends its result there, and it opens here.': 'la IA envía allí su resultado, y se abre aquí.',
        'What': 'Qué',
        'tells the AI': 'le dice a la IA',
        'The AI should': 'La IA debe',
        'Change “': 'Cambiar «',
        '”': '»',
        'Make a new document': 'Crear un documento nuevo',
        'The AI\'s answer (or press Ctrl+V anywhere):': 'La respuesta de la IA (o pulsa Ctrl+V en cualquier parte):',
        'The document travels in the link after the “#”, which no server sees. What you paste into your AI is handled by its provider.':
            'El documento viaja en el enlace después de «#», que ningún servidor ve. Lo que pegues en tu IA lo procesa su proveedor.',
        'The prompt - copy it with Ctrl+C': 'El prompt: cópialo con Ctrl+C',
        'Copy prompt': 'Copiar prompt',
        /* the step with the link, also when the editor sets it anew (text by text) */
        'The AI answers with a link: click it, or paste the whole answer below.': 'La IA responde con un enlace: haz clic en él o pega abajo la respuesta completa.',
        'takes it back.': 'lo revierte.',
        'The AI answers with a link:': 'La IA responde con un enlace:',
        'paste its whole answer below': 'pega abajo su respuesta completa',
        '(a clicked link opens a separate editor).': '(un enlace pulsado abre un editor aparte).',
        '(no key yet)': '(aún sin clave)',
        '(key valid while the editor is open)': '(clave válida mientras el editor esté abierto)',
        'The link could not be read': 'No se pudo leer el enlace',
        'The document in this link is incomplete or damaged. If the AI\'s link was split over several lines (as in a terminal), copy the whole answer and paste it into the editor with Ctrl+V - the editor joins the lines.':
            'El documento de este enlace está incompleto o dañado. Si el enlace de la IA se partió en varias líneas (como en una terminal), copia la respuesta completa y pégala en el editor con Ctrl+V: el editor une las líneas.',
        'Loading…': 'Cargando…',
        'Taken over by your editor': 'Recibido por tu editor',
        'The document is now in the Markdown Editor tab you already had open. Switch to that tab, or open it here.':
            'El documento está ahora en la pestaña del Editor de Markdown que ya tenías abierta. Cambia a esa pestaña o ábrelo aquí.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)': 'Aquí no se permite copiar; está seleccionado abajo: pulsa Ctrl+C (⌘C)',
        'Paste it into your AI and say what it should write.': 'Pégalo en tu IA y dile qué debe escribir.',
        'Prompt copied - paste it into your AI and say what it should write': 'Prompt copiado: pégalo en tu IA y dile qué debe escribir',
        'This link is incomplete or damaged - please ask the AI to send it again': 'Este enlace está incompleto o dañado: pide a la IA que lo envíe de nuevo',

        /* ---------- Save to your server ---------- */
        'Save to your server': 'Guardar en tu servidor',
        'Webhook address': 'Dirección del webhook',
        'https://example.com/api/markdown': 'https://example.com/api/markdown',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(opcional, se envía como «Authorization: Bearer …»; se guarda hasta cerrar esta pestaña)',
        'Send automatically a few seconds after each change (otherwise only when you click': 'Enviar automáticamente unos segundos después de cada cambio (si no, solo cuando hagas clic en',
        'or press Ctrl+S)': 'o pulses Ctrl+S)',
        'Only for “': 'Solo para «',
        '” (other documents use the general address)': '» (los demás documentos usan la dirección general)',
        'What your server receives': 'Qué recibe tu servidor',
        'A POST request with JSON (your server must allow CORS from https://md.giit.ch):': 'Una petición POST con JSON (tu servidor debe permitir CORS desde https://md.giit.ch):',
        'Embed the editor in your website': 'Integra el editor en tu sitio web',
        'Send now': 'Enviar ahora',
        'Save setting': 'Guardar ajuste',

        /* ---------- Help ---------- */
        'How it works': 'Cómo funciona',
        'Keyboard shortcuts': 'Atajos de teclado',
        'Bold / italic around the selected text': 'Negrita / cursiva alrededor del texto seleccionado',
        'Link': 'Enlace',
        'Show the cursor\'s place in the preview': 'Mostrar el lugar del cursor en la vista previa',
        'Indent / outdent': 'Sangrar / quitar sangría',
        'Undo / redo': 'Deshacer / rehacer',
        'Save (download .md, or to your server) / export': 'Guardar (descargar .md, o en tu servidor) / exportar',
        'Print / save as PDF': 'Imprimir / guardar como PDF',
        'Problems (a missing picture, a link to a heading that is not there, a code block that is never closed, a table row with too many cells) are listed above the code - click one to go there.':
            'Los problemas (una imagen que falta, un enlace a un encabezado que no existe, un bloque de código sin cerrar, una fila de tabla con demasiadas celdas) aparecen encima del código: haz clic en uno para ir allí.',

        /* ---------- Messages ---------- */
        'The browser storage is full - download and delete documents under "My documents"': 'El almacenamiento del navegador está lleno: descarga y elimina documentos en «Mis documentos»',
        'The browser storage is full - delete or download documents under "My documents" first': 'El almacenamiento del navegador está lleno: primero elimina o descarga documentos en «Mis documentos»',
        'The browser storage is full - delete or download some documents first': 'El almacenamiento del navegador está lleno: primero elimina o descarga algunos documentos',
        'The browser storage is full': 'El almacenamiento del navegador está lleno',
        'Nothing to undo': 'Nada que deshacer',
        'Nothing to redo': 'Nada que rehacer',
        'This text changed in the code - wait for the preview, then try again': 'Este texto cambió en el código: espera a la vista previa y vuelve a intentarlo',
        'This box changed in the code - wait for the preview, then try again': 'Este recuadro cambió en el código: espera a la vista previa y vuelve a intentarlo',
        'This picture changed in the code - wait for the preview, then try again': 'Esta imagen cambió en el código: espera a la vista previa y vuelve a intentarlo',
        'The code changed meanwhile - the edit was not used': 'Mientras tanto el código cambió: la edición no se aplicó',
        'This anchor is not in the document': 'Esta ancla no está en el documento',
        'The picture is removed from this document. Places that use it show its name in a frame. "Undo" does not bring it back.':
            'La imagen se quita de este documento. Los lugares que la usan muestran su nombre en un marco. «Deshacer» no la recupera.',
        'Pictures can be PNG, JPG, GIF, WebP, SVG or PDF': 'Las imágenes pueden ser PNG, JPG, GIF, WebP, SVG o PDF',
        'The picture is larger than 12 MB': 'La imagen ocupa más de 12 MB',
        'The picture could not be read': 'No se pudo leer la imagen',
        'This document is empty already': 'Este documento ya está vacío',
        'Everything is removed; the pictures of the document stay. "Undo" brings the text back as long as the page is open.':
            'Se quita todo; las imágenes del documento se quedan. «Deshacer» recupera el texto mientras la página esté abierta.',
        'Start over': 'Empezar de nuevo',
        'The file is larger than 8 MB': 'El archivo ocupa más de 8 MB',
        'Downloaded': 'Descargado',
        'Copied to the clipboard': 'Copiado al portapapeles',
        'This browser does not allow copying this': 'Este navegador no permite copiar esto',
        'Code copied': 'Código copiado',
        '.md with its pictures downloaded (ZIP)': '.md con sus imágenes descargado (ZIP)',
        '.md downloaded': '.md descargado',
        'ZIP downloaded: .md, pictures, HTML and text': 'ZIP descargado: .md, imágenes, HTML y texto',
        'Add': 'Añadir',
        'The document and its pictures are removed from this browser for good. Download it first if you want to keep a copy.':
            'El documento y sus imágenes se eliminan de este navegador para siempre. Descárgalo antes si quieres conservar una copia.',

        /* ---------- Problems the preview finds (markdown.js) ---------- */
        '$$ is never closed - add a line with $$ after the formula': '$$ nunca se cierra: añade una línea con $$ después de la fórmula',
    },

    html: {

        '<b>Export</b> also has <b>Open in another editor</b>: it converts the document and opens it as a new document there. Anything the other format cannot hold is listed first.':

            '<b>Exportar</b> también ofrece <b>Abrir en otro editor</b>: convierte el documento y lo abre allí como documento nuevo. Lo que el otro formato no puede contener se muestra antes.',

        '<b>Insert</b> &gt; <b>New page</b> sets a page break for printing and PDF; the preview shows it as a dashed line. Headings stay with their text and tables and pictures are not cut. In Export, <b>Apply page breaks</b> turns them off for a PDF.':

            '<b>Insertar</b> &gt; <b>Página nueva</b> pone un salto de página para imprimir y PDF; la vista previa lo muestra como línea discontinua. Los títulos siguen con su texto y las tablas e imágenes no se cortan. En <b>Exportar</b>, <b>Aplicar saltos de página</b> los desactiva para un PDF.',
        /* Export */
        'The print dialog opens with the document only. Choose <b>Save as PDF</b> (or "Microsoft Print to PDF") as the printer. In Chrome and Edge, untick "Headers and footers" if the browser offers it. The text in the PDF stays sharp and can be selected.':
            'El diálogo de impresión se abre solo con el documento. Elige <b>Guardar como PDF</b> (o «Microsoft Print to PDF») como impresora. En Chrome y Edge, desmarca «Encabezados y pies de página» si el navegador lo ofrece. El texto del PDF se mantiene nítido y se puede seleccionar.',

        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Haz clic en <b>Copiar prompt</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'La IA responde con un enlace: haz clic en él o pega abajo la respuesta completa. <b>Deshacer</b> lo revierte.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'La IA responde con un enlace: <b>pega abajo su respuesta completa</b> (un enlace pulsado abre un editor aparte). <b>Deshacer</b> lo revierte.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'El editor puede enviar cada versión guardada a tu propio servidor (un <b>webhook</b>), para que tu trabajo se guarde donde tú quieras. No se envía nada hasta que introduzcas aquí una dirección.',
        'Also possible: <code>?src=&lt;URL of a .md file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>mdeditor:ai</code>, <code>mdeditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'También es posible: <code>?src=&lt;URL de un archivo .md&gt;</code> abre un archivo, <code>&amp;webhook=&lt;URL&gt;</code> guarda allí este documento. El editor también puede abrirse en una ventana propia (<code>?embed=window</code>), y tu página puede pasarle su propio prompt de IA y una clave de sesión para que la IA envíe su resultado a tu servidor (<code>mdeditor:ai</code>, <code>mdeditor:key-request</code>): mira «Usa el editor en tu propio sitio web» debajo del editor. Los detalles están en <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> Markdown on the left - or start with <b>New</b> and one of the templates. The preview in the middle shows the document as you type.':
            '<b>Escribe</b> Markdown a la izquierda, o empieza con <b>Nuevo</b> y una de las plantillas. La vista previa del centro muestra el documento mientras escribes.',
        '<b>Click text in the preview</b> to edit it right there: the cursor is where you clicked, and the code\'s cursor goes to the same place. <b>Enter</b> starts a new paragraph; <b>Shift+Enter</b> inserts a line break. <b>Ctrl+Enter</b> (<b>Cmd+Enter</b> on macOS) or a click elsewhere applies the edit; <b>Escape</b> cancels. Each edit is one step for Undo. Characters such as <code>*</code> or <code>_</code> are escaped so they stay text. A click on math, a picture or code jumps to its place in the code instead. <b>Ctrl</b> + click follows a link. A check box of a task list ticks the task in the code.':
            '<b>Haz clic en un texto de la vista previa</b> para editarlo allí mismo: el cursor está donde hiciste clic, y el cursor del código va al mismo lugar. <b>Enter</b> inicia un párrafo nuevo; <b>Shift+Enter</b> inserta un salto de línea. <b>Ctrl+Enter</b> (<b>Cmd+Enter</b> en macOS) o un clic en otro sitio aplica la edición; <b>Esc</b> la cancela. Cada edición se deshace en un solo paso. Caracteres como <code>*</code> o <code>_</code> se escapan para que sigan siendo texto. Un clic en una fórmula, una imagen o código salta en cambio a su lugar en el código. <b>Ctrl</b> + clic sigue un enlace. La casilla de una lista de tareas marca la tarea en el código.',
        '<b>Insert</b> on the right has ready-made pieces (headings, lists, tables, math, symbols); <b>Pictures</b> holds the pictures of the document; <b>Outline</b> lists the headings.':
            '<b>Insertar</b>, a la derecha, tiene bloques listos para usar (encabezados, listas, tablas, fórmulas, símbolos); <b>Imágenes</b> guarda las imágenes del documento; <b>Esquema</b> lista los encabezados.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser.':
            '<b>Mis documentos</b> (el botón de carpeta arriba a la izquierda) lista todos los documentos guardados en este navegador.',
        '<b>Export</b> makes an HTML page, a PDF (via the print dialog) or plain text. <b>Download .md</b> saves the code (with its pictures as ZIP).':
            '<b>Exportar</b> crea una página HTML, un PDF (con el diálogo de impresión) o texto sin formato. <b>Descargar .md</b> guarda el código (con sus imágenes como ZIP).',
        'The preview understands CommonMark with GitHub\'s tables, task lists, strikethrough, autolinks and footnotes, and math in <code>$…$</code> and <code>$$…$$</code>. HTML in the Markdown is shown without scripts, styles, frames and forms.':
            'La vista previa entiende CommonMark con las tablas, listas de tareas, tachado, enlaces automáticos y notas al pie de GitHub, y fórmulas en <code>$…$</code> y <code>$$…$$</code>. El HTML dentro del Markdown se muestra sin scripts, estilos, marcos ni formularios.',
        'Math: <code>$…$</code> around the selection': 'Fórmula: <code>$…$</code> alrededor de la selección',
        'Lines in or out of a comment (<code>&lt;!-- --&gt;</code>)': 'Comentar o descomentar líneas (<code>&lt;!-- --&gt;</code>)',
        '<kbd>Enter</kbd> in a list starts the next item (<code>-</code>, <code>1.</code>, <code>- [ ]</code>, <code>&gt;</code>); on an empty item it ends the list. <code>* _ ` ~ $ [ (</code> close by themselves around a selection.':
            '<kbd>Enter</kbd> en una lista empieza el elemento siguiente (<code>-</code>, <code>1.</code>, <code>- [ ]</code>, <code>&gt;</code>); en un elemento vacío termina la lista. <code>* _ ` ~ $ [ (</code> se cierran solos alrededor de una selección.',
    },

    patterns: [
        /* ---------- Status lines ---------- */
        ['^(\\d+) lines · ([\\d.]+ K?B) · (\\d+) (?:word|words)$', (m, l, kb, w) => `${l} ${getPlural(l, 'línea', 'líneas')} · ${kb} · ${w} ${getPlural(w, 'palabra', 'palabras')}`],
        ['^\\.md and (\\d+) (?:picture|pictures)$', (m, k) => `.md y ${k} ${getPlural(k, 'imagen', 'imágenes')}`],
        ['^([\\d,]+) bytes$', (m, b) => `${formatThousands(b)} bytes`],
        ['^\\d{1,3}(?:,\\d{3})+$', m => formatThousands(m)],

        /* Problems above the code */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'error', 'errores')}`],
        ['^· (\\d+) (?:note|notes)$', (m, k) => `· ${k} ${getPlural(k, 'aviso', 'avisos')}`],
        ['^(\\d+) (?:note|notes)$', (m, k) => `${k} ${getPlural(k, 'aviso', 'avisos')}`],
        ['^Line (\\d+)$', 'Línea $1'],
        ['^The preview failed: (.*)$', 'La vista previa falló: $1'],
        ['^The preview stopped at an unexpected problem: (.*)$', 'La vista previa se detuvo por un problema inesperado: $1'],
        ['^Picture "(.+)" not found - drag the picture into the editor \\(or add it in the Pictures tab\\)$', 'Imagen «$1» no encontrada: arrastra la imagen al editor (o añádela en la pestaña Imágenes)'],
        ['^The link to "(.+)" has no heading or anchor of that name$', 'El enlace a «$1» no tiene ningún encabezado ni ancla con ese nombre'],
        ['^This code block \\((.+)\\) is never closed - add a line with (.+) after the code$', 'Este bloque de código ($1) nunca se cierra: añade una línea con $2 después del código'],
        ['^This table row has (\\d+) (?:cell|cells), the header has (\\d+)$', (m, k, h) => `Esta fila de la tabla tiene ${k} ${getPlural(k, 'celda', 'celdas')}, el encabezado tiene ${h}`],
        ['^Math: (.*)$', 'Fórmula: $1'],

        /* ---------- Pictures tab ---------- */
        ['^(\\d+) (?:picture|pictures) · (.+)$', (m, k, s) => `${k} ${getPlural(k, 'imagen', 'imágenes')} · ${s}`],
        ['^Choose the file for (.+)$', 'Elige el archivo para $1'],
        ['^Insert !\\[…\\]\\((.+)\\) at the cursor$', 'Insertar ![…]($1) en el cursor'],
        ['^used (\\d+)×$', 'usado $1×'],
        ['^(.* · )?not used yet$', (m, a) => `${a || ''}aún sin usar`],

        /* ---------- Top bar and My documents ---------- */
        ['^"(.+)" is open\\. My documents: open, rename, duplicate or delete your documents \\(Ctrl\\+O\\)$', '«$1» está abierto. Mis documentos: abre, renombra, duplica o elimina tus documentos (Ctrl+O)'],
        ['^Start "(.+)" over\\?$', '¿Empezar «$1» de nuevo?'],
        ['^Start "(.+)" over$', 'Empezar «$1» de nuevo'],
        ['^(\\d+) (?:document|documents) · (.+) in this browser$', (m, k, s) => `${k} ${getPlural(k, 'documento', 'documentos')} · ${formatSize(s)} en este navegador`],
        ['^No document named "(.*)"\\.$', 'Ningún documento se llama «$1».'],
        ['^Open now · (.+)$', (m, s) => `Abierto ahora · ${formatSize(s)}`],
        ['^(just now|yesterday|\\d+ min ago|\\d+ h ago|[A-Z][a-z]{2} \\d{1,2}, \\d{4}) · (.+)$', (m, w, s) => `${formatTime(w)} · ${formatSize(s)}`],
        ['^(.+) \\(open now\\)$', '$1 (abierto ahora)'],
        ['^ZIP with (\\d+) (?:document|documents) downloaded$', (m, k) => `ZIP con ${k} ${getPlural(k, 'documento', 'documentos')} descargado`],

        /* ---------- AI Assistant ---------- */
        ['^Part (\\d+) of (\\d+) received$', 'Parte $1 de $2 recibida'],
        ['^Open the other (?:link|links) from the AI too \\(still missing: part (.+)\\)\\.$',
            'Abre también los otros enlaces de la IA (aún falta: parte $1).'],
        ['^Part (\\d+) of (\\d+) received - paste the other (?:link|links) too \\(missing: (.+)\\)$', 'Parte $1 de $2 recibida: pega también los otros enlaces (falta: $3)'],
        ['^The AI sends the document to (.+) with a key that only works for this session\\. What you paste into your AI is handled by its provider\\.$',
            'La IA envía el documento a $1 con una clave que solo vale para esta sesión. Lo que pegues en tu IA lo procesa su proveedor.'],
        ['^The AI sends its result to (.+) by itself, and it opens here\\. If it answers with a link, paste its answer below\\.$',
            'La IA envía ella misma su resultado a $1, y se abre aquí. Si responde con un enlace, pega su respuesta abajo.'],
        ['^No key from (.+) - the prompt asks the AI for a link instead$', 'No hay clave de $1: el prompt pide a la IA un enlace en su lugar'],
        ['^Prompt copied - the AI sends its result to (.+)$', 'Prompt copiado: la IA envía su resultado a $1'],

        /* ---------- Messages with names ---------- */
        ['^"(.+)" is now "(.+)"$', '«$1» ahora se llama «$2»'],
        ['^Remove "(.+)"\\?$', '¿Quitar «$1»?'],
        ['^"(.+)" now shows the new picture$', '«$1» muestra ahora la nueva imagen'],
        ['^Picture "(.+)" added to "(.+)"$', 'Imagen «$1» añadida a «$2»'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '«$1» está vacío ahora: «Deshacer» lo recupera'],
        ['^"(.+)" opened$', '«$1» abierto'],
        ['^New document "(.+)" - your other documents are under "My documents"$', 'Nuevo documento «$1»: tus otros documentos están en «Mis documentos»'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$', 'Nuevo documento «$1» de la IA: tus otros documentos no cambian'],
        ['^"(.+)" is not a Markdown file$', '«$1» no es un archivo Markdown'],
        ['^Opened "(.+)" - it is now in "My documents"$', '«$1» abierto: ahora está en «Mis documentos»'],
        ['^Opened "(.+)" with (\\d+) (?:picture|pictures)$', (m, f, k) => `«${f}» abierto con ${k} ${getPlural(k, 'imagen', 'imágenes')}`],
        ['^"(.+)" could not be opened: (.*)$', (m, f, why) => `No se pudo abrir «${f}»: ${ZIP[why] || why}`],
        ['^Document received - the preview found (\\d+) (?:problem|problems), see above the code$', (m, k) => `Documento recibido: la vista previa encontró ${k} ${getPlural(k, 'problema', 'problemas')}, mira encima del código`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '«$1» modificado por la IA: «Deshacer» lo revierte'],
        ['^"(.+)" duplicated$', '«$1» duplicado'],
        ['^Delete "(.+)"\\?$', '¿Eliminar «$1»?'],
        ['^"(.+)" deleted$', '«$1» eliminado'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Abrir $1'],
    ],
};
