WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.editor:panel-components', location = 'files/file-item/file-item.soy' */
// This file was automatically generated from file-item.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.File.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.File == 'undefined') { Confluence.Templates.File = {}; }


Confluence.Templates.File.fileDialogListItem = function(opt_data, opt_ignored) {
  return '<li class="attached-file loading" data-attachment-id="' + soy.$$escapeHtml(opt_data.file.id) + '" data-owner-id="' + soy.$$escapeHtml(opt_data.file.ownerId) + '" data-file-name="' + soy.$$escapeHtml(opt_data.file.fileName) + '"><div class="file-container" title="' + soy.$$escapeHtml(opt_data.tooltip) + '">' + ((opt_data.file.isImage) ? '<img class="thumbnail hidden" src="' + soy.$$escapeHtml(opt_data.file.nonceUrl) + '" ><a href="' + soy.$$escapeHtml(opt_data.file.downloadUrl) + '" class="abs-icon zoom">Zoom</a><p class="hidden image-preview-throbber">&nbsp;</p>' : (opt_data.file.isPreviewable) ? '<span class="thumbnail ' + soy.$$escapeHtml(opt_data.file.iconClass) + '" ><i class="aui-icon size-48 svg-icon ' + soy.$$escapeHtml(opt_data.file.iconAUIClass) + '">File</i></span><a href="' + soy.$$escapeHtml(opt_data.file.downloadUrl) + '" class="abs-icon zoom">Zoom</a><p class="hidden image-preview-throbber">&nbsp;</p>' : '<span class="thumbnail ' + soy.$$escapeHtml(opt_data.file.iconClass) + '" ><i class="aui-icon size-48 svg-icon ' + soy.$$escapeHtml(opt_data.file.iconAUIClass) + '">File</i></span>') + '<i class="abs-icon select">Select</i></div><span class="caption filename" title="' + soy.$$escapeHtml(opt_data.file.fileName) + '">' + soy.$$filterNoAutoescape(opt_data.highlightedImageNameContent) + '</span>' + ((opt_data.highlightedParentTitleContent) ? '<span class="caption owner-title" title="' + soy.$$escapeHtml(opt_data.file.parentTitle) + '">' + soy.$$filterNoAutoescape(opt_data.highlightedParentTitleContent) + '</span>' : '') + '</li>';
};
if (goog.DEBUG) {
  Confluence.Templates.File.fileDialogListItem.soyTemplateName = 'Confluence.Templates.File.fileDialogListItem';
}


