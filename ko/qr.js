/* Korean texts of the QR editor: the bar, the work area (code, the drawn
   code, Content, Design and Check), its dialogs and messages, and the
   problems the editor finds in the content and the design. What all editors
   share is in common.js; how the dictionaries are used is described in
   i18n.js. Names of documents, design keys, colors and values stay as they
   are: the patterns copy them into the Korean text. */

const MONTH = { Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6, Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12 };
/* When a document was last changed (files.js): "just now", "5 min ago", "Oct 25, 2026" … */
/**
 * Translates when a document last changed ("just now", "5 min ago", "Oct 25, 2026").
 * @param {string} s - the English time text.
 * @returns {string} the text in the language.
 */
function formatTime(s) {
    if (s === 'just now') return '방금';
    if (s === 'yesterday') return '어제';
    let m = /^(\d+) min ago$/.exec(s);
    if (m) return `${m[1]}분 전`;
    m = /^(\d+) h ago$/.exec(s);
    if (m) return `${m[1]}시간 전`;
    m = /^([A-Z][a-z]{2}) (\d{1,2}), (\d{4})$/.exec(s);
    if (m) return `${m[3]}년 ${MONTH[m[1]] || m[1]}월 ${m[2]}일`;
    return s;
}
/* "123 bytes" / "1.5 KB" -> Korean unit */
/**
 * Translates the unit of a size text ("123 bytes").
 * @param {string} s - the English size text.
 * @returns {string} the text in the language.
 */
const formatSize = s => s.replace(/ bytes$/, '바이트');
/* The content types (payload.js TYPE_NAMES), for messages that name one in English */
const TYPES = {
    Link: '링크', Text: '텍스트', WiFi: 'Wi-Fi', Contact: '연락처', Email: '이메일', SMS: '문자', Phone: '전화',
    Location: '위치', Event: '일정', Crypto: '암호화폐', 'SEPA payment': 'SEPA 결제', 'Swiss QR bill': '스위스 QR 청구서',
};
/* The hints of a design value that is not valid (qrdoc.js KEYS) */
/**
 * Translates the text the pattern found (hint in the English pattern).
 * @param {string} h - the English text the pattern found.
 * @returns {string} the text in the language.
 */
function translateHint(h) {
    const fixed = {
        'auto or 1 to 40': 'auto 또는 1~40',
        'auto or 0 to 7': 'auto 또는 0~7',
        '0 to 20 modules': '0~20 모듈',
        'a color like #1d2b53': '#1d2b53 같은 색',
        '0 to 360 degrees': '0~360도',
        'a color like #ffffff, or transparent': '#ffffff 같은 색 또는 transparent',
        '5 to 30 percent': '5~30%',
    }[h];
    if (fixed) return fixed;
    const m = /^none, (.+) or a picture as (data:.+)$/.exec(h);
    return m ? `none, ${m[1]} 또는 이미지(${m[2]})` : h;
}

