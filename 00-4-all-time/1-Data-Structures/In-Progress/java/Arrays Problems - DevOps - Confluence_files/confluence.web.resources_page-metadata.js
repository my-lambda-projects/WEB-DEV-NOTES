WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.web.resources:page-metadata', location = 'includes/js/page-metadata.js' */
define("confluence/page-metadata",["jquery","confluence/api/event"],function(e,f){return function(a){var b=a("#version-comment");if(b.length){var c=a("#show-version-comment"),d=a("#hide-version-comment");c.click(function(a){c.hide();d.show();b.show();return f.stopEvent(a)});d.click(function(a){d.hide();c.show();b.hide();return f.stopEvent(a)});c.length&&d.length&&b.hide()}}});require("confluence/module-exporter").safeRequire("confluence/page-metadata",function(e){require("ajs").toInit(e)});
}catch(e){WRMCB(e)};