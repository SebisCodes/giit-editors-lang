/* Russian texts of the SVG editor: the bar, the canvas and its tools, the
   properties and layers, the dialogs (export, my drawings, AI, server, help),
   the color picker and the messages. What all editors share is in
   common.js; how the dictionaries are used is described in i18n.js.
   Names of drawings and elements are kept as they are and shown in «…». */

import { formatTime, getPlural } from './format.js';

/* Russian plural: getPlural(5, 'строка', 'строки', 'строк') -> 'строк' (1, 21 … / 2-4, 22-24 … / the rest) */

/* "1,234" -> "1 234" (Russian thousands separator: a no-break space) */
/**
 * Writes the thousands separator of the language into a number ("1,234").
 * @param {string} s - the number with English separators.
 * @returns {string} the text in the language.
 */
const formatThousands = s => s.replace(/,/g, ' ');
/* "1.5 KB" -> "1,5 КБ" */
const UNIT = { B: 'Б', KB: 'КБ', MB: 'МБ', GB: 'ГБ' };
/**
 * Translates a size with its unit ("1.5 KB").
 * @param {string} s - the English size text.
 * @returns {string} the text in the language.
 */
const formatSizeUnit = s => s.replace(/^([\d.]+) (B|KB|MB|GB)$/, (x, v, u) => `${v.replace('.', ',')} ${UNIT[u]}`);
/* "1,234 bytes" / "1.5 KB" -> Russian number and unit */
/**
 * Translates the unit of a size text ("123 bytes").
 * @param {string} s - the English size text.
 * @returns {string} the text in the language.
 */
const formatSize = s => {
    const m = /^([\d,]+) bytes$/.exec(s);
    return m ? `${formatThousands(m[1])} ${getPlural(m[1], 'байт', 'байта', 'байт')}` : formatSizeUnit(s);
};
const MONTHS = { Jan: 'янв.', Feb: 'февр.', Mar: 'марта', Apr: 'апр.', May: 'мая', Jun: 'июня', Jul: 'июля', Aug: 'авг.', Sep: 'сент.', Oct: 'окт.', Nov: 'нояб.', Dec: 'дек.' };
/* When a document was last changed (files.js): "just now", "5 min ago", "Oct 25, 2026" … */

/* Names of the element types (LABELS in app.js). */
const LABEL = {
    'Drawing': 'Рисунок',
    'Rectangle': 'Прямоугольник',
    'Circle': 'Круг',
    'Ellipse': 'Эллипс',
    'Line': 'Линия',
    'Polyline': 'Ломаная',
    'Polygon': 'Многоугольник',
    'Path': 'Контур',
    'Text': 'Текст',
    'Group': 'Группа',
    'Image': 'Изображение',
    'Reused element': 'Повторно используемый элемент',
    'Nested SVG': 'Вложенный SVG',
    'Link': 'Ссылка',
    'Embedded content': 'Встроенное содержимое',
    'Definitions': 'Определения',
    'Linear gradient': 'Линейный градиент',
    'Radial gradient': 'Радиальный градиент',
    'Gradient stop': 'Точка градиента',
    'Clip path': 'Обтравочный контур',
    'Mask': 'Маска',
    'Pattern': 'Узор',
    'Symbol': 'Символ',
    'Style sheet': 'Таблица стилей',
    'Title': 'Заголовок',
    'Description': 'Описание',
    'Filter': 'Фильтр',
    'Marker': 'Маркер',
    'Switch': 'Переключатель',
    'Metadata': 'Метаданные',
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
    'Click a shape to select it. Drag an empty spot to move the view.': 'Щёлкните по фигуре, чтобы выделить её. Потяните за пустое место, чтобы переместить область просмотра.',
    'Drag the shape to move it, or a small square to resize it. Delete key removes it.': 'Перетащите фигуру, чтобы переместить её, или маленький квадрат, чтобы изменить размер. Клавиша Delete удаляет её.',
    'Drag to move the view. Use the mouse wheel to zoom.': 'Перетаскивание перемещает область просмотра. Колесо мыши меняет масштаб.',
    'Drag to draw a rectangle. Hold Shift for a square.': 'Перетащите, чтобы нарисовать прямоугольник. С Shift получится квадрат.',
    'Drag to draw an ellipse. Hold Shift for a circle.': 'Перетащите, чтобы нарисовать эллипс. С Shift получится круг.',
    'Drag to draw a line. Hold Shift for straight angles.': 'Перетащите, чтобы нарисовать линию. С Shift - под прямыми углами.',
    'Hold the mouse button down and draw.': 'Удерживайте кнопку мыши и рисуйте.',
    'Click where the text should start.': 'Щёлкните там, где должен начинаться текст.',
    'Tap a shape to select it. Swipe to scroll.': 'Коснитесь фигуры, чтобы выделить её. Проведите пальцем для прокрутки.',
    'Drag it to move, drag a square to resize.': 'Тяните, чтобы переместить, тяните квадрат, чтобы изменить размер.',
    'Drag to move the view, pinch to zoom.': 'Перетаскивайте для перемещения области просмотра, сводите и разводите пальцы для масштабирования.',
    'Drag to draw a rectangle.': 'Тяните, чтобы нарисовать прямоугольник.',
    'Drag to draw an ellipse.': 'Тяните, чтобы нарисовать эллипс.',
    'Drag to draw a line.': 'Тяните, чтобы нарисовать линию.',
    'Draw with your finger.': 'Рисуйте пальцем.',
    'Tap where the text should start.': 'Коснитесь места, где должен начинаться текст.',
};
/* The editor's own messages about the code (parse() in export.js); the browser's messages stay as they are. */
const CODE_ERROR = {
    'The outermost element must be <svg>.': 'Внешний элемент должен быть <svg>.',
    'The <svg> element is missing xmlns="http://www.w3.org/2000/svg".': 'У элемента <svg> нет xmlns="http://www.w3.org/2000/svg".',
};

