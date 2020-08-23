const router = require('express').Router();
let Links = require('../models/links.model');

router.route('').get((request, response) => {
    Links.find().then(navlinks => response.json(navlinks)).catch(error => response.status(400).json(`Error: ${error}`));
});

module.exports = router;