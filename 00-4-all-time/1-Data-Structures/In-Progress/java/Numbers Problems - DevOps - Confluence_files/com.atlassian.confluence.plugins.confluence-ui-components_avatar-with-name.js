WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:avatar-with-name', location = '/soy/avatar-with-name.soy' */
// This file was automatically generated from avatar-with-name.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.UI.Components.UserGroupSelect2.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.UI == 'undefined') { Confluence.UI = {}; }
if (typeof Confluence.UI.Components == 'undefined') { Confluence.UI.Components = {}; }
if (typeof Confluence.UI.Components.UserGroupSelect2 == 'undefined') { Confluence.UI.Components.UserGroupSelect2 = {}; }


Confluence.UI.Components.UserGroupSelect2.avatarWithName = function(opt_data, opt_ignored) {
  return '' + aui.avatar.avatar({size: opt_data.size, avatarImageUrl: opt_data.avatarImageUrl, accessibilityText: opt_data.displayName, title: opt_data.displayName, extraAttributes: {'data-username': opt_data.userId}}) + soy.$$escapeHtml(opt_data.displayName);
};
if (goog.DEBUG) {
  Confluence.UI.Components.UserGroupSelect2.avatarWithName.soyTemplateName = 'Confluence.UI.Components.UserGroupSelect2.avatarWithName';
}

}catch(e){WRMCB(e)};