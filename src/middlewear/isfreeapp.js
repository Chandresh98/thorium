const express = require('express');
const router = express.Router();

const isFreeAppUser = function(req,res,next){
    const data = req.headers.isfreeappuser
    if(data==undefined) res.send('the request is missing a mandatory header')
    next()
    
req.body.isFreeAppUser = Boolean(data)}

//     if(data!= undefined ) {
//         console.log("iam in middleware")
//         next()
//     }else{
//          return res.send('the request is missing a mandatory header')
//     }
// } 
module.exports.isFreeAppUser = isFreeAppUser