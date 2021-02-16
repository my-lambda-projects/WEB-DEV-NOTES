WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-macro-browser:macro-browser-js', location = 'js/macro-parameter-serializer.js' */
define("confluence-macro-browser/macro-parameter-serializer",["jquery"],function(h){function g(c){return c.replace(/\\/g,"\\\\").replace(/=/g,"\\\x3d").replace(/[|]/g,"\\|")}return{serialize:function(c){var d=[],a;for(a in c)d.push(g(a)+"\x3d"+g(c[a]));return d.join("|")},deserialize:function(c){function d(b,c){var a=[],d=[],e;b=b||"";for(var f=0,g=b.length;f<g;f++)e=b[f],"\\"==e?a.push(e+(f+1!=b.length?b[++f]:"")):e==c?(d.push(a.join("")),a=[]):a.push(e);d.push(a.join(""));return d}var a={};h.each(d(c||
"","|"),function(b,c){b=d(c,"\x3d");2===b.length&&b[0]&&(a[b[0].replace(/\\(.)/g,"$1")]=b[1].replace(/\\(.)/g,"$1"))});return a}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-macro-browser/macro-parameter-serializer","Confluence.MacroParameterSerializer");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-macro-browser:macro-browser-js', location = 'js/macro-browser-fields.js' */
define("confluence-macro-browser/macro-browser-fields","ajs jquery underscore confluence/legacy confluence/templates confluence/autocomplete-content confluence/api/logger confluence/api/constants confluence/meta confluence/dark-features confluence-create-content-plugin/plugin/user-select2/user-multiselect".split(" "),function(q,e,y,z,m,r,t,u,v,A,w){function x(l,h,n){return function(f,b){if(f.multiple)return l.string(f,b);f=e(m.MacroBrowser.macroParameterSelect());var a=e("select",f);b=b||{};b.setValue=
b.setValue||function(b){var d=!1;a.find("option").each(function(){if(this.value==b)return d=!0,!1});d?delete a.tempValue:(a.append(e("\x3coption/\x3e").attr("value",b).text(b+" ("+"Not found"+")")),a.tempValue=b);try{a.val(b)}catch(p){t.logError(p)}a.change()};f=h(f,a,b);f.updateDependencies=n;f.getData=function(c){if(c.title&&c.spaceKey||c.pageId){var d=a.tempValue||a.val();b.fileTypes&&(c.fileTypes=b.fileTypes);e.getJSON(u.CONTEXT_PATH+"/json/attachmentsearch.action",
c,function(c){if(!c.error){e("option",a).remove();if((c=c.attachments)&&c.length){for(var g=0,k=c.length;g<k;g++)a.append(e("\x3coption/\x3e").attr("value",c[g].name).text(c[g].name));d=d||a.tempValue;b.setValue(d||c[0].name)}else a.append(e("\x3coption/\x3e").attr("value","").html("No appropriate attachments")),a.tempValue&&b.setValue(a.tempValue);a.attr("style","")}})}else t.log("Not enough parameters to send attachmentsearch request")};return f}}return function(l){var h=
function(b,a,c){c=c||{};var d=c.setValue||function(b){a.val(b)},e=c.getValue||function(){return a.val()};a.change(c.onchange||l.paramChanged);return{paramDiv:b,input:a,setValue:d,getValue:e}},n=function(b,a,c){if(a&&a.length)for(var d=0,e=a.length;d<e;d++)l.fields[a[d]]&&l.fields[a[d]].dependencyUpdated(b,c)},f={updateDependencies:n,username:function(b,a){function c(a){return{id:a,text:"Former user",imgSrc:d}}a=a||{};var d=u.CONTEXT_PATH+"/images/icons/profilepics/default.png",f=b.multiple?"autocomplete-multiuser":
"autocomplete-singleuser",g=e(m.MacroBrowser.macroParameter()),k=e("input[type\x3d'text']",g);k.addClass(f).attr("data-none-message","Not found");b.required&&k.keyup(l.processRequiredParameters);b.multiple?(w(g,!0),a.setValue=function(a){k.val(a);a=a.split(",");for(var b=[],g=[],f=0,h=a.length;f<h;f++)b.push(function(a){return e.getJSON(u.CONTEXT_PATH+"/rest/api/user?accountId\x3d"+a).done(function(b){b&&b.accountId?g.push({id:b.accountId,text:b.displayName,
imgSrc:b.profilePicture.path||d}):g.push(c(a))}).fail(function(b){t.logError("Cannot parse user data for macro browser field with: "+b);g.push(c(a))})}(a[f]));e.when.apply(e,y.map(b,function(a){var b=e.Deferred();a.always(function(){b.resolve()});return b.promise()})).done(function(){g.length&&k.auiSelect2("data",g)})}):(w(g,!1),a.setValue=function(a){k.val(a);e.getJSON(u.CONTEXT_PATH+"/rest/api/user?accountId\x3d"+a).done(function(b){b&&b.accountId?k.auiSelect2("data",{id:b.accountId,text:b.displayName,
imgSrc:b.profilePicture.path||d}):k.auiSelect2("data",c(a))}).fail(function(b){t.logError("Cannot parse user data for macro browser field with: "+b);k.auiSelect2("data",c(a))})},k.bind("selected.autocomplete-content",function(c,d){if(a.onselect)a.onselect(d.selection);else n(b.name,a.dependencies,k.val()),"function"===typeof a.onchange&&a.onchange.apply(k)}));return h(g,k,a)},spacekey:function(b,a){if(b.multiple)return f.string(b,a);a=a||{};var c=e(m.MacroBrowser.macroParameter()),d=e("input[type\x3d'text']",
c);d.addClass("autocomplete-space").attr("data-template","{key}").attr("data-none-message","Not found");b.required&&d.keyup(l.processRequiredParameters);d.bind("selected.autocomplete-content",function(c,g){if(a.onselect)a.onselect(g.selection);else a.setValue?a.setValue(g.content.key):(n(b.name,a.dependencies,d.val()),"function"===typeof a.onchange&&a.onchange.apply(d))});r.autocompleteSpace(c);return h(c,d)},attachment:x(f,h,n),full_attachment:x(f,h,n),"confluence-content":function(b,
a){if(b.multiple)return f.string(b,a);a=a||{};b.options=b.options||{};var c=e(m.MacroBrowser.macroParameter()),d=e("input[type\x3d'text']",c).attr("data-none-message","Not found").attr("data-template","");b.required&&d.keyup(l.processRequiredParameters);a.onchange=a.onchange||function(c){c=d.val();n(b.name,a.dependencies,c)};a.setValue=a.setValue||function(b){d.val(b);"function"===typeof a.onchange&&a.onchange.apply(d)};d.bind("selected.autocomplete-content",
function(c,e){c="";"true"==b.options.includeDatePath&&"blogpost"===e.content.type&&(c=e.content.createdDate.date.split("-"),c="/"+c[0]+"/"+c[1]+"/"+c[2].substring(0,2)+"/");var f=e.content.space&&e.content.space.key,g=f&&f!=v.get("space-key");-1!==e.content.title.indexOf(":")&&(g=!0);c=(g?f+":":"")+c+e.content.title;d.val(c);if(a.onselect)a.onselect(e.selection);else a.setValue(c,d)});b.options.spaceKey&&("@self"===b.options.spaceKey.toLowerCase()&&(b.options.spaceKey=v.get("space-key")),d.attr("data-spacekey",
b.options.spaceKey));var p=b.options.type;if("string"===typeof p)if("page"===p)d.addClass("autocomplete-page"),r.autocompletePage(c);else if("blogpost"===p)d.addClass("autocomplete-blogpost"),r.autocompleteBlogpost(c);else{if("attachment"===p||"full_attachment"===p)d.addClass("autocomplete-attachment"),r.autocompleteAttachment(c)}else d.addClass("autocomplete-confluence-content"),r.autocompleteConfluenceContent(c);return h(c,d,a)},string:function(b,a){var c=e(m.MacroBrowser.macroParameter()),d=e("input",
c);b.required&&d.keyup(l.processRequiredParameters);return h(c,d,a)},"boolean":function(b,a){var c=e(m.MacroBrowser.macroParameterBoolean()),d=e("input",c);a=a||{};a.setValue=a.setValue||function(a){(/true/i.test(a)||/true/i.test(b.defaultValue)&&!/false/i.test(a))&&d.prop("checked",!0)};return h(c,d,a)},"enum":function(b,a){if(b.multiple)return f.string(b,a);var c=e(m.MacroBrowser.macroParameterSelect()),d=e("select",c);b.required||b.defaultValue||d.append(e("\x3coption/\x3e").attr("value",""));
e(b.enumValues).each(function(){d.append(e("\x3coption/\x3e").attr("value",this).html(""+this))});return h(c,d,a)},_hidden:function(b,a){b=e(m.MacroBrowser.macroParameterHidden()).hide();var c=e("input",b);return h(b,c,a)}};return{Field:h,ParameterFields:f}}});require("confluence/module-exporter").safeRequire("confluence-macro-browser/macro-browser-fields");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-macro-browser:macro-browser-js', location = 'js/macro-browser-smartfields.js' */
define("confluence-macro-browser/macro-browser-smartfields",["ajs","confluence/macro-js-overrides"],function(c,g){return function(h,f){var d=function(a){this.fileTypes=a};d.prototype.beforeParamsSet=function(a,b){a.page||a.date||a.space||("page"==c.params.contentType||"blogpost"==c.params.contentType?a.page=c.Editor.getCurrentTitle():"comment"==c.params.contentType&&(a.page=c.params.pageTitle));a.date&&(b=a.date.split("/"),a.page=["",b[2],b[0],b[1],a.page].join("/"));a.space&&(a.page=a.space+":"+
a.page);return a};d.prototype.beforeParamsRetrieved=function(a){if(a.page){var b=a.page.split(":");1<b.length&&(a.space=b[0],a.page=b[1]);b=a.page.split("/");1<b.length&&(a.date=[b[2],b[3],b[1]].join("/"),a.page=b[4]);(("page"==c.params.contentType||"blogpost"==c.params.contentType)&&a.page==c.Editor.getCurrentTitle()||"comment"==c.params.contentType&&a.page==c.params.pageTitle)&&delete a.page}return a};d.prototype.fields={attachment:function(a){a=f.attachment(a,{fileTypes:this.fileTypes});a.dependencyUpdated=
function(a,e){c.debug("attachment:dependencyUpdated called: "+a+", "+e);a=d.prototype.fields._parsePageLink(e);this.getData(a)};return a},full_attachment:function(a){a=f.full_attachment(a,{fileTypes:this.fileTypes});a.dependencyUpdated=function(a,e){c.debug("attachment:dependencyUpdated called: "+a+", "+e);a=d.prototype.fields._parsePageLink(e);this.getData(a)};return a},"confluence-content":function(a){return f["confluence-content"](a,{dependencies:["name"]})},_parsePageLink:function(a){var b={};
a=a.split(":",2);b.spaceKey=2===a.length&&a[0]||c.Meta.get("space-key");b.title=a[a.length-1];0===b.title.indexOf("/")&&(b.postingDay=b.title.substr(1,10),b.title=b.title.substr(12));b.title===c.Editor.getCurrentTitle()&&(b.title="");b.title||(b.pageId=c.Meta.get("content-id"));return b}};h.activateSmartFieldsAttachmentsOnPage=function(a,b){g.put(a,new d(b))}}});require("confluence/module-exporter").safeRequire("confluence-macro-browser/macro-browser-smartfields");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-macro-browser:macro-browser-js', location = 'js/macro-browser-utils.js' */
define("confluence-macro-browser/macro-browser-utils",["jquery"],function(a){return{makeDefaultKey:function(){return a.makeArray(arguments).join(".")}}});require("confluence/module-exporter").safeRequire("confluence-macro-browser/macro-browser-utils");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-macro-browser:macro-browser-js', location = 'js/macro-browser-cql.js' */
define("confluence-macro-browser/macro-browser-cql",["ajs","underscore","confluence/templates","confluence-ui-components/js/cql/cql-component","jquery"],function(k,h,m,n,d){function e(b){var a=b.param;return d.extend({},b,a.options,{defaultValue:a.defaultValue||a.options.defaultValue})}function p(b){b=e(b);return n.build(b)}function l(b){return d(m.MacroBrowser.CQL.sections({hasRenderParameters:0<b.renderParams.length}))}return{build:function(b){var a=l(b),f=b.container;f.append(a);f.bind("cql-field-adding",
function(b,c){c.element.addClass("macro-param-div");c.element.find(".cql-field-input").addClass("macro-param-input")});f.addClass("loading");a.filter(".cql-render-heading").find("button").click(function(){var b=d(this),c=b.closest(".cql-render-heading").next(),a=c.is(":visible");a?c.slideUp(300):(c.removeClass("hidden").show(),c=d(".cql-render-heading").position().top,d(".macro-input-fields").animate({scrollTop:c},300));a=a?"Show":"Hide";
b.text(a)});var g=p({param:b.cqlParam,value:b.cqlValue,container:a.filter(".cql-filter-fields")});f.data("cqlComponent",g);var e=d.Deferred();g.loading.done(function(){var a=b.cqlParam.options.requiredFields;if(a){var c=a.split(",");h.each(g.fieldRegistry||g.fieldArrays,function(a){var d=!1;h.each(a,function(a){!d&&h.contains(c,a.fieldName)&&(b.flagRequiredParam(a.element),d=!0,a.onChange(b.paramChanged))})})}f.removeClass("loading");e.resolve()});return{elements:a,loading:e}},_makeCqlComponentOptions:e,
_renderCqlSections:l}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-macro-browser:macro-browser-js', location = 'soy/macro-browser-cql.soy' */
// This file was automatically generated from macro-browser-cql.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.MacroBrowser.CQL.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.MacroBrowser == 'undefined') { Confluence.Templates.MacroBrowser = {}; }
if (typeof Confluence.Templates.MacroBrowser.CQL == 'undefined') { Confluence.Templates.MacroBrowser.CQL = {}; }


Confluence.Templates.MacroBrowser.CQL.sections = function(opt_data, opt_ignored) {
  return '<div class="cql-filter-fields"></div>' + ((opt_data.hasRenderParameters) ? '<h4 class="cql-render-heading"><span>' + soy.$$escapeHtml('Options') + '</span>' + aui.buttons.button({type: 'link', text: 'Show', extraAttributes: {type: 'button'}}) + '</h4><div class="cql-render-fields hidden"></div>' : '');
};
if (goog.DEBUG) {
  Confluence.Templates.MacroBrowser.CQL.sections.soyTemplateName = 'Confluence.Templates.MacroBrowser.CQL.sections';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-macro-browser:macro-browser-js', location = 'js/macro-browser-editor.js' */
define("confluence-macro-browser/macro-browser-editor","window ajs jquery confluence/templates confluence-macro-browser/macro-browser-cql confluence/macro-js-overrides underscore".split(" "),function(u,t,e,r,y,v,w){return function(d){function q(c){var a=e("#macro-insert-container").find(".macro-name").val(),b,h={},g=c.formDetails,f;f={};for(var n=0,p=c.formDetails.parameters.length;n<p;n++){var k=c.formDetails.parameters[n],l;if(k.type&&"cql"===k.type.name)l=e(".macro-input-fields form").data("cqlComponent").getValue();
else{l=e("#macro-param-"+k.name);var m=l.val();"checkbox"==l.attr("type")&&(m=""+l.prop("checked"));l=m}l&&(k.shared&&(h[k.name]=l),k.hidden||!k.defaultValue||k.defaultValue!=l)&&(f[k.name]=l)}f[""]&&(b=f[""]);e.extend(f,d.unknownParams);d.isInFabricEditor()&&g.body&&"PLAIN_TEXT"===g.body.bodyType&&(f.__bodyContent=d.getMacroBody());g=f;(f=v.getFunction(a,"beforeParamsRetrieved"))&&(g=f(g,c,h));f=g;return{name:a,bodyHtml:d.getMacroBody(),params:f,schemaVersion:c.formDetails.schemaVersion?c.formDetails.schemaVersion:
"",defaultParameterValue:b}}function z(c,a){var b=e(r.MacroBrowser.macroBody());a=a?a.body:d.settings.selectedText;e("textarea",b).val(a||"");c.label&&e("label",b).text(c.label);c.description&&b.append(r.MacroBrowser.macroParameterDesc({description:c.description}));c.hidden&&b.hide();return b}function A(c,a,b){var h,g=a.type.name;if(b){var f=b.fields&&b.fields[g];f&&"function"!==typeof f&&(f=f[a.name]);"function"===typeof f&&(h=f.call(b,a))}h||(g in d.ParameterFields&&"function"===typeof d.ParameterFields[g]||
(g="string"),h=d.ParameterFields[g](a));d.fields[a.name]=h;b=h.paramDiv;g=h.input;h="macro-param-"+a.name;b.attr("id","macro-param-div-"+a.name);g.addClass("macro-param-input").attr("id",h);a.hidden&&b.hide();g=c.pluginKey;a.displayName==d.Utils.makeDefaultKey(g,c.macroName,"param",a.name,"label")&&(a.displayName=a.name);a.description==d.Utils.makeDefaultKey(g,c.macroName,"param",a.name,"desc")&&(a.description="");e("label",b).attr("for",h).text(a.displayName);a.required&&x(b);a.description&&b.append(r.MacroBrowser.macroParameterDesc({description:a.description}));
return b}function x(c){var a=c.find("label"),b=a.text()+" *";a.text(b);c.addClass("required")}return{loadMacroInBrowser:function(c,a){if(c&&c.formDetails){var b;b=c.formDetails;var h=b.macroName,g=v.get(h),f=d.settings.selectedMacro,n=(a=u.tinymce)&&a.confluence&&a.confluence.macrobrowser&&a.confluence.macrobrowser.editedMacroDiv;if(g&&"function"===typeof g.opener)d.close(),g.opener({name:h});else{a=b.parameters;var p=w.find(a,function(a){return"cql"===a.type.name});e("#save-warning-span").addClass("hidden");
e("#macro-insert-container .macro-name").val(h);var k=e("#macro-insert-container .macro-input-fields form");k.empty();var l=c.extendedDescription||c.description;b.documentationLink&&d.UI.setHelpLink(d.dialog,{href:b.documentationLink});l&&(l=e(r.MacroBrowser.macroDescription({descriptionHtml:l})),k.append(l));e("#macro-insert-container").data("macro-detail",b);d.isInFabricEditor()&&b.body&&"PLAIN_TEXT"===b.body.bodyType?(e("#macro-insert-container #macro-preview-container").hide(),e("#macro-insert-container #macro-body-editor-container").show(),
b=f&&f.params&&"string"===typeof f.params.__bodyContent?f.params.__bodyContent:"",e("#macro-insert-container #macro-body-editor-container textarea").val(b)):(e("#macro-insert-container #macro-preview-container").show(),e("#macro-insert-container #macro-body-editor-container").hide(),b.body&&"NONE"!=b.body.bodyType&&n&&e(n).hasClass("editor-inline-macro")&&(n=c.pluginKey,b.body.label==d.Utils.makeDefaultKey(n,h,"body","label")&&(b.body.label=""),b.body.description==d.Utils.makeDefaultKey(n,h,"body",
"desc")&&(b.body.description=""),(b=z(b.body,d.selectedMacroDefinition))&&k.append(b)));var m=f?e.extend({},f.params):{},q=k;p&&(a=w.without(a,p),p=y.build({cqlParam:p,renderParams:a,cqlValue:m.cql,container:k,flagRequiredParam:x,paramChanged:d.paramChanged}),delete m.cql,q=p.elements.filter(".cql-render-fields"),p.loading.done(function(){d.paramChanged();d.Preview.previewMacro(c,f);d.UI.focusOnMacroDetailsFirstInput()}));e(a).each(function(){q.append(A(c,this,g))});g&&"function"===typeof g.beforeParamsSet&&
(m=g.beforeParamsSet(m,!f));e(a).each(function(){var a;a=""==this.name?d.selectedMacroDefinition?d.selectedMacroDefinition.defaultParameterValue:this.defaultValue:m[this.name];null!=a?delete m[this.name]:e(this.aliases).each(function(){m[this]&&(a=m[this],delete m[this])});null==a&&(a=this.defaultValue);null!=a&&d.fields[this.name].setValue(a)});d.unknownParams=m;e("a",k).click(function(){u.open(this.href,"_blank").focus();return!1});e("#macro-browser-dialog:visible").length||d.showBrowserDialog();
a={};e.extend(!0,a,c);a.formDetails||(a.formDetails={});a.formDetails.body||(a.formDetails.body={});d.dialog.activeMetadata=a;d.settings.selectedMacro?a.formDetails.body.content=d.settings.selectedMacro.body:a.formDetails.body.bodyType&&"plain_text"===a.formDetails.body.bodyType.toLowerCase()?a.formDetails.body.content=d.settings.selectedText:a.formDetails.body.content=d.settings.selectedHtml}}else t.trigger("analytics",{name:"macro-browser.unknown-macro-error"}),alert("Could not load unknown macro in the macro browser.")},
getMacroParametersFromForm:function(c){return q(c).params},getMacroDefinitionFromForm:q,processRequiredParameters:function(){if(e(".macro-input-fields form").is(".loading"))return t.log("Form still loading - cannot processRequiredParameters"),!1;var c=0===e("#macro-insert-container .macro-param-div.required .macro-param-input").not(".select2-container").filter(function(){var a=e(this).val();return null===a||""===a}).length,a=c?"":"disabled",b=a?"addClass":"removeClass";e("#macro-browser-dialog button.ok").prop("disabled",
a);e("#macro-browser-dialog .macro-preview-header .refresh-link").prop("disabled",a)[b]("disabled");return c}}}});require("confluence/module-exporter").safeRequire("confluence-macro-browser/macro-browser-editor");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-macro-browser:macro-browser-js', location = 'js/macro-browser-preview.js' */
define("confluence-macro-browser/macro-browser-preview",["jquery","ajs","confluence/macro-js-overrides","confluence/get-content-id"],function(e,f,k,n){return function(b){function g(){return e("#macro-insert-container .macro-preview")}function p(){var a=f.params.staticResourceUrlPrefix+"/blank.html";g().html('\x3ciframe src\x3d"'+a+'" frameborder\x3d"0" name\x3d"macro-browser-preview-frame" id\x3d"macro-preview-iframe"\x3e\x3c/iframe\x3e')}function l(){g().html("")}function q(a,c){var d=g().find("iframe")[0],
b=k.getFunction(a.macroName,"updateMacroPreviewIframe");b&&b(a,d,c)||(a=d.contentDocument||d.contentWindow.document,a.write(c),a.close(),e(a).ready(function(){f.trigger("macro-browser.preview-ready")}),e("div.error span.error",a).length&&f.logError("Error rendering macro definition : "))}function h(a){a?(b.UI.showPreviewSpinner(!0),m.disable()):(b.UI.showPreviewSpinner(!1),m.enable())}var m={disable:function(){e("#macro-browser-preview-link").attr("disabled",!0).addClass("disabled")},enable:function(){e("#macro-browser-preview-link").removeAttr("disabled").removeClass("disabled")}};
return{previewMacro:function(a,c){l();if(!b.Editor.processRequiredParameters())return f.trigger("analytics",{name:"macro-browser.missing-params-error"}),f.log("previewMacro: missing required params"),!1;"object"!==typeof c&&(c=b.Editor.getMacroDefinitionFromForm(a));var d=c.params,e=k.getFunction(a.macroName,"updateMacroParametersForPreview");e&&(d=e(d));d[""]&&delete d[""];c={contentId:n(),macroName:a.macroName,params:d,body:b.getMacroBody(),defaultParameterValue:c.defaultParameterValue,successCallback:function(b){q(a,
b);setTimeout(function(){h(!1)},1E3)},errorCallback:function(a){f.logError(a);h(!1)}};p();h(!0);b.Rest.fetchMacroPreviewData(c)},removePreviewContainer:l}}});require("confluence/module-exporter").safeRequire("confluence-macro-browser/macro-browser-preview");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-macro-browser:macro-browser-js', location = 'js/macro-browser-model.js' */
define("confluence-macro-browser/macro-browser-model",["underscore"],function(h){return function(b){function e(a){a.title==b.Utils.makeDefaultKey(a.pluginKey,a.macroName,"label")&&(a.title=a.macroName.charAt(0).toUpperCase()+a.macroName.substring(1).replace(/-/g," "));a.description==b.Utils.makeDefaultKey(a.pluginKey,a.macroName,"desc")&&(a.description="");a.id="macro-"+(a.alternateId||a.macroName);var c=[a.macroName,a.title].concat(a.aliases||[]);a.keywordsNoDesc=c.join(",");var f=a.description&&
a.description.replace(/,/g," ")||"";c.push(f);a.keywords=c.join(",");return a}function g(a,c){if(c.aliases)for(var b=0,d=c.aliases.length;b<d;b++)c.aliases[b]=c.aliases[b].toLowerCase(),a[c.aliases[b]]=c.macroName.toLowerCase()}return{loadMacros:function(a){if(a){b.metadataList=[];b.aliasMap={};for(var c=0,f=a.length;c<f;c++){var d=a[c],d=e(d);g(b.aliasMap,d);b.metadataList.push(d)}b.metadataList.sort(function(a,b){return a.title.toLowerCase()>b.title.toLowerCase()?1:-1})}else console.log("AJS.MacroBrowser.loadModel - no macro data, aborting")},
addMacro:function(a){if(a){var c=e(a);g(b.aliasMap,c);(a=h.find(b.metadataList,function(a){return a.macroName===c.macroName}))?(a=b.metadataList.indexOf(a),b.metadataList[a]=c):b.metadataList.push(c);b.metadataList.sort(function(a,b){return a.title.toLowerCase()>b.title.toLowerCase()?1:-1})}else console.log("AJS.MacroBrowser.addModel - no macro data, aborting")},transformMetaDataDefault:e}}});require("confluence/module-exporter").safeRequire("confluence-macro-browser/macro-browser-model");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-macro-browser:macro-browser-js', location = 'js/macro-browser-rest.js' */
define("confluence-macro-browser/macro-browser-rest",["jquery","ajs","wrm","confluence/api/constants"],function(b,f,g,d){function c(a){f.logError(a)}return{loadMacroMetadata:function(a){a.data=a.data||{};a.data.t="12";return b.ajax({type:"GET",timeout:a.timeout||3E4,dataType:"json",url:(a.context||d.CONTEXT_PATH)+"/plugins/macrobrowser/browse-macros.action",data:a.data,headers:a.forceUpdateCache?{"Cache-Control":"no-cache"}:{},success:a.successCallback,error:a.errorCallback||c}).promise()},fetchMacroMetadataDetails:function(a){var e=
{id:a.id};a.alternateId&&(e.alternateId=a.alternateId);b.ajax({type:"GET",dataType:"json",url:(a.context||d.CONTEXT_PATH)+"/plugins/macrobrowser/browse-macros-details.action",data:e,success:a.successCallback,error:a.errorCallback||c})},fetchMacroPreviewData:function(a){if(!a.contentId||!a.macroName)return(a.errorCallback||c)("invalid parameters");b.ajax({type:"POST",contentType:"application/json; charset\x3dutf-8",url:(a.context||d.CONTEXT_PATH)+"/rest/tinymce/1/macro/preview",data:b.toJSON({contentId:a.contentId,
macro:{name:a.macroName,body:a.body,params:a.params,defaultParameterValue:a.defaultParameterValue}}),dataType:"html",success:a.successCallback,error:a.errorCallback||c})}}});require("confluence/module-exporter").safeRequire("confluence-macro-browser/macro-browser-rest");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-macro-browser:macro-browser-js', location = 'js/macro-browser-UI.js' */
define("confluence-macro-browser/macro-browser-UI","jquery ajs confluence/templates confluence/api/constants confluence/dom-filter-field confluence/meta confluence/dialog".split(" "),function(d,e,h,r,t,u,v){return function(k){function n(a){return d(h.MacroBrowser.macroSummaryList({category:a}))}function m(a,c){var b=d(h.MacroBrowser.macroSummaryItem());if(a.icon){var g=(a.icon.relative?e.params.staticResourceUrlPrefix:"")+a.icon.location;!a.icon.relative&&d.browser.msie&&!window.location.href.indexOf("https")&&
g.indexOf("https")?b.prepend("\x3cspan class\x3d'macro-icon-holder icon-"+a.macroName+"'\x3e\x3c/span\x3e"):b.prepend("\x3cimg src\x3d'"+g+"' alt\x3d'icon' width\x3d'"+a.icon.width+"' height\x3d'"+a.icon.height+"' title\x3d'"+a.title+"'/\x3e")}else b.prepend("\x3cspan class\x3d'macro-icon-holder icon-"+a.macroName+"'\x3e\x3c/span\x3e");d(".macro-title",b).text(a.title);d(".macro-desc",b).prepend(a.description);"gadget"==a.macroName&&(g=a.gadgetUrl)&&(g.match("^https?://.*")||(g=r.CONTEXT_PATH+"/"+
g),d(".macro-title",b).after(h.MacroBrowser.gadgetLink({url:g})));b.click(function(b){c(b,a)});return b}function w(a,c){for(var b={all:n("all")},d=0,e=a.length;d<e;d++){var f=a[d];if(f.hidden)if(k.isHiddenMacroShown(f))f.categories.push("hidden-macros");else continue;b.all.append(m(f,c).attr("id",f.id));for(var p=0,x=f.categories.length;p<x;p++){var l=f.categories[p];b[l]=b[l]||n(l);b[l].append(m(f,c).attr("id",l+"-"+f.id))}}return b}function q(a,c){c=c?h.Dialog.helpLink(c):h.MacroBrowser.helpLink();
a.getPage(a.curpage).element.find(".dialog-title").prepend(c)}return{createDialog:function(a){var c=w(a.macros,a.onClickMacroSummary),b=v.component({width:a.width||865,height:a.height||530,id:"macro-browser-dialog",onSubmit:a.onSubmit,onCancel:a.onCancel});b.popup.element.on("keydown",".aui-button",function(a){a.stopPropagation()});b.getPage(0).element.attr("id","select-macro-page");b.addHeader(a.title);b.addPanel("All",c.all,"all","category-button-all").getPanel(0).setPadding(0);
for(var g=0,m=a.categories.length;g<m;g++){var f=a.categories[g];b.addPanel(f.displayName,c[f.name]||n(f.name),f.name,"category-button-"+f.name).getPanel(g+1).setPadding(0)}b.addCancel("Cancel",a.onCancel);q(b);c=d(h.MacroBrowser.insertMacroPanel());c.find("form").submit(function(a){k.complete();return e.stopEvent(a)});d("#macro-browser-preview-link",c).click(function(a){d(this).prop("disabled")||k.previewMacro(b.activeMetadata);return e.stopEvent(a)});b.addPage().addPanel("X",
c,"macro-input-panel").addLink("Select macro",function(a){a.prevPage();a.searcher.focus()},"dialog-back-link").addButton("insert.name",function(){k.complete()},"ok").addCancel("Cancel",function(){return a.onCancel()}).getPanel(0).setPadding(0);b.getPage(1).element.attr("id","macro-details-page");d("#macro-browser-dialog .dialog-button-panel .ok").before("\x3cspan id\x3d'save-warning-span' class\x3d'hidden'/\x3e");b.searcher=t({items:"#macro-browser-dialog .dialog-panel-body #category-all .macro-list-item",
formId:"macro-browser-search-form",inputId:"macro-browser-search",searcher:function(a,c){var e=null;""!=c&&(b.getCurrentPanel()!=b.getPanel(0)&&b.gotoPanel(0),c=k.searchSummaries(c),e={},d.each(c,function(){e[this.id]=this}));a.each(function(){!e||this.id in e?d(this).show():d(this).hide()})},submitCallback:function(a,b){""!=b&&1===a.length&&a.click()}});b.page[0].header.append(b.searcher.form);b.page[0].ontabchange=function(a,c){a!=b.getPanel(0,0)&&b.searcher.reset()};c=d(h.MacroBrowser.missingUserMacroMetadataPanel({showAdminMessage:u.getBoolean("is-admin")}));
b.addPage().addPanel("No macro metadata",c,"missing-metadata-panel").addLink("Back",function(a){a.gotoPage(0);a.searcher.focus()},"dialog-back-link").addCancel("Cancel",function(){return a.onCancel()});b.gotoPage(2);b.addHeader("No macro metadata");b.gotoPanel(0,0);b.ready=!0;return b},showBrowserSpinner:function(a){var c=d("#macro-browser-dialog");a?c.spin("large"):c.spinStop()},
showPreviewSpinner:function(a){var c=d("#macro-browser-preview");a?c.spin("large"):c.spinStop()},updateButtonText:function(a){var c=d("#macro-browser-dialog .dialog-button-panel .ok");"edit"==a?c.text("Save"):c.text("Insert")},enableSaveButton:function(a){d("#macro-browser-dialog .dialog-button-panel .ok").prop("disabled",!a)},focusOnMacroDetailsFirstInput:function(){var a=d("#macro-insert-container").find(".macro-input-fields :input:visible:not(button,.select2-offscreen)").first();
if(a.length){if(a.hasClass("select2-input")){var c=a.closest(".select2-container").parent().find(".select2-offscreen");if("function"!==typeof c.select2){e.log("select2Hidden is not a select2 hidden input, skipping focus attempt.");return}c.select2("open");c.select2("close")}else a.focus();k.selectedMacroDefinition||""===a.val()||a.select()}else e.log("No input to focus")},setHelpLink:q}}});require("confluence/module-exporter").safeRequire("confluence-macro-browser/macro-browser-UI");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-macro-browser:macro-browser-js', location = 'js/macro-browser.js' */
define("confluence-macro-browser/macro-browser","window jquery ajs confluence-macro-browser/macro-browser-utils confluence-macro-browser/macro-browser-editor confluence-macro-browser/macro-browser-fields confluence-macro-browser/macro-browser-model confluence-macro-browser/macro-browser-preview confluence-macro-browser/macro-browser-rest confluence-macro-browser/macro-browser-UI confluence-macro-browser/macro-browser-smartfields confluence-macro-browser/macro-parameter-serializer confluence/macro-js-overrides confluence/api/logger confluence/dark-features underscore confluence/legacy-message-queue".split(" "),
function(n,e,f,r,t,p,u,v,w,x,y,z,k,l,A,B,q){var a={};p=p(a);a.ParameterFields=p.ParameterFields;a.Field=p.Field;y(a,a.ParameterFields);a.Utils=r;a.Editor=t(a);a.Preview=v(a);a.Model=u(a);a.Rest=w;a.UI=x(a);var h,m=function(b,c){var d={id:b.macroName,successCallback:function(b){b&&b.details&&(b.details=a.Model.transformMetaDataDefault(b.details));a.Editor.loadMacroInBrowser(b.details,c);m.displayDetails();a.Preview.previewMacro(b.details)},errorCallback:function(a){f.trigger("analytics",{name:"macro-browser.fetch-metadata-error"});
n.alert("There has been an error loading the macro browser. Please try again or see your system administrator.");m.displayDetails()}};b.alternateId&&(d.alternateId=b.alternateId);m.setUI(c,b.title);a.Rest.fetchMacroMetadataDetails(d)};m.setUI=function(b,c){var d="edit"==b?a.editTitle:a.insertTitle;e("#macro-insert-container").hide();a.UI.updateButtonText(b);a.UI.enableSaveButton(!1);a.dialog.gotoPage(1).addHeader(d.replace(/\{0\}/,c));a.dialog.show();a.UI.showBrowserSpinner(!0)};m.displayDetails=function(){a.UI.showBrowserSpinner(!1);a.UI.enableSaveButton(!1);
e("#macro-insert-container").show();a.UI.focusOnMacroDetailsFirstInput()};a.isOpen=!1;a.isInTinyMceEditor=function(){return n.tinymce&&!!n.tinymce.activeEditor};a.isInFabricEditor=function(){return!a.isInTinyMceEditor()};a.reset=function(){h&&h.resolve&&h.resolve();h=null;a.initMacroBrowserAfterRequest=null;a.initData=null;a.hasInit=!1;a.metadataList=[];a.aliasMap={};a.fields={};k.reset();a.Macros=k.elements()};a.getMacroJsOverride=k.get;a.setMacroJsOverride=k.put;a.Macros=k.elements();a.hasInit=
!1;a.metadataList=[];a.aliasMap={};a.fields={};a.processRequiredParameters=function(){return a.Editor.processRequiredParameters()};a.paramChanged=function(){a.Editor.processRequiredParameters()};a.loadMacroInBrowser=function(b,c){a.Editor.loadMacroInBrowser(b,c)};a.getMacroDefinitionFromForm=function(b){a.Editor.getMacroDefinitionFromForm(b)};a.getMacroParametersFromForm=function(b){a.Editor.getMacroParametersFromForm(b)};a.previewMacro=function(b){a.Preview.previewMacro(b)};a.previewOnload=function(b){var c=
a.dialog&&a.dialog.activeMetadata&&a.dialog.activeMetadata.macroName||null;c&&((c=k.getFunction(c,"postPreview"))&&c(e("#macro-preview-iframe")[0],a.dialog.activeMetadata),f.Editor.disableFrame(b),e(b).click(function(a){if("a"===a.target.tagName.toLowerCase())return(a=e(a.target).attr("href"))&&0!=a.indexOf("#")&&-1==a.indexOf(n.location)&&n.open(a,"_blank").focus(),!1}))};a.getMacroMetadata=function(b){for(var c=0,d=a.metadataList.length;c<d;c++){var g=a.metadataList[c];if(g.macroName==b)return g}return null};
a.getMetadataPromise=function(){return h};a.open=function(b){b||(b={},l.log("No settings to open the macro browser."));var c=b.selectedMacro;!c&&b.presetMacroMetadata&&(c={name:b.presetMacroMetadata.macroName});if(c&&c.name){var d=k.getFunction(c.name,"opener");if(d){a.isInFabricEditor()&&c.params&&"string"===typeof c.params.__bodyContent&&(c.body=c.params.__bodyContent);b&&(a.settings=b);d(c);return}}a.hasInit?a.openMacroBrowser(b):(l.debug("init macro browser"),a.UI.showBrowserSpinner(!0),null!==
a.initData&&e.isEmptyObject(a.initData)?(f.trigger("analytics",{name:"macro-browser.init-reattempt"}),l.error("Macro browser preload failed. Trying again..."),a.initMacroBrowserAfterRequest=b,a.preLoadMacro()):a.initData?(a.initBrowser(),a.openMacroBrowser(b),A.isEnabled("remove.browse.macros.caching")||a.updateCacheInBackground()):(f.trigger("analytics",{name:"macro-browser.init-overlap"}),l.debug("Waiting for macro browser preloading..."),a.initMacroBrowserAfterRequest=b))};a.openMacroBrowser=function(b){a.settings=
b;a.selectedMacroDefinition=b.selectedMacro;var c=a.selectedMacroDefinition&&a.selectedMacroDefinition.name||b.presetMacroName;b.presetMacroName&&(b.presetMacroMetadata=a.getMacroMetadata(b.presetMacroName));var d=b.presetMacroMetadata;if(!d){var g=b.selectedMacro;if(g){var c=g.name.toLowerCase(),c=a.aliasMap[c]||c,f=k.getFunction(c,"updateSelectedMacro"),h=k.getFunction(c,"getMacroDetailsFromSelectedMacro");f&&f(g);h&&(d=h(a.metadataList,g));d||(d=a.getMacroMetadata(g.name))}}g=e("#macro-browser-dialog").find("button.back");
d?(l.debug("Open macro browser to edit macro: "+d.macroName),g.hide(),a.replicateSelectMacro(d,b.mode||"edit")):c?(g.show(),a.dialog.overrideLastTab(),a.dialog.gotoPage(2),a.showBrowserDialog()):(g.show(),b.selectedCategory?(c=e("#select-macro-page .dialog-page-menu button").index(e("#category-button-"+b.selectedCategory)),0>c&&(c=0),a.dialog.overrideLastTab(),a.dialog.gotoPanel(0,c)):a.dialog.gotoPage(0),a.showBrowserDialog(),a.dialog.searcher.focusAndSearch(b.searchText));a.isOpen=!0};a.showBrowserDialog=
function(){a.dialog.show();a.UI.showBrowserSpinner(!1)};a.complete=function(b){if(e("#macro-browser-dialog .dialog-button-panel .ok").is(":visible:not(:disabled)")){b=a.dialog.activeMetadata;var c=k.getFunction(b.macroName,"manipulateMarkup");c&&c(b);var c=a.Editor.getMacroDefinitionFromForm(b),d=a.settings.selectedMacro;d?q.push({type:"ATLASSIAN_CONFLUENCE_ANALYTICS_NEXT_TRACK",payload:{source:"macroBrowser",action:"edited",actionSubject:"macro",actionSubjectId:d.name}}):q.push({type:"ATLASSIAN_CONFLUENCE_ANALYTICS_NEXT_TRACK",
payload:{source:"macroBrowser",action:"inserted",actionSubject:"macro",actionSubjectId:c.name}});a.afterComplete(c,b)}};a.afterComplete=function(b,c){a.settings&&!1!==a.settings.autoClose&&a.close();if(a.settings&&"function"===typeof a.settings.onComplete)a.settings.onComplete(b,c)};a.cancel=function(){a.close();if(a.settings&&"function"===typeof a.settings.onCancel)a.settings.onCancel();return!1};a.close=function(){this.unknownParams={};this.fields={};a.Preview.removePreviewContainer();this.dialog&&
this.dialog.hide();a.isOpen=!1};a.replicateSelectMacro=function(a,c){m(a,c)};a.initBrowser=function(){var b=a.initData;if(!b.categories||!a.metadataList.length)return f.trigger("analytics",{name:"macro-browser.init-browser-error"}),n.alert("There has been an error loading the macro browser. Please try again or see your system administrator."),a.UI.showBrowserSpinner(!1),!1;a.editTitle=b.editTitle;a.insertTitle=b.insertTitle;var c;b.categories=e.map(b.categories,function(a){return"hidden-macros"==a.name?(c=a,null):a});b.categories.sort(function(a,b){return a.displayName.toLowerCase()>
b.displayName.toLowerCase()?1:-1});c&&f.params.showHiddenUserMacros&&b.categories.push(c);a.dialog=a.UI.createDialog({title:b.title,categories:b.categories,macros:a.metadataList,onClickMacroSummary:function(a,b){a.preventDefault();m(b,"insert")},onSubmit:a.complete,onCancel:a.cancel});return a.hasInit=!0};a.searchSummaries=function(b,c){c=e.extend({splitRegex:/[\s\-]+/},c);return f.filterBySearch(a.metadataList,b,c)};a.getMacroBody=function(){if(f.DarkFeatures.isEnabled("macro.fix-get-macro-body")&&
!a.isOpen)throw Error("confluence-macro-browser/macro-browser is not open");var b="",c=e("#macro-insert-container").data("macro-detail"),d=e("#macro-insert-container .macro-body-editor textarea"),g=e("#macro-insert-container .macro-body-div textarea");a.isInFabricEditor()&&c&&c.body&&"PLAIN_TEXT"===c.body.bodyType&&d.length?b=d.val():g.length?b=g.val():a.selectedMacroDefinition?a.selectedMacroDefinition.body&&(b=a.selectedMacroDefinition.body):a.dialog.activeMetadata&&(b=a.dialog.activeMetadata.formDetails.body.content);
return b};a.getMacroParams=function(a){return z.deserialize(a.getAttribute("data-macro-parameters"))};a.getMacroName=function(a){if(a&&a.hasAttribute("data-macro-name"))return a.getAttribute("data-macro-name")};a.isHiddenMacroShown=function(a){return f.params.showHiddenUserMacros&&"_-user-macro-_"==a.pluginKey};a.hasRequiredParameters=function(a){return a.anyParameterRequired};a.setWhitelist=function(b){a.whitelist=b};a.updateCacheInBackground=function(){a.Rest.loadMacroMetadata({data:a.whitelist?
{whitelist:a.whitelist}:{detailed:!1},forceUpdateCache:!0,errorCallback:function(a){l.error("Error updating cached macro browser metadata:");l.error(a)}})};a.preLoadMacro=function(b){b=b||{};a.initData=null;return h&&"pending"===h.state()&&!b.forceUpdateCache?h:h=a.Rest.loadMacroMetadata({data:a.whitelist?{whitelist:a.whitelist}:{detailed:!1},forceUpdateCache:b.forceUpdateCache,successCallback:function(b){a.initData=b;a.Model.loadMacros(b.macros);a.initMacroBrowserAfterRequest&&(a.initBrowser(),a.openMacroBrowser(a.initMacroBrowserAfterRequest))},
errorCallback:function(b){f.trigger("analytics",{name:"macro-browser.preload-error"});l.error("Error requesting macro browser metadata:");l.error(b);a.initData={}}})};return a});require("confluence/module-exporter").exportModuleAsGlobal("confluence-macro-browser/macro-browser","AJS.MacroBrowser");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-macro-browser:macro-browser-js', location = 'soy/macro-browser.soy' */
// This file was automatically generated from macro-browser.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.MacroBrowser.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.MacroBrowser == 'undefined') { Confluence.Templates.MacroBrowser = {}; }


Confluence.Templates.MacroBrowser.macroSummaryList = function(opt_data, opt_ignored) {
  return '<ol id="category-' + soy.$$escapeHtml(opt_data.category) + '" class="macro-list"></ol>';
};
if (goog.DEBUG) {
  Confluence.Templates.MacroBrowser.macroSummaryList.soyTemplateName = 'Confluence.Templates.MacroBrowser.macroSummaryList';
}


Confluence.Templates.MacroBrowser.macroSummaryItem = function(opt_data, opt_ignored) {
  return '<li class="macro-list-item"><h4 class="macro-title"></h4>' + Confluence.Templates.MacroBrowser.macroDescription({description: ''}) + '</li>';
};
if (goog.DEBUG) {
  Confluence.Templates.MacroBrowser.macroSummaryItem.soyTemplateName = 'Confluence.Templates.MacroBrowser.macroSummaryItem';
}


Confluence.Templates.MacroBrowser.macroDescription = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<div class="macro-desc">' + ((opt_data.descriptionHtml) ? soy.$$filterNoAutoescape(opt_data.descriptionHtml) : '') + ((opt_data.documentationLink) ? ' <a href="' + soy.$$escapeHtml(opt_data.documentationLink) + '" class="macro-doco-link">' + soy.$$escapeHtml('Documentation') + '</a>' : '') + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.MacroBrowser.macroDescription.soyTemplateName = 'Confluence.Templates.MacroBrowser.macroDescription';
}


Confluence.Templates.MacroBrowser.insertMacroPanel = function(opt_data, opt_ignored) {
  return '<div id="macro-insert-container"><input class="macro-name" type="hidden"/><div class="macro-input-fields dialog-panel"><form action="#" class="aui"></form></div><div id="macro-preview-container" class="macro-preview-container dialog-panel"><div class="macro-preview-header"><ul class="macro-preview-links"><li><a id="macro-browser-preview-link" class="refresh-link icon icon-refresh" href="#">' + soy.$$escapeHtml('Refresh') + '</a></li></ul><span>' + soy.$$escapeHtml('Preview') + '</span></div><div id="macro-browser-preview" class="macro-preview"></div></div><div id="macro-body-editor-container" class="macro-body-editor-container dialog-panel"><div class="macro-body-editor-header"><span>' + soy.$$escapeHtml('Content') + '</span></div><div class="macro-body-editor-wrapper"><div class="macro-body-editor-label">' + soy.$$escapeHtml('Insert text') + '</div><div class="macro-body-editor"><textarea placeholder="' + soy.$$escapeHtml('Type here') + '"></textarea></div></div></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.MacroBrowser.insertMacroPanel.soyTemplateName = 'Confluence.Templates.MacroBrowser.insertMacroPanel';
}


Confluence.Templates.MacroBrowser.missingUserMacroMetadataPanel = function(opt_data, opt_ignored) {
  return '<div id="macro-missing-metadata-container"><p>' + 'There is no metadata configured for this macro which means no configuration screen can be presented here.' + '</p>' + ((opt_data.showAdminMessage) ? '<p>' + AJS.format('If this is a user macro then you can add metadata to the template using the \x3ca href\x3d\x22{0}\x22 target\x3d\x22_blank\x22\x3eUser Macro Administration\x3c/a\x3e console.',"/wiki" + '/admin/usermacros.action') + '</p>' : '<p>' + 'You must contact an administrator to configure metadata for this macro.' + '</p>') + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.MacroBrowser.missingUserMacroMetadataPanel.soyTemplateName = 'Confluence.Templates.MacroBrowser.missingUserMacroMetadataPanel';
}


Confluence.Templates.MacroBrowser.macroParameter = function(opt_data, opt_ignored) {
  return '<div class="macro-param-div"><label></label><input type="text" class="text"/></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.MacroBrowser.macroParameter.soyTemplateName = 'Confluence.Templates.MacroBrowser.macroParameter';
}


Confluence.Templates.MacroBrowser.macroParameterBoolean = function(opt_data, opt_ignored) {
  return '<div class="checkbox macro-param-div boolean-param"><input class="checkbox" type="checkbox" value="true"/><label></label></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.MacroBrowser.macroParameterBoolean.soyTemplateName = 'Confluence.Templates.MacroBrowser.macroParameterBoolean';
}


Confluence.Templates.MacroBrowser.macroParameterSelect = function(opt_data, opt_ignored) {
  return '<div class="macro-param-div"><label></label><select class="select"></select></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.MacroBrowser.macroParameterSelect.soyTemplateName = 'Confluence.Templates.MacroBrowser.macroParameterSelect';
}


Confluence.Templates.MacroBrowser.macroParameterHidden = function(opt_data, opt_ignored) {
  return '<div class="macro-param-div"><input type="hidden"/></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.MacroBrowser.macroParameterHidden.soyTemplateName = 'Confluence.Templates.MacroBrowser.macroParameterHidden';
}


Confluence.Templates.MacroBrowser.macroParameterDesc = function(opt_data, opt_ignored) {
  return '<div class="macro-param-desc">' + soy.$$filterNoAutoescape(opt_data.description) + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.MacroBrowser.macroParameterDesc.soyTemplateName = 'Confluence.Templates.MacroBrowser.macroParameterDesc';
}


Confluence.Templates.MacroBrowser.macroBody = function(opt_data, opt_ignored) {
  return '<div class="macro-body-div"><label>' + soy.$$escapeHtml('Body text') + '</label><textarea class="monospaceInput textarea" type="text" rows="10"></textarea></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.MacroBrowser.macroBody.soyTemplateName = 'Confluence.Templates.MacroBrowser.macroBody';
}


Confluence.Templates.MacroBrowser.helpLink = function(opt_data, opt_ignored) {
  return '' + Confluence.Templates.Dialog.helpLink({href: "https://confluence.atlassian.com/display/ConfCloud/Macros"});
};
if (goog.DEBUG) {
  Confluence.Templates.MacroBrowser.helpLink.soyTemplateName = 'Confluence.Templates.MacroBrowser.helpLink';
}


Confluence.Templates.MacroBrowser.gadgetLink = function(opt_data, opt_ignored) {
  return '<a class=\'macro-uri\' href="' + soy.$$escapeHtml(opt_data.url) + '" title="' + soy.$$escapeHtml(opt_data.url) + '" target=\'_blank\'>' + soy.$$escapeHtml('Gadget URL') + '</a>';
};
if (goog.DEBUG) {
  Confluence.Templates.MacroBrowser.gadgetLink.soyTemplateName = 'Confluence.Templates.MacroBrowser.gadgetLink';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-macro-browser:macro-browser-js', location = 'js/macro-browser-facade.js' */
define("confluence-macro-browser/macro-browser-facade",["confluence-macro-browser/macro-browser","window"],function(b,c){var a=c.tinymce;return{getTinyMceMacroBrowser:function(){return a&&a.confluence&&a.confluence.macrobrowser||null},isInTinyMceEditor:function(){return a&&!!a.activeEditor},insert:function(a){if(this.isInTinyMceEditor())return this.getTinyMceMacroBrowser().macroBrowserComplete(a);b.afterComplete&&b.afterComplete(a)},cancel:function(){if(this.isInTinyMceEditor())return this.getTinyMceMacroBrowser().macroBrowserCancel();
b.cancel&&b.cancel()},getTinyMceMacroBrowserIfHave:function(){return this.isInTinyMceEditor()?this.getTinyMceMacroBrowser():null}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-macro-browser:macro-browser-js', location = 'js/macro-browser-preload.js' */
define("confluence-macro-browser/macro-browser-preload",["jquery","ajs","window"],function(a,b,c){return{macroBrowserPreload:function(){a(c).bind("render-content-loaded",function(c,d){a("#macro-preview-iframe").contents().find("body")[0]==d&&b.MacroBrowser.previewOnload(d)});b.MacroBrowser.preLoadMacro()}}});require("confluence/module-exporter").safeRequire("confluence-macro-browser/macro-browser-preload",function(a){require("ajs").toInit(a.macroBrowserPreload)});
}catch(e){WRMCB(e)};