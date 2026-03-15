import re, { useState as p, useEffect as se } from "react";
import { useQueryClient as ne } from "@tanstack/react-query";
var z = { exports: {} }, Y = {};
var Z;
function ae() {
  if (Z) return Y;
  Z = 1;
  var x = /* @__PURE__ */ Symbol.for("react.transitional.element"), E = /* @__PURE__ */ Symbol.for("react.fragment");
  function f(j, u, h) {
    var _ = null;
    if (h !== void 0 && (_ = "" + h), u.key !== void 0 && (_ = "" + u.key), "key" in u) {
      h = {};
      for (var R in u)
        R !== "key" && (h[R] = u[R]);
    } else h = u;
    return u = h.ref, {
      $$typeof: x,
      type: j,
      key: _,
      ref: u !== void 0 ? u : null,
      props: h
    };
  }
  return Y.Fragment = E, Y.jsx = f, Y.jsxs = f, Y;
}
var J = {};
var ee;
function oe() {
  return ee || (ee = 1, process.env.NODE_ENV !== "production" && (function() {
    function x(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === W ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case N:
          return "Fragment";
        case F:
          return "Profiler";
        case T:
          return "StrictMode";
        case L:
          return "Suspense";
        case q:
          return "SuspenseList";
        case Q:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case C:
            return "Portal";
          case P:
            return t.displayName || "Context";
          case A:
            return (t._context.displayName || "Context") + ".Consumer";
          case w:
            var a = t.render;
            return t = t.displayName, t || (t = a.displayName || a.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case i:
            return a = t.displayName || null, a !== null ? a : x(t.type) || "Memo";
          case m:
            a = t._payload, t = t._init;
            try {
              return x(t(a));
            } catch {
            }
        }
      return null;
    }
    function E(t) {
      return "" + t;
    }
    function f(t) {
      try {
        E(t);
        var a = !1;
      } catch {
        a = !0;
      }
      if (a) {
        a = console;
        var l = a.error, c = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return l.call(
          a,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          c
        ), E(t);
      }
    }
    function j(t) {
      if (t === N) return "<>";
      if (typeof t == "object" && t !== null && t.$$typeof === m)
        return "<...>";
      try {
        var a = x(t);
        return a ? "<" + a + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function u() {
      var t = S.A;
      return t === null ? null : t.getOwner();
    }
    function h() {
      return Error("react-stack-top-frame");
    }
    function _(t) {
      if (U.call(t, "key")) {
        var a = Object.getOwnPropertyDescriptor(t, "key").get;
        if (a && a.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function R(t, a) {
      function l() {
        V || (V = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          a
        ));
      }
      l.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: l,
        configurable: !0
      });
    }
    function H() {
      var t = x(this.type);
      return G[t] || (G[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function D(t, a, l, c, e, n) {
      var s = l.ref;
      return t = {
        $$typeof: y,
        type: t,
        key: a,
        props: l,
        _owner: c
      }, (s !== void 0 ? s : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: H
      }) : Object.defineProperty(t, "ref", { enumerable: !1, value: null }), t._store = {}, Object.defineProperty(t._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(t, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(t, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: e
      }), Object.defineProperty(t, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: n
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function M(t, a, l, c, e, n) {
      var s = a.children;
      if (s !== void 0)
        if (c)
          if (v(s)) {
            for (c = 0; c < s.length; c++)
              O(s[c]);
            Object.freeze && Object.freeze(s);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else O(s);
      if (U.call(a, "key")) {
        s = x(t);
        var b = Object.keys(a).filter(function(B) {
          return B !== "key";
        });
        c = 0 < b.length ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}", X[s + c] || (b = 0 < b.length ? "{" + b.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          c,
          s,
          b,
          s
        ), X[s + c] = !0);
      }
      if (s = null, l !== void 0 && (f(l), s = "" + l), _(a) && (f(a.key), s = "" + a.key), "key" in a) {
        l = {};
        for (var $ in a)
          $ !== "key" && (l[$] = a[$]);
      } else l = a;
      return s && R(
        l,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), D(
        t,
        s,
        l,
        u(),
        e,
        n
      );
    }
    function O(t) {
      o(t) ? t._store && (t._store.validated = 1) : typeof t == "object" && t !== null && t.$$typeof === m && (t._payload.status === "fulfilled" ? o(t._payload.value) && t._payload.value._store && (t._payload.value._store.validated = 1) : t._store && (t._store.validated = 1));
    }
    function o(t) {
      return typeof t == "object" && t !== null && t.$$typeof === y;
    }
    var d = re, y = /* @__PURE__ */ Symbol.for("react.transitional.element"), C = /* @__PURE__ */ Symbol.for("react.portal"), N = /* @__PURE__ */ Symbol.for("react.fragment"), T = /* @__PURE__ */ Symbol.for("react.strict_mode"), F = /* @__PURE__ */ Symbol.for("react.profiler"), A = /* @__PURE__ */ Symbol.for("react.consumer"), P = /* @__PURE__ */ Symbol.for("react.context"), w = /* @__PURE__ */ Symbol.for("react.forward_ref"), L = /* @__PURE__ */ Symbol.for("react.suspense"), q = /* @__PURE__ */ Symbol.for("react.suspense_list"), i = /* @__PURE__ */ Symbol.for("react.memo"), m = /* @__PURE__ */ Symbol.for("react.lazy"), Q = /* @__PURE__ */ Symbol.for("react.activity"), W = /* @__PURE__ */ Symbol.for("react.client.reference"), S = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, U = Object.prototype.hasOwnProperty, v = Array.isArray, g = console.createTask ? console.createTask : function() {
      return null;
    };
    d = {
      react_stack_bottom_frame: function(t) {
        return t();
      }
    };
    var V, G = {}, I = d.react_stack_bottom_frame.bind(
      d,
      h
    )(), K = g(j(h)), X = {};
    J.Fragment = N, J.jsx = function(t, a, l) {
      var c = 1e4 > S.recentlyCreatedOwnerStacks++;
      return M(
        t,
        a,
        l,
        !1,
        c ? Error("react-stack-top-frame") : I,
        c ? g(j(t)) : K
      );
    }, J.jsxs = function(t, a, l) {
      var c = 1e4 > S.recentlyCreatedOwnerStacks++;
      return M(
        t,
        a,
        l,
        !0,
        c ? Error("react-stack-top-frame") : I,
        c ? g(j(t)) : K
      );
    };
  })()), J;
}
var te;
function le() {
  return te || (te = 1, process.env.NODE_ENV === "production" ? z.exports = ae() : z.exports = oe()), z.exports;
}
var r = le();
const k = "http://localhost:3000", ce = ["ANY", "GET", "POST", "PUT", "DELETE", "PATCH"], pe = () => {
  const [x, E] = p(!1), [f, j] = p("interceptors"), [u, h] = p([]), [_, R] = p([]), [H, D] = p(!1), [M, O] = p(!1), [o, d] = p(null), [y, C] = p(null), [N, T] = p(""), [F, A] = p(""), [P, w] = p(""), [L, q] = p(""), [i, m] = p({}), [Q, W] = p(!1), S = (() => {
    if (!o || !y) return !1;
    const e = (o.method || "ANY") !== (y.method || "ANY"), n = o.path !== y.path, s = !!o.isRegex != !!y.isRegex, b = o.response.status !== y.response.status, $ = (o.response.delayMs || 0) !== (y.response.delayMs || 0);
    return e || n || s || b || $ || N !== F || P !== L;
  })(), U = ne(), v = async () => {
    try {
      const n = await (await fetch(`${k}/__interceptors`)).json();
      h(n), D(!0);
    } catch {
      D(!1);
    }
  }, g = (e) => {
    e && e.length > 0 && (console.log("debug:invalidating", e), U.invalidateQueries({ queryKey: e }));
  }, V = async () => {
    try {
      const n = await (await fetch(`${k}/__requests`)).json();
      R(n.reverse());
    } catch (e) {
      console.debug("debug:loadRequests", e);
    }
  }, G = async (e) => {
    await fetch(`${k}/__interceptors`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(e)
    }), g(e.querykey), v();
  }, I = async () => {
    if (!(!o || !l() || !S))
      try {
        const e = JSON.parse(N), n = JSON.parse(P), s = {
          method: o.method,
          path: o.path,
          querykey: n,
          isRegex: o.isRegex,
          response: {
            ...o.response,
            body: e
          }
        };
        M ? (await G(s), O(!1)) : await X(o.id, s, y?.querykey), W(!0), setTimeout(() => W(!1), 2e3), m({}), setTimeout(() => {
          d(null), C(null), A(""), q("");
        }, 1e3);
      } catch (e) {
        console.error("Save error", e);
      }
  }, K = async (e, n, s) => {
    await fetch(`${k}/__interceptors/${e}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ enabled: n })
    }), g(s), v();
  }, X = async (e, n, s) => {
    await fetch(`${k}/__interceptors/${e}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(n)
    }), s && g(s), n.querykey && g(n.querykey), v();
  }, t = async (e, n) => {
    await fetch(`${k}/__interceptors/${e}`, { method: "DELETE" }), g(n), v();
  }, a = async (e, n) => {
    await fetch(`${k}/__interceptors`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        path: e,
        response: { status: n, body: { error: "Simulated error" } }
      })
    }), v();
  }, l = () => {
    const e = {};
    if (!o) return !1;
    !o.path || o.path.trim() === "" ? e.path = "Path is required" : o.path.startsWith("/") || (e.path = "Path must start with /");
    try {
      const n = JSON.parse(P);
      Array.isArray(n) || (e.querykey = "Query key must be a JSON array");
    } catch {
      e.querykey = "Invalid JSON array";
    }
    (o.response.status < 100 || o.response.status > 599) && (e.status = "Status must be between 100 and 599");
    try {
      JSON.parse(N);
    } catch {
      e.body = "Invalid JSON body";
    }
    return m(e), Object.keys(e).length === 0;
  }, c = async (e) => {
    await fetch(`${k}/__scenarios/${e}/apply`, { method: "POST" }), v();
  };
  return se(() => {
    v();
    const e = setInterval(() => {
      v(), f === "requests" && V();
    }, 2e3);
    return () => clearInterval(e);
  }, [f]), /* @__PURE__ */ r.jsxs("div", { className: "dev-proxy-widget", children: [
    /* @__PURE__ */ r.jsxs(
      "button",
      {
        className: `dev-proxy-toggle ${H ? "connected" : "disconnected"}`,
        onClick: () => E(!x),
        children: [
          /* @__PURE__ */ r.jsx("span", { className: "status-dot" }),
          "DEV PROXY"
        ]
      }
    ),
    x && /* @__PURE__ */ r.jsxs("div", { className: "dev-proxy-panel flex-cols-2", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "left", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "panel-header", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "tabs", children: [
            /* @__PURE__ */ r.jsxs(
              "button",
              {
                className: f === "interceptors" ? "active" : "",
                onClick: () => j("interceptors"),
                children: [
                  "Interceptors (",
                  u.filter((e) => e.enabled).length,
                  ")"
                ]
              }
            ),
            /* @__PURE__ */ r.jsx(
              "button",
              {
                className: (f === "requests" ? "active" : "") + " hidden",
                onClick: () => j("requests"),
                children: "Requests"
              }
            )
          ] }),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              className: "new-btn",
              onClick: () => {
                O(!0);
                const e = {
                  id: "new",
                  enabled: !0,
                  method: "ANY",
                  path: "",
                  querykey: [],
                  response: { status: 200, body: {} }
                };
                d(e), C(e);
                const n = JSON.stringify({ status: 200, body: {} }, null, 2);
                T(n), A(n);
                const s = JSON.stringify([], null, 2);
                w(s), q(s), m({});
              },
              children: "+ New"
            }
          ),
          /* @__PURE__ */ r.jsx("button", { className: "close-btn", onClick: () => E(!1), children: "x" })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "scenarios hidden!", children: [
          /* @__PURE__ */ r.jsx("button", { onClick: () => c("happy-path"), children: "😊 Happy" }),
          /* @__PURE__ */ r.jsx("button", { onClick: () => c("server-down"), children: "🚨 Down" }),
          /* @__PURE__ */ r.jsx("button", { onClick: () => c("auth-expired"), children: "🔒 Auth" })
        ] }),
        f === "interceptors" && /* @__PURE__ */ r.jsx("div", { className: "interceptors-list", children: u.map((e) => /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: `interceptor ${e.enabled ? "enabled" : "disabled"}`,
            children: [
              /* @__PURE__ */ r.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: e.enabled,
                  onChange: (n) => K(e.id, n.target.checked, e.querykey)
                }
              ),
              /* @__PURE__ */ r.jsxs("div", { className: "interceptor-info", children: [
                /* @__PURE__ */ r.jsx("span", { className: "method", children: e.method || "ANY" }),
                /* @__PURE__ */ r.jsx("span", { className: "path", children: e.path }),
                /* @__PURE__ */ r.jsx(
                  "span",
                  {
                    className: `status status-${Math.floor(e.response.status / 100)}`,
                    children: e.response.status
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  "button",
                  {
                    className: "btn btn-action-primary",
                    onClick: () => {
                      if (o === null || o.id !== e.id) {
                        d(e), C(e);
                        const n = JSON.stringify(e.response.body, null, 2);
                        T(n), A(n);
                        const s = JSON.stringify(e.querykey || [], null, 2);
                        w(s), q(s), m({});
                      } else
                        d(null), m({});
                    },
                    children: "Edit"
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  "button",
                  {
                    className: "btn btn-action-secondary",
                    title: "Clone Interceptor",
                    onClick: () => {
                      O(!0);
                      const n = {
                        ...e,
                        id: "new"
                      };
                      d(n), C(n);
                      const s = JSON.stringify(e.response.body, null, 2);
                      T(s), A(s);
                      const b = JSON.stringify(e.querykey || [], null, 2);
                      w(b), q(b), m({});
                    },
                    children: "Clone"
                  }
                ),
                e.isRegex && /* @__PURE__ */ r.jsx("span", { className: "badge", children: "REGEX" }),
                /* @__PURE__ */ r.jsxs("span", { children: [
                  "key ",
                  e.querykey && e.querykey.length > 0 ? JSON.stringify(e.querykey) : "none"
                ] })
              ] }),
              /* @__PURE__ */ r.jsx("button", { className: "btn btn-danger", onClick: () => t(e.id, e.querykey), children: "🗑️" })
            ]
          },
          e.id
        )) }),
        f === "requests" && /* @__PURE__ */ r.jsx("div", { className: "requests-list", children: _.map((e) => /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: `request ${e.intercepted ? "intercepted" : "proxied"}`,
            children: [
              /* @__PURE__ */ r.jsxs("div", { className: "request-info", children: [
                /* @__PURE__ */ r.jsx("span", { className: "method", children: e.method }),
                /* @__PURE__ */ r.jsx("span", { className: "url", children: e.url }),
                e.intercepted && /* @__PURE__ */ r.jsx("span", { className: "badge", children: "MOCKED" })
              ] }),
              !e.intercepted && /* @__PURE__ */ r.jsx("button", { onClick: () => a(e.url, 500), children: "âš¡500" })
            ]
          },
          e.id
        )) })
      ] }),
      /* @__PURE__ */ r.jsx("div", { className: `right ${o ? "is-editing" : ""}`, children: o && /* @__PURE__ */ r.jsxs(
        "div",
        {
          className: "m-2 mt-2 mb-0 p-3 rounded border border-white/10 h-[95%] interceptor-editor bg-gray-900/50",
          onKeyDown: (e) => {
            (e.ctrlKey || e.metaKey) && e.key === "Enter" && I();
          },
          children: [
            /* @__PURE__ */ r.jsxs("div", { className: "editor-header", children: [
              /* @__PURE__ */ r.jsxs("div", { className: "editor-title", children: [
                /* @__PURE__ */ r.jsx(
                  "button",
                  {
                    className: "btn btn-primary",
                    disabled: !S || Object.keys(i).length > 0,
                    onClick: I,
                    children: "Save"
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  "button",
                  {
                    className: "btn btn-secondary",
                    style: { marginLeft: "1em" },
                    disabled: !S,
                    onClick: () => {
                      y && (d({ ...y }), T(F), w(L), m({}));
                    },
                    children: "Reset"
                  }
                ),
                Q && /* @__PURE__ */ r.jsx("span", { className: "saved-feedback", children: "✓ Saved!" })
              ] }),
              /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx("span", { className: "text-[10px] opacity-80 font-semibold font-mono", children: o.id }) }),
              /* @__PURE__ */ r.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ r.jsx(
                "button",
                {
                  className: "btn btn-secondary",
                  onClick: () => {
                    d(null), m({});
                  },
                  children: "Cancel"
                }
              ) })
            ] }),
            /* @__PURE__ */ r.jsxs("div", { className: "interceptor-fields", children: [
              /* @__PURE__ */ r.jsxs("div", { className: "interceptor-field", children: [
                /* @__PURE__ */ r.jsx("label", { children: "method" }),
                /* @__PURE__ */ r.jsx("div", { className: "field-content", children: /* @__PURE__ */ r.jsx("div", { className: "method-selector flex gap-1 bg-white/5 p-1 rounded-md border border-white/10 w-fit", children: ce.map((e) => /* @__PURE__ */ r.jsx(
                  "button",
                  {
                    className: `btn ${o.method === e || !o.method && e === "ANY" ? "btn-primary active" : "btn-secondary"} !text-[10px] !px-2 !py-0.5`,
                    onClick: () => {
                      d(
                        (n) => n && { ...n, method: e }
                      );
                    },
                    children: e
                  },
                  e
                )) }) })
              ] }),
              /* @__PURE__ */ r.jsxs("div", { className: "interceptor-field", children: [
                /* @__PURE__ */ r.jsx("label", { children: "path" }),
                /* @__PURE__ */ r.jsxs("div", { className: "field-content", children: [
                  /* @__PURE__ */ r.jsxs("div", { className: "flex gap-2", children: [
                    /* @__PURE__ */ r.jsx(
                      "input",
                      {
                        autoFocus: !0,
                        className: `flex-1 bg-gray-800 text-white border rounded px-2 py-1 ${i.path ? "border-red-500" : "border-white/20"}`,
                        type: "text",
                        value: o.path,
                        onChange: (e) => {
                          const n = e.target.value;
                          d(
                            (s) => s && { ...s, path: n }
                          ), i.path && l();
                        }
                      }
                    ),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        className: `btn ${o.isRegex ? "btn-primary active" : "btn-secondary"} !text-[10px] !px-2 !py-0.5 h-auto`,
                        onClick: () => {
                          d(
                            (e) => e && { ...e, isRegex: !e.isRegex }
                          );
                        },
                        title: "Toggle Regex",
                        children: ".*"
                      }
                    )
                  ] }),
                  i.path && /* @__PURE__ */ r.jsx("span", { className: "error-message", children: i.path })
                ] })
              ] }),
              /* @__PURE__ */ r.jsxs("div", { className: "interceptor-field", children: [
                /* @__PURE__ */ r.jsx("label", { children: "querykey" }),
                /* @__PURE__ */ r.jsxs("div", { className: "field-content", children: [
                  /* @__PURE__ */ r.jsx(
                    "input",
                    {
                      className: `w-full bg-gray-800 text-white border rounded px-2 py-1 ${i.querykey ? "border-red-500" : "border-white/20"}`,
                      type: "text",
                      placeholder: '["key1", 123, { "id": 1 }]',
                      value: P,
                      onChange: (e) => {
                        w(e.target.value), i.querykey && l();
                      }
                    }
                  ),
                  i.querykey && /* @__PURE__ */ r.jsx("span", { className: "error-message", children: i.querykey })
                ] })
              ] }),
              /* @__PURE__ */ r.jsxs("div", { style: { display: "flex" }, className: "flex gap-4", children: [
                /* @__PURE__ */ r.jsxs("div", { className: "interceptor-field flex-1", children: [
                  /* @__PURE__ */ r.jsx("label", { children: "status" }),
                  /* @__PURE__ */ r.jsxs("div", { className: "field-content", children: [
                    /* @__PURE__ */ r.jsx(
                      "input",
                      {
                        type: "number",
                        className: `bg-gray-800 text-white border rounded px-2 py-1 text-sm w-full ${i.status ? "border-red-500" : "border-white/20"}`,
                        value: o.response.status,
                        onChange: (e) => {
                          const n = parseInt(e.target.value, 10);
                          d(
                            (s) => s && {
                              ...s,
                              response: { ...s.response, status: n }
                            }
                          ), i.status && l();
                        }
                      }
                    ),
                    i.status && /* @__PURE__ */ r.jsx("span", { className: "error-message", children: i.status })
                  ] })
                ] }),
                /* @__PURE__ */ r.jsxs("div", { className: "interceptor-field flex-1", children: [
                  /* @__PURE__ */ r.jsx("label", { children: "delay (ms)" }),
                  /* @__PURE__ */ r.jsx("div", { className: "field-content", children: /* @__PURE__ */ r.jsx(
                    "input",
                    {
                      type: "number",
                      className: "w-full bg-gray-800 text-white border border-white/20 rounded px-2 py-1",
                      value: o.response.delayMs || 0,
                      onChange: (e) => {
                        const n = parseInt(e.target.value, 10);
                        d(
                          (s) => s && {
                            ...s,
                            response: { ...s.response, delayMs: n }
                          }
                        );
                      }
                    }
                  ) })
                ] })
              ] }),
              /* @__PURE__ */ r.jsxs("div", { className: "interceptor-field vertical", children: [
                /* @__PURE__ */ r.jsx("label", { children: "body (JSON)" }),
                /* @__PURE__ */ r.jsxs("div", { className: "field-content", children: [
                  /* @__PURE__ */ r.jsx(
                    "textarea",
                    {
                      className: `w-full bg-gray-800 text-white border rounded p-2 text-xs font-mono h-40 ${i.body ? "border-red-500" : "border-white/20"}`,
                      value: N,
                      onChange: (e) => {
                        T(e.target.value), i.body && l();
                      }
                    }
                  ),
                  i.body && /* @__PURE__ */ r.jsx("span", { className: "error-message", children: i.body })
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
  pe as DevProxyWidget
};
