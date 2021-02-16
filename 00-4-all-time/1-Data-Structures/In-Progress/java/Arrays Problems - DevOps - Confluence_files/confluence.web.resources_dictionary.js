WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.web.resources:dictionary', location = 'includes/js/api/dictionary.js' */
define("confluence/api/dictionary",[],function(){return function(){var a={};return{get:function(b){return a[b]},put:function(b,c){return a[b]=c},reset:function(){a={}},elements:function(){return a}}}});
}catch(e){WRMCB(e)};