// src/components/Sidebar.tsx
import React from "react";

interface SidebarProps {
  /** Anything you want to render inside the results list (each result row, empty state msg, etc.) */
  children: React.ReactNode;
  /** Callback to notify parent which museum was clicked (id is provided from each row) */
}

/**
 * Static left navigation column.
 * - Renders the app title.
 * - Shows whatever result items are passed via `children`.
 * - `onSelect` is exposed so each child item can call it (or you can handle clicks in parent).
 */
export default function Sidebar({ children }: SidebarProps) {
  // onSelect isn't used directly here; children should call it themselves (or parent handles clicks).
  return (
    <nav className="nav-left">
      <div className="title-container">
        <h1 className="title">Buscador de Museos</h1>
      </div>

      {/* Results list area */}
      <div className="results">{children}</div>
    </nav>
  );
}
