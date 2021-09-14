const dotenv = require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;
const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 5000

const uri = process.env.MONGO_URI;

MongoClient.connect(uri, { useUnifiedTopology: true })
.then(client => {
    console.log('Connected to Database')

    const db = client.db('SRMSC')

    app.use(express.static(path.join(__dirname, "public")))

    app.set('view engine', 'ejs')

    app.get("/", (req, res) => {
        
        db.collection('index').find().toArray()

        .then( index_data => {
            res.render('index', { data : index_data})
        })
        .catch(error => console.error(error))
    })
    
    app.get('/NA', (req,res) => {
        res.send("NOT AVAILABLE")
    })

    app.get('/members', (req, res) => {
        
        db.collection('members').find().toArray()
        .then( data => {
            res.render('members', { data : data})
        })
    })

    app.get('/research', (req, res) => {
        
        db.collection('research').find().toArray()
        .then( data => {
            res.render('research', { data : data})
        })
    })
    app.get('/facilities', (req, res) => {
        
        db.collection('facilities').find().toArray()
        .then( data => {
            res.render('facilities', { data : data})
        })
    })
    app.get('/refreshment', (req, res) => {
        
        db.collection('refreshment').find().toArray()
        .then( data => {
            res.render('refreshment', { data : data})
        })
    })
    app.get('/contact', (req, res) => {
        
        db.collection('contact').find().toArray()
        .then( data => {
            res.render('contact', { data : data})
        })
    })

    app.listen(port, () => {
        console.log(`http://localhost:${port}`)
    })
  })
.catch(console.error)