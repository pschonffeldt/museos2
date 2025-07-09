// src/components/Topbar.tsx
import React from "react";
import SearchBar from "./SearchBar";
import ActionButtons from "./ActionButtons";

interface TopbarProps {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  onSearch: () => void;
}

export default function Topbar({
  searchText,
  setSearchText,
  onSearch,
}: TopbarProps) {
  return (
    <header className="top-bar">
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        onSearch={onSearch}
      />
      {/* <ActionButtons /> */}
    </header>
  );
}
