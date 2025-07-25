// src/components/HomePage.tsx
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <header>
        <h1>Museos Santiago</h1>
        <nav>
          {/* <a href="/contact">Contacto</a> | <a href="/app">Ir a la App</a> */}
          <Link to="/contact">Contacto</Link> |{" "}
          <Link to="/app">Ir a la App</Link>
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
