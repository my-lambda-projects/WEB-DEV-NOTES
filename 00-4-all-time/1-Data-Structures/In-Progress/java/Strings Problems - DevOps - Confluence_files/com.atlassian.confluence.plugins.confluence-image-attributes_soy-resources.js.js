WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-image-attributes:soy-resources', location = 'soy/image-attributes-panel.soy' */
// This file was automatically generated from image-attributes-panel.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Editor.ImageAttributes.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Editor == 'undefined') { Confluence.Templates.Editor = {}; }
if (typeof Confluence.Templates.Editor.ImageAttributes == 'undefined') { Confluence.Templates.Editor.ImageAttributes = {}; }


Confluence.Templates.Editor.ImageAttributes.content = function(opt_data, opt_ignored) {
  return '<form class="aui" onsubmit="return false;"><div class="field-group"><label for="image-title-attribute">' + soy.$$escapeHtml('Title text') + '</label><input class="text" type="text" id="image-title-attribute" name="image-title-attribute" value="' + ((opt_data.imgTitle) ? soy.$$escapeHtml(opt_data.imgTitle) : '') + '"><div class="description">' + soy.$$escapeHtml('Appears when the cursor hovers over the image') + '</div></div><div class="field-group"><label for="image-alt-attribute">' + soy.$$escapeHtml('Alt text') + '</label><input class="text" type="text" id="image-alt-attribute" name="image-alt-attribute" value="' + ((opt_data.imgAlt) ? soy.$$escapeHtml(opt_data.imgAlt) : '') + '"><div class="description">' + soy.$$escapeHtml('Used by screen readers and when the image cannot be shown') + '</div></div></form>';
};
if (goog.DEBUG) {
  Confluence.Templates.Editor.ImageAttributes.content.soyTemplateName = 'Confluence.Templates.Editor.ImageAttributes.content';
}

}catch(e){WRMCB(e)};