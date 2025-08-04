// src/components/WebsiteFooter.tsx
import { Link } from "react-router-dom";
import { APP_NAME } from "../../lib/constants";

export default function WebsiteFooter() {
  const navLinks = [
    { to: "/", label: "Inicio" },
    { to: "/about", label: "Proyecto" },
    { to: "/contact", label: "Contacto" },
    { to: "/release", label: "Versiones" },
    { to: "/app", label: "App" },
  ];

  return (
    <footer className="websitefooter-container">
      {/* Footer first row of 3 columns */}
      <div className="websitefooter-content">
        {/* Left: Navigation Links */}
        <div className="websitefooter-column">
          <h4 className="websitefooter-title">{APP_NAME}</h4>
          <ul className="websitefooter-links">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Center: Contact information */}
        <div className="websitefooter-column">
          <h4 className="websitefooter-title">Nosotros</h4>
          <ul className="websitefooter-links">
            <li>
              {APP_NAME} centraliza toda la información relevante sobre los
              museos de Santiago en un solo lugar. Consulta horarios,
              ubicaciones y descripciones para planear tu visita con
              anticipación.
            </li>
          </ul>
        </div>
        {/* Right: About */}
        <div className="websitefooter-column">
          <h4 className="websitefooter-title">Contacto</h4>
          <ul className="websitefooter-links">
            <li>
              <p className="websitefooter-email">
                Puedes escribirnos directamente a{" "}
                <a href="mailto:contacto@museosantiago.cl">info@mitkof.cl</a>
              </p>
            </li>
          </ul>
          <ul className="websitefooter-links">
            <li>
              <p className="websitefooter-email">
                También puedes rellenar el{" "}
                <Link to="/contact">formulario de contacto</Link>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="websitefooter-copy">
        <p className="websitefooter-links">
          {" "}
          <a href="https://pschonffeldt.dev/">
            {" "}
            Desarrollado en 🇨🇱 por pschonffeldt
          </a>
        </p>
      </div>
    </footer>
  );
}
