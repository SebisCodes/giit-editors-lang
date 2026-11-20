/* Brazilian Portuguese texts of the HTML editor: the bar, the work area (code, preview,
   document settings, insert, files, outline), its dialogs and messages,
   and the problems the editor finds in the code. What all editors share is
   in common.js; how the dictionaries are used is described in
   i18n.js. Names of documents, files, elements and attributes stay as they
   are: the patterns copy them into the Portuguese text. */

import { formatTime, formatSize, formatThousands, getPlural } from './format.js';

/* "1,234" -> "1.234" (Brazilian thousands separator) */

/* "1,234 bytes" -> "1.234 bytes" */

/* When a document was last changed (files.js): "just now", "5 min ago", "Oct 25, 2026" … */

/* Reasons a ZIP could not be opened (app.js openZip) */
const ZIP = { 'it is not a ZIP file': 'não é um arquivo ZIP', 'there is no .html file in it': 'não há nenhum arquivo .html dentro' };

export default {
    text: {
        // Editing in place: Enter and Shift+Enter
        "Editing in the preview - Enter: new paragraph, Shift+Enter: new line, Ctrl+Enter or a click elsewhere keeps it, Escape cancels": "Editando na visualização - Enter: novo parágrafo, Shift+Enter: nova linha, Ctrl+Enter ou um clique em outro lugar aplica, Escape cancela",
        // Labels that are the same in English and German
        'Code': 'Código',
        'Export': 'Exportar',
        'Format': 'Formato',
        'Name': 'Nome',

        /* ---------- Top bar ---------- */
        'HTML Editor - home': 'Editor HTML - início',
        'HTML Editor': 'Editor HTML',
        'File': 'Arquivo',
        'My documents (Ctrl+O)': 'Meus documentos (Ctrl+O)',
        'My documents': 'Meus documentos',
        'New document, or start this one over': 'Novo documento, ou recomeçar este',
        'New': 'Novo',
        'New blank page': 'Nova página em branco',
        'An empty HTML page - your other documents stay as they are': 'Uma página HTML vazia - seus outros documentos continuam como estão',
        'Landing page': 'Página de destino',
        'A big header, three features and a footer': 'Um cabeçalho grande, três destaques e um rodapé',
        'Article': 'Artigo',
        'Title, sections, a quote and a list': 'Título, seções, uma citação e uma lista',
        'Contact form': 'Formulário de contato',
        'Name, email and message with labels': 'Nome, e-mail e mensagem com rótulos',
        'Email newsletter': 'Boletim por e-mail',
        'An email layout with a table': 'Um layout de e-mail com tabela',
        'The welcome example': 'O exemplo de boas-vindas',
        'Shows what the editor can do': 'Mostra o que o editor sabe fazer',
        'Start this document over': 'Recomeçar este documento',
        'Keeps the head, empties the body - "Undo" brings it back': 'Mantém o head, esvazia o body - "Desfazer" traz de volta',
        'Open an .html file (or a picture, stylesheet or ZIP) from your computer (you can also drag it into the window)':
            'Abrir um arquivo .html (ou uma imagem, folha de estilo ou ZIP) do seu computador (você também pode arrastá-lo para a janela)',
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
        'Save the page as an .html file - with its files as ZIP (Ctrl+S)': 'Salvar a página como arquivo .html - com seus arquivos em ZIP (Ctrl+S)',
        'Download .html': 'Baixar .html',
        'HTML, one file with everything inside, ZIP, PDF and text (Ctrl+E)': 'HTML, um arquivo com tudo dentro, ZIP, PDF e texto (Ctrl+E)',
        'Export…': 'Exportar…',

        /* ---------- Views and work area ---------- */
        'View': 'Exibir',
        'Edit': 'Editar',
        'Side panel': 'Painel lateral',
        'Preview': 'Visualização',
        'Document': 'Documento',
        'HTML code': 'Código HTML',
        'Copy the HTML code to the clipboard': 'Copiar o código HTML para a área de transferência',
        'Copy code': 'Copiar código',
        'Copy': 'Copiar',
        'Indent every line by the depth of its elements': 'Indentar cada linha pela profundidade dos seus elementos',
        'Tidy up': 'Organizar',
        'Drag to change the width of the code area': 'Arraste para mudar a largura da área de código',
        'Drag to change the width': 'Arraste para mudar a largura',
        'Formatting': 'Formatação',
        'Bold (Ctrl+B)': 'Negrito (Ctrl+B)',
        'Bold': 'Negrito',
        'Italic (Ctrl+I)': 'Itálico (Ctrl+I)',
        'Italic': 'Itálico',
        'Underline (Ctrl+U)': 'Sublinhado (Ctrl+U)',
        'Underline': 'Sublinhado',
        'Heading': 'Título',
        'Bulleted list': 'Lista com marcadores',
        'Numbered list': 'Lista numerada',
        'Table': 'Tabela',
        'Picture': 'Imagem',
        'Width of the preview': 'Largura da visualização',
        'As wide as the preview': 'Tão larga quanto a visualização',
        'Full width': 'Largura total',
        'Tablet (768 pixels wide)': 'Tablet (768 pixels de largura)',
        'Tablet width': 'Largura de tablet',
        'Phone (390 pixels wide)': 'Celular (390 pixels de largura)',
        'Phone width': 'Largura de celular',
        'Preview of the page: click text to edit it, or anything else to jump to its place in the code':
            'Visualização da página: clique em um texto para editá-lo, ou em qualquer outra coisa para ir ao lugar dela no código',
        'Preview of the page': 'Visualização da página',
        'Updating…': 'Atualizando…',
        'Title, language, description and the stylesheets of the page': 'Título, idioma, descrição e folhas de estilo da página',
        'Ready-made pieces: structure, text, lists, media, forms, head': 'Peças prontas: estrutura, texto, listas, mídia, formulários, head',
        'Insert': 'Inserir',
        'The pictures and other files of this document': 'As imagens e outros arquivos deste documento',
        'Files': 'Arquivos',
        'The headings of the page': 'Os títulos da página',
        'Outline': 'Tópicos',
        'The headings of the page. Click one to go there in the code and in the preview.':
            'Os títulos da página. Clique em um para ir até ele no código e na visualização.',
        'No headings yet - add one with <h1> … <h6>.': 'Ainda não há títulos - adicione um com <h1> … <h6>.',
        'Open it here': 'Abrir aqui',
        'Drop the .html file, picture or stylesheet here': 'Solte o arquivo .html, a imagem ou a folha de estilo aqui',

        /* Problems above the code */
        'Hide': 'Ocultar',
        'Show': 'Mostrar',

        /* ---------- Insert tab ---------- */
        'Structure': 'Estrutura',
        'Heading 1': 'Título 1',
        'Heading 2': 'Título 2',
        'Heading 3': 'Título 3',
        'Heading 4': 'Título 4',
        'Paragraph': 'Parágrafo',
        'Section': 'Seção',
        'Header': 'Cabeçalho',
        'Navigation bar': 'Navegação',
        'Main content': 'Principal',
        'Footer': 'Rodapé',
        'Box': 'Caixa',
        'Fold-out (details)': 'Expansível (details)',
        'Dividing line': 'Linha divisória',
        'Apply page breaks': 'Aplicar quebras de página',
        'New page': 'Nova página',
        'Line break': 'Quebra de linha',
        'Comment': 'Comentário',
        'Lists and tables': 'Listas e tabelas',
        '• Bulleted list': '• Marcadores',
        '1. Numbered list': '1. Lista numerada',
        'Description list': 'Lista de descrição',
        'Highlighted': 'Destacado',
        'Small print': 'Letra miúda',
        'Code in the text': 'Código no texto',
        'x² Superscript': 'x² Sobrescrito',
        'x₁ Subscript': 'x₁ Subscrito',
        'Quote': 'Citação em bloco',
        'Program code': 'Código-fonte',
        'Inline part (span)': 'Trecho (span)',
        'Media': 'Mídia',
        'Figure with caption': 'Figura legendada',
        'Video player': 'Reprodutor de vídeo',
        'Audio player': 'Reprodutor de áudio',
        'The files of the page have their own tab:': 'Os arquivos da página têm uma aba própria:',
        'Forms': 'Formulários',
        'Form': 'Formulário',
        'Text field': 'Campo de texto',
        'Email field': 'Campo de e-mail',
        'Text area': 'Área de texto',
        'Choice list': 'Lista de opções',
        'Tick box': 'Caixa de seleção',
        'Radio buttons': 'Botões de opção',
        'Button': 'Botão',
        'Head': 'Head',
        'Character set': 'Codificação',
        'The character set: <meta charset="utf-8">': 'O conjunto de caracteres: <meta charset="utf-8">',
        'Fits phone screens: <meta name="viewport">': 'Adapta-se a telas de celular: <meta name="viewport">',
        'Description': 'Descrição',
        'For search engines: <meta name="description">': 'Para mecanismos de busca: <meta name="description">',
        'Shared links': 'Links compartilhados',
        'Title, description and picture for shared links (Open Graph)': 'Título, descrição e imagem para links compartilhados (Open Graph)',
        'Stylesheet file': 'Arquivo CSS',
        'A stylesheet file: <link rel="stylesheet">': 'Um arquivo de folha de estilo: <link rel="stylesheet">',
        'Style block': 'Bloco de estilo',
        'CSS in the page: <style> … </style>': 'CSS na página: <style> … </style>',
        'Tab icon': 'Ícone da aba',
        'The icon in the browser tab: <link rel="icon">': 'O ícone na aba do navegador: <link rel="icon">',
        'Special characters': 'Caracteres especiais',
        'Insert &nbsp; (no-break space)': 'Inserir &nbsp; (espaço não separável)',
        'Insert &shy; (soft hyphen)': 'Inserir &shy; (hífen opcional)',

        /* ---------- Files tab ---------- */
        'Add files…': 'Adicionar arquivos…',
        'No files yet': 'Ainda não há arquivos',
        'Missing in this document': 'Faltando neste documento',
        'Add file…': 'Adicionar arquivo…',
        'Show where it is used': 'Mostrar onde é usada',
        'A picture (img) at the cursor': 'Uma imagem (img) no cursor',
        'A link to the stylesheet in the head': 'Um link para a folha de estilo no head',
        'A reference to the file at the cursor': 'Uma referência ao arquivo no cursor',
        'A figure with caption at the cursor': 'Uma figura com legenda no cursor',
        'As figure': 'Como figura',
        'Rename - the code is changed along': 'Renomear - o código é alterado junto',
        'Rename': 'Renomear',
        'Choose another file, keep the name': 'Escolher outro arquivo, manter o nome',
        'Replace': 'Substituir',
        'Download the file': 'Baixar o arquivo',
        'Download': 'Baixar',
        'Remove the file from this document': 'Remover o arquivo deste documento',
        'Remove': 'Remover',
        'New name': 'Novo nome',

        /* ---------- Document tab ---------- */
        'Title': 'Título',
        '(in the browser tab and in search results)': '(na aba do navegador e nos resultados de busca)',
        'Language': 'Idioma',
        '(for search engines)': '(para mecanismos de busca)',
        'Author': 'Autor',
        'Characters as UTF-8 (meta charset)': 'Caracteres como UTF-8 (meta charset)',
        'Fits phone screens (meta viewport)': 'Adapta-se a telas de celular (meta viewport)',
        'Linked stylesheets': 'Folhas de estilo vinculadas',
        'No stylesheet is linked.': 'Nenhuma folha de estilo está vinculada.',
        'Add a .css file in the Files tab to link it here.': 'Adicione um arquivo .css na aba Arquivos para vinculá-lo aqui.',
        'Stylesheet of this document': 'Folha de estilo deste documento',
        'Link it': 'Vincular',
        'from the web': 'da web',
        'a file of this document': 'um arquivo deste documento',
        'missing': 'faltando',
        'Show it in the code': 'Mostrar no código',
        'Not set': 'Não definido',
        'English (en)': 'Inglês (en)',
        'English, US (en-US)': 'Inglês, EUA (en-US)',
        'English, UK (en-GB)': 'Inglês, Reino Unido (en-GB)',
        'German (de)': 'Alemão (de)',
        'German, Switzerland (de-CH)': 'Alemão, Suíça (de-CH)',
        'German, Germany (de-DE)': 'Alemão, Alemanha (de-DE)',
        'French (fr)': 'Francês (fr)',
        'Italian (it)': 'Italiano (it)',
        'Spanish (es)': 'Espanhol (es)',
        'Portuguese (pt)': 'Português (pt)',
        'Dutch (nl)': 'Holandês (nl)',
        'elements · about': 'elementos · cerca de',
        'element · about': 'elemento · cerca de',
        'words ·': 'palavras ·',
        'headings ·': 'títulos ·',
        'heading ·': 'título ·',
        'files': 'arquivos',
        'file': 'arquivo',
        'Make it a complete page': 'Transformar em página completa',

        /* ---------- Export ---------- */
        'Close': 'Fechar',
        'File name': 'Nome do arquivo',
        'Page': 'Página',
        'HTML page (.html)': 'Página HTML (.html)',
        'One HTML file with its files inside': 'Um arquivo HTML com seus arquivos dentro',
        'HTML with its files (ZIP)': 'HTML com seus arquivos (ZIP)',
        'PDF (print or save as PDF)': 'PDF (imprimir ou salvar como PDF)',
        'Plain text': 'Texto simples',
        'Result': 'Resultado',
        'Download everything at once: .html, its files, the HTML with the files inside and the text':
            'Baixar tudo de uma vez: .html, seus arquivos, o HTML com os arquivos dentro e o texto',
        'All formats (ZIP)': 'Todos os formatos (ZIP)',
        'Print / Save as PDF': 'Imprimir / Salvar como PDF',
        '(The page with its files inside is created when you download or copy it.)':
            '(A página com seus arquivos dentro é criada quando você a baixa ou copia.)',

        /* ---------- My documents ---------- */
        'Search by name': 'Buscar por nome',
        'Search your documents': 'Buscar nos seus documentos',
        'Open an .html file from your computer as a new document': 'Abrir um arquivo .html do seu computador como novo documento',
        'New document': 'Novo documento',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Clique em um documento para abri-lo. Eles ficam guardados só neste navegador - nada é enviado. Limpar os dados do site no navegador os apaga, então baixe os que você quer manter.',
        'Download every document as an .html file (with its files) in one ZIP': 'Baixar todos os documentos como arquivos .html (com seus arquivos) em um ZIP',
        'Download all (ZIP)': 'Baixar tudo (ZIP)',
        'Duplicate': 'Duplicar',
        'Download as .html': 'Baixar como .html',
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
        'The document is now in the HTML Editor tab you already had open. Switch to that tab, or open it here.':
            'O documento agora está na aba do Editor HTML que você já tinha aberta. Mude para aquela aba ou abra aqui.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)': 'Não é permitido copiar aqui - está selecionado abaixo: pressione Ctrl+C (⌘C)',
        'Paste it into your AI and say what it should write.': 'Cole na sua IA e diga o que ela deve escrever.',
        'Prompt copied - paste it into your AI and say what it should write': 'Prompt copiado - cole na sua IA e diga o que ela deve escrever',
        'This link is incomplete or damaged - please ask the AI to send it again': 'Este link está incompleto ou danificado - peça à IA para enviá-lo de novo',

        /* ---------- Save to your server ---------- */
        'Save to your server': 'Salvar no seu servidor',
        'Webhook address': 'Endereço do webhook',
        'https://example.com/api/html': 'https://example.com/api/html',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(opcional, enviado como "Authorization: Bearer …"; guardado até fechar esta aba)',
        'Send automatically a few seconds after each change (otherwise only when you click': 'Enviar automaticamente alguns segundos após cada alteração (senão só quando você clicar em',
        'or press Ctrl+S)': 'ou pressionar Ctrl+S)',
        'Only for “': 'Só para "',
        '” (other documents use the general address)': '" (os outros documentos usam o endereço geral)',
        'What your server receives': 'O que o seu servidor recebe',
        'A POST request with JSON (your server must allow CORS from https://html.giit.ch):': 'Uma requisição POST com JSON (seu servidor precisa permitir CORS de https://html.giit.ch):',
        'Embed the editor in your website': 'Incorporar o editor no seu site',
        'Send now': 'Enviar agora',
        'Save setting': 'Salvar configuração',

        /* ---------- Help ---------- */
        'How it works': 'Como funciona',
        'Keyboard shortcuts': 'Atalhos de teclado',
        'Bold / italic / underline the selected text': 'Negrito / itálico / sublinhado no texto selecionado',
        'Show the cursor\'s place in the preview': 'Mostrar a posição do cursor na visualização',
        'Indent / outdent': 'Aumentar / diminuir recuo',
        'Undo / redo': 'Desfazer / refazer',
        'Save (download .html, or to your server) / export': 'Salvar (baixar .html, ou no seu servidor) / exportar',
        'Print / save as PDF': 'Imprimir / salvar como PDF',

        /* ---------- Messages ---------- */
        'The browser storage is full - download and delete documents under "My documents"': 'O armazenamento do navegador está cheio - baixe e exclua documentos em "Meus documentos"',
        'The browser storage is full - delete or download documents under "My documents" first': 'O armazenamento do navegador está cheio - exclua ou baixe documentos em "Meus documentos" primeiro',
        'The browser storage is full - delete or download some documents first': 'O armazenamento do navegador está cheio - exclua ou baixe alguns documentos primeiro',
        'The browser storage is full': 'O armazenamento do navegador está cheio',
        'Nothing to undo': 'Nada para desfazer',
        'Nothing to redo': 'Nada para refazer',
        'The code changed meanwhile - the edit was not used': 'O código mudou nesse meio-tempo - a edição não foi usada',
        'The code changed meanwhile - the picture was not moved': 'O código mudou nesse meio-tempo - a imagem não foi movida',
        'The file is removed from this document. Places that use it show nothing. "Undo" does not bring it back.':
            'O arquivo foi removido deste documento. Os lugares que o usam não mostram nada. "Desfazer" não o traz de volta.',
        'A document can keep pictures, stylesheets, scripts, fonts, PDFs, audio and video': 'Um documento pode guardar imagens, folhas de estilo, scripts, fontes, PDFs, áudio e vídeo',
        'The file is larger than 12 MB': 'O arquivo tem mais de 12 MB',
        'The file could not be read': 'Não foi possível ler o arquivo',
        'The code is now a complete page': 'O código agora é uma página completa',
        'The code is tidy already': 'O código já está organizado',
        'Code tidied up': 'Código organizado',
        'This document is empty already': 'Este documento já está vazio',
        'Everything between <body> and </body> is removed; the head (title, styles, meta tags) stays. "Undo" brings it back as long as the page is open.':
            'Tudo entre <body> e </body> é removido; o head (título, estilos, meta tags) fica. "Desfazer" traz de volta enquanto a página estiver aberta.',
        'Everything is removed. "Undo" brings it back as long as the page is open.': 'Tudo é removido. "Desfazer" traz de volta enquanto a página estiver aberta.',
        'Start over': 'Recomeçar',
        'The file is larger than 8 MB': 'O arquivo tem mais de 8 MB',
        'HTML pasted from the clipboard - "Undo" brings the old code back': 'HTML colado da área de transferência - "Desfazer" traz o código antigo de volta',
        'This browser does not allow printing here': 'Este navegador não permite imprimir aqui',
        'Downloaded': 'Baixado',
        'ZIP downloaded: .html, its files, the page as one file and the text': 'ZIP baixado: .html, seus arquivos, a página como um arquivo e o texto',
        'Copied to the clipboard': 'Copiado para a área de transferência',
        'This browser does not allow copying this': 'Este navegador não permite copiar isso',
        'Code copied': 'Código copiado',
        '.html with its files downloaded (ZIP)': '.html com seus arquivos baixado (ZIP)',
        '.html downloaded': '.html baixado',
        'Add': 'Adicionar',
        'The document and its files are removed from this browser for good. Download it first if you want to keep a copy.':
            'O documento e seus arquivos são removidos deste navegador para sempre. Baixe-o antes se quiser manter uma cópia.',

        /* ---------- Problems the editor finds (html.js) ---------- */
        'The comment <!-- is never closed - add -->': 'O comentário <!-- nunca é fechado - adicione -->',
        '<img> without alt - describe the picture (alt="…"), or alt="" if it only decorates': '<img> sem alt - descreva a imagem (alt="…"), ou alt="" se ela só decora',
        'No <!DOCTYPE html> at the top - browsers show the page in an older mode (quirks mode)': 'Falta <!DOCTYPE html> no topo - os navegadores mostram a página em um modo antigo (quirks mode)',
    },

    html: {

        '<b>Export</b> also has <b>Open in another editor</b>: it converts the document and opens it as a new document there. Anything the other format cannot hold is listed first.':

            '<b>Exportar</b> também oferece <b>Abrir em outro editor</b>: o documento é convertido e aberto lá como novo documento. O que o outro formato não comporta é listado antes.',

        '<b>Insert</b> &gt; <b>New page</b> sets a page break for printing and PDF; the preview shows it as a dashed line. Headings stay with their text and tables and pictures are not cut. In Export, <b>Apply page breaks</b> turns them off for a PDF.':

            '<b>Inserir</b> &gt; <b>Nova página</b> define uma quebra de página para impressão e PDF; a visualização a mostra como linha tracejada. Títulos ficam com o texto, tabelas e imagens não são cortadas. Em <b>Exportar</b>, <b>Aplicar quebras de página</b> as desativa para um PDF.',
        /* Export */
        'The print dialog opens with the page as it is in the preview (without scripts). Choose <b>Save as PDF</b> (or "Microsoft Print to PDF") as the printer. In Chrome and Edge, untick "Headers and footers" and tick "Background graphics" if the page has colors. The text in the PDF can be selected.':
            'A janela de impressão abre com a página como está na visualização (sem scripts). Escolha <b>Salvar como PDF</b> (ou "Microsoft Print to PDF") como impressora. No Chrome e no Edge, desmarque "Cabeçalhos e rodapés" e marque "Gráficos de fundo" se a página tiver cores. O texto do PDF pode ser selecionado.',

        /* Document tab without a head */
        'This code has no <code>&lt;html&gt;</code> with a <code>&lt;head&gt;</code>, so it is shown as a part of a page. Title, language and description belong in the head.':
            'Este código não tem <code>&lt;html&gt;</code> com um <code>&lt;head&gt;</code>, então é exibido como parte de uma página. Título, idioma e descrição ficam no head.',

        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Clique em <b>Copiar prompt</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'A IA responde com um link: clique nele, ou cole a resposta inteira abaixo. <b>Desfazer</b> volta atrás.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'A IA responde com um link: <b>cole a resposta inteira abaixo</b> (um link clicado abre um editor separado). <b>Desfazer</b> volta atrás.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'O editor pode enviar cada versão salva para o seu próprio servidor (um <b>webhook</b>), para que o seu trabalho fique onde você quiser. Nada é enviado até você informar um endereço aqui.',
        'Also possible: <code>?src=&lt;URL of an .html file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>htmleditor:ai</code>, <code>htmleditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Também é possível: <code>?src=&lt;URL of an .html file&gt;</code> abre um arquivo, <code>&amp;webhook=&lt;URL&gt;</code> salva este documento lá. O editor também pode abrir em uma janela própria (<code>?embed=window</code>), e a sua página pode entregar a ele o próprio prompt de IA e uma chave de sessão para que a IA envie o resultado ao seu servidor (<code>htmleditor:ai</code>, <code>htmleditor:key-request</code>) - veja "Use o editor no seu próprio site" abaixo do editor. Os detalhes estão em <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> HTML on the left - or start with <b>New</b> and one of the templates. The preview shows the page as you type.':
            '<b>Escreva</b> HTML à esquerda - ou comece com <b>Novo</b> e um dos modelos. A visualização mostra a página enquanto você digita.',
        '<b>Click text in the preview</b> to edit it right there. Enter starts a new paragraph; Shift+Enter inserts a line break. Ctrl+Enter (Cmd+Enter on macOS) or a click elsewhere applies the edit; Escape cancels. Each edit is one step for Undo. A click on a picture or any other element jumps to its place in the code. The element at the code cursor gets a frame in the preview.':
            '<b>Clique em um texto na visualização</b> para editá-lo ali mesmo. Enter inicia um novo parágrafo; Shift+Enter insere uma quebra de linha. Ctrl+Enter (Cmd+Enter no macOS) ou um clique em outro lugar aplica a edição; Escape cancela. Cada edição pode ser desfeita em um único passo. Um clique em uma imagem ou em qualquer outro elemento leva ao lugar dele no código. O elemento no cursor do código ganha uma moldura na visualização.',
        '<b>Document</b> on the right sets title, language and description of the page; <b>Insert</b> has ready-made pieces (headings, lists, tables, media, form fields, meta tags); <b>Files</b> holds the pictures, stylesheets and fonts of the page; <b>Outline</b> lists the headings.':
            '<b>Documento</b> à direita define título, idioma e descrição da página; <b>Inserir</b> tem peças prontas (títulos, listas, tabelas, mídia, campos de formulário, meta tags); <b>Arquivos</b> guarda as imagens, folhas de estilo e fontes da página; <b>Tópicos</b> lista os títulos.',
        'Problems in the code (an unclosed <code>&lt;div&gt;</code>, a picture without <code>alt</code>, a missing file) are listed above the code - click one to go there.':
            'Problemas no código (um <code>&lt;div&gt;</code> não fechado, uma imagem sem <code>alt</code>, um arquivo faltando) aparecem acima do código - clique em um para ir até lá.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser.':
            '<b>Meus documentos</b> (o botão de pasta no canto superior esquerdo) lista todos os documentos guardados neste navegador.',
        '<b>Export</b> makes an HTML file, one HTML file with the files inside, a ZIP, a PDF (via the print dialog) or plain text. <b>Download .html</b> saves the code.':
            '<b>Exportar</b> cria um arquivo HTML, um arquivo HTML com os arquivos dentro, um ZIP, um PDF (pela janela de impressão) ou texto simples. <b>Baixar .html</b> salva o código.',
        'The preview shows HTML and CSS as the browser does, but scripts and <code>on…</code> attributes never run and links do not navigate - so any page is safe to open.':
            'A visualização mostra HTML e CSS como o navegador, mas scripts e atributos <code>on…</code> nunca rodam e os links não navegam - então qualquer página pode ser aberta com segurança.',
        'Comment lines in or out (<code>&lt;!-- --&gt;</code>)': 'Comentar ou descomentar linhas (<code>&lt;!-- --&gt;</code>)',
        'Typing <code>&gt;</code> at the end of a start tag adds its end tag, and <kbd>Enter</kbd> between the two indents the new line. Typing <code>&lt;/</code> closes the element that is open.':
            'Digitar <code>&gt;</code> no fim de uma tag de abertura adiciona a tag de fechamento, e <kbd>Enter</kbd> entre as duas indenta a nova linha. Digitar <code>&lt;/</code> fecha o elemento que está aberto.',
    },

    patterns: [
        /* ---------- Status lines ---------- */
        ['^(\\d+) lines · ([\\d.]+ K?B)$', (m, l, kb) => `${l} ${getPlural(l, 'linha', 'linhas')} · ${kb}`],
        ['^\\.html and (\\d+) (?:file|files)$', (m, k) => `.html e ${k} ${getPlural(k, 'arquivo', 'arquivos')}`],
        ['^([\\d,]+) bytes$', (m, b) => `${formatThousands(b)} bytes`],
        ['^\\d{1,3}(?:,\\d{3})+$', m => formatThousands(m)],

        /* Problems above the code */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'erro', 'erros')}`],
        ['^· (\\d+) (?:note|notes)$', (m, k) => `· ${k} ${getPlural(k, 'aviso', 'avisos')}`],
        ['^(\\d+) (?:note|notes)$', (m, k) => `${k} ${getPlural(k, 'aviso', 'avisos')}`],
        ['^Line (\\d+)$', 'Linha $1'],
        ['^The preview failed: (.*)$', 'A visualização falhou: $1'],
        ['^The tag <(\\S+) is never closed with >$', 'A tag <$1 nunca é fechada com >'],
        ['^<(\\S+)> is obsolete - use CSS or a current element instead$', '<$1> está obsoleto - use CSS ou um elemento atual'],
        ['^Unknown element <(\\S+)>$', 'Elemento desconhecido <$1>'],
        ['^The attribute (\\S+) is given twice in <(\\S+)> - the browser uses the first one$', 'O atributo $1 aparece duas vezes em <$2> - o navegador usa o primeiro'],
        ['^The id "(.*)" is used twice$', 'O id "$1" é usado duas vezes'],
        ['^<(\\S+)\\/> - in HTML only void elements \\(like <br>\\) close themselves; add <\\/(\\S+)>$', '<$1/> - em HTML só elementos vazios (como <br>) se fecham sozinhos; adicione </$2>'],
        ['^<(\\S+)> is never closed - add <\\/(\\S+)>$', '<$1> nunca é fechado - adicione </$2>'],
        ['^<\\/(\\S+)> - <(\\S+)> has no end tag$', '</$1> - <$2> não tem tag de fechamento'],
        ['^<\\/(\\S+)> without an opening <(\\S+)>$', '</$1> sem um <$2> de abertura'],
        ['^<(\\S+)> is not closed before <\\/(\\S+)> - add <\\/(\\S+)> first$', '<$1> não é fechado antes de </$2> - adicione </$3> primeiro'],
        ['^The file "(.+)" is missing - add it in the Files tab \\(or drop it into the editor\\)$', 'O arquivo "$1" está faltando - adicione-o na aba Arquivos (ou solte-o no editor)'],

        /* ---------- Insert tab ---------- */
        ['^Insert (&[#\\w]+;)$', 'Inserir $1'],

        /* ---------- Files tab ---------- */
        ['^(\\d+) (?:file|files) · (.+)$', (m, k, s) => `${k} ${getPlural(k, 'arquivo', 'arquivos')} · ${s}`],
        ['^Files belong to “(.*)” and stay in your browser\\. Drop or paste pictures, stylesheets or fonts anywhere in the editor, or add them here; the code uses them by their name, e\\.g\\.$',
            'Os arquivos pertencem a "$1" e ficam no seu navegador. Solte ou cole imagens, folhas de estilo ou fontes em qualquer lugar do editor, ou adicione aqui; o código os usa pelo nome, p. ex.'],
        ['^Choose the file for (.+)$', 'Escolher o arquivo para $1'],
        ['^Insert (.+) at the cursor$', 'Inserir $1 no cursor'],
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
        ['^"(.+)" now has the new content$', '"$1" agora tem o novo conteúdo'],
        ['^File "(.+)" added to "(.+)"$', 'Arquivo "$1" adicionado a "$2"'],
        ['^"(.+)" is linked already$', '"$1" já está vinculado'],
        ['^"(.+)" is linked$', '"$1" está vinculado'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '"$1" está vazio agora - "Desfazer" traz de volta'],
        ['^"(.+)" opened$', '"$1" aberto'],
        ['^New document "(.+)" - your other documents are under "My documents"$', 'Novo documento "$1" - seus outros documentos estão em "Meus documentos"'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$', 'Novo documento "$1" da IA - seus outros documentos não mudaram'],
        ['^Opened "(.+)" - it is now in "My documents"$', '"$1" aberto - agora ele está em "Meus documentos"'],
        ['^Opened "(.+)" with (\\d+) (?:file|files)$', (m, f, k) => `"${f}" aberto com ${k} ${getPlural(k, 'arquivo', 'arquivos')}`],
        ['^"(.+)" could not be opened: (.*)$', (m, f, why) => `Não foi possível abrir "${f}": ${ZIP[why] || why}`],
        ['^Document received - the editor found (\\d+) (?:problem|problems), see above the code$', (m, k) => `Documento recebido - o editor encontrou ${k} ${getPlural(k, 'problema', 'problemas')}, veja acima do código`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '"$1" alterado pela IA - "Desfazer" volta atrás'],
        ['^"(.+)" duplicated$', '"$1" duplicado'],
        ['^Delete "(.+)"\\?$', 'Excluir "$1"?'],
        ['^"(.+)" deleted$', '"$1" excluído'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Abrir $1'],
    ],
};
