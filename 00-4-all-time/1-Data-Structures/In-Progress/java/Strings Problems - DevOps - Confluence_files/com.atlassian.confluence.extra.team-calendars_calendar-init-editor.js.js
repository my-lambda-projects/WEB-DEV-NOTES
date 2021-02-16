WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:calendar-init-editor', location = 'com/atlassian/confluence/extra/calendar3/components/initialiser/initialiser-editor.js' */
require(["tc/init-resources"],function(a){a.requireResources()});
}catch(e){WRMCB(e)};