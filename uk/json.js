/* Ukrainian texts of the JSON editor: the bar, the work area (code, tree,
   value, insert, convert, schema), its dialogs and messages, and the
   problems found in the code. What all editors share is in
   common.js; how the dictionaries are used is described in
   i18n.js. Names of documents, keys and values stay as they are: the
   patterns copy them into the Ukrainian text. */

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

/* When a document was last changed (files.js): "just now", "5 min ago", "Oct 25, 2026" … */

/* Reasons a ZIP could not be opened: the editor's own words are English (app.js) */
const ZIP = {};
/* Words inside messages */
const TYPE = { string: 'рядок', number: 'число', boolean: 'логічне', null: 'null', object: 'об’єкт', array: 'масив', integer: 'ціле число' };
/**
 * Translates the text the pattern found (FOUND in the English pattern).
 * @param {string} s - the English text the pattern found.
 * @returns {string} the text in the language.
 */
const translateFound = s => (s === 'the end of the text' ? 'кінець тексту' : s === 'the end of the line' ? 'кінець рядка' : s);

export default {
    text: {
        /* ---------- Template placeholders (?template=): views of the tree, box, side panel ---------- */
        'Show or hide the side panel': 'Показати або сховати бічну панель',
        'Examples': 'Приклади',
        'Template': 'Шаблон',
        'The template with its placeholders as written': 'Шаблон із заповнювачами в початковому вигляді',
        'Placeholders': 'Заповнювачі',
        'The placeholders of the template - a click on one puts its tag at the cursor': 'Заповнювачі шаблону - клацання вставляє відповідний тег у позицію курсора',
        'Shown': 'Показано',
        'Hidden': 'Приховано',
        'View of the tree': 'Вигляд дерева',
        'The data filled with the examples': 'Дані, заповнені прикладами',
        'The examples could not be filled in - the tree shows the template': 'Не вдалося підставити приклади - дерево показує шаблон',
        'This part shows an example - change it in the template view or in the code': 'Ця частина показує приклад - змініть її у вигляді шаблону або в коді',
        "Protect the CSV export against spreadsheet formulas; plain signed numbers remain unchanged.": "Захищати експорт CSV від формул електронних таблиць; прості числа зі знаком не змінюються.",
        /* ---------- Top bar ---------- */
        'JSON Editor - home': 'Редактор JSON - на головну',
        'JSON Editor': 'Редактор JSON',
        'File': 'Файл',
        'My documents (Ctrl+O)': 'Мої документи (Ctrl+O)',
        'My documents': 'Мої документи',
        'New document, or start this one over': 'Новий документ або почати цей заново',
        'New': 'Новий',
        'New blank document': 'Новий порожній документ',
        'An empty object - your other documents stay as they are':
            'Порожній об’єкт - інші ваші документи залишаться без змін',
        'Settings': 'Налаштування',
        'A configuration with nested objects': 'Конфігурація з вкладеними об’єктами',
        'Node package': 'Пакет Node',
        'A package.json with scripts and dependencies': 'package.json зі скриптами й залежностями',
        'Table': 'Таблиця',
        'An array of objects - converts to CSV': 'Масив об’єктів - перетворюється на CSV',
        'A schema to check other documents with': 'Схема для перевірки інших документів',
        'Map points (GeoJSON)': 'Точки на мапі (GeoJSON)',
        'A feature collection with one point': 'Колекція об’єктів з однією точкою',
        'The welcome example': 'Вітальний приклад',
        'Shows what the editor can do': 'Показує, що вміє редактор',
        'Start this document over': 'Почати цей документ заново',
        'Empties the data - "Undo" brings it back': 'Очищає дані - «Скасувати» поверне їх',
        'Open a JSON file from your computer (YAML, CSV and XML files are converted; you can also drag a file into the window)':
            'Відкрити файл JSON з комп’ютера (файли YAML, CSV і XML перетворюються; файл можна й перетягнути у вікно)',
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
        'Let any AI write in this editor': 'Нехай будь-який ШІ пише в цьому редакторі',
        'AI Assistant': 'ШІ-асистент',
        'Save to your own server and embed the editor in your website':
            'Збереження на ваш сервер і вбудовування редактора у ваш сайт',
        'Save to server': 'На сервер',
        'How it works and keyboard shortcuts (?)': 'Як це працює і поєднання клавіш (?)',
        'Help': 'Довідка',
        'Save the document as a .json file (Ctrl+S)': 'Зберегти документ як файл .json (Ctrl+S)',
        'Download .json': 'Завантажити .json',
        'Minified JSON, YAML, CSV and more (Ctrl+E)': 'Стиснутий JSON, YAML, CSV та інше (Ctrl+E)',
        'Export…': 'Експорт…',

        /* ---------- Views and work area ---------- */
        'View': 'Вигляд',
        'Edit': 'Правка',
        'Tree': 'Дерево',
        'Value': 'Значення',
        'JSON code': 'Код JSON',
        'Copy the code to the clipboard': 'Скопіювати код у буфер обміну',
        'Copy code': 'Копіювати код',
        'Copy': 'Копіювати',
        'Write the data as plain JSON with neat indentation (Ctrl+Shift+F)':
            'Записати дані як звичайний JSON з акуратними відступами (Ctrl+Shift+F)',
        'Format': 'Форматувати',
        'Write the data on one line, without spaces': 'Записати дані в один рядок, без пробілів',
        'Minify': 'Стиснути',
        'Drag to change the width of the code area': 'Перетягніть, щоб змінити ширину області коду',
        'Drag to change the width': 'Перетягніть, щоб змінити ширину',
        'Unfold everything': 'Розгорнути все',
        'Fold everything': 'Згорнути все',
        'Add an entry: into the selected object or array, otherwise after the selected entry':
            'Додати запис: у вибраний об’єкт або масив, інакше після вибраного запису',
        'Add an entry': 'Додати запис',
        'Duplicate the selected entry': 'Дублювати вибраний запис',
        'Duplicate': 'Дублювати',
        'Move the selected entry up (Alt+Up)': 'Перемістити вибраний запис угору (Alt+Up)',
        'Move up': 'Угору',
        'Move the selected entry down (Alt+Down)': 'Перемістити вибраний запис униз (Alt+Down)',
        'Move down': 'Униз',
        'Remove the selected entry (Delete)': 'Видалити вибраний запис (Delete)',
        'Remove': 'Видалити',
        'The type of the selected value - choosing another one changes it': 'Тип вибраного значення - вибір іншого змінює його',
        'Type': 'Тип',
        'string': 'рядок',
        'number': 'число',
        'boolean': 'логічне',
        'null': 'null (порожньо)',
        'object': 'об’єкт',
        'array': 'масив',
        'alias': 'аліас',
        'Search keys and values': 'Пошук ключів і значень',
        'Previous match (Shift+Enter)': 'Попередній збіг (Shift+Enter)',
        'Previous match': 'Попередній збіг',
        'Next match (Enter)': 'Наступний збіг (Enter)',
        'Next match': 'Наступний збіг',
        'The data as a tree: click a key or a value to change it':
            'Дані у вигляді дерева: клацніть ключ або значення, щоб змінити його',
        'Copy the path of the selected value': 'Скопіювати шлях вибраного значення',
        'Copy path': 'Копіювати шлях',
        'Side panel': 'Бічна панель',
        'The selected key and value': 'Вибраний ключ і значення',
        'New entries and pieces of code': 'Нові записи й фрагменти коду',
        'Insert': 'Вставка',
        'Format the document, or convert it to another format': 'Відформатувати документ або перетворити його на інший формат',
        'Convert': 'Конвертер',
        'Check the document against a JSON Schema': 'Перевірити документ за JSON Schema',
        'Schema': 'Схема',
        'Open it here': 'Відкрити тут',
        'Drop the file here': 'Перетягніть файл сюди',

        /* Inside the tree */
        'Key': 'Ключ',
        'Anchor': 'Якір',
        'Alias': 'Аліас',
        'empty': 'порожньо',
        'No data yet': 'Даних поки немає',
        'Empty document': 'Порожній документ',

        /* Problems above the code */
        'Hide': 'Сховати',
        'Show': 'Показати',

        /* ---------- Value tab ---------- */
        'Click a key or a value in the tree.': 'Клацніть ключ або значення в дереві.',
        'The document has no data yet.': 'У документі поки немає даних.',
        'Path': 'Шлях',
        'Apply': 'Застосувати',
        'Add after it': 'Додати після',
        'Anchor:': 'Якір:',
        'Alias of the anchor:': 'Аліас якоря:',

        /* ---------- Insert tab ---------- */
        'Add to the selected value': 'Додати до вибраного значення',
        'Into the selected object or array, otherwise after the selected entry. One step for Undo.':
            'У вибраний об’єкт або масив, інакше після вибраного запису. Один крок для «Скасувати».',
        'Text': 'Текст',
        'A new string': 'Новий рядок',
        'Number': 'Число',
        'A new number': 'Нове число',
        'True / false': 'Істина / хиба',
        'A new boolean': 'Нове логічне значення',
        'Empty (null)': 'Порожньо (null)',
        'A new null': 'Новий null',
        'Object { }': 'Об’єкт { }',
        'A new empty object': 'Новий порожній об’єкт',
        'Array [ ]': 'Масив [ ]',
        'A new empty array': 'Новий порожній масив',
        'At the cursor in the code': 'Біля курсора в коді',
        'Object': 'Об’єкт',
        'An object with one key': 'Об’єкт з одним ключем',
        'Array': 'Масив',
        'An empty array': 'Порожній масив',
        'Key and value': 'Ключ і значення',
        'One entry of an object': 'Один запис об’єкта',
        'Table (rows)': 'Таблиця (рядки)',
        'Text in quotes': 'Текст у лапках',
        'A string': 'Рядок',
        'Today\'s date': 'Сьогоднішня дата',
        'The date as YYYY-MM-DD': 'Дата у форматі РРРР-ММ-ДД',
        'Date and time': 'Дата й час',
        'The date and time (ISO 8601, UTC)': 'Дата й час (ISO 8601, UTC)',
        'An empty value': 'Порожнє значення',
        'true': 'істина (true)',
        'false': 'хиба (false)',
        'The boolean true': 'Логічне значення true',
        'The boolean false': 'Логічне значення false',

        /* ---------- Convert tab ---------- */
        'This document': 'Цей документ',
        'Indentation': 'Відступи',
        '2 spaces': '2 пробіли',
        '4 spaces': '4 пробіли',
        'Tabs': 'Табуляція',
        'Plain JSON with neat indentation': 'Звичайний JSON з акуратними відступами',
        'All on one line, without spaces': 'Усе в один рядок, без пробілів',
        'The keys of every object in alphabetical order': 'Ключі кожного об’єкта за абеткою',
        'Sort keys': 'Сортувати ключі',
        'Convert to': 'Перетворити на',
        'YAML text': 'Текст YAML',
        'CSV (an array of objects)': 'CSV (масив об’єктів)',
        'XML text': 'Текст XML',
        'The tree as plain text': 'Дерево звичайним текстом',
        'Result': 'Результат',
        'Download': 'Завантажити',
        'Each object is a row, its keys are the columns. Texts that look like numbers are in quotes.':
            'Кожен об’єкт - рядок, його ключі - стовпці. Тексти, схожі на числа, взято в лапки.',
        'The data is inside <root>; the items of an array are <item> elements.':
            'Дані містяться всередині <root>; елементи масиву - це елементи <item>.',
        'Opens the result as a new document in the YAML Editor (in a new tab)':
            'Відкриває результат як новий документ у редакторі YAML (у новій вкладці)',
        'Open in the YAML Editor': 'Відкрити в редакторі YAML',

        /* ---------- Schema tab ---------- */
        'Check this document against a JSON Schema that is one of your documents (open or paste it as a new document first). The editor never downloads a schema.':
            'Перевірити цей документ за JSON Schema, яка є одним із ваших документів (спершу відкрийте або вставте її як новий документ). Редактор ніколи не завантажує схему з мережі.',
        'No schema': 'Без схеми',
        'The chosen schema document is not there any more.': 'Вибраного документа зі схемою більше немає.',
        'Checked again once the syntax error is fixed.': 'Буде перевірено знову, щойно синтаксичну помилку буде виправлено.',
        'The data fits the schema.': 'Дані відповідають схемі.',
        'place does not fit the schema - see above the code.': 'місце не відповідає схемі - див. над кодом.',
        'places do not fit the schema - see above the code.': 'місць не відповідають схемі - див. над кодом.',
        'The document names the schema': 'Документ вказує схему',
        '- it is not loaded from there.': '- її звідти не завантажують.',
        'Open the schema': 'Відкрити схему',
        'A new document with a schema that this data fits': 'Новий документ зі схемою, якій відповідають ці дані',
        'Make a schema from this data': 'Створити схему з цих даних',

        /* ---------- Export ---------- */
        'Close': 'Закрити',
        'File name': 'Ім’я файлу',
        'JSON file as it is (.json)': 'Файл JSON як є (.json)',
        'Minified JSON file (.json)': 'Стиснутий файл JSON (.json)',
        'YAML file (.yaml)': 'Файл YAML (.yaml)',
        'CSV table (.csv)': 'Таблиця CSV (.csv)',
        'The tree as plain text (.txt)': 'Дерево звичайним текстом (.txt)',
        'Download every format at once': 'Завантажити всі формати одразу',
        'All formats (ZIP)': 'Усі формати (ZIP)',

        /* ---------- My documents ---------- */
        'Search by name': 'Пошук за назвою',
        'Search your documents': 'Пошук у ваших документах',
        'Open a file from your computer as a new document': 'Відкрити файл з комп’ютера як новий документ',
        'New document': 'Новий документ',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Клацніть документ, щоб відкрити його. Документи зберігаються лише в цьому браузері - нічого не вивантажується на сервер. Очищення даних сайту в браузері видалить їх, тому завантажте ті, які хочете зберегти.',
        'Download every document as a .json file in one ZIP': 'Завантажити всі документи як файли .json одним ZIP',
        'Download all (ZIP)': 'Завантажити все (ZIP)',
        'Rename': 'Перейменувати',
        'Download as .json': 'Завантажити як .json',
        'Delete': 'Видалити',
        'New name': 'Нове ім’я',
        'This document is open': 'Цей документ відкрито',
        'Click to open this document': 'Клацніть, щоб відкрити цей документ',
        'No documents yet.': 'Документів поки немає.',

        /* ---------- AI Assistant ---------- */
        'Any AI can work with you - ChatGPT, Claude, Gemini, Copilot.':
            'З вами може працювати будь-який ШІ - ChatGPT, Claude, Gemini, Copilot.',
        'Connected AI': 'Під’єднаний ШІ',
        'Connected to': 'Під’єднано до',
        'the AI sends its result there, and it opens here.': 'ШІ надсилає туди свій результат, і він відкривається тут.',
        'What': 'Що',
        'tells the AI': 'повідомляє ШІ',
        'The AI should': 'ШІ має',
        'Change “': 'Змінити «',
        '”': '»',
        'Make a new document': 'Створити новий документ',
        'The AI\'s answer (or press Ctrl+V anywhere):': 'Відповідь ШІ (або натисніть Ctrl+V будь-де):',
        'The document travels in the link after the “#”, which no server sees. What you paste into your AI is handled by its provider.':
            'Документ передається в посиланні після «#», якого не бачить жоден сервер. Те, що ви вставляєте у свій ШІ, обробляє його провайдер.',
        'The prompt - copy it with Ctrl+C': 'Промпт - скопіюйте його через Ctrl+C',
        'Copy prompt': 'Копіювати промпт',
        'Paste it into your AI and say what it should change.': 'Вставте його у свій ШІ та скажіть, що треба змінити.',
        'The AI answers with a link: click it, or paste the whole answer below.':
            'ШІ відповідає посиланням: клацніть його або вставте всю відповідь нижче.',
        'takes it back.': 'поверне все назад.',
        'The AI answers with a link:': 'ШІ відповідає посиланням:',
        'paste its whole answer below': 'вставте всю його відповідь нижче',
        '(a clicked link opens a separate editor).': '(клацнуте посилання відкриває окремий редактор).',
        '(no key yet)': '(ключа поки немає)',
        '(key valid while the editor is open)': '(ключ дійсний, поки редактор відкрито)',
        'The link could not be read': 'Не вдалося прочитати посилання',
        'The document in this link is incomplete or damaged. If the AI\'s link was split over several lines (as in a terminal), copy the whole answer and paste it into the editor with Ctrl+V - the editor joins the lines.':
            'Документ у цьому посиланні неповний або пошкоджений. Якщо посилання ШІ розбите на кілька рядків (як у терміналі), скопіюйте всю відповідь і вставте її в редактор через Ctrl+V - редактор з’єднає рядки.',
        'Loading…': 'Завантаження…',
        'Taken over by your editor': 'Передано у ваш редактор',
        'The document is now in the JSON Editor tab you already had open. Switch to that tab, or open it here.':
            'Документ тепер у вкладці редактора JSON, яку ви вже мали відкритою. Перейдіть до тієї вкладки або відкрийте його тут.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)':
            'Копіювання тут заборонене - текст виділено нижче: натисніть Ctrl+C (⌘C)',
        'Prompt copied - paste it into your AI and say what it should write':
            'Промпт скопійовано - вставте його у свій ШІ та скажіть, що треба написати',
        'This link is incomplete or damaged - please ask the AI to send it again':
            'Посилання неповне або пошкоджене - попросіть ШІ надіслати його ще раз',

        /* ---------- Save to your server ---------- */
        'Save to your server': 'Збереження на ваш сервер',
        'Webhook address': 'Адреса вебхука',
        'https://example.com/api/json': 'https://example.com/api/json',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(необов’язково, надсилається як «Authorization: Bearer …»; зберігається, доки відкрита ця вкладка)',
        'Send automatically a few seconds after each change (otherwise only when you click':
            'Надсилати автоматично через кілька секунд після кожної зміни (інакше лише коли ви натискаєте',
        'or press Ctrl+S)': 'або Ctrl+S)',
        'Only for “': 'Лише для «',
        '” (other documents use the general address)': '» (інші документи використовують загальну адресу)',
        'What your server receives': 'Що отримує ваш сервер',
        'A POST request with JSON (your server must allow CORS from https://json.giit.ch); content is the document as a string:':
            'POST-запит із JSON (ваш сервер має дозволяти CORS з https://json.giit.ch); content - це документ у вигляді рядка:',
        'Embed the editor in your website': 'Вбудувати редактор у ваш сайт',
        'Send now': 'Надіслати зараз',
        'Save setting': 'Зберегти налаштування',

        /* ---------- Help ---------- */
        'How it works': 'Як це працює',
        'Keyboard shortcuts': 'Поєднання клавіш',
        'In the tree: go up and down, fold and unfold': 'У дереві: угору й униз, згорнути й розгорнути',
        'In the tree: remove the entry': 'У дереві: видалити запис',
        'In the tree: move the entry up / down': 'У дереві: перемістити запис угору / вниз',
        'Search keys and values in the tree': 'Пошук ключів і значень у дереві',
        'Format the document': 'Відформатувати документ',
        'Indent / outdent in the code': 'Збільшити / зменшити відступ у коді',
        'Undo / redo': 'Скасувати / повторити',
        'Save (download, or to your server) / export': 'Зберегти (завантажити або на ваш сервер) / експорт',
        'Alt': 'Alt',
        'Problems (a missing comma, a duplicate key, what does not fit the schema) are listed above the code with line and column - click one to go there.':
            'Проблеми (пропущена кома, повторюваний ключ, невідповідність схемі) перелічено над кодом із рядком і стовпцем - клацніть проблему, щоб перейти до неї.',
        'In the tree: change the value (F2: the key)': 'У дереві: змінити значення (F2: ключ)',

        /* ---------- JSON Lines ---------- */
        'JSON Lines': 'JSON Lines',
        'JSON Lines needs an array - each entry becomes one line':
            'Для JSON Lines потрібен масив - кожен запис стає одним рядком',
        'An event log: one JSON object per line': 'Журнал подій: один об’єкт JSON на рядок',
        'Open a JSON or JSON Lines file from your computer (YAML, CSV and XML files are converted; you can also drag a file into the window)':
            'Відкрити файл JSON або JSON Lines з комп’ютера (файли YAML, CSV і XML перетворюються; файл можна й перетягнути у вікно)',
        'JSON Lines file (.jsonl)': 'Файл JSON Lines (.jsonl)',
        'JSON array': 'Масив JSON',
        'Opens the result as a new document in this editor': 'Відкриває результат як новий документ у цьому редакторі',
        'Download .jsonl': 'Завантажити .jsonl',
        'Save the document as a .jsonl file (Ctrl+S)': 'Зберегти документ як файл .jsonl (Ctrl+S)',
        '.jsonl downloaded': '.jsonl завантажено',
        'Extra text after the value - a line of JSON Lines holds one value':
            'Зайвий текст після значення - рядок JSON Lines містить одне значення',
        'This is the only line - "Start this document over" in the New menu empties it':
            'Це єдиний рядок - «Почати цей документ заново» в меню «Новий» очищає його',
        'This line is the first already': 'Цей рядок уже перший',
        'This line is the last already': 'Цей рядок уже останній',

        /* ---------- Messages ---------- */
        'The browser storage is full - download and delete documents under "My documents"':
            'Сховище браузера заповнене - завантажте й видаліть документи в «Мої документи»',
        'The browser storage is full - delete or download documents under "My documents" first':
            'Сховище браузера заповнене - спершу видаліть або завантажте документи в «Мої документи»',
        'The browser storage is full - delete or download some documents first':
            'Сховище браузера заповнене - спершу видаліть або завантажте кілька документів',
        'The browser storage is full': 'Сховище браузера заповнене',
        'Nothing to undo': 'Нічого скасовувати',
        'Nothing to redo': 'Нічого повторювати',
        'The code has a syntax error - fix it first (see above the code), then edit in the tree':
            'У коді синтаксична помилка - спершу виправте її (див. над кодом), потім редагуйте в дереві',
        'The code has a syntax error - fix it first (see above the code)':
            'У коді синтаксична помилка - спершу виправте її (див. над кодом)',
        'The document has a syntax error - fix it first': 'У документі синтаксична помилка - спершу виправте її',
        'The document has no data yet': 'У документі поки немає даних',
        'The document has no data to add to': 'У документі немає даних, до яких можна додати',
        'Only an object can be added to the root object': 'До кореневого об’єкта можна додати лише об’єкт',
        'The root is neither an object nor an array': 'Корінь не є ні об’єктом, ні масивом',
        'Choose a value in the tree first': 'Спершу виберіть значення в дереві',
        'The root is a single value - change its type to object or array first':
            'Корінь - одиничне значення; спершу змініть його тип на об’єкт або масив',
        'The root cannot be removed - "Start this document over" in the New menu empties it':
            'Корінь не можна видалити - «Почати цей документ заново» в меню «Новий» очищає його',
        'The root has no place to move to': 'Кореню нікуди переміщатися',
        'This entry is the first already': 'Цей запис уже перший',
        'This entry is the last already': 'Цей запис уже останній',
        'Entries of an array have no key': 'Записи масиву не мають ключа',
        'A boolean is true or false - choose another type above the tree to change the type':
            'Логічне значення - це true або false; щоб змінити тип, виберіть інший над деревом',
        'null has no value - choose another type above the tree to change the type':
            'null не має значення - щоб змінити тип, виберіть інший над деревом',
        'This value is changed in the code': 'Це значення змінюється в коді',
        'Keys sorted': 'Ключі відсортовано',
        'Minified': 'Стиснуто',
        'Formatted': 'Відформатовано',
        'The keys are sorted already': 'Ключі вже відсортовано',
        'The document is minified already': 'Документ уже стиснуто',
        'The document is formatted already': 'Документ уже відформатовано',
        'Remove the comments?': 'Видалити коментарі?',
        'Write plain JSON': 'Записати звичайний JSON',
        'This document is empty already': 'Цей документ уже порожній',
        'All data is removed. "Undo" brings it back as long as the page is open.':
            'Усі дані видалено. «Скасувати» поверне їх, поки сторінка відкрита.',
        'Start over': 'Почати заново',
        'The file is larger than 8 MB': 'Файл більший за 8 МБ',
        'Downloaded': 'Завантажено',
        'Copied to the clipboard': 'Скопійовано в буфер обміну',
        'Code copied': 'Код скопійовано',
        '.json downloaded': '.json завантажено',
        'Add': 'Додати',
        'Replace': 'Замінити',
        'Open as a new document': 'Відкрити як новий документ',
        'The document is removed from this browser for good. Download it first if you want to keep a copy.':
            'Документ буде остаточно видалено з цього браузера. Якщо хочете зберегти копію, спершу завантажте його.',
        'The YAML package is not loaded yet': 'Пакет YAML ще не завантажено',
        'CSV needs an array of objects (a list of rows) - this data is not an array':
            'Для CSV потрібен масив об’єктів (список рядків) - ці дані не масив',
        'CSV needs an array of objects - some entries of this array are not objects':
            'Для CSV потрібен масив об’єктів - деякі записи цього масиву не об’єкти',
        'A quote in the CSV is never closed': 'Лапки в CSV не закрито',

        /* ---------- Problems in the code ---------- */
        'Comments are not part of plain JSON (JSON with comments) - "Format" writes plain JSON without them':
            'Коментарі не входять до звичайного JSON (JSON із коментарями) - «Форматувати» запише звичайний JSON без них',
        'A comma after the last entry is not allowed in plain JSON - "Format" removes it':
            'Кома після останнього запису у звичайному JSON не допускається - «Форматувати» видалить її',
        'Single quotes are JSON5, not plain JSON - "Format" writes double quotes':
            'Одинарні лапки - це JSON5, а не звичайний JSON - «Форматувати» запише подвійні лапки',
        'Keys without quotes are JSON5, not plain JSON - "Format" adds the quotes':
            'Ключі без лапок - це JSON5, а не звичайний JSON - «Форматувати» додасть лапки',
        'This number is written as in JSON5 (hexadecimal, Infinity, NaN, a + sign or a point at the start or end) - plain JSON does not allow it':
            'Це число записано як у JSON5 (шістнадцяткове, Infinity, NaN, знак + або крапка на початку чи в кінці) - звичайний JSON цього не допускає',
        'This escape (\\\', \\v, \\0 or \\x) is JSON5, not plain JSON':
            'Ця екранувальна послідовність (\\\', \\v, \\0 або \\x) - це JSON5, а не звичайний JSON',
        'A string continued on the next line with \\ is JSON5, not plain JSON':
            'Рядок, продовжений на наступному рядку через \\, - це JSON5, а не звичайний JSON',
        'This comment /* is never closed with */': 'Цей коментар /* не закрито за допомогою */',
        '\\u needs four hexadecimal digits, e.g. \\u00e9': '\\u потрібні чотири шістнадцяткові цифри, напр. \\u00e9',
        'A line break inside a string must be written as \\n': 'Розрив рядка всередині рядка треба записувати як \\n',
        'A tab inside a string must be written as \\t': 'Табуляцію всередині рядка треба записувати як \\t',
        'A control character inside a string must be written as \\u0000 … \\u001f':
            'Керівний символ усередині рядка треба записувати як \\u0000 … \\u001f',
        'A value is missing': 'Бракує значення',
        'A number cannot start with 0 - write it without the leading 0':
            'Число не може починатися з 0 - запишіть його без початкового 0',
        'One comma too many - an entry is missing here': 'Зайва кома - тут бракує запису',
        'One comma too many - a value is missing here': 'Зайва кома - тут бракує значення',
        'A comma is missing between the entries': 'Між записами бракує коми',
        'The document is empty': 'Документ порожній',
        'Extra text after the end of the data - a JSON document has one value at the top (usually an object or an array)':
            'Зайвий текст після кінця даних - документ JSON має одне значення на верхньому рівні (зазвичай об’єкт або масив)',
        'The data is nested too deeply': 'Дані вкладено надто глибоко',
        /* Words that German keeps from the English, but Ukrainian does not */
        'Code': 'Код',
        'Export': 'Експорт',
        'Link': 'Посилання',
        'Token': 'Токен',
        'Name': 'Ім’я',
        /* ---------- Template placeholders (?template=) ---------- */
        'A template stays as written - Format and conversions work on filled data': 'Шаблон залишається без змін - форматування та перетворення працюють із заповненими даними',
        'This part holds a placeholder - change it in the code': 'Ця частина містить заповнювач - змініть її в коді',
        'placeholder': 'заповнювач',
    },
    html: {
        '<b>Export</b> also has <b>Open in another editor</b>: it converts the document and opens it as a new document there. Anything the other format cannot hold is listed first.':
            'У <b>Експорті</b> є й <b>Відкрити в іншому редакторі</b>: документ перетворюється й відкривається там як новий. Те, що інший формат не може вмістити, показується заздалегідь.',
        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Натисніть <b>Копіювати промпт</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'ШІ відповідає посиланням: клацніть його або вставте всю відповідь нижче. <b>Скасувати</b> поверне все назад.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'ШІ відповідає посиланням: <b>вставте всю його відповідь нижче</b> (клацнуте посилання відкриває окремий редактор). <b>Скасувати</b> поверне все назад.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'Редактор може надсилати кожну збережену версію на ваш власний сервер (<b>вебхук</b>), щоб ваша робота зберігалася там, де ви хочете. Нічого не надсилається, доки ви не введете тут адресу.',
        'Also possible: <code>?src=&lt;URL of a .json file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>jsoneditor:ai</code>, <code>jsoneditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Також можна: <code>?src=&lt;URL of a .json file&gt;</code> відкриває файл, <code>&amp;webhook=&lt;URL&gt;</code> зберігає туди цей документ. Редактор може відкриватися й в окремому вікні (<code>?embed=window</code>), а ваша сторінка може передати йому власний промпт для ШІ та ключ сеансу, щоб ШІ надсилав результат на ваш сервер (<code>jsoneditor:ai</code>, <code>jsoneditor:key-request</code>) - див. «Редактор на вашому сайті» під редактором. Подробиці - у <a href="/llms.txt">llms.txt</a>.',
        'Also possible: <code>?src=&lt;URL of a .json file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>jsoneditor:ai</code>, <code>jsoneditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Також можна: <code>?src=&lt;URL of a .json file&gt;</code> відкриває файл, <code>&amp;webhook=&lt;URL&gt;</code> зберігає туди цей документ. Редактор може відкриватися й в окремому вікні (<code>?embed=window</code>), а ваша сторінка може передати йому власний промпт для ШІ та ключ сеансу, щоб ШІ надсилав результат на ваш сервер (<code>jsoneditor:ai</code>, <code>jsoneditor:key-request</code>) - див. «Редактор на вашому сайті» під редактором. Подробиці - у <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> JSON on the left - or start with <b>New</b> and one of the templates. The tree in the middle shows the data as you type: objects and arrays fold, every value shows its type, <code>{3}</code> and <code>[5]</code> count the entries.':
            '<b>Пишіть</b> JSON ліворуч - або почніть із <b>Новий</b> та одного із шаблонів. Дерево посередині показує дані просто під час набору: об’єкти й масиви згортаються, кожне значення показує свій тип, <code>{3}</code> і <code>[5]</code> рахують записи.',
        '<b>Click a key or a value in the tree</b> to change it right there. <b>Enter</b> or a click elsewhere writes the change into the code at exactly that place (one step for Undo), <b>Escape</b> cancels. The buttons above the tree add, duplicate, move and remove entries and change the type of a value.':
            '<b>Клацніть ключ або значення в дереві</b>, щоб змінити його просто там. <b>Enter</b> або клацання деінде записує зміну в код саме в цьому місці (один крок для «Скасувати»), <b>Escape</b> скасовує. Кнопки над деревом додають, дублюють, переміщують і видаляють записи та змінюють тип значення.',
        'A click in the tree puts the code\'s cursor on that value; the cursor in the code marks its value in the tree. The path of the selected value (<code>$.items[3].name</code>) is below the tree.':
            'Клацання в дереві ставить курсор коду на це значення; курсор у коді позначає його значення в дереві. Шлях вибраного значення (<code>$.items[3].name</code>) показано під деревом.',
        '<b>Value</b> on the right shows the selected key and value; <b>Insert</b> adds entries and pieces of code; <b>Convert</b> formats the document or converts it to YAML, CSV or XML; <b>Schema</b> checks it against a JSON Schema from your documents.':
            '<b>Значення</b> праворуч показує вибраний ключ і значення; <b>Вставка</b> додає записи й фрагменти коду; <b>Конвертер</b> форматує документ або перетворює його на YAML, CSV чи XML; <b>Схема</b> перевіряє його за JSON Schema з ваших документів.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser. <b>Export</b> saves it as JSON, minified JSON, YAML, CSV or text.':
            '<b>Мої документи</b> (кнопка з текою вгорі ліворуч) показують усі документи, що зберігаються в цьому браузері. <b>Експорт</b> зберігає документ як JSON, стиснутий JSON, YAML, CSV або текст.',
        'Quotes and brackets close by themselves around a selection; Enter after <code>{</code> or <code>[</code> indents the next line.':
            'Лапки й дужки самі закриваються навколо виділення; Enter після <code>{</code> або <code>[</code> робить відступ наступного рядка.',
    },
    patterns: [
        /* ---------- Status lines ---------- */
        ['^(\\d+) (?:line|lines) · ([\\d.]+ K?B)( · JSON Lines)?( · JSON5| · JSON with comments)?$', (m, l, s, jl, d) => `${l} ${getPlural(l, 'рядок', 'рядки', 'рядків')} · ${formatSize(s)}${jl || ''}${d === ' · JSON with comments' ? ' · JSON із коментарями' : d || ''}`],
        ['^([\\d,]+) bytes$', (m, b) => formatSize(m)],
        ['^\\d{1,3}(?:,\\d{3})+$', m => formatThousands(m)],
        ['^Show (\\d+) more of (\\d+)$', 'Показати ще $1 з $2'],
        ['^Document (\\d+)$', 'Документ $1'],

        ['^Line (\\d+)$', 'Рядок $1'],
        ['^Line (\\d+) is not valid JSON$', 'Рядок $1 - некоректний JSON'],
        ['^Line (\\d+) has a syntax error - fix it first \\(see above the code\\)$', 'У рядку $1 синтаксична помилка - спершу виправте її (див. над кодом)'],
        ['^Not every line has the same keys - line (\\d+) differs from line (\\d+)$', 'Не в кожному рядку однакові ключі - рядок $1 відрізняється від рядка $2'],
        ['^New document "(.+)"$', 'Новий документ «$1»'],
        /* Problems above the code */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'помилка', 'помилки', 'помилок')}`],
        ['^· (\\d+) (?:schema problem|schema problems)$', (m, k) => `· ${k} ${getPlural(k, 'проблема схеми', 'проблеми схеми', 'проблем схеми')}`],
        ['^(\\d+) (?:schema problem|schema problems)$', (m, k) => `${k} ${getPlural(k, 'проблема схеми', 'проблеми схеми', 'проблем схеми')}`],
        ['^(\\d+) (?:schema problem|schema problems) · (\\d+) (?:note|notes)$', (m, k, j) => `${k} ${getPlural(k, 'проблема схеми', 'проблеми схеми', 'проблем схеми')} · ${j} ${getPlural(j, 'зауваження', 'зауваження', 'зауважень')}`],
        ['^· (\\d+) (?:note|notes)$', (m, k) => `· ${k} ${getPlural(k, 'зауваження', 'зауваження', 'зауважень')}`],
        ['^· (\\d+) (?:schema problem|schema problems) · (\\d+) (?:note|notes)$', (m, k, j) => `· ${k} ${getPlural(k, 'проблема схеми', 'проблеми схеми', 'проблем схеми')} · ${j} ${getPlural(j, 'зауваження', 'зауваження', 'зауважень')}`],
        ['^(\\d+) (?:note|notes)$', (m, k) => `${k} ${getPlural(k, 'зауваження', 'зауваження', 'зауважень')}`],
        ['^Line (\\d+), column (\\d+)$', 'Рядок $1, стовпець $2'],
        ['^The key "(.*)" is twice in this object - most programs keep only the last one$', 'Ключ «$1» трапляється в цьому об’єкті двічі - більшість програм зберігають лише останній'],
        ['^This string is never closed - a (.) is missing$', 'Цей рядок не закрито - бракує $1'],
        ['^Unknown escape (\\\\.?) in a string - write \\\\\\\\ for a backslash$', 'Невідома екранувальна послідовність $1 у рядку - пишіть \\\\ для зворотної косої риски'],
        ['^The text ends here - a value and a (.) are missing$', 'Текст закінчується тут - бракує значення і $1'],
        ['^Unexpected "(.*)" - a string needs quotes; other values are numbers, true, false or null$', 'Неочікувано: «$1» - рядку потрібні лапки; інші значення - це числа, true, false або null'],
        ['^A value is expected here - found (.*)$', (m, f) => `Тут очікується значення - знайдено: ${translateFound(f)}`],
        ['^This (.) is never closed - a (.) is missing$', 'Цю $1 не закрито - бракує $2'],
        ['^A key in double quotes is expected here - found (.*)$', (m, f) => `Тут очікується ключ у подвійних лапках - знайдено: ${translateFound(f)}`],
        ['^A ":" is missing after the key "(.*)"$', 'Після ключа «$1» бракує «:»'],
        ['^"," or "(.)" is expected here - found (.*)$', (m, c, f) => `Тут очікується «,» або «${c}» - знайдено: ${translateFound(f)}`],
        ['^The schema "(.+)" has a syntax error in line (\\d+) - it is not used$', 'У схемі «$1» синтаксична помилка в рядку $2 - її не використано'],

        /* Schema problems */
        ['^Schema: the type must be (.+) \\(it is (\\w+)\\)$', (m, w, is) => `Схема: тип має бути ${w.split(' or ').map(x => TYPE[x] || x).join(' або ')} (зараз ${TYPE[is] || is})`],
        ['^Schema: "(.*)" is missing \\(required\\)$', 'Схема: «$1» відсутній (required)'],
        ['^Schema: "(.*)" is not allowed here \\(additionalProperties\\)$', 'Схема: «$1» тут не допускається (additionalProperties)'],
        ['^Schema: must be one of (.*) \\(enum\\)$', 'Схема: має бути одним із $1 (enum)'],
        ['^Schema: must be (.*) \\(const\\)$', 'Схема: має бути $1 (const)'],
        ['^Schema: at least (\\d+) characters \\(minLength\\)$', (m, k) => `Схема: щонайменше ${k} ${getPlural(k, 'символ', 'символи', 'символів')} (minLength)`],
        ['^Schema: at most (\\d+) characters \\(maxLength\\)$', (m, k) => `Схема: щонайбільше ${k} ${getPlural(k, 'символ', 'символи', 'символів')} (maxLength)`],
        ['^The number (.+) cannot be written exactly - write it as a string \\("…"\\) first$', 'Число $1 не можна записати точно - спершу запишіть його як рядок ("…")'],
        ['^The data is nested more than (\\d+) levels deep - the editor reads at most (\\d+)$', 'Дані вкладено глибше ніж на $1 рівнів - редактор читає щонайбільше $2'],
        ['^Schema: must match the pattern (.*) \\(pattern\\)$', 'Схема: має відповідати шаблону $1 (pattern)'],
        ['^Schema: the pattern (.*) is not checked on this long text - it repeats a repeated group, which can take very long \\(pattern\\)$', 'Схема: шаблон $1 не перевіряється на цьому довгому тексті - він повторює повторювану групу, що може тривати дуже довго (pattern)'],
        ['^Schema: not a valid (.*) \\(format\\)$', 'Схема: некоректний формат $1 (format)'],
        ['^Schema: must be at least (.*) \\(minimum\\)$', 'Схема: має бути не менше $1 (minimum)'],
        ['^Schema: must be at most (.*) \\(maximum\\)$', 'Схема: має бути не більше $1 (maximum)'],
        ['^Schema: must be greater than (.*) \\(exclusiveMinimum\\)$', 'Схема: має бути більше $1 (exclusiveMinimum)'],
        ['^Schema: must be less than (.*) \\(exclusiveMaximum\\)$', 'Схема: має бути менше $1 (exclusiveMaximum)'],
        ['^Schema: must be a multiple of (.*) \\(multipleOf\\)$', 'Схема: має бути кратним $1 (multipleOf)'],
        ['^Schema: at least (\\d+) keys \\(minProperties\\)$', (m, k) => `Схема: щонайменше ${k} ${getPlural(k, 'ключ', 'ключі', 'ключів')} (minProperties)`],
        ['^Schema: at most (\\d+) keys \\(maxProperties\\)$', (m, k) => `Схема: щонайбільше ${k} ${getPlural(k, 'ключ', 'ключі', 'ключів')} (maxProperties)`],
        ['^Schema: at least (\\d+) entries \\(minItems\\)$', (m, k) => `Схема: щонайменше ${k} ${getPlural(k, 'запис', 'записи', 'записів')} (minItems)`],
        ['^Schema: at most (\\d+) entries \\(maxItems\\)$', (m, k) => `Схема: щонайбільше ${k} ${getPlural(k, 'запис', 'записи', 'записів')} (maxItems)`],
        ['^Schema: the entries must be different \\(uniqueItems\\)$', 'Схема: записи мають бути різними (uniqueItems)'],
        ['^Schema: entry (\\d+) is not allowed here \\(items\\)$', 'Схема: запис $1 тут не допускається (items)'],
        ['^Schema: no entry matches "contains" \\(contains\\)$', 'Схема: жоден запис не відповідає «contains» (contains)'],
        ['^Schema: more than (\\d+) entries match "contains" \\(maxContains\\)$', 'Схема: понад $1 записів відповідають «contains» (maxContains)'],
        ['^Schema: matches none of the allowed forms \\((anyOf|oneOf)\\)$', 'Схема: не відповідає жодній із допустимих форм ($1)'],
        ['^Schema: matches (\\d+) of the forms, but only one is allowed \\(oneOf\\)$', 'Схема: кількість відповідних форм — $1, а допускається лише одна (oneOf)'],
        ['^Schema: must not match the "not" schema \\(not\\)$', 'Схема: не має відповідати схемі «not» (not)'],
        ['^Schema: "(.*)" needs "(.*)" as well \\(dependentRequired\\)$', 'Схема: «$1» потребує також «$2» (dependentRequired)'],
        ['^Schema: the key "(.*)" does not fit the schema of the key names \\(propertyNames\\)$', 'Схема: ключ «$1» не відповідає схемі імен ключів (propertyNames)'],
        ['^Schema: no value is allowed here$', 'Схема: тут не допускається жодне значення'],
        ['^Schema: the schema refers to another file \\((.*)\\) - only references inside the schema are followed$', 'Схема: схема посилається на інший файл ($1) - враховуються лише посилання всередині схеми'],

        /* ---------- Value tab and schema tab ---------- */
        ['^(?:(\\d+) (key|keys|entry|entries) · )?line (\\d+), column (\\d+) · (.+)$', (m, k, w, l, c, sz) => `${k ? `${k} ${w.startsWith('key') ? getPlural(k, 'ключ', 'ключі', 'ключів') : getPlural(k, 'запис', 'записи', 'записів')} · ` : ''}рядок ${l}, стовпець ${c} · ${formatSize(sz)}`],
        ['^The schema has a syntax error in line (\\d+) - open it and fix it first\\.$', 'У схемі синтаксична помилка в рядку $1 - відкрийте її та спершу виправте.'],

        /* ---------- AI Assistant ---------- */
        ['^Part (\\d+) of (\\d+) received$', 'Частину $1 з $2 отримано'],
        ['^Open the other (?:link|links) from the AI too \\(still missing: part (.+)\\)\\.$', 'Відкрийте й інші посилання від ШІ (ще бракує частини $1).'],
        ['^Part (\\d+) of (\\d+) received - paste the other (?:link|links) too \\(missing: (.+)\\)$', 'Частину $1 з $2 отримано - вставте й інші посилання (бракує: $3)'],
        ['^The AI sends the document to (.+) with a key that only works for this session\\. What you paste into your AI is handled by its provider\\.$', 'ШІ надсилає документ на $1 із ключем, який діє лише в цьому сеансі. Те, що ви вставляєте у свій ШІ, обробляє його провайдер.'],
        ['^The AI sends its result to (.+) by itself, and it opens here\\. If it answers with a link, paste its answer below\\.$', 'ШІ сам надсилає свій результат на $1, і він відкривається тут. Якщо ШІ відповідає посиланням, вставте його відповідь нижче.'],
        ['^No key from (.+) - the prompt asks the AI for a link instead$', 'Немає ключа від $1 - натомість промпт просить ШІ надіслати посилання'],
        ['^Prompt copied - the AI sends its result to (.+)$', 'Промпт скопійовано - ШІ надішле свій результат на $1'],

        /* ---------- Messages with names ---------- */
        ['^"(.+)" is not a number - choose another type above the tree to change the type$', '«$1» - не число; щоб змінити тип, виберіть інший над деревом'],
        ['^There is already a key "(.*)" here$', 'Тут уже є ключ «$1»'],
        ['^Path copied: (.*)$', 'Шлях скопійовано: $1'],
        ['^Plain JSON has no comments: the (\\d+) (?:comment is|comments are) removed\\. "Undo" brings (?:it|them) back\\.$', (m, k) => `У звичайному JSON немає коментарів: ${+k === 1 ? 'коментар буде видалено' : `${k} ${getPlural(k, 'коментар', 'коментарі', 'коментарів')} буде видалено`}. «Скасувати» ${+k === 1 ? 'поверне його' : 'поверне їх'}.`],
        ['^"(.+)" is open\\. My documents: open, rename, duplicate or delete your documents \\(Ctrl\\+O\\)$', '«$1» відкрито. Мої документи: відкривайте, перейменовуйте, дублюйте або видаляйте свої документи (Ctrl+O)'],
        ['^Start "(.+)" over\\?$', 'Почати «$1» заново?'],
        ['^Start "(.+)" over$', 'Почати «$1» заново'],
        ['^(\\d+) (?:document|documents) · (.+) in this browser$', (m, k, s) => `${k} ${getPlural(k, 'документ', 'документи', 'документів')} · ${formatSize(s)} у цьому браузері`],
        ['^No document named "(.*)"\\.$', 'Немає документа з назвою «$1».'],
        ['^Open now · (.+)$', (m, s) => `Відкрито зараз · ${formatSize(s)}`],
        ['^(just now|yesterday|\\d+ min ago|\\d+ h ago|[A-Z][a-z]{2} \\d{1,2}, \\d{4}) · (.+)$', (m, w, s) => `${formatTime(w)} · ${formatSize(s)}`],
        ['^(.+) \\(open now\\)$', '$1 (відкрито зараз)'],
        ['^ZIP with (\\d+) (?:document|documents) downloaded$', (m, k) => `ZIP із ${k} ${getPlural(k, 'документом', 'документами', 'документами')} завантажено`],
        ['^ZIP downloaded with (\\d+) files$', 'ZIP завантажено, файлів: $1'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '«$1» тепер порожній - «Скасувати» поверне вміст'],
        ['^"(.+)" opened$', '«$1» відкрито'],
        ['^New document "(.+)" - your other documents are under "My documents"$', 'Новий документ «$1» - інші ваші документи в «Мої документи»'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$', 'Новий документ «$1» від ШІ - інші ваші документи не змінилися'],
        ['^New document "(.+)" - "(.+)" is checked against it$', 'Новий документ «$1» - «$2» перевіряється за ним'],
        ['^"(.+)" is not a file the editor can open$', '«$1» - не файл, який редактор може відкрити'],
        ['^Opened "(.+)" - converted from (JSON Lines|\\w+)$', '«$1» відкрито - перетворено з $2'],
        ['^Opened "(.+)" - it is now in "My documents"$', '«$1» відкрито - тепер він у «Мої документи»'],
        ['^"(.+)" could not be opened: (.*)$', (m, f, why) => `«${f}» не вдалося відкрити: ${ZIP[why] || why}`],
        ['^(JSON|YAML) pasted from the clipboard - "Undo" brings the old data back$', '$1 вставлено з буфера обміну - «Скасувати» поверне старі дані'],
        ['^The addition is not valid (JSON|YAML) - it is open as a new document "(.+)"$', 'Доповнення - некоректний $1; його відкрито як новий документ «$2»'],
        ['^(.+) - the addition is open as a new document "(.+)"$', '$1 - доповнення відкрито як новий документ «$2»'],
        ['^Document received - (\\d+) (?:problem|problems) found, see above the code$', (m, k) => `Документ отримано - знайдено ${k} ${getPlural(k, 'проблему', 'проблеми', 'проблем')}, див. над кодом`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '«$1» змінено ШІ - «Скасувати» поверне все назад'],
        ['^"(.+)" duplicated$', '«$1» продубльовано'],
        ['^Delete "(.+)"\\?$', 'Видалити «$1»?'],
        ['^"(.+)" deleted$', '«$1» видалено'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Відкрити $1'],
        /* ---------- Template placeholders (?template=) ---------- */
        ['^A placeholder key goes in quotes: "(.+)"$', 'Заповнювач як ключ записується в лапках: "$1"'],
    ],
};
