WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.plugins.issue-status-plugin:issue-status-resources', location = 'templates/status.soy' */
// This file was automatically generated from status.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace JIRA.Template.Util.Issue.Status.
 */

if (typeof JIRA == 'undefined') { var JIRA = {}; }
if (typeof JIRA.Template == 'undefined') { JIRA.Template = {}; }
if (typeof JIRA.Template.Util == 'undefined') { JIRA.Template.Util = {}; }
if (typeof JIRA.Template.Util.Issue == 'undefined') { JIRA.Template.Util.Issue = {}; }
if (typeof JIRA.Template.Util.Issue.Status == 'undefined') { JIRA.Template.Util.Issue.Status = {}; }


JIRA.Template.Util.Issue.Status.issueStatusResolver = function(opt_data, opt_ignored) {
  return '' + ((! opt_data.issueStatus) ? '<span class="aui-icon aui-icon-small aui-iconfont-help jira-issue-status-render-error" title="' + soy.$$escapeHtml('No issue status information was provided') + '"></span>' : (opt_data.issueStatus.statusCategory) ? JIRA.Template.Util.Issue.Status.issueStatus(opt_data) : JIRA.Template.Util.Issue.Status.iconStatus({name: opt_data.issueStatus.name, iconUrl: opt_data.issueStatus.iconUrl, description: opt_data.issueStatus.description, isCompact: opt_data.isCompact}));
};
if (goog.DEBUG) {
  JIRA.Template.Util.Issue.Status.issueStatusResolver.soyTemplateName = 'JIRA.Template.Util.Issue.Status.issueStatusResolver';
}


JIRA.Template.Util.Issue.Status.iconStatus = function(opt_data, opt_ignored) {
  return '<img src="' + soy.$$escapeHtml(opt_data.iconUrl) + '" width="16" height="16" alt="' + soy.$$escapeHtml(opt_data.name) + '" title="' + soy.$$escapeHtml(opt_data.name) + ((opt_data.description) ? ' - ' + soy.$$escapeHtml(opt_data.description) : '') + '" class="jira-issue-status-icon">' + ((! opt_data.isCompact) ? ' ' + soy.$$escapeHtml(opt_data.name) : '');
};
if (goog.DEBUG) {
  JIRA.Template.Util.Issue.Status.iconStatus.soyTemplateName = 'JIRA.Template.Util.Issue.Status.iconStatus';
}


JIRA.Template.Util.Issue.Status.issueStatus = function(opt_data, opt_ignored) {
  return '' + JIRA.Template.Util.Issue.Status.statusLozenge({name: opt_data.issueStatus.name, categoryKey: opt_data.issueStatus.statusCategory.key, colorName: opt_data.issueStatus.statusCategory.colorName, description: opt_data.issueStatus.description, isSubtle: opt_data.isSubtle, isCompact: opt_data.isCompact, maxWidth: opt_data.maxWidth});
};
if (goog.DEBUG) {
  JIRA.Template.Util.Issue.Status.issueStatus.soyTemplateName = 'JIRA.Template.Util.Issue.Status.issueStatus';
}


JIRA.Template.Util.Issue.Status.statusLozenge = function(opt_data, opt_ignored) {
  var output = '';
  var maxWidth__soy46 = opt_data.maxWidth ? opt_data.maxWidth : 'medium';
  var tooltipContent__soy47 = '<span class="jira-issue-status-tooltip-title">' + soy.$$escapeHtml(opt_data.name) + '</span>' + ((opt_data.description) ? '<br><span class="jira-issue-status-tooltip-desc">' + soy.$$escapeHtml(opt_data.description) + '</span>' : '');
  output += '<span class=" jira-issue-status-lozenge aui-lozenge ' + JIRA.Template.Util.Issue.Status.statusLozengeClasses(opt_data) + ((opt_data.isSubtle && ! opt_data.isCompact) ? ' aui-lozenge-subtle' : '') + ((opt_data.isCompact) ? ' jira-issue-status-lozenge-compact' : '') + ' jira-issue-status-lozenge-max-width-' + soy.$$escapeHtml(maxWidth__soy46) + '" data-tooltip="' + soy.$$escapeHtml(tooltipContent__soy47) + '">' + soy.$$escapeHtml(opt_data.name) + '</span>';
  return output;
};
if (goog.DEBUG) {
  JIRA.Template.Util.Issue.Status.statusLozenge.soyTemplateName = 'JIRA.Template.Util.Issue.Status.statusLozenge';
}


