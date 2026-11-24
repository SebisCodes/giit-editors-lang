/* Russian texts of the SHLS editor: the bar, the work area (code, records,
   record, insert, convert, outline), its dialogs and messages, and the
   problems found in the code. What all editors share is in
   common.js; how the dictionaries are used is described in
   i18n.js. Names of documents, sections, keys and values stay as they are:
   the patterns copy them into the Russian text. */

import { formatTime, getPlural } from './format.js';

/* Russian plural: getPlural(5, 'строка', 'строки', 'строк') -> 'строк' (1, 21 … / 2-4, 22-24 … / the rest) */

/* "1,234" -> "1 234" (Russian thousands separator: a no-break space) */
/**
 * Writes the thousands separator of the language into a number ("1,234").
 * @param {string} s - the number with English separators.
 * @returns {string} the text in the language.
 */
const formatThousands = s => s.replace(/,/g, ' ');
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

/* When a document was last changed (files.js): "just now", "5 min ago", "Mon D, YYYY" … */

/**
 * Translates the text the pattern found (recs in the English pattern).
 * @param {string} k - the English text the pattern found.
 * @returns {string} the text in the language.
 */
const translateRecords = k => getPlural(k, 'запись', 'записи', 'записей');
/**
 * Translates the text the pattern found (keys in the English pattern).
 * @param {string} k - the English text the pattern found.
 * @returns {string} the text in the language.
 */
const translateKeys = k => getPlural(k, 'ключ', 'ключа', 'ключей');

