// src/components/ContactPage.tsx
import Footer from "./Footer";

export default function ContactPage() {
  return (
    <>
      <header>
        <h1>Contacto</h1>
        <nav>
          <a href="/">Inicio</a> | <a href="/app">Ir a la App</a>
        </nav>
      </header>
      <main>
        <p>¿Tienes preguntas? Escríbenos a contacto@museosantiago.cl</p>
      </main>
      <Footer />
    </>
  );
}
