// src/components/Sidebar.tsx
import React from "react";

interface SidebarProps {
  children: React.ReactNode;
  onSelect: (id: string) => void;
}

export default function Sidebar({ children, onSelect }: SidebarProps) {
  return (
    <nav className="nav-left">
      <div className="title-container">
        <h1 className="title">Buscador de Museos</h1>
      </div>
      <div className="results">{children}</div>
    </nav>
  );
}
