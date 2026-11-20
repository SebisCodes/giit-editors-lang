/* Russian texts of the Markdown editor: the bar, the work area (code,
   preview, insert, pictures, outline), its dialogs and messages, and the
   problems the preview finds in the code. What all editors share is in
   common.js; how the dictionaries are used is described in
   i18n.js. Names of documents, pictures and anchors stay as they are: the
   patterns copy them into the Russian text. */

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
const ZIP = { 'it is not a ZIP file': 'это не файл ZIP', 'there is no .md file in it': 'в нём нет файла .md' };

export default {
    text: {
        // Editing in place: Enter and Shift+Enter
        "Editing on the page - Enter: new paragraph, Shift+Enter: new line, Ctrl+Enter or a click elsewhere keeps it, Escape cancels": "Правка на странице - Enter: новый абзац, Shift+Enter: новая строка, Ctrl+Enter или щелчок в другом месте сохраняет, Escape отменяет",
        "A new paragraph inside bold, italic or a link is made in the code - Shift+Enter makes a new line": "Новый абзац внутри жирного текста, курсива или ссылки создаётся в коде - Shift+Enter вставляет перенос строки",
        /* ---------- Top bar ---------- */
        'Markdown Editor - home': 'Редактор Markdown - на главную',
        'Markdown Editor': 'Редактор Markdown',
        'File': 'Файл',
        'My documents (Ctrl+O)': 'Мои документы (Ctrl+O)',
        'My documents': 'Мои документы',
        'New document, or start this one over': 'Новый документ или начать этот заново',
        'New': 'Новый',
        'New blank document': 'Новый пустой документ',
        'An empty page - your other documents stay as they are':
            'Пустая страница - другие ваши документы останутся без изменений',
        'README': 'README',
        'Project name, features, installation and usage': 'Название проекта, возможности, установка и использование',
        'Article': 'Статья',
        'Title, summary, sections and a quote': 'Заголовок, краткое содержание, разделы и цитата',
        'Meeting notes': 'Протокол встречи',
        'Agenda, decisions and a table of tasks': 'Повестка, решения и таблица задач',
        'Checklist': 'Чек-лист',
        'Tasks to tick off, in groups': 'Задачи с отметками о выполнении, по группам',
        'The welcome example': 'Приветственный пример',
        'Shows what the editor can do': 'Показывает, что умеет редактор',
        'Start this document over': 'Начать этот документ заново',
        'Empties the text, keeps the pictures - "Undo" brings it back':
            'Очищает текст, сохраняет изображения - «Отменить» вернёт его',
        'Open a .md file (or a picture) from your computer (you can also drag it into the window)':
            'Открыть файл .md (или изображение) с компьютера (его можно и перетащить в окно)',
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
        'Save the document as a .md file (Ctrl+S)': 'Сохранить документ как файл .md (Ctrl+S)',
        'Download .md': 'Скачать .md',
        'HTML, PDF, plain text and more (Ctrl+E)': 'HTML, PDF, простой текст и другое (Ctrl+E)',
        'Export…': 'Экспорт…',

        /* ---------- Views and work area ---------- */
        'View': 'Вид',
        'Edit': 'Правка',
        'Preview': 'Предпросмотр',
        'Insert': 'Вставка',
        'Markdown code': 'Код Markdown',
        'Copy the Markdown to the clipboard': 'Скопировать Markdown в буфер обмена',
        'Copy code': 'Копировать код',
        'Copy': 'Копировать',
        'Drag to change the width of the code area': 'Перетащите, чтобы изменить ширину области кода',
        'Drag to change the width': 'Перетащите, чтобы изменить ширину',
        'Formatting': 'Форматирование',
        'Bold (Ctrl+B)': 'Жирный (Ctrl+B)',
        'Bold': 'Жирный',
        'Italic (Ctrl+I)': 'Курсив (Ctrl+I)',
        'Italic': 'Курсив',
        'Strikethrough': 'Зачёркнутый',
        'Code in the text': 'Код в тексте',
        'Link (Ctrl+K)': 'Ссылка (Ctrl+K)',
        'Heading': 'Заголовок',
        'Bulleted list': 'Маркированный список',
        'Numbered list': 'Нумерованный список',
        'Task list': 'Список задач',
        'Table': 'Таблица',
        'Picture': 'Изображение',
        'Insert picture': 'Вставить изображение',
        'Quote': 'Цитата',
        'Code block': 'Блок кода',
        'Math in the text (Ctrl+M)': 'Формула в тексте (Ctrl+M)',
        'Math': 'Математика',
        'Text size': 'Размер текста',
        'Smaller text in the preview': 'Уменьшить текст в предпросмотре',
        'Smaller text': 'Мельче',
        'Normal text size': 'Обычный размер текста',
        'Larger text in the preview': 'Увеличить текст в предпросмотре',
        'Larger text': 'Крупнее',
        'Preview of the document: click text to edit it, Ctrl+click follows a link':
            'Предпросмотр документа: щёлкните по тексту, чтобы редактировать его, Ctrl+щелчок открывает ссылку',
        'Updating…': 'Обновление…',
        'Insert, pictures and outline': 'Вставка, изображения и оглавление',
        'Ready-made pieces: structure, text, math, symbols': 'Готовые элементы: структура, текст, формулы, символы',
        'The pictures of this document': 'Изображения этого документа',
        'Pictures': 'Изображения',
        'The headings of the document': 'Заголовки документа',
        'Outline': 'Оглавление',
        'The headings of the document. Click one to go there in the code and in the preview.':
            'Заголовки документа. Щёлкните по заголовку, чтобы перейти к нему в коде и в предпросмотре.',
        'No headings yet - start a line with # and a space.': 'Заголовков пока нет - начните строку с # и пробела.',
        'Open it here': 'Открыть здесь',
        'Drop the .md file or picture here': 'Перетащите сюда файл .md или изображение',

        'The document is empty - write Markdown on the left, or choose a template under "New".':
            'Документ пуст - пишите Markdown слева или выберите шаблон в меню «Новый».',

        /* Problems above the code */
        'Hide': 'Скрыть',
        'Show': 'Показать',

        /* ---------- Insert tab ---------- */
        'Structure': 'Структура',
        'Heading 1': 'Заголовок 1',
        'Heading 2': 'Заголовок 2',
        'Heading 3': 'Заголовок 3',
        '# Heading': '# Заголовок',
        '## Heading': '## Заголовок',
        '### Heading': '### Заголовок',
        'Horizontal rule': 'Разделитель',
        'Apply page breaks': 'Применять разрывы страниц',
        'New page': 'Новая страница',
        'Document': 'Документ',
        '• Bulleted list': '• Маркеры',
        '1. Numbered list': '1. Нумерация',
        '☐ Task list': '☐ Список задач',
        'Fold-out section': 'Спойлер',
        'Line break': 'Перенос строки',
        'Text': 'Текст',
        '**bold** (Ctrl+B)': '**жирный** (Ctrl+B)',
        '*italic* (Ctrl+I)': '*курсив* (Ctrl+I)',
        '~~struck through~~': '~~зачёркнутый~~',
        'Link to a heading': 'Якорная ссылка',
        '[text](#heading)': '[текст](#заголовок)',
        '[text](https://…) (Ctrl+K)': '[текст](https://…) (Ctrl+K)',
        '![description](name.png)': '![описание](name.png)',
        'Footnote': 'Сноска',
        '[^1] at the cursor, the note at the end': '[^1] у курсора, сноска в конце',
        'Key': 'Клавиша',
        'A key as on the keyboard: <kbd>Ctrl</kbd>': 'Клавиша как на клавиатуре: <kbd>Ctrl</kbd>',
        '`code` between backticks': '`код` между обратными кавычками',
        '$x$ in the text': '$x$ в тексте',
        'Displayed': 'Выключная',
        '$$ … $$ on its own lines': '$$ … $$ на отдельных строках',
        'Fraction': 'Дробь',
        'Root': 'Корень',
        'x² Power': 'x² Степень',
        'x₁ Index': 'x₁ Индекс',
        '∑ Sum': '∑ Сумма',
        '∫ Integral': '∫ Интеграл',
        'lim Limit': 'lim Предел',
        '2×2 matrix': 'Матрица 2×2',
        'Cases': 'Варианты (cases)',
        'Greek letters': 'Греческие буквы',
        'Symbols': 'Символы',
        'Pictures have their own tab:': 'У изображений своя вкладка:',

        /* ---------- Pictures tab ---------- */
        'Add pictures…': 'Добавить изображения…',
        'No pictures yet': 'Изображений пока нет',
        'Missing in this document': 'Отсутствуют в этом документе',
        'Add file…': 'Добавить файл…',
        'Show where it is used': 'Показать, где используется',
        '![…](name) at the cursor': '![…](name) у курсора',
        'Rename - the code is changed along': 'Переименовать - код изменится вместе с именем',
        'Rename': 'Переименовать',
        'Choose another file, keep the name': 'Выбрать другой файл, сохранив имя',
        'Replace': 'Заменить',
        'Download the picture': 'Скачать изображение',
        'Download': 'Скачать',
        'Remove the picture from this document': 'Удалить изображение из этого документа',
        'Remove': 'Удалить',
        'New name': 'Новое имя',
        'Pictures belong to “': 'Изображения принадлежат «',
        '” and stay in your browser. Drop or paste them anywhere in the editor, or add them here;':
            '» и остаются в вашем браузере. Перетащите или вставьте их в любое место редактора или добавьте здесь;',
        'uses them.': 'использует их.',

        /* ---------- Export ---------- */
        'Close': 'Закрыть',
        'File name': 'Имя файла',
        'HTML page (one file)': 'Страница HTML (один файл)',
        'PDF (print or save as PDF)': 'PDF (печать или сохранение в PDF)',
        'Plain text': 'Простой текст',
        'Markdown (.md)': 'Markdown-файл (.md)',
        'Markdown with pictures (ZIP)': 'Markdown с изображениями (ZIP)',
        'Result': 'Результат',
        'Download everything at once: .md, pictures, HTML and text': 'Скачать всё сразу: .md, изображения, HTML и текст',
        'All formats (ZIP)': 'Все форматы (ZIP)',
        'Print / Save as PDF': 'Печать / Сохранить в PDF',
        '(The HTML page - with its pictures and styles inside - is created when you download or copy it.)':
            '(Страница HTML - с изображениями и стилями внутри - создаётся при скачивании или копировании.)',

        /* ---------- My documents ---------- */
        'Search by name': 'Поиск по имени',
        'Search your documents': 'Поиск по вашим документам',
        'Open a .md file from your computer as a new document': 'Открыть файл .md с компьютера как новый документ',
        'New document': 'Новый документ',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Щёлкните по документу, чтобы открыть его. Документы хранятся только в этом браузере - ничего не загружается на сервер. Очистка данных сайта в браузере удалит их, поэтому скачайте те, которые хотите сохранить.',
        'Download every document as a .md file (with its pictures) in one ZIP':
            'Скачать все документы как файлы .md (с изображениями) одним ZIP',
        'Download all (ZIP)': 'Скачать все (ZIP)',
        'Duplicate': 'Дублировать',
        'Download as .md': 'Скачать как .md',
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
        'The document is now in the Markdown Editor tab you already had open. Switch to that tab, or open it here.':
            'Документ теперь во вкладке редактора Markdown, которая у вас уже была открыта. Перейдите в ту вкладку или откройте его здесь.',
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
        'https://example.com/api/markdown': 'https://example.com/api/markdown',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(необязательно, отправляется как «Authorization: Bearer …»; хранится, пока открыта эта вкладка)',
        'Send automatically a few seconds after each change (otherwise only when you click':
            'Отправлять автоматически через несколько секунд после каждого изменения (иначе только когда вы нажимаете',
        'or press Ctrl+S)': 'или Ctrl+S)',
        'Only for “': 'Только для «',
        '” (other documents use the general address)': '» (другие документы используют общий адрес)',
        'What your server receives': 'Что получает ваш сервер',
        'A POST request with JSON (your server must allow CORS from https://md.giit.ch):':
            'POST-запрос с JSON (ваш сервер должен разрешать CORS с https://md.giit.ch):',
        'Embed the editor in your website': 'Встроить редактор в ваш сайт',
        'Send now': 'Отправить сейчас',
        'Save setting': 'Сохранить настройку',

        /* ---------- Help ---------- */
        'How it works': 'Как это работает',
        'Keyboard shortcuts': 'Сочетания клавиш',
        'Bold / italic around the selected text': 'Жирный / курсив вокруг выделенного текста',
        'Link': 'Ссылка',
        'Show the cursor\'s place in the preview': 'Показать место курсора в предпросмотре',
        'Indent / outdent': 'Увеличить / уменьшить отступ',
        'Undo / redo': 'Отменить / повторить',
        'Save (download .md, or to your server) / export': 'Сохранить (скачать .md или на ваш сервер) / экспорт',
        'Print / save as PDF': 'Печать / сохранить в PDF',
        'Problems (a missing picture, a link to a heading that is not there, a code block that is never closed, a table row with too many cells) are listed above the code - click one to go there.':
            'Проблемы (отсутствующее изображение, ссылка на несуществующий заголовок, незакрытый блок кода, строка таблицы с лишними ячейками) перечислены над кодом - щёлкните по проблеме, чтобы перейти к ней.',

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
        'This box changed in the code - wait for the preview, then try again':
            'Этот блок изменился в коде - дождитесь обновления предпросмотра и попробуйте снова',
        'This picture changed in the code - wait for the preview, then try again': 'Это изображение изменилось в коде - дождитесь обновления предпросмотра и попробуйте снова',
        'The code changed meanwhile - the edit was not used': 'Код тем временем изменился - правка не применена',
        'This anchor is not in the document': 'Этого якоря нет в документе',
        'The picture is removed from this document. Places that use it show its name in a frame. "Undo" does not bring it back.':
            'Изображение удалено из этого документа. Вместо него отображается его имя в рамке. «Отменить» его не вернёт.',
        'Pictures can be PNG, JPG, GIF, WebP, SVG or PDF': 'Изображения могут быть PNG, JPG, GIF, WebP, SVG или PDF',
        'The picture is larger than 12 MB': 'Изображение больше 12 МБ',
        'The picture could not be read': 'Не удалось прочитать изображение',
        'This document is empty already': 'Этот документ уже пуст',
        'Everything is removed; the pictures of the document stay. "Undo" brings the text back as long as the page is open.':
            'Всё удалено; изображения документа остаются. «Отменить» вернёт текст, пока страница открыта.',
        'Start over': 'Начать заново',
        'The file is larger than 8 MB': 'Файл больше 8 МБ',
        'Downloaded': 'Скачано',
        'Copied to the clipboard': 'Скопировано в буфер обмена',
        'This browser does not allow copying this': 'Этот браузер не позволяет это скопировать',
        'Code copied': 'Код скопирован',
        '.md with its pictures downloaded (ZIP)': '.md с изображениями скачан (ZIP)',
        '.md downloaded': '.md скачан',
        'ZIP downloaded: .md, pictures, HTML and text': 'ZIP скачан: .md, изображения, HTML и текст',
        'Add': 'Добавить',
        'The document and its pictures are removed from this browser for good. Download it first if you want to keep a copy.':
            'Документ и его изображения будут навсегда удалены из этого браузера. Если хотите сохранить копию, сначала скачайте его.',

        /* ---------- Problems the preview finds (markdown.js) ---------- */
        '$$ is never closed - add a line with $$ after the formula': '$$ не закрыт - добавьте строку с $$ после формулы',
        /* Words that German keeps from the English, but Russian does not */
        'Code': 'Код',
        'Export': 'Экспорт',
        'Format': 'Формат',
        'Token': 'Токен',
        'Name': 'Имя',
    },
    html: {
        '<b>Export</b> also has <b>Open in another editor</b>: it converts the document and opens it as a new document there. Anything the other format cannot hold is listed first.':
            'В <b>Экспорте</b> есть и <b>Открыть в другом редакторе</b>: документ преобразуется и открывается там как новый. То, что другой формат не может вместить, показывается заранее.',
        '<b>Insert</b> &gt; <b>New page</b> sets a page break for printing and PDF; the preview shows it as a dashed line. Headings stay with their text and tables and pictures are not cut. In Export, <b>Apply page breaks</b> turns them off for a PDF.':
            '<b>Вставка</b> &gt; <b>Новая страница</b> ставит разрыв страницы для печати и PDF; в предпросмотре он виден как пунктирная линия. Заголовки остаются с текстом, таблицы и изображения не разрезаются. В <b>Экспорте</b> параметр <b>Применять разрывы страниц</b> отключает их для PDF.',
        /* Export */
        'The print dialog opens with the document only. Choose <b>Save as PDF</b> (or "Microsoft Print to PDF") as the printer. In Chrome and Edge, untick "Headers and footers" if the browser offers it. The text in the PDF stays sharp and can be selected.':
            'Откроется диалог печати только с документом. В качестве принтера выберите <b>Сохранить как PDF</b> (или «Microsoft Print to PDF»). В Chrome и Edge снимите флажок «Верхние и нижние колонтитулы», если браузер его предлагает. Текст в PDF остаётся чётким, и его можно выделять.',

        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Нажмите <b>Копировать промпт</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'ИИ отвечает ссылкой: щёлкните по ней или вставьте весь ответ ниже. <b>Отменить</b> вернёт всё назад.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'ИИ отвечает ссылкой: <b>вставьте весь его ответ ниже</b> (щелчок по ссылке открывает отдельный редактор). <b>Отменить</b> вернёт всё назад.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'Редактор может отправлять каждую сохранённую версию на ваш собственный сервер (<b>вебхук</b>), чтобы ваша работа хранилась там, где вы хотите. Ничего не отправляется, пока вы не введёте здесь адрес.',
        'Also possible: <code>?src=&lt;URL of a .md file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>mdeditor:ai</code>, <code>mdeditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Также можно: <code>?src=&lt;URL of a .md file&gt;</code> открывает файл, <code>&amp;webhook=&lt;URL&gt;</code> сохраняет туда этот документ. Редактор может открываться и в отдельном окне (<code>?embed=window</code>), а ваша страница может передать ему собственный промпт для ИИ и ключ сеанса, чтобы ИИ отправлял результат на ваш сервер (<code>mdeditor:ai</code>, <code>mdeditor:key-request</code>) - см. «Редактор на вашем сайте» под редактором. Подробности - в <a href="/llms.txt">llms.txt</a>.',
        'Also possible: <code>?src=&lt;URL of a .md file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>mdeditor:ai</code>, <code>mdeditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Также можно: <code>?src=&lt;URL of a .md file&gt;</code> открывает файл, <code>&amp;webhook=&lt;URL&gt;</code> сохраняет туда этот документ. Редактор может открываться и в отдельном окне (<code>?embed=window</code>), а ваша страница может передать ему собственный промпт для ИИ и ключ сеанса, чтобы ИИ отправлял результат на ваш сервер (<code>mdeditor:ai</code>, <code>mdeditor:key-request</code>) - см. «Редактор на вашем сайте» под редактором. Подробности - в <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> Markdown on the left - or start with <b>New</b> and one of the templates. The preview in the middle shows the document as you type.':
            '<b>Пишите</b> Markdown слева - или начните с <b>Новый</b> и одного из шаблонов. Предпросмотр посередине показывает документ прямо во время набора.',
        '<b>Click text in the preview</b> to edit it right there: the cursor is where you clicked, and the code\'s cursor goes to the same place. <b>Enter</b> starts a new paragraph; <b>Shift+Enter</b> inserts a line break. <b>Ctrl+Enter</b> (<b>Cmd+Enter</b> on macOS) or a click elsewhere applies the edit; <b>Escape</b> cancels. Each edit is one step for Undo. Characters such as <code>*</code> or <code>_</code> are escaped so they stay text. A click on math, a picture or code jumps to its place in the code instead. <b>Ctrl</b> + click follows a link. A check box of a task list ticks the task in the code.':
            '<b>Щёлкните по тексту в предпросмотре</b>, чтобы править его прямо там: курсор появится там, где вы щёлкнули, а курсор кода перейдёт в то же место. <b>Enter</b> начинает новый абзац; <b>Shift+Enter</b> вставляет перенос строки. <b>Ctrl+Enter</b> (<b>Cmd+Enter</b> в macOS) или щелчок в другом месте применяет правку; <b>Escape</b> отменяет её. Каждую правку можно отменить одним действием. Символы вроде <code>*</code> или <code>_</code> экранируются, чтобы остаться текстом. Щелчок по формуле, изображению или коду вместо этого переходит к его месту в коде. <b>Ctrl</b> + щелчок открывает ссылку. Флажок в списке задач отмечает задачу в коде.',
        '<b>Insert</b> on the right has ready-made pieces (headings, lists, tables, math, symbols); <b>Pictures</b> holds the pictures of the document; <b>Outline</b> lists the headings.':
            'Во <b>Вставке</b> справа есть готовые элементы (заголовки, списки, таблицы, формулы, символы); в <b>Изображениях</b> хранятся изображения документа; <b>Оглавление</b> перечисляет заголовки.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser.':
            '<b>Мои документы</b> (кнопка с папкой вверху слева) показывают все документы, хранящиеся в этом браузере.',
        '<b>Export</b> makes an HTML page, a PDF (via the print dialog) or plain text. <b>Download .md</b> saves the code (with its pictures as ZIP).':
            '<b>Экспорт</b> создаёт страницу HTML, PDF (через диалог печати) или простой текст. <b>Скачать .md</b> сохраняет код (с изображениями в ZIP).',
        'The preview understands CommonMark with GitHub\'s tables, task lists, strikethrough, autolinks and footnotes, and math in <code>$…$</code> and <code>$$…$$</code>. HTML in the Markdown is shown without scripts, styles, frames and forms.':
            'Предпросмотр понимает CommonMark с таблицами GitHub, списками задач, зачёркиванием, автоссылками и сносками, а также формулы в <code>$…$</code> и <code>$$…$$</code>. HTML внутри Markdown показывается без скриптов, стилей, фреймов и форм.',
        'Math: <code>$…$</code> around the selection': 'Формула: <code>$…$</code> вокруг выделения',
        'Lines in or out of a comment (<code>&lt;!-- --&gt;</code>)':
            'Закомментировать строки или убрать комментарий (<code>&lt;!-- --&gt;</code>)',
        '<kbd>Enter</kbd> in a list starts the next item (<code>-</code>, <code>1.</code>, <code>- [ ]</code>, <code>&gt;</code>); on an empty item it ends the list. <code>* _ ` ~ $ [ (</code> close by themselves around a selection.':
            '<kbd>Enter</kbd> в списке начинает следующий пункт (<code>-</code>, <code>1.</code>, <code>- [ ]</code>, <code>&gt;</code>); на пустом пункте список заканчивается. <code>* _ ` ~ $ [ (</code> сами закрываются вокруг выделения.',
    },
    patterns: [
        /* ---------- Status lines ---------- */
        ['^(\\d+) lines · ([\\d.]+ K?B) · (\\d+) (?:word|words)$', (m, l, s, w) => `${l} ${getPlural(l, 'строка', 'строки', 'строк')} · ${formatSize(s)} · ${w} ${getPlural(w, 'слово', 'слова', 'слов')}`],
        ['^\\.md and (\\d+) (?:picture|pictures)$', (m, k) => `.md и ${k} ${getPlural(k, 'изображение', 'изображения', 'изображений')}`],
        ['^([\\d,]+) bytes$', (m, b) => formatSize(m)],
        ['^\\d{1,3}(?:,\\d{3})+$', m => formatThousands(m)],

        /* Problems above the code */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'ошибка', 'ошибки', 'ошибок')}`],
        ['^· (\\d+) (?:note|notes)$', (m, k) => `· ${k} ${getPlural(k, 'замечание', 'замечания', 'замечаний')}`],
        ['^(\\d+) (?:note|notes)$', (m, k) => `${k} ${getPlural(k, 'замечание', 'замечания', 'замечаний')}`],
        ['^Line (\\d+)$', 'Строка $1'],
        ['^The preview failed: (.*)$', 'Предпросмотр не удался: $1'],
        ['^The preview stopped at an unexpected problem: (.*)$', 'Предпросмотр остановлен из-за неожиданной проблемы: $1'],
        ['^Picture "(.+)" not found - drag the picture into the editor \\(or add it in the Pictures tab\\)$', 'Изображение «$1» не найдено - перетащите изображение в редактор (или добавьте его во вкладке «Изображения»)'],
        ['^The link to "(.+)" has no heading or anchor of that name$', 'Для ссылки на «$1» нет заголовка или якоря с таким именем'],
        ['^This code block \\((.+)\\) is never closed - add a line with (.+) after the code$', 'Этот блок кода ($1) не закрыт - добавьте после кода строку с $2'],
        ['^This table row has (\\d+) (?:cell|cells), the header has (\\d+)$', (m, k, h) => `В этой строке таблицы ${k} ${getPlural(k, 'ячейка', 'ячейки', 'ячеек')}, а в заголовке ${h}`],
        ['^Math: (.*)$', 'Формула: $1'],

        /* ---------- Pictures tab ---------- */
        ['^(\\d+) (?:picture|pictures) · (.+)$', (m, k, s) => `${k} ${getPlural(k, 'изображение', 'изображения', 'изображений')} · ${formatSize(s)}`],
        ['^Choose the file for (.+)$', 'Выбрать файл для $1'],
        ['^Insert !\\[…\\]\\((.+)\\) at the cursor$', 'Вставить ![…]($1) у курсора'],
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
        ['^"(.+)" now shows the new picture$', '«$1» теперь показывает новое изображение'],
        ['^Picture "(.+)" added to "(.+)"$', 'Изображение «$1» добавлено в «$2»'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '«$1» теперь пуст - «Отменить» вернёт содержимое'],
        ['^"(.+)" opened$', '«$1» открыт'],
        ['^New document "(.+)" - your other documents are under "My documents"$', 'Новый документ «$1» - другие ваши документы в разделе «Мои документы»'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$', 'Новый документ «$1» от ИИ - другие ваши документы не изменились'],
        ['^"(.+)" is not a Markdown file$', '«$1» - не файл Markdown'],
        ['^Opened "(.+)" - it is now in "My documents"$', '«$1» открыт - теперь он в разделе «Мои документы»'],
        ['^Opened "(.+)" with (\\d+) (?:picture|pictures)$', (m, f, k) => `«${f}» открыт с ${k} ${getPlural(k, 'изображением', 'изображениями', 'изображениями')}`],
        ['^"(.+)" could not be opened: (.*)$', (m, f, why) => `«${f}» не удалось открыть: ${ZIP[why] || why}`],
        ['^Document received - the preview found (\\d+) (?:problem|problems), see above the code$', (m, k) => `Документ получен - предпросмотр нашёл ${k} ${getPlural(k, 'проблему', 'проблемы', 'проблем')}, см. над кодом`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '«$1» изменён ИИ - «Отменить» вернёт всё назад'],
        ['^"(.+)" duplicated$', '«$1» дублирован'],
        ['^Delete "(.+)"\\?$', 'Удалить «$1»?'],
        ['^"(.+)" deleted$', '«$1» удалён'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Открыть $1'],
    ],
};
