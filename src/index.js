// Import Server
const fastify = require('./server.js')

// Register required external modules from fastify-blipp
fastify.register(require('fastify-blipp'))

// Import the routes
const routes = require('./routes')

// Import Swagger Options
const swagger = require('./config/swagger')

/**
 * Configuring CORS w/ Dynamic Origin
 * If you do not want to block REST tools or server-to-server requests, add a !origin check in the origin function.
 */
let whitelist = ['http://localhost:4200']

fastify.register(require('fastify-cors'), { 
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
})

// Declare our first route
fastify.get('/', async (request, reply) => {
  reply.send({msg: 'This is CORS-enabled for a whitelisted domain.'})
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
    await fastify.listen(3001, '0.0.0.0')
    fastify.blipp()
    fastify.swagger()
    fastify.log.info(`CORS-enabled web server listening on port ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

// Run the server!
start()
