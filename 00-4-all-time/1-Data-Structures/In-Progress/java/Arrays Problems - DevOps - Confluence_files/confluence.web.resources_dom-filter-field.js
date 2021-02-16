WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.web.resources:dom-filter-field', location = 'includes/js/dom-filter-field.js' */
define("confluence/dom-filter-field",["ajs","confluence/templates","jquery"],function(f,m,e){return function(c){function k(){g=e(c.items)}function h(){return e.trim(b.filter(":not(.blank-search)").val())}function l(){c.searcher(g,h());c.postSearch(g.filter(":visible"))}var d={items:null,matcher:function(a,c){return-1<a.text().toLowerCase().indexOf(c)},searcher:function(a,b){""!==b?(b=b.toLowerCase(),a.each(function(){var a=e(this),d=c.matcher(a,b);a.toggleClass("hidden",!d)})):a.removeClass("hidden")},
postSearch:function(a){},placeholderText:"Search",submitCallback:function(a,b){f.debug("DomFilterField submitted with "+a.length+" item(s) for search text \x3e"+b+"\x3c")}};c=e.extend(d,c);var g;k();var d=e(m.DomFilterField.form()),b=d.find("input");b.keyup(function(a){l();return f.stopEvent(a)}).keyup(function(a){return f.stopEvent(a)}).focus(function(a){b.hasClass("blank-search")&&b.removeClass("blank-search").val("");a.target.select()}).blur(function(a){""===h()&&b.addClass("blank-search").val(c.placeholderText)}).blur();
c.formId&&d.attr("id",c.formId);c.inputId&&b.attr("id",c.inputId);d.submit(function(a){f.stopEvent(a);a=g.filter(":visible");a.length&&c.submitCallback(a,h());return!1});return{form:d,reset:function(){""!==h()&&(b.val("").blur(),c.searcher(g,""))},refreshItems:k,filter:l,focus:function(){b.focus()},focusAndSearch:function(a){a=e.trim(a);b.val(a).keyup();a&&b.removeClass("blank-search");b.focus()}}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence/dom-filter-field","Confluence.DomFilterField");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:dom-filter-field', location = 'includes/soy/dom-filter-field.soy' */
// This file was automatically generated from dom-filter-field.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.DomFilterField.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.DomFilterField == 'undefined') { Confluence.Templates.DomFilterField = {}; }


Confluence.Templates.DomFilterField.form = function(opt_data, opt_ignored) {
  return '<form class="aui dom-filter-field-form"><input type="text" class="text"/></form>';
};
if (goog.DEBUG) {
  Confluence.Templates.DomFilterField.form.soyTemplateName = 'Confluence.Templates.DomFilterField.form';
}

}catch(e){WRMCB(e)};