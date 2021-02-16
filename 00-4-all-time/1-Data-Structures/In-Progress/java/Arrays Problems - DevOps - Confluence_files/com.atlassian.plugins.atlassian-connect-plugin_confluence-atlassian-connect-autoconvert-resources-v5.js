WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-atlassian-connect-autoconvert-resources-v5', location = 'v5/js/confluence/macro/autoconvert.js' */
(function(r,q){q("ac/confluence/macro/autoconvert",[],function(){var h=function(a){return a.replace(/[\-\[\]\/\(\)\*\+\?\.\\\^\$\|]/g,"\\$\x26")},k=function(a,d,c){return c.replace(new RegExp(a,"g"),d)},l=function(a){for(;-1!==a.indexOf("{}{}");)a=a.replace("{}{}","{}");a=h(a);a=k("{}","[^/]*?",a);return"^"+a+"$"},m=function(a){for(var d="http:// https:// http://{} https://{} http://{}.{} https://{}.{} http://{}.{}.{} https://{}.{}.{}".split(" "),c=0;c<d.length;c++)if(a===d[c])return!1;return!0},
n=function(a){return a&&a.macroName&&a.urlParameter&&a.matchers},p=function(a,d){return function(c,b,f){b=a.macroName;var e=a.urlParameter;if(c.source.match(a.matcher)){var g={};e&&(g[e]=c.source);d({name:b,params:g},f)}else f()}};return{escapePattern:h,replaceAll:k,factory:p,convertPatternToRegex:l,hasAllFields:n,isPatternSafe:m,registerAutoconvertHandlers:function(a,d){if(a)for(var c=a.length,b=0;b<c;b++)if(n(a[b]))for(var f=a[b].matchers.length,e=0;e<f;e++)if(m(a[b].matchers[e].pattern)){var g=
{macroName:a[b].macroName,urlParameter:a[b].urlParameter,matcher:l(a[b].matchers[e])};d.plugins.Autoconvert.autoConvert.addHandler(p(g,function(a,b){d.plugins.Autoconvert.convertMacroToDom(a,b,function(c,d,e){AJS.log("error converting macro [ "+a.name+" ] to dom elements [ "+e+" ]");b()})}))}}}})})(AJS.$,define);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-atlassian-connect-autoconvert-resources-v5', location = 'v5/js/confluence/macro/autoconvert-init.js' */
(function(c,a){a(["ac/confluence/macro/autoconvert"],function(a){AJS.bind("init.rte",function(){var b=WRM.data.claim("com.atlassian.plugins.atlassian-connect-plugin:confluence-atlassian-connect-autoconvert-resources.connect-autoconvert-data");a.registerAutoconvertHandlers(b,tinymce)})})})(AJS.$,require);
}catch(e){WRMCB(e)};