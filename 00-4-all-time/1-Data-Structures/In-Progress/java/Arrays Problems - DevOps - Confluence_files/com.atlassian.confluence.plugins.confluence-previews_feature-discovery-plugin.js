WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-previews:feature-discovery-plugin', location = 'js/component/feature-discovery/discovery-dialog.js' */
define("cp/component/feature-discovery/discovery-dialog",["jquery","underscore","MediaViewer","core/template-store-singleton","skate","aui/inline-dialog2"],function(g,c,e,d,a){var f=function(i,h){return function(){i.trigger(h,arguments)}};var b=function(h){this.$anchor=g(h.anchor);this.$appendTo=g(h.appendTo);this.key=h.key;this.text=h.text;this.dialog=null;this.$anchor.attr({"aria-controls":"cp-feature-discovery","data-aui-trigger":true});var j=g(d.get("FeatureDiscovery.featureDiscovery")({text:this.text}));j.find(".cp-feature-discovery-confirm").click(function(k){this.dismiss(true);k.preventDefault()}.bind(this));var i=j[0];this.$appendTo.append(i);a.init(i);i.show();this.dialog=i;c.extend(this,Backbone.Events);this.dialog.addEventListener("aui-layer-hide",f(this,"hide"));this.dialog.addEventListener("aui-layer-show",f(this,"show"));return this};b.prototype.is=function(h){return this.key===h};b.prototype.on=function(i,j){var h=i;if(i==="hide"){h="aui-layer-hide"}else{if(i==="show"){h="aui-layer-show"}}this.dialog.addEventListener(h,j)};b.prototype.dismiss=function(h){this.dialog.hide();this.dialog.remove();h&&this.trigger("user-dismissed-dialog",this.key)};return b});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-previews:feature-discovery-plugin', location = '/templates/feature-discovery.soy' */
// This file was automatically generated from feature-discovery.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace FileViewer.Templates.FeatureDiscovery.
 */

if (typeof FileViewer == 'undefined') { var FileViewer = {}; }
if (typeof FileViewer.Templates == 'undefined') { FileViewer.Templates = {}; }
if (typeof FileViewer.Templates.FeatureDiscovery == 'undefined') { FileViewer.Templates.FeatureDiscovery = {}; }


FileViewer.Templates.FeatureDiscovery.featureDiscovery = function(opt_data, opt_ignored) {
  return '<aui-inline-dialog2 id="cp-feature-discovery" class="aui-layer aui-inline-dialog" data-aui-alignment="bottom center" data-aui-responds-to="toggle" data-aui-persistent="true" data-aui-focus="false"><div class="aui-inline-dialog-contents"><p>' + soy.$$escapeHtml(opt_data.text) + '</p><button class="aui-button aui-button-link cp-feature-discovery-confirm">' + soy.$$escapeHtml('Dismiss') + '</button></div></aui-inline-dialog2>';
};
if (goog.DEBUG) {
  FileViewer.Templates.FeatureDiscovery.featureDiscovery.soyTemplateName = 'FileViewer.Templates.FeatureDiscovery.featureDiscovery';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-previews:feature-discovery-plugin', location = 'js/component/feature-discovery/feature-discovery-plugin.js' */
define("cp/component/feature-discovery/feature-discovery-plugin",["cp/component/feature-discovery/discovery-dialog","underscore","ajs","confluence/legacy"],function(e,h,f,g){var d=null;var c=g.FeatureDiscovery.forPlugin("com.atlassian.confluence.plugins.confluence-previews");var a=function(j){if(d===null){return}if(!j.key||j.key&&d.is(j.key)){d.dismiss(j.persist)}};var b=function(k){var j=k.key;var l=$(k.anchor);if(l.length===0||!l.is(":visible")||l.closest("body").length===0||!c.shouldShow(j)){return}c.addDiscoveryView(k.key);a({persist:false});d=new e(k);d.on("user-dismissed-dialog",function(m){c.markDiscovered(m)});return d};var i=function(l){var n=f.Meta.get("remote-user");var k="view-annotations";var o="add-annotations";var m=[k,o];var j=n&&h(m).without(c.listDiscovered()).length!==0;if(!j){return}l.on("fv.showFile",function(t){a({persist:false});var v=t.get("annotations");var s=l.supports(t.get("type"));var u=t.get("isRemoteLink");if(!v||!s||u){return}var r=l.getView().fileSidebarView;var q=l.getView().fileControlsView;var p=q.getLayerForName("annotationButton");var w=l.getView().fileContentView.getLayerForName("content")._viewer;if(!w){return}v.on("sync",function(){var x=v.getCount();var y=r.isPanelInitialized("annotations");if(x&&!y){b({key:k,anchor:p.$("a"),text:"Ooh, comments!  See what people are saying about this file.",appendTo:l.getView().$el})}else{var A=w.$("#cp-file-control-annotate");w.showControls();var z=b({key:o,anchor:A,text:"This little pin wants to help you collaborate. Drag it anywhere to add a comment.",appendTo:l.getView().$el});if(z){w.autoToggleControls(false);w.showControls();A.mousedown(function(){a({key:o,persist:true})});z.on("hide",function(){w.autoToggleControls(true)})}}})});l.on("fv.changeFile fv.close",function(){a({persist:false})});l.getView().fileSidebarView.on("togglePanel",function(q,p){if(q!=="annotations"||p===false){return}a({key:"view-annotations",persist:true});a({persist:false})});l.getView().fileSinkView.on("togglePanel",function(){a({persist:false})})};return i});(function(){var b=require("cp/component/feature-discovery/feature-discovery-plugin");var a=require("MediaViewer");a.registerPlugin("featureDiscovery",b)})();
}catch(e){WRMCB(e)};