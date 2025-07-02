const jwt = require('jsonwebtoken');
const SECRET_KEY = 'secretoSuperProfe123';

const authAlumno = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Token no proporcionado.' });

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    if (decoded.rol !== 'alumno') {
      return res.status(403).json({ message: 'Acceso restringido a alumnos.' });
    }

    req.alumno = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Token inválido o expirado.' });
  }
};

module.exports = authAlumno;
