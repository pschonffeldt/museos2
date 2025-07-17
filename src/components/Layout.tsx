// src/components/Layout.tsx
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Notification from "./Notification";
import MuseumTitle from "./MuseumTitle";
import MuseumDetails from "./MuseumDetails";
import { useMuseosSearch } from "../lib/hooks";

/**
 * Layout manages the entire search, notification, result list, and detail view flow.
 */
export default function Layout() {
  // current search query (trigger to fetch)
  const [query, setQuery] = useState("");
  // fetched results
  const [results, setResults] = useState<any[]>([]);
  // notification text (e.g. Searching, No results, Error)
  const [notification, setNotification] = useState<string | null>(null);
  // selected museum for details
  const [selected, setSelected] = useState<any>(null);

  // custom hook for fetching from Supabase
  const { data, isLoading, error } = useMuseosSearch(query);

  // === Step 1: User submits a search ===
  // Main.onSearch calls handleSearch, which sets the query and triggers the first effect.
  const handleSearch = (q: string) => {
    // clear previous state
    setSelected(null);
    setResults([]);
    // show immediate notification
    setNotification("Searching...");
    // trigger fetch
    setQuery(q);
  };

  // === Step 2: Fetch completes or errors ===
  useEffect(() => {
    if (isLoading) return; // still searching

    if (error) {
      setNotification("Error loading results");
      return;
    }

    // fetch done
    if (data && data.length > 0) {
      setResults(data);
      setNotification(null); // clear "Searching..."
    } else if (query) {
      // no matches found
      setNotification("No se encontraron resultados relacionados");
    }
  }, [isLoading, data, error, query]);

  return (
    <>
      {/* Notification bar at top-right */}
      {notification && <Notification message={notification} duration={3000} />}

      <main className="container">
        {/* Sidebar shows result list and handles selection */}
        <Sidebar
          onSelect={(id) => {
            const item = results.find((r) => r.id === id);
            if (item) setSelected(item);
          }}
        >
          {results.map((m) => (
            <div
              key={m.id}
              className="result-container"
              onClick={() => setSelected(m)}
              style={{ cursor: "pointer" }}
            >
              <p className="result-name">{m.museum_name}</p>
            </div>
          ))}
        </Sidebar>

        {/* Main: shows search bar and details */}
        <Main onSearch={handleSearch}>
          {selected && (
            <>
              <MuseumTitle museum={selected} />
              <MuseumDetails museum={selected} />
            </>
          )}
        </Main>
      </main>
    </>
  );
}
