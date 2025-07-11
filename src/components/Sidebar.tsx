// src/components/Sidebar.tsx
import React from "react";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <nav className="nav-left">
      <div className="title-container">
        <h1 className="title">Buscador de Museos</h1>
      </div>
      <div className="results">{children}</div>
    </nav>
  );
}
