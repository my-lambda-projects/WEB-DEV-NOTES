WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:files-upload-analytics', location = 'js/analytics/files-upload-analytics.js' */
define("conf/confluence-drag-and-drop/analytics/files-upload-analytics",["ajs","underscore","confluence/meta"],function(e,b,f){return{triggerEvent:function(c,a,d,b){a&&a.length&&(a={contentType:f.get("content-type"),multiple:1<a.length,number:a.length,isAllImage:void 0===d?this._isAllImages(a):d,source:b},e.trigger("analyticsEvent",{name:c,data:a}))},_isAllImages:function(c){return b.every(c,function(a){return a.nativeFile&&a.nativeFile.type&&0===a.nativeFile.type.indexOf("image/")})}}});
}catch(e){WRMCB(e)};