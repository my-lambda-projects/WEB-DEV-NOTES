WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.editor:page-editor-js', location = 'editor/page-editor.js' */
define("confluence-editor/editor/page-editor","ajs jquery document window confluence/meta confluence/api/constants confluence-editor/editor/page-editor-message confluence/analytics-support confluence/legacy-editor-global-AVOID-IF-POSSIBLE confluence/get-content-id confluence/api/event".split(" "),function(e,b,j,p,f,x,k,Q,c,y,h){function z(){return f.get("content-type")==="page"||f.get("content-type")==="blogpost"}function A(a){b("#editpageform").find("input[name='atl_token']").val(a);f.set("atl-token",
a);f.set("atlassian-token",a);b("#atlassian-token").attr("content",a)}var m=[],l=[],n=[],B=false,q,C=function(a){c.UI.setButtonState(a,c.UI.saveButton);c.UI.setButtonState(a,c.UI.previewButton);c.UI.setButtonState(a,c.UI.cancelButton)},r=function(a){var a=a||{},b=a.messageKey||"editor-error-message",d=a.message||"Something went wrong with the editor. Copy your unsaved changes and refresh the page to keep editing.";k.handleMessage(b,{title:a.title,type:"error",message:d},function(){a.disablePublish&&C(false)})},D=function(){h.trigger("analytics",{name:"confluence.editor.update",
data:{contentId:f.get("content-id"),notifiedWatchers:b("#notifyWatchers").is(":checked"),addedVersionComment:b("#versionComment").val()!=null&&b("#versionComment").val().length>0,contentType:f.get("content-type"),isTitleChanged:f.get("latest-published-page-title")!==b("#content-title").val(),spaceKey:f.get("space-key"),isNeverPublished:f.get("page-id")==="0"}})},N=function(a){var b=true;k.closeMessages(["offline-before-save-error"]);for(var d=0;d<l.length;d++){l[d](a)===false&&(b=false);if(a.isImmediatePropagationStopped())break}if(!b||
a.isDefaultPrevented()||a.isPropagationStopped())return false;a.preventDefault();E(a).done(function(a){a=F(a);if(a==null){e.warn("Expected deferred object not returned by save handler");D()}else a.done(D)}).fail(M)},M=function(a){var b=a||{};r({messageKey:b.messageKey||"offline-before-save-error",message:b.disablePublish?"Something went wrong with the editor. Copy your unsaved changes and refresh the page to keep editing.":"Unable to communicate with server. Saving is not possible at the moment.",disablePublish:b.disablePublish});a&&h.trigger("analytics",{name:"editor.save.error."+
a.origin+"."+a.cause});c.UI.toggleSavebarBusy(false);c.Drafts.bindUnloadMessage()},E=function(a){var i=b.Deferred();i.resolve(a);return i.promise()},F=function(){b(c.getCurrentForm()).submit()};h.bind("rte-ready",function(){c.UI.saveButton.bind("click",N)});h.bind("editor.error.message",function(a,b){r(b)});h.bind("dismiss.editor.error.message",function(a,b){k.closeMessages([b.messageKey]);b.enablePublish&&C(true)});var O=function(){var a;for(a=0;a<m.length;a++)c.UI.cancelButton.click(m[a]);var i=
b(c.getCurrentForm());for(a=0;a<n.length;a++)i.submit(n[a]);b.unbind("init.rte",this)},G=function(a,c,d,o){o.push(d);if(e.Rte&&e.Rte.BootstrapManager&&e.Rte.BootstrapManager.isInitComplete())a.bind(c,d);else if(!B){B=true;b.bind("init.rte",O)}},t=function(a,b,d){var c=null;e.Rte&&(e.Rte.BootstrapManager&&e.Rte.BootstrapManager.isInitComplete())&&(c=function(a,b,c){a.unbind(b,c)});for(var f=d.pop();f;){c&&c(a,b,f);f=d.pop()}},H=function(a){if(g!==a){g&&g.clear();a.start(c.heartbeat);g=a}},g,I=f.getNumber("heartbeat-interval")||
6E4,u,J;u={start:function(a){e.debug("Changing heartbeat to the normal scheduler");J=setInterval(a,I)},clear:function(){clearInterval(J)}};var K,L=Math.max(I/5,5E3),v,w;K={start:function(a){e.debug("Changing heartbeat to the recovery scheduler");w=0;var b=function(){a();var c=L*Math.pow(2,w);v=setTimeout(b,Math.min(c,3E5));w++};v=setTimeout(b,L)},clear:function(){clearTimeout(v)}};return{bookmark:"",MODE_RICHTEXT:"richtext",MODE_SOURCE:"source",MODE_PREVIEW:"preview",PREVIEW_OUTPUT_TYPE:"PREVIEW",
currentEditMode:null,contentHasChangedSinceLastSave:false,sourceInitialValue:false,isSubmitting:false,isCancelling:false,overrideBeforeSave:function(a){E=a},overrideSave:function(a){F=a},addCancelHandler:function(a){G(c.UI.cancelButton,"click",a,m)},addSaveHandler:function(a){l.push(a)},addSubmitHandler:function(a){G(b(c.getCurrentForm()),"submit",a,n)},removeAllCancelHandlers:function(){t(c.UI.cancelButton,"click",m)},removeAllSaveHandlers:function(){t(c.UI.saveButton,"click",l)},removeAllSubmitHandlers:function(){t(b(c.getCurrentForm()),
"submit",n)},hasContentChanged:function(){return!this.inRichTextMode()&&!this.contentHasChangedSinceLastSave?false:this.editorHasContentChanged()},editorHasContentChanged:function(){if(e.Rte.getEditor()==null){e.debug("Editor: editorHasContentChanged - No active editor present. Returning false.");return false}return e.Rte.Content.editorHasContentChanged()},isEmpty:function(){var a=b(e.Rte.getEditor().getContent()).text();return!b.trim(a)},getCurrentTitle:function(){return b("#content-title")&&b("#content-title").val()},
contentFormSubmit:function(){b(".editable-title #content-title").prop("disabled",true);return true},metadataSyncRequired:z,heartbeat:function(a){var a=a||{},i={dataType:"json",contentId:f.get("content-id"),draftType:f.get("content-type"),contributorsHash:f.get("contributors-hash")};q=e.safe.ajax({url:x.CONTEXT_PATH+"/json/startheartbeatactivity.action",type:"POST",data:i,dataType:"json",async:a.synchronousHeartbeat!==true}).done(function(d){if(!z()&&d){A(d.atlToken);h.trigger("rte.heartbeat",d)}else if(!d||
!d.atlToken){if(d.status==="unauthorised")if(a.movedBy){k.closeMessages(["heartbeat-error"]);k.handleMessage("heartbeat-error",{type:"error",title:"Page permissions have changed",message:"You can\'t publish due to a page move or change in restrictions. You will be redirected in 10 seconds."})}else{k.closeMessages(["heartbeat-error"]);k.handleMessage("heartbeat-error",{type:"error",title:"No access to this page",message:"This content has been moved, restricted, or deleted. You will be redirected in 10 seconds."})}h.trigger("rte.heartbeat-error",
"Invalid server response");e.logError("Unexpected server response for heartbeat:");e.log(d);setTimeout(function(){var a=f.get("base-url")+"/pages/viewpage.action?pageId="+f.get("content-id");p.location=a},1E4)}else{f.set("contributors-hash",d.contributorsHash);A(d.atlToken);c.heartbeatType.normal();h.trigger("rte.heartbeat",d);b(j).trigger("resize.resizeplugin");h.trigger("editor-heartbeat",d)}}).fail(function(a,b,i){(a.status>=500||a.status===0)&&c.heartbeatType.recovery();if(a.status===403||a.status===
401)e.logError("Heartbeat error: Unauthorized");else{e.logError("Server error on heartbeat request:");e.log(i)}h.trigger("rte.heartbeat-error",a)})},heartbeatType:{normal:function(){H(u)},recovery:function(){H(K)},reset:function(){g&&g.clear();g=u;g.start(c.heartbeat)},cleanup:function(){if(g){g.clear();g=null}q&&q.abort&&q.abort()}},disableFrame:function(a){b("form",a).each(function(){b(this).unbind();this.onsubmit=function(){return false}});b("a",a).each(function(){b(this).attr("target","_top").unbind()});
b("input, img",a).each(function(){b(this).unbind()})},previewFrameOnload:function(a,i){var d=require("tinymce");c.setMode(c.MODE_PREVIEW);d.activeEditor.setProgressState(false);c.disableFrame(a);var o=b("#main",a)[0];if(f.get("content-type")!=="comment"&&b(o).find("#main-header").length===0){var h=b("#title-heading"),g=h.attr("class");b(o).prepend('<div id="preview-header"><div id="title-heading" class="'+g+'">'+h.html()+"</div></div>")}if(b(e.Rte.getEditor().getBody()).hasClass("resizable")){var s=
b(i||"#previewArea iframe"),k=0,m=0,l,n=s.height();o&&function P(){var a=b(o).outerHeight(true);if(k!==a){a!==s.height()&&s.height(0).height(Math.max(a,n));k=a;m=0}else m++;m<500&&(l=setTimeout(P,500))}();b(j).one("mode-changed.resize-editor",function(a,b){b!==c.MODE_PREVIEW&&l&&clearTimeout(l)})}else if(d.isIE||d.isOpera){d=b(p).height();h=b("#header-precursor").height()+b("#header").height()+b("#editor-precursor").height();g=b("#savebar-container").height();b("#preview iframe").height(d-h-g-4);
b("#content.edit").height("auto")}},showRichText:function(a){var i=require("tinymce");e.setVisible("#wysiwyg",a);b(".toolbar-group-edit").toggleClass("assistive",a);b(".toolbar-group-preview").toggleClass("assistive",!a);b("#main").toggleClass("active-richtext",a);i.isGecko&&a&&e.Rte.fixEditorFocus(c.bookmark)},showPreview:function(a){if(f.get("content-type")!=="comment"){var c=b("#content-title");if(c.hasClass("placeholded")){b("#preview-title-text").text("");b("#title-text").text("")}else{b("#preview-title-text").text(c.val());
b("#title-text").text(c.val())}}e.setVisible("#preview",a);b(".toolbar-group-preview").toggleClass("assistive",a);b(".toolbar-group-edit").toggleClass("assistive",!a);b("#main, .editor-container").toggleClass("active-preview",a);f.get("content-type")!=="comment"&&b("#full-height-container").length&&b("#full-height-container").toggleClass("active-preview",a)},showSource:function(a){a?this.showSourceArea():this.hideSourceArea();b("#main")[a?"addClass":"removeClass"]("active-source")},setMode:function(a){e.debug("Set mode: "+
a);if(a===c.MODE_RICHTEXT){this.showRichText(true);this.showPreview(false);this.showSource(false)}else if(a===c.MODE_SOURCE){this.showSource(true);this.showRichText(false);this.showPreview(false)}else if(a===c.MODE_PREVIEW){this.showPreview(true);this.showRichText(false);this.showSource(false);c.UI.spinner.removeClass("aui-icon-wait")}setTimeout(function(){var a=b(".toolbar-group-preview");a.height(0);a.height();a.height("auto");a.height("")},1);this.currentEditMode=a;b(j).trigger("mode-changed",
[a])},getContentId:function(){return y()},addErrorMessage:function(a,c,d){var f=b("#"+a),d=d?"#all-messages":"#editor-messages";f.length?f.empty():f=b("<div></div>").attr("id",a).appendTo(d);e.messages.error(f,{closeable:true,body:c})},changeMode:function(a,i){var d=require("tinymce");e.debug("Change mode: "+a);i=i||{};if(this.inRichTextMode()&&!e.Rte.BootstrapManager.isInitComplete()||this.currentEditMode===a)return false;var g=this.currentEditMode;h.trigger("rte-changeMode",a);if(a===c.MODE_PREVIEW){var m=
e.Rte.getEditor();g===c.MODE_SOURCE&&c.transferSourceToEditor();if(d.isGecko&&g===c.MODE_RICHTEXT&&!c.bookmark)c.bookmark=d.activeEditor.selection.getBookmark();this.currentEditMode=a;d=function(a){typeof a!=="object"&&(a={draftId:y()});a={contentId:a.draftId,contentType:f.get("content-type"),spaceKey:f.get("space-key"),xHtml:m.getContent(),outputType:c.PREVIEW_OUTPUT_TYPE};e.safe.ajax({type:"POST",url:x.CONTEXT_PATH+"/pages/rendercontent.action",data:a,success:c.replysetPreviewArea,timeout:2E4,error:function(){h.trigger("rte.preview.error",
{status:0});k.closeMessages(["server-offline"]);r({messageKey:"server-offline",message:"Can\'t reach the server. Check you\'re connected to the internet and Confluence is up and running.",disablePublish:false});c.currentEditMode=g;i.errorCallback&&i.errorCallback()}})};f.get("content-type")==="comment"?d():c.Drafts.save({forceSave:true,onSuccessHandler:d,onErrorHandler:d})}else this.setMode(a);a===c.MODE_RICHTEXT&&b(j).trigger("resize.resizeplugin");if(g===c.MODE_PREVIEW)if(d=j.getElementById("editor-preview-iframe")){var l=d.contentDocument||d.contentWindow.document;
l.removeChild(l.documentElement);b(d).remove()}return false},replysetPreviewArea:function(a){var c=require("tinymce");b("#preview-error").remove();c.activeEditor.setProgressState(true);var c=b("#previewArea"),d=b('<iframe id="editor-preview-iframe" src="about:blank" scrolling="yes" frameborder="0"></iframe>');c.html(d);c=d[0].contentDocument||d[0].contentWindow.document;c.open();c.write(a);c.close()},inRichTextMode:function(){return this.currentEditMode===c.MODE_RICHTEXT},isNewPage:function(){return b("#createpageform, #createpagetemplate").length>
0},onInit:function(){var a=require("tinymce");c.setMode(c.MODE_RICHTEXT);a.activeEditor.onClick.add(function(){var a=c.UI.postingDatePicker;a&&a.hide()})},contentChangeHandler:function(){this.contentHasChangedSinceLastSave=true},getCurrentForm:function(){return require("tinymce").activeEditor.formElement},transferSourceToEditor:function(){if(c.sourceInitialValue){var a=c.getSourceAreaVal();if(a!==c.sourceInitialValue){var b=require("tinymce").activeEditor;b.setContent(a);b.setDirty(a)}}c.sourceInitialValue=
false},hideSourceArea:function(){b("#editor-html-source-container").addClass("hidden");this.setToolBarInactive(false);this.transferSourceToEditor();b("#rte-button-source-mode").removeClass("active");b("#rte-button-publish").unbind("click.source-save")},showSourceArea:function(){var a=require("tinymce");b("#editor-html-source-container").removeClass("hidden");this.setSourceAreaHeight();this.setToolBarInactive(true);this.sourceInitialValue=a.activeEditor.getContent();this.setSourceAreaVal(this.sourceInitialValue);
b("#rte-button-source-mode").addClass("active");b("#rte-button-publish").bind("click.source-save",c.transferSourceToEditor)},getSourceAreaVal:function(){return b("#editor-html-source").val()},setSourceAreaVal:function(a){b("#editor-html-source").val(a)},setSourceAreaHeight:function(){var a=e.Rte.getTinyMceEditorMinHeight();e.debug("HTML source height= "+a);var c=b("#editor-html-source")[0].scrollHeight;if(c>a){a=c;e.debug("ACTUAL HEIGHT "+c)}b("#editor-html-source-container").height(a+"px")},setToolBarInactive:function(a){b("#rte-toolbar").toggleClass("disabled",
a)},isVisible:function(){return b("#wysiwyg:visible").length>0||b("#editor-html-source-container:visible").length>0||b("#preview:visible").length>0}}});require("confluence/module-exporter").safeRequire("confluence-editor/editor/page-editor",function(e){var b=require("jquery"),j=require("ajs"),p=require("confluence/api/event");j.Editor=j.Editor||{};Confluence.Editor=b.extend(Confluence.Editor||{},j.Editor,e);j.toInit(function(){p.bind("init.rte",Confluence.Editor.onInit)});j.Editor=Confluence.Editor});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:page-editor-js', location = 'editor/page-editor-ui.js' */
define("confluence-editor/editor/page-editor-ui","jquery confluence/templates ajs confluence/meta window moment document confluence/api/constants confluence-editor/editor/page-editor-message confluence-editor/editor/page-editor-quit-dialog confluence/analytics-support confluence/legacy-editor-global-AVOID-IF-POSSIBLE confluence/editor-notifications confluence/api/event".split(" "),function(b,f,e,d,k,r,g,v,w,n,s,c,t,u){return function(){var a={},j=function(b,c){for(var c=c||a.buttons,d=0;d<c.length;d++)o(b,
c[d])},o=function(a,b){if(b)if(a){b.removeAttr("aria-disabled");b.removeAttr("disabled");b.removeClass("disabled")}else{b.attr("aria-disabled","true");b.attr("disabled","disabled");b.addClass("disabled")}},p=function(a){return a.length&&a.attr("aria-disabled")!=="true"},h=function(){return d.get("new-page")},q=function(){var a="";h()||(a="Edit"+" - ");return a};a.spinner=b("#rte-spinner");var l;l=f.Editor.Page.saveButton({contentType:d.get("content-type"),isNewPage:h()});b("#rte-button-publish").replaceWith(l);
l=b("#rte-button-publish");a.saveButton=l;a.editButton=b("#rte-button-edit");a.previewButton=b("#rte-button-preview");a.cancelButton=b("#rte-button-cancel");a.versionCommentInput=b("#versionComment");a.watchPageCheckbox=b("#watchPage");a.watchPageToolbarGroup=b(".toolbar-group-watch-page");a.buttons=[a.saveButton,a.editButton,a.cancelButton,a.previewButton];e.bind("editor-shared-drafts-published",function(){var b=/\(.+\)/g.exec(a.saveButton.data("tooltip"))[0];a.saveButton.text(f.Editor.Page.saveButtonText({contentType:d.get("content-type"),
isNewPage:h()})).attr("title",f.Editor.Page.saveButtonTitle({contentType:d.get("content-type"),isNewPage:h()})+b).tooltip({gravity:"s"})});a.setButtonsState=j;a.setButtonState=o;a.isButtonEnabled=p;a.registerFormButton=function(b,c){a[b]=c;a.buttons.push(c)};a.postingDatePicker=null;a.isFormEnabled=function(){for(var b=0;b<a.buttons.length;b++)if(p(a.buttons[b]))return true;return false};a.toggleSavebarBusy=function(b){if(b){if(!a.isFormEnabled())return false;a.spinner.addClass("aui-icon-wait");j(false)}else{a.spinner.removeClass("aui-icon-wait");
j(true)}return true};a.init=function(){function f(){b("#rte-ellipsis-menu").is(":visible")&&b("#rte-button-ellipsis").trigger("aui-button-invoke")}n.init();c.addSaveHandler(function(b){if(a.isButtonEnabled(a.saveButton)){a.toggleSavebarBusy(true);e.trigger("confluence.editor.on.save")}else{b.stopImmediatePropagation();b.preventDefault()}});e.trigger("rte.init.ui");c.isNewPage()&&b("#content-title").focus().select();c.addCancelHandler(function(a){n.process(a)});d.get("content-type")==="comment"&&c.addSaveHandler(function(){if(e.Rte.Content.isEmpty()){t.notify("warning",
"Comment text is empty. Cannot create empty comments.");a.toggleSavebarBusy(false);return false}});(d.get("content-type")==="comment"||d.get("content-type")==="template")&&c.addCancelHandler(function(b){if(a.isFormEnabled()&&c.hasContentChanged()&&!c.isEmpty()){var m=d.get("content-type")==="comment"?"Your comment will be lost.":"Your unsaved template changes will be lost.";if(!k.confirm(m)){b.stopImmediatePropagation();return false}}});a.versionCommentInput.on("keypress",function(a){a.keyCode===13&&n.process(a).done(function(){u.trigger("analytics",
{name:"confluence.editor.update",data:{contentId:d.get("content-id"),notifiedWatchers:b("#notifyWatchers").is(":checked"),addedVersionComment:b("#versionComment").val()!=null&&b("#versionComment").val().length>0,contentType:d.get("content-type"),isTitleChanged:d.get("latest-published-page-title")!==b("#content-title").val(),spaceKey:d.get("space-key"),isNeverPublished:d.get("page-id")==="0"}})})});c.addSubmitHandler(function(a){return c.contentFormSubmit(a)});this.currentEditMode=this.MODE_RICHTEXT;
a.editButton.click(function(b){var d=require("tinymce");if(a.isFormEnabled()){c.changeMode(c.MODE_RICHTEXT);setTimeout(function(){e.Rte.getEditor().focus();d.isGecko&&c.bookmark&&e.Rte.getEditor().selection.moveToBookmark(c.bookmark)},0);a.cancelButton.enable()}b.preventDefault()});a.previewButton.click(function(d){var m=require("tinymce");if(a.isFormEnabled()&&c.currentEditMode!==c.MODE_PREVIEW){f();j(false);a.spinner.addClass("aui-icon-wait");if(m.isGecko&&!c.bookmark)c.bookmark=m.activeEditor.selection.getBookmark();
c.changeMode(c.MODE_PREVIEW,{errorCallback:function(){j(true);a.spinner.removeClass("aui-icon-wait")}});a.cancelButton.disable();s.publish("confluence.editor.preview",{contentId:e.params.contentId,pageVersion:e.params.pageVersion||"null"});b(k).trigger("preview.tinymce",{pageVersion:e.params.pageVersion||"null"})}d.preventDefault()});b("#editor-html-source").change(c.setSourceAreaHeight).keyup(c.setSourceAreaHeight);b("#rte-button-labels").bind("updateLabel",function(){var a=+d.get("num-labels")||
0,c="Labels";a===1?c=e.format("{0} Label",a):a>1&&(c=e.format("{0} Labels",a));b("#rte-button-labels").attr("data-tooltip",c)});var i=b("#PostingDate");if(i.length){i.attr("max",r().format("YYYY-MM-DD"));a.postingDatePicker=i.datePicker({overrideBrowserDefault:true});a.postingDatePicker.hide()}b("#wysiwygTextarea_parent .mceProgress, #wysiwygTextarea_parent .mceBlocker").on("click",function(){e.Rte.getEditor().focus()});b(k).bind("render-content-loaded",
function(d,e){var f=b("#previewArea iframe");if(f.contents().find("body")[0]==e){c.previewFrameOnload(e,f);[a.saveButton,a.editButton,a.previewButton].forEach(function(a){o(true,a)});f.focus();k.focus();b(g).trigger("iframeAppended",f)}});if(d.get("heartbeat")){c.heartbeat();c.heartbeatType.normal();e.bind("rte-destroyed",c.heartbeatType.cleanup)}e.bind("watchpage.pageoperation",function(){a.toggleWatchPage(false)});e.bind("unwatchpage.pageoperation",function(){a.toggleWatchPage(true)});var h=g.title,
i=require("tinymce");if(!i||i.majorVersion<4){if(d.get("new-page")&&d.get("form-name")==="inlinecommentform"){g.title="Edit"+g.title;h=g.title}if(d.get("new-page")&&b.trim(b("input#content-title").val()))g.title=q()+b("input#content-title").val()+" - "+d.get("space-name")+" - "+d.get("site-title")}b("input#content-title").on("change input",function(){if(d.get("content-type")!=="template"){var a=q();g.title=b.trim(this.value)?a+this.value+" - "+d.get("space-name")+" - "+d.get("site-title"):
h}});b("body",b("#wysiwygTextarea_ifr").contents()).click(f);e.trigger("init.rte-control")};a.toggleWatchPage=function(b){if(b&&d.get("content-type")==="comment"){a.watchPageToolbarGroup.show();if(a.watchPageCheckbox.length)a.watchPageCheckbox[0].checked=false}else a.watchPageToolbarGroup.hide()};return a}});require("confluence/module-exporter").safeRequire("confluence-editor/editor/page-editor-ui",function(b){require("ajs").bind("init.rte",function(){var f=b();Confluence.Editor.UI=f;f.init()})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:page-editor-js', location = 'tinymce3/plugins/insertwiki/insert-wiki-markup.soy' */
// This file was automatically generated from insert-wiki-markup.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.InsertWiki.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.InsertWiki == 'undefined') { Confluence.Templates.InsertWiki = {}; }


Confluence.Templates.InsertWiki.originalDefaultTempWikiMarkupDialog = function(opt_data, opt_ignored) {
  return '<form action=\'#\' method=\'post\' id="insert-wiki-markup-form" class="aui"><textarea class=\'monospaceInput textarea originalDefault\' id=\'insert-wiki-textarea\' name=\'wikitext\'/></form>';
};
if (goog.DEBUG) {
  Confluence.Templates.InsertWiki.originalDefaultTempWikiMarkupDialog.soyTemplateName = 'Confluence.Templates.InsertWiki.originalDefaultTempWikiMarkupDialog';
}


Confluence.Templates.InsertWiki.previewWikiIframeContent = function(opt_data, opt_ignored) {
  return '<!DOCTYPE html><html class="insert-wiki-markup-dialog"><head></head><body class="wiki-content previewWiki"></body></html>';
};
if (goog.DEBUG) {
  Confluence.Templates.InsertWiki.previewWikiIframeContent.soyTemplateName = 'Confluence.Templates.InsertWiki.previewWikiIframeContent';
}


Confluence.Templates.InsertWiki.wikiMarkupDialog = function(opt_data, opt_ignored) {
  return '<p id="insert-wiki-info-title">' + soy.$$escapeHtml('Enter wiki markup or markdown below. Confluence will convert your content to editor format and insert it into your page.') + '</p><form action=\'#\' method=\'post\' id="insert-wiki-markup-form" class="aui"><h3 class="wiki-title"><span id="insert-wiki-insert-title">' + soy.$$escapeHtml('Insert') + '</span><span id="insert-wiki-preview-title">' + soy.$$escapeHtml('Preview') + '</span></h3><textarea class=\'monospaceInput textarea\' id=\'insert-wiki-textarea\' name=\'wikitext\'/><!-- --><div class=\'example-container\' id=\'insert-wiki-textarea-preview\'></div></form>';
};
if (goog.DEBUG) {
  Confluence.Templates.InsertWiki.wikiMarkupDialog.soyTemplateName = 'Confluence.Templates.InsertWiki.wikiMarkupDialog';
}


Confluence.Templates.InsertWiki.wikiErrorSubDialog = function(opt_data, opt_ignored) {
  return '<p class=\'warning\'>' + soy.$$escapeHtml(opt_data.warningMessage) + '</p><p class=\'exception-report\'><span class=\'exceptionMessage\'>' + soy.$$escapeHtml(opt_data.exceptionMessage) + '</span></p>';
};
if (goog.DEBUG) {
  Confluence.Templates.InsertWiki.wikiErrorSubDialog.soyTemplateName = 'Confluence.Templates.InsertWiki.wikiErrorSubDialog';
}


Confluence.Templates.InsertWiki.wikiParserSelector = function(opt_data, opt_ignored) {
  var output = '<span class="wiki-parser-selector"><form action="#" method="post" id="d" class="aui"><select class="select medium-field" id="wiki-parser-selection-tool" name="wiki-parser-selection-tool" title="wiki parser selector"><option value="' + soy.$$escapeHtml(opt_data.DEFAULT.val) + '">' + soy.$$escapeHtml(opt_data.DEFAULT.label) + '</option>';
  var wikiLangList26 = soy.$$getMapKeys(opt_data.WIKI);
  var wikiLangListLen26 = wikiLangList26.length;
  for (var wikiLangIndex26 = 0; wikiLangIndex26 < wikiLangListLen26; wikiLangIndex26++) {
    var wikiLangData26 = wikiLangList26[wikiLangIndex26];
    output += (opt_data.WIKI[wikiLangData26].val != opt_data.DEFAULT.val) ? '<option value="' + soy.$$escapeHtml(opt_data.WIKI[wikiLangData26].val) + '">' + soy.$$escapeHtml(opt_data.WIKI[wikiLangData26].label) + '</option>' : '';
  }
  output += '</select></form></span>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.InsertWiki.wikiParserSelector.soyTemplateName = 'Confluence.Templates.InsertWiki.wikiParserSelector';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:page-editor-js', location = 'editor/page-editor.soy' */
// This file was automatically generated from page-editor.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Editor.Page.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Editor == 'undefined') { Confluence.Templates.Editor = {}; }
if (typeof Confluence.Templates.Editor.Page == 'undefined') { Confluence.Templates.Editor.Page = {}; }


Confluence.Templates.Editor.Page.saveButton = function(opt_data, opt_ignored) {
  return '<button id="rte-button-publish" data-test-id="tiny-publish-button" class="aui-button aui-button-primary default-submit" type="submit" name="confirm" value="Save" title="' + Confluence.Templates.Editor.Page.saveButtonTitle(opt_data) + '" tabindex="101">' + Confluence.Templates.Editor.Page.saveButtonText(opt_data) + '</button>';
};
if (goog.DEBUG) {
  Confluence.Templates.Editor.Page.saveButton.soyTemplateName = 'Confluence.Templates.Editor.Page.saveButton';
}


Confluence.Templates.Editor.Page.saveButtonTitle = function(opt_data, opt_ignored) {
  return '' + ((opt_data.contentType == 'blogpost') ? soy.$$escapeHtml('Publish your blog post') : (opt_data.contentType == 'page') ? (opt_data.isNewPage) ? soy.$$escapeHtml('Publish changes') : soy.$$escapeHtml('Update the published page') : soy.$$escapeHtml('Save'));
};
if (goog.DEBUG) {
  Confluence.Templates.Editor.Page.saveButtonTitle.soyTemplateName = 'Confluence.Templates.Editor.Page.saveButtonTitle';
}


Confluence.Templates.Editor.Page.previewButton = function(opt_data, opt_ignored) {
  return '<button class="aui-button toolbar-item aui-button-light" id="rte-button-preview" data-test-id="tiny-preview-button" title="' + soy.$$escapeHtml('Preview') + '" type="button"><span class="trigger-text">' + soy.$$escapeHtml('Preview') + '</span></button>';
};
if (goog.DEBUG) {
  Confluence.Templates.Editor.Page.previewButton.soyTemplateName = 'Confluence.Templates.Editor.Page.previewButton';
}


Confluence.Templates.Editor.Page.saveButtonText = function(opt_data, opt_ignored) {
  return '' + ((opt_data.contentType == 'blogpost' || opt_data.contentType == 'page') ? soy.$$escapeHtml('Publish') : (opt_data.contentType == 'blogpost') ? soy.$$escapeHtml('Publish') : soy.$$escapeHtml('Save'));
};
if (goog.DEBUG) {
  Confluence.Templates.Editor.Page.saveButtonText.soyTemplateName = 'Confluence.Templates.Editor.Page.saveButtonText';
}


Confluence.Templates.Editor.Page.cancelButton = function(opt_data, opt_ignored) {
  return '' + ((opt_data.contentType == 'page' || opt_data.contentType == 'blogpost') ? '<ul class="aui-buttons rte-toolbar-group-done close"><button class="aui-button shared-drafts" type="submit" id="rte-button-cancel" data-test-id="tiny-cancel-button" name="cancel" value="cancel"><span class="icon aui-icon aui-icon-small aui-iconfont-close-dialog"></span></button></ul>' : '<button class="toolbar-item-link aui-button aui-button-link" type="submit" id="rte-button-cancel" data-test-id="tiny-cancel-button" name="cancel" value="cancel"><span class="trigger-text">' + ((opt_data.contentType == 'page' || opt_data.contentType == 'blogpost') ? soy.$$escapeHtml('Close') : soy.$$escapeHtml('Cancel')) + '</span></button>');
};
if (goog.DEBUG) {
  Confluence.Templates.Editor.Page.cancelButton.soyTemplateName = 'Confluence.Templates.Editor.Page.cancelButton';
}


Confluence.Templates.Editor.Page.quitDialogHeader = function(opt_data, opt_ignored) {
  var output = '';
  switch (opt_data.dialogType) {
    case 'delete':
    case 'revert':
      output += (opt_data.newPage) ? (opt_data.contentType == 'blogpost') ? '<h2 class="aui-dialog2-header-main">' + soy.$$escapeHtml('Delete unpublished blog post?') + '</h2>' : '<h2 class="aui-dialog2-header-main">' + soy.$$escapeHtml('Delete unpublished page?') + '</h2>' : '<h2 class="aui-dialog2-header-main">' + soy.$$escapeHtml('Revert to last published version?') + '</h2>';
      break;
    case 'publish':
    case 'update':
      output += '<h2 class="aui-dialog2-header-main">' + soy.$$escapeHtml('Publish the page?') + '</h2>';
      break;
    case 'diff':
      output += '<h2 class="aui-dialog2-header-main">' + soy.$$escapeHtml('Unpublished changes') + '</h2>';
      break;
  }
  output += '<a class="aui-dialog2-header-close"><span class="aui-icon aui-icon-small aui-iconfont-close-dialog">' + soy.$$escapeHtml('Close') + '</span></a>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Editor.Page.quitDialogHeader.soyTemplateName = 'Confluence.Templates.Editor.Page.quitDialogHeader';
}


Confluence.Templates.Editor.Page.quitDialogContent = function(opt_data, opt_ignored) {
  var output = '';
  switch (opt_data.dialogType) {
    case 'revert':
      output += (opt_data.contributors.length == 0) ? ((opt_data.contentType == 'blogpost') ? soy.$$filterNoAutoescape('This will permanently delete all the changes you made since this blog post was last published') : soy.$$filterNoAutoescape('This will permanently delete all the changes you made since this page was last published.')) + '<div class="aui-dialog2-footer-hint"><a id="qed-show-diff-button" class="aui-button aui-button-link">' + soy.$$escapeHtml('Show changes') + '</a></div>' : soy.$$filterNoAutoescape('This will permanently delete all the changes that the following people have made, since this page was last published.') + '<div class="aui-dialog2-footer-hint"><a id="qed-show-diff-button" class="aui-button aui-button-link">' + soy.$$escapeHtml('Show changes') + '</a></div>' + Confluence.Templates.Editor.Page.contributorList(opt_data);
      break;
    case 'delete':
      output += (opt_data.contributors.length == 0) ? (opt_data.contentType == 'blogpost') ? soy.$$filterNoAutoescape('Once you delete an unpublished blog post, it\x27s gone for good.') : soy.$$filterNoAutoescape('If you delete an unpublished page, it\x27s gone for good.') : ((opt_data.contentType == 'blogpost') ? soy.$$filterNoAutoescape('This will permanently delete this blog post, which you and these other people have worked on.') : soy.$$filterNoAutoescape('This will permanently delete this page, which you and these other people have worked on.')) + Confluence.Templates.Editor.Page.contributorList(opt_data);
      break;
    case 'publish':
    case 'update':
      output += soy.$$filterNoAutoescape('You\x27ll also be publishing changes made by these people:') + Confluence.Templates.Editor.Page.contributorList(opt_data);
      break;
    case 'diff':
      output += '<div><div class="legend"><span class="legend-title">' + soy.$$escapeHtml('Key') + ': </span><span class="diff-html-added">' + soy.$$escapeHtml('This line was added.') + '</span><span class="diff-html-removed">' + soy.$$escapeHtml('This line was removed.') + '</span><span class="diff-html-changed">' + soy.$$escapeHtml('Formatting was changed.') + '</span></div>' + ((! opt_data.newDialog) ? '<a class="aui-button aui-button-link" id="qed-hide-diff-button">' + soy.$$escapeHtml('Show contributors') + '</a>' : '') + '<hr/><div class="wiki-content"></div><span class="aui-icon aui-icon-wait diff-spinner"></span></div>';
      break;
  }
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Editor.Page.quitDialogContent.soyTemplateName = 'Confluence.Templates.Editor.Page.quitDialogContent';
}


Confluence.Templates.Editor.Page.hiddenInputCancel = function(opt_data, opt_ignored) {
  return '<input type="hidden" name="cancel" value="cancel">';
};
if (goog.DEBUG) {
  Confluence.Templates.Editor.Page.hiddenInputCancel.soyTemplateName = 'Confluence.Templates.Editor.Page.hiddenInputCancel';
}


Confluence.Templates.Editor.Page.contributorList = function(opt_data, opt_ignored) {
  var output = '<ul class="contributor-list">';
  var contributorList147 = opt_data.contributors;
  var contributorListLen147 = contributorList147.length;
  for (var contributorIndex147 = 0; contributorIndex147 < contributorListLen147; contributorIndex147++) {
    var contributorData147 = contributorList147[contributorIndex147];
    output += '<li data-username="' + soy.$$escapeHtml(contributorData147.name) + '" data-account-id="' + soy.$$escapeHtml(contributorData147.accountId) + '"><div class="contributor-avatar ' + ((contributorData147.active) ? 'active' : '') + '"><img src="' + soy.$$escapeHtml(contributorData147.avatarURL) + '"></div><div class="contributor-detail"><p class="contributor-detail-name"><span>' + soy.$$escapeHtml(contributorData147.fullname) + '</span></p><p class="contributor-detail-last-modification"><span>' + soy.$$escapeHtml('Last edited') + ' ' + soy.$$escapeHtml(contributorData147.formattedLastModification) + '</span></p></div></li>';
  }
  output += '</ul>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Editor.Page.contributorList.soyTemplateName = 'Confluence.Templates.Editor.Page.contributorList';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:page-editor-js', location = 'insert-image-dialog/insert-image-dialog.js' */
define("confluence-editor/insert-image-dialog/insert-image-dialog","jquery ajs underscore confluence-link-browser/link-object confluence-link-browser/link-adapter confluence/legacy-editor-global-AVOID-IF-POSSIBLE confluence/meta".split(" "),function(b,f,k,h,l,g,m){var e={beforeShowListeners:[],panelComponent:[],sizeToFit:function(){this.each(function(){var a=this,c=b(this).parent(),d=c.height();c.children().each(function(){this!==a&&b(this).is(":visible")&&(d=d-b(this).outerHeight())});c=b(this).outerHeight()-
b(this).height();b(this).css("height",Math.max(0,d-c)+"px")});return this},defaultInsertImageDialog:function(){f.Rte.BookmarkManager.storeBookmark();e.insertImageDialog(function(a){var c=require("tinymce");f.Rte.BookmarkManager.restoreBookmark();var d={},i=null,g=true;if(a.url){d={url:a.url,filename:a.url,contentId:a.contentId};i="fromWeb";c.confluence.ImageUtils.insertFromProperties(d)}else{var h=a.selectItems.length>1;k.each(a.selectItems,function(a,b){var j=a.get("ownerId");b===0&&(i=j===m.get("content-id")?
"thisPage":"otherPage");if(a.isImage()){d={filename:a.getFileName(),contentId:j};c.confluence.ImageUtils.insertFromProperties(d,h)}else{g=false;f.MacroBrowser.getMacroMetadata("view-file")?e._insertFilePlaceholderToEditor(a):e._insertLinkToEditor(a)}})}require(["conf/confluence-drag-and-drop/analytics/files-upload-analytics"],function(c){c.triggerEvent("confluence.insert-files-dialog.insert",a.selectItems,g,i)});b("#comments-section").length&&f.Rte.fixEditorFocus()},function(){f.Rte.BookmarkManager.restoreBookmark()})},
findPanelComponentById:function(a){for(var c=g.ImageDialog.panelComponent,d=0,b=c.length;d<b;d++)if(c[d].id==a)return c[d]},insertImageDialog:function(a,c){var b=new g.FileDialog.FileDialogView({submitCallback:a,cancelCallback:c,beforeShowListeners:e.beforeShowListeners,panelComponents:e.panelComponent});b.render();return b},_insertLinkToEditor:function(a){var b=h.fromREST(a.attributes);b.attrs["data-linked-resource-container-id"]=a.get("ownerId");b.attrs.href=a.get("downloadUrl");l.setLink(b)},_insertFilePlaceholderToEditor:function(a){var b=
{name:a.get("fileName"),page:a.get("parentTitle"),space:a.get("space")?a.get("space").key:"",date:a.get("datePath"),ownerId:a.get("ownerId")};require(["confluence-editor/utils/attachments-insert-utils"],function(a){a.insertFilePlaceholder(b)})}};return e});
require("confluence/module-exporter").safeRequire("confluence-editor/insert-image-dialog/insert-image-dialog",function(b){require("jquery").fn.sizeToFit=b.sizeToFit;Confluence.Editor.ImageDialog=b;Confluence.Editor.defaultInsertImageDialog=b.defaultInsertImageDialog;Confluence.Editor.ImageDialog.findPanelComponentById=b.findPanelComponentById;Confluence.Editor.insertImageDialog=b.insertImageDialog;Confluence.Editor.ImageDialog._insertLinkToEditor=b._insertLinkToEditor;Confluence.Editor.ImageDialog._insertFilePlaceholderToEditor=
b._insertFilePlaceholderToEditor});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:page-editor-js', location = 'panel-components/panel-components-init.js' */
define("confluence-editor/panel-components/panel-components-init",["confluence/legacy-editor-global-AVOID-IF-POSSIBLE","ajs"],function(a,d){return function(){if(a&&a.ImageDialog&&a.ImageDialog.panelComponent){var b=a.FileDialog.eventListener,e=a.FileDialog.ExternalPanelView,f=a.FileDialog.SearchPanelView,g=a.FileDialog.AttachmentsPanelView,c=a.ImageDialog.panelComponent;"template"!==d.Meta.get("content-type")&&(b=new g({eventListener:b}),c.push(b));c.push(new e);c.push(new f)}}});
require("confluence/module-exporter").safeRequire("confluence-editor/panel-components/panel-components-init",function(a){require("ajs").toInit(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:page-editor-js', location = 'drafts/page-editor-drafts.js' */
define("confluence-editor/page-editor-drafts","jquery ajs confluence/meta confluence/api/constants confluence-editor/editor/page-editor-message confluence/analytics-support confluence/legacy-editor-global-AVOID-IF-POSSIBLE confluence/api/event confluence/dark-features confluence/api/ajax confluence-editor/loader/collaborative-helper".split(" "),function(b,f,e,r,u,n,c,o,k,v,l){function p(){var a=b("#content-title");return a.hasClass("placeholded")?"":a.val()}var q=false,m=false,g="",s=e.get("remote-user")!==
"",t=k.isEnabled("editor.ajax.save")&&!k.isEnabled("editor.ajax.save.disable");o.bind("editor-shared-drafts-published editor-shared-drafts-discarded",function(){m=q=false});o.bind("rte-ready",function(){g=p()});return{isDraftSaved:function(){return q},isDraftManuallySaved:function(){return m},isDraftBlank:function(){return f.Rte.Content.isEmpty()&&!b.trim(c.getCurrentTitle())},isNewContent:function(){return f.Rte.getEditor()&&e.getBoolean("new-page")===true},isDraftDirty:function(){return c.hasContentChanged()||
c.Drafts.isDraftSaved()&&!c.Drafts.isDraftManuallySaved()},unloadMessage:function(a){if(a&&(a.srcElement&&a.srcElement.activeElement instanceof HTMLIFrameElement)&&(e.get("content-type")==="page"||e.get("content-type")==="blogpost"))n.publish("confluence.editor.close",{source:"closeWindow",contentId:e.get("content-id"),currentVersion:e.get("page-version")||"null"});a=function(a,b){c.Drafts.save({skipErrorHandler:true,forceSave:a,manualSave:b,async:false})};if(typeof seleniumAlert!=="undefined")a();
else{var b;b=p();if(g!==b){g=b;b=true}else b=false;a(b);if(l.isCollaborativeEditingAvailable()&&l.hasUnsavedChanges())return "We haven\'t finished saving your changes. If you leave before seeing the \'Draft saved\' message, you might lose your changes."}},bindUnloadMessage:function(){b(window).bind("beforeunload",c.Drafts.unloadMessage)},unBindUnloadMessage:function(){b(window).unbind("beforeunload")},save:function(a){a=a||{};if(c.isSubmitting||!c.hasContentChanged()&&!a.forceSave)f.debug("skipping draft save");else{f.debug("preparing to save editor draft");var h=b("#newSpaceKey"),
g=b("#originalVersion"),k=c.inRichTextMode(),n=a.async===void 0?true:a.async,h={draftId:e.get("draft-id"),pageId:e.get("page-id"),type:f.params.draftType,title:p(),spaceKey:h.length?h.val():encodeURIComponent(e.get("space-key"))};b.extend(h,l.getEditorContent());if(g.length)h.pageVersion=parseInt(g.val(),10);b.ajax({type:"POST",url:r.CONTEXT_PATH+"/rest/tinymce/1/drafts",data:b.toJSON(h),contentType:"application/json",dataType:"text json",success:function(j){if(j!=null&&(!(s&&j.draftId===0)||!t)){c.contentHasChangedSinceLastSave=
false;k&&f.Rte.Content.editorResetContentChanged();q=true;m=!!a.manualSave;e.set("draft-id",j.draftId+"");b("#draftId",c.getCurrentForm()).val(j.draftId);b("#draft-error").remove();if(!l.isCollaborativeEditingAvailable()){var g=b("#draft-status"),d;if(!(d=j.time)){var i=new Date;d=i.getHours();var i=i.getMinutes(),h=d>11?"PM":"AM";d=d%12;d=(d==0?"12":d)+":"+(i<10?"0":"")+i+" "+h}i=m?f.format("Draft saved at {0}",d):f.format("Draft autosaved at {0}",d);g.attr("data-tooltip",i);g.html(i)}if(b.isFunction(a.onSuccessHandler))a.onSuccessHandler(j);
c.Drafts.lastSaveTime=d;o.trigger("rte-draft-saved",{draftId:j.draftId})}},error:function(b,c){if(!a.skipErrorHandler&&typeof a!=="undefined"&&typeof a.onErrorHandler==="function")a.onErrorHandler(c)},timeout:3E4,async:n})}}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/page-editor-drafts","Confluence.Editor.Drafts");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:page-editor-js', location = 'editor/page-editor-permissions.js' */
define("confluence-editor/editor/page-editor-permissions",["ajs","jquery"],function(b,d){var c={updateEditPageRestrictions:function(c,a,e,g){var f=d("#rte-button-restrictions"),i=f.find(".icon"),h="";c||a?(i.removeClass("aui-iconfont-locked aui-iconfont-unlocked icon-red").addClass(c?"aui-iconfont-locked icon-red":"aui-iconfont-unlocked icon-red"),h="Restrictions apply"):(i.removeClass("aui-iconfont-locked aui-iconfont-unlocked icon-red").addClass("aui-iconfont-unlocked"),h=e?
"Restrictions apply":"Unrestricted");f.attr("data-tooltip",h);f.data("explicit-restrictions",c);f.data("inherited-restrictions",a);f.data("restrictionsHash",g)},handleHeartbeat:function(j,a){if("undefined"!==typeof a.restrictionsHash){var e=d("#rte-button-restrictions");if(e.data("restrictionsHash")!==a.restrictionsHash)if(d("#update-page-restrictions-dialog").is(":visible")&&b.PagePermissions.updateRestrictionsDialog)b.PagePermissions.updateRestrictionsDialog(),
e.data("restrictionsHash",a.restrictionsHash);else{var g=""!==a.restrictionsHash,f=a.hasViewRestrictions,e=!!e.data("inherited-restrictions");c.updateEditPageRestrictions(f,e,g,a.restrictionsHash)}}},init:function(){b.bind("editor-heartbeat",c.handleHeartbeat);b.bind("edit-page-restrictions-updated",function(b,a){c.updateEditPageRestrictions(a.hasExplicitRestrictions,a.hasInheritedRestrictions,a.hasAnyExplicitRestrictions,a.restrictionsHash)})}};return c});
require("confluence/module-exporter").safeRequire("confluence-editor/editor/page-editor-permissions",function(b){var d=require("ajs"),c=require("jquery");d.PagePermissions=d.PagePermissions||{};c.extend(d.PagePermissions,{updateEditPageRestrictions:b.updateEditPageRestrictions});d.toInit(b.init)});
}catch(e){WRMCB(e)};