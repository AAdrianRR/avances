import { Routes, Route, useLocation } from "react-router-dom";
import { Login } from "./components/Login";
import { RegistroAlumno } from "./components/RegistroAlumno";
import { TablaAlumnos } from "./components/TablaAlumnos";
import { MonitorPiscina } from "./components/MonitorPiscina";
import { TablaClasesNatacion } from "./components/TablaClasesNatacion";
import { FormularioClase } from "./components/FormularioClase";
import { FormularioProfesor } from "./components/FormularioProfesor";
import { TablaProfesores } from "./components/TablaProfesores"; // ✅ nueva importación
import { Navbar } from "./components/Navbar";

const App = () => {
  const location = useLocation();
  const esLogin = location.pathname === "/";

  return (
    <>
      {!esLogin && <Navbar />}
      <div style={{ paddingTop: !esLogin ? "80px" : "0" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registro-alumno" element={<RegistroAlumno />} />
          <Route path="/alumnos" element={<TablaAlumnos />} />
          <Route path="/monitor" element={<MonitorPiscina />} />
          <Route path="/clases-natacion" element={<TablaClasesNatacion />} />
          <Route path="/crear-clase" element={<FormularioClase />} />
          <Route path="/registrar-profesor" element={<FormularioProfesor />} />
          <Route path="/profesores" element={<TablaProfesores />} /> {/* ✅ nueva ruta */}
        </Routes>
      </div>
    </>
  );
};

export default App;
