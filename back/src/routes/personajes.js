const express = require('express');
const router = express.Router();
const { getAllPersonajes, getPersonajeById, createPersonaje } = require('../controllers/personajesController');

// Obtener todos los personajes
router.get('/', getAllPersonajes);

// Obtener un personaje por ID
router.get('/:id', getPersonajeById);

// Crear un nuevo personaje
router.post('/', createPersonaje);

module.exports = router;
