import re, { useState as c, useEffect as te } from "react";
import { useQueryClient as ne } from "@tanstack/react-query";
var j = { exports: {} }, g = {};
var H;
function ae() {
  if (H) return g;
  H = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), b = /* @__PURE__ */ Symbol.for("react.fragment");
  function d(_, o, s) {
    var E = null;
    if (s !== void 0 && (E = "" + s), o.key !== void 0 && (E = "" + o.key), "key" in o) {
      s = {};
      for (var m in o)
        m !== "key" && (s[m] = o[m]);
    } else s = o;
    return o = s.ref, {
      $$typeof: f,
      type: _,
      key: E,
      ref: o !== void 0 ? o : null,
      props: s
    };
  }
  return g.Fragment = b, g.jsx = d, g.jsxs = d, g;
}
var O = {};
var Q;
function oe() {
  return Q || (Q = 1, process.env.NODE_ENV !== "production" && (function() {
    function f(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === p ? null : e.displayName || e.name || null;
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
        case i:
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
            return r = e.displayName || null, r !== null ? r : f(e.type) || "Memo";
          case y:
            r = e._payload, e = e._init;
            try {
              return f(e(r));
            } catch {
            }
        }
      return null;
    }
    function b(e) {
      return "" + e;
    }
    function d(e) {
      try {
        b(e);
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
        ), b(e);
      }
    }
    function _(e) {
      if (e === T) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === y)
        return "<...>";
      try {
        var r = f(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var e = h.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function E(e) {
      if (A.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function m(e, r) {
      function t() {
        x || (x = !0, console.error(
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
      var e = f(this.type);
      return z[e] || (z[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function S(e, r, t, n, P, $) {
      var a = t.ref;
      return e = {
        $$typeof: u,
        type: e,
        key: r,
        props: t,
        _owner: n
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
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
        value: P
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: $
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function C(e, r, t, n, P, $) {
      var a = r.children;
      if (a !== void 0)
        if (n)
          if (Y(a)) {
            for (n = 0; n < a.length; n++)
              N(a[n]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else N(a);
      if (A.call(r, "key")) {
        a = f(e);
        var R = Object.keys(r).filter(function(ee) {
          return ee !== "key";
        });
        n = 0 < R.length ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}", B[a + n] || (R = 0 < R.length ? "{" + R.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          a,
          R,
          a
        ), B[a + n] = !0);
      }
      if (a = null, t !== void 0 && (d(t), a = "" + t), E(r) && (d(r.key), a = "" + r.key), "key" in r) {
        t = {};
        for (var q in r)
          q !== "key" && (t[q] = r[q]);
      } else t = r;
      return a && m(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), S(
        e,
        a,
        t,
        o(),
        P,
        $
      );
    }
    function N(e) {
      l(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === y && (e._payload.status === "fulfilled" ? l(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function l(e) {
      return typeof e == "object" && e !== null && e.$$typeof === u;
    }
    var v = re, u = /* @__PURE__ */ Symbol.for("react.transitional.element"), D = /* @__PURE__ */ Symbol.for("react.portal"), T = /* @__PURE__ */ Symbol.for("react.fragment"), M = /* @__PURE__ */ Symbol.for("react.strict_mode"), I = /* @__PURE__ */ Symbol.for("react.profiler"), L = /* @__PURE__ */ Symbol.for("react.consumer"), W = /* @__PURE__ */ Symbol.for("react.context"), U = /* @__PURE__ */ Symbol.for("react.forward_ref"), J = /* @__PURE__ */ Symbol.for("react.suspense"), V = /* @__PURE__ */ Symbol.for("react.suspense_list"), w = /* @__PURE__ */ Symbol.for("react.memo"), y = /* @__PURE__ */ Symbol.for("react.lazy"), i = /* @__PURE__ */ Symbol.for("react.activity"), p = /* @__PURE__ */ Symbol.for("react.client.reference"), h = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, A = Object.prototype.hasOwnProperty, Y = Array.isArray, k = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var x, z = {}, G = v.react_stack_bottom_frame.bind(
      v,
      s
    )(), X = k(_(s)), B = {};
    O.Fragment = T, O.jsx = function(e, r, t) {
      var n = 1e4 > h.recentlyCreatedOwnerStacks++;
      return C(
        e,
        r,
        t,
        !1,
        n ? Error("react-stack-top-frame") : G,
        n ? k(_(e)) : X
      );
    }, O.jsxs = function(e, r, t) {
      var n = 1e4 > h.recentlyCreatedOwnerStacks++;
      return C(
        e,
        r,
        t,
        !0,
        n ? Error("react-stack-top-frame") : G,
        n ? k(_(e)) : X
      );
    };
  })()), O;
}
var Z;
function se() {
  return Z || (Z = 1, process.env.NODE_ENV === "production" ? j.exports = ae() : j.exports = oe()), j.exports;
}
se();
const K = "http://localhost:3000", ue = () => {
  const [f, b] = c(!1), [d, _] = c("interceptors"), [o, s] = c([]), [E, m] = c([]), [F, S] = c(!1), [C, N] = c(!1), [l, v] = c(null), [u, D] = c(null), [T, M] = c(""), [I, L] = c(""), [W, U] = c({}), [J, V] = c(!1);
  (() => {
    if (!l || !u) return !1;
    const i = (l.method || "ANY") !== (u.method || "ANY"), p = l.path !== u.path, h = !!l.isRegex != !!u.isRegex, A = l.response.status !== u.response.status, Y = (l.response.delayMs || 0) !== (u.response.delayMs || 0), k = T !== I, x = JSON.stringify(l.querykey || []) !== JSON.stringify(u.querykey || []);
    return i || p || h || A || Y || k || x;
  })(), ne();
  const w = async () => {
    try {
      const p = await (await fetch(`${K}/__interceptors`)).json();
      s(p), S(!0);
    } catch {
      S(!1);
    }
  }, y = async () => {
    try {
      const p = await (await fetch(`${K}/__requests`)).json();
      m(p.reverse());
    } catch (i) {
      console.debug("debug:loadRequests", i);
    }
  };
  return te(() => {
    w();
    const i = setInterval(() => {
      w(), d === "requests" && y();
    }, 2e3);
    return () => clearInterval(i);
  }, [d]), null;
};
export {
  ue as DevProxyWidget
};
