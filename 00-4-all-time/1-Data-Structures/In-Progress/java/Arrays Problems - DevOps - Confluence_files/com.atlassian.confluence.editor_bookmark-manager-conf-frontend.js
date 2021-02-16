WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.editor:bookmark-manager-conf-frontend', location = 'bookmark/atlassian-editor-bookmark-manager.js' */
define("confluence-editor/atlassian-editor-bookmark-manager",["tinymce"],function(c){var b;return{storeBookmark:function(){var a=c.activeEditor,d=c.DOM.getViewPort(c.activeEditor.getWin());a.focus();a=a.selection.getRng();a=a.cloneRange&&"function"===typeof a.cloneRange?a.cloneRange():a.duplicate&&a.duplicate()||a;b={scrollX:d.x,scrollY:d.y,range:a}},restoreBookmark:function(){var a=c.activeEditor.selection,d=c.activeEditor.getWin();b&&(d.scrollTo(b.scrollX,b.scrollY),d.focus(),a.setRng(b.range));
b=null}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/atlassian-editor-bookmark-manager","AJS.Rte.BookmarkManager");
}catch(e){WRMCB(e)};