JIRA.Template.Util.Issue.Status.statusLozengeClasses = function(opt_data, opt_ignored) {
  return 'jira-issue-status-lozenge-' + soy.$$escapeHtml(opt_data.colorName ? opt_data.colorName : 'medium-gray') + ' ' + ((opt_data.categoryKey) ? 'jira-issue-status-lozenge-' + soy.$$escapeHtml(opt_data.categoryKey) : '');
};
if (goog.DEBUG) {
  JIRA.Template.Util.Issue.Status.statusLozengeClasses.soyTemplateName = 'JIRA.Template.Util.Issue.Status.statusLozengeClasses';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.issue-status-plugin:issue-status-resources', location = '/js/issue-status-plugin.js' */
AJS.$(function(){if(AJS.$.fn.tooltip){AJS.$(".jira-issue-status-lozenge[data-tooltip]").tooltip({aria:true,gravity:AJS.$.fn.tipsy.autoWE,delayIn:100,html:true,live:true,title:"data-tooltip",className:"jira-issue-status-tooltip"})}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-metadata:confluence-jira-metadata-resources', location = 'soy/jira-metadata.soy' */
// This file was automatically generated from jira-metadata.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Metadata.JIRA.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Metadata == 'undefined') { Confluence.Templates.Metadata = {}; }
if (typeof Confluence.Templates.Metadata.JIRA == 'undefined') { Confluence.Templates.Metadata.JIRA = {}; }


Confluence.Templates.Metadata.JIRA.metadata = function(opt_data, opt_ignored) {
  var output = '<div id="jira-metadata-dialog" class="rendered-content"><h2 class="title">' + soy.$$escapeHtml('Jira links') + '</h2><div class="items-section">';
  var groupList6 = opt_data.groups;
  var groupListLen6 = groupList6.length;
  for (var groupIndex6 = 0; groupIndex6 < groupListLen6; groupIndex6++) {
    var groupData6 = groupList6[groupIndex6];
    if (groupData6.items.length) {
      switch (groupData6.type) {
        case 'ISSUES':
          output += Confluence.Templates.Metadata.JIRA.renderGroup({items: groupData6.items, headingText: 'Issues', type: groupData6.type, links: groupData6.links});
          break;
        case 'SPRINTS':
          output += Confluence.Templates.Metadata.JIRA.renderGroup({items: groupData6.items, headingText: 'Sprints', type: groupData6.type, links: groupData6.links});
          break;
        case 'VERSIONS':
          output += Confluence.Templates.Metadata.JIRA.renderGroup({items: groupData6.items, headingText: 'Versions', type: groupData6.type, links: groupData6.links});
          break;
        case 'EPICS':
          output += Confluence.Templates.Metadata.JIRA.renderGroup({items: groupData6.items, headingText: 'Epics', type: groupData6.type, links: groupData6.links});
          break;
      }
    }
  }
  output += '</div>' + Confluence.Templates.Metadata.JIRA.renderAuthPrompts({appLinks: opt_data.unauthorisedAppLinks}) + Confluence.Templates.Metadata.JIRA.renderJiraErrors(opt_data) + '</div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.JIRA.metadata.soyTemplateName = 'Confluence.Templates.Metadata.JIRA.metadata';
}


Confluence.Templates.Metadata.JIRA.featureDiscovery = function(opt_data, opt_ignored) {
  return '<div id="jira-metadata-feature-discovery"><h2>' + soy.$$escapeHtml('View related Jira items here') + '</h2><p>' + soy.$$escapeHtml('Now you can see which epics, sprints, versions and issues relate to this page.') + '</p><div class="aui-toolbar2" role="toolbar"><div class="aui-toolbar2-inner">' + aui.buttons.button({text: 'Show me', extraClasses: 'showme'}) + aui.buttons.button({text: 'Don\x27t show again', type: 'link', extraClasses: 'close'}) + '</div></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.JIRA.featureDiscovery.soyTemplateName = 'Confluence.Templates.Metadata.JIRA.featureDiscovery';
}


Confluence.Templates.Metadata.JIRA.nometadata = function(opt_data, opt_ignored) {
  return '<div id="jira-metadata-dialog" class="rendered-content">' + aui.message.warning({content: '<p>' + soy.$$escapeHtml('Jira links cannot be displayed. Either you do not have correct Jira permissions or the links have been removed.') + '</p>'}) + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.JIRA.nometadata.soyTemplateName = 'Confluence.Templates.Metadata.JIRA.nometadata';
}


Confluence.Templates.Metadata.JIRA.renderAuthPrompts = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.appLinks.length) {
    var param66 = '';
    if (opt_data.appLinks.length == 1) {
      var appLink__soy69 = opt_data.appLinks[0];
      param66 += '<p>' + soy.$$filterNoAutoescape(AJS.format('{0}Login \x26amp; Approve{1} to retrieve data from {2}','<a class="jira-metadata-auth-link" href="#" data-href="' + appLink__soy69.authorisationUrl + '">','</a>',appLink__soy69.htmlSafeName)) + '</p>';
    } else {
      param66 += '<p>' + soy.$$escapeHtml('Authenticate to retrieve data from the following instances:') + '</p>';
      var appLinkList78 = opt_data.appLinks;
      var appLinkListLen78 = appLinkList78.length;
      for (var appLinkIndex78 = 0; appLinkIndex78 < appLinkListLen78; appLinkIndex78++) {
        var appLinkData78 = appLinkList78[appLinkIndex78];
        param66 += '<div><a class="jira-metadata-auth-link" href="#" data-href="' + soy.$$escapeHtml(appLinkData78.authorisationUrl) + '">' + soy.$$escapeHtml(appLinkData78.name) + '</a></div>';
      }
    }
    output += aui.message.hint({content: param66});
  }
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.JIRA.renderAuthPrompts.soyTemplateName = 'Confluence.Templates.Metadata.JIRA.renderAuthPrompts';
}


Confluence.Templates.Metadata.JIRA.renderGroup = function(opt_data, opt_ignored) {
  var output = '<div class="jira-metadata-section ' + soy.$$escapeHtml(opt_data.type) + '-section"><div class="section-label"><span class="icon"></span><span>' + soy.$$escapeHtml(opt_data.headingText) + '</span></div><ul class="jira-metadata-list jira-' + soy.$$escapeHtml(opt_data.type) + '-list">';
  var itemList94 = opt_data.items;
  var itemListLen94 = itemList94.length;
  for (var itemIndex94 = 0; itemIndex94 < itemListLen94; itemIndex94++) {
    var itemData94 = itemList94[itemIndex94];
    output += '<li class="jira-metadata-item"><span class="item-label"><a href="' + soy.$$escapeHtml("/wiki") + '/plugins/servlet/jira-metadata/redirect?u=' + soy.$$escapeUri(itemData94.url) + '&t=' + soy.$$escapeHtml(opt_data.type) + '" title="' + soy.$$escapeHtml(itemData94.name) + '">' + soy.$$escapeHtml(itemData94.name) + '</a>' + ((itemData94.status) ? '&nbsp;' + ((itemData94.status.statusCategory) ? JIRA.Template.Util.Issue.Status.issueStatusResolver({issueStatus: itemData94.status, isSubtle: true}) : '<span class="item-status">(' + soy.$$escapeHtml(itemData94.status.name) + ')</span>') : '') + '</span>' + ((itemData94.description != '') ? '<span class="item-subtext">' + soy.$$escapeHtml(itemData94.description) + '</span>' : '') + '</li>';
  }
  output += '</ul><ul class="jira-metadata-list ' + soy.$$escapeHtml(opt_data.type) + '-more-link">';
  var linkList130 = opt_data.links;
  var linkListLen130 = linkList130.length;
  for (var linkIndex130 = 0; linkIndex130 < linkListLen130; linkIndex130++) {
    var linkData130 = linkList130[linkIndex130];
    output += '<li class="jira-metadata-item"><a href="' + soy.$$escapeHtml("/wiki") + '/plugins/servlet/jira-metadata/redirect?u=' + soy.$$escapeUri(linkData130.url) + '&t=' + soy.$$escapeHtml(opt_data.type) + '&more">' + soy.$$escapeHtml(AJS.format('View {0} more in {1}',linkData130.numItems,linkData130.appName)) + '</a></li>';
  }
  output += '</ul></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.JIRA.renderGroup.soyTemplateName = 'Confluence.Templates.Metadata.JIRA.renderGroup';
}


Confluence.Templates.Metadata.JIRA.loadingMetadata = function(opt_data, opt_ignored) {
  return '<div id="jira-metadata-dialog"><h2 class="title">' + soy.$$escapeHtml('Jira links') + '</h2><div class="spinner-container"><div class="spinner"></div></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.JIRA.loadingMetadata.soyTemplateName = 'Confluence.Templates.Metadata.JIRA.loadingMetadata';
}


Confluence.Templates.Metadata.JIRA.renderJiraErrors = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.errors.length == 1) {
    var error__soy150 = opt_data.errors[0];
    output += aui.message.warning({content: '<p>' + soy.$$escapeHtml('Unable to retrieve Jira metadata.') + ' ' + soy.$$escapeHtml(error__soy150.errorMessage) + '</p>'});
  } else if (opt_data.errors.length > 1) {
    var param159 = '<p>' + soy.$$escapeHtml('Unable to retrieve Jira metadata. The following errors occurred:') + '</p><ul>';
    var errorList163 = opt_data.errors;
    var errorListLen163 = errorList163.length;
    for (var errorIndex163 = 0; errorIndex163 < errorListLen163; errorIndex163++) {
      var errorData163 = errorList163[errorIndex163];
      param159 += '<li>' + soy.$$escapeHtml(errorData163.errorMessage) + '</li>';
    }
    param159 += '</ul>';
    output += aui.message.warning({content: param159});
  }
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.JIRA.renderJiraErrors.soyTemplateName = 'Confluence.Templates.Metadata.JIRA.renderJiraErrors';
}


