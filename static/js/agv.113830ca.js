(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["agv"],{"0538":function(t,e,r){"use strict";var n=r("1c0b"),o=r("861d"),a=[].slice,i={},c=function(t,e,r){if(!(e in i)){for(var n=[],o=0;o<e;o++)n[o]="a["+o+"]";i[e]=Function("C,a","return new C("+n.join(",")+")")}return i[e](t,r)};t.exports=Function.bind||function(t){var e=n(this),r=a.call(arguments,1),i=function(){var n=r.concat(a.call(arguments));return this instanceof i?c(e,n.length,n):e.apply(t,n)};return o(e.prototype)&&(i.prototype=e.prototype),i}},"057f":function(t,e,r){var n=r("fc6a"),o=r("241c").f,a={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==a.call(t)?c(t):o(n(t))}},"159b":function(t,e,r){var n=r("da84"),o=r("fdbc"),a=r("17c2"),i=r("9112");for(var c in o){var s=n[c],u=s&&s.prototype;if(u&&u.forEach!==a)try{i(u,"forEach",a)}catch(l){u.forEach=a}}},"1d31":function(t,e,r){},"25d2":function(t,e,r){},"25f0":function(t,e,r){"use strict";var n=r("6eeb"),o=r("825a"),a=r("d039"),i=r("ad6d"),c="toString",s=RegExp.prototype,u=s[c],l=a((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),f=u.name!=c;(l||f)&&n(RegExp.prototype,c,(function(){var t=o(this),e=String(t.source),r=t.flags,n=String(void 0===r&&t instanceof RegExp&&!("flags"in s)?i.call(t):r);return"/"+e+"/"+n}),{unsafe:!0})},3410:function(t,e,r){var n=r("23e7"),o=r("d039"),a=r("7b0b"),i=r("e163"),c=r("e177"),s=o((function(){i(1)}));n({target:"Object",stat:!0,forced:s,sham:!c},{getPrototypeOf:function(t){return i(a(t))}})},3748:function(t,e,r){},"3af1":function(t,e,r){"use strict";var n=r("1d31"),o=r.n(n);o.a},"3ca3":function(t,e,r){"use strict";var n=r("6547").charAt,o=r("69f3"),a=r("7dd0"),i="String Iterator",c=o.set,s=o.getterFor(i);a(String,"String",(function(t){c(this,{type:i,string:String(t),index:0})}),(function(){var t,e=s(this),r=e.string,o=e.index;return o>=r.length?{value:void 0,done:!0}:(t=n(r,o),e.index+=t.length,{value:t,done:!1})}))},4244:function(t,e,r){t.exports=r.p+"static/img/VsoonSystem.e415bb1f.png"},"429b":function(t,e,r){"use strict";var n=r("bc52"),o=r.n(n);o.a},"4ae1":function(t,e,r){var n=r("23e7"),o=r("d066"),a=r("1c0b"),i=r("825a"),c=r("861d"),s=r("7c73"),u=r("0538"),l=r("d039"),f=o("Reflect","construct"),d=l((function(){function t(){}return!(f((function(){}),[],t)instanceof t)})),p=!l((function(){f((function(){}))})),v=d||p;n({target:"Reflect",stat:!0,forced:v,sham:v},{construct:function(t,e){a(t),i(e);var r=arguments.length<3?t:a(arguments[2]);if(p&&!d)return f(t,e,r);if(t==r){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var n=[null];return n.push.apply(n,e),new(u.apply(t,n))}var o=r.prototype,l=s(c(o)?o:Object.prototype),v=Function.apply.call(t,l,e);return c(v)?v:l}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("1d80"),o=r("5899"),a="["+o+"]",i=RegExp("^"+a+a+"*"),c=RegExp(a+a+"*$"),s=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(i,"")),2&t&&(r=r.replace(c,"")),r}};t.exports={start:s(1),end:s(2),trim:s(3)}},"5e20":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"agv"},[r("div",{staticClass:"agv-header clearfix"},[t._m(0),r("div",{staticClass:"agv-info fr"},[r("span",[r("battery",{ref:"battery",attrs:{"electric-capacity":t.electricity,"battery-status":t.batteryStatus}})],1),r("div",{staticClass:"wifi-status"},[r("span",{staticStyle:{"padding-left":"26px"}},[t._v("网络状态：")]),t.wifiShow?r("span",{staticClass:"wifi"},[r("svg",{staticClass:"icon",attrs:{t:"1594871131178",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6161",width:"14",height:"14","data-spm-anchor-id":"a313x.7781069.0.i3"}},[r("path",{attrs:{d:"M512 810.666667m-42.666667 0a42.666667 42.666667 0 1 0 85.333334 0 42.666667 42.666667 0 1 0-85.333334 0Z",fill:"#ffffff","p-id":"6162"}}),r("path",{attrs:{d:"M512 597.333333a213.333333 213.333333 0 0 0-148.053333 59.733334 42.666667 42.666667 0 1 0 59.306666 61.44 131.413333 131.413333 0 0 1 177.493334 0 42.666667 42.666667 0 1 0 59.306666-61.44A213.333333 213.333333 0 0 0 512 597.333333zM512 384a384 384 0 0 0-276.053333 117.333333A42.666667 42.666667 0 0 0 298.666667 560.64a298.666667 298.666667 0 0 1 430.08 0 42.666667 42.666667 0 0 0 30.293333 12.8 42.666667 42.666667 0 0 0 30.72-72.106667A384 384 0 0 0 512 384z",fill:"#ffffff","p-id":"6163"}}),r("path",{attrs:{d:"M926.72 338.346667a597.333333 597.333333 0 0 0-829.44 0 42.666667 42.666667 0 0 0 58.88 61.44 512 512 0 0 1 711.68 0 42.666667 42.666667 0 0 0 29.44 11.946666 42.666667 42.666667 0 0 0 30.72-13.226666 42.666667 42.666667 0 0 0-1.28-60.16z",fill:"#ffffff","p-id":"6164"}})])]):r("span",{staticClass:"no-wifi"},[r("svg",{staticClass:"icon",attrs:{t:"1594865455346",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6397",width:"14",height:"14"}},[r("path",{attrs:{d:"M512 810.666667m-42.666667 0a42.666667 42.666667 0 1 0 85.333334 0 42.666667 42.666667 0 1 0-85.333334 0Z",fill:"#F05051","p-id":"6398"}}),r("path",{attrs:{d:"M530.773333 469.333333l-81.066666-80.64-104.96-104.106666-66.133334-66.133334-77.653333-78.08a42.666667 42.666667 0 0 0-60.586667 60.586667l58.88 58.453333 62.293334 62.293334 95.146666 95.573333 66.133334 65.706667 116.906666 116.906666 119.04 119.466667 164.266667 164.266667a42.666667 42.666667 0 0 0 60.586667 0 42.666667 42.666667 0 0 0 0-60.586667zM926.72 338.346667A594.346667 594.346667 0 0 0 512 170.666667a601.6 601.6 0 0 0-189.44 31.146666l69.12 69.12a507.306667 507.306667 0 0 1 476.16 128 42.666667 42.666667 0 0 0 29.44 11.946667 42.666667 42.666667 0 0 0 30.72-13.226667 42.666667 42.666667 0 0 0-1.28-59.306666zM162.986667 283.733333a610.986667 610.986667 0 0 0-65.706667 54.613334 42.666667 42.666667 0 0 0 58.88 61.44 558.506667 558.506667 0 0 1 68.266667-55.04zM725.333333 560.64a42.666667 42.666667 0 0 0 30.293334 12.8 42.666667 42.666667 0 0 0 30.72-72.106667A384 384 0 0 0 512 384h-6.826667l100.266667 100.266667A298.666667 298.666667 0 0 1 725.333333 560.64zM317.013333 437.76a375.466667 375.466667 0 0 0-81.066666 63.573333A42.666667 42.666667 0 0 0 298.666667 560.64a311.466667 311.466667 0 0 1 85.333333-60.16zM363.946667 657.066667a42.666667 42.666667 0 1 0 59.306666 61.44 130.56 130.56 0 0 1 163.84-10.666667l-107.52-107.52a213.333333 213.333333 0 0 0-115.626666 56.746667z",fill:"#F05051","p-id":"6399"}})])])])])]),r("div",{staticClass:"agv-body clearfix"},[r("div",{staticClass:"agv-body-sec car fl"},[r("div",{staticClass:"car-base-info"},[r("h1",{staticStyle:{"margin-bottom":"8px"}},[t._v(t._s(t.carName))]),r("p",[t._v("车辆编号："+t._s(t.carNumber))]),r("p",[t._v("软件版本号："+t._s(t.carVersion))])]),r("div",{staticClass:"car-view-area"},[t._m(1),r("div",{staticClass:"car-model-container"},[r("CarModel",{attrs:{moduleInfo:t.moduleInfo}})],1)])]),r("div",{staticClass:"agv-body-sec path fr"},[r("div",{staticClass:"path-info"},[r("div",{staticClass:"info-mod"},[r("h1",[t._v(t._s(t.taskName))]),r("p",[t._v("任务")])]),r("div",{staticClass:"info-mod"},[r("h1",[t._v(t._s(t.progress))]),r("p",[t._v("进度")])]),r("div",{staticClass:"info-mod"},[r("h1",[t._v(t._s(t.latestPosition))]),r("p",[t._v("最近坐标")])])]),r("div",{staticClass:"path-table"},[r("AgvTable",{attrs:{data:t.tableData}})],1)])]),r("div",{}),r("ErrorDialog",{attrs:{show:t.isShowError,msg:t.errMsg,onConfirmError:t.onConfirmError}})],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"agv-logo fl"},[n("img",{attrs:{src:r("4244")}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"legend-bar"},[r("div",{staticClass:"legend agv-green"}),r("p",[t._v("正常")]),r("div",{staticClass:"legend agv-red"}),r("p",[t._v("异常")]),r("div",{staticClass:"legend agv-gray"}),r("p",[t._v("掉线")])])}];r("99af"),r("4160"),r("b0c0"),r("159b");function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,e,r){return e&&i(t.prototype,e),r&&i(t,r),t}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function u(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}r("4ae1"),r("3410");function l(t){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},l(t)}r("d3b7"),r("25f0");function f(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}r("a4d3"),r("e01a"),r("d28b"),r("3ca3"),r("ddb0");function d(t){return d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function v(t,e){return!e||"object"!==d(e)&&"function"!==typeof e?p(t):e}function y(t){var e=f();return function(){var r,n=l(t);if(e){var o=l(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function g(t,e,r,n){var o,a=arguments.length,i=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,r,i):o(e,r))||i);return a>3&&i&&Object.defineProperty(e,r,i),i}var h=r("2b0e");
/**
  * vue-class-component v7.2.3
  * (c) 2015-present Evan You
  * @license MIT
  */function b(t){return b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function m(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function C(t){return w(t)||_(t)||S()}function w(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}function _(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function S(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function O(){return"undefined"!==typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys}function E(t,e){k(t,e),Object.getOwnPropertyNames(e.prototype).forEach((function(r){k(t.prototype,e.prototype,r)})),Object.getOwnPropertyNames(e).forEach((function(r){k(t,e,r)}))}function k(t,e,r){var n=r?Reflect.getOwnMetadataKeys(e,r):Reflect.getOwnMetadataKeys(e);n.forEach((function(n){var o=r?Reflect.getOwnMetadata(n,e,r):Reflect.getOwnMetadata(n,e);r?Reflect.defineMetadata(n,o,t,r):Reflect.defineMetadata(n,o,t)}))}var I={__proto__:[]},M=I instanceof Array;function x(t){return function(e,r,n){var o="function"===typeof e?e:e.constructor;o.__decorators__||(o.__decorators__=[]),"number"!==typeof n&&(n=void 0),o.__decorators__.push((function(e){return t(e,r,n)}))}}function F(t){var e=b(t);return null==t||"object"!==e&&"function"!==e}function j(t,e){var r=e.prototype._init;e.prototype._init=function(){var e=this,r=Object.getOwnPropertyNames(t);if(t.$options.props)for(var n in t.$options.props)t.hasOwnProperty(n)||r.push(n);r.forEach((function(r){"_"!==r.charAt(0)&&Object.defineProperty(e,r,{get:function(){return t[r]},set:function(e){t[r]=e},configurable:!0})}))};var n=new e;e.prototype._init=r;var o={};return Object.keys(n).forEach((function(t){void 0!==n[t]&&(o[t]=n[t])})),o}var P=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function D(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.name=e.name||t._componentTag||t.name;var r=t.prototype;Object.getOwnPropertyNames(r).forEach((function(t){if("constructor"!==t)if(P.indexOf(t)>-1)e[t]=r[t];else{var n=Object.getOwnPropertyDescriptor(r,t);void 0!==n.value?"function"===typeof n.value?(e.methods||(e.methods={}))[t]=n.value:(e.mixins||(e.mixins=[])).push({data:function(){return m({},t,n.value)}}):(n.get||n.set)&&((e.computed||(e.computed={}))[t]={get:n.get,set:n.set})}})),(e.mixins||(e.mixins=[])).push({data:function(){return j(this,t)}});var n=t.__decorators__;n&&(n.forEach((function(t){return t(e)})),delete t.__decorators__);var o=Object.getPrototypeOf(t.prototype),a=o instanceof h["a"]?o.constructor:h["a"],i=a.extend(e);return R(i,t,a),O()&&E(i,t),i}var N={prototype:!0,arguments:!0,callee:!0,caller:!0};function R(t,e,r){Object.getOwnPropertyNames(e).forEach((function(n){if(!N[n]){var o=Object.getOwnPropertyDescriptor(t,n);if(!o||o.configurable){var a=Object.getOwnPropertyDescriptor(e,n);if(!M){if("cid"===n)return;var i=Object.getOwnPropertyDescriptor(r,n);if(!F(a.value)&&i&&i.value===a.value)return}0,Object.defineProperty(t,n,a)}}}))}function T(t){return"function"===typeof t?D(t):function(e){return D(e,t)}}T.registerHooks=function(t){P.push.apply(P,C(t))};var A=T;var L="undefined"!==typeof Reflect&&"undefined"!==typeof Reflect.getMetadata;function $(t,e,r){if(L&&!Array.isArray(t)&&"function"!==typeof t&&"undefined"===typeof t.type){var n=Reflect.getMetadata("design:type",e,r);n!==Object&&(t.type=n)}}function V(t){return void 0===t&&(t={}),function(e,r){$(t,e,r),x((function(e,r){(e.props||(e.props={}))[r]=t}))(e,r)}}function B(t,e){void 0===e&&(e={});var r=e.deep,n=void 0!==r&&r,o=e.immediate,a=void 0!==o&&o;return x((function(e,r){"object"!==typeof e.watch&&(e.watch=Object.create(null));var o=e.watch;"object"!==typeof o[t]||Array.isArray(o[t])?"undefined"===typeof o[t]&&(o[t]=[]):o[t]=[o[t]],o[t].push({handler:r,deep:n,immediate:a})}))}var W=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{"text-align":"center"}},[r("van-overlay",{attrs:{show:t.show},on:{click:function(e){t.show=!1}}},[r("div",{staticClass:"wrapper",on:{click:function(t){t.stopPropagation()}}},[r("div",{staticClass:"block"},[r("p",{staticClass:"agv-err-msg"},[t._v(t._s(t.msg))]),r("van-button",{staticClass:"agv-buton",attrs:{round:"",type:"default"},on:{click:t.onConfirmError}},[t._v("确定")])],1)])])],1)},z=[],G=function(t){u(r,t);var e=y(r);function r(){return a(this,r),e.apply(this,arguments)}return r}(h["a"]);g([V()],G.prototype,"show",void 0),g([V({type:String,default:"--"})],G.prototype,"msg",void 0),g([V({type:Function})],G.prototype,"onConfirmError",void 0),G=g([A],G);var H=G,J=H,K=(r("71e8"),r("2877")),U=Object(K["a"])(J,W,z,!1,null,"48ff1712",null),q=U.exports,X=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"car-model"},[r("div",{staticClass:"car-wheel",style:{backgroundColor:t.getModuleColor(t.moduleInfo.WheelFront.status)},on:{click:function(e){return t.onClickCarModule(t.moduleInfo.WheelFront)}}},[r("p",{staticClass:"car-text"},[t._v("轮子")])]),r("div",{staticClass:"car-body"},[r("div",{staticClass:"car-front",style:{backgroundColor:t.getModuleColor(t.moduleInfo.CollisionFront.status)},on:{click:function(e){return t.onClickCarModule(t.moduleInfo.CollisionFront)}}},[r("p",{staticClass:"car-text"},[t._v("碰撞")])]),r("div",{staticClass:"car-inner"},[r("div",{staticClass:"car-deviate",style:{backgroundColor:t.getModuleColor(t.moduleInfo.DeviateFront.status)},on:{click:function(e){return t.onClickCarModule(t.moduleInfo.DeviateFront)}}},[r("p",{staticClass:"car-text"},[t._v("磁感")])]),r("div",{staticClass:"car-model-tof"},[r("div",{staticClass:"car-module",style:{backgroundColor:t.getModuleColor(t.moduleInfo.TOFFront.status)},on:{click:function(e){return t.onClickCarModule(t.moduleInfo.TOFFront)}}},[r("p",{staticClass:"car-text"},[t._v("TOF")])]),r("div",{staticClass:"car-module",style:{backgroundColor:t.getModuleColor(t.moduleInfo.SonicFront.status)},on:{click:function(e){return t.onClickCarModule(t.moduleInfo.SonicFront)}}},[r("p",{staticClass:"car-text"},[t._v("超声波")])])]),r("div",{staticClass:"car-module car-module-rfid",style:{backgroundColor:t.getModuleColor(t.moduleInfo.RFIDFront.status)},on:{click:function(e){return t.onClickCarModule(t.moduleInfo.RFIDFront)}}},[r("p",{staticClass:"car-text"},[t._v("RFID")])]),r("div",{staticClass:"car-module car-module-battery",style:{backgroundColor:t.getModuleColor(t.moduleInfo.Battery.status)},on:{click:function(e){return t.onClickCarModule(t.moduleInfo.Battery)}}},[r("p",{staticClass:"car-text"},[t._v("电池")])]),r("div",{staticClass:"car-module car-module-rfid",style:{backgroundColor:t.getModuleColor(t.moduleInfo.RFIDEnd.status)},on:{click:function(e){return t.onClickCarModule(t.moduleInfo.RFIDEnd)}}},[r("p",{staticClass:"car-text"},[t._v("RFID")])]),r("div",{staticClass:"car-model-tof"},[r("div",{staticClass:"car-module",style:{backgroundColor:t.getModuleColor(t.moduleInfo.TOFEnd.status)},on:{click:function(e){return t.onClickCarModule(t.moduleInfo.TOFEnd)}}},[r("p",{staticClass:"car-text"},[t._v("TOF")])]),r("div",{staticClass:"car-module",style:{backgroundColor:t.getModuleColor(t.moduleInfo.SonicEnd.status)},on:{click:function(e){return t.onClickCarModule(t.moduleInfo.SonicEnd)}}},[r("p",{staticClass:"car-text"},[t._v("超声波")])])]),r("div",{staticClass:"car-deviate",style:{backgroundColor:t.getModuleColor(t.moduleInfo.DeviateEnd.status)},on:{click:function(e){return t.onClickCarModule(t.moduleInfo.DeviateEnd)}}},[r("p",{staticClass:"car-text"},[t._v("磁感")])])]),r("div",{staticClass:"car-end",style:{backgroundColor:t.getModuleColor(t.moduleInfo.CollisionEnd.status)},on:{click:function(e){return t.onClickCarModule(t.moduleInfo.CollisionEnd)}}},[r("p",{staticClass:"car-text"},[t._v("碰撞")])])]),r("div",{staticClass:"car-wheel",style:{backgroundColor:t.getModuleColor(t.moduleInfo.WheelEnd.status)},on:{click:function(e){return t.onClickCarModule(t.moduleInfo.WheelEnd)}}},[r("p",{staticClass:"car-text"},[t._v("轮子")])]),r("ErrorDialog",{attrs:{show:t.isShowError,msg:t.errMsg,onConfirmError:t.onConfirmError}})],1)},Y=[],Z=function(t){u(r,t);var e=y(r);function r(){var t;return a(this,r),t=e.apply(this,arguments),t.errMsg="",t.isShowError=!1,t}return c(r,[{key:"getModuleColor",value:function(t){return 0===t?"#6DD400":1===t?"#B0AEAE":t>=2?"#F05051":void 0}},{key:"onClickCarModule",value:function(t){this.showErrorDialog(t.msg)}},{key:"showErrorDialog",value:function(t){this.errMsg=t,this.isShowError=!0}},{key:"onConfirmError",value:function(){this.isShowError=!1}}]),r}(h["a"]);g([V({type:String,default:"--"})],Z.prototype,"msg",void 0),g([V({type:Object})],Z.prototype,"moduleInfo",void 0),Z=g([A({components:{ErrorDialog:q}})],Z);var Q=Z,tt=Q,et=(r("429b"),Object(K["a"])(tt,X,Y,!1,null,"c968b8fe",null)),rt=et.exports,nt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("table",{staticStyle:{width:"100%"}},[t._m(0),r("tbody",t._l(t.data,(function(e,n){return r("tr",{key:n},[r("td",[r("span",[t._v(t._s(e.target))])]),r("td",{class:t.getPathColor(e)},[r("span",[t._v(t._s(e.actual))])]),r("td",[r("span",[t._v(t._s(e.distance))])]),r("td",[r("span",[t._v(t._s(e.time))])])])})),0)])])},ot=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",{staticStyle:{width:"95px"}},[r("span",[t._v("目标路线")])]),r("th",{staticStyle:{width:"95px"}},[r("span",[t._v("实际路线")])]),r("th",{staticStyle:{width:"95px"}},[r("span",[t._v("行驶距离/m")])]),r("th",[r("span",[t._v("到达时间")])])])])}],at=function(t){u(r,t);var e=y(r);function r(){return a(this,r),e.apply(this,arguments)}return c(r,[{key:"getPathColor",value:function(t){return 0===t.statusCode?"agv-green":1===t.statusCode?"agv-red":2===t.statusCode?"agv-gray":""}}]),r}(h["a"]);g([V({type:Array,default:function(){return[]}})],at.prototype,"data",void 0),at=g([A],at);var it=at,ct=it,st=(r("d8ce"),Object(K["a"])(ct,nt,ot,!1,null,"192cb4a4",null)),ut=st.exports,lt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[t._v(" "+t._s(t.batteryStatus)+" "),t._m(0),r("span",{staticStyle:{"margin-left":"6px"}},[t._v(t._s(t.batteryCapacity))])])},ft=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"battery"},[r("div",{staticClass:"capacity"})])}],dt=(r("a9e3"),function(t){u(r,t);var e=y(r);function r(){var t;return a(this,r),t=e.apply(this,arguments),t.capacityWidth=14,t}return c(r,[{key:"changeBatteryIcon",value:function(){var t=document.querySelector(".capacity");this.electricCapacity<=.2?t.style.backgroundColor="#F05051":t.style.backgroundColor="#6DD400",t.style.width="".concat(this.electricCapacity*this.capacityWidth,"px")}},{key:"init",value:function(){this.changeBatteryIcon()}},{key:"batteryCapacity",get:function(){return"".concat(100*this.electricCapacity,"%")}}]),r}(h["a"]));g([V({type:String,default:"剩余电量："})],dt.prototype,"batteryStatus",void 0),g([V({type:Number})],dt.prototype,"electricCapacity",void 0),g([B("electricCapacity")],dt.prototype,"changeBatteryIcon",null),dt=g([A],dt);var pt=dt,vt=pt,yt=(r("3af1"),Object(K["a"])(vt,lt,ft,!1,null,"f76ea6ce",null)),gt=yt.exports,ht=r("b32d"),bt={1e3:"正常",1001:"掉线",1002:"异常",1003:"空闲",2e3:"正常",2001:"通信异常",2002:"高温",2003:"电流过大",2004:"电压过大",2005:"电压过小",3e3:"正常",3001:"通信异常",3002:"距离过近",4e3:"正常",4001:"通信异常",4002:"异常",5e3:"正常",5001:"通信异常",5002:"偏离轨道",6e3:"正常",6001:"碰撞",7e3:"正常",7001:"通信异常",8e3:"充电中：",8001:"剩余电量：",8002:"异常：",9e3:"正常：",9001:"通信异常：",9002:"异常："},mt=function(t){u(r,t);var e=y(r);function r(){var t;return a(this,r),t=e.apply(this,arguments),t.errMsg="",t.electricity=0,t.isShowError=!1,t.carName="",t.carNumber="",t.carVersion="",t.batteryStatus="",t.moduleInfo={WheelFront:{status:void 0,msg:""},WheelEnd:{status:void 0,msg:""},CollisionFront:{status:void 0,msg:""},CollisionEnd:{status:void 0,msg:""},TOFFront:{status:void 0,msg:""},TOFEnd:{status:void 0,msg:""},SonicFront:{status:void 0,msg:""},SonicEnd:{status:void 0,msg:""},RFIDFront:{status:void 0,msg:""},RFIDEnd:{status:void 0,msg:""},Battery:{status:void 0,msg:""}},t.taskName="",t.latestPosition="",t.speed=0,t.tableData=[],t.carStatus=1001,t.wifiShow=!1,t}return c(r,[{key:"wifiStatus",value:function(t){switch(t){case 1e3:this.wifiShow=!0;break;case 1001:case 1002:this.wifiShow=!1,this.$notify({type:"danger",message:"当前小车掉线或出现异常，请检查网络连接或排除故障！"});break;case 1003:this.wifiShow=!0,this.$notify({type:"primary",message:"当前小车空闲"});break}}},{key:"mounted",value:function(){var t=this;this.$nextTick((function(){var e=t.$refs.battery;e.init(),t.getCarInfo(),t.getCarDynamic()}))}},{key:"onConfirmError",value:function(){this.isShowError=!1}},{key:"getCarInfo",value:function(){var t=this,e=["","Battery","TOF","Deviate","Wheel","Collision","RFID","Sonic"],r={Battery:"电池模块",TOF:"TOF模块",Deviate:"磁感模块",Wheel:"轮子模块",Collision:"碰撞模块",RFID:"RFID模块",Sonic:"超声波模块"};Object(ht["a"])("/carinfo").then((function(n){t.carName=n.name,t.carNumber=n.carNumber,t.carVersion=n.version,t.carStatus=n.carStatus,t.electricity=parseFloat(n.electricity),t.batteryStatus=bt[n.electricStatus],n.moduleList.forEach((function(n){var o=1===n.type?"Battery":"".concat(e[n.type]).concat("1"===n.modId?"Front":"End");t.moduleInfo[o]={status:n.info.status%1e3,msg:"".concat(r[e[n.type]],": ").concat(bt[n.info.status])}})),setTimeout((function(){t.getCarInfo()}),1e4)})).catch((function(){setTimeout((function(){t.getCarInfo()}),1e4)}))}},{key:"getCarDynamic",value:function(){var t=this;Object(ht["a"])("/cart_dynamic").then((function(e){t.tableData=[],t.speed=e.speed,t.taskName=e.taskName,t.latestPosition=e.actualPath[e.actualPath.length-1].pos,e.tarTask.forEach((function(r,n){var o=n>=e.actualPath.length,a={target:r.pos,actual:o?"":e.actualPath[n].pos,statusCode:o?"":r.pos===e.actualPath[n].pos?0:1,distance:o?"":e.actualPath[n].distance,time:o?"":e.actualPath[n].time};t.tableData.push(a)})),setTimeout((function(){t.getCarDynamic()}),1e4)})).catch((function(){setTimeout((function(){t.getCarDynamic()}),1e4)}))}},{key:"progress",get:function(){return"".concat(100*this.speed,"%")}}]),r}(h["a"]);g([B("carStatus")],mt.prototype,"wifiStatus",null),mt=g([A({components:{Battery:gt,ErrorDialog:q,CarModel:rt,AgvTable:ut}})],mt);var Ct=mt,wt=Ct,_t=(r("c230"),Object(K["a"])(wt,n,o,!1,null,"294a4a0c",null));e["default"]=_t.exports},6547:function(t,e,r){var n=r("a691"),o=r("1d80"),a=function(t){return function(e,r){var a,i,c=String(o(e)),s=n(r),u=c.length;return s<0||s>=u?t?"":void 0:(a=c.charCodeAt(s),a<55296||a>56319||s+1===u||(i=c.charCodeAt(s+1))<56320||i>57343?t?c.charAt(s):a:t?c.slice(s,s+2):i-56320+(a-55296<<10)+65536)}};t.exports={codeAt:a(!1),charAt:a(!0)}},7156:function(t,e,r){var n=r("861d"),o=r("d2bb");t.exports=function(t,e,r){var a,i;return o&&"function"==typeof(a=e.constructor)&&a!==r&&n(i=a.prototype)&&i!==r.prototype&&o(t,i),t}},"71e8":function(t,e,r){"use strict";var n=r("25d2"),o=r.n(n);o.a},7251:function(t,e,r){},"746f":function(t,e,r){var n=r("428f"),o=r("5135"),a=r("e538"),i=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||i(e,t,{value:a.f(t)})}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),a=r("d066"),i=r("c430"),c=r("83ab"),s=r("4930"),u=r("fdbf"),l=r("d039"),f=r("5135"),d=r("e8b5"),p=r("861d"),v=r("825a"),y=r("7b0b"),g=r("fc6a"),h=r("c04e"),b=r("5c6c"),m=r("7c73"),C=r("df75"),w=r("241c"),_=r("057f"),S=r("7418"),O=r("06cf"),E=r("9bf2"),k=r("d1e7"),I=r("9112"),M=r("6eeb"),x=r("5692"),F=r("f772"),j=r("d012"),P=r("90e3"),D=r("b622"),N=r("e538"),R=r("746f"),T=r("d44e"),A=r("69f3"),L=r("b727").forEach,$=F("hidden"),V="Symbol",B="prototype",W=D("toPrimitive"),z=A.set,G=A.getterFor(V),H=Object[B],J=o.Symbol,K=a("JSON","stringify"),U=O.f,q=E.f,X=_.f,Y=k.f,Z=x("symbols"),Q=x("op-symbols"),tt=x("string-to-symbol-registry"),et=x("symbol-to-string-registry"),rt=x("wks"),nt=o.QObject,ot=!nt||!nt[B]||!nt[B].findChild,at=c&&l((function(){return 7!=m(q({},"a",{get:function(){return q(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=U(H,e);n&&delete H[e],q(t,e,r),n&&t!==H&&q(H,e,n)}:q,it=function(t,e){var r=Z[t]=m(J[B]);return z(r,{type:V,tag:t,description:e}),c||(r.description=e),r},ct=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof J},st=function(t,e,r){t===H&&st(Q,e,r),v(t);var n=h(e,!0);return v(r),f(Z,n)?(r.enumerable?(f(t,$)&&t[$][n]&&(t[$][n]=!1),r=m(r,{enumerable:b(0,!1)})):(f(t,$)||q(t,$,b(1,{})),t[$][n]=!0),at(t,n,r)):q(t,n,r)},ut=function(t,e){v(t);var r=g(e),n=C(r).concat(vt(r));return L(n,(function(e){c&&!ft.call(r,e)||st(t,e,r[e])})),t},lt=function(t,e){return void 0===e?m(t):ut(m(t),e)},ft=function(t){var e=h(t,!0),r=Y.call(this,e);return!(this===H&&f(Z,e)&&!f(Q,e))&&(!(r||!f(this,e)||!f(Z,e)||f(this,$)&&this[$][e])||r)},dt=function(t,e){var r=g(t),n=h(e,!0);if(r!==H||!f(Z,n)||f(Q,n)){var o=U(r,n);return!o||!f(Z,n)||f(r,$)&&r[$][n]||(o.enumerable=!0),o}},pt=function(t){var e=X(g(t)),r=[];return L(e,(function(t){f(Z,t)||f(j,t)||r.push(t)})),r},vt=function(t){var e=t===H,r=X(e?Q:g(t)),n=[];return L(r,(function(t){!f(Z,t)||e&&!f(H,t)||n.push(Z[t])})),n};if(s||(J=function(){if(this instanceof J)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=P(t),r=function(t){this===H&&r.call(Q,t),f(this,$)&&f(this[$],e)&&(this[$][e]=!1),at(this,e,b(1,t))};return c&&ot&&at(H,e,{configurable:!0,set:r}),it(e,t)},M(J[B],"toString",(function(){return G(this).tag})),M(J,"withoutSetter",(function(t){return it(P(t),t)})),k.f=ft,E.f=st,O.f=dt,w.f=_.f=pt,S.f=vt,N.f=function(t){return it(D(t),t)},c&&(q(J[B],"description",{configurable:!0,get:function(){return G(this).description}}),i||M(H,"propertyIsEnumerable",ft,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:J}),L(C(rt),(function(t){R(t)})),n({target:V,stat:!0,forced:!s},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var r=J(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!c},{create:lt,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:pt,getOwnPropertySymbols:vt}),n({target:"Object",stat:!0,forced:l((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(y(t))}}),K){var yt=!s||l((function(){var t=J();return"[null]"!=K([t])||"{}"!=K({a:t})||"{}"!=K(Object(t))}));n({target:"JSON",stat:!0,forced:yt},{stringify:function(t,e,r){var n,o=[t],a=1;while(arguments.length>a)o.push(arguments[a++]);if(n=e,(p(e)||void 0!==t)&&!ct(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ct(e))return e}),o[1]=e,K.apply(null,o)}})}J[B][W]||I(J[B],W,J[B].valueOf),T(J,V),j[$]=!0},a9e3:function(t,e,r){"use strict";var n=r("83ab"),o=r("da84"),a=r("94ca"),i=r("6eeb"),c=r("5135"),s=r("c6b6"),u=r("7156"),l=r("c04e"),f=r("d039"),d=r("7c73"),p=r("241c").f,v=r("06cf").f,y=r("9bf2").f,g=r("58a8").trim,h="Number",b=o[h],m=b.prototype,C=s(d(m))==h,w=function(t){var e,r,n,o,a,i,c,s,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=g(u),e=u.charCodeAt(0),43===e||45===e){if(r=u.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+u}for(a=u.slice(2),i=a.length,c=0;c<i;c++)if(s=a.charCodeAt(c),s<48||s>o)return NaN;return parseInt(a,n)}return+u};if(a(h,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var _,S=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof S&&(C?f((function(){m.valueOf.call(r)})):s(r)!=h)?u(new b(w(e)),r,S):w(e)},O=n?p(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;O.length>E;E++)c(b,_=O[E])&&!c(S,_)&&y(S,_,v(b,_));S.prototype=m,m.constructor=S,i(o,h,S)}},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b0c0:function(t,e,r){var n=r("83ab"),o=r("9bf2").f,a=Function.prototype,i=a.toString,c=/^\s*function ([^ (]*)/,s="name";n&&!(s in a)&&o(a,s,{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(t){return""}}})},bc52:function(t,e,r){},c230:function(t,e,r){"use strict";var n=r("3748"),o=r.n(n);o.a},d28b:function(t,e,r){var n=r("746f");n("iterator")},d8ce:function(t,e,r){"use strict";var n=r("7251"),o=r.n(n);o.a},ddb0:function(t,e,r){var n=r("da84"),o=r("fdbc"),a=r("e260"),i=r("9112"),c=r("b622"),s=c("iterator"),u=c("toStringTag"),l=a.values;for(var f in o){var d=n[f],p=d&&d.prototype;if(p){if(p[s]!==l)try{i(p,s,l)}catch(y){p[s]=l}if(p[u]||i(p,u,f),o[f])for(var v in a)if(p[v]!==a[v])try{i(p,v,a[v])}catch(y){p[v]=a[v]}}}},e01a:function(t,e,r){"use strict";var n=r("23e7"),o=r("83ab"),a=r("da84"),i=r("5135"),c=r("861d"),s=r("9bf2").f,u=r("e893"),l=a.Symbol;if(o&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new l(t):void 0===t?l():l(t);return""===t&&(f[e]=!0),e};u(d,l);var p=d.prototype=l.prototype;p.constructor=d;var v=p.toString,y="Symbol(test)"==String(l("test")),g=/^Symbol\((.*)\)[^)]+$/;s(p,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=v.call(t);if(i(f,t))return"";var r=y?e.slice(7,-1):e.replace(g,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,r){var n=r("b622");e.f=n},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=agv.113830ca.js.map