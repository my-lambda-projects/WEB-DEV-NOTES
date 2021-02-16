WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:page-picker', location = '/js/page-picker.js' */
define("confluence-ui-components/js/page-picker",["ajs","confluence-ui-components/js/space-page-picker"],function(a,b){return{build:function(c){c.placeholder="Select a page";c.contentType=["page"];c.showRecentlyViewedSpaces=false;c.spaceCatKeys=[];c.spaceKeys=[];return b.build(c)}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:page-picker', location = '/js/internal/page-picker-legacy.js' */
window.Confluence.UI.Components.PagePicker=require("confluence-ui-components/js/page-picker");AJS.deprecate.prop(window.Confluence.UI.Components.PagePicker,"build",{sinceVersion:"1.4.34",extraInfo:"Use require('confluence-ui-components/js/page-picker')"});
}catch(e){WRMCB(e)};