// src/components/ContactPage.tsx
import { Link } from "react-router-dom";
import { useEffect } from "react";
import WebsiteFooter from "../components/website/WebsiteFooter";
import WebsiteNav from "../components/website/WebsiteNav";

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contacto";
  }, []);

  return (
    <>
      <WebsiteNav />

      <main className="section contact-page">
        <div className="contact-container">
          <h1>Contáctanos</h1>
          <p className="contact-intro">
            ¿Tienes preguntas, sugerencias o ideas? Usa el siguiente formulario
            o escríbenos directamente por correo electrónico.
          </p>

          <form className="contact-form">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" placeholder="Tu nombre" />

            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="tucorreo@ejemplo.com"
            />

            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="¿Cómo podemos ayudarte?"
            />

            <button type="submit" className="button button--primary">
              Enviar mensaje
            </button>
          </form>

          <p className="contact-email-fallback">
            También puedes escribirnos a{" "}
            <a href="mailto:info@mitkof.cl">info@mitkof.cl</a>
          </p>
        </div>
      </main>

      <WebsiteFooter />
    </>
  );
}
