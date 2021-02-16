WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:avatar-account-id', location = 'user-select2/avatar-account-id.soy' */
// This file was automatically generated from avatar-account-id.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace CreateContent.avatar.
 */

if (typeof CreateContent == 'undefined') { var CreateContent = {}; }
if (typeof CreateContent.avatar == 'undefined') { CreateContent.avatar = {}; }


CreateContent.avatar.avatarWithNameAccountId = function(opt_data, opt_ignored) {
  return '' + ((opt_data.accountId) ? aui.avatar.avatar({size: opt_data.size, avatarImageUrl: opt_data.avatarImageUrl, accessibilityText: opt_data.displayName, title: opt_data.displayName, extraAttributes: {'data-account-id': opt_data.accountId}}) : (opt_data.userId) ? aui.avatar.avatar({size: opt_data.size, avatarImageUrl: opt_data.avatarImageUrl, accessibilityText: opt_data.displayName, title: opt_data.displayName, extraAttributes: {'data-account-id': opt_data.userId}}) : '') + soy.$$escapeHtml(opt_data.displayName);
};
if (goog.DEBUG) {
  CreateContent.avatar.avatarWithNameAccountId.soyTemplateName = 'CreateContent.avatar.avatarWithNameAccountId';
}

}catch(e){WRMCB(e)};