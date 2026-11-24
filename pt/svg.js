/* Brazilian Portuguese texts of the SVG editor: the bar, the canvas and its tools, the
   properties and layers, the dialogs (export, my drawings, AI, server, help),
   the color picker and the messages. What all editors share is in
   common.js; how the dictionaries are used is described in i18n.js.
   Names of drawings and elements are kept as they are and shown in "…". */

/* Names of the element types (LABELS in app.js). */
const LABEL = {
    'Drawing': 'Desenho', 'Rectangle': 'Retângulo', 'Circle': 'Círculo', 'Ellipse': 'Elipse', 'Line': 'Linha',
    'Polyline': 'Polilinha', 'Polygon': 'Polígono', 'Path': 'Caminho', 'Text': 'Texto', 'Group': 'Grupo', 'Image': 'Imagem',
    'Reused element': 'Elemento reutilizado', 'Nested SVG': 'SVG aninhado', 'Link': 'Link',
    'Embedded content': 'Conteúdo incorporado', 'Definitions': 'Definições', 'Linear gradient': 'Gradiente linear',
    'Radial gradient': 'Gradiente radial', 'Gradient stop': 'Parada de gradiente', 'Clip path': 'Caminho de recorte',
    'Mask': 'Máscara', 'Pattern': 'Padrão', 'Symbol': 'Símbolo', 'Style sheet': 'Folha de estilo', 'Title': 'Título',
    'Description': 'Descrição', 'Filter': 'Filtro', 'Marker': 'Marcador', 'Switch': 'Seleção condicional', 'Metadata': 'Metadados',
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
    'Click a shape to select it. Drag an empty spot to move the view.': 'Clique em uma forma para selecioná-la. Arraste um espaço vazio para mover a visualização.',
    'Drag the shape to move it, or a small square to resize it. Delete key removes it.': 'Arraste a forma para movê-la, ou um quadradinho para redimensioná-la. A tecla Delete a remove.',
    'Drag to move the view. Use the mouse wheel to zoom.': 'Arraste para mover a visualização. Use a roda do mouse para dar zoom.',
    'Drag to draw a rectangle. Hold Shift for a square.': 'Arraste para desenhar um retângulo. Segure Shift para um quadrado.',
    'Drag to draw an ellipse. Hold Shift for a circle.': 'Arraste para desenhar uma elipse. Segure Shift para um círculo.',
    'Drag to draw a line. Hold Shift for straight angles.': 'Arraste para desenhar uma linha. Segure Shift para ângulos retos.',
    'Hold the mouse button down and draw.': 'Segure o botão do mouse e desenhe.',
    'Click where the text should start.': 'Clique onde o texto deve começar.',
    'Tap a shape to select it. Swipe to scroll.': 'Toque em uma forma para selecioná-la. Deslize para rolar.',
    'Drag it to move, drag a square to resize.': 'Arraste para mover, arraste um quadrado para redimensionar.',
    'Drag to move the view, pinch to zoom.': 'Arraste para mover a visualização, faça o gesto de pinça para dar zoom.',
    'Drag to draw a rectangle.': 'Arraste para desenhar um retângulo.',
    'Drag to draw an ellipse.': 'Arraste para desenhar uma elipse.',
    'Drag to draw a line.': 'Arraste para desenhar uma linha.',
    'Draw with your finger.': 'Desenhe com o dedo.',
    'Tap where the text should start.': 'Toque onde o texto deve começar.',
};
/* The editor's own messages about the code (parse() in export.js); the browser's messages stay as they are. */
const CODE_ERROR = {
    'The outermost element must be <svg>.': 'O elemento mais externo precisa ser <svg>.',
    'The <svg> element is missing xmlns="http://www.w3.org/2000/svg".': 'Falta xmlns="http://www.w3.org/2000/svg" no elemento <svg>.',
};
/**
 * Translates a size in bytes ("1,234 bytes").
 * @param {string} s - the English size text.
 * @returns {string} the text in the language.
 */
const formatBytes = s => s.replace(/^([\d,]+) bytes$/, (m, n) => `${n.replace(/,/g, '.')} bytes`);
const MONTH = { Jan: 'jan.', Feb: 'fev.', Mar: 'mar.', Apr: 'abr.', May: 'mai.', Jun: 'jun.', Jul: 'jul.', Aug: 'ago.', Sep: 'set.', Oct: 'out.', Nov: 'nov.', Dec: 'dez.' };
/**
 * Translates the text the pattern found (drawings in the English pattern).
 * @param {string} n - the English text the pattern found.
 * @returns {string} the text in the language.
 */
const translateDrawings = n => (n === '1' ? 'desenho' : 'desenhos');

