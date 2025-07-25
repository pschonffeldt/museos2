// src/components/Release.tsx
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Release() {
  return (
    <>
      <header>
        <h1>Release notes</h1>
        <nav>
          <Link to="/">Inicio</Link> |<Link to="/app">App</Link> |
          <Link to="/contact">Contacto</Link> |
        </nav>
      </header>
      <main>
        <h2>Explora los museos de Santiago</h2>
        <p>Busca, compara y aprende sobre los museos antes de visitarlos.</p>
      </main>
      <Footer />
    </>
  );
}
