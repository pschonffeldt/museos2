// src/components/MuseumCards.tsx
import React from "react";
("react");
import type { MuseumRecord } from "../lib/types";

interface MuseumCardsProps {
  museum: MuseumRecord;
  children?: React.ReactNode;
}

export default function MuseumCards({ museum, children }: MuseumCardsProps) {
  return (
    <div className="museum-summary-cards">
      {/* Location Card */}
      <div className="museum-summary-card">
        <div className="museum-summary-card-text">
          <h3 className="museum-summary-card-title u-darkestgray u-thin">
            Ubicación
          </h3>
          <p className="u-darkestgray u-thin">{museum.museum_country}</p>
          <p className="u-darkestgray u-thin">{museum.museum_region}</p>
          <p className="u-darkestgray u-thin">{museum.museum_municipality}</p>
        </div>
        <div className="museum-summary-card-icon">
          <div className="summary-card-icon"></div>
          <p className="u-darkestgray u-thin">{museum.museum_city}</p>
        </div>
      </div>

      {/* Price Card (static as no price field) */}
      <div className="museum-summary-card">
        <div className="museum-summary-card-text">
          <h3 className="museum-summary-card-title u-darkestgray u-thin">
            Precio
          </h3>
          <p className="u-darkestgray u-thin">Precio</p>
        </div>
        <div className="museum-summary-card-icon">
          <div className="summary-card-icon"></div>
          <p className="u-darkestgray u-thin">{museum.museum_ownership_type}</p>
        </div>
      </div>

      {/* Schedule Card */}
      <div className="museum-summary-card">
        <div className="museum-summary-card-text">
          <h3 className="museum-summary-card-title u-darkestgray u-thin">
            Horario
          </h3>
          <p className="u-darkestgray u-thin">{museum.museum_opening_hours}</p>
        </div>
        <div className="museum-summary-card-icon">
          <div className="summary-card-icon"></div>
          <p className="u-darkestgray u-thin"></p>
        </div>
      </div>

      {/* Access Card */}
      <div className="museum-summary-card">
        <div className="museum-summary-card-text">
          <h3 className="museum-summary-card-title u-darkestgray u-thin">
            Acceso
          </h3>
          <p className="u-darkestgray u-thin">
            {museum.museum_public_transpot}
          </p>
        </div>
        <div className="museum-summary-card-icon">
          <div className="summary-card-icon"></div>
          <p className="u-darkestgray u-thin">Metro</p>
        </div>
      </div>
      {children}
    </div>
  );
}
