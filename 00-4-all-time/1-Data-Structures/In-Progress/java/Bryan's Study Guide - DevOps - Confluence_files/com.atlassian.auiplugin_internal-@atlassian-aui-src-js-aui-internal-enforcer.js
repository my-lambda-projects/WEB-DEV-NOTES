WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-internal-enforcer', location = 'node_modules/@atlassian/aui/src/js/aui/internal/enforcer.js' */
("undefined"===typeof window?global:window).__da99b881b3bdaf63767de8d2780ca44c=function(){var c={};"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d;var a=__8139e9a1368a0224fc430963d21930c8;if(a&&a.__esModule)d=a;else{var b={};if(null!=a)for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(b[e]=a[e]);b.default=a;d=b}c.default=function(a){function c(b){return e(function(){return a.hasAttribute(b)},b+" wasn't defined")}function b(d){if(!c(d,a))return!1;var f=a.getAttribute(d);
return e(function(){return document.getElementById(f)},'an element with id set to "'+f+'" was not found')}function e(b,c){return!b()?(a?d.error(c,a):d.error(c),!1):!0}return{attributeExists:c,refersTo:b,satisfiesRules:e,ariaControls:function(){return b("aria-controls")},ariaOwns:function(){return b("aria-owns")}}};return c=c["default"]}.call(this);
}catch(e){WRMCB(e)};