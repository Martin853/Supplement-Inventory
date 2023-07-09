// Enviroment variables

require('dotenv').config()

// Express

const express = require('express')

// Products Router 

const productsRouter = require('./routes/products')

// App

const app = express()

// Middleware

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes

app.use('/api/products', productsRouter)

// Initialize the app to listen to port

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))