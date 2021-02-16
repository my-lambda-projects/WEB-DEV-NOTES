WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-content:confluence-jira-content-loader', location = 'com/atlassian/confluence/plugins/createjiracontent/js/page-helper.js' */
define('confluence/cjc/page-helper', [
    'jquery',
    'ajs',
    'skate',
    'confluence/legacy',
    'wrm/require'
], function(
    $,
    AJS,
    skate,
    Confluence,
    wrmRequire
) {
    'use strict';

    var PLUGIN_KEY = "com.atlassian.confluence.plugins.confluence-jira-content:create-JIRA-issue-summary";
    var WEB_RESOURCE_KEY = "wr!com.atlassian.confluence.plugins.confluence-jira-content:confluence-jira-content-resources";
    var LOADING_TEXT = "Loading\u2026";
    var loaded = false;

    // define global namespace for this plugin.
    // If we convert all files to AMD, we can get rid of global namespace.
    Confluence.CreateJiraContent = {
        Dialogs: {}
    };

    /**
     * In order to reduce page size of view page, we clone `appendDialogTarget` method of `confluence/cjc/common/jira-issues-helper`.
     * @param targetDimensions
     * @param $target
     */
    var appendDialogTarget = function(targetDimensions, $target) {
        $('body').append($target);

        $target.css({
            top: targetDimensions.top,
            height: targetDimensions.height,
            left: targetDimensions.left,
            width: targetDimensions.width,
            'z-index': -9999,
            position: 'absolute'
        }).addClass('confluence-jira-content-dialog-target');
    };

    function onCreateJiraIssueSummary(e) {
        onClick(e.detail);
    }

    function onClick(selectionObject) {
        var $target;

        // If the resources aren't already loaded, show a loading dialog
        if (!loaded) {
            var displayFn = function(content, trigger, showPopup) {
                content.html('<span class="aui-icon aui-icon-wait"></span> ' + LOADING_TEXT);
                showPopup();
                return false;
            };

            $target = $("<div>");
            appendDialogTarget(selectionObject.area.average, $target);

            var dialog = Confluence.ScrollingInlineDialog($target, 'create-issue-loading-dialog', displayFn, {});
            dialog.show();

            loaded = true;
        }

        // CONFDEV-34854
        // Pull in web resources and fire up the dialog once they're loaded
        wrmRequire(WEB_RESOURCE_KEY)
            .done(function () {
                if (Confluence.CreateJiraContent.FeatureDiscovery.shouldShowFeatureDiscovery()) {
                    Confluence.CreateJiraContent.Dialogs.showFeatureDiscoveryDialog(selectionObject);
                } else {
                    Confluence.CreateJiraContent.Dialogs.showCreateIssueDialog(selectionObject);
                }

                if (typeof $target !== "undefined") {
                    $target.remove();
                }
            });
    }

    return {
        /**
         * Initializing for Created JIRA Issues notification.
         */
        initCreatedIssuesNotification: function() {
            skate('jira-issues-created', {
                type: skate.types.CLASS,

                events: {
                    'click #jira-content-message-panel-view-more-link': function(el, e, currentTarget) {
                        // disable clicks on the watch button before we have a chance to handle it properly
                        e.preventDefault();
                        // hide view more link
                        $(currentTarget).hide();
                        // show content message
                        $(el).find('#jira-content-message-panel-error-warning').show();
                    }
                },

                attached: function(el) {
                    var $msgPanel = $(el);

                    //Trying to remove get parameters
                    if (window.history && window.history.replaceState) {
                        var currentPageHref = window.location.href;
                        var originalPageHref = currentPageHref.substr(0, currentPageHref.indexOf('JIRAIssuesCreated') - 1);
                        window.history.replaceState({}, document.title, originalPageHref);
                    }

                    // Hide the success message panel after 10 seconds. Otherwise let user manually dismiss it.
                    if ($msgPanel.hasClass('success')) {
                        setTimeout(function() { $msgPanel.hide(); }, 10000);
                    }
                }
            });
        },

        /**
         * Initializing for Creating Jira Issues by registering Confluence.HighlightAction from confluence-highlight-actions plugin.
         */
        init: function() {
            // register creating JIRA issues with Confluence Highlight Actions
            var ConfHighlightAction = Confluence.HighlightAction;
            if (!ConfHighlightAction) {
                // check if plugin Confluence-highlight-action is enabled
                AJS.error('confluence-jira-content plugin needs dependency confluence-highlight-actions plugin to initialize.');
                return;
            }

            ConfHighlightAction.registerButtonHandler(PLUGIN_KEY, {
                onClick: onClick,
                shouldDisplay: Confluence.HighlightAction.WORKING_AREA.MAINCONTENT_ONLY // this plugin should be only works on Main Content
            });


            window.removeEventListener("create-jira-issue-summary", onCreateJiraIssueSummary);
            window.addEventListener("create-jira-issue-summary", onCreateJiraIssueSummary);
        }
    };
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-content:confluence-jira-content-loader', location = 'com/atlassian/confluence/plugins/createjiracontent/js/page-helper-init.js' */
require(['confluence/cjc/page-helper'], function(pageHelper) {
    pageHelper.init();
    pageHelper.initCreatedIssuesNotification();
});
}catch(e){WRMCB(e)};