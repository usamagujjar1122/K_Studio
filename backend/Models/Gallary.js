const mongoose = require('mongoose')

const galleryModel = new mongoose.Schema({
    img:{
        type:String,
        require:true
    },
    value:{
        type:String,
        require:true
    },
    createdat:{
        type:Date,
        default:Date.now
    }
})

const Gallery = mongoose.model('Gallery',galleryModel)

module.exports = Gallery