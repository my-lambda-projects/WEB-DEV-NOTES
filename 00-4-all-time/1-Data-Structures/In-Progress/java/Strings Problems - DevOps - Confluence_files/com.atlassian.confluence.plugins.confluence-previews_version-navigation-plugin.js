WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-previews:version-navigation-plugin', location = 'templates/versions.soy' */
// This file was automatically generated from versions.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace FileViewer.Templates.Versions.
 */

if (typeof FileViewer == 'undefined') { var FileViewer = {}; }
if (typeof FileViewer.Templates == 'undefined') { FileViewer.Templates = {}; }
if (typeof FileViewer.Templates.Versions == 'undefined') { FileViewer.Templates.Versions = {}; }


FileViewer.Templates.Versions.versionTitle = function(opt_data, opt_ignored) {
  return '<span class="cp-title"><span class="' + soy.$$escapeHtml(opt_data.iconClass) + ' size-24 cp-file-icon"></span><span class="cp-file-title">' + soy.$$escapeHtml(opt_data.title) + '</span><span class="cp-version">v.' + soy.$$escapeHtml(opt_data.version) + ' ' + ((opt_data.isCurrent) ? '[' + soy.$$escapeHtml('Current') + ']' : '') + '</span></span>';
};
if (goog.DEBUG) {
  FileViewer.Templates.Versions.versionTitle.soyTemplateName = 'FileViewer.Templates.Versions.versionTitle';
}


FileViewer.Templates.Versions.versionHistory = function(opt_data, opt_ignored) {
  var output = '<ul class="versionFiles">';
  var versionList18 = opt_data.versions;
  var versionListLen18 = versionList18.length;
  for (var versionIndex18 = 0; versionIndex18 < versionListLen18; versionIndex18++) {
    var versionData18 = versionList18[versionIndex18];
    output += '<li class="' + ((versionData18.version == opt_data.selectedVersion) ? 'current' : '') + '" data-cid="' + soy.$$escapeHtml(versionData18.id) + '">' + ((versionData18.version == opt_data.selectedVersion) ? '<span class="title">' + soy.$$escapeHtml('Version') + ' ' + soy.$$escapeHtml(versionData18.version) + '</span>' : '<a class="title" href="#">' + soy.$$escapeHtml('Version') + ' ' + soy.$$escapeHtml(versionData18.version) + '</a>') + ((versionData18.message) ? '<p class="description">' + soy.$$escapeHtml(versionData18.message) + '</p>' : '') + ((versionData18.countComments > 0) ? '<span class="comment-count" title="' + soy.$$escapeHtml('comments') + '"><span class="counter">' + ((versionData18.countComments > 9) ? '9+' : soy.$$escapeHtml(versionData18.countComments)) + '</span></span>' : '') + '</li>';
  }
  output += '</ul>';
  return output;
};
if (goog.DEBUG) {
  FileViewer.Templates.Versions.versionHistory.soyTemplateName = 'FileViewer.Templates.Versions.versionHistory';
}


FileViewer.Templates.Versions.versionNavigationDialog = function(opt_data, opt_ignored) {
  return '<section class="versions-container"><div class="spinner-wrap" /></section>';
};
if (goog.DEBUG) {
  FileViewer.Templates.Versions.versionNavigationDialog.soyTemplateName = 'FileViewer.Templates.Versions.versionNavigationDialog';
}


FileViewer.Templates.Versions.viewCurrentVersion = function(opt_data, opt_ignored) {
  return '<a class=\'view-latest-version\' href=\'#\'>' + soy.$$escapeHtml('See the latest one') + '</a>';
};
if (goog.DEBUG) {
  FileViewer.Templates.Versions.viewCurrentVersion.soyTemplateName = 'FileViewer.Templates.Versions.viewCurrentVersion';
}


