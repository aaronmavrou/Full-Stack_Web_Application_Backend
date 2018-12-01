const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CommentSchema = new Schema({
    name: {type: String, required: true, max: 100},
    theProduct: {type: String, required: true, max: 100},
    rating: {type: Number, required: true},
    comment: {type: String, required: false},
    visibility: {type: Boolean, required: true},
});

module.exports = mongoose.model('Comment', CommentSchema);
