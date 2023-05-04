/**
 * Returns a string object with various string manipulation functions.
 * @param {String} str
 */
export function string(str: string): {
    /**
     * @function isString
     * @returns {Boolean}
     */
    isString: () => boolean;
    /**
     * @function capitalize
     * @returns {string} The input string with the first letter capitalized.
     */
    capitalize: () => string;
    /**
     * @function toCamelCase
     * @returns {string} The input string in camelCase format.
     */
    toCamelCase: () => string;
    /**
     * @function toSnakeCase
     * @returns {string} The input string in snake_case format.
     */
    toSnakeCase: () => string;
    /**
     * @function toKebabCase
     * @returns {string} The input string in kebab-case format.
     */
    toKebabCase: () => string;
    /**
     * @function toPascalCase
     * @returns {string} The input string in pascal-case format.
     */
    toPascalCase: () => string;
    /**
     * @function toLowerCase
     * @returns {string} The input string in lower-case format.
     */
    toLowerCase: () => string;
    /**
     * @function toUpperCase
     * @returns {string} The input string in upper-case format.
     */
    toUpperCase: () => string;
    /**
     * @function firstNChars
     * @returns {string} The input string of first-N chars.
     */
    firstNChars: (n?: number) => string;
    /**
     * @function lastNChars
     * @returns {string} The input string of last-N chars.
     */
    lastNChars: (n?: number) => string;
};
