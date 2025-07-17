// src/components/Main.tsx
import React from "react";
import NavTop from "./NavTop";
import Details from "./Details";
import Footer from "./Footer";

interface MainProps {
  onSearch: (query: string) => void;
  children?: React.ReactNode;
}

export default function Main({ onSearch, children }: MainProps) {
  return (
    <div className="content">
      <NavTop onSearch={onSearch} />
      <Details>{children}</Details>
      <Footer />
    </div>
  );
}
