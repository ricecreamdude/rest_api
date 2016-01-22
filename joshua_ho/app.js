const express = require('express');
const mongoose = require('mongoose');

const app = module.exports = exports = express();

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/xcom_app');

//Routes
const soldierRouter = require( __dirname + '/routes/soldier_routes');
const alienRouter = require( __dirname + '/routes/alien_routes');

var PORT = process.env.PORT || 3000;


//Don't know if this works
app.use('/api' , [soldierRouter , alienRouter]);

app.listen(PORT , () => {
	console.log('Server running on port ' + PORT);
});