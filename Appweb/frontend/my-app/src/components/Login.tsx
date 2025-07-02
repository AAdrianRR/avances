import { useState, useEffect } from "react";
import { login } from "../services/authService";
import "../styles/login.css";
import difLogo from "../imagenes/dif.png";
import renaceLogo from "../imagenes/Logotipo RENACE 2025.png";
import splashLogo from "../imagenes/DGO_Mesa de trabajo 1.png"; 

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setCargando(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login({ email, password });
      
    } catch (error) {
      setError("Correo o contraseña incorrectos");
    }
  };

  return cargando ? (
    <div className="splash-container">
      <img src={splashLogo} alt="Pantalla de carga" className="splash-logo" />
    </div>
  ) : (
    <div className="login-container fade-in">
      <form onSubmit={handleSubmit} className="login-card">
        <div className="login-images">
          <img src={difLogo} alt="Logo DIF institucional" />
          <img src={renaceLogo} alt="Logotipo RENACE 2025" />
        </div>

        <h2>Iniciar Sesión</h2>
        {error && <p className="error">{error}</p>}

        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};
