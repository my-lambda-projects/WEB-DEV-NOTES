WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.editor:page-editor-soy', location = 'editor/page-editor.soy' */
// This file was automatically generated from page-editor.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Editor.Page.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Editor == 'undefined') { Confluence.Templates.Editor = {}; }
if (typeof Confluence.Templates.Editor.Page == 'undefined') { Confluence.Templates.Editor.Page = {}; }


Confluence.Templates.Editor.Page.saveButton = function(opt_data, opt_ignored) {
  return '<button id="rte-button-publish" data-test-id="tiny-publish-button" class="aui-button aui-button-primary default-submit" type="submit" name="confirm" value="Save" title="' + Confluence.Templates.Editor.Page.saveButtonTitle(opt_data) + '" tabindex="101">' + Confluence.Templates.Editor.Page.saveButtonText(opt_data) + '</button>';
};
if (goog.DEBUG) {
  Confluence.Templates.Editor.Page.saveButton.soyTemplateName = 'Confluence.Templates.Editor.Page.saveButton';
}


Confluence.Templates.Editor.Page.saveButtonTitle = function(opt_data, opt_ignored) {
  return '' + ((opt_data.contentType == 'blogpost') ? soy.$$escapeHtml('Publish your blog post') : (opt_data.contentType == 'page') ? (opt_data.isNewPage) ? soy.$$escapeHtml('Publish changes') : soy.$$escapeHtml('Update the published page') : soy.$$escapeHtml('Save'));
};
if (goog.DEBUG) {
  Confluence.Templates.Editor.Page.saveButtonTitle.soyTemplateName = 'Confluence.Templates.Editor.Page.saveButtonTitle';
}


Confluence.Templates.Editor.Page.previewButton = function(opt_data, opt_ignored) {
  return '<button class="aui-button toolbar-item aui-button-light" id="rte-button-preview" data-test-id="tiny-preview-button" title="' + soy.$$escapeHtml('Preview') + '" type="button"><span class="trigger-text">' + soy.$$escapeHtml('Preview') + '</span></button>';
};
if (goog.DEBUG) {
  Confluence.Templates.Editor.Page.previewButton.soyTemplateName = 'Confluence.Templates.Editor.Page.previewButton';
}


Confluence.Templates.Editor.Page.saveButtonText = function(opt_data, opt_ignored) {
  return '' + ((opt_data.contentType == 'blogpost' || opt_data.contentType == 'page') ? soy.$$escapeHtml('Publish') : (opt_data.contentType == 'blogpost') ? soy.$$escapeHtml('Publish') : soy.$$escapeHtml('Save'));
};
if (goog.DEBUG) {
  Confluence.Templates.Editor.Page.saveButtonText.soyTemplateName = 'Confluence.Templates.Editor.Page.saveButtonText';
}


Confluence.Templates.Editor.Page.cancelButton = function(opt_data, opt_ignored) {
  return '' + ((opt_data.contentType == 'page' || opt_data.contentType == 'blogpost') ? '<ul class="aui-buttons rte-toolbar-group-done close"><button class="aui-button shared-drafts" type="submit" id="rte-button-cancel" data-test-id="tiny-cancel-button" name="cancel" value="cancel"><span class="icon aui-icon aui-icon-small aui-iconfont-close-dialog"></span></button></ul>' : '<button class="toolbar-item-link aui-button aui-button-link" type="submit" id="rte-button-cancel" data-test-id="tiny-cancel-button" name="cancel" value="cancel"><span class="trigger-text">' + ((opt_data.contentType == 'page' || opt_data.contentType == 'blogpost') ? soy.$$escapeHtml('Close') : soy.$$escapeHtml('Cancel')) + '</span></button>');
};
if (goog.DEBUG) {
  Confluence.Templates.Editor.Page.cancelButton.soyTemplateName = 'Confluence.Templates.Editor.Page.cancelButton';
}


Confluence.Templates.Editor.Page.quitDialogHeader = function(opt_data, opt_ignored) {
  var output = '';
  switch (opt_data.dialogType) {
    case 'delete':
    case 'revert':
      output += (opt_data.newPage) ? (opt_data.contentType == 'blogpost') ? '<h2 class="aui-dialog2-header-main">' + soy.$$escapeHtml('Delete unpublished blog post?') + '</h2>' : '<h2 class="aui-dialog2-header-main">' + soy.$$escapeHtml('Delete unpublished page?') + '</h2>' : '<h2 class="aui-dialog2-header-main">' + soy.$$escapeHtml('Revert to last published version?') + '</h2>';
      break;
    case 'publish':
    case 'update':
      output += '<h2 class="aui-dialog2-header-main">' + soy.$$escapeHtml('Publish the page?') + '</h2>';
      break;
    case 'diff':
      output += '<h2 class="aui-dialog2-header-main">' + soy.$$escapeHtml('Unpublished changes') + '</h2>';
      break;
  }
  output += '<a class="aui-dialog2-header-close"><span class="aui-icon aui-icon-small aui-iconfont-close-dialog">' + soy.$$escapeHtml('Close') + '</span></a>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Editor.Page.quitDialogHeader.soyTemplateName = 'Confluence.Templates.Editor.Page.quitDialogHeader';
}


