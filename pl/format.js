/* Helpers of the patterns that every interface pack of this language uses: dates, sizes,
   numbers and word forms. Imported by common.js and the editors' packs. */

const MONTHS = { Jan: 'sty', Feb: 'lut', Mar: 'mar', Apr: 'kwi', May: 'maj', Jun: 'cze', Jul: 'lip', Aug: 'sie', Sep: 'wrz', Oct: 'paź', Nov: 'lis', Dec: 'gru' };

/**
 * Translates when a document last changed ("just now", "5 min ago", "Oct 25, 2026").
 * @param {string} s - the English time text.
 * @returns {string} the text in the language.
 */
export function formatTime(s) {
    if (s === 'just now') return 'przed chwilą';
    if (s === 'yesterday') return 'wczoraj';
    let m = /^(\d+) min ago$/.exec(s);
    if (m) return `${m[1]} min temu`;
    m = /^(\d+) h ago$/.exec(s);
    if (m) return `${m[1]} godz. temu`;
    m = /^([A-Z][a-z]{2}) (\d{1,2}), (\d{4})$/.exec(s);
    if (m) return `${m[2]} ${MONTHS[m[1]] || m[1]} ${m[3]}`;
    return s;
}

/**
 * Writes the thousands separator of the language into a number ("1,234").
 * @param {string} s - the number with English separators.
 * @returns {string} the text in the language.
 */
export const formatThousands = s => s.replace(/,/g, ' ');

/**
 * Returns the word form for a count.
 * @param {string|number} k - the count.
 * @param {string} one - the form for one.
 * @param {string} few - the form for a few (2 to 4).
 * @param {string} many - the form for many.
 * @returns {string} the text in the language.
 */
export const getPlural = (k, one, few, many) => {
    const v = parseInt(String(k).replace(/\D/g, ''), 10), d = v % 10, t = v % 100;
    return v === 1 ? one : d >= 2 && d <= 4 && (t < 12 || t > 14) ? few : many;
};
