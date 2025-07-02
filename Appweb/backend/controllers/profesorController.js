const Profesor = require('../models/profesor');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'secretoSuperProfe123';

const registrarProfesor = async (req, res) => {
  try {
    const { nombre, apellido, correo, telefono, direccion, contraseña } = req.body;

    const existe = await Profesor.findOne({ correo });
    if (existe) return res.status(400).json({ message: "Ya existe un profesor con ese correo." });

    const hash = await bcrypt.hash(contraseña, 10);
    const nuevoProfe = new Profesor({ nombre, apellido, correo, telefono, direccion, contraseña: hash });
    await nuevoProfe.save();

    res.status(201).json({ message: "Profesor registrado con éxito." });
  } catch (error) {
    console.error(" Error al registrar profesor:", error);
    res.status(500).json({ message: "Error al registrar profesor", error });
  }
};

// Login 
const loginProfesor = async (req, res) => {
  try {
    const { correo, contraseña } = req.body;

    const profesor = await Profesor.findOne({ correo });
    if (!profesor) return res.status(404).json({ message: "Correo no registrado como profesor." });

    const coincide = await bcrypt.compare(contraseña, profesor.contraseña);
    if (!coincide) return res.status(401).json({ message: "Contraseña incorrecta." });

    const token = jwt.sign({ id: profesor._id, rol: 'profesor' }, SECRET_KEY, { expiresIn: '1h' });

    res.status(200).json({
      message: "Inicio de sesión exitoso.",
      token,
      profesor: {
        id: profesor._id,
        nombre: profesor.nombre,
        correo: profesor.correo
      }
    });
  } catch (error) {
    console.error("Error al iniciar sesión como profesor:", error);
    res.status(500).json({ message: "Error en el login del profesor", error });
  }
};

module.exports = { registrarProfesor, loginProfesor };
