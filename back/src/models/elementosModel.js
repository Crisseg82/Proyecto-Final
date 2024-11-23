const mongoose = require('mongoose');

const elementoSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    image: { type: String },
    reactions: [
        {
            elements: [String], // Los elementos involucrados en la reacción
            description: { type: String }
        }
    ]
});

module.exports = mongoose.model('Elemento', elementoSchema);