Confluence.Templates.Editor.Page.quitDialogContent = function(opt_data, opt_ignored) {
  var output = '';
  switch (opt_data.dialogType) {
    case 'revert':
      output += (opt_data.contributors.length == 0) ? ((opt_data.contentType == 'blogpost') ? soy.$$filterNoAutoescape('This will permanently delete all the changes you made since this blog post was last published') : soy.$$filterNoAutoescape('This will permanently delete all the changes you made since this page was last published.')) + '<div class="aui-dialog2-footer-hint"><a id="qed-show-diff-button" class="aui-button aui-button-link">' + soy.$$escapeHtml('Show changes') + '</a></div>' : soy.$$filterNoAutoescape('This will permanently delete all the changes that the following people have made, since this page was last published.') + '<div class="aui-dialog2-footer-hint"><a id="qed-show-diff-button" class="aui-button aui-button-link">' + soy.$$escapeHtml('Show changes') + '</a></div>' + Confluence.Templates.Editor.Page.contributorList(opt_data);
      break;
    case 'delete':
      output += (opt_data.contributors.length == 0) ? (opt_data.contentType == 'blogpost') ? soy.$$filterNoAutoescape('Once you delete an unpublished blog post, it\x27s gone for good.') : soy.$$filterNoAutoescape('If you delete an unpublished page, it\x27s gone for good.') : ((opt_data.contentType == 'blogpost') ? soy.$$filterNoAutoescape('This will permanently delete this blog post, which you and these other people have worked on.') : soy.$$filterNoAutoescape('This will permanently delete this page, which you and these other people have worked on.')) + Confluence.Templates.Editor.Page.contributorList(opt_data);
      break;
    case 'publish':
    case 'update':
      output += soy.$$filterNoAutoescape('You\x27ll also be publishing changes made by these people:') + Confluence.Templates.Editor.Page.contributorList(opt_data);
      break;
    case 'diff':
      output += '<div><div class="legend"><span class="legend-title">' + soy.$$escapeHtml('Key') + ': </span><span class="diff-html-added">' + soy.$$escapeHtml('This line was added.') + '</span><span class="diff-html-removed">' + soy.$$escapeHtml('This line was removed.') + '</span><span class="diff-html-changed">' + soy.$$escapeHtml('Formatting was changed.') + '</span></div>' + ((! opt_data.newDialog) ? '<a class="aui-button aui-button-link" id="qed-hide-diff-button">' + soy.$$escapeHtml('Show contributors') + '</a>' : '') + '<hr/><div class="wiki-content"></div><span class="aui-icon aui-icon-wait diff-spinner"></span></div>';
      break;
  }
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Editor.Page.quitDialogContent.soyTemplateName = 'Confluence.Templates.Editor.Page.quitDialogContent';
}


Confluence.Templates.Editor.Page.hiddenInputCancel = function(opt_data, opt_ignored) {
  return '<input type="hidden" name="cancel" value="cancel">';
};
if (goog.DEBUG) {
  Confluence.Templates.Editor.Page.hiddenInputCancel.soyTemplateName = 'Confluence.Templates.Editor.Page.hiddenInputCancel';
}


Confluence.Templates.Editor.Page.contributorList = function(opt_data, opt_ignored) {
  var output = '<ul class="contributor-list">';
  var contributorList147 = opt_data.contributors;
  var contributorListLen147 = contributorList147.length;
  for (var contributorIndex147 = 0; contributorIndex147 < contributorListLen147; contributorIndex147++) {
    var contributorData147 = contributorList147[contributorIndex147];
    output += '<li data-username="' + soy.$$escapeHtml(contributorData147.name) + '" data-account-id="' + soy.$$escapeHtml(contributorData147.accountId) + '"><div class="contributor-avatar ' + ((contributorData147.active) ? 'active' : '') + '"><img src="' + soy.$$escapeHtml(contributorData147.avatarURL) + '"></div><div class="contributor-detail"><p class="contributor-detail-name"><span>' + soy.$$escapeHtml(contributorData147.fullname) + '</span></p><p class="contributor-detail-last-modification"><span>' + soy.$$escapeHtml('Last edited') + ' ' + soy.$$escapeHtml(contributorData147.formattedLastModification) + '</span></p></div></li>';
  }
  output += '</ul>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Editor.Page.contributorList.soyTemplateName = 'Confluence.Templates.Editor.Page.contributorList';
}

}catch(e){WRMCB(e)};