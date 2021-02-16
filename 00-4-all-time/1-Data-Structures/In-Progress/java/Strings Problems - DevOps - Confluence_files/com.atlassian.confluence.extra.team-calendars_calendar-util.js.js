WRMCB = function (e) {
  var c = console;
  if (c && c.log && c.error) {
    c.log("Error running batched script.");
    c.error(e);
  }
};
try {
  /* module-key = 'com.atlassian.confluence.extra.team-calendars:calendar-util', location = 'com/atlassian/confluence/extra/calendar3/components/calendar-util/calendar-util-component.js' */
  define("tc/calendar-util", [
    "jquery",
    "ajs",
    "tc-backbone",
    "tc/templates",
  ], function ($, AJS, Backbone, Templates) {
    function removeDuplicatedErrorMessages(infoMessagesList) {
      var uniqueMessageItems = {};
      $("li", infoMessagesList).each(function () {
        var item = $(this).text();
        if (uniqueMessageItems[item]) {
          $(this).remove();
        } else {
          uniqueMessageItems[item] = true;
        }
      });
    }
    var calendarUtils = {
      panelEditCalendar: {
        GENERAL_PANEL: 0,
        EVENT_TYPE_PANEL: 1,
        RESTRICTION_PANEL: 2,
        SHARE_EMBEDDED_PANEL: 3,
        SUBSCRIBE_PANEL: 4,
      },
      ajaxTimeout: 120000,
      isCalendarSearchDisabled: $("#team-calendars-search-disabled").length,
      hasJiraLink: $("#team-calendars-has-jira-link").length,
      getParameter: function (calendarDiv, configKey) {
        return this.getParameters(calendarDiv)[configKey];
      },
      getParameters: function (calendarDiv) {
        if (!calendarDiv.data("parameters")) {
          var parameters = {};
          $("fieldset.parameters input", calendarDiv).each(function () {
            if (parameters[this.name]) {
              if ($.isArray(parameters[this.name])) {
                parameters[this.name].push(this.value);
              } else {
                parameters[this.name] = [parameters[this.name], this.value];
              }
            } else {
              parameters[this.name] = this.value;
            }
          });
          calendarDiv.data("parameters", parameters);
        }
        return calendarDiv.data("parameters");
      },
      setParameter: function (calendarDiv, configKey, value) {
        calendarDiv.removeData("parameters");
        var paramsFieldset = $("fieldset.parameters", calendarDiv);
        $("input[name='" + configKey + "']", paramsFieldset).remove();
        if ($.isArray(value)) {
          $.each(value, function (idx, aValue) {
            $("<input type='hidden'/>")
              .attr("name", configKey)
              .val(aValue)
              .appendTo(paramsFieldset);
          });
        } else {
          $("<input type='hidden'/>")
            .attr("name", configKey)
            .val(value)
            .appendTo(paramsFieldset);
        }
      },
      getSortedSubCalendarsByTypeAndName: function (subCalendars) {
        if (!subCalendars) {
          return [];
        }
        var subCalendarsByTypes = {};
        $.each(subCalendars, function (subCalendarIdx, subCalendar) {
          var subCalendarType =
              subCalendar.subscriptionType || subCalendar.type,
            subCalendarsOfType;
          if (!subCalendarsByTypes[subCalendarType]) {
            subCalendarsOfType = [];
            subCalendarsByTypes[subCalendarType] = subCalendarsOfType;
          } else {
            subCalendarsOfType = subCalendarsByTypes[subCalendarType];
          }
          subCalendarsOfType.push(subCalendar);
        });
        $.each(
          subCalendarsByTypes,
          function (subCalendarType, subCalendarsOfType) {
            subCalendarsOfType.sort(function (
              leftSubCalendar,
              rightSubCalendar
            ) {
              var leftName = (leftSubCalendar.name || "").toLowerCase(),
                rightName = (rightSubCalendar.name || "").toLowerCase();
              return leftName > rightName ? -1 : rightName > leftName ? 1 : 0;
            });
          }
        );
        var sortedSubCalendars = [];
        $.each(
          $.grep(
            (function () {
              var theOrder = [];
              $.each(
                Confluence.TeamCalendars.subcalendar,
                function (handleType, handler) {
                  theOrder.push(handleType);
                }
              );
              theOrder.sort(function (leftType, rightType) {
                return (
                  Confluence.TeamCalendars.subcalendar[leftType].weight -
                  Confluence.TeamCalendars.subcalendar[rightType].weight
                );
              });
              return theOrder;
            })(),
            function (subCalendarType) {
              return subCalendarsByTypes[subCalendarType];
            }
          ),
          function (typeIdx, subCalendarType) {
            $.each(
              subCalendarsByTypes[subCalendarType],
              function (subCalendarIdx, subCalendar) {
                sortedSubCalendars.push(subCalendar);
              }
            );
          }
        );
        $.each(sortedSubCalendars, function (subCalendarIdx, subCalendar) {
          if (
            $.isArray(subCalendar.childSubCalendars) &&
            subCalendar.childSubCalendars.length
          ) {
            subCalendar.childSubCalendars.sort(function (
              leftChild,
              rightChild
            ) {
              var leftChildWeight =
                  window.Confluence.TeamCalendars.subcalendar[
                    leftChild.subscriptionType || leftChild.type
                  ].weight,
                rightChildWeight =
                  window.Confluence.TeamCalendars.subcalendar[
                    rightChild.subscriptionType || rightChild.type
                  ].weight;
              return leftChildWeight < rightChildWeight
                ? -1
                : leftChildWeight > rightChildWeight
                ? 1
                : 0;
            });
          }
        });
        return sortedSubCalendars;
      },
      getAsArray: function () {
        var theArray = [];
        $.each(arguments, function (argIdx, argument) {
          if ($.isArray(argument)) {
            $.each(argument, function (argIdx, argElem) {
              if (typeof argElem === "string") {
                theArray.push(argElem);
              } else {
                if (
                  $.isPlainObject(argElem) &&
                  argElem.id &&
                  typeof argElem.id === "string"
                ) {
                  theArray.push(argElem.id);
                } else {
                  theArray.push(argElem.toString());
                }
              }
            });
          } else {
            theArray.push(argument.toString());
          }
        });
        return theArray;
      },
      populateTimeZoneDropDown: function (
        timeZoneSelect,
        timeZoneToSelect,
        onSuccess,
        onError
      ) {
        var spinner = $(".spinner", timeZoneSelect.parent());
        spinner.removeClass("hidden");
        $.ajax({
          type: "GET",
          timeout: this.ajaxTimeout,
          url: this.getRestBaseUrl() + "/timezones/calendar",
          success: function (timeZones) {
            timeZoneSelect
              .html(Templates.timeZoneDropDown(timeZones))
              .val(timeZoneToSelect);
            spinner.addClass("hidden");
            onSuccess();
          },
          error: function (XMLHttpRequest, textStatus, errorThrown) {
            spinner.addClass("hidden");
            onError(XMLHttpRequest, textStatus, errorThrown);
          },
        });
      },
      getRestBaseUrl: function () {
        return Confluence.getContextPath() + "/rest/calendar-services/1.0";
      },
      getCalendarServiceBaseUrl: function (relativePath) {
        return this.getRestBaseUrl() + "/calendar" + relativePath;
      },
      mergeSubCalendarObjectsToArray: function (arrayWithSubCalendarObject) {
        var that = this;
        if (
          arrayWithSubCalendarObject &&
          $.isArray(arrayWithSubCalendarObject)
        ) {
          var mergeSubCalendarIntoContainingObject = function (
            objectContainingSubCalendar
          ) {
            $.extend(
              objectContainingSubCalendar,
              objectContainingSubCalendar.subCalendar
            );
            delete objectContainingSubCalendar.subCalendar;
          };
          $.each(arrayWithSubCalendarObject, function (idx, arrayElement) {
            mergeSubCalendarIntoContainingObject(arrayElement);
            $.each(
              arrayElement.childSubCalendars || [],
              function (childIdx, objectContainingChildSubCalendar) {
                mergeSubCalendarIntoContainingObject(
                  objectContainingChildSubCalendar
                );
              }
            );
          });
        }
        var rearrangeSubCalendars = function (subCalendars) {
          if (!(subCalendars && subCalendars.length)) {
            return;
          }
          var subscriptionsParent = {
              name: "Subscriptions",
              type: "subscription",
              dummy: true,
              id: "dummy",
            },
            subscriptionChildSubCalendars = [],
            rearrangedSubCalendars = [];
          $.each(subCalendars, function (idx, subCalendar) {
            if (that.isSubscriptionSubCalendar(subCalendar)) {
              subscriptionChildSubCalendars.push(subCalendar);
            } else {
              rearrangedSubCalendars.push(subCalendar);
            }
          });
          if (subscriptionChildSubCalendars.length) {
            subscriptionsParent.childSubCalendars = subscriptionChildSubCalendars;
            rearrangedSubCalendars.push(subscriptionsParent);
          }
          subCalendars.length = 0;
          $.merge(subCalendars, rearrangedSubCalendars);
        };
        rearrangeSubCalendars(arrayWithSubCalendarObject);
        return arrayWithSubCalendarObject;
      },
      isRequireOauth: function (XMLHttpRequest) {
        var authHeader =
          XMLHttpRequest.getResponseHeader("WWW-Authenticate") || "";
        var realmRegEx = /OAuth realm\=\"([^\"]+)\"/;
        var matches = realmRegEx.exec(authHeader);
        if (matches) {
          return matches[1];
        } else {
          return null;
        }
      },
      setFieldErrors: function (container, fieldErrors) {
        $("div.error", container).empty();
        if (!fieldErrors) {
          return;
        }
        var _fieldErrors = $.isArray(fieldErrors) ? fieldErrors : [fieldErrors];
        if ($.isArray(fieldErrors)) {
          for (
            var fieldErrorIndex = 0;
            fieldErrorIndex < _fieldErrors.length;
            ++fieldErrorIndex
          ) {
            var fieldName = _fieldErrors[fieldErrorIndex].field;
            var _errorMessages = $.isArray(
              _fieldErrors[fieldErrorIndex].errorMessages
            )
              ? _fieldErrors[fieldErrorIndex].errorMessages
              : [_fieldErrors[fieldErrorIndex].errorMessages];
            if (fieldName && _errorMessages) {
              var errorDiv = $("div." + fieldName + "-error");
              for (
                var errorMsgIndex = 0;
                errorMsgIndex < _errorMessages.length;
                ++errorMsgIndex
              ) {
                $(document.createElement("div"))
                  .html(_errorMessages[errorMsgIndex])
                  .appendTo(errorDiv);
              }
            }
          }
        }
      },
      showHTMLGenericError: function (
        container,
        message,
        errorClass,
        subcalendar
      ) {
        var isError =
          message[0] === "html-error-type" || message[0] === "error-jql-wrong";
        var infoHTMLPanel =
          isError === true
            ? $(".calendar-error", container)
            : $(".calendar-warning", container);
        var _infoHTMLClass = errorClass || "general";
        var infoMessagesList =
          isError === true
            ? $("ul.error-messages", infoHTMLPanel)
            : $("ul.warning-messages", infoHTMLPanel);
        var infoMessageItem = $("li." + errorClass, infoMessagesList);
        if (!infoMessageItem.length) {
          infoMessageItem = $(document.createElement("li"))
            .addClass(_infoHTMLClass)
            .appendTo(infoMessagesList);
        }
        if (message[0] === "error-jql-wrong") {
          infoMessageItem.text(message[1]);
          if (subcalendar && subcalendar.eventsEditable) {
            infoMessageItem.data("jiraCalendarId", subcalendar.id);
            infoMessageItem.append(
              'Try \u003ca href="#" id="calendar-change-jql"\u003echanging the query.\u003c/a\u003e'
            );
          }
        } else {
          infoMessageItem.html(message[1]);
        }
        removeDuplicatedErrorMessages(infoMessagesList);
        if (infoMessagesList.children().length) {
          infoMessagesList.removeClass("hidden");
          infoHTMLPanel.removeClass("hidden");
        } else {
          infoMessagesList.addClass("hidden");
          infoHTMLPanel.addClass("hidden");
        }
      },
      setGenericErrors: function (container, message, errorClass) {
        var errorPanel = $(".calendar-error", container);
        var _errorClass = errorClass || "general";
        var errorMessagesList = $("ul.error-messages", errorPanel);
        var errorMessageItem = $("li." + errorClass, errorMessagesList);
        if (message) {
          if (!errorMessageItem.length) {
            errorMessageItem = $(document.createElement("li"))
              .addClass(_errorClass)
              .appendTo(errorMessagesList);
          }
          if ($.isArray(message)) {
            if (message.length > 1) {
              var subMessagesList = $(document.createElement("ul"));
              $.each(message, function (index, value) {
                $(document.createElement("li"))
                  .text(value)
                  .appendTo(subMessagesList);
              });
              subMessagesList.appendTo(errorMessageItem);
            } else {
              errorMessageItem.text(message[0]);
            }
          } else {
            if ($.isPlainObject(message)) {
              var theMessage = message.message || "";
              if (message["status-code"]) {
                errorMessageItem.text(
                  message["status-code"] + " - " + theMessage
                );
              } else {
                errorMessageItem.text(theMessage);
              }
            } else {
              errorMessageItem.text(message);
            }
          }
          removeDuplicatedErrorMessages(errorMessagesList);
          if (
            message.length > 1 &&
            $("ul", errorMessageItem).children().length === 0
          ) {
            errorMessageItem.remove();
          }
        } else {
          errorMessageItem.remove();
        }
        if (errorMessagesList.children().length) {
          errorMessagesList.removeClass("hidden");
          errorPanel.removeClass("hidden");
        } else {
          errorMessagesList.addClass("hidden");
          errorPanel.addClass("hidden");
        }
      },
      showAjaxError: function (
        container,
        XMLHttpRequest,
        textStatus,
        errorThrown,
        errorClass,
        subCalendar
      ) {
        var messageResponse = eval("(" + XMLHttpRequest.responseText + ")");
        if (
          "application/json" ===
            XMLHttpRequest.getResponseHeader("Content-Type") &&
          $.isArray(messageResponse) &&
          messageResponse.length === 2 &&
          (messageResponse[0] === "warning-type" ||
            messageResponse[0] === "html-error-type" ||
            messageResponse[0] === "error-jql-wrong")
        ) {
          this.showHTMLGenericError(
            container,
            messageResponse,
            errorClass,
            subCalendar
          );
        } else {
          this.setGenericErrors(
            container,
            "application/json" ===
              XMLHttpRequest.getResponseHeader("Content-Type")
              ? messageResponse
              : errorThrown ||
                  textStatus ||
                  XMLHttpRequest.responseText ||
                  "Uh oh. Looks like something unexpectedly went wrong. Please check the Confluence log file.",
            errorClass
          );
        }
      },
      getUserTimeZone: function () {
        return (
          $("input[name='userTimeZoneId']").val() ||
          $("#team-calendars-user-timezone").attr("content")
        );
      },
      shouldShowTimezoneSetup: function () {
        var hasMessageKey =
          !$("#team-calendars-timezone-setup-dialog").length &&
          $("#team-calendars-show-timezone-setup").length;
        if (AJS.Meta.get("space-key")) {
          var isSpaceCalendarPage = $(
            ".plugin-calendar-container.spaceCalendars"
          ).length;
          return hasMessageKey && isSpaceCalendarPage;
        }
        return hasMessageKey;
      },
      suppressMessage: function (errorContainer, messageKey, successCallback) {
        var that = this;
        $.ajax({
          cache: false,
          data: { messageKey: messageKey },
          error: function (XMLHttpRequest, textStatus, errorThrown) {
            that.showAjaxError(
              errorContainer,
              XMLHttpRequest,
              textStatus,
              errorThrown,
              "error-config-update"
            );
          },
          success: function () {
            that.setGenericErrors(errorContainer, null, "error-config-update");
            if (successCallback && $.isFunction(successCallback)) {
              successCallback();
            }
          },
          type: "DELETE",
          url: this.getCalendarServiceBaseUrl("/preferences/messagekey.json"),
        });
      },
      fireEventForAnalytics: function (eventName, properties) {
        AJS.EventQueue = AJS.EventQueue || [];
        AJS.EventQueue.push({
          name: "teamcalendars." + eventName,
          properties: properties || {},
        });
      },
      isJiraSubCalendar: function (subCalendar) {
        return (
          subCalendar.type === "jira" ||
          subCalendar.subscriptionType === "jira" ||
          subCalendar.type === "jira-agile-sprint" ||
          subCalendar.subscriptionType === "jira-agile-sprint" ||
          subCalendar.type === "jira-project-releases" ||
          subCalendar.subscriptionType === "jira-project-releases"
        );
      },
      isSubscriptionSubCalendar: function (subCalendar) {
        return (
          subCalendar.type === "subscription" ||
          subCalendar.subscriptionType === "subscription"
        );
      },
      isInternalSubscriptionSubCalendar: function (subCalendar) {
        return subCalendar.type === "internal-subscription";
      },
      isDummySubscriptionParentSubCalendar: function (subCalendar) {
        return subCalendar.dummy && this.isSubscriptionSubCalendar(subCalendar);
      },
      hasRestriction: function (subCalendar) {
        return (
          subCalendar.usersPermittedToView.length > 0 ||
          subCalendar.usersPermittedToEdit.length > 0 ||
          subCalendar.groupsPermittedToView.length > 0 ||
          subCalendar.groupsPermittedToEdit.length > 0
        );
      },
      updateDateDisplay: function (calendarDiv, displayHtml) {
        $(".date-display", calendarDiv).html(displayHtml || "");
      },
      showCalendarPopupHaveAnEmptySubcalendar: function (
        showPopularDialog,
        showCalendarDialog
      ) {
        $.ajax({
          dataType: "json",
          success: function (responseEntity) {
            if (responseEntity) {
              showPopularDialog();
            } else {
              showCalendarDialog();
            }
          },
          type: "GET",
          timeout: this.ajaxTimeout,
          url: this.getCalendarServiceBaseUrl("/haspopular.json"),
        });
      },
      disableButton: function (elButton, label) {
        elButton
          .text(label)
          .attr("disabled", "disabled")
          .addClass("ui-state-disabled");
      },
      enableButton: function (elButton, label) {
        elButton
          .text(label)
          .removeAttr("disabled")
          .removeClass("ui-state-disabled");
      },
      isJiraEventStream: function (type) {
        return (
          type === "jira-calendar" ||
          type === "jira-agile-sprint-calendar" ||
          type === "jira-project-releases-calendar"
        );
      },
      isCustomEventType: function (type) {
        return (
          !this.isJiraEventStream(type) &&
          !this.isJiraType(type) &&
          !this.isEventTypeSanbox(type)
        );
      },
      isEventTypeSanbox: function (type) {
        return (
          type === "other" ||
          type === "leaves" ||
          type === "birthdays" ||
          type === "travel"
        );
      },
      isJiraEvent: function (event) {
        var type = event.eventType;
        return this.isJiraType(type);
      },
      isJiraType: function (type) {
        return (
          type === "jira" ||
          type === "jira-agile-sprint" ||
          type === "jira-project-releases"
        );
      },
      showInforReminder: function (periodInMins) {
        var inforReminder = null,
          intPeriodInMins = periodInMins !== "" ? parseInt(periodInMins) : 0;
        if (intPeriodInMins === 0) {
          inforReminder = "None";
        } else {
          if (intPeriodInMins < 60) {
            inforReminder = AJS.format("{0} minutes", intPeriodInMins);
          } else {
            var periodInHours = Math.floor(intPeriodInMins / 60);
            if (periodInHours < 24) {
              inforReminder = AJS.format(
                periodInHours === 1 ? "{0} hour" : "{0} hours",
                periodInHours
              );
            } else {
              var periodInDays = Math.floor(periodInHours / 24);
              if (periodInDays < 7) {
                inforReminder = AJS.format(
                  periodInDays === 1 ? "{0} day" : "{0} days",
                  periodInDays
                );
              } else {
                var periodInWeek = Math.floor(periodInDays / 7);
                inforReminder = AJS.format(
                  periodInWeek === 1 ? "{0} week" : "{0} weeks",
                  periodInWeek
                );
              }
            }
          }
        }
        return inforReminder;
      },
      getPeriodReminderEventTypeSanboxOrJira: function (
        subCalendar,
        eventType
      ) {
        var sanboxEventTypeReminders = subCalendar.sanboxEventTypeReminders;
        if (
          sanboxEventTypeReminders != undefined &&
          sanboxEventTypeReminders.length > 0
        ) {
          if (this.isJiraType(eventType)) {
            eventType += "-calendar";
          }
          for (var item in sanboxEventTypeReminders) {
            if (eventType === sanboxEventTypeReminders[item].eventTypeId) {
              return sanboxEventTypeReminders[item].periodInMins;
            }
          }
        }
      },
      getCalendarContext: function (calendarDiv) {
        var context;
        if (calendarDiv) {
          context = this.getParameter(calendarDiv, "calendarContext");
        }
        return (
          context ||
          (AJS.Meta.get("space-key") ? "spaceCalendars" : "myCalendars")
        );
      },
      isSingleCalendarView: function (calendarDiv) {
        return (
          "singleCalendar" === this.getParameter(calendarDiv, "calendarContext")
        );
      },
      isSpaceCalendarView: function (calendarDiv) {
        return (
          "spaceCalendars" === this.getParameter(calendarDiv, "calendarContext")
        );
      },
      isEmbeddedCalendarView: function (calendarDiv) {
        return "page" === this.getParameter(calendarDiv, "calendarContext");
      },
      isMyCalendarView: function (calendarDiv) {
        return (
          "myCalendars" === this.getParameter(calendarDiv, "calendarContext")
        );
      },
      putCalendarContextParams: function (data) {
        data.calendarContext = this.getCalendarContext();
        data.viewingSpaceKey = AJS.Meta.get("space-key") || "";
      },
      toggleNoCalendarPage: function (show) {
        if (show) {
          $(".no-calendar-page").removeClass("hidden");
          $(".space-calendar-wrapper").addClass("hidden");
          $(".space-calendar-buttons").addClass("hidden");
        } else {
          $(".no-calendar-page").addClass("hidden");
          $(".space-calendar-buttons").removeClass("hidden");
          $(".space-calendar-wrapper").removeClass("hidden");
        }
      },
      isValidLicense: function () {
        var licencseMessages = $(".aui-message.error.license-invalid");
        return licencseMessages.size() === 0;
      },
      getParamsFromUrl: function () {
        var vars = [],
          hash;
        var q = window.location.href.split("?")[1];
        if (q != undefined) {
          q = q.split("&");
          for (var i = 0; i < q.length; i++) {
            hash = q[i].split("=");
            vars.push(hash[1]);
            vars[hash[0]] = hash[1];
          }
        }
        return vars;
      },
      isCalendarNameTruncated: function ($element) {
        var isTruncated = false;
        var $c = $element
          .clone()
          .css({ display: "inline", width: "auto", visibility: "hidden" })
          .appendTo("body");
        if ($c.width() > $element.width()) {
          isTruncated = true;
        }
        $c.remove();
        return isTruncated;
      },
    };
    return calendarUtils;
  });
} catch (e) {
  WRMCB(e);
}
try {
  /* module-key = 'com.atlassian.confluence.extra.team-calendars:calendar-util', location = 'com/atlassian/confluence/extra/calendar3/components/calendar-util/calendar-util-component-compat.js' */
  (function (a) {
    if (!Confluence.TeamCalendars) {
      Confluence.TeamCalendars = {};
    }
    if (!Confluence.TeamCalendars.Dialogs) {
      Confluence.TeamCalendars.Dialogs = {};
    }
    if (!Confluence.TeamCalendars.hasJiraLink) {
      Confluence.TeamCalendars.hasJiraLink = a(
        "#team-calendars-has-jira-link"
      ).length;
    }
    if (!Confluence.TeamCalendars.getRestBaseUrl) {
      Confluence.TeamCalendars.getRestBaseUrl = function () {
        return Confluence.getContextPath() + "/rest/calendar-services/1.0";
      };
    }
  })(AJS.$);
  require(["tc/calendar-util"], function (a) {
    if (!Confluence.TeamCalendars.Dialogs) {
      Confluence.TeamCalendars.Dialogs = {};
    }
    for (var b in a) {
      if (a.hasOwnProperty(b)) {
        Confluence.TeamCalendars[b] = a[b];
      }
    }
  });
} catch (e) {
  WRMCB(e);
}
