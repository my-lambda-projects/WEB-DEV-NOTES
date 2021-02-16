WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:create-from-template-resources', location = 'com/atlassian/confluence/plugins/createcontent/soy/create-from-template-macro.soy' */
// This file was automatically generated from create-from-template-macro.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Blueprints.CreateFromTemplate.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Blueprints == 'undefined') { Confluence.Templates.Blueprints = {}; }
if (typeof Confluence.Templates.Blueprints.CreateFromTemplate == 'undefined') { Confluence.Templates.Blueprints.CreateFromTemplate = {}; }


Confluence.Templates.Blueprints.CreateFromTemplate.macroTemplate = function(opt_data, opt_ignored) {
  return '<button class=\'aui-button create-from-template-button\'' + ((! opt_data.hasCreatePermission) ? 'aria-disabled=\'true\' data-tooltip="' + soy.$$escapeHtml('Sorry, you don\x27t have permission to create content. Contact your space administrator to request access.') + '"' : '') + 'data-space-key=\'' + soy.$$escapeHtml(opt_data.spaceKey) + '\' href=\'' + soy.$$escapeHtml(opt_data.createContentUrl) + '\'' + ((opt_data.title) ? 'data-title=\'' + soy.$$escapeHtml(opt_data.title) + '\'' : '') + ((opt_data.templateId) ? 'data-template-id=\'' + soy.$$escapeHtml(opt_data.templateId) + '\'' : '') + ((opt_data.contentBlueprintId) ? 'data-content-blueprint-id=\'' + soy.$$escapeHtml(opt_data.contentBlueprintId) + '\'' : '') + 'disabled=\'true\' >' + soy.$$escapeHtml(opt_data.buttonLabel) + '</button>' + soy.$$escapeHtml(webResourceManager_requireResource('com.atlassian.confluence.plugins.confluence-create-content-plugin:create-from-template-resources'));
};
if (goog.DEBUG) {
  Confluence.Templates.Blueprints.CreateFromTemplate.macroTemplate.soyTemplateName = 'Confluence.Templates.Blueprints.CreateFromTemplate.macroTemplate';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:create-from-template-resources', location = 'com/atlassian/confluence/plugins/createcontent/js/create-from-template-macro.js' */
define("confluence-plugins/create-content/create-from-template",["jquery","skate","wrm","confluence/legacy"],function(d,a,b,g){var c="create-from-template-button";function f(i){var j=d(i);if(j.attr("aria-disabled")=="true"){var h={live:true,gravity:"n",title:"data-tooltip",delayIn:250,delayOut:0};j.tooltip(h)}else{j.click(function(k){j.addClass("launching-dialog");g.Blueprint.loadDialogAndOpenTemplate(j.data());return false})}}function e(h){var i=d(h).spin();d(h).click(function(j){j.preventDefault()});b.require(["wr!com.atlassian.confluence.plugins.confluence-create-content-plugin:resources"],function(){f(h)}).always(function(){h.disabled=false;i.spinStop()})}a(c,{type:a.types.CLASS,created:e})});require("confluence/module-exporter").safeRequire("confluence-plugins/create-content/create-from-template");
}catch(e){WRMCB(e)};