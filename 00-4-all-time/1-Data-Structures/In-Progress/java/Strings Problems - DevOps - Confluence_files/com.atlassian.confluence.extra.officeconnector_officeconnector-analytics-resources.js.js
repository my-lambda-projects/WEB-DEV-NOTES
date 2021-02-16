WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.extra.officeconnector:officeconnector-analytics-resources', location = 'analytics/office-connector-analytics.js' */
AJS.toInit(function ($) {
    Confluence.OfficeConnector = Confluence.OfficeConnector || {};

    Confluence.OfficeConnector.Analytics = (function ($, _) {
        function triggerEvent(name, data) {
            AJS.trigger('analytics', {name: name, data: data});
        }

        function importWord(data) {
            triggerEvent('confluence.office.connector.word.import.submit', data);

        }

        function editOfficeDocument(data){
            triggerEvent('confluence.office.connector.editofficedocument',data);
        }

        function viewMacros(progId){
            triggerEvent('confluence.office.connector.view', {progId : progId});
        }

        return {
            importWord: importWord,
            editOfficeDocument: editOfficeDocument,
            viewMacros: viewMacros
        }

    })(AJS.$, window._);
});

}catch(e){WRMCB(e)};