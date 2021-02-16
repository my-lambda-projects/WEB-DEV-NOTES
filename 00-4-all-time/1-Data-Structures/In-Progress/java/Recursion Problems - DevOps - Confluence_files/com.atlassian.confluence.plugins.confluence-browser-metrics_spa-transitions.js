WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:spa-transitions', location = '/js/reporters/spa-transitions-reporter.js' */
define("confluence-browser-metrics/reporters/spa-transitions-reporter",["jquery","ajs","confluence/storage-manager"],function(c,h,i){function j(a){var b=c(this).attr("href");if(b&&1===a.which&&!a.metaKey&&!a.ctrlKey&&!a.shiftKey&&(-1!==b.indexOf("/display/")||/spaces\/(.*)\/pages\/(.*)/.test(b)||-1!==b.indexOf("/viewpage.action"))&&(-1===b.indexOf("~")||-1!==b.indexOf("/",b.indexOf("~")+1)&&"/"!==b.slice(-1)))d.setItemQuietly(c("body").hasClass("dashboard")?e:f,!0,300);return!0}var g=c.Deferred(),
f="page-page",e="dashboard-page",d=i("confluence","spa-transition");h.toInit(function(){c(document).on("click","a",j);var a=null;d.doesContain(f)?a=f:d.doesContain(e)&&(a=e);a?(g.resolve({"confluence-spa-transition":a}),d.removeItem(a)):g.resolve({})});return function(a){return a.isInitial?g.promise():{}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:spa-transitions', location = '/js/marshallers/spa-transitions-marshaller.js' */
define("confluence-browser-metrics/marshallers/spa-transitions-marshaller",["confluence-browser-metrics/util/is-string"],function(b){return function(a){if(b(a["confluence-spa-transition"]))return{"confluence-spa-transition":a["confluence-spa-transition"]}}});
}catch(e){WRMCB(e)};