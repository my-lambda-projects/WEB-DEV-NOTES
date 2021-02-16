WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-resources', location = '/js/vfm.js' */
require(["jquery","ajs","skate","vfm/components/embedded-file-view"],function(a,d,b,c){a(document).on("click",".confluence-embedded-file.unknown-attachment",function(a){a.preventDefault()});a=!__skate||!__skate.registry?!1:void 0!==__skate.registry["confluence-embedded-file-wrapper"];a||b("confluence-embedded-file-wrapper",{type:b.types.CLASS,attached:function(a){c.render({el:a})}})});
}catch(e){WRMCB(e)};