// src/components/MuseumCards.tsx
import React from "react";

export default function MuseumCards({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="museum-summary-cards">
      <div className="museum-summary-card">
        <div className="museum-summary-card-text">
          <h3 className="museum-summary-card-title">Ubicación</h3>
          <p>País</p>
          <p>Región</p>
          <p>Comuna</p>{" "}
        </div>
        <div className="museum-summary-card-icon">
          <div className="summary-card-icon"></div>
          <p>Chile</p>
        </div>
      </div>
      <div className="museum-summary-card">
        <div className="museum-summary-card-text">
          <h3 className="museum-summary-card-title">Precio</h3>
          <p>Gratuito</p>
        </div>
        <div className="museum-summary-card-icon">
          <div className="summary-card-icon"></div>
          <p>Público</p>
        </div>
      </div>
      <div className="museum-summary-card">
        <div className="museum-summary-card-text">
          <h3 className="museum-summary-card-title">Horario</h3>
          <p>Martes a domingo de 10:00 a 17:00 (último acceso 16:30)</p>
        </div>
        <div className="museum-summary-card-icon">
          <div className="summary-card-icon"></div>
          <p>Texto</p>
        </div>
      </div>
      <div className="museum-summary-card">
        <div className="museum-summary-card-text">
          <h3 className="museum-summary-card-title">Acceso</h3>
          <p>Estación Cerrillos</p>
        </div>
        <div className="museum-summary-card-icon">
          <div className="summary-card-icon"></div>
          <p>Linea 6</p>
        </div>
      </div>
      {children}
    </div>
  );
}
