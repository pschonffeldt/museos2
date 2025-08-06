// src/components/ContactPage.tsx
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import WebsiteNav from "../components/website/WebsiteNav";
import WebsiteFooter from "../components/website/WebsiteFooter";

export default function ContactPage() {
  // form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // submission status: null = not submitted yet, "success" or "error"
  const [status, setStatus] = useState<null | "success" | "error">(null);

  useEffect(() => {
    document.title = "Contacto";
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    // insert into your Supabase table "contact_messages"
    const { error } = await supabase.from("contact_messages").insert({
      contact_name: name,
      contact_email: email,
      contact_message: message,
    });

    if (error) {
      console.error("Supabase insert error:", error);
      setStatus("error");
    } else {
      setStatus("success");
      // clear form
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <>
      {/* <WebsiteNav /> */}

      <main className="section contact-page">
        <div className="contact-container">
          <h1>Contáctanos</h1>
          <p className="contact-intro">
            ¿Tienes preguntas, sugerencias o ideas? Usa el siguiente formulario
            o escríbenos directamente por correo electrónico.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="tucorreo@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="¿Cómo podemos ayudarte?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <button type="submit" className="button button--primary">
              Enviar mensaje
            </button>
          </form>

          {/* status feedback */}
          {status && (
            <div className={`contact-feedback ${status}`}>
              {status === "success"
                ? "¡Gracias! Tu mensaje ha sido enviado."
                : "Ocurrió un error. Por favor inténtalo de nuevo más tarde."}
            </div>
          )}

          <p className="contact-email-fallback">
            También puedes escribirnos a{" "}
            <a href="mailto:info@mitkof.cl">info@mitkof.cl</a>
          </p>
        </div>
      </main>

      {/* <WebsiteFooter /> */}
    </>
  );
}
