WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:mail-page-resources', location = 'templates/sharepage/share-dialog.soy' */
// This file was automatically generated from share-dialog.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Share.Dialog.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Share == 'undefined') { Confluence.Templates.Share = {}; }
if (typeof Confluence.Templates.Share.Dialog == 'undefined') { Confluence.Templates.Share.Dialog = {}; }


Confluence.Templates.Share.Dialog.shareContentPopup = function(opt_data, opt_ignored) {
  return '<form action="#" method="post" class="aui share-content-popup"><div class="field-group"><div class="autocomplete-user-target"><input class="text autocomplete-sharepage" id="users" data-max="10" data-dropdown-target=".autocomplete-user-target" data-none-message="' + soy.$$escapeHtml('No matches') + '" placeholder="' + soy.$$escapeHtml('Users name, group name, or email') + '"/></div><ol class="recipients"></ol></div><div class="field-group"><textarea class="textarea" id="note" placeholder="' + soy.$$escapeHtml('Add an optional note') + '"/></div><div class="field-group button-panel"><div class="progress-messages-icon"></div><div class="progress-messages"></div><input class="button submit" type="submit" value="' + soy.$$escapeHtml('Share') + '" disabled/><a class="close-dialog" href="#">' + soy.$$escapeHtml('Cancel') + '</a></div></form>';
};
if (goog.DEBUG) {
  Confluence.Templates.Share.Dialog.shareContentPopup.soyTemplateName = 'Confluence.Templates.Share.Dialog.shareContentPopup';
}


Confluence.Templates.Share.Dialog.recipientUser = function(opt_data, opt_ignored) {
  return '<li data-accountId="' + soy.$$escapeHtml(opt_data.accountId) + '" style="display: none" class="recipient-user"><img src="' + soy.$$escapeHtml(opt_data.thumbnailLink.href) + '" title="' + soy.$$escapeHtml(opt_data.title) + '"/><span class="title" title="' + soy.$$escapeHtml(opt_data.title) + '">' + soy.$$escapeHtml(opt_data.title) + '</span><span class="remove-recipient"/></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Share.Dialog.recipientUser.soyTemplateName = 'Confluence.Templates.Share.Dialog.recipientUser';
}


Confluence.Templates.Share.Dialog.recipientEmail = function(opt_data, opt_ignored) {
  return '<li data-email="' + soy.$$escapeHtml(opt_data.email) + '" style="display: none" class="recipient-email"><img src="' + soy.$$escapeHtml(opt_data.icon) + '" title="' + soy.$$escapeHtml(opt_data.email) + '"/><span class="title" title="' + soy.$$escapeHtml(opt_data.email) + '">' + soy.$$escapeHtml(opt_data.email) + '</span><span class="remove-recipient"/></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Share.Dialog.recipientEmail.soyTemplateName = 'Confluence.Templates.Share.Dialog.recipientEmail';
}


