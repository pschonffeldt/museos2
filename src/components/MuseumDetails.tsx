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
            <h3 className="museum-description-title">Descripción del museo:</h3>
            <p className="museum-description-content">
              {museum.museum_description}
            </p>
          </div>
          <div className="museum-collection">
            <h3 className="museum-description-title">
              Descripción de la colección:
            </h3>
            <p className="museum-description-content">
              {museum.museum_collections_description}
            </p>
          </div>
          <div className="museum-space">
            <h3 className="museum-description-title">
              Descripción del espacio del museo:
            </h3>
            <p className="museum-description-content">
              {museum.museum_space_description}
            </p>
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

      {/* Aqui estamos trabajando */}

      <div className="museum-details-card-column-r u-c30">
        <div className="pricing">
          <h3 className="pricing-list">Precios:</h3>
          <ul>
            <li>Precio general: $3.000</li>
            <li>Precio 3ra edad: $2.000</li>
          </ul>
          <h3 className="pricing-list">Descuentos especiales:</h3>
          <ul>
            <li>Niños gratis</li>
            <li>Vecinos gratis (tarjeta vecino)</li>
            <li>Domingo gratis</li>
            <li>Sabado donacion</li>
          </ul>
        </div>
        <div className="map-summary">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4066.7403304028717!2d-70.6344175!3d-33.4311212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c59017cb616d%3A0x4efb4711f2a9a116!2sLa%20Chascona!5e1!3m2!1sen!2spe!4v1752795902221!5m2!1sen!2spe"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
