WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-labels:labels-editor', location = 'com/atlassian/confluence/plugins/labels/dialog/labels-dialog.soy' */
// This file was automatically generated from labels-dialog.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Labels.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Labels == 'undefined') { Confluence.Templates.Labels = {}; }


Confluence.Templates.Labels.helpLink = function(opt_data, opt_ignored) {
  return '' + Confluence.Templates.Dialog.helpLink({href: "https://confluence.atlassian.com/display/ConfCloud/Add%2C+Remove+and+Search+for+Labels"});
};
if (goog.DEBUG) {
  Confluence.Templates.Labels.helpLink.soyTemplateName = 'Confluence.Templates.Labels.helpLink';
}


Confluence.Templates.Labels.dialog = function(opt_data, opt_ignored) {
  return '<div id="labels-dialog"><form id="add-labels-form" method="GET" action="" class="aui"><div id="label-operation-error-container"><div id="label-operation-error-message" class="error-message" ></div></div><div id="label-input-fields"><input id="labels-string" autocomplete="off" name="labels-string" value="labels-string" class="text"><input id="add-labels-editor-button" type="submit" class="add-labels aui-button" value="' + soy.$$escapeHtml('Add') + '"></div><div id="labels-autocomplete-list" class="aui-dd-parent resize-to-input"></div><div id="dialog-label-list" class="labels-section-content"><!-- DIV placeholder for labels list, is copied into in labels-dialog.js --></div><div class="labels-tip"></div></form></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Labels.dialog.soyTemplateName = 'Confluence.Templates.Labels.dialog';
}


Confluence.Templates.Labels.nolabels = function(opt_data, opt_ignored) {
  return '<li class="no-labels-message">' + soy.$$escapeHtml('No labels') + '</li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Labels.nolabels.soyTemplateName = 'Confluence.Templates.Labels.nolabels';
}


Confluence.Templates.Labels.dialogLabelList = function(opt_data, opt_ignored) {
  return '<ul class="label-list editable">' + Confluence.Templates.Labels.dialogLabels(opt_data) + '</ul>';
};
if (goog.DEBUG) {
  Confluence.Templates.Labels.dialogLabelList.soyTemplateName = 'Confluence.Templates.Labels.dialogLabelList';
}


Confluence.Templates.Labels.dialogLabels = function(opt_data, opt_ignored) {
  var output = '';
  var labelList18 = opt_data.labels;
  var labelListLen18 = labelList18.length;
  for (var labelIndex18 = 0; labelIndex18 < labelListLen18; labelIndex18++) {
    var labelData18 = labelList18[labelIndex18];
    output += '<li class="aui-label ' + ((opt_data.editable) ? 'aui-label-closeable aui-label-split' : '') + '" data-label-id="' + soy.$$escapeHtml(labelData18.id) + '"><a class="aui-label-split-main" href="' + soy.$$escapeHtml("/wiki") + soy.$$escapeHtml(labelData18.link) + '" rel="tag">' + ((! labelData18.prefix || labelData18.prefix == 'global' || labelData18.prefix == 'team') ? soy.$$escapeHtml(labelData18.name) : soy.$$escapeHtml(labelData18.prefix) + ':' + soy.$$escapeHtml(labelData18.name)) + '</a>' + ((opt_data.editable) ? '<span class="aui-label-split-close"><span tabindex="0" class="aui-icon aui-icon-close"  title="' + soy.$$escapeHtml('Delete Label') + '" original-title="' + soy.$$escapeHtml('Delete Label') + '">' + soy.$$escapeHtml('Delete Label') + '</span></span>' : '') + '</li>';
  }
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Labels.dialogLabels.soyTemplateName = 'Confluence.Templates.Labels.dialogLabels';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-labels:labels-editor', location = 'com/atlassian/confluence/plugins/labels/dialog/labels-dialog.js' */
define("confluence-labels/labels/dialog/labels-dialog","confluence/templates ajs confluence-labels/labels/labels confluence/meta jquery confluence/legacy-editor-global-AVOID-IF-POSSIBLE confluence/dialog".split(" "),function(e,h,d,f,c,p,q){if(e.Labels){var k={},g=null,l=function(){c("#"+g.id).find(".label-list").removeClass("editable");g.hide();return!1},r=function(){g=q.component({width:600,height:250,id:"edit-labels-dialog",onCancel:l});g.addHeader("Labels");g.addPanel("Label Editor",
e.Labels.dialog());g.addCancel("Close",l);g.addHelpText("Shortcut tip: In page view, pressing \u003cb\u003e{shortcut}\u003c/b\u003e also opens this dialog box",{shortcut:"l"});g.popup.element.find(".dialog-title").prepend(e.Labels.helpLink());c("#add-labels-form").submit(function(b){var a=c("#labels-string");b.preventDefault();b=c("#dialog-label-list");d.addLabel(a.val(),b.attr("entityid"),b.attr("entitytype")).always(function(){c("#labels-autocomplete-list").find(".aui-dropdown").addClass("hidden");a.focus()})});d.bindAutocomplete()};
k.bindOpenDialog=function(b){b.click(function(a){a.preventDefault();a=c(a.target).closest(".labels-section-content");a.length?k.openDialog(a):k.openDialog()})};k.openDialog=function(b){var a,e,m;g||r();b?(a=b.attr("entityid"),b=b.attr("entitytype")):(b=f.get("content-type"),a=p.Drafts.isNewContent()?f.get("draft-id"):f.get("page-id"));e=d.routes.list(b,a);m=c("#dialog-label-list");m.attr("entityid",a);m.attr("entitytype",b);var l=function(){g.show();c("#labels-string").val("").focus();h.trigger("labels.dialog.open")},
n=function(a){k.updateDialogLabelList(a.labels);f.set("num-labels",a.labels.length);c("#rte-button-labels").trigger("updateLabel");l()};d.labelsAreNotPersisted(a)?(a=d.getLabelsInputField(),a=d.parseLabelStringToArray(a),n({labels:a})):c.ajax({url:e,cache:!1,success:function(a){var b=[];c.each(a.labels,function(a,c){b.push(c.name)});d.setLabelsInputField(b.join(" "));n(a)},error:function(a,b){d.setLabelError("Unable to fetch current labels from the server.");l()}});c("#dialog-label-list").attr("data-ready",
"true")};k.updateDialogLabelList=function(b){var a=c("#dialog-label-list");a.length&&(c.each(b,function(a,b){b.link=d.getLabelLink(f.get("space-key"),b)}),a.html(e.Labels.dialogLabelList({labels:b,editable:!0})))};return k}});
require("confluence/module-exporter").safeRequire("confluence-labels/labels/dialog/labels-dialog",function(e){var h=require("ajs");h.Labels.bindOpenDialog=e.bindOpenDialog;h.Labels.openDialog=e.openDialog;h.Labels.updateDialogLabelList=e.updateDialogLabelList;h.toInit(function(d){d(document).on("click","#rte-button-labels",function(d){e.openDialog()});d(".show-labels-editor").click(function(f){f.preventDefault();f=d(f.target).closest(".labels-section-content");e.openDialog(f)})})});
}catch(e){WRMCB(e)};