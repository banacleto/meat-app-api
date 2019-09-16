// Require the fastfy framework and instantiate it
const fastify = require('fastify')({
  logger: true
})

// Require external modules from mongoose
const mongoose = require('mongoose')

// Import the routes
const routes = require('./routes')

// Import Swagger Options
const swagger = require('./config/swagger')

// Connect to our MongoDB database. The database is called meatappdb
mongoose.connect('mongodb://localhost/meatappdb')
  .then(() => console.log('MongoDB connected…'))
  .catch(err => console.log(err))

// Declare our first route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)

// Loop over our routes array to initialize them with Fastify
routes.forEach((route, index) => {
  fastify.route(route)
})

// Initialize the server on port 3000
const start = async () => {
  try {
    await fastify.listen(3000, '0.0.0.0')
    fastify.swagger()
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

// Run the server!
start()
