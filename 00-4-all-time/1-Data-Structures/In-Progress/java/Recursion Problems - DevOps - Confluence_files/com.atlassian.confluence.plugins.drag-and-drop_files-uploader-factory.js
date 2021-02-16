WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:files-uploader-factory', location = 'js/files-uploader-factory.js' */
define("confluence-drag-and-drop/files-uploader-factory",["confluence-drag-and-drop/filestore-uploader","confluence-drag-and-drop/upload-action-uploader","confluence/dark-features"],function(b,c,a){return{get:function(){return a.isEnabled("filestore.direct.upload")&&!a.isEnabled("filestore.direct.upload.force.disable")?new b:new c}}});
}catch(e){WRMCB(e)};