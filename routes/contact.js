const express = require('express')
const router = express.Router()
const Contact = require('../models/contact')
const Contact_Form = require('../models/contact_form')

router.get('/', async (req, res) => {
    formData = {}
    try {
        const contact = await Contact.find({})
        res.render('contact/contact', {
            data: contact[0]
        })
    } catch {
        res.redirect('/')
    }
})

router.post('/', async (req, res) => {
    const contact = await Contact.find({})
    const contact_form = new Contact_Form({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    })
    try {
        const formData = await contact_form.save()
        res.render('contact/contact', {
            data: contact[0],
            status: 'success',
            formMsg: 'Form Submitted Successfully!'
        })
    } catch (err) {
        console.log(err)
        res.render('contact/contact', {
            data: contact[0],
            formData: contact_form,
            status: 'fail',
            formMsg: 'Error Submitting Form'
        })
    }
})

module.exports = router