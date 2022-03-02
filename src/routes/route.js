const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const authorController = require("../controllers/authorController")
const BookController = require("../controllers/bookController")
const authorModel = require("../models/authorModel");
const bookModel = require('../models/bookModel');

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// Write create APIs for both books and authors-- -> If author_id is not available then do not accept the 
// entry(in neither the author collection nor the books collection)

router.post("/createUser", authorController.createUser)
router.post("/createBook", BookController.createBook)
router.get("/getUsersData", authorController.getUsersData)
router.get("/getBooksData", BookController.getBooksData)
 //  List out the books written by "Chetan Bhagat"(this will need 2 DB queries one after another - first
//  query will find the author_id for "Chetan Bhagat”. Then next query will get the list of books with that
//   author_id )

router.get("/findBookByAuthor", BookController.findBook)

// find the author of “Two states” and update the book price to 100;  Send back the author_name and 
// updated price in response.  ( This will also need 2  queries- 1st will be a findOneAndUpdate. 
// The second will be a find query aith author_id from previous query)


router.get("/updateprice", authorController.updateData)



// router.post("/updateBooks", BookController.updateBooks)
// router.post("/deleteBooks", BookController.deleteBooks)

//MOMENT JS
// const moment = require('moment');
// router.get("/dateManipulations", function (req, res) {

// const today = moment();
// let x= today.add(10, "days")

// let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
// console.log(validOrNot)

// const dateA = moment('01-01-1900', 'DD-MM-YYYY');
// const dateB = moment('01-01-2000', 'DD-MM-YYYY');

// let x= dateB.diff(dateA, "days")
// console.log(x)

// res.send({ msg: "all good"})
// })

module.exports = router;