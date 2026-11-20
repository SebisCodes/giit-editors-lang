/* Helpers of the patterns that every interface pack of this language uses: dates, sizes,
   numbers and word forms. Imported by common.js and the editors' packs. */

const MONTHS = { Jan: 'янв.', Feb: 'февр.', Mar: 'марта', Apr: 'апр.', May: 'мая', Jun: 'июня', Jul: 'июля', Aug: 'авг.', Sep: 'сент.', Oct: 'окт.', Nov: 'нояб.', Dec: 'дек.' };

/**
 * Translates when a document last changed ("just now", "5 min ago", "Oct 25, 2026").
 * @param {string} s - the English time text.
 * @returns {string} the text in the language.
 */
export function formatTime(s) {
    if (s === 'just now') return 'только что';
    if (s === 'yesterday') return 'вчера';
    let m = /^(\d+) min ago$/.exec(s);
    if (m) return `${m[1]} мин. назад`;
    m = /^(\d+) h ago$/.exec(s);
    if (m) return `${m[1]} ч назад`;
    m = /^([A-Z][a-z]{2}) (\d{1,2}), (\d{4})$/.exec(s);
    if (m) return `${m[2]} ${MONTHS[m[1]] || m[1]} ${m[3]} г.`;
    return s;
}

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
