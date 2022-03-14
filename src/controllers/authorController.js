// (1) ### Author APIs /authors
const authorModel = require("../models/authorModel");
const author = async function(req,res){
    try{
        let data =req.body;
        console.log("author",data);
        if (Object.keys(data).length != 0) {
            let savedData = await authorModel.create(data);
            res.status(201).send({ msg: savedData });
          }
          else {
            res.status(400).send({ msg: "BAD REQUEST" })
          }
    }catch(err){
    res.status(500).send({status:false ,Error:err});
}
}


module.exports.author = author;