export default {
    text: {
        'Show or hide the side panel': 'Mostrar ou ocultar o painel lateral',
        'Examples': 'Exemplos',
        'Template': 'Modelo',
        'The template with its placeholders as written': 'O modelo com seus marcadores como foram escritos',
        'Placeholders': 'Marcadores',
        'The placeholders of the template - a click on one puts its tag at the cursor': 'Os marcadores do modelo - clique em um para inserir sua tag no cursor',
        'Shown': 'Exibido',
        'Hidden': 'Oculto',
        'View of the drawing': 'Modo do desenho',
        'The drawing filled with the examples': 'O desenho preenchido com os exemplos',
        'The examples could not be filled in - the canvas shows the template': 'Não foi possível preencher os exemplos - a tela mostra o modelo',
        'This text shows an example - edit it in the code or in the template view': 'Este texto mostra um exemplo - edite-o no código ou na vista do modelo',
        // Labels that are the same in English and German
        'Code': 'Código',
        'Format': 'Formato',
        'Name': 'Nome',

        ...LABEL,
        ...HINT,
        ...CODE_ERROR,

        // Top bar
        'SVG Editor': 'Editor SVG',
        'SVG Editor - home': 'Editor SVG - início',
        'File': 'Arquivo',
        'My drawings': 'Meus desenhos',
        'My drawings (Ctrl+O)': 'Meus desenhos (Ctrl+O)',
        'New drawing, or start this one over': 'Novo desenho, ou recomeçar este',
        'New': 'Novo',
        'New blank drawing': 'Novo desenho em branco',
        'Your other drawings stay as they are': 'Seus outros desenhos continuam como estão',
        'New from the example': 'Novo a partir do exemplo',
        'A copy of the editor logo to try things out': 'Uma cópia do logo do editor para experimentar',
        'Start this drawing over': 'Recomeçar este desenho',
        'Empties it but keeps its size - "Undo" brings it back': 'Esvazia, mas mantém o tamanho - "Desfazer" traz de volta',
        'Open an SVG file from your computer as a new drawing (you can also drag a file into the window)':
            'Abrir um arquivo SVG do seu computador como novo desenho (você também pode arrastar um arquivo para a janela)',
        'Open file…': 'Abrir arquivo…',
        'Undo the last change (Ctrl+Z)': 'Desfazer a última alteração (Ctrl+Z)',
        'Undo': 'Desfazer',
        'Redo the change you just undid (Ctrl+Y)': 'Refazer a alteração que você acabou de desfazer (Ctrl+Y)',
        'Redo': 'Refazer',
        'Output': 'Saída',
        'Color theme': 'Tema de cores',
        'Light theme': 'Tema claro',
        'Dark theme': 'Tema escuro',
        'Same as your system setting': 'Igual à configuração do seu sistema',
        'Automatic theme (system setting)': 'Tema automático (configuração do sistema)',
        'Let any AI draw in this editor': 'Deixe qualquer IA desenhar neste editor',
        'AI Assistant': 'Assistente de IA',
        'Save to your own server and embed the editor in your website':
            'Salvar no seu próprio servidor e incorporar o editor no seu site',
        'Save to server': 'Salvar no servidor',
        'How it works and keyboard shortcuts (?)': 'Como funciona e atalhos de teclado (?)',
        'Help': 'Ajuda',
        'Save the drawing as an .svg file (Ctrl+S)': 'Salvar o desenho como arquivo .svg (Ctrl+S)',
        'Download SVG': 'Baixar SVG',
        'Save as PNG, JPG, WebP, data URI, React and more (Ctrl+E)': 'Salvar como PNG, JPG, WebP, URI de dados, React e mais (Ctrl+E)',
        'Export…': 'Exportar…',

        // View tabs and the code
        'View': 'Exibir',
        'Edit': 'Editar',
        'Side panel': 'Painel lateral',
        'Canvas': 'Tela',
        'Properties': 'Propriedades',
        'SVG code': 'Código SVG',
        'Copy the SVG code to the clipboard': 'Copiar o código SVG para a área de transferência',
        'Copy code': 'Copiar código',
        'Copy': 'Copiar',
        'Indent and arrange the code neatly': 'Indentar e organizar o código',
        'Tidy up': 'Organizar',
        'Remove comments and spaces to make the file smaller': 'Remover comentários e espaços para deixar o arquivo menor',
        'Shrink': 'Compactar',
        'Drag to change the width of the code area': 'Arraste para mudar a largura da área de código',
        'Drag to change the width': 'Arraste para mudar a largura',
        'Error in the code.': 'Erro no código.',
        'The preview shows the last working version.': 'A visualização mostra a última versão que funcionava.',
        'The preview shows the last working version': 'A visualização mostra a última versão que funcionava',
        'Add xmlns': 'Adicionar xmlns',

        // Tools, grid, view
        'Tools': 'Ferramentas',
        'Select and move shapes (V)': 'Selecionar e mover formas (V)',
        'Select': 'Selecionar',
        'Move the view (H, or hold the space bar)': 'Mover a visualização (H, ou segure a barra de espaço)',
        'Move the view': 'Mover a visualização',
        'Draw a rectangle (R)': 'Desenhar um retângulo (R)',
        'Draw an ellipse or circle (E)': 'Desenhar uma elipse ou um círculo (E)',
        'Draw a line (L)': 'Desenhar uma linha (L)',
        'Draw freehand (P)': 'Desenhar à mão livre (P)',
        'Freehand': 'Mão livre',
        'Add text (T)': 'Adicionar texto (T)',
        'Show the grid and snap shapes to it (#)': 'Mostrar a grade e encaixar as formas nela (#)',
        'Grid': 'Grade',
        'Distance between grid lines, in the drawing\'s units': 'Distância entre as linhas da grade, nas unidades do desenho',
        'Spacing': 'Espaçamento',
        'Shapes jump onto the grid lines when moved or drawn (G)': 'As formas pulam para as linhas da grade ao mover ou desenhar (G)',
        'Snap': 'Encaixar',
        'Canvas: click shapes, drag them, resize them with the handles': 'Tela: clique nas formas, arraste-as, redimensione-as pelas alças',
        'Background of the preview': 'Fundo da visualização',
        'Background behind the drawing (only for viewing, not saved in the file)': 'Fundo atrás do desenho (só para visualizar, não é salvo no arquivo)',
        'Checkered background': 'Fundo quadriculado',
        'White background': 'Fundo branco',
        'Dark background': 'Fundo escuro',
        'No background': 'Sem fundo',
        'Zoom out (-)': 'Diminuir zoom (-)',
        'Zoom out': 'Diminuir zoom',
        'Show at actual size (1)': 'Mostrar em tamanho real (1)',
        'Zoom in (+)': 'Aumentar zoom (+)',
        'Zoom in': 'Aumentar zoom',
        'Fit the drawing into the window (0)': 'Ajustar o desenho à janela (0)',
        'Fit to window': 'Ajustar à janela',
        'Fix the error in the code to edit the shapes again.': 'Corrija o erro no código para editar as formas de novo.',

        // Properties
        'Colors, size and position of the selected shape': 'Cores, tamanho e posição da forma selecionada',
        'All elements of the drawing as a list': 'Todos os elementos do desenho em lista',
        'Layers': 'Camadas',
        'The code contains an error. Once it is fixed, the shapes can be edited here again.':
            'O código contém um erro. Assim que ele for corrigido, as formas podem ser editadas aqui de novo.',
        'No valid SVG loaded.': 'Nenhum SVG válido carregado.',
        'Position in the document': 'Posição no documento',
        'Document': 'Documento',
        'Width': 'Largura',
        'Height': 'Altura',
        'x y width height': 'x y largura altura',
        'Click a shape on the canvas or in the Layers list to edit it. Alt+click selects the surrounding group.':
            'Clique em uma forma na tela ou na lista de camadas para editá-la. Alt+clique seleciona o grupo em volta.',
        'Colors for new shapes': 'Cores para novas formas',
        'Fill': 'Preenchimento',
        'Outline': 'Contorno',
        'Outline width': 'Espessura do contorno',
        'None': 'Nenhuma',
        'Fill color of new shapes': 'Cor de preenchimento das novas formas',
        'Outline color of new shapes': 'Cor do contorno das novas formas',
        'Outline width of new shapes': 'Espessura do contorno das novas formas',
        'Fill color · new shapes': 'Cor de preenchimento · novas formas',
        'Outline color · new shapes': 'Cor do contorno · novas formas',
        'Pick the fill color': 'Escolher a cor de preenchimento',
        'Pick the outline color': 'Escolher a cor do contorno',
        'Fill color': 'Cor de preenchimento',
        'Outline color': 'Cor do contorno',
        'Fill color as text': 'Cor de preenchimento como texto',
        'Outline color as text': 'Cor do contorno como texto',
        'Color as text, e.g. #ff0000, red or none': 'Cor como texto, p. ex. #ff0000, red ou none',
        'No fill': 'Sem preenchimento',
        'No outline': 'Sem contorno',
        'Uses a gradient or pattern - picking a color replaces it.': 'Usa um gradiente ou padrão - escolher uma cor o substitui.',
        'Opacity': 'Opacidade',
        'Overall opacity': 'Opacidade geral',
        'Line style': 'Estilo da linha',
        'solid': 'contínua',
        'dashed': 'tracejada',
        'dotted': 'pontilhada',
        'dash-dot': 'traço-ponto',
        'Line ends': 'Pontas da linha',
        'default': 'padrão',
        'flat': 'retas',
        'round': 'redondas',
        'square': 'quadradas',
        'Corners': 'Cantos',
        'sharp': 'vivos',
        'beveled': 'chanfrados',
        'This text contains further elements (e.g. tspan) - please edit it in the code.':
            'Este texto contém outros elementos (p. ex. tspan) - edite-o no código.',
        'Size': 'Tamanho',
        'Weight': 'Peso',
        'light': 'leve',
        'normal': 'normal',
        'semi-bold': 'seminegrito',
        'bold': 'negrito',
        'black': 'ultranegrito',
        'Font': 'Fonte',
        'Alignment': 'Alinhamento',
        'left': 'esquerda',
        'center': 'centro',
        'right': 'direita',
        'Position and size': 'Posição e tamanho',
        'Left edge': 'Borda esquerda',
        'Top edge': 'Borda superior',
        'W': 'L',
        'Rotate 15° to the left': 'Girar 15° para a esquerda',
        'Rotate 15° to the right': 'Girar 15° para a direita',
        '⟲ Rotate left': '⟲ Girar à esquerda',
        '⟳ Rotate right': '⟳ Girar à direita',
        'Mirror left to right': 'Espelhar da esquerda para a direita',
        'Mirror top to bottom': 'Espelhar de cima para baixo',
        '⇆ Flip horizontal': '⇆ Inverter horizontal',
        '⇅ Flip vertical': '⇅ Inverter vertical',
        'Arrange': 'Organizar',
        'Shapes further down in the code are drawn on top.': 'Formas mais abaixo no código são desenhadas por cima.',
        'One step forward (Ctrl+↑)': 'Um passo para frente (Ctrl+↑)',
        'One step backward (Ctrl+↓)': 'Um passo para trás (Ctrl+↓)',
        'Bring to front (Ctrl+Shift+↑)': 'Trazer para a frente (Ctrl+Shift+↑)',
        'Send to back (Ctrl+Shift+↓)': 'Enviar para trás (Ctrl+Shift+↓)',
        '↑ Forward': '↑ Avançar',
        '↓ Backward': '↓ Recuar',
        '⤒ To front': '⤒ Para a frente',
        '⤓ To back': '⤓ Para trás',
        'Make a copy (Ctrl+D)': 'Fazer uma cópia (Ctrl+D)',
        'Remove this shape (Delete key)': 'Remover esta forma (tecla Delete)',
        '⧉ Duplicate': '⧉ Duplicar',
        '✕ Delete': '✕ Excluir',
        'All attributes (advanced)': 'Todos os atributos (avançado)',
        'Remove attribute': 'Remover atributo',
        'Value': 'Valor',
        'New attribute: name': 'Novo atributo: nome',
        'New attribute: value': 'Novo atributo: valor',
        'Add attribute': 'Adicionar atributo',
        'Invalid attribute name': 'Nome de atributo inválido',
        'The attribute could not be set': 'Não foi possível definir o atributo',

        // Layers
        'Every element of the drawing. Shapes higher in the list are drawn on top. Click to select, drag to reorder (drop onto a group to put it inside), double-click to rename. The eye hides a shape.':
            'Todos os elementos do desenho. Formas mais acima na lista são desenhadas por cima. Clique para selecionar, arraste para reordenar (solte sobre um grupo para colocar dentro dele), clique duas vezes para renomear. O olho oculta uma forma.',
        'Show': 'Mostrar',
        'Hide': 'Ocultar',
        'One step forward': 'Um passo para frente',
        'One step backward': 'Um passo para trás',
        'Duplicate': 'Duplicar',
        'Delete': 'Excluir',
        'Name (id)': 'Nome (id)',
        'Name of the element (id)': 'Nome do elemento (id)',
        'A group cannot be moved into itself': 'Um grupo não pode ser movido para dentro de si mesmo',
        'This element cannot hold other shapes': 'Este elemento não pode conter outras formas',
        'Use letters, digits, - and _ only, starting with a letter': 'Use só letras, dígitos, - e _, começando com uma letra',

        // Messages
        'The browser storage is full': 'O armazenamento do navegador está cheio',
        'The browser storage is full - download and delete drawings under "My drawings"':
            'O armazenamento do navegador está cheio - baixe e exclua desenhos em "Meus desenhos"',
        'The browser storage is full - delete or download drawings under "My drawings" first':
            'O armazenamento do navegador está cheio - exclua ou baixe desenhos em "Meus desenhos" primeiro',
        'The browser storage is full - delete or download some drawings first':
            'O armazenamento do navegador está cheio - exclua ou baixe alguns desenhos primeiro',
        'Nothing to undo': 'Nada para desfazer',
        'Nothing to redo': 'Nada para refazer',
        'Please fix the error in the code first': 'Corrija primeiro o erro no código',
        'Deleted - Undo brings it back': 'Excluído - Desfazer traz de volta',
        'Already at the front': 'Já está na frente',
        'Already at the back': 'Já está atrás',
        'Grid on - shapes snap to the grid': 'Grade ligada - as formas se encaixam na grade',
        'Grid off': 'Grade desligada',
        'Snap to grid: on': 'Encaixar na grade: ligado',
        'Snap to grid: off - shapes move freely': 'Encaixar na grade: desligado - as formas se movem livremente',
        'Code tidied up': 'Código organizado',
        'This drawing is empty already': 'Este desenho já está vazio',
        'Everything in this drawing is removed; its size stays. "Undo" brings it back as long as the page is open.':
            'Tudo neste desenho é removido; o tamanho fica. "Desfazer" traz de volta enquanto a página estiver aberta.',
        'Start over': 'Recomeçar',
        'Please choose an SVG file': 'Escolha um arquivo SVG',
        'The file is larger than 8 MB': 'O arquivo tem mais de 8 MB',
        'SVG pasted from the clipboard': 'SVG colado da área de transferência',
        'Downloaded': 'Baixado',
        'Copied to the clipboard': 'Copiado para a área de transferência',
        'This browser does not allow copying images': 'Este navegador não permite copiar imagens',
        'Code copied': 'Código copiado',
        'SVG downloaded': 'SVG baixado',
        'The image came out empty.': 'A imagem saiu vazia.',
        'The drawing could not be rendered as an image.': 'Não foi possível renderizar o desenho como imagem.',
        'Add': 'Adicionar',
        'Replace': 'Substituir',
        'The drawing has no closing </svg> - the new shapes could not be added':
            'O desenho não tem </svg> de fechamento - as novas formas não puderam ser adicionadas',
        'Drawing received - it has an error, see the code': 'Desenho recebido - ele tem um erro, veja o código',
        'Drop the SVG file here': 'Solte o arquivo SVG aqui',

        // A link from the AI opened in a tab of its own (ai.js)
        'Open it here': 'Abrir aqui',
        'The link could not be read': 'Não foi possível ler o link',
        'The drawing in this link is incomplete or damaged. If the AI\'s link was split over several lines (as in a terminal), copy the whole answer and paste it into the editor with Ctrl+V - the editor joins the lines.':
            'O desenho neste link está incompleto ou danificado. Se o link da IA foi dividido em várias linhas (como num terminal), copie a resposta inteira e cole no editor com Ctrl+V - o editor junta as linhas.',
        'Loading…': 'Carregando…',
        'Taken over by your editor': 'Recebido pelo seu editor',
        'The drawing is now in the SVG Editor tab you already had open. Switch to that tab, or open it here.':
            'O desenho agora está na aba do Editor SVG que você já tinha aberta. Mude para aquela aba ou abra aqui.',

        // Dialogs: shared
        'Close': 'Fechar',

        // Export
        'Export': 'Exportar',
        'File name': 'Nome do arquivo',
        'Vector (sharp at any size)': 'Vetor (nítido em qualquer tamanho)',
        'SVG as in the editor': 'SVG como no editor',
        'SVG tidied up': 'SVG organizado',
        'SVG shrunk (smallest file)': 'SVG compactado (menor arquivo)',
        'Picture': 'Imagem',
        'PNG (transparent background)': 'PNG (fundo transparente)',
        'Code for websites': 'Código para sites',
        'Data URI': 'URI de dados',
        'Base64 data URI': 'URI de dados em Base64',
        'CSS background-image': 'CSS background-image',
        'HTML <img> tag': 'Tag HTML <img>',
        'React component (JSX)': 'Componente React (JSX)',
        '1× (actual size)': '1× (tamanho real)',
        'custom': 'personalizado',
        'Width (px)': 'Largura (px)',
        'Height (px)': 'Altura (px)',
        'Background': 'Fundo',
        'Background color': 'Cor de fundo',
        'Background color · exported image': 'Cor de fundo · imagem exportada',
        'Width and height stay in proportion. JPG has no transparency, so it always gets a background.':
            'Largura e altura ficam proporcionais. JPG não tem transparência, então sempre recebe um fundo.',
        'Result': 'Resultado',
        'Download every format at once: SVG (3 variants), PNG, JPG, WebP, React, data URI, Base64, CSS and HTML':
            'Baixar todos os formatos de uma vez: SVG (3 variantes), PNG, JPG, WebP, React, URI de dados, Base64, CSS e HTML',
        'All formats (ZIP)': 'Todos os formatos (ZIP)',
        'Download': 'Baixar',

        // My drawings
        'Search by name': 'Buscar por nome',
        'Search your drawings': 'Buscar nos seus desenhos',
        'Open an SVG file from your computer as a new drawing': 'Abrir um arquivo SVG do seu computador como novo desenho',
        'New drawing': 'Novo desenho',
        'Click a drawing to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Clique em um desenho para abri-lo. Eles ficam guardados só neste navegador - nada é enviado. Limpar os dados do site no navegador os apaga, então baixe os que você quer manter.',
        'Download every drawing as an .svg file in one ZIP': 'Baixar todos os desenhos como arquivos .svg em um ZIP',
        'Download all (ZIP)': 'Baixar tudo (ZIP)',
        'No drawings yet.': 'Ainda não há desenhos.',
        'Rename': 'Renomear',
        'Download as .svg': 'Baixar como .svg',
        'This drawing is open': 'Este desenho está aberto',
        'Click to open this drawing': 'Clique para abrir este desenho',
        'New name': 'Novo nome',
        'The drawing is removed from this browser for good. Download it first if you want to keep a copy.':
            'O desenho é removido deste navegador para sempre. Baixe-o antes se quiser manter uma cópia.',

        // AI assistant
        'Any AI can draw with you - ChatGPT, Claude, Gemini, Copilot.': 'Qualquer IA pode desenhar com você - ChatGPT, Claude, Gemini, Copilot.',
        'Connected AI': 'IA conectada',
        'Paste it into your AI and say what it should draw.': 'Cole na sua IA e diga o que ela deve desenhar.',
        // The step after "Copy prompt" inside another website (ai.js rewrites it): its parts
        'The AI answers with a link:': 'A IA responde com um link:',
        'paste its whole answer below': 'cole a resposta inteira abaixo',
        '(a clicked link opens a separate editor).': '(um link clicado abre um editor separado).',
        'takes it back.': 'volta atrás.',
        'The AI answers with a link: click it, or paste the whole answer below.': 'A IA responde com um link: clique nele, ou cole a resposta inteira abaixo.',
        'Connected to': 'Conectado a',
        'the AI sends its result there, and it opens here.': 'a IA envia o resultado para lá, e ele abre aqui.',
        '(no key yet)': '(ainda sem chave)',
        '(key valid while the editor is open)': '(chave válida enquanto o editor estiver aberto)',
        'What': 'O que',
        'tells the AI': 'diz à IA',
        'The AI should': 'A IA deve',
        'Change “': 'Alterar "',          // Change “name” -> Alterar “name”
        '”': '"',
        'Make a new drawing': 'Criar um novo desenho',
        'The AI\'s answer (or press Ctrl+V anywhere):': 'A resposta da IA (ou pressione Ctrl+V em qualquer lugar):',
        'The drawing travels in the link after the “#”, which no server sees. What you paste into your AI is handled by its provider.':
            'O desenho viaja no link depois do "#", que nenhum servidor vê. O que você cola na sua IA é tratado pelo provedor dela.',
        'The prompt - copy it with Ctrl+C': 'O prompt - copie com Ctrl+C',
        'Copy prompt': 'Copiar prompt',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)': 'Não é permitido copiar aqui - está selecionado abaixo: pressione Ctrl+C (⌘C)',
        'Prompt copied - paste it into your AI and say what it should draw': 'Prompt copiado - cole na sua IA e diga o que ela deve desenhar',
        'This link is incomplete or damaged - please ask the AI to send it again': 'Este link está incompleto ou danificado - peça à IA para enviá-lo de novo',

        // Save to your server
        'Save to your server': 'Salvar no seu servidor',
        'Webhook address': 'Endereço do webhook',
        'Send automatically a few seconds after each change (otherwise only when you click':
            'Enviar automaticamente alguns segundos após cada alteração (senão só quando você clicar em',
        'or press Ctrl+S)': 'ou pressionar Ctrl+S)',
        'Only for “': 'Só para "',
        '” (other drawings use the general address)': '" (os outros desenhos usam o endereço geral)',
        'What your server receives': 'O que o seu servidor recebe',
        'A POST request with JSON (your server must allow CORS from https://svg.giit.ch):':
            'Uma requisição POST com JSON (seu servidor precisa permitir CORS de https://svg.giit.ch):',
        'Embed the editor in your website': 'Incorporar o editor no seu site',
        'Send now': 'Enviar agora',
        'Save setting': 'Salvar configuração',

        // Help
        'How it works': 'Como funciona',
        'Keyboard shortcuts': 'Atalhos de teclado',
        'Select and move': 'Selecionar e mover',
        'Rectangle, ellipse, line, freehand, text': 'Retângulo, elipse, linha, mão livre, texto',
        'Zoom': 'Zoom',
        'Drag with the mouse wheel pressed': 'Arraste com a roda do mouse pressionada',
        'Double-click the mouse wheel': 'Clique duas vezes com a roda do mouse',
        'Fit to window / actual size': 'Ajustar à janela / tamanho real',
        'Grid on/off / snap on/off': 'Grade lig./desl. / encaixe lig./desl.',
        'Arrow keys': 'Setas',
        'Only horizontal/vertical, keep proportions': 'Só horizontal/vertical, manter proporções',
        'Select the surrounding group': 'Selecionar o grupo em volta',
        'Remove the selection': 'Remover a seleção',
        'Undo / redo': 'Desfazer / refazer',
        'Download SVG (or save to your server) / export': 'Baixar SVG (ou salvar no seu servidor) / exportar',
        'Deselect': 'Desmarcar',

        // Color picker (colorpicker.js)
        'Color': 'Cor',
        'Saturation and brightness (arrow keys)': 'Saturação e brilho (setas)',
        'Hue': 'Matiz',
        'Before - click to go back': 'Antes - clique para voltar',
        'New color': 'Nova cor',
        'Color as hex code, e.g. #ff0000': 'Cor como código hex, p. ex. #ff0000',
        'Done': 'Pronto',
        'Colors in this drawing': 'Cores neste desenho',
        'Basic colors': 'Cores básicas',
        /* ---------- Template placeholders (?template=) ---------- */
        'The drawing holds placeholders - its code stays as written': 'O desenho contém marcadores - seu código permanece como está',
        'The style holds placeholders - edit it in the code': 'O estilo contém marcadores - edite-o no código',
    },

    html: {
        // AI assistant
        'Click <b>Copy prompt</b>.': 'Clique em <b>Copiar prompt</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'A IA responde com um link: clique nele, ou cole a resposta inteira abaixo. <b>Desfazer</b> volta atrás.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'A IA responde com um link: <b>cole a resposta inteira abaixo</b> (um link clicado abre um editor separado). <b>Desfazer</b> volta atrás.',

        // Save to your server
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your drawings are kept where you want them. Nothing is sent until you enter an address here.':
            'O editor pode enviar cada versão salva para o seu próprio servidor (um <b>webhook</b>), para que os seus desenhos fiquem onde você quiser. Nada é enviado até você informar um endereço aqui.',
        'Token <small>(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)</small>': 'Token <small>(opcional, enviado como "Authorization: Bearer …"; guardado até fechar esta aba)</small>',
        'Also possible: <code>?src=&lt;URL of an .svg file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this drawing there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>svgeditor:ai</code>, <code>svgeditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Também é possível: <code>?src=&lt;URL of an .svg file&gt;</code> abre um arquivo, <code>&amp;webhook=&lt;URL&gt;</code> salva este desenho lá. O editor também pode abrir em uma janela própria (<code>?embed=window</code>), e a sua página pode entregar a ele o próprio prompt de IA e uma chave de sessão para que a IA envie o resultado ao seu servidor (<code>svgeditor:ai</code>, <code>svgeditor:key-request</code>) - veja "Use o editor no seu próprio site" abaixo do editor. Os detalhes estão em <a href="/llms.txt">llms.txt</a>.',

        // Help
        '<b>Open</b> an SVG file, drag it into the window or paste SVG code - or start with <b>New</b>.':
            '<b>Abra</b> um arquivo SVG, arraste-o para a janela ou cole código SVG - ou comece com <b>Novo</b>.',
        '<b>My drawings</b> (the folder button at the top left) lists every drawing kept in this browser: open, rename, duplicate, download or delete them.':
            '<b>Meus desenhos</b> (o botão de pasta no canto superior esquerdo) lista todos os desenhos guardados neste navegador: abra, renomeie, duplique, baixe ou exclua.',
        '<b>Click a shape</b> on the canvas. Drag it to move it, drag the small squares to resize it. Colors, size and position are under <b>Properties</b> on the right.':
            '<b>Clique em uma forma</b> na tela. Arraste-a para movê-la, arraste os quadradinhos para redimensioná-la. Cores, tamanho e posição ficam em <b>Propriedades</b>, à direita.',
        '<b>Draw</b> new shapes with the tools above the canvas.': '<b>Desenhe</b> novas formas com as ferramentas acima da tela.',
        'The <b>code</b> on the left always shows the current drawing and can be edited directly.':
            'O <b>código</b> à esquerda sempre mostra o desenho atual e pode ser editado diretamente.',
        '<b>Download SVG</b> saves the file, <b>Export</b> offers pictures (PNG, JPG) and code for websites.':
            '<b>Baixar SVG</b> salva o arquivo, <b>Exportar</b> oferece imagens (PNG, JPG) e código para sites.',
        'Made a mistake? <b>Undo</b> takes back every step. Your drawings are kept in this browser, even after closing the page.':
            'Errou? <b>Desfazer</b> desfaz cada passo. Seus desenhos ficam guardados neste navegador, mesmo depois de fechar a página.',
        '<kbd>H</kbd> / hold <kbd>Space</kbd>': '<kbd>H</kbd> / segurar <kbd>Space</kbd>',
        'Mouse wheel, <kbd>+</kbd> <kbd>-</kbd>': 'Roda do mouse, <kbd>+</kbd> <kbd>-</kbd>',
        'Move the selection by 1, with <kbd>Shift</kbd> by 10': 'Mover a seleção em 1, com <kbd>Shift</kbd> em 10',
        '<kbd>Shift</kbd> while dragging': '<kbd>Shift</kbd> ao arrastar',
        '<kbd>Alt</kbd> + click': '<kbd>Alt</kbd> + clique',
        '<kbd>Delete</kbd>': '<kbd>Delete</kbd>',
        'Forward / backward (with <kbd>Shift</kbd>: to front / to back)': 'Para frente / para trás (com <kbd>Shift</kbd>: para a frente de tudo / para trás de tudo)',
        'In the code: <kbd>Tab</kbd> indents, <kbd>Shift</kbd>+<kbd>Tab</kbd> outdents, clicking into a tag selects that shape on the canvas.':
            'No código: <kbd>Tab</kbd> aumenta o recuo, <kbd>Shift</kbd>+<kbd>Tab</kbd> diminui, clicar dentro de uma tag seleciona essa forma na tela.',
    },

    patterns: [
        // Canvas hint with the grid
        ['^(.*?) ?Snapping to a ([\\d.]+) grid\\.$', (m, h, n) => `${h ? (HINT[h] || h) + ' ' : ''}Encaixa numa grade de ${n}.`],
        ['^(.*?) ?Snap: ([\\d.]+)\\.$', (m, h, n) => `${h ? (HINT[h] || h) + ' ' : ''}Encaixe: ${n}.`],

        // Code
        ['^(\\d+) lines · (.+)$', (m, n, s) => `${n} ${n === '1' ? 'linha' : 'linhas'} · ${s}`],
        ['^Line (\\d+), column (\\d+):$', (m, l, c) => `Linha ${l}, coluna ${c}:`],
        ['^Line (\\d+):$', (m, l) => `Linha ${l}:`],
        ['^Line (\\d+), column (\\d+): (.*)$', (m, l, c, t) => `Linha ${l}, coluna ${c}: ${CODE_ERROR[t] || t}`],
        ['^Line (\\d+): (.*)$', (m, l, t) => `Linha ${l}: ${CODE_ERROR[t] || t}`],
        ['^File shrunk: (\\d+) → (\\d+) bytes$', 'Arquivo compactado: $1 → $2 bytes'],

        // Properties
        [`^(Fill|Outline) color · (whole drawing|${TYPE_ANY})( #.+)?$`, (m, w, t, id) =>
            `${w === 'Fill' ? 'Cor de preenchimento' : 'Cor do contorno'} · ${t === 'whole drawing' ? 'desenho inteiro' : translateLabel(t)}${id || ''}`],
        ['^(.+) \\(inherited\\)$', '$1 (herdado)'],
        ['^Remove ([A-Za-z_:][\\w:.-]*)$', 'Remover $1'],

        // Layers
        ['^<([^>]+)> - click to select, double-click to rename, drag to reorder$', '<$1> - clique para selecionar, clique duas vezes para renomear, arraste para reordenar'],
        ['^<([^>]+)> - click to select$', '<$1> - clique para selecionar'],
        [`^Show ${TYPE}$`, (m, t) => `Mostrar ${translateLabel(t)}`],
        [`^Hide ${TYPE}$`, (m, t) => `Ocultar ${translateLabel(t)}`],
        [`^Move ${TYPE} forward$`, (m, t) => `${translateLabel(t)} para frente`],
        [`^Move ${TYPE} backward$`, (m, t) => `${translateLabel(t)} para trás`],
        [`^Duplicate ${TYPE}$`, (m, t) => `Duplicar ${translateLabel(t)}`],
        [`^Delete ${TYPE}$`, (m, t) => `Excluir ${translateLabel(t)}`],
        ['^The name “(.+)” is already used$', 'O nome "$1" já está em uso'],

        // The open drawing
        ['^"(.+)" is open\\. My drawings: open, rename, duplicate or delete your drawings \\(Ctrl\\+O\\)$',
            '"$1" está aberto. Meus desenhos: abra, renomeie, duplique ou exclua seus desenhos (Ctrl+O)'],
        ['^Start "(.+)" over\\?$', 'Recomeçar "$1"?'],
        ['^Start "(.+)" over$', 'Recomeçar "$1"'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '"$1" está vazio agora - "Desfazer" traz de volta'],
        ['^Opened "(.+)" - it is now in "My drawings"$', '"$1" aberto - agora ele está em "Meus desenhos"'],
        ['^New drawing "(.+)" from the AI - your other drawings are unchanged$', 'Novo desenho "$1" da IA - seus outros desenhos não mudaram'],
        ['^New drawing "(.+)" - your other drawings are under "My drawings"$', 'Novo desenho "$1" - seus outros desenhos estão em "Meus desenhos"'],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '"$1" alterado pela IA - "Desfazer" volta atrás'],
        ['^"(.+)" opened$', '"$1" aberto'],

        // Export
        ['^(\\d+) × (\\d+) pixels$', '$1 × $2 pixels'],
        ['^([\\d,]+) bytes$', m => formatBytes(m)],
        ['^ZIP with 11 files downloaded \\(pictures (\\d+) × (\\d+) px\\)$', 'ZIP com 11 arquivos baixado (imagens $1 × $2 px)'],

        // My drawings
        ['^(\\d+) (?:drawing|drawings) · (.+) in this browser$', (m, n, s) => `${n} ${translateDrawings(n)} · ${formatBytes(s)} neste navegador`],
        ['^Open now · (.+)$', (m, s) => `Aberto agora · ${formatBytes(s)}`],
        ['^just now · (.+)$', (m, s) => `agora mesmo · ${formatBytes(s)}`],
        ['^(\\d+) min ago · (.+)$', (m, n, s) => `há ${n} min · ${formatBytes(s)}`],
        ['^(\\d+) h ago · (.+)$', (m, n, s) => `há ${n} h · ${formatBytes(s)}`],
        ['^yesterday · (.+)$', (m, s) => `ontem · ${formatBytes(s)}`],
        ['^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\\d{1,2}), (\\d{4}) · (.+)$', (m, mo, d, y, s) => `${d} de ${MONTH[mo]} de ${y} · ${formatBytes(s)}`],
        ['^(.+) \\(open now\\)$', '$1 (aberto agora)'],
        ['^Open (.+)$', 'Abrir $1'],
        ['^No drawing named "(.*)"\\.$', 'Nenhum desenho chamado "$1".'],
        ['^Delete "(.+)"\\?$', 'Excluir "$1"?'],
        ['^"(.+)" duplicated$', '"$1" duplicado'],
        ['^"(.+)" deleted$', '"$1" excluído'],
        ['^ZIP with (\\d+) (?:drawing|drawings) downloaded$', (m, n) => `ZIP com ${n} ${translateDrawings(n)} baixado`],

        // AI
        ['^Part (\\d+) of (\\d+) received$', 'Parte $1 de $2 recebida'],
        ['^Open the other (link|links) from the AI too \\(still missing: part (.+)\\)\\.$',
            (m, l, p) => `Abra também ${l === 'link' ? 'o outro link' : 'os outros links'} da IA (ainda falta: parte ${p}).`],
        ['^Part (\\d+) of (\\d+) received - paste the other (link|links) too \\(missing: (.+)\\)$',
            (m, a, b, l, p) => `Parte ${a} de ${b} recebida - cole também ${l === 'link' ? 'o outro link' : 'os outros links'} (falta: ${p})`],
        ['^The AI sends the drawing to (.+) with a key that only works for this session\\. What you paste into your AI is handled by its provider\\.$',
            'A IA envia o desenho para $1 com uma chave que só vale para esta sessão. O que você cola na sua IA é tratado pelo provedor dela.'],
        ['^The AI sends its result to (.+) by itself, and it opens here\\. If it answers with a link, paste its answer below\\.$',
            'A IA envia o resultado sozinha para $1, e ele abre aqui. Se ela responder com um link, cole a resposta abaixo.'],
        ['^No key from (.+) - the prompt asks the AI for a link instead$', 'Nenhuma chave de $1 - o prompt pede um link à IA em vez disso'],
        ['^Prompt copied - the AI sends its result to (.+)$', 'Prompt copiado - a IA envia o resultado para $1'],
    ],
};
