WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:support', location = 'js/default-drop-handler-loader.js' */
require("confluence/module-exporter").safeRequire("confluence-drag-and-drop/default-drop-handler",function(a){require("ajs").toInit(a.bind)});
}catch(e){WRMCB(e)};