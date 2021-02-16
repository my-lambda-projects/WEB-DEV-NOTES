WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.extra.jira:text-placeholders-jira', location = '/jira/placeholder.js' */
(function(){AJS.bind("init.rte",function(){AJS.bind("editor.text-placeholder.activated",function(b,a){if(a&&a.placeholderType==="jira"){AJS.Editor.JiraConnector.open(AJS.Editor.JiraConnector.source.instructionalText)}});if(AJS.Rte.Placeholder&&AJS.Rte.Placeholder.addPlaceholderType){AJS.Rte.Placeholder.addPlaceholderType({type:"jira",label:"JIRA Macro",tooltip:"Instructional text is replaced with a JIRA Macro on click.",activation:{click:true,keypress:false}})}})})(AJS.$);
}catch(e){WRMCB(e)};