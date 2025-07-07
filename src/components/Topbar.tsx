// src/components/Topbar.tsx
import React from "react";
import SearchBar from "./SearchBar";
import ActionButtons from "./ActionButtons";

interface TopbarProps {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

const Topbar: React.FC<TopbarProps> = ({ searchText, setSearchText }) => {
  return (
    <header className="top-bar">
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <ActionButtons />
    </header>
  );
};

export default Topbar;
