/* Ukrainian texts that all giit editors share: the links to giit.ch in the
   bar, saving on a server and inside a page (sync.js), the AI status
   (aistatus.js), the confirmation box (dialogs.js). The editor's own texts are
   in ui.js; how they are used is described in i18n.js. The same file serves
   every giit editor. */

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
const translateThing = w => (w === 'drawing' ? 'малюнок' : 'документ');

export default {
    text: {
        "All giit editors": "Усі редактори giit",
        "by giit.ch": "від giit.ch",
        "Open in another editor": "Відкрити в іншому редакторі",
        "Not everything can be converted": "Перетворити можна не все",
        "Open anyway": "Усе одно відкрити",
        "Pictures and other files of the document stay here: add them again in the other editor": "Зображення та інші файли документа залишаються тут: додайте їх знову в іншому редакторі",
        "The document is too long for a link - export it and open the file in the other editor": "Документ задовгий для посилання - експортуйте його та відкрийте файл в іншому редакторі",
        "Scripts and styles": "Скрипти та стилі",
        "Form fields": "Поля форм",
        "Footnotes, labels and references": "Виноски, мітки та посилання",
        "LaTeX commands and environments without an equivalent": "Команди та середовища LaTeX без відповідника",
        "Document class, packages and page settings": "Клас документа, пакети та налаштування сторінки",
        "The table of contents": "Зміст",
        "Typst functions without an equivalent": "Функції Typst без відповідника",
        "Formulas are copied as written: check them": "Формули копіюються як є: перевірте їх",
        "Formulas become plain code": "Формули стають простим кодом",
        "Links with an unsafe address": "Посилання з небезпечною адресою",
        "Comments": "Коментарі",
        "Empty values (null): TOML has no null": "Порожні значення (null): у TOML немає null",
        "The data is not a table: it goes under the key \"value\"": "Дані - не таблиця: вони потрапляють під ключ «value»",
        "Keys that are not valid XML names are changed": "Ключі, що не є допустимими іменами XML, змінюються",
        "Only the first list goes into the table": "До таблиці потрапляє лише перший список",
        "Nested values go into one cell as JSON": "Вкладені значення потрапляють в одну клітинку як JSON",
        "The picture could not be stored in this browser (storage full or blocked) - it is kept only until the page is closed: download the document to keep it": "Не вдалося зберегти зображення в цьому браузері (сховище заповнене або заблоковане) - воно залишиться лише до закриття сторінки: завантажте документ, щоб зберегти його",
        "Column names that occur twice (numbered)": "Назви стовпців, що повторюються (пронумеровано)",
        "Fields beyond the header (named Column N)": "Поля поза заголовком (названо Column N)",
        "The AI's result could not be opened - your browser's storage may be full": "Не вдалося відкрити результат ШІ - можливо, сховище браузера заповнене",
        "The AI's result could not be opened": "Не вдалося відкрити результат ШІ",
        "Types of values: SHLS holds every value as text": "Типи значень: SHLS зберігає кожне значення як текст",
        "This data has no list of records, so it does not make a table": "У цих даних немає списку записів, тому таблиці не вийде",
        "The XML cannot be read - fix the problem above the code first": "XML не читається - спершу виправте проблему над кодом",
        "It could not be converted": "Перетворити не вдалося",
        "Content from a third party, not checked by giit.ch": "Матеріал третіх осіб, giit.ch його не перевіряв",
        // Wrapping long lines in the code view (wrap.js)
        "Wrap": "Перенос",
        "Wrap long lines in the view - each line of the code stays one line (Alt+Z)": "Переносити довгі рядки на екрані - кожен рядок коду залишається одним рядком (Alt+Z)",
        'Cancel': 'Скасувати',
        'Allow': 'Дозволити',
        'No': 'Ні',
        'Yes': 'Так',
        'Save': 'Зберегти',
        'Saved': 'Збережено',
        'Sending…': 'Надсилання…',
        'Not connected': 'Не під’єднано',
        'Save on this server?': 'Зберігати на цьому сервері?',
        'The address for the AI must be https:// on the site of the page around the editor - it is not used':
            'Адреса для ШІ має бути https:// на сайті сторінки, у яку вбудовано редактор, - її не використано',
        'The key from the page is not valid (16 to 512 letters, digits or ._~+/=-)':
            'Ключ від сторінки недійсний (від 16 до 512 літер, цифр або ._~+/=-)',
        'This document stays in your browser - only the document from the page is saved there':
            'Цей документ залишається у вашому браузері - туди зберігається лише документ сторінки',
        'This drawing stays in your browser - only the drawing from the page is saved there':
            'Цей малюнок залишається у вашому браузері - туди зберігається лише малюнок сторінки',
        'The page that opened the editor is closed - download the document so nothing is lost':
            'Сторінку, що відкрила редактор, закрито - завантажте документ, щоб нічого не втратити',
        'The page that opened the editor is closed - download the drawing so nothing is lost':
            'Сторінку, що відкрила редактор, закрито - завантажте малюнок, щоб нічого не втратити',
        'The webhook from the page is not an https:// address - it is not used':
            'Вебхук від сторінки - не адреса https:// - його не використано',
        'Please enter an https:// address (or http://localhost for testing)':
            'Введіть адресу https:// (або http://localhost для тестів)',
        'Saved versions now go to your server': 'Збережені версії тепер надсилаються на ваш сервер',
        'Webhook switched off': 'Вебхук вимкнено',
        'The webhook in the link is not an https:// address - it is not used':
            'Вебхук у посиланні - не адреса https:// - його не використано',
        'The webhook in the link only works together with ?src= - it is not used':
            'Вебхук у посиланні працює лише разом із ?src= - його не використано',
        'A token in a link is not used - enter it under "Save to server"':
            'Токен у посиланні не використовується - введіть його в розділі «На сервер»',
        'Save - hand the document to the page around the editor (Ctrl+S)':
            'Зберегти - передати документ сторінці, у яку вбудовано редактор (Ctrl+S)',
        'Save - hand the drawing to the page around the editor (Ctrl+S)':
            'Зберегти - передати малюнок сторінці, у яку вбудовано редактор (Ctrl+S)',
        'AI through a website: not connected': 'ШІ через сайт: не під’єднано',
        'Browser agent (WebMCP): not offered by this browser': 'Браузерний агент (WebMCP): цей браузер його не підтримує',
        'Browser agent (WebMCP): available, not used yet': 'Браузерний агент (WebMCP): доступний, ще не використовувався',
        'AI links: cannot reach the editor inside this website - paste the AI\'s answer here':
            'ШІ-посилання: не можуть передати результат редактору всередині цього сайту - вставте відповідь ШІ сюди',
        'AI links: open the editor in a new tab': 'ШІ-посилання: відкривають редактор у новій вкладці',
        'AI links: go to another editor tab (the one used last)': 'ШІ-посилання: передають результат в іншу вкладку редактора (останню використану)',
        'AI links: arrive in this tab': 'ШІ-посилання: передають результат у цю вкладку',
        'AI in this session: nothing received yet - copy the prompt for your AI': 'ШІ в цьому сеансі: поки нічого не отримано - скопіюйте промпт для свого ШІ',
    },
    patterns: [
        ['^Saved on (.+) at (\\d{1,2}):(\\d{2})\\s?(AM|PM)?$', (x, host, h, m, ap) => `Збережено на ${host} о ${formatHour(h, m, ap)}`],
        ['^Saved on (.+)$', 'Збережено на $1'],
        ['^Not saved on (.+?): no connection, or the server does not allow it \\(CORS\\)$', 'Не збережено на $1: немає з’єднання, або сервер цього не дозволяє (CORS)'],
        ['^Not saved on (.+?): The server answered (\\d+)(.*)$', 'Не збережено на $1: сервер повернув код $2$3'],
        ['^Not saved on (.+?): the (document|drawing) with its pictures is (\\d+) MB - at most 40 MB go in one request$', 'Не збережено на $1: разом із зображеннями це $3 МБ - в один запит вміщується не більше 40 МБ'],
        ['^"(.+)" was changed in another tab - your version here is kept as "(.+)"$', '«$1» змінено в іншій вкладці - вашу версію тут збережено як «$2»'],
        ['^Not saved on (.+?): the server did not answer within (\\d+) seconds$', 'Не збережено на $1: сервер не відповів протягом $2 секунд'],
        ['^Not saved on (.+?): (.*)$', 'Не збережено на $1: $2'],
        ['^Saves to (.+) \\(set by the page\\)$', 'Зберігає на $1 (задано сторінкою)'],
        ['^Save - send the (document|drawing) to (.+) \\(Ctrl\\+S\\)$', (m, w, h) => `Зберегти - надіслати ${translateThing(w)} на ${h} (Ctrl+S)`],
        ['^The AI\'s new (document|drawing) is open as "(.+)" - it stays in your browser and is not saved to (.+)$',
            (m, w, n, l) => `Новий ${translateThing(w)} від ШІ відкрито як «${n}» - він залишається у вашому браузері й не зберігається на ${l}`],
        ['^The AI\'s result from (.+) is open - Undo takes it back$', 'Результат ШІ від $1 відкрито - «Скасувати» поверне все назад'],
        ['^The file could not be opened: no connection, or the server does not allow it \\(CORS\\)$', 'Не вдалося відкрити файл: немає з’єднання, або сервер цього не дозволяє (CORS)'],
        ['^The file could not be opened: only https:// addresses can be opened$', 'Не вдалося відкрити файл: відкривати можна лише адреси https://'],
        ['^The file could not be opened: the server answered (\\d+)$', 'Не вдалося відкрити файл: сервер повернув код $1'],
        ['^The file could not be opened: the page loaded another document meanwhile$', 'Не вдалося відкрити файл: тим часом сторінка завантажила інший документ'],
        ['^The file could not be opened: (.*)$', 'Не вдалося відкрити файл: $1'],
        ['^This link asks the editor to send the saved versions of "(.+)" to (.+) while this page is open\\. Only allow it if you trust that site\\.$',
            'Це посилання просить редактор надсилати збережені версії «$1» на $2, поки ця сторінка відкрита. Дозволяйте, лише якщо довіряєте цьому сайту.'],
        ['^AI in this session: a document from an AI link, just now$', 'ШІ в цьому сеансі: документ за ШІ-посиланням, щойно'],
        ['^AI in this session: a document from an AI link, (\\d+) min ago$', 'ШІ в цьому сеансі: документ за ШІ-посиланням, $1 хв тому'],
        ['^AI in this session: a result through the page, just now$', 'ШІ в цьому сеансі: результат через сторінку, щойно'],
        ['^AI in this session: a result through the page, (\\d+) min ago$', 'ШІ в цьому сеансі: результат через сторінку, $1 хв тому'],
        ['^AI in this session: a browser agent \\(WebMCP\\), just now$', 'ШІ в цьому сеансі: браузерний агент (WebMCP), щойно'],
        ['^AI in this session: a browser agent \\(WebMCP\\), (\\d+) min ago$', 'ШІ в цьому сеансі: браузерний агент (WebMCP), $1 хв тому'],
        ['^AI through (.+): connected, waiting for the key$', 'ШІ через $1: під’єднано, чекає на ключ'],
        ['^AI through (.+): connected$', 'ШІ через $1: під’єднано'],
        ['^AI through (.+): the website gives the answering instructions$', 'ШІ через $1: вебсайт повідомляє ШІ, як відповідати'],
        ['^Browser agent \\(WebMCP\\): active, last used just now$', 'Браузерний агент (WebMCP): активний, використовувався щойно'],
        ['^Browser agent \\(WebMCP\\): active, last used (\\d+) min ago$', 'Браузерний агент (WebMCP): активний, використовувався $1 хв тому'],
        ['^Browser agent \\(WebMCP\\): available, last used just now$', 'Браузерний агент (WebMCP): доступний, використовувався щойно'],
        ['^Browser agent \\(WebMCP\\): available, last used (\\d+) min ago$', 'Браузерний агент (WebMCP): доступний, використовувався $1 хв тому'],

        /* ---------- The page's own answering instructions (AI Assistant) ---------- */
        ['^(.+) gives the AI its instructions for answering\\. What you paste into your AI is handled by its provider\\.$', '$1 повідомляє ШІ, як відповідати. Те, що ви вставляєте у свій ШІ, обробляє його провайдер.'],
        ['^The AI answers as (.+) describes in the prompt\\. If it answers with a link, paste its answer below\\.$', 'ШІ відповідає так, як $1 описує в промпті. Якщо ШІ відповідає посиланням, вставте його відповідь нижче.'],
    ],
};
