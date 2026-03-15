// src/components/meta/DevProxyWidget.tsx
import { useState, useEffect } from "react";
import "./DevProxyWidget.css";
import { useQueryClient } from "@tanstack/react-query";

const PROXY_URL = import.meta.env.VITE_PROXY_URL || "http://localhost:3000";
const METHODS = ["ANY", "GET", "POST", "PUT", "DELETE", "PATCH"];

interface Interceptor {
  id: string;
  enabled: boolean;
  method?: string;
  path: string;
  querykey: string[];
  isRegex?: boolean;
  response: {
    status: number;
    body?: object;
    delayMs?: number;
  };
}

interface RequestLog {
  id: string;
  timestamp: string;
  method: string;
  url: string;
  intercepted: boolean;
  interceptorId?: string;
  status?: number;
  duration: number;
}

export const DevProxyWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tab, setTab] = useState<"interceptors" | "requests">("interceptors");
  const [interceptors, setInterceptors] = useState<Interceptor[]>([]);
  const [requests, setRequests] = useState<RequestLog[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [interceptorEdited, setInterceptorEdited] =
    useState<Interceptor | null>(null);
  const [initialInterceptor, setInitialInterceptor] =
    useState<Interceptor | null>(null);
  const [responseText, setResponseText] = useState<string>("");
  const [initialResponseText, setInitialResponseText] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSavedFeedback, setShowSavedFeedback] = useState(false);

  const isDirty = (() => {
    if (!interceptorEdited || !initialInterceptor) return false;

    const methodChanged =
      (interceptorEdited.method || "ANY") !==
      (initialInterceptor.method || "ANY");
    const pathChanged = interceptorEdited.path !== initialInterceptor.path;
    const isRegexChanged =
      !!interceptorEdited.isRegex !== !!initialInterceptor.isRegex;
    const statusChanged =
      interceptorEdited.response.status !== initialInterceptor.response.status;
    const delayChanged =
      (interceptorEdited.response.delayMs || 0) !==
      (initialInterceptor.response.delayMs || 0);
    const bodyChanged = responseText !== initialResponseText;
    const querykeyChanged =
      JSON.stringify(interceptorEdited.querykey || []) !==
      JSON.stringify(initialInterceptor.querykey || []);

    return (
      methodChanged ||
      pathChanged ||
      isRegexChanged ||
      statusChanged ||
      delayChanged ||
      bodyChanged ||
      querykeyChanged
    );
  })();

  const queryClient = useQueryClient();

  // Load interceptors
  const loadInterceptors = async () => {
    try {
      const res = await fetch(`${PROXY_URL}/__interceptors`);
      const data = await res.json();
      setInterceptors(data);
      setIsConnected(true);
    } catch {
      setIsConnected(false);
    }
  };

  const invalidateInterceptorLocally = (id: string) => {
    const updatedInterceptor = interceptors.filter((i) => i.id === id)[0];
    console.log("debug:updatedInterceptor", updatedInterceptor, "found?");
    if (updatedInterceptor) {
      const { querykey } = updatedInterceptor;
      console.log(
        "debug:updatedInterceptor",
        querykey,
        "of",
        updatedInterceptor,
        "invalidation",
      );
      queryClient.invalidateQueries({ queryKey: querykey });
    }
  };

  // Load requests
  const loadRequests = async () => {
    try {
      const res = await fetch(`${PROXY_URL}/__requests`);
      const data = await res.json();
      setRequests(data.reverse());
    } catch (err) {
      console.debug("debug:loadRequests", err);
    }
  };

  const createInterceptor = async (
    interceptor: Partial<Interceptor>
  ) => {
    await fetch(`${PROXY_URL}/__interceptors`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(interceptor),
    });
    loadInterceptors();
  };

  const handleSave = async () => {
    if (!interceptorEdited || !validate() || !isDirty) return;
    try {
      const parsedBody = JSON.parse(responseText);

      const payload = {
        method: interceptorEdited.method,
        path: interceptorEdited.path,
        querykey: interceptorEdited.querykey,
        isRegex: interceptorEdited.isRegex,
        response: {
          ...interceptorEdited.response,
          body: parsedBody,
        },
      };

      if (isCreating) {
        await createInterceptor(payload);
        setIsCreating(false);
      } else {
        await updateInterceptor(interceptorEdited.id, payload);
      }
      setShowSavedFeedback(true);
      setTimeout(() => setShowSavedFeedback(false), 2000);
      setErrors({});
      setTimeout(() => {
        setInterceptorEdited(null);
        setInitialInterceptor(null);
        setInitialResponseText("");
      }, 1000);
    } catch (e) {
      console.error("Save error", e);
    }
  };

  // Toggle interceptor
  const toggleInterceptor = async (id: string, enabled: boolean) => {
    await fetch(`${PROXY_URL}/__interceptors/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ enabled }),
    });
    invalidateInterceptorLocally(id);
    loadInterceptors();
  };

  // Update interceptor
  const updateInterceptor = async (
    id: string,
    updates: Partial<Interceptor>
  ) => {
    await fetch(`${PROXY_URL}/__interceptors/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });
    invalidateInterceptorLocally(id);
    loadInterceptors();
  };

  // Delete interceptor
  const deleteInterceptor = async (id: string) => {
    await fetch(`${PROXY_URL}/__interceptors/${id}`, { method: "DELETE" });
    loadInterceptors();
  };

  // Quick add error
  const quickAddError = async (path: string, status: number) => {
    await fetch(`${PROXY_URL}/__interceptors`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        path,
        response: { status, body: { error: "Simulated error" } },
      }),
    });
    loadInterceptors();
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!interceptorEdited) return false;

    if (!interceptorEdited.path || interceptorEdited.path.trim() === "") {
      newErrors.path = "Path is required";
    } else if (!interceptorEdited.path.startsWith("/")) {
      newErrors.path = "Path must start with /";
    }

    if (
      !interceptorEdited.querykey ||
      interceptorEdited.querykey.some((k) => k.trim() === "")
    ) {
      newErrors.querykey = "All query keys must be non-empty strings";
    }

    if (
      interceptorEdited.response.status < 100 ||
      interceptorEdited.response.status > 599
    ) {
      newErrors.status = "Status must be between 100 and 599";
    }

    try {
      JSON.parse(responseText);
    } catch {
      newErrors.body = "Invalid JSON body";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Apply scenario
  const applyScenario = async (name: string) => {
    await fetch(`${PROXY_URL}/__scenarios/${name}/apply`, { method: "POST" });
    loadInterceptors();
  };

  useEffect(() => {
    loadInterceptors();
    const interval = setInterval(() => {
      loadInterceptors();
      if (tab === "requests") loadRequests();
    }, 2000);
    return () => clearInterval(interval);
  }, [tab]);

  if (!import.meta.env.DEV) return null;

  return (
    <div className="dev-proxy-widget">
      {/* Floating Button */}
      <button
        className={`dev-proxy-toggle ${isConnected ? "connected" : "disconnected"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="status-dot" />
        DEV PROXY
      </button>

      {/* Panel */}
      {isOpen && (
        <div className="dev-proxy-panel flex-cols-2">
          <div className="left">
            <div className="panel-header">
              <div className="tabs">
                <button
                  className={tab === "interceptors" ? "active" : ""}
                  onClick={() => setTab("interceptors")}
                >
                  Interceptors ({interceptors.filter((i) => i.enabled).length})
                </button>
                <button
                  className={(tab === "requests" ? "active" : "") + " hidden"}
                  onClick={() => setTab("requests")}
                >
                  Requests
                </button>
              </div>
<button
  className="new-btn"
  onClick={() => {
    setIsCreating(true);
    const newI = {
      id: "new",
      enabled: true,
      method: "ANY",
      path: "",
      querykey: [],
      response: { status: 200, body: {} },
    };
    setInterceptorEdited(newI);
    setInitialInterceptor(newI);
    const bodyStr = JSON.stringify({ status: 200, body: {} }, null, 2);
    setResponseText(bodyStr);
    setInitialResponseText(bodyStr);
    setErrors({});
  }}
>
  + New
</button>
              <button className="close-btn" onClick={() => setIsOpen(false)}>
                x
              </button>
            </div>

            {/* Scenarios */}
            <div className="scenarios hidden!">
              <button onClick={() => applyScenario("happy-path")}>
                😊 Happy
              </button>
              <button onClick={() => applyScenario("server-down")}>
                🚨 Down
              </button>
              <button onClick={() => applyScenario("auth-expired")}>
                🔒 Auth
              </button>
            </div>

            {tab === "interceptors" && (
              <div className="interceptors-list">
                {interceptors.map((i) => (
                  <div
                    key={i.id}
                    className={`interceptor ${i.enabled ? "enabled" : "disabled"}`}
                  >
                    <input
                      type="checkbox"
                      checked={i.enabled}
                      onChange={(e) =>
                        toggleInterceptor(i.id, e.target.checked)
                      }
                    />
                    <div className="interceptor-info">
                      <span className="method">{i.method || "ANY"}</span>
                      <span className="path">{i.path}</span>
                      <span
                        className={`status status-${Math.floor(i.response.status / 100)}`}
                      >
                        {i.response.status}
                      </span>
                      <button
                        className="btn btn-action-primary"
                        onClick={() => {
                          if (
                            interceptorEdited === null ||
                            interceptorEdited.id !== i.id
                          ) {
                            setInterceptorEdited(i);
                            setInitialInterceptor(i);
                            const bodyStr = JSON.stringify(i.response.body, null, 2);
                            setResponseText(bodyStr);
                            setInitialResponseText(bodyStr);
                            setErrors({});
                          } else {
                            setInterceptorEdited(null);
                            setErrors({});
                          }
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-action-secondary"
                        title="Clone Interceptor"
                        onClick={() => {
                          setIsCreating(true);
                          const clonedI = {
                            ...i,
                            id: "new",
                          };
                          setInterceptorEdited(clonedI);
                          setInitialInterceptor(clonedI);
                          const bodyStr = JSON.stringify(i.response.body, null, 2);
                          setResponseText(bodyStr);
                          setInitialResponseText(bodyStr);
                          setErrors({});
                        }}
                      >
                        Clone
                      </button>
                      {i.isRegex && <span className="badge">REGEX</span>}
                      <span>key {i.querykey && i.querykey.length > 0 ? i.querykey.join(',') : "none"}</span>
                    </div>
                    <button className="btn btn-danger" onClick={() => deleteInterceptor(i.id)}>🗑️</button>
                  </div>
                ))}
              </div>
            )}

            {tab === "requests" && (
              <div className="requests-list">
                {requests.map((r) => (
                  <div
                    key={r.id}
                    className={`request ${r.intercepted ? "intercepted" : "proxied"}`}
                  >
                    <div className="request-info">
                      <span className="method">{r.method}</span>
                      <span className="url">{r.url}</span>
                      {r.intercepted && <span className="badge">MOCKED</span>}
                    </div>
                    {!r.intercepted && (
                      <button onClick={() => quickAddError(r.url, 500)}>
                        âš¡500
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className={`right ${interceptorEdited ? "is-editing" : ""}`}>
            {interceptorEdited && (
              <div
                className="m-2 mt-2 mb-0 p-3 rounded border border-white/10 h-[95%] interceptor-editor bg-gray-900/50"
                onKeyDown={(e) => {
                  if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
                    handleSave();
                  }
                }}
              >
                <div className="editor-header">
                  <div className="editor-title">
                    <button
                      className="btn btn-primary"
                      disabled={!isDirty || Object.keys(errors).length > 0}
                      onClick={handleSave}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-secondary"
                      style={{ marginLeft: "1em" }}
                      disabled={!isDirty}
                      onClick={() => {
                        if (initialInterceptor) {
                          setInterceptorEdited({ ...initialInterceptor });
                          setResponseText(initialResponseText);
                          setErrors({});
                        }
                      }}
                    >
                      Reset
                    </button>
                    {showSavedFeedback && (
                      <span className="saved-feedback">✓ Saved!</span>
                    )}
                  </div>
                  <div>
                    <span className="text-[10px] opacity-80 font-semibold font-mono">
                      {interceptorEdited.id}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      className="btn btn-secondary"
                      onClick={() => {
                        setInterceptorEdited(null);
                        setErrors({});
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
                <div className="interceptor-fields">
                  <div className="interceptor-field">
                    <label>method</label>
                    <div className="field-content">
                      <div className="method-selector flex gap-1 bg-white/5 p-1 rounded-md border border-white/10 w-fit">
                        {METHODS.map((m) => (
                          <button
                            key={m}
                            className={`btn ${interceptorEdited.method === m || (!interceptorEdited.method && m === "ANY") ? "btn-primary active" : "btn-secondary"} !text-[10px] !px-2 !py-0.5`}
                            onClick={() => {
                              setInterceptorEdited((prev) =>
                                prev ? { ...prev, method: m } : prev,
                              );
                            }}
                          >
                            {m}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="interceptor-field">
                    <label>path</label>
                    <div className="field-content">
                      <div className="flex gap-2">
                        <input
                          autoFocus
                          className={`flex-1 bg-gray-800 text-white border rounded px-2 py-1 ${errors.path ? "border-red-500" : "border-white/20"}`}
                          type="text"
                          value={interceptorEdited.path}
                          onChange={(e) => {
                            const v = e.target.value;
                            setInterceptorEdited((prev) =>
                              prev ? { ...prev, path: v } : prev,
                            );
                            if (errors.path) validate();
                          }}
                        />
                        <button
                          className={`btn ${interceptorEdited.isRegex ? "btn-primary active" : "btn-secondary"} !text-[10px] !px-2 !py-0.5 h-auto`}
                          onClick={() => {
                            setInterceptorEdited((prev) =>
                              prev ? { ...prev, isRegex: !prev.isRegex } : prev,
                            );
                          }}
                          title="Toggle Regex"
                        >
                          .*
                        </button>
                      </div>
                      {errors.path && (
                        <span className="error-message">{errors.path}</span>
                      )}
                    </div>
                  </div>

                  <div className="interceptor-field">
                    <label>querykey</label>
                    <div className="field-content">
                      <input
                        className={`w-full bg-gray-800 text-white border rounded px-2 py-1 ${errors.querykey ? "border-red-500" : "border-white/20"}`}
                        type="text"
                        placeholder="key1, key2"
                        value={interceptorEdited.querykey ? interceptorEdited.querykey.join(',') : ""}
                        onChange={(e) => {
                          const v = e.target.value;
                          setInterceptorEdited((prev) =>
                            prev ? { ...prev, querykey: v.split(',').map(s => s.trim()) } : prev,
                          );
                          if (errors.querykey) validate();
                        }}
                      />
                      {errors.querykey && <span className="error-message">{errors.querykey}</span>}
                    </div>
                  </div>

                  <div style={{ display: "flex" }} className="flex gap-4">
                    <div className="interceptor-field flex-1">
                      <label>status</label>
                      <div className="field-content">
                        <input
                          type="number"
                          className={`bg-gray-800 text-white border rounded px-2 py-1 text-sm w-full ${errors.status ? "border-red-500" : "border-white/20"}`}
                          value={interceptorEdited.response.status}
                          onChange={(e) => {
                            const v = parseInt(e.target.value, 10);
                            setInterceptorEdited((prev) =>
                              prev
                                ? {
                                    ...prev,
                                    response: { ...prev.response, status: v },
                                  }
                                : prev,
                            );
                            if (errors.status) validate();
                          }}
                        />
                        {errors.status && (
                          <span className="error-message">{errors.status}</span>
                        )}
                      </div>
                    </div>

                    <div className="interceptor-field flex-1">
                      <label>delay (ms)</label>
                      <div className="field-content">
                        <input
                          type="number"
                          className="w-full bg-gray-800 text-white border border-white/20 rounded px-2 py-1"
                          value={interceptorEdited.response.delayMs || 0}
                          onChange={(e) => {
                            const v = parseInt(e.target.value, 10);
                            setInterceptorEdited((prev) =>
                              prev
                                ? {
                                    ...prev,
                                    response: { ...prev.response, delayMs: v },
                                  }
                                : prev,
                            );
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="interceptor-field vertical">
                    <label>body (JSON)</label>
                    <div className="field-content">
                      <textarea
                        className={`w-full bg-gray-800 text-white border rounded p-2 text-xs font-mono h-40 ${errors.body ? "border-red-500" : "border-white/20"}`}
                        value={responseText}
                        onChange={(e) => {
                          setResponseText(e.target.value);
                          if (errors.body) validate();
                        }}
                      />
                      {errors.body && (
                        <span className="error-message">{errors.body}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
