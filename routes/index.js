const express = require('express')
const router = express.Router()
const Index = require('../models/index')

router.get('/', async (req, res) => {
    try {
        const index = await Index.find({})
        res.render('index', {
            data: index[0]
        })
    } catch {
        res.redirect('/')
    }
})

module.exports = router