export default {
    text: {
        /* ---------- Side panel: a column on the desktop ---------- */
        'Side panel': '사이드 패널',
        'Show or hide the side panel': '사이드 패널 표시 또는 숨기기',
        /* ---------- Top bar ---------- */
        'QR Editor - home': 'QR 편집기 - 홈',
        'QR Editor': 'QR 편집기',
        'online': '온라인',
        'File': '파일',
        'My documents (Ctrl+O)': '내 문서 (Ctrl+O)',
        'My documents': '내 문서',
        'New QR code': '새 QR 코드',
        'New': '새로 만들기',
        'A web address - opens the page': '웹 주소 - 페이지를 엽니다',
        'Join the network without typing the password': '비밀번호 입력 없이 네트워크에 연결',
        'vCard or MeCard - saves name, phone and email': 'vCard 또는 MeCard - 이름, 전화번호, 이메일 저장',
        'Adds a date to the calendar': '캘린더에 일정 추가',
        'Address, subject and text': '주소, 제목, 본문',
        'Number and message': '번호와 메시지',
        'Calls a number': '번호로 전화 걸기',
        'Opens a place in the map app': '지도 앱에서 장소 열기',
        'EPC GiroCode for banking apps in the euro area': '유로 지역 뱅킹 앱용 EPC GiroCode',
        'The QR code of a Swiss payment slip': '스위스 납부 전표의 QR 코드',
        'Crypto payment': '암호화폐 결제',
        'Bitcoin, Ethereum and others': '비트코인, 이더리움 등',
        'Any text': '자유 텍스트',
        'The welcome example': '환영 예제',
        'A designed WiFi code with logo and caption': '로고와 캡션으로 꾸민 Wi-Fi 코드',
        'Open a .qr file, or read a QR code from a picture (you can also drag it into the window or paste it)':
            '.qr 파일을 열거나 이미지에서 QR 코드를 읽습니다 (창으로 끌어 놓거나 붙여 넣을 수도 있습니다)',
        'Open file…': '파일 열기…',
        'Read a QR code with the camera': '카메라로 QR 코드 읽기',
        'Read code': '코드 읽기',
        'Undo the last change (Ctrl+Z)': '마지막 변경 실행 취소 (Ctrl+Z)',
        'Undo': '실행 취소',
        'Redo the change you just undid (Ctrl+Y)': '방금 취소한 변경 다시 실행 (Ctrl+Y)',
        'Redo': '다시 실행',
        'Output': '출력',
        'Color theme': '색 테마',
        'Light theme': '밝은 테마',
        'Dark theme': '어두운 테마',
        'Same as your system setting': '시스템 설정과 같게',
        'Automatic theme (system setting)': '자동 테마(시스템 설정)',
        'Let any AI write in this editor': '어떤 AI든 이 편집기에서 쓰게 하기',
        'AI Assistant': 'AI 도우미',
        'Save to your own server and embed the editor in your website': '내 서버에 저장하고 편집기를 웹사이트에 삽입',
        'Save to server': '서버에 저장',
        'How it works and keyboard shortcuts (?)': '사용 방법과 단축키 (?)',
        'Help': '도움말',
        'Save the QR code as an SVG picture (Ctrl+S)': 'QR 코드를 SVG 이미지로 저장 (Ctrl+S)',
        'Download SVG': 'SVG 다운로드',
        'SVG, PNG, PDF, EPS, many codes from a table (Ctrl+E)': 'SVG, PNG, PDF, EPS, 표로 여러 코드 만들기 (Ctrl+E)',
        'Export…': '내보내기…',

        /* ---------- Views and work area ---------- */
        'View': '보기',
        'Code': '코드',
        'QR code': 'QR 코드',
        'Edit': '편집',
        'QR document': 'QR 문서',
        'Copy the QR document to the clipboard': 'QR 문서를 클립보드에 복사',
        'Copy code': '코드 복사',
        'Copy': '복사',
        'QR document: design lines, a line ---, then the content': 'QR 문서: 디자인 줄, --- 줄, 그다음 내용',
        'Drag to change the width of the code area': '끌어서 코드 영역의 너비 변경',
        'Drag to change the width': '끌어서 너비 변경',
        'Show the details of the scan check': '스캔 검사의 세부 정보 표시',
        'Checking…': '검사 중…',
        'No code': '코드 없음',
        'Scans': '스캔 가능',
        'Scans in good conditions': '좋은 조건에서 스캔 가능',
        'Does not scan': '스캔 불가',
        'version': '버전',
        'error correction': '오류 정정',
        'Type the content below the line --- in the code, or choose a type under Edit.': '코드의 --- 줄 아래에 내용을 입력하거나 “편집”에서 유형을 선택하세요.',
        'What the code holds: link, WiFi, contact, payment …': '코드에 담길 내용: 링크, Wi-Fi, 연락처, 결제 …',
        'Content': '내용',
        'Colors, shapes, logo, caption and frame': '색, 모양, 로고, 캡션, 테두리',
        'Design': '디자인',
        'Scan check, contrast, print size': '스캔 검사, 대비, 인쇄 크기',
        'Check': '검사',
        'Open it here': '여기에서 열기',
        'Drop a .qr file or a picture with a QR code here': '.qr 파일이나 QR 코드 이미지를 여기에 놓으세요',
        'Hide': '숨기기',
        'Show': '표시',
        'Caption': '캡션',

        /* ---------- Content types and their forms ---------- */
        'Link': '링크',
        'Text': '텍스트',
        'WiFi': 'Wi-Fi',
        'Contact': '연락처',
        'Email': '이메일',
        'SMS': '문자',
        'Phone': '전화',
        'Location': '위치',
        'Event': '일정',
        'Crypto': '암호화폐',
        'SEPA payment': 'SEPA 결제',
        'Swiss QR bill': '스위스 QR 청구서',
        'Kind of content': '내용 유형',
        'The code opens this address. A link shortener or redirect service makes the code depend on that service - the editor warns about it.':
            '코드가 이 주소를 엽니다. 단축 URL이나 리디렉션 서비스를 쓰면 코드가 그 서비스에 의존하게 되며, 편집기가 이를 경고합니다.',
        'Any text; phones show it as it is.': '어떤 텍스트든 입력할 수 있으며, 휴대폰은 그대로 보여 줍니다.',
        'Phones join the network when the code is scanned (Android, iPhone with iOS 11 and later).': '코드를 스캔하면 휴대폰이 네트워크에 연결됩니다 (Android, iOS 11 이상의 iPhone).',
        'vCard is read by all phones; MeCard makes a smaller code with fewer fields.': 'vCard는 모든 휴대폰에서 읽을 수 있고, MeCard는 항목이 적은 대신 코드가 더 작습니다.',
        'Opens a new email with address, subject and text.': '주소, 제목, 본문이 들어간 새 이메일을 엽니다.',
        'Opens a text message to this number.': '이 번호로 보내는 문자 메시지를 엽니다.',
        'Offers to call this number - with the country code it works everywhere.': '이 번호로 전화를 걸도록 제안합니다. 국가 번호를 붙이면 어디서나 작동합니다.',
        'Opens the place in the map app.': '지도 앱에서 장소를 엽니다.',
        'Adds the event to the calendar (times are local times).': '캘린더에 일정을 추가합니다 (시간은 현지 시간).',
        'A payment request for wallet apps.': '지갑 앱용 결제 요청입니다.',
        'For banking apps in the euro area (SEPA credit transfer, EPC GiroCode). Error correction M as the standard requires.':
            '유로 지역 뱅킹 앱용 (SEPA 계좌 이체, EPC GiroCode). 표준에 따라 오류 정정 M을 사용합니다.',
        'The QR code of a Swiss QR bill (Implementation Guidelines 2.3 / 2.4). Drawn with the Swiss cross and error correction M; print it 46 × 46 mm.':
            '스위스 QR 청구서의 QR 코드 (구현 지침 2.3 / 2.4). 스위스 십자와 오류 정정 M으로 그려지며, 46 × 46 mm로 인쇄하세요.',
        'Make a QR reference from a number': '번호로 QR 참조 번호 만들기',
        'Make an RF reference from a number': '번호로 RF 참조 번호 만들기',
        'Address (URL)': '주소 (URL)',
        'Network name (SSID)': '네트워크 이름 (SSID)',
        'Security': '보안',
        'WEP (old)': 'WEP (구형)',
        'None (open network)': '없음 (개방형 네트워크)',
        'Password': '비밀번호',
        'Hidden network': '숨겨진 네트워크',
        'Format': '형식',
        'vCard 3.0 (all phones)': 'vCard 3.0 (모든 휴대폰)',
        'MeCard (smaller code)': 'MeCard (더 작은 코드)',
        'First name': '이름',
        'Last name': '성',
        'Company': '회사',
        'Job title': '직함',
        'Mobile': '휴대폰',
        'Phone (work)': '전화 (직장)',
        'Website': '웹사이트',
        'Street and number': '도로명과 번지',
        'Postal code': '우편번호',
        'City': '도시',
        'Region': '지역',
        'Country': '국가',
        'Note': '메모',
        'To': '받는 사람',
        'Subject': '제목',
        'Message': '메시지',
        'Phone number': '전화번호',
        'Latitude': '위도',
        'Longitude': '경도',
        'Name of the place (optional)': '장소 이름 (선택 사항)',
        'Title': '제목',
        'All day': '종일',
        'Start': '시작',
        'End': '종료',
        'Place': '장소',
        'Description': '설명',
        'Currency': '통화',
        'Address': '주소',
        'Amount (optional)': '금액 (선택 사항)',
        'Recipient (optional)': '수취인 (선택 사항)',
        'Message (optional)': '메시지 (선택 사항)',
        'Recipient': '수취인',
        'BIC (optional)': 'BIC (선택 사항)',
        'Amount in EUR (optional)': '금액(EUR) (선택 사항)',
        'Creditor reference RF… (or a message below)': '채권자 참조 번호 RF… (또는 아래 메시지)',
        'Message to the recipient': '수취인에게 보내는 메시지',
        'Purpose code (optional, e.g. CHAR)': '목적 코드 (선택 사항, 예: CHAR)',
        'Note for the payer (optional)': '지급인을 위한 메모 (선택 사항)',
        'IBAN or QR-IBAN of the creditor (CH or LI)': '수취인의 IBAN 또는 QR-IBAN (CH 또는 LI)',
        'Creditor name': '수취인 이름',
        'Street': '도로명',
        'Number': '번지',
        'Town': '시/읍',
        'Country (2 letters)': '국가 (2글자)',
        'Amount (empty: the payer fills it in)': '금액 (비우면 지급인이 입력)',
        'Reference': '참조 번호',
        'No reference': '참조 번호 없음',
        'QR reference (with a QR-IBAN)': 'QR 참조 번호 (QR-IBAN과 함께)',
        'Creditor reference (RF…)': '채권자 참조 번호 (RF…)',
        'Reference number': '참조 번호',
        'Additional information (message)': '추가 정보 (메시지)',
        'Billing information (optional, //S1/…)': '청구 정보 (선택 사항, //S1/…)',
        'Payable by: name (optional)': '지급인: 이름 (선택 사항)',

        /* ---------- Design ---------- */
        'A Swiss QR bill is always drawn as the standard requires: black squares on white, the Swiss cross, error correction M. These settings apply to the other codes.':
            '스위스 QR 청구서는 항상 표준대로 그려집니다: 흰 바탕에 검은 사각형, 스위스 십자, 오류 정정 M. 이 설정은 다른 코드에 적용됩니다.',
        'Colors': '색',
        'Dark color': '어두운 색',
        'Background': '배경',
        'Transparent background': '투명 배경',
        'Gradient': '그라데이션',
        'None': '없음',
        'Linear': '선형',
        'Radial': '방사형',
        'Second color': '두 번째 색',
        'Angle': '각도',
        'Modules': '모듈',
        'Eyes': '위치 패턴',
        'Frame': '테두리',
        'Center': '가운데',
        'Module shape': '모듈 모양',
        'Eye frame': '위치 패턴 테두리',
        'Eye center': '위치 패턴 중심',
        'Square': '사각형',
        'Rounded': '둥근 모서리',
        'Dots': '점',
        'Soft squares': '부드러운 네모',
        'Diamonds': '마름모',
        'Vertical bars': '세로 막대',
        'Horizontal bars': '가로 막대',
        'Circle': '원',
        'Leaf': '잎',
        'Own color for the eyes': '위치 패턴에 별도 색 사용',
        'Eye color': '위치 패턴 색',
        'Logo': '로고',
        'No logo': '로고 없음',
        'Web': '웹',
        'Mail': '메일',
        'Chat': '채팅',
        'Map pin': '지도 핀',
        'Calendar': '캘린더',
        'Person': '사람',
        'Payment card': '결제 카드',
        'Star': '별',
        'Heart': '하트',
        'Your own picture (PNG, JPEG, SVG, WebP) - it becomes part of the document': '내 이미지 (PNG, JPEG, SVG, WebP) - 문서의 일부가 됩니다',
        'Picture…': '이미지…',
        'Logo size': '로고 크기',
        'Remove the modules behind the logo': '로고 뒤의 모듈 제거',
        'Caption and frame': '캡션과 테두리',
        'Position': '위치',
        'Below the code': '코드 아래',
        'Above the code': '코드 위',
        // "Line" is also the start of "Line 5" above the code: see the patterns
        'Line': '선',
        'Filled': '채우기',
        'Frame and caption color': '테두리와 캡션 색',
        'Error correction and size': '오류 정정과 크기',
        'Error correction': '오류 정정',
        'Quiet zone (modules)': '여백 (모듈)',
        'Smallest version': '최소 버전',
        'Automatic': '자동',
        'Mask': '마스크',
        'Use a higher error correction when it fits in the same size': '같은 크기에 들어가면 더 높은 오류 정정 사용',
        'Removes all design lines - "Undo" brings them back': '모든 디자인 줄을 제거합니다. “실행 취소”로 되돌릴 수 있습니다',
        'Reset the design': '디자인 초기화',

        /* ---------- Check ---------- */
        'Scan check': '스캔 검사',
        'Scans reliably and reads back exactly the content': '안정적으로 스캔되며 내용이 정확히 읽힙니다',
        'Scans, but only in good conditions': '스캔되지만 좋은 조건에서만 됩니다',
        'Reads back something else than the content': '내용과 다른 것이 읽힙니다',
        'Normal size': '보통 크기',
        'Small (3 pixels per module)': '작게 (모듈당 3픽셀)',
        'Blurred, with less contrast': '흐리게, 낮은 대비',
        'The editor reads its own drawing with a QR decoder (jsQR) in your browser. Test the printed code with a phone as well.':
            '편집기는 브라우저 안에서 QR 디코더(jsQR)로 직접 그린 코드를 읽습니다. 인쇄한 코드도 휴대폰으로 시험해 보세요.',
        'The code': '코드',
        'Version': '버전',
        'Data': '데이터',
        'Logo covers': '로고가 가리는 부분',
        'Contrast': '대비',
        'Print size': '인쇄 크기',
        'Scanning distance (cm)': '스캔 거리 (cm)',
        'Printed width (mm)': '인쇄 너비 (mm)',
        'Problems': '문제',
        'No problems.': '문제가 없습니다.',

        /* ---------- Problems ---------- */
        'The drawn code reads back something else than the content - check the content for characters the code cannot hold':
            '그린 코드에서 내용과 다른 것이 읽힙니다. 코드에 담을 수 없는 문자가 내용에 있는지 확인하세요',
        'The drawn code does not scan - raise the contrast, make the logo smaller or choose more error correction':
            '그린 코드가 스캔되지 않습니다. 대비를 높이거나 로고를 줄이거나 오류 정정을 높이세요',
        'A SEPA payment code uses error correction M, as the standard requires': 'SEPA 결제 코드는 표준에 따라 오류 정정 M을 사용합니다',
        'The content is too long for a QR code at this error correction - shorten it or choose L': '이 오류 정정에서는 내용이 너무 길어 QR 코드에 들어가지 않습니다. 줄이거나 L을 선택하세요',
        'Light code on a dark background: many scanners read it, but some older ones do not - dark on light is safest':
            '어두운 배경의 밝은 코드: 많은 스캐너가 읽지만 일부 오래된 스캐너는 읽지 못합니다. 밝은 바탕에 어두운 코드가 가장 안전합니다',
        'Transparent background: print the code only on a plain, light surface': '투명 배경: 무늬 없는 밝은 표면에만 인쇄하세요',
        'Round eyes are read by phone cameras, but some scanner apps and devices only find square ones - for codes many people scan, square or rounded eyes are safer':
            '원형 위치 패턴은 휴대폰 카메라로 읽히지만, 일부 스캐너 앱과 기기는 사각형 위치 패턴만 찾습니다. 많은 사람이 스캔하는 코드에는 사각형이나 모서리가 둥근 위치 패턴이 더 안전합니다',
        'The code has no content yet': '코드에 아직 내용이 없습니다',
        'The address contains spaces - encode them as %20': '주소에 공백이 있습니다. %20으로 인코딩하세요',
        'The address has no https:// - some scanners show it as text instead of opening it': '주소에 https://가 없습니다. 일부 스캐너는 열지 않고 텍스트로 보여 줍니다',
        'The address uses http:// - the browser may warn that the page is not secure; use https:// if the site has it':
            '주소가 http://를 사용합니다. 브라우저가 안전하지 않은 페이지라고 경고할 수 있으니, 사이트가 지원하면 https://를 사용하세요',
        'This is not a valid address': '유효한 주소가 아닙니다',
        'The network name (SSID) is missing': '네트워크 이름(SSID)이 없습니다',
        'The password is missing (or choose "None" for an open network)': '비밀번호가 없습니다 (개방형 네트워크라면 “없음”을 선택하세요)',
        'A WEP key has 5, 13, 16 or 29 characters (or 10, 26, 32, 58 hex digits)': 'WEP 키는 5, 13, 16, 29자입니다 (또는 16진수 10, 26, 32, 58자리)',
        'WEP is not secure - use WPA2 or WPA3 if your router has it': 'WEP는 안전하지 않습니다. 공유기가 지원하면 WPA2나 WPA3를 사용하세요',
        'T:SAE is not in the WiFi standard and some scanners do not read it - T:WPA works for WPA2 and WPA3':
            'T:SAE는 Wi-Fi 표준에 없어 일부 스캐너가 읽지 못합니다. T:WPA는 WPA2와 WPA3에 모두 작동합니다',
        'A WPA password has 8 to 63 characters': 'WPA 비밀번호는 8~63자입니다',
        'The contact has no name and no company': '연락처에 이름도 회사도 없습니다',
        'The email address looks wrong': '이메일 주소가 잘못된 것 같습니다',
        'No address - the email app opens with an empty "To"': '주소가 없습니다. 이메일 앱이 “받는 사람”이 빈 채로 열립니다',
        'The phone number is missing': '전화번호가 없습니다',
        'The phone number contains other characters than digits and +': '전화번호에 숫자와 + 외의 문자가 있습니다',
        'Without the country code (+41 …) the number only works within the country': '국가 번호(+41 …)가 없으면 그 나라 안에서만 작동합니다',
        'Latitude and longitude are needed as numbers, for example 47.6779 and 8.6152': '위도와 경도를 숫자로 입력해야 합니다 (예: 47.6779와 8.6152)',
        'The latitude lies between -90 and 90, the longitude between -180 and 180': '위도는 -90~90, 경도는 -180~180 사이입니다',
        'The event has no BEGIN:VEVENT': '일정에 BEGIN:VEVENT가 없습니다',
        'The event has no END:VEVENT': '일정에 END:VEVENT가 없습니다',
        'The event has no title': '일정에 제목이 없습니다',
        'The event has no start': '일정에 시작이 없습니다',
        'The event ends before it starts': '일정이 시작 전에 끝납니다',
        'The address is missing': '주소가 없습니다',
        'The amount must be a number with a point, for example 0.005': '금액은 소수점을 쓴 숫자여야 합니다 (예: 0.005)',
        'An Ethereum address has 0x and 40 hex digits': '이더리움 주소는 0x와 16진수 40자리입니다',
        'This does not look like a Bitcoin address': '비트코인 주소가 아닌 것 같습니다',
        'The IBAN is missing': 'IBAN이 없습니다',
        'The IBAN has the wrong form (two letters, two digits, then letters and digits)': 'IBAN 형식이 잘못되었습니다 (영문 2자, 숫자 2자리, 그다음 영문과 숫자)',
        'The check digits of the IBAN do not match - a typing error?': 'IBAN의 검사 숫자가 맞지 않습니다. 입력 오류인가요?',
        'A QR reference has 27 digits': 'QR 참조 번호는 27자리입니다',
        'The check digit of the QR reference does not match': 'QR 참조 번호의 검사 숫자가 맞지 않습니다',
        'A creditor reference starts with RF and two check digits, 5 to 25 characters': '채권자 참조 번호는 RF와 검사 숫자 2자리로 시작하며 5~25자입니다',
        'The check digits of the creditor reference do not match': '채권자 참조 번호의 검사 숫자가 맞지 않습니다',
        'The second line is the version, 001 or 002': '두 번째 줄은 버전으로, 001 또는 002입니다',
        'The third line should be 1 (UTF-8)': '세 번째 줄은 1(UTF-8)이어야 합니다',
        'The fourth line must be SCT': '네 번째 줄은 SCT여야 합니다',
        'Version 001 needs a BIC': '버전 001에는 BIC가 필요합니다',
        'The BIC has 8 or 11 letters and digits': 'BIC는 영문과 숫자 8자 또는 11자입니다',
        'The recipient is missing': '수취인이 없습니다',
        'The recipient has more than 70 characters': '수취인 이름이 70자를 넘습니다',
        'The amount is between 0.01 and 999999999.99 EUR, with a point and at most two decimals': '금액은 0.01~999999999.99 EUR이며, 소수점을 쓰고 소수 자릿수는 두 자리까지입니다',
        'The purpose code has 4 letters (for example CHAR, GDDS)': '목적 코드는 영문 4자입니다 (예: CHAR, GDDS)',
        'Either a reference or a message, not both': '참조 번호와 메시지 중 하나만 쓸 수 있습니다',
        'The message has more than 140 characters': '메시지가 140자를 넘습니다',
        'The second line is the version 0200': '두 번째 줄은 버전 0200입니다',
        'The third line is the coding type 1': '세 번째 줄은 인코딩 유형 1입니다',
        'The Swiss QR bill takes only IBANs of Switzerland and Liechtenstein (CH, LI)': '스위스 QR 청구서는 스위스와 리히텐슈타인의 IBAN(CH, LI)만 받습니다',
        'The creditor address must be structured (S): street, number, postal code and town in their own lines':
            '수취인 주소는 구조화(S)되어야 합니다: 도로명, 번지, 우편번호, 시/읍을 각각 별도 줄에',
        'The creditor name is missing': '수취인 이름이 없습니다',
        'Postal code and town of the creditor are needed': '수취인의 우편번호와 시/읍이 필요합니다',
        'The country of the creditor is two letters, for example CH': '수취인의 국가는 영문 2자입니다 (예: CH)',
        'The ultimate creditor (lines 12 to 18) must stay empty': '최종 수취인(12~18번째 줄)은 비워 두어야 합니다',
        'The amount is between 0.01 and 999999999.99, with a point and two decimals': '금액은 0.01~999999999.99이며, 소수점과 소수 둘째 자리까지 씁니다',
        'The currency is CHF or EUR': '통화는 CHF 또는 EUR입니다',
        'Postal code and town of the payer are needed': '지급인의 우편번호와 시/읍이 필요합니다',
        'The payer\'s address must be structured (S)': '지급인의 주소는 구조화(S)되어야 합니다',
        'The reference type is QRR, SCOR or NON': '참조 유형은 QRR, SCOR, NON 중 하나입니다',
        'A QR-IBAN needs a QR reference (QRR)': 'QR-IBAN에는 QR 참조 번호(QRR)가 필요합니다',
        'A QR reference needs a QR-IBAN (an IBAN with 30000 to 31999 after the check digits)': 'QR 참조 번호에는 QR-IBAN(검사 숫자 뒤가 30000~31999인 IBAN)이 필요합니다',
        'From 14 November 2026 a bill in EUR takes only an IBAN with a creditor reference (SCOR) or none - QR-IBAN and QR reference only in CHF':
            '2026년 11월 14일부터 EUR 청구서는 채권자 참조 번호(SCOR)가 있거나 참조 번호가 없는 IBAN만 받습니다. QR-IBAN과 QR 참조 번호는 CHF에서만 쓸 수 있습니다',
        'Without a reference type the reference line must be empty': '참조 유형이 없으면 참조 번호 줄은 비워 두어야 합니다',
        'Message and billing information together have at most 140 characters': '메시지와 청구 정보는 합쳐서 최대 140자입니다',
        'Line 31 must be EPD (end of the payment data)': '31번째 줄은 EPD(결제 데이터의 끝)여야 합니다',
        'The Swiss QR bill allows only Latin characters (no emoji, no other scripts)': '스위스 QR 청구서는 라틴 문자만 허용합니다 (이모지와 다른 문자는 불가)',

        /* ---------- Export ---------- */
        'Export': '내보내기',
        'Close': '닫기',
        'File name': '파일 이름',
        'Vector (print, any size)': '벡터 (인쇄용, 모든 크기)',
        'SVG picture': 'SVG 이미지',
        'EPS (for print shops)': 'EPS (인쇄소용)',
        'Picture': '이미지',
        'The content as text': '내용을 텍스트로',
        'QR document (.qr)': 'QR 문서 (.qr)',
        'Many codes': '여러 코드',
        'Many codes from a table': '표로 여러 코드 만들기',
        'Width in pixels': '너비 (픽셀)',
        'Resolution (dpi)': '해상도 (dpi)',
        'Width in mm': '너비 (mm)',
        'Each code as': '각 코드 형식',
        'SVG files in a ZIP': 'SVG 파일을 ZIP으로',
        'PNG files in a ZIP': 'PNG 파일을 ZIP으로',
        'One PDF, one code per page': 'PDF 하나, 페이지당 코드 하나',
        'File names from': '파일 이름 출처',
        'Table (CSV or TSV, first row = column names)': '표 (CSV 또는 TSV, 첫 행 = 열 이름)',
        'Open a table…': '표 열기…',
        'Result': '결과',
        'SVG, PNG, PDF, EPS and the .qr document in one ZIP': 'SVG, PNG, PDF, EPS와 .qr 문서를 ZIP 하나로',
        'All formats (ZIP)': '모든 형식 (ZIP)',
        'Download': '다운로드',
        'There is no code yet - see the problems above the code.': '아직 코드가 없습니다. 코드 위의 문제를 확인하세요.',
        '(The picture is made when you download it.)': '(이미지는 다운로드할 때 만들어집니다.)',
        '(A vector PDF, one page as large as the code - made when you download it.)': '(벡터 PDF, 코드 크기의 한 페이지 - 다운로드할 때 만들어집니다.)',
        '(A vector EPS for print shops - made when you download it.)': '(인쇄소용 벡터 EPS - 다운로드할 때 만들어집니다.)',
        'Downloaded': '다운로드했습니다',
        'ZIP downloaded: SVG, PDF, EPS, PNG, the .qr document and the content': 'ZIP을 다운로드했습니다: SVG, PDF, EPS, PNG, .qr 문서, 내용',
        'Picture copied - paste it into a document or a chat': '이미지를 복사했습니다. 문서나 채팅에 붙여 넣으세요',
        'This browser does not let the page copy pictures - download it instead': '이 브라우저에서는 페이지가 이미지를 복사할 수 없습니다. 대신 다운로드하세요',
        'Copied to the clipboard': '클립보드에 복사했습니다',
        'Row number': '행 번호',
        'Write placeholders like {{url}} into the content (or the caption) - each row of the table fills them.': '내용(또는 캡션)에 {{url}} 같은 자리 표시자를 쓰면 표의 각 행이 이를 채웁니다.',
        'The table is larger than 10 MB': '표가 10 MB보다 큽니다',
        'Paste a table with a header row and at least one row': '머리글 행과 한 행 이상의 데이터가 있는 표를 붙여 넣으세요',
        'No row made a code - see the content': '코드를 만든 행이 없습니다. 내용을 확인하세요',

        /* ---------- Read a QR code ---------- */
        'Read a QR code': 'QR 코드 읽기',
        'Starting the camera…': '카메라를 시작하는 중…',
        'The camera image is read in your browser only - nothing is recorded or sent.': '카메라 영상은 브라우저 안에서만 읽히며, 아무것도 녹화되거나 전송되지 않습니다.',
        'Choose a picture…': '이미지 선택…',
        'This browser gives no camera to the page - choose a picture instead.': '이 브라우저는 페이지에 카메라를 제공하지 않습니다. 대신 이미지를 선택하세요.',
        'Hold the QR code in front of the camera.': 'QR 코드를 카메라 앞에 대세요.',
        'The camera is not allowed - allow it in the browser (inside another website the page must allow it too), or choose a picture.':
            '카메라가 허용되지 않았습니다. 브라우저에서 허용하거나 (다른 웹사이트 안에서는 그 페이지도 허용해야 합니다) 이미지를 선택하세요.',
        'No camera found - choose a picture instead.': '카메라를 찾을 수 없습니다. 대신 이미지를 선택하세요.',

        /* ---------- My documents ---------- */
        'Search by name': '이름으로 검색',
        'Search your documents': '문서 검색',
        'Open a .qr file or a picture with a QR code as a new document': '.qr 파일이나 QR 코드 이미지를 새 문서로 열기',
        'New document': '새 문서',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.':
            '문서를 클릭하면 열립니다. 문서는 이 브라우저에만 저장되며 아무것도 업로드되지 않습니다. 브라우저의 사이트 데이터를 지우면 함께 삭제되므로 보관할 문서는 다운로드하세요.',
        'Download every document as a .qr file in one ZIP': '모든 문서를 .qr 파일로 ZIP 하나에 담아 다운로드',
        'Download all (ZIP)': '모두 다운로드 (ZIP)',
        'Rename': '이름 바꾸기',
        'Duplicate': '복제',
        'Download as .qr': '.qr로 다운로드',
        'Delete': '삭제',
        'New name': '새 이름',
        'This document is open': '이 문서가 열려 있습니다',
        'Click to open this document': '클릭하면 이 문서가 열립니다',
        'No documents yet.': '아직 문서가 없습니다.',
        'The document is removed from this browser for good. Download it first if you want to keep a copy.':
            '문서가 이 브라우저에서 영구적으로 삭제됩니다. 사본을 보관하려면 먼저 다운로드하세요.',
        'OK': '확인',

        /* ---------- AI Assistant ---------- */
        'Any AI can work with you - ChatGPT, Claude, Gemini, Copilot.': '어떤 AI와도 함께 작업할 수 있습니다 - ChatGPT, Claude, Gemini, Copilot.',
        'Connected AI': '연결된 AI',
        'Paste it into your AI and say what the code should hold or how it should look.': 'AI에 붙여 넣고 코드에 담을 내용이나 원하는 모양을 말해 주세요.',
        'Connected to': '연결 대상',
        'the AI sends its result there, and it opens here.': 'AI가 결과를 그곳으로 보내면 여기에서 열립니다.',
        'What': '사이트',
        'tells the AI': '에서 AI에게 전하는 내용',
        'The AI should': 'AI가 할 일',
        'Change “': '변경: “',
        '”': '”',
        'Make a new document': '새 문서 만들기',
        'The AI\'s answer (or press Ctrl+V anywhere):': 'AI의 답변 (또는 아무 곳에서나 Ctrl+V):',
        'The QR document travels in the link after the “#”, which no server sees. What you paste into your AI is handled by its provider.':
            'QR 문서는 링크의 “#” 뒤에 담겨 전달되며, 어떤 서버도 볼 수 없습니다. AI에 붙여 넣은 내용은 해당 AI 제공자가 처리합니다.',
        'The prompt - copy it with Ctrl+C': '프롬프트 - Ctrl+C로 복사하세요',
        'Copy prompt': '프롬프트 복사',
        '(no key yet)': '(아직 키 없음)',
        '(key valid while the editor is open)': '(편집기가 열려 있는 동안 유효한 키)',
        'The link could not be read': '링크를 읽을 수 없습니다',
        'The document in this link is incomplete or damaged. If the AI\'s link was split over several lines (as in a terminal), copy the whole answer and paste it into the editor with Ctrl+V - the editor joins the lines.':
            '이 링크의 문서가 불완전하거나 손상되었습니다. AI의 링크가 (터미널에서처럼) 여러 줄로 나뉘었다면 답변 전체를 복사해 Ctrl+V로 편집기에 붙여 넣으세요. 편집기가 줄을 이어 붙입니다.',
        'Loading…': '불러오는 중…',
        'Taken over by your editor': '편집기로 가져왔습니다',
        'The document is now in the QR Editor tab you already had open. Switch to that tab, or open it here.': '문서가 이미 열려 있던 QR 편집기 탭으로 넘어갔습니다. 그 탭으로 전환하거나 여기에서 여세요.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)': '여기서는 복사가 허용되지 않습니다. 아래에 선택되어 있으니 Ctrl+C(⌘C)를 누르세요',
        'Prompt copied - paste it into your AI and say what it should write': '프롬프트를 복사했습니다. AI에 붙여 넣고 무엇을 작성할지 말해 주세요',
        'This link is incomplete or damaged - please ask the AI to send it again': '이 링크는 불완전하거나 손상되었습니다. AI에게 다시 보내 달라고 하세요',

        /* ---------- Save to your server ---------- */
        'Save to your server': '내 서버에 저장',
        'Webhook address': '웹훅 주소',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(선택 사항, “Authorization: Bearer …”로 전송, 이 탭을 닫을 때까지 보관)',
        'Send automatically a few seconds after each change (otherwise only when you click': '변경할 때마다 몇 초 후 자동으로 보내기 (그렇지 않으면',
        'or press Ctrl+S)': '을 클릭하거나 Ctrl+S를 누를 때만)',
        'Only for “': '“',
        '” (other documents use the general address)': '”에만 적용 (다른 문서는 일반 주소를 사용)',
        'What your server receives': '서버가 받는 내용',
        'A POST request with JSON (your server must allow CORS from https://qr.giit.ch):': 'JSON이 담긴 POST 요청 (서버가 https://qr.giit.ch에서 오는 요청을 CORS로 허용해야 합니다):',
        'Embed the editor in your website': '편집기를 웹사이트에 삽입',
        'Send now': '지금 보내기',
        'Save setting': '설정 저장',

        /* ---------- Help ---------- */
        'How it works': '사용 방법',
        'Keyboard shortcuts': '단축키',
        'Undo / redo': '실행 취소 / 다시 실행',
        'Save (download SVG, or to your server)': '저장 (SVG 다운로드 또는 내 서버에 저장)',
        'Paste a picture with a QR code to read it': 'QR 코드 이미지를 붙여 넣어 읽기',
        'Wrap long lines in the code': '코드의 긴 줄 바꿈',

        /* ---------- Messages ---------- */
        'The browser storage is full - download and delete documents under "My documents"': '브라우저 저장 공간이 가득 찼습니다. “내 문서”에서 문서를 다운로드하고 삭제하세요',
        'The browser storage is full - delete or download documents under "My documents" first': '브라우저 저장 공간이 가득 찼습니다. 먼저 “내 문서”에서 문서를 삭제하거나 다운로드하세요',
        'The browser storage is full - delete or download some documents first': '브라우저 저장 공간이 가득 찼습니다. 먼저 문서 몇 개를 삭제하거나 다운로드하세요',
        'The browser storage is full': '브라우저 저장 공간이 가득 찼습니다',
        'Nothing to undo': '실행 취소할 내용이 없습니다',
        'Nothing to redo': '다시 실행할 내용이 없습니다',
        'your other documents are under "My documents"': '다른 문서는 “내 문서”에 있습니다',
        'from the AI - your other documents are unchanged': '(AI 작성) - 다른 문서는 바뀌지 않았습니다',
        'The file is larger than 20 MB': '파일이 20 MB보다 큽니다',
        'No QR code found in the picture': '이미지에서 QR 코드를 찾지 못했습니다',
        'the clipboard': '클립보드',
        'the camera': '카메라',
        // the name of a document made from a scanned code: "<type> read"
        'read': '(스캔)',
        'The picture is larger than 5 MB': '이미지가 5 MB보다 큽니다',
        'The SVG is larger than 200 KB': 'SVG가 200 KB보다 큽니다',
        'Logo added - it is part of the document': '로고를 추가했습니다. 문서의 일부가 됩니다',
        'QR document copied': 'QR 문서를 복사했습니다',
        'There is no code to download yet': '아직 다운로드할 코드가 없습니다',
        'SVG downloaded': 'SVG를 다운로드했습니다',
        'Design reset - "Undo" brings it back': '디자인을 초기화했습니다. “실행 취소”로 되돌릴 수 있습니다',
        'Type a number into the reference field first': '먼저 참조 번호 칸에 번호를 입력하세요',
        'Reference with check digits written': '검사 숫자가 포함된 참조 번호를 입력했습니다',

        /* ---------- Names of new documents (samples.js) ---------- */
        'Guest WiFi': '게스트 Wi-Fi',
    },

    html: {
        /* AI Assistant */
        'Click <b>Copy prompt</b>.': '<b>프롬프트 복사</b>를 클릭하세요.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'AI가 링크로 답합니다. 클릭하거나 답변 전체를 아래에 붙여 넣으세요. <b>실행 취소</b>로 되돌릴 수 있습니다.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'AI가 링크로 답합니다. <b>답변 전체를 아래에 붙여 넣으세요</b> (링크를 클릭하면 별도의 편집기가 열립니다). <b>실행 취소</b>로 되돌릴 수 있습니다.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            '편집기는 저장한 버전을 매번 내 서버(<b>웹훅</b>)로 보낼 수 있어, 작업을 원하는 곳에 보관할 수 있습니다. 여기에 주소를 입력하기 전에는 아무것도 전송되지 않습니다.',
        'Also possible: <code>?src=&lt;URL of a .qr file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>qreditor:ai</code>, <code>qreditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            '그 밖에: <code>?src=&lt;URL of a .qr file&gt;</code>는 파일을 열고, <code>&amp;webhook=&lt;URL&gt;</code>은 이 문서를 그곳에 저장합니다. 편집기는 별도의 창에서도 열 수 있으며(<code>?embed=window</code>), 페이지가 자체 AI 프롬프트와 세션 키를 넘겨 AI가 결과를 내 서버로 보내게 할 수도 있습니다(<code>qreditor:ai</code>, <code>qreditor:key-request</code>). 편집기 아래의 “내 웹사이트에서 편집기 사용하기”를 참고하세요. 자세한 내용은 <a href="/llms.txt">llms.txt</a>에 있습니다.',

        /* Help */
        '<b>Choose what the code holds</b> under <b>New</b> or in the <b>Content</b> tab: a link, WiFi, a contact, an event, a payment … The form writes the content in the form phones read.':
            '<b>새로 만들기</b>나 <b>내용</b> 탭에서 <b>코드에 담을 것을 고르세요</b>: 링크, Wi-Fi, 연락처, 일정, 결제 … 양식은 휴대폰이 읽는 형식으로 내용을 씁니다.',
        '<b>Design it</b> in the <b>Design</b> tab: colors and gradient, the shape of the modules and of the three eyes, a logo, a caption and a frame.':
            '<b>디자인</b> 탭에서 <b>디자인하세요</b>: 색과 그라데이션, 모듈과 세 위치 패턴의 모양, 로고, 캡션, 테두리.',
        'The <b>code</b> on the left is the whole QR document: design lines <code>key: value</code>, a line <code>---</code>, then the content exactly as it goes into the code. You can type there too; every change is one step for Undo.':
            '왼쪽의 <b>코드</b>가 QR 문서 전체입니다: 디자인 줄 <code>key: value</code>, <code>---</code> 줄, 그다음 코드에 들어가는 그대로의 내용. 그곳에 직접 입력할 수도 있으며, 모든 변경은 한 단계씩 실행 취소할 수 있습니다.',
        '<b>Check</b>: after every change the editor reads the code back - normal, small and blurred. The badge above the code says whether it scans; the <b>Check</b> tab shows contrast, quiet zone, the logo against the error correction and the print size.':
            '<b>검사</b>: 변경할 때마다 편집기가 코드를 보통, 작게, 흐리게 세 가지로 다시 읽습니다. 코드 위의 배지가 스캔 여부를 알려 주고, <b>검사</b> 탭은 대비, 여백, 오류 정정 대비 로고 크기, 인쇄 크기를 보여 줍니다.',
        'Click the <b>caption</b> under the code to change it right there.':
            '코드 아래의 <b>캡션</b>을 클릭하면 그 자리에서 바꿀 수 있습니다.',
        '<b>Export</b> makes SVG, PDF and EPS (vectors for print), PNG, JPEG or WebP up to 8192 pixels wide, and <b>many codes at once</b> from a table: write <code>{{column}}</code> in the content, paste the table, download a ZIP or one PDF.':
            '<b>내보내기</b>는 SVG, PDF, EPS(인쇄용 벡터), 너비 8192픽셀까지의 PNG, JPEG, WebP를 만들고, 표로 <b>여러 코드를 한 번에</b> 만듭니다: 내용에 <code>{{column}}</code>을 쓰고 표를 붙여 넣은 뒤 ZIP이나 PDF 하나를 다운로드하세요.',
        '<b>Read a code</b>: open, drop or paste a picture, or click <b>Read code</b> for the camera. The content becomes a new document.':
            '<b>코드 읽기</b>: 이미지를 열거나 끌어 놓거나 붙여 넣고, 카메라를 쓰려면 <b>코드 읽기</b>를 클릭하세요. 내용은 새 문서가 됩니다.',
    },

    patterns: [
        /* ---------- Code and the drawn code ---------- */
        ['^(\\d+) (?:line|lines) · (.+)$', '$1줄 · $2'],
        ['^(\\d+) bytes? · version (\\d+) \\((\\d+) × (\\d+) modules\\)$', '$1바이트 · 버전 $2 ($3 × $4 모듈)'],
        ['^(\\d+) bytes?$', '$1바이트'],
        ['^(\\d+) (?:error|errors)$', '오류 $1개'],
        ['^(· )?(\\d+) (?:note|notes)$', '$1참고 $2개'],
        // "Line" is translated as the frame of the Design tab, so "Line 5" arrives as "선 5"
        ['^(?:Line|선) (\\d+)$', '$1번째 줄'],
        ['^(.+) - "Undo" brings the previous content back$', (m, t) => `${TYPES[t] || t} - “실행 취소”로 이전 내용을 되돌릴 수 있습니다`],

        /* ---------- Check ---------- */
        ['^- repairs about (\\d+) %$', '- 약 $1% 복구'],
        ['^(\\d+) of (\\d+) bytes \\((\\d+) %\\)$', '$1 / $2바이트 ($3%)'],
        ['^(\\d+) % of the modules$', '모듈의 $1%'],
        ['^From (\\S+) cm the code should be at least (\\S+) cm wide\\.$', '$1 cm 거리에서 읽으려면 코드 너비가 $2 cm 이상이어야 합니다.'],
        ['^At (\\S+) mm one module is (\\S+) mm ✓$', '너비 $1 mm에서 모듈 하나는 $2 mm ✓'],
        ['^At (\\S+) mm one module is (\\S+) mm - below 0\\.4 mm many phones fail; print it larger !$', '너비 $1 mm에서 모듈 하나는 $2 mm - 0.4 mm 미만이면 많은 휴대폰이 읽지 못하니 더 크게 인쇄하세요!'],

        /* ---------- Problems ---------- */
        ['^The code scans, but not when it is small - simpler shapes, more contrast or more error correction help$', '코드가 스캔되지만 작을 때는 안 됩니다. 단순한 모양, 높은 대비, 높은 오류 정정이 도움이 됩니다'],
        ['^The code scans, but not when it is blurred or the light is poor - simpler shapes, more contrast or more error correction help$', '코드가 스캔되지만 흐리거나 조명이 어두울 때는 안 됩니다. 단순한 모양, 높은 대비, 높은 오류 정정이 도움이 됩니다'],
        ['^The Swiss QR bill is drawn as its standard requires - (.+) (?:is|are) not used$', '스위스 QR 청구서는 표준대로 그려지므로 $1은(는) 사용되지 않습니다'],
        ['^Contrast (\\S+):1 between (\\S+) and the background is too low - scanners need at least 3:1, better 4\\.5:1 or more$', '$2와(과) 배경의 대비 $1:1은 너무 낮습니다. 스캐너에는 최소 3:1, 되도록 4.5:1 이상이 필요합니다'],
        ['^Contrast (\\S+):1 between (\\S+) and the background is low - 4\\.5:1 or more scans reliably, also in poor light$', '$2와(과) 배경의 대비 $1:1은 낮은 편입니다. 4.5:1 이상이면 어두운 곳에서도 안정적으로 스캔됩니다'],
        ['^A quiet zone of (\\d+) (?:module|modules) is too small - the standard asks for 4, with less than 2 many scanners fail$', '$1모듈의 여백은 너무 작습니다. 표준은 4이며, 2 미만이면 많은 스캐너가 읽지 못합니다'],
        ['^The quiet zone has (\\d+) modules - the standard asks for 4 \\(a light frame of 4 modules around the code\\)$', '여백이 $1모듈입니다. 표준은 4입니다 (코드 둘레에 4모듈 너비의 밝은 테두리)'],
        ['^The logo hides about (\\d+) % of the code, error correction ([LMQH]) repairs at most (\\d+) % - make the logo smaller or choose error correction H$', '로고가 코드의 약 $1%를 가리는데, 오류 정정 $2는 최대 $3%까지만 복구합니다. 로고를 줄이거나 오류 정정 H를 선택하세요'],
        ['^The logo hides about (\\d+) % of the code, error correction ([LMQH]) repairs at most (\\d+) % - little room is left for dirt and damage; H is safer$', '로고가 코드의 약 $1%를 가리고, 오류 정정 $2는 최대 $3%까지 복구합니다. 얼룩이나 손상에 대한 여유가 거의 없으니 H가 더 안전합니다'],
        ['^A logo takes away part of the code: error correction Q or H keeps it readable \\(now ([LMQH])\\)$', '로고는 코드의 일부를 가립니다: 오류 정정 Q나 H면 읽을 수 있습니다 (현재 $1)'],
        ['^Unknown key "(.+)" - it is kept, but has no effect$', '알 수 없는 키 “$1” - 유지되지만 효과는 없습니다'],
        ['^"(.+)" is set twice - the last line counts$', '“$1”이(가) 두 번 설정되었습니다. 마지막 줄이 적용됩니다'],
        ['^"([A-Za-z0-9-]+): (.*)" is not valid \\((.+)\\) - the default is used$', (m, k, v, h) => `“${k}: ${v}”은(는) 유효하지 않습니다 (${translateHint(h)}). 기본값을 사용합니다`],
        ['^(\\S+) is a link shortener or redirect service: the code works only as long as that service keeps the link - for printed codes put the real address in the code$',
            '$1은(는) 단축 URL 또는 리디렉션 서비스입니다. 코드는 그 서비스가 링크를 유지하는 동안만 작동하므로, 인쇄할 코드에는 실제 주소를 넣으세요'],
        ['^An IBAN of ([A-Z]{2}) has (\\d+) characters, this one (\\d+)$', '$1의 IBAN은 $2자인데, 이것은 $3자입니다'],
        ['^The SEPA code has (\\d+) bytes, at most 331 are allowed$', 'SEPA 코드가 $1바이트입니다. 최대 331바이트까지 허용됩니다'],
        ['^Line (\\d+) has more than (\\d+) characters$', '$1번째 줄이 $2자를 넘습니다'],
        ['^The Swiss QR bill has (\\d+) characters, at most 997 are allowed$', '스위스 QR 청구서가 $1자입니다. 최대 997자까지 허용됩니다'],

        /* ---------- Export ---------- */
        ['^(\\d+) × (\\d+) pixels = (\\S+) mm at (\\d+) dpi$', '$1 × $2픽셀 = $3 mm ($4 dpi)'],
        ['^(\\d+) × (\\d+) pixels$', '$1 × $2픽셀'],
        ['^One module (\\S+) mm - below 0\\.4 mm many phones fail$', '모듈 하나 $1 mm - 0.4 mm 미만이면 많은 휴대폰이 읽지 못합니다'],
        ['^One module (\\S+) mm$', '모듈 하나 $1 mm'],
        ['^Column (\\d+)$', '$1번째 열'],
        ['^Placeholders in the document: (.+)$', '문서의 자리 표시자: $1'],
        ['^Not in the table: (.+)$', '표에 없음: $1'],
        ['^(\\d+) (?:row|rows) · (.+)$', '$1행 · $2'],
        ['^At most (\\d+) rows at once$', '한 번에 최대 $1행'],
        ['^Left out \\(content too long\\): lines (.+)$', '제외됨 (내용이 너무 김): $1번째 줄'],
        ['^(\\d+) (?:code|codes) made - (\\d+) left out$', '코드 $1개를 만들었습니다 - $2개 제외'],
        ['^(\\d+) (?:code|codes) made$', '코드 $1개를 만들었습니다'],

        /* ---------- My documents ---------- */
        ['^"(.+)" is open\\. My documents: open, rename, duplicate or delete your documents \\(Ctrl\\+O\\)$', '“$1”이(가) 열려 있습니다. 내 문서: 문서 열기, 이름 바꾸기, 복제, 삭제 (Ctrl+O)'],
        ['^(\\d+) (?:document|documents) · (.+) in this browser$', (m, k, s) => `문서 ${k}개 · 이 브라우저에 ${formatSize(s)}`],
        ['^No document named "(.*)"\\.$', '“$1”이라는 이름의 문서가 없습니다.'],
        ['^Open now · (.+)$', (m, s) => `지금 열려 있음 · ${formatSize(s)}`],
        ['^(just now|yesterday|\\d+ min ago|\\d+ h ago|[A-Z][a-z]{2} \\d{1,2}, \\d{4}) · (.+)$', (m, w, s) => `${formatTime(w)} · ${formatSize(s)}`],
        ['^(.+) \\(open now\\)$', '$1 (지금 열려 있음)'],
        ['^ZIP with (\\d+) (?:document|documents) downloaded$', '문서 $1개가 담긴 ZIP을 다운로드했습니다'],
        ['^"(.+)" duplicated$', '“$1”을(를) 복제했습니다'],
        ['^Delete "(.+)"\\?$', '“$1”을(를) 삭제할까요?'],
        ['^"(.+)" deleted$', '“$1”을(를) 삭제했습니다'],

        /* ---------- AI Assistant ---------- */
        ['^Part (\\d+) of (\\d+) received$', '$2개 중 $1번째 부분을 받았습니다'],
        ['^Open the other (?:link|links) from the AI too \\(still missing: part (.+)\\)\\.$', 'AI의 다른 링크도 여세요 (아직 없는 부분: $1).'],
        ['^Part (\\d+) of (\\d+) received - paste the other (?:link|links) too \\(missing: (.+)\\)$', '$2개 중 $1번째 부분을 받았습니다. 다른 링크도 붙여 넣으세요 (없는 부분: $3)'],
        ['^The AI sends the document to (.+) with a key that only works for this session\\. What you paste into your AI is handled by its provider\\.$', 'AI는 이 세션에서만 유효한 키로 문서를 $1(으)로 보냅니다. AI에 붙여 넣은 내용은 해당 AI 제공자가 처리합니다.'],
        ['^The AI sends its result to (.+) by itself, and it opens here\\. If it answers with a link, paste its answer below\\.$', 'AI가 결과를 직접 $1(으)로 보내고, 여기에서 열립니다. AI가 링크로 답하면 그 답변을 아래에 붙여 넣으세요.'],
        ['^No key from (.+) - the prompt asks the AI for a link instead$', '$1에서 받은 키가 없습니다. 대신 프롬프트가 AI에게 링크를 요청합니다'],
        ['^Prompt copied - the AI sends its result to (.+)$', '프롬프트를 복사했습니다. AI가 결과를 $1(으)로 보냅니다'],

        /* ---------- Messages with names ---------- */
        ['^"(.+)" opened$', '“$1”을(를) 열었습니다'],
        ['^"(.+)" is neither a \\.qr file nor a picture$', '“$1”은(는) .qr 파일도 이미지도 아닙니다'],
        ['^"(.+)" opened - it is now in "My documents"$', '“$1”을(를) 열었습니다. 이제 “내 문서”에 있습니다'],
        ['^No QR code found in "(.+)"$', '“$1”에서 QR 코드를 찾지 못했습니다'],
        ['^QR code read \\((.+?)\\) from "(.+)" - it is a new document$', '“$2”에서 QR 코드($1)를 읽었습니다. 새 문서가 됩니다'],
        ['^QR code read \\((.+)\\) - it is a new document$', 'QR 코드($1)를 읽었습니다. 새 문서가 됩니다'],
        ['^QR code received - the editor found (\\d+) (?:problem|problems)$', 'QR 코드를 받았습니다. 편집기가 문제 $1개를 찾았습니다'],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', 'AI가 “$1”을(를) 변경했습니다. “실행 취소”로 되돌릴 수 있습니다'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', '$1 열기'],
    ],
};
