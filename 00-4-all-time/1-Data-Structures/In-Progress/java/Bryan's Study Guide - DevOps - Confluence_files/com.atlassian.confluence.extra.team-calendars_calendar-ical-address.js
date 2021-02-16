WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:calendar-ical-address', location = 'com/atlassian/confluence/extra/calendar3/components/calendar-reset-url-dialog/calendar-reset-url-dialog.js' */
define("tc/calendar-reset-url-dialog",["jquery","underscore","tc-backbone","tc/templates","tc/calendar-util","tc/util"],function(e,b,g,d,c,f){var a=g.View.extend({resetUrlSubCalendarDialog:null,calendarDiv:null,subCalendar:null,calendarPlugin:null,initialize:function(h){this.calendarDiv=h.calendarDiv;this.subCalendar=h.subCalendar;this.calendarPlugin=h.calendarPlugin;this.resetUrlSubCalendarDialog=e("#calendar-reset-private-urls-dialog")},render:function(){var k=this;if(this.resetUrlSubCalendarDialog){this.resetUrlSubCalendarDialog.remove()}var h=new AJS.Dialog({width:512,height:235,id:"calendar-reset-private-urls-dialog"}),i=function(){h.hide();h.remove()};h.addHeader("Reset Subscription");h.addPanel("",d.resetSubCalendarPrivateUrl(),"calendar-private-url-reset-dialog-panel");var j=h.getCurrentPanel().body;h.addButton("Reset",function(){var l=k.calendarPlugin.setSubCalendarSpinnerIconVisible(true);var n=e(".reset-progress",j).addClass("reset-in-progress");var m=e("#calendar-reset-private-urls-dialog .subcalendar-private-url-reset-button").attr("disabled","disabled");e.ajax({cache:false,success:function(){n.removeClass("reset-in-progress").addClass("reset-done");e("#calendar-reset-private-urls-dialog .reset-cancel").text("Close");m.removeAttr("disabled")},type:"PUT",timeout:c.ajaxTimeout,url:k.calendarPlugin.getCalendarServiceBaseUrl(k.calendarDiv,"/subcalendar/privateurl/reset/"+encodeURIComponent(k.subCalendar.id)),error:function(o,q,p){m.removeAttr("disabled");c.showAjaxError(k.calendarDiv,o,q,p,k.calendarPlugin.ERROR_CLASS_RESET_PRIVATE_URLS)},complete:function(){if(l){l.resolve()}}})},"subcalendar-private-url-reset-button");h.addLink("Cancel",function(){i();return false},"reset-cancel");e(".calendar-title",j).text(k.subCalendar.name);e(".subscribe-to-calendar",j).click(function(){i();this.calendarPlugin.getSubCalendarIcalAddressDialog(k.calendarDiv,k.subCalendar).show();return false});h.show();return h}});return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:calendar-ical-address', location = 'com/atlassian/confluence/extra/calendar3/components/calendar-ical-address-dialog/subcalendar-privateurl-subscribe-dialog.soy' */
// This file was automatically generated from subcalendar-privateurl-subscribe-dialog.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.TeamCalendars.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.TeamCalendars == 'undefined') { Confluence.TeamCalendars = {}; }
if (typeof Confluence.TeamCalendars.Templates == 'undefined') { Confluence.TeamCalendars.Templates = {}; }


Confluence.TeamCalendars.Templates.subCalendarPrivateUrlSubscribe = function(opt_data, opt_ignored) {
  return '<p>' + soy.$$filterNoAutoescape(AJS.format('Add to Outlook, iCal or other calendar applications by copying the link below and following the \x3ca href\x3d\x22{0}\x22 target\x3d\x22_blank\x22\x3einstructions\x3c/a\x3e.','http://confluence.atlassian.com/x/_wJKE')) + '</p><input type="text" name="ical-address" id="ical-address-' + soy.$$escapeHtml(opt_data.elementIdSuffix) + '" class="ical-address-field"><div class="subscribe-or">' + soy.$$escapeHtml('OR') + '</div><a class="subscribe-google-calendar" href="#" target="_blank"></a><p class="private-url-warning">' + soy.$$filterNoAutoescape('Note: This subscription link is private. If you\x27ve accidentally shared your subscription link, \x3cb\x3e\x3ca href\x3d\x22#\x22 class\x3d\x22reset-subscription-url\x22\x3eyou should reset it\x3c/a\x3e\x3c/b\x3e.') + '</p>';
};
if (goog.DEBUG) {
  Confluence.TeamCalendars.Templates.subCalendarPrivateUrlSubscribe.soyTemplateName = 'Confluence.TeamCalendars.Templates.subCalendarPrivateUrlSubscribe';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:calendar-ical-address', location = 'com/atlassian/confluence/extra/calendar3/components/calendar-basic-auth-ical-address-dialog/calendar-basic-auth-ical-address-dialog.js' */
define("tc/calendar-basic-auth-ical-address-dialog",["jquery","underscore","tc-backbone","tc/templates","tc/calendar-util","tc/util"],function(e,b,g,d,c,f){var a=g.View.extend({calendarBasicAuthIcalAddressDialog:null,calendarDiv:null,subCalendar:null,calendarPlugin:null,editDialog:null,$icalAddressField:null,initialize:function(h){this.calendarDiv=h.calendarDiv;this.subCalendar=h.subCalendar;this.calendarPlugin=h.calendarPlugin;this.editDialog=h.editDialog;this.$el=h.el;this.$el.html(d.subCalendarBasicAuthSubscribe({elementIdSuffix:c.getParameter(this.calendarDiv,"elementIdSuffix")}))},render:function(){var h=this;h.$icalAddressField=e(".ical-address-basic-field",this.$el);h.$icalAddressField.val(c.getParameter(h.calendarDiv,"baseUrl")+"/rest/calendar-services/1.0/calendar/export/subcalendar/"+encodeURIComponent(h.subCalendar.id)+".ics?os_authType=basic&isSubscribe=true")}});return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:calendar-ical-address', location = 'com/atlassian/confluence/extra/calendar3/components/calendar-basic-auth-ical-address-dialog/subcalendar-basic-subscribe-dialog.soy' */
// This file was automatically generated from subcalendar-basic-subscribe-dialog.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.TeamCalendars.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.TeamCalendars == 'undefined') { Confluence.TeamCalendars = {}; }
if (typeof Confluence.TeamCalendars.Templates == 'undefined') { Confluence.TeamCalendars.Templates = {}; }


Confluence.TeamCalendars.Templates.subCalendarBasicAuthSubscribe = function(opt_data, opt_ignored) {
  return '<div><label for="ical-address-' + soy.$$escapeHtml(opt_data.elementIdSuffix) + '" class="ical-address-label">' + soy.$$escapeHtml('Calendar Address:') + '</label><input type="text" name="ical-address" id="ical-address-' + soy.$$escapeHtml(opt_data.elementIdSuffix) + '" class="ical-address-basic-field"></div><p>' + soy.$$filterNoAutoescape(AJS.format('You can subscribe to this Confluence calendar from your calendar application. Copy the calendar address above and \x3ca href\x3d\x22{0}\x22 target\x3d\x22_blank\x22\x3efollow the instructions for the calendar application you wish to use\x3c/a\x3e.','http://confluence.atlassian.com/x/ewn2Dg')) + '</p>';
};
if (goog.DEBUG) {
  Confluence.TeamCalendars.Templates.subCalendarBasicAuthSubscribe.soyTemplateName = 'Confluence.TeamCalendars.Templates.subCalendarBasicAuthSubscribe';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:calendar-ical-address', location = 'com/atlassian/confluence/extra/calendar3/components/calendar-ical-address-dialog/calendar-ical-address-dialog.js' */
define("tc/calendar-ical-address-dialog",["jquery","underscore","tc-backbone","tc/templates","tc/calendar-util","tc/util","tc/calendar-reset-url-dialog","tc/calendar-basic-auth-ical-address-dialog"],function(b,g,f,i,d,e,a,h){var c=f.View.extend({calendarDiv:null,subCalendar:null,calendarPlugin:null,editDialog:null,$icalAddressField:null,initialize:function(j){this.calendarDiv=j.calendarDiv;this.subCalendar=j.subCalendar;this.calendarPlugin=j.calendarPlugin;this.editDialog=j.editDialog;this.$el.html(i.subCalendarPrivateUrlSubscribe({elementIdSuffix:d.getParameter(this.calendarDiv,"elementIdSuffix")}));this.editDialog.addPanel("Subscribe",this.$el,"calendar-ical-subscription-dialog-panel")},render:function(){var j=this;var k=j.calendarPlugin.getParameter(j.calendarDiv,"privateUrlsEnabled")==="true";if(k){j._renderPrivateUrlSubscription()}else{j._renderBasicUrlSubscription()}this.editDialog.getCurrentPanel().onselect=function(){b("#edit-calendar-dialog").find(".button-panel-button.submit").addClass("hidden");j.focusToIcalField()};return this.editDialog},_renderBasicUrlSubscription:function(){var j=new h({editDialog:this.editDialog,subCalendar:this.subCalendar,calendarPlugin:this.calendarPlugin,calendarDiv:this.calendarDiv,el:this.$el});j.render();this.$icalAddressField=j.$icalAddressField},_renderPrivateUrlSubscription:function(){var n=this;var j=n.calendarPlugin.isHttpsServer(n.calendarDiv),l=function(){n.editDialog.hide();n.editDialog.remove()};var k=this.$el;n.$icalAddressField=b(".ical-address-field",k);b(".reset-subscription-url",k).click(function(){l();var o=new a({calendarPlugin:n.calendarPlugin,calendarDiv:n.calendarDiv,subCalendar:n.subCalendar});o.render();return false});if(!j){b(".subscribe-or",k).remove();b(".subscribe-google-calendar",k).remove()}var m=n.calendarPlugin.setSubCalendarSpinnerIconVisible(true);b.ajax({cache:false,success:function(o){b(".ical-address-field",k).val(o).focus().select();if(j){b("a.subscribe-google-calendar",k).attr({href:"https://www.google.com/calendar/render?cid="+encodeURIComponent(o),title:AJS.format("Subscribe to {0} from Google Calendar",n.subCalendar.name)})}},error:function(o,q,p){n.calendarPlugin.showAjaxError(n.calendarDiv,o,q,p,n.calendarPlugin.ERROR_CLASS_PRIVATE_URL)},complete:function(){if(m){m.resolve()}},type:"GET",timeout:d.ajaxTimeout,url:n.calendarPlugin.getCalendarServiceBaseUrl(n.calendarDiv,"/subcalendar/privateurl/"+encodeURIComponent(n.subCalendar.id))})},focusToIcalField:function(){this.$icalAddressField.focus().select()}});return c});
}catch(e){WRMCB(e)};