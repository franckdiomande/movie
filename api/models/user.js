const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const db = require('../libs/db')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: String, createIndexes: true, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
})

userSchema.pre('save', function(){
    this.password = bcrypt.hashSync(this.password, 8);
})

module.exports = db.model('users', userSchema);