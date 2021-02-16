WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:event-delete-dialog', location = 'com/atlassian/confluence/extra/calendar3/components/event-delete-dialog/event-delete-dialog.js' */
define("tc/event-delete-dialog",["jquery"],function(a){return function(f,c,e){var i;var h=function(k,j){if(!e.isProcessingEvent(f)){e.setProcessingEvent(f,true,j);e.deleteEvent(f,k,function(l,n,m){e.showAjaxError(f,l,n,m,e.ERROR_CLASS_EVENT_DELETE);j.hide();e.setProcessingEvent(f,false,j)},function(l){if(l.success){var o=e.getSubCalendar(f,c.subCalendarId);var m=c.eventType;var n;if(m==="custom"&&o&&o.customEventTypes&&o.customEventTypes.length){a.each(o.customEventTypes,function(p,q){if(q.customEventTypeId===c.customEventTypeId){n={customEventTypeName:q.title}}})}Confluence.TeamCalendars.fireEventForAnalytics("event.delete.default."+m+".context."+e.getParameter(f,"calendarContext"),n);e.setGenericErrors(f,null,e.ERROR_CLASS_EVENT_DELETE);if(k.singleInstance){e.getCalendarPanel(f).fullCalendar("removeEvents",[c.id])}else{e.reloadSubCalendar(f,o.id||o.parentId)}}else{e.setGenericErrors(f,"Uh oh. Looks like something unexpectedly went wrong. Please check the Confluence log file.",e.ERROR_CLASS_EVENT_DELETE)}j.hide();e.setProcessingEvent(f,false,j)});return false}};if(c.recur){i=new AJS.Dialog({width:550,height:270,id:"tc-confirm-event-delete"});i.addHeader("Delete Recurring Event");i.addPanel("",Confluence.TeamCalendars.Templates.confirmRecurringEventDelete({elementIdSuffix:e.getParameter(f,"elementIdSuffix")}),"tc-delete-event-confirmation-panel");var d=i.getCurrentPanel().body;var g=a("<span class='spinner hidden aui-icon aui-icon-wait'></span>");var b=function(k){var j=k.getPage(0).buttonpanel;g.prependTo(j)};i.enableOkButton=function(){a(":button",d).each(function(j,k){a(k).removeAttr("disabled").removeClass("ui-state-disabled")});g.addClass("hidden")};i.disableOkButton=function(){a(":button",d).each(function(j,k){a(k).attr("disabled","disabled").addClass("ui-state-disabled")});g.removeClass("hidden")};a(".tc-delete-this-instance-only",d).click(function(){h({subCalendarId:c.subCalendarId,uid:c.id,recurrenceId:c.recurId||"",originalStart:c.originalStart||"",singleInstance:true},i);return false});a(".tc-delete-future-instances-only",d).click(function(){h({subCalendarId:c.subCalendarId,uid:c.id,recurUntil:a.fullCalendar.formatDate(c.start,"yyyyMMdd")},i);return false});a(".tc-delete-all-instances",d).click(function(){h({subCalendarId:c.subCalendarId,uid:c.id},i);return false});i.addLink("Cancel",function(){i.hide();return false});b(i)}else{i=new AJS.Dialog(280,170);i.addHeader("Delete Event");i.addPanel("",Confluence.TeamCalendars.Templates.confirmEventDelete(),"tc-delete-event-confirmation-panel");i.addButton("Yes",function(){h({subCalendarId:c.subCalendarId,uid:c.id},i)});i.addLink("Cancel",function(){i.hide();return false})}return i}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:event-delete-dialog', location = '/com/atlassian/confluence/extra/calendar3/components/event-delete-dialog/event-delete-dialog.soy' */
// This file was automatically generated from event-delete-dialog.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.TeamCalendars.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.TeamCalendars == 'undefined') { Confluence.TeamCalendars = {}; }
if (typeof Confluence.TeamCalendars.Templates == 'undefined') { Confluence.TeamCalendars.Templates = {}; }


Confluence.TeamCalendars.Templates.confirmEventDelete = function(opt_data, opt_ignored) {
  return '<p>' + soy.$$escapeHtml('Are you sure? This cannot be undone') + '</p>';
};
if (goog.DEBUG) {
  Confluence.TeamCalendars.Templates.confirmEventDelete.soyTemplateName = 'Confluence.TeamCalendars.Templates.confirmEventDelete';
}


Confluence.TeamCalendars.Templates.confirmRecurringEventDelete = function(opt_data, opt_ignored) {
  return '<ul class="tc-delete-recurring-event-options"><li><input type="button" value="' + soy.$$escapeHtml('This instance only') + '" class="tc-delete-this-instance-only tc-delete-button aui-button"><span class="tc-delete-description">' + soy.$$escapeHtml('All other events in this series will remain unchanged.') + '</span></li><li><input type="button" value="' + soy.$$escapeHtml('All future instances') + '" class="tc-delete-future-instances-only tc-delete-button aui-button"><span class="tc-delete-description">' + soy.$$escapeHtml('This and all future instances will be removed.') + '</span></li><li class="tc-last-delete-option"><input type="button" value="' + soy.$$escapeHtml('All in the series') + '" class="tc-delete-all-instances tc-delete-button aui-button"><span class="tc-delete-description">' + soy.$$escapeHtml('The entire series will be removed.') + '</span></li></ul>';
};
if (goog.DEBUG) {
  Confluence.TeamCalendars.Templates.confirmRecurringEventDelete.soyTemplateName = 'Confluence.TeamCalendars.Templates.confirmRecurringEventDelete';
}


Confluence.TeamCalendars.Templates.confirmCustomEventNameDelete = function(opt_data, opt_ignored) {
  return '<p>' + soy.$$escapeHtml('This will delete all') + ' <strong>' + soy.$$escapeHtml(opt_data.customEventName) + '</strong> ' + soy.$$escapeHtml('events and remove this type of event from the calendar. This cannot be undone. Are you sure?') + '</p>';
};
if (goog.DEBUG) {
  Confluence.TeamCalendars.Templates.confirmCustomEventNameDelete.soyTemplateName = 'Confluence.TeamCalendars.Templates.confirmCustomEventNameDelete';
}

}catch(e){WRMCB(e)};