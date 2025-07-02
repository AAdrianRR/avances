import { Link } from "react-router-dom";
import "../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">RENACE 2025</div>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/registro-alumno">Registrar Alumno</Link></li>
        <li><Link to="/alumnos">Alumnos</Link></li>
        <li><Link to="/monitor">Piscina</Link></li>
        <li><Link to="/crear-clase">Crear Clase</Link></li>
        <li><Link to="/clases-natacion">Clases</Link></li>
        <li><Link to="/registrar-profesor">Registrar Profesor</Link></li>
        <li><Link to="/profesores">Profesores</Link></li>
      </ul>
    </nav>
  );
};
