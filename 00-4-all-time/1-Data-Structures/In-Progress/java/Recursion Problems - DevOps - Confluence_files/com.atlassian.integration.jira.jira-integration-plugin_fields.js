WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.integration.jira.jira-integration-plugin:fields', location = '/fields/fields.soy' */
// This file was automatically generated from fields.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace jiraIntegration.templates.fields.
 */

if (typeof jiraIntegration == 'undefined') { var jiraIntegration = {}; }
if (typeof jiraIntegration.templates == 'undefined') { jiraIntegration.templates = {}; }
if (typeof jiraIntegration.templates.fields == 'undefined') { jiraIntegration.templates.fields = {}; }


jiraIntegration.templates.fields.stringField = function(opt_data, opt_ignored) {
  return '' + aui.form.textField({labelContent: '' + soy.$$escapeHtml(opt_data.labelText), id: opt_data.name, name: opt_data.name, value: opt_data.value, isRequired: opt_data.isRequired, extraClasses: 'jira-field' + (opt_data.extraClasses ? ' ' + opt_data.extraClasses : ''), extraAttributes: {'data-jira-type': opt_data.jiraType}, errorTexts: opt_data.errorTexts});
};
if (goog.DEBUG) {
  jiraIntegration.templates.fields.stringField.soyTemplateName = 'jiraIntegration.templates.fields.stringField';
}


jiraIntegration.templates.fields.textareaField = function(opt_data, opt_ignored) {
  var output = '<div class="field-group jira-field' + ((opt_data.extraClasses) ? ' ' + soy.$$escapeHtml(opt_data.extraClasses) : '') + '" data-jira-type="' + soy.$$escapeHtml(opt_data.jiraType) + '"><label for="' + soy.$$escapeHtml(opt_data.name) + '">' + soy.$$escapeHtml(opt_data.labelText) + ((opt_data.isRequired) ? '<span class="aui-icon icon-required"></span>' : '') + '</label><textarea rows="10" id="' + soy.$$escapeHtml(opt_data.name) + '" name="' + soy.$$escapeHtml(opt_data.name) + '" class="textarea long-field">' + soy.$$escapeHtml(opt_data.value) + '</textarea>';
  if (opt_data.errorTexts) {
    var errorList37 = opt_data.errorTexts;
    var errorListLen37 = errorList37.length;
    for (var errorIndex37 = 0; errorIndex37 < errorListLen37; errorIndex37++) {
      var errorData37 = errorList37[errorIndex37];
      output += '<div class="error">' + soy.$$escapeHtml(errorData37) + '</div>';
    }
  }
  output += '</div>';
  return output;
};
if (goog.DEBUG) {
  jiraIntegration.templates.fields.textareaField.soyTemplateName = 'jiraIntegration.templates.fields.textareaField';
}


jiraIntegration.templates.fields.arrayField = function(opt_data, opt_ignored) {
  return '' + aui.form.textField({id: opt_data.name, name: opt_data.name, labelContent: '' + soy.$$escapeHtml(opt_data.labelText), value: opt_data.value, isRequired: opt_data.isRequired, extraClasses: 'jira-field' + (opt_data.extraClasses ? ' ' + opt_data.extraClasses : ''), extraAttributes: {'data-jira-type': opt_data.jiraType}, errorTexts: opt_data.errorTexts});
};
if (goog.DEBUG) {
  jiraIntegration.templates.fields.arrayField.soyTemplateName = 'jiraIntegration.templates.fields.arrayField';
}


jiraIntegration.templates.fields.numberField = function(opt_data, opt_ignored) {
  return '' + aui.form.textField({id: opt_data.name, name: opt_data.name, labelContent: '' + soy.$$escapeHtml(opt_data.labelText), value: opt_data.value, isRequired: opt_data.isRequired, extraClasses: 'jira-field' + (opt_data.extraClasses ? ' ' + opt_data.extraClasses : ''), extraAttributes: {'data-jira-type': opt_data.jiraType}, errorTexts: opt_data.errorTexts});
};
if (goog.DEBUG) {
  jiraIntegration.templates.fields.numberField.soyTemplateName = 'jiraIntegration.templates.fields.numberField';
}


