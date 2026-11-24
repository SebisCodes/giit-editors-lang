/* Spanish texts that all giit editors share: the links to giit.ch in the bar,
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
 * Translates the text the pattern found (el in the English pattern).
 * @param {string} w - the English text the pattern found.
 * @returns {string} the text in the language.
 */
const translateThing = w => (w === 'drawing' ? 'el dibujo' : 'el documento');

export default {
    text: {
        "All giit editors": "Todos los editores de giit",
        "by giit.ch": "de giit.ch",
        "Open in another editor": "Abrir en otro editor",
        "Remove picture": "Quitar imagen",
        "Not everything can be converted": "No todo se puede convertir",
        "Open anyway": "Abrir de todos modos",
        "Pictures and other files of the document stay here: add them again in the other editor": "Las imágenes y otros archivos del documento se quedan aquí: añádelos de nuevo en el otro editor",
        "The document is too long for a link - export it and open the file in the other editor": "El documento es demasiado largo para un enlace: expórtalo y abre el archivo en el otro editor",
        "Scripts and styles": "Scripts y estilos",
        "Form fields": "Campos de formulario",
        "Footnotes, labels and references": "Notas al pie, etiquetas y referencias",
        "LaTeX commands and environments without an equivalent": "Comandos y entornos de LaTeX sin equivalente",
        "Document class, packages and page settings": "Clase de documento, paquetes y ajustes de página",
        "The table of contents": "El índice",
        "Typst functions without an equivalent": "Funciones de Typst sin equivalente",
        "Formulas are copied as written: check them": "Las fórmulas se copian tal cual: revísalas",
        "Formulas become plain code": "Las fórmulas pasan a ser código sin formato",
        "Links with an unsafe address": "Enlaces con una dirección no segura",
        "Comments": "Comentarios",
        "Empty values (null): TOML has no null": "Valores vacíos (null): TOML no tiene null",
        "The data is not a table: it goes under the key \"value\"": "Los datos no son una tabla: van bajo la clave «value»",
        "Keys that are not valid XML names are changed": "Las claves que no son nombres XML válidos se cambian",
        "Only the first list goes into the table": "Solo la primera lista pasa a la tabla",
        "Nested values go into one cell as JSON": "Los valores anidados van a una celda como JSON",
        "The picture could not be stored in this browser (storage full or blocked) - it is kept only until the page is closed: download the document to keep it": "No se pudo guardar la imagen en este navegador (almacenamiento lleno o bloqueado) - solo se conserva hasta cerrar la página: descargue el documento para conservarla",
        "Column names that occur twice (numbered)": "Nombres de columna repetidos (numerados)",
        "Fields beyond the header (named Column N)": "Campos más allá del encabezado (llamados Column N)",
        "The AI's result could not be opened - your browser's storage may be full": "No se pudo abrir el resultado de la IA - puede que el almacenamiento de su navegador esté lleno",
        "The AI's result could not be opened": "No se pudo abrir el resultado de la IA",
        "Types of values: SHLS holds every value as text": "Tipos de valores: SHLS guarda cada valor como texto",
        "This data has no list of records, so it does not make a table": "Estos datos no tienen una lista de registros, así que no forman una tabla",
        "The XML cannot be read - fix the problem above the code first": "El XML no se puede leer: corrige primero el problema encima del código",
        "It could not be converted": "No se pudo convertir",
        "Content from a third party, not checked by giit.ch": "Contenido de terceros, no revisado por giit.ch",
        // Wrapping long lines in the code view (wrap.js)
        "Wrap": "Ajustar",
        "Wrap long lines in the view - each line of the code stays one line (Alt+Z)": "Ajustar las líneas largas en la vista; cada línea del código sigue siendo una línea (Alt+Z)",
        'Cancel': 'Cancelar',
        'Allow': 'Permitir',
        'No': 'No',
        'Yes': 'Sí',
        'Save': 'Guardar',
        'Saved': 'Guardado',
        'Sending…': 'Enviando…',
        'Not connected': 'No conectado',
        'Save on this server?': '¿Guardar en este servidor?',
        'The address for the AI must be https:// on the site of the page around the editor - it is not used':
            'La dirección para la IA debe usar https:// y pertenecer al sitio de la página que contiene el editor: no se usa',
        'The key from the page is not valid (16 to 512 letters, digits or ._~+/=-)':
            'La clave de la página no es válida (de 16 a 512 letras, cifras o ._~+/=-)',
        'This document stays in your browser - only the document from the page is saved there':
            'Este documento se queda en tu navegador: allí solo se guarda el documento de la página',
        'This drawing stays in your browser - only the drawing from the page is saved there':
            'Este dibujo se queda en tu navegador: allí solo se guarda el dibujo de la página',
        'The page that opened the editor is closed - download the document so nothing is lost':
            'La página que abrió el editor está cerrada: descarga el documento para no perder nada',
        'The page that opened the editor is closed - download the drawing so nothing is lost':
            'La página que abrió el editor está cerrada: descarga el dibujo para no perder nada',
        'The webhook from the page is not an https:// address - it is not used':
            'El webhook de la página no es una dirección https://: no se usa',
        'Please enter an https:// address (or http://localhost for testing)':
            'Introduce una dirección https:// (o http://localhost para hacer pruebas)',
        'Saved versions now go to your server': 'Las versiones guardadas van ahora a tu servidor',
        'Webhook switched off': 'Webhook desactivado',
        'The webhook in the link is not an https:// address - it is not used':
            'El webhook del enlace no es una dirección https://: no se usa',
        'The webhook in the link only works together with ?src= - it is not used':
            'El webhook del enlace solo funciona junto con ?src=: no se usa',
        'A token in a link is not used - enter it under "Save to server"':
            'No se usa el token de un enlace: introdúcelo en «Guardar en servidor»',
        'Save - hand the document to the page around the editor (Ctrl+S)':
            'Guardar: enviar el documento a la página que contiene el editor (Ctrl+S)',
        'Save - hand the drawing to the page around the editor (Ctrl+S)':
            'Guardar: enviar el dibujo a la página que contiene el editor (Ctrl+S)',
        'AI through a website: not connected': 'IA a través de un sitio web: no conectada',
        'Browser agent (WebMCP): not offered by this browser': 'Agente del navegador (WebMCP): este navegador no lo ofrece',
        'Browser agent (WebMCP): available, not used yet': 'Agente del navegador (WebMCP): disponible, aún sin usar',
        'AI links: cannot reach the editor inside this website - paste the AI\'s answer here':
            'Enlaces de IA: no llegan al editor dentro de este sitio web; pega aquí la respuesta de la IA',
        'AI links: open the editor in a new tab': 'Enlaces de IA: abren el editor en una pestaña nueva',
        'AI links: go to another editor tab (the one used last)': 'Enlaces de IA: van a otra pestaña del editor (la última usada)',
        'AI links: arrive in this tab': 'Enlaces de IA: llegan a esta pestaña',
        'AI in this session: nothing received yet - copy the prompt for your AI': 'IA en esta sesión: aún no se ha recibido nada; copia el prompt para tu IA',
    },
    patterns: [
        ['^Saved on (.+) at (\\d{1,2}):(\\d{2})\\s?(AM|PM)?$', (x, host, h, m, ap) => `Guardado en ${host} a las ${formatHour(h, m, ap)}`],
        ['^Saved on (.+)$', 'Guardado en $1'],
        ['^Not saved on (.+?): no connection, or the server does not allow it \\(CORS\\)$', 'No guardado en $1: sin conexión, o el servidor no lo permite (CORS)'],
        ['^Not saved on (.+?): The server answered (\\d+)(.*)$', 'No guardado en $1: el servidor respondió $2$3'],
        ['^Not saved on (.+?): the (document|drawing) with its pictures is (\\d+) MB - at most 40 MB go in one request$', 'No guardado en $1: con las imágenes son $3 MB; en una petición caben como máximo 40 MB'],
        ['^"(.+)" was changed in another tab - your version here is kept as "(.+)"$', '"$1" se cambió en otra pestaña - su versión de aquí se guarda como "$2"'],
        ['^Not saved on (.+?): the server did not answer within (\\d+) seconds$', 'No guardado en $1: el servidor no respondió en $2 segundos'],
        ['^Not saved on (.+?): (.*)$', 'No guardado en $1: $2'],
        ['^Saves to (.+) \\(set by the page\\)$', 'Guarda en $1 (lo define la página)'],
        ['^Save - send the (document|drawing) to (.+) \\(Ctrl\\+S\\)$', (m, w, h) => `Guardar: envía ${translateThing(w)} a ${h} (Ctrl+S)`],
        ['^The AI\'s new (document|drawing) is open as "(.+)" - it stays in your browser and is not saved to (.+)$',
            (m, w, n, l) => `${w === 'drawing' ? 'El nuevo dibujo' : 'El nuevo documento'} de la IA está abierto como «${n}»: se queda en tu navegador y no se guarda en ${l}`],
        ['^The AI\'s result from (.+) is open - Undo takes it back$', 'El resultado de la IA desde $1 está abierto: Deshacer lo revierte'],
        ['^The file could not be opened: no connection, or the server does not allow it \\(CORS\\)$', 'No se pudo abrir el archivo: sin conexión, o el servidor no lo permite (CORS)'],
        ['^The file could not be opened: only https:// addresses can be opened$', 'No se pudo abrir el archivo: solo se pueden abrir direcciones https://'],
        ['^The file could not be opened: the server answered (\\d+)$', 'No se pudo abrir el archivo: el servidor respondió $1'],
        ['^The file could not be opened: the page loaded another document meanwhile$', 'No se pudo abrir el archivo: la página cargó otro documento mientras tanto'],
        ['^The file could not be opened: (.*)$', 'No se pudo abrir el archivo: $1'],
        ['^This link asks the editor to send the saved versions of "(.+)" to (.+) while this page is open\\. Only allow it if you trust that site\\.$',
            'Este enlace pide al editor que envíe las versiones guardadas de «$1» a $2 mientras esta página esté abierta. Permítelo solo si confías en ese sitio.'],
        ['^AI in this session: a document from an AI link, just now$', 'IA en esta sesión: un documento de un enlace de IA, ahora mismo'],
        ['^AI in this session: a document from an AI link, (\\d+) min ago$', 'IA en esta sesión: un documento de un enlace de IA, hace $1 min'],
        ['^AI in this session: a result through the page, just now$', 'IA en esta sesión: un resultado a través de la página, ahora mismo'],
        ['^AI in this session: a result through the page, (\\d+) min ago$', 'IA en esta sesión: un resultado a través de la página, hace $1 min'],
        ['^AI in this session: a browser agent \\(WebMCP\\), just now$', 'IA en esta sesión: un agente del navegador (WebMCP), ahora mismo'],
        ['^AI in this session: a browser agent \\(WebMCP\\), (\\d+) min ago$', 'IA en esta sesión: un agente del navegador (WebMCP), hace $1 min'],
        ['^AI through (.+): connected, waiting for the key$', 'IA a través de $1: conectada, esperando la clave'],
        ['^AI through (.+): connected$', 'IA a través de $1: conectada'],
        ['^AI through (.+): the website gives the answering instructions$', 'IA a través de $1: el sitio web indica a la IA cómo responder'],
        ['^Browser agent \\(WebMCP\\): active, last used just now$', 'Agente del navegador (WebMCP): activo, usado por última vez ahora mismo'],
        ['^Browser agent \\(WebMCP\\): active, last used (\\d+) min ago$', 'Agente del navegador (WebMCP): activo, usado por última vez hace $1 min'],
        ['^Browser agent \\(WebMCP\\): available, last used just now$', 'Agente del navegador (WebMCP): disponible, usado por última vez ahora mismo'],
        ['^Browser agent \\(WebMCP\\): available, last used (\\d+) min ago$', 'Agente del navegador (WebMCP): disponible, usado por última vez hace $1 min'],

        /* ---------- The page's own answering instructions (AI Assistant) ---------- */
        ['^(.+) gives the AI its instructions for answering\\. What you paste into your AI is handled by its provider\\.$', '$1 indica a la IA cómo responder. Lo que pegues en tu IA lo procesa su proveedor.'],
        ['^The AI answers as (.+) describes in the prompt\\. If it answers with a link, paste its answer below\\.$', 'La IA responde como indica $1 en el prompt. Si responde con un enlace, pega su respuesta abajo.'],

        /* ---------- Template placeholders (template-tags.js, ?template=) ---------- */
        ['^The section (\\S+) stays open - add (\\S+)$', 'La sección $1 queda abierta: añade $2'],
        ['^(\\S+) is a stray end tag - remove it or add (\\S+) before it$', '$1 es una etiqueta de cierre sin apertura: quítala o añade $2 antes'],
        ['^(\\S+) closes (\\S+) before the inner section (\\S+) is closed - add (\\S+) first$', '$1 cierra $2 antes de que se cierre la sección interior $3: añade primero $4'],
        ['^Unknown placeholder (\\S+) - use (.+)$', 'Marcador desconocido $1: usa $2'],
    ],
};
