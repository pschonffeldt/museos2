// src/components/Details.tsx
import React from "react";

export default function Details({ children }: { children: React.ReactNode }) {
  return (
    <div className="details-container">
      <div className="details-container-layout">
        <div className="details-title-container">
          <h2>Museo Nacional Aeronáutico y del Espacio</h2>
        </div>
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
        </div>

        <div className="museum-details-cards">
          <div className="museum-details-card-column c70">
            <div className="museum-description">
              <h3>Descripción del museo:</h3>
              <p>
                El Museo Nacional Aeronáutico y del Espacio (MNAE) es el
                principal organismo cultural en Chile dedicado al resguardo y
                difusión del patrimonio aeronáutico y aeroespacial. Su historia
                se remonta al 13 de julio de 1944, cuando fue fundado como
                “Museo de Aviación” bajo el gobierno de Juan Antonio Ríos,
                dependiente de la Dirección General de Aeronáutica Civil (DGAC).
                A lo largo de su existencia, el museo se ha trasladado en
                múltiples ocasiones, pasando por la Academia de Guerra, Quinta
                Normal y diversas oficinas institucionales. Finalmente, en 1992
                se inauguró su sede actual en el antiguo aeródromo Los
                Cerrillos, diseñada por el arquitecto Fernando Torres Arancibia,
                con la presencia del presidente Patricio Aylwin. En 1995,
                mediante decreto, se le otorgó la categoría de “nacional”. Tras
                un cierre temporal durante la pandemia, reabrió sus puertas en
                enero de 2022.
              </p>
              <a href="https://museoaeronautico.dgac.gob.cl/">
                Revisa el sitio web oficial
              </a>
            </div>
            <div className="museum-collection">
              <h3>Descripción de la colección:</h3>
              <p>
                Alberga más de 90 aeronaves, tanto civiles como militares,
                muchas de las cuales están declaradas Monumento Nacional.
                Presenta además objetos históricos: hélices, motores, uniformes
                y documentos, así como arte aeronáutico en esculturas y
                pinturas. El diseño de su hangar de exhibición permite un
                recorrido acorde a la evolución tecnológica, con zonas
                interactivas y un ambiente didáctico ideal para todas las
                edades.
              </p>
            </div>
          </div>
          <div className="museum-details-card-column c30"></div>
        </div>
        {children}
      </div>
    </div>
  );
}
