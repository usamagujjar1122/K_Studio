const mongoose = require('mongoose')

const msgsModel = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
    },
    subject:{
        type:String,
    },
    msg:{
        type:String,
        require:true
    },
    status:{
        type:String,
        require:true
    },
    createdat:{
        type:Date,
        default:Date.now
    }
})

const Msgs = mongoose.model('Msgs',msgsModel)

module.exports = Msgs