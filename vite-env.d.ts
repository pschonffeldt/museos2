/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
  // add any other VITE_... keys you’re using here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
