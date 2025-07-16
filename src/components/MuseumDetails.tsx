import React from "react";

export default function MuseumDetails({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="museum-details-cards">
      <div className="museum-details-card-column u-c70">
        <div className="museum-description-container">
          <div className="museum-description">
            <h3>Descripción del museo:</h3>
            <p>
              El Museo Nacional Aeronáutico y del Espacio (MNAE) es el principal
              organismo cultural en Chile dedicado al resguardo y difusión del
              patrimonio aeronáutico y aeroespacial. Su historia se remonta al
              13 de julio de 1944, cuando fue fundado como “Museo de Aviación”
              bajo el gobierno de Juan Antonio Ríos, dependiente de la Dirección
              General de Aeronáutica Civil (DGAC). A lo largo de su existencia,
              el museo se ha trasladado en múltiples ocasiones, pasando por la
              Academia de Guerra, Quinta Normal y diversas oficinas
              institucionales. Finalmente, en 1992 se inauguró su sede actual en
              el antiguo aeródromo Los Cerrillos, diseñada por el arquitecto
              Fernando Torres Arancibia, con la presencia del presidente
              Patricio Aylwin. En 1995, mediante decreto, se le otorgó la
              categoría de “nacional”. Tras un cierre temporal durante la
              pandemia, reabrió sus puertas en enero de 2022.
            </p>
          </div>
          <div className="museum-collection">
            <h3>Descripción de la colección:</h3>
            <p>
              Alberga más de 90 aeronaves, tanto civiles como militares, muchas
              de las cuales están declaradas Monumento Nacional. Presenta además
              objetos históricos: hélices, motores, uniformes y documentos, así
              como arte aeronáutico en esculturas y pinturas. El diseño de su
              hangar de exhibición permite un recorrido acorde a la evolución
              tecnológica, con zonas interactivas y un ambiente didáctico ideal
              para todas las edades.
            </p>
          </div>
          <div className="museum-space">
            <h3>Descripción del espacio del museo:</h3>
            <p>
              El pabellón actual, diseñado por el arquitecto Fernando Torres
              Arancibia e inaugurado en marzo de 1992, presenta una estructura
              inspirada en un hangar, con amplias fachadas de vidrio y un
              entramado de acero expuesto que evoca su herencia aeronáutica. Al
              adentrarse en la plaza exterior, los visitantes descubrirán una
              extensa zona de exposición al aire libre donde los aviones
              históricos se exhiben sobre senderos pavimentados. La colección
              del museo suma 97 aeronaves, de las cuales 35 están protegidas
              como Monumentos Nacionales, muchas expuestas al aire libre para
              aprovechar al máximo el antiguo trazado de la pista. El museo
              cuenta con estacionamiento gratuito junto al recinto, lo que
              facilita la llegada en automóvil, y la estación de metro Cerrillos
              (Línea 6), a solo 450 m al norte, ofrece acceso rápido en
              transporte público. Además, a 730 m al sur se extiende el Parque
              Bicentenario Cerrillos, un espacio verde con senderos sombreados y
              áreas de picnic ideal para un paseo antes o después de la visita.
            </p>
          </div>
        </div>
        <div className="museum-description-utility-container">
          <button
            className="utility-bar-button"
            onClick={() =>
              window.open("https://museoaeronautico.dgac.gob.cl/", "_blank")
            }
          >
            Visitar sitio web oficial
          </button>
          <button
            className="utility-bar-button"
            onClick={() =>
              window.open("https://maps.app.goo.gl/uZ7csuZesqj33dbZA", "_blank")
            }
          >
            Ver direcciones al museo
          </button>
        </div>
      </div>
      <div className="museum-details-card-column u-c30">
        <div className="museum-map"></div>
        <div className="museum-map-summary"></div>
      </div>
    </div>
  );
}
