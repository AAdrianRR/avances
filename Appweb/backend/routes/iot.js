const express = require('express');
const router = express.Router();
const RegistroIot = require('../models/registroIot');

const authAdmin = require('../middlewares/authAdmin');
const authProfesor = require('../middlewares/authProfesor');

// POST para el ESP32
router.post('/:claseId', async (req, res) => {
  try {
    const { temperatura, humedad, nivelAgua } = req.body;
    const { claseId } = req.params;

    const nuevoRegistro = new RegistroIot({
      clase: claseId,
      temperatura,
      humedad,
      nivelAgua
    });

    await nuevoRegistro.save();
    res.status(200).json({ message: 'Datos IoT guardados correctamente.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al guardar los datos.', error });
  }
});

// Admin GEt ruta
router.get('/:claseId/admin', authAdmin, async (req, res) => {
  try {
    const registros = await RegistroIot.find({ clase: req.params.claseId })
      .sort({ fecha: -1 })
      .limit(10);
    res.json(registros);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener registros (admin)', error });
  }
});

// Profesor GET ruta
router.get('/:claseId/profesor', authProfesor, async (req, res) => {
  try {
    const registros = await RegistroIot.find({ clase: req.params.claseId })
      .sort({ fecha: -1 })
      .limit(10);
    res.json(registros);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener registros (profesor)', error });
  }
});

module.exports = router;
