const mongoose = require('mongoose')

const adminCredentialsSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},
{collection: 'admin_credentials'})

module.exports = mongoose.model('admin_credentials', adminCredentialsSchema)