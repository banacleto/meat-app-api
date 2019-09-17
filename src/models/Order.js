// External Dependancies
const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Types.ObjectId
const OrderItemSchema = new mongoose.Schema({ quantity: Number, menuId: ObjectId });

const orderSchema = new mongoose.Schema({
    address: String,
    number: Number,
    optionalAddress: String,
    paymentOption: String,
    orderItems: [OrderItemSchema]
})

module.exports = mongoose.model('Order', orderSchema)