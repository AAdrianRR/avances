const Alumno = require('../models/alumno');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'secretoSuperProfe123';


const createAlumno = async (req, res) => {
  try {
    const { nombre, apellido, edad, correo, direccion, telefono, esMenorEdad, padre, contraseña, clase } = req.body;

    const alumnoExistente = await Alumno.findOne({ correo });
    if (alumnoExistente) {
      return res.status(400).json({ message: 'El correo ya está registrado.' });
    }

    const contraseñaEncriptada = await bcrypt.hash(contraseña, 10);

    const nuevoAlumno = new Alumno({
      nombre,
      apellido,
      edad,
      correo,
      direccion,
      telefono,
      esMenorEdad,
      padre: esMenorEdad ? padre : undefined,
      contraseña: contraseñaEncriptada,
      clase
    });

    await nuevoAlumno.save();
    res.status(201).json({ message: 'Alumno registrado con éxito.' });
  } catch (error) {
    console.error('Error en createAlumno:', error);
    res.status(500).json({ message: 'Error al registrar el alumno.', error });
  }
};

// Función para iniciar sesión del alumno
const loginAlumno = async (req, res) => {
  try {
    const { correo, contraseña } = req.body;

    const alumno = await Alumno.findOne({ correo });
    if (!alumno) {
      return res.status(404).json({ message: 'Correo no registrado.' });
    }

    const coincide = await bcrypt.compare(contraseña, alumno.contraseña);
    if (!coincide) {
      return res.status(401).json({ message: 'Contraseña incorrecta.' });
    }

    const token = jwt.sign({ id: alumno._id, rol: 'alumno' }, SECRET_KEY, { expiresIn: '1h' });

    res.status(200).json({
      message: 'Inicio de sesión exitoso.',
      token,
      alumno: {
        id: alumno._id,
        nombre: alumno.nombre,
        correo: alumno.correo
      }
    });
  } catch (error) {
    console.error(' Error en loginAlumno:', error);
    res.status(500).json({ message: 'Error al iniciar sesión.', error });
  }
};

// Exportación 
module.exports = {
  createAlumno,
  loginAlumno
};
