// src/components/Sidebar.tsx
import React from "react";
import type { MuseumRecord } from "../lib/types";

interface SidebarProps {
  museums: MuseumRecord[];
  isLoading: boolean;
  error: string | null;
  onSelect: (m: MuseumRecord) => void;
  searchQuery: string;
}

export default function Sidebar({
  museums,
  isLoading,
  error,
  onSelect,
  searchQuery,
}: SidebarProps) {
  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="sidebar">
      {museums.length > 0 ? (
        museums.map((m) => (
          <div key={m.id} className="museum-card" onClick={() => onSelect(m)}>
            <h2 className="museum-card-title">{m.museum_name}</h2>
          </div>
        ))
      ) : searchQuery ? (
        <p>
          No hay resultados para “<strong>{searchQuery}</strong>”
        </p>
      ) : (
        <div className="museum-card">
          <p>
            Escribe el nombre del museo y pulsa Buscar para ver los resultados.
          </p>
        </div>
      )}
    </div>
  );
}
