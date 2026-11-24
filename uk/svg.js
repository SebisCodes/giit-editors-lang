/* Ukrainian texts of the SVG editor: the bar, the canvas and its tools, the
   properties and layers, the dialogs (export, my drawings, AI, server, help),
   the color picker and the messages. What all editors share is in
   common.js; how the dictionaries are used is described in i18n.js.
   Names of drawings and elements are kept as they are and shown in «…». */

import { formatTime, formatThousands, getPlural } from './format.js';

/* Ukrainian plural: getPlural(5, 'рядок', 'рядки', 'рядків') -> 'рядків' (1, 21 … / 2-4, 22-24 … / the rest) */

/* "1,234" -> "1 234" (Ukrainian thousands separator: a no-break space) */

/* "1.5 KB" -> "1,5 КБ" */
const UNIT = { B: 'Б', KB: 'КБ', MB: 'МБ', GB: 'ГБ' };
/**
 * Translates a size with its unit ("1.5 KB").
 * @param {string} s - the English size text.
 * @returns {string} the text in the language.
 */
const formatSizeUnit = s => s.replace(/^([\d.]+) (B|KB|MB|GB)$/, (x, v, u) => `${v.replace('.', ',')} ${UNIT[u]}`);
/* "1,234 bytes" / "1.5 KB" -> Ukrainian number and unit */
/**
 * Translates the unit of a size text ("123 bytes").
 * @param {string} s - the English size text.
 * @returns {string} the text in the language.
 */
const formatSize = s => {
    const m = /^([\d,]+) bytes$/.exec(s);
    return m ? `${formatThousands(m[1])} ${getPlural(m[1], 'байт', 'байти', 'байтів')}` : formatSizeUnit(s);
};
const MONTHS = { Jan: 'січ.', Feb: 'лют.', Mar: 'берез.', Apr: 'квіт.', May: 'трав.', Jun: 'черв.', Jul: 'лип.', Aug: 'серп.', Sep: 'вер.', Oct: 'жовт.', Nov: 'лист.', Dec: 'груд.' };
/* When a document was last changed (files.js): "just now", "5 min ago", "Oct 25, 2026" … */

/* Names of the element types (LABELS in app.js). */
const LABEL = {
    'Drawing': 'Малюнок',
    'Rectangle': 'Прямокутник',
    'Circle': 'Коло',
    'Ellipse': 'Еліпс',
    'Line': 'Лінія',
    'Polyline': 'Ламана',
    'Polygon': 'Багатокутник',
    'Path': 'Контур',
    'Text': 'Текст',
    'Group': 'Група',
    'Image': 'Зображення',
    'Reused element': 'Повторно використаний елемент',
    'Nested SVG': 'Вкладений SVG',
    'Link': 'Посилання',
    'Embedded content': 'Вбудований вміст',
    'Definitions': 'Визначення',
    'Linear gradient': 'Лінійний градієнт',
    'Radial gradient': 'Радіальний градієнт',
    'Gradient stop': 'Точка градієнта',
    'Clip path': 'Обтравлювальний контур',
    'Mask': 'Маска',
    'Pattern': 'Візерунок',
    'Symbol': 'Символ',
    'Style sheet': 'Таблиця стилів',
    'Title': 'Заголовок',
    'Description': 'Опис',
    'Filter': 'Фільтр',
    'Marker': 'Маркер',
    'Switch': 'Перемикач',
    'Metadata': 'Метадані',
    'Script': 'Скрипт',
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
    'Click a shape to select it. Drag an empty spot to move the view.': 'Клацніть фігуру, щоб виділити її. Перетягніть порожнє місце, щоб перемістити область перегляду.',
    'Drag the shape to move it, or a small square to resize it. Delete key removes it.': 'Перетягніть фігуру, щоб перемістити її, або маленький квадрат, щоб змінити розмір. Клавіша Delete видаляє її.',
    'Drag to move the view. Use the mouse wheel to zoom.': 'Перетягування переміщує область перегляду. Коліщатко миші змінює масштаб.',
    'Drag to draw a rectangle. Hold Shift for a square.': 'Перетягніть, щоб намалювати прямокутник. Із Shift вийде квадрат.',
    'Drag to draw an ellipse. Hold Shift for a circle.': 'Перетягніть, щоб намалювати еліпс. Із Shift вийде коло.',
    'Drag to draw a line. Hold Shift for straight angles.': 'Перетягніть, щоб намалювати лінію. Із Shift - під прямими кутами.',
    'Hold the mouse button down and draw.': 'Утримуйте кнопку миші й малюйте.',
    'Click where the text should start.': 'Клацніть там, де має починатися текст.',
    'Tap a shape to select it. Swipe to scroll.': 'Торкніться фігури, щоб виділити її. Проведіть пальцем для прокручування.',
    'Drag it to move, drag a square to resize.': 'Тягніть, щоб перемістити, тягніть квадрат, щоб змінити розмір.',
    'Drag to move the view, pinch to zoom.': 'Тягніть, щоб перемістити область перегляду, змінюйте масштаб двома пальцями.',
    'Drag to draw a rectangle.': 'Тягніть, щоб намалювати прямокутник.',
    'Drag to draw an ellipse.': 'Тягніть, щоб намалювати еліпс.',
    'Drag to draw a line.': 'Тягніть, щоб намалювати лінію.',
    'Draw with your finger.': 'Малюйте пальцем.',
    'Tap where the text should start.': 'Торкніться там, де має починатися текст.',
};
/* The editor's own messages about the code (parse() in export.js); the browser's messages stay as they are. */
const CODE_ERROR = {
    'The outermost element must be <svg>.': 'Зовнішній елемент має бути <svg>.',
    'The <svg> element is missing xmlns="http://www.w3.org/2000/svg".': 'Елемент <svg> не має xmlns="http://www.w3.org/2000/svg".',
};

