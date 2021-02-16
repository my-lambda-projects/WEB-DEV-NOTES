WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-atlassian-connect-content-byline-resources-v5', location = 'v5/js/confluence/contentbyline/content-byline-view.js' */
AJS.toInit(function(h){function k(b,c){if(b.startsWith("http:")||b.startsWith("https:")||b.startsWith("data:"))return b;var d=c.options.origin,a;a=b.startsWith("/")?b:"/"+b;return d+a}var e;AJS.bind("contentProperty.update",function(b,c){if(c&&c.contentProperty&&c.contentProperty.key){e=e||WRM.data.claim("com.atlassian.plugins.atlassian-connect-plugin:confluence-atlassian-connect-content-byline-resources.connect-content-byline-data");var d=e[c.contentProperty.key];if(d){var d=h(document.getElementById(d)),
a=c.contentProperty.value,f=a.name,g=a.tooltip,a=a.icon;f&&f.value&&d.find("span").text(f.value);g&&g.value&&d.attr("title",g.value);a&&a.url&&d.find("img").attr("src",k(a.url,c.extension))}}})});
}catch(e){WRMCB(e)};