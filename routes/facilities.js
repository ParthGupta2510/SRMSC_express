const express = require('express')
const router = express.Router()
const Facilities = require('../models/facilities')

router.get('/', async (req, res) => {
    try {
        const facilities = await Facilities.find({})
        res.render('facilities/facilities', {
            data: facilities[0]
        })
    } catch {
        res.redirect('/')
    }
})

module.exports = router