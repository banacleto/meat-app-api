// External Dependancies
const boom = require('boom')

// Get Data Models
const Order = require('../models/Order')

// Get all orders
exports.orders = async () => {
    try {
        const orders = await Order.find()
        return orders
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Get single order by id
exports.orderById = async req => {
    try {
        const id = req.params.id
        const order = await Order.findById(id)
        return order
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Add a new order
exports.addOrder = async req => {
    try {
        const order = new Order(req.body)
        return order.save()
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Delete a order
exports.deleteOrder = async req => {
    try {
        const id = req.params.id
        const order = Order.findByIdAndRemove(id)
        return order
    } catch (err) {
        throw boom.boomify(err)
    }
}