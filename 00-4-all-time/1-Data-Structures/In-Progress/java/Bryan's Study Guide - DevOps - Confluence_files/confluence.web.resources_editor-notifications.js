WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.web.resources:editor-notifications', location = 'includes/js/editor-notifications.js' */
define("confluence/editor-notifications",[],function(){var a;return{notify:function(b,d,c){var e=require("aui/flag");void 0!==a&&"true"!==a.getAttribute("aria-hidden")&&a.close();void 0===c&&(c="error"===b?"manual":"auto");a=e({type:b,body:d,close:c})}}});require("confluence/module-exporter").safeRequire("confluence/editor-notifications",function(a){var b=require("ajs");b.bind("init.rte",function(){b.Confluence.EditorNotification=a})});
}catch(e){WRMCB(e)};