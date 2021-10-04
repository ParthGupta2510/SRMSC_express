const express = require('express')
const router = express.Router()
const Members = require('../models/members')

router.get('/', async (req, res) => {
    try {
        const members = await Members.find({})
        res.render('members/members', {
            data: members[0]
        })
    } catch (err) {
        res.redirect('/')
    }
})

module.exports = router