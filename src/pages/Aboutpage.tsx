// src/components/About.tsx
import { Link } from "react-router-dom";
import { useEffect } from "react";
import WebsiteFooter from "../components/website/WebsiteFooter";
import WebsiteNav from "../components/website/WebsiteNav";
import { APP_NAME } from "../lib/constants";

export default function About() {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <>
      {/* <WebsiteNav /> */}
      <main>
        {/* Page Header */}
        <header className="section--hero">
          <h1>Sobre {APP_NAME}</h1>
          <p className="tagline">
            Creemos que la cultura debe estar al alcance de todos, desde
            cualquier parte del mundo.
          </p>
        </header>

        {/* Our Story */}
        <section className="section section--story">
          <h2>Nuestra historia</h2>
          <p>
            {APP_NAME} nació como una herramienta sencilla para resolver un
            problema real: encontrar información clara y confiable sobre los{" "}
            museos de una ciudad antes de visitarlos. Después de viajar,
            descubrir rincones culturales por accidente, y frustrarse con la
            falta de detalles en línea, decidimos construir una solución
            práctica, directa y pensada para exploradores culturales.
          </p>
        </section>

        {/* Our Mission */}
        <section className="section section--mission">
          <h2>Nuestra misión</h2>
          <p>
            Hacer que cada persona, sin importar de dónde venga, pueda
            descubrir, conocer y disfrutar de los {APP_NAME} y espacios
            culturales de una ciudad con información útil, clara y accesible
            desde el primer momento.
          </p>
        </section>

        {/* Our Vision */}
        <section className="section section--vision">
          <h2>Nuestra visión</h2>
          <p>
            Queremos convertirnos en el punto de partida digital para cualquier
            amante de la cultura. Desde Santiago hasta las capitales del mundo,{" "}
            {APP_NAME} busca conectar a las personas con los espacios que
            resguardan el arte, la historia y la identidad de cada lugar.
          </p>
        </section>

        {/* Looking Ahead */}
        <section className="section section--future">
          <h2>Lo que viene</h2>
          <p>
            Empezamos en Santiago de Chile, pero ya estamos preparando el camino
            para expandirnos a todo el país y, pronto, al resto de América. Cada
            nueva ciudad que sumamos es una oportunidad para mostrar su riqueza
            cultural y facilitarle la vida a los viajeros y curiosos que la
            visitan.
          </p>
        </section>

        {/* Who We Are */}
        <section className="section section--team">
          <h2>¿Quiénes somos?</h2>
          <p>
            {APP_NAME} es un proyecto independiente desarrollado por{" "}
            <strong>Pablo</strong>, un apasionado de la cultura, el desarrollo
            web y la exploración urbana. Todo el contenido, el código y la
            visión detrás de esta plataforma están hechos con dedicación y amor
            por la experiencia cultural.
          </p>
        </section>

        {/* Donations Section */}
        <section className="section section--donate">
          <h2>Apoya el crecimiento cultural</h2>
          <p>
            <strong>{APP_NAME}</strong> es un proyecto independiente y
            autofinanciado, nacido con el propósito de impulsar la difusión y el
            aprecio por la cultura. Tu apoyo nos permite seguir investigando,
            recopilando información y mejorando esta plataforma para que cada
            vez más personas puedan descubrir el valor de los {APP_NAME}.
          </p>
          <p>
            Si compartes nuestra visión y deseas contribuir, te invitamos a
            realizar una donación a través de nuestro formulario.
          </p>
          <div className="donate-form-link">
            <Link to="/contact" className="button button--donate">
              Donar ahora
            </Link>
          </div>
        </section>
      </main>
      {/* <WebsiteFooter /> */}
    </>
  );
}
