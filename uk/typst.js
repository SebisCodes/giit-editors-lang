/* Ukrainian texts of the Typst editor: the bar, the work area (code, pages,
   document settings, insert, pictures and files, outline), its dialogs and
   messages. What all editors share is in common.js; how the
   dictionaries are used is described in i18n.js. The compiler's own
   messages stay as Typst writes them (English); names of documents, files,
   labels and functions stay as they are: the patterns copy them into the
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

/* Reasons a ZIP could not be opened (app.js openZip) */
const ZIP = { 'it is not a ZIP file': 'це не файл ZIP', 'there is no .typ file in it': 'у ньому немає файлу .typ' };

export default {
    text: {
        "This document has no pages yet - fix the problems above the code first": "У цьому документі ще немає сторінок - спершу виправте проблеми над кодом",
        // Editing in place: Enter and Shift+Enter
        "Editing on the page - Enter: new paragraph, Shift+Enter: new line, Ctrl+Enter or a click elsewhere keeps it, Escape cancels": "Редагування на сторінці - Enter: новий абзац, Shift+Enter: новий рядок, Ctrl+Enter або клацання деінде зберігає, Escape скасовує",
        "A new paragraph inside bold or emphasis is made in the code - Shift+Enter makes a new line": "Новий абзац у межах жирного чи курсивного тексту створюється в коді — Shift+Enter додає новий рядок",
        /* ---------- Top bar ---------- */
        'Typst Editor - home': 'Редактор Typst - на головну',
        'Typst Editor': 'Редактор Typst',
        'File': 'Файл',
        'My documents (Ctrl+O)': 'Мої документи (Ctrl+O)',
        'My documents': 'Мої документи',
        'New document, or start this one over': 'Новий документ або почати цей заново',
        'New': 'Новий',
        'New blank document': 'Новий порожній документ',
        'An empty A4 page - your other documents stay as they are':
            'Порожня сторінка A4 - інші ваші документи залишаться без змін',
        'Article': 'Стаття',
        'Title, abstract and four sections': 'Заголовок, анотація і чотири розділи',
        'Letter': 'Лист',
        'Addresses, date, subject and signature': 'Адреси, дата, тема і підпис',
        'Exercise sheet': 'Аркуш завдань',
        'Exercises with math, solutions and code': 'Завдання з формулами, розв’язками й кодом',
        'Social media post': 'Допис для соцмереж',
        'A square picture with colors and big type': 'Квадратна картинка з кольорами й великим шрифтом',
        'The welcome example': 'Вітальний приклад',
        'Shows what the editor can do': 'Показує, що вміє редактор',
        'Start this document over': 'Почати цей документ заново',
        'Keeps the #set rules at the top, empties the text - "Undo" brings it back':
            'Зберігає правила #set на початку, очищає текст - «Скасувати» поверне його',
        'Open a .typ file (or a picture or data file) from your computer (you can also drag it into the window)':
            'Відкрити файл .typ (або зображення чи файл даних) з комп’ютера (його можна й перетягнути у вікно)',
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
        'Save the document as a .typ file (Ctrl+S)': 'Зберегти документ як файл .typ (Ctrl+S)',
        'Download .typ': 'Завантажити .typ',
        'PDF, pictures of the pages and more (Ctrl+E)': 'PDF, зображення сторінок та інше (Ctrl+E)',
        'Export…': 'Експорт…',

        /* ---------- Views and work area ---------- */
        'View': 'Вигляд',
        'Edit': 'Правка',
        'Side panel': 'Бічна панель',
        'Preview': 'Перегляд',
        'Document': 'Документ',
        'Typst code': 'Код Typst',
        'Copy the Typst code to the clipboard': 'Скопіювати код Typst у буфер обміну',
        'Copy code': 'Копіювати код',
        'Copy': 'Копіювати',
        'Drag to change the width of the code area': 'Перетягніть, щоб змінити ширину області коду',
        'Drag to change the width': 'Перетягніть, щоб змінити ширину',
        'Formatting': 'Форматування',
        'Bold: *text* (Ctrl+B)': 'Жирний: *text* (Ctrl+B)',
        'Bold': 'Жирний',
        'Italic: _text_ (Ctrl+I)': 'Курсив: _text_ (Ctrl+I)',
        'Italic': 'Курсив',
        'Underline (Ctrl+U)': 'Підкреслений (Ctrl+U)',
        'Underline': 'Підкреслений',
        'Code in the text: `text`': 'Код у тексті: `text`',
        'Code in the text': 'Код у тексті',
        'Heading': 'Заголовок',
        'Bulleted list': 'Маркований список',
        'Numbered list': 'Нумерований список',
        'Table': 'Таблиця',
        'Picture': 'Зображення',
        'Math in the text (Ctrl+M)': 'Формула в тексті (Ctrl+M)',
        'Math': 'Математика',
        'Previous page (Page Up)': 'Попередня сторінка (Page Up)',
        'Previous page': 'Попередня сторінка',
        'Next page (Page Down)': 'Наступна сторінка (Page Down)',
        'Next page': 'Наступна сторінка',
        'Preview of the pages: click text to edit it or to jump to its place in the code':
            'Перегляд сторінок: клацніть текст, щоб редагувати його або перейти до його місця в коді',
        'Zoom out (Ctrl + -)': 'Зменшити (Ctrl + -)',
        'Zoom out': 'Зменшити',
        'Show at actual size': 'Показати в натуральну величину',
        'Zoom in (Ctrl + +)': 'Збільшити (Ctrl + +)',
        'Zoom in': 'Збільшити',
        'Fit the page width into the window': 'Вписати ширину сторінки у вікно',
        'Fit width': 'За шириною',
        'Show the whole page': 'Показати сторінку повністю',
        'Whole page': 'Уся сторінка',
        'Compiling…': 'Компіляція…',
        'Paper, font, margins and numbering of the document': 'Папір, шрифт, поля й нумерація документа',
        'Ready-made pieces: structure, text, math, symbols': 'Готові елементи: структура, текст, формули, символи',
        'Insert': 'Вставка',
        'The pictures and files of this document': 'Зображення й файли цього документа',
        'Pictures': 'Зображення',
        'The headings of the document': 'Заголовки документа',
        'Outline': 'План',
        'The headings of the document. Click one to go there in the code and on the pages.':
            'Заголовки документа. Клацніть заголовок, щоб перейти до нього в коді й на сторінках.',
        'No headings yet - add one with = Heading.': 'Заголовків поки немає - додайте заголовок за допомогою = Заголовок.',
        'Open it here': 'Відкрити тут',
        'Drop the .typ file, picture or data file here': 'Перетягніть сюди файл .typ, зображення або файл даних',
        'Text on the page': 'Текст на сторінці',

        /* Problems above the code */
        'Hide': 'Сховати',
        'Show': 'Показати',
        'Hint:': 'Підказка:',

        /* ---------- Insert tab ---------- */
        'Structure': 'Структура',
        'Subheading': 'Підзаголовок',
        'Third level': 'Третій рівень',
        'Contents': 'Зміст',
        '• Bulleted list': '• Маркери',
        '1. Numbered list': '1. Нумерація',
        'Term list': 'Список термінів',
        'Figure': 'Рисунок',
        'Two columns': 'Дві колонки',
        'Quote': 'Цитата',
        'Centered': 'По центру',
        'Program code': 'Код програми',
        'Title': 'Заголовок',
        'New page': 'Нова сторінка',
        'Vertical space': 'Верт. відступ',
        'Bibliography': 'Література',
        'A bibliography from a .bib file of the document (add it in the Pictures tab)':
            'Список літератури з файлу .bib документа (додайте його у вкладці «Зображення»)',
        'Footnote': 'Виноска',
        'Reference': 'Посилання',
        'Colored text': 'Кольоровий текст',
        'Highlighted': 'Виділений',
        'Colored box': 'Кольорова рамка',
        'Push right': 'Праворуч',
        '$x$ in the text': '$x$ у тексті',
        'Displayed': 'Виокремлена',
        'Numbered equation': 'Рівняння з №',
        'Aligned lines': 'Вирівнювання',
        'Fraction': 'Дріб',
        'Root': 'Корінь',
        'x² Power': 'x² Степінь',
        'x₁ Index': 'x₁ Індекс',
        '∑ Sum': '∑ Сума',
        '∫ Integral': '∫ Інтеграл',
        'lim Limit': 'lim Границя',
        'Matrix': 'Матриця',
        'Cases': 'Випадки (cases)',
        'Greek letters': 'Грецькі літери',
        'Symbols': 'Символи',
        'Pictures and files have their own tab:': 'Зображення й файли мають свою вкладку:',

        /* ---------- Pictures tab ---------- */
        'Add pictures or files…': 'Додати зображення або файли…',
        'No pictures or files yet': 'Зображень і файлів поки немає',
        'Pictures and files belong to “': 'Зображення й файли належать до «',
        '” and stay in your browser.': '» і залишаються у вашому браузері.',
        'Missing in this document': 'Відсутні в цьому документі',
        'Add file…': 'Додати файл…',
        'Insert it at the cursor': 'Вставити на місці курсора',
        'Show where it is used': 'Показати, де використовується',
        'A figure with caption and label at the cursor': 'Рисунок із підписом і міткою на місці курсора',
        'As figure': 'Як рисунок',
        'Rename - the code is changed along': 'Перейменувати - код зміниться разом з іменем',
        'Rename': 'Перейменувати',
        'Choose another file, keep the name': 'Вибрати інший файл, зберігши ім’я',
        'Replace': 'Замінити',
        'Download the file': 'Завантажити файл',
        'Download': 'Завантажити',
        'Remove the file from this document': 'Видалити файл із цього документа',
        'Remove': 'Видалити',
        'New name': 'Нове ім’я',
        'Font': 'Шрифт',

        /* ---------- Document tab ---------- */
        'Paper': 'Папір',
        'Square 120 × 120 mm (1:1)': 'Квадрат 120 × 120 мм (1:1)',
        'Portrait 4:5 (120 × 150 mm)': 'Портрет 4:5 (120 × 150 мм)',
        'Story 9:16 (90 × 160 mm)': 'Сторіс 9:16 (90 × 160 мм)',
        'Slide 16:9 (160 × 90 mm)': 'Слайд 16:9 (160 × 90 мм)',
        'Other size': 'Інший розмір',
        'Margins': 'Поля',
        'Typst default (about 2.5 cm)': 'Типово в Typst (близько 2,5 см)',
        'Normal (2.5 cm)': 'Звичайні (2,5 см)',
        'Narrow (2 cm)': 'Вузькі (2 см)',
        'Very narrow (1.5 cm)': 'Дуже вузькі (1,5 см)',
        'Wide (3.5 cm)': 'Широкі (3,5 см)',
        'None': 'Немає',
        'Other': 'Інше',
        'Orientation': 'Орієнтація',
        'Portrait': 'Книжкова',
        'Landscape': 'Альбомна',
        'Libertinus Serif (Typst default)': 'Libertinus Serif (типово в Typst)',
        'New Computer Modern (like LaTeX)': 'New Computer Modern (як у LaTeX)',
        'DejaVu Sans Mono (typewriter)': 'DejaVu Sans Mono (моноширинний)',
        'Font size': 'Розмір шрифту',
        '11 pt (default)': '11 pt (типово)',
        'Language': 'Мова',
        'English (default)': 'Англійська (типово)',
        'German': 'Німецька',
        'German (Switzerland)': 'Німецька (Швейцарія)',
        'French': 'Французька',
        'Italian': 'Італійська',
        'Spanish': 'Іспанська',
        'Line spacing': 'Міжрядковий інтервал',
        'Normal': 'Звичайний',
        'More': 'Більший',
        '1½ lines': 'Півтора',
        'Double': 'Подвійний',
        'Columns': 'Стовпці',
        'One': 'Один',
        'Two': 'Два',
        'Three': 'Три',
        'Justified text (both edges straight)': 'Вирівнювання за шириною (обидва краї рівні)',
        'Numbered headings (1., 1.1 …)': 'Нумеровані заголовки (1., 1.1 …)',
        'Page numbers': 'Номери сторінок',
        '(of the PDF; #title() shows it)': '(PDF; #title() показує його)',
        'Author': 'Автор',
        'Show the title (#title())': 'Показати заголовок (#title())',
        'pages · about': 'стор. · близько',
        'page · about': 'стор. · близько',

        /* ---------- Export ---------- */
        'Close': 'Закрити',
        'File name': 'Ім’я файлу',
        'PDF (from the Typst compiler)': 'PDF (з компілятора Typst)',
        'Pictures of the pages': 'Зображення сторінок',
        'SVG (vector)': 'SVG (вектор)',
        'Source': 'Вихідний код',
        'Typst source (.typ)': 'Вихідний код Typst (.typ)',
        'Typst with pictures and files (ZIP)': 'Typst із зображеннями й файлами (ZIP)',
        'Pages': 'Сторінки',
        'The page shown now': 'Сторінка, показана зараз',
        'All pages (one picture each, as ZIP)': 'Усі сторінки (по картинці на кожну, у ZIP)',
        'Sharpness': 'Чіткість',
        '96 dpi (screen)': '96 dpi (екран)',
        '300 dpi (print)': '300 dpi (друк)',
        'Result': 'Результат',
        'The PDF comes straight from the Typst compiler: the same pages as in the preview, with real text that can be selected and searched, links and the document\'s title.':
            'PDF створюється безпосередньо компілятором Typst: ті самі сторінки, що й у перегляді, зі справжнім текстом, який можна виділяти та в якому можна шукати, посиланнями й заголовком документа.',
        'Download everything at once: .typ, pictures and files, PDF and every page as PNG and SVG':
            'Завантажити все одразу: .typ, зображення й файли, PDF і кожну сторінку як PNG і SVG',
        'All formats (ZIP)': 'Усі формати (ZIP)',

        /* ---------- My documents ---------- */
        'Search by name': 'Пошук за назвою',
        'Search your documents': 'Пошук у ваших документах',
        'Open a .typ file from your computer as a new document': 'Відкрити файл .typ з комп’ютера як новий документ',
        'New document': 'Новий документ',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Клацніть документ, щоб відкрити його. Документи зберігаються лише в цьому браузері - нічого не вивантажується на сервер. Очищення даних сайту в браузері видалить їх, тому завантажте ті, які хочете зберегти.',
        'Download every document as a .typ file (with its pictures and files) in one ZIP':
            'Завантажити всі документи як файли .typ (із зображеннями й файлами) одним ZIP',
        'Download all (ZIP)': 'Завантажити все (ZIP)',
        'Duplicate': 'Дублювати',
        'Download as .typ': 'Завантажити як .typ',
        'Delete': 'Видалити',
        'This document is open': 'Цей документ відкрито',
        'Click to open this document': 'Клацніть, щоб відкрити цей документ',
        'No documents yet.': 'Документів поки немає.',

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
        /* the step with the link, also when the editor sets it anew (text by text) */
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
        'The document is now in the Typst Editor tab you already had open. Switch to that tab, or open it here.':
            'Документ тепер у вкладці редактора Typst, яку ви вже мали відкритою. Перейдіть до тієї вкладки або відкрийте його тут.',
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
        'A POST request with JSON (your server must allow CORS from https://typst.giit.ch):':
            'POST-запит із JSON (ваш сервер має дозволяти CORS з https://typst.giit.ch):',
        'https://example.com/api/typst': 'https://example.com/api/typst',
        'Embed the editor in your website': 'Вбудувати редактор у ваш сайт',
        'Send now': 'Надіслати зараз',
        'Save setting': 'Зберегти налаштування',

        /* ---------- Help ---------- */
        'How it works': 'Як це працює',
        'The compiler\'s errors and warnings are listed above the code with line, column and hint - click one to go there.':
            'Помилки й попередження компілятора перелічено над кодом із рядком, стовпцем і підказкою - клацніть повідомлення, щоб перейти до відповідного місця.',
        'Keyboard shortcuts': 'Поєднання клавіш',
        'Bold / italic / underline the selected text': 'Жирний / курсив / підкреслення виділеного тексту',
        'Show the cursor\'s place on the pages': 'Показати місце курсора на сторінках',
        'Indent / outdent': 'Збільшити / зменшити відступ',
        'Undo / redo': 'Скасувати / повторити',
        'Save (download .typ, or to your server) / export': 'Зберегти (завантажити .typ або на ваш сервер) / експорт',
        'Print the pages': 'Друк сторінок',
        '+ mouse wheel,': '+ коліщатко миші,',
        'Zoom the preview': 'Масштаб перегляду',
        'Page Up': 'Page Up',
        'Page Down': 'Page Down',
        'Previous / next page (in the preview)': 'Попередня / наступна сторінка (у перегляді)',

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
        'This text changed in the code - wait for the preview, then try again':
            'Цей текст змінився в коді - дочекайтеся оновлення перегляду і спробуйте знову',
        'The code changed meanwhile - the edit was not used': 'Код тим часом змінився - правку не застосовано',
        'The file is removed from this document. The code that uses it then reports a missing file. "Undo" does not bring it back.':
            'Файл видалено з цього документа. Код, який його використовує, повідомить про відсутній файл. «Скасувати» його не поверне.',
        'Pictures can be PNG, JPG, GIF, WebP, SVG or PDF; files CSV, JSON, YAML, TOML, XML, TXT, BIB, Typst or fonts':
            'Зображення можуть бути PNG, JPG, GIF, WebP, SVG або PDF; файли - CSV, JSON, YAML, TOML, XML, TXT, BIB, Typst або шрифти',
        'The file is larger than 12 MB': 'Файл більший за 12 МБ',
        'The picture could not be read': 'Не вдалося прочитати зображення',
        'Change width and height in the #set page(…) line': 'Змініть ширину й висоту в рядку #set page(…)',
        'Title added': 'Заголовок додано',
        'This document is empty already': 'Цей документ уже порожній',
        'The text is removed; the settings at the top (#set, #show, #import, #let) stay. "Undo" brings it back as long as the page is open.':
            'Текст видалено; налаштування на початку (#set, #show, #import, #let) залишаються. «Скасувати» поверне його, поки сторінка відкрита.',
        'Everything is removed. "Undo" brings it back as long as the page is open.':
            'Усе видалено. «Скасувати» поверне це, поки сторінка відкрита.',
        'Start over': 'Почати заново',
        'The file is larger than 8 MB': 'Файл більший за 8 МБ',
        'Downloaded': 'Завантажено',
        'Copied to the clipboard': 'Скопійовано в буфер обміну',
        'This browser does not allow copying this': 'Цей браузер не дозволяє це скопіювати',
        'Code copied': 'Код скопійовано',
        '.typ with its files downloaded (ZIP)': '.typ із файлами завантажено (ZIP)',
        '.typ downloaded': '.typ завантажено',
        'Add': 'Додати',
        'The document and its pictures are removed from this browser for good. Download it first if you want to keep a copy.':
            'Документ і його зображення буде остаточно видалено з цього браузера. Якщо хочете зберегти копію, спершу завантажте його.',
        'The page could not be drawn': 'Не вдалося намалювати сторінку',
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
        /* Pictures tab */
        'Drop or paste pictures anywhere in the editor, or add them here: <code>image("name")</code> shows a picture, <code>csv</code>, <code>json</code>, <code>read</code> or <code>bibliography</code> read data files, fonts (.otf, .ttf) work with <code>#set text(font: …)</code>.':
            'Перетягніть або вставте зображення будь-де в редакторі чи додайте їх тут: <code>image("name")</code> показує зображення, <code>csv</code>, <code>json</code>, <code>read</code> або <code>bibliography</code> читають файли даних, шрифти (.otf, .ttf) працюють із <code>#set text(font: …)</code>.',

        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Натисніть <b>Копіювати промпт</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'ШІ відповідає посиланням: клацніть його або вставте всю відповідь нижче. <b>Скасувати</b> поверне все назад.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'ШІ відповідає посиланням: <b>вставте всю його відповідь нижче</b> (клацнуте посилання відкриває окремий редактор). <b>Скасувати</b> поверне все назад.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'Редактор може надсилати кожну збережену версію на ваш власний сервер (<b>вебхук</b>), щоб ваша робота зберігалася там, де ви хочете. Нічого не надсилається, доки ви не введете тут адресу.',
        'Also possible: <code>?src=&lt;URL of a .typ file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>typsteditor:ai</code>, <code>typsteditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Також можна: <code>?src=&lt;URL of a .typ file&gt;</code> відкриває файл, <code>&amp;webhook=&lt;URL&gt;</code> зберігає туди цей документ. Редактор може відкриватися й в окремому вікні (<code>?embed=window</code>), а ваша сторінка може передати йому власний промпт для ШІ та ключ сеансу, щоб ШІ надсилав результат на ваш сервер (<code>typsteditor:ai</code>, <code>typsteditor:key-request</code>) - див. «Редактор на вашому сайті» під редактором. Подробиці - у <a href="/llms.txt">llms.txt</a>.',
        'Also possible: <code>?src=&lt;URL of a .typ file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>typsteditor:ai</code>, <code>typsteditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Також можна: <code>?src=&lt;URL of a .typ file&gt;</code> відкриває файл, <code>&amp;webhook=&lt;URL&gt;</code> зберігає туди цей документ. Редактор може відкриватися й в окремому вікні (<code>?embed=window</code>), а ваша сторінка може передати йому власний промпт для ШІ та ключ сеансу, щоб ШІ надсилав результат на ваш сервер (<code>typsteditor:ai</code>, <code>typsteditor:key-request</code>) - див. «Редактор на вашому сайті» під редактором. Подробиці - у <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> Typst on the left - or start with <b>New</b> and one of the templates. The real Typst compiler runs in your browser and shows the pages as you type.':
            '<b>Пишіть</b> Typst ліворуч - або почніть із <b>Новий</b> та одного із шаблонів. Справжній компілятор Typst працює у вашому браузері й показує сторінки просто під час набору.',
        '<b>Click text on the page</b> to edit it right there: a field opens with the cursor where you clicked, and the code\'s cursor goes to the same place. Enter starts a new paragraph; Shift+Enter inserts a line break. Ctrl+Enter (Cmd+Enter on macOS) or a click elsewhere applies the edit; Escape cancels. A click on math, a picture or text made by code jumps to its place in the code instead. The place where the code cursor is gets a frame on the page.':
            '<b>Клацніть текст на сторінці</b>, щоб редагувати його просто там: відкриється поле з курсором там, де ви клацнули, а курсор коду перейде в те саме місце. Enter починає новий абзац; Shift+Enter вставляє розрив рядка. Ctrl+Enter (Cmd+Enter у macOS) або клацання деінде застосовує зміну; Escape скасовує її. Клацання формули, зображення чи тексту, створеного кодом, натомість переносить до відповідного місця в коді. Місце, де стоїть курсор коду, обводиться рамкою на сторінці.',
        '<b>Document</b> on the right sets paper, font, margins and numbering (it edits the <code>#set</code> rules); <b>Insert</b> has ready-made pieces (lists, tables, math, symbols); <b>Pictures</b> holds the pictures and data files of the document; <b>Outline</b> lists the headings.':
            '<b>Документ</b> праворуч задає папір, шрифт, поля й нумерацію (він змінює правила <code>#set</code>); у <b>Вставці</b> є готові елементи (списки, таблиці, формули, символи); у <b>Зображеннях</b> зберігаються зображення й файли даних документа; <b>План</b> перелічує заголовки.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser.':
            '<b>Мої документи</b> (кнопка з текою вгорі ліворуч) показують усі документи, що зберігаються в цьому браузері.',
        '<b>Export</b> makes a PDF (from the Typst compiler, with real text) and pictures of the pages (PNG, JPG, WebP, SVG). <b>Download .typ</b> saves the code.':
            '<b>Експорт</b> створює PDF (компілятором Typst, зі справжнім текстом) і зображення сторінок (PNG, JPG, WebP, SVG). <b>Завантажити .typ</b> зберігає код.',
        'Packages from Typst Universe (<code>#import "@preview/…"</code>) are not downloaded - nothing is loaded from other servers. Fonts: Libertinus Serif, New Computer Modern, DejaVu Sans Mono and the fonts you add to a document.':
            'Пакети з Typst Universe (<code>#import "@preview/…"</code>) не завантажуються - нічого не завантажується з інших серверів. Шрифти: Libertinus Serif, New Computer Modern, DejaVu Sans Mono та шрифти, які ви додасте до документа.',
        'Math: <code>$…$</code> around the selection': 'Формула: <code>$…$</code> навколо виділення',
        'Comment lines in or out (<code>//</code>)': 'Закоментувати рядки або прибрати коментар (<code>//</code>)',
        'Enter in a list continues it (<code>-</code>, <code>+</code>, <code>1.</code>); Enter on an empty item ends it. Brackets, <code>$</code>, <code>*</code> and <code>_</code> go around a selection.':
            'Enter у списку продовжує його (<code>-</code>, <code>+</code>, <code>1.</code>); Enter на порожньому пункті завершує список. Дужки, <code>$</code>, <code>*</code> і <code>_</code> ставляться навколо виділення.',
    },
    patterns: [
        /* ---------- Status lines ---------- */
        ['^(\\d+) lines · ([\\d.]+ K?B)(?: · (\\d+) (?:page|pages))?$', (m, l, kb, p) => `${l} ${getPlural(l, 'рядок', 'рядки', 'рядків')} · ${formatSize(kb)}${p ? ` · ${p} ${getPlural(p, 'сторінка', 'сторінки', 'сторінок')}` : ''}`],
        ['^(\\d+) (?:page|pages)$', (m, k) => `${k} ${getPlural(k, 'сторінка', 'сторінки', 'сторінок')}`],
        ['^(\\d+) × (\\d+) pixels per page · (\\d+) (?:page|pages)$', (m, w, h, k) => `${w} × ${h} пікселів на сторінку · ${k} ${getPlural(k, 'сторінка', 'сторінки', 'сторінок')}`],
        ['^(\\d+) (?:page|pages) as SVG \\(sharp at any size\\)$', (m, k) => `${k} ${getPlural(k, 'сторінка', 'сторінки', 'сторінок')} у SVG (чітко в будь-якому розмірі)`],
        ['^\\.typ and (\\d+) (?:file|files)$', (m, k) => `.typ і ${k} ${getPlural(k, 'файл', 'файли', 'файлів')}`],
        ['^([\\d,]+) bytes$', (m, b) => formatSize(m)],
        ['^words · (\\d+) × (\\d+) mm(?: · compiled in (\\d+) ms)?$', (m, w, h, ms) => `слів · ${w} × ${h} мм${ms ? ` · скомпільовано за ${ms} мс` : ''}`],
        ['^\\d{1,3}(?:,\\d{3})+$', m => formatThousands(m)],

        /* Problems above the code */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'помилка', 'помилки', 'помилок')}`],
        ['^· (\\d+) (?:warning|warnings)$', (m, k) => `· ${k} ${getPlural(k, 'попередження', 'попередження', 'попереджень')}`],
        ['^(\\d+) (?:warning|warnings)$', (m, k) => `${k} ${getPlural(k, 'попередження', 'попередження', 'попереджень')}`],
        ['^Line (\\d+), column (\\d+)$', 'Рядок $1, стовпець $2'],

        /* ---------- Pictures tab ---------- */
        ['^(\\d+) (?:file|files) · (.+)$', (m, k, s) => `${k} ${getPlural(k, 'файл', 'файли', 'файлів')} · ${formatSize(s)}`],
        ['^Choose the file for (.+)$', 'Вибрати файл для $1'],
        ['^used (\\d+)×$', 'використано $1×'],
        ['^(.* · )?not used yet$', (m, a) => `${a || ''}поки не використовується`],
        ['^(.* · )?a font of the document$', (m, a) => `${a || ''}шрифт документа`],

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
        ['^"(.+)" is now "(.+)"$', '«$1» тепер називається «$2»'],
        ['^Remove "(.+)"\\?$', 'Видалити «$1»?'],
        ['^"(.+)" now has the new file$', '«$1» тепер має новий файл'],
        ['^"(.+)" added to "(.+)"$', '«$1» додано до «$2»'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '«$1» тепер порожній - «Скасувати» поверне вміст'],
        ['^"(.+)" opened$', '«$1» відкрито'],
        ['^New document "(.+)" - your other documents are under "My documents"$', 'Новий документ «$1» - інші ваші документи в «Мої документи»'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$', 'Новий документ «$1» від ШІ - інші ваші документи не змінилися'],
        ['^Opened "(.+)" - it is now in "My documents"$', '«$1» відкрито - тепер він у «Мої документи»'],
        ['^Opened "(.+)" with (\\d+) (?:file|files)$', (m, f, k) => `«${f}» відкрито з ${k} ${getPlural(k, 'файлом', 'файлами', 'файлами')}`],
        ['^"(.+)" could not be opened: (.*)$', (m, f, why) => `«${f}» не вдалося відкрити: ${ZIP[why] || why}`],
        ['^ZIP downloaded: \\.typ, files, PDF and (\\d+) (?:page|pages) as PNG and SVG$', (m, k) => `ZIP завантажено: .typ, файли, PDF і ${k} ${getPlural(k, 'сторінка', 'сторінки', 'сторінок')} у PNG і SVG`],
        ['^Document received - the compiler found (\\d+) (?:problem|problems), see above the code$', (m, k) => `Документ отримано - компілятор знайшов ${k} ${getPlural(k, 'проблему', 'проблеми', 'проблем')}, див. над кодом`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '«$1» змінено ШІ - «Скасувати» поверне все назад'],
        ['^"(.+)" duplicated$', '«$1» продубльовано'],
        ['^Delete "(.+)"\\?$', 'Видалити «$1»?'],
        ['^"(.+)" deleted$', '«$1» видалено'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Відкрити $1'],
    ],
};
