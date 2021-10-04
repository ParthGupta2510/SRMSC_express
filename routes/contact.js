const express = require('express')
const router = express.Router()
const Contact = require('../models/contact')

router.get('/', async (req, res) => {
    try {
        const contact = await Contact.find({})
        res.render('contact/contact', {
            data: contact[0]
        })
    } catch {
        res.redirect('/')
    }
})

module.exports = router