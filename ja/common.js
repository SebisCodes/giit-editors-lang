/* Japanese texts that all giit editors share: the links to giit.ch in the bar,
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
 * Translates the text the pattern found (doc in the English pattern).
 * @param {string} w - the English text the pattern found.
 * @returns {string} the text in the language.
 */
const translateThing = w => (w === 'drawing' ? '図' : 'ドキュメント');

export default {
    text: {
        "All giit editors": "すべての giit エディター",
        "by giit.ch": "giit.ch 製",
        "Open in another editor": "別のエディターで開く",
        "Not everything can be converted": "すべてを変換できるわけではありません",
        "Open anyway": "それでも開く",
        "Pictures and other files of the document stay here: add them again in the other editor": "ドキュメントの画像やその他のファイルはここに残ります。別のエディターで追加し直してください",
        "The document is too long for a link - export it and open the file in the other editor": "ドキュメントが長すぎてリンクにできません。エクスポートして別のエディターでファイルを開いてください",
        "Scripts and styles": "スクリプトとスタイル",
        "Form fields": "フォームの入力欄",
        "Footnotes, labels and references": "脚注、ラベル、参照",
        "LaTeX commands and environments without an equivalent": "対応するものがない LaTeX のコマンドと環境",
        "Document class, packages and page settings": "ドキュメントクラス、パッケージ、ページ設定",
        "The table of contents": "目次",
        "Typst functions without an equivalent": "対応するものがない Typst の関数",
        "Formulas are copied as written: check them": "数式はそのままコピーされます。確認してください",
        "Formulas become plain code": "数式は通常のコードになります",
        "Links with an unsafe address": "安全でないアドレスのリンク",
        "Comments": "コメント",
        "Empty values (null): TOML has no null": "空の値 (null): TOML には null がありません",
        "The data is not a table: it goes under the key \"value\"": "データがテーブルではありません: キー「value」の下に入ります",
        "Keys that are not valid XML names are changed": "有効な XML 名ではないキーは変更されます",
        "Only the first list goes into the table": "表に入るのは最初のリストだけです",
        "Nested values go into one cell as JSON": "入れ子の値は JSON として 1 つのセルに入ります",
        "The picture could not be stored in this browser (storage full or blocked) - it is kept only until the page is closed: download the document to keep it": "この画像をブラウザーに保存できませんでした (保存領域がいっぱいかブロックされています)。ページを閉じるまでしか保持されません。残すには文書をダウンロードしてください",
        "Column names that occur twice (numbered)": "重複する列名 (番号付き)",
        "Fields beyond the header (named Column N)": "見出し行を超えるフィールド (Column N という名前)",
        "The AI's result could not be opened - your browser's storage may be full": "AI の結果を開けませんでした。ブラウザーの保存領域がいっぱいの可能性があります",
        "The AI's result could not be opened": "AI の結果を開けませんでした",
        "Types of values: SHLS holds every value as text": "値の型: SHLS はすべての値をテキストとして保持します",
        "This data has no list of records, so it does not make a table": "このデータにはレコードのリストがないため、表にできません",
        "The XML cannot be read - fix the problem above the code first": "XML を読み取れません。先にコードの上の問題を修正してください",
        "It could not be converted": "変換できませんでした",
        "Content from a third party, not checked by giit.ch": "第三者のコンテンツです。giit.ch は確認していません",
        // Wrapping long lines in the code view (wrap.js)
        "Wrap": "折り返し",
        "Wrap long lines in the view - each line of the code stays one line (Alt+Z)": "長い行を表示上で折り返します。コードの各行は 1 行のままです (Alt+Z)",
        'Cancel': 'キャンセル',
        'Allow': '許可',
        'No': 'いいえ',
        'Yes': 'はい',
        'Save': '保存',
        'Saved': '保存しました',
        'Sending…': '送信中…',
        'Not connected': '未接続',
        'Save on this server?': 'このサーバーに保存しますか？',
        'The address for the AI must be https:// on the site of the page around the editor - it is not used':
            'AI 用のアドレスは、エディターを埋め込んだページと同じサイトの https:// である必要があります。このアドレスは使用されません',
        'The key from the page is not valid (16 to 512 letters, digits or ._~+/=-)':
            'ページから渡されたキーが無効です (16～512 文字の英字、数字、._~+/=-)',
        'This document stays in your browser - only the document from the page is saved there':
            'このドキュメントはブラウザー内に残ります。そこに保存されるのはページから渡されたドキュメントだけです',
        'This drawing stays in your browser - only the drawing from the page is saved there':
            'この図はブラウザー内に残ります。そこに保存されるのはページから渡された図だけです',
        'The page that opened the editor is closed - download the document so nothing is lost':
            'エディターを開いたページが閉じられました。内容を失わないよう、ドキュメントをダウンロードしてください',
        'The page that opened the editor is closed - download the drawing so nothing is lost':
            'エディターを開いたページが閉じられました。内容を失わないよう、図をダウンロードしてください',
        'The webhook from the page is not an https:// address - it is not used':
            'ページから渡された Webhook が https:// のアドレスではないため、使用されません',
        'Please enter an https:// address (or http://localhost for testing)':
            'https:// のアドレスを入力してください (テスト用には http://localhost)',
        'Saved versions now go to your server': '今後、保存した版は自分のサーバーに送られます',
        'Webhook switched off': 'Webhook をオフにしました',
        'The webhook in the link is not an https:// address - it is not used':
            'リンク内の Webhook が https:// のアドレスではないため、使用されません',
        'The webhook in the link only works together with ?src= - it is not used':
            'リンク内の Webhook は ?src= と一緒でないと機能しないため、使用されません',
        'A token in a link is not used - enter it under "Save to server"':
            'リンク内のトークンは使われません - 「サーバーに保存」で入力してください',
        'Save - hand the document to the page around the editor (Ctrl+S)':
            '保存 - ドキュメントをエディターを埋め込んだページに渡す (Ctrl+S)',
        'Save - hand the drawing to the page around the editor (Ctrl+S)':
            '保存 - 図をエディターを埋め込んだページに渡す (Ctrl+S)',
        'AI through a website: not connected': 'Web サイト経由の AI: 未接続',
        'Browser agent (WebMCP): not offered by this browser': 'ブラウザーエージェント (WebMCP): このブラウザーでは利用できません',
        'Browser agent (WebMCP): available, not used yet': 'ブラウザーエージェント (WebMCP): 利用可能、まだ未使用',
        'AI links: cannot reach the editor inside this website - paste the AI\'s answer here':
            'AI のリンク: この Web サイト内のエディターには届きません。AI の回答をここに貼り付けてください',
        'AI links: open the editor in a new tab': 'AI のリンク: エディターを新しいタブで開きます',
        'AI links: go to another editor tab (the one used last)': 'AI のリンク: 別のエディタータブ (最後に使ったもの) に届きます',
        'AI links: arrive in this tab': 'AI のリンク: このタブに届きます',
        'AI in this session: nothing received yet - copy the prompt for your AI': 'このセッションの AI: まだ何も受け取っていません。AI 用のプロンプトをコピーしてください',
    },
    patterns: [
        ['^Saved on (.+) at (\\d{1,2}):(\\d{2})\\s?(AM|PM)?$', (x, host, h, m, ap) => `${host} に保存しました (${formatHour(h, m, ap)})`],
        ['^Saved on (.+)$', '$1 に保存しました'],
        ['^Not saved on (.+?): no connection, or the server does not allow it \\(CORS\\)$', '$1 に保存できませんでした: 接続できないか、サーバーが許可していません (CORS)'],
        ['^Not saved on (.+?): The server answered (\\d+)(.*)$', '$1 に保存できませんでした: サーバーの応答は $2$3 でした'],
        ['^Not saved on (.+?): the (document|drawing) with its pictures is (\\d+) MB - at most 40 MB go in one request$', (m, h, w, mb) => `${h} に保存できませんでした: 画像を含めた${translateThing(w)}が ${mb} MB あります。1 回のリクエストで送れるのは 40 MB までです`],
        ['^"(.+)" was changed in another tab - your version here is kept as "(.+)"$', '「$1」は別のタブで変更されました - ここでの版は「$2」として保存されます'],
        ['^Not saved on (.+?): the server did not answer within (\\d+) seconds$', '$1 に保存できませんでした: サーバーが $2 秒以内に応答しませんでした'],
        ['^Not saved on (.+?): (.*)$', '$1 に保存できませんでした: $2'],
        ['^Saves to (.+) \\(set by the page\\)$', '$1 に保存します (ページが設定)'],
        ['^Save - send the (document|drawing) to (.+) \\(Ctrl\\+S\\)$', (m, w, h) => `保存 - ${translateThing(w)}を ${h} に送信 (Ctrl+S)`],
        ['^The AI\'s new (document|drawing) is open as "(.+)" - it stays in your browser and is not saved to (.+)$',
            (m, w, n, l) => `AI による新しい${translateThing(w)}が「${n}」として開いています。ブラウザー内に残り、${l} には保存されません`],
        ['^The AI\'s result from (.+) is open - Undo takes it back$', '$1 からの AI の結果が開いています。「元に戻す」で元に戻せます'],
        ['^The file could not be opened: no connection, or the server does not allow it \\(CORS\\)$', 'ファイルを開けませんでした: 接続できないか、サーバーが許可していません (CORS)'],
        ['^The file could not be opened: only https:// addresses can be opened$', 'ファイルを開けませんでした: 開けるのは https:// のアドレスだけです'],
        ['^The file could not be opened: the server answered (\\d+)$', 'ファイルを開けませんでした: サーバーの応答は $1 でした'],
        ['^The file could not be opened: the page loaded another document meanwhile$', 'ファイルを開けませんでした: その間にページが別の文書を読み込みました'],
        ['^The file could not be opened: (.*)$', 'ファイルを開けませんでした: $1'],
        ['^This link asks the editor to send the saved versions of "(.+)" to (.+) while this page is open\\. Only allow it if you trust that site\\.$',
            'このリンクは、このページを開いている間、「$1」の保存した版を $2 に送るようエディターに求めています。そのサイトを信頼できる場合にだけ許可してください。'],
        ['^AI in this session: a document from an AI link, just now$', 'このセッションの AI: AI のリンクからのドキュメント、たった今'],
        ['^AI in this session: a document from an AI link, (\\d+) min ago$', 'このセッションの AI: AI のリンクからのドキュメント、$1 分前'],
        ['^AI in this session: a result through the page, just now$', 'このセッションの AI: ページ経由の結果、たった今'],
        ['^AI in this session: a result through the page, (\\d+) min ago$', 'このセッションの AI: ページ経由の結果、$1 分前'],
        ['^AI in this session: a browser agent \\(WebMCP\\), just now$', 'このセッションの AI: ブラウザーエージェント (WebMCP)、たった今'],
        ['^AI in this session: a browser agent \\(WebMCP\\), (\\d+) min ago$', 'このセッションの AI: ブラウザーエージェント (WebMCP)、$1 分前'],
        ['^AI through (.+): connected, waiting for the key$', '$1 経由の AI: 接続済み、キーを待っています'],
        ['^AI through (.+): connected$', '$1 経由の AI: 接続済み'],
        ['^Browser agent \\(WebMCP\\): active, last used just now$', 'ブラウザーエージェント (WebMCP): 有効、最後の使用はたった今'],
        ['^Browser agent \\(WebMCP\\): active, last used (\\d+) min ago$', 'ブラウザーエージェント (WebMCP): 有効、最後の使用は $1 分前'],
        ['^Browser agent \\(WebMCP\\): available, last used just now$', 'ブラウザーエージェント (WebMCP): 利用可能、最後の使用はたった今'],
        ['^Browser agent \\(WebMCP\\): available, last used (\\d+) min ago$', 'ブラウザーエージェント (WebMCP): 利用可能、最後の使用は $1 分前'],
    ],
};
