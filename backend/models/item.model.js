const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ItemSchema = new Schema({
    name: {type: String, required: true, max: 100},
    prodName: { type: String, required: true},
    prodQuantity: { type:Number, required: true},
});

module.exports = mongoose.model('Item', ItemSchema);
