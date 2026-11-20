/* Russian texts of the Typst editor: the bar, the work area (code, pages,
   document settings, insert, pictures and files, outline), its dialogs and
   messages. What all editors share is in common.js; how the
   dictionaries are used is described in i18n.js. The compiler's own
   messages stay as Typst writes them (English); names of documents, files,
   labels and functions stay as they are: the patterns copy them into the
   Russian text. */

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

/* Reasons a ZIP could not be opened (app.js openZip) */
const ZIP = { 'it is not a ZIP file': 'это не файл ZIP', 'there is no .typ file in it': 'в нём нет файла .typ' };

export default {
    text: {
        "This document has no pages yet - fix the problems above the code first": "В этом документе пока нет страниц - сначала исправьте проблемы над кодом",
        // Editing in place: Enter and Shift+Enter
        "Editing on the page - Enter: new paragraph, Shift+Enter: new line, Ctrl+Enter or a click elsewhere keeps it, Escape cancels": "Правка на странице - Enter: новый абзац, Shift+Enter: новая строка, Ctrl+Enter или щелчок в другом месте сохраняет, Escape отменяет",
        "A new paragraph inside bold or emphasis is made in the code - Shift+Enter makes a new line": "Новый абзац внутри жирного или курсивного текста создаётся в коде - Shift+Enter вставляет перенос строки",
        /* ---------- Top bar ---------- */
        'Typst Editor - home': 'Редактор Typst - на главную',
        'Typst Editor': 'Редактор Typst',
        'File': 'Файл',
        'My documents (Ctrl+O)': 'Мои документы (Ctrl+O)',
        'My documents': 'Мои документы',
        'New document, or start this one over': 'Новый документ или начать этот заново',
        'New': 'Новый',
        'New blank document': 'Новый пустой документ',
        'An empty A4 page - your other documents stay as they are':
            'Пустая страница A4 - другие ваши документы останутся без изменений',
        'Article': 'Статья',
        'Title, abstract and four sections': 'Заголовок, аннотация и четыре раздела',
        'Letter': 'Письмо',
        'Addresses, date, subject and signature': 'Адреса, дата, тема и подпись',
        'Exercise sheet': 'Лист заданий',
        'Exercises with math, solutions and code': 'Задания с формулами, решениями и кодом',
        'Social media post': 'Пост для соцсетей',
        'A square picture with colors and big type': 'Квадратная картинка с цветами и крупным шрифтом',
        'The welcome example': 'Приветственный пример',
        'Shows what the editor can do': 'Показывает, что умеет редактор',
        'Start this document over': 'Начать этот документ заново',
        'Keeps the #set rules at the top, empties the text - "Undo" brings it back':
            'Сохраняет правила #set в начале, очищает текст - «Отменить» вернёт его',
        'Open a .typ file (or a picture or data file) from your computer (you can also drag it into the window)':
            'Открыть файл .typ (или изображение или файл данных) с компьютера (его можно и перетащить в окно)',
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
        'Save the document as a .typ file (Ctrl+S)': 'Сохранить документ как файл .typ (Ctrl+S)',
        'Download .typ': 'Скачать .typ',
        'PDF, pictures of the pages and more (Ctrl+E)': 'PDF, изображения страниц и другое (Ctrl+E)',
        'Export…': 'Экспорт…',

        /* ---------- Views and work area ---------- */
        'View': 'Вид',
        'Edit': 'Правка',
        'Side panel': 'Боковая панель',
        'Preview': 'Предпросмотр',
        'Document': 'Документ',
        'Typst code': 'Код Typst',
        'Copy the Typst code to the clipboard': 'Скопировать код Typst в буфер обмена',
        'Copy code': 'Копировать код',
        'Copy': 'Копировать',
        'Drag to change the width of the code area': 'Перетащите, чтобы изменить ширину области кода',
        'Drag to change the width': 'Перетащите, чтобы изменить ширину',
        'Formatting': 'Форматирование',
        'Bold: *text* (Ctrl+B)': 'Жирный: *text* (Ctrl+B)',
        'Bold': 'Жирный',
        'Italic: _text_ (Ctrl+I)': 'Курсив: _text_ (Ctrl+I)',
        'Italic': 'Курсив',
        'Underline (Ctrl+U)': 'Подчёркнутый (Ctrl+U)',
        'Underline': 'Подчёркнутый',
        'Code in the text: `text`': 'Код в тексте: `text`',
        'Code in the text': 'Код в тексте',
        'Heading': 'Заголовок',
        'Bulleted list': 'Маркированный список',
        'Numbered list': 'Нумерованный список',
        'Table': 'Таблица',
        'Picture': 'Изображение',
        'Math in the text (Ctrl+M)': 'Формула в тексте (Ctrl+M)',
        'Math': 'Математика',
        'Previous page (Page Up)': 'Предыдущая страница (Page Up)',
        'Previous page': 'Предыдущая страница',
        'Next page (Page Down)': 'Следующая страница (Page Down)',
        'Next page': 'Следующая страница',
        'Preview of the pages: click text to edit it or to jump to its place in the code':
            'Предпросмотр страниц: щёлкните по тексту, чтобы редактировать его или перейти к его месту в коде',
        'Zoom out (Ctrl + -)': 'Уменьшить (Ctrl + -)',
        'Zoom out': 'Уменьшить',
        'Show at actual size': 'Показать в натуральную величину',
        'Zoom in (Ctrl + +)': 'Увеличить (Ctrl + +)',
        'Zoom in': 'Увеличить',
        'Fit the page width into the window': 'Вписать ширину страницы в окно',
        'Fit width': 'По ширине',
        'Show the whole page': 'Показать страницу целиком',
        'Whole page': 'Вся страница',
        'Compiling…': 'Компиляция…',
        'Paper, font, margins and numbering of the document': 'Бумага, шрифт, поля и нумерация документа',
        'Ready-made pieces: structure, text, math, symbols': 'Готовые элементы: структура, текст, формулы, символы',
        'Insert': 'Вставка',
        'The pictures and files of this document': 'Изображения и файлы этого документа',
        'Pictures': 'Изображения',
        'The headings of the document': 'Заголовки документа',
        'Outline': 'Оглавление',
        'The headings of the document. Click one to go there in the code and on the pages.':
            'Заголовки документа. Щёлкните по заголовку, чтобы перейти к нему в коде и на страницах.',
        'No headings yet - add one with = Heading.': 'Заголовков пока нет - добавьте заголовок с помощью = Заголовок.',
        'Open it here': 'Открыть здесь',
        'Drop the .typ file, picture or data file here': 'Перетащите сюда файл .typ, изображение или файл данных',
        'Text on the page': 'Текст на странице',

        /* Problems above the code */
        'Hide': 'Скрыть',
        'Show': 'Показать',
        'Hint:': 'Подсказка:',

        /* ---------- Insert tab ---------- */
        'Structure': 'Структура',
        'Subheading': 'Подзаголовок',
        'Third level': 'Третий уровень',
        'Contents': 'Оглавление',
        '• Bulleted list': '• Маркеры',
        '1. Numbered list': '1. Нумерация',
        'Term list': 'Список терминов',
        'Figure': 'Рисунок',
        'Two columns': 'Две колонки',
        'Quote': 'Цитата',
        'Centered': 'По центру',
        'Program code': 'Код программы',
        'Title': 'Заголовок',
        'New page': 'Новая страница',
        'Vertical space': 'Вертик. отступ',
        'Bibliography': 'Литература',
        'A bibliography from a .bib file of the document (add it in the Pictures tab)':
            'Библиография из файла .bib документа (добавьте его во вкладке «Изображения»)',
        'Footnote': 'Сноска',
        'Reference': 'Ссылка',
        'Colored text': 'Цветной текст',
        'Highlighted': 'Выделенный',
        'Colored box': 'Цветная рамка',
        'Push right': 'Вправо',
        '$x$ in the text': '$x$ в тексте',
        'Displayed': 'Выключная',
        'Numbered equation': 'Уравнение с №',
        'Aligned lines': 'Выравнивание',
        'Fraction': 'Дробь',
        'Root': 'Корень',
        'x² Power': 'x² Степень',
        'x₁ Index': 'x₁ Индекс',
        '∑ Sum': '∑ Сумма',
        '∫ Integral': '∫ Интеграл',
        'lim Limit': 'lim Предел',
        'Matrix': 'Матрица',
        'Cases': 'Варианты (cases)',
        'Greek letters': 'Греческие буквы',
        'Symbols': 'Символы',
        'Pictures and files have their own tab:': 'У изображений и файлов своя вкладка:',

        /* ---------- Pictures tab ---------- */
        'Add pictures or files…': 'Добавить изображения или файлы…',
        'No pictures or files yet': 'Изображений и файлов пока нет',
        'Pictures and files belong to “': 'Изображения и файлы принадлежат «',
        '” and stay in your browser.': '» и остаются в вашем браузере.',
        'Missing in this document': 'Отсутствуют в этом документе',
        'Add file…': 'Добавить файл…',
        'Insert it at the cursor': 'Вставить у курсора',
        'Show where it is used': 'Показать, где используется',
        'A figure with caption and label at the cursor': 'Рисунок с подписью и меткой у курсора',
        'As figure': 'Как рисунок',
        'Rename - the code is changed along': 'Переименовать - код изменится вместе с именем',
        'Rename': 'Переименовать',
        'Choose another file, keep the name': 'Выбрать другой файл, сохранив имя',
        'Replace': 'Заменить',
        'Download the file': 'Скачать файл',
        'Download': 'Скачать',
        'Remove the file from this document': 'Удалить файл из этого документа',
        'Remove': 'Удалить',
        'New name': 'Новое имя',
        'Font': 'Шрифт',

        /* ---------- Document tab ---------- */
        'Paper': 'Бумага',
        'Square 120 × 120 mm (1:1)': 'Квадрат 120 × 120 мм (1:1)',
        'Portrait 4:5 (120 × 150 mm)': 'Портрет 4:5 (120 × 150 мм)',
        'Story 9:16 (90 × 160 mm)': 'Сторис 9:16 (90 × 160 мм)',
        'Slide 16:9 (160 × 90 mm)': 'Слайд 16:9 (160 × 90 мм)',
        'Other size': 'Другой размер',
        'Margins': 'Поля',
        'Typst default (about 2.5 cm)': 'По умолчанию в Typst (около 2,5 см)',
        'Normal (2.5 cm)': 'Обычные (2,5 см)',
        'Narrow (2 cm)': 'Узкие (2 см)',
        'Very narrow (1.5 cm)': 'Очень узкие (1,5 см)',
        'Wide (3.5 cm)': 'Широкие (3,5 см)',
        'None': 'Нет',
        'Other': 'Другое',
        'Orientation': 'Ориентация',
        'Portrait': 'Книжная',
        'Landscape': 'Альбомная',
        'Libertinus Serif (Typst default)': 'Libertinus Serif (по умолчанию в Typst)',
        'New Computer Modern (like LaTeX)': 'New Computer Modern (как в LaTeX)',
        'DejaVu Sans Mono (typewriter)': 'DejaVu Sans Mono (моноширинный)',
        'Font size': 'Размер шрифта',
        '11 pt (default)': '11 pt (по умолчанию)',
        'Language': 'Язык',
        'English (default)': 'Английский (по умолчанию)',
        'German': 'Немецкий',
        'German (Switzerland)': 'Немецкий (Швейцария)',
        'French': 'Французский',
        'Italian': 'Итальянский',
        'Spanish': 'Испанский',
        'Line spacing': 'Межстрочный интервал',
        'Normal': 'Обычный',
        'More': 'Больше',
        '1½ lines': 'Полуторный',
        'Double': 'Двойной',
        'Columns': 'Столбцы',
        'One': 'Одна',
        'Two': 'Две',
        'Three': 'Три',
        'Justified text (both edges straight)': 'Выравнивание по ширине (оба края ровные)',
        'Numbered headings (1., 1.1 …)': 'Нумерованные заголовки (1., 1.1 …)',
        'Page numbers': 'Номера страниц',
        '(of the PDF; #title() shows it)': '(PDF; #title() показывает его)',
        'Author': 'Автор',
        'Show the title (#title())': 'Показать заголовок (#title())',
        'pages · about': 'стр. · около',
        'page · about': 'стр. · около',

        /* ---------- Export ---------- */
        'Close': 'Закрыть',
        'File name': 'Имя файла',
        'PDF (from the Typst compiler)': 'PDF (из компилятора Typst)',
        'Pictures of the pages': 'Изображения страниц',
        'SVG (vector)': 'SVG (вектор)',
        'Source': 'Исходный код',
        'Typst source (.typ)': 'Исходный код Typst (.typ)',
        'Typst with pictures and files (ZIP)': 'Typst с изображениями и файлами (ZIP)',
        'Pages': 'Страницы',
        'The page shown now': 'Показанная сейчас страница',
        'All pages (one picture each, as ZIP)': 'Все страницы (по картинке на каждую, в ZIP)',
        'Sharpness': 'Чёткость',
        '96 dpi (screen)': '96 dpi (экран)',
        '300 dpi (print)': '300 dpi (печать)',
        'Result': 'Результат',
        'The PDF comes straight from the Typst compiler: the same pages as in the preview, with real text that can be selected and searched, links and the document\'s title.':
            'PDF создаётся прямо компилятором Typst: те же страницы, что и в предпросмотре, с настоящим текстом, который можно выделять и искать, ссылками и заголовком документа.',
        'Download everything at once: .typ, pictures and files, PDF and every page as PNG and SVG':
            'Скачать всё сразу: .typ, изображения и файлы, PDF и каждую страницу как PNG и SVG',
        'All formats (ZIP)': 'Все форматы (ZIP)',

        /* ---------- My documents ---------- */
        'Search by name': 'Поиск по имени',
        'Search your documents': 'Поиск по вашим документам',
        'Open a .typ file from your computer as a new document': 'Открыть файл .typ с компьютера как новый документ',
        'New document': 'Новый документ',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Щёлкните по документу, чтобы открыть его. Документы хранятся только в этом браузере - ничего не загружается на сервер. Очистка данных сайта в браузере удалит их, поэтому скачайте те, которые хотите сохранить.',
        'Download every document as a .typ file (with its pictures and files) in one ZIP':
            'Скачать все документы как файлы .typ (с изображениями и файлами) одним ZIP',
        'Download all (ZIP)': 'Скачать все (ZIP)',
        'Duplicate': 'Дублировать',
        'Download as .typ': 'Скачать как .typ',
        'Delete': 'Удалить',
        'This document is open': 'Этот документ открыт',
        'Click to open this document': 'Щёлкните, чтобы открыть этот документ',
        'No documents yet.': 'Документов пока нет.',

        /* ---------- AI Assistant ---------- */
        'Any AI can write with you - ChatGPT, Claude, Gemini, Copilot.':
            'С вами может писать любой ИИ - ChatGPT, Claude, Gemini, Copilot.',
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
        'The document travels in the link after the “#”, which no server sees. What you paste into your AI is handled by its provider.':
            'Документ передаётся в ссылке после «#»; эта часть не видна ни одному серверу. То, что вы вставляете в свой ИИ, обрабатывает его провайдер.',
        'The prompt - copy it with Ctrl+C': 'Промпт - скопируйте его через Ctrl+C',
        'Copy prompt': 'Копировать промпт',
        /* the step with the link, also when the editor sets it anew (text by text) */
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
        'The document is now in the Typst Editor tab you already had open. Switch to that tab, or open it here.':
            'Документ теперь во вкладке редактора Typst, которая у вас уже была открыта. Перейдите в ту вкладку или откройте его здесь.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)':
            'Копирование здесь запрещено - текст выделен ниже: нажмите Ctrl+C (⌘C)',
        'Paste it into your AI and say what it should write.': 'Вставьте его в свой ИИ и скажите, что нужно написать.',
        'Prompt copied - paste it into your AI and say what it should write':
            'Промпт скопирован - вставьте его в свой ИИ и скажите, что нужно написать',
        'This link is incomplete or damaged - please ask the AI to send it again':
            'Ссылка неполная или повреждена - попросите ИИ отправить её ещё раз',

        /* ---------- Save to your server ---------- */
        'Save to your server': 'Сохранение на ваш сервер',
        'Webhook address': 'Адрес вебхука',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(необязательно, отправляется как «Authorization: Bearer …»; хранится, пока открыта эта вкладка)',
        'Send automatically a few seconds after each change (otherwise only when you click':
            'Отправлять автоматически через несколько секунд после каждого изменения (иначе только когда вы нажимаете',
        'or press Ctrl+S)': 'или Ctrl+S)',
        'Only for “': 'Только для «',
        '” (other documents use the general address)': '» (другие документы используют общий адрес)',
        'What your server receives': 'Что получает ваш сервер',
        'A POST request with JSON (your server must allow CORS from https://typst.giit.ch):':
            'POST-запрос с JSON (ваш сервер должен разрешать CORS с https://typst.giit.ch):',
        'https://example.com/api/typst': 'https://example.com/api/typst',
        'Embed the editor in your website': 'Встроить редактор в ваш сайт',
        'Send now': 'Отправить сейчас',
        'Save setting': 'Сохранить настройку',

        /* ---------- Help ---------- */
        'How it works': 'Как это работает',
        'The compiler\'s errors and warnings are listed above the code with line, column and hint - click one to go there.':
            'Ошибки и предупреждения компилятора перечислены над кодом со строкой, столбцом и подсказкой - щёлкните по ошибке, чтобы перейти к ней.',
        'Keyboard shortcuts': 'Сочетания клавиш',
        'Bold / italic / underline the selected text': 'Жирный / курсив / подчёркивание выделенного текста',
        'Show the cursor\'s place on the pages': 'Показать место курсора на страницах',
        'Indent / outdent': 'Увеличить / уменьшить отступ',
        'Undo / redo': 'Отменить / повторить',
        'Save (download .typ, or to your server) / export': 'Сохранить (скачать .typ или на ваш сервер) / экспорт',
        'Print the pages': 'Печать страниц',
        '+ mouse wheel,': '+ колесо мыши,',
        'Zoom the preview': 'Масштаб предпросмотра',
        'Page Up': 'Page Up',
        'Page Down': 'Page Down',
        'Previous / next page (in the preview)': 'Предыдущая / следующая страница (в предпросмотре)',

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
        'This text changed in the code - wait for the preview, then try again':
            'Этот текст изменился в коде - дождитесь обновления предпросмотра и попробуйте снова',
        'The code changed meanwhile - the edit was not used': 'Код тем временем изменился - правка не применена',
        'The file is removed from this document. The code that uses it then reports a missing file. "Undo" does not bring it back.':
            'Файл удалён из этого документа. Код, который его использует, сообщит об отсутствующем файле. «Отменить» его не вернёт.',
        'Pictures can be PNG, JPG, GIF, WebP, SVG or PDF; files CSV, JSON, YAML, TOML, XML, TXT, BIB, Typst or fonts':
            'Изображения могут быть PNG, JPG, GIF, WebP, SVG или PDF; файлы - CSV, JSON, YAML, TOML, XML, TXT, BIB, Typst или шрифты',
        'The file is larger than 12 MB': 'Файл больше 12 МБ',
        'The picture could not be read': 'Не удалось прочитать изображение',
        'Change width and height in the #set page(…) line': 'Измените ширину и высоту в строке #set page(…)',
        'Title added': 'Заголовок добавлен',
        'This document is empty already': 'Этот документ уже пуст',
        'The text is removed; the settings at the top (#set, #show, #import, #let) stay. "Undo" brings it back as long as the page is open.':
            'Текст удалён; настройки в начале (#set, #show, #import, #let) остаются. «Отменить» вернёт его, пока страница открыта.',
        'Everything is removed. "Undo" brings it back as long as the page is open.':
            'Всё удалено. «Отменить» вернёт это, пока страница открыта.',
        'Start over': 'Начать заново',
        'The file is larger than 8 MB': 'Файл больше 8 МБ',
        'Downloaded': 'Скачано',
        'Copied to the clipboard': 'Скопировано в буфер обмена',
        'This browser does not allow copying this': 'Этот браузер не позволяет это скопировать',
        'Code copied': 'Код скопирован',
        '.typ with its files downloaded (ZIP)': '.typ с файлами скачан (ZIP)',
        '.typ downloaded': '.typ скачан',
        'Add': 'Добавить',
        'The document and its pictures are removed from this browser for good. Download it first if you want to keep a copy.':
            'Документ и его изображения будут навсегда удалены из этого браузера. Если хотите сохранить копию, сначала скачайте его.',
        'The page could not be drawn': 'Не удалось отобразить страницу',
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
        /* Pictures tab */
        'Drop or paste pictures anywhere in the editor, or add them here: <code>image("name")</code> shows a picture, <code>csv</code>, <code>json</code>, <code>read</code> or <code>bibliography</code> read data files, fonts (.otf, .ttf) work with <code>#set text(font: …)</code>.':
            'Перетащите или вставьте изображения в любое место редактора или добавьте их здесь: <code>image("name")</code> показывает изображение, <code>csv</code>, <code>json</code>, <code>read</code> или <code>bibliography</code> читают файлы данных, шрифты (.otf, .ttf) работают с <code>#set text(font: …)</code>.',

        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Нажмите <b>Копировать промпт</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'ИИ отвечает ссылкой: щёлкните по ней или вставьте весь ответ ниже. <b>Отменить</b> вернёт всё назад.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'ИИ отвечает ссылкой: <b>вставьте весь его ответ ниже</b> (щелчок по ссылке открывает отдельный редактор). <b>Отменить</b> вернёт всё назад.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'Редактор может отправлять каждую сохранённую версию на ваш собственный сервер (<b>вебхук</b>), чтобы ваша работа хранилась там, где вы хотите. Ничего не отправляется, пока вы не введёте здесь адрес.',
        'Also possible: <code>?src=&lt;URL of a .typ file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>typsteditor:ai</code>, <code>typsteditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Также можно: <code>?src=&lt;URL of a .typ file&gt;</code> открывает файл, <code>&amp;webhook=&lt;URL&gt;</code> сохраняет туда этот документ. Редактор может открываться и в отдельном окне (<code>?embed=window</code>), а ваша страница может передать ему собственный промпт для ИИ и ключ сеанса, чтобы ИИ отправлял результат на ваш сервер (<code>typsteditor:ai</code>, <code>typsteditor:key-request</code>) - см. «Редактор на вашем сайте» под редактором. Подробности - в <a href="/llms.txt">llms.txt</a>.',
        'Also possible: <code>?src=&lt;URL of a .typ file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>typsteditor:ai</code>, <code>typsteditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Также можно: <code>?src=&lt;URL of a .typ file&gt;</code> открывает файл, <code>&amp;webhook=&lt;URL&gt;</code> сохраняет туда этот документ. Редактор может открываться и в отдельном окне (<code>?embed=window</code>), а ваша страница может передать ему собственный промпт для ИИ и ключ сеанса, чтобы ИИ отправлял результат на ваш сервер (<code>typsteditor:ai</code>, <code>typsteditor:key-request</code>) - см. «Редактор на вашем сайте» под редактором. Подробности - в <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> Typst on the left - or start with <b>New</b> and one of the templates. The real Typst compiler runs in your browser and shows the pages as you type.':
            '<b>Пишите</b> Typst слева - или начните с <b>Новый</b> и одного из шаблонов. Настоящий компилятор Typst работает в вашем браузере и показывает страницы прямо во время набора.',
        '<b>Click text on the page</b> to edit it right there: a field opens with the cursor where you clicked, and the code\'s cursor goes to the same place. Enter starts a new paragraph; Shift+Enter inserts a line break. Ctrl+Enter (Cmd+Enter on macOS) or a click elsewhere applies the edit; Escape cancels. A click on math, a picture or text made by code jumps to its place in the code instead. The place where the code cursor is gets a frame on the page.':
            '<b>Щёлкните по тексту на странице</b>, чтобы править его прямо там: откроется поле с курсором там, где вы щёлкнули, а курсор кода перейдёт в то же место. Enter начинает новый абзац; Shift+Enter вставляет перенос строки. Ctrl+Enter (Cmd+Enter в macOS) или щелчок в другом месте применяет изменение; Escape отменяет его. Щелчок по формуле, изображению или тексту, созданному кодом, вместо этого переходит к его месту в коде. Место, где стоит курсор кода, обводится рамкой на странице.',
        '<b>Document</b> on the right sets paper, font, margins and numbering (it edits the <code>#set</code> rules); <b>Insert</b> has ready-made pieces (lists, tables, math, symbols); <b>Pictures</b> holds the pictures and data files of the document; <b>Outline</b> lists the headings.':
            '<b>Документ</b> справа задаёт бумагу, шрифт, поля и нумерацию (он правит правила <code>#set</code>); во <b>Вставке</b> есть готовые элементы (списки, таблицы, формулы, символы); в <b>Изображениях</b> хранятся изображения и файлы данных документа; <b>Оглавление</b> перечисляет заголовки.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser.':
            '<b>Мои документы</b> (кнопка с папкой вверху слева) показывают все документы, хранящиеся в этом браузере.',
        '<b>Export</b> makes a PDF (from the Typst compiler, with real text) and pictures of the pages (PNG, JPG, WebP, SVG). <b>Download .typ</b> saves the code.':
            '<b>Экспорт</b> создаёт PDF (компилятором Typst, с настоящим текстом) и изображения страниц (PNG, JPG, WebP, SVG). <b>Скачать .typ</b> сохраняет код.',
        'Packages from Typst Universe (<code>#import "@preview/…"</code>) are not downloaded - nothing is loaded from other servers. Fonts: Libertinus Serif, New Computer Modern, DejaVu Sans Mono and the fonts you add to a document.':
            'Пакеты из Typst Universe (<code>#import "@preview/…"</code>) не скачиваются - ничего не загружается с других серверов. Шрифты: Libertinus Serif, New Computer Modern, DejaVu Sans Mono и шрифты, которые вы добавите в документ.',
        'Math: <code>$…$</code> around the selection': 'Формула: <code>$…$</code> вокруг выделения',
        'Comment lines in or out (<code>//</code>)': 'Закомментировать строки или убрать комментарий (<code>//</code>)',
        'Enter in a list continues it (<code>-</code>, <code>+</code>, <code>1.</code>); Enter on an empty item ends it. Brackets, <code>$</code>, <code>*</code> and <code>_</code> go around a selection.':
            'Enter в списке продолжает его (<code>-</code>, <code>+</code>, <code>1.</code>); Enter на пустом пункте заканчивает список. Скобки, <code>$</code>, <code>*</code> и <code>_</code> ставятся вокруг выделения.',
    },
    patterns: [
        /* ---------- Status lines ---------- */
        ['^(\\d+) lines · ([\\d.]+ K?B)(?: · (\\d+) (?:page|pages))?$', (m, l, kb, p) => `${l} ${getPlural(l, 'строка', 'строки', 'строк')} · ${formatSize(kb)}${p ? ` · ${p} ${getPlural(p, 'страница', 'страницы', 'страниц')}` : ''}`],
        ['^(\\d+) (?:page|pages)$', (m, k) => `${k} ${getPlural(k, 'страница', 'страницы', 'страниц')}`],
        ['^(\\d+) × (\\d+) pixels per page · (\\d+) (?:page|pages)$', (m, w, h, k) => `${w} × ${h} пикселей на страницу · ${k} ${getPlural(k, 'страница', 'страницы', 'страниц')}`],
        ['^(\\d+) (?:page|pages) as SVG \\(sharp at any size\\)$', (m, k) => `${k} ${getPlural(k, 'страница', 'страницы', 'страниц')} в SVG (чётко в любом размере)`],
        ['^\\.typ and (\\d+) (?:file|files)$', (m, k) => `.typ и ${k} ${getPlural(k, 'файл', 'файла', 'файлов')}`],
        ['^([\\d,]+) bytes$', (m, b) => formatSize(m)],
        ['^words · (\\d+) × (\\d+) mm(?: · compiled in (\\d+) ms)?$', (m, w, h, ms) => `слов · ${w} × ${h} мм${ms ? ` · скомпилировано за ${ms} мс` : ''}`],
        ['^\\d{1,3}(?:,\\d{3})+$', m => formatThousands(m)],

        /* Problems above the code */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'ошибка', 'ошибки', 'ошибок')}`],
        ['^· (\\d+) (?:warning|warnings)$', (m, k) => `· ${k} ${getPlural(k, 'предупреждение', 'предупреждения', 'предупреждений')}`],
        ['^(\\d+) (?:warning|warnings)$', (m, k) => `${k} ${getPlural(k, 'предупреждение', 'предупреждения', 'предупреждений')}`],
        ['^Line (\\d+), column (\\d+)$', 'Строка $1, столбец $2'],

        /* ---------- Pictures tab ---------- */
        ['^(\\d+) (?:file|files) · (.+)$', (m, k, s) => `${k} ${getPlural(k, 'файл', 'файла', 'файлов')} · ${formatSize(s)}`],
        ['^Choose the file for (.+)$', 'Выбрать файл для $1'],
        ['^used (\\d+)×$', 'используется $1×'],
        ['^(.* · )?not used yet$', (m, a) => `${a || ''}пока не используется`],
        ['^(.* · )?a font of the document$', (m, a) => `${a || ''}шрифт документа`],

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
        ['^"(.+)" is now "(.+)"$', '«$1» теперь называется «$2»'],
        ['^Remove "(.+)"\\?$', 'Удалить «$1»?'],
        ['^"(.+)" now has the new file$', '«$1» теперь с новым файлом'],
        ['^"(.+)" added to "(.+)"$', '«$1» добавлен в «$2»'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '«$1» теперь пуст - «Отменить» вернёт содержимое'],
        ['^"(.+)" opened$', '«$1» открыт'],
        ['^New document "(.+)" - your other documents are under "My documents"$', 'Новый документ «$1» - другие ваши документы в разделе «Мои документы»'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$', 'Новый документ «$1» от ИИ - другие ваши документы не изменились'],
        ['^Opened "(.+)" - it is now in "My documents"$', '«$1» открыт - теперь он в разделе «Мои документы»'],
        ['^Opened "(.+)" with (\\d+) (?:file|files)$', (m, f, k) => `«${f}» открыт с ${k} ${getPlural(k, 'файлом', 'файлами', 'файлами')}`],
        ['^"(.+)" could not be opened: (.*)$', (m, f, why) => `«${f}» не удалось открыть: ${ZIP[why] || why}`],
        ['^ZIP downloaded: \\.typ, files, PDF and (\\d+) (?:page|pages) as PNG and SVG$', (m, k) => `ZIP скачан: .typ, файлы, PDF и ${k} ${getPlural(k, 'страница', 'страницы', 'страниц')} в PNG и SVG`],
        ['^Document received - the compiler found (\\d+) (?:problem|problems), see above the code$', (m, k) => `Документ получен - компилятор нашёл ${k} ${getPlural(k, 'проблему', 'проблемы', 'проблем')}, см. над кодом`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '«$1» изменён ИИ - «Отменить» вернёт всё назад'],
        ['^"(.+)" duplicated$', '«$1» дублирован'],
        ['^Delete "(.+)"\\?$', 'Удалить «$1»?'],
        ['^"(.+)" deleted$', '«$1» удалён'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Открыть $1'],
    ],
};
