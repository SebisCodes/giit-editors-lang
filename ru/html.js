/* Russian texts of the HTML editor: the bar, the work area (code, preview,
   document settings, insert, files, outline), its dialogs and messages,
   and the problems the editor finds in the code. What all editors share is
   in common.js; how the dictionaries are used is described in
   i18n.js. Names of documents, files, elements and attributes stay as they
   are: the patterns copy them into the Russian text. */

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
const ZIP = { 'it is not a ZIP file': 'это не файл ZIP', 'there is no .html file in it': 'в нём нет файла .html' };

export default {
    text: {
        // Editing in place: Enter and Shift+Enter
        "Editing in the preview - Enter: new paragraph, Shift+Enter: new line, Ctrl+Enter or a click elsewhere keeps it, Escape cancels": "Правка в предпросмотре - Enter: новый абзац, Shift+Enter: новая строка, Ctrl+Enter или щелчок в другом месте сохраняет, Escape отменяет",
        /* ---------- Top bar ---------- */
        'HTML Editor - home': 'Редактор HTML - на главную',
        'HTML Editor': 'Редактор HTML',
        'File': 'Файл',
        'My documents (Ctrl+O)': 'Мои документы (Ctrl+O)',
        'My documents': 'Мои документы',
        'New document, or start this one over': 'Новый документ или начать этот заново',
        'New': 'Новый',
        'New blank page': 'Новая пустая страница',
        'An empty HTML page - your other documents stay as they are':
            'Пустая страница HTML - другие ваши документы останутся без изменений',
        'Landing page': 'Лендинг',
        'A big header, three features and a footer': 'Большая шапка, три преимущества и подвал',
        'Article': 'Статья',
        'Title, sections, a quote and a list': 'Заголовок, разделы, цитата и список',
        'Contact form': 'Форма обратной связи',
        'Name, email and message with labels': 'Имя, e-mail и сообщение с подписями',
        'Email newsletter': 'Рассылка по e-mail',
        'An email layout with a table': 'Макет письма с таблицей',
        'The welcome example': 'Приветственный пример',
        'Shows what the editor can do': 'Показывает, что умеет редактор',
        'Start this document over': 'Начать этот документ заново',
        'Keeps the head, empties the body - "Undo" brings it back': 'Сохраняет head, очищает body - «Отменить» вернёт его',
        'Open an .html file (or a picture, stylesheet or ZIP) from your computer (you can also drag it into the window)':
            'Открыть файл .html (или изображение, таблицу стилей или ZIP) с компьютера (его можно и перетащить в окно)',
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
        'Save the page as an .html file - with its files as ZIP (Ctrl+S)':
            'Сохранить страницу как файл .html - с её файлами как ZIP (Ctrl+S)',
        'Download .html': 'Скачать .html',
        'HTML, one file with everything inside, ZIP, PDF and text (Ctrl+E)':
            'HTML, один файл со всем внутри, ZIP, PDF и текст (Ctrl+E)',
        'Export…': 'Экспорт…',

        /* ---------- Views and work area ---------- */
        'View': 'Вид',
        'Edit': 'Правка',
        'Side panel': 'Боковая панель',
        'Preview': 'Предпросмотр',
        'Document': 'Документ',
        'HTML code': 'Код HTML',
        'Copy the HTML code to the clipboard': 'Скопировать код HTML в буфер обмена',
        'Copy code': 'Копировать код',
        'Copy': 'Копировать',
        'Indent every line by the depth of its elements': 'Задать отступы строк по уровню вложенности элементов',
        'Tidy up': 'Навести порядок',
        'Drag to change the width of the code area': 'Перетащите, чтобы изменить ширину области кода',
        'Drag to change the width': 'Перетащите, чтобы изменить ширину',
        'Formatting': 'Форматирование',
        'Bold (Ctrl+B)': 'Жирный (Ctrl+B)',
        'Bold': 'Жирный',
        'Italic (Ctrl+I)': 'Курсив (Ctrl+I)',
        'Italic': 'Курсив',
        'Underline (Ctrl+U)': 'Подчёркнутый (Ctrl+U)',
        'Underline': 'Подчёркнутый',
        'Heading': 'Заголовок',
        'Bulleted list': 'Маркированный список',
        'Numbered list': 'Нумерованный список',
        'Table': 'Таблица',
        'Picture': 'Изображение',
        'Width of the preview': 'Ширина предпросмотра',
        'As wide as the preview': 'По ширине предпросмотра',
        'Full width': 'Полная ширина',
        'Tablet (768 pixels wide)': 'Планшет (ширина 768 пикселей)',
        'Tablet width': 'Планшет',
        'Phone (390 pixels wide)': 'Телефон (ширина 390 пикселей)',
        'Phone width': 'Телефон',
        'Preview of the page: click text to edit it, or anything else to jump to its place in the code':
            'Предпросмотр страницы: щёлкните по тексту, чтобы редактировать его, или по чему-то другому, чтобы перейти к его месту в коде',
        'Preview of the page': 'Предпросмотр страницы',
        'Updating…': 'Обновление…',
        'Title, language, description and the stylesheets of the page': 'Заголовок, язык, описание и таблицы стилей страницы',
        'Ready-made pieces: structure, text, lists, media, forms, head':
            'Готовые элементы: структура, текст, списки, медиа, формы, head',
        'Insert': 'Вставка',
        'The pictures and other files of this document': 'Изображения и другие файлы этого документа',
        'Files': 'Файлы',
        'The headings of the page': 'Заголовки страницы',
        'Outline': 'Оглавление',
        'The headings of the page. Click one to go there in the code and in the preview.':
            'Заголовки страницы. Щёлкните по заголовку, чтобы перейти к нему в коде и в предпросмотре.',
        'No headings yet - add one with <h1> … <h6>.': 'Заголовков пока нет - добавьте заголовок с помощью <h1> … <h6>.',
        'Open it here': 'Открыть здесь',
        'Drop the .html file, picture or stylesheet here': 'Перетащите сюда файл .html, изображение или таблицу стилей',

        /* Problems above the code */
        'Hide': 'Скрыть',
        'Show': 'Показать',

        /* ---------- Insert tab ---------- */
        'Structure': 'Структура',
        'Heading 1': 'Заголовок 1',
        'Heading 2': 'Заголовок 2',
        'Heading 3': 'Заголовок 3',
        'Heading 4': 'Заголовок 4',
        'Paragraph': 'Абзац',
        'Section': 'Раздел',
        'Header': 'Шапка',
        'Navigation bar': 'Навигация',
        'Main content': 'Основная часть',
        'Footer': 'Подвал',
        'Box': 'Блок',
        'Fold-out (details)': 'Спойлер',
        'Dividing line': 'Разделитель',
        'Apply page breaks': 'Применять разрывы страниц',
        'New page': 'Новая страница',
        'Line break': 'Перенос строки',
        'Comment': 'Комментарий',
        'Lists and tables': 'Списки и таблицы',
        '• Bulleted list': '• Маркеры',
        '1. Numbered list': '1. Нумерация',
        'Description list': 'Список описаний',
        'Highlighted': 'Выделенный',
        'Small print': 'Мелкий шрифт',
        'Code in the text': 'Код в тексте',
        'x² Superscript': 'x² Верх. индекс',
        'x₁ Subscript': 'x₁ Ниж. индекс',
        'Quote': 'Цитата',
        'Program code': 'Код программы',
        'Inline part (span)': 'Фрагмент (span)',
        'Media': 'Медиа',
        'Figure with caption': 'Рисунок с подп.',
        'Video player': 'Видеоплеер',
        'Audio player': 'Аудиоплеер',
        'The files of the page have their own tab:': 'У файлов страницы своя вкладка:',
        'Forms': 'Формы',
        'Form': 'Форма',
        'Text field': 'Текстовое поле',
        'Email field': 'Поле e-mail',
        'Text area': 'Большое поле',
        'Choice list': 'Список выбора',
        'Tick box': 'Флажок',
        'Radio buttons': 'Переключатели',
        'Button': 'Кнопка',
        'Head': 'Head (заголовок)',
        'Character set': 'Кодировка',
        'The character set: <meta charset="utf-8">': 'Кодировка: <meta charset="utf-8">',
        'Fits phone screens: <meta name="viewport">': 'Под экраны телефонов: <meta name="viewport">',
        'Description': 'Описание',
        'For search engines: <meta name="description">': 'Для поисковых систем: <meta name="description">',
        'Shared links': 'Для соцсетей',
        'Title, description and picture for shared links (Open Graph)':
            'Заголовок, описание и картинка для ссылок в соцсетях (Open Graph)',
        'Stylesheet file': 'Файл стилей',
        'A stylesheet file: <link rel="stylesheet">': 'Файл таблицы стилей: <link rel="stylesheet">',
        'Style block': 'Блок стилей',
        'CSS in the page: <style> … </style>': 'CSS на странице: <style> … </style>',
        'Tab icon': 'Значок вкладки',
        'The icon in the browser tab: <link rel="icon">': 'Значок во вкладке браузера: <link rel="icon">',
        'Special characters': 'Спецсимволы',
        'Insert &nbsp; (no-break space)': 'Вставить &nbsp; (неразрывный пробел)',
        'Insert &shy; (soft hyphen)': 'Вставить &shy; (мягкий перенос)',

        /* ---------- Files tab ---------- */
        'Add files…': 'Добавить файлы…',
        'No files yet': 'Файлов пока нет',
        'Missing in this document': 'Отсутствуют в этом документе',
        'Add file…': 'Добавить файл…',
        'Show where it is used': 'Показать, где используется',
        'A picture (img) at the cursor': 'Изображение (img) у курсора',
        'A link to the stylesheet in the head': 'Ссылка на таблицу стилей в head',
        'A reference to the file at the cursor': 'Ссылка на файл у курсора',
        'A figure with caption at the cursor': 'Рисунок с подписью у курсора',
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

        /* ---------- Document tab ---------- */
        'Title': 'Заголовок',
        '(in the browser tab and in search results)': '(во вкладке браузера и в результатах поиска)',
        'Language': 'Язык',
        '(for search engines)': '(для поисковых систем)',
        'Author': 'Автор',
        'Characters as UTF-8 (meta charset)': 'Символы в UTF-8 (meta charset)',
        'Fits phone screens (meta viewport)': 'Под экраны телефонов (meta viewport)',
        'Linked stylesheets': 'Подключённые таблицы стилей',
        'No stylesheet is linked.': 'Таблицы стилей не подключены.',
        'Add a .css file in the Files tab to link it here.': 'Добавьте файл .css во вкладке «Файлы», чтобы подключить его здесь.',
        'Stylesheet of this document': 'Таблица стилей этого документа',
        'Link it': 'Подключить',
        'from the web': 'из интернета',
        'a file of this document': 'файл этого документа',
        'missing': 'отсутствует',
        'Show it in the code': 'Показать в коде',
        'Not set': 'Не задан',
        'English (en)': 'Английский (en)',
        'English, US (en-US)': 'Английский, США (en-US)',
        'English, UK (en-GB)': 'Английский, Великобритания (en-GB)',
        'German (de)': 'Немецкий (de)',
        'German, Switzerland (de-CH)': 'Немецкий, Швейцария (de-CH)',
        'German, Germany (de-DE)': 'Немецкий, Германия (de-DE)',
        'French (fr)': 'Французский (fr)',
        'Italian (it)': 'Итальянский (it)',
        'Spanish (es)': 'Испанский (es)',
        'Portuguese (pt)': 'Португальский (pt)',
        'Dutch (nl)': 'Нидерландский (nl)',
        'elements · about': 'элем. · около',
        'element · about': 'элем. · около',
        'words ·': 'слов ·',
        'headings ·': 'загол. ·',
        'heading ·': 'загол. ·',
        'files': 'файлов',
        'file': 'файл',
        'Make it a complete page': 'Сделать полной страницей',

        /* ---------- Export ---------- */
        'Close': 'Закрыть',
        'File name': 'Имя файла',
        'Page': 'Страница',
        'HTML page (.html)': 'Страница HTML (.html)',
        'One HTML file with its files inside': 'Один файл HTML с файлами внутри',
        'HTML with its files (ZIP)': 'HTML с файлами (ZIP)',
        'PDF (print or save as PDF)': 'PDF (печать или сохранение в PDF)',
        'Plain text': 'Простой текст',
        'Result': 'Результат',
        'Download everything at once: .html, its files, the HTML with the files inside and the text':
            'Скачать всё сразу: .html, его файлы, HTML с файлами внутри и текст',
        'All formats (ZIP)': 'Все форматы (ZIP)',
        'Print / Save as PDF': 'Печать / Сохранить в PDF',
        '(The page with its files inside is created when you download or copy it.)':
            '(Страница с файлами внутри создаётся при скачивании или копировании.)',

        /* ---------- My documents ---------- */
        'Search by name': 'Поиск по имени',
        'Search your documents': 'Поиск по вашим документам',
        'Open an .html file from your computer as a new document': 'Открыть файл .html с компьютера как новый документ',
        'New document': 'Новый документ',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Щёлкните по документу, чтобы открыть его. Документы хранятся только в этом браузере - ничего не загружается на сервер. Очистка данных сайта в браузере удалит их, поэтому скачайте те, которые хотите сохранить.',
        'Download every document as an .html file (with its files) in one ZIP':
            'Скачать все документы как файлы .html (с их файлами) одним ZIP',
        'Download all (ZIP)': 'Скачать все (ZIP)',
        'Duplicate': 'Дублировать',
        'Download as .html': 'Скачать как .html',
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
        'The document is now in the HTML Editor tab you already had open. Switch to that tab, or open it here.':
            'Документ теперь во вкладке редактора HTML, которая у вас уже была открыта. Перейдите в ту вкладку или откройте его здесь.',
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
        'https://example.com/api/html': 'https://example.com/api/html',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(необязательно, отправляется как «Authorization: Bearer …»; хранится, пока открыта эта вкладка)',
        'Send automatically a few seconds after each change (otherwise only when you click':
            'Отправлять автоматически через несколько секунд после каждого изменения (иначе только когда вы нажимаете',
        'or press Ctrl+S)': 'или Ctrl+S)',
        'Only for “': 'Только для «',
        '” (other documents use the general address)': '» (другие документы используют общий адрес)',
        'What your server receives': 'Что получает ваш сервер',
        'A POST request with JSON (your server must allow CORS from https://html.giit.ch):':
            'POST-запрос с JSON (ваш сервер должен разрешать CORS с https://html.giit.ch):',
        'Embed the editor in your website': 'Встроить редактор в ваш сайт',
        'Send now': 'Отправить сейчас',
        'Save setting': 'Сохранить настройку',

        /* ---------- Help ---------- */
        'How it works': 'Как это работает',
        'Keyboard shortcuts': 'Сочетания клавиш',
        'Bold / italic / underline the selected text': 'Жирный / курсив / подчёркивание выделенного текста',
        'Show the cursor\'s place in the preview': 'Показать место курсора в предпросмотре',
        'Indent / outdent': 'Увеличить / уменьшить отступ',
        'Undo / redo': 'Отменить / повторить',
        'Save (download .html, or to your server) / export': 'Сохранить (скачать .html или на ваш сервер) / экспорт',
        'Print / save as PDF': 'Печать / сохранить в PDF',

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
        'The code changed meanwhile - the edit was not used': 'Код тем временем изменился - правка не применена',
        'The code changed meanwhile - the picture was not moved': 'Код тем временем изменился - изображение не перемещено',
        'The file is removed from this document. Places that use it show nothing. "Undo" does not bring it back.':
            'Файл удалён из этого документа. Там, где он используется, ничего не отображается. «Отменить» его не вернёт.',
        'A document can keep pictures, stylesheets, scripts, fonts, PDFs, audio and video':
            'Документ может хранить изображения, таблицы стилей, скрипты, шрифты, PDF, аудио и видео',
        'The file is larger than 12 MB': 'Файл больше 12 МБ',
        'The file could not be read': 'Не удалось прочитать файл',
        'The code is now a complete page': 'Код теперь представляет собой полную страницу',
        'The code is tidy already': 'Код уже в порядке',
        'Code tidied up': 'Код приведён в порядок',
        'This document is empty already': 'Этот документ уже пуст',
        'Everything between <body> and </body> is removed; the head (title, styles, meta tags) stays. "Undo" brings it back as long as the page is open.':
            'Всё между <body> и </body> удалено; head (заголовок, стили, метатеги) остаётся. «Отменить» вернёт это, пока страница открыта.',
        'Everything is removed. "Undo" brings it back as long as the page is open.':
            'Всё удалено. «Отменить» вернёт это, пока страница открыта.',
        'Start over': 'Начать заново',
        'The file is larger than 8 MB': 'Файл больше 8 МБ',
        'HTML pasted from the clipboard - "Undo" brings the old code back':
            'HTML вставлен из буфера обмена - «Отменить» вернёт старый код',
        'This browser does not allow printing here': 'Этот браузер не позволяет печатать здесь',
        'Downloaded': 'Скачано',
        'ZIP downloaded: .html, its files, the page as one file and the text':
            'ZIP скачан: .html, его файлы, страница одним файлом и текст',
        'Copied to the clipboard': 'Скопировано в буфер обмена',
        'This browser does not allow copying this': 'Этот браузер не позволяет это скопировать',
        'Code copied': 'Код скопирован',
        '.html with its files downloaded (ZIP)': '.html с файлами скачан (ZIP)',
        '.html downloaded': '.html скачан',
        'Add': 'Добавить',
        'The document and its files are removed from this browser for good. Download it first if you want to keep a copy.':
            'Документ и его файлы будут навсегда удалены из этого браузера. Если хотите сохранить копию, сначала скачайте его.',

        /* ---------- Problems the editor finds (html.js) ---------- */
        'The comment <!-- is never closed - add -->': 'Комментарий <!-- не закрыт - добавьте -->',
        '<img> without alt - describe the picture (alt="…"), or alt="" if it only decorates':
            '<img> без alt - опишите изображение (alt="…") или alt="", если оно только украшает',
        'No <!DOCTYPE html> at the top - browsers show the page in an older mode (quirks mode)':
            'Нет <!DOCTYPE html> в начале - браузеры показывают страницу в старом режиме (quirks mode)',
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
        '<b>Insert</b> &gt; <b>New page</b> sets a page break for printing and PDF; the preview shows it as a dashed line. Headings stay with their text and tables and pictures are not cut. In Export, <b>Apply page breaks</b> turns them off for a PDF.':
            '<b>Вставка</b> &gt; <b>Новая страница</b> ставит разрыв страницы для печати и PDF; в предпросмотре он виден как пунктирная линия. Заголовки остаются с текстом, таблицы и изображения не разрезаются. В <b>Экспорте</b> параметр <b>Применять разрывы страниц</b> отключает их для PDF.',
        /* Export */
        'The print dialog opens with the page as it is in the preview (without scripts). Choose <b>Save as PDF</b> (or "Microsoft Print to PDF") as the printer. In Chrome and Edge, untick "Headers and footers" and tick "Background graphics" if the page has colors. The text in the PDF can be selected.':
            'Откроется диалог печати со страницей в том виде, как в предпросмотре (без скриптов). В качестве принтера выберите <b>Сохранить как PDF</b> (или «Microsoft Print to PDF»). В Chrome и Edge снимите флажок «Верхние и нижние колонтитулы» и поставьте «Фон», если на странице есть цвета. Текст в PDF можно выделять.',

        /* Document tab without a head */
        'This code has no <code>&lt;html&gt;</code> with a <code>&lt;head&gt;</code>, so it is shown as a part of a page. Title, language and description belong in the head.':
            'В этом коде нет <code>&lt;html&gt;</code> с <code>&lt;head&gt;</code>, поэтому он показан как часть страницы. Заголовок, язык и описание должны быть в head.',

        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Нажмите <b>Копировать промпт</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'ИИ отвечает ссылкой: щёлкните по ней или вставьте весь ответ ниже. <b>Отменить</b> вернёт всё назад.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'ИИ отвечает ссылкой: <b>вставьте весь его ответ ниже</b> (щелчок по ссылке открывает отдельный редактор). <b>Отменить</b> вернёт всё назад.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'Редактор может отправлять каждую сохранённую версию на ваш собственный сервер (<b>вебхук</b>), чтобы ваша работа хранилась там, где вы хотите. Ничего не отправляется, пока вы не введёте здесь адрес.',
        'Also possible: <code>?src=&lt;URL of an .html file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>htmleditor:ai</code>, <code>htmleditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Также можно: <code>?src=&lt;URL of an .html file&gt;</code> открывает файл, <code>&amp;webhook=&lt;URL&gt;</code> сохраняет туда этот документ. Редактор может открываться и в отдельном окне (<code>?embed=window</code>), а ваша страница может передать ему собственный промпт для ИИ и ключ сеанса, чтобы ИИ отправлял результат на ваш сервер (<code>htmleditor:ai</code>, <code>htmleditor:key-request</code>) - см. «Редактор на вашем сайте» под редактором. Подробности - в <a href="/llms.txt">llms.txt</a>.',
        'Also possible: <code>?src=&lt;URL of an .html file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>htmleditor:ai</code>, <code>htmleditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Также можно: <code>?src=&lt;URL of an .html file&gt;</code> открывает файл, <code>&amp;webhook=&lt;URL&gt;</code> сохраняет туда этот документ. Редактор может открываться и в отдельном окне (<code>?embed=window</code>), а ваша страница может передать ему собственный промпт для ИИ и ключ сеанса, чтобы ИИ отправлял результат на ваш сервер (<code>htmleditor:ai</code>, <code>htmleditor:key-request</code>) - см. «Редактор на вашем сайте» под редактором. Подробности - в <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> HTML on the left - or start with <b>New</b> and one of the templates. The preview shows the page as you type.':
            '<b>Пишите</b> HTML слева - или начните с <b>Новый</b> и одного из шаблонов. Предпросмотр показывает страницу прямо во время набора.',
        '<b>Click text in the preview</b> to edit it right there. Enter starts a new paragraph; Shift+Enter inserts a line break. Ctrl+Enter (Cmd+Enter on macOS) or a click elsewhere applies the edit; Escape cancels. Each edit is one step for Undo. A click on a picture or any other element jumps to its place in the code. The element at the code cursor gets a frame in the preview.':
            '<b>Щёлкните по тексту в предпросмотре</b>, чтобы править его прямо там. Enter начинает новый абзац; Shift+Enter вставляет перенос строки. Ctrl+Enter (Cmd+Enter в macOS) или щелчок в другом месте применяет правку; Escape отменяет её. Каждую правку можно отменить одним действием. Щелчок по изображению или любому другому элементу переносит к его месту в коде. Элемент у курсора кода обводится рамкой в предпросмотре.',
        '<b>Document</b> on the right sets title, language and description of the page; <b>Insert</b> has ready-made pieces (headings, lists, tables, media, form fields, meta tags); <b>Files</b> holds the pictures, stylesheets and fonts of the page; <b>Outline</b> lists the headings.':
            '<b>Документ</b> справа задаёт заголовок, язык и описание страницы; во <b>Вставке</b> есть готовые элементы (заголовки, списки, таблицы, медиа, поля форм, метатеги); в <b>Файлах</b> хранятся изображения, таблицы стилей и шрифты страницы; <b>Оглавление</b> перечисляет заголовки.',
        'Problems in the code (an unclosed <code>&lt;div&gt;</code>, a picture without <code>alt</code>, a missing file) are listed above the code - click one to go there.':
            'Проблемы в коде (незакрытый <code>&lt;div&gt;</code>, изображение без <code>alt</code>, отсутствующий файл) перечислены над кодом - щёлкните по проблеме, чтобы перейти к ней.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser.':
            '<b>Мои документы</b> (кнопка с папкой вверху слева) показывают все документы, хранящиеся в этом браузере.',
        '<b>Export</b> makes an HTML file, one HTML file with the files inside, a ZIP, a PDF (via the print dialog) or plain text. <b>Download .html</b> saves the code.':
            '<b>Экспорт</b> создаёт файл HTML, один файл HTML с файлами внутри, ZIP, PDF (через диалог печати) или простой текст. <b>Скачать .html</b> сохраняет код.',
        'The preview shows HTML and CSS as the browser does, but scripts and <code>on…</code> attributes never run and links do not navigate - so any page is safe to open.':
            'Предпросмотр показывает HTML и CSS так же, как браузер, но скрипты и атрибуты <code>on…</code> никогда не выполняются, а ссылки никуда не ведут - так что любую страницу открывать безопасно.',
        'Comment lines in or out (<code>&lt;!-- --&gt;</code>)':
            'Закомментировать строки или убрать комментарий (<code>&lt;!-- --&gt;</code>)',
        'Typing <code>&gt;</code> at the end of a start tag adds its end tag, and <kbd>Enter</kbd> between the two indents the new line. Typing <code>&lt;/</code> closes the element that is open.':
            'Если ввести <code>&gt;</code> в конце открывающего тега, добавится закрывающий тег, а <kbd>Enter</kbd> между ними делает отступ новой строки. Ввод <code>&lt;/</code> закрывает открытый элемент.',
    },
    patterns: [
        /* ---------- Status lines ---------- */
        ['^(\\d+) lines · ([\\d.]+ K?B)$', (m, l, s) => `${l} ${getPlural(l, 'строка', 'строки', 'строк')} · ${formatSize(s)}`],
        ['^\\.html and (\\d+) (?:file|files)$', (m, k) => `.html и ${k} ${getPlural(k, 'файл', 'файла', 'файлов')}`],
        ['^([\\d,]+) bytes$', (m, b) => formatSize(m)],
        ['^\\d{1,3}(?:,\\d{3})+$', m => formatThousands(m)],

        /* Problems above the code */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'ошибка', 'ошибки', 'ошибок')}`],
        ['^· (\\d+) (?:note|notes)$', (m, k) => `· ${k} ${getPlural(k, 'замечание', 'замечания', 'замечаний')}`],
        ['^(\\d+) (?:note|notes)$', (m, k) => `${k} ${getPlural(k, 'замечание', 'замечания', 'замечаний')}`],
        ['^Line (\\d+)$', 'Строка $1'],
        ['^The preview failed: (.*)$', 'Предпросмотр не удался: $1'],
        ['^The tag <(\\S+) is never closed with >$', 'Тег <$1 не закрыт символом >'],
        ['^<(\\S+)> is obsolete - use CSS or a current element instead$', '<$1> устарел - используйте вместо него CSS или современный элемент'],
        ['^Unknown element <(\\S+)>$', 'Неизвестный элемент <$1>'],
        ['^The attribute (\\S+) is given twice in <(\\S+)> - the browser uses the first one$', 'Атрибут $1 указан в <$2> дважды - браузер использует первый'],
        ['^The id "(.*)" is used twice$', 'id «$1» используется дважды'],
        ['^<(\\S+)\\/> - in HTML only void elements \\(like <br>\\) close themselves; add <\\/(\\S+)>$', '<$1/> - в HTML сами закрываются только пустые элементы (как <br>); добавьте </$2>'],
        ['^<(\\S+)> is never closed - add <\\/(\\S+)>$', '<$1> не закрыт - добавьте </$2>'],
        ['^<\\/(\\S+)> - <(\\S+)> has no end tag$', '</$1> - у <$2> нет закрывающего тега'],
        ['^<\\/(\\S+)> without an opening <(\\S+)>$', '</$1> без открывающего <$2>'],
        ['^<(\\S+)> is not closed before <\\/(\\S+)> - add <\\/(\\S+)> first$', '<$1> не закрыт перед </$2> - сначала добавьте </$3>'],
        ['^The file "(.+)" is missing - add it in the Files tab \\(or drop it into the editor\\)$', 'Файл «$1» отсутствует - добавьте его во вкладке «Файлы» (или перетащите в редактор)'],

        /* ---------- Insert tab ---------- */
        ['^Insert (&[#\\w]+;)$', 'Вставить $1'],

        /* ---------- Files tab ---------- */
        ['^(\\d+) (?:file|files) · (.+)$', (m, k, s) => `${k} ${getPlural(k, 'файл', 'файла', 'файлов')} · ${formatSize(s)}`],
        ['^Files belong to “(.*)” and stay in your browser\\. Drop or paste pictures, stylesheets or fonts anywhere in the editor, or add them here; the code uses them by their name, e\\.g\\.$', 'Файлы принадлежат «$1» и остаются в вашем браузере. Перетащите или вставьте изображения, таблицы стилей или шрифты в любое место редактора или добавьте их здесь; код использует их по имени, например'],
        ['^Choose the file for (.+)$', 'Выбрать файл для $1'],
        ['^Insert (.+) at the cursor$', 'Вставить $1 у курсора'],
        ['^used (\\d+)×$', 'используется $1×'],
        ['^(.* · )?not used yet$', (m, a) => `${a || ''}пока не используется`],

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
        ['^"(.+)" now has the new content$', '«$1» теперь с новым содержимым'],
        ['^File "(.+)" added to "(.+)"$', 'Файл «$1» добавлен в «$2»'],
        ['^"(.+)" is linked already$', '«$1» уже подключён'],
        ['^"(.+)" is linked$', '«$1» подключён'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '«$1» теперь пуст - «Отменить» вернёт содержимое'],
        ['^"(.+)" opened$', '«$1» открыт'],
        ['^New document "(.+)" - your other documents are under "My documents"$', 'Новый документ «$1» - другие ваши документы в разделе «Мои документы»'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$', 'Новый документ «$1» от ИИ - другие ваши документы не изменились'],
        ['^Opened "(.+)" - it is now in "My documents"$', '«$1» открыт - теперь он в разделе «Мои документы»'],
        ['^Opened "(.+)" with (\\d+) (?:file|files)$', (m, f, k) => `«${f}» открыт с ${k} ${getPlural(k, 'файлом', 'файлами', 'файлами')}`],
        ['^"(.+)" could not be opened: (.*)$', (m, f, why) => `«${f}» не удалось открыть: ${ZIP[why] || why}`],
        ['^Document received - the editor found (\\d+) (?:problem|problems), see above the code$', (m, k) => `Документ получен - редактор нашёл ${k} ${getPlural(k, 'проблему', 'проблемы', 'проблем')}, см. над кодом`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '«$1» изменён ИИ - «Отменить» вернёт всё назад'],
        ['^"(.+)" duplicated$', '«$1» дублирован'],
        ['^Delete "(.+)"\\?$', 'Удалить «$1»?'],
        ['^"(.+)" deleted$', '«$1» удалён'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Открыть $1'],
    ],
};
