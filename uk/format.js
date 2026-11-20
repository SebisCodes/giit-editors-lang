/* Helpers of the patterns that every interface pack of this language uses: dates, sizes,
   numbers and word forms. Imported by common.js and the editors' packs. */

const MONTHS = { Jan: 'січ.', Feb: 'лют.', Mar: 'берез.', Apr: 'квіт.', May: 'трав.', Jun: 'черв.', Jul: 'лип.', Aug: 'серп.', Sep: 'вер.', Oct: 'жовт.', Nov: 'лист.', Dec: 'груд.' };

/**
 * Translates when a document last changed ("just now", "5 min ago", "Oct 25, 2026").
 * @param {string} s - the English time text.
 * @returns {string} the text in the language.
 */
export function formatTime(s) {
    if (s === 'just now') return 'щойно';
    if (s === 'yesterday') return 'учора';
    let m = /^(\d+) min ago$/.exec(s);
    if (m) return `${m[1]} хв тому`;
    m = /^(\d+) h ago$/.exec(s);
    if (m) return `${m[1]} год тому`;
    m = /^([A-Z][a-z]{2}) (\d{1,2}), (\d{4})$/.exec(s);
    if (m) return `${m[2]} ${MONTHS[m[1]] || m[1]} ${m[3]} р.`;
    return s;
}

/**
 * Writes the thousands separator of the language into a number ("1,234").
 * @param {string} s - the number with English separators.
 * @returns {string} the text in the language.
 */
export const formatThousands = s => s.replace(/,/g, ' ');

/**
 * Returns the word form for a count.
 * @param {string|number} k - the count.
 * @param {string} one - the form for one.
 * @param {string} few - the form for a few (2 to 4).
 * @param {string} many - the form for many.
 * @returns {string} the text in the language.
 */
export const getPlural = (k, one, few, many) => {
    const v = parseInt(String(k).replace(/\D/g, ''), 10) % 100, d = v % 10;
    return v > 10 && v < 20 ? many : d === 1 ? one : d >= 2 && d <= 4 ? few : many;
};
