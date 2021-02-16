WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-embedded-file-view-resources', location = '/js/services/file-service.js' */
define("vfm/services/file-service",["ajs","jquery"],function(b,c){return{getCommentCount:function(d,e){var a="/rest/files/1.0/files/content/{0}/commentCount?attachmentId={1}",a=b.contextPath()+b.format(a,d,e);return c.get(a)}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-embedded-file-view-resources', location = '/js/components/embedded-file-view.js' */
define("vfm/components/embedded-file-view","jquery backbone ajs confluence confluence/dark-features vfm/view-file-macro-utils".split(" "),function(h,t,o,f,i,p){return{render:function(c){var c=h(c.el),a=c.find(".confluence-embedded-image, .confluence-embedded-file");if(a.hasClass("unknown-attachment")||a.attr("src")&&a.attr("src").indexOf("/confluence/plugins/servlet/confluence/placeholder/unknown-attachment")>=0)return this;var b="",j="",g="",e="",k="",l="",m=false;if(a.attr("data-linked-resource-type")===
"attachment"){m=true;g=a.attr("data-linked-resource-container-id");e=a.attr("data-file-src");k=a.attr("data-linked-resource-id");l=a.attr("data-linked-resource-default-alias")}var n=a.hasClass("confluence-embedded-image"),d=c.parent().is("a"),q=a.attr("data-has-thumbnail")==="true";if(n)b="image/png";else{b=a.attr("data-mime-type");j=a.attr("data-nice-type")!=="null"?a.attr("data-nice-type"):"generic file"}if(d)d="";else{var d="",r=a.attr("data-linked-resource-container-id"),s=a.attr("data-linked-resource-id");
if(r&&s){a=a.attr("data-unresolved-comment-count");a=parseInt(a,10);a=h.isNumeric(a)?a:0;a=a>9?"9+":a+"";a!=="0"&&(d=f.ViewFileMacro.Templates.overlayEmbeddedFileCommentCount({commentCountRep:a}))}}b=!n&&q?f.ViewFileMacro.Templates.overlayEmbeddedFileFileTypeDesc({fileType:p.getFileTypeTextFromNiceType(j),iconClass:o.Confluence.FileTypesUtils.getAUIIconFromMime(b)}):"";g=m&&b&&i.isEnabled("mediaviewer.companion")&&i.isEnabled("edit.in.app.discovery")?f.ViewFileMacro.Templates.overlayEditFileInApp({containerId:g,
fileSrc:e,attachmentId:k,fileName:l}):"";if(!d&&!b)return this;e=h(f.ViewFileMacro.Templates.overlayEmbeddedFile());e.append(d).append(b).append(g);b&&c.addClass("has-comment-overlay");c.append(e)}}});
}catch(e){WRMCB(e)};