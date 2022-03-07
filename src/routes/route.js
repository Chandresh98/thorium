const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const productController= require("../controllers/productController")
const isFreeApp = require("../middlewear/isfreeapp")
const orderController = require('../controllers/orderController')



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createProduct", productController.createProduct)

router.post("/createUser",isFreeApp.isFreeAppUser, UserController.createUser  )

router.post('/createPurchease',isFreeApp.isFreeAppUser, orderController.createPurchase )
module.exports = router;