// Require the fs module to provide an API for interacting with the file system
const fs = require('fs')

// Require the path module to provide utilities for working with file and directory paths
const path = require('path')

// Require external modules from mongoose
const mongoose = require('mongoose')

// Require the fastfy framework and instantiate it
const fastify = require('fastify')({
    logger: true,
    http2: true,
    https: {
        key: fs.readFileSync(path.join(__dirname, '..', 'keys', 'key.pem')),
        cert: fs.readFileSync(path.join(__dirname, '..', 'keys', 'cert.pem'))
    }
})

// Connect to our MongoDB database. The database is called meatappdb
mongoose.connect('mongodb://localhost/meatappdb')
    .then(() => console.log('MongoDB connected…'))
    .catch(err => console.log(err))

module.exports = fastify