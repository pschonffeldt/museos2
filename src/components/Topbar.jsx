import ActionButtons from "./ActionButtons";
import SearchBar from "./SearchBar";

export default function Topbar() {
  return (
    <header className="top-bar">
      <SearchBar />
      <ActionButtons />
      {/* Action bar // El action bar debería otorgar un par de acciones extras
      como por ejemplo compartir (en el caso de haber un museo cargado, comparte
      ese museo, en el caso de no tener nada cargado, comparte la app misma).
      Eventualmente podría también tener un switch para cambiar entre light y
      dark mode. Podría también tener un boton con forma de sobre y que permita
      a los usuarios suscribirse a nuestro newsletter. */}
    </header>
  );
}
