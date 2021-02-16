WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-page-layout:pagelayout-frontend', location = 'js/pagelayout/page-layout.soy' */
// This file was automatically generated from page-layout.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.PageLayout.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.PageLayout == 'undefined') { Confluence.Templates.PageLayout = {}; }


Confluence.Templates.PageLayout.contentLayout = function(opt_data, opt_ignored) {
  return '<div class="contentLayout"></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.PageLayout.contentLayout.soyTemplateName = 'Confluence.Templates.PageLayout.contentLayout';
}


Confluence.Templates.PageLayout.cellLayout = function(opt_data, opt_ignored) {
  return '<div class="cell"><div class="innerCell"></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.PageLayout.cellLayout.soyTemplateName = 'Confluence.Templates.PageLayout.cellLayout';
}


Confluence.Templates.PageLayout.smallCellLayout = function(opt_data, opt_ignored) {
  return '<div class="cell aside"><div class="innerCell"></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.PageLayout.smallCellLayout.soyTemplateName = 'Confluence.Templates.PageLayout.smallCellLayout';
}


Confluence.Templates.PageLayout.headerLayout = function(opt_data, opt_ignored) {
  return '<div class="header"><div class="innerCell"></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.PageLayout.headerLayout.soyTemplateName = 'Confluence.Templates.PageLayout.headerLayout';
}


Confluence.Templates.PageLayout.footerLayout = function(opt_data, opt_ignored) {
  return '<div class="footer"><div class="innerCell"></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.PageLayout.footerLayout.soyTemplateName = 'Confluence.Templates.PageLayout.footerLayout';
}


Confluence.Templates.PageLayout.columnLayout = function(opt_data, opt_ignored) {
  return '<div class="columnLayout"></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.PageLayout.columnLayout.soyTemplateName = 'Confluence.Templates.PageLayout.columnLayout';
}


Confluence.Templates.PageLayout.emptyLayout2 = function(opt_data, opt_ignored) {
  return '<div class="contentLayout2">' + Confluence.Templates.PageLayout.emptySection2(opt_data) + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.PageLayout.emptyLayout2.soyTemplateName = 'Confluence.Templates.PageLayout.emptyLayout2';
}


Confluence.Templates.PageLayout.emptySection2 = function(opt_data, opt_ignored) {
  return '<div class="columnLayout ' + soy.$$escapeHtml(opt_data.defaultLayout) + '" data-layout="' + soy.$$escapeHtml(opt_data.defaultLayout) + '">' + Confluence.Templates.PageLayout.cell2({type: 'normal'}) + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.PageLayout.emptySection2.soyTemplateName = 'Confluence.Templates.PageLayout.emptySection2';
}


