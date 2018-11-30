const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CollectionSchema = new Schema({
    name: {type: String, required: true, max: 100},
    rating: {type: Number, required: true},
    comment: {type: String, required: false},
});

module.exports = mongoose.model('Collection', CollectionSchema);