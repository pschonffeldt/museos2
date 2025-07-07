// src/components/Container.tsx
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
        <p>Cargando...</p>
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
      <div className="container-search-list">
        {results.length > 0 ? (
          results.map((m: MuseumRecord) => (
            <div key={m.id} className="museum-card">
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
              Escribe el nombre del museo y pulsa Buscar para ver los
              resultados.
            </p>
          </div>
        )}
      </div>
      <div className="museum-details"></div>
    </main>
  );
}
