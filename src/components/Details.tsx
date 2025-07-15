// src/components/Details.tsx
import React from "react";
import MuseumCards from "./MuseumCards";
import MuseumDetails from "./MuseumDetails";
import MuseumTitle from "./MuseumTitle";

export default function Details({ children }: { children: React.ReactNode }) {
  return (
    <div className="details-container">
      <div className="details-container-layout">
        <MuseumTitle />
        <MuseumCards />
        <MuseumDetails />
      </div>
      {children}
    </div>
  );
}
