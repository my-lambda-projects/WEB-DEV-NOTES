WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.web.resources:breadcrumbs-js', location = 'includes/js/breadcrumbs.js' */
define("confluence/breadcrumbs",["jquery","ajs","document","confluence/templates"],function(b,c,e,f){function d(a){return b.ajax({type:"GET",dataType:"json",data:a,url:c.contextPath()+"/pages/breadcrumb.action",error:function(){},success:function(a){a&&a.breadcrumbs&&b("ol#breadcrumbs").html(f.Breadcrumbs.render({breadcrumbs:a.breadcrumbs,ellipsisIndex:a.ellipsisIndex,ellipsisLength:a.ellipsisLength}))}})}return{init:function(){b(e).on("click","#ellipsis",function(){try{b("#breadcrumbs .hidden-crumb").removeClass("hidden-crumb"),
b(this).addClass("hidden-crumb"),c.trigger("breadcrumbs.expanded")}catch(a){c.log(a)}})},updateWithPageId:function(a){return d({pageId:a})},update:function(a,b){return d({spaceKey:a,title:b})}}});require("confluence/module-exporter").safeRequire("confluence/breadcrumbs",function(b){require("ajs").toInit(b.init)});
}catch(e){WRMCB(e)};