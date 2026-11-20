/* Ukrainian texts of the Markdown editor: the bar, the work area (code,
   preview, insert, pictures, outline), its dialogs and messages, and the
   problems the preview finds in the code. What all editors share is in
   common.js; how the dictionaries are used is described in
   i18n.js. Names of documents, pictures and anchors stay as they are: the
   patterns copy them into the Ukrainian text. */

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
const ZIP = { 'it is not a ZIP file': 'це не файл ZIP', 'there is no .md file in it': 'у ньому немає файлу .md' };

export default {
    text: {
        // Editing in place: Enter and Shift+Enter
        "Editing on the page - Enter: new paragraph, Shift+Enter: new line, Ctrl+Enter or a click elsewhere keeps it, Escape cancels": "Редагування на сторінці - Enter: новий абзац, Shift+Enter: новий рядок, Ctrl+Enter або клацання деінде зберігає, Escape скасовує",
        "A new paragraph inside bold, italic or a link is made in the code - Shift+Enter makes a new line": "Новий абзац у межах жирного чи курсивного тексту або посилання створюється в коді — Shift+Enter додає новий рядок",
        /* ---------- Top bar ---------- */
        'Markdown Editor - home': 'Редактор Markdown - на головну',
        'Markdown Editor': 'Редактор Markdown',
        'File': 'Файл',
        'My documents (Ctrl+O)': 'Мої документи (Ctrl+O)',
        'My documents': 'Мої документи',
        'New document, or start this one over': 'Новий документ або почати цей заново',
        'New': 'Новий',
        'New blank document': 'Новий порожній документ',
        'An empty page - your other documents stay as they are':
            'Порожня сторінка - інші ваші документи залишаться без змін',
        'README': 'README',
        'Project name, features, installation and usage': 'Назва проєкту, можливості, встановлення й використання',
        'Article': 'Стаття',
        'Title, summary, sections and a quote': 'Заголовок, короткий зміст, розділи й цитата',
        'Meeting notes': 'Протокол зустрічі',
        'Agenda, decisions and a table of tasks': 'Порядок денний, рішення й таблиця завдань',
        'Checklist': 'Чекліст',
        'Tasks to tick off, in groups': 'Завдання за групами, які можна позначати',
        'The welcome example': 'Вітальний приклад',
        'Shows what the editor can do': 'Показує, що вміє редактор',
        'Start this document over': 'Почати цей документ заново',
        'Empties the text, keeps the pictures - "Undo" brings it back':
            'Очищає текст, зберігає зображення - «Скасувати» поверне його',
        'Open a .md file (or a picture) from your computer (you can also drag it into the window)':
            'Відкрити файл .md (або зображення) з комп’ютера (його можна й перетягнути у вікно)',
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
        'Save the document as a .md file (Ctrl+S)': 'Зберегти документ як файл .md (Ctrl+S)',
        'Download .md': 'Завантажити .md',
        'HTML, PDF, plain text and more (Ctrl+E)': 'HTML, PDF, звичайний текст та інше (Ctrl+E)',
        'Export…': 'Експорт…',

        /* ---------- Views and work area ---------- */
        'View': 'Вигляд',
        'Edit': 'Правка',
        'Preview': 'Перегляд',
        'Insert': 'Вставка',
        'Markdown code': 'Код Markdown',
        'Copy the Markdown to the clipboard': 'Скопіювати Markdown у буфер обміну',
        'Copy code': 'Копіювати код',
        'Copy': 'Копіювати',
        'Drag to change the width of the code area': 'Перетягніть, щоб змінити ширину області коду',
        'Drag to change the width': 'Перетягніть, щоб змінити ширину',
        'Formatting': 'Форматування',
        'Bold (Ctrl+B)': 'Жирний (Ctrl+B)',
        'Bold': 'Жирний',
        'Italic (Ctrl+I)': 'Курсив (Ctrl+I)',
        'Italic': 'Курсив',
        'Strikethrough': 'Закреслений',
        'Code in the text': 'Код у тексті',
        'Link (Ctrl+K)': 'Посилання (Ctrl+K)',
        'Heading': 'Заголовок',
        'Bulleted list': 'Маркований список',
        'Numbered list': 'Нумерований список',
        'Task list': 'Список завдань',
        'Table': 'Таблиця',
        'Picture': 'Зображення',
        'Insert picture': 'Вставити зображення',
        'Quote': 'Цитата',
        'Code block': 'Блок коду',
        'Math in the text (Ctrl+M)': 'Формула в тексті (Ctrl+M)',
        'Math': 'Математика',
        'Text size': 'Розмір тексту',
        'Smaller text in the preview': 'Дрібніший текст у перегляді',
        'Smaller text': 'Дрібніше',
        'Normal text size': 'Звичайний розмір тексту',
        'Larger text in the preview': 'Більший текст у перегляді',
        'Larger text': 'Більше',
        'Preview of the document: click text to edit it, Ctrl+click follows a link':
            'Перегляд документа: клацніть текст, щоб редагувати його, Ctrl+клацання відкриває посилання',
        'Updating…': 'Оновлення…',
        'Insert, pictures and outline': 'Вставка, зображення і план',
        'Ready-made pieces: structure, text, math, symbols': 'Готові елементи: структура, текст, формули, символи',
        'The pictures of this document': 'Зображення цього документа',
        'Pictures': 'Зображення',
        'The headings of the document': 'Заголовки документа',
        'Outline': 'План',
        'The headings of the document. Click one to go there in the code and in the preview.':
            'Заголовки документа. Клацніть заголовок, щоб перейти до нього в коді й у перегляді.',
        'No headings yet - start a line with # and a space.': 'Заголовків поки немає - почніть рядок із # і пробілу.',
        'Open it here': 'Відкрити тут',
        'Drop the .md file or picture here': 'Перетягніть сюди файл .md або зображення',

        'The document is empty - write Markdown on the left, or choose a template under "New".':
            'Документ порожній - пишіть Markdown ліворуч або виберіть шаблон у меню «Новий».',

        /* Problems above the code */
        'Hide': 'Сховати',
        'Show': 'Показати',

        /* ---------- Insert tab ---------- */
        'Structure': 'Структура',
        'Heading 1': 'Заголовок 1',
        'Heading 2': 'Заголовок 2',
        'Heading 3': 'Заголовок 3',
        '# Heading': '# Заголовок',
        '## Heading': '## Заголовок',
        '### Heading': '### Заголовок',
        'Horizontal rule': 'Роздільник',
        'Apply page breaks': 'Застосовувати розриви сторінок',
        'New page': 'Нова сторінка',
        'Document': 'Документ',
        '• Bulleted list': '• Маркери',
        '1. Numbered list': '1. Нумерація',
        '☐ Task list': '☐ Завдання',
        'Fold-out section': 'Розкривний розділ',
        'Line break': 'Розрив рядка',
        'Text': 'Текст',
        '**bold** (Ctrl+B)': '**жирний** (Ctrl+B)',
        '*italic* (Ctrl+I)': '*курсив* (Ctrl+I)',
        '~~struck through~~': '~~закреслений~~',
        'Link to a heading': 'Якірне посилання',
        '[text](#heading)': '[текст](#заголовок)',
        '[text](https://…) (Ctrl+K)': '[текст](https://…) (Ctrl+K)',
        '![description](name.png)': '![опис](name.png)',
        'Footnote': 'Виноска',
        '[^1] at the cursor, the note at the end': '[^1] на місці курсора, виноска в кінці',
        'Key': 'Клавіша',
        'A key as on the keyboard: <kbd>Ctrl</kbd>': 'Клавіша як на клавіатурі: <kbd>Ctrl</kbd>',
        '`code` between backticks': '`код` між зворотними лапками',
        '$x$ in the text': '$x$ у тексті',
        'Displayed': 'Виокремлена',
        '$$ … $$ on its own lines': '$$ … $$ на окремих рядках',
        'Fraction': 'Дріб',
        'Root': 'Корінь',
        'x² Power': 'x² Степінь',
        'x₁ Index': 'x₁ Індекс',
        '∑ Sum': '∑ Сума',
        '∫ Integral': '∫ Інтеграл',
        'lim Limit': 'lim Границя',
        '2×2 matrix': 'Матриця 2×2',
        'Cases': 'Випадки (cases)',
        'Greek letters': 'Грецькі літери',
        'Symbols': 'Символи',
        'Pictures have their own tab:': 'Зображення мають свою вкладку:',

        /* ---------- Pictures tab ---------- */
        'Add pictures…': 'Додати зображення…',
        'No pictures yet': 'Зображень поки немає',
        'Missing in this document': 'Відсутні в цьому документі',
        'Add file…': 'Додати файл…',
        'Show where it is used': 'Показати, де використовується',
        '![…](name) at the cursor': '![…](name) на місці курсора',
        'Rename - the code is changed along': 'Перейменувати - код зміниться разом з іменем',
        'Rename': 'Перейменувати',
        'Choose another file, keep the name': 'Вибрати інший файл, зберігши ім’я',
        'Replace': 'Замінити',
        'Download the picture': 'Завантажити зображення',
        'Download': 'Завантажити',
        'Remove the picture from this document': 'Видалити зображення з цього документа',
        'Remove': 'Видалити',
        'New name': 'Нове ім’я',
        'Pictures belong to “': 'Зображення належать до «',
        '” and stay in your browser. Drop or paste them anywhere in the editor, or add them here;':
            '» і залишаються у вашому браузері. Перетягніть або вставте їх будь-де в редакторі чи додайте тут;',
        'uses them.': 'використовує їх.',

        /* ---------- Export ---------- */
        'Close': 'Закрити',
        'File name': 'Ім’я файлу',
        'HTML page (one file)': 'Сторінка HTML (один файл)',
        'PDF (print or save as PDF)': 'PDF (друк або збереження в PDF)',
        'Plain text': 'Звичайний текст',
        'Markdown (.md)': 'Файл Markdown (.md)',
        'Markdown with pictures (ZIP)': 'Markdown із зображеннями (ZIP)',
        'Result': 'Результат',
        'Download everything at once: .md, pictures, HTML and text': 'Завантажити все одразу: .md, зображення, HTML і текст',
        'All formats (ZIP)': 'Усі формати (ZIP)',
        'Print / Save as PDF': 'Друк / Зберегти в PDF',
        '(The HTML page - with its pictures and styles inside - is created when you download or copy it.)':
            '(Сторінка HTML - із зображеннями й стилями всередині - створюється під час завантаження або копіювання.)',

        /* ---------- My documents ---------- */
        'Search by name': 'Пошук за назвою',
        'Search your documents': 'Пошук у ваших документах',
        'Open a .md file from your computer as a new document': 'Відкрити файл .md з комп’ютера як новий документ',
        'New document': 'Новий документ',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Клацніть документ, щоб відкрити його. Документи зберігаються лише в цьому браузері - нічого не вивантажується на сервер. Очищення даних сайту в браузері видалить їх, тому завантажте ті, які хочете зберегти.',
        'Download every document as a .md file (with its pictures) in one ZIP':
            'Завантажити всі документи як файли .md (із зображеннями) одним ZIP',
        'Download all (ZIP)': 'Завантажити все (ZIP)',
        'Duplicate': 'Дублювати',
        'Download as .md': 'Завантажити як .md',
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
        'The document is now in the Markdown Editor tab you already had open. Switch to that tab, or open it here.':
            'Документ тепер у вкладці редактора Markdown, яку ви вже мали відкритою. Перейдіть до тієї вкладки або відкрийте його тут.',
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
        'https://example.com/api/markdown': 'https://example.com/api/markdown',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(необов’язково, надсилається як «Authorization: Bearer …»; зберігається, доки відкрита ця вкладка)',
        'Send automatically a few seconds after each change (otherwise only when you click':
            'Надсилати автоматично через кілька секунд після кожної зміни (інакше лише коли ви натискаєте',
        'or press Ctrl+S)': 'або Ctrl+S)',
        'Only for “': 'Лише для «',
        '” (other documents use the general address)': '» (інші документи використовують загальну адресу)',
        'What your server receives': 'Що отримує ваш сервер',
        'A POST request with JSON (your server must allow CORS from https://md.giit.ch):':
            'POST-запит із JSON (ваш сервер має дозволяти CORS з https://md.giit.ch):',
        'Embed the editor in your website': 'Вбудувати редактор у ваш сайт',
        'Send now': 'Надіслати зараз',
        'Save setting': 'Зберегти налаштування',

        /* ---------- Help ---------- */
        'How it works': 'Як це працює',
        'Keyboard shortcuts': 'Поєднання клавіш',
        'Bold / italic around the selected text': 'Жирний / курсив навколо виділеного тексту',
        'Link': 'Посилання',
        'Show the cursor\'s place in the preview': 'Показати місце курсора в перегляді',
        'Indent / outdent': 'Збільшити / зменшити відступ',
        'Undo / redo': 'Скасувати / повторити',
        'Save (download .md, or to your server) / export': 'Зберегти (завантажити .md або на ваш сервер) / експорт',
        'Print / save as PDF': 'Друк / зберегти в PDF',
        'Problems (a missing picture, a link to a heading that is not there, a code block that is never closed, a table row with too many cells) are listed above the code - click one to go there.':
            'Проблеми (відсутнє зображення, посилання на неіснуючий заголовок, незакритий блок коду, рядок таблиці із зайвими клітинками) перелічено над кодом - клацніть проблему, щоб перейти до неї.',

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
        'This box changed in the code - wait for the preview, then try again':
            'Цей блок змінився в коді - дочекайтеся оновлення перегляду і спробуйте знову',
        'This picture changed in the code - wait for the preview, then try again': 'Це зображення змінилося в коді - дочекайтеся оновлення перегляду й спробуйте ще раз',
        'The code changed meanwhile - the edit was not used': 'Код тим часом змінився - правку не застосовано',
        'This anchor is not in the document': 'Цього якоря немає в документі',
        'The picture is removed from this document. Places that use it show its name in a frame. "Undo" does not bring it back.':
            'Зображення видалено з цього документа. Місця, де воно використовується, показують його ім’я в рамці. «Скасувати» його не поверне.',
        'Pictures can be PNG, JPG, GIF, WebP, SVG or PDF': 'Зображення можуть бути PNG, JPG, GIF, WebP, SVG або PDF',
        'The picture is larger than 12 MB': 'Зображення більше за 12 МБ',
        'The picture could not be read': 'Не вдалося прочитати зображення',
        'This document is empty already': 'Цей документ уже порожній',
        'Everything is removed; the pictures of the document stay. "Undo" brings the text back as long as the page is open.':
            'Усе видалено; зображення документа залишаються. «Скасувати» поверне текст, поки сторінка відкрита.',
        'Start over': 'Почати заново',
        'The file is larger than 8 MB': 'Файл більший за 8 МБ',
        'Downloaded': 'Завантажено',
        'Copied to the clipboard': 'Скопійовано в буфер обміну',
        'This browser does not allow copying this': 'Цей браузер не дозволяє це скопіювати',
        'Code copied': 'Код скопійовано',
        '.md with its pictures downloaded (ZIP)': '.md із зображеннями завантажено (ZIP)',
        '.md downloaded': '.md завантажено',
        'ZIP downloaded: .md, pictures, HTML and text': 'ZIP завантажено: .md, зображення, HTML і текст',
        'Add': 'Додати',
        'The document and its pictures are removed from this browser for good. Download it first if you want to keep a copy.':
            'Документ і його зображення буде остаточно видалено з цього браузера. Якщо хочете зберегти копію, спершу завантажте його.',

        /* ---------- Problems the preview finds (markdown.js) ---------- */
        '$$ is never closed - add a line with $$ after the formula': '$$ не закрито - додайте рядок із $$ після формули',
        /* Words that German keeps from the English, but Ukrainian does not */
        'Code': 'Код',
        'Export': 'Експорт',
        'Format': 'Формат',
        'Token': 'Токен',
        'Name': 'Ім’я',
    },
    html: {
        '<b>Export</b> also has <b>Open in another editor</b>: it converts the document and opens it as a new document there. Anything the other format cannot hold is listed first.':
            'У <b>Експорті</b> є й <b>Відкрити в іншому редакторі</b>: документ перетворюється й відкривається там як новий. Те, що інший формат не може вмістити, показується заздалегідь.',
        '<b>Insert</b> &gt; <b>New page</b> sets a page break for printing and PDF; the preview shows it as a dashed line. Headings stay with their text and tables and pictures are not cut. In Export, <b>Apply page breaks</b> turns them off for a PDF.':
            '<b>Вставка</b> &gt; <b>Нова сторінка</b> ставить розрив сторінки для друку та PDF; у перегляді він видний як пунктирна лінія. Заголовки лишаються з текстом, таблиці й зображення не розрізаються. У <b>Експорті</b> параметр <b>Застосовувати розриви сторінок</b> вимикає їх для PDF.',
        /* Export */
        'The print dialog opens with the document only. Choose <b>Save as PDF</b> (or "Microsoft Print to PDF") as the printer. In Chrome and Edge, untick "Headers and footers" if the browser offers it. The text in the PDF stays sharp and can be selected.':
            'Відкриється діалог друку лише з документом. Як принтер виберіть <b>Зберегти як PDF</b> (або «Microsoft Print to PDF»). У Chrome і Edge зніміть позначку «Верхні та нижні колонтитули», якщо браузер її пропонує. Текст у PDF залишається чітким, і його можна виділяти.',

        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Натисніть <b>Копіювати промпт</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'ШІ відповідає посиланням: клацніть його або вставте всю відповідь нижче. <b>Скасувати</b> поверне все назад.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'ШІ відповідає посиланням: <b>вставте всю його відповідь нижче</b> (клацнуте посилання відкриває окремий редактор). <b>Скасувати</b> поверне все назад.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'Редактор може надсилати кожну збережену версію на ваш власний сервер (<b>вебхук</b>), щоб ваша робота зберігалася там, де ви хочете. Нічого не надсилається, доки ви не введете тут адресу.',
        'Also possible: <code>?src=&lt;URL of a .md file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>mdeditor:ai</code>, <code>mdeditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Також можна: <code>?src=&lt;URL of a .md file&gt;</code> відкриває файл, <code>&amp;webhook=&lt;URL&gt;</code> зберігає туди цей документ. Редактор може відкриватися й в окремому вікні (<code>?embed=window</code>), а ваша сторінка може передати йому власний промпт для ШІ та ключ сеансу, щоб ШІ надсилав результат на ваш сервер (<code>mdeditor:ai</code>, <code>mdeditor:key-request</code>) - див. «Редактор на вашому сайті» під редактором. Подробиці - у <a href="/llms.txt">llms.txt</a>.',
        'Also possible: <code>?src=&lt;URL of a .md file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>mdeditor:ai</code>, <code>mdeditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Також можна: <code>?src=&lt;URL of a .md file&gt;</code> відкриває файл, <code>&amp;webhook=&lt;URL&gt;</code> зберігає туди цей документ. Редактор може відкриватися й в окремому вікні (<code>?embed=window</code>), а ваша сторінка може передати йому власний промпт для ШІ та ключ сеансу, щоб ШІ надсилав результат на ваш сервер (<code>mdeditor:ai</code>, <code>mdeditor:key-request</code>) - див. «Редактор на вашому сайті» під редактором. Подробиці - у <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> Markdown on the left - or start with <b>New</b> and one of the templates. The preview in the middle shows the document as you type.':
            '<b>Пишіть</b> Markdown ліворуч - або почніть із <b>Новий</b> та одного із шаблонів. Перегляд посередині показує документ просто під час набору.',
        '<b>Click text in the preview</b> to edit it right there: the cursor is where you clicked, and the code\'s cursor goes to the same place. <b>Enter</b> starts a new paragraph; <b>Shift+Enter</b> inserts a line break. <b>Ctrl+Enter</b> (<b>Cmd+Enter</b> on macOS) or a click elsewhere applies the edit; <b>Escape</b> cancels. Each edit is one step for Undo. Characters such as <code>*</code> or <code>_</code> are escaped so they stay text. A click on math, a picture or code jumps to its place in the code instead. <b>Ctrl</b> + click follows a link. A check box of a task list ticks the task in the code.':
            '<b>Клацніть текст у перегляді</b>, щоб редагувати його просто там: курсор з’явиться там, де ви клацнули, а курсор коду перейде в те саме місце. <b>Enter</b> починає новий абзац; <b>Shift+Enter</b> вставляє розрив рядка. <b>Ctrl+Enter</b> (<b>Cmd+Enter</b> у macOS) або клацання деінде застосовує зміну; <b>Escape</b> скасовує її. Кожну зміну можна скасувати однією дією. Символи на кшталт <code>*</code> або <code>_</code> екрануються, щоб залишитися текстом. Клацання формули, зображення чи коду натомість переносить до відповідного місця в коді. <b>Ctrl</b> + клацання відкриває посилання. Прапорець у списку завдань позначає завдання в коді.',
        '<b>Insert</b> on the right has ready-made pieces (headings, lists, tables, math, symbols); <b>Pictures</b> holds the pictures of the document; <b>Outline</b> lists the headings.':
            'У <b>Вставці</b> праворуч є готові елементи (заголовки, списки, таблиці, формули, символи); у <b>Зображеннях</b> зберігаються зображення документа; <b>План</b> перелічує заголовки.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser.':
            '<b>Мої документи</b> (кнопка з текою вгорі ліворуч) показують усі документи, що зберігаються в цьому браузері.',
        '<b>Export</b> makes an HTML page, a PDF (via the print dialog) or plain text. <b>Download .md</b> saves the code (with its pictures as ZIP).':
            '<b>Експорт</b> створює сторінку HTML, PDF (через діалог друку) або звичайний текст. <b>Завантажити .md</b> зберігає код (із зображеннями в ZIP).',
        'The preview understands CommonMark with GitHub\'s tables, task lists, strikethrough, autolinks and footnotes, and math in <code>$…$</code> and <code>$$…$$</code>. HTML in the Markdown is shown without scripts, styles, frames and forms.':
            'Перегляд розуміє CommonMark із таблицями GitHub, списками завдань, закресленням, автопосиланнями й виносками, а також формули в <code>$…$</code> і <code>$$…$$</code>. HTML усередині Markdown показується без скриптів, стилів, фреймів і форм.',
        'Math: <code>$…$</code> around the selection': 'Формула: <code>$…$</code> навколо виділення',
        'Lines in or out of a comment (<code>&lt;!-- --&gt;</code>)':
            'Закоментувати рядки або прибрати коментар (<code>&lt;!-- --&gt;</code>)',
        '<kbd>Enter</kbd> in a list starts the next item (<code>-</code>, <code>1.</code>, <code>- [ ]</code>, <code>&gt;</code>); on an empty item it ends the list. <code>* _ ` ~ $ [ (</code> close by themselves around a selection.':
            '<kbd>Enter</kbd> у списку починає наступний пункт (<code>-</code>, <code>1.</code>, <code>- [ ]</code>, <code>&gt;</code>); на порожньому пункті список закінчується. <code>* _ ` ~ $ [ (</code> самі закриваються навколо виділення.',
    },
    patterns: [
        /* ---------- Status lines ---------- */
        ['^(\\d+) lines · ([\\d.]+ K?B) · (\\d+) (?:word|words)$', (m, l, s, w) => `${l} ${getPlural(l, 'рядок', 'рядки', 'рядків')} · ${formatSize(s)} · ${w} ${getPlural(w, 'слово', 'слова', 'слів')}`],
        ['^\\.md and (\\d+) (?:picture|pictures)$', (m, k) => `.md і ${k} ${getPlural(k, 'зображення', 'зображення', 'зображень')}`],
        ['^([\\d,]+) bytes$', (m, b) => formatSize(m)],
        ['^\\d{1,3}(?:,\\d{3})+$', m => formatThousands(m)],

        /* Problems above the code */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'помилка', 'помилки', 'помилок')}`],
        ['^· (\\d+) (?:note|notes)$', (m, k) => `· ${k} ${getPlural(k, 'зауваження', 'зауваження', 'зауважень')}`],
        ['^(\\d+) (?:note|notes)$', (m, k) => `${k} ${getPlural(k, 'зауваження', 'зауваження', 'зауважень')}`],
        ['^Line (\\d+)$', 'Рядок $1'],
        ['^The preview failed: (.*)$', 'Перегляд не вдався: $1'],
        ['^The preview stopped at an unexpected problem: (.*)$', 'Перегляд зупинився на неочікуваній проблемі: $1'],
        ['^Picture "(.+)" not found - drag the picture into the editor \\(or add it in the Pictures tab\\)$', 'Зображення «$1» не знайдено - перетягніть зображення в редактор (або додайте його у вкладці «Зображення»)'],
        ['^The link to "(.+)" has no heading or anchor of that name$', 'Для посилання на «$1» немає заголовка чи якоря з такою назвою'],
        ['^This code block \\((.+)\\) is never closed - add a line with (.+) after the code$', 'Цей блок коду ($1) не закрито - додайте після коду рядок із $2'],
        ['^This table row has (\\d+) (?:cell|cells), the header has (\\d+)$', (m, k, h) => `У цьому рядку таблиці ${k} ${getPlural(k, 'клітинка', 'клітинки', 'клітинок')}, а в заголовку ${h}`],
        ['^Math: (.*)$', 'Формула: $1'],

        /* ---------- Pictures tab ---------- */
        ['^(\\d+) (?:picture|pictures) · (.+)$', (m, k, s) => `${k} ${getPlural(k, 'зображення', 'зображення', 'зображень')} · ${formatSize(s)}`],
        ['^Choose the file for (.+)$', 'Вибрати файл для $1'],
        ['^Insert !\\[…\\]\\((.+)\\) at the cursor$', 'Вставити ![…]($1) на місці курсора'],
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
        ['^"(.+)" is not a Markdown file$', '«$1» - не файл Markdown'],
        ['^Opened "(.+)" - it is now in "My documents"$', '«$1» відкрито - тепер він у «Мої документи»'],
        ['^Opened "(.+)" with (\\d+) (?:picture|pictures)$', (m, f, k) => `«${f}» відкрито з ${k} ${getPlural(k, 'зображенням', 'зображеннями', 'зображеннями')}`],
        ['^"(.+)" could not be opened: (.*)$', (m, f, why) => `«${f}» не вдалося відкрити: ${ZIP[why] || why}`],
        ['^Document received - the preview found (\\d+) (?:problem|problems), see above the code$', (m, k) => `Документ отримано - перегляд знайшов ${k} ${getPlural(k, 'проблему', 'проблеми', 'проблем')}, див. над кодом`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '«$1» змінено ШІ - «Скасувати» поверне все назад'],
        ['^"(.+)" duplicated$', '«$1» продубльовано'],
        ['^Delete "(.+)"\\?$', 'Видалити «$1»?'],
        ['^"(.+)" deleted$', '«$1» видалено'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Відкрити $1'],
    ],
};
