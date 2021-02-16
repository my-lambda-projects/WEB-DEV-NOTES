WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-adapter', location = 'js/link-adapter.js' */
define("confluence-link-browser/link-adapter",["ajs","jquery","confluence-link-browser/link-object"],function(d,e,f){return{setLink:function(a){var b=d.Rte.getEditor(),b=e(b.dom.create("a"),b.getDoc());a.fillNode(b);a=require("tinymce").confluence.NodeUtils.replaceSelection(b);e("#comments-section").length&&d.Rte.fixEditorFocus();return a},getLink:function(){var a,b,c;a=d.Rte.getEditor().selection;var g=a.getNode();if(c=e(g).parents().andSelf().filter("a[href]")[0])return a.select(c),b=a.getContent({format:"text"}),
f.fromSelectedAnchor(c,b);c=a.getRng(!0);b=a.getContent({format:"text"});a=a.getContent();return f.fromSelection(c,g,a,b)}}});
}catch(e){WRMCB(e)};