const Personaje = require('../models/personajesModel');

// Obtener todos los personajes
const getAllPersonajes = async (req, res) => {
    try {
        const personajes = await Personaje.find();
        res.json(personajes);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los personajes' });
    }
};

// Obtener un personaje por ID
const getPersonajeById = async (req, res) => {
    try {
        const personaje = await Personaje.findById(req.params.id);
        if (!personaje) return res.status(404).json({ error: 'Personaje no encontrado' });
        res.json(personaje);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el personaje' });
    }
};

// Crear un nuevo personaje
const createPersonaje = async (req, res) => {
    try {
        const { nombre, nacion, arma, elemento, descripcion } = req.body; // Desestructurar datos enviados
        const imagen = req.file ? `/images/personajes/${req.file.filename}` : ''; // Ruta de la imagen

        const nuevoPersonaje = new Personaje({
            nombre,
            nacion,
            arma,
            elemento,
            descripcion,
            imagen,
        });

        const personajeGuardado = await nuevoPersonaje.save();
        res.status(201).json(personajeGuardado);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el personaje', details: error });
    }
};

module.exports = {
    getAllPersonajes,
    getPersonajeById,
    createPersonaje,
};
