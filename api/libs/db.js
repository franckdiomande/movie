require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect('mongodb://' + process.env.MONGO_HOST + '/movie', {
    user: process.env.MONGODB_USER,
    pass: process.env.MONGODB_PASS,
    dbName: process.env.MONGODB_DATABASE,
    useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('we\'re connected!');
});

module.exports = db;