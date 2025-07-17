// src/components/MuseumDetails.tsx
import React from "react";
import type { MuseumRecord } from "../lib/types";

interface MuseumDetailsProps {
  museum: MuseumRecord;
}

export default function MuseumDetails({ museum }: MuseumDetailsProps) {
  return (
    <div className="museum-details-cards">
      <div className="museum-details-card-column u-c70">
        <div className="museum-description-container">
          <div className="museum-description">
            <h3>Descripción del museo:</h3>
            <p>{museum.museum_description}</p>
          </div>
          <div className="museum-collection">
            <h3>Descripción de la colección:</h3>
            <p>{museum.museum_collections_description}</p>
          </div>
          <div className="museum-space">
            <h3>Descripción del espacio del museo:</h3>
            <p>AGREGAR ESTO A SUPABASE</p>
          </div>
        </div>
        <div className="museum-description-utility-container">
          <button
            className="utility-bar-button"
            onClick={() => window.open(museum.museum_website, "_blank")}
          >
            Visitar sitio web oficial
          </button>
          <button
            className="utility-bar-button"
            onClick={() => window.open(museum.museum_directions, "_blank")}
          >
            Ver direcciones al museo
          </button>
        </div>
      </div>
      <div className="museum-details-card-column u-c30">
        <div className="museum-map"></div>
        <div className="museum-map-summary"></div>
      </div>
    </div>
  );
}
