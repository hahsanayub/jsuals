import {
    isArray,
    notBrowserException
} from "./exceptions";

/**
 * @param {HTMLElementSelector} selector - The input string.
 */
export const select = (selector) => {
    try {
        const htmlSelector = document.querySelector(selector);

        return {
            /**
             * @element
             * @returns {HTML}
             */
            element: htmlSelector,

            /**
             * @function iText
             * @returns {string}
             */
            iText: function () {
                try {
                    return htmlSelector.innerText;
                } catch (e) {
                    return null
                }
            },

            /**
             * @function oText
             * @returns {string}
             */
            oText: function () {
                try {
                    return htmlSelector.outerText;
                } catch (e) {
                    return null
                }
            },

            /**
             * @function iHTML
             * @returns {HTML}
             */
            iHTML: function () {
                try {
                    return htmlSelector.innerHTML;
                } catch (e) {
                    return null
                }
            },

            /**
             * @function oHTML
             * @returns {HTML}
             */
            oHTML: function () {
                try {
                    return htmlSelector.outerHTML;
                } catch (e) {
                    return null
                }
            },

            /**
             * @function event
             * @returns {any}
             * @param {string} event
             * @param {Function} callback(Event)
             */
            event: (event, callback) => {
                htmlSelector.addEventListener(event, callback);
            },

            /**
             * @function attribute
             * @returns {string}
             * @param {string} attribute
             */
            attribute: function (attribute) {
                try {
                    return htmlSelector.getAttribute(attribute);
                } catch (e) {
                    return null
                }
            },

            /**
             * @function attributes
             * @returns {array}
             * @param {Object} attributes return object of attributes
             */
            attributes: function (attributes) {
                if (attributes && !Array.isArray(attributes)) {
                    throw new Error('Array Required')
                }
                if (!attributes) {
                    try {
                        return htmlSelector.attributes
                    } catch (error) {
                        return;
                    }
                }
                try {
                    let object = {};
                    attributes.forEach((attribute) => {
                        try {
                            object[attribute] = htmlSelector.getAttribute(attribute);
                        } catch (e) {
                            object[attribute] = null
                        }
                    });
                    return object
                } catch (e) {
                    return []
                }
            },

            /**
             * @function children
             * @returns {HTMLCollection}
             */
            children: function () {
                try {
                    return htmlSelector.children;
                } catch (e) {
                    return null
                }
            },

            /**
             * @function toggleClass
             * @returns {void}
             */
            toggleClass: function (className) {
                htmlSelector.classList.toggle(className);
            },
            /**
             * 
             * @function hasClass
             * @returns {boolean}
             */
            hasClass: function (className) {
                return htmlSelector.classList.contains(className);
            },

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
                child: function (html) {
                    try {
                        htmlSelector.appendChild(html)
                    } catch (e) {

                    }
                },

                /**
                 * @function attribute
                 * @returns {void}
                 * @param {string} attribute_name
                 * @param {string} value
                 */
                attribute: function (attribute_name, value) {
                    htmlSelector.setAttribute(attribute_name, value)
                },

                /**
                 * @function attributes
                 * @returns {void}
                 * @param {array} attributes [{attribute_name,value}, {attribute_name,value}]
                 */
                attributes: function (attributes) {
                    if (attributes && !Array.isArray(attributes)) {
                        throw new Error(isArray)
                    }
                    if (!attributes) {
                        throw new Error(isArray)
                    }
                    attributes.forEach(attribute => {
                        try {
                            htmlSelector.setAttribute(attribute.attribute_name, attribute.value)
                        } catch (error) {}
                    });
                },

                /**
                 * @function class
                 * @returns {void}
                 * @param {string} element_class
                 */
                class: function (element_class) {
                    htmlSelector.classList.add(element_class)
                },

                /**
                 * @function classes
                 * @returns {void}
                 * @param {array} element_classes
                 */
                classes: function (element_classes) {
                    if (element_classes && !Array.isArray(element_classes)) {
                        throw new Error(isArray)
                    }
                    if (!element_classes) {
                        throw new Error(isArray)
                    }
                    element_classes.forEach(element_class => {
                        htmlSelector.classList.add(element_class)

                    });
                }
            },

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
                class: function (element_class) {
                    htmlSelector.classList.remove(element_class)
                },

                /**
                 * @function classes
                 * @returns {void}
                 * @param {array} element_classes
                 */
                classes: function (element_classes) {
                    if (element_classes && !Array.isArray(element_classes)) {
                        throw new Error(isArray)
                    }
                    if (!element_classes) {
                        throw new Error(isArray)
                    }
                    element_classes.forEach(element_class => {
                        htmlSelector.classList.remove(element_class)

                    });
                }
            }

        }
    } catch (e) {
        throw new Error(notBrowserException)
    }
}


/**
 * Returns object with various functions.
 * @param {HTMLElement} selector - The input string.
 * @returns {object} An object with various functions.
 */
export function selectAll(selector) {
    return document.querySelector(selector)
}