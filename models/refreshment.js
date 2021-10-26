const mongoose = require('mongoose')

const refreshmentSchema = new mongoose.Schema({
    we_believe: [{
        point: {
            type: String
        }
    }],
    fun_imgs: [{
        img_id: {
            type: String
        },
        img_url: {
            type: String
        }
    }],
    videos: [{
        vid_id: {
            type: String
        },
        vid_url: {
            type: String
        },
        caption: {
            type: String
        }
    }]
},
{ collection: 'refreshment'})

module.exports = mongoose.model('refreshment', refreshmentSchema)