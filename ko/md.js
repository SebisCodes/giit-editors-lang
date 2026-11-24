/* Korean texts of the Markdown editor: the bar, the work area (code,
   preview, insert, pictures, outline), its dialogs and messages, and the
   problems the preview finds in the code. What all editors share is in
   common.js; how the dictionaries are used is described in
   i18n.js. Names of documents, pictures and anchors stay as they are: the
   patterns copy them into the Korean text. */

/* "123 bytes" -> "123 바이트" */
/**
 * Translates the unit of a size text ("123 bytes").
 * @param {string} s - the English size text.
 * @returns {string} the text in the language.
 */
const formatSize = s => s.replace(/ bytes$/, ' 바이트');
const MON = { Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6, Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12 };
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
    if (m && MON[m[1]]) return `${m[3]}년 ${MON[m[1]]}월 ${m[2]}일`;
    return s;
}
/* Reasons a ZIP could not be opened (app.js openZip) */
const ZIP = { 'it is not a ZIP file': 'ZIP 파일이 아닙니다', 'there is no .md file in it': '안에 .md 파일이 없습니다' };

export default {
    text: {
        'Side panel': '사이드 패널',
        'Show or hide the side panel': '사이드 패널 표시 또는 숨기기',
        'Examples': '예제',
        'Template': '템플릿',
        'View of the preview': '미리 보기 화면',
        'The document filled with the examples': '예제를 채워 넣은 문서',
        'The template with its placeholders as written': '자리 표시자가 작성된 그대로의 템플릿',
        'The examples could not be filled in - the preview shows the template': '예제를 채워 넣을 수 없습니다 - 미리 보기에 템플릿이 표시됩니다',
        'Placeholders': '자리 표시자',
        'The placeholders of the template - a click on one puts its tag at the cursor': '템플릿의 자리 표시자 - 클릭하면 커서 위치에 태그를 넣습니다',
        'Shown': '표시',
        'Hidden': '숨김',
        'example view': '예제 보기',
        'template view': '템플릿 보기',
        // Editing in place: Enter and Shift+Enter
        "Editing on the page - Enter: new paragraph, Shift+Enter: new line, Ctrl+Enter or a click elsewhere keeps it, Escape cancels": "페이지에서 편집 중 - Enter: 새 단락, Shift+Enter: 새 줄, Ctrl+Enter 또는 다른 곳 클릭으로 적용, Escape로 취소",
        "A new paragraph inside bold, italic or a link is made in the code - Shift+Enter makes a new line": "굵게, 기울임꼴 또는 링크 안의 새 단락은 코드에서 만듭니다 - Shift+Enter는 새 줄을 만듭니다",
        /* ---------- Top bar ---------- */
        'Markdown Editor - home': 'Markdown 편집기 - 홈',
        'Markdown Editor': 'Markdown 편집기',
        'File': '파일',
        'My documents (Ctrl+O)': '내 문서 (Ctrl+O)',
        'My documents': '내 문서',
        'New document, or start this one over': '새 문서 또는 이 문서를 처음부터 다시',
        'New': '새로 만들기',
        'New blank document': '빈 새 문서',
        'An empty page - your other documents stay as they are': '빈 페이지 - 다른 문서는 그대로 유지됩니다',
        'README': 'README',
        'Project name, features, installation and usage': '프로젝트 이름, 기능, 설치, 사용법',
        'Article': '글',
        'Title, summary, sections and a quote': '제목, 요약, 절, 인용',
        'Meeting notes': '회의록',
        'Agenda, decisions and a table of tasks': '안건, 결정 사항, 할 일 표',
        'Checklist': '체크리스트',
        'Tasks to tick off, in groups': '그룹별로 완료 표시할 작업',
        'The welcome example': '환영 예제',
        'Shows what the editor can do': '편집기로 할 수 있는 것을 보여 줍니다',
        'Start this document over': '이 문서를 처음부터 다시',
        'Empties the text, keeps the pictures - "Undo" brings it back': '텍스트를 비우고 그림은 유지합니다 - “실행 취소”로 되돌릴 수 있습니다',
        'Open a .md file (or a picture) from your computer (you can also drag it into the window)': '컴퓨터에서 .md 파일(또는 그림)을 엽니다(창으로 끌어다 놓아도 됩니다)',
        'Open file…': '파일 열기…',
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
        'Save the document as a .md file (Ctrl+S)': '문서를 .md 파일로 저장 (Ctrl+S)',
        'Download .md': '.md 다운로드',
        'HTML, PDF, plain text and more (Ctrl+E)': 'HTML, PDF, 일반 텍스트 등 (Ctrl+E)',
        'Export…': '내보내기…',

        /* ---------- Views and work area ---------- */
        'View': '보기',
        'Edit': '편집',
        'Preview': '미리 보기',
        'Insert': '삽입',
        'Markdown code': 'Markdown 코드',
        'Copy the Markdown to the clipboard': 'Markdown을 클립보드에 복사',
        'Copy code': '코드 복사',
        'Copy': '복사',
        'Drag to change the width of the code area': '끌어서 코드 영역의 너비 변경',
        'Drag to change the width': '끌어서 너비 변경',
        'Formatting': '서식',
        'Bold (Ctrl+B)': '굵게 (Ctrl+B)',
        'Bold': '굵게',
        'Italic (Ctrl+I)': '기울임꼴 (Ctrl+I)',
        'Italic': '기울임꼴',
        'Strikethrough': '취소선',
        'Code in the text': '본문 속 코드',
        'Link (Ctrl+K)': '링크 (Ctrl+K)',
        'Heading': '제목',
        'Bulleted list': '글머리 기호 목록',
        'Numbered list': '번호 목록',
        'Task list': '작업 목록',
        'Table': '표',
        'Picture': '그림',
        'Insert picture': '그림 삽입',
        'Quote': '인용',
        'Code block': '코드 블록',
        'Math in the text (Ctrl+M)': '본문 속 수식 (Ctrl+M)',
        'Math': '수식',
        'Text size': '글자 크기',
        'Smaller text in the preview': '미리 보기 글자 작게',
        'Smaller text': '작은 글자',
        'Normal text size': '보통 글자 크기',
        'Larger text in the preview': '미리 보기 글자 크게',
        'Larger text': '큰 글자',
        'Preview of the document: click text to edit it, Ctrl+click follows a link': '문서 미리 보기: 텍스트를 클릭하면 편집하고, Ctrl+클릭하면 링크를 따라갑니다',
        'Updating…': '업데이트 중…',
        'Insert, pictures and outline': '삽입, 그림, 개요',
        'Ready-made pieces: structure, text, math, symbols': '미리 만든 요소: 구조, 텍스트, 수식, 기호',
        'The pictures of this document': '이 문서의 그림',
        'Pictures': '그림',
        'The headings of the document': '문서의 제목',
        'Outline': '개요',
        'The headings of the document. Click one to go there in the code and in the preview.': '문서의 제목입니다. 하나를 클릭하면 코드와 미리 보기에서 그 위치로 이동합니다.',
        'No headings yet - start a line with # and a space.': '아직 제목이 없습니다 - 줄을 #과 공백으로 시작하세요.',
        'Open it here': '여기에서 열기',
        'Drop the .md file or picture here': '.md 파일이나 그림을 여기에 놓으세요',
        'The document is empty - write Markdown on the left, or choose a template under "New".': '문서가 비어 있습니다 - 왼쪽에 Markdown을 쓰거나 “새로 만들기”에서 템플릿을 고르세요.',

        /* Problems above the code */
        'Hide': '숨기기',
        'Show': '표시',

        /* ---------- Insert tab ---------- */
        'Structure': '구조',
        'Heading 1': '제목 1',
        'Heading 2': '제목 2',
        'Heading 3': '제목 3',
        '# Heading': '# 제목',
        '## Heading': '## 제목',
        '### Heading': '### 제목',
        'Horizontal rule': '가로줄',
        'Apply page breaks': '페이지 나누기 적용',
        'New page': '새 페이지',
        'Document': '문서',
        '• Bulleted list': '• 글머리 기호 목록',
        '1. Numbered list': '1. 번호 목록',
        '☐ Task list': '☐ 작업 목록',
        'Fold-out section': '펼침 섹션',
        'Line break': '줄 바꿈',
        'Text': '텍스트',
        '**bold** (Ctrl+B)': '**굵게** (Ctrl+B)',
        '*italic* (Ctrl+I)': '*기울임꼴* (Ctrl+I)',
        '~~struck through~~': '~~취소선~~',
        'Link to a heading': '제목으로 가는 링크',
        '[text](#heading)': '[텍스트](#제목)',
        '[text](https://…) (Ctrl+K)': '[텍스트](https://…) (Ctrl+K)',
        '![description](name.png)': '![설명](name.png)',
        'Footnote': '각주',
        '[^1] at the cursor, the note at the end': '커서 위치에 [^1], 각주 내용은 끝에',
        'Key': '키',
        'A key as on the keyboard: <kbd>Ctrl</kbd>': '키보드 키 모양: <kbd>Ctrl</kbd>',
        '`code` between backticks': '백틱 사이의 `code`',
        '$x$ in the text': '본문 속 $x$',
        'Displayed': '별행 수식',
        '$$ … $$ on its own lines': '별도 줄에 $$ … $$',
        'Fraction': '분수',
        'Root': '근호',
        'x² Power': 'x² 거듭제곱',
        'x₁ Index': 'x₁ 첨자',
        '∑ Sum': '∑ 합',
        '∫ Integral': '∫ 적분',
        'lim Limit': 'lim 극한',
        '2×2 matrix': '2×2 행렬',
        'Cases': '경우 나누기',
        'Greek letters': '그리스 문자',
        'Symbols': '기호',
        'Pictures have their own tab:': '그림은 별도의 탭에 있습니다:',

        /* ---------- Pictures tab ---------- */
        'Add pictures…': '그림 추가…',
        'No pictures yet': '아직 그림이 없습니다',
        'Missing in this document': '이 문서에 없음',
        'Add file…': '파일 추가…',
        'Show where it is used': '사용 위치 보기',
        '![…](name) at the cursor': '커서 위치에 ![…](name)',
        'Rename - the code is changed along': '이름 바꾸기 - 코드도 함께 바뀝니다',
        'Rename': '이름 바꾸기',
        'Choose another file, keep the name': '다른 파일 선택, 이름은 유지',
        'Replace': '바꾸기',
        'Download the picture': '그림 다운로드',
        'Download': '다운로드',
        'Remove the picture from this document': '이 문서에서 그림 제거',
        'Remove': '제거',
        'New name': '새 이름',
        'Pictures belong to “': '그림은 “',
        '” and stay in your browser. Drop or paste them anywhere in the editor, or add them here;': '”에 속하며 브라우저에 남습니다. 편집기 어디에나 끌어다 놓거나 붙여 넣거나 여기에서 추가하세요.',
        'uses them.': '로 사용합니다.',

        /* ---------- Export ---------- */
        'Close': '닫기',
        'File name': '파일 이름',
        'HTML page (one file)': 'HTML 페이지 (파일 하나)',
        'PDF (print or save as PDF)': 'PDF (인쇄 또는 PDF로 저장)',
        'Plain text': '일반 텍스트',
        'Markdown (.md)': 'Markdown (.md)',
        'Markdown with pictures (ZIP)': '그림 포함 Markdown (ZIP)',
        'Result': '결과',
        'Download everything at once: .md, pictures, HTML and text': '한 번에 모두 다운로드: .md, 그림, HTML, 텍스트',
        'All formats (ZIP)': '모든 형식 (ZIP)',
        'Print / Save as PDF': '인쇄 / PDF로 저장',
        '(The HTML page - with its pictures and styles inside - is created when you download or copy it.)': '(그림과 스타일이 들어 있는 HTML 페이지는 다운로드하거나 복사할 때 만들어집니다.)',

        /* ---------- My documents ---------- */
        'Search by name': '이름으로 검색',
        'Search your documents': '문서 검색',
        'Open a .md file from your computer as a new document': '컴퓨터의 .md 파일을 새 문서로 열기',
        'New document': '새 문서',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.': '문서를 클릭하면 열립니다. 문서는 이 브라우저에만 저장되며 아무것도 업로드되지 않습니다. 브라우저의 사이트 데이터를 지우면 함께 삭제되므로 보관할 문서는 다운로드하세요.',
        'Download every document as a .md file (with its pictures) in one ZIP': '모든 문서를 .md 파일(그림 포함)로 ZIP 하나에 담아 다운로드',
        'Download all (ZIP)': '모두 다운로드 (ZIP)',
        'Duplicate': '복제',
        'Download as .md': '.md로 다운로드',
        'Delete': '삭제',
        'This document is open': '이 문서가 열려 있습니다',
        'Click to open this document': '클릭하면 이 문서가 열립니다',
        'No documents yet.': '아직 문서가 없습니다.',

        /* ---------- AI Assistant ---------- */
        'Any AI can write with you - ChatGPT, Claude, Gemini, Copilot.': '어떤 AI와도 함께 쓸 수 있습니다 - ChatGPT, Claude, Gemini, Copilot.',
        'Connected AI': '연결된 AI',
        'Connected to': '연결 대상',
        'the AI sends its result there, and it opens here.': 'AI가 결과를 그곳으로 보내면 여기에서 열립니다.',
        'What': '사이트',
        'tells the AI': '에서 AI에게 전하는 내용',
        'The AI should': 'AI가 할 일',
        'Change “': '변경: “',
        '”': '”',
        'Make a new document': '새 문서 만들기',
        'The AI\'s answer (or press Ctrl+V anywhere):': 'AI의 답변 (또는 아무 곳에서나 Ctrl+V):',
        'The document travels in the link after the “#”, which no server sees. What you paste into your AI is handled by its provider.': '문서는 링크의 “#” 뒤에 담겨 전달되며, 이 부분은 어떤 서버도 보지 못합니다. AI에 붙여 넣은 내용은 해당 AI 제공자가 처리합니다.',
        'The prompt - copy it with Ctrl+C': '프롬프트 - Ctrl+C로 복사하세요',
        'Copy prompt': '프롬프트 복사',

        /* the step with the link, also when the editor sets it anew (text by text) */
        'The AI answers with a link: click it, or paste the whole answer below.': 'AI가 링크로 답합니다: 링크를 클릭하거나 답변 전체를 아래에 붙여 넣으세요.',
        'takes it back.': '로 되돌릴 수 있습니다.',
        'The AI answers with a link:': 'AI가 링크로 답합니다:',
        'paste its whole answer below': '답변 전체를 아래에 붙여 넣으세요',
        '(a clicked link opens a separate editor).': '(클릭한 링크는 별도의 편집기를 엽니다).',
        '(no key yet)': '(아직 키 없음)',
        '(key valid while the editor is open)': '(편집기가 열려 있는 동안 유효한 키)',
        'The link could not be read': '링크를 읽을 수 없습니다',
        'The document in this link is incomplete or damaged. If the AI\'s link was split over several lines (as in a terminal), copy the whole answer and paste it into the editor with Ctrl+V - the editor joins the lines.': '이 링크의 문서가 불완전하거나 손상되었습니다. AI의 링크가 (터미널에서처럼) 여러 줄로 나뉘었다면 답변 전체를 복사해 Ctrl+V로 편집기에 붙여 넣으세요. 편집기가 줄을 이어 붙입니다.',
        'Loading…': '불러오는 중…',
        'Taken over by your editor': '편집기로 가져왔습니다',
        'The document is now in the Markdown Editor tab you already had open. Switch to that tab, or open it here.': '문서가 이미 열어 둔 Markdown 편집기 탭에 들어갔습니다. 그 탭으로 전환하거나 여기에서 여세요.',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)': '여기서는 복사할 수 없습니다 - 아래에 선택되어 있으니 Ctrl+C (⌘C)를 누르세요',
        'Paste it into your AI and say what it should write.': 'AI에 붙여 넣고 무엇을 쓸지 말해 주세요.',
        'Prompt copied - paste it into your AI and say what it should write': '프롬프트를 복사했습니다 - AI에 붙여 넣고 무엇을 쓸지 말해 주세요',
        'This link is incomplete or damaged - please ask the AI to send it again': '이 링크가 불완전하거나 손상되었습니다 - AI에게 다시 보내 달라고 하세요',

        /* ---------- Save to your server ---------- */
        'Save to your server': '내 서버에 저장',
        'Webhook address': '웹훅 주소',
        'https://example.com/api/markdown': 'https://example.com/api/markdown',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(선택 사항, “Authorization: Bearer …”로 전송, 이 탭을 닫을 때까지 보관)',
        'Send automatically a few seconds after each change (otherwise only when you click': '변경할 때마다 몇 초 후 자동으로 보내기 (그렇지 않으면',
        'or press Ctrl+S)': '을 클릭하거나 Ctrl+S를 누를 때만)',
        'Only for “': '“',
        '” (other documents use the general address)': '”에만 적용 (다른 문서는 일반 주소를 사용)',
        'What your server receives': '서버가 받는 내용',
        'A POST request with JSON (your server must allow CORS from https://md.giit.ch):': 'JSON이 담긴 POST 요청 (서버가 https://md.giit.ch에서 오는 요청을 CORS로 허용해야 합니다):',
        'Embed the editor in your website': '편집기를 웹사이트에 삽입',
        'Send now': '지금 보내기',
        'Save setting': '설정 저장',

        /* ---------- Help ---------- */
        'How it works': '사용 방법',
        'Keyboard shortcuts': '단축키',
        'Bold / italic around the selected text': '선택한 텍스트를 굵게 / 기울임꼴로',
        'Link': '링크',
        'Show the cursor\'s place in the preview': '미리 보기에서 커서 위치 표시',
        'Indent / outdent': '들여쓰기 / 내어쓰기',
        'Undo / redo': '실행 취소 / 다시 실행',
        'Save (download .md, or to your server) / export': '저장 (.md 다운로드 또는 내 서버로) / 내보내기',
        'Print / save as PDF': '인쇄 / PDF로 저장',
        'Problems (a missing picture, a link to a heading that is not there, a code block that is never closed, a table row with too many cells) are listed above the code - click one to go there.': '문제(없는 그림, 존재하지 않는 제목으로 가는 링크, 닫히지 않은 코드 블록, 셀이 너무 많은 표 행)는 코드 위에 나열됩니다. 클릭하면 그 위치로 이동합니다.',

        /* ---------- Messages ---------- */
        'The browser storage is full - download and delete documents under "My documents"': '브라우저 저장 공간이 가득 찼습니다 - “내 문서”에서 문서를 다운로드하고 삭제하세요',
        'The browser storage is full - delete or download documents under "My documents" first': '브라우저 저장 공간이 가득 찼습니다 - 먼저 “내 문서”에서 문서를 삭제하거나 다운로드하세요',
        'The browser storage is full - delete or download some documents first': '브라우저 저장 공간이 가득 찼습니다 - 먼저 일부 문서를 삭제하거나 다운로드하세요',
        'The browser storage is full': '브라우저 저장 공간이 가득 찼습니다',
        'Nothing to undo': '실행 취소할 내용이 없습니다',
        'Nothing to redo': '다시 실행할 내용이 없습니다',
        'This text changed in the code - wait for the preview, then try again': '이 텍스트가 코드에서 바뀌었습니다 - 미리 보기가 갱신되면 다시 시도하세요',
        'This box changed in the code - wait for the preview, then try again': '이 상자가 코드에서 바뀌었습니다 - 미리 보기가 갱신되면 다시 시도하세요',
        'This picture changed in the code - wait for the preview, then try again': '이 그림이 코드에서 바뀌었습니다 - 미리 보기가 갱신되면 다시 시도하세요',
        'The code changed meanwhile - the edit was not used': '그사이 코드가 바뀌어 편집이 반영되지 않았습니다',
        'This anchor is not in the document': '이 앵커는 문서에 없습니다',
        'The picture is removed from this document. Places that use it show its name in a frame. "Undo" does not bring it back.': '그림이 이 문서에서 제거됩니다. 그림을 쓰던 곳에는 틀 안에 이름이 표시됩니다. “실행 취소”로 되돌릴 수 없습니다.',
        'Pictures can be PNG, JPG, GIF, WebP, SVG or PDF': '그림은 PNG, JPG, GIF, WebP, SVG 또는 PDF일 수 있습니다',
        'The picture is larger than 12 MB': '그림이 12 MB보다 큽니다',
        'The picture could not be read': '그림을 읽을 수 없습니다',
        'This document is empty already': '이 문서는 이미 비어 있습니다',
        'Everything is removed; the pictures of the document stay. "Undo" brings the text back as long as the page is open.': '모든 내용이 제거되고 문서의 그림은 남습니다. 페이지가 열려 있는 동안 “실행 취소”로 텍스트를 되돌릴 수 있습니다.',
        'Start over': '처음부터 다시',
        'The file is larger than 8 MB': '파일이 8 MB보다 큽니다',
        'Downloaded': '다운로드했습니다',
        'Copied to the clipboard': '클립보드에 복사했습니다',
        'This browser does not allow copying this': '이 브라우저에서는 이것을 복사할 수 없습니다',
        'Code copied': '코드를 복사했습니다',
        '.md with its pictures downloaded (ZIP)': '.md와 그림을 다운로드했습니다 (ZIP)',
        '.md downloaded': '.md를 다운로드했습니다',
        'ZIP downloaded: .md, pictures, HTML and text': 'ZIP을 다운로드했습니다: .md, 그림, HTML, 텍스트',
        'Add': '추가',
        'The document and its pictures are removed from this browser for good. Download it first if you want to keep a copy.': '문서와 그림이 이 브라우저에서 영구적으로 삭제됩니다. 사본을 보관하려면 먼저 다운로드하세요.',

        /* ---------- Problems the preview finds (markdown.js) ---------- */
        '$$ is never closed - add a line with $$ after the formula': '$$가 닫히지 않았습니다 - 수식 뒤에 $$ 줄을 추가하세요',

        /* Words that German keeps from the English, but Korean does not */
        'Code': '코드',
        'Export': '내보내기',
        'Format': '형식',
        'Token': '토큰',
        'Name': '이름',
        'online': '온라인',
    },
    html: {
        '<b>Export</b> also has <b>Open in another editor</b>: it converts the document and opens it as a new document there. Anything the other format cannot hold is listed first.':
            '<b>내보내기</b>에는 <b>다른 편집기에서 열기</b>도 있습니다. 문서를 변환해 그곳에서 새 문서로 엽니다. 다른 형식에 담을 수 없는 내용은 먼저 표시됩니다.',
        '<b>Insert</b> &gt; <b>New page</b> sets a page break for printing and PDF; the preview shows it as a dashed line. Headings stay with their text and tables and pictures are not cut. In Export, <b>Apply page breaks</b> turns them off for a PDF.':
            '<b>삽입</b> &gt; <b>새 페이지</b>는 인쇄와 PDF용 페이지 나누기를 넣습니다. 미리 보기에는 점선으로 표시됩니다. 제목은 본문과 함께 유지되고 표와 이미지는 잘리지 않습니다. <b>내보내기</b>의 <b>페이지 나누기 적용</b>으로 PDF에서 끌 수 있습니다.',
        /* Export */
        'The print dialog opens with the document only. Choose <b>Save as PDF</b> (or "Microsoft Print to PDF") as the printer. In Chrome and Edge, untick "Headers and footers" if the browser offers it. The text in the PDF stays sharp and can be selected.': '문서 내용만 담긴 인쇄 대화 상자가 열립니다. 프린터로 <b>PDF로 저장</b>(또는 “Microsoft Print to PDF“)을 고르세요. Chrome과 Edge에서는 ”머리글 및 바닥글”이 있으면 선택을 해제하세요. PDF의 텍스트는 선명하게 유지되고 선택할 수 있습니다.',

        /* AI Assistant */
        'Click <b>Copy prompt</b>.': '<b>프롬프트 복사</b>를 클릭하세요.',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.': 'AI가 링크로 답합니다: 링크를 클릭하거나 답변 전체를 아래에 붙여 넣으세요. <b>실행 취소</b>로 되돌릴 수 있습니다.',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.': 'AI가 링크로 답합니다: <b>답변 전체를 아래에 붙여 넣으세요</b>(클릭한 링크는 별도의 편집기를 엽니다). <b>실행 취소</b>로 되돌릴 수 있습니다.',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.': '편집기는 저장한 각 버전을 내 서버(<b>웹훅</b>)로 보낼 수 있어, 작업을 원하는 곳에 보관할 수 있습니다. 여기에 주소를 입력하기 전에는 아무것도 보내지 않습니다.',
        'Also possible: <code>?src=&lt;URL of a .md file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>mdeditor:ai</code>, <code>mdeditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.': '이것도 가능합니다: <code>?src=&lt;URL of a .md file&gt;</code>는 파일을 열고, <code>&amp;webhook=&lt;URL&gt;</code>은 이 문서를 그곳에 저장합니다. 편집기를 별도의 창(<code>?embed=window</code>)으로 열 수도 있고, 페이지가 자체 AI 프롬프트와 세션 키를 넘겨 AI가 결과를 내 서버로 보내게 할 수도 있습니다(<code>mdeditor:ai</code>, <code>mdeditor:key-request</code>). 편집기 아래의 “내 웹사이트에서 편집기 사용하기”를 보세요. 자세한 내용은 <a href="/llms.txt">llms.txt</a>에 있습니다.',

        /* Help */
        '<b>Write</b> Markdown on the left - or start with <b>New</b> and one of the templates. The preview in the middle shows the document as you type.': '왼쪽에 Markdown을 <b>쓰세요</b>. 또는 <b>새로 만들기</b>에서 템플릿으로 시작하세요. 가운데 미리 보기는 입력하는 동안 문서를 보여 줍니다.',
        '<b>Click text in the preview</b> to edit it right there: the cursor is where you clicked, and the code\'s cursor goes to the same place. <b>Enter</b> starts a new paragraph; <b>Shift+Enter</b> inserts a line break. <b>Ctrl+Enter</b> (<b>Cmd+Enter</b> on macOS) or a click elsewhere applies the edit; <b>Escape</b> cancels. Each edit is one step for Undo. Characters such as <code>*</code> or <code>_</code> are escaped so they stay text. A click on math, a picture or code jumps to its place in the code instead. <b>Ctrl</b> + click follows a link. A check box of a task list ticks the task in the code.': '<b>미리 보기의 텍스트를 클릭</b>하면 그 자리에서 편집할 수 있습니다: 커서는 클릭한 곳에 있고 코드의 커서도 같은 곳으로 갑니다. <b>Enter</b>는 새 단락을 시작하고, <b>Shift+Enter</b>는 줄을 바꿉니다. <b>Ctrl+Enter</b>(macOS에서는 <b>Cmd+Enter</b>)를 누르거나 다른 곳을 클릭하면 편집 내용이 적용되고, <b>Escape</b>를 누르면 취소됩니다. 편집 한 번은 실행 취소 한 번으로 되돌릴 수 있습니다. <code>*</code>나 <code>_</code> 같은 문자는 텍스트로 남도록 이스케이프됩니다. 수식, 그림, 코드를 클릭하면 대신 코드의 해당 위치로 이동합니다. <b>Ctrl</b> + 클릭은 링크를 따라갑니다. 작업 목록의 체크박스를 선택하면 코드에도 완료 표시가 반영됩니다.',
        '<b>Insert</b> on the right has ready-made pieces (headings, lists, tables, math, symbols); <b>Pictures</b> holds the pictures of the document; <b>Outline</b> lists the headings.': '오른쪽의 <b>삽입</b>에는 미리 만든 요소(제목, 목록, 표, 수식, 기호)가 있고, <b>그림</b>에는 문서의 그림이, <b>개요</b>에는 제목 목록이 있습니다.',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser.': '<b>내 문서</b>(왼쪽 위의 폴더 버튼)는 이 브라우저에 보관된 모든 문서를 보여 줍니다.',
        '<b>Export</b> makes an HTML page, a PDF (via the print dialog) or plain text. <b>Download .md</b> saves the code (with its pictures as ZIP).': '<b>내보내기</b>는 HTML 페이지, PDF(인쇄 대화 상자로), 일반 텍스트를 만듭니다. <b>.md 다운로드</b>는 코드를 저장합니다(그림이 있으면 ZIP으로).',
        'The preview understands CommonMark with GitHub\'s tables, task lists, strikethrough, autolinks and footnotes, and math in <code>$…$</code> and <code>$$…$$</code>. HTML in the Markdown is shown without scripts, styles, frames and forms.': '미리 보기는 GitHub의 표, 작업 목록, 취소선, 자동 링크, 각주가 포함된 CommonMark와 <code>$…$</code> 및 <code>$$…$$</code> 안의 수식을 이해합니다. Markdown 안의 HTML은 스크립트, 스타일, 프레임, 양식 없이 표시됩니다.',
        'Math: <code>$…$</code> around the selection': '수식: 선택 영역을 <code>$…$</code>로 감싸기',
        'Lines in or out of a comment (<code>&lt;!-- --&gt;</code>)': '줄 주석 처리 / 해제 (<code>&lt;!-- --&gt;</code>)',
        '<kbd>Enter</kbd> in a list starts the next item (<code>-</code>, <code>1.</code>, <code>- [ ]</code>, <code>&gt;</code>); on an empty item it ends the list. <code>* _ ` ~ $ [ (</code> close by themselves around a selection.': '목록에서 <kbd>Enter</kbd>를 누르면 다음 항목이 시작되고(<code>-</code>, <code>1.</code>, <code>- [ ]</code>, <code>&gt;</code>), 빈 항목에서 누르면 목록이 끝납니다. <code>* _ ` ~ $ [ (</code>는 선택 영역을 감싸며 자동으로 닫힙니다.',
    },
    patterns: [
        /* ---------- Status lines ---------- */
        ['^(\\d+) lines · ([\\d.]+ K?B) · (\\d+) (?:word|words)$', '$1줄 · $2 · $3단어'],
        ['^\\.md and (\\d+) (?:picture|pictures)$', '.md와 그림 $1개'],
        ['^([\\d,]+) bytes$', (m, b) => `${b} 바이트`],
        ['^\\d{1,3}(?:,\\d{3})+$', '$&'],

        /* Problems above the code */
        ['^(\\d+) (?:error|errors)$', '오류 $1개'],
        ['^· (\\d+) (?:note|notes)$', '· 참고 $1개'],
        ['^(\\d+) (?:note|notes)$', '참고 $1개'],
        ['^Line (\\d+)$', '$1번째 줄'],
        ['^The preview failed: (.*)$', '미리 보기 실패: $1'],
        ['^The preview stopped at an unexpected problem: (.*)$', '미리 보기가 예상하지 못한 문제로 멈췄습니다: $1'],
        ['^Picture "(.+)" not found - drag the picture into the editor \\(or add it in the Pictures tab\\)$', '그림 “$1”을(를) 찾을 수 없습니다 - 그림을 편집기로 끌어다 놓으세요(또는 그림 탭에서 추가하세요)'],
        ['^The link to "(.+)" has no heading or anchor of that name$', '“$1”(으)로 가는 링크에 그런 이름의 제목이나 앵커가 없습니다'],
        ['^This code block \\((.+)\\) is never closed - add a line with (.+) after the code$', '이 코드 블록($1)이 닫히지 않았습니다 - 코드 뒤에 $2 줄을 추가하세요'],
        ['^This table row has (\\d+) (?:cell|cells), the header has (\\d+)$', '이 표 행의 셀은 $1개인데 머리글 행은 $2개입니다'],
        ['^Math: (.*)$', '수식: $1'],

        /* ---------- Pictures tab ---------- */
        ['^(\\d+) (?:picture|pictures) · (.+)$', '그림 $1개 · $2'],
        ['^Choose the file for (.+)$', '$1의 파일 선택'],
        ['^Insert !\\[…\\]\\((.+)\\) at the cursor$', '커서 위치에 ![…]($1) 삽입'],
        ['^used (\\d+)×$', '$1회 사용'],
        ['^(.* · )?not used yet$', (m, a) => `${a || ''}아직 사용 안 함`],

        /* ---------- Top bar and My documents ---------- */
        ['^"(.+)" is open\\. My documents: open, rename, duplicate or delete your documents \\(Ctrl\\+O\\)$', '“$1”이(가) 열려 있습니다. 내 문서: 문서 열기, 이름 바꾸기, 복제, 삭제 (Ctrl+O)'],
        ['^Start "(.+)" over\\?$', '“$1”을(를) 처음부터 다시 시작할까요?'],
        ['^Start "(.+)" over$', '“$1” 처음부터 다시'],
        ['^(\\d+) (?:document|documents) · (.+) in this browser$', (m, k, s) => `문서 ${k}개 · 이 브라우저에 ${formatSize(s)}`],
        ['^No document named "(.*)"\\.$', '“$1”이라는 문서가 없습니다.'],
        ['^Open now · (.+)$', (m, s) => `지금 열림 · ${formatSize(s)}`],
        ['^(just now|yesterday|\\d+ min ago|\\d+ h ago|[A-Z][a-z]{2} \\d{1,2}, \\d{4}) · (.+)$', (m, w, s) => `${formatTime(w)} · ${formatSize(s)}`],
        ['^(.+) \\(open now\\)$', '$1 (지금 열림)'],
        ['^ZIP with (\\d+) (?:document|documents) downloaded$', '문서 $1개가 든 ZIP을 다운로드했습니다'],

        /* ---------- AI Assistant ---------- */
        ['^Part (\\d+) of (\\d+) received$', '$2개 중 $1번째 부분을 받았습니다'],
        ['^Open the other (?:link|links) from the AI too \\(still missing: part (.+)\\)\\.$', 'AI의 다른 링크도 여세요(아직 빠진 부분: $1).'],
        ['^Part (\\d+) of (\\d+) received - paste the other (?:link|links) too \\(missing: (.+)\\)$', '$2개 중 $1번째 부분을 받았습니다 - 다른 링크도 붙여 넣으세요(빠진 부분: $3)'],
        ['^The AI sends the document to (.+) with a key that only works for this session\\. What you paste into your AI is handled by its provider\\.$', 'AI는 이 세션에서만 유효한 키로 문서를 $1에 보냅니다. AI에 붙여 넣은 내용은 해당 AI 제공자가 처리합니다.'],
        ['^The AI sends its result to (.+) by itself, and it opens here\\. If it answers with a link, paste its answer below\\.$', 'AI가 결과를 직접 $1에 보내고, 결과는 여기에서 열립니다. AI가 링크로 답하면 답변을 아래에 붙여 넣으세요.'],
        ['^No key from (.+) - the prompt asks the AI for a link instead$', '$1에서 키를 받지 못했습니다 - 프롬프트가 대신 AI에게 링크를 요청합니다'],
        ['^Prompt copied - the AI sends its result to (.+)$', '프롬프트를 복사했습니다 - AI가 결과를 $1에 보냅니다'],

        /* ---------- Messages with names ---------- */
        ['^"(.+)" is now "(.+)"$', '“$1”의 이름이 이제 “$2”입니다'],
        ['^Remove "(.+)"\\?$', '“$1”을(를) 제거할까요?'],
        ['^"(.+)" now shows the new picture$', '“$1”에 이제 새 그림이 표시됩니다'],
        ['^Picture "(.+)" added to "(.+)"$', '그림 “$1”을(를) “$2”에 추가했습니다'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '“$1”이(가) 이제 비어 있습니다 - “실행 취소”로 되돌릴 수 있습니다'],
        ['^"(.+)" opened$', '“$1”을(를) 열었습니다'],
        ['^New document "(.+)" - your other documents are under "My documents"$', '새 문서 “$1” - 다른 문서는 “내 문서”에 있습니다'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$', 'AI가 만든 새 문서 “$1” - 다른 문서는 바뀌지 않았습니다'],
        ['^"(.+)" is not a Markdown file$', '“$1”은(는) Markdown 파일이 아닙니다'],
        ['^Opened "(.+)" - it is now in "My documents"$', '“$1”을(를) 열었습니다 - 이제 “내 문서”에 있습니다'],
        ['^Opened "(.+)" with (\\d+) (?:picture|pictures)$', '“$1”을(를) 그림 $2개와 함께 열었습니다'],
        ['^"(.+)" could not be opened: (.*)$', (m, f, why) => `“${f}”을(를) 열 수 없습니다: ${ZIP[why] || why}`],
        ['^Document received - the preview found (\\d+) (?:problem|problems), see above the code$', '문서를 받았습니다 - 미리 보기에서 문제 $1개를 찾았습니다. 코드 위를 보세요'],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', 'AI가 “$1”을(를) 바꿨습니다 - “실행 취소”로 되돌릴 수 있습니다'],
        ['^"(.+)" duplicated$', '“$1”을(를) 복제했습니다'],
        ['^Delete "(.+)"\\?$', '“$1”을(를) 삭제할까요?'],
        ['^"(.+)" deleted$', '“$1”을(를) 삭제했습니다'],

        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', '$1 열기'],
    ],
};
