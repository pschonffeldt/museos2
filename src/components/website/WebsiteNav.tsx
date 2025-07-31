// src/components/WebsiteNav.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function WebsiteNav({ title = "Museos" }: { title?: string }) {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="static-nav">
      {/* Nav bar pages navigation */}
      <div className="static-nav-menu-container">
        <h2 className="static-nav-menu-title">Museos</h2>
        {/* Add all links here */}
        <a>
          <Link to="/" className="static-nav-link">
            Inicio
          </Link>
        </a>
        <a>
          <Link to="/about" className="static-nav-link">
            Sobre el proyecto
          </Link>
        </a>
        <a>
          <Link to="/contact" className="static-nav-link">
            Contacto
          </Link>
        </a>
        <a>
          <Link to="/release" className="static-nav-link">
            Versiones
          </Link>
        </a>
      </div>
      {/* Nav bar to app navigation */}
      <div className="static-nav-buttons">
        {/* to app button */}
        <button className="static-nav-button">
          <Link to="/app" className="static-nav-button">
            Ir a la aplicación
          </Link>
        </button>
      </div>
    </nav>
  );
}
