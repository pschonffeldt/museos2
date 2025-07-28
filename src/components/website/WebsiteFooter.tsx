// src/components/WebsiteFooter.tsx

import { Link } from "react-router-dom";

export default function WebsiteFooter() {
  return (
    <footer className="websitefooter-container">
      <div className="websitefooter-content">
        {/* Left: Navigation Links */}
        <div className="websitefooter-column">
          <h4 className="websitefooter-title">Museos</h4>
          <ul className="websitefooter-links">
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
            <li>
              <Link to="/about">Sobre nosotros</Link>
            </li>
            <li>
              <Link to="/release">Notas de versión</Link>
            </li>
          </ul>
        </div>

        {/* Center: Version + phrase */}
        <div className="websitefooter-column">
          <p className="websitefooter-version">Versión 1.1.4 – Julio 2025</p>
          <p className="websitefooter-quote">
            Hecho con cariño para quienes disfrutan de la cultura.
          </p>
        </div>

        {/* Right: Author credit */}
        <div className="websitefooter-column">
          <p className="websitefooter-credit">
            Desarrollado por{" "}
            <a
              href="https://pschonffeldt.dev/"
              target="_blank"
              rel="noreferrer noopener"
            >
              pschonffeldt
            </a>
          </p>
          <p className="websitefooter-email">
            <a href="mailto:contacto@museosantiago.cl">
              contacto@museosantiago.cl
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
