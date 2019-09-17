// External Dependancies
const boom = require('boom')

// Get Data Models
const Review = require('../models/Review')

// Get all reviews
exports.reviews = async () => {
    try {
        const reviews = await Review.find()
        return reviews
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Get single review by id
exports.reviewById = async req => {
    try {
        const id = req.params.id
        const review = await Review.findById(id)
        return review
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Get reviews by restaurant id
exports.reviewsByRestaurantId = async req => {
    try {
        const id = req.params.id
        const reviews = await Review.find({ restaurantId: id })
        return reviews
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Add a new review
exports.addReview = async req => {
    try {
        const review = new Review(req.body)
        return review.save()
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Update an existing review
exports.updateReview = async req => {
    try {
        const id = req.params.id
        const review = req.body
        const { ...updateData } = review
        const update = await Review.findByIdAndUpdate(id, updateData, { new: true })
        return update
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Delete a review
exports.deleteReview = async req => {
    try {
        const id = req.params.id
        const review = Review.findByIdAndRemove(id)
        return review
    } catch (err) {
        throw boom.boomify(err)
    }
}