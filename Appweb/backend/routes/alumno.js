const express = require('express');
const router = express.Router();

const validateAlumno = require('../middlewares/validateAlumno');
console.log(' typeof validateAlumno:', typeof validateAlumno); 

const { createAlumno, loginAlumno } = require('../controllers/alumnoController');
console.log(' typeof createAlumno:', typeof createAlumno); 

const authAlumno = require('../middlewares/authAlumno');
const Clase = require('../models/clase');

// Registro y login
router.post('/', validateAlumno, createAlumno);
router.post('/login', loginAlumno);


router.get('/mi-clase', authAlumno, async (req, res) => {
  try {
    const clase = await Clase.findOne({ alumnos: req.alumno.id })
                             .populate('maestro', 'nombre apellido correo')
                             .populate('alumnos', 'nombre correo');

    if (!clase) {
      return res.status(404).json({ message: 'No estás asignado a ninguna clase.' });
    }

    res.status(200).json(clase);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar tu clase.', error });
  }
});

module.exports = router;
