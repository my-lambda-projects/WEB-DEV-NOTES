WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.web.resources:page-location', location = 'includes/js/page-location.js' */
define("confluence/page-location",["ajs","confluence/meta"],function(d,b){var c=null;return{get:function(){return c?c:{spaceName:b.get("space-name"),spaceKey:b.get("space-key"),parentPageTitle:b.get("parent-page-title")}},set:function(a){a&&(b.set("space-name",a.spaceName),b.set("space-key",a.spaceKey),a.hasOwnProperty("parentPageTitle")&&b.set("parent-page-title",a.parentPageTitle),a.hasOwnProperty("parentPageId")&&b.set("parent-page-id",a.parentPageId));c=a}}});
}catch(e){WRMCB(e)};