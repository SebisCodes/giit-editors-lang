/* Ukrainian texts of the QR editor: the bar, the work area (code, QR code,
   content, design, check), its dialogs and messages, and the problems the
   editor finds in the QR document. What all editors share is in common.js;
   how the dictionaries are used is described in i18n.js. Names of documents,
   design keys and values, colors and content formats stay as they are: the
   patterns copy them into the Ukrainian text. */

import { formatTime, getPlural } from './format.js';

/* Ukrainian plural: getPlural(5, 'рядок', 'рядки', 'рядків') -> 'рядків' (1, 21 … / 2-4, 22-24 … / the rest) */

/* "0.25" -> "0,25" (decimal comma) */
/**
 * Writes the decimal separator of the language into a number.
 * @param {string} s - the number with a decimal point.
 * @returns {string} the text in the language.
 */
const formatDecimal = s => String(s).replace('.', ',');
/* "412 B" / "1.5 KB" / "523 bytes" -> Ukrainian number and unit */
const UNIT = { B: 'Б', KB: 'КБ', MB: 'МБ', GB: 'ГБ' };
/**
 * Translates the unit of a size text ("123 bytes").
 * @param {string} s - the English size text.
 * @returns {string} the text in the language.
 */
const formatSize = s => {
    const m = /^(\d+) bytes$/.exec(s);
    return m ? `${m[1]} ${getPlural(m[1], 'байт', 'байти', 'байтів')}` : s.replace(/^([\d.]+) (B|KB|MB|GB)$/, (x, v, u) => `${formatDecimal(v)} ${UNIT[u]}`);
};

/* When a document was last changed (files.js): "just now", "5 min ago", "Oct 25, 2026" … */

/* The content types (payload.js TYPE_NAMES) where a message names them in English. */
const TYPES = {
    Link: 'Посилання', Text: 'Текст', WiFi: 'Wi-Fi', Contact: 'Контакт', Email: 'Ел. пошта', SMS: 'SMS', Phone: 'Телефон', Location: 'Місце',
    Event: 'Подія', Crypto: 'Криптовалюта', 'SEPA payment': 'Платіж SEPA', 'Swiss QR bill': 'Швейцарський QR-рахунок',
};
/* What a design value may be (qrdoc.js KEYS hint); lists of values stay as they are. */
/**
 * Translates the text the pattern found (hint in the English pattern).
 * @param {string} h - the English text the pattern found.
 * @returns {string} the text in the language.
 */
function translateHint(h) {
    const H = {
        'auto or 1 to 40': 'auto або від 1 до 40', 'auto or 0 to 7': 'auto або від 0 до 7', '0 to 20 modules': 'від 0 до 20 модулів',
        'a color like #1d2b53': 'колір, наприклад #1d2b53', '0 to 360 degrees': 'від 0 до 360 градусів',
        'a color like #ffffff, or transparent': 'колір, наприклад #ffffff, або transparent', '5 to 30 percent': 'від 5 до 30 відсотків',
    };
    if (H[h]) return H[h];
    const m = /^none, (.+) or a picture as (data:\S+)$/.exec(h);
    return m ? `none, ${m[1]} або зображення як ${m[2]}` : h;
}

/**
 * Returns the word "byte" in the form for a count.
 * @param {string|number} n - the English text the pattern found.
 * @returns {string} the text in the language.
 */
const getByteWord = n => { n = +n; const a = n % 10, b = n % 100; return a === 1 && b !== 11 ? 'байт' : a >= 2 && a <= 4 && (b < 12 || b > 14) ? 'байти' : 'байтів'; };

