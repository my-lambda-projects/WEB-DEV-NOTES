WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.web.resources:i18n', location = 'includes/js/i18n.js' */
define("confluence/i18n",[],function(){var b={"dnd.drop.here":"Drop Here","dnd.drop.zone.text":"Drop files here to attach them"};return{getText:function(a){return b[a]?b[a]:(console.error('Translation with key "'+a+'" is missing. Did you remember to add it to i18n.js?'),a)}}});
}catch(e){WRMCB(e)};