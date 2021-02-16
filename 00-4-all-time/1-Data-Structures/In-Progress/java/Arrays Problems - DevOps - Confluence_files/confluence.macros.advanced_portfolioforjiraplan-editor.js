WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.macros.advanced:portfolioforjiraplan-editor', location = 'com/atlassian/confluence/plugins/macros/advanced/portfolioforjiraplan/templates.soy' */
// This file was automatically generated from templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.JPOS.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.JPOS == 'undefined') { Confluence.Templates.JPOS = {}; }


Confluence.Templates.JPOS.jposMacroDialog = function(opt_data, opt_ignored) {
  return '<section class="jpos__macro-dialog aui-dialog2 aui-dialog2-xlarge aui-layer" role="dialog" aria-hidden="true" data-aui-remove-on-hide="true"><header class="jpos__macro-dialog-header aui-dialog2-header"><h2 class="aui-dialog2-header-main">' + soy.$$escapeHtml('Insert an Advanced Roadmaps for Jira plan') + '</h2></header><div class="jpos__macro-dialog-content aui-dialog2-content"><form action="" onsubmit="return false" class="aui jpos__form">' + soy.$$escapeHtml('This macro currently supports Advanced Roadmaps for Jira plan sharing.') + '<div class="jpos__form-fields"><div class="jpos__field-group jpos__field-group--url"><label for="url" class="jpos__field-label">' + soy.$$escapeHtml('URL') + '</label><div class="jpos__field-group jpos__field-group--flex"><input id="url" type="text" class="jpos__url-input text" /><button tabindex="0" class="jpos__preview-btn aui-button aui-button-primary">' + soy.$$escapeHtml('Preview') + '</button></div><div class="jpos__field-label jpos__field-label--inline">' + soy.$$escapeHtml('Paste the link copied from the Confluence sharing option in Advanced Roadmaps for Jira') + '<a class="jpos__learn-more" href="https://confluence.atlassian.com/advancedroadmapscloud/sharing-roadmaps-998651329.html" target="_blank" rel="noopener noreferrer">' + soy.$$escapeHtml('Learn More') + '</a></div><div class="jpos__field-error jpos__field-error--url"><span class="aui-icon aui-icon-small aui-iconfont-error"></span>' + soy.$$escapeHtml('It looks like you\x27ve entered an invalid URL. Check the Confluence sharing link in Advanced Roadmaps for Jira, then try again') + '</div></div><div class="jpos__field-group jpos__field-group--height"><label for="height" class="jpos__field-label">' + soy.$$escapeHtml('Height') + '</label><div class="jpos__field-group jpos__field-group--flex"><div class="aui-buttons"><button tabindex="0" class="jpos__size-button aui-button" data-value="700" title="small"></button><button tabindex="0" class="jpos__size-button jpos__size-button--medium aui-button" data-value="900" title="medium"></button><button tabindex="0" class="jpos__size-button jpos__size-button--large aui-button" data-value="1100" title="large"></button></div><input id="height" type="number" step="10" min="300" class="jpos__height-input text" /><span class="jpos__height-unit">px</span></div><div class="jpos__field-label">' + soy.$$escapeHtml('Choose the height to display on your page') + '</div><div class="jpos__field-error jpos__field-error--height">' + soy.$$escapeHtml('Height must be at least 300px') + '</div></div></div></form><div tabindex="-1" class="jpos__preview-container"></div></div><footer class="jpos__macro-dialog-footer aui-dialog2-footer"><div class="aui-dialog2-footer-actions"><form onsubmit="return false" class="aui"><button tabindex="0" class="jpos__close-dialog aui-button aui-button-link">' + soy.$$escapeHtml('Cancel') + '</button><button tabindex="0" class="jpos__insert-macro aui-button aui-button-primary">' + soy.$$escapeHtml('Insert') + '</button></form></div></footer></section>';
};
if (goog.DEBUG) {
  Confluence.Templates.JPOS.jposMacroDialog.soyTemplateName = 'Confluence.Templates.JPOS.jposMacroDialog';
}


Confluence.Templates.JPOS.jposMacroIframe = function(opt_data, opt_ignored) {
  return '<div class="jpos__iframe-container"><iframe class="jpos__iframe" frameborder="none" src="' + soy.$$escapeHtml(opt_data.url) + '" width="100%" height="' + soy.$$escapeHtml(opt_data.height) + '"></iframe></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.JPOS.jposMacroIframe.soyTemplateName = 'Confluence.Templates.JPOS.jposMacroIframe';
}


