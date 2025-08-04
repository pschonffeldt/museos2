import React from "react";
import { Link } from "react-router-dom";

export default function Sponsors() {
  return (
    <div>
      {/* Sponsorship Section */}
      <section className="section section--sponsors">
        <h2>¿Quieres ser parte de nuestro ecosistema?</h2>
        <p>
          En <strong>Museos</strong>, creemos en las alianzas que impulsan la
          cultura. Si representas una marca, institución o proyecto que valora
          el acceso a la cultura y la visibilidad en espacios digitales
          significativos, te invitamos a explorar nuestras oportunidades de
          patrocinio.
        </p>
        <p>
          Ofrecemos espacios publicitarios dentro de nuestra plataforma,
          newsletter y futuras integraciones móviles, pensados para llegar a una
          audiencia curiosa, activa y culturalmente comprometida.
        </p>
        <p>
          Si te interesa colaborar con nosotros y ser parte activa de esta red
          cultural, contáctanos directamente.
        </p>
        <div className="sponsor-contact-link">
          <Link to="/contact" className="button button--sponsor">
            Explorar oportunidades
          </Link>
        </div>
      </section>
    </div>
  );
}
