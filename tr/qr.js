/* Turkish texts of the QR editor: the bar, the work area (code, QR code,
   content, design, check), its dialogs and messages, and the problems the
   editor finds in the QR document. What all editors share is in common.js;
   how the dictionaries are used is described in i18n.js. Names of documents,
   design keys and values, colors and content formats stay as they are: the
   patterns copy them into the Turkish text. */

import { formatTime } from './format.js';

/* "0.25" -> "0,25" (decimal comma) */
/**
 * Writes the decimal separator of the language into a number.
 * @param {string} s - the number with a decimal point.
 * @returns {string} the text in the language.
 */
const formatDecimal = s => String(s).replace('.', ',');
/* "412 B" / "1.5 KB" / "523 bytes" -> Turkish number and unit */
/**
 * Translates the unit of a size text ("123 bytes").
 * @param {string} s - the English size text.
 * @returns {string} the text in the language.
 */
const formatSize = s => {
    const m = /^(\d+) bytes$/.exec(s);
    return m ? `${m[1]} bayt` : s.replace(/^([\d.]+) (B|KB|MB)$/, (x, v, u) => `${formatDecimal(v)} ${u}`);
};

/* When a document was last changed (files.js): "just now", "5 min ago", "Oct 25, 2026" … */

/* The content types (payload.js TYPE_NAMES) where a message names them in English. */
const TYPES = {
    Link: 'Bağlantı', Text: 'Metin', WiFi: 'Wi-Fi', Contact: 'Kişi', Email: 'E-posta', SMS: 'SMS', Phone: 'Telefon', Location: 'Konum',
    Event: 'Etkinlik', Crypto: 'Kripto', 'SEPA payment': 'SEPA ödemesi', 'Swiss QR bill': 'İsviçre QR faturası',
};
/* What a design value may be (qrdoc.js KEYS hint); lists of values stay as they are. */
/**
 * Translates the text the pattern found (hint in the English pattern).
 * @param {string} h - the English text the pattern found.
 * @returns {string} the text in the language.
 */
function translateHint(h) {
    const H = {
        'auto or 1 to 40': 'auto veya 1 ile 40 arası', 'auto or 0 to 7': 'auto veya 0 ile 7 arası', '0 to 20 modules': '0 ile 20 modül arası',
        'a color like #1d2b53': '#1d2b53 gibi bir renk', '0 to 360 degrees': '0 ile 360 derece arası', 'a color like #ffffff, or transparent': '#ffffff gibi bir renk veya transparent',
        '5 to 30 percent': 'yüzde 5 ile 30 arası',
    };
    if (H[h]) return H[h];
    const m = /^none, (.+) or a picture as (data:\S+)$/.exec(h);
    return m ? `none, ${m[1]} veya ${m[2]} biçiminde bir resim` : h;
}

