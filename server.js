require('dotenv').config()
const express = require('express')
const app = express()

// Requiring All Routes
const indexRouter = require('./routes/index')
const membersRouter = require('./routes/members')
const researchRouter = require('./routes/research')
const facilitiesRouter = require('./routes/facilities')
const refreshmentRouter = require('./routes/refreshment')
const contactRouter = require('./routes/contact')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use(express.static('public'))

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

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
})