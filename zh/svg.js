/* Simplified Chinese texts of the SVG editor: the bar, the canvas and its tools, the
   properties and layers, the dialogs (export, my drawings, AI, server, help),
   the color picker and the messages. What all editors share is in
   common.js; how the dictionaries are used is described in i18n.js.
   Names of drawings and elements are kept as they are and shown in “…”. */

import { formatSize } from './format.js';

/* Names of the element types (LABELS in app.js). */
const LABEL = {
    'Drawing': '绘图', 'Rectangle': '矩形', 'Circle': '圆', 'Ellipse': '椭圆', 'Line': '直线',
    'Polyline': '折线', 'Polygon': '多边形', 'Path': '路径', 'Text': '文字', 'Group': '组', 'Image': '图片',
    'Reused element': '复用元素', 'Nested SVG': '嵌套 SVG', 'Link': '链接',
    'Embedded content': '嵌入内容', 'Definitions': '定义', 'Linear gradient': '线性渐变',
    'Radial gradient': '径向渐变', 'Gradient stop': '渐变色标', 'Clip path': '裁剪路径',
    'Mask': '蒙版', 'Pattern': '图案', 'Symbol': '符号', 'Style sheet': '样式表', 'Title': '标题',
    'Description': '描述', 'Filter': '滤镜', 'Marker': '标记', 'Switch': '条件选择', 'Metadata': '元数据',
    'Script': '脚本',
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
    'Click a shape to select it. Drag an empty spot to move the view.': '点击图形即可选中。拖动空白处可移动视图。',
    'Drag the shape to move it, or a small square to resize it. Delete key removes it.': '拖动图形可移动，拖动小方块可调整大小。按 Delete 键删除。',
    'Drag to move the view. Use the mouse wheel to zoom.': '拖动可移动视图。用鼠标滚轮缩放。',
    'Drag to draw a rectangle. Hold Shift for a square.': '拖动绘制矩形。按住 Shift 绘制正方形。',
    'Drag to draw an ellipse. Hold Shift for a circle.': '拖动绘制椭圆。按住 Shift 绘制圆。',
    'Drag to draw a line. Hold Shift for straight angles.': '拖动绘制直线。按住 Shift 限定角度。',
    'Hold the mouse button down and draw.': '按住鼠标按键绘制。',
    'Click where the text should start.': '在文字开始处点击。',
    'Tap a shape to select it. Swipe to scroll.': '轻触图形即可选中。滑动可滚动。',
    'Drag it to move, drag a square to resize.': '拖动可移动，拖动方块可调整大小。',
    'Drag to move the view, pinch to zoom.': '拖动可移动视图，双指缩放。',
    'Drag to draw a rectangle.': '拖动绘制矩形。',
    'Drag to draw an ellipse.': '拖动绘制椭圆。',
    'Drag to draw a line.': '拖动绘制直线。',
    'Draw with your finger.': '用手指绘制。',
    'Tap where the text should start.': '在文字开始处轻触。',
};

/* The editor's own messages about the code (parse() in export.js); the browser's messages stay as they are. */
const CODE_ERROR = {
    'The outermost element must be <svg>.': '最外层元素必须是 <svg>。',
    'The <svg> element is missing xmlns="http://www.w3.org/2000/svg".': '<svg> 元素缺少 xmlns="http://www.w3.org/2000/svg"。',
};
/* "123 bytes" -> "123 字节" (KB and MB stay as they are) */

/* Month names as numbers, for dates written as "2026年10月25日" */
const MONTHS = { Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6, Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12 };

