/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  //use import.meta.env.VITE_APP_TITLE
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
