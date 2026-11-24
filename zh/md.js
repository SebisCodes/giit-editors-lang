/* Simplified Chinese texts of the Markdown editor: the bar, the work area (code,
   preview, insert, pictures, outline), its dialogs and messages, and the
   problems the preview finds in the code. What all editors share is in
   common.js; how the dictionaries are used is described in
   i18n.js. Names of documents, pictures and anchors stay as they are: the
   patterns copy them into the Simplified Chinese text. */

import { formatTime, formatSize } from './format.js';

/* "123 bytes" -> "123 字节" (KB and MB stay as they are) */

/* Month names as numbers, for dates written as "2026年10月25日" */

/* When a document was last changed (files.js): "just now", "5 min ago", "Oct 25, 2026" … */

/* Reasons a ZIP could not be opened (app.js openZip) */
const ZIP = { 'it is not a ZIP file': '它不是 ZIP 文件', 'there is no .md file in it': '其中没有 .md 文件' };

export default {
    text: {
        'Side panel': '侧边栏',
        'Show or hide the side panel': '显示或隐藏侧边栏',
        'Examples': '示例',
        'Template': '模板',
        'View of the preview': '预览视图',
        'The document filled with the examples': '填入示例后的文档',
        'The template with its placeholders as written': '按原样显示带占位符的模板',
        'The examples could not be filled in - the preview shows the template': '无法填入示例，预览显示模板',
        'Placeholders': '占位符',
        'The placeholders of the template - a click on one puts its tag at the cursor': '模板中的占位符，点击即可在光标处插入对应标签',
        'Shown': '已显示',
        'Hidden': '已隐藏',
        'example view': '示例视图',
        'template view': '模板视图',
        // Editing in place: Enter and Shift+Enter
        "Editing on the page - Enter: new paragraph, Shift+Enter: new line, Ctrl+Enter or a click elsewhere keeps it, Escape cancels": "在页面上编辑：Enter 新建段落，Shift+Enter 换行，Ctrl+Enter 或点击别处确认，Escape 取消",
        "A new paragraph inside bold, italic or a link is made in the code - Shift+Enter makes a new line": "在粗体、斜体或链接中新建段落请在代码中进行，Shift+Enter 换行",
        /* ---------- Top bar ---------- */
        'Markdown Editor - home': 'Markdown 编辑器首页',
        'Markdown Editor': 'Markdown 编辑器',
        'File': '文件',
        'My documents (Ctrl+O)': '我的文档（Ctrl+O）',
        'My documents': '我的文档',
        'New document, or start this one over': '新建文档，或重新开始当前文档',
        'New': '新建',
        'New blank document': '新建空白文档',
        'An empty page - your other documents stay as they are': '空白页面，其他文档保持不变',
        'README': 'README',
        'Project name, features, installation and usage': '项目名称、功能、安装和用法',
        'Article': '文章',
        'Title, summary, sections and a quote': '标题、摘要、章节和引文',
        'Meeting notes': '会议记录',
        'Agenda, decisions and a table of tasks': '议程、决定和任务表',
        'Checklist': '清单',
        'Tasks to tick off, in groups': '分组的待勾选任务',
        'The welcome example': '欢迎示例',
        'Shows what the editor can do': '展示编辑器的功能',
        'Start this document over': '重新开始当前文档',
        'Empties the text, keeps the pictures - "Undo" brings it back': '清空文本，保留图片，“撤销”可恢复',
        'Open a .md file (or a picture) from your computer (you can also drag it into the window)':
            '从电脑打开 .md 文件（或图片）（也可以拖入窗口）',
        'Open file…': '打开文件…',
        'Undo the last change (Ctrl+Z)': '撤销上一次更改（Ctrl+Z）',
        'Undo': '撤销',
        'Redo the change you just undid (Ctrl+Y)': '重做刚撤销的更改（Ctrl+Y）',
        'Redo': '重做',
        'Output': '输出',
        'Color theme': '配色主题',
        'Light theme': '浅色主题',
        'Dark theme': '深色主题',
        'Same as your system setting': '跟随系统设置',
        'Automatic theme (system setting)': '自动主题（系统设置）',
        'Let any AI write in this editor': '让任意 AI 在此编辑器中写作',
        'AI Assistant': 'AI 助手',
        'Save to your own server and embed the editor in your website': '保存到你自己的服务器，并将编辑器嵌入你的网站',
        'Save to server': '保存到服务器',
        'How it works and keyboard shortcuts (?)': '使用说明和键盘快捷键（?）',
        'Help': '帮助',
        'Save the document as a .md file (Ctrl+S)': '将文档保存为 .md 文件（Ctrl+S）',
        'Download .md': '下载 .md',
        'HTML, PDF, plain text and more (Ctrl+E)': 'HTML、PDF、纯文本等（Ctrl+E）',
        'Export…': '导出…',

        /* ---------- Views and work area ---------- */
        'View': '视图',
        'Edit': '编辑',
        'Preview': '预览',
        'Insert': '插入',
        'Markdown code': 'Markdown 代码',
        'Copy the Markdown to the clipboard': '将 Markdown 复制到剪贴板',
        'Copy code': '复制代码',
        'Copy': '复制',
        'Drag to change the width of the code area': '拖动以更改代码区宽度',
        'Drag to change the width': '拖动以更改宽度',
        'Formatting': '格式',
        'Bold (Ctrl+B)': '粗体（Ctrl+B）',
        'Bold': '粗体',
        'Italic (Ctrl+I)': '斜体（Ctrl+I）',
        'Italic': '斜体',
        'Strikethrough': '删除线',
        'Code in the text': '行内代码',
        'Link (Ctrl+K)': '链接（Ctrl+K）',
        'Heading': '标题',
        'Bulleted list': '项目符号列表',
        'Numbered list': '编号列表',
        'Task list': '任务列表',
        'Table': '表格',
        'Picture': '图片',
        'Insert picture': '插入图片',
        'Quote': '引文',
        'Code block': '代码块',
        'Math in the text (Ctrl+M)': '行内公式（Ctrl+M）',
        'Math': '公式',
        'Text size': '文字大小',
        'Smaller text in the preview': '预览中的文字更小',
        'Smaller text': '更小',
        'Normal text size': '正常文字大小',
        'Larger text in the preview': '预览中的文字更大',
        'Larger text': '更大',
        'Preview of the document: click text to edit it, Ctrl+click follows a link': '文档预览：点击文字可编辑，Ctrl+点击可打开链接',
        'Updating…': '正在更新…',
        'Insert, pictures and outline': '插入、图片和大纲',
        'Ready-made pieces: structure, text, math, symbols': '现成片段：结构、文本、公式、符号',
        'The pictures of this document': '本文档的图片',
        'Pictures': '图片',
        'The headings of the document': '文档的标题',
        'Outline': '大纲',
        'The headings of the document. Click one to go there in the code and in the preview.':
            '文档的标题。点击可跳转到代码和预览中的对应位置。',
        'No headings yet - start a line with # and a space.': '还没有标题，在行首输入 # 和一个空格即可。',
        'Open it here': '在这里打开',
        'Drop the .md file or picture here': '将 .md 文件或图片拖放到这里',

        'The document is empty - write Markdown on the left, or choose a template under "New".': '文档是空的，请在左侧编写 Markdown，或在“新建”中选择模板。',

        /* Problems above the code */
        'Hide': '隐藏',
        'Show': '显示',

        /* ---------- Insert tab ---------- */
        'Structure': '结构',
        'Heading 1': '标题 1',
        'Heading 2': '标题 2',
        'Heading 3': '标题 3',
        '# Heading': '# 标题',
        '## Heading': '## 标题',
        '### Heading': '### 标题',
        'Horizontal rule': '水平线',
        'Apply page breaks': '应用分页',
        'New page': '新页',
        'Document': '文档',
        '• Bulleted list': '• 项目符号列表',
        '1. Numbered list': '1. 编号列表',
        '☐ Task list': '☐ 任务列表',
        'Fold-out section': '折叠区',
        'Line break': '换行',
        'Text': '文本',
        '**bold** (Ctrl+B)': '**粗体**（Ctrl+B）',
        '*italic* (Ctrl+I)': '*斜体*（Ctrl+I）',
        '~~struck through~~': '~~删除线~~',
        'Link to a heading': '链接到标题',
        '[text](#heading)': '[文字](#标题)',
        '[text](https://…) (Ctrl+K)': '[文字](https://…)（Ctrl+K）',
        '![description](name.png)': '![描述](name.png)',
        'Footnote': '脚注',
        '[^1] at the cursor, the note at the end': '在光标处插入 [^1]，脚注放在末尾',
        'Key': '按键',
        'A key as on the keyboard: <kbd>Ctrl</kbd>': '键盘按键样式：<kbd>Ctrl</kbd>',
        '`code` between backticks': '用反引号括起的 `code`',
        '$x$ in the text': '正文中的 $x$',
        'Displayed': '独立公式',
        '$$ … $$ on its own lines': '单独成行的 $$ … $$',
        'Fraction': '分数',
        'Root': '根号',
        'x² Power': 'x² 幂',
        'x₁ Index': 'x₁ 下标',
        '∑ Sum': '∑ 求和',
        '∫ Integral': '∫ 积分',
        'lim Limit': 'lim 极限',
        '2×2 matrix': '2×2 矩阵',
        'Cases': '分段',
        'Greek letters': '希腊字母',
        'Symbols': '符号',
        'Pictures have their own tab:': '图片有单独的标签页：',

        /* ---------- Pictures tab ---------- */
        'Add pictures…': '添加图片…',
        'No pictures yet': '还没有图片',
        'Missing in this document': '本文档中缺少',
        'Add file…': '添加文件…',
        'Show where it is used': '显示使用位置',
        '![…](name) at the cursor': '在光标处插入 ![…](name)',
        'Rename - the code is changed along': '重命名，代码会同步修改',
        'Rename': '重命名',
        'Choose another file, keep the name': '选择另一个文件，保留名称',
        'Replace': '替换',
        'Download the picture': '下载图片',
        'Download': '下载',
        'Remove the picture from this document': '从本文档中移除图片',
        'Remove': '移除',
        'New name': '新名称',
        'Pictures belong to “': '图片属于“',
        '” and stay in your browser. Drop or paste them anywhere in the editor, or add them here;': '”，保存在你的浏览器中。可以在编辑器任意位置拖放或粘贴图片，也可以在这里添加；',
        'uses them.': '使用了它们。',

        /* ---------- Export ---------- */
        'Close': '关闭',
        'File name': '文件名',
        'HTML page (one file)': 'HTML 页面（单个文件）',
        'PDF (print or save as PDF)': 'PDF（打印或另存为 PDF）',
        'Plain text': '纯文本',
        'Markdown (.md)': 'Markdown（.md）',
        'Markdown with pictures (ZIP)': 'Markdown 及图片（ZIP）',
        'Result': '结果',
        'Download everything at once: .md, pictures, HTML and text': '一次下载全部：.md、图片、HTML 和文本',
        'All formats (ZIP)': '所有格式（ZIP）',
        'Print / Save as PDF': '打印 / 另存为 PDF',
        '(The HTML page - with its pictures and styles inside - is created when you download or copy it.)':
            '（HTML 页面会在下载或复制时生成，图片和样式都包含在内。）',

        /* ---------- My documents ---------- */
        'Search by name': '按名称搜索',
        'Search your documents': '搜索你的文档',
        'Open a .md file from your computer as a new document': '从电脑打开 .md 文件作为新文档',
        'New document': '新文档',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            '点击文档即可打开。文档只保存在此浏览器中，不会上传。清除浏览器的网站数据会删除它们，请下载需要保留的文档。',
        'Download every document as a .md file (with its pictures) in one ZIP': '将每个文档作为 .md 文件（含图片）打包成一个 ZIP 下载',
        'Download all (ZIP)': '全部下载（ZIP）',
        'Duplicate': '创建副本',
        'Download as .md': '下载为 .md',
        'Delete': '删除',
        'This document is open': '此文档已打开',
        'Click to open this document': '点击打开此文档',
        'No documents yet.': '还没有文档。',

        /* ---------- AI Assistant ---------- */
        'Any AI can write with you - ChatGPT, Claude, Gemini, Copilot.': '任何 AI 都能和你一起写作：ChatGPT、Claude、Gemini、Copilot。',
        'Connected AI': '已连接的 AI',
        'Connected to': '已连接到',
        'the AI sends its result there, and it opens here.': 'AI 会把结果发送到那里，然后在这里打开。',
        'What': '内容',
        'tells the AI': '告诉 AI',
        'The AI should': 'AI 应该',
        'Change “': '修改“',
        '”': '”',
        'Make a new document': '新建一个文档',
        'The AI\'s answer (or press Ctrl+V anywhere):': 'AI 的回答（或在任意位置按 Ctrl+V）：',
        'The document travels in the link after the “#”, which no server sees. What you paste into your AI is handled by its provider.':
            '文档放在链接中“#”之后的部分，任何服务器都看不到。你粘贴到 AI 中的内容由其提供商处理。',
        'The prompt - copy it with Ctrl+C': '提示词，用 Ctrl+C 复制',
        'Copy prompt': '复制提示词',
        /* the step with the link, also when the editor sets it anew (text by text) */
        'The AI answers with a link: click it, or paste the whole answer below.': 'AI 会回复一个链接：点击它，或将完整回答粘贴到下方。',
        'takes it back.': '可撤回。',
        'The AI answers with a link:': 'AI 会回复一个链接：',
        'paste its whole answer below': '将完整回答粘贴到下方',
        '(a clicked link opens a separate editor).': '（点击链接会打开另一个编辑器）。',
        '(no key yet)': '（还没有密钥）',
        '(key valid while the editor is open)': '（编辑器打开期间密钥有效）',
        'The link could not be read': '无法读取该链接',
        'The document in this link is incomplete or damaged. If the AI\'s link was split over several lines (as in a terminal), copy the whole answer and paste it into the editor with Ctrl+V - the editor joins the lines.':
            '此链接中的文档不完整或已损坏。如果 AI 的链接被拆成了多行（例如在终端中），请复制完整回答，在编辑器中按 Ctrl+V 粘贴，编辑器会把各行连起来。',
        'Loading…': '正在加载…',
        'Taken over by your editor': '已交给你的编辑器',
        'The document is now in the Markdown Editor tab you already had open. Switch to that tab, or open it here.':
            '文档现已在你之前打开的 Markdown 编辑器标签页中。请切换到那个标签页，或在这里打开。',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)': '此处不允许复制，内容已在下方选中：请按 Ctrl+C（⌘C）',
        'Paste it into your AI and say what it should write.': '将其粘贴到你的 AI 中，并说明要写什么。',
        'Prompt copied - paste it into your AI and say what it should write': '提示词已复制，粘贴到你的 AI 中并说明要写什么',
        'This link is incomplete or damaged - please ask the AI to send it again': '此链接不完整或已损坏，请让 AI 重新发送',

        /* ---------- Save to your server ---------- */
        'Save to your server': '保存到你的服务器',
        'Webhook address': 'Webhook 地址',
        'https://example.com/api/markdown': 'https://example.com/api/markdown',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '（可选，以“Authorization: Bearer …”发送；保留到关闭此标签页为止）',
        'Send automatically a few seconds after each change (otherwise only when you click': '每次更改几秒后自动发送（否则仅在点击',
        'or press Ctrl+S)': '或按 Ctrl+S 时发送）',
        'Only for “': '仅用于“',
        '” (other documents use the general address)': '”（其他文档使用通用地址）',
        'What your server receives': '你的服务器收到的内容',
        'A POST request with JSON (your server must allow CORS from https://md.giit.ch):': '一个带 JSON 的 POST 请求（你的服务器必须允许来自 https://md.giit.ch 的 CORS）：',
        'Embed the editor in your website': '将编辑器嵌入你的网站',
        'Send now': '立即发送',
        'Save setting': '保存设置',

        /* ---------- Help ---------- */
        'How it works': '使用说明',
        'Keyboard shortcuts': '键盘快捷键',
        'Bold / italic around the selected text': '将选中文字设为粗体 / 斜体',
        'Link': '链接',
        'Show the cursor\'s place in the preview': '在预览中显示光标位置',
        'Indent / outdent': '缩进 / 取消缩进',
        'Undo / redo': '撤销 / 重做',
        'Save (download .md, or to your server) / export': '保存（下载 .md 或保存到服务器）/ 导出',
        'Print / save as PDF': '打印 / 另存为 PDF',
        'Problems (a missing picture, a link to a heading that is not there, a code block that is never closed, a table row with too many cells) are listed above the code - click one to go there.':
            '问题（缺少图片、链接到不存在的标题、代码块未闭合、表格行单元格过多）会列在代码上方，点击即可跳转。',

        /* ---------- Messages ---------- */
        'The browser storage is full - download and delete documents under "My documents"': '浏览器存储已满，请在“我的文档”中下载并删除文档',
        'The browser storage is full - delete or download documents under "My documents" first': '浏览器存储已满，请先在“我的文档”中删除或下载文档',
        'The browser storage is full - delete or download some documents first': '浏览器存储已满，请先删除或下载一些文档',
        'The browser storage is full': '浏览器存储已满',
        'Nothing to undo': '没有可撤销的操作',
        'Nothing to redo': '没有可重做的操作',
        'This text changed in the code - wait for the preview, then try again': '此文字在代码中已更改，请等预览更新后再试',
        'This box changed in the code - wait for the preview, then try again': '此复选框在代码中已更改，请等预览更新后再试',
        'This picture changed in the code - wait for the preview, then try again': '此图片在代码中已更改，请等预览更新后再试',
        'The code changed meanwhile - the edit was not used': '代码在此期间已更改，未采用此次编辑',
        'This anchor is not in the document': '文档中没有此锚点',
        'The picture is removed from this document. Places that use it show its name in a frame. "Undo" does not bring it back.':
            '图片已从本文档中移除。使用它的位置会在框中显示其名称。“撤销”无法恢复。',
        'Pictures can be PNG, JPG, GIF, WebP, SVG or PDF': '图片可以是 PNG、JPG、GIF、WebP、SVG 或 PDF',
        'The picture is larger than 12 MB': '图片大于 12 MB',
        'The picture could not be read': '无法读取图片',
        'This document is empty already': '此文档已经是空的',
        'Everything is removed; the pictures of the document stay. "Undo" brings the text back as long as the page is open.':
            '所有内容将被删除，文档的图片保留。只要页面未关闭，“撤销”即可恢复文本。',
        'Start over': '重新开始',
        'The file is larger than 8 MB': '文件大于 8 MB',
        'Downloaded': '已下载',
        'Copied to the clipboard': '已复制到剪贴板',
        'This browser does not allow copying this': '此浏览器不允许复制此内容',
        'Code copied': '代码已复制',
        '.md with its pictures downloaded (ZIP)': '已下载 .md 及其图片（ZIP）',
        '.md downloaded': '已下载 .md',
        'ZIP downloaded: .md, pictures, HTML and text': '已下载 ZIP：.md、图片、HTML 和文本',
        'Add': '添加',
        'The document and its pictures are removed from this browser for good. Download it first if you want to keep a copy.':
            '文档及其图片将从此浏览器中永久删除。如需保留副本，请先下载。',

        /* ---------- Problems the preview finds (markdown.js) ---------- */
        '$$ is never closed - add a line with $$ after the formula': '$$ 没有闭合，请在公式后添加一行 $$',

        /* Short words of the interface that other packs keep in English */
        'Code': '代码',
        'Export': '导出',
        'Format': '格式',
        'Name': '名称',
        'OK': '确定',
    },

    html: {

        '<b>Export</b> also has <b>Open in another editor</b>: it converts the document and opens it as a new document there. Anything the other format cannot hold is listed first.':

            '<b>导出</b>中还有<b>在其他编辑器中打开</b>：文档会被转换，并在那里作为新文档打开。其他格式无法保留的内容会先列出。',

        '<b>Insert</b> &gt; <b>New page</b> sets a page break for printing and PDF; the preview shows it as a dashed line. Headings stay with their text and tables and pictures are not cut. In Export, <b>Apply page breaks</b> turns them off for a PDF.':

            '<b>插入</b> &gt; <b>新页</b> 为打印和 PDF 设置分页符；预览中显示为虚线。标题与其正文保持在一起，表格和图片不会被切开。 在<b>导出</b>中，<b>应用分页</b>可为 PDF 关闭它们。',
        /* Export */
        'The print dialog opens with the document only. Choose <b>Save as PDF</b> (or "Microsoft Print to PDF") as the printer. In Chrome and Edge, untick "Headers and footers" if the browser offers it. The text in the PDF stays sharp and can be selected.':
            '打印对话框打开时只包含文档。打印机请选择<b>另存为 PDF</b>（或“Microsoft Print to PDF”）。在 Chrome 和 Edge 中，如果浏览器提供“页眉和页脚”选项，请取消勾选。PDF 中的文字保持清晰，并且可以选中。',

        /* AI Assistant */
        'Click <b>Copy prompt</b>.': '点击<b>复制提示词</b>。',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'AI 会回复一个链接：点击它，或将完整回答粘贴到下方。<b>撤销</b>可撤回。',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'AI 会回复一个链接：<b>将完整回答粘贴到下方</b>（点击链接会打开另一个编辑器）。<b>撤销</b>可撤回。',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            '编辑器可以将每个保存的版本发送到你自己的服务器（<b>Webhook</b>），让你的作品保存在你想要的地方。在此输入地址之前，不会发送任何内容。',
        'Also possible: <code>?src=&lt;URL of a .md file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>mdeditor:ai</code>, <code>mdeditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            '还可以：<code>?src=&lt;URL of a .md file&gt;</code> 打开文件，<code>&amp;webhook=&lt;URL&gt;</code> 将此文档保存到该地址。编辑器也可以在单独的窗口中打开（<code>?embed=window</code>），你的页面还可以向它提供自己的 AI 提示词和会话密钥，让 AI 把结果发送到你的服务器（<code>mdeditor:ai</code>、<code>mdeditor:key-request</code>），参见编辑器下方的“在你自己的网站上使用编辑器”。详情见 <a href="/llms.txt">llms.txt</a>。',

        /* Help */
        '<b>Write</b> Markdown on the left - or start with <b>New</b> and one of the templates. The preview in the middle shows the document as you type.':
            '在左侧<b>编写</b> Markdown，或从<b>新建</b>中选择一个模板开始。中间的预览会在你输入时显示文档。',
        '<b>Click text in the preview</b> to edit it right there: the cursor is where you clicked, and the code\'s cursor goes to the same place. <b>Enter</b> starts a new paragraph; <b>Shift+Enter</b> inserts a line break. <b>Ctrl+Enter</b> (<b>Cmd+Enter</b> on macOS) or a click elsewhere applies the edit; <b>Escape</b> cancels. Each edit is one step for Undo. Characters such as <code>*</code> or <code>_</code> are escaped so they stay text. A click on math, a picture or code jumps to its place in the code instead. <b>Ctrl</b> + click follows a link. A check box of a task list ticks the task in the code.':
            '<b>点击预览中的文字</b>即可直接编辑：光标在你点击的位置，代码光标也会移到同一位置。<b>Enter</b> 开始新段落；<b>Shift+Enter</b> 插入换行。按 <b>Ctrl+Enter</b>（macOS 上为 <b>Cmd+Enter</b>）或点击其他地方可应用编辑；<b>Escape</b> 取消。每次编辑都可一步撤销。<code>*</code> 或 <code>_</code> 等字符会被转义，保持为文本。点击公式、图片或代码，则会跳转到代码中的对应位置。<b>Ctrl</b> + 点击可打开链接。勾选任务列表的复选框会在代码中勾选该任务。',
        '<b>Insert</b> on the right has ready-made pieces (headings, lists, tables, math, symbols); <b>Pictures</b> holds the pictures of the document; <b>Outline</b> lists the headings.':
            '右侧的<b>插入</b>提供现成片段（标题、列表、表格、公式、符号）；<b>图片</b>存放文档的图片；<b>大纲</b>列出各个标题。',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser.':
            '<b>我的文档</b>（左上角的文件夹按钮）列出此浏览器中保存的所有文档。',
        '<b>Export</b> makes an HTML page, a PDF (via the print dialog) or plain text. <b>Download .md</b> saves the code (with its pictures as ZIP).':
            '<b>导出</b>可生成 HTML 页面、PDF（通过打印对话框）或纯文本。<b>下载 .md</b> 保存代码（带图片时为 ZIP）。',
        'The preview understands CommonMark with GitHub\'s tables, task lists, strikethrough, autolinks and footnotes, and math in <code>$…$</code> and <code>$$…$$</code>. HTML in the Markdown is shown without scripts, styles, frames and forms.':
            '预览支持 CommonMark 以及 GitHub 的表格、任务列表、删除线、自动链接和脚注，还支持 <code>$…$</code> 和 <code>$$…$$</code> 中的公式。Markdown 中的 HTML 显示时不含脚本、样式、框架和表单。',
        'Math: <code>$…$</code> around the selection': '公式：用 <code>$…$</code> 包住所选内容',
        'Lines in or out of a comment (<code>&lt;!-- --&gt;</code>)': '注释或取消注释行（<code>&lt;!-- --&gt;</code>）',
        '<kbd>Enter</kbd> in a list starts the next item (<code>-</code>, <code>1.</code>, <code>- [ ]</code>, <code>&gt;</code>); on an empty item it ends the list. <code>* _ ` ~ $ [ (</code> close by themselves around a selection.':
            '在列表中按 <kbd>Enter</kbd> 会开始下一项（<code>-</code>、<code>1.</code>、<code>- [ ]</code>、<code>&gt;</code>）；在空项上按则结束列表。<code>* _ ` ~ $ [ (</code> 会自动包住所选内容。',
    },

    patterns: [
        /* ---------- Status lines ---------- */
        ['^(\\d+) lines · ([\\d.]+ K?B) · (\\d+) (?:word|words)$', '$1 行 · $2 · $3 词'],
        ['^\\.md and (\\d+) (?:picture|pictures)$', '.md 和 $1 张图片'],
        ['^([\\d,]+) bytes$', '$1 字节'],
        ['^\\d{1,3}(?:,\\d{3})+$', '$&'],

        /* Problems above the code */
        ['^(\\d+) (?:error|errors)$', '$1 个错误'],
        ['^· (\\d+) (?:note|notes)$', '· $1 条提示'],
        ['^(\\d+) (?:note|notes)$', '$1 条提示'],
        ['^Line (\\d+)$', '第 $1 行'],
        ['^The preview failed: (.*)$', '预览失败：$1'],
        ['^The preview stopped at an unexpected problem: (.*)$', '预览因意外问题而停止：$1'],
        ['^Picture "(.+)" not found - drag the picture into the editor \\(or add it in the Pictures tab\\)$', '找不到图片“$1”，请将图片拖入编辑器（或在“图片”标签页中添加）'],
        ['^The link to "(.+)" has no heading or anchor of that name$', '链接指向“$1”，但没有同名的标题或锚点'],
        ['^This code block \\((.+)\\) is never closed - add a line with (.+) after the code$', '此代码块（$1）没有闭合，请在代码后添加一行 $2'],
        ['^This table row has (\\d+) (?:cell|cells), the header has (\\d+)$', '此表格行有 $1 个单元格，表头有 $2 个'],
        ['^Math: (.*)$', '公式：$1'],

        /* ---------- Pictures tab ---------- */
        ['^(\\d+) (?:picture|pictures) · (.+)$', '$1 张图片 · $2'],
        ['^Choose the file for (.+)$', '选择用于 $1 的文件'],
        ['^Insert !\\[…\\]\\((.+)\\) at the cursor$', '在光标处插入 ![…]($1)'],
        ['^used (\\d+)×$', '使用了 $1 次'],
        ['^(.* · )?not used yet$', (m, a) => `${a || ''}尚未使用`],

        /* ---------- Top bar and My documents ---------- */
        ['^"(.+)" is open\\. My documents: open, rename, duplicate or delete your documents \\(Ctrl\\+O\\)$', '“$1”已打开。我的文档：打开、重命名、复制或删除你的文档（Ctrl+O）'],
        ['^Start "(.+)" over\\?$', '重新开始“$1”？'],
        ['^Start "(.+)" over$', '重新开始“$1”'],
        ['^(\\d+) (?:document|documents) · (.+) in this browser$', (m, k, s) => `${k} 个文档 · 此浏览器中 ${formatSize(s)}`],
        ['^No document named "(.*)"\\.$', '没有名为“$1”的文档。'],
        ['^Open now · (.+)$', (m, s) => `当前打开 · ${formatSize(s)}`],
        ['^(just now|yesterday|\\d+ min ago|\\d+ h ago|[A-Z][a-z]{2} \\d{1,2}, \\d{4}) · (.+)$', (m, w, s) => `${formatTime(w)} · ${formatSize(s)}`],
        ['^(.+) \\(open now\\)$', '$1（当前打开）'],
        ['^ZIP with (\\d+) (?:document|documents) downloaded$', '已下载含 $1 个文档的 ZIP'],

        /* ---------- AI Assistant ---------- */
        ['^Part (\\d+) of (\\d+) received$', '已收到第 $1 部分，共 $2 部分'],
        ['^Open the other (?:link|links) from the AI too \\(still missing: part (.+)\\)\\.$',
            '请同时打开 AI 的其他链接（仍缺：第 $1 部分）。'],
        ['^Part (\\d+) of (\\d+) received - paste the other (?:link|links) too \\(missing: (.+)\\)$', '已收到第 $1 部分，共 $2 部分，请同时粘贴其他链接（缺少：$3）'],
        ['^The AI sends the document to (.+) with a key that only works for this session\\. What you paste into your AI is handled by its provider\\.$',
            'AI 会用仅对本次会话有效的密钥将文档发送到 $1。你粘贴到 AI 中的内容由其提供商处理。'],
        ['^The AI sends its result to (.+) by itself, and it opens here\\. If it answers with a link, paste its answer below\\.$',
            'AI 会自行将结果发送到 $1，然后在这里打开。如果它回复的是链接，请将回答粘贴到下方。'],
        ['^No key from (.+) - the prompt asks the AI for a link instead$', '没有来自 $1 的密钥，提示词改为请 AI 回复链接'],
        ['^Prompt copied - the AI sends its result to (.+)$', '提示词已复制，AI 会将结果发送到 $1'],

        /* ---------- Messages with names ---------- */
        ['^"(.+)" is now "(.+)"$', '“$1”已改名为“$2”'],
        ['^Remove "(.+)"\\?$', '移除“$1”？'],
        ['^"(.+)" now shows the new picture$', '“$1”现在显示新图片'],
        ['^Picture "(.+)" added to "(.+)"$', '图片“$1”已添加到“$2”'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '“$1”现在是空的，“撤销”可恢复'],
        ['^"(.+)" opened$', '已打开“$1”'],
        ['^New document "(.+)" - your other documents are under "My documents"$', '新文档“$1”，其他文档在“我的文档”中'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$', '来自 AI 的新文档“$1”，其他文档保持不变'],
        ['^"(.+)" is not a Markdown file$', '“$1”不是 Markdown 文件'],
        ['^Opened "(.+)" - it is now in "My documents"$', '已打开“$1”，它现在在“我的文档”中'],
        ['^Opened "(.+)" with (\\d+) (?:picture|pictures)$', '已打开“$1”及 $2 张图片'],
        ['^"(.+)" could not be opened: (.*)$', (m, f, why) => `无法打开“${f}”：${ZIP[why] || why}`],
        ['^Document received - the preview found (\\d+) (?:problem|problems), see above the code$', '已收到文档，预览发现 $1 个问题，见代码上方'],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '“$1”已被 AI 修改，“撤销”可撤回'],
        ['^"(.+)" duplicated$', '已复制“$1”'],
        ['^Delete "(.+)"\\?$', '删除“$1”？'],
        ['^"(.+)" deleted$', '已删除“$1”'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', '打开 $1'],
    ],
};
