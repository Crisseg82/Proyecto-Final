const express = require('express');
const router = express.Router();
const Nacion = require('../../src/models/nacionesModel');

// Ruta para obtener todas las naciones
router.get('/', async (req, res) => {
    try {
        const naciones = await Nacion.find();
        res.json(naciones);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener naciones', error });
    }
});


module.exports = router;
