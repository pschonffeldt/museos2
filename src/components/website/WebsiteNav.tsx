// src/components/WebsiteNav.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { APP_NAME } from "../../lib/constants";

export default function WebsiteNav({ title = APP_NAME }: { title?: string }) {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="static-nav">
      {/* Nav bar pages navigation */}
      <div className="static-nav-menu-container">
        <h2 className="static-nav-menu-title">{title}</h2>

        {/* Use Link directly—no extra <a> wrapper */}
        <Link
          to="/"
          className={`static-nav-link ${isActive("/") ? "active" : ""}`}
        >
          Inicio
        </Link>

        <Link
          to="/about"
          className={`static-nav-link ${isActive("/about") ? "active" : ""}`}
        >
          Sobre el proyecto
        </Link>

        <Link
          to="/contact"
          className={`static-nav-link ${isActive("/contact") ? "active" : ""}`}
        >
          Contacto
        </Link>

        <Link
          to="/release"
          className={`static-nav-link ${isActive("/release") ? "active" : ""}`}
        >
          Versiones
        </Link>
      </div>

      {/* Nav bar to app navigation */}
      <div className="static-nav-buttons">
        {/* Link styled exactly like your button class */}
        <Link to="/museos" className="static-nav-button">
          Ir a la aplicación
        </Link>
      </div>
    </nav>
  );
}
