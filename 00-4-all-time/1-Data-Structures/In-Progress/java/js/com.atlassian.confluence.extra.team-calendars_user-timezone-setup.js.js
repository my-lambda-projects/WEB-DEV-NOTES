WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:user-timezone-setup', location = 'com/atlassian/confluence/extra/calendar3/components/user-timezone-setup/user-timezone-setup.soy' */
// This file was automatically generated from user-timezone-setup.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.TeamCalendars.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.TeamCalendars == 'undefined') { Confluence.TeamCalendars = {}; }
if (typeof Confluence.TeamCalendars.Templates == 'undefined') { Confluence.TeamCalendars.Templates = {}; }


Confluence.TeamCalendars.Templates.userTimezoneSetup = function(opt_data, opt_ignored) {
  return '<div class="user-time-zone-desc"></div><div class="user-time-zone-select hidden"><select name="userTimeZoneSetupSelect" id="userTimeZoneSetupSelect" disabled="disabled"></select>&nbsp;<span class="spinner aui-icon aui-icon-wait"></span></div>';
};
if (goog.DEBUG) {
  Confluence.TeamCalendars.Templates.userTimezoneSetup.soyTemplateName = 'Confluence.TeamCalendars.Templates.userTimezoneSetup';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:user-timezone-setup', location = 'com/atlassian/confluence/extra/calendar3/components/user-timezone-setup/user-timezone-setup.js' */
define("tc/user-timezone-setup",["jquery","tc/util","tc-backbone","tc/templates"],function(b,d,e,a){var c=e.View.extend({dialog:null,options:null,$userTimeZoneSelectContainer:null,userTimeZone:"",baseUrlRest:"",baseUrlCalendarService:"",ajaxTimeout:120000,template:a.userTimezoneSetup(),defaults:{callbackHandler:null,textTitleDialog:"Setup Team Calendars",textDescTimeZoneSetup:"Your time zone is currently set to {0}. If that is not your time zone, please select the right one.",textDescMigratedTimeZoneSetup:"Your time zone is currently set to {0}. If that is not your time zone, please visit the \u003ca href={1}\u003eAccount Preferences\u003c/a\u003e page to select the right one.",textBtnOk:"OK"},initialize:function(f){this.options=b.extend({},this.defaults,f);if(!this.options.callbackHandler){AJS.debug("tc/user-timezone-setup: requires 'callbackHandler' object")}var g=Confluence.TeamCalendars;this.userTimeZone=g.getUserTimeZone();this.baseUrlRest=g.getRestBaseUrl();this.baseUrlCalendarService=g.getCalendarServiceBaseUrl("/preferences/timezone.json");this.ajaxTimeout=g.ajaxTimeout;this.options.textDescTimeZoneSetup=AJS.format(this.options.textDescTimeZoneSetup,this.userTimeZone);this.options.textDescMigratedTimeZoneSetup=AJS.format(this.options.textDescMigratedTimeZoneSetup,this.userTimeZone,AJS.contextPath()+"/people/"+AJS.Meta.get("atlassian-account-id"))},render:function(){this._createDialog();this._populateTimeZoneDropDown();return this.dialog},_createDialog:function(){var f=this;this.dialog=new AJS.Dialog({width:512,height:220,id:"team-calendars-timezone-setup-dialog"});this.dialog.addHeader(this.options.textTitleDialog);this.dialog.addPanel("",this.template,"setup-calendar-panel");this.dialog.addButton(this.options.textBtnOk,function(){f.dialog.hide();f.dialog.remove();b("#team-calendars-show-timezone-setup").remove();f.options.callbackHandler.showCalendarWizard()},"set-timezone-button");this.el=this.dialog.getCurrentPanel().body;this.$el=b(this.el);this.$userTimeZoneSelectContainer=this.$el.find(".user-time-zone-select");if(AJS.DarkFeatures.isEnabled("timezone.from.prs")){this.$el.find(".user-time-zone-desc").html(this.options.textDescMigratedTimeZoneSetup)}else{this.$el.find(".user-time-zone-desc").text(this.options.textDescTimeZoneSetup);this.$userTimeZoneSelectContainer.removeClass("hidden");this.$userTimeZoneSelectContainer.find("select").change(_.bind(this._changeSelectionTimeZone,this))}this.options.callbackHandler.suppressMessage("MESSAGE_KEY_TIMEZONE_SETUP");return this.dialog},_populateTimeZoneDropDown:function(){var g=this,f=this.$el.find("#userTimeZoneSetupSelect"),h=this.dialog.popup.element.find(".set-timezone-button");if(AJS.DarkFeatures.isEnabled("timezone.from.prs")){h.enable()}else{h.disable();g.$userTimeZoneSelectContainer.addClass("loading");b.ajax({type:"GET",url:this.baseUrlRest+"/timezones/user",success:function(i){f.html(a.timeZoneDropDown(i)).val(g.userTimeZone).removeAttr("disabled");g.$userTimeZoneSelectContainer.removeClass("loading");h.enable()},error:function(i,k,j){g.options.callbackHandler.showAjaxError(i,k,j);g.$userTimeZoneSelectContainer.removeClass("loading")},timeout:this.ajaxTimeout})}},_changeSelectionTimeZone:function(){var h=this;this.$userTimeZoneSelectContainer.addClass("loading");var g=this.dialog.popup.element.find(".set-timezone-button").attr("disabled","disabled");var f=this.$userTimeZoneSelectContainer.find("option:selected");b.ajax({url:this.baseUrlCalendarService,cache:false,data:{timeZoneId:f.val()},error:function(i,k,j){h.options.callbackHandler.showAjaxError(i,k,j,"error-config-update");g.removeAttr("disabled");h.$userTimeZoneSelectContainer.removeClass("loading")},success:function(){h.options.callbackHandler.setGenericErrors(null,"error-config-update");h.options.callbackHandler.setParameter("userTimeZoneId",f.val());h.$el.find(".user-time-zone-desc").text(h.options.textDescTimeZoneSetup);g.removeAttr("disabled");h.$userTimeZoneSelectContainer.removeClass("loading")},type:"PUT",timeout:this.ajaxTimeout})}});return c});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:user-timezone-setup', location = 'com/atlassian/confluence/extra/calendar3/components/user-timezone-setup/user-timezone-setup-combat.js' */
require(["tc/user-timezone-setup"],function(a){if(!Confluence.TeamCalendars.Dialogs){Confluence.TeamCalendars.Dialogs={}}Confluence.TeamCalendars.Dialogs.getTimeZoneSetupDialog=function(b){return new a({callbackHandler:b}).render()}});
}catch(e){WRMCB(e)};