export default {
    text: {
        'Module shape': 'Форма модулів',
        'Eye frame': 'Рамка ока',
        'Eye center': 'Центр ока',
        /* ---------- Top bar ---------- */
        'QR Editor - home': 'Редактор QR - на головну',
        'QR Editor': 'Редактор QR',
        'File': 'Файл',
        'My documents (Ctrl+O)': 'Мої документи (Ctrl+O)',
        'My documents': 'Мої документи',
        'New QR code': 'Новий QR-код',
        'New': 'Новий',
        'A web address - opens the page': 'Вебадреса - відкриває сторінку',
        'Join the network without typing the password': 'Підключення до мережі без введення пароля',
        'vCard or MeCard - saves name, phone and email': 'vCard або MeCard - зберігає ім’я, телефон і e-mail',
        'Adds a date to the calendar': 'Додає дату в календар',
        'Address, subject and text': 'Адреса, тема й текст',
        'Number and message': 'Номер і повідомлення',
        'Calls a number': 'Телефонує на номер',
        'Opens a place in the map app': 'Відкриває місце в застосунку карт',
        'EPC GiroCode for banking apps in the euro area': 'EPC GiroCode для банківських застосунків єврозони',
        'The QR code of a Swiss payment slip': 'QR-код швейцарського платіжного бланка',
        'Crypto payment': 'Криптоплатіж',
        'Bitcoin, Ethereum and others': 'Bitcoin, Ethereum та інші',
        'Any text': 'Будь-який текст',
        'The welcome example': 'Вітальний приклад',
        'A designed WiFi code with logo and caption': 'Оформлений код Wi-Fi з логотипом і підписом',
        'Open a .qr file, or read a QR code from a picture (you can also drag it into the window or paste it)':
            'Відкрити файл .qr або зчитати QR-код із зображення (його також можна перетягнути у вікно чи вставити)',
        'Open file…': 'Відкрити файл…',
        'Read a QR code with the camera': 'Зчитати QR-код камерою',
        'Read code': 'Зчитати код',
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
        'Save the QR code as an SVG picture (Ctrl+S)': 'Зберегти QR-код як зображення SVG (Ctrl+S)',
        'Download SVG': 'Завантажити SVG',
        'SVG, PNG, PDF, EPS, many codes from a table (Ctrl+E)': 'SVG, PNG, PDF, EPS, багато кодів із таблиці (Ctrl+E)',
        'Export…': 'Експорт…',

        /* ---------- Views and work area ---------- */
        'View': 'Вигляд',
        'Code': 'Код',
        'QR code': 'QR-код',
        'Edit': 'Правка',
        'QR document': 'QR-документ',
        'Copy the QR document to the clipboard': 'Скопіювати QR-документ у буфер обміну',
        'Copy code': 'Копіювати код',
        'Copy': 'Копіювати',
        'QR document: design lines, a line ---, then the content': 'QR-документ: рядки оформлення, рядок ---, потім вміст',
        'Drag to change the width of the code area': 'Перетягніть, щоб змінити ширину області коду',
        'Drag to change the width': 'Перетягніть, щоб змінити ширину',
        'Show the details of the scan check': 'Показати подробиці перевірки сканування',
        'Checking…': 'Перевірка…',
        'Type the content below the line --- in the code, or choose a type under Edit.':
            'Введіть вміст під рядком --- у коді або виберіть тип у «Правці».',
        'What the code holds: link, WiFi, contact, payment …': 'Що містить код: посилання, Wi-Fi, контакт, платіж …',
        'Content': 'Вміст',
        'Colors, shapes, logo, caption and frame': 'Кольори, форми, логотип, підпис і рамка',
        'Design': 'Дизайн',
        'Scan check, contrast, print size': 'Перевірка сканування, контраст, розмір друку',
        'Check': 'Перевірка',
        'Open it here': 'Відкрити тут',
        'Drop a .qr file or a picture with a QR code here': 'Перетягніть сюди файл .qr або зображення з QR-кодом',
        'Hide': 'Сховати',
        'Show': 'Показати',
        'No code': 'Немає коду',
        'Scans': 'Сканується',
        'Scans in good conditions': 'Сканується в добрих умовах',
        'Does not scan': 'Не сканується',
        'version': 'версія',
        'error correction': 'корекція помилок',

        /* ---------- Export ---------- */
        'Export': 'Експорт',
        'Close': 'Закрити',
        'File name': 'Ім’я файлу',
        'Format': 'Формат',
        'Vector (print, any size)': 'Вектор (друк, будь-який розмір)',
        'SVG picture': 'Зображення SVG',
        'EPS (for print shops)': 'EPS (для друкарні)',
        'Picture': 'Зображення',
        'The content as text': 'Вміст як текст',
        'QR document (.qr)': 'QR-документ (.qr)',
        'Many codes': 'Багато кодів',
        'Many codes from a table': 'Багато кодів із таблиці',
        'Width in pixels': 'Ширина в пікселях',
        'Resolution (dpi)': 'Роздільність (dpi)',
        'Width in mm': 'Ширина в мм',
        'Each code as': 'Кожен код як',
        'SVG files in a ZIP': 'Файли SVG у ZIP',
        'PNG files in a ZIP': 'Файли PNG у ZIP',
        'One PDF, one code per page': 'Один PDF, один код на сторінку',
        'File names from': 'Імена файлів із',
        'Table (CSV or TSV, first row = column names)': 'Таблиця (CSV або TSV, перший рядок = назви стовпців)',
        'Open a table…': 'Відкрити таблицю…',
        'Result': 'Результат',
        'SVG, PNG, PDF, EPS and the .qr document in one ZIP': 'SVG, PNG, PDF, EPS і документ .qr в одному ZIP',
        'All formats (ZIP)': 'Усі формати (ZIP)',
        'Download': 'Завантажити',
        'There is no code yet - see the problems above the code.': 'Коду ще немає - див. проблеми над кодом.',
        '(The picture is made when you download it.)': '(Зображення створюється під час завантаження.)',
        '(A vector PDF, one page as large as the code - made when you download it.)':
            '(Векторний PDF, одна сторінка розміром з код - створюється під час завантаження.)',
        '(A vector EPS for print shops - made when you download it.)': '(Векторний EPS для друкарні - створюється під час завантаження.)',
        'Downloaded': 'Завантажено',
        'ZIP downloaded: SVG, PDF, EPS, PNG, the .qr document and the content': 'ZIP завантажено: SVG, PDF, EPS, PNG, документ .qr і вміст',
        'Picture copied - paste it into a document or a chat': 'Зображення скопійовано - вставте його в документ або чат',
        'This browser does not let the page copy pictures - download it instead': 'Цей браузер не дозволяє сторінці копіювати зображення - завантажте його натомість',
        'Copied to the clipboard': 'Скопійовано в буфер обміну',
        'Row number': 'Номер рядка',
        'Column': 'Стовпець',
        'Write placeholders like {{url}} into the content (or the caption) - each row of the table fills them.':
            'Впишіть заповнювачі на кшталт {{url}} у вміст (або підпис) - кожен рядок таблиці їх заповнює.',
        'Placeholders in the document': 'Заповнювачі в документі',
        'Not in the table': 'Немає в таблиці',
        'The table is larger than 10 MB': 'Таблиця більша за 10 МБ',
        'Paste a table with a header row and at least one row': 'Вставте таблицю з рядком заголовків і щонайменше одним рядком',
        'No row made a code - see the content': 'Жоден рядок не дав коду - перевірте вміст',

        /* ---------- Scan ---------- */
        'Read a QR code': 'Зчитати QR-код',
        'Starting the camera…': 'Запуск камери…',
        'The camera image is read in your browser only - nothing is recorded or sent.':
            'Зображення з камери зчитується лише у вашому браузері - нічого не записується й не надсилається.',
        'Choose a picture…': 'Вибрати зображення…',
        'This browser gives no camera to the page - choose a picture instead.': 'Цей браузер не надає сторінці доступ до камери - виберіть зображення.',
        'Hold the QR code in front of the camera.': 'Тримайте QR-код перед камерою.',
        'The camera is not allowed - allow it in the browser (inside another website the page must allow it too), or choose a picture.':
            'Доступ до камери заборонено — дозвольте його в браузері (усередині іншого сайту його має дозволити й та сторінка) або виберіть зображення.',
        'No camera found - choose a picture instead.': 'Камеру не знайдено - виберіть зображення.',

        /* ---------- My documents ---------- */
        'Search by name': 'Пошук за назвою',
        'Search your documents': 'Пошук у ваших документах',
        'Open a .qr file or a picture with a QR code as a new document': 'Відкрити файл .qr або зображення з QR-кодом як новий документ',
        'New document': 'Новий документ',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Клацніть документ, щоб відкрити його. Документи зберігаються лише в цьому браузері - нічого не вивантажується на сервер. Очищення даних сайту в браузері видалить їх, тому завантажте ті, які хочете зберегти.',
        'Download every document as a .qr file in one ZIP': 'Завантажити кожен документ як файл .qr в одному ZIP',
        'Download all (ZIP)': 'Завантажити все (ZIP)',
        'Rename': 'Перейменувати',
        'Duplicate': 'Дублювати',
        'Download as .qr': 'Завантажити як .qr',
        'Delete': 'Видалити',
        'New name': 'Нове ім’я',
        'This document is open': 'Цей документ відкрито',
        'Click to open this document': 'Клацніть, щоб відкрити цей документ',
        'No documents yet.': 'Документів поки немає.',
        'The document is removed from this browser for good. Download it first if you want to keep a copy.':
            'Документ буде остаточно видалено з цього браузера. Якщо хочете зберегти копію, спершу завантажте його.',

        /* ---------- AI Assistant ---------- */
        'Any AI can work with you - ChatGPT, Claude, Gemini, Copilot.': 'З вами може працювати будь-який ШІ - ChatGPT, Claude, Gemini, Copilot.',
        'Connected AI': 'Під’єднаний ШІ',
        'Paste it into your AI and say what the code should hold or how it should look.':
            'Вставте його у свій ШІ та скажіть, що має містити код або як він має виглядати.',
        'Connected to': 'Під’єднано до',
        'the AI sends its result there, and it opens here.': 'ШІ надсилає туди свій результат, і він відкривається тут.',
        'What': 'Що',
        'tells the AI': 'повідомляє ШІ',
        'The AI should': 'ШІ має',
        'Change “': 'Змінити «',
        '”': '»',
        'Make a new document': 'Створити новий документ',
        'The AI\'s answer (or press Ctrl+V anywhere):': 'Відповідь ШІ (або натисніть Ctrl+V будь-де):',
        'The QR document travels in the link after the “#”, which no server sees. What you paste into your AI is handled by its provider.':
            'QR-документ передається в посиланні після «#», якого не бачить жоден сервер. Те, що ви вставляєте у свій ШІ, обробляє його провайдер.',
        'The prompt - copy it with Ctrl+C': 'Промпт - скопіюйте його через Ctrl+C',
        'Copy prompt': 'Копіювати промпт',
        '(no key yet)': '(ключа поки немає)',
        '(key valid while the editor is open)': '(ключ дійсний, поки редактор відкрито)',
        'The link could not be read': 'Не вдалося прочитати посилання',
        'The document in this link is incomplete or damaged. If the AI\'s link was split over several lines (as in a terminal), copy the whole answer and paste it into the editor with Ctrl+V - the editor joins the lines.':
            'Документ у цьому посиланні неповний або пошкоджений. Якщо посилання ШІ розбите на кілька рядків (як у терміналі), скопіюйте всю відповідь і вставте її в редактор через Ctrl+V - редактор з’єднає рядки.',
        'Loading…': 'Завантаження…',
        'Taken over by your editor': 'Передано у ваш редактор',
        'The document is now in the QR Editor tab you already had open. Switch to that tab, or open it here.':
            'Документ тепер у вкладці редактора QR, яку ви вже мали відкритою. Перейдіть до тієї вкладки або відкрийте його тут.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)':
            'Копіювання тут заборонене - текст виділено нижче: натисніть Ctrl+C (⌘C)',
        'Prompt copied - paste it into your AI and say what it should write': 'Промпт скопійовано - вставте його у свій ШІ та скажіть, що треба написати',
        'This link is incomplete or damaged - please ask the AI to send it again': 'Посилання неповне або пошкоджене - попросіть ШІ надіслати його ще раз',

        /* ---------- Save to your server ---------- */
        'Save to your server': 'Збереження на ваш сервер',
        'Webhook address': 'Адреса вебхука',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)':
            '(необов’язково, надсилається як «Authorization: Bearer …»; зберігається, доки відкрита ця вкладка)',
        'Send automatically a few seconds after each change (otherwise only when you click':
            'Надсилати автоматично через кілька секунд після кожної зміни (інакше лише коли ви натискаєте',
        'or press Ctrl+S)': 'або Ctrl+S)',
        'Only for “': 'Лише для «',
        '” (other documents use the general address)': '» (інші документи використовують загальну адресу)',
        'What your server receives': 'Що отримує ваш сервер',
        'A POST request with JSON (your server must allow CORS from https://qr.giit.ch):':
            'POST-запит із JSON (ваш сервер має дозволяти CORS з https://qr.giit.ch):',
        'Embed the editor in your website': 'Вбудувати редактор у ваш сайт',
        'Send now': 'Надіслати зараз',
        'Save setting': 'Зберегти налаштування',

        /* ---------- Help ---------- */
        'How it works': 'Як це працює',
        'Keyboard shortcuts': 'Поєднання клавіш',
        'Undo / redo': 'Скасувати / повторити',
        'Save (download SVG, or to your server)': 'Зберегти (завантажити SVG або на ваш сервер)',
        'Paste a picture with a QR code to read it': 'Вставити зображення з QR-кодом, щоб зчитати його',
        'Wrap long lines in the code': 'Переносити довгі рядки в коді',

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
        /* fragments: New document "<name>" - …, "<name>" is open. … */
        'your other documents are under "My documents"': 'інші ваші документи в «Мої документи»',
        'from the AI - your other documents are unchanged': 'від ШІ - інші ваші документи не змінилися',
        'is open. My documents: open, rename, duplicate or delete your documents (Ctrl+O)':
            'відкрито. Мої документи: відкривайте, перейменовуйте, дублюйте або видаляйте свої документи (Ctrl+O)',
        'is neither a .qr file nor a picture': '- не файл .qr і не зображення',
        'opened - it is now in "My documents"': 'відкрито - тепер він у «Мої документи»',
        'changed by the AI - "Undo" takes it back': 'змінено ШІ - «Скасувати» поверне все назад',
        'The file is larger than 20 MB': 'Файл більший за 20 МБ',
        'No QR code found in the picture': 'На зображенні не знайдено QR-коду',
        'Logo added - it is part of the document': 'Логотип додано - він є частиною документа',
        'The picture is larger than 5 MB': 'Зображення більше за 5 МБ',
        'The SVG is larger than 200 KB': 'SVG більший за 200 КБ',
        'QR document copied': 'QR-документ скопійовано',
        'There is no code to download yet': 'Ще немає коду для завантаження',
        'SVG downloaded': 'SVG завантажено',
        'Design reset - "Undo" brings it back': 'Дизайн скинуто - «Скасувати» поверне його',
        'Type a number into the reference field first': 'Спершу введіть число в поле референсу',
        'Reference with check digits written': 'Референс із контрольними цифрами записано',
        /* the name of a document read from a picture: "<kind> read" */
        'read': '(скан)',
        /* names of the templates under New */
        'Guest WiFi': 'Wi-Fi для гостей',
        'Bitcoin': 'Bitcoin',

        /* ---------- Content ---------- */
        'Kind of content': 'Тип вмісту',
        'Link': 'Посилання',
        'Text': 'Текст',
        'WiFi': 'Wi-Fi',
        'Contact': 'Контакт',
        'Email': 'Ел. пошта',
        'SMS': 'SMS',
        'Phone': 'Телефон',
        'Location': 'Місце',
        'Event': 'Подія',
        'Crypto': 'Криптовалюта',
        'SEPA payment': 'Платіж SEPA',
        'Swiss QR bill': 'Швейцарський QR-рахунок',
        'Make a QR reference from a number': 'QR-референс із числа',
        'Make an RF reference from a number': 'RF-референс із числа',
        'The code opens this address. A link shortener or redirect service makes the code depend on that service - the editor warns about it.':
            'Код відкриває цю адресу. Скорочувач посилань або сервіс переадресації робить код залежним від цього сервісу - редактор про це попереджає.',
        'Any text; phones show it as it is.': 'Будь-який текст; телефони показують його як є.',
        'Phones join the network when the code is scanned (Android, iPhone with iOS 11 and later).':
            'Телефони підключаються до мережі після сканування коду (Android, iPhone з iOS 11 і новіше).',
        'vCard is read by all phones; MeCard makes a smaller code with fewer fields.':
            'vCard читають усі телефони; MeCard дає менший код із меншою кількістю полів.',
        'Opens a new email with address, subject and text.': 'Відкриває новий лист з адресою, темою й текстом.',
        'Opens a text message to this number.': 'Відкриває SMS на цей номер.',
        'Offers to call this number - with the country code it works everywhere.':
            'Пропонує зателефонувати на цей номер - з кодом країни це працює всюди.',
        'Opens the place in the map app.': 'Відкриває місце в застосунку карт.',
        'Adds the event to the calendar (times are local times).': 'Додає подію в календар (час - місцевий).',
        'A payment request for wallet apps.': 'Запит на оплату для застосунків-гаманців.',
        'For banking apps in the euro area (SEPA credit transfer, EPC GiroCode). Error correction M as the standard requires.':
            'Для банківських застосунків єврозони (кредитовий переказ SEPA, EPC GiroCode). Корекція помилок M, як вимагає стандарт.',
        'The QR code of a Swiss QR bill (Implementation Guidelines 2.3 / 2.4). Drawn with the Swiss cross and error correction M; print it 46 × 46 mm.':
            'QR-код швейцарського QR-рахунку (Настанови з реалізації 2.3 / 2.4). Малюється зі швейцарським хрестом і корекцією помилок M; друкуйте його розміром 46 × 46 мм.',
        'Address (URL)': 'Адреса (URL)',
        'Network name (SSID)': 'Назва мережі (SSID)',
        'Security': 'Захист',
        'WEP (old)': 'WEP (застарілий)',
        'None (open network)': 'Немає (відкрита мережа)',
        'Password': 'Пароль',
        'Hidden network': 'Прихована мережа',
        'vCard 3.0 (all phones)': 'vCard 3.0 (усі телефони)',
        'MeCard (smaller code)': 'MeCard (менший код)',
        'First name': 'Ім’я',
        'Last name': 'Прізвище',
        'Company': 'Компанія',
        'Job title': 'Посада',
        'Mobile': 'Мобільний',
        'Phone (work)': 'Телефон (робочий)',
        'Website': 'Вебсайт',
        'Street and number': 'Вулиця і номер',
        'Postal code': 'Поштовий індекс',
        'City': 'Місто',
        'Region': 'Регіон',
        'Country': 'Країна',
        'Note': 'Примітка',
        'To': 'Кому',
        'Subject': 'Тема',
        'Message': 'Повідомлення',
        'Phone number': 'Номер телефону',
        'Latitude': 'Широта',
        'Longitude': 'Довгота',
        'Name of the place (optional)': 'Назва місця (необов’язково)',
        'Title': 'Назва',
        'All day': 'Увесь день',
        'Start': 'Початок',
        'End': 'Кінець',
        'Place': 'Місце',
        'Description': 'Опис',
        'Currency': 'Валюта',
        'Address': 'Адреса',
        'Amount (optional)': 'Сума (необов’язково)',
        'Recipient (optional)': 'Одержувач (необов’язково)',
        'Message (optional)': 'Повідомлення (необов’язково)',
        'Recipient': 'Одержувач',
        'BIC (optional)': 'BIC (необов’язково)',
        'Amount in EUR (optional)': 'Сума в EUR (необов’язково)',
        'Creditor reference RF… (or a message below)': 'Референс кредитора RF… (або повідомлення нижче)',
        'Message to the recipient': 'Повідомлення одержувачу',
        'Purpose code (optional, e.g. CHAR)': 'Код призначення (необов’язково, напр. CHAR)',
        'Note for the payer (optional)': 'Примітка для платника (необов’язково)',
        'IBAN or QR-IBAN of the creditor (CH or LI)': 'IBAN або QR-IBAN кредитора (CH або LI)',
        'Creditor name': 'Ім’я кредитора',
        'Street': 'Вулиця',
        'Number': 'Номер',
        'Town': 'Населений пункт',
        'Country (2 letters)': 'Країна (2 літери)',
        'Amount (empty: the payer fills it in)': 'Сума (порожньо: її вписує платник)',
        'Reference': 'Референс',
        'No reference': 'Без референсу',
        'QR reference (with a QR-IBAN)': 'QR-референс (з QR-IBAN)',
        'Creditor reference (RF…)': 'Референс кредитора (RF…)',
        'Reference number': 'Номер референсу',
        'Additional information (message)': 'Додаткова інформація (повідомлення)',
        'Billing information (optional, //S1/…)': 'Платіжна інформація (необов’язково, //S1/…)',
        'Payable by: name (optional)': 'Платник: ім’я (необов’язково)',

        /* ---------- Design ---------- */
        'A Swiss QR bill is always drawn as the standard requires: black squares on white, the Swiss cross, error correction M. These settings apply to the other codes.':
            'Швейцарський QR-рахунок завжди малюється так, як вимагає стандарт: чорні квадрати на білому, швейцарський хрест, корекція помилок M. Ці налаштування діють для інших кодів.',
        'Colors': 'Кольори',
        'Dark color': 'Темний колір',
        'Background': 'Тло',
        'Transparent background': 'Прозоре тло',
        'Gradient': 'Градієнт',
        'None': 'Немає',
        'Linear': 'Лінійний',
        'Radial': 'Радіальний',
        'Second color': 'Другий колір',
        'Angle': 'Кут',
        'Modules': 'Модулі',
        'Eyes': 'Очі',
        'Frame': 'Рамка',
        'Center': 'Центр',
        'Own color for the eyes': 'Власний колір очей',
        'Eye color': 'Колір очей',
        'Logo': 'Логотип',
        'No logo': 'Без логотипа',
        'Your own picture (PNG, JPEG, SVG, WebP) - it becomes part of the document':
            'Власне зображення (PNG, JPEG, SVG, WebP) - воно стає частиною документа',
        'Picture…': 'Зображення…',
        'Logo size': 'Розмір логотипа',
        'Remove the modules behind the logo': 'Прибрати модулі під логотипом',
        'Caption and frame': 'Підпис і рамка',
        'Caption': 'Підпис',
        'Position': 'Розташування',
        'Below the code': 'Під кодом',
        'Above the code': 'Над кодом',
        'Line': 'Лінія',
        'Filled': 'Заповнена',
        'Frame and caption color': 'Колір рамки й підпису',
        'Error correction and size': 'Корекція помилок і розмір',
        'Error correction': 'Корекція помилок',
        'Quiet zone (modules)': 'Вільна зона (модулі)',
        'Smallest version': 'Найменша версія',
        'Automatic': 'Автоматично',
        'Mask': 'Маска',
        'Use a higher error correction when it fits in the same size': 'Підвищувати рівень корекції помилок, якщо розмір не змінюється',
        'Removes all design lines - "Undo" brings them back': 'Видаляє всі рядки оформлення - «Скасувати» поверне їх',
        'Reset the design': 'Скинути дизайн',
        /* the pickers (small: one or two short words) */
        'Square': 'Квадрат',
        'Rounded': 'Округлі',
        'Dots': 'Крапки',
        'Soft squares': 'М’які квадрати',
        'Diamonds': 'Ромби',
        'Vertical bars': 'Стовпці',
        'Horizontal bars': 'Смужки',
        'Circle': 'Коло',
        'Leaf': 'Листок',
        'Web': 'Веб',
        'Mail': 'Пошта',
        'Chat': 'Чат',
        'Map pin': 'Мітка',
        'Calendar': 'Календар',
        'Person': 'Особа',
        'Payment card': 'Платіжна картка',
        'Star': 'Зірка',
        'Heart': 'Серце',

        /* ---------- Check ---------- */
        'Scan check': 'Перевірка сканування',
        'Scans reliably and reads back exactly the content': 'Надійно сканується й точно відтворює вміст',
        'Scans, but only in good conditions': 'Сканується, але лише в добрих умовах',
        'Reads back something else than the content': 'Зчитаний результат відрізняється від вмісту',
        'Normal size': 'Звичайний розмір',
        'Small (3 pixels per module)': 'Малий (3 пікселі на модуль)',
        'Blurred, with less contrast': 'Розмитий, з меншим контрастом',
        'The editor reads its own drawing with a QR decoder (jsQR) in your browser. Test the printed code with a phone as well.':
            'Редактор зчитує власне зображення QR-декодером (jsQR) у вашому браузері. Перевірте надрукований код ще й телефоном.',
        'The code': 'Код',
        'Version': 'Версія',
        'Data': 'Дані',
        'Logo covers': 'Логотип закриває',
        'Contrast': 'Контраст',
        'Print size': 'Розмір друку',
        'Scanning distance (cm)': 'Відстань сканування (см)',
        'Printed width (mm)': 'Ширина друку (мм)',
        'Problems': 'Проблеми',
        'No problems.': 'Проблем немає.',

        /* ---------- Problems ---------- */
        'A SEPA payment code uses error correction M, as the standard requires': 'Код платежу SEPA використовує корекцію помилок M, як вимагає стандарт',
        'The drawn code reads back something else than the content - check the content for characters the code cannot hold':
            'Зчитаний результат відрізняється від вмісту коду - перевірте, чи немає у вмісті символів, яких код не може вмістити',
        'The drawn code does not scan - raise the contrast, make the logo smaller or choose more error correction':
            'Намальований код не сканується - підвищте контраст, зменште логотип або виберіть вищу корекцію помилок',
        'The code scans, but not when it is small - simpler shapes, more contrast or more error correction help':
            'Код сканується, але не в малому розмірі - допоможуть простіші форми, більший контраст або вища корекція помилок',
        'The code scans, but not when it is blurred or the light is poor - simpler shapes, more contrast or more error correction help':
            'Код сканується, але не тоді, коли він розмитий або світло погане - допоможуть простіші форми, більший контраст або вища корекція помилок',
        'Light code on a dark background: many scanners read it, but some older ones do not - dark on light is safest':
            'Світлий код на темному тлі: багато сканерів його читають, але деякі старіші - ні; найнадійніше темне на світлому',
        'Transparent background: print the code only on a plain, light surface': 'Прозоре тло: друкуйте код лише на однотонній світлій поверхні',
        'Round eyes are read by phone cameras, but some scanner apps and devices only find square ones - for codes many people scan, square or rounded eyes are safer':
            'Круглі очі камери телефонів читають, але деякі застосунки й пристрої для сканування знаходять лише квадратні - для кодів, які сканує багато людей, надійніші квадратні або заокруглені очі',
        'The content is too long for a QR code at this error correction - shorten it or choose L':
            'Вміст задовгий для QR-коду з цією корекцією помилок - скоротіть його або виберіть L',
        'The IBAN is missing': 'Немає IBAN',
        'The IBAN has the wrong form (two letters, two digits, then letters and digits)': 'IBAN має неправильний вигляд (дві літери, дві цифри, потім літери й цифри)',
        'The check digits of the IBAN do not match - a typing error?': 'Контрольні цифри IBAN не збігаються - помилка під час введення?',
        'A QR reference has 27 digits': 'QR-референс має 27 цифр',
        'The check digit of the QR reference does not match': 'Контрольна цифра QR-референсу не збігається',
        'A creditor reference starts with RF and two check digits, 5 to 25 characters':
            'Референс кредитора починається з RF і двох контрольних цифр, від 5 до 25 символів',
        'The check digits of the creditor reference do not match': 'Контрольні цифри референсу кредитора не збігаються',
        'The code has no content yet': 'Код ще не має вмісту',
        'The address contains spaces - encode them as %20': 'Адреса містить пробіли - закодуйте їх як %20',
        'The address has no https:// - some scanners show it as text instead of opening it':
            'В адресі немає https:// - деякі сканери показують її як текст замість того, щоб відкрити',
        'The address uses http:// - the browser may warn that the page is not secure; use https:// if the site has it':
            'Адреса використовує http:// - браузер може попередити, що сторінка небезпечна; використовуйте https://, якщо сайт його підтримує',
        'This is not a valid address': 'Це неправильна адреса',
        'The network name (SSID) is missing': 'Немає назви мережі (SSID)',
        'The password is missing (or choose "None" for an open network)': 'Немає пароля (або виберіть «Немає» для відкритої мережі)',
        'A WEP key has 5, 13, 16 or 29 characters (or 10, 26, 32, 58 hex digits)': 'Ключ WEP має 5, 13, 16 або 29 символів (чи 10, 26, 32, 58 шістнадцяткових цифр)',
        'WEP is not secure - use WPA2 or WPA3 if your router has it': 'WEP небезпечний - використовуйте WPA2 або WPA3, якщо ваш роутер їх підтримує',
        'T:SAE is not in the WiFi standard and some scanners do not read it - T:WPA works for WPA2 and WPA3':
            'T:SAE немає в стандарті Wi-Fi, і деякі сканери його не читають - T:WPA працює для WPA2 і WPA3',
        'A WPA password has 8 to 63 characters': 'Пароль WPA має від 8 до 63 символів',
        'The contact has no name and no company': 'Контакт не має ні імені, ні компанії',
        'The email address looks wrong': 'Адреса e-mail виглядає неправильною',
        'No address - the email app opens with an empty "To"': 'Немає адреси - поштовий застосунок відкриється з порожнім полем «Кому»',
        'The phone number is missing': 'Немає номера телефону',
        'The phone number contains other characters than digits and +': 'Номер телефону містить інші символи, крім цифр і +',
        'Without the country code (+41 …) the number only works within the country': 'Без коду країни (+380 …) номер працює лише в межах країни',
        'Latitude and longitude are needed as numbers, for example 47.6779 and 8.6152': 'Широта й довгота мають бути числами, наприклад 47.6779 і 8.6152',
        'The latitude lies between -90 and 90, the longitude between -180 and 180': 'Широта лежить між -90 і 90, довгота - між -180 і 180',
        'The event has no BEGIN:VEVENT': 'Подія не має BEGIN:VEVENT',
        'The event has no END:VEVENT': 'Подія не має END:VEVENT',
        'The event has no title': 'Подія не має назви',
        'The event has no start': 'Подія не має початку',
        'The event ends before it starts': 'Подія закінчується раніше, ніж починається',
        'The address is missing': 'Немає адреси',
        'The amount must be a number with a point, for example 0.005': 'Сума має бути числом із крапкою, наприклад 0.005',
        'An Ethereum address has 0x and 40 hex digits': 'Адреса Ethereum має 0x і 40 шістнадцяткових цифр',
        'This does not look like a Bitcoin address': 'Це не схоже на адресу Bitcoin',
        'The second line is the version, 001 or 002': 'Другий рядок - версія, 001 або 002',
        'The third line should be 1 (UTF-8)': 'Третій рядок має бути 1 (UTF-8)',
        'The fourth line must be SCT': 'Четвертий рядок має бути SCT',
        'Version 001 needs a BIC': 'Версії 001 потрібен BIC',
        'The BIC has 8 or 11 letters and digits': 'BIC має 8 або 11 літер і цифр',
        'The recipient is missing': 'Немає одержувача',
        'The recipient has more than 70 characters': 'Одержувач має понад 70 символів',
        'The amount is between 0.01 and 999999999.99 EUR, with a point and at most two decimals':
            'Сума - від 0.01 до 999999999.99 EUR, із крапкою і щонайбільше двома знаками після неї',
        'The purpose code has 4 letters (for example CHAR, GDDS)': 'Код призначення має 4 літери (наприклад CHAR, GDDS)',
        'Either a reference or a message, not both': 'Або референс, або повідомлення, не обидва',
        'The message has more than 140 characters': 'Повідомлення має понад 140 символів',
        'The second line is the version 0200': 'Другий рядок - версія 0200',
        'The third line is the coding type 1': 'Третій рядок - тип кодування 1',
        'The Swiss QR bill takes only IBANs of Switzerland and Liechtenstein (CH, LI)':
            'Швейцарський QR-рахунок приймає лише IBAN Швейцарії та Ліхтенштейну (CH, LI)',
        'The creditor address must be structured (S): street, number, postal code and town in their own lines':
            'Адреса кредитора має бути структурованою (S): вулиця, номер, індекс і населений пункт в окремих рядках',
        'The creditor name is missing': 'Немає імені кредитора',
        'Postal code and town of the creditor are needed': 'Потрібні індекс і населений пункт кредитора',
        'The country of the creditor is two letters, for example CH': 'Країна кредитора - дві літери, наприклад CH',
        'The ultimate creditor (lines 12 to 18) must stay empty': 'Кінцевий кредитор (рядки 12-18) має лишатися порожнім',
        'The amount is between 0.01 and 999999999.99, with a point and two decimals': 'Сума - від 0.01 до 999999999.99, із крапкою і двома знаками після неї',
        'The currency is CHF or EUR': 'Валюта - CHF або EUR',
        'Postal code and town of the payer are needed': 'Потрібні індекс і населений пункт платника',
        'The payer\'s address must be structured (S)': 'Адреса платника має бути структурованою (S)',
        'The reference type is QRR, SCOR or NON': 'Тип референсу - QRR, SCOR або NON',
        'A QR-IBAN needs a QR reference (QRR)': 'QR-IBAN потребує QR-референсу (QRR)',
        'A QR reference needs a QR-IBAN (an IBAN with 30000 to 31999 after the check digits)':
            'QR-референс потребує QR-IBAN (IBAN із 30000-31999 після контрольних цифр)',
        'From 14 November 2026 a bill in EUR takes only an IBAN with a creditor reference (SCOR) or none - QR-IBAN and QR reference only in CHF':
            'З 14 листопада 2026 року рахунок у EUR приймає лише IBAN із референсом кредитора (SCOR) або без референсу - QR-IBAN і QR-референс лише в CHF',
        'Without a reference type the reference line must be empty': 'Без типу референсу рядок референсу має бути порожнім',
        'Message and billing information together have at most 140 characters': 'Повідомлення й платіжна інформація разом мають щонайбільше 140 символів',
        'Line 31 must be EPD (end of the payment data)': 'Рядок 31 має бути EPD (кінець платіжних даних)',
        'The Swiss QR bill allows only Latin characters (no emoji, no other scripts)':
            'Швейцарський QR-рахунок допускає лише латинські символи (без емодзі та інших писемностей)',
    },
    html: {
        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Натисніть <b>Копіювати промпт</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'ШІ відповідає посиланням: клацніть його або вставте всю відповідь нижче. <b>Скасувати</b> поверне все назад.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'ШІ відповідає посиланням: <b>вставте всю його відповідь нижче</b> (клацнуте посилання відкриває окремий редактор). <b>Скасувати</b> поверне все назад.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'Редактор може надсилати кожну збережену версію на ваш власний сервер (<b>вебхук</b>), щоб ваша робота зберігалася там, де ви хочете. Нічого не надсилається, доки ви не введете тут адресу.',
        'Also possible: <code>?src=&lt;URL of a .qr file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>qreditor:ai</code>, <code>qreditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Також можна: <code>?src=&lt;URL файлу .qr&gt;</code> відкриває файл, <code>&amp;webhook=&lt;URL&gt;</code> зберігає туди цей документ. Редактор може відкриватися й в окремому вікні (<code>?embed=window</code>), а ваша сторінка може передати йому власний промпт для ШІ та ключ сеансу, щоб ШІ надсилав результат на ваш сервер (<code>qreditor:ai</code>, <code>qreditor:key-request</code>) - див. «Редактор на вашому сайті» під редактором. Подробиці - у <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Choose what the code holds</b> under <b>New</b> or in the <b>Content</b> tab: a link, WiFi, a contact, an event, a payment … The form writes the content in the form phones read.':
            '<b>Виберіть, що містить код</b>, у меню <b>Новий</b> або на вкладці <b>Вміст</b>: посилання, Wi-Fi, контакт, подію, платіж … Форма записує вміст у вигляді, який читають телефони.',
        '<b>Design it</b> in the <b>Design</b> tab: colors and gradient, the shape of the modules and of the three eyes, a logo, a caption and a frame.':
            '<b>Оформіть його</b> на вкладці <b>Дизайн</b>: кольори й градієнт, форма модулів і трьох очей, логотип, підпис і рамка.',
        'The <b>code</b> on the left is the whole QR document: design lines <code>key: value</code>, a line <code>---</code>, then the content exactly as it goes into the code. You can type there too; every change is one step for Undo.':
            '<b>Код</b> ліворуч - це весь QR-документ: рядки оформлення <code>key: value</code>, рядок <code>---</code>, потім вміст точно так, як він потрапляє в код. Там теж можна писати; кожна зміна - один крок для «Скасувати».',
        '<b>Check</b>: after every change the editor reads the code back - normal, small and blurred. The badge above the code says whether it scans; the <b>Check</b> tab shows contrast, quiet zone, the logo against the error correction and the print size.':
            '<b>Перевірка</b>: після кожної зміни редактор зчитує код - у звичайному розмірі, малим і розмитим. Позначка над кодом показує, чи він сканується; вкладка <b>Перевірка</b> показує контраст, вільну зону, логотип порівняно з корекцією помилок і розмір друку.',
        'Click the <b>caption</b> under the code to change it right there.':
            'Клацніть <b>підпис</b> під кодом, щоб змінити його просто там.',
        '<b>Export</b> makes SVG, PDF and EPS (vectors for print), PNG, JPEG or WebP up to 8192 pixels wide, and <b>many codes at once</b> from a table: write <code>{{column}}</code> in the content, paste the table, download a ZIP or one PDF.':
            '<b>Експорт</b> створює SVG, PDF і EPS (вектори для друку), PNG, JPEG або WebP завширшки до 8192 пікселів, а також <b>багато кодів одразу</b> з таблиці: впишіть <code>{{column}}</code> у вміст, вставте таблицю, завантажте ZIP або один PDF.',
        '<b>Read a code</b>: open, drop or paste a picture, or click <b>Read code</b> for the camera. The content becomes a new document.':
            '<b>Зчитайте код</b>: відкрийте, перетягніть або вставте зображення чи натисніть <b>Зчитати код</b> для камери. Вміст стає новим документом.',

    },
    patterns: [
        ['^(\\d+) bytes? · version (\\d+) \\((\\d+) × (\\d+) modules\\)$', (m, n, v, a, b) => ((n, v, a, b) => `${n} ${getByteWord(n)} · версія ${v} (${a} × ${b} модулів)`)(n, v, a, b)],
        ['^(\\d+) bytes?$', (m, n) => (n => `${n} ${getByteWord(n)}`)(n)],
        /* ---------- Code, problems above the code ---------- */
        ['^(\\d+) (?:line|lines) · (.+)$', (m, l, s) => `${l} ${getPlural(l, 'рядок', 'рядки', 'рядків')} · ${formatSize(s)}`],
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'помилка', 'помилки', 'помилок')}`],
        ['^(· )?(\\d+) (?:note|notes)$', (m, p, k) => `${p || ''}${k} ${getPlural(k, 'зауваження', 'зауваження', 'зауважень')}`],
        ['^Line (\\d+)$', 'Рядок $1'],

        /* ---------- Check ---------- */
        ['^- repairs about (\\d+) %$', '- відновлює близько $1 %'],
        ['^(\\d+) of (\\d+) bytes \\((\\d+) %\\)$', (m, a, b, p) => `${a} з ${b} ${getPlural(b, 'байта', 'байтів', 'байтів')} (${p} %)`],
        ['^(\\d+) % of the modules$', '$1 % модулів'],
        ['^From ([\\d.]+) cm the code should be at least ([\\d.]+) cm wide\\.$',
            (m, d, w) => `З відстані ${formatDecimal(d)} см код має бути щонайменше ${formatDecimal(w)} см завширшки.`],
        ['^At ([\\d.]+) mm one module is ([\\d.]+) mm ✓$', (m, a, b) => `При ${formatDecimal(a)} мм один модуль має ${formatDecimal(b)} мм ✓`],
        ['^At ([\\d.]+) mm one module is ([\\d.]+) mm - below 0\\.4 mm many phones fail; print it larger !$',
            (m, a, b) => `При ${formatDecimal(a)} мм один модуль має ${formatDecimal(b)} мм - модулі менші за 0,4 мм багато телефонів не зчитують; надрукуйте його більшим!`],

        /* ---------- Export ---------- */
        ['^(\\d+) × (\\d+) pixels = ([\\d.]+) mm at (\\d+) dpi$', (m, w, h, mm, d) => `${w} × ${h} пікс. = ${formatDecimal(mm)} мм при ${d} dpi`],
        ['^(\\d+) × (\\d+) pixels$', '$1 × $2 пікс.'],
        ['^One module ([\\d.]+) mm$', (m, v) => `Один модуль ${formatDecimal(v)} мм`],
        ['^One module ([\\d.]+) mm - below 0\\.4 mm many phones fail$', (m, v) => `Один модуль ${formatDecimal(v)} мм - модулі менші за 0,4 мм багато телефонів не зчитують`],
        ['^([\\d.]+) × ([\\d.]+) mm$', (m, a, b) => `${formatDecimal(a)} × ${formatDecimal(b)} мм`],
        ['^(\\d+) (?:row|rows) · (.+)$', (m, k, r) => `${k} ${getPlural(k, 'рядок', 'рядки', 'рядків')} · ${r}`],
        ['^At most (\\d+) rows at once$', 'Щонайбільше $1 рядків за раз'],
        ['^Left out \\(content too long\\): lines (.+)$', 'Пропущено (задовгий вміст): рядки $1'],
        ['^(\\d+) (?:code|codes) made$', (m, k) => `Створено ${k} ${getPlural(k, 'код', 'коди', 'кодів')}`],
        ['^(\\d+) (?:code|codes) made - (\\d+) left out$', (m, k, s) => `Створено ${k} ${getPlural(k, 'код', 'коди', 'кодів')} - пропущено ${s}`],

        /* ---------- Problems with values ---------- */
        ['^The Swiss QR bill is drawn as its standard requires - (.+) (is|are) not used$',
            (m, k, v) => `Швейцарський QR-рахунок малюється так, як вимагає його стандарт - ${k} ${v === 'is' ? 'не використовується' : 'не використовуються'}`],
        ['^Contrast ([\\d.]+):1 between (#[0-9a-fA-F]+) and the background is too low - scanners need at least 3:1, better 4\\.5:1 or more$',
            (m, r, c) => `Контраст ${formatDecimal(r)}:1 між ${c} і тлом занизький - сканерам потрібно щонайменше 3:1, краще 4,5:1 або більше`],
        ['^Contrast ([\\d.]+):1 between (#[0-9a-fA-F]+) and the background is low - 4\\.5:1 or more scans reliably, also in poor light$',
            (m, r, c) => `Контраст ${formatDecimal(r)}:1 між ${c} і тлом низький - від 4,5:1 код сканується надійно, навіть за поганого світла`],
        ['^A quiet zone of (\\d+) (?:module|modules) is too small - the standard asks for 4, with less than 2 many scanners fail$',
            (m, k) => `Вільна зона в ${k} ${getPlural(k, 'модуль', 'модулі', 'модулів')} замала - стандарт вимагає 4, за ширини менш ніж 2 модулі багато сканерів не зчитують код`],
        ['^The quiet zone has (\\d+) modules - the standard asks for 4 \\(a light frame of 4 modules around the code\\)$',
            (m, k) => `Вільна зона має ${k} ${getPlural(k, 'модуль', 'модулі', 'модулів')} - стандарт вимагає 4 (світла рамка в 4 модулі навколо коду)`],
        ['^The logo hides about (\\d+) % of the code, error correction ([LMQH]) repairs at most (\\d+) % - make the logo smaller or choose error correction H$',
            'Логотип закриває близько $1 % коду, корекція помилок $2 відновлює щонайбільше $3 % - зменште логотип або виберіть корекцію помилок H'],
        ['^The logo hides about (\\d+) % of the code, error correction ([LMQH]) repairs at most (\\d+) % - little room is left for dirt and damage; H is safer$',
            'Логотип закриває близько $1 % коду, корекція помилок $2 відновлює щонайбільше $3 % - лишається мало запасу на бруд і пошкодження; H надійніша'],
        ['^A logo takes away part of the code: error correction Q or H keeps it readable \\(now ([LMQH])\\)$',
            'Логотип забирає частину коду: корекція помилок Q або H зберігає його читабельним (зараз $1)'],
        ['^Unknown key "(.+)" - it is kept, but has no effect$', 'Невідомий ключ «$1» - його збережено, але він ні на що не впливає'],
        ['^"(.+)" is set twice - the last line counts$', '«$1» задано двічі - діє останній рядок'],
        ['^"(.+)" is not valid \\(([^()]+)\\) - the default is used$', (m, v, h) => `Значення «${v}» неправильне (${translateHint(h)}) - використано типове`],
        ['^An IBAN of ([A-Z]{2}) has (\\d+) characters, this one (\\d+)$', (m, c, a, b) => `IBAN країни ${c} має ${a} ${getPlural(a, 'символ', 'символи', 'символів')}, цей - ${b}`],
        ['^(.+) is a link shortener or redirect service: the code works only as long as that service keeps the link - for printed codes put the real address in the code$',
            '$1 - це скорочувач посилань або сервіс переадресації: код працює лише доти, доки цей сервіс зберігає посилання - для друкованих кодів вписуйте в код справжню адресу'],
        ['^The SEPA code has (\\d+) bytes, at most 331 are allowed$', (m, k) => `Код SEPA має ${k} ${getPlural(k, 'байт', 'байти', 'байтів')}, дозволено щонайбільше 331`],
        ['^Line (\\d+) has more than (\\d+) characters$', (m, l, k) => `Рядок ${l} має понад ${k} ${getPlural(k, 'символ', 'символи', 'символів')}`],
        ['^The Swiss QR bill has (\\d+) characters, at most 997 are allowed$', (m, k) => `Швейцарський QR-рахунок має ${k} ${getPlural(k, 'символ', 'символи', 'символів')}, дозволено щонайбільше 997`],

        /* ---------- Messages ---------- */
        ['^(Link|Text|WiFi|Contact|Email|SMS|Phone|Location|Event|Crypto|SEPA payment|Swiss QR bill) - "Undo" brings the previous content back$',
            (m, k) => `${TYPES[k]} - «Скасувати» поверне попередній вміст`],
        ['^No QR code found in "the clipboard"$', 'У буфері обміну не знайдено QR-коду'],
        ['^No QR code found in "(.+)"$', 'У «$1» не знайдено QR-коду'],
        ['^QR code read \\((.+)\\) from "the camera" - it is a new document$', 'QR-код зчитано ($1) з камери - це новий документ'],
        ['^QR code read \\((.+)\\) from "the clipboard" - it is a new document$', 'QR-код зчитано ($1) з буфера обміну - це новий документ'],
        ['^QR code read \\((.+)\\) from "(.+)" - it is a new document$', 'QR-код зчитано ($1) з «$2» - це новий документ'],
        ['^QR code read \\((.+)\\) - it is a new document$', 'QR-код зчитано ($1) - це новий документ'],
        ['^QR code received - the editor found (\\d+) (?:problem|problems)$',
            (m, k) => `QR-код отримано - редактор знайшов ${k} ${getPlural(k, 'проблему', 'проблеми', 'проблем')}`],
        /* the same messages when they arrive in English as a whole */
        ['^"(.+)" is open\\. My documents: open, rename, duplicate or delete your documents \\(Ctrl\\+O\\)$',
            '«$1» відкрито. Мої документи: відкривайте, перейменовуйте, дублюйте або видаляйте свої документи (Ctrl+O)'],
        ['^New document "(.+)" - your other documents are under "My documents"$', 'Новий документ «$1» - інші ваші документи в «Мої документи»'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$', 'Новий документ «$1» від ШІ - інші ваші документи не змінилися'],
        ['^"(.+)" is neither a \\.qr file nor a picture$', '«$1» - не файл .qr і не зображення'],
        ['^"(.+)" opened - it is now in "My documents"$', '«$1» відкрито - тепер він у «Мої документи»'],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '«$1» змінено ШІ - «Скасувати» поверне все назад'],
        ['^"(.+)" opened$', '«$1» відкрито'],

        /* ---------- My documents ---------- */
        ['^(\\d+) (?:document|documents) · (.+) in this browser$',
            (m, k, s) => `${k} ${getPlural(k, 'документ', 'документи', 'документів')} · ${formatSize(s)} у цьому браузері`],
        ['^No document named "(.*)"\\.$', 'Немає документа з назвою «$1».'],
        ['^Open now · (.+)$', (m, s) => `Відкрито зараз · ${formatSize(s)}`],
        ['^(just now|yesterday|\\d+ min ago|\\d+ h ago|[A-Z][a-z]{2} \\d{1,2}, \\d{4}) · (.+)$', (m, w, s) => `${formatTime(w)} · ${formatSize(s)}`],
        ['^(.+) \\(open now\\)$', '$1 (відкрито зараз)'],
        ['^ZIP with (\\d+) (?:document|documents) downloaded$', (m, k) => `ZIP із ${k} ${getPlural(k, 'документом', 'документами', 'документами')} завантажено`],
        ['^"(.+)" duplicated$', '«$1» продубльовано'],
        ['^Delete "(.+)"\\?$', 'Видалити «$1»?'],
        ['^"(.+)" deleted$', '«$1» видалено'],

        /* ---------- AI Assistant ---------- */
        ['^Part (\\d+) of (\\d+) received$', 'Частину $1 з $2 отримано'],
        ['^Open the other (?:link|links) from the AI too \\(still missing: part (.+)\\)\\.$', 'Відкрийте й інші посилання від ШІ (ще бракує частини $1).'],
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
