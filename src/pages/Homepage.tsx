// src/components/HomePage.tsx
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <header>
        <h1>Museos Santiago</h1>
        <nav>
          <Link to="/app">App</Link> |<Link to="/contact">Contacto</Link> |
          <Link to="/release">Release</Link>
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
