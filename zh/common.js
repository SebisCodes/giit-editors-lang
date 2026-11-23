/* Simplified Chinese texts that all giit editors share: the links to giit.ch
   in the bar, saving on a server and inside a page (sync.js), the AI status
   (aistatus.js), the confirmation box (dialogs.js). The editor's own texts are
   in the Simplified Chinese pack; how they are used is described in i18n.js.
   The same file serves every giit editor. */

/**
 * Writes a time of day in the 24-hour form of the language.
 * @param {string} h - the hour.
 * @param {string} m - the minutes.
 * @param {string} ap - "AM", "PM" or empty.
 * @returns {string} the text in the language.
 */
const formatHour = (h, m, ap) => `${String((+h % 12) + (ap === 'PM' ? 12 : 0) + (ap ? 0 : +h - (+h % 12))).padStart(2, '0')}:${m}`;
/**
 * Translates the text the pattern found (what in the English pattern).
 * @param {string} w - the English text the pattern found.
 * @returns {string} the text in the language.
 */
const translateThing = w => (w === 'drawing' ? '绘图' : '文档');

export default {
    text: {
        "All giit editors": "所有 giit 编辑器",
        "by giit.ch": "由 giit.ch 出品",
        "Open in another editor": "在其他编辑器中打开",
        "Not everything can be converted": "并非所有内容都能转换",
        "Open anyway": "仍然打开",
        "Pictures and other files of the document stay here: add them again in the other editor": "文档的图片和其他文件留在这里：请在其他编辑器中重新添加",
        "The document is too long for a link - export it and open the file in the other editor": "文档太长，无法通过链接传递，请导出后在其他编辑器中打开该文件",
        "Scripts and styles": "脚本和样式",
        "Form fields": "表单字段",
        "Footnotes, labels and references": "脚注、标签和引用",
        "LaTeX commands and environments without an equivalent": "没有对应项的 LaTeX 命令和环境",
        "Document class, packages and page settings": "文档类、宏包和页面设置",
        "The table of contents": "目录",
        "Typst functions without an equivalent": "没有对应项的 Typst 函数",
        "Formulas are copied as written: check them": "公式按原样复制：请检查",
        "Formulas become plain code": "公式变为纯代码",
        "Links with an unsafe address": "地址不安全的链接",
        "Comments": "注释",
        "Empty values (null): TOML has no null": "空值（null）：TOML 没有 null",
        "The data is not a table: it goes under the key \"value\"": "数据不是表格：将放在键“value”下",
        "Keys that are not valid XML names are changed": "不是有效 XML 名称的键会被更改",
        "Only the first list goes into the table": "只有第一个列表会转换为表格",
        "Nested values go into one cell as JSON": "嵌套值以 JSON 形式放入一个单元格",
        "The picture could not be stored in this browser (storage full or blocked) - it is kept only until the page is closed: download the document to keep it": "无法在此浏览器中保存图片（存储空间已满或被阻止）- 它只保留到页面关闭：请下载文档以保留它",
        "Column names that occur twice (numbered)": "重复出现的列名（已编号）",
        "Fields beyond the header (named Column N)": "超出标题行的字段（命名为 Column N）",
        "The AI's result could not be opened - your browser's storage may be full": "无法打开 AI 的结果 - 浏览器存储空间可能已满",
        "The AI's result could not be opened": "无法打开 AI 的结果",
        "Types of values: SHLS holds every value as text": "值的类型：SHLS 将每个值都保存为文本",
        "This data has no list of records, so it does not make a table": "这些数据没有记录列表，因此无法构成表格",
        "The XML cannot be read - fix the problem above the code first": "无法读取 XML，请先修正代码上方的问题",
        "It could not be converted": "无法转换",
        "Content from a third party, not checked by giit.ch": "第三方内容，giit.ch 未审核",
        // Wrapping long lines in the code view (wrap.js)
        "Wrap": "自动换行",
        "Wrap long lines in the view - each line of the code stays one line (Alt+Z)": "在视图中自动换行显示长行，代码的每一行仍保持为一行（Alt+Z）",
        'Cancel': '取消',
        'Allow': '允许',
        'No': '否',
        'Yes': '是',
        'Save': '保存',
        'Saved': '已保存',
        'Sending…': '正在发送…',
        'Not connected': '未连接',
        'Save on this server?': '保存到此服务器？',
        'The address for the AI must be https:// on the site of the page around the editor - it is not used':
            'AI 地址必须是嵌入编辑器的页面所在网站上的 https:// 地址，此地址不会被使用',
        'The key from the page is not valid (16 to 512 letters, digits or ._~+/=-)':
            '页面提供的密钥无效（须为 16 到 512 个字母、数字或 ._~+/=-）',
        'This document stays in your browser - only the document from the page is saved there':
            '此文档保留在你的浏览器中，只有由页面传入的文档才会保存到那里',
        'This drawing stays in your browser - only the drawing from the page is saved there':
            '此绘图保留在你的浏览器中，只有由页面传入的绘图才会保存到那里',
        'The page that opened the editor is closed - download the document so nothing is lost':
            '打开编辑器的页面已关闭，请下载文档，以免丢失内容',
        'The page that opened the editor is closed - download the drawing so nothing is lost':
            '打开编辑器的页面已关闭，请下载绘图，以免丢失内容',
        'The webhook from the page is not an https:// address - it is not used':
            '页面提供的 Webhook 不是 https:// 地址，不会被使用',
        'Please enter an https:// address (or http://localhost for testing)':
            '请输入 https:// 地址（测试时可用 http://localhost）',
        'Saved versions now go to your server': '保存的版本现在会发送到你的服务器',
        'Webhook switched off': 'Webhook 已关闭',
        'The webhook in the link is not an https:// address - it is not used':
            '链接中的 Webhook 不是 https:// 地址，不会被使用',
        'The webhook in the link only works together with ?src= - it is not used':
            '链接中的 Webhook 只能与 ?src= 一起使用，不会被使用',
        'A token in a link is not used - enter it under "Save to server"':
            '链接中的令牌不会被使用，请在“保存到服务器”中填写',
        'Save - hand the document to the page around the editor (Ctrl+S)':
            '保存：将文档交给嵌入编辑器的页面（Ctrl+S）',
        'Save - hand the drawing to the page around the editor (Ctrl+S)':
            '保存：将绘图交给嵌入编辑器的页面（Ctrl+S）',
        'AI through a website: not connected': '通过网站连接 AI：未连接',
        'Browser agent (WebMCP): not offered by this browser': '浏览器代理（WebMCP）：此浏览器不支持',
        'Browser agent (WebMCP): available, not used yet': '浏览器代理（WebMCP）：可用，尚未使用',
        'AI links: cannot reach the editor inside this website - paste the AI\'s answer here':
            'AI 链接：无法打开此网站中的编辑器，请将 AI 的回答粘贴到这里',
        'AI links: open the editor in a new tab': 'AI 链接：在新标签页中打开编辑器',
        'AI links: go to another editor tab (the one used last)': 'AI 链接：转到另一个编辑器标签页（最近使用的那个）',
        'AI links: arrive in this tab': 'AI 链接：在此标签页中打开',
        'AI in this session: nothing received yet - copy the prompt for your AI': '本次会话中的 AI：尚未收到任何内容，请复制提示词给你的 AI',
    },
    patterns: [
        ['^Saved on (.+) at (\\d{1,2}):(\\d{2})\\s?(AM|PM)?$', (x, host, h, m, ap) => `已于 ${formatHour(h, m, ap)} 保存到 ${host}`],
        ['^Saved on (.+)$', '已保存到 $1'],
        ['^Not saved on (.+?): no connection, or the server does not allow it \\(CORS\\)$', '未保存到 $1：未连接，或服务器不允许（CORS）'],
        ['^Not saved on (.+?): The server answered (\\d+)(.*)$', '未保存到 $1：服务器返回 $2$3'],
        ['^Not saved on (.+?): the (document|drawing) with its pictures is (\\d+) MB - at most 40 MB go in one request$', (m, h, w, mb) => `未保存到 ${h}：${translateThing(w)}连同图片共 ${mb} MB，一次请求最多 40 MB`],
        ['^"(.+)" was changed in another tab - your version here is kept as "(.+)"$', '“$1”已在另一个标签页中更改 - 此处的版本保存为“$2”'],
        ['^Not saved on (.+?): the server did not answer within (\\d+) seconds$', '未保存到 $1：服务器在 $2 秒内没有响应'],
        ['^Not saved on (.+?): (.*)$', '未保存到 $1：$2'],
        ['^Saves to (.+) \\(set by the page\\)$', '保存到 $1（由页面设定）'],
        ['^Save - send the (document|drawing) to (.+) \\(Ctrl\\+S\\)$', (m, w, h) => `保存：将${translateThing(w)}发送到 ${h}（Ctrl+S）`],
        ['^The AI\'s new (document|drawing) is open as "(.+)" - it stays in your browser and is not saved to (.+)$',
            (m, w, n, l) => `AI 的新${translateThing(w)}已作为“${n}”打开，它保留在你的浏览器中，不会保存到 ${l}`],
        ['^The AI\'s result from (.+) is open - Undo takes it back$', '来自 $1 的 AI 结果已打开，“撤销”可撤回'],
        ['^The file could not be opened: no connection, or the server does not allow it \\(CORS\\)$', '无法打开文件：未连接，或服务器不允许（CORS）'],
        ['^The file could not be opened: only https:// addresses can be opened$', '无法打开文件：只能打开 https:// 地址'],
        ['^The file could not be opened: the server answered (\\d+)$', '无法打开文件：服务器返回 $1'],
        ['^The file could not be opened: the page loaded another document meanwhile$', '无法打开文件：页面在此期间加载了另一个文档'],
        ['^The file could not be opened: (.*)$', '无法打开文件：$1'],
        ['^This link asks the editor to send the saved versions of "(.+)" to (.+) while this page is open\\. Only allow it if you trust that site\\.$',
            '此链接要求编辑器在此页面打开期间将“$1”的保存版本发送到 $2。只有在你信任该网站时才允许。'],
        ['^AI in this session: a document from an AI link, just now$', '本次会话中的 AI：刚刚通过 AI 链接收到一个文档'],
        ['^AI in this session: a document from an AI link, (\\d+) min ago$', '本次会话中的 AI：$1 分钟前通过 AI 链接收到一个文档'],
        ['^AI in this session: a result through the page, just now$', '本次会话中的 AI：刚刚通过页面收到一个结果'],
        ['^AI in this session: a result through the page, (\\d+) min ago$', '本次会话中的 AI：$1 分钟前通过页面收到一个结果'],
        ['^AI in this session: a browser agent \\(WebMCP\\), just now$', '本次会话中的 AI：浏览器代理（WebMCP），刚刚'],
        ['^AI in this session: a browser agent \\(WebMCP\\), (\\d+) min ago$', '本次会话中的 AI：浏览器代理（WebMCP），$1 分钟前'],
        ['^AI through (.+): connected, waiting for the key$', '通过 $1 连接 AI：已连接，正在等待密钥'],
        ['^AI through (.+): connected$', '通过 $1 连接 AI：已连接'],
        ['^AI through (.+): the website gives the answering instructions$', '通过 $1 连接 AI：网站规定 AI 如何回答'],
        ['^Browser agent \\(WebMCP\\): active, last used just now$', '浏览器代理（WebMCP）：活动中，刚刚使用过'],
        ['^Browser agent \\(WebMCP\\): active, last used (\\d+) min ago$', '浏览器代理（WebMCP）：活动中，上次使用是在 $1 分钟前'],
        ['^Browser agent \\(WebMCP\\): available, last used just now$', '浏览器代理（WebMCP）：可用，刚刚使用过'],
        ['^Browser agent \\(WebMCP\\): available, last used (\\d+) min ago$', '浏览器代理（WebMCP）：可用，上次使用是在 $1 分钟前'],

        /* ---------- The page's own answering instructions (AI Assistant) ---------- */
        ['^(.+) gives the AI its instructions for answering\\. What you paste into your AI is handled by its provider\\.$', '$1 规定 AI 如何回答。你粘贴到 AI 中的内容由其提供商处理。'],
        ['^The AI answers as (.+) describes in the prompt\\. If it answers with a link, paste its answer below\\.$', 'AI 会按照 $1 在提示词中的说明回答。如果它回复的是链接，请将回答粘贴到下方。'],
    ],
};
