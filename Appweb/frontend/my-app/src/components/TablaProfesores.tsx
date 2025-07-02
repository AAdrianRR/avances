import "../styles/tabla.css";

export const TablaProfesores = () => {
  
  const profesores = [
    {
      _id: "p1",
      nombre: "Martín",
      apellido: "López",
      correo: "martin.lopez@example.com",
      telefono: "555-123-4567",
      direccion: "Calle 10 Sur, Durango",
    },
    {
      _id: "p2",
      nombre: "Laura",
      apellido: "Gómez",
      correo: "laura.gomez@example.com",
      telefono: "555-987-6543",
      direccion: "Av. Universidad, Durango",
    },
  ];

  return (
    <div className="tabla-container">
      <h2>Profesores Registrados</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Dirección</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {profesores.map((prof) => (
            <tr key={prof._id}>
              <td>{prof.nombre}</td>
              <td>{prof.apellido}</td>
              <td>{prof.correo}</td>
              <td>{prof.telefono}</td>
              <td>{prof.direccion}</td>
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
