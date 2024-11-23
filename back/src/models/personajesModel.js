const mongoose = require('mongoose');

const personajeSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    nation: { type: String, required: true },
    weapon: { type: String, required: true },
    element: { type: String, required: true },
    description: { type: String },
    image: { type: String } // Para almacenar la URL de la imagen
});

module.exports = mongoose.model('Personaje', personajeSchema);
