WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:util', location = '/com/atlassian/confluence/extra/calendar3/util/util.js' */
define("tc/util",["jquery"],function(b){var a={};a.showDialogInUpdatedHeight=function(c){if(!c.getCurrentPanel().body.is(":visible")){c.show()}c.updateHeight();c.popup.element.css("height","");c.popup.element.find("div.dialog-panel-body").css("height","");c.popup.element.find("form, div.buttons-container").css("margin-bottom","0");c.popup.changeSize(undefined,c.popup.element.outerHeight());c.hide();c.show()};a.getRestBaseUrl=function(){return Confluence.getContextPath()+"/rest/calendar-services/1.0"};return a});
}catch(e){WRMCB(e)};