import { useState } from "react";
import "../styles/formulario.css";

export const FormularioClase = () => {
  // Simulando datos desde el backend
  const profesores = [
    { _id: "p1", nombre: "Prof. Martínez" },
    { _id: "p2", nombre: "Prof. López" },
  ];

  const alumnosDisponibles = [
    { _id: "a1", nombre: "Sofía Ramos" },
    { _id: "a2", nombre: "Luis Pérez" },
    { _id: "a3", nombre: "Emilia Torres" },
  ];

  const [formData, setFormData] = useState({
    codigoClase: "",
    nombre: "",
    maestro: "",
    alumnos: [] as string[],
    dias: [] as string[],
    hora: "",
    fechaInicio: "",
    fechaFin: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckbox = (e: any) => {
    const { value, checked } = e.target;
    const dias = checked
      ? [...formData.dias, value]
      : formData.dias.filter((dia) => dia !== value);
    setFormData({ ...formData, dias });
  };

  const handleMultiSelect = (e: any) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option: any) => option.value);
    setFormData({ ...formData, alumnos: selectedOptions });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Clase registrada:", formData);
    // Aquí puedes usar axios.post('/api/clases', formData)
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <h2>Crear Clase de Natación</h2>

      <label>Código de Clase:</label>
      <input type="text" name="codigoClase" value={formData.codigoClase} onChange={handleChange} required />

      <label>Nombre de la Clase:</label>
      <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />

      <label>Profesor:</label>
      <select name="maestro" value={formData.maestro} onChange={handleChange} required>
        <option value="">-- Selecciona un profesor --</option>
        {profesores.map((prof) => (
          <option key={prof._id} value={prof._id}>
            {prof.nombre}
          </option>
        ))}
      </select>

      <label>Alumnos (máx. 10):</label>
      <select multiple name="alumnos" value={formData.alumnos} onChange={handleMultiSelect} required>
        {alumnosDisponibles.map((alumno) => (
          <option key={alumno._id} value={alumno._id}>
            {alumno.nombre}
          </option>
        ))}
      </select>

      <label>Días de la Semana:</label>
      <div className="dias-checkboxes">
        {["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"].map((dia) => (
          <label key={dia}>
            <input
              type="checkbox"
              value={dia}
              checked={formData.dias.includes(dia)}
              onChange={handleCheckbox}
            />
            {dia}
          </label>
        ))}
      </div>

      <label>Hora:</label>
      <input type="time" name="hora" value={formData.hora} onChange={handleChange} required />

      <label>Fecha de Inicio:</label>
      <input type="date" name="fechaInicio" value={formData.fechaInicio} onChange={handleChange} required />

      <label>Fecha de Fin:</label>
      <input type="date" name="fechaFin" value={formData.fechaFin} onChange={handleChange} required />

      <button type="submit">Registrar Clase</button>
    </form>
  );
};
