WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.macros.advanced:jiraroadmap-preview', location = 'com/atlassian/confluence/plugins/macros/advanced/jiraroadmap/templates.soy' */
// This file was automatically generated from templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.JiraRoadmapMacro.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.JiraRoadmapMacro == 'undefined') { Confluence.Templates.JiraRoadmapMacro = {}; }


Confluence.Templates.JiraRoadmapMacro.roadmapPopupPanel = function(opt_data, opt_ignored) {
  return '<section id="confluence-jira-roadmap-dialog" class="jiraroadmap jiraroadmap-dialog" class="aui-dialog2 aui-dialog2-xlarge aui-layer" role="dialog" aria-hidden="true"><header class="aui-dialog2-header"><h2 class="aui-dialog2-header-main">' + soy.$$escapeHtml('Jira roadmap') + '</h2></header><div class="aui-dialog2-content"><div class="dialog-content"><form action="" onsubmit="return false" class="aui"><div class="field-group select-tenant"><div class="field-label">' + soy.$$escapeHtml('Paste a Jira instance URL') + '</div><input id="tenant-url" type="text" class="text" /></div><div class="field-group select-project"><div class="field-label">' + soy.$$escapeHtml('Project') + '</div><input id="project-select" /></div><div class="field-group select-board"><div class="field-label">' + soy.$$escapeHtml('Board') + '</div><input id="board-select" /></div></form><div class="field-error" id="field-error"></div><div tabindex="-1" id="roadmap-preview" class="jiraroadmap-iframe-container"></div></div></div><footer class="aui-dialog2-footer"><div class="aui-dialog2-footer-actions"><form onsubmit="return false" class="aui"><a tabindex="0" id="insert-jira-roadmap-dialog" class="aui-button aui-button-primary">' + soy.$$escapeHtml('Save') + '</a><a tabindex="0" class="close-jira-roadmap-dialog aui-button aui-button-link">' + soy.$$escapeHtml('Cancel') + '</a></form></div></footer></section>';
};
if (goog.DEBUG) {
  Confluence.Templates.JiraRoadmapMacro.roadmapPopupPanel.soyTemplateName = 'Confluence.Templates.JiraRoadmapMacro.roadmapPopupPanel';
}


Confluence.Templates.JiraRoadmapMacro.roadmapError = function(opt_data, opt_ignored) {
  return '<div class="error-screen"><div class="message" id="preview-error-message">' + ((opt_data.type == 'permission') ? '<h2>' + soy.$$escapeHtml('You don\x27t have permission to view this Jira roadmap.') + '</h2><p>' + soy.$$escapeHtml('Please check the project settings in Jira.') + '</p><br/><a href="' + soy.$$escapeHtml(opt_data.link) + '" target="_blank" tabindex="0" class="aui-button aui-button-primary">' + soy.$$escapeHtml('Go to Jira') + '</a><a href="https://confluence.atlassian.com/adminjiracloud/managing-project-permissions-776636362.html" target="_blank" tabindex="0" class="aui-button aui-button-link">' + soy.$$escapeHtml('Learn more') + '</a>' : (opt_data.type == 'validation' || opt_data.type == 'not-available') ? '<h2>' + soy.$$escapeHtml('We can\x27t display this Jira roadmap.') + '</h2><p>' + soy.$$escapeHtml('Please check with your system administrator.') + '</p><br/><a href="' + soy.$$escapeHtml(opt_data.link) + '" target="_blank" tabindex="0" class="aui-button aui-button-primary">' + soy.$$escapeHtml('Go to Jira') + '</a><a href="https://confluence.atlassian.com/jirasoftwarecloud/roadmap-957979308.html#Roadmap-TroubleshootyourRoadmap" target="_blank" tabindex="0" class="aui-button aui-button-link">' + soy.$$escapeHtml('Learn more') + '</a>' : (opt_data.type == 'invalid-url') ? '<h2>' + soy.$$escapeHtml('This doesn\x27t look like a URL of Jira roadmap.') + '</h2><p>' + soy.$$escapeHtml('Please check with your system administrator.') + '</p><br/>' : (opt_data.type == 'inconsistent-env') ? '<h2>' + soy.$$escapeHtml('We can\x27t display this Jira roadmap.') + '</h2><p>' + soy.$$escapeHtml('This Jira roadmap is in a different environment.') + '</p>' : (opt_data.type == 'project-type') ? '<h2>' + soy.$$escapeHtml('We can\x27t display this Jira roadmap.') + '</h2><p>' + soy.$$escapeHtml('This macro only supports next-gen Jira Software projects.') + '</p>' : (opt_data.type == 'service-unavailable') ? '<h2>' + soy.$$escapeHtml('We can\x27t display this Jira roadmap.') + '</h2><p>' + soy.$$escapeHtml('Try again later, or contact Atlassian Support if this keeps happening.') + '</p><br/><a href="https://support.atlassian.com/contact/#/" target="_blank" tabindex="0" class="aui-button aui-button-primary">' + soy.$$escapeHtml('Atlassian Support') + '</a>' : '<h2>' + soy.$$escapeHtml('This Jira roadmap is not currently active.') + '</h2><p>' + soy.$$escapeHtml('Please check with your system administrator.') + '</p><br/><a href="' + soy.$$escapeHtml(opt_data.link) + '" target="_blank" tabindex="0" class="aui-button aui-button-primary">' + soy.$$escapeHtml('Go to Jira') + '</a><a href="https://confluence.atlassian.com/jirasoftwarecloud/roadmap-957979308.html" target="_blank" tabindex="0" class="aui-button aui-button-link">' + soy.$$escapeHtml('Learn more') + '</a>') + '</div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.JiraRoadmapMacro.roadmapError.soyTemplateName = 'Confluence.Templates.JiraRoadmapMacro.roadmapError';
}


