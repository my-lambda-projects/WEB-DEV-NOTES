WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-browser-tab-search-resources', location = 'js/link-browser-tab-search.js' */
define("confluence-link-browser/link-browser-tab-search","jquery ajs document confluence/page-location confluence-rest/confluence-rest confluence-link-browser/link-object confluence/autocomplete-content".split(" "),function(d,b,r,t,n,p,u){return{dialogCreatedLinkBrowserSearch:function(r,k){var c,e,f,q,v=n.REST.getBaseUrl()+"search.json",l=function(a,b){p.isLink(a)||(a=p.fromREST(a));b&&c.val(a.attrs["data-linked-resource-default-alias"]);k.setLink(a,!0);k.focusLinkText()},m=function(a){b.debug("link-browser-tab-search.js: doing search");
c.trigger("hide.autocomplete");var g=d.trim(c.val());g?(f.loading(),b.getJSONWrap({url:v,data:{search:"site",query:g,spaceKey:e.val()},successCallback:function(b){d.isFunction(a)?(f.update(b.result),a()):f.updateAndSelect(b.result);c.trigger("hide.autocomplete")},messageHandler:q})):d.isFunction(a)&&a()};k.tabs.search={hasBreadcrumbs:!0,createPanel:function(a){var g=a.baseElement;c=g.find("#link-search-text");e=g.find("#search-panel-space");var h=t.get();e.find("option:eq(1)").text(h.spaceName).val(h.spaceKey);
e.change(function(){c.attr("data-spacekey",e.val());c.trigger("clearCache.autocomplete")});u.autocompleteSearch(c.parent());c.bind("selected.autocomplete-content",function(a,b){b.searchFor?m():(f.clear(),l(b.content,!1))});h=[b.SelectGrid.Column({key:"title",heading:"Title",getHref:function(a){return n.REST.findLink(a.link)},getInnerClass:function(a){return a.iconClass||"content-type-"+a.type}}),b.SelectGrid.Column({key:"space",heading:"Space",
getText:function(a){return a.space&&a.space.title||""}}),b.SelectGrid.Column({key:"last-modified",heading:"Last Modified",getText:function(a){return a.lastModifiedDate&&a.lastModifiedDate.friendly||""},getTitle:function(a){return a.lastModifiedDate&&a.lastModifiedDate.date||""}})];q=b.MessageHandler({baseElement:a.baseElement.find(".message-panel")});f=new b.ResultGrid({baseElement:a.baseElement,columns:h,selectionCallback:function(a,b){l(b)},noResultMessage:"No search results found.",
dontShiftFocus:function(){return d(c).add(e).is(":focus")}});g.find(".search-form").submit(function(){m();return!1}).keydown(function(a){13!==a.keyCode||d(".aui-dropdown:visible .active",this).length||(d("#search-panel-button").focus(),a.stopPropagation())})},onSelect:function(){b.debug("Link Browser Search panel selected");var a=this.openedLink;a?(b.debug("Link Browser Search panel setting link info"),l(a,!0)):c.focus()},handlesLink:function(a){return a.isCustomAtlassianContentLink()&&!a.hasAnchor()&&
!a.isShortcutLink()&&!a.isToAttachmentOnSamePage(b.Meta.get("content-id"))},doSearch:function(a,b){c.val(a);m(b)},isResultGridVisible:function(){return f.isVisible()},getSearchTextField:function(){return c}}}}});require("confluence/module-exporter").safeRequire("confluence-link-browser/link-browser-tab-search",function(d){require("ajs").bind("dialog-created.link-browser",d.dialogCreatedLinkBrowserSearch)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-browser-tab-search-resources', location = 'templates/link-browser-tab-search.soy' */
// This file was automatically generated from link-browser-tab-search.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.LinkBrowser.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.LinkBrowser == 'undefined') { Confluence.Templates.LinkBrowser = {}; }


Confluence.Templates.LinkBrowser.searchPanel = function(opt_data, opt_ignored) {
  return '<form class="aui search-form" onsubmit="return false;"><fieldset class="inline"><div class="search-input"><label for="link-search-text" id="linkSearch-label" class="assistive">' + soy.$$escapeHtml('Search') + '</label><input id="link-search-text" type="text" tabindex="0" class="text autocomplete-search" name="linkSearch" autocomplete="off" data-search-link-message="' + soy.$$escapeHtml('Search for \x26lsquo;{0}\x26rsquo;') + '"></div><select tabindex="0" class="search-space select" id="search-panel-space"><option value="">' + soy.$$escapeHtml('All content') + '</option><option value=""> </option></select><button type="submit" tabindex="0" class="aui-button" id="search-panel-button">' + soy.$$escapeHtml('Search') + '</button></fieldset></form><div class="message-panel hidden"></div><div id="search-results-table" class="data-table hidden"></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.LinkBrowser.searchPanel.soyTemplateName = 'Confluence.Templates.LinkBrowser.searchPanel';
}

}catch(e){WRMCB(e)};