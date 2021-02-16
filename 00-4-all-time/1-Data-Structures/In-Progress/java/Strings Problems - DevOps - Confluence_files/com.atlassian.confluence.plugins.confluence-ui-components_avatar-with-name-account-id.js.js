WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:avatar-with-name-account-id', location = '/soy/avatar-with-name-account-id.soy' */
// This file was automatically generated from avatar-with-name-account-id.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.UI.Components.UserSelect2.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.UI == 'undefined') { Confluence.UI = {}; }
if (typeof Confluence.UI.Components == 'undefined') { Confluence.UI.Components = {}; }
if (typeof Confluence.UI.Components.UserSelect2 == 'undefined') { Confluence.UI.Components.UserSelect2 = {}; }


Confluence.UI.Components.UserSelect2.avatarWithNameAccountId = function(opt_data, opt_ignored) {
  return '' + aui.avatar.avatar({size: opt_data.size, avatarImageUrl: opt_data.avatarImageUrl, accessibilityText: opt_data.displayName, title: opt_data.displayName, extraAttributes: {'data-account-id': opt_data.userId}}) + soy.$$escapeHtml(opt_data.displayName);
};
if (goog.DEBUG) {
  Confluence.UI.Components.UserSelect2.avatarWithNameAccountId.soyTemplateName = 'Confluence.UI.Components.UserSelect2.avatarWithNameAccountId';
}

}catch(e){WRMCB(e)};