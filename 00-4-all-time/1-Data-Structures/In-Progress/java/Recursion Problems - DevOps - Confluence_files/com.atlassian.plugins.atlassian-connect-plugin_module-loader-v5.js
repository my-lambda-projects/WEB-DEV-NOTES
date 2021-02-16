WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:module-loader-v5', location = 'v5/js/iframe/host/module-loader.js' */
_AP.util.awaitGlobal("connectHost",function(a){a.defineModule("cookie",connectHostCookie);a.defineModule("history",connectHostHistory);a.defineModule(connectHostRequest["default"]);a.defineModule("navigator",require("ac/navigator/module"));a.defineModule("user",require("ac/user"));a.defineModule("context",require("ac/context"))});
}catch(e){WRMCB(e)};