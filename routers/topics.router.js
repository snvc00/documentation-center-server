const router = require('express').Router();
const { response } = require('express');
let Topics = require('../models/topics.model');

router.route('').get((request, response) => {
    Topics.find().then(topic => response.json(topic)).catch(error => response.statusCode(400).json(`Error: ${error}`));
});

module.exports = router;