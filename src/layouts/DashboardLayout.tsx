// src/layouts/DashboardLayout.tsx
import Thinbar from "../components/Thinbar";
import Footer from "../components/Footer";
import { DrawingPinIcon } from "@radix-ui/react-icons";

export default function DashboardLayout() {
  return (
    <main className="dashboard__layout">
      <Thinbar />
      <div className="dashboard__rows">
        {/* First row */}
        <div className="dashboard__row">
          {/* First card, first row */}
          <div className="dashboard__row chart25">
            <div className="dashboard__row__card">
              <div className="dashboard__row__card-title">
                <h2>Resumen de registros</h2>
              </div>
              <div className="dashboard__row__card-facts">
                <div className="dashboard__row__card-fact">
                  <div className="dashboard__row__card-fact-icon">
                    <DrawingPinIcon className="icon" />
                  </div>
                  <div className="dashboard__row__card-fact-heading">
                    <p>Museos registrados</p>
                    <p>59</p>
                  </div>
                </div>
                <div className="dashboard__row__card-fact">
                  <div className="dashboard__row__card-fact-icon">
                    <DrawingPinIcon className="icon" />
                  </div>
                  <div className="dashboard__row__card-fact-heading">
                    <p>Museos verificados</p>
                    <p>100%</p>
                  </div>
                </div>
                <div className="dashboard__row__card-fact">
                  <div className="dashboard__row__card-fact-icon">
                    <DrawingPinIcon className="icon" />
                  </div>
                  <div className="dashboard__row__card-fact-heading">
                    <p>Museos afiliados</p>
                    <p>0%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second card, first row */}
          <div className="dashboard__row chart25">
            <div className="dashboard__row__card">
              <div className="dashboard__row__card-title">
                <h2>Distribución por zona</h2>
              </div>
              <div className="dashboard__row__card-chart-layout">
                {/* Chart */}
                <div className="dashboard__row__card-chart">
                  <div className="chart"></div>
                </div>

                {/* Chart legend */}
                <div className="dashboard__row__card-chart-legend">
                  <p>Norte Grande</p>
                  <p>Norte Chico</p>
                  <p>Zona Central</p>
                  <p>Zona Sur</p>
                  <p>Zona Austral</p>
                </div>
              </div>
            </div>
          </div>

          {/* Third card, first row */}
          <div className="dashboard__row chart25">
            <div className="dashboard__row__card">
              <div className="dashboard__row__card-title">
                <h2>Distribución por tipo</h2>
              </div>
              <div className="dashboard__row__card-chart-layout">
                {/* Chart */}
                <div className="dashboard__row__card-chart">
                  <div className="chart"></div>
                </div>

                {/* Chart legend */}
                <div className="dashboard__row__card-chart-legend">
                  <p>Legend 1</p>
                  <p>Legend 1</p>
                  <p>Legend 1</p>
                </div>
              </div>
            </div>
          </div>
          {/* Fourth card, first row */}
          <div className="dashboard__row chart25">
            <div className="dashboard__row__card">
              <div className="dashboard__row__card-title">
                <h2>Distribución por categoría</h2>
              </div>
              <div className="dashboard__row__card-chart-layout">
                {/* Chart */}
                <div className="dashboard__row__card-chart">
                  <div className="chart"></div>
                </div>

                {/* Chart legend */}
                <div className="dashboard__row__card-chart-legend">
                  <p>Legend 1</p>
                  <p>Legend 1</p>
                  <p>Legend 1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Second row */}
        <div className="dashboard__row">
          <div className="chart50">
            <div className="dashboard__row__card">
              <div className="dashboard__row__card-title">
                <h2>Distribución por región</h2>
              </div>
              <div className="dashboard__row__card-facts">
                <div className="dashboard__row__card-fact"></div>
              </div>
            </div>
          </div>
          <div className="chart25">
            <div className="dashboard__row__card">
              <div className="dashboard__row__card-title">
                <h2>Costo de museos</h2>
              </div>
              <div className="dashboard__row__card-facts">
                <div className="dashboard__row__card-fact"></div>
              </div>
            </div>
          </div>
          <div className="chart25">
            <div className="dashboard__row__card">
              <div className="dashboard__row__card-title">
                <h2>Museos con descuentos</h2>
              </div>
              <div className="dashboard__row__card-facts">
                <div className="dashboard__row__card-fact"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Third row */}
        <div className="dashboard__row">
          <div className="chart100">
            <div className="dashboard__row__card">
              <div className="dashboard__row__card-title">
                <h2>Museos registrados</h2>
              </div>
              <div className="dashboard__row__card-facts">
                <div className="dashboard__row__card-fact"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
