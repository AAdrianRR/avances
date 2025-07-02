module.exports = (rolesPermitidos) => {
  return (req, res, next) => {
    if (!rolesPermitidos.includes(req.usuario.rol)) {
      return res.status(403).json({ message: 'Acceso denegado: Rol insuficiente.' });
    }
    next();
  };
};
