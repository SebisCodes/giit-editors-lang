/* Helpers of the patterns that every interface pack of this language uses: dates, sizes,
   numbers and word forms. Imported by common.js and the editors' packs. */

const MONTHS = { Jan: 'janv.', Feb: 'févr.', Mar: 'mars', Apr: 'avr.', May: 'mai', Jun: 'juin', Jul: 'juil.', Aug: 'août', Sep: 'sept.', Oct: 'oct.', Nov: 'nov.', Dec: 'déc.' };

/**
 * Translates when a document last changed ("just now", "5 min ago", "Oct 25, 2026").
 * @param {string} s - the English time text.
 * @returns {string} the text in the language.
 */
export function formatTime(s) {
    if (s === 'just now') return 'à l’instant';
    if (s === 'yesterday') return 'hier';
    let m = /^(\d+) min ago$/.exec(s);
    if (m) return `il y a ${m[1]} min`;
    m = /^(\d+) h ago$/.exec(s);
    if (m) return `il y a ${m[1]} h`;
    m = /^([A-Z][a-z]{2}) (\d{1,2}), (\d{4})$/.exec(s);
    if (m) return `${m[2]} ${MONTHS[m[1]] || m[1]} ${m[3]}`;
    return s;
}

/**
 * Returns the word form for a count.
 * @param {string|number} k - the count.
 * @param {string} one - the form for one.
 * @param {string} many - the form for many.
 * @returns {string} the text in the language.
 */
export const getPlural = (k, one, many) => (+k < 2 ? one : many);
