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
        <header className="section--hero">
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
          <div className="section--what--content">
            <h2>¿Qué es Museos?</h2>
            <p className="section--what--p">
              Museos es una aplicación web que te ayuda a encontrar y conocer
              centros culturales antes de visitarlos. En vez de buscar en
              múltiples páginas, Museos te muestra toda la información en un
              solo lugar: ubicación, descripción, colecciones destacadas y más.
              De esta manera ahorras tiempo y esfuerzo.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1621886292650-520f76c747d6?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Descriptive alt text"
              className="section--what--image"
            ></img>
          </div>
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
          <div className="section--who--grid">
            <div className="section--who--gridbox">
              <p>Viajeros que planean sus recorridos culturales</p>
            </div>
            <div className="section--who--gridbox">
              <p>Amantes de los museos y la historia</p>
            </div>
            <div className="section--who--gridbox">
              <p>Curiosos locales que quieren descubrir nuevos espacios</p>
            </div>
            <div className="section--who--gridbox">
              <p>Familias que buscan actividades educativas</p>
            </div>
          </div>
        </section>

        {/* Availability */}
        <section className="section section--what">
          <div className="section--what--content">
            <h2>¿Dónde funciona?</h2>
            <p>
              Actualmente tenemos información de gran parte de los museos de{" "}
              <strong>Santiago de Chile</strong>. Pero este es solo el comienzo.
              Próximamente expandiremos a:
            </p>
            <p>
              <strong>Chile → Sudamérica → Norteamérica → 🌎</strong>
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1621886292650-520f76c747d6?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Descriptive alt text"
              className="section--what--image"
            ></img>
          </div>
        </section>

        {/* CTA */}
        <section className="section--cta">
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
