WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:editor-resources', location = 'com/atlassian/confluence/plugins/createcontent/js/move-hidden-fields-hack.js' */
AJS.toInit(function(a){a("fieldset.create-content-template-fields > input").appendTo("form.editor")});
}catch(e){WRMCB(e)};