WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-product-extensions-v5', location = 'v5/js/confluence/main.js' */
define("ac/confluence",["ac/confluence/macro/editor","ac/confluence/macro","ac/confluence/macro/property-panel-event","ac/confluence/content-property"],function(c,a,d,b){return{saveMacro:a.saveCurrentMacro,closeMacroEditor:c.close,getMacroData:AJS.DarkFeatures.isEnabled("fabric.editor.fix-get-macro-methods")?a.getMacroData:c.getMacroData,getMacroBody:a.getMacroBody,onMacroPropertyPanelEvent:d.propertyPanelEventsBound,closeMacroPropertyPanel:a.closeCurrentMacroPropertyPanel,getContentProperty:b.getContentProperty,
setContentProperty:b.setContentProperty,syncPropertyFromServer:b.syncPropertyFromServer}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-product-extensions-v5', location = 'v5/js/confluence/custom-content.js' */
define("ac/customContent",["ac/confluence/custom-content-api"],function(a){return{getEditComponent:{constructor:a.EditComponent,intercept:a.EditComponent.prototype.intercept,submitCallback:a.EditComponent.prototype.submitCallback,submitErrorCallback:a.EditComponent.prototype.submitErrorCallback,submitSuccessCallback:a.EditComponent.prototype.submitSuccessCallback,cancelCallback:a.EditComponent.prototype.cancelCallback}}});
}catch(e){WRMCB(e)};