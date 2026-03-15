/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PROXY_URL?: string;
  // add other VITE_ environment variables here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
