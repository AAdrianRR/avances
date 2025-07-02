const express = require('express');
const router = express.Router();
const { registrarProfesor, loginProfesor } = require('../controllers/profesorController');
const authProfesor = require('../middlewares/authProfesor');
const Clase = require('../models/clase');

// login
router.post('/registrar', registrarProfesor);
router.post('/login', loginProfesor);


router.get('/mis-clases', authProfesor, async (req, res) => {
  try {
    const clases = await Clase.find({ maestro: req.profesor.id })
                              .populate('alumnos', 'nombre correo')
                              .populate('maestro', 'nombre apellido correo');
    res.status(200).json(clases);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las clases del profesor.', error });
  }
});

module.exports = router;
