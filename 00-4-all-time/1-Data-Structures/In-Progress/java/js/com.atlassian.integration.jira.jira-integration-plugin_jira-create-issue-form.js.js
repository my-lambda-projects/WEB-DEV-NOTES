WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.integration.jira.jira-integration-plugin:jira-create-issue-form', location = '/jira-create-issue-form/jira-create-issue-form.js' */
var jiraIntegration=window.jiraIntegration||{};
jiraIntegration.JiraCreateIssueForm=function(c,f){function e(a){this.configuration=f.extend({},e.defaults,a);this.configuration.renderSummaryAndDescription&&this.configuration.excludedField.push("summary","description");this._init()}e.defaults={formClass:"jira-interation-create-issue-form",ignoreFieldsWithDefaultValue:!0,excludedField:["project","issuetype","reporter"],renderSummaryAndDescription:!1,get$unsupportedFieldMessage:function(a,b){return c(jiraIntegration.templates.jiraCreateIssueForm.unsupportedFieldsMessage({unsupportedFields:a,createIssueUrl:b}))},
get$unexpectedError:function(a){return c(aui.message.error({content:AJS.escapeHtml(a)}))},get$unauthorizeMessage:function(a){return c(jiraIntegration.templates.jiraCreateIssueForm.authorize({extraClasses:"jira-oauth-dialog",applicationName:a}))},get$unsupportedServerMessage:function(a){return c(jiraIntegration.templates.jiraCreateIssueForm.unsupportedServerMessage({serverUrl:a}))}};e.prototype._trigger=function(a,b){var d=this.configuration[a];d&&d.apply(this,Array.prototype.slice.call(arguments,
1))};e.prototype._bindEventListener=function(){var a=this;this.defaultFields.server.on("change",function(){a.resetForm();var b=this.value;(a.currentServerId=b)?(a.formIsLoading(a.defaultFields.server),jiraIntegration.JiraCreateIssueForm.Data.isIssueCreationSupported(b).done(function(d){d?(a._loadProjectData(b),a.formLoadingCompleted(a.defaultFields.server)):(d=jiraIntegration.JiraCreateIssueForm.Data.getServerById(b).displayUrl,a._handleUnsupportedServer(d))}).fail(function(d){a._handleAjaxError(d)})):
(jiraIntegration.JiraCreateIssueForm.FieldHelper.resetSelectField(a.defaultFields.project),a.defaultFields.project.trigger("change"));a._trigger("onServerChanged",this.value)});this.defaultFields.project.on("change",function(){this.value?(c('option[value=""]',a.defaultFields.project).remove(),a._loadIssueType(a.defaultFields.server.val(),this.value)):jiraIntegration.JiraCreateIssueForm.FieldHelper.resetSelectField(a.defaultFields.issueType);a.resetForm();a.defaultFields.issueType.trigger("change");
a._trigger("onProjectChanged",this.value)});this.defaultFields.issueType.on("change",function(){a.resetForm();this.value?a._loadRequireFields():(a.$containerRequireField&&a.$containerRequireField.html(""),c(".aui-message",this.formEl).remove());a._trigger("onTypeChanged",this.value)})};e.prototype._init=function(){this.container=c(this.configuration.container);if(this.container.length)this._renderForm(),this._bindEventListener(),this._loadServerData();else throw Error("container property should be defined.");
};e.prototype._renderForm=function(){this.formEl=c(jiraIntegration.templates.jiraCreateIssueForm.form({formClass:this.configuration.formClass}));this.configuration.renderSummaryAndDescription&&this._renderSummaryAndDescription();this.container.append(this.formEl);this.defaultFields=this._getDefaultFields();f.each(this.defaultFields,f.bind(function(a){this.createSelect2WithIcon(c(a))},this));this.$containerRequireField=c(".create-issue-required-fields",this.container);this._trigger("onFormRendered")};
e.prototype._renderSummaryAndDescription=function(){var a=c(".create-issue-default-fields",this.formEl);a.append(aui.form.textField({labelContent:"Summary",isRequired:!0,name:"summary"}));a.append(aui.form.textareaField({labelContent:"Description",name:"description"}))};e.prototype._getDefaultFields=function(){var a=c("."+this.configuration.formClass,this.configuration.container);return{server:c(".server-select",
a),project:c(".project-select",a),issueType:c(".issuetype-select",a)}};e.prototype._loadServerData=function(){var a=this;this.formIsLoading(this.defaultFields.server);c.when(jiraIntegration.JiraCreateIssueForm.Data.loadServers()).then(function(b){a.formLoadingCompleted(a.defaultFields.server);a._loadServerDataComplete(b)})};e.prototype._loadRequireFields=function(){var a=this,b={serverId:this.defaultFields.server.val(),projectKey:this.defaultFields.project.val(),issueType:this.defaultFields.issueType.val()};
this.formIsLoading(this.defaultFields.issueType);jiraIntegration.JiraCreateIssueForm.Data.getFieldMetadata(b).done(function(d){var c=a._getValidRequiredFields(d);a.configuration.renderSummaryAndDescription&&(d=d.fields.description,a._setDescriptionAsRequiredField(!(!d||!d.required)));a._renderRequireFields(c,b);a.formLoadingCompleted(a.defaultFields.issueType)}).fail(f.bind(a._handleAjaxError,this))};e.prototype._loadServerDataComplete=function(a){a.length?(1===a.length&&jiraIntegration.JiraCreateIssueForm.FieldHelper.hideField(this.defaultFields.server),
jiraIntegration.JiraCreateIssueForm.FieldHelper.fillSelectData(this.defaultFields.server,a,!0),this._loadProjectData(a[0].id),this.currentServerId=a[0].id,this._hasMultiServer=1<a.length):this._handlerUnexpectedError("Don\'t have any JIRA server, please check the application link configuration.")};e.prototype._loadProjectData=function(a){var b=this;this.formIsLoading(this.defaultFields.project);jiraIntegration.JiraCreateIssueForm.Data.loadProjects(a).then(function(a){a.errors&&a.errors.length?(a=a.errors[0],a.authenticationUri?
b._handleAuthorizeError(a):b._handlerUnexpectedError(a.message)):a.length?(jiraIntegration.JiraCreateIssueForm.FieldHelper.fillSelectData(b.defaultFields.project,a),jiraIntegration.JiraCreateIssueForm.FieldHelper.resetSelectField(b.defaultFields.issueType)):b._handlerUnexpectedError("You do not have permission to create issues on this JIRA server.");b.formLoadingCompleted(b.defaultFields.project)},f.bind(b._handleAjaxError,this))};e.prototype._loadIssueType=function(a,b){var d=jiraIntegration.JiraCreateIssueForm.Data.getIssueTypes(a,
b);jiraIntegration.JiraCreateIssueForm.FieldHelper.fillSelectData(this.defaultFields.issueType,d,!0)};e.prototype._renderRequireFields=function(a,b){this.$containerRequireField.html("");var d=f.reject(a,jiraIntegration.fields.canRender);d.length?this._handleUnsupportedFields(d):(this.$containerRequireField.html(f.map(a,function(a){return jiraIntegration.fields.renderField(null,a,null,null)}).join("")),jiraIntegration.fields.attachFieldBehaviors(this.$containerRequireField,{serverId:b.serverId,projectKey:b.projectKey},
null),this._trigger("onRequiredFieldsRendered",a,d))};e.prototype._handlerUnexpectedError=function(a){a=this.configuration.get$unexpectedError(a);c(".aui-message",this.formEl).remove();this.formEl.prepend(a);this.formLoadingCompleted();this.formHasError()};e.prototype._handleUnsupportedFields=function(a){a=f.map(a,function(a){return AJS.escapeHtml(a.name)});a=this.configuration.get$unsupportedFieldMessage(a,this._getCreateJiraIssueUrl());c(".aui-message",this.formEl).remove();this.formEl.prepend(a);
this._trigger("onError");this.formLoadingCompleted()};e.prototype._handleUnsupportedServer=function(a){a=this.configuration.get$unsupportedServerMessage(a);c(".aui-message",this.formEl).remove();this.formEl.prepend(a);this.formLoadingCompleted();this.formHasError()};e.prototype._handleAjaxError=function(a){500<=a.status&&600>a.status&&this._handlerUnexpectedError("Received the following HTTP error code from the server"+":"+a.status);this.formHasError()};e.prototype._handleAuthorizeError=function(a){var b=
this;this.formHasError();var d=this.configuration.get$unauthorizeMessage(a.applicationName);this.formEl.append(d);c(".oauth-init",d).on("click",function(d){AppLinks.authenticateRemoteCredentials(a.authenticationUri,function(){b.resetForm();b._loadProjectData(b.currentServerId)},function(){b._handlerUnexpectedError(AJS.format("You have refused to permit access to {0}.",a.applicationName))});d.preventDefault()})};e.prototype._getCreateJiraIssueUrl=function(){var a=this.defaultFields.project.find("option:selected").val(),
b=this.defaultFields.issueType.find("option:selected").val(),d=jiraIntegration.JiraCreateIssueForm.Data.getServerById(this.currentServerId).displayUrl,d=d+"/secure/CreateIssueDetails!Init.jspa?pid="+a+"&issuetype="+b,a=this._getFieldValue("summary");a.length&&(d=d+"&summary="+encodeURIComponent(a));a=this._getFieldValue("description");a.length&&(d=d+"&description="+encodeURIComponent(a));return d};e.prototype._getValidRequiredFields=function(a){var b=this;return f.filter(a.fields,function(a){var c=
f.contains(b.configuration.excludedField,a.schema?a.schema.system||a.schema.custom||a.schema.customId:a);return a.required&&!c&&!a.hasDefaultValue})};e.prototype._getFieldValue=function(a){return(a=c("[name='"+a+"']",this.formEl))?c.trim(a.val()):""};e.prototype._setDescriptionAsRequiredField=function(a){var b=c('.field-group [name="description"]',this.formEl).prev("label");b.find(".aui-icon.aui-icon-required").remove();a&&b.append(aui.icons.icon({icon:"required"}))};e.prototype.resetForm=function(){c(".aui-message",
this.formEl).remove();c(".field-group",this.formEl).show();this.configuration.renderSummaryAndDescription&&this._setDescriptionAsRequiredField(!1);this._hasMultiServer||jiraIntegration.JiraCreateIssueForm.FieldHelper.hideField(this.defaultFields.server);this.$containerRequireField.html("")};e.prototype.formHasError=function(){c(".field-group",this.formEl).hide();this.$containerRequireField.html("");jiraIntegration.JiraCreateIssueForm.FieldHelper.showField(this.defaultFields.server);jiraIntegration.JiraCreateIssueForm.FieldHelper.setFieldDisabled(c(".insert-issue-button"),
!0);this._trigger("onError");this.formLoadingCompleted()};e.prototype.getCurrentServer=function(){return jiraIntegration.JiraCreateIssueForm.Data.getServerById(this.currentServerId)};e.prototype.formIsLoading=function(a){a&&jiraIntegration.JiraCreateIssueForm.FieldHelper.setIsLoading(a,!0);a=c(":input",c(this.formEl));jiraIntegration.JiraCreateIssueForm.FieldHelper.setFieldDisabled(a,!0)};e.prototype.formLoadingCompleted=function(a){a?jiraIntegration.JiraCreateIssueForm.FieldHelper.setIsLoading(a,
!1):c(".aui-icon.aui-icon-wait",this.formEl).remove();a=c(":input",c(this.formEl));jiraIntegration.JiraCreateIssueForm.FieldHelper.setFieldDisabled(a,!1)};e.prototype.createSelect2WithIcon=function(a){if(a.is(".server-select"))a.auiSelect2({minimumResultsForSearch:-1});else{var b=a.is(".project-select")?{formatSelection:this.projectSelectFormat,formatResult:this.projectSelectFormat,extraAttributes:this.defaultFields}:{formatSelection:this.issueTypeSelectFormat,formatResult:this.issueTypeSelectFormat,
minimumResultsForSearch:-1,extraAttributes:this.defaultFields};a.auiSelect2(b)}a.auiSelect2("val","")};e.prototype.projectSelectFormat=function(a){var b=this.extraAttributes.server.find("option:selected").val(),b=jiraIntegration.JiraCreateIssueForm.Data.getProjectIconUrl(b,a.id);return jiraIntegration.templates.fields.select2WithIconOption({optionValue:a.text,iconUrl:b,isProject:!0})};e.prototype.issueTypeSelectFormat=function(a){var b=this.extraAttributes.server.find("option:selected").val(),c=this.extraAttributes.project.find("option:selected").val(),
b=jiraIntegration.JiraCreateIssueForm.Data.getIssueTypeIconUrl(b,c,a.id);return jiraIntegration.templates.fields.select2WithIconOption({optionValue:a.text,iconUrl:b,isProject:!1})};return e}(AJS.$,window._);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.integration.jira.jira-integration-plugin:jira-create-issue-form', location = '/jira-create-issue-form/jira-create-issue-form-data.js' */
var jiraIntegration=window.jiraIntegration||{};jiraIntegration.JiraCreateIssueForm=jiraIntegration.JiraCreateIssueForm||{};
jiraIntegration.JiraCreateIssueForm.Data=function(e){function i(a){return b&&b[a]?b[a].projects:[]}function f(a,c,d){return a+(c?"-"+c:"")+(d?"-"+d:"")}var b={},g={},k=AJS.contextPath()+"/plugins/servlet/jira-integration/icons?serverId={0}&iconType={1}&{2}",h=[],j=function(a,c){return e.ajax({dataType:"json",timeout:0,url:a,success:c})};return{loadServers:function(){return j(AJS.contextPath()+"/rest/jira-integration/1.0/servers",function(a){a.length&&e.each(a,function(a,d){b[d.id]=d})})},loadProjects:function(a){var c=
b[a]?b[a].projects:void 0;return c?e.Deferred().resolve(c):j(AJS.contextPath()+"/rest/jira-integration/1.0/servers/"+a+"/projects",function(c){c.length&&(e.each(c,function(c,b){var d=_.filter(b.issuetypes,function(a){return!a.subtask});b.issueTypes=d;var e=[];_.each(d,function(a){e[a.id]=a.iconUrl});d={iconUrl:AJS.format(k,a,"project",b.avatarUrls["16x16"].split("/secure/projectavatar?")[1]),issueTypes:e};h[f(a,b.id)]=d}),b[a]||(b[a]={}),b[a].projects=c)})},getIssueTypes:function(a,c){var b=_.find(i(a),
function(a){return a.id===c});return b?b.issueTypes:[]},getFieldMetadata:function(a){var c=f(a.serverId,a.projectKey,a.issueType);return _.has(g,c)?e.Deferred().resolve(g[c]):e.ajax({type:"GET",timeout:0,url:AJS.contextPath()+"/rest/jira-integration/1.0/servers/"+a.serverId+"/projects/"+a.projectKey+"/issue-types/"+a.issueType+"/fields-meta"}).pipe(function(a){g[c]=a;return g[c]})},getServerById:function(a){return b?b[a]:{}},getProjectIconUrl:function(a,c){var b=f(a,c);return h[b]?h[b].iconUrl:""},
getIssueTypeIconUrl:function(a,b,d){a=f(a,b);return(a=h[a])&&a.issueTypes[d]?a.issueTypes[d]:""},getProjects:i,isIssueCreationSupported:function(a){return!b||!b[a]?!1:void 0!==b[a].isSupported?e.Deferred().resolve(b[a].issueCreationSupported):e.ajax({type:"GET",timeout:0,url:AJS.contextPath()+"/rest/jira-integration/1.0/servers/"+a+"/features"}).pipe(function(c){if(c!==void 0)b[a].issueCreationSupported=_.contains(c,"CREATE_ISSUE");return b[a].issueCreationSupported})}}}(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.integration.jira.jira-integration-plugin:jira-create-issue-form', location = '/jira-create-issue-form/jira-create-issue-form-field-helper.js' */
var jiraIntegration=window.jiraIntegration||{};jiraIntegration.JiraCreateIssueForm=jiraIntegration.JiraCreateIssueForm||{};
jiraIntegration.JiraCreateIssueForm.FieldHelper=function(g){function d(a){a=a.attr("data-placeholder");return aui.form.optionOrOptgroup({value:"",text:a,iconUrl:""})}return{fillSelectData:function(a,b,e){var f=e?[]:[d(a)];g.each(b,function(a,c){var b={value:c.id,text:c.name,iconUrl:c.iconUrl?c.iconUrl:c.avatarUrls?c.avatarUrls["16x16"]:""};e&&0===a&&(b.selected=!0);f.push(aui.form.optionOrOptgroup(b))});a.html(f.join(""));a.auiSelect2("val","")},resetSelectField:function(a){a.html(d(a));a.auiSelect2("val",
"")},hideField:function(a){a.parent().hide()},showField:function(a){a.parent().show()},setFieldDisabled:function(a,b){b?a.disable():a.enable()},setIsLoading:function(a,b){return b?a.after(aui.icons.icon({icon:"wait"})):a.next(".aui-icon.aui-icon-wait").remove()}}}(AJS.$,window._);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.integration.jira.jira-integration-plugin:jira-create-issue-form', location = '/jira-create-issue-form/jira-create-issue-form.soy' */
// This file was automatically generated from jira-create-issue-form.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace jiraIntegration.templates.jiraCreateIssueForm.
 */

if (typeof jiraIntegration == 'undefined') { var jiraIntegration = {}; }
if (typeof jiraIntegration.templates == 'undefined') { jiraIntegration.templates = {}; }
if (typeof jiraIntegration.templates.jiraCreateIssueForm == 'undefined') { jiraIntegration.templates.jiraCreateIssueForm = {}; }


jiraIntegration.templates.jiraCreateIssueForm.form = function(opt_data, opt_ignored) {
  return '' + aui.form.form({id: 'jira-create-form', extraClasses: opt_data.formClass, method: 'post', action: '#', content: '<fieldset class="create-issue-default-fields"><div class="field-group"><label>' + soy.$$escapeHtml('Server') + '<span class="aui-icon icon-required"> required</span></label><select class="jira-select2-drop-box server-select" name="server" data-placeholder="' + soy.$$escapeHtml('Select a server') + '"><option disabled selected value="">' + soy.$$escapeHtml('Select a server') + '</option></select></div><div class="field-group"><label>' + soy.$$escapeHtml('Project') + '<span class="aui-icon icon-required"> required</span></label><select class="jira-select2-drop-box project-select" name="project" data-placeholder="' + soy.$$escapeHtml('Select a project') + '"><option disabled selected value="">' + soy.$$escapeHtml('Select a project') + '</option></select></div><div class="field-group"><label>' + soy.$$escapeHtml('Issue Type') + '<span class="aui-icon icon-required"> required</span></label><select class="jira-select2-drop-box issuetype-select" name="issue-type" data-placeholder="' + soy.$$escapeHtml('Select an issue type') + '"><option disabled selected value="">' + soy.$$escapeHtml('Select an issue type') + '</option></select></div></fieldset><fieldset class="create-issue-required-fields"></fieldset>'});
};
if (goog.DEBUG) {
  jiraIntegration.templates.jiraCreateIssueForm.form.soyTemplateName = 'jiraIntegration.templates.jiraCreateIssueForm.form';
}


jiraIntegration.templates.jiraCreateIssueForm.unsupportedFieldsMessage = function(opt_data, opt_ignored) {
  var param29 = '';
  if (opt_data.unsupportedFields.length == 1) {
    var field__soy32 = '<strong>' + soy.$$escapeHtml(opt_data.unsupportedFields) + '</strong>';
    param29 += soy.$$filterNoAutoescape(AJS.format('The required field {0} is not available in this form. You will need to',field__soy32));
  } else {
    var fieldList__soy39 = '' + jiraIntegration.templates.jiraCreateIssueForm.buildFieldList({fields: opt_data.unsupportedFields});
    param29 += soy.$$filterNoAutoescape(AJS.format('The required fields {0} are not available in this form. You will need to',fieldList__soy39));
  }
  param29 += ' <a href="' + soy.$$escapeHtml(opt_data.createIssueUrl) + '" target="_blank">' + soy.$$escapeHtml('create your issue directly in JIRA') + '</a>.';
  var output = '' + aui.message.warning({content: param29});
  return output;
};
if (goog.DEBUG) {
  jiraIntegration.templates.jiraCreateIssueForm.unsupportedFieldsMessage.soyTemplateName = 'jiraIntegration.templates.jiraCreateIssueForm.unsupportedFieldsMessage';
}


jiraIntegration.templates.jiraCreateIssueForm.buildFieldList = function(opt_data, opt_ignored) {
  var output = '';
  var joinText__soy51 = '' + ((opt_data.fields.length == 2) ? ' ' + soy.$$escapeHtml('and') + ' ' : ', ');
  var fieldList59 = opt_data.fields;
  var fieldListLen59 = fieldList59.length;
  for (var fieldIndex59 = 0; fieldIndex59 < fieldListLen59; fieldIndex59++) {
    var fieldData59 = fieldList59[fieldIndex59];
    output += ((! (fieldIndex59 == 0)) ? soy.$$escapeHtml(joinText__soy51) : '') + '<strong>' + soy.$$escapeHtml(fieldData59) + '</strong>';
  }
  return output;
};
if (goog.DEBUG) {
  jiraIntegration.templates.jiraCreateIssueForm.buildFieldList.soyTemplateName = 'jiraIntegration.templates.jiraCreateIssueForm.buildFieldList';
}


jiraIntegration.templates.jiraCreateIssueForm.authorize = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '';
  var applicationNameEscaped__soy68 = '' + soy.$$escapeHtml(opt_data.applicationName);
  output += aui.message.info({content: '' + soy.$$filterNoAutoescape(AJS.format('{0}Log in and approve{1} to retrieve data from {2}','<a class="oauth-init" href="#">','</a>',applicationNameEscaped__soy68))});
  return output;
};
if (goog.DEBUG) {
  jiraIntegration.templates.jiraCreateIssueForm.authorize.soyTemplateName = 'jiraIntegration.templates.jiraCreateIssueForm.authorize';
}


jiraIntegration.templates.jiraCreateIssueForm.unsupportedServerMessage = function(opt_data, opt_ignored) {
  return '' + aui.message.warning({content: '' + soy.$$filterNoAutoescape(AJS.format('The version of selected JIRA server is not supported. You may want to upgrade to at least version 5.x or {0}create issue in JIRA{1}.','<a href="' + opt_data.serverUrl + '" target="_blank">','</a>'))});
};
if (goog.DEBUG) {
  jiraIntegration.templates.jiraCreateIssueForm.unsupportedServerMessage.soyTemplateName = 'jiraIntegration.templates.jiraCreateIssueForm.unsupportedServerMessage';
}

}catch(e){WRMCB(e)};