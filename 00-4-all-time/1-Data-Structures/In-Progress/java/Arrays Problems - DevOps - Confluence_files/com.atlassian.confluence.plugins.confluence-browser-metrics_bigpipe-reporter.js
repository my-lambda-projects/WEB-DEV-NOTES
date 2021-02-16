WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:bigpipe-reporter', location = '/js/reporters/bigpipe-reporter.js' */
define("confluence-browser-metrics/reporters/bigpipe-reporter",["jquery"],function(a){var b=a.Deferred();a(function(){"undefined"!==typeof AJS.BigPipe&&AJS.BigPipe.metrics?b.resolve(AJS.BigPipe.metrics):b.resolve({})});return function(a){return a.isInitial?b.promise():{}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:bigpipe-reporter', location = '/js/marshallers/bigpipe-marshaller.js' */
define("confluence-browser-metrics/marshallers/bigpipe-marshaller",["confluence-browser-metrics/util/is-boolean"],function(b){return function(a){if(b(a.isBigPipeEnabled))return{isBigPipeEnabled:""+a.isBigPipeEnabled}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:bigpipe-reporter', location = '/js/marshallers/page-end-marshaller.js' */
define("confluence-browser-metrics/marshallers/page-end-marshaller",["confluence-browser-metrics/util/is-number"],function(b){return function(a){if(b(a.pageEnd))return{pageEnd:""+Math.floor(a.pageEnd)}}});
}catch(e){WRMCB(e)};