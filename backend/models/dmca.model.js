const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DmcaSchema = new Schema({
    type: {type: String, required: true, max: 100},
    info: {type: String, required: true},
});

module.exports = mongoose.model('Dmca', DmcaSchema);