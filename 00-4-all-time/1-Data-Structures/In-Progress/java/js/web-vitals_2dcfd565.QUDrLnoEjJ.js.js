(window.webpackJsonp = window.webpackJsonp || []).push([
  ["web-vitals~2dcfd565"],
  {
    "7t6h": function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "getCLS", function () {
          return m;
        }),
        n.d(e, "getFCP", function () {
          return h;
        }),
        n.d(e, "getFID", function () {
          return y;
        }),
        n.d(e, "getLCP", function () {
          return w;
        }),
        n.d(e, "getTTFB", function () {
          return b;
        });
      var i,
        r,
        o = function () {
          return ""
            .concat(Date.now(), "-")
            .concat(Math.floor(8999999999999 * Math.random()) + 1e12);
        },
        a = function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
          return {
            name: t,
            value: e,
            delta: 0,
            entries: [],
            id: o(),
            isFinal: !1,
          };
        },
        u = function (t, e) {
          try {
            if (PerformanceObserver.supportedEntryTypes.includes(t)) {
              var n = new PerformanceObserver(function (t) {
                return t.getEntries().map(e);
              });
              return n.observe({ type: t, buffered: !0 }), n;
            }
          } catch (t) {}
        },
        s = !1,
        c = !1,
        f = function (t) {
          s = !t.persisted;
        },
        d = function () {
          addEventListener("pagehide", f),
            addEventListener("unload", function () {});
        },
        l = function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          c || (d(), (c = !0)),
            addEventListener(
              "visibilitychange",
              function (e) {
                var n = e.timeStamp;
                "hidden" === document.visibilityState &&
                  t({ timeStamp: n, isUnloading: s });
              },
              { capture: !0, once: e }
            );
        },
        p = function (t, e, n, i) {
          var r;
          return function () {
            n && e.isFinal && n.disconnect(),
              e.value >= 0 &&
                (i || e.isFinal || "hidden" === document.visibilityState) &&
                ((e.delta = e.value - (r || 0)),
                (e.delta || e.isFinal || void 0 === r) &&
                  (t(e), (r = e.value)));
          };
        },
        m = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = a("CLS", 0),
            i = function (t) {
              t.hadRecentInput ||
                ((n.value += t.value), n.entries.push(t), o());
            },
            r = u("layout-shift", i),
            o = p(t, n, r, e);
          l(function (t) {
            var e = t.isUnloading;
            r && r.takeRecords().map(i), e && (n.isFinal = !0), o();
          });
        },
        v = function () {
          return (
            void 0 === i &&
              ((i = "hidden" === document.visibilityState ? 0 : 1 / 0),
              l(function (t) {
                var e = t.timeStamp;
                return (i = e);
              }, !0)),
            {
              get timeStamp() {
                return i;
              },
            }
          );
        },
        h = function (t) {
          var e = a("FCP"),
            n = v(),
            i = u("paint", function (t) {
              "first-contentful-paint" === t.name &&
                t.startTime < n.timeStamp &&
                ((e.value = t.startTime),
                (e.isFinal = !0),
                e.entries.push(t),
                r());
            }),
            r = p(t, e, i);
        },
        y = function (t) {
          var e = a("FID"),
            n = v(),
            i = function (t) {
              t.startTime < n.timeStamp &&
                ((e.value = t.processingStart - t.startTime),
                e.entries.push(t),
                (e.isFinal = !0),
                o());
            },
            r = u("first-input", i),
            o = p(t, e, r);
          l(function () {
            r && (r.takeRecords().map(i), r.disconnect());
          }, !0),
            r ||
              (window.perfMetrics &&
                window.perfMetrics.onFirstInputDelay &&
                window.perfMetrics.onFirstInputDelay(function (t, i) {
                  i.timeStamp < n.timeStamp &&
                    ((e.value = t),
                    (e.isFinal = !0),
                    (e.entries = [
                      {
                        entryType: "first-input",
                        name: i.type,
                        target: i.target,
                        cancelable: i.cancelable,
                        startTime: i.timeStamp,
                        processingStart: i.timeStamp + t,
                      },
                    ]),
                    o());
                }));
        },
        g = function () {
          return (
            r ||
              (r = new Promise(function (t) {
                return ["scroll", "keydown", "pointerdown"].map(function (e) {
                  addEventListener(e, t, {
                    once: !0,
                    passive: !0,
                    capture: !0,
                  });
                });
              })),
            r
          );
        },
        w = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = a("LCP"),
            i = v(),
            r = function (t) {
              var e = t.startTime;
              e < i.timeStamp
                ? ((n.value = e), n.entries.push(t))
                : (n.isFinal = !0),
                s();
            },
            o = u("largest-contentful-paint", r),
            s = p(t, n, o, e),
            c = function () {
              n.isFinal || (o && o.takeRecords().map(r), (n.isFinal = !0), s());
            };
          g().then(c), l(c, !0);
        },
        b = function (t) {
          var e,
            n = a("TTFB");
          (e = function () {
            try {
              var e =
                performance.getEntriesByType("navigation")[0] ||
                (function () {
                  var t = performance.timing,
                    e = { entryType: "navigation", startTime: 0 };
                  for (var n in t)
                    "navigationStart" !== n &&
                      "toJSON" !== n &&
                      (e[n] = Math.max(t[n] - t.navigationStart, 0));
                  return e;
                })();
              (n.value = n.delta = e.responseStart),
                (n.entries = [e]),
                (n.isFinal = !0),
                t(n);
            } catch (t) {}
          }),
            "complete" === document.readyState
              ? setTimeout(e, 0)
              : addEventListener("pageshow", e);
        };
    },
    ELgO: function (t, e, n) {
      (function (n) {
        var i;
        !(function () {
          var r =
              "undefined" != typeof window && window === this
                ? this
                : void 0 !== n && null != n
                ? n
                : this,
            o =
              "function" == typeof Object.defineProperties
                ? Object.defineProperty
                : function (t, e, n) {
                    t != Array.prototype &&
                      t != Object.prototype &&
                      (t[e] = n.value);
                  };
          function a() {
            (a = function () {}), r.Symbol || (r.Symbol = s);
          }
          var u = 0;
          function s(t) {
            return "jscomp_symbol_" + (t || "") + u++;
          }
          function c() {
            a();
            var t = r.Symbol.iterator;
            t || (t = r.Symbol.iterator = r.Symbol("iterator")),
              "function" != typeof Array.prototype[t] &&
                o(Array.prototype, t, {
                  configurable: !0,
                  writable: !0,
                  value: function () {
                    return f(this);
                  },
                }),
              (c = function () {});
          }
          function f(t) {
            var e = 0;
            return (function (t) {
              return (
                c(),
                ((t = { next: t })[r.Symbol.iterator] = function () {
                  return this;
                }),
                t
              );
            })(function () {
              return e < t.length ? { done: !1, value: t[e++] } : { done: !0 };
            });
          }
          function d(t) {
            c();
            var e = t[Symbol.iterator];
            return e ? e.call(t) : f(t);
          }
          function l(t) {
            if (!(t instanceof Array)) {
              t = d(t);
              for (var e, n = []; !(e = t.next()).done; ) n.push(e.value);
              t = n;
            }
            return t;
          }
          var p = 0;
          var m = "img script iframe link audio video source".split(" ");
          function v(t, e) {
            for (var n = (t = d(t)).next(); !n.done; n = t.next())
              if (
                ((n = n.value),
                e.includes(n.nodeName.toLowerCase()) || v(n.children, e))
              )
                return !0;
            return !1;
          }
          function h(t, e) {
            if (2 < t.length) return performance.now();
            for (var n = [], i = (e = d(e)).next(); !i.done; i = e.next())
              (i = i.value),
                n.push({ timestamp: i.start, type: "requestStart" }),
                n.push({ timestamp: i.end, type: "requestEnd" });
            for (i = (e = d(t)).next(); !i.done; i = e.next())
              n.push({ timestamp: i.value, type: "requestStart" });
            for (
              n.sort(function (t, e) {
                return t.timestamp - e.timestamp;
              }),
                t = t.length,
                e = n.length - 1;
              0 <= e;
              e--
            )
              switch (((i = n[e]), i.type)) {
                case "requestStart":
                  t--;
                  break;
                case "requestEnd":
                  if (2 < ++t) return i.timestamp;
                  break;
                default:
                  throw Error("Internal Error: This should never happen");
              }
            return 0;
          }
          function y(t) {
            (t = t || {}),
              (this.w = !!t.useMutationObserver),
              (this.u = t.minValue || null),
              (t = window.__tti && window.__tti.e);
            var e = window.__tti && window.__tti.o;
            (this.a = t
              ? t.map(function (t) {
                  return { start: t.startTime, end: t.startTime + t.duration };
                })
              : []),
              e && e.disconnect(),
              (this.b = []),
              (this.f = new Map()),
              (this.j = null),
              (this.v = -1 / 0),
              (this.i = !1),
              (this.h = this.c = this.s = null),
              (function (t, e) {
                var n = XMLHttpRequest.prototype.send,
                  i = p++;
                XMLHttpRequest.prototype.send = function (r) {
                  for (var o = [], a = 0; a < arguments.length; ++a)
                    o[a - 0] = arguments[a];
                  var u = this;
                  return (
                    t(i),
                    this.addEventListener("readystatechange", function () {
                      4 === u.readyState && e(i);
                    }),
                    n.apply(this, o)
                  );
                };
              })(this.m.bind(this), this.l.bind(this)),
              (function (t, e) {
                var n = fetch;
                fetch = function (i) {
                  for (var r = [], o = 0; o < arguments.length; ++o)
                    r[o - 0] = arguments[o];
                  return new Promise(function (i, o) {
                    var a = p++;
                    t(a),
                      n.apply(null, [].concat(l(r))).then(
                        function (t) {
                          e(a), i(t);
                        },
                        function (t) {
                          e(t), o(t);
                        }
                      );
                  });
                };
              })(this.m.bind(this), this.l.bind(this)),
              (function (t) {
                (t.c = new PerformanceObserver(function (e) {
                  for (
                    var n = (e = d(e.getEntries())).next();
                    !n.done;
                    n = e.next()
                  )
                    if (
                      ("resource" === (n = n.value).entryType &&
                        (t.b.push({ start: n.fetchStart, end: n.responseEnd }),
                        w(t, h(t.g, t.b) + 5e3)),
                      "longtask" === n.entryType)
                    ) {
                      var i = n.startTime + n.duration;
                      t.a.push({ start: n.startTime, end: i }), w(t, i + 5e3);
                    }
                })),
                  t.c.observe({ entryTypes: ["longtask", "resource"] });
              })(this),
              this.w &&
                (this.h = (function (t) {
                  var e = new MutationObserver(function (e) {
                    for (var n = (e = d(e)).next(); !n.done; n = e.next())
                      (("childList" == (n = n.value).type &&
                        v(n.addedNodes, m)) ||
                        ("attributes" == n.type &&
                          m.includes(n.target.tagName.toLowerCase()))) &&
                        t(n);
                  });
                  return (
                    e.observe(document, {
                      attributes: !0,
                      childList: !0,
                      subtree: !0,
                      attributeFilter: ["href", "src"],
                    }),
                    e
                  );
                })(this.B.bind(this)));
          }
          function g(t) {
            t.i = !0;
            var e = 0 < t.a.length ? t.a[t.a.length - 1].end : 0,
              n = h(t.g, t.b);
            w(t, Math.max(n + 5e3, e));
          }
          function w(t, e) {
            !t.i ||
              t.v > e ||
              (clearTimeout(t.j),
              (t.j = setTimeout(function () {
                var e = performance.timing.navigationStart,
                  n = h(t.g, t.b);
                e =
                  (window.a && window.a.A ? 1e3 * window.a.A().C - e : 0) ||
                  performance.timing.domContentLoadedEventEnd - e;
                if (t.u) var i = t.u;
                else
                  performance.timing.domContentLoadedEventEnd
                    ? (i =
                        (i = performance.timing).domContentLoadedEventEnd -
                        i.navigationStart)
                    : (i = null);
                var r = performance.now();
                null === i && w(t, Math.max(n + 5e3, r + 1e3));
                var o = t.a;
                5e3 > r - n
                  ? (n = null)
                  : (n =
                      5e3 > r - (n = o.length ? o[o.length - 1].end : e)
                        ? null
                        : Math.max(n, i)),
                  n &&
                    (t.s(n),
                    clearTimeout(t.j),
                    (t.i = !1),
                    t.c && t.c.disconnect(),
                    t.h && t.h.disconnect()),
                  w(t, performance.now() + 1e3);
              }, e - performance.now())),
              (t.v = e));
          }
          (y.prototype.getFirstConsistentlyInteractive = function () {
            var t = this;
            return new Promise(function (e) {
              (t.s = e),
                "complete" == document.readyState
                  ? g(t)
                  : window.addEventListener("load", function () {
                      g(t);
                    });
            });
          }),
            (y.prototype.m = function (t) {
              this.f.set(t, performance.now());
            }),
            (y.prototype.l = function (t) {
              this.f.delete(t);
            }),
            (y.prototype.B = function () {
              w(this, performance.now() + 5e3);
            }),
            r.Object.defineProperties(y.prototype, {
              g: {
                configurable: !0,
                enumerable: !0,
                get: function () {
                  return [].concat(l(this.f.values()));
                },
              },
            });
          var b = {
            getFirstConsistentlyInteractive: function (t) {
              return (
                (t = t || {}),
                "PerformanceLongTaskTiming" in window
                  ? new y(t).getFirstConsistentlyInteractive()
                  : Promise.resolve(null)
              );
            },
          };
          t.exports
            ? (t.exports = b)
            : void 0 ===
                (i = function () {
                  return b;
                }.apply(e, [])) || (t.exports = i);
        })();
      }.call(this, n("fRV1")));
    },
  },
]);
//# sourceMappingURL=web-vitals~2dcfd565.QUDrLnoEjJ.js.map
