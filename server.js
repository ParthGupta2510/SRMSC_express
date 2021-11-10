require('dotenv').config()
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const methodOverride = require('method-override')
const path = require('path')

// Requiring All Routes
const indexRouter = require('./routes/index')
const membersRouter = require('./routes/members')
const researchRouter = require('./routes/research')
const facilitiesRouter = require('./routes/facilities')
const refreshmentRouter = require('./routes/refreshment')
const contactRouter = require('./routes/contact')
const adminRouter = require('./routes/admin')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(express.urlencoded({
    limit: '10mb',
    extended: false
}))

// for development purpose ONLY
if (process.env.NODE_ENV !== 'production') {
    const livereload = require('livereload')
    const liveReloadServer = livereload.createServer()
    liveReloadServer.watch(path.join(__dirname, 'public'))
    const connectLivereload = require('connect-livereload')
    app.use(connectLivereload())
    liveReloadServer.server.once('connection', () => {
        setTimeout( () => {
            liveReloadServer.refresh('/')
        }, 100)
    })
}

// Database Connection
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => {
    console.log('Connected to Database')
})

// Using Routes
app.use('/', indexRouter)
app.use('/members', membersRouter)
app.use('/research', researchRouter)
app.use('/facilities', facilitiesRouter)
app.use('/refreshment', refreshmentRouter)
app.use('/contact', contactRouter)
app.use('/admin', adminRouter)

// route for Group Member CV which are not available
app.get('/NA', (req, res) => {
    res.send("NOT AVAILABLE")
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
})