WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.keyboardshortcuts:confluence-keyboard-shortcuts-autoformat-tab-soy', location = 'templates/shortcut-dialog-tab-autoformat.soy' */
// This file was automatically generated from shortcut-dialog-tab-autoformat.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace __KeyboardShortcutsDialogAutoformat.
 */

if (typeof __KeyboardShortcutsDialogAutoformat == 'undefined') { var __KeyboardShortcutsDialogAutoformat = {}; }


__KeyboardShortcutsDialogAutoformat.configureAutocomplete = function(opt_data, opt_ignored) {
  return '<div id="keyboard-shortcut-autocomplete-message">' + soy.$$escapeHtml('To configure Autocomplete,') + ' <a target="_blank" href=' + soy.$$escapeHtml(opt_data.href) + '>' + soy.$$escapeHtml('go to your editor settings') + '</a></div>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.configureAutocomplete.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.configureAutocomplete';
}


__KeyboardShortcutsDialogAutoformat.helpItem = function(opt_data, opt_ignored) {
  return '<li class="item-details"><span class="item-description wiki-content">' + opt_data.output + '</span><span class="' + opt_data.actionClass + ' item-action">' + opt_data.type + '</span></li>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.helpItem.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.helpItem';
}


__KeyboardShortcutsDialogAutoformat.simpleHelpItem = function(opt_data, opt_ignored) {
  return '' + __KeyboardShortcutsDialogAutoformat.helpItem({output: opt_data.output, type: '<code>' + opt_data.type + '</code>', actionClass: ''});
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.simpleHelpItem.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.simpleHelpItem';
}


__KeyboardShortcutsDialogAutoformat.tableHelpItem = function(opt_data, opt_ignored) {
  return '' + __KeyboardShortcutsDialogAutoformat.helpItem({output: opt_data.output, type: '<code>' + opt_data.type + '</code>', actionClass: 'table-action'});
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.tableHelpItem.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.tableHelpItem';
}


__KeyboardShortcutsDialogAutoformat.styleHelpItem = function(opt_data, opt_ignored) {
  return '' + __KeyboardShortcutsDialogAutoformat.helpItem({output: opt_data.output, type: '<code>' + opt_data.type + '</code>', actionClass: 'style-action'});
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.styleHelpItem.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.styleHelpItem';
}


__KeyboardShortcutsDialogAutoformat.keyboardShortcutItem = function(opt_data, opt_ignored) {
  return '' + __KeyboardShortcutsDialogAutoformat.helpItem({output: '' + soy.$$escapeHtml(opt_data.output), type: '<kbd class="regular-key">' + soy.$$escapeHtml(opt_data.type) + '</kbd>', actionClass: ''});
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.keyboardShortcutItem.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.keyboardShortcutItem';
}


__KeyboardShortcutsDialogAutoformat.emoticonHelpItem = function(opt_data, opt_ignored) {
  return '' + __KeyboardShortcutsDialogAutoformat.simpleHelpItem({output: '<img src=' + soy.$$escapeHtml(opt_data.src) + '></img>', type: opt_data.type});
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.emoticonHelpItem.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.emoticonHelpItem';
}


__KeyboardShortcutsDialogAutoformat.boldDescription = function(opt_data, opt_ignored) {
  return '<b>' + soy.$$escapeHtml('Bold') + '</b> ' + soy.$$escapeHtml('text');
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.boldDescription.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.boldDescription';
}


__KeyboardShortcutsDialogAutoformat.underlineDescription = function(opt_data, opt_ignored) {
  return '<span style="text-decoration: underline;">' + soy.$$escapeHtml('Underline') + '</span> ' + soy.$$escapeHtml('text');
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.underlineDescription.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.underlineDescription';
}


__KeyboardShortcutsDialogAutoformat.strikethroughDescription = function(opt_data, opt_ignored) {
  return '<span style="text-decoration: line-through;">' + soy.$$escapeHtml('Strikethrough') + '</span> ' + soy.$$escapeHtml('text');
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.strikethroughDescription.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.strikethroughDescription';
}


__KeyboardShortcutsDialogAutoformat.italicDescription = function(opt_data, opt_ignored) {
  return '<em>' + soy.$$escapeHtml('Italic') + '</em> ' + soy.$$escapeHtml('text');
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.italicDescription.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.italicDescription';
}


__KeyboardShortcutsDialogAutoformat.monospaceDescription = function(opt_data, opt_ignored) {
  return '<code>' + soy.$$escapeHtml('Monospace') + '</code> ' + soy.$$escapeHtml('text');
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.monospaceDescription.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.monospaceDescription';
}


__KeyboardShortcutsDialogAutoformat.tableDescription = function(opt_data, opt_ignored) {
  return '<table class="confluenceTable"><tbody><tr><td class="confluenceTd">' + soy.$$escapeHtml('first cell') + '</td><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">&nbsp;</td></tr></tbody></table>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.tableDescription.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.tableDescription';
}


__KeyboardShortcutsDialogAutoformat.tableWithHeadingsDiscriptions = function(opt_data, opt_ignored) {
  return '<table class="confluenceTable"><tbody><tr><th class="confluenceTh">' + soy.$$escapeHtml('heading') + '</th><th class="confluenceTh">' + soy.$$escapeHtml('heading') + '</th></tr><tr><td class="confluenceTd">&#8203;</td><td class="confluenceTd">&#8203;</td></tr></tbody></table>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.tableWithHeadingsDiscriptions.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.tableWithHeadingsDiscriptions';
}


__KeyboardShortcutsDialogAutoformat.h1Description = function(opt_data, opt_ignored) {
  return '<h1>' + soy.$$escapeHtml('Heading') + '</h1>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.h1Description.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.h1Description';
}


__KeyboardShortcutsDialogAutoformat.h3Description = function(opt_data, opt_ignored) {
  return '<h3>' + soy.$$escapeHtml('Heading') + '</h3>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.h3Description.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.h3Description';
}


__KeyboardShortcutsDialogAutoformat.bqDescription = function(opt_data, opt_ignored) {
  return '<blockquote>' + soy.$$escapeHtml('Quote') + '</blockquote>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.bqDescription.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.bqDescription';
}


__KeyboardShortcutsDialogAutoformat.numberedListDescription = function(opt_data, opt_ignored) {
  return '<ol><li>' + soy.$$escapeHtml('list') + '</li></ol>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.numberedListDescription.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.numberedListDescription';
}


__KeyboardShortcutsDialogAutoformat.bulletedListDescription = function(opt_data, opt_ignored) {
  return '<ul><li>' + soy.$$escapeHtml('bullets') + '</li></ul>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.bulletedListDescription.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.bulletedListDescription';
}


__KeyboardShortcutsDialogAutoformat.inlineTaskListDescription = function(opt_data, opt_ignored) {
  return '<ul class="inline-task-list"><li>task</li></ul>';
};
if (goog.DEBUG) {
  __KeyboardShortcutsDialogAutoformat.inlineTaskListDescription.soyTemplateName = '__KeyboardShortcutsDialogAutoformat.inlineTaskListDescription';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.keyboardshortcuts:confluence-keyboard-shortcuts-autoformat-tab-soy', location = 'js/shortcut-dialog-tab-autoformat-soy.js' */
define("confluence-keyboard-shortcuts/shortcut-dialog-tab-autoformat-soy",function(){return __KeyboardShortcutsDialogAutoformat});
}catch(e){WRMCB(e)};