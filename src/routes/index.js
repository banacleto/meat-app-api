/**
 * 1. Here, we require our controller and assign each of the functions that we created in our controller to our routes.
 * 2. As you can see, each route consists of a method, a URL, and a handler, instructing the app which function to use when one of the routes is accessed.
 * 3. The :id following some of the routes is a common way of passing parameters to the routes, and this will allow us to access the id as follows:
 * http://127.0.0.1:3000/api/restaurants/5bfe30b46fe410e1cfff2323
 */

// Import our Controllers
const restaurantController = require('../controllers/restaurantController')
const menuItemController = require('../controllers/menuItemController')
const reviewController = require('../controllers/reviewController')
const orderController = require('../controllers/orderController')

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
    },
    {
        method: 'GET',
        url: '/api/menu',
        handler: menuItemController.menuItems
    },
    {
        method: 'GET',
        url: '/api/menu/:id',
        handler: menuItemController.menuItemById
    },
    {
        method: 'GET',
        url: '/api/restaurants/:id/menu',
        handler: menuItemController.menuItemByRestaurantId
    },
    {
        method: 'POST',
        url: '/api/menu',
        handler: menuItemController.addMenuItem
    },
    {
        method: 'PUT',
        url: '/api/menu/:id',
        handler: menuItemController.updateMenuItem
    },
    {
        method: 'DELETE',
        url: '/api/menu/:id',
        handler: menuItemController.deleteMenuItem
    },
    {
        method: 'GET',
        url: '/api/reviews',
        handler: reviewController.reviews
    },
    {
        method: 'GET',
        url: '/api/reviews/:id',
        handler: reviewController.reviewById
    },
    {
        method: 'GET',
        url: '/api/restaurants/:id/reviews',
        handler: reviewController.reviewsByRestaurantId
    },
    {
        method: 'POST',
        url: '/api/reviews',
        handler: reviewController.addReview
    },
    {
        method: 'PUT',
        url: '/api/reviews/:id',
        handler: reviewController.updateReview
    },
    {
        method: 'DELETE',
        url: '/api/reviews/:id',
        handler: reviewController.deleteReview
    },
    {
        method: 'GET', 
        url: '/api/orders',
        handler: orderController.orders
    },
    {
        method: 'GET',
        url: '/api/orders/:id',
        handler: orderController.orderById
    },
    {
        method: 'POST',
        url: '/api/orders',
        handler: orderController.addOrder
    },
    {
        method: 'DELETE',
        url: '/api/orders/:id',
        handler: orderController.deleteOrder
    }
]

module.exports = routes