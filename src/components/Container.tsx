// src/components/Container.tsx
import React from "react";
import { useMuseosSearch } from "../lib/hooks";
import { MuseumRecord } from "../lib/types";

interface ContainerProps {
  searchQuery: string;
}

export default function Container({ searchQuery }: ContainerProps) {
  const { data: results, isLoading, error } = useMuseosSearch(searchQuery);

  if (isLoading)
    return (
      <main className="container">
        <p>Loading…</p>
      </main>
    );
  if (error)
    return (
      <main className="container">
        <p>Error: {error}</p>
      </main>
    );

  return (
    <main className="container">
      {results.length > 0 ? (
        results.map((m: MuseumRecord) => (
          <div key={m.id} className="museum-card">
            <h2>{m.museum_name}</h2>
            <p>
              {m.museum_city}, {m.museum_region}
            </p>
          </div>
        ))
      ) : searchQuery ? (
        <p>
          No results for “<strong>{searchQuery}</strong>”
        </p>
      ) : (
        <p>Type something above and hit Buscar to see results</p>
      )}
    </main>
  );
}
