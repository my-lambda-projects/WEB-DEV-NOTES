WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-editor-toolbar-view-resources', location = 'view/roadmap-editor/toolbar/toolbar-templates.soy' */
// This file was automatically generated from toolbar-templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Roadmap.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Roadmap == 'undefined') { Confluence.Templates.Roadmap = {}; }


Confluence.Templates.Roadmap.toolbar = function(opt_data, opt_ignored) {
  return '<div id="roadmap-editor-toolbar" class="aui-toolbar2"><div class="aui-toolbar2-inner"><div class="aui-toolbar2-group"><div class="aui-toolbar2-primary">' + aui.buttons.buttons({content: '' + aui.buttons.button({id: 'toolbar-button-add-lane', text: ' ' + soy.$$escapeHtml('Add lane'), iconType: 'aui', iconClass: 'aui-icon-small aui-iconfont-add', iconText: 'Add'}) + aui.buttons.button({id: 'toolbar-button-add-bar', text: ' ' + soy.$$escapeHtml('Add bar'), iconType: 'aui', iconClass: 'aui-icon-small aui-iconfont-add', iconText: 'Add'}) + aui.buttons.button({id: 'toolbar-button-add-marker', text: ' ' + soy.$$escapeHtml('Add marker'), iconType: 'aui', iconClass: 'aui-icon-small aui-iconfont-add', iconText: 'Add'})}) + '</div><div class="aui-toolbar2-secondary">' + Confluence.Templates.Roadmap.timelineOptionsForm(null) + '</div></div></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Roadmap.toolbar.soyTemplateName = 'Confluence.Templates.Roadmap.toolbar';
}


Confluence.Templates.Roadmap.timelineOptionsForm = function(opt_data, opt_ignored) {
  return '' + aui.form.form({id: 'timeline-options-form', action: '#', content: '<fieldset>' + aui.form.selectField({id: 'timeline-display-options-select', labelContent: '' + soy.$$escapeHtml('View by'), options: [{text: 'Months', value: 'MONTH'}, {text: 'Weeks', value: 'WEEK'}], extraClasses: 'view-by'}) + aui.form.textField({id: 'timeline-startdate-input', name: 'startDate', isRequired: true, extraClasses: 'roadmap-toolbar-date start-date aui-date-picker'}) + ' - ' + aui.form.textField({id: 'timeline-enddate-input', name: 'endDate', isRequired: true, extraClasses: 'roadmap-toolbar-date end-date aui-date-picker'}) + '<div class="field-group timeline-field-group-error"><div id="roadmap-timeline-error" class="error" /></div></fieldset>'});
};
if (goog.DEBUG) {
  Confluence.Templates.Roadmap.timelineOptionsForm.soyTemplateName = 'Confluence.Templates.Roadmap.timelineOptionsForm';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-editor-toolbar-view-resources', location = 'view/roadmap-editor/toolbar/toolbar.js' */
(function(b,a){window.Roadmap=window.Roadmap||{};Roadmap.ToolbarView=Backbone.View.extend({className:"roadmap-toolbar",events:{"click #toolbar-button-add-bar":"onAddBarClick","click #toolbar-button-add-lane":"onAddLaneClick","click #toolbar-button-add-marker":"onAddMarkerClick","change #timeline-display-options-select":"onTimelineOptionChange"},initialize:function(){a.bindAll(this,"render")},render:function(){b(this.$el).html(Confluence.Templates.Roadmap.toolbar());this._initVariables();this._setupTimelineOptionsForm();return this},onAddBarClick:function(i){i.preventDefault();var d=this.model.get("lanes").at(0);var c=d.get("bars");var g=this.model.get("timeline");var f=this.model.get("timeline").get("startDate");var h=g.get("displayOption")===Roadmap.TIMELINE_DISPLAY_OPTION.MONTH?moment(f).startOf("month"):moment(f).startOf("isoWeek");c.add(new Roadmap.Bar({rowIndex:d.getNumberOfRows(),startDate:h.toDate()}))},onAddLaneClick:function(d){d.preventDefault();var c=this.model.get("lanes");c.add(new Roadmap.Lane())},onAddMarkerClick:function(f){var g=this.model.get("markers");var d=this.model.get("timeline");var h=moment(d.get("startDate"));var c=d.get("displayOption")===Roadmap.TIMELINE_DISPLAY_OPTION.MONTH?h.date(15):h.isoWeekday(4);g.add(new Roadmap.Marker({markerDate:c.toDate()}))},onTimelineOptionChange:function(d){var c=this.model.get("timeline");c.set({displayOption:this.$timelineSelect.val()})},_initVariables:function(){this.$timelineForm=this.$el.find("#timeline-options-form");this.$startDateInput=this.$timelineForm.find("#timeline-startdate-input");this.$endDateInput=this.$timelineForm.find("#timeline-enddate-input");this.$timelineSelect=this.$timelineForm.find("#timeline-display-options-select");this.$timelineError=this.$timelineForm.find("#roadmap-timeline-error");this.newTimeline=new Roadmap.Timeline()},_clearTimelineErrors:function(){this.$timelineError.empty()},_showTimelineErrors:function(){var c=this;a.each(c.newTimeline.validationError,function(d){c.$timelineError.append(d.message)})},_applyNewTimeline:function(){var c=this.model.get("timeline");var e=Confluence.Roadmap.DateUtilities.parseDate(this.$startDateInput.val());var d=Confluence.Roadmap.DateUtilities.parseDate(this.$endDateInput.val());c.set({startDate:e.toDate(),endDate:d.toDate()});this._showTimeLineFormat()},_showTimeLineFormat:function(){var c=this.model.get("timeline");this.$startDateInput.val(Confluence.Roadmap.DateUtilities.getDateStringFromDate(c.get("startDate"),Roadmap.SHORT_DATE_FORMAT));this.$endDateInput.val(Confluence.Roadmap.DateUtilities.getDateStringFromDate(c.get("endDate"),Roadmap.SHORT_DATE_FORMAT))},_validate:function(){this._clearTimelineErrors();if(this.newTimeline.isValid()){this._applyNewTimeline()}else{this._showTimelineErrors()}},_setupTimelineOptionsForm:function(){var e=this.model.get("timeline");var g=Confluence.Roadmap.DateUtilities.getDateStringFromDate(e.get("startDate"),Roadmap.SHORT_DATE_FORMAT),c=Confluence.Roadmap.DateUtilities.getDateStringFromDate(e.get("endDate"),Roadmap.SHORT_DATE_FORMAT);this.$startDateInput.val(g);this.$endDateInput.val(c);this.newTimeline.set({startDateString:g,endDateString:c});this.$timelineSelect.val(e.get("displayOption"));var f={overrideBrowserDefault:true,firstDay:1};this.$startDateInput.datePicker(f);this.$endDateInput.datePicker(f);Confluence.Roadmap.FieldUtilities.fixDatePickerFields(this.$timelineForm);var d=this;this.$startDateInput.on("change",function(){d.newTimeline.set({startDateString:d.$startDateInput.val()});d._validate()});this.$endDateInput.on("change",function(){d.newTimeline.set({endDateString:d.$endDateInput.val()});d._validate()})}})})(AJS.$,window._);
}catch(e){WRMCB(e)};