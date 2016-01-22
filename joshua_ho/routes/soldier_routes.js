const express = require('express');
const jsonParser = require('body-parser').json();
const Soldier = require( __dirname + '/../models/XCOM_soldier');

const handleDBError = require( __dirname + '/../lib/handle_db_error');

var soldierRouter = module.exports = exports = express.Router();

soldierRouter.get('/soldiers' , (req, res) => {
	Soldier.find({} , (err , data) => {
		if (err) {
		 return handleDBError(err , res)
		}

		res.status(200).json(data);
	});
});

  									//path			 //middleware  //basics
soldierRouter.post('/soldiers' , jsonParser , (req , res) => {
	var newRecruit = new Soldier(req.body);
	newRecruit.save( (err, data) => {
		if (err) {
			return handleDBError(err , res)
		}

		res.status(200).json(data);
	});
});

soldierRouter.put('/soldiers/:id' , jsonParser , (req , res) => {
	var soldierData = req.body;
	
	//The alternative to this is to access the requested object and
	//replace the data with a $ud (???) method. (Check Mongoose)
	delete ._id;
									//Object to update info with
	Soldier.update( {_id: req.params.id}, soldierData , (err) => {
		if (err) {
			return handleDBError(err , res);
		}
		res.status(200).json( {msg: 'Successful update!'} );
	});
});

soldierRouter.delete('/soldiers/:id' , (req , res) => {
	Soldier.remove({_id: req.params.id} , (err) => {
		if (err) {
			return handleDBError(err, res);
		}
		res.status(200).json({msg: 'success'});
	});
});