import "../styles/tabla.css";

export const TablaClasesNatacion = () => {
  // Simulación de clases con nombres de alumnos
  const clases = [
    {
      _id: "1",
      codigoClase: "AQUA101",
      nombre: "Natación Básica",
      maestro: "Prof. Martínez",
      dias: ["Lunes", "Miércoles", "Viernes"],
      hora: "16:00",
      fechaInicio: "2024-07-01",
      fechaFin: "2024-07-28",
      alumnos: ["Sofía Ramos", "Luis Pérez", "Emilia Torres"],
    },
    {
      _id: "2",
      codigoClase: "PRO202",
      nombre: "Perfeccionamiento",
      maestro: "Prof. López",
      dias: ["Martes", "Jueves"],
      hora: "18:30",
      fechaInicio: "2024-07-02",
      fechaFin: "2024-07-27",
      alumnos: ["Iván Gómez", "Mariana Núñez", "José Ángel"],
    },
  ];

  return (
    <div className="tabla-container">
      <h2>Clases de Natación</h2>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Maestro</th>
            <th>Días</th>
            <th>Hora</th>
            <th>Inicio</th>
            <th>Fin</th>
            <th>Alumnos</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clases.map((clase) => (
            <tr key={clase._id}>
              <td>{clase.codigoClase}</td>
              <td>{clase.nombre}</td>
              <td>{clase.maestro}</td>
              <td>{clase.dias.join(", ")}</td>
              <td>{clase.hora}</td>
              <td>{new Date(clase.fechaInicio).toLocaleDateString()}</td>
              <td>{new Date(clase.fechaFin).toLocaleDateString()}</td>
              <td>
                <ul>
                  {clase.alumnos.map((nombre, index) => (
                    <li key={index}>{nombre}</li>
                  ))}
                </ul>
              </td>
              <td className="acciones">
                <button className="edit-btn">✏️</button>
                <button className="delete-btn">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
