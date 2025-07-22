// src/components/Layout.tsx
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Notification from "./Notification";
import MuseumTitle from "./MuseumTitle";
import MuseumDetails from "./MuseumDetails";
// import { createClient } from "@supabase/supabase-js";
import { supabase } from "../lib/supabaseClient";
import MuseumCards from "./MuseumCards";
import Footer from "./Footer";

// ← Use Vite’s env vars (no process.env here)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Layout manages the entire search, notification, result list, and detail view flow.
 */
export default function Layout() {
  const [results, setResults] = useState<any[]>([]);
  const [notification, setNotification] = useState<string | null>(null);
  const [selected, setSelected] = useState<any>(null);
  const delay = 3000; // ms before running the search

  const handleSearch = async (query: string) => {
    setSelected(null);
    setResults([]);
    setNotification("Buscando...");

    // artificial delay
    await new Promise((res) => setTimeout(res, delay));

    // actual fetch
    const { data, error } = await supabase
      .from("museos_santiago")
      .select("*")
      .ilike("museum_name", `%${query}%`);

    if (error) {
      setNotification("Error al buscar...");
      return;
    }
    // pasa lago acca
    if (data.length === 0) {
      setNotification("No hay resultados relacionados");
    } else {
      setResults(data);
      setNotification(null);
    }
  };

  return (
    <>
      {notification && <Notification message={notification} duration={delay} />}

      <main className="container">
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

        <Main onSearch={handleSearch}>
          {selected && (
            <>
              <MuseumTitle museum={selected} />
              <MuseumCards museum={selected} />
              <MuseumDetails museum={selected} />
            </>
          )}
        </Main>
      </main>
    </>
  );
}
