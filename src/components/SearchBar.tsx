// src/components/SearchBar.tsx
import React from "react";

interface SearchBarProps {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  onSearch: () => void;
}

export default function SearchBar({
  searchText,
  setSearchText,
  onSearch,
}: SearchBarProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(); // <-- fire the real query
  };

  return (
    <div className="search-bar">
      <div className="search-bar-title-container">
        <h1 className="search-bar-title">Buscador de Museos</h1>
      </div>
      <form onSubmit={handleSubmit} className="search-bar-module">
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="search-bar-input"
          placeholder="Busca museos por su nombre"
        />
        <button type="submit" className="search-bar-button">
          Buscar
        </button>
      </form>
    </div>
  );
}
