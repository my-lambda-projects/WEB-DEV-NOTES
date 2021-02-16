WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-spa-inlinedialog-cleanup', location = 'v5/js/iframe/host/spa-inline-dialog-cleanup.js' */
require(["skate"],function(a){a("ap-inline-dialog",{type:function(){var b;(b=a&&a.types&&a.types.CLASS)||(b=a&&a.type&&a.type.CLASSNAME);return b}(),detached:function(a){a=document.querySelectorAll('iframe[id^\x3d"'+window._AP.util.escapeSelector(a.id)+'"]');[].forEach.call(a,function(a){AJS.$(a).parents(".aui-inline-dialog").remove()})}})});
}catch(e){WRMCB(e)};