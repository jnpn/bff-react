// src/components/meta/DevProxyWidget.tsx
import { useState, useEffect } from "react";
import "./DevProxyWidget.css";
import { useQueryClient } from "@tanstack/react-query";

const PROXY_URL = import.meta.env.VITE_PROXY_URL || "http://localhost:3000";

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

export function DevProxyWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [tab, setTab] = useState<"interceptors" | "requests">("interceptors");
  const [interceptors, setInterceptors] = useState<Interceptor[]>([]);
  const [requests, setRequests] = useState<RequestLog[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [interceptorEdited, setInterceptorEdited] =
    useState<Interceptor | null>(null);
  const [responseText, setResponseText] = useState<string>("");
  const [jsonError, setJsonError] = useState(false);

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
    setInterceptorEdited({
      id: "new",
      enabled: true,
      method: "ANY",
      path: "",
      querykey: [],
      response: { status: 200, body: {} },
    });
    setResponseText(JSON.stringify({ status: 200, body: {} }, null, 2));
    setJsonError(false);
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
                      <span
                        className={`edit status status-4`}
                        onClick={() => {
                          if (
                            interceptorEdited === null ||
                            interceptorEdited.id !== i.id
                          ) {
                            setInterceptorEdited(i);
                            setResponseText(
                              JSON.stringify(i.response.body, null, 2),
                            );
                            setJsonError(false);
                          } else {
                            setInterceptorEdited(null);
                          }
                        }}
                      >
                        Edit
                      </span>
                      <span
                        className="status status-2 cursor-pointer ml-1"
                        title="Clone Interceptor"
                        onClick={() => {
                          setIsCreating(true);
                          setInterceptorEdited({
                            ...i,
                            id: "new",
                          });
                          setResponseText(JSON.stringify(i.response.body, null, 2));
                          setJsonError(false);
                        }}
                      >
                        Clone
                      </span>
                      {i.isRegex && <span className="badge">REGEX</span>}
                      <span>key {i.querykey && i.querykey.length > 0 ? i.querykey.join(',') : "none"}</span>
                    </div>
                    <button onClick={() => deleteInterceptor(i.id)}>🗑️</button>
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
          <div className="right">
            {interceptorEdited && (
              <div className="m-2 mt-2 mb-0 p-2 rounded border border-white/20 h-[95%] interceptor-editor">
                <div className="actions">
                  <span
                    className="save rounded font-semibold text-white px-1 hover:bg-gray-500 bg-gray-600"
                    onClick={async () => {
                      try {
                        const parsedBody = JSON.parse(responseText);
                        setJsonError(false);
                        
                        const payload = {
                          method: interceptorEdited.method,
                          path: interceptorEdited.path,
                          querykey: interceptorEdited.querykey,
                          isRegex: interceptorEdited.isRegex,
                          response: {
                            ...interceptorEdited.response,
                            body: parsedBody
                          }
                        };

                        if (isCreating) {
                          await createInterceptor(payload);
                          setIsCreating(false);
                        } else {
                          await updateInterceptor(
                            interceptorEdited.id,
                            payload
                          );
                        }
                        setInterceptorEdited(null);
                      } catch (e) {
                        console.error("Save error", e);
                        setJsonError(true);
                      }
                    }}
                  >
                    save
                  </span>{" "}
                  <span className="interceptor-id">{interceptorEdited.id}</span>
                </div>
                <div className="interceptor-fields">
                  <div className="interceptor-field">
                    <label className="mr-2 my-1 text-white font-semibold">
                      method
                    </label>
                    <select
                      className="bg-gray-800 text-white border border-white/20 rounded px-2 py-1"
                      value={interceptorEdited.method || "ANY"}
                      onChange={(e) => {
                        const v = e.target.value;
                        setInterceptorEdited((prev) =>
                          prev ? { ...prev, method: v } : prev,
                        );
                      }}
                    >
                      <option value="ANY">ANY</option>
                      <option value="GET">GET</option>
                      <option value="POST">POST</option>
                      <option value="PUT">PUT</option>
                      <option value="DELETE">DELETE</option>
                      <option value="PATCH">PATCH</option>
                    </select>

                    <label className="ml-4 mr-2 my-1 text-white font-semibold flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2"
                        checked={interceptorEdited.isRegex || false}
                        onChange={(e) => {
                          const v = e.target.checked;
                          setInterceptorEdited((prev) =>
                            prev ? { ...prev, isRegex: v } : prev,
                          );
                        }}
                      />
                      regex
                    </label>
                  </div>

                  <div className="interceptor-field path">
                    <label className="mr-2 my-1 text-white font-semibold">
                      path
                    </label>
                    <input
                      className="w-full bg-gray-800 text-white border border-white/20 rounded px-2 py-1"
                      type="text"
                      value={interceptorEdited.path}
                      onChange={(e) => {
                        const v = e.target.value;
                        setInterceptorEdited((prev) =>
                          prev ? { ...prev, path: v } : prev,
                        );
                      }}
                    />
                  </div>

                  <div className="interceptor-field key">
                    <label className="mr-2 my-1 text-white font-semibold">
                      querykey
                    </label>
                    <input
                      className="w-full bg-gray-800 text-white border border-white/20 rounded px-2 py-1"
                      type="text"
                      placeholder="key1, key2"
                      value={interceptorEdited.querykey ? interceptorEdited.querykey.join(',') : ""}
                      onChange={(e) => {
                        const v = e.target.value;
                        setInterceptorEdited((prev) =>
                          prev ? { ...prev, querykey: v.split(',').map(s => s.trim()).filter(Boolean) } : prev,
                        );
                      }}
                    />
                  </div>

                  <div className="interceptor-field response-meta">
                    <label className="mr-2 my-1 text-white font-semibold">
                      status
                    </label>
                    <input
                      className="w-20 bg-gray-800 text-white border border-white/20 rounded px-2 py-1"
                      type="number"
                      value={interceptorEdited.response.status}
                      onChange={(e) => {
                        const v = parseInt(e.target.value, 10);
                        setInterceptorEdited((prev) =>
                          prev ? { ...prev, response: { ...prev.response, status: v } } : prev,
                        );
                      }}
                    />

                    <label className="ml-4 mr-2 my-1 text-white font-semibold">
                      delay (ms)
                    </label>
                    <input
                      className="w-24 bg-gray-800 text-white border border-white/20 rounded px-2 py-1"
                      type="number"
                      value={interceptorEdited.response.delayMs || 0}
                      onChange={(e) => {
                        const v = parseInt(e.target.value, 10);
                        setInterceptorEdited((prev) =>
                          prev ? { ...prev, response: { ...prev.response, delayMs: v } } : prev,
                        );
                      }}
                    />
                  </div>

                  <div className="interceptor-field response-body h-full flex flex-col">
                    <label className="mr-2 my-1 text-white font-semibold">
                      body (JSON)
                    </label>
                    <textarea
                      cols={60}
                      rows={12}
                      className={
                        (jsonError ? "border-red-500" : "border-white/20") + 
                        " w-full bg-gray-800 text-white border rounded px-2 py-1 font-mono text-xs flex-1"
                      }
                      value={responseText}
                      onChange={(e) => {
                        setResponseText(e.target.value);
                        setJsonError(false);
                      }}
                    />
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
