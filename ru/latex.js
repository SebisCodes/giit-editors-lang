/* Russian texts of the LaTeX editor: the bar, the work area (code, preview,
   document settings, insert, pictures, outline), its dialogs and messages,
   and the problems the preview finds in the code. What all editors share is
   in common.js; how the dictionaries are used is described in
   i18n.js. Names of documents, pictures, labels and commands stay as they
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
const ZIP = { 'it is not a ZIP file': 'это не файл ZIP', 'there is no .tex file in it': 'в нём нет файла .tex' };

export default {
    text: {
        // Editing in place: Enter and Shift+Enter
        "Editing on the page - Enter: new paragraph, Shift+Enter: new line, Ctrl+Enter or a click elsewhere keeps it, Escape cancels": "Правка на странице - Enter: новый абзац, Shift+Enter: новая строка, Ctrl+Enter или щелчок в другом месте сохраняет, Escape отменяет",
        "A new paragraph inside bold, italic or another command is made in the code - Shift+Enter makes a new line": "Новый абзац внутри жирного текста, курсива или другой команды создаётся в коде - Shift+Enter вставляет перенос строки",
        "A new line in a heading or table cell is made in the code": "Новая строка в заголовке или ячейке таблицы создаётся в коде",
        /* ---------- Top bar ---------- */
        'LaTeX Editor - home': 'Редактор LaTeX - на главную',
        'LaTeX Editor': 'Редактор LaTeX',
        'File': 'Файл',
        'My documents (Ctrl+O)': 'Мои документы (Ctrl+O)',
        'My documents': 'Мои документы',
        'New document, or start this one over': 'Новый документ или начать этот заново',
        'New': 'Новый',
        'New blank document': 'Новый пустой документ',
        'An empty article - your other documents stay as they are':
            'Пустая статья - другие ваши документы останутся без изменений',
        'Article': 'Статья',
        'Title, abstract and three sections': 'Заголовок, аннотация и три раздела',
        'Letter': 'Письмо',
        'Addresses, date, subject and signature': 'Адреса, дата, тема и подпись',
        'Exercise sheet': 'Лист заданий',
        'Solutions with math and code': 'Решения с формулами и кодом',
        'Social media post': 'Пост для соцсетей',
        'A square picture with colors and big type': 'Цветное квадратное изображение с крупным шрифтом',
        'The welcome example': 'Приветственный пример',
        'Shows what the editor can do': 'Показывает, что умеет редактор',
        'Start this document over': 'Начать этот документ заново',
        'Keeps the preamble, empties the text - "Undo" brings it back':
            'Сохраняет преамбулу, очищает текст - «Отменить» вернёт его',
        'Open a .tex file (or a picture) from your computer (you can also drag it into the window)':
            'Открыть файл .tex (или изображение) с компьютера (его можно и перетащить в окно)',
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
        'Save the document as a .tex file (Ctrl+S)': 'Сохранить документ как файл .tex (Ctrl+S)',
        'Download .tex': 'Скачать .tex',
        'PDF, pictures of the pages, HTML and more (Ctrl+E)': 'PDF, изображения страниц, HTML и другое (Ctrl+E)',
        'Export…': 'Экспорт…',

        /* ---------- Views and work area ---------- */
        'View': 'Вид',
        'Edit': 'Правка',
        'Side panel': 'Боковая панель',
        'Preview': 'Предпросмотр',
        'Document': 'Документ',
        'LaTeX code': 'Код LaTeX',
        'Copy the LaTeX code to the clipboard': 'Скопировать код LaTeX в буфер обмена',
        'Copy code': 'Копировать код',
        'Copy': 'Копировать',
        'Indent the content of every environment neatly': 'Аккуратно выровнять отступы в каждом окружении',
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
        'Fixed-width text': 'Моноширинный текст',
        'Section heading': 'Заголовок раздела',
        'Section': 'Раздел',
        'Bulleted list': 'Маркированный список',
        'Numbered list': 'Нумерованный список',
        'Table': 'Таблица',
        'Picture': 'Изображение',
        'Math in the text': 'Формула в тексте',
        'Math': 'Формулы',
        'Previous page (Page Up)': 'Предыдущая страница (Page Up)',
        'Previous page': 'Предыдущая страница',
        'Next page (Page Down)': 'Следующая страница (Page Down)',
        'Next page': 'Следующая страница',
        'Preview of the pages: click text to jump to its place in the code':
            'Предпросмотр страниц: щёлкните по тексту, чтобы перейти к его месту в коде',
        'Zoom out (Ctrl + -)': 'Уменьшить (Ctrl + -)',
        'Zoom out': 'Уменьшить',
        'Show at actual size': 'Показать в натуральную величину',
        'Zoom in (Ctrl + +)': 'Увеличить (Ctrl + +)',
        'Zoom in': 'Увеличить',
        'Fit the page width into the window': 'Вписать ширину страницы в окно',
        'Fit width': 'По ширине',
        'Show the whole page': 'Показать страницу целиком',
        'Whole page': 'Вся страница',
        'Updating…': 'Обновление…',
        'Paper, fonts, margins and title of the document': 'Бумага, шрифты, поля и заголовок документа',
        'Ready-made pieces: structure, text, math, symbols': 'Готовые элементы: структура, текст, формулы, символы',
        'Insert': 'Вставка',
        'The pictures of this document': 'Изображения этого документа',
        'Pictures': 'Изображения',
        'The sections of the document': 'Разделы документа',
        'Outline': 'Оглавление',
        'The sections of the document. Click one to go there in the code and in the preview.':
            'Разделы документа. Щёлкните по разделу, чтобы перейти к нему в коде и в предпросмотре.',
        'No sections yet - add one with \\section{…}.': 'Разделов пока нет - добавьте раздел с помощью \\section{…}.',
        'Open it here': 'Открыть здесь',
        'Drop the .tex file or picture here': 'Перетащите сюда файл .tex или изображение',

        /* Problems above the code */
        'Hide': 'Скрыть',
        'Show': 'Показать',

        /* ---------- Insert tab ---------- */
        'Structure': 'Структура',
        'Subsection': 'Подраздел',
        'Subsubsection': 'Подподраздел',
        'Paragraph heading': 'Заголовок абзаца',
        '• Bulleted list': '• Маркеры',
        '1. Numbered list': '1. Нумерация',
        'Description list': 'Список описаний',
        'Figure': 'Рисунок',
        'Two columns': 'Две колонки',
        'Quote': 'Цитата',
        'Centered': 'По центру',
        'Program code': 'Код программы',
        'Verbatim': 'Дословно',
        'Abstract': 'Аннотация',
        'Contents': 'Оглавление',
        'Title': 'Заголовок',
        'New page': 'Новая страница',
        'Vertical space': 'Вертик. отступ',
        'Bibliography': 'Литература',
        'Footnote': 'Сноска',
        'Reference': 'Ссылка',
        'Colored text': 'Цветной текст',
        'Colored box': 'Цветная рамка',
        'Citation': 'Цитирование',
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
        'lim Limit': 'lim Предел',
        'Cases': 'Варианты (cases)',
        'Theorem': 'Теорема',
        'Proof': 'Доказательство',
        'Greek letters': 'Греческие буквы',
        'Symbols': 'Символы',
        'Pictures have their own tab:': 'У изображений своя вкладка:',

        /* ---------- Pictures tab ---------- */
        'Add pictures…': 'Добавить изображения…',
        'No pictures yet': 'Изображений пока нет',
        'Missing in this document': 'Отсутствуют в этом документе',
        'Add file…': 'Добавить файл…',
        'Show where it is used': 'Показать, где используется',
        '\\includegraphics at the cursor': '\\includegraphics у курсора',
        'A figure with caption and label at the cursor': 'Рисунок с подписью и меткой у курсора',
        'As figure': 'Как рисунок',
        'Rename - the code is changed along': 'Переименовать - код изменится вместе с именем',
        'Rename': 'Переименовать',
        'Choose another file, keep the name': 'Выбрать другой файл, сохранив имя',
        'Replace': 'Заменить',
        'Download the picture': 'Скачать изображение',
        'Download': 'Скачать',
        'Remove the picture from this document': 'Удалить изображение из этого документа',
        'Remove': 'Удалить',
        'New name': 'Новое имя',
        'uses them.': 'использует их.',

        /* ---------- Document tab ---------- */
        'Kind': 'Тип',
        'Report (chapters)': 'Отчёт (главы)',
        'Book': 'Книга',
        'Letter class': 'Класс письма',
        'Font size': 'Размер шрифта',
        'Paper': 'Бумага',
        'Square 120 × 120 mm (1:1)': 'Квадрат 120 × 120 мм (1:1)',
        'Portrait 4:5 (120 × 150 mm)': 'Портрет 4:5 (120 × 150 мм)',
        'Slide 16:9 (160 × 90 mm)': 'Слайд 16:9 (160 × 90 мм)',
        'Other size': 'Другой размер',
        'Margins': 'Поля',
        'As the class sets it': 'Как задаёт класс',
        'Narrow (2 cm)': 'Узкие (2 см)',
        'Very narrow (1.5 cm)': 'Очень узкие (1,5 см)',
        'Wide (3.5 cm)': 'Широкие (3,5 см)',
        'None': 'Нет',
        'Other': 'Другое',
        'Orientation': 'Ориентация',
        'Portrait': 'Книжная',
        'Landscape': 'Альбомная',
        'Font': 'Шрифт',
        'Latin Modern (the LaTeX font)': 'Latin Modern (шрифт LaTeX)',
        'Line spacing': 'Межстрочный интервал',
        'Single': 'Одинарный',
        '1½ lines': 'Полуторный',
        'Double': 'Двойной',
        'Language': 'Язык',
        'English (no babel)': 'Английский (без babel)',
        'German (babel ngerman)': 'Немецкий (babel ngerman)',
        'Other (babel)': 'Другой (babel)',
        'Space between paragraphs instead of indenting': 'Отступ между абзацами вместо красной строки',
        'Page numbers': 'Номера страниц',
        'Author': 'Автор',
        '(several: separate with \\and)': '(несколько: разделяйте через \\and)',
        'Date': 'Дата',
        '(\\today = the current date)': '(\\today = текущая дата)',
        'Show the title (\\maketitle)': 'Показать заголовок (\\maketitle)',
        'Make it a complete document': 'Сделать полным документом',
        'pages · about': 'стр. · около',
        'page · about': 'стр. · около',

        /* ---------- Export ---------- */
        'Close': 'Закрыть',
        'File name': 'Имя файла',
        'PDF (print or save as PDF)': 'PDF (печать или сохранение в PDF)',
        'HTML page (one file)': 'Страница HTML (один файл)',
        'Plain text': 'Простой текст',
        'Pictures of the pages': 'Изображения страниц',
        'LaTeX source (.tex)': 'Исходный код LaTeX (.tex)',
        'LaTeX with pictures (ZIP)': 'LaTeX с изображениями (ZIP)',
        'Pages': 'Страницы',
        'The page shown now': 'Показанная сейчас страница',
        'All pages (one picture each, as ZIP)': 'Все страницы (по изображению на каждую, в ZIP)',
        'Sharpness': 'Чёткость',
        '96 dpi (screen)': '96 dpi (экран)',
        '300 dpi (print)': '300 dpi (печать)',
        'Result': 'Результат',
        'Download everything at once: .tex, pictures, HTML, text and every page as PNG':
            'Скачать всё сразу: .tex, изображения, HTML, текст и каждую страницу как PNG',
        'All formats (ZIP)': 'Все форматы (ZIP)',
        'Print / Save as PDF': 'Печать / Сохранить в PDF',
        '(The HTML page - with fonts and pictures inside - is created when you download or copy it.)':
            '(Страница HTML - со шрифтами и изображениями внутри - создаётся при скачивании или копировании.)',

        /* ---------- My documents ---------- */
        'Search by name': 'Поиск по имени',
        'Search your documents': 'Поиск по вашим документам',
        'Open a .tex file from your computer as a new document': 'Открыть файл .tex с компьютера как новый документ',
        'New document': 'Новый документ',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Щёлкните по документу, чтобы открыть его. Документы хранятся только в этом браузере - ничего не загружается на сервер. Очистка данных сайта в браузере удалит их, поэтому скачайте те, которые хотите сохранить.',
        'Download every document as a .tex file (with its pictures) in one ZIP':
            'Скачать все документы как файлы .tex (с изображениями) одним ZIP',
        'Download all (ZIP)': 'Скачать все (ZIP)',
        'Duplicate': 'Дублировать',
        'Download as .tex': 'Скачать как .tex',
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
        'The document is now in the LaTeX Editor tab you already had open. Switch to that tab, or open it here.':
            'Документ теперь во вкладке редактора LaTeX, которая у вас уже была открыта. Перейдите в ту вкладку или откройте его здесь.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)':
            'Копирование здесь запрещено - текст выделен ниже: нажмите Ctrl+C (⌘C)',
        'Paste it into your AI and say what it should write.': 'Вставьте его в свой ИИ и скажите, что нужно написать.',
        'The preview is the editor\'s own typesetting and understands the commands most documents use. The preview does not display TikZ drawings or fontspec fonts. Your source remains unchanged; compile it with an engine supported by its packages. fontspec requires XeLaTeX or LuaLaTeX.':
            'Предпросмотр - это собственная вёрстка редактора, она понимает команды, которые используются в большинстве документов. Предпросмотр не отображает рисунки TikZ и шрифты fontspec. Исходный код остаётся без изменений; компилируйте его движком, совместимым с используемыми пакетами. Для fontspec нужен XeLaTeX или LuaLaTeX.',
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
        'A POST request with JSON (your server must allow CORS from https://latex.giit.ch):':
            'POST-запрос с JSON (ваш сервер должен разрешать CORS с https://latex.giit.ch):',
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
        'Save (download .tex, or to your server) / export': 'Сохранить (скачать .tex или на ваш сервер) / экспорт',
        'Print / save as PDF': 'Печать / сохранить в PDF',
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
        'The code changed - wait for the preview, then try again': 'Код изменился - дождитесь обновления предпросмотра и попробуйте снова',
        'The picture is removed from this document. Places that use it show an empty frame. "Undo" does not bring it back.':
            'Изображение удалено из этого документа. Вместо него отображается пустая рамка. «Отменить» его не вернёт.',
        'Pictures can be PNG, JPG, GIF, WebP, SVG or PDF': 'Изображения могут быть PNG, JPG, GIF, WebP, SVG или PDF',
        'The picture is larger than 12 MB': 'Изображение больше 12 МБ',
        'The picture could not be read': 'Не удалось прочитать изображение',
        'Change paperwidth and paperheight in the \\usepackage[…]{geometry} line':
            'Измените paperwidth и paperheight в строке \\usepackage[…]{geometry}',
        'Title added': 'Заголовок добавлен',
        'The text is now a complete document': 'Текст теперь полный документ',
        'The code is tidy already': 'Код уже в порядке',
        'Code tidied up': 'Код приведён в порядок',
        'This document is empty already': 'Этот документ уже пуст',
        'The text between \\begin{document} and \\end{document} is removed; the preamble (paper, packages, title) stays. "Undo" brings it back as long as the page is open.':
            'Текст между \\begin{document} и \\end{document} удалён; преамбула (бумага, пакеты, заголовок) остаётся. «Отменить» вернёт его, пока страница открыта.',
        'Everything is removed. "Undo" brings it back as long as the page is open.':
            'Всё удалено. «Отменить» вернёт это, пока страница открыта.',
        'Start over': 'Начать заново',
        'The file is larger than 8 MB': 'Файл больше 8 МБ',
        'LaTeX pasted from the clipboard - "Undo" brings the old text back':
            'LaTeX вставлен из буфера обмена - «Отменить» вернёт старый текст',
        'Downloaded': 'Скачано',
        'Copied to the clipboard': 'Скопировано в буфер обмена',
        'This browser does not allow copying this': 'Этот браузер не позволяет это скопировать',
        'Code copied': 'Код скопирован',
        '.tex with its pictures downloaded (ZIP)': '.tex с изображениями скачан (ZIP)',
        '.tex downloaded': '.tex скачан',
        'Add': 'Добавить',
        'The document and its pictures are removed from this browser for good. Download it first if you want to keep a copy.':
            'Документ и его изображения будут навсегда удалены из этого браузера. Если хотите сохранить копию, сначала скачайте его.',
        'This page could not be turned into a picture': 'Эту страницу не удалось превратить в изображение',
        'The browser could not create this picture': 'Браузер не смог создать это изображение',

        /* ---------- Problems the preview finds (latex.js) ---------- */
        'Extra } - there is no { that it closes': 'Лишняя } - нет {, которую она закрывает',
        'Misplaced & - it only separates the columns of a table (tabular) or an align':
            '& не на месте - он только разделяет столбцы таблицы (tabular) или align',
        'A lone # - write \\# for the character #': 'Одиночный # - пишите \\# для символа #',
        '$$ is never closed - add the closing $$': '$$ не закрыт - добавьте закрывающий $$',
        '$ is never closed - every $ that starts math needs a $ that ends it':
            '$ не закрыт - каждому $, открывающему формулу, нужен закрывающий $',
        '\\( is never closed with \\)': '\\( не закрыт с помощью \\)',
        '\\[ is never closed with \\]': '\\[ не закрыт с помощью \\]',
        '\\maketitle without \\title{…} in the preamble': '\\maketitle без \\title{…} в преамбуле',
        '\\item outside a list - put it in \\begin{itemize} … \\end{itemize}':
            '\\item вне списка - поместите его в \\begin{itemize} … \\end{itemize}',
        'BibTeX files cannot be read here - write the entries in \\begin{thebibliography}{9} … \\end{thebibliography}':
            'Файлы BibTeX здесь не читаются - поместите записи в \\begin{thebibliography}{9} … \\end{thebibliography}',
        'biblatex cannot run here - write the entries in \\begin{thebibliography}{9} … \\end{thebibliography}':
            'biblatex здесь не работает - поместите записи в \\begin{thebibliography}{9} … \\end{thebibliography}',
        '\\verb needs a closing character on the same line, e.g. \\verb|text|':
            '\\verb нужен закрывающий символ в той же строке, например \\verb|text|',
        '\\def is only understood in the form \\def\\name{…}': '\\def понимается только в форме \\def\\name{…}',
        '\\usepackage only works in the preamble (before \\begin{document})':
            '\\usepackage работает только в преамбуле (до \\begin{document})',
        '\\documentclass belongs at the very top, before \\begin{document}':
            '\\documentclass должен стоять в самом начале, до \\begin{document}',
        'Beamer slides are shown as normal pages in the preview':
            'Слайды Beamer показываются в предпросмотре как обычные страницы',
        'Text after \\end{document} is ignored': 'Текст после \\end{document} игнорируется',
        '\\begin{document} is never closed - add \\end{document} at the end':
            '\\begin{document} не закрыт - добавьте \\end{document} в конце',
        'There is no \\begin{document} - add \\begin{document} … \\end{document}':
            'Нет \\begin{document} - добавьте \\begin{document} … \\end{document}',
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
        /* Export */
        'The print dialog opens with exactly the pages of the preview. Choose <b>Save as PDF</b> (or "Microsoft Print to PDF") as the printer. In Chrome and Edge, untick "Headers and footers" if the browser offers it. The text in the PDF stays sharp and can be selected.':
            'Откроется диалог печати ровно с теми страницами, что в предпросмотре. В качестве принтера выберите <b>Сохранить как PDF</b> (или «Microsoft Print to PDF»). В Chrome и Edge снимите флажок «Верхние и нижние колонтитулы», если браузер его предлагает. Текст в PDF остаётся чётким, и его можно выделять.',

        /* Document tab without a preamble */
        'This text has no preamble (no <code>\\documentclass</code> and <code>\\begin{document}</code>), so it is shown as a plain A4 article.':
            'У этого текста нет преамбулы (нет <code>\\documentclass</code> и <code>\\begin{document}</code>), поэтому он показан как простая статья A4.',

        /* AI Assistant */
        'Click <b>Copy prompt</b>.': 'Нажмите <b>Копировать промпт</b>.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'ИИ отвечает ссылкой: щёлкните по ней или вставьте весь ответ ниже. <b>Отменить</b> вернёт всё назад.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'ИИ отвечает ссылкой: <b>вставьте весь его ответ ниже</b> (щелчок по ссылке открывает отдельный редактор). <b>Отменить</b> вернёт всё назад.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'Редактор может отправлять каждую сохранённую версию на ваш собственный сервер (<b>вебхук</b>), чтобы ваша работа хранилась там, где вы хотите. Ничего не отправляется, пока вы не введёте здесь адрес.',
        'Also possible: <code>?src=&lt;URL of a .tex file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>latexeditor:ai</code>, <code>latexeditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Также можно: <code>?src=&lt;URL of a .tex file&gt;</code> открывает файл, <code>&amp;webhook=&lt;URL&gt;</code> сохраняет туда этот документ. Редактор может открываться и в отдельном окне (<code>?embed=window</code>), а ваша страница может передать ему собственный промпт для ИИ и ключ сеанса, чтобы ИИ отправлял результат на ваш сервер (<code>latexeditor:ai</code>, <code>latexeditor:key-request</code>) - см. «Редактор на вашем сайте» под редактором. Подробности - в <a href="/llms.txt">llms.txt</a>.',
        'Also possible: <code>?src=&lt;URL of a .tex file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>latexeditor:ai</code>, <code>latexeditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Также можно: <code>?src=&lt;URL of a .tex file&gt;</code> открывает файл, <code>&amp;webhook=&lt;URL&gt;</code> сохраняет туда этот документ. Редактор может открываться и в отдельном окне (<code>?embed=window</code>), а ваша страница может передать ему собственный промпт для ИИ и ключ сеанса, чтобы ИИ отправлял результат на ваш сервер (<code>latexeditor:ai</code>, <code>latexeditor:key-request</code>) - см. «Редактор на вашем сайте» под редактором. Подробности - в <a href="/llms.txt">llms.txt</a>.',

        /* Help */
        '<b>Write</b> LaTeX on the left - or start with <b>New</b> and one of the templates. The preview on the right shows the typeset pages as you type.':
            '<b>Пишите</b> LaTeX слева - или начните с <b>Новый</b> и одного из шаблонов. Предпросмотр справа показывает свёрстанные страницы прямо во время набора.',
        '<b>Click text in the preview</b> to edit it right there: the cursor is where you clicked, and the code\'s cursor goes to the same place. <b>Enter</b> starts a new paragraph; <b>Shift+Enter</b> inserts a line break. <b>Ctrl+Enter</b> (<b>Cmd+Enter</b> on macOS) or a click elsewhere applies the edit; <b>Escape</b> cancels. A click on math, a picture or text made by a command jumps to its place in the code instead. The place where the code cursor is gets a frame in the preview.':
            '<b>Щёлкните по тексту в предпросмотре</b>, чтобы править его прямо там: курсор появится там, где вы щёлкнули, а курсор кода перейдёт в то же место. <b>Enter</b> начинает новый абзац; <b>Shift+Enter</b> вставляет разрыв строки. <b>Ctrl+Enter</b> (<b>Cmd+Enter</b> в macOS) или щелчок в другом месте применяет изменение; <b>Escape</b> отменяет его. Щелчок по формуле, изображению или тексту, созданному командой, вместо этого переходит к его месту в коде. Место, где стоит курсор кода, обводится рамкой в предпросмотре.',
        '<b>Document</b> on the right sets paper, font, margins and title; <b>Insert</b> has ready-made pieces (lists, tables, math, symbols); <b>Pictures</b> holds the pictures of the document; <b>Outline</b> lists the sections.':
            '<b>Документ</b> справа задаёт бумагу, шрифт, поля и заголовок; во <b>Вставке</b> есть готовые элементы (списки, таблицы, формулы, символы); в <b>Изображениях</b> хранятся изображения документа; <b>Оглавление</b> перечисляет разделы.',
        'Problems in the code (a missing <code>}</code>, an unknown command) are listed above the code - click one to go there.':
            'Проблемы в коде (пропущенная <code>}</code>, неизвестная команда) перечислены над кодом - щёлкните по проблеме, чтобы перейти к ней.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser.':
            '<b>Мои документы</b> (кнопка с папкой вверху слева) показывают все документы, хранящиеся в этом браузере.',
        '<b>Export</b> makes a PDF (via the print dialog), pictures of the pages, an HTML page or plain text. <b>Download .tex</b> saves the code.':
            '<b>Экспорт</b> создаёт PDF (через диалог печати), изображения страниц, страницу HTML или простой текст. <b>Скачать .tex</b> сохраняет код.',
        'Math: <code>$…$</code> around the selection': 'Формула: <code>$…$</code> вокруг выделения',
        'Comment lines in or out (<code>%</code>)': 'Закомментировать строки или убрать комментарий (<code>%</code>)',
        'Typing <code>\\begin{name}</code> and pressing <kbd>Enter</kbd> adds the matching <code>\\end{name}</code>. Brackets <code>{ [ (</code> and <code>$</code> close by themselves around a selection.':
            'Если ввести <code>\\begin{name}</code> и нажать <kbd>Enter</kbd>, добавится соответствующий <code>\\end{name}</code>. Скобки <code>{ [ (</code> и <code>$</code> сами закрываются вокруг выделения.',
    },
    patterns: [
        /* ---------- Status lines ---------- */
        ['^(\\d+) lines · ([\\d.]+ K?B)(?: · (\\d+) (?:page|pages))?$', (m, l, kb, p) => `${l} ${getPlural(l, 'строка', 'строки', 'строк')} · ${formatSize(kb)}${p ? ` · ${p} ${getPlural(p, 'страница', 'страницы', 'страниц')}` : ''}`],
        ['^(\\d+) (?:page|pages)$', (m, k) => `${k} ${getPlural(k, 'страница', 'страницы', 'страниц')}`],
        ['^(\\d+) × (\\d+) pixels per page · (\\d+) (?:page|pages)$', (m, w, h, k) => `${w} × ${h} пикселей на страницу · ${k} ${getPlural(k, 'страница', 'страницы', 'страниц')}`],
        ['^\\.tex and (\\d+) (?:picture|pictures)$', (m, k) => `.tex и ${k} ${getPlural(k, 'изображение', 'изображения', 'изображений')}`],
        ['^([\\d,]+) bytes$', (m, b) => formatSize(m)],
        ['^words · (\\d+) × (\\d+) mm( · German)?$', (m, w, h, g) => `слов · ${w} × ${h} мм${g ? ' · немецкий' : ''}`],
        ['^\\d{1,3}(?:,\\d{3})+$', m => formatThousands(m)],

        /* Problems above the code */
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} ${getPlural(k, 'ошибка', 'ошибки', 'ошибок')}`],
        ['^· (\\d+) (?:note|notes)$', (m, k) => `· ${k} ${getPlural(k, 'замечание', 'замечания', 'замечаний')}`],
        ['^(\\d+) (?:note|notes)$', (m, k) => `${k} ${getPlural(k, 'замечание', 'замечания', 'замечаний')}`],
        ['^Line (\\d+)$', 'Строка $1'],
        ['^The preview failed: (.*)$', 'Не удалось создать предпросмотр: $1'],
        ['^Unknown color "(.+)" - define it with \\\\definecolor\\{(.+)\\}\\{HTML\\}\\{RRGGBB\\}$', 'Неизвестный цвет «$1» - задайте его через \\definecolor{$2}{HTML}{RRGGBB}'],
        ['^Image "(.+)" not found - drag the picture into the editor \\(or add it in the Pictures tab\\)$', 'Изображение «$1» не найдено - перетащите изображение в редактор (или добавьте его во вкладке «Изображения»)'],
        ['^(.) only works in math - write (\\$x.2\\$), or (\\\\\\S+) for the character$', '$1 работает только в формулах - пишите $2 или $3 для символа'],
        ['^(\\\\\\S+) needs an argument in \\{ \\}$', '$1 нужен аргумент в { }'],
        ['^The \\{ after (\\\\\\S+) is never closed - a \\} is missing$', '{ после $1 не закрыта - не хватает }'],
        ['^Math: (.*)$', 'Формула: $1'],
        ['^The label "(.+)" is used twice$', 'Метка «$1» используется дважды'],
        ['^Reference to "(.+)" which has no \\\\label\\{(.+)\\}$', 'Ссылка на «$1», для которой нет \\label{$2}'],
        ['^Unknown command (\\\\\\S+) - the preview ignores it$', 'Неизвестная команда $1 - предпросмотр её пропускает'],
        ['^Unknown command (\\\\\\S+)$', 'Неизвестная команда $1'],
        ['^(\\\\[)\\]]) without the opening (\\\\[(\\[])$', '$1 без открывающей $2'],
        ['^(\\\\\\S+) calls itself without end - the preview stops expanding it$', '$1 вызывает саму себя бесконечно - предпросмотр перестаёт её раскрывать'],
        ['^The environment (\\S+) begins itself without end - the preview stops expanding it$', 'Окружение $1 бесконечно начинает само себя - предпросмотр прекращает его раскрывать'],
        ['^(\\\\begin\\{.+\\}) is never closed - add (\\\\end\\{.+\\})$', '$1 не закрыт - добавьте $2'],
        ['^Unknown environment (.+) - its content is shown as normal text$', 'Неизвестное окружение $1 - его содержимое показано как обычный текст'],
        ['^The (\\S+) has text but no \\\\item$', 'В $1 есть текст, но нет \\item'],
        ['^This table row has (\\d+) columns, but the table was set up for (\\d+) - add a column to (\\{.*\\}) or remove an &$', 'Число столбцов в этой строке таблицы: $1, а таблица настроена на $2 - добавьте столбец в $3 или удалите &'],
        ['^Unknown column type "(.+)" in the table setup$', 'Неизвестный тип столбца «$1» в настройке таблицы'],
        ['^(\\\\end\\{.+\\}) without a matching (\\\\begin\\{.+\\})$', '$1 без соответствующего $2'],
        ['^\\\\definecolor: "(.+)" is not a valid (\\S+) color$', '\\definecolor: «$1» - недопустимый цвет $2'],
        ['^(\\\\cite\\{.*\\}): there is no (\\\\bibitem\\{.*\\})$', '$1: нет $2'],
        ['^(\\\\\\S+\\{.*\\}): other files cannot be read here - paste their text into this document$', '$1: другие файлы здесь не читаются - вставьте их текст в этот документ'],
        ['^(.+) drawings cannot be shown in the preview - they appear when the file is compiled with LaTeX$', 'Рисунки $1 нельзя показать в предпросмотре - они появятся, когда файл будет скомпилирован LaTeX'],
        ['^(\\\\\\S+) needs a name, e\\.g\\. (.+)$', '$1 нужно имя, например $2'],
        ['^(\\\\\\S+) is defined twice - use \\\\renewcommand to change it$', '$1 определена дважды - используйте \\renewcommand, чтобы изменить её'],
        ['^Text before \\\\begin\\{document\\}: "(.*)" - text belongs between \\\\begin\\{document\\} and \\\\end\\{document\\}$', 'Текст до \\begin{document}: «$1» - текст должен стоять между \\begin{document} и \\end{document}'],
        ['^The document class "(.+)" is shown like "article" in the preview$', 'Класс документа «$1» показан в предпросмотре как «article»'],
        ['^(\\S+) needs XeLaTeX or LuaLaTeX - the preview uses its own fonts$', '$1 требует XeLaTeX или LuaLaTeX - предпросмотр использует свои шрифты'],
        ['^(\\S+) drawings are not shown in the preview$', 'Рисунки $1 не показываются в предпросмотре'],
        ['^The package "(.+)" is not known to the preview - its commands may be missing$', 'Пакет «$1» неизвестен предпросмотру - его команд может не хватать'],
        ['^(\\\\\\S+) in the preamble is not understood by the preview$', '$1 в преамбуле предпросмотр не понимает'],
        /* Template placeholders (?template=) */
        ['^The section (\\S+) stays open - add (\\S+)$', 'Раздел $1 остаётся открытым - добавьте $2'],
        ['^(\\S+) is a stray end tag - remove it or add (\\S+) before it$', '$1 - лишний закрывающий тег - удалите его или добавьте перед ним $2'],
        ['^(\\S+) closes (\\S+) before the inner section (\\S+) is closed - add (\\S+) first$', '$1 закрывает $2 раньше, чем закрыт внутренний раздел $3 - сначала добавьте $4'],
        ['^Unknown placeholder (\\S+) - use (.+)$', 'Неизвестный заполнитель $1 - используйте $2'],

        /* ---------- Pictures tab ---------- */
        ['^(\\d+) (?:picture|pictures) · (.+)$', (m, k, s) => `${k} ${getPlural(k, 'изображение', 'изображения', 'изображений')} · ${formatSize(s)}`],
        ['^Pictures belong to “(.*)” and stay in your browser\\. Drop or paste them anywhere in the editor, or add them here;$', 'Изображения принадлежат «$1» и остаются в вашем браузере. Перетащите или вставьте их в любое место редактора или добавьте здесь;'],
        ['^Choose the file for (.+)$', 'Выбрать файл для $1'],
        ['^Insert \\\\includegraphics\\{(.+)\\} at the cursor$', 'Вставить \\includegraphics{$1} у курсора'],
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
        ['^"(.+)" is not a \\.tex file$', '«$1» - не файл .tex'],
        ['^Opened "(.+)" - it is now in "My documents"$', '«$1» открыт - теперь он в разделе «Мои документы»'],
        ['^Opened "(.+)" with (\\d+) (?:picture|pictures)$', (m, f, k) => `«${f}» открыт с ${k} ${getPlural(k, 'изображением', 'изображениями', 'изображениями')}`],
        ['^"(.+)" could not be opened: (.*)$', (m, f, why) => `«${f}» не удалось открыть: ${ZIP[why] || why}`],
        ['^ZIP downloaded: \\.tex, pictures, HTML, text and (\\d+) (?:page|pages) as PNG$', (m, k) => `ZIP скачан: .tex, изображения, HTML, текст и ${k} ${getPlural(k, 'страница', 'страницы', 'страниц')} в PNG`],
        ['^Document received - the preview found (\\d+) (?:problem|problems), see above the code$', (m, k) => `Документ получен - предпросмотр нашёл ${k} ${getPlural(k, 'проблему', 'проблемы', 'проблем')}, см. над кодом`],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '«$1» изменён ИИ - «Отменить» вернёт всё назад'],
        ['^"(.+)" duplicated$', 'Создана копия «$1»'],
        ['^Delete "(.+)"\\?$', 'Удалить «$1»?'],
        ['^"(.+)" deleted$', '«$1» удалён'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', 'Открыть $1'],
    ],
};
