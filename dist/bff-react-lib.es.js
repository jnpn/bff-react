import re, { useState as f, useEffect as se } from "react";
import { useQueryClient as ne } from "@tanstack/react-query";
var z = { exports: {} }, Y = {};
var Q;
function ae() {
  if (Q) return Y;
  Q = 1;
  var h = /* @__PURE__ */ Symbol.for("react.transitional.element"), g = /* @__PURE__ */ Symbol.for("react.fragment");
  function u(b, i, p) {
    var N = null;
    if (p !== void 0 && (N = "" + p), i.key !== void 0 && (N = "" + i.key), "key" in i) {
      p = {};
      for (var k in i)
        k !== "key" && (p[k] = i[k]);
    } else p = i;
    return i = p.ref, {
      $$typeof: h,
      type: b,
      key: N,
      ref: i !== void 0 ? i : null,
      props: p
    };
  }
  return Y.Fragment = g, Y.jsx = u, Y.jsxs = u, Y;
}
var D = {};
var Z;
function oe() {
  return Z || (Z = 1, process.env.NODE_ENV !== "production" && (function() {
    function h(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === _ ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case x:
          return "Fragment";
        case F:
          return "Profiler";
        case E:
          return "StrictMode";
        case B:
          return "Suspense";
        case L:
          return "SuspenseList";
        case y:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case T:
            return "Portal";
          case l:
            return e.displayName || "Context";
          case w:
            return (e._context.displayName || "Context") + ".Consumer";
          case m:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case A:
            return t = e.displayName || null, t !== null ? t : h(e.type) || "Memo";
          case P:
            t = e._payload, e = e._init;
            try {
              return h(e(t));
            } catch {
            }
        }
      return null;
    }
    function g(e) {
      return "" + e;
    }
    function u(e) {
      try {
        g(e);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var s = t.error, a = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return s.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          a
        ), g(e);
      }
    }
    function b(e) {
      if (e === x) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === P)
        return "<...>";
      try {
        var t = h(e);
        return t ? "<" + t + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var e = q.A;
      return e === null ? null : e.getOwner();
    }
    function p() {
      return Error("react-stack-top-frame");
    }
    function N(e) {
      if (W.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function k(e, t) {
      function s() {
        V || (V = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      s.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: s,
        configurable: !0
      });
    }
    function H() {
      var e = h(this.type);
      return G[e] || (G[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function J(e, t, s, a, C, I) {
      var o = s.ref;
      return e = {
        $$typeof: d,
        type: e,
        key: t,
        props: s,
        _owner: a
      }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: H
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
        value: I
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function M(e, t, s, a, C, I) {
      var o = t.children;
      if (o !== void 0)
        if (a)
          if (U(o)) {
            for (a = 0; a < o.length; a++)
              R(o[a]);
            Object.freeze && Object.freeze(o);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else R(o);
      if (W.call(t, "key")) {
        o = h(e);
        var O = Object.keys(t).filter(function(te) {
          return te !== "key";
        });
        a = 0 < O.length ? "{key: someKey, " + O.join(": ..., ") + ": ...}" : "{key: someKey}", S[o + a] || (O = 0 < O.length ? "{" + O.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          a,
          o,
          O,
          o
        ), S[o + a] = !0);
      }
      if (o = null, s !== void 0 && (u(s), o = "" + s), N(t) && (u(t.key), o = "" + t.key), "key" in t) {
        s = {};
        for (var K in t)
          K !== "key" && (s[K] = t[K]);
      } else s = t;
      return o && k(
        s,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), J(
        e,
        o,
        s,
        i(),
        C,
        I
      );
    }
    function R(e) {
      n(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === P && (e._payload.status === "fulfilled" ? n(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function n(e) {
      return typeof e == "object" && e !== null && e.$$typeof === d;
    }
    var c = re, d = /* @__PURE__ */ Symbol.for("react.transitional.element"), T = /* @__PURE__ */ Symbol.for("react.portal"), x = /* @__PURE__ */ Symbol.for("react.fragment"), E = /* @__PURE__ */ Symbol.for("react.strict_mode"), F = /* @__PURE__ */ Symbol.for("react.profiler"), w = /* @__PURE__ */ Symbol.for("react.consumer"), l = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), B = /* @__PURE__ */ Symbol.for("react.suspense"), L = /* @__PURE__ */ Symbol.for("react.suspense_list"), A = /* @__PURE__ */ Symbol.for("react.memo"), P = /* @__PURE__ */ Symbol.for("react.lazy"), y = /* @__PURE__ */ Symbol.for("react.activity"), _ = /* @__PURE__ */ Symbol.for("react.client.reference"), q = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = Object.prototype.hasOwnProperty, U = Array.isArray, $ = console.createTask ? console.createTask : function() {
      return null;
    };
    c = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var V, G = {}, X = c.react_stack_bottom_frame.bind(
      c,
      p
    )(), j = $(b(p)), S = {};
    D.Fragment = x, D.jsx = function(e, t, s) {
      var a = 1e4 > q.recentlyCreatedOwnerStacks++;
      return M(
        e,
        t,
        s,
        !1,
        a ? Error("react-stack-top-frame") : X,
        a ? $(b(e)) : j
      );
    }, D.jsxs = function(e, t, s) {
      var a = 1e4 > q.recentlyCreatedOwnerStacks++;
      return M(
        e,
        t,
        s,
        !0,
        a ? Error("react-stack-top-frame") : X,
        a ? $(b(e)) : j
      );
    };
  })()), D;
}
var ee;
function le() {
  return ee || (ee = 1, process.env.NODE_ENV === "production" ? z.exports = ae() : z.exports = oe()), z.exports;
}
var r = le();
const v = "http://localhost:3000", ce = ["ANY", "GET", "POST", "PUT", "DELETE", "PATCH"], ue = () => {
  const [h, g] = f(!1), [u, b] = f("interceptors"), [i, p] = f([]), [N, k] = f([]), [H, J] = f(!1), [M, R] = f(!1), [n, c] = f(null), [d, T] = f(null), [x, E] = f(""), [F, w] = f(""), [l, m] = f({}), [B, L] = f(!1), A = (() => {
    if (!n || !d) return !1;
    const e = (n.method || "ANY") !== (d.method || "ANY"), t = n.path !== d.path, s = !!n.isRegex != !!d.isRegex, a = n.response.status !== d.response.status, C = (n.response.delayMs || 0) !== (d.response.delayMs || 0), I = x !== F, o = JSON.stringify(n.querykey || []) !== JSON.stringify(d.querykey || []);
    return e || t || s || a || C || I || o;
  })(), P = ne(), y = async () => {
    try {
      const t = await (await fetch(`${v}/__interceptors`)).json();
      p(t), J(!0);
    } catch {
      J(!1);
    }
  }, _ = (e) => {
    e && e.length > 0 && (console.log("debug:invalidating", e), P.invalidateQueries({ queryKey: e }));
  }, q = async () => {
    try {
      const t = await (await fetch(`${v}/__requests`)).json();
      k(t.reverse());
    } catch (e) {
      console.debug("debug:loadRequests", e);
    }
  }, W = async (e) => {
    await fetch(`${v}/__interceptors`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(e)
    }), _(e.querykey), y();
  }, U = async () => {
    if (!(!n || !j() || !A))
      try {
        const e = JSON.parse(x), t = {
          method: n.method,
          path: n.path,
          querykey: n.querykey,
          isRegex: n.isRegex,
          response: {
            ...n.response,
            body: e
          }
        };
        M ? (await W(t), R(!1)) : await V(n.id, t, d?.querykey), L(!0), setTimeout(() => L(!1), 2e3), m({}), setTimeout(() => {
          c(null), T(null), w("");
        }, 1e3);
      } catch (e) {
        console.error("Save error", e);
      }
  }, $ = async (e, t, s) => {
    await fetch(`${v}/__interceptors/${e}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ enabled: t })
    }), _(s), y();
  }, V = async (e, t, s) => {
    await fetch(`${v}/__interceptors/${e}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(t)
    }), s && _(s), t.querykey && _(t.querykey), y();
  }, G = async (e, t) => {
    await fetch(`${v}/__interceptors/${e}`, { method: "DELETE" }), _(t), y();
  }, X = async (e, t) => {
    await fetch(`${v}/__interceptors`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        path: e,
        response: { status: t, body: { error: "Simulated error" } }
      })
    }), y();
  }, j = () => {
    const e = {};
    if (!n) return !1;
    !n.path || n.path.trim() === "" ? e.path = "Path is required" : n.path.startsWith("/") || (e.path = "Path must start with /"), (!n.querykey || n.querykey.some((t) => t.trim() === "")) && (e.querykey = "All query keys must be non-empty strings"), (n.response.status < 100 || n.response.status > 599) && (e.status = "Status must be between 100 and 599");
    try {
      JSON.parse(x);
    } catch {
      e.body = "Invalid JSON body";
    }
    return m(e), Object.keys(e).length === 0;
  }, S = async (e) => {
    await fetch(`${v}/__scenarios/${e}/apply`, { method: "POST" }), y();
  };
  return se(() => {
    y();
    const e = setInterval(() => {
      y(), u === "requests" && q();
    }, 2e3);
    return () => clearInterval(e);
  }, [u]), /* @__PURE__ */ r.jsxs("div", { className: "dev-proxy-widget", children: [
    /* @__PURE__ */ r.jsxs(
      "button",
      {
        className: `dev-proxy-toggle ${H ? "connected" : "disconnected"}`,
        onClick: () => g(!h),
        children: [
          /* @__PURE__ */ r.jsx("span", { className: "status-dot" }),
          "DEV PROXY"
        ]
      }
    ),
    h && /* @__PURE__ */ r.jsxs("div", { className: "dev-proxy-panel flex-cols-2", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "left", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "panel-header", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "tabs", children: [
            /* @__PURE__ */ r.jsxs(
              "button",
              {
                className: u === "interceptors" ? "active" : "",
                onClick: () => b("interceptors"),
                children: [
                  "Interceptors (",
                  i.filter((e) => e.enabled).length,
                  ")"
                ]
              }
            ),
            /* @__PURE__ */ r.jsx(
              "button",
              {
                className: (u === "requests" ? "active" : "") + " hidden",
                onClick: () => b("requests"),
                children: "Requests"
              }
            )
          ] }),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              className: "new-btn",
              onClick: () => {
                R(!0);
                const e = {
                  id: "new",
                  enabled: !0,
                  method: "ANY",
                  path: "",
                  querykey: [],
                  response: { status: 200, body: {} }
                };
                c(e), T(e);
                const t = JSON.stringify({ status: 200, body: {} }, null, 2);
                E(t), w(t), m({});
              },
              children: "+ New"
            }
          ),
          /* @__PURE__ */ r.jsx("button", { className: "close-btn", onClick: () => g(!1), children: "x" })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "scenarios hidden!", children: [
          /* @__PURE__ */ r.jsx("button", { onClick: () => S("happy-path"), children: "😊 Happy" }),
          /* @__PURE__ */ r.jsx("button", { onClick: () => S("server-down"), children: "🚨 Down" }),
          /* @__PURE__ */ r.jsx("button", { onClick: () => S("auth-expired"), children: "🔒 Auth" })
        ] }),
        u === "interceptors" && /* @__PURE__ */ r.jsx("div", { className: "interceptors-list", children: i.map((e) => /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: `interceptor ${e.enabled ? "enabled" : "disabled"}`,
            children: [
              /* @__PURE__ */ r.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: e.enabled,
                  onChange: (t) => $(e.id, t.target.checked, e.querykey)
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
                      if (n === null || n.id !== e.id) {
                        c(e), T(e);
                        const t = JSON.stringify(e.response.body, null, 2);
                        E(t), w(t), m({});
                      } else
                        c(null), m({});
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
                      R(!0);
                      const t = {
                        ...e,
                        id: "new"
                      };
                      c(t), T(t);
                      const s = JSON.stringify(e.response.body, null, 2);
                      E(s), w(s), m({});
                    },
                    children: "Clone"
                  }
                ),
                e.isRegex && /* @__PURE__ */ r.jsx("span", { className: "badge", children: "REGEX" }),
                /* @__PURE__ */ r.jsxs("span", { children: [
                  "key ",
                  e.querykey && e.querykey.length > 0 ? e.querykey.join(",") : "none"
                ] })
              ] }),
              /* @__PURE__ */ r.jsx("button", { className: "btn btn-danger", onClick: () => G(e.id, e.querykey), children: "🗑️" })
            ]
          },
          e.id
        )) }),
        u === "requests" && /* @__PURE__ */ r.jsx("div", { className: "requests-list", children: N.map((e) => /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: `request ${e.intercepted ? "intercepted" : "proxied"}`,
            children: [
              /* @__PURE__ */ r.jsxs("div", { className: "request-info", children: [
                /* @__PURE__ */ r.jsx("span", { className: "method", children: e.method }),
                /* @__PURE__ */ r.jsx("span", { className: "url", children: e.url }),
                e.intercepted && /* @__PURE__ */ r.jsx("span", { className: "badge", children: "MOCKED" })
              ] }),
              !e.intercepted && /* @__PURE__ */ r.jsx("button", { onClick: () => X(e.url, 500), children: "âš¡500" })
            ]
          },
          e.id
        )) })
      ] }),
      /* @__PURE__ */ r.jsx("div", { className: `right ${n ? "is-editing" : ""}`, children: n && /* @__PURE__ */ r.jsxs(
        "div",
        {
          className: "m-2 mt-2 mb-0 p-3 rounded border border-white/10 h-[95%] interceptor-editor bg-gray-900/50",
          onKeyDown: (e) => {
            (e.ctrlKey || e.metaKey) && e.key === "Enter" && U();
          },
          children: [
            /* @__PURE__ */ r.jsxs("div", { className: "editor-header", children: [
              /* @__PURE__ */ r.jsxs("div", { className: "editor-title", children: [
                /* @__PURE__ */ r.jsx(
                  "button",
                  {
                    className: "btn btn-primary",
                    disabled: !A || Object.keys(l).length > 0,
                    onClick: U,
                    children: "Save"
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  "button",
                  {
                    className: "btn btn-secondary",
                    style: { marginLeft: "1em" },
                    disabled: !A,
                    onClick: () => {
                      d && (c({ ...d }), E(F), m({}));
                    },
                    children: "Reset"
                  }
                ),
                B && /* @__PURE__ */ r.jsx("span", { className: "saved-feedback", children: "✓ Saved!" })
              ] }),
              /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx("span", { className: "text-[10px] opacity-80 font-semibold font-mono", children: n.id }) }),
              /* @__PURE__ */ r.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ r.jsx(
                "button",
                {
                  className: "btn btn-secondary",
                  onClick: () => {
                    c(null), m({});
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
                    className: `btn ${n.method === e || !n.method && e === "ANY" ? "btn-primary active" : "btn-secondary"} !text-[10px] !px-2 !py-0.5`,
                    onClick: () => {
                      c(
                        (t) => t && { ...t, method: e }
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
                        className: `flex-1 bg-gray-800 text-white border rounded px-2 py-1 ${l.path ? "border-red-500" : "border-white/20"}`,
                        type: "text",
                        value: n.path,
                        onChange: (e) => {
                          const t = e.target.value;
                          c(
                            (s) => s && { ...s, path: t }
                          ), l.path && j();
                        }
                      }
                    ),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        className: `btn ${n.isRegex ? "btn-primary active" : "btn-secondary"} !text-[10px] !px-2 !py-0.5 h-auto`,
                        onClick: () => {
                          c(
                            (e) => e && { ...e, isRegex: !e.isRegex }
                          );
                        },
                        title: "Toggle Regex",
                        children: ".*"
                      }
                    )
                  ] }),
                  l.path && /* @__PURE__ */ r.jsx("span", { className: "error-message", children: l.path })
                ] })
              ] }),
              /* @__PURE__ */ r.jsxs("div", { className: "interceptor-field", children: [
                /* @__PURE__ */ r.jsx("label", { children: "querykey" }),
                /* @__PURE__ */ r.jsxs("div", { className: "field-content", children: [
                  /* @__PURE__ */ r.jsx(
                    "input",
                    {
                      className: `w-full bg-gray-800 text-white border rounded px-2 py-1 ${l.querykey ? "border-red-500" : "border-white/20"}`,
                      type: "text",
                      placeholder: "key1, key2",
                      value: n.querykey ? n.querykey.join(",") : "",
                      onChange: (e) => {
                        const t = e.target.value;
                        c(
                          (s) => s && { ...s, querykey: t.split(",").map((a) => a.trim()) }
                        ), l.querykey && j();
                      }
                    }
                  ),
                  l.querykey && /* @__PURE__ */ r.jsx("span", { className: "error-message", children: l.querykey })
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
                        className: `bg-gray-800 text-white border rounded px-2 py-1 text-sm w-full ${l.status ? "border-red-500" : "border-white/20"}`,
                        value: n.response.status,
                        onChange: (e) => {
                          const t = parseInt(e.target.value, 10);
                          c(
                            (s) => s && {
                              ...s,
                              response: { ...s.response, status: t }
                            }
                          ), l.status && j();
                        }
                      }
                    ),
                    l.status && /* @__PURE__ */ r.jsx("span", { className: "error-message", children: l.status })
                  ] })
                ] }),
                /* @__PURE__ */ r.jsxs("div", { className: "interceptor-field flex-1", children: [
                  /* @__PURE__ */ r.jsx("label", { children: "delay (ms)" }),
                  /* @__PURE__ */ r.jsx("div", { className: "field-content", children: /* @__PURE__ */ r.jsx(
                    "input",
                    {
                      type: "number",
                      className: "w-full bg-gray-800 text-white border border-white/20 rounded px-2 py-1",
                      value: n.response.delayMs || 0,
                      onChange: (e) => {
                        const t = parseInt(e.target.value, 10);
                        c(
                          (s) => s && {
                            ...s,
                            response: { ...s.response, delayMs: t }
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
                      className: `w-full bg-gray-800 text-white border rounded p-2 text-xs font-mono h-40 ${l.body ? "border-red-500" : "border-white/20"}`,
                      value: x,
                      onChange: (e) => {
                        E(e.target.value), l.body && j();
                      }
                    }
                  ),
                  l.body && /* @__PURE__ */ r.jsx("span", { className: "error-message", children: l.body })
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
  ue as DevProxyWidget
};
