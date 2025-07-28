// src/components/Release.tsx
import { Link } from "react-router-dom";
import { useEffect } from "react";
import WebsiteFooter from "../components/website/WebsiteFooter";

export default function Release() {
  useEffect(() => {
    document.title = "Release";
  }, []);
  return (
    <>
      <header>
        <h1>Release notes</h1>
        <nav>
          <Link to="/app">App</Link> |<Link to="/contact">Contacto</Link> |
          <Link to="/release">Release</Link> | <Link to="/about">About</Link>
        </nav>
      </header>

      <main className="release-page">
        <div className="release-container">
          <p className="release-intro">
            Esta página documenta todos los cambios y mejoras realizadas en la
            aplicación <strong>Museos</strong>, desde su lanzamiento inicial.
            Aquí puedes seguir el desarrollo y las nuevas funcionalidades en
            tiempo real.
          </p>

          {/* Entry: Versión 1.0.0 */}
          <div className="release-entry">
            <h4 className="release-date">Martes 22 de julio de 2025</h4>
            <h3 className="release-version-description">
              Versión 1.0.0 – Primera versión pública
            </h3>
            <ul className="release-ul">
              <li className="release-li">
                Hoy se publica oficialmente la primera versión estable de
                Museos, una aplicación web diseñada para buscar museos en
                Santiago de Chile y explorar sus detalles antes de visitarlos.
                Esta versión inicial incluye una función de búsqueda por nombre
                o palabra clave, junto con una interfaz fluida que permite
                visualizar tanto la descripción general como la colección de
                cada museo. La navegación ha sido optimizada para adaptarse a
                distintos dispositivos, y el diseño prioriza la claridad y la
                experiencia del usuario desde el primer momento. Con este
                lanzamiento damos el primer paso hacia una herramienta
                accesible, útil y culturalmente enriquecedora. ¡Gracias por ser
                parte de este inicio!
              </li>
            </ul>
          </div>

          {/* Entry: Versión 1.1.0 */}
          <div className="release-entry">
            <h4 className="release-date">Miércoles 23 de julio de 2025</h4>
            <h3 className="release-version-description">
              Versión 1.1.0 – Mejora de accesibilidad en el formulario
            </h3>
            <ul className="release-ul">
              <li className="release-li">
                Después de compartir la app con algunos amigos, noté que sin
                contexto les resultaba difícil entender cómo utilizarla. Para
                mejorar esto, añadí una mejor descripción en el formulario de
                búsqueda, clarificando su propósito desde el primer vistazo.
                Además, incorporé un nuevo botón “Ver todos los museos” junto al
                de “Buscar”. Esta funcionalidad nació a partir de un
                comportamiento accidental (mostrar todos los museos cuando el
                campo estaba vacío), que decidí mantener como feature oficial.
              </li>
            </ul>
          </div>

          {/* Entry: Versión 1.1.1 */}
          <div className="release-entry">
            <h3 className="release-version-description">
              Versión 1.1.1 – Corrección visual en resultados
            </h3>
            <ul className="release-ul">
              <li className="release-li">
                Detecté un parpadeo molesto en la sección de resultados al
                renderizar los componentes. El problema estaba en la
                configuración del scroll, así que ajusté el CSS para eliminar
                ese flash visual al cargar los datos.
              </li>
            </ul>
          </div>

          {/* Entry: Versión 1.1.2 */}
          <div className="release-entry">
            <h3 className="release-version-description">
              Versión 1.1.2 – Navegación lateral integrada
            </h3>
            <ul className="release-ul">
              <li className="release-li">
                Añadí un menú de navegación lateral fijo. Actualmente es solo
                decorativo, pero ya está integrado en la UI y preparado para
                futuras funciones como navegación entre secciones y ajustes de
                usuario.
              </li>
            </ul>
          </div>

          {/* Entry: Versión 1.1.4 */}
          <div className="release-entry">
            <h4 className="release-date">Jueves 24 de julio de 2025</h4>
            <h3 className="release-version-description">
              Versión 1.1.4 – Mejoras de interacción en la barra lateral
            </h3>
            <ul className="release-ul">
              <li className="release-li">
                Hoy mejoré detalles finos en la barra de navegación lateral.
                Noté que el cursor no cambiaba al pasar por los íconos, así que
                actualicé el CSS para que muestre el puntero (pointer) al hacer
                hover, reforzando la percepción de interactividad. También
                reemplacé los íconos genéricos por versiones personalizadas:
                cajas con letras grandes, más alineadas con el diseño de la app.
              </li>
            </ul>
          </div>
        </div>
      </main>

      <WebsiteFooter />
    </>
  );
}