Confluence.Templates.Share.Dialog.recipientGroup = function(opt_data, opt_ignored) {
  return '<li data-group="' + soy.$$escapeHtml(opt_data.title) + '" style="display: none" class="recipient-group"><span><img src="' + soy.$$escapeHtml(opt_data.thumbnailLink.href) + '" title="' + soy.$$escapeHtml(opt_data.title) + '"/><span>' + soy.$$escapeHtml(opt_data.title) + '</span><span class="remove-recipient"/></span></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Share.Dialog.recipientGroup.soyTemplateName = 'Confluence.Templates.Share.Dialog.recipientGroup';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:mail-page-resources', location = 'js/mailpage.js' */
define("confluence-share-button",["ajs","jquery","skate","raphael","confluence-share-page-plugin/js/autocomplete","confluence-share-page-plugin/js/jquery-elastic","confluence/legacy"],function(j,f,g,h,i,m,k){var d=function(q,o,p){if(q.find("input").length){p();return}q.append(k.Templates.Share.Dialog.shareContentPopup());k.SharePage.autocompleteUser();var r=function(t){k.SharePage.current.hide();if(t){setTimeout(function(){q.empty()},300)}return false};f(document).keyup(function(t){if(t.keyCode==27){r(true);f(document).unbind("keyup",arguments.callee);return false}return true});q.find(".close-dialog").click(function(){r(true)});q.find("#note").elastic();q.find("form").submit(function(){var v=[];q.find(".recipients li").each(function(z,A){v.push(f(A).attr("data-accountId"))});if(v.length<=0){return false}f("button,input,textarea",this).attr("disabled","disabled");q.find(".progress-messages-icon").removeClass("error");q.find(".progress-messages").text("Sending");q.find(".progress-messages").attr("title","Sending");var w=h.spinner(q.find(".progress-messages-icon")[0],7,"#666");q.find(".progress-messages-icon").css("position","absolute").css("left","0").css("margin-top","3px");q.find(".progress-messages").css("padding-left",q.find(".progress-messages-icon").innerWidth()+20);var v=[];q.find(".recipients li[data-accountId]").each(function(z,A){v.push(f(A).attr("data-accountId"))});var y=[];q.find(".recipients li[data-email]").each(function(z,A){y.push(f(A).attr("data-email"))});var t=[];q.find(".recipients li[data-group]").each(function(z,A){t.push(f(A).attr("data-group"))});var u=q.find("#note");var x={accountIds:v,emails:y,groups:t,note:u.hasClass("placeholded")?"":u.val(),entityId:j.params.pageId};f.ajax({type:"POST",contentType:"application/json; charset=utf-8",url:k.getContextPath()+"/rest/share-page/latest/share",data:JSON.stringify(x),dataType:"text",success:function(){setTimeout(function(){w();q.find(".progress-messages-icon").addClass("done");q.find(".progress-messages").text("Sent");q.find(".progress-messages").attr("title","Sent");setTimeout(function(){q.find(".progress-messages").text("");q.find(".progress-messages-icon").removeClass("done");q.find("#note").val("");f("button,input,textarea",q).removeAttr("disabled");r(false)},1000)},500)},error:function(A,z){w();q.find(".progress-messages-icon").addClass("error");q.find(".progress-messages").text("Error sending");q.find(".progress-messages").attr("title","Error sending"+": "+z);f("button,input,textarea",q).removeAttr("disabled")}});return false});var s=q.find("#users");var n=q.find("input.submit");s.bind("selected.autocomplete-sharepage",function(u,t){var v=function(y,x,z){var B=q.find(".recipients"),A,w;A="li[data-"+y+'="'+z.content[y]+'"]';if(B.find(A).length>0){B.find(A).hide()}else{B.append(x(z.content))}w=B.find(A);w.find(".remove-recipient").click(function(){w.remove();if(B.find("li").length==0){n.attr("disabled","true")}k.SharePage.current.refresh();s.focus();return false});w.fadeIn(200)};if(t.content.email){v("email",k.Templates.Share.Dialog.recipientEmail,t)}else{if(t.content.type=="group"){v("group",k.Templates.Share.Dialog.recipientGroup,t)}else{v("accountId",k.Templates.Share.Dialog.recipientUser,t)}}k.SharePage.current.refresh();n.removeAttr("disabled");s.val("");s.focus();return false});s.bind("open.autocomplete-sharepage",function(u,t){if(f("a:not(.no-results)",j.dropDown.current.links).length>0){j.dropDown.current.moveDown()}});s.keypress(function(t){return t.keyCode!=13});f(document).bind("showLayer",function(v,u,t){if(u=="inlineDialog"&&t.popup==k.SharePage.current){t.popup.find("#users").focus()}});f(o).parents().filter(function(){return this.scrollTop>0}).scrollTop(0);p()};var a=function(n){k.SharePage.initDialog(f("#shareContentLink"),"shareContentPopup")};var b={width:250};var e=function(n){k.SharePage={};k.SharePage.autocompleteUser=i.autocomplete;k.SharePage.initDialog=function(o,p){k.SharePage.current=j.InlineDialog(o,p,d,b)}};var c=function(n){};var l=function(){g("share-calendar-button",{type:g.types.CLASS,events:{},attached:a,detached:c,created:e})};return{attached:a,detached:c,init:l}});require("confluence/module-exporter").safeRequire("confluence-share-button",function(a){a.init()});
}catch(e){WRMCB(e)};