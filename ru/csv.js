/* Russian texts of the CSV editor: the bar, the work area (code, table,
   format, column, insert), its dialogs and messages, and the problems the
   editor finds in the CSV. What all editors share is in common.js;
   how the dictionaries are used is described in i18n.js. Names of
   documents, columns and cell values stay as they are: the patterns copy
   them into the Russian text. */

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

const SEPS = { comma: 'запятую', semicolon: 'точку с запятой', tab: 'табуляцию', pipe: 'вертикальную черту' };

export default {
    text: {
        /* ---------- Template placeholders (?template=): views of the table, box, side panel ---------- */
        'Show or hide the side panel': 'Показать или скрыть боковую панель',
        'Examples': 'Примеры',
        'Template': 'Шаблон',
        'The template with its placeholders as written': 'Шаблон с заполнителями в исходном виде',
        'Placeholders': 'Заполнители',
        'The placeholders of the template - a click on one puts its tag at the cursor': 'Заполнители шаблона - щелчок вставляет соответствующий тег в позицию курсора',
        'Shown': 'Показан',
        'Hidden': 'Скрыт',
        'This part shows an example - change it in the template view or in the code': 'Эта часть показывает пример - измените её в виде шаблона или в коде',
        'View of the table': 'Вид таблицы',
        'The table filled with the examples': 'Таблица, заполненная примерами',
        'The examples could not be filled in - the table shows the template': 'Не удалось подставить примеры - таблица показывает шаблон',
        'online': 'онлайн',
        /* ---------- Top bar ---------- */
        'CSV Editor - home': 'Редактор CSV - на главную',
        'CSV Editor': 'Редактор CSV',
        'File': 'Файл',
        'My documents (Ctrl+O)': 'Мои документы (Ctrl+O)',
        'My documents': 'Мои документы',
        'New document, or start this one over': 'Новый документ или начать этот заново',
        'New': 'Новый',
        'New empty table': 'Новая пустая таблица',
        'Three columns - your other documents stay as they are': 'Три столбца - другие ваши документы останутся без изменений',
        'Contacts': 'Контакты',
        'Names, email addresses and phone numbers': 'Имена, адреса e-mail и номера телефонов',
        'Product list': 'Список товаров',
        'Article numbers, prices and stock': 'Артикулы, цены и остатки',
        'Budget': 'Бюджет',
        'Separated by semicolons, with decimal commas': 'Разделитель - точка с запятой, десятичные запятые',
        'Time sheet': 'Табель рабочего времени',
        'Separated by tabs (TSV)': 'С разделителем-табуляцией (TSV)',
        'The welcome example': 'Приветственный пример',
        'Quotes, commas and line breaks in fields': 'Кавычки, запятые и переносы строк в полях',
        'Start this document over': 'Начать этот документ заново',
        'Keeps the header row, removes the data - "Undo" brings it back':
            'Сохраняет строку заголовков, удаляет данные - «Отменить» вернёт их',
        'Open a CSV or TSV file from your computer (you can also drag it into the window)':
            'Открыть файл CSV или TSV с компьютера (его можно и перетащить в окно)',
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
        'Save the document as a .csv file (Ctrl+S)': 'Сохранить документ как файл .csv (Ctrl+S)',
        'Download .csv': 'Скачать .csv',
        'Excel (XLSX), JSON, Markdown, HTML, TSV and more (Ctrl+E)': 'Excel (XLSX), JSON, Markdown, HTML, TSV и другое (Ctrl+E)',
        'Export…': 'Экспорт…',

        /* ---------- Views and work area ---------- */
        'View': 'Вид',
        'Edit': 'Правка',
        'Side panel': 'Боковая панель',
        'Table': 'Таблица',
        'CSV code': 'Код CSV',
        'Copy the CSV text to the clipboard': 'Скопировать текст CSV в буфер обмена',
        'Copy code': 'Копировать код',
        'Copy': 'Копировать',
        'Drag to change the width of the code area': 'Перетащите, чтобы изменить ширину области кода',
        'Drag to change the width': 'Перетащите, чтобы изменить ширину',
        'Filter rows': 'Фильтр строк',
        'Show only rows that contain this text (Ctrl+F)': 'Показывать только строки, содержащие этот текст (Ctrl+F)',
        'Filter in': 'Фильтр в',
        'Filter in all columns or in one': 'Фильтровать во всех столбцах или в одном',
        'All columns': 'Все столбцы',
        'Put the rows of the CSV into this order (one step for Undo)':
            'Расположить строки CSV в этом порядке (один шаг для «Отменить»)',
        'Sort the data': 'Сортировать данные',
        'Show the rows in the order of the file': 'Показать строки в порядке файла',
        'Turn off sorting': 'Выключить сортировку',
        'Add a row below the selected one': 'Добавить строку под выбранной',
        'Add a row': 'Добавить строку',
        'Add a column at the end': 'Добавить столбец в конце',
        'Add a column': 'Добавить столбец',
        'Table: arrow keys move, Enter edits, Ctrl+C / Ctrl+V copy and paste':
            'Таблица: стрелки перемещают, Enter редактирует, Ctrl+C / Ctrl+V копируют и вставляют',
        'No data rows yet - type into the row marked ＋ or paste cells from a spreadsheet.':
            'Строк с данными пока нет - печатайте в строке с ＋ или вставьте ячейки из электронной таблицы.',
        'How the text is read: separator, quotes, header row, encoding, line endings':
            'Как читается текст: разделитель, кавычки, строка заголовков, кодировка, концы строк',
        'Column': 'Столбец',
        'What the selected column holds': 'Что содержит выбранный столбец',
        'Insert': 'Вставка',
        'Rows, columns and cleaning up': 'Строки, столбцы и очистка',
        'Open it here': 'Открыть здесь',
        'Drop the CSV file here': 'Перетащите сюда файл CSV',
        'Hide': 'Скрыть',
        'Show': 'Показать',

        /* the table (grid.js translates these itself: the table is marked data-no-i18n) */
        'Select everything (Ctrl+A)': 'Выделить всё (Ctrl+A)',
        '(empty)': '(пусто)',
        'Sort the view by this column': 'Сортировать отображение по этому столбцу',
        'Type here to add a row': 'Печатайте здесь, чтобы добавить строку',
        'Select the row': 'Выделить строку',
        'Cell': 'Ячейка',

        /* ---------- Format ---------- */
        'Reading the text': 'Чтение текста',
        'Separator': 'Разделитель',
        'Detect it': 'Определить',
        'Comma ( , )': 'Запятая ( , )',
        'Semicolon ( ; )': 'Точка с запятой ( ; )',
        'Tab': 'Табуляция',
        'Pipe ( | )': 'Вертикальная черта ( | )',
        'Quote character': 'Кавычки',
        'Double quote ( " )': 'Двойная кавычка ( " )',
        "Single quote ( ' )": 'Одинарная кавычка ( \' )',
        'The first row holds the column names': 'Первая строка содержит имена столбцов',
        'row': 'строка',
        'rows': 'строк',
        'column': 'столбец',
        'columns': 'столбцов',
        'Line endings': 'Концы строк',
        'Windows (CRLF)': 'Как в Windows (CRLF)',
        'Unix, macOS (LF)': 'Как в Unix, macOS (LF)',
        'old Mac (CR)': 'Как на старых Mac (CR)',
        'Opened as': 'Открыт как',
        'UTF-8 with BOM': 'UTF-8 с BOM',
        'Opening files': 'Открытие файлов',
        'Encoding of files you open': 'Кодировка открываемых файлов',
        'Detect it (UTF-8, otherwise Windows-1252)': 'Определить (UTF-8, иначе Windows-1252)',
        'Always UTF-8': 'Всегда UTF-8',
        'Always Windows-1252 (Western European)': 'Всегда Windows-1252 (западноевропейская)',
        'Read again as UTF-8': 'Перечитать как UTF-8',
        'Read again as Windows-1252': 'Перечитать как Windows-1252',
        'Download with a byte order mark (BOM), so that Excel reads UTF-8 correctly':
            'Скачивать с меткой порядка байтов (BOM), чтобы Excel правильно читал UTF-8',
        'Convert': 'Преобразовать',
        'New separator': 'Новый разделитель',
        'Quote every field': 'Каждое поле в кавычках',
        'Quotes only where needed': 'Кавычки только где нужно',

        /* ---------- Column ---------- */
        'Click a cell or a column head in the table to see what the column holds.':
            'Щёлкните по ячейке или заголовку столбца в таблице, чтобы увидеть, что содержит столбец.',
        'Kind': 'Тип',
        'Numbers': 'Числа',
        'Dates': 'Даты',
        'Empty': 'Пусто',
        'Filled': 'Заполнено',
        'Different values': 'Разных значений',
        'Smallest': 'Наименьшее',
        'Largest': 'Наибольшее',
        'Sum': 'Сумма',
        'Average': 'Среднее',
        'Earliest': 'Самая ранняя',
        'Latest': 'Самая поздняя',
        'Most frequent values': 'Самые частые значения',
        'Sort the data by this column': 'Сортировать данные по этому столбцу',
        'Ascending (A → Z)': 'По возр. (А → Я)',
        'Descending (Z → A)': 'По убыв. (Я → А)',
        'This changes the order of the rows in the CSV. Sorting with the arrows in the column heads only changes the view.':
            'Это меняет порядок строк в CSV. Сортировка стрелками в заголовках столбцов меняет только отображение.',

        /* ---------- Insert ---------- */
        'Rows': 'Строки',
        'Row above': 'Строка выше',
        'Row below': 'Строка ниже',
        'Duplicate': 'Дублировать',
        'Delete': 'Удалить',
        'Delete the selected rows': 'Удалить выбранные строки',
        'Move up': 'Вверх',
        'Move down': 'Вниз',
        'Columns': 'Столбцы',
        'Column left': 'Столбец слева',
        'Column right': 'Столбец справа',
        'Delete the selected columns': 'Удалить выбранные столбцы',
        'Move left': 'Влево',
        'Move right': 'Вправо',
        'Clean up': 'Очистка',
        'Remove spaces at the start and end of cells': 'Удалить пробелы в начале и конце ячеек',
        'Remove empty rows': 'Удалить пустые строки',
        'Remove repeated rows': 'Удалить повторяющиеся строки',
        'Give every row all fields': 'Дополнить строки полями',
        'Rows with fewer fields than the header get empty fields':
            'Строки с меньшим числом полей, чем в заголовке, получают пустые поля',
        'Every change is written into the CSV and is one step for Undo.':
            'Каждое изменение записывается в CSV и является одним шагом для «Отменить».',

        /* ---------- Export ---------- */
        'Close': 'Закрыть',
        'File name': 'Имя файла',
        'Excel workbook (.xlsx)': 'Книга Excel (.xlsx)',
        'CSV with a separator of your choice': 'CSV с разделителем на ваш выбор',
        'Tab-separated (.tsv)': 'С разделителем-табуляцией (.tsv)',
        'JSON (objects with headers, arrays without)': 'JSON (объекты с заголовками, массивы без них)',
        'Markdown table': 'Таблица Markdown',
        'HTML table (one page)': 'Таблица HTML (одна страница)',
        'Encoding': 'Кодировка',
        'Unicode (UTF-8)': 'Юникод (UTF-8)',
        'UTF-8 with BOM (for Excel)': 'UTF-8 с BOM (для Excel)',
        'Windows-1252 (Western European)': 'Windows-1252 (западноевропейская)',
        'Protect CSV/TSV exports against formulas; plain signed numbers remain unchanged.':
            'Защищать экспорт CSV/TSV от формул; обычные числа со знаком остаются без изменений.',
        'Only the rows shown now (filter and sort of the table)': 'Только показанные сейчас строки (фильтр и сортировка таблицы)',
        'Result': 'Результат',
        'Download every format at once': 'Скачать все форматы сразу',
        'All formats (ZIP)': 'Все форматы (ZIP)',
        'Download': 'Скачать',
        '(The workbook is made when you download it: one sheet, the header row in bold, numbers as numbers, everything else as text - never as a formula.)':
            '(Книга создаётся при скачивании: один лист, строка заголовков жирным, числа как числа, всё остальное как текст - никогда как формула.)',

        /* ---------- My documents ---------- */
        'Search by name': 'Поиск по имени',
        'Search your documents': 'Поиск по вашим документам',
        'Open a CSV file from your computer as a new document': 'Открыть файл CSV с компьютера как новый документ',
        'New document': 'Новый документ',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Щёлкните по документу, чтобы открыть его. Документы хранятся только в этом браузере - ничего не загружается на сервер. Очистка данных сайта в браузере удалит их, поэтому скачайте те, которые хотите сохранить.',
        'Download every document as a .csv file in one ZIP': 'Скачать все документы как файлы .csv одним ZIP',
        'Download all (ZIP)': 'Скачать все (ZIP)',
        'Rename': 'Переименовать',
        'Download as .csv': 'Скачать как .csv',
        'New name': 'Новое имя',
        'This document is open': 'Этот документ открыт',
        'Click to open this document': 'Щёлкните, чтобы открыть этот документ',
        'No documents yet.': 'Документов пока нет.',
        'The document is removed from this browser for good. Download it first if you want to keep a copy.':
            'Документ будет навсегда удалён из этого браузера. Если хотите сохранить копию, сначала скачайте его.',

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
        'The table travels in the link after the “#”, which no server sees. What you paste into your AI is handled by its provider.':
            'Таблица передаётся в ссылке после «#»; эта часть не видна ни одному серверу. То, что вы вставляете в свой ИИ, обрабатывает его провайдер.',
        'The prompt - copy it with Ctrl+C': 'Промпт - скопируйте его через Ctrl+C',
        'Copy prompt': 'Копировать промпт',
        'Paste it into your AI and say what it should do with the table.':
            'Вставьте его в свой ИИ и скажите, что нужно сделать с таблицей.',
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
        'The table is now in the CSV Editor tab you already had open. Switch to that tab, or open it here.':
            'Таблица теперь во вкладке редактора CSV, которая у вас уже была открыта. Перейдите в ту вкладку или откройте его здесь.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)':
            'Копирование здесь запрещено - текст выделен ниже: нажмите Ctrl+C (⌘C)',
        'Prompt copied - paste it into your AI and say what it should write':
            'Промпт скопирован - вставьте его в свой ИИ и скажите, что нужно написать',
        'This link is incomplete or damaged - please ask the AI to send it again':
            'Ссылка неполная или повреждена - попросите ИИ отправить её ещё раз',

        /* ---------- Save to your server ---------- */
        'Save to your server': 'Сохранение на ваш сервер',
        'Webhook address': 'Адрес вебхука',
        'https://example.com/api/csv': 'https://example.com/api/csv',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(необязательно, отправляется как «Authorization: Bearer …»; хранится, пока открыта эта вкладка)',
        'Send automatically a few seconds after each change (otherwise only when you click':
            'Отправлять автоматически через несколько секунд после каждого изменения (иначе только когда вы нажимаете',
        'or press Ctrl+S)': 'или Ctrl+S)',
        'Only for “': 'Только для «',
        '” (other documents use the general address)': '» (другие документы используют общий адрес)',
        'What your server receives': 'Что получает ваш сервер',
        'A POST request with JSON (your server must allow CORS from https://csv.giit.ch):':
            'POST-запрос с JSON (ваш сервер должен разрешать CORS с https://csv.giit.ch):',
        'Embed the editor in your website': 'Встроить редактор в ваш сайт',
        'Send now': 'Отправить сейчас',
        'Save setting': 'Сохранить настройку',

        /* ---------- Help ---------- */
        'How it works': 'Как это работает',
        'A click in the table puts the code\'s cursor on that field; the cursor in the code selects its cell.':
            'Щелчок в таблице ставит курсор кода на это поле; курсор в коде выделяет свою ячейку.',
        'Problems (rows with another number of fields, unclosed quotes, empty or repeated header names) are listed above the code - click one to go there.':
            'Проблемы (строки с другим числом полей, незакрытые кавычки, пустые или повторяющиеся имена заголовков) перечислены над кодом - щёлкните по проблеме, чтобы перейти к ней.',
        'Keyboard shortcuts in the table': 'Сочетания клавиш в таблице',
        'Move, select a range': 'Перемещение, выделение диапазона',
        'Edit the cell (typing replaces its value)': 'Редактировать ячейку (ввод заменяет её значение)',
        'A line break inside the cell': 'Перенос строки внутри ячейки',
        'Next / previous cell': 'Следующая / предыдущая ячейка',
        'Empty the selected cells': 'Очистить выбранные ячейки',
        'Copy / cut / paste (tab-separated, as spreadsheets use it)':
            'Копировать / вырезать / вставить (с разделителем-табуляцией, как в электронных таблицах)',
        'Select the whole table': 'Выделить всю таблицу',
        'Filter the rows': 'Фильтровать строки',
        'Undo / redo': 'Отменить / повторить',
        'Save (download .csv, or to your server) / export': 'Сохранить (скачать .csv или на ваш сервер) / экспорт',
        'in the code': 'в коде',
        'Go to the cursor\'s cell in the table': 'Перейти к ячейке курсора в таблице',
        '+ arrows': '+ стрелки',
        '/ typing': '/ ввод',

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
        'This document is empty already': 'Этот документ уже пуст',
        'Start over': 'Начать заново',
        'Every row except the header row is removed. "Undo" brings them back as long as the page is open.':
            'Удалены все строки, кроме строки заголовков. «Отменить» вернёт их, пока страница открыта.',
        'Everything is removed. "Undo" brings it back as long as the page is open.':
            'Всё удалено. «Отменить» вернёт это, пока страница открыта.',
        'The file is larger than 60 MB': 'Файл больше 60 МБ',
        'Downloaded': 'Скачано',
        'Copied to the clipboard': 'Скопировано в буфер обмена',
        'CSV copied': 'CSV скопирован',
        '.csv downloaded': '.csv скачан',
        '.tsv downloaded': '.tsv скачан',
        'Add': 'Добавить',
        'Replace': 'Заменить',
        'Cell copied': 'Ячейка скопирована',
        'Pasted into 1 cell': 'Вставлено в 1 ячейку',
        'Row added': 'Строка добавлена',
        'Row duplicated': 'Строка дублирована',
        'Row deleted - "Undo" brings it back': 'Строка удалена - «Отменить» вернёт её',
        'Select a row first': 'Сначала выберите строку',
        'Turn off sorting and the filter to move rows': 'Выключите сортировку и фильтр, чтобы перемещать строки',
        'Column added': 'Столбец добавлен',
        'Column deleted - "Undo" brings it back': 'Столбец удалён - «Отменить» вернёт его',
        'No cell has spaces at its start or end': 'Ни в одной ячейке нет пробелов в начале или конце',
        'There are no empty rows': 'Пустых строк нет',
        'There are no repeated rows': 'Повторяющихся строк нет',
        'Every row has enough fields': 'У каждой строки достаточно полей',
        'Every field is in quotes now': 'Теперь каждое поле в кавычках',
        'The text already uses this separator': 'Текст уже использует этот разделитель',
        'ZIP downloaded: CSV, TSV, JSON, Markdown, HTML and XLSX': 'ZIP скачан: CSV, TSV, JSON, Markdown, HTML и XLSX',

        /* ---------- Problems ---------- */
        'This quote is never closed - the rest of the file is one field':
            'Эта кавычка не закрыта - остаток файла стал одним полем',
        'Text after the closing quote of a field': 'Текст после закрывающей кавычки поля',
        'A quote inside a field that does not start with a quote': 'Кавычка внутри поля, которое не начинается с кавычки',
        'Empty line': 'Пустая строка',
        /* Words that German keeps from the English, but Russian does not */
        'Code': 'Код',
        'Export': 'Экспорт',
        'Format': 'Формат',
        'Link': 'Ссылка',
        'Token': 'Токен',
        'Name': 'Имя',
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
        'Also possible: <code>?src=&lt;URL of a .csv file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>csveditor:ai</code>, <code>csveditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Также можно: <code>?src=&lt;URL of a .csv file&gt;</code> открывает файл, <code>&amp;webhook=&lt;URL&gt;</code> сохраняет туда этот документ. Редактор может открываться и в отдельном окне (<code>?embed=window</code>), а ваша страница может передать ему собственный промпт для ИИ и ключ сеанса, чтобы ИИ отправлял результат на ваш сервер (<code>csveditor:ai</code>, <code>csveditor:key-request</code>) - см. «Редактор на вашем сайте» под редактором. Подробности - в <a href="/llms.txt">llms.txt</a>.',
        'Also possible: <code>?src=&lt;URL of a .csv file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>csveditor:ai</code>, <code>csveditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Также можно: <code>?src=&lt;URL of a .csv file&gt;</code> открывает файл, <code>&amp;webhook=&lt;URL&gt;</code> сохраняет туда этот документ. Редактор может открываться и в отдельном окне (<code>?embed=window</code>), а ваша страница может передать ему собственный промпт для ИИ и ключ сеанса, чтобы ИИ отправлял результат на ваш сервер (<code>csveditor:ai</code>, <code>csveditor:key-request</code>) - см. «Редактор на вашем сайте» под редактором. Подробности - в <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Open</b> a CSV file, drop it into the window, or start with <b>New</b>. The raw text is on the left, the table in the middle.':
            '<b>Откройте</b> файл CSV, перетащите его в окно или начните с <b>Новый</b>. Исходный текст слева, таблица посередине.',
        '<b>Edit cells</b> in the table like in a spreadsheet: type, or press <b>Enter</b> or <b>F2</b>, or double-click a cell. <b>Enter</b> or <b>Tab</b> keeps the value, <b>Escape</b> cancels. The change goes into the CSV text right at that field - quotes only where needed, the line endings stay - and is one step for Undo.':
            '<b>Редактируйте ячейки</b> в таблице как в электронной таблице: печатайте, нажмите <b>Enter</b> или <b>F2</b> или дважды щёлкните по ячейке. <b>Enter</b> или <b>Tab</b> сохраняет значение, <b>Escape</b> отменяет. Изменение попадает в текст CSV прямо в это поле - кавычки только где нужно, концы строк сохраняются - и является одним шагом для «Отменить».',
        '<b>Copy and paste</b> ranges between the table and Excel, LibreOffice or Google Sheets with Ctrl+C and Ctrl+V. Type into the row marked ＋ to add a row.':
            '<b>Копируйте и вставляйте</b> диапазоны между таблицей и Excel, LibreOffice или Google Таблицами через Ctrl+C и Ctrl+V. Печатайте в строке с ＋, чтобы добавить строку.',
        '<b>Sort</b> with the arrows in the column heads and <b>filter</b> above the table: that only changes the view. <b>Sort the data</b> puts the rows of the file into that order.':
            '<b>Сортируйте</b> стрелками в заголовках столбцов и <b>фильтруйте</b> над таблицей: это меняет только отображение. <b>Сортировать данные</b> располагает строки файла в этом порядке.',
        '<b>Format</b> on the right sets how the text is read (separator, quote, header row) and converts it; <b>Column</b> shows what a column holds; <b>Insert</b> adds, deletes and moves rows and columns and cleans up.':
            '<b>Формат</b> справа задаёт, как читается текст (разделитель, кавычки, строка заголовков), и преобразует его; <b>Столбец</b> показывает, что содержит столбец; <b>Вставка</b> добавляет, удаляет и перемещает строки и столбцы и наводит порядок.',
        '<b>Export</b> makes an Excel workbook, JSON, Markdown, HTML, TSV or CSV with another separator. <b>Download .csv</b> saves the text as it is.':
            '<b>Экспорт</b> создаёт книгу Excel, JSON, Markdown, HTML, TSV или CSV с другим разделителем. <b>Скачать .csv</b> сохраняет текст как есть.',
        '<kbd>Delete</kbd>': '<kbd>Delete</kbd>',
    },
    patterns: [
        /* ---------- Code and table ---------- */
        ['^([\\d,]+) (?:line|lines) · (.+) · ([\\d,]+) × (\\d+)$', (m, l, s, r, c) => `${formatThousands(l)} ${getPlural(l, 'строка', 'строки', 'строк')} · ${formatSize(s)} · ${formatThousands(r)} × ${c}`],
        ['^([\\d,]+) (?:row|rows), (\\d+) (?:column|columns)$', (m, r, c) => `${formatThousands(r)} ${getPlural(r, 'строка', 'строки', 'строк')}, ${c} ${getPlural(c, 'столбец', 'столбца', 'столбцов')}`],
        ['^([\\d,]+) of ([\\d,]+) rows$', (m, a, b) => `${formatThousands(a)} из ${formatThousands(b)} ${getPlural(b, 'строки', 'строк', 'строк')}`],
        ['^([\\d,]+) (?:row|rows)$', (m, k) => `${formatThousands(k)} ${getPlural(k, 'строка', 'строки', 'строк')}`],
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'ошибка', 'ошибки', 'ошибок')}`],
        ['^([\\d,]+) (?:note|notes)$', (m, k) => `${formatThousands(k)} ${getPlural(k, 'замечание', 'замечания', 'замечаний')}`],
        ['^Line (\\d+)$', 'Строка $1'],
        ['^(\\d+) (?:field|fields) - the header has (\\d+)$', (m, k, h) => `${k} ${getPlural(k, 'поле', 'поля', 'полей')} - в заголовке ${h}`],
        ['^(\\d+) (?:field|fields) - most rows have (\\d+)$', (m, k, h) => `${k} ${getPlural(k, 'поле', 'поля', 'полей')} - в большинстве строк ${h}`],
        ['^Column (\\S+) has no name$', 'У столбца $1 нет имени'],
        ['^The name "(.+)" is used twice \\(columns (\\S+) and (\\S+)\\)$', 'Имя «$1» используется дважды (столбцы $2 и $3)'],
        ['^(\\d+) cells copied$', (m, k) => `Скопировано: ${k} ${getPlural(k, 'ячейка', 'ячейки', 'ячеек')}`],
        ['^Pasted into (\\d+) cells$', (m, k) => `Вставлено в ${k} ${getPlural(k, 'ячейку', 'ячейки', 'ячеек')}`],
        ['^Sorted by$', 'Отсортировано по'],
        ['^\\(view only\\)$', '(только отображение)'],

        /* ---------- Messages ---------- */
        ['^(\\d+) rows duplicated$', (m, k) => `Дублировано: ${k} ${getPlural(k, 'строка', 'строки', 'строк')}`],
        ['^(\\d+) rows deleted - "Undo" brings them back$', (m, k) => `Удалено: ${k} ${getPlural(k, 'строка', 'строки', 'строк')} - «Отменить» вернёт их`],
        ['^(\\d+) columns deleted - "Undo" brings them back$', (m, k) => `Удалено: ${k} ${getPlural(k, 'столбец', 'столбца', 'столбцов')} - «Отменить» вернёт их`],
        ['^The data is sorted by "(.*)" - "Undo" takes it back$', 'Данные отсортированы по «$1» - «Отменить» вернёт всё назад'],
        ['^Spaces removed in (\\d+) (?:cell|cells)$', (m, k) => `Пробелы удалены в ${k} ${getPlural(k, 'ячейке', 'ячейках', 'ячейках')}`],
        ['^(\\d+) empty (?:row|rows) removed$', (m, k) => `Удалено пустых строк: ${k}`],
        ['^(\\d+) repeated (?:row|rows) removed$', (m, k) => `Удалено повторяющихся строк: ${k}`],
        ['^(\\d+) (?:row|rows) filled up to (\\d+) fields$', (m, k, w) => `${k} ${getPlural(k, 'строка дополнена', 'строки дополнены', 'строк дополнено')} до ${w} ${getPlural(w, 'поля', 'полей', 'полей')}`],
        ['^Separator converted to (\\w+)$', (m, s) => `Разделитель изменён на ${SEPS[s] || s}`],
        ['^Line endings: Windows \\(CRLF\\)$', 'Концы строк: Windows (CRLF)'],
        ['^Line endings: Unix, macOS \\(LF\\)$', 'Концы строк: Unix, macOS (LF)'],

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
        ['^"(.+)" is not a CSV file$', '«$1» - не файл CSV'],
        ['^Opened "(.+)" as Windows-1252 - it is now in "My documents"$', '«$1» открыт как Windows-1252 - теперь он в разделе «Мои документы»'],
        ['^Opened "(.+)" - it is now in "My documents"$', '«$1» открыт - теперь он в разделе «Мои документы»'],
        ['^Table received - the editor found (\\d+) (?:problem|problems), see above the code$', (m, k) => `Таблица получена - редактор нашёл ${k} ${getPlural(k, 'проблему', 'проблемы', 'проблем')}, см. над кодом`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '«$1» изменён ИИ - «Отменить» вернёт всё назад'],
        ['^"(.+)" duplicated$', '«$1» дублирован'],
        ['^Delete "(.+)"\\?$', 'Удалить «$1»?'],
        ['^"(.+)" deleted$', '«$1» удалён'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Открыть $1'],
    ],
};
