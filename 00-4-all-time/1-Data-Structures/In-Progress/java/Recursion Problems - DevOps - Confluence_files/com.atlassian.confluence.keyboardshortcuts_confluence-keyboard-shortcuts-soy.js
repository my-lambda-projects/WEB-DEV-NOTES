WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.keyboardshortcuts:confluence-keyboard-shortcuts-soy', location = 'templates/confluence-keyboard-shortcuts.soy' */
// This file was automatically generated from confluence-keyboard-shortcuts.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace __KeyboardShortcutsDialog.
 */

if (typeof __KeyboardShortcutsDialog == 'undefined') { var __KeyboardShortcutsDialog = {}; }


__KeyboardShortcutsDialog.keyboardShortcutModule = function(opt_data, opt_ignored) {
  return '<div class="module"><div class="mod-header"><h3>' + soy.$$escapeHtml(opt_data.title) + '</h3></div><div class="mod-content"><ul class="mod-item"></ul></div></div>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialog.keyboardShortcutModule.soyTemplateName = '__KeyboardShortcutsDialog.keyboardShortcutModule';
}


__KeyboardShortcutsDialog.keyboardShortcutHelpLink = function(opt_data, opt_ignored) {
  return '' + Confluence.Templates.Dialog.customHelpLink({href: '' + ((true == true) ? soy.$$escapeHtml("https://confluence.atlassian.com/display/ConfCloud/Keyboard+Shortcuts%2C+Markdown%2C+and+Autocomplete") : soy.$$escapeHtml("https://confluence.atlassian.com/display/ConfCloud/Keyboard+Shortcuts")), text: '' + soy.$$escapeHtml('View All Shortcuts')});
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialog.keyboardShortcutHelpLink.soyTemplateName = '__KeyboardShortcutsDialog.keyboardShortcutHelpLink';
}


__KeyboardShortcutsDialog.keyboardShortcutEnabledCheckbox = function(opt_data, opt_ignored) {
  return '<form name="shortcut-settings" id="shortcut-settings-form"><input type="checkbox" name="enabled" id="keyboard-shortcut-enabled-checkbox"><label for="keyboard-shortcut-enabled-checkbox">' + soy.$$escapeHtml('Enable General Shortcuts') + '</label></form>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialog.keyboardShortcutEnabledCheckbox.soyTemplateName = '__KeyboardShortcutsDialog.keyboardShortcutEnabledCheckbox';
}


__KeyboardShortcutsDialog.keyboardShortcutPanel = function(opt_data, opt_ignored) {
  return '<div id=' + soy.$$escapeHtml(opt_data.panelId) + '><div class="keyboard-shortcut-dialog-panel-header"></div><div class="shortcutsmenu"></div><div class="keyboard-shortcut-dialog-panel-footer"></div></div>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialog.keyboardShortcutPanel.soyTemplateName = '__KeyboardShortcutsDialog.keyboardShortcutPanel';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.keyboardshortcuts:confluence-keyboard-shortcuts-soy', location = 'js/confluence-keyboard-shortcuts-soy.js' */
define("confluence-keyboard-shortcuts/confluence-keyboard-shortcuts-soy",function(){return __KeyboardShortcutsDialog});
}catch(e){WRMCB(e)};