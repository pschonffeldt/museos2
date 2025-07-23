// src/components/Main.tsx
import React from "react";
import NavTop from "./NavTop";
import Details from "./Details";
import Footer from "./Footer";

interface MainProps {
  /** Called when the user submits the search form in NavTop */
  onSearch: (query: string) => void;
  /** Whatever you want to render in the details area (selected museum, etc.) */
  children?: React.ReactNode;
}

/**
 * Right-hand column:
 * - Renders the top search bar (NavTop)
 * - Hosts the details section where selected content is shown
 * - Shows the footer at the bottom
 */
export default function Main({ onSearch, children }: MainProps) {
  return (
    <div className="content">
      {/* Search bar. `onClick={false}` is just a placeholder prop; NavTop only needs onSearch */}
      <NavTop onSearch={onSearch} onClick={false} />

      {/* Dynamic detail area (filled by parent via `children`) */}
      <Details>{children}</Details>

      {/* Static footer */}
      <Footer />
    </div>
  );
}
