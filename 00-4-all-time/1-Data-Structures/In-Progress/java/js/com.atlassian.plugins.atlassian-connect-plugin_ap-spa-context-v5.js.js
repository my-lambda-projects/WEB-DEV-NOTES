WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-spa-context-v5', location = 'v5/js/spa-context/main.js' */
define("ac/spa-context",function(){var a=null,b=null;return{provideContainerApi:function(b){a=b},provideNavigationApi:function(a){b=a},isInIframe:function(){return null!==a},canSpaTransition:function(){return null!==b},getContainerApi:function(){return a},getNavigationApi:function(){return b}}});
}catch(e){WRMCB(e)};