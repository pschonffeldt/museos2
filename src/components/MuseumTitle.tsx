// src/components/MuseumTitle.tsx
import React from "react";
import type { MuseumRecord } from "../lib/types";

interface MuseumTitleProps {
  museum: MuseumRecord;
}

export default function MuseumTitle({ museum }: MuseumTitleProps) {
  return (
    <div className="details-title-container">
      <h2 className="details-title">{museum.museum_name}</h2>
    </div>
  );
}
