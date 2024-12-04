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
        const dir = path.join(__dirname, '../../public/images/personajes');
        console.log('Ruta resuelta para guardar archivos:', dir); // Log para verificar
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
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
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter,
});

// Rutas
router.get('/', getAllPersonajes);
router.get('/:id', getPersonajeById);
router.post('/', upload.single('image'), createPersonaje); 
router.put('/:id', upload.single('image'), updatePersonaje); 
router.delete('/:id', deletePersonaje); 

module.exports = router;
