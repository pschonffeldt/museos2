// src/lib/supabaseClient.ts
import { createClient } from "@supabase/supabase-js";

// These env vars are injected by Vite. We assert they’re strings after the runtime check.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

// Runtime guard: stop early if either is missing
if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY. " +
      "Make sure your .env file at the project root defines both, and restart your dev server."
  );
}

// Export a single Supabase client instance for your app to use
export const supabase = createClient(supabaseUrl, supabaseKey);
