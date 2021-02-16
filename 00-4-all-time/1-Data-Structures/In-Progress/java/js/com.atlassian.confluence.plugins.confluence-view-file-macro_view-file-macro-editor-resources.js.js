WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-editor-resources', location = 'templates/view-file-macro-editor.soy' */
// This file was automatically generated from view-file-macro-editor.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.ViewFileMacro.Templates.Editor.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.ViewFileMacro == 'undefined') { Confluence.ViewFileMacro = {}; }
if (typeof Confluence.ViewFileMacro.Templates == 'undefined') { Confluence.ViewFileMacro.Templates = {}; }
if (typeof Confluence.ViewFileMacro.Templates.Editor == 'undefined') { Confluence.ViewFileMacro.Templates.Editor = {}; }


Confluence.ViewFileMacro.Templates.Editor.viewFilePropertyPanelHeader = function(opt_data, opt_ignored) {
  return '<div class="view-file-property-panel-header"><span class="file-name"><span class="aui-icon aui-icon-small ' + soy.$$escapeHtml(opt_data.fileIcon) + '"></span>' + soy.$$escapeHtml(opt_data.fileName) + '</span></div>';
};
if (goog.DEBUG) {
  Confluence.ViewFileMacro.Templates.Editor.viewFilePropertyPanelHeader.soyTemplateName = 'Confluence.ViewFileMacro.Templates.Editor.viewFilePropertyPanelHeader';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-editor-resources', location = '/js/components/view-file-macro-properties-panel.js' */
define("vfm/components/view-file-macro-properties-panel","jquery underscore ajs confluence confluence/jsUri tinymce vfm/view-file-macro-utils".split(" "),function(h,k,f,p,v,l,m){function q(e,c){var a=new v(e);a.getQueryParamValue("height")!==""&&a.replaceQueryParam("height",c);return a.toString()}function r(e){for(var e=e.attr(s),c=[],a="",b=0;b<e.length;b++){var d=e[b];if(d==="\\"){a=a+d;b+1!==e.length&&(a=a+e[++b])}else if(d==="|"){c.push(a);a=""}else a=a+d}c.push(a);return c}function t(e,c){var a=
r(e);return(a=k.find(a,function(a){return a.indexOf(c+"=")>=0}))?a.split("=")[1]:null}function o(e,c){if(h(e).attr("class").indexOf("selected")===-1){f.Confluence.PropertyPanel.destroy();for(var a=Object.keys(n),b=h(e).attr("class"),d=0;d<a.length;d++)if(b.indexOf(a[d])!==-1){var i=n[a[d]],b=h(c);b.attr("height",i);var g=b.attr("src");if(g!=null&&g.indexOf("/servlet/view-file-macro/placeholder")>=0){b.attr("src",q(b.attr("src"),i));b.attr("data-mce-src",q(b.attr("data-mce-src"),i));l.isGecko&&f.Rte.getEditor().execCommand("mceRepaint",
false)}var i="height="+i,g=r(b),j=t(b,"height");if(j){j=k.indexOf(g,"height="+j);g[j]=i}else g.push(i);b.attr(s,g.join("|"));l.activeEditor.undoManager.add();h(c).click();f.trigger("analyticsEvent",{name:"confluence.view-file.resize."+a[d].substring(a[d].lastIndexOf("-")+1,a[d].length)});break}}}var s="data-macro-parameters",n={"view-file-size-small":"150","view-file-size-medium":"250","view-file-size-large":"400"},u=[{className:"macro-property-panel-view-file-size-small",text:"",tooltip:"Small thumbnail",
click:o},{className:"macro-property-panel-view-file-size-medium",text:"",tooltip:"Medium thumbnail",click:o},{className:"macro-property-panel-view-file-size-large",text:"",tooltip:"Large thumbnail",click:o},null,{className:"macro-property-panel-view-file-convert-to-link",text:"Show as link",tooltip:"Show as link",
click:function(e,c){f.trigger("analyticsEvent",{name:"confluence.view-file.convert.to-link-trigger"});f.Confluence.PropertyPanel.destroy();var a=m.getParameterByName(h(c).attr("src"),"attachmentId"),a=f.REST.makeUrl("attachment/"+a+".json");h.ajax({type:"GET",url:a,contentType:"application/json; charset=utf-8",dataType:"json"}).success(function(a){a=p.Link.fromREST(a).insert();l.activeEditor.undoManager.add();l.activeEditor.focus();a.click()})}}];return{init:function(){f.Confluence.PropertyPanel.Macro.registerInitHandler(function(e,
c){var a=k.reject(c,function(a){return a.className.indexOf("macro-placeholder-property-panel-edit-button")>-1||a.className.indexOf("macro-placeholder-property-panel-remove-button")>-1});c.splice(0,c.length);for(var b=0;b<a.length;b++)c.push(a[b]);a=h(e);b=a.attr("data-mce-src");if(!(b&&b.indexOf("placeholder/unknown-attachment")>-1)){for(var b=0,d=u.length;b<d;b++)c.push(u[b]);(a=a.attr("height"))||(a=f.Meta.get("content-type")==="comment"?m.DEFAULT_HEIGHT_IN_COMMENT:m.DEFAULT_HEIGHT);var i=a;if(a=
k.find(Object.keys(n),function(a){return n[a]===i})){b=0;for(d=c.length;b<d;b++){var g=c[b],j=g.className.replace(" selected","");j.indexOf("macro-property-panel-"+a)!==-1&&(j=j+" selected");g.className=j}}}},"view-file");f.bind("created.property-panel",function(e,c){var a=h(c.anchor);if(a.attr("data-macro-name")==="view-file"){var b=p.ViewFileMacro.Templates.Editor.viewFilePropertyPanelHeader,d=t(a,"name"),a=m.getParameterByName(a.attr("src"),"mimeType"),a=f.Confluence.FileTypesUtils.getAUIIconFromMime(a),
b=h(b({fileName:d,fileIcon:a}));c.panel.find(".aui-property-panel").prepend(b);c.shouldFlip&&c.tip.css({top:c.panel.outerHeight()})}})}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-editor-resources', location = '/js/components/view-file-macro-link-properties-panel.js' */
define("vfm/components/view-file-macro-link-properties-panel",["jquery","ajs","tinymce","vfm/view-file-macro-utils"],function(e,b,i,g){return{init:function(){b.bind("link-property-panel-buttons.created",function(k,h){var j=h.buttons,f=h.link,a;if(f){var d=e(f);a=d.attr("data-linked-resource-type");d=d.attr("data-linked-resource-content-type");a=b.MacroBrowser.getMacroMetadata("view-file")&&"attachment"===a&&!(d&&0===d.indexOf("image"))}else a=!1;a&&j.push({className:"link-property-panel-convert-to-thumbnail-button",
text:"Show as thumbnail",tooltip:"Show as thumbnail",click:function(){b.Confluence.PropertyPanel.destroy();var a=b.REST.makeUrl("attachment/"+e(f).attr("data-linked-resource-id")+".json");e.ajax({type:"GET",url:a,contentType:"application/json; charset=utf-8",dataType:"json"}).success(function(c){var a={name:c.fileName};b.Data.get("content-id")!==c.ownerId&&(a.page=c.parentTitle,a.space=c.space.key,"blogpost"===
c.parentContentType&&(c=c.createdDate.date.split("-"),a.date=c[0]+"/"+c[1]+"/"+c[2].substring(0,2)+"/"));a.height="comment"===b.Meta.get("content-type")?g.DEFAULT_HEIGHT_IN_COMMENT:g.DEFAULT_HEIGHT;a={contentId:b.Meta.get("content-id")||"0",macro:{name:"view-file",params:a}};i.confluence.MacroUtils.insertMacro(a,f).done(function(a){e(a).click()})});b.trigger("analyticsEvent",{name:"confluence.view-file.convert.to-thumbnail-trigger"})}})})}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-editor-resources', location = '/js/components/vfm-editor-poller.js' */
define("vfm/components/vfm-editor-poller","ajs jquery underscore tinymce vfm/view-file-macro-utils vfm/services/conversion-service".split(" "),function(q,i,l,h,b,m){function o(){if(h.activeEditor&&f){var a=i("img[data-macro-name='view-file'][src*='thumbnailStatus="+b.THUMBNAIL_STATUS_IN_PROGRESS+"'][data-thumbnail-status!='"+b.THUMBNAIL_STATUS_ERROR+"']",h.activeEditor.dom.doc);if(a.length>0){var n=false;a.each(function(){var a=i(this).attr("src"),j=b.getParameterByName(a,"attachmentId"),a=b.getParameterByName(a,
"version");if(!c[j]||c[j].version!==a){c[j]={version:a};n=true}});if(n)d=b.THUMBNAIL_POLLING_PERIOD;m.postThumbnailConversionResults(c).then(function(a){if(h.activeEditor&&f){l.each(a,function(a,e){if(c[e]){var d=i("img[data-macro-name='view-file'][src*='attachmentId="+e+"']",h.activeEditor.dom.doc),g=c[e].version;d.attr("data-thumbnail-status",a);if(a===b.THUMBNAIL_STATUS_CONVERTED){var f=d.attr("src"),g=m.getThumbnailUrl(e,g),g=b.addParamsToUrl(g,{attachmentId:e,mimeType:b.getParameterByName(f,
"mimeType")});d.attr("src",g);delete c[e]}else a===b.THUMBNAIL_STATUS_ERROR&&delete c[e]}});d=l.isEmpty(c)?b.THUMBNAIL_POLLING_PERIOD:d*p;k()}})}else if(a.length===0){d=b.THUMBNAIL_POLLING_PERIOD;k()}}}function k(){f=true;a&&clearTimeout(a);a=setTimeout(o,d)}var a,f=false,c={},d=b.THUMBNAIL_POLLING_PERIOD,p=b.THUMBNAIL_POLLING_BACKOFF_RATIO;return{startPolling:k,stopPolling:function(){if(a){clearTimeout(a);a=void 0}f=false;c={};d=b.THUMBNAIL_POLLING_PERIOD}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-editor-resources', location = '/js/vfm-editor.js' */
require(["ajs","tinymce","vfm/components/view-file-macro-properties-panel","vfm/components/view-file-macro-link-properties-panel","vfm/components/vfm-editor-poller"],function(a,e,c,d,b){a.toInit(function(){a.MacroBrowser.setMacroJsOverride("view-file",{opener:function(){}});c.init();d.init()});a.bind("rte-ready",b.startPolling);a.bind("rte-destroyed",b.stopPolling)});
}catch(e){WRMCB(e)};