Confluence.Templates.JiraRoadmapMacro.roadmapIframe = function(opt_data, opt_ignored) {
  return '<iframe id="roadmap-iframe" src="' + soy.$$escapeHtml(opt_data.iframeSrc) + '" width="100%" frameBorder="0" />' + ((opt_data.roadmapUrl != '') ? '<div class="preview-footer"><a class="aui-button aui-button-link" target="_blank" href="' + soy.$$escapeHtml(opt_data.roadmapUrl) + '">' + soy.$$escapeHtml('View in Jira') + '</a></div>' : '');
};
if (goog.DEBUG) {
  Confluence.Templates.JiraRoadmapMacro.roadmapIframe.soyTemplateName = 'Confluence.Templates.JiraRoadmapMacro.roadmapIframe';
}


Confluence.Templates.JiraRoadmapMacro.roadmapLoading = function(opt_data, opt_ignored) {
  return '<div class="jiraroadmap-loading"><div class="spinner-container"><div class="spinner"><svg focusable="false" size="50" height="50" width="50" viewBox="0 0 50 50"><circle cx="25" cy="25" r="22.5"></circle></svg></div></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.JiraRoadmapMacro.roadmapLoading.soyTemplateName = 'Confluence.Templates.JiraRoadmapMacro.roadmapLoading';
}


