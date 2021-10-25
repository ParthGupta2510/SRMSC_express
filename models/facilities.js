const mongoose = require('mongoose')

const facilitiesSchema = new mongoose.Schema({
    top_msg: {
        top_msg: {
            type: String
        }
    },
    facilities: [
        {
            index : {
                type: String,
                required: true
            },
            type : {
                type: String,
                required: true
            },
            facilities: [
                {
                    facility_id: {
                        type: String,
                        required: true
                    },
                    name: {
                        type: String,
                        required: true
                    },
                    img_url: {
                        type: String,
                        required: true
                    },
                    specifications: [
                        {
                            heading: {
                                type: String,
                                required: true
                            },
                            detail: {
                                type: String,
                                required: true
                            }
                        }
                    ]
                }
            ]
        }
    ],
    softwares: [
        {
            software_id: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            }
        }
    ]
},
{ collection: 'facilities'})

module.exports = mongoose.model('facilities', facilitiesSchema)