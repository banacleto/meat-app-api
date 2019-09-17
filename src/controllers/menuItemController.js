// External Dependancies
const boom = require('boom')

// Get Data Models
const MenuItem = require('../models/MenuItem')

// Get all menuItems
exports.menuItems = async () => {
    try {
        const menuItems = await MenuItem.find()
        return menuItems
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Get single menuItem by id
exports.menuItemById = async req => {
    try {
        const id = req.params.id
        const menuItems = await MenuItem.findById(id)
        return menuItems
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Get menuItems by restaurant id
exports.menuItemByRestaurantId = async req => {
    try {
        const id = req.params.id
        const menuItems = await MenuItem.find({ restaurantId: id })
        return menuItems
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Add a new menuItem
exports.addMenuItem = async req => {
    try {
        const menuItem = new MenuItem(req.body)
        return menuItem.save()
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Update an existing menuItem
exports.updateMenuItem = async req => {
    try {
        const id = req.params.id
        const menuItem = req.body
        const { ...updateData } = menuItem
        const update = await MenuItem.findByIdAndUpdate(id, updateData, { new: true })
        return update
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Delete a menuItem
exports.deleteMenuItem = async req => {
    try {
        const id = req.params.id
        const menuItem = MenuItem.findByIdAndRemove(id)
        return menuItem
    } catch (err) {
        throw boom.boomify(err)
    }
}