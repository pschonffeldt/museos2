import { useState, useEffect } from "react";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import type { MuseumRecord } from "./types";

// Supabase config
const SUPABASE_URL = "https://kizrhaizwtspwfcgylmm.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpenJoYWl6d3RzcHdmY2d5bG1tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyOTE4MjgsImV4cCI6MjA2Njg2NzgyOH0.Javw11U5Pfy59ZFuuoX40DGk3GQH8QbO2D0aRcftLw0";

// Initialize Supabase client
const supabase: SupabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/**
 * Hook: search 'museos_santiago' table by museum_name
 * @param searchText Substring to search (case-insensitive)
 */
export function useMuseosSearch(searchText: string) {
  const [data, setData] = useState<MuseumRecord[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!searchText) {
      setData([]);
      setError(null);
      return;
    }

    setIsLoading(true);
    setError(null);

    supabase
      .from<MuseumRecord>("museos_santiago")
      .select("*")
      .ilike("museum_name", `%${searchText}%`)
      .then(({ data, error }) => {
        if (error) {
          setError(error.message);
          setData([]);
        } else {
          setData(data || []);
        }
      })
      .catch((e) => {
        setError(e.message);
        setData([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchText]);

  return { data, isLoading, error };
}
