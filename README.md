# giit editors - language packs

The texts of the giit editors (latex.giit.ch, svg.giit.ch, md.giit.ch … and the overview
editors.giit.ch) in every language they speak. Every editor and the overview read them from one
shared folder, so a text is changed in one place for all sites.

## Layout

```
editors.json          the editors: key, name, address, online, category
<code>/               one folder per language (en, de, fr, it, es, pt, nl, pl, tr, ru, uk, zh, ja, ko)
  common.json         page texts every site shares: footer, theme switch, language menu
  <editor>.json       the page texts of one editor: title, description, page text, FAQ (JSON-LD),
                      the developer page ("embed")
  overview.json       the texts of editors.giit.ch
  common.js           interface texts every editor shares (not in en/)
  <editor>.js         interface texts of one editor (not in en/)
tools/check_packs.py  checks that every language has every file and key
```

The page texts (`*.json`) are filled into the page templates on the server
(`src/php/page.php` of each editor). The interface texts (`*.js`) are dictionaries keyed by
the English text of the interface; the browser loads them from `/lang/<code>/…` and translates
the editor's interface with them. English is the language of the code: `en/` holds only the page
texts.

## Use

Clone this repository next to an editor repository:

```
git clone https://github.com/SebisCodes/giit-editors-lang
git clone https://github.com/SebisCodes/latex-editor
cd latex-editor
php -S 127.0.0.1:8094 -t src src/php/router.php
```

The editor finds the folder `giit-editors-lang` in one of the folders above its own. On a web
server, put it next to the web roots of the sites.

## Change or add a text

1. Change the English text and the same key in every other language.
2. Run `python3 tools/check_packs.py`: it lists every file or key a language lacks.
3. For an interface text, the key is the English text as the editor shows it; change it in the
   editor's code and in every `<code>/<editor>.js` together.

A new language is a new folder with all files of `en/` (and the `.js` files of `de/`), and its
code in `PAGE_LANGUAGES` of `src/php/language.php` in the editors.

## License

Apache License 2.0, see LICENSE and NOTICE.