Confluence.Templates.Metadata.JIRA.unknownError = function(opt_data, opt_ignored) {
  return '<div id="jira-metadata-dialog" class="rendered-content">' + aui.message.warning({content: '<p>' + soy.$$escapeHtml('Unable to retrieve Jira metadata. Could not connect to Confluence') + '</p>'}) + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.JIRA.unknownError.soyTemplateName = 'Confluence.Templates.Metadata.JIRA.unknownError';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-metadata:confluence-jira-metadata-resources', location = '/js/jira-metadata.js' */
define('confluence/jira-metadata', [
    'jquery',
    'ajs',
    'confluence/legacy',
    'skate'
], function(
    $,
    AJS,
    Confluence,
    skate
) {
    'use strict';

    var pluginKey = "com.atlassian.confluence.plugins.confluence-jira-metadata";
    var dataLoaded = false; // only load inline dialog contents once
    var dialog;
    var dialogContents;
    var dialogId = "jira-metadata-dialog";
    var discoveryDialog;
    var discoveryDialogId = "jira-metadata-discovery";
    var featureDiscoveryId = "linked-issues-dropdown";

    function enableWebItem($webItem, count, incomplete) {
        updateWebItemText($webItem, count, incomplete);
        $webItem.removeClass("hidden");

        if(shouldBindInlineDialog($webItem)) {
            dialog = AJS.InlineDialog($webItem, dialogId,
                    function(content, trigger, showPopup) {
                        AJS.trigger('analytics', {name: 'confluence.jira.metadata.expanded'});

                        if(!dialogContents || !dataLoaded) {
                            dialogContents = content;
                            showPopup();
                            updateInlineDialogContents($webItem);
                        } else {
                            showPopup();
                        }
                        return false;
                    }, { hideDelay: null });

            // Workaround to dismiss the inline dialog until https://ecosystem.atlassian.net/browse/AUI-1175 is done
            $webItem.click(function() {
                if($('#' + dialogId).is(':visible')) {
                    dialog.hide();
                }
            });
        }

        //Pop feature discovery if appropriate
        if($webItem && shouldShowFeatureDiscovery()) {
            showFeatureDiscoveryDialog($webItem);
            // Mark feature as discovered if user clicks the JIRA link button: https://jira.atlassian.com/browse/CONF-32814
            $webItem.one("click", function() {
                Confluence.FeatureDiscovery.forPlugin(pluginKey).markDiscovered(featureDiscoveryId);
            });
        }
    }

    function updateWebItemText($webItem, count, incomplete) {
        if (!incomplete) {
            var text = (count === 1)
                ? "1 Jira link"
                : AJS.format("{0} Jira links", count);
            $webItem.children('span').text(text);
        }
    }

    function shouldBindInlineDialog($webItem) {
        return !$webItem.attr('href'); // web-item might be a direct link to a single JIRA entity
    }

    // Shows the feature discovery inline dialog immediately.
    function showFeatureDiscoveryDialog($webItem) {
        discoveryDialog = AJS.InlineDialog($webItem, discoveryDialogId, function(content, trigger, showPopup) {
            content.html(Confluence.Templates.Metadata.JIRA.featureDiscovery());
            content.find(".showme").on("click", function() {
                Confluence.FeatureDiscovery.forPlugin(pluginKey).markDiscovered(featureDiscoveryId);
                discoveryDialog.hide();
                dialog.show();
            });
            content.find(".close").on("click", function() {
                Confluence.FeatureDiscovery.forPlugin(pluginKey).markDiscovered(featureDiscoveryId);
                discoveryDialog.hide();
            });
            showPopup();
        }, {
            noBind: true,
            closeOthers: false,
            hideDelay: null
        });
        discoveryDialog.show();
        Confluence.FeatureDiscovery.forPlugin(pluginKey).addDiscoveryView(featureDiscoveryId);
    }


    function shouldShowFeatureDiscovery() {
        // TODO: can get rid of this entirely once BP plugin is using feature discovery API also.
        return !AJS.Meta.get('blueprint-index-popup-key') && Confluence.FeatureDiscovery &&
                Confluence.FeatureDiscovery.forPlugin(pluginKey).shouldShow(featureDiscoveryId);
    }

    function updateInlineDialogContents($webItem) {
        lockInlineDialogHeight(); // preserve existing dialog height when we replace the contents for the 'loading' state
        dialogContents.html(Confluence.Templates.Metadata.JIRA.loadingMetadata());
        dialogContents.find(".spinner").spin("medium");

        var pageId = $webItem.attr('data-page-id') || AJS.Meta.get('page-id');

        $.ajax({
            url: AJS.contextPath() + "/rest/jira-metadata/1.0/metadata?pageId=" + pageId,
            type: "GET",
            dataType: "json",
            contentType: "application/json",
            error:function (xhr) {
                unlockInlineDialogHeight();
                dialogContents.html(Confluence.Templates.Metadata.JIRA.unknownError());
            },
            success: function (response) {
                unlockInlineDialogHeight();
                dataLoaded = true;

                updateWebItemText($webItem, response.count, false);

                var content;
                if(response.count === 0 && !(response.unauthorisedAppLinks && response.unauthorisedAppLinks.length > 0) && response.errors.length == 0) {
                    AJS.trigger('analytics', {name: 'confluence.jira.metadata.error.no-metadata'});
                    content = Confluence.Templates.Metadata.JIRA.nometadata();
                }
                else {
                    content = Confluence.Templates.Metadata.JIRA.metadata(response);
                }

                dialogContents.html(content);

                // We call this inside a setTimeout to force a re-layout, which makes the CSS animation trigger.
                setTimeout(function() {
                    dialogContents.find("#" + dialogId).addClass("show");
                }, 0);

                bindApplinkAuthLinks($webItem);
            },
            complete: function() {
                $('#' + dialogId + ' .icon-close').click(function(e) {
                    e.stopPropagation();
                    $(this).closest('.closable').remove();
                });
            }
        });
    }

    function bindApplinkAuthLinks($webItem) {
        $('.jira-metadata-auth-link').click(function(e) {
            e.preventDefault();
            window.AppLinks.authenticateRemoteCredentials(
                $(this).data('href'),
                function() {
                    updateInlineDialogContents($webItem);
                },
                function() {}
            );
        });
    }

    function lockInlineDialogHeight() {
        if (dialogContents && dialogContents.height() > 0)
            dialogContents.css('height', dialogContents.height());
    }

    function unlockInlineDialogHeight() {
        dialogContents && dialogContents.css('height', '');
    }

    return {
        init: function() {
            skate('content-metadata-jira', {
                type: skate.types.CLASS,

                attached: function(el) {
                    var $webItem = $(el);

                    var initialCount = $webItem.attr('data-jira-metadata-count') || AJS.Meta.get('jira-metadata-count');
                    initialCount = parseInt(initialCount, 10);
                    var countIncomplete = $webItem.attr('data-count-incomplete') || AJS.Meta.get('jira-metadata-count-incomplete');
                    var pageId = $webItem.attr('data-page-id') || AJS.Meta.get('page-id');

                    if(initialCount > 0) {
                        enableWebItem($webItem, initialCount, countIncomplete);
                    } else if (initialCount === -1) {
                        var url = AJS.contextPath() + '/rest/jira-metadata/1.0/metadata/aggregate?pageId=' + pageId;

                        $.ajax({
                            url: url,
                            type: 'GET',
                            dataType: 'json',
                            contentType: 'application/json',
                            cache: false,
                            success: function (response) {
                                if(response.count > 0) {
                                    enableWebItem($webItem, response.count, response.incomplete);
                                }
                            }
                        });
                    }
                }
            });
        }
    };
});

require('confluence/module-exporter').safeRequire('confluence/jira-metadata', function(ConfluenceJiraMetadata) {
    'use strict';
    ConfluenceJiraMetadata.init();
});

}catch(e){WRMCB(e)};