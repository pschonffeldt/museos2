// src/components/NavTop.tsx
import React, { useState } from "react";

interface NavTopProps {
  onSearch: (query: string) => void;
}

export default function NavTop({ onSearch }: NavTopProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <nav className="nav-top">
      <div className="search-bar-container">
        <form className="search-bar-form" onSubmit={handleSubmit}>
          <input
            className="search-bar-form-input"
            placeholder="Busca museos por su nombre o ver todos..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="search-bar-button">
            Buscar
          </button>
        </form>
      </div>
    </nav>
  );
}
