/* Brazilian Portuguese texts that all giit editors share: the links to giit.ch
   in the bar, saving on a server and inside a page (sync.js), the AI status
   (aistatus.js), the confirmation box (dialogs.js). The editor's own texts are
   in its Portuguese pack; how they are used is described in i18n.js. The same
   file serves every giit editor. */

/**
 * Writes a time of day in the 24-hour form of the language.
 * @param {string} h - the hour.
 * @param {string} m - the minutes.
 * @param {string} ap - "AM", "PM" or empty.
 * @returns {string} the text in the language.
 */
const formatHour = (h, m, ap) => `${String((+h % 12) + (ap === 'PM' ? 12 : 0) + (ap ? 0 : +h - (+h % 12))).padStart(2, '0')}:${m}`;
/**
 * Translates the text the pattern found (o in the English pattern).
 * @param {string} w - the English text the pattern found.
 * @returns {string} the text in the language.
 */
const translateThing = w => (w === 'drawing' ? 'o desenho' : 'o documento');

export default {
    text: {
        "All giit editors": "Todos os editores giit",
        "by giit.ch": "da giit.ch",
        "Open in another editor": "Abrir em outro editor",
        "Not everything can be converted": "Nem tudo pode ser convertido",
        "Open anyway": "Abrir mesmo assim",
        "Pictures and other files of the document stay here: add them again in the other editor": "As imagens e outros arquivos do documento ficam aqui: adicione-os novamente no outro editor",
        "The document is too long for a link - export it and open the file in the other editor": "O documento é longo demais para um link - exporte-o e abra o arquivo no outro editor",
        "Scripts and styles": "Scripts e estilos",
        "Form fields": "Campos de formulário",
        "Footnotes, labels and references": "Notas de rodapé, rótulos e referências",
        "LaTeX commands and environments without an equivalent": "Comandos e ambientes LaTeX sem equivalente",
        "Document class, packages and page settings": "Classe do documento, pacotes e configurações de página",
        "The table of contents": "O sumário",
        "Typst functions without an equivalent": "Funções Typst sem equivalente",
        "Formulas are copied as written: check them": "As fórmulas são copiadas como estão: verifique-as",
        "Formulas become plain code": "As fórmulas viram código simples",
        "Links with an unsafe address": "Links com endereço inseguro",
        "Comments": "Comentários",
        "Empty values (null): TOML has no null": "Valores vazios (null): TOML não tem null",
        "The data is not a table: it goes under the key \"value\"": "Os dados não são uma tabela: ficam sob a chave \"value\"",
        "Keys that are not valid XML names are changed": "Chaves que não são nomes XML válidos são alteradas",
        "Only the first list goes into the table": "Só a primeira lista vai para a tabela",
        "Nested values go into one cell as JSON": "Valores aninhados vão para uma célula como JSON",
        "The picture could not be stored in this browser (storage full or blocked) - it is kept only until the page is closed: download the document to keep it": "Não foi possível guardar a imagem neste navegador (armazenamento cheio ou bloqueado) - ela fica só até a página ser fechada: baixe o documento para mantê-la",
        "Column names that occur twice (numbered)": "Nomes de coluna repetidos (numerados)",
        "Fields beyond the header (named Column N)": "Campos além do cabeçalho (chamados Column N)",
        "The AI's result could not be opened - your browser's storage may be full": "Não foi possível abrir o resultado da IA - o armazenamento do navegador pode estar cheio",
        "The AI's result could not be opened": "Não foi possível abrir o resultado da IA",
        "Types of values: SHLS holds every value as text": "Tipos de valores: SHLS guarda cada valor como texto",
        "This data has no list of records, so it does not make a table": "Estes dados não têm uma lista de registros, portanto não formam uma tabela",
        "The XML cannot be read - fix the problem above the code first": "O XML não pode ser lido - corrija primeiro o problema acima do código",
        "It could not be converted": "Não foi possível converter",
        "Content from a third party, not checked by giit.ch": "Conteúdo de terceiros, não verificado por giit.ch",
        // Wrapping long lines in the code view (wrap.js)
        "Wrap": "Quebrar linhas",
        "Wrap long lines in the view - each line of the code stays one line (Alt+Z)": "Quebrar as linhas longas na visualização - cada linha do código continua sendo uma linha (Alt+Z)",
        'Cancel': 'Cancelar',
        'Allow': 'Permitir',
        'No': 'Não',
        'Yes': 'Sim',
        'Save': 'Salvar',
        'Saved': 'Salvo',
        'Sending…': 'Enviando…',
        'Not connected': 'Não conectado',
        'Save on this server?': 'Salvar neste servidor?',
        'The address for the AI must be https:// on the site of the page around the editor - it is not used':
            'O endereço para a IA precisa ser https:// no site da página que contém o editor - ele não será usado',
        'The key from the page is not valid (16 to 512 letters, digits or ._~+/=-)':
            'A chave da página não é válida (16 a 512 letras, dígitos ou ._~+/=-)',
        'This document stays in your browser - only the document from the page is saved there':
            'Este documento fica no seu navegador - só o documento da página é salvo lá',
        'This drawing stays in your browser - only the drawing from the page is saved there':
            'Este desenho fica no seu navegador - só o desenho da página é salvo lá',
        'The page that opened the editor is closed - download the document so nothing is lost':
            'A página que abriu o editor foi fechada - baixe o documento para não perder nada',
        'The page that opened the editor is closed - download the drawing so nothing is lost':
            'A página que abriu o editor foi fechada - baixe o desenho para não perder nada',
        'The webhook from the page is not an https:// address - it is not used':
            'O webhook da página não é um endereço https:// - ele não será usado',
        'Please enter an https:// address (or http://localhost for testing)':
            'Informe um endereço https:// (ou http://localhost para testes)',
        'Saved versions now go to your server': 'As versões salvas agora vão para o seu servidor',
        'Webhook switched off': 'Webhook desativado',
        'The webhook in the link is not an https:// address - it is not used':
            'O webhook do link não é um endereço https:// - ele não será usado',
        'The webhook in the link only works together with ?src= - it is not used':
            'O webhook do link só funciona junto com ?src= - ele não será usado',
        'A token in a link is not used - enter it under "Save to server"':
            'Um token em um link não é usado - informe-o em "Salvar no servidor"',
        'Save - hand the document to the page around the editor (Ctrl+S)':
            'Salvar - entregar o documento à página que contém o editor (Ctrl+S)',
        'Save - hand the drawing to the page around the editor (Ctrl+S)':
            'Salvar - entregar o desenho à página que contém o editor (Ctrl+S)',
        'AI through a website: not connected': 'IA por um site: não conectada',
        'Browser agent (WebMCP): not offered by this browser': 'Agente do navegador (WebMCP): não oferecido por este navegador',
        'Browser agent (WebMCP): available, not used yet': 'Agente do navegador (WebMCP): disponível, ainda não usado',
        'AI links: cannot reach the editor inside this website - paste the AI\'s answer here':
            'Links de IA: não alcançam o editor dentro deste site - cole aqui a resposta da IA',
        'AI links: open the editor in a new tab': 'Links de IA: abrem o editor em uma nova aba',
        'AI links: go to another editor tab (the one used last)': 'Links de IA: vão para outra aba do editor (a usada por último)',
        'AI links: arrive in this tab': 'Links de IA: chegam nesta aba',
        'AI in this session: nothing received yet - copy the prompt for your AI': 'IA nesta sessão: nada recebido ainda - copie o prompt para a sua IA',
    },
    patterns: [
        ['^Saved on (.+) at (\\d{1,2}):(\\d{2})\\s?(AM|PM)?$', (x, host, h, m, ap) => `Salvo em ${host} às ${formatHour(h, m, ap)}`],
        ['^Saved on (.+)$', 'Salvo em $1'],
        ['^Not saved on (.+?): no connection, or the server does not allow it \\(CORS\\)$', 'Não salvo em $1: sem conexão, ou o servidor não permite (CORS)'],
        ['^Not saved on (.+?): The server answered (\\d+)(.*)$', 'Não salvo em $1: o servidor respondeu $2$3'],
        ['^Not saved on (.+?): the (document|drawing) with its pictures is (\\d+) MB - at most 40 MB go in one request$', 'Não salvo em $1: com as imagens são $3 MB - cabem no máximo 40 MB em uma requisição'],
        ['^"(.+)" was changed in another tab - your version here is kept as "(.+)"$', '"$1" foi alterado em outra aba - a sua versão daqui fica guardada como "$2"'],
        ['^Not saved on (.+?): the server did not answer within (\\d+) seconds$', 'Não salvo em $1: o servidor não respondeu em $2 segundos'],
        ['^Not saved on (.+?): (.*)$', 'Não salvo em $1: $2'],
        ['^Saves to (.+) \\(set by the page\\)$', 'Salva em $1 (definido pela página)'],
        ['^Save - send the (document|drawing) to (.+) \\(Ctrl\\+S\\)$', (m, w, h) => `Salvar - enviar ${translateThing(w)} para ${h} (Ctrl+S)`],
        ['^The AI\'s new (document|drawing) is open as "(.+)" - it stays in your browser and is not saved to (.+)$',
            (m, w, n, l) => `${w === 'drawing' ? 'O novo desenho' : 'O novo documento'} da IA está aberto como "${n}" - ele fica no seu navegador e não é salvo em ${l}`],
        ['^The AI\'s result from (.+) is open - Undo takes it back$', 'O resultado da IA de $1 está aberto - Desfazer reverte a alteração'],
        ['^The file could not be opened: no connection, or the server does not allow it \\(CORS\\)$', 'Não foi possível abrir o arquivo: sem conexão, ou o servidor não permite (CORS)'],
        ['^The file could not be opened: only https:// addresses can be opened$', 'Não foi possível abrir o arquivo: só é possível abrir endereços https://'],
        ['^The file could not be opened: the server answered (\\d+)$', 'Não foi possível abrir o arquivo: o servidor respondeu $1'],
        ['^The file could not be opened: the page loaded another document meanwhile$', 'Não foi possível abrir o arquivo: a página carregou outro documento nesse meio-tempo'],
        ['^The file could not be opened: (.*)$', 'Não foi possível abrir o arquivo: $1'],
        ['^This link asks the editor to send the saved versions of "(.+)" to (.+) while this page is open\\. Only allow it if you trust that site\\.$',
            'Este link pede ao editor que envie as versões salvas de "$1" para $2 enquanto esta página estiver aberta. Só permita se você confiar nesse site.'],
        ['^AI in this session: a document from an AI link, just now$', 'IA nesta sessão: um documento de um link de IA, agora mesmo'],
        ['^AI in this session: a document from an AI link, (\\d+) min ago$', 'IA nesta sessão: um documento de um link de IA, há $1 min'],
        ['^AI in this session: a result through the page, just now$', 'IA nesta sessão: um resultado pela página, agora mesmo'],
        ['^AI in this session: a result through the page, (\\d+) min ago$', 'IA nesta sessão: um resultado pela página, há $1 min'],
        ['^AI in this session: a browser agent \\(WebMCP\\), just now$', 'IA nesta sessão: um agente do navegador (WebMCP), agora mesmo'],
        ['^AI in this session: a browser agent \\(WebMCP\\), (\\d+) min ago$', 'IA nesta sessão: um agente do navegador (WebMCP), há $1 min'],
        ['^AI through (.+): connected, waiting for the key$', 'IA por $1: conectada, aguardando a chave'],
        ['^AI through (.+): connected$', 'IA por $1: conectada'],
        ['^AI through (.+): the website gives the answering instructions$', 'IA por $1: o site indica à IA como responder'],
        ['^Browser agent \\(WebMCP\\): active, last used just now$', 'Agente do navegador (WebMCP): ativo, usado agora mesmo'],
        ['^Browser agent \\(WebMCP\\): active, last used (\\d+) min ago$', 'Agente do navegador (WebMCP): ativo, usado pela última vez há $1 min'],
        ['^Browser agent \\(WebMCP\\): available, last used just now$', 'Agente do navegador (WebMCP): disponível, usado agora mesmo'],
        ['^Browser agent \\(WebMCP\\): available, last used (\\d+) min ago$', 'Agente do navegador (WebMCP): disponível, usado pela última vez há $1 min'],

        /* ---------- The page's own answering instructions (AI Assistant) ---------- */
        ['^(.+) gives the AI its instructions for answering\\. What you paste into your AI is handled by its provider\\.$', '$1 indica à IA como responder. O que você cola na sua IA é tratado pelo provedor dela.'],
        ['^The AI answers as (.+) describes in the prompt\\. If it answers with a link, paste its answer below\\.$', 'A IA responde como $1 descreve no prompt. Se ela responder com um link, cole a resposta abaixo.'],
    ],
};
