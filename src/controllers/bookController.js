const { count } = require("console")
const { send } = require("process")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    let authorId = book.author
    let publisherId = book.publisher

    //validation a
    if(!authorId) return res.send('The request is not valid as the author details are required.')

    //validation b
    let author = await authorModel.findById(authorId)
    if(!author) return res.send('The request is not valid as no author is present with the given author id')

    //validation c
    if(!publisherId) return res.send('The request is not valid as the publisher details are required.') 

    //validation d
    let publisher = await publisherModel.findById(publisherId)
    if(!publisher) return res.send('The request is not valid as no publisher is present with the given publisher id')

    let bookCreated = await bookModel.create(book)
    return res.send({data: bookCreated})
}

const getBooks= async function (req, res) {
    let books = await bookModel.find().populate('author publisher')
    res.send({data: books})
}

const changeHover = async function(req,res){
    const findData = await publisherModel.find({name:{$in:['Penguin','HarperCollins']}})
    const ids = findData.map((p)=>p._id)
     await bookModel.updateMany({publisher:{$in:ids}},{isHardCover:true},{new:true})
     const change = await bookModel.find({publisher:ids})
    res.send({changeData:change}) }

    const upadatePrice = async function(req,res){
        const findData = await authorModel.find({rating:{$gt:3.5}})
        const ids = findData.map((p)=>p._id)
        

        await bookModel.updateMany({author:{$in:ids}},{$inc:{price:10}},{new:true})
        const changeprice =await bookModel.find({author:ids})


        res.send({msg:changeprice})

    }
    
module.exports.createBook= createBook
module.exports.getBooks= getBooks
module.exports.changeHover= changeHover
module.exports.upadatePrice = upadatePrice
