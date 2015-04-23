// grab the mongoose module
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: String,
    completed: Boolean,
    note: String,
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);