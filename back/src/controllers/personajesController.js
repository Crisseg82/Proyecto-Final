const Personaje = require('../models/personajesModel');

// Obtener todos los personajes
const getAllPersonajes = async (req, res) => {
    try {
        const personajes = await Personaje.find();
        personajes.forEach(personaje => {
            
            if (!personaje.image.startsWith('/images/personajes')) {
                personaje.image = `/images/personajes/${personaje.image}`;
            }
        });
        res.json(personajes);
    } catch (error) {
        console.error('Error al obtener los personajes:', error);
        res.status(500).json({ error: 'Error al obtener los personajes' });
    }
};



// Obtener un personaje por ID
const getPersonajeById = async (req, res) => {
    try {
        const personaje = await Personaje.findById(req.params.id);
        if (!personaje) {
            return res.status(404).json({ error: 'Personaje no encontrado' });
        }
        res.json(personaje);
    } catch (error) {
        console.error('Error al obtener el personaje:', error);
        res.status(500).json({ error: 'Error al obtener el personaje' });
    }
};


// Crear un nuevo personaje
const createPersonaje = async (req, res) => {
    try {
        const { name, nation, weapon, element, description} = req.body;
       
        if (!name || !nation || !weapon || !element) {
            return res.status(400).json({ error: 'Todos los campos obligatorios deben completarse.' });
        }
        if (!req.file) {
            return res.status(400).json({ error: 'Debe subir una imagen.' });
        }

        const imagePath = `/images/personajes/${req.file.filename}`;
     
        const nuevoPersonaje = new Personaje({
            name,
            nation,
            weapon,
            element,
            description,
            image: imagePath,
            createdBy: req.user ? req.user._id : null, 
        });

        await nuevoPersonaje.save();
        res.status(201).json({ message: 'Personaje creado exitosamente', personaje: nuevoPersonaje });
    } catch (error) {
        console.error('Error al crear el personaje:', error);
        res.status(500).json({ error: 'Error al crear personaje', details: error });
    }
};


const updatePersonaje = async (req, res) => {
    try {
        const { name, nation, weapon, element, description } = req.body;
        const image = req.file ? `/images/personajes/${req.file.filename}` : undefined;

        const datosActualizados = { name, nation, weapon, element, description };

 
        if (image) datosActualizados.image = image;

        const personajeActualizado = await Personaje.findByIdAndUpdate(req.params.id, datosActualizados, { new: true });
        if (!personajeActualizado) {
            return res.status(404).json({ error: 'Personaje no encontrado' });
        }

        res.json({ message: 'Personaje actualizado exitosamente', personaje: personajeActualizado });
    } catch (error) {
        console.error('Error al actualizar el personaje:', error);
        res.status(500).json({ error: 'Error al actualizar el personaje', details: error });
    }
};

const deletePersonaje = async (req, res) => {
    try {
        const personajeEliminado = await Personaje.findByIdAndDelete(req.params.id);
        if (!personajeEliminado) {
            return res.status(404).json({ error: 'Personaje no encontrado' });
        }

        res.json({ message: 'Personaje eliminado exitosamente', personaje: personajeEliminado });
    } catch (error) {
        console.error('Error al eliminar el personaje:', error);
        res.status(500).json({ error: 'Error al eliminar el personaje', details: error });
    }
};

module.exports = {
    getAllPersonajes,
    getPersonajeById,
    createPersonaje,
    deletePersonaje,
    updatePersonaje
};
