import React from "react";
import { MuseumRecord } from "../lib/types";
import { useMuseosSearch } from "../lib/hooks";

interface ContainerProps {
  searchText: string;
}

const Container: React.FC<ContainerProps> = ({ searchText }) => {
  const { data: results, isLoading, error } = useMuseosSearch(searchText);

  if (isLoading) {
    return (
      <main className="container">
        <p>Loading…</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="container">
        <p>Error: {error}</p>
      </main>
    );
  }

  return (
    <main className="container">
      {results.length > 0 ? (
        results.map((m: MuseumRecord) => (
          <div key={m.id} className="museum-card">
            <h2>{m.museum_name}</h2>
            <p>
              {m.museum_city}, {m.museum_region}
            </p>
            {/* add more fields as needed */}
          </div>
        ))
      ) : searchText ? (
        <p>
          No results for “<strong>{searchText}</strong>”
        </p>
      ) : (
        <p>Type something above and hit Buscar to see results</p>
      )}
    </main>
  );
};

export default Container;
