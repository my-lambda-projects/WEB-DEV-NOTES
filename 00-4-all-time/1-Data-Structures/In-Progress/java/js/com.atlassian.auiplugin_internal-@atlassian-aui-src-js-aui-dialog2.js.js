WRMCB = function (e) {
  var c = console;
  if (c && c.log && c.error) {
    c.log("Error running batched script.");
    c.error(e);
  }
};
try {
  /* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-dialog2', location = 'node_modules/@atlassian/aui/src/js/aui/dialog2.js' */
  ("undefined" === typeof window
    ? global
    : window
  ).__abec049fae3e0e24b94d659c3600ba01 = function () {
    function f(a) {
      return a && a.__esModule ? a : { default: a };
    }
    function e(a) {
      var c = (this.$el = a
        ? (0, g.default)(a)
        : (0, g.default)(aui.dialog.dialog2({})));
      g.default.each(i, function (a, b) {
        var d = "data-" + a;
        c[0].hasAttribute(d) || c.attr(d, b);
      });
    }
    var h = {};
    ("use strict");
    Object.defineProperty(h, "__esModule", { value: !0 });
    var g = f(__02fa0d2334b5d2f9701871403ba9d89a),
      j = f(__8f23956215d754ca94df621efa6b0438),
      k = f(__fb27ffae84b96c14bf339e62cefcf116),
      b = f(__b16464bbf0aa314bacb753553ada098e),
      l = f(__ecaadce486e7be7002d8453fc51f9873),
      i = { "aui-focus": "false", "aui-blanketed": "true" };
    e.prototype.on = function (a, c) {
      (0, b.default)(this.$el).on(a, c);
      return this;
    };
    e.prototype.off = function (a, c) {
      (0, b.default)(this.$el).off(a, c);
      return this;
    };
    e.prototype.show = function () {
      (0, b.default)(this.$el).show();
      return this;
    };
    e.prototype.hide = function () {
      (0, b.default)(this.$el).hide();
      return this;
    };
    e.prototype.remove = function () {
      (0, b.default)(this.$el).remove();
      return this;
    };
    e.prototype.isVisible = function () {
      return (0, b.default)(this.$el).isVisible();
    };
    var d = (0, l.default)("dialog2", e);
    d.on = function (a, c) {
      b.default.on(a, ".aui-dialog2", c);
      return this;
    };
    d.off = function (a, c) {
      b.default.off(a, ".aui-dialog2", c);
      return this;
    };
    (0, g.default)(document).on(
      "click",
      ".aui-dialog2-header-close",
      function (a) {
        a.preventDefault();
        d((0, g.default)(this).closest(".aui-dialog2")).hide();
      }
    );
    d.on("show", function (a, c) {
      var b;
      [
        ".aui-dialog2-content",
        ".aui-dialog2-footer",
        ".aui-dialog2-header",
      ].some(function (a) {
        b = c.find(a + " :aui-tabbable");
        return b.length;
      });
      b && b.first().focus();
    });
    d.on("hide", function (a, c) {
      var d = (0, b.default)(c);
      c.data("aui-remove-on-hide") && d.remove();
    });
    (0, j.default)("aui/dialog2", d);
    (0, k.default)("dialog2", d);
    h.default = d;
    return (h = h["default"]);
  }.call(this);
} catch (e) {
  WRMCB(e);
}
