WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:editor', location = '/js/editor.js' */
require(["internal/browser-metrics","jquery"],function(a,c){c(function(){var d=AJS.Meta.get("content-type"),e=AJS.Meta.getBoolean("new-page")?"create":"edit",f=c("body");if((f.hasClass("edit")||f.hasClass("create"))&&d&&e){var b="confluence."+d+"."+e+".collaborative.view";a.start({key:b,isInitial:!0});AJS.bind("rte-collab-ready",function(){a.end({key:b});a.start({key:b+".connected"})});AJS.bind("synchrony.connected",function(){a.end({key:b+".connected"})})}})});
}catch(e){WRMCB(e)};