const router = require('express').Router();
let Colors = require('../models/colors.model');

router.route('').get((request, response) => {
    Colors.find().then(colors => response.json(colors)).catch(error => response.status(400).json(`Error: ${error}`));
});

module.exports = router;