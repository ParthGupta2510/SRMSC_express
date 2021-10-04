const express = require('express')
const router = express.Router()
const Research = require('../models/research')

router.get('/', async (req, res) => {
    try {
        const research = await Research.find({})
        res.render('research/research', {
            data: research[0]
        })
    } catch (err) {
        res.redirect('/')
    }
})

module.exports = router