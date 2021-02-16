WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.web.resources:dialog-breadcrumbs', location = 'includes/js/dialog-breadcrumbs.js' */
define("confluence/dialog-breadcrumbs","ajs jquery confluence/meta confluence/templates confluence/breadcrumbs-jquery confluence-rest/confluence-rest".split(" "),function(c,d,n,m,r,q){var e={},p=function(a,k,h){var f=a.pageId?a.pageId+":"+a.fileName:a.spaceKey+":"+a.title+":"+a.postingDay+":"+a.fileName;f in e?k(e[f],"success"):d.ajax({type:"GET",dataType:"json",data:a,url:c.contextPath()+"/pages/breadcrumb.action",error:h||function(){},success:function(a,c){if(a&&a.breadcrumbs){for(var b=d.makeArray(a.breadcrumbs);b[0]&&
"userinfo"!==a.type&&/peopledirectory\.action$/.test(b[0].url);)b.shift();"page"===a.type&&b[1]&&/pages\.action/.test(b[1].url)&&b.splice(1,1);b.type=a.type;e[f]=b;k(b,c)}else h(a,c)}})};return{getBreadcrumbsDefault:p,Breadcrumbs:function(a,k){var h=0;return{update:function(f,l){a.html(m.Dialog.breadcrumbLoading());var e=h+=1,b=function(){return e!==h?(c.debug("Breadcrumb response for ",f," is stale, ignoring."),!0):!1};(k||p)(f,function(e,g){if(!b())if("success"===g&&e){g=f.spaceKey;a.renderBreadcrumbs(e);
if(!(g=g!==n.get("space-key")))a:{for(g=1;g<e.length;g++)if(e[g].title===n.get("page-title")){g=!1;break a}g=!0}g?(l.clearErrors(),d(l.moveButton).prop("disabled",!1)):(l.error("You cannot move a page to be underneath itself or its children."),d("li:last-child",a).addClass("warning"))}else a.html(m.Dialog.breadcrumbError())},function(d){b()||(a.html(m.Dialog.breadcrumbError()),404===d.status&&l.error("The specified page was not found."))})}}},getBreadcrumbsLegacy:function(a,k,h){if(!a.id)throw Error("id is a required parameter in 'options'");
if(!a.type)throw Error("type is a required parameter in 'options'");var f=a.id+":"+a.type;f in e?k(e[f],"success"):d.ajax({type:"GET",dataType:"json",data:a,url:c.contextPath()+q.REST.getBaseUrl()+"breadcrumb",error:h||function(){},success:function(a,c){if(a&&a.breadcrumbs){for(var b=d.makeArray(a.breadcrumbs);b[0]&&"userinfo"!==a.type&&/peopledirectory.action$/.test(b[0].url);)b.shift();b.type=a.type;e[f]=b;k(b,c)}else h(a,c)}})}}});
require("confluence/module-exporter").safeRequire("confluence/dialog-breadcrumbs",function(c){var d=require("ajs");d.toInit(function(){d.MoveDialog||(d.MoveDialog={});d.MoveDialog.Breadcrumbs=c.Breadcrumbs;d.MoveDialog.getBreadcrumbs=c.getBreadcrumbsDefault;d.Breadcrumbs={};d.Breadcrumbs.getBreadcrumbs=c.getBreadcrumbsLegacy;Confluence.Dialogs||(Confluence.Dialogs={});Confluence.Dialogs.Breadcrumbs=d.Breadcrumbs;Confluence.Dialogs.Breadcrumbs.getBreadcrumbs=c.getBreadcrumbsLegacy;Confluence.Dialogs.Breadcrumbs.Controller=
c.Breadcrumbs;Confluence.Dialogs.Breadcrumbs.defaultGetBreadcrumbs=c.getBreadcrumbsDefault})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:dialog-breadcrumbs', location = 'includes/soy/dialog-breadcrumbs.soy' */
// This file was automatically generated from dialog-breadcrumbs.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Dialog.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Dialog == 'undefined') { Confluence.Templates.Dialog = {}; }


Confluence.Templates.Dialog.breadcrumbItem = function(opt_data, opt_ignored) {
  return '<li><a class="' + soy.$$escapeHtml(opt_data.className) + '" title="' + soy.$$escapeHtml(opt_data.title) + '" tabindex="-1"><span>' + soy.$$escapeHtml(opt_data.text) + '</span></a></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Dialog.breadcrumbItem.soyTemplateName = 'Confluence.Templates.Dialog.breadcrumbItem';
}


Confluence.Templates.Dialog.breadcrumbLoading = function(opt_data, opt_ignored) {
  return '<li class="loading"><span>' + soy.$$filterNoAutoescape('Loading breadcrumbs\u2026') + '</span></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Dialog.breadcrumbLoading.soyTemplateName = 'Confluence.Templates.Dialog.breadcrumbLoading';
}


Confluence.Templates.Dialog.breadcrumbError = function(opt_data, opt_ignored) {
  return '<li class="warning last"><span>' + soy.$$escapeHtml('Error retrieving breadcrumbs.') + '</span></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Dialog.breadcrumbError.soyTemplateName = 'Confluence.Templates.Dialog.breadcrumbError';
}

}catch(e){WRMCB(e)};