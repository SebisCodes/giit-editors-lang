/* Russian texts that all giit editors share: the links to giit.ch in the bar,
   saving on a server and inside a page (sync.js), the AI status (aistatus.js),
   the confirmation box (dialogs.js). The editor's own texts are in ui.js; how
   they are used is described in i18n.js. The same file serves every giit
   editor. */

/**
 * Writes a time of day in the 24-hour form of the language.
 * @param {string} h - the hour.
 * @param {string} m - the minutes.
 * @param {string} ap - "AM", "PM" or empty.
 * @returns {string} the text in the language.
 */
const formatHour = (h, m, ap) => `${String((+h % 12) + (ap === 'PM' ? 12 : 0) + (ap ? 0 : +h - (+h % 12))).padStart(2, '0')}:${m}`;
/**
 * Translates the text the pattern found (what in the English pattern).
 * @param {string} w - the English text the pattern found.
 * @returns {string} the text in the language.
 */
const translateThing = w => (w === 'drawing' ? 'рисунок' : 'документ');

export default {
    text: {
        "All giit editors": "Все редакторы giit",
        "by giit.ch": "от giit.ch",
        "Open in another editor": "Открыть в другом редакторе",
        "Not everything can be converted": "Преобразовать можно не всё",
        "Open anyway": "Всё равно открыть",
        "Pictures and other files of the document stay here: add them again in the other editor": "Изображения и другие файлы документа остаются здесь: добавьте их заново в другом редакторе",
        "The document is too long for a link - export it and open the file in the other editor": "Документ слишком длинный для ссылки - экспортируйте его и откройте файл в другом редакторе",
        "Scripts and styles": "Скрипты и стили",
        "Form fields": "Поля форм",
        "Footnotes, labels and references": "Сноски, метки и ссылки",
        "LaTeX commands and environments without an equivalent": "Команды и окружения LaTeX без аналога",
        "Document class, packages and page settings": "Класс документа, пакеты и настройки страницы",
        "The table of contents": "Оглавление",
        "Typst functions without an equivalent": "Функции Typst без аналога",
        "Formulas are copied as written: check them": "Формулы копируются как есть: проверьте их",
        "Formulas become plain code": "Формулы становятся простым кодом",
        "Links with an unsafe address": "Ссылки с небезопасным адресом",
        "Comments": "Комментарии",
        "Empty values (null): TOML has no null": "Пустые значения (null): в TOML нет null",
        "The data is not a table: it goes under the key \"value\"": "Данные - не таблица: они попадают под ключ «value»",
        "Keys that are not valid XML names are changed": "Ключи, не являющиеся допустимыми именами XML, изменяются",
        "Only the first list goes into the table": "В таблицу попадает только первый список",
        "Nested values go into one cell as JSON": "Вложенные значения попадают в одну ячейку как JSON",
        "The picture could not be stored in this browser (storage full or blocked) - it is kept only until the page is closed: download the document to keep it": "Не удалось сохранить изображение в этом браузере (хранилище заполнено или заблокировано) - оно останется только до закрытия страницы: скачайте документ, чтобы сохранить его",
        "Column names that occur twice (numbered)": "Повторяющиеся имена столбцов (пронумерованы)",
        "Fields beyond the header (named Column N)": "Поля за пределами заголовка (названы Column N)",
        "The AI's result could not be opened - your browser's storage may be full": "Не удалось открыть результат ИИ - возможно, хранилище браузера заполнено",
        "The AI's result could not be opened": "Не удалось открыть результат ИИ",
        "Types of values: SHLS holds every value as text": "Типы значений: SHLS хранит каждое значение как текст",
        "This data has no list of records, so it does not make a table": "В этих данных нет списка записей, поэтому таблица не получится",
        "The XML cannot be read - fix the problem above the code first": "Не удалось прочитать XML - сначала исправьте проблему над кодом",
        "It could not be converted": "Преобразовать не удалось",
        "Content from a third party, not checked by giit.ch": "Содержимое от третьих лиц, giit.ch его не проверял",
        // Wrapping long lines in the code view (wrap.js)
        "Wrap": "Перенос",
        "Wrap long lines in the view - each line of the code stays one line (Alt+Z)": "Переносить длинные строки на экране - каждая строка кода остаётся одной строкой (Alt+Z)",
        'Cancel': 'Отмена',
        'Allow': 'Разрешить',
        'No': 'Нет',
        'Yes': 'Да',
        'Save': 'Сохранить',
        'Saved': 'Сохранено',
        'Sending…': 'Отправка…',
        'Not connected': 'Не подключено',
        'Save on this server?': 'Сохранять на этом сервере?',
        'The address for the AI must be https:// on the site of the page around the editor - it is not used':
            'Адрес для ИИ должен начинаться с https:// и находиться на сайте страницы, в которую встроен редактор, - он не используется',
        'The key from the page is not valid (16 to 512 letters, digits or ._~+/=-)':
            'Ключ от страницы недействителен (от 16 до 512 букв, цифр или ._~+/=-)',
        'This document stays in your browser - only the document from the page is saved there':
            'Этот документ остаётся в вашем браузере - туда сохраняется только документ страницы',
        'This drawing stays in your browser - only the drawing from the page is saved there':
            'Этот рисунок остаётся в вашем браузере - туда сохраняется только рисунок страницы',
        'The page that opened the editor is closed - download the document so nothing is lost':
            'Страница, открывшая редактор, закрыта - скачайте документ, чтобы ничего не потерять',
        'The page that opened the editor is closed - download the drawing so nothing is lost':
            'Страница, открывшая редактор, закрыта - скачайте рисунок, чтобы ничего не потерять',
        'The webhook from the page is not an https:// address - it is not used':
            'Вебхук от страницы - не адрес https:// - он не используется',
        'Please enter an https:// address (or http://localhost for testing)':
            'Введите адрес https:// (или http://localhost для тестов)',
        'Saved versions now go to your server': 'Сохранённые версии теперь отправляются на ваш сервер',
        'Webhook switched off': 'Вебхук выключен',
        'The webhook in the link is not an https:// address - it is not used':
            'Вебхук в ссылке - не адрес https:// - он не используется',
        'The webhook in the link only works together with ?src= - it is not used':
            'Вебхук в ссылке работает только вместе с ?src= - он не используется',
        'A token in a link is not used - enter it under "Save to server"':
            'Токен в ссылке не используется - введите его в разделе «На сервер»',
        'Save - hand the document to the page around the editor (Ctrl+S)':
            'Сохранить - передать документ странице, в которую встроен редактор (Ctrl+S)',
        'Save - hand the drawing to the page around the editor (Ctrl+S)':
            'Сохранить - передать рисунок странице, в которую встроен редактор (Ctrl+S)',
        'AI through a website: not connected': 'ИИ через сайт: не подключён',
        'Browser agent (WebMCP): not offered by this browser': 'Браузерный агент (WebMCP): этот браузер его не поддерживает',
        'Browser agent (WebMCP): available, not used yet': 'Браузерный агент (WebMCP): доступен, ещё не использовался',
        'AI links: cannot reach the editor inside this website - paste the AI\'s answer here':
            'ИИ-ссылки: не могут открыть документ в редакторе внутри этого сайта - вставьте ответ ИИ сюда',
        'AI links: open the editor in a new tab': 'ИИ-ссылки: открывают редактор в новой вкладке',
        'AI links: go to another editor tab (the one used last)': 'ИИ-ссылки: попадают в другую вкладку редактора (последнюю использованную)',
        'AI links: arrive in this tab': 'ИИ-ссылки: приходят в эту вкладку',
        'AI in this session: nothing received yet - copy the prompt for your AI': 'ИИ в этом сеансе: пока ничего не получено - скопируйте промпт для своего ИИ',
    },
    patterns: [
        ['^Saved on (.+) at (\\d{1,2}):(\\d{2})\\s?(AM|PM)?$', (x, host, h, m, ap) => `Сохранено на ${host} в ${formatHour(h, m, ap)}`],
        ['^Saved on (.+)$', 'Сохранено на $1'],
        ['^Not saved on (.+?): no connection, or the server does not allow it \\(CORS\\)$', 'Не сохранено на $1: нет соединения, или сервер этого не разрешает (CORS)'],
        ['^Not saved on (.+?): The server answered (\\d+)(.*)$', 'Не сохранено на $1: сервер вернул код $2$3'],
        ['^Not saved on (.+?): the (document|drawing) with its pictures is (\\d+) MB - at most 40 MB go in one request$', 'Не сохранено на $1: вместе с изображениями это $3 МБ - в одном запросе помещается не более 40 МБ'],
        ['^"(.+)" was changed in another tab - your version here is kept as "(.+)"$', '«$1» изменён в другой вкладке - ваша версия здесь сохранена как «$2»'],
        ['^Not saved on (.+?): the server did not answer within (\\d+) seconds$', 'Не сохранено на $1: сервер не ответил за $2 секунд'],
        ['^Not saved on (.+?): (.*)$', 'Не сохранено на $1: $2'],
        ['^Saves to (.+) \\(set by the page\\)$', 'Сохраняет на $1 (задано страницей)'],
        ['^Save - send the (document|drawing) to (.+) \\(Ctrl\\+S\\)$', (m, w, h) => `Сохранить - отправить ${translateThing(w)} на ${h} (Ctrl+S)`],
        ['^The AI\'s new (document|drawing) is open as "(.+)" - it stays in your browser and is not saved to (.+)$',
            (m, w, n, l) => `Новый ${translateThing(w)} от ИИ открыт как «${n}» - он остаётся в вашем браузере и не сохраняется на ${l}`],
        ['^The AI\'s result from (.+) is open - Undo takes it back$', 'Результат ИИ от $1 открыт - «Отменить» вернёт всё назад'],
        ['^The file could not be opened: no connection, or the server does not allow it \\(CORS\\)$', 'Не удалось открыть файл: нет соединения, или сервер этого не разрешает (CORS)'],
        ['^The file could not be opened: only https:// addresses can be opened$', 'Не удалось открыть файл: открывать можно только адреса https://'],
        ['^The file could not be opened: the server answered (\\d+)$', 'Не удалось открыть файл: сервер вернул код $1'],
        ['^The file could not be opened: the page loaded another document meanwhile$', 'Не удалось открыть файл: тем временем страница загрузила другой документ'],
        ['^The file could not be opened: (.*)$', 'Не удалось открыть файл: $1'],
        ['^This link asks the editor to send the saved versions of "(.+)" to (.+) while this page is open\\. Only allow it if you trust that site\\.$',
            'Эта ссылка просит редактор отправлять сохранённые версии «$1» на $2, пока эта страница открыта. Разрешайте, только если доверяете этому сайту.'],
        ['^AI in this session: a document from an AI link, just now$', 'ИИ в этом сеансе: документ по ИИ-ссылке, только что'],
        ['^AI in this session: a document from an AI link, (\\d+) min ago$', 'ИИ в этом сеансе: документ по ИИ-ссылке, $1 мин. назад'],
        ['^AI in this session: a result through the page, just now$', 'ИИ в этом сеансе: результат через страницу, только что'],
        ['^AI in this session: a result through the page, (\\d+) min ago$', 'ИИ в этом сеансе: результат через страницу, $1 мин. назад'],
        ['^AI in this session: a browser agent \\(WebMCP\\), just now$', 'ИИ в этом сеансе: браузерный агент (WebMCP), только что'],
        ['^AI in this session: a browser agent \\(WebMCP\\), (\\d+) min ago$', 'ИИ в этом сеансе: браузерный агент (WebMCP), $1 мин. назад'],
        ['^AI through (.+): connected, waiting for the key$', 'ИИ через $1: подключён, ждёт ключ'],
        ['^AI through (.+): connected$', 'ИИ через $1: подключён'],
        ['^Browser agent \\(WebMCP\\): active, last used just now$', 'Браузерный агент (WebMCP): активен, использовался только что'],
        ['^Browser agent \\(WebMCP\\): active, last used (\\d+) min ago$', 'Браузерный агент (WebMCP): активен, использовался $1 мин. назад'],
        ['^Browser agent \\(WebMCP\\): available, last used just now$', 'Браузерный агент (WebMCP): доступен, использовался только что'],
        ['^Browser agent \\(WebMCP\\): available, last used (\\d+) min ago$', 'Браузерный агент (WebMCP): доступен, использовался $1 мин. назад'],
    ],
};
