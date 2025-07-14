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
          <h3 className="museum-summary-card-title u-darkestgray u-thin">
            Ubicación
          </h3>
          <p className="u-darkestgray u-thin">País</p>
          <p className="u-darkestgray u-thin">Región</p>
          <p className="u-darkestgray u-thin">Comuna</p>
        </div>
        <div className="museum-summary-card-icon">
          <div className="summary-card-icon"></div>
          <p className="u-darkestgray u-thin">Chile</p>
        </div>
      </div>
      <div className="museum-summary-card">
        <div className="museum-summary-card-text">
          <h3 className="museum-summary-card-title u-darkestgray u-thin">
            Precio
          </h3>
          <p className="u-darkestgray u-thin">Gratuito</p>
        </div>
        <div className="museum-summary-card-icon">
          <div className="summary-card-icon"></div>
          <p className="u-darkestgray u-thin">Público</p>
        </div>
      </div>
      <div className="museum-summary-card">
        <div className="museum-summary-card-text">
          <h3 className="museum-summary-card-title u-darkestgray u-thin">
            Horario
          </h3>
          <p className="u-darkestgray u-thin">
            Martes a domingo de 10:00 a 17:00 (último acceso 16:30)
          </p>
        </div>
        <div className="museum-summary-card-icon">
          <div className="summary-card-icon"></div>
          <p className="u-darkestgray u-thin">Texto</p>
        </div>
      </div>
      <div className="museum-summary-card">
        <div className="museum-summary-card-text">
          <h3 className="museum-summary-card-title u-darkestgray u-thin">
            Acceso
          </h3>
          <p className="u-darkestgray u-thin">Estación Cerrillos</p>
        </div>
        <div className="museum-summary-card-icon">
          <div className="summary-card-icon"></div>
          <p className="u-darkestgray u-thin">Linea 6</p>
        </div>
      </div>
      {children}
    </div>
  );
}
