!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.jsuals=r():t.jsuals=r()}(window,(function(){return function(t){var r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(r){return t[r]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=0)}([function(t,r,e){"use strict";e.r(r),e.d(r,"select",(function(){return o})),e.d(r,"selectAll",(function(){return u}));var n="Selector Works only on browser. Found runtime JavaScript(Node.js)";function o(t){try{var r;document&&(r=document.querySelector(t));var e=function(){if(!document)throw new Error(n)};return e.prototype.iText=function(){try{return r.innerText}catch(t){return null}},e.prototype.attribute=function(t){try{return r.getAttribute(t)}catch(t){return null}},e.prototype.attributes=function(t){if(t&&!Array.isArray(t))throw new Error("Array Required");if(!t)try{return r.attributes}catch(t){return}try{var e={};return t.forEach((function(t){try{e[t]=r.getAttribute(t)}catch(r){e[t]=null}})),e}catch(t){return[]}},e.prototype.children=function(){try{return r.children}catch(t){return null}},e.prototype.add={child:function(t){try{r.appendChild(t)}catch(t){}}},new e}catch(t){throw new Error(n)}}function u(t){return document.querySelector(t)}}])}));