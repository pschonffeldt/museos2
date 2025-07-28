// src/components/HomePage.tsx
import { Link } from "react-router-dom";
import WebsiteFooter from "../components/website/WebsiteFooter";
import { useEffect } from "react";
import WebsiteNav from "../components/website/WebsiteNav";

export default function HomePage() {
  useEffect(() => {
    document.title = "Inicio";
  }, []);
  return (
    <>
      {/* Website navigation */}

      <WebsiteNav />

      {/* Page content */}
      <main>
        {/* Hero Section */}
        <header className="section section--hero">
          <h1>Descubre los museos antes de visitarlos</h1>
          <p className="tagline">
            Explora, compara y prepárate para tu próxima visita cultural con
            Museos, la app que te muestra todo lo que necesitas saber antes de
            ir.
          </p>
          <a href="/app" className="button">
            Explorar museos
          </a>
        </header>

        {/* What is Museos */}
        <section className="section section--what">
          <h2>¿Qué es Museos?</h2>
          <p>
            Museos es una aplicación web que te ayuda a encontrar y conocer
            museos en una ciudad antes de visitarlos. En vez de buscar en
            múltiples páginas, Museos te muestra toda la información en un solo
            lugar: ubicación, descripción, colecciones destacadas y más.
          </p>
        </section>

        {/* How it Works */}
        <section className="section section--how">
          <h2>¿Cómo funciona?</h2>
          <p>
            Solo tienes que buscar el nombre de un museo o hacer clic en “Ver
            todos”. Obtendrás una lista de resultados en el lado izquierdo de la
            pantalla. Al seleccionar uno, verás todos los detalles al costado
            derecho, sin tener que salir de la app. Así puedes decidir con
            confianza a dónde ir.
          </p>
        </section>

        {/* Who is it for */}
        <section className="section section--who">
          <h2>¿Para quién es?</h2>
          <ul>
            <li>Viajeros que planean sus recorridos culturales</li>
            <li>Amantes de los museos y la historia</li>
            <li>Curiosos locales que quieren descubrir nuevos espacios</li>
            <li>Familias que buscan actividades educativas</li>
          </ul>
        </section>

        {/* Availability */}
        <section className="section section--availability">
          <h2>¿Dónde funciona?</h2>
          <p>
            Actualmente tenemos información de todos los museos de{" "}
            <strong>Santiago de Chile</strong>. Pero este es solo el comienzo.
            Próximamente expandiremos a:
          </p>
          <p>
            <strong>
              Chile → Sudamérica → Centroamérica y el Caribe → Norteamérica
            </strong>
          </p>
        </section>

        {/* Final CTA */}
        <section className="section section--cta">
          <h2>¿Listo para tu próxima aventura cultural?</h2>
          <a href="/app" className="button button--primary">
            Ir a la app
          </a>
        </section>
      </main>

      <WebsiteFooter />
    </>
  );
}
