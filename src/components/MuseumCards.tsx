// src/components/MuseumCards.tsx
import React from "react";
("react");
import type { MuseumRecord } from "../lib/types";
import {
  DrawingPinIcon,
  EnterIcon,
  SketchLogoIcon,
  TimerIcon,
  UpdateIcon,
} from "@radix-ui/react-icons";

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
          <h3 className="museum-summary-card-title">Ubicación</h3>
          <div className="museum-summary-card-details">
            <p className="museum-summary-card-detail">
              {museum.museum_country}
            </p>
            <p className="museum-summary-card-detail">{museum.museum_region}</p>
            <p className="museum-summary-card-detail">
              {museum.museum_municipality}
            </p>
          </div>
        </div>
        <div className="museum-summary-card-icon">
          <div className="summary-card-icon">
            <DrawingPinIcon className="icon"></DrawingPinIcon>
          </div>
        </div>
      </div>

      {/* Price Card (static as no price field) */}
      <div className="museum-summary-card">
        <div className="museum-summary-card-text">
          <h3 className="museum-summary-card-title">Precio</h3>
          <p className="museum-summary-card-detail">
            {museum.museum_ownership_type}
          </p>
        </div>
        <div className="museum-summary-card-icon">
          <div className="summary-card-icon">
            <SketchLogoIcon className="icon"></SketchLogoIcon>
          </div>
        </div>
      </div>

      {/* Schedule Card */}
      <div className="museum-summary-card">
        <div className="museum-summary-card-text">
          <h3 className="museum-summary-card-title">Horario</h3>
          <p className="museum-summary-card-detail">
            {museum.museum_opening_hours}
          </p>
        </div>
        <div className="museum-summary-card-icon">
          <div className="summary-card-icon">
            <TimerIcon className="icon"></TimerIcon>
          </div>
        </div>
      </div>

      {/* Access Card */}
      <div className="museum-summary-card">
        <div className="museum-summary-card-text">
          <h3 className="museum-summary-card-title">Acceso</h3>
          <p className="museum-summary-card-detail">
            {museum.museum_public_transpot}
          </p>
        </div>
        <div className="museum-summary-card-icon">
          <div className="summary-card-icon">
            <EnterIcon className="icon"></EnterIcon>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
