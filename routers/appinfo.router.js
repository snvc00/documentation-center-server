const router = require('express').Router();
let AppInfo = require('../models/appinfo.model');

router.route('').get((request, response) => {
    AppInfo.findOne().then(appinformation => response.json(appinformation)).catch(error => response.status(400).json(`Error: ${error}`));
});

module.exports = router;