const mongoose = require('mongoose');

var soldierSchema = new mongoose.Schema({
	name: String,
	class: {type: String, default: 'Squadie'},
	rank: {type: String, default: 'Rookie'}, 
	kills: {type: Number, default: 0}
	// commanding officer: String
});

module.exports = exports = mongoose.model('XCOM Soldier' , soldierSchema);