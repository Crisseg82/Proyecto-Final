const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const {
    getAllPersonajes,
    getPersonajeById,
    createPersonaje,
    updatePersonaje,
    deletePersonaje,
} = require('../controllers/personajesController');

// Configuración de multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = path.resolve(__dirname, '../public/images/personajes');
        cb(null, dir); // Asegura que las imágenes se guarden en la carpeta correcta
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); // Genera nombres únicos para los archivos
    },
});

// Validación del formato de archivo
const fileFilter = (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
        cb(null, true);
    } else {
        cb(new Error('Formato de archivo no permitido. Usa .jpg, .jpeg o .png'));
    }
};

const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Tamaño máximo: 5 MB
    fileFilter,
});

// Rutas
router.get('/', getAllPersonajes); // Obtener todos los personajes
router.get('/:id', getPersonajeById); // Obtener un personaje por ID
router.post('/', upload.single('image'), createPersonaje); // Crear un nuevo personaje
router.put('/:id', upload.single('image'), updatePersonaje); // Actualizar un personaje
router.delete('/:id', deletePersonaje); // Eliminar un personaje

module.exports = router;
