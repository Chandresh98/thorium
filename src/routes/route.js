const express = require('express');
const router = express.Router();
const bookSchema= require("../models/userModel.js")
// const UserController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

router.post("/bookSchema",async function (req, res) {
    let data = req.body
    let savedData= await bookSchema.create(data)
    res.send({msg: savedData})
})

router.get("/bookSchemaList", async function (req, res) {
    let  allBook= await bookSchema.find()
    res.send({msg: allBook})
})

module.exports = router;