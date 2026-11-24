/* Ukrainian texts of the XML editor: the bar, the work area (code, tree,
   node, insert, convert), its dialogs and messages, and the problems found
   in the code. What all editors share is in common.js; how the
   dictionaries are used is described in i18n.js. Names of documents,
   elements and attributes stay as they are: the patterns copy them into the
   Ukrainian text. */

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
        'View of the tree': 'Вигляд дерева',
        'The tree of the document filled with the examples': 'Дерево документа, заповненого прикладами',
        'The examples could not be filled in - the tree shows the template': 'Не вдалося підставити приклади - дерево показує шаблон',
        'This part shows an example - edit it in the code or in the template view': 'Ця частина показує приклад - змініть її в коді або у вигляді шаблону',
        /* ---------- Top bar ---------- */
        'XML Editor - home': 'Редактор XML - на головну',
        'XML Editor': 'Редактор XML',
        'File': 'Файл',
        'My documents (Ctrl+O)': 'Мої документи (Ctrl+O)',
        'My documents': 'Мої документи',
        'New document, or start this one over': 'Новий документ або почати цей заново',
        'New': 'Новий',
        'New blank document': 'Новий порожній документ',
        'An XML declaration and an empty root element': 'Оголошення XML і порожній кореневий елемент',
        'Product catalog': 'Каталог товарів',
        'Products with attributes, prices and stock': 'Товари з атрибутами, цінами й залишками',
        'RSS feed': 'RSS-стрічка',
        'A channel with one item, RSS 2.0': 'Канал з одним записом, RSS 2.0',
        'Sitemap': 'Мапа сайту (sitemap)',
        'sitemap.xml for search engines, with a default namespace':
            'sitemap.xml для пошукових систем, із простором імен за замовчуванням',
        'Configuration': 'Конфігурація',
        'Settings and a database connection': 'Налаштування й під’єднання до бази даних',
        'The welcome example': 'Вітальний приклад',
        'Shows what the editor can do': 'Показує, що вміє редактор',
        'Start this document over': 'Почати цей документ заново',
        'Keeps the declaration and the root element, empties the rest - "Undo" brings it back':
            'Зберігає оголошення й кореневий елемент, очищає решту - «Скасувати» поверне це',
        'Open an XML file from your computer (you can also drag it into the window)':
            'Відкрити файл XML з комп’ютера (його можна й перетягнути у вікно)',
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
        'Save the document as an .xml file (Ctrl+S)': 'Зберегти документ як файл .xml (Ctrl+S)',
        'Download .xml': 'Завантажити .xml',
        'XML, minified XML, JSON, YAML and plain text (Ctrl+E)': 'XML, стиснутий XML, JSON, YAML і звичайний текст (Ctrl+E)',
        'Export…': 'Експорт…',

        /* ---------- Views and work area ---------- */
        'View': 'Вигляд',
        'Edit': 'Правка',
        'Side panel': 'Бічна панель',
        'Tree': 'Дерево',
        'Node': 'Вузол',
        'XML code': 'Код XML',
        'Copy the XML code to the clipboard': 'Скопіювати код XML у буфер обміну',
        'Copy code': 'Копіювати код',
        'Copy': 'Копіювати',
        'Indent every element on its own line (mixed content stays as it is)':
            'Кожен елемент із відступом на окремому рядку (змішаний вміст залишається як є)',
        'Format': 'Форматувати',
        'File format': 'Формат файлу',
        'Drag to change the width of the code area': 'Перетягніть, щоб змінити ширину області коду',
        'Drag to change the width': 'Перетягніть, щоб змінити ширину',
        'Element tree': 'Дерево елементів',
        'Element tree: click a node to go to its place in the code, click a value to edit it':
            'Дерево елементів: клацніть вузол, щоб перейти до його місця в коді, значення - щоб змінити його',
        'Search names, values and text': 'Пошук імен, значень і тексту',
        'Search in the tree': 'Пошук у дереві',
        'XPath query, e.g. //book[price > 30]': 'XPath, напр. //book[price > 30]',
        'XPath query': 'Запит XPath',
        'Previous match (Shift+Enter)': 'Попередній збіг (Shift+Enter)',
        'Previous match': 'Попередній збіг',
        'Next match (Enter)': 'Наступний збіг (Enter)',
        'Next match': 'Наступний збіг',
        'Fold everything below the root': 'Згорнути все нижче кореня',
        'Fold all': 'Згорнути все',
        'Unfold every element': 'Розгорнути кожен елемент',
        'Unfold all': 'Розгорнути все',
        'Path of the selected node': 'Шлях вибраного вузла',
        'Click a node to see its path': 'Клацніть вузол, щоб побачити його шлях',
        'Put this path into the XPath field': 'Помістити цей шлях у поле XPath',
        'As query': 'Як запит',
        'Copy the XPath of the selected node': 'Скопіювати XPath вибраного вузла',
        'Copy path': 'Копіювати шлях',
        'Path copied': 'Шлях скопійовано',
        'Updating…': 'Оновлення…',
        'Fold': 'Згорнути',
        'Unfold': 'Розгорнути',
        'empty': 'порожньо',
        'Add a child element': 'Додати дочірній елемент',
        'Add an attribute': 'Додати атрибут',
        'Move up': 'Угору',
        'Move down': 'Униз',
        'Remove the element': 'Видалити елемент',
        'Remove': 'Видалити',
        'The document is empty - type some XML on the left, or choose a template under "New".':
            'Документ порожній - введіть XML ліворуч або виберіть шаблон у меню «Новий».',
        'Fix the errors first': 'Спершу виправте помилки',
        'No match': 'Немає збігів',
        'Not a valid XPath expression': 'Неприпустимий вираз XPath',
        'Nothing found': 'Нічого не знайдено',
        'Open it here': 'Відкрити тут',
        'Drop the XML file here': 'Перетягніть сюди файл XML',

        /* Problems above the code */
        'Hide': 'Сховати',
        'Show': 'Показати',

        /* ---------- Side panel ---------- */
        'The selected node: path, namespace, attributes and actions':
            'Вибраний вузол: шлях, простір імен, атрибути й дії',
        'Ready-made pieces: elements, comments, CDATA, characters': 'Готові фрагменти: елементи, коментарі, CDATA, символи',
        'Insert': 'Вставка',
        'Format, minify, JSON and YAML': 'Форматування, стиснення, JSON і YAML',
        'Convert': 'Конвертер',
        'Click a node in the tree (or put the cursor in the code) to see it here.':
            'Клацніть вузол у дереві (або поставте курсор у код), щоб побачити його тут.',
        'depth': 'глибина',
        'element': 'елемент',
        'elements': 'елементів',
        'attribute': 'атрибут',
        'attributes': 'атрибутів',
        'Start and end tag': 'Пара тегів',
        'Root element': 'Кореневий елемент',
        'Default namespace': 'Простір імен за замовчуванням',
        'Namespaces': 'Простори імен',
        'Attribute': 'Атрибут',
        'Element': 'Елемент',
        'Text': 'Текст',
        'Comment': 'Коментар',
        'CDATA section': 'Секція CDATA',
        'Processing instruction': 'Інструкція обробки',
        'Path': 'Шлях',
        'Line': 'Рядок',
        'Namespace': 'Простір імен',
        'none': 'немає',
        'Content': 'Вміст',
        'Attributes': 'Атрибути',
        'Remove the attribute': 'Видалити атрибут',
        'No attributes.': 'Атрибутів немає.',
        'Add attribute': 'Додати атрибут',
        'Add child element': 'Додати дочірній елемент',
        'Length': 'Довжина',
        'Structure': 'Структура',
        'An element at the cursor, around the selected text': 'Елемент на місці курсора, навколо виділеного тексту',
        'Empty element': 'Порожній елемент',
        'A self-closing element': 'Самозакривний елемент',
        'An attribute (put the cursor inside a start tag)': 'Атрибут (поставте курсор усередину відкривального тегу)',
        'Text that is not parsed as markup': 'Текст, який не розбирається як розмітка',
        'XML declaration': 'Оголошення XML',
        'The first line: version and encoding': 'Перший рядок: версія й кодування',
        'A namespace declaration (inside a start tag)': 'Оголошення простору імен (усередині відкривального тегу)',
        'Schema instance': 'Екземпляр схеми',
        'xmlns:xsi for xsi:schemaLocation (inside a start tag)': 'xmlns:xsi для xsi:schemaLocation (усередині відкривального тегу)',
        'Characters': 'Символи',
        'As entity references, so they stay readable in any encoding.':
            'У вигляді посилань на сутності, щоб вони залишалися читабельними в будь-якому кодуванні.',
        'Code': 'Код',
        'Indent with': 'Відступ',
        '2 spaces': '2 пробіли',
        '4 spaces': '4 пробіли',
        'Tabs': 'Табуляція',
        'Indent every element on its own line (one undo step)': 'Кожен елемент із відступом на окремому рядку (один крок скасування)',
        'Remove comments and the white space between elements (one undo step)':
            'Видалити коментарі й пробіли між елементами (один крок скасування)',
        'Minify': 'Стиснути',
        'Other formats': 'Інші формати',
        'As JSON': 'Як JSON',
        'As YAML': 'Як YAML',
        'The document is not well-formed - fix the errors above the code first.':
            'Документ не є коректним XML - спершу виправте помилки над кодом.',
        'Attributes become': 'Атрибути стають',
        ', text next to elements': ', текст поруч з елементами -',
        ', repeated elements a list. Comments are left out.': ', повторювані елементи - списком. Коментарі пропускаються.',
        'Result': 'Результат',
        'Download': 'Завантажити',

        /* ---------- Export ---------- */
        'Close': 'Закрити',
        'File name': 'Ім’я файлу',
        'XML as it is (.xml)': 'XML як є (.xml)',
        'Minified XML (.xml)': 'Стиснутий XML (.xml)',
        'Converted to JSON (.json)': 'Перетворений на JSON (.json)',
        'Converted to YAML (.yaml)': 'Перетворений на YAML (.yaml)',
        'Plain text (.txt)': 'Звичайний текст (.txt)',
        'Download everything at once: XML, minified XML, JSON, YAML and text':
            'Завантажити все одразу: XML, стиснутий XML, JSON, YAML і текст',
        'All formats (ZIP)': 'Усі формати (ZIP)',
        'The document is not well-formed - fix the errors first':
            'Документ не є коректним XML - спершу виправте помилки',

        /* ---------- My documents ---------- */
        'Search by name': 'Пошук за назвою',
        'Search your documents': 'Пошук у ваших документах',
        'Open an XML file from your computer as a new document': 'Відкрити файл XML з комп’ютера як новий документ',
        'New document': 'Новий документ',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Клацніть документ, щоб відкрити його. Документи зберігаються лише в цьому браузері - нічого не вивантажується на сервер. Очищення даних сайту в браузері видалить їх, тому завантажте ті, які хочете зберегти.',
        'Download every document as an .xml file in one ZIP': 'Завантажити всі документи як файли .xml одним ZIP',
        'Download all (ZIP)': 'Завантажити все (ZIP)',
        'Rename': 'Перейменувати',
        'Duplicate': 'Дублювати',
        'Download as .xml': 'Завантажити як .xml',
        'Delete': 'Видалити',
        'New name': 'Нове ім’я',
        'This document is open': 'Цей документ відкрито',
        'Click to open this document': 'Клацніть, щоб відкрити цей документ',
        'No documents yet.': 'Документів поки немає.',
        'The document is removed from this browser for good. Download it first if you want to keep a copy.':
            'Документ буде остаточно видалено з цього браузера. Якщо хочете зберегти копію, спершу завантажте його.',

        /* ---------- AI Assistant ---------- */
        'Any AI can write with you - ChatGPT, Claude, Gemini, Copilot.':
            'З вами може писати будь-який ШІ - ChatGPT, Claude, Gemini, Copilot.',
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
        'The document is now in the XML Editor tab you already had open. Switch to that tab, or open it here.':
            'Документ тепер у вкладці редактора XML, яку ви вже мали відкритою. Перейдіть до тієї вкладки або відкрийте його тут.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)':
            'Копіювання тут заборонене - текст виділено нижче: натисніть Ctrl+C (⌘C)',
        'Paste it into your AI and say what it should write.': 'Вставте його у свій ШІ та скажіть, що треба написати.',
        'Prompt copied - paste it into your AI and say what it should write':
            'Промпт скопійовано - вставте його у свій ШІ та скажіть, що треба написати',
        'This link is incomplete or damaged - please ask the AI to send it again':
            'Посилання неповне або пошкоджене - попросіть ШІ надіслати його ще раз',

        /* ---------- Save to your server ---------- */
        'Save to your server': 'Збереження на ваш сервер',
        'Webhook address': 'Адреса вебхука',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(необов’язково, надсилається як «Authorization: Bearer …»; зберігається, доки відкрита ця вкладка)',
        'Send automatically a few seconds after each change (otherwise only when you click':
            'Надсилати автоматично через кілька секунд після кожної зміни (інакше лише коли ви натискаєте',
        'or press Ctrl+S)': 'або Ctrl+S)',
        'Only for “': 'Лише для «',
        '” (other documents use the general address)': '» (інші документи використовують загальну адресу)',
        'What your server receives': 'Що отримує ваш сервер',
        'A POST request with JSON (your server must allow CORS from https://xml.giit.ch):':
            'POST-запит із JSON (ваш сервер має дозволяти CORS з https://xml.giit.ch):',
        'Embed the editor in your website': 'Вбудувати редактор у ваш сайт',
        'Send now': 'Надіслати зараз',
        'Save setting': 'Зберегти налаштування',

        /* ---------- Help ---------- */
        'How it works': 'Як це працює',
        'Keyboard shortcuts': 'Поєднання клавіш',
        'after a start tag': 'після відкривального тегу',
        'Adds the matching end tag': 'Додає відповідний закривальний тег',
        'Show the cursor\'s node in the tree': 'Показати вузол курсора в дереві',
        'Indent / outdent': 'Збільшити / зменшити відступ',
        'Undo / redo': 'Скасувати / повторити',
        'Save (download .xml, or to your server) / export': 'Зберегти (завантажити .xml або на ваш сервер) / експорт',
        'Search in the tree (outside the code)': 'Пошук у дереві (поза кодом)',
        'The editor never loads a DTD, a schema or an external entity, and it does not expand entities declared in a DTD: their references stay as written.':
            'Редактор ніколи не завантажує DTD, схему чи зовнішню сутність і не розкриває сутності, оголошені в DTD: посилання на них залишаються без змін.',

        'Problems (the first well-formedness error, undeclared namespace prefixes, ids used twice) are listed above the code with line and column - click one to go there.':
            'Проблеми (перша помилка коректності, неоголошені префікси просторів імен, повторювані id) перелічено над кодом із рядком і стовпцем - клацніть проблему, щоб перейти до неї.',
        'https://example.com/api/xml': 'https://example.com/api/xml',

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
        'This changed in the code - wait for the tree, then try again':
            'Це змінилося в коді - дочекайтеся оновлення дерева і спробуйте знову',
        'Editing in the tree - Enter keeps it, Escape cancels': 'Редагування в дереві - Enter зберігає, Escape скасовує',
        'The code changed meanwhile - the edit was not used': 'Код тим часом змінився - правку не застосовано',
        'The root element cannot be removed here - edit the code instead':
            'Кореневий елемент тут видалити не можна - відредагуйте код',
        'Removed - "Undo" brings it back': 'Видалено - «Скасувати» поверне це',
        'It is the first element already': 'Це вже перший елемент',
        'It is the last element already': 'Це вже останній елемент',
        'The document has an XML declaration already': 'Документ уже має оголошення XML',
        'The code is formatted already': 'Код уже відформатовано',
        'Code formatted - "Undo" brings the old layout back': 'Код відформатовано - «Скасувати» поверне попереднє форматування',
        'The code is minified already': 'Код уже стиснуто',
        'Code minified - "Undo" brings it back': 'Код стиснуто - «Скасувати» поверне його',
        'This document is empty already': 'Цей документ уже порожній',
        'Everything inside the root element is removed; the declaration and the root element stay. "Undo" brings it back as long as the page is open.':
            'Усе всередині кореневого елемента видалено; оголошення й кореневий елемент залишаються. «Скасувати» поверне це, поки сторінка відкрита.',
        'Everything is removed. "Undo" brings it back as long as the page is open.':
            'Усе видалено. «Скасувати» поверне це, поки сторінка відкрита.',
        'Start over': 'Почати заново',
        'The file is larger than 8 MB': 'Файл більший за 8 МБ',
        'XML pasted from the clipboard - "Undo" brings the old text back':
            'XML вставлено з буфера обміну - «Скасувати» поверне старий текст',
        'Downloaded': 'Завантажено',
        'Copied to the clipboard': 'Скопійовано в буфер обміну',
        'This browser does not allow copying this': 'Цей браузер не дозволяє це скопіювати',
        'Code copied': 'Код скопійовано',
        '.xml downloaded': '.xml завантажено',
        'Add': 'Додати',
        'Replace': 'Замінити',

        /* ---------- Problems (xml.js) ---------- */
        'The document is empty - an XML document needs one root element':
            'Документ порожній - документу XML потрібен один кореневий елемент',
        'The DTD is not loaded: the editor never reads external DTDs or entities, entity references stay as written':
            'DTD не завантажено: редактор ніколи не читає зовнішні DTD чи сутності, посилання на сутності залишаються без змін',
        'Entities of the DTD are not expanded: references to them stay as written':
            'Сутності DTD не розкриваються: посилання на них залишаються без змін',
        /* Words that German keeps from the English, but Ukrainian does not */
        'Export': 'Експорт',
        'Link': 'Посилання',
        'Token': 'Токен',
        'Name': 'Ім’я',
    },
    html: {
        '<b>Export</b> also has <b>Open in another editor</b>: it converts the document and opens it as a new document there. Anything the other format cannot hold is listed first.':
            'У <b>Експорті</b> є й <b>Відкрити в іншому редакторі</b>: документ перетворюється й відкривається там як новий. Те, що інший формат не може вмістити, показується заздалегідь.',
        /* Convert */
        'Attributes become <code>@name</code>, text next to elements <code>#text</code>, repeated elements a list. Comments are left out.':
            'Атрибути стають <code>@name</code>, текст поруч з елементами - <code>#text</code>, повторювані елементи - списком. Коментарі пропускаються.',

        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Натисніть <b>Копіювати промпт</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'ШІ відповідає посиланням: клацніть його або вставте всю відповідь нижче. <b>Скасувати</b> поверне все назад.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'ШІ відповідає посиланням: <b>вставте всю його відповідь нижче</b> (клацнуте посилання відкриває окремий редактор). <b>Скасувати</b> поверне все назад.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'Редактор може надсилати кожну збережену версію на ваш власний сервер (<b>вебхук</b>), щоб ваша робота зберігалася там, де ви хочете. Нічого не надсилається, доки ви не введете тут адресу.',
        'Also possible: <code>?src=&lt;URL of an XML file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>xmleditor:ai</code>, <code>xmleditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Також можна: <code>?src=&lt;URL of an XML file&gt;</code> відкриває файл, <code>&amp;webhook=&lt;URL&gt;</code> зберігає туди цей документ. Редактор може відкриватися й в окремому вікні (<code>?embed=window</code>), а ваша сторінка може передати йому власний промпт для ШІ та ключ сеансу, щоб ШІ надсилав результат на ваш сервер (<code>xmleditor:ai</code>, <code>xmleditor:key-request</code>) - див. «Редактор на вашому сайті» під редактором. Подробиці - у <a href="/llms.txt">llms.txt</a>.',
        'Also possible: <code>?src=&lt;URL of an XML file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>xmleditor:ai</code>, <code>xmleditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Також можна: <code>?src=&lt;URL of an XML file&gt;</code> відкриває файл, <code>&amp;webhook=&lt;URL&gt;</code> зберігає туди цей документ. Редактор може відкриватися й в окремому вікні (<code>?embed=window</code>), а ваша сторінка може передати йому власний промпт для ШІ та ключ сеансу, щоб ШІ надсилав результат на ваш сервер (<code>xmleditor:ai</code>, <code>xmleditor:key-request</code>) - див. «Редактор на вашому сайті» під редактором. Подробиці - у <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> XML on the left - or start with <b>New</b> and one of the templates. The tree in the middle shows the elements, attributes, text, comments and CDATA as you type.':
            '<b>Пишіть</b> XML ліворуч - або почніть із <b>Новий</b> та одного із шаблонів. Дерево посередині показує елементи, атрибути, текст, коментарі й CDATA просто під час набору.',
        '<b>Click a node in the tree</b> to go to its place in the code; the cursor in the code shows its node in the tree. Fold elements with the arrow.':
            '<b>Клацніть вузол у дереві</b>, щоб перейти до його місця в коді; курсор у коді показує свій вузол у дереві. Згортайте елементи стрілкою.',
        '<b>Click a name, an attribute value or a text in the tree</b> to edit it right there. <b>Enter</b> or a click elsewhere writes the change into the code (special characters escaped, one step for Undo), <b>Escape</b> cancels. The buttons of a row add a child element or an attribute, move the element up or down, or remove it.':
            '<b>Клацніть ім’я, значення атрибута чи текст у дереві</b>, щоб редагувати просто там. <b>Enter</b> або клацання деінде записує зміну в код (спецсимволи екрануються, один крок для «Скасувати»), <b>Escape</b> скасовує. Кнопки рядка додають дочірній елемент або атрибут, переміщують елемент угору чи вниз або видаляють його.',
        '<b>Search</b> marks nodes whose name, value or text contains the words; the <b>XPath</b> field marks the nodes an XPath 1.0 expression selects (<code>_:</code> is the default namespace of the root).':
            '<b>Пошук</b> позначає вузли, чиє ім’я, значення або текст містить слова; поле <b>XPath</b> позначає вузли, які вибирає вираз XPath 1.0 (<code>_:</code> - простір імен кореня за замовчуванням).',
        '<b>Node</b> on the right shows the selected node; <b>Insert</b> has ready-made pieces; <b>Convert</b> formats, minifies and turns the document into JSON or YAML.':
            '<b>Вузол</b> праворуч показує вибраний вузол; у <b>Вставці</b> є готові фрагменти; <b>Конвертер</b> форматує, стискає й перетворює документ на JSON або YAML.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser. <b>Export</b> saves XML, minified XML, JSON, YAML or plain text.':
            '<b>Мої документи</b> (кнопка з текою вгорі ліворуч) показують усі документи, що зберігаються в цьому браузері. <b>Експорт</b> зберігає XML, стиснутий XML, JSON, YAML або звичайний текст.',
        'Comment lines in or out (<code>&lt;!-- --&gt;</code>)':
            'Закоментувати рядки або прибрати коментар (<code>&lt;!-- --&gt;</code>)',
    },
    patterns: [
        /* ---------- Status lines ---------- */
        ['^The elements are nested more than (\\d+) levels deep - the editor reads at most (\\d+)$', 'Елементи вкладено глибше ніж на $1 рівнів - редактор читає щонайбільше $2'],
        ['^(\\d+) lines · ([\\d.]+ K?B)(?: · (\\d+) (?:element|elements))?$', (m, l, s, e) => `${l} ${getPlural(l, 'рядок', 'рядки', 'рядків')} · ${formatSize(s)}${e ? ` · ${e} ${getPlural(e, 'елемент', 'елементи', 'елементів')}` : ''}`],
        ['^([\\d,]+) bytes$', (m, b) => formatSize(m)],
        ['^\\d{1,3}(?:,\\d{3})+$', m => formatThousands(m)],
        ['^(\\d+) (?:child|children)$', (m, k) => `${k} ${getPlural(k, 'нащадок', 'нащадки', 'нащадків')}`],
        ['^(\\d+) (?:match|matches)$', (m, k) => `${k} ${getPlural(k, 'збіг', 'збіги', 'збігів')}`],
        ['^(\\d+) found$', 'Знайдено: $1'],
        ['^(\\d+) (?:element|elements) · (\\d+) (?:attribute|attributes) ·$', (m, e, a) => `${e} ${getPlural(e, 'елемент', 'елементи', 'елементів')} · ${a} ${getPlural(a, 'атрибут', 'атрибути', 'атрибутів')} ·`],
        ['^(?:element|elements) ·$', 'елем. ·'],
        ['^(?:attribute|attributes) ·$', 'атриб. ·'],
        ['^(\\d+) (?:child element|child elements)$', (m, k) => `${k} ${getPlural(k, 'дочірній елемент', 'дочірні елементи', 'дочірніх елементів')}`],
        ['^(\\d+) (?:character|characters)$', (m, k) => `${k} ${getPlural(k, 'символ', 'символи', 'символів')}`],
        ['^ZIP downloaded with (\\d+) files$', 'ZIP завантажено, файлів: $1'],

        /* Problems above the code */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'помилка', 'помилки', 'помилок')}`],
        ['^· (\\d+) (?:note|notes)$', (m, k) => `· ${k} ${getPlural(k, 'зауваження', 'зауваження', 'зауважень')}`],
        ['^(\\d+) (?:note|notes)$', (m, k) => `${k} ${getPlural(k, 'зауваження', 'зауваження', 'зауважень')}`],
        ['^Line (\\d+):(\\d+)$', 'Рядок $1:$2'],
        ['^Not well-formed: (.*)$', 'Некоректний XML: $1'],
        ['^The namespace prefix "(.+)" is not declared - add (.+)$', 'Префікс простору імен «$1» не оголошено - додайте $2'],
        ['^The id "(.*)" is used twice$', 'id «$1» використано двічі'],

        /* ---------- Tree ---------- */
        ['^"(.*)" is not a valid XML name - names start with a letter or _ and have no spaces$', '«$1» - неприпустиме ім’я XML: імена починаються з літери або _ і не містять пробілів'],
        ['^The element already has an attribute "(.+)"$', 'Елемент уже має атрибут «$1»'],
        ['^Attribute "(.+)" removed - "Undo" brings it back$', 'Атрибут «$1» видалено - «Скасувати» поверне його'],
        ['^<(.+)> removed - "Undo" brings it back$', '<$1> видалено - «Скасувати» поверне його'],

        /* ---------- Top bar and My documents ---------- */
        ['^"(.+)" is open\\. My documents: open, rename, duplicate or delete your documents \\(Ctrl\\+O\\)$', '«$1» відкрито. Мої документи: відкривайте, перейменовуйте, дублюйте або видаляйте свої документи (Ctrl+O)'],
        ['^Start "(.+)" over\\?$', 'Почати «$1» заново?'],
        ['^Start "(.+)" over$', 'Почати «$1» заново'],
        ['^(\\d+) (?:document|documents) · (.+) in this browser$', (m, k, s) => `${k} ${getPlural(k, 'документ', 'документи', 'документів')} · ${formatSize(s)} у цьому браузері`],
        ['^No document named "(.*)"\\.$', 'Немає документа з назвою «$1».'],
        ['^Open now · (.+)$', (m, s) => `Відкрито зараз · ${formatSize(s)}`],
        ['^(just now|yesterday|\\d+ min ago|\\d+ h ago|[A-Z][a-z]{2} \\d{1,2}, \\d{4}) · (.+)$', (m, w, s) => `${formatTime(w)} · ${formatSize(s)}`],
        ['^(.+) \\(open now\\)$', '$1 (відкрито зараз)'],
        ['^ZIP with (\\d+) (?:document|documents) downloaded$', (m, k) => `ZIP із ${k} ${getPlural(k, 'документом', 'документами', 'документами')} завантажено`],

        /* ---------- AI Assistant ---------- */
        ['^Part (\\d+) of (\\d+) received$', 'Частину $1 з $2 отримано'],
        ['^Open the other (?:link|links) from the AI too \\(still missing: part (.+)\\)\\.$', 'Відкрийте й інші посилання від ШІ (ще бракує частини $1).'],
        ['^Part (\\d+) of (\\d+) received - paste the other (?:link|links) too \\(missing: (.+)\\)$', 'Частину $1 з $2 отримано - вставте й інші посилання (бракує: $3)'],
        ['^The AI sends the document to (.+) with a key that only works for this session\\. What you paste into your AI is handled by its provider\\.$', 'ШІ надсилає документ на $1 із ключем, який діє лише в цьому сеансі. Те, що ви вставляєте у свій ШІ, обробляє його провайдер.'],
        ['^The AI sends its result to (.+) by itself, and it opens here\\. If it answers with a link, paste its answer below\\.$', 'ШІ сам надсилає свій результат на $1, і він відкривається тут. Якщо ШІ відповідає посиланням, вставте його відповідь нижче.'],
        ['^No key from (.+) - the prompt asks the AI for a link instead$', 'Немає ключа від $1 - натомість промпт просить ШІ надіслати посилання'],
        ['^Prompt copied - the AI sends its result to (.+)$', 'Промпт скопійовано - ШІ надішле свій результат на $1'],

        /* ---------- Messages with names ---------- */
        ['^"(.+)" is empty now - "Undo" brings it back$', '«$1» тепер порожній - «Скасувати» поверне вміст'],
        ['^"(.+)" opened$', '«$1» відкрито'],
        ['^New document "(.+)" - your other documents are under "My documents"$', 'Новий документ «$1» - інші ваші документи в «Мої документи»'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$', 'Новий документ «$1» від ШІ - інші ваші документи не змінилися'],
        ['^"(.+)" is not an XML file$', '«$1» - не файл XML'],
        ['^Opened "(.+)" - it is now in "My documents"$', '«$1» відкрито - тепер він у «Мої документи»'],
        ['^Document received - the editor found (\\d+) (?:problem|problems), see above the code$', (m, k) => `Документ отримано - редактор знайшов ${k} ${getPlural(k, 'проблему', 'проблеми', 'проблем')}, див. над кодом`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '«$1» змінено ШІ - «Скасувати» поверне все назад'],
        ['^"(.+)" duplicated$', '«$1» продубльовано'],
        ['^Delete "(.+)"\\?$', 'Видалити «$1»?'],
        ['^"(.+)" deleted$', '«$1» видалено'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Відкрити $1'],
    ],
};
