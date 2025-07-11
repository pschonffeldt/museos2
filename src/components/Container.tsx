// src/components/Container.tsx

export default function Container() {
  return (
    <main className="container">
      {/* Nav bar izquierda */}

      <nav className="nav-left">
        <div className="title-container">
          <h1 className="title">Buscador de Museos</h1>
        </div>
        <div className="results">
          <div className="result-container">
            <p className="result-name">El que tiene color del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Nombre del museo</p>
          </div>
          <div className="result-container">
            <p>Tula del museo</p>
          </div>
        </div>
      </nav>

      {/* Nav bar superior */}

      <div className="content">
        <nav className="nav-top">
          <div className="search-bar-container">
            <form className="search-bar-form">
              <input
                className="search-bar-form-input"
                placeholder="Busca museos por su nombre..."
              />
              <button type="submit" className="search-bar-button">
                Buscar museo
              </button>
            </form>
          </div>
        </nav>

        <div className="details-container">
          <div className="details-container-layout"></div>
        </div>
      </div>
    </main>
  );
}
