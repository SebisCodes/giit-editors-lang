/* Russian texts of the XML editor: the bar, the work area (code, tree,
   node, insert, convert), its dialogs and messages, and the problems found
   in the code. What all editors share is in common.js; how the
   dictionaries are used is described in i18n.js. Names of documents,
   elements and attributes stay as they are: the patterns copy them into the
   Russian text. */

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
        'View of the tree': 'Вид дерева',
        'The tree of the document filled with the examples': 'Дерево документа, заполненного примерами',
        'The examples could not be filled in - the tree shows the template': 'Не удалось подставить примеры - дерево показывает шаблон',
        'This part shows an example - edit it in the code or in the template view': 'Эта часть показывает пример - измените её в коде или в виде шаблона',
        /* ---------- Top bar ---------- */
        'XML Editor - home': 'Редактор XML - на главную',
        'XML Editor': 'Редактор XML',
        'File': 'Файл',
        'My documents (Ctrl+O)': 'Мои документы (Ctrl+O)',
        'My documents': 'Мои документы',
        'New document, or start this one over': 'Новый документ или начать этот заново',
        'New': 'Новый',
        'New blank document': 'Новый пустой документ',
        'An XML declaration and an empty root element': 'Объявление XML и пустой корневой элемент',
        'Product catalog': 'Каталог товаров',
        'Products with attributes, prices and stock': 'Товары с атрибутами, ценами и остатками',
        'RSS feed': 'RSS-лента',
        'A channel with one item, RSS 2.0': 'Канал с одной записью, RSS 2.0',
        'Sitemap': 'Карта сайта (sitemap)',
        'sitemap.xml for search engines, with a default namespace':
            'sitemap.xml для поисковых систем, с пространством имён по умолчанию',
        'Configuration': 'Конфигурация',
        'Settings and a database connection': 'Настройки и подключение к базе данных',
        'The welcome example': 'Приветственный пример',
        'Shows what the editor can do': 'Показывает, что умеет редактор',
        'Start this document over': 'Начать этот документ заново',
        'Keeps the declaration and the root element, empties the rest - "Undo" brings it back':
            'Сохраняет объявление и корневой элемент, очищает остальное - «Отменить» вернёт это',
        'Open an XML file from your computer (you can also drag it into the window)':
            'Открыть файл XML с компьютера (его можно и перетащить в окно)',
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
        'Save the document as an .xml file (Ctrl+S)': 'Сохранить документ как файл .xml (Ctrl+S)',
        'Download .xml': 'Скачать .xml',
        'XML, minified XML, JSON, YAML and plain text (Ctrl+E)': 'XML, сжатый XML, JSON, YAML и простой текст (Ctrl+E)',
        'Export…': 'Экспорт…',

        /* ---------- Views and work area ---------- */
        'View': 'Вид',
        'Edit': 'Правка',
        'Side panel': 'Боковая панель',
        'Tree': 'Дерево',
        'Node': 'Узел',
        'XML code': 'Код XML',
        'Copy the XML code to the clipboard': 'Скопировать код XML в буфер обмена',
        'Copy code': 'Копировать код',
        'Copy': 'Копировать',
        'Indent every element on its own line (mixed content stays as it is)':
            'Каждый элемент с отступом на своей строке (смешанное содержимое остаётся как есть)',
        'Format': 'Форматировать',
        'File format': 'Формат файла',
        'Drag to change the width of the code area': 'Перетащите, чтобы изменить ширину области кода',
        'Drag to change the width': 'Перетащите, чтобы изменить ширину',
        'Element tree': 'Дерево элементов',
        'Element tree: click a node to go to its place in the code, click a value to edit it':
            'Дерево элементов: щёлкните по узлу, чтобы перейти к его месту в коде, по значению - чтобы изменить его',
        'Search names, values and text': 'Поиск имён, значений и текста',
        'Search in the tree': 'Поиск в дереве',
        'XPath query, e.g. //book[price > 30]': 'Запрос XPath, например //book[price > 30]',
        'XPath query': 'Запрос XPath',
        'Previous match (Shift+Enter)': 'Предыдущее совпадение (Shift+Enter)',
        'Previous match': 'Предыдущее совпадение',
        'Next match (Enter)': 'Следующее совпадение (Enter)',
        'Next match': 'Следующее совпадение',
        'Fold everything below the root': 'Свернуть всё ниже корня',
        'Fold all': 'Свернуть всё',
        'Unfold every element': 'Развернуть каждый элемент',
        'Unfold all': 'Развернуть всё',
        'Path of the selected node': 'Путь выбранного узла',
        'Click a node to see its path': 'Щёлкните по узлу, чтобы увидеть его путь',
        'Put this path into the XPath field': 'Поместить этот путь в поле XPath',
        'As query': 'Как запрос',
        'Copy the XPath of the selected node': 'Скопировать XPath выбранного узла',
        'Copy path': 'Копировать путь',
        'Path copied': 'Путь скопирован',
        'Updating…': 'Обновление…',
        'Fold': 'Свернуть',
        'Unfold': 'Развернуть',
        'empty': 'пусто',
        'Add a child element': 'Добавить дочерний элемент',
        'Add an attribute': 'Добавить атрибут',
        'Move up': 'Вверх',
        'Move down': 'Вниз',
        'Remove the element': 'Удалить элемент',
        'Remove': 'Удалить',
        'The document is empty - type some XML on the left, or choose a template under "New".':
            'Документ пуст - введите XML слева или выберите шаблон в меню «Новый».',
        'Fix the errors first': 'Сначала исправьте ошибки',
        'No match': 'Нет совпадений',
        'Not a valid XPath expression': 'Недопустимое выражение XPath',
        'Nothing found': 'Ничего не найдено',
        'Open it here': 'Открыть здесь',
        'Drop the XML file here': 'Перетащите сюда файл XML',

        /* Problems above the code */
        'Hide': 'Скрыть',
        'Show': 'Показать',

        /* ---------- Side panel ---------- */
        'The selected node: path, namespace, attributes and actions':
            'Выбранный узел: путь, пространство имён, атрибуты и действия',
        'Ready-made pieces: elements, comments, CDATA, characters': 'Готовые элементы: элементы, комментарии, CDATA, символы',
        'Insert': 'Вставка',
        'Format, minify, JSON and YAML': 'Форматирование, сжатие, JSON и YAML',
        'Convert': 'Преобразование',
        'Click a node in the tree (or put the cursor in the code) to see it here.':
            'Щёлкните по узлу в дереве (или поставьте курсор в код), чтобы увидеть его здесь.',
        'depth': 'глубина',
        'element': 'элемент',
        'elements': 'элементов',
        'attribute': 'атрибут',
        'attributes': 'атрибутов',
        'Start and end tag': 'Пара тегов',
        'Root element': 'Корневой элемент',
        'Default namespace': 'Пространство имён по умолчанию',
        'Namespaces': 'Пространства имён',
        'Attribute': 'Атрибут',
        'Element': 'Элемент',
        'Text': 'Текст',
        'Comment': 'Комментарий',
        'CDATA section': 'Секция CDATA',
        'Processing instruction': 'Инструкция (PI)',
        'Path': 'Путь',
        'Line': 'Строка',
        'Namespace': 'Простр. имён',
        'none': 'нет',
        'Content': 'Содержимое',
        'Attributes': 'Атрибуты',
        'Remove the attribute': 'Удалить атрибут',
        'No attributes.': 'Атрибутов нет.',
        'Add attribute': 'Добавить атрибут',
        'Add child element': 'Добавить дочерний элемент',
        'Length': 'Длина',
        'Structure': 'Структура',
        'An element at the cursor, around the selected text': 'Элемент у курсора, вокруг выделенного текста',
        'Empty element': 'Пустой элемент',
        'A self-closing element': 'Самозакрывающийся элемент',
        'An attribute (put the cursor inside a start tag)': 'Атрибут (поставьте курсор внутрь открывающего тега)',
        'Text that is not parsed as markup': 'Текст, который не обрабатывается как разметка',
        'XML declaration': 'Объявление XML',
        'The first line: version and encoding': 'Первая строка: версия и кодировка',
        'A namespace declaration (inside a start tag)': 'Объявление пространства имён (внутри открывающего тега)',
        'Schema instance': 'Экземпляр схемы',
        'xmlns:xsi for xsi:schemaLocation (inside a start tag)': 'xmlns:xsi для xsi:schemaLocation (внутри открывающего тега)',
        'Characters': 'Символы',
        'As entity references, so they stay readable in any encoding.':
            'В виде ссылок на сущности, чтобы они оставались читаемыми в любой кодировке.',
        'Code': 'Код',
        'Indent with': 'Отступ',
        '2 spaces': '2 пробела',
        '4 spaces': '4 пробела',
        'Tabs': 'Табуляция',
        'Indent every element on its own line (one undo step)': 'Каждый элемент с отступом на своей строке (один шаг отмены)',
        'Remove comments and the white space between elements (one undo step)':
            'Удалить комментарии и пробелы между элементами (один шаг отмены)',
        'Minify': 'Сжать',
        'Other formats': 'Другие форматы',
        'As JSON': 'Как JSON',
        'As YAML': 'Как YAML',
        'The document is not well-formed - fix the errors above the code first.':
            'Документ не является корректным XML - сначала исправьте ошибки над кодом.',
        'Attributes become': 'Атрибуты превращаются в',
        ', text next to elements': ', текст рядом с элементами - в',
        ', repeated elements a list. Comments are left out.': ', повторяющиеся элементы - в список. Комментарии опускаются.',
        'Result': 'Результат',
        'Download': 'Скачать',

        /* ---------- Export ---------- */
        'Close': 'Закрыть',
        'File name': 'Имя файла',
        'XML as it is (.xml)': 'XML как есть (.xml)',
        'Minified XML (.xml)': 'Сжатый XML (.xml)',
        'Converted to JSON (.json)': 'Преобразованный в JSON (.json)',
        'Converted to YAML (.yaml)': 'Преобразованный в YAML (.yaml)',
        'Plain text (.txt)': 'Простой текст (.txt)',
        'Download everything at once: XML, minified XML, JSON, YAML and text':
            'Скачать всё сразу: XML, сжатый XML, JSON, YAML и текст',
        'All formats (ZIP)': 'Все форматы (ZIP)',
        'The document is not well-formed - fix the errors first':
            'Документ не является корректным XML - сначала исправьте ошибки',

        /* ---------- My documents ---------- */
        'Search by name': 'Поиск по имени',
        'Search your documents': 'Поиск по вашим документам',
        'Open an XML file from your computer as a new document': 'Открыть файл XML с компьютера как новый документ',
        'New document': 'Новый документ',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Щёлкните по документу, чтобы открыть его. Документы хранятся только в этом браузере - ничего не загружается на сервер. Очистка данных сайта в браузере удалит их, поэтому скачайте те, которые хотите сохранить.',
        'Download every document as an .xml file in one ZIP': 'Скачать все документы как файлы .xml одним ZIP',
        'Download all (ZIP)': 'Скачать все (ZIP)',
        'Rename': 'Переименовать',
        'Duplicate': 'Дублировать',
        'Download as .xml': 'Скачать как .xml',
        'Delete': 'Удалить',
        'New name': 'Новое имя',
        'This document is open': 'Этот документ открыт',
        'Click to open this document': 'Щёлкните, чтобы открыть этот документ',
        'No documents yet.': 'Документов пока нет.',
        'The document is removed from this browser for good. Download it first if you want to keep a copy.':
            'Документ будет навсегда удалён из этого браузера. Если хотите сохранить копию, сначала скачайте его.',

        /* ---------- AI Assistant ---------- */
        'Any AI can write with you - ChatGPT, Claude, Gemini, Copilot.':
            'С вами может писать любой ИИ - ChatGPT, Claude, Gemini, Copilot.',
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
        'The document is now in the XML Editor tab you already had open. Switch to that tab, or open it here.':
            'Документ теперь во вкладке редактора XML, которая у вас уже была открыта. Перейдите в ту вкладку или откройте его здесь.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)':
            'Копирование здесь запрещено - текст выделен ниже: нажмите Ctrl+C (⌘C)',
        'Paste it into your AI and say what it should write.': 'Вставьте его в свой ИИ и скажите, что нужно написать.',
        'Prompt copied - paste it into your AI and say what it should write':
            'Промпт скопирован - вставьте его в свой ИИ и скажите, что нужно написать',
        'This link is incomplete or damaged - please ask the AI to send it again':
            'Ссылка неполная или повреждена - попросите ИИ отправить её ещё раз',

        /* ---------- Save to your server ---------- */
        'Save to your server': 'Сохранение на ваш сервер',
        'Webhook address': 'Адрес вебхука',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(необязательно, отправляется как «Authorization: Bearer …»; хранится, пока открыта эта вкладка)',
        'Send automatically a few seconds after each change (otherwise only when you click':
            'Отправлять автоматически через несколько секунд после каждого изменения (иначе только когда вы нажимаете',
        'or press Ctrl+S)': 'или Ctrl+S)',
        'Only for “': 'Только для «',
        '” (other documents use the general address)': '» (другие документы используют общий адрес)',
        'What your server receives': 'Что получает ваш сервер',
        'A POST request with JSON (your server must allow CORS from https://xml.giit.ch):':
            'POST-запрос с JSON (ваш сервер должен разрешать CORS с https://xml.giit.ch):',
        'Embed the editor in your website': 'Встроить редактор в ваш сайт',
        'Send now': 'Отправить сейчас',
        'Save setting': 'Сохранить настройку',

        /* ---------- Help ---------- */
        'How it works': 'Как это работает',
        'Keyboard shortcuts': 'Сочетания клавиш',
        'after a start tag': 'после открывающего тега',
        'Adds the matching end tag': 'Добавляет подходящий закрывающий тег',
        'Show the cursor\'s node in the tree': 'Показать в дереве узел у курсора',
        'Indent / outdent': 'Увеличить / уменьшить отступ',
        'Undo / redo': 'Отменить / повторить',
        'Save (download .xml, or to your server) / export': 'Сохранить (скачать .xml или на ваш сервер) / экспорт',
        'Search in the tree (outside the code)': 'Поиск в дереве (вне кода)',
        'The editor never loads a DTD, a schema or an external entity, and it does not expand entities declared in a DTD: their references stay as written.':
            'Редактор никогда не загружает DTD, схему или внешнюю сущность и не раскрывает сущности, объявленные в DTD: ссылки на них остаются как есть.',

        'Problems (the first well-formedness error, undeclared namespace prefixes, ids used twice) are listed above the code with line and column - click one to go there.':
            'Проблемы (первая ошибка структуры XML, необъявленные префиксы пространств имён, повторяющиеся id) перечислены над кодом со строкой и столбцом - щёлкните по проблеме, чтобы перейти к ней.',
        'https://example.com/api/xml': 'https://example.com/api/xml',

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
        'This changed in the code - wait for the tree, then try again':
            'Это изменилось в коде - дождитесь обновления дерева и попробуйте снова',
        'Editing in the tree - Enter keeps it, Escape cancels': 'Правка в дереве - Enter сохраняет, Escape отменяет',
        'The code changed meanwhile - the edit was not used': 'Код тем временем изменился - правка не применена',
        'The root element cannot be removed here - edit the code instead':
            'Корневой элемент здесь удалить нельзя - отредактируйте код',
        'Removed - "Undo" brings it back': 'Удалено - «Отменить» вернёт это',
        'It is the first element already': 'Это уже первый элемент',
        'It is the last element already': 'Это уже последний элемент',
        'The document has an XML declaration already': 'В документе уже есть объявление XML',
        'The code is formatted already': 'Код уже отформатирован',
        'Code formatted - "Undo" brings the old layout back': 'Код отформатирован - «Отменить» вернёт прежнее форматирование',
        'The code is minified already': 'Код уже сжат',
        'Code minified - "Undo" brings it back': 'Код сжат - «Отменить» вернёт его',
        'This document is empty already': 'Этот документ уже пуст',
        'Everything inside the root element is removed; the declaration and the root element stay. "Undo" brings it back as long as the page is open.':
            'Всё внутри корневого элемента удалено; объявление и корневой элемент остаются. «Отменить» вернёт это, пока страница открыта.',
        'Everything is removed. "Undo" brings it back as long as the page is open.':
            'Всё удалено. «Отменить» вернёт это, пока страница открыта.',
        'Start over': 'Начать заново',
        'The file is larger than 8 MB': 'Файл больше 8 МБ',
        'XML pasted from the clipboard - "Undo" brings the old text back':
            'XML вставлен из буфера обмена - «Отменить» вернёт старый текст',
        'Downloaded': 'Скачано',
        'Copied to the clipboard': 'Скопировано в буфер обмена',
        'This browser does not allow copying this': 'Этот браузер не позволяет это скопировать',
        'Code copied': 'Код скопирован',
        '.xml downloaded': '.xml скачан',
        'Add': 'Добавить',
        'Replace': 'Заменить',

        /* ---------- Problems (xml.js) ---------- */
        'The document is empty - an XML document needs one root element':
            'Документ пуст - документу XML нужен один корневой элемент',
        'The DTD is not loaded: the editor never reads external DTDs or entities, entity references stay as written':
            'DTD не загружен: редактор никогда не читает внешние DTD или сущности, ссылки на сущности остаются как есть',
        'Entities of the DTD are not expanded: references to them stay as written':
            'Сущности DTD не раскрываются: ссылки на них остаются как есть',
        /* Words that German keeps from the English, but Russian does not */
        'Export': 'Экспорт',
        'Link': 'Ссылка',
        'Token': 'Токен',
        'Name': 'Имя',
    },
    html: {
        '<b>Export</b> also has <b>Open in another editor</b>: it converts the document and opens it as a new document there. Anything the other format cannot hold is listed first.':
            'В <b>Экспорте</b> есть и <b>Открыть в другом редакторе</b>: документ преобразуется и открывается там как новый. То, что другой формат не может вместить, показывается заранее.',
        /* Convert */
        'Attributes become <code>@name</code>, text next to elements <code>#text</code>, repeated elements a list. Comments are left out.':
            'Атрибуты превращаются в <code>@name</code>, текст рядом с элементами - в <code>#text</code>, повторяющиеся элементы - в список. Комментарии опускаются.',

        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Нажмите <b>Копировать промпт</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'ИИ отвечает ссылкой: щёлкните по ней или вставьте весь ответ ниже. <b>Отменить</b> вернёт всё назад.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'ИИ отвечает ссылкой: <b>вставьте весь его ответ ниже</b> (щелчок по ссылке открывает отдельный редактор). <b>Отменить</b> вернёт всё назад.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'Редактор может отправлять каждую сохранённую версию на ваш собственный сервер (<b>вебхук</b>), чтобы ваша работа хранилась там, где вы хотите. Ничего не отправляется, пока вы не введёте здесь адрес.',
        'Also possible: <code>?src=&lt;URL of an XML file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>xmleditor:ai</code>, <code>xmleditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Также можно: <code>?src=&lt;URL of an XML file&gt;</code> открывает файл, <code>&amp;webhook=&lt;URL&gt;</code> сохраняет туда этот документ. Редактор может открываться и в отдельном окне (<code>?embed=window</code>), а ваша страница может передать ему собственный промпт для ИИ и ключ сеанса, чтобы ИИ отправлял результат на ваш сервер (<code>xmleditor:ai</code>, <code>xmleditor:key-request</code>) - см. «Редактор на вашем сайте» под редактором. Подробности - в <a href="/llms.txt">llms.txt</a>.',
        'Also possible: <code>?src=&lt;URL of an XML file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>xmleditor:ai</code>, <code>xmleditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Также можно: <code>?src=&lt;URL of an XML file&gt;</code> открывает файл, <code>&amp;webhook=&lt;URL&gt;</code> сохраняет туда этот документ. Редактор может открываться и в отдельном окне (<code>?embed=window</code>), а ваша страница может передать ему собственный промпт для ИИ и ключ сеанса, чтобы ИИ отправлял результат на ваш сервер (<code>xmleditor:ai</code>, <code>xmleditor:key-request</code>) - см. «Редактор на вашем сайте» под редактором. Подробности - в <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> XML on the left - or start with <b>New</b> and one of the templates. The tree in the middle shows the elements, attributes, text, comments and CDATA as you type.':
            '<b>Пишите</b> XML слева - или начните с <b>Новый</b> и одного из шаблонов. Дерево посередине показывает элементы, атрибуты, текст, комментарии и CDATA прямо во время набора.',
        '<b>Click a node in the tree</b> to go to its place in the code; the cursor in the code shows its node in the tree. Fold elements with the arrow.':
            '<b>Щёлкните по узлу в дереве</b>, чтобы перейти к его месту в коде; курсор в коде показывает свой узел в дереве. Сворачивайте элементы стрелкой.',
        '<b>Click a name, an attribute value or a text in the tree</b> to edit it right there. <b>Enter</b> or a click elsewhere writes the change into the code (special characters escaped, one step for Undo), <b>Escape</b> cancels. The buttons of a row add a child element or an attribute, move the element up or down, or remove it.':
            '<b>Щёлкните по имени, значению атрибута или тексту в дереве</b>, чтобы править прямо там. <b>Enter</b> или щелчок в другом месте записывает изменение в код (спецсимволы экранируются, один шаг для «Отменить»), <b>Escape</b> отменяет. Кнопки строки добавляют дочерний элемент или атрибут, перемещают элемент вверх или вниз или удаляют его.',
        '<b>Search</b> marks nodes whose name, value or text contains the words; the <b>XPath</b> field marks the nodes an XPath 1.0 expression selects (<code>_:</code> is the default namespace of the root).':
            '<b>Поиск</b> отмечает узлы, чьё имя, значение или текст содержит слова; поле <b>XPath</b> отмечает узлы, которые выбирает выражение XPath 1.0 (<code>_:</code> - пространство имён корня по умолчанию).',
        '<b>Node</b> on the right shows the selected node; <b>Insert</b> has ready-made pieces; <b>Convert</b> formats, minifies and turns the document into JSON or YAML.':
            '<b>Узел</b> справа показывает выбранный узел; во <b>Вставке</b> есть готовые элементы; <b>Преобразование</b> форматирует, сжимает и превращает документ в JSON или YAML.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser. <b>Export</b> saves XML, minified XML, JSON, YAML or plain text.':
            '<b>Мои документы</b> (кнопка с папкой вверху слева) показывают все документы, хранящиеся в этом браузере. <b>Экспорт</b> сохраняет XML, сжатый XML, JSON, YAML или простой текст.',
        'Comment lines in or out (<code>&lt;!-- --&gt;</code>)':
            'Закомментировать строки или убрать комментарий (<code>&lt;!-- --&gt;</code>)',
    },
    patterns: [
        /* ---------- Status lines ---------- */
        ['^The elements are nested more than (\\d+) levels deep - the editor reads at most (\\d+)$', 'Элементы вложены глубже $1 уровней - редактор читает не более $2'],
        ['^(\\d+) lines · ([\\d.]+ K?B)(?: · (\\d+) (?:element|elements))?$', (m, l, s, e) => `${l} ${getPlural(l, 'строка', 'строки', 'строк')} · ${formatSize(s)}${e ? ` · ${e} ${getPlural(e, 'элемент', 'элемента', 'элементов')}` : ''}`],
        ['^([\\d,]+) bytes$', (m, b) => formatSize(m)],
        ['^\\d{1,3}(?:,\\d{3})+$', m => formatThousands(m)],
        ['^(\\d+) (?:child|children)$', (m, k) => `${k} ${getPlural(k, 'потомок', 'потомка', 'потомков')}`],
        ['^(\\d+) (?:match|matches)$', (m, k) => `${k} ${getPlural(k, 'совпадение', 'совпадения', 'совпадений')}`],
        ['^(\\d+) found$', 'Найдено: $1'],
        ['^(\\d+) (?:element|elements) · (\\d+) (?:attribute|attributes) ·$', (m, e, a) => `${e} ${getPlural(e, 'элемент', 'элемента', 'элементов')} · ${a} ${getPlural(a, 'атрибут', 'атрибута', 'атрибутов')} ·`],
        ['^(?:element|elements) ·$', 'элем. ·'],
        ['^(?:attribute|attributes) ·$', 'атриб. ·'],
        ['^(\\d+) (?:child element|child elements)$', (m, k) => `${k} ${getPlural(k, 'дочерний элемент', 'дочерних элемента', 'дочерних элементов')}`],
        ['^(\\d+) (?:character|characters)$', (m, k) => `${k} ${getPlural(k, 'символ', 'символа', 'символов')}`],
        ['^ZIP downloaded with (\\d+) files$', 'ZIP скачан, файлов: $1'],

        /* Problems above the code */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'ошибка', 'ошибки', 'ошибок')}`],
        ['^· (\\d+) (?:note|notes)$', (m, k) => `· ${k} ${getPlural(k, 'замечание', 'замечания', 'замечаний')}`],
        ['^(\\d+) (?:note|notes)$', (m, k) => `${k} ${getPlural(k, 'замечание', 'замечания', 'замечаний')}`],
        ['^Line (\\d+):(\\d+)$', 'Строка $1:$2'],
        ['^Not well-formed: (.*)$', 'Некорректный XML: $1'],
        ['^The namespace prefix "(.+)" is not declared - add (.+)$', 'Префикс пространства имён «$1» не объявлен - добавьте $2'],
        ['^The id "(.*)" is used twice$', 'id «$1» используется дважды'],

        /* ---------- Tree ---------- */
        ['^"(.*)" is not a valid XML name - names start with a letter or _ and have no spaces$', '«$1» - недопустимое имя XML: имена начинаются с буквы или _ и не содержат пробелов'],
        ['^The element already has an attribute "(.+)"$', 'У элемента уже есть атрибут «$1»'],
        ['^Attribute "(.+)" removed - "Undo" brings it back$', 'Атрибут «$1» удалён - «Отменить» вернёт его'],
        ['^<(.+)> removed - "Undo" brings it back$', '<$1> удалён - «Отменить» вернёт его'],

        /* ---------- Top bar and My documents ---------- */
        ['^"(.+)" is open\\. My documents: open, rename, duplicate or delete your documents \\(Ctrl\\+O\\)$', '«$1» открыт. Мои документы: открывайте, переименовывайте, дублируйте или удаляйте свои документы (Ctrl+O)'],
        ['^Start "(.+)" over\\?$', 'Начать «$1» заново?'],
        ['^Start "(.+)" over$', 'Начать «$1» заново'],
        ['^(\\d+) (?:document|documents) · (.+) in this browser$', (m, k, s) => `${k} ${getPlural(k, 'документ', 'документа', 'документов')} · ${formatSize(s)} в этом браузере`],
        ['^No document named "(.*)"\\.$', 'Нет документа с именем «$1».'],
        ['^Open now · (.+)$', (m, s) => `Открыт сейчас · ${formatSize(s)}`],
        ['^(just now|yesterday|\\d+ min ago|\\d+ h ago|[A-Z][a-z]{2} \\d{1,2}, \\d{4}) · (.+)$', (m, w, s) => `${formatTime(w)} · ${formatSize(s)}`],
        ['^(.+) \\(open now\\)$', '$1 (открыт сейчас)'],
        ['^ZIP with (\\d+) (?:document|documents) downloaded$', (m, k) => `ZIP с ${k} ${getPlural(k, 'документом', 'документами', 'документами')} скачан`],

        /* ---------- AI Assistant ---------- */
        ['^Part (\\d+) of (\\d+) received$', 'Часть $1 из $2 получена'],
        ['^Open the other (?:link|links) from the AI too \\(still missing: part (.+)\\)\\.$', 'Откройте и другие ссылки от ИИ (ещё не хватает: часть $1).'],
        ['^Part (\\d+) of (\\d+) received - paste the other (?:link|links) too \\(missing: (.+)\\)$', 'Часть $1 из $2 получена - вставьте и другие ссылки (не хватает: $3)'],
        ['^The AI sends the document to (.+) with a key that only works for this session\\. What you paste into your AI is handled by its provider\\.$', 'ИИ отправляет документ на $1 с ключом, который действует только в этом сеансе. То, что вы вставляете в свой ИИ, обрабатывает его провайдер.'],
        ['^The AI sends its result to (.+) by itself, and it opens here\\. If it answers with a link, paste its answer below\\.$', 'ИИ сам отправляет свой результат на $1, и он открывается здесь. Если ИИ отвечает ссылкой, вставьте его ответ ниже.'],
        ['^No key from (.+) - the prompt asks the AI for a link instead$', 'Нет ключа от $1 - вместо этого промпт просит ИИ прислать ссылку'],
        ['^Prompt copied - the AI sends its result to (.+)$', 'Промпт скопирован - ИИ отправит свой результат на $1'],

        /* ---------- Messages with names ---------- */
        ['^"(.+)" is empty now - "Undo" brings it back$', '«$1» теперь пуст - «Отменить» вернёт содержимое'],
        ['^"(.+)" opened$', '«$1» открыт'],
        ['^New document "(.+)" - your other documents are under "My documents"$', 'Новый документ «$1» - другие ваши документы в разделе «Мои документы»'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$', 'Новый документ «$1» от ИИ - другие ваши документы не изменились'],
        ['^"(.+)" is not an XML file$', '«$1» - не файл XML'],
        ['^Opened "(.+)" - it is now in "My documents"$', '«$1» открыт - теперь он в разделе «Мои документы»'],
        ['^Document received - the editor found (\\d+) (?:problem|problems), see above the code$', (m, k) => `Документ получен - редактор нашёл ${k} ${getPlural(k, 'проблему', 'проблемы', 'проблем')}, см. над кодом`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '«$1» изменён ИИ - «Отменить» вернёт всё назад'],
        ['^"(.+)" duplicated$', '«$1» дублирован'],
        ['^Delete "(.+)"\\?$', 'Удалить «$1»?'],
        ['^"(.+)" deleted$', '«$1» удалён'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Открыть $1'],
    ],
};
