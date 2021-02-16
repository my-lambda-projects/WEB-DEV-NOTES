WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-select2', location = 'node_modules/@atlassian/aui/src/js/aui/select2.js' */
("undefined"===typeof window?global:window).__0d8267f32c62ec811936d03ae0ef7267=function(){"use strict";var b=__02fa0d2334b5d2f9701871403ba9d89a,d=b&&b.__esModule?b:{"default":b};__541108ffa7d92ccfa7bbf8536d20dbb0;var e=d.default.fn.select2;d.default.fn.auiSelect2=function(b){var c;if(d.default.isPlainObject(b)){var a=d.default.extend({},b);c=a.hasAvatar?" aui-has-avatar":"";a.containerCssClass="aui-select2-container"+c+(a.containerCssClass?" "+a.containerCssClass:"");a.dropdownCssClass="aui-select2-drop aui-dropdown2 aui-style-default"+
c+(a.dropdownCssClass?" "+a.dropdownCssClass:"");c=Array.prototype.slice.call(arguments,1);c.unshift(a)}else c=arguments.length?arguments:[{containerCssClass:"aui-select2-container",dropdownCssClass:"aui-select2-drop aui-dropdown2 aui-style-default"}];return e.apply(this,c)};return{}}.call(this);
}catch(e){WRMCB(e)};