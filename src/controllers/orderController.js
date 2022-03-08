const order = require('../models/orderModel')
const UserModel= require("../models/userModel")
const productModel= require("../models/productModel")
const userModel = require('../models/userModel')
const orderModel = require('../models/orderModel')

const createPurchase = async function(req,res){
    const data = req.body
    const usersId = req.body.userId
    const productsId = req.body.productId
    if(!usersId) res.send('please provide userid')
    const userDetails = await UserModel.findById(usersId)
    if(!userDetails) res.send('No user exist with this id')
    if(!productsId) res.send('please provide product id')
    const productDetail = await productModel.findById(productsId)
    if(!productDetail) res.send('no product is found with these id')
    

    const saveIsFree = await userModel.findById(usersId)
    const checkingSubscribtion =saveIsFree.isFreeAppUser
    if(checkingSubscribtion==true){
     data.amount = 0
     data.isFreeAppUser=true

    }
    else{
        const amountofProduct = await productModel.findById(productsId)
        const takingPrice = amountofProduct.prices   // product price store here
        const u_balance = await userModel.findById(usersId)
        const balances = u_balance.balance     // user balance store here
        if(takingPrice>balances){
            res.send('insufficent amount')
        }
        else{
            data.amount = takingPrice
            await userModel.findByIdAndUpdate({_id:usersId},{$inc:{balance:-takingPrice}},{new:true})
        }
        const cleardata = await orderModel.create(data)
        res.send({orderList:data})

    }





    const savedData = await order.create(data)
    res.send({msg:savedData})

}


module.exports.createPurchase=createPurchase