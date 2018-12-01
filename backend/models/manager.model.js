const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ManagerSchema = new Schema({
    email: {type: String, required: true, max: 100},
});

module.exports = mongoose.model('Manager', ManagerSchema);
