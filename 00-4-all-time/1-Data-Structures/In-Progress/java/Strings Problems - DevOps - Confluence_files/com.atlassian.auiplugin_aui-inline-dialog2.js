WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.auiplugin:aui-inline-dialog2', location = 'src/soy/inline-dialog2.soy' */
// This file was automatically generated from inline-dialog2.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace aui.inlineDialog2.
 */

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.inlineDialog2 == 'undefined') { aui.inlineDialog2 = {}; }


aui.inlineDialog2.inlineDialog2 = function(opt_data, opt_ignored) {
  return '<aui-inline-dialog' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="' + aui.renderExtraClasses(opt_data) + '"' + ((opt_data.alignment) ? ' alignment="' + soy.$$escapeHtml(opt_data.alignment) + '"' : '') + ((opt_data.open) ? ' open' : '') + ((opt_data.persistent) ? ' persistent' : '') + ((opt_data.respondsTo) ? ' responds-to="' + soy.$$escapeHtml(opt_data.respondsTo) + '"' : '') + aui.renderExtraAttributes(opt_data) + '>' + ((opt_data.content) ? soy.$$filterNoAutoescape(opt_data.content) : '') + '</aui-inline-dialog>';
};
if (goog.DEBUG) {
  aui.inlineDialog2.inlineDialog2.soyTemplateName = 'aui.inlineDialog2.inlineDialog2';
}


aui.inlineDialog2.trigger = function(opt_data, opt_ignored) {
  return '' + aui.trigger.trigger(soy.$$augmentMap(opt_data, {showIcon: opt_data.showIcon ? opt_data.showIcon : false}));
};
if (goog.DEBUG) {
  aui.inlineDialog2.trigger.soyTemplateName = 'aui.inlineDialog2.trigger';
}

}catch(e){WRMCB(e)};