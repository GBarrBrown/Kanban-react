const express = require('express')
const router = express.Router()

const { getBoards } = require('../db/boards')

// GET /api/v1/boards
router.get('/', (req, res) => {
    getBoards()
    .then((boards) => {
        res.json(boards)
    })
    .catch((err) => {
        console.log(err)
        res.status(500).json({error: 'Something went wrong'})
    })
})

// POST /api/v1/boards
router.post('/', (req, res) => {

})

module.exports = router