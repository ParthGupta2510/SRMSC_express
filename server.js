const MongoClient = require('mongodb').MongoClient;
const express = require('express')
const path = require('path')
const app = express()
const port = 5000

const uri = 'mongodb+srv://parth:abhi123@cluster0.6ddag.mongodb.net/test?retryWrites=true&w=majority';

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

    app.get('/members', (req, res) => {
        
        db.collection('group_members').find().toArray()
        .then( members_data => {
            res.render('members', { data : members_data} )
        })
        .catch(error => console.log(error))
    })

    app.get('/research', (req, res) => {

        db.collection('research').find().toArray()
        .then( research_data => {
            res.render('research', { data : research_data})
        })
        .catch(error => console.log(error))
    })

    app.get('/facilities', (req, res) => {

        db.collection('facilities').find().toArray()
        .then( facilities_data => {
            res.render('facilities', { data : facilities_data} )
        })
        .catch(error => console.log(error))
    })
    
    app.get('/NA', (req,res) => {
        res.send("NOT AVAILABLE")
    })

    app.get('/:file', (req, res) => {
        res.render(`${req.params.file}`)
    })

    app.listen(port, () => {
        console.log(`http://localhost:${port}`)
    })
  })
.catch(console.error)