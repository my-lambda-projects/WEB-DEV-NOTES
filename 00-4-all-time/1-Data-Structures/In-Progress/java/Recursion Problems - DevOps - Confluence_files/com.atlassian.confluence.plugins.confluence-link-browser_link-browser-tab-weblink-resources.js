WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-browser-tab-weblink-resources', location = 'js/link-browser-tab-weblink.js' */
define("confluence-link-browser/link-browser-tab-weblink",["ajs","jquery","confluence-link-browser/link-object"],function(c,l,h){return{dialogCreatedLinkBrowserWeblink:function(n,d){function e(){return l.trim(b.val())}function f(){var a=e();if(!c.Validate.url(a)&&0!==a.indexOf("mailto:")){if(c.Validate.email(a))a="mailto:"+a;else{if(m.test(a))return;a="http://"+a}c.debug("Updating Link Browser Web Link URL to: "+a);b.val(a);a=h.makeExternalLink(a);d.setLink(a)}}var b,g,k,m=/[:/]/;k=d.tabs.weblink=
{createPanel:function(a){g=a.baseElement;b=g.find("input[name\x3d'destination']");b.keyup(function(a){(a=(a=e())?h.makeExternalLink(a):null)&&d.setLink(a)});b.change(f);b.bind("paste",function(){c.debug("Link Browser web link url pasted");setTimeout(f,0)})},onSelect:function(){d.moveLocationPanel(g.find("form"));this.openedLink&&(k.setURL(this.openedLink.attrs.href),d.setLink(this.openedLink));setTimeout(function(){b.focus()})},onDeselect:d.restoreLocationPanel,preSubmit:f,handlesLink:function(a){return!a.isCustomAtlassianContentLink()},
setURL:function(a){b.val(a);b.keyup();b.change()},getURL:e}}}});require("confluence/module-exporter").safeRequire("confluence-link-browser/link-browser-tab-weblink",function(c){require("ajs").bind("dialog-created.link-browser",c.dialogCreatedLinkBrowserWeblink)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-browser-tab-weblink-resources', location = 'templates/link-browser-tab-weblink.soy' */
// This file was automatically generated from link-browser-tab-weblink.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.LinkBrowser.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.LinkBrowser == 'undefined') { Confluence.Templates.LinkBrowser = {}; }


Confluence.Templates.LinkBrowser.weblinkPanel = function(opt_data, opt_ignored) {
  return '<form class="aui" onsubmit="return false;"><div class="field-group"><label id="destination-label" for="weblink-destination">' + soy.$$escapeHtml('Address') + '</label><input type="text" tabindex="0" class="text" id="weblink-destination" name="destination"><div class="web-link-desc description">' + soy.$$escapeHtml('Web, email or any other internet address') + '</div></div></form>';
};
if (goog.DEBUG) {
  Confluence.Templates.LinkBrowser.weblinkPanel.soyTemplateName = 'Confluence.Templates.LinkBrowser.weblinkPanel';
}

}catch(e){WRMCB(e)};