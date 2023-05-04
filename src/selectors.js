import {
    notBrowserException
} from "./exceptions";

/**
 * Returns object with various functions.
 * @param {HTMLElement} selector - The input string.
 * @returns {object} An object with various functions.
 */
export function select(selector) {
    try {


        let htmlSelector;
        if (document) {
            htmlSelector = document.querySelector(selector);
        }
        let fn = () => {
        };
        fn.prototype.iText = function () {
            try {
                return htmlSelector.innerText;
            } catch (e) {
                return null
            }
        }
        fn.prototype.attribute = function (attribute) {
            try {
                return htmlSelector.getAttribute(attribute);
            } catch (e) {
                return null
            }
        }
        fn.prototype.attributes = function (attributes) {
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
        }
        fn.prototype.children = function () {
            try {
                return htmlSelector.children;
            } catch (e) {
                return null
            }
        }
        fn.prototype.add = {
            child: function (html) {
                try {
                    htmlSelector.appendChild(html)
                } catch (e) {

                }
            }
        }
        return new fn();
    } catch (error) {
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