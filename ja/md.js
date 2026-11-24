/* Japanese texts of the Markdown editor: the bar, the work area (code,
   preview, insert, pictures, outline), its dialogs and messages, and the
   problems the preview finds in the code. What all editors share is in
   common.js; how the dictionaries are used is described in
   i18n.js. Names of documents, pictures and anchors stay as they are: the
   patterns copy them into the Japanese text. */

import { formatTime, formatSize } from './format.js';

/* When a document was last changed (files.js): "just now", "5 min ago", "Oct 25, 2026" … */

/* "123 bytes" / "1.5 KB" -> Japanese unit */

/* Reasons a ZIP could not be opened (app.js openZip) */
/**
 * Translates the text the pattern found (zip in the English pattern).
 * @param {string} why - the English text the pattern found.
 * @returns {string} the text in the language.
 */
const translateZipReason = why => (why === 'it is not a ZIP file' ? 'ZIP ファイルではありません' : why.replace(/^there is no (\S+) file in it$/, '$1 ファイルが含まれていません'));

export default {
    text: {
        'Side panel': 'サイドパネル',
        'Show or hide the side panel': 'サイドパネルを表示または非表示',
        'Examples': 'サンプル',
        'Template': 'テンプレート',
        'View of the preview': 'プレビューの表示',
        'The document filled with the examples': 'サンプルを埋め込んだドキュメント',
        'The template with its placeholders as written': 'プレースホルダーを記述したままのテンプレート',
        'The examples could not be filled in - the preview shows the template': 'サンプルを埋め込めませんでした - プレビューにはテンプレートが表示されます',
        'Placeholders': 'プレースホルダー',
        'The placeholders of the template - a click on one puts its tag at the cursor': 'テンプレートのプレースホルダー - クリックするとカーソル位置にタグを挿入します',
        'Shown': '表示',
        'Hidden': '非表示',
        'example view': 'サンプル表示',
        'template view': 'テンプレート表示',
        // Editing in place: Enter and Shift+Enter
        "Editing on the page - Enter: new paragraph, Shift+Enter: new line, Ctrl+Enter or a click elsewhere keeps it, Escape cancels": "ページで編集中 - Enter：新しい段落、Shift+Enter：改行、Ctrl+Enter または他の場所をクリックで確定、Escape で取り消し",
        "A new paragraph inside bold, italic or a link is made in the code - Shift+Enter makes a new line": "太字・斜体・リンクの中での段落分けはコードで行います - Shift+Enter で改行します",
        /* ---------- Top bar ---------- */
        'Markdown Editor - home': 'Markdown エディター - ホーム',
        'Markdown Editor': 'Markdown エディター',
        'File': 'ファイル',
        'My documents (Ctrl+O)': 'マイドキュメント (Ctrl+O)',
        'My documents': 'マイドキュメント',
        'New document, or start this one over': '新しいドキュメント、またはこのドキュメントを最初から',
        'New': '新規',
        'New blank document': '新しい空白のドキュメント',
        'An empty page - your other documents stay as they are': '空のページ - ほかのドキュメントはそのままです',
        'README': 'README',
        'Project name, features, installation and usage': 'プロジェクト名、機能、インストール、使い方',
        'Article': '記事',
        'Title, summary, sections and a quote': 'タイトル、要約、セクション、引用',
        'Meeting notes': '議事録',
        'Agenda, decisions and a table of tasks': '議題、決定事項、タスクの表',
        'Checklist': 'チェックリスト',
        'Tasks to tick off, in groups': 'グループ別にチェックできるタスク',
        'The welcome example': 'ウェルカムサンプル',
        'Shows what the editor can do': 'エディターでできることを紹介します',
        'Start this document over': 'このドキュメントを最初からやり直す',
        'Empties the text, keeps the pictures - "Undo" brings it back': 'テキストを空にし、画像は残します。「元に戻す」で復元できます',
        'Open a .md file (or a picture) from your computer (you can also drag it into the window)': 'コンピューターから .md ファイル (または画像) を開きます (ウィンドウにドラッグすることもできます)',
        'Open file…': 'ファイルを開く…',
        'Undo the last change (Ctrl+Z)': '最後の変更を元に戻す (Ctrl+Z)',
        'Undo': '元に戻す',
        'Redo the change you just undid (Ctrl+Y)': '元に戻した変更をやり直す (Ctrl+Y)',
        'Redo': 'やり直す',
        'Output': '出力',
        'Color theme': 'カラーテーマ',
        'Light theme': 'ライトテーマ',
        'Dark theme': 'ダークテーマ',
        'Same as your system setting': 'システム設定に合わせる',
        'Automatic theme (system setting)': '自動テーマ (システム設定)',
        'Let any AI write in this editor': '任意の AI にこのエディターで書いてもらいます',
        'AI Assistant': 'AI アシスタント',
        'Save to your own server and embed the editor in your website': '自分のサーバーに保存、エディターを自分のサイトに埋め込む',
        'Save to server': 'サーバーに保存',
        'How it works and keyboard shortcuts (?)': '使い方とキーボードショートカット (?)',
        'Help': 'ヘルプ',
        'Save the document as a .md file (Ctrl+S)': 'ドキュメントを .md ファイルとして保存 (Ctrl+S)',
        'Download .md': '.md をダウンロード',
        'HTML, PDF, plain text and more (Ctrl+E)': 'HTML、PDF、プレーンテキストなど (Ctrl+E)',
        'Export…': 'エクスポート…',

        /* ---------- Views and work area ---------- */
        'View': '表示',
        'Edit': '編集',
        'Preview': 'プレビュー',
        'Insert': '挿入',
        'Markdown code': 'Markdown コード',
        'Copy the Markdown to the clipboard': 'Markdown をクリップボードにコピー',
        'Copy code': 'コードをコピー',
        'Copy': 'コピー',
        'Drag to change the width of the code area': 'ドラッグしてコード領域の幅を変更',
        'Drag to change the width': 'ドラッグして幅を変更',
        'Formatting': '書式',
        'Bold (Ctrl+B)': '太字 (Ctrl+B)',
        'Bold': '太字',
        'Italic (Ctrl+I)': '斜体 (Ctrl+I)',
        'Italic': '斜体',
        'Strikethrough': '取り消し線',
        'Code in the text': '文中のコード',
        'Link (Ctrl+K)': 'リンク (Ctrl+K)',
        'Heading': '見出し',
        'Bulleted list': '箇条書き',
        'Numbered list': '番号付きリスト',
        'Task list': 'タスクリスト',
        'Table': '表',
        'Picture': '画像',
        'Insert picture': '画像を挿入',
        'Quote': '引用',
        'Code block': 'コードブロック',
        'Math in the text (Ctrl+M)': '文中の数式 (Ctrl+M)',
        'Math': '数式',
        'Text size': '文字サイズ',
        'Smaller text in the preview': 'プレビューの文字を小さく',
        'Smaller text': '文字を小さく',
        'Normal text size': '標準の文字サイズ',
        'Larger text in the preview': 'プレビューの文字を大きく',
        'Larger text': '文字を大きく',
        'Preview of the document: click text to edit it, Ctrl+click follows a link': 'ドキュメントのプレビュー: テキストをクリックすると編集、Ctrl+クリックでリンクを開きます',
        'Updating…': '更新中…',
        'Insert, pictures and outline': '挿入、画像、アウトライン',
        'Ready-made pieces: structure, text, math, symbols': '定型パーツ: 構造、テキスト、数式、記号',
        'The pictures of this document': 'このドキュメントの画像',
        'Pictures': '画像',
        'The headings of the document': 'ドキュメントの見出し',
        'Outline': 'アウトライン',
        'The headings of the document. Click one to go there in the code and in the preview.': 'ドキュメントの見出しです。クリックするとコードとプレビューのその位置へ移動します。',
        'No headings yet - start a line with # and a space.': '見出しはまだありません。行の先頭に # とスペースを書いてください。',
        'Open it here': 'ここで開く',
        'Drop the .md file or picture here': '.md ファイルまたは画像をここにドロップ',

        'The document is empty - write Markdown on the left, or choose a template under "New".': 'ドキュメントは空です。左に Markdown を書くか、「新規」でテンプレートを選んでください。',

        /* Problems above the code */
        'Hide': '隠す',
        'Show': '表示',

        /* ---------- Insert tab ---------- */
        'Structure': '構造',
        'Heading 1': '見出し 1',
        'Heading 2': '見出し 2',
        'Heading 3': '見出し 3',
        '# Heading': '# 見出し',
        '## Heading': '## 見出し',
        '### Heading': '### 見出し',
        'Horizontal rule': '水平線',
        'Apply page breaks': '改ページを適用',
        'New page': '改ページ',
        'Document': 'ドキュメント',
        '• Bulleted list': '• 箇条書き',
        '1. Numbered list': '1. 番号付きリスト',
        '☐ Task list': '☐ タスクリスト',
        'Fold-out section': '折りたたみ',
        'Line break': '改行',
        'Text': 'テキスト',
        '**bold** (Ctrl+B)': '**太字** (Ctrl+B)',
        '*italic* (Ctrl+I)': '*斜体* (Ctrl+I)',
        '~~struck through~~': '~~取り消し線~~',
        'Link to a heading': '見出しへのリンク',
        '[text](#heading)': '[テキスト](#見出し)',
        '[text](https://…) (Ctrl+K)': '[テキスト](https://…) (Ctrl+K)',
        '![description](name.png)': '![説明](name.png)',
        'Footnote': '脚注',
        '[^1] at the cursor, the note at the end': 'カーソル位置に [^1]、注は末尾に',
        'Key': 'キー',
        'A key as on the keyboard: <kbd>Ctrl</kbd>': 'キーボードのキー表記: <kbd>Ctrl</kbd>',
        '`code` between backticks': 'バッククォートで囲んだ `code`',
        '$x$ in the text': '文中の $x$',
        'Displayed': '別行立て',
        '$$ … $$ on its own lines': '独立した行に $$ … $$',
        'Fraction': '分数',
        'Root': '根号',
        'x² Power': 'x² べき乗',
        'x₁ Index': 'x₁ 添字',
        '∑ Sum': '∑ 総和',
        '∫ Integral': '∫ 積分',
        'lim Limit': 'lim 極限',
        '2×2 matrix': '2×2 行列',
        'Cases': '場合分け',
        'Greek letters': 'ギリシャ文字',
        'Symbols': '記号',
        'Pictures have their own tab:': '画像は専用のタブにあります:',

        /* ---------- Pictures tab ---------- */
        'Add pictures…': '画像を追加…',
        'No pictures yet': '画像はまだありません',
        'Missing in this document': 'このドキュメントにありません',
        'Add file…': 'ファイルを追加…',
        'Show where it is used': '使用箇所を表示',
        '![…](name) at the cursor': 'カーソル位置に ![…](name)',
        'Rename - the code is changed along': '名前を変更 - コードも一緒に変更されます',
        'Rename': '名前を変更',
        'Choose another file, keep the name': '別のファイルを選び、名前はそのままにする',
        'Replace': '置き換え',
        'Download the picture': '画像をダウンロード',
        'Download': 'ダウンロード',
        'Remove the picture from this document': 'このドキュメントから画像を削除',
        'Remove': '削除',
        'New name': '新しい名前',
        'Pictures belong to “': '画像は「',
        '” and stay in your browser. Drop or paste them anywhere in the editor, or add them here;': '」に属し、ブラウザー内に保存されます。エディターのどこにでもドロップまたは貼り付けるか、ここで追加してください。',
        'uses them.': 'が使用しています。',

        /* ---------- Export ---------- */
        'Close': '閉じる',
        'File name': 'ファイル名',
        'HTML page (one file)': 'HTML ページ (1 ファイル)',
        'PDF (print or save as PDF)': 'PDF (印刷または PDF として保存)',
        'Plain text': 'プレーンテキスト',
        'Markdown (.md)': 'Markdown (.md)',
        'Markdown with pictures (ZIP)': 'Markdown と画像 (ZIP)',
        'Result': '結果',
        'Download everything at once: .md, pictures, HTML and text': 'すべてを一括ダウンロード: .md、画像、HTML、テキスト',
        'All formats (ZIP)': 'すべての形式 (ZIP)',
        'Print / Save as PDF': '印刷 / PDF として保存',
        '(The HTML page - with its pictures and styles inside - is created when you download or copy it.)': '(HTML ページは、画像とスタイルを含めて、ダウンロードまたはコピーしたときに作成されます。)',

        /* ---------- My documents ---------- */
        'Search by name': '名前で検索',
        'Search your documents': 'ドキュメントを検索',
        'Open a .md file from your computer as a new document': 'コンピューターの .md ファイルを新しいドキュメントとして開く',
        'New document': '新しいドキュメント',
        'Click a document to open it. They are stored only in this browser - nothing is uploaded. Clearing the browser\'s site data removes them, so download the ones you want to keep.': 'ドキュメントをクリックすると開きます。ドキュメントはこのブラウザーにだけ保存され、アップロードはされません。ブラウザーのサイトデータを消去すると削除されるので、残したいものはダウンロードしてください。',
        'Download every document as a .md file (with its pictures) in one ZIP': 'すべてのドキュメントを .md ファイル (画像付き) として 1 つの ZIP でダウンロード',
        'Download all (ZIP)': 'すべてダウンロード (ZIP)',
        'Duplicate': '複製',
        'Download as .md': '.md としてダウンロード',
        'Delete': '削除',
        'This document is open': 'このドキュメントは開いています',
        'Click to open this document': 'クリックしてこのドキュメントを開く',
        'No documents yet.': 'ドキュメントはまだありません。',

        /* ---------- AI Assistant ---------- */
        'Any AI can write with you - ChatGPT, Claude, Gemini, Copilot.': 'どの AI とも一緒に書けます - ChatGPT、Claude、Gemini、Copilot。',
        'Connected AI': '接続中の AI',
        'Connected to': '接続先',
        'the AI sends its result there, and it opens here.': 'AI は結果をそこへ送り、ここで開きます。',
        'What': '',
        'tells the AI': 'が AI に伝える内容',
        'The AI should': 'AI にしてもらうこと',
        'Change “': '「',
        '”': '」を変更',
        'Make a new document': '新しいドキュメントを作成',
        'The AI\'s answer (or press Ctrl+V anywhere):': 'AI の回答 (またはどこでも Ctrl+V):',
        'The document travels in the link after the “#”, which no server sees. What you paste into your AI is handled by its provider.': 'ドキュメントはリンクの「#」より後ろに含まれ、どのサーバーにも送信されません。AI に貼り付けた内容はその提供元が処理します。',
        'The prompt - copy it with Ctrl+C': 'プロンプト - Ctrl+C でコピー',
        'Copy prompt': 'プロンプトをコピー',
        /* the step with the link, also when the editor sets it anew (text by text) */
        'The AI answers with a link: click it, or paste the whole answer below.': 'AI はリンクで回答します。クリックするか、回答全体を下に貼り付けてください。',
        'takes it back.': 'で元に戻せます。',
        'The AI answers with a link:': 'AI はリンクで回答します:',
        'paste its whole answer below': '回答全体を下に貼り付けてください',
        '(a clicked link opens a separate editor).': '(リンクをクリックすると別のエディターが開きます)。',
        '(no key yet)': '(キーはまだありません)',
        '(key valid while the editor is open)': '(キーはエディターを開いている間有効)',
        'The link could not be read': 'リンクを読み取れませんでした',
        'The document in this link is incomplete or damaged. If the AI\'s link was split over several lines (as in a terminal), copy the whole answer and paste it into the editor with Ctrl+V - the editor joins the lines.': 'このリンクのドキュメントは不完全か壊れています。AI のリンクが (ターミナルのように) 複数行に分かれた場合は、回答全体をコピーして Ctrl+V でエディターに貼り付けてください。エディターが行をつなげます。',
        'Loading…': '読み込み中…',
        'Taken over by your editor': 'エディターに取り込みました',
        'The document is now in the Markdown Editor tab you already had open. Switch to that tab, or open it here.': 'ドキュメントは、すでに開いていた Markdown エディターのタブに入りました。そのタブに切り替えるか、ここで開いてください。',
        'Copying is not allowed here - it is selected below: press Ctrl+C (⌘C)': 'ここではコピーが許可されていません。下で選択されているので Ctrl+C (⌘C) を押してください',
        'Paste it into your AI and say what it should write.': 'AI に貼り付けて、何を書くか伝えてください。',
        'Prompt copied - paste it into your AI and say what it should write': 'プロンプトをコピーしました。AI に貼り付けて、何を書くか伝えてください',
        'This link is incomplete or damaged - please ask the AI to send it again': 'このリンクは不完全か壊れています。AI にもう一度送るよう頼んでください',

        /* ---------- Save to your server ---------- */
        'Save to your server': '自分のサーバーに保存',
        'Webhook address': 'Webhook アドレス',
        'https://example.com/api/markdown': 'https://example.com/api/markdown',
        '(optional, sent as "Authorization: Bearer …"; kept until this tab is closed)': '(任意、"Authorization: Bearer …" として送信、このタブを閉じるまで保持)',
        'Send automatically a few seconds after each change (otherwise only when you click': '変更のたびに数秒後に自動送信 (それ以外はクリックしたとき',
        'or press Ctrl+S)': 'または Ctrl+S を押したときのみ)',
        'Only for “': '「',
        '” (other documents use the general address)': '」のみ (ほかのドキュメントは共通のアドレスを使用)',
        'What your server receives': 'サーバーが受け取るもの',
        'A POST request with JSON (your server must allow CORS from https://md.giit.ch):': 'JSON 形式の POST リクエスト (サーバーは https://md.giit.ch からの CORS を許可する必要があります):',
        'Embed the editor in your website': 'エディターを自分のサイトに埋め込む',
        'Send now': '今すぐ送信',
        'Save setting': '設定を保存',

        /* ---------- Help ---------- */
        'How it works': '使い方',
        'Keyboard shortcuts': 'キーボードショートカット',
        'Bold / italic around the selected text': '選択したテキストを太字 / 斜体の記号で囲む',
        'Link': 'リンク',
        'Show the cursor\'s place in the preview': 'カーソル位置をプレビューに表示',
        'Indent / outdent': 'インデント / インデント解除',
        'Undo / redo': '元に戻す / やり直す',
        'Save (download .md, or to your server) / export': '保存 (.md のダウンロードまたはサーバーへ) / エクスポート',
        'Print / save as PDF': '印刷 / PDF として保存',
        'Problems (a missing picture, a link to a heading that is not there, a code block that is never closed, a table row with too many cells) are listed above the code - click one to go there.': '問題 (見つからない画像、存在しない見出しへのリンク、閉じられていないコードブロック、セルが多すぎる表の行) はコードの上に一覧表示されます。クリックするとその位置へ移動します。',

        /* ---------- Messages ---------- */
        'The browser storage is full - download and delete documents under "My documents"': 'ブラウザーの保存領域がいっぱいです。「マイドキュメント」でドキュメントをダウンロードして削除してください',
        'The browser storage is full - delete or download documents under "My documents" first': 'ブラウザーの保存領域がいっぱいです。先に「マイドキュメント」でドキュメントを削除またはダウンロードしてください',
        'The browser storage is full - delete or download some documents first': 'ブラウザーの保存領域がいっぱいです。先にいくつかのドキュメントを削除またはダウンロードしてください',
        'The browser storage is full': 'ブラウザーの保存領域がいっぱいです',
        'Nothing to undo': '元に戻す操作はありません',
        'Nothing to redo': 'やり直す操作はありません',
        'This text changed in the code - wait for the preview, then try again': 'このテキストはコード内で変更されました。プレビューを待ってからもう一度お試しください',
        'This box changed in the code - wait for the preview, then try again': 'このボックスはコード内で変更されました。プレビューを待ってからもう一度お試しください',
        'This picture changed in the code - wait for the preview, then try again': 'この画像はコード内で変更されました。プレビューを待ってからもう一度お試しください',
        'The code changed meanwhile - the edit was not used': 'その間にコードが変更されたため、編集は反映されませんでした',
        'This anchor is not in the document': 'このアンカーはドキュメント内にありません',
        'The picture is removed from this document. Places that use it show its name in a frame. "Undo" does not bring it back.': '画像はこのドキュメントから削除されます。使用箇所には枠の中に名前が表示されます。「元に戻す」では復元できません。',
        'Pictures can be PNG, JPG, GIF, WebP, SVG or PDF': '画像は PNG、JPG、GIF、WebP、SVG、PDF に対応しています',
        'The picture is larger than 12 MB': '画像が 12 MB を超えています',
        'The picture could not be read': '画像を読み取れませんでした',
        'This document is empty already': 'このドキュメントはすでに空です',
        'Everything is removed; the pictures of the document stay. "Undo" brings the text back as long as the page is open.': 'すべて削除されます。ドキュメントの画像は残ります。ページを開いている間は「元に戻す」でテキストを復元できます。',
        'Start over': '最初からやり直す',
        'The file is larger than 8 MB': 'ファイルが 8 MB を超えています',
        'Downloaded': 'ダウンロードしました',
        'Copied to the clipboard': 'クリップボードにコピーしました',
        'This browser does not allow copying this': 'このブラウザーではこれをコピーできません',
        'Code copied': 'コードをコピーしました',
        '.md with its pictures downloaded (ZIP)': '.md を画像と一緒にダウンロードしました (ZIP)',
        '.md downloaded': '.md をダウンロードしました',
        'ZIP downloaded: .md, pictures, HTML and text': 'ZIP をダウンロードしました: .md、画像、HTML、テキスト',
        'Add': '追加',
        'The document and its pictures are removed from this browser for good. Download it first if you want to keep a copy.': 'ドキュメントとその画像はこのブラウザーから完全に削除されます。コピーを残したい場合は、先にダウンロードしてください。',

        /* ---------- Problems the preview finds (markdown.js) ---------- */
        '$$ is never closed - add a line with $$ after the formula': '$$ が閉じられていません。数式の後に $$ だけの行を追加してください',

        /* Short words of the interface that the German pack keeps as they are */
        'Code': 'コード',
        'Export': 'エクスポート',
        'Format': '形式',
        'Name': '名前',
        'Token': 'トークン',
        'online': 'オンライン',
    },
    html: {
        '<b>Export</b> also has <b>Open in another editor</b>: it converts the document and opens it as a new document there. Anything the other format cannot hold is listed first.':
            '<b>エクスポート</b>には<b>別のエディターで開く</b>もあります。ドキュメントを変換し、そちらで新しいドキュメントとして開きます。相手の形式に入らないものは先に一覧表示されます。',
        '<b>Insert</b> &gt; <b>New page</b> sets a page break for printing and PDF; the preview shows it as a dashed line. Headings stay with their text and tables and pictures are not cut. In Export, <b>Apply page breaks</b> turns them off for a PDF.':
            '<b>挿入</b> &gt; <b>改ページ</b> で印刷と PDF 用の改ページを設定します。プレビューでは破線で表示されます。見出しは本文と離れず、表や画像は分割されません。 <b>エクスポート</b>の<b>改ページを適用</b>で、PDF での適用をオフにできます。',
        /* Export */
        'The print dialog opens with the document only. Choose <b>Save as PDF</b> (or "Microsoft Print to PDF") as the printer. In Chrome and Edge, untick "Headers and footers" if the browser offers it. The text in the PDF stays sharp and can be selected.':
            '印刷ダイアログがドキュメントだけで開きます。プリンターとして <b>PDF として保存</b> (または「Microsoft Print to PDF」) を選んでください。Chrome と Edge では、表示される場合は「ヘッダーとフッター」のチェックを外してください。PDF のテキストは鮮明なままで、選択できます。',

        /* AI Assistant */
        'Click <b>Copy prompt</b>.':
            '<b>プロンプトをコピー</b> をクリックします。',
        'The AI answers with a link: click it, or paste the whole answer below. <b>Undo</b> takes it back.':
            'AI はリンクで回答します。クリックするか、回答全体を下に貼り付けてください。<b>元に戻す</b> で元に戻せます。',
        'The AI answers with a link: <b>paste its whole answer below</b> (a clicked link opens a separate editor). <b>Undo</b> takes it back.':
            'AI はリンクで回答します: <b>回答全体を下に貼り付けてください</b> (リンクをクリックすると別のエディターが開きます)。<b>元に戻す</b> で元に戻せます。',

        /* Save to your server */
        'The editor can send each saved version to your own server (a <b>webhook</b>), so your work is kept where you want it. Nothing is sent until you enter an address here.':
            'エディターは保存した版をそのつど自分のサーバー (<b>Webhook</b>) に送れるので、作業内容を好きな場所に保管できます。ここにアドレスを入力するまでは何も送信されません。',
        'Also possible: <code>?src=&lt;URL of a .md file&gt;</code> opens a file, <code>&amp;webhook=&lt;URL&gt;</code> saves this document there. The editor can also open in a window of its own (<code>?embed=window</code>), and your page can hand it its own AI prompt and a session key so the AI sends its result to your server (<code>mdeditor:ai</code>, <code>mdeditor:key-request</code>) - see "Use the editor on your own website" below the editor. Details are in <a href="/llms.txt">llms.txt</a>.':
            'ほかにも: <code>?src=&lt;.md ファイルの URL&gt;</code> でファイルを開き、<code>&amp;webhook=&lt;URL&gt;</code> でこのドキュメントをそこへ保存します。エディターは専用のウィンドウでも開けます (<code>?embed=window</code>)。また、ページから独自の AI プロンプトとセッションキーを渡して、AI が結果をあなたのサーバーへ送るようにもできます (<code>mdeditor:ai</code>、<code>mdeditor:key-request</code>)。エディターの下の「エディターを自分の Web サイトで使う」を参照してください。詳細は <a href="/llms.txt">llms.txt</a> にあります。',

        /* Help */
        '<b>Write</b> Markdown on the left - or start with <b>New</b> and one of the templates. The preview in the middle shows the document as you type.':
            '左側に Markdown を <b>書きます</b>。または <b>新規</b> からテンプレートを選んで始めます。中央のプレビューには入力に合わせてドキュメントが表示されます。',
        '<b>Click text in the preview</b> to edit it right there: the cursor is where you clicked, and the code\'s cursor goes to the same place. <b>Enter</b> starts a new paragraph; <b>Shift+Enter</b> inserts a line break. <b>Ctrl+Enter</b> (<b>Cmd+Enter</b> on macOS) or a click elsewhere applies the edit; <b>Escape</b> cancels. Each edit is one step for Undo. Characters such as <code>*</code> or <code>_</code> are escaped so they stay text. A click on math, a picture or code jumps to its place in the code instead. <b>Ctrl</b> + click follows a link. A check box of a task list ticks the task in the code.':
            '<b>プレビューのテキストをクリック</b> すると、その場で編集できます。カーソルはクリックした位置に置かれ、コードのカーソルも同じ位置へ移動します。<b>Enter</b> で新しい段落を作り、<b>Shift+Enter</b> で改行します。<b>Ctrl+Enter</b>（macOS では <b>Cmd+Enter</b>）を押すか、ほかの場所をクリックすると編集が反映され、<b>Escape</b> で取り消します。編集は 1 回の「元に戻す」で取り消せます。<code>*</code> や <code>_</code> などの文字はテキストのままになるようエスケープされます。数式、画像、コードをクリックすると、代わりにコード内の位置へ移動します。<b>Ctrl</b> + クリックでリンクを開きます。タスクリストのチェックボックスで、コード内のタスクにチェックを付けられます。',
        '<b>Insert</b> on the right has ready-made pieces (headings, lists, tables, math, symbols); <b>Pictures</b> holds the pictures of the document; <b>Outline</b> lists the headings.':
            '右側の <b>挿入</b> には定型パーツ (見出し、リスト、表、数式、記号) があり、<b>画像</b> にはドキュメントの画像が入り、<b>アウトライン</b> には見出しが一覧表示されます。',
        '<b>My documents</b> (the folder button at the top left) lists every document kept in this browser.':
            '<b>マイドキュメント</b> (左上のフォルダーボタン) には、このブラウザーに保存されたすべてのドキュメントが一覧表示されます。',
        '<b>Export</b> makes an HTML page, a PDF (via the print dialog) or plain text. <b>Download .md</b> saves the code (with its pictures as ZIP).':
            '<b>エクスポート</b> で HTML ページ、PDF (印刷ダイアログ経由)、プレーンテキストを作成します。<b>.md をダウンロード</b> でコードを保存します (画像がある場合は ZIP)。',
        'The preview understands CommonMark with GitHub\'s tables, task lists, strikethrough, autolinks and footnotes, and math in <code>$…$</code> and <code>$$…$$</code>. HTML in the Markdown is shown without scripts, styles, frames and forms.':
            'プレビューは CommonMark に加え、GitHub の表、タスクリスト、取り消し線、自動リンク、脚注、そして <code>$…$</code> と <code>$$…$$</code> の数式を理解します。Markdown 内の HTML は、スクリプト、スタイル、フレーム、フォームを除いて表示されます。',
        'Math: <code>$…$</code> around the selection':
            '数式: 選択範囲を <code>$…$</code> で囲む',
        'Lines in or out of a comment (<code>&lt;!-- --&gt;</code>)':
            '行をコメント化 / 解除 (<code>&lt;!-- --&gt;</code>)',
        '<kbd>Enter</kbd> in a list starts the next item (<code>-</code>, <code>1.</code>, <code>- [ ]</code>, <code>&gt;</code>); on an empty item it ends the list. <code>* _ ` ~ $ [ (</code> close by themselves around a selection.':
            'リスト内で <kbd>Enter</kbd> を押すと次の項目が始まります (<code>-</code>、<code>1.</code>、<code>- [ ]</code>、<code>&gt;</code>)。空の項目で押すとリストが終わります。<code>* _ ` ~ $ [ (</code> は選択範囲を自動で囲みます。',
    },
    patterns: [
        /* ---------- Status lines ---------- */
        ['^(\\d+) lines · ([\\d.]+ K?B) · (\\d+) (?:word|words)$', '$1 行 · $2 · $3 語'],
        ['^\\.md and (\\d+) (?:picture|pictures)$', '.md と画像 $1 枚'],
        ['^([\\d,]+) bytes$', (m, b) => `${b} バイト`],
        ['^\\d{1,3}(?:,\\d{3})+$', m => m],

        /* Problems above the code */
        ['^(\\d+) (?:error|errors)$', '$1 件のエラー'],
        ['^· (\\d+) (?:note|notes)$', '· $1 件の注意'],
        ['^(\\d+) (?:note|notes)$', '$1 件の注意'],
        ['^Line (\\d+)$', '$1 行目'],
        ['^The preview failed: (.*)$', 'プレビューに失敗しました: $1'],
        ['^The preview stopped at an unexpected problem: (.*)$', '予期しない問題でプレビューが止まりました: $1'],
        ['^Picture "(.+)" not found - drag the picture into the editor \\(or add it in the Pictures tab\\)$', '画像「$1」が見つかりません。画像をエディターにドラッグしてください (または画像タブで追加してください)'],
        ['^The link to "(.+)" has no heading or anchor of that name$', '「$1」へのリンクに対応する見出しもアンカーもありません'],
        ['^This code block \\((.+)\\) is never closed - add a line with (.+) after the code$', 'このコードブロック ($1) が閉じられていません。コードの後に $2 の行を追加してください'],
        ['^This table row has (\\d+) (?:cell|cells), the header has (\\d+)$', 'この表の行のセルは $1 個ですが、ヘッダーは $2 個です'],
        ['^Math: (.*)$', '数式: $1'],

        /* ---------- Pictures tab ---------- */
        ['^(\\d+) (?:picture|pictures) · (.+)$', '画像 $1 枚 · $2'],
        ['^Choose the file for (.+)$', '$1 のファイルを選ぶ'],
        ['^Insert !\\[…\\]\\((.+)\\) at the cursor$', 'カーソル位置に ![…]($1) を挿入'],
        ['^used (\\d+)×$', '$1 回使用'],
        ['^(.* · )?not used yet$', (m, a) => `${a || ''}まだ使われていません`],

        /* ---------- Top bar and My documents ---------- */
        ['^"(.+)" is open\\. My documents: open, rename, duplicate or delete your documents \\(Ctrl\\+O\\)$', '「$1」を開いています。マイドキュメント: ドキュメントを開く、名前の変更、複製、削除 (Ctrl+O)'],
        ['^Start "(.+)" over\\?$', '「$1」を最初からやり直しますか？'],
        ['^Start "(.+)" over$', '「$1」を最初からやり直す'],
        ['^(\\d+) (?:document|documents) · (.+) in this browser$', (m, k, s) => `${k} 件のドキュメント · このブラウザー内に ${formatSize(s)}`],
        ['^No document named "(.*)"\\.$', '「$1」という名前のドキュメントはありません。'],
        ['^Open now · (.+)$', (m, s) => `いま開いています · ${formatSize(s)}`],
        ['^(just now|yesterday|\\d+ min ago|\\d+ h ago|[A-Z][a-z]{2} \\d{1,2}, \\d{4}) · (.+)$', (m, w, s) => `${formatTime(w)} · ${formatSize(s)}`],
        ['^(.+) \\(open now\\)$', '$1 (いま開いています)'],
        ['^ZIP with (\\d+) (?:document|documents) downloaded$', 'ドキュメント $1 件の ZIP をダウンロードしました'],

        /* ---------- AI Assistant ---------- */
        ['^Part (\\d+) of (\\d+) received$', 'パート $1/$2 を受け取りました'],
        ['^Open the other (?:link|links) from the AI too \\(still missing: part (.+)\\)\\.$', 'AI のほかのリンクも開いてください (まだ足りないパート: $1)。'],
        ['^Part (\\d+) of (\\d+) received - paste the other (?:link|links) too \\(missing: (.+)\\)$', 'パート $1/$2 を受け取りました。ほかのリンクも貼り付けてください (足りないパート: $3)'],
        ['^The AI sends the document to (.+) with a key that only works for this session\\. What you paste into your AI is handled by its provider\\.$', 'AI は、このセッションでのみ有効なキーを使ってドキュメントを $1 に送ります。AI に貼り付けた内容はその提供元が処理します。'],
        ['^The AI sends its result to (.+) by itself, and it opens here\\. If it answers with a link, paste its answer below\\.$', 'AI は結果を自動的に $1 へ送り、ここで開きます。AI がリンクで回答した場合は、その回答を下に貼り付けてください。'],
        ['^No key from (.+) - the prompt asks the AI for a link instead$', '$1 からキーがありません。代わりにプロンプトで AI にリンクを頼みます'],
        ['^Prompt copied - the AI sends its result to (.+)$', 'プロンプトをコピーしました。AI は結果を $1 へ送ります'],

        /* ---------- Messages with names ---------- */
        ['^"(.+)" is now "(.+)"$', '「$1」は「$2」になりました'],
        ['^Remove "(.+)"\\?$', '「$1」を削除しますか？'],
        ['^"(.+)" now shows the new picture$', '「$1」に新しい画像が表示されるようになりました'],
        ['^Picture "(.+)" added to "(.+)"$', '画像「$1」を「$2」に追加しました'],
        ['^"(.+)" is empty now - "Undo" brings it back$', '「$1」は空になりました。「元に戻す」で復元できます'],
        ['^"(.+)" opened$', '「$1」を開きました'],
        ['^New document "(.+)" - your other documents are under "My documents"$', '新しいドキュメント「$1」。ほかのドキュメントは「マイドキュメント」にあります'],
        ['^New document "(.+)" from the AI - your other documents are unchanged$', 'AI による新しいドキュメント「$1」。ほかのドキュメントは変更されていません'],
        ['^"(.+)" is not a Markdown file$', '「$1」は Markdown ファイルではありません'],
        ['^Opened "(.+)" - it is now in "My documents"$', '「$1」を開きました。「マイドキュメント」に入っています'],
        ['^Opened "(.+)" with (\\d+) (?:picture|pictures)$', '「$1」を画像 $2 枚とともに開きました'],
        ['^"(.+)" could not be opened: (.*)$', (m, f, why) => `「${f}」を開けませんでした: ${translateZipReason(why)}`],
        ['^Document received - the preview found (\\d+) (?:problem|problems), see above the code$', 'ドキュメントを受け取りました。プレビューで $1 件の問題が見つかりました。コードの上を確認してください'],
        ['^"(.+)" changed by the AI - "Undo" takes it back$', '「$1」は AI によって変更されました。「元に戻す」で元に戻せます'],
        ['^"(.+)" duplicated$', '「$1」を複製しました'],
        ['^Delete "(.+)"\\?$', '「$1」を削除しますか？'],
        ['^"(.+)" deleted$', '「$1」を削除しました'],
        /* last: "Open <name>" on a card in My documents */
        ['^Open (.+)$', '$1 を開く'],
    ],
};
