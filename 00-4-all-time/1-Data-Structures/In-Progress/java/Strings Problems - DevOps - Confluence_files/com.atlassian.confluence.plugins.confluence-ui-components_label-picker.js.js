WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:label-picker', location = '/js/label-picker.js' */
define("confluence-ui-components/js/label-picker",["ajs","confluence/legacy","jquery","underscore"],function(g,i,e,j){var a=/[;,\.\?&\[\(\)#\^\*@!<>\]]/g;function l(m){var n=j.uniq(m.match(a));return n.join(" ")}function b(m){return{id:m.name,text:m.name}}function c(m){if(!m||!m.length){return null}var n=j.map(m,b);return j.sortBy(n,function(o){return o.text.toLowerCase()})}function k(o){var n=o.contentNameMatches;var p=c(n[0]);var m=c(n[1]);if(p&&m){return[{text:"Suggested",children:p},{text:"Other",children:m}]}return p||m||[]}function f(m){return function(n){return e.extend({query:n,ignoreRelated:true,maxResults:10},m)}}var d={placeholder:"Add labels",multiple:true,minimumInputLength:1,maximumSelectionSize:20,tokenSeparators:[" ",","],formatInputTooShort:function(n,m){return "Start typing to search for a label"},formatSelectionTooBig:function(m){return g.format("You can only input {0} labels",m)},formatResult:function(m){return i.UI.Components.LabelPicker.templates.labelResult({label:{labelName:m.text,isNew:m.isNew}})},formatNoMatches:function(n){var m=l(n);if(m){return i.UI.Components.LabelPicker.templates.labelInvalid({inputValue:n,invalidCharacters:m})}return this.noMatches},createSearchChoice:function(n){if(!n){return null}var m=l(n);if(m){return null}return{id:n,text:n,isNew:true}},ajax:{data:f(),dataType:"json",url:i.getContextPath()+"/labels/autocompletelabel.action",results:function(m){return{results:k(m)}},quietMillis:300},dropdownCssClass:"labels-dropdown",containerCssClass:"labels-autocomplete",initSelection:function(m,p){var o=m.val().split(",");var n=j.map(o,function(q){return{id:q,text:q}});p(n)}};function h(n){var m=e.extend({},d,n);if(n&&n.queryOpts){m.ajax.data=f(n.queryOpts);delete m.queryOpts}if(!n||!n.noMatches){m.noMatches=m.placeholder}return m}return{build:h}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:label-picker', location = '/js/label-picker-legacy.js' */
window.Confluence.UI.Components.LabelPicker=require("confluence-ui-components/js/label-picker");AJS.deprecate.prop(window.Confluence.UI.Components.LabelPicker,"build",{sinceVersion:"1.4.18",extraInfo:"Use require('confluence-ui-components/js/label-picker')"});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:label-picker', location = '/soy/label-picker.soy' */
// This file was automatically generated from label-picker.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.UI.Components.LabelPicker.templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.UI == 'undefined') { Confluence.UI = {}; }
if (typeof Confluence.UI.Components == 'undefined') { Confluence.UI.Components = {}; }
if (typeof Confluence.UI.Components.LabelPicker == 'undefined') { Confluence.UI.Components.LabelPicker = {}; }
if (typeof Confluence.UI.Components.LabelPicker.templates == 'undefined') { Confluence.UI.Components.LabelPicker.templates = {}; }


Confluence.UI.Components.LabelPicker.templates.labelResult = function(opt_data, opt_ignored) {
  return '' + ((opt_data.label.isNew) ? soy.$$escapeHtml(AJS.format('\x22{0}\x22 - add a new label',opt_data.label.labelName)) : soy.$$escapeHtml(opt_data.label.labelName));
};
if (goog.DEBUG) {
  Confluence.UI.Components.LabelPicker.templates.labelResult.soyTemplateName = 'Confluence.UI.Components.LabelPicker.templates.labelResult';
}


Confluence.UI.Components.LabelPicker.templates.labelInvalid = function(opt_data, opt_ignored) {
  var output = '';
  var inputValueHtml__soy9 = '<b>' + soy.$$escapeHtml(opt_data.inputValue) + '</b>';
  var invalidCharactersHtml__soy13 = '<b>' + soy.$$escapeHtml(opt_data.invalidCharacters) + '</b>';
  output += soy.$$filterNoAutoescape(AJS.format('{0} contains invalid characters {1}',inputValueHtml__soy9,invalidCharactersHtml__soy13));
  return output;
};
if (goog.DEBUG) {
  Confluence.UI.Components.LabelPicker.templates.labelInvalid.soyTemplateName = 'Confluence.UI.Components.LabelPicker.templates.labelInvalid';
}

}catch(e){WRMCB(e)};