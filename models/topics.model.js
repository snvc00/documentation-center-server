const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
    title: { type: String, required: true },
    icon: { type: String, required: true },
    items: { type:Array, required: true }
});

const Topics = mongoose.model('Topics', topicSchema, 'topics');

module.exports = Topics;