export default {
    text: {
        'Show or hide the side panel': '显示或隐藏侧边栏',
        'Examples': '示例',
        'Template': '模板',
        'The template with its placeholders as written': '按原样显示带占位符的模板',
        'Placeholders': '占位符',
        'The placeholders of the template - a click on one puts its tag at the cursor': '模板中的占位符，点击即可在光标处插入对应标签',
        'Shown': '已显示',
        'Hidden': '已隐藏',
        'View of the drawing': '绘图视图',
        'The drawing filled with the examples': '填入示例后的绘图',
        'The examples could not be filled in - the canvas shows the template': '无法填入示例，画布显示模板',
        'This text shows an example - edit it in the code or in the template view': '此文本显示示例 - 请在代码或模板视图中编辑',
        ...LABEL,
        ...HINT,
        ...CODE_ERROR,

        // Top bar
        'SVG Editor': 'SVG 编辑器',
        'SVG Editor - home': 'SVG 编辑器首页',
        'File': '文件',
        'My drawings': '我的绘图',
        'My drawings (Ctrl+O)': '我的绘图（Ctrl+O）',
        'New drawing, or start this one over': '新建绘图，或重新开始当前绘图',
        'New': '新建',
        'New blank drawing': '新建空白绘图',
        'Your other drawings stay as they are': '其他绘图保持不变',
        'New from the example': '从示例新建',
        'A copy of the editor logo to try things out': '编辑器标志的副本，用来试试各种功能',
        'Start this drawing over': '重新开始当前绘图',
        'Empties it but keeps its size - "Undo" brings it back': '清空内容但保留尺寸，“撤销”可恢复',
        'Open an SVG file from your computer as a new drawing (you can also drag a file into the window)':
            '从电脑打开 SVG 文件作为新绘图（也可以将文件拖入窗口）',
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
        'Let any AI draw in this editor': '让任意 AI 在此编辑器中绘图',
        'AI Assistant': 'AI 助手',
        'Save to your own server and embed the editor in your website':
            '保存到你自己的服务器，并将编辑器嵌入你的网站',
        'Save to server': '保存到服务器',
        'How it works and keyboard shortcuts (?)': '使用说明和键盘快捷键（?）',
        'Help': '帮助',
        'Save the drawing as an .svg file (Ctrl+S)': '将绘图保存为 .svg 文件（Ctrl+S）',
        'Download SVG': '下载 SVG',
        'Save as PNG, JPG, WebP, data URI, React and more (Ctrl+E)': '保存为 PNG、JPG、WebP、Data URI、React 等（Ctrl+E）',
        'Export…': '导出…',

        // View tabs and the code
        'View': '视图',
        'Edit': '编辑',
        'Side panel': '侧边栏',
        'Canvas': '画布',
        'Properties': '属性',
        'SVG code': 'SVG 代码',
        'Copy the SVG code to the clipboard': '将 SVG 代码复制到剪贴板',
        'Copy code': '复制代码',
        'Copy': '复制',
        'Indent and arrange the code neatly': '整齐缩进并排列代码',
        'Tidy up': '整理',
        'Remove comments and spaces to make the file smaller': '删除注释和空白，使文件更小',
        'Shrink': '压缩',
        'Drag to change the width of the code area': '拖动以更改代码区宽度',
        'Drag to change the width': '拖动以更改宽度',
        'Error in the code.': '代码有错误。',
        'The preview shows the last working version.': '预览显示的是最后一个可用版本。',
        'The preview shows the last working version': '预览显示的是最后一个可用版本',
        'Add xmlns': '添加 xmlns',

        // Tools, grid, view
        'Tools': '工具',
        'Select and move shapes (V)': '选择并移动图形（V）',
        'Select': '选择',
        'Move the view (H, or hold the space bar)': '移动视图（H，或按住空格键）',
        'Move the view': '移动视图',
        'Draw a rectangle (R)': '绘制矩形（R）',
        'Draw an ellipse or circle (E)': '绘制椭圆或圆（E）',
        'Draw a line (L)': '绘制直线（L）',
        'Draw freehand (P)': '自由绘制（P）',
        'Freehand': '自由绘制',
        'Add text (T)': '添加文字（T）',
        'Show the grid and snap shapes to it (#)': '显示网格并让图形对齐网格（#）',
        'Grid': '网格',
        'Distance between grid lines, in the drawing\'s units': '网格线间距，以绘图单位计',
        'Spacing': '间距',
        'Shapes jump onto the grid lines when moved or drawn (G)': '移动或绘制时图形会吸附到网格线（G）',
        'Snap': '吸附',
        'Canvas: click shapes, drag them, resize them with the handles': '画布：点击图形、拖动图形，用控制点调整大小',
        'Background of the preview': '预览背景',
        'Background behind the drawing (only for viewing, not saved in the file)': '绘图后面的背景（仅用于查看，不保存到文件）',
        'Checkered background': '棋盘格背景',
        'White background': '白色背景',
        'Dark background': '深色背景',
        'No background': '无背景',
        'Zoom out (-)': '缩小（-）',
        'Zoom out': '缩小',
        'Show at actual size (1)': '按实际大小显示（1）',
        'Zoom in (+)': '放大（+）',
        'Zoom in': '放大',
        'Fit the drawing into the window (0)': '使绘图适合窗口（0）',
        'Fit to window': '适合窗口',
        'Fix the error in the code to edit the shapes again.': '修正代码中的错误后即可再次编辑图形。',

        // Properties
        'Colors, size and position of the selected shape': '所选图形的颜色、大小和位置',
        'All elements of the drawing as a list': '绘图的所有元素列表',
        'Layers': '图层',
        'The code contains an error. Once it is fixed, the shapes can be edited here again.':
            '代码有错误。修正后即可在此再次编辑图形。',
        'No valid SVG loaded.': '未加载有效的 SVG。',
        'Position in the document': '在文档中的位置',
        'Document': '文档',
        'Width': '宽度',
        'Height': '高度',
        'x y width height': 'x y 宽度 高度',
        'Click a shape on the canvas or in the Layers list to edit it. Alt+click selects the surrounding group.':
            '点击画布上或“图层”列表中的图形即可编辑。Alt+点击可选择所在的组。',
        'Colors for new shapes': '新图形的颜色',
        'Fill': '填充',
        'Outline': '描边',
        'Outline width': '描边宽度',
        'None': '无',
        'Fill color of new shapes': '新图形的填充颜色',
        'Outline color of new shapes': '新图形的描边颜色',
        'Outline width of new shapes': '新图形的描边宽度',
        'Fill color · new shapes': '填充颜色 · 新图形',
        'Outline color · new shapes': '描边颜色 · 新图形',
        'Pick the fill color': '选择填充颜色',
        'Pick the outline color': '选择描边颜色',
        'Fill color': '填充颜色',
        'Outline color': '描边颜色',
        'Fill color as text': '填充颜色（文本）',
        'Outline color as text': '描边颜色（文本）',
        'Color as text, e.g. #ff0000, red or none': '颜色文本，例如 #ff0000、red 或 none',
        'No fill': '无填充',
        'No outline': '无描边',
        'Uses a gradient or pattern - picking a color replaces it.': '使用了渐变或图案，选择颜色会替换它。',
        'Opacity': '不透明度',
        'Overall opacity': '整体不透明度',
        'Line style': '线型',
        'solid': '实线',
        'dashed': '虚线',
        'dotted': '点线',
        'dash-dot': '点划线',
        'Line ends': '线端',
        'default': '默认',
        'flat': '平头',
        'round': '圆头',
        'square': '方头',
        'Corners': '拐角',
        'sharp': '尖角',
        'beveled': '斜角',
        'This text contains further elements (e.g. tspan) - please edit it in the code.':
            '此文本包含其他元素（例如 tspan），请在代码中编辑。',
        'Size': '大小',
        'Weight': '粗细',
        'light': '细',
        'normal': '常规',
        'semi-bold': '半粗',
        'bold': '粗',
        'black': '特粗',
        'Font': '字体',
        'Alignment': '对齐',
        'left': '左',
        'center': '居中',
        'right': '右',
        'Position and size': '位置和大小',
        'Left edge': '左边缘',
        'Top edge': '上边缘',
        'W': '宽',
        'Rotate 15° to the left': '向左旋转 15°',
        'Rotate 15° to the right': '向右旋转 15°',
        '⟲ Rotate left': '⟲ 向左旋转',
        '⟳ Rotate right': '⟳ 向右旋转',
        'Mirror left to right': '左右镜像',
        'Mirror top to bottom': '上下镜像',
        '⇆ Flip horizontal': '⇆ 水平翻转',
        '⇅ Flip vertical': '⇅ 垂直翻转',
        'Arrange': '排列',
        'Shapes further down in the code are drawn on top.': '代码中越靠后的图形绘制在越上层。',
        'One step forward (Ctrl+↑)': '上移一层（Ctrl+↑）',
        'One step backward (Ctrl+↓)': '下移一层（Ctrl+↓）',
        'Bring to front (Ctrl+Shift+↑)': '置于顶层（Ctrl+Shift+↑）',
        'Send to back (Ctrl+Shift+↓)': '置于底层（Ctrl+Shift+↓）',
        '↑ Forward': '↑ 上移',
        '↓ Backward': '↓ 下移',
        '⤒ To front': '⤒ 置顶',
        '⤓ To back': '⤓ 置底',
        'Make a copy (Ctrl+D)': '创建副本（Ctrl+D）',
        'Remove this shape (Delete key)': '删除此图形（Delete 键）',
        '⧉ Duplicate': '⧉ 复制',
        '✕ Delete': '✕ 删除',
        'All attributes (advanced)': '所有属性（高级）',
        'Remove attribute': '删除属性',
        'Value': '值',
        'New attribute: name': '新属性：名称',
        'New attribute: value': '新属性：值',
        'Add attribute': '添加属性',
        'Invalid attribute name': '属性名称无效',
        'The attribute could not be set': '无法设置该属性',

        // Layers
        'Every element of the drawing. Shapes higher in the list are drawn on top. Click to select, drag to reorder (drop onto a group to put it inside), double-click to rename. The eye hides a shape.':
            '绘图的所有元素。列表中越靠上的图形绘制在越上层。点击选择，拖动调整顺序（拖到组上可放入组内），双击重命名。眼睛图标可隐藏图形。',
        'Show': '显示',
        'Hide': '隐藏',
        'One step forward': '上移一层',
        'One step backward': '下移一层',
        'Duplicate': '创建副本',
        'Delete': '删除',
        'Name (id)': '名称（id）',
        'Name of the element (id)': '元素名称（id）',
        'A group cannot be moved into itself': '组不能移入自身',
        'This element cannot hold other shapes': '此元素不能包含其他图形',
        'Use letters, digits, - and _ only, starting with a letter': '只能使用字母、数字、- 和 _，并以字母开头',

        // Messages
        'The browser storage is full': '浏览器存储已满',
        'The browser storage is full - download and delete drawings under "My drawings"':
            '浏览器存储已满，请在“我的绘图”中下载并删除绘图',
        'The browser storage is full - delete or download drawings under "My drawings" first':
            '浏览器存储已满，请先在“我的绘图”中删除或下载绘图',
        'The browser storage is full - delete or download some drawings first':
            '浏览器存储已满，请先删除或下载一些绘图',
        'Nothing to undo': '没有可撤销的操作',
        'Nothing to redo': '没有可重做的操作',
        'Please fix the error in the code first': '请先修正代码中的错误',
        'Deleted - Undo brings it back': '已删除，“撤销”可恢复',
        'Already at the front': '已在最顶层',
        'Already at the back': '已在最底层',
        'Grid on - shapes snap to the grid': '网格已开启，图形会吸附到网格',
        'Grid off': '网格已关闭',
        'Snap to grid: on': '吸附网格：开',
        'Snap to grid: off - shapes move freely': '吸附网格：关，图形可自由移动',
        'Code tidied up': '代码已整理',
        'This drawing is empty already': '此绘图已经是空的',
        'Everything in this drawing is removed; its size stays. "Undo" brings it back as long as the page is open.':
            '此绘图中的所有内容将被删除，尺寸保留。只要页面未关闭，“撤销”即可恢复。',
        'Start over': '重新开始',
        'Please choose an SVG file': '请选择一个 SVG 文件',
        'The file is larger than 8 MB': '文件大于 8 MB',
        'SVG pasted from the clipboard': '已从剪贴板粘贴 SVG',
        'Downloaded': '已下载',
        'Copied to the clipboard': '已复制到剪贴板',
        'This browser does not allow copying images': '此浏览器不允许复制图片',
        'Code copied': '代码已复制',
        'SVG downloaded': '已下载 SVG',
        'The image came out empty.': '生成的图片是空的。',
        'The drawing could not be rendered as an image.': '无法将绘图渲染为图片。',
        'Add': '添加',
        'Replace': '替换',
        'The drawing has no closing </svg> - the new shapes could not be added':
            '绘图没有结尾的 </svg>，无法添加新图形',
        'Drawing received - it has an error, see the code': '已收到绘图，但有错误，请查看代码',
        'Drop the SVG file here': '将 SVG 文件拖放到这里',

        // A link from the AI opened in a tab of its own (ai.js)
        'Open it here': '在这里打开',
        'The link could not be read': '无法读取该链接',
        'The drawing in this link is incomplete or damaged. If the AI\'s link was split over several lines (as in a terminal), copy the whole answer and paste it into the editor with Ctrl+V - the editor joins the lines.':
            '此链接中的绘图不完整或已损坏。如果 AI 的链接被拆成了多行（例如在终端中），请复制完整回答，在编辑器中按 Ctrl+V 粘贴，编辑器会把各行连起来。',
        'Loading…': '正在加载…',
        'Taken over by your editor': '已交给你的编辑器',
        'The drawing is now in the SVG Editor tab you already had open. Switch to that tab, or open it here.':
            '绘图现已在你之前打开的 SVG 编辑器标签页中。请切换到那个标签页，或在这里打开。',

        // Dialogs: shared
        'Close': '关闭',

        // Export
        'Export': '导出',
        'File name': '文件名',
        'Vector (sharp at any size)': '矢量（任意大小都清晰）',
        'SVG as in the editor': '与编辑器中相同的 SVG',
        'SVG tidied up': '整理后的 SVG',
        'SVG shrunk (smallest file)': '压缩后的 SVG（文件最小）',
        'Picture': '图片',
        'PNG (transparent background)': 'PNG（透明背景）',
        'Code for websites': '网站代码',
        'Data URI': 'Data URI',
        'Base64 data URI': 'Base64 Data URI',
        'CSS background-image': 'CSS background-image',
        'HTML <img> tag': 'HTML <img> 标签',
        'React component (JSX)': 'React 组件（JSX）',
        '1× (actual size)': '1×（实际大小）',
        'custom': '自定义',
        'Width (px)': '宽度（px）',
        'Height (px)': '高度（px）',
        'Background': '背景',
        'Background color': '背景颜色',
        'Background color · exported image': '背景颜色 · 导出的图片',
        'Width and height stay in proportion. JPG has no transparency, so it always gets a background.':
            '宽高保持比例。JPG 没有透明度，因此总会带背景。',
        'Result': '结果',
        'Download every format at once: SVG (3 variants), PNG, JPG, WebP, React, data URI, Base64, CSS and HTML':
            '一次下载所有格式：SVG（3 种）、PNG、JPG、WebP、React、Data URI、Base64、CSS 和 HTML',
        'All formats (ZIP)': '所有格式（ZIP）',
        'Download': '下载',

        // My drawings
        'Search by name': '按名称搜索',
        'Search your drawings': '搜索你的绘图',
        'Open an SVG file from your computer as a new drawing': '从电脑打开 SVG 文件作为新绘图',
        'New drawing': '新绘图',
        'Click a drawing to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            '点击绘图即可打开。绘图只保存在此浏览器中，不会上传。清除浏览器的网站数据会删除它们，请下载需要保留的绘图。',
        'Download every drawing as an .svg file in one ZIP': '将每个绘图作为 .svg 文件打包成一个 ZIP 下载',
        'Download all (ZIP)': '全部下载（ZIP）',
        'No drawings yet.': '还没有绘图。',
        'Rename': '重命名',
        'Download as .svg': '下载为 .svg',
        'This drawing is open': '此绘图已打开',
        'Click to open this drawing': '点击打开此绘图',
        'New name': '新名称',
        'The drawing is removed from this browser for good. Download it first if you want to keep a copy.':
            '绘图将从此浏览器中永久删除。如需保留副本，请先下载。',

        // AI assistant
        'Any AI can draw with you - ChatGPT, Claude, Gemini, Copilot.': '任何 AI 都能和你一起绘图：ChatGPT、Claude、Gemini、Copilot。',
        'Connected AI': '已连接的 AI',
        'Paste it into your AI and say what it should draw.': '将其粘贴到你的 AI 中，并说明要画什么。',
        // The step after "Copy prompt" inside another website (ai.js rewrites it): its parts
        'The AI answers with a link:': 'AI 会回复一个链接：',
        'paste its whole answer below': '将完整回答粘贴到下方',
        '(a clicked link opens a separate editor).': '（点击链接会打开另一个编辑器）。',
        'takes it back.': '可撤回。',
        'The AI answers with a link: click it, or paste the whole answer below.': 'AI 会回复一个链接：点击它，或将完整回答粘贴到下方。',
        'Connected to': '已连接到',
        'the AI sends its result there, and it opens here.': 'AI 会把结果发送到那里，然后在这里打开。',
        '(no key yet)': '（还没有密钥）',
        '(key valid while the editor is open)': '（编辑器打开期间密钥有效）',
        'What': '内容',
        'tells the AI': '告诉 AI',
        'The AI should': 'AI 应该',
        'Change “': '修改“',          // Change “name” -> «name» ändern
        '”': '”',
        'Make a new drawing': '新建一个绘图',
        'The AI\'s answer (or press Ctrl+V anywhere):': 'AI 的回答（或在任意位置按 Ctrl+V）：',
        'The drawing travels in the link after the “#”, which no server sees. What you paste into your AI is handled by its provider.':
            '绘图放在链接中“#”之后的部分，任何服务器都看不到。你粘贴到 AI 中的内容由其提供商处理。',
        'The prompt - copy it with Ctrl+C': '提示词，用 Ctrl+C 复制',
        'Copy prompt': '复制提示词',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)': '此处不允许复制，内容已在下方选中：请按 Ctrl+C（⌘C）',
        'Prompt copied - paste it into your AI and say what it should draw': '提示词已复制，粘贴到你的 AI 中并说明要画什么',
        'This link is incomplete or damaged - please ask the AI to send it again': '此链接不完整或已损坏，请让 AI 重新发送',

        // Save to your server
        'Save to your server': '保存到你的服务器',
        'Webhook address': 'Webhook 地址',
        'Send automatically a few seconds after each change (otherwise only when you click':
            '每次更改几秒后自动发送（否则仅在点击',
        'or press Ctrl+S)': '或按 Ctrl+S 时发送）',
        'Only for “': '仅用于“',
        '” (other drawings use the general address)': '”（其他绘图使用通用地址）',
        'What your server receives': '你的服务器收到的内容',
        'A POST request with JSON (your server must allow CORS from https://svg.giit.ch):':
            '一个带 JSON 的 POST 请求（你的服务器必须允许来自 https://svg.giit.ch 的 CORS）：',
        'Embed the editor in your website': '将编辑器嵌入你的网站',
        'Send now': '立即发送',
        'Save setting': '保存设置',

        // Help
        'How it works': '使用说明',
        'Keyboard shortcuts': '键盘快捷键',
        'Select and move': '选择并移动',
        'Rectangle, ellipse, line, freehand, text': '矩形、椭圆、直线、自由绘制、文字',
        'Zoom': '缩放',
        'Drag with the mouse wheel pressed': '按住鼠标滚轮拖动',
        'Double-click the mouse wheel': '双击鼠标滚轮',
        'Fit to window / actual size': '适合窗口 / 实际大小',
        'Grid on/off / snap on/off': '网格开/关 / 吸附开/关',
        'Arrow keys': '方向键',
        'Only horizontal/vertical, keep proportions': '仅水平/垂直，保持比例',
        'Select the surrounding group': '选择所在的组',
        'Remove the selection': '删除所选内容',
        'Undo / redo': '撤销 / 重做',
        'Download SVG (or save to your server) / export': '下载 SVG（或保存到服务器）/ 导出',
        'Deselect': '取消选择',

        // Color picker (colorpicker.js)
        'Color': '颜色',
        'Saturation and brightness (arrow keys)': '饱和度和亮度（方向键）',
        'Hue': '色相',
        'Before - click to go back': '之前的颜色，点击恢复',
        'New color': '新颜色',
        'Color as hex code, e.g. #ff0000': '十六进制颜色，例如 #ff0000',
        'Done': '完成',
        'Colors in this drawing': '此绘图中的颜色',
        'Basic colors': '基本颜色',

        /* Short words of the interface that other packs keep in English */
        'Code': '代码',
        'Format': '格式',
        'Name': '名称',
        'OK': '确定',
        /* ---------- Template placeholders (?template=) ---------- */
        'The drawing holds placeholders - its code stays as written': '绘图包含占位符，代码保持原样',
        'The style holds placeholders - edit it in the code': '样式包含占位符，请在代码中修改',
    },

    html: {
        // AI assistant
        'Click <b>Copy prompt</b>.': '点击<b>复制提示词</b>。',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'AI 会回复一个链接：点击它，或将完整回答粘贴到下方。<b>撤销</b>可撤回。',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'AI 会回复一个链接：<b>将完整回答粘贴到下方</b>（点击链接会打开另一个编辑器）。<b>撤销</b>可撤回。',

        // Save to your server
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your drawings are kept where you want them. Nothing is sent until you enter an address here.':
            '编辑器可以将每个保存的版本发送到你自己的服务器（<b>Webhook</b>），让你的绘图保存在你想要的地方。在此输入地址之前，不会发送任何内容。',
        'Token <small>(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)</small>': '令牌 <small>（可选，以“Authorization: Bearer …”发送；保留到关闭此标签页为止）</small>',
        'Also possible: <code>?src=&lt;URL of an .svg file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this drawing there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>svgeditor:ai</code>, <code>svgeditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            '还可以：<code>?src=&lt;URL of an .svg file&gt;</code> 打开文件，<code>&amp;webhook=&lt;URL&gt;</code> 将此绘图保存到该地址。编辑器也可以在单独的窗口中打开（<code>?embed=window</code>），你的页面还可以向它提供自己的 AI 提示词和会话密钥，让 AI 把结果发送到你的服务器（<code>svgeditor:ai</code>、<code>svgeditor:key-request</code>），参见编辑器下方的“在你自己的网站上使用编辑器”。详情见 <a href="/llms.txt">llms.txt</a>。',

        // Help
        '<b>Open</b> an SVG file, drag it into the window or paste SVG code - or start with <b>New</b>.':
            '<b>打开</b> SVG 文件、将其拖入窗口或粘贴 SVG 代码，或者从<b>新建</b>开始。',
        '<b>My drawings</b> (the folder button at the top left) lists every drawing kept in this browser: open, rename, duplicate, download or delete them.':
            '<b>我的绘图</b>（左上角的文件夹按钮）列出此浏览器中保存的所有绘图：可打开、重命名、创建副本、下载或删除。',
        '<b>Click a shape</b> on the canvas. Drag it to move it, drag the small squares to resize it. Colors, size and position are under <b>Properties</b> on the right.':
            '在画布上<b>点击图形</b>。拖动可移动它，拖动小方块可调整大小。颜色、大小和位置在右侧的<b>属性</b>中。',
        '<b>Draw</b> new shapes with the tools above the canvas.': '用画布上方的工具<b>绘制</b>新图形。',
        'The <b>code</b> on the left always shows the current drawing and can be edited directly.':
            '左侧的<b>代码</b>始终显示当前绘图，并可直接编辑。',
        '<b>Download SVG</b> saves the file, <b>Export</b> offers pictures (PNG, JPG) and code for websites.':
            '<b>下载 SVG</b> 保存文件，<b>导出</b>提供图片（PNG、JPG）和网站代码。',
        'Made a mistake? <b>Undo</b> takes back every step. Your drawings are kept in this browser, even after closing the page.':
            '出错了？<b>撤销</b>可撤回每一步。即使关闭页面，你的绘图也会保存在此浏览器中。',
        '<kbd>H</kbd> / hold <kbd>Space</kbd>': '<kbd>H</kbd> / 按住 <kbd>Space</kbd>',
        'Mouse wheel, <kbd>+</kbd> <kbd>-</kbd>': '鼠标滚轮，<kbd>+</kbd> <kbd>-</kbd>',
        'Move the selection by 1, with <kbd>Shift</kbd> by 10': '将所选内容移动 1，按住 <kbd>Shift</kbd> 移动 10',
        '<kbd>Shift</kbd> while dragging': '拖动时按住 <kbd>Shift</kbd>',
        '<kbd>Alt</kbd> + click': '<kbd>Alt</kbd> + 点击',
        '<kbd>Delete</kbd>': '<kbd>Delete</kbd>',
        'Forward / backward (with <kbd>Shift</kbd>: to front / to back)': '上移 / 下移（按住 <kbd>Shift</kbd>：置于顶层 / 底层）',
        'In the code: <kbd>Tab</kbd> indents, <kbd>Shift</kbd>+<kbd>Tab</kbd> outdents, clicking into a tag selects that shape on the canvas.':
            '在代码中：<kbd>Tab</kbd> 缩进，<kbd>Shift</kbd>+<kbd>Tab</kbd> 取消缩进，点击标签内部会在画布上选中该图形。',
    },

    patterns: [
        // Canvas hint with the grid
        ['^(.*?) ?Snapping to a ([\\d.]+) grid\\.$', (m, h, n) => `${h ? (HINT[h] || h) + ' ' : ''}吸附到 ${n} 的网格。`],
        ['^(.*?) ?Snap: ([\\d.]+)\\.$', (m, h, n) => `${h ? (HINT[h] || h) + ' ' : ''}吸附：${n}。`],

        // Code
        ['^(\\d+) lines · (.+)$', '$1 行 · $2'],
        ['^Line (\\d+), column (\\d+):$', (m, l, c) => `第 ${l} 行，第 ${c} 列：`],
        ['^Line (\\d+):$', (m, l) => `第 ${l} 行：`],
        ['^Line (\\d+), column (\\d+): (.*)$', (m, l, c, t) => `第 ${l} 行，第 ${c} 列：${CODE_ERROR[t] || t}`],
        ['^Line (\\d+): (.*)$', (m, l, t) => `第 ${l} 行：${CODE_ERROR[t] || t}`],
        ['^File shrunk: (\\d+) → (\\d+) bytes$', '文件已压缩：$1 → $2 字节'],

        // Properties
        [`^(Fill|Outline) color · (whole drawing|${TYPE_ANY})( #.+)?$`, (m, w, t, id) => `${w === 'Fill' ? '填充颜色' : '轮廓颜色'} · ${t === 'whole drawing' ? '整个绘图' : translateLabel(t)}${id || ''}`.replace(/^轮廓颜色/, '描边颜色')],
        ['^(.+) \\(inherited\\)$', '$1（继承）'],
        ['^Remove ([A-Za-z_:][\\w:.-]*)$', '删除 $1'],

        // Layers
        ['^<([^>]+)> - click to select, double-click to rename, drag to reorder$', '<$1>，点击选择，双击重命名，拖动调整顺序'],
        ['^<([^>]+)> - click to select$', '<$1>，点击选择'],
        [`^Show ${TYPE}$`, (m, t) => `显示${translateLabel(t)}`],
        [`^Hide ${TYPE}$`, (m, t) => `隐藏${translateLabel(t)}`],
        [`^Move ${TYPE} forward$`, (m, t) => `${translateLabel(t)}上移一层`],
        [`^Move ${TYPE} backward$`, (m, t) => `${translateLabel(t)}下移一层`],
        [`^Duplicate ${TYPE}$`, (m, t) => `复制${translateLabel(t)}`],
        [`^Delete ${TYPE}$`, (m, t) => `删除${translateLabel(t)}`],
        ['^The name “(.+)” is already used$', '名称“$1”已被使用'],

        // The open drawing
        ['^"(.+)" is open\\. My drawings: open, rename, duplicate or delete your drawings \\(Ctrl\\+O\\)$',
            '“$1”已打开。我的绘图：打开、重命名、复制或删除你的绘图（Ctrl+O）'],
        ['^Start "(.+)" over\\?$', '重新开始“$1”？'],
        ['^Start "(.+)" over$', '重新开始“$1”'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '“$1”现在是空的，“撤销”可恢复'],
        ['^Opened "(.+)" - it is now in "My drawings"$', '已打开“$1”，它现在在“我的绘图”中'],
        ['^New drawing "(.+)" from the AI - your other drawings are unchanged$', '来自 AI 的新绘图“$1”，其他绘图保持不变'],
        ['^New drawing "(.+)" - your other drawings are under "My drawings"$', '新绘图“$1”，其他绘图在“我的绘图”中'],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '“$1”已被 AI 修改，“撤销”可撤回'],
        ['^"(.+)" opened$', '已打开“$1”'],

        // Export
        ['^(\\d+) × (\\d+) pixels$', '$1 × $2 像素'],
        ['^([\\d,]+) bytes$', '$1 字节'],
        ['^ZIP with 11 files downloaded \\(pictures (\\d+) × (\\d+) px\\)$', '已下载含 11 个文件的 ZIP（图片 $1 × $2 px）'],

        // My drawings
        ['^(\\d+) (?:drawing|drawings) · (.+) in this browser$', (m, n, s) => `${n} 个绘图 · 此浏览器中 ${formatSize(s)}`],
        ['^Open now · (.+)$', (m, s) => `当前打开 · ${formatSize(s)}`],
        ['^just now · (.+)$', (m, s) => `刚刚 · ${formatSize(s)}`],
        ['^(\\d+) min ago · (.+)$', (m, n, s) => `${n} 分钟前 · ${formatSize(s)}`],
        ['^(\\d+) h ago · (.+)$', (m, n, s) => `${n} 小时前 · ${formatSize(s)}`],
        ['^yesterday · (.+)$', (m, s) => `昨天 · ${formatSize(s)}`],
        ['^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\\d{1,2}), (\\d{4}) · (.+)$', (m, mo, d, y, s) => `${y}年${MONTHS[mo]}月${d}日 · ${formatSize(s)}`],
        ['^(.+) \\(open now\\)$', '$1（当前打开）'],
        ['^Open (.+)$', '打开 $1'],
        ['^No drawing named "(.*)"\\.$', '没有名为“$1”的绘图。'],
        ['^Delete "(.+)"\\?$', '删除“$1”？'],
        ['^"(.+)" duplicated$', '已复制“$1”'],
        ['^"(.+)" deleted$', '已删除“$1”'],
        ['^ZIP with (\\d+) (?:drawing|drawings) downloaded$', '已下载含 $1 个绘图的 ZIP'],

        // AI
        ['^Part (\\d+) of (\\d+) received$', '已收到第 $1 部分，共 $2 部分'],
        ['^Open the other (link|links) from the AI too \\(still missing: part (.+)\\)\\.$',
            '请同时打开 AI 的其他链接（仍缺：第 $2 部分）。'],
        ['^Part (\\d+) of (\\d+) received - paste the other (link|links) too \\(missing: (.+)\\)$',
            '已收到第 $1 部分，共 $2 部分，请同时粘贴其他链接（缺少：$4）'],
        ['^The AI sends the drawing to (.+) with a key that only works for this session\\. What you paste into your AI is handled by its provider\\.$',
            'AI 会用仅对本次会话有效的密钥将绘图发送到 $1。你粘贴到 AI 中的内容由其提供商处理。'],
        ['^The AI sends its result to (.+) by itself, and it opens here\\. If it answers with a link, paste its answer below\\.$',
            'AI 会自行将结果发送到 $1，然后在这里打开。如果它回复的是链接，请将回答粘贴到下方。'],
        ['^No key from (.+) - the prompt asks the AI for a link instead$', '没有来自 $1 的密钥，提示词改为请 AI 回复链接'],
        ['^Prompt copied - the AI sends its result to (.+)$', '提示词已复制，AI 会将结果发送到 $1'],
    ],
};
