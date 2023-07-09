// Enviroment variables

require('dotenv').config()

// Express

const express = require('express')

// App

const app = express()

// Initialize the app to listen to port

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))