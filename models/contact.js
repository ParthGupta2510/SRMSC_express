const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    details: {
        title: {
            type: String
        },
        para_content: {
            type: String
        },
        email: {
            type: String
        },
        tel: {
            type: String
        },
        fax: {
            type: String
        }
    }
},
{ collection: 'contact'})

module.exports = mongoose.model('contact', contactSchema)