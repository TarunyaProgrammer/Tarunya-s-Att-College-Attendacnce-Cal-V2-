function Dp(u, c) {
  for (var s = 0; s < c.length; s++) {
    const r = c[s];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const f in r)
        if (f !== "default" && !(f in u)) {
          const m = Object.getOwnPropertyDescriptor(r, f);
          m &&
            Object.defineProperty(
              u,
              f,
              m.get ? m : { enumerable: !0, get: () => r[f] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(u, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const c = document.createElement("link").relList;
  if (c && c.supports && c.supports("modulepreload")) return;
  for (const f of document.querySelectorAll('link[rel="modulepreload"]')) r(f);
  new MutationObserver((f) => {
    for (const m of f)
      if (m.type === "childList")
        for (const h of m.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && r(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(f) {
    const m = {};
    return (
      f.integrity && (m.integrity = f.integrity),
      f.referrerPolicy && (m.referrerPolicy = f.referrerPolicy),
      f.crossOrigin === "use-credentials"
        ? (m.credentials = "include")
        : f.crossOrigin === "anonymous"
          ? (m.credentials = "omit")
          : (m.credentials = "same-origin"),
      m
    );
  }
  function r(f) {
    if (f.ep) return;
    f.ep = !0;
    const m = s(f);
    fetch(f.href, m);
  }
})();
function lm(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default")
    ? u.default
    : u;
}
var Qr = { exports: {} },
  Qa = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Th;
function Cp() {
  if (Th) return Qa;
  Th = 1;
  var u = Symbol.for("react.transitional.element"),
    c = Symbol.for("react.fragment");
  function s(r, f, m) {
    var h = null;
    if (
      (m !== void 0 && (h = "" + m),
      f.key !== void 0 && (h = "" + f.key),
      "key" in f)
    ) {
      m = {};
      for (var v in f) v !== "key" && (m[v] = f[v]);
    } else m = f;
    return (
      (f = m.ref),
      { $$typeof: u, type: r, key: h, ref: f !== void 0 ? f : null, props: m }
    );
  }
  return ((Qa.Fragment = c), (Qa.jsx = s), (Qa.jsxs = s), Qa);
}
var Ah;
function wp() {
  return (Ah || ((Ah = 1), (Qr.exports = Cp())), Qr.exports);
}
var U = wp(),
  Zr = { exports: {} },
  rt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xh;
function Up() {
  if (xh) return rt;
  xh = 1;
  var u = Symbol.for("react.transitional.element"),
    c = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    f = Symbol.for("react.profiler"),
    m = Symbol.for("react.consumer"),
    h = Symbol.for("react.context"),
    v = Symbol.for("react.forward_ref"),
    b = Symbol.for("react.suspense"),
    y = Symbol.for("react.memo"),
    E = Symbol.for("react.lazy"),
    N = Symbol.iterator;
  function B(g) {
    return g === null || typeof g != "object"
      ? null
      : ((g = (N && g[N]) || g["@@iterator"]),
        typeof g == "function" ? g : null);
  }
  var Y = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    z = Object.assign,
    H = {};
  function q(g, j, Q) {
    ((this.props = g),
      (this.context = j),
      (this.refs = H),
      (this.updater = Q || Y));
  }
  ((q.prototype.isReactComponent = {}),
    (q.prototype.setState = function (g, j) {
      if (typeof g != "object" && typeof g != "function" && g != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, g, j, "setState");
    }),
    (q.prototype.forceUpdate = function (g) {
      this.updater.enqueueForceUpdate(this, g, "forceUpdate");
    }));
  function k() {}
  k.prototype = q.prototype;
  function P(g, j, Q) {
    ((this.props = g),
      (this.context = j),
      (this.refs = H),
      (this.updater = Q || Y));
  }
  var tt = (P.prototype = new k());
  ((tt.constructor = P), z(tt, q.prototype), (tt.isPureReactComponent = !0));
  var ft = Array.isArray,
    Z = { H: null, A: null, T: null, S: null, V: null },
    X = Object.prototype.hasOwnProperty;
  function st(g, j, Q, G, I, ht) {
    return (
      (Q = ht.ref),
      { $$typeof: u, type: g, key: j, ref: Q !== void 0 ? Q : null, props: ht }
    );
  }
  function it(g, j) {
    return st(g.type, j, void 0, void 0, void 0, g.props);
  }
  function Tt(g) {
    return typeof g == "object" && g !== null && g.$$typeof === u;
  }
  function ue(g) {
    var j = { "=": "=0", ":": "=2" };
    return (
      "$" +
      g.replace(/[=:]/g, function (Q) {
        return j[Q];
      })
    );
  }
  var Pt = /\/+/g;
  function wt(g, j) {
    return typeof g == "object" && g !== null && g.key != null
      ? ue("" + g.key)
      : j.toString(36);
  }
  function It() {}
  function Xt(g) {
    switch (g.status) {
      case "fulfilled":
        return g.value;
      case "rejected":
        throw g.reason;
      default:
        switch (
          (typeof g.status == "string"
            ? g.then(It, It)
            : ((g.status = "pending"),
              g.then(
                function (j) {
                  g.status === "pending" &&
                    ((g.status = "fulfilled"), (g.value = j));
                },
                function (j) {
                  g.status === "pending" &&
                    ((g.status = "rejected"), (g.reason = j));
                },
              )),
          g.status)
        ) {
          case "fulfilled":
            return g.value;
          case "rejected":
            throw g.reason;
        }
    }
    throw g;
  }
  function _t(g, j, Q, G, I) {
    var ht = typeof g;
    (ht === "undefined" || ht === "boolean") && (g = null);
    var nt = !1;
    if (g === null) nt = !0;
    else
      switch (ht) {
        case "bigint":
        case "string":
        case "number":
          nt = !0;
          break;
        case "object":
          switch (g.$$typeof) {
            case u:
            case c:
              nt = !0;
              break;
            case E:
              return ((nt = g._init), _t(nt(g._payload), j, Q, G, I));
          }
      }
    if (nt)
      return (
        (I = I(g)),
        (nt = G === "" ? "." + wt(g, 0) : G),
        ft(I)
          ? ((Q = ""),
            nt != null && (Q = nt.replace(Pt, "$&/") + "/"),
            _t(I, j, Q, "", function (il) {
              return il;
            }))
          : I != null &&
            (Tt(I) &&
              (I = it(
                I,
                Q +
                  (I.key == null || (g && g.key === I.key)
                    ? ""
                    : ("" + I.key).replace(Pt, "$&/") + "/") +
                  nt,
              )),
            j.push(I)),
        1
      );
    nt = 0;
    var Vt = G === "" ? "." : G + ":";
    if (ft(g))
      for (var Mt = 0; Mt < g.length; Mt++)
        ((G = g[Mt]), (ht = Vt + wt(G, Mt)), (nt += _t(G, j, Q, ht, I)));
    else if (((Mt = B(g)), typeof Mt == "function"))
      for (g = Mt.call(g), Mt = 0; !(G = g.next()).done; )
        ((G = G.value), (ht = Vt + wt(G, Mt++)), (nt += _t(G, j, Q, ht, I)));
    else if (ht === "object") {
      if (typeof g.then == "function") return _t(Xt(g), j, Q, G, I);
      throw (
        (j = String(g)),
        Error(
          "Objects are not valid as a React child (found: " +
            (j === "[object Object]"
              ? "object with keys {" + Object.keys(g).join(", ") + "}"
              : j) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return nt;
  }
  function R(g, j, Q) {
    if (g == null) return g;
    var G = [],
      I = 0;
    return (
      _t(g, G, "", "", function (ht) {
        return j.call(Q, ht, I++);
      }),
      G
    );
  }
  function L(g) {
    if (g._status === -1) {
      var j = g._result;
      ((j = j()),
        j.then(
          function (Q) {
            (g._status === 0 || g._status === -1) &&
              ((g._status = 1), (g._result = Q));
          },
          function (Q) {
            (g._status === 0 || g._status === -1) &&
              ((g._status = 2), (g._result = Q));
          },
        ),
        g._status === -1 && ((g._status = 0), (g._result = j)));
    }
    if (g._status === 1) return g._result.default;
    throw g._result;
  }
  var K =
    typeof reportError == "function"
      ? reportError
      : function (g) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var j = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof g == "object" &&
                g !== null &&
                typeof g.message == "string"
                  ? String(g.message)
                  : String(g),
              error: g,
            });
            if (!window.dispatchEvent(j)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", g);
            return;
          }
          console.error(g);
        };
  function ct() {}
  return (
    (rt.Children = {
      map: R,
      forEach: function (g, j, Q) {
        R(
          g,
          function () {
            j.apply(this, arguments);
          },
          Q,
        );
      },
      count: function (g) {
        var j = 0;
        return (
          R(g, function () {
            j++;
          }),
          j
        );
      },
      toArray: function (g) {
        return (
          R(g, function (j) {
            return j;
          }) || []
        );
      },
      only: function (g) {
        if (!Tt(g))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return g;
      },
    }),
    (rt.Component = q),
    (rt.Fragment = s),
    (rt.Profiler = f),
    (rt.PureComponent = P),
    (rt.StrictMode = r),
    (rt.Suspense = b),
    (rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Z),
    (rt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (g) {
        return Z.H.useMemoCache(g);
      },
    }),
    (rt.cache = function (g) {
      return function () {
        return g.apply(null, arguments);
      };
    }),
    (rt.cloneElement = function (g, j, Q) {
      if (g == null)
        throw Error(
          "The argument must be a React element, but you passed " + g + ".",
        );
      var G = z({}, g.props),
        I = g.key,
        ht = void 0;
      if (j != null)
        for (nt in (j.ref !== void 0 && (ht = void 0),
        j.key !== void 0 && (I = "" + j.key),
        j))
          !X.call(j, nt) ||
            nt === "key" ||
            nt === "__self" ||
            nt === "__source" ||
            (nt === "ref" && j.ref === void 0) ||
            (G[nt] = j[nt]);
      var nt = arguments.length - 2;
      if (nt === 1) G.children = Q;
      else if (1 < nt) {
        for (var Vt = Array(nt), Mt = 0; Mt < nt; Mt++)
          Vt[Mt] = arguments[Mt + 2];
        G.children = Vt;
      }
      return st(g.type, I, void 0, void 0, ht, G);
    }),
    (rt.createContext = function (g) {
      return (
        (g = {
          $$typeof: h,
          _currentValue: g,
          _currentValue2: g,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (g.Provider = g),
        (g.Consumer = { $$typeof: m, _context: g }),
        g
      );
    }),
    (rt.createElement = function (g, j, Q) {
      var G,
        I = {},
        ht = null;
      if (j != null)
        for (G in (j.key !== void 0 && (ht = "" + j.key), j))
          X.call(j, G) &&
            G !== "key" &&
            G !== "__self" &&
            G !== "__source" &&
            (I[G] = j[G]);
      var nt = arguments.length - 2;
      if (nt === 1) I.children = Q;
      else if (1 < nt) {
        for (var Vt = Array(nt), Mt = 0; Mt < nt; Mt++)
          Vt[Mt] = arguments[Mt + 2];
        I.children = Vt;
      }
      if (g && g.defaultProps)
        for (G in ((nt = g.defaultProps), nt))
          I[G] === void 0 && (I[G] = nt[G]);
      return st(g, ht, void 0, void 0, null, I);
    }),
    (rt.createRef = function () {
      return { current: null };
    }),
    (rt.forwardRef = function (g) {
      return { $$typeof: v, render: g };
    }),
    (rt.isValidElement = Tt),
    (rt.lazy = function (g) {
      return { $$typeof: E, _payload: { _status: -1, _result: g }, _init: L };
    }),
    (rt.memo = function (g, j) {
      return { $$typeof: y, type: g, compare: j === void 0 ? null : j };
    }),
    (rt.startTransition = function (g) {
      var j = Z.T,
        Q = {};
      Z.T = Q;
      try {
        var G = g(),
          I = Z.S;
        (I !== null && I(Q, G),
          typeof G == "object" &&
            G !== null &&
            typeof G.then == "function" &&
            G.then(ct, K));
      } catch (ht) {
        K(ht);
      } finally {
        Z.T = j;
      }
    }),
    (rt.unstable_useCacheRefresh = function () {
      return Z.H.useCacheRefresh();
    }),
    (rt.use = function (g) {
      return Z.H.use(g);
    }),
    (rt.useActionState = function (g, j, Q) {
      return Z.H.useActionState(g, j, Q);
    }),
    (rt.useCallback = function (g, j) {
      return Z.H.useCallback(g, j);
    }),
    (rt.useContext = function (g) {
      return Z.H.useContext(g);
    }),
    (rt.useDebugValue = function () {}),
    (rt.useDeferredValue = function (g, j) {
      return Z.H.useDeferredValue(g, j);
    }),
    (rt.useEffect = function (g, j, Q) {
      var G = Z.H;
      if (typeof Q == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React.",
        );
      return G.useEffect(g, j);
    }),
    (rt.useId = function () {
      return Z.H.useId();
    }),
    (rt.useImperativeHandle = function (g, j, Q) {
      return Z.H.useImperativeHandle(g, j, Q);
    }),
    (rt.useInsertionEffect = function (g, j) {
      return Z.H.useInsertionEffect(g, j);
    }),
    (rt.useLayoutEffect = function (g, j) {
      return Z.H.useLayoutEffect(g, j);
    }),
    (rt.useMemo = function (g, j) {
      return Z.H.useMemo(g, j);
    }),
    (rt.useOptimistic = function (g, j) {
      return Z.H.useOptimistic(g, j);
    }),
    (rt.useReducer = function (g, j, Q) {
      return Z.H.useReducer(g, j, Q);
    }),
    (rt.useRef = function (g) {
      return Z.H.useRef(g);
    }),
    (rt.useState = function (g) {
      return Z.H.useState(g);
    }),
    (rt.useSyncExternalStore = function (g, j, Q) {
      return Z.H.useSyncExternalStore(g, j, Q);
    }),
    (rt.useTransition = function () {
      return Z.H.useTransition();
    }),
    (rt.version = "19.1.0"),
    rt
  );
}
var Rh;
function gs() {
  return (Rh || ((Rh = 1), (Zr.exports = Up())), Zr.exports);
}
var V = gs();
const al = lm(V),
  jp = Dp({ __proto__: null, default: al }, [V]);
var Kr = { exports: {} },
  Za = {},
  Jr = { exports: {} },
  kr = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Oh;
function Bp() {
  return (
    Oh ||
      ((Oh = 1),
      (function (u) {
        function c(R, L) {
          var K = R.length;
          R.push(L);
          t: for (; 0 < K; ) {
            var ct = (K - 1) >>> 1,
              g = R[ct];
            if (0 < f(g, L)) ((R[ct] = L), (R[K] = g), (K = ct));
            else break t;
          }
        }
        function s(R) {
          return R.length === 0 ? null : R[0];
        }
        function r(R) {
          if (R.length === 0) return null;
          var L = R[0],
            K = R.pop();
          if (K !== L) {
            R[0] = K;
            t: for (var ct = 0, g = R.length, j = g >>> 1; ct < j; ) {
              var Q = 2 * (ct + 1) - 1,
                G = R[Q],
                I = Q + 1,
                ht = R[I];
              if (0 > f(G, K))
                I < g && 0 > f(ht, G)
                  ? ((R[ct] = ht), (R[I] = K), (ct = I))
                  : ((R[ct] = G), (R[Q] = K), (ct = Q));
              else if (I < g && 0 > f(ht, K))
                ((R[ct] = ht), (R[I] = K), (ct = I));
              else break t;
            }
          }
          return L;
        }
        function f(R, L) {
          var K = R.sortIndex - L.sortIndex;
          return K !== 0 ? K : R.id - L.id;
        }
        if (
          ((u.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var m = performance;
          u.unstable_now = function () {
            return m.now();
          };
        } else {
          var h = Date,
            v = h.now();
          u.unstable_now = function () {
            return h.now() - v;
          };
        }
        var b = [],
          y = [],
          E = 1,
          N = null,
          B = 3,
          Y = !1,
          z = !1,
          H = !1,
          q = !1,
          k = typeof setTimeout == "function" ? setTimeout : null,
          P = typeof clearTimeout == "function" ? clearTimeout : null,
          tt = typeof setImmediate < "u" ? setImmediate : null;
        function ft(R) {
          for (var L = s(y); L !== null; ) {
            if (L.callback === null) r(y);
            else if (L.startTime <= R)
              (r(y), (L.sortIndex = L.expirationTime), c(b, L));
            else break;
            L = s(y);
          }
        }
        function Z(R) {
          if (((H = !1), ft(R), !z))
            if (s(b) !== null) ((z = !0), X || ((X = !0), wt()));
            else {
              var L = s(y);
              L !== null && _t(Z, L.startTime - R);
            }
        }
        var X = !1,
          st = -1,
          it = 5,
          Tt = -1;
        function ue() {
          return q ? !0 : !(u.unstable_now() - Tt < it);
        }
        function Pt() {
          if (((q = !1), X)) {
            var R = u.unstable_now();
            Tt = R;
            var L = !0;
            try {
              t: {
                ((z = !1), H && ((H = !1), P(st), (st = -1)), (Y = !0));
                var K = B;
                try {
                  e: {
                    for (
                      ft(R), N = s(b);
                      N !== null && !(N.expirationTime > R && ue());
                    ) {
                      var ct = N.callback;
                      if (typeof ct == "function") {
                        ((N.callback = null), (B = N.priorityLevel));
                        var g = ct(N.expirationTime <= R);
                        if (((R = u.unstable_now()), typeof g == "function")) {
                          ((N.callback = g), ft(R), (L = !0));
                          break e;
                        }
                        (N === s(b) && r(b), ft(R));
                      } else r(b);
                      N = s(b);
                    }
                    if (N !== null) L = !0;
                    else {
                      var j = s(y);
                      (j !== null && _t(Z, j.startTime - R), (L = !1));
                    }
                  }
                  break t;
                } finally {
                  ((N = null), (B = K), (Y = !1));
                }
                L = void 0;
              }
            } finally {
              L ? wt() : (X = !1);
            }
          }
        }
        var wt;
        if (typeof tt == "function")
          wt = function () {
            tt(Pt);
          };
        else if (typeof MessageChannel < "u") {
          var It = new MessageChannel(),
            Xt = It.port2;
          ((It.port1.onmessage = Pt),
            (wt = function () {
              Xt.postMessage(null);
            }));
        } else
          wt = function () {
            k(Pt, 0);
          };
        function _t(R, L) {
          st = k(function () {
            R(u.unstable_now());
          }, L);
        }
        ((u.unstable_IdlePriority = 5),
          (u.unstable_ImmediatePriority = 1),
          (u.unstable_LowPriority = 4),
          (u.unstable_NormalPriority = 3),
          (u.unstable_Profiling = null),
          (u.unstable_UserBlockingPriority = 2),
          (u.unstable_cancelCallback = function (R) {
            R.callback = null;
          }),
          (u.unstable_forceFrameRate = function (R) {
            0 > R || 125 < R
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (it = 0 < R ? Math.floor(1e3 / R) : 5);
          }),
          (u.unstable_getCurrentPriorityLevel = function () {
            return B;
          }),
          (u.unstable_next = function (R) {
            switch (B) {
              case 1:
              case 2:
              case 3:
                var L = 3;
                break;
              default:
                L = B;
            }
            var K = B;
            B = L;
            try {
              return R();
            } finally {
              B = K;
            }
          }),
          (u.unstable_requestPaint = function () {
            q = !0;
          }),
          (u.unstable_runWithPriority = function (R, L) {
            switch (R) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                R = 3;
            }
            var K = B;
            B = R;
            try {
              return L();
            } finally {
              B = K;
            }
          }),
          (u.unstable_scheduleCallback = function (R, L, K) {
            var ct = u.unstable_now();
            switch (
              (typeof K == "object" && K !== null
                ? ((K = K.delay),
                  (K = typeof K == "number" && 0 < K ? ct + K : ct))
                : (K = ct),
              R)
            ) {
              case 1:
                var g = -1;
                break;
              case 2:
                g = 250;
                break;
              case 5:
                g = 1073741823;
                break;
              case 4:
                g = 1e4;
                break;
              default:
                g = 5e3;
            }
            return (
              (g = K + g),
              (R = {
                id: E++,
                callback: L,
                priorityLevel: R,
                startTime: K,
                expirationTime: g,
                sortIndex: -1,
              }),
              K > ct
                ? ((R.sortIndex = K),
                  c(y, R),
                  s(b) === null &&
                    R === s(y) &&
                    (H ? (P(st), (st = -1)) : (H = !0), _t(Z, K - ct)))
                : ((R.sortIndex = g),
                  c(b, R),
                  z || Y || ((z = !0), X || ((X = !0), wt()))),
              R
            );
          }),
          (u.unstable_shouldYield = ue),
          (u.unstable_wrapCallback = function (R) {
            var L = B;
            return function () {
              var K = B;
              B = L;
              try {
                return R.apply(this, arguments);
              } finally {
                B = K;
              }
            };
          }));
      })(kr)),
    kr
  );
}
var _h;
function Hp() {
  return (_h || ((_h = 1), (Jr.exports = Bp())), Jr.exports);
}
var $r = { exports: {} },
  le = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nh;
function qp() {
  if (Nh) return le;
  Nh = 1;
  var u = gs();
  function c(b) {
    var y = "https://react.dev/errors/" + b;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var E = 2; E < arguments.length; E++)
        y += "&args[]=" + encodeURIComponent(arguments[E]);
    }
    return (
      "Minified React error #" +
      b +
      "; visit " +
      y +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s() {}
  var r = {
      d: {
        f: s,
        r: function () {
          throw Error(c(522));
        },
        D: s,
        C: s,
        L: s,
        m: s,
        X: s,
        S: s,
        M: s,
      },
      p: 0,
      findDOMNode: null,
    },
    f = Symbol.for("react.portal");
  function m(b, y, E) {
    var N =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: f,
      key: N == null ? null : "" + N,
      children: b,
      containerInfo: y,
      implementation: E,
    };
  }
  var h = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function v(b, y) {
    if (b === "font") return "";
    if (typeof y == "string") return y === "use-credentials" ? y : "";
  }
  return (
    (le.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (le.createPortal = function (b, y) {
      var E =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!y || (y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11))
        throw Error(c(299));
      return m(b, y, null, E);
    }),
    (le.flushSync = function (b) {
      var y = h.T,
        E = r.p;
      try {
        if (((h.T = null), (r.p = 2), b)) return b();
      } finally {
        ((h.T = y), (r.p = E), r.d.f());
      }
    }),
    (le.preconnect = function (b, y) {
      typeof b == "string" &&
        (y
          ? ((y = y.crossOrigin),
            (y =
              typeof y == "string"
                ? y === "use-credentials"
                  ? y
                  : ""
                : void 0))
          : (y = null),
        r.d.C(b, y));
    }),
    (le.prefetchDNS = function (b) {
      typeof b == "string" && r.d.D(b);
    }),
    (le.preinit = function (b, y) {
      if (typeof b == "string" && y && typeof y.as == "string") {
        var E = y.as,
          N = v(E, y.crossOrigin),
          B = typeof y.integrity == "string" ? y.integrity : void 0,
          Y = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
        E === "style"
          ? r.d.S(b, typeof y.precedence == "string" ? y.precedence : void 0, {
              crossOrigin: N,
              integrity: B,
              fetchPriority: Y,
            })
          : E === "script" &&
            r.d.X(b, {
              crossOrigin: N,
              integrity: B,
              fetchPriority: Y,
              nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            });
      }
    }),
    (le.preinitModule = function (b, y) {
      if (typeof b == "string")
        if (typeof y == "object" && y !== null) {
          if (y.as == null || y.as === "script") {
            var E = v(y.as, y.crossOrigin);
            r.d.M(b, {
              crossOrigin: E,
              integrity: typeof y.integrity == "string" ? y.integrity : void 0,
              nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            });
          }
        } else y == null && r.d.M(b);
    }),
    (le.preload = function (b, y) {
      if (
        typeof b == "string" &&
        typeof y == "object" &&
        y !== null &&
        typeof y.as == "string"
      ) {
        var E = y.as,
          N = v(E, y.crossOrigin);
        r.d.L(b, E, {
          crossOrigin: N,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          nonce: typeof y.nonce == "string" ? y.nonce : void 0,
          type: typeof y.type == "string" ? y.type : void 0,
          fetchPriority:
            typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
          referrerPolicy:
            typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
          imageSrcSet:
            typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
          imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
          media: typeof y.media == "string" ? y.media : void 0,
        });
      }
    }),
    (le.preloadModule = function (b, y) {
      if (typeof b == "string")
        if (y) {
          var E = v(y.as, y.crossOrigin);
          r.d.m(b, {
            as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
            crossOrigin: E,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          });
        } else r.d.m(b);
    }),
    (le.requestFormReset = function (b) {
      r.d.r(b);
    }),
    (le.unstable_batchedUpdates = function (b, y) {
      return b(y);
    }),
    (le.useFormState = function (b, y, E) {
      return h.H.useFormState(b, y, E);
    }),
    (le.useFormStatus = function () {
      return h.H.useHostTransitionStatus();
    }),
    (le.version = "19.1.0"),
    le
  );
}
var Mh;
function nm() {
  if (Mh) return $r.exports;
  Mh = 1;
  function u() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (c) {
        console.error(c);
      }
  }
  return (u(), ($r.exports = qp()), $r.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zh;
function Lp() {
  if (zh) return Za;
  zh = 1;
  var u = Hp(),
    c = gs(),
    s = nm();
  function r(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function f(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function m(t) {
    var e = t,
      l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do ((e = t), (e.flags & 4098) !== 0 && (l = e.return), (t = e.return));
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function h(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function v(t) {
    if (m(t) !== t) throw Error(r(188));
  }
  function b(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = m(t)), e === null)) throw Error(r(188));
      return e !== t ? null : t;
    }
    for (var l = t, n = e; ; ) {
      var a = l.return;
      if (a === null) break;
      var i = a.alternate;
      if (i === null) {
        if (((n = a.return), n !== null)) {
          l = n;
          continue;
        }
        break;
      }
      if (a.child === i.child) {
        for (i = a.child; i; ) {
          if (i === l) return (v(a), t);
          if (i === n) return (v(a), e);
          i = i.sibling;
        }
        throw Error(r(188));
      }
      if (l.return !== n.return) ((l = a), (n = i));
      else {
        for (var o = !1, d = a.child; d; ) {
          if (d === l) {
            ((o = !0), (l = a), (n = i));
            break;
          }
          if (d === n) {
            ((o = !0), (n = a), (l = i));
            break;
          }
          d = d.sibling;
        }
        if (!o) {
          for (d = i.child; d; ) {
            if (d === l) {
              ((o = !0), (l = i), (n = a));
              break;
            }
            if (d === n) {
              ((o = !0), (n = i), (l = a));
              break;
            }
            d = d.sibling;
          }
          if (!o) throw Error(r(189));
        }
      }
      if (l.alternate !== n) throw Error(r(190));
    }
    if (l.tag !== 3) throw Error(r(188));
    return l.stateNode.current === l ? t : e;
  }
  function y(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = y(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var E = Object.assign,
    N = Symbol.for("react.element"),
    B = Symbol.for("react.transitional.element"),
    Y = Symbol.for("react.portal"),
    z = Symbol.for("react.fragment"),
    H = Symbol.for("react.strict_mode"),
    q = Symbol.for("react.profiler"),
    k = Symbol.for("react.provider"),
    P = Symbol.for("react.consumer"),
    tt = Symbol.for("react.context"),
    ft = Symbol.for("react.forward_ref"),
    Z = Symbol.for("react.suspense"),
    X = Symbol.for("react.suspense_list"),
    st = Symbol.for("react.memo"),
    it = Symbol.for("react.lazy"),
    Tt = Symbol.for("react.activity"),
    ue = Symbol.for("react.memo_cache_sentinel"),
    Pt = Symbol.iterator;
  function wt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (Pt && t[Pt]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var It = Symbol.for("react.client.reference");
  function Xt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === It ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case z:
        return "Fragment";
      case q:
        return "Profiler";
      case H:
        return "StrictMode";
      case Z:
        return "Suspense";
      case X:
        return "SuspenseList";
      case Tt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case Y:
          return "Portal";
        case tt:
          return (t.displayName || "Context") + ".Provider";
        case P:
          return (t._context.displayName || "Context") + ".Consumer";
        case ft:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case st:
          return (
            (e = t.displayName || null),
            e !== null ? e : Xt(t.type) || "Memo"
          );
        case it:
          ((e = t._payload), (t = t._init));
          try {
            return Xt(t(e));
          } catch {}
      }
    return null;
  }
  var _t = Array.isArray,
    R = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    L = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    K = { pending: !1, data: null, method: null, action: null },
    ct = [],
    g = -1;
  function j(t) {
    return { current: t };
  }
  function Q(t) {
    0 > g || ((t.current = ct[g]), (ct[g] = null), g--);
  }
  function G(t, e) {
    (g++, (ct[g] = t.current), (t.current = e));
  }
  var I = j(null),
    ht = j(null),
    nt = j(null),
    Vt = j(null);
  function Mt(t, e) {
    switch ((G(nt, e), G(ht, t), G(I, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Fd(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          ((e = Fd(e)), (t = Wd(e, t)));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (Q(I), G(I, t));
  }
  function il() {
    (Q(I), Q(ht), Q(nt));
  }
  function Mi(t) {
    t.memoizedState !== null && G(Vt, t);
    var e = I.current,
      l = Wd(e, t.type);
    e !== l && (G(ht, t), G(I, l));
  }
  function Wa(t) {
    (ht.current === t && (Q(I), Q(ht)),
      Vt.current === t && (Q(Vt), (La._currentValue = K)));
  }
  var zi = Object.prototype.hasOwnProperty,
    Di = u.unstable_scheduleCallback,
    Ci = u.unstable_cancelCallback,
    sy = u.unstable_shouldYield,
    oy = u.unstable_requestPaint,
    je = u.unstable_now,
    fy = u.unstable_getCurrentPriorityLevel,
    Ns = u.unstable_ImmediatePriority,
    Ms = u.unstable_UserBlockingPriority,
    Pa = u.unstable_NormalPriority,
    dy = u.unstable_LowPriority,
    zs = u.unstable_IdlePriority,
    hy = u.log,
    my = u.unstable_setDisableYieldValue,
    Jn = null,
    de = null;
  function cl(t) {
    if (
      (typeof hy == "function" && my(t),
      de && typeof de.setStrictMode == "function")
    )
      try {
        de.setStrictMode(Jn, t);
      } catch {}
  }
  var he = Math.clz32 ? Math.clz32 : gy,
    yy = Math.log,
    py = Math.LN2;
  function gy(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((yy(t) / py) | 0)) | 0);
  }
  var Ia = 256,
    tu = 4194304;
  function Ul(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function eu(t, e, l) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var a = 0,
      i = t.suspendedLanes,
      o = t.pingedLanes;
    t = t.warmLanes;
    var d = n & 134217727;
    return (
      d !== 0
        ? ((n = d & ~i),
          n !== 0
            ? (a = Ul(n))
            : ((o &= d),
              o !== 0
                ? (a = Ul(o))
                : l || ((l = d & ~t), l !== 0 && (a = Ul(l)))))
        : ((d = n & ~i),
          d !== 0
            ? (a = Ul(d))
            : o !== 0
              ? (a = Ul(o))
              : l || ((l = n & ~t), l !== 0 && (a = Ul(l)))),
      a === 0
        ? 0
        : e !== 0 &&
            e !== a &&
            (e & i) === 0 &&
            ((i = a & -a),
            (l = e & -e),
            i >= l || (i === 32 && (l & 4194048) !== 0))
          ? e
          : a
    );
  }
  function kn(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function vy(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ds() {
    var t = Ia;
    return ((Ia <<= 1), (Ia & 4194048) === 0 && (Ia = 256), t);
  }
  function Cs() {
    var t = tu;
    return ((tu <<= 1), (tu & 62914560) === 0 && (tu = 4194304), t);
  }
  function wi(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function $n(t, e) {
    ((t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function by(t, e, l, n, a, i) {
    var o = t.pendingLanes;
    ((t.pendingLanes = l),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= l),
      (t.entangledLanes &= l),
      (t.errorRecoveryDisabledLanes &= l),
      (t.shellSuspendCounter = 0));
    var d = t.entanglements,
      p = t.expirationTimes,
      x = t.hiddenUpdates;
    for (l = o & ~l; 0 < l; ) {
      var D = 31 - he(l),
        w = 1 << D;
      ((d[D] = 0), (p[D] = -1));
      var O = x[D];
      if (O !== null)
        for (x[D] = null, D = 0; D < O.length; D++) {
          var _ = O[D];
          _ !== null && (_.lane &= -536870913);
        }
      l &= ~w;
    }
    (n !== 0 && ws(t, n, 0),
      i !== 0 && a === 0 && t.tag !== 0 && (t.suspendedLanes |= i & ~(o & ~e)));
  }
  function ws(t, e, l) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var n = 31 - he(e);
    ((t.entangledLanes |= e),
      (t.entanglements[n] = t.entanglements[n] | 1073741824 | (l & 4194090)));
  }
  function Us(t, e) {
    var l = (t.entangledLanes |= e);
    for (t = t.entanglements; l; ) {
      var n = 31 - he(l),
        a = 1 << n;
      ((a & e) | (t[n] & e) && (t[n] |= e), (l &= ~a));
    }
  }
  function Ui(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function ji(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function js() {
    var t = L.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : ph(t.type));
  }
  function Sy(t, e) {
    var l = L.p;
    try {
      return ((L.p = t), e());
    } finally {
      L.p = l;
    }
  }
  var rl = Math.random().toString(36).slice(2),
    te = "__reactFiber$" + rl,
    ie = "__reactProps$" + rl,
    ln = "__reactContainer$" + rl,
    Bi = "__reactEvents$" + rl,
    Ey = "__reactListeners$" + rl,
    Ty = "__reactHandles$" + rl,
    Bs = "__reactResources$" + rl,
    Fn = "__reactMarker$" + rl;
  function Hi(t) {
    (delete t[te], delete t[ie], delete t[Bi], delete t[Ey], delete t[Ty]);
  }
  function nn(t) {
    var e = t[te];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if ((e = l[ln] || l[te])) {
        if (
          ((l = e.alternate),
          e.child !== null || (l !== null && l.child !== null))
        )
          for (t = eh(t); t !== null; ) {
            if ((l = t[te])) return l;
            t = eh(t);
          }
        return e;
      }
      ((t = l), (l = t.parentNode));
    }
    return null;
  }
  function an(t) {
    if ((t = t[te] || t[ln])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Wn(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function un(t) {
    var e = t[Bs];
    return (
      e ||
        (e = t[Bs] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Qt(t) {
    t[Fn] = !0;
  }
  var Hs = new Set(),
    qs = {};
  function jl(t, e) {
    (cn(t, e), cn(t + "Capture", e));
  }
  function cn(t, e) {
    for (qs[t] = e, t = 0; t < e.length; t++) Hs.add(e[t]);
  }
  var Ay = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Ls = {},
    Gs = {};
  function xy(t) {
    return zi.call(Gs, t)
      ? !0
      : zi.call(Ls, t)
        ? !1
        : Ay.test(t)
          ? (Gs[t] = !0)
          : ((Ls[t] = !0), !1);
  }
  function lu(t, e, l) {
    if (xy(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var n = e.toLowerCase().slice(0, 5);
            if (n !== "data-" && n !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
  }
  function nu(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function Ve(t, e, l, n) {
    if (n === null) t.removeAttribute(l);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + n);
    }
  }
  var qi, Ys;
  function rn(t) {
    if (qi === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        ((qi = (e && e[1]) || ""),
          (Ys =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      qi +
      t +
      Ys
    );
  }
  var Li = !1;
  function Gi(t, e) {
    if (!t || Li) return "";
    Li = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var w = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(w.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(w, []);
                } catch (_) {
                  var O = _;
                }
                Reflect.construct(t, [], w);
              } else {
                try {
                  w.call();
                } catch (_) {
                  O = _;
                }
                t.call(w.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (_) {
                O = _;
              }
              (w = t()) &&
                typeof w.catch == "function" &&
                w.catch(function () {});
            }
          } catch (_) {
            if (_ && O && typeof _.stack == "string") return [_.stack, O.stack];
          }
          return [null, null];
        },
      };
      n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var a = Object.getOwnPropertyDescriptor(
        n.DetermineComponentFrameRoot,
        "name",
      );
      a &&
        a.configurable &&
        Object.defineProperty(n.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var i = n.DetermineComponentFrameRoot(),
        o = i[0],
        d = i[1];
      if (o && d) {
        var p = o.split(`
`),
          x = d.split(`
`);
        for (
          a = n = 0;
          n < p.length && !p[n].includes("DetermineComponentFrameRoot");
        )
          n++;
        for (; a < x.length && !x[a].includes("DetermineComponentFrameRoot"); )
          a++;
        if (n === p.length || a === x.length)
          for (
            n = p.length - 1, a = x.length - 1;
            1 <= n && 0 <= a && p[n] !== x[a];
          )
            a--;
        for (; 1 <= n && 0 <= a; n--, a--)
          if (p[n] !== x[a]) {
            if (n !== 1 || a !== 1)
              do
                if ((n--, a--, 0 > a || p[n] !== x[a])) {
                  var D =
                    `
` + p[n].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      D.includes("<anonymous>") &&
                      (D = D.replace("<anonymous>", t.displayName)),
                    D
                  );
                }
              while (1 <= n && 0 <= a);
            break;
          }
      }
    } finally {
      ((Li = !1), (Error.prepareStackTrace = l));
    }
    return (l = t ? t.displayName || t.name : "") ? rn(l) : "";
  }
  function Ry(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return rn(t.type);
      case 16:
        return rn("Lazy");
      case 13:
        return rn("Suspense");
      case 19:
        return rn("SuspenseList");
      case 0:
      case 15:
        return Gi(t.type, !1);
      case 11:
        return Gi(t.type.render, !1);
      case 1:
        return Gi(t.type, !0);
      case 31:
        return rn("Activity");
      default:
        return "";
    }
  }
  function Xs(t) {
    try {
      var e = "";
      do ((e += Ry(t)), (t = t.return));
      while (t);
      return e;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  function Te(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Vs(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function Oy(t) {
    var e = Vs(t) ? "checked" : "value",
      l = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      n = "" + t[e];
    if (
      !t.hasOwnProperty(e) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var a = l.get,
        i = l.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return a.call(this);
          },
          set: function (o) {
            ((n = "" + o), i.call(this, o));
          },
        }),
        Object.defineProperty(t, e, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (o) {
            n = "" + o;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[e]);
          },
        }
      );
    }
  }
  function au(t) {
    t._valueTracker || (t._valueTracker = Oy(t));
  }
  function Qs(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(),
      n = "";
    return (
      t && (n = Vs(t) ? (t.checked ? "true" : "false") : t.value),
      (t = n),
      t !== l ? (e.setValue(t), !0) : !1
    );
  }
  function uu(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var _y = /[\n"\\]/g;
  function Ae(t) {
    return t.replace(_y, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Yi(t, e, l, n, a, i, o, d) {
    ((t.name = ""),
      o != null &&
      typeof o != "function" &&
      typeof o != "symbol" &&
      typeof o != "boolean"
        ? (t.type = o)
        : t.removeAttribute("type"),
      e != null
        ? o === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + Te(e))
          : t.value !== "" + Te(e) && (t.value = "" + Te(e))
        : (o !== "submit" && o !== "reset") || t.removeAttribute("value"),
      e != null
        ? Xi(t, o, Te(e))
        : l != null
          ? Xi(t, o, Te(l))
          : n != null && t.removeAttribute("value"),
      a == null && i != null && (t.defaultChecked = !!i),
      a != null &&
        (t.checked = a && typeof a != "function" && typeof a != "symbol"),
      d != null &&
      typeof d != "function" &&
      typeof d != "symbol" &&
      typeof d != "boolean"
        ? (t.name = "" + Te(d))
        : t.removeAttribute("name"));
  }
  function Zs(t, e, l, n, a, i, o, d) {
    if (
      (i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (t.type = i),
      e != null || l != null)
    ) {
      if (!((i !== "submit" && i !== "reset") || e != null)) return;
      ((l = l != null ? "" + Te(l) : ""),
        (e = e != null ? "" + Te(e) : l),
        d || e === t.value || (t.value = e),
        (t.defaultValue = e));
    }
    ((n = n ?? a),
      (n = typeof n != "function" && typeof n != "symbol" && !!n),
      (t.checked = d ? t.checked : !!n),
      (t.defaultChecked = !!n),
      o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        typeof o != "boolean" &&
        (t.name = o));
  }
  function Xi(t, e, l) {
    (e === "number" && uu(t.ownerDocument) === t) ||
      t.defaultValue === "" + l ||
      (t.defaultValue = "" + l);
  }
  function sn(t, e, l, n) {
    if (((t = t.options), e)) {
      e = {};
      for (var a = 0; a < l.length; a++) e["$" + l[a]] = !0;
      for (l = 0; l < t.length; l++)
        ((a = e.hasOwnProperty("$" + t[l].value)),
          t[l].selected !== a && (t[l].selected = a),
          a && n && (t[l].defaultSelected = !0));
    } else {
      for (l = "" + Te(l), e = null, a = 0; a < t.length; a++) {
        if (t[a].value === l) {
          ((t[a].selected = !0), n && (t[a].defaultSelected = !0));
          return;
        }
        e !== null || t[a].disabled || (e = t[a]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Ks(t, e, l) {
    if (
      e != null &&
      ((e = "" + Te(e)), e !== t.value && (t.value = e), l == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + Te(l) : "";
  }
  function Js(t, e, l, n) {
    if (e == null) {
      if (n != null) {
        if (l != null) throw Error(r(92));
        if (_t(n)) {
          if (1 < n.length) throw Error(r(93));
          n = n[0];
        }
        l = n;
      }
      (l == null && (l = ""), (e = l));
    }
    ((l = Te(e)),
      (t.defaultValue = l),
      (n = t.textContent),
      n === l && n !== "" && n !== null && (t.value = n));
  }
  function on(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Ny = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function ks(t, e, l) {
    var n = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? n
        ? t.setProperty(e, "")
        : e === "float"
          ? (t.cssFloat = "")
          : (t[e] = "")
      : n
        ? t.setProperty(e, l)
        : typeof l != "number" || l === 0 || Ny.has(e)
          ? e === "float"
            ? (t.cssFloat = l)
            : (t[e] = ("" + l).trim())
          : (t[e] = l + "px");
  }
  function $s(t, e, l) {
    if (e != null && typeof e != "object") throw Error(r(62));
    if (((t = t.style), l != null)) {
      for (var n in l)
        !l.hasOwnProperty(n) ||
          (e != null && e.hasOwnProperty(n)) ||
          (n.indexOf("--") === 0
            ? t.setProperty(n, "")
            : n === "float"
              ? (t.cssFloat = "")
              : (t[n] = ""));
      for (var a in e)
        ((n = e[a]), e.hasOwnProperty(a) && l[a] !== n && ks(t, a, n));
    } else for (var i in e) e.hasOwnProperty(i) && ks(t, i, e[i]);
  }
  function Vi(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var My = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    zy =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function iu(t) {
    return zy.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var Qi = null;
  function Zi(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var fn = null,
    dn = null;
  function Fs(t) {
    var e = an(t);
    if (e && (t = e.stateNode)) {
      var l = t[ie] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (Yi(
              t,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name,
            ),
            (e = l.name),
            l.type === "radio" && e != null)
          ) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + Ae("" + e) + '"][type="radio"]',
              ),
                e = 0;
              e < l.length;
              e++
            ) {
              var n = l[e];
              if (n !== t && n.form === t.form) {
                var a = n[ie] || null;
                if (!a) throw Error(r(90));
                Yi(
                  n,
                  a.value,
                  a.defaultValue,
                  a.defaultValue,
                  a.checked,
                  a.defaultChecked,
                  a.type,
                  a.name,
                );
              }
            }
            for (e = 0; e < l.length; e++)
              ((n = l[e]), n.form === t.form && Qs(n));
          }
          break t;
        case "textarea":
          Ks(t, l.value, l.defaultValue);
          break t;
        case "select":
          ((e = l.value), e != null && sn(t, !!l.multiple, e, !1));
      }
    }
  }
  var Ki = !1;
  function Ws(t, e, l) {
    if (Ki) return t(e, l);
    Ki = !0;
    try {
      var n = t(e);
      return n;
    } finally {
      if (
        ((Ki = !1),
        (fn !== null || dn !== null) &&
          (Zu(), fn && ((e = fn), (t = dn), (dn = fn = null), Fs(e), t)))
      )
        for (e = 0; e < t.length; e++) Fs(t[e]);
    }
  }
  function Pn(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var n = l[ie] || null;
    if (n === null) return null;
    l = n[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((n = !n.disabled) ||
          ((t = t.type),
          (n = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !n));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function") throw Error(r(231, e, typeof l));
    return l;
  }
  var Qe = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Ji = !1;
  if (Qe)
    try {
      var In = {};
      (Object.defineProperty(In, "passive", {
        get: function () {
          Ji = !0;
        },
      }),
        window.addEventListener("test", In, In),
        window.removeEventListener("test", In, In));
    } catch {
      Ji = !1;
    }
  var sl = null,
    ki = null,
    cu = null;
  function Ps() {
    if (cu) return cu;
    var t,
      e = ki,
      l = e.length,
      n,
      a = "value" in sl ? sl.value : sl.textContent,
      i = a.length;
    for (t = 0; t < l && e[t] === a[t]; t++);
    var o = l - t;
    for (n = 1; n <= o && e[l - n] === a[i - n]; n++);
    return (cu = a.slice(t, 1 < n ? 1 - n : void 0));
  }
  function ru(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function su() {
    return !0;
  }
  function Is() {
    return !1;
  }
  function ce(t) {
    function e(l, n, a, i, o) {
      ((this._reactName = l),
        (this._targetInst = a),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = o),
        (this.currentTarget = null));
      for (var d in t)
        t.hasOwnProperty(d) && ((l = t[d]), (this[d] = l ? l(i) : i[d]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? su
          : Is),
        (this.isPropagationStopped = Is),
        this
      );
    }
    return (
      E(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = su));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = su));
        },
        persist: function () {},
        isPersistent: su,
      }),
      e
    );
  }
  var Bl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ou = ce(Bl),
    ta = E({}, Bl, { view: 0, detail: 0 }),
    Dy = ce(ta),
    $i,
    Fi,
    ea,
    fu = E({}, ta, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Pi,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== ea &&
              (ea && t.type === "mousemove"
                ? (($i = t.screenX - ea.screenX), (Fi = t.screenY - ea.screenY))
                : (Fi = $i = 0),
              (ea = t)),
            $i);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Fi;
      },
    }),
    to = ce(fu),
    Cy = E({}, fu, { dataTransfer: 0 }),
    wy = ce(Cy),
    Uy = E({}, ta, { relatedTarget: 0 }),
    Wi = ce(Uy),
    jy = E({}, Bl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    By = ce(jy),
    Hy = E({}, Bl, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    qy = ce(Hy),
    Ly = E({}, Bl, { data: 0 }),
    eo = ce(Ly),
    Gy = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Yy = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Xy = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Vy(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = Xy[t])
        ? !!e[t]
        : !1;
  }
  function Pi() {
    return Vy;
  }
  var Qy = E({}, ta, {
      key: function (t) {
        if (t.key) {
          var e = Gy[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = ru(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? Yy[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Pi,
      charCode: function (t) {
        return t.type === "keypress" ? ru(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? ru(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    Zy = ce(Qy),
    Ky = E({}, fu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    lo = ce(Ky),
    Jy = E({}, ta, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Pi,
    }),
    ky = ce(Jy),
    $y = E({}, Bl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Fy = ce($y),
    Wy = E({}, fu, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Py = ce(Wy),
    Iy = E({}, Bl, { newState: 0, oldState: 0 }),
    t0 = ce(Iy),
    e0 = [9, 13, 27, 32],
    Ii = Qe && "CompositionEvent" in window,
    la = null;
  Qe && "documentMode" in document && (la = document.documentMode);
  var l0 = Qe && "TextEvent" in window && !la,
    no = Qe && (!Ii || (la && 8 < la && 11 >= la)),
    ao = " ",
    uo = !1;
  function io(t, e) {
    switch (t) {
      case "keyup":
        return e0.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function co(t) {
    return (
      (t = t.detail),
      typeof t == "object" && "data" in t ? t.data : null
    );
  }
  var hn = !1;
  function n0(t, e) {
    switch (t) {
      case "compositionend":
        return co(e);
      case "keypress":
        return e.which !== 32 ? null : ((uo = !0), ao);
      case "textInput":
        return ((t = e.data), t === ao && uo ? null : t);
      default:
        return null;
    }
  }
  function a0(t, e) {
    if (hn)
      return t === "compositionend" || (!Ii && io(t, e))
        ? ((t = Ps()), (cu = ki = sl = null), (hn = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return no && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var u0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function ro(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!u0[t.type] : e === "textarea";
  }
  function so(t, e, l, n) {
    (fn ? (dn ? dn.push(n) : (dn = [n])) : (fn = n),
      (e = Wu(e, "onChange")),
      0 < e.length &&
        ((l = new ou("onChange", "change", null, l, n)),
        t.push({ event: l, listeners: e })));
  }
  var na = null,
    aa = null;
  function i0(t) {
    Zd(t, 0);
  }
  function du(t) {
    var e = Wn(t);
    if (Qs(e)) return t;
  }
  function oo(t, e) {
    if (t === "change") return e;
  }
  var fo = !1;
  if (Qe) {
    var tc;
    if (Qe) {
      var ec = "oninput" in document;
      if (!ec) {
        var ho = document.createElement("div");
        (ho.setAttribute("oninput", "return;"),
          (ec = typeof ho.oninput == "function"));
      }
      tc = ec;
    } else tc = !1;
    fo = tc && (!document.documentMode || 9 < document.documentMode);
  }
  function mo() {
    na && (na.detachEvent("onpropertychange", yo), (aa = na = null));
  }
  function yo(t) {
    if (t.propertyName === "value" && du(aa)) {
      var e = [];
      (so(e, aa, t, Zi(t)), Ws(i0, e));
    }
  }
  function c0(t, e, l) {
    t === "focusin"
      ? (mo(), (na = e), (aa = l), na.attachEvent("onpropertychange", yo))
      : t === "focusout" && mo();
  }
  function r0(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return du(aa);
  }
  function s0(t, e) {
    if (t === "click") return du(e);
  }
  function o0(t, e) {
    if (t === "input" || t === "change") return du(e);
  }
  function f0(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var me = typeof Object.is == "function" ? Object.is : f0;
  function ua(t, e) {
    if (me(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var l = Object.keys(t),
      n = Object.keys(e);
    if (l.length !== n.length) return !1;
    for (n = 0; n < l.length; n++) {
      var a = l[n];
      if (!zi.call(e, a) || !me(t[a], e[a])) return !1;
    }
    return !0;
  }
  function po(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function go(t, e) {
    var l = po(t);
    t = 0;
    for (var n; l; ) {
      if (l.nodeType === 3) {
        if (((n = t + l.textContent.length), t <= e && n >= e))
          return { node: l, offset: e - t };
        t = n;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = po(l);
    }
  }
  function vo(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? vo(t, e.parentNode)
            : "contains" in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function bo(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = uu(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = uu(t.document);
    }
    return e;
  }
  function lc(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var d0 = Qe && "documentMode" in document && 11 >= document.documentMode,
    mn = null,
    nc = null,
    ia = null,
    ac = !1;
  function So(t, e, l) {
    var n =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    ac ||
      mn == null ||
      mn !== uu(n) ||
      ((n = mn),
      "selectionStart" in n && lc(n)
        ? (n = { start: n.selectionStart, end: n.selectionEnd })
        : ((n = (
            (n.ownerDocument && n.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (n = {
            anchorNode: n.anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset,
          })),
      (ia && ua(ia, n)) ||
        ((ia = n),
        (n = Wu(nc, "onSelect")),
        0 < n.length &&
          ((e = new ou("onSelect", "select", null, e, l)),
          t.push({ event: e, listeners: n }),
          (e.target = mn))));
  }
  function Hl(t, e) {
    var l = {};
    return (
      (l[t.toLowerCase()] = e.toLowerCase()),
      (l["Webkit" + t] = "webkit" + e),
      (l["Moz" + t] = "moz" + e),
      l
    );
  }
  var yn = {
      animationend: Hl("Animation", "AnimationEnd"),
      animationiteration: Hl("Animation", "AnimationIteration"),
      animationstart: Hl("Animation", "AnimationStart"),
      transitionrun: Hl("Transition", "TransitionRun"),
      transitionstart: Hl("Transition", "TransitionStart"),
      transitioncancel: Hl("Transition", "TransitionCancel"),
      transitionend: Hl("Transition", "TransitionEnd"),
    },
    uc = {},
    Eo = {};
  Qe &&
    ((Eo = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete yn.animationend.animation,
      delete yn.animationiteration.animation,
      delete yn.animationstart.animation),
    "TransitionEvent" in window || delete yn.transitionend.transition);
  function ql(t) {
    if (uc[t]) return uc[t];
    if (!yn[t]) return t;
    var e = yn[t],
      l;
    for (l in e) if (e.hasOwnProperty(l) && l in Eo) return (uc[t] = e[l]);
    return t;
  }
  var To = ql("animationend"),
    Ao = ql("animationiteration"),
    xo = ql("animationstart"),
    h0 = ql("transitionrun"),
    m0 = ql("transitionstart"),
    y0 = ql("transitioncancel"),
    Ro = ql("transitionend"),
    Oo = new Map(),
    ic =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  ic.push("scrollEnd");
  function De(t, e) {
    (Oo.set(t, e), jl(e, [t]));
  }
  var _o = new WeakMap();
  function xe(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = _o.get(t);
      return l !== void 0
        ? l
        : ((e = { value: t, source: e, stack: Xs(e) }), _o.set(t, e), e);
    }
    return { value: t, source: e, stack: Xs(e) };
  }
  var Re = [],
    pn = 0,
    cc = 0;
  function hu() {
    for (var t = pn, e = (cc = pn = 0); e < t; ) {
      var l = Re[e];
      Re[e++] = null;
      var n = Re[e];
      Re[e++] = null;
      var a = Re[e];
      Re[e++] = null;
      var i = Re[e];
      if (((Re[e++] = null), n !== null && a !== null)) {
        var o = n.pending;
        (o === null ? (a.next = a) : ((a.next = o.next), (o.next = a)),
          (n.pending = a));
      }
      i !== 0 && No(l, a, i);
    }
  }
  function mu(t, e, l, n) {
    ((Re[pn++] = t),
      (Re[pn++] = e),
      (Re[pn++] = l),
      (Re[pn++] = n),
      (cc |= n),
      (t.lanes |= n),
      (t = t.alternate),
      t !== null && (t.lanes |= n));
  }
  function rc(t, e, l, n) {
    return (mu(t, e, l, n), yu(t));
  }
  function gn(t, e) {
    return (mu(t, null, null, e), yu(t));
  }
  function No(t, e, l) {
    t.lanes |= l;
    var n = t.alternate;
    n !== null && (n.lanes |= l);
    for (var a = !1, i = t.return; i !== null; )
      ((i.childLanes |= l),
        (n = i.alternate),
        n !== null && (n.childLanes |= l),
        i.tag === 22 &&
          ((t = i.stateNode), t === null || t._visibility & 1 || (a = !0)),
        (t = i),
        (i = i.return));
    return t.tag === 3
      ? ((i = t.stateNode),
        a &&
          e !== null &&
          ((a = 31 - he(l)),
          (t = i.hiddenUpdates),
          (n = t[a]),
          n === null ? (t[a] = [e]) : n.push(e),
          (e.lane = l | 536870912)),
        i)
      : null;
  }
  function yu(t) {
    if (50 < Da) throw ((Da = 0), (mr = null), Error(r(185)));
    for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var vn = {};
  function p0(t, e, l, n) {
    ((this.tag = t),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = n),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function ye(t, e, l, n) {
    return new p0(t, e, l, n);
  }
  function sc(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function Ze(t, e) {
    var l = t.alternate;
    return (
      l === null
        ? ((l = ye(t.tag, e, t.key, t.mode)),
          (l.elementType = t.elementType),
          (l.type = t.type),
          (l.stateNode = t.stateNode),
          (l.alternate = t),
          (t.alternate = l))
        : ((l.pendingProps = e),
          (l.type = t.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = t.flags & 65011712),
      (l.childLanes = t.childLanes),
      (l.lanes = t.lanes),
      (l.child = t.child),
      (l.memoizedProps = t.memoizedProps),
      (l.memoizedState = t.memoizedState),
      (l.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (l.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (l.sibling = t.sibling),
      (l.index = t.index),
      (l.ref = t.ref),
      (l.refCleanup = t.refCleanup),
      l
    );
  }
  function Mo(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return (
      l === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = l.childLanes),
          (t.lanes = l.lanes),
          (t.child = l.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = l.memoizedProps),
          (t.memoizedState = l.memoizedState),
          (t.updateQueue = l.updateQueue),
          (t.type = l.type),
          (e = l.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function pu(t, e, l, n, a, i) {
    var o = 0;
    if (((n = t), typeof t == "function")) sc(t) && (o = 1);
    else if (typeof t == "string")
      o = vp(t, l, I.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
    else
      t: switch (t) {
        case Tt:
          return (
            (t = ye(31, l, e, a)),
            (t.elementType = Tt),
            (t.lanes = i),
            t
          );
        case z:
          return Ll(l.children, a, i, e);
        case H:
          ((o = 8), (a |= 24));
          break;
        case q:
          return (
            (t = ye(12, l, e, a | 2)),
            (t.elementType = q),
            (t.lanes = i),
            t
          );
        case Z:
          return ((t = ye(13, l, e, a)), (t.elementType = Z), (t.lanes = i), t);
        case X:
          return ((t = ye(19, l, e, a)), (t.elementType = X), (t.lanes = i), t);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case k:
              case tt:
                o = 10;
                break t;
              case P:
                o = 9;
                break t;
              case ft:
                o = 11;
                break t;
              case st:
                o = 14;
                break t;
              case it:
                ((o = 16), (n = null));
                break t;
            }
          ((o = 29),
            (l = Error(r(130, t === null ? "null" : typeof t, ""))),
            (n = null));
      }
    return (
      (e = ye(o, l, e, a)),
      (e.elementType = t),
      (e.type = n),
      (e.lanes = i),
      e
    );
  }
  function Ll(t, e, l, n) {
    return ((t = ye(7, t, n, e)), (t.lanes = l), t);
  }
  function oc(t, e, l) {
    return ((t = ye(6, t, null, e)), (t.lanes = l), t);
  }
  function fc(t, e, l) {
    return (
      (e = ye(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = l),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var bn = [],
    Sn = 0,
    gu = null,
    vu = 0,
    Oe = [],
    _e = 0,
    Gl = null,
    Ke = 1,
    Je = "";
  function Yl(t, e) {
    ((bn[Sn++] = vu), (bn[Sn++] = gu), (gu = t), (vu = e));
  }
  function zo(t, e, l) {
    ((Oe[_e++] = Ke), (Oe[_e++] = Je), (Oe[_e++] = Gl), (Gl = t));
    var n = Ke;
    t = Je;
    var a = 32 - he(n) - 1;
    ((n &= ~(1 << a)), (l += 1));
    var i = 32 - he(e) + a;
    if (30 < i) {
      var o = a - (a % 5);
      ((i = (n & ((1 << o) - 1)).toString(32)),
        (n >>= o),
        (a -= o),
        (Ke = (1 << (32 - he(e) + a)) | (l << a) | n),
        (Je = i + t));
    } else ((Ke = (1 << i) | (l << a) | n), (Je = t));
  }
  function dc(t) {
    t.return !== null && (Yl(t, 1), zo(t, 1, 0));
  }
  function hc(t) {
    for (; t === gu; )
      ((gu = bn[--Sn]), (bn[Sn] = null), (vu = bn[--Sn]), (bn[Sn] = null));
    for (; t === Gl; )
      ((Gl = Oe[--_e]),
        (Oe[_e] = null),
        (Je = Oe[--_e]),
        (Oe[_e] = null),
        (Ke = Oe[--_e]),
        (Oe[_e] = null));
  }
  var ae = null,
    Ut = null,
    bt = !1,
    Xl = null,
    Be = !1,
    mc = Error(r(519));
  function Vl(t) {
    var e = Error(r(418, ""));
    throw (sa(xe(e, t)), mc);
  }
  function Do(t) {
    var e = t.stateNode,
      l = t.type,
      n = t.memoizedProps;
    switch (((e[te] = t), (e[ie] = n), l)) {
      case "dialog":
        (yt("cancel", e), yt("close", e));
        break;
      case "iframe":
      case "object":
      case "embed":
        yt("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < wa.length; l++) yt(wa[l], e);
        break;
      case "source":
        yt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        (yt("error", e), yt("load", e));
        break;
      case "details":
        yt("toggle", e);
        break;
      case "input":
        (yt("invalid", e),
          Zs(
            e,
            n.value,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name,
            !0,
          ),
          au(e));
        break;
      case "select":
        yt("invalid", e);
        break;
      case "textarea":
        (yt("invalid", e), Js(e, n.value, n.defaultValue, n.children), au(e));
    }
    ((l = n.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      e.textContent === "" + l ||
      n.suppressHydrationWarning === !0 ||
      $d(e.textContent, l)
        ? (n.popover != null && (yt("beforetoggle", e), yt("toggle", e)),
          n.onScroll != null && yt("scroll", e),
          n.onScrollEnd != null && yt("scrollend", e),
          n.onClick != null && (e.onclick = Pu),
          (e = !0))
        : (e = !1),
      e || Vl(t));
  }
  function Co(t) {
    for (ae = t.return; ae; )
      switch (ae.tag) {
        case 5:
        case 13:
          Be = !1;
          return;
        case 27:
        case 3:
          Be = !0;
          return;
        default:
          ae = ae.return;
      }
  }
  function ca(t) {
    if (t !== ae) return !1;
    if (!bt) return (Co(t), (bt = !0), !1);
    var e = t.tag,
      l;
    if (
      ((l = e !== 3 && e !== 27) &&
        ((l = e === 5) &&
          ((l = t.type),
          (l =
            !(l !== "form" && l !== "button") || zr(t.type, t.memoizedProps))),
        (l = !l)),
      l && Ut && Vl(t),
      Co(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(r(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((l = t.data), l === "/$")) {
              if (e === 0) {
                Ut = we(t.nextSibling);
                break t;
              }
              e--;
            } else (l !== "$" && l !== "$!" && l !== "$?") || e++;
          t = t.nextSibling;
        }
        Ut = null;
      }
    } else
      e === 27
        ? ((e = Ut), Rl(t.type) ? ((t = Ur), (Ur = null), (Ut = t)) : (Ut = e))
        : (Ut = ae ? we(t.stateNode.nextSibling) : null);
    return !0;
  }
  function ra() {
    ((Ut = ae = null), (bt = !1));
  }
  function wo() {
    var t = Xl;
    return (
      t !== null &&
        (oe === null ? (oe = t) : oe.push.apply(oe, t), (Xl = null)),
      t
    );
  }
  function sa(t) {
    Xl === null ? (Xl = [t]) : Xl.push(t);
  }
  var yc = j(null),
    Ql = null,
    ke = null;
  function ol(t, e, l) {
    (G(yc, e._currentValue), (e._currentValue = l));
  }
  function $e(t) {
    ((t._currentValue = yc.current), Q(yc));
  }
  function pc(t, e, l) {
    for (; t !== null; ) {
      var n = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), n !== null && (n.childLanes |= e))
          : n !== null && (n.childLanes & e) !== e && (n.childLanes |= e),
        t === l)
      )
        break;
      t = t.return;
    }
  }
  function gc(t, e, l, n) {
    var a = t.child;
    for (a !== null && (a.return = t); a !== null; ) {
      var i = a.dependencies;
      if (i !== null) {
        var o = a.child;
        i = i.firstContext;
        t: for (; i !== null; ) {
          var d = i;
          i = a;
          for (var p = 0; p < e.length; p++)
            if (d.context === e[p]) {
              ((i.lanes |= l),
                (d = i.alternate),
                d !== null && (d.lanes |= l),
                pc(i.return, l, t),
                n || (o = null));
              break t;
            }
          i = d.next;
        }
      } else if (a.tag === 18) {
        if (((o = a.return), o === null)) throw Error(r(341));
        ((o.lanes |= l),
          (i = o.alternate),
          i !== null && (i.lanes |= l),
          pc(o, l, t),
          (o = null));
      } else o = a.child;
      if (o !== null) o.return = a;
      else
        for (o = a; o !== null; ) {
          if (o === t) {
            o = null;
            break;
          }
          if (((a = o.sibling), a !== null)) {
            ((a.return = o.return), (o = a));
            break;
          }
          o = o.return;
        }
      a = o;
    }
  }
  function oa(t, e, l, n) {
    t = null;
    for (var a = e, i = !1; a !== null; ) {
      if (!i) {
        if ((a.flags & 524288) !== 0) i = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var o = a.alternate;
        if (o === null) throw Error(r(387));
        if (((o = o.memoizedProps), o !== null)) {
          var d = a.type;
          me(a.pendingProps.value, o.value) ||
            (t !== null ? t.push(d) : (t = [d]));
        }
      } else if (a === Vt.current) {
        if (((o = a.alternate), o === null)) throw Error(r(387));
        o.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
          (t !== null ? t.push(La) : (t = [La]));
      }
      a = a.return;
    }
    (t !== null && gc(e, t, l, n), (e.flags |= 262144));
  }
  function bu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!me(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Zl(t) {
    ((Ql = t),
      (ke = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null));
  }
  function ee(t) {
    return Uo(Ql, t);
  }
  function Su(t, e) {
    return (Ql === null && Zl(t), Uo(t, e));
  }
  function Uo(t, e) {
    var l = e._currentValue;
    if (((e = { context: e, memoizedValue: l, next: null }), ke === null)) {
      if (t === null) throw Error(r(308));
      ((ke = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288));
    } else ke = ke.next = e;
    return l;
  }
  var g0 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (l, n) {
                  t.push(n);
                },
              });
            this.abort = function () {
              ((e.aborted = !0),
                t.forEach(function (l) {
                  return l();
                }));
            };
          },
    v0 = u.unstable_scheduleCallback,
    b0 = u.unstable_NormalPriority,
    Gt = {
      $$typeof: tt,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function vc() {
    return { controller: new g0(), data: new Map(), refCount: 0 };
  }
  function fa(t) {
    (t.refCount--,
      t.refCount === 0 &&
        v0(b0, function () {
          t.controller.abort();
        }));
  }
  var da = null,
    bc = 0,
    En = 0,
    Tn = null;
  function S0(t, e) {
    if (da === null) {
      var l = (da = []);
      ((bc = 0),
        (En = Er()),
        (Tn = {
          status: "pending",
          value: void 0,
          then: function (n) {
            l.push(n);
          },
        }));
    }
    return (bc++, e.then(jo, jo), e);
  }
  function jo() {
    if (--bc === 0 && da !== null) {
      Tn !== null && (Tn.status = "fulfilled");
      var t = da;
      ((da = null), (En = 0), (Tn = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function E0(t, e) {
    var l = [],
      n = {
        status: "pending",
        value: null,
        reason: null,
        then: function (a) {
          l.push(a);
        },
      };
    return (
      t.then(
        function () {
          ((n.status = "fulfilled"), (n.value = e));
          for (var a = 0; a < l.length; a++) (0, l[a])(e);
        },
        function (a) {
          for (n.status = "rejected", n.reason = a, a = 0; a < l.length; a++)
            (0, l[a])(void 0);
        },
      ),
      n
    );
  }
  var Bo = R.S;
  R.S = function (t, e) {
    (typeof e == "object" &&
      e !== null &&
      typeof e.then == "function" &&
      S0(t, e),
      Bo !== null && Bo(t, e));
  };
  var Kl = j(null);
  function Sc() {
    var t = Kl.current;
    return t !== null ? t : Nt.pooledCache;
  }
  function Eu(t, e) {
    e === null ? G(Kl, Kl.current) : G(Kl, e.pool);
  }
  function Ho() {
    var t = Sc();
    return t === null ? null : { parent: Gt._currentValue, pool: t };
  }
  var ha = Error(r(460)),
    qo = Error(r(474)),
    Tu = Error(r(542)),
    Ec = { then: function () {} };
  function Lo(t) {
    return ((t = t.status), t === "fulfilled" || t === "rejected");
  }
  function Au() {}
  function Go(t, e, l) {
    switch (
      ((l = t[l]),
      l === void 0 ? t.push(e) : l !== e && (e.then(Au, Au), (e = l)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), Xo(t), t);
      default:
        if (typeof e.status == "string") e.then(Au, Au);
        else {
          if (((t = Nt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(r(482));
          ((t = e),
            (t.status = "pending"),
            t.then(
              function (n) {
                if (e.status === "pending") {
                  var a = e;
                  ((a.status = "fulfilled"), (a.value = n));
                }
              },
              function (n) {
                if (e.status === "pending") {
                  var a = e;
                  ((a.status = "rejected"), (a.reason = n));
                }
              },
            ));
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), Xo(t), t);
        }
        throw ((ma = e), ha);
    }
  }
  var ma = null;
  function Yo() {
    if (ma === null) throw Error(r(459));
    var t = ma;
    return ((ma = null), t);
  }
  function Xo(t) {
    if (t === ha || t === Tu) throw Error(r(483));
  }
  var fl = !1;
  function Tc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Ac(t, e) {
    ((t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function dl(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function hl(t, e, l) {
    var n = t.updateQueue;
    if (n === null) return null;
    if (((n = n.shared), (St & 2) !== 0)) {
      var a = n.pending;
      return (
        a === null ? (e.next = e) : ((e.next = a.next), (a.next = e)),
        (n.pending = e),
        (e = yu(t)),
        No(t, null, l),
        e
      );
    }
    return (mu(t, n, e, l), yu(t));
  }
  function ya(t, e, l) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (l & 4194048) !== 0))
    ) {
      var n = e.lanes;
      ((n &= t.pendingLanes), (l |= n), (e.lanes = l), Us(t, l));
    }
  }
  function xc(t, e) {
    var l = t.updateQueue,
      n = t.alternate;
    if (n !== null && ((n = n.updateQueue), l === n)) {
      var a = null,
        i = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var o = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          (i === null ? (a = i = o) : (i = i.next = o), (l = l.next));
        } while (l !== null);
        i === null ? (a = i = e) : (i = i.next = e);
      } else a = i = e;
      ((l = {
        baseState: n.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: i,
        shared: n.shared,
        callbacks: n.callbacks,
      }),
        (t.updateQueue = l));
      return;
    }
    ((t = l.lastBaseUpdate),
      t === null ? (l.firstBaseUpdate = e) : (t.next = e),
      (l.lastBaseUpdate = e));
  }
  var Rc = !1;
  function pa() {
    if (Rc) {
      var t = Tn;
      if (t !== null) throw t;
    }
  }
  function ga(t, e, l, n) {
    Rc = !1;
    var a = t.updateQueue;
    fl = !1;
    var i = a.firstBaseUpdate,
      o = a.lastBaseUpdate,
      d = a.shared.pending;
    if (d !== null) {
      a.shared.pending = null;
      var p = d,
        x = p.next;
      ((p.next = null), o === null ? (i = x) : (o.next = x), (o = p));
      var D = t.alternate;
      D !== null &&
        ((D = D.updateQueue),
        (d = D.lastBaseUpdate),
        d !== o &&
          (d === null ? (D.firstBaseUpdate = x) : (d.next = x),
          (D.lastBaseUpdate = p)));
    }
    if (i !== null) {
      var w = a.baseState;
      ((o = 0), (D = x = p = null), (d = i));
      do {
        var O = d.lane & -536870913,
          _ = O !== d.lane;
        if (_ ? (gt & O) === O : (n & O) === O) {
          (O !== 0 && O === En && (Rc = !0),
            D !== null &&
              (D = D.next =
                {
                  lane: 0,
                  tag: d.tag,
                  payload: d.payload,
                  callback: null,
                  next: null,
                }));
          t: {
            var at = t,
              et = d;
            O = e;
            var Rt = l;
            switch (et.tag) {
              case 1:
                if (((at = et.payload), typeof at == "function")) {
                  w = at.call(Rt, w, O);
                  break t;
                }
                w = at;
                break t;
              case 3:
                at.flags = (at.flags & -65537) | 128;
              case 0:
                if (
                  ((at = et.payload),
                  (O = typeof at == "function" ? at.call(Rt, w, O) : at),
                  O == null)
                )
                  break t;
                w = E({}, w, O);
                break t;
              case 2:
                fl = !0;
            }
          }
          ((O = d.callback),
            O !== null &&
              ((t.flags |= 64),
              _ && (t.flags |= 8192),
              (_ = a.callbacks),
              _ === null ? (a.callbacks = [O]) : _.push(O)));
        } else
          ((_ = {
            lane: O,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null,
          }),
            D === null ? ((x = D = _), (p = w)) : (D = D.next = _),
            (o |= O));
        if (((d = d.next), d === null)) {
          if (((d = a.shared.pending), d === null)) break;
          ((_ = d),
            (d = _.next),
            (_.next = null),
            (a.lastBaseUpdate = _),
            (a.shared.pending = null));
        }
      } while (!0);
      (D === null && (p = w),
        (a.baseState = p),
        (a.firstBaseUpdate = x),
        (a.lastBaseUpdate = D),
        i === null && (a.shared.lanes = 0),
        (El |= o),
        (t.lanes = o),
        (t.memoizedState = w));
    }
  }
  function Vo(t, e) {
    if (typeof t != "function") throw Error(r(191, t));
    t.call(e);
  }
  function Qo(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++) Vo(l[t], e);
  }
  var An = j(null),
    xu = j(0);
  function Zo(t, e) {
    ((t = ll), G(xu, t), G(An, e), (ll = t | e.baseLanes));
  }
  function Oc() {
    (G(xu, ll), G(An, An.current));
  }
  function _c() {
    ((ll = xu.current), Q(An), Q(xu));
  }
  var ml = 0,
    ot = null,
    At = null,
    qt = null,
    Ru = !1,
    xn = !1,
    Jl = !1,
    Ou = 0,
    va = 0,
    Rn = null,
    T0 = 0;
  function Bt() {
    throw Error(r(321));
  }
  function Nc(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!me(t[l], e[l])) return !1;
    return !0;
  }
  function Mc(t, e, l, n, a, i) {
    return (
      (ml = i),
      (ot = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (R.H = t === null || t.memoizedState === null ? Mf : zf),
      (Jl = !1),
      (i = l(n, a)),
      (Jl = !1),
      xn && (i = Jo(e, l, n, a)),
      Ko(t),
      i
    );
  }
  function Ko(t) {
    R.H = Cu;
    var e = At !== null && At.next !== null;
    if (((ml = 0), (qt = At = ot = null), (Ru = !1), (va = 0), (Rn = null), e))
      throw Error(r(300));
    t === null ||
      Zt ||
      ((t = t.dependencies), t !== null && bu(t) && (Zt = !0));
  }
  function Jo(t, e, l, n) {
    ot = t;
    var a = 0;
    do {
      if ((xn && (Rn = null), (va = 0), (xn = !1), 25 <= a))
        throw Error(r(301));
      if (((a += 1), (qt = At = null), t.updateQueue != null)) {
        var i = t.updateQueue;
        ((i.lastEffect = null),
          (i.events = null),
          (i.stores = null),
          i.memoCache != null && (i.memoCache.index = 0));
      }
      ((R.H = M0), (i = e(l, n)));
    } while (xn);
    return i;
  }
  function A0() {
    var t = R.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? ba(e) : e),
      (t = t.useState()[0]),
      (At !== null ? At.memoizedState : null) !== t && (ot.flags |= 1024),
      e
    );
  }
  function zc() {
    var t = Ou !== 0;
    return ((Ou = 0), t);
  }
  function Dc(t, e, l) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~l));
  }
  function Cc(t) {
    if (Ru) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      Ru = !1;
    }
    ((ml = 0), (qt = At = ot = null), (xn = !1), (va = Ou = 0), (Rn = null));
  }
  function re() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (qt === null ? (ot.memoizedState = qt = t) : (qt = qt.next = t), qt);
  }
  function Lt() {
    if (At === null) {
      var t = ot.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = At.next;
    var e = qt === null ? ot.memoizedState : qt.next;
    if (e !== null) ((qt = e), (At = t));
    else {
      if (t === null)
        throw ot.alternate === null ? Error(r(467)) : Error(r(310));
      ((At = t),
        (t = {
          memoizedState: At.memoizedState,
          baseState: At.baseState,
          baseQueue: At.baseQueue,
          queue: At.queue,
          next: null,
        }),
        qt === null ? (ot.memoizedState = qt = t) : (qt = qt.next = t));
    }
    return qt;
  }
  function wc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ba(t) {
    var e = va;
    return (
      (va += 1),
      Rn === null && (Rn = []),
      (t = Go(Rn, t, e)),
      (e = ot),
      (qt === null ? e.memoizedState : qt.next) === null &&
        ((e = e.alternate),
        (R.H = e === null || e.memoizedState === null ? Mf : zf)),
      t
    );
  }
  function _u(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return ba(t);
      if (t.$$typeof === tt) return ee(t);
    }
    throw Error(r(438, String(t)));
  }
  function Uc(t) {
    var e = null,
      l = ot.updateQueue;
    if ((l !== null && (e = l.memoCache), e == null)) {
      var n = ot.alternate;
      n !== null &&
        ((n = n.updateQueue),
        n !== null &&
          ((n = n.memoCache),
          n != null &&
            (e = {
              data: n.data.map(function (a) {
                return a.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      l === null && ((l = wc()), (ot.updateQueue = l)),
      (l.memoCache = e),
      (l = e.data[e.index]),
      l === void 0)
    )
      for (l = e.data[e.index] = Array(t), n = 0; n < t; n++) l[n] = ue;
    return (e.index++, l);
  }
  function Fe(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Nu(t) {
    var e = Lt();
    return jc(e, At, t);
  }
  function jc(t, e, l) {
    var n = t.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = l;
    var a = t.baseQueue,
      i = n.pending;
    if (i !== null) {
      if (a !== null) {
        var o = a.next;
        ((a.next = i.next), (i.next = o));
      }
      ((e.baseQueue = a = i), (n.pending = null));
    }
    if (((i = t.baseState), a === null)) t.memoizedState = i;
    else {
      e = a.next;
      var d = (o = null),
        p = null,
        x = e,
        D = !1;
      do {
        var w = x.lane & -536870913;
        if (w !== x.lane ? (gt & w) === w : (ml & w) === w) {
          var O = x.revertLane;
          if (O === 0)
            (p !== null &&
              (p = p.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: x.action,
                  hasEagerState: x.hasEagerState,
                  eagerState: x.eagerState,
                  next: null,
                }),
              w === En && (D = !0));
          else if ((ml & O) === O) {
            ((x = x.next), O === En && (D = !0));
            continue;
          } else
            ((w = {
              lane: 0,
              revertLane: x.revertLane,
              action: x.action,
              hasEagerState: x.hasEagerState,
              eagerState: x.eagerState,
              next: null,
            }),
              p === null ? ((d = p = w), (o = i)) : (p = p.next = w),
              (ot.lanes |= O),
              (El |= O));
          ((w = x.action),
            Jl && l(i, w),
            (i = x.hasEagerState ? x.eagerState : l(i, w)));
        } else
          ((O = {
            lane: w,
            revertLane: x.revertLane,
            action: x.action,
            hasEagerState: x.hasEagerState,
            eagerState: x.eagerState,
            next: null,
          }),
            p === null ? ((d = p = O), (o = i)) : (p = p.next = O),
            (ot.lanes |= w),
            (El |= w));
        x = x.next;
      } while (x !== null && x !== e);
      if (
        (p === null ? (o = i) : (p.next = d),
        !me(i, t.memoizedState) && ((Zt = !0), D && ((l = Tn), l !== null)))
      )
        throw l;
      ((t.memoizedState = i),
        (t.baseState = o),
        (t.baseQueue = p),
        (n.lastRenderedState = i));
    }
    return (a === null && (n.lanes = 0), [t.memoizedState, n.dispatch]);
  }
  function Bc(t) {
    var e = Lt(),
      l = e.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = t;
    var n = l.dispatch,
      a = l.pending,
      i = e.memoizedState;
    if (a !== null) {
      l.pending = null;
      var o = (a = a.next);
      do ((i = t(i, o.action)), (o = o.next));
      while (o !== a);
      (me(i, e.memoizedState) || (Zt = !0),
        (e.memoizedState = i),
        e.baseQueue === null && (e.baseState = i),
        (l.lastRenderedState = i));
    }
    return [i, n];
  }
  function ko(t, e, l) {
    var n = ot,
      a = Lt(),
      i = bt;
    if (i) {
      if (l === void 0) throw Error(r(407));
      l = l();
    } else l = e();
    var o = !me((At || a).memoizedState, l);
    (o && ((a.memoizedState = l), (Zt = !0)), (a = a.queue));
    var d = Wo.bind(null, n, a, t);
    if (
      (Sa(2048, 8, d, [t]),
      a.getSnapshot !== e || o || (qt !== null && qt.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        On(9, Mu(), Fo.bind(null, n, a, l, e), null),
        Nt === null)
      )
        throw Error(r(349));
      i || (ml & 124) !== 0 || $o(n, e, l);
    }
    return l;
  }
  function $o(t, e, l) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: l }),
      (e = ot.updateQueue),
      e === null
        ? ((e = wc()), (ot.updateQueue = e), (e.stores = [t]))
        : ((l = e.stores), l === null ? (e.stores = [t]) : l.push(t)));
  }
  function Fo(t, e, l, n) {
    ((e.value = l), (e.getSnapshot = n), Po(e) && Io(t));
  }
  function Wo(t, e, l) {
    return l(function () {
      Po(e) && Io(t);
    });
  }
  function Po(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !me(t, l);
    } catch {
      return !0;
    }
  }
  function Io(t) {
    var e = gn(t, 2);
    e !== null && Se(e, t, 2);
  }
  function Hc(t) {
    var e = re();
    if (typeof t == "function") {
      var l = t;
      if (((t = l()), Jl)) {
        cl(!0);
        try {
          l();
        } finally {
          cl(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Fe,
        lastRenderedState: t,
      }),
      e
    );
  }
  function tf(t, e, l, n) {
    return ((t.baseState = l), jc(t, At, typeof n == "function" ? n : Fe));
  }
  function x0(t, e, l, n, a) {
    if (Du(t)) throw Error(r(485));
    if (((t = e.action), t !== null)) {
      var i = {
        payload: a,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (o) {
          i.listeners.push(o);
        },
      };
      (R.T !== null ? l(!0) : (i.isTransition = !1),
        n(i),
        (l = e.pending),
        l === null
          ? ((i.next = e.pending = i), ef(e, i))
          : ((i.next = l.next), (e.pending = l.next = i)));
    }
  }
  function ef(t, e) {
    var l = e.action,
      n = e.payload,
      a = t.state;
    if (e.isTransition) {
      var i = R.T,
        o = {};
      R.T = o;
      try {
        var d = l(a, n),
          p = R.S;
        (p !== null && p(o, d), lf(t, e, d));
      } catch (x) {
        qc(t, e, x);
      } finally {
        R.T = i;
      }
    } else
      try {
        ((i = l(a, n)), lf(t, e, i));
      } catch (x) {
        qc(t, e, x);
      }
  }
  function lf(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (n) {
            nf(t, e, n);
          },
          function (n) {
            return qc(t, e, n);
          },
        )
      : nf(t, e, l);
  }
  function nf(t, e, l) {
    ((e.status = "fulfilled"),
      (e.value = l),
      af(e),
      (t.state = l),
      (e = t.pending),
      e !== null &&
        ((l = e.next),
        l === e ? (t.pending = null) : ((l = l.next), (e.next = l), ef(t, l))));
  }
  function qc(t, e, l) {
    var n = t.pending;
    if (((t.pending = null), n !== null)) {
      n = n.next;
      do ((e.status = "rejected"), (e.reason = l), af(e), (e = e.next));
      while (e !== n);
    }
    t.action = null;
  }
  function af(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function uf(t, e) {
    return e;
  }
  function cf(t, e) {
    if (bt) {
      var l = Nt.formState;
      if (l !== null) {
        t: {
          var n = ot;
          if (bt) {
            if (Ut) {
              e: {
                for (var a = Ut, i = Be; a.nodeType !== 8; ) {
                  if (!i) {
                    a = null;
                    break e;
                  }
                  if (((a = we(a.nextSibling)), a === null)) {
                    a = null;
                    break e;
                  }
                }
                ((i = a.data), (a = i === "F!" || i === "F" ? a : null));
              }
              if (a) {
                ((Ut = we(a.nextSibling)), (n = a.data === "F!"));
                break t;
              }
            }
            Vl(n);
          }
          n = !1;
        }
        n && (e = l[0]);
      }
    }
    return (
      (l = re()),
      (l.memoizedState = l.baseState = e),
      (n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: uf,
        lastRenderedState: e,
      }),
      (l.queue = n),
      (l = Of.bind(null, ot, n)),
      (n.dispatch = l),
      (n = Hc(!1)),
      (i = Vc.bind(null, ot, !1, n.queue)),
      (n = re()),
      (a = { state: e, dispatch: null, action: t, pending: null }),
      (n.queue = a),
      (l = x0.bind(null, ot, a, i, l)),
      (a.dispatch = l),
      (n.memoizedState = t),
      [e, l, !1]
    );
  }
  function rf(t) {
    var e = Lt();
    return sf(e, At, t);
  }
  function sf(t, e, l) {
    if (
      ((e = jc(t, e, uf)[0]),
      (t = Nu(Fe)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var n = ba(e);
      } catch (o) {
        throw o === ha ? Tu : o;
      }
    else n = e;
    e = Lt();
    var a = e.queue,
      i = a.dispatch;
    return (
      l !== e.memoizedState &&
        ((ot.flags |= 2048), On(9, Mu(), R0.bind(null, a, l), null)),
      [n, i, t]
    );
  }
  function R0(t, e) {
    t.action = e;
  }
  function of(t) {
    var e = Lt(),
      l = At;
    if (l !== null) return sf(e, l, t);
    (Lt(), (e = e.memoizedState), (l = Lt()));
    var n = l.queue.dispatch;
    return ((l.memoizedState = t), [e, n, !1]);
  }
  function On(t, e, l, n) {
    return (
      (t = { tag: t, create: l, deps: n, inst: e, next: null }),
      (e = ot.updateQueue),
      e === null && ((e = wc()), (ot.updateQueue = e)),
      (l = e.lastEffect),
      l === null
        ? (e.lastEffect = t.next = t)
        : ((n = l.next), (l.next = t), (t.next = n), (e.lastEffect = t)),
      t
    );
  }
  function Mu() {
    return { destroy: void 0, resource: void 0 };
  }
  function ff() {
    return Lt().memoizedState;
  }
  function zu(t, e, l, n) {
    var a = re();
    ((n = n === void 0 ? null : n),
      (ot.flags |= t),
      (a.memoizedState = On(1 | e, Mu(), l, n)));
  }
  function Sa(t, e, l, n) {
    var a = Lt();
    n = n === void 0 ? null : n;
    var i = a.memoizedState.inst;
    At !== null && n !== null && Nc(n, At.memoizedState.deps)
      ? (a.memoizedState = On(e, i, l, n))
      : ((ot.flags |= t), (a.memoizedState = On(1 | e, i, l, n)));
  }
  function df(t, e) {
    zu(8390656, 8, t, e);
  }
  function hf(t, e) {
    Sa(2048, 8, t, e);
  }
  function mf(t, e) {
    return Sa(4, 2, t, e);
  }
  function yf(t, e) {
    return Sa(4, 4, t, e);
  }
  function pf(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function () {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function gf(t, e, l) {
    ((l = l != null ? l.concat([t]) : null), Sa(4, 4, pf.bind(null, e, t), l));
  }
  function Lc() {}
  function vf(t, e) {
    var l = Lt();
    e = e === void 0 ? null : e;
    var n = l.memoizedState;
    return e !== null && Nc(e, n[1]) ? n[0] : ((l.memoizedState = [t, e]), t);
  }
  function bf(t, e) {
    var l = Lt();
    e = e === void 0 ? null : e;
    var n = l.memoizedState;
    if (e !== null && Nc(e, n[1])) return n[0];
    if (((n = t()), Jl)) {
      cl(!0);
      try {
        t();
      } finally {
        cl(!1);
      }
    }
    return ((l.memoizedState = [n, e]), n);
  }
  function Gc(t, e, l) {
    return l === void 0 || (ml & 1073741824) !== 0
      ? (t.memoizedState = e)
      : ((t.memoizedState = l), (t = Td()), (ot.lanes |= t), (El |= t), l);
  }
  function Sf(t, e, l, n) {
    return me(l, e)
      ? l
      : An.current !== null
        ? ((t = Gc(t, l, n)), me(t, e) || (Zt = !0), t)
        : (ml & 42) === 0
          ? ((Zt = !0), (t.memoizedState = l))
          : ((t = Td()), (ot.lanes |= t), (El |= t), e);
  }
  function Ef(t, e, l, n, a) {
    var i = L.p;
    L.p = i !== 0 && 8 > i ? i : 8;
    var o = R.T,
      d = {};
    ((R.T = d), Vc(t, !1, e, l));
    try {
      var p = a(),
        x = R.S;
      if (
        (x !== null && x(d, p),
        p !== null && typeof p == "object" && typeof p.then == "function")
      ) {
        var D = E0(p, n);
        Ea(t, e, D, be(t));
      } else Ea(t, e, n, be(t));
    } catch (w) {
      Ea(t, e, { then: function () {}, status: "rejected", reason: w }, be());
    } finally {
      ((L.p = i), (R.T = o));
    }
  }
  function O0() {}
  function Yc(t, e, l, n) {
    if (t.tag !== 5) throw Error(r(476));
    var a = Tf(t).queue;
    Ef(
      t,
      a,
      e,
      K,
      l === null
        ? O0
        : function () {
            return (Af(t), l(n));
          },
    );
  }
  function Tf(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: K,
      baseState: K,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Fe,
        lastRenderedState: K,
      },
      next: null,
    };
    var l = {};
    return (
      (e.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Fe,
          lastRenderedState: l,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function Af(t) {
    var e = Tf(t).next.queue;
    Ea(t, e, {}, be());
  }
  function Xc() {
    return ee(La);
  }
  function xf() {
    return Lt().memoizedState;
  }
  function Rf() {
    return Lt().memoizedState;
  }
  function _0(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = be();
          t = dl(l);
          var n = hl(e, t, l);
          (n !== null && (Se(n, e, l), ya(n, e, l)),
            (e = { cache: vc() }),
            (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function N0(t, e, l) {
    var n = be();
    ((l = {
      lane: n,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Du(t)
        ? _f(e, l)
        : ((l = rc(t, e, l, n)), l !== null && (Se(l, t, n), Nf(l, e, n))));
  }
  function Of(t, e, l) {
    var n = be();
    Ea(t, e, l, n);
  }
  function Ea(t, e, l, n) {
    var a = {
      lane: n,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Du(t)) _f(e, a);
    else {
      var i = t.alternate;
      if (
        t.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = e.lastRenderedReducer), i !== null)
      )
        try {
          var o = e.lastRenderedState,
            d = i(o, l);
          if (((a.hasEagerState = !0), (a.eagerState = d), me(d, o)))
            return (mu(t, e, a, 0), Nt === null && hu(), !1);
        } catch {
        } finally {
        }
      if (((l = rc(t, e, a, n)), l !== null))
        return (Se(l, t, n), Nf(l, e, n), !0);
    }
    return !1;
  }
  function Vc(t, e, l, n) {
    if (
      ((n = {
        lane: 2,
        revertLane: Er(),
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Du(t))
    ) {
      if (e) throw Error(r(479));
    } else ((e = rc(t, l, n, 2)), e !== null && Se(e, t, 2));
  }
  function Du(t) {
    var e = t.alternate;
    return t === ot || (e !== null && e === ot);
  }
  function _f(t, e) {
    xn = Ru = !0;
    var l = t.pending;
    (l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)),
      (t.pending = e));
  }
  function Nf(t, e, l) {
    if ((l & 4194048) !== 0) {
      var n = e.lanes;
      ((n &= t.pendingLanes), (l |= n), (e.lanes = l), Us(t, l));
    }
  }
  var Cu = {
      readContext: ee,
      use: _u,
      useCallback: Bt,
      useContext: Bt,
      useEffect: Bt,
      useImperativeHandle: Bt,
      useLayoutEffect: Bt,
      useInsertionEffect: Bt,
      useMemo: Bt,
      useReducer: Bt,
      useRef: Bt,
      useState: Bt,
      useDebugValue: Bt,
      useDeferredValue: Bt,
      useTransition: Bt,
      useSyncExternalStore: Bt,
      useId: Bt,
      useHostTransitionStatus: Bt,
      useFormState: Bt,
      useActionState: Bt,
      useOptimistic: Bt,
      useMemoCache: Bt,
      useCacheRefresh: Bt,
    },
    Mf = {
      readContext: ee,
      use: _u,
      useCallback: function (t, e) {
        return ((re().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: ee,
      useEffect: df,
      useImperativeHandle: function (t, e, l) {
        ((l = l != null ? l.concat([t]) : null),
          zu(4194308, 4, pf.bind(null, e, t), l));
      },
      useLayoutEffect: function (t, e) {
        return zu(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        zu(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var l = re();
        e = e === void 0 ? null : e;
        var n = t();
        if (Jl) {
          cl(!0);
          try {
            t();
          } finally {
            cl(!1);
          }
        }
        return ((l.memoizedState = [n, e]), n);
      },
      useReducer: function (t, e, l) {
        var n = re();
        if (l !== void 0) {
          var a = l(e);
          if (Jl) {
            cl(!0);
            try {
              l(e);
            } finally {
              cl(!1);
            }
          }
        } else a = e;
        return (
          (n.memoizedState = n.baseState = a),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: a,
          }),
          (n.queue = t),
          (t = t.dispatch = N0.bind(null, ot, t)),
          [n.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = re();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = Hc(t);
        var e = t.queue,
          l = Of.bind(null, ot, e);
        return ((e.dispatch = l), [t.memoizedState, l]);
      },
      useDebugValue: Lc,
      useDeferredValue: function (t, e) {
        var l = re();
        return Gc(l, t, e);
      },
      useTransition: function () {
        var t = Hc(!1);
        return (
          (t = Ef.bind(null, ot, t.queue, !0, !1)),
          (re().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, l) {
        var n = ot,
          a = re();
        if (bt) {
          if (l === void 0) throw Error(r(407));
          l = l();
        } else {
          if (((l = e()), Nt === null)) throw Error(r(349));
          (gt & 124) !== 0 || $o(n, e, l);
        }
        a.memoizedState = l;
        var i = { value: l, getSnapshot: e };
        return (
          (a.queue = i),
          df(Wo.bind(null, n, i, t), [t]),
          (n.flags |= 2048),
          On(9, Mu(), Fo.bind(null, n, i, l, e), null),
          l
        );
      },
      useId: function () {
        var t = re(),
          e = Nt.identifierPrefix;
        if (bt) {
          var l = Je,
            n = Ke;
          ((l = (n & ~(1 << (32 - he(n) - 1))).toString(32) + l),
            (e = "«" + e + "R" + l),
            (l = Ou++),
            0 < l && (e += "H" + l.toString(32)),
            (e += "»"));
        } else ((l = T0++), (e = "«" + e + "r" + l.toString(32) + "»"));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Xc,
      useFormState: cf,
      useActionState: cf,
      useOptimistic: function (t) {
        var e = re();
        e.memoizedState = e.baseState = t;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = l),
          (e = Vc.bind(null, ot, !0, l)),
          (l.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: Uc,
      useCacheRefresh: function () {
        return (re().memoizedState = _0.bind(null, ot));
      },
    },
    zf = {
      readContext: ee,
      use: _u,
      useCallback: vf,
      useContext: ee,
      useEffect: hf,
      useImperativeHandle: gf,
      useInsertionEffect: mf,
      useLayoutEffect: yf,
      useMemo: bf,
      useReducer: Nu,
      useRef: ff,
      useState: function () {
        return Nu(Fe);
      },
      useDebugValue: Lc,
      useDeferredValue: function (t, e) {
        var l = Lt();
        return Sf(l, At.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Nu(Fe)[0],
          e = Lt().memoizedState;
        return [typeof t == "boolean" ? t : ba(t), e];
      },
      useSyncExternalStore: ko,
      useId: xf,
      useHostTransitionStatus: Xc,
      useFormState: rf,
      useActionState: rf,
      useOptimistic: function (t, e) {
        var l = Lt();
        return tf(l, At, t, e);
      },
      useMemoCache: Uc,
      useCacheRefresh: Rf,
    },
    M0 = {
      readContext: ee,
      use: _u,
      useCallback: vf,
      useContext: ee,
      useEffect: hf,
      useImperativeHandle: gf,
      useInsertionEffect: mf,
      useLayoutEffect: yf,
      useMemo: bf,
      useReducer: Bc,
      useRef: ff,
      useState: function () {
        return Bc(Fe);
      },
      useDebugValue: Lc,
      useDeferredValue: function (t, e) {
        var l = Lt();
        return At === null ? Gc(l, t, e) : Sf(l, At.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Bc(Fe)[0],
          e = Lt().memoizedState;
        return [typeof t == "boolean" ? t : ba(t), e];
      },
      useSyncExternalStore: ko,
      useId: xf,
      useHostTransitionStatus: Xc,
      useFormState: of,
      useActionState: of,
      useOptimistic: function (t, e) {
        var l = Lt();
        return At !== null
          ? tf(l, At, t, e)
          : ((l.baseState = t), [t, l.queue.dispatch]);
      },
      useMemoCache: Uc,
      useCacheRefresh: Rf,
    },
    _n = null,
    Ta = 0;
  function wu(t) {
    var e = Ta;
    return ((Ta += 1), _n === null && (_n = []), Go(_n, t, e));
  }
  function Aa(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function Uu(t, e) {
    throw e.$$typeof === N
      ? Error(r(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          r(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t,
          ),
        ));
  }
  function Df(t) {
    var e = t._init;
    return e(t._payload);
  }
  function Cf(t) {
    function e(T, S) {
      if (t) {
        var A = T.deletions;
        A === null ? ((T.deletions = [S]), (T.flags |= 16)) : A.push(S);
      }
    }
    function l(T, S) {
      if (!t) return null;
      for (; S !== null; ) (e(T, S), (S = S.sibling));
      return null;
    }
    function n(T) {
      for (var S = new Map(); T !== null; )
        (T.key !== null ? S.set(T.key, T) : S.set(T.index, T), (T = T.sibling));
      return S;
    }
    function a(T, S) {
      return ((T = Ze(T, S)), (T.index = 0), (T.sibling = null), T);
    }
    function i(T, S, A) {
      return (
        (T.index = A),
        t
          ? ((A = T.alternate),
            A !== null
              ? ((A = A.index), A < S ? ((T.flags |= 67108866), S) : A)
              : ((T.flags |= 67108866), S))
          : ((T.flags |= 1048576), S)
      );
    }
    function o(T) {
      return (t && T.alternate === null && (T.flags |= 67108866), T);
    }
    function d(T, S, A, C) {
      return S === null || S.tag !== 6
        ? ((S = oc(A, T.mode, C)), (S.return = T), S)
        : ((S = a(S, A)), (S.return = T), S);
    }
    function p(T, S, A, C) {
      var J = A.type;
      return J === z
        ? D(T, S, A.props.children, C, A.key)
        : S !== null &&
            (S.elementType === J ||
              (typeof J == "object" &&
                J !== null &&
                J.$$typeof === it &&
                Df(J) === S.type))
          ? ((S = a(S, A.props)), Aa(S, A), (S.return = T), S)
          : ((S = pu(A.type, A.key, A.props, null, T.mode, C)),
            Aa(S, A),
            (S.return = T),
            S);
    }
    function x(T, S, A, C) {
      return S === null ||
        S.tag !== 4 ||
        S.stateNode.containerInfo !== A.containerInfo ||
        S.stateNode.implementation !== A.implementation
        ? ((S = fc(A, T.mode, C)), (S.return = T), S)
        : ((S = a(S, A.children || [])), (S.return = T), S);
    }
    function D(T, S, A, C, J) {
      return S === null || S.tag !== 7
        ? ((S = Ll(A, T.mode, C, J)), (S.return = T), S)
        : ((S = a(S, A)), (S.return = T), S);
    }
    function w(T, S, A) {
      if (
        (typeof S == "string" && S !== "") ||
        typeof S == "number" ||
        typeof S == "bigint"
      )
        return ((S = oc("" + S, T.mode, A)), (S.return = T), S);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case B:
            return (
              (A = pu(S.type, S.key, S.props, null, T.mode, A)),
              Aa(A, S),
              (A.return = T),
              A
            );
          case Y:
            return ((S = fc(S, T.mode, A)), (S.return = T), S);
          case it:
            var C = S._init;
            return ((S = C(S._payload)), w(T, S, A));
        }
        if (_t(S) || wt(S))
          return ((S = Ll(S, T.mode, A, null)), (S.return = T), S);
        if (typeof S.then == "function") return w(T, wu(S), A);
        if (S.$$typeof === tt) return w(T, Su(T, S), A);
        Uu(T, S);
      }
      return null;
    }
    function O(T, S, A, C) {
      var J = S !== null ? S.key : null;
      if (
        (typeof A == "string" && A !== "") ||
        typeof A == "number" ||
        typeof A == "bigint"
      )
        return J !== null ? null : d(T, S, "" + A, C);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case B:
            return A.key === J ? p(T, S, A, C) : null;
          case Y:
            return A.key === J ? x(T, S, A, C) : null;
          case it:
            return ((J = A._init), (A = J(A._payload)), O(T, S, A, C));
        }
        if (_t(A) || wt(A)) return J !== null ? null : D(T, S, A, C, null);
        if (typeof A.then == "function") return O(T, S, wu(A), C);
        if (A.$$typeof === tt) return O(T, S, Su(T, A), C);
        Uu(T, A);
      }
      return null;
    }
    function _(T, S, A, C, J) {
      if (
        (typeof C == "string" && C !== "") ||
        typeof C == "number" ||
        typeof C == "bigint"
      )
        return ((T = T.get(A) || null), d(S, T, "" + C, J));
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case B:
            return (
              (T = T.get(C.key === null ? A : C.key) || null),
              p(S, T, C, J)
            );
          case Y:
            return (
              (T = T.get(C.key === null ? A : C.key) || null),
              x(S, T, C, J)
            );
          case it:
            var dt = C._init;
            return ((C = dt(C._payload)), _(T, S, A, C, J));
        }
        if (_t(C) || wt(C))
          return ((T = T.get(A) || null), D(S, T, C, J, null));
        if (typeof C.then == "function") return _(T, S, A, wu(C), J);
        if (C.$$typeof === tt) return _(T, S, A, Su(S, C), J);
        Uu(S, C);
      }
      return null;
    }
    function at(T, S, A, C) {
      for (
        var J = null, dt = null, W = S, lt = (S = 0), Jt = null;
        W !== null && lt < A.length;
        lt++
      ) {
        W.index > lt ? ((Jt = W), (W = null)) : (Jt = W.sibling);
        var vt = O(T, W, A[lt], C);
        if (vt === null) {
          W === null && (W = Jt);
          break;
        }
        (t && W && vt.alternate === null && e(T, W),
          (S = i(vt, S, lt)),
          dt === null ? (J = vt) : (dt.sibling = vt),
          (dt = vt),
          (W = Jt));
      }
      if (lt === A.length) return (l(T, W), bt && Yl(T, lt), J);
      if (W === null) {
        for (; lt < A.length; lt++)
          ((W = w(T, A[lt], C)),
            W !== null &&
              ((S = i(W, S, lt)),
              dt === null ? (J = W) : (dt.sibling = W),
              (dt = W)));
        return (bt && Yl(T, lt), J);
      }
      for (W = n(W); lt < A.length; lt++)
        ((Jt = _(W, T, lt, A[lt], C)),
          Jt !== null &&
            (t &&
              Jt.alternate !== null &&
              W.delete(Jt.key === null ? lt : Jt.key),
            (S = i(Jt, S, lt)),
            dt === null ? (J = Jt) : (dt.sibling = Jt),
            (dt = Jt)));
      return (
        t &&
          W.forEach(function (zl) {
            return e(T, zl);
          }),
        bt && Yl(T, lt),
        J
      );
    }
    function et(T, S, A, C) {
      if (A == null) throw Error(r(151));
      for (
        var J = null, dt = null, W = S, lt = (S = 0), Jt = null, vt = A.next();
        W !== null && !vt.done;
        lt++, vt = A.next()
      ) {
        W.index > lt ? ((Jt = W), (W = null)) : (Jt = W.sibling);
        var zl = O(T, W, vt.value, C);
        if (zl === null) {
          W === null && (W = Jt);
          break;
        }
        (t && W && zl.alternate === null && e(T, W),
          (S = i(zl, S, lt)),
          dt === null ? (J = zl) : (dt.sibling = zl),
          (dt = zl),
          (W = Jt));
      }
      if (vt.done) return (l(T, W), bt && Yl(T, lt), J);
      if (W === null) {
        for (; !vt.done; lt++, vt = A.next())
          ((vt = w(T, vt.value, C)),
            vt !== null &&
              ((S = i(vt, S, lt)),
              dt === null ? (J = vt) : (dt.sibling = vt),
              (dt = vt)));
        return (bt && Yl(T, lt), J);
      }
      for (W = n(W); !vt.done; lt++, vt = A.next())
        ((vt = _(W, T, lt, vt.value, C)),
          vt !== null &&
            (t &&
              vt.alternate !== null &&
              W.delete(vt.key === null ? lt : vt.key),
            (S = i(vt, S, lt)),
            dt === null ? (J = vt) : (dt.sibling = vt),
            (dt = vt)));
      return (
        t &&
          W.forEach(function (zp) {
            return e(T, zp);
          }),
        bt && Yl(T, lt),
        J
      );
    }
    function Rt(T, S, A, C) {
      if (
        (typeof A == "object" &&
          A !== null &&
          A.type === z &&
          A.key === null &&
          (A = A.props.children),
        typeof A == "object" && A !== null)
      ) {
        switch (A.$$typeof) {
          case B:
            t: {
              for (var J = A.key; S !== null; ) {
                if (S.key === J) {
                  if (((J = A.type), J === z)) {
                    if (S.tag === 7) {
                      (l(T, S.sibling),
                        (C = a(S, A.props.children)),
                        (C.return = T),
                        (T = C));
                      break t;
                    }
                  } else if (
                    S.elementType === J ||
                    (typeof J == "object" &&
                      J !== null &&
                      J.$$typeof === it &&
                      Df(J) === S.type)
                  ) {
                    (l(T, S.sibling),
                      (C = a(S, A.props)),
                      Aa(C, A),
                      (C.return = T),
                      (T = C));
                    break t;
                  }
                  l(T, S);
                  break;
                } else e(T, S);
                S = S.sibling;
              }
              A.type === z
                ? ((C = Ll(A.props.children, T.mode, C, A.key)),
                  (C.return = T),
                  (T = C))
                : ((C = pu(A.type, A.key, A.props, null, T.mode, C)),
                  Aa(C, A),
                  (C.return = T),
                  (T = C));
            }
            return o(T);
          case Y:
            t: {
              for (J = A.key; S !== null; ) {
                if (S.key === J)
                  if (
                    S.tag === 4 &&
                    S.stateNode.containerInfo === A.containerInfo &&
                    S.stateNode.implementation === A.implementation
                  ) {
                    (l(T, S.sibling),
                      (C = a(S, A.children || [])),
                      (C.return = T),
                      (T = C));
                    break t;
                  } else {
                    l(T, S);
                    break;
                  }
                else e(T, S);
                S = S.sibling;
              }
              ((C = fc(A, T.mode, C)), (C.return = T), (T = C));
            }
            return o(T);
          case it:
            return ((J = A._init), (A = J(A._payload)), Rt(T, S, A, C));
        }
        if (_t(A)) return at(T, S, A, C);
        if (wt(A)) {
          if (((J = wt(A)), typeof J != "function")) throw Error(r(150));
          return ((A = J.call(A)), et(T, S, A, C));
        }
        if (typeof A.then == "function") return Rt(T, S, wu(A), C);
        if (A.$$typeof === tt) return Rt(T, S, Su(T, A), C);
        Uu(T, A);
      }
      return (typeof A == "string" && A !== "") ||
        typeof A == "number" ||
        typeof A == "bigint"
        ? ((A = "" + A),
          S !== null && S.tag === 6
            ? (l(T, S.sibling), (C = a(S, A)), (C.return = T), (T = C))
            : (l(T, S), (C = oc(A, T.mode, C)), (C.return = T), (T = C)),
          o(T))
        : l(T, S);
    }
    return function (T, S, A, C) {
      try {
        Ta = 0;
        var J = Rt(T, S, A, C);
        return ((_n = null), J);
      } catch (W) {
        if (W === ha || W === Tu) throw W;
        var dt = ye(29, W, null, T.mode);
        return ((dt.lanes = C), (dt.return = T), dt);
      } finally {
      }
    };
  }
  var Nn = Cf(!0),
    wf = Cf(!1),
    Ne = j(null),
    He = null;
  function yl(t) {
    var e = t.alternate;
    (G(Yt, Yt.current & 1),
      G(Ne, t),
      He === null &&
        (e === null || An.current !== null || e.memoizedState !== null) &&
        (He = t));
  }
  function Uf(t) {
    if (t.tag === 22) {
      if ((G(Yt, Yt.current), G(Ne, t), He === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (He = t);
      }
    } else pl();
  }
  function pl() {
    (G(Yt, Yt.current), G(Ne, Ne.current));
  }
  function We(t) {
    (Q(Ne), He === t && (He = null), Q(Yt));
  }
  var Yt = j(0);
  function ju(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (
          l !== null &&
          ((l = l.dehydrated), l === null || l.data === "$?" || wr(l))
        )
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        ((e.child.return = e), (e = e.child));
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
    return null;
  }
  function Qc(t, e, l, n) {
    ((e = t.memoizedState),
      (l = l(n, e)),
      (l = l == null ? e : E({}, e, l)),
      (t.memoizedState = l),
      t.lanes === 0 && (t.updateQueue.baseState = l));
  }
  var Zc = {
    enqueueSetState: function (t, e, l) {
      t = t._reactInternals;
      var n = be(),
        a = dl(n);
      ((a.payload = e),
        l != null && (a.callback = l),
        (e = hl(t, a, n)),
        e !== null && (Se(e, t, n), ya(e, t, n)));
    },
    enqueueReplaceState: function (t, e, l) {
      t = t._reactInternals;
      var n = be(),
        a = dl(n);
      ((a.tag = 1),
        (a.payload = e),
        l != null && (a.callback = l),
        (e = hl(t, a, n)),
        e !== null && (Se(e, t, n), ya(e, t, n)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var l = be(),
        n = dl(l);
      ((n.tag = 2),
        e != null && (n.callback = e),
        (e = hl(t, n, l)),
        e !== null && (Se(e, t, l), ya(e, t, l)));
    },
  };
  function jf(t, e, l, n, a, i, o) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(n, i, o)
        : e.prototype && e.prototype.isPureReactComponent
          ? !ua(l, n) || !ua(a, i)
          : !0
    );
  }
  function Bf(t, e, l, n) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(l, n),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(l, n),
      e.state !== t && Zc.enqueueReplaceState(e, e.state, null));
  }
  function kl(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var n in e) n !== "ref" && (l[n] = e[n]);
    }
    if ((t = t.defaultProps)) {
      l === e && (l = E({}, l));
      for (var a in t) l[a] === void 0 && (l[a] = t[a]);
    }
    return l;
  }
  var Bu =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var e = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(e)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function Hf(t) {
    Bu(t);
  }
  function qf(t) {
    console.error(t);
  }
  function Lf(t) {
    Bu(t);
  }
  function Hu(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function Gf(t, e, l) {
    try {
      var n = t.onCaughtError;
      n(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Kc(t, e, l) {
    return (
      (l = dl(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Hu(t, e);
      }),
      l
    );
  }
  function Yf(t) {
    return ((t = dl(t)), (t.tag = 3), t);
  }
  function Xf(t, e, l, n) {
    var a = l.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var i = n.value;
      ((t.payload = function () {
        return a(i);
      }),
        (t.callback = function () {
          Gf(e, l, n);
        }));
    }
    var o = l.stateNode;
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (t.callback = function () {
        (Gf(e, l, n),
          typeof a != "function" &&
            (Tl === null ? (Tl = new Set([this])) : Tl.add(this)));
        var d = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: d !== null ? d : "",
        });
      });
  }
  function z0(t, e, l, n, a) {
    if (
      ((l.flags |= 32768),
      n !== null && typeof n == "object" && typeof n.then == "function")
    ) {
      if (
        ((e = l.alternate),
        e !== null && oa(e, l, a, !0),
        (l = Ne.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 13:
            return (
              He === null ? pr() : l.alternate === null && jt === 0 && (jt = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = a),
              n === Ec
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null ? (l.updateQueue = new Set([n])) : e.add(n),
                  vr(t, n, a)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              n === Ec
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([n]),
                      }),
                      (l.updateQueue = e))
                    : ((l = e.retryQueue),
                      l === null ? (e.retryQueue = new Set([n])) : l.add(n)),
                  vr(t, n, a)),
              !1
            );
        }
        throw Error(r(435, l.tag));
      }
      return (vr(t, n, a), pr(), !1);
    }
    if (bt)
      return (
        (e = Ne.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = a),
            n !== mc && ((t = Error(r(422), { cause: n })), sa(xe(t, l))))
          : (n !== mc && ((e = Error(r(423), { cause: n })), sa(xe(e, l))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (a &= -a),
            (t.lanes |= a),
            (n = xe(n, l)),
            (a = Kc(t.stateNode, n, a)),
            xc(t, a),
            jt !== 4 && (jt = 2)),
        !1
      );
    var i = Error(r(520), { cause: n });
    if (
      ((i = xe(i, l)),
      za === null ? (za = [i]) : za.push(i),
      jt !== 4 && (jt = 2),
      e === null)
    )
      return !0;
    ((n = xe(n, l)), (l = e));
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (t = a & -a),
            (l.lanes |= t),
            (t = Kc(l.stateNode, n, t)),
            xc(l, t),
            !1
          );
        case 1:
          if (
            ((e = l.type),
            (i = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (i !== null &&
                  typeof i.componentDidCatch == "function" &&
                  (Tl === null || !Tl.has(i)))))
          )
            return (
              (l.flags |= 65536),
              (a &= -a),
              (l.lanes |= a),
              (a = Yf(a)),
              Xf(a, t, l, n),
              xc(l, a),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Vf = Error(r(461)),
    Zt = !1;
  function $t(t, e, l, n) {
    e.child = t === null ? wf(e, null, l, n) : Nn(e, t.child, l, n);
  }
  function Qf(t, e, l, n, a) {
    l = l.render;
    var i = e.ref;
    if ("ref" in n) {
      var o = {};
      for (var d in n) d !== "ref" && (o[d] = n[d]);
    } else o = n;
    return (
      Zl(e),
      (n = Mc(t, e, l, o, i, a)),
      (d = zc()),
      t !== null && !Zt
        ? (Dc(t, e, a), Pe(t, e, a))
        : (bt && d && dc(e), (e.flags |= 1), $t(t, e, n, a), e.child)
    );
  }
  function Zf(t, e, l, n, a) {
    if (t === null) {
      var i = l.type;
      return typeof i == "function" &&
        !sc(i) &&
        i.defaultProps === void 0 &&
        l.compare === null
        ? ((e.tag = 15), (e.type = i), Kf(t, e, i, n, a))
        : ((t = pu(l.type, null, n, e, e.mode, a)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((i = t.child), !tr(t, a))) {
      var o = i.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : ua), l(o, n) && t.ref === e.ref)
      )
        return Pe(t, e, a);
    }
    return (
      (e.flags |= 1),
      (t = Ze(i, n)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function Kf(t, e, l, n, a) {
    if (t !== null) {
      var i = t.memoizedProps;
      if (ua(i, n) && t.ref === e.ref)
        if (((Zt = !1), (e.pendingProps = n = i), tr(t, a)))
          (t.flags & 131072) !== 0 && (Zt = !0);
        else return ((e.lanes = t.lanes), Pe(t, e, a));
    }
    return Jc(t, e, l, n, a);
  }
  function Jf(t, e, l) {
    var n = e.pendingProps,
      a = n.children,
      i = t !== null ? t.memoizedState : null;
    if (n.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (((n = i !== null ? i.baseLanes | l : l), t !== null)) {
          for (a = e.child = t.child, i = 0; a !== null; )
            ((i = i | a.lanes | a.childLanes), (a = a.sibling));
          e.childLanes = i & ~n;
        } else ((e.childLanes = 0), (e.child = null));
        return kf(t, e, n, l);
      }
      if ((l & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && Eu(e, i !== null ? i.cachePool : null),
          i !== null ? Zo(e, i) : Oc(),
          Uf(e));
      else
        return (
          (e.lanes = e.childLanes = 536870912),
          kf(t, e, i !== null ? i.baseLanes | l : l, l)
        );
    } else
      i !== null
        ? (Eu(e, i.cachePool), Zo(e, i), pl(), (e.memoizedState = null))
        : (t !== null && Eu(e, null), Oc(), pl());
    return ($t(t, e, a, l), e.child);
  }
  function kf(t, e, l, n) {
    var a = Sc();
    return (
      (a = a === null ? null : { parent: Gt._currentValue, pool: a }),
      (e.memoizedState = { baseLanes: l, cachePool: a }),
      t !== null && Eu(e, null),
      Oc(),
      Uf(e),
      t !== null && oa(t, e, n, !0),
      null
    );
  }
  function qu(t, e) {
    var l = e.ref;
    if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(r(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function Jc(t, e, l, n, a) {
    return (
      Zl(e),
      (l = Mc(t, e, l, n, void 0, a)),
      (n = zc()),
      t !== null && !Zt
        ? (Dc(t, e, a), Pe(t, e, a))
        : (bt && n && dc(e), (e.flags |= 1), $t(t, e, l, a), e.child)
    );
  }
  function $f(t, e, l, n, a, i) {
    return (
      Zl(e),
      (e.updateQueue = null),
      (l = Jo(e, n, l, a)),
      Ko(t),
      (n = zc()),
      t !== null && !Zt
        ? (Dc(t, e, i), Pe(t, e, i))
        : (bt && n && dc(e), (e.flags |= 1), $t(t, e, l, i), e.child)
    );
  }
  function Ff(t, e, l, n, a) {
    if ((Zl(e), e.stateNode === null)) {
      var i = vn,
        o = l.contextType;
      (typeof o == "object" && o !== null && (i = ee(o)),
        (i = new l(n, i)),
        (e.memoizedState =
          i.state !== null && i.state !== void 0 ? i.state : null),
        (i.updater = Zc),
        (e.stateNode = i),
        (i._reactInternals = e),
        (i = e.stateNode),
        (i.props = n),
        (i.state = e.memoizedState),
        (i.refs = {}),
        Tc(e),
        (o = l.contextType),
        (i.context = typeof o == "object" && o !== null ? ee(o) : vn),
        (i.state = e.memoizedState),
        (o = l.getDerivedStateFromProps),
        typeof o == "function" && (Qc(e, l, o, n), (i.state = e.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function" ||
          (typeof i.UNSAFE_componentWillMount != "function" &&
            typeof i.componentWillMount != "function") ||
          ((o = i.state),
          typeof i.componentWillMount == "function" && i.componentWillMount(),
          typeof i.UNSAFE_componentWillMount == "function" &&
            i.UNSAFE_componentWillMount(),
          o !== i.state && Zc.enqueueReplaceState(i, i.state, null),
          ga(e, n, i, a),
          pa(),
          (i.state = e.memoizedState)),
        typeof i.componentDidMount == "function" && (e.flags |= 4194308),
        (n = !0));
    } else if (t === null) {
      i = e.stateNode;
      var d = e.memoizedProps,
        p = kl(l, d);
      i.props = p;
      var x = i.context,
        D = l.contextType;
      ((o = vn), typeof D == "object" && D !== null && (o = ee(D)));
      var w = l.getDerivedStateFromProps;
      ((D =
        typeof w == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function"),
        (d = e.pendingProps !== d),
        D ||
          (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
            typeof i.componentWillReceiveProps != "function") ||
          ((d || x !== o) && Bf(e, i, n, o)),
        (fl = !1));
      var O = e.memoizedState;
      ((i.state = O),
        ga(e, n, i, a),
        pa(),
        (x = e.memoizedState),
        d || O !== x || fl
          ? (typeof w == "function" && (Qc(e, l, w, n), (x = e.memoizedState)),
            (p = fl || jf(e, l, p, n, O, x, o))
              ? (D ||
                  (typeof i.UNSAFE_componentWillMount != "function" &&
                    typeof i.componentWillMount != "function") ||
                  (typeof i.componentWillMount == "function" &&
                    i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == "function" &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof i.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = n),
                (e.memoizedState = x)),
            (i.props = n),
            (i.state = x),
            (i.context = o),
            (n = p))
          : (typeof i.componentDidMount == "function" && (e.flags |= 4194308),
            (n = !1)));
    } else {
      ((i = e.stateNode),
        Ac(t, e),
        (o = e.memoizedProps),
        (D = kl(l, o)),
        (i.props = D),
        (w = e.pendingProps),
        (O = i.context),
        (x = l.contextType),
        (p = vn),
        typeof x == "object" && x !== null && (p = ee(x)),
        (d = l.getDerivedStateFromProps),
        (x =
          typeof d == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function") ||
          (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
            typeof i.componentWillReceiveProps != "function") ||
          ((o !== w || O !== p) && Bf(e, i, n, p)),
        (fl = !1),
        (O = e.memoizedState),
        (i.state = O),
        ga(e, n, i, a),
        pa());
      var _ = e.memoizedState;
      o !== w ||
      O !== _ ||
      fl ||
      (t !== null && t.dependencies !== null && bu(t.dependencies))
        ? (typeof d == "function" && (Qc(e, l, d, n), (_ = e.memoizedState)),
          (D =
            fl ||
            jf(e, l, D, n, O, _, p) ||
            (t !== null && t.dependencies !== null && bu(t.dependencies)))
            ? (x ||
                (typeof i.UNSAFE_componentWillUpdate != "function" &&
                  typeof i.componentWillUpdate != "function") ||
                (typeof i.componentWillUpdate == "function" &&
                  i.componentWillUpdate(n, _, p),
                typeof i.UNSAFE_componentWillUpdate == "function" &&
                  i.UNSAFE_componentWillUpdate(n, _, p)),
              typeof i.componentDidUpdate == "function" && (e.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof i.componentDidUpdate != "function" ||
                (o === t.memoizedProps && O === t.memoizedState) ||
                (e.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                (o === t.memoizedProps && O === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = n),
              (e.memoizedState = _)),
          (i.props = n),
          (i.state = _),
          (i.context = p),
          (n = D))
        : (typeof i.componentDidUpdate != "function" ||
            (o === t.memoizedProps && O === t.memoizedState) ||
            (e.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != "function" ||
            (o === t.memoizedProps && O === t.memoizedState) ||
            (e.flags |= 1024),
          (n = !1));
    }
    return (
      (i = n),
      qu(t, e),
      (n = (e.flags & 128) !== 0),
      i || n
        ? ((i = e.stateNode),
          (l =
            n && typeof l.getDerivedStateFromError != "function"
              ? null
              : i.render()),
          (e.flags |= 1),
          t !== null && n
            ? ((e.child = Nn(e, t.child, null, a)),
              (e.child = Nn(e, null, l, a)))
            : $t(t, e, l, a),
          (e.memoizedState = i.state),
          (t = e.child))
        : (t = Pe(t, e, a)),
      t
    );
  }
  function Wf(t, e, l, n) {
    return (ra(), (e.flags |= 256), $t(t, e, l, n), e.child);
  }
  var kc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function $c(t) {
    return { baseLanes: t, cachePool: Ho() };
  }
  function Fc(t, e, l) {
    return ((t = t !== null ? t.childLanes & ~l : 0), e && (t |= Me), t);
  }
  function Pf(t, e, l) {
    var n = e.pendingProps,
      a = !1,
      i = (e.flags & 128) !== 0,
      o;
    if (
      ((o = i) ||
        (o =
          t !== null && t.memoizedState === null ? !1 : (Yt.current & 2) !== 0),
      o && ((a = !0), (e.flags &= -129)),
      (o = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (bt) {
        if ((a ? yl(e) : pl(), bt)) {
          var d = Ut,
            p;
          if ((p = d)) {
            t: {
              for (p = d, d = Be; p.nodeType !== 8; ) {
                if (!d) {
                  d = null;
                  break t;
                }
                if (((p = we(p.nextSibling)), p === null)) {
                  d = null;
                  break t;
                }
              }
              d = p;
            }
            d !== null
              ? ((e.memoizedState = {
                  dehydrated: d,
                  treeContext: Gl !== null ? { id: Ke, overflow: Je } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (p = ye(18, null, null, 0)),
                (p.stateNode = d),
                (p.return = e),
                (e.child = p),
                (ae = e),
                (Ut = null),
                (p = !0))
              : (p = !1);
          }
          p || Vl(e);
        }
        if (
          ((d = e.memoizedState),
          d !== null && ((d = d.dehydrated), d !== null))
        )
          return (wr(d) ? (e.lanes = 32) : (e.lanes = 536870912), null);
        We(e);
      }
      return (
        (d = n.children),
        (n = n.fallback),
        a
          ? (pl(),
            (a = e.mode),
            (d = Lu({ mode: "hidden", children: d }, a)),
            (n = Ll(n, a, l, null)),
            (d.return = e),
            (n.return = e),
            (d.sibling = n),
            (e.child = d),
            (a = e.child),
            (a.memoizedState = $c(l)),
            (a.childLanes = Fc(t, o, l)),
            (e.memoizedState = kc),
            n)
          : (yl(e), Wc(e, d))
      );
    }
    if (
      ((p = t.memoizedState), p !== null && ((d = p.dehydrated), d !== null))
    ) {
      if (i)
        e.flags & 256
          ? (yl(e), (e.flags &= -257), (e = Pc(t, e, l)))
          : e.memoizedState !== null
            ? (pl(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (pl(),
              (a = n.fallback),
              (d = e.mode),
              (n = Lu({ mode: "visible", children: n.children }, d)),
              (a = Ll(a, d, l, null)),
              (a.flags |= 2),
              (n.return = e),
              (a.return = e),
              (n.sibling = a),
              (e.child = n),
              Nn(e, t.child, null, l),
              (n = e.child),
              (n.memoizedState = $c(l)),
              (n.childLanes = Fc(t, o, l)),
              (e.memoizedState = kc),
              (e = a));
      else if ((yl(e), wr(d))) {
        if (((o = d.nextSibling && d.nextSibling.dataset), o)) var x = o.dgst;
        ((o = x),
          (n = Error(r(419))),
          (n.stack = ""),
          (n.digest = o),
          sa({ value: n, source: null, stack: null }),
          (e = Pc(t, e, l)));
      } else if (
        (Zt || oa(t, e, l, !1), (o = (l & t.childLanes) !== 0), Zt || o)
      ) {
        if (
          ((o = Nt),
          o !== null &&
            ((n = l & -l),
            (n = (n & 42) !== 0 ? 1 : Ui(n)),
            (n = (n & (o.suspendedLanes | l)) !== 0 ? 0 : n),
            n !== 0 && n !== p.retryLane))
        )
          throw ((p.retryLane = n), gn(t, n), Se(o, t, n), Vf);
        (d.data === "$?" || pr(), (e = Pc(t, e, l)));
      } else
        d.data === "$?"
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = p.treeContext),
            (Ut = we(d.nextSibling)),
            (ae = e),
            (bt = !0),
            (Xl = null),
            (Be = !1),
            t !== null &&
              ((Oe[_e++] = Ke),
              (Oe[_e++] = Je),
              (Oe[_e++] = Gl),
              (Ke = t.id),
              (Je = t.overflow),
              (Gl = e)),
            (e = Wc(e, n.children)),
            (e.flags |= 4096));
      return e;
    }
    return a
      ? (pl(),
        (a = n.fallback),
        (d = e.mode),
        (p = t.child),
        (x = p.sibling),
        (n = Ze(p, { mode: "hidden", children: n.children })),
        (n.subtreeFlags = p.subtreeFlags & 65011712),
        x !== null ? (a = Ze(x, a)) : ((a = Ll(a, d, l, null)), (a.flags |= 2)),
        (a.return = e),
        (n.return = e),
        (n.sibling = a),
        (e.child = n),
        (n = a),
        (a = e.child),
        (d = t.child.memoizedState),
        d === null
          ? (d = $c(l))
          : ((p = d.cachePool),
            p !== null
              ? ((x = Gt._currentValue),
                (p = p.parent !== x ? { parent: x, pool: x } : p))
              : (p = Ho()),
            (d = { baseLanes: d.baseLanes | l, cachePool: p })),
        (a.memoizedState = d),
        (a.childLanes = Fc(t, o, l)),
        (e.memoizedState = kc),
        n)
      : (yl(e),
        (l = t.child),
        (t = l.sibling),
        (l = Ze(l, { mode: "visible", children: n.children })),
        (l.return = e),
        (l.sibling = null),
        t !== null &&
          ((o = e.deletions),
          o === null ? ((e.deletions = [t]), (e.flags |= 16)) : o.push(t)),
        (e.child = l),
        (e.memoizedState = null),
        l);
  }
  function Wc(t, e) {
    return (
      (e = Lu({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function Lu(t, e) {
    return (
      (t = ye(22, t, null, e)),
      (t.lanes = 0),
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      t
    );
  }
  function Pc(t, e, l) {
    return (
      Nn(e, t.child, null, l),
      (t = Wc(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function If(t, e, l) {
    t.lanes |= e;
    var n = t.alternate;
    (n !== null && (n.lanes |= e), pc(t.return, e, l));
  }
  function Ic(t, e, l, n, a) {
    var i = t.memoizedState;
    i === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: n,
          tail: l,
          tailMode: a,
        })
      : ((i.isBackwards = e),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = n),
        (i.tail = l),
        (i.tailMode = a));
  }
  function td(t, e, l) {
    var n = e.pendingProps,
      a = n.revealOrder,
      i = n.tail;
    if (($t(t, e, n.children, l), (n = Yt.current), (n & 2) !== 0))
      ((n = (n & 1) | 2), (e.flags |= 128));
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && If(t, l, e);
          else if (t.tag === 19) If(t, l, e);
          else if (t.child !== null) {
            ((t.child.return = t), (t = t.child));
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      n &= 1;
    }
    switch ((G(Yt, n), a)) {
      case "forwards":
        for (l = e.child, a = null; l !== null; )
          ((t = l.alternate),
            t !== null && ju(t) === null && (a = l),
            (l = l.sibling));
        ((l = a),
          l === null
            ? ((a = e.child), (e.child = null))
            : ((a = l.sibling), (l.sibling = null)),
          Ic(e, !1, a, l, i));
        break;
      case "backwards":
        for (l = null, a = e.child, e.child = null; a !== null; ) {
          if (((t = a.alternate), t !== null && ju(t) === null)) {
            e.child = a;
            break;
          }
          ((t = a.sibling), (a.sibling = l), (l = a), (a = t));
        }
        Ic(e, !0, l, null, i);
        break;
      case "together":
        Ic(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function Pe(t, e, l) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (El |= e.lanes),
      (l & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((oa(t, e, l, !1), (l & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(r(153));
    if (e.child !== null) {
      for (
        t = e.child, l = Ze(t, t.pendingProps), e.child = l, l.return = e;
        t.sibling !== null;
      )
        ((t = t.sibling),
          (l = l.sibling = Ze(t, t.pendingProps)),
          (l.return = e));
      l.sibling = null;
    }
    return e.child;
  }
  function tr(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && bu(t)));
  }
  function D0(t, e, l) {
    switch (e.tag) {
      case 3:
        (Mt(e, e.stateNode.containerInfo),
          ol(e, Gt, t.memoizedState.cache),
          ra());
        break;
      case 27:
      case 5:
        Mi(e);
        break;
      case 4:
        Mt(e, e.stateNode.containerInfo);
        break;
      case 10:
        ol(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var n = e.memoizedState;
        if (n !== null)
          return n.dehydrated !== null
            ? (yl(e), (e.flags |= 128), null)
            : (l & e.child.childLanes) !== 0
              ? Pf(t, e, l)
              : (yl(e), (t = Pe(t, e, l)), t !== null ? t.sibling : null);
        yl(e);
        break;
      case 19:
        var a = (t.flags & 128) !== 0;
        if (
          ((n = (l & e.childLanes) !== 0),
          n || (oa(t, e, l, !1), (n = (l & e.childLanes) !== 0)),
          a)
        ) {
          if (n) return td(t, e, l);
          e.flags |= 128;
        }
        if (
          ((a = e.memoizedState),
          a !== null &&
            ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
          G(Yt, Yt.current),
          n)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((e.lanes = 0), Jf(t, e, l));
      case 24:
        ol(e, Gt, t.memoizedState.cache);
    }
    return Pe(t, e, l);
  }
  function ed(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Zt = !0;
      else {
        if (!tr(t, l) && (e.flags & 128) === 0) return ((Zt = !1), D0(t, e, l));
        Zt = (t.flags & 131072) !== 0;
      }
    else ((Zt = !1), bt && (e.flags & 1048576) !== 0 && zo(e, vu, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var n = e.elementType,
            a = n._init;
          if (((n = a(n._payload)), (e.type = n), typeof n == "function"))
            sc(n)
              ? ((t = kl(n, t)), (e.tag = 1), (e = Ff(null, e, n, t, l)))
              : ((e.tag = 0), (e = Jc(null, e, n, t, l)));
          else {
            if (n != null) {
              if (((a = n.$$typeof), a === ft)) {
                ((e.tag = 11), (e = Qf(null, e, n, t, l)));
                break t;
              } else if (a === st) {
                ((e.tag = 14), (e = Zf(null, e, n, t, l)));
                break t;
              }
            }
            throw ((e = Xt(n) || n), Error(r(306, e, "")));
          }
        }
        return e;
      case 0:
        return Jc(t, e, e.type, e.pendingProps, l);
      case 1:
        return ((n = e.type), (a = kl(n, e.pendingProps)), Ff(t, e, n, a, l));
      case 3:
        t: {
          if ((Mt(e, e.stateNode.containerInfo), t === null))
            throw Error(r(387));
          n = e.pendingProps;
          var i = e.memoizedState;
          ((a = i.element), Ac(t, e), ga(e, n, null, l));
          var o = e.memoizedState;
          if (
            ((n = o.cache),
            ol(e, Gt, n),
            n !== i.cache && gc(e, [Gt], l, !0),
            pa(),
            (n = o.element),
            i.isDehydrated)
          )
            if (
              ((i = { element: n, isDehydrated: !1, cache: o.cache }),
              (e.updateQueue.baseState = i),
              (e.memoizedState = i),
              e.flags & 256)
            ) {
              e = Wf(t, e, n, l);
              break t;
            } else if (n !== a) {
              ((a = xe(Error(r(424)), e)), sa(a), (e = Wf(t, e, n, l)));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                Ut = we(t.firstChild),
                  ae = e,
                  bt = !0,
                  Xl = null,
                  Be = !0,
                  l = wf(e, null, n, l),
                  e.child = l;
                l;
              )
                ((l.flags = (l.flags & -3) | 4096), (l = l.sibling));
            }
          else {
            if ((ra(), n === a)) {
              e = Pe(t, e, l);
              break t;
            }
            $t(t, e, n, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          qu(t, e),
          t === null
            ? (l = uh(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = l)
              : bt ||
                ((l = e.type),
                (t = e.pendingProps),
                (n = Iu(nt.current).createElement(l)),
                (n[te] = e),
                (n[ie] = t),
                Wt(n, l, t),
                Qt(n),
                (e.stateNode = n))
            : (e.memoizedState = uh(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Mi(e),
          t === null &&
            bt &&
            ((n = e.stateNode = lh(e.type, e.pendingProps, nt.current)),
            (ae = e),
            (Be = !0),
            (a = Ut),
            Rl(e.type) ? ((Ur = a), (Ut = we(n.firstChild))) : (Ut = a)),
          $t(t, e, e.pendingProps.children, l),
          qu(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            bt &&
            ((a = n = Ut) &&
              ((n = up(n, e.type, e.pendingProps, Be)),
              n !== null
                ? ((e.stateNode = n),
                  (ae = e),
                  (Ut = we(n.firstChild)),
                  (Be = !1),
                  (a = !0))
                : (a = !1)),
            a || Vl(e)),
          Mi(e),
          (a = e.type),
          (i = e.pendingProps),
          (o = t !== null ? t.memoizedProps : null),
          (n = i.children),
          zr(a, i) ? (n = null) : o !== null && zr(a, o) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((a = Mc(t, e, A0, null, null, l)), (La._currentValue = a)),
          qu(t, e),
          $t(t, e, n, l),
          e.child
        );
      case 6:
        return (
          t === null &&
            bt &&
            ((t = l = Ut) &&
              ((l = ip(l, e.pendingProps, Be)),
              l !== null
                ? ((e.stateNode = l), (ae = e), (Ut = null), (t = !0))
                : (t = !1)),
            t || Vl(e)),
          null
        );
      case 13:
        return Pf(t, e, l);
      case 4:
        return (
          Mt(e, e.stateNode.containerInfo),
          (n = e.pendingProps),
          t === null ? (e.child = Nn(e, null, n, l)) : $t(t, e, n, l),
          e.child
        );
      case 11:
        return Qf(t, e, e.type, e.pendingProps, l);
      case 7:
        return ($t(t, e, e.pendingProps, l), e.child);
      case 8:
        return ($t(t, e, e.pendingProps.children, l), e.child);
      case 12:
        return ($t(t, e, e.pendingProps.children, l), e.child);
      case 10:
        return (
          (n = e.pendingProps),
          ol(e, e.type, n.value),
          $t(t, e, n.children, l),
          e.child
        );
      case 9:
        return (
          (a = e.type._context),
          (n = e.pendingProps.children),
          Zl(e),
          (a = ee(a)),
          (n = n(a)),
          (e.flags |= 1),
          $t(t, e, n, l),
          e.child
        );
      case 14:
        return Zf(t, e, e.type, e.pendingProps, l);
      case 15:
        return Kf(t, e, e.type, e.pendingProps, l);
      case 19:
        return td(t, e, l);
      case 31:
        return (
          (n = e.pendingProps),
          (l = e.mode),
          (n = { mode: n.mode, children: n.children }),
          t === null
            ? ((l = Lu(n, l)),
              (l.ref = e.ref),
              (e.child = l),
              (l.return = e),
              (e = l))
            : ((l = Ze(t.child, n)),
              (l.ref = e.ref),
              (e.child = l),
              (l.return = e),
              (e = l)),
          e
        );
      case 22:
        return Jf(t, e, l);
      case 24:
        return (
          Zl(e),
          (n = ee(Gt)),
          t === null
            ? ((a = Sc()),
              a === null &&
                ((a = Nt),
                (i = vc()),
                (a.pooledCache = i),
                i.refCount++,
                i !== null && (a.pooledCacheLanes |= l),
                (a = i)),
              (e.memoizedState = { parent: n, cache: a }),
              Tc(e),
              ol(e, Gt, a))
            : ((t.lanes & l) !== 0 && (Ac(t, e), ga(e, null, null, l), pa()),
              (a = t.memoizedState),
              (i = e.memoizedState),
              a.parent !== n
                ? ((a = { parent: n, cache: n }),
                  (e.memoizedState = a),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = a),
                  ol(e, Gt, n))
                : ((n = i.cache),
                  ol(e, Gt, n),
                  n !== a.cache && gc(e, [Gt], l, !0))),
          $t(t, e, e.pendingProps.children, l),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  function Ie(t) {
    t.flags |= 4;
  }
  function ld(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !oh(e))) {
      if (
        ((e = Ne.current),
        e !== null &&
          ((gt & 4194048) === gt
            ? He !== null
            : ((gt & 62914560) !== gt && (gt & 536870912) === 0) || e !== He))
      )
        throw ((ma = Ec), qo);
      t.flags |= 8192;
    }
  }
  function Gu(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? Cs() : 536870912), (t.lanes |= e), (Cn |= e)));
  }
  function xa(t, e) {
    if (!bt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; )
            (e.alternate !== null && (l = e), (e = e.sibling));
          l === null ? (t.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = t.tail;
          for (var n = null; l !== null; )
            (l.alternate !== null && (n = l), (l = l.sibling));
          n === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (n.sibling = null);
      }
  }
  function Dt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      l = 0,
      n = 0;
    if (e)
      for (var a = t.child; a !== null; )
        ((l |= a.lanes | a.childLanes),
          (n |= a.subtreeFlags & 65011712),
          (n |= a.flags & 65011712),
          (a.return = t),
          (a = a.sibling));
    else
      for (a = t.child; a !== null; )
        ((l |= a.lanes | a.childLanes),
          (n |= a.subtreeFlags),
          (n |= a.flags),
          (a.return = t),
          (a = a.sibling));
    return ((t.subtreeFlags |= n), (t.childLanes = l), e);
  }
  function C0(t, e, l) {
    var n = e.pendingProps;
    switch ((hc(e), e.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Dt(e), null);
      case 1:
        return (Dt(e), null);
      case 3:
        return (
          (l = e.stateNode),
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          $e(Gt),
          il(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (t === null || t.child === null) &&
            (ca(e)
              ? Ie(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), wo())),
          Dt(e),
          null
        );
      case 26:
        return (
          (l = e.memoizedState),
          t === null
            ? (Ie(e),
              l !== null ? (Dt(e), ld(e, l)) : (Dt(e), (e.flags &= -16777217)))
            : l
              ? l !== t.memoizedState
                ? (Ie(e), Dt(e), ld(e, l))
                : (Dt(e), (e.flags &= -16777217))
              : (t.memoizedProps !== n && Ie(e), Dt(e), (e.flags &= -16777217)),
          null
        );
      case 27:
        (Wa(e), (l = nt.current));
        var a = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== n && Ie(e);
        else {
          if (!n) {
            if (e.stateNode === null) throw Error(r(166));
            return (Dt(e), null);
          }
          ((t = I.current),
            ca(e) ? Do(e) : ((t = lh(a, n, l)), (e.stateNode = t), Ie(e)));
        }
        return (Dt(e), null);
      case 5:
        if ((Wa(e), (l = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== n && Ie(e);
        else {
          if (!n) {
            if (e.stateNode === null) throw Error(r(166));
            return (Dt(e), null);
          }
          if (((t = I.current), ca(e))) Do(e);
          else {
            switch (((a = Iu(nt.current)), t)) {
              case 1:
                t = a.createElementNS("http://www.w3.org/2000/svg", l);
                break;
              case 2:
                t = a.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                break;
              default:
                switch (l) {
                  case "svg":
                    t = a.createElementNS("http://www.w3.org/2000/svg", l);
                    break;
                  case "math":
                    t = a.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l,
                    );
                    break;
                  case "script":
                    ((t = a.createElement("div")),
                      (t.innerHTML = "<script><\/script>"),
                      (t = t.removeChild(t.firstChild)));
                    break;
                  case "select":
                    ((t =
                      typeof n.is == "string"
                        ? a.createElement("select", { is: n.is })
                        : a.createElement("select")),
                      n.multiple
                        ? (t.multiple = !0)
                        : n.size && (t.size = n.size));
                    break;
                  default:
                    t =
                      typeof n.is == "string"
                        ? a.createElement(l, { is: n.is })
                        : a.createElement(l);
                }
            }
            ((t[te] = e), (t[ie] = n));
            t: for (a = e.child; a !== null; ) {
              if (a.tag === 5 || a.tag === 6) t.appendChild(a.stateNode);
              else if (a.tag !== 4 && a.tag !== 27 && a.child !== null) {
                ((a.child.return = a), (a = a.child));
                continue;
              }
              if (a === e) break t;
              for (; a.sibling === null; ) {
                if (a.return === null || a.return === e) break t;
                a = a.return;
              }
              ((a.sibling.return = a.return), (a = a.sibling));
            }
            e.stateNode = t;
            t: switch ((Wt(t, l, n), l)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!n.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && Ie(e);
          }
        }
        return (Dt(e), (e.flags &= -16777217), null);
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== n && Ie(e);
        else {
          if (typeof n != "string" && e.stateNode === null) throw Error(r(166));
          if (((t = nt.current), ca(e))) {
            if (
              ((t = e.stateNode),
              (l = e.memoizedProps),
              (n = null),
              (a = ae),
              a !== null)
            )
              switch (a.tag) {
                case 27:
                case 5:
                  n = a.memoizedProps;
              }
            ((t[te] = e),
              (t = !!(
                t.nodeValue === l ||
                (n !== null && n.suppressHydrationWarning === !0) ||
                $d(t.nodeValue, l)
              )),
              t || Vl(e));
          } else
            ((t = Iu(t).createTextNode(n)), (t[te] = e), (e.stateNode = t));
        }
        return (Dt(e), null);
      case 13:
        if (
          ((n = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((a = ca(e)), n !== null && n.dehydrated !== null)) {
            if (t === null) {
              if (!a) throw Error(r(318));
              if (
                ((a = e.memoizedState),
                (a = a !== null ? a.dehydrated : null),
                !a)
              )
                throw Error(r(317));
              a[te] = e;
            } else
              (ra(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (Dt(e), (a = !1));
          } else
            ((a = wo()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = a),
              (a = !0));
          if (!a) return e.flags & 256 ? (We(e), e) : (We(e), null);
        }
        if ((We(e), (e.flags & 128) !== 0)) return ((e.lanes = l), e);
        if (
          ((l = n !== null), (t = t !== null && t.memoizedState !== null), l)
        ) {
          ((n = e.child),
            (a = null),
            n.alternate !== null &&
              n.alternate.memoizedState !== null &&
              n.alternate.memoizedState.cachePool !== null &&
              (a = n.alternate.memoizedState.cachePool.pool));
          var i = null;
          (n.memoizedState !== null &&
            n.memoizedState.cachePool !== null &&
            (i = n.memoizedState.cachePool.pool),
            i !== a && (n.flags |= 2048));
        }
        return (
          l !== t && l && (e.child.flags |= 8192),
          Gu(e, e.updateQueue),
          Dt(e),
          null
        );
      case 4:
        return (il(), t === null && Rr(e.stateNode.containerInfo), Dt(e), null);
      case 10:
        return ($e(e.type), Dt(e), null);
      case 19:
        if ((Q(Yt), (a = e.memoizedState), a === null)) return (Dt(e), null);
        if (((n = (e.flags & 128) !== 0), (i = a.rendering), i === null))
          if (n) xa(a, !1);
          else {
            if (jt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((i = ju(t)), i !== null)) {
                  for (
                    e.flags |= 128,
                      xa(a, !1),
                      t = i.updateQueue,
                      e.updateQueue = t,
                      Gu(e, t),
                      e.subtreeFlags = 0,
                      t = l,
                      l = e.child;
                    l !== null;
                  )
                    (Mo(l, t), (l = l.sibling));
                  return (G(Yt, (Yt.current & 1) | 2), e.child);
                }
                t = t.sibling;
              }
            a.tail !== null &&
              je() > Vu &&
              ((e.flags |= 128), (n = !0), xa(a, !1), (e.lanes = 4194304));
          }
        else {
          if (!n)
            if (((t = ju(i)), t !== null)) {
              if (
                ((e.flags |= 128),
                (n = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Gu(e, t),
                xa(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !i.alternate &&
                  !bt)
              )
                return (Dt(e), null);
            } else
              2 * je() - a.renderingStartTime > Vu &&
                l !== 536870912 &&
                ((e.flags |= 128), (n = !0), xa(a, !1), (e.lanes = 4194304));
          a.isBackwards
            ? ((i.sibling = e.child), (e.child = i))
            : ((t = a.last),
              t !== null ? (t.sibling = i) : (e.child = i),
              (a.last = i));
        }
        return a.tail !== null
          ? ((e = a.tail),
            (a.rendering = e),
            (a.tail = e.sibling),
            (a.renderingStartTime = je()),
            (e.sibling = null),
            (t = Yt.current),
            G(Yt, n ? (t & 1) | 2 : t & 1),
            e)
          : (Dt(e), null);
      case 22:
      case 23:
        return (
          We(e),
          _c(),
          (n = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== n && (e.flags |= 8192)
            : n && (e.flags |= 8192),
          n
            ? (l & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Dt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Dt(e),
          (l = e.updateQueue),
          l !== null && Gu(e, l.retryQueue),
          (l = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          (n = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
          n !== l && (e.flags |= 2048),
          t !== null && Q(Kl),
          null
        );
      case 24:
        return (
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          $e(Gt),
          Dt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, e.tag));
  }
  function w0(t, e) {
    switch ((hc(e), e.tag)) {
      case 1:
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          $e(Gt),
          il(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Wa(e), null);
      case 13:
        if (
          (We(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(r(340));
          ra();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return (Q(Yt), null);
      case 4:
        return (il(), null);
      case 10:
        return ($e(e.type), null);
      case 22:
      case 23:
        return (
          We(e),
          _c(),
          t !== null && Q(Kl),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return ($e(Gt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function nd(t, e) {
    switch ((hc(e), e.tag)) {
      case 3:
        ($e(Gt), il());
        break;
      case 26:
      case 27:
      case 5:
        Wa(e);
        break;
      case 4:
        il();
        break;
      case 13:
        We(e);
        break;
      case 19:
        Q(Yt);
        break;
      case 10:
        $e(e.type);
        break;
      case 22:
      case 23:
        (We(e), _c(), t !== null && Q(Kl));
        break;
      case 24:
        $e(Gt);
    }
  }
  function Ra(t, e) {
    try {
      var l = e.updateQueue,
        n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var a = n.next;
        l = a;
        do {
          if ((l.tag & t) === t) {
            n = void 0;
            var i = l.create,
              o = l.inst;
            ((n = i()), (o.destroy = n));
          }
          l = l.next;
        } while (l !== a);
      }
    } catch (d) {
      Ot(e, e.return, d);
    }
  }
  function gl(t, e, l) {
    try {
      var n = e.updateQueue,
        a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var i = a.next;
        n = i;
        do {
          if ((n.tag & t) === t) {
            var o = n.inst,
              d = o.destroy;
            if (d !== void 0) {
              ((o.destroy = void 0), (a = e));
              var p = l,
                x = d;
              try {
                x();
              } catch (D) {
                Ot(a, p, D);
              }
            }
          }
          n = n.next;
        } while (n !== i);
      }
    } catch (D) {
      Ot(e, e.return, D);
    }
  }
  function ad(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        Qo(e, l);
      } catch (n) {
        Ot(t, t.return, n);
      }
    }
  }
  function ud(t, e, l) {
    ((l.props = kl(t.type, t.memoizedProps)), (l.state = t.memoizedState));
    try {
      l.componentWillUnmount();
    } catch (n) {
      Ot(t, e, n);
    }
  }
  function Oa(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var n = t.stateNode;
            break;
          case 30:
            n = t.stateNode;
            break;
          default:
            n = t.stateNode;
        }
        typeof l == "function" ? (t.refCleanup = l(n)) : (l.current = n);
      }
    } catch (a) {
      Ot(t, e, a);
    }
  }
  function qe(t, e) {
    var l = t.ref,
      n = t.refCleanup;
    if (l !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (a) {
          Ot(t, e, a);
        } finally {
          ((t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null));
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (a) {
          Ot(t, e, a);
        }
      else l.current = null;
  }
  function id(t) {
    var e = t.type,
      l = t.memoizedProps,
      n = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && n.focus();
          break t;
        case "img":
          l.src ? (n.src = l.src) : l.srcSet && (n.srcset = l.srcSet);
      }
    } catch (a) {
      Ot(t, t.return, a);
    }
  }
  function er(t, e, l) {
    try {
      var n = t.stateNode;
      (tp(n, t.type, l, e), (n[ie] = e));
    } catch (a) {
      Ot(t, t.return, a);
    }
  }
  function cd(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && Rl(t.type)) ||
      t.tag === 4
    );
  }
  function lr(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || cd(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
      ) {
        if (
          (t.tag === 27 && Rl(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function nr(t, e, l) {
    var n = t.tag;
    if (n === 5 || n === 6)
      ((t = t.stateNode),
        e
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l
            ).insertBefore(t, e)
          : ((e =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l),
            e.appendChild(t),
            (l = l._reactRootContainer),
            l != null || e.onclick !== null || (e.onclick = Pu)));
    else if (
      n !== 4 &&
      (n === 27 && Rl(t.type) && ((l = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (nr(t, e, l), t = t.sibling; t !== null; )
        (nr(t, e, l), (t = t.sibling));
  }
  function Yu(t, e, l) {
    var n = t.tag;
    if (n === 5 || n === 6)
      ((t = t.stateNode), e ? l.insertBefore(t, e) : l.appendChild(t));
    else if (
      n !== 4 &&
      (n === 27 && Rl(t.type) && (l = t.stateNode), (t = t.child), t !== null)
    )
      for (Yu(t, e, l), t = t.sibling; t !== null; )
        (Yu(t, e, l), (t = t.sibling));
  }
  function rd(t) {
    var e = t.stateNode,
      l = t.memoizedProps;
    try {
      for (var n = t.type, a = e.attributes; a.length; )
        e.removeAttributeNode(a[0]);
      (Wt(e, n, l), (e[te] = t), (e[ie] = l));
    } catch (i) {
      Ot(t, t.return, i);
    }
  }
  var tl = !1,
    Ht = !1,
    ar = !1,
    sd = typeof WeakSet == "function" ? WeakSet : Set,
    Kt = null;
  function U0(t, e) {
    if (((t = t.containerInfo), (Nr = ui), (t = bo(t)), lc(t))) {
      if ("selectionStart" in t)
        var l = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          l = ((l = t.ownerDocument) && l.defaultView) || window;
          var n = l.getSelection && l.getSelection();
          if (n && n.rangeCount !== 0) {
            l = n.anchorNode;
            var a = n.anchorOffset,
              i = n.focusNode;
            n = n.focusOffset;
            try {
              (l.nodeType, i.nodeType);
            } catch {
              l = null;
              break t;
            }
            var o = 0,
              d = -1,
              p = -1,
              x = 0,
              D = 0,
              w = t,
              O = null;
            e: for (;;) {
              for (
                var _;
                w !== l || (a !== 0 && w.nodeType !== 3) || (d = o + a),
                  w !== i || (n !== 0 && w.nodeType !== 3) || (p = o + n),
                  w.nodeType === 3 && (o += w.nodeValue.length),
                  (_ = w.firstChild) !== null;
              )
                ((O = w), (w = _));
              for (;;) {
                if (w === t) break e;
                if (
                  (O === l && ++x === a && (d = o),
                  O === i && ++D === n && (p = o),
                  (_ = w.nextSibling) !== null)
                )
                  break;
                ((w = O), (O = w.parentNode));
              }
              w = _;
            }
            l = d === -1 || p === -1 ? null : { start: d, end: p };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      Mr = { focusedElem: t, selectionRange: l }, ui = !1, Kt = e;
      Kt !== null;
    )
      if (
        ((e = Kt), (t = e.child), (e.subtreeFlags & 1024) !== 0 && t !== null)
      )
        ((t.return = e), (Kt = t));
      else
        for (; Kt !== null; ) {
          switch (((e = Kt), (i = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && i !== null) {
                ((t = void 0),
                  (l = e),
                  (a = i.memoizedProps),
                  (i = i.memoizedState),
                  (n = l.stateNode));
                try {
                  var at = kl(l.type, a, l.elementType === l.type);
                  ((t = n.getSnapshotBeforeUpdate(at, i)),
                    (n.__reactInternalSnapshotBeforeUpdate = t));
                } catch (et) {
                  Ot(l, l.return, et);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (l = t.nodeType), l === 9)
                )
                  Cr(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Cr(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(r(163));
          }
          if (((t = e.sibling), t !== null)) {
            ((t.return = e.return), (Kt = t));
            break;
          }
          Kt = e.return;
        }
  }
  function od(t, e, l) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (vl(t, l), n & 4 && Ra(5, l));
        break;
      case 1:
        if ((vl(t, l), n & 4))
          if (((t = l.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (o) {
              Ot(l, l.return, o);
            }
          else {
            var a = kl(l.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(a, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (o) {
              Ot(l, l.return, o);
            }
          }
        (n & 64 && ad(l), n & 512 && Oa(l, l.return));
        break;
      case 3:
        if ((vl(t, l), n & 64 && ((t = l.updateQueue), t !== null))) {
          if (((e = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            Qo(t, e);
          } catch (o) {
            Ot(l, l.return, o);
          }
        }
        break;
      case 27:
        e === null && n & 4 && rd(l);
      case 26:
      case 5:
        (vl(t, l), e === null && n & 4 && id(l), n & 512 && Oa(l, l.return));
        break;
      case 12:
        vl(t, l);
        break;
      case 13:
        (vl(t, l),
          n & 4 && hd(t, l),
          n & 64 &&
            ((t = l.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((l = V0.bind(null, l)), cp(t, l)))));
        break;
      case 22:
        if (((n = l.memoizedState !== null || tl), !n)) {
          ((e = (e !== null && e.memoizedState !== null) || Ht), (a = tl));
          var i = Ht;
          ((tl = n),
            (Ht = e) && !i ? bl(t, l, (l.subtreeFlags & 8772) !== 0) : vl(t, l),
            (tl = a),
            (Ht = i));
        }
        break;
      case 30:
        break;
      default:
        vl(t, l);
    }
  }
  function fd(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), fd(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Hi(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var zt = null,
    se = !1;
  function el(t, e, l) {
    for (l = l.child; l !== null; ) (dd(t, e, l), (l = l.sibling));
  }
  function dd(t, e, l) {
    if (de && typeof de.onCommitFiberUnmount == "function")
      try {
        de.onCommitFiberUnmount(Jn, l);
      } catch {}
    switch (l.tag) {
      case 26:
        (Ht || qe(l, e),
          el(t, e, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l)));
        break;
      case 27:
        Ht || qe(l, e);
        var n = zt,
          a = se;
        (Rl(l.type) && ((zt = l.stateNode), (se = !1)),
          el(t, e, l),
          ja(l.stateNode),
          (zt = n),
          (se = a));
        break;
      case 5:
        Ht || qe(l, e);
      case 6:
        if (
          ((n = zt),
          (a = se),
          (zt = null),
          el(t, e, l),
          (zt = n),
          (se = a),
          zt !== null)
        )
          if (se)
            try {
              (zt.nodeType === 9
                ? zt.body
                : zt.nodeName === "HTML"
                  ? zt.ownerDocument.body
                  : zt
              ).removeChild(l.stateNode);
            } catch (i) {
              Ot(l, e, i);
            }
          else
            try {
              zt.removeChild(l.stateNode);
            } catch (i) {
              Ot(l, e, i);
            }
        break;
      case 18:
        zt !== null &&
          (se
            ? ((t = zt),
              th(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                    ? t.ownerDocument.body
                    : t,
                l.stateNode,
              ),
              Va(t))
            : th(zt, l.stateNode));
        break;
      case 4:
        ((n = zt),
          (a = se),
          (zt = l.stateNode.containerInfo),
          (se = !0),
          el(t, e, l),
          (zt = n),
          (se = a));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Ht || gl(2, l, e), Ht || gl(4, l, e), el(t, e, l));
        break;
      case 1:
        (Ht ||
          (qe(l, e),
          (n = l.stateNode),
          typeof n.componentWillUnmount == "function" && ud(l, e, n)),
          el(t, e, l));
        break;
      case 21:
        el(t, e, l);
        break;
      case 22:
        ((Ht = (n = Ht) || l.memoizedState !== null), el(t, e, l), (Ht = n));
        break;
      default:
        el(t, e, l);
    }
  }
  function hd(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Va(t);
      } catch (l) {
        Ot(e, e.return, l);
      }
  }
  function j0(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new sd()), e);
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new sd()),
          e
        );
      default:
        throw Error(r(435, t.tag));
    }
  }
  function ur(t, e) {
    var l = j0(t);
    e.forEach(function (n) {
      var a = Q0.bind(null, t, n);
      l.has(n) || (l.add(n), n.then(a, a));
    });
  }
  function pe(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var n = 0; n < l.length; n++) {
        var a = l[n],
          i = t,
          o = e,
          d = o;
        t: for (; d !== null; ) {
          switch (d.tag) {
            case 27:
              if (Rl(d.type)) {
                ((zt = d.stateNode), (se = !1));
                break t;
              }
              break;
            case 5:
              ((zt = d.stateNode), (se = !1));
              break t;
            case 3:
            case 4:
              ((zt = d.stateNode.containerInfo), (se = !0));
              break t;
          }
          d = d.return;
        }
        if (zt === null) throw Error(r(160));
        (dd(i, o, a),
          (zt = null),
          (se = !1),
          (i = a.alternate),
          i !== null && (i.return = null),
          (a.return = null));
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; ) (md(e, t), (e = e.sibling));
  }
  var Ce = null;
  function md(t, e) {
    var l = t.alternate,
      n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (pe(e, t),
          ge(t),
          n & 4 && (gl(3, t, t.return), Ra(3, t), gl(5, t, t.return)));
        break;
      case 1:
        (pe(e, t),
          ge(t),
          n & 512 && (Ht || l === null || qe(l, l.return)),
          n & 64 &&
            tl &&
            ((t = t.updateQueue),
            t !== null &&
              ((n = t.callbacks),
              n !== null &&
                ((l = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = l === null ? n : l.concat(n))))));
        break;
      case 26:
        var a = Ce;
        if (
          (pe(e, t),
          ge(t),
          n & 512 && (Ht || l === null || qe(l, l.return)),
          n & 4)
        ) {
          var i = l !== null ? l.memoizedState : null;
          if (((n = t.memoizedState), l === null))
            if (n === null)
              if (t.stateNode === null) {
                t: {
                  ((n = t.type),
                    (l = t.memoizedProps),
                    (a = a.ownerDocument || a));
                  e: switch (n) {
                    case "title":
                      ((i = a.getElementsByTagName("title")[0]),
                        (!i ||
                          i[Fn] ||
                          i[te] ||
                          i.namespaceURI === "http://www.w3.org/2000/svg" ||
                          i.hasAttribute("itemprop")) &&
                          ((i = a.createElement(n)),
                          a.head.insertBefore(
                            i,
                            a.querySelector("head > title"),
                          )),
                        Wt(i, n, l),
                        (i[te] = t),
                        Qt(i),
                        (n = i));
                      break t;
                    case "link":
                      var o = rh("link", "href", a).get(n + (l.href || ""));
                      if (o) {
                        for (var d = 0; d < o.length; d++)
                          if (
                            ((i = o[d]),
                            i.getAttribute("href") ===
                              (l.href == null || l.href === ""
                                ? null
                                : l.href) &&
                              i.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              i.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              i.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            o.splice(d, 1);
                            break e;
                          }
                      }
                      ((i = a.createElement(n)),
                        Wt(i, n, l),
                        a.head.appendChild(i));
                      break;
                    case "meta":
                      if (
                        (o = rh("meta", "content", a).get(
                          n + (l.content || ""),
                        ))
                      ) {
                        for (d = 0; d < o.length; d++)
                          if (
                            ((i = o[d]),
                            i.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              i.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              i.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              i.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              i.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            o.splice(d, 1);
                            break e;
                          }
                      }
                      ((i = a.createElement(n)),
                        Wt(i, n, l),
                        a.head.appendChild(i));
                      break;
                    default:
                      throw Error(r(468, n));
                  }
                  ((i[te] = t), Qt(i), (n = i));
                }
                t.stateNode = n;
              } else sh(a, t.type, t.stateNode);
            else t.stateNode = ch(a, n, t.memoizedProps);
          else
            i !== n
              ? (i === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : i.count--,
                n === null
                  ? sh(a, t.type, t.stateNode)
                  : ch(a, n, t.memoizedProps))
              : n === null &&
                t.stateNode !== null &&
                er(t, t.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        (pe(e, t),
          ge(t),
          n & 512 && (Ht || l === null || qe(l, l.return)),
          l !== null && n & 4 && er(t, t.memoizedProps, l.memoizedProps));
        break;
      case 5:
        if (
          (pe(e, t),
          ge(t),
          n & 512 && (Ht || l === null || qe(l, l.return)),
          t.flags & 32)
        ) {
          a = t.stateNode;
          try {
            on(a, "");
          } catch (_) {
            Ot(t, t.return, _);
          }
        }
        (n & 4 &&
          t.stateNode != null &&
          ((a = t.memoizedProps), er(t, a, l !== null ? l.memoizedProps : a)),
          n & 1024 && (ar = !0));
        break;
      case 6:
        if ((pe(e, t), ge(t), n & 4)) {
          if (t.stateNode === null) throw Error(r(162));
          ((n = t.memoizedProps), (l = t.stateNode));
          try {
            l.nodeValue = n;
          } catch (_) {
            Ot(t, t.return, _);
          }
        }
        break;
      case 3:
        if (
          ((li = null),
          (a = Ce),
          (Ce = ti(e.containerInfo)),
          pe(e, t),
          (Ce = a),
          ge(t),
          n & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Va(e.containerInfo);
          } catch (_) {
            Ot(t, t.return, _);
          }
        ar && ((ar = !1), yd(t));
        break;
      case 4:
        ((n = Ce),
          (Ce = ti(t.stateNode.containerInfo)),
          pe(e, t),
          ge(t),
          (Ce = n));
        break;
      case 12:
        (pe(e, t), ge(t));
        break;
      case 13:
        (pe(e, t),
          ge(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (fr = je()),
          n & 4 &&
            ((n = t.updateQueue),
            n !== null && ((t.updateQueue = null), ur(t, n))));
        break;
      case 22:
        a = t.memoizedState !== null;
        var p = l !== null && l.memoizedState !== null,
          x = tl,
          D = Ht;
        if (
          ((tl = x || a),
          (Ht = D || p),
          pe(e, t),
          (Ht = D),
          (tl = x),
          ge(t),
          n & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = a ? e._visibility & -2 : e._visibility | 1,
              a && (l === null || p || tl || Ht || $l(t)),
              l = null,
              e = t;
            ;
          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                p = l = e;
                try {
                  if (((i = p.stateNode), a))
                    ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"));
                  else {
                    d = p.stateNode;
                    var w = p.memoizedProps.style,
                      O =
                        w != null && w.hasOwnProperty("display")
                          ? w.display
                          : null;
                    d.style.display =
                      O == null || typeof O == "boolean" ? "" : ("" + O).trim();
                  }
                } catch (_) {
                  Ot(p, p.return, _);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                p = e;
                try {
                  p.stateNode.nodeValue = a ? "" : p.memoizedProps;
                } catch (_) {
                  Ot(p, p.return, _);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              (l === e && (l = null), (e = e.return));
            }
            (l === e && (l = null),
              (e.sibling.return = e.return),
              (e = e.sibling));
          }
        n & 4 &&
          ((n = t.updateQueue),
          n !== null &&
            ((l = n.retryQueue),
            l !== null && ((n.retryQueue = null), ur(t, l))));
        break;
      case 19:
        (pe(e, t),
          ge(t),
          n & 4 &&
            ((n = t.updateQueue),
            n !== null && ((t.updateQueue = null), ur(t, n))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (pe(e, t), ge(t));
    }
  }
  function ge(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, n = t.return; n !== null; ) {
          if (cd(n)) {
            l = n;
            break;
          }
          n = n.return;
        }
        if (l == null) throw Error(r(160));
        switch (l.tag) {
          case 27:
            var a = l.stateNode,
              i = lr(t);
            Yu(t, i, a);
            break;
          case 5:
            var o = l.stateNode;
            l.flags & 32 && (on(o, ""), (l.flags &= -33));
            var d = lr(t);
            Yu(t, d, o);
            break;
          case 3:
          case 4:
            var p = l.stateNode.containerInfo,
              x = lr(t);
            nr(t, x, p);
            break;
          default:
            throw Error(r(161));
        }
      } catch (D) {
        Ot(t, t.return, D);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function yd(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        (yd(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling));
      }
  }
  function vl(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) (od(t, e.alternate, e), (e = e.sibling));
  }
  function $l(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (gl(4, e, e.return), $l(e));
          break;
        case 1:
          qe(e, e.return);
          var l = e.stateNode;
          (typeof l.componentWillUnmount == "function" && ud(e, e.return, l),
            $l(e));
          break;
        case 27:
          ja(e.stateNode);
        case 26:
        case 5:
          (qe(e, e.return), $l(e));
          break;
        case 22:
          e.memoizedState === null && $l(e);
          break;
        case 30:
          $l(e);
          break;
        default:
          $l(e);
      }
      t = t.sibling;
    }
  }
  function bl(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var n = e.alternate,
        a = t,
        i = e,
        o = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (bl(a, i, l), Ra(4, i));
          break;
        case 1:
          if (
            (bl(a, i, l),
            (n = i),
            (a = n.stateNode),
            typeof a.componentDidMount == "function")
          )
            try {
              a.componentDidMount();
            } catch (x) {
              Ot(n, n.return, x);
            }
          if (((n = i), (a = n.updateQueue), a !== null)) {
            var d = n.stateNode;
            try {
              var p = a.shared.hiddenCallbacks;
              if (p !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < p.length; a++)
                  Vo(p[a], d);
            } catch (x) {
              Ot(n, n.return, x);
            }
          }
          (l && o & 64 && ad(i), Oa(i, i.return));
          break;
        case 27:
          rd(i);
        case 26:
        case 5:
          (bl(a, i, l), l && n === null && o & 4 && id(i), Oa(i, i.return));
          break;
        case 12:
          bl(a, i, l);
          break;
        case 13:
          (bl(a, i, l), l && o & 4 && hd(a, i));
          break;
        case 22:
          (i.memoizedState === null && bl(a, i, l), Oa(i, i.return));
          break;
        case 30:
          break;
        default:
          bl(a, i, l);
      }
      e = e.sibling;
    }
  }
  function ir(t, e) {
    var l = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (l = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== l && (t != null && t.refCount++, l != null && fa(l)));
  }
  function cr(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && fa(t)));
  }
  function Le(t, e, l, n) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (pd(t, e, l, n), (e = e.sibling));
  }
  function pd(t, e, l, n) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Le(t, e, l, n), a & 2048 && Ra(9, e));
        break;
      case 1:
        Le(t, e, l, n);
        break;
      case 3:
        (Le(t, e, l, n),
          a & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && fa(t))));
        break;
      case 12:
        if (a & 2048) {
          (Le(t, e, l, n), (t = e.stateNode));
          try {
            var i = e.memoizedProps,
              o = i.id,
              d = i.onPostCommit;
            typeof d == "function" &&
              d(
                o,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0,
              );
          } catch (p) {
            Ot(e, e.return, p);
          }
        } else Le(t, e, l, n);
        break;
      case 13:
        Le(t, e, l, n);
        break;
      case 23:
        break;
      case 22:
        ((i = e.stateNode),
          (o = e.alternate),
          e.memoizedState !== null
            ? i._visibility & 2
              ? Le(t, e, l, n)
              : _a(t, e)
            : i._visibility & 2
              ? Le(t, e, l, n)
              : ((i._visibility |= 2),
                Mn(t, e, l, n, (e.subtreeFlags & 10256) !== 0)),
          a & 2048 && ir(o, e));
        break;
      case 24:
        (Le(t, e, l, n), a & 2048 && cr(e.alternate, e));
        break;
      default:
        Le(t, e, l, n);
    }
  }
  function Mn(t, e, l, n, a) {
    for (a = a && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var i = t,
        o = e,
        d = l,
        p = n,
        x = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          (Mn(i, o, d, p, a), Ra(8, o));
          break;
        case 23:
          break;
        case 22:
          var D = o.stateNode;
          (o.memoizedState !== null
            ? D._visibility & 2
              ? Mn(i, o, d, p, a)
              : _a(i, o)
            : ((D._visibility |= 2), Mn(i, o, d, p, a)),
            a && x & 2048 && ir(o.alternate, o));
          break;
        case 24:
          (Mn(i, o, d, p, a), a && x & 2048 && cr(o.alternate, o));
          break;
        default:
          Mn(i, o, d, p, a);
      }
      e = e.sibling;
    }
  }
  function _a(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t,
          n = e,
          a = n.flags;
        switch (n.tag) {
          case 22:
            (_a(l, n), a & 2048 && ir(n.alternate, n));
            break;
          case 24:
            (_a(l, n), a & 2048 && cr(n.alternate, n));
            break;
          default:
            _a(l, n);
        }
        e = e.sibling;
      }
  }
  var Na = 8192;
  function zn(t) {
    if (t.subtreeFlags & Na)
      for (t = t.child; t !== null; ) (gd(t), (t = t.sibling));
  }
  function gd(t) {
    switch (t.tag) {
      case 26:
        (zn(t),
          t.flags & Na &&
            t.memoizedState !== null &&
            Sp(Ce, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        zn(t);
        break;
      case 3:
      case 4:
        var e = Ce;
        ((Ce = ti(t.stateNode.containerInfo)), zn(t), (Ce = e));
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = Na), (Na = 16777216), zn(t), (Na = e))
            : zn(t));
        break;
      default:
        zn(t);
    }
  }
  function vd(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do ((e = t.sibling), (t.sibling = null), (t = e));
      while (t !== null);
    }
  }
  function Ma(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var n = e[l];
          ((Kt = n), Sd(n, t));
        }
      vd(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (bd(t), (t = t.sibling));
  }
  function bd(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Ma(t), t.flags & 2048 && gl(9, t, t.return));
        break;
      case 3:
        Ma(t);
        break;
      case 12:
        Ma(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), Xu(t))
          : Ma(t);
        break;
      default:
        Ma(t);
    }
  }
  function Xu(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var n = e[l];
          ((Kt = n), Sd(n, t));
        }
      vd(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (gl(8, e, e.return), Xu(e));
          break;
        case 22:
          ((l = e.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), Xu(e)));
          break;
        default:
          Xu(e);
      }
      t = t.sibling;
    }
  }
  function Sd(t, e) {
    for (; Kt !== null; ) {
      var l = Kt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          gl(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var n = l.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          fa(l.memoizedState.cache);
      }
      if (((n = l.child), n !== null)) ((n.return = l), (Kt = n));
      else
        t: for (l = t; Kt !== null; ) {
          n = Kt;
          var a = n.sibling,
            i = n.return;
          if ((fd(n), n === l)) {
            Kt = null;
            break t;
          }
          if (a !== null) {
            ((a.return = i), (Kt = a));
            break t;
          }
          Kt = i;
        }
    }
  }
  var B0 = {
      getCacheForType: function (t) {
        var e = ee(Gt),
          l = e.data.get(t);
        return (l === void 0 && ((l = t()), e.data.set(t, l)), l);
      },
    },
    H0 = typeof WeakMap == "function" ? WeakMap : Map,
    St = 0,
    Nt = null,
    mt = null,
    gt = 0,
    Et = 0,
    ve = null,
    Sl = !1,
    Dn = !1,
    rr = !1,
    ll = 0,
    jt = 0,
    El = 0,
    Fl = 0,
    sr = 0,
    Me = 0,
    Cn = 0,
    za = null,
    oe = null,
    or = !1,
    fr = 0,
    Vu = 1 / 0,
    Qu = null,
    Tl = null,
    Ft = 0,
    Al = null,
    wn = null,
    Un = 0,
    dr = 0,
    hr = null,
    Ed = null,
    Da = 0,
    mr = null;
  function be() {
    if ((St & 2) !== 0 && gt !== 0) return gt & -gt;
    if (R.T !== null) {
      var t = En;
      return t !== 0 ? t : Er();
    }
    return js();
  }
  function Td() {
    Me === 0 && (Me = (gt & 536870912) === 0 || bt ? Ds() : 536870912);
    var t = Ne.current;
    return (t !== null && (t.flags |= 32), Me);
  }
  function Se(t, e, l) {
    (((t === Nt && (Et === 2 || Et === 9)) || t.cancelPendingCommit !== null) &&
      (jn(t, 0), xl(t, gt, Me, !1)),
      $n(t, l),
      ((St & 2) === 0 || t !== Nt) &&
        (t === Nt &&
          ((St & 2) === 0 && (Fl |= l), jt === 4 && xl(t, gt, Me, !1)),
        Ge(t)));
  }
  function Ad(t, e, l) {
    if ((St & 6) !== 0) throw Error(r(327));
    var n = (!l && (e & 124) === 0 && (e & t.expiredLanes) === 0) || kn(t, e),
      a = n ? G0(t, e) : gr(t, e, !0),
      i = n;
    do {
      if (a === 0) {
        Dn && !n && xl(t, e, 0, !1);
        break;
      } else {
        if (((l = t.current.alternate), i && !q0(l))) {
          ((a = gr(t, e, !1)), (i = !1));
          continue;
        }
        if (a === 2) {
          if (((i = e), t.errorRecoveryDisabledLanes & i)) var o = 0;
          else
            ((o = t.pendingLanes & -536870913),
              (o = o !== 0 ? o : o & 536870912 ? 536870912 : 0));
          if (o !== 0) {
            e = o;
            t: {
              var d = t;
              a = za;
              var p = d.current.memoizedState.isDehydrated;
              if ((p && (jn(d, o).flags |= 256), (o = gr(d, o, !1)), o !== 2)) {
                if (rr && !p) {
                  ((d.errorRecoveryDisabledLanes |= i), (Fl |= i), (a = 4));
                  break t;
                }
                ((i = oe),
                  (oe = a),
                  i !== null &&
                    (oe === null ? (oe = i) : oe.push.apply(oe, i)));
              }
              a = o;
            }
            if (((i = !1), a !== 2)) continue;
          }
        }
        if (a === 1) {
          (jn(t, 0), xl(t, e, 0, !0));
          break;
        }
        t: {
          switch (((n = t), (i = a), i)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              xl(n, e, Me, !Sl);
              break t;
            case 2:
              oe = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((e & 62914560) === e && ((a = fr + 300 - je()), 10 < a)) {
            if ((xl(n, e, Me, !Sl), eu(n, 0, !0) !== 0)) break t;
            n.timeoutHandle = Pd(
              xd.bind(null, n, l, oe, Qu, or, e, Me, Fl, Cn, Sl, i, 2, -0, 0),
              a,
            );
            break t;
          }
          xd(n, l, oe, Qu, or, e, Me, Fl, Cn, Sl, i, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Ge(t);
  }
  function xd(t, e, l, n, a, i, o, d, p, x, D, w, O, _) {
    if (
      ((t.timeoutHandle = -1),
      (w = e.subtreeFlags),
      (w & 8192 || (w & 16785408) === 16785408) &&
        ((qa = { stylesheets: null, count: 0, unsuspend: bp }),
        gd(e),
        (w = Ep()),
        w !== null))
    ) {
      ((t.cancelPendingCommit = w(
        Dd.bind(null, t, e, i, l, n, a, o, d, p, D, 1, O, _),
      )),
        xl(t, i, o, !x));
      return;
    }
    Dd(t, e, i, l, n, a, o, d, p);
  }
  function q0(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        e.flags & 16384 &&
        ((l = e.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var n = 0; n < l.length; n++) {
          var a = l[n],
            i = a.getSnapshot;
          a = a.value;
          try {
            if (!me(i(), a)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = e.child), e.subtreeFlags & 16384 && l !== null))
        ((l.return = e), (e = l));
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    }
    return !0;
  }
  function xl(t, e, l, n) {
    ((e &= ~sr),
      (e &= ~Fl),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      n && (t.warmLanes |= e),
      (n = t.expirationTimes));
    for (var a = e; 0 < a; ) {
      var i = 31 - he(a),
        o = 1 << i;
      ((n[i] = -1), (a &= ~o));
    }
    l !== 0 && ws(t, l, e);
  }
  function Zu() {
    return (St & 6) === 0 ? (Ca(0), !1) : !0;
  }
  function yr() {
    if (mt !== null) {
      if (Et === 0) var t = mt.return;
      else ((t = mt), (ke = Ql = null), Cc(t), (_n = null), (Ta = 0), (t = mt));
      for (; t !== null; ) (nd(t.alternate, t), (t = t.return));
      mt = null;
    }
  }
  function jn(t, e) {
    var l = t.timeoutHandle;
    (l !== -1 && ((t.timeoutHandle = -1), lp(l)),
      (l = t.cancelPendingCommit),
      l !== null && ((t.cancelPendingCommit = null), l()),
      yr(),
      (Nt = t),
      (mt = l = Ze(t.current, null)),
      (gt = e),
      (Et = 0),
      (ve = null),
      (Sl = !1),
      (Dn = kn(t, e)),
      (rr = !1),
      (Cn = Me = sr = Fl = El = jt = 0),
      (oe = za = null),
      (or = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var n = t.entangledLanes;
    if (n !== 0)
      for (t = t.entanglements, n &= e; 0 < n; ) {
        var a = 31 - he(n),
          i = 1 << a;
        ((e |= t[a]), (n &= ~i));
      }
    return ((ll = e), hu(), l);
  }
  function Rd(t, e) {
    ((ot = null),
      (R.H = Cu),
      e === ha || e === Tu
        ? ((e = Yo()), (Et = 3))
        : e === qo
          ? ((e = Yo()), (Et = 4))
          : (Et =
              e === Vf
                ? 8
                : e !== null &&
                    typeof e == "object" &&
                    typeof e.then == "function"
                  ? 6
                  : 1),
      (ve = e),
      mt === null && ((jt = 1), Hu(t, xe(e, t.current))));
  }
  function Od() {
    var t = R.H;
    return ((R.H = Cu), t === null ? Cu : t);
  }
  function _d() {
    var t = R.A;
    return ((R.A = B0), t);
  }
  function pr() {
    ((jt = 4),
      Sl || ((gt & 4194048) !== gt && Ne.current !== null) || (Dn = !0),
      ((El & 134217727) === 0 && (Fl & 134217727) === 0) ||
        Nt === null ||
        xl(Nt, gt, Me, !1));
  }
  function gr(t, e, l) {
    var n = St;
    St |= 2;
    var a = Od(),
      i = _d();
    ((Nt !== t || gt !== e) && ((Qu = null), jn(t, e)), (e = !1));
    var o = jt;
    t: do
      try {
        if (Et !== 0 && mt !== null) {
          var d = mt,
            p = ve;
          switch (Et) {
            case 8:
              (yr(), (o = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Ne.current === null && (e = !0);
              var x = Et;
              if (((Et = 0), (ve = null), Bn(t, d, p, x), l && Dn)) {
                o = 0;
                break t;
              }
              break;
            default:
              ((x = Et), (Et = 0), (ve = null), Bn(t, d, p, x));
          }
        }
        (L0(), (o = jt));
        break;
      } catch (D) {
        Rd(t, D);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (ke = Ql = null),
      (St = n),
      (R.H = a),
      (R.A = i),
      mt === null && ((Nt = null), (gt = 0), hu()),
      o
    );
  }
  function L0() {
    for (; mt !== null; ) Nd(mt);
  }
  function G0(t, e) {
    var l = St;
    St |= 2;
    var n = Od(),
      a = _d();
    Nt !== t || gt !== e
      ? ((Qu = null), (Vu = je() + 500), jn(t, e))
      : (Dn = kn(t, e));
    t: do
      try {
        if (Et !== 0 && mt !== null) {
          e = mt;
          var i = ve;
          e: switch (Et) {
            case 1:
              ((Et = 0), (ve = null), Bn(t, e, i, 1));
              break;
            case 2:
            case 9:
              if (Lo(i)) {
                ((Et = 0), (ve = null), Md(e));
                break;
              }
              ((e = function () {
                ((Et !== 2 && Et !== 9) || Nt !== t || (Et = 7), Ge(t));
              }),
                i.then(e, e));
              break t;
            case 3:
              Et = 7;
              break t;
            case 4:
              Et = 5;
              break t;
            case 7:
              Lo(i)
                ? ((Et = 0), (ve = null), Md(e))
                : ((Et = 0), (ve = null), Bn(t, e, i, 7));
              break;
            case 5:
              var o = null;
              switch (mt.tag) {
                case 26:
                  o = mt.memoizedState;
                case 5:
                case 27:
                  var d = mt;
                  if (!o || oh(o)) {
                    ((Et = 0), (ve = null));
                    var p = d.sibling;
                    if (p !== null) mt = p;
                    else {
                      var x = d.return;
                      x !== null ? ((mt = x), Ku(x)) : (mt = null);
                    }
                    break e;
                  }
              }
              ((Et = 0), (ve = null), Bn(t, e, i, 5));
              break;
            case 6:
              ((Et = 0), (ve = null), Bn(t, e, i, 6));
              break;
            case 8:
              (yr(), (jt = 6));
              break t;
            default:
              throw Error(r(462));
          }
        }
        Y0();
        break;
      } catch (D) {
        Rd(t, D);
      }
    while (!0);
    return (
      (ke = Ql = null),
      (R.H = n),
      (R.A = a),
      (St = l),
      mt !== null ? 0 : ((Nt = null), (gt = 0), hu(), jt)
    );
  }
  function Y0() {
    for (; mt !== null && !sy(); ) Nd(mt);
  }
  function Nd(t) {
    var e = ed(t.alternate, t, ll);
    ((t.memoizedProps = t.pendingProps), e === null ? Ku(t) : (mt = e));
  }
  function Md(t) {
    var e = t,
      l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = $f(l, e, e.pendingProps, e.type, void 0, gt);
        break;
      case 11:
        e = $f(l, e, e.pendingProps, e.type.render, e.ref, gt);
        break;
      case 5:
        Cc(e);
      default:
        (nd(l, e), (e = mt = Mo(e, ll)), (e = ed(l, e, ll)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? Ku(t) : (mt = e));
  }
  function Bn(t, e, l, n) {
    ((ke = Ql = null), Cc(e), (_n = null), (Ta = 0));
    var a = e.return;
    try {
      if (z0(t, a, e, l, gt)) {
        ((jt = 1), Hu(t, xe(l, t.current)), (mt = null));
        return;
      }
    } catch (i) {
      if (a !== null) throw ((mt = a), i);
      ((jt = 1), Hu(t, xe(l, t.current)), (mt = null));
      return;
    }
    e.flags & 32768
      ? (bt || n === 1
          ? (t = !0)
          : Dn || (gt & 536870912) !== 0
            ? (t = !1)
            : ((Sl = t = !0),
              (n === 2 || n === 9 || n === 3 || n === 6) &&
                ((n = Ne.current),
                n !== null && n.tag === 13 && (n.flags |= 16384))),
        zd(e, t))
      : Ku(e);
  }
  function Ku(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        zd(e, Sl);
        return;
      }
      t = e.return;
      var l = C0(e.alternate, e, ll);
      if (l !== null) {
        mt = l;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        mt = e;
        return;
      }
      mt = e = t;
    } while (e !== null);
    jt === 0 && (jt = 5);
  }
  function zd(t, e) {
    do {
      var l = w0(t.alternate, t);
      if (l !== null) {
        ((l.flags &= 32767), (mt = l));
        return;
      }
      if (
        ((l = t.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        mt = t;
        return;
      }
      mt = t = l;
    } while (t !== null);
    ((jt = 6), (mt = null));
  }
  function Dd(t, e, l, n, a, i, o, d, p) {
    t.cancelPendingCommit = null;
    do Ju();
    while (Ft !== 0);
    if ((St & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      if (
        ((i = e.lanes | e.childLanes),
        (i |= cc),
        by(t, l, i, o, d, p),
        t === Nt && ((mt = Nt = null), (gt = 0)),
        (wn = e),
        (Al = t),
        (Un = l),
        (dr = i),
        (hr = a),
        (Ed = n),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            Z0(Pa, function () {
              return (Bd(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (n = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || n)
      ) {
        ((n = R.T), (R.T = null), (a = L.p), (L.p = 2), (o = St), (St |= 4));
        try {
          U0(t, e, l);
        } finally {
          ((St = o), (L.p = a), (R.T = n));
        }
      }
      ((Ft = 1), Cd(), wd(), Ud());
    }
  }
  function Cd() {
    if (Ft === 1) {
      Ft = 0;
      var t = Al,
        e = wn,
        l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        ((l = R.T), (R.T = null));
        var n = L.p;
        L.p = 2;
        var a = St;
        St |= 4;
        try {
          md(e, t);
          var i = Mr,
            o = bo(t.containerInfo),
            d = i.focusedElem,
            p = i.selectionRange;
          if (
            o !== d &&
            d &&
            d.ownerDocument &&
            vo(d.ownerDocument.documentElement, d)
          ) {
            if (p !== null && lc(d)) {
              var x = p.start,
                D = p.end;
              if ((D === void 0 && (D = x), "selectionStart" in d))
                ((d.selectionStart = x),
                  (d.selectionEnd = Math.min(D, d.value.length)));
              else {
                var w = d.ownerDocument || document,
                  O = (w && w.defaultView) || window;
                if (O.getSelection) {
                  var _ = O.getSelection(),
                    at = d.textContent.length,
                    et = Math.min(p.start, at),
                    Rt = p.end === void 0 ? et : Math.min(p.end, at);
                  !_.extend && et > Rt && ((o = Rt), (Rt = et), (et = o));
                  var T = go(d, et),
                    S = go(d, Rt);
                  if (
                    T &&
                    S &&
                    (_.rangeCount !== 1 ||
                      _.anchorNode !== T.node ||
                      _.anchorOffset !== T.offset ||
                      _.focusNode !== S.node ||
                      _.focusOffset !== S.offset)
                  ) {
                    var A = w.createRange();
                    (A.setStart(T.node, T.offset),
                      _.removeAllRanges(),
                      et > Rt
                        ? (_.addRange(A), _.extend(S.node, S.offset))
                        : (A.setEnd(S.node, S.offset), _.addRange(A)));
                  }
                }
              }
            }
            for (w = [], _ = d; (_ = _.parentNode); )
              _.nodeType === 1 &&
                w.push({ element: _, left: _.scrollLeft, top: _.scrollTop });
            for (
              typeof d.focus == "function" && d.focus(), d = 0;
              d < w.length;
              d++
            ) {
              var C = w[d];
              ((C.element.scrollLeft = C.left), (C.element.scrollTop = C.top));
            }
          }
          ((ui = !!Nr), (Mr = Nr = null));
        } finally {
          ((St = a), (L.p = n), (R.T = l));
        }
      }
      ((t.current = e), (Ft = 2));
    }
  }
  function wd() {
    if (Ft === 2) {
      Ft = 0;
      var t = Al,
        e = wn,
        l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        ((l = R.T), (R.T = null));
        var n = L.p;
        L.p = 2;
        var a = St;
        St |= 4;
        try {
          od(t, e.alternate, e);
        } finally {
          ((St = a), (L.p = n), (R.T = l));
        }
      }
      Ft = 3;
    }
  }
  function Ud() {
    if (Ft === 4 || Ft === 3) {
      ((Ft = 0), oy());
      var t = Al,
        e = wn,
        l = Un,
        n = Ed;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Ft = 5)
        : ((Ft = 0), (wn = Al = null), jd(t, t.pendingLanes));
      var a = t.pendingLanes;
      if (
        (a === 0 && (Tl = null),
        ji(l),
        (e = e.stateNode),
        de && typeof de.onCommitFiberRoot == "function")
      )
        try {
          de.onCommitFiberRoot(Jn, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (n !== null) {
        ((e = R.T), (a = L.p), (L.p = 2), (R.T = null));
        try {
          for (var i = t.onRecoverableError, o = 0; o < n.length; o++) {
            var d = n[o];
            i(d.value, { componentStack: d.stack });
          }
        } finally {
          ((R.T = e), (L.p = a));
        }
      }
      ((Un & 3) !== 0 && Ju(),
        Ge(t),
        (a = t.pendingLanes),
        (l & 4194090) !== 0 && (a & 42) !== 0
          ? t === mr
            ? Da++
            : ((Da = 0), (mr = t))
          : (Da = 0),
        Ca(0));
    }
  }
  function jd(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), fa(e)));
  }
  function Ju(t) {
    return (Cd(), wd(), Ud(), Bd());
  }
  function Bd() {
    if (Ft !== 5) return !1;
    var t = Al,
      e = dr;
    dr = 0;
    var l = ji(Un),
      n = R.T,
      a = L.p;
    try {
      ((L.p = 32 > l ? 32 : l), (R.T = null), (l = hr), (hr = null));
      var i = Al,
        o = Un;
      if (((Ft = 0), (wn = Al = null), (Un = 0), (St & 6) !== 0))
        throw Error(r(331));
      var d = St;
      if (
        ((St |= 4),
        bd(i.current),
        pd(i, i.current, o, l),
        (St = d),
        Ca(0, !1),
        de && typeof de.onPostCommitFiberRoot == "function")
      )
        try {
          de.onPostCommitFiberRoot(Jn, i);
        } catch {}
      return !0;
    } finally {
      ((L.p = a), (R.T = n), jd(t, e));
    }
  }
  function Hd(t, e, l) {
    ((e = xe(l, e)),
      (e = Kc(t.stateNode, e, 2)),
      (t = hl(t, e, 2)),
      t !== null && ($n(t, 2), Ge(t)));
  }
  function Ot(t, e, l) {
    if (t.tag === 3) Hd(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Hd(e, t, l);
          break;
        } else if (e.tag === 1) {
          var n = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof n.componentDidCatch == "function" &&
              (Tl === null || !Tl.has(n)))
          ) {
            ((t = xe(l, t)),
              (l = Yf(2)),
              (n = hl(e, l, 2)),
              n !== null && (Xf(l, n, e, t), $n(n, 2), Ge(n)));
            break;
          }
        }
        e = e.return;
      }
  }
  function vr(t, e, l) {
    var n = t.pingCache;
    if (n === null) {
      n = t.pingCache = new H0();
      var a = new Set();
      n.set(e, a);
    } else ((a = n.get(e)), a === void 0 && ((a = new Set()), n.set(e, a)));
    a.has(l) ||
      ((rr = !0), a.add(l), (t = X0.bind(null, t, e, l)), e.then(t, t));
  }
  function X0(t, e, l) {
    var n = t.pingCache;
    (n !== null && n.delete(e),
      (t.pingedLanes |= t.suspendedLanes & l),
      (t.warmLanes &= ~l),
      Nt === t &&
        (gt & l) === l &&
        (jt === 4 || (jt === 3 && (gt & 62914560) === gt && 300 > je() - fr)
          ? (St & 2) === 0 && jn(t, 0)
          : (sr |= l),
        Cn === gt && (Cn = 0)),
      Ge(t));
  }
  function qd(t, e) {
    (e === 0 && (e = Cs()), (t = gn(t, e)), t !== null && ($n(t, e), Ge(t)));
  }
  function V0(t) {
    var e = t.memoizedState,
      l = 0;
    (e !== null && (l = e.retryLane), qd(t, l));
  }
  function Q0(t, e) {
    var l = 0;
    switch (t.tag) {
      case 13:
        var n = t.stateNode,
          a = t.memoizedState;
        a !== null && (l = a.retryLane);
        break;
      case 19:
        n = t.stateNode;
        break;
      case 22:
        n = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    (n !== null && n.delete(e), qd(t, l));
  }
  function Z0(t, e) {
    return Di(t, e);
  }
  var ku = null,
    Hn = null,
    br = !1,
    $u = !1,
    Sr = !1,
    Wl = 0;
  function Ge(t) {
    (t !== Hn &&
      t.next === null &&
      (Hn === null ? (ku = Hn = t) : (Hn = Hn.next = t)),
      ($u = !0),
      br || ((br = !0), J0()));
  }
  function Ca(t, e) {
    if (!Sr && $u) {
      Sr = !0;
      do
        for (var l = !1, n = ku; n !== null; ) {
          if (t !== 0) {
            var a = n.pendingLanes;
            if (a === 0) var i = 0;
            else {
              var o = n.suspendedLanes,
                d = n.pingedLanes;
              ((i = (1 << (31 - he(42 | t) + 1)) - 1),
                (i &= a & ~(o & ~d)),
                (i = i & 201326741 ? (i & 201326741) | 1 : i ? i | 2 : 0));
            }
            i !== 0 && ((l = !0), Xd(n, i));
          } else
            ((i = gt),
              (i = eu(
                n,
                n === Nt ? i : 0,
                n.cancelPendingCommit !== null || n.timeoutHandle !== -1,
              )),
              (i & 3) === 0 || kn(n, i) || ((l = !0), Xd(n, i)));
          n = n.next;
        }
      while (l);
      Sr = !1;
    }
  }
  function K0() {
    Ld();
  }
  function Ld() {
    $u = br = !1;
    var t = 0;
    Wl !== 0 && (ep() && (t = Wl), (Wl = 0));
    for (var e = je(), l = null, n = ku; n !== null; ) {
      var a = n.next,
        i = Gd(n, e);
      (i === 0
        ? ((n.next = null),
          l === null ? (ku = a) : (l.next = a),
          a === null && (Hn = l))
        : ((l = n), (t !== 0 || (i & 3) !== 0) && ($u = !0)),
        (n = a));
    }
    Ca(t);
  }
  function Gd(t, e) {
    for (
      var l = t.suspendedLanes,
        n = t.pingedLanes,
        a = t.expirationTimes,
        i = t.pendingLanes & -62914561;
      0 < i;
    ) {
      var o = 31 - he(i),
        d = 1 << o,
        p = a[o];
      (p === -1
        ? ((d & l) === 0 || (d & n) !== 0) && (a[o] = vy(d, e))
        : p <= e && (t.expiredLanes |= d),
        (i &= ~d));
    }
    if (
      ((e = Nt),
      (l = gt),
      (l = eu(
        t,
        t === e ? l : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      (n = t.callbackNode),
      l === 0 ||
        (t === e && (Et === 2 || Et === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        n !== null && n !== null && Ci(n),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((l & 3) === 0 || kn(t, l)) {
      if (((e = l & -l), e === t.callbackPriority)) return e;
      switch ((n !== null && Ci(n), ji(l))) {
        case 2:
        case 8:
          l = Ms;
          break;
        case 32:
          l = Pa;
          break;
        case 268435456:
          l = zs;
          break;
        default:
          l = Pa;
      }
      return (
        (n = Yd.bind(null, t)),
        (l = Di(l, n)),
        (t.callbackPriority = e),
        (t.callbackNode = l),
        e
      );
    }
    return (
      n !== null && n !== null && Ci(n),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Yd(t, e) {
    if (Ft !== 0 && Ft !== 5)
      return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var l = t.callbackNode;
    if (Ju() && t.callbackNode !== l) return null;
    var n = gt;
    return (
      (n = eu(
        t,
        t === Nt ? n : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      n === 0
        ? null
        : (Ad(t, n, e),
          Gd(t, je()),
          t.callbackNode != null && t.callbackNode === l
            ? Yd.bind(null, t)
            : null)
    );
  }
  function Xd(t, e) {
    if (Ju()) return null;
    Ad(t, e, !0);
  }
  function J0() {
    np(function () {
      (St & 6) !== 0 ? Di(Ns, K0) : Ld();
    });
  }
  function Er() {
    return (Wl === 0 && (Wl = Ds()), Wl);
  }
  function Vd(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : iu("" + t);
  }
  function Qd(t, e) {
    var l = e.ownerDocument.createElement("input");
    return (
      (l.name = e.name),
      (l.value = e.value),
      t.id && l.setAttribute("form", t.id),
      e.parentNode.insertBefore(l, e),
      (t = new FormData(t)),
      l.parentNode.removeChild(l),
      t
    );
  }
  function k0(t, e, l, n, a) {
    if (e === "submit" && l && l.stateNode === a) {
      var i = Vd((a[ie] || null).action),
        o = n.submitter;
      o &&
        ((e = (e = o[ie] || null)
          ? Vd(e.formAction)
          : o.getAttribute("formAction")),
        e !== null && ((i = e), (o = null)));
      var d = new ou("action", "action", null, n, a);
      t.push({
        event: d,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (n.defaultPrevented) {
                if (Wl !== 0) {
                  var p = o ? Qd(a, o) : new FormData(a);
                  Yc(
                    l,
                    { pending: !0, data: p, method: a.method, action: i },
                    null,
                    p,
                  );
                }
              } else
                typeof i == "function" &&
                  (d.preventDefault(),
                  (p = o ? Qd(a, o) : new FormData(a)),
                  Yc(
                    l,
                    { pending: !0, data: p, method: a.method, action: i },
                    i,
                    p,
                  ));
            },
            currentTarget: a,
          },
        ],
      });
    }
  }
  for (var Tr = 0; Tr < ic.length; Tr++) {
    var Ar = ic[Tr],
      $0 = Ar.toLowerCase(),
      F0 = Ar[0].toUpperCase() + Ar.slice(1);
    De($0, "on" + F0);
  }
  (De(To, "onAnimationEnd"),
    De(Ao, "onAnimationIteration"),
    De(xo, "onAnimationStart"),
    De("dblclick", "onDoubleClick"),
    De("focusin", "onFocus"),
    De("focusout", "onBlur"),
    De(h0, "onTransitionRun"),
    De(m0, "onTransitionStart"),
    De(y0, "onTransitionCancel"),
    De(Ro, "onTransitionEnd"),
    cn("onMouseEnter", ["mouseout", "mouseover"]),
    cn("onMouseLeave", ["mouseout", "mouseover"]),
    cn("onPointerEnter", ["pointerout", "pointerover"]),
    cn("onPointerLeave", ["pointerout", "pointerover"]),
    jl(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    jl(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    jl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    jl(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    jl(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    jl(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var wa =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    W0 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(wa),
    );
  function Zd(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var n = t[l],
        a = n.event;
      n = n.listeners;
      t: {
        var i = void 0;
        if (e)
          for (var o = n.length - 1; 0 <= o; o--) {
            var d = n[o],
              p = d.instance,
              x = d.currentTarget;
            if (((d = d.listener), p !== i && a.isPropagationStopped()))
              break t;
            ((i = d), (a.currentTarget = x));
            try {
              i(a);
            } catch (D) {
              Bu(D);
            }
            ((a.currentTarget = null), (i = p));
          }
        else
          for (o = 0; o < n.length; o++) {
            if (
              ((d = n[o]),
              (p = d.instance),
              (x = d.currentTarget),
              (d = d.listener),
              p !== i && a.isPropagationStopped())
            )
              break t;
            ((i = d), (a.currentTarget = x));
            try {
              i(a);
            } catch (D) {
              Bu(D);
            }
            ((a.currentTarget = null), (i = p));
          }
      }
    }
  }
  function yt(t, e) {
    var l = e[Bi];
    l === void 0 && (l = e[Bi] = new Set());
    var n = t + "__bubble";
    l.has(n) || (Kd(e, t, 2, !1), l.add(n));
  }
  function xr(t, e, l) {
    var n = 0;
    (e && (n |= 4), Kd(l, t, n, e));
  }
  var Fu = "_reactListening" + Math.random().toString(36).slice(2);
  function Rr(t) {
    if (!t[Fu]) {
      ((t[Fu] = !0),
        Hs.forEach(function (l) {
          l !== "selectionchange" && (W0.has(l) || xr(l, !1, t), xr(l, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Fu] || ((e[Fu] = !0), xr("selectionchange", !1, e));
    }
  }
  function Kd(t, e, l, n) {
    switch (ph(e)) {
      case 2:
        var a = xp;
        break;
      case 8:
        a = Rp;
        break;
      default:
        a = Lr;
    }
    ((l = a.bind(null, e, l, t)),
      (a = void 0),
      !Ji ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (a = !0),
      n
        ? a !== void 0
          ? t.addEventListener(e, l, { capture: !0, passive: a })
          : t.addEventListener(e, l, !0)
        : a !== void 0
          ? t.addEventListener(e, l, { passive: a })
          : t.addEventListener(e, l, !1));
  }
  function Or(t, e, l, n, a) {
    var i = n;
    if ((e & 1) === 0 && (e & 2) === 0 && n !== null)
      t: for (;;) {
        if (n === null) return;
        var o = n.tag;
        if (o === 3 || o === 4) {
          var d = n.stateNode.containerInfo;
          if (d === a) break;
          if (o === 4)
            for (o = n.return; o !== null; ) {
              var p = o.tag;
              if ((p === 3 || p === 4) && o.stateNode.containerInfo === a)
                return;
              o = o.return;
            }
          for (; d !== null; ) {
            if (((o = nn(d)), o === null)) return;
            if (((p = o.tag), p === 5 || p === 6 || p === 26 || p === 27)) {
              n = i = o;
              continue t;
            }
            d = d.parentNode;
          }
        }
        n = n.return;
      }
    Ws(function () {
      var x = i,
        D = Zi(l),
        w = [];
      t: {
        var O = Oo.get(t);
        if (O !== void 0) {
          var _ = ou,
            at = t;
          switch (t) {
            case "keypress":
              if (ru(l) === 0) break t;
            case "keydown":
            case "keyup":
              _ = Zy;
              break;
            case "focusin":
              ((at = "focus"), (_ = Wi));
              break;
            case "focusout":
              ((at = "blur"), (_ = Wi));
              break;
            case "beforeblur":
            case "afterblur":
              _ = Wi;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              _ = to;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              _ = wy;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              _ = ky;
              break;
            case To:
            case Ao:
            case xo:
              _ = By;
              break;
            case Ro:
              _ = Fy;
              break;
            case "scroll":
            case "scrollend":
              _ = Dy;
              break;
            case "wheel":
              _ = Py;
              break;
            case "copy":
            case "cut":
            case "paste":
              _ = qy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              _ = lo;
              break;
            case "toggle":
            case "beforetoggle":
              _ = t0;
          }
          var et = (e & 4) !== 0,
            Rt = !et && (t === "scroll" || t === "scrollend"),
            T = et ? (O !== null ? O + "Capture" : null) : O;
          et = [];
          for (var S = x, A; S !== null; ) {
            var C = S;
            if (
              ((A = C.stateNode),
              (C = C.tag),
              (C !== 5 && C !== 26 && C !== 27) ||
                A === null ||
                T === null ||
                ((C = Pn(S, T)), C != null && et.push(Ua(S, C, A))),
              Rt)
            )
              break;
            S = S.return;
          }
          0 < et.length &&
            ((O = new _(O, at, null, l, D)),
            w.push({ event: O, listeners: et }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((O = t === "mouseover" || t === "pointerover"),
            (_ = t === "mouseout" || t === "pointerout"),
            O &&
              l !== Qi &&
              (at = l.relatedTarget || l.fromElement) &&
              (nn(at) || at[ln]))
          )
            break t;
          if (
            (_ || O) &&
            ((O =
              D.window === D
                ? D
                : (O = D.ownerDocument)
                  ? O.defaultView || O.parentWindow
                  : window),
            _
              ? ((at = l.relatedTarget || l.toElement),
                (_ = x),
                (at = at ? nn(at) : null),
                at !== null &&
                  ((Rt = m(at)),
                  (et = at.tag),
                  at !== Rt || (et !== 5 && et !== 27 && et !== 6)) &&
                  (at = null))
              : ((_ = null), (at = x)),
            _ !== at)
          ) {
            if (
              ((et = to),
              (C = "onMouseLeave"),
              (T = "onMouseEnter"),
              (S = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((et = lo),
                (C = "onPointerLeave"),
                (T = "onPointerEnter"),
                (S = "pointer")),
              (Rt = _ == null ? O : Wn(_)),
              (A = at == null ? O : Wn(at)),
              (O = new et(C, S + "leave", _, l, D)),
              (O.target = Rt),
              (O.relatedTarget = A),
              (C = null),
              nn(D) === x &&
                ((et = new et(T, S + "enter", at, l, D)),
                (et.target = A),
                (et.relatedTarget = Rt),
                (C = et)),
              (Rt = C),
              _ && at)
            )
              e: {
                for (et = _, T = at, S = 0, A = et; A; A = qn(A)) S++;
                for (A = 0, C = T; C; C = qn(C)) A++;
                for (; 0 < S - A; ) ((et = qn(et)), S--);
                for (; 0 < A - S; ) ((T = qn(T)), A--);
                for (; S--; ) {
                  if (et === T || (T !== null && et === T.alternate)) break e;
                  ((et = qn(et)), (T = qn(T)));
                }
                et = null;
              }
            else et = null;
            (_ !== null && Jd(w, O, _, et, !1),
              at !== null && Rt !== null && Jd(w, Rt, at, et, !0));
          }
        }
        t: {
          if (
            ((O = x ? Wn(x) : window),
            (_ = O.nodeName && O.nodeName.toLowerCase()),
            _ === "select" || (_ === "input" && O.type === "file"))
          )
            var J = oo;
          else if (ro(O))
            if (fo) J = o0;
            else {
              J = r0;
              var dt = c0;
            }
          else
            ((_ = O.nodeName),
              !_ ||
              _.toLowerCase() !== "input" ||
              (O.type !== "checkbox" && O.type !== "radio")
                ? x && Vi(x.elementType) && (J = oo)
                : (J = s0));
          if (J && (J = J(t, x))) {
            so(w, J, l, D);
            break t;
          }
          (dt && dt(t, O, x),
            t === "focusout" &&
              x &&
              O.type === "number" &&
              x.memoizedProps.value != null &&
              Xi(O, "number", O.value));
        }
        switch (((dt = x ? Wn(x) : window), t)) {
          case "focusin":
            (ro(dt) || dt.contentEditable === "true") &&
              ((mn = dt), (nc = x), (ia = null));
            break;
          case "focusout":
            ia = nc = mn = null;
            break;
          case "mousedown":
            ac = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((ac = !1), So(w, l, D));
            break;
          case "selectionchange":
            if (d0) break;
          case "keydown":
          case "keyup":
            So(w, l, D);
        }
        var W;
        if (Ii)
          t: {
            switch (t) {
              case "compositionstart":
                var lt = "onCompositionStart";
                break t;
              case "compositionend":
                lt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                lt = "onCompositionUpdate";
                break t;
            }
            lt = void 0;
          }
        else
          hn
            ? io(t, l) && (lt = "onCompositionEnd")
            : t === "keydown" &&
              l.keyCode === 229 &&
              (lt = "onCompositionStart");
        (lt &&
          (no &&
            l.locale !== "ko" &&
            (hn || lt !== "onCompositionStart"
              ? lt === "onCompositionEnd" && hn && (W = Ps())
              : ((sl = D),
                (ki = "value" in sl ? sl.value : sl.textContent),
                (hn = !0))),
          (dt = Wu(x, lt)),
          0 < dt.length &&
            ((lt = new eo(lt, t, null, l, D)),
            w.push({ event: lt, listeners: dt }),
            W ? (lt.data = W) : ((W = co(l)), W !== null && (lt.data = W)))),
          (W = l0 ? n0(t, l) : a0(t, l)) &&
            ((lt = Wu(x, "onBeforeInput")),
            0 < lt.length &&
              ((dt = new eo("onBeforeInput", "beforeinput", null, l, D)),
              w.push({ event: dt, listeners: lt }),
              (dt.data = W))),
          k0(w, t, x, l, D));
      }
      Zd(w, e);
    });
  }
  function Ua(t, e, l) {
    return { instance: t, listener: e, currentTarget: l };
  }
  function Wu(t, e) {
    for (var l = e + "Capture", n = []; t !== null; ) {
      var a = t,
        i = a.stateNode;
      if (
        ((a = a.tag),
        (a !== 5 && a !== 26 && a !== 27) ||
          i === null ||
          ((a = Pn(t, l)),
          a != null && n.unshift(Ua(t, a, i)),
          (a = Pn(t, e)),
          a != null && n.push(Ua(t, a, i))),
        t.tag === 3)
      )
        return n;
      t = t.return;
    }
    return [];
  }
  function qn(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Jd(t, e, l, n, a) {
    for (var i = e._reactName, o = []; l !== null && l !== n; ) {
      var d = l,
        p = d.alternate,
        x = d.stateNode;
      if (((d = d.tag), p !== null && p === n)) break;
      ((d !== 5 && d !== 26 && d !== 27) ||
        x === null ||
        ((p = x),
        a
          ? ((x = Pn(l, i)), x != null && o.unshift(Ua(l, x, p)))
          : a || ((x = Pn(l, i)), x != null && o.push(Ua(l, x, p)))),
        (l = l.return));
    }
    o.length !== 0 && t.push({ event: e, listeners: o });
  }
  var P0 = /\r\n?/g,
    I0 = /\u0000|\uFFFD/g;
  function kd(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        P0,
        `
`,
      )
      .replace(I0, "");
  }
  function $d(t, e) {
    return ((e = kd(e)), kd(t) === e);
  }
  function Pu() {}
  function xt(t, e, l, n, a, i) {
    switch (l) {
      case "children":
        typeof n == "string"
          ? e === "body" || (e === "textarea" && n === "") || on(t, n)
          : (typeof n == "number" || typeof n == "bigint") &&
            e !== "body" &&
            on(t, "" + n);
        break;
      case "className":
        nu(t, "class", n);
        break;
      case "tabIndex":
        nu(t, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        nu(t, l, n);
        break;
      case "style":
        $s(t, n, i);
        break;
      case "data":
        if (e !== "object") {
          nu(t, "data", n);
          break;
        }
      case "src":
      case "href":
        if (n === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (
          n == null ||
          typeof n == "function" ||
          typeof n == "symbol" ||
          typeof n == "boolean"
        ) {
          t.removeAttribute(l);
          break;
        }
        ((n = iu("" + n)), t.setAttribute(l, n));
        break;
      case "action":
      case "formAction":
        if (typeof n == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof i == "function" &&
            (l === "formAction"
              ? (e !== "input" && xt(t, e, "name", a.name, a, null),
                xt(t, e, "formEncType", a.formEncType, a, null),
                xt(t, e, "formMethod", a.formMethod, a, null),
                xt(t, e, "formTarget", a.formTarget, a, null))
              : (xt(t, e, "encType", a.encType, a, null),
                xt(t, e, "method", a.method, a, null),
                xt(t, e, "target", a.target, a, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          t.removeAttribute(l);
          break;
        }
        ((n = iu("" + n)), t.setAttribute(l, n));
        break;
      case "onClick":
        n != null && (t.onclick = Pu);
        break;
      case "onScroll":
        n != null && yt("scroll", t);
        break;
      case "onScrollEnd":
        n != null && yt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n)) throw Error(r(61));
          if (((l = n.__html), l != null)) {
            if (a.children != null) throw Error(r(60));
            t.innerHTML = l;
          }
        }
        break;
      case "multiple":
        t.multiple = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "muted":
        t.muted = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          n == null ||
          typeof n == "function" ||
          typeof n == "boolean" ||
          typeof n == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        ((l = iu("" + n)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        n != null && typeof n != "function" && typeof n != "symbol"
          ? t.setAttribute(l, "" + n)
          : t.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        n && typeof n != "function" && typeof n != "symbol"
          ? t.setAttribute(l, "")
          : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        n === !0
          ? t.setAttribute(l, "")
          : n !== !1 &&
              n != null &&
              typeof n != "function" &&
              typeof n != "symbol"
            ? t.setAttribute(l, n)
            : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        !isNaN(n) &&
        1 <= n
          ? t.setAttribute(l, n)
          : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n)
          ? t.removeAttribute(l)
          : t.setAttribute(l, n);
        break;
      case "popover":
        (yt("beforetoggle", t), yt("toggle", t), lu(t, "popover", n));
        break;
      case "xlinkActuate":
        Ve(t, "http://www.w3.org/1999/xlink", "xlink:actuate", n);
        break;
      case "xlinkArcrole":
        Ve(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", n);
        break;
      case "xlinkRole":
        Ve(t, "http://www.w3.org/1999/xlink", "xlink:role", n);
        break;
      case "xlinkShow":
        Ve(t, "http://www.w3.org/1999/xlink", "xlink:show", n);
        break;
      case "xlinkTitle":
        Ve(t, "http://www.w3.org/1999/xlink", "xlink:title", n);
        break;
      case "xlinkType":
        Ve(t, "http://www.w3.org/1999/xlink", "xlink:type", n);
        break;
      case "xmlBase":
        Ve(t, "http://www.w3.org/XML/1998/namespace", "xml:base", n);
        break;
      case "xmlLang":
        Ve(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", n);
        break;
      case "xmlSpace":
        Ve(t, "http://www.w3.org/XML/1998/namespace", "xml:space", n);
        break;
      case "is":
        lu(t, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = My.get(l) || l), lu(t, l, n));
    }
  }
  function _r(t, e, l, n, a, i) {
    switch (l) {
      case "style":
        $s(t, n, i);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n)) throw Error(r(61));
          if (((l = n.__html), l != null)) {
            if (a.children != null) throw Error(r(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof n == "string"
          ? on(t, n)
          : (typeof n == "number" || typeof n == "bigint") && on(t, "" + n);
        break;
      case "onScroll":
        n != null && yt("scroll", t);
        break;
      case "onScrollEnd":
        n != null && yt("scrollend", t);
        break;
      case "onClick":
        n != null && (t.onclick = Pu);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!qs.hasOwnProperty(l))
          t: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((a = l.endsWith("Capture")),
              (e = l.slice(2, a ? l.length - 7 : void 0)),
              (i = t[ie] || null),
              (i = i != null ? i[l] : null),
              typeof i == "function" && t.removeEventListener(e, i, a),
              typeof n == "function")
            ) {
              (typeof i != "function" &&
                i !== null &&
                (l in t
                  ? (t[l] = null)
                  : t.hasAttribute(l) && t.removeAttribute(l)),
                t.addEventListener(e, n, a));
              break t;
            }
            l in t
              ? (t[l] = n)
              : n === !0
                ? t.setAttribute(l, "")
                : lu(t, l, n);
          }
    }
  }
  function Wt(t, e, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (yt("error", t), yt("load", t));
        var n = !1,
          a = !1,
          i;
        for (i in l)
          if (l.hasOwnProperty(i)) {
            var o = l[i];
            if (o != null)
              switch (i) {
                case "src":
                  n = !0;
                  break;
                case "srcSet":
                  a = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, e));
                default:
                  xt(t, e, i, o, l, null);
              }
          }
        (a && xt(t, e, "srcSet", l.srcSet, l, null),
          n && xt(t, e, "src", l.src, l, null));
        return;
      case "input":
        yt("invalid", t);
        var d = (i = o = a = null),
          p = null,
          x = null;
        for (n in l)
          if (l.hasOwnProperty(n)) {
            var D = l[n];
            if (D != null)
              switch (n) {
                case "name":
                  a = D;
                  break;
                case "type":
                  o = D;
                  break;
                case "checked":
                  p = D;
                  break;
                case "defaultChecked":
                  x = D;
                  break;
                case "value":
                  i = D;
                  break;
                case "defaultValue":
                  d = D;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (D != null) throw Error(r(137, e));
                  break;
                default:
                  xt(t, e, n, D, l, null);
              }
          }
        (Zs(t, i, d, p, x, o, a, !1), au(t));
        return;
      case "select":
        (yt("invalid", t), (n = o = i = null));
        for (a in l)
          if (l.hasOwnProperty(a) && ((d = l[a]), d != null))
            switch (a) {
              case "value":
                i = d;
                break;
              case "defaultValue":
                o = d;
                break;
              case "multiple":
                n = d;
              default:
                xt(t, e, a, d, l, null);
            }
        ((e = i),
          (l = o),
          (t.multiple = !!n),
          e != null ? sn(t, !!n, e, !1) : l != null && sn(t, !!n, l, !0));
        return;
      case "textarea":
        (yt("invalid", t), (i = a = n = null));
        for (o in l)
          if (l.hasOwnProperty(o) && ((d = l[o]), d != null))
            switch (o) {
              case "value":
                n = d;
                break;
              case "defaultValue":
                a = d;
                break;
              case "children":
                i = d;
                break;
              case "dangerouslySetInnerHTML":
                if (d != null) throw Error(r(91));
                break;
              default:
                xt(t, e, o, d, l, null);
            }
        (Js(t, n, a, i), au(t));
        return;
      case "option":
        for (p in l)
          if (l.hasOwnProperty(p) && ((n = l[p]), n != null))
            switch (p) {
              case "selected":
                t.selected =
                  n && typeof n != "function" && typeof n != "symbol";
                break;
              default:
                xt(t, e, p, n, l, null);
            }
        return;
      case "dialog":
        (yt("beforetoggle", t),
          yt("toggle", t),
          yt("cancel", t),
          yt("close", t));
        break;
      case "iframe":
      case "object":
        yt("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < wa.length; n++) yt(wa[n], t);
        break;
      case "image":
        (yt("error", t), yt("load", t));
        break;
      case "details":
        yt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        (yt("error", t), yt("load", t));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (x in l)
          if (l.hasOwnProperty(x) && ((n = l[x]), n != null))
            switch (x) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                xt(t, e, x, n, l, null);
            }
        return;
      default:
        if (Vi(e)) {
          for (D in l)
            l.hasOwnProperty(D) &&
              ((n = l[D]), n !== void 0 && _r(t, e, D, n, l, void 0));
          return;
        }
    }
    for (d in l)
      l.hasOwnProperty(d) && ((n = l[d]), n != null && xt(t, e, d, n, l, null));
  }
  function tp(t, e, l, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var a = null,
          i = null,
          o = null,
          d = null,
          p = null,
          x = null,
          D = null;
        for (_ in l) {
          var w = l[_];
          if (l.hasOwnProperty(_) && w != null)
            switch (_) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                p = w;
              default:
                n.hasOwnProperty(_) || xt(t, e, _, null, n, w);
            }
        }
        for (var O in n) {
          var _ = n[O];
          if (((w = l[O]), n.hasOwnProperty(O) && (_ != null || w != null)))
            switch (O) {
              case "type":
                i = _;
                break;
              case "name":
                a = _;
                break;
              case "checked":
                x = _;
                break;
              case "defaultChecked":
                D = _;
                break;
              case "value":
                o = _;
                break;
              case "defaultValue":
                d = _;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null) throw Error(r(137, e));
                break;
              default:
                _ !== w && xt(t, e, O, _, n, w);
            }
        }
        Yi(t, o, d, p, x, D, i, a);
        return;
      case "select":
        _ = o = d = O = null;
        for (i in l)
          if (((p = l[i]), l.hasOwnProperty(i) && p != null))
            switch (i) {
              case "value":
                break;
              case "multiple":
                _ = p;
              default:
                n.hasOwnProperty(i) || xt(t, e, i, null, n, p);
            }
        for (a in n)
          if (
            ((i = n[a]),
            (p = l[a]),
            n.hasOwnProperty(a) && (i != null || p != null))
          )
            switch (a) {
              case "value":
                O = i;
                break;
              case "defaultValue":
                d = i;
                break;
              case "multiple":
                o = i;
              default:
                i !== p && xt(t, e, a, i, n, p);
            }
        ((e = d),
          (l = o),
          (n = _),
          O != null
            ? sn(t, !!l, O, !1)
            : !!n != !!l &&
              (e != null ? sn(t, !!l, e, !0) : sn(t, !!l, l ? [] : "", !1)));
        return;
      case "textarea":
        _ = O = null;
        for (d in l)
          if (
            ((a = l[d]),
            l.hasOwnProperty(d) && a != null && !n.hasOwnProperty(d))
          )
            switch (d) {
              case "value":
                break;
              case "children":
                break;
              default:
                xt(t, e, d, null, n, a);
            }
        for (o in n)
          if (
            ((a = n[o]),
            (i = l[o]),
            n.hasOwnProperty(o) && (a != null || i != null))
          )
            switch (o) {
              case "value":
                O = a;
                break;
              case "defaultValue":
                _ = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(r(91));
                break;
              default:
                a !== i && xt(t, e, o, a, n, i);
            }
        Ks(t, O, _);
        return;
      case "option":
        for (var at in l)
          if (
            ((O = l[at]),
            l.hasOwnProperty(at) && O != null && !n.hasOwnProperty(at))
          )
            switch (at) {
              case "selected":
                t.selected = !1;
                break;
              default:
                xt(t, e, at, null, n, O);
            }
        for (p in n)
          if (
            ((O = n[p]),
            (_ = l[p]),
            n.hasOwnProperty(p) && O !== _ && (O != null || _ != null))
          )
            switch (p) {
              case "selected":
                t.selected =
                  O && typeof O != "function" && typeof O != "symbol";
                break;
              default:
                xt(t, e, p, O, n, _);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var et in l)
          ((O = l[et]),
            l.hasOwnProperty(et) &&
              O != null &&
              !n.hasOwnProperty(et) &&
              xt(t, e, et, null, n, O));
        for (x in n)
          if (
            ((O = n[x]),
            (_ = l[x]),
            n.hasOwnProperty(x) && O !== _ && (O != null || _ != null))
          )
            switch (x) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null) throw Error(r(137, e));
                break;
              default:
                xt(t, e, x, O, n, _);
            }
        return;
      default:
        if (Vi(e)) {
          for (var Rt in l)
            ((O = l[Rt]),
              l.hasOwnProperty(Rt) &&
                O !== void 0 &&
                !n.hasOwnProperty(Rt) &&
                _r(t, e, Rt, void 0, n, O));
          for (D in n)
            ((O = n[D]),
              (_ = l[D]),
              !n.hasOwnProperty(D) ||
                O === _ ||
                (O === void 0 && _ === void 0) ||
                _r(t, e, D, O, n, _));
          return;
        }
    }
    for (var T in l)
      ((O = l[T]),
        l.hasOwnProperty(T) &&
          O != null &&
          !n.hasOwnProperty(T) &&
          xt(t, e, T, null, n, O));
    for (w in n)
      ((O = n[w]),
        (_ = l[w]),
        !n.hasOwnProperty(w) ||
          O === _ ||
          (O == null && _ == null) ||
          xt(t, e, w, O, n, _));
  }
  var Nr = null,
    Mr = null;
  function Iu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Fd(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Wd(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function zr(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Dr = null;
  function ep() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === Dr
        ? !1
        : ((Dr = t), !0)
      : ((Dr = null), !1);
  }
  var Pd = typeof setTimeout == "function" ? setTimeout : void 0,
    lp = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Id = typeof Promise == "function" ? Promise : void 0,
    np =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Id < "u"
          ? function (t) {
              return Id.resolve(null).then(t).catch(ap);
            }
          : Pd;
  function ap(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Rl(t) {
    return t === "head";
  }
  function th(t, e) {
    var l = e,
      n = 0,
      a = 0;
    do {
      var i = l.nextSibling;
      if ((t.removeChild(l), i && i.nodeType === 8))
        if (((l = i.data), l === "/$")) {
          if (0 < n && 8 > n) {
            l = n;
            var o = t.ownerDocument;
            if ((l & 1 && ja(o.documentElement), l & 2 && ja(o.body), l & 4))
              for (l = o.head, ja(l), o = l.firstChild; o; ) {
                var d = o.nextSibling,
                  p = o.nodeName;
                (o[Fn] ||
                  p === "SCRIPT" ||
                  p === "STYLE" ||
                  (p === "LINK" && o.rel.toLowerCase() === "stylesheet") ||
                  l.removeChild(o),
                  (o = d));
              }
          }
          if (a === 0) {
            (t.removeChild(i), Va(e));
            return;
          }
          a--;
        } else
          l === "$" || l === "$?" || l === "$!"
            ? a++
            : (n = l.charCodeAt(0) - 48);
      else n = 0;
      l = i;
    } while (l);
    Va(e);
  }
  function Cr(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (((e = e.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Cr(l), Hi(l));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function up(t, e, l, n) {
    for (; t.nodeType === 1; ) {
      var a = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!n && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (n) {
        if (!t[Fn])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((i = t.getAttribute("rel")),
                i === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                i !== a.rel ||
                t.getAttribute("href") !==
                  (a.href == null || a.href === "" ? null : a.href) ||
                t.getAttribute("crossorigin") !==
                  (a.crossOrigin == null ? null : a.crossOrigin) ||
                t.getAttribute("title") !== (a.title == null ? null : a.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((i = t.getAttribute("src")),
                (i !== (a.src == null ? null : a.src) ||
                  t.getAttribute("type") !== (a.type == null ? null : a.type) ||
                  t.getAttribute("crossorigin") !==
                    (a.crossOrigin == null ? null : a.crossOrigin)) &&
                  i &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var i = a.name == null ? null : "" + a.name;
        if (a.type === "hidden" && t.getAttribute("name") === i) return t;
      } else return t;
      if (((t = we(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function ip(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !l) ||
        ((t = we(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function wr(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState === "complete")
    );
  }
  function cp(t, e) {
    var l = t.ownerDocument;
    if (t.data !== "$?" || l.readyState === "complete") e();
    else {
      var n = function () {
        (e(), l.removeEventListener("DOMContentLoaded", n));
      };
      (l.addEventListener("DOMContentLoaded", n), (t._reactRetry = n));
    }
  }
  function we(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
        )
          break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  var Ur = null;
  function eh(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (e === 0) return t;
          e--;
        } else l === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function lh(t, e, l) {
    switch (((e = Iu(l)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(r(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(r(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function ja(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Hi(t);
  }
  var ze = new Map(),
    nh = new Set();
  function ti(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var nl = L.d;
  L.d = { f: rp, r: sp, D: op, C: fp, L: dp, m: hp, X: yp, S: mp, M: pp };
  function rp() {
    var t = nl.f(),
      e = Zu();
    return t || e;
  }
  function sp(t) {
    var e = an(t);
    e !== null && e.tag === 5 && e.type === "form" ? Af(e) : nl.r(t);
  }
  var Ln = typeof document > "u" ? null : document;
  function ah(t, e, l) {
    var n = Ln;
    if (n && typeof e == "string" && e) {
      var a = Ae(e);
      ((a = 'link[rel="' + t + '"][href="' + a + '"]'),
        typeof l == "string" && (a += '[crossorigin="' + l + '"]'),
        nh.has(a) ||
          (nh.add(a),
          (t = { rel: t, crossOrigin: l, href: e }),
          n.querySelector(a) === null &&
            ((e = n.createElement("link")),
            Wt(e, "link", t),
            Qt(e),
            n.head.appendChild(e))));
    }
  }
  function op(t) {
    (nl.D(t), ah("dns-prefetch", t, null));
  }
  function fp(t, e) {
    (nl.C(t, e), ah("preconnect", t, e));
  }
  function dp(t, e, l) {
    nl.L(t, e, l);
    var n = Ln;
    if (n && t && e) {
      var a = 'link[rel="preload"][as="' + Ae(e) + '"]';
      e === "image" && l && l.imageSrcSet
        ? ((a += '[imagesrcset="' + Ae(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (a += '[imagesizes="' + Ae(l.imageSizes) + '"]'))
        : (a += '[href="' + Ae(t) + '"]');
      var i = a;
      switch (e) {
        case "style":
          i = Gn(t);
          break;
        case "script":
          i = Yn(t);
      }
      ze.has(i) ||
        ((t = E(
          {
            rel: "preload",
            href: e === "image" && l && l.imageSrcSet ? void 0 : t,
            as: e,
          },
          l,
        )),
        ze.set(i, t),
        n.querySelector(a) !== null ||
          (e === "style" && n.querySelector(Ba(i))) ||
          (e === "script" && n.querySelector(Ha(i))) ||
          ((e = n.createElement("link")),
          Wt(e, "link", t),
          Qt(e),
          n.head.appendChild(e)));
    }
  }
  function hp(t, e) {
    nl.m(t, e);
    var l = Ln;
    if (l && t) {
      var n = e && typeof e.as == "string" ? e.as : "script",
        a =
          'link[rel="modulepreload"][as="' + Ae(n) + '"][href="' + Ae(t) + '"]',
        i = a;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = Yn(t);
      }
      if (
        !ze.has(i) &&
        ((t = E({ rel: "modulepreload", href: t }, e)),
        ze.set(i, t),
        l.querySelector(a) === null)
      ) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Ha(i))) return;
        }
        ((n = l.createElement("link")),
          Wt(n, "link", t),
          Qt(n),
          l.head.appendChild(n));
      }
    }
  }
  function mp(t, e, l) {
    nl.S(t, e, l);
    var n = Ln;
    if (n && t) {
      var a = un(n).hoistableStyles,
        i = Gn(t);
      e = e || "default";
      var o = a.get(i);
      if (!o) {
        var d = { loading: 0, preload: null };
        if ((o = n.querySelector(Ba(i)))) d.loading = 5;
        else {
          ((t = E({ rel: "stylesheet", href: t, "data-precedence": e }, l)),
            (l = ze.get(i)) && jr(t, l));
          var p = (o = n.createElement("link"));
          (Qt(p),
            Wt(p, "link", t),
            (p._p = new Promise(function (x, D) {
              ((p.onload = x), (p.onerror = D));
            })),
            p.addEventListener("load", function () {
              d.loading |= 1;
            }),
            p.addEventListener("error", function () {
              d.loading |= 2;
            }),
            (d.loading |= 4),
            ei(o, e, n));
        }
        ((o = { type: "stylesheet", instance: o, count: 1, state: d }),
          a.set(i, o));
      }
    }
  }
  function yp(t, e) {
    nl.X(t, e);
    var l = Ln;
    if (l && t) {
      var n = un(l).hoistableScripts,
        a = Yn(t),
        i = n.get(a);
      i ||
        ((i = l.querySelector(Ha(a))),
        i ||
          ((t = E({ src: t, async: !0 }, e)),
          (e = ze.get(a)) && Br(t, e),
          (i = l.createElement("script")),
          Qt(i),
          Wt(i, "link", t),
          l.head.appendChild(i)),
        (i = { type: "script", instance: i, count: 1, state: null }),
        n.set(a, i));
    }
  }
  function pp(t, e) {
    nl.M(t, e);
    var l = Ln;
    if (l && t) {
      var n = un(l).hoistableScripts,
        a = Yn(t),
        i = n.get(a);
      i ||
        ((i = l.querySelector(Ha(a))),
        i ||
          ((t = E({ src: t, async: !0, type: "module" }, e)),
          (e = ze.get(a)) && Br(t, e),
          (i = l.createElement("script")),
          Qt(i),
          Wt(i, "link", t),
          l.head.appendChild(i)),
        (i = { type: "script", instance: i, count: 1, state: null }),
        n.set(a, i));
    }
  }
  function uh(t, e, l, n) {
    var a = (a = nt.current) ? ti(a) : null;
    if (!a) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((e = Gn(l.href)),
            (l = un(a).hoistableStyles),
            (n = l.get(e)),
            n ||
              ((n = { type: "style", instance: null, count: 0, state: null }),
              l.set(e, n)),
            n)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          t = Gn(l.href);
          var i = un(a).hoistableStyles,
            o = i.get(t);
          if (
            (o ||
              ((a = a.ownerDocument || a),
              (o = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              i.set(t, o),
              (i = a.querySelector(Ba(t))) &&
                !i._p &&
                ((o.instance = i), (o.state.loading = 5)),
              ze.has(t) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                ze.set(t, l),
                i || gp(a, t, l, o.state))),
            e && n === null)
          )
            throw Error(r(528, ""));
          return o;
        }
        if (e && n !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (e = l.async),
          (l = l.src),
          typeof l == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = Yn(l)),
              (l = un(a).hoistableScripts),
              (n = l.get(e)),
              n ||
                ((n = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(e, n)),
              n)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, t));
    }
  }
  function Gn(t) {
    return 'href="' + Ae(t) + '"';
  }
  function Ba(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function ih(t) {
    return E({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function gp(t, e, l, n) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (n.loading = 1)
      : ((e = t.createElement("link")),
        (n.preload = e),
        e.addEventListener("load", function () {
          return (n.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (n.loading |= 2);
        }),
        Wt(e, "link", l),
        Qt(e),
        t.head.appendChild(e));
  }
  function Yn(t) {
    return '[src="' + Ae(t) + '"]';
  }
  function Ha(t) {
    return "script[async]" + t;
  }
  function ch(t, e, l) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var n = t.querySelector('style[data-href~="' + Ae(l.href) + '"]');
          if (n) return ((e.instance = n), Qt(n), n);
          var a = E({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (n = (t.ownerDocument || t).createElement("style")),
            Qt(n),
            Wt(n, "style", a),
            ei(n, l.precedence, t),
            (e.instance = n)
          );
        case "stylesheet":
          a = Gn(l.href);
          var i = t.querySelector(Ba(a));
          if (i) return ((e.state.loading |= 4), (e.instance = i), Qt(i), i);
          ((n = ih(l)),
            (a = ze.get(a)) && jr(n, a),
            (i = (t.ownerDocument || t).createElement("link")),
            Qt(i));
          var o = i;
          return (
            (o._p = new Promise(function (d, p) {
              ((o.onload = d), (o.onerror = p));
            })),
            Wt(i, "link", n),
            (e.state.loading |= 4),
            ei(i, l.precedence, t),
            (e.instance = i)
          );
        case "script":
          return (
            (i = Yn(l.src)),
            (a = t.querySelector(Ha(i)))
              ? ((e.instance = a), Qt(a), a)
              : ((n = l),
                (a = ze.get(i)) && ((n = E({}, l)), Br(n, a)),
                (t = t.ownerDocument || t),
                (a = t.createElement("script")),
                Qt(a),
                Wt(a, "link", n),
                t.head.appendChild(a),
                (e.instance = a))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((n = e.instance), (e.state.loading |= 4), ei(n, l.precedence, t));
    return e.instance;
  }
  function ei(t, e, l) {
    for (
      var n = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        a = n.length ? n[n.length - 1] : null,
        i = a,
        o = 0;
      o < n.length;
      o++
    ) {
      var d = n[o];
      if (d.dataset.precedence === e) i = d;
      else if (i !== a) break;
    }
    i
      ? i.parentNode.insertBefore(t, i.nextSibling)
      : ((e = l.nodeType === 9 ? l.head : l), e.insertBefore(t, e.firstChild));
  }
  function jr(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function Br(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var li = null;
  function rh(t, e, l) {
    if (li === null) {
      var n = new Map(),
        a = (li = new Map());
      a.set(l, n);
    } else ((a = li), (n = a.get(l)), n || ((n = new Map()), a.set(l, n)));
    if (n.has(t)) return n;
    for (
      n.set(t, null), l = l.getElementsByTagName(t), a = 0;
      a < l.length;
      a++
    ) {
      var i = l[a];
      if (
        !(
          i[Fn] ||
          i[te] ||
          (t === "link" && i.getAttribute("rel") === "stylesheet")
        ) &&
        i.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var o = i.getAttribute(e) || "";
        o = t + o;
        var d = n.get(o);
        d ? d.push(i) : n.set(o, [i]);
      }
    }
    return n;
  }
  function sh(t, e, l) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(
        l,
        e === "title" ? t.querySelector("head > title") : null,
      ));
  }
  function vp(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled),
              typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function oh(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var qa = null;
  function bp() {}
  function Sp(t, e, l) {
    if (qa === null) throw Error(r(475));
    var n = qa;
    if (
      e.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var a = Gn(l.href),
          i = t.querySelector(Ba(a));
        if (i) {
          ((t = i._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (n.count++, (n = ni.bind(n)), t.then(n, n)),
            (e.state.loading |= 4),
            (e.instance = i),
            Qt(i));
          return;
        }
        ((i = t.ownerDocument || t),
          (l = ih(l)),
          (a = ze.get(a)) && jr(l, a),
          (i = i.createElement("link")),
          Qt(i));
        var o = i;
        ((o._p = new Promise(function (d, p) {
          ((o.onload = d), (o.onerror = p));
        })),
          Wt(i, "link", l),
          (e.instance = i));
      }
      (n.stylesheets === null && (n.stylesheets = new Map()),
        n.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (n.count++,
          (e = ni.bind(n)),
          t.addEventListener("load", e),
          t.addEventListener("error", e)));
    }
  }
  function Ep() {
    if (qa === null) throw Error(r(475));
    var t = qa;
    return (
      t.stylesheets && t.count === 0 && Hr(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var l = setTimeout(function () {
              if ((t.stylesheets && Hr(t, t.stylesheets), t.unsuspend)) {
                var n = t.unsuspend;
                ((t.unsuspend = null), n());
              }
            }, 6e4);
            return (
              (t.unsuspend = e),
              function () {
                ((t.unsuspend = null), clearTimeout(l));
              }
            );
          }
        : null
    );
  }
  function ni() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Hr(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var ai = null;
  function Hr(t, e) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (ai = new Map()),
        e.forEach(Tp, t),
        (ai = null),
        ni.call(t)));
  }
  function Tp(t, e) {
    if (!(e.state.loading & 4)) {
      var l = ai.get(t);
      if (l) var n = l.get(null);
      else {
        ((l = new Map()), ai.set(t, l));
        for (
          var a = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            i = 0;
          i < a.length;
          i++
        ) {
          var o = a[i];
          (o.nodeName === "LINK" || o.getAttribute("media") !== "not all") &&
            (l.set(o.dataset.precedence, o), (n = o));
        }
        n && l.set(null, n);
      }
      ((a = e.instance),
        (o = a.getAttribute("data-precedence")),
        (i = l.get(o) || n),
        i === n && l.set(null, a),
        l.set(o, a),
        this.count++,
        (n = ni.bind(this)),
        a.addEventListener("load", n),
        a.addEventListener("error", n),
        i
          ? i.parentNode.insertBefore(a, i.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(a, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var La = {
    $$typeof: tt,
    Provider: null,
    Consumer: null,
    _currentValue: K,
    _currentValue2: K,
    _threadCount: 0,
  };
  function Ap(t, e, l, n, a, i, o, d) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = wi(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = wi(0)),
      (this.hiddenUpdates = wi(null)),
      (this.identifierPrefix = n),
      (this.onUncaughtError = a),
      (this.onCaughtError = i),
      (this.onRecoverableError = o),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = d),
      (this.incompleteTransitions = new Map()));
  }
  function fh(t, e, l, n, a, i, o, d, p, x, D, w) {
    return (
      (t = new Ap(t, e, l, o, d, p, x, w)),
      (e = 1),
      i === !0 && (e |= 24),
      (i = ye(3, null, null, e)),
      (t.current = i),
      (i.stateNode = t),
      (e = vc()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (i.memoizedState = { element: n, isDehydrated: l, cache: e }),
      Tc(i),
      t
    );
  }
  function dh(t) {
    return t ? ((t = vn), t) : vn;
  }
  function hh(t, e, l, n, a, i) {
    ((a = dh(a)),
      n.context === null ? (n.context = a) : (n.pendingContext = a),
      (n = dl(e)),
      (n.payload = { element: l }),
      (i = i === void 0 ? null : i),
      i !== null && (n.callback = i),
      (l = hl(t, n, e)),
      l !== null && (Se(l, t, e), ya(l, t, e)));
  }
  function mh(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function qr(t, e) {
    (mh(t, e), (t = t.alternate) && mh(t, e));
  }
  function yh(t) {
    if (t.tag === 13) {
      var e = gn(t, 67108864);
      (e !== null && Se(e, t, 67108864), qr(t, 67108864));
    }
  }
  var ui = !0;
  function xp(t, e, l, n) {
    var a = R.T;
    R.T = null;
    var i = L.p;
    try {
      ((L.p = 2), Lr(t, e, l, n));
    } finally {
      ((L.p = i), (R.T = a));
    }
  }
  function Rp(t, e, l, n) {
    var a = R.T;
    R.T = null;
    var i = L.p;
    try {
      ((L.p = 8), Lr(t, e, l, n));
    } finally {
      ((L.p = i), (R.T = a));
    }
  }
  function Lr(t, e, l, n) {
    if (ui) {
      var a = Gr(n);
      if (a === null) (Or(t, e, n, ii, l), gh(t, n));
      else if (_p(a, t, e, l, n)) n.stopPropagation();
      else if ((gh(t, n), e & 4 && -1 < Op.indexOf(t))) {
        for (; a !== null; ) {
          var i = an(a);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (((i = i.stateNode), i.current.memoizedState.isDehydrated)) {
                  var o = Ul(i.pendingLanes);
                  if (o !== 0) {
                    var d = i;
                    for (d.pendingLanes |= 2, d.entangledLanes |= 2; o; ) {
                      var p = 1 << (31 - he(o));
                      ((d.entanglements[1] |= p), (o &= ~p));
                    }
                    (Ge(i), (St & 6) === 0 && ((Vu = je() + 500), Ca(0)));
                  }
                }
                break;
              case 13:
                ((d = gn(i, 2)), d !== null && Se(d, i, 2), Zu(), qr(i, 2));
            }
          if (((i = Gr(n)), i === null && Or(t, e, n, ii, l), i === a)) break;
          a = i;
        }
        a !== null && n.stopPropagation();
      } else Or(t, e, n, null, l);
    }
  }
  function Gr(t) {
    return ((t = Zi(t)), Yr(t));
  }
  var ii = null;
  function Yr(t) {
    if (((ii = null), (t = nn(t)), t !== null)) {
      var e = m(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (((t = h(e)), t !== null)) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ((ii = t), null);
  }
  function ph(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (fy()) {
          case Ns:
            return 2;
          case Ms:
            return 8;
          case Pa:
          case dy:
            return 32;
          case zs:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Xr = !1,
    Ol = null,
    _l = null,
    Nl = null,
    Ga = new Map(),
    Ya = new Map(),
    Ml = [],
    Op =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function gh(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Ol = null;
        break;
      case "dragenter":
      case "dragleave":
        _l = null;
        break;
      case "mouseover":
      case "mouseout":
        Nl = null;
        break;
      case "pointerover":
      case "pointerout":
        Ga.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ya.delete(e.pointerId);
    }
  }
  function Xa(t, e, l, n, a, i) {
    return t === null || t.nativeEvent !== i
      ? ((t = {
          blockedOn: e,
          domEventName: l,
          eventSystemFlags: n,
          nativeEvent: i,
          targetContainers: [a],
        }),
        e !== null && ((e = an(e)), e !== null && yh(e)),
        t)
      : ((t.eventSystemFlags |= n),
        (e = t.targetContainers),
        a !== null && e.indexOf(a) === -1 && e.push(a),
        t);
  }
  function _p(t, e, l, n, a) {
    switch (e) {
      case "focusin":
        return ((Ol = Xa(Ol, t, e, l, n, a)), !0);
      case "dragenter":
        return ((_l = Xa(_l, t, e, l, n, a)), !0);
      case "mouseover":
        return ((Nl = Xa(Nl, t, e, l, n, a)), !0);
      case "pointerover":
        var i = a.pointerId;
        return (Ga.set(i, Xa(Ga.get(i) || null, t, e, l, n, a)), !0);
      case "gotpointercapture":
        return (
          (i = a.pointerId),
          Ya.set(i, Xa(Ya.get(i) || null, t, e, l, n, a)),
          !0
        );
    }
    return !1;
  }
  function vh(t) {
    var e = nn(t.target);
    if (e !== null) {
      var l = m(e);
      if (l !== null) {
        if (((e = l.tag), e === 13)) {
          if (((e = h(l)), e !== null)) {
            ((t.blockedOn = e),
              Sy(t.priority, function () {
                if (l.tag === 13) {
                  var n = be();
                  n = Ui(n);
                  var a = gn(l, n);
                  (a !== null && Se(a, l, n), qr(l, n));
                }
              }));
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function ci(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = Gr(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var n = new l.constructor(l.type, l);
        ((Qi = n), l.target.dispatchEvent(n), (Qi = null));
      } else return ((e = an(l)), e !== null && yh(e), (t.blockedOn = l), !1);
      e.shift();
    }
    return !0;
  }
  function bh(t, e, l) {
    ci(t) && l.delete(e);
  }
  function Np() {
    ((Xr = !1),
      Ol !== null && ci(Ol) && (Ol = null),
      _l !== null && ci(_l) && (_l = null),
      Nl !== null && ci(Nl) && (Nl = null),
      Ga.forEach(bh),
      Ya.forEach(bh));
  }
  function ri(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      Xr ||
        ((Xr = !0),
        u.unstable_scheduleCallback(u.unstable_NormalPriority, Np)));
  }
  var si = null;
  function Sh(t) {
    si !== t &&
      ((si = t),
      u.unstable_scheduleCallback(u.unstable_NormalPriority, function () {
        si === t && (si = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e],
            n = t[e + 1],
            a = t[e + 2];
          if (typeof n != "function") {
            if (Yr(n || l) === null) continue;
            break;
          }
          var i = an(l);
          i !== null &&
            (t.splice(e, 3),
            (e -= 3),
            Yc(i, { pending: !0, data: a, method: l.method, action: n }, n, a));
        }
      }));
  }
  function Va(t) {
    function e(p) {
      return ri(p, t);
    }
    (Ol !== null && ri(Ol, t),
      _l !== null && ri(_l, t),
      Nl !== null && ri(Nl, t),
      Ga.forEach(e),
      Ya.forEach(e));
    for (var l = 0; l < Ml.length; l++) {
      var n = Ml[l];
      n.blockedOn === t && (n.blockedOn = null);
    }
    for (; 0 < Ml.length && ((l = Ml[0]), l.blockedOn === null); )
      (vh(l), l.blockedOn === null && Ml.shift());
    if (((l = (t.ownerDocument || t).$$reactFormReplay), l != null))
      for (n = 0; n < l.length; n += 3) {
        var a = l[n],
          i = l[n + 1],
          o = a[ie] || null;
        if (typeof i == "function") o || Sh(l);
        else if (o) {
          var d = null;
          if (i && i.hasAttribute("formAction")) {
            if (((a = i), (o = i[ie] || null))) d = o.formAction;
            else if (Yr(a) !== null) continue;
          } else d = o.action;
          (typeof d == "function" ? (l[n + 1] = d) : (l.splice(n, 3), (n -= 3)),
            Sh(l));
        }
      }
  }
  function Vr(t) {
    this._internalRoot = t;
  }
  ((oi.prototype.render = Vr.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(r(409));
      var l = e.current,
        n = be();
      hh(l, n, t, e, null, null);
    }),
    (oi.prototype.unmount = Vr.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (hh(t.current, 2, null, t, null, null), Zu(), (e[ln] = null));
        }
      }));
  function oi(t) {
    this._internalRoot = t;
  }
  oi.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = js();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < Ml.length && e !== 0 && e < Ml[l].priority; l++);
      (Ml.splice(l, 0, t), l === 0 && vh(t));
    }
  };
  var Eh = c.version;
  if (Eh !== "19.1.0") throw Error(r(527, Eh, "19.1.0"));
  L.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(r(188))
        : ((t = Object.keys(t).join(",")), Error(r(268, t)));
    return (
      (t = b(e)),
      (t = t !== null ? y(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var Mp = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: R,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var fi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!fi.isDisabled && fi.supportsFiber)
      try {
        ((Jn = fi.inject(Mp)), (de = fi));
      } catch {}
  }
  return (
    (Za.createRoot = function (t, e) {
      if (!f(t)) throw Error(r(299));
      var l = !1,
        n = "",
        a = Hf,
        i = qf,
        o = Lf,
        d = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (l = !0),
          e.identifierPrefix !== void 0 && (n = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (a = e.onUncaughtError),
          e.onCaughtError !== void 0 && (i = e.onCaughtError),
          e.onRecoverableError !== void 0 && (o = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (d = e.unstable_transitionCallbacks)),
        (e = fh(t, 1, !1, null, null, l, n, a, i, o, d, null)),
        (t[ln] = e.current),
        Rr(t),
        new Vr(e)
      );
    }),
    (Za.hydrateRoot = function (t, e, l) {
      if (!f(t)) throw Error(r(299));
      var n = !1,
        a = "",
        i = Hf,
        o = qf,
        d = Lf,
        p = null,
        x = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (n = !0),
          l.identifierPrefix !== void 0 && (a = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (i = l.onUncaughtError),
          l.onCaughtError !== void 0 && (o = l.onCaughtError),
          l.onRecoverableError !== void 0 && (d = l.onRecoverableError),
          l.unstable_transitionCallbacks !== void 0 &&
            (p = l.unstable_transitionCallbacks),
          l.formState !== void 0 && (x = l.formState)),
        (e = fh(t, 1, !0, e, l ?? null, n, a, i, o, d, p, x)),
        (e.context = dh(null)),
        (l = e.current),
        (n = be()),
        (n = Ui(n)),
        (a = dl(n)),
        (a.callback = null),
        hl(l, a, n),
        (l = n),
        (e.current.lanes = l),
        $n(e, l),
        Ge(e),
        (t[ln] = e.current),
        Rr(t),
        new oi(e)
      );
    }),
    (Za.version = "19.1.0"),
    Za
  );
}
var Dh;
function Gp() {
  if (Dh) return Kr.exports;
  Dh = 1;
  function u() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (c) {
        console.error(c);
      }
  }
  return (u(), (Kr.exports = Lp()), Kr.exports);
}
var Yp = Gp();
const Xp = lm(Yp);
/**
 * @license lucide-react v0.486.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vp = (u) => u.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Qp = (u) =>
    u.replace(/^([A-Z])|[\s-_]+(\w)/g, (c, s, r) =>
      r ? r.toUpperCase() : s.toLowerCase(),
    ),
  Ch = (u) => {
    const c = Qp(u);
    return c.charAt(0).toUpperCase() + c.slice(1);
  },
  am = (...u) =>
    u
      .filter((c, s, r) => !!c && c.trim() !== "" && r.indexOf(c) === s)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.486.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Zp = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.486.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kp = V.forwardRef(
  (
    {
      color: u = "currentColor",
      size: c = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: r,
      className: f = "",
      children: m,
      iconNode: h,
      ...v
    },
    b,
  ) =>
    V.createElement(
      "svg",
      {
        ref: b,
        ...Zp,
        width: c,
        height: c,
        stroke: u,
        strokeWidth: r ? (Number(s) * 24) / Number(c) : s,
        className: am("lucide", f),
        ...v,
      },
      [
        ...h.map(([y, E]) => V.createElement(y, E)),
        ...(Array.isArray(m) ? m : [m]),
      ],
    ),
);
/**
 * @license lucide-react v0.486.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jp = (u, c) => {
  const s = V.forwardRef(({ className: r, ...f }, m) =>
    V.createElement(Kp, {
      ref: m,
      iconNode: c,
      className: am(`lucide-${Vp(Ch(u))}`, `lucide-${u}`, r),
      ...f,
    }),
  );
  return ((s.displayName = Ch(u)), s);
};
/**
 * @license lucide-react v0.486.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kp = [
    ["path", { d: "M12 7v14", key: "1akyts" }],
    [
      "path",
      {
        d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
        key: "ruj8y",
      },
    ],
  ],
  wh = Jp("book-open", kp);
function Uh(u, c) {
  if (typeof u == "function") return u(c);
  u != null && (u.current = c);
}
function um(...u) {
  return (c) => {
    let s = !1;
    const r = u.map((f) => {
      const m = Uh(f, c);
      return (!s && typeof m == "function" && (s = !0), m);
    });
    if (s)
      return () => {
        for (let f = 0; f < r.length; f++) {
          const m = r[f];
          typeof m == "function" ? m() : Uh(u[f], null);
        }
      };
  };
}
function pi(...u) {
  return V.useCallback(um(...u), u);
}
var gi = V.forwardRef((u, c) => {
  const { children: s, ...r } = u,
    f = V.Children.toArray(s),
    m = f.find(Fp);
  if (m) {
    const h = m.props.children,
      v = f.map((b) =>
        b === m
          ? V.Children.count(h) > 1
            ? V.Children.only(null)
            : V.isValidElement(h)
              ? h.props.children
              : null
          : b,
      );
    return U.jsx(us, {
      ...r,
      ref: c,
      children: V.isValidElement(h) ? V.cloneElement(h, void 0, v) : null,
    });
  }
  return U.jsx(us, { ...r, ref: c, children: s });
});
gi.displayName = "Slot";
var us = V.forwardRef((u, c) => {
  const { children: s, ...r } = u;
  if (V.isValidElement(s)) {
    const f = Pp(s),
      m = Wp(r, s.props);
    return (
      s.type !== V.Fragment && (m.ref = c ? um(c, f) : f),
      V.cloneElement(s, m)
    );
  }
  return V.Children.count(s) > 1 ? V.Children.only(null) : null;
});
us.displayName = "SlotClone";
var $p = ({ children: u }) => U.jsx(U.Fragment, { children: u });
function Fp(u) {
  return V.isValidElement(u) && u.type === $p;
}
function Wp(u, c) {
  const s = { ...c };
  for (const r in c) {
    const f = u[r],
      m = c[r];
    /^on[A-Z]/.test(r)
      ? f && m
        ? (s[r] = (...v) => {
            (m(...v), f(...v));
          })
        : f && (s[r] = f)
      : r === "style"
        ? (s[r] = { ...f, ...m })
        : r === "className" && (s[r] = [f, m].filter(Boolean).join(" "));
  }
  return { ...u, ...s };
}
function Pp(u) {
  var r, f;
  let c =
      (r = Object.getOwnPropertyDescriptor(u.props, "ref")) == null
        ? void 0
        : r.get,
    s = c && "isReactWarning" in c && c.isReactWarning;
  return s
    ? u.ref
    : ((c =
        (f = Object.getOwnPropertyDescriptor(u, "ref")) == null
          ? void 0
          : f.get),
      (s = c && "isReactWarning" in c && c.isReactWarning),
      s ? u.props.ref : u.props.ref || u.ref);
}
function im(u) {
  var c,
    s,
    r = "";
  if (typeof u == "string" || typeof u == "number") r += u;
  else if (typeof u == "object")
    if (Array.isArray(u)) {
      var f = u.length;
      for (c = 0; c < f; c++)
        u[c] && (s = im(u[c])) && (r && (r += " "), (r += s));
    } else for (s in u) u[s] && (r && (r += " "), (r += s));
  return r;
}
function Ip() {
  for (var u, c, s = 0, r = "", f = arguments.length; s < f; s++)
    (u = arguments[s]) && (c = im(u)) && (r && (r += " "), (r += c));
  return r;
}
const vs = "-",
  tg = (u) => {
    const c = lg(u),
      { conflictingClassGroups: s, conflictingClassGroupModifiers: r } = u;
    return {
      getClassGroupId: (h) => {
        const v = h.split(vs);
        return (v[0] === "" && v.length !== 1 && v.shift(), cm(v, c) || eg(h));
      },
      getConflictingClassGroupIds: (h, v) => {
        const b = s[h] || [];
        return v && r[h] ? [...b, ...r[h]] : b;
      },
    };
  },
  cm = (u, c) => {
    var h;
    if (u.length === 0) return c.classGroupId;
    const s = u[0],
      r = c.nextPart.get(s),
      f = r ? cm(u.slice(1), r) : void 0;
    if (f) return f;
    if (c.validators.length === 0) return;
    const m = u.join(vs);
    return (h = c.validators.find(({ validator: v }) => v(m))) == null
      ? void 0
      : h.classGroupId;
  },
  jh = /^\[(.+)\]$/,
  eg = (u) => {
    if (jh.test(u)) {
      const c = jh.exec(u)[1],
        s = c == null ? void 0 : c.substring(0, c.indexOf(":"));
      if (s) return "arbitrary.." + s;
    }
  },
  lg = (u) => {
    const { theme: c, classGroups: s } = u,
      r = { nextPart: new Map(), validators: [] };
    for (const f in s) is(s[f], r, f, c);
    return r;
  },
  is = (u, c, s, r) => {
    u.forEach((f) => {
      if (typeof f == "string") {
        const m = f === "" ? c : Bh(c, f);
        m.classGroupId = s;
        return;
      }
      if (typeof f == "function") {
        if (ng(f)) {
          is(f(r), c, s, r);
          return;
        }
        c.validators.push({ validator: f, classGroupId: s });
        return;
      }
      Object.entries(f).forEach(([m, h]) => {
        is(h, Bh(c, m), s, r);
      });
    });
  },
  Bh = (u, c) => {
    let s = u;
    return (
      c.split(vs).forEach((r) => {
        (s.nextPart.has(r) ||
          s.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (s = s.nextPart.get(r)));
      }),
      s
    );
  },
  ng = (u) => u.isThemeGetter,
  ag = (u) => {
    if (u < 1) return { get: () => {}, set: () => {} };
    let c = 0,
      s = new Map(),
      r = new Map();
    const f = (m, h) => {
      (s.set(m, h), c++, c > u && ((c = 0), (r = s), (s = new Map())));
    };
    return {
      get(m) {
        let h = s.get(m);
        if (h !== void 0) return h;
        if ((h = r.get(m)) !== void 0) return (f(m, h), h);
      },
      set(m, h) {
        s.has(m) ? s.set(m, h) : f(m, h);
      },
    };
  },
  cs = "!",
  rs = ":",
  ug = rs.length,
  ig = (u) => {
    const { prefix: c, experimentalParseClassName: s } = u;
    let r = (f) => {
      const m = [];
      let h = 0,
        v = 0,
        b = 0,
        y;
      for (let z = 0; z < f.length; z++) {
        let H = f[z];
        if (h === 0 && v === 0) {
          if (H === rs) {
            (m.push(f.slice(b, z)), (b = z + ug));
            continue;
          }
          if (H === "/") {
            y = z;
            continue;
          }
        }
        H === "[" ? h++ : H === "]" ? h-- : H === "(" ? v++ : H === ")" && v--;
      }
      const E = m.length === 0 ? f : f.substring(b),
        N = cg(E),
        B = N !== E,
        Y = y && y > b ? y - b : void 0;
      return {
        modifiers: m,
        hasImportantModifier: B,
        baseClassName: N,
        maybePostfixModifierPosition: Y,
      };
    };
    if (c) {
      const f = c + rs,
        m = r;
      r = (h) =>
        h.startsWith(f)
          ? m(h.substring(f.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: h,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (s) {
      const f = r;
      r = (m) => s({ className: m, parseClassName: f });
    }
    return r;
  },
  cg = (u) =>
    u.endsWith(cs)
      ? u.substring(0, u.length - 1)
      : u.startsWith(cs)
        ? u.substring(1)
        : u,
  rg = (u) => {
    const c = Object.fromEntries(u.orderSensitiveModifiers.map((r) => [r, !0]));
    return (r) => {
      if (r.length <= 1) return r;
      const f = [];
      let m = [];
      return (
        r.forEach((h) => {
          h[0] === "[" || c[h] ? (f.push(...m.sort(), h), (m = [])) : m.push(h);
        }),
        f.push(...m.sort()),
        f
      );
    };
  },
  sg = (u) => ({
    cache: ag(u.cacheSize),
    parseClassName: ig(u),
    sortModifiers: rg(u),
    ...tg(u),
  }),
  og = /\s+/,
  fg = (u, c) => {
    const {
        parseClassName: s,
        getClassGroupId: r,
        getConflictingClassGroupIds: f,
        sortModifiers: m,
      } = c,
      h = [],
      v = u.trim().split(og);
    let b = "";
    for (let y = v.length - 1; y >= 0; y -= 1) {
      const E = v[y],
        {
          isExternal: N,
          modifiers: B,
          hasImportantModifier: Y,
          baseClassName: z,
          maybePostfixModifierPosition: H,
        } = s(E);
      if (N) {
        b = E + (b.length > 0 ? " " + b : b);
        continue;
      }
      let q = !!H,
        k = r(q ? z.substring(0, H) : z);
      if (!k) {
        if (!q) {
          b = E + (b.length > 0 ? " " + b : b);
          continue;
        }
        if (((k = r(z)), !k)) {
          b = E + (b.length > 0 ? " " + b : b);
          continue;
        }
        q = !1;
      }
      const P = m(B).join(":"),
        tt = Y ? P + cs : P,
        ft = tt + k;
      if (h.includes(ft)) continue;
      h.push(ft);
      const Z = f(k, q);
      for (let X = 0; X < Z.length; ++X) {
        const st = Z[X];
        h.push(tt + st);
      }
      b = E + (b.length > 0 ? " " + b : b);
    }
    return b;
  };
function dg() {
  let u = 0,
    c,
    s,
    r = "";
  for (; u < arguments.length; )
    (c = arguments[u++]) && (s = rm(c)) && (r && (r += " "), (r += s));
  return r;
}
const rm = (u) => {
  if (typeof u == "string") return u;
  let c,
    s = "";
  for (let r = 0; r < u.length; r++)
    u[r] && (c = rm(u[r])) && (s && (s += " "), (s += c));
  return s;
};
function hg(u, ...c) {
  let s,
    r,
    f,
    m = h;
  function h(b) {
    const y = c.reduce((E, N) => N(E), u());
    return ((s = sg(y)), (r = s.cache.get), (f = s.cache.set), (m = v), v(b));
  }
  function v(b) {
    const y = r(b);
    if (y) return y;
    const E = fg(b, s);
    return (f(b, E), E);
  }
  return function () {
    return m(dg.apply(null, arguments));
  };
}
const kt = (u) => {
    const c = (s) => s[u] || [];
    return ((c.isThemeGetter = !0), c);
  },
  sm = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  om = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  mg = /^\d+\/\d+$/,
  yg = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  pg =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  gg = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  vg = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  bg =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Xn = (u) => mg.test(u),
  pt = (u) => !!u && !Number.isNaN(Number(u)),
  Dl = (u) => !!u && Number.isInteger(Number(u)),
  Hh = (u) => u.endsWith("%") && pt(u.slice(0, -1)),
  Cl = (u) => yg.test(u),
  Sg = () => !0,
  Eg = (u) => pg.test(u) && !gg.test(u),
  bs = () => !1,
  Tg = (u) => vg.test(u),
  Ag = (u) => bg.test(u),
  xg = (u) => !$(u) && !F(u),
  Rg = (u) => Vn(u, hm, bs),
  $ = (u) => sm.test(u),
  Pl = (u) => Vn(u, mm, Eg),
  Fr = (u) => Vn(u, Bg, pt),
  Og = (u) => Vn(u, fm, bs),
  _g = (u) => Vn(u, dm, Ag),
  Ng = (u) => Vn(u, bs, Tg),
  F = (u) => om.test(u),
  Ka = (u) => Qn(u, mm),
  Mg = (u) => Qn(u, Hg),
  zg = (u) => Qn(u, fm),
  Dg = (u) => Qn(u, hm),
  Cg = (u) => Qn(u, dm),
  wg = (u) => Qn(u, qg, !0),
  Vn = (u, c, s) => {
    const r = sm.exec(u);
    return r ? (r[1] ? c(r[1]) : s(r[2])) : !1;
  },
  Qn = (u, c, s = !1) => {
    const r = om.exec(u);
    return r ? (r[1] ? c(r[1]) : s) : !1;
  },
  fm = (u) => u === "position",
  Ug = new Set(["image", "url"]),
  dm = (u) => Ug.has(u),
  jg = new Set(["length", "size", "percentage"]),
  hm = (u) => jg.has(u),
  mm = (u) => u === "length",
  Bg = (u) => u === "number",
  Hg = (u) => u === "family-name",
  qg = (u) => u === "shadow",
  Lg = () => {
    const u = kt("color"),
      c = kt("font"),
      s = kt("text"),
      r = kt("font-weight"),
      f = kt("tracking"),
      m = kt("leading"),
      h = kt("breakpoint"),
      v = kt("container"),
      b = kt("spacing"),
      y = kt("radius"),
      E = kt("shadow"),
      N = kt("inset-shadow"),
      B = kt("drop-shadow"),
      Y = kt("blur"),
      z = kt("perspective"),
      H = kt("aspect"),
      q = kt("ease"),
      k = kt("animate"),
      P = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      tt = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      ft = () => ["auto", "hidden", "clip", "visible", "scroll"],
      Z = () => ["auto", "contain", "none"],
      X = () => [F, $, b],
      st = () => [Xn, "full", "auto", ...X()],
      it = () => [Dl, "none", "subgrid", F, $],
      Tt = () => ["auto", { span: ["full", Dl, F, $] }, Dl, F, $],
      ue = () => [Dl, "auto", F, $],
      Pt = () => ["auto", "min", "max", "fr", F, $],
      wt = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
      ],
      It = () => ["start", "end", "center", "stretch"],
      Xt = () => ["auto", ...X()],
      _t = () => [
        Xn,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...X(),
      ],
      R = () => [u, F, $],
      L = () => [Hh, Ka, Pl],
      K = () => ["", "none", "full", y, F, $],
      ct = () => ["", pt, Ka, Pl],
      g = () => ["solid", "dashed", "dotted", "double"],
      j = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      Q = () => ["", "none", Y, F, $],
      G = () => [
        "center",
        "top",
        "top-right",
        "right",
        "bottom-right",
        "bottom",
        "bottom-left",
        "left",
        "top-left",
        F,
        $,
      ],
      I = () => ["none", pt, F, $],
      ht = () => ["none", pt, F, $],
      nt = () => [pt, F, $],
      Vt = () => [Xn, "full", ...X()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [Cl],
        breakpoint: [Cl],
        color: [Sg],
        container: [Cl],
        "drop-shadow": [Cl],
        ease: ["in", "out", "in-out"],
        font: [xg],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [Cl],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [Cl],
        shadow: [Cl],
        spacing: ["px", pt],
        text: [Cl],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", Xn, $, F, H] }],
        container: ["container"],
        columns: [{ columns: [pt, $, F, v] }],
        "break-after": [{ "break-after": P() }],
        "break-before": [{ "break-before": P() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...tt(), $, F] }],
        overflow: [{ overflow: ft() }],
        "overflow-x": [{ "overflow-x": ft() }],
        "overflow-y": [{ "overflow-y": ft() }],
        overscroll: [{ overscroll: Z() }],
        "overscroll-x": [{ "overscroll-x": Z() }],
        "overscroll-y": [{ "overscroll-y": Z() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: st() }],
        "inset-x": [{ "inset-x": st() }],
        "inset-y": [{ "inset-y": st() }],
        start: [{ start: st() }],
        end: [{ end: st() }],
        top: [{ top: st() }],
        right: [{ right: st() }],
        bottom: [{ bottom: st() }],
        left: [{ left: st() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [Dl, "auto", F, $] }],
        basis: [{ basis: [Xn, "full", "auto", v, ...X()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [pt, Xn, "auto", "initial", "none", $] }],
        grow: [{ grow: ["", pt, F, $] }],
        shrink: [{ shrink: ["", pt, F, $] }],
        order: [{ order: [Dl, "first", "last", "none", F, $] }],
        "grid-cols": [{ "grid-cols": it() }],
        "col-start-end": [{ col: Tt() }],
        "col-start": [{ "col-start": ue() }],
        "col-end": [{ "col-end": ue() }],
        "grid-rows": [{ "grid-rows": it() }],
        "row-start-end": [{ row: Tt() }],
        "row-start": [{ "row-start": ue() }],
        "row-end": [{ "row-end": ue() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": Pt() }],
        "auto-rows": [{ "auto-rows": Pt() }],
        gap: [{ gap: X() }],
        "gap-x": [{ "gap-x": X() }],
        "gap-y": [{ "gap-y": X() }],
        "justify-content": [{ justify: [...wt(), "normal"] }],
        "justify-items": [{ "justify-items": [...It(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...It()] }],
        "align-content": [{ content: ["normal", ...wt()] }],
        "align-items": [{ items: [...It(), "baseline"] }],
        "align-self": [{ self: ["auto", ...It(), "baseline"] }],
        "place-content": [{ "place-content": wt() }],
        "place-items": [{ "place-items": [...It(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...It()] }],
        p: [{ p: X() }],
        px: [{ px: X() }],
        py: [{ py: X() }],
        ps: [{ ps: X() }],
        pe: [{ pe: X() }],
        pt: [{ pt: X() }],
        pr: [{ pr: X() }],
        pb: [{ pb: X() }],
        pl: [{ pl: X() }],
        m: [{ m: Xt() }],
        mx: [{ mx: Xt() }],
        my: [{ my: Xt() }],
        ms: [{ ms: Xt() }],
        me: [{ me: Xt() }],
        mt: [{ mt: Xt() }],
        mr: [{ mr: Xt() }],
        mb: [{ mb: Xt() }],
        ml: [{ ml: Xt() }],
        "space-x": [{ "space-x": X() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": X() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: _t() }],
        w: [{ w: [v, "screen", ..._t()] }],
        "min-w": [{ "min-w": [v, "screen", "none", ..._t()] }],
        "max-w": [
          { "max-w": [v, "screen", "none", "prose", { screen: [h] }, ..._t()] },
        ],
        h: [{ h: ["screen", ..._t()] }],
        "min-h": [{ "min-h": ["screen", "none", ..._t()] }],
        "max-h": [{ "max-h": ["screen", ..._t()] }],
        "font-size": [{ text: ["base", s, Ka, Pl] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [r, F, Fr] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              Hh,
              $,
            ],
          },
        ],
        "font-family": [{ font: [Mg, $, c] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [f, F, $] }],
        "line-clamp": [{ "line-clamp": [pt, "none", F, Fr] }],
        leading: [{ leading: [m, ...X()] }],
        "list-image": [{ "list-image": ["none", F, $] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", F, $] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: R() }],
        "text-color": [{ text: R() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...g(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [pt, "from-font", "auto", F, Pl] },
        ],
        "text-decoration-color": [{ decoration: R() }],
        "underline-offset": [{ "underline-offset": [pt, "auto", F, $] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: X() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              F,
              $,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", F, $] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...tt(), zg, Og] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", Dg, Rg] }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  Dl,
                  F,
                  $,
                ],
                radial: ["", F, $],
                conic: [Dl, F, $],
              },
              Cg,
              _g,
            ],
          },
        ],
        "bg-color": [{ bg: R() }],
        "gradient-from-pos": [{ from: L() }],
        "gradient-via-pos": [{ via: L() }],
        "gradient-to-pos": [{ to: L() }],
        "gradient-from": [{ from: R() }],
        "gradient-via": [{ via: R() }],
        "gradient-to": [{ to: R() }],
        rounded: [{ rounded: K() }],
        "rounded-s": [{ "rounded-s": K() }],
        "rounded-e": [{ "rounded-e": K() }],
        "rounded-t": [{ "rounded-t": K() }],
        "rounded-r": [{ "rounded-r": K() }],
        "rounded-b": [{ "rounded-b": K() }],
        "rounded-l": [{ "rounded-l": K() }],
        "rounded-ss": [{ "rounded-ss": K() }],
        "rounded-se": [{ "rounded-se": K() }],
        "rounded-ee": [{ "rounded-ee": K() }],
        "rounded-es": [{ "rounded-es": K() }],
        "rounded-tl": [{ "rounded-tl": K() }],
        "rounded-tr": [{ "rounded-tr": K() }],
        "rounded-br": [{ "rounded-br": K() }],
        "rounded-bl": [{ "rounded-bl": K() }],
        "border-w": [{ border: ct() }],
        "border-w-x": [{ "border-x": ct() }],
        "border-w-y": [{ "border-y": ct() }],
        "border-w-s": [{ "border-s": ct() }],
        "border-w-e": [{ "border-e": ct() }],
        "border-w-t": [{ "border-t": ct() }],
        "border-w-r": [{ "border-r": ct() }],
        "border-w-b": [{ "border-b": ct() }],
        "border-w-l": [{ "border-l": ct() }],
        "divide-x": [{ "divide-x": ct() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": ct() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...g(), "hidden", "none"] }],
        "divide-style": [{ divide: [...g(), "hidden", "none"] }],
        "border-color": [{ border: R() }],
        "border-color-x": [{ "border-x": R() }],
        "border-color-y": [{ "border-y": R() }],
        "border-color-s": [{ "border-s": R() }],
        "border-color-e": [{ "border-e": R() }],
        "border-color-t": [{ "border-t": R() }],
        "border-color-r": [{ "border-r": R() }],
        "border-color-b": [{ "border-b": R() }],
        "border-color-l": [{ "border-l": R() }],
        "divide-color": [{ divide: R() }],
        "outline-style": [{ outline: [...g(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [pt, F, $] }],
        "outline-w": [{ outline: ["", pt, Ka, Pl] }],
        "outline-color": [{ outline: [u] }],
        shadow: [{ shadow: ["", "none", E, wg, Ng] }],
        "shadow-color": [{ shadow: R() }],
        "inset-shadow": [{ "inset-shadow": ["none", F, $, N] }],
        "inset-shadow-color": [{ "inset-shadow": R() }],
        "ring-w": [{ ring: ct() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: R() }],
        "ring-offset-w": [{ "ring-offset": [pt, Pl] }],
        "ring-offset-color": [{ "ring-offset": R() }],
        "inset-ring-w": [{ "inset-ring": ct() }],
        "inset-ring-color": [{ "inset-ring": R() }],
        opacity: [{ opacity: [pt, F, $] }],
        "mix-blend": [{ "mix-blend": [...j(), "plus-darker", "plus-lighter"] }],
        "bg-blend": [{ "bg-blend": j() }],
        filter: [{ filter: ["", "none", F, $] }],
        blur: [{ blur: Q() }],
        brightness: [{ brightness: [pt, F, $] }],
        contrast: [{ contrast: [pt, F, $] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", B, F, $] }],
        grayscale: [{ grayscale: ["", pt, F, $] }],
        "hue-rotate": [{ "hue-rotate": [pt, F, $] }],
        invert: [{ invert: ["", pt, F, $] }],
        saturate: [{ saturate: [pt, F, $] }],
        sepia: [{ sepia: ["", pt, F, $] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", F, $] }],
        "backdrop-blur": [{ "backdrop-blur": Q() }],
        "backdrop-brightness": [{ "backdrop-brightness": [pt, F, $] }],
        "backdrop-contrast": [{ "backdrop-contrast": [pt, F, $] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", pt, F, $] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [pt, F, $] }],
        "backdrop-invert": [{ "backdrop-invert": ["", pt, F, $] }],
        "backdrop-opacity": [{ "backdrop-opacity": [pt, F, $] }],
        "backdrop-saturate": [{ "backdrop-saturate": [pt, F, $] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", pt, F, $] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": X() }],
        "border-spacing-x": [{ "border-spacing-x": X() }],
        "border-spacing-y": [{ "border-spacing-y": X() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              F,
              $,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [pt, "initial", F, $] }],
        ease: [{ ease: ["linear", "initial", q, F, $] }],
        delay: [{ delay: [pt, F, $] }],
        animate: [{ animate: ["none", k, F, $] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [z, F, $] }],
        "perspective-origin": [{ "perspective-origin": G() }],
        rotate: [{ rotate: I() }],
        "rotate-x": [{ "rotate-x": I() }],
        "rotate-y": [{ "rotate-y": I() }],
        "rotate-z": [{ "rotate-z": I() }],
        scale: [{ scale: ht() }],
        "scale-x": [{ "scale-x": ht() }],
        "scale-y": [{ "scale-y": ht() }],
        "scale-z": [{ "scale-z": ht() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: nt() }],
        "skew-x": [{ "skew-x": nt() }],
        "skew-y": [{ "skew-y": nt() }],
        transform: [{ transform: [F, $, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: G() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: Vt() }],
        "translate-x": [{ "translate-x": Vt() }],
        "translate-y": [{ "translate-y": Vt() }],
        "translate-z": [{ "translate-z": Vt() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: R() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: R() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              F,
              $,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": X() }],
        "scroll-mx": [{ "scroll-mx": X() }],
        "scroll-my": [{ "scroll-my": X() }],
        "scroll-ms": [{ "scroll-ms": X() }],
        "scroll-me": [{ "scroll-me": X() }],
        "scroll-mt": [{ "scroll-mt": X() }],
        "scroll-mr": [{ "scroll-mr": X() }],
        "scroll-mb": [{ "scroll-mb": X() }],
        "scroll-ml": [{ "scroll-ml": X() }],
        "scroll-p": [{ "scroll-p": X() }],
        "scroll-px": [{ "scroll-px": X() }],
        "scroll-py": [{ "scroll-py": X() }],
        "scroll-ps": [{ "scroll-ps": X() }],
        "scroll-pe": [{ "scroll-pe": X() }],
        "scroll-pt": [{ "scroll-pt": X() }],
        "scroll-pr": [{ "scroll-pr": X() }],
        "scroll-pb": [{ "scroll-pb": X() }],
        "scroll-pl": [{ "scroll-pl": X() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", F, $] },
        ],
        fill: [{ fill: ["none", ...R()] }],
        "stroke-w": [{ stroke: [pt, Ka, Pl, Fr] }],
        stroke: [{ stroke: ["none", ...R()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "before",
        "after",
        "placeholder",
        "file",
        "marker",
        "selection",
        "first-line",
        "first-letter",
        "backdrop",
        "*",
        "**",
      ],
    };
  },
  Gg = hg(Lg);
function Xe(...u) {
  return Gg(Ip(u));
}
function Wr({ className: u, ...c }) {
  return U.jsx("div", {
    "data-slot": "card",
    className: Xe(
      "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
      u,
    ),
    ...c,
  });
}
function Pr({ className: u, ...c }) {
  return U.jsx("div", {
    "data-slot": "card-header",
    className: Xe(
      "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
      u,
    ),
    ...c,
  });
}
function Ir({ className: u, ...c }) {
  return U.jsx("div", {
    "data-slot": "card-title",
    className: Xe("leading-none font-semibold", u),
    ...c,
  });
}
function Yg({ className: u, ...c }) {
  return U.jsx("div", {
    "data-slot": "card-description",
    className: Xe("text-muted-foreground text-sm", u),
    ...c,
  });
}
function ts({ className: u, ...c }) {
  return U.jsx("div", {
    "data-slot": "card-content",
    className: Xe("px-6", u),
    ...c,
  });
}
function ul(u, c, { checkForDefaultPrevented: s = !0 } = {}) {
  return function (f) {
    if ((u == null || u(f), s === !1 || !f.defaultPrevented))
      return c == null ? void 0 : c(f);
  };
}
function Ei(u, c = []) {
  let s = [];
  function r(m, h) {
    const v = V.createContext(h),
      b = s.length;
    s = [...s, h];
    const y = (N) => {
      var k;
      const { scope: B, children: Y, ...z } = N,
        H = ((k = B == null ? void 0 : B[u]) == null ? void 0 : k[b]) || v,
        q = V.useMemo(() => z, Object.values(z));
      return U.jsx(H.Provider, { value: q, children: Y });
    };
    y.displayName = m + "Provider";
    function E(N, B) {
      var H;
      const Y = ((H = B == null ? void 0 : B[u]) == null ? void 0 : H[b]) || v,
        z = V.useContext(Y);
      if (z) return z;
      if (h !== void 0) return h;
      throw new Error(`\`${N}\` must be used within \`${m}\``);
    }
    return [y, E];
  }
  const f = () => {
    const m = s.map((h) => V.createContext(h));
    return function (v) {
      const b = (v == null ? void 0 : v[u]) || m;
      return V.useMemo(() => ({ [`__scope${u}`]: { ...v, [u]: b } }), [v, b]);
    };
  };
  return ((f.scopeName = u), [r, Xg(f, ...c)]);
}
function Xg(...u) {
  const c = u[0];
  if (u.length === 1) return c;
  const s = () => {
    const r = u.map((f) => ({ useScope: f(), scopeName: f.scopeName }));
    return function (m) {
      const h = r.reduce((v, { useScope: b, scopeName: y }) => {
        const N = b(m)[`__scope${y}`];
        return { ...v, ...N };
      }, {});
      return V.useMemo(() => ({ [`__scope${c.scopeName}`]: h }), [h]);
    };
  };
  return ((s.scopeName = c.scopeName), s);
}
function Ss(u) {
  const c = V.useRef(u);
  return (
    V.useEffect(() => {
      c.current = u;
    }),
    V.useMemo(
      () =>
        (...s) => {
          var r;
          return (r = c.current) == null ? void 0 : r.call(c, ...s);
        },
      [],
    )
  );
}
function ym({ prop: u, defaultProp: c, onChange: s = () => {} }) {
  const [r, f] = Vg({ defaultProp: c, onChange: s }),
    m = u !== void 0,
    h = m ? u : r,
    v = Ss(s),
    b = V.useCallback(
      (y) => {
        if (m) {
          const N = typeof y == "function" ? y(u) : y;
          N !== u && v(N);
        } else f(y);
      },
      [m, u, f, v],
    );
  return [h, b];
}
function Vg({ defaultProp: u, onChange: c }) {
  const s = V.useState(u),
    [r] = s,
    f = V.useRef(r),
    m = Ss(c);
  return (
    V.useEffect(() => {
      f.current !== r && (m(r), (f.current = r));
    }, [r, f, m]),
    s
  );
}
nm();
var Qg = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  wl = Qg.reduce((u, c) => {
    const s = V.forwardRef((r, f) => {
      const { asChild: m, ...h } = r,
        v = m ? gi : c;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        U.jsx(v, { ...h, ref: f })
      );
    });
    return ((s.displayName = `Primitive.${c}`), { ...u, [c]: s });
  }, {});
function Zg(u) {
  const c = u + "CollectionProvider",
    [s, r] = Ei(c),
    [f, m] = s(c, { collectionRef: { current: null }, itemMap: new Map() }),
    h = (Y) => {
      const { scope: z, children: H } = Y,
        q = al.useRef(null),
        k = al.useRef(new Map()).current;
      return U.jsx(f, { scope: z, itemMap: k, collectionRef: q, children: H });
    };
  h.displayName = c;
  const v = u + "CollectionSlot",
    b = al.forwardRef((Y, z) => {
      const { scope: H, children: q } = Y,
        k = m(v, H),
        P = pi(z, k.collectionRef);
      return U.jsx(gi, { ref: P, children: q });
    });
  b.displayName = v;
  const y = u + "CollectionItemSlot",
    E = "data-radix-collection-item",
    N = al.forwardRef((Y, z) => {
      const { scope: H, children: q, ...k } = Y,
        P = al.useRef(null),
        tt = pi(z, P),
        ft = m(y, H);
      return (
        al.useEffect(
          () => (
            ft.itemMap.set(P, { ref: P, ...k }),
            () => void ft.itemMap.delete(P)
          ),
        ),
        U.jsx(gi, { [E]: "", ref: tt, children: q })
      );
    });
  N.displayName = y;
  function B(Y) {
    const z = m(u + "CollectionConsumer", Y);
    return al.useCallback(() => {
      const q = z.collectionRef.current;
      if (!q) return [];
      const k = Array.from(q.querySelectorAll(`[${E}]`));
      return Array.from(z.itemMap.values()).sort(
        (ft, Z) => k.indexOf(ft.ref.current) - k.indexOf(Z.ref.current),
      );
    }, [z.collectionRef, z.itemMap]);
  }
  return [{ Provider: h, Slot: b, ItemSlot: N }, B, r];
}
var Kg = V.createContext(void 0);
function pm(u) {
  const c = V.useContext(Kg);
  return u || c || "ltr";
}
var ss =
    globalThis != null && globalThis.document ? V.useLayoutEffect : () => {},
  Jg = jp.useId || (() => {}),
  kg = 0;
function gm(u) {
  const [c, s] = V.useState(Jg());
  return (
    ss(() => {
      s((r) => r ?? String(kg++));
    }, [u]),
    u || (c ? `radix-${c}` : "")
  );
}
function $g(u, c) {
  return V.useReducer((s, r) => c[s][r] ?? s, u);
}
var vm = (u) => {
  const { present: c, children: s } = u,
    r = Fg(c),
    f =
      typeof s == "function" ? s({ present: r.isPresent }) : V.Children.only(s),
    m = pi(r.ref, Wg(f));
  return typeof s == "function" || r.isPresent
    ? V.cloneElement(f, { ref: m })
    : null;
};
vm.displayName = "Presence";
function Fg(u) {
  const [c, s] = V.useState(),
    r = V.useRef({}),
    f = V.useRef(u),
    m = V.useRef("none"),
    h = u ? "mounted" : "unmounted",
    [v, b] = $g(h, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    V.useEffect(() => {
      const y = di(r.current);
      m.current = v === "mounted" ? y : "none";
    }, [v]),
    ss(() => {
      const y = r.current,
        E = f.current;
      if (E !== u) {
        const B = m.current,
          Y = di(y);
        (u
          ? b("MOUNT")
          : Y === "none" || (y == null ? void 0 : y.display) === "none"
            ? b("UNMOUNT")
            : b(E && B !== Y ? "ANIMATION_OUT" : "UNMOUNT"),
          (f.current = u));
      }
    }, [u, b]),
    ss(() => {
      if (c) {
        let y;
        const E = c.ownerDocument.defaultView ?? window,
          N = (Y) => {
            const H = di(r.current).includes(Y.animationName);
            if (Y.target === c && H && (b("ANIMATION_END"), !f.current)) {
              const q = c.style.animationFillMode;
              ((c.style.animationFillMode = "forwards"),
                (y = E.setTimeout(() => {
                  c.style.animationFillMode === "forwards" &&
                    (c.style.animationFillMode = q);
                })));
            }
          },
          B = (Y) => {
            Y.target === c && (m.current = di(r.current));
          };
        return (
          c.addEventListener("animationstart", B),
          c.addEventListener("animationcancel", N),
          c.addEventListener("animationend", N),
          () => {
            (E.clearTimeout(y),
              c.removeEventListener("animationstart", B),
              c.removeEventListener("animationcancel", N),
              c.removeEventListener("animationend", N));
          }
        );
      } else b("ANIMATION_END");
    }, [c, b]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(v),
      ref: V.useCallback((y) => {
        (y && (r.current = getComputedStyle(y)), s(y));
      }, []),
    }
  );
}
function di(u) {
  return (u == null ? void 0 : u.animationName) || "none";
}
function Wg(u) {
  var r, f;
  let c =
      (r = Object.getOwnPropertyDescriptor(u.props, "ref")) == null
        ? void 0
        : r.get,
    s = c && "isReactWarning" in c && c.isReactWarning;
  return s
    ? u.ref
    : ((c =
        (f = Object.getOwnPropertyDescriptor(u, "ref")) == null
          ? void 0
          : f.get),
      (s = c && "isReactWarning" in c && c.isReactWarning),
      s ? u.props.ref : u.props.ref || u.ref);
}
var es = "rovingFocusGroup.onEntryFocus",
  Pg = { bubbles: !1, cancelable: !0 },
  Ti = "RovingFocusGroup",
  [os, bm, Ig] = Zg(Ti),
  [tv, Sm] = Ei(Ti, [Ig]),
  [ev, lv] = tv(Ti),
  Em = V.forwardRef((u, c) =>
    U.jsx(os.Provider, {
      scope: u.__scopeRovingFocusGroup,
      children: U.jsx(os.Slot, {
        scope: u.__scopeRovingFocusGroup,
        children: U.jsx(nv, { ...u, ref: c }),
      }),
    }),
  );
Em.displayName = Ti;
var nv = V.forwardRef((u, c) => {
    const {
        __scopeRovingFocusGroup: s,
        orientation: r,
        loop: f = !1,
        dir: m,
        currentTabStopId: h,
        defaultCurrentTabStopId: v,
        onCurrentTabStopIdChange: b,
        onEntryFocus: y,
        preventScrollOnEntryFocus: E = !1,
        ...N
      } = u,
      B = V.useRef(null),
      Y = pi(c, B),
      z = pm(m),
      [H = null, q] = ym({ prop: h, defaultProp: v, onChange: b }),
      [k, P] = V.useState(!1),
      tt = Ss(y),
      ft = bm(s),
      Z = V.useRef(!1),
      [X, st] = V.useState(0);
    return (
      V.useEffect(() => {
        const it = B.current;
        if (it)
          return (
            it.addEventListener(es, tt),
            () => it.removeEventListener(es, tt)
          );
      }, [tt]),
      U.jsx(ev, {
        scope: s,
        orientation: r,
        dir: z,
        loop: f,
        currentTabStopId: H,
        onItemFocus: V.useCallback((it) => q(it), [q]),
        onItemShiftTab: V.useCallback(() => P(!0), []),
        onFocusableItemAdd: V.useCallback(() => st((it) => it + 1), []),
        onFocusableItemRemove: V.useCallback(() => st((it) => it - 1), []),
        children: U.jsx(wl.div, {
          tabIndex: k || X === 0 ? -1 : 0,
          "data-orientation": r,
          ...N,
          ref: Y,
          style: { outline: "none", ...u.style },
          onMouseDown: ul(u.onMouseDown, () => {
            Z.current = !0;
          }),
          onFocus: ul(u.onFocus, (it) => {
            const Tt = !Z.current;
            if (it.target === it.currentTarget && Tt && !k) {
              const ue = new CustomEvent(es, Pg);
              if ((it.currentTarget.dispatchEvent(ue), !ue.defaultPrevented)) {
                const Pt = ft().filter((R) => R.focusable),
                  wt = Pt.find((R) => R.active),
                  It = Pt.find((R) => R.id === H),
                  _t = [wt, It, ...Pt]
                    .filter(Boolean)
                    .map((R) => R.ref.current);
                xm(_t, E);
              }
            }
            Z.current = !1;
          }),
          onBlur: ul(u.onBlur, () => P(!1)),
        }),
      })
    );
  }),
  Tm = "RovingFocusGroupItem",
  Am = V.forwardRef((u, c) => {
    const {
        __scopeRovingFocusGroup: s,
        focusable: r = !0,
        active: f = !1,
        tabStopId: m,
        ...h
      } = u,
      v = gm(),
      b = m || v,
      y = lv(Tm, s),
      E = y.currentTabStopId === b,
      N = bm(s),
      { onFocusableItemAdd: B, onFocusableItemRemove: Y } = y;
    return (
      V.useEffect(() => {
        if (r) return (B(), () => Y());
      }, [r, B, Y]),
      U.jsx(os.ItemSlot, {
        scope: s,
        id: b,
        focusable: r,
        active: f,
        children: U.jsx(wl.span, {
          tabIndex: E ? 0 : -1,
          "data-orientation": y.orientation,
          ...h,
          ref: c,
          onMouseDown: ul(u.onMouseDown, (z) => {
            r ? y.onItemFocus(b) : z.preventDefault();
          }),
          onFocus: ul(u.onFocus, () => y.onItemFocus(b)),
          onKeyDown: ul(u.onKeyDown, (z) => {
            if (z.key === "Tab" && z.shiftKey) {
              y.onItemShiftTab();
              return;
            }
            if (z.target !== z.currentTarget) return;
            const H = iv(z, y.orientation, y.dir);
            if (H !== void 0) {
              if (z.metaKey || z.ctrlKey || z.altKey || z.shiftKey) return;
              z.preventDefault();
              let k = N()
                .filter((P) => P.focusable)
                .map((P) => P.ref.current);
              if (H === "last") k.reverse();
              else if (H === "prev" || H === "next") {
                H === "prev" && k.reverse();
                const P = k.indexOf(z.currentTarget);
                k = y.loop ? cv(k, P + 1) : k.slice(P + 1);
              }
              setTimeout(() => xm(k));
            }
          }),
        }),
      })
    );
  });
Am.displayName = Tm;
var av = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last",
};
function uv(u, c) {
  return c !== "rtl"
    ? u
    : u === "ArrowLeft"
      ? "ArrowRight"
      : u === "ArrowRight"
        ? "ArrowLeft"
        : u;
}
function iv(u, c, s) {
  const r = uv(u.key, s);
  if (
    !(c === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) &&
    !(c === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))
  )
    return av[r];
}
function xm(u, c = !1) {
  const s = document.activeElement;
  for (const r of u)
    if (
      r === s ||
      (r.focus({ preventScroll: c }), document.activeElement !== s)
    )
      return;
}
function cv(u, c) {
  return u.map((s, r) => u[(c + r) % u.length]);
}
var rv = Em,
  sv = Am,
  Es = "Progress",
  Ts = 100,
  [ov, n1] = Ei(Es),
  [fv, dv] = ov(Es),
  Rm = V.forwardRef((u, c) => {
    const {
      __scopeProgress: s,
      value: r = null,
      max: f,
      getValueLabel: m = hv,
      ...h
    } = u;
    (f || f === 0) && !qh(f) && console.error(mv(`${f}`, "Progress"));
    const v = qh(f) ? f : Ts;
    r !== null && !Lh(r, v) && console.error(yv(`${r}`, "Progress"));
    const b = Lh(r, v) ? r : null,
      y = vi(b) ? m(b, v) : void 0;
    return U.jsx(fv, {
      scope: s,
      value: b,
      max: v,
      children: U.jsx(wl.div, {
        "aria-valuemax": v,
        "aria-valuemin": 0,
        "aria-valuenow": vi(b) ? b : void 0,
        "aria-valuetext": y,
        role: "progressbar",
        "data-state": Nm(b, v),
        "data-value": b ?? void 0,
        "data-max": v,
        ...h,
        ref: c,
      }),
    });
  });
Rm.displayName = Es;
var Om = "ProgressIndicator",
  _m = V.forwardRef((u, c) => {
    const { __scopeProgress: s, ...r } = u,
      f = dv(Om, s);
    return U.jsx(wl.div, {
      "data-state": Nm(f.value, f.max),
      "data-value": f.value ?? void 0,
      "data-max": f.max,
      ...r,
      ref: c,
    });
  });
_m.displayName = Om;
function hv(u, c) {
  return `${Math.round((u / c) * 100)}%`;
}
function Nm(u, c) {
  return u == null ? "indeterminate" : u === c ? "complete" : "loading";
}
function vi(u) {
  return typeof u == "number";
}
function qh(u) {
  return vi(u) && !isNaN(u) && u > 0;
}
function Lh(u, c) {
  return vi(u) && !isNaN(u) && u <= c && u >= 0;
}
function mv(u, c) {
  return `Invalid prop \`max\` of value \`${u}\` supplied to \`${c}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Ts}\`.`;
}
function yv(u, c) {
  return `Invalid prop \`value\` of value \`${u}\` supplied to \`${c}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Ts} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var pv = Rm,
  gv = _m;
function Gh({ className: u, value: c, ...s }) {
  return U.jsx(pv, {
    "data-slot": "progress",
    className: Xe(
      "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
      u,
    ),
    ...s,
    children: U.jsx(gv, {
      "data-slot": "progress-indicator",
      className: "bg-primary h-full w-full flex-1 transition-all",
      style: { transform: `translateX(-${100 - (c || 0)}%)` },
    }),
  });
}
var As = "Tabs",
  [vv, a1] = Ei(As, [Sm]),
  Mm = Sm(),
  [bv, xs] = vv(As),
  zm = V.forwardRef((u, c) => {
    const {
        __scopeTabs: s,
        value: r,
        onValueChange: f,
        defaultValue: m,
        orientation: h = "horizontal",
        dir: v,
        activationMode: b = "automatic",
        ...y
      } = u,
      E = pm(v),
      [N, B] = ym({ prop: r, onChange: f, defaultProp: m });
    return U.jsx(bv, {
      scope: s,
      baseId: gm(),
      value: N,
      onValueChange: B,
      orientation: h,
      dir: E,
      activationMode: b,
      children: U.jsx(wl.div, { dir: E, "data-orientation": h, ...y, ref: c }),
    });
  });
zm.displayName = As;
var Dm = "TabsList",
  Cm = V.forwardRef((u, c) => {
    const { __scopeTabs: s, loop: r = !0, ...f } = u,
      m = xs(Dm, s),
      h = Mm(s);
    return U.jsx(rv, {
      asChild: !0,
      ...h,
      orientation: m.orientation,
      dir: m.dir,
      loop: r,
      children: U.jsx(wl.div, {
        role: "tablist",
        "aria-orientation": m.orientation,
        ...f,
        ref: c,
      }),
    });
  });
Cm.displayName = Dm;
var wm = "TabsTrigger",
  Um = V.forwardRef((u, c) => {
    const { __scopeTabs: s, value: r, disabled: f = !1, ...m } = u,
      h = xs(wm, s),
      v = Mm(s),
      b = Hm(h.baseId, r),
      y = qm(h.baseId, r),
      E = r === h.value;
    return U.jsx(sv, {
      asChild: !0,
      ...v,
      focusable: !f,
      active: E,
      children: U.jsx(wl.button, {
        type: "button",
        role: "tab",
        "aria-selected": E,
        "aria-controls": y,
        "data-state": E ? "active" : "inactive",
        "data-disabled": f ? "" : void 0,
        disabled: f,
        id: b,
        ...m,
        ref: c,
        onMouseDown: ul(u.onMouseDown, (N) => {
          !f && N.button === 0 && N.ctrlKey === !1
            ? h.onValueChange(r)
            : N.preventDefault();
        }),
        onKeyDown: ul(u.onKeyDown, (N) => {
          [" ", "Enter"].includes(N.key) && h.onValueChange(r);
        }),
        onFocus: ul(u.onFocus, () => {
          const N = h.activationMode !== "manual";
          !E && !f && N && h.onValueChange(r);
        }),
      }),
    });
  });
Um.displayName = wm;
var jm = "TabsContent",
  Bm = V.forwardRef((u, c) => {
    const { __scopeTabs: s, value: r, forceMount: f, children: m, ...h } = u,
      v = xs(jm, s),
      b = Hm(v.baseId, r),
      y = qm(v.baseId, r),
      E = r === v.value,
      N = V.useRef(E);
    return (
      V.useEffect(() => {
        const B = requestAnimationFrame(() => (N.current = !1));
        return () => cancelAnimationFrame(B);
      }, []),
      U.jsx(vm, {
        present: f || E,
        children: ({ present: B }) =>
          U.jsx(wl.div, {
            "data-state": E ? "active" : "inactive",
            "data-orientation": v.orientation,
            role: "tabpanel",
            "aria-labelledby": b,
            hidden: !B,
            id: y,
            tabIndex: 0,
            ...h,
            ref: c,
            style: { ...u.style, animationDuration: N.current ? "0s" : void 0 },
            children: B && m,
          }),
      })
    );
  });
Bm.displayName = jm;
function Hm(u, c) {
  return `${u}-trigger-${c}`;
}
function qm(u, c) {
  return `${u}-content-${c}`;
}
var Sv = zm,
  Ev = Cm,
  Tv = Um,
  Av = Bm;
function xv({ className: u, ...c }) {
  return U.jsx(Sv, {
    "data-slot": "tabs",
    className: Xe("flex flex-col gap-2", u),
    ...c,
  });
}
function Rv({ className: u, ...c }) {
  return U.jsx(Ev, {
    "data-slot": "tabs-list",
    className: Xe(
      "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
      u,
    ),
    ...c,
  });
}
function Yh({ className: u, ...c }) {
  return U.jsx(Tv, {
    "data-slot": "tabs-trigger",
    className: Xe(
      "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      u,
    ),
    ...c,
  });
}
function Xh({ className: u, ...c }) {
  return U.jsx(Av, {
    "data-slot": "tabs-content",
    className: Xe("flex-1 outline-none", u),
    ...c,
  });
}
function Ov({ AttandanceData: u, isLoading: c }) {
  const s = (h, v) => Math.round((h / v) * 100),
    r = () => {
      const h = u.reduce((b, y) => b + y.attended, 0),
        v = u.reduce((b, y) => b + y.total, 0);
      return s(h, v);
    },
    f = (h) =>
      h >= 85 ? "Excellent" : h >= 75 ? "Good" : h >= 65 ? "Average" : "Poor",
    m = (h) => {
      const v = h.total + h.futureClasses,
        b = Math.ceil(v * 0.75),
        y = h.attended,
        E = Math.max(0, b - y);
      if (E > h.futureClasses)
        return { required: E, possible: !1, message: "Cannot reach 75%" };
      if (y > b - h.futureClasses) {
        const N = Math.min(h.futureClasses, y - (b - h.futureClasses));
        return {
          required: 0,
          canMiss: N,
          possible: !0,
          message: `Can miss ${N} classes`,
        };
      }
      return { required: E, possible: !0, message: `Need to attend ${E} more` };
    };
  return c
    ? U.jsxs("div", {
        role: "status",
        className:
          "w-[45rem] h-[500px] overflow-scroll bg-background flex flex-col items-center justify-center",
        children: [
          U.jsxs("svg", {
            "aria-hidden": "true",
            class:
              "w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",
            viewBox: "0 0 100 101",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              U.jsx("path", {
                d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                fill: "currentColor",
              }),
              U.jsx("path", {
                d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                fill: "currentFill",
              }),
            ],
          }),
          U.jsx("span", { class: "sr-only", children: "Loading..." }),
        ],
      })
    : U.jsxs("div", {
        className:
          "w-[46rem] h-[524px] overflow-scroll bg-background px-4 /p-4 flex flex-col",
        children: [
          U.jsxs("div", {
            className: "flex items-center justify-between mb-4",
            children: [
              U.jsx("h1", {
                className: "text-xl font-bold",
                children: "Tarunya's Att",
              }),
              U.jsx("h1", {
                className: "font-bold text-slate-400",
                children: `${atob("Q3JhZnRlZCB3aXRo")} ❤️ ${atob("Zm9yIFRhcnVueWE=")}`,
              }),
            ],
          }),
          U.jsxs(xv, {
            defaultValue: "overview",
            className: "flex-1 mb-[5rem]",
            children: [
              U.jsxs(Rv, {
                className: "grid w-full grid-cols-2",
                children: [
                  U.jsx(Yh, { value: "overview", children: "Overview" }),
                  U.jsx(Yh, { value: "details", children: "Details" }),
                ],
              }),
              U.jsx(Xh, {
                value: "overview",
                className: "flex-1 overflow-auto",
                children: U.jsx("div", {
                  className: "grid gap-4 grid-cols-2",
                  children: u.map((h) =>
                    U.jsxs(
                      Wr,
                      {
                        className: "gap-4",
                        children: [
                          U.jsx(Pr, {
                            className: "pb-2",
                            children: U.jsxs("div", {
                              className: "flex items-center justify-between",
                              children: [
                                U.jsxs("div", {
                                  className: "flex items-center space-x-2",
                                  children: [
                                    U.jsx("div", {
                                      className: `p-2 rounded-full ${h.color}`,
                                      children: U.jsx(wh, {
                                        className: "h-4 w-4 text-white",
                                      }),
                                    }),
                                    U.jsx(Ir, {
                                      className: "text-base",
                                      children: h.name,
                                    }),
                                  ],
                                }),
                                U.jsxs("span", {
                                  className: "text-2xl font-bold",
                                  children: [s(h.attended, h.total), "%"],
                                }),
                              ],
                            }),
                          }),
                          U.jsxs(ts, {
                            children: [
                              U.jsx(Gh, {
                                value: s(h.attended, h.total),
                                className: "h-2",
                              }),
                              U.jsxs("div", {
                                className: "mt-2 text-sm text-muted-foreground",
                                children: [
                                  h.attended,
                                  " of ",
                                  h.total,
                                  " classes attended",
                                ],
                              }),
                              U.jsx("div", {
                                className: "mt-1 text-sm font-medium",
                                children: m(h).message,
                              }),
                            ],
                          }),
                        ],
                      },
                      h.id,
                    ),
                  ),
                }),
              }),
              U.jsx(Xh, {
                value: "details",
                className: "flex-1 overflow-auto",
                children: U.jsxs(Wr, {
                  children: [
                    U.jsxs(Pr, {
                      children: [
                        U.jsx(Ir, { children: "Attendance Details" }),
                        U.jsx(Yg, {
                          children: "Detailed view of your attendance",
                        }),
                      ],
                    }),
                    U.jsx(ts, {
                      children: U.jsx("div", {
                        className: "space-y-4",
                        children: u.map((h) =>
                          U.jsxs(
                            "div",
                            {
                              className: "space-y-2",
                              children: [
                                U.jsxs("div", {
                                  className:
                                    "flex items-center justify-between",
                                  children: [
                                    U.jsxs("div", {
                                      className: "flex items-center space-x-2",
                                      children: [
                                        U.jsx("div", {
                                          className: `p-1.5 rounded-full ${h.color}`,
                                          children: U.jsx(wh, {
                                            className: "h-4 w-4 text-white",
                                          }),
                                        }),
                                        U.jsx("span", {
                                          className: "font-medium",
                                          children: h.name,
                                        }),
                                      ],
                                    }),
                                    U.jsxs("span", {
                                      className: "text-sm font-medium",
                                      children: [s(h.attended, h.total), "%"],
                                    }),
                                  ],
                                }),
                                U.jsxs("div", {
                                  className: "grid grid-cols-2 gap-2 text-sm",
                                  children: [
                                    U.jsxs("div", {
                                      children: [
                                        U.jsx("span", {
                                          className: "text-muted-foreground",
                                          children: "Classes Attended:",
                                        }),
                                        " ",
                                        U.jsx("span", {
                                          className: "font-medium",
                                          children: h.attended,
                                        }),
                                      ],
                                    }),
                                    U.jsxs("div", {
                                      children: [
                                        U.jsx("span", {
                                          className: "text-muted-foreground",
                                          children: "Total Classes:",
                                        }),
                                        " ",
                                        U.jsx("span", {
                                          className: "font-medium",
                                          children: h.total,
                                        }),
                                      ],
                                    }),
                                    U.jsxs("div", {
                                      children: [
                                        U.jsx("span", {
                                          className: "text-muted-foreground",
                                          children: "Classes Missed:",
                                        }),
                                        " ",
                                        U.jsx("span", {
                                          className: "font-medium",
                                          children: h.total - h.attended,
                                        }),
                                      ],
                                    }),
                                    U.jsxs("div", {
                                      children: [
                                        U.jsx("span", {
                                          className: "text-muted-foreground",
                                          children: "Status:",
                                        }),
                                        " ",
                                        U.jsx("span", {
                                          className: "font-medium",
                                          children: f(s(h.attended, h.total)),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            h.id,
                          ),
                        ),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
          U.jsx("div", {
            className:
              "mt-4 w-full  fixed border-t-[1px] border-gray-300 bottom-0 left-0 right-0",
            children: U.jsxs(Wr, {
              className: "gap-2 border-none  rounded-none py-4",
              children: [
                U.jsx(Pr, {
                  className: "pb-0",
                  children: U.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                      U.jsx(Ir, {
                        className: "text-sm",
                        children: "Overall Progress",
                      }),
                      U.jsxs("span", {
                        className: "text-xs font-bold",
                        children: [r(), "%", " ", `(${f(r())})`],
                      }),
                    ],
                  }),
                }),
                U.jsxs(ts, {
                  children: [
                    U.jsx(Gh, { value: r(), className: "h-2 w-full" }),
                    U.jsxs("div", {
                      className:
                        "mt-1 flex justify-between text-sm text-muted-foreground",
                      children: [
                        U.jsxs("span", {
                          children: [
                            u.reduce((h, v) => h + v.attended, 0),
                            " ",
                            "classes attended",
                          ],
                        }),
                        U.jsxs("span", {
                          children: [
                            u.reduce((h, v) => h + v.total, 0),
                            " ",
                            "total classes",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      });
}
function Lm(u, c) {
  return function () {
    return u.apply(c, arguments);
  };
}
const { toString: _v } = Object.prototype,
  { getPrototypeOf: Rs } = Object,
  Ai = ((u) => (c) => {
    const s = _v.call(c);
    return u[s] || (u[s] = s.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Ue = (u) => ((u = u.toLowerCase()), (c) => Ai(c) === u),
  xi = (u) => (c) => typeof c === u,
  { isArray: Zn } = Array,
  ka = xi("undefined");
function Nv(u) {
  return (
    u !== null &&
    !ka(u) &&
    u.constructor !== null &&
    !ka(u.constructor) &&
    Ee(u.constructor.isBuffer) &&
    u.constructor.isBuffer(u)
  );
}
const Gm = Ue("ArrayBuffer");
function Mv(u) {
  let c;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (c = ArrayBuffer.isView(u))
      : (c = u && u.buffer && Gm(u.buffer)),
    c
  );
}
const zv = xi("string"),
  Ee = xi("function"),
  Ym = xi("number"),
  Ri = (u) => u !== null && typeof u == "object",
  Dv = (u) => u === !0 || u === !1,
  hi = (u) => {
    if (Ai(u) !== "object") return !1;
    const c = Rs(u);
    return (
      (c === null ||
        c === Object.prototype ||
        Object.getPrototypeOf(c) === null) &&
      !(Symbol.toStringTag in u) &&
      !(Symbol.iterator in u)
    );
  },
  Cv = Ue("Date"),
  wv = Ue("File"),
  Uv = Ue("Blob"),
  jv = Ue("FileList"),
  Bv = (u) => Ri(u) && Ee(u.pipe),
  Hv = (u) => {
    let c;
    return (
      u &&
      ((typeof FormData == "function" && u instanceof FormData) ||
        (Ee(u.append) &&
          ((c = Ai(u)) === "formdata" ||
            (c === "object" &&
              Ee(u.toString) &&
              u.toString() === "[object FormData]"))))
    );
  },
  qv = Ue("URLSearchParams"),
  [Lv, Gv, Yv, Xv] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Ue,
  ),
  Vv = (u) =>
    u.trim ? u.trim() : u.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function $a(u, c, { allOwnKeys: s = !1 } = {}) {
  if (u === null || typeof u > "u") return;
  let r, f;
  if ((typeof u != "object" && (u = [u]), Zn(u)))
    for (r = 0, f = u.length; r < f; r++) c.call(null, u[r], r, u);
  else {
    const m = s ? Object.getOwnPropertyNames(u) : Object.keys(u),
      h = m.length;
    let v;
    for (r = 0; r < h; r++) ((v = m[r]), c.call(null, u[v], v, u));
  }
}
function Xm(u, c) {
  c = c.toLowerCase();
  const s = Object.keys(u);
  let r = s.length,
    f;
  for (; r-- > 0; ) if (((f = s[r]), c === f.toLowerCase())) return f;
  return null;
}
const Il =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : global,
  Vm = (u) => !ka(u) && u !== Il;
function fs() {
  const { caseless: u } = (Vm(this) && this) || {},
    c = {},
    s = (r, f) => {
      const m = (u && Xm(c, f)) || f;
      hi(c[m]) && hi(r)
        ? (c[m] = fs(c[m], r))
        : hi(r)
          ? (c[m] = fs({}, r))
          : Zn(r)
            ? (c[m] = r.slice())
            : (c[m] = r);
    };
  for (let r = 0, f = arguments.length; r < f; r++)
    arguments[r] && $a(arguments[r], s);
  return c;
}
const Qv = (u, c, s, { allOwnKeys: r } = {}) => (
    $a(
      c,
      (f, m) => {
        s && Ee(f) ? (u[m] = Lm(f, s)) : (u[m] = f);
      },
      { allOwnKeys: r },
    ),
    u
  ),
  Zv = (u) => (u.charCodeAt(0) === 65279 && (u = u.slice(1)), u),
  Kv = (u, c, s, r) => {
    ((u.prototype = Object.create(c.prototype, r)),
      (u.prototype.constructor = u),
      Object.defineProperty(u, "super", { value: c.prototype }),
      s && Object.assign(u.prototype, s));
  },
  Jv = (u, c, s, r) => {
    let f, m, h;
    const v = {};
    if (((c = c || {}), u == null)) return c;
    do {
      for (f = Object.getOwnPropertyNames(u), m = f.length; m-- > 0; )
        ((h = f[m]),
          (!r || r(h, u, c)) && !v[h] && ((c[h] = u[h]), (v[h] = !0)));
      u = s !== !1 && Rs(u);
    } while (u && (!s || s(u, c)) && u !== Object.prototype);
    return c;
  },
  kv = (u, c, s) => {
    ((u = String(u)),
      (s === void 0 || s > u.length) && (s = u.length),
      (s -= c.length));
    const r = u.indexOf(c, s);
    return r !== -1 && r === s;
  },
  $v = (u) => {
    if (!u) return null;
    if (Zn(u)) return u;
    let c = u.length;
    if (!Ym(c)) return null;
    const s = new Array(c);
    for (; c-- > 0; ) s[c] = u[c];
    return s;
  },
  Fv = (
    (u) => (c) =>
      u && c instanceof u
  )(typeof Uint8Array < "u" && Rs(Uint8Array)),
  Wv = (u, c) => {
    const r = (u && u[Symbol.iterator]).call(u);
    let f;
    for (; (f = r.next()) && !f.done; ) {
      const m = f.value;
      c.call(u, m[0], m[1]);
    }
  },
  Pv = (u, c) => {
    let s;
    const r = [];
    for (; (s = u.exec(c)) !== null; ) r.push(s);
    return r;
  },
  Iv = Ue("HTMLFormElement"),
  tb = (u) =>
    u.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (s, r, f) {
      return r.toUpperCase() + f;
    }),
  Vh = (
    ({ hasOwnProperty: u }) =>
    (c, s) =>
      u.call(c, s)
  )(Object.prototype),
  eb = Ue("RegExp"),
  Qm = (u, c) => {
    const s = Object.getOwnPropertyDescriptors(u),
      r = {};
    ($a(s, (f, m) => {
      let h;
      (h = c(f, m, u)) !== !1 && (r[m] = h || f);
    }),
      Object.defineProperties(u, r));
  },
  lb = (u) => {
    Qm(u, (c, s) => {
      if (Ee(u) && ["arguments", "caller", "callee"].indexOf(s) !== -1)
        return !1;
      const r = u[s];
      if (Ee(r)) {
        if (((c.enumerable = !1), "writable" in c)) {
          c.writable = !1;
          return;
        }
        c.set ||
          (c.set = () => {
            throw Error("Can not rewrite read-only method '" + s + "'");
          });
      }
    });
  },
  nb = (u, c) => {
    const s = {},
      r = (f) => {
        f.forEach((m) => {
          s[m] = !0;
        });
      };
    return (Zn(u) ? r(u) : r(String(u).split(c)), s);
  },
  ab = () => {},
  ub = (u, c) => (u != null && Number.isFinite((u = +u)) ? u : c);
function ib(u) {
  return !!(
    u &&
    Ee(u.append) &&
    u[Symbol.toStringTag] === "FormData" &&
    u[Symbol.iterator]
  );
}
const cb = (u) => {
    const c = new Array(10),
      s = (r, f) => {
        if (Ri(r)) {
          if (c.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            c[f] = r;
            const m = Zn(r) ? [] : {};
            return (
              $a(r, (h, v) => {
                const b = s(h, f + 1);
                !ka(b) && (m[v] = b);
              }),
              (c[f] = void 0),
              m
            );
          }
        }
        return r;
      };
    return s(u, 0);
  },
  rb = Ue("AsyncFunction"),
  sb = (u) => u && (Ri(u) || Ee(u)) && Ee(u.then) && Ee(u.catch),
  Zm = ((u, c) =>
    u
      ? setImmediate
      : c
        ? ((s, r) => (
            Il.addEventListener(
              "message",
              ({ source: f, data: m }) => {
                f === Il && m === s && r.length && r.shift()();
              },
              !1,
            ),
            (f) => {
              (r.push(f), Il.postMessage(s, "*"));
            }
          ))(`axios@${Math.random()}`, [])
        : (s) => setTimeout(s))(
    typeof setImmediate == "function",
    Ee(Il.postMessage),
  ),
  ob =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Il)
      : (typeof process < "u" && process.nextTick) || Zm,
  M = {
    isArray: Zn,
    isArrayBuffer: Gm,
    isBuffer: Nv,
    isFormData: Hv,
    isArrayBufferView: Mv,
    isString: zv,
    isNumber: Ym,
    isBoolean: Dv,
    isObject: Ri,
    isPlainObject: hi,
    isReadableStream: Lv,
    isRequest: Gv,
    isResponse: Yv,
    isHeaders: Xv,
    isUndefined: ka,
    isDate: Cv,
    isFile: wv,
    isBlob: Uv,
    isRegExp: eb,
    isFunction: Ee,
    isStream: Bv,
    isURLSearchParams: qv,
    isTypedArray: Fv,
    isFileList: jv,
    forEach: $a,
    merge: fs,
    extend: Qv,
    trim: Vv,
    stripBOM: Zv,
    inherits: Kv,
    toFlatObject: Jv,
    kindOf: Ai,
    kindOfTest: Ue,
    endsWith: kv,
    toArray: $v,
    forEachEntry: Wv,
    matchAll: Pv,
    isHTMLForm: Iv,
    hasOwnProperty: Vh,
    hasOwnProp: Vh,
    reduceDescriptors: Qm,
    freezeMethods: lb,
    toObjectSet: nb,
    toCamelCase: tb,
    noop: ab,
    toFiniteNumber: ub,
    findKey: Xm,
    global: Il,
    isContextDefined: Vm,
    isSpecCompliantForm: ib,
    toJSONObject: cb,
    isAsyncFn: rb,
    isThenable: sb,
    setImmediate: Zm,
    asap: ob,
  };
function ut(u, c, s, r, f) {
  (Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = u),
    (this.name = "AxiosError"),
    c && (this.code = c),
    s && (this.config = s),
    r && (this.request = r),
    f && ((this.response = f), (this.status = f.status ? f.status : null)));
}
M.inherits(ut, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: M.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Km = ut.prototype,
  Jm = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((u) => {
  Jm[u] = { value: u };
});
Object.defineProperties(ut, Jm);
Object.defineProperty(Km, "isAxiosError", { value: !0 });
ut.from = (u, c, s, r, f, m) => {
  const h = Object.create(Km);
  return (
    M.toFlatObject(
      u,
      h,
      function (b) {
        return b !== Error.prototype;
      },
      (v) => v !== "isAxiosError",
    ),
    ut.call(h, u.message, c, s, r, f),
    (h.cause = u),
    (h.name = u.name),
    m && Object.assign(h, m),
    h
  );
};
const fb = null;
function ds(u) {
  return M.isPlainObject(u) || M.isArray(u);
}
function km(u) {
  return M.endsWith(u, "[]") ? u.slice(0, -2) : u;
}
function Qh(u, c, s) {
  return u
    ? u
        .concat(c)
        .map(function (f, m) {
          return ((f = km(f)), !s && m ? "[" + f + "]" : f);
        })
        .join(s ? "." : "")
    : c;
}
function db(u) {
  return M.isArray(u) && !u.some(ds);
}
const hb = M.toFlatObject(M, {}, null, function (c) {
  return /^is[A-Z]/.test(c);
});
function Oi(u, c, s) {
  if (!M.isObject(u)) throw new TypeError("target must be an object");
  ((c = c || new FormData()),
    (s = M.toFlatObject(
      s,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (H, q) {
        return !M.isUndefined(q[H]);
      },
    )));
  const r = s.metaTokens,
    f = s.visitor || E,
    m = s.dots,
    h = s.indexes,
    b = (s.Blob || (typeof Blob < "u" && Blob)) && M.isSpecCompliantForm(c);
  if (!M.isFunction(f)) throw new TypeError("visitor must be a function");
  function y(z) {
    if (z === null) return "";
    if (M.isDate(z)) return z.toISOString();
    if (!b && M.isBlob(z))
      throw new ut("Blob is not supported. Use a Buffer instead.");
    return M.isArrayBuffer(z) || M.isTypedArray(z)
      ? b && typeof Blob == "function"
        ? new Blob([z])
        : Buffer.from(z)
      : z;
  }
  function E(z, H, q) {
    let k = z;
    if (z && !q && typeof z == "object") {
      if (M.endsWith(H, "{}"))
        ((H = r ? H : H.slice(0, -2)), (z = JSON.stringify(z)));
      else if (
        (M.isArray(z) && db(z)) ||
        ((M.isFileList(z) || M.endsWith(H, "[]")) && (k = M.toArray(z)))
      )
        return (
          (H = km(H)),
          k.forEach(function (tt, ft) {
            !(M.isUndefined(tt) || tt === null) &&
              c.append(
                h === !0 ? Qh([H], ft, m) : h === null ? H : H + "[]",
                y(tt),
              );
          }),
          !1
        );
    }
    return ds(z) ? !0 : (c.append(Qh(q, H, m), y(z)), !1);
  }
  const N = [],
    B = Object.assign(hb, {
      defaultVisitor: E,
      convertValue: y,
      isVisitable: ds,
    });
  function Y(z, H) {
    if (!M.isUndefined(z)) {
      if (N.indexOf(z) !== -1)
        throw Error("Circular reference detected in " + H.join("."));
      (N.push(z),
        M.forEach(z, function (k, P) {
          (!(M.isUndefined(k) || k === null) &&
            f.call(c, k, M.isString(P) ? P.trim() : P, H, B)) === !0 &&
            Y(k, H ? H.concat(P) : [P]);
        }),
        N.pop());
    }
  }
  if (!M.isObject(u)) throw new TypeError("data must be an object");
  return (Y(u), c);
}
function Zh(u) {
  const c = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(u).replace(/[!'()~]|%20|%00/g, function (r) {
    return c[r];
  });
}
function Os(u, c) {
  ((this._pairs = []), u && Oi(u, this, c));
}
const $m = Os.prototype;
$m.append = function (c, s) {
  this._pairs.push([c, s]);
};
$m.toString = function (c) {
  const s = c
    ? function (r) {
        return c.call(this, r, Zh);
      }
    : Zh;
  return this._pairs
    .map(function (f) {
      return s(f[0]) + "=" + s(f[1]);
    }, "")
    .join("&");
};
function mb(u) {
  return encodeURIComponent(u)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Fm(u, c, s) {
  if (!c) return u;
  const r = (s && s.encode) || mb;
  M.isFunction(s) && (s = { serialize: s });
  const f = s && s.serialize;
  let m;
  if (
    (f
      ? (m = f(c, s))
      : (m = M.isURLSearchParams(c) ? c.toString() : new Os(c, s).toString(r)),
    m)
  ) {
    const h = u.indexOf("#");
    (h !== -1 && (u = u.slice(0, h)),
      (u += (u.indexOf("?") === -1 ? "?" : "&") + m));
  }
  return u;
}
class Kh {
  constructor() {
    this.handlers = [];
  }
  use(c, s, r) {
    return (
      this.handlers.push({
        fulfilled: c,
        rejected: s,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(c) {
    this.handlers[c] && (this.handlers[c] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(c) {
    M.forEach(this.handlers, function (r) {
      r !== null && c(r);
    });
  }
}
const Wm = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  yb = typeof URLSearchParams < "u" ? URLSearchParams : Os,
  pb = typeof FormData < "u" ? FormData : null,
  gb = typeof Blob < "u" ? Blob : null,
  vb = {
    isBrowser: !0,
    classes: { URLSearchParams: yb, FormData: pb, Blob: gb },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  _s = typeof window < "u" && typeof document < "u",
  hs = (typeof navigator == "object" && navigator) || void 0,
  bb =
    _s &&
    (!hs || ["ReactNative", "NativeScript", "NS"].indexOf(hs.product) < 0),
  Sb =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  Eb = (_s && window.location.href) || "http://localhost",
  Tb = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: _s,
        hasStandardBrowserEnv: bb,
        hasStandardBrowserWebWorkerEnv: Sb,
        navigator: hs,
        origin: Eb,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  ne = { ...Tb, ...vb };
function Ab(u, c) {
  return Oi(
    u,
    new ne.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (s, r, f, m) {
          return ne.isNode && M.isBuffer(s)
            ? (this.append(r, s.toString("base64")), !1)
            : m.defaultVisitor.apply(this, arguments);
        },
      },
      c,
    ),
  );
}
function xb(u) {
  return M.matchAll(/\w+|\[(\w*)]/g, u).map((c) =>
    c[0] === "[]" ? "" : c[1] || c[0],
  );
}
function Rb(u) {
  const c = {},
    s = Object.keys(u);
  let r;
  const f = s.length;
  let m;
  for (r = 0; r < f; r++) ((m = s[r]), (c[m] = u[m]));
  return c;
}
function Pm(u) {
  function c(s, r, f, m) {
    let h = s[m++];
    if (h === "__proto__") return !0;
    const v = Number.isFinite(+h),
      b = m >= s.length;
    return (
      (h = !h && M.isArray(f) ? f.length : h),
      b
        ? (M.hasOwnProp(f, h) ? (f[h] = [f[h], r]) : (f[h] = r), !v)
        : ((!f[h] || !M.isObject(f[h])) && (f[h] = []),
          c(s, r, f[h], m) && M.isArray(f[h]) && (f[h] = Rb(f[h])),
          !v)
    );
  }
  if (M.isFormData(u) && M.isFunction(u.entries)) {
    const s = {};
    return (
      M.forEachEntry(u, (r, f) => {
        c(xb(r), f, s, 0);
      }),
      s
    );
  }
  return null;
}
function Ob(u, c, s) {
  if (M.isString(u))
    try {
      return ((c || JSON.parse)(u), M.trim(u));
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (s || JSON.stringify)(u);
}
const Fa = {
  transitional: Wm,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (c, s) {
      const r = s.getContentType() || "",
        f = r.indexOf("application/json") > -1,
        m = M.isObject(c);
      if ((m && M.isHTMLForm(c) && (c = new FormData(c)), M.isFormData(c)))
        return f ? JSON.stringify(Pm(c)) : c;
      if (
        M.isArrayBuffer(c) ||
        M.isBuffer(c) ||
        M.isStream(c) ||
        M.isFile(c) ||
        M.isBlob(c) ||
        M.isReadableStream(c)
      )
        return c;
      if (M.isArrayBufferView(c)) return c.buffer;
      if (M.isURLSearchParams(c))
        return (
          s.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1,
          ),
          c.toString()
        );
      let v;
      if (m) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return Ab(c, this.formSerializer).toString();
        if ((v = M.isFileList(c)) || r.indexOf("multipart/form-data") > -1) {
          const b = this.env && this.env.FormData;
          return Oi(
            v ? { "files[]": c } : c,
            b && new b(),
            this.formSerializer,
          );
        }
      }
      return m || f ? (s.setContentType("application/json", !1), Ob(c)) : c;
    },
  ],
  transformResponse: [
    function (c) {
      const s = this.transitional || Fa.transitional,
        r = s && s.forcedJSONParsing,
        f = this.responseType === "json";
      if (M.isResponse(c) || M.isReadableStream(c)) return c;
      if (c && M.isString(c) && ((r && !this.responseType) || f)) {
        const h = !(s && s.silentJSONParsing) && f;
        try {
          return JSON.parse(c);
        } catch (v) {
          if (h)
            throw v.name === "SyntaxError"
              ? ut.from(v, ut.ERR_BAD_RESPONSE, this, null, this.response)
              : v;
        }
      }
      return c;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: ne.classes.FormData, Blob: ne.classes.Blob },
  validateStatus: function (c) {
    return c >= 200 && c < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
M.forEach(["delete", "get", "head", "post", "put", "patch"], (u) => {
  Fa.headers[u] = {};
});
const _b = M.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  Nb = (u) => {
    const c = {};
    let s, r, f;
    return (
      u &&
        u
          .split(
            `
`,
          )
          .forEach(function (h) {
            ((f = h.indexOf(":")),
              (s = h.substring(0, f).trim().toLowerCase()),
              (r = h.substring(f + 1).trim()),
              !(!s || (c[s] && _b[s])) &&
                (s === "set-cookie"
                  ? c[s]
                    ? c[s].push(r)
                    : (c[s] = [r])
                  : (c[s] = c[s] ? c[s] + ", " + r : r)));
          }),
      c
    );
  },
  Jh = Symbol("internals");
function Ja(u) {
  return u && String(u).trim().toLowerCase();
}
function mi(u) {
  return u === !1 || u == null ? u : M.isArray(u) ? u.map(mi) : String(u);
}
function Mb(u) {
  const c = Object.create(null),
    s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = s.exec(u)); ) c[r[1]] = r[2];
  return c;
}
const zb = (u) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(u.trim());
function ls(u, c, s, r, f) {
  if (M.isFunction(r)) return r.call(this, c, s);
  if ((f && (c = s), !!M.isString(c))) {
    if (M.isString(r)) return c.indexOf(r) !== -1;
    if (M.isRegExp(r)) return r.test(c);
  }
}
function Db(u) {
  return u
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (c, s, r) => s.toUpperCase() + r);
}
function Cb(u, c) {
  const s = M.toCamelCase(" " + c);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(u, r + s, {
      value: function (f, m, h) {
        return this[r].call(this, c, f, m, h);
      },
      configurable: !0,
    });
  });
}
let fe = class {
  constructor(c) {
    c && this.set(c);
  }
  set(c, s, r) {
    const f = this;
    function m(v, b, y) {
      const E = Ja(b);
      if (!E) throw new Error("header name must be a non-empty string");
      const N = M.findKey(f, E);
      (!N || f[N] === void 0 || y === !0 || (y === void 0 && f[N] !== !1)) &&
        (f[N || b] = mi(v));
    }
    const h = (v, b) => M.forEach(v, (y, E) => m(y, E, b));
    if (M.isPlainObject(c) || c instanceof this.constructor) h(c, s);
    else if (M.isString(c) && (c = c.trim()) && !zb(c)) h(Nb(c), s);
    else if (M.isHeaders(c)) for (const [v, b] of c.entries()) m(b, v, r);
    else c != null && m(s, c, r);
    return this;
  }
  get(c, s) {
    if (((c = Ja(c)), c)) {
      const r = M.findKey(this, c);
      if (r) {
        const f = this[r];
        if (!s) return f;
        if (s === !0) return Mb(f);
        if (M.isFunction(s)) return s.call(this, f, r);
        if (M.isRegExp(s)) return s.exec(f);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(c, s) {
    if (((c = Ja(c)), c)) {
      const r = M.findKey(this, c);
      return !!(r && this[r] !== void 0 && (!s || ls(this, this[r], r, s)));
    }
    return !1;
  }
  delete(c, s) {
    const r = this;
    let f = !1;
    function m(h) {
      if (((h = Ja(h)), h)) {
        const v = M.findKey(r, h);
        v && (!s || ls(r, r[v], v, s)) && (delete r[v], (f = !0));
      }
    }
    return (M.isArray(c) ? c.forEach(m) : m(c), f);
  }
  clear(c) {
    const s = Object.keys(this);
    let r = s.length,
      f = !1;
    for (; r--; ) {
      const m = s[r];
      (!c || ls(this, this[m], m, c, !0)) && (delete this[m], (f = !0));
    }
    return f;
  }
  normalize(c) {
    const s = this,
      r = {};
    return (
      M.forEach(this, (f, m) => {
        const h = M.findKey(r, m);
        if (h) {
          ((s[h] = mi(f)), delete s[m]);
          return;
        }
        const v = c ? Db(m) : String(m).trim();
        (v !== m && delete s[m], (s[v] = mi(f)), (r[v] = !0));
      }),
      this
    );
  }
  concat(...c) {
    return this.constructor.concat(this, ...c);
  }
  toJSON(c) {
    const s = Object.create(null);
    return (
      M.forEach(this, (r, f) => {
        r != null && r !== !1 && (s[f] = c && M.isArray(r) ? r.join(", ") : r);
      }),
      s
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([c, s]) => c + ": " + s).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(c) {
    return c instanceof this ? c : new this(c);
  }
  static concat(c, ...s) {
    const r = new this(c);
    return (s.forEach((f) => r.set(f)), r);
  }
  static accessor(c) {
    const r = (this[Jh] = this[Jh] = { accessors: {} }).accessors,
      f = this.prototype;
    function m(h) {
      const v = Ja(h);
      r[v] || (Cb(f, h), (r[v] = !0));
    }
    return (M.isArray(c) ? c.forEach(m) : m(c), this);
  }
};
fe.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
M.reduceDescriptors(fe.prototype, ({ value: u }, c) => {
  let s = c[0].toUpperCase() + c.slice(1);
  return {
    get: () => u,
    set(r) {
      this[s] = r;
    },
  };
});
M.freezeMethods(fe);
function ns(u, c) {
  const s = this || Fa,
    r = c || s,
    f = fe.from(r.headers);
  let m = r.data;
  return (
    M.forEach(u, function (v) {
      m = v.call(s, m, f.normalize(), c ? c.status : void 0);
    }),
    f.normalize(),
    m
  );
}
function Im(u) {
  return !!(u && u.__CANCEL__);
}
function Kn(u, c, s) {
  (ut.call(this, u ?? "canceled", ut.ERR_CANCELED, c, s),
    (this.name = "CanceledError"));
}
M.inherits(Kn, ut, { __CANCEL__: !0 });
function ty(u, c, s) {
  const r = s.config.validateStatus;
  !s.status || !r || r(s.status)
    ? u(s)
    : c(
        new ut(
          "Request failed with status code " + s.status,
          [ut.ERR_BAD_REQUEST, ut.ERR_BAD_RESPONSE][
            Math.floor(s.status / 100) - 4
          ],
          s.config,
          s.request,
          s,
        ),
      );
}
function wb(u) {
  const c = /^([-+\w]{1,25})(:?\/\/|:)/.exec(u);
  return (c && c[1]) || "";
}
function Ub(u, c) {
  u = u || 10;
  const s = new Array(u),
    r = new Array(u);
  let f = 0,
    m = 0,
    h;
  return (
    (c = c !== void 0 ? c : 1e3),
    function (b) {
      const y = Date.now(),
        E = r[m];
      (h || (h = y), (s[f] = b), (r[f] = y));
      let N = m,
        B = 0;
      for (; N !== f; ) ((B += s[N++]), (N = N % u));
      if (((f = (f + 1) % u), f === m && (m = (m + 1) % u), y - h < c)) return;
      const Y = E && y - E;
      return Y ? Math.round((B * 1e3) / Y) : void 0;
    }
  );
}
function jb(u, c) {
  let s = 0,
    r = 1e3 / c,
    f,
    m;
  const h = (y, E = Date.now()) => {
    ((s = E), (f = null), m && (clearTimeout(m), (m = null)), u.apply(null, y));
  };
  return [
    (...y) => {
      const E = Date.now(),
        N = E - s;
      N >= r
        ? h(y, E)
        : ((f = y),
          m ||
            (m = setTimeout(() => {
              ((m = null), h(f));
            }, r - N)));
    },
    () => f && h(f),
  ];
}
const bi = (u, c, s = 3) => {
    let r = 0;
    const f = Ub(50, 250);
    return jb((m) => {
      const h = m.loaded,
        v = m.lengthComputable ? m.total : void 0,
        b = h - r,
        y = f(b),
        E = h <= v;
      r = h;
      const N = {
        loaded: h,
        total: v,
        progress: v ? h / v : void 0,
        bytes: b,
        rate: y || void 0,
        estimated: y && v && E ? (v - h) / y : void 0,
        event: m,
        lengthComputable: v != null,
        [c ? "download" : "upload"]: !0,
      };
      u(N);
    }, s);
  },
  kh = (u, c) => {
    const s = u != null;
    return [(r) => c[0]({ lengthComputable: s, total: u, loaded: r }), c[1]];
  },
  $h =
    (u) =>
    (...c) =>
      M.asap(() => u(...c)),
  Bb = ne.hasStandardBrowserEnv
    ? ((u, c) => (s) => (
        (s = new URL(s, ne.origin)),
        u.protocol === s.protocol &&
          u.host === s.host &&
          (c || u.port === s.port)
      ))(
        new URL(ne.origin),
        ne.navigator && /(msie|trident)/i.test(ne.navigator.userAgent),
      )
    : () => !0,
  Hb = ne.hasStandardBrowserEnv
    ? {
        write(u, c, s, r, f, m) {
          const h = [u + "=" + encodeURIComponent(c)];
          (M.isNumber(s) && h.push("expires=" + new Date(s).toGMTString()),
            M.isString(r) && h.push("path=" + r),
            M.isString(f) && h.push("domain=" + f),
            m === !0 && h.push("secure"),
            (document.cookie = h.join("; ")));
        },
        read(u) {
          const c = document.cookie.match(
            new RegExp("(^|;\\s*)(" + u + ")=([^;]*)"),
          );
          return c ? decodeURIComponent(c[3]) : null;
        },
        remove(u) {
          this.write(u, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function qb(u) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(u);
}
function Lb(u, c) {
  return c ? u.replace(/\/?\/$/, "") + "/" + c.replace(/^\/+/, "") : u;
}
function ey(u, c, s) {
  let r = !qb(c);
  return u && (r || s == !1) ? Lb(u, c) : c;
}
const Fh = (u) => (u instanceof fe ? { ...u } : u);
function en(u, c) {
  c = c || {};
  const s = {};
  function r(y, E, N, B) {
    return M.isPlainObject(y) && M.isPlainObject(E)
      ? M.merge.call({ caseless: B }, y, E)
      : M.isPlainObject(E)
        ? M.merge({}, E)
        : M.isArray(E)
          ? E.slice()
          : E;
  }
  function f(y, E, N, B) {
    if (M.isUndefined(E)) {
      if (!M.isUndefined(y)) return r(void 0, y, N, B);
    } else return r(y, E, N, B);
  }
  function m(y, E) {
    if (!M.isUndefined(E)) return r(void 0, E);
  }
  function h(y, E) {
    if (M.isUndefined(E)) {
      if (!M.isUndefined(y)) return r(void 0, y);
    } else return r(void 0, E);
  }
  function v(y, E, N) {
    if (N in c) return r(y, E);
    if (N in u) return r(void 0, y);
  }
  const b = {
    url: m,
    method: m,
    data: m,
    baseURL: h,
    transformRequest: h,
    transformResponse: h,
    paramsSerializer: h,
    timeout: h,
    timeoutMessage: h,
    withCredentials: h,
    withXSRFToken: h,
    adapter: h,
    responseType: h,
    xsrfCookieName: h,
    xsrfHeaderName: h,
    onUploadProgress: h,
    onDownloadProgress: h,
    decompress: h,
    maxContentLength: h,
    maxBodyLength: h,
    beforeRedirect: h,
    transport: h,
    httpAgent: h,
    httpsAgent: h,
    cancelToken: h,
    socketPath: h,
    responseEncoding: h,
    validateStatus: v,
    headers: (y, E, N) => f(Fh(y), Fh(E), N, !0),
  };
  return (
    M.forEach(Object.keys(Object.assign({}, u, c)), function (E) {
      const N = b[E] || f,
        B = N(u[E], c[E], E);
      (M.isUndefined(B) && N !== v) || (s[E] = B);
    }),
    s
  );
}
const ly = (u) => {
    const c = en({}, u);
    let {
      data: s,
      withXSRFToken: r,
      xsrfHeaderName: f,
      xsrfCookieName: m,
      headers: h,
      auth: v,
    } = c;
    ((c.headers = h = fe.from(h)),
      (c.url = Fm(
        ey(c.baseURL, c.url, c.allowAbsoluteUrls),
        u.params,
        u.paramsSerializer,
      )),
      v &&
        h.set(
          "Authorization",
          "Basic " +
            btoa(
              (v.username || "") +
                ":" +
                (v.password ? unescape(encodeURIComponent(v.password)) : ""),
            ),
        ));
    let b;
    if (M.isFormData(s)) {
      if (ne.hasStandardBrowserEnv || ne.hasStandardBrowserWebWorkerEnv)
        h.setContentType(void 0);
      else if ((b = h.getContentType()) !== !1) {
        const [y, ...E] = b
          ? b
              .split(";")
              .map((N) => N.trim())
              .filter(Boolean)
          : [];
        h.setContentType([y || "multipart/form-data", ...E].join("; "));
      }
    }
    if (
      ne.hasStandardBrowserEnv &&
      (r && M.isFunction(r) && (r = r(c)), r || (r !== !1 && Bb(c.url)))
    ) {
      const y = f && m && Hb.read(m);
      y && h.set(f, y);
    }
    return c;
  },
  Gb = typeof XMLHttpRequest < "u",
  Yb =
    Gb &&
    function (u) {
      return new Promise(function (s, r) {
        const f = ly(u);
        let m = f.data;
        const h = fe.from(f.headers).normalize();
        let { responseType: v, onUploadProgress: b, onDownloadProgress: y } = f,
          E,
          N,
          B,
          Y,
          z;
        function H() {
          (Y && Y(),
            z && z(),
            f.cancelToken && f.cancelToken.unsubscribe(E),
            f.signal && f.signal.removeEventListener("abort", E));
        }
        let q = new XMLHttpRequest();
        (q.open(f.method.toUpperCase(), f.url, !0), (q.timeout = f.timeout));
        function k() {
          if (!q) return;
          const tt = fe.from(
              "getAllResponseHeaders" in q && q.getAllResponseHeaders(),
            ),
            Z = {
              data:
                !v || v === "text" || v === "json"
                  ? q.responseText
                  : q.response,
              status: q.status,
              statusText: q.statusText,
              headers: tt,
              config: u,
              request: q,
            };
          (ty(
            function (st) {
              (s(st), H());
            },
            function (st) {
              (r(st), H());
            },
            Z,
          ),
            (q = null));
        }
        ("onloadend" in q
          ? (q.onloadend = k)
          : (q.onreadystatechange = function () {
              !q ||
                q.readyState !== 4 ||
                (q.status === 0 &&
                  !(q.responseURL && q.responseURL.indexOf("file:") === 0)) ||
                setTimeout(k);
            }),
          (q.onabort = function () {
            q &&
              (r(new ut("Request aborted", ut.ECONNABORTED, u, q)), (q = null));
          }),
          (q.onerror = function () {
            (r(new ut("Network Error", ut.ERR_NETWORK, u, q)), (q = null));
          }),
          (q.ontimeout = function () {
            let ft = f.timeout
              ? "timeout of " + f.timeout + "ms exceeded"
              : "timeout exceeded";
            const Z = f.transitional || Wm;
            (f.timeoutErrorMessage && (ft = f.timeoutErrorMessage),
              r(
                new ut(
                  ft,
                  Z.clarifyTimeoutError ? ut.ETIMEDOUT : ut.ECONNABORTED,
                  u,
                  q,
                ),
              ),
              (q = null));
          }),
          m === void 0 && h.setContentType(null),
          "setRequestHeader" in q &&
            M.forEach(h.toJSON(), function (ft, Z) {
              q.setRequestHeader(Z, ft);
            }),
          M.isUndefined(f.withCredentials) ||
            (q.withCredentials = !!f.withCredentials),
          v && v !== "json" && (q.responseType = f.responseType),
          y && (([B, z] = bi(y, !0)), q.addEventListener("progress", B)),
          b &&
            q.upload &&
            (([N, Y] = bi(b)),
            q.upload.addEventListener("progress", N),
            q.upload.addEventListener("loadend", Y)),
          (f.cancelToken || f.signal) &&
            ((E = (tt) => {
              q &&
                (r(!tt || tt.type ? new Kn(null, u, q) : tt),
                q.abort(),
                (q = null));
            }),
            f.cancelToken && f.cancelToken.subscribe(E),
            f.signal &&
              (f.signal.aborted
                ? E()
                : f.signal.addEventListener("abort", E))));
        const P = wb(f.url);
        if (P && ne.protocols.indexOf(P) === -1) {
          r(new ut("Unsupported protocol " + P + ":", ut.ERR_BAD_REQUEST, u));
          return;
        }
        q.send(m || null);
      });
    },
  Xb = (u, c) => {
    const { length: s } = (u = u ? u.filter(Boolean) : []);
    if (c || s) {
      let r = new AbortController(),
        f;
      const m = function (y) {
        if (!f) {
          ((f = !0), v());
          const E = y instanceof Error ? y : this.reason;
          r.abort(
            E instanceof ut ? E : new Kn(E instanceof Error ? E.message : E),
          );
        }
      };
      let h =
        c &&
        setTimeout(() => {
          ((h = null), m(new ut(`timeout ${c} of ms exceeded`, ut.ETIMEDOUT)));
        }, c);
      const v = () => {
        u &&
          (h && clearTimeout(h),
          (h = null),
          u.forEach((y) => {
            y.unsubscribe
              ? y.unsubscribe(m)
              : y.removeEventListener("abort", m);
          }),
          (u = null));
      };
      u.forEach((y) => y.addEventListener("abort", m));
      const { signal: b } = r;
      return ((b.unsubscribe = () => M.asap(v)), b);
    }
  },
  Vb = function* (u, c) {
    let s = u.byteLength;
    if (s < c) {
      yield u;
      return;
    }
    let r = 0,
      f;
    for (; r < s; ) ((f = r + c), yield u.slice(r, f), (r = f));
  },
  Qb = async function* (u, c) {
    for await (const s of Zb(u)) yield* Vb(s, c);
  },
  Zb = async function* (u) {
    if (u[Symbol.asyncIterator]) {
      yield* u;
      return;
    }
    const c = u.getReader();
    try {
      for (;;) {
        const { done: s, value: r } = await c.read();
        if (s) break;
        yield r;
      }
    } finally {
      await c.cancel();
    }
  },
  Wh = (u, c, s, r) => {
    const f = Qb(u, c);
    let m = 0,
      h,
      v = (b) => {
        h || ((h = !0), r && r(b));
      };
    return new ReadableStream(
      {
        async pull(b) {
          try {
            const { done: y, value: E } = await f.next();
            if (y) {
              (v(), b.close());
              return;
            }
            let N = E.byteLength;
            if (s) {
              let B = (m += N);
              s(B);
            }
            b.enqueue(new Uint8Array(E));
          } catch (y) {
            throw (v(y), y);
          }
        },
        cancel(b) {
          return (v(b), f.return());
        },
      },
      { highWaterMark: 2 },
    );
  },
  _i =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  ny = _i && typeof ReadableStream == "function",
  Kb =
    _i &&
    (typeof TextEncoder == "function"
      ? (
          (u) => (c) =>
            u.encode(c)
        )(new TextEncoder())
      : async (u) => new Uint8Array(await new Response(u).arrayBuffer())),
  ay = (u, ...c) => {
    try {
      return !!u(...c);
    } catch {
      return !1;
    }
  },
  Jb =
    ny &&
    ay(() => {
      let u = !1;
      const c = new Request(ne.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return ((u = !0), "half");
        },
      }).headers.has("Content-Type");
      return u && !c;
    }),
  Ph = 64 * 1024,
  ms = ny && ay(() => M.isReadableStream(new Response("").body)),
  Si = { stream: ms && ((u) => u.body) };
_i &&
  ((u) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((c) => {
      !Si[c] &&
        (Si[c] = M.isFunction(u[c])
          ? (s) => s[c]()
          : (s, r) => {
              throw new ut(
                `Response type '${c}' is not supported`,
                ut.ERR_NOT_SUPPORT,
                r,
              );
            });
    });
  })(new Response());
const kb = async (u) => {
    if (u == null) return 0;
    if (M.isBlob(u)) return u.size;
    if (M.isSpecCompliantForm(u))
      return (
        await new Request(ne.origin, { method: "POST", body: u }).arrayBuffer()
      ).byteLength;
    if (M.isArrayBufferView(u) || M.isArrayBuffer(u)) return u.byteLength;
    if ((M.isURLSearchParams(u) && (u = u + ""), M.isString(u)))
      return (await Kb(u)).byteLength;
  },
  $b = async (u, c) => {
    const s = M.toFiniteNumber(u.getContentLength());
    return s ?? kb(c);
  },
  Fb =
    _i &&
    (async (u) => {
      let {
        url: c,
        method: s,
        data: r,
        signal: f,
        cancelToken: m,
        timeout: h,
        onDownloadProgress: v,
        onUploadProgress: b,
        responseType: y,
        headers: E,
        withCredentials: N = "same-origin",
        fetchOptions: B,
      } = ly(u);
      y = y ? (y + "").toLowerCase() : "text";
      let Y = Xb([f, m && m.toAbortSignal()], h),
        z;
      const H =
        Y &&
        Y.unsubscribe &&
        (() => {
          Y.unsubscribe();
        });
      let q;
      try {
        if (
          b &&
          Jb &&
          s !== "get" &&
          s !== "head" &&
          (q = await $b(E, r)) !== 0
        ) {
          let Z = new Request(c, { method: "POST", body: r, duplex: "half" }),
            X;
          if (
            (M.isFormData(r) &&
              (X = Z.headers.get("content-type")) &&
              E.setContentType(X),
            Z.body)
          ) {
            const [st, it] = kh(q, bi($h(b)));
            r = Wh(Z.body, Ph, st, it);
          }
        }
        M.isString(N) || (N = N ? "include" : "omit");
        const k = "credentials" in Request.prototype;
        z = new Request(c, {
          ...B,
          signal: Y,
          method: s.toUpperCase(),
          headers: E.normalize().toJSON(),
          body: r,
          duplex: "half",
          credentials: k ? N : void 0,
        });
        let P = await fetch(z);
        const tt = ms && (y === "stream" || y === "response");
        if (ms && (v || (tt && H))) {
          const Z = {};
          ["status", "statusText", "headers"].forEach((Tt) => {
            Z[Tt] = P[Tt];
          });
          const X = M.toFiniteNumber(P.headers.get("content-length")),
            [st, it] = (v && kh(X, bi($h(v), !0))) || [];
          P = new Response(
            Wh(P.body, Ph, st, () => {
              (it && it(), H && H());
            }),
            Z,
          );
        }
        y = y || "text";
        let ft = await Si[M.findKey(Si, y) || "text"](P, u);
        return (
          !tt && H && H(),
          await new Promise((Z, X) => {
            ty(Z, X, {
              data: ft,
              headers: fe.from(P.headers),
              status: P.status,
              statusText: P.statusText,
              config: u,
              request: z,
            });
          })
        );
      } catch (k) {
        throw (
          H && H(),
          k && k.name === "TypeError" && /fetch/i.test(k.message)
            ? Object.assign(new ut("Network Error", ut.ERR_NETWORK, u, z), {
                cause: k.cause || k,
              })
            : ut.from(k, k && k.code, u, z)
        );
      }
    }),
  ys = { http: fb, xhr: Yb, fetch: Fb };
M.forEach(ys, (u, c) => {
  if (u) {
    try {
      Object.defineProperty(u, "name", { value: c });
    } catch {}
    Object.defineProperty(u, "adapterName", { value: c });
  }
});
const Ih = (u) => `- ${u}`,
  Wb = (u) => M.isFunction(u) || u === null || u === !1,
  uy = {
    getAdapter: (u) => {
      u = M.isArray(u) ? u : [u];
      const { length: c } = u;
      let s, r;
      const f = {};
      for (let m = 0; m < c; m++) {
        s = u[m];
        let h;
        if (
          ((r = s),
          !Wb(s) && ((r = ys[(h = String(s)).toLowerCase()]), r === void 0))
        )
          throw new ut(`Unknown adapter '${h}'`);
        if (r) break;
        f[h || "#" + m] = r;
      }
      if (!r) {
        const m = Object.entries(f).map(
          ([v, b]) =>
            `adapter ${v} ` +
            (b === !1
              ? "is not supported by the environment"
              : "is not available in the build"),
        );
        let h = c
          ? m.length > 1
            ? `since :
` +
              m.map(Ih).join(`
`)
            : " " + Ih(m[0])
          : "as no adapter specified";
        throw new ut(
          "There is no suitable adapter to dispatch the request " + h,
          "ERR_NOT_SUPPORT",
        );
      }
      return r;
    },
    adapters: ys,
  };
function as(u) {
  if (
    (u.cancelToken && u.cancelToken.throwIfRequested(),
    u.signal && u.signal.aborted)
  )
    throw new Kn(null, u);
}
function tm(u) {
  return (
    as(u),
    (u.headers = fe.from(u.headers)),
    (u.data = ns.call(u, u.transformRequest)),
    ["post", "put", "patch"].indexOf(u.method) !== -1 &&
      u.headers.setContentType("application/x-www-form-urlencoded", !1),
    uy
      .getAdapter(u.adapter || Fa.adapter)(u)
      .then(
        function (r) {
          return (
            as(u),
            (r.data = ns.call(u, u.transformResponse, r)),
            (r.headers = fe.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            Im(r) ||
              (as(u),
              r &&
                r.response &&
                ((r.response.data = ns.call(
                  u,
                  u.transformResponse,
                  r.response,
                )),
                (r.response.headers = fe.from(r.response.headers)))),
            Promise.reject(r)
          );
        },
      )
  );
}
const iy = "1.8.4",
  Ni = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (u, c) => {
    Ni[u] = function (r) {
      return typeof r === u || "a" + (c < 1 ? "n " : " ") + u;
    };
  },
);
const em = {};
Ni.transitional = function (c, s, r) {
  function f(m, h) {
    return (
      "[Axios v" +
      iy +
      "] Transitional option '" +
      m +
      "'" +
      h +
      (r ? ". " + r : "")
    );
  }
  return (m, h, v) => {
    if (c === !1)
      throw new ut(
        f(h, " has been removed" + (s ? " in " + s : "")),
        ut.ERR_DEPRECATED,
      );
    return (
      s &&
        !em[h] &&
        ((em[h] = !0),
        console.warn(
          f(
            h,
            " has been deprecated since v" +
              s +
              " and will be removed in the near future",
          ),
        )),
      c ? c(m, h, v) : !0
    );
  };
};
Ni.spelling = function (c) {
  return (s, r) => (console.warn(`${r} is likely a misspelling of ${c}`), !0);
};
function Pb(u, c, s) {
  if (typeof u != "object")
    throw new ut("options must be an object", ut.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(u);
  let f = r.length;
  for (; f-- > 0; ) {
    const m = r[f],
      h = c[m];
    if (h) {
      const v = u[m],
        b = v === void 0 || h(v, m, u);
      if (b !== !0)
        throw new ut("option " + m + " must be " + b, ut.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (s !== !0) throw new ut("Unknown option " + m, ut.ERR_BAD_OPTION);
  }
}
const yi = { assertOptions: Pb, validators: Ni },
  Ye = yi.validators;
let tn = class {
  constructor(c) {
    ((this.defaults = c),
      (this.interceptors = { request: new Kh(), response: new Kh() }));
  }
  async request(c, s) {
    try {
      return await this._request(c, s);
    } catch (r) {
      if (r instanceof Error) {
        let f = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(f)
          : (f = new Error());
        const m = f.stack ? f.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? m &&
              !String(r.stack).endsWith(m.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + m)
            : (r.stack = m);
        } catch {}
      }
      throw r;
    }
  }
  _request(c, s) {
    (typeof c == "string" ? ((s = s || {}), (s.url = c)) : (s = c || {}),
      (s = en(this.defaults, s)));
    const { transitional: r, paramsSerializer: f, headers: m } = s;
    (r !== void 0 &&
      yi.assertOptions(
        r,
        {
          silentJSONParsing: Ye.transitional(Ye.boolean),
          forcedJSONParsing: Ye.transitional(Ye.boolean),
          clarifyTimeoutError: Ye.transitional(Ye.boolean),
        },
        !1,
      ),
      f != null &&
        (M.isFunction(f)
          ? (s.paramsSerializer = { serialize: f })
          : yi.assertOptions(
              f,
              { encode: Ye.function, serialize: Ye.function },
              !0,
            )),
      s.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (s.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (s.allowAbsoluteUrls = !0)),
      yi.assertOptions(
        s,
        {
          baseUrl: Ye.spelling("baseURL"),
          withXsrfToken: Ye.spelling("withXSRFToken"),
        },
        !0,
      ),
      (s.method = (s.method || this.defaults.method || "get").toLowerCase()));
    let h = m && M.merge(m.common, m[s.method]);
    (m &&
      M.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (z) => {
          delete m[z];
        },
      ),
      (s.headers = fe.concat(h, m)));
    const v = [];
    let b = !0;
    this.interceptors.request.forEach(function (H) {
      (typeof H.runWhen == "function" && H.runWhen(s) === !1) ||
        ((b = b && H.synchronous), v.unshift(H.fulfilled, H.rejected));
    });
    const y = [];
    this.interceptors.response.forEach(function (H) {
      y.push(H.fulfilled, H.rejected);
    });
    let E,
      N = 0,
      B;
    if (!b) {
      const z = [tm.bind(this), void 0];
      for (
        z.unshift.apply(z, v),
          z.push.apply(z, y),
          B = z.length,
          E = Promise.resolve(s);
        N < B;
      )
        E = E.then(z[N++], z[N++]);
      return E;
    }
    B = v.length;
    let Y = s;
    for (N = 0; N < B; ) {
      const z = v[N++],
        H = v[N++];
      try {
        Y = z(Y);
      } catch (q) {
        H.call(this, q);
        break;
      }
    }
    try {
      E = tm.call(this, Y);
    } catch (z) {
      return Promise.reject(z);
    }
    for (N = 0, B = y.length; N < B; ) E = E.then(y[N++], y[N++]);
    return E;
  }
  getUri(c) {
    c = en(this.defaults, c);
    const s = ey(c.baseURL, c.url, c.allowAbsoluteUrls);
    return Fm(s, c.params, c.paramsSerializer);
  }
};
M.forEach(["delete", "get", "head", "options"], function (c) {
  tn.prototype[c] = function (s, r) {
    return this.request(
      en(r || {}, { method: c, url: s, data: (r || {}).data }),
    );
  };
});
M.forEach(["post", "put", "patch"], function (c) {
  function s(r) {
    return function (m, h, v) {
      return this.request(
        en(v || {}, {
          method: c,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: m,
          data: h,
        }),
      );
    };
  }
  ((tn.prototype[c] = s()), (tn.prototype[c + "Form"] = s(!0)));
});
let Ib = class cy {
  constructor(c) {
    if (typeof c != "function")
      throw new TypeError("executor must be a function.");
    let s;
    this.promise = new Promise(function (m) {
      s = m;
    });
    const r = this;
    (this.promise.then((f) => {
      if (!r._listeners) return;
      let m = r._listeners.length;
      for (; m-- > 0; ) r._listeners[m](f);
      r._listeners = null;
    }),
      (this.promise.then = (f) => {
        let m;
        const h = new Promise((v) => {
          (r.subscribe(v), (m = v));
        }).then(f);
        return (
          (h.cancel = function () {
            r.unsubscribe(m);
          }),
          h
        );
      }),
      c(function (m, h, v) {
        r.reason || ((r.reason = new Kn(m, h, v)), s(r.reason));
      }));
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(c) {
    if (this.reason) {
      c(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(c) : (this._listeners = [c]);
  }
  unsubscribe(c) {
    if (!this._listeners) return;
    const s = this._listeners.indexOf(c);
    s !== -1 && this._listeners.splice(s, 1);
  }
  toAbortSignal() {
    const c = new AbortController(),
      s = (r) => {
        c.abort(r);
      };
    return (
      this.subscribe(s),
      (c.signal.unsubscribe = () => this.unsubscribe(s)),
      c.signal
    );
  }
  static source() {
    let c;
    return {
      token: new cy(function (f) {
        c = f;
      }),
      cancel: c,
    };
  }
};
function t1(u) {
  return function (s) {
    return u.apply(null, s);
  };
}
function e1(u) {
  return M.isObject(u) && u.isAxiosError === !0;
}
const ps = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(ps).forEach(([u, c]) => {
  ps[c] = u;
});
function ry(u) {
  const c = new tn(u),
    s = Lm(tn.prototype.request, c);
  return (
    M.extend(s, tn.prototype, c, { allOwnKeys: !0 }),
    M.extend(s, c, null, { allOwnKeys: !0 }),
    (s.create = function (f) {
      return ry(en(u, f));
    }),
    s
  );
}
const Ct = ry(Fa);
Ct.Axios = tn;
Ct.CanceledError = Kn;
Ct.CancelToken = Ib;
Ct.isCancel = Im;
Ct.VERSION = iy;
Ct.toFormData = Oi;
Ct.AxiosError = ut;
Ct.Cancel = Ct.CanceledError;
Ct.all = function (c) {
  return Promise.all(c);
};
Ct.spread = t1;
Ct.isAxiosError = e1;
Ct.mergeConfig = en;
Ct.AxiosHeaders = fe;
Ct.formToJSON = (u) => Pm(M.isHTMLForm(u) ? new FormData(u) : u);
Ct.getAdapter = uy.getAdapter;
Ct.HttpStatusCode = ps;
Ct.default = Ct;
const {
  Axios: c1,
  AxiosError: r1,
  CanceledError: s1,
  isCancel: o1,
  CancelToken: f1,
  VERSION: d1,
  all: h1,
  Cancel: m1,
  isAxiosError: y1,
  spread: p1,
  toFormData: g1,
  AxiosHeaders: v1,
  HttpStatusCode: b1,
  formToJSON: S1,
  getAdapter: E1,
  mergeConfig: T1,
} = Ct;
function l1() {
  const [u, c] = V.useState([]),
    [s, r] = V.useState(!0),
    f = async () =>
      (await chrome.runtime.sendMessage({ action: "getCookies" })).cookies.find(
        (N) => N.name == "access_token_ns_student_web",
      ).value,
    m = async (y) => {
      let E = await f();
      var N = [];
      let B = 0;
      const Y = [
        "bg-blue-500",
        "bg-green-500",
        "bg-purple-500",
        "bg-red-500",
        "bg-yellow-500",
        "bg-pink-500",
        "bg-orange-500",
        "bg-teal-500",
        "bg-indigo-500",
        "bg-cyan-500",
      ];
      let z = [];
      for (const H in y) {
        const q = y[H];
        let k = 0,
          P = 0,
          tt = 0,
          ft = 0;
        for (const it of q.main)
          try {
            const { data: Tt } = await Ct.get(
              `https://my.newtonschool.co/api/v2/course/h/${it.hash}/self_performance`,
              { headers: { Authorization: `Bearer ${E}` } },
            );
            ((k += Tt.total_lectures_attended || 0),
              (P += Tt.total_lectures || 0));
          } catch (Tt) {
            console.error(
              `Error fetching main course data for ${it.short_display_name}:`,
              Tt,
            );
          }
        for (const it of q.lab)
          try {
            const { data: Tt } = await Ct.get(
              `https://my.newtonschool.co/api/v2/course/h/${it.hash}/self_performance`,
              { headers: { Authorization: `Bearer ${E}` } },
            );
            ((tt += Tt.total_lectures_attended || 0),
              (ft += Tt.total_lectures || 0));
          } catch (Tt) {
            console.error(
              `Error fetching lab course data for ${it.short_display_name}:`,
              Tt,
            );
          }
        let Z = Y[Math.floor(Math.random() * Y.length)];
        for (; z.includes(Z); ) Z = Y[Math.floor(Math.random() * Y.length)];
        z.push(Z);
        const X = k + tt,
          st = P + ft;
        (N.push({
          id: B,
          name: H,
          total: st,
          attended: X,
          futureClasses: Math.abs(st - 53),
          color: Z,
        }),
          B++);
      }
      (c(N), r(!1));
    },
    h = async (y) => {
      y = y.filter((B) => B.title.includes("Newton School of Technology"));
      let E = [...new Set(y.map((B) => B.short_display_name.split(" ")[0]))],
        N = {};
      for (const B in E) {
        let Y = y.filter(
            (H) =>
              H.short_display_name.split(" ")[0] === E[B] &&
              !H.short_display_name.includes("Lab") &&
              !H.short_display_name.includes("Tut"),
          ),
          z = y.filter(
            (H) =>
              (H.short_display_name.includes("Lab") ||
                H.short_display_name.includes("Tut")) &&
              H.short_display_name.includes(E[B]),
          );
        N[E[B]] = { main: Y, lab: z };
      }
      (console.log(N), m(N));
    },
    v = async (y) => {
      let E = await f();
      try {
        var { data: N } = await Ct.get(
          `https://my.newtonschool.co/api/v2/course/h/${y}/learning_course/all/?pagination=false`,
          { headers: { Authorization: `Bearer ${E}` } },
        );
        h(N);
      } catch (B) {
        alert(B);
      }
    },
    b = () => {
      chrome.tabs.query({ active: !0, currentWindow: !0 }, (y) => {
        if (y.length === 0 || !y[0].url) {
          alert("No active tab or tab URL is undefined.");
          return;
        }
        const E = y[0];
        if (!E.url || !E.url.startsWith("https://my.newtonschool.co/course/"))
          if (E.url.startsWith("https://my.newtonschool.co/dashboard")) {
            alert("Please Select a NST course first, then Open Extension");
            return;
          } else {
            (alert("Please Select a NST course first, then Open Extension"),
              window.open("https://my.newtonschool.co/dashboard"));
            return;
          }
        chrome.scripting
          .executeScript({
            target: { tabId: E.id },
            function: v(E.url.split("/")[4]),
          })
          .catch((N) => console.error("Execution error:", N));
      });
    };
  return (
    V.useEffect(() => {
      b();
    }, []),
    U.jsx(Ov, { AttandanceData: u, isLoading: s })
  );
}
Xp.createRoot(document.getElementById("root")).render(
  U.jsx(al.StrictMode, { children: U.jsx(l1, {}) }),
);
