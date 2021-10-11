const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')

const AdminCredentials = require('../models/adminCredentials')
const ContactFormData = require('../models/contact_form')

const initializePassport = require('../passport-config')
initializePassport(passport, ( async username => {
    return await AdminCredentials.findOne({ username: username})
}), (
    async (id) => {
        return await AdminCredentials.findById(id)
}))

router.use(flash())
router.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
router.use(passport.initialize())
router.use(passport.session())
router.use(methodOverride('_method'))

router.get('/', checkAuthenticated,async (req, res) => {
    const contactFormData = await ContactFormData.find({})
    res.render('admin/admin', {
        data: contactFormData
    })
})


router.get('/login', checkNotAuthenticated, (req, res) => {
    res.render('admin/login')
})

router.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/admin',
    failureRedirect: '/admin/login',
    failureFlash: true
}))

router.get('/register', checkNotAuthenticated, (req, res) => {
    res.render('admin/register')
})

router.post('/register', checkNotAuthenticated, async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const adminCredentials = await new AdminCredentials({
            username: req.body.username,
            password: hashedPassword
        })
        const newAdmin = await adminCredentials.save()
        res.redirect('/admin/login')
    } catch {
        res.render('admin/register', {
            errorMsg: "Error! Try Again!"
        })
    }
})

router.delete('/logout', (req, res) => {
    try {
        req.logOut()
        res.redirect('/admin/login')
    } catch (err) {
        console.log(err)
    }
})

router.delete('/:id', checkAuthenticated, async (req, res) => {
    let entry
    try {
        entry = await ContactFormData.findById(req.params.id)
        await entry.remove()
        res.redirect('/admin')
    } catch {
        res.redirect('/admin')
    }
})

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    
    res.redirect('/admin/login')
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/admin')
    }
    next()
}

module.exports = router