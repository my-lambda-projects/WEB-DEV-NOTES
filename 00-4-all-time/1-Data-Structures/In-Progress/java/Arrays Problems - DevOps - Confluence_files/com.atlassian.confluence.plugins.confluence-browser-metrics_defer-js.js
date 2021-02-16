WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:defer-js', location = '/js/reporters/defer-js-reporter.js' */
define("confluence-browser-metrics/reporters/defer-js-reporter",["confluence/dark-features","jquery"],function(a,b){return function(c){return c.isInitial&&a.isEnabled("defer.js.enable")&&0===b("#doctheme-anchor").length?{deferJs:!0}:{}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:defer-js', location = '/js/marshallers/defer-js-marshaller.js' */
define("confluence-browser-metrics/marshallers/defer-js-marshaller",["confluence-browser-metrics/util/is-boolean"],function(b){return function(a){if(b(a.deferJs))return{deferJs:""+a.deferJs}}});
}catch(e){WRMCB(e)};