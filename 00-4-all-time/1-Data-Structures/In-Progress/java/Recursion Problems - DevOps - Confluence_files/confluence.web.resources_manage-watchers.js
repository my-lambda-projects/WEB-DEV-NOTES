WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.web.resources:manage-watchers', location = 'includes/soy/manage-watchers.soy' */
// This file was automatically generated from manage-watchers.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.ManageWatchers.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.ManageWatchers == 'undefined') { Confluence.Templates.ManageWatchers = {}; }


Confluence.Templates.ManageWatchers.dialogContent = function(opt_data, opt_ignored) {
  return '<div class="aui-group"><div class="aui-item page-watchers"><h3>' + soy.$$escapeHtml('Watching this page') + '</h3><p>' + soy.$$escapeHtml('These people are notified when the page is changed.') + '</p>' + Confluence.Templates.ManageWatchers.addWatcherForm({pageId: opt_data.pageId, xsrfToken: opt_data.xsrfToken, notificationType: 'page'}) + '<ul class="user-list"><li class="loading">' + soy.$$filterNoAutoescape('Loading\u2026') + '</li><li class="no-users hidden">' + soy.$$escapeHtml('No page watchers') + '</li></ul></div><div class="aui-item space-watchers"><h3>' + soy.$$escapeHtml('Watching this space') + '</h3><p>' + soy.$$escapeHtml('These people are notified when any content in the space is changed.') + '</p>' + Confluence.Templates.ManageWatchers.addWatcherForm({pageId: opt_data.pageId, xsrfToken: opt_data.xsrfToken, notificationType: 'space'}) + '<ul class="user-list"><li class="loading">' + soy.$$filterNoAutoescape('Loading\u2026') + '</li><li class="no-users hidden">' + soy.$$escapeHtml('No space watchers') + '</li></ul></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.ManageWatchers.dialogContent.soyTemplateName = 'Confluence.Templates.ManageWatchers.dialogContent';
}


Confluence.Templates.ManageWatchers.userItem = function(opt_data, opt_ignored) {
  return '<li class="watch-user"><img class="profile-picture confluence-userlink" src="' + soy.$$escapeHtml(opt_data.iconUrl) + '" data-full-name="' + soy.$$escapeHtml(opt_data.fullName) + '"' + ((opt_data.accountId) ? ' data-account-id="' + soy.$$escapeHtml(opt_data.accountId) + '"' : '') + ((opt_data.username) ? ' data-username="' + soy.$$escapeHtml(opt_data.username) + '"' : '') + '><span' + ((opt_data.username) ? ' class="user-hover-trigger" data-username="' + soy.$$escapeHtml(opt_data.username) + '"' : '') + '>' + ((opt_data.fullName) ? soy.$$escapeHtml(opt_data.fullName) : '') + '</span>' + ((opt_data.username) ? '<span class="username">(' + soy.$$escapeHtml(opt_data.username) + ')</span>' : '') + '<span class="remove-watch" title="' + soy.$$escapeHtml('Delete') + '" data-full-name="' + soy.$$escapeHtml(opt_data.fullName) + '"' + ((opt_data.accountId) ? ' data-account-id="' + soy.$$escapeHtml(opt_data.accountId) + '"' : '') + ((opt_data.username) ? 'data-username="' + soy.$$escapeHtml(opt_data.username) + '"' : '') + '>' + soy.$$escapeHtml('Delete') + '</span></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.ManageWatchers.userItem.soyTemplateName = 'Confluence.Templates.ManageWatchers.userItem';
}


Confluence.Templates.ManageWatchers.helpLink = function(opt_data, opt_ignored) {
  return '' + Confluence.Templates.Dialog.helpLink({href: "https://confluence.atlassian.com/display/ConfCloud/Manage+Watchers"});
};
if (goog.DEBUG) {
  Confluence.Templates.ManageWatchers.helpLink.soyTemplateName = 'Confluence.Templates.ManageWatchers.helpLink';
}


