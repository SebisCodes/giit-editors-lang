/* Helpers of the patterns that every interface pack of this language uses: dates, sizes,
   numbers and word forms. Imported by common.js and the editors' packs. */

const MONTHS = { Jan: 'Oca', Feb: 'Şub', Mar: 'Mar', Apr: 'Nis', May: 'May', Jun: 'Haz', Jul: 'Tem', Aug: 'Ağu', Sep: 'Eyl', Oct: 'Eki', Nov: 'Kas', Dec: 'Ara' };

/**
 * Translates when a document last changed ("just now", "5 min ago", "Oct 25, 2026").
 * @param {string} s - the English time text.
 * @returns {string} the text in the language.
 */
export function formatTime(s) {
    if (s === 'just now') return 'az önce';
    if (s === 'yesterday') return 'dün';
    let m = /^(\d+) min ago$/.exec(s);
    if (m) return `${m[1]} dk önce`;
    m = /^(\d+) h ago$/.exec(s);
    if (m) return `${m[1]} sa önce`;
    m = /^([A-Z][a-z]{2}) (\d{1,2}), (\d{4})$/.exec(s);
    if (m) return `${m[2]} ${MONTHS[m[1]] || m[1]} ${m[3]}`;
    return s;
}

/**
 * Writes the thousands separator of the language into a number ("1,234").
 * @param {string} s - the number with English separators.
 * @returns {string} the text in the language.
 */
export const formatThousands = s => s.replace(/,/g, '.');
