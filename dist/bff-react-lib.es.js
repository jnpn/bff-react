import Me, { useState as E, useEffect as pr } from "react";
import { useQueryClient as hr } from "@tanstack/react-query";
var ve = { exports: {} }, ae = {};
var Je;
function yr() {
  if (Je) return ae;
  Je = 1;
  var L = Me, D = /* @__PURE__ */ Symbol.for("react.element"), k = /* @__PURE__ */ Symbol.for("react.fragment"), P = Object.prototype.hasOwnProperty, J = L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, K = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Y(I, b, q) {
    var x, _ = {}, o = null, m = null;
    q !== void 0 && (o = "" + q), b.key !== void 0 && (o = "" + b.key), b.ref !== void 0 && (m = b.ref);
    for (x in b) P.call(b, x) && !K.hasOwnProperty(x) && (_[x] = b[x]);
    if (I && I.defaultProps) for (x in b = I.defaultProps, b) _[x] === void 0 && (_[x] = b[x]);
    return { $$typeof: D, type: I, key: o, ref: m, props: _, _owner: J.current };
  }
  return ae.Fragment = k, ae.jsx = Y, ae.jsxs = Y, ae;
}
var se = {};
var Ye;
function vr() {
  return Ye || (Ye = 1, process.env.NODE_ENV !== "production" && (function() {
    var L = Me, D = /* @__PURE__ */ Symbol.for("react.element"), k = /* @__PURE__ */ Symbol.for("react.portal"), P = /* @__PURE__ */ Symbol.for("react.fragment"), J = /* @__PURE__ */ Symbol.for("react.strict_mode"), K = /* @__PURE__ */ Symbol.for("react.profiler"), Y = /* @__PURE__ */ Symbol.for("react.provider"), I = /* @__PURE__ */ Symbol.for("react.context"), b = /* @__PURE__ */ Symbol.for("react.forward_ref"), q = /* @__PURE__ */ Symbol.for("react.suspense"), x = /* @__PURE__ */ Symbol.for("react.suspense_list"), _ = /* @__PURE__ */ Symbol.for("react.memo"), o = /* @__PURE__ */ Symbol.for("react.lazy"), m = /* @__PURE__ */ Symbol.for("react.offscreen"), C = Symbol.iterator, U = "@@iterator";
    function V(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = C && e[C] || e[U];
      return typeof t == "function" ? t : null;
    }
    var w = L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
          a[s - 1] = arguments[s];
        B("error", e, a);
      }
    }
    function B(e, t, a) {
      {
        var s = w.ReactDebugCurrentFrame, d = s.getStackAddendum();
        d !== "" && (t += "%s", a = a.concat([d]));
        var f = a.map(function(u) {
          return String(u);
        });
        f.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var G = !1, W = !1, ie = !1, H = !1, y = !1, N;
    N = /* @__PURE__ */ Symbol.for("react.module.reference");
    function be(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === P || e === K || y || e === J || e === q || e === x || H || e === m || G || W || ie || typeof e == "object" && e !== null && (e.$$typeof === o || e.$$typeof === _ || e.$$typeof === Y || e.$$typeof === I || e.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === N || e.getModuleId !== void 0));
    }
    function oe(e, t, a) {
      var s = e.displayName;
      if (s)
        return s;
      var d = t.displayName || t.name || "";
      return d !== "" ? a + "(" + d + ")" : a;
    }
    function X(e) {
      return e.displayName || "Context";
    }
    function O(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case P:
          return "Fragment";
        case k:
          return "Portal";
        case K:
          return "Profiler";
        case J:
          return "StrictMode";
        case q:
          return "Suspense";
        case x:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case I:
            var t = e;
            return X(t) + ".Consumer";
          case Y:
            var a = e;
            return X(a._context) + ".Provider";
          case b:
            return oe(e, e.render, "ForwardRef");
          case _:
            var s = e.displayName || null;
            return s !== null ? s : O(e.type) || "Memo";
          case o: {
            var d = e, f = d._payload, u = d._init;
            try {
              return O(u(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var g = Object.assign, T = 0, le, ce, Z, ue, de, fe, pe;
    function A() {
    }
    A.__reactDisabledLog = !0;
    function ee() {
      {
        if (T === 0) {
          le = console.log, ce = console.info, Z = console.warn, ue = console.error, de = console.group, fe = console.groupCollapsed, pe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: A,
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
        T++;
      }
    }
    function r() {
      {
        if (T--, T === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: g({}, e, {
              value: le
            }),
            info: g({}, e, {
              value: ce
            }),
            warn: g({}, e, {
              value: Z
            }),
            error: g({}, e, {
              value: ue
            }),
            group: g({}, e, {
              value: de
            }),
            groupCollapsed: g({}, e, {
              value: fe
            }),
            groupEnd: g({}, e, {
              value: pe
            })
          });
        }
        T < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var i = w.ReactCurrentDispatcher, l;
    function $(e, t, a) {
      {
        if (l === void 0)
          try {
            throw Error();
          } catch (d) {
            var s = d.stack.trim().match(/\n( *(at )?)/);
            l = s && s[1] || "";
          }
        return `
` + l + e;
      }
    }
    var re = !1, te;
    {
      var Ee = typeof WeakMap == "function" ? WeakMap : Map;
      te = new Ee();
    }
    function _e(e, t) {
      if (!e || re)
        return "";
      {
        var a = te.get(e);
        if (a !== void 0)
          return a;
      }
      var s;
      re = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = i.current, i.current = null, ee();
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
            } catch (R) {
              s = R;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (R) {
              s = R;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (R) {
            s = R;
          }
          e();
        }
      } catch (R) {
        if (R && s && typeof R.stack == "string") {
          for (var c = R.stack.split(`
`), j = s.stack.split(`
`), p = c.length - 1, h = j.length - 1; p >= 1 && h >= 0 && c[p] !== j[h]; )
            h--;
          for (; p >= 1 && h >= 0; p--, h--)
            if (c[p] !== j[h]) {
              if (p !== 1 || h !== 1)
                do
                  if (p--, h--, h < 0 || c[p] !== j[h]) {
                    var S = `
` + c[p].replace(" at new ", " at ");
                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && te.set(e, S), S;
                  }
                while (p >= 1 && h >= 0);
              break;
            }
        }
      } finally {
        re = !1, i.current = f, r(), Error.prepareStackTrace = d;
      }
      var z = e ? e.displayName || e.name : "", M = z ? $(z) : "";
      return typeof e == "function" && te.set(e, M), M;
    }
    function Le(e, t, a) {
      return _e(e, !1);
    }
    function Ke(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function he(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return _e(e, Ke(e));
      if (typeof e == "string")
        return $(e);
      switch (e) {
        case q:
          return $("Suspense");
        case x:
          return $("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            return Le(e.render);
          case _:
            return he(e.type, t, a);
          case o: {
            var s = e, d = s._payload, f = s._init;
            try {
              return he(f(d), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    var ne = Object.prototype.hasOwnProperty, Ce = {}, we = w.ReactDebugCurrentFrame;
    function ye(e) {
      if (e) {
        var t = e._owner, a = he(e.type, e._source, t ? t.type : null);
        we.setExtraStackFrame(a);
      } else
        we.setExtraStackFrame(null);
    }
    function Ue(e, t, a, s, d) {
      {
        var f = Function.call.bind(ne);
        for (var u in e)
          if (f(e, u)) {
            var c = void 0;
            try {
              if (typeof e[u] != "function") {
                var j = Error((s || "React class") + ": " + a + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw j.name = "Invariant Violation", j;
              }
              c = e[u](t, u, s, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (p) {
              c = p;
            }
            c && !(c instanceof Error) && (ye(d), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", a, u, typeof c), ye(null)), c instanceof Error && !(c.message in Ce) && (Ce[c.message] = !0, ye(d), v("Failed %s type: %s", a, c.message), ye(null));
          }
      }
    }
    var Ve = Array.isArray;
    function me(e) {
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
        return Se(e), !1;
      } catch {
        return !0;
      }
    }
    function Se(e) {
      return "" + e;
    }
    function Ne(e) {
      if (Ge(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Be(e)), Se(e);
    }
    var Te = w.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ke, Oe;
    function Xe(e) {
      if (ne.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (ne.call(e, "key")) {
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
          ke || (ke = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
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
          Oe || (Oe = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var rr = function(e, t, a, s, d, f, u) {
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
        value: s
      }), Object.defineProperty(c, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function tr(e, t, a, s, d) {
      {
        var f, u = {}, c = null, j = null;
        a !== void 0 && (Ne(a), c = "" + a), Qe(t) && (Ne(t.key), c = "" + t.key), Xe(t) && (j = t.ref, ze(t, d));
        for (f in t)
          ne.call(t, f) && !He.hasOwnProperty(f) && (u[f] = t[f]);
        if (e && e.defaultProps) {
          var p = e.defaultProps;
          for (f in p)
            u[f] === void 0 && (u[f] = p[f]);
        }
        if (c || j) {
          var h = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && Ze(u, h), j && er(u, h);
        }
        return rr(e, c, j, d, s, Te.current, u);
      }
    }
    var ge = w.ReactCurrentOwner, Pe = w.ReactDebugCurrentFrame;
    function Q(e) {
      if (e) {
        var t = e._owner, a = he(e.type, e._source, t ? t.type : null);
        Pe.setExtraStackFrame(a);
      } else
        Pe.setExtraStackFrame(null);
    }
    var xe;
    xe = !1;
    function je(e) {
      return typeof e == "object" && e !== null && e.$$typeof === D;
    }
    function Ie() {
      {
        if (ge.current) {
          var e = O(ge.current.type);
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
    var qe = {};
    function ar(e) {
      {
        var t = Ie();
        if (!t) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (t = `

Check the top-level render call using <` + a + ">.");
        }
        return t;
      }
    }
    function $e(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var a = ar(t);
        if (qe[a])
          return;
        qe[a] = !0;
        var s = "";
        e && e._owner && e._owner !== ge.current && (s = " It was passed a child from " + O(e._owner.type) + "."), Q(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, s), Q(null);
      }
    }
    function De(e, t) {
      {
        if (typeof e != "object")
          return;
        if (me(e))
          for (var a = 0; a < e.length; a++) {
            var s = e[a];
            je(s) && $e(s, t);
          }
        else if (je(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var d = V(e);
          if (typeof d == "function" && d !== e.entries)
            for (var f = d.call(e), u; !(u = f.next()).done; )
              je(u.value) && $e(u.value, t);
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
        else if (typeof t == "object" && (t.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === _))
          a = t.propTypes;
        else
          return;
        if (a) {
          var s = O(t);
          Ue(a, e.props, "prop", s, e);
        } else if (t.PropTypes !== void 0 && !xe) {
          xe = !0;
          var d = O(t);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var t = Object.keys(e.props), a = 0; a < t.length; a++) {
          var s = t[a];
          if (s !== "children" && s !== "key") {
            Q(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", s), Q(null);
            break;
          }
        }
        e.ref !== null && (Q(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), Q(null));
      }
    }
    var Ae = {};
    function Fe(e, t, a, s, d, f) {
      {
        var u = be(e);
        if (!u) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var j = nr();
          j ? c += j : c += Ie();
          var p;
          e === null ? p = "null" : me(e) ? p = "array" : e !== void 0 && e.$$typeof === D ? (p = "<" + (O(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : p = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", p, c);
        }
        var h = tr(e, t, a, d, f);
        if (h == null)
          return h;
        if (u) {
          var S = t.children;
          if (S !== void 0)
            if (s)
              if (me(S)) {
                for (var z = 0; z < S.length; z++)
                  De(S[z], e);
                Object.freeze && Object.freeze(S);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              De(S, e);
        }
        if (ne.call(t, "key")) {
          var M = O(e), R = Object.keys(t).filter(function(fr) {
            return fr !== "key";
          }), Re = R.length > 0 ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ae[M + Re]) {
            var dr = R.length > 0 ? "{" + R.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Re, M, dr, M), Ae[M + Re] = !0;
          }
        }
        return e === P ? ir(h) : sr(h), h;
      }
    }
    function or(e, t, a) {
      return Fe(e, t, a, !0);
    }
    function lr(e, t, a) {
      return Fe(e, t, a, !1);
    }
    var cr = lr, ur = or;
    se.Fragment = P, se.jsx = cr, se.jsxs = ur;
  })()), se;
}
var We;
function br() {
  return We || (We = 1, process.env.NODE_ENV === "production" ? ve.exports = yr() : ve.exports = vr()), ve.exports;
}
var n = br();
const F = "http://localhost:3000", mr = ["ANY", "GET", "POST", "PUT", "DELETE", "PATCH"], jr = () => {
  const [L, D] = E(!1), [k, P] = E("interceptors"), [J, K] = E([]), [Y, I] = E([]), [b, q] = E(!1), [x, _] = E(!1), [o, m] = E(null), [C, U] = E(null), [V, w] = E(""), [v, B] = E(""), [G, W] = E(""), [ie, H] = E(""), [y, N] = E({}), [be, oe] = E(!1), X = (() => {
    if (!o || !C) return !1;
    const r = (o.method || "") !== (C.method || ""), i = o.path !== C.path, l = !!o.isRegex != !!C.isRegex, $ = o.response.status !== C.response.status, re = (o.response.delayMs || 0) !== (C.response.delayMs || 0);
    return r || i || l || $ || re || V !== v || G !== ie;
  })(), O = hr(), g = async () => {
    try {
      const i = await (await fetch(`${F}/__interceptors`)).json();
      K(i), q(!0);
    } catch {
      q(!1);
    }
  }, T = (r) => {
    r && r.length > 0 && (console.log("debug:invalidating", r), O.invalidateQueries({ queryKey: r }));
  }, le = async () => {
    try {
      const i = await (await fetch(`${F}/__requests`)).json();
      I(i.reverse());
    } catch (r) {
      console.debug("debug:loadRequests", r);
    }
  }, ce = async (r) => {
    await fetch(`${F}/__interceptors`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(r)
    }), T(r.querykey), g();
  }, Z = async () => {
    if (!(!o || !A() || !X))
      try {
        const r = JSON.parse(V), i = JSON.parse(G), l = {
          method: o.method,
          path: o.path,
          querykey: i,
          isRegex: o.isRegex,
          response: {
            ...o.response,
            body: r
          }
        };
        x ? (await ce(l), _(!1)) : await de(o.id, l, C?.querykey), oe(!0), setTimeout(() => oe(!1), 2e3), N({}), setTimeout(() => {
          m(null), U(null), B(""), H("");
        }, 1e3);
      } catch (r) {
        console.error("Save error", r);
      }
  }, ue = async (r, i, l) => {
    await fetch(`${F}/__interceptors/${r}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ enabled: i })
    }), T(l), g();
  }, de = async (r, i, l) => {
    await fetch(`${F}/__interceptors/${r}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(i)
    }), l && T(l), i.querykey && T(i.querykey), g();
  }, fe = async (r, i) => {
    await fetch(`${F}/__interceptors/${r}`, { method: "DELETE" }), T(i), g();
  }, pe = async (r, i) => {
    await fetch(`${F}/__interceptors`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        path: r,
        response: { status: i, body: { error: "Simulated error" } }
      })
    }), g();
  }, A = () => {
    const r = {};
    if (!o) return !1;
    !o.path || o.path.trim() === "" ? r.path = "Path is required" : o.path.startsWith("/") || (r.path = "Path must start with /");
    try {
      const i = JSON.parse(G);
      Array.isArray(i) || (r.querykey = "Query key must be a JSON array");
    } catch {
      r.querykey = "Invalid JSON array";
    }
    (o.response.status < 100 || o.response.status > 599) && (r.status = "Status must be between 100 and 599");
    try {
      JSON.parse(V);
    } catch {
      r.body = "Invalid JSON body";
    }
    return N(r), Object.keys(r).length === 0;
  }, ee = async (r) => {
    await fetch(`${F}/__scenarios/${r}/apply`, { method: "POST" }), g();
  };
  return pr(() => {
    g();
    const r = setInterval(() => {
      g(), k === "requests" && le();
    }, 2e3);
    return () => clearInterval(r);
  }, [k]), /* @__PURE__ */ n.jsxs("div", { className: "dev-proxy-widget", children: [
    /* @__PURE__ */ n.jsxs(
      "button",
      {
        className: `dev-proxy-toggle ${b ? "connected" : "disconnected"}`,
        onClick: () => D(!L),
        children: [
          /* @__PURE__ */ n.jsx("span", { className: "status-dot" }),
          "DEV PROXY"
        ]
      }
    ),
    L && /* @__PURE__ */ n.jsxs("div", { className: "dev-proxy-panel flex-cols-2", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "left", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "panel-header", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "tabs", children: [
            /* @__PURE__ */ n.jsxs(
              "button",
              {
                className: k === "interceptors" ? "active" : "",
                onClick: () => P("interceptors"),
                children: [
                  "Interceptors (",
                  J.filter((r) => r.enabled).length,
                  ")"
                ]
              }
            ),
            /* @__PURE__ */ n.jsx(
              "button",
              {
                className: (k === "requests" ? "active" : "") + " hidden",
                onClick: () => P("requests"),
                children: "Requests"
              }
            )
          ] }),
          /* @__PURE__ */ n.jsx(
            "button",
            {
              className: "new-btn",
              onClick: () => {
                _(!0);
                const r = {
                  id: "new",
                  enabled: !0,
                  method: "",
                  path: "",
                  querykey: [],
                  response: { status: 200, body: {} }
                };
                m(r), U(r);
                const i = JSON.stringify({ status: 200, body: {} }, null, 2);
                w(i), B(i);
                const l = JSON.stringify([], null, 2);
                W(l), H(l), N({});
              },
              children: "+ New"
            }
          ),
          /* @__PURE__ */ n.jsx("button", { className: "close-btn", onClick: () => D(!1), children: "x" })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "scenarios hidden!", children: [
          /* @__PURE__ */ n.jsx("button", { onClick: () => ee("happy-path"), children: "😊 Happy" }),
          /* @__PURE__ */ n.jsx("button", { onClick: () => ee("server-down"), children: "🚨 Down" }),
          /* @__PURE__ */ n.jsx("button", { onClick: () => ee("auth-expired"), children: "🔒 Auth" })
        ] }),
        k === "interceptors" && /* @__PURE__ */ n.jsx("div", { className: "interceptors-list", children: J.map((r) => /* @__PURE__ */ n.jsxs(
          "div",
          {
            className: `interceptor ${r.enabled ? "enabled" : "disabled"}`,
            children: [
              /* @__PURE__ */ n.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.enabled,
                  onChange: (i) => ue(r.id, i.target.checked, r.querykey)
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
                        m(r), U(r);
                        const i = JSON.stringify(r.response.body, null, 2);
                        w(i), B(i);
                        const l = JSON.stringify(r.querykey || [], null, 2);
                        W(l), H(l), N({});
                      } else
                        m(null), N({});
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
                      _(!0);
                      const i = {
                        ...r,
                        id: "new"
                      };
                      m(i), U(i);
                      const l = JSON.stringify(r.response.body, null, 2);
                      w(l), B(l);
                      const $ = JSON.stringify(r.querykey || [], null, 2);
                      W($), H($), N({});
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
              /* @__PURE__ */ n.jsx("button", { className: "btn btn-danger", onClick: () => fe(r.id, r.querykey), children: "🗑️" })
            ]
          },
          r.id
        )) }),
        k === "requests" && /* @__PURE__ */ n.jsx("div", { className: "requests-list", children: Y.map((r) => /* @__PURE__ */ n.jsxs(
          "div",
          {
            className: `request ${r.intercepted ? "intercepted" : "proxied"}`,
            children: [
              /* @__PURE__ */ n.jsxs("div", { className: "request-info", children: [
                /* @__PURE__ */ n.jsx("span", { className: "method", children: r.method }),
                /* @__PURE__ */ n.jsx("span", { className: "url", children: r.url }),
                r.intercepted && /* @__PURE__ */ n.jsx("span", { className: "badge", children: "MOCKED" })
              ] }),
              !r.intercepted && /* @__PURE__ */ n.jsx("button", { onClick: () => pe(r.url, 500), children: "âš¡500" })
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
            (r.ctrlKey || r.metaKey) && r.key === "Enter" && Z();
          },
          children: [
            /* @__PURE__ */ n.jsxs("div", { className: "editor-header", children: [
              /* @__PURE__ */ n.jsxs("div", { className: "editor-title", children: [
                /* @__PURE__ */ n.jsx(
                  "button",
                  {
                    className: "btn btn-primary",
                    disabled: !X || Object.keys(y).length > 0,
                    onClick: Z,
                    children: "Save"
                  }
                ),
                /* @__PURE__ */ n.jsx(
                  "button",
                  {
                    className: "btn btn-secondary",
                    style: { marginLeft: "1em" },
                    disabled: !X,
                    onClick: () => {
                      C && (m({ ...C }), w(v), W(ie), N({}));
                    },
                    children: "Reset"
                  }
                ),
                be && /* @__PURE__ */ n.jsx("span", { className: "saved-feedback", children: "✓ Saved!" })
              ] }),
              /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("span", { className: "text-[10px] opacity-80 font-semibold font-mono", children: o.id }) }),
              /* @__PURE__ */ n.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ n.jsx(
                "button",
                {
                  className: "btn btn-secondary",
                  onClick: () => {
                    m(null), N({});
                  },
                  children: "Cancel"
                }
              ) })
            ] }),
            /* @__PURE__ */ n.jsxs("div", { className: "interceptor-fields", children: [
              /* @__PURE__ */ n.jsxs("div", { className: "interceptor-field", children: [
                /* @__PURE__ */ n.jsx("label", { children: "method" }),
                /* @__PURE__ */ n.jsx("div", { className: "field-content", children: /* @__PURE__ */ n.jsx("div", { className: "method-selector flex gap-1 bg-white/5 p-1 rounded-md border border-white/10 w-fit", children: mr.map((r) => /* @__PURE__ */ n.jsx(
                  "button",
                  {
                    className: `btn ${o.method === r || !o.method && r === "ANY" ? "btn-primary active" : "btn-secondary"} !text-[10px] !px-2 !py-0.5`,
                    onClick: () => {
                      m(
                        (i) => i && { ...i, method: r === "ANY" ? "" : r }
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
                        className: `flex-1 bg-gray-800 text-white border rounded px-2 py-1 ${y.path ? "border-red-500" : "border-white/20"}`,
                        type: "text",
                        value: o.path,
                        onChange: (r) => {
                          const i = r.target.value;
                          m(
                            (l) => l && { ...l, path: i }
                          ), y.path && A();
                        }
                      }
                    ),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        className: `btn ${o.isRegex ? "btn-primary active" : "btn-secondary"} !text-[10px] !px-2 !py-0.5 h-auto`,
                        onClick: () => {
                          m(
                            (r) => r && { ...r, isRegex: !r.isRegex }
                          );
                        },
                        title: "Toggle Regex",
                        children: ".*"
                      }
                    )
                  ] }),
                  y.path && /* @__PURE__ */ n.jsx("span", { className: "error-message", children: y.path })
                ] })
              ] }),
              /* @__PURE__ */ n.jsxs("div", { className: "interceptor-field", children: [
                /* @__PURE__ */ n.jsx("label", { children: "querykey" }),
                /* @__PURE__ */ n.jsxs("div", { className: "field-content", children: [
                  /* @__PURE__ */ n.jsx(
                    "input",
                    {
                      className: `w-full bg-gray-800 text-white border rounded px-2 py-1 ${y.querykey ? "border-red-500" : "border-white/20"}`,
                      type: "text",
                      placeholder: '["key1", 123, { "id": 1 }]',
                      value: G,
                      onChange: (r) => {
                        W(r.target.value), y.querykey && A();
                      }
                    }
                  ),
                  y.querykey && /* @__PURE__ */ n.jsx("span", { className: "error-message", children: y.querykey })
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
                        className: `bg-gray-800 text-white border rounded px-2 py-1 text-sm w-full ${y.status ? "border-red-500" : "border-white/20"}`,
                        value: o.response.status,
                        onChange: (r) => {
                          const i = parseInt(r.target.value, 10);
                          m(
                            (l) => l && {
                              ...l,
                              response: { ...l.response, status: i }
                            }
                          ), y.status && A();
                        }
                      }
                    ),
                    y.status && /* @__PURE__ */ n.jsx("span", { className: "error-message", children: y.status })
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
                        const i = parseInt(r.target.value, 10);
                        m(
                          (l) => l && {
                            ...l,
                            response: { ...l.response, delayMs: i }
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
                      className: `w-full bg-gray-800 text-white border rounded p-2 text-xs font-mono h-40 ${y.body ? "border-red-500" : "border-white/20"}`,
                      value: V,
                      onChange: (r) => {
                        w(r.target.value), y.body && A();
                      }
                    }
                  ),
                  y.body && /* @__PURE__ */ n.jsx("span", { className: "error-message", children: y.body })
                ] })
              ] })
            ] })
          ]
        }
      ) })
    ] })
  ] });
};
export {
  jr as DevProxyWidget
};
