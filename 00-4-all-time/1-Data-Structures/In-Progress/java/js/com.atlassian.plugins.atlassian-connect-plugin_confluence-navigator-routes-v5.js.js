WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-navigator-routes-v5', location = 'v5/js/confluence/navigator/routes.js' */
(function(l,f){f(["ac/navigator/routes","ac/navigator/utils"],function(f,g){function h(a,c){l.ajax({url:e+"/rest/api/content/"+a,dataType:"json"}).success(c).fail(function(){AJS.error("Content not found (ID\x3d"+a+")")})}var m=["page","blogpost","attachment","comment"],e=AJS.contextPath();AJS.Meta.get("enabled-dark-features");var d=g.hasContext,k=g.appendQueryParam;f.addRoutes({dashboard:"",contentedit:function(a,c){d(a,"contentId")&&h(a.contentId,function(b){var a=b.type;/^ac:/.test(a)?c(e+"/display/"+
b.space.key+"/customcontent/edit/"+b.id):-1!==m.indexOf(a)?c(e+"/pages/edit"+a+".action?pageId\x3d"+b.id):AJS.error('Cannot navigate to "contentedit" target for content (ID\x3d'+b.id+"). Content type \x3c"+a+"\x3e is not supported.")})},spacetools:"/spaces/viewspacesummary.action?key\x3d{spaceKey}",spaceview:"/spaces/{spaceKey}",userprofile:function(a,c){var b;d(a,"userAccountId")?b="/people/"+a.userAccountId:d(a,"username")&&(b=e+"/display/~"+a.username);b&&c(b)},contentview:function(a,c){d(a,"contentId")&&
h(a.contentId,function(b){b=e+b._links.webui;d(a,"versionOverride")&&(b=k(b,"versionOverride",a.versionOverride));d(a,"embeddedContentRender")&&(b=k(b,"embeddedContentRender",a.embeddedContentRender));b&&c(b)})},contentlist:function(a,c){var b=encodeURIComponent(a.spaceKey),d=a.contentType;"page"===d?c(e+"/spaces/"+b+"/pages"):"blogpost"===d?c(e+"/spaces/"+b+"/blog"):/^ac:/.test(d)?c(e+"/display/"+b+"/customcontent/list/"+encodeURIComponent(d)):AJS.error('Cannot navigate to "contentlist" target for content type \x3c'+
d+"\x3e")}});g.enableApi()})})(AJS.$,require);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-navigator-routes-v5', location = 'v5/js/confluence/navigator/context.js' */
(function(c,a){a(["ac/navigator/context","confluence/api/navigator-context"],function(a,b){a.setContextFunction(b.getCurrent)})})(AJS.$,require);
}catch(e){WRMCB(e)};