WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'org.randombits.confluence.toc:client-side-toc-resources', location = 'net/customware/confluence/plugin/toc/js/client-side-toc.js' */
define("confluence-toc/js/client-side-toc",["ajs","jquery","underscore","skate","confluence/legacy"],function(k,e,n,f,m){function a(q){var p=e({});p.data("precedenceLevel",q);return p}function g(p){return e(p).data("precedenceLevel")}function i(q,p){e(q).data("precedenceLevel",p);return q}function h(q,p){return p===g(q)}function c(v,p,r){if(v.length===0){return e()}v=v.filter(function(w){return e(w).closest(".pm-table-sticky-wrapper").length===0});var q=v.map(g).reduce(function(x,w){return Math.min(x,w)});if(!h(v[0],q)){v.unshift(a(q))}var t=p.createTocLevelContainer();var u={subElements:[],currentItem:undefined,outline:undefined,flush:function(){if(this.subElements.length>0&&this.currentItem){c(this.subElements,p,this.outline).appendTo(this.currentItem);this.subElements=[]}},add:function(w){this.subElements.push(w)},resetItem:function(w){this.outline=(r||[]).slice(0);this.outline.push(w);this.currentItem=p.createTocItemContainer();this.currentItem.appendTo(t);return this.currentItem}};var s=0;v.forEach(function(w){if(h(w,q)){s++;u.flush();u.resetItem(s);if(w.textContent){b(w,u.outline.join(".")).appendTo(u.currentItem)}else{u.currentItem.addClass("toc-empty-item")}}else{u.add(w)}});u.flush();if(r.length===0&&p.decorateToc){p.decorateToc(t)}return t}function b(p,q){return e(m.Plugins.TableOfContents.Client.tocItemBody({outline:q,linkHref:"#"+p.id,linkText:p.textContent}))}function o(p){return{createTocLevelContainer:function(){return this.createTocItemContainer()},createTocItemContainer:function(){return e(m.Plugins.TableOfContents.Client.flatStyleTocItemContainer({cssClass:"toc-item-container"}))},decorateToc:function(r){function q(u,s){var v=u in p?p[u]:s;if(v){var t=e(m.Plugins.TableOfContents.Client.flatStyleTocSeparator({separator:v}));t.appendTo(r)}}q("preseparator","[ ");e(r).find("span.toc-item-body").each(function(s,t){if(s>0){q("midseparator"," ] [ ")}e(t).appendTo(r)});q("postseparator"," ]");e(r).find(".toc-item-container").remove()}}}function d(p){return{createTocLevelContainer:function(){return e(m.Plugins.TableOfContents.Client.listStyleTocLevelContainer({cssliststyle:p.cssliststyle,csslistindent:p.csslistindent}))},createTocItemContainer:function(){return e(m.Plugins.TableOfContents.Client.listStyleTocItemContainer())}}}function j(p){var r;if(p.includeheaderregex){r=new RegExp(p.includeheaderregex)}var q;if(p.excludeheaderregex){q=new RegExp(p.excludeheaderregex)}return function(){var s=e(this).text();if(r&&!r.test(s)){return false}if(q&&q.test(s)){return false}return true}}function l(r,t){var p=t.headerelements;var u=p.split(",");var s=j(t);var q=e("#main-content").find(p).filter(s).each(function(){i(this,u.indexOf(this.nodeName))}).toArray();return c(q,r,[])}f("client-side-toc-macro",{type:f.types.CLASS,attached:function(r){var s=e(r);var q=s.data()||{};var p;if(q.structure==="flat"){p=o(q)}else{p=d(q)}if(q.numberedoutline!==true){s.addClass("hidden-outline")}r.internalTimer=setTimeout(function(){s.html(l(p,q));delete r.internalTimer},500)},detached:function(p){if(p.internalTimer){clearTimeout(p.internalTimer)}},events:{"click a":function(){k.trigger("analyticsEvent",{name:"confluence.toc-macro.heading-click"})}}})});require("confluence/module-exporter").safeRequire("confluence-toc/js/client-side-toc");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'org.randombits.confluence.toc:client-side-toc-resources', location = 'net/customware/confluence/plugin/toc/templates/client.soy' */
// This file was automatically generated from client.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Plugins.TableOfContents.Client.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Plugins == 'undefined') { Confluence.Plugins = {}; }
if (typeof Confluence.Plugins.TableOfContents == 'undefined') { Confluence.Plugins.TableOfContents = {}; }
if (typeof Confluence.Plugins.TableOfContents.Client == 'undefined') { Confluence.Plugins.TableOfContents.Client = {}; }


Confluence.Plugins.TableOfContents.Client.tocItemBody = function(opt_data, opt_ignored) {
  return '<span class="toc-item-body" data-outline="' + soy.$$escapeHtml(opt_data.outline) + '"><span class="toc-outline">' + soy.$$escapeHtml(opt_data.outline) + '</span><a href="' + soy.$$escapeHtml(opt_data.linkHref) + '" class="toc-link">' + soy.$$escapeHtml(opt_data.linkText) + '</a></span>';
};
if (goog.DEBUG) {
  Confluence.Plugins.TableOfContents.Client.tocItemBody.soyTemplateName = 'Confluence.Plugins.TableOfContents.Client.tocItemBody';
}


Confluence.Plugins.TableOfContents.Client.listStyleTocLevelContainer = function(opt_data, opt_ignored) {
  return '<ul style="' + ((opt_data.cssliststyle) ? ' list-style: ' + soy.$$escapeHtml(opt_data.cssliststyle) + ';' : '') + ((opt_data.csslistindent) ? ' padding-left: ' + soy.$$escapeHtml(opt_data.csslistindent) + ';' : '') + '"></ul>';
};
if (goog.DEBUG) {
  Confluence.Plugins.TableOfContents.Client.listStyleTocLevelContainer.soyTemplateName = 'Confluence.Plugins.TableOfContents.Client.listStyleTocLevelContainer';
}


Confluence.Plugins.TableOfContents.Client.listStyleTocItemContainer = function(opt_data, opt_ignored) {
  return '<li></li>';
};
if (goog.DEBUG) {
  Confluence.Plugins.TableOfContents.Client.listStyleTocItemContainer.soyTemplateName = 'Confluence.Plugins.TableOfContents.Client.listStyleTocItemContainer';
}


Confluence.Plugins.TableOfContents.Client.flatStyleTocItemContainer = function(opt_data, opt_ignored) {
  return '<span class="' + soy.$$escapeHtml(opt_data.cssClass) + '"></span>';
};
if (goog.DEBUG) {
  Confluence.Plugins.TableOfContents.Client.flatStyleTocItemContainer.soyTemplateName = 'Confluence.Plugins.TableOfContents.Client.flatStyleTocItemContainer';
}


Confluence.Plugins.TableOfContents.Client.flatStyleTocSeparator = function(opt_data, opt_ignored) {
  return '<span class="toc-separator">' + soy.$$escapeHtml(opt_data.separator) + '</span>';
};
if (goog.DEBUG) {
  Confluence.Plugins.TableOfContents.Client.flatStyleTocSeparator.soyTemplateName = 'Confluence.Plugins.TableOfContents.Client.flatStyleTocSeparator';
}

}catch(e){WRMCB(e)};