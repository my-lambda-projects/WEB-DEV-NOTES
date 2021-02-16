WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:lodash-amd', location = 'applinks/internal/lib/lodash-jslibs.js' */
define('applinks/lib/lodash', ['atlassian/libs/underscore-1.5.2'], function(lodash) {
        return lodash;
    });
}catch(e){WRMCB(e)};