// src/components/Release.tsx
import { Link } from "react-router-dom";
import { useEffect } from "react";
import WebsiteFooter from "../components/website/WebsiteFooter";
import WebsiteNav from "../components/website/WebsiteNav";

export default function Release() {
  useEffect(() => {
    document.title = "Release";
  }, []);
  return (
    <>
      <WebsiteNav />

      <main className="release-page">
        <div className="section release-container">
          <h1>Historial de actualizaciones</h1>
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
                Esta versión ofrece búsqueda de museos por nombre, visualización
                instantánea de la descripción general y de la colección de cada
                museo, todo a través de una interfaz optimizada para escritorio.
                La navegación, diseñada para ser clara e intuitiva. Con este
                primer lanzamiento, Museos pone a tu disposición una herramienta
                accesible y práctica para planificar tus visitas culturales en
                Santiago de Chile.
              </li>
            </ul>
          </div>

          {/* Entry: Versión 1.1.0 */}
          <div className="release-entry">
            <h4 className="release-date">Miércoles 23 de julio de 2025</h4>
            <h3 className="release-version-description">
              Versión 1.1.0 – Mejora de accesibilidad en el buscador
            </h3>
            <ul className="release-ul">
              <li className="release-li">
                En esta versión refinamos el buscador tras compartir la app con
                algunos amigos y descubrir que, sin contexto, les costaba
                entender su propósito. Ahora el campo muestra una descripción
                clara desde el primer vistazo y, junto al botón de “Buscar”,
                incorpora la opción “Ver todos los museos”. Esta función surge
                de un comportamiento accidental que mostraba todos los
                resultados al dejar el campo vacío y se consolida como una
                característica oficial para facilitar la exploración completa de
                la colección.
              </li>
            </ul>
          </div>

          {/* Entry: Versión 1.1.1 */}
          <div className="release-entry">
            <h4 className="release-date">Miércoles 23 de julio de 2025</h4>
            <h3 className="release-version-description">
              Versión 1.1.1 – Corrección visual en resultados
            </h3>
            <ul className="release-ul">
              <li className="release-li">
                Se corrigió un parpadeo en la sección de resultados durante la
                renderización de componentes. Se optimizó la configuración del
                scroll para eliminar el flash visual al cargar los datos.
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
                Se añadió un menú de navegación lateral fijo que, aunque por
                ahora cumple una función decorativa, ya está completamente
                integrado en la interfaz y preparado para futuras
                funcionalidades como la navegación entre secciones y los ajustes
                de usuario.
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
                Se mejoraron detalles finos en la barra de navegación lateral.
                El cursor ahora cambia a puntero al pasar sobre los íconos,
                reforzando la percepción de interactividad. Además, los íconos
                genéricos fueron reemplazados por versiones personalizadas,
                consistentes en cajas con letras grandes alineadas al diseño de
                la aplicación.
              </li>
            </ul>
          </div>
          {/* Entry: Versión 1.2.0 */}
          <div className="release-entry">
            <h4 className="release-date">Viernes 1 de agosto de 2025</h4>
            <h3 className="release-version-description">
              Versión 1.2.0 – Lanzamiento del sitio estático
            </h3>
            <ul className="release-ul">
              <li className="release-li">
                Lanzamiento de la primera versión del sitio estático de Museos
                para que usuarios e interesados puedan explorar sus
                características y entender de qué se trata sin necesidad de
                conexión a la base de datos. Para ello se incorporó enrutamiento
                en el código, definiendo rutas para las páginas de inicio,
                contacto, “Acerca de” y notas de versión, y adaptando los
                componentes de navegación para que funcionen correctamente en un
                entorno web estático. Gracias a esta actualización, el sitio
                presenta de forma clara la propuesta de valor de la app y está
                listo para incorporar nuevas secciones informativas en el
                futuro.
              </li>
            </ul>
          </div>
          {/* Entry: Versión 1.2.1 */}
          <div className="release-entry">
            <h4 className="release-date">Lunes 4 de agosto de 2025</h4>
            <h3 className="release-version-description">
              Versión 1.2.1 – Mejoras del sitio estático
            </h3>
            <ul className="release-ul">
              <li className="release-li">
                Hemos mejorado el diseño del sitio web estático con algunos
                ajustes de estilo que le dan un aspecto más limpio y moderno.
                Además, implementamos desplazamiento suave al navegar entre
                páginas, lo que hace que la experiencia de usuario sea más
                fluida y evita los molestos parpadeos al cambiar de sección.
              </li>
            </ul>
          </div>
        </div>
        <WebsiteFooter />
      </main>
    </>
  );
}
