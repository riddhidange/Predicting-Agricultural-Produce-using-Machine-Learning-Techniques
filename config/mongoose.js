const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/agri_db');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error'));

db.once('open', function(){
    console.log('Succesfully connected to database');
});

module.exports = db;