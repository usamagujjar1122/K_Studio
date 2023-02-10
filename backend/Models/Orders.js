const mongoose = require('mongoose')

const ordersModel = new mongoose.Schema({
    value:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true,
    },
    status:{
        type:String,
        require:true,
    },
    time:{
        type:String,
        require:true
    },
    id:{
        type:String,
        require:true
    },
    fullname:{
        type:String,
        require:true
    },
    createdat:{
        type:Date,
        default:Date.now
    }

})

const Orders = mongoose.model('Orders',ordersModel)

module.exports = Orders