// src/components/MuseumDetails.tsx
import React from "react";
import type { MuseumRecord } from "../lib/types";

interface DetailsProps {
  museum: MuseumRecord | null;
}

export default function MuseumDetails({ museum }: DetailsProps) {
  if (!museum) {
    return;
  }
  return (
    <div className="museum-details-container">
      <div className="museum-details-title">
        <h2>Detalles del museo: {museum.museum_name}</h2>
      </div>

      <div className="museum-stats-container">
        <div className="museum-stats">
          <h3>Ubicación</h3>
          <ul>
            <li>{museum.museum_country}</li>
            <li>{museum.museum_region}</li>
            <li>{museum.museum_municipality}</li>
            <li>{museum.museum_address}</li>
            <li>{museum.museum_public_transpot}</li>
          </ul>
        </div>
        <div className="museum-stats">
          <h3>Tipo</h3>
          <ul>
            <li>{museum.museum_ownership_type}</li>
          </ul>
        </div>
        <div className="museum-stats">
          <h3>Horario</h3>
          <ul>
            <li>{museum.museum_opening_hours}</li>
          </ul>
        </div>
      </div>

      <div className="museum-details-description">
        <h3>Bios</h3>
        <p>{museum.museum_description}</p>
      </div>

      <div className="museum-details-collections">
        <h3>Colección y espacios</h3>
        <p>{museum.museum_collections_description}</p>
      </div>
    </div>
  );
}
