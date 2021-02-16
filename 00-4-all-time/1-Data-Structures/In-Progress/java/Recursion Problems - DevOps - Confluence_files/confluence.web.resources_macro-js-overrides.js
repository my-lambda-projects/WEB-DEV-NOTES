WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.web.resources:macro-js-overrides', location = 'includes/js/macro-js-overrides.js' */
define("confluence/macro-js-overrides",["confluence/api/dictionary","underscore"],function(e,d){var b=new e;return d.extend(b,{getFunction:function(a,c){if((a=b.get(a))&&"function"===typeof a[c])return a[c]},assignFunction:function(a,c){b.put(a,d.extend({},b.get(a),c))}})});
}catch(e){WRMCB(e)};