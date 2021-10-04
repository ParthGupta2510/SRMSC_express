const mongoose = require('mongoose')

const facilitiesSchema = new mongoose.Schema({
    lab: [{
        facility_id: {
            type: String
        },
        name: {
            type: String
        },
        img_url: {
            type: String
        },
        specifications: [{
            heading: {
                type: String
            },
            detail: {
                type: String
            }        
        }]
    }],
    departmental: [{
        facility_id: {
            type: String
        },
        name: {
            type: String
        },
        img_url: {
            type: String
        },
        specifications: [{
            heading: {
                type: String
            },
            detail: {
                type: String
            }        
        }]
    }],
    softwares: [{
        software_id: {
            type: String
        },
        name: {
            type: String
        }
    }]
},
{ collection: 'facilities'})

module.exports = mongoose.model('facilities', facilitiesSchema)