const mongoose = require('mongoose')

const contactFormSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
    }
},
{collection: 'contact_form_data'})

module.exports = mongoose.model('contact_form', contactFormSchema)