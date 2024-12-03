const mongoose = require('mongoose');

const nacionSchema = new mongoose.Schema({
    nation: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    image: { type: String },
});

module.exports = mongoose.model('Nacion', nacionSchema, 'naciones');
