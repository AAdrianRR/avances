import { useState } from "react";
import "../styles/formulario.css";

export const FormularioProfesor = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    direccion: "",
    contraseña: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Profesor creado:", formData);
    // Aquí puedes usar axios.post('/api/profesores', formData)
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <h2>Registrar Nuevo Profesor</h2>

      <label>Nombre:</label>
      <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />

      <label>Apellido:</label>
      <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} required />

      <label>Correo:</label>
      <input type="email" name="correo" value={formData.correo} onChange={handleChange} required />

      <label>Teléfono:</label>
      <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required />

      <label>Dirección:</label>
      <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} required />

      <label>Contraseña:</label>
      <input type="password" name="contraseña" value={formData.contraseña} onChange={handleChange} required />

      <button type="submit">Guardar Profesor</button>
    </form>
  );
};
