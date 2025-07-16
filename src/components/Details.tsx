// src/components/Details.tsx
import React from "react";

export default function Details({ children }: { children: React.ReactNode }) {
  return (
    <div className="details-container">
      <div className="details-container-layout">{children}</div>
    </div>
  );
}
