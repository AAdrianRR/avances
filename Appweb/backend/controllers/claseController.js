const Clase = require('../models/clase');

const createClase = async (req, res) => {
  try {
    const nuevaClase = new Clase(req.body);
    await nuevaClase.save();
    res.status(201).json({ message: "Clase creada con éxito", clase: nuevaClase });
  } catch (error) {
    console.error(" Error al crear clase:", error);
    res.status(500).json({ message: "Error al crear clase", error });
  }
};

module.exports = { createClase };
