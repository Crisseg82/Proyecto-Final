const mongoose = require('mongoose');

const personajeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    nation: { type: String, required: true },
    weapon: { type: String, required: true },
    element: { type: String, required: true },
    description: { type: String }, 
    image: { type: String }, 
    // createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true }, // Usuario que creó el personaje
}, { timestamps: true }); // Agrega automáticamente createdAt y updatedAt

module.exports = mongoose.model('Personaje', personajeSchema);
