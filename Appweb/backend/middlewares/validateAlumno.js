const validateAlumno = (req, res, next) => {
  const { esMenorEdad, padre } = req.body;

  if (esMenorEdad && (!padre || !padre.nombre || !padre.telefono)) {
    return res.status(400).json({ message: "Si el alumno es menor de edad, debes ingresar el nombre y teléfono del padre." });
  }

  if (!esMenorEdad && padre) {
    return res.status(400).json({ message: "No necesitas ingresar datos del padre si el alumno es mayor de edad." });
  }

  next();
};

module.exports = validateAlumno;