Confluence.Templates.JiraRoadmapMacro.roadmapErrorWithCustomMessage = function(opt_data, opt_ignored) {
  return '<div class="error-screen"><div class="message" id="preview-error-message"><p>' + soy.$$escapeHtml(opt_data.message) + '</p><br/><a href="' + soy.$$escapeHtml(opt_data.link) + '" target="_blank" tabindex="0" class="aui-button aui-button-primary">' + soy.$$escapeHtml('Go to Jira') + '</a>' + ((opt_data.docUrl != '' && opt_data.buttonText != '') ? '<a href="' + soy.$$escapeHtml(opt_data.docUrl) + '" target="_blank" tabindex="0" class="aui-button aui-button-primary">' + soy.$$escapeHtml(opt_data.buttonText) + '</a>' : '') + '</div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.JiraRoadmapMacro.roadmapErrorWithCustomMessage.soyTemplateName = 'Confluence.Templates.JiraRoadmapMacro.roadmapErrorWithCustomMessage';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.macros.advanced:jiraroadmap-preview', location = 'com/atlassian/confluence/plugins/macros/advanced/jiraroadmap/jiraroadmap-helper.js' */
define("confluence-advanced-macros/jiraroadmap-helper",["jquery","confluence/templates","confluence/legacy-message-queue"],function(i,j,l){var f={makeGetRequest:function(c,b){var a=new XMLHttpRequest;a.open("GET",c);a.withCredentials=!0;a.onload=function(){if(200===a.status){var c=JSON.parse(a.responseText);b({data:c,status:a.status})}else try{b({data:null,error:JSON.parse(a.responseText),status:a.status})}catch(g){b({data:null,error:null,status:a.status})}};a.onerror=function(){b({data:null,error:null,
status:a.status})};a.send()},convertParamsToFragmentUrl:function(c,b,a){var e=/[\w][\w]+/g.exec(b);return e&&e[0]?c+"/rest/greenhopper/1.0/roadmap/fragment/confluenceMacro/"+b+"?fragmentHost="+window.location.protocol+"//"+window.location.hostname+(a?"&boardId="+a:""):null},convertParamsToRoadmapUrl:function(c,b,a,e){return e?c+"/jira/software/c/projects/"+b+"/boards/"+a+"/roadmap":c+"/jira/software/projects/"+b+"/boards/"+a+"/roadmap"},convertRoadmapUrlToParams:function(c){var b=document.createElement("a");
b.href=-1<c.indexOf("://")?c:"https://"+c;var a=/(?:\?|&)projectKey=([\w][\w]+)(?:&rapidView=(\d+))?/g,e=/(?:.+)\/jira\/software\/?c?\/projects\/([\w][\w]+)\/boards\/(\d+|null|undefined)\/roadmap/g,a=-1<b.href.indexOf("Roadmap.jspa")?a.exec(b.search):e.exec(b.href);return{tenant:"https://"+b.hostname,project:a&&a[1]?a[1]:null,boardId:a&&a[2]&&"undefined"!==a[2]&&"null"!==a[2]?a[2]:null,isClassic:-1<c.indexOf("software/c/projects")}},matchHostEnvironment:function(c){var b=["jira-dev.com","localhost",
"atl-test.space"],a=window.location.hostname,e=b.filter(function(a){return-1<c.indexOf(a)}),b=b.filter(function(b){return-1<a.indexOf(b)});return 0<e.length===0<b.length},showCustomErrorScreen:function(c,b,a){c=j.JiraRoadmapMacro.roadmapErrorWithCustomMessage({link:c,buttonText:a.buttonText||"",docUrl:a.docUrl||"",message:a.message});b.empty();i(c).appendTo(b);l.push({type:"ATLASSIAN_CONFLUENCE_ANALYTICS_NEXT_TRACK",payload:{source:"macro",action:"showed",actionSubject:"jiraRoadmapMacroError",attributes:{errorType:"custom"}}})},
showGenericErrorScreen:function(c,b,a){c=j.JiraRoadmapMacro.roadmapError({link:c,type:a});b.empty();i(c).appendTo(b);l.push({type:"ATLASSIAN_CONFLUENCE_ANALYTICS_NEXT_TRACK",payload:{source:"macro",action:"showed",actionSubject:"jiraRoadmapMacroError",attributes:{errorType:a}}})},showLoadingScreen:function(c){c.empty();var b=j.JiraRoadmapMacro.roadmapLoading();i(b).appendTo(c)},renderPreview:function(c,b,a,e,g,h){f.makeGetRequest(b+"/rest/greenhopper/1.0/roadmap/fragment/configuration/?projectKey="+
a+"&fragmentHost="+(window.location.protocol+"//"+window.location.hostname)+(e?"&boardId="+e:""),function(d){g.empty();if(d&&d.data&&d.data.hasActiveJiraSoftwareLicense)if(d.data.isValidRoadmap&&d.data.isRoadmapEnabled&&!d.data.isCrossProject){var k=e||d.data.boardId,m=f.convertParamsToFragmentUrl(b,a,k),k=f.convertParamsToRoadmapUrl(b,a,k,d.data.isClassic),m=j.JiraRoadmapMacro.roadmapIframe({iframeSrc:m+"&hideHeader="+!c,roadmapUrl:k});i(m).appendTo(g);h&&h({success:!0,boardId:d.data.boardId,isClassic:d.data.isClassic});
l.push({type:"ATLASSIAN_CONFLUENCE_ANALYTICS_NEXT_TRACK",payload:{source:"macro",action:"validated",actionSubject:"jiraRoadmapMacro"}})}else d.data.isRoadmapEnabled?f.showGenericErrorScreen(b+"/projects/"+a+"/settings",g,"validation"):f.showGenericErrorScreen(b,g,"not-available"),h&&h({success:!1,boardId:d.data.boardId,isClassic:d.data.isClassic});else{if(d.error&&null!==d.error.message)f.showCustomErrorScreen(b,g,d.error);else if(503===d.status)f.showGenericErrorScreen(b,g,"service-unavailable");
else if(d.error&&d.error.errorMessages)switch(0<d.error.errorMessages.length?d.error.errorMessages[0]:""){case "You must have the browse project permission to view this project.":f.showGenericErrorScreen(b,g,"permission");break;default:f.showGenericErrorScreen(b,g,"not-available")}else f.showGenericErrorScreen(b,g,"not-available");h&&h({success:!1,boardId:null,isClassic:!1})}})}};return f});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.macros.advanced:jiraroadmap-preview', location = 'com/atlassian/confluence/plugins/macros/advanced/jiraroadmap/jiraroadmap-preview.js' */
define("confluence-advanced-macros/jiraroadmap-preview",["jquery","skate","confluence-advanced-macros/jiraroadmap-helper"],function(b,c,d){return{init:function(){(!window.__skate||!window.__skate.registry||!window.__skate.registry["jiraroadmap-preview"])&&c("jiraroadmap-preview",{type:c.types.CLASS,attached:function(e){var a=b(e).attr("data-src");if((a=d.convertRoadmapUrlToParams(a))&&a.tenant){var c=d.matchHostEnvironment(a.tenant);a.project&&c?d.renderPreview(!0,a.tenant,a.project,a.boardId,b("#roadmap-preview",
e)):c?d.showGenericErrorScreen(a.tenant,b("#roadmap-preview",e),"invalid-url"):d.showGenericErrorScreen(a.tenant,b("#roadmap-preview",e),"inconsistent-env")}}})}}});require("confluence/module-exporter").safeRequire("confluence-advanced-macros/jiraroadmap-preview",function(b){b.init()});
}catch(e){WRMCB(e)};