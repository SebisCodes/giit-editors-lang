/* Simplified Chinese texts of the HTML editor: the bar, the work area (code, preview,
   document settings, insert, files, outline), its dialogs and messages,
   and the problems the editor finds in the code. What all editors share is
   in common.js; how the dictionaries are used is described in
   i18n.js. Names of documents, files, elements and attributes stay as they
   are: the patterns copy them into the Simplified Chinese text. */

import { formatTime, formatSize } from './format.js';

/* "123 bytes" -> "123 字节" (KB and MB stay as they are) */

/* Month names as numbers, for dates written as "2026年10月25日" */

/* When a document was last changed (files.js): "just now", "5 min ago", "Oct 25, 2026" … */

/* Reasons a ZIP could not be opened (app.js openZip) */
const ZIP = { 'it is not a ZIP file': '它不是 ZIP 文件', 'there is no .html file in it': '其中没有 .html 文件' };

export default {
    text: {
        // Editing in place: Enter and Shift+Enter
        "Editing in the preview - Enter: new paragraph, Shift+Enter: new line, Ctrl+Enter or a click elsewhere keeps it, Escape cancels": "在预览中编辑：Enter 新建段落，Shift+Enter 换行，Ctrl+Enter 或点击别处确认，Escape 取消",
        /* ---------- Top bar ---------- */
        'HTML Editor - home': 'HTML 编辑器首页',
        'HTML Editor': 'HTML 编辑器',
        'File': '文件',
        'My documents (Ctrl+O)': '我的文档（Ctrl+O）',
        'My documents': '我的文档',
        'New document, or start this one over': '新建文档，或重新开始当前文档',
        'New': '新建',
        'New blank page': '新建空白页面',
        'An empty HTML page - your other documents stay as they are': '空白 HTML 页面，其他文档保持不变',
        'Landing page': '落地页',
        'A big header, three features and a footer': '大标题区、三个特色和页脚',
        'Article': '文章',
        'Title, sections, a quote and a list': '标题、章节、引文和列表',
        'Contact form': '联系表单',
        'Name, email and message with labels': '带标签的姓名、电子邮件和留言',
        'Email newsletter': '电子邮件简报',
        'An email layout with a table': '用表格排版的电子邮件',
        'The welcome example': '欢迎示例',
        'Shows what the editor can do': '展示编辑器的功能',
        'Start this document over': '重新开始当前文档',
        'Keeps the head, empties the body - "Undo" brings it back': '保留 head，清空 body，“撤销”可恢复',
        'Open an .html file (or a picture, stylesheet or ZIP) from your computer (you can also drag it into the window)':
            '从电脑打开 .html 文件（或图片、样式表、ZIP）（也可以拖入窗口）',
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
        'Save the page as an .html file - with its files as ZIP (Ctrl+S)': '将页面保存为 .html 文件，附带文件时打包为 ZIP（Ctrl+S）',
        'Download .html': '下载 .html',
        'HTML, one file with everything inside, ZIP, PDF and text (Ctrl+E)': 'HTML、包含一切的单个文件、ZIP、PDF 和文本（Ctrl+E）',
        'Export…': '导出…',

        /* ---------- Views and work area ---------- */
        'View': '视图',
        'Edit': '编辑',
        'Side panel': '侧边栏',
        'Preview': '预览',
        'Document': '文档',
        'HTML code': 'HTML 代码',
        'Copy the HTML code to the clipboard': '将 HTML 代码复制到剪贴板',
        'Copy code': '复制代码',
        'Copy': '复制',
        'Indent every line by the depth of its elements': '按元素层级缩进每一行',
        'Tidy up': '整理',
        'Drag to change the width of the code area': '拖动以更改代码区宽度',
        'Drag to change the width': '拖动以更改宽度',
        'Formatting': '格式',
        'Bold (Ctrl+B)': '粗体（Ctrl+B）',
        'Bold': '粗体',
        'Italic (Ctrl+I)': '斜体（Ctrl+I）',
        'Italic': '斜体',
        'Underline (Ctrl+U)': '下划线（Ctrl+U）',
        'Underline': '下划线',
        'Heading': '标题',
        'Bulleted list': '项目符号列表',
        'Numbered list': '编号列表',
        'Table': '表格',
        'Picture': '图片',
        'Width of the preview': '预览宽度',
        'As wide as the preview': '与预览区同宽',
        'Full width': '全宽',
        'Tablet (768 pixels wide)': '平板（768 像素宽）',
        'Tablet width': '平板宽度',
        'Phone (390 pixels wide)': '手机（390 像素宽）',
        'Phone width': '手机宽度',
        'Preview of the page: click text to edit it, or anything else to jump to its place in the code':
            '页面预览：点击文字可编辑，点击其他内容可跳转到代码中的对应位置',
        'Preview of the page': '页面预览',
        'Updating…': '正在更新…',
        'Title, language, description and the stylesheets of the page': '页面的标题、语言、描述和样式表',
        'Ready-made pieces: structure, text, lists, media, forms, head': '现成片段：结构、文本、列表、媒体、表单、head',
        'Insert': '插入',
        'The pictures and other files of this document': '本文档的图片和其他文件',
        'Files': '文件',
        'The headings of the page': '页面的标题',
        'Outline': '大纲',
        'The headings of the page. Click one to go there in the code and in the preview.':
            '页面的标题。点击可跳转到代码和预览中的对应位置。',
        'No headings yet - add one with <h1> … <h6>.': '还没有标题，可用 <h1> … <h6> 添加。',
        'Open it here': '在这里打开',
        'Drop the .html file, picture or stylesheet here': '将 .html 文件、图片或样式表拖放到这里',

        /* Problems above the code */
        'Hide': '隐藏',
        'Show': '显示',

        /* ---------- Insert tab ---------- */
        'Structure': '结构',
        'Heading 1': '标题 1',
        'Heading 2': '标题 2',
        'Heading 3': '标题 3',
        'Heading 4': '标题 4',
        'Paragraph': '段落',
        'Section': '节',
        'Header': '页眉',
        'Navigation bar': '导航栏',
        'Main content': '主要内容',
        'Footer': '页脚',
        'Box': '方框',
        'Fold-out (details)': '折叠区（details）',
        'Dividing line': '分隔线',
        'Apply page breaks': '应用分页',
        'New page': '新页',
        'Line break': '换行',
        'Comment': '注释',
        'Lists and tables': '列表和表格',
        '• Bulleted list': '• 项目符号列表',
        '1. Numbered list': '1. 编号列表',
        'Description list': '描述列表',
        'Highlighted': '突出显示',
        'Small print': '小号字',
        'Code in the text': '行内代码',
        'x² Superscript': 'x² 上标',
        'x₁ Subscript': 'x₁ 下标',
        'Quote': '引文',
        'Program code': '程序代码',
        'Inline part (span)': '行内部分（span）',
        'Media': '媒体',
        'Figure with caption': '带题注的插图',
        'Video player': '视频播放器',
        'Audio player': '音频播放器',
        'The files of the page have their own tab:': '页面的文件有单独的标签页：',
        'Forms': '表单',
        'Form': '表单',
        'Text field': '文本框',
        'Email field': '电子邮件字段',
        'Text area': '多行文本框',
        'Choice list': '下拉列表',
        'Tick box': '复选框',
        'Radio buttons': '单选按钮',
        'Button': '按钮',
        'Head': '头部',
        'Character set': '字符集',
        'The character set: <meta charset="utf-8">': '字符集：<meta charset="utf-8">',
        'Fits phone screens: <meta name="viewport">': '适配手机屏幕：<meta name="viewport">',
        'Description': '描述',
        'For search engines: <meta name="description">': '供搜索引擎使用：<meta name="description">',
        'Shared links': '分享链接',
        'Title, description and picture for shared links (Open Graph)': '分享链接的标题、描述和图片（Open Graph）',
        'Stylesheet file': '样式表文件',
        'A stylesheet file: <link rel="stylesheet">': '样式表文件：<link rel="stylesheet">',
        'Style block': '样式块',
        'CSS in the page: <style> … </style>': '页面中的 CSS：<style> … </style>',
        'Tab icon': '标签页图标',
        'The icon in the browser tab: <link rel="icon">': '浏览器标签页中的图标：<link rel="icon">',
        'Special characters': '特殊字符',
        'Insert &nbsp; (no-break space)': '插入 &nbsp;（不换行空格）',
        'Insert &shy; (soft hyphen)': '插入 &shy;（软连字符）',

        /* ---------- Files tab ---------- */
        'Add files…': '添加文件…',
        'No files yet': '还没有文件',
        'Missing in this document': '本文档中缺少',
        'Add file…': '添加文件…',
        'Show where it is used': '显示使用位置',
        'A picture (img) at the cursor': '在光标处插入图片（img）',
        'A link to the stylesheet in the head': '在 head 中链接该样式表',
        'A reference to the file at the cursor': '在光标处插入对该文件的引用',
        'A figure with caption at the cursor': '在光标处插入带题注的插图',
        'As figure': '作为插图',
        'Rename - the code is changed along': '重命名，代码会同步修改',
        'Rename': '重命名',
        'Choose another file, keep the name': '选择另一个文件，保留名称',
        'Replace': '替换',
        'Download the file': '下载文件',
        'Download': '下载',
        'Remove the file from this document': '从本文档中移除文件',
        'Remove': '移除',
        'New name': '新名称',

        /* ---------- Document tab ---------- */
        'Title': '标题',
        '(in the browser tab and in search results)': '（显示在浏览器标签页和搜索结果中）',
        'Language': '语言',
        '(for search engines)': '（供搜索引擎使用）',
        'Author': '作者',
        'Characters as UTF-8 (meta charset)': '字符采用 UTF-8（meta charset）',
        'Fits phone screens (meta viewport)': '适配手机屏幕（meta viewport）',
        'Linked stylesheets': '已链接的样式表',
        'No stylesheet is linked.': '没有链接样式表。',
        'Add a .css file in the Files tab to link it here.': '在“文件”标签页中添加 .css 文件即可在此链接。',
        'Stylesheet of this document': '本文档的样式表',
        'Link it': '链接',
        'from the web': '来自网络',
        'a file of this document': '本文档的文件',
        'missing': '缺失',
        'Show it in the code': '在代码中显示',
        'Not set': '未设置',
        'English (en)': '英语（en）',
        'English, US (en-US)': '英语，美国（en-US）',
        'English, UK (en-GB)': '英语，英国（en-GB）',
        'German (de)': '德语（de）',
        'German, Switzerland (de-CH)': '德语，瑞士（de-CH）',
        'German, Germany (de-DE)': '德语，德国（de-DE）',
        'French (fr)': '法语（fr）',
        'Italian (it)': '意大利语（it）',
        'Spanish (es)': '西班牙语（es）',
        'Portuguese (pt)': '葡萄牙语（pt）',
        'Dutch (nl)': '荷兰语（nl）',
        'elements · about': '个元素 · 约',
        'element · about': '个元素 · 约',
        'words ·': '词 ·',
        'headings ·': '个标题 ·',
        'heading ·': '个标题 ·',
        'files': '个文件',
        'file': '个文件',
        'Make it a complete page': '补全为完整页面',

        /* ---------- Export ---------- */
        'Close': '关闭',
        'File name': '文件名',
        'Page': '页面',
        'HTML page (.html)': 'HTML 页面（.html）',
        'One HTML file with its files inside': '包含其文件的单个 HTML 文件',
        'HTML with its files (ZIP)': 'HTML 及其文件（ZIP）',
        'PDF (print or save as PDF)': 'PDF（打印或另存为 PDF）',
        'Plain text': '纯文本',
        'Result': '结果',
        'Download everything at once: .html, its files, the HTML with the files inside and the text':
            '一次下载全部：.html、其文件、内含文件的 HTML 以及文本',
        'All formats (ZIP)': '所有格式（ZIP）',
        'Print / Save as PDF': '打印 / 另存为 PDF',
        '(The page with its files inside is created when you download or copy it.)':
            '（内含文件的页面会在下载或复制时生成。）',

        /* ---------- My documents ---------- */
        'Search by name': '按名称搜索',
        'Search your documents': '搜索你的文档',
        'Open an .html file from your computer as a new document': '从电脑打开 .html 文件作为新文档',
        'New document': '新文档',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            '点击文档即可打开。文档只保存在此浏览器中，不会上传。清除浏览器的网站数据会删除它们，请下载需要保留的文档。',
        'Download every document as an .html file (with its files) in one ZIP': '将每个文档作为 .html 文件（含其文件）打包成一个 ZIP 下载',
        'Download all (ZIP)': '全部下载（ZIP）',
        'Duplicate': '创建副本',
        'Download as .html': '下载为 .html',
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
        'The document is now in the HTML Editor tab you already had open. Switch to that tab, or open it here.':
            '文档现已在你之前打开的 HTML 编辑器标签页中。请切换到那个标签页，或在这里打开。',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)': '此处不允许复制，内容已在下方选中：请按 Ctrl+C（⌘C）',
        'Paste it into your AI and say what it should write.': '将其粘贴到你的 AI 中，并说明要写什么。',
        'Prompt copied - paste it into your AI and say what it should write': '提示词已复制，粘贴到你的 AI 中并说明要写什么',
        'This link is incomplete or damaged - please ask the AI to send it again': '此链接不完整或已损坏，请让 AI 重新发送',

        /* ---------- Save to your server ---------- */
        'Save to your server': '保存到你的服务器',
        'Webhook address': 'Webhook 地址',
        'https://example.com/api/html': 'https://example.com/api/html',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '（可选，以“Authorization: Bearer …”发送；保留到关闭此标签页为止）',
        'Send automatically a few seconds after each change (otherwise only when you click': '每次更改几秒后自动发送（否则仅在点击',
        'or press Ctrl+S)': '或按 Ctrl+S 时发送）',
        'Only for “': '仅用于“',
        '” (other documents use the general address)': '”（其他文档使用通用地址）',
        'What your server receives': '你的服务器收到的内容',
        'A POST request with JSON (your server must allow CORS from https://html.giit.ch):': '一个带 JSON 的 POST 请求（你的服务器必须允许来自 https://html.giit.ch 的 CORS）：',
        'Embed the editor in your website': '将编辑器嵌入你的网站',
        'Send now': '立即发送',
        'Save setting': '保存设置',

        /* ---------- Help ---------- */
        'How it works': '使用说明',
        'Keyboard shortcuts': '键盘快捷键',
        'Bold / italic / underline the selected text': '将选中文字设为粗体 / 斜体 / 下划线',
        'Show the cursor\'s place in the preview': '在预览中显示光标位置',
        'Indent / outdent': '缩进 / 取消缩进',
        'Undo / redo': '撤销 / 重做',
        'Save (download .html, or to your server) / export': '保存（下载 .html 或保存到服务器）/ 导出',
        'Print / save as PDF': '打印 / 另存为 PDF',

        /* ---------- Messages ---------- */
        'The browser storage is full - download and delete documents under "My documents"': '浏览器存储已满，请在“我的文档”中下载并删除文档',
        'The browser storage is full - delete or download documents under "My documents" first': '浏览器存储已满，请先在“我的文档”中删除或下载文档',
        'The browser storage is full - delete or download some documents first': '浏览器存储已满，请先删除或下载一些文档',
        'The browser storage is full': '浏览器存储已满',
        'Nothing to undo': '没有可撤销的操作',
        'Nothing to redo': '没有可重做的操作',
        'The code changed meanwhile - the edit was not used': '代码在此期间已更改，未采用此次编辑',
        'The code changed meanwhile - the picture was not moved': '代码在此期间已更改，图片未移动',
        'The file is removed from this document. Places that use it show nothing. "Undo" does not bring it back.':
            '文件已从本文档中移除。使用它的位置将不显示任何内容。“撤销”无法恢复。',
        'A document can keep pictures, stylesheets, scripts, fonts, PDFs, audio and video': '文档可以包含图片、样式表、脚本、字体、PDF、音频和视频',
        'The file is larger than 12 MB': '文件大于 12 MB',
        'The file could not be read': '无法读取文件',
        'The code is now a complete page': '代码已补全为完整页面',
        'The code is tidy already': '代码已经很整齐',
        'Code tidied up': '代码已整理',
        'This document is empty already': '此文档已经是空的',
        'Everything between <body> and </body> is removed; the head (title, styles, meta tags) stays. "Undo" brings it back as long as the page is open.':
            '<body> 与 </body> 之间的所有内容将被删除；head（标题、样式、meta 标签）保留。只要页面未关闭，“撤销”即可恢复。',
        'Everything is removed. "Undo" brings it back as long as the page is open.': '所有内容将被删除。只要页面未关闭，“撤销”即可恢复。',
        'Start over': '重新开始',
        'The file is larger than 8 MB': '文件大于 8 MB',
        'HTML pasted from the clipboard - "Undo" brings the old code back': '已从剪贴板粘贴 HTML，“撤销”可恢复原代码',
        'This browser does not allow printing here': '此浏览器不允许在这里打印',
        'Downloaded': '已下载',
        'ZIP downloaded: .html, its files, the page as one file and the text': '已下载 ZIP：.html、其文件、单文件页面和文本',
        'Copied to the clipboard': '已复制到剪贴板',
        'This browser does not allow copying this': '此浏览器不允许复制此内容',
        'Code copied': '代码已复制',
        '.html with its files downloaded (ZIP)': '已下载 .html 及其文件（ZIP）',
        '.html downloaded': '已下载 .html',
        'Add': '添加',
        'The document and its files are removed from this browser for good. Download it first if you want to keep a copy.':
            '文档及其文件将从此浏览器中永久删除。如需保留副本，请先下载。',

        /* ---------- Problems the editor finds (html.js) ---------- */
        'The comment <!-- is never closed - add -->': '注释 <!-- 没有闭合，请添加 -->',
        '<img> without alt - describe the picture (alt="…"), or alt="" if it only decorates': '<img> 缺少 alt，请描述图片（alt="…"），若仅作装饰则用 alt=""',
        'No <!DOCTYPE html> at the top - browsers show the page in an older mode (quirks mode)': '顶部没有 <!DOCTYPE html>，浏览器会以旧模式（怪异模式）显示页面',

        /* Short words of the interface that other packs keep in English */
        'Code': '代码',
        'Export': '导出',
        'Format': '格式',
        'Link': '链接',
        'Name': '名称',
        'OK': '确定',
        /* ---------- Template placeholders: views and box ---------- */
        'Show or hide the side panel': '显示或隐藏侧边栏',
        'Examples': '示例',
        'Template': '模板',
        'View of the preview': '预览视图',
        'The template with its placeholders as written': '按原样显示带占位符的模板',
        'The examples could not be filled in - the preview shows the template': '无法填入示例，预览显示模板',
        'Placeholders': '占位符',
        'The placeholders of the template - a click on one puts its tag at the cursor': '模板中的占位符，点击即可在光标处插入对应标签',
        'Shown': '已显示',
        'Hidden': '已隐藏',
        'example view': '示例视图',
        'template view': '模板视图',
        'The page filled with the examples': '填入示例后的页面',
    },

    html: {

        '<b>Export</b> also has <b>Open in another editor</b>: it converts the document and opens it as a new document there. Anything the other format cannot hold is listed first.':

            '<b>导出</b>中还有<b>在其他编辑器中打开</b>：文档会被转换，并在那里作为新文档打开。其他格式无法保留的内容会先列出。',

        '<b>Insert</b> &gt; <b>New page</b> sets a page break for printing and PDF; the preview shows it as a dashed line. Headings stay with their text and tables and pictures are not cut. In Export, <b>Apply page breaks</b> turns them off for a PDF.':

            '<b>插入</b> &gt; <b>新页</b> 为打印和 PDF 设置分页符；预览中显示为虚线。标题与其正文保持在一起，表格和图片不会被切开。在<b>导出</b>中，<b>应用分页</b>可关闭 PDF 的分页设置。',
        /* Export */
        'The print dialog opens with the page as it is in the preview (without scripts). Choose <b>Save as PDF</b> (or "Microsoft Print to PDF") as the printer. In Chrome and Edge, untick "Headers and footers" and tick "Background graphics" if the page has colors. The text in the PDF can be selected.':
            '打印对话框打开时显示预览中的页面（不含脚本）。打印机请选择<b>另存为 PDF</b>（或“Microsoft Print to PDF”）。在 Chrome 和 Edge 中，请取消勾选“页眉和页脚”；如果页面有颜色，请勾选“背景图形”。PDF 中的文字可以选中。',

        /* Document tab without a head */
        'This code has no <code>&lt;html&gt;</code> with a <code>&lt;head&gt;</code>, so it is shown as a part of a page. Title, language and description belong in the head.':
            '这段代码没有带 <code>&lt;head&gt;</code> 的 <code>&lt;html&gt;</code>，因此显示为页面的一部分。标题、语言和描述应放在 head 中。',

        /* AI Assistant */
        'Click <b>Copy prompt</b>.': '点击<b>复制提示词</b>。',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'AI 会回复一个链接：点击它，或将完整回答粘贴到下方。<b>撤销</b>可撤回。',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'AI 会回复一个链接：<b>将完整回答粘贴到下方</b>（点击链接会打开另一个编辑器）。<b>撤销</b>可撤回。',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            '编辑器可以将每个保存的版本发送到你自己的服务器（<b>Webhook</b>），让你的作品保存在你想要的地方。在此输入地址之前，不会发送任何内容。',
        'Also possible: <code>?src=&lt;URL of an .html file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>htmleditor:ai</code>, <code>htmleditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            '还可以：<code>?src=&lt;URL of an .html file&gt;</code> 打开文件，<code>&amp;webhook=&lt;URL&gt;</code> 将此文档保存到该地址。编辑器也可以在单独的窗口中打开（<code>?embed=window</code>），你的页面还可以向它提供自己的 AI 提示词和会话密钥，让 AI 把结果发送到你的服务器（<code>htmleditor:ai</code>、<code>htmleditor:key-request</code>），参见编辑器下方的“在你自己的网站上使用编辑器”。详情见 <a href="/llms.txt">llms.txt</a>。',

        /* Help */
        '<b>Write</b> HTML on the left - or start with <b>New</b> and one of the templates. The preview shows the page as you type.':
            '在左侧<b>编写</b> HTML，或从<b>新建</b>中选择一个模板开始。预览会在你输入时显示页面。',
        '<b>Click text in the preview</b> to edit it right there. Enter starts a new paragraph; Shift+Enter inserts a line break. Ctrl+Enter (Cmd+Enter on macOS) or a click elsewhere applies the edit; Escape cancels. Each edit is one step for Undo. A click on a picture or any other element jumps to its place in the code. The element at the code cursor gets a frame in the preview.':
            '<b>点击预览中的文字</b>即可直接编辑。Enter 新建段落，Shift+Enter 插入换行。按 Ctrl+Enter（macOS 上为 Cmd+Enter）或点击其他地方可应用编辑，Escape 取消。每次编辑都可一步撤销。点击图片或其他元素会跳转到代码中的对应位置。代码光标所在的元素在预览中会加上边框。',
        '<b>Document</b> on the right sets title, language and description of the page; <b>Insert</b> has ready-made pieces (headings, lists, tables, media, form fields, meta tags); <b>Files</b> holds the pictures, stylesheets and fonts of the page; <b>Outline</b> lists the headings.':
            '右侧的<b>文档</b>用于设置页面的标题、语言和描述；<b>插入</b>提供现成片段（标题、列表、表格、媒体、表单字段、meta 标签）；<b>文件</b>存放页面的图片、样式表和字体；<b>大纲</b>列出各个标题。',
        'Problems in the code (an unclosed <code>&lt;div&gt;</code>, a picture without <code>alt</code>, a missing file) are listed above the code - click one to go there.':
            '代码中的问题（未闭合的 <code>&lt;div&gt;</code>、没有 <code>alt</code> 的图片、缺少的文件）会列在代码上方，点击即可跳转。',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser.':
            '<b>我的文档</b>（左上角的文件夹按钮）列出此浏览器中保存的所有文档。',
        '<b>Export</b> makes an HTML file, one HTML file with the files inside, a ZIP, a PDF (via the print dialog) or plain text. <b>Download .html</b> saves the code.':
            '<b>导出</b>可生成 HTML 文件、内含文件的单个 HTML 文件、ZIP、PDF（通过打印对话框）或纯文本。<b>下载 .html</b> 保存代码。',
        'The preview shows HTML and CSS as the browser does, but scripts and <code>on…</code> attributes never run and links do not navigate - so any page is safe to open.':
            '预览会像浏览器一样显示 HTML 和 CSS，但脚本和 <code>on…</code> 属性永远不会运行，链接也不会跳转，因此可以放心打开任何页面。',
        'Comment lines in or out (<code>&lt;!-- --&gt;</code>)': '注释或取消注释行（<code>&lt;!-- --&gt;</code>）',
        'Typing <code>&gt;</code> at the end of a start tag adds its end tag, and <kbd>Enter</kbd> between the two indents the new line. Typing <code>&lt;/</code> closes the element that is open.':
            '在开始标签末尾输入 <code>&gt;</code> 会添加其结束标签，在两者之间按 <kbd>Enter</kbd> 会缩进新行。输入 <code>&lt;/</code> 会闭合当前打开的元素。',
    },

    patterns: [
        /* ---------- Status lines ---------- */
        ['^(\\d+) lines · ([\\d.]+ K?B)$', '$1 行 · $2'],
        ['^\\.html and (\\d+) (?:file|files)$', '.html 和 $1 个文件'],
        ['^([\\d,]+) bytes$', '$1 字节'],
        ['^\\d{1,3}(?:,\\d{3})+$', '$&'],

        /* Problems above the code */
        ['^(\\d+) (?:error|errors)$', '$1 个错误'],
        ['^· (\\d+) (?:note|notes)$', '· $1 条提示'],
        ['^(\\d+) (?:note|notes)$', '$1 条提示'],
        ['^Line (\\d+)$', '第 $1 行'],
        ['^The preview failed: (.*)$', '预览失败：$1'],
        ['^The tag <(\\S+) is never closed with >$', '标签 <$1 没有用 > 闭合'],
        ['^<(\\S+)> is obsolete - use CSS or a current element instead$', '<$1> 已过时，请改用 CSS 或现行元素'],
        ['^Unknown element <(\\S+)>$', '未知元素 <$1>'],
        ['^The attribute (\\S+) is given twice in <(\\S+)> - the browser uses the first one$', '属性 $1 在 <$2> 中出现了两次，浏览器使用第一个'],
        ['^The id "(.*)" is used twice$', 'id“$1”用了两次'],
        ['^<(\\S+)\\/> - in HTML only void elements \\(like <br>\\) close themselves; add <\\/(\\S+)>$', '<$1/>：HTML 中只有空元素（如 <br>）能自闭合，请添加 </$2>'],
        ['^<(\\S+)> is never closed - add <\\/(\\S+)>$', '<$1> 没有闭合，请添加 </$2>'],
        ['^<\\/(\\S+)> - <(\\S+)> has no end tag$', '</$1>：<$2> 没有结束标签'],
        ['^<\\/(\\S+)> without an opening <(\\S+)>$', '</$1> 没有对应的开始标签 <$2>'],
        ['^<(\\S+)> is not closed before <\\/(\\S+)> - add <\\/(\\S+)> first$', '<$1> 在 </$2> 之前没有闭合，请先添加 </$3>'],
        ['^The file "(.+)" is missing - add it in the Files tab \\(or drop it into the editor\\)$', '缺少文件“$1”，请在“文件”标签页中添加（或拖入编辑器）'],

        /* ---------- Insert tab ---------- */
        ['^Insert (&[#\\w]+;)$', '插入 $1'],

        /* ---------- Files tab ---------- */
        ['^(\\d+) (?:file|files) · (.+)$', '$1 个文件 · $2'],
        ['^Files belong to “(.*)” and stay in your browser\\. Drop or paste pictures, stylesheets or fonts anywhere in the editor, or add them here; the code uses them by their name, e\\.g\\.$',
            '文件属于“$1”，保存在你的浏览器中。可以在编辑器任意位置拖放或粘贴图片、样式表或字体，也可以在这里添加；代码按名称使用它们，例如'],
        ['^Choose the file for (.+)$', '选择用于 $1 的文件'],
        ['^Insert (.+) at the cursor$', '在光标处插入 $1'],
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
        ['^"(.+)" now has the new content$', '“$1”现在是新内容'],
        ['^File "(.+)" added to "(.+)"$', '文件“$1”已添加到“$2”'],
        ['^"(.+)" is linked already$', '“$1”已经链接'],
        ['^"(.+)" is linked$', '已链接“$1”'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '“$1”现在是空的，“撤销”可恢复'],
        ['^"(.+)" opened$', '已打开“$1”'],
        ['^New document "(.+)" - your other documents are under "My documents"$', '新文档“$1”，其他文档在“我的文档”中'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$', '来自 AI 的新文档“$1”，其他文档保持不变'],
        ['^Opened "(.+)" - it is now in "My documents"$', '已打开“$1”，它现在在“我的文档”中'],
        ['^Opened "(.+)" with (\\d+) (?:file|files)$', '已打开“$1”及 $2 个文件'],
        ['^"(.+)" could not be opened: (.*)$', (m, f, why) => `无法打开“${f}”：${ZIP[why] || why}`],
        ['^Document received - the editor found (\\d+) (?:problem|problems), see above the code$', '已收到文档，编辑器发现 $1 个问题，见代码上方'],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '“$1”已被 AI 修改，“撤销”可撤回'],
        ['^"(.+)" duplicated$', '已复制“$1”'],
        ['^Delete "(.+)"\\?$', '删除“$1”？'],
        ['^"(.+)" deleted$', '已删除“$1”'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', '打开 $1'],
    ],
};
