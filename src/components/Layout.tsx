// src/components/Layout.tsx

import { useState } from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Notification from "./Notification";
import MuseumTitle from "./MuseumTitle";
import MuseumDetails from "./MuseumDetails";
import MuseumCards from "./MuseumCards";
import { supabase } from "../lib/supabaseClient";
import Thinbar from "./Thinbar";

/**
 * Top‑level page layout.
 * Responsibilities:
 *  - Orchestrate the search flow (submit -> wait -> fetch -> render)
 *  - Show/hide the notification banner (success, loading, error, empty state)
 *  - Render the result list in the Sidebar
 *  - Render the selected museum details in the Main area
 */
export default function Layout() {
  // ---------------------- STATE ----------------------

  // Array with all the museums returned by the last search.
  // Using any[] for speed; ideally import your MuseumRecord type here.
  const [results, setResults] = useState<any[]>([]);

  // Message displayed in the floating Notification component.
  // When null, the Notification is not mounted.
  const [notification, setNotification] = useState<string | null>(null);

  // The museum object user picked from the Sidebar. null = nothing selected.
  const [selected, setSelected] = useState<any>(null);

  // Artificial delay (in ms) to keep the "Buscando..." banner visible long enough
  // so the user understands something is happening.
  const delay = 3000;

  // ---------------------- HANDLERS ----------------------

  /**
   * Runs every time the user submits a query from <NavTop/>.
   *
   * Sequence:
   *  1. Reset current selection/results (fresh search).
   *  2. Immediately show a "Buscando..." notification.
   *  3. Wait `delay` ms (artificial, UX only).
   *  4. Ask Supabase for rows whose museum_name contains the query (case-insensitive).
   *  5. If error -> show it in the notification.
   *     If no rows -> show "No hay resultados relacionados".
   *     Else -> update the result list and hide the notification.
   */
  const handleSearch = async (query: string) => {
    // 1) Fresh start
    setSelected(null);
    setResults([]);

    // 2) Let the user know we're working
    setNotification("Buscando...");

    // 3) UX delay so the message is readable
    await new Promise((res) => setTimeout(res, delay));

    // 4) Supabase request
    const { data, error } = await supabase
      .from("museos_santiago") // Your table name in Supabase
      .select("*")
      .ilike("museum_name", `%${query}%`); // SQL ILIKE -> case-insensitive match

    // 5) Branch on result
    if (error) {
      console.error("Supabase error:", error);
      setNotification(error.message); // Show the exact error message (or a friendlier one)
      return;
    }

    if (!data || data.length === 0) {
      setNotification("No hay resultados relacionados");
    } else {
      setResults(data);
      setNotification(null); // Hide notification once we have valid data
    }
  };

  // ---------------------- RENDER ----------------------

  return (
    <>
      {/* Render the toast only if there is something to say */}
      {notification && <Notification message={notification} duration={delay} />}

      <main className="container">
        {/* Thin bar to select app features */}
        <Thinbar children={undefined}></Thinbar>

        {/* LEFT COLUMN: Sidebar with search results */}
        <Sidebar
          // The Sidebar tells us which museum was clicked by passing its id
          onSelect={(id: any) => {
            const item = results.find((r) => r.id === id);
            if (item) setSelected(item);
          }}
        >
          {/* Instruction card: only visible when there are no results yet */}
          {results.length === 0 && (
            <div className="result-instructions">
              <p className="result-name">
                En esta sección aparecerán los resultados de la búsqueda.
              </p>
            </div>
          )}

          {/* Render one clickable row per museum */}
          {results.map((m) => (
            <div
              key={m.id}
              className="result-container"
              onClick={() => setSelected(m)}
              style={{ cursor: "pointer" }} // inline cursor so you know it's clickable
            >
              <p className="result-name">{m.museum_name}</p>
            </div>
          ))}
        </Sidebar>

        {/* RIGHT COLUMN: Main content (search bar + museum details) */}
        <Main onSearch={handleSearch}>
          {/* Only mount the detail components when a museum is chosen */}
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
