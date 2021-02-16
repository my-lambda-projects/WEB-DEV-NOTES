WRMCB = function (e) {
  var c = console;
  if (c && c.log && c.error) {
    c.log("Error running batched script.");
    c.error(e);
  }
};
try {
  /* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-date-picker', location = 'node_modules/@atlassian/aui/src/js/aui/date-picker.js' */
  ("undefined" === typeof window
    ? global
    : window
  ).__6fbbfaa987b189547da2206cf1ac829b = function () {
    function i(a) {
      return a && a.__esModule ? a : { default: a };
    }
    function f(a, e) {
      var d, c, b, i, h;
      d = {};
      i = w++;
      b = (0, g.default)(a);
      b.attr("data-aui-dp-uuid", i);
      e = g.default.extend(void 0, f.prototype.defaultOptions, e);
      d.getField = function () {
        return b;
      };
      d.getOptions = function () {
        return e;
      };
      c = function () {
        var a, c, j, r, s, u, o, p, k, m;
        d.hide = function () {
          k.hide();
        };
        d.show = function () {
          k.show();
        };
        d.setDate = function (b) {
          "undefined" !== typeof a && a.datepicker("setDate", b);
        };
        d.getDate = function () {
          if ("undefined" !== typeof a) return a.datepicker("getDate");
        };
        u = function (f) {
          m.off();
          if (e.hint) {
            var l = (0, g.default)("<div/>").addClass("aui-datepicker-hint");
            l.append("<span/>").text(e.hint);
            m.append(l);
          }
          a = (0, g.default)("<div/>");
          a.attr("data-aui-dp-popup-uuid", i);
          m.append(a);
          l = {
            dateFormat: e.dateFormat,
            defaultDate: b.val(),
            maxDate: b.attr("max"),
            minDate: b.attr("min"),
            nextText: ">",
            onSelect: function (a) {
              b.val(a);
              b.change();
              d.hide();
              o = !0;
              b.focus();
              e.onSelect && e.onSelect.call(this, a);
            },
            onChangeMonthYear: function () {
              setTimeout(k.refresh, 0);
            },
            prevText: "<",
          };
          g.default.extend(l, f);
          -1 < e.firstDay && (l.firstDay = e.firstDay);
          "undefined" !== typeof b.attr("step") &&
            t.log(
              "WARNING: The date picker polyfill currently does not support the step attribute!"
            );
          a.datepicker(l);
          (0, g.default)("body").on("keydown", c);
          b.on("focusout keydown", j);
          b.on("propertychange keyup input paste", s);
        };
        c = function (a) {
          var c = (0, g.default)(a.target),
            e = c.closest(m).length || c.is(b),
            f = c.closest(".ui-datepicker-header").length;
          (!e && !f) || a.keyCode === x.default.ESCAPE
            ? d.hide()
            : c[0] !== b[0] && a.preventDefault();
        };
        j = function () {
          p ||
            ((0, g.default)("body").on("focus blur click mousedown", "*", c),
            (p = !0));
        };
        r = function () {
          o ? (o = !1) : d.show();
        };
        s = function () {
          if ((0, g.default)(this).val())
            a.datepicker("setDate", b.val()),
              a.datepicker("option", {
                maxDate: b.attr("max"),
                minDate: b.attr("min"),
              });
        };
        d.destroyPolyfill = function () {
          d.hide();
          b.attr("placeholder", null);
          b.off("propertychange keyup input paste", s);
          b.off("focus click", r);
          b.off("focusout keydown", j);
          (0, g.default)("body").off("keydown", j);
          f.prototype.browserSupportsDateField && (b[0].type = "date");
          "undefined" !== typeof a && a.datepicker("destroy");
          delete d.destroyPolyfill;
          delete d.show;
          delete d.hide;
        };
        p = o = !1;
        e.languageCode in f.prototype.localisations || (e.languageCode = "");
        var v = f.prototype.localisations,
          q = "",
          n = 240;
        "large" === v.size && ((n = 325), (q = "aui-datepicker-dialog-large"));
        n = {
          hideCallback: function () {
            (0, g.default)("body").off("focus blur click mousedown", "*", c);
            p = false;
            h && h._datePickerPopup && delete h._datePickerPopup;
          },
          hideDelay: null,
          noBind: !0,
          persistent: !0,
          closeOthers: !1,
          width: n,
        };
        e.position &&
          (n.calculatePositions = function (a, b) {
            var c = (0, g.default)(a[0]);
            return e.position.call(this, c, b);
          });
        k = (0, y.default)(
          b,
          void 0,
          function (b, c, d) {
            if (typeof a === "undefined") {
              m = b;
              u(v);
            }
            if ((h = (0, g.default)(c).closest(".aui-inline-dialog").get(0)))
              h._datePickerPopup = k;
            d();
          },
          n
        );
        k.addClass("aui-datepicker-dialog");
        k.addClass(q);
        b.on("focus click", r);
        b.attr("placeholder", e.dateFormat);
        if (
          e.overrideBrowserDefault &&
          f.prototype.browserSupportsDateField &&
          ((b[0].type = "text"), (q = b[0].getAttribute("value")))
        )
          b[0].value = q;
      };
      d.reset = function () {
        "function" === typeof d.destroyPolyfill && d.destroyPolyfill();
        (!f.prototype.browserSupportsDateField || e.overrideBrowserDefault) &&
          c();
      };
      d.reset();
      return d;
    }
    var j = {};
    ("use strict");
    Object.defineProperty(j, "__esModule", { value: !0 });
    var g = i(__02fa0d2334b5d2f9701871403ba9d89a);
    __22e5f9dde23e62a30d105e8bdc75fa42;
    var t;
    var c = __8139e9a1368a0224fc430963d21930c8;
    if (c && c.__esModule) t = c;
    else {
      var a = {};
      if (null != c)
        for (var h in c)
          Object.prototype.hasOwnProperty.call(c, h) && (a[h] = c[h]);
      a.default = c;
      t = a;
    }
    h = __5e83f2691a9745a1c96cce360720d675;
    var c = i(__fb27ffae84b96c14bf339e62cefcf116),
      y = i(__c1cf6dc594e57ddb907bd3313fe8b424),
      x = i(__d92d89c196b4703777e79d25a9f94b7f),
      a = i(__ff21a71b857b101095156bf4ff8b27ac),
      w = 0;
    f.prototype.browserSupportsDateField = (0, h.supportsDateField)();
    f.prototype.defaultOptions = {
      overrideBrowserDefault: !1,
      firstDay: -1,
      languageCode: (0, g.default)("html").attr("lang") || "en-AU",
      dateFormat: g.default.datepicker.W3C,
    };
    f.prototype.localisations = {
      dayNames: [
        a.default.getText("ajs.datepicker.localisations.day-names.sunday"),
        a.default.getText("ajs.datepicker.localisations.day-names.monday"),
        a.default.getText("ajs.datepicker.localisations.day-names.tuesday"),
        a.default.getText("ajs.datepicker.localisations.day-names.wednesday"),
        a.default.getText("ajs.datepicker.localisations.day-names.thursday"),
        a.default.getText("ajs.datepicker.localisations.day-names.friday"),
        a.default.getText("ajs.datepicker.localisations.day-names.saturday"),
      ],
      dayNamesMin: [
        a.default.getText("ajs.datepicker.localisations.day-names-min.sunday"),
        a.default.getText("ajs.datepicker.localisations.day-names-min.monday"),
        a.default.getText("ajs.datepicker.localisations.day-names-min.tuesday"),
        a.default.getText(
          "ajs.datepicker.localisations.day-names-min.wednesday"
        ),
        a.default.getText(
          "ajs.datepicker.localisations.day-names-min.thursday"
        ),
        a.default.getText("ajs.datepicker.localisations.day-names-min.friday"),
        a.default.getText(
          "ajs.datepicker.localisations.day-names-min.saturday"
        ),
      ],
      firstDay: a.default.getText("ajs.datepicker.localisations.first-day"),
      isRTL:
        "true" === a.default.getText("ajs.datepicker.localisations.is-RTL")
          ? !0
          : !1,
      monthNames: [
        a.default.getText("ajs.datepicker.localisations.month-names.january"),
        a.default.getText("ajs.datepicker.localisations.month-names.february"),
        a.default.getText("ajs.datepicker.localisations.month-names.march"),
        a.default.getText("ajs.datepicker.localisations.month-names.april"),
        a.default.getText("ajs.datepicker.localisations.month-names.may"),
        a.default.getText("ajs.datepicker.localisations.month-names.june"),
        a.default.getText("ajs.datepicker.localisations.month-names.july"),
        a.default.getText("ajs.datepicker.localisations.month-names.august"),
        a.default.getText("ajs.datepicker.localisations.month-names.september"),
        a.default.getText("ajs.datepicker.localisations.month-names.october"),
        a.default.getText("ajs.datepicker.localisations.month-names.november"),
        a.default.getText("ajs.datepicker.localisations.month-names.december"),
      ],
      showMonthAfterYear:
        "true" ===
        a.default.getText("ajs.datepicker.localisations.show-month-after-year")
          ? !0
          : !1,
      yearSuffix: a.default.getText("ajs.datepicker.localisations.year-suffix"),
    };
    g.default.fn.datePicker = function (a) {
      return new f(this, a);
    };
    (0, c.default)("DatePicker", f);
    j.default = f;
    return (j = j["default"]);
  }.call(this);
} catch (e) {
  WRMCB(e);
}
