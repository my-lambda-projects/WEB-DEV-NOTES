WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-oauth-ui', location = 'js/oauth-dialog.js' */
// NOTE: this is used outside of Applinks. See atlassian-plugin.xml for more details about the associated restrictions

/**
 * @deprecated use applinks/feature/oauth-callback and applinks/feature/oauth-dance AMD module
 */
(function($, ApplinksEvents, OAuthCallback) {
    // rest-service.js will load the AppLinks name space
    AppLinks.authenticateRemoteCredentials = function (url, onSuccess, onFailure) {
        $('.applinks-error').remove();
        new OAuthCallback(url).onSuccess(onSuccess).onFailure(onFailure).open();
    };
})(require('applinks/lib/jquery'), require('applinks/common/events'), require('applinks/feature/oauth-callback'));

}catch(e){WRMCB(e)};