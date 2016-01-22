const express = require('express');
const mongoose = require('mongoose');

const app = modules.exports = exports = express();

mongoose.connects(process.env.MONGOLAB_URI || 'mongodb://localhost/xcom_app');

//Routes (not yet built)
const soldierRouter = require( __dirname + '/routes/soldier_routes');
const alienRouter = require( __dirname + '/routes/alien_routes');

var PORT = process.env.PORT || 3000;


//Don't know if this works
app.use('/api' , [soldierRouter] , alienRouter);

app.listen(PORT , () => {
	console.log('Server running on port ' + PORT);
});