/**
 * 1. We require boom to handle our errors: boom.boomify(err).
 * 
 * 2. We export each of our functions that we will use in our route.
 * 
 * 3. Each function is an async function which can contain an await expression that pauses the execution of the async function and waits for 
 * the passed promise’s resolution, and then resumes the async function's execution and returns the resolved value. 
 * Learn more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 * 
 * 4. Each function is wrapped in a try / catch statement.
 * Learn more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
 * 
 * 5. Each function takes two parameters: req (the request) and reply (the reply). In our tutorial, we only make use of the request parameter. 
 * We will use it to access the request body and the request parameters, allowing us to process the data.
 * Learn more here: https://www.fastify.io/docs/latest/Reply/
 * 
 * 6. Take note of the code on line 31: const restaurant = new Restaurant({ ...req.body })
 * Learn more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * 
 * 7. Take note of the code on line 42: const { …updateData } = restaurant
 * This makes use of the JavaScript destructuring, in conjunction with the spread operator.
 * Learn more here: https://codeburst.io/use-es2015-object-rest-operator-to-omit-properties-38a3ecffe90
 * 
 * Other than that, we make use of some standard Mongoose features to manipulate our database.
 */

// External Dependancies
const boom = require('boom')

// Get Data Models
const Restaurant = require('../models/Restaurant')

// Get all restaurants
exports.restaurants = async (req, reply) => {
    try {
        const restaurants = await Restaurant.find()
        return restaurants
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Get single restaurant by id
exports.restaurantById = async (req, reply) => {
    try {
        const id = req.params.id
        const restaurant = await Restaurant.findById(id)
        return restaurant
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Add a new restaurant
exports.addRestaurant = async (req, reply) => {
    try {
        const restaurant = new Restaurant(req.body)
        return restaurant.save()
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Update an existing restaurant
exports.updateRestaurant = async (req, reply) => {
    try {
        const id = req.params.id
        const restaurant = req.body
        const { ...updateData } = restaurant
        const update = await Restaurant.findByIdAndUpdate(id, updateData, { new: true })
        return update
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Delete a restaurant
exports.deleteRestaurant = async (req, reply) => {
    try {
        const id = req.params.id
        const restaurant = Restaurant.findByIdAndRemove(id)
        return restaurant
    } catch (err) {
        throw boom.boomify(err)
    }
}