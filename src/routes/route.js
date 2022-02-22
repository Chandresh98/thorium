const logger = require('../logger/logger')
const obj1 = require('../util/helper')
const change = require('../validator/formatter')
const _ = require('lodash')
const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    logger.welcome()
    obj1.datePrint()
    change.trimName()
    change.changeCase()
    res.send('My first ever api!')
});

const month = ["jan", "feb", "march", "april", "may", "june", "july", "august", "sep", "oct", "nov", "dec"]
const oddNumber = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
const duplicate = [5, 7, 5, 9, 7]
const objec =  [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
router.get('/hello', function (req, res) {
    const sub4 = _.chunk(month, 4)
    console.log(sub4)
    const lastNine = _.tail(oddNumber)
    console.log(lastNine)
    const unionQ = _.union(duplicate)
    console.log(unionQ)
    const arrange = _.fromPairs(objec)
    console.log(arrange)
    res.send('this is hello')
})

module.exports = router;