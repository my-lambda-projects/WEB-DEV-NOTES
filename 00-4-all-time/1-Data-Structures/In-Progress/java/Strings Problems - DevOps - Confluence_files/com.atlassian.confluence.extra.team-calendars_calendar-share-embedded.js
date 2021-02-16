WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:calendar-share-embedded', location = 'com/atlassian/confluence/extra/calendar3/components/calendar-share-dialog/calendar-share-dialog.js' */
define("tc/calendar-share-dialog",["jquery","underscore","tc-backbone","tc/templates","tc/calendar-util"],function(e,a,f,c,b){var d=f.View.extend({calendarDiv:null,subCalendar:null,calendarPlugin:null,editDialog:null,initialize:function(g){this.calendarDiv=g.calendarDiv;this.subCalendar=g.subCalendar;this.calendarPlugin=g.calendarPlugin;this.editDialog=g.editDialog;this.$el.html(c.shareSubCalendar({elementIdSuffix:b.getParameter(this.calendarDiv,"elementIdSuffix")}));this.editDialog.addPanel("Embed",this.$el,"calendar-share-dialog-panel")},render:function(){var j=this;var k=this.calendarPlugin.doesSubCalendarHaveRestrictions(j.subCalendar),h,g;h=j.editDialog.getCurrentPanel().body;g=e(".share-restrictions-link",h);var i="";if(j.subCalendar.spaceKey){i=AJS.format("{0}/display/{1}/calendar/{2}?calendarName={3}",b.getParameter(j.calendarDiv,"baseUrl"),encodeURIComponent(j.subCalendar.spaceKey),encodeURIComponent(j.subCalendar.subscriptionId||j.subCalendar.id),encodeURIComponent(j.subCalendar.name))}else{i=AJS.format("{0}/calendar/previewcalendar.action?subCalendarId={1}",b.getParameter(j.calendarDiv,"baseUrl"),encodeURIComponent(j.subCalendar.subscriptionId||j.subCalendar.id))}e(".share-address-field",this.editDialog.getCurrentPanel().body).val(i);if(k){if(j.calendarPlugin.isSubCalendarAdministratable(j.calendarDiv,j.subCalendar)){g.click(function(){j.editDialog.hide();j.calendarPlugin.getSubCalendarRestrictionsDialog(j.calendarDiv,j.subCalendar).show()})}else{g.addClass("hidden")}}else{e(".description",h).addClass("hidden");var l=e(".autoconvert",h);if(j.calendarPlugin.isAutoConvertSupported(j.calendarDiv)){l.removeClass("hidden")}else{l.addClass("hidden")}}this.editDialog.getCurrentPanel().onselect=function(){e("#edit-calendar-dialog").find(".button-panel-button.submit").addClass("hidden");e(".share-address-field",j.editDialog.getCurrentPanel().body).focus().select()};return j.editDialog}});return d});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:calendar-share-embedded', location = 'com/atlassian/confluence/extra/calendar3/components/calendar-share-dialog/subcalendar-share-dialog.soy' */
// This file was automatically generated from subcalendar-share-dialog.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.TeamCalendars.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.TeamCalendars == 'undefined') { Confluence.TeamCalendars = {}; }
if (typeof Confluence.TeamCalendars.Templates == 'undefined') { Confluence.TeamCalendars.Templates = {}; }


Confluence.TeamCalendars.Templates.shareSubCalendar = function(opt_data, opt_ignored) {
  return '<div><label for="share-address-' + soy.$$escapeHtml(opt_data.elementIdSuffix) + '" class="share-address-label">' + soy.$$escapeHtml('Calendar link:') + '</label><input type="text" name="share-address" id="share-address-' + soy.$$escapeHtml(opt_data.elementIdSuffix) + '" class="share-address-field"><div class="description autoconvert hidden">' + soy.$$escapeHtml('Grab this link and paste it on a Confluence page to embed the calendar in your content.') + '</div><div class="description icon-lock">' + soy.$$filterNoAutoescape('Restrictions apply to this calendar. \x3ca class\x3d\x22share-restrictions-link\x22 href\x3d\x22#\x22\x3eCheck restrictions.\x3c/a\x3e') + '</div></div>';
};
if (goog.DEBUG) {
  Confluence.TeamCalendars.Templates.shareSubCalendar.soyTemplateName = 'Confluence.TeamCalendars.Templates.shareSubCalendar';
}

}catch(e){WRMCB(e)};