Confluence.Templates.JPOS.jposIframeTimeout = function(opt_data, opt_ignored) {
  return '<div class="jpos__iframe-load-timeout"><span class="aui-icon aui-icon-small aui-iconfont-error"></span>' + soy.$$escapeHtml('Your preview couldn\x27t be rendered. Please check the url and try again') + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.JPOS.jposIframeTimeout.soyTemplateName = 'Confluence.Templates.JPOS.jposIframeTimeout';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.macros.advanced:portfolioforjiraplan-editor', location = 'com/atlassian/confluence/plugins/macros/advanced/portfolioforjiraplan/editor.js' */
define("confluence-advanced-macros/portfolioforjiraplan-editor","jquery ajs confluence/api/constants aui/dialog2 confluence/meta confluence/templates confluence/macro-js-overrides confluence-macro-browser/macro-browser-facade".split(" "),function(e,f,j,k,l,g,m,n){return{_validateUrl:function(a){return a.match(RegExp(/^https?:\/\/.+\/secure\/PortfolioRoadmapConfluence\.jspa\?r=[a-zA-Z0-9]{5}$/))},_validateHeight:function(a){return a.length>0&&parseInt(a,10)>=300},_renderPreview:function(){var a=this,
c=a.previewContainer.offsetHeight,d=j.CONTEXT_PATH+"/rest/tinymce/1/macro/preview",c={contentId:l.get("page-id"),macro:{name:a.macro.name,params:{url:a.urlInput.value,planHeight:c}}};a._disablePreviewBtn.call(a,"Loading...");a._clearPreview.call(a);e.ajax({url:d,type:"POST",contentType:"application/json",data:JSON.stringify(c)}).done(function(b){a.previewContainer.innerHTML=g.JPOS.jposMacroIframe({height:a.heightInput.value});var c=document.querySelector(".jpos__iframe"),d=c.contentWindow.document;
if(c){a.iframeLoadTimeout=setTimeout(a._iframeLoadTimeout.bind(a),2E4);c.addEventListener("load",function(){clearTimeout(a.iframeLoadTimeout);a._enablePreviewBtn.call(a);d.querySelector("#main").setAttribute("style","padding: 0px; overflow: hidden");d.querySelector("body").style.overflow="hidden"})}b=b.replace("window.onload","var preventPreviewOnloadFnTrigger");b=b.replace("2px solid #efefef","none");d.open();d.write(b);d.close()})},_iframeLoadTimeout:function(){this.previewContainer.innerHTML=g.JPOS.jposIframeTimeout();
this._enablePreviewBtn.call(this)},_clearPreview:function(){this.previewContainer.innerHTML="";clearTimeout(this.iframeLoadTimeout)},_enablePreviewBtn:function(){this.previewBtn.innerHTML="Preview";this.previewBtn.removeAttribute("disabled")},_disablePreviewBtn:function(a){this.previewBtn.innerHTML=f.I18n.getText(a);this.previewBtn.setAttribute("disabled",true)},_addListeners:function(){function a(a){b.heightInput.value=a.target.dataset.value;h.style.display="none";b._validateUrl(b.urlInput.value)&&
b.insertBtn.removeAttribute("disabled")}function c(a,b){var c;return function(){var d=this,e=arguments;clearTimeout(c);c=setTimeout(function(){a.apply(d,e)},b)}}function d(){b.urlInput.value=b.urlInput.value.replace(/(%20|\s)/g,"")}for(var b=this,e=document.querySelectorAll(".jpos__size-button"),g=document.querySelector(".jpos__close-dialog"),f=document.querySelector(".jpos__field-error--url"),h=document.querySelector(".jpos__field-error--height"),i=0;i<e.length;i++)e[i].addEventListener("click",
a);b.previewBtn.addEventListener("click",function(){d();b._renderPreview()});g.addEventListener("click",function(){b.dialog.hide()});b.insertBtn.addEventListener("click",function(){d();n.insert({name:b.macro.name,params:{url:b.urlInput.value,planHeight:b.heightInput.value}});b.dialog.hide()});b.urlInput.addEventListener("keydown",function(a){a.key===" "&&a.preventDefault()});b.urlInput.addEventListener("input",c(function(){d();b._clearPreview();if(!b._validateUrl(this.value)){f.style.display="block";
b._disablePreviewBtn.call(b,"Preview");b.insertBtn.setAttribute("disabled",true);return false}f.style.display="none";b._enablePreviewBtn.call(b);b._validateHeight(b.heightInput.value)&&b.insertBtn.removeAttribute("disabled")},500));b.heightInput.addEventListener("input",c(function(a){if(!b._validateHeight(a.target.value)){h.style.display="block";b.insertBtn.setAttribute("disabled",true);return false}h.style.display="none";b._validateUrl(b.urlInput.value)&&b.insertBtn.removeAttribute("disabled")},
500))},init:function(){var a=this;m.put("portfolioforjiraplan",{opener:function(c){var d=document.createElement("div");d.innerHTML=g.JPOS.jposMacroDialog();document.body.appendChild(d.firstChild);a.macro=c;a.dialog=k(".jpos__macro-dialog");a.dialog.show();a.urlInput=document.querySelector(".jpos__url-input");a.heightInput=document.querySelector(".jpos__height-input");a.insertBtn=document.querySelector(".jpos__insert-macro");a.previewBtn=document.querySelector(".jpos__preview-btn");a.previewContainer=
document.querySelector(".jpos__preview-container");a._addListeners();if(c.params){a.urlInput.value=c.params.url;a.heightInput.value=c.params.planHeight||"700";a.previewBtn.focus()}else{a.heightInput.value="700";a._disablePreviewBtn.call(a,"Preview");a.insertBtn.setAttribute("disabled",true);a.urlInput.focus()}}})}}});require("confluence/module-exporter").safeRequire("confluence-advanced-macros/portfolioforjiraplan-editor",function(e){require("ajs").toInit(function(){e.init()})});
}catch(e){WRMCB(e)};