const mongoose = require('mongoose');
const db = require('../libs/db')
const Schema = mongoose.Schema;
const slugify = require('slug');

const movieSchema = new Schema({
    name: {type: String, required: true},
    // Checl slug not exist in db
    slug: {type: String, default: function(){
        if(this.name){
            return slugify(this.name, {lower: true});
        } else {
            return null;
        }
        
    }},
    summary: {type: String, required: true},
    rated: {type: String, required: true},
    release: {type: Date, required: true},
    duration: {type: Number, required: true},
    genre: {type: [String], required: true},
    directors: {type: [String], required: true},
    writers: {type: [String], required: true},
    authors: {type: [String], required: true},
    poster: {type: String, required: true},
    type: {type: String, required: true},
    rating: {type: [Object]}
})

module.exports = db.model('movies', movieSchema);