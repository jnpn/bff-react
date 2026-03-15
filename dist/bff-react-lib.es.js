import Ue, { useState as m, useEffect as pr } from "react";
import { useQueryClient as yr } from "@tanstack/react-query";
var Se = { exports: {} }, me = {};
var Me;
function hr() {
  if (Me) return me;
  Me = 1;
  var z = Ue, Y = /* @__PURE__ */ Symbol.for("react.element"), k = /* @__PURE__ */ Symbol.for("react.fragment"), I = Object.prototype.hasOwnProperty, V = z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Z = { key: !0, ref: !0, __self: !0, __source: !0 };
  function U($, x, D) {
    var j, w = {}, o = null, p = null;
    D !== void 0 && (o = "" + D), x.key !== void 0 && (o = "" + x.key), x.ref !== void 0 && (p = x.ref);
    for (j in x) I.call(x, j) && !Z.hasOwnProperty(j) && (w[j] = x[j]);
    if ($ && $.defaultProps) for (j in x = $.defaultProps, x) w[j] === void 0 && (w[j] = x[j]);
    return { $$typeof: Y, type: $, key: o, ref: p, props: w, _owner: V.current };
  }
  return me.Fragment = k, me.jsx = U, me.jsxs = U, me;
}
var xe = {};
var Ke;
function vr() {
  return Ke || (Ke = 1, process.env.NODE_ENV !== "production" && (function() {
    var z = Ue, Y = /* @__PURE__ */ Symbol.for("react.element"), k = /* @__PURE__ */ Symbol.for("react.portal"), I = /* @__PURE__ */ Symbol.for("react.fragment"), V = /* @__PURE__ */ Symbol.for("react.strict_mode"), Z = /* @__PURE__ */ Symbol.for("react.profiler"), U = /* @__PURE__ */ Symbol.for("react.provider"), $ = /* @__PURE__ */ Symbol.for("react.context"), x = /* @__PURE__ */ Symbol.for("react.forward_ref"), D = /* @__PURE__ */ Symbol.for("react.suspense"), j = /* @__PURE__ */ Symbol.for("react.suspense_list"), w = /* @__PURE__ */ Symbol.for("react.memo"), o = /* @__PURE__ */ Symbol.for("react.lazy"), p = /* @__PURE__ */ Symbol.for("react.offscreen"), N = Symbol.iterator, ee = "@@iterator";
    function A(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = N && e[N] || e[ee];
      return typeof t == "function" ? t : null;
    }
    var R = z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(e) {
      {
        for (var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
          s[l - 1] = arguments[l];
        re("error", e, s);
      }
    }
    function re(e, t, s) {
      {
        var l = R.ReactDebugCurrentFrame, d = l.getStackAddendum();
        d !== "" && (t += "%s", s = s.concat([d]));
        var f = s.map(function(u) {
          return String(u);
        });
        f.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var J = !1, C = !1, ce = !1, te = !1, ne = !1, ue;
    ue = /* @__PURE__ */ Symbol.for("react.module.reference");
    function ge(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === I || e === Z || ne || e === V || e === D || e === j || te || e === p || J || C || ce || typeof e == "object" && e !== null && (e.$$typeof === o || e.$$typeof === w || e.$$typeof === U || e.$$typeof === $ || e.$$typeof === x || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ue || e.getModuleId !== void 0));
    }
    function de(e, t, s) {
      var l = e.displayName;
      if (l)
        return l;
      var d = t.displayName || t.name || "";
      return d !== "" ? s + "(" + d + ")" : s;
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
        case I:
          return "Fragment";
        case k:
          return "Portal";
        case Z:
          return "Profiler";
        case V:
          return "StrictMode";
        case D:
          return "Suspense";
        case j:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case $:
            var t = e;
            return h(t) + ".Consumer";
          case U:
            var s = e;
            return h(s._context) + ".Provider";
          case x:
            return de(e, e.render, "ForwardRef");
          case w:
            var l = e.displayName || null;
            return l !== null ? l : g(e.type) || "Memo";
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
    var F = Object.assign, W = 0, se, je, L, P, Re, fe, ae;
    function Ee() {
    }
    Ee.__reactDisabledLog = !0;
    function q() {
      {
        if (W === 0) {
          se = console.log, je = console.info, L = console.warn, P = console.error, Re = console.group, fe = console.groupCollapsed, ae = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ee,
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
        W++;
      }
    }
    function H() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, e, {
              value: se
            }),
            info: F({}, e, {
              value: je
            }),
            warn: F({}, e, {
              value: L
            }),
            error: F({}, e, {
              value: P
            }),
            group: F({}, e, {
              value: Re
            }),
            groupCollapsed: F({}, e, {
              value: fe
            }),
            groupEnd: F({}, e, {
              value: ae
            })
          });
        }
        W < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var pe = R.ReactCurrentDispatcher, ye;
    function B(e, t, s) {
      {
        if (ye === void 0)
          try {
            throw Error();
          } catch (d) {
            var l = d.stack.trim().match(/\n( *(at )?)/);
            ye = l && l[1] || "";
          }
        return `
` + ye + e;
      }
    }
    var he = !1, ie;
    {
      var _e = typeof WeakMap == "function" ? WeakMap : Map;
      ie = new _e();
    }
    function Ne(e, t) {
      if (!e || he)
        return "";
      {
        var s = ie.get(e);
        if (s !== void 0)
          return s;
      }
      var l;
      he = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = pe.current, pe.current = null, q();
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
              l = _;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (_) {
              l = _;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_) {
            l = _;
          }
          e();
        }
      } catch (_) {
        if (_ && l && typeof _.stack == "string") {
          for (var c = _.stack.split(`
`), E = l.stack.split(`
`), y = c.length - 1, v = E.length - 1; y >= 1 && v >= 0 && c[y] !== E[v]; )
            v--;
          for (; y >= 1 && v >= 0; y--, v--)
            if (c[y] !== E[v]) {
              if (y !== 1 || v !== 1)
                do
                  if (y--, v--, v < 0 || c[y] !== E[v]) {
                    var O = `
` + c[y].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && ie.set(e, O), O;
                  }
                while (y >= 1 && v >= 0);
              break;
            }
        }
      } finally {
        he = !1, pe.current = f, H(), Error.prepareStackTrace = d;
      }
      var le = e ? e.displayName || e.name : "", Q = le ? B(le) : "";
      return typeof e == "function" && ie.set(e, Q), Q;
    }
    function G(e, t, s) {
      return Ne(e, !1);
    }
    function ve(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function r(e, t, s) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ne(e, ve(e));
      if (typeof e == "string")
        return B(e);
      switch (e) {
        case D:
          return B("Suspense");
        case j:
          return B("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case x:
            return G(e.render);
          case w:
            return r(e.type, t, s);
          case o: {
            var l = e, d = l._payload, f = l._init;
            try {
              return r(f(d), t, s);
            } catch {
            }
          }
        }
      return "";
    }
    var a = Object.prototype.hasOwnProperty, i = {}, S = R.ReactDebugCurrentFrame;
    function T(e) {
      if (e) {
        var t = e._owner, s = r(e.type, e._source, t ? t.type : null);
        S.setExtraStackFrame(s);
      } else
        S.setExtraStackFrame(null);
    }
    function X(e, t, s, l, d) {
      {
        var f = Function.call.bind(a);
        for (var u in e)
          if (f(e, u)) {
            var c = void 0;
            try {
              if (typeof e[u] != "function") {
                var E = Error((l || "React class") + ": " + s + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              c = e[u](t, u, l, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              c = y;
            }
            c && !(c instanceof Error) && (T(d), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", s, u, typeof c), T(null)), c instanceof Error && !(c.message in i) && (i[c.message] = !0, T(d), b("Failed %s type: %s", s, c.message), T(null));
          }
      }
    }
    var be = Array.isArray;
    function M(e) {
      return be(e);
    }
    function He(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, s = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return s;
      }
    }
    function Be(e) {
      try {
        return ke(e), !1;
      } catch {
        return !0;
      }
    }
    function ke(e) {
      return "" + e;
    }
    function Pe(e) {
      if (Be(e))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", He(e)), ke(e);
    }
    var qe = R.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ie, $e;
    function Xe(e) {
      if (a.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (a.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ze(e, t) {
      typeof e.ref == "string" && qe.current;
    }
    function Ze(e, t) {
      {
        var s = function() {
          Ie || (Ie = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function er(e, t) {
      {
        var s = function() {
          $e || ($e = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var rr = function(e, t, s, l, d, f, u) {
      var c = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: Y,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: s,
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
        value: l
      }), Object.defineProperty(c, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function tr(e, t, s, l, d) {
      {
        var f, u = {}, c = null, E = null;
        s !== void 0 && (Pe(s), c = "" + s), Qe(t) && (Pe(t.key), c = "" + t.key), Xe(t) && (E = t.ref, ze(t, d));
        for (f in t)
          a.call(t, f) && !Ge.hasOwnProperty(f) && (u[f] = t[f]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (f in y)
            u[f] === void 0 && (u[f] = y[f]);
        }
        if (c || E) {
          var v = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && Ze(u, v), E && er(u, v);
        }
        return rr(e, c, E, d, l, qe.current, u);
      }
    }
    var we = R.ReactCurrentOwner, De = R.ReactDebugCurrentFrame;
    function oe(e) {
      if (e) {
        var t = e._owner, s = r(e.type, e._source, t ? t.type : null);
        De.setExtraStackFrame(s);
      } else
        De.setExtraStackFrame(null);
    }
    var Oe;
    Oe = !1;
    function Ce(e) {
      return typeof e == "object" && e !== null && e.$$typeof === Y;
    }
    function Ae() {
      {
        if (we.current) {
          var e = g(we.current.type);
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
    var Je = {};
    function sr(e) {
      {
        var t = Ae();
        if (!t) {
          var s = typeof e == "string" ? e : e.displayName || e.name;
          s && (t = `

Check the top-level render call using <` + s + ">.");
        }
        return t;
      }
    }
    function Fe(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var s = sr(t);
        if (Je[s])
          return;
        Je[s] = !0;
        var l = "";
        e && e._owner && e._owner !== we.current && (l = " It was passed a child from " + g(e._owner.type) + "."), oe(e), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, l), oe(null);
      }
    }
    function Ye(e, t) {
      {
        if (typeof e != "object")
          return;
        if (M(e))
          for (var s = 0; s < e.length; s++) {
            var l = e[s];
            Ce(l) && Fe(l, t);
          }
        else if (Ce(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var d = A(e);
          if (typeof d == "function" && d !== e.entries)
            for (var f = d.call(e), u; !(u = f.next()).done; )
              Ce(u.value) && Fe(u.value, t);
        }
      }
    }
    function ar(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var s;
        if (typeof t == "function")
          s = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === x || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === w))
          s = t.propTypes;
        else
          return;
        if (s) {
          var l = g(t);
          X(s, e.props, "prop", l, e);
        } else if (t.PropTypes !== void 0 && !Oe) {
          Oe = !0;
          var d = g(t);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var t = Object.keys(e.props), s = 0; s < t.length; s++) {
          var l = t[s];
          if (l !== "children" && l !== "key") {
            oe(e), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", l), oe(null);
            break;
          }
        }
        e.ref !== null && (oe(e), b("Invalid attribute `ref` supplied to `React.Fragment`."), oe(null));
      }
    }
    var We = {};
    function Le(e, t, s, l, d, f) {
      {
        var u = ge(e);
        if (!u) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var E = nr();
          E ? c += E : c += Ae();
          var y;
          e === null ? y = "null" : M(e) ? y = "array" : e !== void 0 && e.$$typeof === Y ? (y = "<" + (g(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, c);
        }
        var v = tr(e, t, s, d, f);
        if (v == null)
          return v;
        if (u) {
          var O = t.children;
          if (O !== void 0)
            if (l)
              if (M(O)) {
                for (var le = 0; le < O.length; le++)
                  Ye(O[le], e);
                Object.freeze && Object.freeze(O);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ye(O, e);
        }
        if (a.call(t, "key")) {
          var Q = g(e), _ = Object.keys(t).filter(function(fr) {
            return fr !== "key";
          }), Te = _.length > 0 ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!We[Q + Te]) {
            var dr = _.length > 0 ? "{" + _.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Te, Q, dr, Q), We[Q + Te] = !0;
          }
        }
        return e === I ? ir(v) : ar(v), v;
      }
    }
    function or(e, t, s) {
      return Le(e, t, s, !0);
    }
    function lr(e, t, s) {
      return Le(e, t, s, !1);
    }
    var cr = lr, ur = or;
    xe.Fragment = I, xe.jsx = cr, xe.jsxs = ur;
  })()), xe;
}
var Ve;
function br() {
  return Ve || (Ve = 1, process.env.NODE_ENV === "production" ? Se.exports = hr() : Se.exports = vr()), Se.exports;
}
var n = br();
const K = "http://localhost:3000", mr = ["ANY", "GET", "POST", "PUT", "DELETE", "PATCH"], jr = () => {
  const [z, Y] = m(!1), [k, I] = m("interceptors"), [V, Z] = m([]), [U, $] = m([]), [x, D] = m(!1), [j, w] = m(!1), [o, p] = m(null), [N, ee] = m(null), [A, R] = m(""), [b, re] = m(""), [J, C] = m(""), [ce, te] = m(""), [ne, ue] = m(!1), [ge, de] = m(""), [h, g] = m({}), [F, W] = m(!1), [se, je] = m(() => {
    const r = localStorage.getItem("interceptor_history");
    try {
      return r ? JSON.parse(r) : {};
    } catch {
      return {};
    }
  }), [L, P] = m(-1), Re = (r, a, i) => {
    !r.id || r.id === "new" || je((S) => {
      const T = {
        interceptor: { ...r },
        responseText: a,
        queryKeyText: i,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      }, X = { ...S }, be = X[r.id] || [], M = be[0];
      return M && JSON.stringify(M.interceptor) === JSON.stringify(T.interceptor) && M.responseText === T.responseText && M.queryKeyText === T.queryKeyText ? S : (X[r.id] = [T, ...be].slice(0, 50), localStorage.setItem("interceptor_history", JSON.stringify(X)), X);
    });
  }, fe = (r) => {
    if (!o) return;
    const a = se[o.id] || [];
    if (a.length === 0) return;
    const i = L + r;
    if (!(i < -1 || i >= a.length))
      if (P(i), i === -1)
        N && (p(N), R(b), C(ce));
      else {
        const S = a[i];
        p(S.interceptor), R(S.responseText), C(S.queryKeyText);
      }
  }, ae = (() => {
    if (!o || !N) return !1;
    const r = (o.method || "") !== (N.method || ""), a = o.path !== N.path, i = !!o.isRegex != !!N.isRegex, S = o.response.status !== N.response.status, T = (o.response.delayMs || 0) !== (N.response.delayMs || 0);
    return r || a || i || S || T || A !== b || J !== ce;
  })(), Ee = yr(), q = async () => {
    try {
      const a = await (await fetch(`${K}/__interceptors`)).json();
      Z(a), D(!0);
    } catch {
      D(!1);
    }
  }, H = (r) => {
    r && r.length > 0 && (console.log("debug:invalidating", r), Ee.invalidateQueries({ queryKey: r }));
  }, pe = async () => {
    try {
      const a = await (await fetch(`${K}/__requests`)).json();
      $(a.reverse());
    } catch (r) {
      console.debug("debug:loadRequests", r);
    }
  }, ye = async (r) => {
    await fetch(`${K}/__interceptors`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(r)
    }), H(r.querykey), q();
  }, B = async () => {
    if (!(!o || !G() || !ae))
      try {
        const r = JSON.parse(A), a = JSON.parse(J), i = {
          method: o.method,
          path: o.path,
          querykey: a,
          isRegex: o.isRegex,
          response: {
            ...o.response,
            body: r
          }
        };
        j ? (await ye(i), w(!1)) : (await ie(o.id, i, N?.querykey), Re(o, A, J)), W(!0), setTimeout(() => W(!1), 2e3), g({}), setTimeout(() => {
          p(null), ee(null), re(""), te(""), P(-1);
        }, 1e3);
      } catch (r) {
        console.error("Save error", r);
      }
  }, he = async (r, a, i) => {
    await fetch(`${K}/__interceptors/${r}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ enabled: a })
    }), H(i), q();
  }, ie = async (r, a, i) => {
    await fetch(`${K}/__interceptors/${r}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(a)
    }), i && H(i), a.querykey && H(a.querykey), q();
  }, _e = async (r, a) => {
    await fetch(`${K}/__interceptors/${r}`, { method: "DELETE" }), H(a), q();
  }, Ne = async (r, a) => {
    await fetch(`${K}/__interceptors`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        path: r,
        response: { status: a, body: { error: "Simulated error" } }
      })
    }), q();
  }, G = () => {
    const r = {};
    if (!o) return !1;
    !o.path || o.path.trim() === "" ? r.path = "Path is required" : o.path.startsWith("/") || (r.path = "Path must start with /");
    try {
      const a = JSON.parse(J);
      Array.isArray(a) || (r.querykey = "Query key must be a JSON array");
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
  }, ve = async (r) => {
    await fetch(`${K}/__scenarios/${r}/apply`, { method: "POST" }), q();
  };
  return pr(() => {
    q();
    const r = setInterval(() => {
      q(), k === "requests" && pe();
    }, 2e3);
    return () => clearInterval(r);
  }, [k]), /* @__PURE__ */ n.jsxs("div", { className: "dev-proxy-widget", children: [
    /* @__PURE__ */ n.jsxs(
      "button",
      {
        className: `dev-proxy-toggle ${x ? "connected" : "disconnected"}`,
        onClick: () => Y(!z),
        children: [
          /* @__PURE__ */ n.jsx("span", { className: "status-dot" }),
          "DEV PROXY"
        ]
      }
    ),
    z && /* @__PURE__ */ n.jsxs("div", { className: "dev-proxy-panel flex-cols-2", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "left", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "panel-header", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "tabs", children: [
            /* @__PURE__ */ n.jsxs(
              "button",
              {
                className: k === "interceptors" ? "active" : "",
                onClick: () => I("interceptors"),
                children: [
                  "Interceptors (",
                  V.filter((r) => r.enabled).length,
                  ")"
                ]
              }
            ),
            /* @__PURE__ */ n.jsx(
              "button",
              {
                className: k === "requests" ? "active" : "",
                onClick: () => I("requests"),
                children: "Requests"
              }
            )
          ] }),
          /* @__PURE__ */ n.jsx(
            "button",
            {
              className: "new-btn",
              onClick: () => {
                w(!0);
                const r = {
                  id: "new",
                  enabled: !0,
                  method: "",
                  path: "",
                  querykey: [],
                  response: { status: 200, body: {} }
                };
                p(r), ee(r);
                const a = JSON.stringify({ status: 200, body: {} }, null, 2);
                R(a), re(a);
                const i = JSON.stringify([], null, 2);
                C(i), te(i), g({}), P(-1);
              },
              children: "+ New"
            }
          ),
          /* @__PURE__ */ n.jsx("button", { className: "close-btn", onClick: () => Y(!1), children: "x" })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "scenarios hidden!", children: [
          /* @__PURE__ */ n.jsx("button", { onClick: () => ve("happy-path"), children: "😊 Happy" }),
          /* @__PURE__ */ n.jsx("button", { onClick: () => ve("server-down"), children: "🚨 Down" }),
          /* @__PURE__ */ n.jsx("button", { onClick: () => ve("auth-expired"), children: "🔒 Auth" })
        ] }),
        k === "interceptors" && /* @__PURE__ */ n.jsx("div", { className: "interceptors-list", children: V.map((r) => /* @__PURE__ */ n.jsxs(
          "div",
          {
            className: `interceptor ${r.enabled ? "enabled" : "disabled"}`,
            children: [
              /* @__PURE__ */ n.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.enabled,
                  onChange: (a) => he(r.id, a.target.checked, r.querykey)
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
                        p(r), ee(r);
                        const a = JSON.stringify(r.response.body, null, 2);
                        R(a), re(a);
                        const i = JSON.stringify(r.querykey || [], null, 2);
                        C(i), te(i), g({}), P(-1);
                      } else
                        p(null), g({}), P(-1);
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
                      w(!0);
                      const a = {
                        ...r,
                        id: "new"
                      };
                      p(a), ee(a);
                      const i = JSON.stringify(r.response.body, null, 2);
                      R(i), re(i);
                      const S = JSON.stringify(r.querykey || [], null, 2);
                      C(S), te(S), g({}), P(-1);
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
              /* @__PURE__ */ n.jsx("button", { className: "btn btn-danger", onClick: () => _e(r.id, r.querykey), children: "🗑️" })
            ]
          },
          r.id
        )) }),
        k === "requests" && /* @__PURE__ */ n.jsx("div", { className: "requests-list", children: U.map((r) => /* @__PURE__ */ n.jsxs(
          "div",
          {
            className: `request ${r.intercepted ? "intercepted" : "proxied"}`,
            children: [
              /* @__PURE__ */ n.jsxs("div", { className: "request-info", children: [
                /* @__PURE__ */ n.jsx("span", { className: "method", children: r.method }),
                /* @__PURE__ */ n.jsx("span", { className: "url", children: r.url }),
                r.intercepted && /* @__PURE__ */ n.jsx("span", { className: "badge", children: "MOCKED" })
              ] }),
              !r.intercepted && /* @__PURE__ */ n.jsx("button", { onClick: () => Ne(r.url, 500), children: "âš¡500" })
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
            (r.ctrlKey || r.metaKey) && r.key === "Enter" && B();
          },
          children: [
            /* @__PURE__ */ n.jsxs("div", { className: "editor-header", children: [
              /* @__PURE__ */ n.jsxs("div", { className: "editor-title", children: [
                /* @__PURE__ */ n.jsx(
                  "button",
                  {
                    className: "btn btn-primary",
                    disabled: !ae || Object.keys(h).length > 0,
                    onClick: B,
                    children: "Save"
                  }
                ),
                /* @__PURE__ */ n.jsx(
                  "button",
                  {
                    className: "btn btn-secondary",
                    style: { marginLeft: "1em" },
                    disabled: !ae,
                    onClick: () => {
                      N && (p({ ...N }), R(b), C(ce), g({}), P(-1));
                    },
                    children: "Reset"
                  }
                ),
                F && /* @__PURE__ */ n.jsx("span", { className: "saved-feedback", children: "✓ Saved!" })
              ] }),
              /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("span", { className: "text-[10px] opacity-80 font-semibold font-mono", children: o.id }) }),
              /* @__PURE__ */ n.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    className: `btn ${ne ? "btn-primary active" : "btn-secondary"}`,
                    onClick: () => {
                      if (ne)
                        try {
                          const r = JSON.parse(ge);
                          p(r), R(JSON.stringify(r.response?.body || {}, null, 2)), C(JSON.stringify(r.querykey || [], null, 2));
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
                          de(JSON.stringify(r, null, 2));
                        } catch {
                          const r = { ...o, response: { ...o.response, body: A }, querykey: J };
                          de(JSON.stringify(r, null, 2));
                        }
                      ue(!ne);
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
                      p(null), g({}), ue(!1);
                    },
                    children: "Cancel"
                  }
                )
              ] })
            ] }),
            !j && /* @__PURE__ */ n.jsxs("div", { className: "history-navigator flex items-center justify-center gap-2 py-2 border-b border-white/5 mb-3", children: [
              /* @__PURE__ */ n.jsx(
                "button",
                {
                  className: "btn btn-secondary !px-2 !py-0.5",
                  title: "Previous Version",
                  disabled: !se[o.id] || L >= se[o.id].length - 1,
                  onClick: () => fe(1),
                  children: "←"
                }
              ),
              /* @__PURE__ */ n.jsxs("div", { className: "flex flex-col items-center min-w-[80px]", children: [
                /* @__PURE__ */ n.jsx("span", { className: "text-[9px] font-bold opacity-50 uppercase tracking-tighter", children: "History" }),
                /* @__PURE__ */ n.jsx("span", { className: "text-[11px] font-mono font-bold text-blue-400", children: L === -1 ? "LATEST" : `REV -${L + 1}` })
              ] }),
              /* @__PURE__ */ n.jsx(
                "button",
                {
                  className: "btn btn-secondary !px-2 !py-0.5",
                  title: "Next Version",
                  disabled: L === -1,
                  onClick: () => fe(-1),
                  children: "→"
                }
              )
            ] }),
            /* @__PURE__ */ n.jsx("div", { className: "interceptor-fields", children: ne ? /* @__PURE__ */ n.jsxs("div", { className: "interceptor-field vertical h-full", children: [
              /* @__PURE__ */ n.jsx("label", { children: "Raw JSON" }),
              /* @__PURE__ */ n.jsx("div", { className: "field-content h-full", children: /* @__PURE__ */ n.jsx(
                "textarea",
                {
                  className: "w-full bg-gray-800 text-white border border-white/20 rounded p-2 text-xs font-mono grow",
                  style: { height: "450px" },
                  value: ge,
                  onChange: (r) => {
                    const a = r.target.value;
                    de(a);
                    try {
                      const i = JSON.parse(a);
                      p(i), i.response?.body && R(JSON.stringify(i.response.body, null, 2)), i.querykey && C(JSON.stringify(i.querykey, null, 2));
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
                      p(
                        (a) => a && { ...a, method: r === "ANY" ? "" : r }
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
                          const a = r.target.value;
                          p(
                            (i) => i && { ...i, path: a }
                          ), h.path && G();
                        }
                      }
                    ),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        className: `btn ${o.isRegex ? "btn-primary active" : "btn-secondary"} !text-[10px] !px-2 !py-0.5 h-auto`,
                        onClick: () => {
                          p(
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
                        C(r.target.value), h.querykey && G();
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
                          const a = parseInt(r.target.value, 10);
                          p(
                            (i) => i && {
                              ...i,
                              response: { ...i.response, status: a }
                            }
                          ), h.status && G();
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
                        const a = parseInt(r.target.value, 10);
                        p(
                          (i) => i && {
                            ...i,
                            response: { ...i.response, delayMs: a }
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
                        R(r.target.value), h.body && G();
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
