const express = require('express');
const router = express.Router();
const Nation = require('../../src/models/nacionesModel');

// Ruta para obtener todas las naciones
router.get('/', async (req, res) => {
    try {
        const naciones = await Naciones.find();
        res.json(naciones);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener naciones', error });
    }
});

// Puedes agregar más rutas relacionadas con naciones aquí

module.exports = router;
