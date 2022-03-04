const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController= require("../controllers/publisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// . Write a POST api that creates an author from the details in request body
router.post("/createUser", authorController.createAuthor  )


// . Write a POST api that creates a publisher from the details in the request body
router.post("/createpublisher", publisherController.createPublisher)

// Write a POST api that creates a book from the details in the request body.
//  The api takes both the author and publisher from the request body. 
router.get("/createBook", bookController.createBook )

// Write a GET api that fetches all the books along with their author details (you have to populate for this) 
// as well the publisher details (you have to populate for this)

router.get("/getBooks", bookController.getBooks)

// a) Add a new boolean attribute in book schema called isHardCover with a default 
// false value. For the books published by 'Penguin' and 'HarperCollins', update this key to true.

router.put("/udatehover", bookController.changeHover)

// b) For the books written by authors having a rating greater than 3.5,
//  update the books price by 10 (For eg if old price for such a book is 50, new will be 60) 


router.put("/changeprice", bookController.upadatePrice)

module.exports = router;