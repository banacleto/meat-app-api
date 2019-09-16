// External Dependancies
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const menuItemSchema = new mongoose.Schema({
    id: String,
    imagePath: String,
    name: String,
    description: String,
    price: Number,
    restaurant_id: ObjectId
})

module.exports = mongoose.model('MenuItem', menuItemSchema)