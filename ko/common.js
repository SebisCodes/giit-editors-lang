/* Korean texts that all giit editors share: the links to giit.ch in the bar,
   saving on a server and inside a page (sync.js), the AI status (aistatus.js),
   the confirmation box (dialogs.js). The editor's own texts are in the Korean
   pack; how they are used is described in i18n.js. The same file serves every
   giit editor. */

/**
 * Writes a time of day in the form of the language.
 * @param {string} h - the hour.
 * @param {string} m - the minutes.
 * @param {string} ap - "AM", "PM" or empty.
 * @returns {string} the text in the language.
 */
const formatHourMinute = (h, m, ap) => (ap ? `${ap === 'PM' ? '오후' : '오전'} ${h}:${m}` : `${h}:${m}`);
/**
 * Translates the text the pattern found (it in the English pattern).
 * @param {string} w - the English text the pattern found.
 * @returns {string} the text in the language.
 */
const translateThing = w => (w === 'drawing' ? '그림' : '문서');

export default {
    text: {
        "All giit editors": "모든 giit 편집기",
        "by giit.ch": "giit.ch 제공",
        "Open in another editor": "다른 편집기에서 열기",
        "Not everything can be converted": "모든 내용을 변환할 수는 없습니다",
        "Open anyway": "그래도 열기",
        "Pictures and other files of the document stay here: add them again in the other editor": "문서의 이미지와 기타 파일은 여기에 남습니다. 다른 편집기에서 다시 추가하세요",
        "The document is too long for a link - export it and open the file in the other editor": "문서가 너무 길어 링크로 열 수 없습니다. 내보낸 뒤 다른 편집기에서 파일을 여세요",
        "Scripts and styles": "스크립트와 스타일",
        "Form fields": "양식 필드",
        "Footnotes, labels and references": "각주, 레이블, 참조",
        "LaTeX commands and environments without an equivalent": "대응 항목이 없는 LaTeX 명령과 환경",
        "Document class, packages and page settings": "문서 클래스, 패키지, 페이지 설정",
        "The table of contents": "목차",
        "Typst functions without an equivalent": "대응 항목이 없는 Typst 함수",
        "Formulas are copied as written: check them": "수식은 그대로 복사됩니다. 확인하세요",
        "Formulas become plain code": "수식은 일반 코드가 됩니다",
        "Links with an unsafe address": "안전하지 않은 주소의 링크",
        "Comments": "주석",
        "Empty values (null): TOML has no null": "빈 값(null): TOML에는 null이 없습니다",
        "The data is not a table: it goes under the key \"value\"": "데이터가 표가 아닙니다: 키 “value” 아래에 들어갑니다",
        "Keys that are not valid XML names are changed": "유효한 XML 이름이 아닌 키는 변경됩니다",
        "Only the first list goes into the table": "첫 번째 목록만 표에 들어갑니다",
        "Nested values go into one cell as JSON": "중첩된 값은 JSON으로 한 셀에 들어갑니다",
        "The picture could not be stored in this browser (storage full or blocked) - it is kept only until the page is closed: download the document to keep it": "이 브라우저에 그림을 저장하지 못했습니다(저장 공간이 가득 찼거나 차단됨) - 페이지를 닫을 때까지만 유지됩니다. 보관하려면 문서를 다운로드하세요",
        "Column names that occur twice (numbered)": "두 번 나오는 열 이름 (번호 붙임)",
        "Fields beyond the header (named Column N)": "머리글을 넘는 필드 (Column N으로 이름 지정)",
        "The AI's result could not be opened - your browser's storage may be full": "AI 결과를 열지 못했습니다 - 브라우저 저장 공간이 가득 찼을 수 있습니다",
        "The AI's result could not be opened": "AI 결과를 열지 못했습니다",
        "Types of values: SHLS holds every value as text": "값의 유형: SHLS는 모든 값을 텍스트로 저장합니다",
        "This data has no list of records, so it does not make a table": "이 데이터에는 레코드 목록이 없어 표를 만들 수 없습니다",
        "The XML cannot be read - fix the problem above the code first": "XML을 읽을 수 없습니다. 먼저 코드 위의 문제를 해결하세요",
        "It could not be converted": "변환할 수 없습니다",
        "Content from a third party, not checked by giit.ch": "제3자 콘텐츠이며 giit.ch에서 확인하지 않았습니다",
        // Wrapping long lines in the code view (wrap.js)
        "Wrap": "줄 바꿈",
        "Wrap long lines in the view - each line of the code stays one line (Alt+Z)": "긴 줄을 화면에서 줄 바꿈 - 코드의 각 줄은 한 줄로 유지 (Alt+Z)",
        'Cancel': '취소',
        'Allow': '허용',
        'No': '아니요',
        'Yes': '예',
        'Save': '저장',
        'Saved': '저장됨',
        'Sending…': '보내는 중…',
        'Not connected': '연결되지 않음',
        'Save on this server?': '이 서버에 저장할까요?',
        'The address for the AI must be https:// on the site of the page around the editor - it is not used':
            'AI용 주소는 편집기가 삽입된 페이지와 같은 사이트의 https:// 주소여야 합니다 - 사용하지 않습니다',
        'The key from the page is not valid (16 to 512 letters, digits or ._~+/=-)':
            '페이지의 키가 올바르지 않습니다(16~512개의 영문자, 숫자 또는 ._~+/=-)',
        'This document stays in your browser - only the document from the page is saved there':
            '이 문서는 브라우저에 남습니다 - 그곳에는 페이지의 문서만 저장됩니다',
        'This drawing stays in your browser - only the drawing from the page is saved there':
            '이 그림은 브라우저에 남습니다 - 그곳에는 페이지의 그림만 저장됩니다',
        'The page that opened the editor is closed - download the document so nothing is lost':
            '편집기를 연 페이지가 닫혔습니다 - 잃어버리지 않도록 문서를 다운로드하세요',
        'The page that opened the editor is closed - download the drawing so nothing is lost':
            '편집기를 연 페이지가 닫혔습니다 - 잃어버리지 않도록 그림을 다운로드하세요',
        'The webhook from the page is not an https:// address - it is not used':
            '페이지의 웹훅이 https:// 주소가 아닙니다 - 사용하지 않습니다',
        'Please enter an https:// address (or http://localhost for testing)':
            'https:// 주소를 입력하세요(테스트용으로는 http://localhost)',
        'Saved versions now go to your server': '이제 저장한 버전이 내 서버로 전송됩니다',
        'Webhook switched off': '웹훅을 껐습니다',
        'The webhook in the link is not an https:// address - it is not used':
            '링크의 웹훅이 https:// 주소가 아닙니다 - 사용하지 않습니다',
        'The webhook in the link only works together with ?src= - it is not used':
            '링크의 웹훅은 ?src=와 함께일 때만 작동합니다 - 사용하지 않습니다',
        'A token in a link is not used - enter it under "Save to server"':
            '링크의 토큰은 사용되지 않습니다 - “서버에 저장”에서 입력하세요',
        'Save - hand the document to the page around the editor (Ctrl+S)':
            '저장 - 편집기가 삽입된 페이지에 문서 전달 (Ctrl+S)',
        'Save - hand the drawing to the page around the editor (Ctrl+S)':
            '저장 - 편집기가 삽입된 페이지에 그림 전달 (Ctrl+S)',
        'AI through a website: not connected': '웹사이트를 통한 AI: 연결되지 않음',
        'Browser agent (WebMCP): not offered by this browser': '브라우저 에이전트(WebMCP): 이 브라우저에서 제공하지 않음',
        'Browser agent (WebMCP): available, not used yet': '브라우저 에이전트(WebMCP): 사용 가능, 아직 사용 안 함',
        'AI links: cannot reach the editor inside this website - paste the AI\'s answer here':
            'AI 링크: 이 웹사이트 안의 편집기에 접근할 수 없습니다 - AI의 답변을 여기에 붙여 넣으세요',
        'AI links: open the editor in a new tab': 'AI 링크: 새 탭에서 편집기를 엽니다',
        'AI links: go to another editor tab (the one used last)': 'AI 링크: 다른 편집기 탭(마지막으로 사용한 탭)으로 이동합니다',
        'AI links: arrive in this tab': 'AI 링크: 이 탭에서 열립니다',
        'AI in this session: nothing received yet - copy the prompt for your AI': '이 세션의 AI: 아직 받은 것이 없습니다 - AI용 프롬프트를 복사하세요',
    },
    patterns: [
        ['^Saved on (.+) at (\\d{1,2}):(\\d{2})\\s?(AM|PM)?$', (x, host, h, m, ap) => `${host}에 저장됨 (${formatHourMinute(h, m, ap)})`],
        ['^Saved on (.+)$', '$1에 저장됨'],
        ['^Not saved on (.+?): no connection, or the server does not allow it \\(CORS\\)$', '$1에 저장하지 못했습니다: 연결이 없거나 서버가 허용하지 않습니다(CORS)'],
        ['^Not saved on (.+?): The server answered (\\d+)(.*)$', '$1에 저장하지 못했습니다: 서버 응답 $2$3'],
        ['^Not saved on (.+?): the (document|drawing) with its pictures is (\\d+) MB - at most 40 MB go in one request$', '$1에 저장하지 못했습니다: 그림을 포함해 $3 MB입니다 - 요청 하나에는 최대 40 MB까지 보낼 수 있습니다'],
        ['^"(.+)" was changed in another tab - your version here is kept as "(.+)"$', '"$1"이(가) 다른 탭에서 변경되었습니다 - 여기의 버전은 "$2"(으)로 보관됩니다'],
        ['^Not saved on (.+?): the server did not answer within (\\d+) seconds$', '$1에 저장하지 못했습니다: 서버가 $2초 안에 응답하지 않았습니다'],
        ['^Not saved on (.+?): (.*)$', '$1에 저장하지 못했습니다: $2'],
        ['^Saves to (.+) \\(set by the page\\)$', '$1에 저장합니다(페이지가 지정)'],
        ['^Save - send the (document|drawing) to (.+) \\(Ctrl\\+S\\)$', (m, w, h) => `저장 - ${h}에 ${translateThing(w)} 보내기 (Ctrl+S)`],
        ['^The AI\'s new (document|drawing) is open as "(.+)" - it stays in your browser and is not saved to (.+)$',
            (m, w, n, l) => `AI의 새 ${w === 'drawing' ? '그림이' : '문서가'} “${n}”(으)로 열려 있습니다 - 브라우저에 남으며 ${l}에는 저장되지 않습니다`],
        ['^The AI\'s result from (.+) is open - Undo takes it back$', '$1에서 온 AI의 결과가 열려 있습니다 - 실행 취소로 되돌릴 수 있습니다'],
        ['^The file could not be opened: no connection, or the server does not allow it \\(CORS\\)$', '파일을 열 수 없습니다: 연결이 없거나 서버가 허용하지 않습니다(CORS)'],
        ['^The file could not be opened: only https:// addresses can be opened$', '파일을 열 수 없습니다: https:// 주소만 열 수 있습니다'],
        ['^The file could not be opened: the server answered (\\d+)$', '파일을 열 수 없습니다: 서버 응답 $1'],
        ['^The file could not be opened: the page loaded another document meanwhile$', '파일을 열지 못했습니다: 그 사이에 페이지가 다른 문서를 불러왔습니다'],
        ['^The file could not be opened: (.*)$', '파일을 열 수 없습니다: $1'],
        ['^This link asks the editor to send the saved versions of "(.+)" to (.+) while this page is open\\. Only allow it if you trust that site\\.$',
            '이 링크는 이 페이지가 열려 있는 동안 “$1”의 저장된 버전을 $2(으)로 보내 달라고 편집기에 요청합니다. 그 사이트를 신뢰할 때만 허용하세요.'],
        ['^AI in this session: a document from an AI link, just now$', '이 세션의 AI: AI 링크로 받은 문서, 방금'],
        ['^AI in this session: a document from an AI link, (\\d+) min ago$', '이 세션의 AI: AI 링크로 받은 문서, $1분 전'],
        ['^AI in this session: a result through the page, just now$', '이 세션의 AI: 페이지를 통한 결과, 방금'],
        ['^AI in this session: a result through the page, (\\d+) min ago$', '이 세션의 AI: 페이지를 통한 결과, $1분 전'],
        ['^AI in this session: a browser agent \\(WebMCP\\), just now$', '이 세션의 AI: 브라우저 에이전트(WebMCP), 방금'],
        ['^AI in this session: a browser agent \\(WebMCP\\), (\\d+) min ago$', '이 세션의 AI: 브라우저 에이전트(WebMCP), $1분 전'],
        ['^AI through (.+): connected, waiting for the key$', '$1을(를) 통한 AI: 연결됨, 키를 기다리는 중'],
        ['^AI through (.+): connected$', '$1을(를) 통한 AI: 연결됨'],
        ['^Browser agent \\(WebMCP\\): active, last used just now$', '브라우저 에이전트(WebMCP): 활성, 마지막 사용: 방금'],
        ['^Browser agent \\(WebMCP\\): active, last used (\\d+) min ago$', '브라우저 에이전트(WebMCP): 활성, 마지막 사용: $1분 전'],
        ['^Browser agent \\(WebMCP\\): available, last used just now$', '브라우저 에이전트(WebMCP): 사용 가능, 마지막 사용: 방금'],
        ['^Browser agent \\(WebMCP\\): available, last used (\\d+) min ago$', '브라우저 에이전트(WebMCP): 사용 가능, 마지막 사용: $1분 전'],
    ],
};
