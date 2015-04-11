// grab the mongoose module
var mongoose = require('mongoose');

var UsuarioSchema = new mongoose.Schema({
    name: String,
    completed: Boolean,
    note: String,
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);