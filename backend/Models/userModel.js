const mongoose = require('mongoose')

const userModel = new mongoose.Schema({
    fullname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    address:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    createdat:{
        type:Date,
        default:Date.now
    }

})

const User = mongoose.model('Users',userModel)

module.exports = User