FileViewer.Templates.Versions.reloadLatestVersion = function(opt_data, opt_ignored) {
  return '<a class=\'reload-latest-version\' href=\'#\'>' + soy.$$escapeHtml('Reload') + '</a>';
};
if (goog.DEBUG) {
  FileViewer.Templates.Versions.reloadLatestVersion.soyTemplateName = 'FileViewer.Templates.Versions.reloadLatestVersion';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-previews:version-navigation-plugin', location = 'js/component/versions/version-file-enricher.js' */
define("cp/component/versions/version-file-enricher",["underscore","cp/component/versions/versions","cp/service/versions-service"],function(d,b,e){function c(g,f){if(g.getLatestVersion){return g}var h={getLatestVersion:function(){return this},isLatestVersion:function(){return true}};var i={getLatestVersion:function(){return f.getLatestVersion()},isLatestVersion:function(){return f.getLatestVersion()===this}};d.extend(g,f?i:h);g.set("versions",new b([],{versionsService:new e(),fileModel:g.getLatestVersion()}));return g}var a={enrich:c};return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-previews:version-navigation-plugin', location = 'js/component/versions/file-version.js' */
define("cp/component/versions/file-version",["backbone","cp/component/versions/version-file-enricher"],function(c,a){var b=c.Model.extend({initialize:function(d,e){this.versionsService=e.versionsService;this.fileModel=e.fileModel},toJSON:function(){var d=c.Model.prototype.toJSON.apply(this,arguments);d.cid=this.cid;return d},getFileVersion:function(){if(+this.get("version")===+this.fileModel.get("version")){return $.Deferred().resolve(this.fileModel)}return this.versionsService.getFileVersion(this.fileModel.get("ownerId"),this.fileModel.get("id"),this.get("version")).pipe(function(d){var e=this.fileModel.clone();e.set(_.omit(d,"id"));return a.enrich(e,this)}.bind(this))},getLatestVersion:function(){return this.fileModel}});return b});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-previews:version-navigation-plugin', location = 'js/component/versions/version-message-view.js' */
define("cp/component/versions/version-message-view",["backbone","ajs","MediaViewer","core/template-store-singleton"],function(f,b,e,d){var a=e.require("core/file");var c=f.View.extend({events:{"click a.view-latest-version":"_onViewLatest","click a.reload-latest-version":"_onReloadLatest","click span.icon-close":"_onCloseWarning"},initialize:function(g){this._mediaViewer=g.mediaViewer;this._filesService=this._mediaViewer.getConfig().filesService;this.$el.attr("id","cp-version-message")},render:function(){var g=this._mediaViewer.getCurrentFile();if(g.getLatestVersion().get("stale")){this.$el.html(b.messages.generic({title:"New file version uploaded.",body:d.get("Versions.reloadLatestVersion")(),closeable:false})).show()}else{if(!g.isLatestVersion()){this.$el.html(b.messages.generic({title:"This is an older version of this file.",body:d.get("Versions.viewCurrentVersion")(),closeable:true})).show()}}return this},teardown:function(){this.$el.hide()},_onViewLatest:function(h){h.preventDefault();var g=this._mediaViewer.getCurrentFile();this._mediaViewer.showFile(g.getLatestVersion());b.trigger("analyticsEvent",{name:" confluence-spaces.previews.versions.warning-view-latest"})},_onReloadLatest:function(){var h=this._mediaViewer.getCurrentFile();var g=new this._filesService(h.get("ownerId"));g.getFileWithId(h.getLatestVersion().get("id")).done(function(i){i=new a(i);this._mediaViewer._fileState.replaceCurrent(i);this._mediaViewer._fileState.set("isNewFileUploaded",true);this._mediaViewer.showFile(i)}.bind(this));b.trigger("analyticsEvent",{name:" confluence-spaces.previews.versions.warning-reload-latest"})},_onCloseWarning:function(){b.trigger("analyticsEvent",{name:"confluence-spaces.previews.versions.close-warning"})}});return c});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-previews:version-navigation-plugin', location = 'js/component/versions/version-navigation-dialog-view.js' */
define("cp/component/versions/version-navigation-dialog-view",["ajs","backbone","jquery","underscore","MediaViewer","cp/component/versions/file-version","cp/component/versions/versions","core/template-store-singleton"],function(e,f,c,g,b,a,h,i){var d=f.View.extend({dialogId:"cp-dialog-version",events:{"click .versionFiles li:not(.current)":"_onClickFileVersion"},initialize:function(j){if(j){this._mediaViewer=j.mediaViewer;this.$btnTrigger=j.$btnTrigger;this._file=this._mediaViewer.getCurrentFile()}this.dialog=e.InlineDialog(this.$btnTrigger.find("span.cp-file-icon"),this.dialogId,function(l,k,m){l.append(this.$el.detach());this.render();m()}.bind(this),{hideDelay:null,offsetY:0,noBind:true,hideCallback:function(){this.$btnTrigger.removeClass("active")}.bind(this)});this._mediaViewer.once("fv.close",this.teardown.bind(this));this.$btnTrigger.on("click.versionnav",function(){if(this.$el.is(":visible")){this.dialog.hide();e.trigger("analyticsEvent",{name:"confluence-spaces.previews.versions.click-title-to-close"})}else{this.dialog.show();this.$btnTrigger.addClass("active")}}.bind(this))},teardown:function(){this.$btnTrigger.off("click.versionnav");this.dialog.hide();c("#inline-dialog-cp-dialog-version").remove()},render:function(){this.$el.html(i.get("Versions.versionNavigationDialog")());this.$(".spinner-wrap").spin("medium",{top:0,left:0});var j=this._file.getLatestVersion();this._file.get("versions").fetchVersions(true).done(function(k){if(+k[0].version>+j.get("version")){this._file.getLatestVersion().set("stale",true);this._mediaViewer.getView().fileContentView.getLayerForName("version-message").render();k=g.filter(k,function(l){return l.version<=j.get("version")})}this.$(".versions-container").html(i.get("Versions.versionHistory")({versions:new f.Collection(k).toJSON(),selectedVersion:this._mediaViewer.getCurrentFile().get("version")}))}.bind(this)).fail(function(){this.$(".versions-container").html(e.messages.warning({title:"Can\'t show history",body:"We can\'t show the history right now. Give it another try later.",closeable:false}))}.bind(this));e.trigger("analyticsEvent",{name:"confluence-spaces.previews.versions.open",data:{fileType:this._file.get("type")}});return this},_onClickFileVersion:function(m){m.preventDefault();var j=this._file.get("versions").get(c(m.currentTarget).attr("data-cid"));j.getFileVersion().done(function(n){this._mediaViewer.showFile(n)}.bind(this));var k=j.get("version");var l=this._file.getLatestVersion().get("version");this._triggerClickFileVersionAnalyticsEvent(k,l)},_triggerClickFileVersionAnalyticsEvent:function(k,m){var j="confluence-spaces.previews.versions.view-previous";var l=m-k;if(l>=4){j+="4-and-older"}else{if(l>0){j+=l}}if(l>0){e.trigger("analyticsEvent",{name:j})}}});return d});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-previews:version-navigation-plugin', location = 'js/component/versions/version-title-view.js' */
define("cp/component/versions/version-title-view",["backbone","MediaViewer","cp/component/versions/version-navigation-dialog-view","core/template-store-singleton"],function(f,e,b,d){var c=e.require("util/icon-utils");var a=f.View.extend({initialize:function(g){this._mediaViewer=g.mediaViewer;this.options=g},render:function(){var i=this._mediaViewer.getCurrentFile();if(!i){return this}if(i.get("version")&&i.get("id")){this.$el.html(d.get("Versions.versionTitle")({title:i.get("title"),version:i.get("version"),iconClass:c.getCssClass(i.get("type")),isCurrent:i.isLatestVersion()}));this.versionsNavigationDialog=new b({$btnTrigger:this.$(".cp-title"),mediaViewer:this._mediaViewer})}else{var g=c.getCssClass(i.get("type"));var j="<span>"+i.get("title")+"</span>";var h="<span class='"+g+" size-24 cp-file-icon'></span>"+j;this.$el.html(h)}return this},teardown:function(){if(this.versionsNavigationDialog){this.versionsNavigationDialog.teardown();this.versionsNavigationDialog=undefined}}});return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-previews:version-navigation-plugin', location = 'js/component/versions/versions.js' */
define("cp/component/versions/versions",["jquery","backbone"],function(b,c){var a=c.Collection.extend({model:function(e,d){var f=require("cp/component/versions/file-version");return new f(e,{versionsService:d.collection.service,fileModel:d.collection.latestVersion})},initialize:function(d,e){this.service=e.versionsService;this.latestVersion=e.fileModel},sync:function(f,e){if(!this.service){return}if(f==="read"){var d=this.service.getAllFileVersions(this.latestVersion.get("id"),this.latestVersion.get("ownerId"));d&&d.done(function(g){e.reset(g,{silent:true});e.trigger("sync",e)});return d}},fetchVersions:function(d){if(this.size()===0||d){return this.fetch()}else{return b.when()}}});return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-previews:version-navigation-plugin', location = 'js/component/versions/versions-navigation-plugin.js' */
define("cp/component/versions/versions-navigation-plugin",["underscore","MediaViewer","cp/component/versions/version-title-view","cp/component/versions/version-file-enricher","cp/component/versions/version-message-view","cp/component/versions/versions"],function(e,g,d,a,f,b){var c=function(h){if(!h.getConfig().enableVersionNavigation){return}var i=h.getView().fileTitleView;i.addPanelView("version-title",d);h.getView().on("fv.fileChange",a.enrich);h.getView().fileContentView.addLayerView("version-message",f)};c.showFileForPreviousVersion=function(i,j,h){var k=a.enrich(j);return k.get("versions").fetchVersions().pipe(function(){var l=j.get("versions").findWhere({version:+h});if(!l){return $.when(j)}return l.getFileVersion()}).pipe(function(l){return i.showFile(l)})};return c});(function(){try{if(AJS.DarkFeatures.isEnabled("previews.versions")){var a=require("cp/component/versions/versions-navigation-plugin");var c=require("MediaViewer");c.registerPlugin("versionNavigation",a)}}catch(b){}})();
}catch(e){WRMCB(e)};