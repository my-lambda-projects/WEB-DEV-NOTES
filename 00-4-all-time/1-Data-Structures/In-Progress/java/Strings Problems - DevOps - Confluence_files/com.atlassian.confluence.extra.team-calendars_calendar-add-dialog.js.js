WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:calendar-add-dialog', location = 'com/atlassian/confluence/extra/calendar3/components/calendar-add-dialog/calendar-add-dialog.js' */
define("tc/calendar-add-dialog",["jquery","tc-backbone","tc/templates","tc/dialogs","tc/util","tc/calendar-util"],function(f,h,e,d,g,c){var b;var a=h.View.extend({events:{"click .option-new":"addNewCalendar","click .option-existing":"addExistingCalendar","click .option-subscription":"subscribeByUrl","click .option-import":"importCalendar"},defaults:{title:"Add Calendar"},initialize:function(i){i=i||{};this.callbackHandler=i.callbackHandler;this.dialogOptions=f.extend({},this.defaults,i.dialogOptions)},hide:function(){b.hide()},render:function(){if(!b){b=this.dialog=new AJS.Dialog(600,320,"add-calendar-dialog");b.addHeader(this.dialogOptions.title);b.addPanel(this.dialogOptions.title,e.addDialog(),"add-calendar-panel");if(this.dialogOptions.addClass){f("#add-calendar-dialog").addClass(this.dialogOptions.addClass)}b.addCancel("Cancel",function(){b.hide();return false});this.setElement(b.getCurPanel().body)}b.show()},addNewCalendar:function(){var i=d.getSubCalendarCreateDialog("parent",this.callbackHandler);g.showDialogInUpdatedHeight(i);f("input[name='name']",i.getCurrentPanel().body).focus();c.fireEventForAnalytics("add.calendar.click.new."+c.getCalendarContext());this.hide()},addExistingCalendar:function(){var i=f("meta[name='ajs-page-id']").length>=1;var j=d.getSubCalendarSubscribeDialog(f.extend({callbackHandler:this.callbackHandler,heading:i?"Add Existing Team Calendar":"Popular Team Calendars",showSearch:i,searchParams:{showSubCalendarsInView:AJS.Meta.get("space-key")!==undefined||i},disableWatching:i,id:"internal-subscription-calendar-dialog"}));g.showDialogInUpdatedHeight(j);c.fireEventForAnalytics("add.calendar.click.existing."+c.getCalendarContext());this.hide()},subscribeByUrl:function(){var i=d.getSubCalendarCreateDialog("subscription",this.callbackHandler);g.showDialogInUpdatedHeight(i);f("input[name='name']",i.getCurrentPanel().body).focus();c.fireEventForAnalytics("add.calendar.click.subscribe."+c.getCalendarContext());this.hide()},importCalendar:function(){var i=d.getSubCalendarImportDialog(this.callbackHandler);g.showDialogInUpdatedHeight(i);f("input[name='name']",i.getCurrentPanel()).focus();c.fireEventForAnalytics("add.calendar.click.import."+c.getCalendarContext());this.hide()}});return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:calendar-add-dialog', location = 'com/atlassian/confluence/extra/calendar3/components/calendar-add-dialog/calendar-add-dialog-compat.js' */
require(["tc/calendar-add-dialog"],function(a){if(!Confluence.TeamCalendars.Dialogs){Confluence.TeamCalendars.Dialogs={}}Confluence.TeamCalendars.Dialogs.getAddDialog=function(b,c){return new a({callbackHandler:b,dialogOptions:c}).render()}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:calendar-add-dialog', location = 'com/atlassian/confluence/extra/calendar3/components/calendar-add-dialog/calendar-add-dialog.soy' */
// This file was automatically generated from calendar-add-dialog.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.TeamCalendars.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.TeamCalendars == 'undefined') { Confluence.TeamCalendars = {}; }
if (typeof Confluence.TeamCalendars.Templates == 'undefined') { Confluence.TeamCalendars.Templates = {}; }


Confluence.TeamCalendars.Templates.addDialog = function(opt_data, opt_ignored) {
  return '<div class="add-calendar subcalendar-wizard"><div><ul class="add-calendar-options"><li class="option-new"><div class="title">' + soy.$$escapeHtml('Add New Calendar') + '</div></li><li class="option-import"><div class="title">' + soy.$$escapeHtml('Import Calendar') + '</div></li></ul><ul class="add-calendar-options"><li class="option-existing"><div class="title">' + soy.$$escapeHtml('Add Existing Calendar') + '</div></li><li class="option-subscription"><div class="title">' + soy.$$escapeHtml('Subscribe by URL') + '</div></li></ul></div></div>';
};
if (goog.DEBUG) {
  Confluence.TeamCalendars.Templates.addDialog.soyTemplateName = 'Confluence.TeamCalendars.Templates.addDialog';
}

}catch(e){WRMCB(e)};