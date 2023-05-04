/**
 * Returns a string object with various string manipulation functions.
 * @param {String} string
 */

const string = (string) => ({

    /**
     * @function isString
     * @returns {Boolean}
     */
    isString: function () {
        // const string = str
        return typeof string === 'string'
    },

    /**
     * @function capitalize
     * @returns {string} The input string with the first letter capitalized.
     */
    capitalize: function () {
        return (string.toLowerCase()).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());
    },

    /**
     * @function toCamelCase
     * @returns {string} The input string in camelCase format.
     */
    toCamelCase: function () {
        return string.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
    },

    /**
     * @function toSnakeCase
     * @returns {string} The input string in snake_case format.
     */
    toSnakeCase: function () {
        return string && string.match(
                /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
            .map(s => s.toLowerCase())
            .join('_');
    },

    /**
     * @function toKebabCase
     * @returns {string} The input string in kebab-case format.
     */
    toKebabCase: function () {
        return string
            .replace(/([a-z])([A-Z])/g, "$1-$2")
            .replace(/[\s_]+/g, '-')
            .toLowerCase();
    },

    /**
     * @function toPascalCase
     * @returns {string} The input string in pascal-case format.
     */
    toPascalCase: function () {
        return (' ' + string).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => {
            return chr.toUpperCase()
        });
    },

    /**
     * @function toLowerCase
     * @returns {string} The input string in lower-case format.
     */
    toLowerCase: function () {
        return string.toLowerCase()
    },

    /**
     * @function toUpperCase
     * @returns {string} The input string in upper-case format.
     */
    toUpperCase: function () {
        return string.toUpperCase()
    },

    /**
     * @function firstNChars
     * @returns {string} The input string of first-N chars.
     */
    firstNChars: function (n = 10) {
        return string.slice(0, n);
    },

    /**
     * @function lastNChars
     * @returns {string} The input string of last-N chars.
     */
    lastNChars: function (n = 10) {
        return string.slice(-n);
    }
})


export {
    string
}