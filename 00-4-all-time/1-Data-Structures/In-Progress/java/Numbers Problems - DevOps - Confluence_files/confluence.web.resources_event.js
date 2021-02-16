WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.web.resources:event', location = 'includes/js/api/event.js' */
define("confluence/api/event",["ajs"],function(a){return{bind:function(){a.bind.apply(this,arguments)},unbind:function(){a.unbind.apply(this,arguments)},trigger:function(){a.trigger.apply(this,arguments)},stopEvent:function(){a.stopEvent.apply(this,arguments)}}});
}catch(e){WRMCB(e)};