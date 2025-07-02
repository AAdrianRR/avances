import { useState } from "react";
import "../styles/registro.css"; 

export const RegistroAlumno = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    correo: "",
    direccion: "",
    telefono: "",
    contraseña: "",
    esMenorEdad: false,
    padre: {
      nombre: "",
      telefono: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    if (name.startsWith("padre.")) {
      const key = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        padre: {
          ...prev.padre,
          [key]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    // Aquí podrías conectarlo al backend en el futuro
  };

  return (
    <div className="registro-container">
      <form onSubmit={handleSubmit} className="registro-card">
        <h2>Registro de Alumno</h2>

        <input name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
        <input name="apellido" placeholder="Apellido" value={formData.apellido} onChange={handleChange} required />
        <input name="edad" type="number" placeholder="Edad" value={formData.edad} onChange={handleChange} required />
        <input name="correo" type="email" placeholder="Correo electrónico" value={formData.correo} onChange={handleChange} required />
        <input name="direccion" placeholder="Dirección" value={formData.direccion} onChange={handleChange} required />
        <input name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} required />
        <input name="contraseña" type="password" placeholder="Contraseña" value={formData.contraseña} onChange={handleChange} required />

        <label className="checkbox-label">
          <input type="checkbox" name="esMenorEdad" checked={formData.esMenorEdad} onChange={handleChange} />
          ¿Es menor de edad?
        </label>

        {formData.esMenorEdad && (
          <>
            <input
              name="padre.nombre"
              placeholder="Nombre del padre/madre/tutor"
              value={formData.padre.nombre}
              onChange={handleChange}
              required
            />
            <input
              name="padre.telefono"
              placeholder="Teléfono del padre/madre/tutor"
              value={formData.padre.telefono}
              onChange={handleChange}
              required
            />
          </>
        )}

        <button type="submit">Registrar Alumno</button>
      </form>
    </div>
  );
};
