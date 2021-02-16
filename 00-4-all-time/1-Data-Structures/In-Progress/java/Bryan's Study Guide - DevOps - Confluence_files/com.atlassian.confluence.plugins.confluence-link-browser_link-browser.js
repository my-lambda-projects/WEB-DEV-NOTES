WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-browser', location = 'js/link-browser.js' */
define("confluence-link-browser/link-browser",["ajs","confluence/templates","confluence-link-browser/link-adapter","confluence-link-browser/link-browser-location","jquery"],function(c,t,v,w,l){function u(a){if(!f.prop("disabled")){f.prop("disabled",!0);c.debug("link-browser.js: submit");h.preSubmit&&h.preSubmit();var b=d.getLink();q(a);r.setLink(b)}}function q(a){m.hide().remove();a.bookmarkManager&&a.bookmarkManager.restoreBookmark();c.trigger("closed.link-browser")}function x(a,b){var e,k,d=function(){q(b)},
h=function(){u(b)};e=new c.ConfluenceDialog({width:840,height:590,id:"insert-link-dialog",onCancel:d,onSubmit:h});k=a?"Insert link":"Edit link";a=a?"Insert":"Save";e.addHeader(k);e.addButton(a,h);e.addCancel("Cancel",d);e.addHelpText("Hint: type \"[\" in the editor to see a list of suggested pages and insert a link.");k=l("#insert-link-dialog .dialog-tip");k.attr("title",k.text());
l("#insert-link-dialog .dialog-components .dialog-title").prepend(t.LinkBrowser.helpLink());f=e.get("button:0")[0].item;f.attr("id","link-browser-insert");f.prop("disabled",!0);return e}function y(a,b,e){var k=b.key;b=b.label;var f=k+"-panel",n=t.LinkBrowser[k+"Panel"]({atlToken:c.Meta.get("atl-token")});m.addPanel(b,n,f,f+"-id");a=m.get("panel:"+a);var g=e.tabs[k];g.panelObj=a;g.key=k;g.createPanel({baseElement:l(a[0].body)});a[0].onblur=g.onDeselect;a[0].onselect=function(){var a=!!g.hasBreadcrumbs;
c.debug("Link Browser: on tab select, breadcrumbs enabled: "+a);g.onSelect();d.refresh(a);h=g};return g}function z(){var a=l("#link-browser-tab-items").find("div").map(function(){var a=l(this);return{key:a.text(),weight:a.attr("data-weight"),label:this.title}}).sort(function(a,b){return a.weight-b.weight}),b="template"!==c.Meta.get("content-type");return l.grep(a,function(a,c){return b||"attachments"!==a.key})}function A(a){return{tabs:{},setLink:function(a,e){d.setLink(a,e)},getLink:function(){return d.getLink()},
getSelectedDataTableItem:function(){return l(".data-table:visible tr.selected")},linkValid:function(a){f.prop("disabled",!a)},focusLinkText:function(){d.focusLinkText()||(c.debug("LinkBrowser: focusing submit button"),f.focus())},getLinkText:function(){return d.getLinkText()},isLinkTextVisible:function(){return d.isLinkTextVisible()},hasBreadcrumbs:function(a){return d.hasBreadcrumbs(a)},getLocationPresenter:function(){return d},doSearch:function(a){this.tabs.search.doSearch(a)},getSearchTextField:function(){return this.tabs.search.getSearchTextField()},
moveLocationPanel:function(a){d.moveLocationPanel(a)},restoreLocationPanel:function(){d.restoreLocationPanel()},gotoPanel:function(a){this.popup.gotoPanel(a)},getCurrentPanel:function(){return this.popup.getCurrentPanel()},setWebLinkURL:function(a){var b=this.tabs.weblink;h!=b?c.debug("Cannot set URL "+a+" on hidden Web Link panel"):b.setURL(a)},getWebLinkUrl:function(){var a=this.tabs.weblink;return h!=a?(c.debug("Cannot get URL on hidden Web Link panel"),null):a.getURL()},getTitle:function(){return this.popup.getTitle()},
getSubmitButtonText:function(){return f.text()},isSubmitButtonEnabled:function(){return f.is(":enabled")},isVisible:function(){return this.popup.isVisible()},getAdvancedTextField:function(){var a=this.tabs.advanced;return h!=a?(c.debug("Cannot get link text on hidden advanced panel"),null):a.getLink()},setAdvancedTextField:function(a){var b=this.tabs.advanced;h!=b?c.debug("Cannot set link text on hidden advanced panel"):b.setLink(a)},submit:function(){u(a)},cancel:function(){q(a)}}}function B(a){var b=
A(a),e=a.linkInfo;m=x(e.isNewLink(),a);b.popup=m;c.trigger("dialog-created.link-browser",[b]);d=w(b);d.setLinkBody(e.body);a=a.panelKey;for(var k=z(),f,n=null,g=0,q=k.length;g<q;g++){var p=y(g,k[g],b);0===g&&(f=p);!e.isNewLink()&&l.isFunction(p.handlesLink)&&p.handlesLink(e)?(n=p,p.openedLink=e):a==p.key&&(n=p)}n?b.popup.overrideLastTab():n=f;h=n;m.popup.element.find(".dialog-page-body:first").append(d.getContainer());h.panelObj.select();h.openedLink=null;m.show();c.trigger("dialog-shown.link-browser",
m);return b}var m,d,f,h,r;return{SEARCH_PANEL:"search",ATTACHMENTS_PANEL:"attachments",WEBLINK_PANEL:"weblink",ADVANCED_PANEL:"advanced",open:function(a){l(function(){l('.ffi input[type\x3d"file"]#file_0').fancyFileInput()});if(l(".aui-dialog:visible").length)return null;a=a||{};r=a.linkAdapter||v;a.bookmarkManager&&a.bookmarkManager.storeBookmark();a.linkInfo=a.linkInfo||r.getLink();return a.opener?a.opener(a.linkInfo.alias,a.linkInfo):B(a)},cancel:function(a){q(a)}}});
require("confluence/module-exporter").exportModuleAsGlobal("confluence-link-browser/link-browser","Confluence.Editor.LinkBrowser");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-browser', location = 'templates/link-browser.soy' */
// This file was automatically generated from link-browser.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.LinkBrowser.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.LinkBrowser == 'undefined') { Confluence.Templates.LinkBrowser = {}; }


Confluence.Templates.LinkBrowser.helpLink = function(opt_data, opt_ignored) {
  return '<div class="dialog-help-link"><a href="' + soy.$$escapeHtml("https://confluence.atlassian.com/display/ConfCloud/Links") + '" target="_blank">' + soy.$$escapeHtml('Help') + '</a></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.LinkBrowser.helpLink.soyTemplateName = 'Confluence.Templates.LinkBrowser.helpLink';
}

}catch(e){WRMCB(e)};