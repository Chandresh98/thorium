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


// router.get("/getBooksData", bookController.getBooksData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

module.exports = router;