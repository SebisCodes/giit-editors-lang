/* Ukrainian texts of the HTML editor: the bar, the work area (code, preview,
   document settings, insert, files, outline), its dialogs and messages,
   and the problems the editor finds in the code. What all editors share is
   in common.js; how the dictionaries are used is described in
   i18n.js. Names of documents, files, elements and attributes stay as they
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
const ZIP = { 'it is not a ZIP file': 'це не файл ZIP', 'there is no .html file in it': 'у ньому немає файлу .html' };

export default {
    text: {
        // Editing in place: Enter and Shift+Enter
        "Editing in the preview - Enter: new paragraph, Shift+Enter: new line, Ctrl+Enter or a click elsewhere keeps it, Escape cancels": "Редагування в перегляді - Enter: новий абзац, Shift+Enter: новий рядок, Ctrl+Enter або клацання деінде зберігає, Escape скасовує",
        /* ---------- Top bar ---------- */
        'HTML Editor - home': 'Редактор HTML - на головну',
        'HTML Editor': 'Редактор HTML',
        'File': 'Файл',
        'My documents (Ctrl+O)': 'Мої документи (Ctrl+O)',
        'My documents': 'Мої документи',
        'New document, or start this one over': 'Новий документ або почати цей заново',
        'New': 'Новий',
        'New blank page': 'Нова порожня сторінка',
        'An empty HTML page - your other documents stay as they are':
            'Порожня сторінка HTML - інші ваші документи залишаться без змін',
        'Landing page': 'Лендинг',
        'A big header, three features and a footer': 'Велика шапка, три можливості й підвал',
        'Article': 'Стаття',
        'Title, sections, a quote and a list': 'Заголовок, розділи, цитата і список',
        'Contact form': 'Форма зворотного зв’язку',
        'Name, email and message with labels': 'Ім’я, e-mail і повідомлення з підписами',
        'Email newsletter': 'Електронна розсилка',
        'An email layout with a table': 'Макет листа з таблицею',
        'The welcome example': 'Вітальний приклад',
        'Shows what the editor can do': 'Показує, що вміє редактор',
        'Start this document over': 'Почати цей документ заново',
        'Keeps the head, empties the body - "Undo" brings it back': 'Зберігає head, очищає body - «Скасувати» поверне його',
        'Open an .html file (or a picture, stylesheet or ZIP) from your computer (you can also drag it into the window)':
            'Відкрити файл .html (або зображення, таблицю стилів чи ZIP) з комп’ютера (його можна й перетягнути у вікно)',
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
        'Save the page as an .html file - with its files as ZIP (Ctrl+S)':
            'Зберегти сторінку як файл .html - з її файлами як ZIP (Ctrl+S)',
        'Download .html': 'Завантажити .html',
        'HTML, one file with everything inside, ZIP, PDF and text (Ctrl+E)':
            'HTML, один файл з усім усередині, ZIP, PDF і текст (Ctrl+E)',
        'Export…': 'Експорт…',

        /* ---------- Views and work area ---------- */
        'View': 'Вигляд',
        'Edit': 'Правка',
        'Side panel': 'Бічна панель',
        'Preview': 'Перегляд',
        'Document': 'Документ',
        'HTML code': 'Код HTML',
        'Copy the HTML code to the clipboard': 'Скопіювати код HTML у буфер обміну',
        'Copy code': 'Копіювати код',
        'Copy': 'Копіювати',
        'Indent every line by the depth of its elements': 'Задати відступи рядків за рівнем вкладеності елементів',
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
        'Heading': 'Заголовок',
        'Bulleted list': 'Маркований список',
        'Numbered list': 'Нумерований список',
        'Table': 'Таблиця',
        'Picture': 'Зображення',
        'Width of the preview': 'Ширина перегляду',
        'As wide as the preview': 'За шириною перегляду',
        'Full width': 'Повна ширина',
        'Tablet (768 pixels wide)': 'Планшет (ширина 768 пікселів)',
        'Tablet width': 'Планшет',
        'Phone (390 pixels wide)': 'Телефон (ширина 390 пікселів)',
        'Phone width': 'Телефон',
        'Preview of the page: click text to edit it, or anything else to jump to its place in the code':
            'Перегляд сторінки: клацніть текст, щоб редагувати його, або щось інше, щоб перейти до його місця в коді',
        'Preview of the page': 'Перегляд сторінки',
        'Updating…': 'Оновлення…',
        'Title, language, description and the stylesheets of the page': 'Заголовок, мова, опис і таблиці стилів сторінки',
        'Ready-made pieces: structure, text, lists, media, forms, head':
            'Готові елементи: структура, текст, списки, медіа, форми, head',
        'Insert': 'Вставка',
        'The pictures and other files of this document': 'Зображення та інші файли цього документа',
        'Files': 'Файли',
        'The headings of the page': 'Заголовки сторінки',
        'Outline': 'План',
        'The headings of the page. Click one to go there in the code and in the preview.':
            'Заголовки сторінки. Клацніть заголовок, щоб перейти до нього в коді й у перегляді.',
        'No headings yet - add one with <h1> … <h6>.': 'Заголовків поки немає - додайте заголовок за допомогою <h1> … <h6>.',
        'Open it here': 'Відкрити тут',
        'Drop the .html file, picture or stylesheet here': 'Перетягніть сюди файл .html, зображення або таблицю стилів',

        /* Problems above the code */
        'Hide': 'Сховати',
        'Show': 'Показати',

        /* ---------- Insert tab ---------- */
        'Structure': 'Структура',
        'Heading 1': 'Заголовок 1',
        'Heading 2': 'Заголовок 2',
        'Heading 3': 'Заголовок 3',
        'Heading 4': 'Заголовок 4',
        'Paragraph': 'Абзац',
        'Section': 'Розділ',
        'Header': 'Шапка',
        'Navigation bar': 'Навігація',
        'Main content': 'Основна частина',
        'Footer': 'Підвал',
        'Box': 'Блок',
        'Fold-out (details)': 'Розкривний блок',
        'Dividing line': 'Роздільник',
        'Apply page breaks': 'Застосовувати розриви сторінок',
        'New page': 'Нова сторінка',
        'Line break': 'Розрив рядка',
        'Comment': 'Коментар',
        'Lists and tables': 'Списки й таблиці',
        '• Bulleted list': '• Маркери',
        '1. Numbered list': '1. Нумерація',
        'Description list': 'Список описів',
        'Highlighted': 'Виділений',
        'Small print': 'Дрібний шрифт',
        'Code in the text': 'Код у тексті',
        'x² Superscript': 'x² Верх. індекс',
        'x₁ Subscript': 'x₁ Ниж. індекс',
        'Quote': 'Цитата',
        'Program code': 'Код програми',
        'Inline part (span)': 'Фрагмент (span)',
        'Media': 'Медіа',
        'Figure with caption': 'Рисунок із підп.',
        'Video player': 'Відеоплеєр',
        'Audio player': 'Аудіоплеєр',
        'The files of the page have their own tab:': 'Файли сторінки мають свою вкладку:',
        'Forms': 'Форми',
        'Form': 'Форма',
        'Text field': 'Текстове поле',
        'Email field': 'Поле e-mail',
        'Text area': 'Велике поле',
        'Choice list': 'Список вибору',
        'Tick box': 'Прапорець',
        'Radio buttons': 'Перемикачі',
        'Button': 'Кнопка',
        'Head': 'Метадані (head)',
        'Character set': 'Кодування',
        'The character set: <meta charset="utf-8">': 'Кодування: <meta charset="utf-8">',
        'Fits phone screens: <meta name="viewport">': 'Під екрани телефонів: <meta name="viewport">',
        'Description': 'Опис',
        'For search engines: <meta name="description">': 'Для пошукових систем: <meta name="description">',
        'Shared links': 'Для соцмереж',
        'Title, description and picture for shared links (Open Graph)':
            'Заголовок, опис і зображення для посилань у соцмережах (Open Graph)',
        'Stylesheet file': 'Файл стилів',
        'A stylesheet file: <link rel="stylesheet">': 'Файл таблиці стилів: <link rel="stylesheet">',
        'Style block': 'Блок стилів',
        'CSS in the page: <style> … </style>': 'CSS на сторінці: <style> … </style>',
        'Tab icon': 'Значок вкладки',
        'The icon in the browser tab: <link rel="icon">': 'Значок у вкладці браузера: <link rel="icon">',
        'Special characters': 'Спецсимволи',
        'Insert &nbsp; (no-break space)': 'Вставити &nbsp; (нерозривний пробіл)',
        'Insert &shy; (soft hyphen)': 'Вставити &shy; (м’яке перенесення)',

        /* ---------- Files tab ---------- */
        'Add files…': 'Додати файли…',
        'No files yet': 'Файлів поки немає',
        'Missing in this document': 'Відсутні в цьому документі',
        'Add file…': 'Додати файл…',
        'Show where it is used': 'Показати, де використовується',
        'A picture (img) at the cursor': 'Зображення (img) на місці курсора',
        'A link to the stylesheet in the head': 'Посилання на таблицю стилів у head',
        'A reference to the file at the cursor': 'Посилання на файл на місці курсора',
        'A figure with caption at the cursor': 'Рисунок із підписом на місці курсора',
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

        /* ---------- Document tab ---------- */
        'Title': 'Заголовок',
        '(in the browser tab and in search results)': '(у вкладці браузера й у результатах пошуку)',
        'Language': 'Мова',
        '(for search engines)': '(для пошукових систем)',
        'Author': 'Автор',
        'Characters as UTF-8 (meta charset)': 'Символи в UTF-8 (meta charset)',
        'Fits phone screens (meta viewport)': 'Під екрани телефонів (meta viewport)',
        'Linked stylesheets': 'Під’єднані таблиці стилів',
        'No stylesheet is linked.': 'Таблиці стилів не під’єднано.',
        'Add a .css file in the Files tab to link it here.': 'Додайте файл .css у вкладці «Файли», щоб під’єднати його тут.',
        'Stylesheet of this document': 'Таблиця стилів цього документа',
        'Link it': 'Під’єднати',
        'from the web': 'з інтернету',
        'a file of this document': 'файл цього документа',
        'missing': 'відсутній',
        'Show it in the code': 'Показати в коді',
        'Not set': 'Не задано',
        'English (en)': 'Англійська (en)',
        'English, US (en-US)': 'Англійська, США (en-US)',
        'English, UK (en-GB)': 'Англійська, Велика Британія (en-GB)',
        'German (de)': 'Німецька (de)',
        'German, Switzerland (de-CH)': 'Німецька, Швейцарія (de-CH)',
        'German, Germany (de-DE)': 'Німецька, Німеччина (de-DE)',
        'French (fr)': 'Французька (fr)',
        'Italian (it)': 'Італійська (it)',
        'Spanish (es)': 'Іспанська (es)',
        'Portuguese (pt)': 'Португальська (pt)',
        'Dutch (nl)': 'Нідерландська (nl)',
        'elements · about': 'елем. · близько',
        'element · about': 'елем. · близько',
        'words ·': 'слів ·',
        'headings ·': 'загол. ·',
        'heading ·': 'загол. ·',
        'files': 'файлів',
        'file': 'файл',
        'Make it a complete page': 'Зробити повною сторінкою',

        /* ---------- Export ---------- */
        'Close': 'Закрити',
        'File name': 'Ім’я файлу',
        'Page': 'Сторінка',
        'HTML page (.html)': 'Сторінка HTML (.html)',
        'One HTML file with its files inside': 'Один файл HTML з файлами всередині',
        'HTML with its files (ZIP)': 'HTML з файлами (ZIP)',
        'PDF (print or save as PDF)': 'PDF (друк або збереження в PDF)',
        'Plain text': 'Звичайний текст',
        'Result': 'Результат',
        'Download everything at once: .html, its files, the HTML with the files inside and the text':
            'Завантажити все одразу: .html, його файли, HTML з файлами всередині й текст',
        'All formats (ZIP)': 'Усі формати (ZIP)',
        'Print / Save as PDF': 'Друк / Зберегти в PDF',
        '(The page with its files inside is created when you download or copy it.)':
            '(Сторінка з файлами всередині створюється під час завантаження або копіювання.)',

        /* ---------- My documents ---------- */
        'Search by name': 'Пошук за назвою',
        'Search your documents': 'Пошук у ваших документах',
        'Open an .html file from your computer as a new document': 'Відкрити файл .html з комп’ютера як новий документ',
        'New document': 'Новий документ',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Клацніть документ, щоб відкрити його. Документи зберігаються лише в цьому браузері - нічого не вивантажується на сервер. Очищення даних сайту в браузері видалить їх, тому завантажте ті, які хочете зберегти.',
        'Download every document as an .html file (with its files) in one ZIP':
            'Завантажити всі документи як файли .html (з їхніми файлами) одним ZIP',
        'Download all (ZIP)': 'Завантажити все (ZIP)',
        'Duplicate': 'Дублювати',
        'Download as .html': 'Завантажити як .html',
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
        'The document is now in the HTML Editor tab you already had open. Switch to that tab, or open it here.':
            'Документ тепер у вкладці редактора HTML, яку ви вже мали відкритою. Перейдіть до тієї вкладки або відкрийте його тут.',
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
        'https://example.com/api/html': 'https://example.com/api/html',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(необов’язково, надсилається як «Authorization: Bearer …»; зберігається, доки відкрита ця вкладка)',
        'Send automatically a few seconds after each change (otherwise only when you click':
            'Надсилати автоматично через кілька секунд після кожної зміни (інакше лише коли ви натискаєте',
        'or press Ctrl+S)': 'або Ctrl+S)',
        'Only for “': 'Лише для «',
        '” (other documents use the general address)': '» (інші документи використовують загальну адресу)',
        'What your server receives': 'Що отримує ваш сервер',
        'A POST request with JSON (your server must allow CORS from https://html.giit.ch):':
            'POST-запит із JSON (ваш сервер має дозволяти CORS з https://html.giit.ch):',
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
        'Save (download .html, or to your server) / export': 'Зберегти (завантажити .html або на ваш сервер) / експорт',
        'Print / save as PDF': 'Друк / зберегти в PDF',

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
        'The code changed meanwhile - the edit was not used': 'Код тим часом змінився - правку не застосовано',
        'The code changed meanwhile - the picture was not moved': 'Код тим часом змінився - зображення не переміщено',
        'The file is removed from this document. Places that use it show nothing. "Undo" does not bring it back.':
            'Файл видалено з цього документа. Місця, де він використовується, нічого не показують. «Скасувати» його не поверне.',
        'A document can keep pictures, stylesheets, scripts, fonts, PDFs, audio and video':
            'Документ може зберігати зображення, таблиці стилів, скрипти, шрифти, PDF, аудіо й відео',
        'The file is larger than 12 MB': 'Файл більший за 12 МБ',
        'The file could not be read': 'Не вдалося прочитати файл',
        'The code is now a complete page': 'Код тепер повна сторінка',
        'The code is tidy already': 'Код уже впорядкований',
        'Code tidied up': 'Код упорядковано',
        'This document is empty already': 'Цей документ уже порожній',
        'Everything between <body> and </body> is removed; the head (title, styles, meta tags) stays. "Undo" brings it back as long as the page is open.':
            'Усе між <body> і </body> видалено; head (заголовок, стилі, метатеги) залишається. «Скасувати» поверне це, поки сторінка відкрита.',
        'Everything is removed. "Undo" brings it back as long as the page is open.':
            'Усе видалено. «Скасувати» поверне це, поки сторінка відкрита.',
        'Start over': 'Почати заново',
        'The file is larger than 8 MB': 'Файл більший за 8 МБ',
        'HTML pasted from the clipboard - "Undo" brings the old code back':
            'HTML вставлено з буфера обміну - «Скасувати» поверне старий код',
        'This browser does not allow printing here': 'Цей браузер не дозволяє друкувати тут',
        'Downloaded': 'Завантажено',
        'ZIP downloaded: .html, its files, the page as one file and the text':
            'ZIP завантажено: .html, його файли, сторінка одним файлом і текст',
        'Copied to the clipboard': 'Скопійовано в буфер обміну',
        'This browser does not allow copying this': 'Цей браузер не дозволяє це скопіювати',
        'Code copied': 'Код скопійовано',
        '.html with its files downloaded (ZIP)': '.html з файлами завантажено (ZIP)',
        '.html downloaded': '.html завантажено',
        'Add': 'Додати',
        'The document and its files are removed from this browser for good. Download it first if you want to keep a copy.':
            'Документ і його файли буде остаточно видалено з цього браузера. Якщо хочете зберегти копію, спершу завантажте його.',

        /* ---------- Problems the editor finds (html.js) ---------- */
        'The comment <!-- is never closed - add -->': 'Коментар <!-- не закрито - додайте -->',
        '<img> without alt - describe the picture (alt="…"), or alt="" if it only decorates':
            '<img> без alt - опишіть зображення (alt="…") або alt="", якщо воно лише прикрашає',
        'No <!DOCTYPE html> at the top - browsers show the page in an older mode (quirks mode)':
            'Немає <!DOCTYPE html> на початку - браузери показують сторінку в старому режимі (quirks mode)',
        /* Words that German keeps from the English, but Ukrainian does not */
        'Code': 'Код',
        'Export': 'Експорт',
        'Format': 'Формат',
        'Link': 'Посилання',
        'Token': 'Токен',
        'Name': 'Ім’я',
        /* ---------- Template placeholders: views and box ---------- */
        'Show or hide the side panel': 'Показати або сховати бічну панель',
        'Examples': 'Приклади',
        'Template': 'Шаблон',
        'View of the preview': 'Вигляд перегляду',
        'The template with its placeholders as written': 'Шаблон із заповнювачами в початковому вигляді',
        'The examples could not be filled in - the preview shows the template': 'Не вдалося підставити приклади - перегляд показує шаблон',
        'Placeholders': 'Заповнювачі',
        'The placeholders of the template - a click on one puts its tag at the cursor': 'Заповнювачі шаблону - клацання вставляє відповідний тег у позицію курсора',
        'Shown': 'Показано',
        'Hidden': 'Приховано',
        'example view': 'вигляд із прикладами',
        'template view': 'вигляд шаблону',
        'The page filled with the examples': 'Сторінка, заповнена прикладами',
    },
    html: {
        '<b>Export</b> also has <b>Open in another editor</b>: it converts the document and opens it as a new document there. Anything the other format cannot hold is listed first.':
            'У <b>Експорті</b> є й <b>Відкрити в іншому редакторі</b>: документ перетворюється й відкривається там як новий. Те, що інший формат не може вмістити, показується заздалегідь.',
        '<b>Insert</b> &gt; <b>New page</b> sets a page break for printing and PDF; the preview shows it as a dashed line. Headings stay with their text and tables and pictures are not cut. In Export, <b>Apply page breaks</b> turns them off for a PDF.':
            '<b>Вставка</b> &gt; <b>Нова сторінка</b> додає розрив сторінки для друку та PDF; у перегляді його видно як штрихову лінію. Заголовки лишаються з текстом, таблиці й зображення не розрізаються. У <b>Експорті</b> параметр <b>Застосовувати розриви сторінок</b> вимикає їх для PDF.',
        /* Export */
        'The print dialog opens with the page as it is in the preview (without scripts). Choose <b>Save as PDF</b> (or "Microsoft Print to PDF") as the printer. In Chrome and Edge, untick "Headers and footers" and tick "Background graphics" if the page has colors. The text in the PDF can be selected.':
            'Відкриється діалог друку зі сторінкою такою, як у перегляді (без скриптів). Як принтер виберіть <b>Зберегти як PDF</b> (або «Microsoft Print to PDF»). У Chrome і Edge зніміть позначку «Верхні та нижні колонтитули» й поставте «Фонова графіка», якщо на сторінці є кольори. Текст у PDF можна виділяти.',

        /* Document tab without a head */
        'This code has no <code>&lt;html&gt;</code> with a <code>&lt;head&gt;</code>, so it is shown as a part of a page. Title, language and description belong in the head.':
            'Цей код не має <code>&lt;html&gt;</code> із <code>&lt;head&gt;</code>, тому його показано як частину сторінки. Заголовок, мова й опис мають бути в head.',

        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Натисніть <b>Копіювати промпт</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'ШІ відповідає посиланням: клацніть його або вставте всю відповідь нижче. <b>Скасувати</b> поверне все назад.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'ШІ відповідає посиланням: <b>вставте всю його відповідь нижче</b> (клацнуте посилання відкриває окремий редактор). <b>Скасувати</b> поверне все назад.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'Редактор може надсилати кожну збережену версію на ваш власний сервер (<b>вебхук</b>), щоб ваша робота зберігалася там, де ви хочете. Нічого не надсилається, доки ви не введете тут адресу.',
        'Also possible: <code>?src=&lt;URL of an .html file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>htmleditor:ai</code>, <code>htmleditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Також можна: <code>?src=&lt;URL of an .html file&gt;</code> відкриває файл, <code>&amp;webhook=&lt;URL&gt;</code> зберігає туди цей документ. Редактор може відкриватися й в окремому вікні (<code>?embed=window</code>), а ваша сторінка може передати йому власний промпт для ШІ та ключ сеансу, щоб ШІ надсилав результат на ваш сервер (<code>htmleditor:ai</code>, <code>htmleditor:key-request</code>) - див. «Редактор на вашому сайті» під редактором. Подробиці - у <a href="/llms.txt">llms.txt</a>.',
        'Also possible: <code>?src=&lt;URL of an .html file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>htmleditor:ai</code>, <code>htmleditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Також можна: <code>?src=&lt;URL of an .html file&gt;</code> відкриває файл, <code>&amp;webhook=&lt;URL&gt;</code> зберігає туди цей документ. Редактор може відкриватися й в окремому вікні (<code>?embed=window</code>), а ваша сторінка може передати йому власний промпт для ШІ та ключ сеансу, щоб ШІ надсилав результат на ваш сервер (<code>htmleditor:ai</code>, <code>htmleditor:key-request</code>) - див. «Редактор на вашому сайті» під редактором. Подробиці - у <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> HTML on the left - or start with <b>New</b> and one of the templates. The preview shows the page as you type.':
            '<b>Пишіть</b> HTML ліворуч - або почніть із <b>Новий</b> та одного із шаблонів. Перегляд показує сторінку просто під час набору.',
        '<b>Click text in the preview</b> to edit it right there. Enter starts a new paragraph; Shift+Enter inserts a line break. Ctrl+Enter (Cmd+Enter on macOS) or a click elsewhere applies the edit; Escape cancels. Each edit is one step for Undo. A click on a picture or any other element jumps to its place in the code. The element at the code cursor gets a frame in the preview.':
            '<b>Клацніть текст у перегляді</b>, щоб редагувати його просто там. Enter починає новий абзац; Shift+Enter вставляє розрив рядка. Ctrl+Enter (Cmd+Enter у macOS) або клацання деінде застосовує правку; Escape скасовує її. Кожну правку можна скасувати однією дією. Клацання зображення чи будь-якого іншого елемента переносить до його місця в коді. Елемент на місці курсора коду обводиться рамкою в перегляді.',
        '<b>Document</b> on the right sets title, language and description of the page; <b>Insert</b> has ready-made pieces (headings, lists, tables, media, form fields, meta tags); <b>Files</b> holds the pictures, stylesheets and fonts of the page; <b>Outline</b> lists the headings.':
            '<b>Документ</b> праворуч задає заголовок, мову й опис сторінки; у <b>Вставці</b> є готові елементи (заголовки, списки, таблиці, медіа, поля форм, метатеги); у <b>Файлах</b> зберігаються зображення, таблиці стилів і шрифти сторінки; <b>План</b> перелічує заголовки.',
        'Problems in the code (an unclosed <code>&lt;div&gt;</code>, a picture without <code>alt</code>, a missing file) are listed above the code - click one to go there.':
            'Проблеми в коді (незакритий <code>&lt;div&gt;</code>, зображення без <code>alt</code>, відсутній файл) перелічено над кодом - клацніть проблему, щоб перейти до неї.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser.':
            '<b>Мої документи</b> (кнопка з текою вгорі ліворуч) показують усі документи, що зберігаються в цьому браузері.',
        '<b>Export</b> makes an HTML file, one HTML file with the files inside, a ZIP, a PDF (via the print dialog) or plain text. <b>Download .html</b> saves the code.':
            '<b>Експорт</b> створює файл HTML, один файл HTML з файлами всередині, ZIP, PDF (через діалог друку) або звичайний текст. <b>Завантажити .html</b> зберігає код.',
        'The preview shows HTML and CSS as the browser does, but scripts and <code>on…</code> attributes never run and links do not navigate - so any page is safe to open.':
            'Перегляд показує HTML і CSS так само, як браузер, але скрипти й атрибути <code>on…</code> ніколи не виконуються, а посилання нікуди не ведуть - тож будь-яку сторінку відкривати безпечно.',
        'Comment lines in or out (<code>&lt;!-- --&gt;</code>)':
            'Закоментувати рядки або прибрати коментар (<code>&lt;!-- --&gt;</code>)',
        'Typing <code>&gt;</code> at the end of a start tag adds its end tag, and <kbd>Enter</kbd> between the two indents the new line. Typing <code>&lt;/</code> closes the element that is open.':
            'Якщо ввести <code>&gt;</code> у кінці відкривального тегу, додасться закривальний тег, а <kbd>Enter</kbd> між ними робить відступ нового рядка. Введення <code>&lt;/</code> закриває відкритий елемент.',
    },
    patterns: [
        /* ---------- Status lines ---------- */
        ['^(\\d+) lines · ([\\d.]+ K?B)$', (m, l, s) => `${l} ${getPlural(l, 'рядок', 'рядки', 'рядків')} · ${formatSize(s)}`],
        ['^\\.html and (\\d+) (?:file|files)$', (m, k) => `.html і ${k} ${getPlural(k, 'файл', 'файли', 'файлів')}`],
        ['^([\\d,]+) bytes$', (m, b) => formatSize(m)],
        ['^\\d{1,3}(?:,\\d{3})+$', m => formatThousands(m)],

        /* Problems above the code */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'помилка', 'помилки', 'помилок')}`],
        ['^· (\\d+) (?:note|notes)$', (m, k) => `· ${k} ${getPlural(k, 'зауваження', 'зауваження', 'зауважень')}`],
        ['^(\\d+) (?:note|notes)$', (m, k) => `${k} ${getPlural(k, 'зауваження', 'зауваження', 'зауважень')}`],
        ['^Line (\\d+)$', 'Рядок $1'],
        ['^The preview failed: (.*)$', 'Перегляд не вдався: $1'],
        ['^The tag <(\\S+) is never closed with >$', 'Тег <$1 не закрито символом >'],
        ['^<(\\S+)> is obsolete - use CSS or a current element instead$', '<$1> застарів - використайте натомість CSS або сучасний елемент'],
        ['^Unknown element <(\\S+)>$', 'Невідомий елемент <$1>'],
        ['^The attribute (\\S+) is given twice in <(\\S+)> - the browser uses the first one$', 'Атрибут $1 вказано в <$2> двічі - браузер використовує перший'],
        ['^The id "(.*)" is used twice$', 'id «$1» використано двічі'],
        ['^<(\\S+)\\/> - in HTML only void elements \\(like <br>\\) close themselves; add <\\/(\\S+)>$', '<$1/> - у HTML самі закриваються лише порожні елементи (як <br>); додайте </$2>'],
        ['^<(\\S+)> is never closed - add <\\/(\\S+)>$', '<$1> не закрито - додайте </$2>'],
        ['^<\\/(\\S+)> - <(\\S+)> has no end tag$', '</$1> - <$2> не має закривального тегу'],
        ['^<\\/(\\S+)> without an opening <(\\S+)>$', '</$1> без відкривального <$2>'],
        ['^<(\\S+)> is not closed before <\\/(\\S+)> - add <\\/(\\S+)> first$', '<$1> не закрито перед </$2> - спершу додайте </$3>'],
        ['^The file "(.+)" is missing - add it in the Files tab \\(or drop it into the editor\\)$', 'Файл «$1» відсутній - додайте його у вкладці «Файли» (або перетягніть у редактор)'],

        /* ---------- Insert tab ---------- */
        ['^Insert (&[#\\w]+;)$', 'Вставити $1'],

        /* ---------- Files tab ---------- */
        ['^(\\d+) (?:file|files) · (.+)$', (m, k, s) => `${k} ${getPlural(k, 'файл', 'файли', 'файлів')} · ${formatSize(s)}`],
        ['^Files belong to “(.*)” and stay in your browser\\. Drop or paste pictures, stylesheets or fonts anywhere in the editor, or add them here; the code uses them by their name, e\\.g\\.$', 'Файли належать до «$1» і залишаються у вашому браузері. Перетягніть або вставте зображення, таблиці стилів чи шрифти будь-де в редакторі або додайте їх тут; код використовує їх за іменем, напр.'],
        ['^Choose the file for (.+)$', 'Вибрати файл для $1'],
        ['^Insert (.+) at the cursor$', 'Вставити $1 на місці курсора'],
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
        ['^"(.+)" now has the new content$', '«$1» тепер має новий вміст'],
        ['^File "(.+)" added to "(.+)"$', 'Файл «$1» додано до «$2»'],
        ['^"(.+)" is linked already$', '«$1» уже під’єднано'],
        ['^"(.+)" is linked$', '«$1» під’єднано'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '«$1» тепер порожній - «Скасувати» поверне вміст'],
        ['^"(.+)" opened$', '«$1» відкрито'],
        ['^New document "(.+)" - your other documents are under "My documents"$', 'Новий документ «$1» - інші ваші документи в «Мої документи»'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$', 'Новий документ «$1» від ШІ - інші ваші документи не змінилися'],
        ['^Opened "(.+)" - it is now in "My documents"$', '«$1» відкрито - тепер він у «Мої документи»'],
        ['^Opened "(.+)" with (\\d+) (?:file|files)$', (m, f, k) => `«${f}» відкрито з ${k} ${getPlural(k, 'файлом', 'файлами', 'файлами')}`],
        ['^"(.+)" could not be opened: (.*)$', (m, f, why) => `«${f}» не вдалося відкрити: ${ZIP[why] || why}`],
        ['^Document received - the editor found (\\d+) (?:problem|problems), see above the code$', (m, k) => `Документ отримано - редактор знайшов ${k} ${getPlural(k, 'проблему', 'проблеми', 'проблем')}, див. над кодом`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '«$1» змінено ШІ - «Скасувати» поверне все назад'],
        ['^"(.+)" duplicated$', '«$1» продубльовано'],
        ['^Delete "(.+)"\\?$', 'Видалити «$1»?'],
        ['^"(.+)" deleted$', '«$1» видалено'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Відкрити $1'],
    ],
};
