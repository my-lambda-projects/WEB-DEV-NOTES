WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-editor-timeline-view-resources', location = 'view/roadmap-editor/timeline/timeline-templates.soy' */
// This file was automatically generated from timeline-templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Roadmap.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Roadmap == 'undefined') { Confluence.Templates.Roadmap = {}; }


Confluence.Templates.Roadmap.timeline = function(opt_data, opt_ignored) {
  var output = '';
  var displayTimelineList3 = opt_data.displayTimelines;
  var displayTimelineListLen3 = displayTimelineList3.length;
  for (var displayTimelineIndex3 = 0; displayTimelineIndex3 < displayTimelineListLen3; displayTimelineIndex3++) {
    var displayTimelineData3 = displayTimelineList3[displayTimelineIndex3];
    output += '<div class="roadmap-column-title">' + ((displayTimelineIndex3 == 0 || displayTimelineData3.year != opt_data.displayTimelines[displayTimelineIndex3 - 1].year) ? '<span class="roadmap-column-year">' + soy.$$escapeHtml(displayTimelineData3.year) + '</span><br/>' : '') + soy.$$escapeHtml(displayTimelineData3.month) + '</div>';
  }
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Roadmap.timeline.soyTemplateName = 'Confluence.Templates.Roadmap.timeline';
}


Confluence.Templates.Roadmap.timelineColumn = function(opt_data, opt_ignored) {
  var output = '';
  var iLimit14 = opt_data.numberOfColumns;
  for (var i14 = 0; i14 < iLimit14; i14++) {
    output += '<div class="roadmap-column-item">&nbsp;</div>';
  }
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Roadmap.timelineColumn.soyTemplateName = 'Confluence.Templates.Roadmap.timelineColumn';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-editor-timeline-view-resources', location = 'view/roadmap-editor/timeline/timeline.js' */
(function(b,a){window.Roadmap=window.Roadmap||{};var c={};c.Helper=Confluence.Roadmap.Helper;Roadmap.TimelineView=Backbone.View.extend({className:"roadmap-frame-title",initialize:function(){a.bindAll(this,"render")},render:function(){this.model.calculateTimelineColumns();this.$el.html(Confluence.Templates.Roadmap.timeline({displayTimelines:this.model.get("displayTimelineColumns")}));return this},update:function(){this.render()},getBarPosition:function(d){if(this.model.get("displayOption")===Roadmap.TIMELINE_DISPLAY_OPTION.MONTH){return{left:c.Helper.getPosXOnMonthTimeline(this.model.attributes,d.startDate),width:c.Helper.getWidthTimeline(this.model.attributes,d)}}return{left:c.Helper.getPosXOnWeekTimeline(this.model.attributes,d.startDate),width:c.Helper.getWidthTimeline(this.model.attributes,d)}},getBarDuration:function(d){return(this.model.get("displayOption")===Roadmap.TIMELINE_DISPLAY_OPTION.MONTH)?(d/Roadmap.MONTH_WIDTH):(d/Roadmap.WEEK_WIDTH)},getBarStartDate:function(d){return(this.model.get("displayOption")===Roadmap.TIMELINE_DISPLAY_OPTION.MONTH)?c.Helper.getMonthStartDateByPosition(this.model.attributes,d):c.Helper.getWeekStartDateByPosition(this.model.attributes,d)}})})(AJS.$,window._);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-editor-timeline-view-resources', location = 'view/roadmap-editor/timeline/timeline-column.js' */
(function(b,a){window.Roadmap=window.Roadmap||{};Roadmap.TimelineColumnView=Backbone.View.extend({className:"roadmap-frame-content",initialize:function(){a.bindAll(this,"render")},render:function(){var c=this.model.get("displayTimelineColumns").length;this.$el.html(Confluence.Templates.Roadmap.timelineColumn({numberOfColumns:c}));return this},updateHeight:function(c){this.$el.height(c)},update:function(){this.render()},getSizeAndPosition:function(){return{width:this.$el.width(),height:this.$el.height(),left:this.$el.position().left,top:this.$el.position().top}}})})(AJS.$,window._);
}catch(e){WRMCB(e)};