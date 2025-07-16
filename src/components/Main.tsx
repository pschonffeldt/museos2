// src/components/Main.tsx
import React from "react";
import NavTop from "./NavTop";
import Details from "./Details";

interface MainProps {
  onSearch: (query: string) => void;
  children?: React.ReactNode;
}

export default function Main({ onSearch, children }: MainProps) {
  return (
    <div className="content">
      <NavTop onSearch={onSearch} />
      <Details>{children}</Details>
    </div>
  );
}
