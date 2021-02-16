WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.web.resources:breadcrumbs-jquery', location = 'includes/js/breadcrumbs-jquery.js' */
define("confluence/breadcrumbs-jquery",["jquery","confluence/templates"],function(e,h){return function(a){var k=this,f=[],b=0,c=a.length-1,d=a[b],l=k.closest(".breadcrumbs-container").width(),g=function(){return k.width()<l};for(f.push(h.Dialog.breadcrumbItem({text:d.title,title:d.title,className:b===c?"last":""}));b++<c;)d=a[b],f.push(h.Dialog.breadcrumbItem({text:d.title,title:d.title,className:b===c?"last":""}));this.html(f.join(""));a=e("li a span",this);a.each(function(a){0!==a&&a!==c&&e(this).shortenUntil(g)});
e(a.get(0)).shortenUntil(g);e(a.get(c)).shortenUntil(g);return this}});require("confluence/module-exporter").exportModuleAsGlobal("confluence/breadcrumbs-jquery","jQuery.fn.renderBreadcrumbs");
}catch(e){WRMCB(e)};