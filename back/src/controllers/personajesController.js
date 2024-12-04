const Personaje = require('../models/personajesModel');

// Obtener todos los personajes
const getAllPersonajes = async (req, res) => {
    try {
        const personajes = await Personaje.find();
        personajes.forEach(personaje => {
            // Asegúrate de que no haya duplicación
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
        res.json(personaje); // Enviar el personaje tal como está en la base de datos
    } catch (error) {
        console.error('Error al obtener el personaje:', error);
        res.status(500).json({ error: 'Error al obtener el personaje' });
    }
};


// Crear un nuevo personaje
const createPersonaje = async (req, res) => {
    try {
        const { name, nation, weapon, element, description} = req.body;

        // Validación de campos obligatorios
        if (!name || !nation || !weapon || !element) {
            return res.status(400).json({ error: 'Todos los campos obligatorios deben completarse.' });
        }

        // Verifica si hay una imagen subida
        if (!req.file) {
            return res.status(400).json({ error: 'Debe subir una imagen.' });
        }

        // Construir la ruta relativa de la imagen
        const imagePath = `/images/personajes/${req.file.filename}`;

        // Crear el nuevo personaje
        const nuevoPersonaje = new Personaje({
            name,
            nation,
            weapon,
            element,
            description,
            image: imagePath,
            createdBy: req.user ? req.user._id : null, // ID del usuario si existe
        });

        await nuevoPersonaje.save();
        res.status(201).json({ message: 'Personaje creado exitosamente', personaje: nuevoPersonaje });
    } catch (error) {
        console.error('Error al crear el personaje:', error);
        res.status(500).json({ error: 'Error al crear personaje', details: error });
    }
};

// Editar un personaje por ID
const updatePersonaje = async (req, res) => {
    try {
        const { name, nation, weapon, element, description } = req.body;
        const image = req.file ? `/images/personajes/${req.file.filename}` : undefined;

        const datosActualizados = { name, nation, weapon, element, description };

        // Solo agregar la imagen si se proporciona
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

// Eliminar un personaje por ID
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
