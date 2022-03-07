const mongoose = require('mongoose')
const idStore = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({
    userId:{
        type:idStore,
        ref:"userlibaray"
    },
    productId:{
        type:idStore,
        ref:"product"
    },
    amount:{type:Number,
    default:0},
    isFreeAppUser:Boolean,
    date:{
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model('order', orderSchema)