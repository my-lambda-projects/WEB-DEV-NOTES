WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:drag-and-drop-templates', location = 'templates/drag-and-drop.soy' */
// This file was automatically generated from drag-and-drop.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.DragAndDrop.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.DragAndDrop == 'undefined') { Confluence.Templates.DragAndDrop = {}; }


Confluence.Templates.DragAndDrop.fileStatus = function(opt_data, opt_ignored) {
  return '<li id="file-status-block-' + soy.$$escapeHtml(opt_data.workId) + '" data-filename="' + soy.$$escapeHtml(opt_data.filename) + '"><div class="aui-group aui-group-split file-status-item"><div class="aui-item"><label>' + soy.$$escapeHtml(opt_data.filename) + '</label></div><div class="aui-item"><div id="file-upload-progress-text-' + soy.$$escapeHtml(opt_data.workId) + '" class="file-upload-progress-text">' + soy.$$escapeHtml('Waiting...') + '</div></div></div><div class="file-upload-progress-block"><div class="aui-progress-indicator" id="' + soy.$$escapeHtml(opt_data.progressElementId) + '"><span class="aui-progress-indicator-value"></span></div>' + ((opt_data.showCancel) ? '<div id="cancel-or-success-placeholder-' + soy.$$escapeHtml(opt_data.workId) + '" class="cancel-or-success-placeholder ui-state-default"><span id="file-upload-cancel-' + soy.$$escapeHtml(opt_data.workId) + '" class="aui-icon aui-icon-small aui-iconfont-remove" title="' + soy.$$escapeHtml('Cancel Upload') + '">' + soy.$$escapeHtml('Cancel') + '</span></div>' : '') + '</div></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.DragAndDrop.fileStatus.soyTemplateName = 'Confluence.Templates.DragAndDrop.fileStatus';
}


Confluence.Templates.DragAndDrop.uploadFileStatusContainer = function(opt_data, opt_ignored) {
  return '<ul id="upload-statuses"></ul>';
};
if (goog.DEBUG) {
  Confluence.Templates.DragAndDrop.uploadFileStatusContainer.soyTemplateName = 'Confluence.Templates.DragAndDrop.uploadFileStatusContainer';
}


Confluence.Templates.DragAndDrop.uploadFileStatusSuccessIcon = function(opt_data, opt_ignored) {
  return '<span class=\'aui-icon aui-icon-small aui-iconfont-success\'></span>';
};
if (goog.DEBUG) {
  Confluence.Templates.DragAndDrop.uploadFileStatusSuccessIcon.soyTemplateName = 'Confluence.Templates.DragAndDrop.uploadFileStatusSuccessIcon';
}


Confluence.Templates.DragAndDrop.uploadFileStatusProgressMessage = function(opt_data, opt_ignored) {
  return '<span id="file-' + soy.$$escapeHtml(opt_data.fileId) + '-uploaded">' + soy.$$escapeHtml(opt_data.uploadedSizeNice) + '</span> ' + soy.$$escapeHtml('of') + ' ' + soy.$$escapeHtml(opt_data.totalSizeNice);
};
if (goog.DEBUG) {
  Confluence.Templates.DragAndDrop.uploadFileStatusProgressMessage.soyTemplateName = 'Confluence.Templates.DragAndDrop.uploadFileStatusProgressMessage';
}


Confluence.Templates.DragAndDrop.dropZone = function(opt_data, opt_ignored) {
  return '<div class="attachments-drop-zone"><div class="drop-zone-image"></div><div class="drop-zone-text">' + soy.$$escapeHtml('Drop files here to attach them') + '</div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.DragAndDrop.dropZone.soyTemplateName = 'Confluence.Templates.DragAndDrop.dropZone';
}


Confluence.Templates.DragAndDrop.dragOverlay = function(opt_data, opt_ignored) {
  return '<div id="dragOverlay"><div class="overlay-blanket"></div><div class="overlay-center"><p>' + soy.$$escapeHtml('Drop files to insert them into the page') + '</p></div><span class="overlay-baseline"></span><div class="overlay-drop-zone"></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.DragAndDrop.dragOverlay.soyTemplateName = 'Confluence.Templates.DragAndDrop.dragOverlay';
}


Confluence.Templates.DragAndDrop.dragAndDropTip = function(opt_data, opt_ignored) {
  return '<div class="attach-tip-discovery"><span class="img"></span><div class="text"><strong>' + soy.$$escapeHtml('Tip:') + ' </strong><p>' + soy.$$escapeHtml('Drop files straight into your page to insert them directly.') + '</p><div><a class="close-tip" href="#">' + soy.$$escapeHtml('Ok, got it!') + '</a></div></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.DragAndDrop.dragAndDropTip.soyTemplateName = 'Confluence.Templates.DragAndDrop.dragAndDropTip';
}

}catch(e){WRMCB(e)};