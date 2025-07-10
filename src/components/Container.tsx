// src/components/Container.tsx
import React, { useState } from "react";
import { useMuseosSearch } from "../lib/hooks";
import type { MuseumRecord } from "../lib/types";
import MuseumDetails from "./MuseumDetails";

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
    <main className="container">
      <nav className="nav"></nav>
      <div className="content"></div>
    </main>
  );
}
