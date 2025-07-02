const jwt = require('jsonwebtoken');
const SECRET_KEY = 'secretoSuperSecreto123';

const authAdmin = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Token no proporcionado.' });

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    if (decoded.rol !== "admin") {
      return res.status(403).json({ message: 'No tienes permisos de administrador.' });
    }

    req.admin = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Token inválido o expirado.' });
  }
};

module.exports = authAdmin;
