WRMCB = function (e) {
  var c = console;
  if (c && c.log && c.error) {
    c.log("Error running batched script.");
    c.error(e);
  }
};
try {
  /* module-key = 'confluence.web.resources:es6-promise', location = 'includes/js/third-party/es6-promise.js' */
  (function () {
    function y(a) {
      return "function" === typeof a;
    }
    function K() {
      return function () {
        process.nextTick(n);
      };
    }
    function L() {
      return function () {
        D(n);
      };
    }
    function M() {
      var a = 0,
        b = new E(n),
        c = document.createTextNode("");
      b.observe(c, { characterData: !0 });
      return function () {
        c.data = a = ++a % 2;
      };
    }
    function N() {
      var a = new MessageChannel();
      a.port1.onmessage = n;
      return function () {
        a.port2.postMessage(0);
      };
    }
    function F() {
      return function () {
        setTimeout(n, 1);
      };
    }
    function n() {
      for (var a = 0; a < p; a += 2)
        (0, q[a])(q[a + 1]), (q[a] = void 0), (q[a + 1] = void 0);
      p = 0;
    }
    function O() {
      try {
        var a = require("vertx");
        D = a.runOnLoop || a.runOnContext;
        return L();
      } catch (b) {
        return F();
      }
    }
    function r() {}
    function P(a, b, c, d) {
      try {
        a.call(b, c, d);
      } catch (g) {
        return g;
      }
    }
    function Q(a, b, c) {
      l(function (a) {
        var d = !1,
          e = P(
            c,
            b,
            function (c) {
              d || ((d = !0), b !== c ? t(a, c) : m(a, c));
            },
            function (b) {
              d || ((d = !0), f(a, b));
            },
            "Settle: " + (a._label || " unknown promise")
          );
        !d && e && ((d = !0), f(a, e));
      }, a);
    }
    function R(a, b) {
      1 === b._state
        ? m(a, b._result)
        : 2 === b._state
        ? f(a, b._result)
        : v(
            b,
            void 0,
            function (b) {
              t(a, b);
            },
            function (b) {
              f(a, b);
            }
          );
    }
    function t(a, b) {
      if (a === b)
        f(a, new TypeError("You cannot resolve a promise with itself"));
      else if ("function" === typeof b || ("object" === typeof b && null !== b))
        if (b.constructor === a.constructor) R(a, b);
        else {
          var c;
          try {
            c = b.then;
          } catch (d) {
            (w.error = d), (c = w);
          }
          c === w
            ? f(a, w.error)
            : void 0 === c
            ? m(a, b)
            : y(c)
            ? Q(a, b, c)
            : m(a, b);
        }
      else m(a, b);
    }
    function S(a) {
      a._onerror && a._onerror(a._result);
      z(a);
    }
    function m(a, b) {
      void 0 === a._state &&
        ((a._result = b),
        (a._state = 1),
        0 !== a._subscribers.length && l(z, a));
    }
    function f(a, b) {
      void 0 === a._state && ((a._state = 2), (a._result = b), l(S, a));
    }
    function v(a, b, c, d) {
      var g = a._subscribers,
        e = g.length;
      a._onerror = null;
      g[e] = b;
      g[e + 1] = c;
      g[e + 2] = d;
      0 === e && a._state && l(z, a);
    }
    function z(a) {
      var b = a._subscribers,
        c = a._state;
      if (0 !== b.length) {
        for (var d, g, e = a._result, f = 0; f < b.length; f += 3)
          (d = b[f]), (g = b[f + c]), d ? G(c, d, g, e) : g(e);
        a._subscribers.length = 0;
      }
    }
    function H() {
      this.error = null;
    }
    function G(a, b, c, d) {
      var g = y(c),
        e,
        h,
        k,
        l;
      if (g) {
        try {
          e = c(d);
        } catch (T) {
          (A.error = T), (e = A);
        }
        e === A ? ((l = !0), (h = e.error), (e = null)) : (k = !0);
        if (b === e) {
          f(
            b,
            new TypeError(
              "A promises callback cannot return that same promise."
            )
          );
          return;
        }
      } else (e = d), (k = !0);
      void 0 === b._state &&
        (g && k
          ? t(b, e)
          : l
          ? f(b, h)
          : 1 === a
          ? m(b, e)
          : 2 === a && f(b, e));
    }
    function U(a, b) {
      try {
        b(
          function (b) {
            t(a, b);
          },
          function (b) {
            f(a, b);
          }
        );
      } catch (c) {
        f(a, c);
      }
    }
    function k(a, b) {
      this._instanceConstructor = a;
      this.promise = new a(r);
      this._validateInput(b)
        ? ((this._input = b),
          (this._remaining = this.length = b.length),
          this._init(),
          0 === this.length
            ? m(this.promise, this._result)
            : ((this.length = this.length || 0),
              this._enumerate(),
              0 === this._remaining && m(this.promise, this._result)))
        : f(this.promise, this._validationError());
    }
    function h(a) {
      this._id = V++;
      this._result = this._state = void 0;
      this._subscribers = [];
      if (r !== a) {
        if (!y(a))
          throw new TypeError(
            "You must pass a resolver function as the first argument to the promise constructor"
          );
        if (!(this instanceof h))
          throw new TypeError(
            "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
          );
        U(this, a);
      }
    }
    var I = Array.isArray
        ? Array.isArray
        : function (a) {
            return "[object Array]" === Object.prototype.toString.call(a);
          },
      p = 0,
      D,
      B,
      l = function (a, b) {
        q[p] = a;
        q[p + 1] = b;
        p += 2;
        2 === p && (B ? B(n) : J());
      },
      u = "undefined" !== typeof window ? window : void 0,
      x = u || {},
      E = x.MutationObserver || x.WebKitMutationObserver,
      x =
        "undefined" !== typeof process &&
        "[object process]" === {}.toString.call(process),
      W =
        "undefined" !== typeof Uint8ClampedArray &&
        "undefined" !== typeof importScripts &&
        "undefined" !== typeof MessageChannel,
      q = Array(1e3),
      J;
    J = x
      ? K()
      : E
      ? M()
      : W
      ? N()
      : void 0 === u && "function" === typeof require
      ? O()
      : F();
    var w = new H(),
      A = new H();
    k.prototype._validateInput = function (a) {
      return I(a);
    };
    k.prototype._validationError = function () {
      return Error("Array Methods must be provided an Array");
    };
    k.prototype._init = function () {
      this._result = Array(this.length);
    };
    k.prototype._enumerate = function () {
      for (
        var a = this.length, b = this.promise, c = this._input, d = 0;
        void 0 === b._state && d < a;
        d++
      )
        this._eachEntry(c[d], d);
    };
    k.prototype._eachEntry = function (a, b) {
      var c = this._instanceConstructor;
      "object" === typeof a && null !== a
        ? a.constructor === c && void 0 !== a._state
          ? ((a._onerror = null), this._settledAt(a._state, b, a._result))
          : this._willSettleAt(c.resolve(a), b)
        : (this._remaining--, (this._result[b] = a));
    };
    k.prototype._settledAt = function (a, b, c) {
      var d = this.promise;
      void 0 === d._state &&
        (this._remaining--, 2 === a ? f(d, c) : (this._result[b] = c));
      0 === this._remaining && m(d, this._result);
    };
    k.prototype._willSettleAt = function (a, b) {
      var c = this;
      v(
        a,
        void 0,
        function (a) {
          c._settledAt(1, b, a);
        },
        function (a) {
          c._settledAt(2, b, a);
        }
      );
    };
    var V = 0;
    h.all = function (a) {
      return new k(this, a).promise;
    };
    h.race = function (a) {
      function b(a) {
        t(d, a);
      }
      function c(a) {
        f(d, a);
      }
      var d = new this(r);
      if (!I(a))
        return f(d, new TypeError("You must pass an array to race.")), d;
      for (var g = a.length, e = 0; void 0 === d._state && e < g; e++)
        v(this.resolve(a[e]), void 0, b, c);
      return d;
    };
    h.resolve = function (a) {
      if (a && "object" === typeof a && a.constructor === this) return a;
      var b = new this(r);
      t(b, a);
      return b;
    };
    h.reject = function (a) {
      var b = new this(r);
      f(b, a);
      return b;
    };
    h._setScheduler = function (a) {
      B = a;
    };
    h._setAsap = function (a) {
      l = a;
    };
    h._asap = l;
    h.prototype = {
      constructor: h,
      then: function (a, b) {
        var c = this._state;
        if ((1 === c && !a) || (2 === c && !b)) return this;
        var d = new this.constructor(r),
          f = this._result;
        if (c) {
          var e = arguments[c - 1];
          l(function () {
            G(c, d, e, f);
          });
        } else v(this, d, a, b);
        return d;
      },
      catch: function (a) {
        return this.then(null, a);
      },
    };
    var u = function () {
        var a;
        if ("undefined" !== typeof global) a = global;
        else if ("undefined" !== typeof self) a = self;
        else
          try {
            a = Function("return this")();
          } catch (c) {
            throw Error(
              "polyfill failed because global object is unavailable in this environment"
            );
          }
        var b = a.Promise;
        if (
          !b ||
          "[object Promise]" !== Object.prototype.toString.call(b.resolve()) ||
          b.cast
        )
          a.Promise = h;
      },
      C = { Promise: h, polyfill: u };
    "function" === typeof define && define.amd
      ? define(function () {
          return C;
        })
      : "undefined" !== typeof module && module.exports
      ? (module.exports = C)
      : "undefined" !== typeof this && (this.ES6Promise = C);
    u();
  }.call(this));
} catch (e) {
  WRMCB(e);
}
