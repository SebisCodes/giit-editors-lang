/* Spanish texts of the HTML editor: the bar, the work area (code, preview,
   document settings, insert, files, outline), its dialogs and messages,
   and the problems the editor finds in the code. What all editors share is
   in common.js; how the dictionaries are used is described in
   i18n.js. Names of documents, files, elements and attributes stay as they
   are: the patterns copy them into the Spanish text. */

import { formatTime, formatSize, formatThousands, getPlural } from './format.js';

/* "1,234" -> "1.234" (Spanish thousands separator) */

/* When a document was last changed (files.js): "just now", "5 min ago", "Oct 25, 2026" … */

/* Reasons a ZIP could not be opened (app.js openZip) */
const ZIP = { 'it is not a ZIP file': 'no es un archivo ZIP', 'there is no .html file in it': 'no contiene ningún archivo .html' };

export default {
    text: {
        // Editing in place: Enter and Shift+Enter
        "Editing in the preview - Enter: new paragraph, Shift+Enter: new line, Ctrl+Enter or a click elsewhere keeps it, Escape cancels": "Edición en la vista previa: Enter crea un párrafo, Shift+Enter una línea; Ctrl+Enter o un clic en otro lugar aplica el cambio; Escape cancela",
        'Code': 'Código',
        'Escape': "Esc",
        /* ---------- Top bar ---------- */
        'HTML Editor - home': 'Editor de HTML - inicio',
        'HTML Editor': 'Editor de HTML',
        'File': 'Archivo',
        'My documents (Ctrl+O)': 'Mis documentos (Ctrl+O)',
        'My documents': 'Mis documentos',
        'New document, or start this one over': 'Documento nuevo, o empezar este de nuevo',
        'New': 'Nuevo',
        'New blank page': 'Página nueva en blanco',
        'An empty HTML page - your other documents stay as they are': 'Una página HTML vacía: tus otros documentos se quedan como están',
        'Landing page': 'Página de aterrizaje',
        'A big header, three features and a footer': 'Una cabecera grande, tres características y un pie',
        'Article': 'Artículo',
        'Title, sections, a quote and a list': 'Título, secciones, una cita y una lista',
        'Contact form': 'Formulario de contacto',
        'Name, email and message with labels': 'Nombre, correo y mensaje con etiquetas',
        'Email newsletter': 'Boletín por correo',
        'An email layout with a table': 'Un diseño de correo con una tabla',
        'The welcome example': 'El ejemplo de bienvenida',
        'Shows what the editor can do': 'Muestra lo que puede hacer el editor',
        'Start this document over': 'Empezar este documento de nuevo',
        'Keeps the head, empties the body - "Undo" brings it back': 'Conserva el head, vacía el body: «Deshacer» lo recupera',
        'Open an .html file (or a picture, stylesheet or ZIP) from your computer (you can also drag it into the window)':
            'Abre un archivo .html (o una imagen, hoja de estilo o ZIP) de tu equipo (también puedes arrastrarlo a la ventana)',
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
        'Save the page as an .html file - with its files as ZIP (Ctrl+S)': 'Guarda la página como archivo .html, con sus archivos como ZIP (Ctrl+S)',
        'Download .html': 'Descargar .html',
        'HTML, one file with everything inside, ZIP, PDF and text (Ctrl+E)': 'HTML, un archivo con todo dentro, ZIP, PDF y texto (Ctrl+E)',
        'Export…': 'Exportar…',

        /* ---------- Views and work area ---------- */
        'View': 'Vista',
        'Edit': 'Editar',
        'Side panel': 'Panel lateral',
        'Preview': 'Vista previa',
        'Document': 'Documento',
        'HTML code': 'Código HTML',
        'Copy the HTML code to the clipboard': 'Copia el código HTML al portapapeles',
        'Copy code': 'Copiar código',
        'Copy': 'Copiar',
        'Indent every line by the depth of its elements': 'Sangra cada línea según la profundidad de sus elementos',
        'Tidy up': 'Ordenar',
        'Drag to change the width of the code area': 'Arrastra para cambiar el ancho del área de código',
        'Drag to change the width': 'Arrastra para cambiar el ancho',
        'Formatting': 'Formato',
        'Bold (Ctrl+B)': 'Negrita (Ctrl+B)',
        'Bold': 'Negrita',
        'Italic (Ctrl+I)': 'Cursiva (Ctrl+I)',
        'Italic': 'Cursiva',
        'Underline (Ctrl+U)': 'Subrayado (Ctrl+U)',
        'Underline': 'Subrayado',
        'Heading': 'Encabezado',
        'Bulleted list': 'Lista con viñetas',
        'Numbered list': 'Lista numerada',
        'Table': 'Tabla',
        'Picture': 'Imagen',
        'Width of the preview': 'Ancho de la vista previa',
        'As wide as the preview': 'Tan ancho como la vista previa',
        'Full width': 'Ancho completo',
        'Tablet (768 pixels wide)': 'Tableta (768 píxeles de ancho)',
        'Tablet width': 'Ancho de tableta',
        'Phone (390 pixels wide)': 'Móvil (390 píxeles de ancho)',
        'Phone width': 'Ancho de móvil',
        'Preview of the page: click text to edit it, or anything else to jump to its place in the code':
            'Vista previa de la página: haz clic en un texto para editarlo, o en cualquier otra cosa para saltar a su lugar en el código',
        'Preview of the page': 'Vista previa de la página',
        'Updating…': 'Actualizando…',
        'Title, language, description and the stylesheets of the page': 'Título, idioma, descripción y hojas de estilo de la página',
        'Ready-made pieces: structure, text, lists, media, forms, head': 'Bloques listos para usar: estructura, texto, listas, multimedia, formularios, head',
        'Insert': 'Insertar',
        'The pictures and other files of this document': 'Las imágenes y otros archivos de este documento',
        'Files': 'Archivos',
        'The headings of the page': 'Los encabezados de la página',
        'Outline': 'Esquema',
        'The headings of the page. Click one to go there in the code and in the preview.':
            'Los encabezados de la página. Haz clic en uno para ir allí en el código y en la vista previa.',
        'No headings yet - add one with <h1> … <h6>.': 'Aún no hay encabezados: añade uno con <h1> … <h6>.',
        'Open it here': 'Abrir aquí',
        'Drop the .html file, picture or stylesheet here': 'Suelta aquí el archivo .html, la imagen o la hoja de estilo',

        /* Problems above the code */
        'Hide': 'Ocultar',
        'Show': 'Mostrar',

        /* ---------- Insert tab ---------- */
        'Structure': 'Estructura',
        'Heading 1': 'Encabezado 1',
        'Heading 2': 'Encabezado 2',
        'Heading 3': 'Encabezado 3',
        'Heading 4': 'Encabezado 4',
        'Paragraph': 'Párrafo',
        'Section': 'Sección',
        'Header': 'Cabecera',
        'Navigation bar': 'Barra de navegación',
        'Main content': 'Contenido principal',
        'Footer': 'Pie de página',
        'Box': 'Caja',
        'Fold-out (details)': 'Desplegable (details)',
        'Dividing line': 'Línea divisoria',
        'Apply page breaks': 'Aplicar saltos de página',
        'New page': 'Página nueva',
        'Line break': 'Salto de línea',
        'Comment': 'Comentario',
        'Lists and tables': 'Listas y tablas',
        '• Bulleted list': '• Lista con viñetas',
        '1. Numbered list': '1. Lista numerada',
        'Description list': 'Lista de descripción',
        'Highlighted': 'Resaltado',
        'Small print': 'Letra pequeña',
        'Code in the text': 'Código en el texto',
        'x² Superscript': 'x² Superíndice',
        'x₁ Subscript': 'x₁ Subíndice',
        'Quote': 'Cita',
        'Program code': 'Código de programa',
        'Inline part (span)': 'Parte en línea (span)',
        'Media': 'Multimedia',
        'Figure with caption': 'Figura con pie',
        'Video player': 'Reproductor de vídeo',
        'Audio player': 'Reproductor de audio',
        'The files of the page have their own tab:': 'Los archivos de la página tienen su propia pestaña:',
        'Forms': 'Formularios',
        'Form': 'Formulario',
        'Text field': 'Campo de texto',
        'Email field': 'Campo de correo',
        'Text area': 'Área de texto',
        'Choice list': 'Lista de opciones',
        'Tick box': 'Casilla',
        'Radio buttons': 'Botones de opción',
        'Button': 'Botón',
        'Head': 'Head',
        'Character set': 'Juego de caracteres',
        'The character set: <meta charset="utf-8">': 'El juego de caracteres: <meta charset="utf-8">',
        'Fits phone screens: <meta name="viewport">': 'Se adapta a pantallas de móvil: <meta name="viewport">',
        'Description': 'Descripción',
        'For search engines: <meta name="description">': 'Para buscadores: <meta name="description">',
        'Shared links': 'Enlaces compartidos',
        'Title, description and picture for shared links (Open Graph)': 'Título, descripción e imagen para enlaces compartidos (Open Graph)',
        'Stylesheet file': 'Archivo de hoja de estilo',
        'A stylesheet file: <link rel="stylesheet">': 'Un archivo de hoja de estilo: <link rel="stylesheet">',
        'Style block': 'Bloque de estilo',
        'CSS in the page: <style> … </style>': 'CSS en la página: <style> … </style>',
        'Tab icon': 'Icono de pestaña',
        'The icon in the browser tab: <link rel="icon">': 'El icono en la pestaña del navegador: <link rel="icon">',
        'Special characters': 'Caracteres especiales',
        'Insert &nbsp; (no-break space)': 'Insertar &nbsp; (espacio indivisible)',
        'Insert &shy; (soft hyphen)': 'Insertar &shy; (guion opcional)',

        /* ---------- Files tab ---------- */
        'Add files…': 'Añadir archivos…',
        'No files yet': 'Aún no hay archivos',
        'Missing in this document': 'Faltan en este documento',
        'Add file…': 'Añadir archivo…',
        'Show where it is used': 'Mostrar dónde se usa',
        'A picture (img) at the cursor': 'Una imagen (img) en el cursor',
        'A link to the stylesheet in the head': 'Un enlace a la hoja de estilo en el head',
        'A reference to the file at the cursor': 'Una referencia al archivo en el cursor',
        'A figure with caption at the cursor': 'Una figura con pie en el cursor',
        'As figure': 'Como figura',
        'Rename - the code is changed along': 'Renombrar: el código cambia también',
        'Rename': 'Renombrar',
        'Choose another file, keep the name': 'Elegir otro archivo, mantener el nombre',
        'Replace': 'Reemplazar',
        'Download the file': 'Descargar el archivo',
        'Download': 'Descargar',
        'Remove the file from this document': 'Quitar el archivo de este documento',
        'Remove': 'Quitar',
        'New name': 'Nombre nuevo',

        /* ---------- Document tab ---------- */
        'Title': 'Título',
        '(in the browser tab and in search results)': '(en la pestaña del navegador y en los resultados de búsqueda)',
        'Language': 'Idioma',
        '(for search engines)': '(para buscadores)',
        'Author': 'Autor',
        'Characters as UTF-8 (meta charset)': 'Caracteres como UTF-8 (meta charset)',
        'Fits phone screens (meta viewport)': 'Se adapta a pantallas de móvil (meta viewport)',
        'Linked stylesheets': 'Hojas de estilo enlazadas',
        'No stylesheet is linked.': 'No hay ninguna hoja de estilo enlazada.',
        'Add a .css file in the Files tab to link it here.': 'Añade un archivo .css en la pestaña Archivos para enlazarlo aquí.',
        'Stylesheet of this document': 'Hoja de estilo de este documento',
        'Link it': 'Enlazarla',
        'from the web': 'de la web',
        'a file of this document': 'un archivo de este documento',
        'missing': 'falta',
        'Show it in the code': 'Mostrarlo en el código',
        'Not set': 'Sin definir',
        'English (en)': 'Inglés (en)',
        'English, US (en-US)': 'Inglés, EE. UU. (en-US)',
        'English, UK (en-GB)': 'Inglés, Reino Unido (en-GB)',
        'German (de)': 'Alemán (de)',
        'German, Switzerland (de-CH)': 'Alemán, Suiza (de-CH)',
        'German, Germany (de-DE)': 'Alemán, Alemania (de-DE)',
        'French (fr)': 'Francés (fr)',
        'Italian (it)': 'Italiano (it)',
        'Spanish (es)': 'Español (es)',
        'Portuguese (pt)': 'Portugués (pt)',
        'Dutch (nl)': 'Neerlandés (nl)',
        'elements · about': 'elementos · aprox.',
        'element · about': 'elemento · aprox.',
        'words ·': 'palabras ·',
        'headings ·': 'encabezados ·',
        'heading ·': 'encabezado ·',
        'files': 'archivos',
        'file': 'archivo',
        'Make it a complete page': 'Convertir en una página completa',

        /* ---------- Export ---------- */
        'Close': 'Cerrar',
        'File name': 'Nombre del archivo',
        'Page': 'Página',
        'HTML page (.html)': 'Página HTML (.html)',
        'One HTML file with its files inside': 'Un archivo HTML con sus archivos dentro',
        'HTML with its files (ZIP)': 'HTML con sus archivos (ZIP)',
        'PDF (print or save as PDF)': 'PDF (imprimir o guardar como PDF)',
        'Plain text': 'Texto sin formato',
        'Result': 'Resultado',
        'Download everything at once: .html, its files, the HTML with the files inside and the text':
            'Descarga todo a la vez: .html, sus archivos, el HTML con los archivos dentro y el texto',
        'All formats (ZIP)': 'Todos los formatos (ZIP)',
        'Print / Save as PDF': 'Imprimir / Guardar como PDF',
        '(The page with its files inside is created when you download or copy it.)':
            '(La página con sus archivos dentro se crea al descargarla o copiarla.)',

        /* ---------- My documents ---------- */
        'Search by name': 'Buscar por nombre',
        'Search your documents': 'Busca en tus documentos',
        'Open an .html file from your computer as a new document': 'Abre un archivo .html de tu equipo como documento nuevo',
        'New document': 'Documento nuevo',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Haz clic en un documento para abrirlo. Solo se guardan en este navegador: no se sube nada. Si borras los datos del sitio en el navegador, desaparecen; descarga los que quieras conservar.',
        'Download every document as an .html file (with its files) in one ZIP': 'Descarga todos los documentos como archivos .html (con sus archivos) en un ZIP',
        'Download all (ZIP)': 'Descargar todo (ZIP)',
        'Duplicate': 'Duplicar',
        'Download as .html': 'Descargar como .html',
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
        'The document is now in the HTML Editor tab you already had open. Switch to that tab, or open it here.':
            'El documento está ahora en la pestaña del Editor de HTML que ya tenías abierta. Cambia a esa pestaña o ábrelo aquí.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)': 'Aquí no se permite copiar; está seleccionado abajo: pulsa Ctrl+C (⌘C)',
        'Paste it into your AI and say what it should write.': 'Pégalo en tu IA y dile qué debe escribir.',
        'Prompt copied - paste it into your AI and say what it should write': 'Prompt copiado: pégalo en tu IA y dile qué debe escribir',
        'This link is incomplete or damaged - please ask the AI to send it again': 'Este enlace está incompleto o dañado: pide a la IA que lo envíe de nuevo',

        /* ---------- Save to your server ---------- */
        'Save to your server': 'Guardar en tu servidor',
        'Webhook address': 'Dirección del webhook',
        'https://example.com/api/html': 'https://example.com/api/html',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(opcional, se envía como «Authorization: Bearer …»; se guarda hasta cerrar esta pestaña)',
        'Send automatically a few seconds after each change (otherwise only when you click': 'Enviar automáticamente unos segundos después de cada cambio (si no, solo cuando hagas clic en',
        'or press Ctrl+S)': 'o pulses Ctrl+S)',
        'Only for “': 'Solo para «',
        '” (other documents use the general address)': '» (los demás documentos usan la dirección general)',
        'What your server receives': 'Qué recibe tu servidor',
        'A POST request with JSON (your server must allow CORS from https://html.giit.ch):': 'Una petición POST con JSON (tu servidor debe permitir CORS desde https://html.giit.ch):',
        'Embed the editor in your website': 'Integra el editor en tu sitio web',
        'Send now': 'Enviar ahora',
        'Save setting': 'Guardar ajuste',

        /* ---------- Help ---------- */
        'How it works': 'Cómo funciona',
        'Keyboard shortcuts': 'Atajos de teclado',
        'Bold / italic / underline the selected text': 'Negrita / cursiva / subrayado del texto seleccionado',
        'Show the cursor\'s place in the preview': 'Mostrar el lugar del cursor en la vista previa',
        'Indent / outdent': 'Sangrar / quitar sangría',
        'Undo / redo': 'Deshacer / rehacer',
        'Save (download .html, or to your server) / export': 'Guardar (descargar .html, o en tu servidor) / exportar',
        'Print / save as PDF': 'Imprimir / guardar como PDF',

        /* ---------- Messages ---------- */
        'The browser storage is full - download and delete documents under "My documents"': 'El almacenamiento del navegador está lleno: descarga y elimina documentos en «Mis documentos»',
        'The browser storage is full - delete or download documents under "My documents" first': 'El almacenamiento del navegador está lleno: primero elimina o descarga documentos en «Mis documentos»',
        'The browser storage is full - delete or download some documents first': 'El almacenamiento del navegador está lleno: primero elimina o descarga algunos documentos',
        'The browser storage is full': 'El almacenamiento del navegador está lleno',
        'Nothing to undo': 'Nada que deshacer',
        'Nothing to redo': 'Nada que rehacer',
        'The code changed meanwhile - the edit was not used': 'Mientras tanto el código cambió: la edición no se aplicó',
        'The code changed meanwhile - the picture was not moved': 'Mientras tanto el código cambió: la imagen no se movió',
        'The file is removed from this document. Places that use it show nothing. "Undo" does not bring it back.':
            'El archivo se quita de este documento. Los lugares que lo usan no muestran nada. «Deshacer» no lo recupera.',
        'A document can keep pictures, stylesheets, scripts, fonts, PDFs, audio and video': 'Un documento puede contener imágenes, hojas de estilo, scripts, fuentes, PDF, audio y vídeo',
        'The file is larger than 12 MB': 'El archivo ocupa más de 12 MB',
        'The file could not be read': 'No se pudo leer el archivo',
        'The code is now a complete page': 'El código es ahora una página completa',
        'The code is tidy already': 'El código ya está ordenado',
        'Code tidied up': 'Código ordenado',
        'This document is empty already': 'Este documento ya está vacío',
        'Everything between <body> and </body> is removed; the head (title, styles, meta tags) stays. "Undo" brings it back as long as the page is open.':
            'Se quita todo lo que hay entre <body> y </body>; el head (título, estilos, etiquetas meta) se queda. «Deshacer» lo recupera mientras la página esté abierta.',
        'Everything is removed. "Undo" brings it back as long as the page is open.': 'Se quita todo. «Deshacer» lo recupera mientras la página esté abierta.',
        'Start over': 'Empezar de nuevo',
        'The file is larger than 8 MB': 'El archivo ocupa más de 8 MB',
        'HTML pasted from the clipboard - "Undo" brings the old code back': 'HTML pegado desde el portapapeles: «Deshacer» recupera el código anterior',
        'This browser does not allow printing here': 'Este navegador no permite imprimir aquí',
        'Downloaded': 'Descargado',
        'ZIP downloaded: .html, its files, the page as one file and the text': 'ZIP descargado: .html, sus archivos, la página como un solo archivo y el texto',
        'Copied to the clipboard': 'Copiado al portapapeles',
        'This browser does not allow copying this': 'Este navegador no permite copiar esto',
        'Code copied': 'Código copiado',
        '.html with its files downloaded (ZIP)': '.html con sus archivos descargado (ZIP)',
        '.html downloaded': '.html descargado',
        'Add': 'Añadir',
        'The document and its files are removed from this browser for good. Download it first if you want to keep a copy.':
            'El documento y sus archivos se eliminan de este navegador para siempre. Descárgalo antes si quieres conservar una copia.',

        /* ---------- Problems the editor finds (html.js) ---------- */
        'The comment <!-- is never closed - add -->': 'El comentario <!-- nunca se cierra: añade -->',
        '<img> without alt - describe the picture (alt="…"), or alt="" if it only decorates': '<img> sin alt: describe la imagen (alt="…"), o alt="" si solo es decorativa',
        'No <!DOCTYPE html> at the top - browsers show the page in an older mode (quirks mode)': 'No hay <!DOCTYPE html> al principio: los navegadores muestran la página en un modo antiguo (modo quirks)',
    },

    html: {

        '<b>Export</b> also has <b>Open in another editor</b>: it converts the document and opens it as a new document there. Anything the other format cannot hold is listed first.':

            '<b>Exportar</b> también ofrece <b>Abrir en otro editor</b>: convierte el documento y lo abre allí como documento nuevo. Lo que el otro formato no puede contener se muestra antes.',

        '<b>Insert</b> &gt; <b>New page</b> sets a page break for printing and PDF; the preview shows it as a dashed line. Headings stay with their text and tables and pictures are not cut. In Export, <b>Apply page breaks</b> turns them off for a PDF.':

            '<b>Insertar</b> &gt; <b>Página nueva</b> pone un salto de página para imprimir y PDF; la vista previa lo muestra como línea discontinua. Los títulos siguen con su texto y las tablas e imágenes no se cortan. En <b>Exportar</b>, <b>Aplicar saltos de página</b> los desactiva para un PDF.',
        /* Export */
        'The print dialog opens with the page as it is in the preview (without scripts). Choose <b>Save as PDF</b> (or "Microsoft Print to PDF") as the printer. In Chrome and Edge, untick "Headers and footers" and tick "Background graphics" if the page has colors. The text in the PDF can be selected.':
            'El diálogo de impresión se abre con la página tal como está en la vista previa (sin scripts). Elige <b>Guardar como PDF</b> (o «Microsoft Print to PDF») como impresora. En Chrome y Edge, desmarca «Encabezados y pies de página» y marca «Gráficos de fondo» si la página tiene colores. El texto del PDF se puede seleccionar.',

        /* Document tab without a head */
        'This code has no <code>&lt;html&gt;</code> with a <code>&lt;head&gt;</code>, so it is shown as a part of a page. Title, language and description belong in the head.':
            'Este código no tiene <code>&lt;html&gt;</code> con un <code>&lt;head&gt;</code>, así que se muestra como parte de una página. El título, el idioma y la descripción van en el head.',

        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Haz clic en <b>Copiar prompt</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'La IA responde con un enlace: haz clic en él o pega abajo la respuesta completa. <b>Deshacer</b> lo revierte.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'La IA responde con un enlace: <b>pega abajo su respuesta completa</b> (un enlace pulsado abre un editor aparte). <b>Deshacer</b> lo revierte.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'El editor puede enviar cada versión guardada a tu propio servidor (un <b>webhook</b>), para que tu trabajo se guarde donde tú quieras. No se envía nada hasta que introduzcas aquí una dirección.',
        'Also possible: <code>?src=&lt;URL of an .html file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>htmleditor:ai</code>, <code>htmleditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'También es posible: <code>?src=&lt;URL de un archivo .html&gt;</code> abre un archivo, <code>&amp;webhook=&lt;URL&gt;</code> guarda allí este documento. El editor también puede abrirse en una ventana propia (<code>?embed=window</code>), y tu página puede pasarle su propio prompt de IA y una clave de sesión para que la IA envíe su resultado a tu servidor (<code>htmleditor:ai</code>, <code>htmleditor:key-request</code>): mira «Usa el editor en tu propio sitio web» debajo del editor. Los detalles están en <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> HTML on the left - or start with <b>New</b> and one of the templates. The preview shows the page as you type.':
            '<b>Escribe</b> HTML a la izquierda, o empieza con <b>Nuevo</b> y una de las plantillas. La vista previa muestra la página mientras escribes.',
        '<b>Click text in the preview</b> to edit it right there. Enter starts a new paragraph; Shift+Enter inserts a line break. Ctrl+Enter (Cmd+Enter on macOS) or a click elsewhere applies the edit; Escape cancels. Each edit is one step for Undo. A click on a picture or any other element jumps to its place in the code. The element at the code cursor gets a frame in the preview.':
            '<b>Haz clic en un texto de la vista previa</b> para editarlo allí mismo. Enter inicia un párrafo nuevo; Shift+Enter inserta un salto de línea. Ctrl+Enter (Cmd+Enter en macOS) o un clic en otro sitio aplica la edición; Escape la cancela. Cada edición se deshace en un solo paso. Un clic en una imagen o en cualquier otro elemento salta a su lugar en el código. El elemento en el cursor del código lleva un marco en la vista previa.',
        '<b>Document</b> on the right sets title, language and description of the page; <b>Insert</b> has ready-made pieces (headings, lists, tables, media, form fields, meta tags); <b>Files</b> holds the pictures, stylesheets and fonts of the page; <b>Outline</b> lists the headings.':
            '<b>Documento</b>, a la derecha, define el título, el idioma y la descripción de la página; <b>Insertar</b> tiene bloques listos para usar (encabezados, listas, tablas, multimedia, campos de formulario, etiquetas meta); <b>Archivos</b> guarda las imágenes, hojas de estilo y fuentes de la página; <b>Esquema</b> lista los encabezados.',
        'Problems in the code (an unclosed <code>&lt;div&gt;</code>, a picture without <code>alt</code>, a missing file) are listed above the code - click one to go there.':
            'Los problemas del código (un <code>&lt;div&gt;</code> sin cerrar, una imagen sin <code>alt</code>, un archivo que falta) aparecen encima del código: haz clic en uno para ir allí.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser.':
            '<b>Mis documentos</b> (el botón de carpeta arriba a la izquierda) lista todos los documentos guardados en este navegador.',
        '<b>Export</b> makes an HTML file, one HTML file with the files inside, a ZIP, a PDF (via the print dialog) or plain text. <b>Download .html</b> saves the code.':
            '<b>Exportar</b> crea un archivo HTML, un archivo HTML con los archivos dentro, un ZIP, un PDF (con el diálogo de impresión) o texto sin formato. <b>Descargar .html</b> guarda el código.',
        'The preview shows HTML and CSS as the browser does, but scripts and <code>on…</code> attributes never run and links do not navigate - so any page is safe to open.':
            'La vista previa muestra HTML y CSS como lo hace el navegador, pero los scripts y los atributos <code>on…</code> nunca se ejecutan y los enlaces no navegan: así cualquier página se puede abrir con seguridad.',
        'Comment lines in or out (<code>&lt;!-- --&gt;</code>)': 'Comentar o descomentar líneas (<code>&lt;!-- --&gt;</code>)',
        'Typing <code>&gt;</code> at the end of a start tag adds its end tag, and <kbd>Enter</kbd> between the two indents the new line. Typing <code>&lt;/</code> closes the element that is open.':
            'Al escribir <code>&gt;</code> al final de una etiqueta de apertura se añade su etiqueta de cierre, y <kbd>Enter</kbd> entre las dos sangra la línea nueva. Al escribir <code>&lt;/</code> se cierra el elemento que está abierto.',
    },

    patterns: [
        /* ---------- Status lines ---------- */
        ['^(\\d+) lines · ([\\d.]+ K?B)$', (m, l, kb) => `${l} ${getPlural(l, 'línea', 'líneas')} · ${kb}`],
        ['^\\.html and (\\d+) (?:file|files)$', (m, k) => `.html y ${k} ${getPlural(k, 'archivo', 'archivos')}`],
        ['^([\\d,]+) bytes$', (m, b) => `${formatThousands(b)} bytes`],
        ['^\\d{1,3}(?:,\\d{3})+$', m => formatThousands(m)],

        /* Problems above the code */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'error', 'errores')}`],
        ['^· (\\d+) (?:note|notes)$', (m, k) => `· ${k} ${getPlural(k, 'aviso', 'avisos')}`],
        ['^(\\d+) (?:note|notes)$', (m, k) => `${k} ${getPlural(k, 'aviso', 'avisos')}`],
        ['^Line (\\d+)$', 'Línea $1'],
        ['^The preview failed: (.*)$', 'La vista previa falló: $1'],
        ['^The tag <(\\S+) is never closed with >$', 'La etiqueta <$1 nunca se cierra con >'],
        ['^<(\\S+)> is obsolete - use CSS or a current element instead$', '<$1> está obsoleto: usa CSS o un elemento actual en su lugar'],
        ['^Unknown element <(\\S+)>$', 'Elemento desconocido <$1>'],
        ['^The attribute (\\S+) is given twice in <(\\S+)> - the browser uses the first one$', 'El atributo $1 aparece dos veces en <$2>: el navegador usa el primero'],
        ['^The id "(.*)" is used twice$', 'El id «$1» se usa dos veces'],
        ['^<(\\S+)\\/> - in HTML only void elements \\(like <br>\\) close themselves; add <\\/(\\S+)>$', '<$1/>: en HTML solo los elementos vacíos (como <br>) se cierran solos; añade </$2>'],
        ['^<(\\S+)> is never closed - add <\\/(\\S+)>$', '<$1> nunca se cierra: añade </$2>'],
        ['^<\\/(\\S+)> - <(\\S+)> has no end tag$', '</$1>: <$2> no tiene etiqueta de cierre'],
        ['^<\\/(\\S+)> without an opening <(\\S+)>$', '</$1> sin un <$2> de apertura'],
        ['^<(\\S+)> is not closed before <\\/(\\S+)> - add <\\/(\\S+)> first$', '<$1> no se cierra antes de </$2>: añade primero </$3>'],
        ['^The file "(.+)" is missing - add it in the Files tab \\(or drop it into the editor\\)$', 'Falta el archivo «$1»: añádelo en la pestaña Archivos (o suéltalo en el editor)'],

        /* ---------- Insert tab ---------- */
        ['^Insert (&[#\\w]+;)$', 'Insertar $1'],

        /* ---------- Files tab ---------- */
        ['^(\\d+) (?:file|files) · (.+)$', (m, k, s) => `${k} ${getPlural(k, 'archivo', 'archivos')} · ${s}`],
        ['^Files belong to “(.*)” and stay in your browser\\. Drop or paste pictures, stylesheets or fonts anywhere in the editor, or add them here; the code uses them by their name, e\\.g\\.$',
            'Los archivos pertenecen a «$1» y se quedan en tu navegador. Suelta o pega imágenes, hojas de estilo o fuentes en cualquier parte del editor, o añádelas aquí; el código las usa por su nombre, p. ej.'],
        ['^Choose the file for (.+)$', 'Elige el archivo para $1'],
        ['^Insert (.+) at the cursor$', 'Insertar $1 en el cursor'],
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
        ['^"(.+)" now has the new content$', '«$1» tiene ahora el nuevo contenido'],
        ['^File "(.+)" added to "(.+)"$', 'Archivo «$1» añadido a «$2»'],
        ['^"(.+)" is linked already$', '«$1» ya está enlazado'],
        ['^"(.+)" is linked$', '«$1» está enlazado'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '«$1» está vacío ahora: «Deshacer» lo recupera'],
        ['^"(.+)" opened$', '«$1» abierto'],
        ['^New document "(.+)" - your other documents are under "My documents"$', 'Nuevo documento «$1»: tus otros documentos están en «Mis documentos»'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$', 'Nuevo documento «$1» de la IA: tus otros documentos no cambian'],
        ['^Opened "(.+)" - it is now in "My documents"$', '«$1» abierto: ahora está en «Mis documentos»'],
        ['^Opened "(.+)" with (\\d+) (?:file|files)$', (m, f, k) => `«${f}» abierto con ${k} ${getPlural(k, 'archivo', 'archivos')}`],
        ['^"(.+)" could not be opened: (.*)$', (m, f, why) => `No se pudo abrir «${f}»: ${ZIP[why] || why}`],
        ['^Document received - the editor found (\\d+) (?:problem|problems), see above the code$', (m, k) => `Documento recibido: el editor encontró ${k} ${getPlural(k, 'problema', 'problemas')}, mira encima del código`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '«$1» modificado por la IA: «Deshacer» lo revierte'],
        ['^"(.+)" duplicated$', '«$1» duplicado'],
        ['^Delete "(.+)"\\?$', '¿Eliminar «$1»?'],
        ['^"(.+)" deleted$', '«$1» eliminado'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Abrir $1'],
    ],
};
