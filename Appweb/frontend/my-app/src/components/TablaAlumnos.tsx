import "../styles/tabla.css";

const alumnos = [
  {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 15,
    correo: "juan@example.com",
    telefono: "1234567890",
    direccion: "Calle Falsa 123",
    esMenorEdad: true,
    padre: { nombre: "Carlos Pérez", telefono: "0987654321" },
  },
  {
    nombre: "Ana",
    apellido: "López",
    edad: 19,
    correo: "ana@example.com",
    telefono: "5555555555",
    direccion: "Av. Siempre Viva 742",
    esMenorEdad: false,
    padre: null,
  },
];

export const TablaAlumnos = () => {
  const handleEdit = (index: number) => {
    console.log("Editar alumno:", alumnos[index]);
  };

  const handleDelete = (index: number) => {
    console.log("Eliminar alumno:", alumnos[index]);
  };

  return (
    <div className="tabla-container">
      <h2>Lista de Alumnos Registrados</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Dirección</th>
            <th>Menor</th>
            <th>Tutor</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((alumno, index) => (
            <tr key={index}>
              <td>{`${alumno.nombre} ${alumno.apellido}`}</td>
              <td>{alumno.edad}</td>
              <td>{alumno.correo}</td>
              <td>{alumno.telefono}</td>
              <td>{alumno.direccion}</td>
              <td>{alumno.esMenorEdad ? "Sí" : "No"}</td>
              <td>{alumno.esMenorEdad ? alumno.padre?.nombre : "—"}</td>
              <td className="acciones">
                <button onClick={() => handleEdit(index)} className="edit-btn">✏️</button>
                <button onClick={() => handleDelete(index)} className="delete-btn">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
