/**
 * Returns object with various functions.
 * @param {HTMLElement} selector - The input string.
 * @returns {object} An object with various functions.
 */
export function selectAll(selector: HTMLElement): object;
export function select(selector: HTMLElementSelector): {
    /**
     * @element
     * @returns {HTML}
     */
    element: HTMLElementSelector;
    /**
     * @function iText
     * @returns {string}
     */
    iText: () => string;
    /**
     * @function oText
     * @returns {string}
     */
    oText: () => string;
    /**
     * @function iHTML
     * @returns {HTML}
     */
    iHTML: () => HTML;
    /**
     * @function oHTML
     * @returns {HTML}
     */
    oHTML: () => HTML;
    /**
     * @function event
     * @returns {any}
     * @param {string} event
     * @param {Function} callback(Event)
     */
    event: (event: string, callback: Function) => any;
    /**
     * @function attribute
     * @returns {string}
     * @param {string} attribute
     */
    attribute: (attribute: string) => string;
    /**
     * @function attributes
     * @returns {array}
     * @param {Object} attributes return object of attributes
     */
    attributes: (attributes: any) => any[];
    /**
     * @function children
     * @returns {HTMLCollection}
     */
    children: () => HTMLCollection;
    /**
     * @function toggleClass
     * @returns {void}
     */
    toggleClass: (className: any) => void;
    /**
     *
     * @function hasClass
     * @returns {boolean}
     */
    hasClass: (className: any) => boolean;
    /**
     * It contains various functions to add elements to DOM
     * @Object add
     */
    add: {
        /**
         * @function child
         * @returns {void}
         * @param {HTMLElement}
         */
        child: (html: any) => void;
        /**
         * @function attribute
         * @returns {void}
         * @param {string} attribute_name
         * @param {string} value
         */
        attribute: (attribute_name: string, value: string) => void;
        /**
         * @function attributes
         * @returns {void}
         * @param {array} attributes [{attribute_name,value}, {attribute_name,value}]
         */
        attributes: (attributes: any[]) => void;
        /**
         * @function class
         * @returns {void}
         * @param {string} element_class
         */
        class: (element_class: string) => void;
        /**
         * @function classes
         * @returns {void}
         * @param {array} element_classes
         */
        classes: (element_classes: any[]) => void;
    };
    /**
     * It contains various functions to delete elements from DOM
     * @Object delete
     */
    delete: {
        /**
         * @function class
         * @returns {void}
         * @param {string} element_class
         */
        class: (element_class: string) => void;
        /**
         * @function classes
         * @returns {void}
         * @param {array} element_classes
         */
        classes: (element_classes: any[]) => void;
    };
};
