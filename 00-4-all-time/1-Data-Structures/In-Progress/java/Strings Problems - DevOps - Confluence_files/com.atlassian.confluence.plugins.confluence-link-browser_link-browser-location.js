WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-browser-location', location = 'js/link-browser-location.js' */
define("confluence-link-browser/link-browser-location",["jquery","confluence/templates","ajs","confluence/dialog-breadcrumbs"],function(y,z,k,r){return function(A){function l(){return k.escapeHtml(t())}function t(){return d.val()}function u(a){f.closest(".row").toggleClass("hidden",!a);b.toggleClass("has-breadcrumbs",!!a)}function B(a){var b={clearErrors:function(){},error:function(a){},select:function(a){m.update(a,b)}};a={id:a.getResourceId(),type:a.getResourceType()};m.update(a,b)}function v(){return d.is(":visible")}
var b,f,m,c,d,n,w,x,p,g,q,e,h;b=y(z.LinkBrowser.locationPanel());f=b.find("#breadcrumbs-container");m=r.Breadcrumbs(f,r.getBreadcrumbsLegacy);w=b.find(".link-image");x=b.find(".link-mixed");g=b.find("#link-image-filename");p=b.find("#link-mixed-content");n=b.find(".link-text");d=n.find("input");d.change(function(a){a.keyCode=a.keyCode||a.which;a.keyCode&&13!==a.keyCode&&d.removeClass("default-alias")});return{setLink:function(a,b){k.debug("Link Browser: setting link : "+a);var e=a.attrs["data-linked-resource-default-alias"]||
a.getHtml();if(""===l()||d.hasClass("default-alias"))d.addClass("default-alias"),d.val(e);b&&a.getResourceId()&&a.getResourceType()&&B(a);u(b);c=a;A.linkValid(c&&c.isHrefValid())},getLink:function(){if(!c)return null;var a=q;a||((a=l())||(a=c.getDefaultAlias()||c.getHref()),a={html:a});c.body=a;return c},refresh:function(a){c&&u(a)},setLinkBody:function(a){q||(a.isEditable?d.val(a.text):a.isImage?g.text(a.imgName):p.text(a.text),q=a.isEditable?null:a,n.toggleClass("hidden",!a.isEditable),w.toggleClass("hidden",
!a.isImage),x.toggleClass("hidden",a.isEditable||a.isImage))},getContainer:function(){return b},isLinkTextVisible:v,isLinkImageVisible:function(){return g.is(":visible")},isLinkMixedContentVisible:function(){return p.is(":visible")},focusLinkText:function(){return v()?(k.debug("LinkInfoPresenter.focusLinkText focusing alias"),d.select(),!0):!1},getLinkText:l,getRawLinkText:t,getLinkImageName:function(){return g.text()},moveLocationPanel:function(a){e||(e=b.find(".row:not(.hidden) .field-group"),h=
e.parent());a.append(e);b.hide()},restoreLocationPanel:function(){h&&(h.append(e),b.show(),h=e=null)},hasBreadcrumbs:function(a){if(!f.is(":visible"))return!1;var b=a.length,d=f.find("li");if(d.length!==b)return!1;for(var c=0;c<b;c++)if(d.eq(c).text()!==a[c])return!1;return!0}}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-browser-location', location = 'templates/link-browser-location.soy' */
// This file was automatically generated from link-browser-location.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.LinkBrowser.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.LinkBrowser == 'undefined') { Confluence.Templates.LinkBrowser = {}; }


Confluence.Templates.LinkBrowser.locationPanel = function(opt_data, opt_ignored) {
  return '<div id="link-browser-location" class="location-info"><form class="aui"><div class="row hidden field-group"><label class="link-location-label" for="breadcrumbs-link">' + soy.$$escapeHtml('Link location') + '</label><div class="breadcrumbs-container" id="breadcrumbs-link"><div class="breadcrumbs-line"><ol id="breadcrumbs-container" class="breadcrumbs"></ol></div></div></div></form><div class="row link-text"><form class="aui" onsubmit="return false;"><div class="field-group"><label for="alias" id="alias-label">' + soy.$$escapeHtml('Link text') + '</label><input type="text" tabindex="0" class="text" name="alias" id="alias"></div></form></div><div class="row link-image hidden"><div class="readonly"><label for="link-image-filename">' + soy.$$escapeHtml('Link image') + '</label><span id="link-image-filename" class="content-type-attachment-image"></span></div></div><div class="row link-mixed hidden"><div class="readonly"><label for="link-mixed-content">' + soy.$$escapeHtml('Link text') + '</label><span id="link-mixed-content"></span></div></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.LinkBrowser.locationPanel.soyTemplateName = 'Confluence.Templates.LinkBrowser.locationPanel';
}

}catch(e){WRMCB(e)};