// src/components/Details.tsx
import React from "react";

interface DetailsProps {
  /** Whatever you want to show in the main detail area (title, cards, long text, map, etc.) */
  children: React.ReactNode;
}

/**
 * Wraps the detail view section on the right.
 * - Keeps your existing classNames so styling stays intact.
 * - `children` is injected into the inner layout div, so parent decides what to render.
 */
export default function Details({ children }: DetailsProps) {
  return (
    <div className="details-container">
      <div className="details-container-layout">{children}</div>
    </div>
  );
}
