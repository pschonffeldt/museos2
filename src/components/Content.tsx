// src/components/Container.tsx
import React, { useState } from "react";
import { useMuseosSearch } from "../lib/hooks";
import type { MuseumRecord } from "../lib/types";
import MuseumDetails from "./MuseumDetails";
import ActionButtons from "./ActionButtons";
import SearchBar from "./SearchBar";
import Topbar from "./Topbar";

interface ContainerProps {
  searchQuery: string;
}

export default function Container({ searchQuery }: ContainerProps) {
  // 1) Use your hook to get search results
  const { data: results, isLoading, error } = useMuseosSearch(searchQuery);

  // 2) Track which museum is clicked
  const [selectedMuseum, setSelectedMuseum] = useState<MuseumRecord | null>(
    null
  );

  return (
    // <main className="container">
    //   <div className="container-search-list">
    //     {isLoading ? null : error ? (
    //       <p>Error: {error}</p>
    //     ) : results.length > 0 ? (
    //       results.map((m) => (
    //         <div
    //           key={m.id}
    //           className={`museum-card ${
    //             selectedMuseum?.id === m.id ? "selected" : ""
    //           }`}
    //           onClick={() => setSelectedMuseum(m)}
    //         >
    //           <h2 className="museum-card-title">{m.museum_name}</h2>
    //         </div>
    //       ))
    //     ) : null}
    //   </div>

    //   {/* Details pane: always visible, shows placeholder or actual details */}
    //   <section className="museum-details">
    //     <MuseumDetails museum={selectedMuseum} />
    //   </section>
    // </main>

    <div className="main">
      <div className="content">
        <div className="results-details">
          <div className="row">
            <div className="box-details">Cajita</div>
            <div className="box-details">Cajita</div>
            <div className="box-details">Cajita</div>
            <div className="box-details">Cajita</div>
          </div>
          <div className="row">
            <div className="box-details">Col</div>
          </div>
          <div className="row"></div>
        </div>
      </div>
    </div>
  );
}
