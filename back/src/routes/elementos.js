const express = require('express');
const router = express.Router();
const Element = require('../../src/models/elementosModel');

// Ruta para obtener todos los elementos
router.get('/', async (req, res) => {
    try {
        const elementos = await Elemento.find();
        res.json(elementos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener elementos', error });
    }
});

// Puedes agregar más rutas relacionadas con elementos aquí

module.exports = router;
