WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:iframe-host-js-v5', location = 'v5/js/iframe/host/main.js' */
_AP.addonAttemptCounter={};_AP.util.awaitGlobal("connectHost",function(a){a.setExtensionConfigurationOptions("crev",window._AP.allJsVersion);a.setExtensionConfigurationOptions("resolve_inner_iframe_url",a.getBooleanFeatureFlag&&a.getBooleanFeatureFlag("com.atlassian.connect.resolve_inner_iframe_url"));a.onIframeEstablished(function(a){a.$el.closest(".ap-iframe-container").addClass("iframe-init")});a.onFrameClick(function(a){a.click()})});define("ac/create",function(){return{appendConnectAddon:function(a){return window._AP.appendConnectAddon(a)}}});
}catch(e){WRMCB(e)};