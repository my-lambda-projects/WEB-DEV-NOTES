WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.web.resources:legacy-message-queue-analytics', location = 'includes/js/legacy-message-queue-analytics.js' */
define("confluence/legacy-message-queue-analytics",["confluence/legacy-message-queue"],function(d){var b=function(b,a){a.hasOwnProperty("attributes")||(a.attributes={});a.hasOwnProperty("tags")||(a.tags=[]);d.push({type:b,payload:a})};return{send:function(c,a){switch(c){case "screen":b("ATLASSIAN_CONFLUENCE_ANALYTICS_NEXT_SCREEN",a);break;case "ui":b("ATLASSIAN_CONFLUENCE_ANALYTICS_NEXT_UI",a);break;case "operational":b("ATLASSIAN_CONFLUENCE_ANALYTICS_NEXT_OPERATIONAL",a);break;case "track":b("ATLASSIAN_CONFLUENCE_ANALYTICS_NEXT_TRACK",
a);break;default:throw Error("Unsupported event type: "+c);}}}});
}catch(e){WRMCB(e)};