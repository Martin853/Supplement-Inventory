// Express

const express = require('express')

// Router

const router = express.Router()

// Get All Products

router.get('/', (req, res) => {
    res.json({msg: 'GET All Products'})
})

// Get All Protein Products

router.get('/protein', (req, res) => {
    res.json({msg: 'GET All Protein Products'})
})

// Get All Products

router.get('/creatine', (req, res) => {
    res.json({msg: 'GET All Creatine Products'})
})

// Get All Pre-Workout Products

router.get('/pre-workout', (req, res) => {
    res.json({msg: 'GET All Pre-Workout Products'})
})

// Get A Single Product

router.get('/:id', (req, res) => {
    res.json({msg: 'Get A Single Product'})
})

// Post A New Workout

router.post('/', (req, res) => {
    res.json({msg: 'Post A New Workout'})
})

// Delete A New Workout

router.delete('/', (req, res) => {
    res.json({msg: 'Delete A New Workout'})
})

// Patch A New Workout

router.patch('/', (req, res) => {
    res.json({msg: 'Patch A New Workout'})
})

module.exports = router