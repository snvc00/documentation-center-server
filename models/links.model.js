const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const linkSchema = new Schema({
    description: { type: String, required: true },
    url: { type: String, required: true },
    categories: { type: Array, required: true },
    status: { type: String, required: false },
    tooltip: { type: String, required: false }
}, { timestamps: true });

const Links = mongoose.model('Links', linkSchema, 'links');

module.exports = Links;