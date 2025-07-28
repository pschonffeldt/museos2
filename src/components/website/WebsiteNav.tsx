import { Link, useLocation } from "react-router-dom";

export default function WebsiteNav({ title = "Museos" }: { title?: string }) {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="staticnav-header">
      <div className="staticnav-container">
        <h1 className="staticnav-title">{title}</h1>
        <nav className="staticnav-nav">
          <Link to="/app" className={isActive("/app") ? "active" : ""}>
            App
          </Link>
          <Link to="/" className={isActive("/") ? "active" : ""}>
            Home
          </Link>
          <Link to="/contact" className={isActive("/contact") ? "active" : ""}>
            Contacto
          </Link>
          <Link to="/release" className={isActive("/release") ? "active" : ""}>
            Release
          </Link>
          <Link to="/about" className={isActive("/about") ? "active" : ""}>
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
