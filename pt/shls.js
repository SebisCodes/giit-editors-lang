/* Brazilian Portuguese texts of the SHLS editor: the bar, the work area (code, records,
   record, insert, convert, outline), its dialogs and messages, and the
   problems found in the code. What all editors share is in
   common.js; how the dictionaries are used is described in
   i18n.js. Names of documents, sections, keys and values stay as they are:
   the patterns copy them into the Portuguese text. */

import { formatTime, formatSize, formatThousands, getPlural } from './format.js';

/* "1,234" -> "1.234" (Brazilian thousands separator) */

/* "1,234 bytes" -> "1.234 bytes" */

/* When a document was last changed (files.js): "just now", "5 min ago", "Oct 25, 2026" … */

/**
 * Translates the text the pattern found (recs in the English pattern).
 * @param {string} k - the English text the pattern found.
 * @returns {string} the text in the language.
 */
const translateRecords = k => getPlural(k, 'registro', 'registros');

export default {
    text: {
        /* ---------- Template placeholders (?template=): views of the records, box, side panel ---------- */
        'Show or hide the side panel': 'Mostrar ou ocultar o painel lateral',
        'Examples': 'Exemplos',
        'Template': 'Modelo',
        'The template with its placeholders as written': 'O modelo com seus marcadores como foram escritos',
        'Placeholders': 'Marcadores',
        'The placeholders of the template - a click on one puts its tag at the cursor': 'Os marcadores do modelo - clique em um para inserir sua tag no cursor',
        'Shown': 'Exibido',
        'Hidden': 'Oculto',
        'This part shows an example - change it in the template view or in the code': 'Esta parte mostra um exemplo - altere-a na vista do modelo ou no código',
        'View of the records': 'Vista dos registros',
        'The records filled with the examples': 'Os registros preenchidos com os exemplos',
        'The examples could not be filled in - the records show the template': 'Não foi possível inserir os exemplos - os registros mostram o modelo',
        "Read back from SHLS, the data is not the same (for example records whose keys are in another order than in the first record) - check the result.": "Lidos de volta do SHLS, os dados não são os mesmos (por exemplo, registros com as chaves em outra ordem que no primeiro registro) - verifique o resultado.",
        // Labels that are the same in English and German
        'Code': 'Código',
        'Export': 'Exportar',
        'Format': 'Formato',
        'Name': 'Nome',

        /* ---------- Top bar ---------- */
        'SHLS Editor - home': 'Editor SHLS - início',
        'SHLS Editor': 'Editor SHLS',
        'File': 'Arquivo',
        'My documents (Ctrl+O)': 'Meus documentos (Ctrl+O)',
        'My documents': 'Meus documentos',
        'New document, or start this one over': 'Novo documento, ou recomeçar este',
        'New': 'Novo',
        'New blank document': 'Novo documento em branco',
        'An empty document - your other documents stay as they are': 'Um documento vazio - seus outros documentos continuam como estão',
        'Empty section': 'Seção vazia',
        'One section with two keys and one record to fill in': 'Uma seção com duas chaves e um registro para preencher',
        'Products and companies': 'Produtos e empresas',
        'The first README example: records right after each key block': 'O primeiro exemplo do README: registros logo depois de cada bloco de chaves',
        'Key blocks first': 'Blocos de chaves primeiro',
        'The second README example: the records follow under the section name again': 'O segundo exemplo do README: os registros vêm de novo sob o nome da seção',
        'Companies, departments and employees, nested three levels': 'Empresas, departamentos e funcionários, aninhados em três níveis',
        'The same data with the key blocks first and fewer blank lines': 'Os mesmos dados com os blocos de chaves primeiro e menos linhas em branco',
        'Start this document over': 'Recomeçar este documento',
        'Empties the document - "Undo" brings it back': 'Esvazia o documento - "Desfazer" traz de volta',
        'Open an SHLS file from your computer (JSON, YAML, CSV and JSON Lines files are converted; you can also drag a file into the window)':
            'Abrir um arquivo SHLS do seu computador (arquivos JSON, YAML, CSV e JSON Lines são convertidos; você também pode arrastar um arquivo para a janela)',
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
        'Save the document as a .shls file (Ctrl+S)': 'Salvar o documento como arquivo .shls (Ctrl+S)',
        'Download .shls': 'Baixar .shls',
        'JSON, YAML, CSV and more (Ctrl+E)': 'JSON, YAML, CSV e mais (Ctrl+E)',
        'Export…': 'Exportar…',

        /* ---------- Views and work area ---------- */
        'View': 'Exibir',
        'Edit': 'Editar',
        'Selection': 'Seleção',
        'Records': 'Registros',
        'Record': 'Registro',
        'SHLS code': 'Código SHLS',
        'Copy the code to the clipboard': 'Copiar o código para a área de transferência',
        'Copy code': 'Copiar código',
        'Copy': 'Copiar',
        'Lay the document out as the reference SHLSEncoder does: all key blocks first, then the records': 'Organizar o documento como o SHLSEncoder de referência faz: primeiro todos os blocos de chaves, depois os registros',
        'Tidy up': 'Organizar',
        'Drag to change the width of the code area': 'Arraste para mudar a largura da área de código',
        'Drag to change the width': 'Arraste para mudar a largura',
        'Unfold everything': 'Expandir tudo',
        'Fold the key blocks and records': 'Recolher os blocos de chaves e os registros',
        'Add: a record after the selected record (or at the end of the section), a key after the selected key': 'Adicionar: um registro depois do registro selecionado (ou no fim da seção), uma chave depois da chave selecionada',
        'Add': 'Adicionar',
        'Duplicate the selected record or key': 'Duplicar o registro ou a chave selecionada',
        'Duplicate': 'Duplicar',
        'Move the selected record or key up (Alt+Up)': 'Mover o registro ou a chave selecionada para cima (Alt+Up)',
        'Move up': 'Mover para cima',
        'Move the selected record or key down (Alt+Down)': 'Mover o registro ou a chave selecionada para baixo (Alt+Down)',
        'Move down': 'Mover para baixo',
        'Remove the selected record, key or section (Delete)': 'Remover o registro, a chave ou a seção selecionada (Delete)',
        'Remove': 'Remover',
        'Search keys and values': 'Buscar chaves e valores',
        'Previous match (Shift+Enter)': 'Resultado anterior (Shift+Enter)',
        'Previous match': 'Resultado anterior',
        'Next match (Enter)': 'Próximo resultado (Enter)',
        'Next match': 'Próximo resultado',
        'Copy the path of the selection': 'Copiar o caminho da seleção',
        'Copy path': 'Copiar caminho',
        'Nothing selected': 'Nada selecionado',
        'Side panel': 'Painel lateral',
        'The selected record, value or key': 'O registro, valor ou chave selecionados',
        'New records, keys and sections, and pieces of code': 'Novos registros, chaves e seções, e trechos de código',
        'Insert': 'Inserir',
        'Tokens, and the document in other formats': 'Tokens, e o documento em outros formatos',
        'Convert': 'Converter',
        'The sections of the document': 'As seções do documento',
        'Outline': 'Tópicos',
        'Open it here': 'Abrir aqui',
        'Drop the file here': 'Solte o arquivo aqui',
        'Hide': 'Ocultar',
        'Show': 'Mostrar',

        /* ---------- Records view ---------- */
        'Keys': 'Chaves',
        'the template of each record': 'o modelo de cada registro',
        'Click to rename the section': 'Clique para renomear a seção',
        'Click to rename the key - only the key block changes': 'Clique para renomear a chave - só o bloco de chaves muda',
        'Click to change the value': 'Clique para alterar o valor',
        'Value': 'Valor',
        'Key': 'Tecla',
        'Section name': 'Nome da seção',
        'The code cannot be read - see the problem above the code.': 'Não é possível ler o código - veja o problema acima do código.',
        'No sections yet - write a section name, its keys (indented) and, after one blank line, the records. Or choose a template under "New".':
            'Ainda não há seções - escreva um nome de seção, suas chaves (indentadas) e, depois de uma linha em branco, os registros. Ou escolha um modelo em "Novo".',

        /* ---------- Record tab ---------- */
        'Click a section, a key or a record in the middle.': 'Clique em uma seção, chave ou registro no meio.',
        'The document has no sections yet.': 'O documento ainda não tem seções.',
        'The document has no sections yet': 'O documento ainda não tem seções',
        'Path': 'Caminho',
        'Section': 'Seção',
        'Add a record': 'Adicionar registro',
        'Add a key': 'Adicionar chave',
        'Remove the section': 'Remover a seção',
        'Add a key after it': 'Adicionar uma chave depois',
        'Add a record after it': 'Adicionar um registro depois',
        'Renaming a key changes only the key block. Adding, moving or removing a key changes every record of the section.':
            'Renomear uma chave muda só o bloco de chaves. Adicionar, mover ou remover uma chave muda todos os registros da seção.',
        'Apply': 'Aplicar',

        /* ---------- Insert tab ---------- */
        'Add to the selection': 'Adicionar à seleção',
        'A record after the selected record (or at the end of the section), a key after the selected key - every record gets a value "-" for it. One step for Undo.':
            'Um registro depois do registro selecionado (ou no fim da seção), uma chave depois da chave selecionada - cada registro recebe um valor "-" para ela. Um passo para Desfazer.',
        'A new record with "-" for each value': 'Um novo registro com "-" em cada valor',
        'A new key in the key block; every record gets "-"': 'Uma nova chave no bloco de chaves; cada registro recebe "-"',
        'A copy of the selected record or key': 'Uma cópia do registro ou da chave selecionada',
        'A new section at the end, with two keys and one record': 'Uma nova seção no final, com duas chaves e um registro',
        'At the cursor in the code': 'No cursor, no código',
        'A section name, its key block, a blank line and one record': 'Um nome de seção, seu bloco de chaves, uma linha em branco e um registro',
        'The placeholder for the line of a nested list': 'O marcador para a linha de uma lista aninhada',
        '- (no value)': '- (sem valor)',
        'SHLS has no empty values: a dash stands for none': 'SHLS não tem valores vazios: um traço significa nenhum',
        'Today\'s date': 'Data de hoje',
        'The date as YYYY-MM-DD': 'A data como AAAA-MM-DD',

        /* ---------- Convert tab ---------- */
        'JSON on one line': 'JSON em uma linha',
        'This document': 'Este documento',
        'Writes the document anew as the reference SHLSEncoder does: all key blocks first, then the records of each section':
            'Reescreve o documento como o SHLSEncoder de referência faz: primeiro todos os blocos de chaves, depois os registros de cada seção',
        'Write as SHLSEncoder does': 'Escrever como o SHLSEncoder',
        'Convert to': 'Converter para',
        'JSON (as SHLSDecoder reads it)': 'JSON (como o SHLSDecoder o lê)',
        'CSV (one section)': 'CSV (uma seção)',
        'JSON Lines (one section)': 'JSON Lines (uma seção)',
        'The records as plain text': 'Os registros como texto simples',
        'Result': 'Resultado',
        'Download': 'Baixar',
        'Opens the result as a new document in the JSON Editor (in a new tab)': 'Abre o resultado como novo documento no Editor JSON (em uma nova aba)',
        'Open in the JSON Editor': 'Abrir no Editor JSON',
        'Exactly the data the reference SHLSDecoder reads: every value is a string.': 'Exatamente os dados que o SHLSDecoder de referência lê: cada valor é um texto.',
        'The code cannot be read as SHLS - fix the problem above the code first': 'O código não pode ser lido como SHLS - corrija primeiro o problema acima do código',
        'Write it anyway?': 'Escrever mesmo assim?',
        'Read back, the encoder\'s text gives different data than this document (SHLSEncoder cannot write every structure). "Undo" brings the document back.':
            'Ao ser lido novamente, o texto do codificador gera dados diferentes dos deste documento (o SHLSEncoder não consegue escrever todas as estruturas). "Desfazer" traz o documento de volta.',
        'Write it': 'Escrever',
        'The document is written as SHLSEncoder does already': 'O documento já está escrito como o SHLSEncoder faz',
        'Written as SHLSEncoder does': 'Escrito como o SHLSEncoder faz',

        /* ---------- Outline tab ---------- */
        'The sections of the document. Click one to go there.': 'As seções do documento. Clique em uma para ir até ela.',

        /* ---------- Export ---------- */
        'Close': 'Fechar',
        'File name': 'Nome do arquivo',
        'SHLS file as it is (.shls)': 'Arquivo SHLS como está (.shls)',
        'JSON, as SHLSDecoder reads it (.json)': 'JSON, como o SHLSDecoder o lê (.json)',
        'YAML file (.yaml)': 'Arquivo YAML (.yaml)',
        'CSV table of the selected section (.csv)': 'Tabela CSV da seção selecionada (.csv)',
        'The records as plain text (.txt)': 'Os registros como texto simples (.txt)',
        'Download every format at once': 'Baixar todos os formatos de uma vez',
        'All formats (ZIP)': 'Todos os formatos (ZIP)',

        /* ---------- My documents ---------- */
        'Search by name': 'Buscar por nome',
        'Search your documents': 'Buscar nos seus documentos',
        'Open a file from your computer as a new document': 'Abrir um arquivo do seu computador como novo documento',
        'New document': 'Novo documento',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Clique em um documento para abri-lo. Eles ficam guardados só neste navegador - nada é enviado. Limpar os dados do site no navegador os apaga, então baixe os que você quer manter.',
        'Download every document as a .shls file in one ZIP': 'Baixar todos os documentos como arquivos .shls em um ZIP',
        'Download all (ZIP)': 'Baixar tudo (ZIP)',
        'Rename': 'Renomear',
        'Download as .shls': 'Baixar como .shls',
        'Delete': 'Excluir',
        'New name': 'Novo nome',
        'This document is open': 'Este documento está aberto',
        'Click to open this document': 'Clique para abrir este documento',
        'No documents yet.': 'Ainda não há documentos.',

        /* ---------- AI Assistant ---------- */
        'Any AI can work with you - ChatGPT, Claude, Gemini, Copilot. The prompt explains SHLS, so the AI writes valid SHLS.':
            'Qualquer IA pode trabalhar com você - ChatGPT, Claude, Gemini, Copilot. O prompt explica o SHLS, então a IA escreve SHLS válido.',
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
        'Paste it into your AI and say what it should change.': 'Cole na sua IA e diga o que ela deve alterar.',
        '(no key yet)': '(ainda sem chave)',
        '(key valid while the editor is open)': '(chave válida enquanto o editor estiver aberto)',
        'The link could not be read': 'Não foi possível ler o link',
        'The document in this link is incomplete or damaged. If the AI\'s link was split over several lines (as in a terminal), copy the whole answer and paste it into the editor with Ctrl+V - the editor joins the lines.':
            'O documento neste link está incompleto ou danificado. Se o link da IA foi dividido em várias linhas (como num terminal), copie a resposta inteira e cole no editor com Ctrl+V - o editor junta as linhas.',
        'Loading…': 'Carregando…',
        'Taken over by your editor': 'Recebido pelo seu editor',
        'The document is now in the SHLS Editor tab you already had open. Switch to that tab, or open it here.':
            'O documento agora está na aba do Editor SHLS que você já tinha aberta. Mude para aquela aba ou abra aqui.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)': 'Não é permitido copiar aqui - está selecionado abaixo: pressione Ctrl+C (⌘C)',
        'Prompt copied - paste it into your AI and say what it should write': 'Prompt copiado - cole na sua IA e diga o que ela deve escrever',
        'This link is incomplete or damaged - please ask the AI to send it again': 'Este link está incompleto ou danificado - peça à IA para enviá-lo de novo',

        /* ---------- Save to your server ---------- */
        'Save to your server': 'Salvar no seu servidor',
        'Webhook address': 'Endereço do webhook',
        'https://example.com/api/shls': 'https://example.com/api/shls',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(opcional, enviado como "Authorization: Bearer …"; guardado até fechar esta aba)',
        'Send automatically a few seconds after each change (otherwise only when you click': 'Enviar automaticamente alguns segundos após cada alteração (senão só quando você clicar em',
        'or press Ctrl+S)': 'ou pressionar Ctrl+S)',
        'Only for “': 'Só para "',
        '” (other documents use the general address)': '" (os outros documentos usam o endereço geral)',
        'What your server receives': 'O que o seu servidor recebe',
        'A POST request with JSON (your server must allow CORS from https://shls.giit.ch); content is the document as a string:':
            'Uma requisição POST com JSON (seu servidor precisa permitir CORS de https://shls.giit.ch); content é o documento como texto:',
        'Embed the editor in your website': 'Incorporar o editor no seu site',
        'Send now': 'Enviar agora',
        'Save setting': 'Salvar configuração',

        /* ---------- Help ---------- */
        'How it works': 'Como funciona',
        'Keyboard shortcuts': 'Atalhos de teclado',
        'In the records: go up and down, fold and unfold': 'Nos registros: subir e descer, recolher e expandir',
        'In the records: change the value, key or section name': 'Nos registros: alterar o valor, a chave ou o nome da seção',
        'In the records: remove the record or key': 'Nos registros: remover o registro ou a chave',
        'In the records: move the record or key up / down': 'Nos registros: mover o registro ou a chave para cima / baixo',
        'Indent / outdent in the code by one level': 'Aumentar / diminuir o recuo no código em um nível',
        'Undo / redo': 'Desfazer / refazer',
        'Save (download, or to your server) / export': 'Salvar (baixar, ou no seu servidor) / exportar',
        'Alt': 'tecla Alt',
        'Escape': 'Escape',
        'A click in the middle puts the code\'s cursor on that line; the cursor in the code marks its record, key or value. Problems (a record with a value too few, indentation that is not a whole level, a missing blank line) are listed above the code with their line - click one to go there.':
            'Um clique no meio coloca o cursor do código naquela linha; o cursor no código marca o registro, a chave ou o valor dela. Problemas (um registro com um valor a menos, uma indentação que não é um nível inteiro, uma linha em branco faltando) aparecem acima do código com a linha - clique em um para ir até lá.',
        'Enter keeps the indentation of the line; after a section name it starts the key block.': 'Enter mantém a indentação da linha; depois de um nome de seção, inicia o bloco de chaves.',

        /* ---------- Messages ---------- */
        'The browser storage is full - download and delete documents under "My documents"': 'O armazenamento do navegador está cheio - baixe e exclua documentos em "Meus documentos"',
        'The browser storage is full - delete or download documents under "My documents" first': 'O armazenamento do navegador está cheio - exclua ou baixe documentos em "Meus documentos" primeiro',
        'The browser storage is full - delete or download some documents first': 'O armazenamento do navegador está cheio - exclua ou baixe alguns documentos primeiro',
        'The browser storage is full': 'O armazenamento do navegador está cheio',
        'Nothing to undo': 'Nada para desfazer',
        'Nothing to redo': 'Nada para refazer',
        'Nothing changed': 'Nada mudou',
        'Choose a section, key or record first': 'Escolha primeiro uma seção, chave ou registro',
        'Choose a key or a record to move or duplicate it': 'Escolha uma chave ou um registro para movê-lo ou duplicá-lo',
        'This nested list has no records to add after': 'Esta lista aninhada não tem registros depois dos quais adicionar',
        'SHLS values have one line - the line breaks became spaces': 'Valores SHLS têm uma linha - as quebras de linha viraram espaços',
        'Spaces around the value were removed - SHLS values cannot start with spaces': 'Os espaços em volta do valor foram removidos - valores SHLS não podem começar com espaços',
        'SHLS has no empty values (a blank line is skipped) - write a placeholder such as - or PH': 'SHLS não tem valores vazios (uma linha em branco é pulada) - escreva um marcador como - ou PH',
        'A key needs a name': 'Uma chave precisa de um nome',
        'A section needs a name': 'Uma seção precisa de um nome',
        'A key block needs at least one key - add another key first': 'Um bloco de chaves precisa de pelo menos uma chave - adicione outra chave primeiro',
        'This key is not there any more': 'Esta chave não existe mais',
        'This line is not there any more': 'Esta linha não existe mais',
        'This record is not there any more': 'Este registro não existe mais',
        'This is the first record': 'Este é o primeiro registro',
        'This is the last record': 'Este é o último registro',
        'This is the first key': 'Esta é a primeira chave',
        'This is the last key': 'Esta é a última chave',
        'This document is empty already': 'Este documento já está vazio',
        'All data is removed. "Undo" brings it back as long as the page is open.': 'Todos os dados são removidos. "Desfazer" traz de volta enquanto a página estiver aberta.',
        'Start over': 'Recomeçar',
        'The file is larger than 8 MB': 'O arquivo tem mais de 8 MB',
        'The CSV file is empty': 'O arquivo CSV está vazio',
        'The YAML package is not loaded yet': 'O pacote YAML ainda não foi carregado',
        'Downloaded': 'Baixado',
        'Copied to the clipboard': 'Copiado para a área de transferência',
        'Code copied': 'Código copiado',
        '.shls downloaded': '.shls baixado',
        'Replace': 'Substituir',
        'The document is removed from this browser for good. Download it first if you want to keep a copy.':
            'O documento é removido deste navegador para sempre. Baixe-o antes se quiser manter uma cópia.',
        'unknown format': 'formato desconhecido',

        /* What SHLS cannot keep (opening JSON, YAML, CSV) */
        'An object inside a record becomes a list with this one object.': 'Um objeto dentro de um registro vira uma lista com esse único objeto.',
        'Plain values where SHLS expects records (in a list or as a section) become records with the one key "Value".': 'Valores simples onde o SHLS espera registros (em uma lista ou como seção) viram registros com a única chave "Value".',
        'Empty values become blank lines, which SHLS readers skip - the values after them move up. Write a placeholder such as -.': 'Valores vazios viram linhas em branco, que os leitores de SHLS pulam - os valores depois deles sobem. Escreva um marcador como -.',
        'Values with several lines are not supported by SHLS - they break the records apart.': 'Valores com várias linhas não são suportados pelo SHLS - eles quebram os registros.',
        'Values that start or end with spaces lose them (and leading spaces change the indentation).': 'Valores que começam ou terminam com espaços os perdem (e espaços no início mudam a indentação).',

        /* ---------- Problems in the code ---------- */
        'A tab in the indentation - SHLS counts spaces only, so this line is read as a section name': 'Uma tabulação na indentação - o SHLS conta só espaços, então esta linha é lida como nome de seção',
        'SHLS readers ignore this line - its indentation does not fit the key block': 'Os leitores de SHLS ignoram esta linha - a indentação dela não se encaixa no bloco de chaves',
        /* ---------- Template placeholders (?template=) ---------- */
        'A line of section tags belongs between complete records': 'Uma linha de tags de seção do modelo deve ficar entre registros completos',
        'A template stays as written - the encoder works on filled data': 'Um modelo permanece como está - o codificador trabalha com dados preenchidos',
        'Sections of the template stay whole - make this change in the code': 'As seções do modelo permanecem inteiras - faça esta alteração no código',
    },

    html: {

        '<b>Export</b> also has <b>Open in another editor</b>: it converts the document and opens it as a new document there. Anything the other format cannot hold is listed first.':

            '<b>Exportar</b> também oferece <b>Abrir em outro editor</b>: o documento é convertido e aberto lá como novo documento. O que o outro formato não comporta é listado antes.',
        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Clique em <b>Copiar prompt</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'A IA responde com um link: clique nele, ou cole a resposta inteira abaixo. <b>Desfazer</b> volta atrás.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'A IA responde com um link: <b>cole a resposta inteira abaixo</b> (um link clicado abre um editor separado). <b>Desfazer</b> volta atrás.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'O editor pode enviar cada versão salva para o seu próprio servidor (um <b>webhook</b>), para que o seu trabalho fique onde você quiser. Nada é enviado até você informar um endereço aqui.',
        'Also possible: <code>?src=&lt;URL of a .shls file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>shlseditor:ai</code>, <code>shlseditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Também é possível: <code>?src=&lt;URL of a .shls file&gt;</code> abre um arquivo, <code>&amp;webhook=&lt;URL&gt;</code> salva este documento lá. O editor também pode abrir em uma janela própria (<code>?embed=window</code>), e a sua página pode entregar a ele o próprio prompt de IA e uma chave de sessão para que a IA envie o resultado ao seu servidor (<code>shlseditor:ai</code>, <code>shlseditor:key-request</code>) - veja "Use o editor no seu próprio site" abaixo do editor. Os detalhes estão em <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> SHLS on the left - or start with <b>New</b> and one of the templates. A section is its name, then its keys (indented by one space, the keys of a nested list one level deeper), exactly one blank line, then the records: one value per line in the order of the keys.':
            '<b>Escreva</b> SHLS à esquerda - ou comece com <b>Novo</b> e um dos modelos. Uma seção é o nome dela, depois as chaves (indentadas com um espaço, as chaves de uma lista aninhada um nível abaixo), exatamente uma linha em branco e depois os registros: um valor por linha, na ordem das chaves.',
        'The middle shows each section with its <b>key block</b> and its <b>records</b>, the keys as labels; nested lists fold. It reads the code exactly as the reference SHLSDecoder does.':
            'O meio mostra cada seção com seu <b>bloco de chaves</b> e seus <b>registros</b>, com as chaves como rótulos; listas aninhadas se recolhem. Ele lê o código exatamente como o SHLSDecoder de referência.',
        '<b>Click a value, a key or a section name</b> to change it right there. <b>Enter</b> or a click elsewhere writes the change into the code (one step for Undo), <b>Escape</b> cancels. The buttons above add, duplicate, move and remove records and keys - a key added or removed is added to or removed from every record.':
            '<b>Clique em um valor, uma chave ou um nome de seção</b> para alterá-lo ali mesmo. <b>Enter</b> ou um clique em outro lugar grava a alteração no código (um passo para Desfazer), <b>Escape</b> cancela. Os botões acima adicionam, duplicam, movem e removem registros e chaves - uma chave adicionada ou removida é adicionada ou removida em todos os registros.',
        '<b>Record</b> on the right shows the selected record as a form; <b>Insert</b> adds records, keys and sections; <b>Convert</b> counts the tokens against JSON and converts to JSON, YAML, CSV and JSON Lines; <b>Outline</b> lists the sections.':
            '<b>Registro</b> à direita mostra o registro selecionado como formulário; <b>Inserir</b> adiciona registros, chaves e seções; <b>Converter</b> conta os tokens em comparação com JSON e converte para JSON, YAML, CSV e JSON Lines; <b>Tópicos</b> lista as seções.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser. <b>Export</b> saves it as SHLS, JSON, YAML, CSV or text.':
            '<b>Meus documentos</b> (o botão de pasta no canto superior esquerdo) lista todos os documentos guardados neste navegador. <b>Exportar</b> salva como SHLS, JSON, YAML, CSV ou texto.',
    },

    patterns: [
        /* ---------- Status lines and counts ---------- */
        ['^(\\d+) (?:line|lines) · ([\\d.]+ K?B) · (\\d+) (?:section|sections)$', (m, l, kb, s) => `${l} ${getPlural(l, 'linha', 'linhas')} · ${kb} · ${s} ${getPlural(s, 'seção', 'seções')}`],
        ['^([\\d,]+) bytes$', (m, b) => `${formatThousands(b)} bytes`],
        ['^(\\d+) (?:record|records) · (\\d+) (?:key|keys)$', (m, r, k) => `${r} ${translateRecords(r)} · ${k} ${getPlural(k, 'chave', 'chaves')}`],
        ['^(\\d+) (?:record|records) · (\\d+) (?:key|keys) · line (\\d+)$', (m, r, k, l) => `${r} ${translateRecords(r)} · ${k} ${getPlural(k, 'chave', 'chaves')} · linha ${l}`],
        ['^(\\d+) (?:record|records) · line (\\d+)$', (m, r, l) => `${r} ${translateRecords(r)} · linha ${l}`],
        ['^(\\d+) (?:record|records)$', (m, r) => `${r} ${translateRecords(r)}`],
        ['^(\\d+) (?:problem|problems)$', (m, k) => `${k} ${getPlural(k, 'problema', 'problemas')}`],
        ['^nested list · (\\d+) (?:key|keys)$', (m, k) => `lista aninhada · ${k} ${getPlural(k, 'chave', 'chaves')}`],
        ['^(nested list · )?level (\\d+) · line (\\d+)$', (m, nl, l, z) => `${nl ? 'lista aninhada · ' : ''}nível ${l} · linha ${z}`],
        ['^record (\\d+) of (\\d+) · lines (\\d+)-(\\d+)$', 'registro $1 de $2 · linhas $3-$4'],
        ['^SHLS needs about (\\d+) % fewer tokens than the same data as JSON - approximate tokens of common AI models\\.$', 'O SHLS precisa de cerca de $1 % menos tokens que os mesmos dados em JSON - tokens aproximados de modelos de IA comuns.'],
        ['^The same data as JSON needs about as many tokens - approximate tokens of common AI models\\.$', 'Os mesmos dados em JSON precisam de mais ou menos a mesma quantidade de tokens - tokens aproximados de modelos de IA comuns.'],
        ['^The records of "(.+)": its keys are the columns, a nested list is one cell with JSON\\.$', 'Os registros de "$1": as chaves são as colunas, uma lista aninhada é uma célula com JSON.'],
        ['^One record of "(.+)" per line\\.$', 'Um registro de "$1" por linha.'],
        ['^"(.+)" has no records$', '"$1" não tem registros'],

        /* ---------- Problems above the code ---------- */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'erro', 'erros')}`],
        ['^(\\d+) (?:note|notes)$', (m, k) => `${k} ${getPlural(k, 'aviso', 'avisos')}`],
        ['^· (\\d+) (?:note|notes)$', (m, k) => `· ${k} ${getPlural(k, 'aviso', 'avisos')}`],
        ['^Line (\\d+)$', 'Linha $1'],
        ['^Indented by (\\d+) (?:space|spaces) - not a whole level \\((\\d+) (?:space|spaces) per level\\)$', (m, k, p) => `Indentado com ${k} ${getPlural(k, 'espaço', 'espaços')} - não é um nível inteiro (${p} ${getPlural(p, 'espaço', 'espaços')} por nível)`],
        ['^Indented (\\d+) levels deeper than the line above - one level at a time$', 'Indentado $1 níveis abaixo da linha anterior - um nível de cada vez'],
        ['^"(.+)" has no key block yet - these lines are read as its keys \\(the key block follows the section name directly\\)$', '"$1" ainda não tem bloco de chaves - estas linhas são lidas como as chaves dela (o bloco de chaves vem logo depois do nome da seção)'],
        ['^The key "(.+)" is twice in the key block - only one of them keeps its values\\. Is the blank line between the key block and the records missing\\?$', 'A chave "$1" aparece duas vezes no bloco de chaves - só uma delas mantém os valores. Está faltando a linha em branco entre o bloco de chaves e os registros?'],
        ['^"(.+)" looks like a value but stands in the key block - records follow the key block after exactly one blank line$', '"$1" parece um valor, mas está no bloco de chaves - os registros vêm depois do bloco de chaves após exatamente uma linha em branco'],
        ['^(\\d+) blank lines after the key block of "(.+)" - exactly one belongs there$', '$1 linhas em branco depois do bloco de chaves de "$2" - ali vai exatamente uma'],
        ['^This record of "(.+)" has (\\d+) of (\\d+) values - its last keys are missing in the data$', 'Este registro de "$1" tem $2 de $3 valores - suas últimas chaves faltam nos dados'],
        ['^No blank line before this record of "(.+)" while the others have one - the record above may have more values than the key block \\((\\d+)\\)$', 'Não há linha em branco antes deste registro de "$1", enquanto os outros têm - o registro acima talvez tenha mais valores que o bloco de chaves ($2)'],
        ['^A blank line inside a record of "(.+)" - the record may have fewer values than the key block \\((\\d+)\\)$', 'Uma linha em branco dentro de um registro de "$1" - o registro talvez tenha menos valores que o bloco de chaves ($2)'],

        /* ---------- Messages with names ---------- */
        ['^"(.+)" has no key block - write its keys first$', '"$1" não tem bloco de chaves - escreva as chaves dela primeiro'],
        ['^"(.+)" has no key block$', '"$1" não tem bloco de chaves'],
        ['^There is already a section "(.+)"$', 'Já existe uma seção "$1"'],
        ['^There is no section "(.+)"$', 'Não existe uma seção "$1"'],
        ['^Remove the section "(.+)"\\?$', 'Remover a seção "$1"?'],
        ['^Its key block and its (\\d+) (?:record is|records are) removed\\. "Undo" brings them back\\.$', (m, k) => `O bloco de chaves e ${getPlural(k, 'o registro dela são removidos', `os ${k} registros dela são removidos`)}. "Desfazer" traz de volta.`],
        ['^Remove the key "(.+)"\\?$', 'Remover a chave "$1"?'],
        ['^Its value is removed from every record of "(.+)" \\((\\d+)\\)\\. "Undo" brings it back\\.$', 'O valor dela é removido de todos os registros de "$1" ($2). "Desfazer" traz de volta.'],
        ['^Path copied: (.*)$', 'Caminho copiado: $1'],
        ['^Line (\\d+): (.*)$', 'Linha $1: $2'],
        ['^"(.+)" converted from ([\\w ]+)$', '"$1" convertido de $2'],
        ['^SHLS cannot keep all of this data: (.*)$', 'O SHLS não consegue guardar todos estes dados: $1'],
        ['^"(.+)" is open\\. My documents: open, rename, duplicate or delete your documents \\(Ctrl\\+O\\)$', '"$1" está aberto. Meus documentos: abra, renomeie, duplique ou exclua seus documentos (Ctrl+O)'],
        ['^Start "(.+)" over\\?$', 'Recomeçar "$1"?'],
        ['^Start "(.+)" over$', 'Recomeçar "$1"'],
        ['^(\\d+) (?:document|documents) · (.+) in this browser$', (m, k, s) => `${k} ${getPlural(k, 'documento', 'documentos')} · ${formatSize(s)} neste navegador`],
        ['^No document named "(.*)"\\.$', 'Nenhum documento chamado "$1".'],
        ['^Open now · (.+)$', (m, s) => `Aberto agora · ${formatSize(s)}`],
        ['^(just now|yesterday|\\d+ min ago|\\d+ h ago|[A-Z][a-z]{2} \\d{1,2}, \\d{4}) · (.+)$', (m, w, s) => `${formatTime(w)} · ${formatSize(s)}`],
        ['^(.+) \\(open now\\)$', '$1 (aberto agora)'],
        ['^ZIP with (\\d+) (?:document|documents) downloaded$', (m, k) => `ZIP com ${k} ${getPlural(k, 'documento', 'documentos')} baixado`],
        ['^ZIP downloaded with (\\d+) files$', 'ZIP com $1 arquivos baixado'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '"$1" está vazio agora - "Desfazer" traz de volta'],
        ['^"(.+)" opened$', '"$1" aberto'],
        ['^New document "(.+)" - your other documents are under "My documents"$', 'Novo documento "$1" - seus outros documentos estão em "Meus documentos"'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$', 'Novo documento "$1" da IA - seus outros documentos não mudaram'],
        ['^"(.+)" is not a file the editor can open$', '"$1" não é um arquivo que o editor consiga abrir'],
        ['^Opened "(.+)" - converted from ([\\w ]+)$', '"$1" aberto - convertido de $2'],
        ['^Opened "(.+)" - it is now in "My documents"$', '"$1" aberto - agora ele está em "Meus documentos"'],
        ['^"(.+)" could not be opened: (.*)$', 'Não foi possível abrir "$1": $2'],
        ['^The addition is not valid SHLS - it is open as a new document "(.+)"$', 'O acréscimo não é SHLS válido - ele está aberto como novo documento "$1"'],
        ['^(.+) - the addition is open as a new document "(.+)"$', '$1 - o acréscimo está aberto como novo documento "$2"'],
        ['^Document received - (\\d+) (?:problem|problems) found, see above the code$', (m, k) => `Documento recebido - ${k} ${getPlural(k, 'problema encontrado', 'problemas encontrados')}, veja acima do código`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '"$1" alterado pela IA - "Desfazer" volta atrás'],
        ['^"(.+)" duplicated$', '"$1" duplicado'],
        ['^Delete "(.+)"\\?$', 'Excluir "$1"?'],
        ['^"(.+)" deleted$', '"$1" excluído'],

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
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Abrir $1'],
    ],
};
