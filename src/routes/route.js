const express = require('express');
const router = express.Router();


let players =
    [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
                "swimming"
            ],
            "bookings": [
                {
                    "bookingNumber": 1,
                    "sportId": "",
                    "centerId": "",
                    "type": "private",
                    "slot": '16286598000000',
                    "bookedOn": '31/08/2021',
                    "bookedFor": '01/09/2021'
                },
                {
                    "bookingNumber": 2,
                    "sportId": "",
                    "centerId": "",
                    "type": "private",
                    "slot": '16286518000000',
                    "bookedOn": '31/08/2001',
                    "bookedFor": '01/09/2001'
                },
            ]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ],
            "bookings": []
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ],
            "bookings": []
        },
    ]

router.post('/players', function (req, res) {
    for (let i = 0; i < players.length; i++) {
        if (players[i].name == req.body.name) {
            res.send({ masg: "played already exist" })
        }
    }
    players.push(req.body)
    res.send({ data: players, status: true })
})

router.post('/players/:playerName/bookings/:bookingId', function (req, res) {
    const playerName = req.params.playerName
    const bookingId = req.params.bookingId
    for (let i = 0; i < players.length; i++) {
        if (players[i].name != playerName) {
            for (let j = 0; j < players.bookings.length; j++) {
                if (players.bookings[j].bookingNumber != bookingId) {
                    players.push(req.body)
                }

            }
        }
    }
    for(let k = 0;k<players.length;k++){
        if(players[k].name==playerName)
        res.send({msg:'present player'})
    }
    for(let p=o;p<players.length;p++){
        if(players[p].name!=playerName){
            for(let u=0;u<players.bookings.length;u++){
                if(players.bookings[u].bookingNumber==bookingId){
                          res.send({msg:'booking number present'})
                }
            }
        }
    }
    //LOGIC WILL COME HER
    res.send({ data: players, status: true })

})

router.get('/students/:name', function (req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random", function (req, res) {
    res.send("hi there")
})


router.get("/test-api", function (req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2", function (req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3", function (req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4", function (req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5", function (req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6", function (req, res) {
    res.send({ a: 56, b: 45 })
})

router.post("/test-post", function (req, res) {
    res.send([23, 45, 6])
})


router.post("/test-post-2", function (req, res) {
    res.send({ msg: "hi", status: true })
})

router.post("/test-post-3", function (req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log(req.body)

    res.send({ msg: "hi", status: true })
})



router.post("/test-post-4", function (req, res) {
    let arr = [12, "functionup"]
    let ele = req.body.element
    arr.push(ele)
    res.send({ msg: arr, status: true })
})

module.exports = router;




