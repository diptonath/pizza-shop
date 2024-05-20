const mongoose = require('mongoose');

var mongoURL = 'mongodb+srv://diptonath:diptonath1@cluster0.gnrgcne.mongodb.net/pizza-shop';

mongoose.connect(mongoURL);

var db = mongoose.connection;
db.on('connected', () => {
    console.log('Mongo DB connection successful');
});
db.on('error', (error) => {
    console.error('Mongo DB connection failed:', error);
});

module.exports = mongoose;