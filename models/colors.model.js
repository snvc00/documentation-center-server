const mongoose = require('mongoose');

const colorsSchema = new mongoose.Schema({
    color: { type: String, required: true },
    primary: { type: String, required: true },
    secondary: { type: String, required: true }
}, { timestamps: true });

const Colors = mongoose.model('Colors', colorsSchema, 'colors');

module.exports = Colors;