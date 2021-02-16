WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/js/request-access-page.js' */
define("confluence-request-access-plugin/request-access",["jquery","confluence/legacy","confluence/meta","ajs","skate"],function(e,g,d,c,b){var a=function(){var h=d.get("page-id");var i=e("#invite-to-edit-draft").length;if(i){h=e("#invite-to-edit-draft").data("draft-id")}return h};function f(j){j=j||{};var h=a()||j.pageId;var i=g.getContextPath();var k=function(n){var o=e(".request-access-container");var m=o.find("button");var l=o.data("access-type");if(o.length){e("#breadcrumbs").hide();e("#title-text.with-breadcrumbs").hide();if(m.length){c.trigger("analyticsEvent",{name:"confluence.request.access.plugin.request.access.to.page.view",data:{accessType:l}})}}m.prop("disabled",false);m.removeAttr("aria-disabled");m.click(function(){c.trigger("analyticsEvent",{name:"confluence.request.access.plugin.request.access.to.page",data:{accessType:l}});m.attr("aria-disabled","true");var p=e(g.Request.Access.loading({}));m.replaceWith(p);e.ajax({url:i+"/rest/request-access/latest/page/restriction/"+h+"/request/"+l,type:"POST",contentType:"application/json; charset=utf-8",success:function(q){c.flag({type:"success",title:"Request sent",body:c.format("We\'\'ve asked {0} to give you access. You\'\'ll get an email once the request is approved",g.Request.Access.userProfileLink({accountId:q.accountId,displayName:q.displayName,name:q.name,fullName:q.fullName}))})},error:function(q,r){c.flag({type:"error",title:"Access request unsuccessful",body:"Your request for access has not been sent. Contact your space admin."})},complete:function(){p.remove();g.Binder.userHover()}})})};if(!window.__skate||!window.__skate.registry||!window.__skate.registry["request-access-container"]){b("request-access-container",{type:b.types.CLASS,attached:k})}}return{init:f}});require("confluence/module-exporter").safeRequire("confluence-request-access-plugin/request-access",function(a){require("ajs").toInit(a.init)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/js/grant-access.js' */
define("confluence-request-access-plugin/grant-access",["jquery","confluence/legacy","confluence/meta","ajs","confluence/dark-features"],function(e,h,d,a,b){function c(i){i=i.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var k=new RegExp("[\\?&]"+i+"=([^&#]*)");var j=k.exec(location.search);return j==null?"":decodeURIComponent(j[1].replace(/\+/g," "))}function g(){return a.Rte&&a.Rte.getEditor&&a.Rte.getEditor()&&(!!a.$("#editpageform").length||!!a.$("#createpageform").length)}function f(x){var o=h.getContextPath();x=x||{};var j=d.get("page-id")||x.pageId;var t=d.get("content-type");var s=c("accountId");var r=c("displayName").split("+").join(" ");var k=c("username");var i=c("userFullName").split("+").join(" ");var l=c("accessType");var n=e("#content-metadata-page-restrictions");var w=e("#content-metadata-page-restrictions.restricted").length!==0;var m=e("#rte-button-restrictions");var q=g()&&!!m.length&&!!c("grantAccess")&&!!l;var v=n.length&&w&&!!c("grantAccess")&&!!l;if(!v&&!q){return}if(q){n=m;j=d.get("content-id")}var p=e(h.Request.Access.loading());var u=a.InlineDialog(n,"grantAccessDialog",function(z,y,A){z.css({padding:"20px"}).html(h.Grant.Access.dialog({accountId:s,displayName:r,username:k,fullName:i,contentType:t}));z.on("click",".aui-button.grant-access",function(D){D.stopPropagation();var B=z.find(".actions-result");B.replaceWith(p);a.trigger("analyticsEvent",{name:"confluence.request.access.plugin.grant.access.to.page",data:{accessType:l}});var C="";e.ajax({url:o+"/rest/request-access/latest/page/restriction/"+j+"/grant/"+l,type:"POST",contentType:"application/json; charset=utf-8",data:s?s:k,success:function(F,G,E){if(E.status==202){C="Access was already granted to the user."}else{C="Access was granted, a notification to the user will be sent."}a.flag({type:"success",title:"Access request granted",body:C})},error:function(E){if(E.status==412){C="Access was granted, but there is not a mail server configured so the notification could not be sent."}else{if(E.status==502){C="Access was granted, but an unexpected error happened while sending the notification."}else{C="Sorry, there was an unexpected error while granting access."}}a.flag({type:"error",title:"Access request error",body:C})},complete:function(E){u.hide()}})});z.on("click",".aui-button.deny-access",function(B){a.trigger("analyticsEvent",{name:"confluence.request.access.plugin.deny.access.to.page",data:{accessType:l}});u.hide()});A();return false},{offsetY:10,offsetX:-20,width:350,hideDelay:null,noBind:true,hideCallback:function(){setTimeout(u.hide(),5000)}});u.show()}return{init:f,initWhenEditorReady:function(){a.bind("rte-collab-ready",f)}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/templates/soy/request-access.soy' */
// This file was automatically generated from request-access.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Request.Access.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Request == 'undefined') { Confluence.Request = {}; }
if (typeof Confluence.Request.Access == 'undefined') { Confluence.Request.Access = {}; }


Confluence.Request.Access.userProfileLink = function(opt_data, opt_ignored) {
  return '' + ((opt_data.accountId) ? '<a href="/people/' + soy.$$escapeHtml(opt_data.accountId) + '?ref=confluence" target="_blank" rel="noopener noreferrer"><strong>' + soy.$$escapeHtml(opt_data.displayName) + '</strong></a>' : '<a href="' + soy.$$escapeHtml("/wiki") + '/display/~' + soy.$$escapeUri(opt_data.name) + '" class="url fn confluence-userlink" title data-username="' + soy.$$escapeHtml(opt_data.name) + '">' + soy.$$escapeHtml(opt_data.fullName) + '</a>');
};
if (goog.DEBUG) {
  Confluence.Request.Access.userProfileLink.soyTemplateName = 'Confluence.Request.Access.userProfileLink';
}


Confluence.Request.Access.loading = function(opt_data, opt_ignored) {
  return '<span id="request-access-loading" class=\'aui-icon aui-icon-wait\'>' + soy.$$escapeHtml('Loading, please wait') + '</span>"';
};
if (goog.DEBUG) {
  Confluence.Request.Access.loading.soyTemplateName = 'Confluence.Request.Access.loading';
}


Confluence.Request.Access.dialog = function(opt_data, opt_ignored) {
  return '<div class="request-access-dialog"><h2 class="grant-access-title">' + soy.$$escapeHtml('You don\x27t have permission to edit') + '</h2>' + ((opt_data.canRequestAccess) ? '<p class="grant-access-message">' + soy.$$escapeHtml('Hit request access and we\x27ll find someone who can give you access.') + '</p><div class="actions-result"><button id="request-access-dialog-button" class="aui-button">' + soy.$$escapeHtml('Request access') + '</button><button class="aui-button aui-button-link cancel">' + soy.$$escapeHtml('Cancel') + '</button><div>' : '<p class="grant-access-message">' + soy.$$escapeHtml('A space admin or the person who shared this page may be able to give you access.') + '</p><div class="actions-result"><button class="aui-button aui-button-link cancel">' + soy.$$escapeHtml('Close') + '</button><div>') + '</div>';
};
if (goog.DEBUG) {
  Confluence.Request.Access.dialog.soyTemplateName = 'Confluence.Request.Access.dialog';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/templates/soy/grant-access.soy' */
// This file was automatically generated from grant-access.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Grant.Access.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Grant == 'undefined') { Confluence.Grant = {}; }
if (typeof Confluence.Grant.Access == 'undefined') { Confluence.Grant.Access = {}; }


Confluence.Grant.Access.dialog = function(opt_data, opt_ignored) {
  var output = '<div class="grant-access-dialog">';
  var usernameLink__soy4 = '' + Confluence.Grant.Access.profileLink(opt_data);
  var requestAccessDescription__soy10 = '' + ((opt_data.requestAccessType == 'edit') ? (opt_data.contentType == 'blogpost') ? soy.$$filterNoAutoescape(AJS.format('{0} wants to \x3cstrong\x3eedit\x3c/strong\x3e this blog post.',usernameLink__soy4)) : soy.$$filterNoAutoescape(AJS.format('{0} wants to \x3cstrong\x3eedit\x3c/strong\x3e this page.',usernameLink__soy4)) : (opt_data.contentType == 'blogpost') ? soy.$$filterNoAutoescape(AJS.format('{0} wants to \x3cstrong\x3eview\x3c/strong\x3e this blog post.',usernameLink__soy4)) : soy.$$filterNoAutoescape(AJS.format('{0} wants to \x3cstrong\x3eview\x3c/strong\x3e this page.',usernameLink__soy4)));
  output += '<h2 class="title grant-access-title">' + soy.$$escapeHtml('Access request') + '</h2><p class="grant-access-message">' + soy.$$filterNoAutoescape(requestAccessDescription__soy10) + '</p><div class="actions-result"><button class="aui-button grant-access">' + soy.$$escapeHtml('Grant access') + '</button><button class="aui-button aui-button-link deny-access">' + soy.$$escapeHtml('Deny') + '</button><div></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Grant.Access.dialog.soyTemplateName = 'Confluence.Grant.Access.dialog';
}


Confluence.Grant.Access.profileLink = function(opt_data, opt_ignored) {
  return '' + ((opt_data.accountId) ? '<a href="/people/' + soy.$$escapeHtml(opt_data.accountId) + '?ref=confluence" target="_blank" rel="noopener noreferrer"><strong>' + soy.$$escapeHtml(opt_data.displayName) + '</strong></a>' : '<a href="' + soy.$$escapeHtml("/wiki") + '/display/~' + soy.$$escapeHtml(opt_data.username) + '" class="url fn" title data-username="' + soy.$$escapeHtml(opt_data.username) + '"><strong>' + soy.$$escapeHtml(opt_data.fullName) + '</strong> (' + soy.$$escapeHtml(opt_data.username) + ')</a>');
};
if (goog.DEBUG) {
  Confluence.Grant.Access.profileLink.soyTemplateName = 'Confluence.Grant.Access.profileLink';
}

}catch(e){WRMCB(e)};