Confluence.Templates.PageLayout.cell2 = function(opt_data, opt_ignored) {
  return '<div class="cell ' + soy.$$escapeHtml(opt_data.type) + '" data-type="' + soy.$$escapeHtml(opt_data.type) + '"><div class="innerCell">' + ((opt_data.content) ? soy.$$filterNoAutoescape(opt_data.content) : '') + '</div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.PageLayout.cell2.soyTemplateName = 'Confluence.Templates.PageLayout.cell2';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-page-layout:pagelayout-frontend', location = 'js/pagelayout/tinymce-page-layout.js' */
define("confluence-page-layout/pagelayout/tinymce-page-layout",["jquery","ajs","tinymce"],function(e,f,d){function l(a){a=e(a.getBody());if(a.children(".contentLayout").length)return!1;a.children(".contentLayout2");return!0}var k=function(a){var d=e("#pagelayout-menu"),h=e(".icon-check",d);k=function(a){var c=h.not(".hidden");a=h.siblings("."+a.name).siblings();c.addClass("hidden");a.removeClass("hidden")};k(a)};return{init:function(a){function n(){l(a)||d.plugins.PageLayoutPlugin.PageLayout.needsContentEditableBody(c.getLayout())||
d.webkit||f.Rte.editorFocus(a)}function h(){d.isGecko&&setTimeout(function(){a.focus();a.dom.getRoot().focus()},1)}function m(){var g=e("#pagelayout-menu").parent(),b=e("#page-layout-2-group");l(a)?(g.addClass("hidden"),b.removeClass("hidden"),c=new d.plugins.PageLayoutPlugin.PageLayout2(a),d.plugins.PageLayoutPlugin.PageLayout2.needsContentEditableBody()&&e(a.getBody()).attr("contenteditable","true")):(g.removeClass("hidden"),b.addClass("hidden"),c=new d.plugins.PageLayoutPlugin.PageLayout(a),d.plugins.PageLayoutPlugin.PageLayout.needsContentEditableBody(c.getLayout())?
c.body.attr("contenteditable","true"):h(),k(c.getLayout()))}var c;this.ed=a;"comment"!==f.Meta.get("content-type")&&(a.onInit.add(function(){a.undoManager.clear();a.undoManager.add();m();f.bind("editor.remote.change editor.local.change",function(){a.undoManager.ignore(function(){c.setup()})});f.bind("rte-ready",function(){var g=e('[contenteditable\x3d"true"]',a.getBody()),b=!1!==f.Meta.get("editor-auto-focus");g.attr("contenteditable","false");g.attr("contenteditable","true");b&&(g=e("#content-title"),
""===g.val()?g.focus():f.Rte.editorFocus(a))});a.selection.onSetContent.add(n);l(a)&&a.undoManager.onUndo.add(function(){d.plugins.PageLayoutPlugin.PageLayout2.needsContentEditableBody()&&c.body.attr("contenteditable","true");h()})}),e("#pagelayout-menu").delegate("li.dropdown-item a","click",function(){a.execCommand("mcePageLayout",!1,d.plugins.PageLayoutPlugin.PageLayout.getLayoutOptions(this))}),a.addCommand("mcePageLayoutInitialize",function(){a.undoManager.add();c.createInitialLayoutIfNone()}),
a.addCommand("mcePageLayout",function(g,b){a.undoManager.add();c.setLayout(b);k(c.getLayout())}),a.addCommand("mcePageLayoutAddSection",function(g,b){a.undoManager.add();c.addSection&&c.addSection(b&&b.section)}),a.addCommand("mcePageLayoutChangeSection",function(g,b){a.undoManager.add();c.changeSection&&c.changeSection(b&&b.layout,b&&b.section)}),a.addCommand("mcePageLayoutRemoveSection",function(g,b){a.undoManager.add();c.removeSection&&c.removeSection(b&&b.section)}),a.addCommand("mcePageLayoutMoveSectionUp",
function(g,b){a.undoManager.add();c.moveSectionUp&&c.moveSectionUp(b&&b.section)}),a.addCommand("mcePageLayoutMoveSectionDown",function(g,b){a.undoManager.add();c.moveSectionDown&&c.moveSectionDown(b&&b.section)}),a.onSetContent.add(m),a.onClick.add(function(a,b){var c=e(b.target);c.is("div.cell")&&c.children(".innerCell").focus();!d.isWebKit||b.target!==a.getBody()&&b.target!==a.getBody().parentNode||(c=c.find(".innerCell"),c.length&&(a.execCommand("selectAll"),b=b.target!==a.getBody(),a.selection.collapse(b)))}),
!d.isIE9&&a.onKeyUp.add(function(a,b){b=b.keyCode;if(8!==b&&46!==b)return!0;b=a.selection.getRng(!0).startContainer;e(b).closest(".contentLayout,.contentLayout2",a.getBody()).length&&(b=e(b).closest(".innerCell"))&&b.length&&a.dom.isEmpty(b.clone()[0])&&(b.html('\x3cp\x3e\x3cbr data-mce-bogus\x3d"1"\x3e\x3c/p\x3e'),a.selection.select(b[0],!0),a.selection.collapse(!0))}))},execCommand:function(a,e,d){if("selectAll"===a){a=this.ed;e=a.getBody();var f;if("true"==a.dom.getAttrib(e,"contenteditable"))return!1;
d=a.dom.select(".innerCell",e);e=d[0];d=d[d.length-1];f=a.dom.createRng();f.setStart(e,0);f.setEnd(d,d.childNodes.length);a.selection.setRng(f);return!0}return!1},getInfo:function(){return{longname:"Page Layout Plugin",author:"Atlassian",authorurl:"http://www.atlassian.com",infourl:"http://www.atlassian.com",version:"1.0"}}}});
require("confluence/module-exporter").safeRequire("confluence-page-layout/pagelayout/tinymce-page-layout",function(e){var f=require("tinymce");f.create("tinymce.plugins.PageLayoutPlugin",e);f.PluginManager.add("pagelayoutplugin",f.plugins.PageLayoutPlugin)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-page-layout:pagelayout-frontend', location = 'js/pagelayout/page-layout.js' */
define("confluence-page-layout/pagelayout/page-layout",["jquery","confluence/templates","ajs"],function(d,h,r){var g=function(a){this.editor=a;this.body=d(a.getBody());this.setup()};g.DEFAULT_LAYOUT={name:"pagelayout-none",columns:0};g.prototype.setup=function(){var a=d(".contentLayout",this.body);a.length?(m(a),n(a,this.body,this.editor),this.editor.undoManager.add()):this.body.attr("contenteditable","true")};g.prototype.setLayout=function(a){var c=require("tinymce"),b;b=d(".contentLayout",this.body);
if(g.getLayoutOptions(b).name!==a.name){r.trigger("analyticsEvent",{name:"PageLayoutEvent.pageLayoutChanged",data:{name:a.name}});if(1===b.length)b=b.clone();else{var e=this.editor;b=this.body;var f=h.PageLayout.contentLayout(),e=e.dom.create("div");e.innerHTML=f;b=d(e).children().html(b.html())}m(b);t(a,b);if(a.header)f=b,d(".header",f).length||f.prepend(h.PageLayout.headerLayout());else{var e=b,f=d(".header",e),e=p(e),k=l(d(".innerCell",f));e.length?(e.prepend(k),f.remove()):f.replaceWith(k)}a.footer?
(f=b,d(".footer",f).length||f.append(h.PageLayout.footerLayout())):(e=b,f=d(".footer",e),e=d(".columnLayout \x3e .cell:last-child .innerCell",e),k=l(d(".innerCell",f)),e.length?(e.append(k),f.remove()):f.replaceWith(k));g.needsContentEditableBody(a)?(b=b.contents().unwrap(),this.body.attr("contenteditable","true")):(n(b,this.body,this.editor),b.attr("data-atlassian-layout",JSON.stringify(a)));a=b;this.body.empty().append(a);c.isIE&&this.editor.dom.setRoot();b=this.editor;c=b.selection;a=c.getRng(!0);
f=d('[contenteditable\x3d"true"]',b.getBody());f.length?(b.focus(),f[0].focus(),b=f.children()[0],a.setStart(b,0),a.setEnd(b,0),c.setRng(a)):b.focus()}};g.prototype.getLayout=function(){var a=d(".contentLayout",this.body);return a.length&&a.attr("data-atlassian-layout")?JSON.parse(a.attr("data-atlassian-layout")):g.DEFAULT_LAYOUT};g.getLayoutOptions=function(a){return(a=(a.jquery?a:d(a)).attr("data-atlassian-layout"))?JSON.parse(a):g.DEFAULT_LAYOUT};g.needsContentEditableBody=function(a){return!(a.header||
a.footer||a.columns)};var l=function(a){a=a.jquery?a:d(a);if(a.length)for(var c=a[0].childNodes,b=0;b<c.length;b++){var e=c[b];if("P"!==e.nodeName||1!==e.childNodes.length||"BR"!==e.firstChild.nodeName)return a.html()}return""},m=function(a){var c,b;a=d(".cell, .header, .footer",a);for(var e=0,f=a.length;e<f;e++)c=d(a[e]),b=c.html(),d(".innerCell",c).length||(c.removeAttr("contenteditable"),c.html('\x3cdiv class\x3d"innerCell"\x3e'+b+"\x3c/div\x3e"))},n=function(a,c,b){var e=require("tinymce");c.attr("contenteditable",
"false");d(".innerCell",a).each(function(){var a=d(this);a.attr("contenteditable","true");a.children().length||a.append("\x3cp\x3e\x3cbr /\x3e\x3c/p\x3e")});e.isIE&&c.delegate(".innerCell","focus.pageLayout",function(){b.dom.settings.root_element=this})},p=function(a){return d(".columnLayout \x3e .cell:first-child .innerCell",a)},q=function(a){return d(".columnLayout",a).append(h.PageLayout.cellLayout())},u=function(a){var c="";d(".columnLayout \x3e .cell",a).each(function(){c+=l(d(".innerCell",this))});
d(".columnLayout",a).replaceWith(c)},v=function(a,c){var b=l(a);c.append(b);a.parent().remove()},t=function(a,c){var b=d(".columnLayout \x3e .cell",c).length,e=a.name,f=a.columns,g;if(0===b)for(g=c.html(),c.html(h.PageLayout.columnLayout());b!==f.length;)q(c),b++;a=e.substring(e.indexOf("-")+1);a=a.substring(0,Math.max(0,a.indexOf("-"))||void 0);d(".columnLayout",c).attr("class","columnLayout "+a+"Columns");if(f)for(d(".columnLayout \x3e .cell",c).each(function(a,b){void 0!==f[a]&&d(b).attr("class",
"cell "+f[a])});b!==f.length;)b<f.length?(q(c),b++):(v(d(".columnLayout .cell:nth-child("+b+") .innerCell",c),d(".columnLayout \x3e .cell:nth-child("+(b-1)+") .innerCell",c)),b--);else u(c);g&&p(c).html(g)};return g});require("confluence/module-exporter").exportModuleAsGlobal("confluence-page-layout/pagelayout/page-layout","tinymce.plugins.PageLayoutPlugin.PageLayout");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-page-layout:pagelayout-frontend', location = 'js/pagelayout/page-layout-2.js' */
define("confluence-page-layout/pagelayout/page-layout-2","jquery confluence/templates ajs confluence/dark-features confluence/meta confluence/api/event".split(" "),function(g,t,d,u,w,k){function x(a,b,c,f){var e=a.find(".cell"),d=e.length,r=g(),n=b.cells.length,k=[],h,m,l;a.attr("class","columnLayout");a.addClass(b.id);a.attr("data-layout",b.id);h=0;for(m=d;h<m;h++)l=e.eq(h).detach(),k.push(A(l.children(".innerCell")));h=0;for(m=n;h<m;h++)r=r.add(t.PageLayout.cell2({type:b.cells[h].type||""}));if(d<=
n)b=k;else for(b=k.slice(0,n),h=n,m=d;h<m;h++)b[n-1]+=k[h];a.prepend(r);h=0;for(m=n;h<m;h++)r.eq(h).find(".innerCell").html(b[h]);v(a,c,f)}var y={defaultLayout:u.isEnabled("foxy.fixed.width.layout")?"fixed-width":"single"},e=function(a){this.editor=a;this.body=g(a.getBody());this.setup()};e.prototype.setup=function(){var a=this.body.find(".contentLayout2");a.length?(v(a,this.body,this.editor),B(this.body),C(this.body),this.editor.undoManager.add()):this.body.attr("contenteditable","true")};e.prototype.addSection=
function(a){var b=this,c=g(t.PageLayout.emptySection2(y)),f=a||l(this.body,this.editor,!0);if(f.length){var d=u.isEnabled("foxy.fixed.width.layout")?"fixed-width":f.attr("data-layout");this.editor.undoManager.ignore(function(){x(c,e.Layouts.get(d),b.body,b.editor);f.after(c)});q(this.editor,c);k.trigger("editor.page-layout.add-section",{section:c})}else this.createInitialLayoutIfNone()};e.prototype.changeSection=function(a,b){var c=this;e.isPageLayout()||this.createInitialLayoutIfNone();var f=b||
l(this.body,this.editor,!1);if(f.length&&(b=e.Layouts.get(f.attr("data-layout")),this.editor.undoManager.ignore(function(){x(f,a,c.body,c.editor)}),q(this.editor,f),k.trigger("editor.page-layout.change-layout",{section:f,originalLayout:b,currentLayout:a}),b.id!==a.id)){var d=!0;f.find(".innerCell").each(function(){""!==this.innerText.trim()&&(d=!1)});k.trigger("analyticsEvent",{name:"foxy.layout.change.type",data:{contentId:w.get("content-id"),fromType:b.id,toType:a.id,isContentEmpty:d}})}};e.prototype.removeSection=
function(a){function b(){var a=g("#rte-button-pagelayout-2");a.hasClass("active")&&a.click()}function c(a){a.getBody().setAttribute("contenteditable",!0);a.setContent("\x3cp\x3e\x3c/p\x3e");z(a)}if(e.isPageLayout()){a=a||l(this.body,this.editor,!0);var f=a.next(),d=a.prev(),p;f.length?(p=f,a.remove()):d.length?(p=d,a.remove()):(a.closest(".contentLayout2").remove(),a=this.body.find(".contentLayout2").find(".columnLayout").first(),a.length?p=a:(c(this.editor),b()));p&&p.length&&q(this.editor,p);k.trigger("editor.page-layout.remove-section",
{})}};e.prototype.moveSectionUp=function(a){if(e.isPageLayout()){a=a||l(this.body,this.editor,!0);var b=a.prev();b.length&&(a.detach(),b.before(a),q(this.editor,a));k.trigger("editor.page-layout.move-section-up",{section:a})}};e.prototype.moveSectionDown=function(a){if(e.isPageLayout()){a=a||l(this.body,this.editor,!0);var b=a.next();b.length&&(a.detach(),b.after(a),q(this.editor,a));k.trigger("editor.page-layout.move-section-down",{section:a})}};e.prototype.createInitialLayoutIfNone=function(){if(!e.isPageLayout()){var a=
g(t.PageLayout.emptyLayout2(y)),b=a.find(".innerCell"),c=this.body.children().detach();b.append(c);this.body.append(a);v(a,this.body,this.editor);z(this.editor)}};e.isPageLayout=function(){return!!g(d.Rte.getEditor().getBody()).find("div.contentLayout2").length};e.needsContentEditableBody=function(){return!e.isPageLayout()};e.Layouts=[{id:"single",icon:"1col",name:"Single column section",cells:[{type:"normal"}]},{id:"two-equal",icon:"2col",name:"Two column section",
cells:[{type:"normal"},{type:"normal"}]},{id:"two-left-sidebar",icon:"2col-right",name:"Two column section with left side-bar",cells:[{type:"aside"},{type:"normal"}]},{id:"two-right-sidebar",icon:"2col-left",name:"Two column section with right side-bar",cells:[{type:"normal"},{type:"aside"}]},{id:"three-equal",icon:"3col",name:"Three column section",cells:[{type:"normal"},{type:"normal"},{type:"normal"}]},{id:"three-with-sidebars",icon:"3col-center",
name:"Three column section with side-bars",cells:[{type:"sidebars"},{type:"normal"},{type:"sidebars"}]}];u.isEnabled("foxy.fixed.width.layout")&&(["Full-width","Two even columns","Two columns with left side-bar","Two columns with right side-bar","Three even columns",
"Three columns with side-bars"].forEach(function(a,b){e.Layouts[b].name=a}),e.Layouts.push({id:"fixed-width",icon:"template"!==w.get("content-type")?"fixed-width":"fixed-width-adg2",name:"Single column",cells:[{type:"normal"}]}));e.Layouts.get=function(a){for(var b=e.Layouts,c=0,f=b.length;c<f;c++)if(b[c].id===a)return b[c];return null};e.Layouts.findNearestSection=function(a){var b=d.Rte.getEditor(),c=g(b.getBody());
return l(c,b,a)};var A=function(a){a=g(a);if(a.length)for(var b=a[0].childNodes,c=0;c<b.length;c++){var f=b[c];if("P"!==f.nodeName||1!==f.childNodes.length||"BR"!==f.firstChild.nodeName)return a.html()}return""},l=function(a,b,c){b=g(b.selection.getRng(!0).startContainer).closest(".columnLayout");!b.length&&c&&(b=a.find(".columnLayout").last());return b},v=function(a,b,c){var f=require("tinymce");b.attr("contenteditable","false");g(".innerCell",a).each(function(){var a=g(this);a.attr("contenteditable",
"true");a.children().length||a.append("\x3cp\x3e\x3cbr /\x3e\x3c/p\x3e")});f.isIE&&b.delegate(".innerCell","focus.pageLayout",function(){c.dom.settings.root_element=this})},B=function(a){a.find("\x3e p").each(function(){""===this.id.trim()&&0===this.classList.length&&g(this).remove()})},C=function(a){a.find(".contentLayout2 .cell").filter(function(){return 1<g(this).find(".innerCell").length}).each(function(a,c){a=g(c).find(".innerCell");c=a[0];for(var b=1;b<a.length;b++){var d=g(a[b]);g(c).append(d.children());
d.remove()}})},z=function(a){var b=a.selection,c=b.getRng(!0),d=g('[contenteditable\x3d"true"]',a.getBody());d.length?(a.focus(),d[0].focus(),a=d.children()[0],c.setStart(a,0),c.setEnd(a,0),b.setRng(c)):a.focus()},q=function(a,b){var c=a.selection,e=c.getRng(!0);b=b.find('[contenteditable\x3d"true"]').first();var g=b.children();g.length?(a.focus(),b[0].focus(),a=g[0],e.setStart(a,0),e.setEnd(a,0),c.setRng(e),d.Rte.showElement(a)):a.focus()};return e});
require("confluence/module-exporter").exportModuleAsGlobal("confluence-page-layout/pagelayout/page-layout-2","tinymce.plugins.PageLayoutPlugin.PageLayout2");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-page-layout:pagelayout-frontend', location = 'js/pagelayout/tinymce-page-layout-toolbar.js' */
define("confluence-page-layout/pagelayout/tinymce-page-layout-toolbar","jquery ajs tinymce document confluence/legacy-editor-global-AVOID-IF-POSSIBLE confluence/dark-features confluence/meta".split(" "),function(d,c,h,f,a,g,k){var p=g.isEnabled("editor.spa.uxenhancements")&&"template"!==k.get("content-type"),l=function(a){a=a||h.plugins.PageLayoutPlugin.PageLayout2.Layouts.findNearestSection();var b=a.attr("data-layout");a=d("#rte-toolbar-row-pl2-toolbar").find(".layouts button");b=a.find(".pl2-layout-"+
b).closest(".aui-button");b.hasClass("active")||(a.filter(".active").removeClass("active"),b.addClass("active"))};return{initContextToolbars:function(g,b){var m=d(f),k=d("#page-layout-2"),e=d("#rte-button-pagelayout-2");b.addCommand("mcePageLayoutsToolbar",function(){e.hasClass("active")?m.trigger("removeContextToolbarRow.Toolbar",{id:"pl2-toolbar",animate:!0}):(m.trigger("createContextToolbarRow.Toolbar",{id:"pl2-toolbar",buttons:a.PageLayoutToolbar.Buttons,topToolbar:!0,animate:!0}),l(),b.execCommand("mcePageLayoutInitialize"));
e.toggleClass("active")});b.addCommand("mceAdg3PageLayoutsToolbar",function(){var b=function(){return f.querySelector("#rte-toolbar-row-pl2-toolbar")};e.hasClass("active")?b()&&b().classList.add("disabled"):(b()||(m.trigger("createContextToolbarRow.Toolbar",{id:"pl2-toolbar",buttons:a.PageLayoutToolbar.Buttons,topToolbar:!0,animate:!1,"class":"foobar"}),l()),b()&&b().classList.remove("disabled"));e.toggleClass("active")});e.click(function(a){a.preventDefault();k.hasClass("disabled")||b.execCommand(p?
"mceAdg3PageLayoutsToolbar":"mcePageLayoutsToolbar",!1,null)});b.onNodeChange.add(function(a,b,c){a=d(c).closest(".columnLayout");l(a)});g=h.plugins.PageLayoutPlugin.PageLayout2.Layouts;for(var q=[],r=function(c){q.push(new a.Toolbar.Components.Button({text:c.name,iconClass:"aui-icon aui-icon-small aui-iconfont-layout-"+c.icon+"-large",click:function(){b.execCommand("mcePageLayoutChangeSection",!1,{layout:c})}}))},n=0,t=g.length;n<t;n++)r(g[n]);d(window).bind("rte-ready",function(){p&&(b.execCommand("mceAdg3PageLayoutsToolbar",
!1,null),d(f).trigger("disableContextToolbarRow.Toolbar",{id:"pl2-toolbar"}),e.toggleClass("active"))});return{Buttons:[new a.Toolbar.Components.Group([new a.Toolbar.Components.Button({triggerText:"Add section",id:"add-layout-section",tooltip:"Add a new section below",iconClass:"aui-icon aui-icon-small aui-iconfont-add",click:function(){b.execCommand("mcePageLayoutAddSection")}}),new a.Toolbar.Components.Button({triggerText:"Remove section",
id:"remove-layout-section",tooltip:"Remove the current section",iconClass:"aui-icon aui-icon-small aui-iconfont-delete",click:function(){b.execCommand("mcePageLayoutRemoveSection")}})]),new a.Toolbar.Components.Group([new a.Toolbar.Components.Button({triggerText:"Move up",id:"move-up-layout-section",tooltip:"Move section up",iconClass:"aui-icon aui-icon-small aui-iconfont-up",click:function(){b.execCommand("mcePageLayoutMoveSectionUp")}}),
new a.Toolbar.Components.Button({triggerText:"Move down",id:"move-down-layout-section",tooltip:"Move section down",iconClass:"aui-icon aui-icon-small aui-iconfont-down",click:function(){b.execCommand("mcePageLayoutMoveSectionDown")}})]),new a.Toolbar.Components.Group(q,{id:"pagelayout2-toolbar",text:"Apply layout",groupClass:"layouts"}),new a.Toolbar.Components.Group([new a.Toolbar.Components.Button({text:"Close toolbar",
iconClass:"aui-icon aui-icon-small aui-iconfont-close-dialog",click:function(){b.execCommand("mcePageLayoutsToolbar",!1,null)}})],{groupClass:"close"})],Events:[]}}}});
require("confluence/module-exporter").safeRequire("confluence-page-layout/pagelayout/tinymce-page-layout-toolbar",function(d){var c=require("confluence/meta"),h=require("jquery"),f=require("document");"comment"!==c.get("content-type")&&h(f).bind("initContextToolbars.Toolbar",function(a,c){Confluence.Editor.PageLayoutToolbar=d.initContextToolbars(a,c)})});
}catch(e){WRMCB(e)};