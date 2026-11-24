/* Ukrainian texts of the SHLS editor: the bar, the work area (code, records,
   record, insert, convert, outline), its dialogs and messages, and the
   problems found in the code. What all editors share is in
   common.js; how the dictionaries are used is described in
   i18n.js. Names of documents, sections, keys and values stay as they are:
   the patterns copy them into the Ukrainian text. */

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

/**
 * Translates the text the pattern found (recs in the English pattern).
 * @param {string} k - the English text the pattern found.
 * @returns {string} the text in the language.
 */
const translateRecords = k => getPlural(k, 'запис', 'записи', 'записів');
/**
 * Translates the text the pattern found (keys in the English pattern).
 * @param {string} k - the English text the pattern found.
 * @returns {string} the text in the language.
 */
const translateKeys = k => getPlural(k, 'ключ', 'ключі', 'ключів');

export default {
    text: {
        /* ---------- Template placeholders (?template=): views of the records, box, side panel ---------- */
        'Show or hide the side panel': 'Показати або сховати бічну панель',
        'Examples': 'Приклади',
        'Template': 'Шаблон',
        'The template with its placeholders as written': 'Шаблон із заповнювачами в початковому вигляді',
        'Placeholders': 'Заповнювачі',
        'The placeholders of the template - a click on one puts its tag at the cursor': 'Заповнювачі шаблону - клацання вставляє відповідний тег у позицію курсора',
        'Shown': 'Показано',
        'Hidden': 'Приховано',
        'This part shows an example - change it in the template view or in the code': 'Ця частина показує приклад - змініть її у вигляді шаблону або в коді',
        'View of the records': 'Вигляд записів',
        'The records filled with the examples': 'Записи, заповнені прикладами',
        'The examples could not be filled in - the records show the template': 'Не вдалося підставити приклади - записи показують шаблон',
        "Read back from SHLS, the data is not the same (for example records whose keys are in another order than in the first record) - check the result.": "Під час зворотного читання з SHLS дані не збігаються (наприклад, записи з ключами в іншому порядку, ніж у першому записі) - перевірте результат.",
        /* ---------- Top bar ---------- */
        'SHLS Editor - home': 'Редактор SHLS - на головну',
        'SHLS Editor': 'Редактор SHLS',
        'File': 'Файл',
        'My documents (Ctrl+O)': 'Мої документи (Ctrl+O)',
        'My documents': 'Мої документи',
        'New document, or start this one over': 'Новий документ або почати цей заново',
        'New': 'Новий',
        'New blank document': 'Новий порожній документ',
        'An empty document - your other documents stay as they are': 'Порожній документ - інші ваші документи залишаться без змін',
        'Empty section': 'Порожній розділ',
        'One section with two keys and one record to fill in': 'Один розділ із двома ключами й одним записом для заповнення',
        'Products and companies': 'Товари й компанії',
        'The first README example: records right after each key block': 'Перший приклад із README: записи одразу після кожного блоку ключів',
        'Key blocks first': 'Спершу блоки ключів',
        'The second README example: the records follow under the section name again': 'Другий приклад із README: записи йдуть під повтореною назвою розділу',
        'Companies, departments and employees, nested three levels': 'Компанії, відділи й працівники, три рівні вкладеності',
        'The same data with the key blocks first and fewer blank lines': 'Ті самі дані з блоками ключів на початку й меншою кількістю порожніх рядків',
        'Start this document over': 'Почати цей документ заново',
        'Empties the document - "Undo" brings it back': 'Очищає документ - «Скасувати» поверне його',
        'Open an SHLS file from your computer (JSON, YAML, CSV and JSON Lines files are converted; you can also drag a file into the window)':
            'Відкрити файл SHLS з комп’ютера (файли JSON, YAML, CSV і JSON Lines перетворюються; файл можна й перетягнути у вікно)',
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
        'Save to your own server and embed the editor in your website': 'Збереження на ваш сервер і вбудовування редактора у ваш сайт',
        'Save to server': 'На сервер',
        'How it works and keyboard shortcuts (?)': 'Як це працює і поєднання клавіш (?)',
        'Help': 'Довідка',
        'Save the document as a .shls file (Ctrl+S)': 'Зберегти документ як файл .shls (Ctrl+S)',
        'Download .shls': 'Завантажити .shls',
        'JSON, YAML, CSV and more (Ctrl+E)': 'JSON, YAML, CSV та інше (Ctrl+E)',
        'Export…': 'Експорт…',

        /* ---------- Views and work area ---------- */
        'View': 'Вигляд',
        'Edit': 'Правка',
        'Selection': 'Виділення',
        'Records': 'Записи',
        'Record': 'Запис',
        'SHLS code': 'Код SHLS',
        'Copy the code to the clipboard': 'Скопіювати код у буфер обміну',
        'Copy code': 'Копіювати код',
        'Copy': 'Копіювати',
        'Lay the document out as the reference SHLSEncoder does: all key blocks first, then the records': 'Упорядкувати документ так, як це робить еталонний SHLSEncoder: спершу всі блоки ключів, потім записи',
        'Tidy up': 'Упорядкувати',
        'Drag to change the width of the code area': 'Перетягніть, щоб змінити ширину області коду',
        'Drag to change the width': 'Перетягніть, щоб змінити ширину',
        'Unfold everything': 'Розгорнути все',
        'Fold the key blocks and records': 'Згорнути блоки ключів і записи',
        'Add: a record after the selected record (or at the end of the section), a key after the selected key': 'Додати: запис після вибраного запису (або в кінці розділу), ключ після вибраного ключа',
        'Add': 'Додати',
        'Duplicate the selected record or key': 'Дублювати вибраний запис або ключ',
        'Duplicate': 'Дублювати',
        'Move the selected record or key up (Alt+Up)': 'Перемістити вибраний запис або ключ угору (Alt+Up)',
        'Move up': 'Угору',
        'Move the selected record or key down (Alt+Down)': 'Перемістити вибраний запис або ключ униз (Alt+Down)',
        'Move down': 'Униз',
        'Remove the selected record, key or section (Delete)': 'Видалити вибраний запис, ключ або розділ (Delete)',
        'Remove': 'Видалити',
        'Search keys and values': 'Пошук ключів і значень',
        'Previous match (Shift+Enter)': 'Попередній збіг (Shift+Enter)',
        'Previous match': 'Попередній збіг',
        'Next match (Enter)': 'Наступний збіг (Enter)',
        'Next match': 'Наступний збіг',
        'Copy the path of the selection': 'Скопіювати шлях виділеного',
        'Copy path': 'Копіювати шлях',
        'Nothing selected': 'Нічого не вибрано',
        'Side panel': 'Бічна панель',
        'The selected record, value or key': 'Вибраний запис, значення або ключ',
        'New records, keys and sections, and pieces of code': 'Нові записи, ключі й розділи та фрагменти коду',
        'Insert': 'Вставка',
        'Tokens, and the document in other formats': 'Токени й документ в інших форматах',
        'Convert': 'Конвертер',
        'The sections of the document': 'Розділи документа',
        'Outline': 'План',
        'Open it here': 'Відкрити тут',
        'Drop the file here': 'Перетягніть файл сюди',
        'Hide': 'Сховати',
        'Show': 'Показати',

        /* ---------- Records view ---------- */
        'Keys': 'Ключі',
        'the template of each record': 'шаблон кожного запису',
        'Click to rename the section': 'Клацніть, щоб перейменувати розділ',
        'Click to rename the key - only the key block changes': 'Клацніть, щоб перейменувати ключ - змінюється лише блок ключів',
        'Click to change the value': 'Клацніть, щоб змінити значення',
        'Value': 'Значення',
        'Key': 'Ключ',
        'Section name': 'Назва розділу',
        'The code cannot be read - see the problem above the code.': 'Код не вдається прочитати - див. проблему над кодом.',
        'No sections yet - write a section name, its keys (indented) and, after one blank line, the records. Or choose a template under "New".':
            'Розділів поки немає - напишіть назву розділу, його ключі (з відступом) і після одного порожнього рядка записи. Або виберіть шаблон у «Новий».',

        /* ---------- Record tab ---------- */
        'Click a section, a key or a record in the middle.': 'Клацніть розділ, ключ або запис посередині.',
        'The document has no sections yet.': 'У документі поки немає розділів.',
        'The document has no sections yet': 'У документі поки немає розділів',
        'Path': 'Шлях',
        'Section': 'Розділ',
        'Add a record': 'Додати запис',
        'Add a key': 'Додати ключ',
        'Remove the section': 'Видалити розділ',
        'Add a key after it': 'Додати ключ після нього',
        'Add a record after it': 'Додати запис після нього',
        'Renaming a key changes only the key block. Adding, moving or removing a key changes every record of the section.':
            'Перейменування ключа змінює лише блок ключів. Додавання, переміщення чи видалення ключа змінює кожен запис розділу.',
        'Apply': 'Застосувати',

        /* ---------- Insert tab ---------- */
        'Add to the selection': 'Додати до виділеного',
        'A record after the selected record (or at the end of the section), a key after the selected key - every record gets a value "-" for it. One step for Undo.':
            'Запис після вибраного запису (або в кінці розділу), ключ після вибраного ключа - кожен запис отримує для нього значення «-». Один крок для «Скасувати».',
        'A new record with "-" for each value': 'Новий запис із «-» для кожного значення',
        'A new key in the key block; every record gets "-"': 'Новий ключ у блоці ключів; кожен запис отримує «-»',
        'A copy of the selected record or key': 'Копія вибраного запису або ключа',
        'A new section at the end, with two keys and one record': 'Новий розділ у кінці, з двома ключами й одним записом',
        'At the cursor in the code': 'Біля курсора в коді',
        'A section name, its key block, a blank line and one record': 'Назва розділу, його блок ключів, порожній рядок і один запис',
        'The placeholder for the line of a nested list': 'Заповнювач для рядка вкладеного списку',
        '- (no value)': '- (немає значення)',
        'SHLS has no empty values: a dash stands for none': 'SHLS не має порожніх значень: риска означає «немає»',
        'Today\'s date': 'Сьогоднішня дата',
        'The date as YYYY-MM-DD': 'Дата у форматі РРРР-ММ-ДД',

        /* ---------- Convert tab ---------- */
        'JSON on one line': 'JSON в один рядок',
        'This document': 'Цей документ',
        'Writes the document anew as the reference SHLSEncoder does: all key blocks first, then the records of each section':
            'Переписує документ так, як це робить еталонний SHLSEncoder: спершу всі блоки ключів, потім записи кожного розділу',
        'Write as SHLSEncoder does': 'Записати як SHLSEncoder',
        'Convert to': 'Перетворити на',
        'JSON (as SHLSDecoder reads it)': 'JSON (як його читає SHLSDecoder)',
        'CSV (one section)': 'CSV (один розділ)',
        'JSON Lines (one section)': 'JSON Lines (один розділ)',
        'The records as plain text': 'Записи звичайним текстом',
        'Result': 'Результат',
        'Download': 'Завантажити',
        'Opens the result as a new document in the JSON Editor (in a new tab)': 'Відкриває результат як новий документ у редакторі JSON (у новій вкладці)',
        'Open in the JSON Editor': 'Відкрити в редакторі JSON',
        'Exactly the data the reference SHLSDecoder reads: every value is a string.': 'Саме ті дані, які читає еталонний SHLSDecoder: кожне значення - рядок.',
        'The code cannot be read as SHLS - fix the problem above the code first': 'Код не вдається прочитати як SHLS - спершу виправте проблему над кодом',
        'Write it anyway?': 'Усе одно записати?',
        'Read back, the encoder\'s text gives different data than this document (SHLSEncoder cannot write every structure). "Undo" brings the document back.':
            'Під час зворотного читання текст кодувальника дає інші дані, ніж цей документ (SHLSEncoder не може записати кожну структуру). «Скасувати» поверне документ.',
        'Write it': 'Записати',
        'The document is written as SHLSEncoder does already': 'Документ уже записано так, як це робить SHLSEncoder',
        'Written as SHLSEncoder does': 'Записано як SHLSEncoder',

        /* ---------- Outline tab ---------- */
        'The sections of the document. Click one to go there.': 'Розділи документа. Клацніть розділ, щоб перейти до нього.',

        /* ---------- Export ---------- */
        'Close': 'Закрити',
        'File name': 'Ім’я файлу',
        'SHLS file as it is (.shls)': 'Файл SHLS як є (.shls)',
        'JSON, as SHLSDecoder reads it (.json)': 'JSON, як його читає SHLSDecoder (.json)',
        'YAML file (.yaml)': 'Файл YAML (.yaml)',
        'CSV table of the selected section (.csv)': 'Таблиця CSV вибраного розділу (.csv)',
        'The records as plain text (.txt)': 'Записи звичайним текстом (.txt)',
        'Download every format at once': 'Завантажити всі формати одразу',
        'All formats (ZIP)': 'Усі формати (ZIP)',

        /* ---------- My documents ---------- */
        'Search by name': 'Пошук за назвою',
        'Search your documents': 'Пошук у ваших документах',
        'Open a file from your computer as a new document': 'Відкрити файл з комп’ютера як новий документ',
        'New document': 'Новий документ',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Клацніть документ, щоб відкрити його. Документи зберігаються лише в цьому браузері - нічого не вивантажується на сервер. Очищення даних сайту в браузері видалить їх, тому завантажте ті, які хочете зберегти.',
        'Download every document as a .shls file in one ZIP': 'Завантажити всі документи як файли .shls одним ZIP',
        'Download all (ZIP)': 'Завантажити все (ZIP)',
        'Rename': 'Перейменувати',
        'Download as .shls': 'Завантажити як .shls',
        'Delete': 'Видалити',
        'New name': 'Нове ім’я',
        'This document is open': 'Цей документ відкрито',
        'Click to open this document': 'Клацніть, щоб відкрити цей документ',
        'No documents yet.': 'Документів поки немає.',

        /* ---------- AI Assistant ---------- */
        'Any AI can work with you - ChatGPT, Claude, Gemini, Copilot. The prompt explains SHLS, so the AI writes valid SHLS.':
            'З вами може працювати будь-який ШІ - ChatGPT, Claude, Gemini, Copilot. Промпт пояснює SHLS, тож ШІ пише коректний SHLS.',
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
        '(no key yet)': '(ключа поки немає)',
        '(key valid while the editor is open)': '(ключ дійсний, поки редактор відкрито)',
        'The link could not be read': 'Не вдалося прочитати посилання',
        'The document in this link is incomplete or damaged. If the AI\'s link was split over several lines (as in a terminal), copy the whole answer and paste it into the editor with Ctrl+V - the editor joins the lines.':
            'Документ у цьому посиланні неповний або пошкоджений. Якщо посилання ШІ розбите на кілька рядків (як у терміналі), скопіюйте всю відповідь і вставте її в редактор через Ctrl+V - редактор з’єднає рядки.',
        'Loading…': 'Завантаження…',
        'Taken over by your editor': 'Передано у ваш редактор',
        'The document is now in the SHLS Editor tab you already had open. Switch to that tab, or open it here.':
            'Документ тепер у вкладці редактора SHLS, яку ви вже мали відкритою. Перейдіть до тієї вкладки або відкрийте його тут.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)': 'Копіювання тут заборонене - текст виділено нижче: натисніть Ctrl+C (⌘C)',
        'Prompt copied - paste it into your AI and say what it should write': 'Промпт скопійовано - вставте його у свій ШІ та скажіть, що треба написати',
        'This link is incomplete or damaged - please ask the AI to send it again': 'Посилання неповне або пошкоджене - попросіть ШІ надіслати його ще раз',

        /* ---------- Save to your server ---------- */
        'Save to your server': 'Збереження на ваш сервер',
        'Webhook address': 'Адреса вебхука',
        'https://example.com/api/shls': 'https://example.com/api/shls',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(необов’язково, надсилається як «Authorization: Bearer …»; зберігається, доки відкрита ця вкладка)',
        'Send automatically a few seconds after each change (otherwise only when you click': 'Надсилати автоматично через кілька секунд після кожної зміни (інакше лише коли ви натискаєте',
        'or press Ctrl+S)': 'або Ctrl+S)',
        'Only for “': 'Лише для «',
        '” (other documents use the general address)': '» (інші документи використовують загальну адресу)',
        'What your server receives': 'Що отримує ваш сервер',
        'A POST request with JSON (your server must allow CORS from https://shls.giit.ch); content is the document as a string:':
            'POST-запит із JSON (ваш сервер має дозволяти CORS з https://shls.giit.ch); content - це документ у вигляді рядка:',
        'Embed the editor in your website': 'Вбудувати редактор у ваш сайт',
        'Send now': 'Надіслати зараз',
        'Save setting': 'Зберегти налаштування',

        /* ---------- Help ---------- */
        'How it works': 'Як це працює',
        'Keyboard shortcuts': 'Поєднання клавіш',
        'In the records: go up and down, fold and unfold': 'У записах: угору й униз, згорнути й розгорнути',
        'In the records: change the value, key or section name': 'У записах: змінити значення, ключ або назву розділу',
        'In the records: remove the record or key': 'У записах: видалити запис або ключ',
        'In the records: move the record or key up / down': 'У записах: перемістити запис або ключ угору / вниз',
        'Indent / outdent in the code by one level': 'Збільшити / зменшити відступ у коді на один рівень',
        'Undo / redo': 'Скасувати / повторити',
        'Save (download, or to your server) / export': 'Зберегти (завантажити або на ваш сервер) / експорт',
        'Alt': 'Клавіша Alt',
        'Escape': 'Клавіша Esc',
        'A click in the middle puts the code\'s cursor on that line; the cursor in the code marks its record, key or value. Problems (a record with a value too few, indentation that is not a whole level, a missing blank line) are listed above the code with their line - click one to go there.':
            'Клацання посередині ставить курсор коду на цей рядок; курсор у коді позначає свій запис, ключ або значення. Проблеми (запис, якому бракує значення, відступ не на цілий рівень, пропущений порожній рядок) перелічено над кодом із номером рядка - клацніть проблему, щоб перейти до неї.',
        'Enter keeps the indentation of the line; after a section name it starts the key block.': 'Enter зберігає відступ рядка; після назви розділу він починає блок ключів.',

        /* ---------- Messages ---------- */
        'The browser storage is full - download and delete documents under "My documents"': 'Сховище браузера заповнене - завантажте й видаліть документи в «Мої документи»',
        'The browser storage is full - delete or download documents under "My documents" first': 'Сховище браузера заповнене - спершу видаліть або завантажте документи в «Мої документи»',
        'The browser storage is full - delete or download some documents first': 'Сховище браузера заповнене - спершу видаліть або завантажте кілька документів',
        'The browser storage is full': 'Сховище браузера заповнене',
        'Nothing to undo': 'Нічого скасовувати',
        'Nothing to redo': 'Нічого повторювати',
        'Nothing changed': 'Нічого не змінилося',
        'Choose a section, key or record first': 'Спершу виберіть розділ, ключ або запис',
        'Choose a key or a record to move or duplicate it': 'Виберіть ключ або запис, щоб перемістити чи дублювати його',
        'This nested list has no records to add after': 'Цей вкладений список не має записів, після яких можна додати',
        'SHLS values have one line - the line breaks became spaces': 'Значення SHLS займають один рядок - розриви рядків стали пробілами',
        'Spaces around the value were removed - SHLS values cannot start with spaces': 'Пробіли навколо значення видалено - значення SHLS не можуть починатися з пробілів',
        'SHLS has no empty values (a blank line is skipped) - write a placeholder such as - or PH': 'SHLS не має порожніх значень (порожній рядок пропускається) - напишіть заповнювач, як-от - або PH',
        'A key needs a name': 'Ключ потребує назви',
        'A section needs a name': 'Розділ потребує назви',
        'A key block needs at least one key - add another key first': 'Блок ключів потребує щонайменше одного ключа - спершу додайте інший ключ',
        'This key is not there any more': 'Цього ключа більше немає',
        'This line is not there any more': 'Цього рядка більше немає',
        'This record is not there any more': 'Цього запису більше немає',
        'This is the first record': 'Це перший запис',
        'This is the last record': 'Це останній запис',
        'This is the first key': 'Це перший ключ',
        'This is the last key': 'Це останній ключ',
        'This document is empty already': 'Цей документ уже порожній',
        'All data is removed. "Undo" brings it back as long as the page is open.': 'Усі дані видалено. «Скасувати» поверне їх, поки сторінка відкрита.',
        'Start over': 'Почати заново',
        'The file is larger than 8 MB': 'Файл більший за 8 МБ',
        'The CSV file is empty': 'Файл CSV порожній',
        'The YAML package is not loaded yet': 'Пакет YAML ще не завантажено',
        'Downloaded': 'Завантажено',
        'Copied to the clipboard': 'Скопійовано в буфер обміну',
        'Code copied': 'Код скопійовано',
        '.shls downloaded': '.shls завантажено',
        'Replace': 'Замінити',
        'The document is removed from this browser for good. Download it first if you want to keep a copy.':
            'Документ буде остаточно видалено з цього браузера. Якщо хочете зберегти копію, спершу завантажте його.',
        'unknown format': 'невідомий формат',

        /* What SHLS cannot keep (opening JSON, YAML, CSV) */
        'An object inside a record becomes a list with this one object.': 'Об’єкт усередині запису стає списком із цим єдиним об’єктом.',
        'Plain values where SHLS expects records (in a list or as a section) become records with the one key "Value".': 'Прості значення там, де SHLS очікує записи (у списку або як розділ), стають записами з єдиним ключем «Value».',
        'Empty values become blank lines, which SHLS readers skip - the values after them move up. Write a placeholder such as -.': 'Порожні значення стають порожніми рядками, які програми читання SHLS пропускають, - наступні значення зсуваються вгору. Напишіть заповнювач, як-от -.',
        'Values with several lines are not supported by SHLS - they break the records apart.': 'Значення з кількох рядків SHLS не підтримує - вони розривають записи.',
        'Values that start or end with spaces lose them (and leading spaces change the indentation).': 'Значення, що починаються чи закінчуються пробілами, втрачають їх (а пробіли на початку змінюють відступ).',

        /* ---------- Problems in the code ---------- */
        'A tab in the indentation - SHLS counts spaces only, so this line is read as a section name': 'Табуляція у відступі - SHLS рахує лише пробіли, тому цей рядок читається як назва розділу',
        'SHLS readers ignore this line - its indentation does not fit the key block': 'Програми читання SHLS ігнорують цей рядок - його відступ не відповідає блоку ключів',
        /* Words that German keeps from the English, but Ukrainian does not */
        'Code': 'Код',
        'Export': 'Експорт',
        'Format': 'Формат',
        'Link': 'Посилання',
        'Token': 'Токен',
        'Name': 'Ім’я',
        /* ---------- Template placeholders (?template=) ---------- */
        'A line of section tags belongs between complete records': 'Рядок із тегами розділів шаблону має бути між повними записами',
        'A template stays as written - the encoder works on filled data': 'Шаблон залишається без змін - кодувальник працює із заповненими даними',
        'Sections of the template stay whole - make this change in the code': 'Розділи шаблону залишаються цілими - внесіть цю зміну в коді',
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
        'Also possible: <code>?src=&lt;URL of a .shls file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>shlseditor:ai</code>, <code>shlseditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Також можна: <code>?src=&lt;URL of a .shls file&gt;</code> відкриває файл, <code>&amp;webhook=&lt;URL&gt;</code> зберігає туди цей документ. Редактор може відкриватися й в окремому вікні (<code>?embed=window</code>), а ваша сторінка може передати йому власний промпт для ШІ та ключ сеансу, щоб ШІ надсилав результат на ваш сервер (<code>shlseditor:ai</code>, <code>shlseditor:key-request</code>) - див. «Редактор на вашому сайті» під редактором. Подробиці - у <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> SHLS on the left - or start with <b>New</b> and one of the templates. A section is its name, then its keys (indented by one space, the keys of a nested list one level deeper), exactly one blank line, then the records: one value per line in the order of the keys.':
            '<b>Пишіть</b> SHLS ліворуч - або почніть із <b>Новий</b> та одного із шаблонів. Розділ - це його назва, потім його ключі (з відступом в один пробіл, ключі вкладеного списку на рівень глибше), рівно один порожній рядок, а потім записи: одне значення на рядок у порядку ключів.',
        'The middle shows each section with its <b>key block</b> and its <b>records</b>, the keys as labels; nested lists fold. It reads the code exactly as the reference SHLSDecoder does.':
            'Посередині показано кожен розділ із його <b>блоком ключів</b> і <b>записами</b>, ключі як підписи; вкладені списки згортаються. Код читається точно так, як це робить еталонний SHLSDecoder.',
        '<b>Click a value, a key or a section name</b> to change it right there. <b>Enter</b> or a click elsewhere writes the change into the code (one step for Undo), <b>Escape</b> cancels. The buttons above add, duplicate, move and remove records and keys - a key added or removed is added to or removed from every record.':
            '<b>Клацніть значення, ключ або назву розділу</b>, щоб змінити їх просто там. <b>Enter</b> або клацання деінде записує зміну в код (один крок для «Скасувати»), <b>Escape</b> скасовує. Кнопки вгорі додають, дублюють, переміщують і видаляють записи та ключі - доданий чи видалений ключ додається до кожного запису або видаляється з нього.',
        '<b>Record</b> on the right shows the selected record as a form; <b>Insert</b> adds records, keys and sections; <b>Convert</b> counts the tokens against JSON and converts to JSON, YAML, CSV and JSON Lines; <b>Outline</b> lists the sections.':
            '<b>Запис</b> праворуч показує вибраний запис як форму; <b>Вставка</b> додає записи, ключі й розділи; <b>Конвертер</b> порівнює кількість токенів із JSON і перетворює на JSON, YAML, CSV і JSON Lines; <b>План</b> перелічує розділи.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser. <b>Export</b> saves it as SHLS, JSON, YAML, CSV or text.':
            '<b>Мої документи</b> (кнопка з текою вгорі ліворуч) показують усі документи, що зберігаються в цьому браузері. <b>Експорт</b> зберігає документ як SHLS, JSON, YAML, CSV або текст.',
    },

    patterns: [
        /* ---------- Status lines and counts ---------- */
        ['^(\\d+) (?:line|lines) · ([\\d.]+ K?B) · (\\d+) (?:section|sections)$', (m, l, s, k) => `${l} ${getPlural(l, 'рядок', 'рядки', 'рядків')} · ${formatSizeUnit(s)} · ${k} ${getPlural(k, 'розділ', 'розділи', 'розділів')}`],
        ['^([\\d,]+) bytes$', (m, b) => formatSize(m)],
        ['^(\\d+) (?:record|records) · (\\d+) (?:key|keys)$', (m, r, k) => `${r} ${translateRecords(r)} · ${k} ${translateKeys(k)}`],
        ['^(\\d+) (?:record|records) · (\\d+) (?:key|keys) · line (\\d+)$', (m, r, k, l) => `${r} ${translateRecords(r)} · ${k} ${translateKeys(k)} · рядок ${l}`],
        ['^(\\d+) (?:record|records) · line (\\d+)$', (m, r, l) => `${r} ${translateRecords(r)} · рядок ${l}`],
        ['^(\\d+) (?:record|records)$', (m, r) => `${r} ${translateRecords(r)}`],
        ['^(\\d+) (?:problem|problems)$', (m, k) => `${k} ${getPlural(k, 'проблема', 'проблеми', 'проблем')}`],
        ['^nested list · (\\d+) (?:key|keys)$', (m, k) => `вкладений список · ${k} ${translateKeys(k)}`],
        ['^(nested list · )?level (\\d+) · line (\\d+)$', (m, nl, l, z) => `${nl ? 'вкладений список · ' : ''}рівень ${l} · рядок ${z}`],
        ['^record (\\d+) of (\\d+) · lines (\\d+)-(\\d+)$', 'запис $1 з $2 · рядки $3-$4'],
        ['^SHLS needs about (\\d+) % fewer tokens than the same data as JSON - approximate tokens of common AI models\\.$', 'SHLS потребує приблизно на $1 % менше токенів, ніж ті самі дані в JSON, - приблизна оцінка токенів поширених моделей ШІ.'],
        ['^The same data as JSON needs about as many tokens - approximate tokens of common AI models\\.$', 'Ті самі дані в JSON потребують приблизно стільки ж токенів - приблизна оцінка токенів поширених моделей ШІ.'],
        ['^The records of "(.+)": its keys are the columns, a nested list is one cell with JSON\\.$', 'Записи «$1»: його ключі - це стовпці, вкладений список - одна клітинка з JSON.'],
        ['^One record of "(.+)" per line\\.$', 'Один запис «$1» на рядок.'],
        ['^"(.+)" has no records$', '«$1» не має записів'],

        /* ---------- Problems above the code ---------- */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'помилка', 'помилки', 'помилок')}`],
        ['^(\\d+) (?:note|notes)$', (m, k) => `${k} ${getPlural(k, 'зауваження', 'зауваження', 'зауважень')}`],
        ['^· (\\d+) (?:note|notes)$', (m, k) => `· ${k} ${getPlural(k, 'зауваження', 'зауваження', 'зауважень')}`],
        ['^Line (\\d+)$', 'Рядок $1'],
        ['^Indented by (\\d+) (?:space|spaces) - not a whole level \\((\\d+) (?:space|spaces) per level\\)$', (m, a, b) => `Відступ ${a} ${getPlural(a, 'пробіл', 'пробіли', 'пробілів')} - не цілий рівень (${b} ${getPlural(b, 'пробіл', 'пробіли', 'пробілів')} на рівень)`],
        ['^Indented (\\d+) levels deeper than the line above - one level at a time$', (m, k) => `Відступ на ${k} ${getPlural(k, 'рівень', 'рівні', 'рівнів')} глибший, ніж у рядку вище, - по одному рівню за раз`],
        ['^"(.+)" has no key block yet - these lines are read as its keys \\(the key block follows the section name directly\\)$', '«$1» ще не має блоку ключів - ці рядки читаються як його ключі (блок ключів іде одразу після назви розділу)'],
        ['^The key "(.+)" is twice in the key block - only one of them keeps its values\\. Is the blank line between the key block and the records missing\\?$', 'Ключ «$1» двічі трапляється в блоці ключів - лише один із них зберігає свої значення. Можливо, бракує порожнього рядка між блоком ключів і записами?'],
        ['^"(.+)" looks like a value but stands in the key block - records follow the key block after exactly one blank line$', '«$1» схоже на значення, але стоїть у блоці ключів - записи йдуть після блоку ключів через рівно один порожній рядок'],
        ['^(\\d+) blank lines after the key block of "(.+)" - exactly one belongs there$', (m, k, s) => `${k} ${getPlural(k, 'порожній рядок', 'порожні рядки', 'порожніх рядків')} після блоку ключів «${s}» - там має бути рівно один`],
        ['^This record of "(.+)" has (\\d+) of (\\d+) values - its last keys are missing in the data$', 'Цей запис «$1» має $2 з $3 значень - його останніх ключів немає в даних'],
        ['^No blank line before this record of "(.+)" while the others have one - the record above may have more values than the key block \\((\\d+)\\)$', 'Перед цим записом «$1» немає порожнього рядка, хоча інші його мають, - можливо, запис вище має більше значень, ніж блок ключів ($2)'],
        ['^A blank line inside a record of "(.+)" - the record may have fewer values than the key block \\((\\d+)\\)$', 'Порожній рядок усередині запису «$1» - можливо, запис має менше значень, ніж блок ключів ($2)'],

        /* ---------- Messages with names ---------- */
        ['^"(.+)" has no key block - write its keys first$', '«$1» не має блоку ключів - спершу напишіть його ключі'],
        ['^"(.+)" has no key block$', '«$1» не має блоку ключів'],
        ['^There is already a section "(.+)"$', 'Розділ «$1» уже є'],
        ['^There is no section "(.+)"$', 'Розділу «$1» немає'],
        ['^Remove the section "(.+)"\\?$', 'Видалити розділ «$1»?'],
        ['^Its key block and its (\\d+) (?:record is|records are) removed\\. "Undo" brings them back\\.$', (m, k) => `Його блок ключів і ${+k === 1 ? 'його запис буде видалено' : `${k} ${translateRecords(k)} буде видалено`}. «Скасувати» поверне їх.`],
        ['^Remove the key "(.+)"\\?$', 'Видалити ключ «$1»?'],
        ['^Its value is removed from every record of "(.+)" \\((\\d+)\\)\\. "Undo" brings it back\\.$', 'Його значення буде видалено з кожного запису «$1» ($2). «Скасувати» поверне його.'],
        ['^Path copied: (.*)$', 'Шлях скопійовано: $1'],
        ['^Line (\\d+): (.*)$', 'Рядок $1: $2'],
        ['^"(.+)" converted from ([\\w ]+)$', '«$1» перетворено з $2'],
        ['^SHLS cannot keep all of this data: (.*)$', 'SHLS не може зберегти всі ці дані: $1'],
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
        ['^"(.+)" is not a file the editor can open$', '«$1» - не файл, який редактор може відкрити'],
        ['^Opened "(.+)" - converted from ([\\w ]+)$', '«$1» відкрито - перетворено з $2'],
        ['^Opened "(.+)" - it is now in "My documents"$', '«$1» відкрито - тепер він у «Мої документи»'],
        ['^"(.+)" could not be opened: (.*)$', '«$1» не вдалося відкрити: $2'],
        ['^The addition is not valid SHLS - it is open as a new document "(.+)"$', 'Доповнення - некоректний SHLS; його відкрито як новий документ «$1»'],
        ['^(.+) - the addition is open as a new document "(.+)"$', '$1 - доповнення відкрито як новий документ «$2»'],
        ['^Document received - (\\d+) (?:problem|problems) found, see above the code$', (m, k) => `Документ отримано - знайдено ${k} ${getPlural(k, 'проблему', 'проблеми', 'проблем')}, див. над кодом`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '«$1» змінено ШІ - «Скасувати» поверне все назад'],
        ['^"(.+)" duplicated$', '«$1» продубльовано'],
        ['^Delete "(.+)"\\?$', 'Видалити «$1»?'],
        ['^"(.+)" deleted$', '«$1» видалено'],

        /* ---------- AI Assistant ---------- */
        ['^Part (\\d+) of (\\d+) received$', 'Частину $1 з $2 отримано'],
        ['^Open the other (?:link|links) from the AI too \\(still missing: part (.+)\\)\\.$',
            'Відкрийте й інші посилання від ШІ (ще бракує частини $1).'],
        ['^Part (\\d+) of (\\d+) received - paste the other (?:link|links) too \\(missing: (.+)\\)$', 'Частину $1 з $2 отримано - вставте й інші посилання (бракує: $3)'],
        ['^The AI sends the document to (.+) with a key that only works for this session\\. What you paste into your AI is handled by its provider\\.$',
            'ШІ надсилає документ на $1 із ключем, який діє лише в цьому сеансі. Те, що ви вставляєте у свій ШІ, обробляє його провайдер.'],
        ['^The AI sends its result to (.+) by itself, and it opens here\\. If it answers with a link, paste its answer below\\.$',
            'ШІ сам надсилає свій результат на $1, і він відкривається тут. Якщо ШІ відповідає посиланням, вставте його відповідь нижче.'],
        ['^No key from (.+) - the prompt asks the AI for a link instead$', 'Немає ключа від $1 - натомість промпт просить ШІ надіслати посилання'],
        ['^Prompt copied - the AI sends its result to (.+)$', 'Промпт скопійовано - ШІ надішле свій результат на $1'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Відкрити $1'],
    ],
};
