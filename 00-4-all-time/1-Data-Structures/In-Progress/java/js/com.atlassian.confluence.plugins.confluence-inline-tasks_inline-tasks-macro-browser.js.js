WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:inline-tasks-macro-browser', location = 'js/macro-browser-overrides.js' */
define("confluence-inline-tasks/macro-browser-overrides",["jquery","ajs","confluence-inline-tasks/space-page-picker-shim","confluence/meta"],function(d,a,c,b){return{fields:{string:{spaceAndPage:function(h){var g=h.multiple?"autocomplete-multi-space-and-page":"autocomplete-space-and-page";var f=d(Confluence.Templates.MacroBrowser.macroParameter());var i=f.find("input[type='text']");i.addClass(g).attr("data-none-message","Not found");if(h.required){i.keyup(a.MacroBrowser.processRequiredParameters)}i.auiSelect2(c.build({multiple:h.multiple,orgElement:i,inputSpaceId:"legacy-macro-param-spaces",inputSpaceCatId:"legacy-macro-param-space-cats",inputPageId:"legacy-macro-param-pages"}));var e={setValue:function(j){c.setValue(j,i)}};return a.MacroBrowser.Field(f,i,e)}}},beforeParamsSet:function(f){var g=c.combineMapToString({page:f.pages,space:f.spaces});if(g){f.spaceAndPage=g}var e=b.get("space-key");if(!!e&&!f.spaceAndPage){f.spaceAndPage="space:"+e}delete f.pages;delete f.spaces;return f},beforeParamsRetrieved:function(f){var e=c.splitStringToMap(f.spaceAndPage);if(e.page.length){f.pages=e.page.join(",")}if(e.space.length){f.spaces=e.space.join(",")}delete f.spaceAndPage;return f}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:inline-tasks-macro-browser', location = 'js/macro-browser-overrides-call.js' */
require("confluence/module-exporter").safeRequire("confluence-inline-tasks/macro-browser-overrides",function(a){require("ajs").MacroBrowser.setMacroJsOverride("tasks-report-macro",a)});
}catch(e){WRMCB(e)};