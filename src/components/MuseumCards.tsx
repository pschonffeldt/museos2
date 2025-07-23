// src/components/MuseumCards.tsx
import React from "react";
import type { MuseumRecord } from "../lib/types";
import {
  DrawingPinIcon,
  EnterIcon,
  SketchLogoIcon,
  TimerIcon,
  UpdateIcon,
} from "@radix-ui/react-icons";

interface MuseumCardsProps {
  /** Full museum record to show in the summary cards */
  museum: MuseumRecord;
  /** Optional extra elements to append at the end of the cards block */
  children?: React.ReactNode;
}

/**
 * Four summary cards for quick facts (location, price/ownership, hours, transport).
 * - Uses only existing classNames so your CSS stays intact.
 * - Icons come from @radix-ui/react-icons.
 */
export default function MuseumCards({ museum, children }: MuseumCardsProps) {
  return (
    <div className="museum-summary-cards">
      {/* --- Location Card --- */}
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
            <DrawingPinIcon className="icon" />
          </div>
        </div>
      </div>

      {/* --- Price / Ownership Card --- */}
      <div className="museum-summary-card">
        <div className="museum-summary-card-text">
          <h3 className="museum-summary-card-title">Precio</h3>
          <p className="museum-summary-card-detail">
            {museum.museum_ownership_type}
          </p>
          <p className="museum-summary-card-detail">{museum.museum_price}</p>
          {/* <p className="museum-summary-card-detail">Descuentos aplicables</p> */}
          <p className="museum-summary-card-detail">
            {museum.museum_discount_availability}
          </p>
        </div>
        <div className="museum-summary-card-icon">
          <div className="summary-card-icon">
            <SketchLogoIcon className="icon" />
          </div>
        </div>
      </div>

      {/* --- Schedule Card --- */}
      <div className="museum-summary-card">
        <div className="museum-summary-card-text">
          <h3 className="museum-summary-card-title">Horario</h3>
          <p className="museum-summary-card-detail">
            {museum.museum_opening_hours}
          </p>
        </div>
        <div className="museum-summary-card-icon">
          <div className="summary-card-icon">
            <TimerIcon className="icon" />
          </div>
        </div>
      </div>

      {/* --- Transport Card --- */}
      <div className="museum-summary-card">
        <div className="museum-summary-card-text">
          <h3 className="museum-summary-card-title">Transporte</h3>
          <p className="museum-summary-card-detail">
            {museum.museum_transport_type}, {museum.museum_transport_line}
          </p>
          <p className="museum-summary-card-detail">
            {museum.museum_public_transpot}
          </p>
        </div>
        <div className="museum-summary-card-icon">
          <div className="summary-card-icon">
            <EnterIcon className="icon" />
          </div>
        </div>
      </div>

      {/* Slot for extra custom blocks passed from parent */}
      {children}
    </div>
  );
}
