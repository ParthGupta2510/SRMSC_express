const mongoose = require('mongoose')

const researchSchema = new mongoose.Schema({
        intro: {
            title: {
                type: String
            },
            para_content: {
                type: String
            },
            research_interests: [{
                interest: {
                    type: String
                }
            }],
            research_insights: [{
                img_url: {
                    type: String
                },
                img_caption:{
                    type: String
                }
            }]
        },
        ongoing_work: [{
            ongoing_id: {
                type: String
            },
            title: {
                type: String
            },
            members_involved: {
                type: String
            },
            para_content: {
                type: String
            },
            img_url: [{
                url: {
                    type: String
                }
            }]
        }],
        featured_work: {
            research_articles: [{
                article_id: {
                    type: String
                },
                article_link: {
                    type: String
                },
                img_url: {
                    type: String
                },
                title: {
                    type: String
                }
            }],
            book_chapters: [{
                title: {
                    type: String
                },
                description: {
                    type: String
                },
                img_url: {
                    type: String
                }
            }]
        },
        funding_collaboration: {
            funding: {
                current_projects: [{
                    title: {
                        type: String
                    },
                    funding_agency: {
                        type: String
                    },
                    duration: {
                        type: String
                    },
                    amount: {
                        type: String
                    }
                }],
                completed_projects: [{
                    title: {
                        type: String
                    },
                    funding_agency: {
                        type: String
                    },
                    duration: {
                        type: String
                    },
                    amount: {
                        type: String
                    }
                }]
            },
            collaboration: [{
                collaborator: {
                    type: String
                }    
            }]
        }
},
{ collection: 'research'})

module.exports = mongoose.model('research', researchSchema)