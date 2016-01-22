const mongoose = require('mongoose');

var alienSchema = new mongoose.Schema({
	class: {type: String, default: 'Sectoid'},
	kills: {type: Number, default: 0}
});

module.exports = exports = mongoose.model('Alien' , alienSchema);