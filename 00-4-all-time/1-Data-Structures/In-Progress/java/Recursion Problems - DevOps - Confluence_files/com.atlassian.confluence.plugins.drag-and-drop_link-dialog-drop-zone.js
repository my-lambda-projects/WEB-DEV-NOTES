WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:link-dialog-drop-zone', location = 'js/link-dialog-drop-zone.js' */
define("confluence-drag-and-drop/link-dialog-drop-zone",["ajs","confluence-drag-and-drop/drag-and-drop-utils"],function(a,c){return function(b){a.bind("dialog-shown.link-browser",function(a,d){b.browser.msie||c.bindDrop(b("#insert-link-dialog")[0],function(a){a.preventDefault();a.stopPropagation()})})}});require("confluence/module-exporter").safeRequire("confluence-drag-and-drop/link-dialog-drop-zone",function(a){require("ajs").toInit(a)});
}catch(e){WRMCB(e)};