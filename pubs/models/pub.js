const mongoose = require('mongoose')
var {ObjectId} = require('mongodb');

var pubSchema = new mongoose.Schema({
    _id: ObjectId,
    address: String,
    authors: Array,
    booktitle: String,
    doi: String,
    id: String,
    month: String,
    title: String,
    type: String,
    year: String
})


module.exports = mongoose.model('pub', pubSchema)

