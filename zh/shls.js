/* Simplified Chinese texts of the SHLS editor: the bar, the work area (code, records,
   record, insert, convert, outline), its dialogs and messages, and the
   problems found in the code. What all editors share is in
   common.js; how the dictionaries are used is described in
   i18n.js. Names of documents, sections, keys and values stay as they are:
   the patterns copy them into the Simplified Chinese text. */

import { formatTime, formatSize } from './format.js';

/* "123 bytes" -> "123 字节" (KB and MB stay as they are) */

/* Month names as numbers, for dates written as "2026年10月25日" */

/* When a document was last changed (files.js): "just now", "5 min ago", "Oct 25, 2026" … */

export default {
    text: {
        /* ---------- Template placeholders (?template=): views of the records, box, side panel ---------- */
        'Show or hide the side panel': '显示或隐藏侧边栏',
        'Examples': '示例',
        'Template': '模板',
        'The template with its placeholders as written': '按原样显示带占位符的模板',
        'Placeholders': '占位符',
        'The placeholders of the template - a click on one puts its tag at the cursor': '模板中的占位符，点击即可在光标处插入对应标签',
        'Shown': '已显示',
        'Hidden': '已隐藏',
        'This part shows an example - change it in the template view or in the code': '此部分显示示例 - 请在模板视图或代码中修改',
        'View of the records': '记录的视图',
        'The records filled with the examples': '用示例填写的记录',
        'The examples could not be filled in - the records show the template': '无法填入示例 - 记录显示模板',
        "Read back from SHLS, the data is not the same (for example records whose keys are in another order than in the first record) - check the result.": "从 SHLS 读回后数据不一致（例如记录的键顺序与第一条记录不同）- 请检查结果。",
        /* ---------- Top bar ---------- */
        'SHLS Editor - home': 'SHLS 编辑器首页',
        'SHLS Editor': 'SHLS 编辑器',
        'File': '文件',
        'My documents (Ctrl+O)': '我的文档（Ctrl+O）',
        'My documents': '我的文档',
        'New document, or start this one over': '新建文档，或重新开始当前文档',
        'New': '新建',
        'New blank document': '新建空白文档',
        'An empty document - your other documents stay as they are': '空文档，其他文档保持不变',
        'Empty section': '空节',
        'One section with two keys and one record to fill in': '一个节，含两个键和一条待填写的记录',
        'Products and companies': '产品和公司',
        'The first README example: records right after each key block': 'README 的第一个示例：每个键块后紧跟记录',
        'Key blocks first': '键块在前',
        'The second README example: the records follow under the section name again': 'README 的第二个示例：记录再次跟在节名下',
        'Companies, departments and employees, nested three levels': '公司、部门和员工，嵌套三层',
        'The same data with the key blocks first and fewer blank lines': '相同的数据，键块在前，空行更少',
        'Start this document over': '重新开始当前文档',
        'Empties the document - "Undo" brings it back': '清空文档，“撤销”可恢复',
        'Open an SHLS file from your computer (JSON, YAML, CSV and JSON Lines files are converted; you can also drag a file into the window)':
            '从电脑打开 SHLS 文件（JSON、YAML、CSV 和 JSON Lines 文件会被转换；也可以将文件拖入窗口）',
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
        'Save the document as a .shls file (Ctrl+S)': '将文档保存为 .shls 文件（Ctrl+S）',
        'Download .shls': '下载 .shls',
        'JSON, YAML, CSV and more (Ctrl+E)': 'JSON、YAML、CSV 等（Ctrl+E）',
        'Export…': '导出…',

        /* ---------- Views and work area ---------- */
        'View': '视图',
        'Edit': '编辑',
        'Selection': '所选内容',
        'Records': '记录',
        'Record': '记录',
        'SHLS code': 'SHLS 代码',
        'Copy the code to the clipboard': '将代码复制到剪贴板',
        'Copy code': '复制代码',
        'Copy': '复制',
        'Lay the document out as the reference SHLSEncoder does: all key blocks first, then the records': '按参考实现 SHLSEncoder 的方式排列文档：先写所有键块，再写记录',
        'Tidy up': '整理',
        'Drag to change the width of the code area': '拖动以更改代码区宽度',
        'Drag to change the width': '拖动以更改宽度',
        'Unfold everything': '全部展开',
        'Fold the key blocks and records': '折叠键块和记录',
        'Add: a record after the selected record (or at the end of the section), a key after the selected key': '添加：在所选记录后添加记录（或在节末尾），在所选键后添加键',
        'Add': '添加',
        'Duplicate the selected record or key': '复制所选记录或键',
        'Duplicate': '创建副本',
        'Move the selected record or key up (Alt+Up)': '上移所选记录或键（Alt+Up）',
        'Move up': '上移',
        'Move the selected record or key down (Alt+Down)': '下移所选记录或键（Alt+Down）',
        'Move down': '下移',
        'Remove the selected record, key or section (Delete)': '删除所选记录、键或节（Delete）',
        'Remove': '移除',
        'Search keys and values': '搜索键和值',
        'Previous match (Shift+Enter)': '上一个匹配（Shift+Enter）',
        'Previous match': '上一个匹配',
        'Next match (Enter)': '下一个匹配（Enter）',
        'Next match': '下一个匹配',
        'Copy the path of the selection': '复制所选内容的路径',
        'Copy path': '复制路径',
        'Nothing selected': '未选择任何内容',
        'Side panel': '侧边栏',
        'The selected record, value or key': '所选的记录、值或键',
        'New records, keys and sections, and pieces of code': '新记录、键和节，以及代码片段',
        'Insert': '插入',
        'Tokens, and the document in other formats': '词元，以及其他格式的文档',
        'Convert': '转换',
        'The sections of the document': '文档的章节',
        'Outline': '大纲',
        'Open it here': '在这里打开',
        'Drop the file here': '将文件拖放到这里',
        'Hide': '隐藏',
        'Show': '显示',

        /* ---------- Records view ---------- */
        'Keys': '键',
        'the template of each record': '每条记录的模板',
        'Click to rename the section': '点击以重命名该节',
        'Click to rename the key - only the key block changes': '点击以重命名该键，只更改键块',
        'Click to change the value': '点击以更改值',
        'Value': '值',
        'Key': '键',
        'Section name': '节名',
        'The code cannot be read - see the problem above the code.': '无法读取代码，请查看代码上方的问题。',
        'No sections yet - write a section name, its keys (indented) and, after one blank line, the records. Or choose a template under "New".':
            '还没有节：写一个节名、其键（缩进），空一行后写记录。或在“新建”中选择模板。',

        /* ---------- Record tab ---------- */
        'Click a section, a key or a record in the middle.': '点击中间区域的节、键或记录。',
        'The document has no sections yet.': '文档还没有节。',
        'The document has no sections yet': '文档还没有节',
        'Path': '路径',
        'Section': '节',
        'Add a record': '添加记录',
        'Add a key': '添加键',
        'Remove the section': '删除该节',
        'Add a key after it': '在其后添加键',
        'Add a record after it': '在其后添加记录',
        'Renaming a key changes only the key block. Adding, moving or removing a key changes every record of the section.':
            '重命名键只更改键块。添加、移动或删除键会更改该节的每条记录。',
        'Apply': '应用',

        /* ---------- Insert tab ---------- */
        'Add to the selection': '添加到所选位置',
        'A record after the selected record (or at the end of the section), a key after the selected key - every record gets a value "-" for it. One step for Undo.':
            '在所选记录后添加记录（或在节末尾），在所选键后添加键，每条记录都会得到值“-”。可一步撤销。',
        'A new record with "-" for each value': '新记录，每个值为“-”',
        'A new key in the key block; every record gets "-"': '键块中的新键；每条记录得到“-”',
        'A copy of the selected record or key': '所选记录或键的副本',
        'A new section at the end, with two keys and one record': '在末尾新建一个节，含两个键和一条记录',
        'At the cursor in the code': '在代码光标处',
        'A section name, its key block, a blank line and one record': '节名、键块、一个空行和一条记录',
        'The placeholder for the line of a nested list': '嵌套列表那一行的占位符',
        '- (no value)': '-（无值）',
        'SHLS has no empty values: a dash stands for none': 'SHLS 没有空值：短横线表示无',
        'Today\'s date': '今天的日期',
        'The date as YYYY-MM-DD': '日期，格式 YYYY-MM-DD',

        /* ---------- Convert tab ---------- */
        'JSON on one line': '单行 JSON',
        'This document': '此文档',
        'Writes the document anew as the reference SHLSEncoder does: all key blocks first, then the records of each section':
            '按参考实现 SHLSEncoder 的方式重写文档：先写所有键块，再写每个节的记录',
        'Write as SHLSEncoder does': '按 SHLSEncoder 的方式写',
        'Convert to': '转换为',
        'JSON (as SHLSDecoder reads it)': 'JSON（与 SHLSDecoder 读取的一致）',
        'CSV (one section)': 'CSV（一个节）',
        'JSON Lines (one section)': 'JSON Lines（一个节）',
        'The records as plain text': '记录的纯文本形式',
        'Result': '结果',
        'Download': '下载',
        'Opens the result as a new document in the JSON Editor (in a new tab)': '在 JSON 编辑器中将结果作为新文档打开（新标签页）',
        'Open in the JSON Editor': '在 JSON 编辑器中打开',
        'Exactly the data the reference SHLSDecoder reads: every value is a string.': '与参考实现 SHLSDecoder 读取的数据完全一致：每个值都是字符串。',
        'The code cannot be read as SHLS - fix the problem above the code first': '代码无法按 SHLS 读取，请先修正代码上方的问题',
        'Write it anyway?': '仍然写入？',
        'Read back, the encoder\'s text gives different data than this document (SHLSEncoder cannot write every structure). "Undo" brings the document back.':
            '编码器的文本读回后得到的数据与此文档不同（SHLSEncoder 无法写出所有结构）。“撤销”可恢复文档。',
        'Write it': '写入',
        'The document is written as SHLSEncoder does already': '文档已经是 SHLSEncoder 的写法',
        'Written as SHLSEncoder does': '已按 SHLSEncoder 的方式写入',

        /* ---------- Outline tab ---------- */
        'The sections of the document. Click one to go there.': '文档的节。点击即可跳转。',

        /* ---------- Export ---------- */
        'Close': '关闭',
        'File name': '文件名',
        'SHLS file as it is (.shls)': '原样 SHLS 文件（.shls）',
        'JSON, as SHLSDecoder reads it (.json)': 'JSON，与 SHLSDecoder 读取的一致（.json）',
        'YAML file (.yaml)': 'YAML 文件（.yaml）',
        'CSV table of the selected section (.csv)': '所选节的 CSV 表格（.csv）',
        'The records as plain text (.txt)': '记录的纯文本形式（.txt）',
        'Download every format at once': '一次下载所有格式',
        'All formats (ZIP)': '所有格式（ZIP）',

        /* ---------- My documents ---------- */
        'Search by name': '按名称搜索',
        'Search your documents': '搜索你的文档',
        'Open a file from your computer as a new document': '从电脑打开文件作为新文档',
        'New document': '新文档',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            '点击文档即可打开。文档只保存在此浏览器中，不会上传。清除浏览器的网站数据会删除它们，请下载需要保留的文档。',
        'Download every document as a .shls file in one ZIP': '将每个文档作为 .shls 文件打包成一个 ZIP 下载',
        'Download all (ZIP)': '全部下载（ZIP）',
        'Rename': '重命名',
        'Download as .shls': '下载为 .shls',
        'Delete': '删除',
        'New name': '新名称',
        'This document is open': '此文档已打开',
        'Click to open this document': '点击打开此文档',
        'No documents yet.': '还没有文档。',

        /* ---------- AI Assistant ---------- */
        'Any AI can work with you - ChatGPT, Claude, Gemini, Copilot. The prompt explains SHLS, so the AI writes valid SHLS.':
            '任何 AI 都能和你一起工作：ChatGPT、Claude、Gemini、Copilot。提示词会说明 SHLS，因此 AI 能写出有效的 SHLS。',
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
        'Paste it into your AI and say what it should change.': '将其粘贴到你的 AI 中，并说明要修改什么。',
        '(no key yet)': '（还没有密钥）',
        '(key valid while the editor is open)': '（编辑器打开期间密钥有效）',
        'The link could not be read': '无法读取该链接',
        'The document in this link is incomplete or damaged. If the AI\'s link was split over several lines (as in a terminal), copy the whole answer and paste it into the editor with Ctrl+V - the editor joins the lines.':
            '此链接中的文档不完整或已损坏。如果 AI 的链接被拆成了多行（例如在终端中），请复制完整回答，在编辑器中按 Ctrl+V 粘贴，编辑器会把各行连起来。',
        'Loading…': '正在加载…',
        'Taken over by your editor': '已交给你的编辑器',
        'The document is now in the SHLS Editor tab you already had open. Switch to that tab, or open it here.':
            '文档现已在你之前打开的 SHLS 编辑器标签页中。请切换到那个标签页，或在这里打开。',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)': '此处不允许复制，内容已在下方选中：请按 Ctrl+C（⌘C）',
        'Prompt copied - paste it into your AI and say what it should write': '提示词已复制，粘贴到你的 AI 中并说明要写什么',
        'This link is incomplete or damaged - please ask the AI to send it again': '此链接不完整或已损坏，请让 AI 重新发送',

        /* ---------- Save to your server ---------- */
        'Save to your server': '保存到你的服务器',
        'Webhook address': 'Webhook 地址',
        'https://example.com/api/shls': 'https://example.com/api/shls',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '（可选，以“Authorization: Bearer …”发送；保留到关闭此标签页为止）',
        'Send automatically a few seconds after each change (otherwise only when you click': '每次更改几秒后自动发送（否则仅在点击',
        'or press Ctrl+S)': '或按 Ctrl+S 时发送）',
        'Only for “': '仅用于“',
        '” (other documents use the general address)': '”（其他文档使用通用地址）',
        'What your server receives': '你的服务器收到的内容',
        'A POST request with JSON (your server must allow CORS from https://shls.giit.ch); content is the document as a string:':
            '一个带 JSON 的 POST 请求（你的服务器必须允许来自 https://shls.giit.ch 的 CORS）；content 是字符串形式的文档：',
        'Embed the editor in your website': '将编辑器嵌入你的网站',
        'Send now': '立即发送',
        'Save setting': '保存设置',

        /* ---------- Help ---------- */
        'How it works': '使用说明',
        'Keyboard shortcuts': '键盘快捷键',
        'In the records: go up and down, fold and unfold': '记录中：上下移动、折叠和展开',
        'In the records: change the value, key or section name': '记录中：更改值、键或节名',
        'In the records: remove the record or key': '记录中：删除记录或键',
        'In the records: move the record or key up / down': '记录中：上移 / 下移记录或键',
        'Indent / outdent in the code by one level': '在代码中缩进 / 取消缩进一级',
        'Undo / redo': '撤销 / 重做',
        'Save (download, or to your server) / export': '保存（下载或保存到服务器）/ 导出',
        'Alt': 'Alt',
        'Escape': 'Escape',
        'A click in the middle puts the code\'s cursor on that line; the cursor in the code marks its record, key or value. Problems (a record with a value too few, indentation that is not a whole level, a missing blank line) are listed above the code with their line - click one to go there.':
            '在中间区域点击，代码光标会移到该行；代码中的光标会标出其记录、键或值。问题（记录少了一个值、缩进不是整级、缺少空行）会连同行号列在代码上方，点击即可跳转。',
        'Enter keeps the indentation of the line; after a section name it starts the key block.': 'Enter 保留该行的缩进；在节名之后会开始键块。',

        /* ---------- Messages ---------- */
        'The browser storage is full - download and delete documents under "My documents"': '浏览器存储已满，请在“我的文档”中下载并删除文档',
        'The browser storage is full - delete or download documents under "My documents" first': '浏览器存储已满，请先在“我的文档”中删除或下载文档',
        'The browser storage is full - delete or download some documents first': '浏览器存储已满，请先删除或下载一些文档',
        'The browser storage is full': '浏览器存储已满',
        'Nothing to undo': '没有可撤销的操作',
        'Nothing to redo': '没有可重做的操作',
        'Nothing changed': '没有任何更改',
        'Choose a section, key or record first': '请先选择节、键或记录',
        'Choose a key or a record to move or duplicate it': '请选择要移动或复制的键或记录',
        'This nested list has no records to add after': '此嵌套列表没有可在其后添加的记录',
        'SHLS values have one line - the line breaks became spaces': 'SHLS 的值只有一行，换行已变为空格',
        'Spaces around the value were removed - SHLS values cannot start with spaces': '值两端的空格已删除，SHLS 的值不能以空格开头',
        'SHLS has no empty values (a blank line is skipped) - write a placeholder such as - or PH': 'SHLS 没有空值（空行会被跳过），请写一个占位符，例如 - 或 PH',
        'A key needs a name': '键需要名称',
        'A section needs a name': '节需要名称',
        'A key block needs at least one key - add another key first': '键块至少需要一个键，请先添加另一个键',
        'This key is not there any more': '此键已不存在',
        'This line is not there any more': '此行已不存在',
        'This record is not there any more': '此记录已不存在',
        'This is the first record': '这是第一条记录',
        'This is the last record': '这是最后一条记录',
        'This is the first key': '这是第一个键',
        'This is the last key': '这是最后一个键',
        'This document is empty already': '此文档已经是空的',
        'All data is removed. "Undo" brings it back as long as the page is open.': '所有数据将被删除。只要页面未关闭，“撤销”即可恢复。',
        'Start over': '重新开始',
        'The file is larger than 8 MB': '文件大于 8 MB',
        'The CSV file is empty': 'CSV 文件是空的',
        'The YAML package is not loaded yet': 'YAML 包尚未加载',
        'Downloaded': '已下载',
        'Copied to the clipboard': '已复制到剪贴板',
        'Code copied': '代码已复制',
        '.shls downloaded': '已下载 .shls',
        'Replace': '替换',
        'The document is removed from this browser for good. Download it first if you want to keep a copy.':
            '文档将从此浏览器中永久删除。如需保留副本，请先下载。',
        'unknown format': '未知格式',

        /* What SHLS cannot keep (opening JSON, YAML, CSV) */
        'An object inside a record becomes a list with this one object.': '记录中的对象会变成只含这一个对象的列表。',
        'Plain values where SHLS expects records (in a list or as a section) become records with the one key "Value".': '在 SHLS 需要记录的位置（列表中或作为节）的简单值，会变成只有一个键“Value”的记录。',
        'Empty values become blank lines, which SHLS readers skip - the values after them move up. Write a placeholder such as -.': '空值会变成空行，而 SHLS 读取器会跳过空行，其后的值会上移。请写一个占位符，例如 -。',
        'Values with several lines are not supported by SHLS - they break the records apart.': 'SHLS 不支持多行值，它们会把记录拆开。',
        'Values that start or end with spaces lose them (and leading spaces change the indentation).': '以空格开头或结尾的值会丢失这些空格（开头的空格还会改变缩进）。',

        /* ---------- Problems in the code ---------- */
        'A tab in the indentation - SHLS counts spaces only, so this line is read as a section name': '缩进中有制表符，SHLS 只计算空格，因此此行会被读作节名',
        'SHLS readers ignore this line - its indentation does not fit the key block': 'SHLS 读取器会忽略此行，其缩进与键块不符',

        /* Short words of the interface that other packs keep in English */
        'Code': '代码',
        'Export': '导出',
        'Format': '格式',
        'Link': '链接',
        'Name': '名称',
        'OK': '确定',
        /* ---------- Template placeholders (?template=) ---------- */
        'A line of section tags belongs between complete records': '模板中包含节标签的行应放在完整记录之间',
        'A template stays as written - the encoder works on filled data': '模板保持原样，编码器使用填充后的数据',
        'Sections of the template stay whole - make this change in the code': '模板的各节保持完整，请在代码中进行此更改',
    },

    html: {

        '<b>Export</b> also has <b>Open in another editor</b>: it converts the document and opens it as a new document there. Anything the other format cannot hold is listed first.':

            '<b>导出</b>中还有<b>在其他编辑器中打开</b>：文档会被转换，并在那里作为新文档打开。其他格式无法保留的内容会先列出。',
        /* AI Assistant */
        'Click <b>Copy prompt</b>.': '点击<b>复制提示词</b>。',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'AI 会回复一个链接：点击它，或将完整回答粘贴到下方。<b>撤销</b>可撤回。',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'AI 会回复一个链接：<b>将完整回答粘贴到下方</b>（点击链接会打开另一个编辑器）。<b>撤销</b>可撤回。',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            '编辑器可以将每个保存的版本发送到你自己的服务器（<b>Webhook</b>），让你的作品保存在你想要的地方。在此输入地址之前，不会发送任何内容。',
        'Also possible: <code>?src=&lt;URL of a .shls file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>shlseditor:ai</code>, <code>shlseditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            '还可以：<code>?src=&lt;URL of a .shls file&gt;</code> 打开文件，<code>&amp;webhook=&lt;URL&gt;</code> 将此文档保存到该地址。编辑器也可以在单独的窗口中打开（<code>?embed=window</code>），你的页面还可以向它提供自己的 AI 提示词和会话密钥，让 AI 把结果发送到你的服务器（<code>shlseditor:ai</code>、<code>shlseditor:key-request</code>），参见编辑器下方的“在你自己的网站上使用编辑器”。详情见 <a href="/llms.txt">llms.txt</a>。',

        /* Help */
        '<b>Write</b> SHLS on the left - or start with <b>New</b> and one of the templates. A section is its name, then its keys (indented by one space, the keys of a nested list one level deeper), exactly one blank line, then the records: one value per line in the order of the keys.':
            '在左侧<b>编写</b> SHLS，或从<b>新建</b>中选择一个模板开始。一个节由其名称、键（缩进一个空格，嵌套列表的键再深一级）、恰好一个空行和记录组成：按键的顺序每行一个值。',
        'The middle shows each section with its <b>key block</b> and its <b>records</b>, the keys as labels; nested lists fold. It reads the code exactly as the reference SHLSDecoder does.':
            '中间区域显示每个节的<b>键块</b>和<b>记录</b>，键作为标签显示；嵌套列表可折叠。它读取代码的方式与参考实现 SHLSDecoder 完全相同。',
        '<b>Click a value, a key or a section name</b> to change it right there. <b>Enter</b> or a click elsewhere writes the change into the code (one step for Undo), <b>Escape</b> cancels. The buttons above add, duplicate, move and remove records and keys - a key added or removed is added to or removed from every record.':
            '<b>点击值、键或节名</b>即可直接修改。<b>Enter</b> 或点击其他地方会把更改写入代码（可一步撤销），<b>Escape</b> 取消。上方的按钮可添加、复制、移动和删除记录与键：添加或删除的键会在每条记录中相应添加或删除。',
        '<b>Record</b> on the right shows the selected record as a form; <b>Insert</b> adds records, keys and sections; <b>Convert</b> counts the tokens against JSON and converts to JSON, YAML, CSV and JSON Lines; <b>Outline</b> lists the sections.':
            '右侧的<b>记录</b>以表单形式显示所选记录；<b>插入</b>可添加记录、键和节；<b>转换</b>统计相对于 JSON 的词元数，并转换为 JSON、YAML、CSV 和 JSON Lines；<b>大纲</b>列出各个节。',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser. <b>Export</b> saves it as SHLS, JSON, YAML, CSV or text.':
            '<b>我的文档</b>（左上角的文件夹按钮）列出此浏览器中保存的所有文档。<b>导出</b>可保存为 SHLS、JSON、YAML、CSV 或文本。',
    },

    patterns: [
        /* ---------- Status lines and counts ---------- */
        ['^(\\d+) (?:line|lines) · ([\\d.]+ K?B) · (\\d+) (?:section|sections)$', '$1 行 · $2 · $3 个节'],
        ['^([\\d,]+) bytes$', '$1 字节'],
        ['^(\\d+) (?:record|records) · (\\d+) (?:key|keys)$', '$1 条记录 · $2 个键'],
        ['^(\\d+) (?:record|records) · (\\d+) (?:key|keys) · line (\\d+)$', '$1 条记录 · $2 个键 · 第 $3 行'],
        ['^(\\d+) (?:record|records) · line (\\d+)$', '$1 条记录 · 第 $2 行'],
        ['^(\\d+) (?:record|records)$', '$1 条记录'],
        ['^(\\d+) (?:problem|problems)$', '$1 个问题'],
        ['^nested list · (\\d+) (?:key|keys)$', '嵌套列表 · $1 个键'],
        ['^(nested list · )?level (\\d+) · line (\\d+)$', (m, nl, l, z) => `${nl ? '嵌套列表 · ' : ''}第 ${l} 层 · 第 ${z} 行`],
        ['^record (\\d+) of (\\d+) · lines (\\d+)-(\\d+)$', '第 $1 条记录，共 $2 条 · 第 $3-$4 行'],
        ['^SHLS needs about (\\d+) % fewer tokens than the same data as JSON - approximate tokens of common AI models\\.$', 'SHLS 比同样数据的 JSON 少用约 $1 % 的词元（常见 AI 模型的近似词元数）。'],
        ['^The same data as JSON needs about as many tokens - approximate tokens of common AI models\\.$', '同样数据的 JSON 所需词元数大致相同（常见 AI 模型的近似词元数）。'],
        ['^The records of "(.+)": its keys are the columns, a nested list is one cell with JSON\\.$', '“$1”的记录：其键为列，嵌套列表为一个含 JSON 的单元格。'],
        ['^One record of "(.+)" per line\\.$', '每行一条“$1”的记录。'],
        ['^"(.+)" has no records$', '“$1”没有记录'],

        /* ---------- Problems above the code ---------- */
        ['^(\\d+) (?:error|errors)$', '$1 个错误'],
        ['^(\\d+) (?:note|notes)$', '$1 条提示'],
        ['^· (\\d+) (?:note|notes)$', '· $1 条提示'],
        ['^Line (\\d+)$', '第 $1 行'],
        ['^Indented by (\\d+) (?:space|spaces) - not a whole level \\((\\d+) (?:space|spaces) per level\\)$', '缩进了 $1 个空格，不是整级（每级 $2 个空格）'],
        ['^Indented (\\d+) levels deeper than the line above - one level at a time$', '比上一行深了 $1 级缩进，每次只能深一级'],
        ['^"(.+)" has no key block yet - these lines are read as its keys \\(the key block follows the section name directly\\)$', '“$1”还没有键块，这些行被读作它的键（键块紧跟在节名之后）'],
        ['^The key "(.+)" is twice in the key block - only one of them keeps its values\\. Is the blank line between the key block and the records missing\\?$', '键“$1”在键块中出现了两次，只有一个能保留其值。键块与记录之间是否缺少空行？'],
        ['^"(.+)" looks like a value but stands in the key block - records follow the key block after exactly one blank line$', '“$1”看起来像值，却在键块中；键块后应恰好空一行，再开始写记录'],
        ['^(\\d+) blank lines after the key block of "(.+)" - exactly one belongs there$', '“$2”的键块后有 $1 个空行，那里应恰好有一个'],
        ['^This record of "(.+)" has (\\d+) of (\\d+) values - its last keys are missing in the data$', '“$1”的这条记录有 $2 个值（应为 $3 个），最后几个键缺少对应数据'],
        ['^No blank line before this record of "(.+)" while the others have one - the record above may have more values than the key block \\((\\d+)\\)$', '“$1”的这条记录前没有空行，而其他记录都有，上方记录的值可能多于键块中的键（$2 个）'],
        ['^A blank line inside a record of "(.+)" - the record may have fewer values than the key block \\((\\d+)\\)$', '“$1”的一条记录中有空行，该记录的值可能少于键块中的键（$2 个）'],

        /* ---------- Messages with names ---------- */
        ['^"(.+)" has no key block - write its keys first$', '“$1”没有键块，请先写出它的键'],
        ['^"(.+)" has no key block$', '“$1”没有键块'],
        ['^There is already a section "(.+)"$', '已有名为“$1”的节'],
        ['^There is no section "(.+)"$', '没有名为“$1”的节'],
        ['^Remove the section "(.+)"\\?$', '删除节“$1”？'],
        ['^Its key block and its (\\d+) (?:record is|records are) removed\\. "Undo" brings them back\\.$', '其键块和 $1 条记录将被删除。“撤销”可恢复。'],
        ['^Remove the key "(.+)"\\?$', '删除键“$1”？'],
        ['^Its value is removed from every record of "(.+)" \\((\\d+)\\)\\. "Undo" brings it back\\.$', '它的值将从“$1”的每条记录中删除（$2 条）。“撤销”可恢复。'],
        ['^Path copied: (.*)$', '路径已复制：$1'],
        ['^Line (\\d+): (.*)$', '第 $1 行：$2'],
        ['^"(.+)" converted from ([\\w ]+)$', '“$1”由 $2 转换而来'],
        ['^SHLS cannot keep all of this data: (.*)$', 'SHLS 无法保留所有这些数据：$1'],
        ['^"(.+)" is open\\. My documents: open, rename, duplicate or delete your documents \\(Ctrl\\+O\\)$', '“$1”已打开。我的文档：打开、重命名、复制或删除你的文档（Ctrl+O）'],
        ['^Start "(.+)" over\\?$', '重新开始“$1”？'],
        ['^Start "(.+)" over$', '重新开始“$1”'],
        ['^(\\d+) (?:document|documents) · (.+) in this browser$', (m, k, s) => `${k} 个文档 · 此浏览器中 ${formatSize(s)}`],
        ['^No document named "(.*)"\\.$', '没有名为“$1”的文档。'],
        ['^Open now · (.+)$', (m, s) => `当前打开 · ${formatSize(s)}`],
        ['^(just now|yesterday|\\d+ min ago|\\d+ h ago|[A-Z][a-z]{2} \\d{1,2}, \\d{4}) · (.+)$', (m, w, s) => `${formatTime(w)} · ${formatSize(s)}`],
        ['^(.+) \\(open now\\)$', '$1（当前打开）'],
        ['^ZIP with (\\d+) (?:document|documents) downloaded$', '已下载含 $1 个文档的 ZIP'],
        ['^ZIP downloaded with (\\d+) files$', '已下载含 $1 个文件的 ZIP'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '“$1”现在是空的，“撤销”可恢复'],
        ['^"(.+)" opened$', '已打开“$1”'],
        ['^New document "(.+)" - your other documents are under "My documents"$', '新文档“$1”，其他文档在“我的文档”中'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$', '来自 AI 的新文档“$1”，其他文档保持不变'],
        ['^"(.+)" is not a file the editor can open$', '“$1”不是编辑器能打开的文件'],
        ['^Opened "(.+)" - converted from ([\\w ]+)$', '已打开“$1”，由 $2 转换而来'],
        ['^Opened "(.+)" - it is now in "My documents"$', '已打开“$1”，它现在在“我的文档”中'],
        ['^"(.+)" could not be opened: (.*)$', '无法打开“$1”：$2'],
        ['^The addition is not valid SHLS - it is open as a new document "(.+)"$', '添加的内容不是有效的 SHLS，已作为新文档“$1”打开'],
        ['^(.+) - the addition is open as a new document "(.+)"$', '$1，添加的内容已作为新文档“$2”打开'],
        ['^Document received - (\\d+) (?:problem|problems) found, see above the code$', '已收到文档，发现 $1 个问题，见代码上方'],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '“$1”已被 AI 修改，“撤销”可撤回'],
        ['^"(.+)" duplicated$', '已复制“$1”'],
        ['^Delete "(.+)"\\?$', '删除“$1”？'],
        ['^"(.+)" deleted$', '已删除“$1”'],

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
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', '打开 $1'],
    ],
};
