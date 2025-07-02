import "../styles/monitor.css";

export const MonitorPiscina = () => {
  
  const temperaturaAgua = 29.5;
  const nivelAgua = 78; // porcentaje
  const clima = {
    temperatura: 32,
    descripcion: "Soleado parcialmente",
  };

  return (
    <div className="monitor-container">
      <h2>Monitero de la Piscina</h2>

      <div className="tarjetas">
        {/* Temperatura del agua */}
        <div className="tarjeta">
          <h3>🌡️ Temperatura del agua</h3>
          <div className="termometro">
            <div className="circle">
              <span>{temperaturaAgua}°C</span>
            </div>
          </div>
        </div>

        {/* Nivel del agua */}
        <div className="tarjeta">
          <h3>🌊 Nivel del agua</h3>
          <div className="barra-nivel">
            <div className="relleno" style={{ width: `${nivelAgua}%` }}></div>
          </div>
          <span>{nivelAgua}% lleno</span>
        </div>

        {/* Clima exterior */}
        <div className="tarjeta">
          <h3>🌤️ Clima exterior</h3>
          <p><strong>{clima.temperatura}°C</strong></p>
          <p>{clima.descripcion}</p>
        </div>
      </div>
    </div>
  );
};
