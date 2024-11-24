const mongoose = require('mongoose');

const nacionSchema = new mongoose.Schema({
    nation: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    image: { type: String }, // Para almacenar la URL de la imagen
});

module.exports = mongoose.model('Nacion', nacionSchema, 'naciones');
