// src/components/MuseumDetails.tsx
import type { MuseumRecord } from "../lib/types";

interface MuseumDetailsProps {
  /** Full museum record to render in the long description panel */
  museum: MuseumRecord;
}

/**
 * Long–form detail section (left column = text blocks, right column = pricing + map).
 * Keeps all original classNames intact so your CSS continues to apply.
 */
export default function MuseumDetails({ museum }: MuseumDetailsProps) {
  return (
    <div className="museum-details-cards">
      {/* ========= LEFT COLUMN (70%) ========= */}
      <div className="museum-details-card-column u-c70">
        <div className="museum-description-container">
          {/* Museum description */}
          <div className="museum-description">
            <h3 className="museum-description-title">Descripción del museo:</h3>
            <p className="museum-description-content">
              {museum.museum_description}
            </p>
          </div>

          {/* Collection description */}
          <div className="museum-collection">
            <h3 className="museum-description-title">
              Descripción de la colección:
            </h3>
            <p className="museum-description-content">
              {museum.museum_collections_description}
            </p>
          </div>

          {/* Space / building description */}
          <div className="museum-space">
            <h3 className="museum-description-title">
              Descripción del espacio del museo:
            </h3>
            <p className="museum-description-content">
              {museum.museum_space_description}
            </p>
          </div>
        </div>

        {/* Utility buttons (site / directions) */}
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

      {/* ========= RIGHT COLUMN (30%) ========= */}
      <div className="museum-details-card-column-r u-c30">
        {/* Pricing block */}
        <div className="pricing">
          <h3 className="pricing-list">Precios:</h3>
          <ul>
            <li>{museum.museum_price}</li>
          </ul>

          <h3 className="pricing-list">Descuentos especiales:</h3>
          <ul>
            <li>{museum.museum_discounts}</li>
          </ul>
        </div>

        {/* Map embed */}
        <div className="map-summary">
          <iframe
            className="map"
            src={museum.museum_map_url}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
