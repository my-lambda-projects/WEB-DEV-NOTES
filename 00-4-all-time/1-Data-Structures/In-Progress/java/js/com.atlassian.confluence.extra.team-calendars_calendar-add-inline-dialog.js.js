WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:calendar-add-inline-dialog', location = 'com/atlassian/confluence/extra/calendar3/components/calendar-add-inline-dialog/calendar-add-inline-dialog.js' */
define("tc/calendar-add-inline-dialog",["jquery","tc-backbone","tc/templates","tc/dialogs","tc/util"],function(d,f,b,a,e){var c=f.View.extend({initialize:function(g){g=g||{};this.callbackHandler=g.callbackHandler},hide:function(){this.dialog.hide()},render:function(){var g=this.callbackHandler;if(!this.dialog){this.dialog=AJS.InlineDialog(d("#inline-dialog-more"),"inline-dialog-more",function(i,h,j){i.html(b.addInlineDialog());i.find(".option-new").on("click",function(){var k=a.getSubCalendarCreateDialog("parent",g);e.showDialogInUpdatedHeight(k);d("input[name='name']",k.getCurrentPanel().body).focus();d("#inline-dialog-more").removeClass("active");d("#inline-dialog-inline-dialog-more").hide();Confluence.TeamCalendars.fireEventForAnalytics("add.calendar.click.new."+Confluence.TeamCalendars.getCalendarContext())});i.find(".option-import").on("click",function(){var k=a.getSubCalendarImportDialog(g);e.showDialogInUpdatedHeight(k);d("input[name='name']",k.getCurrentPanel()).focus();d("#inline-dialog-more").removeClass("active");d("#inline-dialog-inline-dialog-more").hide();Confluence.TeamCalendars.fireEventForAnalytics("add.calendar.click.import."+Confluence.TeamCalendars.getCalendarContext())});i.find(".option-existing").on("click",function(){var k=d("meta[name='ajs-page-id']").length>=1;var l=a.getSubCalendarSubscribeDialog(d.extend({callbackHandler:g,heading:k?"Add Existing Team Calendar":"Popular Team Calendars",showSearch:k,searchParams:{showSubCalendarsInView:AJS.Meta.get("space-key")!==undefined||k},disableWatching:k,id:"internal-subscription-calendar-dialog"}));e.showDialogInUpdatedHeight(l);d("#inline-dialog-more").removeClass("active");d("#inline-dialog-inline-dialog-more").hide();Confluence.TeamCalendars.fireEventForAnalytics("add.calendar.click.existing."+Confluence.TeamCalendars.getCalendarContext())});i.find(".option-subscription").on("click",function(){var k=a.getSubCalendarCreateDialog("subscription",g);e.showDialogInUpdatedHeight(k);d("input[name='name']",k.getCurrentPanel().body).focus();d("#inline-dialog-more").removeClass("active");d("#inline-dialog-inline-dialog-more").hide();Confluence.TeamCalendars.fireEventForAnalytics("add.calendar.click.subscribe."+Confluence.TeamCalendars.getCalendarContext())});j();return false})}}});return c});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:calendar-add-inline-dialog', location = 'com/atlassian/confluence/extra/calendar3/components/calendar-add-inline-dialog/calendar-add-inline-dialog.soy' */
// This file was automatically generated from calendar-add-inline-dialog.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.TeamCalendars.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.TeamCalendars == 'undefined') { Confluence.TeamCalendars = {}; }
if (typeof Confluence.TeamCalendars.Templates == 'undefined') { Confluence.TeamCalendars.Templates = {}; }


Confluence.TeamCalendars.Templates.addInlineDialog = function(opt_data, opt_ignored) {
  return '<div id="add-calendar-inline-dialog" class="add-calendar subcalendar-wizard"><ul class="add-calendar-options"><li class="option-new"><div class="title">' + soy.$$escapeHtml('Add new calendar') + '</div><div class="description">' + soy.$$escapeHtml('Create a brand new calendar') + '<div></li></ul><ul class="add-calendar-options"><li class="option-existing"><div class="title">' + soy.$$escapeHtml('Add existing calendar') + '</div><div class="description">' + soy.$$escapeHtml('Find and add a calendar from Confluence') + '<div></li></ul><ul class="add-calendar-options"><li class="option-import"><div class="title">' + soy.$$escapeHtml('Import calendar') + '</div><div class="description">' + soy.$$escapeHtml('Import an ICS file to create a calendar') + '<div></li></ul><ul class="add-calendar-options"><li class="option-subscription"><div class="title">' + soy.$$escapeHtml('Subscribe by URL') + '</div><div class="description">' + soy.$$escapeHtml('Subscribe to a calendar using its URL') + '<div></li></ul></div>';
};
if (goog.DEBUG) {
  Confluence.TeamCalendars.Templates.addInlineDialog.soyTemplateName = 'Confluence.TeamCalendars.Templates.addInlineDialog';
}

}catch(e){WRMCB(e)};