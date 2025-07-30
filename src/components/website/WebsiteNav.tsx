// src/components/WebsiteNav.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function WebsiteNav({ title = "Museos" }: { title?: string }) {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="staticnav-header">
      <div className="staticnav-content">
        <nav className="staticnav-nav">
          <Link to="/" className={isActive("/") ? "active" : ""}>
            {title}
          </Link>
          <Link
            to="/contact"
            className={`staticnav-nav-link ${
              isActive("/contact") ? "active" : ""
            }`}
          >
            Contacto
          </Link>
          <Link
            to="/release"
            className={`staticnav-nav-link ${
              isActive("/release") ? "active" : ""
            }`}
          >
            Release
          </Link>
          <Link
            to="/about"
            className={`staticnav-nav-link ${
              isActive("/about") ? "active" : ""
            }`}
          >
            About
          </Link>
          <Link
            to="/app"
            className={`staticnav-nav-link ${
              isActive("/about") ? "active" : ""
            }`}
          >
            Ir a la Aplicación
          </Link>
        </nav>
      </div>
    </header>
  );
}
