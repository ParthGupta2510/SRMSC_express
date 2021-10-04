const mongoose = require('mongoose')

const membersSchema = new mongoose.Schema({
        shibayan_sir: {
            name: {
                type: String
            },
            role: {
                type: String
            },
            para_content: {
                type: String
            },
            links: {
                home_website: {
                    type: String
                },
                researcher_id: {
                    type: String
                },
                google_scholar: {
                    type: String
                },
                email: {
                    type: String
                }
            },
            img_url: {
                type: String
            }
        },
        team_members: [{
            mem_id: {
                type: String
            },
            name: {
                type: String
            },
            role: {
                type: String
            },
            img_url: {
                type: String
            },
            cv_link: {
                type: String
            }
        }],
        team_interns: [{
            intern_id: {
                type: String
            },
            details: {
                type: String
            }
        }],
        alumni: [{
            alumni_id: {
                type: String
            },
            name: {
                type: String
            },
            details: [{
                point: {
                    type: String
                }    
            }],
            img_url: {
                type: String
            },
            email: {
                type: String
            }
        }],
        alumni_interns: [{
            intern_id: {
                type: String
            },
            details: {
                type: String
            }
        }]
},
{ collection: 'members'})

module.exports = mongoose.model('members', membersSchema)