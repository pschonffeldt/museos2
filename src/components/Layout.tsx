// src/components/Layout.tsx
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Notification from "./Notification";
import { useMuseosSearch } from "../lib/hooks";

// Layout is the top-level component composing Sidebar, Main, and Notifications
export default function Layout() {
  // searchText: stores current user input from the search bar
  const [searchText, setSearchText] = useState("");
  // delayedSearchText: the value actually sent to the fetch hook after a delay
  const [delayedSearchText, setDelayedSearchText] = useState("");
  // showNotification: controls when the loading notification is visible
  const [showNotification, setShowNotification] = useState(false);
  // delayDuration: both the artificial fetch delay and notification display length (in ms)
  const delayDuration = 3000;

  // 1️⃣ When user submits a search (searchText changes), show the notification immediately
  useEffect(() => {
    if (!searchText) return;
    setShowNotification(true);
  }, [searchText]);

  // 2️⃣ Delay updating delayedSearchText by delayDuration so fetch only runs after this time
  useEffect(() => {
    if (!searchText) {
      // if the input is cleared, reset the delayed value to cancel any pending fetch
      setDelayedSearchText("");
      return;
    }
    const timer = setTimeout(() => {
      setDelayedSearchText(searchText);
    }, delayDuration);
    return () => clearTimeout(timer);
  }, [searchText, delayDuration]);

  // 3️⃣ Invoke custom hook: uses delayedSearchText to fetch matching museums
  const { data, isLoading, error } = useMuseosSearch(delayedSearchText);

  // 4️⃣ Once loading finishes, hide the notification so it can show again on the next search
  useEffect(() => {
    if (!isLoading) setShowNotification(false);
  }, [isLoading]);

  return (
    <>
      {/* Show 'Cargando...' notification while loading or during artificial delay */}
      {showNotification && (
        <Notification message="Buscando..." duration={delayDuration} />
      )}

      {/* Main container splits UI into Sidebar (results) and Main (search & details) */}
      <main className="container">
        <Sidebar>
          {/* Error state: display a message if fetch failed */}
          {error && <div>Error loading museums.</div>}
          {/* Results: once loading is done, map over data array */}
          {!isLoading &&
            data.map((museum) => (
              <div key={museum.id} className="result-container">
                <p className="result-name">{museum.museum_name}</p>
              </div>
            ))}
        </Sidebar>

        {/* Pass search callback down to NavTop inside Main */}
        <Main onSearch={setSearchText}>
          {/* Future detail content goes here */}
        </Main>
      </main>
    </>
  );
}
