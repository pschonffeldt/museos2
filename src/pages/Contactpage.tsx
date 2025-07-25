// src/components/ContactPage.tsx
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <>
      <header>
        <h1>Contacto</h1>
        <nav>
          <Link to="/">Inicio</Link> |<Link to="/app">App</Link> |
          <Link to="/release">Release</Link>
        </nav>
      </header>
      <main>
        <p>¿Tienes preguntas? Escríbenos a contacto@museosantiago.cl</p>
      </main>
      <Footer />
    </>
  );
}
