WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-browser-tab-attachment-resources', location = 'js/link-browser-tab-attachment.js' */
define("confluence-link-browser/link-browser-tab-attachment",["jquery","ajs","confluence-link-browser/link-object","confluence/attachment-uploader","confluence-rest/confluence-rest"],function(g,a,n,p,f){return{dialogCreatedLinkBrowserAttachment:function(t,h){var q=f.REST.makeUrl("content/"+a.Meta.get("attachment-source-content-id")+"/attachments.json"),k,l,m,e,r=function(a,b){var c=a.baseElement.find(".attach-file-form");return g.extend({getUploaderController:function(){return p({baseElement:c},function(a){return{onUploadSuccess:function(a){for(var c=
0,b=a.length;c<b;c++)a[c].type="attachment";e.prependAndSelect(a)}}})}},b&&b(a))};h.tabs.attachments={hasBreadcrumbs:!1,createPanel:function(d,b){k=r(d,b);l=k.getUploaderController(d);m=l.getMessageHandler();b=[a.SelectGrid.Column({key:"title",heading:"Name",getHref:function(a){return a.link?f.REST.findLink(a.link):a.url},getInnerClass:function(a){return a.iconClass}}),a.SelectGrid.Column({key:"size",heading:"Size",getText:function(a){return a.niceFileSize}}),
a.SelectGrid.Column({key:"comment",heading:"Comment"})];e=new a.ResultGrid({baseElement:d.baseElement,columns:b,selectionCallback:function(c,b){c=n.fromREST(b);c.attrs["data-linked-resource-container-id"]=a.Meta.get("content-id");if(g.isArray(b.link))for(var d=0,e=b.link.length;d<e;d++){var f=b.link[d];"download"===f.rel&&(c.attrs.href=f.href)}h.setLink(c);h.focusLinkText()},noResultMessage:"There are no files on this page."})},onSelect:function(){var d=
this.openedLink,b=h.getLink();e.loading();a.getJSONWrap({url:q,messageHandler:m,successCallback:function(c){e.update(c.attachment);b?"attachment"==b.getResourceType()&&e.select(b.getResourceId()):d?e.select(d.getResourceId()):c.attachment.length&&e.select(c.attachment[0].id);a.debug("Loaded attachments")}})},handlesLink:function(d){return d.isToAttachmentOnSamePage(a.Meta.get("content-id"))}}}}});
require("confluence/module-exporter").safeRequire("confluence-link-browser/link-browser-tab-attachment",function(g){var a=require("ajs");"template"!==a.Meta.get("content-type")&&a.bind("dialog-created.link-browser",g.dialogCreatedLinkBrowserAttachment)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-browser-tab-attachment-resources', location = 'templates/link-browser-tab-attachment.soy' */
// This file was automatically generated from link-browser-tab-attachment.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.LinkBrowser.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.LinkBrowser == 'undefined') { Confluence.Templates.LinkBrowser = {}; }


Confluence.Templates.LinkBrowser.attachmentsPanel = function(opt_data, opt_ignored) {
  return '<div class="attach-file-form"><form method="post" enctype="multipart/form-data" id="attachments-attachfile-form" action="' + soy.$$escapeHtml("/wiki") + '/pages/attachfile.action" class="aui"><p>' + soy.$$escapeHtml('Link to a file that is attached to this page or attach a new one.') + '</p><div class="upload-field field-group"><label for="file_0">' + soy.$$escapeHtml('Upload file') + '</label><label id="fancy-file-upload" class="ffi" data-ffi-button-text="Browse"><input type="file" name="file_0" id="file_0"></label><input type="hidden" name="minorEdit_0" value="true"></div><input type="hidden" name="atl_token" value="' + soy.$$escapeHtml(opt_data.atlToken) + '" /></form><div class="upload-in-progress upload-field hidden">' + soy.$$escapeHtml('Upload in progress\u2026') + '</div><div class="warning"><ul class="hidden message-panel"></ul></div></div><div class="message-panel hidden"></div><div id="attachments-table" class="attachment-list data-table"></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.LinkBrowser.attachmentsPanel.soyTemplateName = 'Confluence.Templates.LinkBrowser.attachmentsPanel';
}

}catch(e){WRMCB(e)};