export default {
    text: {
        /* ---------- Side panel: a column on the desktop ---------- */
        'Side panel': 'Yan panel',
        'Show or hide the side panel': 'Yan paneli göster veya gizle',
        'Module shape': 'Modül şekli',
        'Eye frame': 'Göz çerçevesi',
        'Eye center': 'Göz merkezi',
        /* ---------- Top bar ---------- */
        'QR Editor - home': 'QR Editörü - ana sayfa',
        'QR Editor': 'QR Editörü',
        'File': 'Dosya',
        'My documents (Ctrl+O)': 'Belgelerim (Ctrl+O)',
        'My documents': 'Belgelerim',
        'New QR code': 'Yeni QR kod',
        'New': 'Yeni',
        'A web address - opens the page': 'Bir web adresi - sayfayı açar',
        'Join the network without typing the password': 'Şifre yazmadan ağa bağlanın',
        'vCard or MeCard - saves name, phone and email': 'vCard veya MeCard - ad, telefon ve e-postayı kaydeder',
        'Adds a date to the calendar': 'Takvime bir tarih ekler',
        'Address, subject and text': 'Adres, konu ve metin',
        'Number and message': 'Numara ve mesaj',
        'Calls a number': 'Bir numarayı arar',
        'Opens a place in the map app': 'Harita uygulamasında bir yer açar',
        'EPC GiroCode for banking apps in the euro area': 'Avro bölgesindeki bankacılık uygulamaları için EPC GiroCode',
        'The QR code of a Swiss payment slip': 'İsviçre ödeme belgesinin QR kodu',
        'Crypto payment': 'Kripto ödemesi',
        'Bitcoin, Ethereum and others': 'Bitcoin, Ethereum ve diğerleri',
        'Any text': 'Herhangi bir metin',
        'The welcome example': 'Hoş geldiniz örneği',
        'A designed WiFi code with logo and caption': 'Logo ve yazıyla tasarlanmış bir Wi-Fi kodu',
        'Open a .qr file, or read a QR code from a picture (you can also drag it into the window or paste it)':
            'Bir .qr dosyası açın veya bir resimden QR kod okuyun (pencereye sürükleyebilir ya da yapıştırabilirsiniz)',
        'Open file…': 'Dosya aç…',
        'Read a QR code with the camera': 'Kamerayla QR kod okuyun',
        'Read code': 'Kodu oku',
        'Undo the last change (Ctrl+Z)': 'Son değişikliği geri al (Ctrl+Z)',
        'Undo': 'Geri al',
        'Redo the change you just undid (Ctrl+Y)': 'Geri aldığınız değişikliği yinele (Ctrl+Y)',
        'Redo': 'Yinele',
        'Output': 'Çıktı',
        'Color theme': 'Renk teması',
        'Light theme': 'Açık tema',
        'Dark theme': 'Koyu tema',
        'Same as your system setting': 'Sistem ayarınızla aynı',
        'Automatic theme (system setting)': 'Otomatik tema (sistem ayarı)',
        'Let any AI write in this editor': 'Herhangi bir yapay zekânın bu editörde yazmasına izin verin',
        'AI Assistant': 'Yapay Zekâ Asistanı',
        'Save to your own server and embed the editor in your website':
            'Kendi sunucunuza kaydedin ve editörü web sitenize yerleştirin',
        'Save to server': 'Sunucuya kaydet',
        'How it works and keyboard shortcuts (?)': 'Nasıl çalışır ve klavye kısayolları (?)',
        'Help': 'Yardım',
        'Save the QR code as an SVG picture (Ctrl+S)': 'QR kodu SVG resmi olarak kaydet (Ctrl+S)',
        'Download SVG': 'SVG indir',
        'SVG, PNG, PDF, EPS, many codes from a table (Ctrl+E)': 'SVG, PNG, PDF, EPS, bir tablodan çok sayıda kod (Ctrl+E)',
        'Export…': 'Dışa aktar…',

        /* ---------- Views and work area ---------- */
        'View': 'Görünüm',
        'Code': 'Kod',
        'QR code': 'QR kod',
        'Edit': 'Düzenle',
        'QR document': 'QR belgesi',
        'Copy the QR document to the clipboard': 'QR belgesini panoya kopyala',
        'Copy code': 'Kodu kopyala',
        'Copy': 'Kopyala',
        'QR document: design lines, a line ---, then the content': 'QR belgesi: tasarım satırları, bir --- satırı, ardından içerik',
        'Drag to change the width of the code area': 'Kod alanının genişliğini değiştirmek için sürükleyin',
        'Drag to change the width': 'Genişliği değiştirmek için sürükleyin',
        'Show the details of the scan check': 'Tarama testinin ayrıntılarını göster',
        'Checking…': 'Kontrol ediliyor…',
        'Type the content below the line --- in the code, or choose a type under Edit.':
            'İçeriği koddaki --- satırının altına yazın veya Düzenle altında bir tür seçin.',
        'What the code holds: link, WiFi, contact, payment …': 'Kodun içeriği: bağlantı, Wi-Fi, kişi, ödeme …',
        'Content': 'İçerik',
        'Colors, shapes, logo, caption and frame': 'Renkler, şekiller, logo, yazı ve çerçeve',
        'Design': 'Tasarım',
        'Scan check, contrast, print size': 'Tarama testi, kontrast, baskı boyutu',
        'Check': 'Kontrol',
        'Open it here': 'Burada aç',
        'Drop a .qr file or a picture with a QR code here': 'Bir .qr dosyasını veya QR kodlu bir resmi buraya bırakın',
        'Hide': 'Gizle',
        'Show': 'Göster',
        'No code': 'Kod yok',
        'Scans': 'Taranabiliyor',
        'Scans in good conditions': 'İyi koşullarda taranabiliyor',
        'Does not scan': 'Taranamıyor',
        'version': 'sürüm',
        'error correction': 'hata düzeltme',

        /* ---------- Export ---------- */
        'Export': 'Dışa aktar',
        'Close': 'Kapat',
        'File name': 'Dosya adı',
        'Format': 'Biçim',
        'Vector (print, any size)': 'Vektör (baskı, her boyut)',
        'SVG picture': 'SVG resmi',
        'EPS (for print shops)': 'EPS (matbaalar için)',
        'Picture': 'Resim',
        'The content as text': 'Metin olarak içerik',
        'QR document (.qr)': 'QR belgesi (.qr)',
        'Many codes': 'Çok sayıda kod',
        'Many codes from a table': 'Bir tablodan çok sayıda kod',
        'Width in pixels': 'Piksel olarak genişlik',
        'Resolution (dpi)': 'Çözünürlük (dpi)',
        'Width in mm': 'mm olarak genişlik',
        'Each code as': 'Her kod şu biçimde',
        'SVG files in a ZIP': 'ZIP içinde SVG dosyaları',
        'PNG files in a ZIP': 'ZIP içinde PNG dosyaları',
        'One PDF, one code per page': 'Tek PDF, sayfa başına bir kod',
        'File names from': 'Dosya adlarının kaynağı',
        'Table (CSV or TSV, first row = column names)': 'Tablo (CSV veya TSV, ilk satır = sütun adları)',
        'Open a table…': 'Tablo aç…',
        'Result': 'Sonuç',
        'SVG, PNG, PDF, EPS and the .qr document in one ZIP': 'SVG, PNG, PDF, EPS ve .qr belgesi tek bir ZIP içinde',
        'All formats (ZIP)': 'Tüm biçimler (ZIP)',
        'Download': 'İndir',
        'There is no code yet - see the problems above the code.': 'Henüz kod yok - kodun üstündeki sorunlara bakın.',
        '(The picture is made when you download it.)': '(Resim, indirdiğinizde oluşturulur.)',
        '(A vector PDF, one page as large as the code - made when you download it.)':
            '(Vektör PDF, kod büyüklüğünde tek sayfa - indirdiğinizde oluşturulur.)',
        '(A vector EPS for print shops - made when you download it.)': '(Matbaalar için vektör EPS - indirdiğinizde oluşturulur.)',
        'Downloaded': 'İndirildi',
        'ZIP downloaded: SVG, PDF, EPS, PNG, the .qr document and the content': 'ZIP indirildi: SVG, PDF, EPS, PNG, .qr belgesi ve içerik',
        'Picture copied - paste it into a document or a chat': 'Resim kopyalandı - bir belgeye veya sohbete yapıştırın',
        'This browser does not let the page copy pictures - download it instead': 'Bu tarayıcı sayfanın resim kopyalamasına izin vermiyor - bunun yerine indirin',
        'Copied to the clipboard': 'Panoya kopyalandı',
        'Row number': 'Satır numarası',
        'Column': 'Sütun',
        'Write placeholders like {{url}} into the content (or the caption) - each row of the table fills them.':
            'İçeriğe (veya yazıya) {{url}} gibi yer tutucular yazın - tablonun her satırı bunları doldurur.',
        'Placeholders in the document': 'Belgedeki yer tutucular',
        'Not in the table': 'Tabloda yok',
        'The table is larger than 10 MB': 'Tablo 10 MB’tan büyük',
        'Paste a table with a header row and at least one row': 'Başlık satırı ve en az bir satır içeren bir tablo yapıştırın',
        'No row made a code - see the content': 'Hiçbir satırdan kod oluşmadı - içeriğe bakın',

        /* ---------- Scan ---------- */
        'Read a QR code': 'QR kod okuyun',
        'Starting the camera…': 'Kamera başlatılıyor…',
        'The camera image is read in your browser only - nothing is recorded or sent.':
            'Kamera görüntüsü yalnızca tarayıcınızda okunur - hiçbir şey kaydedilmez veya gönderilmez.',
        'Choose a picture…': 'Resim seç…',
        'This browser gives no camera to the page - choose a picture instead.': 'Bu tarayıcı sayfanın kameraya erişmesine izin vermiyor - bunun yerine bir resim seçin.',
        'Hold the QR code in front of the camera.': 'QR kodu kameranın önünde tutun.',
        'The camera is not allowed - allow it in the browser (inside another website the page must allow it too), or choose a picture.':
            'Kameraya izin verilmiyor - tarayıcıda izin verin (başka bir web sitesinin içinde o sayfa da izin vermelidir) veya bir resim seçin.',
        'No camera found - choose a picture instead.': 'Kamera bulunamadı - bunun yerine bir resim seçin.',

        /* ---------- My documents ---------- */
        'Search by name': 'Ada göre ara',
        'Search your documents': 'Belgelerinizde arayın',
        'Open a .qr file or a picture with a QR code as a new document': 'Bir .qr dosyasını veya QR kodlu bir resmi yeni belge olarak açın',
        'New document': 'Yeni belge',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            'Açmak için bir belgeye tıklayın. Belgeler yalnızca bu tarayıcıda saklanır - hiçbir şey yüklenmez. Tarayıcının site verilerini temizlemek onları siler; saklamak istediklerinizi indirin.',
        'Download every document as a .qr file in one ZIP': 'Her belgeyi tek bir ZIP içinde .qr dosyası olarak indir',
        'Download all (ZIP)': 'Tümünü indir (ZIP)',
        'Rename': 'Yeniden adlandır',
        'Duplicate': 'Çoğalt',
        'Download as .qr': '.qr olarak indir',
        'Delete': 'Sil',
        'New name': 'Yeni ad',
        'This document is open': 'Bu belge açık',
        'Click to open this document': 'Bu belgeyi açmak için tıklayın',
        'No documents yet.': 'Henüz belge yok.',
        'The document is removed from this browser for good. Download it first if you want to keep a copy.':
            'Belge bu tarayıcıdan kalıcı olarak kaldırılır. Bir kopyasını saklamak istiyorsanız önce indirin.',

        /* ---------- AI Assistant ---------- */
        'Any AI can work with you - ChatGPT, Claude, Gemini, Copilot.': 'Her yapay zekâ sizinle birlikte çalışabilir - ChatGPT, Claude, Gemini, Copilot.',
        'Connected AI': 'Bağlı yapay zekâ',
        'Paste it into your AI and say what the code should hold or how it should look.':
            'Yapay zekânıza yapıştırın ve kodun ne içermesi veya nasıl görünmesi gerektiğini söyleyin.',
        'Connected to': 'Bağlı:',
        'the AI sends its result there, and it opens here.': 'yapay zekâ sonucunu oraya gönderir ve burada açılır.',
        'What': '',
        'tells the AI': 'sitesinin yapay zekâya söyledikleri',
        'The AI should': 'Yapay zekâ şunu yapsın:',
        'Change “': 'Şunu değiştir: “',
        '”': '”',
        'Make a new document': 'Yeni bir belge oluştur',
        'The AI\'s answer (or press Ctrl+V anywhere):': 'Yapay zekânın yanıtı (veya herhangi bir yerde Ctrl+V’ye basın):',
        'The QR document travels in the link after the “#”, which no server sees. What you paste into your AI is handled by its provider.':
            'QR belgesi bağlantıda “#” işaretinden sonra taşınır; bu kısmı hiçbir sunucu görmez. Yapay zekânıza yapıştırdığınız içerik, onun sağlayıcısı tarafından işlenir.',
        'The prompt - copy it with Ctrl+C': 'İstem - Ctrl+C ile kopyalayın',
        'Copy prompt': 'İstemi kopyala',
        '(no key yet)': '(henüz anahtar yok)',
        '(key valid while the editor is open)': '(anahtar editör açık olduğu sürece geçerli)',
        'The link could not be read': 'Bağlantı okunamadı',
        'The document in this link is incomplete or damaged. If the AI\'s link was split over several lines (as in a terminal), copy the whole answer and paste it into the editor with Ctrl+V - the editor joins the lines.':
            'Bu bağlantıdaki belge eksik veya bozuk. Yapay zekânın bağlantısı (terminaldeki gibi) birkaç satıra bölündüyse, yanıtın tamamını kopyalayıp Ctrl+V ile editöre yapıştırın - editör satırları birleştirir.',
        'Loading…': 'Yükleniyor…',
        'Taken over by your editor': 'Editörünüze aktarıldı',
        'The document is now in the QR Editor tab you already had open. Switch to that tab, or open it here.':
            'Belge artık zaten açık olan QR Editörü sekmesinde. O sekmeye geçin ya da burada açın.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)':
            'Burada kopyalamaya izin verilmiyor - aşağıda seçili: Ctrl+C (⌘C) tuşlarına basın',
        'Prompt copied - paste it into your AI and say what it should write': 'İstem kopyalandı - yapay zekânıza yapıştırın ve ne yapması gerektiğini söyleyin',
        'This link is incomplete or damaged - please ask the AI to send it again': 'Bu bağlantı eksik veya bozuk - lütfen yapay zekâdan tekrar göndermesini isteyin',

        /* ---------- Save to your server ---------- */
        'Save to your server': 'Sunucunuza kaydedin',
        'Webhook address': 'Webhook adresi',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)':
            '(isteğe bağlı, “Authorization: Bearer …” olarak gönderilir; bu sekme kapanana kadar saklanır)',
        'Send automatically a few seconds after each change (otherwise only when you click':
            'Her değişiklikten birkaç saniye sonra otomatik gönder (aksi hâlde yalnızca şuna tıkladığınızda:',
        'or press Ctrl+S)': 'veya Ctrl+S’ye bastığınızda)',
        'Only for “': 'Yalnızca şunun için: “',
        '” (other documents use the general address)': '” (diğer belgeler genel adresi kullanır)',
        'What your server receives': 'Sunucunuzun aldığı veriler',
        'A POST request with JSON (your server must allow CORS from https://qr.giit.ch):':
            'JSON içeren bir POST isteği (sunucunuz https://qr.giit.ch için CORS’a izin vermelidir):',
        'Embed the editor in your website': 'Editörü web sitenize yerleştirin',
        'Send now': 'Şimdi gönder',
        'Save setting': 'Ayarı kaydet',

        /* ---------- Help ---------- */
        'How it works': 'Nasıl çalışır',
        'Keyboard shortcuts': 'Klavye kısayolları',
        'Undo / redo': 'Geri al / yinele',
        'Save (download SVG, or to your server)': 'Kaydet (SVG indir veya sunucunuza)',
        'Paste a picture with a QR code to read it': 'Okumak için QR kodlu bir resim yapıştırın',
        'Wrap long lines in the code': 'Koddaki uzun satırları kaydır',

        /* ---------- Messages ---------- */
        'The browser storage is full - download and delete documents under "My documents"':
            'Tarayıcı depolama alanı dolu - “Belgelerim” altında belgeleri indirin ve silin',
        'The browser storage is full - delete or download documents under "My documents" first':
            'Tarayıcı depolama alanı dolu - önce “Belgelerim” altında belgeleri silin veya indirin',
        'The browser storage is full - delete or download some documents first':
            'Tarayıcı depolama alanı dolu - önce bazı belgeleri silin veya indirin',
        'The browser storage is full': 'Tarayıcı depolama alanı dolu',
        'Nothing to undo': 'Geri alınacak bir şey yok',
        'Nothing to redo': 'Yinelenecek bir şey yok',
        /* fragments: New document "<name>" - …, "<name>" is open. … */
        'your other documents are under "My documents"': 'diğer belgeleriniz “Belgelerim” altında',
        'from the AI - your other documents are unchanged': 'yapay zekâdan - diğer belgeleriniz değişmedi',
        'is open. My documents: open, rename, duplicate or delete your documents (Ctrl+O)':
            'açık. Belgelerim: belgelerinizi açın, yeniden adlandırın, çoğaltın veya silin (Ctrl+O)',
        'is neither a .qr file nor a picture': 'ne bir .qr dosyası ne de bir resim',
        'opened - it is now in "My documents"': 'açıldı - artık “Belgelerim” içinde',
        'changed by the AI - "Undo" takes it back': 'yapay zekâ tarafından değiştirildi - “Geri al” bunu geri alır',
        'The file is larger than 20 MB': 'Dosya 20 MB’tan büyük',
        'No QR code found in the picture': 'Resimde QR kod bulunamadı',
        'Logo added - it is part of the document': 'Logo eklendi - belgenin bir parçası',
        'The picture is larger than 5 MB': 'Resim 5 MB’tan büyük',
        'The SVG is larger than 200 KB': 'SVG 200 KB’tan büyük',
        'QR document copied': 'QR belgesi kopyalandı',
        'There is no code to download yet': 'Henüz indirilecek kod yok',
        'SVG downloaded': 'SVG indirildi',
        'Design reset - "Undo" brings it back': 'Tasarım sıfırlandı - “Geri al” geri getirir',
        'Type a number into the reference field first': 'Önce referans alanına bir sayı yazın',
        'Reference with check digits written': 'Kontrol basamaklı referans yazıldı',
        /* the name of a document read from a picture: "<kind> read" */
        'read': 'okundu',
        /* names of the templates under New */
        'Guest WiFi': 'Misafir Wi-Fi',
        'Bitcoin': 'Bitcoin',

        /* ---------- Content ---------- */
        'Kind of content': 'İçerik türü',
        'Link': 'Bağlantı',
        'Text': 'Metin',
        'WiFi': 'Wi-Fi',
        'Contact': 'Kişi',
        'Email': 'E-posta',
        'SMS': 'SMS',
        'Phone': 'Telefon',
        'Location': 'Konum',
        'Event': 'Etkinlik',
        'Crypto': 'Kripto',
        'SEPA payment': 'SEPA ödemesi',
        'Swiss QR bill': 'İsviçre QR faturası',
        'Make a QR reference from a number': 'Bir sayıdan QR referansı oluştur',
        'Make an RF reference from a number': 'Bir sayıdan RF referansı oluştur',
        'The code opens this address. A link shortener or redirect service makes the code depend on that service - the editor warns about it.':
            'Kod bu adresi açar. Bağlantı kısaltıcı veya yönlendirme hizmeti kodu o hizmete bağımlı kılar - editör bu konuda uyarır.',
        'Any text; phones show it as it is.': 'Herhangi bir metin; telefonlar onu olduğu gibi gösterir.',
        'Phones join the network when the code is scanned (Android, iPhone with iOS 11 and later).':
            'Kod tarandığında telefonlar ağa bağlanır (Android, iOS 11 ve sonrası olan iPhone).',
        'vCard is read by all phones; MeCard makes a smaller code with fewer fields.':
            'vCard’ı tüm telefonlar okur; MeCard daha az alanla daha küçük bir kod oluşturur.',
        'Opens a new email with address, subject and text.': 'Adres, konu ve metinle yeni bir e-posta açar.',
        'Opens a text message to this number.': 'Bu numaraya bir SMS açar.',
        'Offers to call this number - with the country code it works everywhere.':
            'Bu numarayı aramayı önerir - ülke koduyla her yerde çalışır.',
        'Opens the place in the map app.': 'Yeri harita uygulamasında açar.',
        'Adds the event to the calendar (times are local times).': 'Etkinliği takvime ekler (saatler yerel saat dilimindedir).',
        'A payment request for wallet apps.': 'Cüzdan uygulamaları için bir ödeme isteği.',
        'For banking apps in the euro area (SEPA credit transfer, EPC GiroCode). Error correction M as the standard requires.':
            'Avro bölgesindeki bankacılık uygulamaları için (SEPA havalesi, EPC GiroCode). Standardın gerektirdiği gibi M düzeyinde hata düzeltme.',
        'The QR code of a Swiss QR bill (Implementation Guidelines 2.3 / 2.4). Drawn with the Swiss cross and error correction M; print it 46 × 46 mm.':
            'İsviçre QR faturasının QR kodu (Implementation Guidelines 2.3 / 2.4). İsviçre haçı ve M düzeyinde hata düzeltmeyle çizilir; 46 × 46 mm basın.',
        'Address (URL)': 'Adres (URL)',
        'Network name (SSID)': 'Ağ adı (SSID)',
        'Security': 'Güvenlik',
        'WEP (old)': 'WEP (eski)',
        'None (open network)': 'Yok (açık ağ)',
        'Password': 'Şifre',
        'Hidden network': 'Gizli ağ',
        'vCard 3.0 (all phones)': 'vCard 3.0 (tüm telefonlar)',
        'MeCard (smaller code)': 'MeCard (daha küçük kod)',
        'First name': 'Ad',
        'Last name': 'Soyad',
        'Company': 'Şirket',
        'Job title': 'Unvan',
        'Mobile': 'Cep telefonu',
        'Phone (work)': 'Telefon (iş)',
        'Website': 'Web sitesi',
        'Street and number': 'Cadde/sokak ve numara',
        'Postal code': 'Posta kodu',
        'City': 'Şehir',
        'Region': 'Bölge',
        'Country': 'Ülke',
        'Note': 'Not',
        'To': 'Alıcı',
        'Subject': 'Konu',
        'Message': 'Mesaj',
        'Phone number': 'Telefon numarası',
        'Latitude': 'Enlem',
        'Longitude': 'Boylam',
        'Name of the place (optional)': 'Yerin adı (isteğe bağlı)',
        'Title': 'Başlık',
        'All day': 'Tüm gün',
        'Start': 'Başlangıç',
        'End': 'Bitiş',
        'Place': 'Yer',
        'Description': 'Açıklama',
        'Currency': 'Para birimi',
        'Address': 'Adres',
        'Amount (optional)': 'Tutar (isteğe bağlı)',
        'Recipient (optional)': 'Alıcı (isteğe bağlı)',
        'Message (optional)': 'Mesaj (isteğe bağlı)',
        'Recipient': 'Alıcı',
        'BIC (optional)': 'BIC (isteğe bağlı)',
        'Amount in EUR (optional)': 'EUR olarak tutar (isteğe bağlı)',
        'Creditor reference RF… (or a message below)': 'Alacaklı referansı RF… (veya aşağıda bir mesaj)',
        'Message to the recipient': 'Alıcıya mesaj',
        'Purpose code (optional, e.g. CHAR)': 'Amaç kodu (isteğe bağlı, örn. CHAR)',
        'Note for the payer (optional)': 'Ödeyene not (isteğe bağlı)',
        'IBAN or QR-IBAN of the creditor (CH or LI)': 'Alacaklının IBAN’ı veya QR-IBAN’ı (CH veya LI)',
        'Creditor name': 'Alacaklının adı',
        'Street': 'Cadde/sokak',
        'Number': 'Numara',
        'Town': 'Yerleşim yeri',
        'Country (2 letters)': 'Ülke (2 harf)',
        'Amount (empty: the payer fills it in)': 'Tutar (boş: ödeyen doldurur)',
        'Reference': 'Referans',
        'No reference': 'Referans yok',
        'QR reference (with a QR-IBAN)': 'QR referansı (QR-IBAN ile)',
        'Creditor reference (RF…)': 'Alacaklı referansı (RF…)',
        'Reference number': 'Referans numarası',
        'Additional information (message)': 'Ek bilgi (mesaj)',
        'Billing information (optional, //S1/…)': 'Fatura bilgisi (isteğe bağlı, //S1/…)',
        'Payable by: name (optional)': 'Ödeyecek kişi: ad (isteğe bağlı)',

        /* ---------- Design ---------- */
        'A Swiss QR bill is always drawn as the standard requires: black squares on white, the Swiss cross, error correction M. These settings apply to the other codes.':
            'İsviçre QR faturası her zaman standardın gerektirdiği gibi çizilir: beyaz üzerine siyah kareler, İsviçre haçı, M düzeyinde hata düzeltme. Bu ayarlar diğer kodlar için geçerlidir.',
        'Colors': 'Renkler',
        'Dark color': 'Koyu renk',
        'Background': 'Arka plan',
        'Transparent background': 'Şeffaf arka plan',
        'Gradient': 'Geçiş',
        'None': 'Yok',
        'Linear': 'Doğrusal',
        'Radial': 'Dairesel',
        'Second color': 'İkinci renk',
        'Angle': 'Açı',
        'Modules': 'Modüller',
        'Eyes': 'Gözler',
        'Frame': 'Çerçeve',
        'Center': 'Merkez',
        'Own color for the eyes': 'Gözler için ayrı renk',
        'Eye color': 'Göz rengi',
        'Logo': 'Logo',
        'No logo': 'Logo yok',
        'Your own picture (PNG, JPEG, SVG, WebP) - it becomes part of the document':
            'Kendi resminiz (PNG, JPEG, SVG, WebP) - belgenin bir parçası olur',
        'Picture…': 'Resim…',
        'Logo size': 'Logo boyutu',
        'Remove the modules behind the logo': 'Logonun arkasındaki modülleri kaldır',
        'Caption and frame': 'Yazı ve çerçeve',
        'Caption': 'Yazı',
        'Position': 'Konum',
        'Below the code': 'Kodun altında',
        'Above the code': 'Kodun üstünde',
        'Line': 'Çizgi',
        'Filled': 'Dolu',
        'Frame and caption color': 'Çerçeve ve yazı rengi',
        'Error correction and size': 'Hata düzeltme ve boyut',
        'Error correction': 'Hata düzeltme',
        'Quiet zone (modules)': 'Sessiz bölge (modül)',
        'Smallest version': 'En küçük sürüm',
        'Automatic': 'Otomatik',
        'Mask': 'Maske',
        'Use a higher error correction when it fits in the same size': 'Aynı boyuta sığıyorsa daha yüksek hata düzeltme kullan',
        'Removes all design lines - "Undo" brings them back': 'Tüm tasarım satırlarını kaldırır - “Geri al” geri getirir',
        'Reset the design': 'Tasarımı sıfırla',
        /* the pickers (small: one or two short words) */
        'Square': 'Kare',
        'Rounded': 'Yuvarlak',
        'Dots': 'Noktalar',
        'Soft squares': 'Yumuşak kareler',
        'Diamonds': 'Elmaslar',
        'Vertical bars': 'Dikey çubuklar',
        'Horizontal bars': 'Yatay çubuklar',
        'Circle': 'Daire',
        'Leaf': 'Yaprak',
        'Web': 'Web',
        'Mail': 'Posta',
        'Chat': 'Sohbet',
        'Map pin': 'Harita iğnesi',
        'Calendar': 'Takvim',
        'Person': 'Kişi',
        'Payment card': 'Ödeme kartı',
        'Star': 'Yıldız',
        'Heart': 'Kalp',

        /* ---------- Check ---------- */
        'Scan check': 'Tarama testi',
        'Scans reliably and reads back exactly the content': 'Güvenilir şekilde taranabiliyor ve okunan içerik aslıyla tam olarak eşleşiyor',
        'Scans, but only in good conditions': 'Taranabiliyor, ama yalnızca iyi koşullarda',
        'Reads back something else than the content': 'İçerikten farklı bir şey okunuyor',
        'Normal size': 'Normal boyut',
        'Small (3 pixels per module)': 'Küçük (modül başına 3 piksel)',
        'Blurred, with less contrast': 'Bulanık, daha az kontrastlı',
        'The editor reads its own drawing with a QR decoder (jsQR) in your browser. Test the printed code with a phone as well.':
            'Editör kendi çizimini tarayıcınızda bir QR kod çözücüyle (jsQR) okur. Basılı kodu bir telefonla da test edin.',
        'The code': 'Kod',
        'Version': 'Sürüm',
        'Data': 'Veri',
        'Logo covers': 'Logonun kapladığı',
        'Contrast': 'Kontrast',
        'Print size': 'Baskı boyutu',
        'Scanning distance (cm)': 'Mesafe (cm)',
        'Printed width (mm)': 'Baskı genişliği (mm)',
        'Problems': 'Sorunlar',
        'No problems.': 'Sorun yok.',

        /* ---------- Problems ---------- */
        'A SEPA payment code uses error correction M, as the standard requires': 'SEPA ödeme kodu, standardın gerektirdiği gibi M düzeyinde hata düzeltme kullanır',
        'The drawn code reads back something else than the content - check the content for characters the code cannot hold':
            'Çizilen kod tarandığında içerikten farklı bir sonuç çıkıyor - içerikte kodun taşıyamayacağı karakterler olup olmadığını kontrol edin',
        'The drawn code does not scan - raise the contrast, make the logo smaller or choose more error correction':
            'Çizilen kod taranamıyor - kontrastı artırın, logoyu küçültün veya daha yüksek hata düzeltme seçin',
        'The code scans, but not when it is small - simpler shapes, more contrast or more error correction help':
            'Kod taranabiliyor, ama küçükken taranamıyor - daha basit şekiller, daha fazla kontrast veya daha yüksek hata düzeltme yardımcı olur',
        'The code scans, but not when it is blurred or the light is poor - simpler shapes, more contrast or more error correction help':
            'Kod taranabiliyor, ama bulanıkken veya ışık zayıfken taranamıyor - daha basit şekiller, daha fazla kontrast veya daha yüksek hata düzeltme yardımcı olur',
        'Light code on a dark background: many scanners read it, but some older ones do not - dark on light is safest':
            'Koyu arka plan üzerinde açık renkli kod: birçok kod okuyucu okur, ama bazı eskiler okumaz - en güvenlisi açık üzerine koyu',
        'Transparent background: print the code only on a plain, light surface': 'Şeffaf arka plan: kodu yalnızca düz, açık renkli bir yüzeye basın',
        'Round eyes are read by phone cameras, but some scanner apps and devices only find square ones - for codes many people scan, square or rounded eyes are safer':
            'Yuvarlak gözleri telefon kameraları okur, ama bazı kod okuyucu uygulamalar ve cihazlar yalnızca kare olanları bulur - çok kişinin tarayacağı kodlarda kare veya yuvarlatılmış gözler daha güvenlidir',
        'The content is too long for a QR code at this error correction - shorten it or choose L':
            'İçerik bu hata düzeltmeyle bir QR kod için çok uzun - kısaltın veya L seçin',
        'The IBAN is missing': 'IBAN eksik',
        'The IBAN has the wrong form (two letters, two digits, then letters and digits)': 'IBAN biçimi yanlış (iki harf, iki rakam, ardından harfler ve rakamlar)',
        'The check digits of the IBAN do not match - a typing error?': 'IBAN’ın kontrol basamakları eşleşmiyor - yazım hatası mı?',
        'A QR reference has 27 digits': 'QR referansı 27 rakamdan oluşur',
        'The check digit of the QR reference does not match': 'QR referansının kontrol basamağı eşleşmiyor',
        'A creditor reference starts with RF and two check digits, 5 to 25 characters':
            'Alacaklı referansı RF ve iki kontrol basamağıyla başlar, 5 ile 25 karakter arasıdır',
        'The check digits of the creditor reference do not match': 'Alacaklı referansının kontrol basamakları eşleşmiyor',
        'The code has no content yet': 'Kodun henüz içeriği yok',
        'The address contains spaces - encode them as %20': 'Adres boşluk içeriyor - boşlukları %20 olarak kodlayın',
        'The address has no https:// - some scanners show it as text instead of opening it':
            'Adreste https:// yok - bazı kod okuyucular onu açmak yerine metin olarak gösterir',
        'The address uses http:// - the browser may warn that the page is not secure; use https:// if the site has it':
            'Adres http:// kullanıyor - tarayıcı sayfanın güvenli olmadığı uyarısı verebilir; site destekliyorsa https:// kullanın',
        'This is not a valid address': 'Bu geçerli bir adres değil',
        'The network name (SSID) is missing': 'Ağ adı (SSID) eksik',
        'The password is missing (or choose "None" for an open network)': 'Şifre eksik (veya açık ağ için “Yok” seçin)',
        'A WEP key has 5, 13, 16 or 29 characters (or 10, 26, 32, 58 hex digits)': 'WEP anahtarı 5, 13, 16 veya 29 karakterdir (ya da 10, 26, 32, 58 onaltılık basamak)',
        'WEP is not secure - use WPA2 or WPA3 if your router has it': 'WEP güvenli değil - yönlendiriciniz destekliyorsa WPA2 veya WPA3 kullanın',
        'T:SAE is not in the WiFi standard and some scanners do not read it - T:WPA works for WPA2 and WPA3':
            'T:SAE Wi-Fi standardında yok ve bazı kod okuyucular onu okumaz - T:WPA, WPA2 ve WPA3 için çalışır',
        'A WPA password has 8 to 63 characters': 'WPA şifresi 8 ile 63 karakter arasıdır',
        'The contact has no name and no company': 'Kişinin adı ve şirketi yok',
        'The email address looks wrong': 'E-posta adresi yanlış görünüyor',
        'No address - the email app opens with an empty "To"': 'Adres yok - e-posta uygulaması boş bir “Alıcı” ile açılır',
        'The phone number is missing': 'Telefon numarası eksik',
        'The phone number contains other characters than digits and +': 'Telefon numarası rakam ve + dışında karakterler içeriyor',
        'Without the country code (+41 …) the number only works within the country': 'Ülke kodu (+41 …) olmadan numara yalnızca ülke içinde çalışır',
        'Latitude and longitude are needed as numbers, for example 47.6779 and 8.6152': 'Enlem ve boylam sayısal olmalıdır, örneğin 47.6779 ve 8.6152',
        'The latitude lies between -90 and 90, the longitude between -180 and 180': 'Enlem -90 ile 90, boylam -180 ile 180 arasındadır',
        'The event has no BEGIN:VEVENT': 'Etkinlikte BEGIN:VEVENT yok',
        'The event has no END:VEVENT': 'Etkinlikte END:VEVENT yok',
        'The event has no title': 'Etkinliğin başlığı yok',
        'The event has no start': 'Etkinliğin başlangıcı yok',
        'The event ends before it starts': 'Etkinlik başlamadan bitiyor',
        'The address is missing': 'Adres eksik',
        'The amount must be a number with a point, for example 0.005': 'Tutar noktalı bir sayı olmalı, örneğin 0.005',
        'An Ethereum address has 0x and 40 hex digits': 'Ethereum adresi 0x ve 40 onaltılık basamaktan oluşur',
        'This does not look like a Bitcoin address': 'Bu bir Bitcoin adresine benzemiyor',
        'The second line is the version, 001 or 002': 'İkinci satır sürümdür, 001 veya 002',
        'The third line should be 1 (UTF-8)': 'Üçüncü satır 1 (UTF-8) olmalı',
        'The fourth line must be SCT': 'Dördüncü satır SCT olmalı',
        'Version 001 needs a BIC': 'Sürüm 001 için BIC gerekli',
        'The BIC has 8 or 11 letters and digits': 'BIC 8 veya 11 harf ve rakamdan oluşur',
        'The recipient is missing': 'Alıcı eksik',
        'The recipient has more than 70 characters': 'Alıcı 70 karakterden uzun',
        'The amount is between 0.01 and 999999999.99 EUR, with a point and at most two decimals':
            'Tutar 0.01 ile 999999999.99 EUR arasındadır, nokta ile ve en fazla iki ondalık basamakla',
        'The purpose code has 4 letters (for example CHAR, GDDS)': 'Amaç kodu 4 harftir (örneğin CHAR, GDDS)',
        'Either a reference or a message, not both': 'Ya referans ya mesaj, ikisi birden değil',
        'The message has more than 140 characters': 'Mesaj 140 karakterden uzun',
        'The second line is the version 0200': 'İkinci satır 0200 sürümüdür',
        'The third line is the coding type 1': 'Üçüncü satır kodlama türü 1’dir',
        'The Swiss QR bill takes only IBANs of Switzerland and Liechtenstein (CH, LI)':
            'İsviçre QR faturası yalnızca İsviçre ve Lihtenştayn IBAN’larını kabul eder (CH, LI)',
        'The creditor address must be structured (S): street, number, postal code and town in their own lines':
            'Alacaklı adresi yapılandırılmış (S) olmalı: cadde/sokak, numara, posta kodu ve yerleşim yeri ayrı satırlarda',
        'The creditor name is missing': 'Alacaklının adı eksik',
        'Postal code and town of the creditor are needed': 'Alacaklının posta kodu ve yerleşim yeri gerekli',
        'The country of the creditor is two letters, for example CH': 'Alacaklının ülkesi iki harftir, örneğin CH',
        'The ultimate creditor (lines 12 to 18) must stay empty': 'Nihai alacaklı (satır 12 - 18) boş kalmalı',
        'The amount is between 0.01 and 999999999.99, with a point and two decimals': 'Tutar 0.01 ile 999999999.99 arasındadır, nokta ile ve iki ondalık basamakla',
        'The currency is CHF or EUR': 'Para birimi CHF veya EUR’dur',
        'Postal code and town of the payer are needed': 'Ödeyenin posta kodu ve yerleşim yeri gerekli',
        'The payer\'s address must be structured (S)': 'Ödeyenin adresi yapılandırılmış (S) olmalı',
        'The reference type is QRR, SCOR or NON': 'Referans türü QRR, SCOR veya NON’dur',
        'A QR-IBAN needs a QR reference (QRR)': 'QR-IBAN için QR referansı (QRR) gerekli',
        'A QR reference needs a QR-IBAN (an IBAN with 30000 to 31999 after the check digits)':
            'QR referansı için QR-IBAN gerekli (kontrol basamaklarından sonra 30000 ile 31999 arası olan bir IBAN)',
        'From 14 November 2026 a bill in EUR takes only an IBAN with a creditor reference (SCOR) or none - QR-IBAN and QR reference only in CHF':
            '14 Kasım 2026’dan itibaren EUR cinsinden bir fatura yalnızca alacaklı referanslı (SCOR) veya referanssız bir IBAN kabul eder - QR-IBAN ve QR referansı yalnızca CHF’de',
        'Without a reference type the reference line must be empty': 'Referans türü yoksa referans satırı boş olmalı',
        'Message and billing information together have at most 140 characters': 'Mesaj ve fatura bilgisi birlikte en fazla 140 karakterdir',
        'Line 31 must be EPD (end of the payment data)': 'Satır 31 EPD (ödeme verilerinin sonu) olmalı',
        'The Swiss QR bill allows only Latin characters (no emoji, no other scripts)':
            'İsviçre QR faturası yalnızca Latin karakterlerine izin verir (emoji yok, başka alfabe yok)',
    },
    html: {
        /* AI Assistant */
        'Click <b>Copy prompt</b>.': '<b>İstemi kopyala</b> düğmesine tıklayın.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'Yapay zekâ bir bağlantıyla yanıt verir: bağlantıya tıklayın veya yanıtın tamamını aşağıya yapıştırın. <b>Geri al</b> ile geri alınır.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'Yapay zekâ bir bağlantıyla yanıt verir: <b>yanıtın tamamını aşağıya yapıştırın</b> (tıklanan bağlantı ayrı bir editör açar). <b>Geri al</b> ile geri alınır.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'Editör kaydedilen her sürümü kendi sunucunuza (bir <b>webhook</b>) gönderebilir; böylece çalışmanız istediğiniz yerde saklanır. Buraya bir adres girene kadar hiçbir şey gönderilmez.',
        'Also possible: <code>?src=&lt;URL of a .qr file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>qreditor:ai</code>, <code>qreditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'Ayrıca mümkün: <code>?src=&lt;bir .qr dosyasının URL\'si&gt;</code> bir dosya açar, <code>&amp;webhook=&lt;URL&gt;</code> bu belgeyi oraya kaydeder. Editör kendi penceresinde de açılabilir (<code>?embed=window</code>) ve sayfanız ona kendi yapay zekâ istemini ve bir oturum anahtarını verebilir; böylece yapay zekâ sonucunu sunucunuza gönderir (<code>qreditor:ai</code>, <code>qreditor:key-request</code>) - editörün altındaki “Editörü kendi web sitenizde kullanın” bölümüne bakın. Ayrıntılar <a href="/llms.txt">llms.txt</a> dosyasındadır.',

        /* Help */
        '<b>Choose what the code holds</b> under <b>New</b> or in the <b>Content</b> tab: a link, WiFi, a contact, an event, a payment … The form writes the content in the form phones read.':
            '<b>Kodun içeriğini seçin</b>: <b>Yeni</b> menüsünde veya <b>İçerik</b> sekmesinde bağlantı, Wi-Fi, kişi, etkinlik, ödeme … Form içeriği telefonların okuduğu biçimde yazar.',
        '<b>Design it</b> in the <b>Design</b> tab: colors and gradient, the shape of the modules and of the three eyes, a logo, a caption and a frame.':
            '<b>Tasarlayın</b>: <b>Tasarım</b> sekmesinde renkler ve geçiş, modüllerin ve üç gözün şekli, logo, yazı ve çerçeve.',
        'The <b>code</b> on the left is the whole QR document: design lines <code>key: value</code>, a line <code>---</code>, then the content exactly as it goes into the code. You can type there too; every change is one step for Undo.':
            'Soldaki <b>kod</b> QR belgesinin tamamıdır: <code>key: value</code> tasarım satırları, bir <code>---</code> satırı, ardından koda girdiği haliyle içerik. Oraya da yazabilirsiniz; her değişiklik bir geri alma adımıdır.',
        '<b>Check</b>: after every change the editor reads the code back - normal, small and blurred. The badge above the code says whether it scans; the <b>Check</b> tab shows contrast, quiet zone, the logo against the error correction and the print size.':
            '<b>Kontrol</b>: her değişiklikten sonra editör kodu geri okur - normal, küçük ve bulanık. Kodun üstündeki rozet taranıp taranamadığını gösterir; <b>Kontrol</b> sekmesi kontrastı, sessiz bölgeyi, logonun boyutunu hata düzeltme kapasitesine göre ve baskı boyutunu gösterir.',
        'Click the <b>caption</b> under the code to change it right there.':
            'Kodun altındaki <b>yazıya</b> tıklayarak onu yerinde değiştirin.',
        '<b>Export</b> makes SVG, PDF and EPS (vectors for print), PNG, JPEG or WebP up to 8192 pixels wide, and <b>many codes at once</b> from a table: write <code>{{column}}</code> in the content, paste the table, download a ZIP or one PDF.':
            '<b>Dışa aktar</b> SVG, PDF ve EPS (baskı için vektör), 8192 piksel genişliğe kadar PNG, JPEG veya WebP ve bir tablodan <b>aynı anda çok sayıda kod</b> oluşturur: içeriğe <code>{{column}}</code> yazın, tabloyu yapıştırın, bir ZIP veya tek bir PDF indirin.',
        '<b>Read a code</b>: open, drop or paste a picture, or click <b>Read code</b> for the camera. The content becomes a new document.':
            '<b>Kod okuyun</b>: bir resmi açın, bırakın veya yapıştırın ya da kamera için <b>Kodu oku</b> düğmesine tıklayın. İçerik yeni bir belge olur.',

    },
    patterns: [
        ['^(\\d+) bytes? · version (\\d+) \\((\\d+) × (\\d+) modules\\)$', (m, n, v, a, b) => ((n, v, a, b) => `${n} bayt · sürüm ${v} (${a} × ${b} modül)`)(n, v, a, b)],
        ['^(\\d+) bytes?$', (m, n) => (n => `${n} bayt`)(n)],
        /* ---------- Code, problems above the code ---------- */
        ['^(\\d+) (?:line|lines) · (.+)$', (m, l, s) => `${l} satır · ${formatSize(s)}`],
        ['^(\\d+) (?:error|errors)$', (m, k) => `${k} hata`],
        ['^(· )?(\\d+) (?:note|notes)$', (m, p, k) => `${p || ''}${k} not`],
        ['^Line (\\d+)$', 'Satır $1'],

        /* ---------- Check ---------- */
        ['^- repairs about (\\d+) %$', '- yaklaşık %$1 onarır'],
        ['^(\\d+) of (\\d+) bytes \\((\\d+) %\\)$', '$1 / $2 bayt (%$3)'],
        ['^(\\d+) % of the modules$', 'modüllerin %$1 kadarı'],
        ['^From ([\\d.]+) cm the code should be at least ([\\d.]+) cm wide\\.$',
            (m, d, w) => `${formatDecimal(d)} cm mesafeden kod en az ${formatDecimal(w)} cm genişliğinde olmalı.`],
        ['^At ([\\d.]+) mm one module is ([\\d.]+) mm ✓$', (m, a, b) => `${formatDecimal(a)} mm genişlikte bir modül ${formatDecimal(b)} mm ✓`],
        ['^At ([\\d.]+) mm one module is ([\\d.]+) mm - below 0\\.4 mm many phones fail; print it larger !$',
            (m, a, b) => `${formatDecimal(a)} mm genişlikte bir modül ${formatDecimal(b)} mm - 0,4 mm altında birçok telefon okuyamaz; daha büyük basın!`],

        /* ---------- Export ---------- */
        ['^(\\d+) × (\\d+) pixels = ([\\d.]+) mm at (\\d+) dpi$', (m, w, h, mm, d) => `${w} × ${h} piksel = ${formatDecimal(mm)} mm (${d} dpi)`],
        ['^(\\d+) × (\\d+) pixels$', '$1 × $2 piksel'],
        ['^One module ([\\d.]+) mm$', (m, v) => `Bir modül ${formatDecimal(v)} mm`],
        ['^One module ([\\d.]+) mm - below 0\\.4 mm many phones fail$', (m, v) => `Bir modül ${formatDecimal(v)} mm - 0,4 mm altında birçok telefon okuyamaz`],
        ['^([\\d.]+) × ([\\d.]+) mm$', (m, a, b) => `${formatDecimal(a)} × ${formatDecimal(b)} mm`],
        ['^(\\d+) (?:row|rows) · (.+)$', '$1 satır · $2'],
        ['^At most (\\d+) rows at once$', 'Aynı anda en fazla $1 satır'],
        ['^Left out \\(content too long\\): lines (.+)$', 'Atlandı (içerik çok uzun): satır $1'],
        ['^(\\d+) (?:code|codes) made$', '$1 kod oluşturuldu'],
        ['^(\\d+) (?:code|codes) made - (\\d+) left out$', '$1 kod oluşturuldu - $2 atlandı'],

        /* ---------- Problems with values ---------- */
        ['^The Swiss QR bill is drawn as its standard requires - (.+) (is|are) not used$',
            'İsviçre QR faturası standardının gerektirdiği gibi çizilir - $1 kullanılmaz'],
        ['^Contrast ([\\d.]+):1 between (#[0-9a-fA-F]+) and the background is too low - scanners need at least 3:1, better 4\\.5:1 or more$',
            (m, r, c) => `${c} ile arka plan arasındaki ${formatDecimal(r)}:1 kontrast çok düşük - kod okuyucular en az 3:1, tercihen 4,5:1 veya daha fazlasına ihtiyaç duyar`],
        ['^Contrast ([\\d.]+):1 between (#[0-9a-fA-F]+) and the background is low - 4\\.5:1 or more scans reliably, also in poor light$',
            (m, r, c) => `${c} ile arka plan arasındaki ${formatDecimal(r)}:1 kontrast düşük - 4,5:1 veya daha fazlası zayıf ışıkta da güvenilir şekilde taranır`],
        ['^A quiet zone of (\\d+) (?:module|modules) is too small - the standard asks for 4, with less than 2 many scanners fail$',
            '$1 modüllük sessiz bölge çok küçük - standart 4 ister, 2’den az olduğunda birçok kod okuyucu okuyamaz'],
        ['^The quiet zone has (\\d+) modules - the standard asks for 4 \\(a light frame of 4 modules around the code\\)$',
            'Sessiz bölge $1 modül - standart 4 ister (kodun çevresinde 4 modüllük açık renkli bir çerçeve)'],
        ['^The logo hides about (\\d+) % of the code, error correction ([LMQH]) repairs at most (\\d+) % - make the logo smaller or choose error correction H$',
            'Logo kodun yaklaşık %$1 kadarını gizliyor, $2 hata düzeltme en fazla %$3 onarır - logoyu küçültün veya H hata düzeltmeyi seçin'],
        ['^The logo hides about (\\d+) % of the code, error correction ([LMQH]) repairs at most (\\d+) % - little room is left for dirt and damage; H is safer$',
            'Logo kodun yaklaşık %$1 kadarını gizliyor, $2 hata düzeltme en fazla %$3 onarır - kir ve hasar için az pay kalıyor; H daha güvenli'],
        ['^A logo takes away part of the code: error correction Q or H keeps it readable \\(now ([LMQH])\\)$',
            'Logo kodun bir kısmını kaplar: Q veya H hata düzeltme kodu okunabilir tutar (şu an $1)'],
        ['^Unknown key "(.+)" - it is kept, but has no effect$', 'Bilinmeyen anahtar “$1” - korunur ama etkisi yoktur'],
        ['^"(.+)" is set twice - the last line counts$', '“$1” iki kez ayarlanmış - son satır geçerlidir'],
        ['^"(.+)" is not valid \\(([^()]+)\\) - the default is used$', (m, v, h) => `“${v}” geçerli değil (${translateHint(h)}) - varsayılan değer kullanılır`],
        ['^An IBAN of ([A-Z]{2}) has (\\d+) characters, this one (\\d+)$', '$1 için IBAN $2 karakterdir, bu $3 karakter'],
        ['^(.+) is a link shortener or redirect service: the code works only as long as that service keeps the link - for printed codes put the real address in the code$',
            '$1 bir bağlantı kısaltıcı veya yönlendirme hizmetidir: kod yalnızca bu hizmet bağlantıyı koruduğu sürece çalışır - basılı kodlarda gerçek adresi koda koyun'],
        ['^The SEPA code has (\\d+) bytes, at most 331 are allowed$', 'SEPA kodu $1 bayt, en fazla 331 bayta izin verilir'],
        ['^Line (\\d+) has more than (\\d+) characters$', 'Satır $1, $2 karakterden uzun'],
        ['^The Swiss QR bill has (\\d+) characters, at most 997 are allowed$', 'İsviçre QR faturası $1 karakter, en fazla 997 karaktere izin verilir'],

        /* ---------- Messages ---------- */
        ['^(Link|Text|WiFi|Contact|Email|SMS|Phone|Location|Event|Crypto|SEPA payment|Swiss QR bill) - "Undo" brings the previous content back$',
            (m, k) => `${TYPES[k]} - “Geri al” önceki içeriği geri getirir`],
        ['^No QR code found in "the clipboard"$', 'Panoda QR kod bulunamadı'],
        ['^No QR code found in "(.+)"$', '“$1” içinde QR kod bulunamadı'],
        ['^QR code read \\((.+)\\) from "the camera" - it is a new document$', 'QR kod kameradan okundu ($1) - yeni bir belge oldu'],
        ['^QR code read \\((.+)\\) from "the clipboard" - it is a new document$', 'QR kod panodan okundu ($1) - yeni bir belge oldu'],
        ['^QR code read \\((.+)\\) from "(.+)" - it is a new document$', 'QR kod “$2” dosyasından okundu ($1) - yeni bir belge oldu'],
        ['^QR code read \\((.+)\\) - it is a new document$', 'QR kod okundu ($1) - yeni bir belge oldu'],
        ['^QR code received - the editor found (\\d+) (?:problem|problems)$', 'QR kod alındı - editör $1 sorun buldu'],
        /* the same messages when they arrive in English as a whole */
        ['^"(.+)" is open\\. My documents: open, rename, duplicate or delete your documents \\(Ctrl\\+O\\)$',
            '“$1” açık. Belgelerim: belgelerinizi açın, yeniden adlandırın, çoğaltın veya silin (Ctrl+O)'],
        ['^New document "(.+)" - your other documents are under "My documents"$', 'Yeni belge “$1” - diğer belgeleriniz “Belgelerim” altında'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$', 'Yapay zekâdan yeni belge “$1” - diğer belgeleriniz değişmedi'],
        ['^"(.+)" is neither a \\.qr file nor a picture$', '“$1” ne bir .qr dosyası ne de bir resim'],
        ['^"(.+)" opened - it is now in "My documents"$', '“$1” açıldı - artık “Belgelerim” içinde'],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '“$1” yapay zekâ tarafından değiştirildi - “Geri al” bunu geri alır'],
        ['^"(.+)" opened$', '“$1” açıldı'],

        /* ---------- My documents ---------- */
        ['^(\\d+) (?:document|documents) · (.+) in this browser$', (m, k, s) => `${k} belge · bu tarayıcıda ${formatSize(s)}`],
        ['^No document named "(.*)"\\.$', '“$1” adında belge yok.'],
        ['^Open now · (.+)$', (m, s) => `Şu an açık · ${formatSize(s)}`],
        ['^(just now|yesterday|\\d+ min ago|\\d+ h ago|[A-Z][a-z]{2} \\d{1,2}, \\d{4}) · (.+)$', (m, w, s) => `${formatTime(w)} · ${formatSize(s)}`],
        ['^(.+) \\(open now\\)$', '$1 (şu an açık)'],
        ['^ZIP with (\\d+) (?:document|documents) downloaded$', '$1 belge içeren ZIP indirildi'],
        ['^"(.+)" duplicated$', '“$1” çoğaltıldı'],
        ['^Delete "(.+)"\\?$', '“$1” silinsin mi?'],
        ['^"(.+)" deleted$', '“$1” silindi'],

        /* ---------- AI Assistant ---------- */
        ['^Part (\\d+) of (\\d+) received$', 'Bölüm $1 / $2 alındı'],
        ['^Open the other (?:link|links) from the AI too \\(still missing: part (.+)\\)\\.$', 'Yapay zekânın diğer bağlantılarını da açın (hâlâ eksik: bölüm $1).'],
        ['^Part (\\d+) of (\\d+) received - paste the other (?:link|links) too \\(missing: (.+)\\)$', 'Bölüm $1 / $2 alındı - diğer bağlantıları da yapıştırın (eksik: $3)'],
        ['^The AI sends the document to (.+) with a key that only works for this session\\. What you paste into your AI is handled by its provider\\.$',
            'Yapay zekâ belgeyi yalnızca bu oturumda geçerli bir anahtarla $1 adresine gönderir. Yapay zekânıza yapıştırdığınız içerik, onun sağlayıcısı tarafından işlenir.'],
        ['^The AI sends its result to (.+) by itself, and it opens here\\. If it answers with a link, paste its answer below\\.$',
            'Yapay zekâ sonucunu kendisi $1 adresine gönderir ve sonuç burada açılır. Bir bağlantıyla yanıt verirse yanıtını aşağıya yapıştırın.'],
        ['^No key from (.+) - the prompt asks the AI for a link instead$', '$1 kaynağından anahtar yok - istem bunun yerine yapay zekâdan bir bağlantı ister'],
        ['^Prompt copied - the AI sends its result to (.+)$', 'İstem kopyalandı - yapay zekâ sonucunu $1 adresine gönderir'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', '$1 aç'],
    ],
};
