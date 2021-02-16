WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:internal-subscription-subcalendar', location = 'com/atlassian/confluence/extra/calendar3/components/internal-subscription-subcalendar/internal-subscription-subcalendar.js' */
define("tc/internal-subscription-subcalendar",["jquery","tc/templates","tc/calendar-util"],function(d,b,a){var c=Backbone.View.extend({getDialog:function(i,f,e){var h;var g;var j=function(m,l){m.resetFieldErrors();if(m.isNewCalendar()){m.setFormModeCreate();m.setHeading("New calendar",i);m.setSubCalendarIdField("");m.setSubscriptionIdField("");m.setNameField("");m.setDescriptionField("");m.setColorField(e.getNextCalendarColor());m.setSpaceToDefault();m.setTimeZoneIdDisplayField("")}else{m.setFormModeEdit();m.setHeading(f.name,i);m.setSubCalendarIdField(f.id);m.setSubscriptionIdField(f.subscriptionId||"");m.setNameField(f.name);m.setDescriptionField(f.description);m.setColorField(f.color);m.setSpaceKeyField(f.spaceKey);m.setSpaceKeyAutocompleteField(f.spaceName);m.setTimeZoneIdDisplayField(f.timeZoneId);if(!(f.restrictable&&f.administrable)){d(".field-group-permissions",l).remove()}}var n=d("textarea[name='description'], input[name='spaceKeyAutocomplete']",l);if(e.isCalendarInEditMode()){n.removeAttr("readonly")}else{m.setFormModeReadOnly();n.attr("readonly","readonly")}if(m.isNewCalendar()&&AJS.Meta.get("space-key")){var k=d(".field-group-space-permission",l);k.addClass("hidden")}};return{initializeForm:function(k){i.addHeader("New calendar");i.addPanel("General",b.editInternalSubcalendar(),"calendar-dialog-panel");g=d("form.sub-calendar-edit-form",i.getCurrentPanel().body);h=Confluence.TeamCalendars.getEditCalendarDialogHelper(g,f,e);h.initSpaceDropDown();h.initOkButton("OK",i);h.initCloseButton(i,k);j(h,g);return g},getFormDataAsAjaxData:function(){var k={type:"internal-subscription",subCalendarId:d("input[name='subCalendarId']",g).val(),name:d("input[name='name']",g).val(),description:d("textarea[name='description']",g).val(),color:d("input[name='color']",g).val(),spaceKey:d("input[name='spaceKeyAutocomplete']",g).val()?d("input[name='spaceKey']",g).val():"",location:"subscription://"+d("input[name='subscriptionId']",g).val()};a.putCalendarContextParams(k);return k},onSubmitStart:function(){h.disableOkButton("Adding...")},onSubmitEnd:function(){h.enableOkButton("OK")}}},weight:1000,typeName:"Unknown Type"});return c});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:internal-subscription-subcalendar', location = 'com/atlassian/confluence/extra/calendar3/components/internal-subscription-subcalendar/internal-subscription-subcalendar.soy' */
// This file was automatically generated from internal-subscription-subcalendar.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.TeamCalendars.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.TeamCalendars == 'undefined') { Confluence.TeamCalendars = {}; }
if (typeof Confluence.TeamCalendars.Templates == 'undefined') { Confluence.TeamCalendars.Templates = {}; }


Confluence.TeamCalendars.Templates.editInternalSubcalendar = function(opt_data, opt_ignored) {
  return '<form name="editSubCalendarForm" class="sub-calendar-edit-form aui" method="POST" action="#"><input type="hidden" name="subCalendarId" value=""><input type="hidden" name="type" value="internal-subscription"><input type="hidden" name="color" value=""><input type="hidden" name="subscriptionId" value=""><input type="hidden" name="spaceKey" value=""><div class="form-mode create"><div class="subcalendar-type subcalendar-interal-subscription"><div class="field-group field-group-name"><label for="name">' + soy.$$escapeHtml('Name') + '<span class="aui-icon icon-required"></span></label><input name="name" id="name" type="text" class="text" value="" autocomplete="off"><div class="error name-error"></div></div><div class="field-group field-group-description"><label for="description">' + soy.$$escapeHtml('Description') + '</label><textarea name="description" id="description" rows="5" class="textarea"></textarea></div><div class="field-group field-group-space-permission"><label for="spaceKeyAutocomplete">' + soy.$$escapeHtml('Related space') + '<span class="aui-icon icon-required"></span></label><input name="spaceKeyAutocomplete" id="spaceKeyAutocomplete" type="text" class="autocomplete-space text" data-max="5" data-none-message="' + soy.$$escapeHtml('No spaces found') + '"><div class="description">' + soy.$$escapeHtml('Link this calendar to a space.') + '</div><div class="error spaceKeyAutocomplete-error"></div></div><div class="field-group field-group-timezone-display"><label>' + soy.$$escapeHtml('Time zone') + '</label><span class="timeZoneIdDisplay field-value"></span></div></div></div></form>';
};
if (goog.DEBUG) {
  Confluence.TeamCalendars.Templates.editInternalSubcalendar.soyTemplateName = 'Confluence.TeamCalendars.Templates.editInternalSubcalendar';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:internal-subscription-subcalendar', location = 'com/atlassian/confluence/extra/calendar3/components/internal-subscription-subcalendar/internal-subscription-subcalendar-compact.js' */
require(["tc/internal-subscription-subcalendar"],function(a){if(!window.Confluence.TeamCalendars.subcalendar){window.Confluence.TeamCalendars.subcalendar={}}if(!window.Confluence.TeamCalendars.subcalendar["internal-subscription"]){window.Confluence.TeamCalendars.subcalendar["internal-subscription"]=new a({})}});
}catch(e){WRMCB(e)};