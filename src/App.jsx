// src/App.jsx
import React, { useState } from "react";
import Topbar from "./components/Topbar";
import Container from "./components/Container";

// Single, top-level export
export default function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <Topbar searchText={searchText} setSearchText={setSearchText} />
      <Container searchText={searchText} />
    </>
  );
}