export default {
    text: {
        'Show or hide the side panel': 'Показати або сховати бічну панель',
        'Examples': 'Приклади',
        'Template': 'Шаблон',
        'The template with its placeholders as written': 'Шаблон із заповнювачами в початковому вигляді',
        'Placeholders': 'Заповнювачі',
        'The placeholders of the template - a click on one puts its tag at the cursor': 'Заповнювачі шаблону - клацання вставляє відповідний тег у позицію курсора',
        'Shown': 'Показано',
        'Hidden': 'Приховано',
        'View of the drawing': 'Вигляд малюнка',
        'The drawing filled with the examples': 'Малюнок, заповнений прикладами',
        'The examples could not be filled in - the canvas shows the template': 'Не вдалося підставити приклади - полотно показує шаблон',
        'This text shows an example - edit it in the code or in the template view': 'Цей текст показує приклад - змініть його в коді або у вигляді шаблону',
        ...LABEL,
        ...HINT,
        ...CODE_ERROR,

        // Top bar
        'SVG Editor': 'Редактор SVG',
        'SVG Editor - home': 'Редактор SVG - на головну',
        'File': 'Файл',
        'My drawings': 'Мої малюнки',
        'My drawings (Ctrl+O)': 'Мої малюнки (Ctrl+O)',
        'New drawing, or start this one over': 'Новий малюнок або почати цей заново',
        'New': 'Новий',
        'New blank drawing': 'Новий порожній малюнок',
        'Your other drawings stay as they are': 'Інші ваші малюнки залишаться без змін',
        'New from the example': 'Новий із прикладу',
        'A copy of the editor logo to try things out': 'Копія логотипа редактора для випробування інструментів',
        'Start this drawing over': 'Почати цей малюнок заново',
        'Empties it but keeps its size - "Undo" brings it back': 'Очищає його, але зберігає розмір - «Скасувати» поверне його',
        'Open an SVG file from your computer as a new drawing (you can also drag a file into the window)':
            'Відкрити файл SVG з комп’ютера як новий малюнок (файл можна й перетягнути у вікно)',
        'Open file…': 'Відкрити файл…',
        'Undo the last change (Ctrl+Z)': 'Скасувати останню зміну (Ctrl+Z)',
        'Undo': 'Скасувати',
        'Redo the change you just undid (Ctrl+Y)': 'Повторити скасовану зміну (Ctrl+Y)',
        'Redo': 'Повторити',
        'Output': 'Вивід',
        'Color theme': 'Колірна тема',
        'Light theme': 'Світла тема',
        'Dark theme': 'Темна тема',
        'Same as your system setting': 'Як у налаштуваннях системи',
        'Automatic theme (system setting)': 'Автоматична тема (налаштування системи)',
        'Let any AI draw in this editor': 'Нехай будь-який ШІ малює в цьому редакторі',
        'AI Assistant': 'ШІ-асистент',
        'Save to your own server and embed the editor in your website':
            'Збереження на ваш сервер і вбудовування редактора у ваш сайт',
        'Save to server': 'На сервер',
        'How it works and keyboard shortcuts (?)': 'Як це працює і поєднання клавіш (?)',
        'Help': 'Довідка',
        'Save the drawing as an .svg file (Ctrl+S)': 'Зберегти малюнок як файл .svg (Ctrl+S)',
        'Download SVG': 'Завантажити SVG',
        'Save as PNG, JPG, WebP, data URI, React and more (Ctrl+E)':
            'Зберегти як PNG, JPG, WebP, data URI, React та інше (Ctrl+E)',
        'Export…': 'Експорт…',

        // View tabs and the code
        'View': 'Вигляд',
        'Edit': 'Правка',
        'Side panel': 'Бічна панель',
        'Canvas': 'Полотно',
        'Properties': 'Властивості',
        'SVG code': 'Код SVG',
        'Copy the SVG code to the clipboard': 'Скопіювати код SVG у буфер обміну',
        'Copy code': 'Копіювати код',
        'Copy': 'Копіювати',
        'Indent and arrange the code neatly': 'Акуратно вирівняти й упорядкувати код',
        'Tidy up': 'Упорядкувати',
        'Remove comments and spaces to make the file smaller': 'Видалити коментарі й пробіли, щоб зменшити файл',
        'Shrink': 'Стиснути',
        'Drag to change the width of the code area': 'Перетягніть, щоб змінити ширину області коду',
        'Drag to change the width': 'Перетягніть, щоб змінити ширину',
        'Error in the code.': 'Помилка в коді.',
        'The preview shows the last working version.': 'Перегляд показує останню робочу версію.',
        'The preview shows the last working version': 'Перегляд показує останню робочу версію',
        'Add xmlns': 'Додати xmlns',

        // Tools, grid, view
        'Tools': 'Інструменти',
        'Select and move shapes (V)': 'Виділяти й переміщати фігури (V)',
        'Select': 'Виділення',
        'Move the view (H, or hold the space bar)': 'Переміщати область перегляду (H або утримуйте пробіл)',
        'Move the view': 'Переміщення перегляду',
        'Draw a rectangle (R)': 'Намалювати прямокутник (R)',
        'Draw an ellipse or circle (E)': 'Намалювати еліпс або коло (E)',
        'Draw a line (L)': 'Намалювати лінію (L)',
        'Draw freehand (P)': 'Малювати від руки (P)',
        'Freehand': 'Від руки',
        'Add text (T)': 'Додати текст (T)',
        'Show the grid and snap shapes to it (#)': 'Показати сітку й прив’язувати до неї фігури (#)',
        'Grid': 'Сітка',
        'Distance between grid lines, in the drawing\'s units': 'Відстань між лініями сітки, в одиницях малюнка',
        'Spacing': 'Крок',
        'Shapes jump onto the grid lines when moved or drawn (G)':
            'Фігури стрибають на лінії сітки під час переміщення й малювання (G)',
        'Snap': 'Прив’язка',
        'Canvas: click shapes, drag them, resize them with the handles':
            'Полотно: клацайте фігури, перетягуйте їх, змінюйте розмір за допомогою маркерів',
        'Background of the preview': 'Тло полотна',
        'Background behind the drawing (only for viewing, not saved in the file)':
            'Тло за малюнком (лише для перегляду, у файл не зберігається)',
        'Checkered background': 'Тло в клітинку',
        'White background': 'Біле тло',
        'Dark background': 'Темне тло',
        'No background': 'Без тла',
        'Zoom out (-)': 'Зменшити (-)',
        'Zoom out': 'Зменшити',
        'Show at actual size (1)': 'Показати в натуральну величину (1)',
        'Zoom in (+)': 'Збільшити (+)',
        'Zoom in': 'Збільшити',
        'Fit the drawing into the window (0)': 'Вписати малюнок у вікно (0)',
        'Fit to window': 'Вписати у вікно',
        'Fix the error in the code to edit the shapes again.': 'Виправте помилку в коді, щоб знову редагувати фігури.',

        // Properties
        'Colors, size and position of the selected shape': 'Кольори, розмір і положення виділеної фігури',
        'All elements of the drawing as a list': 'Усі елементи малюнка списком',
        'Layers': 'Шари',
        'The code contains an error. Once it is fixed, the shapes can be edited here again.':
            'У коді є помилка. Щойно її буде виправлено, фігури тут знову можна буде редагувати.',
        'No valid SVG loaded.': 'Коректний SVG не завантажено.',
        'Position in the document': 'Положення в документі',
        'Document': 'Документ',
        'Width': 'Ширина',
        'Height': 'Висота',
        'x y width height': 'x y ширина висота',
        'Click a shape on the canvas or in the Layers list to edit it. Alt+click selects the surrounding group.':
            'Клацніть фігуру на полотні або в списку «Шари», щоб редагувати її. Alt+клацання виділяє зовнішню групу.',
        'Colors for new shapes': 'Кольори для нових фігур',
        'Fill': 'Заливка',
        'Outline': 'Контур',
        'Outline width': 'Товщина контуру',
        'None': 'Немає',
        'Fill color of new shapes': 'Колір заливки нових фігур',
        'Outline color of new shapes': 'Колір контуру нових фігур',
        'Outline width of new shapes': 'Товщина контуру нових фігур',
        'Fill color · new shapes': 'Колір заливки · нові фігури',
        'Outline color · new shapes': 'Колір контуру · нові фігури',
        'Pick the fill color': 'Вибрати колір заливки',
        'Pick the outline color': 'Вибрати колір контуру',
        'Fill color': 'Колір заливки',
        'Outline color': 'Колір контуру',
        'Fill color as text': 'Колір заливки текстом',
        'Outline color as text': 'Колір контуру текстом',
        'Color as text, e.g. #ff0000, red or none': 'Колір текстом, напр. #ff0000, red або none',
        'No fill': 'Без заливки',
        'No outline': 'Без контуру',
        'Uses a gradient or pattern - picking a color replaces it.': 'Використовується градієнт або візерунок - вибір кольору замінить його.',
        'Opacity': 'Непрозорість',
        'Overall opacity': 'Загальна непрозорість',
        'Line style': 'Тип лінії',
        'solid': 'суцільна',
        'dashed': 'штрихова',
        'dotted': 'пунктирна',
        'dash-dot': 'штрихпунктирна',
        'Line ends': 'Кінці ліній',
        'default': 'типово',
        'flat': 'пласкі',
        'round': 'круглі',
        'square': 'квадратні',
        'Corners': 'Кути',
        'sharp': 'гострі',
        'beveled': 'скошені',
        'This text contains further elements (e.g. tspan) - please edit it in the code.':
            'Цей текст містить інші елементи (напр. tspan) - редагуйте його в коді.',
        'Size': 'Розмір',
        'Weight': 'Насиченість',
        'light': 'тонкий',
        'normal': 'звичайний',
        'semi-bold': 'напівжирний',
        'bold': 'жирний',
        'black': 'наджирний',
        'Font': 'Шрифт',
        'Alignment': 'Вирівнювання',
        'left': 'ліворуч',
        'center': 'по центру',
        'right': 'праворуч',
        'Position and size': 'Положення і розмір',
        'Left edge': 'Лівий край',
        'Top edge': 'Верхній край',
        'W': 'Ш',
        'Rotate 15° to the left': 'Повернути на 15° ліворуч',
        'Rotate 15° to the right': 'Повернути на 15° праворуч',
        '⟲ Rotate left': '⟲ Ліворуч',
        '⟳ Rotate right': '⟳ Праворуч',
        'Mirror left to right': 'Віддзеркалити по горизонталі: поміняти ліву й праву сторони',
        'Mirror top to bottom': 'Віддзеркалити по вертикалі: поміняти верх і низ',
        '⇆ Flip horizontal': '⇆ Віддзеркалити',
        '⇅ Flip vertical': '⇅ Віддзеркалити',
        'Arrange': 'Порядок',
        'Shapes further down in the code are drawn on top.': 'Фігури нижче в коді малюються поверх.',
        'One step forward (Ctrl+↑)': 'На крок уперед (Ctrl+↑)',
        'One step backward (Ctrl+↓)': 'На крок назад (Ctrl+↓)',
        'Bring to front (Ctrl+Shift+↑)': 'На передній план (Ctrl+Shift+↑)',
        'Send to back (Ctrl+Shift+↓)': 'На задній план (Ctrl+Shift+↓)',
        '↑ Forward': '↑ Уперед',
        '↓ Backward': '↓ Назад',
        '⤒ To front': '⤒ Нагору',
        '⤓ To back': '⤓ Донизу',
        'Make a copy (Ctrl+D)': 'Зробити копію (Ctrl+D)',
        'Remove this shape (Delete key)': 'Видалити цю фігуру (клавіша Delete)',
        '⧉ Duplicate': '⧉ Дублювати',
        '✕ Delete': '✕ Видалити',
        'All attributes (advanced)': 'Усі атрибути (для досвідчених)',
        'Remove attribute': 'Видалити атрибут',
        'Value': 'Значення',
        'New attribute: name': 'Новий атрибут: ім’я',
        'New attribute: value': 'Новий атрибут: значення',
        'Add attribute': 'Додати атрибут',
        'Invalid attribute name': 'Неприпустиме ім’я атрибута',
        'The attribute could not be set': 'Не вдалося задати атрибут',

        // Layers
        'Every element of the drawing. Shapes higher in the list are drawn on top. Click to select, drag to reorder (drop onto a group to put it inside), double-click to rename. The eye hides a shape.':
            'Усі елементи малюнка. Фігури вище в списку малюються поверх. Клацання виділяє, перетягування змінює порядок (відпустіть над групою, щоб помістити всередину), подвійне клацання перейменовує. «Око» приховує фігуру.',
        'Show': 'Показати',
        'Hide': 'Сховати',
        'One step forward': 'На крок уперед',
        'One step backward': 'На крок назад',
        'Duplicate': 'Дублювати',
        'Delete': 'Видалити',
        'Name (id)': 'Ім’я (id)',
        'Name of the element (id)': 'Ім’я елемента (id)',
        'A group cannot be moved into itself': 'Групу не можна перемістити в саму себе',
        'This element cannot hold other shapes': 'Цей елемент не може містити інші фігури',
        'Use letters, digits, - and _ only, starting with a letter': 'Лише літери, цифри, - і _, на початку - літера',

        // Messages
        'The browser storage is full': 'Сховище браузера заповнене',
        'The browser storage is full - download and delete drawings under "My drawings"':
            'Сховище браузера заповнене - завантажте й видаліть малюнки в «Мої малюнки»',
        'The browser storage is full - delete or download drawings under "My drawings" first':
            'Сховище браузера заповнене - спершу видаліть або завантажте малюнки в «Мої малюнки»',
        'The browser storage is full - delete or download some drawings first':
            'Сховище браузера заповнене - спершу видаліть або завантажте кілька малюнків',
        'Nothing to undo': 'Нічого скасовувати',
        'Nothing to redo': 'Нічого повторювати',
        'Please fix the error in the code first': 'Спершу виправте помилку в коді',
        'Deleted - Undo brings it back': 'Видалено - «Скасувати» поверне',
        'Already at the front': 'Уже на передньому плані',
        'Already at the back': 'Уже на задньому плані',
        'Grid on - shapes snap to the grid': 'Сітку ввімкнено - фігури прив’язуються до сітки',
        'Grid off': 'Сітку вимкнено',
        'Snap to grid: on': 'Прив’язка до сітки: увімк.',
        'Snap to grid: off - shapes move freely': 'Прив’язка до сітки: вимк. - фігури рухаються вільно',
        'Code tidied up': 'Код упорядковано',
        'This drawing is empty already': 'Цей малюнок уже порожній',
        'Everything in this drawing is removed; its size stays. "Undo" brings it back as long as the page is open.':
            'Усе на цьому малюнку видалено; розмір залишається. «Скасувати» поверне це, поки сторінка відкрита.',
        'Start over': 'Почати заново',
        'Please choose an SVG file': 'Виберіть файл SVG',
        'The file is larger than 8 MB': 'Файл більший за 8 МБ',
        'SVG pasted from the clipboard': 'SVG вставлено з буфера обміну',
        'Downloaded': 'Завантажено',
        'Copied to the clipboard': 'Скопійовано в буфер обміну',
        'This browser does not allow copying images': 'Цей браузер не дозволяє копіювати зображення',
        'Code copied': 'Код скопійовано',
        'SVG downloaded': 'SVG завантажено',
        'The image came out empty.': 'Зображення вийшло порожнім.',
        'The drawing could not be rendered as an image.': 'Не вдалося відобразити малюнок як зображення.',
        'Add': 'Додати',
        'Replace': 'Замінити',
        'The drawing has no closing </svg> - the new shapes could not be added':
            'Малюнок не має закривального </svg> - нові фігури не вдалося додати',
        'Drawing received - it has an error, see the code': 'Малюнок отримано - у ньому помилка, див. код',
        'Drop the SVG file here': 'Перетягніть сюди файл SVG',

        // A link from the AI opened in a tab of its own (ai.js)
        'Open it here': 'Відкрити тут',
        'The link could not be read': 'Не вдалося прочитати посилання',
        'The drawing in this link is incomplete or damaged. If the AI\'s link was split over several lines (as in a terminal), copy the whole answer and paste it into the editor with Ctrl+V - the editor joins the lines.':
            'Малюнок у цьому посиланні неповний або пошкоджений. Якщо посилання ШІ розбите на кілька рядків (як у терміналі), скопіюйте всю відповідь і вставте її в редактор через Ctrl+V - редактор з’єднає рядки.',
        'Loading…': 'Завантаження…',
        'Taken over by your editor': 'Передано у ваш редактор',
        'The drawing is now in the SVG Editor tab you already had open. Switch to that tab, or open it here.':
            'Малюнок тепер у вкладці редактора SVG, яку ви вже мали відкритою. Перейдіть до тієї вкладки або відкрийте його тут.',

        // Dialogs: shared
        'Close': 'Закрити',

        // Export
        'Export': 'Експорт',
        'File name': 'Ім’я файлу',
        'Vector (sharp at any size)': 'Вектор (чіткий у будь-якому розмірі)',
        'SVG as in the editor': 'SVG як у редакторі',
        'SVG tidied up': 'Упорядкований SVG',
        'SVG shrunk (smallest file)': 'Стиснутий SVG (найменший файл)',
        'Picture': 'Зображення',
        'PNG (transparent background)': 'PNG (прозоре тло)',
        'Code for websites': 'Код для сайтів',
        'Data URI': 'URI даних (data URI)',
        'Base64 data URI': 'URI даних у Base64',
        'CSS background-image': 'Тло CSS (background-image)',
        'HTML <img> tag': 'Тег HTML <img>',
        'React component (JSX)': 'Компонент React (JSX)',
        '1× (actual size)': '1× (натуральна величина)',
        'custom': 'власний',
        'Width (px)': 'Ширина (px)',
        'Height (px)': 'Висота (px)',
        'Background': 'Тло',
        'Background color': 'Колір тла',
        'Background color · exported image': 'Колір тла · експортоване зображення',
        'Width and height stay in proportion. JPG has no transparency, so it always gets a background.':
            'Ширина й висота змінюються пропорційно. JPG не має прозорості, тому завжди отримує тло.',
        'Result': 'Результат',
        'Download every format at once: SVG (3 variants), PNG, JPG, WebP, React, data URI, Base64, CSS and HTML':
            'Завантажити всі формати одразу: SVG (3 варіанти), PNG, JPG, WebP, React, data URI, Base64, CSS і HTML',
        'All formats (ZIP)': 'Усі формати (ZIP)',
        'Download': 'Завантажити',

        // My drawings
        'Search by name': 'Пошук за назвою',
        'Search your drawings': 'Пошук у ваших малюнках',
        'Open an SVG file from your computer as a new drawing': 'Відкрити файл SVG з комп’ютера як новий малюнок',
        'New drawing': 'Новий малюнок',
        'Click a drawing to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Клацніть малюнок, щоб відкрити його. Малюнки зберігаються лише в цьому браузері - нічого не вивантажується на сервер. Очищення даних сайту в браузері видалить їх, тому завантажте ті, які хочете зберегти.',
        'Download every drawing as an .svg file in one ZIP': 'Завантажити всі малюнки як файли .svg одним ZIP',
        'Download all (ZIP)': 'Завантажити все (ZIP)',
        'No drawings yet.': 'Малюнків поки немає.',
        'Rename': 'Перейменувати',
        'Download as .svg': 'Завантажити як .svg',
        'This drawing is open': 'Цей малюнок відкрито',
        'Click to open this drawing': 'Клацніть, щоб відкрити цей малюнок',
        'New name': 'Нове ім’я',
        'The drawing is removed from this browser for good. Download it first if you want to keep a copy.':
            'Малюнок буде остаточно видалено з цього браузера. Якщо хочете зберегти копію, спершу завантажте його.',

        // AI assistant
        'Any AI can draw with you - ChatGPT, Claude, Gemini, Copilot.':
            'З вами може малювати будь-який ШІ - ChatGPT, Claude, Gemini, Copilot.',
        'Connected AI': 'Під’єднаний ШІ',
        'Paste it into your AI and say what it should draw.': 'Вставте його у свій ШІ та скажіть, що треба намалювати.',
        // The step after "Copy prompt" inside another website (ai.js rewrites it): its parts
        'The AI answers with a link:': 'ШІ відповідає посиланням:',
        'paste its whole answer below': 'вставте всю його відповідь нижче',
        '(a clicked link opens a separate editor).': '(клацнуте посилання відкриває окремий редактор).',
        'takes it back.': 'поверне все назад.',
        'The AI answers with a link: click it, or paste the whole answer below.':
            'ШІ відповідає посиланням: клацніть його або вставте всю відповідь нижче.',
        'Connected to': 'Під’єднано до',
        'the AI sends its result there, and it opens here.': 'ШІ надсилає туди свій результат, і він відкривається тут.',
        '(no key yet)': '(ключа поки немає)',
        '(key valid while the editor is open)': '(ключ дійсний, поки редактор відкрито)',
        'What': 'Що',
        'tells the AI': 'повідомляє ШІ',
        'The AI should': 'ШІ має',
        'Change “': 'Змінити «',
        '”': '»',
        'Make a new drawing': 'Створити новий малюнок',
        'The AI\'s answer (or press Ctrl+V anywhere):': 'Відповідь ШІ (або натисніть Ctrl+V будь-де):',
        'The drawing travels in the link after the “#”, which no server sees. What you paste into your AI is handled by its provider.':
            'Малюнок передається в посиланні після «#», якого не бачить жоден сервер. Те, що ви вставляєте у свій ШІ, обробляє його провайдер.',
        'The prompt - copy it with Ctrl+C': 'Промпт - скопіюйте його через Ctrl+C',
        'Copy prompt': 'Копіювати промпт',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)':
            'Копіювання тут заборонене - текст виділено нижче: натисніть Ctrl+C (⌘C)',
        'Prompt copied - paste it into your AI and say what it should draw':
            'Промпт скопійовано - вставте його у свій ШІ та скажіть, що треба намалювати',
        'This link is incomplete or damaged - please ask the AI to send it again':
            'Посилання неповне або пошкоджене - попросіть ШІ надіслати його ще раз',

        // Save to your server
        'Save to your server': 'Збереження на ваш сервер',
        'Webhook address': 'Адреса вебхука',
        'Send automatically a few seconds after each change (otherwise only when you click':
            'Надсилати автоматично через кілька секунд після кожної зміни (інакше лише коли ви натискаєте',
        'or press Ctrl+S)': 'або Ctrl+S)',
        'Only for “': 'Лише для «',
        '” (other drawings use the general address)': '» (інші малюнки використовують загальну адресу)',
        'What your server receives': 'Що отримує ваш сервер',
        'A POST request with JSON (your server must allow CORS from https://svg.giit.ch):':
            'POST-запит із JSON (ваш сервер має дозволяти CORS з https://svg.giit.ch):',
        'Embed the editor in your website': 'Вбудувати редактор у ваш сайт',
        'Send now': 'Надіслати зараз',
        'Save setting': 'Зберегти налаштування',

        // Help
        'How it works': 'Як це працює',
        'Keyboard shortcuts': 'Поєднання клавіш',
        'Select and move': 'Виділення й переміщення',
        'Rectangle, ellipse, line, freehand, text': 'Прямокутник, еліпс, лінія, від руки, текст',
        'Zoom': 'Масштаб',
        'Drag with the mouse wheel pressed': 'Тягнути з натиснутим коліщатком миші',
        'Double-click the mouse wheel': 'Подвійне клацання коліщатком миші',
        'Fit to window / actual size': 'Вписати у вікно / натуральна величина',
        'Grid on/off / snap on/off': 'Сітка увімк./вимк. / прив’язка увімк./вимк.',
        'Arrow keys': 'Клавіші зі стрілками',
        'Only horizontal/vertical, keep proportions': 'Лише по горизонталі/вертикалі, зберігати пропорції',
        'Select the surrounding group': 'Виділити зовнішню групу',
        'Remove the selection': 'Видалити виділене',
        'Undo / redo': 'Скасувати / повторити',
        'Download SVG (or save to your server) / export': 'Завантажити SVG (або зберегти на ваш сервер) / експорт',
        'Deselect': 'Зняти виділення',

        // Color picker (colorpicker.js)
        'Color': 'Колір',
        'Saturation and brightness (arrow keys)': 'Насиченість і яскравість (клавіші зі стрілками)',
        'Hue': 'Відтінок',
        'Before - click to go back': 'Попередній - клацніть, щоб повернутися',
        'New color': 'Новий колір',
        'Color as hex code, e.g. #ff0000': 'Колір у вигляді шістнадцяткового коду, напр. #ff0000',
        'Done': 'Готово',
        'Colors in this drawing': 'Кольори цього малюнка',
        'Basic colors': 'Основні кольори',
        /* Words that German keeps from the English, but Ukrainian does not */
        'Code': 'Код',
        'Format': 'Формат',
        'Token': 'Токен',
        'Name': 'Ім’я',
        /* ---------- Template placeholders (?template=) ---------- */
        'The drawing holds placeholders - its code stays as written': 'Малюнок містить заповнювачі - його код залишається без змін',
        'The style holds placeholders - edit it in the code': 'Стиль містить заповнювачі - змініть його в коді',
    },
    html: {
        // AI assistant
        'Click <b>Copy prompt</b>.': 'Натисніть <b>Копіювати промпт</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'ШІ відповідає посиланням: клацніть його або вставте всю відповідь нижче. <b>Скасувати</b> поверне все назад.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'ШІ відповідає посиланням: <b>вставте всю його відповідь нижче</b> (клацнуте посилання відкриває окремий редактор). <b>Скасувати</b> поверне все назад.',

        // Save to your server
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your drawings are kept where you want them. Nothing is sent until you enter an address here.':
            'Редактор може надсилати кожну збережену версію на ваш власний сервер (<b>вебхук</b>), щоб ваші малюнки зберігалися там, де ви хочете. Нічого не надсилається, доки ви не введете тут адресу.',
        'Token <small>(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)</small>':
            'Токен <small>(необов’язково, надсилається як «Authorization: Bearer …»; зберігається, доки відкрита ця вкладка)</small>',
        'Also possible: <code>?src=&lt;URL of an .svg file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this drawing there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>svgeditor:ai</code>, <code>svgeditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Також можна: <code>?src=&lt;URL of an .svg file&gt;</code> відкриває файл, <code>&amp;webhook=&lt;URL&gt;</code> зберігає туди цей малюнок. Редактор може відкриватися й в окремому вікні (<code>?embed=window</code>), а ваша сторінка може передати йому власний промпт для ШІ та ключ сеансу, щоб ШІ надсилав результат на ваш сервер (<code>svgeditor:ai</code>, <code>svgeditor:key-request</code>) - див. «Редактор на вашому сайті» під редактором. Подробиці - у <a href="/llms.txt">llms.txt</a>.',

        // Help
        '<b>Open</b> an SVG file, drag it into the window or paste SVG code - or start with <b>New</b>.':
            '<b>Відкрийте</b> файл SVG, перетягніть його у вікно або вставте код SVG - чи почніть із <b>Новий</b>.',
        '<b>My drawings</b> (the folder button at the top left) lists every drawing kept in this browser: open, rename, duplicate, download or delete them.':
            '<b>Мої малюнки</b> (кнопка з текою вгорі ліворуч) показують усі малюнки, що зберігаються в цьому браузері: відкривайте, перейменовуйте, дублюйте, завантажуйте або видаляйте їх.',
        '<b>Click a shape</b> on the canvas. Drag it to move it, drag the small squares to resize it. Colors, size and position are under <b>Properties</b> on the right.':
            '<b>Клацніть фігуру</b> на полотні. Перетягніть її, щоб перемістити, перетягніть маленькі квадрати, щоб змінити розмір. Кольори, розмір і положення - у <b>Властивостях</b> праворуч.',
        '<b>Draw</b> new shapes with the tools above the canvas.': '<b>Малюйте</b> нові фігури інструментами над полотном.',
        'The <b>code</b> on the left always shows the current drawing and can be edited directly.':
            '<b>Код</b> ліворуч завжди показує поточний малюнок, і його можна редагувати напряму.',
        '<b>Download SVG</b> saves the file, <b>Export</b> offers pictures (PNG, JPG) and code for websites.':
            '<b>Завантажити SVG</b> зберігає файл, <b>Експорт</b> пропонує зображення (PNG, JPG) і код для сайтів.',
        'Made a mistake? <b>Undo</b> takes back every step. Your drawings are kept in this browser, even after closing the page.':
            'Помилилися? <b>Скасувати</b> повертає кожен крок. Ваші малюнки зберігаються в цьому браузері навіть після закриття сторінки.',
        '<kbd>H</kbd> / hold <kbd>Space</kbd>': '<kbd>H</kbd> / утримуйте <kbd>Пробіл</kbd>',
        'Mouse wheel, <kbd>+</kbd> <kbd>-</kbd>': 'Коліщатко миші, <kbd>+</kbd> <kbd>-</kbd>',
        'Move the selection by 1, with <kbd>Shift</kbd> by 10': 'Зсунути виділене на 1, із <kbd>Shift</kbd> на 10',
        '<kbd>Shift</kbd> while dragging': '<kbd>Shift</kbd> під час перетягування',
        '<kbd>Alt</kbd> + click': '<kbd>Alt</kbd> + клацання',
        '<kbd>Delete</kbd>': '<kbd>Delete</kbd>',
        'Forward / backward (with <kbd>Shift</kbd>: to front / to back)':
            'Уперед / назад (із <kbd>Shift</kbd>: на передній / задній план)',
        'In the code: <kbd>Tab</kbd> indents, <kbd>Shift</kbd>+<kbd>Tab</kbd> outdents, clicking into a tag selects that shape on the canvas.':
            'У коді: <kbd>Tab</kbd> збільшує відступ, <kbd>Shift</kbd>+<kbd>Tab</kbd> зменшує, клацання всередині тегу виділяє цю фігуру на полотні.',
    },
    patterns: [
        // Canvas hint with the grid
        ['^(.*?) ?Snapping to a ([\\d.]+) grid\\.$', (m, h, k) => `${h ? (HINT[h] || h) + ' ' : ''}Прив’язка до сітки (${k}).`],
        ['^(.*?) ?Snap: ([\\d.]+)\\.$', (m, h, k) => `${h ? (HINT[h] || h) + ' ' : ''}Прив’язка: ${k}.`],

        // Code
        ['^(\\d+) lines · (.+)$', (m, k, s) => `${k} ${getPlural(k, 'рядок', 'рядки', 'рядків')} · ${formatSize(s)}`],
        ['^Line (\\d+), column (\\d+):$', (m, l, c) => `Рядок ${l}, стовпець ${c}:`],
        ['^Line (\\d+):$', (m, l) => `Рядок ${l}:`],
        ['^Line (\\d+), column (\\d+): (.*)$', (m, l, c, t) => `Рядок ${l}, стовпець ${c}: ${CODE_ERROR[t] || t}`],
        ['^Line (\\d+): (.*)$', (m, l, t) => `Рядок ${l}: ${CODE_ERROR[t] || t}`],
        ['^File shrunk: (\\d+) → (\\d+) bytes$', (m, a, b) => `Файл стиснуто: ${a} → ${b} ${getPlural(b, 'байт', 'байти', 'байтів')}`],

        // Properties
        [`^(Fill|Outline) color · (whole drawing|${TYPE_ANY})( #.+)?$`, (m, w, t, id) => `${w === 'Fill' ? 'Колір заливки' : 'Колір контуру'} · ${t === 'whole drawing' ? 'увесь малюнок' : translateLabel(t)}${id || ''}`],
        ['^(.+) \\(inherited\\)$', '$1 (успадковано)'],
        ['^Remove ([A-Za-z_:][\\w:.-]*)$', 'Видалити $1'],

        // Layers
        ['^<([^>]+)> - click to select, double-click to rename, drag to reorder$', '<$1> - клацання виділяє, подвійне клацання перейменовує, перетягування змінює порядок'],
        ['^<([^>]+)> - click to select$', '<$1> - клацання виділяє'],
        [`^Show ${TYPE}$`, (m, t) => `Показати: ${translateLabel(t)}`],
        [`^Hide ${TYPE}$`, (m, t) => `Сховати: ${translateLabel(t)}`],
        [`^Move ${TYPE} forward$`, (m, t) => `${translateLabel(t)}: уперед`],
        [`^Move ${TYPE} backward$`, (m, t) => `${translateLabel(t)}: назад`],
        [`^Duplicate ${TYPE}$`, (m, t) => `Дублювати: ${translateLabel(t)}`],
        [`^Delete ${TYPE}$`, (m, t) => `Видалити: ${translateLabel(t)}`],
        ['^The name “(.+)” is already used$', 'Ім’я «$1» уже зайняте'],

        // The open drawing
        ['^"(.+)" is open\\. My drawings: open, rename, duplicate or delete your drawings \\(Ctrl\\+O\\)$', '«$1» відкрито. Мої малюнки: відкривайте, перейменовуйте, дублюйте або видаляйте малюнки (Ctrl+O)'],
        ['^Start "(.+)" over\\?$', 'Почати «$1» заново?'],
        ['^Start "(.+)" over$', 'Почати «$1» заново'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '«$1» тепер порожній - «Скасувати» поверне вміст'],
        ['^Opened "(.+)" - it is now in "My drawings"$', '«$1» відкрито - тепер він у «Мої малюнки»'],
        ['^New drawing "(.+)" from the AI - your other drawings are unchanged$', 'Новий малюнок «$1» від ШІ - інші ваші малюнки не змінилися'],
        ['^New drawing "(.+)" - your other drawings are under "My drawings"$', 'Новий малюнок «$1» - інші ваші малюнки в «Мої малюнки»'],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '«$1» змінено ШІ - «Скасувати» поверне все назад'],
        ['^"(.+)" opened$', '«$1» відкрито'],

        // Export
        ['^(\\d+) × (\\d+) pixels$', '$1 × $2 пікселів'],
        ['^([\\d,]+) bytes$', (m, b) => formatSize(m)],
        ['^ZIP with 11 files downloaded \\(pictures (\\d+) × (\\d+) px\\)$', 'ZIP з 11 файлами завантажено (зображення $1 × $2 px)'],

        // My drawings
        ['^(\\d+) (?:drawing|drawings) · (.+) in this browser$', (m, k, s) => `${k} ${getPlural(k, 'малюнок', 'малюнки', 'малюнків')} · ${formatSize(s)} у цьому браузері`],
        ['^Open now · (.+)$', (m, s) => `Відкрито зараз · ${formatSize(s)}`],
        ['^just now · (.+)$', (m, s) => `щойно · ${formatSize(s)}`],
        ['^(\\d+) min ago · (.+)$', (m, k, s) => `${k} хв тому · ${formatSize(s)}`],
        ['^(\\d+) h ago · (.+)$', (m, k, s) => `${k} год тому · ${formatSize(s)}`],
        ['^yesterday · (.+)$', (m, s) => `учора · ${formatSize(s)}`],
        ['^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\\d{1,2}), (\\d{4}) · (.+)$', (m, mo, d, y, s) => `${d} ${MONTHS[mo]} ${y} р. · ${formatSize(s)}`],
        ['^(.+) \\(open now\\)$', '$1 (відкрито зараз)'],
        ['^Open (.+)$', 'Відкрити $1'],
        ['^No drawing named "(.*)"\\.$', 'Немає малюнка з назвою «$1».'],
        ['^Delete "(.+)"\\?$', 'Видалити «$1»?'],
        ['^"(.+)" duplicated$', '«$1» продубльовано'],
        ['^"(.+)" deleted$', '«$1» видалено'],
        ['^ZIP with (\\d+) (?:drawing|drawings) downloaded$', (m, k) => `ZIP із ${k} ${getPlural(k, 'малюнком', 'малюнками', 'малюнками')} завантажено`],

        // AI
        ['^Part (\\d+) of (\\d+) received$', 'Частину $1 з $2 отримано'],
        ['^Open the other (link|links) from the AI too \\(still missing: part (.+)\\)\\.$', (m, l, p) => `Відкрийте й ${l === 'link' ? 'інше посилання' : 'інші посилання'} від ШІ (ще бракує частини ${p}).`],
        ['^Part (\\d+) of (\\d+) received - paste the other (link|links) too \\(missing: (.+)\\)$', (m, a, b, l, p) => `Частину ${a} з ${b} отримано - вставте й ${l === 'link' ? 'інше посилання' : 'інші посилання'} (бракує: ${p})`],
        ['^The AI sends the drawing to (.+) with a key that only works for this session\\. What you paste into your AI is handled by its provider\\.$', 'ШІ надсилає малюнок на $1 із ключем, який діє лише в цьому сеансі. Те, що ви вставляєте у свій ШІ, обробляє його провайдер.'],
        ['^The AI sends its result to (.+) by itself, and it opens here\\. If it answers with a link, paste its answer below\\.$', 'ШІ сам надсилає свій результат на $1, і він відкривається тут. Якщо ШІ відповідає посиланням, вставте його відповідь нижче.'],
        ['^No key from (.+) - the prompt asks the AI for a link instead$', 'Немає ключа від $1 - натомість промпт просить ШІ надіслати посилання'],
        ['^Prompt copied - the AI sends its result to (.+)$', 'Промпт скопійовано - ШІ надішле свій результат на $1'],
    ],
};
