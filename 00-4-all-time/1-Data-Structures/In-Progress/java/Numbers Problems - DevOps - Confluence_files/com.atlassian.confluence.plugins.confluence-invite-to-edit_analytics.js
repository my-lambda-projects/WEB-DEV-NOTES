WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-invite-to-edit:analytics', location = 'js/util/analytics.js' */
define("confluence/invite-to-edit/util/analytics",["ajs","jquery"],function(a,c){var b={};return{trigger:function(d,e){a.trigger("analytics",{name:d,data:c.extend({},b,e)})},setCommonEventData:function(d){b=d}}});
}catch(e){WRMCB(e)};