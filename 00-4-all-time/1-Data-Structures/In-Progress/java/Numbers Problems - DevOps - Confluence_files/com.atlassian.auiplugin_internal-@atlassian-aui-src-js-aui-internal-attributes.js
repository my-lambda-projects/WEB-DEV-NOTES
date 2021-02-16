WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-internal-attributes', location = 'node_modules/@atlassian/aui/src/js/aui/internal/attributes.js' */
("undefined"===typeof window?global:window).__82e760f4580e37eda172e78ba0378f6d=function(){function d(a){return null!==a}function e(a,b,c){c?a.setAttribute(b,""):a.removeAttribute(b)}function f(a,b){var c=function(a){return a.toLowerCase()===b.toLowerCase()},d=null===b,e=!d&&!a.values.filter(c).length;return d?a.hasOwnProperty("missingDefault")?a.missingDefault:null:e?a.hasOwnProperty("invalidDefault")?a.invalidDefault:a.hasOwnProperty("missingDefault")?a.missingDefault:null:a.values.length?a.values.filter(c)[0]:
null}function g(a,b,c){a.setAttribute(b.attribute,c)}var b={};"use strict";Object.defineProperty(b,"__esModule",{value:!0});b.computeBooleanValue=d;b.setBooleanAttribute=e;b.computeEnumValue=f;b.setEnumAttribute=g;b.default={computeBooleanValue:d,setBooleanAttribute:e,computeEnumValue:f,setEnumAttribute:g};return b}.call(this);
}catch(e){WRMCB(e)};