// src/components/Layout.tsx
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { useMuseosSearch } from "../lib/hooks";

export default function Layout() {
  const [searchText, setSearchText] = useState("");
  const { data, isLoading, error } = useMuseosSearch(searchText);

  return (
    <main className="container">
      <Sidebar>
        {error && <div>Error al cargar los museos...</div>}
        {/* {isLoading && <div className="loading-msg">Cargando...</div>} */}
        {!isLoading &&
          !error &&
          data.map((museum) => (
            <div key={museum.id} className="result-container">
              <p className="result-name">{museum.museum_name}</p>
            </div>
          ))}
      </Sidebar>

      <Main onSearch={setSearchText}>{/* Detail view or children here */}</Main>
    </main>
  );
}
