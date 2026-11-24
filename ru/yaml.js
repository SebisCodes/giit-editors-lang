/* Russian texts of the YAML editor: the bar, the work area (code, tree,
   value, insert, convert, schema), its dialogs and messages, and the
   problems found in the code. What all editors share is in
   common.js; how the dictionaries are used is described in
   i18n.js. Names of documents, keys and values stay as they are: the
   patterns copy them into the Russian text. */

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

/* When a document was last changed (files.js): "just now", "5 min ago", "Oct 25, 2026" … */

/* Reasons a ZIP could not be opened: the editor's own words are English (app.js) */
const ZIP = {};
/* Words inside messages */
const TYPE = { string: 'строка', number: 'число', boolean: 'логическое', null: 'null', object: 'объект', array: 'массив', integer: 'целое число' };
/**
 * Translates the text the pattern found (FOUND in the English pattern).
 * @param {string} s - the English text the pattern found.
 * @returns {string} the text in the language.
 */
const translateFound = s => (s === 'the end of the text' ? 'конец текста' : s === 'the end of the line' ? 'конец строки' : s);

export default {
    text: {
        /* ---------- Template placeholders (?template=): views of the tree, box, side panel ---------- */
        'Show or hide the side panel': 'Показать или скрыть боковую панель',
        'Examples': 'Примеры',
        'Template': 'Шаблон',
        'The template with its placeholders as written': 'Шаблон с заполнителями в исходном виде',
        'Placeholders': 'Заполнители',
        'The placeholders of the template - a click on one puts its tag at the cursor': 'Заполнители шаблона - щелчок вставляет соответствующий тег в позицию курсора',
        'Shown': 'Показан',
        'Hidden': 'Скрыт',
        'View of the tree': 'Вид дерева',
        'The data filled with the examples': 'Данные, заполненные примерами',
        'The examples could not be filled in - the tree shows the template': 'Не удалось подставить примеры - дерево показывает шаблон',
        'This part shows an example - change it in the template view or in the code': 'Эта часть показывает пример - измените её в виде шаблона или в коде',
        "Protect the CSV export against spreadsheet formulas; plain signed numbers remain unchanged.": "Защищать экспорт CSV от формул электронных таблиц; простые числа со знаком не меняются.",
        /* ---------- Top bar ---------- */
        'YAML Editor - home': 'Редактор YAML - на главную',
        'YAML Editor': 'Редактор YAML',
        'JSON Editor': 'Редактор JSON',
        'File': 'Файл',
        'My documents (Ctrl+O)': 'Мои документы (Ctrl+O)',
        'My documents': 'Мои документы',
        'New document, or start this one over': 'Новый документ или начать этот заново',
        'New': 'Новый',
        'New blank document': 'Новый пустой документ',
        'An empty document - your other documents stay as they are':
            'Пустой документ - другие ваши документы останутся без изменений',
        'Two services with ports and a volume': 'Два сервиса с портами и томом',
        'GitHub workflow': 'Рабочий процесс GitHub',
        'Run the tests on every push': 'Запускать тесты при каждом push',
        'Kubernetes': 'Объекты Kubernetes',
        'A deployment and a service: two documents': 'Deployment и service: два документа',
        'OpenAPI': 'Описание OpenAPI',
        'The start of an API description': 'Начало описания API',
        'Table': 'Таблица',
        'A list of mappings - converts to CSV': 'Список отображений - преобразуется в CSV',
        'Docker Compose': 'Файл Docker Compose',
        'The welcome example': 'Приветственный пример',
        'Shows what the editor can do': 'Показывает, что умеет редактор',
        'Start this document over': 'Начать этот документ заново',
        'Empties the data - "Undo" brings it back': 'Очищает данные - «Отменить» вернёт их',
        'Open a YAML file from your computer (JSON, CSV and XML files are converted; you can also drag a file into the window)':
            'Открыть файл YAML с компьютера (файлы JSON, CSV и XML преобразуются; файл можно и перетащить в окно)',
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
        'Let any AI write in this editor': 'Пусть любой ИИ пишет в этом редакторе',
        'AI Assistant': 'ИИ-ассистент',
        'Save to your own server and embed the editor in your website':
            'Сохранение на ваш сервер и встраивание редактора в ваш сайт',
        'Save to server': 'На сервер',
        'How it works and keyboard shortcuts (?)': 'Как это работает и сочетания клавиш (?)',
        'Help': 'Справка',
        'Save the document as a .yaml file (Ctrl+S)': 'Сохранить документ как файл .yaml (Ctrl+S)',
        'Download .yaml': 'Скачать .yaml',
        'JSON, CSV and more (Ctrl+E)': 'JSON, CSV и другое (Ctrl+E)',
        'Export…': 'Экспорт…',

        /* ---------- Views and work area ---------- */
        'View': 'Вид',
        'Edit': 'Правка',
        'Tree': 'Дерево',
        'Value': 'Значение',
        'YAML code': 'Код YAML',
        'Copy the code to the clipboard': 'Скопировать код в буфер обмена',
        'Copy code': 'Копировать код',
        'Copy': 'Копировать',
        'The same indentation everywhere; comments stay (Ctrl+Shift+F)':
            'Одинаковые отступы везде; комментарии остаются (Ctrl+Shift+F)',
        'The same indentation everywhere; comments stay': 'Одинаковые отступы везде; комментарии остаются',
        'Format': 'Форматировать',
        'Drag to change the width of the code area': 'Перетащите, чтобы изменить ширину области кода',
        'Drag to change the width': 'Перетащите, чтобы изменить ширину',
        'Unfold everything': 'Развернуть всё',
        'Fold everything': 'Свернуть всё',
        'Add an entry: into the selected object or array, otherwise after the selected entry':
            'Добавить запись: в выбранный объект или массив, иначе после выбранной записи',
        'Add an entry': 'Добавить запись',
        'Duplicate the selected entry': 'Дублировать выбранную запись',
        'Duplicate': 'Дублировать',
        'Move the selected entry up (Alt+Up)': 'Переместить выбранную запись вверх (Alt+Up)',
        'Move up': 'Вверх',
        'Move the selected entry down (Alt+Down)': 'Переместить выбранную запись вниз (Alt+Down)',
        'Move down': 'Вниз',
        'Remove the selected entry (Delete)': 'Удалить выбранную запись (Delete)',
        'Remove': 'Удалить',
        'The type of the selected value - choosing another one changes it': 'Тип выбранного значения - выбор другого меняет его',
        'Type': 'Тип',
        'string': 'строка',
        'number': 'число',
        'boolean': 'логическое',
        'null': 'null (пусто)',
        'object': 'объект',
        'array': 'массив',
        'alias': 'алиас',
        'Search keys and values': 'Поиск по ключам и значениям',
        'Previous match (Shift+Enter)': 'Предыдущее совпадение (Shift+Enter)',
        'Previous match': 'Предыдущее совпадение',
        'Next match (Enter)': 'Следующее совпадение (Enter)',
        'Next match': 'Следующее совпадение',
        'The data as a tree: click a key or a value to change it':
            'Данные в виде дерева: щёлкните по ключу или значению, чтобы изменить его',
        'Copy the path of the selected value': 'Скопировать путь выбранного значения',
        'Copy path': 'Копировать путь',
        'Side panel': 'Боковая панель',
        'The selected key and value': 'Выбранный ключ и значение',
        'New entries and pieces of code': 'Новые записи и фрагменты кода',
        'Insert': 'Вставка',
        'Format the document, or convert it to another format': 'Отформатировать документ или преобразовать его в другой формат',
        'Convert': 'Преобразование',
        'Check the data against a JSON Schema': 'Проверить данные по JSON Schema',
        'Schema': 'Схема',
        'Open it here': 'Открыть здесь',
        'Drop the file here': 'Перетащите файл сюда',

        /* Inside the tree */
        'Key': 'Ключ',
        'Anchor': 'Якорь',
        'Alias': 'Алиас',
        'empty': 'пусто',
        'No data yet': 'Данных пока нет',
        'Empty document': 'Пустой документ',

        /* Problems above the code */
        'Hide': 'Скрыть',
        'Show': 'Показать',

        /* ---------- Value tab ---------- */
        'Click a key or a value in the tree.': 'Щёлкните по ключу или значению в дереве.',
        'The document has no data yet.': 'В документе пока нет данных.',
        'Path': 'Путь',
        'Apply': 'Применить',
        'Add after it': 'Добавить после',
        'Anchor:': 'Якорь:',
        'Alias of the anchor:': 'Алиас якоря:',

        /* ---------- Insert tab ---------- */
        'Add to the selected value': 'Добавить к выбранному значению',
        'Into the selected object or array, otherwise after the selected entry. One step for Undo.':
            'В выбранный объект или массив, иначе после выбранной записи. Один шаг для «Отменить».',
        'Text': 'Текст',
        'A new string': 'Новая строка',
        'Number': 'Число',
        'A new number': 'Новое число',
        'True / false': 'Истина / ложь',
        'A new boolean': 'Новое логическое значение',
        'Empty (null)': 'Пусто (null)',
        'A new null': 'Новый null',
        'Object { }': 'Объект { }',
        'A new empty object': 'Новый пустой объект',
        'Array [ ]': 'Массив [ ]',
        'A new empty array': 'Новый пустой массив',
        'At the cursor in the code': 'У курсора в коде',
        'Key and value': 'Ключ и значение',
        'One entry of a mapping': 'Одна запись отображения',
        'Nested mapping': 'Вложенное отображение',
        'A key with keys below it': 'Ключ с ключами под ним',
        'List item': 'Элемент списка',
        'One item of a sequence': 'Один элемент последовательности',
        'List': 'Список',
        'A key with a list below it': 'Ключ со списком под ним',
        'Text block (|)': 'Блок текста (|)',
        'Several lines, kept as they are': 'Несколько строк, сохраняются как есть',
        'Folded text (>)': 'Свёрнутый текст (>)',
        'Several lines, joined into one': 'Несколько строк, соединяются в одну',
        'Anchor and alias': 'Якорь и алиас',
        'Values defined once (&) and used again (*, <<)': 'Значения, заданные один раз (&) и используемые снова (*, <<)',
        'Next document (‑‑‑)': 'Следующий документ (‑‑‑)',
        'A further document in the same file': 'Ещё один документ в том же файле',
        'Comment (#)': 'Комментарий (#)',
        'A comment': 'Комментарий',
        'Today\'s date': 'Текущая дата',
        'The date as YYYY-MM-DD': 'Дата в формате ГГГГ-ММ-ДД',
        'An empty value': 'Пустое значение',
        'true': 'истина (true)',
        'false': 'ложь (false)',
        'The boolean true': 'Логическое значение true',
        'The boolean false': 'Логическое значение false',

        /* ---------- Convert tab ---------- */
        'This document': 'Этот документ',
        'Indentation': 'Отступы',
        '2 spaces': '2 пробела',
        '4 spaces': '4 пробела',
        'Tabs': 'Табуляция',

        'Convert to': 'Преобразовать в',
        'JSON text': 'Текст JSON',
        'The file has several documents - they become one JSON array.':
            'В файле несколько документов - они станут одним массивом JSON.',
        'CSV (an array of objects)': 'CSV (массив объектов)',
        'XML text': 'Текст XML',
        'The tree as plain text': 'Дерево простым текстом',
        'Result': 'Результат',
        'Download': 'Скачать',
        'Each object is a row, its keys are the columns. Texts that look like numbers are in quotes.':
            'Каждый объект - строка, его ключи - столбцы. Строки, похожие на числа, заключены в кавычки.',
        'The data is inside <root>; the items of an array are <item> elements.':
            'Данные находятся внутри <root>; элементы массива - это элементы <item>.',
        'Opens the result as a new document in the JSON Editor (in a new tab)':
            'Открывает результат как новый документ в редакторе JSON (в новой вкладке)',
        'Open in the JSON Editor': 'Открыть в редакторе JSON',

        /* ---------- Schema tab ---------- */
        'Check this document against a JSON Schema that is one of your documents (open or paste it as a new document first). The editor never downloads a schema.':
            'Проверить этот документ по JSON Schema, которая является одним из ваших документов (сначала откройте или вставьте её как новый документ). Редактор никогда не скачивает схему.',
        'No schema': 'Без схемы',
        'The chosen schema document is not there any more.': 'Выбранного документа со схемой больше нет.',
        'Checked again once the syntax error is fixed.': 'Будет проверено снова, когда синтаксическая ошибка будет исправлена.',
        'The data fits the schema.': 'Данные соответствуют схеме.',
        'place does not fit the schema - see above the code.': 'место не соответствует схеме - см. над кодом.',
        'places do not fit the schema - see above the code.': 'мест не соответствуют схеме - см. над кодом.',
        'The document names the schema': 'Документ указывает схему',
        '- it is not loaded from there.': '- она оттуда не загружается.',
        'Open the schema': 'Открыть схему',
        'A new document with a schema that this data fits': 'Новый документ со схемой, которой соответствуют эти данные',
        'Make a schema from this data': 'Создать схему по этим данным',

        /* ---------- Export ---------- */
        'Close': 'Закрыть',
        'File name': 'Имя файла',
        'YAML file as it is (.yaml)': 'Файл YAML как есть (.yaml)',
        'JSON file (.json)': 'Файл JSON (.json)',
        'CSV table (.csv)': 'Таблица CSV (.csv)',
        'The tree as plain text (.txt)': 'Дерево простым текстом (.txt)',
        'Download every format at once': 'Скачать все форматы сразу',
        'All formats (ZIP)': 'Все форматы (ZIP)',

        /* ---------- My documents ---------- */
        'Search by name': 'Поиск по имени',
        'Search your documents': 'Поиск по вашим документам',
        'Open a file from your computer as a new document': 'Открыть файл с компьютера как новый документ',
        'New document': 'Новый документ',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Щёлкните по документу, чтобы открыть его. Документы хранятся только в этом браузере - ничего не загружается на сервер. Очистка данных сайта в браузере удалит их, поэтому скачайте те, которые хотите сохранить.',
        'Download every document as a .yaml file in one ZIP': 'Скачать все документы как файлы .yaml одним ZIP',
        'Download all (ZIP)': 'Скачать все (ZIP)',
        'Rename': 'Переименовать',
        'Download as .yaml': 'Скачать как .yaml',
        'Delete': 'Удалить',
        'New name': 'Новое имя',
        'This document is open': 'Этот документ открыт',
        'Click to open this document': 'Щёлкните, чтобы открыть этот документ',
        'No documents yet.': 'Документов пока нет.',

        /* ---------- AI Assistant ---------- */
        'Any AI can work with you - ChatGPT, Claude, Gemini, Copilot.':
            'С вами может работать любой ИИ - ChatGPT, Claude, Gemini, Copilot.',
        'Connected AI': 'Подключённый ИИ',
        'Connected to': 'Подключено к',
        'the AI sends its result there, and it opens here.': 'ИИ отправляет туда свой результат, и он открывается здесь.',
        'What': 'Что',
        'tells the AI': 'сообщает ИИ',
        'The AI should': 'ИИ должен',
        'Change “': 'Изменить «',
        '”': '»',
        'Make a new document': 'Создать новый документ',
        'The AI\'s answer (or press Ctrl+V anywhere):': 'Ответ ИИ (или нажмите Ctrl+V где угодно):',
        'The document travels in the link after the “#”, which no server sees. What you paste into your AI is handled by its provider.':
            'Документ передаётся в ссылке после «#»; эта часть не видна ни одному серверу. То, что вы вставляете в свой ИИ, обрабатывает его провайдер.',
        'The prompt - copy it with Ctrl+C': 'Промпт - скопируйте его через Ctrl+C',
        'Copy prompt': 'Копировать промпт',
        'Paste it into your AI and say what it should change.': 'Вставьте его в свой ИИ и скажите, что нужно изменить.',
        'The AI answers with a link: click it, or paste the whole answer below.':
            'ИИ отвечает ссылкой: щёлкните по ней или вставьте весь ответ ниже.',
        'takes it back.': 'вернёт всё назад.',
        'The AI answers with a link:': 'ИИ отвечает ссылкой:',
        'paste its whole answer below': 'вставьте весь его ответ ниже',
        '(a clicked link opens a separate editor).': '(щелчок по ссылке открывает отдельный редактор).',
        '(no key yet)': '(ключа пока нет)',
        '(key valid while the editor is open)': '(ключ действует, пока редактор открыт)',
        'The link could not be read': 'Не удалось прочитать ссылку',
        'The document in this link is incomplete or damaged. If the AI\'s link was split over several lines (as in a terminal), copy the whole answer and paste it into the editor with Ctrl+V - the editor joins the lines.':
            'Документ в этой ссылке неполный или повреждён. Если ссылка ИИ разбита на несколько строк (как в терминале), скопируйте весь ответ и вставьте его в редактор через Ctrl+V - редактор соединит строки.',
        'Loading…': 'Загрузка…',
        'Taken over by your editor': 'Передано в ваш редактор',
        'The document is now in the YAML Editor tab you already had open. Switch to that tab, or open it here.':
            'Документ теперь во вкладке редактора YAML, которая у вас уже была открыта. Перейдите в ту вкладку или откройте его здесь.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)':
            'Копирование здесь запрещено - текст выделен ниже: нажмите Ctrl+C (⌘C)',
        'Prompt copied - paste it into your AI and say what it should write':
            'Промпт скопирован - вставьте его в свой ИИ и скажите, что нужно написать',
        'This link is incomplete or damaged - please ask the AI to send it again':
            'Ссылка неполная или повреждена - попросите ИИ отправить её ещё раз',

        /* ---------- Save to your server ---------- */
        'Save to your server': 'Сохранение на ваш сервер',
        'Webhook address': 'Адрес вебхука',
        'https://example.com/api/yaml': 'https://example.com/api/yaml',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(необязательно, отправляется как «Authorization: Bearer …»; хранится, пока открыта эта вкладка)',
        'Send automatically a few seconds after each change (otherwise only when you click':
            'Отправлять автоматически через несколько секунд после каждого изменения (иначе только когда вы нажимаете',
        'or press Ctrl+S)': 'или Ctrl+S)',
        'Only for “': 'Только для «',
        '” (other documents use the general address)': '» (другие документы используют общий адрес)',
        'What your server receives': 'Что получает ваш сервер',
        'A POST request with JSON (your server must allow CORS from https://yaml.giit.ch); content is the document as a string:':
            'POST-запрос с JSON (ваш сервер должен разрешать CORS с https://yaml.giit.ch); content - это документ в виде строки:',
        'Embed the editor in your website': 'Встроить редактор в ваш сайт',
        'Send now': 'Отправить сейчас',
        'Save setting': 'Сохранить настройку',

        /* ---------- Help ---------- */
        'How it works': 'Как это работает',
        'Keyboard shortcuts': 'Сочетания клавиш',
        'In the tree: go up and down, fold and unfold': 'В дереве: вверх и вниз, свернуть и развернуть',
        'Delete': 'Удалить',
        'In the tree: remove the entry': 'В дереве: удалить запись',
        'In the tree: move the entry up / down': 'В дереве: переместить запись вверх / вниз',
        'Search keys and values in the tree': 'Поиск ключей и значений в дереве',
        'Format the document': 'Отформатировать документ',
        'Indent / outdent in the code (with spaces)': 'Увеличить / уменьшить отступ в коде (пробелами)',
        'Undo / redo': 'Отменить / повторить',
        'Save (download, or to your server) / export': 'Сохранить (скачать или на ваш сервер) / экспорт',
        'Alt': 'Alt',
        'Problems (wrong indentation, a tab, a duplicate key, an alias without its anchor, what does not fit the schema) are listed above the code with line and column - click one to go there.':
            'Проблемы (неверный отступ, табуляция, повторяющийся ключ, алиас без якоря, несоответствие схеме) перечислены над кодом со строкой и столбцом - щёлкните по проблеме, чтобы перейти к ней.',
        'In the tree: change the value (F2: the key)': 'В дереве: изменить значение (F2: ключ)',

        /* ---------- JSON Lines ---------- */
        'JSON Lines': 'JSON Lines',
        'JSON Lines needs an array - each entry becomes one line':
            'Для JSON Lines нужен массив - каждая запись становится одной строкой',
        'Open a YAML file from your computer (JSON, JSON Lines, CSV and XML files are converted; you can also drag a file into the window)':
            'Открыть файл YAML с компьютера (файлы JSON, JSON Lines, CSV и XML преобразуются; файл можно и перетащить в окно)',

        /* ---------- Messages ---------- */
        'The browser storage is full - download and delete documents under "My documents"':
            'Хранилище браузера заполнено - скачайте и удалите документы в разделе «Мои документы»',
        'The browser storage is full - delete or download documents under "My documents" first':
            'Хранилище браузера заполнено - сначала удалите или скачайте документы в разделе «Мои документы»',
        'The browser storage is full - delete or download some documents first':
            'Хранилище браузера заполнено - сначала удалите или скачайте несколько документов',
        'The browser storage is full': 'Хранилище браузера заполнено',
        'Nothing to undo': 'Нечего отменять',
        'Nothing to redo': 'Нечего повторять',
        'The code has a syntax error - fix it first (see above the code), then edit in the tree':
            'В коде синтаксическая ошибка - сначала исправьте её (см. над кодом), затем редактируйте в дереве',
        'The code has a syntax error - fix it first (see above the code)':
            'В коде синтаксическая ошибка - сначала исправьте её (см. над кодом)',
        'The document has a syntax error - fix it first': 'В документе синтаксическая ошибка - сначала исправьте её',
        'The document has no data yet': 'В документе пока нет данных',
        'The document has no data to add to': 'В документе нет данных, к которым можно добавить',
        'Only an object can be added to the root object': 'К корневому объекту можно добавить только объект',
        'The root is neither an object nor an array': 'Корень не является ни объектом, ни массивом',
        'Choose a value in the tree first': 'Сначала выберите значение в дереве',
        'The root is a single value - change its type to object or array first':
            'Корень - одиночное значение; сначала смените его тип на объект или массив',
        'The root cannot be removed - "Start this document over" in the New menu empties it':
            'Корень нельзя удалить - «Начать этот документ заново» в меню «Новый» очищает его',
        'The root has no place to move to': 'Корню некуда перемещаться',
        'This entry is the first already': 'Эта запись уже первая',
        'This entry is the last already': 'Эта запись уже последняя',
        'Entries of an array have no key': 'У записей массива нет ключа',
        'A boolean is true or false - choose another type above the tree to change the type':
            'Логическое значение - это true или false; чтобы сменить тип, выберите другой над деревом',
        'null has no value - choose another type above the tree to change the type':
            'У null нет значения - чтобы сменить тип, выберите другой над деревом',
        'This value is changed in the code': 'Это значение изменяется в коде',
        'Keys sorted': 'Ключи отсортированы',
        'Minified': 'Сжато',
        'Formatted': 'Отформатировано',
        'The keys are sorted already': 'Ключи уже отсортированы',
        'The document is minified already': 'Документ уже сжат',
        'The document is formatted already': 'Документ уже отформатирован',
        'This document is empty already': 'Этот документ уже пуст',
        'All data is removed. "Undo" brings it back as long as the page is open.':
            'Все данные удалены. «Отменить» вернёт их, пока страница открыта.',
        'Start over': 'Начать заново',
        'The file is larger than 8 MB': 'Файл больше 8 МБ',
        'Downloaded': 'Скачано',
        'Copied to the clipboard': 'Скопировано в буфер обмена',
        'Code copied': 'Код скопирован',
        '.yaml downloaded': '.yaml скачан',
        'Add': 'Добавить',
        'Replace': 'Заменить',
        'Open as a new document': 'Открыть как новый документ',
        'The document is removed from this browser for good. Download it first if you want to keep a copy.':
            'Документ будет навсегда удалён из этого браузера. Если хотите сохранить копию, сначала скачайте его.',
        'The YAML package is not loaded yet': 'Пакет YAML ещё не загружен',
        'CSV needs an array of objects (a list of rows) - this data is not an array':
            'Для CSV нужен массив объектов (список строк) - эти данные не массив',
        'CSV needs an array of objects - some entries of this array are not objects':
            'Для CSV нужен массив объектов - некоторые записи этого массива не объекты',
        'A quote in the CSV is never closed': 'Кавычка в CSV не закрыта',

        /* ---------- Problems in the code ---------- */
        'A tab is used for indentation - YAML only allows spaces there':
            'Для отступа используется табуляция - YAML допускает там только пробелы',
        'The indentation does not fit here - entries of one level start in the same column':
            'Отступ здесь не подходит - записи одного уровня начинаются в одном столбце',
        'A mapping cannot start on the same line as its key - put it on the next line, indented':
            'Отображение не может начинаться в той же строке, что и его ключ - перенесите его на следующую строку с отступом',
        'A key must be on one line - did a ":" or a quote go missing?':
            'Ключ должен быть в одной строке - может, пропущено «:» или кавычка?',
        'A closing character is missing (a quote, ] or })': 'Не хватает закрывающего символа (кавычки, ] или })',
        'A value can only have one anchor': 'У значения может быть только один якорь',
        'A value can only have one tag': 'У значения может быть только один тег',
        'Several documents need --- between them': 'Между несколькими документами нужен ---',
        'A plain value cannot start with this character - put the value in quotes':
            'Простое значение не может начинаться с этого символа - заключите значение в кавычки',
        'The value does not fit its tag': 'Значение не соответствует своему тегу',
        'This alias is not valid': 'Этот алиас недопустим',
        'Unexpected text here - check the indentation, a missing ":" or "-", or quotes':
            'Неожиданный текст - проверьте отступ, пропущенные «:» или «-» или кавычки',
        'An alias cannot have an anchor or a tag': 'У алиаса не может быть якоря или тега',
        'The document is empty': 'Документ пуст',
        'The data is nested too deeply': 'Данные вложены слишком глубоко',
        /* Words that German keeps from the English, but Russian does not */
        'Code': 'Код',
        'Export': 'Экспорт',
        'Link': 'Ссылка',
        'Token': 'Токен',
        'Name': 'Имя',
        /* ---------- Template placeholders (?template=) ---------- */
        'A template stays as written - Format and conversions work on filled data': 'Шаблон остаётся без изменений - форматирование и преобразования работают с заполненными данными',
        'This part holds a placeholder - change it in the code': 'Эта часть содержит заполнитель - измените её в коде',
        'placeholder': 'заполнитель',
    },
    html: {
        '<b>Export</b> also has <b>Open in another editor</b>: it converts the document and opens it as a new document there. Anything the other format cannot hold is listed first.':
            'В <b>Экспорте</b> есть и <b>Открыть в другом редакторе</b>: документ преобразуется и открывается там как новый. То, что другой формат не может вместить, показывается заранее.',
        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Нажмите <b>Копировать промпт</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'ИИ отвечает ссылкой: щёлкните по ней или вставьте весь ответ ниже. <b>Отменить</b> вернёт всё назад.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'ИИ отвечает ссылкой: <b>вставьте весь его ответ ниже</b> (щелчок по ссылке открывает отдельный редактор). <b>Отменить</b> вернёт всё назад.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'Редактор может отправлять каждую сохранённую версию на ваш собственный сервер (<b>вебхук</b>), чтобы ваша работа хранилась там, где вы хотите. Ничего не отправляется, пока вы не введёте здесь адрес.',
        'Also possible: <code>?src=&lt;URL of a .yaml file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>yamleditor:ai</code>, <code>yamleditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Также можно: <code>?src=&lt;URL of a .yaml file&gt;</code> открывает файл, <code>&amp;webhook=&lt;URL&gt;</code> сохраняет туда этот документ. Редактор может открываться и в отдельном окне (<code>?embed=window</code>), а ваша страница может передать ему собственный промпт для ИИ и ключ сеанса, чтобы ИИ отправлял результат на ваш сервер (<code>yamleditor:ai</code>, <code>yamleditor:key-request</code>) - см. «Редактор на вашем сайте» под редактором. Подробности - в <a href="/llms.txt">llms.txt</a>.',
        'Also possible: <code>?src=&lt;URL of a .yaml file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>yamleditor:ai</code>, <code>yamleditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Также можно: <code>?src=&lt;URL of a .yaml file&gt;</code> открывает файл, <code>&amp;webhook=&lt;URL&gt;</code> сохраняет туда этот документ. Редактор может открываться и в отдельном окне (<code>?embed=window</code>), а ваша страница может передать ему собственный промпт для ИИ и ключ сеанса, чтобы ИИ отправлял результат на ваш сервер (<code>yamleditor:ai</code>, <code>yamleditor:key-request</code>) - см. «Редактор на вашем сайте» под редактором. Подробности - в <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> YAML on the left - or start with <b>New</b> and one of the templates. The tree in the middle shows the data as you type: mappings and lists fold, every value shows its type, <code>{3}</code> and <code>[5]</code> count the entries, every document after <code>---</code> has its own tree.':
            '<b>Пишите</b> YAML слева - или начните с <b>Новый</b> и одного из шаблонов. Дерево посередине показывает данные прямо во время набора: отображения и списки сворачиваются, у каждого значения виден тип, <code>{3}</code> и <code>[5]</code> считают записи, у каждого документа после <code>---</code> своё дерево.',
        '<b>Click a key or a value in the tree</b> to change it right there. <b>Enter</b> or a click elsewhere writes the change into the code at exactly that place - comments and formatting stay (one step for Undo), <b>Escape</b> cancels. The buttons above the tree add, duplicate, move and remove entries and change the type of a value.':
            '<b>Щёлкните по ключу или значению в дереве</b>, чтобы изменить его прямо там. <b>Enter</b> или щелчок в другом месте записывает изменение в код ровно в этом месте - комментарии и форматирование сохраняются (один шаг для «Отменить»), <b>Escape</b> отменяет. Кнопки над деревом добавляют, дублируют, перемещают и удаляют записи и меняют тип значения.',
        'A click in the tree puts the code\'s cursor on that value; the cursor in the code marks its value in the tree. The path of the selected value (<code>$.items[3].name</code>) is below the tree. Anchors (<code>&amp;name</code>) and aliases (<code>*name</code>) are marked.':
            'Щелчок в дереве ставит курсор кода на это значение; курсор в коде отмечает его значение в дереве. Путь выбранного значения (<code>$.items[3].name</code>) показан под деревом. Якоря (<code>&amp;name</code>) и алиасы (<code>*name</code>) отмечены.',
        '<b>Value</b> on the right shows the selected key and value; <b>Insert</b> adds entries and pieces of code; <b>Convert</b> formats the document or converts it to JSON, CSV or XML; <b>Schema</b> checks it against a JSON Schema from your documents.':
            '<b>Значение</b> справа показывает выбранный ключ и значение; <b>Вставка</b> добавляет записи и фрагменты кода; <b>Преобразование</b> форматирует документ или преобразует его в JSON, CSV или XML; <b>Схема</b> проверяет его по JSON Schema из ваших документов.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser. <b>Export</b> saves it as YAML, JSON, CSV or text.':
            '<b>Мои документы</b> (кнопка с папкой вверху слева) показывают все документы, хранящиеся в этом браузере. <b>Экспорт</b> сохраняет документ как YAML, JSON, CSV или текст.',
        'Comment lines in or out (<code>#</code>)': 'Закомментировать строки или убрать комментарий (<code>#</code>)',
        'Enter after <code>key:</code> indents the next line, Enter in a list starts the next item with <code>- </code>. Quotes and brackets close by themselves around a selection.':
            'Enter после <code>key:</code> делает отступ следующей строки, Enter в списке начинает следующий пункт с <code>- </code>. Кавычки и скобки сами закрываются вокруг выделения.',
    },
    patterns: [
        /* ---------- Status lines ---------- */
        ['^(\\d+) (?:line|lines) · ([\\d.]+ K?B)$', (m, l, s) => `${l} ${getPlural(l, 'строка', 'строки', 'строк')} · ${formatSize(s)}`],
        ['^([\\d,]+) bytes$', (m, b) => formatSize(m)],
        ['^\\d{1,3}(?:,\\d{3})+$', m => formatThousands(m)],
        ['^Show (\\d+) more of (\\d+)$', 'Показать ещё $1 из $2'],
        ['^Document (\\d+)$', 'Документ $1'],

        ['^Line (\\d+)$', 'Строка $1'],
        ['^Line (\\d+) is not valid JSON$', 'Строка $1 - некорректный JSON'],
        ['^Line (\\d+) has a syntax error - fix it first \\(see above the code\\)$', 'В строке $1 синтаксическая ошибка - сначала исправьте её (см. над кодом)'],
        ['^Not every line has the same keys - line (\\d+) differs from line (\\d+)$', 'Ключи не во всех строках совпадают - строка $1 отличается от строки $2'],
        ['^New document "(.+)"$', 'Новый документ «$1»'],
        /* Problems above the code */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'ошибка', 'ошибки', 'ошибок')}`],
        ['^· (\\d+) (?:schema problem|schema problems)$', (m, k) => `· ${k} ${getPlural(k, 'проблема схемы', 'проблемы схемы', 'проблем схемы')}`],
        ['^(\\d+) (?:schema problem|schema problems)$', (m, k) => `${k} ${getPlural(k, 'проблема схемы', 'проблемы схемы', 'проблем схемы')}`],
        ['^(\\d+) (?:schema problem|schema problems) · (\\d+) (?:note|notes)$', (m, k, j) => `${k} ${getPlural(k, 'проблема схемы', 'проблемы схемы', 'проблем схемы')} · ${j} ${getPlural(j, 'замечание', 'замечания', 'замечаний')}`],
        ['^· (\\d+) (?:note|notes)$', (m, k) => `· ${k} ${getPlural(k, 'замечание', 'замечания', 'замечаний')}`],
        ['^· (\\d+) (?:schema problem|schema problems) · (\\d+) (?:note|notes)$', (m, k, j) => `· ${k} ${getPlural(k, 'проблема схемы', 'проблемы схемы', 'проблем схемы')} · ${j} ${getPlural(j, 'замечание', 'замечания', 'замечаний')}`],
        ['^(\\d+) (?:note|notes)$', (m, k) => `${k} ${getPlural(k, 'замечание', 'замечания', 'замечаний')}`],
        ['^Line (\\d+), column (\\d+)$', 'Строка $1, столбец $2'],
        ['^The key "(.*)" is twice in this mapping - most programs keep only the last one$', 'Ключ «$1» встречается в этом отображении дважды - большинство программ сохраняют только последний'],
        ['^The alias \\*(.+) has no anchor &(.+) before it$', 'У алиаса *$1 нет якоря &$2 перед ним'],
        ['^The YAML parser stopped: (.*)$', 'Парсер YAML остановился: $1'],
        ['^YAML: (.*)$', 'YAML: $1'],
        ['^The schema "(.+)" has a syntax error in line (\\d+) - it is not used$', 'В схеме «$1» синтаксическая ошибка в строке $2 - она не используется'],

        /* Schema problems */
        ['^Schema: the type must be (.+) \\(it is (\\w+)\\)$', (m, w, is) => `Схема: тип должен быть ${w.split(' or ').map(x => TYPE[x] || x).join(' или ')} (сейчас ${TYPE[is] || is})`],
        ['^Schema: "(.*)" is missing \\(required\\)$', 'Схема: «$1» отсутствует (required)'],
        ['^Schema: "(.*)" is not allowed here \\(additionalProperties\\)$', 'Схема: «$1» здесь не допускается (additionalProperties)'],
        ['^Schema: must be one of (.*) \\(enum\\)$', 'Схема: должно быть одним из $1 (enum)'],
        ['^Schema: must be (.*) \\(const\\)$', 'Схема: должно быть $1 (const)'],
        ['^Schema: at least (\\d+) characters \\(minLength\\)$', (m, k) => `Схема: не менее ${k} ${getPlural(k, 'символа', 'символов', 'символов')} (minLength)`],
        ['^Schema: at most (\\d+) characters \\(maxLength\\)$', (m, k) => `Схема: не более ${k} ${getPlural(k, 'символа', 'символов', 'символов')} (maxLength)`],
        ['^The data is nested more than (\\d+) levels deep - the editor reads at most (\\d+)$', 'Данные вложены глубже $1 уровней - редактор читает не более $2'],
        ['^Schema: must match the pattern (.*) \\(pattern\\)$', 'Схема: должно соответствовать шаблону $1 (pattern)'],
        ['^Schema: the pattern (.*) is not checked on this long text - it repeats a repeated group, which can take very long \\(pattern\\)$', 'Схема: шаблон $1 не проверяется на этом длинном тексте - он повторяет повторяющуюся группу, что может занять очень много времени (pattern)'],
        ['^Schema: not a valid (.*) \\(format\\)$', 'Схема: некорректный формат $1 (format)'],
        ['^Schema: must be at least (.*) \\(minimum\\)$', 'Схема: должно быть не меньше $1 (minimum)'],
        ['^Schema: must be at most (.*) \\(maximum\\)$', 'Схема: должно быть не больше $1 (maximum)'],
        ['^Schema: must be greater than (.*) \\(exclusiveMinimum\\)$', 'Схема: должно быть больше $1 (exclusiveMinimum)'],
        ['^Schema: must be less than (.*) \\(exclusiveMaximum\\)$', 'Схема: должно быть меньше $1 (exclusiveMaximum)'],
        ['^Schema: must be a multiple of (.*) \\(multipleOf\\)$', 'Схема: должно быть кратно $1 (multipleOf)'],
        ['^Schema: at least (\\d+) keys \\(minProperties\\)$', (m, k) => `Схема: не менее ${k} ${getPlural(k, 'ключа', 'ключей', 'ключей')} (minProperties)`],
        ['^Schema: at most (\\d+) keys \\(maxProperties\\)$', (m, k) => `Схема: не более ${k} ${getPlural(k, 'ключа', 'ключей', 'ключей')} (maxProperties)`],
        ['^Schema: at least (\\d+) entries \\(minItems\\)$', (m, k) => `Схема: не менее ${k} ${getPlural(k, 'записи', 'записей', 'записей')} (minItems)`],
        ['^Schema: at most (\\d+) entries \\(maxItems\\)$', (m, k) => `Схема: не более ${k} ${getPlural(k, 'записи', 'записей', 'записей')} (maxItems)`],
        ['^Schema: the entries must be different \\(uniqueItems\\)$', 'Схема: записи должны быть разными (uniqueItems)'],
        ['^Schema: entry (\\d+) is not allowed here \\(items\\)$', 'Схема: запись $1 здесь не допускается (items)'],
        ['^Schema: no entry matches "contains" \\(contains\\)$', 'Схема: ни одна запись не соответствует «contains» (contains)'],
        ['^Schema: more than (\\d+) entries match "contains" \\(maxContains\\)$', 'Схема: больше $1 записей соответствуют «contains» (maxContains)'],
        ['^Schema: matches none of the allowed forms \\((anyOf|oneOf)\\)$', 'Схема: не соответствует ни одной из допустимых форм ($1)'],
        ['^Schema: matches (\\d+) of the forms, but only one is allowed \\(oneOf\\)$', 'Схема: соответствует $1 формам, а допускается только одна (oneOf)'],
        ['^Schema: must not match the "not" schema \\(not\\)$', 'Схема: не должно соответствовать схеме «not» (not)'],
        ['^Schema: "(.*)" needs "(.*)" as well \\(dependentRequired\\)$', 'Схема: «$1» требует также «$2» (dependentRequired)'],
        ['^Schema: the key "(.*)" does not fit the schema of the key names \\(propertyNames\\)$', 'Схема: ключ «$1» не соответствует схеме имён ключей (propertyNames)'],
        ['^Schema: no value is allowed here$', 'Схема: здесь не допускается никакое значение'],
        ['^Schema: the schema refers to another file \\((.*)\\) - only references inside the schema are followed$', 'Схема: схема ссылается на другой файл ($1) - учитываются только ссылки внутри схемы'],

        /* ---------- Value tab and schema tab ---------- */
        ['^(?:(\\d+) (key|keys|entry|entries) · )?line (\\d+), column (\\d+) · (.+)$', (m, k, w, l, c, sz) => `${k ? `${k} ${w.startsWith('key') ? getPlural(k, 'ключ', 'ключа', 'ключей') : getPlural(k, 'запись', 'записи', 'записей')} · ` : ''}строка ${l}, столбец ${c} · ${formatSize(sz)}`],
        ['^The schema has a syntax error in line (\\d+) - open it and fix it first\\.$', 'В схеме синтаксическая ошибка в строке $1 - откройте её и сначала исправьте.'],

        /* ---------- AI Assistant ---------- */
        ['^Part (\\d+) of (\\d+) received$', 'Часть $1 из $2 получена'],
        ['^Open the other (?:link|links) from the AI too \\(still missing: part (.+)\\)\\.$', 'Откройте и другие ссылки от ИИ (ещё не хватает: часть $1).'],
        ['^Part (\\d+) of (\\d+) received - paste the other (?:link|links) too \\(missing: (.+)\\)$', 'Часть $1 из $2 получена - вставьте и другие ссылки (не хватает: $3)'],
        ['^The AI sends the document to (.+) with a key that only works for this session\\. What you paste into your AI is handled by its provider\\.$', 'ИИ отправляет документ на $1 с ключом, который действует только в этом сеансе. То, что вы вставляете в свой ИИ, обрабатывает его провайдер.'],
        ['^The AI sends its result to (.+) by itself, and it opens here\\. If it answers with a link, paste its answer below\\.$', 'ИИ сам отправляет свой результат на $1, и он открывается здесь. Если ИИ отвечает ссылкой, вставьте его ответ ниже.'],
        ['^No key from (.+) - the prompt asks the AI for a link instead$', 'Нет ключа от $1 - вместо этого промпт просит ИИ прислать ссылку'],
        ['^Prompt copied - the AI sends its result to (.+)$', 'Промпт скопирован - ИИ отправит свой результат на $1'],

        /* ---------- Messages with names ---------- */
        ['^"(.+)" is not a number - choose another type above the tree to change the type$', '«$1» - не число; чтобы сменить тип, выберите другой над деревом'],
        ['^There is already a key "(.*)" here$', 'Здесь уже есть ключ «$1»'],
        ['^Path copied: (.*)$', 'Путь скопирован: $1'],
        ['^"(.+)" is open\\. My documents: open, rename, duplicate or delete your documents \\(Ctrl\\+O\\)$', '«$1» открыт. Мои документы: открывайте, переименовывайте, дублируйте или удаляйте свои документы (Ctrl+O)'],
        ['^Start "(.+)" over\\?$', 'Начать «$1» заново?'],
        ['^Start "(.+)" over$', 'Начать «$1» заново'],
        ['^(\\d+) (?:document|documents) · (.+) in this browser$', (m, k, s) => `${k} ${getPlural(k, 'документ', 'документа', 'документов')} · ${formatSize(s)} в этом браузере`],
        ['^No document named "(.*)"\\.$', 'Нет документа с именем «$1».'],
        ['^Open now · (.+)$', (m, s) => `Открыт сейчас · ${formatSize(s)}`],
        ['^(just now|yesterday|\\d+ min ago|\\d+ h ago|[A-Z][a-z]{2} \\d{1,2}, \\d{4}) · (.+)$', (m, w, s) => `${formatTime(w)} · ${formatSize(s)}`],
        ['^(.+) \\(open now\\)$', '$1 (открыт сейчас)'],
        ['^ZIP with (\\d+) (?:document|documents) downloaded$', (m, k) => `ZIP с ${k} ${getPlural(k, 'документом', 'документами', 'документами')} скачан`],
        ['^ZIP downloaded with (\\d+) files$', 'ZIP скачан, файлов: $1'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '«$1» теперь пуст - «Отменить» вернёт содержимое'],
        ['^"(.+)" opened$', '«$1» открыт'],
        ['^New document "(.+)" - your other documents are under "My documents"$', 'Новый документ «$1» - другие ваши документы в разделе «Мои документы»'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$', 'Новый документ «$1» от ИИ - другие ваши документы не изменились'],
        ['^New document "(.+)" - "(.+)" is checked against it$', 'Новый документ «$1» - «$2» проверяется по нему'],
        ['^"(.+)" is not a file the editor can open$', '«$1» - файл, который редактор не может открыть'],
        ['^Opened "(.+)" - converted from (JSON Lines|\\w+)$', '«$1» открыт - преобразован из $2'],
        ['^Opened "(.+)" - it is now in "My documents"$', '«$1» открыт - теперь он в разделе «Мои документы»'],
        ['^"(.+)" could not be opened: (.*)$', (m, f, why) => `«${f}» не удалось открыть: ${ZIP[why] || why}`],
        ['^(JSON|YAML) pasted from the clipboard - "Undo" brings the old data back$', '$1 вставлен из буфера обмена - «Отменить» вернёт старые данные'],
        ['^The addition is not valid (JSON|YAML) - it is open as a new document "(.+)"$', 'Дополнение - некорректный $1; оно открыто как новый документ «$2»'],
        ['^(.+) - the addition is open as a new document "(.+)"$', '$1 - дополнение открыто как новый документ «$2»'],
        ['^Document received - (\\d+) (?:problem|problems) found, see above the code$', (m, k) => `Документ получен - найдено: ${k} ${getPlural(k, 'проблема', 'проблемы', 'проблем')}, см. над кодом`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '«$1» изменён ИИ - «Отменить» вернёт всё назад'],
        ['^"(.+)" duplicated$', '«$1» дублирован'],
        ['^Delete "(.+)"\\?$', 'Удалить «$1»?'],
        ['^"(.+)" deleted$', '«$1» удалён'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Открыть $1'],
        /* ---------- Template placeholders (?template=) ---------- */
        ['^A placeholder key goes in quotes: "(.+)"$', 'Заполнитель в качестве ключа записывается в кавычках: "$1"'],
    ],
};
