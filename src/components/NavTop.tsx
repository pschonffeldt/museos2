// src/components/NavTop.tsx
import React from "react";

export default function NavTop() {
  return (
    <nav className="nav-top">
      <div className="search-bar-container">
        <form className="search-bar-form">
          <input
            className="search-bar-form-input"
            placeholder="Busca museos por su nombre..."
          />
          <button type="submit" className="search-bar-button">
            Buscar museo
          </button>
        </form>
      </div>
      <div className="nav-top-buttons">
        <button className="nav-top-button">Donar</button>
      </div>
    </nav>
  );
}
