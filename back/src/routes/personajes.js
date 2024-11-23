const express = require('express');
const router = express.Router();
const { getAllPersonajes, getPersonajeById, createPersonaje } = require('../controllers/personajesController');

// RUTAS PARA LOS PERSONAJES
router.get('/', getAllPersonajes);
router.get('/:id', getPersonajeById);
router.post('/', createPersonaje);

module.exports = router;
