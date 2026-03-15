import * as ee from "react";
import te, { useState as c, useEffect as ne } from "react";
var P = { exports: {} }, g = {};
var B;
function oe() {
  if (B) return g;
  B = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), d = /* @__PURE__ */ Symbol.for("react.fragment");
  function m(E, a, s) {
    var R = null;
    if (s !== void 0 && (R = "" + s), a.key !== void 0 && (R = "" + a.key), "key" in a) {
      s = {};
      for (var p in a)
        p !== "key" && (s[p] = a[p]);
    } else s = a;
    return a = s.ref, {
      $$typeof: i,
      type: E,
      key: R,
      ref: a !== void 0 ? a : null,
      props: s
    };
  }
  return g.Fragment = d, g.jsx = m, g.jsxs = m, g;
}
var O = {};
var H;
function ae() {
  return H || (H = 1, process.env.NODE_ENV !== "production" && (function() {
    function i(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === _ ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case T:
          return "Fragment";
        case I:
          return "Profiler";
        case M:
          return "StrictMode";
        case J:
          return "Suspense";
        case V:
          return "SuspenseList";
        case f:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case D:
            return "Portal";
          case W:
            return e.displayName || "Context";
          case L:
            return (e._context.displayName || "Context") + ".Consumer";
          case U:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case w:
            return r = e.displayName || null, r !== null ? r : i(e.type) || "Memo";
          case y:
            r = e._payload, e = e._init;
            try {
              return i(e(r));
            } catch {
            }
        }
      return null;
    }
    function d(e) {
      return "" + e;
    }
    function m(e) {
      try {
        d(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), d(e);
      }
    }
    function E(e) {
      if (e === T) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === y)
        return "<...>";
      try {
        var r = i(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var e = h.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function R(e) {
      if (x.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function p(e, r) {
      function t() {
        A || (A = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function F() {
      var e = i(this.type);
      return z[e] || (z[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function S(e, r, t, n, C, q) {
      var o = t.ref;
      return e = {
        $$typeof: u,
        type: e,
        key: r,
        props: t,
        _owner: n
      }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: F
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: C
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: q
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function j(e, r, t, n, C, q) {
      var o = r.children;
      if (o !== void 0)
        if (n)
          if (Y(o)) {
            for (n = 0; n < o.length; n++)
              N(o[n]);
            Object.freeze && Object.freeze(o);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else N(o);
      if (x.call(r, "key")) {
        o = i(e);
        var v = Object.keys(r).filter(function(re) {
          return re !== "key";
        });
        n = 0 < v.length ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}", Q[o + n] || (v = 0 < v.length ? "{" + v.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          o,
          v,
          o
        ), Q[o + n] = !0);
      }
      if (o = null, t !== void 0 && (m(t), o = "" + t), R(r) && (m(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var $ in r)
          $ !== "key" && (t[$] = r[$]);
      } else t = r;
      return o && p(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), S(
        e,
        o,
        t,
        a(),
        C,
        q
      );
    }
    function N(e) {
      l(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === y && (e._payload.status === "fulfilled" ? l(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function l(e) {
      return typeof e == "object" && e !== null && e.$$typeof === u;
    }
    var b = te, u = /* @__PURE__ */ Symbol.for("react.transitional.element"), D = /* @__PURE__ */ Symbol.for("react.portal"), T = /* @__PURE__ */ Symbol.for("react.fragment"), M = /* @__PURE__ */ Symbol.for("react.strict_mode"), I = /* @__PURE__ */ Symbol.for("react.profiler"), L = /* @__PURE__ */ Symbol.for("react.consumer"), W = /* @__PURE__ */ Symbol.for("react.context"), U = /* @__PURE__ */ Symbol.for("react.forward_ref"), J = /* @__PURE__ */ Symbol.for("react.suspense"), V = /* @__PURE__ */ Symbol.for("react.suspense_list"), w = /* @__PURE__ */ Symbol.for("react.memo"), y = /* @__PURE__ */ Symbol.for("react.lazy"), f = /* @__PURE__ */ Symbol.for("react.activity"), _ = /* @__PURE__ */ Symbol.for("react.client.reference"), h = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, x = Object.prototype.hasOwnProperty, Y = Array.isArray, k = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var A, z = {}, G = b.react_stack_bottom_frame.bind(
      b,
      s
    )(), X = k(E(s)), Q = {};
    O.Fragment = T, O.jsx = function(e, r, t) {
      var n = 1e4 > h.recentlyCreatedOwnerStacks++;
      return j(
        e,
        r,
        t,
        !1,
        n ? Error("react-stack-top-frame") : G,
        n ? k(E(e)) : X
      );
    }, O.jsxs = function(e, r, t) {
      var n = 1e4 > h.recentlyCreatedOwnerStacks++;
      return j(
        e,
        r,
        t,
        !0,
        n ? Error("react-stack-top-frame") : G,
        n ? k(E(e)) : X
      );
    };
  })()), O;
}
var Z;
function se() {
  return Z || (Z = 1, process.env.NODE_ENV === "production" ? P.exports = oe() : P.exports = ae()), P.exports;
}
se();
var ce = ee.createContext(
  void 0
), le = (i) => {
  const d = ee.useContext(ce);
  if (!d)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return d;
};
const K = "http://localhost:3000", ie = () => {
  const [i, d] = c(!1), [m, E] = c("interceptors"), [a, s] = c([]), [R, p] = c([]), [F, S] = c(!1), [j, N] = c(!1), [l, b] = c(null), [u, D] = c(null), [T, M] = c(""), [I, L] = c(""), [W, U] = c({}), [J, V] = c(!1);
  (() => {
    if (!l || !u) return !1;
    const f = (l.method || "ANY") !== (u.method || "ANY"), _ = l.path !== u.path, h = !!l.isRegex != !!u.isRegex, x = l.response.status !== u.response.status, Y = (l.response.delayMs || 0) !== (u.response.delayMs || 0), k = T !== I, A = JSON.stringify(l.querykey || []) !== JSON.stringify(u.querykey || []);
    return f || _ || h || x || Y || k || A;
  })(), le();
  const w = async () => {
    try {
      const _ = await (await fetch(`${K}/__interceptors`)).json();
      s(_), S(!0);
    } catch {
      S(!1);
    }
  }, y = async () => {
    try {
      const _ = await (await fetch(`${K}/__requests`)).json();
      p(_.reverse());
    } catch (f) {
      console.debug("debug:loadRequests", f);
    }
  };
  return ne(() => {
    w();
    const f = setInterval(() => {
      w(), m === "requests" && y();
    }, 2e3);
    return () => clearInterval(f);
  }, [m]), null;
};
export {
  ie as DevProxyWidget
};
