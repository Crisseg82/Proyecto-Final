const mongoose = require('mongoose');

const elementoSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    image: { type: String },
    reactions: [
        {
            elements: [String],
            description: { type: String }
        }
    ]
});

module.exports = mongoose.model('Elemento', elementoSchema);
