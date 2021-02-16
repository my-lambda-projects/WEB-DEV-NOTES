WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.web.resources:page-loading-indicator', location = 'includes/js/page-loading-indicator.js' */
define("confluence/page-loading-indicator",["jquery","ajs"],function(b,a){return function(c){function e(){return b(".confluence-page-loading-blanket",c)}function f(){return b(".confluence-loading-indicator",c)}return{show:function(){0===e().length&&b(c).append('\x3cdiv class\x3d"confluence-page-loading-errors"\x3e\x3c/div\x3e\x3cdiv class\x3d"confluence-page-loading-blanket aui-blanket" aria-hidden\x3d"false"\x3e\x3cdiv class\x3d"confluence-loading-indicator"\x3e\x3c/div\x3e\x3c/div\x3e');e().show();
f().spin({lines:12,length:8,width:4,radius:10,trail:60,speed:1.5,color:"#F0F0F0"})},hide:function(){f().stop();e().hide()},showUntilResolved:function(b,d){this.show();b.always(this.hide.bind(this));d&&b.fail(function(){a.messages.error(".confluence-page-loading-errors",{body:d})})},showUntilDialogVisible:function(c,d){var g=this,e=d||"An error has occurred connecting to the server. Please try again.";d=b(".aui-dialog:visible");var f=b(".aui-dialog2:visible");d.length||f.length||g.show();c.always(g.hide).fail(function(){a.messages.error(".confluence-page-loading-errors",
{body:e})});a.bind("show.dialog",function h(){a.unbind("show.dialog",h);g.hide()});if(null!=a.dialog2&&void 0!=a.dialog2)a.dialog2.on("show",function k(){a.dialog2.off("show",k);g.hide()})},destroy:function(){c.remove(".confluence-page-loading-blanket")}}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence/page-loading-indicator","Confluence.PageLoadingIndicator");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:page-loading-indicator', location = 'includes/soy/page-loading-indicator.soy' */
// This file was automatically generated from page-loading-indicator.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }


Confluence.Templates.pageLoadingIndicator = function(opt_data, opt_ignored) {
  return '<div class="confluence-page-loading-errors"></div><div class="confluence-page-loading-blanket aui-blanket" aria-hidden="false"><div class="confluence-loading-indicator"></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.pageLoadingIndicator.soyTemplateName = 'Confluence.Templates.pageLoadingIndicator';
}

}catch(e){WRMCB(e)};