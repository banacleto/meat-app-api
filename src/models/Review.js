// External Dependancies
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const reviewSchema = new mongoose.Schema({
    id: String,
    name: String,
    date: String,
    rating: Number,
    comments: String,
    restaurant_id: ObjectId
})

module.exports = mongoose.model('Review', reviewSchema)