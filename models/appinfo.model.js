const mongoose = require('mongoose');

const appInfoSchema = new mongoose.Schema({
    application: { type: Object, required: true }
});

const AppInfo = mongoose.model('AppInfo', appInfoSchema, 'app_info');

module.exports = AppInfo;