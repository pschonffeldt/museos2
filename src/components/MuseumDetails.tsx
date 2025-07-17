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
      <div className="museum-details-card-column u-c30">
        <div className="pricing">
          <h3>Precios</h3>
          <ul>
            <li>Precio general</li>
            <li>Precio 3ra edad</li>
            <li>Precio niños</li>
            <li>Precio vecinos</li>
          </ul>
          <h3>Precios</h3>
          <ul>
            <li>Domingo gratis</li>
            <li>Sabado donacion</li>
          </ul>
        </div>
        <div className="map-summary">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4064.115571787968!2d-70.6970931!3d-33.4870965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c4b7134669b3%3A0xbd188e837f500c2a!2sAv.%20Pedro%20Aguirre%20Cerda%205000%2C%209200000%20Cerrillos%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e1!3m2!1sen!2spe!4v1752794836090!5m2!1sen!2spe"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
