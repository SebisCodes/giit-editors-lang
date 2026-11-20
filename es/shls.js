/* Spanish texts of the SHLS editor: the bar, the work area (code, records,
   record, insert, convert, outline), its dialogs and messages, and the
   problems found in the code. What all editors share is in
   common.js; how the dictionaries are used is described in
   i18n.js. Names of documents, sections, keys and values stay as they are:
   the patterns copy them into the Spanish text. */

import { formatTime, formatSize, formatThousands, getPlural } from './format.js';

/* "1,234" -> "1.234" (Spanish thousands separator) */

/* When a document was last changed (files.js): "just now", "5 min ago", "Mon D, YYYY" … */

/**
 * Translates the text the pattern found (recs in the English pattern).
 * @param {string} k - the English text the pattern found.
 * @returns {string} the text in the language.
 */
const translateRecords = k => getPlural(k, 'registro', 'registros');
/**
 * Translates the text the pattern found (keys in the English pattern).
 * @param {string} k - the English text the pattern found.
 * @returns {string} the text in the language.
 */
const translateKeys = k => getPlural(k, 'clave', 'claves');

export default {
    text: {
        "Read back from SHLS, the data is not the same (for example records whose keys are in another order than in the first record) - check the result.": "Al volver a leerlos desde SHLS, los datos no son los mismos (por ejemplo, registros cuyas claves están en otro orden que en el primer registro) - revise el resultado.",
        /* ---------- Top bar ---------- */
        'SHLS Editor - home': 'Editor de SHLS - inicio',
        'SHLS Editor': 'Editor de SHLS',
        'File': 'Archivo',
        'My documents (Ctrl+O)': 'Mis documentos (Ctrl+O)',
        'My documents': 'Mis documentos',
        'New document, or start this one over': 'Documento nuevo, o empezar este de nuevo',
        'New': 'Nuevo',
        'New blank document': 'Documento nuevo en blanco',
        'An empty document - your other documents stay as they are': 'Un documento vacío: tus otros documentos se quedan como están',
        'Empty section': 'Sección vacía',
        'One section with two keys and one record to fill in': 'Una sección con dos claves y un registro para rellenar',
        'Products and companies': 'Productos y empresas',
        'The first README example: records right after each key block': 'El primer ejemplo del README: los registros justo después de cada bloque de claves',
        'Key blocks first': 'Primero los bloques de claves',
        'The second README example: the records follow under the section name again': 'El segundo ejemplo del README: los registros siguen bajo el nombre de la sección repetido',
        'Companies, departments and employees, nested three levels': 'Empresas, departamentos y empleados, anidados en tres niveles',
        'The same data with the key blocks first and fewer blank lines': 'Los mismos datos con los bloques de claves primero y menos líneas en blanco',
        'Start this document over': 'Empezar este documento de nuevo',
        'Empties the document - "Undo" brings it back': 'Vacía el documento: «Deshacer» lo recupera',
        'Open an SHLS file from your computer (JSON, YAML, CSV and JSON Lines files are converted; you can also drag a file into the window)':
            'Abrir un archivo SHLS de tu equipo (los archivos JSON, YAML, CSV y JSON Lines se convierten; también puedes arrastrar un archivo a la ventana)',
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
        'Save the document as a .shls file (Ctrl+S)': 'Guardar el documento como archivo .shls (Ctrl+S)',
        'Download .shls': 'Descargar .shls',
        'JSON, YAML, CSV and more (Ctrl+E)': 'JSON, YAML, CSV y más (Ctrl+E)',
        'Export…': 'Exportar…',

        /* ---------- Views and work area ---------- */
        'View': 'Vista',
        'Edit': 'Editar',
        'Selection': 'Selección',
        'Records': 'Registros',
        'Record': 'Registro',
        'SHLS code': 'Código SHLS',
        'Copy the code to the clipboard': 'Copiar el código al portapapeles',
        'Copy code': 'Copiar código',
        'Copy': 'Copiar',
        'Lay the document out as the reference SHLSEncoder does: all key blocks first, then the records': 'Ordenar el documento como lo hace el SHLSEncoder de referencia: primero todos los bloques de claves, luego los registros',
        'Tidy up': 'Ordenar',
        'Drag to change the width of the code area': 'Arrastra para cambiar el ancho del área de código',
        'Drag to change the width': 'Arrastra para cambiar el ancho',
        'Unfold everything': 'Desplegar todo',
        'Fold the key blocks and records': 'Plegar los bloques de claves y los registros',
        'Add: a record after the selected record (or at the end of the section), a key after the selected key': 'Añadir: un registro tras el seleccionado (o al final de la sección), una clave tras la clave seleccionada',
        'Add': 'Añadir',
        'Duplicate the selected record or key': 'Duplicar el registro o la clave seleccionados',
        'Duplicate': 'Duplicar',
        'Move the selected record or key up (Alt+Up)': 'Subir el registro o la clave seleccionados (Alt+Up)',
        'Move up': 'Subir',
        'Move the selected record or key down (Alt+Down)': 'Bajar el registro o la clave seleccionados (Alt+Down)',
        'Move down': 'Bajar',
        'Remove the selected record, key or section (Delete)': 'Quitar el registro, la clave o la sección seleccionados (Delete)',
        'Remove': 'Quitar',
        'Search keys and values': 'Buscar claves y valores',
        'Previous match (Shift+Enter)': 'Coincidencia anterior (Shift+Enter)',
        'Previous match': 'Coincidencia anterior',
        'Next match (Enter)': 'Coincidencia siguiente (Enter)',
        'Next match': 'Coincidencia siguiente',
        'Copy the path of the selection': 'Copiar la ruta de la selección',
        'Copy path': 'Copiar ruta',
        'Nothing selected': 'Nada seleccionado',
        'Side panel': 'Panel lateral',
        'The selected record, value or key': 'El registro, valor o clave seleccionado',
        'New records, keys and sections, and pieces of code': 'Registros, claves y secciones nuevos, y fragmentos de código',
        'Insert': 'Insertar',
        'Tokens, and the document in other formats': 'Tokens y el documento en otros formatos',
        'Convert': 'Convertir',
        'The sections of the document': 'Las secciones del documento',
        'Outline': 'Esquema',
        'Open it here': 'Abrir aquí',
        'Drop the file here': 'Suelta el archivo aquí',
        'Hide': 'Ocultar',
        'Show': 'Mostrar',

        /* ---------- Records view ---------- */
        'Keys': 'Claves',
        'the template of each record': 'la plantilla de cada registro',
        'Click to rename the section': 'Haz clic para renombrar la sección',
        'Click to rename the key - only the key block changes': 'Haz clic para renombrar la clave: solo cambia el bloque de claves',
        'Click to change the value': 'Haz clic para cambiar el valor',
        'Value': 'Valor',
        'Key': 'Clave',
        'Section name': 'Nombre de sección',
        'The code cannot be read - see the problem above the code.': 'El código no se puede leer: mira el problema encima del código.',
        'No sections yet - write a section name, its keys (indented) and, after one blank line, the records. Or choose a template under "New".':
            'Aún no hay secciones: escribe un nombre de sección, sus claves (con sangría) y, tras una línea en blanco, los registros. O elige una plantilla en «Nuevo».',

        /* ---------- Record tab ---------- */
        'Click a section, a key or a record in the middle.': 'Haz clic en el centro en una sección, una clave o un registro.',
        'The document has no sections yet.': 'El documento aún no tiene secciones.',
        'The document has no sections yet': 'El documento aún no tiene secciones',
        'Path': 'Ruta',
        'Section': 'Sección',
        'Add a record': 'Añadir registro',
        'Add a key': 'Añadir clave',
        'Remove the section': 'Quitar la sección',
        'Add a key after it': 'Añadir después',
        'Add a record after it': 'Añadir después',
        'Renaming a key changes only the key block. Adding, moving or removing a key changes every record of the section.':
            'Renombrar una clave solo cambia el bloque de claves. Añadir, mover o quitar una clave cambia cada registro de la sección.',
        'Apply': 'Aplicar',

        /* ---------- Insert tab ---------- */
        'Add to the selection': 'Añadir a la selección',
        'A record after the selected record (or at the end of the section), a key after the selected key - every record gets a value "-" for it. One step for Undo.':
            'Un registro tras el seleccionado (o al final de la sección), una clave tras la clave seleccionada: cada registro recibe para ella el valor «-». Un paso de Deshacer.',
        'A new record with "-" for each value': 'Un registro nuevo con «-» en cada valor',
        'A new key in the key block; every record gets "-"': 'Una clave nueva en el bloque de claves; cada registro recibe «-»',
        'A copy of the selected record or key': 'Una copia del registro o la clave seleccionados',
        'A new section at the end, with two keys and one record': 'Una sección nueva al final, con dos claves y un registro',
        'At the cursor in the code': 'En el cursor del código',
        'A section name, its key block, a blank line and one record': 'Un nombre de sección, su bloque de claves, una línea en blanco y un registro',
        'The placeholder for the line of a nested list': 'El marcador para la línea de una lista anidada',
        '- (no value)': '- (sin valor)',
        'SHLS has no empty values: a dash stands for none': 'SHLS no tiene valores vacíos: un guion indica que no hay valor',
        'Today\'s date': 'La fecha de hoy',
        'The date as YYYY-MM-DD': 'La fecha como AAAA-MM-DD',

        /* ---------- Convert tab ---------- */
        'JSON on one line': 'JSON en una línea',
        'This document': 'Este documento',
        'Writes the document anew as the reference SHLSEncoder does: all key blocks first, then the records of each section':
            'Reescribe el documento como lo hace el SHLSEncoder de referencia: primero todos los bloques de claves, luego los registros de cada sección',
        'Write as SHLSEncoder does': 'Escribir como SHLSEncoder',
        'Convert to': 'Convertir a',
        'JSON (as SHLSDecoder reads it)': 'JSON (como lo lee SHLSDecoder)',
        'CSV (one section)': 'CSV (una sección)',
        'JSON Lines (one section)': 'JSON Lines (una sección)',
        'The records as plain text': 'Los registros como texto sin formato',
        'Result': 'Resultado',
        'Download': 'Descargar',
        'Opens the result as a new document in the JSON Editor (in a new tab)': 'Abre el resultado como documento nuevo en el Editor de JSON (en una pestaña nueva)',
        'Open in the JSON Editor': 'Abrir en el Editor de JSON',
        'Exactly the data the reference SHLSDecoder reads: every value is a string.': 'Exactamente los datos que lee el SHLSDecoder de referencia: cada valor es una cadena.',
        'The code cannot be read as SHLS - fix the problem above the code first': 'El código no se puede leer como SHLS: corrige primero el problema encima del código',
        'Write it anyway?': '¿Escribirlo de todos modos?',
        'Read back, the encoder\'s text gives different data than this document (SHLSEncoder cannot write every structure). "Undo" brings the document back.':
            'Al volver a leerlo, el texto del codificador da datos distintos de este documento (SHLSEncoder no puede escribir todas las estructuras). «Deshacer» recupera el documento.',
        'Write it': 'Escribirlo',
        'The document is written as SHLSEncoder does already': 'El documento ya está escrito como lo hace SHLSEncoder',
        'Written as SHLSEncoder does': 'Escrito como SHLSEncoder',

        /* ---------- Outline tab ---------- */
        'The sections of the document. Click one to go there.': 'Las secciones del documento. Haz clic en una para ir allí.',

        /* ---------- Export ---------- */
        'Close': 'Cerrar',
        'File name': 'Nombre del archivo',
        'SHLS file as it is (.shls)': 'Archivo SHLS tal cual (.shls)',
        'JSON, as SHLSDecoder reads it (.json)': 'JSON, como lo lee SHLSDecoder (.json)',
        'YAML file (.yaml)': 'Archivo YAML (.yaml)',
        'CSV table of the selected section (.csv)': 'Tabla CSV de la sección seleccionada (.csv)',
        'The records as plain text (.txt)': 'Los registros como texto sin formato (.txt)',
        'Download every format at once': 'Descargar todos los formatos a la vez',
        'All formats (ZIP)': 'Todos los formatos (ZIP)',

        /* ---------- My documents ---------- */
        'Search by name': 'Buscar por nombre',
        'Search your documents': 'Buscar en tus documentos',
        'Open a file from your computer as a new document': 'Abrir un archivo de tu equipo como documento nuevo',
        'New document': 'Documento nuevo',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Haz clic en un documento para abrirlo. Los documentos se guardan solo en este navegador: no se sube nada. Borrar los datos del sitio en el navegador los elimina, así que descarga los que quieras conservar.',
        'Download every document as a .shls file in one ZIP': 'Descargar cada documento como archivo .shls en un ZIP',
        'Download all (ZIP)': 'Descargar todo (ZIP)',
        'Rename': 'Renombrar',
        'Download as .shls': 'Descargar como .shls',
        'Delete': 'Eliminar',
        'New name': 'Nombre nuevo',
        'This document is open': 'Este documento está abierto',
        'Click to open this document': 'Haz clic para abrir este documento',
        'No documents yet.': 'Aún no hay documentos.',

        /* ---------- AI Assistant ---------- */
        'Any AI can work with you - ChatGPT, Claude, Gemini, Copilot. The prompt explains SHLS, so the AI writes valid SHLS.':
            'Cualquier IA puede trabajar contigo: ChatGPT, Claude, Gemini, Copilot. El prompt explica SHLS, así que la IA escribe SHLS válido.',
        'Connected AI': 'IA conectada',
        'Connected to': 'Conectado a',
        'the AI sends its result there, and it opens here.': 'la IA envía allí su resultado, y se abre aquí.',
        'What': 'Qué',
        'tells the AI': 'le dice a la IA',
        'The AI should': 'La IA debe',
        'Change “': 'Cambiar «',
        '”': '»',
        'Make a new document': 'Crear un documento nuevo',
        'The AI\'s answer (or press Ctrl+V anywhere):': 'La respuesta de la IA (o pulsa Ctrl+V en cualquier sitio):',
        'The document travels in the link after the “#”, which no server sees. What you paste into your AI is handled by its provider.':
            'El documento viaja en el enlace después del «#», que ningún servidor ve. Lo que pegas en tu IA lo procesa su proveedor.',
        'The prompt - copy it with Ctrl+C': 'El prompt: cópialo con Ctrl+C',
        'Copy prompt': 'Copiar prompt',
        'Paste it into your AI and say what it should change.': 'Pégalo en tu IA y dile qué debe cambiar.',
        '(no key yet)': '(aún sin clave)',
        '(key valid while the editor is open)': '(clave válida mientras el editor esté abierto)',
        'The link could not be read': 'No se pudo leer el enlace',
        'The document in this link is incomplete or damaged. If the AI\'s link was split over several lines (as in a terminal), copy the whole answer and paste it into the editor with Ctrl+V - the editor joins the lines.':
            'El documento de este enlace está incompleto o dañado. Si el enlace de la IA se partió en varias líneas (como en un terminal), copia la respuesta entera y pégala en el editor con Ctrl+V: el editor une las líneas.',
        'Loading…': 'Cargando…',
        'Taken over by your editor': 'Recibido por tu editor',
        'The document is now in the SHLS Editor tab you already had open. Switch to that tab, or open it here.':
            'El documento ya está en la pestaña del Editor de SHLS que tenías abierta. Cambia a esa pestaña o ábrelo aquí.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)': 'Aquí no se permite copiar: el texto está seleccionado abajo; pulsa Ctrl+C (⌘C)',
        'Prompt copied - paste it into your AI and say what it should write': 'Prompt copiado: pégalo en tu IA y dile qué debe escribir',
        'This link is incomplete or damaged - please ask the AI to send it again': 'Este enlace está incompleto o dañado: pide a la IA que lo envíe de nuevo',

        /* ---------- Save to your server ---------- */
        'Save to your server': 'Guardar en tu servidor',
        'Webhook address': 'Dirección del webhook',
        'https://example.com/api/shls': 'https://example.com/api/shls',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(opcional, se envía como «Authorization: Bearer …»; se guarda hasta cerrar esta pestaña)',
        'Send automatically a few seconds after each change (otherwise only when you click': 'Enviar automáticamente unos segundos después de cada cambio (si no, solo cuando hagas clic en',
        'or press Ctrl+S)': 'o pulses Ctrl+S)',
        'Only for “': 'Solo para «',
        '” (other documents use the general address)': '» (los demás documentos usan la dirección general)',
        'What your server receives': 'Qué recibe tu servidor',
        'A POST request with JSON (your server must allow CORS from https://shls.giit.ch); content is the document as a string:':
            'Una petición POST con JSON (tu servidor debe permitir CORS desde https://shls.giit.ch); content es el documento como cadena:',
        'Embed the editor in your website': 'Integra el editor en tu sitio web',
        'Send now': 'Enviar ahora',
        'Save setting': 'Guardar ajuste',

        /* ---------- Help ---------- */
        'How it works': 'Cómo funciona',
        'Keyboard shortcuts': 'Atajos de teclado',
        'In the records: go up and down, fold and unfold': 'En los registros: subir y bajar, plegar y desplegar',
        'In the records: change the value, key or section name': 'En los registros: cambiar el valor, la clave o el nombre de sección',
        'In the records: remove the record or key': 'En los registros: quitar el registro o la clave',
        'In the records: move the record or key up / down': 'En los registros: subir / bajar el registro o la clave',
        'Indent / outdent in the code by one level': 'Sangrar / quitar sangría un nivel en el código',
        'Undo / redo': 'Deshacer / rehacer',
        'Save (download, or to your server) / export': 'Guardar (descargar, o en tu servidor) / exportar',
        'Alt': 'tecla Alt',
        'Escape': "Esc",
        'A click in the middle puts the code\'s cursor on that line; the cursor in the code marks its record, key or value. Problems (a record with a value too few, indentation that is not a whole level, a missing blank line) are listed above the code with their line - click one to go there.':
            'Un clic en el centro pone el cursor del código en esa línea; el cursor en el código marca su registro, clave o valor. Los problemas (un registro con un valor de menos, una sangría que no es un nivel entero, una línea en blanco que falta) aparecen sobre el código con su línea: haz clic en uno para ir allí.',
        'Enter keeps the indentation of the line; after a section name it starts the key block.': 'Enter mantiene la sangría de la línea; tras un nombre de sección empieza el bloque de claves.',

        /* ---------- Messages ---------- */
        'The browser storage is full - download and delete documents under "My documents"': 'El almacenamiento del navegador está lleno: descarga y elimina documentos en «Mis documentos»',
        'The browser storage is full - delete or download documents under "My documents" first': 'El almacenamiento del navegador está lleno: elimina o descarga primero documentos en «Mis documentos»',
        'The browser storage is full - delete or download some documents first': 'El almacenamiento del navegador está lleno: elimina o descarga primero algunos documentos',
        'The browser storage is full': 'El almacenamiento del navegador está lleno',
        'Nothing to undo': 'Nada que deshacer',
        'Nothing to redo': 'Nada que rehacer',
        'Nothing changed': 'No ha cambiado nada',
        'Choose a section, key or record first': 'Elige primero una sección, una clave o un registro',
        'Choose a key or a record to move or duplicate it': 'Elige una clave o un registro para mover o duplicar',
        'This nested list has no records to add after': 'Esta lista anidada no tiene registros tras los que añadir',
        'SHLS values have one line - the line breaks became spaces': 'Los valores SHLS ocupan una línea: los saltos de línea se han convertido en espacios',
        'Spaces around the value were removed - SHLS values cannot start with spaces': 'Se quitaron los espacios alrededor del valor: los valores SHLS no pueden empezar con espacios',
        'SHLS has no empty values (a blank line is skipped) - write a placeholder such as - or PH': 'SHLS no tiene valores vacíos (una línea en blanco se salta): escribe un marcador como - o PH',
        'A key needs a name': 'Una clave necesita un nombre',
        'A section needs a name': 'Una sección necesita un nombre',
        'A key block needs at least one key - add another key first': 'Un bloque de claves necesita al menos una clave: añade primero otra clave',
        'This key is not there any more': 'Esta clave ya no existe',
        'This line is not there any more': 'Esta línea ya no existe',
        'This record is not there any more': 'Este registro ya no existe',
        'This is the first record': 'Este es el primer registro',
        'This is the last record': 'Este es el último registro',
        'This is the first key': 'Esta es la primera clave',
        'This is the last key': 'Esta es la última clave',
        'This document is empty already': 'Este documento ya está vacío',
        'All data is removed. "Undo" brings it back as long as the page is open.': 'Se quitan todos los datos. «Deshacer» los recupera mientras la página esté abierta.',
        'Start over': 'Empezar de nuevo',
        'The file is larger than 8 MB': 'El archivo supera los 8 MB',
        'The CSV file is empty': 'El archivo CSV está vacío',
        'The YAML package is not loaded yet': 'El paquete YAML aún no se ha cargado',
        'Downloaded': 'Descargado',
        'Copied to the clipboard': 'Copiado al portapapeles',
        'Code copied': 'Código copiado',
        '.shls downloaded': '.shls descargado',
        'Replace': 'Reemplazar',
        'The document is removed from this browser for good. Download it first if you want to keep a copy.':
            'El documento se elimina de este navegador para siempre. Descárgalo primero si quieres conservar una copia.',
        'unknown format': 'formato desconocido',

        /* What SHLS cannot keep (opening JSON, YAML, CSV) */
        'An object inside a record becomes a list with this one object.': 'Un objeto dentro de un registro se convierte en una lista con ese único objeto.',
        'Plain values where SHLS expects records (in a list or as a section) become records with the one key "Value".': 'Los valores simples donde SHLS espera registros (en una lista o como sección) se convierten en registros con la única clave «Value».',
        'Empty values become blank lines, which SHLS readers skip - the values after them move up. Write a placeholder such as -.': 'Los valores vacíos se convierten en líneas en blanco, que los lectores de SHLS saltan: los valores siguientes suben. Escribe un marcador como -.',
        'Values with several lines are not supported by SHLS - they break the records apart.': 'SHLS no admite valores de varias líneas: rompen los registros.',
        'Values that start or end with spaces lose them (and leading spaces change the indentation).': 'Los valores que empiezan o terminan con espacios los pierden (y los espacios iniciales cambian la sangría).',

        /* ---------- Problems in the code ---------- */
        'A tab in the indentation - SHLS counts spaces only, so this line is read as a section name': 'Un tabulador en la sangría: SHLS solo cuenta espacios, así que esta línea se lee como nombre de sección',
        'SHLS readers ignore this line - its indentation does not fit the key block': 'Los lectores de SHLS ignoran esta línea: su sangría no encaja con el bloque de claves',
    },

    html: {

        '<b>Export</b> also has <b>Open in another editor</b>: it converts the document and opens it as a new document there. Anything the other format cannot hold is listed first.':

            '<b>Exportar</b> también ofrece <b>Abrir en otro editor</b>: convierte el documento y lo abre allí como documento nuevo. Lo que el otro formato no puede contener se muestra antes.',
        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Haz clic en <b>Copiar prompt</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'La IA responde con un enlace: haz clic en él, o pega la respuesta entera abajo. <b>Deshacer</b> lo revierte.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'La IA responde con un enlace: <b>pega su respuesta entera abajo</b> (un enlace pulsado abre un editor aparte). <b>Deshacer</b> lo revierte.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'El editor puede enviar cada versión guardada a tu propio servidor (un <b>webhook</b>), para que tu trabajo quede donde quieras. No se envía nada hasta que introduzcas aquí una dirección.',
        'Also possible: <code>?src=&lt;URL of a .shls file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>shlseditor:ai</code>, <code>shlseditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'También es posible: <code>?src=&lt;URL de un archivo .shls&gt;</code> abre un archivo, <code>&amp;webhook=&lt;URL&gt;</code> guarda allí este documento. El editor también puede abrirse en una ventana propia (<code>?embed=window</code>), y tu página puede darle su propio prompt de IA y una clave de sesión para que la IA envíe su resultado a tu servidor (<code>shlseditor:ai</code>, <code>shlseditor:key-request</code>): consulta «Usa el editor en tu propio sitio web» debajo del editor. Los detalles están en <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> SHLS on the left - or start with <b>New</b> and one of the templates. A section is its name, then its keys (indented by one space, the keys of a nested list one level deeper), exactly one blank line, then the records: one value per line in the order of the keys.':
            '<b>Escribe</b> SHLS a la izquierda, o empieza con <b>Nuevo</b> y una de las plantillas. Una sección es su nombre, luego sus claves (con sangría de un espacio; las claves de una lista anidada, un nivel más adentro), exactamente una línea en blanco y después los registros: un valor por línea en el orden de las claves.',
        'The middle shows each section with its <b>key block</b> and its <b>records</b>, the keys as labels; nested lists fold. It reads the code exactly as the reference SHLSDecoder does.':
            'El centro muestra cada sección con su <b>bloque de claves</b> y sus <b>registros</b>, con las claves como etiquetas; las listas anidadas se pliegan. Lee el código exactamente como el SHLSDecoder de referencia.',
        '<b>Click a value, a key or a section name</b> to change it right there. <b>Enter</b> or a click elsewhere writes the change into the code (one step for Undo), <b>Escape</b> cancels. The buttons above add, duplicate, move and remove records and keys - a key added or removed is added to or removed from every record.':
            '<b>Haz clic en un valor, una clave o un nombre de sección</b> para cambiarlo ahí mismo. <b>Enter</b> o un clic en otro sitio escribe el cambio en el código (un paso de Deshacer), <b>Esc</b> cancela. Los botones de arriba añaden, duplican, mueven y quitan registros y claves: una clave añadida o quitada se añade o se quita en cada registro.',
        '<b>Record</b> on the right shows the selected record as a form; <b>Insert</b> adds records, keys and sections; <b>Convert</b> counts the tokens against JSON and converts to JSON, YAML, CSV and JSON Lines; <b>Outline</b> lists the sections.':
            '<b>Registro</b>, a la derecha, muestra el registro seleccionado como formulario; <b>Insertar</b> añade registros, claves y secciones; <b>Convertir</b> cuenta los tokens frente a JSON y convierte a JSON, YAML, CSV y JSON Lines; <b>Esquema</b> lista las secciones.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser. <b>Export</b> saves it as SHLS, JSON, YAML, CSV or text.':
            '<b>Mis documentos</b> (el botón de carpeta arriba a la izquierda) lista cada documento guardado en este navegador. <b>Exportar</b> lo guarda como SHLS, JSON, YAML, CSV o texto.',
    },

    patterns: [
        /* ---------- Status lines and counts ---------- */
        ['^(\\d+) (?:line|lines) · ([\\d.]+ K?B) · (\\d+) (?:section|sections)$', (m, l, kb, s) => `${l} ${getPlural(l, 'línea', 'líneas')} · ${kb} · ${s} ${getPlural(s, 'sección', 'secciones')}`],
        ['^([\\d,]+) bytes$', (m, b) => `${formatThousands(b)} bytes`],
        ['^(\\d+) (?:record|records) · (\\d+) (?:key|keys)$', (m, r, k) => `${r} ${translateRecords(r)} · ${k} ${translateKeys(k)}`],
        ['^(\\d+) (?:record|records) · (\\d+) (?:key|keys) · line (\\d+)$', (m, r, k, l) => `${r} ${translateRecords(r)} · ${k} ${translateKeys(k)} · línea ${l}`],
        ['^(\\d+) (?:record|records) · line (\\d+)$', (m, r, l) => `${r} ${translateRecords(r)} · línea ${l}`],
        ['^(\\d+) (?:record|records)$', (m, r) => `${r} ${translateRecords(r)}`],
        ['^(\\d+) (?:problem|problems)$', (m, k) => `${k} ${getPlural(k, 'problema', 'problemas')}`],
        ['^nested list · (\\d+) (?:key|keys)$', (m, k) => `lista anidada · ${k} ${translateKeys(k)}`],
        ['^(nested list · )?level (\\d+) · line (\\d+)$', (m, nl, l, z) => `${nl ? 'lista anidada · ' : ''}nivel ${l} · línea ${z}`],
        ['^record (\\d+) of (\\d+) · lines (\\d+)-(\\d+)$', 'registro $1 de $2 · líneas $3-$4'],
        ['^SHLS needs about (\\d+) % fewer tokens than the same data as JSON - approximate tokens of common AI models\\.$', 'SHLS necesita aproximadamente un $1 % menos de tokens que los mismos datos en JSON: tokens aproximados de los modelos de IA habituales.'],
        ['^The same data as JSON needs about as many tokens - approximate tokens of common AI models\\.$', 'Los mismos datos en JSON necesitan aproximadamente los mismos tokens: tokens aproximados de los modelos de IA habituales.'],
        ['^The records of "(.+)": its keys are the columns, a nested list is one cell with JSON\\.$', 'Los registros de «$1»: sus claves son las columnas, una lista anidada es una celda con JSON.'],
        ['^One record of "(.+)" per line\\.$', 'Un registro de «$1» por línea.'],
        ['^"(.+)" has no records$', '«$1» no tiene registros'],

        /* ---------- Problems above the code ---------- */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'error', 'errores')}`],
        ['^(\\d+) (?:note|notes)$', (m, k) => `${k} ${getPlural(k, 'aviso', 'avisos')}`],
        ['^· (\\d+) (?:note|notes)$', (m, k) => `· ${k} ${getPlural(k, 'aviso', 'avisos')}`],
        ['^Line (\\d+)$', 'Línea $1'],
        ['^Indented by (\\d+) (?:space|spaces) - not a whole level \\((\\d+) (?:space|spaces) per level\\)$', (m, a, b) => `Sangría de ${a} ${getPlural(a, 'espacio', 'espacios')}: no es un nivel entero (${b} ${getPlural(b, 'espacio', 'espacios')} por nivel)`],
        ['^Indented (\\d+) levels deeper than the line above - one level at a time$', 'Sangría de $1 niveles más que la línea de encima: un nivel cada vez'],
        ['^"(.+)" has no key block yet - these lines are read as its keys \\(the key block follows the section name directly\\)$', '«$1» aún no tiene bloque de claves: estas líneas se leen como sus claves (el bloque de claves sigue directamente al nombre de la sección)'],
        ['^The key "(.+)" is twice in the key block - only one of them keeps its values\\. Is the blank line between the key block and the records missing\\?$', 'La clave «$1» está dos veces en el bloque de claves: solo una conserva sus valores. ¿Falta la línea en blanco entre el bloque de claves y los registros?'],
        ['^"(.+)" looks like a value but stands in the key block - records follow the key block after exactly one blank line$', '«$1» parece un valor pero está en el bloque de claves: los registros siguen al bloque de claves tras exactamente una línea en blanco'],
        ['^(\\d+) blank lines after the key block of "(.+)" - exactly one belongs there$', '$1 líneas en blanco tras el bloque de claves de «$2»: ahí va exactamente una'],
        ['^This record of "(.+)" has (\\d+) of (\\d+) values - its last keys are missing in the data$', 'Este registro de «$1» tiene $2 de $3 valores: sus últimas claves faltan en los datos'],
        ['^No blank line before this record of "(.+)" while the others have one - the record above may have more values than the key block \\((\\d+)\\)$', 'No hay línea en blanco antes de este registro de «$1», y los demás la tienen: quizá el registro de encima tiene más valores que el bloque de claves ($2)'],
        ['^A blank line inside a record of "(.+)" - the record may have fewer values than the key block \\((\\d+)\\)$', 'Una línea en blanco dentro de un registro de «$1»: quizá el registro tiene menos valores que el bloque de claves ($2)'],

        /* ---------- Messages with names ---------- */
        ['^"(.+)" has no key block - write its keys first$', '«$1» no tiene bloque de claves: escribe primero sus claves'],
        ['^"(.+)" has no key block$', '«$1» no tiene bloque de claves'],
        ['^There is already a section "(.+)"$', 'Ya hay una sección «$1»'],
        ['^There is no section "(.+)"$', 'No hay ninguna sección «$1»'],
        ['^Remove the section "(.+)"\\?$', '¿Quitar la sección «$1»?'],
        ['^Its key block and its (\\d+) (?:record is|records are) removed\\. "Undo" brings them back\\.$', (m, k) => `Se quitan su bloque de claves y ${getPlural(k, 'su registro', `sus ${k} registros`)}. «Deshacer» los recupera.`],
        ['^Remove the key "(.+)"\\?$', '¿Quitar la clave «$1»?'],
        ['^Its value is removed from every record of "(.+)" \\((\\d+)\\)\\. "Undo" brings it back\\.$', 'Su valor se quita de cada registro de «$1» ($2). «Deshacer» lo recupera.'],
        ['^Path copied: (.*)$', 'Ruta copiada: $1'],
        ['^Line (\\d+): (.*)$', 'Línea $1: $2'],
        ['^"(.+)" converted from ([\\w ]+)$', '«$1» convertido desde $2'],
        ['^SHLS cannot keep all of this data: (.*)$', 'SHLS no puede conservar todos estos datos: $1'],
        ['^"(.+)" is open\\. My documents: open, rename, duplicate or delete your documents \\(Ctrl\\+O\\)$', '«$1» está abierto. Mis documentos: abre, renombra, duplica o elimina tus documentos (Ctrl+O)'],
        ['^Start "(.+)" over\\?$', '¿Empezar «$1» de nuevo?'],
        ['^Start "(.+)" over$', 'Empezar «$1» de nuevo'],
        ['^(\\d+) (?:document|documents) · (.+) in this browser$', (m, k, s) => `${k} ${getPlural(k, 'documento', 'documentos')} · ${formatSize(s)} en este navegador`],
        ['^No document named "(.*)"\\.$', 'Ningún documento se llama «$1».'],
        ['^Open now · (.+)$', (m, s) => `Abierto ahora · ${formatSize(s)}`],
        ['^(just now|yesterday|\\d+ min ago|\\d+ h ago|[A-Z][a-z]{2} \\d{1,2}, \\d{4}) · (.+)$', (m, w, s) => `${formatTime(w)} · ${formatSize(s)}`],
        ['^(.+) \\(open now\\)$', '$1 (abierto ahora)'],
        ['^ZIP with (\\d+) (?:document|documents) downloaded$', (m, k) => `ZIP con ${k} ${getPlural(k, 'documento', 'documentos')} descargado`],
        ['^ZIP downloaded with (\\d+) files$', 'ZIP descargado con $1 archivos'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '«$1» está vacío ahora: «Deshacer» lo recupera'],
        ['^"(.+)" opened$', '«$1» abierto'],
        ['^New document "(.+)" - your other documents are under "My documents"$', 'Documento nuevo «$1»: tus otros documentos están en «Mis documentos»'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$', 'Documento nuevo «$1» de la IA: tus otros documentos no cambian'],
        ['^"(.+)" is not a file the editor can open$', '«$1» no es un archivo que el editor pueda abrir'],
        ['^Opened "(.+)" - converted from ([\\w ]+)$', '«$1» abierto: convertido desde $2'],
        ['^Opened "(.+)" - it is now in "My documents"$', '«$1» abierto: ahora está en «Mis documentos»'],
        ['^"(.+)" could not be opened: (.*)$', 'No se pudo abrir «$1»: $2'],
        ['^The addition is not valid SHLS - it is open as a new document "(.+)"$', 'El añadido no es SHLS válido: está abierto como documento nuevo «$1»'],
        ['^(.+) - the addition is open as a new document "(.+)"$', '$1: el añadido está abierto como documento nuevo «$2»'],
        ['^Document received - (\\d+) (?:problem|problems) found, see above the code$', (m, k) => `Documento recibido: ${k} ${getPlural(k, 'problema encontrado', 'problemas encontrados')}, mira encima del código`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '«$1» cambiado por la IA: «Deshacer» lo revierte'],
        ['^"(.+)" duplicated$', '«$1» duplicado'],
        ['^Delete "(.+)"\\?$', '¿Eliminar «$1»?'],
        ['^"(.+)" deleted$', '«$1» eliminado'],

        /* ---------- AI Assistant ---------- */
        ['^Part (\\d+) of (\\d+) received$', 'Parte $1 de $2 recibida'],
        ['^Open the other (?:link|links) from the AI too \\(still missing: part (.+)\\)\\.$',
            'Abre también los otros enlaces de la IA (aún falta: parte $1).'],
        ['^Part (\\d+) of (\\d+) received - paste the other (?:link|links) too \\(missing: (.+)\\)$', 'Parte $1 de $2 recibida: pega también los otros enlaces (falta: $3)'],
        ['^The AI sends the document to (.+) with a key that only works for this session\\. What you paste into your AI is handled by its provider\\.$',
            'La IA envía el documento a $1 con una clave que solo vale para esta sesión. Lo que pegas en tu IA lo procesa su proveedor.'],
        ['^The AI sends its result to (.+) by itself, and it opens here\\. If it answers with a link, paste its answer below\\.$',
            'La IA envía ella misma su resultado a $1, y se abre aquí. Si responde con un enlace, pega su respuesta abajo.'],
        ['^No key from (.+) - the prompt asks the AI for a link instead$', 'No hay clave de $1: el prompt pide a la IA un enlace en su lugar'],
        ['^Prompt copied - the AI sends its result to (.+)$', 'Prompt copiado: la IA envía su resultado a $1'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Abrir $1'],
    ],
};
