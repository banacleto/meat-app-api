/**
 * 1. Here, we require our controller and assign each of the functions that we created in our controller to our routes.
 * 2. As you can see, each route consists of a method, a URL, and a handler, instructing the app which function to use when one of the routes is accessed.
 * 3. The :id following some of the routes is a common way of passing parameters to the routes, and this will allow us to access the id as follows:
 * http://127.0.0.1:3000/api/restaurants/5bfe30b46fe410e1cfff2323
 */

// Import our Controllers
const restaurantController = require('../controllers/restaurantController')

const routes = [
    {
        method: 'GET',
        url: '/api/restaurants',
        handler: restaurantController.restaurants
    },
    {
        method: 'GET',
        url: '/api/restaurants/:id',
        handler: restaurantController.restaurantById
    },
    {
        method: 'POST',
        url: '/api/restaurants',
        handler: restaurantController.addRestaurant
    },
    {
        method: 'PUT',
        url: '/api/restaurants/:id',
        handler: restaurantController.updateRestaurant
    },
    {
        method: 'DELETE',
        url: '/api/restaurants/:id',
        handler: restaurantController.deleteRestaurant
    }
]

module.exports = routes