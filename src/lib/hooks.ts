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
 * Hook: search 'museos_santiago' table by museum_name (or any other text field)
 * @param searchText The substring to search for (case-insensitive)
 * @param columns   Array of column names to select (default selects all)
 */
export function useMuseosSearch(
  searchText: string,
  columns: string[] = [
    "id",
    "museum_name",
    "museum_country",
    "museum_region",
    "museum_city",
    "museum_municipality",
  ]
) {
  const [data, setData] = useState<MuseumRecord[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!searchText) {
      setData([]);
      setError(null);
      return;
    }

    let isCancelled = false;

    async function fetchMuseos() {
      setIsLoading(true);
      setError(null);

      try {
        // Build the .select() string by joining desired columns
        const selectString = columns.join(", ");
        const { data: supaData, error: supaError } = await supabase
          .from("museos_santiago")
          .select(selectString)
          .ilike("museum_name", `%${searchText}%`);

        if (isCancelled) return;

        if (supaError) {
          setError(supaError.message);
          setData([]);
        } else {
          setData((supaData ?? []) as MuseumRecord[]);
        }
      } catch (e: any) {
        if (!isCancelled) {
          setError(e?.message ?? "Unknown error");
          setData([]);
        }
      } finally {
        if (!isCancelled) setIsLoading(false);
      }
    }

    fetchMuseos();

    return () => {
      isCancelled = true;
    };
  }, [searchText, columns.join(",")]); // re-run if column list changes

  return { data, isLoading, error };
}
function preventDefault() {
  throw new Error("Function not implemented.");
}
