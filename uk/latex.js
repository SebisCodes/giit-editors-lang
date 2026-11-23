/* Ukrainian texts of the LaTeX editor: the bar, the work area (code, preview,
   document settings, insert, pictures, outline), its dialogs and messages,
   and the problems the preview finds in the code. What all editors share is
   in common.js; how the dictionaries are used is described in
   i18n.js. Names of documents, pictures, labels and commands stay as they
   are: the patterns copy them into the Ukrainian text. */

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
const ZIP = { 'it is not a ZIP file': 'це не файл ZIP', 'there is no .tex file in it': 'у ньому немає файлу .tex' };

export default {
    text: {
        // Editing in place: Enter and Shift+Enter
        "Editing on the page - Enter: new paragraph, Shift+Enter: new line, Ctrl+Enter or a click elsewhere keeps it, Escape cancels": "Редагування на сторінці - Enter: новий абзац, Shift+Enter: новий рядок, Ctrl+Enter або клацання деінде зберігає, Escape скасовує",
        "A new paragraph inside bold, italic or another command is made in the code - Shift+Enter makes a new line": "Новий абзац у межах жирного чи курсивного тексту або іншої команди створюється в коді — Shift+Enter додає новий рядок",
        "A new line in a heading or table cell is made in the code": "Новий рядок у заголовку чи клітинці таблиці додається в коді",
        /* ---------- Top bar ---------- */
        'LaTeX Editor - home': 'Редактор LaTeX - на головну',
        'LaTeX Editor': 'Редактор LaTeX',
        'File': 'Файл',
        'My documents (Ctrl+O)': 'Мої документи (Ctrl+O)',
        'My documents': 'Мої документи',
        'New document, or start this one over': 'Новий документ або почати цей заново',
        'New': 'Новий',
        'New blank document': 'Новий порожній документ',
        'An empty article - your other documents stay as they are':
            'Порожня стаття - інші ваші документи залишаться без змін',
        'Article': 'Стаття',
        'Title, abstract and three sections': 'Заголовок, анотація і три розділи',
        'Letter': 'Лист',
        'Addresses, date, subject and signature': 'Адреси, дата, тема і підпис',
        'Exercise sheet': 'Аркуш завдань',
        'Solutions with math and code': 'Розв’язки з формулами і кодом',
        'Social media post': 'Допис для соцмереж',
        'A square picture with colors and big type': 'Квадратне зображення з кольорами й великим шрифтом',
        'The welcome example': 'Вітальний приклад',
        'Shows what the editor can do': 'Показує, що вміє редактор',
        'Start this document over': 'Почати цей документ заново',
        'Keeps the preamble, empties the text - "Undo" brings it back':
            'Зберігає преамбулу, очищає текст - «Скасувати» поверне його',
        'Open a .tex file (or a picture) from your computer (you can also drag it into the window)':
            'Відкрити файл .tex (або зображення) з комп’ютера (його можна й перетягнути у вікно)',
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
        'Save the document as a .tex file (Ctrl+S)': 'Зберегти документ як файл .tex (Ctrl+S)',
        'Download .tex': 'Завантажити .tex',
        'PDF, pictures of the pages, HTML and more (Ctrl+E)': 'PDF, зображення сторінок, HTML та інше (Ctrl+E)',
        'Export…': 'Експорт…',

        /* ---------- Views and work area ---------- */
        'View': 'Вигляд',
        'Edit': 'Правка',
        'Side panel': 'Бічна панель',
        'Preview': 'Перегляд',
        'Document': 'Документ',
        'LaTeX code': 'Код LaTeX',
        'Copy the LaTeX code to the clipboard': 'Скопіювати код LaTeX у буфер обміну',
        'Copy code': 'Копіювати код',
        'Copy': 'Копіювати',
        'Indent the content of every environment neatly': 'Акуратно вирівняти відступи в кожному середовищі',
        'Tidy up': 'Упорядкувати',
        'Drag to change the width of the code area': 'Перетягніть, щоб змінити ширину області коду',
        'Drag to change the width': 'Перетягніть, щоб змінити ширину',
        'Formatting': 'Форматування',
        'Bold (Ctrl+B)': 'Жирний (Ctrl+B)',
        'Bold': 'Жирний',
        'Italic (Ctrl+I)': 'Курсив (Ctrl+I)',
        'Italic': 'Курсив',
        'Underline (Ctrl+U)': 'Підкреслений (Ctrl+U)',
        'Underline': 'Підкреслений',
        'Fixed-width text': 'Моноширинний текст',
        'Section heading': 'Заголовок розділу',
        'Section': 'Розділ',
        'Bulleted list': 'Маркований список',
        'Numbered list': 'Нумерований список',
        'Table': 'Таблиця',
        'Picture': 'Зображення',
        'Math in the text': 'Формула в тексті',
        'Math': 'Математика',
        'Previous page (Page Up)': 'Попередня сторінка (Page Up)',
        'Previous page': 'Попередня сторінка',
        'Next page (Page Down)': 'Наступна сторінка (Page Down)',
        'Next page': 'Наступна сторінка',
        'Preview of the pages: click text to jump to its place in the code':
            'Перегляд сторінок: клацніть текст, щоб перейти до його місця в коді',
        'Zoom out (Ctrl + -)': 'Зменшити (Ctrl + -)',
        'Zoom out': 'Зменшити',
        'Show at actual size': 'Показати в натуральну величину',
        'Zoom in (Ctrl + +)': 'Збільшити (Ctrl + +)',
        'Zoom in': 'Збільшити',
        'Fit the page width into the window': 'Вписати ширину сторінки у вікно',
        'Fit width': 'За шириною',
        'Show the whole page': 'Показати сторінку повністю',
        'Whole page': 'Уся сторінка',
        'Updating…': 'Оновлення…',
        'Paper, fonts, margins and title of the document': 'Папір, шрифти, поля і заголовок документа',
        'Ready-made pieces: structure, text, math, symbols': 'Готові елементи: структура, текст, формули, символи',
        'Insert': 'Вставка',
        'The pictures of this document': 'Зображення цього документа',
        'Pictures': 'Зображення',
        'The sections of the document': 'Розділи документа',
        'Outline': 'План',
        'The sections of the document. Click one to go there in the code and in the preview.':
            'Розділи документа. Клацніть розділ, щоб перейти до нього в коді й у перегляді.',
        'No sections yet - add one with \\section{…}.': 'Розділів поки немає - додайте розділ за допомогою \\section{…}.',
        'Open it here': 'Відкрити тут',
        'Drop the .tex file or picture here': 'Перетягніть сюди файл .tex або зображення',

        /* Problems above the code */
        'Hide': 'Сховати',
        'Show': 'Показати',

        /* ---------- Insert tab ---------- */
        'Structure': 'Структура',
        'Subsection': 'Підрозділ',
        'Subsubsection': 'Підпідрозділ',
        'Paragraph heading': 'Заголовок абзацу',
        '• Bulleted list': '• Маркери',
        '1. Numbered list': '1. Нумерація',
        'Description list': 'Список описів',
        'Figure': 'Рисунок',
        'Two columns': 'Дві колонки',
        'Quote': 'Цитата',
        'Centered': 'По центру',
        'Program code': 'Код програми',
        'Verbatim': 'Дослівно',
        'Abstract': 'Анотація',
        'Contents': 'Зміст',
        'Title': 'Заголовок',
        'New page': 'Нова сторінка',
        'Vertical space': 'Верт. відступ',
        'Bibliography': 'Література',
        'Footnote': 'Виноска',
        'Reference': 'Посилання',
        'Colored text': 'Кольоровий текст',
        'Colored box': 'Кольорова рамка',
        'Citation': 'Цитування',
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
        'lim Limit': 'lim Границя',
        'Cases': 'Випадки (cases)',
        'Theorem': 'Теорема',
        'Proof': 'Доведення',
        'Greek letters': 'Грецькі літери',
        'Symbols': 'Символи',
        'Pictures have their own tab:': 'Зображення мають свою вкладку:',

        /* ---------- Pictures tab ---------- */
        'Add pictures…': 'Додати зображення…',
        'No pictures yet': 'Зображень поки немає',
        'Missing in this document': 'Відсутні в цьому документі',
        'Add file…': 'Додати файл…',
        'Show where it is used': 'Показати, де використовується',
        '\\includegraphics at the cursor': '\\includegraphics на місці курсора',
        'A figure with caption and label at the cursor': 'Рисунок із підписом і міткою на місці курсора',
        'As figure': 'Як рисунок',
        'Rename - the code is changed along': 'Перейменувати - код зміниться разом з іменем',
        'Rename': 'Перейменувати',
        'Choose another file, keep the name': 'Вибрати інший файл, зберігши ім’я',
        'Replace': 'Замінити',
        'Download the picture': 'Завантажити зображення',
        'Download': 'Завантажити',
        'Remove the picture from this document': 'Видалити зображення з цього документа',
        'Remove': 'Видалити',
        'New name': 'Нове ім’я',
        'uses them.': 'використовує їх.',

        /* ---------- Document tab ---------- */
        'Kind': 'Тип',
        'Report (chapters)': 'Звіт (глави)',
        'Book': 'Книга',
        'Letter class': 'Клас листа',
        'Font size': 'Розмір шрифту',
        'Paper': 'Папір',
        'Square 120 × 120 mm (1:1)': 'Квадрат 120 × 120 мм (1:1)',
        'Portrait 4:5 (120 × 150 mm)': 'Портрет 4:5 (120 × 150 мм)',
        'Slide 16:9 (160 × 90 mm)': 'Слайд 16:9 (160 × 90 мм)',
        'Other size': 'Інший розмір',
        'Margins': 'Поля',
        'As the class sets it': 'Як задає клас',
        'Narrow (2 cm)': 'Вузькі (2 см)',
        'Very narrow (1.5 cm)': 'Дуже вузькі (1,5 см)',
        'Wide (3.5 cm)': 'Широкі (3,5 см)',
        'None': 'Немає',
        'Other': 'Інше',
        'Orientation': 'Орієнтація',
        'Portrait': 'Книжкова',
        'Landscape': 'Альбомна',
        'Font': 'Шрифт',
        'Latin Modern (the LaTeX font)': 'Latin Modern (шрифт LaTeX)',
        'Line spacing': 'Міжрядковий інтервал',
        'Single': 'Одинарний',
        '1½ lines': 'Півтора',
        'Double': 'Подвійний',
        'Language': 'Мова',
        'English (no babel)': 'Англійська (без babel)',
        'German (babel ngerman)': 'Німецька (babel ngerman)',
        'Other (babel)': 'Інша (babel)',
        'Space between paragraphs instead of indenting': 'Відступ між абзацами замість абзацного відступу',
        'Page numbers': 'Номери сторінок',
        'Author': 'Автор',
        '(several: separate with \\and)': '(кілька: розділяйте через \\and)',
        'Date': 'Дата',
        '(\\today = the current date)': '(\\today = поточна дата)',
        'Show the title (\\maketitle)': 'Показати заголовок (\\maketitle)',
        'Make it a complete document': 'Зробити повним документом',
        'pages · about': 'стор. · близько',
        'page · about': 'стор. · близько',

        /* ---------- Export ---------- */
        'Close': 'Закрити',
        'File name': 'Ім’я файлу',
        'PDF (print or save as PDF)': 'PDF (друк або збереження в PDF)',
        'HTML page (one file)': 'Сторінка HTML (один файл)',
        'Plain text': 'Звичайний текст',
        'Pictures of the pages': 'Зображення сторінок',
        'LaTeX source (.tex)': 'Вихідний код LaTeX (.tex)',
        'LaTeX with pictures (ZIP)': 'LaTeX із зображеннями (ZIP)',
        'Pages': 'Сторінки',
        'The page shown now': 'Сторінка, показана зараз',
        'All pages (one picture each, as ZIP)': 'Усі сторінки (по зображенню на кожну, у ZIP)',
        'Sharpness': 'Чіткість',
        '96 dpi (screen)': '96 dpi (екран)',
        '300 dpi (print)': '300 dpi (друк)',
        'Result': 'Результат',
        'Download everything at once: .tex, pictures, HTML, text and every page as PNG':
            'Завантажити все одразу: .tex, зображення, HTML, текст і кожну сторінку як PNG',
        'All formats (ZIP)': 'Усі формати (ZIP)',
        'Print / Save as PDF': 'Друк / Зберегти в PDF',
        '(The HTML page - with fonts and pictures inside - is created when you download or copy it.)':
            '(Сторінка HTML - зі шрифтами й зображеннями всередині - створюється під час завантаження або копіювання.)',

        /* ---------- My documents ---------- */
        'Search by name': 'Пошук за назвою',
        'Search your documents': 'Пошук у ваших документах',
        'Open a .tex file from your computer as a new document': 'Відкрити файл .tex з комп’ютера як новий документ',
        'New document': 'Новий документ',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Клацніть документ, щоб відкрити його. Документи зберігаються лише в цьому браузері - нічого не вивантажується на сервер. Очищення даних сайту в браузері видалить їх, тому завантажте ті, які хочете зберегти.',
        'Download every document as a .tex file (with its pictures) in one ZIP':
            'Завантажити всі документи як файли .tex (із зображеннями) одним ZIP',
        'Download all (ZIP)': 'Завантажити все (ZIP)',
        'Duplicate': 'Дублювати',
        'Download as .tex': 'Завантажити як .tex',
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
        'The document is now in the LaTeX Editor tab you already had open. Switch to that tab, or open it here.':
            'Документ тепер у вкладці редактора LaTeX, яку ви вже мали відкритою. Перейдіть до тієї вкладки або відкрийте його тут.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)':
            'Копіювання тут заборонене - текст виділено нижче: натисніть Ctrl+C (⌘C)',
        'Paste it into your AI and say what it should write.': 'Вставте його у свій ШІ та скажіть, що треба написати.',
        'The preview is the editor\'s own typesetting and understands the commands most documents use. The preview does not display TikZ drawings or fontspec fonts. Your source remains unchanged; compile it with an engine supported by its packages. fontspec requires XeLaTeX or LuaLaTeX.':
            'Для перегляду редактор сам верстає текст і розуміє команди, які використовуються в більшості документів. Перегляд не відображає малюнки TikZ і шрифти fontspec. Вихідний код залишається без змін; компілюйте його рушієм, сумісним із використаними пакетами. Для fontspec потрібен XeLaTeX або LuaLaTeX.',
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
        'A POST request with JSON (your server must allow CORS from https://latex.giit.ch):':
            'POST-запит із JSON (ваш сервер має дозволяти CORS з https://latex.giit.ch):',
        'Embed the editor in your website': 'Вбудувати редактор у ваш сайт',
        'Send now': 'Надіслати зараз',
        'Save setting': 'Зберегти налаштування',

        /* ---------- Help ---------- */
        'How it works': 'Як це працює',
        'Keyboard shortcuts': 'Поєднання клавіш',
        'Bold / italic / underline the selected text': 'Жирний / курсив / підкреслення виділеного тексту',
        'Show the cursor\'s place in the preview': 'Показати місце курсора в перегляді',
        'Indent / outdent': 'Збільшити / зменшити відступ',
        'Undo / redo': 'Скасувати / повторити',
        'Save (download .tex, or to your server) / export': 'Зберегти (завантажити .tex або на ваш сервер) / експорт',
        'Print / save as PDF': 'Друк / зберегти в PDF',
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
        'The code changed - wait for the preview, then try again': 'Код змінився - дочекайтеся оновлення перегляду й спробуйте знову',
        'The picture is removed from this document. Places that use it show an empty frame. "Undo" does not bring it back.':
            'Зображення видалено з цього документа. Місця, де воно використовується, показують порожню рамку. «Скасувати» його не поверне.',
        'Pictures can be PNG, JPG, GIF, WebP, SVG or PDF': 'Зображення можуть бути PNG, JPG, GIF, WebP, SVG або PDF',
        'The picture is larger than 12 MB': 'Зображення більше за 12 МБ',
        'The picture could not be read': 'Не вдалося прочитати зображення',
        'Change paperwidth and paperheight in the \\usepackage[…]{geometry} line':
            'Змініть paperwidth і paperheight у рядку \\usepackage[…]{geometry}',
        'Title added': 'Заголовок додано',
        'The text is now a complete document': 'Текст тепер повний документ',
        'The code is tidy already': 'Код уже впорядкований',
        'Code tidied up': 'Код упорядковано',
        'This document is empty already': 'Цей документ уже порожній',
        'The text between \\begin{document} and \\end{document} is removed; the preamble (paper, packages, title) stays. "Undo" brings it back as long as the page is open.':
            'Текст між \\begin{document} і \\end{document} видалено; преамбула (папір, пакети, заголовок) залишається. «Скасувати» поверне його, поки сторінка відкрита.',
        'Everything is removed. "Undo" brings it back as long as the page is open.':
            'Усе видалено. «Скасувати» поверне це, поки сторінка відкрита.',
        'Start over': 'Почати заново',
        'The file is larger than 8 MB': 'Файл більший за 8 МБ',
        'LaTeX pasted from the clipboard - "Undo" brings the old text back':
            'LaTeX вставлено з буфера обміну - «Скасувати» поверне старий текст',
        'Downloaded': 'Завантажено',
        'Copied to the clipboard': 'Скопійовано в буфер обміну',
        'This browser does not allow copying this': 'Цей браузер не дозволяє це скопіювати',
        'Code copied': 'Код скопійовано',
        '.tex with its pictures downloaded (ZIP)': '.tex із зображеннями завантажено (ZIP)',
        '.tex downloaded': '.tex завантажено',
        'Add': 'Додати',
        'The document and its pictures are removed from this browser for good. Download it first if you want to keep a copy.':
            'Документ і його зображення буде остаточно видалено з цього браузера. Якщо хочете зберегти копію, спершу завантажте його.',
        'This page could not be turned into a picture': 'Цю сторінку не вдалося перетворити на зображення',
        'The browser could not create this picture': 'Браузер не зміг створити це зображення',

        /* ---------- Problems the preview finds (latex.js) ---------- */
        'Extra } - there is no { that it closes': 'Зайва } - немає {, яку вона закриває',
        'Misplaced & - it only separates the columns of a table (tabular) or an align':
            '& не на місці - він лише розділяє стовпці таблиці (tabular) або align',
        'A lone # - write \\# for the character #': 'Окремий # - пишіть \\# для символу #',
        '$$ is never closed - add the closing $$': '$$ не закрито - додайте закривальний $$',
        '$ is never closed - every $ that starts math needs a $ that ends it':
            '$ не закрито - кожному $, що відкриває формулу, потрібен закривальний $',
        '\\( is never closed with \\)': '\\( не закрито за допомогою \\)',
        '\\[ is never closed with \\]': '\\[ не закрито за допомогою \\]',
        '\\maketitle without \\title{…} in the preamble': '\\maketitle без \\title{…} у преамбулі',
        '\\item outside a list - put it in \\begin{itemize} … \\end{itemize}':
            '\\item поза списком - помістіть його в \\begin{itemize} … \\end{itemize}',
        'BibTeX files cannot be read here - write the entries in \\begin{thebibliography}{9} … \\end{thebibliography}':
            'Файли BibTeX тут не читаються - додайте записи в \\begin{thebibliography}{9} … \\end{thebibliography}',
        'biblatex cannot run here - write the entries in \\begin{thebibliography}{9} … \\end{thebibliography}':
            'biblatex тут не працює - додайте записи в \\begin{thebibliography}{9} … \\end{thebibliography}',
        '\\verb needs a closing character on the same line, e.g. \\verb|text|':
            '\\verb потрібен закривальний символ у тому самому рядку, напр. \\verb|text|',
        '\\def is only understood in the form \\def\\name{…}': '\\def розуміється лише у формі \\def\\name{…}',
        '\\usepackage only works in the preamble (before \\begin{document})':
            '\\usepackage працює лише в преамбулі (до \\begin{document})',
        '\\documentclass belongs at the very top, before \\begin{document}':
            '\\documentclass має стояти на самому початку, до \\begin{document}',
        'Beamer slides are shown as normal pages in the preview':
            'Слайди Beamer показуються в перегляді як звичайні сторінки',
        'Text after \\end{document} is ignored': 'Текст після \\end{document} ігнорується',
        '\\begin{document} is never closed - add \\end{document} at the end':
            '\\begin{document} не закрито - додайте \\end{document} у кінці',
        'There is no \\begin{document} - add \\begin{document} … \\end{document}':
            'Немає \\begin{document} - додайте \\begin{document} … \\end{document}',
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
        /* Export */
        'The print dialog opens with exactly the pages of the preview. Choose <b>Save as PDF</b> (or "Microsoft Print to PDF") as the printer. In Chrome and Edge, untick "Headers and footers" if the browser offers it. The text in the PDF stays sharp and can be selected.':
            'Відкриється діалог друку саме з тими сторінками, що в перегляді. Як принтер виберіть <b>Зберегти як PDF</b> (або «Microsoft Print to PDF»). У Chrome і Edge зніміть позначку «Верхні та нижні колонтитули», якщо браузер її пропонує. Текст у PDF залишається чітким, і його можна виділяти.',

        /* Document tab without a preamble */
        'This text has no preamble (no <code>\\documentclass</code> and <code>\\begin{document}</code>), so it is shown as a plain A4 article.':
            'Цей текст не має преамбули (немає <code>\\documentclass</code> і <code>\\begin{document}</code>), тому його показано як просту статтю A4.',

        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Натисніть <b>Копіювати промпт</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'ШІ відповідає посиланням: клацніть його або вставте всю відповідь нижче. <b>Скасувати</b> поверне все назад.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'ШІ відповідає посиланням: <b>вставте всю його відповідь нижче</b> (клацнуте посилання відкриває окремий редактор). <b>Скасувати</b> поверне все назад.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'Редактор може надсилати кожну збережену версію на ваш власний сервер (<b>вебхук</b>), щоб ваша робота зберігалася там, де ви хочете. Нічого не надсилається, доки ви не введете тут адресу.',
        'Also possible: <code>?src=&lt;URL of a .tex file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>latexeditor:ai</code>, <code>latexeditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Також можна: <code>?src=&lt;URL of a .tex file&gt;</code> відкриває файл, <code>&amp;webhook=&lt;URL&gt;</code> зберігає туди цей документ. Редактор може відкриватися й в окремому вікні (<code>?embed=window</code>), а ваша сторінка може передати йому власний промпт для ШІ та ключ сеансу, щоб ШІ надсилав результат на ваш сервер (<code>latexeditor:ai</code>, <code>latexeditor:key-request</code>) - див. «Редактор на вашому сайті» під редактором. Подробиці - у <a href="/llms.txt">llms.txt</a>.',
        'Also possible: <code>?src=&lt;URL of a .tex file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>latexeditor:ai</code>, <code>latexeditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Також можна: <code>?src=&lt;URL of a .tex file&gt;</code> відкриває файл, <code>&amp;webhook=&lt;URL&gt;</code> зберігає туди цей документ. Редактор може відкриватися й в окремому вікні (<code>?embed=window</code>), а ваша сторінка може передати йому власний промпт для ШІ та ключ сеансу, щоб ШІ надсилав результат на ваш сервер (<code>latexeditor:ai</code>, <code>latexeditor:key-request</code>) - див. «Редактор на вашому сайті» під редактором. Подробиці - у <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> LaTeX on the left - or start with <b>New</b> and one of the templates. The preview on the right shows the typeset pages as you type.':
            '<b>Пишіть</b> LaTeX ліворуч - або почніть із <b>Новий</b> та одного із шаблонів. Перегляд праворуч показує зверстані сторінки просто під час набору.',
        '<b>Click text in the preview</b> to edit it right there: the cursor is where you clicked, and the code\'s cursor goes to the same place. <b>Enter</b> starts a new paragraph; <b>Shift+Enter</b> inserts a line break. <b>Ctrl+Enter</b> (<b>Cmd+Enter</b> on macOS) or a click elsewhere applies the edit; <b>Escape</b> cancels. A click on math, a picture or text made by a command jumps to its place in the code instead. The place where the code cursor is gets a frame in the preview.':
            '<b>Клацніть текст у перегляді</b>, щоб редагувати його просто там: курсор з’явиться там, де ви клацнули, а курсор коду перейде в те саме місце. <b>Enter</b> починає новий абзац; <b>Shift+Enter</b> вставляє розрив рядка. <b>Ctrl+Enter</b> (<b>Cmd+Enter</b> у macOS) або клацання деінде застосовує зміну; <b>Escape</b> скасовує її. Клацання формули, зображення чи тексту, створеного командою, натомість переносить до відповідного місця в коді. Місце, де стоїть курсор коду, обводиться рамкою в перегляді.',
        '<b>Document</b> on the right sets paper, font, margins and title; <b>Insert</b> has ready-made pieces (lists, tables, math, symbols); <b>Pictures</b> holds the pictures of the document; <b>Outline</b> lists the sections.':
            '<b>Документ</b> праворуч задає папір, шрифт, поля і заголовок; у <b>Вставці</b> є готові елементи (списки, таблиці, формули, символи); у <b>Зображеннях</b> зберігаються зображення документа; <b>План</b> перелічує розділи.',
        'Problems in the code (a missing <code>}</code>, an unknown command) are listed above the code - click one to go there.':
            'Проблеми в коді (пропущена <code>}</code>, невідома команда) перелічено над кодом - клацніть проблему, щоб перейти до неї.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser.':
            '<b>Мої документи</b> (кнопка з текою вгорі ліворуч) показують усі документи, що зберігаються в цьому браузері.',
        '<b>Export</b> makes a PDF (via the print dialog), pictures of the pages, an HTML page or plain text. <b>Download .tex</b> saves the code.':
            '<b>Експорт</b> створює PDF (через діалог друку), зображення сторінок, сторінку HTML або звичайний текст. <b>Завантажити .tex</b> зберігає код.',
        'Math: <code>$…$</code> around the selection': 'Формула: <code>$…$</code> навколо виділення',
        'Comment lines in or out (<code>%</code>)': 'Закоментувати рядки або прибрати коментар (<code>%</code>)',
        'Typing <code>\\begin{name}</code> and pressing <kbd>Enter</kbd> adds the matching <code>\\end{name}</code>. Brackets <code>{ [ (</code> and <code>$</code> close by themselves around a selection.':
            'Якщо ввести <code>\\begin{name}</code> і натиснути <kbd>Enter</kbd>, додасться відповідний <code>\\end{name}</code>. Дужки <code>{ [ (</code> і <code>$</code> самі закриваються навколо виділення.',
    },
    patterns: [
        /* ---------- Status lines ---------- */
        ['^(\\d+) lines · ([\\d.]+ K?B)(?: · (\\d+) (?:page|pages))?$', (m, l, kb, p) => `${l} ${getPlural(l, 'рядок', 'рядки', 'рядків')} · ${formatSize(kb)}${p ? ` · ${p} ${getPlural(p, 'сторінка', 'сторінки', 'сторінок')}` : ''}`],
        ['^(\\d+) (?:page|pages)$', (m, k) => `${k} ${getPlural(k, 'сторінка', 'сторінки', 'сторінок')}`],
        ['^(\\d+) × (\\d+) pixels per page · (\\d+) (?:page|pages)$', (m, w, h, k) => `${w} × ${h} пікселів на сторінку · ${k} ${getPlural(k, 'сторінка', 'сторінки', 'сторінок')}`],
        ['^\\.tex and (\\d+) (?:picture|pictures)$', (m, k) => `.tex і ${k} ${getPlural(k, 'зображення', 'зображення', 'зображень')}`],
        ['^([\\d,]+) bytes$', (m, b) => formatSize(m)],
        ['^words · (\\d+) × (\\d+) mm( · German)?$', (m, w, h, g) => `слів · ${w} × ${h} мм${g ? ' · німецька' : ''}`],
        ['^\\d{1,3}(?:,\\d{3})+$', m => formatThousands(m)],

        /* Problems above the code */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'помилка', 'помилки', 'помилок')}`],
        ['^· (\\d+) (?:note|notes)$', (m, k) => `· ${k} ${getPlural(k, 'зауваження', 'зауваження', 'зауважень')}`],
        ['^(\\d+) (?:note|notes)$', (m, k) => `${k} ${getPlural(k, 'зауваження', 'зауваження', 'зауважень')}`],
        ['^Line (\\d+)$', 'Рядок $1'],
        ['^The preview failed: (.*)$', 'Перегляд не вдався: $1'],
        ['^Unknown color "(.+)" - define it with \\\\definecolor\\{(.+)\\}\\{HTML\\}\\{RRGGBB\\}$', 'Невідомий колір «$1» - задайте його через \\definecolor{$2}{HTML}{RRGGBB}'],
        ['^Image "(.+)" not found - drag the picture into the editor \\(or add it in the Pictures tab\\)$', 'Зображення «$1» не знайдено - перетягніть зображення в редактор (або додайте його у вкладці «Зображення»)'],
        ['^(.) only works in math - write (\\$x.2\\$), or (\\\\\\S+) for the character$', '$1 працює лише у формулах - пишіть $2 або $3 для символу'],
        ['^(\\\\\\S+) needs an argument in \\{ \\}$', '$1 потрібен аргумент у { }'],
        ['^The \\{ after (\\\\\\S+) is never closed - a \\} is missing$', '{ після $1 не закрито - бракує }'],
        ['^Math: (.*)$', 'Формула: $1'],
        ['^The label "(.+)" is used twice$', 'Мітку «$1» використано двічі'],
        ['^Reference to "(.+)" which has no \\\\label\\{(.+)\\}$', 'Посилання на «$1», для якого немає \\label{$2}'],
        ['^Unknown command (\\\\\\S+) - the preview ignores it$', 'Невідома команда $1 - перегляд її пропускає'],
        ['^Unknown command (\\\\\\S+)$', 'Невідома команда $1'],
        ['^(\\\\[)\\]]) without the opening (\\\\[(\\[])$', '$1 без відкривальної $2'],
        ['^(\\\\\\S+) calls itself without end - the preview stops expanding it$', '$1 викликає саму себе безкінечно - перегляд припиняє її розгортати'],
        ['^The environment (\\S+) begins itself without end - the preview stops expanding it$', 'Оточення $1 нескінченно починає саме себе - попередній перегляд припиняє його розгортати'],
        ['^(\\\\begin\\{.+\\}) is never closed - add (\\\\end\\{.+\\})$', '$1 не закрито - додайте $2'],
        ['^Unknown environment (.+) - its content is shown as normal text$', 'Невідоме середовище $1 - його вміст показано як звичайний текст'],
        ['^The (\\S+) has text but no \\\\item$', 'У $1 є текст, але немає \\item'],
        ['^This table row has (\\d+) columns, but the table was set up for (\\d+) - add a column to (\\{.*\\}) or remove an &$', 'У цьому рядку таблиці стовпців: $1, а таблицю налаштовано на $2 - додайте стовпець у $3 або видаліть &'],
        ['^Unknown column type "(.+)" in the table setup$', 'Невідомий тип стовпця «$1» у налаштуванні таблиці'],
        ['^(\\\\end\\{.+\\}) without a matching (\\\\begin\\{.+\\})$', '$1 без відповідного $2'],
        ['^\\\\definecolor: "(.+)" is not a valid (\\S+) color$', '\\definecolor: «$1» - неприпустимий колір $2'],
        ['^(\\\\cite\\{.*\\}): there is no (\\\\bibitem\\{.*\\})$', '$1: немає $2'],
        ['^(\\\\\\S+\\{.*\\}): other files cannot be read here - paste their text into this document$', '$1: інші файли тут не читаються - вставте їхній текст у цей документ'],
        ['^(.+) drawings cannot be shown in the preview - they appear when the file is compiled with LaTeX$', 'Малюнки $1 не можна показати в перегляді - вони з’являться, коли файл буде скомпільовано LaTeX'],
        ['^(\\\\\\S+) needs a name, e\\.g\\. (.+)$', '$1 потрібне ім’я, напр. $2'],
        ['^(\\\\\\S+) is defined twice - use \\\\renewcommand to change it$', '$1 визначено двічі - використайте \\renewcommand, щоб змінити її'],
        ['^Text before \\\\begin\\{document\\}: "(.*)" - text belongs between \\\\begin\\{document\\} and \\\\end\\{document\\}$', 'Текст до \\begin{document}: «$1» - текст має стояти між \\begin{document} і \\end{document}'],
        ['^The document class "(.+)" is shown like "article" in the preview$', 'Клас документа «$1» показано в перегляді як «article»'],
        ['^(\\S+) needs XeLaTeX or LuaLaTeX - the preview uses its own fonts$', '$1 потребує XeLaTeX або LuaLaTeX - перегляд використовує власні шрифти'],
        ['^(\\S+) drawings are not shown in the preview$', 'Малюнки $1 не показуються в перегляді'],
        ['^The package "(.+)" is not known to the preview - its commands may be missing$', 'Пакет «$1» невідомий перегляду - його команд може бракувати'],
        ['^(\\\\\\S+) in the preamble is not understood by the preview$', '$1 у преамбулі перегляд не розуміє'],
        /* Template placeholders (?template=) */
        ['^The section (\\S+) stays open - add (\\S+)$', 'Розділ $1 залишається відкритим - додайте $2'],
        ['^(\\S+) is a stray end tag - remove it or add (\\S+) before it$', '$1 - зайвий закривальний тег - видаліть його або додайте перед ним $2'],
        ['^(\\S+) closes (\\S+) before the inner section (\\S+) is closed - add (\\S+) first$', '$1 закриває $2 раніше, ніж закрито внутрішній розділ $3 - спершу додайте $4'],
        ['^Unknown placeholder (\\S+) - use (.+)$', 'Невідомий заповнювач $1 - використовуйте $2'],

        /* ---------- Pictures tab ---------- */
        ['^(\\d+) (?:picture|pictures) · (.+)$', (m, k, s) => `${k} ${getPlural(k, 'зображення', 'зображення', 'зображень')} · ${formatSize(s)}`],
        ['^Pictures belong to “(.*)” and stay in your browser\\. Drop or paste them anywhere in the editor, or add them here;$', 'Зображення належать до «$1» і залишаються у вашому браузері. Перетягніть або вставте їх будь-де в редакторі чи додайте тут;'],
        ['^Choose the file for (.+)$', 'Вибрати файл для $1'],
        ['^Insert \\\\includegraphics\\{(.+)\\} at the cursor$', 'Вставити \\includegraphics{$1} на місці курсора'],
        ['^used (\\d+)×$', 'використано $1×'],
        ['^(.* · )?not used yet$', (m, a) => `${a || ''}поки не використовується`],

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
        ['^"(.+)" now shows the new picture$', '«$1» тепер показує нове зображення'],
        ['^Picture "(.+)" added to "(.+)"$', 'Зображення «$1» додано до «$2»'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '«$1» тепер порожній - «Скасувати» поверне вміст'],
        ['^"(.+)" opened$', '«$1» відкрито'],
        ['^New document "(.+)" - your other documents are under "My documents"$', 'Новий документ «$1» - інші ваші документи в «Мої документи»'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$', 'Новий документ «$1» від ШІ - інші ваші документи не змінилися'],
        ['^"(.+)" is not a \\.tex file$', '«$1» - не файл .tex'],
        ['^Opened "(.+)" - it is now in "My documents"$', '«$1» відкрито - тепер він у «Мої документи»'],
        ['^Opened "(.+)" with (\\d+) (?:picture|pictures)$', (m, f, k) => `«${f}» відкрито з ${k} ${getPlural(k, 'зображенням', 'зображеннями', 'зображеннями')}`],
        ['^"(.+)" could not be opened: (.*)$', (m, f, why) => `«${f}» не вдалося відкрити: ${ZIP[why] || why}`],
        ['^ZIP downloaded: \\.tex, pictures, HTML, text and (\\d+) (?:page|pages) as PNG$', (m, k) => `ZIP завантажено: .tex, зображення, HTML, текст і ${k} ${getPlural(k, 'сторінка', 'сторінки', 'сторінок')} у PNG`],
        ['^Document received - the preview found (\\d+) (?:problem|problems), see above the code$', (m, k) => `Документ отримано - перегляд знайшов ${k} ${getPlural(k, 'проблему', 'проблеми', 'проблем')}, див. над кодом`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '«$1» змінено ШІ - «Скасувати» поверне все назад'],
        ['^"(.+)" duplicated$', '«$1» продубльовано'],
        ['^Delete "(.+)"\\?$', 'Видалити «$1»?'],
        ['^"(.+)" deleted$', '«$1» видалено'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Відкрити $1'],
    ],
};
