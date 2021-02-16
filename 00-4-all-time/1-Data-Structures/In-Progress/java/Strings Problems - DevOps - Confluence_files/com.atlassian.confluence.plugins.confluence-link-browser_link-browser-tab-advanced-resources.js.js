WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-browser-tab-advanced-resources', location = 'js/link-browser-tab-advanced.js' */
define("confluence-link-browser/link-browser-tab-advanced",["jquery","ajs","confluence/api/constants","confluence-link-browser/link-object"],function(g,d,m,n){return{dialogCreatedLinkBrowserAdvanced:function(r,e){var b,f,h,l,p=function(a,c){a=g(a);a.length&&(c=a.find("a:first"),c.length?c.hasClass("unresolved")?(a=c.attr("shortcut-key"),c=c.attr("data-space-key"),a?f.text(d.format("{0} is not a recognised shortcut",a)):c&&f.text(d.format("{0} is not a recognised space",
c))):(a=n.fromNode(c[0],b.val()),e.setLink(a)):f.text("The markup provided is not valid link markup"))},q=function(a,c,b){d.debug("Error during conversion: textStatus \x3d "+c+", errorThrown \x3d "+b);f.text("An internal server error occurred")},k=e.tabs.advanced={createPanel:function(a){h=a.baseElement;b=h.find("input[name\x3d'advanced-link']");f=h.find("div[name\x3d'advanced-error']");h.find("form").keydown(function(a){13!==a.keyCode||e.isSubmitButtonEnabled()||
a.preventDefault()});b.keyup(function(a){clearTimeout(l);f.text("");b.val()&&(l=setTimeout(function(){var a={wiki:"["+b.val()+"]",entityId:d.Meta.get("content-id"),spaceKey:d.Meta.get("space-key")};g.ajax({type:"POST",contentType:"application/json; charset\x3dutf-8",url:m.CONTEXT_PATH+"/rest/tinymce/1/wikixhtmlconverter",data:g.toJSON(a),dataType:"text",success:p,error:q,timeout:1E4})},200))})},setLink:function(a){b.val(a);b.keyup();b.change()},getLink:function(){return b.val()},onSelect:function(){e.moveLocationPanel(h.find("form"));
this.openedLink&&(this.openedLink.isShortcutLink()?k.setLink(this.openedLink.getShortcut()):this.openedLink.getResourceId()?k.setLink(this.openedLink.getDefaultAlias()):k.setLink("#"+this.openedLink.getAnchor()),e.setLink(this.openedLink));setTimeout(function(){b.focus()})},onDeselect:function(){e.restoreLocationPanel()},handlesLink:function(a){return a.isShortcutLink()||a.hasAnchor()}}}}});
require("confluence/module-exporter").safeRequire("confluence-link-browser/link-browser-tab-advanced",function(g){require("ajs").bind("dialog-created.link-browser",g.dialogCreatedLinkBrowserAdvanced)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-browser-tab-advanced-resources', location = 'templates/link-browser-tab-advanced.soy' */
// This file was automatically generated from link-browser-tab-advanced.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.LinkBrowser.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.LinkBrowser == 'undefined') { Confluence.Templates.LinkBrowser = {}; }


Confluence.Templates.LinkBrowser.advancedPanel = function(opt_data, opt_ignored) {
  return '<form class="aui" onsubmit="return false;"><div class="advanced-desc title">' + soy.$$filterNoAutoescape(AJS.format('Here you can insert a link into the page using \x3ca href\x3d\x22{0}\x22 target\x3d\x22_blank\x22\x3ewiki markup\x3c/a\x3e.',"https://confluence.atlassian.com/display/ConfCloud/Links")) + '</div><div class="field-group"><label id="advanced-label" for="advanced-link">' + soy.$$escapeHtml('Link') + '</label><input type="text" tabindex="0" class="text" id="advanced-link" name="advanced-link"><div class="advanced-desc description">' + soy.$$escapeHtml('To insert a link to a new page, type in the desired page title.') + '<br/>' + soy.$$escapeHtml('To insert an anchor link, type #anchorname.') + '</div><div name="advanced-error" class="advanced-error error"></div></div></form>';
};
if (goog.DEBUG) {
  Confluence.Templates.LinkBrowser.advancedPanel.soyTemplateName = 'Confluence.Templates.LinkBrowser.advancedPanel';
}

}catch(e){WRMCB(e)};