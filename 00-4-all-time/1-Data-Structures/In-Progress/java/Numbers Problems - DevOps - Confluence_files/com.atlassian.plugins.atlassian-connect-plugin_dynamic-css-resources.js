WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:dynamic-css-resources', location = 'js/style/link-style-css.js' */
/**
 * Look up addonKey+moduleKey from WRM data, then add Link tag onto page.
 * Browser will request for additional css from AddonStyleServlet
 */
define("ac/confluence/style/link-style-css", [], function () {
    "use strict";

    var cache = {};
    var URI_MAX_LENGTH = 2000;
    var STYLE_KEYS = [
        'com.atlassian.plugins.atlassian-connect-plugin:featured-macro-css-resources.featuredMacroCssData',
        'com.atlassian.plugins.atlassian-connect-plugin:icons-css-resources.iconsCssData',
        'com.atlassian.plugins.atlassian-connect-plugin:blueprint-css-resources.iconsCssData'
        //Add more keys here...
    ];

    function getIconStyleUrl() {
        return AJS.contextPath() + "/plugins/servlet/ac/css-style?";
    }

    function addLinkTag(params) {
        var uri = getIconStyleUrl() + params;
        var linkTag = document.createElement("link");
        linkTag.rel = "stylesheet";
        linkTag.href = uri;
        linkTag.type = "text/css";

        document.head.appendChild(linkTag);
    }

    function appendParam(urlBuffer, paramsString) {
        return urlBuffer + (urlBuffer.length == 0 ? "" : "&") + paramsString;
    }

    return {
        addLinkTags : function() {
            var urlBuffer = "";
            for (var key in STYLE_KEYS) {
                var styleKey = STYLE_KEYS[key];
                if (!cache[styleKey]) {
                    cache[styleKey] = WRM.data.claim(styleKey);
                }
                var addonToModules = cache[styleKey];

                for (var addon in addonToModules) {
                    var modules = addonToModules[addon];
                    var paramsString = addon + "=" + modules.join();
                    if (appendParam(urlBuffer, paramsString).length > (URI_MAX_LENGTH - getIconStyleUrl().length)) {
                        //add on link tag using the current urlBuffer
                        addLinkTag(urlBuffer);
                        //reset urlBuffer
                        urlBuffer = "";
                    }
                    urlBuffer = appendParam(urlBuffer, paramsString);
                }
            }

            if (urlBuffer.length > 0) {
                addLinkTag(urlBuffer);
            }
        }
    };
});







}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:dynamic-css-resources', location = 'js/style/link-style-css-init.js' */
/**
 * js to execute link-icon-css
 */
require(["ac/confluence/style/link-style-css"], function(linkIconCss) {
    linkIconCss.addLinkTags();
});

}catch(e){WRMCB(e)};