const mongoose = require('mongoose');

const reaccionSchema = new mongoose.Schema({
    elements: { type: [String], required: true }, 
    description: { type: String, required: true } 
});

module.exports = mongoose.model('Reaccion', reaccionSchema, 'reacciones');
