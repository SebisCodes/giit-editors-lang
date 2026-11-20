/* Ukrainian texts of the CSV editor: the bar, the work area (code, table,
   format, column, insert), its dialogs and messages, and the problems the
   editor finds in the CSV. What all editors share is in common.js;
   how the dictionaries are used is described in i18n.js. Names of
   documents, columns and cell values stay as they are: the patterns copy
   them into the Ukrainian text. */

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

const SEPS = { comma: 'кому', semicolon: 'крапку з комою', tab: 'табуляцію', pipe: 'вертикальну риску' };

export default {
    text: {
        'online': 'онлайн',
        /* ---------- Top bar ---------- */
        'CSV Editor - home': 'Редактор CSV - на головну',
        'CSV Editor': 'Редактор CSV',
        'File': 'Файл',
        'My documents (Ctrl+O)': 'Мої документи (Ctrl+O)',
        'My documents': 'Мої документи',
        'New document, or start this one over': 'Новий документ або почати цей заново',
        'New': 'Новий',
        'New empty table': 'Нова порожня таблиця',
        'Three columns - your other documents stay as they are': 'Три стовпці - інші ваші документи залишаться без змін',
        'Contacts': 'Контакти',
        'Names, email addresses and phone numbers': 'Імена, адреси e-mail і номери телефонів',
        'Product list': 'Список товарів',
        'Article numbers, prices and stock': 'Артикули, ціни й залишки',
        'Budget': 'Бюджет',
        'Separated by semicolons, with decimal commas': 'Розділювач - крапка з комою, десяткові коми',
        'Time sheet': 'Табель робочого часу',
        'Separated by tabs (TSV)': 'Із розділювачем-табуляцією (TSV)',
        'The welcome example': 'Вітальний приклад',
        'Quotes, commas and line breaks in fields': 'Лапки, коми й розриви рядків у полях',
        'Start this document over': 'Почати цей документ заново',
        'Keeps the header row, removes the data - "Undo" brings it back':
            'Зберігає рядок заголовків, видаляє дані - «Скасувати» поверне їх',
        'Open a CSV or TSV file from your computer (you can also drag it into the window)':
            'Відкрити файл CSV або TSV з комп’ютера (його можна й перетягнути у вікно)',
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
        'Save the document as a .csv file (Ctrl+S)': 'Зберегти документ як файл .csv (Ctrl+S)',
        'Download .csv': 'Завантажити .csv',
        'Excel (XLSX), JSON, Markdown, HTML, TSV and more (Ctrl+E)': 'Excel (XLSX), JSON, Markdown, HTML, TSV та інше (Ctrl+E)',
        'Export…': 'Експорт…',

        /* ---------- Views and work area ---------- */
        'View': 'Вигляд',
        'Edit': 'Правка',
        'Side panel': 'Бічна панель',
        'Table': 'Таблиця',
        'CSV code': 'Код CSV',
        'Copy the CSV text to the clipboard': 'Скопіювати текст CSV у буфер обміну',
        'Copy code': 'Копіювати код',
        'Copy': 'Копіювати',
        'Drag to change the width of the code area': 'Перетягніть, щоб змінити ширину області коду',
        'Drag to change the width': 'Перетягніть, щоб змінити ширину',
        'Filter rows': 'Фільтр рядків',
        'Show only rows that contain this text (Ctrl+F)': 'Показувати лише рядки, що містять цей текст (Ctrl+F)',
        'Filter in': 'Фільтр у',
        'Filter in all columns or in one': 'Фільтрувати в усіх стовпцях або в одному',
        'All columns': 'Усі стовпці',
        'Put the rows of the CSV into this order (one step for Undo)':
            'Розташувати рядки CSV у цьому порядку (один крок для «Скасувати»)',
        'Sort the data': 'Сортувати дані',
        'Show the rows in the order of the file': 'Показати рядки в порядку файлу',
        'Turn off sorting': 'Вимкнути сортування',
        'Add a row below the selected one': 'Додати рядок під вибраним',
        'Add a row': 'Додати рядок',
        'Add a column at the end': 'Додати стовпець у кінці',
        'Add a column': 'Додати стовпець',
        'Table: arrow keys move, Enter edits, Ctrl+C / Ctrl+V copy and paste':
            'Таблиця: стрілки переміщують, Enter редагує, Ctrl+C / Ctrl+V копіюють і вставляють',
        'No data rows yet - type into the row marked ＋ or paste cells from a spreadsheet.':
            'Рядків із даними поки немає - пишіть у рядку з ＋ або вставте клітинки з електронної таблиці.',
        'How the text is read: separator, quotes, header row, encoding, line endings':
            'Як читається текст: розділювач, лапки, рядок заголовків, кодування, закінчення рядків',
        'Column': 'Стовпець',
        'What the selected column holds': 'Що містить вибраний стовпець',
        'Insert': 'Вставка',
        'Rows, columns and cleaning up': 'Рядки, стовпці й очищення',
        'Open it here': 'Відкрити тут',
        'Drop the CSV file here': 'Перетягніть сюди файл CSV',
        'Hide': 'Сховати',
        'Show': 'Показати',

        /* the table (grid.js translates these itself: the table is marked data-no-i18n) */
        'Select everything (Ctrl+A)': 'Виділити все (Ctrl+A)',
        '(empty)': '(порожньо)',
        'Sort the view by this column': 'Сортувати вигляд за цим стовпцем',
        'Type here to add a row': 'Пишіть тут, щоб додати рядок',
        'Select the row': 'Виділити рядок',
        'Cell': 'Клітинка',

        /* ---------- Format ---------- */
        'Reading the text': 'Читання тексту',
        'Separator': 'Розділювач',
        'Detect it': 'Визначити',
        'Comma ( , )': 'Кома ( , )',
        'Semicolon ( ; )': 'Крапка з комою ( ; )',
        'Tab': 'Табуляція',
        'Pipe ( | )': 'Вертикальна риска ( | )',
        'Quote character': 'Лапки',
        'Double quote ( " )': 'Подвійні лапки ( " )',
        "Single quote ( ' )": 'Одинарні лапки ( \' )',
        'The first row holds the column names': 'Перший рядок містить назви стовпців',
        'row': 'рядок',
        'rows': 'рядків',
        'column': 'стовпець',
        'columns': 'стовпців',
        'Line endings': 'Закінчення рядків',
        'Windows (CRLF)': 'Як у Windows (CRLF)',
        'Unix, macOS (LF)': 'Як в Unix, macOS (LF)',
        'old Mac (CR)': 'Як у старих Mac (CR)',
        'Opened as': 'Відкрито як',
        'UTF-8 with BOM': 'UTF-8 з BOM',
        'Opening files': 'Відкриття файлів',
        'Encoding of files you open': 'Кодування файлів, які ви відкриваєте',
        'Detect it (UTF-8, otherwise Windows-1252)': 'Визначити (UTF-8, інакше Windows-1252)',
        'Always UTF-8': 'Завжди UTF-8',
        'Always Windows-1252 (Western European)': 'Завжди Windows-1252 (західноєвропейське)',
        'Read again as UTF-8': 'Перечитати як UTF-8',
        'Read again as Windows-1252': 'Перечитати як Windows-1252',
        'Download with a byte order mark (BOM), so that Excel reads UTF-8 correctly':
            'Завантажувати з позначкою порядку байтів (BOM), щоб Excel правильно читав UTF-8',
        'Convert': 'Перетворити',
        'New separator': 'Новий розділювач',
        'Quote every field': 'Кожне поле в лапках',
        'Quotes only where needed': 'Лапки лише де потрібно',

        /* ---------- Column ---------- */
        'Click a cell or a column head in the table to see what the column holds.':
            'Клацніть клітинку або заголовок стовпця в таблиці, щоб побачити, що містить стовпець.',
        'Kind': 'Тип',
        'Numbers': 'Числа',
        'Dates': 'Дати',
        'Empty': 'Порожніх',
        'Filled': 'Заповнених',
        'Different values': 'Різних значень',
        'Smallest': 'Найменше',
        'Largest': 'Найбільше',
        'Sum': 'Сума',
        'Average': 'Середнє',
        'Earliest': 'Найраніша',
        'Latest': 'Найпізніша',
        'Most frequent values': 'Найчастіші значення',
        'Sort the data by this column': 'Сортувати дані за цим стовпцем',
        'Ascending (A → Z)': 'За зрост. (А → Я)',
        'Descending (Z → A)': 'За спад. (Я → А)',
        'This changes the order of the rows in the CSV. Sorting with the arrows in the column heads only changes the view.':
            'Це змінює порядок рядків у CSV. Сортування стрілками в заголовках стовпців змінює лише вигляд.',

        /* ---------- Insert ---------- */
        'Rows': 'Рядки',
        'Row above': 'Рядок вище',
        'Row below': 'Рядок нижче',
        'Duplicate': 'Дублювати',
        'Delete': 'Видалити',
        'Delete the selected rows': 'Видалити вибрані рядки',
        'Move up': 'Угору',
        'Move down': 'Униз',
        'Columns': 'Стовпці',
        'Column left': 'Стовпець ліворуч',
        'Column right': 'Стовпець праворуч',
        'Delete the selected columns': 'Видалити вибрані стовпці',
        'Move left': 'Ліворуч',
        'Move right': 'Праворуч',
        'Clean up': 'Очищення',
        'Remove spaces at the start and end of cells': 'Видалити пробіли на початку й у кінці клітинок',
        'Remove empty rows': 'Видалити порожні рядки',
        'Remove repeated rows': 'Видалити повторювані рядки',
        'Give every row all fields': 'Доповнити рядки полями',
        'Rows with fewer fields than the header get empty fields':
            'Рядки з меншою кількістю полів, ніж у заголовку, отримують порожні поля',
        'Every change is written into the CSV and is one step for Undo.':
            'Кожну зміну записано в CSV, і вона є одним кроком для «Скасувати».',

        /* ---------- Export ---------- */
        'Close': 'Закрити',
        'File name': 'Ім’я файлу',
        'Excel workbook (.xlsx)': 'Книга Excel (.xlsx)',
        'CSV with a separator of your choice': 'CSV із розділювачем на ваш вибір',
        'Tab-separated (.tsv)': 'Із розділювачем-табуляцією (.tsv)',
        'JSON (objects with headers, arrays without)': 'JSON (об’єкти із заголовками, масиви без них)',
        'Markdown table': 'Таблиця Markdown',
        'HTML table (one page)': 'Таблиця HTML (одна сторінка)',
        'Encoding': 'Кодування',
        'Unicode (UTF-8)': 'Юнікод (UTF-8)',
        'UTF-8 with BOM (for Excel)': 'UTF-8 з BOM (для Excel)',
        'Windows-1252 (Western European)': 'Windows-1252 (західноєвропейське)',
        'Protect CSV/TSV exports against formulas; plain signed numbers remain unchanged.':
            'Захищати експорт CSV/TSV від формул; звичайні числа зі знаком залишаються без змін.',
        'Only the rows shown now (filter and sort of the table)': 'Лише рядки, показані зараз (фільтр і сортування таблиці)',
        'Result': 'Результат',
        'Download every format at once': 'Завантажити всі формати одразу',
        'All formats (ZIP)': 'Усі формати (ZIP)',
        'Download': 'Завантажити',
        '(The workbook is made when you download it: one sheet, the header row in bold, numbers as numbers, everything else as text - never as a formula.)':
            '(Книга створюється під час завантаження: один аркуш, рядок заголовків жирним, числа як числа, усе інше як текст - ніколи як формула.)',

        /* ---------- My documents ---------- */
        'Search by name': 'Пошук за назвою',
        'Search your documents': 'Пошук у ваших документах',
        'Open a CSV file from your computer as a new document': 'Відкрити файл CSV з комп’ютера як новий документ',
        'New document': 'Новий документ',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Клацніть документ, щоб відкрити його. Документи зберігаються лише в цьому браузері - нічого не вивантажується на сервер. Очищення даних сайту в браузері видалить їх, тому завантажте ті, які хочете зберегти.',
        'Download every document as a .csv file in one ZIP': 'Завантажити всі документи як файли .csv одним ZIP',
        'Download all (ZIP)': 'Завантажити все (ZIP)',
        'Rename': 'Перейменувати',
        'Download as .csv': 'Завантажити як .csv',
        'New name': 'Нове ім’я',
        'This document is open': 'Цей документ відкрито',
        'Click to open this document': 'Клацніть, щоб відкрити цей документ',
        'No documents yet.': 'Документів поки немає.',
        'The document is removed from this browser for good. Download it first if you want to keep a copy.':
            'Документ буде остаточно видалено з цього браузера. Якщо хочете зберегти копію, спершу завантажте його.',

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
        'The table travels in the link after the “#”, which no server sees. What you paste into your AI is handled by its provider.':
            'Таблиця передається в посиланні після «#», якого не бачить жоден сервер. Те, що ви вставляєте у свій ШІ, обробляє його провайдер.',
        'The prompt - copy it with Ctrl+C': 'Промпт - скопіюйте його через Ctrl+C',
        'Copy prompt': 'Копіювати промпт',
        'Paste it into your AI and say what it should do with the table.':
            'Вставте його у свій ШІ та скажіть, що треба зробити з таблицею.',
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
        'The table is now in the CSV Editor tab you already had open. Switch to that tab, or open it here.':
            'Таблиця тепер у вкладці редактора CSV, яку ви вже мали відкритою. Перейдіть до тієї вкладки або відкрийте його тут.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)':
            'Копіювання тут заборонене - текст виділено нижче: натисніть Ctrl+C (⌘C)',
        'Prompt copied - paste it into your AI and say what it should write':
            'Промпт скопійовано - вставте його у свій ШІ та скажіть, що треба написати',
        'This link is incomplete or damaged - please ask the AI to send it again':
            'Посилання неповне або пошкоджене - попросіть ШІ надіслати його ще раз',

        /* ---------- Save to your server ---------- */
        'Save to your server': 'Збереження на ваш сервер',
        'Webhook address': 'Адреса вебхука',
        'https://example.com/api/csv': 'https://example.com/api/csv',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(необов’язково, надсилається як «Authorization: Bearer …»; зберігається, доки відкрита ця вкладка)',
        'Send automatically a few seconds after each change (otherwise only when you click':
            'Надсилати автоматично через кілька секунд після кожної зміни (інакше лише коли ви натискаєте',
        'or press Ctrl+S)': 'або Ctrl+S)',
        'Only for “': 'Лише для «',
        '” (other documents use the general address)': '» (інші документи використовують загальну адресу)',
        'What your server receives': 'Що отримує ваш сервер',
        'A POST request with JSON (your server must allow CORS from https://csv.giit.ch):':
            'POST-запит із JSON (ваш сервер має дозволяти CORS з https://csv.giit.ch):',
        'Embed the editor in your website': 'Вбудувати редактор у ваш сайт',
        'Send now': 'Надіслати зараз',
        'Save setting': 'Зберегти налаштування',

        /* ---------- Help ---------- */
        'How it works': 'Як це працює',
        'A click in the table puts the code\'s cursor on that field; the cursor in the code selects its cell.':
            'Клацання в таблиці ставить курсор коду на це поле; курсор у коді виділяє свою клітинку.',
        'Problems (rows with another number of fields, unclosed quotes, empty or repeated header names) are listed above the code - click one to go there.':
            'Проблеми (рядки з іншою кількістю полів, незакриті лапки, порожні або повторювані назви заголовків) перелічено над кодом - клацніть проблему, щоб перейти до неї.',
        'Keyboard shortcuts in the table': 'Поєднання клавіш у таблиці',
        'Move, select a range': 'Переміщення, виділення діапазону',
        'Edit the cell (typing replaces its value)': 'Редагувати клітинку (введення замінює її значення)',
        'A line break inside the cell': 'Розрив рядка всередині клітинки',
        'Next / previous cell': 'Наступна / попередня клітинка',
        'Empty the selected cells': 'Очистити вибрані клітинки',
        'Copy / cut / paste (tab-separated, as spreadsheets use it)':
            'Копіювати / вирізати / вставити (із розділювачем-табуляцією, як в електронних таблицях)',
        'Select the whole table': 'Виділити всю таблицю',
        'Filter the rows': 'Фільтрувати рядки',
        'Undo / redo': 'Скасувати / повторити',
        'Save (download .csv, or to your server) / export': 'Зберегти (завантажити .csv або на ваш сервер) / експорт',
        'in the code': 'у коді',
        'Go to the cursor\'s cell in the table': 'Перейти до клітинки курсора в таблиці',
        '+ arrows': '+ стрілки',
        '/ typing': '/ введення',

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
        'This document is empty already': 'Цей документ уже порожній',
        'Start over': 'Почати заново',
        'Every row except the header row is removed. "Undo" brings them back as long as the page is open.':
            'Видалено всі рядки, крім рядка заголовків. «Скасувати» поверне їх, поки сторінка відкрита.',
        'Everything is removed. "Undo" brings it back as long as the page is open.':
            'Усе видалено. «Скасувати» поверне це, поки сторінка відкрита.',
        'The file is larger than 60 MB': 'Файл більший за 60 МБ',
        'Downloaded': 'Завантажено',
        'Copied to the clipboard': 'Скопійовано в буфер обміну',
        'CSV copied': 'CSV скопійовано',
        '.csv downloaded': '.csv завантажено',
        '.tsv downloaded': '.tsv завантажено',
        'Add': 'Додати',
        'Replace': 'Замінити',
        'Cell copied': 'Клітинку скопійовано',
        'Pasted into 1 cell': 'Вставлено в 1 клітинку',
        'Row added': 'Рядок додано',
        'Row duplicated': 'Рядок продубльовано',
        'Row deleted - "Undo" brings it back': 'Рядок видалено - «Скасувати» поверне його',
        'Select a row first': 'Спершу виберіть рядок',
        'Turn off sorting and the filter to move rows': 'Вимкніть сортування й фільтр, щоб переміщати рядки',
        'Column added': 'Стовпець додано',
        'Column deleted - "Undo" brings it back': 'Стовпець видалено - «Скасувати» поверне його',
        'No cell has spaces at its start or end': 'Жодна клітинка не має пробілів на початку чи в кінці',
        'There are no empty rows': 'Порожніх рядків немає',
        'There are no repeated rows': 'Повторюваних рядків немає',
        'Every row has enough fields': 'Кожен рядок має достатньо полів',
        'Every field is in quotes now': 'Тепер кожне поле в лапках',
        'The text already uses this separator': 'Текст уже використовує цей розділювач',
        'ZIP downloaded: CSV, TSV, JSON, Markdown, HTML and XLSX': 'ZIP завантажено: CSV, TSV, JSON, Markdown, HTML і XLSX',

        /* ---------- Problems ---------- */
        'This quote is never closed - the rest of the file is one field':
            'Ці лапки не закрито - решта файлу стала одним полем',
        'Text after the closing quote of a field': 'Текст після закривальних лапок поля',
        'A quote inside a field that does not start with a quote': 'Лапки всередині поля, яке не починається з лапок',
        'Empty line': 'Порожній рядок',
        /* Words that German keeps from the English, but Ukrainian does not */
        'Code': 'Код',
        'Export': 'Експорт',
        'Format': 'Формат',
        'Link': 'Посилання',
        'Token': 'Токен',
        'Name': 'Ім’я',
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
        'Also possible: <code>?src=&lt;URL of a .csv file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>csveditor:ai</code>, <code>csveditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Також можна: <code>?src=&lt;URL of a .csv file&gt;</code> відкриває файл, <code>&amp;webhook=&lt;URL&gt;</code> зберігає туди цей документ. Редактор може відкриватися й в окремому вікні (<code>?embed=window</code>), а ваша сторінка може передати йому власний промпт для ШІ та ключ сеансу, щоб ШІ надсилав результат на ваш сервер (<code>csveditor:ai</code>, <code>csveditor:key-request</code>) - див. «Редактор на вашому сайті» під редактором. Подробиці - у <a href="/llms.txt">llms.txt</a>.',
        'Also possible: <code>?src=&lt;URL of a .csv file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>csveditor:ai</code>, <code>csveditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Також можна: <code>?src=&lt;URL of a .csv file&gt;</code> відкриває файл, <code>&amp;webhook=&lt;URL&gt;</code> зберігає туди цей документ. Редактор може відкриватися й в окремому вікні (<code>?embed=window</code>), а ваша сторінка може передати йому власний промпт для ШІ та ключ сеансу, щоб ШІ надсилав результат на ваш сервер (<code>csveditor:ai</code>, <code>csveditor:key-request</code>) - див. «Редактор на вашому сайті» під редактором. Подробиці - у <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Open</b> a CSV file, drop it into the window, or start with <b>New</b>. The raw text is on the left, the table in the middle.':
            '<b>Відкрийте</b> файл CSV, перетягніть його у вікно або почніть із <b>Новий</b>. Вихідний текст ліворуч, таблиця посередині.',
        '<b>Edit cells</b> in the table like in a spreadsheet: type, or press <b>Enter</b> or <b>F2</b>, or double-click a cell. <b>Enter</b> or <b>Tab</b> keeps the value, <b>Escape</b> cancels. The change goes into the CSV text right at that field - quotes only where needed, the line endings stay - and is one step for Undo.':
            '<b>Редагуйте клітинки</b> в таблиці як в електронній таблиці: пишіть, натисніть <b>Enter</b> або <b>F2</b> чи двічі клацніть клітинку. <b>Enter</b> або <b>Tab</b> зберігає значення, <b>Escape</b> скасовує. Зміна потрапляє в текст CSV саме в це поле - лапки лише де потрібно, закінчення рядків зберігаються - і є одним кроком для «Скасувати».',
        '<b>Copy and paste</b> ranges between the table and Excel, LibreOffice or Google Sheets with Ctrl+C and Ctrl+V. Type into the row marked ＋ to add a row.':
            '<b>Копіюйте й вставляйте</b> діапазони між таблицею та Excel, LibreOffice чи Google Таблицями через Ctrl+C і Ctrl+V. Пишіть у рядку з ＋, щоб додати рядок.',
        '<b>Sort</b> with the arrows in the column heads and <b>filter</b> above the table: that only changes the view. <b>Sort the data</b> puts the rows of the file into that order.':
            '<b>Сортуйте</b> стрілками в заголовках стовпців і <b>фільтруйте</b> над таблицею: це змінює лише вигляд. <b>Сортувати дані</b> розташовує рядки файлу в цьому порядку.',
        '<b>Format</b> on the right sets how the text is read (separator, quote, header row) and converts it; <b>Column</b> shows what a column holds; <b>Insert</b> adds, deletes and moves rows and columns and cleans up.':
            '<b>Формат</b> праворуч задає, як читається текст (розділювач, лапки, рядок заголовків), і перетворює його; <b>Стовпець</b> показує, що містить стовпець; <b>Вставка</b> додає, видаляє й переміщує рядки та стовпці й наводить лад.',
        '<b>Export</b> makes an Excel workbook, JSON, Markdown, HTML, TSV or CSV with another separator. <b>Download .csv</b> saves the text as it is.':
            '<b>Експорт</b> створює книгу Excel, JSON, Markdown, HTML, TSV або CSV з іншим розділювачем. <b>Завантажити .csv</b> зберігає текст як є.',
        '<kbd>Delete</kbd>': '<kbd>Delete</kbd>',
    },
    patterns: [
        /* ---------- Code and table ---------- */
        ['^([\\d,]+) (?:line|lines) · (.+) · ([\\d,]+) × (\\d+)$', (m, l, s, r, c) => `${formatThousands(l)} ${getPlural(l, 'рядок', 'рядки', 'рядків')} · ${formatSize(s)} · ${formatThousands(r)} × ${c}`],
        ['^([\\d,]+) (?:row|rows), (\\d+) (?:column|columns)$', (m, r, c) => `${formatThousands(r)} ${getPlural(r, 'рядок', 'рядки', 'рядків')}, ${c} ${getPlural(c, 'стовпець', 'стовпці', 'стовпців')}`],
        ['^([\\d,]+) of ([\\d,]+) rows$', (m, a, b) => `${formatThousands(a)} з ${formatThousands(b)} ${getPlural(b, 'рядка', 'рядків', 'рядків')}`],
        ['^([\\d,]+) (?:row|rows)$', (m, k) => `${formatThousands(k)} ${getPlural(k, 'рядок', 'рядки', 'рядків')}`],
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'помилка', 'помилки', 'помилок')}`],
        ['^([\\d,]+) (?:note|notes)$', (m, k) => `${formatThousands(k)} ${getPlural(k, 'зауваження', 'зауваження', 'зауважень')}`],
        ['^Line (\\d+)$', 'Рядок $1'],
        ['^(\\d+) (?:field|fields) - the header has (\\d+)$', (m, k, h) => `${k} ${getPlural(k, 'поле', 'поля', 'полів')} - у заголовку ${h}`],
        ['^(\\d+) (?:field|fields) - most rows have (\\d+)$', (m, k, h) => `${k} ${getPlural(k, 'поле', 'поля', 'полів')} - у більшості рядків ${h}`],
        ['^Column (\\S+) has no name$', 'Стовпець $1 не має імені'],
        ['^The name "(.+)" is used twice \\(columns (\\S+) and (\\S+)\\)$', 'Ім’я «$1» використано двічі (стовпці $2 і $3)'],
        ['^(\\d+) cells copied$', (m, k) => `Скопійовано ${k} ${getPlural(k, 'клітинку', 'клітинки', 'клітинок')}`],
        ['^Pasted into (\\d+) cells$', (m, k) => `Вставлено в ${k} ${getPlural(k, 'клітинку', 'клітинки', 'клітинок')}`],
        ['^Sorted by$', 'Відсортовано за'],
        ['^\\(view only\\)$', '(лише вигляд)'],

        /* ---------- Messages ---------- */
        ['^(\\d+) rows duplicated$', (m, k) => `Продубльовано ${k} ${getPlural(k, 'рядок', 'рядки', 'рядків')}`],
        ['^(\\d+) rows deleted - "Undo" brings them back$', (m, k) => `Видалено ${k} ${getPlural(k, 'рядок', 'рядки', 'рядків')} - «Скасувати» поверне їх`],
        ['^(\\d+) columns deleted - "Undo" brings them back$', (m, k) => `Видалено ${k} ${getPlural(k, 'стовпець', 'стовпці', 'стовпців')} - «Скасувати» поверне їх`],
        ['^The data is sorted by "(.*)" - "Undo" takes it back$', 'Дані відсортовано за «$1» - «Скасувати» поверне все назад'],
        ['^Spaces removed in (\\d+) (?:cell|cells)$', (m, k) => `Пробіли видалено в ${k} ${getPlural(k, 'клітинці', 'клітинках', 'клітинках')}`],
        ['^(\\d+) empty (?:row|rows) removed$', (m, k) => `Видалено порожніх рядків: ${k}`],
        ['^(\\d+) repeated (?:row|rows) removed$', (m, k) => `Видалено повторюваних рядків: ${k}`],
        ['^(\\d+) (?:row|rows) filled up to (\\d+) fields$', (m, k, w) => `${k} ${getPlural(k, 'рядок доповнено', 'рядки доповнено', 'рядків доповнено')} до ${w} ${getPlural(w, 'поля', 'полів', 'полів')}`],
        ['^Separator converted to (\\w+)$', (m, s) => `Розділювач змінено на ${SEPS[s] || s}`],
        ['^Line endings: Windows \\(CRLF\\)$', 'Закінчення рядків: Windows (CRLF)'],
        ['^Line endings: Unix, macOS \\(LF\\)$', 'Закінчення рядків: Unix, macOS (LF)'],

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
        ['^"(.+)" is not a CSV file$', '«$1» - не файл CSV'],
        ['^Opened "(.+)" as Windows-1252 - it is now in "My documents"$', '«$1» відкрито як Windows-1252 - тепер він у «Мої документи»'],
        ['^Opened "(.+)" - it is now in "My documents"$', '«$1» відкрито - тепер він у «Мої документи»'],
        ['^Table received - the editor found (\\d+) (?:problem|problems), see above the code$', (m, k) => `Таблицю отримано - редактор знайшов ${k} ${getPlural(k, 'проблему', 'проблеми', 'проблем')}, див. над кодом`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '«$1» змінено ШІ - «Скасувати» поверне все назад'],
        ['^"(.+)" duplicated$', '«$1» продубльовано'],
        ['^Delete "(.+)"\\?$', 'Видалити «$1»?'],
        ['^"(.+)" deleted$', '«$1» видалено'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Відкрити $1'],
    ],
};
