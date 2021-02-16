WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-request-marshal-v5', location = 'v5/js/confluence/request-marshal/request-marshal.js' */
define("ac/confluence/request-marshal",function(){var a=["/rest/","/rpc/","/download/","/images/","/plugins/"];return{getWhitelist:function(){return a},marshal:function(b){var c=!1;a.forEach(function(a){0===b.url.indexOf(AJS.contextPath()+a)&&(c=!0)},this);window.connectHost.trackAnalyticsEvent("jsapi.request.filter",{value:c,url:b.url});return!0}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-request-marshal-v5', location = 'v5/js/confluence/request-marshal/request-marshal-loader.js' */
require(["ac/confluence/request-marshal"],function(a){connectHostRequest.addRequestMarshal(a.marshal)});
}catch(e){WRMCB(e)};