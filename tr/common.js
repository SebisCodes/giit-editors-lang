/* Turkish texts that all giit editors share: the links to giit.ch in the bar,
   saving on a server and inside a page (sync.js), the AI status (aistatus.js),
   the confirmation box (dialogs.js), the errors of template placeholders (template-tags.js). The editor's own texts are in the Turkish
   pack; how they are used is described in i18n.js. The same file serves every
   giit editor. */

/**
 * Writes a time of day in the 24-hour form of the language.
 * @param {string} h - the hour.
 * @param {string} m - the minutes.
 * @param {string} ap - "AM", "PM" or empty.
 * @returns {string} the text in the language.
 */
const formatHour = (h, m, ap) => `${String((+h % 12) + (ap === 'PM' ? 12 : 0) + (ap ? 0 : +h - (+h % 12))).padStart(2, '0')}:${m}`;
/**
 * Translates the text the pattern found (thing in the English pattern).
 * @param {string} w - the English text the pattern found.
 * @returns {string} the text in the language.
 */
const translateThing = w => (w === 'drawing' ? 'çizimi' : 'belgeyi');

export default {
    text: {
        "All giit editors": "Tüm giit editörleri",
        "by giit.ch": "giit.ch tarafından",
        "Open in another editor": "Başka bir editörde aç",
        "Not everything can be converted": "Her şey dönüştürülemiyor",
        "Open anyway": "Yine de aç",
        "Pictures and other files of the document stay here: add them again in the other editor": "Belgenin resimleri ve diğer dosyaları burada kalır: diğer editörde yeniden ekleyin",
        "The document is too long for a link - export it and open the file in the other editor": "Belge bağlantı için çok uzun - dışa aktarın ve dosyayı diğer editörde açın",
        "Scripts and styles": "Betikler ve stiller",
        "Form fields": "Form alanları",
        "Footnotes, labels and references": "Dipnotlar, etiketler ve başvurular",
        "LaTeX commands and environments without an equivalent": "Karşılığı olmayan LaTeX komutları ve ortamları",
        "Document class, packages and page settings": "Belge sınıfı, paketler ve sayfa ayarları",
        "The table of contents": "İçindekiler tablosu",
        "Typst functions without an equivalent": "Karşılığı olmayan Typst işlevleri",
        "Formulas are copied as written: check them": "Formüller olduğu gibi kopyalanır: kontrol edin",
        "Formulas become plain code": "Formüller düz koda dönüşür",
        "Links with an unsafe address": "Güvenli olmayan adresli bağlantılar",
        "Comments": "Yorumlar",
        "Empty values (null): TOML has no null": "Boş değerler (null): TOML’da null yoktur",
        "The data is not a table: it goes under the key \"value\"": "Veriler bir tablo değil: “value” anahtarı altında yer alır",
        "Keys that are not valid XML names are changed": "Geçerli XML adı olmayan anahtarlar değiştirilir",
        "Only the first list goes into the table": "Tabloya yalnızca ilk liste aktarılır",
        "Nested values go into one cell as JSON": "İç içe değerler tek hücreye JSON olarak aktarılır",
        "The picture could not be stored in this browser (storage full or blocked) - it is kept only until the page is closed: download the document to keep it": "Resim bu tarayıcıda saklanamadı (depolama dolu veya engellenmiş) - yalnızca sayfa kapanana kadar kalır: saklamak için belgeyi indirin",
        "Column names that occur twice (numbered)": "İki kez geçen sütun adları (numaralandırılır)",
        "Fields beyond the header (named Column N)": "Başlığın ötesindeki alanlar (Column N olarak adlandırılır)",
        "The AI's result could not be opened - your browser's storage may be full": "Yapay zekânın sonucu açılamadı - tarayıcınızın depolama alanı dolu olabilir",
        "The AI's result could not be opened": "Yapay zekânın sonucu açılamadı",
        "Types of values: SHLS holds every value as text": "Değer türleri: SHLS her değeri metin olarak tutar",
        "This data has no list of records, so it does not make a table": "Bu verilerde kayıt listesi olmadığından tablo oluşturulamaz",
        "The XML cannot be read - fix the problem above the code first": "XML okunamıyor - önce kodun üstündeki sorunu giderin",
        "It could not be converted": "Dönüştürülemedi",
        "Content from a third party, not checked by giit.ch": "Üçüncü taraf içeriği, giit.ch tarafından denetlenmedi",
        // Wrapping long lines in the code view (wrap.js)
        "Wrap": "Kaydır",
        "Wrap long lines in the view - each line of the code stays one line (Alt+Z)": "Uzun satırları görünümde alt satıra kaydır - koddaki her satır tek satır olarak kalır (Alt+Z)",
        'Cancel': 'İptal',
        'Allow': 'İzin ver',
        'No': 'Hayır',
        'Yes': 'Evet',
        'Save': 'Kaydet',
        'Saved': 'Kaydedildi',
        'Sending…': 'Gönderiliyor…',
        'Not connected': 'Bağlı değil',
        'Save on this server?': 'Bu sunucuya kaydedilsin mi?',
        'The address for the AI must be https:// on the site of the page around the editor - it is not used':
            'Yapay zekâ adresi, editörü içeren sayfanın sitesinde bir https:// adresi olmalıdır - kullanılmıyor',
        'The key from the page is not valid (16 to 512 letters, digits or ._~+/=-)':
            'Sayfadan gelen anahtar geçersiz (16 ile 512 arası harf, rakam veya ._~+/=-)',
        'This document stays in your browser - only the document from the page is saved there':
            'Bu belge tarayıcınızda kalır - orada yalnızca sayfadan gelen belge kaydedilir',
        'This drawing stays in your browser - only the drawing from the page is saved there':
            'Bu çizim tarayıcınızda kalır - orada yalnızca sayfadan gelen çizim kaydedilir',
        'The page that opened the editor is closed - download the document so nothing is lost':
            'Editörü açan sayfa kapandı - hiçbir şey kaybolmaması için belgeyi indirin',
        'The page that opened the editor is closed - download the drawing so nothing is lost':
            'Editörü açan sayfa kapandı - hiçbir şey kaybolmaması için çizimi indirin',
        'The webhook from the page is not an https:// address - it is not used':
            'Sayfadan gelen webhook bir https:// adresi değil - kullanılmıyor',
        'Please enter an https:// address (or http://localhost for testing)':
            'Lütfen bir https:// adresi girin (test için http://localhost)',
        'Saved versions now go to your server': 'Kaydedilen sürümler artık sunucunuza gönderiliyor',
        'Webhook switched off': 'Webhook kapatıldı',
        'The webhook in the link is not an https:// address - it is not used':
            'Bağlantıdaki webhook bir https:// adresi değil - kullanılmıyor',
        'The webhook in the link only works together with ?src= - it is not used':
            'Bağlantıdaki webhook yalnızca ?src= ile birlikte çalışır - kullanılmıyor',
        'A token in a link is not used - enter it under "Save to server"':
            'Bağlantıdaki belirteç kullanılmaz - onu “Sunucuya kaydet” altında girin',
        'Save - hand the document to the page around the editor (Ctrl+S)':
            'Kaydet - belgeyi editörü içeren sayfaya aktar (Ctrl+S)',
        'Save - hand the drawing to the page around the editor (Ctrl+S)':
            'Kaydet - çizimi editörü içeren sayfaya aktar (Ctrl+S)',
        'AI through a website: not connected': 'Web sitesi üzerinden yapay zekâ: bağlı değil',
        'Browser agent (WebMCP): not offered by this browser': 'Tarayıcı aracısı (WebMCP): bu tarayıcı sunmuyor',
        'Browser agent (WebMCP): available, not used yet': 'Tarayıcı aracısı (WebMCP): kullanılabilir, henüz kullanılmadı',
        'AI links: cannot reach the editor inside this website - paste the AI\'s answer here':
            'Yapay zekâ bağlantıları: bu web sitesindeki editöre ulaşamaz - yapay zekânın yanıtını buraya yapıştırın',
        'AI links: open the editor in a new tab': 'Yapay zekâ bağlantıları: editörü yeni bir sekmede açar',
        'AI links: go to another editor tab (the one used last)': 'Yapay zekâ bağlantıları: başka bir editör sekmesine gider (en son kullanılana)',
        'AI links: arrive in this tab': 'Yapay zekâ bağlantıları: bu sekmeye gelir',
        'AI in this session: nothing received yet - copy the prompt for your AI': 'Bu oturumda yapay zekâ: henüz bir şey alınmadı - yapay zekânız için istemi kopyalayın',
    },
    patterns: [
        ['^Saved on (.+) at (\\d{1,2}):(\\d{2})\\s?(AM|PM)?$', (x, host, h, m, ap) => `${host} adresine ${formatHour(h, m, ap)} saatinde kaydedildi`],
        ['^Saved on (.+)$', '$1 adresine kaydedildi'],
        ['^Not saved on (.+?): no connection, or the server does not allow it \\(CORS\\)$', '$1 adresine kaydedilmedi: bağlantı yok veya sunucu buna izin vermiyor (CORS)'],
        ['^Not saved on (.+?): The server answered (\\d+)(.*)$', '$1 adresine kaydedilmedi: Sunucu $2$3 yanıtını verdi'],
        ['^Not saved on (.+?): the (document|drawing) with its pictures is (\\d+) MB - at most 40 MB go in one request$', '$1 adresine kaydedilmedi: resimlerle birlikte $3 MB - bir istekte en fazla 40 MB gönderilebilir'],
        ['^"(.+)" was changed in another tab - your version here is kept as "(.+)"$', '"$1" başka bir sekmede değiştirildi - buradaki sürümünüz "$2" olarak saklanıyor'],
        ['^Not saved on (.+?): the server did not answer within (\\d+) seconds$', '$1 adresine kaydedilmedi: sunucu $2 saniye içinde yanıt vermedi'],
        ['^Not saved on (.+?): (.*)$', '$1 adresine kaydedilmedi: $2'],
        ['^Saves to (.+) \\(set by the page\\)$', '$1 adresine kaydeder (sayfa tarafından belirlendi)'],
        ['^Save - send the (document|drawing) to (.+) \\(Ctrl\\+S\\)$', (m, w, h) => `Kaydet - ${translateThing(w)} ${h} adresine gönder (Ctrl+S)`],
        ['^The AI\'s new (document|drawing) is open as "(.+)" - it stays in your browser and is not saved to (.+)$',
            (m, w, n, l) => `Yapay zekânın yeni ${w === 'drawing' ? 'çizimi' : 'belgesi'} “${n}” olarak açık - tarayıcınızda kalır ve ${l} adresine kaydedilmez`],
        ['^The AI\'s result from (.+) is open - Undo takes it back$', 'Yapay zekânın sonucu ($1) açık - Geri al ile geri alınır'],
        ['^The file could not be opened: no connection, or the server does not allow it \\(CORS\\)$', 'Dosya açılamadı: bağlantı yok veya sunucu buna izin vermiyor (CORS)'],
        ['^The file could not be opened: only https:// addresses can be opened$', 'Dosya açılamadı: yalnızca https:// adresleri açılabilir'],
        ['^The file could not be opened: the server answered (\\d+)$', 'Dosya açılamadı: sunucu $1 yanıtını verdi'],
        ['^The file could not be opened: the page loaded another document meanwhile$', 'Dosya açılamadı: sayfa bu arada başka bir belge yükledi'],
        ['^The file could not be opened: (.*)$', 'Dosya açılamadı: $1'],
        ['^This link asks the editor to send the saved versions of "(.+)" to (.+) while this page is open\\. Only allow it if you trust that site\\.$',
            'Bu bağlantı, bu sayfa açık kaldığı sürece editörden “$1” dosyasının kaydedilen sürümlerini $2 adresine göndermesini istiyor. Yalnızca bu siteye güveniyorsanız izin verin.'],
        ['^AI in this session: a document from an AI link, just now$', 'Bu oturumda yapay zekâ: bir yapay zekâ bağlantısından belge, az önce'],
        ['^AI in this session: a document from an AI link, (\\d+) min ago$', 'Bu oturumda yapay zekâ: bir yapay zekâ bağlantısından belge, $1 dk önce'],
        ['^AI in this session: a result through the page, just now$', 'Bu oturumda yapay zekâ: sayfa üzerinden bir sonuç, az önce'],
        ['^AI in this session: a result through the page, (\\d+) min ago$', 'Bu oturumda yapay zekâ: sayfa üzerinden bir sonuç, $1 dk önce'],
        ['^AI in this session: a browser agent \\(WebMCP\\), just now$', 'Bu oturumda yapay zekâ: bir tarayıcı aracısı (WebMCP), az önce'],
        ['^AI in this session: a browser agent \\(WebMCP\\), (\\d+) min ago$', 'Bu oturumda yapay zekâ: bir tarayıcı aracısı (WebMCP), $1 dk önce'],
        ['^AI through (.+): connected, waiting for the key$', '$1 üzerinden yapay zekâ: bağlı, anahtar bekleniyor'],
        ['^AI through (.+): connected$', '$1 üzerinden yapay zekâ: bağlı'],
        ['^AI through (.+): the website gives the answering instructions$', '$1 üzerinden yapay zekâ: web sitesi yapay zekâya nasıl yanıt vereceğini söyler'],
        ['^Browser agent \\(WebMCP\\): active, last used just now$', 'Tarayıcı aracısı (WebMCP): etkin, en son az önce kullanıldı'],
        ['^Browser agent \\(WebMCP\\): active, last used (\\d+) min ago$', 'Tarayıcı aracısı (WebMCP): etkin, en son $1 dk önce kullanıldı'],
        ['^Browser agent \\(WebMCP\\): available, last used just now$', 'Tarayıcı aracısı (WebMCP): kullanılabilir, en son az önce kullanıldı'],
        ['^Browser agent \\(WebMCP\\): available, last used (\\d+) min ago$', 'Tarayıcı aracısı (WebMCP): kullanılabilir, en son $1 dk önce kullanıldı'],

        /* ---------- The page's own answering instructions (AI Assistant) ---------- */
        ['^(.+) gives the AI its instructions for answering\\. What you paste into your AI is handled by its provider\\.$', '$1, yapay zekâya nasıl yanıt vereceğini söyler. Yapay zekânıza yapıştırdığınız içerik, onun sağlayıcısı tarafından işlenir.'],
        ['^The AI answers as (.+) describes in the prompt\\. If it answers with a link, paste its answer below\\.$', 'Yapay zekâ, $1 tarafından istemde açıklandığı gibi yanıt verir. Bir bağlantıyla yanıt verirse yanıtını aşağıya yapıştırın.'],

        /* ---------- Template placeholders (template-tags.js, ?template=) ---------- */
        ['^The section (\\S+) stays open - add (\\S+)$', '$1 bölümü açık kalıyor - $2 ekleyin'],
        ['^(\\S+) is a stray end tag - remove it or add (\\S+) before it$', '$1 açılışı olmayan bir kapanış etiketi - kaldırın ya da önüne $2 ekleyin'],
        ['^(\\S+) closes (\\S+) before the inner section (\\S+) is closed - add (\\S+) first$', '$1, içteki $3 bölümü kapatılmadan $2 bölümünü kapatıyor - önce $4 ekleyin'],
        ['^Unknown placeholder (\\S+) - use (.+)$', 'Bilinmeyen yer tutucu $1 - $2 kullanın'],
    ],
};