jiraIntegration.templates.fields.allowedValuesField = function(opt_data, opt_ignored) {
  return '' + ((opt_data.options.length) ? aui.form.selectField({id: opt_data.name, name: opt_data.name, labelContent: '' + soy.$$escapeHtml(opt_data.labelText), options: opt_data.options, isRequired: opt_data.isRequired, isMultiple: opt_data.isMultiple, extraClasses: 'jira-field' + (opt_data.extraClasses ? ' ' + opt_data.extraClasses : ''), extraAttributes: {'data-jira-type': opt_data.jiraType}, errorTexts: opt_data.errorTexts}) : aui.form.valueField({id: opt_data.name, name: opt_data.name, labelContent: '' + soy.$$escapeHtml(opt_data.labelText), value: 'None', isRequired: opt_data.isRequired, extraClasses: 'jira-field' + (opt_data.extraClasses ? ' ' + opt_data.extraClasses : ''), extraAttributes: {'data-jira-type': opt_data.jiraType}, errorTexts: opt_data.errorTexts}));
};
if (goog.DEBUG) {
  jiraIntegration.templates.fields.allowedValuesField.soyTemplateName = 'jiraIntegration.templates.fields.allowedValuesField';
}


jiraIntegration.templates.fields.timeTrackingField = function(opt_data, opt_ignored) {
  return '' + aui.form.textField({id: opt_data.name, name: opt_data.name, labelContent: '' + soy.$$escapeHtml(opt_data.labelText), value: opt_data.value, isRequired: opt_data.isRequired, extraClasses: 'jira-field' + (opt_data.extraClasses ? ' ' + opt_data.extraClasses : ''), extraAttributes: {'data-jira-type': opt_data.jiraType}, errorTexts: opt_data.errorTexts});
};
if (goog.DEBUG) {
  jiraIntegration.templates.fields.timeTrackingField.soyTemplateName = 'jiraIntegration.templates.fields.timeTrackingField';
}


jiraIntegration.templates.fields.unrenderableTypeField = function(opt_data, opt_ignored) {
  var output = '<div class="field-group jira-field jira-field-unrenderable' + ((opt_data.extraClasses) ? ' ' + soy.$$escapeHtml(opt_data.extraClasses) : '') + '"><label>' + soy.$$escapeHtml(opt_data.labelText) + ((opt_data.isRequired) ? '<span class="aui-icon icon-required"></span>' : '') + '</label>' + aui.form.value({content: opt_data.reasonContent});
  if (opt_data.errorTexts) {
    var errorList117 = opt_data.errorTexts;
    var errorListLen117 = errorList117.length;
    for (var errorIndex117 = 0; errorIndex117 < errorListLen117; errorIndex117++) {
      var errorData117 = errorList117[errorIndex117];
      output += '<div class="error">' + soy.$$escapeHtml(errorData117) + '</div>';
    }
  }
  output += '</div>';
  return output;
};
if (goog.DEBUG) {
  jiraIntegration.templates.fields.unrenderableTypeField.soyTemplateName = 'jiraIntegration.templates.fields.unrenderableTypeField';
}


jiraIntegration.templates.fields.dateField = function(opt_data, opt_ignored) {
  return '' + aui.form.textField({labelContent: '' + soy.$$escapeHtml(opt_data.labelText), id: opt_data.name, name: opt_data.name, value: opt_data.value, isRequired: opt_data.isRequired, extraClasses: 'jira-field' + (opt_data.extraClasses ? ' ' + opt_data.extraClasses : ''), extraAttributes: {'data-jira-type': opt_data.jiraType}, errorTexts: opt_data.errorTexts});
};
if (goog.DEBUG) {
  jiraIntegration.templates.fields.dateField.soyTemplateName = 'jiraIntegration.templates.fields.dateField';
}


