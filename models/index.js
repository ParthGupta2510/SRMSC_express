const mongoose = require('mongoose')

const indexSchema = new mongoose.Schema({
        top_msg: {
            top_msg: {
                type: String,
            }
        },
        intro: {
            title: {
                type: String
            },
            para_content: {
                type: String
            },
            quote: {
                type: String
            }
        },
        group_updates: [{
            point: {
                type: String
            }
        }]
},
{ collection: 'index'})

module.exports = mongoose.model('index', indexSchema)