const express = require('express');
const router = express.Router();
const Elemento = require('../../src/models/elementosModel');


router.get('/', async (req, res) => {
    try {
        const elementos = await Elemento.find();
        res.json(elementos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener elementos', error });
    }
});



module.exports = router;
