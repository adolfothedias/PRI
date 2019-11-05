const mongoose = require('mongoose')
var {ObjectId} = require('mongodb');

var filmeSchema = new mongoose.Schema({
    _id: ObjectId,
    title: String,
    year: String,
    cast: [String],
    genres: [String]
})


module.exports = mongoose.model('filme', filmeSchema)