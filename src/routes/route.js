const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const middle =require('../middlewear/middle')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser",middle.mid, UserController.createUser  )

router.get("/getUsersData",middle.mid, UserController.getUsersData)

router.post("/createBook",middle.mid, BookController.createBook  )

router.get("/getBooksData",middle.mid, BookController.getBooksData)

router.post("/updateBooks",middle.mid, BookController.updateBooks)
router.post("/deleteBooks",middle.mid, BookController.deleteBooks)

router.get('/loged',middle.mid, UserController.getUsersData)  
  

//MOMENT JS
// const moment = require('moment');
// router.get("/dateManipulations", function (req, res) {
    
//     // const today = moment();
//     // let x= today.add(10, "days")

//     // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
//     // console.log(validOrNot)
    
//     const dateA = moment('01-01-1900', 'DD-MM-YYYY');
//     const dateB = moment('01-01-2000', 'DD-MM-YYYY');

//     let x= dateB.diff(dateA, "days")
//     console.log(x)

//     res.send({ msg: "all good"})
// })

module.exports = router;