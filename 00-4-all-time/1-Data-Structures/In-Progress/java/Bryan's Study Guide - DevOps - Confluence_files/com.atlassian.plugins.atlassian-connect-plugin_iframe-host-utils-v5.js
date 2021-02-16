WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:iframe-host-utils-v5', location = 'v5/js/iframe/host/util.js' */
window._AP=window._AP||{};
_AP.util={escapeSelector:function(a){if(!a)throw Error("No selector to escape");return a.replace(/[!"#$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g,"\\$\x26")},isGlobalDefined:function(a){return"undefined"!==typeof window[a]},awaitGlobal:function(a,b,c){c=c||100;if(_AP.util.isGlobalDefined(a))b(window[a]);else var d=setInterval(function(){_AP.util.isGlobalDefined(a)&&(clearInterval(d),b(window[a]))},c)},getBooleanFeatureFlag:function(a){if(AJS&&AJS.DarkFeatures&&AJS.DarkFeatures.isEnabled&&AJS.DarkFeatures.isEnabled(a))return!0;
var b=document.querySelector('meta[name\x3d"ajs-fe-feature-flags"]');if(!b)return!1;b=b.getAttribute("content");if(!b)return!1;var c={};try{c=JSON.parse(b)}catch(d){return!1}return c[a]&&"boolean"===typeof c[a].value?c[a].value:!1}};
}catch(e){WRMCB(e)};