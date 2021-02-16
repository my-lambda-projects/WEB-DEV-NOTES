WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.macros.advanced:editor_includemacro-conf-frontend', location = 'com/atlassian/confluence/plugins/macros/advanced/js/include-macro.js' */
define("confluence-advanced-macros/include-macro","ajs window jquery confluence/meta confluence/api/browser confluence-editor/tinymce3/plugins/propertypanel/js/property-panel-macros".split(" "),function(c,f,h,d,e,i){var a={ID_BUTTON:"goto-page",init:function(){var c=d.get("context-path"),j=d.get("content-id"),g=new e(f.navigator.userAgent);i.registerButtonHandler(a.ID_BUTTON,function(d,a){var b=h(a).attr("data-macro-default-parameter"),b=c+"/plugins/servlet/confluence/include-page-macro/goto?location="+
b+"&contentId="+j,e=g&&g.isIE()?"_blank":"confluence-goto-link-include-macro-"+a.id;(b=f.open(b,e))&&b.focus()})}};return a});require("confluence/module-exporter").safeRequire("confluence-advanced-macros/include-macro",function(c){require("ajs").bind("init.rte",c.init)});
}catch(e){WRMCB(e)};