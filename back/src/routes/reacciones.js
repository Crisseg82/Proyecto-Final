const express = require('express');
const router = express.Router();
const Reaccion = require('../models/reaccionesModel');

// Obtener todas las reacciones
router.get('/', async (req, res) => {
    try {
        const reacciones = await Reaccion.find();
        res.json(reacciones);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener reacciones', error });
    }
});

// Buscar una reacción específica
router.get('/:element1/:element2', async (req, res) => {
    const { element1, element2 } = req.params;
    try {
        const reaccion = await Reaccion.findOne({
            elements: { $all: [element1, element2] }
        });
        if (reaccion) {
            res.json(reaccion);
        } else {
            res.status(404).json({ message: 'No se encontró una reacción para esos elementos' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar la reacción', error });
    }
});

module.exports = router;
