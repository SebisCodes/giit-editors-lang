/* Brazilian Portuguese texts of the Markdown editor: the bar, the work area (code,
   preview, insert, pictures, outline), its dialogs and messages, and the
   problems the preview finds in the code. What all editors share is in
   common.js; how the dictionaries are used is described in
   i18n.js. Names of documents, pictures and anchors stay as they are: the
   patterns copy them into the Portuguese text. */

import { formatTime, formatSize, formatThousands, getPlural } from './format.js';

/* "1,234" -> "1.234" (Brazilian thousands separator) */

/* "1,234 bytes" -> "1.234 bytes" */

/* When a document was last changed (files.js): "just now", "5 min ago", "Oct 25, 2026" … */

/* Reasons a ZIP could not be opened (app.js openZip) */
const ZIP = { 'it is not a ZIP file': 'não é um arquivo ZIP', 'there is no .md file in it': 'não há nenhum arquivo .md dentro' };

export default {
    text: {
        // Editing in place: Enter and Shift+Enter
        "Editing on the page - Enter: new paragraph, Shift+Enter: new line, Ctrl+Enter or a click elsewhere keeps it, Escape cancels": "Editando na página - Enter: novo parágrafo, Shift+Enter: nova linha, Ctrl+Enter ou um clique em outro lugar aplica, Escape cancela",
        "A new paragraph inside bold, italic or a link is made in the code - Shift+Enter makes a new line": "Um novo parágrafo em negrito, itálico ou dentro de um link é criado no código - Shift+Enter cria uma nova linha",
        // Labels that are the same in English and German
        'Code': 'Código',
        'Export': 'Exportar',
        'Format': 'Formato',
        'Name': 'Nome',

        /* ---------- Top bar ---------- */
        'Markdown Editor - home': 'Editor Markdown - início',
        'Markdown Editor': 'Editor Markdown',
        'File': 'Arquivo',
        'My documents (Ctrl+O)': 'Meus documentos (Ctrl+O)',
        'My documents': 'Meus documentos',
        'New document, or start this one over': 'Novo documento, ou recomeçar este',
        'New': 'Novo',
        'New blank document': 'Novo documento em branco',
        'An empty page - your other documents stay as they are': 'Uma página vazia - seus outros documentos continuam como estão',
        'README': 'README',
        'Project name, features, installation and usage': 'Nome do projeto, recursos, instalação e uso',
        'Article': 'Artigo',
        'Title, summary, sections and a quote': 'Título, resumo, seções e uma citação',
        'Meeting notes': 'Ata de reunião',
        'Agenda, decisions and a table of tasks': 'Pauta, decisões e uma tabela de tarefas',
        'Checklist': 'Lista de verificação',
        'Tasks to tick off, in groups': 'Tarefas para marcar, em grupos',
        'The welcome example': 'O exemplo de boas-vindas',
        'Shows what the editor can do': 'Mostra o que o editor sabe fazer',
        'Start this document over': 'Recomeçar este documento',
        'Empties the text, keeps the pictures - "Undo" brings it back': 'Esvazia o texto, mantém as imagens - "Desfazer" traz de volta',
        'Open a .md file (or a picture) from your computer (you can also drag it into the window)':
            'Abrir um arquivo .md (ou uma imagem) do seu computador (você também pode arrastá-lo para a janela)',
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
        'Let any AI write in this editor': 'Deixe qualquer IA escrever neste editor',
        'AI Assistant': 'Assistente de IA',
        'Save to your own server and embed the editor in your website': 'Salvar no seu próprio servidor e incorporar o editor no seu site',
        'Save to server': 'Salvar no servidor',
        'How it works and keyboard shortcuts (?)': 'Como funciona e atalhos de teclado (?)',
        'Help': 'Ajuda',
        'Save the document as a .md file (Ctrl+S)': 'Salvar o documento como arquivo .md (Ctrl+S)',
        'Download .md': 'Baixar .md',
        'HTML, PDF, plain text and more (Ctrl+E)': 'HTML, PDF, texto simples e mais (Ctrl+E)',
        'Export…': 'Exportar…',

        /* ---------- Views and work area ---------- */
        'View': 'Exibir',
        'Edit': 'Editar',
        'Preview': 'Visualização',
        'Insert': 'Inserir',
        'Markdown code': 'Código Markdown',
        'Copy the Markdown to the clipboard': 'Copiar o Markdown para a área de transferência',
        'Copy code': 'Copiar código',
        'Copy': 'Copiar',
        'Drag to change the width of the code area': 'Arraste para mudar a largura da área de código',
        'Drag to change the width': 'Arraste para mudar a largura',
        'Formatting': 'Formatação',
        'Bold (Ctrl+B)': 'Negrito (Ctrl+B)',
        'Bold': 'Negrito',
        'Italic (Ctrl+I)': 'Itálico (Ctrl+I)',
        'Italic': 'Itálico',
        'Strikethrough': 'Tachado',
        'Code in the text': 'Código no texto',
        'Link (Ctrl+K)': 'Link (Ctrl+K)',
        'Heading': 'Título',
        'Bulleted list': 'Lista com marcadores',
        'Numbered list': 'Lista numerada',
        'Task list': 'Lista de tarefas',
        'Table': 'Tabela',
        'Picture': 'Imagem',
        'Insert picture': 'Inserir imagem',
        'Quote': 'Citação em bloco',
        'Code block': 'Bloco de código',
        'Math in the text (Ctrl+M)': 'Fórmula no texto (Ctrl+M)',
        'Math': 'Fórmula',
        'Text size': 'Tamanho do texto',
        'Smaller text in the preview': 'Texto menor na visualização',
        'Smaller text': 'Texto menor',
        'Normal text size': 'Tamanho normal do texto',
        'Larger text in the preview': 'Texto maior na visualização',
        'Larger text': 'Texto maior',
        'Preview of the document: click text to edit it, Ctrl+click follows a link': 'Visualização do documento: clique em um texto para editá-lo, Ctrl+clique segue um link',
        'Updating…': 'Atualizando…',
        'Insert, pictures and outline': 'Inserir, imagens e tópicos',
        'Ready-made pieces: structure, text, math, symbols': 'Peças prontas: estrutura, texto, fórmulas, símbolos',
        'The pictures of this document': 'As imagens deste documento',
        'Pictures': 'Imagens',
        'The headings of the document': 'Os títulos do documento',
        'Outline': 'Tópicos',
        'The headings of the document. Click one to go there in the code and in the preview.':
            'Os títulos do documento. Clique em um para ir até ele no código e na visualização.',
        'No headings yet - start a line with # and a space.': 'Ainda não há títulos - comece uma linha com # e um espaço.',
        'Open it here': 'Abrir aqui',
        'Drop the .md file or picture here': 'Solte o arquivo .md ou a imagem aqui',

        'The document is empty - write Markdown on the left, or choose a template under "New".': 'O documento está vazio - escreva Markdown à esquerda, ou escolha um modelo em "Novo".',

        /* Problems above the code */
        'Hide': 'Ocultar',
        'Show': 'Mostrar',

        /* ---------- Insert tab ---------- */
        'Structure': 'Estrutura',
        'Heading 1': 'Título 1',
        'Heading 2': 'Título 2',
        'Heading 3': 'Título 3',
        '# Heading': '# Título',
        '## Heading': '## Título',
        '### Heading': '### Título',
        'Horizontal rule': 'Linha horizontal',
        'Apply page breaks': 'Aplicar quebras de página',
        'New page': 'Nova página',
        'Document': 'Documento',
        '• Bulleted list': '• Marcadores',
        '1. Numbered list': '1. Lista numerada',
        '☐ Task list': '☐ Lista de tarefas',
        'Fold-out section': 'Seção expansível',
        'Line break': 'Quebra de linha',
        'Text': 'Texto',
        '**bold** (Ctrl+B)': '**negrito** (Ctrl+B)',
        '*italic* (Ctrl+I)': '*itálico* (Ctrl+I)',
        '~~struck through~~': '~~tachado~~',
        'Link to a heading': 'Link para um título',
        '[text](#heading)': '[texto](#título)',
        '[text](https://…) (Ctrl+K)': '[texto](https://…) (Ctrl+K)',
        '![description](name.png)': '![descrição](nome.png)',
        'Footnote': 'Nota de rodapé',
        '[^1] at the cursor, the note at the end': '[^1] no cursor, a nota no final',
        'Key': 'Tecla',
        'A key as on the keyboard: <kbd>Ctrl</kbd>': 'Uma tecla como no teclado: <kbd>Ctrl</kbd>',
        '`code` between backticks': '`código` entre crases',
        '$x$ in the text': '$x$ no texto',
        'Displayed': 'Em destaque',
        '$$ … $$ on its own lines': '$$ … $$ em linhas próprias',
        'Fraction': 'Fração',
        'Root': 'Raiz',
        'x² Power': 'x² Potência',
        'x₁ Index': 'x₁ Índice',
        '∑ Sum': '∑ Soma',
        '∫ Integral': '∫ Integral',
        'lim Limit': 'lim Limite',
        '2×2 matrix': 'Matriz 2×2',
        'Cases': 'Casos',
        'Greek letters': 'Letras gregas',
        'Symbols': 'Símbolos',
        'Pictures have their own tab:': 'As imagens têm uma aba própria:',

        /* ---------- Pictures tab ---------- */
        'Add pictures…': 'Adicionar imagens…',
        'No pictures yet': 'Ainda não há imagens',
        'Missing in this document': 'Faltando neste documento',
        'Add file…': 'Adicionar arquivo…',
        'Show where it is used': 'Mostrar onde é usada',
        '![…](name) at the cursor': '![…](nome) no cursor',
        'Rename - the code is changed along': 'Renomear - o código é alterado junto',
        'Rename': 'Renomear',
        'Choose another file, keep the name': 'Escolher outro arquivo, manter o nome',
        'Replace': 'Substituir',
        'Download the picture': 'Baixar a imagem',
        'Download': 'Baixar',
        'Remove the picture from this document': 'Remover a imagem deste documento',
        'Remove': 'Remover',
        'New name': 'Novo nome',
        'Pictures belong to “': 'As imagens pertencem a "',
        '” and stay in your browser. Drop or paste them anywhere in the editor, or add them here;': '" e ficam no seu navegador. Solte ou cole-as em qualquer lugar do editor, ou adicione aqui;',
        'uses them.': 'as usa.',

        /* ---------- Export ---------- */
        'Close': 'Fechar',
        'File name': 'Nome do arquivo',
        'HTML page (one file)': 'Página HTML (um arquivo)',
        'PDF (print or save as PDF)': 'PDF (imprimir ou salvar como PDF)',
        'Plain text': 'Texto simples',
        'Markdown (.md)': 'Markdown (.md)',
        'Markdown with pictures (ZIP)': 'Markdown com imagens (ZIP)',
        'Result': 'Resultado',
        'Download everything at once: .md, pictures, HTML and text': 'Baixar tudo de uma vez: .md, imagens, HTML e texto',
        'All formats (ZIP)': 'Todos os formatos (ZIP)',
        'Print / Save as PDF': 'Imprimir / Salvar como PDF',
        '(The HTML page - with its pictures and styles inside - is created when you download or copy it.)':
            '(A página HTML - com suas imagens e estilos dentro - é criada quando você a baixa ou copia.)',

        /* ---------- My documents ---------- */
        'Search by name': 'Buscar por nome',
        'Search your documents': 'Buscar nos seus documentos',
        'Open a .md file from your computer as a new document': 'Abrir um arquivo .md do seu computador como novo documento',
        'New document': 'Novo documento',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Clique em um documento para abri-lo. Eles ficam guardados só neste navegador - nada é enviado. Limpar os dados do site no navegador os apaga, então baixe os que você quer manter.',
        'Download every document as a .md file (with its pictures) in one ZIP': 'Baixar todos os documentos como arquivos .md (com suas imagens) em um ZIP',
        'Download all (ZIP)': 'Baixar tudo (ZIP)',
        'Duplicate': 'Duplicar',
        'Download as .md': 'Baixar como .md',
        'Delete': 'Excluir',
        'This document is open': 'Este documento está aberto',
        'Click to open this document': 'Clique para abrir este documento',
        'No documents yet.': 'Ainda não há documentos.',

        /* ---------- AI Assistant ---------- */
        'Any AI can write with you - ChatGPT, Claude, Gemini, Copilot.': 'Qualquer IA pode escrever com você - ChatGPT, Claude, Gemini, Copilot.',
        'Connected AI': 'IA conectada',
        'Connected to': 'Conectado a',
        'the AI sends its result there, and it opens here.': 'a IA envia o resultado para lá, e ele abre aqui.',
        'What': 'O que',
        'tells the AI': 'diz à IA',
        'The AI should': 'A IA deve',
        'Change “': 'Alterar "',
        '”': '"',
        'Make a new document': 'Criar um novo documento',
        'The AI\'s answer (or press Ctrl+V anywhere):': 'A resposta da IA (ou pressione Ctrl+V em qualquer lugar):',
        'The document travels in the link after the “#”, which no server sees. What you paste into your AI is handled by its provider.':
            'O documento viaja no link depois do "#", que nenhum servidor vê. O que você cola na sua IA é tratado pelo provedor dela.',
        'The prompt - copy it with Ctrl+C': 'O prompt - copie com Ctrl+C',
        'Copy prompt': 'Copiar prompt',
        /* the step with the link, also when the editor sets it anew (text by text) */
        'The AI answers with a link: click it, or paste the whole answer below.': 'A IA responde com um link: clique nele, ou cole a resposta inteira abaixo.',
        'takes it back.': 'volta atrás.',
        'The AI answers with a link:': 'A IA responde com um link:',
        'paste its whole answer below': 'cole a resposta inteira abaixo',
        '(a clicked link opens a separate editor).': '(um link clicado abre um editor separado).',
        '(no key yet)': '(ainda sem chave)',
        '(key valid while the editor is open)': '(chave válida enquanto o editor estiver aberto)',
        'The link could not be read': 'Não foi possível ler o link',
        'The document in this link is incomplete or damaged. If the AI\'s link was split over several lines (as in a terminal), copy the whole answer and paste it into the editor with Ctrl+V - the editor joins the lines.':
            'O documento neste link está incompleto ou danificado. Se o link da IA foi dividido em várias linhas (como num terminal), copie a resposta inteira e cole no editor com Ctrl+V - o editor junta as linhas.',
        'Loading…': 'Carregando…',
        'Taken over by your editor': 'Recebido pelo seu editor',
        'The document is now in the Markdown Editor tab you already had open. Switch to that tab, or open it here.':
            'O documento agora está na aba do Editor Markdown que você já tinha aberta. Mude para aquela aba ou abra aqui.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)': 'Não é permitido copiar aqui - está selecionado abaixo: pressione Ctrl+C (⌘C)',
        'Paste it into your AI and say what it should write.': 'Cole na sua IA e diga o que ela deve escrever.',
        'Prompt copied - paste it into your AI and say what it should write': 'Prompt copiado - cole na sua IA e diga o que ela deve escrever',
        'This link is incomplete or damaged - please ask the AI to send it again': 'Este link está incompleto ou danificado - peça à IA para enviá-lo de novo',

        /* ---------- Save to your server ---------- */
        'Save to your server': 'Salvar no seu servidor',
        'Webhook address': 'Endereço do webhook',
        'https://example.com/api/markdown': 'https://example.com/api/markdown',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(opcional, enviado como "Authorization: Bearer …"; guardado até fechar esta aba)',
        'Send automatically a few seconds after each change (otherwise only when you click': 'Enviar automaticamente alguns segundos após cada alteração (senão só quando você clicar em',
        'or press Ctrl+S)': 'ou pressionar Ctrl+S)',
        'Only for “': 'Só para "',
        '” (other documents use the general address)': '" (os outros documentos usam o endereço geral)',
        'What your server receives': 'O que o seu servidor recebe',
        'A POST request with JSON (your server must allow CORS from https://md.giit.ch):': 'Uma requisição POST com JSON (seu servidor precisa permitir CORS de https://md.giit.ch):',
        'Embed the editor in your website': 'Incorporar o editor no seu site',
        'Send now': 'Enviar agora',
        'Save setting': 'Salvar configuração',

        /* ---------- Help ---------- */
        'How it works': 'Como funciona',
        'Keyboard shortcuts': 'Atalhos de teclado',
        'Bold / italic around the selected text': 'Negrito / itálico em volta do texto selecionado',
        'Link': 'Link',
        'Show the cursor\'s place in the preview': 'Mostrar a posição do cursor na visualização',
        'Indent / outdent': 'Aumentar / diminuir recuo',
        'Undo / redo': 'Desfazer / refazer',
        'Save (download .md, or to your server) / export': 'Salvar (baixar .md, ou no seu servidor) / exportar',
        'Print / save as PDF': 'Imprimir / salvar como PDF',
        'Problems (a missing picture, a link to a heading that is not there, a code block that is never closed, a table row with too many cells) are listed above the code - click one to go there.':
            'Problemas (uma imagem faltando, um link para um título que não existe, um bloco de código nunca fechado, uma linha de tabela com células demais) aparecem acima do código - clique em um para ir até lá.',

        /* ---------- Messages ---------- */
        'The browser storage is full - download and delete documents under "My documents"': 'O armazenamento do navegador está cheio - baixe e exclua documentos em "Meus documentos"',
        'The browser storage is full - delete or download documents under "My documents" first': 'O armazenamento do navegador está cheio - exclua ou baixe documentos em "Meus documentos" primeiro',
        'The browser storage is full - delete or download some documents first': 'O armazenamento do navegador está cheio - exclua ou baixe alguns documentos primeiro',
        'The browser storage is full': 'O armazenamento do navegador está cheio',
        'Nothing to undo': 'Nada para desfazer',
        'Nothing to redo': 'Nada para refazer',
        'This text changed in the code - wait for the preview, then try again': 'Este texto mudou no código - aguarde a visualização e tente de novo',
        'This box changed in the code - wait for the preview, then try again': 'Esta caixa mudou no código - aguarde a visualização e tente de novo',
        'This picture changed in the code - wait for the preview, then try again': 'Esta imagem mudou no código - aguarde a visualização e tente de novo',
        'The code changed meanwhile - the edit was not used': 'O código mudou nesse meio-tempo - a edição não foi usada',
        'This anchor is not in the document': 'Esta âncora não está no documento',
        'The picture is removed from this document. Places that use it show its name in a frame. "Undo" does not bring it back.':
            'A imagem foi removida deste documento. Os lugares que a usam mostram o nome dela em um quadro. "Desfazer" não a traz de volta.',
        'Pictures can be PNG, JPG, GIF, WebP, SVG or PDF': 'As imagens podem ser PNG, JPG, GIF, WebP, SVG ou PDF',
        'The picture is larger than 12 MB': 'A imagem tem mais de 12 MB',
        'The picture could not be read': 'Não foi possível ler a imagem',
        'This document is empty already': 'Este documento já está vazio',
        'Everything is removed; the pictures of the document stay. "Undo" brings the text back as long as the page is open.':
            'Tudo é removido; as imagens do documento ficam. "Desfazer" traz o texto de volta enquanto a página estiver aberta.',
        'Start over': 'Recomeçar',
        'The file is larger than 8 MB': 'O arquivo tem mais de 8 MB',
        'Downloaded': 'Baixado',
        'Copied to the clipboard': 'Copiado para a área de transferência',
        'This browser does not allow copying this': 'Este navegador não permite copiar isso',
        'Code copied': 'Código copiado',
        '.md with its pictures downloaded (ZIP)': '.md com suas imagens baixado (ZIP)',
        '.md downloaded': '.md baixado',
        'ZIP downloaded: .md, pictures, HTML and text': 'ZIP baixado: .md, imagens, HTML e texto',
        'Add': 'Adicionar',
        'The document and its pictures are removed from this browser for good. Download it first if you want to keep a copy.':
            'O documento e suas imagens são removidos deste navegador para sempre. Baixe-o antes se quiser manter uma cópia.',

        /* ---------- Problems the preview finds (markdown.js) ---------- */
        '$$ is never closed - add a line with $$ after the formula': '$$ nunca é fechado - adicione uma linha com $$ depois da fórmula',
    },

    html: {

        '<b>Export</b> also has <b>Open in another editor</b>: it converts the document and opens it as a new document there. Anything the other format cannot hold is listed first.':

            '<b>Exportar</b> também oferece <b>Abrir em outro editor</b>: o documento é convertido e aberto lá como novo documento. O que o outro formato não comporta é listado antes.',

        '<b>Insert</b> &gt; <b>New page</b> sets a page break for printing and PDF; the preview shows it as a dashed line. Headings stay with their text and tables and pictures are not cut. In Export, <b>Apply page breaks</b> turns them off for a PDF.':

            '<b>Inserir</b> &gt; <b>Nova página</b> define uma quebra de página para impressão e PDF; a visualização a mostra como linha tracejada. Títulos ficam com o texto, tabelas e imagens não são cortadas. Em <b>Exportar</b>, <b>Aplicar quebras de página</b> as desativa para um PDF.',
        /* Export */
        'The print dialog opens with the document only. Choose <b>Save as PDF</b> (or "Microsoft Print to PDF") as the printer. In Chrome and Edge, untick "Headers and footers" if the browser offers it. The text in the PDF stays sharp and can be selected.':
            'A janela de impressão abre só com o documento. Escolha <b>Salvar como PDF</b> (ou "Microsoft Print to PDF") como impressora. No Chrome e no Edge, desmarque "Cabeçalhos e rodapés" se o navegador oferecer. O texto do PDF fica nítido e pode ser selecionado.',

        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Clique em <b>Copiar prompt</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'A IA responde com um link: clique nele, ou cole a resposta inteira abaixo. <b>Desfazer</b> volta atrás.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'A IA responde com um link: <b>cole a resposta inteira abaixo</b> (um link clicado abre um editor separado). <b>Desfazer</b> volta atrás.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'O editor pode enviar cada versão salva para o seu próprio servidor (um <b>webhook</b>), para que o seu trabalho fique onde você quiser. Nada é enviado até você informar um endereço aqui.',
        'Also possible: <code>?src=&lt;URL of a .md file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>mdeditor:ai</code>, <code>mdeditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Também é possível: <code>?src=&lt;URL of a .md file&gt;</code> abre um arquivo, <code>&amp;webhook=&lt;URL&gt;</code> salva este documento lá. O editor também pode abrir em uma janela própria (<code>?embed=window</code>), e a sua página pode entregar a ele o próprio prompt de IA e uma chave de sessão para que a IA envie o resultado ao seu servidor (<code>mdeditor:ai</code>, <code>mdeditor:key-request</code>) - veja "Use o editor no seu próprio site" abaixo do editor. Os detalhes estão em <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> Markdown on the left - or start with <b>New</b> and one of the templates. The preview in the middle shows the document as you type.':
            '<b>Escreva</b> Markdown à esquerda - ou comece com <b>Novo</b> e um dos modelos. A visualização no meio mostra o documento enquanto você digita.',
        '<b>Click text in the preview</b> to edit it right there: the cursor is where you clicked, and the code\'s cursor goes to the same place. <b>Enter</b> starts a new paragraph; <b>Shift+Enter</b> inserts a line break. <b>Ctrl+Enter</b> (<b>Cmd+Enter</b> on macOS) or a click elsewhere applies the edit; <b>Escape</b> cancels. Each edit is one step for Undo. Characters such as <code>*</code> or <code>_</code> are escaped so they stay text. A click on math, a picture or code jumps to its place in the code instead. <b>Ctrl</b> + click follows a link. A check box of a task list ticks the task in the code.':
            '<b>Clique em um texto na visualização</b> para editá-lo ali mesmo: o cursor fica onde você clicou, e o cursor do código vai para o mesmo lugar. <b>Enter</b> inicia um novo parágrafo; <b>Shift+Enter</b> insere uma quebra de linha. <b>Ctrl+Enter</b> (<b>Cmd+Enter</b> no macOS) ou um clique em outro lugar aplica a edição; <b>Escape</b> cancela. Cada edição pode ser desfeita em um único passo. Caracteres como <code>*</code> ou <code>_</code> são escapados para continuarem texto. Um clique em uma fórmula, imagem ou código leva ao lugar dele no código. <b>Ctrl</b> + clique segue um link. A caixa de seleção de uma lista de tarefas marca a tarefa no código.',
        '<b>Insert</b> on the right has ready-made pieces (headings, lists, tables, math, symbols); <b>Pictures</b> holds the pictures of the document; <b>Outline</b> lists the headings.':
            '<b>Inserir</b> à direita tem peças prontas (títulos, listas, tabelas, fórmulas, símbolos); <b>Imagens</b> guarda as imagens do documento; <b>Tópicos</b> lista os títulos.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser.':
            '<b>Meus documentos</b> (o botão de pasta no canto superior esquerdo) lista todos os documentos guardados neste navegador.',
        '<b>Export</b> makes an HTML page, a PDF (via the print dialog) or plain text. <b>Download .md</b> saves the code (with its pictures as ZIP).':
            '<b>Exportar</b> cria uma página HTML, um PDF (pela janela de impressão) ou texto simples. <b>Baixar .md</b> salva o código (com as imagens em ZIP).',
        'The preview understands CommonMark with GitHub\'s tables, task lists, strikethrough, autolinks and footnotes, and math in <code>$…$</code> and <code>$$…$$</code>. HTML in the Markdown is shown without scripts, styles, frames and forms.':
            'A visualização entende CommonMark com as tabelas, listas de tarefas, tachado, links automáticos e notas de rodapé do GitHub, e fórmulas em <code>$…$</code> e <code>$$…$$</code>. HTML dentro do Markdown é exibido sem scripts, estilos, frames e formulários.',
        'Math: <code>$…$</code> around the selection': 'Fórmula: <code>$…$</code> em volta da seleção',
        'Lines in or out of a comment (<code>&lt;!-- --&gt;</code>)': 'Comentar ou descomentar linhas (<code>&lt;!-- --&gt;</code>)',
        '<kbd>Enter</kbd> in a list starts the next item (<code>-</code>, <code>1.</code>, <code>- [ ]</code>, <code>&gt;</code>); on an empty item it ends the list. <code>* _ ` ~ $ [ (</code> close by themselves around a selection.':
            '<kbd>Enter</kbd> em uma lista começa o próximo item (<code>-</code>, <code>1.</code>, <code>- [ ]</code>, <code>&gt;</code>); em um item vazio, encerra a lista. <code>* _ ` ~ $ [ (</code> se fecham sozinhos em volta de uma seleção.',
    },

    patterns: [
        /* ---------- Status lines ---------- */
        ['^(\\d+) lines · ([\\d.]+ K?B) · (\\d+) (?:word|words)$', (m, l, kb, w) => `${l} ${getPlural(l, 'linha', 'linhas')} · ${kb} · ${w} ${getPlural(w, 'palavra', 'palavras')}`],
        ['^\\.md and (\\d+) (?:picture|pictures)$', (m, k) => `.md e ${k} ${getPlural(k, 'imagem', 'imagens')}`],
        ['^([\\d,]+) bytes$', (m, b) => `${formatThousands(b)} bytes`],
        ['^\\d{1,3}(?:,\\d{3})+$', m => formatThousands(m)],

        /* Problems above the code */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'erro', 'erros')}`],
        ['^· (\\d+) (?:note|notes)$', (m, k) => `· ${k} ${getPlural(k, 'aviso', 'avisos')}`],
        ['^(\\d+) (?:note|notes)$', (m, k) => `${k} ${getPlural(k, 'aviso', 'avisos')}`],
        ['^Line (\\d+)$', 'Linha $1'],
        ['^The preview failed: (.*)$', 'A visualização falhou: $1'],
        ['^The preview stopped at an unexpected problem: (.*)$', 'A visualização parou em um problema inesperado: $1'],
        ['^Picture "(.+)" not found - drag the picture into the editor \\(or add it in the Pictures tab\\)$', 'Imagem "$1" não encontrada - arraste a imagem para o editor (ou adicione-a na aba Imagens)'],
        ['^The link to "(.+)" has no heading or anchor of that name$', 'O link para "$1" não tem título nem âncora com esse nome'],
        ['^This code block \\((.+)\\) is never closed - add a line with (.+) after the code$', 'Este bloco de código ($1) nunca é fechado - adicione uma linha com $2 depois do código'],
        ['^This table row has (\\d+) (?:cell|cells), the header has (\\d+)$', (m, k, h) => `Esta linha da tabela tem ${k} ${getPlural(k, 'célula', 'células')}, o cabeçalho tem ${h}`],
        ['^Math: (.*)$', 'Fórmula: $1'],

        /* ---------- Pictures tab ---------- */
        ['^(\\d+) (?:picture|pictures) · (.+)$', (m, k, s) => `${k} ${getPlural(k, 'imagem', 'imagens')} · ${s}`],
        ['^Choose the file for (.+)$', 'Escolher o arquivo para $1'],
        ['^Insert !\\[…\\]\\((.+)\\) at the cursor$', 'Inserir ![…]($1) no cursor'],
        ['^used (\\d+)×$', 'usada $1×'],
        ['^(.* · )?not used yet$', (m, a) => `${a || ''}ainda não usada`],

        /* ---------- Top bar and My documents ---------- */
        ['^"(.+)" is open\\. My documents: open, rename, duplicate or delete your documents \\(Ctrl\\+O\\)$', '"$1" está aberto. Meus documentos: abra, renomeie, duplique ou exclua seus documentos (Ctrl+O)'],
        ['^Start "(.+)" over\\?$', 'Recomeçar "$1"?'],
        ['^Start "(.+)" over$', 'Recomeçar "$1"'],
        ['^(\\d+) (?:document|documents) · (.+) in this browser$', (m, k, s) => `${k} ${getPlural(k, 'documento', 'documentos')} · ${formatSize(s)} neste navegador`],
        ['^No document named "(.*)"\\.$', 'Nenhum documento chamado "$1".'],
        ['^Open now · (.+)$', (m, s) => `Aberto agora · ${formatSize(s)}`],
        ['^(just now|yesterday|\\d+ min ago|\\d+ h ago|[A-Z][a-z]{2} \\d{1,2}, \\d{4}) · (.+)$', (m, w, s) => `${formatTime(w)} · ${formatSize(s)}`],
        ['^(.+) \\(open now\\)$', '$1 (aberto agora)'],
        ['^ZIP with (\\d+) (?:document|documents) downloaded$', (m, k) => `ZIP com ${k} ${getPlural(k, 'documento', 'documentos')} baixado`],

        /* ---------- AI Assistant ---------- */
        ['^Part (\\d+) of (\\d+) received$', 'Parte $1 de $2 recebida'],
        ['^Open the other (?:link|links) from the AI too \\(still missing: part (.+)\\)\\.$',
            'Abra também os outros links da IA (ainda falta: parte $1).'],
        ['^Part (\\d+) of (\\d+) received - paste the other (?:link|links) too \\(missing: (.+)\\)$', 'Parte $1 de $2 recebida - cole também os outros links (falta: $3)'],
        ['^The AI sends the document to (.+) with a key that only works for this session\\. What you paste into your AI is handled by its provider\\.$',
            'A IA envia o documento para $1 com uma chave que só vale para esta sessão. O que você cola na sua IA é tratado pelo provedor dela.'],
        ['^The AI sends its result to (.+) by itself, and it opens here\\. If it answers with a link, paste its answer below\\.$',
            'A IA envia o resultado sozinha para $1, e ele abre aqui. Se ela responder com um link, cole a resposta abaixo.'],
        ['^No key from (.+) - the prompt asks the AI for a link instead$', 'Nenhuma chave de $1 - o prompt pede um link à IA em vez disso'],
        ['^Prompt copied - the AI sends its result to (.+)$', 'Prompt copiado - a IA envia o resultado para $1'],

        /* ---------- Messages with names ---------- */
        ['^"(.+)" is now "(.+)"$', '"$1" agora se chama "$2"'],
        ['^Remove "(.+)"\\?$', 'Remover "$1"?'],
        ['^"(.+)" now shows the new picture$', '"$1" agora mostra a nova imagem'],
        ['^Picture "(.+)" added to "(.+)"$', 'Imagem "$1" adicionada a "$2"'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '"$1" está vazio agora - "Desfazer" traz de volta'],
        ['^"(.+)" opened$', '"$1" aberto'],
        ['^New document "(.+)" - your other documents are under "My documents"$', 'Novo documento "$1" - seus outros documentos estão em "Meus documentos"'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$', 'Novo documento "$1" da IA - seus outros documentos não mudaram'],
        ['^"(.+)" is not a Markdown file$', '"$1" não é um arquivo Markdown'],
        ['^Opened "(.+)" - it is now in "My documents"$', '"$1" aberto - agora ele está em "Meus documentos"'],
        ['^Opened "(.+)" with (\\d+) (?:picture|pictures)$', (m, f, k) => `"${f}" aberto com ${k} ${getPlural(k, 'imagem', 'imagens')}`],
        ['^"(.+)" could not be opened: (.*)$', (m, f, why) => `Não foi possível abrir "${f}": ${ZIP[why] || why}`],
        ['^Document received - the preview found (\\d+) (?:problem|problems), see above the code$', (m, k) => `Documento recebido - a visualização encontrou ${k} ${getPlural(k, 'problema', 'problemas')}, veja acima do código`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '"$1" alterado pela IA - "Desfazer" volta atrás'],
        ['^"(.+)" duplicated$', '"$1" duplicado'],
        ['^Delete "(.+)"\\?$', 'Excluir "$1"?'],
        ['^"(.+)" deleted$', '"$1" excluído'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Abrir $1'],
    ],
};
