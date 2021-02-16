WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:server-duration', location = '/js/reporters/server-duration-reporter.js' */
define("confluence-browser-metrics/reporters/server-duration-reporter",["internal/browser-metrics","jquery"],function(d,b){var c=b.Deferred();b(function(){var a=JSON.parse(b("#confluence-server-performance").html());null!==a&&a.serverDuration?c.resolve(a):c.resolve({})});return function(a){return a.isInitial?c.promise():{}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:server-duration', location = '/js/marshallers/server-duration-marshaller.js' */
define("confluence-browser-metrics/marshallers/server-duration-marshaller",["confluence-browser-metrics/util/is-number"],function(b){return function(a){if(b(a.serverDuration))return{serverDuration:""+Math.floor(a.serverDuration)}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:server-duration', location = '/js/marshallers/request-correlation-id-marshaller.js' */
define("confluence-browser-metrics/marshallers/request-correlation-id-marshaller",["confluence-browser-metrics/util/is-string"],function(b){return function(a){if(b(a.requestCorrelationId))return{requestCorrelationId:a.requestCorrelationId}}});
}catch(e){WRMCB(e)};