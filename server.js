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

    app.get('/:file', (req, res) => {
        
        db.collection(`${req.params.file}`).find().toArray()
        .then( data => {
            res.render(`${req.params.file}`, { data : data})
        })
    })

    app.listen(port, () => {
        console.log(`http://localhost:${port}`)
    })
  })
.catch(console.error)