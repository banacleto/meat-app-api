// External Dependancies
const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Types.ObjectId

const menuItemSchema = new mongoose.Schema({
    imagePath: String,
    name: String,
    description: String,
    price: Number,
    restaurantId: ObjectId
})

module.exports = mongoose.model('MenuItem', menuItemSchema)