export default {
    text: {
        'Show or hide the side panel': 'Показать или скрыть боковую панель',
        'Examples': 'Примеры',
        'Template': 'Шаблон',
        'The template with its placeholders as written': 'Шаблон с заполнителями в исходном виде',
        'Placeholders': 'Заполнители',
        'The placeholders of the template - a click on one puts its tag at the cursor': 'Заполнители шаблона - щелчок вставляет соответствующий тег в позицию курсора',
        'Shown': 'Показан',
        'Hidden': 'Скрыт',
        'View of the drawing': 'Вид рисунка',
        'The drawing filled with the examples': 'Рисунок, заполненный примерами',
        'The examples could not be filled in - the canvas shows the template': 'Не удалось подставить примеры - холст показывает шаблон',
        'This text shows an example - edit it in the code or in the template view': 'Этот текст показывает пример - измените его в коде или в виде шаблона',
        ...LABEL,
        ...HINT,
        ...CODE_ERROR,

        // Top bar
        'SVG Editor': 'Редактор SVG',
        'SVG Editor - home': 'Редактор SVG - на главную',
        'File': 'Файл',
        'My drawings': 'Мои рисунки',
        'My drawings (Ctrl+O)': 'Мои рисунки (Ctrl+O)',
        'New drawing, or start this one over': 'Новый рисунок или начать этот заново',
        'New': 'Новый',
        'New blank drawing': 'Новый пустой рисунок',
        'Your other drawings stay as they are': 'Другие ваши рисунки останутся без изменений',
        'New from the example': 'Новый из примера',
        'A copy of the editor logo to try things out': 'Копия логотипа редактора, чтобы попробовать',
        'Start this drawing over': 'Начать этот рисунок заново',
        'Empties it but keeps its size - "Undo" brings it back': 'Очищает его, но сохраняет размер - «Отменить» вернёт его',
        'Open an SVG file from your computer as a new drawing (you can also drag a file into the window)':
            'Открыть файл SVG с компьютера как новый рисунок (файл можно и перетащить в окно)',
        'Open file…': 'Открыть файл…',
        'Undo the last change (Ctrl+Z)': 'Отменить последнее изменение (Ctrl+Z)',
        'Undo': 'Отменить',
        'Redo the change you just undid (Ctrl+Y)': 'Повторить отменённое изменение (Ctrl+Y)',
        'Redo': 'Повторить',
        'Output': 'Вывод',
        'Color theme': 'Цветовая тема',
        'Light theme': 'Светлая тема',
        'Dark theme': 'Тёмная тема',
        'Same as your system setting': 'Как в настройках системы',
        'Automatic theme (system setting)': 'Автоматическая тема (настройка системы)',
        'Let any AI draw in this editor': 'Пусть любой ИИ рисует в этом редакторе',
        'AI Assistant': 'ИИ-ассистент',
        'Save to your own server and embed the editor in your website':
            'Сохранение на ваш сервер и встраивание редактора в ваш сайт',
        'Save to server': 'На сервер',
        'How it works and keyboard shortcuts (?)': 'Как это работает и сочетания клавиш (?)',
        'Help': 'Справка',
        'Save the drawing as an .svg file (Ctrl+S)': 'Сохранить рисунок как файл .svg (Ctrl+S)',
        'Download SVG': 'Скачать SVG',
        'Save as PNG, JPG, WebP, data URI, React and more (Ctrl+E)':
            'Сохранить как PNG, JPG, WebP, data URI, React и другое (Ctrl+E)',
        'Export…': 'Экспорт…',

        // View tabs and the code
        'View': 'Вид',
        'Edit': 'Правка',
        'Side panel': 'Боковая панель',
        'Canvas': 'Холст',
        'Properties': 'Свойства',
        'SVG code': 'Код SVG',
        'Copy the SVG code to the clipboard': 'Скопировать код SVG в буфер обмена',
        'Copy code': 'Копировать код',
        'Copy': 'Копировать',
        'Indent and arrange the code neatly': 'Аккуратно выровнять и упорядочить код',
        'Tidy up': 'Навести порядок',
        'Remove comments and spaces to make the file smaller': 'Удалить комментарии и пробелы, чтобы уменьшить файл',
        'Shrink': 'Сжать',
        'Drag to change the width of the code area': 'Перетащите, чтобы изменить ширину области кода',
        'Drag to change the width': 'Перетащите, чтобы изменить ширину',
        'Error in the code.': 'Ошибка в коде.',
        'The preview shows the last working version.': 'Предпросмотр показывает последнюю рабочую версию.',
        'The preview shows the last working version': 'Предпросмотр показывает последнюю рабочую версию',
        'Add xmlns': 'Добавить xmlns',

        // Tools, grid, view
        'Tools': 'Инструменты',
        'Select and move shapes (V)': 'Выделять и перемещать фигуры (V)',
        'Select': 'Выделение',
        'Move the view (H, or hold the space bar)': 'Перемещать область просмотра (H или удерживайте пробел)',
        'Move the view': 'Перемещение вида',
        'Draw a rectangle (R)': 'Нарисовать прямоугольник (R)',
        'Draw an ellipse or circle (E)': 'Нарисовать эллипс или круг (E)',
        'Draw a line (L)': 'Нарисовать линию (L)',
        'Draw freehand (P)': 'Рисовать от руки (P)',
        'Freehand': 'От руки',
        'Add text (T)': 'Добавить текст (T)',
        'Show the grid and snap shapes to it (#)': 'Показать сетку и привязывать к ней фигуры (#)',
        'Grid': 'Сетка',
        'Distance between grid lines, in the drawing\'s units': 'Расстояние между линиями сетки, в единицах рисунка',
        'Spacing': 'Шаг',
        'Shapes jump onto the grid lines when moved or drawn (G)':
            'Фигуры привязываются к линиям сетки при перемещении и рисовании (G)',
        'Snap': 'Привязка',
        'Canvas: click shapes, drag them, resize them with the handles':
            'Холст: щёлкайте по фигурам, перетаскивайте их, меняйте размер с помощью маркеров',
        'Background of the preview': 'Фон холста',
        'Background behind the drawing (only for viewing, not saved in the file)':
            'Фон за рисунком (только для просмотра, в файл не сохраняется)',
        'Checkered background': 'Фон в клетку',
        'White background': 'Белый фон',
        'Dark background': 'Тёмный фон',
        'No background': 'Без фона',
        'Zoom out (-)': 'Уменьшить (-)',
        'Zoom out': 'Уменьшить',
        'Show at actual size (1)': 'Показать в натуральную величину (1)',
        'Zoom in (+)': 'Увеличить (+)',
        'Zoom in': 'Увеличить',
        'Fit the drawing into the window (0)': 'Вписать рисунок в окно (0)',
        'Fit to window': 'Вписать в окно',
        'Fix the error in the code to edit the shapes again.': 'Исправьте ошибку в коде, чтобы снова редактировать фигуры.',

        // Properties
        'Colors, size and position of the selected shape': 'Цвета, размер и положение выделенной фигуры',
        'All elements of the drawing as a list': 'Все элементы рисунка списком',
        'Layers': 'Слои',
        'The code contains an error. Once it is fixed, the shapes can be edited here again.':
            'В коде есть ошибка. Как только она будет исправлена, фигуры здесь снова можно будет редактировать.',
        'No valid SVG loaded.': 'Корректный SVG не загружен.',
        'Position in the document': 'Положение в документе',
        'Document': 'Документ',
        'Width': 'Ширина',
        'Height': 'Высота',
        'x y width height': 'x y ширина высота',
        'Click a shape on the canvas or in the Layers list to edit it. Alt+click selects the surrounding group.':
            'Щёлкните по фигуре на холсте или в списке «Слои», чтобы редактировать её. Alt+щелчок выделяет содержащую её группу.',
        'Colors for new shapes': 'Цвета для новых фигур',
        'Fill': 'Заливка',
        'Outline': 'Контур',
        'Outline width': 'Толщина контура',
        'None': 'Нет',
        'Fill color of new shapes': 'Цвет заливки новых фигур',
        'Outline color of new shapes': 'Цвет контура новых фигур',
        'Outline width of new shapes': 'Толщина контура новых фигур',
        'Fill color · new shapes': 'Цвет заливки · новые фигуры',
        'Outline color · new shapes': 'Цвет контура · новые фигуры',
        'Pick the fill color': 'Выбрать цвет заливки',
        'Pick the outline color': 'Выбрать цвет контура',
        'Fill color': 'Цвет заливки',
        'Outline color': 'Цвет контура',
        'Fill color as text': 'Цвет заливки текстом',
        'Outline color as text': 'Цвет контура текстом',
        'Color as text, e.g. #ff0000, red or none': 'Цвет текстом, например #ff0000, red или none',
        'No fill': 'Без заливки',
        'No outline': 'Без контура',
        'Uses a gradient or pattern - picking a color replaces it.': 'Используется градиент или узор - выбор цвета заменит его.',
        'Opacity': 'Непрозрачность',
        'Overall opacity': 'Общая непрозрачность',
        'Line style': 'Тип линии',
        'solid': 'сплошная',
        'dashed': 'штриховая',
        'dotted': 'пунктирная',
        'dash-dot': 'штрихпунктир',
        'Line ends': 'Концы линий',
        'default': 'по умолчанию',
        'flat': 'плоские',
        'round': 'круглые',
        'square': 'квадратные',
        'Corners': 'Углы',
        'sharp': 'острые',
        'beveled': 'скошенные',
        'This text contains further elements (e.g. tspan) - please edit it in the code.':
            'Этот текст содержит другие элементы (например, tspan) - редактируйте его в коде.',
        'Size': 'Размер',
        'Weight': 'Насыщенность',
        'light': 'тонкий',
        'normal': 'обычный',
        'semi-bold': 'полужирный',
        'bold': 'жирный',
        'black': 'сверхжирный',
        'Font': 'Шрифт',
        'Alignment': 'Выравнивание',
        'left': 'слева',
        'center': 'по центру',
        'right': 'справа',
        'Position and size': 'Положение и размер',
        'Left edge': 'Левый край',
        'Top edge': 'Верхний край',
        'W': 'Ш',
        'Rotate 15° to the left': 'Повернуть на 15° влево',
        'Rotate 15° to the right': 'Повернуть на 15° вправо',
        '⟲ Rotate left': '⟲ Влево',
        '⟳ Rotate right': '⟳ Вправо',
        'Mirror left to right': 'Отразить по горизонтали',
        'Mirror top to bottom': 'Отразить по вертикали',
        '⇆ Flip horizontal': '⇆ Отразить',
        '⇅ Flip vertical': '⇅ Отразить',
        'Arrange': 'Порядок',
        'Shapes further down in the code are drawn on top.': 'Фигуры ниже в коде рисуются поверх.',
        'One step forward (Ctrl+↑)': 'На шаг вперёд (Ctrl+↑)',
        'One step backward (Ctrl+↓)': 'На шаг назад (Ctrl+↓)',
        'Bring to front (Ctrl+Shift+↑)': 'На передний план (Ctrl+Shift+↑)',
        'Send to back (Ctrl+Shift+↓)': 'На задний план (Ctrl+Shift+↓)',
        '↑ Forward': '↑ Вперёд',
        '↓ Backward': '↓ Назад',
        '⤒ To front': '⤒ Наверх',
        '⤓ To back': '⤓ Вниз',
        'Make a copy (Ctrl+D)': 'Сделать копию (Ctrl+D)',
        'Remove this shape (Delete key)': 'Удалить эту фигуру (клавиша Delete)',
        '⧉ Duplicate': '⧉ Дублировать',
        '✕ Delete': '✕ Удалить',
        'All attributes (advanced)': 'Все атрибуты (для опытных)',
        'Remove attribute': 'Удалить атрибут',
        'Value': 'Значение',
        'New attribute: name': 'Новый атрибут: имя',
        'New attribute: value': 'Новый атрибут: значение',
        'Add attribute': 'Добавить атрибут',
        'Invalid attribute name': 'Недопустимое имя атрибута',
        'The attribute could not be set': 'Не удалось задать атрибут',

        // Layers
        'Every element of the drawing. Shapes higher in the list are drawn on top. Click to select, drag to reorder (drop onto a group to put it inside), double-click to rename. The eye hides a shape.':
            'Все элементы рисунка. Фигуры выше в списке рисуются поверх. Щелчок выделяет, перетаскивание меняет порядок (перетащите на группу, чтобы поместить внутрь), двойной щелчок переименовывает. «Глаз» скрывает фигуру.',
        'Show': 'Показать',
        'Hide': 'Скрыть',
        'One step forward': 'На шаг вперёд',
        'One step backward': 'На шаг назад',
        'Duplicate': 'Дублировать',
        'Delete': 'Удалить',
        'Name (id)': 'Имя (id)',
        'Name of the element (id)': 'Имя элемента (id)',
        'A group cannot be moved into itself': 'Группу нельзя переместить в саму себя',
        'This element cannot hold other shapes': 'Этот элемент не может содержать другие фигуры',
        'Use letters, digits, - and _ only, starting with a letter': 'Только буквы, цифры, - и _, в начале - буква',

        // Messages
        'The browser storage is full': 'Хранилище браузера заполнено',
        'The browser storage is full - download and delete drawings under "My drawings"':
            'Хранилище браузера заполнено - скачайте и удалите рисунки в разделе «Мои рисунки»',
        'The browser storage is full - delete or download drawings under "My drawings" first':
            'Хранилище браузера заполнено - сначала удалите или скачайте рисунки в разделе «Мои рисунки»',
        'The browser storage is full - delete or download some drawings first':
            'Хранилище браузера заполнено - сначала удалите или скачайте несколько рисунков',
        'Nothing to undo': 'Нечего отменять',
        'Nothing to redo': 'Нечего повторять',
        'Please fix the error in the code first': 'Сначала исправьте ошибку в коде',
        'Deleted - Undo brings it back': 'Удалено - «Отменить» вернёт',
        'Already at the front': 'Уже на переднем плане',
        'Already at the back': 'Уже на заднем плане',
        'Grid on - shapes snap to the grid': 'Сетка включена - фигуры привязываются к сетке',
        'Grid off': 'Сетка выключена',
        'Snap to grid: on': 'Привязка к сетке: вкл.',
        'Snap to grid: off - shapes move freely': 'Привязка к сетке: выкл. - фигуры двигаются свободно',
        'Code tidied up': 'Код приведён в порядок',
        'This drawing is empty already': 'Этот рисунок уже пуст',
        'Everything in this drawing is removed; its size stays. "Undo" brings it back as long as the page is open.':
            'Всё на этом рисунке удалено; размер остаётся. «Отменить» вернёт это, пока страница открыта.',
        'Start over': 'Начать заново',
        'Please choose an SVG file': 'Выберите файл SVG',
        'The file is larger than 8 MB': 'Файл больше 8 МБ',
        'SVG pasted from the clipboard': 'SVG вставлен из буфера обмена',
        'Downloaded': 'Скачано',
        'Copied to the clipboard': 'Скопировано в буфер обмена',
        'This browser does not allow copying images': 'Этот браузер не позволяет копировать изображения',
        'Code copied': 'Код скопирован',
        'SVG downloaded': 'SVG скачан',
        'The image came out empty.': 'Изображение получилось пустым.',
        'The drawing could not be rendered as an image.': 'Не удалось отрисовать рисунок как изображение.',
        'Add': 'Добавить',
        'Replace': 'Заменить',
        'The drawing has no closing </svg> - the new shapes could not be added':
            'У рисунка нет закрывающего </svg> - новые фигуры не удалось добавить',
        'Drawing received - it has an error, see the code': 'Рисунок получен - в нём ошибка, см. код',
        'Drop the SVG file here': 'Перетащите сюда файл SVG',

        // A link from the AI opened in a tab of its own (ai.js)
        'Open it here': 'Открыть здесь',
        'The link could not be read': 'Не удалось прочитать ссылку',
        'The drawing in this link is incomplete or damaged. If the AI\'s link was split over several lines (as in a terminal), copy the whole answer and paste it into the editor with Ctrl+V - the editor joins the lines.':
            'Рисунок в этой ссылке неполный или повреждён. Если ссылка ИИ разбита на несколько строк (как в терминале), скопируйте весь ответ и вставьте его в редактор через Ctrl+V - редактор соединит строки.',
        'Loading…': 'Загрузка…',
        'Taken over by your editor': 'Передано в ваш редактор',
        'The drawing is now in the SVG Editor tab you already had open. Switch to that tab, or open it here.':
            'Рисунок теперь во вкладке редактора SVG, которая у вас уже была открыта. Перейдите в ту вкладку или откройте его здесь.',

        // Dialogs: shared
        'Close': 'Закрыть',

        // Export
        'Export': 'Экспорт',
        'File name': 'Имя файла',
        'Vector (sharp at any size)': 'Вектор (чёткий в любом размере)',
        'SVG as in the editor': 'SVG как в редакторе',
        'SVG tidied up': 'SVG, приведённый в порядок',
        'SVG shrunk (smallest file)': 'Сжатый SVG (минимальный размер файла)',
        'Picture': 'Изображение',
        'PNG (transparent background)': 'PNG (прозрачный фон)',
        'Code for websites': 'Код для сайтов',
        'Data URI': 'URI данных (data URI)',
        'Base64 data URI': 'Data URI в Base64',
        'CSS background-image': 'Фон CSS (background-image)',
        'HTML <img> tag': 'Тег HTML <img>',
        'React component (JSX)': 'Компонент React (JSX)',
        '1× (actual size)': '1× (натуральная величина)',
        'custom': 'свой',
        'Width (px)': 'Ширина (px)',
        'Height (px)': 'Высота (px)',
        'Background': 'Фон',
        'Background color': 'Цвет фона',
        'Background color · exported image': 'Цвет фона · экспортируемое изображение',
        'Width and height stay in proportion. JPG has no transparency, so it always gets a background.':
            'Ширина и высота меняются пропорционально. В JPG нет прозрачности, поэтому у него всегда есть фон.',
        'Result': 'Результат',
        'Download every format at once: SVG (3 variants), PNG, JPG, WebP, React, data URI, Base64, CSS and HTML':
            'Скачать все форматы сразу: SVG (3 варианта), PNG, JPG, WebP, React, data URI, Base64, CSS и HTML',
        'All formats (ZIP)': 'Все форматы (ZIP)',
        'Download': 'Скачать',

        // My drawings
        'Search by name': 'Поиск по имени',
        'Search your drawings': 'Поиск по вашим рисункам',
        'Open an SVG file from your computer as a new drawing': 'Открыть файл SVG с компьютера как новый рисунок',
        'New drawing': 'Новый рисунок',
        'Click a drawing to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Щёлкните по рисунку, чтобы открыть его. Рисунки хранятся только в этом браузере - ничего не загружается на сервер. Очистка данных сайта в браузере удалит их, поэтому скачайте те, которые хотите сохранить.',
        'Download every drawing as an .svg file in one ZIP': 'Скачать все рисунки как файлы .svg одним ZIP',
        'Download all (ZIP)': 'Скачать все (ZIP)',
        'No drawings yet.': 'Рисунков пока нет.',
        'Rename': 'Переименовать',
        'Download as .svg': 'Скачать как .svg',
        'This drawing is open': 'Этот рисунок открыт',
        'Click to open this drawing': 'Щёлкните, чтобы открыть этот рисунок',
        'New name': 'Новое имя',
        'The drawing is removed from this browser for good. Download it first if you want to keep a copy.':
            'Рисунок будет навсегда удалён из этого браузера. Если хотите сохранить копию, сначала скачайте его.',

        // AI assistant
        'Any AI can draw with you - ChatGPT, Claude, Gemini, Copilot.':
            'С вами может рисовать любой ИИ - ChatGPT, Claude, Gemini, Copilot.',
        'Connected AI': 'Подключённый ИИ',
        'Paste it into your AI and say what it should draw.': 'Вставьте его в свой ИИ и скажите, что нужно нарисовать.',
        // The step after "Copy prompt" inside another website (ai.js rewrites it): its parts
        'The AI answers with a link:': 'ИИ отвечает ссылкой:',
        'paste its whole answer below': 'вставьте весь его ответ ниже',
        '(a clicked link opens a separate editor).': '(щелчок по ссылке открывает отдельный редактор).',
        'takes it back.': 'вернёт всё назад.',
        'The AI answers with a link: click it, or paste the whole answer below.':
            'ИИ отвечает ссылкой: щёлкните по ней или вставьте весь ответ ниже.',
        'Connected to': 'Подключено к',
        'the AI sends its result there, and it opens here.': 'ИИ отправляет туда свой результат, и он открывается здесь.',
        '(no key yet)': '(ключа пока нет)',
        '(key valid while the editor is open)': '(ключ действует, пока редактор открыт)',
        'What': 'Что',
        'tells the AI': 'сообщает ИИ',
        'The AI should': 'ИИ должен',
        'Change “': 'Изменить «',
        '”': '»',
        'Make a new drawing': 'Создать новый рисунок',
        'The AI\'s answer (or press Ctrl+V anywhere):': 'Ответ ИИ (или нажмите Ctrl+V где угодно):',
        'The drawing travels in the link after the “#”, which no server sees. What you paste into your AI is handled by its provider.':
            'Рисунок передаётся в ссылке после «#»; эта часть не видна ни одному серверу. То, что вы вставляете в свой ИИ, обрабатывает его провайдер.',
        'The prompt - copy it with Ctrl+C': 'Промпт - скопируйте его через Ctrl+C',
        'Copy prompt': 'Копировать промпт',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)':
            'Копирование здесь запрещено - текст выделен ниже: нажмите Ctrl+C (⌘C)',
        'Prompt copied - paste it into your AI and say what it should draw':
            'Промпт скопирован - вставьте его в свой ИИ и скажите, что нужно нарисовать',
        'This link is incomplete or damaged - please ask the AI to send it again':
            'Ссылка неполная или повреждена - попросите ИИ отправить её ещё раз',

        // Save to your server
        'Save to your server': 'Сохранение на ваш сервер',
        'Webhook address': 'Адрес вебхука',
        'Send automatically a few seconds after each change (otherwise only when you click':
            'Отправлять автоматически через несколько секунд после каждого изменения (иначе только когда вы нажимаете',
        'or press Ctrl+S)': 'или Ctrl+S)',
        'Only for “': 'Только для «',
        '” (other drawings use the general address)': '» (другие рисунки используют общий адрес)',
        'What your server receives': 'Что получает ваш сервер',
        'A POST request with JSON (your server must allow CORS from https://svg.giit.ch):':
            'POST-запрос с JSON (ваш сервер должен разрешать CORS с https://svg.giit.ch):',
        'Embed the editor in your website': 'Встроить редактор в ваш сайт',
        'Send now': 'Отправить сейчас',
        'Save setting': 'Сохранить настройку',

        // Help
        'How it works': 'Как это работает',
        'Keyboard shortcuts': 'Сочетания клавиш',
        'Select and move': 'Выделение и перемещение',
        'Rectangle, ellipse, line, freehand, text': 'Прямоугольник, эллипс, линия, от руки, текст',
        'Zoom': 'Масштаб',
        'Drag with the mouse wheel pressed': 'Тянуть с нажатым колесом мыши',
        'Double-click the mouse wheel': 'Двойной щелчок колесом мыши',
        'Fit to window / actual size': 'Вписать в окно / натуральная величина',
        'Grid on/off / snap on/off': 'Сетка вкл./выкл. / привязка вкл./выкл.',
        'Arrow keys': 'Клавиши со стрелками',
        'Only horizontal/vertical, keep proportions': 'Только по горизонтали/вертикали, сохранять пропорции',
        'Select the surrounding group': 'Выделить группу, содержащую фигуру',
        'Remove the selection': 'Удалить выделенное',
        'Undo / redo': 'Отменить / повторить',
        'Download SVG (or save to your server) / export': 'Скачать SVG (или сохранить на ваш сервер) / экспорт',
        'Deselect': 'Снять выделение',

        // Color picker (colorpicker.js)
        'Color': 'Цвет',
        'Saturation and brightness (arrow keys)': 'Насыщенность и яркость (клавиши со стрелками)',
        'Hue': 'Оттенок',
        'Before - click to go back': 'Прежний - щёлкните, чтобы вернуться',
        'New color': 'Новый цвет',
        'Color as hex code, e.g. #ff0000': 'Цвет в виде hex-кода, например #ff0000',
        'Done': 'Готово',
        'Colors in this drawing': 'Цвета на этом рисунке',
        'Basic colors': 'Основные цвета',
        /* Words that German keeps from the English, but Russian does not */
        'Code': 'Код',
        'Format': 'Формат',
        'Token': 'Токен',
        'Name': 'Имя',
        /* ---------- Template placeholders (?template=) ---------- */
        'The drawing holds placeholders - its code stays as written': 'Рисунок содержит заполнители - его код остаётся без изменений',
        'The style holds placeholders - edit it in the code': 'Стиль содержит заполнители - измените его в коде',
    },
    html: {
        // AI assistant
        'Click <b>Copy prompt</b>.': 'Нажмите <b>Копировать промпт</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'ИИ отвечает ссылкой: щёлкните по ней или вставьте весь ответ ниже. <b>Отменить</b> вернёт всё назад.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'ИИ отвечает ссылкой: <b>вставьте весь его ответ ниже</b> (щелчок по ссылке открывает отдельный редактор). <b>Отменить</b> вернёт всё назад.',

        // Save to your server
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your drawings are kept where you want them. Nothing is sent until you enter an address here.':
            'Редактор может отправлять каждую сохранённую версию на ваш собственный сервер (<b>вебхук</b>), чтобы ваши рисунки хранились там, где вы хотите. Ничего не отправляется, пока вы не введёте здесь адрес.',
        'Token <small>(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)</small>':
            'Токен <small>(необязательно, отправляется как «Authorization: Bearer …»; хранится, пока открыта эта вкладка)</small>',
        'Also possible: <code>?src=&lt;URL of an .svg file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this drawing there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>svgeditor:ai</code>, <code>svgeditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Также можно: <code>?src=&lt;URL of an .svg file&gt;</code> открывает файл, <code>&amp;webhook=&lt;URL&gt;</code> сохраняет туда этот рисунок. Редактор может открываться и в отдельном окне (<code>?embed=window</code>), а ваша страница может передать ему собственный промпт для ИИ и ключ сеанса, чтобы ИИ отправлял результат на ваш сервер (<code>svgeditor:ai</code>, <code>svgeditor:key-request</code>) - см. «Редактор на вашем сайте» под редактором. Подробности - в <a href="/llms.txt">llms.txt</a>.',

        // Help
        '<b>Open</b> an SVG file, drag it into the window or paste SVG code - or start with <b>New</b>.':
            '<b>Откройте</b> файл SVG, перетащите его в окно или вставьте код SVG - или начните с <b>Новый</b>.',
        '<b>My drawings</b> (the folder button at the top left) lists every drawing kept in this browser: open, rename, duplicate, download or delete them.':
            '<b>Мои рисунки</b> (кнопка с папкой вверху слева) показывают все рисунки, хранящиеся в этом браузере: открывайте, переименовывайте, дублируйте, скачивайте или удаляйте их.',
        '<b>Click a shape</b> on the canvas. Drag it to move it, drag the small squares to resize it. Colors, size and position are under <b>Properties</b> on the right.':
            '<b>Щёлкните по фигуре</b> на холсте. Перетащите её, чтобы переместить, потяните за маленькие квадраты, чтобы изменить размер. Цвета, размер и положение - в <b>Свойствах</b> справа.',
        '<b>Draw</b> new shapes with the tools above the canvas.': '<b>Рисуйте</b> новые фигуры инструментами над холстом.',
        'The <b>code</b> on the left always shows the current drawing and can be edited directly.':
            '<b>Код</b> слева всегда показывает текущий рисунок, и его можно редактировать напрямую.',
        '<b>Download SVG</b> saves the file, <b>Export</b> offers pictures (PNG, JPG) and code for websites.':
            '<b>Скачать SVG</b> сохраняет файл, <b>Экспорт</b> предлагает изображения (PNG, JPG) и код для сайтов.',
        'Made a mistake? <b>Undo</b> takes back every step. Your drawings are kept in this browser, even after closing the page.':
            'Ошиблись? <b>Отменить</b> отменяет каждый шаг. Ваши рисунки хранятся в этом браузере, даже после закрытия страницы.',
        '<kbd>H</kbd> / hold <kbd>Space</kbd>': '<kbd>H</kbd> / удерживайте <kbd>Пробел</kbd>',
        'Mouse wheel, <kbd>+</kbd> <kbd>-</kbd>': 'Колесо мыши, <kbd>+</kbd> <kbd>-</kbd>',
        'Move the selection by 1, with <kbd>Shift</kbd> by 10': 'Сдвинуть выделенное на 1, с <kbd>Shift</kbd> на 10',
        '<kbd>Shift</kbd> while dragging': '<kbd>Shift</kbd> при перетаскивании',
        '<kbd>Alt</kbd> + click': '<kbd>Alt</kbd> + щелчок',
        '<kbd>Delete</kbd>': '<kbd>Delete</kbd>',
        'Forward / backward (with <kbd>Shift</kbd>: to front / to back)':
            'Вперёд / назад (с <kbd>Shift</kbd>: на передний / задний план)',
        'In the code: <kbd>Tab</kbd> indents, <kbd>Shift</kbd>+<kbd>Tab</kbd> outdents, clicking into a tag selects that shape on the canvas.':
            'В коде: <kbd>Tab</kbd> увеличивает отступ, <kbd>Shift</kbd>+<kbd>Tab</kbd> уменьшает, щелчок внутри тега выделяет эту фигуру на холсте.',
    },
    patterns: [
        // Canvas hint with the grid
        ['^(.*?) ?Snapping to a ([\\d.]+) grid\\.$', (m, h, k) => `${h ? (HINT[h] || h) + ' ' : ''}Привязка к сетке (${k}).`],
        ['^(.*?) ?Snap: ([\\d.]+)\\.$', (m, h, k) => `${h ? (HINT[h] || h) + ' ' : ''}Привязка: ${k}.`],

        // Code
        ['^(\\d+) lines · (.+)$', (m, k, s) => `${k} ${getPlural(k, 'строка', 'строки', 'строк')} · ${formatSize(s)}`],
        ['^Line (\\d+), column (\\d+):$', (m, l, c) => `Строка ${l}, столбец ${c}:`],
        ['^Line (\\d+):$', (m, l) => `Строка ${l}:`],
        ['^Line (\\d+), column (\\d+): (.*)$', (m, l, c, t) => `Строка ${l}, столбец ${c}: ${CODE_ERROR[t] || t}`],
        ['^Line (\\d+): (.*)$', (m, l, t) => `Строка ${l}: ${CODE_ERROR[t] || t}`],
        ['^File shrunk: (\\d+) → (\\d+) bytes$', (m, a, b) => `Файл сжат: ${a} → ${b} ${getPlural(b, 'байт', 'байта', 'байт')}`],

        // Properties
        [`^(Fill|Outline) color · (whole drawing|${TYPE_ANY})( #.+)?$`, (m, w, t, id) => `${w === 'Fill' ? 'Цвет заливки' : 'Цвет контура'} · ${t === 'whole drawing' ? 'весь рисунок' : translateLabel(t)}${id || ''}`],
        ['^(.+) \\(inherited\\)$', '$1 (унаследовано)'],
        ['^Remove ([A-Za-z_:][\\w:.-]*)$', 'Удалить $1'],

        // Layers
        ['^<([^>]+)> - click to select, double-click to rename, drag to reorder$', '<$1> - щелчок выделяет, двойной щелчок переименовывает, перетаскивание меняет порядок'],
        ['^<([^>]+)> - click to select$', '<$1> - щелчок выделяет'],
        [`^Show ${TYPE}$`, (m, t) => `Показать: ${translateLabel(t)}`],
        [`^Hide ${TYPE}$`, (m, t) => `Скрыть: ${translateLabel(t)}`],
        [`^Move ${TYPE} forward$`, (m, t) => `${translateLabel(t)}: вперёд`],
        [`^Move ${TYPE} backward$`, (m, t) => `${translateLabel(t)}: назад`],
        [`^Duplicate ${TYPE}$`, (m, t) => `Дублировать: ${translateLabel(t)}`],
        [`^Delete ${TYPE}$`, (m, t) => `Удалить: ${translateLabel(t)}`],
        ['^The name “(.+)” is already used$', 'Имя «$1» уже занято'],

        // The open drawing
        ['^"(.+)" is open\\. My drawings: open, rename, duplicate or delete your drawings \\(Ctrl\\+O\\)$', '«$1» открыт. Мои рисунки: открывайте, переименовывайте, дублируйте или удаляйте рисунки (Ctrl+O)'],
        ['^Start "(.+)" over\\?$', 'Начать «$1» заново?'],
        ['^Start "(.+)" over$', 'Начать «$1» заново'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '«$1» теперь пуст - «Отменить» вернёт содержимое'],
        ['^Opened "(.+)" - it is now in "My drawings"$', '«$1» открыт - теперь он в разделе «Мои рисунки»'],
        ['^New drawing "(.+)" from the AI - your other drawings are unchanged$', 'Новый рисунок «$1» от ИИ - другие ваши рисунки не изменились'],
        ['^New drawing "(.+)" - your other drawings are under "My drawings"$', 'Новый рисунок «$1» - другие ваши рисунки в разделе «Мои рисунки»'],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '«$1» изменён ИИ - «Отменить» вернёт всё назад'],
        ['^"(.+)" opened$', '«$1» открыт'],

        // Export
        ['^(\\d+) × (\\d+) pixels$', '$1 × $2 пикселей'],
        ['^([\\d,]+) bytes$', (m, b) => formatSize(m)],
        ['^ZIP with 11 files downloaded \\(pictures (\\d+) × (\\d+) px\\)$', 'ZIP с 11 файлами скачан (изображения $1 × $2 px)'],

        // My drawings
        ['^(\\d+) (?:drawing|drawings) · (.+) in this browser$', (m, k, s) => `${k} ${getPlural(k, 'рисунок', 'рисунка', 'рисунков')} · ${formatSize(s)} в этом браузере`],
        ['^Open now · (.+)$', (m, s) => `Открыт сейчас · ${formatSize(s)}`],
        ['^just now · (.+)$', (m, s) => `только что · ${formatSize(s)}`],
        ['^(\\d+) min ago · (.+)$', (m, k, s) => `${k} мин. назад · ${formatSize(s)}`],
        ['^(\\d+) h ago · (.+)$', (m, k, s) => `${k} ч назад · ${formatSize(s)}`],
        ['^yesterday · (.+)$', (m, s) => `вчера · ${formatSize(s)}`],
        ['^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\\d{1,2}), (\\d{4}) · (.+)$', (m, mo, d, y, s) => `${d} ${MONTHS[mo]} ${y} г. · ${formatSize(s)}`],
        ['^(.+) \\(open now\\)$', '$1 (открыт сейчас)'],
        ['^Open (.+)$', 'Открыть $1'],
        ['^No drawing named "(.*)"\\.$', 'Нет рисунка с именем «$1».'],
        ['^Delete "(.+)"\\?$', 'Удалить «$1»?'],
        ['^"(.+)" duplicated$', 'Создана копия «$1»'],
        ['^"(.+)" deleted$', '«$1» удалён'],
        ['^ZIP with (\\d+) (?:drawing|drawings) downloaded$', (m, k) => `ZIP с ${k} ${getPlural(k, 'рисунком', 'рисунками', 'рисунками')} скачан`],

        // AI
        ['^Part (\\d+) of (\\d+) received$', 'Часть $1 из $2 получена'],
        ['^Open the other (link|links) from the AI too \\(still missing: part (.+)\\)\\.$', (m, l, p) => `Откройте и ${l === 'link' ? 'другую ссылку' : 'другие ссылки'} от ИИ (ещё не хватает: часть ${p}).`],
        ['^Part (\\d+) of (\\d+) received - paste the other (link|links) too \\(missing: (.+)\\)$', (m, a, b, l, p) => `Часть ${a} из ${b} получена - вставьте и ${l === 'link' ? 'другую ссылку' : 'другие ссылки'} (не хватает: ${p})`],
        ['^The AI sends the drawing to (.+) with a key that only works for this session\\. What you paste into your AI is handled by its provider\\.$', 'ИИ отправляет рисунок на $1 с ключом, который действует только в этом сеансе. То, что вы вставляете в свой ИИ, обрабатывает его провайдер.'],
        ['^The AI sends its result to (.+) by itself, and it opens here\\. If it answers with a link, paste its answer below\\.$', 'ИИ сам отправляет свой результат на $1, и он открывается здесь. Если ИИ отвечает ссылкой, вставьте его ответ ниже.'],
        ['^No key from (.+) - the prompt asks the AI for a link instead$', 'Нет ключа от $1 - вместо этого промпт просит ИИ прислать ссылку'],
        ['^Prompt copied - the AI sends its result to (.+)$', 'Промпт скопирован - ИИ отправит свой результат на $1'],
    ],
};
