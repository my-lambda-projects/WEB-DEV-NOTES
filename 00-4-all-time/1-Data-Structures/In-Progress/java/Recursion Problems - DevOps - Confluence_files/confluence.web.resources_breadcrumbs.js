WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.web.resources:breadcrumbs', location = 'includes/js/breadcrumbs.js' */
define("confluence/breadcrumbs",["jquery","ajs","document","confluence/templates"],function(b,c,e,f){function d(a){return b.ajax({type:"GET",dataType:"json",data:a,url:c.contextPath()+"/pages/breadcrumb.action",error:function(){},success:function(a){a&&a.breadcrumbs&&b("ol#breadcrumbs").html(f.Breadcrumbs.render({breadcrumbs:a.breadcrumbs,ellipsisIndex:a.ellipsisIndex,ellipsisLength:a.ellipsisLength}))}})}return{init:function(){b(e).on("click","#ellipsis",function(){try{b("#breadcrumbs .hidden-crumb").removeClass("hidden-crumb"),
b(this).addClass("hidden-crumb"),c.trigger("breadcrumbs.expanded")}catch(a){c.log(a)}})},updateWithPageId:function(a){return d({pageId:a})},update:function(a,b){return d({spaceKey:a,title:b})}}});require("confluence/module-exporter").safeRequire("confluence/breadcrumbs",function(b){require("ajs").toInit(b.init)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:breadcrumbs', location = 'includes/soy/breadcrumbs.soy' */
// This file was automatically generated from breadcrumbs.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Breadcrumbs.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Breadcrumbs == 'undefined') { Confluence.Templates.Breadcrumbs = {}; }


Confluence.Templates.Breadcrumbs.render = function(opt_data, opt_ignored) {
  var output = '';
  var breadcrumbList3 = opt_data.breadcrumbs;
  var breadcrumbListLen3 = breadcrumbList3.length;
  for (var breadcrumbIndex3 = 0; breadcrumbIndex3 < breadcrumbListLen3; breadcrumbIndex3++) {
    var breadcrumbData3 = breadcrumbList3[breadcrumbIndex3];
    output += ((breadcrumbIndex3 == opt_data.ellipsisIndex) ? '<li id="ellipsis" title="Show all breadcrumbs"><span><strong>\u2026</strong></span></li>' : '') + '<li class="' + ((breadcrumbIndex3 == 0) ? 'first' : '') + ((breadcrumbIndex3 >= opt_data.ellipsisIndex && breadcrumbIndex3 < opt_data.ellipsisIndex + opt_data.ellipsisLength) ? 'hidden-crumb' : '') + '"><span><a href="' + soy.$$escapeHtml(breadcrumbData3.url) + '" target="_blank"> ' + soy.$$escapeHtml(breadcrumbData3.title) + '</a></span></li>';
  }
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Breadcrumbs.render.soyTemplateName = 'Confluence.Templates.Breadcrumbs.render';
}

}catch(e){WRMCB(e)};