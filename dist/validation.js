!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Validation=t():e.Validation=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Messages=t.FormValidation=t.Validator=t.Validation=void 0;var i=r(1),s=n(i),o=r(4),a=n(o),u=r(7),l=n(u),f=r(5),c=n(f);t.Validation=s["default"],t.Validator=a["default"],t.FormValidation=l["default"],t.Messages=c["default"]},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){var r=b.Advice[t];if(!r)throw new Error("invalid advice: "+t);var n=new r(e,e.options);return{prompt:function(){var t=e.current||e.rules[0];n.prompt&&n.prompt(e,u(e,t.prompt))},success:function(t){n.success&&n.success(e,u(e,t.success))},error:function(t){if(n.error){var r=null!==e.errorMessage?e.errorMessage:t.error||t.message;n.error(e,u(e,r))}}}}function u(e,t){if(e.messages){var r=t;t=e.messages[r]||r}return t}function l(e,t,r){return e=e[0],e.tagName.toLowerCase()===t&&(!r||e.type===r)}function f(e,t){var r=e.rules.filter(function(e){return e.instant});if(r.length){t.data("validationValue",t.val());var n=function(){var n=t.data("validationValue"),i=t.val();n!==i&&(e.validate({rules:r})?t.data("validationValue",i):e.current.invert&&i&&setTimeout(function(){t.val(n)},50))};t.on("input",n),t.on("keypress",n),t.on("keyup",n)}}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),v=r(2),d=n(v),h=r(3),p=n(h),m=r(4),y=n(m),_=r(6),g=n(_),b=function(e){function t(e,r){i(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));if(!e||1!==e.nodeType)throw new Error("invalid element for validation, it should be a dom element.");r=r||{},n.elm=e,n.options=r.rules?r:{rules:r};var o=n.options.rules,u=void 0===o?[]:o;return n.rules=Array.isArray(u)?u:[u],n.advice=a(n,r.advice||"default"),n.handler=t.Handler[r.handler||"default"],n.handler.call(n,n),n.messages=r.messages,n.enabled=!0,n}return o(t,e),c(t,null,[{key:"validate",value:function(e,r,n,i){var s=r.type||r.validate;if(!s)throw new Error("validate rule required.");if("required"===s)return!!e;if(!e&&!r.force)return!0;var o=s;if("string"==typeof s&&(o=t.Validator[s],!o))throw new Error("invalid validator: "+s);return"function"==typeof o?o.call(n,e,r,i):"function"!=typeof o.test||o.test(e)}}]),c(t,[{key:"enable",value:function(){this.enabled=!0}},{key:"disable",value:function(){this.enabled=!1,this.advice.prompt()}},{key:"validate",value:function(e){e=e||{};var r=(0,p["default"])(this.elm);if(!this.enabled||r[0].disabled||r.hasClass("disabled"))return!0;var n=r.val();n="string"==typeof n?n.trim():n;var i=e.rules||this.rules,s=!0,o=null;this.current=null,this.errorMessage=null;for(var a=0,u=i.length;a<u&&(o=i[a],s=t.validate(n,o,this,e),s=o.not?!s:s,s);a++);return this.current=o,this.valid=s,e.noAdvice||this.advice[s?"success":"error"](o),this.emit("validate",{valid:s,rule:o,from:e.from}),s}}]),t}(d["default"]);b.Advice={},b.Handler={},b.Validator=y["default"],t["default"]=b,b.Handler["default"]=function(){var e=this,t=(0,p["default"])(this.elm),r="validationAdvicePrompt",n=null,i=function(){n||(n=setTimeout(function(){n=null},100),t.removeData(r),e.validate({from:"event"}))},s=this.advice;f(e,t),t.on("keydown",function(){t.data(r)||(s.prompt(),t.data(r,!0))}),t.on("change",i),l(t,"input","radio")||l(t,"input","checkbox")?t.on("click",i):(l(t,"input")||l(t,"textarea"))&&t.on("blur",i)},b.Advice["default"]=g["default"];var w=function(){function e(){i(this,e)}return c(e,[{key:"error",value:function(e){alert(e)}}]),e}();b.Advice.alert=w},function(e,t){"use strict";function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function n(e){return"function"==typeof e}function i(e){return"number"==typeof e}function s(e){return"object"===("undefined"==typeof e?"undefined":a(e))&&null!==e}function o(e){return void 0===e}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};e.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(e){if(!i(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},r.prototype.emit=function(e){var t,r,i,a,u,l;if(this._events||(this._events={}),"error"===e&&(!this._events.error||s(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;var f=new Error('Uncaught, unspecified "error" event. ('+t+")");throw f.context=t,f}if(r=this._events[e],o(r))return!1;if(n(r))switch(arguments.length){case 1:r.call(this);break;case 2:r.call(this,arguments[1]);break;case 3:r.call(this,arguments[1],arguments[2]);break;default:a=Array.prototype.slice.call(arguments,1),r.apply(this,a)}else if(s(r))for(a=Array.prototype.slice.call(arguments,1),l=r.slice(),i=l.length,u=0;u<i;u++)l[u].apply(this,a);return!0},r.prototype.addListener=function(e,t){var i;if(!n(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,n(t.listener)?t.listener:t),this._events[e]?s(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,s(this._events[e])&&!this._events[e].warned&&(i=o(this._maxListeners)?r.defaultMaxListeners:this._maxListeners,i&&i>0&&this._events[e].length>i&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())),this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(e,t){function r(){this.removeListener(e,r),i||(i=!0,t.apply(this,arguments))}if(!n(t))throw TypeError("listener must be a function");var i=!1;return r.listener=t,this.on(e,r),this},r.prototype.removeListener=function(e,t){var r,i,o,a;if(!n(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(r=this._events[e],o=r.length,i=-1,r===t||n(r.listener)&&r.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(s(r)){for(a=o;a-- >0;)if(r[a]===t||r[a].listener&&r[a].listener===t){i=a;break}if(i<0)return this;1===r.length?(r.length=0,delete this._events[e]):r.splice(i,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},r.prototype.removeAllListeners=function(e){var t,r;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(r=this._events[e],n(r))this.removeListener(e,r);else if(r)for(;r.length;)this.removeListener(e,r[r.length-1]);return delete this._events[e],this},r.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?n(this._events[e])?[this._events[e]]:this._events[e].slice():[]},r.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(n(t))return 1;if(t)return t.length}return 0},r.listenerCount=function(e,t){return e.listenerCount(t)}},function(e,t){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t,r){if(t=i(t),t.length){var n=i(e.className);e.className=t.reduce(r,n).join(" ")}}function i(e){return e=e.trim(),e?e.split(/\s+/g):[]}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=function(){function e(t){r(this,e),this.elm=t,this[0]=t}return s(e,[{key:"on",value:function(e,t){this.elm.addEventListener(e,t,!1)}},{key:"hasClass",value:function(e){var t=new RegExp("(^|\\s)"+e+"(\\s|$)");return t.test(this.elm.className)}},{key:"addClass",value:function(e){n(this.elm,e,function(e,t){return e.indexOf(t)===-1&&e.push(t),e})}},{key:"removeClass",value:function(e){n(this.elm,e,function(e,t){var r=e.indexOf(t);return r!==-1&&e.splice(r,1),e})}},{key:"val",value:function(e){var t=this.elm;return void 0===e?t.value:void(t.value=e)}},{key:"data",value:function(e,t){var r=this.elm;void 0!==t&&(r.dataset[e]=JSON.stringify(t));var n=r.dataset[e];if(n)try{return JSON.parse(n)}catch(i){console.error("invalid json: "+n)}}},{key:"removeData",value:function(e){delete this.elm.dataset[e]}}]),e}(),a=window.jQuery||window.Zepto||function(e){return new o(e)};t["default"]=a},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e){for(var t=0,r=0,n=e.length;r<n;r++)s(e[r])||t++;return t}function s(e){return!e||"string"==typeof e&&/^\s*$/.test(e)}function o(e,t,r){if(!r.test(e))return!1;t=t||[];var n=void 0!==t.min?t.min:Number.MIN_VALUE,i=void 0!==t.max?t.max:Number.MAX_VALUE;return e=parseFloat(e),n<=e&&e<=i}function a(e,t,r,n){function i(i){if(!a){a=!0;var s=(0,l["default"])(e.elm);s.data("validationResult",i),s.data("validationLastValue",t),n.noAdvice||(e.errorMessage=i.errorMessage,e.advice[i.valid?"success":"error"](r))}}var s=r.validate;if(!s)throw new Error("rule.validate required");var o=s.call(e,t,r);if(!o||"function"!=typeof o.then)throw new Error("async validate should return a promise object");var a=!1;setTimeout(function(){i({valid:!1,errorMessage:c["default"].Timeout})},5e3),o.then(function(e){e=e||{},i({valid:e.valid,errorMessage:e.errorMessage})},function(){i({valid:!1,errorMessage:c["default"].NetworkError})})}Object.defineProperty(t,"__esModule",{value:!0});var u=r(3),l=n(u),f=r(5),c=n(f);t.regexp=function(e,t){return new RegExp(t.pattern).test(e)},t.length=function(e,t){if(t.length)return e.length===t.length;var r=void 0!==t.minLength?t.minLength:Number.MIN_VALUE,n=void 0!==t.maxLength?t.maxLength:Number.MAX_VALUE;return r<=e.length&&e.length<=n},t.range=function(e,t){return o(e,t,/^\d+(\.\d+)?$/)},t.intRange=function(e,t){return o(e,t,/^\d+$/)};var v=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;t.email=function(e){return v.test(e)},t.array=function(e,t){if(!Array.isArray(e))return!1;var r=t.ignoreEmpty?i(e):e.length;if(t.length)return r===t.length;var n=void 0!==t.minLength?t.minLength:Number.MIN_VALUE,s=void 0!==t.maxLength?t.maxLength:Number.MAX_VALUE;return n<=r&&r<=s},t.async=function(e,t,r){var n=(0,l["default"])(this.elm),i=n.data("validationLastValue");if(i===e){var s=n.data("validationResult")||{};return this.errorMessage=s.errorMessage,s.valid}return a(this,e,t,r),this.errorMessage="",void 0===i||"event"===r.from},t["default"]=t},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={Timeout:"timeout",NetworkError:"network error"}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=e.nextSibling;r;){if(1===r.nodeType&&o(r,t))return r;r=r.nextSibling}return null}function o(e,t){return e=(0,c["default"])(e),t=t.split(/\s+/g),t.every(function(t){return e.hasClass(t)})}function a(e,t){var r=document.createElement("div");(0,c["default"])(r).addClass(t);var n=e.nextSibling;return n?e.parentNode.insertBefore(r,n):e.parentNode.appendChild(r),r}function u(e,t){e.removeClass((t.prompt||"")+" "+(t.success||"")+" "+(t.error||""))}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(3),c=n(f),v=function(){function e(t,r){i(this,e),this.elm=t.elm,this.options=Object.assign({fieldClassNames:{prompt:"validation-prompt",success:"validation-success",error:"validation-error"},assistClassNames:{prompt:"validation-assist-prompt",success:"validation-assist-success",error:"validation-assist-error"},getAssist:s},r)}return l(e,[{key:"prompt",value:function(e,t){this.show(e.elm,t,"prompt")}},{key:"success",value:function(e,t){this.show(e.elm,t,"success")}},{key:"error",value:function(e,t){this.show(e.elm,t,"error")}},{key:"show",value:function(e,t,r){r=r||"error";var n=this.options,i=n.assistClassNames.element||"validation-assist",s=n.getAssist(e,i)||a(e,i),o=(0,c["default"])(s),l=(0,c["default"])(e),f=n.fieldClassNames,v=n.assistClassNames;u(l,f),u(o,v),f[r]&&l.addClass(f[r]),v[r]&&o.addClass(v[r]),t?(s.innerHTML=t,s.style="display: ;"):(s.innerHTML="",s.style="display: none;")}}]),e}();t["default"]=v},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e){(0,c["default"])(e.form).on("submit",function(t){e.validate()||t.preventDefault()})}function o(e){try{e.focus&&e.focus()}catch(t){console.error(t)}}function a(e,t){var r=e.options.formClassNames||{error:"validation-form-error",success:"validation-form-success"},n=(0,c["default"])(e.form);n.removeClass((r.error||"")+" "+(r.success||""));var i=r[t?"success":"error"];i&&n.addClass(i)}function u(e){var t=e.validations,r=t.some(function(e){return e.valid===!1});if(r)return void a(e,!1);var n=t.every(function(e){return e.valid===!0});n&&a(e,!0)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(3),c=n(f),v=r(1),d=n(v),h=function(){function e(t,r){i(this,e),this.form=t,this.options=r||{},this.refresh(),this.options.validateOnSubmit!==!1&&"form"===t.tagName.toLowerCase()&&s(this)}return l(e,[{key:"validate",value:function(e){e=e||{};for(var t=e.fields?e.fields.reduce(function(e,t){var r=t.data("validation");return r&&e.push(r),e},[]):this.validations,r=!0,n=!1,i=0,s=t.length;i<s;i++){var u=t[i];u.validate(e)||(r=!1,n||(o(u.elm),n=!0))}return a(this,r),r}},{key:"refresh",value:function(){var e=this,t=this.form,r=this.options,n=t.querySelectorAll("input,select,textarea");this.validations=Array.from(n).reduce(function(t,n){n=(0,c["default"])(n);var i=n.data("validation");if(!i){var s=n.data("validate");if(s){var o=Object.assign({},r);o.rules=s,i=new d["default"](n[0],o),i.on("validate",function(t){"event"===t.from&&u(e)}),n.data("validation",i)}}return i&&t.push(i),t},[])}}]),e}();t["default"]=h}])});