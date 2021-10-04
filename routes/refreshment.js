const express = require('express')
const router = express.Router()
const Refreshment = require('../models/refreshment')

router.get('/', async (req, res) => {
    try {
        const refreshment = await Refreshment.find({})
        res.render('refreshment/refreshment', {
            data: refreshment[0]
        })
    } catch {
        res.redirect('/')
    }
})

module.exports = router