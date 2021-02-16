WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:macro-editor-resources-v5', location = 'v5/js/confluence/macro/metadata-cache.js' */
define("ac/confluence/macro/metadata-cache",[],function(){var b={};return{getMetaData:function(a){if(b.hasOwnProperty(a))return b[a];var c=WRM.data.claim(a);return b[a]=c},setMetaData:function(a,c){b[a]=c}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:macro-editor-resources-v5', location = 'v5/js/confluence/macro/macro-preview-override-no-transformer.js' */
AJS.bind("init.rte",function(){require(["ac/confluence/macro/editor","confluence/macro-js-overrides","ac/confluence/macro/metadata-cache"],function(e,g,f){e=f.getMetaData("com.atlassian.plugins.atlassian-connect-plugin:macro-editor-resources-v5.macroPreviewData");var h=f.getMetaData("com.atlassian.plugins.atlassian-connect-plugin:macro-editor-resources-v5.editorData"),b;for(b in e)e.hasOwnProperty(b)&&g.assignFunction(b,{updateMacroPreviewIframe:function(b){return function(c,d,a){c=$(d).parent();
d=document.createElement("div");d.innerHTML=a;a=d.getElementsByClassName("ap-container");a=a.length?a[0].outerHTML:void 0;return a?(c.empty(),c.html(h.hasOwnProperty(b)?"":a),c.find(".ap-container").addClass("ac-macro-preview-override"),AJS.trigger("macro-browser.preview-ready"),!0):!1}}(b)})})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:macro-editor-resources-v5', location = 'v5/js/confluence/macro/property-panel-override-no-transformer.js' */
require(["ac/confluence/macro/property-panel-controls","ac/confluence/macro/property-panel-iframe","ac/confluence/macro/property-panel-event","confluence/macro-js-overrides","ac/confluence/macro/metadata-cache"],function(e,f,g,c,h){AJS.bind("init.rte",function(){var d=h.getMetaData("com.atlassian.plugins.atlassian-connect-plugin:macro-editor-resources-v5.propertyPanelData"),a;for(a in d)if(d.hasOwnProperty(a)){var b=a;c.assignFunction(b,f(AJS.params.contextPath+d[a].URL));c.assignFunction(b,e(b));
c.assignFunction(b,g)}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:macro-editor-resources-v5', location = 'v5/js/confluence/macro/editor-override-no-transformer.js' */
(function(){function a(b){b=b||{};require(["wrm","ac/confluence/macro/editor","confluence/macro-js-overrides","ac/confluence/macro/metadata-cache"],function(a,g,h,e){function f(){var a=e.getMetaData("com.atlassian.plugins.atlassian-connect-plugin:macro-editor-resources-v5.editorData"),d;for(d in a)if(a.hasOwnProperty(d)){var c=a[d];(function(a,c){h.assignFunction(a,{opener:function(b){b=$.extend({name:a},b);g.openCustomEditor(b,c)}})})(d,{width:c.WIDTH,height:c.HEIGHT,addonKey:c.ADDON_KEY,editTitle:c.EDIT_TITLE,
insertTitle:c.INSERT_TITLE,url:AJS.params.contextPath+c.URL})}b.trigger&&"function"===typeof b.trigger&&b.trigger()}b.forceRequire?a.forceRequire("wr!com.atlassian.plugins.atlassian-connect-plugin:macro-editor-resources-v5",{contexts:["editor"]},function(b){try{var d=JSON.parse(a._unparsedData["com.atlassian.plugins.atlassian-connect-plugin:macro-editor-resources-v5.editorData"]);e.setMetaData("com.atlassian.plugins.atlassian-connect-plugin:macro-editor-resources-v5.editorData",d)}catch(c){console.warn(c)}f()}):
f()})}AJS.bind("init.rte",function(){a()});AJS.bind("reset.rte",function(b){a({forceRequire:!0,trigger:function(){AJS.trigger("reset.complete")}})})})();
}catch(e){WRMCB(e)};