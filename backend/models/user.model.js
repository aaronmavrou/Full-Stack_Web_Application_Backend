const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    email: {type: String, required: true, max: 100},
    isActivated: {type: Boolean, required: true}
});

module.exports = mongoose.model('User', UserSchema);