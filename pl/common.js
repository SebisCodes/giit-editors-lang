/* Polish texts that all giit editors share: the links to giit.ch in the bar,
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
const translateThing = w => (w === 'drawing' ? 'rysunek' : 'dokument');

export default {
    text: {
        "All giit editors": "Wszystkie edytory giit",
        "by giit.ch": "od giit.ch",
        "Open in another editor": "Otwórz w innym edytorze",
        "Not everything can be converted": "Nie wszystko da się przekonwertować",
        "Open anyway": "Otwórz mimo to",
        "Pictures and other files of the document stay here: add them again in the other editor": "Obrazy i inne pliki dokumentu zostają tutaj: dodaj je ponownie w drugim edytorze",
        "The document is too long for a link - export it and open the file in the other editor": "Dokument jest za długi na link - wyeksportuj go i otwórz plik w drugim edytorze",
        "Scripts and styles": "Skrypty i style",
        "Form fields": "Pola formularzy",
        "Footnotes, labels and references": "Przypisy, etykiety i odwołania",
        "LaTeX commands and environments without an equivalent": "Polecenia i środowiska LaTeX bez odpowiednika",
        "Document class, packages and page settings": "Klasa dokumentu, pakiety i ustawienia strony",
        "The table of contents": "Spis treści",
        "Typst functions without an equivalent": "Funkcje Typst bez odpowiednika",
        "Formulas are copied as written: check them": "Wzory są kopiowane dosłownie: sprawdź je",
        "Formulas become plain code": "Wzory stają się zwykłym kodem",
        "Links with an unsafe address": "Linki z niebezpiecznym adresem",
        "Comments": "Komentarze",
        "Empty values (null): TOML has no null": "Puste wartości (null): TOML nie ma null",
        "The data is not a table: it goes under the key \"value\"": "Dane nie są tabelą: trafiają pod klucz „value”",
        "Keys that are not valid XML names are changed": "Klucze niebędące poprawnymi nazwami XML są zmieniane",
        "Only the first list goes into the table": "Tylko pierwsza lista trafia do tabeli",
        "Nested values go into one cell as JSON": "Wartości zagnieżdżone trafiają do jednej komórki jako JSON",
        "The picture could not be stored in this browser (storage full or blocked) - it is kept only until the page is closed: download the document to keep it": "Nie udało się zapisać obrazu w tej przeglądarce (pamięć pełna lub zablokowana) - zostaje tylko do zamknięcia strony: pobierz dokument, aby go zachować",
        "Column names that occur twice (numbered)": "Nazwy kolumn występujące dwa razy (numerowane)",
        "Fields beyond the header (named Column N)": "Pola poza nagłówkiem (nazwane Column N)",
        "The AI's result could not be opened - your browser's storage may be full": "Nie udało się otworzyć wyniku AI - pamięć przeglądarki może być pełna",
        "The AI's result could not be opened": "Nie udało się otworzyć wyniku AI",
        "Types of values: SHLS holds every value as text": "Typy wartości: SHLS przechowuje każdą wartość jako tekst",
        "This data has no list of records, so it does not make a table": "Te dane nie mają listy rekordów, więc nie tworzą tabeli",
        "The XML cannot be read - fix the problem above the code first": "Nie można odczytać XML - najpierw napraw problem nad kodem",
        "It could not be converted": "Nie udało się przekonwertować",
        "Content from a third party, not checked by giit.ch": "Treść osób trzecich, niesprawdzona przez giit.ch",
        // Wrapping long lines in the code view (wrap.js)
        "Wrap": "Zawijaj",
        "Wrap long lines in the view - each line of the code stays one line (Alt+Z)": "Zawijaj długie wiersze w widoku - każdy wiersz kodu pozostaje jednym wierszem (Alt+Z)",
        'Cancel': 'Anuluj',
        'Allow': 'Zezwól',
        'No': 'Nie',
        'Yes': 'Tak',
        'Save': 'Zapisz',
        'Saved': 'Zapisano',
        'Sending…': 'Wysyłanie…',
        'Not connected': 'Brak połączenia',
        'Save on this server?': 'Zapisywać na tym serwerze?',
        'The address for the AI must be https:// on the site of the page around the editor - it is not used':
            'Adres dla AI musi być adresem https:// w witrynie strony, w której osadzono edytor - nie zostanie użyty',
        'The key from the page is not valid (16 to 512 letters, digits or ._~+/=-)':
            'Klucz przekazany przez stronę jest nieprawidłowy (od 16 do 512 liter, cyfr lub ._~+/=-)',
        'This document stays in your browser - only the document from the page is saved there':
            'Ten dokument zostaje w twojej przeglądarce - tam zapisywany jest tylko dokument ze strony',
        'This drawing stays in your browser - only the drawing from the page is saved there':
            'Ten rysunek zostaje w twojej przeglądarce - tam zapisywany jest tylko rysunek ze strony',
        'The page that opened the editor is closed - download the document so nothing is lost':
            'Strona, która otworzyła edytor, jest zamknięta - pobierz dokument, aby nic nie przepadło',
        'The page that opened the editor is closed - download the drawing so nothing is lost':
            'Strona, która otworzyła edytor, jest zamknięta - pobierz rysunek, aby nic nie przepadło',
        'The webhook from the page is not an https:// address - it is not used':
            'Webhook przekazany przez stronę nie jest adresem https:// - nie zostanie użyty',
        'Please enter an https:// address (or http://localhost for testing)':
            'Wpisz adres https:// (lub http://localhost do testów)',
        'Saved versions now go to your server': 'Zapisane wersje trafiają teraz na twój serwer',
        'Webhook switched off': 'Webhook wyłączony',
        'The webhook in the link is not an https:// address - it is not used':
            'Webhook w linku nie jest adresem https:// - nie zostanie użyty',
        'The webhook in the link only works together with ?src= - it is not used':
            'Webhook w linku działa tylko razem z ?src= - nie zostanie użyty',
        'A token in a link is not used - enter it under "Save to server"':
            'Token w linku nie jest używany - wpisz go w „Zapis na serwerze”',
        'Save - hand the document to the page around the editor (Ctrl+S)':
            'Zapisz - przekaż dokument stronie, w której osadzono edytor (Ctrl+S)',
        'Save - hand the drawing to the page around the editor (Ctrl+S)':
            'Zapisz - przekaż rysunek stronie, w której osadzono edytor (Ctrl+S)',
        'AI through a website: not connected': 'AI przez stronę internetową: brak połączenia',
        'Browser agent (WebMCP): not offered by this browser': 'Agent przeglądarki (WebMCP): ta przeglądarka go nie oferuje',
        'Browser agent (WebMCP): available, not used yet': 'Agent przeglądarki (WebMCP): dostępny, jeszcze nieużywany',
        'AI links: cannot reach the editor inside this website - paste the AI\'s answer here':
            'Linki AI: nie docierają do edytora wewnątrz tej strony - wklej tu odpowiedź AI',
        'AI links: open the editor in a new tab': 'Linki AI: otwierają edytor w nowej karcie',
        'AI links: go to another editor tab (the one used last)': 'Linki AI: trafiają do innej karty edytora (ostatnio używanej)',
        'AI links: arrive in this tab': 'Linki AI: trafiają do tej karty',
        'AI in this session: nothing received yet - copy the prompt for your AI': 'AI w tej sesji: jeszcze nic nie otrzymano - skopiuj prompt dla swojej AI',
    },
    patterns: [
        ['^Saved on (.+) at (\\d{1,2}):(\\d{2})\\s?(AM|PM)?$', (x, host, h, m, ap) => `Zapisano na ${host} o ${formatHour(h, m, ap)}`],
        ['^Saved on (.+)$', 'Zapisano na $1'],
        ['^Not saved on (.+?): no connection, or the server does not allow it \\(CORS\\)$', 'Nie zapisano na $1: brak połączenia lub serwer na to nie pozwala (CORS)'],
        ['^Not saved on (.+?): The server answered (\\d+)(.*)$', 'Nie zapisano na $1: serwer odpowiedział $2$3'],
        ['^Not saved on (.+?): the (document|drawing) with its pictures is (\\d+) MB - at most 40 MB go in one request$',
            (x, host, w, mb) => `Nie zapisano na ${host}: ${translateThing(w)} z obrazami ma ${mb} MB - w jednym żądaniu mieści się najwyżej 40 MB`],
        ['^"(.+)" was changed in another tab - your version here is kept as "(.+)"$', '„$1” zmieniono w innej karcie - Twoja wersja stąd zostaje zachowana jako „$2”'],
        ['^Not saved on (.+?): the server did not answer within (\\d+) seconds$', 'Nie zapisano na $1: serwer nie odpowiedział w ciągu $2 sekund'],
        ['^Not saved on (.+?): (.*)$', 'Nie zapisano na $1: $2'],
        ['^Saves to (.+) \\(set by the page\\)$', 'Zapisuje na $1 (ustawione przez stronę)'],
        ['^Save - send the (document|drawing) to (.+) \\(Ctrl\\+S\\)$', (m, w, h) => `Zapisz - wyślij ${translateThing(w)} na ${h} (Ctrl+S)`],
        ['^The AI\'s new (document|drawing) is open as "(.+)" - it stays in your browser and is not saved to (.+)$',
            (m, w, nm, l) => `${w === 'drawing' ? 'Nowy rysunek' : 'Nowy dokument'} od AI jest otwarty jako „${nm}” - zostaje w twojej przeglądarce i nie jest zapisywany w ${l}`],
        ['^The AI\'s result from (.+) is open - Undo takes it back$', 'Wynik AI z $1 jest otwarty - „Cofnij” przywraca poprzedni stan'],
        ['^The file could not be opened: no connection, or the server does not allow it \\(CORS\\)$', 'Nie udało się otworzyć pliku: brak połączenia lub serwer na to nie pozwala (CORS)'],
        ['^The file could not be opened: only https:// addresses can be opened$', 'Nie udało się otworzyć pliku: można otwierać tylko adresy https://'],
        ['^The file could not be opened: the server answered (\\d+)$', 'Nie udało się otworzyć pliku: serwer odpowiedział $1'],
        ['^The file could not be opened: the page loaded another document meanwhile$', 'Nie udało się otworzyć pliku: w międzyczasie strona wczytała inny dokument'],
        ['^The file could not be opened: (.*)$', 'Nie udało się otworzyć pliku: $1'],
        ['^This link asks the editor to send the saved versions of "(.+)" to (.+) while this page is open\\. Only allow it if you trust that site\\.$',
            'Ten link prosi edytor o wysyłanie zapisanych wersji „$1” do $2, dopóki ta strona jest otwarta. Zezwól tylko wtedy, gdy ufasz tej witrynie.'],
        ['^AI in this session: a document from an AI link, just now$', 'AI w tej sesji: dokument z linku AI, przed chwilą'],
        ['^AI in this session: a document from an AI link, (\\d+) min ago$', 'AI w tej sesji: dokument z linku AI, $1 min temu'],
        ['^AI in this session: a result through the page, just now$', 'AI w tej sesji: wynik przez stronę, przed chwilą'],
        ['^AI in this session: a result through the page, (\\d+) min ago$', 'AI w tej sesji: wynik przez stronę, $1 min temu'],
        ['^AI in this session: a browser agent \\(WebMCP\\), just now$', 'AI w tej sesji: agent przeglądarki (WebMCP), przed chwilą'],
        ['^AI in this session: a browser agent \\(WebMCP\\), (\\d+) min ago$', 'AI w tej sesji: agent przeglądarki (WebMCP), $1 min temu'],
        ['^AI through (.+): connected, waiting for the key$', 'AI przez $1: połączono, oczekiwanie na klucz'],
        ['^AI through (.+): connected$', 'AI przez $1: połączono'],
        ['^AI through (.+): the website gives the answering instructions$', 'AI przez $1: strona internetowa przekazuje AI instrukcje, jak ma odpowiedzieć'],
        ['^Browser agent \\(WebMCP\\): active, last used just now$', 'Agent przeglądarki (WebMCP): aktywny, ostatnio użyty przed chwilą'],
        ['^Browser agent \\(WebMCP\\): active, last used (\\d+) min ago$', 'Agent przeglądarki (WebMCP): aktywny, ostatnio użyty $1 min temu'],
        ['^Browser agent \\(WebMCP\\): available, last used just now$', 'Agent przeglądarki (WebMCP): dostępny, ostatnio użyty przed chwilą'],
        ['^Browser agent \\(WebMCP\\): available, last used (\\d+) min ago$', 'Agent przeglądarki (WebMCP): dostępny, ostatnio użyty $1 min temu'],

        /* ---------- The page's own answering instructions (AI Assistant) ---------- */
        ['^(.+) gives the AI its instructions for answering\\. What you paste into your AI is handled by its provider\\.$', '$1 przekazuje AI instrukcje, jak ma odpowiedzieć. Treści wklejane do AI są przetwarzane przez jej dostawcę.'],
        ['^The AI answers as (.+) describes in the prompt\\. If it answers with a link, paste its answer below\\.$', 'AI odpowiada tak, jak $1 opisuje w prompcie. Jeśli odpowie linkiem, wklej jej odpowiedź poniżej.'],
    ],
};
