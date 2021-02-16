WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.web.resources:select-grid', location = 'includes/js/select-grid.soy' */
// This file was automatically generated from select-grid.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.SelectGrid.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.SelectGrid == 'undefined') { Confluence.Templates.SelectGrid = {}; }


Confluence.Templates.SelectGrid.gridOutline = function(opt_data, opt_ignored) {
  return '<table class="select-grid aui"><thead><tr class="data-table-header"></tr></thead><tbody></tbody></table>';
};
if (goog.DEBUG) {
  Confluence.Templates.SelectGrid.gridOutline.soyTemplateName = 'Confluence.Templates.SelectGrid.gridOutline';
}


Confluence.Templates.SelectGrid.cellWithLink = function(opt_data, opt_ignored) {
  return '<td class="' + soy.$$escapeHtml(opt_data.outerClass) + '"><a class="' + soy.$$escapeHtml(opt_data.innerClass) + '" href="' + soy.$$escapeHtml(opt_data.href) + '" title="' + soy.$$escapeHtml(opt_data.title) + '"><span>' + soy.$$escapeHtml(opt_data.text) + '</span></a></td>';
};
if (goog.DEBUG) {
  Confluence.Templates.SelectGrid.cellWithLink.soyTemplateName = 'Confluence.Templates.SelectGrid.cellWithLink';
}


Confluence.Templates.SelectGrid.cellWithoutLink = function(opt_data, opt_ignored) {
  return '<td class="' + soy.$$escapeHtml(opt_data.outerClass) + '"><span class="' + soy.$$escapeHtml(opt_data.innerClass) + '" title="' + soy.$$escapeHtml(opt_data.title) + '">' + soy.$$escapeHtml(opt_data.text) + '</span></td>';
};
if (goog.DEBUG) {
  Confluence.Templates.SelectGrid.cellWithoutLink.soyTemplateName = 'Confluence.Templates.SelectGrid.cellWithoutLink';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:select-grid', location = 'includes/js/select-grid.js' */
define("confluence/select-grid",["ajs","jquery","confluence/templates","confluence/group","confluence/control"],function(c,f,h,g,l){g=g.extend({init:function(a){this.type=this.type||"SelectGrid";this._super();var b=f(h.SelectGrid.gridOutline()),d=b.find("thead tr");f(a.columns).each(function(a,b){a=c("th").addClass(b.getClassName()).text(b.heading);d.append(a)});this.gridContainer=f(a.gridContainer).append(b);this.getRowId=a.getRowId;this.table=b;this.columns=a.columns;this.selectionCallback=a.selectionCallback;
this.body=b.find("tbody");this.body.delegate("a","click",function(a){a.preventDefault()});this.dontShiftFocus=a.dontShiftFocus||function(){}},keys:{up:function(a){this.table.is(":visible")&&!this.dontShiftFocus()&&(this.shiftFocus(-1),a.preventDefault())},down:function(a){this.table.is(":visible")&&!this.dontShiftFocus()&&(this.shiftFocus(1),a.preventDefault())}},_addRow:function(a,b,d,e){f.isFunction(d)&&(e=d,d=!1);d?this.body.prepend(a):this.body.append(a);a=new m({row:a,data:b,callback:e,getRowId:this.getRowId,
selectionCallback:e});this.addItem(a);return a},clear:function(){this.removeAllItems();this.body.children().remove()},_addRows:function(a,b){var d=this,e=[];f(a).each(function(a,c){a=n(c,d.columns);a.attr("data-id",d.getRowId(c));e.push(d._addRow(a,c,b,d.selectionCallback))});return e},update:function(a){this.clear();a&&a.length?(this._addRows(a),this.prepareForInput()):c.debug("SelectGrid.update called with no data, returning.")},prependAndSelect:function(a,b){a&&a.length?this._addRows(a,!0)[b||
0].selectRow():c.debug("SelectGrid.prependAndSelect called with no data, returning.")},findItem:function(a){for(var b=0;b<this.items.length;b++)if(this.items[b].getRowId()==a)return this.items[b];c.debug("SelectGrid.findItem didn't find item, returning null.");return null},select:function(a){(a=this.findItem(a))&&a.selectRow()},selectIndex:function(a){a=a||0;this.items[a]?this.items[a].selectRow():c.debug("SelectGrid.selectIndex couldn't select row with index "+a+", not found")},show:function(){this.gridContainer.removeClass("hidden")},
hide:function(){this.gridContainer.addClass("hidden")},isVisible:function(){return!this.gridContainer.hasClass("hidden")}});var m=l.extend({init:function(a){this.type="SelectableRow";this.$row=f(a.row);this.$row.data("properties",a.data);this.getRowId=function(){return a.getRowId(a.data)};this.selectionCallback=a.selectionCallback;this._assignEvents("element",this.$row);this._assignEvents("instance",this);c.debug("SelectableRow initialized")},_events:{instance:{focus:function(a){a=this.$row;a.addClass("selected");
this.selectionCallback(a,a.data("properties"))},blur:function(a){this.$row.removeClass("selected")}},element:{click:function(){this.trigger("focus")}}},selectRow:function(){this.trigger("focus")}}),n=function(a,b){var d,e,g,k;d=c("tr");f(b).each(function(b,c){e={outerClass:c.getClassName(a)||"",href:c.getHref&&c.getHref(a)||"",innerClass:c.getInnerClass&&c.getInnerClass(a)||"",title:c.getTitle&&c.getTitle(a)||"",text:c.getText(a)||""};g=e.href?"cellWithLink":"cellWithoutLink";k=h.SelectGrid[g](e);
d.append(k)});return d};g.Column=function(a){var b=function(b){return b[a.key]};return{key:a.key,heading:a.heading,getClassName:a.getClassName||function(){return a.className||a.key+"-field"},getHref:a.getHref,getInnerClass:a.getInnerClass,getTitle:a.getTitle,getText:a.getText||b}};return g});require("confluence/module-exporter").exportModuleAsGlobal("confluence/select-grid","AJS.SelectGrid");
}catch(e){WRMCB(e)};