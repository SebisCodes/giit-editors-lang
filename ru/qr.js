/* Russian texts of the QR editor: the bar, the work area (code, QR code,
   content, design, check), its dialogs and messages, and the problems the
   editor finds in the QR document. What all editors share is in common.js;
   how the dictionaries are used is described in i18n.js. Names of documents,
   design keys and values, colors and content formats stay as they are: the
   patterns copy them into the Russian text. */

import { formatTime, getPlural } from './format.js';

/* Russian plural: getPlural(5, 'строка', 'строки', 'строк') -> 'строк' (1, 21 … / 2-4, 22-24 … / the rest) */

/* "0.25" -> "0,25" (decimal comma) */
/**
 * Writes the decimal separator of the language into a number.
 * @param {string} s - the number with a decimal point.
 * @returns {string} the text in the language.
 */
const formatDecimal = s => String(s).replace('.', ',');
/* "412 B" / "1.5 KB" / "523 bytes" -> Russian number and unit */
const UNIT = { B: 'Б', KB: 'КБ', MB: 'МБ', GB: 'ГБ' };
/**
 * Translates the unit of a size text ("123 bytes").
 * @param {string} s - the English size text.
 * @returns {string} the text in the language.
 */
const formatSize = s => {
    const m = /^(\d+) bytes$/.exec(s);
    return m ? `${m[1]} ${getPlural(m[1], 'байт', 'байта', 'байт')}` : s.replace(/^([\d.]+) (B|KB|MB|GB)$/, (x, v, u) => `${formatDecimal(v)} ${UNIT[u]}`);
};

/* When a document was last changed (files.js): "just now", "5 min ago", "Oct 25, 2026" … */

/* The content types (payload.js TYPE_NAMES) where a message names them in English. */
const TYPES = {
    Link: 'Ссылка', Text: 'Текст', WiFi: 'Wi-Fi', Contact: 'Контакт', Email: 'Эл. почта', SMS: 'SMS', Phone: 'Телефон', Location: 'Место',
    Event: 'Событие', Crypto: 'Криптовалюта', 'SEPA payment': 'Платёж SEPA', 'Swiss QR bill': 'Швейцарский QR-счёт',
};
/* What a design value may be (qrdoc.js KEYS hint); lists of values stay as they are. */
/**
 * Translates the text the pattern found (hint in the English pattern).
 * @param {string} h - the English text the pattern found.
 * @returns {string} the text in the language.
 */
function translateHint(h) {
    const H = {
        'auto or 1 to 40': 'auto или от 1 до 40', 'auto or 0 to 7': 'auto или от 0 до 7', '0 to 20 modules': 'от 0 до 20 модулей',
        'a color like #1d2b53': 'цвет, например #1d2b53', '0 to 360 degrees': 'от 0 до 360 градусов', 'a color like #ffffff, or transparent': 'цвет, например #ffffff, или transparent',
        '5 to 30 percent': 'от 5 до 30 процентов',
    };
    if (H[h]) return H[h];
    const m = /^none, (.+) or a picture as (data:\S+)$/.exec(h);
    return m ? `none, ${m[1]} или изображение в виде ${m[2]}` : h;
}

/**
 * Returns the word "byte" in the form for a count.
 * @param {string|number} n - the English text the pattern found.
 * @returns {string} the text in the language.
 */
const getByteWord = n => { n = +n; const a = n % 10, b = n % 100; return a === 1 && b !== 11 ? 'байт' : a >= 2 && a <= 4 && (b < 12 || b > 14) ? 'байта' : 'байт'; };

