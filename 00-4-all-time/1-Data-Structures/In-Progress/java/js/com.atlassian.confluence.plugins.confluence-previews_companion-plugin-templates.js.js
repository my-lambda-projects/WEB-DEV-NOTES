WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-previews:companion-plugin-templates', location = '/templates/companion.soy' */
// This file was automatically generated from companion.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace FileViewer.Templates.
 */

if (typeof FileViewer == 'undefined') { var FileViewer = {}; }
if (typeof FileViewer.Templates == 'undefined') { FileViewer.Templates = {}; }


FileViewer.Templates.companionEditButton = function(opt_data, opt_ignored) {
  return '<div id="cp-file-control-companion-edit" href="#" title="" class="cp-control-panel-more cp-icon cp-dropdown" tabindex="51">' + soy.$$escapeHtml('Edit with') + '<span class="aui-icon aui-icon-small aui-iconfont-arrow-down"></span><ul class="cp-dropdown-content companion-dd"><li class="non-app"><span class="aui-icon aui-icon-wait" style="margin: 0px;"></span></li><li class="app"><a href="#" id="app-name"></a></li></ul></div>';
};
if (goog.DEBUG) {
  FileViewer.Templates.companionEditButton.soyTemplateName = 'FileViewer.Templates.companionEditButton';
}


FileViewer.Templates.companionInlineDialog = function(opt_data, opt_ignored) {
  return '<h5>' + soy.$$escapeHtml('Edit files with your desktop apps') + '</h5><p id="not-ready">' + soy.$$escapeHtml('Download the Atlassian Companion app, then edit files using your desktop apps and automatically re-upload them.') + '</p><p id="ready" style="display: none">' + soy.$$escapeHtml('Using the Atlassian Companion app, edit files using your desktop apps and automatically re-upload them.') + '</p><div style="text-align: center;"><img src="data:image/png;base64,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" style="height: 92px; margin: 16px; margin-bottom: 10px" /></div><div style="text-align: center;" id="companion-download-buttons"><a class="aui-button download-mac" href="https://update-nucleus.atlassian.com/Atlassian-Companion/291cb34fe2296e5fb82b83a04704c9b4/latest/darwin/x64/Atlassian%20Companion.dmg" download style="margin-left: 0; margin-top: 6px;">' + soy.$$escapeHtml('Download for Mac') + '</a><a class="aui-button download-win" href="https://update-nucleus.atlassian.com/Atlassian-Companion/291cb34fe2296e5fb82b83a04704c9b4/latest/win32/ia32/Atlassian%20Companion.exe" download style="margin-left: 0; margin-top: 6px;">' + soy.$$escapeHtml('Download for Windows') + '</a></div><div style="text-align: center; margin-top: 6px; display: none;" id="companion-spinner"><span class="aui-icon aui-icon-wait" style="margin-right: 8px;"></span><span>' + soy.$$escapeHtml('Waiting for Companion to Launch') + '</span></div><div style="text-align: center; display: none;" id="companion-edit-now"><a class="aui-button edit-now-button aui-button-primary" href="javascript:void(0)" style="margin-left: 0; margin-top: 6px;"></a></div>';
};
if (goog.DEBUG) {
  FileViewer.Templates.companionInlineDialog.soyTemplateName = 'FileViewer.Templates.companionInlineDialog';
}


FileViewer.Templates.companionDialog = function(opt_data, opt_ignored) {
  return '<header class="aui-dialog2-header upload-new-version-dialog-header"><h1 class="aui-dialog2-header-main">' + soy.$$escapeHtml('Update new version') + '</h1></header><!-- Main dialog content --><div class="aui-dialog2-content"><div class="companion-progress" style="display: flex"><p class="companion-action-text" style="flex: 1">' + soy.$$escapeHtml('Preparing...') + '</p><p class="companion-progress-text" style="margin-top: 0; margin-bottom: 8px"></p></div><div class="aui-progress-indicator"><span class="aui-progress-indicator-value"></span></div><div id="companion-tip" style="margin-top: 8px">' + soy.$$escapeHtml('Once you\x27ve saved your draft click \x22Update\x22 to save your changes as a new version or \x22Cancel\x22 to dismiss them and keep the original.') + '</div><div class="dialog-actions" style="margin-top: 8px; text-align: right"><button class="aui-button close-button" disabled>' + soy.$$escapeHtml('Update') + '</button><button class="aui-button cancel-button">' + soy.$$escapeHtml('Cancel') + '</button></div></div>';
};
if (goog.DEBUG) {
  FileViewer.Templates.companionDialog.soyTemplateName = 'FileViewer.Templates.companionDialog';
}

}catch(e){WRMCB(e)};