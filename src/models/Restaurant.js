// External Dependancies
const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
    id: String,
    name: String,
    category: String,
    deliveryEstimate: String,
    rating: Number,
    imagePath: String,
    about: String,
    hours: String
})

module.exports = mongoose.model('Restaurant', restaurantSchema)