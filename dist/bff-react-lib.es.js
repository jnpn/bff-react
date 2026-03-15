import Ke, { useState as x, useEffect as pr } from "react";
import { useQueryClient as hr } from "@tanstack/react-query";
var be = { exports: {} }, le = {};
var We;
function yr() {
  if (We) return le;
  We = 1;
  var B = Ke, D = /* @__PURE__ */ Symbol.for("react.element"), O = /* @__PURE__ */ Symbol.for("react.fragment"), k = Object.prototype.hasOwnProperty, L = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, G = { key: !0, ref: !0, __self: !0, __source: !0 };
  function K(T, m, P) {
    var j, N = {}, o = null, v = null;
    P !== void 0 && (o = "" + P), m.key !== void 0 && (o = "" + m.key), m.ref !== void 0 && (v = m.ref);
    for (j in m) k.call(m, j) && !G.hasOwnProperty(j) && (N[j] = m[j]);
    if (T && T.defaultProps) for (j in m = T.defaultProps, m) N[j] === void 0 && (N[j] = m[j]);
    return { $$typeof: D, type: T, key: o, ref: v, props: N, _owner: L.current };
  }
  return le.Fragment = O, le.jsx = K, le.jsxs = K, le;
}
var ce = {};
var Me;
function vr() {
  return Me || (Me = 1, process.env.NODE_ENV !== "production" && (function() {
    var B = Ke, D = /* @__PURE__ */ Symbol.for("react.element"), O = /* @__PURE__ */ Symbol.for("react.portal"), k = /* @__PURE__ */ Symbol.for("react.fragment"), L = /* @__PURE__ */ Symbol.for("react.strict_mode"), G = /* @__PURE__ */ Symbol.for("react.profiler"), K = /* @__PURE__ */ Symbol.for("react.provider"), T = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), P = /* @__PURE__ */ Symbol.for("react.suspense"), j = /* @__PURE__ */ Symbol.for("react.suspense_list"), N = /* @__PURE__ */ Symbol.for("react.memo"), o = /* @__PURE__ */ Symbol.for("react.lazy"), v = /* @__PURE__ */ Symbol.for("react.offscreen"), w = Symbol.iterator, H = "@@iterator";
    function A(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = w && e[w] || e[H];
      return typeof t == "function" ? t : null;
    }
    var E = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(e) {
      {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        X("error", e, a);
      }
    }
    function X(e, t, a) {
      {
        var i = E.ReactDebugCurrentFrame, d = i.getStackAddendum();
        d !== "" && (t += "%s", a = a.concat([d]));
        var f = a.map(function(u) {
          return String(u);
        });
        f.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var J = !1, q = !1, ue = !1, Q = !1, z = !1, te;
    te = /* @__PURE__ */ Symbol.for("react.module.reference");
    function de(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === k || e === G || z || e === L || e === P || e === j || Q || e === v || J || q || ue || typeof e == "object" && e !== null && (e.$$typeof === o || e.$$typeof === N || e.$$typeof === K || e.$$typeof === T || e.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === te || e.getModuleId !== void 0));
    }
    function ne(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var d = t.displayName || t.name || "";
      return d !== "" ? a + "(" + d + ")" : a;
    }
    function h(e) {
      return e.displayName || "Context";
    }
    function g(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case k:
          return "Fragment";
        case O:
          return "Portal";
        case G:
          return "Profiler";
        case L:
          return "StrictMode";
        case P:
          return "Suspense";
        case j:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case T:
            var t = e;
            return h(t) + ".Consumer";
          case K:
            var a = e;
            return h(a._context) + ".Provider";
          case m:
            return ne(e, e.render, "ForwardRef");
          case N:
            var i = e.displayName || null;
            return i !== null ? i : g(e.type) || "Memo";
          case o: {
            var d = e, f = d._payload, u = d._init;
            try {
              return g(u(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, F = 0, Z, fe, C, Y, pe, he, ae;
    function ye() {
    }
    ye.__reactDisabledLog = !0;
    function me() {
      {
        if (F === 0) {
          Z = console.log, fe = console.info, C = console.warn, Y = console.error, pe = console.group, he = console.groupCollapsed, ae = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ye,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        F++;
      }
    }
    function ge() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, e, {
              value: Z
            }),
            info: I({}, e, {
              value: fe
            }),
            warn: I({}, e, {
              value: C
            }),
            error: I({}, e, {
              value: Y
            }),
            group: I({}, e, {
              value: pe
            }),
            groupCollapsed: I({}, e, {
              value: he
            }),
            groupEnd: I({}, e, {
              value: ae
            })
          });
        }
        F < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var se = E.ReactCurrentDispatcher, $;
    function W(e, t, a) {
      {
        if ($ === void 0)
          try {
            throw Error();
          } catch (d) {
            var i = d.stack.trim().match(/\n( *(at )?)/);
            $ = i && i[1] || "";
          }
        return `
` + $ + e;
      }
    }
    var r = !1, s;
    {
      var l = typeof WeakMap == "function" ? WeakMap : Map;
      s = new l();
    }
    function U(e, t) {
      if (!e || r)
        return "";
      {
        var a = s.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      r = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = se.current, se.current = null, me();
      try {
        if (t) {
          var u = function() {
            throw Error();
          };
          if (Object.defineProperty(u.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(u, []);
            } catch (_) {
              i = _;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (_) {
              i = _;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_) {
            i = _;
          }
          e();
        }
      } catch (_) {
        if (_ && i && typeof _.stack == "string") {
          for (var c = _.stack.split(`
`), R = i.stack.split(`
`), p = c.length - 1, y = R.length - 1; p >= 1 && y >= 0 && c[p] !== R[y]; )
            y--;
          for (; p >= 1 && y >= 0; p--, y--)
            if (c[p] !== R[y]) {
              if (p !== 1 || y !== 1)
                do
                  if (p--, y--, y < 0 || c[p] !== R[y]) {
                    var S = `
` + c[p].replace(" at new ", " at ");
                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && s.set(e, S), S;
                  }
                while (p >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        r = !1, se.current = f, ge(), Error.prepareStackTrace = d;
      }
      var re = e ? e.displayName || e.name : "", V = re ? W(re) : "";
      return typeof e == "function" && s.set(e, V), V;
    }
    function xe(e, t, a) {
      return U(e, !1);
    }
    function we(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ie(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return U(e, we(e));
      if (typeof e == "string")
        return W(e);
      switch (e) {
        case P:
          return W("Suspense");
        case j:
          return W("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            return xe(e.render);
          case N:
            return ie(e.type, t, a);
          case o: {
            var i = e, d = i._payload, f = i._init;
            try {
              return ie(f(d), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    var oe = Object.prototype.hasOwnProperty, Se = {}, Ce = E.ReactDebugCurrentFrame;
    function ve(e) {
      if (e) {
        var t = e._owner, a = ie(e.type, e._source, t ? t.type : null);
        Ce.setExtraStackFrame(a);
      } else
        Ce.setExtraStackFrame(null);
    }
    function Ue(e, t, a, i, d) {
      {
        var f = Function.call.bind(oe);
        for (var u in e)
          if (f(e, u)) {
            var c = void 0;
            try {
              if (typeof e[u] != "function") {
                var R = Error((i || "React class") + ": " + a + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw R.name = "Invariant Violation", R;
              }
              c = e[u](t, u, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (p) {
              c = p;
            }
            c && !(c instanceof Error) && (ve(d), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, u, typeof c), ve(null)), c instanceof Error && !(c.message in Se) && (Se[c.message] = !0, ve(d), b("Failed %s type: %s", a, c.message), ve(null));
          }
      }
    }
    var Ve = Array.isArray;
    function je(e) {
      return Ve(e);
    }
    function Be(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Ge(e) {
      try {
        return Oe(e), !1;
      } catch {
        return !0;
      }
    }
    function Oe(e) {
      return "" + e;
    }
    function ke(e) {
      if (Ge(e))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Be(e)), Oe(e);
    }
    var Te = E.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pe, qe;
    function Xe(e) {
      if (oe.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (oe.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ze(e, t) {
      typeof e.ref == "string" && Te.current;
    }
    function Ze(e, t) {
      {
        var a = function() {
          Pe || (Pe = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
    }
    function er(e, t) {
      {
        var a = function() {
          qe || (qe = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var rr = function(e, t, a, i, d, f, u) {
      var c = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: D,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: a,
        props: u,
        // Record the component responsible for creating this element.
        _owner: f
      };
      return c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(c, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.defineProperty(c, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function tr(e, t, a, i, d) {
      {
        var f, u = {}, c = null, R = null;
        a !== void 0 && (ke(a), c = "" + a), Qe(t) && (ke(t.key), c = "" + t.key), Xe(t) && (R = t.ref, ze(t, d));
        for (f in t)
          oe.call(t, f) && !He.hasOwnProperty(f) && (u[f] = t[f]);
        if (e && e.defaultProps) {
          var p = e.defaultProps;
          for (f in p)
            u[f] === void 0 && (u[f] = p[f]);
        }
        if (c || R) {
          var y = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && Ze(u, y), R && er(u, y);
        }
        return rr(e, c, R, d, i, Te.current, u);
      }
    }
    var Re = E.ReactCurrentOwner, Ie = E.ReactDebugCurrentFrame;
    function ee(e) {
      if (e) {
        var t = e._owner, a = ie(e.type, e._source, t ? t.type : null);
        Ie.setExtraStackFrame(a);
      } else
        Ie.setExtraStackFrame(null);
    }
    var Ee;
    Ee = !1;
    function _e(e) {
      return typeof e == "object" && e !== null && e.$$typeof === D;
    }
    function $e() {
      {
        if (Re.current) {
          var e = g(Re.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function nr(e) {
      return "";
    }
    var De = {};
    function ar(e) {
      {
        var t = $e();
        if (!t) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (t = `

Check the top-level render call using <` + a + ">.");
        }
        return t;
      }
    }
    function Ae(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var a = ar(t);
        if (De[a])
          return;
        De[a] = !0;
        var i = "";
        e && e._owner && e._owner !== Re.current && (i = " It was passed a child from " + g(e._owner.type) + "."), ee(e), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, i), ee(null);
      }
    }
    function Je(e, t) {
      {
        if (typeof e != "object")
          return;
        if (je(e))
          for (var a = 0; a < e.length; a++) {
            var i = e[a];
            _e(i) && Ae(i, t);
          }
        else if (_e(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var d = A(e);
          if (typeof d == "function" && d !== e.entries)
            for (var f = d.call(e), u; !(u = f.next()).done; )
              _e(u.value) && Ae(u.value, t);
        }
      }
    }
    function sr(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var a;
        if (typeof t == "function")
          a = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === N))
          a = t.propTypes;
        else
          return;
        if (a) {
          var i = g(t);
          Ue(a, e.props, "prop", i, e);
        } else if (t.PropTypes !== void 0 && !Ee) {
          Ee = !0;
          var d = g(t);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var t = Object.keys(e.props), a = 0; a < t.length; a++) {
          var i = t[a];
          if (i !== "children" && i !== "key") {
            ee(e), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", i), ee(null);
            break;
          }
        }
        e.ref !== null && (ee(e), b("Invalid attribute `ref` supplied to `React.Fragment`."), ee(null));
      }
    }
    var Fe = {};
    function Ye(e, t, a, i, d, f) {
      {
        var u = de(e);
        if (!u) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var R = nr();
          R ? c += R : c += $e();
          var p;
          e === null ? p = "null" : je(e) ? p = "array" : e !== void 0 && e.$$typeof === D ? (p = "<" + (g(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : p = typeof e, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", p, c);
        }
        var y = tr(e, t, a, d, f);
        if (y == null)
          return y;
        if (u) {
          var S = t.children;
          if (S !== void 0)
            if (i)
              if (je(S)) {
                for (var re = 0; re < S.length; re++)
                  Je(S[re], e);
                Object.freeze && Object.freeze(S);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Je(S, e);
        }
        if (oe.call(t, "key")) {
          var V = g(e), _ = Object.keys(t).filter(function(fr) {
            return fr !== "key";
          }), Ne = _.length > 0 ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Fe[V + Ne]) {
            var dr = _.length > 0 ? "{" + _.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ne, V, dr, V), Fe[V + Ne] = !0;
          }
        }
        return e === k ? ir(y) : sr(y), y;
      }
    }
    function or(e, t, a) {
      return Ye(e, t, a, !0);
    }
    function lr(e, t, a) {
      return Ye(e, t, a, !1);
    }
    var cr = lr, ur = or;
    ce.Fragment = k, ce.jsx = cr, ce.jsxs = ur;
  })()), ce;
}
var Le;
function br() {
  return Le || (Le = 1, process.env.NODE_ENV === "production" ? be.exports = yr() : be.exports = vr()), be.exports;
}
var n = br();
const M = "http://localhost:3000", mr = ["ANY", "GET", "POST", "PUT", "DELETE", "PATCH"], jr = () => {
  const [B, D] = x(!1), [O, k] = x("interceptors"), [L, G] = x([]), [K, T] = x([]), [m, P] = x(!1), [j, N] = x(!1), [o, v] = x(null), [w, H] = x(null), [A, E] = x(""), [b, X] = x(""), [J, q] = x(""), [ue, Q] = x(""), [z, te] = x(!1), [de, ne] = x(""), [h, g] = x({}), [I, F] = x(!1), Z = (() => {
    if (!o || !w) return !1;
    const r = (o.method || "") !== (w.method || ""), s = o.path !== w.path, l = !!o.isRegex != !!w.isRegex, U = o.response.status !== w.response.status, xe = (o.response.delayMs || 0) !== (w.response.delayMs || 0);
    return r || s || l || U || xe || A !== b || J !== ue;
  })(), fe = hr(), C = async () => {
    try {
      const s = await (await fetch(`${M}/__interceptors`)).json();
      G(s), P(!0);
    } catch {
      P(!1);
    }
  }, Y = (r) => {
    r && r.length > 0 && (console.log("debug:invalidating", r), fe.invalidateQueries({ queryKey: r }));
  }, pe = async () => {
    try {
      const s = await (await fetch(`${M}/__requests`)).json();
      T(s.reverse());
    } catch (r) {
      console.debug("debug:loadRequests", r);
    }
  }, he = async (r) => {
    await fetch(`${M}/__interceptors`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(r)
    }), Y(r.querykey), C();
  }, ae = async () => {
    if (!(!o || !$() || !Z))
      try {
        const r = JSON.parse(A), s = JSON.parse(J), l = {
          method: o.method,
          path: o.path,
          querykey: s,
          isRegex: o.isRegex,
          response: {
            ...o.response,
            body: r
          }
        };
        j ? (await he(l), N(!1)) : await me(o.id, l, w?.querykey), F(!0), setTimeout(() => F(!1), 2e3), g({}), setTimeout(() => {
          v(null), H(null), X(""), Q("");
        }, 1e3);
      } catch (r) {
        console.error("Save error", r);
      }
  }, ye = async (r, s, l) => {
    await fetch(`${M}/__interceptors/${r}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ enabled: s })
    }), Y(l), C();
  }, me = async (r, s, l) => {
    await fetch(`${M}/__interceptors/${r}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(s)
    }), l && Y(l), s.querykey && Y(s.querykey), C();
  }, ge = async (r, s) => {
    await fetch(`${M}/__interceptors/${r}`, { method: "DELETE" }), Y(s), C();
  }, se = async (r, s) => {
    await fetch(`${M}/__interceptors`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        path: r,
        response: { status: s, body: { error: "Simulated error" } }
      })
    }), C();
  }, $ = () => {
    const r = {};
    if (!o) return !1;
    !o.path || o.path.trim() === "" ? r.path = "Path is required" : o.path.startsWith("/") || (r.path = "Path must start with /");
    try {
      const s = JSON.parse(J);
      Array.isArray(s) || (r.querykey = "Query key must be a JSON array");
    } catch {
      r.querykey = "Invalid JSON array";
    }
    (o.response.status < 100 || o.response.status > 599) && (r.status = "Status must be between 100 and 599");
    try {
      JSON.parse(A);
    } catch {
      r.body = "Invalid JSON body";
    }
    return g(r), Object.keys(r).length === 0;
  }, W = async (r) => {
    await fetch(`${M}/__scenarios/${r}/apply`, { method: "POST" }), C();
  };
  return pr(() => {
    C();
    const r = setInterval(() => {
      C(), O === "requests" && pe();
    }, 2e3);
    return () => clearInterval(r);
  }, [O]), /* @__PURE__ */ n.jsxs("div", { className: "dev-proxy-widget", children: [
    /* @__PURE__ */ n.jsxs(
      "button",
      {
        className: `dev-proxy-toggle ${m ? "connected" : "disconnected"}`,
        onClick: () => D(!B),
        children: [
          /* @__PURE__ */ n.jsx("span", { className: "status-dot" }),
          "DEV PROXY"
        ]
      }
    ),
    B && /* @__PURE__ */ n.jsxs("div", { className: "dev-proxy-panel flex-cols-2", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "left", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "panel-header", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "tabs", children: [
            /* @__PURE__ */ n.jsxs(
              "button",
              {
                className: O === "interceptors" ? "active" : "",
                onClick: () => k("interceptors"),
                children: [
                  "Interceptors (",
                  L.filter((r) => r.enabled).length,
                  ")"
                ]
              }
            ),
            /* @__PURE__ */ n.jsx(
              "button",
              {
                className: (O === "requests" ? "active" : "") + " hidden",
                onClick: () => k("requests"),
                children: "Requests"
              }
            )
          ] }),
          /* @__PURE__ */ n.jsx(
            "button",
            {
              className: "new-btn",
              onClick: () => {
                N(!0);
                const r = {
                  id: "new",
                  enabled: !0,
                  method: "",
                  path: "",
                  querykey: [],
                  response: { status: 200, body: {} }
                };
                v(r), H(r);
                const s = JSON.stringify({ status: 200, body: {} }, null, 2);
                E(s), X(s);
                const l = JSON.stringify([], null, 2);
                q(l), Q(l), g({});
              },
              children: "+ New"
            }
          ),
          /* @__PURE__ */ n.jsx("button", { className: "close-btn", onClick: () => D(!1), children: "x" })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "scenarios hidden!", children: [
          /* @__PURE__ */ n.jsx("button", { onClick: () => W("happy-path"), children: "😊 Happy" }),
          /* @__PURE__ */ n.jsx("button", { onClick: () => W("server-down"), children: "🚨 Down" }),
          /* @__PURE__ */ n.jsx("button", { onClick: () => W("auth-expired"), children: "🔒 Auth" })
        ] }),
        O === "interceptors" && /* @__PURE__ */ n.jsx("div", { className: "interceptors-list", children: L.map((r) => /* @__PURE__ */ n.jsxs(
          "div",
          {
            className: `interceptor ${r.enabled ? "enabled" : "disabled"}`,
            children: [
              /* @__PURE__ */ n.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.enabled,
                  onChange: (s) => ye(r.id, s.target.checked, r.querykey)
                }
              ),
              /* @__PURE__ */ n.jsxs("div", { className: "interceptor-info", children: [
                /* @__PURE__ */ n.jsx("span", { className: "method", children: r.method || "ANY" }),
                /* @__PURE__ */ n.jsx("span", { className: "path", children: r.path }),
                /* @__PURE__ */ n.jsx(
                  "span",
                  {
                    className: `status status-${Math.floor(r.response.status / 100)}`,
                    children: r.response.status
                  }
                ),
                /* @__PURE__ */ n.jsx(
                  "button",
                  {
                    className: "btn btn-action-primary",
                    onClick: () => {
                      if (o === null || o.id !== r.id) {
                        v(r), H(r);
                        const s = JSON.stringify(r.response.body, null, 2);
                        E(s), X(s);
                        const l = JSON.stringify(r.querykey || [], null, 2);
                        q(l), Q(l), g({});
                      } else
                        v(null), g({});
                    },
                    children: "Edit"
                  }
                ),
                /* @__PURE__ */ n.jsx(
                  "button",
                  {
                    className: "btn btn-action-secondary",
                    title: "Clone Interceptor",
                    onClick: () => {
                      N(!0);
                      const s = {
                        ...r,
                        id: "new"
                      };
                      v(s), H(s);
                      const l = JSON.stringify(r.response.body, null, 2);
                      E(l), X(l);
                      const U = JSON.stringify(r.querykey || [], null, 2);
                      q(U), Q(U), g({});
                    },
                    children: "Clone"
                  }
                ),
                r.isRegex && /* @__PURE__ */ n.jsx("span", { className: "badge", children: "REGEX" }),
                /* @__PURE__ */ n.jsxs("span", { children: [
                  "key ",
                  r.querykey && r.querykey.length > 0 ? JSON.stringify(r.querykey) : "none"
                ] })
              ] }),
              /* @__PURE__ */ n.jsx("button", { className: "btn btn-danger", onClick: () => ge(r.id, r.querykey), children: "🗑️" })
            ]
          },
          r.id
        )) }),
        O === "requests" && /* @__PURE__ */ n.jsx("div", { className: "requests-list", children: K.map((r) => /* @__PURE__ */ n.jsxs(
          "div",
          {
            className: `request ${r.intercepted ? "intercepted" : "proxied"}`,
            children: [
              /* @__PURE__ */ n.jsxs("div", { className: "request-info", children: [
                /* @__PURE__ */ n.jsx("span", { className: "method", children: r.method }),
                /* @__PURE__ */ n.jsx("span", { className: "url", children: r.url }),
                r.intercepted && /* @__PURE__ */ n.jsx("span", { className: "badge", children: "MOCKED" })
              ] }),
              !r.intercepted && /* @__PURE__ */ n.jsx("button", { onClick: () => se(r.url, 500), children: "âš¡500" })
            ]
          },
          r.id
        )) })
      ] }),
      /* @__PURE__ */ n.jsx("div", { className: `right ${o ? "is-editing" : ""}`, children: o && /* @__PURE__ */ n.jsxs(
        "div",
        {
          className: "m-2 mt-2 mb-0 p-3 rounded border border-white/10 h-[95%] interceptor-editor bg-gray-900/50",
          onKeyDown: (r) => {
            (r.ctrlKey || r.metaKey) && r.key === "Enter" && ae();
          },
          children: [
            /* @__PURE__ */ n.jsxs("div", { className: "editor-header", children: [
              /* @__PURE__ */ n.jsxs("div", { className: "editor-title", children: [
                /* @__PURE__ */ n.jsx(
                  "button",
                  {
                    className: "btn btn-primary",
                    disabled: !Z || Object.keys(h).length > 0,
                    onClick: ae,
                    children: "Save"
                  }
                ),
                /* @__PURE__ */ n.jsx(
                  "button",
                  {
                    className: "btn btn-secondary",
                    style: { marginLeft: "1em" },
                    disabled: !Z,
                    onClick: () => {
                      w && (v({ ...w }), E(b), q(ue), g({}));
                    },
                    children: "Reset"
                  }
                ),
                I && /* @__PURE__ */ n.jsx("span", { className: "saved-feedback", children: "✓ Saved!" })
              ] }),
              /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("span", { className: "text-[10px] opacity-80 font-semibold font-mono", children: o.id }) }),
              /* @__PURE__ */ n.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    className: `btn ${z ? "btn-primary active" : "btn-secondary"}`,
                    onClick: () => {
                      if (z)
                        try {
                          const r = JSON.parse(de);
                          v(r), E(JSON.stringify(r.response?.body || {}, null, 2)), q(JSON.stringify(r.querykey || [], null, 2));
                        } catch (r) {
                          console.error("Invalid JSON in raw mode", r);
                        }
                      else
                        try {
                          const r = {
                            ...o,
                            querykey: JSON.parse(J),
                            response: {
                              ...o.response,
                              body: JSON.parse(A)
                            }
                          };
                          ne(JSON.stringify(r, null, 2));
                        } catch {
                          const r = { ...o, response: { ...o.response, body: A }, querykey: J };
                          ne(JSON.stringify(r, null, 2));
                        }
                      te(!z);
                    },
                    children: [
                      "{ }",
                      " Raw"
                    ]
                  }
                ),
                /* @__PURE__ */ n.jsx(
                  "button",
                  {
                    className: "btn btn-secondary",
                    onClick: () => {
                      v(null), g({}), te(!1);
                    },
                    children: "Cancel"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ n.jsx("div", { className: "interceptor-fields", children: z ? /* @__PURE__ */ n.jsxs("div", { className: "interceptor-field vertical h-full", children: [
              /* @__PURE__ */ n.jsx("label", { children: "Raw JSON" }),
              /* @__PURE__ */ n.jsx("div", { className: "field-content h-full", children: /* @__PURE__ */ n.jsx(
                "textarea",
                {
                  className: "w-full bg-gray-800 text-white border border-white/20 rounded p-2 text-xs font-mono grow",
                  style: { height: "450px" },
                  value: de,
                  onChange: (r) => {
                    const s = r.target.value;
                    ne(s);
                    try {
                      const l = JSON.parse(s);
                      v(l), l.response?.body && E(JSON.stringify(l.response.body, null, 2)), l.querykey && q(JSON.stringify(l.querykey, null, 2));
                    } catch {
                    }
                  }
                }
              ) })
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              /* @__PURE__ */ n.jsxs("div", { className: "interceptor-field", children: [
                /* @__PURE__ */ n.jsx("label", { children: "method" }),
                /* @__PURE__ */ n.jsx("div", { className: "field-content", children: /* @__PURE__ */ n.jsx("div", { className: "method-selector flex gap-1 bg-white/5 p-1 rounded-md border border-white/10 w-fit", children: mr.map((r) => /* @__PURE__ */ n.jsx(
                  "button",
                  {
                    className: `btn ${o.method === r || !o.method && r === "ANY" ? "btn-primary active" : "btn-secondary"} !text-[10px] !px-2 !py-0.5`,
                    onClick: () => {
                      v(
                        (s) => s && { ...s, method: r === "ANY" ? "" : r }
                      );
                    },
                    children: r
                  },
                  r
                )) }) })
              ] }),
              /* @__PURE__ */ n.jsxs("div", { className: "interceptor-field", children: [
                /* @__PURE__ */ n.jsx("label", { children: "path" }),
                /* @__PURE__ */ n.jsxs("div", { className: "field-content", children: [
                  /* @__PURE__ */ n.jsxs("div", { className: "flex gap-2", children: [
                    /* @__PURE__ */ n.jsx(
                      "input",
                      {
                        autoFocus: !0,
                        className: `flex-1 bg-gray-800 text-white border rounded px-2 py-1 ${h.path ? "border-red-500" : "border-white/20"}`,
                        type: "text",
                        value: o.path,
                        onChange: (r) => {
                          const s = r.target.value;
                          v(
                            (l) => l && { ...l, path: s }
                          ), h.path && $();
                        }
                      }
                    ),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        className: `btn ${o.isRegex ? "btn-primary active" : "btn-secondary"} !text-[10px] !px-2 !py-0.5 h-auto`,
                        onClick: () => {
                          v(
                            (r) => r && { ...r, isRegex: !r.isRegex }
                          );
                        },
                        title: "Toggle Regex",
                        children: ".*"
                      }
                    )
                  ] }),
                  h.path && /* @__PURE__ */ n.jsx("span", { className: "error-message", children: h.path })
                ] })
              ] }),
              /* @__PURE__ */ n.jsxs("div", { className: "interceptor-field", children: [
                /* @__PURE__ */ n.jsx("label", { children: "querykey" }),
                /* @__PURE__ */ n.jsxs("div", { className: "field-content", children: [
                  /* @__PURE__ */ n.jsx(
                    "input",
                    {
                      className: `w-full bg-gray-800 text-white border rounded px-2 py-1 ${h.querykey ? "border-red-500" : "border-white/20"}`,
                      type: "text",
                      placeholder: '["key1", 123, { "id": 1 }]',
                      value: J,
                      onChange: (r) => {
                        q(r.target.value), h.querykey && $();
                      }
                    }
                  ),
                  h.querykey && /* @__PURE__ */ n.jsx("span", { className: "error-message", children: h.querykey })
                ] })
              ] }),
              /* @__PURE__ */ n.jsxs("div", { style: { display: "flex" }, className: "flex gap-4", children: [
                /* @__PURE__ */ n.jsxs("div", { className: "interceptor-field flex-1", children: [
                  /* @__PURE__ */ n.jsx("label", { children: "status" }),
                  /* @__PURE__ */ n.jsxs("div", { className: "field-content", children: [
                    /* @__PURE__ */ n.jsx(
                      "input",
                      {
                        type: "number",
                        className: `bg-gray-800 text-white border rounded px-2 py-1 text-sm w-full ${h.status ? "border-red-500" : "border-white/20"}`,
                        value: o.response.status,
                        onChange: (r) => {
                          const s = parseInt(r.target.value, 10);
                          v(
                            (l) => l && {
                              ...l,
                              response: { ...l.response, status: s }
                            }
                          ), h.status && $();
                        }
                      }
                    ),
                    h.status && /* @__PURE__ */ n.jsx("span", { className: "error-message", children: h.status })
                  ] })
                ] }),
                /* @__PURE__ */ n.jsxs("div", { className: "interceptor-field flex-1", children: [
                  /* @__PURE__ */ n.jsx("label", { children: "delay (ms)" }),
                  /* @__PURE__ */ n.jsx("div", { className: "field-content", children: /* @__PURE__ */ n.jsx(
                    "input",
                    {
                      type: "number",
                      className: "w-full bg-gray-800 text-white border border-white/20 rounded px-2 py-1",
                      value: o.response.delayMs || 0,
                      onChange: (r) => {
                        const s = parseInt(r.target.value, 10);
                        v(
                          (l) => l && {
                            ...l,
                            response: { ...l.response, delayMs: s }
                          }
                        );
                      }
                    }
                  ) })
                ] })
              ] }),
              /* @__PURE__ */ n.jsxs("div", { className: "interceptor-field vertical", children: [
                /* @__PURE__ */ n.jsx("label", { children: "body (JSON)" }),
                /* @__PURE__ */ n.jsxs("div", { className: "field-content", children: [
                  /* @__PURE__ */ n.jsx(
                    "textarea",
                    {
                      className: `w-full bg-gray-800 text-white border rounded p-2 text-xs font-mono h-40 ${h.body ? "border-red-500" : "border-white/20"}`,
                      value: A,
                      onChange: (r) => {
                        E(r.target.value), h.body && $();
                      }
                    }
                  ),
                  h.body && /* @__PURE__ */ n.jsx("span", { className: "error-message", children: h.body })
                ] })
              ] })
            ] }) })
          ]
        }
      ) })
    ] })
  ] });
};
export {
  jr as DevProxyWidget
};
