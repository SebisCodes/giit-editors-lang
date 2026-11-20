/* Helpers of the patterns that every interface pack of this language uses: dates, sizes,
   numbers and word forms. Imported by common.js and the editors' packs. */

const MONTHS = { Jan: 'Jan.', Feb: 'Feb.', Mar: 'März', Apr: 'Apr.', May: 'Mai', Jun: 'Juni', Jul: 'Juli', Aug: 'Aug.', Sep: 'Sept.', Oct: 'Okt.', Nov: 'Nov.', Dec: 'Dez.' };

/**
 * Translates when a document last changed ("just now", "5 min ago", "Oct 25, 2026").
 * @param {string} s - the English time text.
 * @returns {string} the text in the language.
 */
export function formatTime(s) {
    if (s === 'just now') return 'gerade eben';
    if (s === 'yesterday') return 'gestern';
    let m = /^(\d+) min ago$/.exec(s);
    if (m) return `vor ${m[1]} Min.`;
    m = /^(\d+) h ago$/.exec(s);
    if (m) return `vor ${m[1]} Std.`;
    m = /^([A-Z][a-z]{2}) (\d{1,2}), (\d{4})$/.exec(s);
    if (m) return `${m[2]}. ${MONTHS[m[1]] || m[1]} ${m[3]}`;
    return s;
}

/**
 * Translates the unit of a size text ("123 bytes").
 * @param {string} s - the English size text.
 * @returns {string} the text in the language.
 */
export const formatSize = s => s.replace(/ bytes$/, ' Bytes');

/**
 * Writes the thousands separator of the language into a number ("1,234").
 * @param {string} s - the number with English separators.
 * @returns {string} the text in the language.
 */
export const formatThousands = s => s.replace(/,/g, '’');

/**
 * Returns the word form for a count.
 * @param {string|number} k - the count.
 * @param {string} one - the form for one.
 * @param {string} many - the form for many.
 * @returns {string} the text in the language.
 */
export const getPlural = (k, one, many) => (+k === 1 ? one : many);
