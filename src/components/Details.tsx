// src/components/Details.tsx
import React from "react";

export default function Details({ children }: { children: React.ReactNode }) {
  return (
    <div className="details-container">
      <div className="details-container-layout">
        <div className="">
          <h2>Nombre de museo seleccionado</h2>
        </div>
        <div className="museum-summary-cards">
          <div className="museum-summary-card">
            <div className="museum-summary-card-text">
              <h3>Titulo</h3>
              <p>Parrafo</p>
            </div>
            <div className="museum-summary-card-icon">Icono</div>
          </div>
          <div className="museum-summary-card">
            <div className="museum-summary-card-text">Texto</div>
            <div className="museum-summary-card-icon">Icono</div>
          </div>
          <div className="museum-summary-card">
            <div className="museum-summary-card-text">Texto</div>
            <div className="museum-summary-card-icon">Icono</div>
          </div>
          <div className="museum-summary-card">
            <div className="museum-summary-card-text">Texto</div>
            <div className="museum-summary-card-icon">Icono</div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