Confluence.Templates.ManageWatchers.addWatcherForm = function(opt_data, opt_ignored) {
  return '<form class="aui" action="' + soy.$$escapeHtml("/wiki") + '/json/addwatch.action" method="POST" id="manage-' + soy.$$escapeHtml(opt_data.notificationType) + '-watchers-form"><input type="hidden" name="atl_token" value="' + soy.$$escapeHtml(opt_data.xsrfToken) + '"><input type="hidden" name="pageId" value="' + soy.$$escapeHtml(opt_data.pageId) + '"/><input type="hidden" name="type" value="' + soy.$$escapeHtml(opt_data.notificationType) + '" /><input type="hidden" id="add-' + soy.$$escapeHtml(opt_data.notificationType) + '-watcher-account-id" name="accountId" value=""/><input id="add-' + soy.$$escapeHtml(opt_data.notificationType) + '-watcher-user" name="userFullName" class="text autocomplete-user" type="text" value="" placeholder="' + soy.$$escapeHtml('Full name') + '" data-max="10" data-target="#add-' + soy.$$escapeHtml(opt_data.notificationType) + '-watcher-account-id" data-dropdown-target="#add-' + soy.$$escapeHtml(opt_data.notificationType) + '-watcher-dropdown" data-template="{title}" data-none-message="' + soy.$$escapeHtml('No matching users found.') + '"><input type="submit" name="add"  class="button submit" value="' + soy.$$escapeHtml('Add') + '"><div id="add-' + soy.$$escapeHtml(opt_data.notificationType) + '-watcher-dropdown" class="aui-dd-parent autocomplete"></div><div class="status hidden"></div></form>';
};
if (goog.DEBUG) {
  Confluence.Templates.ManageWatchers.addWatcherForm.soyTemplateName = 'Confluence.Templates.ManageWatchers.addWatcherForm';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:manage-watchers', location = 'includes/js/manage-watchers.js' */
define("confluence/manage-watchers","document ajs confluence/templates confluence/api/constants confluence/placeholder confluence/hover-user confluence/dialog".split(" "),function(h,f,l,m,q,r,t){return function(e){e(h).on("click","#manage-watchers-menu-item, .cw-manage-watchers",function(h){function n(a,d){var b=a.find("#add-"+d+"-watcher-user"),e=a.find("#add-"+d+"-watcher-account-id"),g=function(){var b=a.find("\x3e .status");return{clear:function(){b.addClass("hidden").removeClass("loading error").text("")},
loading:function(a){b.addClass("loading").removeClass("hidden error").html(a)},error:function(a){b.addClass("error").removeClass("hidden loading").html(a)}}}();a.ajaxForm({beforeSerialize:function(){""==e.val()&&e.val(b.val())},beforeSubmit:function(){b.blur().prop("disabled",!0);k.addClass("updating");g.loading("Adding watcher\u2026")},dataType:"json",error:function(a,b){console.error("Failed to add watcher: "+b)},success:function(a){e.val("");b.prop("disabled",!1).val("").focus();
k.removeClass("updating");a.actionErrors&&a.actionErrors.length?g.error(a.actionErrors[0]):(c.trigger("list-data-retrieved.manage-watchers",{list:k,watchers:a.pageWatchers,type:"page"}),c.trigger("list-data-retrieved.manage-watchers",{list:p,watchers:a.spaceWatchers,type:"space"}),g.clear())}});b.bind("selected.autocomplete-user-or-group",function(b,c){a.submit()});b.focus()}h.preventDefault();var g=new t.component({width:865,height:530,id:"manage-watchers-dialog",onCancel:function(){g.hide().remove()}});
g.addHeader("Manage Watchers");g.addPanel("default",l.ManageWatchers.dialogContent({pageId:f.Meta.get("page-id"),xsrfToken:f.Meta.get("atl-token")}));g.addCancel("Close",function(){g.hide().remove();return!1});g.show();var c=e("#manage-watchers-dialog");c.find(".dialog-title").prepend(l.ManageWatchers.helpLink());c.find("input:visible, button:visible").each(function(a){e(this).attr("tabindex",a+1)});q();c.bind("remove-list-item.manage-watchers",function(a,
d){var b=d.item,e=d.list;a=d.accountId;d=d.type;b.addClass("removing");f.safe.ajax({dataType:"json",type:"POST",url:m.CONTEXT_PATH+"/json/removewatch.action",data:{pageId:f.params.pageId,accountId:a,type:d},error:function(){console.error("Failed to delete watcher. Refresh page to see latest status.");b.removeClass("removing")},success:function(){b.slideUp().remove();c.trigger("list-updated.manage-watchers",{list:e})}})});c.bind("list-updated.manage-watchers",function(a,c){a=c.list;0<e("li.watch-user",a).length?
(a.find(".no-users").addClass("hidden"),r(),a.find(".confluence-userlink").each(function(){e(this).click(function(a){a.preventDefault()})})):a.find(".no-users").removeClass("hidden")});c.bind("list-data-retrieved.manage-watchers",function(a,d){var b=d.list;a=d.watchers;var f=d.type;b.find(".watch-user").remove();a&&a.length&&e.each(a,function(){var a=this.accountId,d=e(l.ManageWatchers.userItem({accountId:a,fullName:this.fullName,url:m.CONTEXT_PATH+"/display/~"+this.name,iconUrl:this.avatarUrl}));
b.append(d);d.find(".remove-watch").click(function(){c.trigger("remove-list-item.manage-watchers",{accountId:a,item:d,list:b,type:f})})});b.find(".loading").hide();c.trigger("list-updated.manage-watchers",{list:b})});var k=c.find(".page-watchers .user-list"),p=c.find(".space-watchers .user-list");f.safe.ajax({url:m.CONTEXT_PATH+"/json/listwatchers.action",dataType:"json",data:{pageId:f.params.pageId},error:function(){console.error("Failed to retrieve watchers.")},success:function(a){c.trigger("list-data-retrieved.manage-watchers",
{list:k,watchers:a.pageWatchers,type:"page"});c.trigger("list-data-retrieved.manage-watchers",{list:p,watchers:a.spaceWatchers,type:"space"})}});n(c.find("#manage-page-watchers-form"),"page");n(c.find("#manage-space-watchers-form"),"space")})}});require("confluence/module-exporter").safeRequire("confluence/manage-watchers",function(h){require("ajs").toInit(h)});
}catch(e){WRMCB(e)};