jiraIntegration.templates.fields.select2WithIconField = function(opt_data, opt_ignored) {
  var output = '<div class="field-group jira-field' + ((opt_data.extraClasses) ? ' ' + soy.$$escapeHtml(opt_data.extraClasses) : '') + '" data-jira-type="' + soy.$$escapeHtml(opt_data.jiraType) + '"><label for="' + soy.$$escapeHtml(opt_data.name) + '">' + soy.$$escapeHtml(opt_data.labelText) + ((opt_data.isRequired) ? '<span class="aui-icon icon-required"></span>' : '') + '</label><select id="' + soy.$$escapeHtml(opt_data.name) + '" name="' + soy.$$escapeHtml(opt_data.name) + '">';
  var optionList154 = opt_data.options;
  var optionListLen154 = optionList154.length;
  for (var optionIndex154 = 0; optionIndex154 < optionListLen154; optionIndex154++) {
    var optionData154 = optionList154[optionIndex154];
    output += '<option value="' + soy.$$escapeHtml(optionData154.value) + '" ' + ((optionData154.selected) ? 'selected' : '') + 'data-icon-url="' + soy.$$escapeHtml(optionData154.iconUrl) + '">' + soy.$$escapeHtml(optionData154.text) + '</option>';
  }
  output += '</select>';
  if (opt_data.errorTexts) {
    var errorList170 = opt_data.errorTexts;
    var errorListLen170 = errorList170.length;
    for (var errorIndex170 = 0; errorIndex170 < errorListLen170; errorIndex170++) {
      var errorData170 = errorList170[errorIndex170];
      output += '<div class="error">' + soy.$$escapeHtml(errorData170) + '</div>';
    }
  }
  output += '</div>';
  return output;
};
if (goog.DEBUG) {
  jiraIntegration.templates.fields.select2WithIconField.soyTemplateName = 'jiraIntegration.templates.fields.select2WithIconField';
}


jiraIntegration.templates.fields.select2WithIconOption = function(opt_data, opt_ignored) {
  return ((opt_data.iconUrl) ? aui.avatar.avatar({avatarImageUrl: opt_data.iconUrl, size: 'xsmall', isProject: opt_data.isProject, extraClasses: 'select-option-image', tagName: 'span'}) : '') + '<span class="select-option" title="' + soy.$$escapeHtml(opt_data.optionValue) + '">' + soy.$$escapeHtml(opt_data.optionValue) + '</span>';
};
if (goog.DEBUG) {
  jiraIntegration.templates.fields.select2WithIconOption.soyTemplateName = 'jiraIntegration.templates.fields.select2WithIconOption';
}


jiraIntegration.templates.fields.labelFieldResult = function(opt_data, opt_ignored) {
  return '' + ((opt_data.label.isNew) ? soy.$$escapeHtml(AJS.format('\x22{0}\x22 - (New label)',opt_data.label.labelName)) : soy.$$escapeHtml(opt_data.label.labelName));
};
if (goog.DEBUG) {
  jiraIntegration.templates.fields.labelFieldResult.soyTemplateName = 'jiraIntegration.templates.fields.labelFieldResult';
}


