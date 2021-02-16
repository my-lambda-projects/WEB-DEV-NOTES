WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:calendar-init-common', location = 'com/atlassian/confluence/extra/calendar3/components/initialiser/init-resources.js' */
define("tc/init-resources",["wrm","jquery"],function(a,c){var b=function(d){return d.removeClass("spinner").removeClass("aui-icon").removeClass("aui-icon-wait")};return{requireResources:function(){a.require(["wrc!com.atlassian.confluence.extra.team-calendars.resources-batch"],function(){b(c("div.plugin-calendar"));require(["tc/calendar-plugin"],function(d){d.onTeamCalendarsLoaded()})}).fail(function(){b(c("div.plugin-calendar")).text("Failed to load calendar resources")})}}});
}catch(e){WRMCB(e)};