export default {
    text: {
        /* ---------- Template placeholders (?template=): views of the records, box, side panel ---------- */
        'Show or hide the side panel': 'Показать или скрыть боковую панель',
        'Examples': 'Примеры',
        'Template': 'Шаблон',
        'The template with its placeholders as written': 'Шаблон с заполнителями в исходном виде',
        'Placeholders': 'Заполнители',
        'The placeholders of the template - a click on one puts its tag at the cursor': 'Заполнители шаблона - щелчок вставляет соответствующий тег в позицию курсора',
        'Shown': 'Показан',
        'Hidden': 'Скрыт',
        'This part shows an example - change it in the template view or in the code': 'Эта часть показывает пример - измените её в виде шаблона или в коде',
        'View of the records': 'Вид записей',
        'The records filled with the examples': 'Записи, заполненные примерами',
        'The examples could not be filled in - the records show the template': 'Не удалось подставить примеры - записи показывают шаблон',
        "Read back from SHLS, the data is not the same (for example records whose keys are in another order than in the first record) - check the result.": "При обратном чтении из SHLS данные не совпадают (например, записи с ключами в другом порядке, чем в первой записи) - проверьте результат.",
        /* ---------- Top bar ---------- */
        'SHLS Editor - home': 'Редактор SHLS - на главную',
        'SHLS Editor': 'Редактор SHLS',
        'File': 'Файл',
        'My documents (Ctrl+O)': 'Мои документы (Ctrl+O)',
        'My documents': 'Мои документы',
        'New document, or start this one over': 'Новый документ или начать этот заново',
        'New': 'Новый',
        'New blank document': 'Новый пустой документ',
        'An empty document - your other documents stay as they are': 'Пустой документ - остальные ваши документы не изменятся',
        'Empty section': 'Пустой раздел',
        'One section with two keys and one record to fill in': 'Один раздел с двумя ключами и одной записью для заполнения',
        'Products and companies': 'Товары и компании',
        'The first README example: records right after each key block': 'Первый пример из README: записи сразу после каждого блока ключей',
        'Key blocks first': 'Сначала блоки ключей',
        'The second README example: the records follow under the section name again': 'Второй пример из README: записи идут под повторённым именем раздела',
        'Companies, departments and employees, nested three levels': 'Компании, отделы и сотрудники, три уровня вложенности',
        'The same data with the key blocks first and fewer blank lines': 'Те же данные: сначала блоки ключей и меньше пустых строк',
        'Start this document over': 'Начать этот документ заново',
        'Empties the document - "Undo" brings it back': 'Очищает документ - «Отменить» вернёт его',
        'Open an SHLS file from your computer (JSON, YAML, CSV and JSON Lines files are converted; you can also drag a file into the window)':
            'Открыть файл SHLS с компьютера (файлы JSON, YAML, CSV и JSON Lines преобразуются; можно также перетащить файл в окно)',
        'Open file…': 'Открыть файл…',
        'Undo the last change (Ctrl+Z)': 'Отменить последнее изменение (Ctrl+Z)',
        'Undo': 'Отменить',
        'Redo the change you just undid (Ctrl+Y)': 'Повторить только что отменённое изменение (Ctrl+Y)',
        'Redo': 'Повторить',
        'Output': 'Вывод',
        'Color theme': 'Цветовая тема',
        'Light theme': 'Светлая тема',
        'Dark theme': 'Тёмная тема',
        'Same as your system setting': 'Как в настройках системы',
        'Automatic theme (system setting)': 'Автоматическая тема (настройка системы)',
        'Let any AI write in this editor': 'Позволить любому ИИ писать в этом редакторе',
        'AI Assistant': 'ИИ-ассистент',
        'Save to your own server and embed the editor in your website': 'Сохранение на ваш сервер и встраивание редактора в ваш сайт',
        'Save to server': 'На сервер',
        'How it works and keyboard shortcuts (?)': 'Как это работает и сочетания клавиш (?)',
        'Help': 'Справка',
        'Save the document as a .shls file (Ctrl+S)': 'Сохранить документ как файл .shls (Ctrl+S)',
        'Download .shls': 'Скачать .shls',
        'JSON, YAML, CSV and more (Ctrl+E)': 'JSON, YAML, CSV и другое (Ctrl+E)',
        'Export…': 'Экспорт…',

        /* ---------- Views and work area ---------- */
        'View': 'Вид',
        'Edit': 'Правка',
        'Selection': 'Выбор',
        'Records': 'Записи',
        'Record': 'Запись',
        'SHLS code': 'Код SHLS',
        'Copy the code to the clipboard': 'Скопировать код в буфер обмена',
        'Copy code': 'Копировать код',
        'Copy': 'Копировать',
        'Lay the document out as the reference SHLSEncoder does: all key blocks first, then the records': 'Упорядочить документ так, как это делает эталонный SHLSEncoder: сначала все блоки ключей, затем записи',
        'Tidy up': 'Навести порядок',
        'Drag to change the width of the code area': 'Перетащите, чтобы изменить ширину области кода',
        'Drag to change the width': 'Перетащите, чтобы изменить ширину',
        'Unfold everything': 'Развернуть всё',
        'Fold the key blocks and records': 'Свернуть блоки ключей и записи',
        'Add: a record after the selected record (or at the end of the section), a key after the selected key': 'Добавить: запись после выбранной (или в конце раздела), ключ после выбранного ключа',
        'Add': 'Добавить',
        'Duplicate the selected record or key': 'Дублировать выбранную запись или ключ',
        'Duplicate': 'Дублировать',
        'Move the selected record or key up (Alt+Up)': 'Переместить выбранную запись или ключ вверх (Alt+↑)',
        'Move up': 'Вверх',
        'Move the selected record or key down (Alt+Down)': 'Переместить выбранную запись или ключ вниз (Alt+↓)',
        'Move down': 'Вниз',
        'Remove the selected record, key or section (Delete)': 'Удалить выбранную запись, ключ или раздел (Delete)',
        'Remove': 'Удалить',
        'Search keys and values': 'Поиск по ключам и значениям',
        'Previous match (Shift+Enter)': 'Предыдущее совпадение (Shift+Enter)',
        'Previous match': 'Предыдущее совпадение',
        'Next match (Enter)': 'Следующее совпадение (Enter)',
        'Next match': 'Следующее совпадение',
        'Copy the path of the selection': 'Скопировать путь выделения',
        'Copy path': 'Копировать путь',
        'Nothing selected': 'Ничего не выбрано',
        'Side panel': 'Боковая панель',
        'The selected record, value or key': 'Выбранная запись, значение или ключ',
        'New records, keys and sections, and pieces of code': 'Новые записи, ключи и разделы, а также фрагменты кода',
        'Insert': 'Вставка',
        'Tokens, and the document in other formats': 'Токены и документ в других форматах',
        'Convert': 'Преобразование',
        'The sections of the document': 'Разделы документа',
        'Outline': 'Оглавление',
        'Open it here': 'Открыть здесь',
        'Drop the file here': 'Перетащите файл сюда',
        'Hide': 'Скрыть',
        'Show': 'Показать',

        /* ---------- Records view ---------- */
        'Keys': 'Ключи',
        'the template of each record': 'шаблон каждой записи',
        'Click to rename the section': 'Щёлкните, чтобы переименовать раздел',
        'Click to rename the key - only the key block changes': 'Щёлкните, чтобы переименовать ключ - изменится только блок ключей',
        'Click to change the value': 'Щёлкните, чтобы изменить значение',
        'Value': 'Значение',
        'Key': 'Ключ',
        'Section name': 'Имя раздела',
        'The code cannot be read - see the problem above the code.': 'Код не удаётся прочитать - см. проблему над кодом.',
        'No sections yet - write a section name, its keys (indented) and, after one blank line, the records. Or choose a template under "New".':
            'Разделов пока нет - напишите имя раздела, его ключи (с отступом) и после одной пустой строки записи. Или выберите шаблон в меню «Новый».',

        /* ---------- Record tab ---------- */
        'Click a section, a key or a record in the middle.': 'Щёлкните в центре по разделу, ключу или записи.',
        'The document has no sections yet.': 'В документе пока нет разделов.',
        'The document has no sections yet': 'В документе пока нет разделов',
        'Path': 'Путь',
        'Section': 'Раздел',
        'Add a record': 'Новая запись',
        'Add a key': 'Новый ключ',
        'Remove the section': 'Удалить раздел',
        'Add a key after it': 'Добавить после',
        'Add a record after it': 'Добавить после',
        'Renaming a key changes only the key block. Adding, moving or removing a key changes every record of the section.':
            'Переименование ключа меняет только блок ключей. Добавление, перемещение или удаление ключа меняет каждую запись раздела.',
        'Apply': 'Применить',

        /* ---------- Insert tab ---------- */
        'Add to the selection': 'Добавить к выбранному',
        'A record after the selected record (or at the end of the section), a key after the selected key - every record gets a value "-" for it. One step for Undo.':
            'Запись после выбранной (или в конце раздела), ключ после выбранного ключа - каждая запись получает для него значение «-». Один шаг отмены.',
        'A new record with "-" for each value': 'Новая запись с «-» в каждом значении',
        'A new key in the key block; every record gets "-"': 'Новый ключ в блоке ключей; каждая запись получает «-»',
        'A copy of the selected record or key': 'Копия выбранной записи или ключа',
        'A new section at the end, with two keys and one record': 'Новый раздел в конце, с двумя ключами и одной записью',
        'At the cursor in the code': 'У курсора в коде',
        'A section name, its key block, a blank line and one record': 'Имя раздела, его блок ключей, пустая строка и одна запись',
        'The placeholder for the line of a nested list': 'Заполнитель для строки вложенного списка',
        '- (no value)': '- (нет значения)',
        'SHLS has no empty values: a dash stands for none': 'В SHLS нет пустых значений: прочерк означает отсутствие значения',
        'Today\'s date': 'Текущая дата',
        'The date as YYYY-MM-DD': 'Дата в формате ГГГГ-ММ-ДД',

        /* ---------- Convert tab ---------- */
        'JSON on one line': 'JSON в одну строку',
        'This document': 'Этот документ',
        'Writes the document anew as the reference SHLSEncoder does: all key blocks first, then the records of each section':
            'Переписывает документ так, как это делает эталонный SHLSEncoder: сначала все блоки ключей, затем записи каждого раздела',
        'Write as SHLSEncoder does': 'Записать как SHLSEncoder',
        'Convert to': 'Преобразовать в',
        'JSON (as SHLSDecoder reads it)': 'JSON (как его читает SHLSDecoder)',
        'CSV (one section)': 'CSV (один раздел)',
        'JSON Lines (one section)': 'JSON Lines (один раздел)',
        'The records as plain text': 'Записи как простой текст',
        'Result': 'Результат',
        'Download': 'Скачать',
        'Opens the result as a new document in the JSON Editor (in a new tab)': 'Открывает результат как новый документ в редакторе JSON (в новой вкладке)',
        'Open in the JSON Editor': 'Открыть в редакторе JSON',
        'Exactly the data the reference SHLSDecoder reads: every value is a string.': 'Ровно те данные, которые читает эталонный SHLSDecoder: каждое значение - строка.',
        'The code cannot be read as SHLS - fix the problem above the code first': 'Код не читается как SHLS - сначала исправьте проблему над кодом',
        'Write it anyway?': 'Всё равно записать?',
        'Read back, the encoder\'s text gives different data than this document (SHLSEncoder cannot write every structure). "Undo" brings the document back.':
            'При обратном чтении текст кодировщика даёт другие данные, чем этот документ (SHLSEncoder не может записать любую структуру). «Отменить» вернёт документ.',
        'Write it': 'Записать',
        'The document is written as SHLSEncoder does already': 'Документ уже записан так, как это делает SHLSEncoder',
        'Written as SHLSEncoder does': 'Записано как SHLSEncoder',

        /* ---------- Outline tab ---------- */
        'The sections of the document. Click one to go there.': 'Разделы документа. Щёлкните по разделу, чтобы перейти к нему.',

        /* ---------- Export ---------- */
        'Close': 'Закрыть',
        'File name': 'Имя файла',
        'SHLS file as it is (.shls)': 'Файл SHLS как есть (.shls)',
        'JSON, as SHLSDecoder reads it (.json)': 'JSON, как его читает SHLSDecoder (.json)',
        'YAML file (.yaml)': 'Файл YAML (.yaml)',
        'CSV table of the selected section (.csv)': 'Таблица CSV выбранного раздела (.csv)',
        'The records as plain text (.txt)': 'Записи как простой текст (.txt)',
        'Download every format at once': 'Скачать все форматы сразу',
        'All formats (ZIP)': 'Все форматы (ZIP)',

        /* ---------- My documents ---------- */
        'Search by name': 'Поиск по имени',
        'Search your documents': 'Поиск по вашим документам',
        'Open a file from your computer as a new document': 'Открыть файл с компьютера как новый документ',
        'New document': 'Новый документ',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Щёлкните по документу, чтобы открыть его. Документы хранятся только в этом браузере - ничего не загружается на сервер. Очистка данных сайта в браузере удалит их, поэтому скачайте те, которые хотите сохранить.',
        'Download every document as a .shls file in one ZIP': 'Скачать все документы как файлы .shls в одном ZIP',
        'Download all (ZIP)': 'Скачать все (ZIP)',
        'Rename': 'Переименовать',
        'Download as .shls': 'Скачать как .shls',
        'Delete': 'Удалить',
        'New name': 'Новое имя',
        'This document is open': 'Этот документ открыт',
        'Click to open this document': 'Щёлкните, чтобы открыть этот документ',
        'No documents yet.': 'Документов пока нет.',

        /* ---------- AI Assistant ---------- */
        'Any AI can work with you - ChatGPT, Claude, Gemini, Copilot. The prompt explains SHLS, so the AI writes valid SHLS.':
            'С вами может работать любой ИИ - ChatGPT, Claude, Gemini, Copilot. Промпт объясняет SHLS, поэтому ИИ пишет корректный SHLS.',
        'Connected AI': 'Подключённый ИИ',
        'Connected to': 'Подключено к',
        'the AI sends its result there, and it opens here.': 'ИИ отправляет туда свой результат, и он открывается здесь.',
        'What': 'Что',
        'tells the AI': 'сообщает ИИ',
        'The AI should': 'ИИ должен',
        'Change “': 'Изменить «',
        '”': '»',
        'Make a new document': 'Создать новый документ',
        'The AI\'s answer (or press Ctrl+V anywhere):': 'Ответ ИИ (или нажмите Ctrl+V в любом месте):',
        'The document travels in the link after the “#”, which no server sees. What you paste into your AI is handled by its provider.':
            'Документ передаётся в ссылке после «#»; эта часть не видна ни одному серверу. То, что вы вставляете в свой ИИ, обрабатывает его провайдер.',
        'The prompt - copy it with Ctrl+C': 'Промпт - скопируйте его с помощью Ctrl+C',
        'Copy prompt': 'Копировать промпт',
        'Paste it into your AI and say what it should change.': 'Вставьте его в свой ИИ и скажите, что нужно изменить.',
        '(no key yet)': '(ключа пока нет)',
        '(key valid while the editor is open)': '(ключ действует, пока редактор открыт)',
        'The link could not be read': 'Не удалось прочитать ссылку',
        'The document in this link is incomplete or damaged. If the AI\'s link was split over several lines (as in a terminal), copy the whole answer and paste it into the editor with Ctrl+V - the editor joins the lines.':
            'Документ в этой ссылке неполный или повреждён. Если ссылка ИИ была разбита на несколько строк (как в терминале), скопируйте весь ответ и вставьте его в редактор с помощью Ctrl+V - редактор соединит строки.',
        'Loading…': 'Загрузка…',
        'Taken over by your editor': 'Передано в ваш редактор',
        'The document is now in the SHLS Editor tab you already had open. Switch to that tab, or open it here.':
            'Документ теперь во вкладке редактора SHLS, которая у вас уже была открыта. Перейдите в ту вкладку или откройте его здесь.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)': 'Копирование здесь не разрешено - текст выделен ниже: нажмите Ctrl+C (⌘C)',
        'Prompt copied - paste it into your AI and say what it should write': 'Промпт скопирован - вставьте его в свой ИИ и скажите, что нужно написать',
        'This link is incomplete or damaged - please ask the AI to send it again': 'Эта ссылка неполная или повреждена - попросите ИИ отправить её ещё раз',

        /* ---------- Save to your server ---------- */
        'Save to your server': 'Сохранение на ваш сервер',
        'Webhook address': 'Адрес вебхука',
        'https://example.com/api/shls': 'https://example.com/api/shls',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(необязательно, отправляется как «Authorization: Bearer …»; хранится, пока открыта эта вкладка)',
        'Send automatically a few seconds after each change (otherwise only when you click': 'Отправлять автоматически через несколько секунд после каждого изменения (иначе только когда вы нажмёте',
        'or press Ctrl+S)': 'или Ctrl+S)',
        'Only for “': 'Только для «',
        '” (other documents use the general address)': '» (другие документы используют общий адрес)',
        'What your server receives': 'Что получает ваш сервер',
        'A POST request with JSON (your server must allow CORS from https://shls.giit.ch); content is the document as a string:':
            'POST-запрос с JSON (ваш сервер должен разрешать CORS с https://shls.giit.ch); content - документ в виде строки:',
        'Embed the editor in your website': 'Встроить редактор в ваш сайт',
        'Send now': 'Отправить сейчас',
        'Save setting': 'Сохранить настройку',

        /* ---------- Help ---------- */
        'How it works': 'Как это работает',
        'Keyboard shortcuts': 'Сочетания клавиш',
        'In the records: go up and down, fold and unfold': 'В записях: вверх и вниз, свернуть и развернуть',
        'In the records: change the value, key or section name': 'В записях: изменить значение, ключ или имя раздела',
        'In the records: remove the record or key': 'В записях: удалить запись или ключ',
        'In the records: move the record or key up / down': 'В записях: переместить запись или ключ вверх / вниз',
        'Indent / outdent in the code by one level': 'Увеличить / уменьшить отступ в коде на один уровень',
        'Undo / redo': 'Отменить / повторить',
        'Save (download, or to your server) / export': 'Сохранить (скачать или на ваш сервер) / экспорт',
        'Alt': 'Alt',
        'Escape': 'Escape',
        'A click in the middle puts the code\'s cursor on that line; the cursor in the code marks its record, key or value. Problems (a record with a value too few, indentation that is not a whole level, a missing blank line) are listed above the code with their line - click one to go there.':
            'Щелчок в центре ставит курсор кода на эту строку; курсор в коде отмечает свою запись, ключ или значение. Проблемы (запись без одного значения, отступ не на целый уровень, недостающая пустая строка) перечислены над кодом с номером строки - щёлкните по проблеме, чтобы перейти к ней.',
        'Enter keeps the indentation of the line; after a section name it starts the key block.': 'Enter сохраняет отступ строки; после имени раздела начинает блок ключей.',

        /* ---------- Messages ---------- */
        'The browser storage is full - download and delete documents under "My documents"': 'Хранилище браузера заполнено - скачайте и удалите документы в разделе «Мои документы»',
        'The browser storage is full - delete or download documents under "My documents" first': 'Хранилище браузера заполнено - сначала удалите или скачайте документы в разделе «Мои документы»',
        'The browser storage is full - delete or download some documents first': 'Хранилище браузера заполнено - сначала удалите или скачайте несколько документов',
        'The browser storage is full': 'Хранилище браузера заполнено',
        'Nothing to undo': 'Нечего отменять',
        'Nothing to redo': 'Нечего повторять',
        'Nothing changed': 'Ничего не изменилось',
        'Choose a section, key or record first': 'Сначала выберите раздел, ключ или запись',
        'Choose a key or a record to move or duplicate it': 'Выберите ключ или запись, чтобы переместить или дублировать',
        'This nested list has no records to add after': 'В этом вложенном списке нет записей, после которых можно добавить',
        'SHLS values have one line - the line breaks became spaces': 'Значения SHLS занимают одну строку - переносы строк стали пробелами',
        'Spaces around the value were removed - SHLS values cannot start with spaces': 'Пробелы вокруг значения удалены - значения SHLS не могут начинаться с пробелов',
        'SHLS has no empty values (a blank line is skipped) - write a placeholder such as - or PH': 'В SHLS нет пустых значений (пустая строка пропускается) - напишите заполнитель, например - или PH',
        'A key needs a name': 'Ключу нужно имя',
        'A section needs a name': 'Разделу нужно имя',
        'A key block needs at least one key - add another key first': 'В блоке ключей должен быть хотя бы один ключ - сначала добавьте другой ключ',
        'This key is not there any more': 'Этого ключа больше нет',
        'This line is not there any more': 'Этой строки больше нет',
        'This record is not there any more': 'Этой записи больше нет',
        'This is the first record': 'Это первая запись',
        'This is the last record': 'Это последняя запись',
        'This is the first key': 'Это первый ключ',
        'This is the last key': 'Это последний ключ',
        'This document is empty already': 'Этот документ уже пуст',
        'All data is removed. "Undo" brings it back as long as the page is open.': 'Все данные будут удалены. «Отменить» вернёт их, пока страница открыта.',
        'Start over': 'Начать заново',
        'The file is larger than 8 MB': 'Файл больше 8 МБ',
        'The CSV file is empty': 'Файл CSV пуст',
        'The YAML package is not loaded yet': 'Пакет YAML ещё не загружен',
        'Downloaded': 'Скачано',
        'Copied to the clipboard': 'Скопировано в буфер обмена',
        'Code copied': 'Код скопирован',
        '.shls downloaded': '.shls скачан',
        'Replace': 'Заменить',
        'The document is removed from this browser for good. Download it first if you want to keep a copy.':
            'Документ будет окончательно удалён из этого браузера. Сначала скачайте его, если хотите сохранить копию.',
        'unknown format': 'неизвестный формат',

        /* What SHLS cannot keep (opening JSON, YAML, CSV) */
        'An object inside a record becomes a list with this one object.': 'Объект внутри записи становится списком с этим единственным объектом.',
        'Plain values where SHLS expects records (in a list or as a section) become records with the one key "Value".': 'Простые значения там, где SHLS ожидает записи (в списке или как раздел), становятся записями с единственным ключом «Value».',
        'Empty values become blank lines, which SHLS readers skip - the values after them move up. Write a placeholder such as -.': 'Пустые значения становятся пустыми строками, которые программы чтения SHLS пропускают, - следующие значения сдвигаются вверх. Напишите заполнитель, например -.',
        'Values with several lines are not supported by SHLS - they break the records apart.': 'SHLS не поддерживает многострочные значения - они разрывают записи.',
        'Values that start or end with spaces lose them (and leading spaces change the indentation).': 'Значения, которые начинаются или заканчиваются пробелами, теряют их (а начальные пробелы меняют отступ).',

        /* ---------- Problems in the code ---------- */
        'A tab in the indentation - SHLS counts spaces only, so this line is read as a section name': 'Табуляция в отступе - SHLS считает только пробелы, поэтому эта строка читается как имя раздела',
        'SHLS readers ignore this line - its indentation does not fit the key block': 'Программы чтения SHLS игнорируют эту строку - её отступ не подходит к блоку ключей',
        /* ---------- Template placeholders (?template=) ---------- */
        'A line of section tags belongs between complete records': 'Строка с тегами разделов шаблона должна находиться между полными записями',
        'A template stays as written - the encoder works on filled data': 'Шаблон остаётся без изменений - кодировщик работает с заполненными данными',
        'Sections of the template stay whole - make this change in the code': 'Разделы шаблона остаются целыми - внесите это изменение в коде',
    },

    html: {

        '<b>Export</b> also has <b>Open in another editor</b>: it converts the document and opens it as a new document there. Anything the other format cannot hold is listed first.':

            'В <b>Экспорте</b> есть и <b>Открыть в другом редакторе</b>: документ преобразуется и открывается там как новый. То, что другой формат не может вместить, показывается заранее.',
        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Нажмите <b>Копировать промпт</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'ИИ отвечает ссылкой: щёлкните по ней или вставьте весь ответ ниже. <b>Отменить</b> откатывает изменение.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'ИИ отвечает ссылкой: <b>вставьте весь его ответ ниже</b> (ссылка по щелчку открывает отдельный редактор). <b>Отменить</b> откатывает изменение.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'Редактор может отправлять каждую сохранённую версию на ваш собственный сервер (<b>вебхук</b>), чтобы ваша работа хранилась там, где вы хотите. Ничего не отправляется, пока вы не введёте здесь адрес.',
        'Also possible: <code>?src=&lt;URL of a .shls file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>shlseditor:ai</code>, <code>shlseditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Также можно: <code>?src=&lt;URL файла .shls&gt;</code> открывает файл, <code>&amp;webhook=&lt;URL&gt;</code> сохраняет туда этот документ. Редактор может также открываться в отдельном окне (<code>?embed=window</code>), а ваша страница может передать ему свой промпт для ИИ и ключ сеанса, чтобы ИИ отправлял результат на ваш сервер (<code>shlseditor:ai</code>, <code>shlseditor:key-request</code>) - см. «Редактор на вашем сайте» под редактором. Подробности в <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> SHLS on the left - or start with <b>New</b> and one of the templates. A section is its name, then its keys (indented by one space, the keys of a nested list one level deeper), exactly one blank line, then the records: one value per line in the order of the keys.':
            '<b>Пишите</b> SHLS слева - или начните с <b>Новый</b> и одного из шаблонов. Раздел - это его имя, затем его ключи (с отступом в один пробел, ключи вложенного списка - на уровень глубже), ровно одна пустая строка, затем записи: одно значение на строку в порядке ключей.',
        'The middle shows each section with its <b>key block</b> and its <b>records</b>, the keys as labels; nested lists fold. It reads the code exactly as the reference SHLSDecoder does.':
            'В центре показан каждый раздел с его <b>блоком ключей</b> и <b>записями</b>, ключи служат подписями; вложенные списки сворачиваются. Код читается точно так же, как его читает эталонный SHLSDecoder.',
        '<b>Click a value, a key or a section name</b> to change it right there. <b>Enter</b> or a click elsewhere writes the change into the code (one step for Undo), <b>Escape</b> cancels. The buttons above add, duplicate, move and remove records and keys - a key added or removed is added to or removed from every record.':
            '<b>Щёлкните по значению, ключу или имени раздела</b>, чтобы изменить его прямо там. <b>Enter</b> или щелчок в другом месте записывает изменение в код (один шаг отмены), <b>Escape</b> отменяет. Кнопки сверху добавляют, дублируют, перемещают и удаляют записи и ключи - добавленный или удалённый ключ добавляется или удаляется в каждой записи.',
        '<b>Record</b> on the right shows the selected record as a form; <b>Insert</b> adds records, keys and sections; <b>Convert</b> counts the tokens against JSON and converts to JSON, YAML, CSV and JSON Lines; <b>Outline</b> lists the sections.':
            '<b>Запись</b> справа показывает выбранную запись в виде формы; <b>Вставка</b> добавляет записи, ключи и разделы; <b>Преобразование</b> подсчитывает токены в сравнении с JSON и преобразует в JSON, YAML, CSV и JSON Lines; <b>Оглавление</b> перечисляет разделы.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser. <b>Export</b> saves it as SHLS, JSON, YAML, CSV or text.':
            '<b>Мои документы</b> (кнопка с папкой слева вверху) перечисляют все документы, хранящиеся в этом браузере. <b>Экспорт</b> сохраняет документ как SHLS, JSON, YAML, CSV или текст.',
    },

    patterns: [
        /* ---------- Status lines and counts ---------- */
        ['^(\\d+) (?:line|lines) · ([\\d.]+ K?B) · (\\d+) (?:section|sections)$', (m, l, s1, s) => `${l} ${getPlural(l, 'строка', 'строки', 'строк')} · ${formatSizeUnit(s1)} · ${s} ${getPlural(s, 'раздел', 'раздела', 'разделов')}`],
        ['^([\\d,]+) bytes$', (m, b) => `${formatThousands(b)} ${getPlural(b, 'байт', 'байта', 'байт')}`],
        ['^(\\d+) (?:record|records) · (\\d+) (?:key|keys)$', (m, r, k) => `${r} ${translateRecords(r)} · ${k} ${translateKeys(k)}`],
        ['^(\\d+) (?:record|records) · (\\d+) (?:key|keys) · line (\\d+)$', (m, r, k, l) => `${r} ${translateRecords(r)} · ${k} ${translateKeys(k)} · строка ${l}`],
        ['^(\\d+) (?:record|records) · line (\\d+)$', (m, r, l) => `${r} ${translateRecords(r)} · строка ${l}`],
        ['^(\\d+) (?:record|records)$', (m, r) => `${r} ${translateRecords(r)}`],
        ['^(\\d+) (?:problem|problems)$', (m, k) => `${k} ${getPlural(k, 'проблема', 'проблемы', 'проблем')}`],
        ['^nested list · (\\d+) (?:key|keys)$', (m, k) => `вложенный список · ${k} ${translateKeys(k)}`],
        ['^(nested list · )?level (\\d+) · line (\\d+)$', (m, nl, l, z) => `${nl ? 'вложенный список · ' : ''}уровень ${l} · строка ${z}`],
        ['^record (\\d+) of (\\d+) · lines (\\d+)-(\\d+)$', 'запись $1 из $2 · строки $3-$4'],
        ['^SHLS needs about (\\d+) % fewer tokens than the same data as JSON - approximate tokens of common AI models\\.$', 'SHLS требует примерно на $1 % меньше токенов, чем те же данные в JSON, - примерное число токенов распространённых моделей ИИ.'],
        ['^The same data as JSON needs about as many tokens - approximate tokens of common AI models\\.$', 'Те же данные в JSON требуют примерно столько же токенов - примерное число токенов распространённых моделей ИИ.'],
        ['^The records of "(.+)": its keys are the columns, a nested list is one cell with JSON\\.$', 'Записи раздела «$1»: его ключи - столбцы, вложенный список - одна ячейка с JSON.'],
        ['^One record of "(.+)" per line\\.$', 'Одна запись раздела «$1» на строку.'],
        ['^"(.+)" has no records$', 'В «$1» нет записей'],

        /* ---------- Problems above the code ---------- */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'ошибка', 'ошибки', 'ошибок')}`],
        ['^(\\d+) (?:note|notes)$', (m, k) => `${k} ${getPlural(k, 'замечание', 'замечания', 'замечаний')}`],
        ['^· (\\d+) (?:note|notes)$', (m, k) => `· ${k} ${getPlural(k, 'замечание', 'замечания', 'замечаний')}`],
        ['^Line (\\d+)$', 'Строка $1'],
        ['^Indented by (\\d+) (?:space|spaces) - not a whole level \\((\\d+) (?:space|spaces) per level\\)$', (m, a, b) => `Отступ ${a} ${getPlural(a, 'пробел', 'пробела', 'пробелов')} - не целый уровень (${b} ${getPlural(b, 'пробел', 'пробела', 'пробелов')} на уровень)`],
        ['^Indented (\\d+) levels deeper than the line above - one level at a time$', (m, k) => `Отступ на ${k} ${getPlural(k, 'уровень', 'уровня', 'уровней')} глубже, чем у строки выше, - по одному уровню за раз`],
        ['^"(.+)" has no key block yet - these lines are read as its keys \\(the key block follows the section name directly\\)$', 'У «$1» ещё нет блока ключей - эти строки читаются как его ключи (блок ключей идёт сразу после имени раздела)'],
        ['^The key "(.+)" is twice in the key block - only one of them keeps its values\\. Is the blank line between the key block and the records missing\\?$', 'Ключ «$1» дважды встречается в блоке ключей - свои значения сохраняет только один. Не пропущена ли пустая строка между блоком ключей и записями?'],
        ['^"(.+)" looks like a value but stands in the key block - records follow the key block after exactly one blank line$', '«$1» похоже на значение, но стоит в блоке ключей - записи идут после блока ключей через ровно одну пустую строку'],
        ['^(\\d+) blank lines after the key block of "(.+)" - exactly one belongs there$', (m, k, s) => `${k} ${getPlural(k, 'пустая строка', 'пустые строки', 'пустых строк')} после блока ключей «${s}» - там должна быть ровно одна`],
        ['^This record of "(.+)" has (\\d+) of (\\d+) values - its last keys are missing in the data$', 'В этой записи «$1» $2 из $3 значений - её последних ключей нет в данных'],
        ['^No blank line before this record of "(.+)" while the others have one - the record above may have more values than the key block \\((\\d+)\\)$', 'Перед этой записью «$1» нет пустой строки, хотя у остальных она есть, - возможно, в записи выше больше значений, чем в блоке ключей ($2)'],
        ['^A blank line inside a record of "(.+)" - the record may have fewer values than the key block \\((\\d+)\\)$', 'Пустая строка внутри записи «$1» - возможно, в записи меньше значений, чем в блоке ключей ($2)'],

        /* ---------- Messages with names ---------- */
        ['^"(.+)" has no key block - write its keys first$', 'У «$1» нет блока ключей - сначала напишите его ключи'],
        ['^"(.+)" has no key block$', 'У «$1» нет блока ключей'],
        ['^There is already a section "(.+)"$', 'Раздел «$1» уже есть'],
        ['^There is no section "(.+)"$', 'Раздела «$1» нет'],
        ['^Remove the section "(.+)"\\?$', 'Удалить раздел «$1»?'],
        ['^Its key block and its (\\d+) (?:record is|records are) removed\\. "Undo" brings them back\\.$', (m, k) => `Его блок ключей и ${k} ${translateRecords(k)} будут удалены. «Отменить» вернёт их.`],
        ['^Remove the key "(.+)"\\?$', 'Удалить ключ «$1»?'],
        ['^Its value is removed from every record of "(.+)" \\((\\d+)\\)\\. "Undo" brings it back\\.$', 'Его значение будет удалено из каждой записи «$1» ($2). «Отменить» вернёт его.'],
        ['^Path copied: (.*)$', 'Путь скопирован: $1'],
        ['^Line (\\d+): (.*)$', 'Строка $1: $2'],
        ['^"(.+)" converted from ([\\w ]+)$', '«$1» преобразован из $2'],
        ['^SHLS cannot keep all of this data: (.*)$', 'SHLS не может сохранить все эти данные: $1'],
        ['^"(.+)" is open\\. My documents: open, rename, duplicate or delete your documents \\(Ctrl\\+O\\)$', '«$1» открыт. Мои документы: открыть, переименовать, дублировать или удалить документы (Ctrl+O)'],
        ['^Start "(.+)" over\\?$', 'Начать «$1» заново?'],
        ['^Start "(.+)" over$', 'Начать «$1» заново'],
        ['^(\\d+) (?:document|documents) · (.+) in this browser$', (m, k, s) => `${k} ${getPlural(k, 'документ', 'документа', 'документов')} · ${formatSize(s)} в этом браузере`],
        ['^No document named "(.*)"\\.$', 'Нет документа с именем «$1».'],
        ['^Open now · (.+)$', (m, s) => `Сейчас открыт · ${formatSize(s)}`],
        ['^(just now|yesterday|\\d+ min ago|\\d+ h ago|[A-Z][a-z]{2} \\d{1,2}, \\d{4}) · (.+)$', (m, w, s) => `${formatTime(w)} · ${formatSize(s)}`],
        ['^(.+) \\(open now\\)$', '$1 (сейчас открыт)'],
        ['^ZIP with (\\d+) (?:document|documents) downloaded$', (m, k) => `ZIP с ${k} ${getPlural(k, 'документом', 'документами', 'документами')} скачан`],
        ['^ZIP downloaded with (\\d+) files$', (m, k) => `ZIP скачан: ${k} ${getPlural(k, 'файл', 'файла', 'файлов')}`],
        ['^"(.+)" is empty now - "Undo" brings it back$', '«$1» теперь пуст - «Отменить» вернёт содержимое'],
        ['^"(.+)" opened$', '«$1» открыт'],
        ['^New document "(.+)" - your other documents are under "My documents"$', 'Новый документ «$1» - остальные ваши документы в разделе «Мои документы»'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$', 'Новый документ «$1» от ИИ - остальные ваши документы не изменены'],
        ['^"(.+)" is not a file the editor can open$', '«$1» - файл, который редактор не может открыть'],
        ['^Opened "(.+)" - converted from ([\\w ]+)$', '«$1» открыт - преобразован из $2'],
        ['^Opened "(.+)" - it is now in "My documents"$', '«$1» открыт - теперь он в разделе «Мои документы»'],
        ['^"(.+)" could not be opened: (.*)$', 'Не удалось открыть «$1»: $2'],
        ['^The addition is not valid SHLS - it is open as a new document "(.+)"$', 'Дополнение - некорректный SHLS; оно открыто как новый документ «$1»'],
        ['^(.+) - the addition is open as a new document "(.+)"$', '$1 - дополнение открыто как новый документ «$2»'],
        ['^Document received - (\\d+) (?:problem|problems) found, see above the code$', (m, k) => `Документ получен - найдено ${k} ${getPlural(k, 'проблема', 'проблемы', 'проблем')}, см. над кодом`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '«$1» изменён ИИ - «Отменить» вернёт всё назад'],
        ['^"(.+)" duplicated$', '«$1» продублирован'],
        ['^Delete "(.+)"\\?$', 'Удалить «$1»?'],
        ['^"(.+)" deleted$', '«$1» удалён'],

        /* ---------- AI Assistant ---------- */
        ['^Part (\\d+) of (\\d+) received$', 'Получена часть $1 из $2'],
        ['^Open the other (?:link|links) from the AI too \\(still missing: part (.+)\\)\\.$',
            'Откройте и остальные ссылки от ИИ (ещё не хватает: часть $1).'],
        ['^Part (\\d+) of (\\d+) received - paste the other (?:link|links) too \\(missing: (.+)\\)$', 'Получена часть $1 из $2 - вставьте и остальные ссылки (не хватает: $3)'],
        ['^The AI sends the document to (.+) with a key that only works for this session\\. What you paste into your AI is handled by its provider\\.$',
            'ИИ отправляет документ на $1 с ключом, который действует только в этом сеансе. То, что вы вставляете в свой ИИ, обрабатывает его провайдер.'],
        ['^The AI sends its result to (.+) by itself, and it opens here\\. If it answers with a link, paste its answer below\\.$',
            'ИИ сам отправляет результат на $1, и он открывается здесь. Если ИИ отвечает ссылкой, вставьте его ответ ниже.'],
        ['^No key from (.+) - the prompt asks the AI for a link instead$', 'Нет ключа от $1 - промпт просит ИИ прислать ссылку'],
        ['^Prompt copied - the AI sends its result to (.+)$', 'Промпт скопирован - ИИ отправит результат на $1'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Открыть $1'],
    ],
};