jiraIntegration.templates.fields.userOptionSelect = function(opt_data, opt_ignored) {
  var output = '';
  var userOption__soy197 = soy.$$escapeHtml(opt_data.displayName) + ' - (' + soy.$$escapeHtml(opt_data.name) + ')';
  output += '<span title="' + soy.$$filterNoAutoescape(userOption__soy197) + '">' + soy.$$filterNoAutoescape(userOption__soy197) + '</span>';
  return output;
};
if (goog.DEBUG) {
  jiraIntegration.templates.fields.userOptionSelect.soyTemplateName = 'jiraIntegration.templates.fields.userOptionSelect';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.integration.jira.jira-integration-plugin:fields', location = '/fields/fields.js' */
var jiraIntegration=window.jiraIntegration||{};
jiraIntegration.fields=function(i,e){function l(a,b,d,c){b=a.name;a.value=(i.isPlainObject(c[b])?c[b].name:c[b])||d&&d.fields[b]||"";return a}function r(a){return a.val()}function s(a,b,d,c){b=a.name;a.value=c[b]&&c[b].join(",")||d&&d.fields[b]&&d.fields[b].join(",");return a}function t(a){return e.map(a.val().split(","),i.trim)}function u(a,b,d,c){var g=a.name,c=c[g],d=d&&d.fields[g],f;f=c?i.isArray(c)?e.pluck(c,"name"):[c.name]:d?i.isArray(d)?e.pluck(d,"name"):[d.name]:[];a.options=e.map(b.allowedValues,
function(a){return{value:a.id,text:a.name||a.value,selected:e.contains(f,a.name||a.id)}});a.isMultiple=e.contains(b.operations,"add");return a}function n(a,b){var d=b.val(),c=function(b){var c={};c[a]=b;return c};return b.attr("multiple")?i.isArray(d)?e.map(d,c):[c(d)]:c(d)}function v(a,b,d,c){a=i.extend({restType:b,issueKey:c&&c.key||"",term:d},a);return i.ajax({type:"POST",timeout:0,contentType:"application/json",dataType:"json",url:AJS.contextPath()+"/rest/jira-integration/latest/fields/autocomplete",
data:JSON.stringify(a)})}function w(a){var b;a.id&&(b=i(a.element).attr("data-icon-url"));return jiraIntegration.templates.fields.select2WithIconOption({optionValue:a.text,iconUrl:b})}function o(a){return a.schema?a.schema.system||a.schema.custom||a.schema.customId:a}function p(a){return j[o(a)]}function x(a){return a.closest(".jira-field").attr("data-jira-type")}var k={template:jiraIntegration.templates.fields.stringField,getContext:l,getValue:r},y={template:jiraIntegration.templates.fields.stringField,
getContext:function(a,b,d,c){b=a.name;a.value=c[b]&&c[b].name||d&&d.fields[b]&&d.fields[b].name||"";return a},getValue:function(a){return{name:a.val()}},behavior:function(a,b,d,c){var g=a.find("input"),f=a.attr("name");g.removeClass("text");g.auiSelect2(i.extend({minimumInputLength:1,id:f,name:f,query:function(a){v(b,d,a.term,c).done(function(b){a.callback({results:b})})}},{formatInputTooShort:function(){return "Find users..."},formatResult:function(a){return jiraIntegration.templates.fields.userOptionSelect({name:a.id,
displayName:a.text})}}));a.find("div.aui-select2-container").addClass("jira-select2-drop-box")}},C={template:jiraIntegration.templates.fields.arrayField,getContext:s,getValue:t,behavior:function(a,b,d,c){a=a.find("input");jiraIntegration.fields._labelPicker.build(a,function(a){return v(b,d,a,c)})}},q={template:jiraIntegration.templates.fields.textareaField,getContext:l,getValue:r},D={template:jiraIntegration.templates.fields.numberField,getContext:l,getValue:function(a){a=a.val();return/\d/.test(a)&&
/^-?\d*\.?\d*$/.test(a)?Number(a):a||null}},z={template:jiraIntegration.templates.fields.arrayField,getContext:s,getValue:t},h={template:jiraIntegration.templates.fields.allowedValuesField,getContext:u,getValue:e.bind(n,null,"id"),behavior:function(a){a.find("select[multiple]").auiSelect2()}},A={template:jiraIntegration.templates.fields.allowedValuesField,getContext:u,getValue:e.bind(n,null,"id")},E={template:jiraIntegration.templates.fields.timeTrackingField,getContext:function(a,b,d,c){b=a.name;
a.value=c[b]&&c[b].remainingEstimate||d&&d.fields[b]&&d.fields[b].remainingEstimate||"";return a},getValue:function(a){return{remainingEstimate:a.val()}}},B={template:jiraIntegration.templates.fields.dateField,getContext:l,getValue:function(a){a=a.val();return""===a?null:a},behavior:function(a){var b=a.find("input");navigator.userAgent.match(/Trident/)&&"5.3.5">AJS.version?(a="placeholder"in document.createElement("input"),b.attr("placeholder","YYYY-MM-DD"),a||b.on("focus",function(){b.val()===b.attr("placeholder")&&
b.val("")}).on("blur",function(){""===b.val()&&b.val(b.attr("placeholder"))}).blur()):b.datePicker({overrideBrowserDefault:!0})}},F={template:jiraIntegration.templates.fields.select2WithIconField,getContext:function(a,b,d,c){var g=a.name,f=c[g]&&c[g].name||d&&d.fields&&d.fields[g]&&d.fields[g].name||"";a.options=e.map(b.allowedValues,function(a){return{value:a.id,text:a.name,selected:f===a.name,iconUrl:a.iconUrl}});return a},getValue:e.bind(n,null,"id"),behavior:function(a){i.fn.auiSelect2?(a=a.find("select"),
a.addClass("jira-select2-drop-box"),a.auiSelect2({hasAvatar:!0,minimumResultsForSearch:-1,formatSelection:w,formatResult:w})):AJS.log("AUI version 5.2 or greater is required as this plugin needs the .auiSelect2() jQuery plugin.")}},j={"com.pyxis.greenhopper.jira:gh-epic-label":k,string:k,summary:k,"com.atlassian.jira.plugin.system.customfieldtypes:textfield":k,"com.atlassian.jira.plugin.system.customfieldtypes:url":k,environment:q,"com.atlassian.jira.plugin.system.customfieldtypes:textarea":q,description:q,
"com.atlassian.jira.plugin.system.customfieldtypes:float":D,array:z,labels:C,"com.atlassian.jira.plugin.system.customfieldtypes:labels":z,resolution:h,fixVersions:h,priority:F,versions:h,components:h,security:h,"com.atlassian.jira.plugin.system.customfieldtypes:version":h,"com.atlassian.jira.plugin.system.customfieldtypes:multiversion":h,"com.atlassian.jira.plugin.system.customfieldtypes:project":h,assignee:y,reporter:y,timetracking:E,duedate:B,"com.atlassian.jira.plugin.system.customfieldtypes:datepicker":B,
"com.atlassian.jira.plugin.system.customfieldtypes:multiselect":A,"com.atlassian.jira.plugin.system.customfieldtypes:select":A},G={ignoreFieldsWithDefaultValue:!1};return{addFieldHandler:function(a,b){e.has(j,a)&&(console&&console.warn)&&console.warn("Redefining handler for type "+a+".");j[a]=b},getFieldHandler:p,canRender:function(a){var b=o(a),b=j[b];return!b?!1:a.operations&&a.operations.length&&(!b.canRender||b.canRender(a))},renderField:function(a,b,d,c){var g=b.schema.system||b.schema.custom||
b.schema.customId,f=j[g],e=b.schema.system||"customfield_"+b.schema.customId,c={labelText:b.name,name:e,isRequired:b.required,errorTexts:(c||{})[e],jiraType:g},g=!f||f.canRender&&!f.canRender(b),e=!b.operations||!b.operations.length;if(g||e){c.reasonContent=g?AJS.format("{0}Edit{1} this field in JIRA",'<a href="'+(a?a.url:"#")+'">',"</a>"):e?AJS.format("{0}Edit{1} this field in JIRA",'<a href="'+(a?a.url:"#")+'">',"</a>"):null;if(!c.reasonContent)throw Error("Invalid unrenderable reason.");return jiraIntegration.templates.fields.unrenderableTypeField(c)}return f.template(f.getContext(c,
b,a,d||{}))},getJSON:function(a){var b;return(b=(b=x(a))&&p(b))&&b.getValue&&b.getValue(a)},attachFieldBehaviors:function(a,b,d){a.find(".jira-field").each(function(a,e){var f=i(e),h=x(f),m=h&&p(h);(m=m&&m.behavior)&&m(f,b,h,d)})},renderCreateRequiredFields:function(a,b,d,c,g){function f(b){c.ignoreFieldsWithDefaultValue&&(b=e.filter(b,function(a){return!a.hasDefaultValue}));var f=e.filter(b,function(a){return!jiraIntegration.fields.canRender(a)});f.length?g&&g(f):(a.html(e.map(b,function(a){return jiraIntegration.fields.renderField(null,
a,null,null)}).join("")),jiraIntegration.fields.attachFieldBehaviors(a,{serverId:d.serverId,projectKey:d.projectKey},null))}c=e.extend({},G,c);if(c.requiredFields)f(c.requiredFields);else{var b=d,h=c;i.ajax({type:"GET",timeout:0,url:AJS.contextPath()+"/rest/jira-integration/1.0/servers/"+b.serverId+"/projects/"+b.projectKey+"/issue-types/"+b.issueType+"/fields-meta"}).pipe(function(a){var b=[];e.each(a.fields,function(a){var c=o(a);a.required&&!e.contains(h.excludedFields,c)&&b.push(a)});return b}).done(f)}}}}(AJS.$,
window._);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.integration.jira.jira-integration-plugin:fields', location = '/fields/label-picker.js' */
var jiraIntegration=window.jiraIntegration||{};jiraIntegration.fields=jiraIntegration.fields||{};jiraIntegration.fields._labelPicker=function(){return{build:function(b,c){b.auiSelect2({tags:!0,multiple:!0,tokenSeparators:[","," "],createSearchChoice:function(a){return!a?null:{id:a,text:a,isNew:!0}},query:function(a){c(a.term).done(function(b){a.callback({results:b})})},formatResult:function(a){return jiraIntegration.templates.fields.labelFieldResult({label:{labelName:a.text,isNew:a.isNew}})}})}}}(AJS.$);
}catch(e){WRMCB(e)};