export default {
    text: {
        /* ---------- Side panel: a column on the desktop ---------- */
        'Side panel': 'Боковая панель',
        'Show or hide the side panel': 'Показать или скрыть боковую панель',
        'Module shape': 'Форма модулей',
        'Eye frame': 'Рамка глазка',
        'Eye center': 'Центр глазка',
        /* ---------- Top bar ---------- */
        'QR Editor - home': 'Редактор QR - на главную',
        'QR Editor': 'Редактор QR',
        'File': 'Файл',
        'My documents (Ctrl+O)': 'Мои документы (Ctrl+O)',
        'My documents': 'Мои документы',
        'New QR code': 'Новый QR-код',
        'New': 'Новый',
        'A web address - opens the page': 'Веб-адрес - открывает страницу',
        'Join the network without typing the password': 'Подключение к сети без ввода пароля',
        'vCard or MeCard - saves name, phone and email': 'vCard или MeCard - сохраняет имя, телефон и почту',
        'Adds a date to the calendar': 'Добавляет дату в календарь',
        'Address, subject and text': 'Адрес, тема и текст',
        'Number and message': 'Номер и сообщение',
        'Calls a number': 'Звонит по номеру',
        'Opens a place in the map app': 'Открывает место в приложении карт',
        'EPC GiroCode for banking apps in the euro area': 'EPC GiroCode для банковских приложений в еврозоне',
        'The QR code of a Swiss payment slip': 'QR-код швейцарской платёжной квитанции',
        'Crypto payment': 'Криптоплатёж',
        'Bitcoin, Ethereum and others': 'Bitcoin, Ethereum и другие',
        'Any text': 'Любой текст',
        'The welcome example': 'Приветственный пример',
        'A designed WiFi code with logo and caption': 'Оформленный код Wi-Fi с логотипом и подписью',
        'Open a .qr file, or read a QR code from a picture (you can also drag it into the window or paste it)':
            'Открыть файл .qr или прочитать QR-код с изображения (его можно также перетащить в окно или вставить)',
        'Open file…': 'Открыть файл…',
        'Read a QR code with the camera': 'Прочитать QR-код камерой',
        'Read code': 'Считать код',
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
        'Save the QR code as an SVG picture (Ctrl+S)': 'Сохранить QR-код как изображение SVG (Ctrl+S)',
        'Download SVG': 'Скачать SVG',
        'SVG, PNG, PDF, EPS, many codes from a table (Ctrl+E)': 'SVG, PNG, PDF, EPS, много кодов из таблицы (Ctrl+E)',
        'Export…': 'Экспорт…',

        /* ---------- Views and work area ---------- */
        'View': 'Вид',
        'Code': 'Код',
        'QR code': 'QR-код',
        'Edit': 'Правка',
        'QR document': 'QR-документ',
        'Copy the QR document to the clipboard': 'Скопировать QR-документ в буфер обмена',
        'Copy code': 'Копировать код',
        'Copy': 'Копировать',
        'QR document: design lines, a line ---, then the content': 'QR-документ: строки оформления, строка ---, затем содержимое',
        'Drag to change the width of the code area': 'Перетащите, чтобы изменить ширину области кода',
        'Drag to change the width': 'Перетащите, чтобы изменить ширину',
        'Show the details of the scan check': 'Показать подробности проверки сканирования',
        'Checking…': 'Проверка…',
        'Type the content below the line --- in the code, or choose a type under Edit.':
            'Введите содержимое под строкой --- в коде или выберите тип в разделе «Правка».',
        'What the code holds: link, WiFi, contact, payment …': 'Что содержит код: ссылка, Wi-Fi, контакт, платёж …',
        'Content': 'Содержимое',
        'Colors, shapes, logo, caption and frame': 'Цвета, формы, логотип, подпись и рамка',
        'Design': 'Дизайн',
        'Scan check, contrast, print size': 'Проверка сканирования, контраст, размер печати',
        'Check': 'Проверка',
        'Open it here': 'Открыть здесь',
        'Drop a .qr file or a picture with a QR code here': 'Перетащите сюда файл .qr или изображение с QR-кодом',
        'Hide': 'Скрыть',
        'Show': 'Показать',
        'No code': 'Нет кода',
        'Scans': 'Сканируется',
        'Scans in good conditions': 'Сканируется в хороших условиях',
        'Does not scan': 'Не сканируется',
        'version': 'версия',
        'error correction': 'коррекция ошибок',

        /* ---------- Export ---------- */
        'Export': 'Экспорт',
        'Close': 'Закрыть',
        'File name': 'Имя файла',
        'Format': 'Формат',
        'Vector (print, any size)': 'Вектор (печать, любой размер)',
        'SVG picture': 'Изображение SVG',
        'EPS (for print shops)': 'EPS (для типографий)',
        'Picture': 'Изображение',
        'The content as text': 'Содержимое как текст',
        'QR document (.qr)': 'QR-документ (.qr)',
        'Many codes': 'Много кодов',
        'Many codes from a table': 'Много кодов из таблицы',
        'Width in pixels': 'Ширина в пикселях',
        'Resolution (dpi)': 'Разрешение (dpi)',
        'Width in mm': 'Ширина в мм',
        'Each code as': 'Каждый код как',
        'SVG files in a ZIP': 'Файлы SVG в ZIP',
        'PNG files in a ZIP': 'Файлы PNG в ZIP',
        'One PDF, one code per page': 'Один PDF, один код на страницу',
        'File names from': 'Имена файлов из',
        'Table (CSV or TSV, first row = column names)': 'Таблица (CSV или TSV, первая строка = имена столбцов)',
        'Open a table…': 'Открыть таблицу…',
        'Result': 'Результат',
        'SVG, PNG, PDF, EPS and the .qr document in one ZIP': 'SVG, PNG, PDF, EPS и документ .qr в одном ZIP',
        'All formats (ZIP)': 'Все форматы (ZIP)',
        'Download': 'Скачать',
        'There is no code yet - see the problems above the code.': 'Кода пока нет - см. проблемы над кодом.',
        '(The picture is made when you download it.)': '(Изображение создаётся при скачивании.)',
        '(A vector PDF, one page as large as the code - made when you download it.)':
            '(Векторный PDF, одна страница размером с код - создаётся при скачивании.)',
        '(A vector EPS for print shops - made when you download it.)': '(Векторный EPS для типографий - создаётся при скачивании.)',
        'Downloaded': 'Скачано',
        'ZIP downloaded: SVG, PDF, EPS, PNG, the .qr document and the content': 'ZIP скачан: SVG, PDF, EPS, PNG, документ .qr и содержимое',
        'Picture copied - paste it into a document or a chat': 'Изображение скопировано - вставьте его в документ или чат',
        'This browser does not let the page copy pictures - download it instead': 'Этот браузер не разрешает странице копировать изображения - лучше скачайте его',
        'Copied to the clipboard': 'Скопировано в буфер обмена',
        'Row number': 'Номер строки',
        'Column': 'Столбец',
        'Write placeholders like {{url}} into the content (or the caption) - each row of the table fills them.':
            'Впишите заполнители вроде {{url}} в содержимое (или подпись) - каждая строка таблицы их заполнит.',
        'Placeholders in the document': 'Заполнители в документе',
        'Not in the table': 'Нет в таблице',
        'The table is larger than 10 MB': 'Таблица больше 10 МБ',
        'Paste a table with a header row and at least one row': 'Вставьте таблицу со строкой заголовков и хотя бы одной строкой',
        'No row made a code - see the content': 'Ни из одной строки не удалось создать код - проверьте содержимое',

        /* ---------- Scan ---------- */
        'Read a QR code': 'Прочитать QR-код',
        'Starting the camera…': 'Запуск камеры…',
        'The camera image is read in your browser only - nothing is recorded or sent.':
            'Изображение с камеры читается только в вашем браузере - ничего не записывается и не отправляется.',
        'Choose a picture…': 'Выбрать изображение…',
        'This browser gives no camera to the page - choose a picture instead.': 'Этот браузер не даёт странице доступ к камере - выберите изображение.',
        'Hold the QR code in front of the camera.': 'Поднесите QR-код к камере.',
        'The camera is not allowed - allow it in the browser (inside another website the page must allow it too), or choose a picture.':
            'Доступ к камере запрещён - разрешите его в браузере (внутри другого сайта это должна разрешить и та страница) или выберите изображение.',
        'No camera found - choose a picture instead.': 'Камера не найдена - выберите изображение.',

        /* ---------- My documents ---------- */
        'Search by name': 'Поиск по имени',
        'Search your documents': 'Поиск по вашим документам',
        'Open a .qr file or a picture with a QR code as a new document': 'Открыть файл .qr или изображение с QR-кодом как новый документ',
        'New document': 'Новый документ',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Щёлкните по документу, чтобы открыть его. Документы хранятся только в этом браузере - ничего не загружается на сервер. Очистка данных сайта в браузере удалит их, поэтому скачайте те, которые хотите сохранить.',
        'Download every document as a .qr file in one ZIP': 'Скачать каждый документ как файл .qr в одном ZIP',
        'Download all (ZIP)': 'Скачать все (ZIP)',
        'Rename': 'Переименовать',
        'Duplicate': 'Дублировать',
        'Download as .qr': 'Скачать как .qr',
        'Delete': 'Удалить',
        'New name': 'Новое имя',
        'This document is open': 'Этот документ открыт',
        'Click to open this document': 'Щёлкните, чтобы открыть этот документ',
        'No documents yet.': 'Документов пока нет.',
        'The document is removed from this browser for good. Download it first if you want to keep a copy.':
            'Документ будет навсегда удалён из этого браузера. Если хотите сохранить копию, сначала скачайте его.',

        /* ---------- AI Assistant ---------- */
        'Any AI can work with you - ChatGPT, Claude, Gemini, Copilot.': 'С вами может работать любой ИИ - ChatGPT, Claude, Gemini, Copilot.',
        'Connected AI': 'Подключённый ИИ',
        'Paste it into your AI and say what the code should hold or how it should look.':
            'Вставьте его в свой ИИ и скажите, что должен содержать код или как он должен выглядеть.',
        'Connected to': 'Подключено к',
        'the AI sends its result there, and it opens here.': 'ИИ отправляет туда свой результат, и он открывается здесь.',
        'What': 'Что',
        'tells the AI': 'сообщает ИИ',
        'The AI should': 'ИИ должен',
        'Change “': 'Изменить «',
        '”': '»',
        'Make a new document': 'Создать новый документ',
        'The AI\'s answer (or press Ctrl+V anywhere):': 'Ответ ИИ (или нажмите Ctrl+V где угодно):',
        'The QR document travels in the link after the “#”, which no server sees. What you paste into your AI is handled by its provider.':
            'QR-документ передаётся в ссылке после «#»; эта часть не видна ни одному серверу. То, что вы вставляете в свой ИИ, обрабатывает его провайдер.',
        'The prompt - copy it with Ctrl+C': 'Промпт - скопируйте его через Ctrl+C',
        'Copy prompt': 'Копировать промпт',
        '(no key yet)': '(ключа пока нет)',
        '(key valid while the editor is open)': '(ключ действует, пока редактор открыт)',
        'The link could not be read': 'Не удалось прочитать ссылку',
        'The document in this link is incomplete or damaged. If the AI\'s link was split over several lines (as in a terminal), copy the whole answer and paste it into the editor with Ctrl+V - the editor joins the lines.':
            'Документ в этой ссылке неполный или повреждён. Если ссылка ИИ разбита на несколько строк (как в терминале), скопируйте весь ответ и вставьте его в редактор через Ctrl+V - редактор соединит строки.',
        'Loading…': 'Загрузка…',
        'Taken over by your editor': 'Передано в ваш редактор',
        'The document is now in the QR Editor tab you already had open. Switch to that tab, or open it here.':
            'Документ теперь во вкладке редактора QR, которая у вас уже была открыта. Перейдите в ту вкладку или откройте его здесь.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)':
            'Копирование здесь запрещено - текст выделен ниже: нажмите Ctrl+C (⌘C)',
        'Prompt copied - paste it into your AI and say what it should write': 'Промпт скопирован - вставьте его в свой ИИ и скажите, что нужно написать',
        'This link is incomplete or damaged - please ask the AI to send it again': 'Ссылка неполная или повреждена - попросите ИИ отправить её ещё раз',

        /* ---------- Save to your server ---------- */
        'Save to your server': 'Сохранение на ваш сервер',
        'Webhook address': 'Адрес вебхука',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)':
            '(необязательно, отправляется как «Authorization: Bearer …»; хранится, пока открыта эта вкладка)',
        'Send automatically a few seconds after each change (otherwise only when you click':
            'Отправлять автоматически через несколько секунд после каждого изменения (иначе только когда вы нажимаете',
        'or press Ctrl+S)': 'или Ctrl+S)',
        'Only for “': 'Только для «',
        '” (other documents use the general address)': '» (другие документы используют общий адрес)',
        'What your server receives': 'Что получает ваш сервер',
        'A POST request with JSON (your server must allow CORS from https://qr.giit.ch):':
            'POST-запрос с JSON (ваш сервер должен разрешать CORS с https://qr.giit.ch):',
        'Embed the editor in your website': 'Встроить редактор в ваш сайт',
        'Send now': 'Отправить сейчас',
        'Save setting': 'Сохранить настройку',

        /* ---------- Help ---------- */
        'How it works': 'Как это работает',
        'Keyboard shortcuts': 'Сочетания клавиш',
        'Undo / redo': 'Отменить / повторить',
        'Save (download SVG, or to your server)': 'Сохранить (скачать SVG или на ваш сервер)',
        'Paste a picture with a QR code to read it': 'Вставить изображение с QR-кодом, чтобы прочитать его',
        'Wrap long lines in the code': 'Переносить длинные строки в коде',

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
        /* fragments: New document "<name>" - …, "<name>" is open. … */
        'your other documents are under "My documents"': 'другие ваши документы в разделе «Мои документы»',
        'from the AI - your other documents are unchanged': 'от ИИ - другие ваши документы не изменились',
        'is open. My documents: open, rename, duplicate or delete your documents (Ctrl+O)':
            'открыт. Мои документы: открывайте, переименовывайте, дублируйте или удаляйте свои документы (Ctrl+O)',
        'is neither a .qr file nor a picture': '- не файл .qr и не изображение',
        'opened - it is now in "My documents"': 'открыт - теперь он в разделе «Мои документы»',
        'changed by the AI - "Undo" takes it back': 'изменён ИИ - «Отменить» вернёт всё назад',
        'The file is larger than 20 MB': 'Файл больше 20 МБ',
        'No QR code found in the picture': 'На изображении не найден QR-код',
        'Logo added - it is part of the document': 'Логотип добавлен - он стал частью документа',
        'The picture is larger than 5 MB': 'Изображение больше 5 МБ',
        'The SVG is larger than 200 KB': 'SVG больше 200 КБ',
        'QR document copied': 'QR-документ скопирован',
        'There is no code to download yet': 'Кода для скачивания пока нет',
        'SVG downloaded': 'SVG скачан',
        'Design reset - "Undo" brings it back': 'Дизайн сброшен - «Отменить» вернёт его',
        'Type a number into the reference field first': 'Сначала введите число в поле референса',
        'Reference with check digits written': 'Референс с контрольными цифрами записан',
        /* the name of a document read from a picture: "<kind> read" */
        'read': '(скан)',
        /* names of the templates under New */
        'Guest WiFi': 'Гостевой Wi-Fi',
        'Bitcoin': 'Bitcoin',

        /* ---------- Content ---------- */
        'Kind of content': 'Тип содержимого',
        'Link': 'Ссылка',
        'Text': 'Текст',
        'WiFi': 'Wi-Fi',
        'Contact': 'Контакт',
        'Email': 'Эл. почта',
        'SMS': 'SMS',
        'Phone': 'Телефон',
        'Location': 'Место',
        'Event': 'Событие',
        'Crypto': 'Криптовалюта',
        'SEPA payment': 'Платёж SEPA',
        'Swiss QR bill': 'Швейцарский QR-счёт',
        'Make a QR reference from a number': 'QR-референс из числа',
        'Make an RF reference from a number': 'RF-референс из числа',
        'The code opens this address. A link shortener or redirect service makes the code depend on that service - the editor warns about it.':
            'Код открывает этот адрес. Сокращатель ссылок или сервис переадресации делает код зависимым от этого сервиса - редактор об этом предупреждает.',
        'Any text; phones show it as it is.': 'Любой текст; телефоны показывают его как есть.',
        'Phones join the network when the code is scanned (Android, iPhone with iOS 11 and later).':
            'Телефоны подключаются к сети при сканировании кода (Android, iPhone с iOS 11 и новее).',
        'vCard is read by all phones; MeCard makes a smaller code with fewer fields.':
            'vCard читают все телефоны; MeCard даёт код меньше, но с меньшим числом полей.',
        'Opens a new email with address, subject and text.': 'Открывает новое письмо с адресом, темой и текстом.',
        'Opens a text message to this number.': 'Открывает SMS на этот номер.',
        'Offers to call this number - with the country code it works everywhere.':
            'Предлагает позвонить на этот номер - с кодом страны работает везде.',
        'Opens the place in the map app.': 'Открывает место в приложении карт.',
        'Adds the event to the calendar (times are local times).': 'Добавляет событие в календарь (время местное).',
        'A payment request for wallet apps.': 'Запрос платежа для приложений-кошельков.',
        'For banking apps in the euro area (SEPA credit transfer, EPC GiroCode). Error correction M as the standard requires.':
            'Для банковских приложений в еврозоне (кредитовый перевод SEPA, EPC GiroCode). Коррекция ошибок M, как требует стандарт.',
        'The QR code of a Swiss QR bill (Implementation Guidelines 2.3 / 2.4). Drawn with the Swiss cross and error correction M; print it 46 × 46 mm.':
            'QR-код швейцарского QR-счёта (Implementation Guidelines 2.3 / 2.4). Рисуется со швейцарским крестом и коррекцией ошибок M; печатайте его размером 46 × 46 мм.',
        'Address (URL)': 'Адрес (URL)',
        'Network name (SSID)': 'Имя сети (SSID)',
        'Security': 'Защита',
        'WEP (old)': 'WEP (устаревший)',
        'None (open network)': 'Нет (открытая сеть)',
        'Password': 'Пароль',
        'Hidden network': 'Скрытая сеть',
        'vCard 3.0 (all phones)': 'vCard 3.0 (все телефоны)',
        'MeCard (smaller code)': 'MeCard (код меньше)',
        'First name': 'Имя',
        'Last name': 'Фамилия',
        'Company': 'Компания',
        'Job title': 'Должность',
        'Mobile': 'Мобильный',
        'Phone (work)': 'Телефон (рабочий)',
        'Website': 'Сайт',
        'Street and number': 'Улица и дом',
        'Postal code': 'Индекс',
        'City': 'Город',
        'Region': 'Регион',
        'Country': 'Страна',
        'Note': 'Заметка',
        'To': 'Кому',
        'Subject': 'Тема',
        'Message': 'Сообщение',
        'Phone number': 'Номер телефона',
        'Latitude': 'Широта',
        'Longitude': 'Долгота',
        'Name of the place (optional)': 'Название места (необязательно)',
        'Title': 'Название',
        'All day': 'Весь день',
        'Start': 'Начало',
        'End': 'Конец',
        'Place': 'Место',
        'Description': 'Описание',
        'Currency': 'Валюта',
        'Address': 'Адрес',
        'Amount (optional)': 'Сумма (необязательно)',
        'Recipient (optional)': 'Получатель (необязательно)',
        'Message (optional)': 'Сообщение (необязательно)',
        'Recipient': 'Получатель',
        'BIC (optional)': 'BIC (необязательно)',
        'Amount in EUR (optional)': 'Сумма в EUR (необязательно)',
        'Creditor reference RF… (or a message below)': 'Референс кредитора RF… (или сообщение ниже)',
        'Message to the recipient': 'Сообщение получателю',
        'Purpose code (optional, e.g. CHAR)': 'Код назначения (необязательно, напр. CHAR)',
        'Note for the payer (optional)': 'Заметка для плательщика (необязательно)',
        'IBAN or QR-IBAN of the creditor (CH or LI)': 'IBAN или QR-IBAN кредитора (CH или LI)',
        'Creditor name': 'Имя кредитора',
        'Street': 'Улица',
        'Number': 'Дом',
        'Town': 'Населённый пункт',
        'Country (2 letters)': 'Страна (2 буквы)',
        'Amount (empty: the payer fills it in)': 'Сумма (пусто: её вводит плательщик)',
        'Reference': 'Референс',
        'No reference': 'Без референса',
        'QR reference (with a QR-IBAN)': 'QR-референс (с QR-IBAN)',
        'Creditor reference (RF…)': 'Референс кредитора (RF…)',
        'Reference number': 'Номер референса',
        'Additional information (message)': 'Доп. информация (сообщение)',
        'Billing information (optional, //S1/…)': 'Данные для счёта (необязательно, //S1/…)',
        'Payable by: name (optional)': 'Плательщик: имя (необязательно)',

        /* ---------- Design ---------- */
        'A Swiss QR bill is always drawn as the standard requires: black squares on white, the Swiss cross, error correction M. These settings apply to the other codes.':
            'Швейцарский QR-счёт всегда рисуется так, как требует стандарт: чёрные квадраты на белом, швейцарский крест, коррекция ошибок M. Эти настройки действуют для других кодов.',
        'Colors': 'Цвета',
        'Dark color': 'Тёмный цвет',
        'Background': 'Фон',
        'Transparent background': 'Прозрачный фон',
        'Gradient': 'Градиент',
        'None': 'Нет',
        'Linear': 'Линейный',
        'Radial': 'Радиальный',
        'Second color': 'Второй цвет',
        'Angle': 'Угол',
        'Modules': 'Модули',
        'Eyes': 'Глазки',
        'Frame': 'Рамка',
        'Center': 'Центр',
        'Own color for the eyes': 'Свой цвет для глазков',
        'Eye color': 'Цвет глазков',
        'Logo': 'Логотип',
        'No logo': 'Без логотипа',
        'Your own picture (PNG, JPEG, SVG, WebP) - it becomes part of the document':
            'Своё изображение (PNG, JPEG, SVG, WebP) - оно станет частью документа',
        'Picture…': 'Изображение…',
        'Logo size': 'Размер логотипа',
        'Remove the modules behind the logo': 'Убрать модули под логотипом',
        'Caption and frame': 'Подпись и рамка',
        'Caption': 'Подпись',
        'Position': 'Положение',
        'Below the code': 'Под кодом',
        'Above the code': 'Над кодом',
        'Line': 'Линия',
        'Filled': 'Заливка',
        'Frame and caption color': 'Цвет рамки и подписи',
        'Error correction and size': 'Коррекция ошибок и размер',
        'Error correction': 'Коррекция ошибок',
        'Quiet zone (modules)': 'Свободная зона (модули)',
        'Smallest version': 'Мин. версия',
        'Automatic': 'Авто',
        'Mask': 'Маска',
        'Use a higher error correction when it fits in the same size': 'Повышать коррекцию ошибок, если код остаётся того же размера',
        'Removes all design lines - "Undo" brings them back': 'Удаляет все строки оформления - «Отменить» вернёт их',
        'Reset the design': 'Сбросить дизайн',
        /* the pickers (small: one or two short words) */
        'Square': 'Квадрат',
        'Rounded': 'Скруглённые',
        'Dots': 'Точки',
        'Soft squares': 'Скруглённые квадраты',
        'Diamonds': 'Ромбы',
        'Vertical bars': 'Вертик. полосы',
        'Horizontal bars': 'Гориз. полосы',
        'Circle': 'Круг',
        'Leaf': 'Лист',
        'Web': 'Веб',
        'Mail': 'Почта',
        'Chat': 'Чат',
        'Map pin': 'Метка',
        'Calendar': 'Календарь',
        'Person': 'Человек',
        'Payment card': 'Платёжная карта',
        'Star': 'Звезда',
        'Heart': 'Сердце',

        /* ---------- Check ---------- */
        'Scan check': 'Проверка сканирования',
        'Scans reliably and reads back exactly the content': 'Надёжно сканируется и точно воспроизводит содержимое',
        'Scans, but only in good conditions': 'Сканируется, но только в хороших условиях',
        'Reads back something else than the content': 'Результат отличается от содержимого',
        'Normal size': 'Обычный размер',
        'Small (3 pixels per module)': 'Маленький (3 пикселя на модуль)',
        'Blurred, with less contrast': 'Размытый, с меньшим контрастом',
        'The editor reads its own drawing with a QR decoder (jsQR) in your browser. Test the printed code with a phone as well.':
            'Редактор читает собственный рисунок QR-декодером (jsQR) в вашем браузере. Проверьте напечатанный код ещё и телефоном.',
        'The code': 'Код',
        'Version': 'Версия',
        'Data': 'Данные',
        'Logo covers': 'Логотип закрывает',
        'Contrast': 'Контраст',
        'Print size': 'Размер печати',
        'Scanning distance (cm)': 'Расстояние (см)',
        'Printed width (mm)': 'Ширина печати (мм)',
        'Problems': 'Проблемы',
        'No problems.': 'Проблем нет.',

        /* ---------- Problems ---------- */
        'A SEPA payment code uses error correction M, as the standard requires': 'Код платежа SEPA использует коррекцию ошибок M, как требует стандарт',
        'The drawn code reads back something else than the content - check the content for characters the code cannot hold':
            'Результат считывания кода отличается от содержимого - проверьте, нет ли в содержимом символов, которые код не может вместить',
        'The drawn code does not scan - raise the contrast, make the logo smaller or choose more error correction':
            'Нарисованный код не сканируется - повысьте контраст, уменьшите логотип или выберите более сильную коррекцию ошибок',
        'The code scans, but not when it is small - simpler shapes, more contrast or more error correction help':
            'Код сканируется, но не в маленьком размере - помогут более простые формы, больший контраст или более сильная коррекция ошибок',
        'The code scans, but not when it is blurred or the light is poor - simpler shapes, more contrast or more error correction help':
            'Код сканируется, но не при размытии или плохом освещении - помогут более простые формы, больший контраст или более сильная коррекция ошибок',
        'Light code on a dark background: many scanners read it, but some older ones do not - dark on light is safest':
            'Светлый код на тёмном фоне: многие сканеры его читают, но некоторые старые - нет; надёжнее всего тёмный на светлом',
        'Transparent background: print the code only on a plain, light surface': 'Прозрачный фон: печатайте код только на однотонной светлой поверхности',
        'Round eyes are read by phone cameras, but some scanner apps and devices only find square ones - for codes many people scan, square or rounded eyes are safer':
            'Круглые глазки читают камеры телефонов, но некоторые приложения и устройства-сканеры находят только квадратные - для кодов, которые сканирует много людей, надёжнее квадратные или скруглённые глазки',
        'The content is too long for a QR code at this error correction - shorten it or choose L':
            'Содержимое слишком длинное для QR-кода при этой коррекции ошибок - сократите его или выберите L',
        'The IBAN is missing': 'IBAN не указан',
        'The IBAN has the wrong form (two letters, two digits, then letters and digits)': 'IBAN имеет неверный вид (две буквы, две цифры, затем буквы и цифры)',
        'The check digits of the IBAN do not match - a typing error?': 'Контрольные цифры IBAN не совпадают - опечатка?',
        'A QR reference has 27 digits': 'QR-референс состоит из 27 цифр',
        'The check digit of the QR reference does not match': 'Контрольная цифра QR-референса не совпадает',
        'A creditor reference starts with RF and two check digits, 5 to 25 characters':
            'Референс кредитора начинается с RF и двух контрольных цифр, от 5 до 25 символов',
        'The check digits of the creditor reference do not match': 'Контрольные цифры референса кредитора не совпадают',
        'The code has no content yet': 'У кода пока нет содержимого',
        'The address contains spaces - encode them as %20': 'Адрес содержит пробелы - закодируйте их как %20',
        'The address has no https:// - some scanners show it as text instead of opening it':
            'В адресе нет https:// - некоторые сканеры показывают его как текст, а не открывают',
        'The address uses http:// - the browser may warn that the page is not secure; use https:// if the site has it':
            'Адрес использует http:// - браузер может предупредить, что страница небезопасна; используйте https://, если сайт его поддерживает',
        'This is not a valid address': 'Это недопустимый адрес',
        'The network name (SSID) is missing': 'Не указано имя сети (SSID)',
        'The password is missing (or choose "None" for an open network)': 'Не указан пароль (или выберите «Нет» для открытой сети)',
        'A WEP key has 5, 13, 16 or 29 characters (or 10, 26, 32, 58 hex digits)': 'Ключ WEP состоит из 5, 13, 16 или 29 символов (или 10, 26, 32, 58 шестнадцатеричных цифр)',
        'WEP is not secure - use WPA2 or WPA3 if your router has it': 'WEP небезопасен - используйте WPA2 или WPA3, если роутер их поддерживает',
        'T:SAE is not in the WiFi standard and some scanners do not read it - T:WPA works for WPA2 and WPA3':
            'T:SAE нет в стандарте Wi-Fi, и некоторые сканеры его не читают - T:WPA работает для WPA2 и WPA3',
        'A WPA password has 8 to 63 characters': 'Пароль WPA состоит из 8–63 символов',
        'The contact has no name and no company': 'У контакта нет ни имени, ни компании',
        'The email address looks wrong': 'Адрес эл. почты выглядит неверным',
        'No address - the email app opens with an empty "To"': 'Нет адреса - почтовое приложение откроется с пустым полем «Кому»',
        'The phone number is missing': 'Не указан номер телефона',
        'The phone number contains other characters than digits and +': 'Номер телефона содержит символы, кроме цифр и +',
        'Without the country code (+41 …) the number only works within the country': 'Без кода страны (+41 …) номер работает только внутри страны',
        'Latitude and longitude are needed as numbers, for example 47.6779 and 8.6152': 'Широта и долгота нужны в виде чисел, например 47.6779 и 8.6152',
        'The latitude lies between -90 and 90, the longitude between -180 and 180': 'Широта лежит в пределах от -90 до 90, долгота - от -180 до 180',
        'The event has no BEGIN:VEVENT': 'У события нет BEGIN:VEVENT',
        'The event has no END:VEVENT': 'У события нет END:VEVENT',
        'The event has no title': 'У события нет названия',
        'The event has no start': 'У события нет начала',
        'The event ends before it starts': 'Событие заканчивается раньше, чем начинается',
        'The address is missing': 'Адрес не указан',
        'The amount must be a number with a point, for example 0.005': 'Сумма должна быть числом с точкой, например 0.005',
        'An Ethereum address has 0x and 40 hex digits': 'Адрес Ethereum состоит из 0x и 40 шестнадцатеричных цифр',
        'This does not look like a Bitcoin address': 'Это не похоже на адрес Bitcoin',
        'The second line is the version, 001 or 002': 'Вторая строка - версия, 001 или 002',
        'The third line should be 1 (UTF-8)': 'Третья строка должна быть 1 (UTF-8)',
        'The fourth line must be SCT': 'Четвёртая строка должна быть SCT',
        'Version 001 needs a BIC': 'Версии 001 нужен BIC',
        'The BIC has 8 or 11 letters and digits': 'BIC состоит из 8 или 11 букв и цифр',
        'The recipient is missing': 'Не указан получатель',
        'The recipient has more than 70 characters': 'Получатель длиннее 70 символов',
        'The amount is between 0.01 and 999999999.99 EUR, with a point and at most two decimals':
            'Сумма от 0.01 до 999999999.99 EUR, с точкой и не более чем двумя знаками после неё',
        'The purpose code has 4 letters (for example CHAR, GDDS)': 'Код назначения состоит из 4 букв (например CHAR, GDDS)',
        'Either a reference or a message, not both': 'Либо референс, либо сообщение, но не оба',
        'The message has more than 140 characters': 'Сообщение длиннее 140 символов',
        'The second line is the version 0200': 'Вторая строка - версия 0200',
        'The third line is the coding type 1': 'Третья строка - тип кодировки 1',
        'The Swiss QR bill takes only IBANs of Switzerland and Liechtenstein (CH, LI)':
            'Швейцарский QR-счёт принимает только IBAN Швейцарии и Лихтенштейна (CH, LI)',
        'The creditor address must be structured (S): street, number, postal code and town in their own lines':
            'Адрес кредитора должен быть структурированным (S): улица, дом, индекс и населённый пункт в отдельных строках',
        'The creditor name is missing': 'Не указано имя кредитора',
        'Postal code and town of the creditor are needed': 'Нужны индекс и населённый пункт кредитора',
        'The country of the creditor is two letters, for example CH': 'Страна кредитора - две буквы, например CH',
        'The ultimate creditor (lines 12 to 18) must stay empty': 'Конечный кредитор (строки 12–18) должен оставаться пустым',
        'The amount is between 0.01 and 999999999.99, with a point and two decimals': 'Сумма от 0.01 до 999999999.99, с точкой и двумя знаками после неё',
        'The currency is CHF or EUR': 'Валюта - CHF или EUR',
        'Postal code and town of the payer are needed': 'Нужны индекс и населённый пункт плательщика',
        'The payer\'s address must be structured (S)': 'Адрес плательщика должен быть структурированным (S)',
        'The reference type is QRR, SCOR or NON': 'Тип референса - QRR, SCOR или NON',
        'A QR-IBAN needs a QR reference (QRR)': 'Для QR-IBAN нужен QR-референс (QRR)',
        'A QR reference needs a QR-IBAN (an IBAN with 30000 to 31999 after the check digits)':
            'Для QR-референса нужен QR-IBAN (IBAN с 30000–31999 после контрольных цифр)',
        'From 14 November 2026 a bill in EUR takes only an IBAN with a creditor reference (SCOR) or none - QR-IBAN and QR reference only in CHF':
            'С 14 ноября 2026 года счёт в EUR принимает только IBAN с референсом кредитора (SCOR) или без референса - QR-IBAN и QR-референс только в CHF',
        'Without a reference type the reference line must be empty': 'Без типа референса строка референса должна быть пустой',
        'Message and billing information together have at most 140 characters': 'Сообщение и данные для счёта вместе - не более 140 символов',
        'Line 31 must be EPD (end of the payment data)': 'Строка 31 должна быть EPD (конец платёжных данных)',
        'The Swiss QR bill allows only Latin characters (no emoji, no other scripts)':
            'Швейцарский QR-счёт допускает только латинские символы (без эмодзи и других письменностей)',
    },
    html: {
        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Нажмите <b>Копировать промпт</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'ИИ отвечает ссылкой: щёлкните по ней или вставьте весь ответ ниже. <b>Отменить</b> вернёт всё назад.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'ИИ отвечает ссылкой: <b>вставьте весь его ответ ниже</b> (щелчок по ссылке открывает отдельный редактор). <b>Отменить</b> вернёт всё назад.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'Редактор может отправлять каждую сохранённую версию на ваш собственный сервер (<b>вебхук</b>), чтобы ваша работа хранилась там, где вы хотите. Ничего не отправляется, пока вы не введёте здесь адрес.',
        'Also possible: <code>?src=&lt;URL of a .qr file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>qreditor:ai</code>, <code>qreditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Также можно: <code>?src=&lt;URL файла .qr&gt;</code> открывает файл, <code>&amp;webhook=&lt;URL&gt;</code> сохраняет туда этот документ. Редактор может открываться и в отдельном окне (<code>?embed=window</code>), а ваша страница может передать ему собственный промпт для ИИ и ключ сеанса, чтобы ИИ отправлял результат на ваш сервер (<code>qreditor:ai</code>, <code>qreditor:key-request</code>) - см. «Редактор на вашем сайте» под редактором. Подробности - в <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Choose what the code holds</b> under <b>New</b> or in the <b>Content</b> tab: a link, WiFi, a contact, an event, a payment … The form writes the content in the form phones read.':
            '<b>Выберите, что содержит код</b>, в меню <b>Новый</b> или на вкладке <b>Содержимое</b>: ссылка, Wi-Fi, контакт, событие, платёж … Форма записывает содержимое в том виде, который читают телефоны.',
        '<b>Design it</b> in the <b>Design</b> tab: colors and gradient, the shape of the modules and of the three eyes, a logo, a caption and a frame.':
            '<b>Оформите его</b> на вкладке <b>Дизайн</b>: цвета и градиент, форма модулей и трёх глазков, логотип, подпись и рамка.',
        'The <b>code</b> on the left is the whole QR document: design lines <code>key: value</code>, a line <code>---</code>, then the content exactly as it goes into the code. You can type there too; every change is one step for Undo.':
            '<b>Код</b> слева - это весь QR-документ: строки оформления <code>key: value</code>, строка <code>---</code>, затем содержимое ровно в том виде, в каком оно попадает в код. Там тоже можно печатать; каждое изменение - один шаг для «Отменить».',
        '<b>Check</b>: after every change the editor reads the code back - normal, small and blurred. The badge above the code says whether it scans; the <b>Check</b> tab shows contrast, quiet zone, the logo against the error correction and the print size.':
            '<b>Проверка</b>: после каждого изменения редактор считывает код - в обычном размере, маленьким и размытым. Значок над кодом показывает, сканируется ли он; вкладка <b>Проверка</b> показывает контраст, свободную зону, логотип в сравнении с коррекцией ошибок и размер печати.',
        'Click the <b>caption</b> under the code to change it right there.':
            'Щёлкните по <b>подписи</b> под кодом, чтобы изменить её прямо там.',
        '<b>Export</b> makes SVG, PDF and EPS (vectors for print), PNG, JPEG or WebP up to 8192 pixels wide, and <b>many codes at once</b> from a table: write <code>{{column}}</code> in the content, paste the table, download a ZIP or one PDF.':
            '<b>Экспорт</b> создаёт SVG, PDF и EPS (векторы для печати), PNG, JPEG или WebP шириной до 8192 пикселей, а также <b>много кодов сразу</b> из таблицы: впишите <code>{{column}}</code> в содержимое, вставьте таблицу, скачайте ZIP или один PDF.',
        '<b>Read a code</b>: open, drop or paste a picture, or click <b>Read code</b> for the camera. The content becomes a new document.':
            '<b>Прочитать код</b>: откройте, перетащите или вставьте изображение или нажмите <b>Считать код</b> для камеры. Содержимое станет новым документом.',

    },
    patterns: [
        ['^(\\d+) bytes? · version (\\d+) \\((\\d+) × (\\d+) modules\\)$', (m, n, v, a, b) => ((n, v, a, b) => `${n} ${getByteWord(n)} · версия ${v} (${a} × ${b} модулей)`)(n, v, a, b)],
        ['^(\\d+) bytes?$', (m, n) => (n => `${n} ${getByteWord(n)}`)(n)],
        /* ---------- Code, problems above the code ---------- */
        ['^(\\d+) (?:line|lines) · (.+)$', (m, l, s) => `${l} ${getPlural(l, 'строка', 'строки', 'строк')} · ${formatSize(s)}`],
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'ошибка', 'ошибки', 'ошибок')}`],
        ['^(· )?(\\d+) (?:note|notes)$', (m, p, k) => `${p || ''}${k} ${getPlural(k, 'замечание', 'замечания', 'замечаний')}`],
        ['^Line (\\d+)$', 'Строка $1'],

        /* ---------- Check ---------- */
        ['^- repairs about (\\d+) %$', '- исправляет около $1 %'],
        ['^(\\d+) of (\\d+) bytes \\((\\d+) %\\)$', (m, a, b, p) => `${a} из ${b} ${getPlural(b, 'байта', 'байт', 'байт')} (${p} %)`],
        ['^(\\d+) % of the modules$', '$1 % модулей'],
        ['^From ([\\d.]+) cm the code should be at least ([\\d.]+) cm wide\\.$',
            (m, d, w) => `С расстояния ${formatDecimal(d)} см код должен быть шириной не менее ${formatDecimal(w)} см.`],
        ['^At ([\\d.]+) mm one module is ([\\d.]+) mm ✓$', (m, a, b) => `При ${formatDecimal(a)} мм один модуль - ${formatDecimal(b)} мм ✓`],
        ['^At ([\\d.]+) mm one module is ([\\d.]+) mm - below 0\\.4 mm many phones fail; print it larger !$',
            (m, a, b) => `При ${formatDecimal(a)} мм один модуль - ${formatDecimal(b)} мм - меньше 0,4 мм многие телефоны не справляются; печатайте крупнее!`],

        /* ---------- Export ---------- */
        ['^(\\d+) × (\\d+) pixels = ([\\d.]+) mm at (\\d+) dpi$', (m, w, h, mm, d) => `${w} × ${h} пикс. = ${formatDecimal(mm)} мм при ${d} dpi`],
        ['^(\\d+) × (\\d+) pixels$', '$1 × $2 пикс.'],
        ['^One module ([\\d.]+) mm$', (m, v) => `Один модуль ${formatDecimal(v)} мм`],
        ['^One module ([\\d.]+) mm - below 0\\.4 mm many phones fail$', (m, v) => `Один модуль ${formatDecimal(v)} мм - меньше 0,4 мм многие телефоны не справляются`],
        ['^([\\d.]+) × ([\\d.]+) mm$', (m, a, b) => `${formatDecimal(a)} × ${formatDecimal(b)} мм`],
        ['^(\\d+) (?:row|rows) · (.+)$', (m, k, r) => `${k} ${getPlural(k, 'строка', 'строки', 'строк')} · ${r}`],
        ['^At most (\\d+) rows at once$', 'Не более $1 строк за раз'],
        ['^Left out \\(content too long\\): lines (.+)$', 'Пропущены (слишком длинное содержимое): строки $1'],
        ['^(\\d+) (?:code|codes) made$', (m, k) => `${getPlural(k, 'Создан', 'Создано', 'Создано')} ${k} ${getPlural(k, 'код', 'кода', 'кодов')}`],
        ['^(\\d+) (?:code|codes) made - (\\d+) left out$', (m, k, s) => `${getPlural(k, 'Создан', 'Создано', 'Создано')} ${k} ${getPlural(k, 'код', 'кода', 'кодов')} - пропущено ${s}`],

        /* ---------- Problems with values ---------- */
        ['^The Swiss QR bill is drawn as its standard requires - (.+) (is|are) not used$',
            (m, k, v) => `Швейцарский QR-счёт рисуется так, как требует его стандарт - ${k} ${v === 'is' ? 'не используется' : 'не используются'}`],
        ['^Contrast ([\\d.]+):1 between (#[0-9a-fA-F]+) and the background is too low - scanners need at least 3:1, better 4\\.5:1 or more$',
            (m, r, c) => `Контраст ${formatDecimal(r)}:1 между ${c} и фоном слишком низкий - сканерам нужно не менее 3:1, лучше 4,5:1 или больше`],
        ['^Contrast ([\\d.]+):1 between (#[0-9a-fA-F]+) and the background is low - 4\\.5:1 or more scans reliably, also in poor light$',
            (m, r, c) => `Контраст ${formatDecimal(r)}:1 между ${c} и фоном низкий - при 4,5:1 и выше код надёжно сканируется, в том числе при плохом освещении`],
        ['^A quiet zone of (\\d+) (?:module|modules) is too small - the standard asks for 4, with less than 2 many scanners fail$',
            (m, k) => `Свободная зона в ${k} ${getPlural(k, 'модуль', 'модуля', 'модулей')} слишком мала - стандарт требует 4, при значении меньше 2 многие сканеры не справляются`],
        ['^The quiet zone has (\\d+) modules - the standard asks for 4 \\(a light frame of 4 modules around the code\\)$',
            (m, k) => `Свободная зона - ${k} ${getPlural(k, 'модуль', 'модуля', 'модулей')}, а стандарт требует 4 (светлая рамка в 4 модуля вокруг кода)`],
        ['^The logo hides about (\\d+) % of the code, error correction ([LMQH]) repairs at most (\\d+) % - make the logo smaller or choose error correction H$',
            'Логотип закрывает около $1 % кода, коррекция ошибок $2 восстанавливает не более $3 % - уменьшите логотип или выберите коррекцию ошибок H'],
        ['^The logo hides about (\\d+) % of the code, error correction ([LMQH]) repairs at most (\\d+) % - little room is left for dirt and damage; H is safer$',
            'Логотип закрывает около $1 % кода, коррекция ошибок $2 восстанавливает не более $3 % - мало запаса на грязь и повреждения; H надёжнее'],
        ['^A logo takes away part of the code: error correction Q or H keeps it readable \\(now ([LMQH])\\)$',
            'Логотип закрывает часть кода: коррекция ошибок Q или H сохраняет его читаемым (сейчас $1)'],
        ['^Unknown key "(.+)" - it is kept, but has no effect$', 'Неизвестный ключ «$1» - он сохраняется, но ни на что не влияет'],
        ['^"(.+)" is set twice - the last line counts$', '«$1» задан дважды - действует последняя строка'],
        ['^"(.+)" is not valid \\(([^()]+)\\) - the default is used$', (m, v, h) => `«${v}» - недопустимое значение (${translateHint(h)}) - используется значение по умолчанию`],
        ['^An IBAN of ([A-Z]{2}) has (\\d+) characters, this one (\\d+)$', (m, c, a, b) => `IBAN страны ${c} состоит из ${a} ${getPlural(a, 'символа', 'символов', 'символов')}, а этот - из ${b}`],
        ['^(.+) is a link shortener or redirect service: the code works only as long as that service keeps the link - for printed codes put the real address in the code$',
            '$1 - сокращатель ссылок или сервис переадресации: код работает, только пока этот сервис хранит ссылку - для печатных кодов указывайте в коде настоящий адрес'],
        ['^The SEPA code has (\\d+) bytes, at most 331 are allowed$', (m, k) => `В коде SEPA ${k} ${getPlural(k, 'байт', 'байта', 'байт')}, допускается не более 331`],
        ['^Line (\\d+) has more than (\\d+) characters$', (m, l, k) => `Строка ${l} длиннее ${k} ${getPlural(k, 'символа', 'символов', 'символов')}`],
        ['^The Swiss QR bill has (\\d+) characters, at most 997 are allowed$', (m, k) => `В швейцарском QR-счёте ${k} ${getPlural(k, 'символ', 'символа', 'символов')}, допускается не более 997`],

        /* ---------- Messages ---------- */
        ['^(Link|Text|WiFi|Contact|Email|SMS|Phone|Location|Event|Crypto|SEPA payment|Swiss QR bill) - "Undo" brings the previous content back$',
            (m, k) => `${TYPES[k]} - «Отменить» вернёт прежнее содержимое`],
        ['^No QR code found in "the clipboard"$', 'В буфере обмена не найден QR-код'],
        ['^No QR code found in "(.+)"$', 'В «$1» не найден QR-код'],
        ['^QR code read \\((.+)\\) from "the camera" - it is a new document$', 'QR-код прочитан ($1) с камеры - это новый документ'],
        ['^QR code read \\((.+)\\) from "the clipboard" - it is a new document$', 'QR-код прочитан ($1) из буфера обмена - это новый документ'],
        ['^QR code read \\((.+)\\) from "(.+)" - it is a new document$', 'QR-код прочитан ($1) из «$2» - это новый документ'],
        ['^QR code read \\((.+)\\) - it is a new document$', 'QR-код прочитан ($1) - это новый документ'],
        ['^QR code received - the editor found (\\d+) (?:problem|problems)$',
            (m, k) => `QR-код получен - редактор нашёл ${k} ${getPlural(k, 'проблему', 'проблемы', 'проблем')}`],
        /* the same messages when they arrive in English as a whole */
        ['^"(.+)" is open\\. My documents: open, rename, duplicate or delete your documents \\(Ctrl\\+O\\)$',
            '«$1» открыт. Мои документы: открывайте, переименовывайте, дублируйте или удаляйте свои документы (Ctrl+O)'],
        ['^New document "(.+)" - your other documents are under "My documents"$', 'Новый документ «$1» - другие ваши документы в разделе «Мои документы»'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$', 'Новый документ «$1» от ИИ - другие ваши документы не изменились'],
        ['^"(.+)" is neither a \\.qr file nor a picture$', '«$1» - не файл .qr и не изображение'],
        ['^"(.+)" opened - it is now in "My documents"$', '«$1» открыт - теперь он в разделе «Мои документы»'],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '«$1» изменён ИИ - «Отменить» вернёт всё назад'],
        ['^"(.+)" opened$', '«$1» открыт'],

        /* ---------- My documents ---------- */
        ['^(\\d+) (?:document|documents) · (.+) in this browser$',
            (m, k, s) => `${k} ${getPlural(k, 'документ', 'документа', 'документов')} · ${formatSize(s)} в этом браузере`],
        ['^No document named "(.*)"\\.$', 'Нет документа с именем «$1».'],
        ['^Open now · (.+)$', (m, s) => `Открыт сейчас · ${formatSize(s)}`],
        ['^(just now|yesterday|\\d+ min ago|\\d+ h ago|[A-Z][a-z]{2} \\d{1,2}, \\d{4}) · (.+)$', (m, w, s) => `${formatTime(w)} · ${formatSize(s)}`],
        ['^(.+) \\(open now\\)$', '$1 (открыт сейчас)'],
        ['^ZIP with (\\d+) (?:document|documents) downloaded$', (m, k) => `ZIP с ${k} ${getPlural(k, 'документом', 'документами', 'документами')} скачан`],
        ['^"(.+)" duplicated$', '«$1» дублирован'],
        ['^Delete "(.+)"\\?$', 'Удалить «$1»?'],
        ['^"(.+)" deleted$', '«$1» удалён'],

        /* ---------- AI Assistant ---------- */
        ['^Part (\\d+) of (\\d+) received$', 'Часть $1 из $2 получена'],
        ['^Open the other (?:link|links) from the AI too \\(still missing: part (.+)\\)\\.$', 'Откройте и другие ссылки от ИИ (ещё не хватает: часть $1).'],
        ['^Part (\\d+) of (\\d+) received - paste the other (?:link|links) too \\(missing: (.+)\\)$', 'Часть $1 из $2 получена - вставьте и другие ссылки (не хватает: $3)'],
        ['^The AI sends the document to (.+) with a key that only works for this session\\. What you paste into your AI is handled by its provider\\.$',
            'ИИ отправляет документ на $1 с ключом, который действует только в этом сеансе. То, что вы вставляете в свой ИИ, обрабатывает его провайдер.'],
        ['^The AI sends its result to (.+) by itself, and it opens here\\. If it answers with a link, paste its answer below\\.$',
            'ИИ сам отправляет свой результат на $1, и он открывается здесь. Если ИИ отвечает ссылкой, вставьте его ответ ниже.'],
        ['^No key from (.+) - the prompt asks the AI for a link instead$', 'Нет ключа от $1 - вместо этого промпт просит ИИ прислать ссылку'],
        ['^Prompt copied - the AI sends its result to (.+)$', 'Промпт скопирован - ИИ отправит свой результат на $1'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Открыть $1'],
    ],
};