Confluence.Templates.File.fileDialogListItemPlaceHolder = function(opt_data, opt_ignored) {
  return '<li class="attached-file loading" data-attachment-id="' + soy.$$escapeHtml(opt_data.file.id) + '" data-file-name="' + soy.$$escapeHtml(opt_data.file.fileName) + '"><div class="file-container" title="' + soy.$$escapeHtml(opt_data.file.fileName) + '">' + ((opt_data.file.isImage && opt_data.file.url) ? '<img class="thumbnail" src="' + soy.$$escapeHtml(opt_data.file.url) + '">' : '<span class="thumbnail"><i class="aui-icon size-48 svg-icon ' + soy.$$escapeHtml(opt_data.file.iconAUIClass) + '">File</i></span>') + '<div id="docs-progress-bar-' + soy.$$escapeHtml(opt_data.file.fileId) + '" class="aui-progress-indicator"><span class="aui-progress-indicator-value"></span></div><div class="overlay"></div><i class="aui-icon aui-icon-small aui-iconfont-close-dialog abs-icon cancel">Cancel</i></div><span class="caption filename" title="' + soy.$$escapeHtml(opt_data.file.fileName) + '">' + soy.$$escapeHtml(opt_data.file.fileName) + '</span><span class="caption owner-title hidden" title=""></span></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.File.fileDialogListItemPlaceHolder.soyTemplateName = 'Confluence.Templates.File.fileDialogListItemPlaceHolder';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:panel-components', location = 'files/file-item/file-item-model.js' */
define("confluence-editor/files/file-item/file-item-model","backbone ajs underscore plupload confluence-editor/utils/file-types-utils confluence-rest/confluence-rest confluence/api/constants".split(" "),function(e,f,g,c,h,i,d){return e.Model.extend({defaults:{id:-1,ownerId:-1,fileName:"",nonceUrl:"",isImage:false,isFilePlaceHolder:false,isSelect:false,thumbnailUrl:"",downloadUrl:""},initialize:function(){var a=this;this._findDownloadUrl();this._findThumbnailUrl();this.set("fileName",this.getFileName());
this.set("nonceUrl",this.getNonceUrl());this.set("isImage",this.isImage());this.set("isPreviewable",this.isPreviewable());this.get("attachmentId")&&this.set("id",this.get("attachmentId"));this.get("isFilePlaceHolder")&&this.set("id",this.get("fileId"));this.listenTo(this,"change:link",function(){a.set("nonceUrl",a.getNonceUrl());a._findDownloadUrl()});this.set("iconAUIClass",this._parseFileNameToAuiIconClass(this.get("fileName")))},isImage:function(){return this.get("isImage")?true:!!this.get("thumbnailUrl")},
isPreviewable:function(){return(this.get("niceType")||"").toLocaleLowerCase()==="pdf document"||this.isImage()},getFileName:function(){return this.get("fileName")||this.get("name")||""},getDestinationUrl:function(){return i.REST.wikiLink(this.attributes).destination},getNonceUrl:function(){var a=this.get("thumbnailUrl");if(a.indexOf("modificationDate")>=0)return a;var b=this.get("lastModifiedDate"),b=b?b.date:+new Date,b=encodeURIComponent(b);if(a){b=(a.indexOf("?")+1?"&":"?")+"nonce="+b;a=a+b}return a},
getRelativeUrl:function(a){if(!a)return a;if(a.indexOf(d.BASE_URL)===0){a=a.replace(d.BASE_URL,"");a=f.contextPath()+a}return a},_findThumbnailUrl:function(){!this.get("thumbnailUrl")&&this.get("thumbnailLink")&&this.set("thumbnailUrl",this.getRelativeUrl(this.get("thumbnailLink").href))},_findDownloadUrl:function(){var a=this.get("link");if(!this.get("downloadUrl")&&a){a=g.findWhere(a,{rel:"download"}).href;this.set("downloadUrl",this.getRelativeUrl(a))}},_getFileExtension:function(a){return a.substr(a.lastIndexOf(".")+
1)},_parseFileNameToAuiIconClass:function(a){a=typeof c!=="undefined"?c.mimeTypes[this._getFileExtension(a)]:"";return h.getAUIIconFromMime(a)}})});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/files/file-item/file-item-model","Confluence.Editor.FileDialog.FileItemModel");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:panel-components', location = 'files/file-item/file-item-view.js' */
define("confluence-editor/files/file-item/file-item-view","backbone confluence/templates confluence/highlighter raphael underscore wrm jquery".split(" "),function(f,g,h,i,e,j,d){return f.View.extend({template:g.File.fileDialogListItem,model:null,initialize:function(a){var b=this;this.eventListener=a.eventListener;this.model=a.model;this.showContainerInfo=a.showContainerInfo;this.highlighter=a.highlighter;this.listenTo(this.model,"change:isSelect",function(){b.$el.toggleClass("selected",b.model.get("isSelect"))})},
render:function(){var a=this.highlighter||new h,b=this.model.get("space"),c=this.model.getFileName(),a={file:this.model.attributes,tooltip:this.showContainerInfo&&b?c+" ("+b.name+")":c,highlightedImageNameContent:a.highlight(c),highlightedParentTitleContent:this.showContainerInfo?a.highlight(this.model.attributes.parentTitle):null};this.$el=d(this.template(a));this.el=this.$el[0];this.delegateEvents();this.$el.find(".file-container").tooltip({aria:true});this.$el.attr("data-destination",this.model.getDestinationUrl());
this.model.get("isImage")?this._renderLoadingSpinner():this.$el.removeClass("loading");this.model.get("isPreviewable")&&this._renderPreviewButton();return this},_renderPreviewButton:function(){this.$(".zoom").on("click",e.bind(function(a){a.preventDefault();a={src:this.model.get("downloadUrl"),thumbnail:this.model.get("nonceUrl")||this.model.get("downloadUrl"),type:this.model.get("contentType"),rank:0,title:this.model.getFileName(),id:this.model.get("id"),ownerId:this.model.get("ownerId"),version:this.model.get("version")};
this._setupAndShowPreviewer(a)},this))},_setupAndShowPreviewer:function(a){var b={viewMode:"simple",openPreviewCallback:function(){d("#insert-image-dialog").hide();d(".aui-blanket").hide()},closePreviewCallback:function(){d("#insert-image-dialog").show();d(".aui-blanket").show()}},c=e.bind(function(a,b){this.loader=require("cp/confluence/file-preview-loader");var c=this.loader.setupPreviewForSingleFile([a],b);c.on("fv.open",b.openPreviewCallback);c.on("fv.close",b.closePreviewCallback);c.open();c.showFileWhere()},
this);this.dfd?this.dfd.done(e.partial(c,a,b)):this.dfd=j.require("wr!com.atlassian.confluence.plugins.confluence-previews:confluence-previews-resources",e.partial(c,a,b))},_renderLoadingSpinner:function(){var a=this,b=this.$el.find(".image-preview-throbber").removeClass("hidden"),c=i.spinner(b[0],8,"#666"),d=this.$el.find("img").load(function(){c();b.remove();d.removeClass("hidden");a.$el.removeClass("loading")})}})});
require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/files/file-item/file-item-view","Confluence.Editor.FileDialog.FileItemView");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:panel-components', location = 'files/file-item/file-placeholder-view.js' */
define("confluence-editor/files/file-item/file-placeholder-view",["backbone","confluence/templates","underscore","ajs","jquery"],function(b,d,e,f,g){return b.View.extend({model:null,template:d.File.fileDialogListItemPlaceHolder,initialize:function(a){this.model=a.model;this.eventListener=a.eventListener;this.eventListener.on("file.placeholder.process",e.bind(this._setUploadInProgress,this))},events:{"click .cancel":"_cancelUpload"},render:function(){this.$el=g(this.template({file:this.model.attributes}));
this.el=this.$el[0];this.delegateEvents();return this},_setUploadInProgress:function(a,b){var c=this.$el.find("#docs-progress-bar-"+b||"");c.length&&(1===a&&this.$(".cancel").hide(),c.show(),f.progressBars.update(c,a))},_cancelUpload:function(){this.eventListener.trigger("uploadingfile.cancelled",this.model.get("fileId"))}})});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/files/file-item/file-placeholder-view","Confluence.Editor.FileDialog.FilePlaceHolderView");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:panel-components', location = 'files/file-list/file-list-collection.js' */
define("confluence-editor/files/file-list/file-list-collection",["backbone","confluence-editor/files/file-item/file-item-model","underscore"],function(c,d,e){return c.Collection.extend({model:d,clearSelection:function(){this.each(function(a){a.get("isSelect")&&a.set("isSelect",!1)});this.trigger("clear.selection")},getAllSelectItems:function(){return this.filter(function(a){return a.get("isSelect")})},setSelection:function(a){e.each(a,function(a){return a.set("isSelect",!0)})},resetFiles:function(a){this.reset();
for(var b=0;b<a.length;b++)this.addFile(a[b])},addFile:function(a){a=this.add(a);this.trigger("add-file",a.at(a.length-1))},removeFile:function(a){this.remove(a);this.trigger("remove-file",a)},replaceFile:function(a,b){this.remove(a);this.add(b);this.trigger("replace-file",a,b)}})});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/files/file-list/file-list-collection","Confluence.Editor.FileDialog.FileListCollection");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:panel-components', location = 'files/file-list/file-list-view.js' */
define("confluence-editor/files/file-list/file-list-view","backbone confluence-editor/files/file-item/file-item-view confluence-editor/files/file-item/file-item-model confluence-editor/files/file-item/file-placeholder-view ajs jquery".split(" "),function(f,g,h,i,j,c){return f.View.extend({eventListener:null,events:{click:"_clearSelection","click li.attached-file":"_clickItem","dblclick li.attached-file":"_doubleClickItem"},initialize:function(a){var b=this;this.collection=a.collection;if(a.eventListener){this.eventListener=
a.eventListener;this.listenTo(this.eventListener,"uploadingfile.completed",this._addUploadedFile);this.listenTo(this.eventListener,"uploadingfile.cancelled",this._cancelUploadingFile)}this.listenTo(this.collection,"reset",this._clearFileList);this.listenTo(this.collection,"add-file",this._renderNewItem);this.listenTo(this.collection,"remove-file",this._removeItem);this.listenTo(this.collection,"replace-file",this._replaceItem);this.listenTo(this.collection,"change:isSelect",function(){this.context.setSelectItems(this.collection.getAllSelectItems())});
this.listenTo(this.collection,"change:link",function(a){b.collection.removeFile(a);b.collection.addFile(a)});this.updateDialogContext(a.context);this.updatePanelContext(a.panelContext)},_addUploadedFile:function(a,b){var d=this,e=j.contextPath()+"/rest/prototype/1/attachment/"+b+".json";c.get(e).done(function(b){var b=new h(b),c=d.collection.get(a);c||(c=d.collection.findWhere({fileName:b.get("fileName")}));c?d.collection.replaceFile(c,b):d.collection.addFile(b)})},_cancelUploadingFile:function(a){(a=
this.collection.get(a))&&(a.get("previousUploadedFile")?this.collection.replaceFile(a,a.get("previousUploadedFile")):this.collection.removeFile(a))},render:function(){return this},resetFileList:function(a,b){b=b||{};this.$el.find(".loading-message").addClass("hidden");this.$el.find(".no-files").remove();this.collection.resetFiles(a);this.collection.length===0&&this.$fileList.before(c("<p></p>").addClass("no-files").text(this.noFileMessage));b.shouldClearSelection&&this.collection.clearSelection();
this._checkError(b.errors);this.$el.sizeToFit()},_getViewFromModel:function(a){return a.get("isFilePlaceHolder")?(new i({model:a,eventListener:this.eventListener})).render():(new g({model:a,showContainerInfo:this.showContainerInfo,highlighter:this.highlighter,eventListener:this.eventListener})).render()},_renderNewItem:function(a){if(this.$fileList&&this.$fileList.length){var b=this._getViewFromModel(a);this.$fileList.prepend(b.el);a.get("isFilePlaceHolder")||a.set("isSelect",true)}},_removeItem:function(a){if(this.$fileList&&
this.$fileList.length)(a=this._getDomElementByFileName(a.get("fileName")))&&a.remove()},_replaceItem:function(a,b){if(this.$fileList&&this.$fileList.length){var c=this._getViewFromModel(b),e=this._getDomElementByFileName(a.get("fileName"));e&&e.length?e.replaceWith(c.el):this.$fileList.prepend(c.el);b.set("isSelect",true)}},_getDomElementByFileName:function(a){var b=null;this.$fileList.find("li").each(function(){var d=c(this);d.attr("data-file-name")===a&&(b=d)});return b},updatePanelContext:function(a){if(a){this.panelContext=
a;this.errors=this.panelContext.errors||[];this.$el=this.fileContainer=this.panelContext.fileContainer;this.el=this.$el[0];this.$fileList=this.$el.find(".file-list");this.delegateEvents();this.noFileMessage=this.panelContext.noFileMessage;this.showContainerInfo=this.panelContext.showContainerInfo;this.highlighter=this.panelContext.highlighter;this.displayErrors=this.panelContext.displayErrors}},updateDialogContext:function(a){if(a){this.context=a;this.contextOptions=this.context.options}},_checkError:function(a){(a=
a||[])&&a.length&&this.displayErrors(a)},_clearSelection:function(a){a=a&&c(a.target);if(!a||!a.hasClass("close-tip")){this.collection.clearSelection();this.$el.find(".current").removeClass("current")}},_clearFileList:function(){this.$fileList&&this.$fileList.empty()},_clickItem:function(a){a.stopPropagation();a.preventDefault();var b=c(a.target);if(!b.closest(".zoom").length){a.isTrigger||this.$fileList.find(".current").removeClass("current");a=b.closest("li").attr("data-attachment-id");(a=this.collection.get(a))&&
!a.get("isFilePlaceHolder")&&a.set("isSelect",!a.get("isSelect"))}},_doubleClickItem:function(a){var a=c(a.target).closest("li"),b=a.attr("data-attachment-id");if((b=this.collection.get(b))&&!b.get("isFilePlaceHolder")){a.click();this.context.insert()}}})});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/files/file-list/file-list-view","Confluence.Editor.FileDialog.FileListView");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:panel-components', location = 'files/base-panel/base-panel-view.js' */
define("confluence-editor/files/base-panel/base-panel-view",["backbone","ajs","jquery"],function(b,a,c){return b.View.extend({context:null,cssContainer:"",cssPanel:"",textErrorSearch:"Error searching for attachments from Confluence. The server may be unavailable.",textErrorRetrieving:"Error retrieving attachments from Confluence. The server may be unavailable.",textDefaultErrorMessage:"Could not upload the file to Confluence. The server may be unavailable.",textUploading:"Image uploading...",initialize:function(){},createPanel:function(d){this.context=
d;this.render();var a=this;if(d=this.context.getPanel(this.panelId))d.onselect=function(){a.context.clearSelection();a.focus&&a.focus()}},render:function(){return this},getPanelElement:function(){return c(this.cssPanel,this.context.baseElement)},getContainer:function(){return c(this.cssContainer)},getForm:function(){return c("form",this.getPanelElement())},clearContainer:function(){var a=this.getContainer();a.find(".loading-message").removeClass("hidden");a.find(".warning").addClass("hidden")},clearErrors:function(){this.messenger.clearMessages()},
displayErrors:function(a){this.uploader.displayErrors(a);this.getContainer().sizeToFit()},getNoFileContainer:function(){return this.getPanelElement().find(".no-files")},getFileListContainer:function(){return this.getPanelElement().find("ul.file-list")}})});
require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/files/base-panel/base-panel-view","Confluence.Editor.FileDialog.BasePanel",function(){var b=require("underscore"),a=require("backbone");Confluence.Editor.FileDialog.eventListener=b.extend({},a.Events)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:panel-components', location = 'files/attachments-panel/attachments-panel.soy' */
// This file was automatically generated from attachments-panel.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.File.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.File == 'undefined') { Confluence.Templates.File = {}; }


Confluence.Templates.File.uploadFileForm = function(opt_data, opt_ignored) {
  return '' + ((opt_data.hasAttachPermission) ? '<div id="upload-attachment">' + ((opt_data.isNonSupportDragDrop) ? '<form action="' + soy.$$escapeHtml("/wiki") + '/pages/attachfile.action" method="post" enctype="multipart/form-data">' : '<form>') + '<label id="upload-files-button" class="aui-button upload-files"><span class="file-upload-icon">' + soy.$$escapeHtml('Upload files') + '</span>&nbsp;&nbsp;' + soy.$$escapeHtml('Upload files') + ((opt_data.isNonSupportDragDrop) ? '<input name="file_0" type="file" class="upfile invisible">' : '') + '</label>' + ((opt_data.isNonSupportDragDrop) ? '<input type="hidden" name="minorEdit_0" value="true" /><input type="hidden" name="atl_token" value="' + soy.$$escapeHtml(opt_data.atlToken) + '" />' : '') + '</form>' + ((opt_data.isNonSupportDragDrop) ? '<div class="upload-in-progress hidden">' + soy.$$escapeHtml('Image uploading...') + '</div>' : '') + '</div>' : '') + ((opt_data.hasAttachPermission) ? '<div class="divider"></div>' : '');
};
if (goog.DEBUG) {
  Confluence.Templates.File.uploadFileForm.soyTemplateName = 'Confluence.Templates.File.uploadFileForm';
}


Confluence.Templates.File.attachedFilesPanel = function(opt_data, opt_ignored) {
  return '<div id="attached-files" class="scroll-wrapper">' + aui.message.warning({title: '', closeable: 'true', content: ''}) + '<div class="loading-message hidden">' + soy.$$escapeHtml('Loading\u2026') + '</div><ul class="file-list"></ul></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.File.attachedFilesPanel.soyTemplateName = 'Confluence.Templates.File.attachedFilesPanel';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:panel-components', location = 'files/attachments-panel/attachments-panel-view.js' */
define("confluence-editor/files/attachments-panel/attachments-panel-view","confluence-editor/files/file-list/file-list-view confluence-editor/files/file-item/file-item-model confluence-editor/files/file-list/file-list-collection confluence-editor/files/base-panel/base-panel-view confluence/templates ajs confluence/meta underscore window jquery confluence/attachment-uploader confluence-editor/utils/file-types-utils confluence-rest/confluence-rest".split(" "),function(m,i,n,j,k,f,h,l,e,g,o,p,q){return j.extend({id:"attachments",
panelId:"",cssPanel:".attachments-panel",cssContainer:"#attached-files",textNoFileMessage:"There are no files attached to this page.",textPanelTitle:"Attached to this page",initialize:function(a){j.prototype.initialize.call(this);this.eventListener=a.eventListener;this.context=null;this.collection=new n;this.fileListView=new m({collection:this.collection,eventListener:this.eventListener});this.xhrCount=0},render:function(){var a=this;this.eventListener.trigger("AttachmentsPanelView.render",
this);this.fileListView.updateDialogContext(this.context);this.panelId=this.context.addPanel(this.textPanelTitle,this.getPanel(),"attachments-panel");this.el=this.getPanelElement();this.$el=g(this.el);this.delegateEvents();this.fileListView.updatePanelContext({fileContainer:this.getContainer(),noFileMessage:this.textNoFileMessage,showContainerInfo:false,errors:[],displayErrors:function(b){a.uploader.clearErrors();a.uploader.displayErrors(b)}});this.uploader=this.getUploaderController(this.context);
this.messenger=this.uploader.getMessageHandler();this.collection.reset();this._canAttachFiles()?this.refresh({shouldClearSelection:true}):this.refresh({errors:["You\'ll need to ask permission to insert files here."],shouldClearSelection:true});return this},getPanel:function(){return k.File.uploadFileForm({isNonSupportDragDrop:!this._hasXhrSupport(),atlToken:h.get("atl-token"),hasAttachPermission:this._canAttachFiles()})+k.File.attachedFilesPanel()},_overideUploaderClientForNonDragDropSupport:function(){var a=
this;return{onUploadSuccess:function(b){for(var d=0;d<b.length;d++){var c=b[d].id,e=a.collection.get(c);e&&a.collection.removeFile(e);c=f.contextPath()+"/rest/prototype/1/attachment/"+c+".json";g.get(c).done(function(b){b=new i(b);a.collection.addFile(b)})}},pack:function(){a.getContainer().sizeToFit()},getDefaultErrorMessage:function(){return a.textDefaultErrorMessage},getDefaultUploadingMessage:function(){return a.textUploading},displayErrors:function(b){this.getMessageHandler().displayMessages(b);
a._showErrorIconInMessageBox();this.pack()}}},getUploaderController:function(){return o({baseElement:this.getPanelElement()},l.bind(this._overideUploaderClientForNonDragDropSupport,this))},refresh:function(a){var b=this,d=a.shouldClearSelection?this.getPanelElement().find(".loading-message"):false,c=this.xhrCount=this.xhrCount+1;f.getJSONWrap({url:this._getUrlREST(),messageHandler:this.messenger,loadingElement:d,errorMessage:this.textErrorRetrieving,successCallback:function(d){if(c===b.xhrCount){a.data=
d;b._onSuccessLoadFiles(a)}},errorCallback:l.bind(this._onErrorLoadFiles,this)})},_onSuccessLoadFiles:function(a){this.fileListView.resetFileList(a.data.attachment?a.data.attachment:a.data.images,a)},_onErrorLoadFiles:function(){this._showErrorIconInMessageBox()},_showErrorIconInMessageBox:function(){var a=this.messenger.getMessageContainer().find("ul");a.toggleClass("one-message",a.find("li").length===1);a.closest(".aui-message").append("<span class='aui-icon icon-warning'></span>")},setUploadInProgress:function(a,
b){this.eventListener.trigger("file.placeholder.process",a,b)},attachmentUploaded:function(a,b){this.eventListener.trigger("uploadingfile.completed",a,b)},attachmentUploadingCancelled:function(a){this.eventListener.trigger("uploadingfile.cancelled",a)},_hasXhrSupport:function(){var a,b;try{a=new XMLHttpRequest;b=!(!a.sendAsBinary&&!a.upload)&&!(g.browser.mozilla&&g.browser.version.indexOf("1.9.1")>-1)}catch(d){b=false}return b},addPreviewImage:function(a){var b=require("tinymce");if(e.File&&e.FileReader&&
e.FileList&&e.Blob){var d=this,b=b.isIE?1048576:5242880;a.isImage=a.nativeFile&&a.nativeFile.type&&this._isImageType(a.nativeFile.type);if(a.isImage&&a.nativeFile.size<b){var c=new FileReader;c.onload=function(){d._addFilePlaceHolderToCollection(a,c.result)};c.readAsDataURL(a.nativeFile)}else this._addFilePlaceHolderToCollection(a,null)}},_addFilePlaceHolderToCollection:function(a,b){var d=null,c=this.collection.findWhere({fileName:a.name});if(c){this.collection.removeFile(c);c.get("isFilePlaceHolder")?
c.get("previousUploadedFile")&&(d=c.get("previousUploadedFile")):d=c}d=new i({isFilePlaceHolder:true,fileName:a.name,fileId:a.id,fileNative:a.nativeFile,url:b?b:"",isImage:a.isImage,niceType:a.isImage?"Image":"",fileType:a.nativeFile.type,thumbnailUrl:b?b:"",previousUploadedFile:d});this.collection.addFile(d)},_isImageType:function(a){return p.isImage(a)},_canAttachFiles:function(){return h.getBoolean("can-attach-files")},_getUrlREST:function(){var a=parseInt(h.get("attachment-source-content-id"),
10);return q.REST.makeUrl("content/"+a+"/attachments.json")},focus:function(){this.collection.clearSelection()}})});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/files/attachments-panel/attachments-panel-view","Confluence.Editor.FileDialog.AttachmentsPanelView");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:panel-components', location = 'files/external-panel/external-panel.soy' */
// This file was automatically generated from external-panel.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.File.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.File == 'undefined') { Confluence.Templates.File = {}; }


Confluence.Templates.File.webPanel = function(opt_data, opt_ignored) {
  return '<div class="insert-web-image"><form id="insert-web-image-form" action="#" class="aui"><fieldset class="inline"><div class="web-image-input"><label for="insert-web-image-image-url" id="insert-web-image-image-url-label">' + soy.$$escapeHtml('Image URL:') + '</label><input type="text" class="text image-url" id="insert-web-image-image-url" name="insert-web-image-image-url"></div><input type="submit" class="image-preview aui-button" value="' + soy.$$escapeHtml('Preview') + '"></fieldset></form><p class="faraway image-preview-area"></p><p class="hidden image-preview-error">' + soy.$$escapeHtml('This image couldn\x27t be loaded for preview. Please check the URL.') + '</p><p class="hidden image-preview-throbber">&nbsp;</p></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.File.webPanel.soyTemplateName = 'Confluence.Templates.File.webPanel';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:panel-components', location = 'files/external-panel/external-panel-view.js' */
define("confluence-editor/files/external-panel/external-panel-view",["confluence-editor/files/base-panel/base-panel-view","confluence/templates","jquery","raphael","ajs"],function(c,e,d,f,g){return c.extend({id:"external",panelId:"",cssPanel:".web-image-panel",cssContainer:".insert-web-image",textPanelTitle:"Images from the web",template:e.File.searchPanel,events:{"submit form":"_submit","keyup input.image-url":"_checkAllowInsert","click input.image-url":"_checkAllowInsert",
"blur input.image-url":"_checkAllowInsert"},initialize:function(){c.prototype.initialize.call(this);this.context=null;this.token=0},render:function(){this.panelId=this.context.addPanel(this.textPanelTitle,this.getPanel(),"web-image-panel");this.container=this.getContainer();this.preview=this.container.find(".image-preview-area");this.throbber=this.container.find(".image-preview-throbber");this.killSpinner=null;this.error=this.container.find(".image-preview-error")},focus:function(){this._getImageInput().focus();
this._checkAllowInsert()},getPanel:function(){this.$el=d(e.File.webPanel());this.el=this.$el[0];this.delegateEvents();return this.el},_getImageInput:function(){return d("input.image-url",this.context.baseElement)},_submit:function(b){b.preventDefault();b.stopPropagation();var a=this,b=this._getImageInput().val();if("http://"===b)return!1;this.token++;var c=this.token;this.preview.addClass("faraway").html("");this.throbber.removeClass("hidden");this.killSpinner||(this.killSpinner=f.spinner(this.throbber[0],
60,"#666"));this.error.addClass("hidden");d("<img>").load(function(){if(c===a.token){a.killSpinner();a.killSpinner=null;a.throbber.addClass("hidden");a.preview.removeClass("faraway");a._checkAllowInsert()}}).error(function(){if(c===a.token){a.killSpinner();a.killSpinner=null;a.throbber.addClass("hidden");a.error.removeClass("hidden");a._checkAllowInsert()}}).appendTo(this.preview).attr("src",b)},_checkAllowInsert:function(){var b=this.$el.find("input.image-url").val();this.context.setSelectItems(""!==
b&&"http://"!==b?b:[])}})});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/files/external-panel/external-panel-view","Confluence.Editor.FileDialog.ExternalPanelView");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:panel-components', location = 'files/search-panel/search-panel.soy' */
// This file was automatically generated from search-panel.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.File.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.File == 'undefined') { Confluence.Templates.File = {}; }


Confluence.Templates.File.searchPanel = function(opt_data, opt_ignored) {
  return '<div class="search-panel-wrapper"><div id="search-image"><form class="aui search-form" id="search-image-form" action="#"><fieldset class="inline"><div class="search-input"><label for="search-image" class="assistive">' + soy.$$escapeHtml('Search') + '</label><input autofocus type="text" class="text search-image-text" size="50" autocomplete="off"></div><select class="search-space select" id="search-image-space-select"><option value="">' + soy.$$escapeHtml('All Spaces') + '</option><option value="' + soy.$$escapeHtml(opt_data.spaceKey) + '">' + soy.$$escapeHtml(opt_data.spaceName) + '</option></select><button type="submit" class="aui-button search-button">' + soy.$$escapeHtml('Search') + '</button></fieldset></form></div><div id="searched-images" class="scroll-wrapper"><div class="loading-message hidden">' + soy.$$escapeHtml('Searching\u2026') + '</div><ul class="file-list"></ul></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.File.searchPanel.soyTemplateName = 'Confluence.Templates.File.searchPanel';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:panel-components', location = 'files/search-panel/search-panel-view.js' */
define("confluence-editor/files/search-panel/search-panel-view","confluence-editor/files/file-item/file-item-model confluence-editor/files/file-list/file-list-view confluence-editor/files/file-list/file-list-collection confluence-editor/files/base-panel/base-panel-view confluence/templates confluence/meta confluence/defaults confluence/highlighter underscore ajs jquery confluence-rest/confluence-rest confluence/api/event".split(" "),function(n,g,h,e,i,c,j,k,f,d,b,l,m){return e.extend({id:"search",
panelId:"",cssPanel:".search-panel",cssContainer:"#searched-images",template:i.File.searchPanel,events:{"submit form":"_submit"},initialize:function(){e.prototype.initialize.call(this);this.context=null;this.collection=new h;this.fileListView=new g({collection:this.collection})},getPanel:function(){this.$el=b(this.template({spaceKey:c.get("space-key"),spaceName:c.get("space-name")}));this.el=this.$el[0];this.delegateEvents();return this.el},render:function(){this.fileListView.updateDialogContext(this.context);
this.panelId=this.context.addPanel("Search on other pages",this.getPanel(),"search-panel");this.fileListView.updatePanelContext({fileContainer:this.getContainer(),noFileMessage:"No search results found.",showContainerInfo:true})},_submit:function(a){a.preventDefault();a.stopPropagation();if(this._getQuery()){m.trigger("analyticsEvent",{name:"confluence.insert-files-dialog.search",data:{contentType:c.get("content-type")}});this.clearContainer();this.collection.reset();
this._loadImages().then(f.bind(this._onSuccessLoadFiles,this),f.bind(this._onErrorLoadFiles,this))}},_loadImages:function(){return b.ajax({type:"GET",dataType:"json",url:d.contextPath()+l.REST.getBaseUrl()+"search.json",data:{spaceKey:this.getForm().find(".search-space").val(),query:this._getQuery(),search:"name",type:"attachment",attachmentType:[],groupResults:true,maxResultsPerGroup:50,searchParentName:true,pageSize:j.maxResults}})},_onSuccessLoadFiles:function(a){var b={result:[]};a.result&&a.result.length>
0?b=a:a.group&&a.group[0]&&(b=a.group[0]);this.fileListView.highlighter=new k(this._getQuery().split(" "));this.fileListView.resetFileList(b.result,{shouldClearSelection:true})},_onErrorLoadFiles:function(){var a=this.getContainer();a.find(".loading-message").addClass("hidden");a.append(b("<p class='warning'>"+b(this.textErrorSearch).text()+"</p>"))},_getSearchText:function(){return b("input.search-image-text",this.getForm())},_getQuery:function(){return this._getSearchText().val()||""},focus:function(){this.collection.clearSelection();
this._getSearchText().focus()}})});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/files/search-panel/search-panel-view","Confluence.Editor.FileDialog.SearchPanelView");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:panel-components', location = 'files/file-dialog/file-dialog.soy' */
// This file was automatically generated from file-dialog.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.File.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.File == 'undefined') { Confluence.Templates.File = {}; }


Confluence.Templates.File.helpLink = function(opt_data, opt_ignored) {
  return '<div class="dialog-help-link"><a href="' + soy.$$escapeHtml("https://confluence.atlassian.com/display/ConfCloud/Display+Files+and+Images") + '" target="_blank">' + soy.$$escapeHtml('Help') + '</a></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.File.helpLink.soyTemplateName = 'Confluence.Templates.File.helpLink';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:panel-components', location = 'files/file-dialog/file-dialog-view.js' */
define("confluence-editor/files/file-dialog/file-dialog-view","backbone ajs confluence/templates underscore jquery document window".split(" "),function(j,d,l,f,e,i,m){return j.View.extend({dialogId:"insert-image-dialog",ESC_KEY_CODE:27,width:840,height:530,initialize:function(a){this.urlExternalImg="";this.selectItems=[];this.submitCallback=a.submitCallback;this.cancelCallback=a.cancelCallback;this.beforeShowListeners=a.beforeShowListeners;this.panelComponents=a.panelComponents},render:function(){this._createDialog();
this.clearSelection();e(i).on("keydown.insert-image",f.bind(this._onNavigationByKey,this));return this},_createDialog:function(){var a=new d.Dialog(this.width,this.height,this.dialogId),n="Insert files and images",b="Insert";this.dialog=a;a.addHeader(n);a.addButton(b,f.bind(this._submitDialog,this),"insert");a.addCancel("Close",f.bind(this._killDialog,this));this.el=a.popup.element;this.$el=e(this.el);this.baseElement=this.el;
this.$el.attr("data-tab-default","0");this.$insertButton=this.$el.find(".dialog-button-panel .insert");e("#"+this.dialogId+" .dialog-components .dialog-title").prepend(l.File.helpLink());this.$el.find(".dialog-button-panel").append(e("<div></div>").addClass("dialog-tip").html("Hint: type \"\u003cstrong\u003e!\u003c/strong\u003e\" in the Editor to insert attached images on the page."));this._createPanels();e(i).on("hideLayer",f.bind(function(c,b,d){if(b==="popup"&&d===a.popup){d.remove();this.teardown();typeof this.cancelCallback==="function"&&this.cancelCallback()}},
this));d.bind("remove.dialog",f.bind(function(a,b){b.dialog.id===this.dialog.id&&this.teardown()},this));a.show();return a},_createPanels:function(){var a=this;e.each(this.panelComponents,function(){this&&typeof this.createPanel==="function"&&this.createPanel(a)});d.debug(this.beforeShowListeners.length+" beforeShow listeners registered.");e.each(this.beforeShowListeners,function(){typeof this==="function"&&this()})},teardown:function(){e(i).unbind(".insert-image");e(".tipsy").remove();this.undelegateEvents()},
_killDialog:function(){this.dialog.remove();this.clearSelection();typeof this.cancelCallback==="function"&&this.cancelCallback()},_submitDialog:function(){var a={url:this.urlExternalImg,contentId:d.Meta.get("attachment-source-content-id"),selectItems:this.selectItems};this.dialog.remove();typeof this.submitCallback==="function"&&this.submitCallback(a)},setSelectItems:function(a){if(typeof a==="string"){this.urlExternalImg=a;this.selectItems=[]}else{this.urlExternalImg="";this.selectItems=a}a=this.selectItems.length>
0||this.urlExternalImg;if(this.$insertButton){this.$insertButton.prop("disabled",!a);this.$insertButton.attr("aria-disabled",!a)}},clearSelection:function(){this.setSelectItems([])},insert:function(){this.$insertButton&&(!this.$insertButton.is(":disabled")||!this.$insertButton.attr("aria-disabled"))&&this.$insertButton.click()},addPanel:function(a,d,b,c){var e=this.dialog.getPage(0).panel.length;this.dialog.addPanel(a,d,b,c);return e},getPanel:function(a){return this.dialog.getPanel(a)},_onNavigationByKey:function(a){if(!e("#"+
this.dialog.id).is(":hidden")){var f=this.dialog.getCurrentPanel().body,b=f.find(".attached-file");if(!(b.length===0||e(i.activeElement).is("input[type=text], select, button"))){var c=m.tinymce.VK;switch(a.which){case c.LEFT:case c.UP:case c.RIGHT:case c.DOWN:var k=a.which,g;g=b.filter(".current");g.length||(g=b.filter(".selected"));if(g.length){g=b.index(g);var j=b.length,h={};h[c.LEFT]=-1;h[c.RIGHT]=1;h[c.UP]=-4;h[c.DOWN]=4;c=g+(h[k]?h[k]:0);b=b.eq(c<0||c>=j?g:c)}else b=b.first();b.parent().find("li.attached-file.current").removeClass("current");
b.addClass("current");b.length&&f.find(".scroll-wrapper").simpleScrollTo(b);return d.stopEvent(a);case c.SPACEBAR:f.find("li.attached-file.current").click();return d.stopEvent(a);case c.ENTER:this.insert();return d.stopEvent(a)}}}}})});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/files/file-dialog/file-dialog-view","Confluence.Editor.FileDialog.FileDialogView");
}catch(e){WRMCB(e)};