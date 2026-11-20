/* Helpers of the patterns that every interface pack of this language uses: dates, sizes,
   numbers and word forms. Imported by common.js and the editors' packs. */

const MONTHS = { Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6, Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12 };

/**
 * Translates when a document last changed ("just now", "5 min ago", "Oct 25, 2026").
 * @param {string} s - the English time text.
 * @returns {string} the text in the language.
 */
export function formatTime(s) {
    if (s === 'just now') return '刚刚';
    if (s === 'yesterday') return '昨天';
    let m = /^(\d+) min ago$/.exec(s);
    if (m) return `${m[1]} 分钟前`;
    m = /^(\d+) h ago$/.exec(s);
    if (m) return `${m[1]} 小时前`;
    m = /^([A-Z][a-z]{2}) (\d{1,2}), (\d{4})$/.exec(s);
    if (m) return MONTHS[m[1]] ? `${m[3]}年${MONTHS[m[1]]}月${m[2]}日` : s;
    return s;
}

/**
 * Translates the unit of a size text ("123 bytes").
 * @param {string} s - the English size text.
 * @returns {string} the text in the language.
 */
export const formatSize = s => s.replace(/ bytes$/, ' 字节');
