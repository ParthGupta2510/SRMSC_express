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
    db.collection('index').find().toArray()
        
        .then( index_data => {
            console.log(index_data[0]['top_msg']['top_msg'])
        })
        .catch(error => console.error(error))
    })
.catch(console.error)