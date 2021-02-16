WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.web.resources:legacy-message-queue', location = 'includes/js/legacy-message-queue.js' */
define("confluence/legacy-message-queue",["window"],function(b){b.legacyMessageQueue||(b.legacyMessageQueue=[]);return{push:function(a){var c;c="string"!==typeof a.type?!1:a.hasOwnProperty("type")&&a.hasOwnProperty("payload")?!0:!1;if(!c)throw Error("legacyMessageQueue: received Invalid Message: "+JSON.stringify(a));b.legacyMessageQueue.push(a)}}});
}catch(e){WRMCB(e)};