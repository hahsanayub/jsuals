"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selector = void 0;
function select(selector) {
    return document.querySelector(selector);
}
exports.selector = {
    select: select
};
