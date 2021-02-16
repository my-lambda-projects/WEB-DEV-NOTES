WRMCB = function (e) {
  var c = console;
  if (c && c.log && c.error) {
    c.log("Error running batched script.");
    c.error(e);
  }
};
try {
  /* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/soy/initial-templates.soy' */
  // This file was automatically generated from initial-templates.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace Confluence.Templates.Blueprints.
   */

  if (typeof Confluence == "undefined") {
    var Confluence = {};
  }
  if (typeof Confluence.Templates == "undefined") {
    Confluence.Templates = {};
  }
  if (typeof Confluence.Templates.Blueprints == "undefined") {
    Confluence.Templates.Blueprints = {};
  }

  Confluence.Templates.Blueprints.createDialogBody = function (
    opt_data,
    opt_ignored
  ) {
    return (
      Confluence.Templates.Blueprints.waitContainer(null) +
      '<div class="create-dialog-body loadable"><div class="template-select-container">' +
      Confluence.Templates.Blueprints.waitContainer(null) +
      '<div class="template-select-container-body loadable"></div></div></div>'
    );
  };
  if (goog.DEBUG) {
    Confluence.Templates.Blueprints.createDialogBody.soyTemplateName =
      "Confluence.Templates.Blueprints.createDialogBody";
  }

  Confluence.Templates.Blueprints.waitContainer = function (
    opt_data,
    opt_ignored
  ) {
    return (
      '<div class="wait-container">' +
      Confluence.Templates.Blueprints.waitIcon(null) +
      "</div>"
    );
  };
  if (goog.DEBUG) {
    Confluence.Templates.Blueprints.waitContainer.soyTemplateName =
      "Confluence.Templates.Blueprints.waitContainer";
  }

  Confluence.Templates.Blueprints.waitIcon = function (opt_data, opt_ignored) {
    return '<div class="wait-icon"></div>';
  };
  if (goog.DEBUG) {
    Confluence.Templates.Blueprints.waitIcon.soyTemplateName =
      "Confluence.Templates.Blueprints.waitIcon";
  }

  Confluence.Templates.Blueprints.helpLink = function (opt_data, opt_ignored) {
    return (
      "" +
      Confluence.Templates.Dialog.helpLink({
        href:
          "https://confluence.atlassian.com/display/ConfCloud/Pages+and+Blogs",
      })
    );
  };
  if (goog.DEBUG) {
    Confluence.Templates.Blueprints.helpLink.soyTemplateName =
      "Confluence.Templates.Blueprints.helpLink";
  }

  Confluence.Templates.Blueprints.spaceHelpLink = function (
    opt_data,
    opt_ignored
  ) {
    return (
      "" +
      Confluence.Templates.Dialog.helpLink({
        href:
          "https://confluence.atlassian.com/display/ConfCloud/Create+a+Space",
      })
    );
  };
  if (goog.DEBUG) {
    Confluence.Templates.Blueprints.spaceHelpLink.soyTemplateName =
      "Confluence.Templates.Blueprints.spaceHelpLink";
  }
} catch (e) {
  WRMCB(e);
}
try {
  /* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/soy/discovery-tooltip.soy' */
  // This file was automatically generated from discovery-tooltip.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace Confluence.Quick.Create.
   */

  if (typeof Confluence == "undefined") {
    var Confluence = {};
  }
  if (typeof Confluence.Quick == "undefined") {
    Confluence.Quick = {};
  }
  if (typeof Confluence.Quick.Create == "undefined") {
    Confluence.Quick.Create = {};
  }

  Confluence.Quick.Create.discoveryTooltip = function (opt_data, opt_ignored) {
    return (
      '<p class="title">' +
      soy.$$escapeHtml("TIME-SAVING TEMPLATES") +
      "</p><p>" +
      soy.$$filterNoAutoescape(
        "Want some help creating awesome pages quickly? There are some useful templates here, to help get you started."
      ) +
      '</p><p><button class="aui-button" id="closeDisDialog">' +
      soy.$$escapeHtml("Okay, got it") +
      "</button></p>"
    );
  };
  if (goog.DEBUG) {
    Confluence.Quick.Create.discoveryTooltip.soyTemplateName =
      "Confluence.Quick.Create.discoveryTooltip";
  }
} catch (e) {
  WRMCB(e);
}
try {
  /* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/js/create-dialog-base.js' */
  Confluence.Dialogs = Confluence.Dialogs || {};
  (function (c) {
    function b(g, f) {
      try {
        return require(g);
      } catch (d) {
        console.error(d);
        return f;
      }
    }
    Confluence.Dialogs.CreateDialogBase = function a(P) {
      var h,
        Z,
        s = P.dialogId,
        y = P.webItemsPath,
        C = [],
        i = false,
        ab = b("confluence/api/event", { bind: function () {} }),
        v = require("confluence/confluence-storage-manager")(
          "confluence-create-content-plugin"
        ),
        K = b("confluence/legacy-message-queue-analytics", {
          send: function () {},
        }),
        G,
        E = true,
        aa = false,
        ac,
        W;
      function D() {
        if (!Z) {
          return;
        }
        if (Z.find(".button-panel-cancel-link:visible").is(".disabled")) {
          return;
        }
        if (Confluence.Blueprint.HowToUse) {
          Confluence.Blueprint.HowToUse.notifyCancel(h);
        }
        AJS.trigger("analytics", { name: s + ".cancel" + G });
        h.remove();
        c(".tipsy").remove();
        h = null;
        Z = null;
        c(window).removeProp("disabled");
        return false;
      }
      function X() {
        return c(".create-dialog-create-button:visible");
      }
      function U() {
        return c(".create-dialog-body .template:visible").length;
      }
      function J(ad) {
        return ad.data("content-blueprint-id");
      }
      function L(af) {
        var ah = J(af),
          ae = af.data("template-id"),
          ag = ah || ae,
          ad = ah ? "contentBlueprintId" : "templateId";
        if (!ag) {
          return Y(
            "itemModuleCompleteKey",
            af.data("item-module-complete-key")
          );
        }
        return Y(ad, ag);
      }
      function n(ae, ad) {
        if (!U()) {
          return false;
        }
        if (c(this).attr("disabled") === "disabled") {
          return false;
        }
        c(this)
          .attr("disabled", "disabled")
          .before('<div class="create-dialog-button-spinner"></div>');
        c(".create-dialog-button-spinner").spin("small");
        var ah = H.getSpaceKey();
        var ag = c(".template.selected");
        var af = L(ag);
        if (!af) {
          throw new Error("Expected at least one template to be selected");
        }
        af.spaceKey = ah;
        af.spaTransitionEnabled = ad.spaTransitionEnabled;
        if (ad.parentPageSpaceKey === ah) {
          af.parentPageId = ad.parentPageId;
          af.parentPageType = ad.parentPageType;
          af.parentPageTitle = ad.parentPageTitle;
          af.parentPageSpaceKey = ad.parentPageSpaceKey;
        }
        Confluence.Blueprint.fireWizard(ae, af, h);
      }
      function A() {
        if (!U()) {
          X().attr("disabled", "disabled");
        } else {
          X().removeAttr("disabled");
        }
      }
      function Y(ad, ae) {
        return _.find(H.loadedWebitems[H.getSpaceKey()], function (af) {
          return af[ad] == ae;
        });
      }
      function R(ad) {
        return Y("contentBlueprintId", ad);
      }
      function N(af) {
        var ae = R(af);
        var ad = ae && ae.wizard;
        var ag = f(!ad);
        X().text(ag);
      }
      function u(ad) {
        ad.addClass("selected").siblings().removeClass("selected");
        N(J(ad));
        AJS.trigger(Confluence.Dialogs.Events.ITEM_SELECTED, { item: ad });
      }
      function t(ad, ai) {
        var af = ad.find(".template");
        var ah = af.filter(".selected");
        var ae = af.index(ah) + ai;
        ae = ae % af.length;
        var ag = af.eq(ae);
        u(ag);
        ag.focus();
        ad.simpleScrollTo(ag);
      }
      function d(ae) {
        var ad = 2;
        switch (ae) {
          case 37:
            return -1;
          case 39:
            return +1;
          case 38:
            return -ad;
          case 40:
            return +ad;
        }
        return 0;
      }
      function Q(ad) {
        ad.bind("keydown", function (ae) {
          var af = d(ae.which);
          if (af) {
            t(ad, af);
            return AJS.stopEvent(ae);
          }
        });
      }
      function j(ad) {
        return (
          ad ===
            "com.atlassian.confluence.plugins.confluence-create-content-plugin:create-blank-page" ||
          ad ===
            "com.atlassian.confluence.plugins.confluence-create-content-plugin:create-blog-post" ||
          ad ===
            "com.atlassian.confluence.plugins.confluence-create-content-plugin:create-blog-post-legacy" ||
          ad ===
            "com.atlassian.confluence.plugins.confluence-create-content-plugin:create-blog-post-fabric"
        );
      }
      function B(ae, af, ad) {
        AJS.flag({ type: ae, title: af, body: ad });
      }
      function o(aq, ai) {
        var ap = H.getSpaceKey();
        var at = H.loadedWebitems[ap];
        at = H.filterWebItems(at);
        i =
          at &&
          at.length > 0 &&
          _.some(at, function (av) {
            return av.isPromoted;
          });
        C = q(at);
        if (!i && aq) {
          at = C;
        }
        var ae = Confluence.Templates.Blueprints.templates({
          webItems: at,
          spaceKey: ap,
        });
        var an = c(ae);
        var al = O(an);
        if (window.location.search.includes("createDialogWACErrorMessage")) {
          var af = window.location.search
            .split("createDialogWACErrorMessage=")[1]
            .split("&")[0];
          var au = {
            "all.purpose": [
              "Something went wrong",
              "We can not present you with the right template. Choose one of the available templates, or go back to www.atlassian.com and try again.",
            ],
            "disable.blueprint": [
              "The template is not available",
              "Your Confluence admin has disabled this template.  Contact your admin to make it available.",
            ],
          };
          B("error", au[af][0], au[af][1]);
        }
        if (window.location.search.includes("createDialogWACWarningMessage")) {
          var am = window.location.search
            .split("createDialogWACWarningMessage=")[1]
            .split("&")[0];
          var ak = {
            "no.personal.space": [
              "No personal space available",
              "Since you do not have a personal space, select a space before creating the template.",
            ],
            "old.editor.template": [
              "This template will use the old editor",
              "Your Confluence site is not ready to use the version of this template, which was created using the new editor.",
            ],
          };
          B("warning", ak[am][0], ak[am][1]);
        }
        if (i && al === undefined) {
          var ap = H.getSpaceKey();
          var ah = c.parseJSON(v.getItem("showMore")) || {};
          var ao = ah[ap];
          if (!ao || ao < 3) {
            var ag = an.find(".template");
            _.each(ag, function (aw) {
              var av = c(aw);
              var ax = L(av);
              if (!ax.isPromoted && !j(ax.itemModuleCompleteKey)) {
                av.hide();
              }
            });
            var ar = an.append(
              Confluence.Templates.Blueprints.Promoted.showMore()
            )[0];
            c("#promoted-link", ar).click(function () {
              ah[ap] = (ao || 0) + 1;
              v.setItemQuietly("showMore", JSON.stringify(ah));
              c(this)
                .closest(".templates")
                .find(".template")
                .css("display", "");
              c(this).closest("li").remove();
              A();
            });
          }
        }
        var ad = Z.find(".templates");
        if (ad.length) {
          if (ai) {
            ad.fadeOut(150, function () {
              ad.replaceWith(an.fadeIn(150));
              x();
              r();
              Q(an);
            });
          } else {
            ad.replaceWith(an);
          }
        } else {
          c(".template-select-container-body").append(an);
        }
        if (S()) {
          var aj = !aq;
          F(C.length, aj);
        } else {
          e();
        }
        if (Z.searcher) {
          Z.searcher.refreshItems();
          Z.searcher.filter();
        }
        Z.find(".loading").removeClass("loading");
        Z.trigger("create-content.loaded");
        r();
        Q(an);
        if (S()) {
          x();
        }
        if (al !== undefined) {
          E = false;
          Z.find(".templates").simpleScrollTo(al.first().click());
          E = true;
        }
        A();
      }
      function m(ad) {
        AJS.log(
          "Attempted to select a blueprint that could not be found in the create dialog: " +
            ad
        );
      }
      function O(ah) {
        var ae;
        if (window.location.search.includes("createDialogBlueprintModule")) {
          var aj = window.location.search
            .split("createDialogBlueprintModule=")[1]
            .split("&")[0];
          ae = ah.find(
            '.template[data-blueprint-module-complete-key="' + aj + '"]'
          );
          if (ae.length) {
            return ae;
          }
          m(aj);
        } else {
          if (!h.initContext) {
            return;
          }
          var ai;
          var ag = Confluence.Blueprint.Selector.getSelectors();
          for (var af = 0, ad = ag.length; af < ad; af++) {
            ai = ag[af](h.initContext);
            if (ai && ai.length) {
              ae = ah.find(
                '.template[data-item-module-complete-key="' + ai + '"]'
              );
              if (ae.length) {
                return ae;
              } else {
                m(ai);
              }
            }
          }
        }
      }
      function x() {
        var ad = c(".templates");
        ad.css(
          "height",
          ad.outerHeight(false) - c("#discover-new-banner").outerHeight()
        );
      }
      function r() {
        E = false;
        c(".template")
          .click(function () {
            u(c(this));
          })
          .dblclick(function () {
            X().click();
          })
          .focus(function () {
            c(this).click();
          });
        c(".template:visible:first").click();
        c(".template").click(function () {
          if (E) {
            K.send("ui", {
              source: "createPageModal",
              actionSubject: "template",
              action: "clicked",
              actionSubjectId: "template",
              attributes: {
                templateName: c(this).find(".template-name").text() || "",
                templateId: this.dataset.templateId || "",
                blueprintId: this.dataset.contentBlueprintId || "",
                blueprintKey: this.dataset.blueprintModuleCompleteKey || "",
              },
            });
          }
        });
        E = true;
      }
      function q(ai) {
        var ah = "",
          af = [],
          ag = [];
        for (var ae = 0, ad = ai.length; ae < ad; ae++) {
          if (ai[ae].isNew) {
            ag = V();
            ah = c.inArray(ai[ae].itemModuleCompleteKey, ag) != -1;
            if (ah) {
              ai[ae].isNew = false;
            } else {
              af.push(ai[ae]);
            }
          }
        }
        return af;
      }
      function M() {
        var ad = c.parseJSON(v.getItem("dismissed"));
        return ad || [];
      }
      function V() {
        var ad = c.parseJSON(v.getItem("used"));
        return ad || [];
      }
      function e() {
        var ad = c("#discover-new-banner");
        if (ad.length) {
          ad.remove();
        }
      }
      function F(ag, ae) {
        e();
        var ad = Confluence.Templates.Blueprints.discoverNewBanner({
          newItemsNo: ag,
          showLinkToNew: ae,
        });
        var af = c(".template-select-container-body");
        af.prepend(ad);
        af.find(".aui-button-link").click(function () {
          var ah = !c(this).data("is-filtered");
          H.fillWebItemsInDialog(ah, true);
        });
        c("#discover-new-banner .icon-close").click(function () {
          c("#discover-new-banner").slideUp(150);
          var aj = M();
          var ai, ak, ah;
          for (ai = 0, ah = C.length; ai < ah; ai++) {
            ak = C[ai].itemModuleCompleteKey;
            if (c.inArray(ak, aj) == -1) {
              aj.push(ak);
            }
          }
          v.setItemQuietly("dismissed", JSON.stringify(aj));
          H.fillWebItemsInDialog(false);
        });
      }
      function S() {
        if (C.length == 0 || i) {
          return false;
        }
        var ae = M();
        if (ae.length == 0) {
          return true;
        }
        for (var ad = 0; ad < C.length; ++ad) {
          if (c.inArray(C[ad].itemModuleCompleteKey, ae) == -1) {
            return true;
          }
        }
        return false;
      }
      function p(ad) {
        ac = "mouseClick";
        W = void 0;
        var ad = ad || {},
          af = function (ah) {
            if (h) {
              if (ah.keyCode === 27) {
                D();
                if (G === ".create-page") {
                  K.send("ui", {
                    source: "createPageModal",
                    actionSubject: "keyboardShortcut",
                    action: "pressed",
                    actionSubjectId: "close",
                  });
                }
              } else {
                if (ah.keyCode === 13) {
                  var ai =
                    ah.target.nodeName && ah.target.nodeName.toLowerCase();
                  if (ai == "textarea") {
                    return;
                  }
                  if (G === ".create-page") {
                    ac = "keyPress";
                    W = "enter";
                  }
                  X().click();
                }
              }
            }
          };
        G = ad.triggerSrc ? "." + ad.triggerSrc : "";
        var ae = {
          width: 840,
          height: 449,
          id: s,
          closeOnOutsideClick: false,
          keypressListener: af,
          focusSelector: ".templates",
        };
        h = c.extend(new AJS.Dialog(ae), H);
        Z = h.popup.element;
        h.addHeader(P.headingText);
        h.initContext = ad.initContext;
        var ag = (Z.searcher = Confluence.DomFilterField({
          items: "#create-dialog .templates .template",
          inputId: "createDialogFilter",
          placeholderText: "Filter",
          postSearch: function (ah) {
            E = false;
            if (ah.length == 0) {
              AJS.trigger(Confluence.Dialogs.Events.ITEM_SELECTED, {
                noVisibleItem: true,
              });
            } else {
              ah.eq(0).click();
            }
            if (!ad.showStepOne) {
              A();
            }
            if (aa) {
              K.send("ui", {
                source: "createPageModal",
                actionSubject: "submitted",
                action: "search",
                actionSubjectId: "templateSearchBar",
              });
              aa = false;
            }
            E = true;
          },
          submitCallback: function (ah, ai) {
            E = false;
            ah.eq(0).dblclick();
            E = true;
          },
        }));
        ag.form.find("input").attr("tabindex", 100);
        ag.form.find("input").keyup(function () {
          aa = true;
        });
        Z.find(".dialog-title").prepend(P.helpLinkTemplate(), ag.form);
        h.addPanel(
          "SinglePanel",
          Confluence.Templates.Blueprints.createDialogBody(),
          "loading"
        );
        c.extend(h, {
          addButtonPanel: z,
          addFullButtonPanel: l,
          addBackButton: w,
          removeBackButton: k,
        });
        h.addButtonPanel(h.getPage(0), function (ah) {
          n(ah, {
            parentPageId: ad.parentPageId,
            parentPageTitle: ad.parentPageTitle,
            parentPageType: ad.parentPageType,
            parentPageSpaceKey: ad.parentPageSpaceKey,
            spaTransitionEnabled: ad.spaTransitionEnabled,
          });
        });
        h.prevPage = function () {
          Z.find(".create-dialog-button-spinner").remove();
          Z.find(".create-dialog-create-button").removeAttr("disabled");
          c(window).removeProp("disabled");
          return AJS.Dialog.prototype.prevPage.apply(h, arguments);
        };
        Z.find(".dialog-button-panel")
          .find("button, .button-panel-link")
          .attr("tabindex", 100);
        Z.options = ad = c.extend({ showDialog: true, updateHeight: true }, ad);
        h.getPanel(0).setPadding(0);
        h.gotoPanel(0);
        c("#create-dialog").find(".wait-icon").spin("medium");
        ad.showDialog && h.show();
        Confluence.sessionCheck();
        ab.bind("blueprint.before-create", function () {
          var ai = ac === "keyPress";
          var ak = ai ? "keyboardShortcut" : "button";
          var aj = ai ? "pressed" : "clicked";
          var ah = ai ? { key: W } : void 0;
          K.send("ui", {
            source: "createPageModal",
            actionSubject: ak,
            action: aj,
            actionSubjectId: "create",
            attributes: ah,
          });
        });
        return h;
      }
      function f(ad) {
        return ad ? "Create" : "Next";
      }
      function g(ad) {
        return function (ae, af, ah) {
          var ag = ad && ad.call(this, ae, af);
          if (ag !== true && ah) {
            ah.preventDefault();
          } else {
            return ag;
          }
        };
      }
      function z(ah, ag, ad, af) {
        var ae = f(ad);
        ah.addButton(AJS.I18n.getText(ae), null, "create-dialog-create-button");
        ah.buttonpanel
          .find(".button-panel-button")
          .removeClass("button-panel-button")
          .addClass("aui-button");
        ah.buttonpanel
          .find(".create-dialog-create-button")
          .click(function (an) {
            var am = L(c(".template.selected"));
            if (!am || (!am.templateId && !j(am.itemModuleCompleteKey))) {
              return;
            }
            var aj = ac === "keyPress";
            var al = aj ? "keyboardShortcut" : "button";
            var ak = aj ? "pressed" : "clicked";
            var ai = aj ? { key: W } : void 0;
            K.send("ui", {
              source: "createPageModal",
              actionSubject: al,
              action: ak,
              actionSubjectId: "create",
              attributes: ai,
            });
          });
        ah.buttonpanel
          .find(".create-dialog-create-button")
          .addClass("aui-button-primary")
          .click(ag);
        ah.buttonpanel
          .find(".create-dialog-create-button")
          .attr("data-test-id", "create-dialog-create-button");
        if (af) {
          ah.buttonpanel.addClass(af);
        }
        this.addCancel(
          "Close",
          g(function () {
            if (G === ".create-page") {
              K.send("ui", {
                source: "createPageModal",
                actionSubject: "button",
                action: "clicked",
                actionSubjectId: "close",
              });
            }
            return D();
          })
        );
      }
      function l(af, ae, ag, ad) {
        this.addBackButton(af, ag);
        this.addButtonPanel(af, g(ae), ad);
        return af.buttonpanel;
      }
      function w(ad, ae) {
        ad.addButton(
          "Back",
          g(function (af) {
            ae && ae();
            if (af.curpage == 1) {
              af.fillWebItemsInDialog();
            }
            af.prevPage();
            if (af.curpage == 0) {
              x();
            }
            ad.remove();
            af.page.pop();
            if (U() && !c(".template.selected").length) {
              E = false;
              c(".template:visible:first").click();
              E = true;
            }
          }),
          "button-panel-back"
        );
      }
      function k() {
        var ae = this.getPage(this.curpage);
        var ad = ae.buttonpanel.find(".button-panel-back");
        ad.remove();
      }
      function T(af, ae) {
        var ad = this,
          ae = _.isUndefined(ae) ? true : ae;
        ad.loadedWebitems = ad.loadedWebitems || {};
        var ag = this.loadedWebitems[af];
        if (ag) {
          return AJS.$.Deferred().resolve([ag]);
        }
        return c
          .ajax({
            url: Confluence.getContextPath() + y,
            dataType: "json",
            data: { spaceKey: af },
            async: ae,
          })
          .done(function (ah) {
            ad.loadedWebitems[af] = ah;
          });
      }
      function I() {
        var ad = this;
        return AJS.$.getJSON(
          Confluence.getContextPath() + "/rest/create-dialog/1.0/spaces",
          {
            promotedSpaceKey: AJS.params.spaceKey,
            promotedSpacesLimit: 10,
            otherSpacesLimit: 1000,
          }
        ).done(function (ae) {
          ad.loadedSpaces = ae;
          AJS.trigger("create-dialog.data-ready");
        });
      }
      var H = {
        openDialog: p,
        closeDialog: D,
        requestWebItems: T,
        requestSpaces: I,
        loadedWebitems: {},
        loadedSpaces: {},
        fillWebItemsInDialog: o,
        filterWebItems: function (ad) {
          return ad;
        },
        getSpaceKey: function () {
          return null;
        },
      };
      return H;
    };
  })(AJS.$);
  Confluence.Dialogs.Events = {};
  Confluence.Dialogs.Events.ITEM_SELECTED = "create-dialog.item-selected";
} catch (e) {
  WRMCB(e);
}
try {
  /* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/js/loader.js' */
  Confluence.Blueprint = Confluence.Blueprint || {};
  var resourcesLoaded = false;
  var noSpaceErrors = {
    noAccess: "Request permission from your Confluence administrator.",
    createNew:
      "Pages are stored in spaces, which help you organize related work and keep it together.\u003cbr /\u003e\u003cbr /\u003eCreate a space first, so your pages have a place to live.",
    titleNoAccess: "Can't create new pages in this space",
    titleWithAccess: "Start by creating a space",
  };
  function createNewDialogBase() {
    Confluence.Blueprint.Dialog = Confluence.Dialogs.CreateDialogBase({
      dialogId: "create-dialog",
      webItemsPath: "/rest/create-dialog/1.0/blueprints/web-items",
      helpLinkTemplate: Confluence.Templates.Blueprints.helpLink,
      headingText: "Create",
    });
  }
  Confluence.Blueprint.loadDialog = function (c) {
    var b = AJS.$.Deferred();
    var a;
    if (!resourcesLoaded || c.forceReload) {
      if (c.forceReload) {
        createNewDialogBase();
      }
      a = Confluence.Blueprint.Dialog.openDialog(c);
      var e = WRM.require("wrc!create-content");
      var d = AJS.$.Deferred();
      Confluence.Blueprint.Dialog.requestSpaces().done(function () {
        var g = Confluence.Blueprint.Dialog.loadedSpaces,
          f = g.promotedSpaces.spaces[0] || g.otherSpaces.spaces[0];
        if (f) {
          Confluence.Blueprint.Dialog.requestWebItems(f.id).done(function () {
            d.resolve();
          });
        } else {
          $.ajax({
            url: AJS.contextPath() + "/rest/graph",
            type: "POST",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({
              operationName: "user",
              query:
                "query user {  user (current:true) {    operations { operation }  }}",
              variables: { location: "system.user" },
            }),
            success: function (k) {
              var j = false;
              if (
                k &&
                k.data &&
                k.data.user &&
                Array.isArray(k.data.user.operations)
              ) {
                j = !!k.data.user.operations.find(function (l) {
                  return l.operation === "create_space";
                });
              }
              var i = $(".dialog-panel-body.loading .wait-container");
              var h = i.closest(".loading");
              i.replaceWith(
                $("<div/>")
                  .addClass("no-spaces-found")
                  .append(
                    $("<div />")
                      .addClass("icon-wrapper")
                      .html(
                        '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 18.38 18.38">  <title>group</title>  <rect x="2.9" y="2.9" width="14" height="14" rx="1.71" ry="1.71" transform="translate(-4.81 9.19) rotate(-45)" style="fill:#de350b"/>  <path d="M10,15a1,1,0,1,1,0-2h0a1,1,0,1,1,0,2Zm1-4a1,1,0,0,1-2,0V6a1,1,0,0,1,2,0Z" transform="translate(-0.71 -0.71)" style="fill:#fff"/></svg>'
                      )
                  )
                  .append(
                    $("<div/>").html(
                      noSpaceErrors[j ? "createNew" : "noAccess"]
                    )
                  )
              );
              h.removeClass("loading");
              $(".create-dialog-create-button").hide();
              $(".dialog-title").html(
                noSpaceErrors[j ? "titleWithAccess" : "titleNoAccess"]
              );
            },
          });
        }
      });
      AJS.$.when(e, d.promise())
        .done(function () {
          AJS.trigger("blueprint.wizard-register.load");
          if (
            AJS.DarkFeatures.isEnabled("create-page-dialog.allow-parent-page")
          ) {
            Confluence.Dialogs.LocationPanel(Confluence.Blueprint.Dialog, {
              parentPageId: c.parentPageId,
              parentPageTitle: c.parentPageTitle,
              parentPageType: c.parentPageType,
              parentPageSpaceKey: c.parentPageSpaceKey,
            });
          } else {
            Confluence.Dialogs.LocationPanel(Confluence.Blueprint.Dialog);
          }
          c = AJS.$.extend(c, {
            createDialog: a,
            dialogBase: Confluence.Blueprint.Dialog,
          });
          resourcesLoaded = true;
          b.resolve(Confluence.Blueprint.Dialog.openDialog(c));
        })
        .fail(function () {
          AJS.log("Could not load resources for create dialog");
        });
    } else {
      b.resolve(Confluence.Blueprint.Dialog.openDialog(c));
    }
    return b.promise();
  };
  function trackAnalyticEvent() {
    var a = window.location.pathname;
    if (a.indexOf("/draft-createpage.action") > -1) {
      AJS.bind("rte-ready", function (c) {
        $("#rte-button-publish").click(function () {
          AJS.trigger("analytics", {
            name: "confluence.quick.create.create-dialog.blue-print.save",
          });
        });
        $("#rte-button-cancel").click(function () {
          AJS.trigger("analytics", {
            name: "confluence.quick.create.create-dialog.blue-print.close",
          });
        });
      });
    } else {
      if (a.indexOf("/createpage.action") > -1) {
        var b = $("#createpageform input[name='queryString']").val();
        if (typeof b === "string" && b.indexOf("src=quick-create") > -1) {
          AJS.bind("rte-ready", function (c) {
            $("#rte-button-publish").click(function () {
              AJS.trigger("analytics", {
                name: "confluence.quick.create.blank.save",
              });
            });
            $("#rte-button-cancel").click(function () {
              AJS.trigger("analytics", {
                name: "confluence.quick.create.blank.close",
              });
            });
            $("#rte-button-location").click(function () {
              AJS.trigger("analytics", {
                name: "confluence.quick.create.blank.change.location",
              });
            });
          });
        } else {
          AJS.bind("rte-ready", function (c) {
            $("#rte-button-publish").click(function () {
              AJS.trigger("analytics", {
                name: "confluence.quick.create.create-dialog.blank.save",
              });
            });
            $("#rte-button-cancel").click(function () {
              AJS.trigger("analytics", {
                name: "confluence.quick.create.create-dialog.blank.close",
              });
            });
          });
        }
      }
    }
  }
  createNewDialogBase();
  AJS.toInit(function (d) {
    var c = false;
    AJS.bind("blueprint.wizard-register.load", function () {
      if (!c) {
        AJS.trigger("blueprint.wizard-register.ready");
        c = true;
      }
    });
    var b = d("#create-page-button:visible");
    if (!b.length) {
      return;
    }
    d(document).on("click", ".create-child-page-link", function () {
      Confluence.Blueprint.loadDialog({ location: "child-page" });
      return false;
    });
    trackAnalyticEvent();
    if (AJS.DarkFeatures.isEnabled("adg3.create-experience")) {
    } else {
      var a = d("#quick-create-page-button");
      if (a.is(":visible")) {
        AJS.whenIType("c").followLink("#quick-create-page-button");
      } else {
        AJS.whenIType("c").click("#create-page-button");
      }
    }
  });
  AJS.bind("shortcuts-loaded.keyboardshortcuts", function (b, a) {
    AJS.$.each(a.shortcuts, function (d, c) {
      if (c.param == "#createPageLink") {
        a.shortcuts.splice(d, 1);
        return false;
      }
    });
  });
} catch (e) {
  WRMCB(e);
}
try {
  /* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/js/create-dialog-launcher.js' */
  (function () {
    function a(d, c, e) {
      Confluence.Blueprint.Dialog.requestWebItems(d, c)
        .done(function (f) {
          var g = Confluence.Blueprint.Dialog.loadedWebitems[d];
          if (_.isEmpty(g)) {
            AJS.log(
              "create-from-template-macro: No Create dialog web items found for spaceKey >" +
                d +
                "<"
            );
            return;
          }
          e(f, g);
        })
        .fail(function () {
          AJS.log(
            "create-from-template-macro: requestWebItems call for spaceKey >" +
              d +
              "< failed"
          );
        });
    }
    function b() {
      var c = {};
      AJS.$("#create-dialog-init-params div").each(function () {
        c[$(this).data("key")] = $(this).data("value");
      });
      return c;
    }
    Confluence.Blueprint = $.extend(Confluence.Blueprint, {
      loadDialogAndOpenTemplate: function (m) {
        var l = AJS.$.Deferred();
        if (!_.isObject(m)) {
          l.reject(
            "Confluence.Blueprint.loadDialogAndOpenTemplate called with no options"
          );
          return l.promise();
        }
        var h = m.spaceKey,
          g = m.contentBlueprintId,
          e = m.templateId,
          i = m.title,
          d = m.initContext ? m.initContext : b(),
          k = (m.initContext && m.initContext.parentPageId) || "",
          c = m.contentId,
          j = m.onContentUpdated,
          f = m.onError;
        if (h) {
          Confluence.Blueprint.loadDialog({
            showDialog: true,
            updateHeight: false,
            showStepOne: true,
            initContext: d,
          }).done(function (n) {
            a(h, true, function (r, s) {
              var p = _.find(s, function (t) {
                if (g) {
                  return t.contentBlueprintId == g;
                }
                return t.templateId == e;
              });
              if (!p) {
                AJS.log(
                  "create-from-template-macro: No Create dialog web item found for contentBlueprintId >" +
                    g +
                    "< and templateId >" +
                    e +
                    "<"
                );
                l.reject(
                  "create-from-template-macro: No Create dialog web item found for contentBlueprintId >" +
                    g +
                    "< and templateId >" +
                    e +
                    "<"
                );
                return;
              }
              var q = p.itemModuleCompleteKey;
              p = $.extend({}, p);
              p.title = i;
              p.contentId = c;
              p.spaceKey = "" + h;
              p.parentPageId = "" + k;
              p.onContentUpdated = j;
              p.onError = f;
              AJS.trigger(Confluence.Dialogs.Events.ITEM_SELECTED, {
                config: p,
              });
              Confluence.Blueprint.fireWizard(r, p, n);
              n.removeBackButton();
              var o = p.howToUseTemplate && !p.skipHowToUse;
              if (o || Confluence.Blueprint.hasWizard(q, p)) {
                n.show();
              }
              l.resolve();
            });
          });
        } else {
          Confluence.Blueprint.loadDialog({ initContext: d }).done(function () {
            l.resolve();
          });
        }
        return l.promise();
      },
    });
    AJS.getWindowQueryParams = function () {
      var h = {};
      if (window.location.search.length > 1) {
        var c = window.location.search.substr(1).split("&");
        for (var e = 0; e < c.length; e++) {
          var g = c[e].split("=");
          var d = unescape(g[0]);
          var f = g.length > 1 ? unescape(g[1]) : "";
          h[d] = f;
        }
      }
      return h;
    };
    AJS.toInit(function () {
      var e = b();
      if (e.createSpaceDialog) {
        Confluence.SpaceBlueprint.loaded.then(function () {
          Confluence.SpaceBlueprint.Dialog.launch();
        });
        return;
      }
      var f = AJS.getWindowQueryParams();
      var d = f.createDialogSpaceKey;
      if (!f.createDialog || !d) {
        return;
      }
      var c = f.createDialogBlueprintKey;
      if (d && c) {
        a(d, false, function (h, i) {
          var g = _.find(i, function (j) {
            return j.blueprintModuleCompleteKey == c;
          });
          if (g) {
            f.createDialogBlueprintId = g.contentBlueprintId;
          } else {
            AJS.log("No blueprint found with key: " + c);
          }
        });
        delete f.createDialogBlueprintKey;
      }
      if (d && !f.createDialogBlueprintId && !f.createDialogTemplateId) {
        AJS.log(
          "Confluence.Blueprint.launchDialog triggered with incorrect options - please check the URL query: " +
            window.location.search
        );
        return;
      }
      Confluence.Blueprint.loadDialogAndOpenTemplate({
        spaceKey: d,
        contentBlueprintId: f.createDialogBlueprintId,
        templateId: f.createDialogTemplateId,
        initContext: e,
      });
    });
  })();
} catch (e) {
  WRMCB(e);
}
try {
  /* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/js/space-blueprint.js' */
  define("confluence-create-content/space-blueprint", [], function () {
    return { loaded: AJS.$.Deferred() };
  });
  require("confluence/module-exporter").exportModuleAsGlobal(
    "confluence-create-content/space-blueprint",
    "Confluence.SpaceBlueprint"
  );
  AJS.deprecate.prop(window.Confluence.SpaceBlueprint, "Dialog", {
    sinceVersion: "6.0.6",
    extraInfo: "Use require('confluence-create-content/space-blueprint')",
  });
} catch (e) {
  WRMCB(e);
}
try {
  /* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/js/space-dialog.js' */
  AJS.toInit(function (c) {
    Confluence.SpaceBlueprint.Dialog = c.extend(
      Confluence.Dialogs.CreateDialogBase({
        dialogId: "create-dialog",
        webItemsPath:
          "/rest/create-dialog/1.0/space-blueprint/dialog/web-items",
        helpLinkTemplate: Confluence.Templates.Blueprints.spaceHelpLink,
        headingText: "Create space",
      }),
      {
        getParentPageId: function () {
          return undefined;
        },
        getSpaceKey: function () {
          return undefined;
        },
        launch: function (f) {
          var e = f
            ? {
                showDialog: false,
                updateHeight: false,
                showStepOne: true,
                initContext: {},
              }
            : {};
          var d = Confluence.SpaceBlueprint.Dialog.openDialog(e);
          createSpacePromise = WRM.require("wrc!create-space");
          webItemsPromise = Confluence.SpaceBlueprint.Dialog.requestWebItems();
          AJS.$.when(createSpacePromise, webItemsPromise)
            .done(function (j, i) {
              AJS.trigger("blueprint.wizard-register.load");
              if (
                !f &&
                Confluence.SpaceBlueprint.WelcomeDialog.isShowWelcomeDialog()
              ) {
                Confluence.SpaceBlueprint.WelcomeDialog.showWelcomeDialog();
                d.remove();
                return;
              }
              Confluence.SpaceBlueprint.Dialog.fillWebItemsInDialog();
              var k =
                Confluence.SpaceBlueprint.Dialog.loadedWebitems[undefined];
              if (_.isEmpty(k)) {
                AJS.log("Could not load space dialog - web items not found");
                return;
              }
              if (!f) {
                return;
              }
              var h = _.find(k, function (l) {
                return l.itemModuleCompleteKey == f;
              });
              if (!h) {
                AJS.log("Error finding space blueprint with id" + f);
                return;
              }
              Confluence.Blueprint.fireWizard(i[0], h, d);
              d.removeBackButton();
              var g = h.howToUseTemplate && !h.skipHowToUse;
              if (g || Confluence.Blueprint.hasWizard(f, h)) {
                d.show();
              }
            })
            .fail(function () {
              AJS.log("Could not load resources for space dialog");
            });
        },
      }
    );
    var a = c(
        '#create-space-button, a[href="' +
          Confluence.getContextPath() +
          '/spaces/createspace-start.action"]'
      ),
      b = c("#create-personal-space-link");
    if (b.length) {
      b.unbind("click");
      b.click(function () {
        Confluence.SpaceBlueprint.Dialog.launch(
          "com.atlassian.confluence.plugins.confluence-create-content-plugin:create-personal-space-item"
        );
        return false;
      });
    }
    if (!a.length) {
      return;
    }
    c(
      'a[href="' +
        Confluence.getContextPath() +
        '/spaces/createspace-start.action"]'
    ).unbind("click");
    a.click(function (d) {
      Confluence.SpaceBlueprint.Dialog.launch();
      return false;
    });
    Confluence.SpaceBlueprint.loaded.resolve();
  });
} catch (e) {
  WRMCB(e);
}
try {
  /* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/js/blueprint-object.js' */
  (function (x, b) {
    var p = {};
    var o;
    var B;
    var L = {};
    var H = {};
    function r(R, Q, P) {
      if (R === "space") {
        return "space-blueprint/create-space?favorite=true";
      }
      if (y("blueprint", P.replace(":", "_"))) {
        return "content/blueprint/" + P + "/instance";
      }
      if (R === "view") {
        return "content-blueprint/create-content";
      }
      return "content-blueprint/create-draft";
    }
    function O(P) {
      return (
        P ===
        "com.atlassian.confluence.plugins.confluence-create-content-plugin:create-blank-page"
      );
    }
    function d(P) {
      return (
        P ===
        "com.atlassian.confluence.plugins.confluence-create-content-plugin:create-blog-post"
      );
    }
    function v(P) {
      return (
        P ===
        "com.atlassian.confluence.plugins.confluence-create-content-plugin:create-blog-post-fabric"
      );
    }
    function D(P) {
      return (
        P ===
        "com.atlassian.confluence.plugins.confluence-create-content-plugin:create-blog-post-legacy"
      );
    }
    function K(T, U, S) {
      if (!T || T < 0) {
        return false;
      }
      if (S && T === S.parentPageId) {
        return true;
      }
      var Q = U === AJS.Meta.get("space-key");
      var R = AJS.Meta.get("content-type") === "page";
      var P = x("#page-restricted-container").length;
      return Q && R && !P;
    }
    function j(R, P, U, T, Q) {
      var S = {
        type: R,
        status: P,
        space: { key: U },
        metadata: { properties: { editor: { value: "v2" } } },
      };
      if (K(T, U, Q)) {
        S.ancestors = [{ id: T }];
      }
      return S;
    }
    function m(R, P, U, T, Q) {
      var S = { title: Q.title || "", type: R, status: P, space: { key: U } };
      if (k(Q.contentId)) {
        S.id = Q.contentId;
        if (P === "draft") {
          S.version = { number: 1 };
        }
      }
      if (K(T, U, Q)) {
        S.ancestors = [{ id: T }];
      }
      return S;
    }
    function I(P) {
      return AJS.DarkFeatures.isEnabled(P);
    }
    function k(P) {
      return !!P;
    }
    function z() {
      return I("fabric.editor.blank.blogpost");
    }
    function E() {
      return z() && I("fabric.editor.all-pages");
    }
    function l() {
      return E() || I("fabric.editor.blank.page");
    }
    function y(P, Q) {
      return l() || (z() && I("fabric.editor." + P + "." + Q));
    }
    function w() {
      b("confluence/legacy-message-queue").push({
        type: "ATLASSIAN_CONFLUENCE_EXPERIENCE_SUCCEED",
        payload: { name: "create-page" },
      });
    }
    function f(T, V, U, S, R) {
      var Q = Confluence.getContextPath() + "/rest/api/content";
      var P = j(T, "draft", V, U, R);
      F(Q, P, R);
    }
    function c(Q, R) {
      var P = Confluence.getContextPath() + "/rest/api/content";
      F(P, { type: Q, status: "draft", space: { key: R } });
    }
    function a(Q, P, V, T, S) {
      var U = Q.contentTemplateId || Q.templateId;
      var R = {
        content: m("page", P, V, T, Q),
        contentBlueprintSpec: { context: S, blueprintId: Q.contentBlueprintId },
      };
      if (U) {
        R.contentBlueprintSpec.contentTemplateId = U;
      }
      return R;
    }
    function u(R, U, T, S) {
      var Q =
        Confluence.getContextPath() +
        "/rest/api/template/page/" +
        R.templateId +
        "/instance";
      var P = a(R, "draft", U, T, S);
      F(Q, P, R);
    }
    function g(R, P, X, Q, Y, Z) {
      var V = AJS.$(".create-dialog-button-spinner");
      var S = AJS.$("#create-dialog .dialog-button-panel");
      var U = S.find(".create-dialog-create-button");
      if (V.length === 0) {
        S.prepend('<div class="create-dialog-button-spinner"></div>');
        V = AJS.$(".create-dialog-button-spinner").spin("small");
      }
      var T =
        Confluence.getContextPath() +
        "/rest/api/template/" +
        R.templateId +
        "?expand=body.atlas_doc_format";
      var W = false;
      x.ajax({
        url: T,
        type: "GET",
        dataType: "json",
        contentType: "application/json",
        data: "",
      })
        .done(function (ab) {
          var aa =
            ab.body &&
            ab.body.atlas_doc_format &&
            ab.body.atlas_doc_format.value;
          if (aa && aa.indexOf("com.atlassian.confluence.template") !== -1) {
            W = true;
          }
          if (ab.editorVersion !== "v2") {
            N(R, P, X, Q);
          } else {
            if (W) {
              if (Z) {
                Z.closeDialog();
              }
              b("confluence/legacy-message-queue").push({
                type: "ATLASSIAN_CONFLUENCE_VARIABLEINPUT_GET_TEMPLATEINFO",
                payload: {
                  spaceKey: P,
                  parentPageId: X,
                  templateId: R.templateId,
                  title: R.title,
                },
              });
            } else {
              Y(R, P, X, Q);
            }
          }
        })
        .fail(function (ae, af, ac) {
          var ab = JSON.parse(ae.responseText).errorMessage || "";
          var ad = "We can't create that blueprint right now.";
          var aa = b("aui/flag");
          aa({ type: "error", title: ad, body: ab });
          if (U.length && U.prop("disabled")) {
            U.prop("disabled", false);
          }
        })
        .always(function () {
          V.spinStop();
          V.remove();
        });
    }
    function N(P, U, S, R) {
      var T =
        Confluence.getContextPath() +
        "/pages/createpage-entervariables.action?templateId=" +
        encodeURIComponent(P.templateId) +
        "&spaceKey=" +
        encodeURIComponent(U) +
        "&title=" +
        encodeURIComponent(P.title || "") +
        "&newSpaceKey=" +
        encodeURIComponent(U);
      for (var Q in R) {
        T += "&" + encodeURIComponent(Q) + "=" + encodeURIComponent(R[Q]);
      }
      if (K(S, U, P)) {
        T += "&fromPageId=" + encodeURIComponent(S);
      }
      w();
      window.location = T;
    }
    function G(Q) {
      var P = b("confluence/legacy-message-queue");
      var S = String(Q.id);
      var R = {
        containerType: "space",
        containerId: S,
        source: "createSpaceModal",
        action: "created",
        actionSubject: "space",
        attributes: { spaceTemplateKey: o.name },
      };
      P.push({ type: "ATLASSIAN_CONFLUENCE_ANALYTICS_NEXT_TRACK", payload: R });
    }
    function F(S, R, Q) {
      var V = AJS.$(".create-dialog-button-spinner");
      var U = AJS.$("#create-dialog .dialog-button-panel");
      var P = U.find(".create-dialog-create-button");
      if (V.length === 0) {
        U.prepend('<div class="create-dialog-button-spinner"></div>');
        V = AJS.$(".create-dialog-button-spinner").spin("small");
      }
      var T = S.indexOf("space-blueprint") !== -1 ? true : false;
      x.ajax({
        url: S,
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(R),
      })
        .done(function (Y) {
          if (T) {
            G(Y);
          } else {
            w();
          }
          var W = Y.createSuccessRedirectUrl || Y.url;
          if (!W) {
            var X =
              Y._links.editui ||
              Y.content._links.editui ||
              Y._links.webui ||
              Y.content._links.webui;
            W = Confluence.getContextPath() + X;
          }
          if (Q && Q.spaTransitionEnabled) {
            b("confluence/legacy-message-queue").push({
              type: "ATLASSIAN_CONFLUENCE_CREATE_PAGE_NAVIGATE",
              payload: { url: W, data: Y, requestData: R },
            });
          } else {
            window.location = W;
          }
        })
        .fail(function (ag, W, ab) {
          var aa = "Error creating blueprint content: ";
          var ad = "";
          var ae = "We can't create that blueprint right now.";
          var ac = b("aui/flag");
          var X = I("frontend.create.page.experience.fail.error.attributes");
          try {
            var Z = JSON.parse(ag.responseText);
            ad = Z.errorMessage || Z.message || JSON.stringify(Z) || Z;
          } catch (Y) {
            ad = ag.responseText;
          }
          if (!T) {
            var af = { name: "create-page", error: new Error(aa + ad) };
            if (!ad && X) {
              af.attributes = { textStatus: W, err: ab, xhr: ag };
            }
            b("confluence/legacy-message-queue").push({
              type: "ATLASSIAN_CONFLUENCE_EXPERIENCE_FAIL",
              payload: af,
            });
          }
          ac({ type: "error", title: ae });
          if (P.length && P.prop("disabled")) {
            P.prop("disabled", false);
          }
        })
        .always(function () {
          V.spinStop();
          V.remove();
        });
    }
    function t(R, S, V, X, T, P) {
      var Y = AJS.$(".create-dialog-button-spinner");
      var U = AJS.$("#create-dialog .dialog-button-panel");
      var W = U.find(".create-dialog-create-button");
      if (Y.length === 0) {
        U.prepend('<div class="create-dialog-button-spinner"></div>');
        Y = AJS.$(".create-dialog-button-spinner").spin("small");
      }
      function Q(aa) {
        var Z = b("aui/flag");
        Z({
          type: "error",
          title: "We can't create that blueprint right now.",
          body: aa || "",
        });
      }
      x.ajax({
        url: R,
        type: "PUT",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(S),
      })
        .done(function (Z) {
          var aa = V.popup.element;
          if (aa) {
            aa.find(".button-panel-cancel-link:visible").removeClass(
              "disabled"
            );
          }
          V.closeDialog();
          if (W.length && W.prop("disabled")) {
            W.prop("disabled", false);
          }
          if (X) {
            X(Z);
          } else {
            if (Z && Z.content && Z.content._links && Z.content._links.editui) {
              window.location.assign(
                Confluence.getContextPath() + Z.content._links.editui
              );
            } else {
              Q();
            }
          }
        })
        .fail(function (aa) {
          var Z = 1;
          if (P < Z && aa && aa.status === 409) {
            return t(R, S, V, X, T, ++P);
          }
          if (W.length && W.prop("disabled")) {
            W.prop("disabled", false);
          }
          if (T) {
            T(aa);
          } else {
            Q(aa.message);
          }
        })
        .always(function () {
          Y.spinStop();
          Y.remove();
        });
    }
    function h(ac, U, aa, ad) {
      AJS.trigger("blueprint.before-create");
      var ae = b("confluence/confluence-storage-manager")(
        "confluence-create-content-plugin"
      );
      var V = x.parseJSON(ae.getItem("used")) || [];
      V.push(o.itemModuleCompleteKey);
      ae.setItemQuietly("used", JSON.stringify(V));
      var ag = _.isString(ac) ? ac : "";
      var R = o.createResult;
      var Y = o.blueprintModuleCompleteKey;
      var W = U.updateParams;
      delete U.updateParams;
      var T;
      var af;
      var Z;
      var S = (ad && ad.personalSpace) || R === "space";
      var ab = k(W && W.contentId);
      if (ab && !S) {
        T =
          Confluence.getContextPath() +
          "/rest/create-dialog/1.0/content/blueprint/instance";
        af = i(ag, U, null);
        af.contentId = W.contentId;
        var Q = a(af, "draft", B, U.parentPageId, af.context);
        t(T, Q, W.dialog, W.onContentUpdated, W.onError, 0);
      } else {
        var X =
          ad && ad.getSubmissionRestPath
            ? ad.getSubmissionRestPath()
            : "/rest/create-dialog/1.0/" + r(R, B, Y);
        T = Confluence.getContextPath() + X;
        var P = (U && U.parentPageId) || (aa && aa.getParentPageId()) || "";
        if (ad && ad.personalSpace) {
          af = q(U);
        } else {
          if (R === "space") {
            af = C(U);
          } else {
            af = i(ag, U, P);
            if (y("blueprint", Y.replace(":", "_"))) {
              Z = R === "view" ? "current" : "draft";
              af = a(af, Z, B, af.parentPageId, af.context);
            }
          }
        }
        F(T, af, U);
      }
      AJS.trigger("blueprint.after-create");
    }
    function q(P) {
      return { name: P.name };
    }
    function C(Q) {
      var R = {
        context: Q,
        name: Q.name,
        spaceKey: Q.spaceKey,
        description: Q.description,
        permissions: Q.spacePermission,
        spaceBlueprintId: o.contentBlueprintId,
      };
      var P = Q.copySpacePermissionsFromSpaceKey;
      if (P && P.length > 0) {
        R.copySpacePermissionsFromSpaceKey = P;
      }
      return R;
    }
    function i(S, P, Q) {
      var R = P || {};
      return {
        context: R,
        spaceKey: B,
        title: R.title || S || "",
        parentPageId: R.parentPageId || Q,
        contentTemplateId: R.contentTemplateId || "",
        contentBlueprintId: o.contentBlueprintId,
        contentTemplateKey: R.contentTemplateKey || "",
        viewPermissionsUsers: R.viewPermissionsUsers || "",
      };
    }
    function A(R) {
      var P = b("confluence/confluence-storage-manager")(
        "confluence-create-content-plugin"
      );
      var Q = x.parseJSON(P.getItem("used")) || [];
      if (x.inArray(R, Q) === -1) {
        Q.push(R);
      }
      P.setItemQuietly("used", JSON.stringify(Q));
    }
    Confluence.Blueprint = AJS.$.extend(Confluence.Blueprint, {
      register: function (P, Q) {
        p[P] = Q;
      },
      validateTitle: function (Q, T, U, P) {
        var S = x.trim(Q.val()),
          R;
        if (!S) {
          R = U || "Title is required.";
        } else {
          if (!Confluence.Blueprint.canCreatePage(T, S)) {
            R = P || "A page with this name already exists.";
          }
        }
        if (R) {
          Q.focus().siblings(".error").html(R);
          return false;
        }
        return true;
      },
      canCreatePage: function (R, Q) {
        var P = false;
        x.ajax({
          url:
            Confluence.getContextPath() +
            "/rest/create-dialog/1.0/blueprints/can-create-page",
          dataType: "json",
          data: { spaceKey: R, pageTitle: Q },
          async: false,
        })
          .done(function (S) {
            P = S;
          })
          .fail(function (S) {
            AJS.log("Failed to call 'can-create-page' - " + S);
          });
        return P;
      },
      hasWizard: function J(Q, P) {
        return (H[Q] || (P && P.wizard)) && !L[Q];
      },
      setWizard: function M(R, Q) {
        var P = x({});
        Q(P);
        H[R] = P;
      },
      getWizard: function (P) {
        return H[P] || x({});
      },
      setDirectCallback: function (Q, P) {
        L[Q] = P;
      },
      getDirectCallback: function (P) {
        return L[P];
      },
      fireWizard: function (ae, ag, T) {
        var Q = T.initContext || {};
        B = ag.spaceKey;
        o = ag;
        var ac = ag.contentId;
        var ad = ag.itemModuleCompleteKey;
        var P = (ag && ag.parentPageId) || T.getParentPageId();
        A(ad);
        AJS.trigger("analytics", {
          name: "confluence.create-content.submit",
          data: {
            blueprintId: ag.contentBlueprintId,
            dialogType: T.id,
            isNew: ag.isNew,
            isPromoted: ag.isPromoted,
            itemKey: ad,
            name: ag.name,
            spaceKey: B,
            templateId: ag.templateId,
          },
        });
        if (ad) {
          var ab = ad.replace(/\.|:/g, "_");
          AJS.trigger("analytics", {
            name: T.id + ".submit." + ab,
            data: { spaceKey: B },
          });
          if (ag.directLink) {
            var aa = {
              templateId: ag.templateId,
              spaceKey: B,
              title: ag.title || "",
              newSpaceKey: B,
              fromPageId: P && B === AJS.Meta.get("space-key") ? P : "",
            };
            x.extend(aa, Q);
            var X = ag.directLink;
            for (var V in aa) {
              X = X.replace(new RegExp("{" + e(V) + "}", "g"), aa[V]);
            }
            w();
            window.location = Confluence.getContextPath() + n(X);
            return;
          }
          if (O(ad) && l()) {
            return f("page", B, P, Q, ag);
          }
          if (v(ad) || (d(ad) && z())) {
            return f("blogpost", B, P, Q, ag);
          }
          if (D(ad)) {
            return c("blogpost", B, P, Q);
          }
          var R;
          var S = this.getDirectCallback(ad);
          if (S) {
            R = function Z() {
              var ah = { spaceKey: B, pageData: {}, initContext: Q };
              S(ae, ah, {
                parentPageId: ag.parentPageId,
                parentPageTitle: ag.parentPageTitle,
                parentPageSpace: ag.parentPageSpace,
                parentPageType: ag.parentPageType,
              });
              var ai = x.extend(Q, { pageData: ah.pageData });
              w();
              new Confluence.DialogWizard(T, h).doFinalAction(ae, ah, ai, h);
            };
          } else {
            if (ag.wizard) {
              var Y = ag.wizard.pages[0].id;
              R = function W() {
                var ah = Confluence.Blueprint.getWizard(ad);
                var ai = x.extend(Q, {
                  spaceKey: B,
                  pages: {},
                  parentPageId: P,
                  title: ag.title,
                });
                if (k(ac)) {
                  ai.updateParams = {
                    contentId: ac,
                    dialog: T,
                    onContentUpdated: ag.onContentUpdated,
                    onError: ag.onError,
                  };
                }
                Confluence.DialogWizard(T, h).newPage(ag, Y, {}, ai, ah);
              };
            } else {
              if (p[ad]) {
                R = function af() {
                  p[ad](T, B, h);
                };
              } else {
                if (ag.contentBlueprintId) {
                  R = function U() {
                    h(null, x.extend(Q, ag), T);
                  };
                } else {
                  throw Error("No way to process item: " + ad);
                }
              }
            }
          }
          if (ag.howToUseTemplate) {
            Confluence.Blueprint.HowToUse.check(T, ag, R);
          } else {
            R();
          }
        } else {
          if (ag.templateId) {
            AJS.trigger("analytics", {
              name: T.id + ".submit.template",
              data: { spaceKey: B, templateId: ag.templateId },
            });
            if (y("template", ag.templateId)) {
              if (
                I("fabric.editor.template.variables") &&
                document.querySelector(
                  "#DO_NOT_REMOVE_VARIABLE_INPUT_COMPONENT_EXISTS"
                )
              ) {
                g(ag, B, P, Q, u, T);
              } else {
                u(ag, B, P, Q);
              }
            } else {
              N(ag, B, P, Q);
            }
          } else {
            throw new Error("Unknown item: " + ag);
          }
        }
      },
    });
    function s() {
      var P = {};
      if (AJS.Meta.get("page-title")) {
        P.parentPageId = AJS.Meta.get("page-id");
        P.parentPageTitle = AJS.Meta.get("page-title");
      } else {
        P.parentPageId = AJS.Meta.get("parent-page-id");
        P.parentPageTitle = AJS.Meta.get("from-page-title");
      }
      return P;
    }
    function n(R) {
      var Q = R.match(/^(.*)\?(.+)$/);
      if (!Q) {
        return R;
      }
      var S = Q[1];
      var P = Q[2]
        .split("&")
        .filter(function (T) {
          return /^.+=.+$/.test(T);
        })
        .join("&");
      return S + (P ? "?" : "") + P;
    }
    function e(P) {
      return P.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1");
    }
    Confluence.Blueprint.Util = {};
    Confluence.Blueprint.Util.getParentPageLocation = s;
  })(AJS.$, require);
} catch (e) {
  WRMCB(e);
}
try {
  /* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:resources', location = 'com/atlassian/confluence/plugins/createcontent/js/create-dialog-blueprint-selector.js' */
  (function (b) {
    var a = [];
    Confluence.Blueprint.Selector = {
      registerSelector: function (c) {
        if (c && typeof c === "function") {
          a.push(c);
        }
      },
      getSelectors: function () {
        return a;
      },
    };
  })(AJS.$);
} catch (e) {
  WRMCB(e);
}
