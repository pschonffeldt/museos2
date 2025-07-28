// src/components/ContactPage.tsx
import { Link } from "react-router-dom";
import { useEffect } from "react";
import WebsiteFooter from "../components/website/WebsiteFooter";

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contacto";
  }, []);
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
      <WebsiteFooter />
    </>
  );
}
