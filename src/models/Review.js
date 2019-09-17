// External Dependancies
const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Types.ObjectId

const reviewSchema = new mongoose.Schema({
    name: String,
    date: String,
    rating: Number,
    comments: String,
    restaurantId: ObjectId
})

module.exports = mongoose.model('Review', reviewSchema)