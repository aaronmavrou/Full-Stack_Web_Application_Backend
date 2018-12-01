const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CollectionSchema = new Schema({
    name: {type: String, required: true, max: 100},
    theDescription: {type: String, required: true},
    theVisibility: {type: Boolean, required: true},
    ownerName: {type: String, required: true},
});

module.exports = mongoose.model('Collection', CollectionSchema);