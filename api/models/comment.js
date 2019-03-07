const mongoose = require('mongoose');
const db = require('../libs/db')

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    author: {type: String},
    rating: {type: Number},
    content: {type: String},
})

module.exports = db.model('comments', commentSchema);