const express = require('express');
const jsonParser = require('body-parser').json();
const Alien = require( __dirname + '/../models/alien');

const handleDBError = require( __dirname + '/../lib/handle_db_error');

var alienRouter = module.exports = exports = express.Router();

alienRouter.get('/aliens' , (req , res) => {
	Alien.find({} , (err , data) => { 
		if (err) {
			return handleDBError(err , res)
		}

		res.status(200).json(data);
		
	});
});

alienRouter.post('/aliens' , jsonParser, (req , res) => {

	var newAlien = new Alien(req.body);
	newAlien.save( (err , data) => {
		if (err) {
			return handleDBError(err , res);
		}

		res.status(200).json(data);

	});
});

alienRouter.put('/aliens/:id' , jsonParser , (req , res) => {

	var alienData = req.body;
	delete alienData._id;
	Alien.update({._id: req.params.id} , alienData , (err) => {
		if(err) {
			return handleDBError(err ,res);
		}

		res.status(200).json( {msg: 'status'});

	});
});

alienRouter.delete('/aliens/:id' , () => {
	Alien.remove({_id: req.params.id} , (err) => {
		if (err) {
			return handleDBError(err , res);
		}

		res.status(200).json({msg: 'Alien ' + req.params.id + 'removed!'});

	});
});