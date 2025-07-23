// src/components/NavTop.tsx
import React, { useState } from "react";

interface NavTopProps {
  /**
   * Callback supplied by the parent (Layout → Main → NavTop).
   * It will be called every time the user submits the form OR clicks “Ver todos”.
   * The string passed is the current value of the input ("" means “fetch everything”).
   */
  onSearch: (query: string) => void;

  /**
   * Currently unused.
   * If nothing in your codebase reads this prop, you can safely remove it
   * from here AND from where <NavTop /> is rendered.
   * Kept to respect your “don’t change className” rule (this isn’t a class name).
   */
  onClick: boolean;
}

/**
 * Top navigation bar that hosts the search UI.
 *
 * Responsibilities:
 *  - Manage local input state (`query`) so the component is controlled.
 *  - Prevent the default <form> submit (full page reload) and instead call `onSearch`.
 *  - Provide a secondary action “Ver todos” to trigger a blank search (shows all records).
 * */
export default function NavTop({ onSearch }: NavTopProps) {
  // Local text input state. This does NOT live in parent because we only need it here.
  const [query, setQuery] = useState("");

  /**
   * Fired when the form is submitted (either enter key or pressing “Buscar”).
   * Stops the browser from navigating and delegates to the parent’s handler.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  /**
   * Fired when the user clicks “Ver todos”.
   * We intentionally pass an empty string to mean “no filter” on the backend.
   * Also clears the input visually to show we’re back to an unfiltered state.
   */
  const handleViewAll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onSearch("");
    setQuery("");
  };

  return (
    <nav className="nav-top">
      <div className="search-bar-container">
        {/* onSubmit keeps keyboard submit working */}
        <form className="search-bar-form" onSubmit={handleSubmit}>
          <input
            className="search-bar-form-input"
            placeholder="Escribe el nombre de un museo… o pulsa ‘Ver todos’"
            value={query}
            onChange={(e) => setQuery(e.target.value)} // keep state in sync
          />

          {/* Primary submit button */}
          <button type="submit" className="search-bar-button">
            Buscar
          </button>

          {/* Secondary action: view all. Type='button' so it won't submit the form */}
          <button
            type="button"
            className="search-bar-button"
            onClick={handleViewAll}
          >
            Ver todos
          </button>
        </form>
      </div>
    </nav>
  );
}
